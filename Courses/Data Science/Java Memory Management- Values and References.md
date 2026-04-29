---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-memory-management-values-and-references
url: "https://www.linkedin.com/learning/java-memory-management-values-and-references"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 3/15/2024
learners: 46747
skills:
  - Memory Management
  - Java
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHNqyFy0rQSiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710461282859?e=2147483647&amp;v=beta&amp;t=LjUM--S07MjJJulmAJyTDydJrHCeGx4UeNVs489gpBI"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started as a Java Developer]]'
prev_courses:
  - '[[Learning Java Collections]]'
next_courses:
  - '[[Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks]]'
path_nav: '[{"path":"Getting Started as a Java Developer","position":6,"total":10,"prev":"Learning Java Collections","next":"Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/memory-management
  - skill/java
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Memory%20Management-%20Values%20and%20References.md)

![Java Memory Management: Values and References](https://media.licdn.com/dms/image/v2/D560DAQHNqyFy0rQSiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710461282859?e=2147483647&amp;v=beta&amp;t=LjUM--S07MjJJulmAJyTDydJrHCeGx4UeNVs489gpBI)

# Java Memory Management: Values and References

> It's undeniably frustrating to need to restart an application due to performance issues. Did you know that this is often caused by poor memory management, though? Not only do you have the power to address it as a Java developer—you can prevent it altogether. In this course, instructor Maaike van Putten offers you a detailed look at how to deploy effective memory management solutions in Java.Explor

> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references) | 1h 15m | Intermediate | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Java Memory Explained]]** (6 videos)
- **[[#3. 2. Values vs. References]]** (6 videos)
- **[[#4. 3. Careful: Escaping References]]** (6 videos)
- **[[#5. 4. Quick Peek at Next Steps]]** (4 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Make beautiful stack overflow errors
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=0)** - [Maaike] Have you ever had performance issues and needed to restart an application, and do you know why this happens?
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=7)** This has to do with poor memory management.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=9)** Understanding how the memory works, can avoid these sort of problems.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=13)** And actually understanding how the Java Memory works can upgrade your coding skills by a lot.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=19)** This course helps you to truly understand coding Java and what's going on under the hood.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=24)** In order to do this, we visualize the stack and heap memory while coding.
>
> **[0:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=28)** We also touch upon the differences between primitives and objects in the memory, and we'll end with exploring some more advanced topics.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=36)** My name is Maaike and I'm a Java developer and trainer.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=39)** This is the course I'd wish I could have taken, when I started with Java over a decade ago, it would have helped me so much.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=46)** Come and join me in his LinkedIn learning course and create some beautiful stack overflow errors with me.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [maaike] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started with memory management right away, let's make sure this is the right course for you right now.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=6)** In order to be able to follow along, you'll have to be familiar with using IDEs and basic Java.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=12)** If you're not familiar with basic Java yet, these courses can really help you fix that: Learning Java, the Java 11+ Essential Training and Java Essential Training for Students.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=22)** If you're not familiar with Java, it would be good to first take one of these and then come back here so you can level up your memory knowledge after.
>
> **[0:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=29)** If you have the Java basics down already, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Versions:** java 11 (1)
> **Speakers:** - [instructor] (1)

#### Explore the code challenge environment
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/explore-the-code-challenge-enviornment?u=76281980)


### 2. 1. Java Memory Explained

#### What is Java memory?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=0)** - [Instructor] You probably have heard of memory in computer science quite a bit.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=4)** A computer has memory, and the most common memory is the RAM.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=8)** The random access memory.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=10)** The RAM is crucial for storing, and accessing data while the programs are running the applications they are using the RAM for this.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=18)** And the applications can access this very quickly.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=20)** And if your OS is managing this RAM well, then there is enough RAM memory available, you'll enjoy the performance of the application.
>
> **[0:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=28)** Examples of the RAM memory in action are the loading of applications such as when you're opening your browser, it needs to load first, and the same goes when you want to go ahead, and edit a Word document, you have to open Word first.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=41)** And the first time you open something, it often takes a bit long, but when you close it and you open it again, it will be faster, and this is because it's still load in the RAM memory.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=51)** And when the rum gets full, this means that your computer will get very slowly.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=55)** You may notice this principle from firsthand experience.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=58)** Don't worry.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=59)** You're not at the wrong course.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=60)** I'm telling you this because this is something you could probably easily relate to in a way that your computer memory works, and the OS is managing this computer memory.
>
> **[1:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=69)** It's actually very similar to the way that Java memory works as well.
>
> **[1:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=73)** Java memory is responsible for storing the data the Java application needs in order to run.
>
> **[1:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=79)** For example, all the instances in the Java application, they're stored in each a Java memory.
>
> **[1:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=84)** All the primitive values stored in a Java memory.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=87)** Constance, Java memory.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=88)** Fields and metadata, methods codes, native methods, the order in which methods are called, and the memory necessary to run an Info methods, you may have guessed it, but this is all in the Java memory.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=101)** The Java memory is managed by the JVM, and you'll learn more about this later.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=106)** Let's see why we actually want to know how this memories is working in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ram (7), jvm (1)
> **Code Keywords:** this. (1), let (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### The importance of understanding Java memory
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=0)** - [Instructor] Understanding how the Java memory works comes with a lot of advantages for your Java coding.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=6)** It's easier to visualize what's going on with object composition.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=10)** The phenomenon that classes have other classes.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=13)** And for example, the Person class has property address, which also happens to be a class.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=19)** Knowing how this all is working in a memory, it actually makes it easier to know what steps to take to get a certain data field.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=26)** Also, the concept of static and accessing the instance with a This keyword will be so much easier to visualize and understand when you understand how the memory of Java works.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=36)** Without understanding how the memory works, it's actually impossible to truly grasp the concept of the Static and This keyword.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=43)** Another advantage of understanding Java memory is to Pass by value and pass by reference concepts.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=49)** It makes a lot more sense all of a sudden, once you understand how the Java memory is working.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=53)** And this also helps you with understanding immutability and mutability of objects.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=59)** Also, some more complex topics will make a lot more sense, for example, concurrency.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=64)** It's very possible that you haven't worked for it yet, but as a Java developer, you'll have to do so one day.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=70)** Understanding the Java memory makes it easier to understand certain aspects of concurrency, especially the data access.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=77)** Another complex topic, a very fun topic actually, that you'd be able to better understand is the Garbage collection, and the great news here is that in the very last chapter of this course, we'll be touching upon this concept already.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=89)** It will actually help you on so many other fields as well.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=93)** For example, the difference between primitives and the wrapper classes, and all these things you're probably using on a daily basis now already become a lot clearer when you better understand how the Java memory works.
>
> **[1:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=104)** At this point, you might be wondering what I'm still waiting for and you are dying to get started.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=109)** And you're right, we'll be discussing the basics of memory management, the stack, and the heap memory in more detail in this chapter.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=116)** Let's start with the basics of how the JVM deals with the memory management.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), pass (2), class. (1), let (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### JVM and memory management
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=0)** - [Instructor] The JVM is managing the Java memory.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=3)** Without a management of memory, objects couldn't be stored because there would be no memory allocated for these objects.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=9)** And even if that part was in place somehow, it would never be cleaned up.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=14)** So cleaning up the memory, also called deallocation, it's of great importance for running Java code.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=20)** Without it, the code can't run, or if it's only allocated, it will get full and the program will run out of memory.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=27)** Long story short, memory management is important.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=30)** It's one of the very important tasks of the JVM.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=34)** The JVM stands for Java virtual machine, and this is actually the environment that executes the Java code.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=42)** It can actually also execute other code, but let's not get into that now.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=45)** It is what it says, the virtual machine especially for Java.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=49)** JVM is what makes the Java platform independent.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=52)** Every system has its own JVM that will run the written Java code the same way.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=57)** So the reason that Java has the write once, run anywhere principle is the different implementations of the JVM for every platform that can run Java.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=65)** And typically compare this to a travel plug.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=68)** You can use your unplug wherever you are when you have the right travel plug with you and then JVM is the travel plug in this case and your Java application is your plug.
>
> **[1:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=78)** As I just said, one of the responsibilities of JVM is to manage Java memory.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=83)** When the JVM starts, it's reserves a piece of RAM memory for the Java application to use, this memory is called the heap.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=91)** The JVM is actually managing different types of memory.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=95)** It's managing the class area, the heap, the stack, the program counter register, and the native stack memory.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=103)** We'll be focusing on the heap and stack memory in this course.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=106)** Managing this memory, allocating and deallocating is part of the responsibility of the JVM.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=112)** Deallocation of the heap is handled by the garbage collection process of the JVM.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=116)** This is a fairly interesting topic and we'll discuss it in a bit more detail later.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=120)** Let's first have a look at the stack memory.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (12), ram (1)
> **Definitions:** stands for (1), is called (1), is a  (1)
> **Code Keywords:** let (2)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### Stack memory
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=0)** - [Narrator] The stack memory is the memory that's used for executing methods.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=4)** Inside the method, primitives and objects exist.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=8)** The values of the primitives are stored directly in the stack.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=11)** The objects are not stored on the stack.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=13)** Instead the object reference is stored.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=16)** The object reference is the address of where to find the object on the heap.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=20)** Stack memory makes different blocks of memory for every method.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=23)** Once the method is done, the block gets removed.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=26)** And the block of method memory that was laying underneath it, the method that's called the other method can be accessed again.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=33)** When the method is not done, it calls another method, new block is being stored on top of this method memory block with the primitive and references for the memory inside there.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=41)** So let's have a look at a visualization of this.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=44)** So, here's the stack memory.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=47)** And inside the stack memory we have method 1, and method 1 has a bunch of values and references, and they're stored inside this memory block for this method.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=56)** And method 1 is now calling method 2, and method 2 is actually going to be calling method 3, but it has its own values and references stored in its block on the stack.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=66)** So then we're going to be calling method 3, and method 3 is not calling any methods.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=70)** It has a bunch of values and references of this method stored in this block of memory on the stack.
>
> **[1:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=75)** As soon as method 3 is done, the block disappears, and the other memory block is going to be in place again.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=82)** So now we're inside method 2 again, and once that method is done, we're going to be back inside method 1 and we can access the memory of method 1 again.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=91)** So the values and reference of this method can be accessed.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=94)** And eventually all is done and our stack is empty again.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=98)** When we are in a certain method we can access these elements on the stack, but we cannot access any of the other elements.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=105)** And the same is true for when we're done with the method, when it's done, it's going to be done and we can no longer access the method's memory.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=112)** So from the values and object reference of the methods, they're gone, they're being removed automatically as soon as the method is done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Heap memory
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=0)** - [Instructor] The heap memory holds all the objects that exist in the application.
>
> **[0:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=5)** Objects on the heap can be accessed from everywhere in the application using the address of the object.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=10)** We call this address, the object reference.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=13)** The objects on the heap contain the same thing as the blocks of method memory on the stack, primitive values and references to other objects on the heap.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=22)** So let's have a look at a visualization to understand how does this is working.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=26)** So this is our heap memory and on our heap, we have one object.
>
> **[0:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=29)** And this object contains primitives and references to other objects on the heap.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=34)** And then we have Object 2 on our heap.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=36)** And Object 2 on the heap also holds primitives and references to other objects on the heap.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=41)** And finally, we have a third object on our heap, which is containing primitives and references as well.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=47)** So these elements on the heap, they actually need to hold some sort of connection to the stack.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=52)** So here we see that our Method 1 is actually referencing to Object 1 and Object 2.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=58)** And our Method 2, which is a separate block on the stack, is referencing to Object 3 on the heap.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=64)** The objects on the heap could also be referencing each other, but for simplicity, they aren't right now.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=68)** So there is a difference between the stack and the heap here.
>
> **[1:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=72)** And it's an important difference.
>
> **[1:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=73)** So as soon as Method 2 is done, the stack memory is being cleaned up automatically.
>
> **[1:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=78)** But this is not true for the heap.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=80)** As you can see right now, our Object 3 has no longer a connection to the stack.
>
> **[1:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=85)** And this means that it's possible that our object is going to be cleaned up by the garbage collector, but we don't know if it is.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=91)** It might be cleaned up, but we're not sure.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=93)** One thing is for sure though, right now, we can no longer access Object 3 because it doesn't have connection to the stack.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=99)** Also not via any of the other objects on the heap.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=102)** But let's just assume that the garbage collection is going to collect the garbage and cleans up the heap.
>
> **[1:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=107)** As soon as Method 1 is going to be done, Object 1 and Object 2 can also be removed from the heap.
>
> **[1:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=113)** And they are as soon as the application ends.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=116)** And at that point, the stack and our heap are both cleaned up.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), we call this (1), means that (1)
> **Code Keywords:** let (2), finally, (1)
> **Speakers:** - [instructor] (1)

