---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus
url: "https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus"
duration_minutes: 307
duration: 5h 7m
level: Intermediate
updated: 1/24/2025
learners: 23886
skills:
  - Concurrent Programming
  - C++
  - Parallel Programming
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEnCWmh3NCa-g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736554366422?e=2147483647&amp;v=beta&amp;t=xJ9SrMbcj1y53RO3qsBAn07oMF3RpKhjs9n8I3BjH7c"
linkedin_topic: DevOps
learning_paths:
  - '[Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)'
prev_courses:
  - '[Complete Guide To C Plus Plus Programming Foundations](../Software%20Development/Complete%20Guide%20To%20C%20Plus%20Plus%20Programming%20Foundations.md)'
next_courses:
  - '[Test-Driven Development in C++](Test-Driven%20Development%20in%20C%2B%2B.md)'
path_nav: '[{"path":"Master C++","position":2,"total":6,"prev":"Complete Guide To C Plus Plus Programming Foundations","next":"Test-Driven Development in C++"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/concurrent-programming
  - skill/c
  - skill/parallel-programming
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Complete%20Guide%20to%20Parallel%20and%20Concurrent%20Programming%20with%20C%2B%2B.md)

![Complete Guide to Parallel and Concurrent Programming with C++](https://media.licdn.com/dms/image/v2/D4D0DAQEnCWmh3NCa-g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736554366422?e=2147483647&amp;v=beta&amp;t=xJ9SrMbcj1y53RO3qsBAn07oMF3RpKhjs9n8I3BjH7c)

# Complete Guide to Parallel and Concurrent Programming with C++

> Parallel programming unlocks a program’s ability to execute multiple instructions simultaneously, increases the overall processing throughput, and is key to writing faster and more efficient applications. In this course, join instructors Barron and Olivia Chiu Stone as they introduce the basics of parallel and concurrent programming in C++, providing the foundational knowledge you need to write mo

> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus) | 5h 7m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn parallel programming basics](#learn-parallel-programming-basics)
  - [What you should know](#what-you-should-know)
  - [Installing Cygwin and Visual Studio Code](#installing-cygwin-and-visual-studio-code)
- [**1. Parallel Computing Hardware**](#1-parallel-computing-hardware) (3 videos)
  - [Sequential vs. parallel computing](#sequential-vs-parallel-computing)
  - [Parallel computing architectures](#parallel-computing-architectures)
  - [Shared versus distributed memory](#shared-versus-distributed-memory)
- [**2. Threads and Processes**](#2-threads-and-processes) (9 videos)
  - [Thread versus process](#thread-versus-process)
  - [Thread versus process: C++ demo](#thread-versus-process-c-demo)
  - [Concurrent versus parallel execution](#concurrent-versus-parallel-execution)
  - [Execution scheduling](#execution-scheduling)
  - [Execution scheduling: C++ demo](#execution-scheduling-c-demo)
  - [Thread life cycle](#thread-life-cycle)
  - [Thread life cycle: C++ demo](#thread-life-cycle-c-demo)
  - [Detached thread](#detached-thread)
  - [Detached thread: C++ demo](#detached-thread-c-demo)
- [**3. Mutual Exclusion**](#3-mutual-exclusion) (5 videos)
  - [Data race](#data-race)
  - [Data race: C++ demo](#data-race-c-demo)
  - [Mutual exclusion](#mutual-exclusion)
  - [Mutual exclusion: C++ demo](#mutual-exclusion-c-demo)
  - [Atomic objects: C++ demo](#atomic-objects-c-demo)
- [**4. Locks**](#4-locks) (6 videos)
  - [Recursive mutex](#recursive-mutex)
  - [Recursive mutex: C++ demo](#recursive-mutex-c-demo)
  - [Try lock](#try-lock)
  - [Try lock: C++ demo](#try-lock-c-demo)
  - [Shared mutex](#shared-mutex)
  - [Shared mutex: C++ demo](#shared-mutex-c-demo)
- [**5. Liveness**](#5-liveness) (8 videos)
  - [Deadlock](#deadlock)
  - [Deadlock: C++ demo](#deadlock-c-demo)
  - [Abandoned lock](#abandoned-lock)
  - [Abandoned lock: C++ demo](#abandoned-lock-c-demo)
  - [Starvation](#starvation)
  - [Starvation: C++ demo](#starvation-c-demo)
  - [Livelock](#livelock)
  - [Livelock: C++ demo](#livelock-c-demo)
- [**6. Synchronization**](#6-synchronization) (6 videos)
  - [Condition variable](#condition-variable)
  - [Condition variable: C++ demo](#condition-variable-c-demo)
  - [Producer-consumer](#producer-consumer)
  - [Producer-consumer: C++ demo](#producer-consumer-c-demo)
  - [Semaphore](#semaphore)
  - [Semaphore: C++ demo](#semaphore-c-demo)
- [**7. Barriers**](#7-barriers) (5 videos)
  - [Race condition](#race-condition)
  - [Race condition: C++ demo](#race-condition-c-demo)
  - [Barrier](#barrier)
  - [Barrier: C++ demo](#barrier-c-demo)
  - [Latch: C++ demo](#latch-c-demo)
- [**8. Asynchronous Tasks**](#8-asynchronous-tasks) (7 videos)
  - [Computational graph](#computational-graph)
  - [Thread pool](#thread-pool)
  - [Thread pool: C++ demo](#thread-pool-c-demo)
  - [Future](#future)
  - [Future: C++ demo](#future-c-demo)
  - [Divide and conquer](#divide-and-conquer)
  - [Divide and conquer: C++ demo](#divide-and-conquer-c-demo)
- [**9. Evaluating Parallel Performance**](#9-evaluating-parallel-performance) (4 videos)
  - [Speedup, latency, and throughput](#speedup-latency-and-throughput)
  - [Amdahl's law](#amdahls-law)
  - [Measure speedup](#measure-speedup)
  - [Measure speedup: C++ demo](#measure-speedup-c-demo)
- [**10. Designing Parallel Programs**](#10-designing-parallel-programs) (4 videos)
  - [Partitioning](#partitioning)
  - [Communication](#communication)
  - [Agglomeration](#agglomeration)
  - [Mapping](#mapping)
- [**11. Challenge Problems**](#11-challenge-problems) (7 videos)
  - [Welcome to the challenges!](#welcome-to-the-challenges)
  - [Challenge: Matrix multiply](#challenge-matrix-multiply)
  - [Solution: Matrix multiply](#solution-matrix-multiply)
  - [Challenge: Merge sort](#challenge-merge-sort)
  - [Solution: Merge sort](#solution-merge-sort)
  - [Challenge: Download images](#challenge-download-images)
  - [Solution: Download images](#solution-download-images)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn parallel programming basics](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=0)** - There's an old saying that two heads are better than one.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=4)** - Well, when it comes to [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md), I say two threads are better than one. I'm Barron Stone.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=12)** - And I'm Olivia Stone. In this course, we'll introduce you to the fundamental concepts for concurrent and parallel programming.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=19)** - These are the basic mechanisms you need to develop programs that can do multiple things at once to take advantage of multi-core processors and parallel [Hardware](../../Topics/Hardware.md).
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=29)** - [Olivia] We'll focus on the general concepts and relate them back to everyday activities in the kitchen to make those ideas easier to understand and have some fun.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=37)** - Then, to help cement those abstract ideas, we'll demonstrate them in action using the C++ programming language. If you're new to concurrent and parallel programming, this is a great place to start.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/learn-parallel-programming-basics?u=76281980&t=49)** - [Barron And Olivia] Let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (3), [Hardware](../../Topics/Hardware.md) (1)
> **Speakers:** - there (1), - well (1), - and (1), - these (1), - [olivia] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [What you should know](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/what-you-should-know?u=76281980&t=1)** - The purpose of this course is to give beginner and intermediate programmers a basic understanding of how to write concurrent and parallel programs. To get the most out of it, you should have some programming experience, but you don't need to be an expert. The videos of us working in the kitchen will demonstrate the key concepts in general terms. And then, in the C++ code examples, I'll explain the unique terminology and nuances that make C++ different than other programming languages.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/what-you-should-know?u=76281980&t=30)** - If you're interested in concurrent and [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) in other languages, be on the lookout for different versions of this course. You'll find the same general concept videos, but we'll show you the example code in another programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - the (1), - if (1)

#### [Installing Cygwin and Visual Studio Code](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/installing-cygwin-and-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/installing-cygwin-and-visual-studio-code?u=76281980&t=1)** - [Instructor] For the C++ demonstrations throughout this course, we'll be using GCC and the make utility to compile and link our example programs, specifically G++ version 7.4.0, and make 4.2.1. If you plan to use a different compiler, make sure it supports the C++ 17 standard to follow along. We'll be using Cygwin to emulate a Unix-like Posix-compliant environment on our [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) computer. If you'll be using Cygwin as well to follow along, use the Cygwin Setup utility to install the GCC-G++ and make packages, and add the Cygwin bin directory to your [Windows](../../Glossary/Service/Windows.md) system path. Finally, to edit our source files, we'll be using Visual Studio Code, but feel free to use any code editor that you're already comfortable using. We've written each of the code examples as a single CPP source file, which can be found in the corresponding directory of the downloadable exercise files. For most of the videos, we'll provide you with a beginning state, the code at the beginning of the video, as well as an end state after we've made modifications. We've also included a make file with each of the examples which you can use to compile and link the example code. Though keep in mind, you may need to modify the contents of the make file if your development environment is configured differently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (6)
> **Env Vars:** gcc (2), cpp (1)
> **Versions:** version 7 (1), 4.0 (1), 4.2.1 (1)
> **Prerequisites:** setup (1), install (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)


### 1. Parallel Computing Hardware

[↑ Back to Table of Contents](#table-of-contents)

#### [Sequential vs. parallel computing](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=1)** - Let's start by looking at what parallel computing means and why it's useful. Why it's worth the extra effort to write parallel code. A computer program is just a list of instructions that tells a computer what to do, like the steps in a recipe that tell me what to do when I'm cooking. Like a computer, I simply follow those instructions to execute the program. So, to execute the program or recipe to make a salad, I'll start by chopping some lettuce and putting it on a plate. (lettuce crunching) (knife thudding) Then I'll slice up a cucumber and add it. (knife thudding) Next, I'll slice and add a few chunks of tomato. (knife scratching) (knife rattling) I'll try not to cry while I slice the onion. (knife thudding) (knife rattling) And finally, I add the dressing. Done. As a single cook working alone in the kitchen, I'm a single processor executing this program in a sequential manner. The program is broken down into a sequence of discreet instructions that I execute one after another, and I can only execute one instruction at any given moment. There's no overlap between them. This type of serial or sequential programming
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=95)** is how software has traditionally been written, and it's how new programmers are usually taught to code because it's easy to understand, but it has its limitations. The time it takes for a sequential program to run is limited by the speed of the processor and how fast it can execute that series of instructions. I'll slice and chop ingredients as fast as I can, but there's a limit to how quickly I can complete all of those tasks by myself. Each step takes some amount of time, and in total, it takes me about three minutes to execute this program and make a salad. That's my personal speed record, and I can't make a salad any faster than that without help.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=137)** - That's my cue. (board rattling) Two cooks in the kitchen represent a system with multiple processors. Now we can break down the salad recipe and execute some of those steps in parallel.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=148)** - While I chop the lettuce. - I'll slice the cucumber. (knives rattling)
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=155)** - And when I'm done chopping lettuce, I'll slice the tomatoes
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=158)** - And I'll chop the onion. (knife thudding)
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=163)** - And finally I'll add some dressing.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=165)** - Hold on. Now it's ready.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=169)** - Finally, the dressing.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=173)** - Working together, we broke the recipe into independent parts that can be executed simultaneously by different processors. While I was slicing cucumbers and onions, Baron was chopping lettuce and tomatoes. That final step of adding dressing was dependent on all of the previous steps being done, so we had to coordinate with each other for that step. By working together in parallel, it only took us two minutes to make the salad, which is faster than the three minutes it took Baron to do it alone. Adding a second cook in the kitchen doesn't necessarily mean we'll make the salad twice as fast, because having extra cooks in the kitchen adds complexity. We have to spend extra effort to communicate with each other to coordinate our actions.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=215)** - And there might be times when one of us has to wait for the other cook to finish a certain step before we continue on. Those coordination challenges are part of what make writing parallel programs harder than simple sequential programs. But that extra work can be worth the effort because when done right, parallel execution increases the overall throughput of a program, enabling us to break down large tasks to accomplish them faster, or to accomplish more tasks in a given amount of time. Some computing problems are so large or complex that it's not practical or even possible to solve them with a single computer. Web search engines that process millions of transactions every second are only possible thanks to parallel computing.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/sequential-vs-parallel-computing?u=76281980&t=260)** - In many industries, the time saved using parallel computing also leads to saving money. The advantages of being able to solve a problem faster often outweighs a cost of investing in parallel computing [Hardware](../../Topics/Hardware.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Speakers:** - and (4), - let (1), - that (1), - while (1), - hold (1)
> **CLI Commands:** make (6)

#### [Parallel computing architectures](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=0)** - Parallel computing requires parallel [Hardware](../../Topics/Hardware.md) with multiple processors to execute different parts of a program at the same time. But before you dive into writing software, it helps to understand how different types of parallel computers are structured. One of the most widely used systems for classifying multiprocessor architectures is Flynn's Taxonomy, which distinguishes four classes of computer architecture based on two factors: The number of concurrent instruction, or control streams, and the number of data streams. The class names are usually written as four letter acronyms that indicate whether they have single or multiple instruction streams and data streams. For example, SIMD stands for Single Instruction Multiple Data. The simplest of these four classes is the Single Instruction, Single Data, or SISD architecture, which is a sequential computer with a single processor unit. If I'm an SISD computer, at any given time, I can only execute one series of instructions, such as chopping, and I can only act on one element of data at a time, this carrot. (knife clanging)
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=75)** - It's simple like an old computer. The next class in Flynn's Taxonomy is Single Instruction, Multiple Data, or SIMD, which is a type of parallel computer with multiple processing units. All of its processors execute the same instruction at any given time. But they can each operate on different data element. As an SIMD computer, our two processors are both executing the same chopping instruction, but I'm chopping celery as my data while Baron chops a carrot.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=108)** - And we'll execute those instructions in sync with each other. (knives clanging) This type of SIMD architecture is well-suited for applications that perform the same handful of operations on a massive set of data elements, like [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md). And most modern computers use Graphic Processing Units, or GPUs, with SIMD instructions to do just that. Our third class is the opposite of SIMD. In a Multiple Instruction, Single Data, or MISD architecture, each processing unit independently executes its own separate series of instructions. However, all of those processors are operating on the same single stream of data. That's like Olivia executing the chopping instruction while I execute a different peeling instruction. But we're both chopping and peeling the same carrot at the same time.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=166)** - Yeah, we're not doing that.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=168)** - As you can see, MISD doesn't make much practical sense, so it's not a commonly used architecture.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=175)** - But our fourth and final architecture is. In a Multiple Instruction, Multiple Data, or MIMD computer, every processing unit can be executing a different series of instructions, and at the same time, each of those processors can be operating on a different set of data. Now, I can slice celery while Baron peel's carrots.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=199)** - MIMD is the most commonly used architecture in Flynn's Taxonomy, and you'll find it in everything from multi-core PCs to network clusters and supercomputers. Now, that broad MIMD category is sometimes further subdivided into two [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) models, which also have four letter names. Single Program, Multiple Data, or SPMD, and Multiple Program Multiple Data, MPMD. In the SPMD model, multiple processing units are executing a copy of the same single program simultaneously. However, they can each use different data. That might sound a lot like the SIMD architecture from earlier, but it's different because, although each processor is executing the same program, they do not have to be executing the same instruction at the same time. The processors can run asynchronously, and the program usually includes conditional logic that allows different tasks within the program to only execute specific parts of the overall program. If Olivia and I are both following the same recipe or program, I can execute part of it while Olivia's processor handles a different task. This SPMD model is the most common style of parallel programming. and when we show you programming examples later in this course, we'll structure the code as a single program and execute it on a multi-core desktop computer, which is an MIMD architecture.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/parallel-computing-architectures?u=76281980&t=292)** - Now, if each of our processors is executing a different recipe, that represents the Multiple Program, Multiple Data, or MPMD model. In this scenario, processors can be executing different independent programs at the same time while, of course, also be operating on different data. Typically, in this model, one processing node will be selected as the host or manager, which runs one program that farms out data to the other nodes running a second program. Those other nodes do their work and return their results to the manager. MPMD is not as common as SPMD, but it can be useful for some applications that lend themselves to functional decomposition, which we'll cover later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1)
> **Env Vars:** simd (7), mimd (4), spmd (4), mpmd (3), sisd (2)
> **Speakers:** - parallel (1), - it (1), - and (1), - yeah (1), - as (1)
> **CLI Commands:** make (1), find (1), node (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)

#### [Shared versus distributed memory](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=0)** - In addition to a parallel computer's architecture, which can be categorized using Flynn's taxonomy, another aspect to consider is... Uh. (snaps)
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=12)** - Memory. It's important to understand how the memory's organized and how the computer accesses data.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=18)** - Right. You could put a billion processors in a computer, but if they can't access memory fast enough to get the instructions and data they need, then you won't gain anything from having all those processors. Computer memory usually operates at a much slower speed than processors do, and when one processor is reading or writing to memory, that often prevents any other processors from accessing that same memory element. There are two main memory architectures that exist for parallel computing, shared memory and distributed memory. In a shared memory system, all processors have access to the same memory as part of a global address space. Although each processor operates independently, if one processor changes a memory location, all of the other processors will see that change. So, if I change something in our shared memory space...
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=71)** - Hey, that potato is two potatoes.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=74)** - Every other processor sees that change too. Now, the term shared memory doesn't necessarily mean all of this data exists on the same physical device. It could be spread across a cluster of systems. The key is that both of our processors see everything that happens in the shared memory space. Shared memory is often classified into one of two categories, uniform memory access and non-uniform memory access, which are based on how the processors are connected to memory and how quickly they can access it. In a uniform memory access, or UMA system, all of the processors have equal access to the memory, meaning they can access it equally fast. There are several types of UMA architectures, but the most common is a symmetric multi-processing system, or SMP. An SMP system has two or more identical processors, which are connected to a single shared memory, often through a system bus. In the case of modern multi-core processors, which you find in everything from desktop computers to cell phones, each of the processing cores are treated as a separate processor. For this course, we'll be focused on [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) within the SMP architecture. In the example code we show you, we'll be running on a multi-core desktop computer. Now in most modern processors, each core has its own cache, which is a small, very fast piece of memory that only it can see, and it uses it to store data
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=166)** that it's frequently working with. However, caches introduce the challenge that if one processor copies a value from the shared main memory and then makes a change to it in its local cache, then that change needs to be updated back in the shared memory before another processor reads the old value which is no longer current. This issue, called cache coherency, is handled by the [Hardware](../../Topics/Hardware.md) in multi-core processors, so we will not go into detail on it for this course, but it's something you should be aware of if you find yourself working with larger, more complex parallel computing systems. The other type of shared memory is a non-uniform memory access, or NUMA system, which is often made by physically connecting multiple SMP systems together. The access is non-uniform because some processors will have quicker access to certain parts of memory than others. It takes longer to access things over the bus. But overall, every processor can still see everything in memory. These shared memory architectures have the advantage of being easier for programming in regards to memory because it's easy to share data between different parts of a parallel program. The downside is that they don't always scale well. Adding more processors to a shared memory system will increase traffic on the shared memory bus. And if you factor in maintaining cache coherency, it becomes a lot of communication that needs to happen between all the parts. In addition to that, shared memory puts responsibility on the programmer
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=259)** to synchronize memory accesses to ensure correct behavior. But, we'll look into that later.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=265)** - Okay, that's enough about shared memory. In a distributed memory system, each processor has its own local memory with its own address space, so the concept of a global address space doesn't exist. All of the processors are connected through some sort of network, which can be as simple as ethernet. Each processor operates independently, and if it makes changes to its local memory, that change is not automatically reflected in the memory of other processors. If I make a change to the data in my memory, Baron's processor is oblivious to that change. It's up to the programmer to explicitly define how and when data is communicated between the nodes in a distributed system, and that's often a disadvantage.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=312)** - Communication is always tough.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=314)** - The advantage of a distributed memory architecture is that it's scalable. When you add more processors to the system, you get more memory too. This structure makes it cost effective to use commodity, off the shelf computers, and networking equipment to build large distributed memory systems. Most supercomputers use some form of distributed memory architecture or a hybrid of distributed and shared memory.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-versus-distributed-memory?u=76281980&t=340)** - But for this course, we'll stick with simple shared memory in an SMP architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Speakers:** - in (1), - memory (1), - right (1), - hey (1), - every (1)
> **Env Vars:** smp (5), uma (2), numa (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Best Practices:** the key is (1)
> **Warnings:** be aware (1)


### 2. Threads and Processes

[↑ Back to Table of Contents](#table-of-contents)

#### [Thread versus process](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=0)** - When a computer runs an application, that instance of the program executing is referred to as a process. A process consists of the program's code, its data, and information about its state. Each process is independent and has its own separate address space and memory. A computer can have hundreds of active processes at once, and an operating system's job is to manage all of them.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=27)** - Now, within every process, there are one or more smaller sub-elements called threads. These are kind of like tiny processes. Each of those threads is an independent path of execution through the program, a different sequence of instructions, and they can only exist as part of a process. Threads are the basic units that the operating system manages, and it allocates time on the processor to actually execute them.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=54)** - To conceptualize the relationship between a process and its threads, think of Olivia and I cooking together in the kitchen as being two threads executing as part of the same process.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=65)** - We both work independently doing our own tasks that contribute to the overall execution of our program. For example, if we are part of a process to make a salad, my thread might handle retrieving vegetables from the pantry and fridge.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=79)** - And I'll handle chopping them up. If the program requires other tasks, we might create additional threads to handle those too. Hey, Steve. - Hey.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=87)** - Can you make some salad dressing?
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=89)** - I sure can.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=90)** - Now, our salad making process has three active threads, and when one of those threads finishes executing its instructions,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=97)** - All done.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=100)** - it'll exit and leave the remaining threads to continue what they're doing.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=104)** - Threads that belong to the same process share the process's address space, which gives them access to the same resources in memory, including the program's executable code and data. You can think of the kitchen that our two threads are working in like the shared address space for our process. We both have direct access to the same cookbooks containing our instructions or code, and the ingredients that we're cooking with represents the data and variables we're manipulating. The ability for both of us to use these resources is certainly convenient, and it enables us to easily work together, but it does create the potential to cause problems if we don't coordinate our actions, as we'll see later in this course.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=146)** - Sharing resources between separate processes is not as easy as sharing between threads in the same process, because every process exists in its own address space, its own separate kitchen. In this process, our two threads are making a salad, but that other process next door is running a different program. Those threads are baking a cake.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=171)** - Our variables and data are isolated to this address space, this kitchen, so the threads in the other process can't directly access our salad data.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=180)** - Good, we don't want you healthy salad makers messing with our cake, either.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=186)** - There are ways to communicate and share data between processes, but it requires a bit more work than communicating between threads. You have to use system-provided interprocess communication mechanisms like sockets and pipes, allocating special interprocess shared memory space, or using remote procedure calls, which is beyond the scope of what we'll be discussing in this course.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=211)** - Now, it's possible to write parallel programs that use multiple processes working together towards a common goal, or using multiple threads within a single process.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=222)** - So, which is better, using multiple threads or multiple processes?
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process?u=76281980&t=226)** - Well, like most things in programming, it depends. It depends on what you're doing and the environment it's running in, because the implementation of threads and processes differs between operating systems and programming languages. If your application is going to be distributed across multiple computers, you'll most likely need separate processes for that. But as a rule of thumb, if you can structure your program to take advantage of multiple threads, stick with using threads rather than multiple processes. Threads are considered lightweight compared to processes, which are more resource intensive. A thread requires less overhead to create and terminate than a process, and it's usually faster for an operating system to switch between executing threads from the same process than to switch between different processes.

> [!info]- Semantic Content
>
> **Speakers:** - now (3), - when (1), - to (1), - we (1), - and (1)
> **CLI Commands:** make (2)
> **Analogies:** kind of like (1), for example (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)

#### [Thread versus process: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] Now, before we demonstrate a process with multiple threads in action, let's first take a look at the number of processors that are available on this computer, which we'll be using for demonstrations throughout this course. To do that, I'll press Ctrl + Shift + Esc, which opens the Task Manager, and then go to the Performance tab. Down at the bottom, we can see that this computer has two cores and four logical processors. Those numbers mean that this computer has two separate and complete physical processing cores, and each of those cores supports something called hyperthreading, which enables them to each run two independent threads at the same time. So the computer treats those two physical cores as four logical processors. Now, the hyperthreading in those two cores does not mean I'll get double the performance out of each of them. Hyperthreading takes advantage of unused parts of the processor, so if one thread is paused or not using a specific resource, then the other thread may be able to use it. Under certain workloads, that can create performance improvements, but it's highly application dependent. The moving blue graph shows the total percentage of CPU utilization for all of those processors. I don't have much running right now, so the usage stays low, down near just a few percent. If I want to see the CPU usage for each of those processors individually, I can get more information by clicking the Open Resource Monitor link and then selecting the CPU tab.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process-c-plus-plus-demo?u=76281980&t=98)** The charts on the right show the total CPU usage on top, and if I scroll down, I can see how much each of the individual processors on this computer are being utilized. The table on the left lists all of the current processes running on this computer with information including each processor's unique process ID number, it's PID, its current status, the number of threads, and its average CPU usage. Now, to show you a few threads running in a process, we've created this short example program, which you can find in the Exercise Files Chapter02 02_02 begin directory. This program defines a simple function on line 9 called cpu_waster, which can be used to create a new thread that spins in a while loop forever. It prints the process ID on line 10 using the getpid function, which is declared in the unistd header. And then on line 11, it uses the get_id function to print the current thread ID. After that, the cpu_waster enters into an infinite while loop. It's not doing anything useful, but the thread will stay alive forever and continuously use CPU cycles. Down in this program's main function, lines 16 and 17 print messages with the process ID and main thread's ID value. Then after that, the program instantiates two new threads. To create threads throughout this course, we'll be using the C++ Standard Libraries Thread class,
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process-c-plus-plus-demo?u=76281980&t=194)** which is defined in the thread header file. How threads are actually compiled and implemented under the hood can vary between operating systems, but by writing our code using the standard library classes, it should be portable to different development environments. The two new thread objects created on lines 18 and 19 named thread 1 and thread 2 are assigned the cpu_waster as their top level function to execute. After those two threads start, the main thread enters into its own infinite while loop on line 21 to keep the process alive. Now I'll switch over to a Command Prompt, open to a folder with the example code, and I'll use the make command to build the program. It warns me that the data type used to represent a thread ID may not be compatible with the printf function because it's not actually an integer data type, but for the sake of this demonstration, that's okay. The printf function will do its best to display the thread ID as a numeric value, which will be enough to at least see that the three threads in this program are different. Now, I'll run the executable, thread_process_demo.exe. I can see that the operating system assigned this program, the process ID number 232, and the main thread has an ID value represented by this number, 98368. The two cpu_waster threads that were created have the same process ID as the main thread, but they each have their own unique thread IDs.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-versus-process-c-plus-plus-demo?u=76281980&t=289)** Switching over to the Task Manager, I can see that the overall CPU usage has jumped to over 50%. That's because the two cpu_waster threads I created are running continuously and using CPU resources on half of the four logical processors on this computer. Looking at the Resource Monitor's CPU tab, I can see how that workload is being distributed across all of those processors. If I scroll down in the Processes window, I see a process called thread_process_demo.exe. Now, you may have noticed that it has a different process ID number than our program displayed earlier, and that's because we're using Cygwin to emulate a POSIX-compatible environment on our [Windows](../../Glossary/Service/Windows.md) computer. The process ID shown here in the Windows Resource Monitor is the ID that Windows assigned to the process, whereas the value the program printed out was the process ID it got from the Cygwin emulation environment. This program will continue running forever if I don't stop it, so I'll manually terminate it by closing the Command Prompt window that was running the program. If I look at the CPU usage now, I can see that when I closed the program, those cpu_wasting threads were terminated too, and the CPU usage dropped back down to just a few percent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3)
> **Env Vars:** cpu (11), pid (1), posix (1)
> **Code Identifiers:** cpu_waster (5), thread_process_demo (2), get_id (1), cpu_wasting (1)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** command prompt (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Concurrent versus parallel execution](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=1)** - Just because a program is structured to have multiple threads or processes does not mean they'll necessarily execute in parallel. A concept that's closely related to parallel execution but often gets confused with it is concurrency. Concurrency refers to the ability of an algorithm or program to be broken into different parts that can be executed out of order or partially out of order without affecting the end result. Concurrency is about how a program is structured and the composition of independently executing processes. Consider this recipe to make a salad, which includes several steps that involve slicing and chopping vegetables. We can decompose those steps into a collection of concurrent tasks because the relative order in which we do them doesn't matter. They're order independent. To keep things simple, let's just focus on two of those tasks for now. I'll chop onions.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=56)** - And I'll slice cucumbers. This knife represents our computer's processor. We only have one knife, so this is a single core processor and only one of us will be able to execute our vegetable chopping routine at any given time.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=70)** - We'll have to take turns, you go first.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=72)** - Thanks, my thread will use the processor to execute and slice some cucumbers. Then after a bit, we'll swap places.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=84)** - Now my thread gets some time to execute and slice onions.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=90)** - I want to slice now.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=92)** - So we'll swap places again and we'll keep on doing this until we're both done. In this scenario, we're running concurrently because our two independent processes overlap in time. However, since we only have a single processor, only one of us will actually be executing at any instant in time. If we swap places and take turns more frequently, it might create the illusion that we're executing simultaneously on our single processor, but this is not true parallel execution.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=125)** - To actually execute in parallel, we need parallel [Hardware](../../Topics/Hardware.md). In our kitchen, that means another knife and cutting board, a second processor. But in regards to computers, parallel hardware can come in a variety of [Forms](../../Skills/Web%20Development/Forms.md). Most modern processors used in things like desktop computers and cell phones have multiple processing cores. Graphics processing units or GPUs contain hundreds or even thousands of specialized cores working in parallel to make amazing graphics that you see on the screen. And computer clusters distribute their processing across multiple systems. Since we've structured ourselves as concurrent operations, I can begin slicing cucumbers with this processor.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=166)** - While I cut onions with the other one. Now we're actually executing in parallel because we're both executing at the same time, and as a result, we're able to finish the job faster. Concurrency is about the structure of a program, being able to deal with multiple things at once, whereas parallelism is about simultaneous execution, actually doing multiple things at once. Those things could be related like chopping vegetables, but they don't have to be. Concurrency enables a program to execute in parallel given the necessary hardware, but a concurrent program is not inherently parallel.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=207)** - And programs may not always benefit from parallel execution. For example, the software drivers that handle I/O devices like a mouse, keyboard, and hard drive need to execute concurrently. They're managed by the operating system as independent things that get executed as needed. In a multi-core system, the execution of those drivers might get split amongst the available processors. However, since I/O operations occur rather infrequently relative to the speed at which computer operates, we don't really gain anything from parallel execution. Those sparse independent tasks could run just fine on a single processor and we wouldn't feel a difference. [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) is useful for I/O dependent tasks like graphical user interfaces. When the user clicks a button to execute an operation, that might take a while. To avoid locking up the user interface until it's completed, we can run the operation in a separate concurrent thread. This leaves the thread that's running the UI free to accept new inputs.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/concurrent-versus-parallel-execution?u=76281980&t=268)** - That sort of I/O dependent task is a good use case for concurrency. Parallel processing really becomes useful for computationally intensive tasks, such as calculating the result of multiplying two matrices together. When large math operations can be divided into independent subparts, executing those parts in parallel on separate processors can really speed things up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) (1)
> **Speakers:** - and (2), - just (1), - we (1), - thanks (1), - now (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)

#### [Execution scheduling](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980&t=0)** - Threads don't just execute whenever they want to. A computer might have hundreds of processes with thousands of threads that all want their turn to run on just a handful of processors. So how do they decide who goes first?
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980&t=14)** - That's the operating system's job. The OS includes a scheduler that controls when different threads and processes get their turn to execute on the CPU. The scheduler makes it possible for multiple programs to run concurrently on a single processor. When a process is created and ready to run, it gets loaded into memory and placed in the ready queue. Think of these as cooks in the kitchen that are ready to work. The scheduler is like the head chef that tells the other cooks when they get to use the cutting board. It cycles through the ready processes so they get a chance to execute on the processor. If there are multiple processors, then the OS will schedule processes to run on each of them to make the most use of the additional resources. A process will run until it finishes, and then a scheduler will assign another process to execute on that processor. Or a process might get blocked and have to wait for an I/O event, in which case, they'll go into a separate I/O waiting queue so another process can run. Or the scheduler might determine that a process has spent its fair share of time on the processor and swap it out for another process from the ready queue. When that occurs, it's called a context switch. The operating system has to save the state or context of the process that was running, so it can be resumed later, and it has to load the context of the new process that's about to run. If I'm a process that's executing on this processor to chop cucumbers, when a scheduler decides it's time for a context switch, I'll need to pause what I'm doing
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980&t=109)** and store the state of that task.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980&t=112)** - And as the new process that just got scheduled, I'll load my state information and then begin executing. Now, context switches are not instantaneous. It takes time to save and restore the registers in memory state, so the scheduler needs a strategy for how frequently it switches between processes. There's a wide variety of [Algorithms](../../Skills/Software%20Development/Algorithms.md) that different operating system schedulers implement. Some of these algorithms are preemptive, which means they may pause or preempt a running low-priority task when a higher priority task enters the ready state. In non-preemptive algorithms, once a process enters the running state, it'll be allowed to run for its allotted time. Which algorithm a scheduler chooses to implement will depend on its goals. Some schedulers might try to maximize throughput or the amount of work they complete in a given time, whereas others might aim to minimize latency to improve the system's responsiveness. Different operating systems have different purposes, and a desktop OS like [Windows](../../Glossary/Service/Windows.md) will have a different set of goals and use a different type of scheduler than a [Real-Time](../../Skills/Database%20Management/Real-Time.md) OS for embedded systems. Now, while it's important to understand the concept of scheduling and that it's taking place, you usually don't need to worry about the nitty-gritty details of how the scheduler works because it's often handled under the hood by the operating system. In fact, you might not have any control over when the parts of your program actually execute,
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling?u=76281980&t=202)** - And that's an important thing to keep in mind. Avoid writing programs expecting that multiple threads or processes will execute in a certain order or for an equal amount of time because the operating system may choose to schedule them differently from run to run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Speakers:** - and (2), - threads (1), - that (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Warnings:** keep in mind (1)

#### [Execution scheduling: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate how scheduling can impact execution, we've written this C++ program that executes two threads named Barron and Olivia that continuously chops vegetables for about one second. The vegetable_chopper function on line nine takes in a string argument for a name which can be used to uniquely identify this thread. The function begins by initializing a local variable on line 10 to count the number of vegetables this thread chops. The while loop on line 11 will execute as long as a Boolean chopping variable that we initialized on line seven is true. And with each loop iteration, it increments the value of the local vegetable_count variable. Finally, after the while loop finishes, the vegetable_chopper function prints out how many total vegetables it chopped on line 14. Down in the main function on lines 18 and 19, we create two threads to execute the vegetable_chopper function and pass in additional arguments, which are the strings Barron and Olivia, which will get passed into the vegetable_chopper's name parameter. Now we're creating and starting these two threads one after the other. So they won't begin at the exact same time, but they'll begin close enough together for the purpose of this demonstration. After starting both threads, the program prints a message and then sleeps for one second before setting the chopping variable to false on line 23, which will stop the while loop in both threads. Now I'll switch to a command prompt
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/execution-scheduling-c-plus-plus-demo?u=76281980&t=96)** where I've already used the make command to compile the source file. So I'll run the example, execution_scheduling_demo.exe. I get an initial message that Barron and Olivia are chopping vegetables. Then after a second, they both finish and print a message with the number of vegetables each thread chopped, which is quite a lot. Even though these two threads started and stopped at roughly the same time, they chopped a very different number of vegetables. It looks like Olivia chopped more than Barron. Scheduling is not always fair. If I run this program again, now Barron and Olivia both end with different amounts than before. As you can see, scheduling is not consistent from run to run, so your programs should not rely on execution scheduling for correctness.

> [!info]- Semantic Content
>
> **Code Identifiers:** vegetable_chopper (4), vegetable_count (1), execution_scheduling_demo (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Thread life cycle](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=1)** - When a new process or program begins running, it will start with just one thread, which is called the main thread, because it's the main one that runs when the program begins. That main thread can then start or spawn additional threads to help out, referred to as its child threads, which are part of the same process, but execute independently to do other tasks. Those threads can spawn their own children if needed, and as each of those threads finish executing, they'll notify their parent and terminate with the main thread, usually being the last to finish execution. Over the life cycle of a thread, from creation through execution, and finally, termination, threads will usually be in one of four states. If I'm the main thread in this kitchen and I spawn or create another thread to help me, that child thread will begin in the new state.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=53)** - Hello.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=55)** - This thread isn't actually running yet, so it doesn't take any CPU resources.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=59)** - I don't even know what I'm supposed to be doing.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=62)** - Part of creating a new thread is assigning it a function, the code it's going to execute. Olivia, I need you to slice these sausages, we're making soup. - I can do that. I'm ready to start.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=77)** - Right. You can start now. Some programming languages require you to explicitly start a thread after creating it.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=86)** - [Olivia] Now that I've started, I'm in the runnable state, which means the operating system can schedule me to execute. Through contact switches, I'll get swapped out with other threads to run on one of the available processors.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=99)** - Olivia is running independently now, so my thread is free to continue executing my own tasks when it's my turn to get scheduled on the processor.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=108)** - Ah, man, this sausage is frozen. I need to wait for it to thaw before I can continue. When a thread needs to wait for an event to occur, like an external input or a timer, it goes into a blocked state while it waits. The good thing is that while I'm blocked, I'm not using any CPU resources. The operating system will return me to the runnable state when the sausage is thawed.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=133)** - And that frees up the processor for other threads to use. Now, my thread may eventually reach a point where I need to wait until one of my children threads has finished for me to continue on. Maybe I've finished preparing everything else, I've completed all of my tasks, and I need Olivia to finish slicing the sausage. I can wait for her thread to complete its execution by calling the join method. When I call join, my thread will enter a blocked state waiting until Olivia's done.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=162)** - Ah, the sausage is finally thawed. Now I'll go back to the runnable state and continue executing. (video tape whirring) Now I've finished executing, so I'll notify my parent thread that I'm done. Hey, Baron! I'm done. And then I'll enter the final terminated state. (sighs) A thread enters the terminated state when it either completes its execution or is abnormally aborted.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle?u=76281980&t=193)** - Since Olivia notified me that she's done, I'll return to the runnable state so I can continue preparing soup. Now, different programming languages may use different names for those states and have a few additional ones, but in general, new, runnable, blocked, and terminated are the four phases of the life cycle of a thread.

> [!info]- Semantic Content
>
> **Speakers:** - ah (2), - when (1), - hello (1), - this (1), - i (1)
> **Env Vars:** cpu (2)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)

#### [Thread life cycle: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle-c-plus-plus-demo?u=76281980&t=0)** - [Narrator] To demonstrate the lifecycle of a thread from creation to termination, we've created this example program which recreates the interactions between Olivia and me where I spawn her as a second thread to help slice sausages to make soup. The chef_olivia function defined on line seven begins by printing a message that Olivia has started and is waiting for the sausage to thaw. The thread waits for three seconds and then prints a second message that Olivia's done cutting sausage before it finishes execution. Below that, the program's main function represents my actions in the kitchen. It starts by printing a message on line 14 that Barron has started and requests Olivia's help, then creates a new chef_olivia object. In C++, a new thread will begin executing immediately after the associated thread object is instantiated. So Chef Olivia gets started right away, pending the operating system scheduler, of course. After creating Olivia's thread, Barron continues cooking soup, which is represented by sleeping for one second on line 18. Since Barron only sleeps for one second after starting Olivia, but Olivia sleeps for three whole seconds, Barron will be done well before Olivia, but he needs to wait until she is finished to continue on. This is where the join function comes into play, causing Barron to wait until after Olivia has completed everything she needs to do before continuing. So Barron calls the join function on line 21.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle-c-plus-plus-demo?u=76281980&t=97)** Notice that we're calling the join function on the Olivia thread object from within the main Barron thread. That will block Barron's execution there until Olivia terminates, at which point the main Barron thread will be able to continue on to print its final message on line 23 that they're both done. Switching over to the console, when I run this program, I get a series of messages as output. Messages that begin with Barron were printed by the main thread and messages that begin with Olivia came from the second Chef Olivia thread. After Barron asked for Olivia's help and started her thread, he was scheduled next and printed a message about continuing to cook before entering into his one-second sleep. Olivia then printed her starting message and then began her sleep for three seconds. Barron continued independently cooking soup for his one second and then waited for Olivia to join. Olivia finally finished, which allowed Barron to continue, print his last message, and terminate the program. While C++ doesn't give us a view into a thread state in regard to whether it's blocked or running in the operating system, we can check whether or not a thread is still considered active by using the joinable function, which returns a Boolean indicating whether or not that thread is alive. I'll add a print statement immediately after creating Chef Olivia's thread on line 15 to show whether or not her thread is still active. (keys typing)
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle-c-plus-plus-demo?u=76281980&t=200)** I'll use the joinable function on the Olivia thread object and then a conditional statement to print true or false based on that result. Next, I'll copy and paste that line after the main thread is done with its one second of sleep, at which point the Olivia thread should still be sleeping.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-life-cycle-c-plus-plus-demo?u=76281980&t=228)** And finally, I'll copy that line one more time after Olivia's thread joins on line 23. Switching over to the console, I'll make and then run the program with those changes. I see that Olivia's thread is active and joinable immediately after she starts. Then later, while Barron continues cooking soup, Olivia is still considered joinable and active even though her thread is asleep at that time. Finally, after Olivia's thread is done cutting sausage and terminates, she's no longer considered active and the joinable function returns false.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** chef_olivia (2)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (keys typing) (1)

#### [Detached thread](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=1)** - We often create threads to provide some sort of service or perform a periodic task in support of the main program. A common example of that is garbage collection. A garbage collector is a form of automatic [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) that runs in the background and attempts to reclaim garbage or memory that's no longer being used by the program. Many languages include garbage collection as a standard part of their runtime environment. But for this demonstration, I'll spawn my own new thread to handle garbage collection.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=33)** - Man, what a mess.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=35)** - Olivia is a separate child thread that will execute independently of my main thread so I can continue doing what I'm doing here, getting my soup ingredients ready.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=45)** - Well, I try to reclaim some memory, or counter space, by clearing up Baron's garbage.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=50)** - This setup with Olivia running as a separate thread to provide that garbage collection service will work fine until I'm ready to finish executing. Bam, now my soup spiced and ready. My main thread is done executing and I'm ready to exit the program, but I can't.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=69)** - Because I'm still running. Since Baron's spawned me as a normal child thread, he won't be able to exit until I've terminated.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=77)** - And since Olivia's thread is designed to collect garbage in a continuous loop, she'll never exit. I'll be stuck here waiting forever, and this process will never terminate. Threads that are performing background tasks, like garbage collection, can be detached from the main program by making them what's called a demon thread. A Daemon thread, which you may also hear pronounced as Daemon, is a thread that will not prevent the program from exiting if it's still running. By default, new threads are usually spawned as non-Daemon or normal threads, and you have to explicitly turn a thread into a Daemon or background thread. Olivia, I forgot to tell you this earlier, but you are a Daemon thread.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=120)** - Oh man, you detached me.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=122)** - When my main thread is finished executing and there aren't any non-Daemon threads left running, this process can terminate and Olivia's Daemon thread will terminate with it.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread?u=76281980&t=134)** - Since I was terminated abruptly with the process, I didn't have a chance to gracefully shut down and stop what I was doing. That's fine in the case of a garbage collection routine, because all of the memory this process was using will get cleared as part of terminating it. But if I was doing some sort of IO operation, like writing to a file, then terminating in the middle of that operation could end up corrupting data. If you detach a thread to make it a background task, make sure it won't have any negative side effects if it prematurely exits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (1)
> **Speakers:** - we (1), - man (1), - olivia (1), - well (1), - this (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1)

#### [Detached thread: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] In this program, to demonstrate detaching a thread, we defined a function called kitchen_cleaner on line 7, which represents a periodic background task like garbage collection. The kitchen_cleaner uses an infinite wild loop to continuously print a message that Olivia cleaned the kitchen once every second. Down in the program's main function, I start a new kitchen_cleaner thread named olivia on line 15, then the thread prints a series of three messages that Barron is cooking, followed by a message that Barron is done on line 20 before finally waiting for Olivia's thread to finish and join. If I run the program, I see those messages from Barron and Olivia displayed, but after the main thread reaches the end and prints its final Barron is done message, the program doesn't exit because the kitchen_cleaner thread is still going strong, and it will continue to run forever, so I'll terminate it by pressing Control and the Break key. Now, to prevent that from happening, I'll detach the thread named olivia by calling the detach function after creating it on line 15.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread-c-plus-plus-demo?u=76281980&t=85)** This will allow the thread to run independently in the background. It also makes the thread non-joinable, so I can delete the join function on line 22.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/detached-thread-c-plus-plus-demo?u=76281980&t=103)** Now when I make and run the program again, when the main thread is done executing, Olivia's thread is also terminated, so the process can exit.

> [!info]- Semantic Content
>
> **Code Identifiers:** kitchen_cleaner (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Mutual Exclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Data race](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=1)** - One of the main challenges of writing concurrent programs is identifying the possible dependencies between threads to make sure they don't interfere with each other and cause problems. Data races are a common problem that can occur when two or more threads are concurrently accessing the same location in memory, and at least one of those threads is writing to that location to modify its value. Fortunately, you can protect your program against data races by using synchronization techniques, which we'll show you later. But to eventually use those techniques, you'll first need to know how to recognize the data race. Olivia and I are two concurrent threads working together to figure out what we need to buy from the grocery store. I'll take inventory of the pantry, and when I see that we're running low on something, I'll add more of that item to our shared shopping list.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=52)** - And while Baron does that, I'll look through my recipe book and I'll add ingredients to our shopping list for the meals I want us to cook this week.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=60)** - Even though we're two separate threads doing different tasks, we run the risk of a data race because we're both accessing and modifying the same shared resource, our shopping list. Now to the pantry.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=73)** - Oh, this garlic mashed potato recipe looks delicious. I'll need five potatoes for it. I see that our shopping list already has three potatoes on it. Three plus five is eight, so I'll erase three. (eraser rubbing) And write down eight. As you can see, even a simple operation, like adding two numbers, is actually a multiple step process. First, I had to read the existing value of that item from the shopping list. Then I modified the value by adding what I needed to it, and finally, I wrote the result back to the shopping list. (feet shuffling)
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=118)** - It looks like we're running low on garlic in the pantry. I think we should restock it with two more cloves. I see that there's currently one clove of garlic on the list. One plus two is uh, uh.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=132)** - My garlic mashed potato recipe calls for five cloves of garlic. I see there's currently one clove of garlic on the list. One plus five is six, so I'll update the list to have six cloves on it. (eraser rubbing)
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=151)** - Three, one plus two is three. We need three cloves of garlic.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=157)** - And now we have a problem. The shopping list started with one clove of garlic. Baron wanted to add two more, and I need to add five more. One plus two plus five means we should have ended up with eight cloves of garlic on this list, but somehow we only have three. I need more garlic for my mashed potatoes.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=176)** - We just had a data race. As concurrent threads, it's up to the operating system to schedule when we each get to execute. Right after I read the value of one from that shared shopping list, my thread got paused.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=189)** - Then my thread became active and changed the number of garlic from one to six.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race?u=76281980&t=194)** - And finally, my thread became active again. And at that point I was operating with old data in my local memory because I thought the existing value of garlic on the shopping list was still one. So I finished my operation by changing it to three. In this example, it was the unfortunate timing of when our threads were scheduled that caused the problem. But the unpredictability of when threads get scheduled means sometimes the data race will occur and cause problems, but other times everything might work just fine. And that inconsistency makes data races a real challenge to recognize and debug.

> [!info]- Semantic Content
>
> **Speakers:** - and (3), - one (1), - even (1), - oh (1), - it (1)
> **CLI Commands:** make (1)

#### [Data race: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate a data race in code, we've created the simple C++ program that uses two threads to concurrently increment a shared variable. The variable on line six is a counter for the amount of garlic we should buy and gets initialized to zero. Below that, the shopper function defined on line eight represents a shopper adding garlic to the shopping list. It uses the for loop on line nine to increment the count variable 10 times. Down in the program's main function, starting on line 14, we start two shopper threads called Baron and Olivia, and then use the join method to wait until they're both done. Finally, we print out the value of the garlic count variable on line 19, indicating how much garlic we should buy. Switching over to the command prompt, I've already compiled the program, so I'll run it with data_race_demo.exe. The output tells me that we should buy 20 garlic. That makes sense. We have two threads that are each adding 10 garlic to the counter. And if I run this program several more times, there's a reasonably good chance that we'll continue to get the same answer. It's not guaranteed, but with each shopper only incrementing the count variable 10 times. There are not a whole lot of opportunities for the data race to cause a problem. So to help make trouble, I'm going to modify the for loop on line nine so each shopper increments the counter 10 million times. Now the expected output should be 20 million garlic.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/data-race-c-plus-plus-demo?u=76281980&t=101)** But when I rebuild and then run this program, I get a value that's well below that. It's only around 10 million garlic. And if I run the program again, I get a different output. Even though the simple garlic_count ++ operation is only a single line of code, in the background, the computer is actually performing a three-step read-modify-write process. My two concurrent threads end up stepping on each other's toes and unintentionally overriding each other's changes to produce an incorrect result. When you realize that one of your programs has a data race, grab a cup of coffee 'cause that could take a while to hunt down and fix. There are tools that exist to help detect data races, but they're specific to different languages and environments and beyond the scope of this course. Some languages also have compiler flags that you can implement to point out sections of code that had the potential to cause a data race. In my opinion, the best defense against data races is a strong offense, preventing them from occurring in the first place. Since a data race only occurs when at least one of the concurrent threads is modifying the value of a memory location, pay close attention to anywhere you see an assignment operation or an operator like the ++ increment that changes a variable's value. If there's a potential that two or more threads could access that variable, then you will almost certainly need to use some mechanism to protect it.

> [!info]- Semantic Content
>
> **Code Identifiers:** data_race_demo (1), garlic_count (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [Mutual exclusion](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=1)** - Anytime multiple threads are concurrently reading and writing a shared resource, it creates the potential for incorrect behavior like a data race. But we can defend against that by identifying and protecting critical sections of code. A critical section or critical region is part of a program that accesses a shared resource, such as a data structure in memory or an external device, and it may not operate correctly if multiple threads concurrently access it. The critical section needs to be protected so that it only allows one thread or process to execute in it at a time.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=36)** - Baron and I experienced a data race as we added garlic to our shared shopping list because incrementing a value is actually a three-step process. Read the current value, modify it, and then write back the result. Those three steps are a critical section, and they need to execute as an uninterrupted action so we don't accidentally override each other.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=60)** - I have an idea. Give me your pencil.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=64)** - Hey, I was using that.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=67)** - Now there's only one pencil for us to share, and the rule is that only the person holding the pencil can access the shopping list, either to read or write it. That way one of us won't accidentally read a wrong value because the other one is only halfway done updating it. In this arrangement, the pencil is serving as a mechanism called a mutex, short for mutual exclusion, which you'll also hear referred to as a lock. Only one thread or process can have possession of the lock at a time, so it can be used to prevent multiple threads from simultaneously accessing a shared resource, forcing them to take turns. If either of us wants to access the shopping list, we first need to pick up the pencil to acquire the lock on it. We do whatever we need to with the shared notepad, and then when we're done, release the lock by putting down the pencil. The operation to acquire the lock is an atomic operation, which means it's always executed as a single, indivisible action. To the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the system, an atomic operation appears to happen instantaneously, even if under the hood, it really takes multiple steps. The key here is that the atomic operation is uninterruptible.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=139)** - So if I grab the pencil.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=141)** - Acquiring the mutex is an atomic action that no other thread can interfere with halfway through. Either you have the mutex or you don't. And now that you do have a lock on our pencil, you can safely execute in the critical section.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=155)** - I see we already have 10 carrots on the list. I'll add five more to that.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=159)** - Oh, and we're going to need some more onions too.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=162)** - Well, I currently possess the mutex, so you'll have to wait until I'm done.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=167)** - Threads that try to acquire a lock that's currently possessed by another thread can pause and wait till it's available. There, I'm done with the notepad for now, so I'll release the lock.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=179)** - And I'll acquire the lock so I can add onions to the list.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=187)** - Don't forget to release the mutex when you're done.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=190)** - Okay.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=192)** - Since threads can get blocked and stuck waiting for a thread in the critical section to finish executing, it's important to keep the section of code protected with the mutex as short as possible. If I take the pencil, execute a critical section by adding more lettuce, and then hold onto the pencil while I contemplate what else to buy.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=213)** - I'm stuck waiting for Olivia to return the pencil so I can use it, and getting kind of annoyed.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion?u=76281980&t=219)** - Only thinking about what I want to buy doesn't actually require the shared notepad, so the operation doesn't require mutual exclusion. I should have returned the pencil as soon as I was done updating the list. That way, Baron could use it to execute the critical section while I'm busy doing other things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Speakers:** - i (3), - anytime (1), - baron (1), - hey (1), - now (1)
> **Definitions:** is an  (2), short for (1)
> **Analogies:** such as (1)
> **Best Practices:** don't forget (1)

#### [Mutual exclusion: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate how to manually enforce mutual exclusion with a mutex, we'll modify the example program from earlier with two shoppers that have a data race as they concurrently increment the amount of garlic to buy. Before creating a mutex, I'll need to include the mutex header in this program.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=25)** Now I'll create a new mutex, and because Barron and I used the pencil for our mutex, I'll give it the creative name of pencil.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=45)** To keep the two shopper threads from modifying the garlic_count variable at the same time, I'll call the pencil mutex's lock member function to acquire the lock on it before entering the for loop on line 11. And I'll call its unlock method after the for loop completes to release the hold on it.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=72)** Switching over to the command prompt, I'll build that program with the make command. And then run it. The first shopper thread to begin executing will take the pencil, increment the garlic_count 10 million times, and then unlock the pencil so the other thread can do the same. That prevents the data race and I get the expected output of 20 million. Now, that solution seemed to work fine here because incrementing the garlic_count is a fairly quick operation, and that's all the shopper thread needs to do 10 million times each. But what if there was a longer IO operation involved? Perhaps each of these shoppers needs some time to think and ponder the meaning of life every time they add an item to the list. To simulate that, I'll add a print statement before incrementing the garlic_count variable that says the current thread is thinking.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=137)** Then after that, I'll use the sleep_for function to make that thread sleep for half a second.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=150)** And that will also require me to include the chrono header at the top.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=160)** Finally, since I put that sleep method in there, I'll also reduce the number of loop iterations on line 13 down to just five for each thread, so it doesn't take forever to run.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=183)** When I make and run the program now, I see a new thinking message appear every half a second, five from one thread, and then five from the other. So the program takes about five seconds in total to finish. Since each thread does its thinking while holding onto the pencil, the other thread is stuck waiting outside of the critical section during that time. The critical section here is way bigger than it needs to be. I only really need to protect line 16, which increments the garlic_count. Sleeping and thinking doesn't affect any shared data, so the shoppers don't need to be holding onto the pencil while they do that. So to improve this program, move the pencil's lock and unlock functions so that the shopper locks the mutex immediately before incrementing the garlic_count, and then unlocks it immediately afterwards.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mutual-exclusion-c-plus-plus-demo?u=76281980&t=247)** Now, when I make and run the program, it will run twice as fast because the threads aren't holding onto the pencil while they're busy thinking. I see the thinking messages from both threads appear in pairs, and it only takes two-and-a-half seconds to execute. We've minimized the critical section to only protect the part of this program that truly requires mutual exclusion.

> [!info]- Semantic Content
>
> **Code Identifiers:** garlic_count (6), sleep_for (1)
> **CLI Commands:** make (4)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Atomic objects: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/atomic-objects-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/atomic-objects-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] Using a lock to protect a shared variable with mutual exclusion works, but if you're only doing simple operations, like incrementing a variable's value, then a simpler solution is to use C++ atomic types, which encapsulate a value and synchronize access to it to prevent a data race. If I scroll down this documentation page, I see a variety of atomic types, including atomic booleans, characters, integers, long values, and so on. Continuing down the page is a list of functions of the atomic object, which implement many of the common operations. To demonstrate using atomic objects, I'm going to modify the previous example code to demonstrate a data race, which has two parallel threads incrementing a count variable 10 million times. I should get an output of 20 million, but since I'm using a regular integer on line 6 and I don't have any locks in place to protect it with mutual exclusion, when I run this program, it has a data race that produces an incorrect result, less than the expected output of 20 million. To use an atomic object, I must first include the atomic header.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/atomic-objects-c-plus-plus-demo?u=76281980&t=80)** Next, I'll replace the garlic_count variable on line 7 with an atomic unsigned int and I'll initialize it to a value of zero.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/atomic-objects-c-plus-plus-demo?u=76281980&t=103)** Finally, in the printf section on line 20, I'll use the atomic objects load function to read its stored value.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/atomic-objects-c-plus-plus-demo?u=76281980&t=122)** Now, when I make and run the program, I get the correct output value of 20 million because each of the increment operations was executed atomically. Keep atomic objects in mind whenever you need to share something simple, like a counter value between concurrent threads.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** garlic_count (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Locks

[↑ Back to Table of Contents](#table-of-contents)

#### [Recursive mutex](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=1)** - Olivia and I have been using this pencil as a mutex. Only one person at a time can own or have a lock on it, and only that person can access our shared resource: this notepad.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=12)** - If I attempt to lock the mutex while another thread has it, my thread will be blocked and I need to wait until he unlocks it so it becomes available.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=20)** - And if I attempt to lock the mutex, it doesn't appear to be available, so my thread will just have to wait too.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=28)** - It's behind your ear. You already locked it.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=31)** - Oh. Well, my thread can't unlock the mutex while I'm blocked waiting on it, and I'll be waiting on the mutex forever because I'll never be able to unlock it. I'm stuck and so are you. If a thread tries to lock a mutex that it's already locked, it'll enter into a waiting list for that mutex which results in something called a deadlock because no other thread can unlock that mutex.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=56)** - There may be times when a program needs to lock a mutex multiple times before unlocking it. In that case, you should use a reentrant mutex to prevent this type of problem. A reentrant mutex is a particular type of mutex that can be locked multiple times by the same process or thread. Internally, the reentrant mutex keeps track of how many times it's been locked by the owning thread, and it has to be unlocked an equal number of times before another thread can lock it. If this pencil is a reentrant mutex, when I pick it up, I lock it.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=90)** - Now Olivia's thread has a hold on the mutex, so she's the only one that can lock or unlock it.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=95)** - Since the pencil is reentrant, I can lock it again. Now the pencil has been locked twice by me, which means I'll have to unlock it twice to fully release my hold on it. If your program needs to lock a mutex multiple times, using a reentrant mutex may seem like an easy way to avoid a deadlock, but if you don't unlock the reentrant mutex the same number of times, you can still end up stuck.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=119)** - I'm waiting. Thanks. Many programmers like using reentrant locks because it can make things easier. You don't need to worry as much about what's already been locked, and they make it easier to retrofit locks into existing code. As an example, say I have a function to increment a shared counter and it uses a mutex to protect that operation. If later I create another function that uses the same mutex to protect some other section of code and that section of code uses the increment counter function, since those functions are nested, when I execute my function, it'll end up locking the mutex twice before unlocking it. If I was using a regular non-reentrant lock, that would produce a deadlock, but with a reentrant mutex, this works just fine. Now, like many things in the world of programmers, there are some very strong opinions about whether reentrant locks are good or evil. Some opponents of using reentrant locks will argue that the example I just showed you should be refactored to avoid having nested locks by using a third function that increments the counter and only gets called from within a protected section. I'm not going to advocate either way on this debate. There are pros and cons to both sides.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex?u=76281980&t=195)** - One use case where reentrant locks are really needed is when writing a recursive function; that is a function that calls itself. If the function makes a recursive call to itself from within a locked section, it will lock the mutex multiple times as it repeats itself, and then unlock the mutex an equal number of times as it returns and unwinds. Since a reentrant mutex can be used recursively like this, you'll often hear it referred to as a recursive mutex or a recursive lock. Different languages use different terms, but these all basically mean the same thing.

> [!info]- Semantic Content
>
> **Speakers:** - olivia (1), - if (1), - and (1), - it (1), - oh (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)

#### [Recursive mutex: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate using a recursive mutex with C++, we've modified the previous example that we used to demonstrate a data race and mutual exclusion with two shoppers that concurrently increment the number of items to buy. In this version, we're counting the amount of garlic and potatoes to buy with the variables that are initialized on lines seven and eight. There are two helper functions on lines 11 and 17 called add_garlic and add_potato, which increment the corresponding garlic_count or potato_count variables. And each of those functions lock and unlock the same mutex named pencil to enforce mutual exclusion around those operations and prevent a data race. The shopper function simply uses a for loop on line 24 to execute those add_garlic and add_potato functions 10,000 times each. Down in the program's main function, we create and start two shopper threads. Then after they finish running, we print out the amount of garlic and potatoes to buy. Running this program as is indicates we need 20,000 garlic and 20,000 potatoes. That's quite a feast. Now, let's say every time we add a potato, we also want to add additional garlic because potatoes and garlic go really well together. To do that, we might add a call to the add_garlic function inside of the add_potato function, immediately after incrementing the potato_count.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex-c-plus-plus-demo?u=76281980&t=97)** By inserting the add_garlic function, we've effectively nested two calls to the lock function. When the add_potato function gets called, it will lock the pencil. Then when the add_potato function calls add_garlic, the add_garlic function will lock the pencil again. So the pencil ends up being locked twice in a row by those nested functions before then being unlocked twice as the functions complete. When I make and run this program, it gets stuck waiting when it tries to lock the pencil a second time. The program doesn't have any output, so I can't really tell what's going on, but if I try to wait for it to finish, I'll be waiting here forever. So I'll press Ctrl and the break key to end it. Fortunately, the fix is simple. All I need to do is change the pencil declaration on line nine from being a regular mutex to a recursive mutex, which can be locked multiple times before being unlocked.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/recursive-mutex-c-plus-plus-demo?u=76281980&t=164)** Now when I make and then run the program, I get the output that we should buy 40,000 garlic and 20,000 potatoes. That makes sense because I increment garlic_count in both the add_garlic and add_potato functions.

> [!info]- Semantic Content
>
> **Code Identifiers:** add_garlic (7), add_potato (6), garlic_count (2), potato_count (2)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Try lock](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock?u=76281980&t=1)** - When multiple threads each have multiple tasks to perform, making those threads block and wait every time they attempt to acquire a lock that's already taken may not be necessary or efficient. Olivia and I are two threads doing several different tasks. My thread will be taking an inventory of the fridge to see what things we're running low on, and then add those to the shopping list on our shared notepad. I'll go back and forth between those two tasks,
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock?u=76281980&t=28)** - And my thread is searching through the newspaper for grocery coupons and then adding those items to the shared shopping list. Ooh, there are some good deals this week. Now that I've found some items that I want, I'll take the pencil, which is our mutex, to lock access to the shared notepad so I can add them.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock?u=76281980&t=48)** - I saw we're low on milk, so now I'll go to acquire the pencil and I see Olivia has it. If I attempt to lock a mutex in a regular blocking fashion, my thread would enter a waiting state at this point, doing nothing until Olivia unlocks it. If I don't have anything else to do, so I can't continue with other things until after I've accessed the shared notepad, that's okay; it's what has to happen. But in this scenario, I do have other useful things to do that don't require the notepad. I can keep searching the fridge for other things we need. So rather than using the standard locking method to acquire the mutex, I'll use what's called try lock or try enter, which is a non-blocking version of the lock or acquire method. It returns immediately and one of two things will happen. If the mutex you're trying to lock is available, it will get locked and the method will return true. Otherwise, if the mutex is already possessed by another thread, the try lock method will immediately return false. That return value of true or false lets the thread know whether or not it was successful in acquiring the lock. So if I try to lock the pencil that Olivia currently has, I know immediately that my attempt has failed, so I can go back to searching the fridge
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock?u=76281980&t=127)** - There. I'm done writing for now, so I'll unlock the pencil and go back to searching for coupons. Since Barron wasn't blocked waiting for this mutex, it's just sitting unlocked, available for anyone to take. Now, Barron likes to explain try lock with pencils and notepads. I think of it more like being at a house party with a bunch of your friends, your fellow threads. There's one restroom at the house that everyone at the party will need to use at some point, but only one person can use it at a time. When you try to use it and try opening the door, you realize it's locked because someone's already inside. You could stand there and wait until they come out, or you can go back to the party, keep having fun, and try again later.

> [!info]- Semantic Content
>
> **Speakers:** - when (1), - and (1), - i (1), - there (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (1)

#### [Try lock: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate using try_lock in C++, we created this example which simulates two shoppers searching for items they need and then adding them to a shared notepad. The variable on line eight represents the number of items on the notepad. Within the shopper function, each thread has a local variable declared on line 12 for the number of items to add to the notepad, how many items they found in the coupon book, or perhaps missing from the fridge. The while loop on line 13 will keep the shoppers searching for items and adding them to the notepad until there are at least 20 items. If the shopper has items to add to the notepad, they'll execute the if clause on line 14 in which they lock the pencil mutex, add all their items to the list, and print a message with how many items they've added. That then resets their items_to_add count back to zero. The thread sleeps for 300 milliseconds to simulate time writing things down, and then finally unlocks the pencil on line 20. If the shopper did not have anything to add, then they would have executed the else clause on line 21 where they spend 100 milliseconds searching for and finding an item they need, which then increments their own count of items_to_add Down in the main function, we create two shoppers named Baron and Olivia. Then record the elapsed time from right before starting their threads until they both finish
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock-c-plus-plus-demo?u=76281980&t=93)** to see how long it takes them to find at least 20 items. Switching over to the command prompt, I'll run the program. Notice that the two threads are never adding more than one item at a time. Since the lock function blocks execution while waiting for the mutex to be available, these two threads end up taking turns, swapping places between the top and bottom sections of the if-else statement. Now that the program has finished executing, I see that it took them a little under 6.5 seconds. Now to modify this code to use the try_lock function, I'll delete the regular lock on line 15. Then I'll add a logical And operator to the if statement on line 14, followed by pencil.trylock.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock-c-plus-plus-demo?u=76281980&t=152)** The order of these statements on each side of the operator matters because C++ evaluates the left side of a logical And before the right side. It will first check to see if there are items to add. If and only if the left side of the And is true will it evaluate the right side and execute the try_lock function. If the mutex is available, then calling try_lock will immediately lock it and return true, and the program will execute the code on lines 15 through 19 to add items to the shared notepad. If the mutex was not available, then the try_lock function will immediately return false, and that thread will execute the else clause on lines 21 to 23 to look for other things to buy.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/try-lock-c-plus-plus-demo?u=76281980&t=208)** When I make and run the program now, it executes much faster, finishing in a little over two seconds, which is less than half the amount of time it took before. Notice that this time, when one of the threads gets its turn in the critical section, it often adds more than one item to the notepad. With the try_lock function in place, as one thread takes its time writing to the notepad, the other thread is able to jump past that section of code to search for other things to buy multiple times. It's been freed up to go accomplish other things.

> [!info]- Semantic Content
>
> **Code Identifiers:** try_lock (6), items_to_add (2)
> **CLI Commands:** find (1), make (1)
> **Versions:** 6.5 (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [Shared mutex](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=1)** - We use a lock or mutex to protect a critical section of code to defend against data races, which can occur when multiple threads are concurrently accessing the same location in memory, and at least one of those threads is writing to that location. That second part is key because if we have a bunch of threads and none of them are writing, they all just want to read from the same location, that's fine. It's okay to let multiple threads read the same shared value as long as no one else can change it. They'll all safely see the same thing. Danger only exists when you add a thread that's writing to the mix. When we use a basic lock or mutex to protect the shared resource, we limit access so that only one of the threads can use it at a time, regardless of whether that thread is reading or writing, or both.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=50)** - That works, but it's not necessarily the most efficient way to do things, especially when there are lots of threads that only need to read. This is where reader-writer locks can be useful. A reader-writer lock, or shared mutex, can be locked in one of two ways. It can be locked in a shared read mode that allows multiple threads that only need to read simultaneously to lock it, or it can be locked in an exclusive write mode that limits access to only one thread at a time, allowing that thread to safely write to the shared resource. A read-write lock is useful for protecting a shared resource like our calendar because Barron and I frequently need to read the calendar throughout the day.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=97)** - I can never remember what day it is.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=99)** - But we rarely need to modify it.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=101)** - Only once a day.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=103)** - This marker represents our shared mutex. When my thread wants to read the calendar, I'll lock the mutex in the read-only mode by placing my finger on it.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=112)** - I also want to read the calendar. I can also place my finger on the marker. Now we both have a shared lock on it, so we can both concurrently read it.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=122)** - When I'm done checking the date, I'll release my lock on the mutex. Now I think it's time to increment the calendar's date. In other words, I want to modify it, and to do that, I'll need to lock the shared mutex in the exclusive write mode by picking it up.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=138)** - But I'm still holding onto the lock to read.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=142)** - A thread trying to acquire the lock in write mode can't do so as long as it's still being held by any other threads in the read mode, so I'll have to wait.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=153)** - Done.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=154)** - Now the shared mutex is completely free, so I'll pick it up to place a write lock on it and update the calendar.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=161)** - Oh, I already forgot what day it is, and I can't read the calendar now because Olivia has an exclusive hold on the lock to write. Since only one thread can have the write lock at a time, all other threads wanting to read or write will have to wait until the lock becomes available again.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=179)** - Now, recognizing when to use a read-write lock is just as important as knowing how to use it. In certain scenarios, read-write locks can improve a program's performance versus using a standard mutex, but they are more complicated to implement and they typically use more resources under the hood to keep track of the number of readers.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex?u=76281980&t=201)** - And there can be language dependent differences in how they're implemented that affect performance. Do they give preference to readers or writers that are trying to acquire the lock? Deciding which type of mutex to use is a complicated decision, but as a general rule of thumb, it makes sense to use a shared reader-writer lock when you have a lot more threads that will be reading from the shared data than the number of threads that will be writing to it, such as certain types of [Database Applications](../../Skills/Software%20Development/Database%20Applications.md). If the majority of your threads are writing, then there's not much, if any, advantage to using a read-write lock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) (1)
> **Speakers:** - i (2), - but (2), - now (2), - we (1), - that (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)

#### [Shared mutex: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] The shared_mutex class has been part of the standard library since C++17, To provide a mutex that can be acquired in a shared mode, in which multiple threads can share ownership of the mutex as well as an exclusive mode in which only one thread can have a lock on the mutex. To demonstrate using a shared mutex, this example program creates 10 threads to concurrently read what day it is from a shared calendar while two other threads update it. The calendar here is just an array of strings to represent the days of the week on line eight, as well as an integer to indicate which day today is on line nine. We've created a single regular mutex named marker on line 10, which all of the threads will use to enforce mutual exclusion when interacting with the today variable. There are two functions on lines 12 and 21 for the threads that will be reading the calendar value and those that will be writing to update it. They both use a for loop to perform their action of either reading or writing seven times. In the calendar reader's for loop, the thread locks the marker mutex on line 14 prints out a message about what day it sees, sleeps for 100 milliseconds, and then let's go of the marker. We included the delay here to more easily see when each thread is in the critical section when looking at the program's output In the calendar writer's loop, the thread takes the marker on line 23, changes the calendar to the next day of the week, prints a message about it doing so,
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex-c-plus-plus-demo?u=76281980&t=95)** sleeps for 100 milliseconds, and then unlocks the marker mutex. Finally, down in the program's main function, we use a pair of for loops to create and start 10 reader threads and two writer threads. So there are five times as many readers as writers. When I run this program, a single reader or writer message is printed every 100 milliseconds, indicating that the threads are taking turns in the protected section of code. Only one thread can ever be reading or writing at a time. I see that all of the reads that take place between a writer operation see the same day of the week, and that makes sense. Only the writers are changing the date. So let's upgrade this program to use a shared mutex so multiple readers can view the calendar at the same time. The first thing I'll need to do is include the shared mutex header at the top of the program. Next, I'll modify line 11 to change the marker from a regular mutex to a shared mutex. Finally, I'll change the lock and unlock functions in the calendar reader on lines 15 and 18 to be lock shared and unlock shared.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/shared-mutex-c-plus-plus-demo?u=76281980&t=185)** These shared version of the lock and unlock function will allow multiple calendar reader threads to possess the marker mutex at the same time. Whereas the standard lock functions, on lines 24 and 28, will only allow one calendar writer to access the shared variable at a time. Before I build this program, I'll need to modify or make file to configure it to use the C++17 standard. Depending on the development environment and compiler version you're using, you may or may not need to include this flag to make sure the compiler incorporates newer features, like the shared mutex. Now, when I make and then run this program, I see all of the reader threads enter the protected section at the same time to see what day it is. Then the writers take their turns individually holding the marker to update the calendar before the group of reader threads jump back in to look at the calendar together. The result is a program that finishes much quicker than before.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Identifiers:** shared_mutex (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. Liveness

[↑ Back to Table of Contents](#table-of-contents)

#### [Deadlock](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=1)** - Olivia and I decided to take a snack break to demonstrate some of the problems that can occur when using locks. A classic example that's used to illustrate synchronization issues when multiple threads are competing for multiple locks is the dining philosopher's problem. In this scenario, Olivia and I are two philosophers or threads, doing what philosophers do best, thinking and eating. We both need to access a shared resource, this plate of sushi, and each time one of us takes a piece of sushi, we're modifying its value. The number of pieces that are left. The act of taking sushi from the plate is a critical section, so to protect it, we've devised a mutual exclusion process using these two chopsticks as mutexes. When I want to take a bite of sushi, I'll first pick up the chopstick closest to me to acquire a lock on it. Then I pick up the farther chopstick. Now I have possession of both locks. I'm in the critical section, so I'll take a piece of sushi and then put down the far chopstick to release my lock on it, and then the close chopstick. And finally, since I'm a philosopher, I'll go back to philosophizing.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=73)** - Ah, eureka. That was an interesting thought. Well, I'm feeling hungry now, so I'll acquire the chopstick closest to me, and then the one further away, I'll take a piece of sushi and then release the far chopstick, and then the one closer to me. As dining philosophers we'll both continue to alternate between eating and thinking, but since we're operating as concurrent threads, neither one of us knows when the other one wants to eat or think, and that can lead to problems. If I get hungry again and pick up the chopstick closest to me.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=110)** - And I also get hungry and pick up my close chopstick. I see we've come to an impasse. We've both acquired one of the two locks that we need, so we're both stuck waiting on the other thread to release the other lock to make progress. This is one example of a situation called deadlock. Each member of a group is waiting for some other member to take action, and as a result, neither member is able to make progress. Avoiding deadlock is a common challenge in concurrent programs that use mutual exclusion mechanisms to protect critical sections of code. We want our program to be free from deadlock to guarantee liveness, which is a set of properties that require concurrent programs to make progress. Some processes or threads may have to take turns in a critical section, but a well-written program with liveness guarantees that all processes will eventually make progress. But we're clearly not making any progress here. And I'm getting hungry.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=171)** - Eureka, I have another idea. - Oh, do tell, do tell.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=175)** - Well, our deadlock occurred because we both reached for the chopstick closest to us, first. I grabbed this chopstick first and you grabbed this chopstick first. That set us up for deadlock, but if we prioritize these locks so that we both try to acquire this chopstick first, then we won't have this problem because we'll both be competing for the same first lock.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=200)** - Well, let's give that a try. Ah, brilliant. If you acquire the first chopstick and then I try to acquire it, I'll just be stuck here waiting until you finish taking your sushi and release both locks. Then I can grab that chopstick and this one, and take my turn, in the critical section.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock?u=76281980&t=221)** - In this example, we had two separate locks protecting a single-shared resource. That may not be the most realistic scenario, but it demonstrates the point. Now, imagine something like a [Banking](../../Skills/Software%20Development/Banking.md) application with a set of bank accounts where each one has its own mutex, to ensure that only one thread will be withdrawing from or depositing funds to that account at a time. To transfer funds between two accounts, a thread needs to acquire the locks for both the sender and the receiver, since it would be modifying the value of both accounts. If there are multiple threads concurrently making transfers between the accounts, then there's a real chance that they could end up competing for the same locks and run into this sort of deadlock scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Speakers:** - well (2), - olivia (1), - ah (1), - and (1), - eureka (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)

#### [Deadlock: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate a deadlock, we've created this example program that simulates two dining philosophers thinking and eating sushi. The philosopher function on line nine takes two reference parameters named first_chopstick and second_chopstick, which indicate the order in which the philosopher will lock the two mutexes. The while loop on line 10 will continue to run as long as the sushi_count variable is positive, which represents the amount of sushi left on the shared plate between the philosophers. We initialized the sushi count to 5000 on line seven, so our two philosophers should both end up very well fed. Within the while loop, the philosopher will pick up and acquire a lock on their first_chopstick, followed by their second_chopstick, at which point, they're in the critical section. If there's still sushi left on the plate, they'll take a piece by decrementing the sushi_count variable line 14, then finally unlock both chopsticks to put them down for someone else to take. Down in the main function, we initialize two mutexes named chopstick_a and chopstick_b, then start two philosopher threads named barron and olivia. Notice that each philosopher has a different first and second chopstick. Barron will acquire chopstick_a first and then b, whereas Olivia acquires chopstick_b first and then a. After both philosophers have eaten all of the sushi, their threads will finish and the program will print out a final message on line 27. Switching over to the command prompt,
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=96)** when I run this program, it should take less than a second for our philosophers to eat 5000 pieces of sushi, but I don't get that final output message. Our philosophers are stuck in a deadlock. If I press control, shift, escape to open the Task Manager and then go to the Performance tab, I see that the CPU is barely being used. Since the threads are stuck waiting on each other, the deadlocked program doesn't use any CPU cycles. Now, my program will be stuck in this state forever, so I'll need to manually terminate it by pressing control break. I could try running the program again and hope the two philosopher threads get scheduled differently this time, are lucky enough to avoid deadlocking, and make it to the end of the sushi plate. But luck is not a good strategy for programming, so let's implement Olivia's solution of prioritizing the locks. We'll say that Chopstick A has the highest priority, and B is second. Each philosopher should always take their highest priority chopstick first. I see that on line 24, Olivia takes chopstick_b as her first_chopstick and chopstick_a as her second one, so I'll swap those around.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=180)** Now both threads will acquire the two chopsticks in the same order. If I make and run the program now, it reaches the end and prints the final message that our sushi-filled philosophers are done eating. Now, we designed this example to be as simple as possible by only including a single shared resource, the sushi plate. In practice, this program only really needs one lock to protect it. We intentionally created the potential for deadlock because we nested two locks inside of each other to demonstrate the concept. As your programs grow in complexity to include more critical sections, locks, and parallel threads with intertwined dependencies, it becomes increasingly more difficult to identify and prevent potential deadlocks. The simplest technique to prevent deadlocks is the one we used in this video, which is to ensure that locks are always taken in the same order by every thread. However, lock ordering may not always be feasible. For example, a thread may not know all of the locks it will need to acquire ahead of taking any of them. For our dining philosophers example, another possible solution in C++ is to use a scoped_lock. When you create a scoped_lock object, it takes ownership of one or more mutexes and holds onto them for the scope in which that object was created. The scoped_lock has a built-in deadlock avoidance algorithm when it's used to acquire multiple mutexes at once.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=275)** Back in our code, a return line 24 to its original state, which creates the potential for a deadlock.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=289)** Then I'll replace lines 11 and 12, which lock the first and second chopsticks with the constructor for a new scoped_lock.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/deadlock-c-plus-plus-demo?u=76281980&t=312)** Creating this scoped lock at the beginning of the while loop will acquire both mutexes and hold onto them until the end of that while loop, at which point the scoped lock is destructed and the mutexes are released. They'll be automatically unlocked so I don't need these two unlock statements. Switching back to the console, I'll make and then run the program again, and it finishes right away, but this time, it's using the C++ scoped_lock mechanism to avoid a deadlock rather than ordering the locks by priority.

> [!info]- Semantic Content
>
> **Code Identifiers:** scoped_lock (5), first_chopstick (3), second_chopstick (2), sushi_count (2)
> **CLI Commands:** make (3)
> **Env Vars:** cpu (2)
> **UI Navigation:** open the (1), go to (1)
> **Tools:** command prompt (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Abandoned lock](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock?u=76281980&t=1)** - Now that we've figured out how to avoid a deadlock between our two philosophers using chopsticks, we can return to our routine of eating and philosophizing. I'm ready for another piece of sushi, so I'll pick up the first chopstick, then the second one, and I think I left the refrigerator open.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock?u=76281980&t=21)** - Well, that was rude of him. We've entered another form of a deadlock through thread death. If one thread or process acquires a lock and then terminates because of some unexpected reason, it may not automatically release the lock before it disappears. That leaves other tasks like me stuck waiting for a lock that will never be released and getting hungry.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock?u=76281980&t=45)** - Sorry about that. Let's look at some code.