#### Heap vs. stack
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=0)** - [Instructor] The Stack and the Heap memory are very different.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=3)** Stack only contains references and primitive values, and Heap contains Objects.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=8)** While we're talking about accessibility, we can say that Stack can only be accessed on a last and first out base, meaning we can only touch the top of the step, the metadata we're in.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=18)** Heap is accessible whenever you have the address of the object on Heap.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=22)** When we consider size and deallocation, the Stack memory is smaller than the Heap, and a memory gets deallocated automatically for the Stack.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=30)** Whereas the Heap is larger, and the memory needs to be deallocated by the garbage collector.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=36)** In terms of speed, we can say that it's actually faster to access the Stack memory than it is to access the Heap memory.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=42)** And lifetime, we can actually say that the Stack has a shorter lifetime typically, than the Heap, because the Heap exists for the time this application runs, whereas the part of the Stack containing the methods, only exist while this method is being executed.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=58)** Let's go ahead and look at officialization of some code under Stack and Heap memory.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=63)** Let's first activate Stack memory.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=65)** So I'm going to say that'll go into some Stack memory stuff here, meaning I'm going to have some primitives going on.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=71)** So for example an x with value of five, a double y with the value of three, and a boolean b with the value of say false, and a final int xy with the value of three.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=87)** So this is all purely the Stack memory, but we can actually also have something that's combining both, so this is Stack and Heap.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=93)** So let's create a person object p, and I've made a person class here, let me show you.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=100)** So here's the person class, it just has a bunch of properties.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=102)** That's the name, year of birth, whether or not it loves Java, and it has a Object address.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=108)** And I've also made an address object containing some entrance properties such as street name, numbers, zip code, city, country.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=116)** All right, so let's go back to our main and continue creating our Person p, and I'm also going to be creating our Address a, here.
>
> **[2:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=126)** So right now, I have some references on the Stack and the actual objects on the Heap.
>
> **[2:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=131)** So let's work with the Heap memory for a bit.
>
> **[2:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=133)** So what I'm going to do, I'm going to be modifying the actual objects on the Heap memory.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=139)** So I'm going to be exiting the Heap memory, and in order to do so, I'm going to call the setter methods on our objects.
>
> **[2:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=147)** And as you might know, as soon as I call these setters, I'm calling new methods, and when I'm calling new methods, I'm actually adding onsteg memory, but this is so tiny that I'm not going to use it right now, 'cause it won't really show anyway.
>
> **[2:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=159)** So here I'm going to say a.setCity, and this will actually make a new string Utrecht, which is my city, on the Heap memory, and it's going to refer from a, to this memory object Utrecht, on the Heap memory.
>
> **[2:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=172)** All right, so let's do the same thing for country.
>
> **[2:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=175)** I'm from the Netherlands, it should maybe able to hear, and I'm going to say set number, and I'm going to set the number, and then I'm going to set the street name, and of course I'm living in Java Street.
>
> **[3:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=191)** And I'm going to be setting like zip code, which is a Dutch zip code, so it has a Dutch format which looks something like this, all right.
>
> **[3:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=199)** And right now I have created some elements on my address on the Heap, and it's actually created the bunch of strings, and my object is referring to these other objects from the Heap.
>
> **[3:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=209)** So just referring to the references in the block of the address object, and it has created all these new string objects on the Heap.
>
> **[3:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=216)** To be honest, these string objects actually contain other objects because these are array of characters, but let's not make it too difficult for right now.
>
> **[3:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=223)** Instead, let's also work with our person objects, so I'm going to say set loves Java to all true clearly, all right, and let's set year of birth as well.
>
> **[3:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=234)** And let's set a name, let's set my name here too, and I'm going to say Maaike, like this.
>
> **[4:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=241)** So right now I have added a bunch of things on the Heap, but what I can actually also do, I can connect our person and our address object, and I can do so by actually setting the address on the person.
>
> **[4:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=253)** Let me show you, so I'm going to say p.setAddress, and then I'm going to insert our Object a, that we've created, and right now they are both connected on the Heap because the person is referring to the address of address.
>
> **[4:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=266)** Okay, so that's a bit weird.
>
> **[4:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=267)** So the reference that p is holding for address is actually the address of our address object on the Heap.
>
> **[4:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=273)** Still with me? This is actually most that there is to this whole Stack-Heap kind of thing, so the Stack is connected to the Heap, and as soon as you create a new object, you're creating new objects on the Heap, and you're holding the reference on your Stack or on your other objects on the Heap.
>
> **[4:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=287)** And that's all there is to it so to say.
>
> **[4:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=289)** So this is a very good fundament for continuing with some more in-depth knowledge in the next chapter.
>
> **[4:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=294)** There's actually one more difference of the Heap and the Stack that I would like to show you.
>
> **[4:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=299)** And that is the way they are crushing when memory is full.
>
> **[5:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=302)** So the Stack is going to be throwing a StackOverflowError, and when the memory on the Heap is full, it's going to throw an OutOfMemoryError.
>
> **[5:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=310)** So let me show two code examples that are going to be doing just this and explain you why both are happening.
>
> **[5:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=316)** So here we're having an example of a StackOverflow.
>
> **[5:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=320)** So why is this going to be causing the StackOverflow?
>
> **[5:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=323)** Well, because it's going to be creating new blocks of memory on the Stack every time we call the constructor.
>
> **[5:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=327)** Because the constructor is calling itself.
>
> **[5:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=330)** So as you can imagine, based on officialization that we have just seen, it would just be adding new blocks on the Stack memory every time it's going to be calling this new ExampleStackOverflowError on line five, and then as soon as it calls it, it's going to call it again and again, it's creating new blocks on the Stack memory until it's full.
>
> **[5:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=346)** So let me show you, and I'm going to be running this example.
>
> **[5:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=349)** And as you'll see, really soon the memory is full, and is saying, "Exception in thread "main" java.lang.StackOverflowError".
>
> **[5:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=357)** And this makes sense because well literally, the Stack memory gets full because too many methods constructors in this case are being added to the Stack.
>
> **[6:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=365)** So that's the StackOverflow Error.
>
> **[6:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=367)** Let's have a look at the OutOfMemoryError.
>
> **[6:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=369)** And in case of the OutOfMemory, we actually want to be creating elements on the Heap.
>
> **[6:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=373)** And so many are just going to be crushing.
>
> **[6:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=375)** And to be honest this is going to be taking quite a while without JVM tuning, because my memory on my computer is quite big, and by default it starting it with quite some memory.
>
> **[6:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=384)** So what I'm doing here, I'm creating a map and I'm going to be running this already because it's going to be running for a long time anyways, and this HashMap, it has a key of type integer and the value of type string, and in the loop, an infinite loop, because it says, "while true", I'm going to be adding random values to our map.
>
> **[6:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=401)** So it has a random new key every time, and it has a value so random every time I'm going to be running this.
>
> **[6:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=408)** And this going to be speed up a bit so you can see the error really soon.
>
> **[6:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=412)** All right, there we have it.
>
> **[6:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=414)** So this took a while, but it was speed up for you, so you're just seeing this OutOfMemoryError, and it's saying, "Exception in thread "main" java.lang.OutOfMemoryError".
>
> **[7:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=424)** And then it says, "Java heap space".
>
> **[7:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=426)** So we know what's going wrong.
>
> **[7:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=427)** Clearly we know what's going wrong because well, we are doing something really stupid our map here, but something like this can also happen by accident, and then you'll also get the OutOfMemoryError.
>
> **[7:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=436)** Which is not something that your program typically will recover from, but that's a story for another day.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (2), class, (1), continue (1), this, (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** setcity (1), setaddress (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Values vs. References

#### Primitives
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=0)** - [Instructor] Primitives are raw values.
>
> **[0:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=2)** They're nothing more than these three things in memory, a name, a type, and a value.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=6)** Primitives in methods live on a stack memory, and primitives on objects live on the object on the heap memory.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=12)** So there are eight primitive types.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=15)** We have the int for round numbers, We have the byte for smaller round numbers.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=20)** We have short for bigger than byte, but smaller than int round numbers.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=24)** We have long for longer than int round numbers.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=27)** And we have float for decimal numbers.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=30)** We have double for bigger decimal numbers, and float, or at least for more precise decimal numbers and float.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=36)** And we have Boolean for true or false.
>
> **[0:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=38)** And then we have char, for characters.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=41)** Or actually, positive round numbers between zero and 65,000 something, something.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=46)** So these are the eight primitive types.
>
> **[0:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=48)** And you have to be careful, to not confuse the primitives and wrapper classes.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=53)** The wrapper classes are easily recognized, because they start with a capital, for the types.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=57)** So for example, if Boolean would have capital for the wrapper class, and when it's a lowercase letter, it's primitive value.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=64)** The wrapper classes are objects, and they live on the heap instead of the stack.
>
> **[1:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=67)** And this might not seem to matter too much and very often that actually doesn't.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=71)** But if you remember correctly, accessing objects on the heap, is slightly slower than objects on the stack.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=77)** So sometimes, you don't really have another option, but if you do, you probably want to have the primitive value, because the stack is faster.
>
> **[1:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=84)** And whenever it matters, don't execute it the values of the assorted primitives, they'll get cleared up from the stack, and they're gone forever.
>
> **[1:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=90)** So let's have a look at a good example of some primitives, and how to actually start from the stack.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=95)** So here we have a class called methods, and it is containing three methods.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=99)** it has method one, method two and method three.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=102)** And as you can see on our stack memory, it's actually having the method one, and method two on the stack, and method three is being called, but it's not called yet, because it's not on the stack memory just yet.
>
> **[1:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=113)** The X is zero and the Y is one, they're living on the stack.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=117)** And if there would be objects on it, then the references to these objects would be on the stack, in the associated block of method memory.
>
> **[2:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=124)** As soon as the methods done, the block on the stack gets removed.
>
> **[2:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=127)** So let's say I were to change this for a bit.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=129)** So instead of method one, not taking any arguments, it's going to be taking one parameter right now an int.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=135)** And I'm going to be sending my integer X in.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=138)** And for maximum confusion, I'm also going to be called X any methods, two as its parameter.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=144)** So if I would modify X here and say x is two, instead of zero, X would only be two in the block of memory for method two, and not in the block of method one.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=155)** This principle is actually called pass by value, since we're only passing the value to the methods and not the address of the value, since this cannot be done with stack memory.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=164)** Just a few extra things to keep in mind, when working with primitives on the stack.
>
> **[2:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=169)** When you access the primitives on the stack, it's faster than accessing objects.
>
> **[2:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=173)** So when performance is important, and many values needs to be accessed, it might just be better to use primitives instead of the wrapper classes.
>
> **[3:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=180)** But in Java, primitives can not be used for collections.
>
> **[3:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=183)** So whenever you need to work with collections, you'll have to use the wrapper classes.
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=187)** This collections can only store objects.
>
> **[3:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=190)** In the next video, we're going to have a look at objects and where data is stored and how they get passed around.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1), class, (1), pass (1)
> **Warnings:** be careful (1), keep in mind (1)
> **Cross-References:** in the next (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Objects
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=0)** - [Instructor] Objects are a bundle of values.
>
> **[0:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=2)** As opposed to primitives, objects get stored on the heap, and the address to the place on the heap gets stored on the stack, else we'd have no way to get the values from the heap.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=11)** This address is simply called an object reference.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=15)** The memory block for the objects on the heap is a lot like the stack.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=18)** Primitive values are stored on it directly, and other objects are referenced with an object reference.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=24)** There are very many built-in Java objects that we can use such as ArrayList and all the other objects in the collection framework, all the wrapper classes for primitives, such as the integer and double.
>
> **[0:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=35)** We have string, thread, and so many more, but we could also create our own objects, and these objects will also get stored on the heap.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=42)** Let's move over to IntelliJ and revisit our previous example.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=47)** All right, on line 13 and 14, you can see that I'm creating a new person and a new address, and the person reference I'm storing in the variable p, and the address reference I'm storing in the variable a.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=59)** So this is an example of how I can actually connect the stack to the heap, but objects on the heap can also be connected.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=66)** This is something that we can see a bit below.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=68)** We can see on line 28 that we're actually giving our person an address object reference by setting the address.
>
> **[1:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=75)** And as you can see in the visualization, there's an arrow now that's connecting our address and our person, and this is where the object reference of address is pointing to.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=87)** When you send an object to a method, you're sending the object reference over.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=91)** This principle is called pass by reference.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=94)** This is different from passing by value in a very important way to understand.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=98)** Since you're sending the reference, the old place is still referring to the exact same object on the heap, so if you modify this object, it's also changed for all the other places that are holding the reference to the object on the heap.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=112)** So let's modify the object on the heap.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=114)** I'm going to be changing the value for the year of birth, and I can do so by saying p.setYearOfBirth.
>
> **[2:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=126)** And I'm going to make myself a bit younger, which is a great thing to do.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=129)** I'm going to say the year of birth should be 1992.
>
> **[2:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=132)** So if we would run this, certain changes happen to the memory.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=135)** Let's have a look.
>
> **[2:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=137)** All right, so we started off with this situation.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=139)** We had a main method, and it contained a bunch of primitive values, and it contained two references.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=145)** And then we were going to call the setYearOfBirth method on the person instance.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=149)** So the own instances point's going to be exact same object.
>
> **[2:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=153)** And then the year of birth, it was actually set to 1992, and it's changing it on the actual object.
>
> **[2:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=160)** So also the main method is now pointing to the same object as it just was with the new value in it.
>
> **[2:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=166)** So since it has been changed by the method on the same object reference, it's also changed for the first method because the object references are exactly the same.
>
> **[2:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=176)** So also when the setYearOfBirth method is done, it's still going to be modified for the main method since the actual object on the heap has been modified.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=185)** And this behavior, this passing by reference, it's definitely not necessarily bad, but it's something to keep in mind.
>
> **[3:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=192)** Later, we'll focus more on this and also on possible security issues that this can cause.
>
> **[3:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=197)** So this principle is actually also why two objects with the exact same values are not the same when you compare it and use the equal-equal sign.
>
> **[3:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=204)** So for example, if I would say Person p1 equals a new Person, like this, and I would do the same for a Person p2, and I would say new Person like this, and I would then ask Jeff, "Well, tell me Jeff, are p1 and p2 equal to each other?"
>
> **[3:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=223)** Well, right now it would tell me this is false.
>
> **[3:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=225)** The object reference is not the same, so it's returning false.
>
> **[3:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=229)** So ==, it's always looking at the object reference, whereas the .equals methods like this, p1.equals p2, this can actually be custom behavior.
>
> **[4:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=241)** Right now, we did not override the equals method, so it's going to do the exact same thing as the double equals sign.
>
> **[4:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=246)** But we could've said that if the names are the same, we say it's the same person.
>
> **[4:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=249)** It would probably be a silly thing to do, but it's possible.
>
> **[4:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=253)** And this is only possible with the .equals method.
>
> **[4:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=255)** It's not possible to compare p1 and p2 on equality using the equals-equals sign based on anything other than the object reference.
>
> **[4:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=263)** So quickly to sum up, right now, == and the .equals method, they're doing the same because we did not override the behavior of the .equals method, but we could.
>
> **[4:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=272)** And the equals-equals sign, it's always looking at the object reference for its person objects.
>
> **[4:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=277)** As I already said, accessing objects on the heap is a bit slower than accessing values on the stack, and the same goes for accessing the heap from within the heap.
>
> **[4:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=286)** However, when you need to work with values other than primitives, you would just not have an interruption.
>
> **[4:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=291)** There are a few objects for which all of this is slightly different.
>
> **[4:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=295)** Immutable objects clearly cannot be changed, and something special's also going on for a string class.
>
> **[5:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=300)** We're going to have a look at how this is working in the next videos.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), let (3), override (2), pass (1), class. (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Code Identifiers:** setyearofbirth (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Warnings:** keep in mind (1)