> [!info]- Semantic Content
>
> **Speakers:** - now (1), - well (1), - sorry (1)

#### [Abandoned lock: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate what happens if a lock gets abandoned, we'll use a modified version of the previous dining philosophers example that we used to demonstrate a deadlock. In this version, we still have two philosophers eating and thinking, but we've consolidated the two mutexes into a single mutex simply named chopsticks. The philosophers will lock the chopstick mutex on line 11 before taking a bite of sushi and then unlocking it immediately afterwards on line 15. With only one mutex at play, the risk of deadlock is removed. So if I run this program, the philosophers successfully take turns eating sushi until all of the pieces are gone. Now, if one of the philosopher threads locks the mutex and then something happens in the critical section, that thread could finish before it gets a chance to release the lock. To simulate that happening, I'll add another If statement that checks to see if there are exactly 10 pieces of sushi left.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980&t=67)** And if so, the thread will print a message that this philosopher has had enough.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980&t=83)** And then after that, they'll use a break statement to immediately break out of the while loop before unlocking the chopstick. When I make and run that program, I get the message that one of the philosophers has had enough, but the other philosopher never finishes eating the last few pieces of sushi. That other thread is stuck waiting on a mutex that will never get unlocked, so the program will be stuck here forever. This scenario is not the same as the deadlock we looked at previously in this course because the two threads are not waiting on each other to release a lock, but it's a related scenario and the impact is the same. The program isn't making any progress, so I'll press Control + Break to terminate the process. A good way to avoid this problem with C++ is to use a mutex wrapper class like the scoped_lock. I'll replace the lock function on line 11 with the code to create a new scoped_lock object named lock using the chopsticks mutex,
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980&t=164)** and then delete the unlock function on line 19.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/abandoned-lock-c-plus-plus-demo?u=76281980&t=172)** The scoped_lock will only hold onto its lock of the mutex for the scope in which the scoped_lock object was created, which is the while loop iteration. If something happens to make the loop exit prematurely, like the break statement on line 17, the scoped_lock will automatically release its lock on the mutex for another thread to take. If I make and run this program using the scoped_lock, it's able to run until the end, even after one of the philosopher threads has had more than enough sushi.

> [!info]- Semantic Content
>
> **Code Identifiers:** scoped_lock (6)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### [Starvation](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=1)** - It would be nice if Olivia and I took turns acquiring and releasing the pair of chopsticks so we could each take an equal amount of sushi from the shared plate. But that's not guaranteed to happen. The operating system decides when each of our threads get scheduled to execute, and depending on the timing of that, it can lead to problems. If Olivia puts down the chopsticks to release her lock on the critical section, but my thread doesn't get a chance to acquire them before she takes them again, then I'll be stuck waiting again until she takes another piece. If that happens occasionally, it's probably not a big deal, but if it happens regularly,
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=41)** - Too slow.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=42)** - then my thread's going to starve. Starvation occurs when a thread is unable to gain access to a necessary resource and is therefore unable to make progress. If another greedy thread is frequently holding a lock on the shared resource, then the starved thread won't get a chance to execute.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=62)** - In a simple scenario like ours, with two equal threads competing for execution time, starvation probably isn't a concern. Both of our threads should get plenty of chances to take sushi. However, if our two threads are given different priorities, then that may not be the case. Baron knows I get grumpy when I don't eat.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=82)** - And I certainly don't want that, so I'll give Olivia's thread a higher priority.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=86)** - Thanks.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=87)** - How different thread priorities get treated will depend on the operating system, but generally higher priority threads will be scheduled to execute more often, and that can leave low priority threads like me feeling hungry. Another thing that can lead to starvation is having too many concurrent threads.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=106)** - Oh, I forgot to mention I invited some friends over.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation?u=76281980&t=109)** - Well with this many competing threads, I may never get any sushi.