#### Final classes and immutable objects
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=0)** - [Instructor] Variables that are final cannot be changed.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=3)** These values are immutable and can only be assigned a value once.
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=7)** When you assign a new value to them, the code will not compile, but this doesn't change anything for the place where they are stored on the stack though.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=14)** It also doesn't change anything on how they are passed around.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=17)** Only the value gets passed around and nothing else, and this means they are no longer final after having been passed around, since only the value gets passed and nothing else, so the parameter in place where it's being received, it's not final, it's just a value.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=32)** Because of this, immutable objects are a slightly different story.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=36)** Immutable objects are objects whose values cannot be changed after creation.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=41)** This means that the variables on immutable objects are final and cannot be changed from inside or outside.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=46)** Let's go ahead and have a look at IntelliJ to see an example of an immutable object.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=52)** So here we are seeing an immutable example object.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=55)** It has two variables and they're both private, meaning they cannot be accessed from outside.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=60)** They only get assigned a value exactly once, namely inside the constructor, and after this, their values cannot be changed.
>
> **[1:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=67)** There's simply no option to change these values after creating the class, but careful with some other classes though.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=74)** For example, this example, it might seem immutable at first, but if you have a closer look, you'll find it's not truly immutable, because again, we're having a final int and a final string, but this time we're also having a final list object, and a final list means that the value of the reference to the list cannot change, so the list cannot be replaced with a new list, but the list itself is mutable, so the values on the list, they can change.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=100)** They can either be added or removed, or the values, the objects on the list, they can change their selves, so careful with these types of classes because this is not really an immutable class.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=109)** It might look like one, but actually it's really not.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=112)** There would have been a better name for this class.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=114)** It would have been really not immutable example, because it's really not immutable, to be honest.
>
> **[1:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=118)** So a few more side notes, just like the regular objects, immutable objects have a reference on the stack and this is pointing to the objects on the heap, but the values on there, so the values on the heap, they cannot change, so even if you've passed these objects around, and this is an object so it's happening by reference, you're passing the reference around, the object is immutable and it cannot change, so the values of the object cannot be changed from outside or from inside a class.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=144)** The object itself simply won't change, hence the name immutable.
>
> **[2:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=148)** Well, when it is immutable.
>
> **[2:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=150)** So it is not being able to change that actually has some benefits in terms of security.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=155)** Since the object cannot be changed, it cannot be changed from outside in order to manipulate the way the Java code is running, and we'll see more about this in the next chapter.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=164)** Some of our built-in objects are immutable, such as the wrapper classes for all the primitives, and also the string class is immutable, and this is very different from final variables because you can actually change the value of the variable containing the string or wrapper class primitive, but this will create a whole new object on the stack, and this can get quite heavy on the heap if you do this too often.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=185)** If you do it wrong, this can easily lead to some out-of-memory error, as we saw in the first chapter.
>
> **[3:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=191)** I already mentioned that the string class is an odd one out when we're talking about memory.
>
> **[3:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=195)** Let's see how this is working exactly in our next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), else, (2), this, (2), let (2), private (1)
> **Definitions:** means that (2), is an  (2)
> **Cross-References:** in the next (1), as we saw (1), next video (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **CLI Commands:** find (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Strings in memory
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=0)** - [Instructor] Strings are the odd one out in terms of objects in memory management.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=4)** Since strings are used a lot in Java, there's a mechanism to improve the performance of strings and to avoid having to create a new object for every string.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=12)** So Java tries to deal with strings extra efficiently, and when the string is exactly the same as a different one, it will be assigned the same reference as the other one.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=21)** And this mechanism is actually called the string pool.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=24)** Instead of always creating a new string object, the Java memory checks a special memory segment called the string pool, to assign a reference of a string to a firewall.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=33)** And this is why when you're in a class the equals equal sign on two strings with the same value will return true.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=39)** The string object is being recycled from the string pool, and this can be done safely because strings are immutable and the value will never change anyways.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=47)** So even if you pass the reference around, this will not cause the risk of your string being changed in a different place.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=52)** So let's have a look at IntelliJ and see this in action.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=56)** So, I have prepared a class here and the class is called ExampleString.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=60)** And on line five, six, and seven, we are creating strings that have not been create before.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=66)** We have a string name with the value maaike in it, we have a string dog with the value Java in it, and a string cat with the value cucumber in it.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=74)** And then on line eight we have a string rabbit and we assign the value maaike to it.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=80)** But this time a new object won't be created because it can actually reuse the one from name since this one is in the string pool already.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=87)** And something similar is going on when we create new person objects, what creates new objects on the heap.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=93)** But then eventually when we set name on line 13, it's not going to create a whole new object it's going to reuse the one from the string pool.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=101)** So let me show this to you by actually doing a very simple system.out.print.ln with the equal equal sign.
>
> **[1:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=107)** So I'm going to start with name equals equals rabbits as the both of the value, maaike, and I'm also going to say name equals equals p.getName.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=117)** And both of these will return true.
>
> **[1:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=119)** Let me prove it here.
>
> **[2:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=121)** So it just means that the string pool is working.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=123)** Java is doing its trick and creating as little objects as possible.
>
> **[2:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=127)** So here's what the string pool looks like on the heap.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=129)** So we have the Stack memory on the left, with a main method blocking it and to firewalls an object references we've just created.
>
> **[2:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=136)** And as you can see in the heap memory, there's a special memory segment called the string pool, and it has three strings in it, maaike, Java, and cucumber.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=145)** Out of this one object in it's that person object, and this person object is also referring to the string pool for the value of maaike.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=152)** But you can force Java to create a string outside of the string pool by using new string to create it.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=158)** Let me show you what I mean.
>
> **[2:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=160)** So instead, if it would say string rabbit equals new string and then send the value maaike in, then now when we compare name to rabbit they won't be the same any longer because the object reference is going to be different.
>
> **[2:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=175)** And prove it it's going to be print false and true right now, as you can see.
>
> **[2:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=179)** It's still printing true because I didn't touch the name or the setName from person.
>
> **[3:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=184)** So this is still using the string pool for the value.
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=186)** But since I changed the rabbit to create a new string object, it's no longer the same as our name string object.
>
> **[3:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=193)** On the Stack memory this actually looks like this.
>
> **[3:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=195)** So right now when we create the string rabbit, we create new string.
>
> **[3:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=199)** And this new string it's actually being created outside of the string pool, so it's also not being reused.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1), this. (1)
> **Code Identifiers:** getname (1), setname (1)
> **Definitions:** is called (1), means that (1)
> **CLI Commands:** cat (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Primitives and objects in memory
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=0)** - [Instructor] Let's summarize all that we have seen so far with a bit of a bigger visualization example.
>
> **[0:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=5)** We're going to visualize the creation of some custom objects, some primitive values, and we'll add in some strings, and also see some immutable objects.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=14)** We'll see what all of this looks like in the heap and the stack memory.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=18)** So this is our starting point.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=19)** This is Java memory, and we see our stack memory on the left and our heap memory on the right.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=25)** Our heap memory contains the string pool, and our stack memory shows that the main method was already started.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=30)** So there is a block for the main method created.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=33)** We then create two primitive values in our main method, an integer x with a value of five, and a Boolean b with the value of false.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=41)** Then we'll be creating a string object.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=44)** And the string is being inserted into the string pool, meaning what we just set, string food equals grapefruit in this case.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=51)** Then, next up we're going to be creating a custom object.
>
> **[0:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=54)** And a custom object is a person object, but it's slightly different from the one we have seen because this one is actually other, than in primitive for the year of birth, but a seventh integer upper class.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=65)** And as soon as we've created person object, the person object lives on the heap.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=70)** What we then do, we use the set method to say lovesJava equals true.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=74)** And then we see that the lovesJava value is true, but the year of birth and the name have nothing set, and both of these are still null.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=82)** What we then do, is that if we set the name of the person and we set to Maaike, and as we do so, we're actually create a Maaike on the string pool.
>
> **[1:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=90)** The next thing we're doing, is we are setting the year of birth.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=94)** And I already said, the year of birth is an integer upper class right now.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=99)** So in other object gets created on the heap and the integer upper class, if you remember, I've already said it's immutable.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=106)** So we cannot change the value of this new object on the heap.
>
> **[1:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=111)** When we change the value of a year of birth, we're actually creating a whole new objects on the heap, which is actually what's happening next.
>
> **[1:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=118)** So we have to insert year of birth still in our main method.
>
> **[2:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=122)** It's just the reference variable, but we make our person object points to a new object on the heap, namely an integer containing the value of 1992.
>
> **[2:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=132)** And then lastly, what we can also do, we can create strings outside of the string pool and we do so by using the new string constructor.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=139)** And when we do that, for example, we create another Maaike, calling it name two, we say string name two equals new string Maaike.
>
> **[2:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=146)** You can see the object gets created outside of the string pool.
>
> **[2:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=150)** And looking at this bigger picture, you can easily see that escaping references could be a problem because whenever you've passed something by reference, you can actually start changing the value of this object.
>
> **[2:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=161)** And in very many cases, this isn't a problem.
>
> **[2:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=163)** And in some cases, this is a problem, which is something we will be focusing on in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), class. (1), class, (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** lovesjava (2)
> **Analogies:** for example (1), picture (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Making an object immutable
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-making-an-object-immutable?u=76281980)


### 4. 3. Careful: Escaping References

#### The problem of escaping references
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=0)** - [Instructor] At this point, you already know what pass by reference means.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=4)** We have seen this when we called the method with an object as an argument.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=8)** Reference to this object was sent.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=10)** And whenever the method modified this object, this meant that the object was also modified for other places in our code that we're holding the same reference.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=17)** Since they are both pointing to the very same object.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=20)** Whoever has the reference can access the object.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=24)** So no news there, but this passing by reference is also true for returning objects from methods.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=30)** Reference to the object gets sent.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=33)** And this can also happen to third-party libraries in your application for example.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=36)** Whenever this happens without it being your intention, we call this escaping references.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=42)** Sending an object reference unintentionally with possible negative side effects.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=47)** Even though this might be not too surprising to you, security breaches that this behavior of Java can cause, they might be a surprise.
>
> **[0:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=54)** Let's move over to IntelliJ and have a look.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=57)** So here we have an order object.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=60)** And our order object is holding some sort of date, a list of products and a user.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=65)** It's just an order.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=66)** So it doesn't seem too harmful when we sent this order around right?
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=70)** But more careful here, because we have a user object on our order.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=74)** So let's move over to our user object here.
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=76)** I had, as you can see, our user is having a name, an address object and something special, a sensitive object.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=83)** And if we open the sensitive object or it turns out, it's not that really sensible, and it's a silly example.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=89)** But we're also sending the reference to our sensitive object when we return the order.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=95)** So this is definitely something to watch out for.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=98)** Because we meant to return the order object, but we probably didn't mean to also return the sensitive object containing some secret code.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=106)** This is why you should be very careful with this principle called pass by reference.
>
> **[1:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=110)** And often you would want a solution for this.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=112)** We'll see some solutions soon enough in a few videos from now.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), let (2), for. (1), this. (1)
> **Tools:** intellij (1)
> **UI Navigation:** open the (1)
> **Definitions:** we call this (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Collections and escaping references
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=0)** - [Micah] Collections can hold multiple objects, and they do so by holding multiple references to all these objects.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=6)** It is common that when you return the collection from a method that you make a clone of this collection because a collection is an object itself.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=14)** And when you return a collection, sometimes you don't want to share to the reference.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=18)** And if that's the case, you have to make a clone.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=20)** 'Cause if you make a clone, you cannot modify the collection from another place using reference.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=25)** So for example, something gets added or something gets removed, this won't happen to your original place because it's a new reference and a new object.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=33)** So in these cases, you'll return a clone of your collection.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=36)** Let's have a look at an example in IntelliJ to see this in action.
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=40)** All right, so I've made little demo here, and clearly, this is poorly structured code and this looks terrible, but it's just for the purpose of explaining what's going on with collections and references and more importantly, escaping references.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=52)** So there's two functions on top, and we'll see these later.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=55)** Let's first have a look at our main method and what's going on.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=59)** So I'm creating user, and I'm inserting my name, Micah.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=63)** I'm creating a new address with nothing under, and a new SensitiveObject.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=66)** Everything I need to create user using the constructor of the user.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=70)** Then, I create a product list, and this is a list with strings.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=74)** I'm adding one product to this list, and this product is simply called product.
>
> **[1:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=78)** Then I'm creating an order using my createOrder methods.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=83)** Let me show you where I'm doing it.
>
> **[1:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=84)** I'm doing it on top.
>
> **[1:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=86)** Actually, I wouldn't need a method for this, I could also have done this below.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=89)** But I say createOrder, and I'm sending in these references, I'm sending in the reference to the user, as you just saw, and to the products, and then I use the local date now to create a date for our order.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=101)** And then we have the order.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=103)** Now that we're done doing, we are going to be processing our lists a few times, and we're also going to be modifying our list.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=109)** So I have an order and my order has a list.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=112)** So the original list, I'm going to send into processProducts.
>
> **[1:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=115)** And it's just going to go and do for each on all the strings in the list with strings.
>
> **[1:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=119)** So we're going to do the same for a copy.
>
> **[2:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=122)** And I'm just making a copy by saying list, generic string, copy equals order getProducts.
>
> **[2:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=128)** And then, we're going to say, processProducts, copy.
>
> **[2:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=131)** And this is again, go to printing every string in my list of products.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=135)** Then I'm going to be modifying the list by adding a new product to the copy list.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=139)** And then, I'm going to be printing both again by using new processProducts method.
>
> **[2:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=143)** So let me run this and you'll see what's going on.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=149)** So in the original situation, I have a product on my list, and so does the copy.
>
> **[2:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=154)** Then, I'm going to be do the modifying action by adding new products.
>
> **[2:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=157)** And as you can see, both the original and the copy variable are having a new product on the list.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=164)** And this is because it's the same object on the heap.
>
> **[2:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=166)** So whenever I add something to it, it's been added for every place that has the reference.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=170)** Clearly, it's the same object.
>
> **[2:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=173)** So sometimes, this is not a problem.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=174)** Maybe it's not a problem at all that you can add or remove products from your list and other places.
>
> **[3:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=180)** But an extra problem arises when you start using mutable objects in your collection.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=185)** In the previous one, we had a collection with only strings on there.
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=188)** So when we made a copy of this collection, so actually, really copying the reference, the strings, they can be changed, but if this is a problem, you will actually have to clone the collection.
>
> **[3:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=199)** So in order to protect our products inside our order, we'll actually have to make two modifications.
>
> **[3:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=205)** Let me show you which ones.
>
> **[3:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=210)** Here is our order class.
>
> **[3:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=212)** And the first one we'll have to make, it's the most obvious, actually.
>
> **[3:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=215)** We'll have to go inside here.
>
> **[3:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=217)** And before we're going to be returning our products, I'm going to just create a little copy of this products list.
>
> **[3:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=222)** So I'm going to say list, string, like this.
>
> **[3:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=225)** There's actually multiple ways to do this, but I'm just going to do the easy way right now.
>
> **[3:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=230)** I'm just going to say, copy equals.
>
> **[3:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=232)** And down here, I'm just going to say new ArrayList, and send in our original products like this.
>
> **[3:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=238)** So it's going to create a list, a new list, with the product of the old list.
>
> **[4:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=242)** And I'm not going to be returning the products, but I'm going to be returning the copy.
>
> **[4:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=247)** The second modification I would have to make is that in here, and going to the same thing.
>
> **[4:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=252)** So I'm not going to be using the reference I just had, but I'm actually going to say new ArrayList, and then products again.
>
> **[4:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=258)** Because else, wherever I've used this constructor, it will still have a reference to my order, which might be something I wouldn't want.
>
> **[4:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=265)** So right now, this will actually have quite some implications for our code because if I'm going to be running this code again, you will see that when we create the copy here on line 39, we say, o.getProducts.
>
> **[4:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=279)** It's actually a new list.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=280)** So when I'm later going to be adding to our copy list, it's only adding to the new list.
>
> **[4:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=285)** So after the modification, only the list named copy will be changed.
>
> **[4:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=289)** Let me show you by running this.
>
> **[4:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=292)** And as you can see right now, in the original and a copy in the first half, they both only contain products.
>
> **[4:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=298)** But then when we do the modifying trick, the original one stays exactly the same, but the copy one, it gets new products.
>
> **[5:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=305)** So this is a problem that's quite easy to solve, but a more complicated problem arises when you start using mutable objects in your collection.
>
> **[5:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=312)** In a previous one, you've seen a collection of strings and we copied it and returned it.
>
> **[5:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=317)** And this way, we already solved the issue of we're escaping collection reference.
>
> **[5:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=321)** And strings, they can be changed, but when we change the string, the original object doesn't change value.
>
> **[5:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=327)** So since strings are immutable, we actually don't have any extra risk.
>
> **[5:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=331)** But something else is going to happen when we use mutable objects.
>
> **[5:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=334)** It's actually not a risk that the collection will be modified because we still create a copy of the collection.
>
> **[5:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=340)** But when we actually modify the objects on the collection, they will still be changed.
>
> **[5:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=345)** So let me show you this in IntelliJ, by updating our example.
>
> **[5:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=350)** So in the order class, I'm going to make a change.
>
> **[5:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=353)** I'm going to, instead of have a list with the generic string, create list with the generic product.
>
> **[5:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=358)** So our list is going to be containing products right now.
>
> **[6:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=361)** So let me just change this.
>
> **[6:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=364)** And I'm going to create a list of products in here, like this, and I want to have it changed there.
>
> **[6:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=376)** And there we go.
>
> **[6:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=377)** It has not changed everywhere.
>
> **[6:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=379)** So let me quickly update this.
>
> **[6:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=380)** Products.
>
> **[6:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=382)** And then this should be product too.
>
> **[6:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=385)** Products.
>
> **[6:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=388)** Let's see, this one did work.
>
> **[6:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=391)** Okay.
>
> **[6:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=392)** So clearly, our code is not compiling right now because I'm sending a list of strings attachment, but we're going to be updating that too.
>
> **[6:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=398)** So I'll quickly go here.
>
> **[6:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=400)** And I'm going to be changing this one to actually be new products that I'm going to be adding on there.
>
> **[6:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=409)** And to have a product, I need to have a name.
>
> **[6:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=411)** So let's go ahead and create a, well, let's just go ahead to say Java book.
>
> **[6:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=417)** It's a book for smart Java developers, something like this.
>
> **[7:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=423)** And it's 75, something, something.
>
> **[7:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=427)** Never used double for price, but this is just an example.
>
> **[7:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=430)** So don't worry too much about it.
>
> **[7:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=432)** And then, our createOrder we still need to update as well.
>
> **[7:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=435)** So this is actually going to be a list of products like this.
>
> **[7:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=440)** Same for here.
>
> **[7:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=441)** Just a little scan through the list of products.
>
> **[7:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=443)** And that's going to be products. There we go.
>
> **[7:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=446)** And in here, I'm going to be printing the name of the products.
>
> **[7:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=449)** All right. So just a few minor changes here.
>
> **[7:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=453)** So our copy is actually going to be of product two.
>
> **[7:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=457)** And in here, we cannot just add a new product.
>
> **[7:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=459)** So I'm going to say new product, and just go ahead and say new products.
>
> **[7:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=465)** So for new, and prices.
>
> **[7:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=468)** I dunno, 5.0.
>
> **[7:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=471)** And there we go.
>
> **[7:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=473)** So I've it compiling right now again.
>
> **[7:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=475)** So quickly, what did I change?
>
> **[7:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=476)** Well, actually, all I did was I updated the code a bit to accept products on our list instead of strings on our list.
>
> **[8:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=482)** And the point here is that right now, if I'm going to be running this, you won't see a change because there's still have two different lists, since we are creating a copy.
>
> **[8:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=491)** So the original list doesn't change, but the copy list does.
>
> **[8:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=494)** But here's the catch.
>
> **[8:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=495)** 'Cause right now, I'm having a copy of my list, but I can actually edit the orders on my list.
>
> **[8:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=500)** So I'm going to do something else in a modifying bit now.
>
> **[8:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=503)** So, okay, I'm going to be adding a new product.
>
> **[8:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=505)** That's fine.
>
> **[8:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=506)** But I'm also going to be doing, and going to be editing our product that I made on top.
>
> **[8:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=514)** And I'm going to be doing so by saying product.gets.
>
> **[8:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=518)** And then, I'm just going to get the first one since there's only one on the list.
>
> **[8:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=521)** I'm going to say setName.
>
> **[8:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=523)** And I'm going to do something else, I'm going to say, this is not Java, but it is something totally different.
>
> **[8:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=528)** JavaScript book, like this.
>
> **[8:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=532)** Oh well, then the description won't match anymore, but let's not make life too complicated.
>
> **[8:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=536)** And I'm going to be running this again.
>
> **[8:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=538)** And this is going to be interesting.
>
> **[9:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=540)** So look, so right now, both my original and my copy list have the JavaScript book, which actually doesn't really make sense, right?
>
> **[9:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=550)** Because I made a copy before I modified the list.
>
> **[9:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=554)** Well, what's happening here?
>
> **[9:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=555)** Let me tell you.
>
> **[9:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=556)** So you may think right now, wait a minute.
>
> **[9:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=559)** I made a clone.
>
> **[9:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=560)** And definitely true, but you've only made a shallow clone.
>
> **[9:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=563)** And this clone or copy of the list is actually creating a new instance of the collection.
>
> **[9:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=568)** So there's a new reference for the collection.
>
> **[9:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=570)** But the references to all the objects on the collection, they're exactly the same.
>
> **[9:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=575)** So when someone modifies an object on the collection, it's changed for the objects everywhere that the hold collection.
>
> **[9:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=582)** So in this case, also for the other collection, so in the next video, we'll see how to avoid problems with escaping references of the objects on the collection.
>
> **[9:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=590)** And I can tell you how to do this already.
>
> **[9:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=592)** We're going to make a deep copy instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (8), this, (4), case, (2), else, (2)
> **CLI Commands:** make (10)
> **Code Identifiers:** createorder (3), processproducts (3), getproducts (2), setname (1)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** intellij (2)
> **Versions:** 5.0 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Avoiding escaping collection references
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=0)** - [Instructor] So, we just created a copy to deal with escaping references of collections.
>
> **[0:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=5)** But we can also do something different.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=6)** We can create an unmodifiable collection.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=9)** This way we are using a special method, actually, one of the special methods, to create a collection that can not be altered.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=18)** This will solve the problem for collections with immutable objects as a build in Java solution.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=23)** This way the collections can not be modified.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=25)** And if there are immutable objects on there, well, they can not be changed anyways.
>
> **[0:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=29)** So there's no problem anymore.
>
> **[0:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=31)** But it doesn't solve the escaping references of immutable objects on collections though.
>
> **[0:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=35)** Let's have a look at how to create unmodifiable collections in IntelliJ.
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=40)** So, where we created the copy we now just send all the product's objects to a new array list.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=47)** I'm going to do something different right now.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=49)** I'm going to be returning an unmodifiable list.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=52)** And I can use the list or the collection's interface to do this.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=55)** Let me show you two ways of how to do this.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=57)** First one, I'm going to say list.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=59)** And then I'm going to say copyOf, and insert to collection here.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=63)** Right now I have created an immutable collection.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=66)** There is actually another way to do it.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=68)** And let me just write this beneath there.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=71)** And that is by saying return collections, unmodifiable list, and then insert products here, just like that.
>
> **[1:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=81)** So, if I were to do either one of these two ways I have an immutable collection.
>
> **[1:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=85)** So, let me try to run this code.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=88)** And you'll see that something will go wrong.
>
> **[1:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=90)** Because we're going to be adding something to this immutable collection which won't work.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=94)** We'll actually get an exception.
>
> **[1:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=96)** And you see the unsupported operation exception.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=98)** And you also see it's an UnmodifiableCollection.add, which will try an exception, which is just what we wanted.
>
> **[1:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=104)** Let me just show you quickly that the other one is doing the same thing.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=109)** Just go here, comment this one out, turn this one on.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=114)** Go there, and run it again.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=116)** And you'll see once more we have the unsupported operation exception.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=120)** Because it's an immutable collection, and we can not do add.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=123)** But it doesn't solve our issue with the custom objects or immutable objects and collections just yet.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=129)** In order to fix that I actually have to create a deep copy.
>
> **[2:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=133)** So, I have to create copies of old objects on the collection and all the objects on these objects that are on the collection, et cetera.
>
> **[2:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=140)** So we have to go quite some levels deep in some cases.
>
> **[2:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=143)** And this is always a custom process.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=145)** And there's not such an easy example for as the one we just saw.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=149)** So, let me show you how to do this, or at least what's one way to approach this.
>
> **[2:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=154)** The first thing we'll have to do, we'll have to modify our product class.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=158)** And we're going to be overriding the method's clone in here.
>
> **[2:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=161)** I'm going to say @Override.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=164)** And then I'm going to create the public object clone method like this.
>
> **[2:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=169)** And I'm just going to declare the throws clone does not support the exception.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=174)** Ideally, I could deal with it in a try-catch, but right now I'm just going to say it in the method declaration instead.
>
> **[3:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=180)** And actually, we'll have to create a clone, so a copy of a product.
>
> **[3:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=183)** And in here we'll have to do some custom stuff.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=185)** Because our product is a custom object, and it has other objects too.
>
> **[3:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=189)** Our product actually doesn't have too many interesting things.
>
> **[3:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=192)** It only has a string, a string, and a double.
>
> **[3:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=194)** So this is going to be an easy one.
>
> **[3:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=195)** But if our product was having some mutable objects we would have to create clones of these as well.
>
> **[3:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=200)** So, for now this is easy.
>
> **[3:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=201)** Let's just start with a product and say products.
>
> **[3:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=205)** Clone, like this, and we set it to null first.
>
> **[3:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=209)** And then I'm just going to be cloning it using the super clone, which is in the object class.
>
> **[3:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=216)** I'm going to say product, and then super clone like this.
>
> **[3:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=220)** And right now I would have to override all the mutable properties.
>
> **[3:44](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=224)** So, let me just write this here to make it clear.
>
> **[3:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=227)** Override all mutable properties.
>
> **[3:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=230)** In this case, there are none.
>
> **[3:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=234)** All right, and then when this is all done, when you have overwritten all the mutable properties with custom clones of them, we can actually return our product clones like this.
>
> **[4:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=245)** So, right now we only have to do some minor changes.
>
> **[4:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=248)** We need to adjust our order to actually when we say get products, also clone new products.
>
> **[4:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=254)** We could actually also do the very same thing in the constructor, but I'm not going to be doing this right now.
>
> **[4:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=260)** In here I'm going to create deep copy.
>
> **[4:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=263)** So, let me just say deep copy.
>
> **[4:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=267)** And I'm going to be having a list with type products, like this.
>
> **[4:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=275)** I'm just going to call it copy again.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=278)** ArrayList of it, there we go.
>
> **[4:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=281)** And then I'm just going to create a for each here.
>
> **[4:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=282)** I'm going to say for every product in our products list we are going to be adding a clone to our copy.
>
> **[4:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=292)** So, products, and then I'm going to say p.clone.
>
> **[4:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=297)** And right now we still have to cast this to a product.
>
> **[5:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=301)** Because the overrides actually have an object as the return type.
>
> **[5:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=304)** So I'm going to be casting this to our product.
>
> **[5:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=307)** And then it's fine.
>
> **[5:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=309)** So, if I'm going to be running this again, we should not get a JavaScript book.
>
> **[5:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=315)** And right now we still have some compilation issues.
>
> **[5:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=317)** Because I'm not dealing with the exception that it may throw.
>
> **[5:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=320)** So I'm just going to be quickly adding this in a try-catch block, which I still think is something I should have done earlier.
>
> **[5:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=327)** But let's just leave this for now.
>
> **[5:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=330)** Let's not make this about exceptions instead.
>
> **[5:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=332)** Let's just say clone not supported, which is going to be printing the StackTrace if that happens, like this.
>
> **[5:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=341)** All right, there's actually one more thing we'll have to do.
>
> **[5:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=345)** And this is actually related to our cloning.
>
> **[5:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=348)** Because in order to be able to have the clone method called you'll have to implement cloneable.
>
> **[5:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=353)** So, in here we have to say implement cloneable like this.
>
> **[5:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=358)** And if you don't say implement cloneable it will throw the exception clone not supported.
>
> **[6:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=362)** So, right now, if I'm going to be running this we are instead of having our references copied from the one list to the other, we are creating new products.
>
> **[6:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=371)** And we make deep copies, so this should actually only have one JavaScript book in the list once we're done.
>
> **[6:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=377)** So, let's see if this is indeed the case.
>
> **[6:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=379)** And as you can see right now, only the original JavaScript book has been changed.
>
> **[6:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=384)** And the copy still contains a Java book.
>
> **[6:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=386)** So, right now we can conclude that our deep copy is working and that we have successfully managed to not have an escaping reference via our mutable object on our collection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (9), override (3), this, (2), class. (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** copyof (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Example custom objects: References on the loose
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=0)** - [Instructor] So at this point, we have seen escaping references in more detail for collections, and this is a very common way to reference escape, but the problem is that all objects that are returned with any precautions have to reference escaping.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=14)** This is a potential issue for every mutable object.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=17)** For immutable objects, you don't need to worry about it.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=19)** They can be accessed from outside, but they cannot be modified anyways.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=23)** For mutable objects, this is a problem.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=26)** And whenever an object is extra sensitive or extra accessible, you'll have to create deep copy before returning the object.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=34)** Let's have a look at an escaping reference example in IntelliJ.
>
> **[0:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=38)** So once more, I've created a little demo that is super chaotic and nothing like real production code, but it will demonstrate how references escape in a bit more detail.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=47)** So, what's going on here?
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=49)** In our main methods, we are creating a user with sensitive object, and we set the secret code, and our sensitive object to 1, 2, 3, 4, 5, 6, right?
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=59)** There we created a user, create the same product list as we did last time, I'm creating an order again.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=64)** Then we sent the order, and let's have look at our set order method.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=68)** It looks perfectly fine.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=70)** This is sending ordered prints a date, prints old products, but then it actually also changed as the sensitive object, which is clearly where things do, but we're sending our objects around.
>
> **[1:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=79)** And in this case, it's in the same class, but we're not sure where we're sending it to.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=82)** So, let's just pretend that it's on bad outside code, and this is changing or sensitive objects.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=87)** So it's saying grab the order, gets a user and set the sensitive object to be new sensitive objects.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=93)** So, it's replacing sensitive object for user.
>
> **[1:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=96)** All right, then after we have sent the order, I am actually just printing the secret code to show to you that art center object has been overwritten.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=105)** So, let's run this.
>
> **[1:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=107)** And as you can see, it prints zero as a last line.
>
> **[1:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=111)** And this means that or sensitive object has been overwritten.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=114)** And this is dangerous because it's on the original user object, since we are just returning the user reference.
>
> **[1:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=119)** And the user has the sensitive object reference.
>
> **[2:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=122)** In order to fix this, they'll have to create a deep copy, and we'll see how to do so in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), super (1), case, (1), class, (1), this. (1)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Avoiding escaping references
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=0)** - [Instructor] So how to fix these escaping references?
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=3)** Well, in order to start, we'll need to make user cloneable, so we say influence clonenable and then, below, we are actually overriding the clone function.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=13)** And actually you always have to override the clone function.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=16)** Also, if you don't want to modify it at all and just want to super of clone, because clones protect it in the optic class.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=22)** So you'll have to override it, even if you're not going to do anything fancy, but we need to do something special here.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=27)** In the previous example, we didn't have any mutable properties, but our user it has a mutable property and the mutable property is our sensitive object.
>
> **[0:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=35)** So the clone management is using this super dot clone and then, for all the mutual properties, it's going to create a clone as well.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=42)** And the clone is doing nothing more than creating a shallow copy.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=45)** So you have to do this for every object as mutable objects itself, because then the shallow copy is not enough.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=51)** Luckily for us, it ends there because when we have the sensitive object, it only has in property.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=57)** So here we can just suffice with support of the clone.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=60)** And this is fine.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=62)** So when we go any clone super, we set the sensitive object to a clone as well, and then we return the use of cone, but then we still need to call this clone whenever we are going to be actually using it.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=74)** So right now, even now that this chlorine is, has been implemented, this is still going to have zero because we are still returning the reference.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=83)** So in order to fix this, we'll have to change our order class or get user methods in here.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=89)** It's not just returning the user, which is not what we want.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=92)** So instead, we're going to be modifying this method a little bit to right now, not return to use it, but return a clone of the user.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=99)** And please mind is strongly clone sports exception.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=102)** So I have to rapidly try catch again.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=105)** So I'm going to say return and then just say user to clone and also cost it to a user, because he's actually returning to the objects that we go catch deep clone, non supported exception, print secretaries, and then return.
>
> **[2:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=122)** No, when it didn't work like this, right?
>
> **[2:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=126)** So right now I'm returning the clone.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=129)** And at this point in our demo where I'm getting the user, I'm getting a clone right now.
>
> **[2:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=136)** So not getting the actual user object.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=138)** And even though I'm saying, get user on both the same order object is creating a clone twice.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=144)** So it's going to be different clone.
>
> **[2:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=146)** So both of my get users on line 18 and line 24, they are different because these are different clones, but it's way 1, 2, 3, 4, 5, 6 was still be printed.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=155)** So let me run this I'll show you it's right now, instead of zero is having an original ID because we are using clones and we are protecting a references from escaping and we cannot modify them from outside.
>
> **[2:47](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=167)** So this is a good way to actually deal with escaping references.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=170)** But as you can understand, this can get quite messy, especially if you have objects that have lots of beautiful objects that have lots of mutable objects, et cetera, actually, a bunch of libraries that can help you out there.
>
> **[3:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=181)** But none of these are perfect.
>
> **[3:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=183)** Creating deep clones is still a bit of a messy thing to do a might as well did manually.
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=187)** It's not a bad coding practice.