> [!info]- Semantic Content
>
> **Speakers:** - it (1), - too (1), - then (1), - in (1), - and (1)
> **CLI Commands:** make (1)

#### [Starvation: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate thread starvation, we'll modify this version of the dining philosopher's example program to add a local variable within the philosopher function to keep track of how many pieces of sushi each philosopher thread gets to eat. We'll increment the philosopher's sushi eaten variable after they take a piece of sushi on line 15.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation-c-plus-plus-demo?u=76281980&t=31)** And then at the end, after their while loop finishes, we'll print a message with the number of pieces this philosopher was able to take.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation-c-plus-plus-demo?u=76281980&t=49)** There are currently 5,000 pieces of sushi up for grabs on line seven, so I'll switch over to the command prompt, make, and then run this program. And when it finishes, I can see that each philosopher got a different amount of sushi. It's not necessarily fair, but there's plenty of sushi to go around, so both of the philosophers are well fed. Now let's see what happens if we drastically increase the number of philosophers at the dinner party by modifying the array to hold philosopher threads on line 23 from having only two threads to 200 threads. The following four loops on lines 24 and 27 will then create 200 unique philosopher threads before waiting for them all to finish and join. I'll make and then run the program with that change. And as I scroll through the final counts for each thread, I can see that some philosophers got a decent amount of sushi, but a lot of them didn't get any at all. This one philosopher here took over 1,000. All of these threads were created with the same default priority, but because there were so many threads, some never got scheduled to execute. This represents a real problem in programs containing a large number of threads. For example, if instead of feeding sushi to a bunch of hungry philosophers, this program was a web server that created new threads to handle a huge number
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/starvation-c-plus-plus-demo?u=76281980&t=143)** of incoming requests, some of those requests may never get processed, and that would lead to some impatient and angry users on the other end. There are techniques that can be used to improve or even guarantee fairness among threads, but that type of workload management is very situational-dependent and beyond the scope of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Tools:** command prompt (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Livelock](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=0)** - Our greed and competition for sushi has led us to a life of deadlocks and starvation. There's only one piece of sushi left, and I can see you're still hungry, you should have it.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=12)** - Thank you, my dear, but I can see you're still hungry too, and I would feel like a lousy husband if I allowed my wife to go hungry. You should have the last bite.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=23)** - Oh, but I can't bear to see you hungry. You shall have the final bite.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=29)** - Well, this is annoying. We've entered into another tricky situation known as a livelock. A livelock looks similar to a deadlock in the sense that two threads are blocking each other from making progress, but the difference is that the threads in a livelock are actively trying to resolve the problem. A livelock can occur when two or more threads are designed to respond to the actions of each other. Both threads are busy doing something, but the combination of their efforts prevent them from actually making progress and accomplishing anything useful. The program will never reach the end. The ironic thing about livelocks is that they're often caused by [Algorithms](../../Skills/Software%20Development/Algorithms.md) that are intended to detect and recover from deadlock. If one or more process or thread takes action to resolve the deadlock, then those threads can end up being overly polite and stuck in a livelock. To avoid that, ensure that only one process takes action, chosen by priority or some other mechanism, like random selection.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=89)** - Rock, paper, scissors for it?
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=92)** - One, two, three, shoot!
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=93)** - I win!
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock?u=76281980&t=94)** - Now Olivia gets the last piece of sushi, and that resolves our livelock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Speakers:** - our (1), - thank (1), - oh (1), - well (1), - rock (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)

#### [Livelock: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate a livelock scenario, we'll modify our original dining philosophers example. It creates two philosopher threads, Barron and Olivia, which each grab a different first and second chopstick, and therefore have the potential to end up in a deadlock. So let's be clever and implement our own deadlock avoidance algorithm. I'll change the lock function on line 12 for the second_chopstick from a regular lock to try_lock, and then I'll make that call to try_lock the condition for an if statement.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980&t=45)** If the second_chopstick was already taken by another thread, try_lock will return false. In that case, this philosopher should politely put back their first_chopstick by unlocking it so another philosopher can take it. Otherwise, if the current thread successfully locked both chopsticks, it can continue on as normal, taking a piece of sushi and then unlocking both chopsticks, so I'll enclose that within an else clause.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980&t=86)** Switching over to a command prompt, I'll make and then run that program. And hooray, it reaches the end right away. By making our philosophers polite, we've successfully avoided a deadlock. Now let's invite a few more philosophers to this dinner party. I'll copy and paste lines 26 and 27 to create two more philosophers. I'll name them Steve and Nikki, and then finally I'll call the join functions on Steve and Nikki down near the end. We've only invited two more philosophers to this party and there should still be plenty of sushi to go around. I'll make and then run that program, and now it's stuck. My first instinct would be to diagnose this type of behavior as a deadlock, but if I press control, shift, escape to bring up the Task Manager and then go to the Performance tab, I see that the CPU is working hard at 100%. This time, our threads that are trying to avoid a deadlock are instead caught in a livelock. With four philosophers grabbing for the chopsticks, by the time a philosopher has launched their first chopstick and goes for the second one, another philosopher already has it.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980&t=179)** They're constantly picking up and putting down chopsticks, but nobody can get both at the same time to take a piece of sushi. So I'll need to manually terminate this program by pressing control break. To resolve the livelock, I'll use the thread's yield function, which will reschedule its execution to allow other threads to run. Exactly how yield accomplishes that will vary depending on its implementation and the operating system scheduler. Back in the code, after unsuccessfully trying to acquire the second_chopstick and then putting back the first_chopstick on line 13, I'll call the yield function on the current thread.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/livelock-c-plus-plus-demo?u=76281980&t=226)** This will cause the thread to temporarily wait for a moment before trying to grab the first chopstick again, which should give another philosopher the chance to get both chopsticks at the same time. For the final time in this course, I'll type make and then run the program, and I see that it's able to successfully reach the end without getting stuck in either a deadlock or a livelock.