> [!info]- Semantic Content
>
> **Code Keywords:** super (3), function (2), override (2), this, (2), class. (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Fixing an escaping reference
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-fixing-an-escaping-reference?u=76281980)


### 5. 4. Quick Peek at Next Steps

#### Garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=0)** - [Instructor] I have mentioned garbage collection quite a few times already.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=3)** When objects are created in the heap memory they start taking up space, clearly.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=8)** And at some point we no longer need the objects in our heap memory, and they can be removed.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=13)** Garbage collection is the removal process of objects on the heap.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=16)** So, how to start the garbage collector?
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=19)** It's actually quite an elaborate topic that's definitely worth understanding at a very detailed level.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=24)** But in this course we'll only be covering it briefly.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=27)** So, you may wonder, when does garbage collection take place?
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=30)** Well, you don't know.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=32)** Although they don't typically say, okay, but how can I evoke it?
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=36)** Well, you could call system.GC.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=39)** This is a method.
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=40)** This is merely a suggestion to the JVM that it should start the garbage collection process.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=45)** And actually, you can not really force the JVM to start garbage collection.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=49)** So, this is not something that you get to decide as a developer.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=52)** The JVM will decide when garbage collection should start.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=55)** The good news is that there are quite some options for garbage collection that you can specify on startup.
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=60)** And these options are pretty neat and working well.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=63)** Garbage collection cleans up the heap memory.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=65)** And the JVM will make sure that it doesn't run out of memory.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=68)** Well, this isn't always possible though.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=71)** Because now it comes to key to garbage collection.
>
> **[1:13](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=73)** Only objects that no longer have a connection to the stack can be removed by the garbage collector.
>
> **[1:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=78)** And this can for example happen when the variable holding the object reference got replaced by another object reference.
>
> **[1:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=84)** Or maybe it even got replaced by zeros.
>
> **[1:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=86)** For example, when I'm done with a user objects, or it can be set to null.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=91)** For example, when I'm done with the user object I can set it to user equals null.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=95)** And then there's no longer a connection between my user variable and the object on the heap.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=100)** When an object is not having anything referring to it on the stack it will become ready for garbage collection.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=106)** So, let's look at a visualization of this.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=108)** So, here's my heap.
>
> **[1:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=110)** And in my heap memory I have a bunch of objects.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=112)** As you can see I have some ints.
>
> **[1:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=113)** I have a string pool.
>
> **[1:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=115)** I have a separate string.
>
> **[1:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=115)** And I have two person objects.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=117)** All right, let's have a look at my stack.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=120)** Now, you can see that on my stack I have a string list in my string pool.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=123)** And, actually, I also have a person object list.
>
> **[2:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=127)** So, if I compare this heap to my previous heap there's actually two objects that are ready for garbage collection, the person and these strings that have no connection to the stack.
>
> **[2:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=137)** These items are ineligible for garbage collection.
>
> **[2:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=140)** One side note on this guard collection process though, this doesn't need to be in direct connection to the stack.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=145)** Here's an example of indirect relations.
>
> **[2:28](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=148)** We have the person reference on the stack.
>
> **[2:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=150)** And it's pointing the person reference on the heap.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=152)** This person object on the heap is pointed to another object on the heap.
>
> **[2:36](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=156)** In this way this other object, it has no direct relation to the stack, but it has an indirect relation which will not make it eligible for garbage collection yet.
>
> **[2:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=165)** There must be no way to get to the object from the stack.
>
> **[2:48](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=168)** And in this case there is, namely by the person object.
>
> **[2:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=171)** So, at this point, that's actually all I want to share about the garbage collection process.
>
> **[2:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=175)** There's a lot more to it.
>
> **[2:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=176)** But you need to know these basics about the garbage collection process that you'll have to know in order to understand how D allocation takes place.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (4)
> **Code Keywords:** let (2), this. (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### JVM tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=0)** - [Instructor] The JVM runs in a certain way and this way can be adjusted with JVM tuning.
>
> **[0:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=5)** This requires specifying how the JVM should start.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=8)** When starting a Java application, the JVM can be given certain options and parameters to do so.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=14)** It can optimize garbage collection, change heap memory.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=17)** You can optimize metaspace, which is the previous PermGen memory.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=22)** This is actually where all the static variables and static methods are being stored.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=26)** This is special reserved bit of the memory, which you'll see in more detail with more advanced Java memory management topics.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=33)** And with JVM tuning, you can also dump the heap memory on the OutOfMemoryError.
>
> **[0:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=38)** So this all sounds great, but JVM cheating is not as easy as it sounds, and this will be elaborated upon in a later course.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=45)** But for now just know what can be done and don't worry too much about how it can be done.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=49)** Tuning typically focuses on three pillars, memory use, latency and throughput.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=55)** So when to use JVM tuning?
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=57)** Well, whenever the performance of the JVM needs to be increased.
>
> **[1:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=61)** Sometimes it's easier and more useful to improve the hardware.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=65)** And when performance can not be done with better programming, JVM tuning might come in as a good fix.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=70)** But JVN tuning won't fix memory leaks, for example, and it definitely can not make up for poor application design and poor coding.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=77)** Whenever these issues exist in your application, first, fix them and then come back to the JVM tuning when no other performance improvement can be done anymore.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (10), jvn (1)
> **Code Keywords:** static (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Spotting and avoiding memory leaks
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=0)** - [Instructor] Memory leak is a resource leak caused by incorrect management of the memory allocation and de-allocation.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=6)** It means that memory gets allocated, but it doesn't get de-allocated when it should be.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=11)** This leads to more and more and more memory being in use, the application slows down gradually, and eventually runs out of memory, assuming that no more memory can added in the end.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=20)** You may wonder how does is possible since I've just told you about garbage collection and that it's such a beautiful GPM and process.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=27)** Well, if you remember correctly, the garbage collector can only free up memory, it doesn't have relation with the stack anymore, so when we are talking about memory leaks, we're talking about objects, having unnecessary relations with the stack.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=39)** Memory leaks block access to resources, and increase the application usage of memory.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=43)** This decreases the performance of the application and when there's no memory left, that application will die throwing an out of memory error.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=50)** There are a few common errors that can lead to memory leaks.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=53)** We're not going to be covering them in detail here, but to give you some idea, the overuse of static variables can be a problem.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=59)** Think of a static list for example, all the objects in this list will have to live for the lifetime of the application since the list is static.
>
> **[1:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=67)** If the list is growing, so it's the space it's taking up on the heap.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=70)** Another common one is resources that are kept open, so just streams, file readers, database connections, et cetera.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=77)** If this isn't done well, this can result in a memory leak too.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=80)** A less known one is the use of poorly implemented custom objects, as keys, and HashMaps.
>
> **[1:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=85)** So say we have some sort of custom object and it doesn't have a proper hashcode and equals method implemented.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=91)** This can get very tough on a memory when it's added to a HashMap, say that we want to use put for updating it a lot in a loop, and when we do this, since the equals and hashcode are poorly implemented, our HashMap cannot determine that it has the object already because the equals and hashcode that it uses in order to do this are poorly implemented, and so it keeps on adding more and more and more objects on the heap as keys for our HashMap, and this will result in a memory leak as well.
>
> **[1:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=118)** There are many, many other causes for memory leaks, they all result into the same symptoms though, the performing of the application will be decreasing over time, and it can go very slow actually.
>
> **[2:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=128)** For example, you can need to restart the app every few days or weeks because the memory is getting full slowly, and if nothing happens, so if you wouldn't restart, the application would crash what an out of memory error.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=139)** The good news is that we have tooling to detect memory leaks, and there are different tools out there that can do this, and for example, we have Java VisualVM, we have g:Profiler, YourKit, and many more.
>
> **[2:30](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=150)** I'm going to show you VisualVM, but before I do so, I am going to show you this code sample again.
>
> **[2:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=157)** So we have the ExampleOutofMemory class here, and it's going to run out of memory.
>
> **[2:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=161)** Well, that's no surprise, it's in the title, right?
>
> **[2:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=163)** But what's happening here, again, we have this map we created on line nine and then in an endless loop line, 12 to 14, we keep on adding random objects to this map.
>
> **[2:52](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=172)** So we keep on running objects to the map, there is a connection from the map to the heap, so all the objects that are on the map, they have a relation with the stack and they will be kept alive on the heap.
>
> **[3:02](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=182)** Eventually we'll run out of memory, and we'll get the out of memory error.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=185)** Okay, I was going to show you VisualVM, right?
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=188)** Yes, let me first run this and I can actually show you what's going on in VisualVM.
>
> **[3:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=194)** So here we're having VisualVM and we see our process.
>
> **[3:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=196)** Let me open it.
>
> **[3:18](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=198)** I'm not going to be explaining everything of VisualVM at the moment, I just want to show you the part where we can inspect the memory.
>
> **[3:25](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=205)** So I'm going to click on Monitor, and here you'll see what's going on.
>
> **[3:29](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=209)** So it's been running for a while already because it was a bit slow to respond, but we see some things here, we see four graphs happening, we see the CPU usage on the upper left, and we see a heap on the upper right, and this one is most interesting for now.
>
> **[3:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=223)** We have the classes and the class loading stuff on the bottom, and we also have the threads on the bottom, not too interesting for now.
>
> **[3:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=230)** Look at his heap.
>
> **[3:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=231)** You can see that the size of the heap just increased, it's orange part, and why did it increase?
>
> **[3:56](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=236)** Well, it was about to get full.
>
> **[3:58](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=238)** I can actually say perform garbage collection, I can click on that, but it's trying to do it already, very badly, as you can see on the other side of the screen.
>
> **[4:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=246)** It does the garbage collection every now and then, but it doesn't really help because our objects, they need to be on the heap because they have a connection to the stack, and as you can see, our memory is slowly, slowly getting full, and the max memory is eight and a half gigabytes here, and it won't grow any further.
>
> **[4:22](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=262)** It is at its maximum capacity already, so soon it'll run out of memory, and when it does run out of memory, you will see the application will crash and then it can actually release all the memory, so it will go down really fast after the crash, I've switched to the mode that we can actually see both here.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=278)** So you can see the application is still running, but as soon as it crashes and you get the out of memory error in our console of IntelliJ you can actually also see the memory going down because the application is done at that point.
>
> **[4:50](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=290)** So this last bit, that commonly takes a while because well, the application is trying very badly to save this, and this is also the slow performance I was talking about because right now, the application is busy doing other stuff, so if there would be user requests coming in right now, even though the application hasn't crashed, it has now, it would be very, very slow if responding at all.
>
> **[5:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=308)** Notice you can see it as crashed and then the used heap, went down immediately.
>
> **[5:12](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=312)** So tooling like this is crucial for seeing what's going on.
>
> **[5:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=315)** It can actually also be used to detect other sorts of problems, such as threading problems, you can inspect the heap dump, but it's all enough for now.
>
> **[5:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=321)** It's super interesting, but it's actually for later.
>
> **[5:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=324)** All right, so that's all I want to tell about memory leaks here.
>
> **[5:27](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=327)** They're a very, very interesting topic, and as you can hear, I'm quite enthusiastic about them, but more on memory leaks for a later time.
>
> **[5:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=333)** Right now, these are more than enough to grasp the basic concepts of Java memory management, the values and the references.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), this, (3), let (2), super (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** gpm (1), cpu (1)
> **UI Navigation:** click on (2)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Solution: Fix the memory leak
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-fix-the-memory-leak?u=76281980)