> [!info]- Semantic Content
>
> **Code Identifiers:** second_chopstick (3), try_lock (3), first_chopstick (2)
> **CLI Commands:** make (4)
> **Env Vars:** cpu (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 6. Synchronization

[↑ Back to Table of Contents](#table-of-contents)

#### [Condition variable](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=0)** - Baron and I just made a slow cooker full of delicious hot soup and I'm ready to dig in.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=6)** - But we should take turns to make sure we each get our fair share of soup. In this scenario, we're two hungry threads competing for access to a shared resource: the soup. And the slow cooker lid will act as a mutex to protect it. Only the thread that holds the lid can check to see how much soup is left, determine if it's their turn to take the next serving, and modify the amount of soup that's left by taking some.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=32)** - Mm, that was some really good soup. I think I'll have another serving. Oh, I see you haven't taken your share yet. What about now? How about now? Now?
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=45)** - Olivia's thread is wasting a lot of energy repeatedly acquiring the mutex to check for a certain condition to see if it's her turn to take more soup, and she'll continue doing that until my thread eventually gets scheduled, so I can acquire the lid, see that it's my turn, and take my serving.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=64)** - What I was doing is called busy waiting or spinning, repeatedly acquiring and releasing the lock to check for a certain condition to continue. It isn't very efficient, especially if it goes on for a long time.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=78)** - This is one of the limitations of using just a mutex. Sure, it restricts multiple threads from taking soup at the same time, but the mutex alone doesn't give our threads a way to signal each other to synchronize our actions. To do that, we can use another mechanism called a condition variable, which serves as a queue or container for threads that are waiting for a certain condition to occur. Think of it as a place for threads to wait and be notified. The condition variable is associated with a mutex, and they work together to implement a higher level construct called a monitor. Monitors protect a critical section of code with mutual exclusion, and they provide the ability for threads to wait or block until a certain condition has become true, along with a mechanism to signal those waiting threads when their condition has been met. Conceptually, you can think of a monitor like a room that contains the procedures and shared data that you want to protect. Only one thread can be in that room at a time to use those procedures and access the data. The mutex is a lock on the door. Other threads that try to enter the protected section while it's occupied will wait outside in a condition variable, which is like a waiting room. They might all be waiting for the same condition to occur before they enter the monitor room, or there might be multiple condition variables or multiple waiting rooms waiting for different conditions to occur to acquire that same mutex. When the thread inside the monitor finishes its business
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=170)** in the critical section, it will signal one of the conditions that it's their turn to execute. Then, it releases its lock on the door to exit the critical section. One of the threads waiting for that condition that was signaled will wake up and take its turn in the monitor, locking the door behind it so it can execute the critical section. Now, the condition variable has three main operations: wait, signal, and broadcast. Before using a condition variable, I first need to acquire the mutex associated with it, check for my condition, I see that it's not my turn to take more soup, so I'll use the condition variables wait operation, which releases my lock on the mutex, and then puts my thread to sleep or a pause state and places it into a queue waiting for another thread to signal that somebody else takes soup.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=224)** - Since Baron released his lock on the lid before going to sleep, now I can acquire it. See that it's my turn to take some soup, so I'll do that. Then I'll use the signal operation to wake up a single thread from the waiting queue so it can acquire the lock. Depending on the language you're using, you'll also see this operation called notify or wake. Baron, wake up, it's your turn to take some soup. Finally, I'll release my lock on the mutex.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable?u=76281980&t=259)** - Ah, my turn. The third condition variable operation broadcast is similar to the signal operation except that it wakes up all of the threads in the waiting queue. You may also see it called things like notify all or wake all. Now, in this little scenario, we only had two threads signaling each other on a single condition, that somebody took soup, which then changes whose turn it is to take the next serving. A more common use case that requires multiple condition variables is implementing a shared queue or buffer. If multiple threads will be putting items in a queue and taking them out, then it needs a mutex to ensure that only one thread can add or remove items from it at a time. And for that we can use two condition variables. If a thread tries to add an item to the queue, which is already full, then it can wait on a condition variable to indicate when the buffer is not full. And if a thread tries to take an item, but the queue's empty, then it can wait on another condition variable for buffer not empty. These condition variables enable threads to signal each other when the state of the queue changes.

> [!info]- Semantic Content
>
> **Speakers:** - baron (1), - but (1), - mm (1), - olivia (1), - what (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** think of it as (1), similar to (1)
> **CLI Commands:** make (1)

#### [Condition variable: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] This C++ program to demonstrate using a condition variable has a function named hungry_person on line 10, which has an input parameter for an ID number. The hungry_person function will run as a thread that alternates with other hungry_people threads to take servings of soup until it's all gone. The global variable on line seven represents the number of soup_servings left and the slow_cooker_lid on line eight is the mutex to protect the soup_servings variable so only one hungry person can change it at a time. Down within the while loop on line 12, the hungry_person uses a unique lock to lock the slow_cooker_lid, then the if statement on line 14 compares their ID number with the number of soup_servings remaining. It does that modular, too, because in this example, we create two hungry_person threads down in the main function. If it is the current thread's turn and there's still soup left, then the hungry_person will take soup by decrementing the number of soup_servings on line 15. Otherwise, the hungry_person will put back the lid on line 17 and check again for their turn on the next loop iteration. put_lid_back is a local variable we declared in the function on line 11 to keep track of how many times this particular thread puts back the lid because it's not their turn. At the end of the hungry_person function, we print a message with that value on line 20 to see what happened. Now I'll switch over to a command prompt,
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=94)** open to the folder with that example code, and I'll use the make command to build the program and then run the executable condition_variable_demo.exe. The two threads will alternate taking servings of soup and then at the end, we can see that Person 0 put the lid back over a thousand times. That's a lot of wasted cycles checking to see that it's not their turn for soup, so let's use a condition variable to help them coordinate. The typical usage pattern for a condition variable involves first locking the mutex that we'll be using with the condition variable, and then using a while loop to check for some condition. If the condition is not true, then we need to wait. Calling the condition variable's wait function will release this thread's lock on the mutex and cause it to wait here. Now I want to emphasize here that the condition variable is not the condition itself or an event. The condition that we're checking for is the logic of the while loop. Is it this thread's turn to take soup? The condition variable is just a place or mechanism for threads to wait. When the waiting thread gets signaled by another thread, it will wake up, lock the mutex, and then check the while loop's condition again. If the condition is true this time, then we'll continue past the loop to execute the critical section of code. Now, one important reason for placing the condition variable's wait function
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=187)** inside of a wild loop like this is that in certain operating environments, the condition variable could have what's called a spurious wake up, meaning it wakes up from its waiting state when it's not supposed to. By placing it inside of a while loop, if a spurious wake up occurs, the thread will see that it's still not time to continue on and it will go back to sleeping. To implement that in our hungry_person function, we'll include the condition variable header at the top of our program. Then we'll create a new condition variable object on line 10 named soup_taken. Next, we'll change the if statement on line 16 into a while loop and we'll modify the condition it checks for to see if it's not this hungry_person's turn to take soup. If it's not their turn, then we'll have the thread wait on the condition variable to get signaled after another thread takes soup.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=258)** Notice that we're passing in the lid_lock so that the weight function knows which lock to release and then reacquire later when this thread gets signaled. We'll also move incrementing the put_lid_back counter into the while loop to track how many times each thread has to wait because it was not their turn. I'll close out the while loop and then clean up this hanging else statement. Now if the thread checks the condition and it is their turn, then execution will continue past the while loop. We need to add another check to make sure that there is still soup left.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=304)** If there is soup left, the thread will take soup by decrementing these soup_servings and then finally it will need to signal the other thread to wake up. To do that, we'll release our lock on the lid and then call the condition variable's notify_one function to signal the other hungry person that soup was taken, so it should be their turn. After saving those changes, I'll switch back over to the console to build and then run the program, and now we have two hungry threads that are taking turns and coordinating their actions to avoid wasting a whole lot of energy unnecessarily checking whose turn it is. Now let's see what happens if we expand this dinner party to include more hungry_people by modifying the program's main function to create five hungry_people threads instead of just two. We'll also need to modify the condition statement on line 16 to rotate servings among the five people. Now if I build and try to run the program again, it gets stuck, so I'll press control break to manually terminate the program. The problem here is that we used the notify_one function on line 23, which only wakes up one of the waiting threads.
>
> **[6:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=399)** Of those four other threads, if it doesn't wake up the one whose turn it is next, then the program will get stuck. The fix here is to change that function to notify_all, to wake up all of the waiting threads to check and see if it's their turn.
>
> **[7:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/condition-variable-c-plus-plus-demo?u=76281980&t=420)** Now when I build and run the program, everything works great. All of the threads eat and they take turns doing so. If you only need to signal one waiting thread and you don't care which one it is, then the basic notify_one function will work fine, but in this example, since we wanted a specific thread to wake up and see that it's their turn, relying on the single notify_one function to wake up the right thread will not always work.

> [!info]- Semantic Content
>
> **Code Identifiers:** hungry_person (9), soup_servings (5), notify_one (4), hungry_people (3), slow_cooker_lid (2)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Producer-consumer](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer?u=76281980)

#### [Producer-consumer: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate a producer/consumer scenario with C++, we've defined a custom class on line seven named ServingLine to pass virtual bowls of soup between our threads. The ServingLine instantiates a queue from the C++ standard library on line 20, which provides basic first in first out or FIFO queue capability. The serve_soup function on line nine simply pushes a new bowl of soup onto the queue and the take_soup function on line 13 removes the first bowl of soup from the queue and returns its value. We're simply using integers here to represent the bowls of soup. Scrolling down on line 23, we instantiate a global serving_line variable for all of our threads to interact with. And then on line 25, we define the soup_producer function. It uses a for loop to serve 10,000 bowls of soup, which are represented by the integer value one. Then after the for loop, it places a negative one into the serving queue on line 30, which is a simple way to indicate to the consumer threads that the producer is done serving soup. Finally, the producer prints a message that it's done serving soup before exiting. Below that, starting on line 33, the soup_consumer instantiates a local variable to keep track of how many bowls of soup it eats, and then uses a while loop to continuously take bowls from the serving_line. It calls the take_soup function on line 36 to take the next bowl of soup
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=93)** and then checks to see if its value is negative one, indicating the last bowl. If so, it prints a message saying how much soup it ate. It puts the negative one back into the serving_line in case another consumer thread needs to see it as well, and then exits. If the bowl the consumer took was not the negative one indicator, then it adds the bowl's value to the soup_eaten counter on line 42 before looping back around to take another one. Finally down in the program's main function, we simply start a single producer thread named olivia and two consumers named barron and steve to serve and eat soup respectively. Switching over to a console. I've already built the program, so I'll run it and it errors out leaving me with a stack dump. We're running into problems here because the C++ standard library queue is not thread safe, meaning it does not have any built-in mechanisms to protect it from data races and other problems when multiple threads are pushing and popping items on and off of it. So let's create our own thread safe queue class by modifying the ServingLine. To do that, I'll include the mutex and condition_variable headers up top.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=177)** Then I'll instantiate two more private members in the ServingLine class, a mutex, which I'll name after the ladle olivia and I use to serve soup. And then a condition_variable, which we'll use to signal when a new bowl of soup is served.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=202)** Now up in the serve_soup function before pushing a bowl onto the soup_queue at line 12, let's protect it by instantiating a unique lock object using the ladle mutex.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=227)** Then after pushing soup onto the queue, we're done with the critical section, so we'll unlock the ladle to make it available for another thread to take.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=242)** Then we'll notify a consumer thread waiting on the soup_served condition_variable to let them know that soup was served. That completes the serve_soup function used by the producer threads. So let's fix up the take_soup function on line 18 for the consumer threads. We'll start by creating a unique lock on the ladle mutex, similar to what we did in the serve_soup function. So I'll simply copy and paste that line. Then we'll use a while loop to wait while the soup_queue is empty because there's nothing to take. If the queue is empty, we'll use the condition_variables weight function to release the ladle lock and wait here until another producer thread adds soup to the queue and then uses the notify_one function on line 15 to let us know that there's soup ready to take. I'd like to point out here that we're using a unique lock in the serve_soup and take_soup functions instead of other types of C++ locks like lock_guard or scoped_lock because the condition_variables weight function only accepts a unique_lock, which can be unlocked and then relock later to transfer ownership between threads. Switching back to the console, I'll build the program. And then run it. And it works.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/producer-consumer-c-plus-plus-demo?u=76281980&t=334)** We get messages from the two consumer threads that ate different amounts of soup, and together they consumed the total 10,000 bowls of soup that were served up by the producer thread. Now you might be wondering why the C++ standard queue isn't thread safe by default after all other languages like [Java](../../Skills/Software%20Development/Java.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) include thread safe queues as part of their standard libraries. C++ gives you the basic building blocks to implement exactly what you need. If you were using a queue for a single threaded application, then you would not want the additional overhead that comes with including a mutex and condition variable. But we needed those mechanisms in place for our scenario, and fortunately it wasn't too difficult to create our own thread safe ServingLine class. If you're not in the mood to write your own version of a queue class, then we recommend checking out the Boost C++ libraries, which include this thread safe queue to use with multiple readers and writers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** serve_soup (5), take_soup (4), serving_line (3), condition_variable (3), soup_queue (2)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** fifo (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Semaphore](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=0)** - [Instructor] A semaphore is another synchronization mechanism that can be used to control access to shared resources, sort of like a mutex, but unlike a mutex, a semaphore can allow multiple threads to access the resource at the same time, and it includes a counter to track how many times it's been acquired or released. As long as the semaphore's count value is positive, any thread can acquire the semaphore, which then decrements that counter value. If the counter reaches zero, then threads trying to acquire the semaphore will be blocked and placed in a queue to wait until it's available. When a thread is done using the resource, it releases the semaphore, which increments that counter value, and if there are any other threads waiting to acquire the semaphore, there'll be signaled to wake up and do so.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=50)** - Hmm, looks like my phone's about to die.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=53)** - Lucky us. There's a charger right here.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=57)** - Nice. This charger has two ports, so it can be used by up to two devices at the same time. You can think of the number of open ports as a semaphore. Right now, this semaphore has a value of two because there are two free ports, and when I acquire one of these ports by plugging in my phone, it decrements the semaphore's value to one.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=81)** - I'll acquire the other port, and that decreases the semaphore's value to zero, which means it's unavailable for anyone else to use.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=93)** - Lucky me. There's a charger right here.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=95)** - Oh, man, sorry, Steve. The semaphore is locked right now because there aren't any available ports. You'll have to wait until one of us is done charging and releases the semaphore.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=105)** - No worries, I'll wait.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=107)** - You know, I don't need to charge that bad. I'll release my port, which increments the semaphore's value, and I'll notify Steve that it's available. Hey, Steve, wake up.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=119)** - Cool, now the semaphore is positive, I can acquire it and charge my phone.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=124)** - This type of semaphore that we're using here is called a counting semaphore because it can have a value of 0, 1, 2, 3, and so on to represent the number of resources we have. In our scenario, we're counting available charger ports, but in software, a counting semaphore might be used to manage access among multiple threads to a limited pool of connections for something like a server or a database, Or a counting semaphore could be used to track how many items are in a queue. Now, it's also common to restrict the possible values of a semaphore to only being either zero or one. With zero representing a locked state and one representing unlocked. This is called a binary semaphore, and at first glance, it looks a lot like a mutex. In fact, it can be used just like a mutex with a thread acquiring and releasing the semaphore to lock and unlock it. However, there is a key difference. A mutex can only be unlocked by the same thread that originally locked it. A semaphore on the other hand, can be acquired and released by different threads. Any thread can increment the semaphore's value by releasing it or attempt to decrement the value by acquiring it. That may sound like a recipe for trouble, and it certainly can be if you're not careful, but the ability for different threads to increment and decrement a semaphore's value and for threads to wait and be signaled by the semaphore is what enables it to be used as a signaling mechanism to synchronize the action between threads.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore?u=76281980&t=219)** For example, a pair of semaphores can be used in a similar way to condition variables to synchronize producer and consumer threads, adding and removing elements from a shared finite queue or buffer. One semaphore tracks the number of items in the buffer, shown here as fillCount, and the other one tracks the number of free spaces, which I'll call emptyCount. To add an element to the buffer, the producer will first acquire the emptyCount, which decrements its value, then it pushes the item into the buffer, and finally it releases the fillCount semaphore to increment its value. Now, on the other side of the buffer, when the consumer wants to take an item, it first acquires fillCount to decrement its value, then it removes an item from the buffer, and finally increments the emptyCount by releasing it. Notice that the producer and consumer each acquire a different semaphore as the first operation in their respective sequences. If the consumer tries to take an item when the buffer is empty, then when it tries to acquire that fillCount semaphore, it'll block and wait until a producer adds an item and releases fillCount, which will then signal the consumer to continue. Likewise, if the producer tries to add an item to the fill buffer, then it goes to acquire the emptyCount semaphore, it will block and wait until a consumer removes an item and releases the emptyCount.

> [!info]- Semantic Content
>
> **Speakers:** - lucky (2), - [instructor] (1), - hmm (1), - nice (1), - i (1)
> **Code Identifiers:** fillcount (5), emptycount (5)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** just like (1), for example (1)

#### [Semaphore: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] At the time of this recording, in the first half of 2020, the C++ standard library doesn't formally include a semaphore class. That should change in the future when the C++ 20 standard is officially published and fully implemented with compilers, but we're not quite there yet. Until then, the well-known Boost C++ Library does include a semaphore class if you want something ready to use, or you can implement your own semaphore class, which is what we've done for this example, starting on line nine. We built the semaphore class using a mutex, a condition variable and a count variable, which are defined down on lines 31 through 33. The semaphore's constructor function on line 11 accepts the initial value to set the count variable. When you call the semaphore's acquire function on line 15, it initializes a unique lock on the mutex and then uses a while loop to wait if the count has been decreased down to zero. This is similar to the use of a condition variable we saw in previous examples. After this thread gets notified on the condition variable that the count has been increased, it can move past a while loop to decrement the count variable on line 20. Below that, in the release function, after locking the mutex, the function increments the count variable on line 23, then releases the lock and notifies the condition variable. So that's how our semaphore class works.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore-c-plus-plus-demo?u=76281980&t=94)** Scrolling down on line 36, we initialize a new semaphore named charger and initialize it to have a count value of four, representing the number of available charging ports. Below that, the cell_phone function attempts to acquire the charger semaphore on line 39. If the semaphore is not available because its count value is zero, then the thread will wait there until a charging port opens up and the semaphore is released. Once a cell_phone thread has acquired the semaphore, it prints a message that it's charging and then sleeps for a random amount of time from one to two seconds. After that, the cell_phone prints a message that it's done charging and then releases the semaphore on line 44 to increment its value so another thread can acquire it down. In the main section of the program, we use a simple for loop to create and start 10 cell_phone threads. That's a lot of cellphones to charge at once. Switching to the console, when I run this program, I see that four of the phones connect immediately at the beginning. Then as each phone finishes charging and releases the semaphore, another phone acquires it and begins charging. At most, there will be four phones connected to the charger at any given time. Now, instead of using it as a counting semaphore, if I change the initialization value for the semaphore on line 36 from four to just one, it'll act as a binary semaphore.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/semaphore-c-plus-plus-demo?u=76281980&t=189)** When I make and run this program, now only one thread at a time will be able to acquire the semaphore. The way we're using the binary semaphore now with the same thread that acquires it also being the one to release, means it's basically acting the same as a mutex. In fact, we could replace the charger semaphore with a mutex in this particular program, and it would function in a similar way.

> [!info]- Semantic Content
>
> **Code Identifiers:** cell_phone (4)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 7. Barriers

[↑ Back to Table of Contents](#table-of-contents)

#### [Race condition](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=0)** - Data races and race conditions are two different potential problems in concurrent programs that people often confuse with each other, probably because they have similar-sounding names with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) race in them, data races can occur when two or more threads concurrently access the same memory location. If at least one of those threads is writing to or changing that memory value, that can cause the threads to override each other or read wrong values.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=30)** - That's a pretty straightforward definition, which makes it possible to create automated tools to identify potential data races and code. And to prevent those data races, you need to ensure mutual exclusion for the shared resource. A race condition, on the other hand, is a flaw in the timing or ordering of a program's execution that causes incorrect behavior. In practice, many race conditions are caused by data races and many data races lead to race conditions, but those two problems are not dependent on each other.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=62)** - It's possible to have data races without a race condition and race conditions without a data race. Olivia and I invited Steve and the gang over to play video games next weekend, so we need to figure out how many bags of chips we need to buy to keep them all fed. Our shopping list is the shared resource, and this pencil serves as a mutext to protect it. Only the person or thread with the pencil can view or modify the shopping list.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=89)** - I'll go first. I see that our shopping list already has one bag of chips. With Steve and the gang coming over, I think we need three more. So one plus three, that means we need four bags.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=109)** - Well, I always overestimate the amount of chips we need for a party, so I'm going to double that. I see we have four, two times four is eight.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=125)** Great. We need eight. Now, let's rewind that and see how else those operations could have played out if our two threads got scheduled differently. (quirky music)
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=139)** - I'll go first.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=140)** - Hold on. I'll go first this time. I see one bag of chips, but I like to overestimate, so I'll double that. One times two is two.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=158)** - Thanks. Now, I'll add three bags to that. Two plus three is five. Mm, five bags is less than the eight we calculated last time.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=168)** - Oh, don't tell me we're not going to have enough chips for the party.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=172)** - That's okay. We'll fix this. - Phew!
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=175)** - Even though we're using this pencil as a mutext to protect against a data race, the potential for a race condition still exists because the order in which our threads execute is not deterministic. When deciding how many bags to buy, if my thread runs first to add three bags before Baron doubles it, that gives us eight. But if Baron runs first to double the original value before I add three bags, then we end up with five.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition?u=76281980&t=204)** - The race condition we created here is fairly straightforward. But in practice, race conditions can be really hard to discover, and that's because a program might run correctly for millions of times while you're building and testing it, so you think everything's fine. You release the finished program, and then one time, things happen to execute in a different order, and that causes an incorrect result. Unfortunately, there's not a single catch-all way to detect race conditions. Sometimes putting sleep statements at different places throughout your code can help to uncover potential race conditions by changing the timing and therefore order in which threads get executed. That said, race conditions are often a type of Heisenbug, which is a software bug that seems to disappear or alter its behavior when you try to study it. Running debuggers and doing things to affect the timing of your code in search of a race condition may actually prevent the race condition from occurring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Speakers:** - that (2), - i (2), - data (1), - it (1), - well (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (quirky music) (1)

#### [Race condition: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] This example demonstrates a race condition with C++, with several threads either adding to or multiplying the value of the bag_of_chips variable on line 7, which represents the number of chips we should buy. The barron_shopper function on line 17 calls the cpu_work function to do a little bit of CPU-intensive work before locking the shared mutex named pencil. Then, doubling the bags of chips on line 20, and printing a message. The olivia_shopper function below does basically the same thing, except it adds three bags of chips instead of doubling them. Down in the main section, we use a series of for loops to create five barron_shopper threads and five olivia_shopper threads, and start them all. Wait for them to finish and join, and then, finally, print a message with the total number of chips to buy. Notice that both the barron and olivia_shoppers lock the pencil before modifying the shared bag_of_chips variable. Since only one thread can read or write that variable at a time, this program is protected against having a data race, but is still vulnerable to a race condition. To show that, I'll run the program. And after all 10 threads finish, it prints a message that we need 125 bags of chips. Now, if I run it again, this time, we need 101 bags of chips. The relative order in which the Olivia
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/race-condition-c-plus-plus-demo?u=76281980&t=94)** and Barron threads were scheduled to add and multiply the bags of chips was different this time, which gave us a different result. Run it again, and yet another answer. Again, the problem here is not a data race because we've guaranteed mutual exclusion by having the shoppers lock the pencil before modifying the bags of chips. However, there is a race condition here because the order in which these threads are scheduled to execute changes each time we run the code, which changes the final result.

> [!info]- Semantic Content
>
> **Code Identifiers:** bag_of_chips (2), barron_shopper (2), olivia_shopper (2), cpu_work (1), olivia_shoppers (1)
> **Env Vars:** cpu (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Barrier](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=0)** - To prevent our race condition from occurring, we need a way to synchronize our actions so we execute our respective multiplication and addition operations in the correct order, and we can do that with something called a barrier. A barrier is a stopping point for a group of threads that prevents them from proceeding into all or enough threads have reached the barrier. I like to think of threads waiting on a barrier, like players on a sports team coming together for a huddle. Before they join the huddle, the players might be doing other things, putting on their equipment or getting a drink of water. As they finish those individual activities, they join their teammates at the huddle. Players in the huddle wait there until all of their fellow teammates arrive. Then they all yell break, and then they scatter about to continue playing their game.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=48)** - We can use a similar strategy here to solve our race condition, huddling together to synchronize when we each execute our operations to add and multiply items on the shopping list. I should complete my operation of adding three bags of chips to the list before we huddle together. Then afterwards, Baron can double the amount.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=68)** - Sounds good.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=70)** - I'm scheduled to execute first this time, so I'll acquire the pencil. I'll add my three bags of chips to the list
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=83)** and release my lock on the pencil and then meet you at the huddle, don't leave me hanging.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=88)** - I don't have anything to do before the huddle, so break. Now we're past the barrier, so I'll double the number of chips.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=103)** That gives us eight, which is the right amount. By using a barrier, the order in which our threads actually get scheduled to execute doesn't matter because the barrier synchronizes us. Olivia always adds three bags before the barrier, and I multiply by two after it. If we were to run that program again, and I happen to get scheduled first, well, I don't have anything to do before the barrier, so I'll wait for Olivia.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=128)** - When I eventually get scheduled to execute, I'll complete my operations, then join the barrier.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=134)** - [Both] Break.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=136)** - Now I'm free to continue doing whatever else I need to do. I'm going to see if we have any salsa.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier?u=76281980&t=141)** - And I can double the chips on our shopping list. Although the order in which our threads got scheduled was different, the end result is the same. We need eight bags of chips for the party.

> [!info]- Semantic Content
>
> **Speakers:** - i (2), - to (1), - we (1), - sounds (1), - when (1)
> **Definitions:** is a  (1)

#### [Barrier: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] At the time of this recording, in early 2020, barriers were an experimental part of the C++ standard, though it looks like they're expected to be included as part of the official C++20 standard. But until that happens and it gets implemented in common compiler libraries, we can turn to the well-known boost collection of open source C++ libraries, which conveniently does have a barrier we can use. To demonstrate using a barrier in C++, we'll build on the previous example that demonstrated a race condition by creating 10 shopper threads named Olivia and Baron that either added or multiplied the number of chips to buy. Without a barrier in place, this program has a race condition that produces a different final result each time we run it. So let's use a barrier to make sure all five of the Olivia shopper threads execute their add operation before the five Barron shoppers multiply the bags of chips. First, we'll need to include the boost thread barrier header file at the top of the program. And then we can create a new barrier named fist bump.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=79)** The constructor takes an argument for the number of threads to wait at the barrier before it releases. Since this program instantiates 10 sharper threads, five Barrons and five Olivia's, and we want all of them to arrive at the barrier together before the program continues, we'll give it an input of 10. Now that we've created the barrier, it's time to figure out where to use it. We're starting all of my shopper threads together and I can't control when each one will get scheduled to execute, but all we really care about here is making sure that all of the Olivia threads execute their addition operation before the Barron threads execute their multiplication. So, we'll use the barrier to separate those operations. The Olivia threads will execute their addition operations before waiting at the barrier, whereas the Barron threads will go straight to waiting at the barrier. Once all 10 threads have arrived at the barrier and are waiting on it, the barrier will release and then the Barron threads will execute their multiplication operations. This ensures we have the right order of operations every time the program executes. To implement the behavior of the Olivia shopper, we'll add the code to wait at the barrier after adding three bags of chips on line 29 by calling fist bump.wait. Now the scoped lock we created on line 28 will still be in scope at this point,
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=173)** so if this thread goes into waiting while still holding a lock on the pencil, no other threads will be able to acquire the lock to continue onwards, and the program will get stuck. So, let's use a pair of curly brackets to restrict the scope of the scoped lock to adjust the critical section.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=197)** Next, up in the Barron shopper function, we'll put the fist bump.wait function before creating the scoped log and doubling the chips. And finally, since we're using the boost libraries barrier function, we'll need to modify the make file to link the necessary boosts libraries. Switching over to the make file, we'll create a new macro for the libraries to link and include boost thread and boost system.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=230)** Then we'll add that to the list of arguments for building the program.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/barrier-c-plus-plus-demo?u=76281980&t=242)** Now, when we make and run this program, all of the Olivia shoppers execute their addition operation first, and then all of the Barron shoppers do their multiplication afterwards, that gives us a final total of 512 bags of chips. And if I run the program again, we'll always get the same answer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Speakers:** - [instructor] (1)

#### [Latch: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/latch-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/latch-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] In addition to barriers to control the order of execution, there's another related synchronization mechanism called a latch. This allows one or more threads to wait until a set of operations being performed in other threads to complete. The latch is initialized with a given count value, which threads can use in two ways. Threads can either wait at a latch until the count value reaches zero. Much like how threads can wait at a barrier. Or they can decrement the count value by calling the latch's countdown function. So, the key difference between a latch and a barrier is that the barrier releases when a certain number of threads waiting on it has been reached. Whereas the latch releases after the countdown function gets called enough times to reduce the count value to zero. For this demonstration, we'll modify the previous example code that used a barrier to now use a latch instead. First, we'll change the include statement on line 6 to include the latch header file from the boost library. Then on line 10, we'll replace the barrier named fist_bump with the latch. And we'll initialize the countdown value to 5. Because there are five Olivia threads that need to execute before the other five Barron threads. Down in the olivia_shopper function, we'll replace the wait function on line 34 with the latch's countdown function.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/latch-c-plus-plus-demo?u=76281980&t=98)** After each of the Olivia threads finishes adding their three bags of chips, they'll call this function to decrement the count value. And the Barron threads that are waiting at their wait function on line 21 will be released to continue when the count reaches zero. If the latch has already been released, when a Barron thread reaches it, it doesn't need to wait for the other Barron threads to arrive to continue. Switching over to the console, I'll recompile these changes, and then run the program. And we get the same result as with the barrier. We're just using a different mechanism to do it. Now, to demonstrate something that can go wrong when using latches, if we were to increase the initial count on line 10 to 10 instead of 5, make and run the program, now it gets stuck waiting at the latch because there are not enough Olivia threads calling the countdown function for it to reach zero. So, always make sure your program will be able to execute the countdown function enough times to avoid getting stuck like this. One way that latches are commonly used is with an initial count value of 1 to serve as a simple gate. Any number of threads can wait at the gate until another controlling thread executes the countdown function just once, which releases the waiting threads to continue on. Initializing the count to some other value N
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/latch-c-plus-plus-demo?u=76281980&t=192)** can be used to make one thread wait until N other threads have completed some action and calling the countdown function, or for some action to be completed N times. Perhaps by a single thread with a loop. Keep in mind that the latch doesn't require the threads calling countdown to wait there until proceeding. They're free to continue. It only prevents threads that call the wait function from proceeding before the count reaches zero.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Identifiers:** fist_bump (1), olivia_shopper (1)
> **Best Practices:** always make sure (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 8. Asynchronous Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### [Computational graph](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/computational-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/computational-graph?u=76281980&t=0)** - The key to [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) is determining which steps within a program can be executed in parallel and then figuring out how to coordinate them. And one tool that help model how steps in a program relate to each other is a computational graph. Consider the steps to make a very simple salad. I'll need to chop some lettuce, chop some tomatoes, mix those chopped ingredients together, and then finally add salad dressing. Each of those steps represents a task, which is a unit of execution or a unit of work. I can draw those tasks as nodes in a graph and use arrows to indicate progression from one task to the next. A task cannot begin executing until all of the tasks with arrows feeding into it have completed. When those four tasks are arranged sequentially like this, they represent a single path of execution which could be implemented as a single thread or process. If I do those steps in that order, I'll make a somewhat boring salad, but that's not the only ordering that could work. The tasks of chopping lettuce and chopping tomatoes can occur asynchronously, meaning the order in which they happen relative to each other doesn't really matter. I could chop the lettuce first or the tomatoes first or ideally, I'll chop them both in parallel to save some time. So I'll add another node to the front of my diagram labeled Spawn, which has two output arrows leading into the two asynchronous chopping tasks. Both tasks can begin running at any time
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/computational-graph?u=76281980&t=94)** after the Spawn operation. Now, there is a dependency between those two chopping tasks and the third task because I can't mix the chopped ingredients together until both of the chopping tasks are complete. My program will need some form of synchronization, so I'll add another node to represent that operation. This Sync node will not be able to execute until both of the chopping tasks that feed into it are complete. I've used the terms spawn and sync here, but you'll also see the terms fork and join used in this context. The fact that there are not any direct edges or connections between the Chop Lettuce and Chop Tomato tasks indicates the possibility for parallel execution. So if this program was implemented using two threads, as shown here, with a second thread spawning or forking from the main thread, the two chopping tasks can run at the same time. This type of diagram is called a directed acyclic graph, or DAG. Directed, because each edge is directed from one node or [Vertex](../../Skills/Software%20Development/Vertex.md) to another, and acyclic, meaning it doesn't have any loops that cycle back on itself. There are several variations on ways to draw these types of computational graphs, but their general purpose is to provide an abstract representation of the program. They help to visualize the relationship and dependencies between tasks. They can also be used to get a sense of how parallel a program can be. Every node represents a task or operation, and for each one, I'll indicate the amount of time it takes
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/computational-graph?u=76281980&t=190)** to execute. For this example, I'm just using made-up numbers and units of seconds. If I add together the execution times for all of the nodes, that gives me a metric called Work, which represents the time it would take to execute all of these tasks on a single processor. For this example, that comes out to 60 seconds. Next, I'll identify the longest possible path through this graph, following the directed edges from node to node, which is referred to as the critical path. It represents the longest series of sequential operations through the program. If I add together the times for all of those nodes along the critical path, I get another metric called Span, which indicates the shortest possible execution time if this program was parallelized as much as possible. In this case, that's 45 seconds. The ratio of work to span indicates the ideal parallelism of this program, how much faster can the parallel version of this program possibly run using multiple processors than this sequential version running on just one processor. The parallelism ratio of 1.33 means that at very best, the parallel version of this program will be 33% faster than the sequential version. We may not be able to reduce the total amount of work a program needs to do, so minimizing the critical path is important in designing parallel [Algorithms](../../Skills/Software%20Development/Algorithms.md), because span determines the shortest possible execution time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (1), [Vertex](../../Skills/Software%20Development/Vertex.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** node (7), make (2)
> **Definitions:** is a  (3), is called (1), means that (1)
> **Env Vars:** dag (1)
> **Versions:** 1.33 (1)
> **Speakers:** - the (1)

#### [Thread pool](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=0)** - After identifying the tasks in a program that can run asynchronously, one way to run those tasks in parallel is to create independent threads or processes for each of them. Preparing a basic salad requires us to chop lettuce and chop tomatoes, so Olivia and I will act as independent threads to execute those tasks in parallel on our two processors, the knives,
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=23)** - A salad with just lettuce and tomatoes is so boring. We need something more. What about cucumbers?
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=30)** - Sure. Chopping cucumbers is another task that can run asynchronously, so we'll spawn another thread to handle that.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=36)** - Hey, Baron. We need onions too. What's up, Olivia?
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=40)** - Another task, another thread.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=42)** - And mushrooms.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=43)** - Again, another thread.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=46)** - And carrots and celery and peppers, and an eggplant.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=51)** - Whoa, whoa, whoa. It's getting crowded in here. We've got a lot of threads in the kitchen, but only two processors to execute on. That means a lot of threads will be standing around waiting their turn. Although threads are considered to be lightweight, every time we spawn a new thread, it does require some amount of overhead in terms of processor time and memory, or in this case, kitchen space. In some scenarios, rather than creating a new thread for every single task, it can be more efficient to use a thread pool, which creates and maintains a small collection of worker threads. As the program submits tasks to the thread pool, the thread pool reuses those existing worker threads to execute the task. Submitting tasks to a thread pool is like adding them to a to-do list for the worker threads. Now Olivia and I are two workers in a pool, and we have a queue of tasks or vegetables waiting for us to chop. After one of us finishes executing our current task, we'll take another one from the queue.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=112)** - I'm done chopping the tomatoes, so I'll move on to the cucumbers.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=116)** - Reusing threads with a thread pool addresses the overhead evolved with creating new threads, and that becomes a real advantage when the time it takes to execute the task is less than the time required to create a new thread. It doesn't take long to chop one of the vegetables, but it does take a long time to call up our friends to take on each of these individual tasks.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool?u=76281980&t=137)** - Since our threads already exist, when a new task arrives, we eliminate the delay of thread creation, which can make our program more responsive.

> [!info]- Semantic Content
>
> **Speakers:** - and (2), - after (1), - a (1), - sure (1), - hey (1)
> **CLI Commands:** make (1)
> **Prerequisites:** required to (1)

#### [Thread pool: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] C++ doesn't include thread pools as part of the C++ standard template library. So once again, we'll be using the open source Boost C++ libraries for this example for its thread pool class. To demonstrate using a thread pool, we've created this program which defines a function named vegetable_chopper on line six that simply prints a message that includes the current thread's ID number and a vegetable ID number, which gets passed as an input to the function. Down in the main section, we use a for loop on line 12 to create and start 100 vegetable chopper threads, followed by a second for loop to wait for them all to finish and join. If I run this program, it creates 100 separate threads to chop the 100 vegetables. We can see that the 100 threads are unique because they each have a different thread ID number. Now let's accomplish the same task of chopping 100 vegetables, but do so with only a handful of threads in a thread pool. First, we'll replace the include statement for the thread header file with the boost/asio.hpp header file. This is a single header which includes all of the individual headers in the Boost ASIO library that you'll need, packaged into this single header for convenience. Next, down in the main function, instead of instantiating an array to hold 100 threads on line 11, we'll create a new thread pool.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/thread-pool-c-plus-plus-demo?u=76281980&t=99)** This thread pool constructor can take an optional argument for the number of threads in the pool, so let's make this a pool with four threads in it. Now, within the for loop, rather than creating new threads, we'll submit the vegetable chopper function to the thread pool using the post function. We'll wrap the vegetable chopper function in a Lambda expression as the token we're submitting for the pool to execute. And after that, instead of using a second for loop to join each of the vegetable chopper threads individually, we can simply call the join function on the thread pool, which will wait until all of the submitted tasks have finished executing. Finally, since we're using the Boost thread pool in this example program, we'll need to modify the make file to link to the Boost Library. Now, when I rebuild and then run that program, the output still prints 100 messages because the program still chops 100 vegetables, but now the thread IDs are different. If you look closely, you'll see that the same four IDs are repeated over and over. We're reusing the same four threads in the pool to execute all 100 tasks.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** vegetable_chopper (1)
> **Env Vars:** asio (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Future](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=0)** - Launching asynchronous tasks is a great way to accomplish multiple things at once. Olivia, can you go check how many vegetables are in the pantry?
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=8)** - Sure, I can do that.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=9)** - While Olivia is busy asynchronously counting veggies, my thread is for you to continue doing other work. But now she's gone and I need a way to get that result back from her when she's done. This is where a mechanism called a future can be used. A future acts as a placeholder for a result that's initially unknown but will be available at some point in the future. It provides a mechanism to access the result of an asynchronous operation. I like to think of a future like an IOU note for the result. Hey, Olivia.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=42)** - Heyo.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=43)** - Hey. I need you to check how many vegetables are in the pantry and give me back an answer.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=48)** - Sure, I promise to do that, and here's an IOU note that I'll get you that answer.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=52)** - Thank you. Now I've got a handle to see that future result, and I'll hold onto it as I continue doing other work in the kitchen. Eventually, I may reach a point in my work that I need the result from Olivia, perhaps to make a decision or complete some type of computation. The future is read only, and I see that the result isn't ready yet so all I can do is wait until Olivia finishes. When she finally does, she'll write the result value to that future, which is called resolving or fulfilling it. She's fulfilling her promise to get me an answer. And I see we have zero veggies left in the pantry.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=92)** - We chopped them all up making salads.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future?u=76281980&t=94)** - Well, at least now I have an answer, and now I need to make a trip to the store.

> [!info]- Semantic Content
>
> **Speakers:** - sure (2), - launching (1), - while (1), - heyo (1), - hey (1)
> **CLI Commands:** make (2)
> **Env Vars:** iou (2)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** note that (1)

#### [Future: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=0)** - To demonstrate using futures in C++, let's recreate my interactions with Olivia from the previous video, starting from this basic shell of a program. First, we'll need to include the future header at the top of the program. Then we'll create a new function, named how_many_vegetables, to serve as the task to execute. That function will print a message that Olivia is counting vegetables.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=39)** Then it will sleep for three seconds to simulate the time it takes for Olivia to complete that task.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=53)** And finally, the function will return a value for the number of vegetables in the pantry. For simplicity, let's say 42 is always the answer. Now down in the main function, we'll print a message at the beginning of the program, when Baron asks Olivia, "How many vegetables are in the pantry?"
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=82)** Then we'll use the async function to asynchronously execute how many vegetables. The first argument is the launch policy, and we'll tell it to run the function asynchronously. And then the second argument is the function we want to run, which will be how_many_vegetables. Now the return value from calling that async function will be a future, so let's capture that as a variable named result. We'll print a quick message to show that Baron can do other things while he waits for that result.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=132)** Then we'll use one final print statement to show the result value from the future.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/future-c-plus-plus-demo?u=76281980&t=150)** Calling the future's get function will return the result value. However, if the future hasn't completed execution yet, then invoking the get function will block execution and wait here until it's ready. Now when I build and then run the program, it immediately prints out the first two messages from the main function and the message from the how_many_vegetables function that Olivia is counting vegetables. However, that final print statement is blocked waiting for the future to complete. After the three-second wait, the main function finally gets the result value from the future and prints the message that Olivia responded with 42.

> [!info]- Semantic Content
>
> **Code Identifiers:** how_many_vegetables (3)
> **Cross-References:** previous video (1)
> **Speakers:** - to (1)

#### [Divide and conquer](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=0)** - One class of [Algorithms](../../Skills/Software%20Development/Algorithms.md) that are well-suited for parallel execution across multiple processors are divide and conquer algorithms. They work by first dividing a large problem into a number of smaller sub-problems of roughly equal size. Next, the conquer phase recursively solves each of those sub-problems. And finally, the solution to the sub-problems are combined together to produce the overall solution for the original problem. The common structure for divide and conquer code usually consists of an if-else statement. If the algorithm has reached what's called a base case, meaning the problem has been subdivided into a small enough piece to solve directly, then simply solve it. Otherwise, following the else case, divide the current problem into two smaller pieces referred to as the left and right problems. Solve both of those problems recursively using the same divide and conquer strategy, then combine the left and right solutions. Consider the task of summing together a large number of elements. I have an array of shopping receipts here and I need to add them all together to figure out how much we spent buying all those vegetables. If I were doing that alone as a sequential process, I would simply iterate through the receipts in the array and accumulate their values. Five plus 13 is 18 plus seven is 25 plus three is 28.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=88)** - It's going to take forever. Let's divide and conquer this task. You add this half of receipts, and I'll add this half. We've subdivided this task into two subtasks that each of our threads can execute.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=101)** - Do you want to subdivide it into even smaller parts?
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=103)** - Sure, we can continue to recursively divide the receipts into smaller and smaller subgroups until we eventually reach our base case. For some algorithms, the base case may require you to continue recursively subdividing until you reach individual elements. But for our purpose, we can define our base case to stop when we reach a threshold amount of receipts. At that point, we'll add each of those subgroups of receipts together, then reverse or unwind the recursion to combine the results from all of the sub-problems to get our final answer.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=139)** - My half of the receipts add up to 41.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=142)** - And mine add up to 62. So we spent a total of $103 on groceries. Divide and conquer algorithms lend themselves to being made parallel because each of the sub-problems are independent, so they can be executed in parallel on different processors.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer?u=76281980&t=159)** - Now just because a divide and conquer algorithm can be made parallel doesn't mean it's always advantageous to do so. Depending on the size of the problem set and the complexity of the operations involved, the cost and overhead involved in making the algorithm parallel may outweigh the potential benefits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (4)
> **Speakers:** - one (1), - it (1), - do (1), - sure (1), - my (1)