### 6. Conclusion

#### Next steps with Java memory management
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=0)** - [Maaike] All right, you've done it.
>
> **[0:01](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=1)** You've got the basics of memory management down.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=4)** Let's have a look at some potential next topics for you.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=6)** First one would be JVM tuning, then definitely also dive a bit more into memory leaks and how the garbage collection is actually working.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=14)** Also very interesting is monitoring and testing.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=16)** And of course, other advanced Java topics, such as designed patterns and concurrency.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=21)** Here are some great follow-up courses I've selected for you.
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=24)** First of all, more in Java Memory Management, but also very interesting Parallel and Concurrent Programming with Java 1, Advanced Java Programming, and also the Programming Foundations, dealing with design patterns.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=37)** Thank you so much for taking this course.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=39)** Let's connect on LinkedIn. Here you can find my profile.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=43)** Good luck on your Java journey.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Env Vars:** jvm (1)
> **Versions:** java 1 (1)
> **Analogies:** such as (1)
> **Speakers:** - [maaike] (1)


## Instructor

- [[Maaike van Putten]]

## Skills Covered

- Memory Management
- Java

## Path Context

### In [[Getting Started as a Java Developer]]
← [[Learning Java Collections]] | **6 of 10** | [[Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks]] →

## Appears In

- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks]] — Java, Memory Management
- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java

---

[↑ Back to top](#)