#### [Divide and conquer: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980&t=0)** - [Narrator] To demonstrate a parallel divide and conquer algorithm in C++, we'll implement a function that sums together all of the integer values over a range between two input values low and high. We will start with this single threaded implementation of a recursive sum algorithm on line six, which takes two input parameters, low and high values, representing the range of numbers to sum over. The if statement on line seven looks at the difference between the low and high value to determine if the problem has been sufficiently subdivided. If so, we've reached the base case and it returns the sum of numbers in that range. Otherwise, the L statement beginning on line 13 determines the middle index between low and high. Then recursively calls the recursive sum function on the low to middle index, which is referred to as the left half, and from the middle to high index, the right half. Then it returns the sum of those left and right halves. Down in the main function, this program simply calls recursive sum on line 22 for the range of zero to 1 billion, and then prints the result. When I run the program, it gives me this really big number as the resulting total. Now, let's modify this algorithm to take advantage of parallel execution by using futures. To do that, we'll first need to include the future header file at the top of the program. Next, we'll modify line 16 to calculate the recursive sum
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980&t=100)** for the left half of the range asynchronously by launching it as an asynchronous task.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980&t=113)** That call to the async function will spawn a new thread to execute recursive sum and return a future object, which gets held in the variable named left. We don't need to do the same thing for the right half and spawn another asynchronous thread because we can just use the current thread to handle processing it. At the end of the function, when it's time to add together the totals for the left and right halves, we'll need to get the return value from the left future by calling the get function on it. Now, let's try building and running that program and it finishes without displaying any output, but we should have seen a final print statement with the end total. So that means something has gone wrong here. This program is trying to sum the numbers from zero to a billion, but up in the recursive sum function, our base case threshold will only sequentially sum together up to 100 numbers at a time. That means this program will be subdividing the problem a lot and therefore spawning a lot of threads with each call to the async function. There's a limit to the number of threads a program can create and that the operating system can manage and trying to spawn more threads than that will certainly cause problems. Also, we should consider what these threads will actually be able to do. The computer we're using only has four cores, so if we spawn a thousand threads,
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980&t=207)** we'll have nearly a thousand threads waiting around for their turn on the processor. That's way too many threads to be useful here, so let's limit the depth of recursion to only spawn a handful of threads. To do that, we'll give the recursive sum function on line seven, an optional argument for depth with a default value of zero. Then when we call this function recursively on lines 16 and 17, increment the depth of value for those recursive calls.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/divide-and-conquer-c-plus-plus-demo?u=76281980&t=246)** Finally, let's modify the if statement on line eight to use the depth of recursion to decide whether or not to execute the base case. For simplicity here, we'll set the depth threshold to three, but in practice you might want to consider other factors like the number of processors in your system to determine a more appropriate threshold. Switching back to the console one last time, I'll make and then run the program, and now after it finishes, we get the expected message with the same output value as before, except now we're using parallel threads to calculate it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** we call this (1)
> **Speakers:** - [narrator] (1)


### 9. Evaluating Parallel Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Speedup, latency, and throughput](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980&t=0)** - There are several reasons for using multiple processors to execute a program in parallel. One reason might be to increase the size of the problem you can tackle in a certain amount of time. For example, we're going to a party and I promise to bring 10 cupcakes. Working by myself, I can decorate 10 cupcakes in one hour. They're very fancy cupcakes. But if Baron joins me as a second processor doing the same type of work in parallel, together we can decorate 20 cupcakes in one hour. This type of parallelization is called weak scaling. We're keeping the size of the problem for each processor constant, but we're bringing in more processors to accomplish more work in the same amount of time.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980&t=45)** - Another reason for parallelization and bringing in more processors is to accomplish a given task faster. If Olivia promised to bring 10 cupcakes to the party, then working alone, it would take her one hour to decorate all of them. But if we split the workload, so she'll do half and I'll do half, then working together in parallel, we can decorate those 10 cupcakes in only about 30 minutes. This is called strong scaling, and it involves breaking down and spreading a problem across multiple processors to execute the program faster. In those two examples, we're using parallel processors to do more work in a set amount of time or do a set amount of work in less time. In either case, we're increasing the program's overall throughput. That is the number of tasks it can complete in a given amount of time. Throughput is related to another important metric called latency, which is the amount of time it takes to execute a task from beginning to end. Latency is measured in units of time, so if it takes six minutes to decorate one cupcake, that's a latency of six minutes. Throughput is expressed in actions per unit of time, so the throughput of one processor, that is Olivia working alone, is 10 cupcakes per hour. Two processors working in parallel will have the same latency of six minutes to decorate each cupcake, but their combined throughput increases to 20 cupcakes per hour,
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980&t=138)** and with three processors, the throughput goes even higher to 30 cupcakes per hour.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980&t=143)** - A metric that's commonly used to measure the effectiveness of a parallel program is speed up, which is related to the program's efficiency. Speed up is calculated as a ratio of the time it takes to execute the program in the optimal sequential manner with just one worker, or a single processor, over the time it takes to execute in a parallel manner with a certain number of parallel processors. So if one worker takes an hour, or 60 minutes, to make 10 cupcakes, but two workers can do the same job in only 30 minutes, that corresponds to a speedup of two. If adding a third worker drops a time to 20 minutes, that's a speedup of three.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/speedup-latency-and-throughput?u=76281980&t=186)** - Now, our simplified cupcake example really represents a best case scenario, because a task like decorating cupcakes can be completely paralyzed among multiple workers, but in practice, that's rarely the case. It's more common to have programs where some parts can be parallelized, but other parts can't. Let's say at the end of our cupcake decorating program, we need to pack the finished cupcakes into this container. If only one of our threads can interact with the shared container at a time, we'll have to take turns using it. So that part of our program will have to execute sequentially, and that creates a limit on the amount of speed up we can possibly achieve.

> [!info]- Semantic Content
>
> **Speakers:** - there (1), - another (1), - a (1), - now (1)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### [Amdahl's law](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/amdahl-s-law?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/amdahl-s-law?u=76281980&t=0)** - There's a well-known equation for estimating the speed up that a parallel program can achieve called Amdahl's Law, which is named after the computer scientist that formulated it. It's a way to estimate how much bang for your buck you'll actually get by parallelizing a program. In this equation for Amdahl's Law, P represents the portion of a program that can be made parallel, and S is the speed up for that parallelized portion of the program running on multiple processors. So for this example, if 95% of our cupcake decorating program can be executed in parallel and doing so with two processors produces a speed up of two for that part of the program, then the theoretical speed up for the entire program is about 1.9, which is a little bit less than two. If we add a third processor to increase the speed up for the parallelized portion to three, then the overall speed up will be around 2.7. Using 4 processors gives us a speed up of 3.5, and so on. Now, let's say we spend a lot of money and buy a computer with a thousand processing cores. Instinctively, I would expect that to give a speed up of somewhere at least close to a thousand, that'd be great, but according to Amdahl's Law, the overall speed up with a thousand processors will only be around 19.6. If I go wild and bump it up to a million processors, the overall speed up only increases to slightly less than 20.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/amdahl-s-law?u=76281980&t=91)** - 95% of our program is parallelizable, but the 5% that's not, the part of the program that has to execute sequentially, that's creating an upper limit on the speed up we can achieve. A million processors might be able to execute the parallel portion of the program in a blink of an eye, but that sequential 5% will still take the same amount of time as it would with just one processor. This chart shows the estimated speed up that can be achieved when 95% of a program can be parallelized. As the number of processors is increased from left to right, the speed up rises until it eventually maxes out at 20, if only 90% of a program can be parallelized, then at best we'll get a speed up of 10. A 75% parallelizable program has a maximum speed up of 4. And if only 50% of a program can be executed in parallel, then even with an infinite number of processors, the best we can achieve is a measly speed up of two. If that's all we can get, then we might decide that it's not worth the effort to write the program so it will run in parallel. Amdahl's Law illustrates why using multiple processors for parallel computing is only really useful for programs that are highly parallelizable.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/amdahl-s-law?u=76281980&t=175)** - When first learning about [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md), it's natural to be excited and want to parallelize everything. Computers have lots of cores nowadays, so why not make everything as parallel as possible? That's a common trap to fall into. Just because you can write programs to be parallel doesn't mean you always should because the cost and overhead associated with parallelization can sometimes outweigh the benefits. Amdahl's Law, is one handy tool to estimate the benefits of parallelizing a program to determine whether or not it makes sense to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Parallel Programming](../../Skills/Software%20Development/Parallel%20Programming.md) (1)
> **Versions:** 1.9 (1), 2.7 (1), 3.5 (1), 19.6 (1)
> **Speakers:** - there (1), - 95 (1), - when (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### [Measure speedup](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=0)** - Amdahl's law is great for estimating the speedup that you might achieve by parallelizing a program. But once you've created that parallel program, it can be useful to actually measure its speedup empirically. Speedup is calculated as the ratio of two values, the time it takes for the program to execute sequentially, divided by the time it takes to execute in its parallel implementation. That means we'll actually need to take two separate measurements to calculate speedup. First, we'll see how long the algorithm takes to execute with a single processor. Now, this doesn't mean just take the parallel version of the program and run it with only one processor because the parallel program will include additional overhead that isn't necessary to run sequentially. We want to measure the best possible implementation of that algorithm written with sequential execution in mind.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=51)** - I've got my stopwatch ready. Let's see how fast you can add up these receipts by yourself.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=56)** - Well, the fastest way to do that work working alone is to simply iterate through the stack of receipts and accumulate their totals.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=63)** - Ready, set, go. (receipts rustling) (table tapping)
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=70)** - Done. $103.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=72)** - 25 seconds.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=76)** - Great. That's our sequential baseline. Now, let's try that again working together using a divide-and-conquer approach that's structured - Okay.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=83)** - for parallel execution. - Ready, set, go. (receipts rustling) (table tapping)
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=88)** - Done. $103. - 17 seconds this time around.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=93)** - Cool. We can calculate speedup now. 25 seconds divided by 17 seconds gives us a speedup of 1.47. Working together in parallel made us almost 1-1/2 times faster.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=106)** - Not too shabby considering there are only two of us, But if this had been a result with many more processors to help with the work, then a speedup of only 1.47 doesn't sound that impressive.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=117)** - True. Speedup is a great metric, but it doesn't paint the whole picture. Another metric to consider is efficiency, which indicates how well system resources, like additional processors, are utilized. We can get a rough calculation for efficiency by dividing the speedup by the number of processors. So, with just two processors, Olivia and me, we achieved a speedup of 1.47, which means we were 73.5% efficient. And I think that's pretty good. Now, let's say we increase the number of processors in our system to eight, but doing so only produces a speedup of 2.2. Now, we're only running at 27.5% efficiency. Our program did not scale well to utilize those additional processors. Measuring speedup and efficiency gives us a sense of how well our parallel program is actually performing. As long as you achieve a speedup that's greater than 1, you know you've achieved at least something by making the program parallel.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=180)** - But if your speedup is less than 1, you're better off just running the sequential algorithm.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup?u=76281980&t=186)** - Now, a few recommended things to consider when benchmarking a program's performance: It's important to limit the number of programs running at the same time so they don't compete with the program you're trying to measure for resources like processor time. Also, since execution scheduling and other background tasks, like garbage collection, can change how long a program takes from run to run, I like to measure the execution time for multiple independent runs of the program and then average those times together. Finally, some programming environments use just in time compilation to compile parts of the program at runtime, that can cause the program to execute slower, when it first starts up, so you want to let the environment warm up before you begin taking measurements. Some programming languages may have compiler options or runtime settings that can address those concerns, but as a very simple warmup, I always like to run the algorithm I'm going to be measuring once before I actually run and measure it to make sure things like the cache are in a somewhat consistent state from run to run.

> [!info]- Semantic Content
>
> **Speakers:** - done (2), - amdahl (1), - i (1), - well (1), - ready (1)
> **Versions:** 1.47 (3), 73.5 (1), 2.2 (1), 27.5 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** before you begin (1)

#### [Measure speedup: C++ demo](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup-c-plus-plus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup-c-plus-plus-demo?u=76281980&t=0)** - [Instructor] To demonstrate how we'll measure the speed up of a parallel program in C++, we'll use the recursive sum algorithm we created in an earlier video. It uses a divide and conquer approach to sum together all of the numbers within a range of values. The parallelized implementation of the algorithm is contained within the parallel sum function on line 15, but since we've already covered how it works, we'll use code folding to hide it for now. The sequential summing algorithm used for comparison is in the sequential sum function on line seven. I'll hide that too. The main function of this program contains a simple framework we'll be using to evaluate the performance of parallel [Algorithms](../../Skills/Software%20Development/Algorithms.md). On line 31, we have a variable to indicate the number of evaluation runs for each implementation to execute and measure the execution times, and then we'll average those times together. Increasing that number of evaluation runs to average together will decrease the impact of run to run variability, however, that also makes a program take longer to run. For the sake of this demo, we'll only measure each algorithm 10 times, and each run will sum the numbers from zero to the sum value on line 32, which is currently set to a 100,000,000. Lines 34 to 42 contain code to measure the sequential execution time. We'll use the sequential time variable
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup-c-plus-plus-demo?u=76281980&t=94)** initialized on line 35 to accumulate all of the sequential run times within the for loop on line 37, which executes the sequential algorithm for the number of eval runs. At the beginning of each run, we capture the current system time with the start time variable, then execute the sequential algorithm, and when it's done, we calculate the elapsed time and add it to the accumulator. Finally, after all those test runs, we divide the accumulated sequential time by the number of eval runs on line 42 to get the average. Now, one more thing to point out here. Before we actually begin timing anything, we run the sequential sum function on line 36 and capture its resulting output. Doing this serves as a rudimentary way to warm up the system. The next block of code on lines 44 through 52 accomplishes the same thing but for the parallel algorithm instead. After those parallel evaluation runs complete, the final block of code displays the results. The if statement on line 55 checks to make sure that the sequential and parallel algorithms produce the same result. If they did not, then something has gone wrong and it displays an error message. Then the last four print statements display the average sequential and parallel execution times along with the corresponding speed up in efficiency based on the number of processors in the system.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/measure-speedup-c-plus-plus-demo?u=76281980&t=189)** Now, when I run this program, we see a message that it's evaluating the sequential implementation. Then after a bit, it evaluates the parallel implementation and then the results pop up. The sequential algorithm takes an average of 260.2 milliseconds, whereas the parallel algorithm takes an average of 72.7 milliseconds. That corresponds to a speed up of 3.58 and an efficiency of 89.47%, which is calculated based on the four logical processors in this computer. With those results in hand, we can try making adjustments or tweak our parallel algorithm and then run the benchmark again to see how it affects the performance. For example, we've seen how our parallel algorithm compares to the sequential algorithm when summing together a 100,000,000 numbers, but how do they compare if we need to sum a much smaller range of numbers? To find out, let's decrease the sum value on line 32 from a 100,000,000 to just 100,000. Now, if I make and run the program with that change, we see that the parallel algorithm is actually less efficient than the sequential algorithm for the smaller input range. This is because of the additional overhead in the parallel algorithm needed to spawn multiple threads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **Versions:** 260.2 (1), 72.7 (1), 3.58 (1), 89.47 (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 10. Designing Parallel Programs

[↑ Back to Table of Contents](#table-of-contents)

#### [Partitioning](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980&t=0)** - We've looked at a lot of mechanisms for implementing concurrent and parallel programs and considered the concepts and challenges associated with them. Now it's time for the big question. How do you actually design a parallel program? Over the next few videos, we'll look at a common four step methodology for taking a problem and developing a parallel solution for it. This methodology can be used to design complex programs that run on large scale parallel systems. And not all parts of it are applicable to writing simple desktop applications, like we've done in this course, but the concepts are still good to understand. The four stages can be summarized as partitioning, communication, agglomeration, and mapping. That first stage partitioning, is about breaking down the problem into discreet chunks of work that can be distributed to multiple tasks. At this beginning stage, we're not concerned with practical issues like the number of processors in our computer. We'll consider that later. For now, our goal is to simply decompose the problem at hand into as many small tasks as possible, and there are two basic ways to approach partitioning. Domain decomposition and functional decomposition. Domain, or data decomposition, focuses on dividing the data associated with the problem into lots of small, and if possible, equally sized partitions. The secondary focus is then to consider the computations to be performed and associating them with that partition data. For example, if Olivia and I
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980&t=95)** need to decorate this tray of cupcakes, that's a two dimensional array of data elements we need to process. So, we can use domain decomposition to split that work into two similar tasks. We could break the array into two blocks. I'll handle decorating this half, and you take the other block.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980&t=113)** - Or we could break up elements cyclically and each decorate every other cupcake.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980&t=118)** - Sure, that's just another way to break up this data, and different ways of decomposing data can have different advantages and disadvantages depending on the problem and [Hardware](../../Topics/Hardware.md) involved. Once we've partitioned the data, we can turn our focus towards the processing that needs to be applied to each section.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/partitioning?u=76281980&t=136)** - The other form of decomposition, functional decomposition, provides a different complimentary way to break down the problem. Rather than focusing on the data being manipulated, functional decomposition begins by considering all of the computational work that a program needs to do, and then divides that into separate tasks that perform different portions of the overall work. The data requirements for those tasks are a secondary consideration. For example, to functionally decompose making cupcakes, we would first break out all of the individual tasks that go into making them. Then from there, we continue on to consider the data involved with each of those tasks. Keep in mind that domain and functional decomposition are complimentary ways to approach a problem, and it's natural to use a combination of the two. Programmers typically start with domain decomposition because it [Forms](../../Skills/Web%20Development/Forms.md) a foundation for a lot of parallel [Algorithms](../../Skills/Software%20Development/Algorithms.md). But sometimes taking a functional approach instead can provide different ways of thinking about these problems. It's worth taking the time to explore alternative perspectives that can reveal problems or opportunities for better optimization that will be missed by considering data alone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Speakers:** - we (1), - or (1), - sure (1), - the (1)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)

#### [Communication](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=0)** - After decomposing the problem into separate tasks, the next step in our design process is to establish communication, which involves figuring out how to coordinate execution and share data between the tasks.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=13)** - Hang on a sec. Do we always need communication?
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=17)** - Well, my dear, communication is the foundation of a good relationship.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=21)** - Yeah, yeah, but I was talking about data. Some problems can be decomposed in ways that do not require tasks to share data between them. Consider the job of frosting these cupcakes. If I'm tasked to add frosting to this one and you're tasked to add frosting to that one, even though we're operating on adjacent elements in this array, there's no need for us to communicate with each other. They're completely independent tasks. This is embarrassingly easy to make parallel.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=50)** - Sure, we could spend our quality family time together in the kitchen not talking to each other, but what if there is a need to share data between tasks? Let's say we want to decorate the cupcakes to have a rainbow pattern across them. That would require each task to know information about the color of its neighboring cupcakes. I need to know what color you're making your cupcakes so I can color my cupcakes accordingly. Although our separate tasks can execute concurrently, we're no longer completely independent from each other. In this type of situation, we might establish a network of direct point-to-point communication links between neighboring tasks. For each link, one task is acting as the sender or producer of data, and the other task that needs it is the receiver or consumer. That type of local point-to-point communication can work when each task only needs to communicate with a small number of other tasks.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=105)** - But if your tasks need to communicate with a larger audience, then you should consider other structures for sharing data between multiple tasks. You might have one task that broadcasts the same data out to all members of a group or collective, or it scatters different pieces of the data out to each of the members to process. Afterwards, that task can gather all of the individual results from the members of the group and combine them for a final output. When operations require this type of global communication, it's important to consider how it can grow and scale. Simply establishing point-to-point pairs may not be sufficient. If one task is acting as a centralized manager to coordinate operations with a group of distributed workers, as the number of workers grow, the communication workload of the central manager grows too and may turn it into a bottleneck. This is where strategies like divide and conquer can be useful to distribute the computation and communication in a way that reduces the burden on any one task. These are just a few high-level structures to serve as a starting point as you begin to plan the communications for a parallel program.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=177)** - A few other factors to consider include whether the communications will be synchronous or asynchronous. Synchronous communications are sometimes called blocking communications because all tasks involved have to wait until the entire communication process is completed to continue doing other work. That can potentially result in tasks spending a lot of time waiting on communications instead of doing useful work. Asynchronous communications, on the other hand, are often referred to as non-blocking communications because after a task sends an asynchronous message, it can begin doing other work immediately regardless of when the receiving task actually gets that message. You should also consider the amount of processing overhead a communication strategy involves, because the computer cycles spent sending and receiving data are cycles not being spent processing it. Latency is another factor to consider, the time it takes for a message to travel from point A to B expressed in units of time like microseconds, and bandwidth, which is the amount of data that can be communicated per unit of time, expressed in some unit of bytes per second. Now, if you're just writing basic multithreaded or multiprocess programs to run on a desktop computer, some of these factors like latency and bandwidth probably aren't major concerns because everything is running on the same physical system. But as you develop larger programs that distribute their processing across multiple physical systems,
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/communication?u=76281980&t=271)** those intersystem communication factors can have a significant impact on the overall performance.

> [!info]- Semantic Content
>
> **Speakers:** - after (1), - hang (1), - well (1), - yeah (1), - sure (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [Agglomeration](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=0)** - In the first two stages of our parallel design process, we partitioned a problem into a set of separate tasks and then established communication to provide those tasks with the data they needed. We looked at different ways to decompose the problem and focused on defining as many small tasks as possible. That approach helped us consider a wide range of opportunities for parallel execution. However, the solution it created is not very efficient, especially if there are way more tasks than there are processors on the target computer.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=35)** - Now it's time to turn our thinking from abstract to something concrete and modify that design to execute more efficiently on a specific computer. In the third agglomeration stage, we'll revisit the decisions we made during the partitioning and communication stages to consider changes to make our program more efficient, combining some of those tasks and possibly replicating data or computations. As a parallel program executes, periods of time spent performing useful computations are usually separated by periods of communication and synchronization events. The concept of granularity gives us a qualitative measure of the time spent performing computation over the time spent on communication. Parallelism can be classified into two categories based on the amount of work performed by each task. With fine-grained parallelism, a program is broken down into a large number of small tasks. The benefit is that lots of small tasks can be more evenly distributed among processors to maximize their usage; a concept called load balancing. The downside is that having lots of tasks increases the overhead for communication and synchronization, so it has a lower computation to communication ratio. On the other end of the spectrum, coarse-grained parallelism splits the program into a small number of large tasks. The advantage is that it has a much lower communication overhead, so more time can be spent on computation.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=130)** However, the larger chunks of work may produce a load imbalance where certain tasks process the bulk of data while others remain idle. Those are two extremes, and the most efficient solution will be dependent on the algorithm and the [Hardware](../../Topics/Hardware.md) on which it runs. For most general purpose computers, that's usually in the middle with some form of medium-grained parallelism.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=153)** - When we partitioned our cupcakes earlier, we took a fine grained approach. The array has 12 elements that need to be frosted, so we decomposed that into 12 separate tasks; one for each cupcake. As we evaluated communication, we determined that each cupcake task will need to share data with the four other cupcakes surrounding it to coordinate their colors to form a rainbow pattern, which would require 34 communication events. In addition to that being a lot of communication, 12 tasks is way more than the number of processors in our kitchen. There's only two of us.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=190)** - Then let's agglomerate and combine some of those tasks. Since we only have two processors, Olivia and me, we'll restructure the program into two tasks that are each responsible for frosting six of the cupcakes. That reduces the amount of communications between those tasks from 34 down to just two, because everything else is handled locally within the task. However, now each time they communicate, they'll have to share more information to convey the status of the three cupcakes along that edge. Now we have two tasks and two processors. Perfect.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=226)** - Hey guys, I heard you need some help frosting cupcakes.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=229)** - Oh, Steve. We just restructured our program into two tasks, and now with Steve, we have three processors available, and that's too many cooks.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=240)** - Too many cooks?
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/agglomeration?u=76281980&t=241)** - Too many cooks. One of us would be sitting idle while the other two cooks are busy processing. It's easy to make short-sighted decisions like this that can limit a program's [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Choosing to restructure our program into just two tasks prevented us from taking advantage of Steve's additional processing power. A well-designed parallel program should adapt to changes in the number of processors, so keep flexibility in mind. Try not to incorporate unnecessary hardcoded limits on the number of tasks in a program. If possible, use compile time or runtime parameters to control the granularity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Speakers:** - too (2), - in (1), - now (1), - when (1), - then (1)
> **CLI Commands:** make (2)

#### [Mapping](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mapping?u=76281980&t=0)** - The fourth and final stage of our parallel design process is mapping, and this is where we specify where each of the tasks we established will actually execute. Now, this mapping stage does not apply if you're only using a single processor system, because there's only one place to execute the program, or if you're using a system with automated task scheduling. So if I'm just writing programs to run on a desktop computer, like the examples we've shown you throughout this course, mapping isn't even a consideration. The operating system handles scheduling threads to execute on specific processor cores, so that's out of our hands. Mapping really becomes a factor if you're using a distributed system or specialized [Hardware](../../Topics/Hardware.md) with lots of parallel processors for large-scale problems, like in scientific computing applications. The usual goal of a mapping algorithm is to minimize the total execution time of the program, and there are two main strategies to achieve that goal. You can place tasks that are capable of executing concurrently on different processors to increase the overall concurrency, or you can focus on placing tasks that communicate with each other frequently on the same processor to increase locality by keeping them close together. In some situations, it might be possible to leverage both of those approaches, but more often they'll conflict with each other, which means the design will have to make trade-offs. There's a variety of different load-balancing [Algorithms](../../Skills/Software%20Development/Algorithms.md) that use domain decomposition and agglomeration techniques
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/mapping?u=76281980&t=96)** to map task execution to processors. If the number of tasks or the amount of computation and communication per task changes as the program executes, that makes the problem more complex, and it may require dynamic load balancing techniques that periodically determine a new mapping strategy. Designing a good mapping algorithm is highly dependent on both the program's structure and the hardware it's running on, and that gets beyond the scope of this course. So to summarize the four-step parallel design process, we start by taking a problem and partitioning or decomposing it into a collection of tasks. Then we evaluate the communication necessary to synchronize and share data between those tasks. After that, we agglomerate or combine those tasks into groups to increase the program's efficiency with certain hardware in mind. And then finally, those tasks get mapped to specific processors to actually execute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - the (1)


### 11. Challenge Problems

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to the challenges!](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/welcome-to-the-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/welcome-to-the-challenges?u=76281980&t=0)** - All right, folks, you've seen how to design parallel programs. Now it's time for a few challenge problems to practice using the concepts we've covered in this course.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/welcome-to-the-challenges?u=76281980&t=10)** - Over the next few videos, we'll present you with several [Algorithms](../../Skills/Software%20Development/Algorithms.md) that could benefit from being restructured for concurrency and to execute in parallel. As a starting point, we'll provide you with a sequential version of each algorithm, and it's your job to implement your own concurrent solution.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/welcome-to-the-challenges?u=76281980&t=26)** - Keep in mind, there's not a single correct answer to these challenges, so take some time to think them through, and when you're done with each challenge, be sure to watch our Solution Videos to see how we approach the problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Speakers:** - all (1), - over (1), - keep (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Matrix multiply](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-matrix-multiply?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-matrix-multiply?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-matrix-multiply?u=76281980&t=6)** - [Instructor] Your goal for this challenge is to design and build a parallel program that calculates the product of two matrices, which is a common mathematical operation that can benefit a lot from parallel computation. Each matrix will be represented in C++ as a two-dimensional array of arrays. The first index corresponds to rows of the matrix, and is usually represented with the variable letter i, and to the second index corresponds to columns, represented with the letter j. So, for example, if the first index value is zero, that refers to the top row of the matrix. And if the second value is two, that identifies the element at index two along that top row. It's common to represent the individual elements of a matrix using notation with subscripts like this, with the first subscript indicating the row, and to the second subscript indicating the column. When it comes to multiplication, two matrices can be multiplied together if the number of columns in the first matrix, A, is equal to rows in the second matrix, B. So, for example, matrix A shown here is a 4 x 2 matrix, and B is a 2 x 3 matrix. Since those inner dimensions are the same, they can be multiplied together. The product of A times B, which we'll call matrix C on the right, will have dimensions based on the number of rows in A and to the number of columns in B. Each element in matrix C
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-matrix-multiply?u=76281980&t=101)** is the product of the corresponding row in A and column in B. So, for example, element C2,1 is the product of row 2 from Matrix A and column 1 from B. Written as an equation, C2,1 equals A2,0 times B0,1, plus A2,1 times B1,1. If we replace the subscripts in that equation with the variables I and J, it's a little easier to see how the first index I corresponds to the row in A and the second index J corresponds to a column in B. That's the end of our short math lesson on how matrix multiplication works. To give you a starting point for this challenge, we've created this example program. On line eight, we've implemented a sequential version of matrix multiplication with the sequential matrix multiply function, which takes in double pointers to the array of arrays representing the two matrices to multiply, A and B, along with a third array of arrays C to hold the result. It also has parameters for the number of rows and columns in A and B. The function uses a set of nested for loops to iterate through each of the rows in A and columns in B. It initializes the corresponding cell in the result array C to zero, and then uses a third for loop on line 14 to sum together the [products](../../Skills/Software%20Development/Microsoft%20Products.md) of elements
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-matrix-multiply?u=76281980&t=195)** from the row in A with the column in B and accumulates the sum in the corresponding location of the result array C. So the program is modifying the given array C in place to fill it with the result values. Below our sequential matrix multiplier is another empty function on line 22 named parallel matrix multiply, and that's where you come in. Your goal for this challenge is to implement your own parallelized version of matrix multiplication that will hopefully execute faster than the sequential version. Feel free to create any additional helper functions you need as part of your parallel solution. Down in the program's main function, we've implemented our simple framework for measuring a parallel program speed up, which we covered in a previous video. Lines 31 through 35 specify the number of times to evaluate each algorithm along with the dimensions for input matrices A and B. Below that, we allocate memory to store the input and result matrices and populate the elements of A and B with random values. Then finally, starting at line 69, we evaluate the sequential and parallel [Algorithms](../../Skills/Software%20Development/Algorithms.md) to compare how long it takes for each one to execute. After you've implemented your parallel matrix multiply function, you'll be able to run this program to see how well it performs. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (3), refers to (1)
> **Analogies:** for example (3)
> **Cross-References:** we covered (1), previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Matrix multiply](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-matrix-multiply?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-matrix-multiply?u=76281980&t=0)** - [Instructor] To design our parallel solution for the matrix multiplication challenge, we began with domain decomposition to consider ways that we could partition this problem. One very convenient aspect of matrix multiplication is that every element in the result matrix C can be calculated independently. For example, calculating element C two one only requires knowledge of row two from matrix A and column one from matrix B. Likewise, calculating C zero two only requires row zero from A and column two from B. The elements of matrix C don't need to know anything about any other elements in C. So calculating the individual elements of C for a four by three result matrix can be partitioned into 12 independent tasks. This type of problem is sometimes called embarrassingly parallel because it breaks apart so easily and doesn't require communication between each of the tasks. Now that can turn into a lot of tasks, especially for a large result matrix. So we decided to agglomerate those tasks based on row and we'll modify the number of rows in each group at runtime based on the number of processors that are available in the computer. If the system only has two processors, then we'll combine the computations into two tasks. If it has four processors, then that's four tasks and so on.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-matrix-multiply?u=76281980&t=97)** Our matrix multiplication solution has two parts. The parallel matrix multiply function on line 25 and a helper function below it on line 45 named parallel worker, which is responsible for calculating the results for a subset of rows in the total solution matrix. Looking at the primary parallel matrix multiply function on line 28, we get the number of available processors in this computer, which we use on the next line to divide the rows of the output matrix into equal size chunks. Line 31 creates an array to hold the worker threads, and then the for loop on line 32 starts worker threads to independently calculate and populate a subset of the overall result from a certain start and end row of the result array C. The parallel worker function below that on line 45 uses a set of three nested for loops similar to the sequential matrix multiplication algorithm. We just changed the indices on line 48 to process a subset of the rows in A, so that's how our solution works. Down in the program's main function, we'll be multiplying together two matrices that are 1000 by 1000 elements each. Now, before I run this program, I'll press control shift escape to bring up the Task Manager and select the performance tab so we can see the CPU performance. Then I'll use the console to start the program, and as the sequential implementation runs,
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-matrix-multiply?u=76281980&t=195)** we can see that the CPU usage stays around 25 to 30% because we're only using one of the four processors in this computer. This sequential algorithm may take a while, so let's fast forward. Now, when the parallel algorithm begins running, the CPU usage spikes up to 100% because now we're utilizing all four of the available processors. When the program finishes, we see that the parallel algorithm produced a speed up of 2.78 compared to the sequential version, which corresponds to a 69% efficiency with my four processors, I'd say that's pretty good. Now we'll only see these type of good results if the input matrices are large enough. If we reduce the size of the matrices from being 1000 by 1000 to just 10 by 10,
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-matrix-multiply?u=76281980&t=254)** build and then run that program again, it completes much faster, but the speed up we get ends up being less than one because the overhead involved in the parallel version makes it less efficient than the sequential algorithm when the problem size is this small. Our solution is just one way to tackle this problem. So if you came up with a different approach, that's great. Compare it with our solution to understand the advantages and disadvantages of each.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (3)
> **Versions:** 2.78 (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Merge sort](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-merge-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-merge-sort?u=76281980&t=0)** - [Instructor] For our second challenge problem, your goal will be to design and build a parallel version of a classic merge sort algorithm to sort an array of random integers. Merge sort is a well-known divide and conquer algorithm for sorting the elements in an array. During the divide phase, it recursively splits the input array into two halves, referred to as the left half and the right half. From there, the merge phase repeatedly merges those sorted sub arrays to produce new, larger sorted sub arrays, and it continues until there's only one sub array remaining, which is the final sorted result. To give you a starting point for this challenge, we've already implemented a sequential version of a merge sort algorithm in this example program. The sequential_merge_sort function on line 10 takes in a pointer to the array of integers that we want to be sorted along with the arguments for the first and last indices of the section of the array to sort, called left and right. If the left index is less than the right index, that means there are still multiple items in the array to be sorted, so it needs to be divided further. Line 12 calculates the middle index between the left and right points. Then the sequential_merge_sort function recursively calls itself to sort the left half
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-merge-sort?u=76281980&t=94)** of the array from the left to middle index, and then the right half of the array from the next item after the middle up to the right index. Finally, it calls the merge function on line 15 to merge the two sorted sub arrays. Scrolling down, merge is where the magic really happens in this program. The merge function takes in the left, middle, and right indices, which indicate the left and right subsections of the array to merge. When the merge function gets called, both of these two subsections will already be individually sorted, and the merge function combines and sorts them together into a single sorted section. Feel free to examine the code behind the merge function on line 28, but to use it, you don't really need to know how it works under the hood. The one key thing to understand is that it merges sorted values into the original array, and that means this merge sort algorithm is sorting the array in place. The array that gets passed as a pointer to the array argument in the merge sort function will be modified. Now at line 20, there's an empty function called parallel_merge_sort. Your job for this challenge is to implement your own parallelized version of the merge sort function. Feel free to create any helper functions you need and to reuse sections of code from the sequential version. In particular, we recommend reusing our merge sort function
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-merge-sort?u=76281980&t=191)** to tackle this challenge. Down in this program's main function, we've implemented our simple framework for measuring a parallel program's speed up. So you can evaluate how well your parallel program performs compared to the sequential version. Good luck.

> [!info]- Semantic Content
>
> **Code Identifiers:** sequential_merge_sort (2), parallel_merge_sort (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Merge sort](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-merge-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-merge-sort?u=76281980&t=0)** - [Instructor] For our solution to the merge_sort challenge, we used a recursive divide and conquer approach with multiple threads sorting subsections of the overall array. For the divide phase, rather than recursively subdividing the array until it reaches single elements, we've first configured our base case to subdivide the array based on the number of processors on the computer. For example, if the computer only had four processors, then it would only go through two layers of subdivisions to produce four sub arrays in need of sorting. We then give each of the processors a separate thread executing the sequential merge_sort algorithm to sort each sub array in place. And then the main processor merges the results back together as the recursion unwinds, and each of the other threads finishes sorting their sub arrays. By limiting the depth of recursion in our base case, we're able to use a few threads to sort large sections of the array, rather than spawning a huge number of new threads that all sort tiny portions of the array. Our parallel merge_sort function on line 21 has the same three parameters as the sequential algorithm, but we've added a fourth "depth" parameter to track the depth of recursion. By default, it gets set to zero when the function is first called.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-merge-sort?u=76281980&t=93)** The "if" statement on line 22 represents our base case. It determines if the recursive calls have reached a sufficient depth based on the number of processors in the system, and if so, it executes the sequential merge_sort algorithm to sort the given section of the array. Otherwise, the "else" block, starting on line 25, continues to subdivide the array further. It spawns a separate thread on line 27 to recursively sort the left half of the array, then uses the current thread to sort the right half. After both of these threads have been sorted and the left thread has rejoined, it calls the merge function on line 30 to merge the two sorted halves together. It's the exact same merge function we used in the sequential version of the merge_sort. So that's how our parallel algorithm works. Down in the main function, our program is configured on line 78 to sort an array holding 100,000 random integers, and it will record the time it takes to run each algorithm a hundred times. Merge_sort runs quickly, so we can afford to do a large number of eval runs. Switching over to the console, I'll run the program. And we see that when sorting a 100,000 element array, our parallel version is roughly 2.28 times faster than the sequential version. Now, let's try running merge_sort on a much smaller array
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-merge-sort?u=76281980&t=190)** by decreasing the number of elements on line 78 from 100,000 to just 100. Then I'll build and run the program. And not too surprisingly, I see that now the parallel algorithm is much slower than the sequential algorithm due to its additional overhead. So, somewhere between a 100 and 100,000 is a crossover point where the parallel algorithm becomes faster than the sequential algorithm, at least running on this particular computer. We could potentially improve our program by doing some benchmarking to find that threshold, and then modify our parallel algorithm to revert to using the sequential algorithm if the input array is below a certain size.

> [!info]- Semantic Content
>
> **Code Identifiers:** merge_sort (6)
> **CLI Commands:** find (1)
> **Versions:** 2.28 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music plays) (1)

#### [Challenge: Download images](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-download-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-download-images?u=76281980&t=0)** - [Instructor] For our third and final challenge problem, your goal will be to design and build a program to concurrently download a sequence of image files from the internet and return their total number of bytes. We've hosted 50 images at the URL shown here, which we'll use as the target files to download for this challenge. It's a series of JPEG files, and they're numbered sequentially from one to 50. As a starting framework for this challenge, we've implemented a sequential version of an image downloader function at line 13, which has a single input parameter for the number of images to download. It simply uses a for loop to repeatedly call the download image helper function on line 16, passing it a different value each time from one to the number of images to download. That download image function will download the corresponding image file from the internet and then return its file size in bytes, which gets added to an accumulator variable named total bytes. At the end, the sequential image downloader function returns the total number of bytes that were downloaded on line 18. That download image helper function can be found down the page starting at line 31, along with a support function it uses named write callback starting at line 55. Since we only have 50 images hosted on our target website, the code on line 33 takes whatever number you pass as the input argument
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-download-images?u=76281980&t=93)** to the download image function, uses the modular operator to force it between one and 50 and uses that to generate a valid image URL to download. You don't need to fully understand the details of how this download code works to use it for this challenge. Just know that you can safely pass this function an integer value, and it will download a corresponding image. Our download image function utilizes libcurl or C-U-R-L depending on who you ask, which is a common library for client side URL transfer, but unfortunately, it's not part of the C++ standard template library. How you build and link the libcurl library to your program will vary depending on your development environment. This page from the libcurl documentation explains how to build and install libcurl from source code for several different environments. If you're using Cygwin to emulate a Unix like environment on [Windows](../../Glossary/Service/Windows.md) like us, then you can install the necessary libraries by selecting this libcurl-devel package from the Cygwin setup utility. Similar to the previous two challenges. Your goal for this challenge is to replace the function on line 22 with your own parallelized image downloader. Don't worry about trying to deconstruct our image downloader helper function. We recommend keeping things simple and reusing it as is to build your solution.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/challenge-download-images?u=76281980&t=185)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** url (3), jpeg (1)
> **Exercise Files:** download the (1), template (1), source code (1)
> **Prerequisites:** install (2), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Download images](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-download-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-download-images?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-download-images?u=76281980&t=6)** - [Instructor] For our solution to the download images challenge, we considered each call to the download image helper function as separate tasks that we could run asynchronously. And since we would need to get the return value with the number of bytes from each of those tasks, it seemed like the perfect use case for futures. So, we create a list on line 26 to hold our futures, then use a for loop to start a bunch of asynchronous tasks to execute the download image function for each image and store the resulting feature object in the list. After that, a second for loop on line 30 iterates through the list of futures using the get function to retrieve their return values and then adding them to the total bytes accumulator variable. Finally, when all of the futures are complete and their individual results added together, the function will return the total number of bytes downloaded on line 34. Scrolling down to the main function, on lines 67 and 68, we have the program configured to evaluate each algorithm three times and download 50 images. We've already built the program, but before we run it, I'll press ctrl shift escape to bring up the task manager and select the performance tab so we can view the CPU usage. Now, I'll start the program. And as the sequential implementation is executing, notice that the CPU usage is really low, only a few percent, so it isn't even fully utilizing a single processor.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-download-images?u=76281980&t=102)** However, the [wifi](../../Glossary/Standard/Wi-Fi.md) usage jumped up, fluctuating around three to five megabits per second. This sequential algorithm could take a while, so let's fast forward. Now when the parallel implementation starts running, we can see the wifi usage go way up, spiking up to over 70 megabits per second, but the CPU usage was barely affected; it's still utilizing less than a single processor. After the program finishes, we see that the parallel algorithm produced a speed up of over 14. So, the multi-threaded version is clearly much faster. But how did it achieve a processor efficiency greater than a hundred percent? That doesn't seem possible. The previous two challenges with matrix multiplication and merge sort were both CPU bound problems. As their parallelized code ran, the CPU usage spiked up to a hundred percent because all of the threads we created were running full-time on all of the processors to generate a solution. This challenge, on the other hand, is an I/O bound problem. The limiting factor in how fast we can download all the images is not the number of processors on our system, it's our internet speed. We could add a hundred more processors to this computer, and it wouldn't make a difference because the program barely utilized even one processor. Creating asynchronous tasks to run as concurrent threads improved the program's performance
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/solution-download-images?u=76281980&t=195)** because they could respond and do work as their requested data was downloaded and became available, but they would not have benefited much, if any, from being able to execute in parallel. We saved this challenge for the end of the course to emphasize the importance of understanding the limiting factors in a problem so you can address the right issues to get the best performance out of your programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (2)
> **Env Vars:** cpu (5)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=0)** - You've reached the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=2)** - We hope it's giving you a good foundation of basic concepts and mechanisms that go into writing concurrent and parallel programs,
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=9)** - And an understanding of the challenges and things that can go wrong.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=13)** - If you want to continue exploring, we encourage you to play around with the exercise files. See how you can modify and expand them.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=20)** - Or even better, find ways to break them. You can learn a lot when things don't work.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=25)** - Thanks for watching and-
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-parallel-and-concurrent-programming-with-c-plus-plus/next-steps?u=76281980&t=27)** - [Both] Happy programming.

> [!info]- Semantic Content
>
> **Speakers:** - you (1), - we (1), - and (1), - if (1), - or (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)


## Instructor

- [Barron Stone](../../Instructors/Software%20Development/Barron%20Stone.md)

## Resources

- Exercise files available

## Skills Covered

- Concurrent Programming
- C++
- Parallel Programming

## Path Context

### In [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)
← [Complete Guide To C Plus Plus Programming Foundations](../Software%20Development/Complete%20Guide%20To%20C%20Plus%20Plus%20Programming%20Foundations.md) | **2 of 6** | [Test-Driven Development in C++](Test-Driven%20Development%20in%20C%2B%2B.md) →

## Appears In

- [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)

## Related Courses

_Courses sharing skills:_

- [Nail Your C++ Interview](../Software%20Development/Nail%20Your%20C%2B%2B%20Interview.md) — C++
- [Web Servers and APIs using C++](../Software%20Development/Web%20Servers%20and%20APIs%20using%20C%2B%2B.md) — C++
- [Learning C++](../Software%20Development/Learning%20C%2B%2B.md) — C++
- [Introducing Functional Programming in C++](../Software%20Development/Introducing%20Functional%20Programming%20in%20C%2B%2B.md) — C++
- [C++ Design Patterns- Structural](../Data%20Science/C%2B%2B%20Design%20Patterns-%20Structural.md) — C++

---

[↑ Back to top](#)