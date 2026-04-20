---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-java-collections
url: "https://www.linkedin.com/learning/learning-java-collections"
duration_minutes: 190
duration: 3h 10m
level: Intermediate
updated: 9/29/2021
learners: 346150
skills:
  - Java Frameworks
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/java-collections-2421704"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGoBE1qOqZWYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632758718519?e=2147483647&amp;v=beta&amp;t=jS6Sttg7CC_Ih1guav7yWTsnm9o81ZF1hfmdgzzhIgI"
linkedin_topic: Data Science
learning_paths:
  - Getting Started as a Java Developer
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/java-frameworks
  - skill/java
status: not-started
created: 2026-04-20
---

![Learning Java Collections](https://media.licdn.com/dms/image/v2/C560DAQGoBE1qOqZWYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632758718519?e=2147483647&amp;v=beta&amp;t=jS6Sttg7CC_Ih1guav7yWTsnm9o81ZF1hfmdgzzhIgI)

# Learning Java Collections

> As developers advance past the basics of Java, they must understand how to effectively use Java collections in their daily work. This course offers you a deep dive into the framework and hands-on experience working with it. The Java Collections framework consists of interfaces, implementations, and utilities that together provide standard support for common data structures in the language. Instruc

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections) | 3h 10m | Intermediate | 346K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kevin Bowersox]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-collections-2421704)

## Skills Covered

- Java Frameworks
- Java

## Table of Contents

### Introduction

#### Java collections framework
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=0)** - [Kevin] After you learn the fundamentals of Java, there's no better second step in your learning journey than the Java collections framework.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=8)** The framework provides data structures like lists, queues, and maps that Java developers work with every day.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=16)** Having these data structures in your toolbox is critical for coding everything from the most basic to the most advanced Java applications.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=25)** Hi, I'm Kevin Bowersox.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=28)** I've built many complex systems with Java throughout my career, and all of them have used Java collections.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=35)** In this course, I'll teach you about the concepts of the framework, its interfaces, and how to work with them so you can put them into practice and be successful with collections.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/java-collections-framework?u=76281980&t=47)** So if you're ready to level up with Java, join me in my LinkedIn Learning course to learn how Java collections will help you deliver better solutions.

> [!info]- Semantic Content
>
> **Speakers:** - [kevin] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=0)** - [Instructor] Before taking a closer look at the Java collections framework, let's talk a bit about who the course is for and what you should know ahead of time.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=8)** If you're a Java developer who knows the basics, this course is a great next step for advancing your knowledge of the language.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=15)** It will teach you how to work with the collection framework's interfaces and data structure implementations.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=21)** These are some of the most heavily-used classes in Java.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=25)** So as a Java developer, you'll read and write code that uses these data structures constantly.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=32)** That makes this course a great investment of your time because you'll benefit instantly and throughout the rest of your career.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=39)** There are a few things that you'll need for the course.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=42)** This course is great for Java developers who want to advance past language fundamentals, like variables, data types, and arrays.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=51)** However, it shouldn't be your first introduction to Java.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=54)** So if you've never worked with the language, check out the LinkedIn Learning library for an introductory course, like Learning Java.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=61)** To follow along with the course, you'll need to have JDK 11 and Maven installed on your machine.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=67)** You can run any operating system that you would like.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=70)** You'll also need an IDE.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=72)** I'll be using Eclipse throughout the lessons, but you can follow along with your favorite editor.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=77)** Just know that you'll need to account for any differences between the two.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=81)** That's all you need to get started with the course.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/what-you-should-know?u=76281980&t=83)** I'll handle the rest.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (3)
> **Env Vars:** jdk (1), ide (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Java Collections Framework

#### Solving everyday problems with data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=0)** - [Instructor] Handling data is an important part of coding any application.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=5)** That shouldn't be a big surprise, because as people solve problems in their daily lives and work, they instinctively organize data.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=13)** Most applications handle work for people.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=16)** So, an application's code often arranges data in a similar way.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=22)** So, to help us better understand collections, let's start by talking about some real life examples of how we organize data.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=31)** At some point in the workplace, you've probably used a list to plan a small project.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=36)** In the list, you organize a group of tasks that are needed to complete the project.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=42)** We can refer to each of the tasks in the list as an element.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=47)** Each element holds a specific position in the list relative to the others that is designated by a number.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=54)** The list also has an order which indicates the sequence for completing the tasks.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=60)** Now lists are a great way to organize data, but what if your project involved a team and you wanted to take it a step further by capturing who's working on each task?
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=72)** You might decide to build a map that captures those assignments.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=76)** So first, the team members' names are written down.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=79)** The names serve as the key of the map that will associate with each task.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=85)** The keys are then associated with or mapped to values, which in this case, indicate the tasks in the project.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=93)** Each of these key value pairs forms an entry in our map that we can use to determine who is working on each task.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=102)** Concepts like lists and maps are two basic tools we use almost daily to organize data when solving problems.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=110)** In computer science, these are known as data structures, and it's very common to find them built into programming languages.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/solving-everyday-problems-with-data?u=76281980&t=119)** In Java, those data structures are found in the Java Collections Framework, which you're going to learn a lot more about in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **Definitions:** is an  (1), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Data structures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=0)** - [Instructor] So we established that the Java collections framework provides data structures for the Java programming language.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=7)** Now let's talk more about what data structures do.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=10)** That way you'll know what to expect when you start working with Java collections.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=16)** At their core, data structures are used to store, organize, manage, and retrieve data.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=23)** Each data structure has its own unique features that set it apart from the others.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=27)** But at a high level, these capabilities are provided by a few common operations that are found on every data structure.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=35)** First, there's operations that allow us to add values into the structure for storage.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=41)** Some data structures will define the position where a new element is stored.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=46)** For example, one data structure known as a queue pushes elements into the front of its structure.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=52)** Other data structures, like a list, let us choose the position where a new element is placed.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=58)** So we might specify that we want to add a new element as the third item near the middle of its structure.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=65)** When new elements are added to a data structure, they're stored according to an internally defined organization strategy.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=73)** This strategy is typically optimized for a particular operation, like retrieving or inserting an element.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=80)** When working with a linear data structure, its elements are organized to form a sequence.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=86)** Other data structures based on trees or hashing functions, will use more complicated organizational strategies to store their elements.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=95)** Once elements are placed inside the structure for storage, we can use other operations to manage the elements if we need to make changes to the structure.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=104)** For example, we might decide to remove an element.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=108)** Or we might need to replace an element in the structure.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=112)** Another common operation is to apply a sorting algorithm that rearranges the data structure's elements.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=119)** We also need to be able to retrieve elements that were stored in the data structure, which can be achieved using several operations that provide access to the elements.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=130)** Retrieving an element at a specific position or with a key is known as random access.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=137)** It normally provides better performance because it does not need to traverse all the elements in the structure to find the target element.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=145)** If we need to retrieve every element in the data structure, we can use operations or control structures like loops that iterate through each element.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=156)** Finally, many data structures expose operations that allow us to search for a particular element in the structure, either to remove it, find its position, or to check if it exists.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=169)** There's a bit more to it than that, but that's a high level look at some common operations found on data structures.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/data-structures?u=76281980&t=176)** Next, we'll start diving into the Java collections framework where you'll find a hierarchy of collection types that support different mixtures of these capabilities.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** known as (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Collections framework architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=0)** - [Tutor] Now let's shift gears and focus on working with data structures in Java.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=4)** So that means we need to start unpacking the collections framework.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=9)** The framework can be broken down into three sections, interfaces, algorithms, and implementations.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=16)** The interfaces are the foundation of the platform because they are the main abstract types that determine what methods are available on collections, like the list, set, and map.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=27)** Without implementations, we can't do much with just an interface.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=31)** So the framework also provides several classes that implement the core interfaces and provide the underlying source code for the data structures.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=40)** We also find algorithms in the framework that support working with collections.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=46)** These are provided through static methods that give us functionality for working with collections like sorting and searching.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=53)** These interconnected sections of the framework work together to provide developers with most of the code they'll need to work with data structures in Java.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=63)** Now let's talk a little history.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=66)** Java 1.2 was when the collections framework was first introduced.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=70)** Prior to that, there were a few classes like hash table and vector that supported working with objects, but they had some concerns about performance and quality.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=80)** These classes were re-engineered to satisfy collection interfaces and to support generics.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=86)** But for most situations, you'll want to use the types introduced with the collections framework.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=92)** The Java community still debates if legacy collection should be deprecated.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=96)** So if you're adding them into new source code, you should have a good reason why.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=102)** Developers use the collections framework so frequently in Java that many of its benefits are overlooked.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=109)** The framework contains all of the code a developer needs for working with data structures.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=114)** So we're not required to build our own data structure implementations, or to design their interfaces.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=120)** It's provided by the language.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=123)** Since every Java developer uses the same code for data structures, it's a standard.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=128)** So you can pick up someone else's code without needing to understand a bunch of custom data structures that they created.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=136)** The collections framework also was built by some of the brightest engineers and has decades of use in production systems.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=144)** So you can trust that you're using a high quality data structure that isn't riddled with bugs or performance problems.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=152)** Because the same collections APIs are used by developers across the language, it naturally creates interoperability across different code bases.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=162)** If you look at other Java technologies, like, Java EE, Spring, or the Apache projects, you'll find collection scattered across their code.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=171)** This promotes interoperability amongst them and you're instantly familiar with the parts of the code that use collections.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=179)** All of these benefits save you a lot of time, effort, and frustration while improving the quality of your code.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=186)** Learning the architecture and interfaces of the collections framework is one of the best ways to level up as a Java developer, because you're going to see them used everywhere in code.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture?u=76281980&t=196)** So next, we'll step down the level and do some hands-on work with a collection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), abstract (1), interface (1), static (1)
> **CLI Commands:** find (2), apache (1)
> **Exercise Files:** source code (2)
> **Versions:** java 1 (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [tutor] (1)

#### Working with a collection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=0)** - [Instructor] Let's talk a little bit about what a collection does before taking a look at some code that uses a collection.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=6)** You can think of a collection as an object that groups other objects together and provide some common operations for working with the group.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=15)** A collection makes it much easier to write code where you're working with multiple objects, and the number of objects can not be predicted.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=23)** I'll demonstrate this using a simple example for the Landon Hotel.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=28)** The Landon Hotel is a fictional hotel that we'll be using for examples and challenges throughout the course.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=34)** So to kick things off, let's imagine that the Landon Hotel would like to manage the rooms and understand the potential revenue from them being booked.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=43)** We might model something like a room class.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=46)** Within that class, we could place fields for the name of the room, its type, its capacity and its daily rate.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=54)** You'll also notice there's a constructor for the room to create an instance of it and accessors for all of its fields.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=62)** Then in our application, we might write some logic like this.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=66)** We might create some rooms.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=68)** So here you see we have two, Cambridge and Manchester.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=71)** And then we would pass those rooms into a method that would perform the potential revenue calculation.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=78)** So you'll notice that I've created that method, and it accepts two parameters of type Room.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=84)** Inside of the method's body, it takes those rooms and gets their rates and then totals the rates together to calculate the potential revenue.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=93)** Now what would happen if we wanted to add a third room into this calculation?
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=99)** Let's see.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=100)** I'm going to copy our room, and then I'll switch it over to be a room named Piccadilly.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=106)** So let's switch up these constructor arguments.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=109)** I'll make Piccadilly a guest room.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=113)** It will hold three people, and it's going to cost $125 per night.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=119)** Okay. Now that we have the third room, we need to include it by passing it as an argument to the method.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=126)** And that means we'll need to refactor this method signature to accept a third room parameter.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=134)** Then we'll have to adjust the calculation to account for the third room.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=139)** So you can see how brittle this code is.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=142)** And it's not very extensible.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=144)** If we wanted to add a fourth room, we would have to go through the same refactoring process.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=150)** Now we can do this much better using a collection to manage all of these objects as a group.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=157)** So let's go ahead.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=158)** I'm going to create a collection that holds rooms.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=161)** I'll give it a name of rooms.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=163)** And then I'm going to use a static factory method on the list in order to create the collection.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=170)** Now, instead of passing in these three arguments to our method, I'm just going to replace them with our room's collection.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=181)** And then I'm going to place those rooms inside of the static factory method so that they are included in our collection.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=190)** Now we'll still need to refactor the getPotentialRevenue method in order to accept a single parameter.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=198)** So let's go ahead.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=199)** We'll get rid of these three room parameters.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=202)** And then I'm going to declare another parameter that's of type Collection, and I'll name it rooms.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=209)** Then we can go ahead and adjust our calculation.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=212)** So instead of performing this addition, I'm going to take our collection of rooms, and I'll stream it.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=219)** And then I can use a method named mapToDouble.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=223)** And I'll get the rate of each room using a lambda expression.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=229)** And then from there, all I need to do is call the sum method to total the rate of each room in our collection.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=238)** Okay. That's much easier.
>
> **[4:00](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=240)** You'll notice we're now managing these objects together in a group using our collection.
>
> **[4:07](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=247)** Now let's see how easy it is to add a fourth room into this calculation.
>
> **[4:12](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=252)** So I'm going to copy Piccadilly, and I'll create a new room named Oxford.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=258)** So let me adjust some of these constructor arguments.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=261)** We'll make Oxford a suite.
>
> **[4:24](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=264)** It's going to hold five people, and it'll cost $225 a night.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=269)** Okay, I'm going to save that.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=272)** So let's go ahead, and I'll first execute this code without Oxford in the collection.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=277)** You'll notice the potential revenue of the rooms in our collection is $550.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=284)** Now, once I add Oxford into the collection, watch what happens.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=289)** You'll notice that the potential revenue increases to include Oxford which was recently added into our collection.
>
> **[4:57](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=297)** Now here's the great part about this.
>
> **[5:00](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=300)** We didn't need to refactor our getPotentialRevenue method in order to make that happen.
>
> **[5:06](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=306)** All we needed to do was add Oxford into the collection.
>
> **[5:10](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=310)** And because we're managing those objects as a group, it just automatically gets included in our calculation.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=318)** So you see the flexibility that we get with collections.
>
> **[5:23](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=323)** And this is just a very simple example.
>
> **[5:26](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=326)** We've only scratched the surface.
>
> **[5:28](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=328)** But the benefits of grouping and managing objects in a collection are obvious from this example.
>
> **[5:35](https://www.linkedin.com/learning/learning-java-collections/working-with-a-collection?u=76281980&t=335)** As we explore the details of how to use the interfaces and implementations in the framework, you'll learn how to take advantage of their prebuilt methods and the utilities that surround them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), switch (2), static (2), class. (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** getpotentialrevenue (2), maptodouble (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Beyond the array
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=0)** - [Instructor] In our last example, you might've wondered if an array could have been used to group the rooms instead of a collection.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=6)** That's a valid point, but using collections overcomes a few disadvantages of an array.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=12)** Let's walk through some examples and I'll show you.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=16)** Arrays have a fixed size because the space for an array must be allocated for the number of objects that we intend to store.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=24)** So if I want to declare a new room array, I need to know the number of elements that I'll be storing up front.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=31)** Then I need to store each room within its index in the array.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=36)** This can lead to one-off errors that throw index out of bounds exceptions.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=41)** And if you look closely, you'll notice that we already have one.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=46)** I wanted to declare an array of size three, but instead, I've declared an array of size two.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=52)** That would have threw an error.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=54)** Now, when we work with collections, we don't have these sorts of problems.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=59)** It's relatively easy to instantiate a collection and add elements into it.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=64)** You'll notice that I do not have to declare the size of the collection upfront.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=69)** And if I want to add elements into the collection, I don't have to be concerned about a couple of things.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=75)** So first, I don't have to worry about specifying the index of the element that I'm adding.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=82)** I also don't have to worry about the collection filling up and getting an index out of bounds exception.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=91)** When we work with an array, we don't get this sort of flexibility.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=95)** You'll notice that our array is currently full.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=98)** We have three indexes and there's three elements stored within it.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=103)** If we would like to add a new element into this array, we actually have to make a copy of it.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=108)** Here's how we do it.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=109)** First, we declare an array that is slightly larger than our original array.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=114)** So I'm going to make this an array of size four.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=117)** Then I'm going to use the array copy method on the system class.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=122)** I pass in the original array, then I pass in the new array and then I specify the indexes that I'm interested in.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=130)** Okay, now we have a new array with some space in it.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=134)** I'm then going to store the new room in the last index within our new array.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=140)** So I'll just subtract one from its length and then I'm going to store the room into that index.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=149)** Now, you might get the idea to build your own objects that handle the operations that you'll need to perform on the array.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=156)** You'll get some reusability with this approach, but at that point, you've started to replicate the features provided by the collections framework.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=165)** The best case is that you'll be less productive and the worst case is that you'll build a buggy implementation.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-collections/beyond-the-array?u=76281980&t=171)** By using Java's out-of-the-box collections instead of arrays, you'll save time by avoiding these types of situations and you'll write better code.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), let (1), throw (1), class. (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. The Foundations of Java Collections

#### Interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=0)** - [Instructor] When working with collections, it's important to have a good understanding of interfaces because they're used heavily by the framework.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=8)** So let's just make sure you're solid on the concept.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=11)** That way, you're successful with collections.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=15)** On the left-hand side of my screen, I have an interface named Contract.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=20)** I chose that name because the idea of a contract is commonly used to explain an interface.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=28)** An interface is an abstract type, so that means we can't create an instance of it.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=33)** And for our purposes right now, we're going to say that it cannot define methods with a body that contain code.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=42)** On the interface we can define abstract methods.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=46)** So let's go ahead and add one to the interface named term1.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=52)** Abstract methods define the roles or terms for a class that wants to implement the interface.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=59)** Any abstract method on the interface must appear on a class known as an implementation that implements the interface.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=69)** So on the right-hand side of my screen, you'll notice I have a class named Implementation.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=76)** If we would like this class to implement the contract interface, all we need to do is type implements, and then the name of the interface, which in this case, is Contract.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=88)** Now, as soon as we do that, you'll notice the compiler in my IDE start to complain.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=95)** Let's see what's up.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=96)** So if we hover over the error, you'll notice that it's complaining because our implementation hasn't defined a method named term1.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=107)** This method is required because the implementation class implements the contract interface.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=114)** It's kind of like we're saying the interface, or the contract, is a template for what methods should be found on the implementation class.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=122)** When the compiler sees the class doesn't match the template, it complains.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=127)** So let's go ahead and add this method to the class.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=130)** Just click on add unimplemented methods, and the IDE will automatically add it to the body of your class.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=137)** Now, inside of this method, I'm just going to print some console output.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=142)** That way, when we execute this code, we can see what methods invoked.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=147)** Okay. So now the implementation has satisfied the terms of the contract interface.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=153)** Let's see what happens if we add a new abstract method.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=157)** So I'm just going to add another abstract method named term2, and look what happened.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=163)** Immediately, the compiler complains.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=165)** You can probably guess why.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=167)** It's because there is a new method on our contract interface that isn't found on the implementation.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=176)** So we added a new role or term to the contract, and it's not satisfied.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=181)** Let's go ahead and satisfy the contract by adding the method.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=185)** And then once again, I'm just going to add some console output to help us understand the execution of our code.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=195)** All right, with that in place, we're going to now navigate over to the application class and here, we're going to use our new contract interface and its implementation.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=206)** So to do that, I'm going to declare a variable of type contract.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=211)** And then, I'm going to instantiate the implementation and assign it to the contract.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=217)** This works because the implementation implements the contract interface.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=223)** And then we can take that object and pass it to anywhere the contract interface is accepted.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=229)** So you'll notice the method signature for the print terms method has a parameter of type contract.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=236)** So we can pass our contract object into it.
>
> **[4:00](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=240)** And then inside the body of the method, we can use that interface to invoke term1 and term2 on our object.
>
> **[4:11](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=251)** Okay, let's see what happens.
>
> **[4:12](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=252)** We'll execute this code after we save everything.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=257)** And you'll notice term1 and term2 are printed to the console.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=261)** Okay, so we got to cover one final point that's really important.
>
> **[4:25](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=265)** And that's inheritance.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=267)** Yep, an interface can extend another interface.
>
> **[4:31](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=271)** So I've created another interface named ExtendedContract.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=276)** And on that interface, I've specified an abstract method named extendedTerm.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=284)** What we're going to do is have our contract interface extend this new interface.
>
> **[4:51](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=291)** To do that, it's just like inheritance with a class.
>
> **[4:55](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=295)** We just type extends, and then the name of the interface we would like the contract interface to extend.
>
> **[5:04](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=304)** Now what's going to happen is the contract interface is now going to expect its implementations to include the extended term method because of this inheritance relationship.
>
> **[5:20](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=320)** And our old friend, the compiler's back.
>
> **[5:23](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=323)** So you'll notice it's complaining.
>
> **[5:25](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=325)** Probably can guess why.
>
> **[5:27](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=327)** It's because our implementation class, which implements the contract interface, doesn't have the method that the contract interface just inherited from ExtendedContract.
>
> **[5:41](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=341)** Let's go ahead, and we can add that method to the class.
>
> **[5:45](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=345)** And then I'm going to add a little bit more debugging output here, just to help us.
>
> **[5:52](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=352)** All right, so we'll just print this information to the console.
>
> **[5:56](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=356)** And I shortened it up.
>
> **[5:57](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=357)** We just said, extended.
>
> **[5:59](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=359)** Now let's save all of our work.
>
> **[6:02](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=362)** And then we can head over to the application class.
>
> **[6:07](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=367)** And if we take a look at our contract interface, you'll now see the extended term method appear because it's now part of that interface through inheritance.
>
> **[6:17](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=377)** Okay, I'm going to save this and then we can go ahead.
>
> **[6:21](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=381)** We'll execute our code.
>
> **[6:23](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=383)** So when we execute this code, you'll notice that all three methods defined on the contract interface and implemented by the implementation class have been invoked.
>
> **[6:36](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=396)** When working with collections, you'll need to understand how interfaces work to be successful.
>
> **[6:42](https://www.linkedin.com/learning/learning-java-collections/interfaces?u=76281980&t=402)** The use of inheritance between interfaces is a central concept underlying the collections framework that builds relationships between the core interfaces, and defines what methods you'll have available to work with on a collection.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (32), let (9), abstract (7), class. (6), implements (5)
> **Definitions:** is a  (3), is an  (1), known as (1)
> **Env Vars:** ide (2)
> **Exercise Files:** template (2)
> **Analogies:** kind of like (1), just like (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** extendedterm (1)
> **UI Navigation:** click on (1)

#### Collection types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=0)** - [Instructor] Several core interfaces form the foundation that the Java collection framework is built upon.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=6)** Let's explore what they are, their hierarchy, and some patterns for working with them.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=11)** Here's a look at the top level interfaces where you'll find collections like list, set, and map.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=17)** These should sound familiar from our earlier discussions.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=21)** Within this group, inheritance is used to build a hierarchy, so it's common for interfaces to extend other interfaces in the collections framework.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=31)** The collection interface is the common parent that is extended by other interfaces, like list, queue, and set.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=39)** That means you'll find some of the same methods appearing on each of them because they inherit from the collection interface.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=45)** In addition to having these things in common, each interface has its own unique behaviors that defines it.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=51)** For example, the list and queue maintain an order among the group of elements that they store and the set doesn't allow for duplicate elements.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=60)** The map interface is still considered a part of the collections framework, but you'll notice that it doesn't inherit from the base collection interface.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=68)** It forms its own type hierarchy, but doesn't deviate too far from the patterns that will be used for other collections.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=75)** We can expand upon this view to include some of the most common concrete classes the framework provides as implementations of these interfaces.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=84)** These are the types you'll need to instantiate when working with a collection.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=89)** The most frequently used implementations are ArrayList and HashMap, so we'll get really familiar with those.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=96)** If you inspect the implementations closely, you can break them down into two parts: the interface which determines their methods and the implementation style for how the underlying data structure works.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=109)** The naming conventions used by a collection give us some clues about how it works because they reveal the implementation style and the type of interface.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=119)** The first part of the name defines the implementation and the last part tells us the interface.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=125)** So you'll notice ArrayList, HashMap.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=130)** First the implementation, then the interface.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=133)** You'll also notice that multiple implementation styles can be combined, LinkedHashSet.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=139)** It might be easier to understand if we look at some of the most commonly used implementations against a matrix that shows their intersection of the interface and implementation.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=149)** Here, you can see the whole group on the matrix.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=153)** At first, it might feel a little intimidating to learn all of these collection types, but don't be intimidated because if you focus on learning the collection interface well, you can quickly learn a large part of the framework.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/collection-types?u=76281980&t=167)** That's because the majority of the collection types inherit from the collection interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (12), let (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### The Collection interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=0)** - [Instructor] Let's explore the design of the collection interface and take a glance at its methods.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=5)** Since the collection interface is at the root of the interface hierarchy, that means the methods on it appear on every type that extends from it.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=14)** So interfaces and concrete implementations of a list, set, and queue will inherit these common methods from the collection interface.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=22)** Some collection methods are denoted as being optional, so they might appear on an implementation, but it's possible that a call to one of these methods will throw an unsupported operation exception.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=34)** The interfaces in the collections framework and the collection interface itself are generic.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=41)** So when we create a collection, we use a generic type argument to indicate the type of elements that it holds.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=48)** The argument is declared by placing the type in angle brackets.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=52)** Since the collection implementations are based on these interfaces, they use a generic type argument too.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=58)** When instantiating the implementation, we can be more concise by using the diamond operator on the constructor.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=65)** This operator infers the generic type from the declared variable's generic type.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=70)** This generic type impacts how we use collection methods because it determines what arguments may be passed into them or what type of object they might return.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=80)** These are the 21 methods found on the collection interface as of Java 11.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=85)** I've placed them into several groups and added asterisks next to the optional methods.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=90)** These groups organize the collection methods by their general behaviors.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=95)** Some add or remove elements, others iterate or inspect the collection, and one is kind of a catch-all with comparison and array operations.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=104)** You'll notice that methods on the collection interface make frequent use of generics and that's common throughout the entire framework.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=113)** So now we have a grasp of the collection interface and the groups of behaviors that it provides.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-collections/the-collection-interface?u=76281980&t=118)** In the next lesson, we'll dive deeper into a few of the most common methods that you'll use.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), let (1), extends (1), throw (1), type. (1)
> **CLI Commands:** make (1)
> **Versions:** java 11 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Collection methods
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=0)** - [Instructor] Let's take a closer look at a few of the most frequently used methods on the collection interface using some visualizations to see their behaviors.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=9)** Throughout the visualizations, we'll assume that we're working with a collection that has a generic type of string.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=16)** We'll start with methods that add items into the collection.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=21)** When you want to insert an element into a collection, you must pass an object that's type matches the collection's generic type.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=30)** We pass this object into the add method, which places a single element into the collection.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=37)** The add method returns a boolean that indicates whether the collection changed as a result of the operation.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=44)** For some implementations, like the set that do not accept duplicates, it's possible the element already exists in the collection.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=53)** So if we called this method a second time on a set implementation, it wouldn't be added and the method would return false.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=62)** We'll see this pattern in the return type, which uses the boolean to indicate a change in the collection on other methods as well.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=69)** Another approach is to insert multiple elements into the collection, using the addAll method.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=76)** This method accepts a collection of elements to be inserted as its argument.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=81)** It also uses a boolean return type to indicate whether the collection has changed.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=86)** Methods on the collection interface that perform operations on the entire collection are known as bulk operations.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=94)** Most of these methods, aside from a few exceptions, accept a collection as their argument.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=101)** Now let's take a look at how we remove elements from a collection.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=106)** The first option is to remove an individual element by passing a single object to the remove method.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=113)** It's return type is a boolean that indicates if the collection has changed.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=118)** It's possible the collection will not change if we pass an object to the method that doesn't exist in the collection.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=125)** There is also a bulk operation for removing multiple items from the collection.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=130)** The removeAll method accepts a collection of elements as an argument for removal from the collection.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=137)** If we want to remove all items from the collection, we can use another bulk operation named clear.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=144)** The final method we'll explore for removing collection elements is retainAll.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=149)** It's a bulk operation that is sort of the inverse of removeAll.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=154)** It accepts a collection as an argument, then removes all elements of the target collection that are not found within the provided collection.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=165)** Before going any further, I want to call out that collections are mutable.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=169)** That means that each of the methods we've seen for adding or removing items changes the underlying collection when invoked.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=177)** We'll dive deeper into the side effects of mutability later in the course.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=183)** Now let's move on and see a few methods that help us inspect the collection.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=190)** We can use the contains method to determine if a collection includes a particular element.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=196)** We just pass a single object into the method and it returns a boolean to indicate if it's found inside the collection.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=205)** A bulk operation also exists for checking if an entire collection of elements is found within the target collection.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=214)** The containsAll method accepts a collection of elements and returns of boolean to indicate if all elements in the provided collection are found in the target collection.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=226)** Another method for inspecting a collection is the isEmpty method.
>
> **[3:50](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=230)** As its name implies, it returns a boolean of true if no elements are found in the collection.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=236)** In our example, the collection contains elements, so false is returned.
>
> **[4:01](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=241)** The final method we'll explore, named size, returns an integer that denotes the number of elements in the collection.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=248)** The 10 methods we reviewed are the most basic operations you'll use to insert, remove, or inspect collections.
>
> **[4:16](https://www.linkedin.com/learning/learning-java-collections/collection-methods?u=76281980&t=256)** Later in the course, we'll talk about how collections are iterated, so you'll have a full understanding of the collection interface.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), let (3), interface (3), type. (1), type, (1)
> **Code Identifiers:** removeall (2), addall (1), retainall (1), containsall (1), isempty (1)
> **Definitions:** known as (1), is a  (1), means that (1)
> **Cross-References:** later in (2)
> **Speakers:** - [instructor] (1)

#### Creating a collection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=0)** - [Instructor] Let's walk through a few code examples that create a collection.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=4)** Collections can be declared and instantiated like any other object.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=9)** We specify the type of the collection, provide its identifier, and then instantiate a new collection implementation that will be assigned to the variable.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=19)** I'm using the collection interface as the variable type.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=22)** However, if I wanted to be more specific about the type, I could've switched over to use the set interface.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=28)** So let's make the change and import the set from java.util.set.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=33)** Now, the reason this works is because the hash set implements the set interface.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=40)** We couldn't do something like using a list as our variable type because it's not compatible with hash set.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=47)** But let's go ahead, we'll import the list from java.util.list, and then we'll change the implementation over to use the array list.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=58)** So we'll add the array list constructor, and now we have a list.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=62)** Now, let's talk about one more thing that you shouldn't do.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=66)** Sometimes, you'll see people try to instantiate the collection type.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=71)** The collection type doesn't have any direct implementation, so you can't do something like this.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=77)** Let's just go ahead and we'll get rid of that code.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=80)** Now I'm going to switch back over to using a collection as the variable type for our object.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=88)** Okay so, now we have a collection, and in that collection, I'd like to store strings.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=94)** So I'm going to specify the generic type argument on the variable type.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=100)** And then over here on the constructor, all use the diamond operator to infer the generic type from our variable types Generic.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=110)** Okay.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=111)** Now that that's in place, we have our new collection, but it's kind of empty.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=117)** Let's go ahead and add some elements into this collection.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=121)** I'm going to add a few of my favorite things.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=123)** So I love to snowboard, I love Linux, I also love to read, and I'm so excited about snowboarding, I'm going to add that twice.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=132)** All right, now our collection isn't so empty.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=135)** Let's go ahead and print this out to the console.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=138)** Now, I can just pass in the collection to the print LN method, and that's because collections provide their own two-string implementation.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=149)** So with that code in place, we can go ahead and look at the elements that are found in our collection.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=155)** So we see the snowboard, Linux books, and the snowboard again.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=159)** All right, now we're going to take a look at another way that we can create a collection.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=165)** Each collection implementation has a conversion constructor that accepts another collection as an argument.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=172)** So we're going to take our collection C and convert it to a set using the conversion constructor.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=179)** To do this, we're first going to declare a new variable of type collection with a generic type of string.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=186)** I'm going to call it favorite things.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=188)** And then, I'm going to use the hash set constructor and pass into that constructor our original collection.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=196)** Okay, so let's do this.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=198)** Instead of printing out the original collection, let's go ahead and print out the favorite things collection.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=205)** I'm going to save it, and then watch what happens.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=208)** Now that we've switched over to a hash set, we've lost one of the snowboard elements, and that's because a set doesn't contain duplicate elements.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=219)** Now let's talk about one more best practice.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=222)** When you're working with a collection, you want to avoid as much as possible doing something like this.
>
> **[3:48](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=228)** So here, you'll notice that I'm using the array list, which is the concrete implementation, as the variable type.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=238)** In general, you want to use the most abstract type possible.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=242)** So that's going to be something like the list interface, or you would use the collection interface in this situation.
>
> **[4:11](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=251)** By using the most abstract type possible for the variable type of your object, it allows you to switch the implementation without any consequences.
>
> **[4:22](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=262)** So you'll notice, I just switched over to an array deck and I didn't need to change any of the code that relied on the collection interface.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=272)** So this is going to make your code a lot higher quality if you keep this point in mind.
>
> **[4:38](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=278)** I'm always on the lookout for it in a code review.
>
> **[4:42](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=282)** All right, and just to prove it works, we'll go ahead and execute our code again.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=286)** And there, you can see our output.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=289)** So, just by a few examples of collections, you can start to see the flexibility that gets provided by the Java collections framework.
>
> **[4:58](https://www.linkedin.com/learning/learning-java-collections/creating-a-collection?u=76281980&t=298)** It's going to be even more apparent when we take a deeper look at generics in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (6), type. (4), this. (3), switch (2)
> **CLI Commands:** make (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Generic typing
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=0)** - [Instructor] Let's walk through some examples that demonstrate the benefit of using generics with collections.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=6)** Collections can work with any type of object.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=9)** So the same type of collection that we use to store strings can also be used to store custom objects like our room.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=17)** It's not like we need a separate type of collection for the string and another for the room.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=22)** Like we see in the example, we can use an array list to hold both types.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=27)** Now collections are only meant to work with objects.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=30)** So if we insert a primitive like this long, it needs to be autoboxed to its wrapper type to work with the collection.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=38)** We can see this in action if we stream our collection and then print out the type of its elements.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=45)** Here I'm just going to get the class of each element in our collection within the stream and print them out.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=51)** Let's see what happens.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=53)** You'll notice that our primitive long was autoboxed to its wrapper type java.lang.long.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=59)** Now it's not a good practice, but right now we can add any type of element into our collection.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=65)** So if I copy this room, I can come up here and add it into the collection.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=71)** Now our collection is going to hold a string, a long, and a room.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=76)** Let's say I wanted to work with the room in our stream.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=80)** That would mean I need to cast the element to a type of room and that would allow me to access the methods on the room type.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=90)** So here I can do something like get the name of our room.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=94)** Now obviously this is going to cause a problem and you'll notice my IDE and the compiler had been trying to warn us about this the whole time.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=103)** That's because all they know is that this collection store's an object.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=109)** So when they see us inserting elements into it, they're concerned that we're potentially adding different types of objects.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=117)** So there's going to be an issue when we execute this code, but let's run it anyway.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=123)** You'll notice that when executing the code, we get a ClassCastException at runtime and that's because we attempted to cast one of these objects, maybe it was the string or the long, to a type room and it's just not compatible.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=140)** Prior to Java 5.0 when generics were introduced, this is how we worked with collections.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=145)** We had to cast every element that we retrieved from the collection to its type and you just kind of hoped there wasn't a different type in there that was going to throw an exception.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=158)** Now right now our collection is known as a raw type and that's because we haven't provided any type information about the elements it holds.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=168)** We can do that by using a generic type argument.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=171)** So here I'll add Room as the generic type argument for our collection and then I'll add the diamond operator on the constructor.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=180)** Now look what happens immediately.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=183)** The compiler shifts from giving us warnings to giving us compile time errors and that's because it now has type information about our collection.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=193)** It knows that it holds rooms.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=196)** So when it sees us inserting a type like our string into a collection that holds rooms, it's going to give us a compile time error.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=205)** So we fail fast and we fail early instead of experiencing this issue at runtime.
>
> **[3:30](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=210)** Now let's go ahead and we can comment out this code because we know it's not going to work and then I'm going to point out one final benefit of using a generic.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=221)** Because we provided that type information about our collection's elements, the compiler can infer the type of those elements when we retrieve them.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=231)** So instead of performing this cast, we can just use the element and invoke methods on the generic type of our collection.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=242)** All right, so with all that in place, let's go ahead and we can execute this code and you'll notice that it prints out the name of our room to the console.
>
> **[4:11](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=251)** When working with collections, you always want to use the generic type and avoid using raw types.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-collections/generic-typing?u=76281980&t=257)** This will shift any issues to compile time and it will become much easier to discover and resolve those problems in your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (1), throw (1)
> **Env Vars:** ide (1)
> **Versions:** java 5 (1)
> **Definitions:** known as (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Object comparison
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=0)** - [Instructor] When working with the Java collections framework, several collections and their methods rely heavily upon comparing objects.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=8)** Just looking at the collection interface, we'll find a few of these methods.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=12)** They're pretty easy to spot because they accept an object or a collection of objects as their argument.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=19)** They use this argument to perform an operation like removing an element or checking for its presence in the collection.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=26)** To perform these operations, they must identify the matching object within the collection they're invoked upon so the method relies upon a test that compares the provided argument against the elements in the collection to find the matching object.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=44)** In Java, there are two main ways to compare objects.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=47)** One is identity-based and the other is value-based.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=51)** When comparing objects by identity, we check to see if two objects have references to the same object in memory.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=60)** When you use Java's equality operator, this is the type of check that occurs.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=65)** Comparing objects by value is a test of whether two objects are logically equivalent.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=72)** It relies upon their field values, instead of their memory addresses to perform this comparison.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=78)** In Java, we override the equals method on an object to establish the logic for this comparison.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=85)** A quick way to learn these two concepts is to think about two people who have the same car.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=91)** Now, that's just how we phrase it.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=93)** They really don't have the same car, but they have two cars with the same make and model.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=100)** That is a comparison based on characteristics, or values of the car and it's the type of comparison necessary for collection methods, like remove, to function properly.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=112)** On the other hand, if we referred to two people sharing a single car, that is an identity based comparison.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=119)** It's normally not what we want when working with collections.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=123)** These comparison concepts come into play when collection elements must be compared against each other and there's some other factors in Java we have to take into consideration.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/object-comparison?u=76281980&t=134)** We're going to unpack those in our next lesson with a few code examples.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** interface (1), override (1), function (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### The equals method
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=0)** - [Instructor] Let's dive deeper into how collections rely upon object comparison using a code example based on our car analogy.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=9)** To help with that, I built a car class that has fields for the make, the model, and the mileage of the car.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=15)** You'll also find class members like a constructor and a to string method.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=20)** Now, I've also built a unit test that contains methods which test out the collection methods that we talked about that rely upon comparison.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=31)** To build the test, I have a setup method that runs before each test.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=36)** In this method, it creates a collection of cars, and then it creates three cars, a Subaru, a Tesla, and a Honda.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=44)** Then these three cars are placed in the collection.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=48)** So essentially, the collections reset with each test.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=52)** I also added a tear down method that's going to print out the collection after we run the test so that we can see what happen.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=60)** Now, what we really are concerned with are these three tests.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=64)** So I've added one test that is going to remove two of the cars so that will leave one remaining and I'll check that via an assertion.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=73)** The next test will check that our collection contains all three cars.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=79)** And then the final test is going to remove all of the cars and check that we have an empty collection.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=87)** Now, if you look at these tests, you'll notice that I vary how I use the car objects.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=93)** In some cases, I have a reference to the exact car in memory.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=98)** So for example, on lines 65 and 66, I have the exact instance of the car that we put into the collection.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=108)** Now, in other areas of the test, I actually instantiate a new car that is logically equivalent using a value-based comparison with a car that's found in our collection.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=122)** So right now, if I go ahead and I run these unit tests, you're going to see that they fail.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=130)** And that's because of the way we're performing the comparison.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=134)** Right now, when the remove method is called, it's using an identity-based comparison as opposed to the value-based comparison we would like to use.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=145)** The same is true with the other methods that we invoke in these tests and that's why they fail.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=152)** This is because we haven't overridden the equals method in the car class.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=159)** Right now, the car class is leveraging the equals implementation that it inherits from object.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=166)** And you can see it here.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=169)** It's using the equality operator to perform an identity-based comparison and that's what's causing our test to fail.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=178)** So let's switch our car class over to use a value-based comparison by overriding the equals method.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=186)** Now, to do that, we can use the capabilities found within the Eclipse IDE.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=192)** So just right-click within the class, then go to source and then you'll find generate HashCode and equals.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=201)** Now, you'll notice HashCode is included there too.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=205)** That's because there's some rules in the Java doc that say we must override HashCode when we override equals.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=213)** We're not going to get into that right now.
>
> **[3:35](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=215)** We'll talk about it when we discuss hashing strategies.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=218)** Just for now, know it's really important to follow the rule.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=222)** Okay, so go ahead, click on that option, and this is going to bring up a dialog where we can select the fields that are going to be used in our value-based comparison.
>
> **[3:54](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=234)** Now, when you select these fields, you want to pick fields that don't change frequently.
>
> **[4:00](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=240)** So the make and the model, they are excellent candidates for our equals method, but the mileage, that's going to change daily so we want to omit that in our value-based comparison.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=253)** Okay, once you have those selected, go ahead and hit generate, and this will generate the HashCode and equals method inside of our car class.
>
> **[4:24](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=264)** Now, I'm going to come down here to the equals implementation that was generated for us.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=269)** In the Java docs, it says that this method must be reflexive, symmetric, transitive, and consistent.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=276)** That's a lot.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=277)** Just know that if you use the IDE's capabilities, you don't have to worry about that.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=283)** But if you're writing your own equals implementation, you should probably take a look at the Java docs and do your homework.
>
> **[4:51](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=291)** Now, inside of this method, I'm actually going to log some information to the console so that we can see the value-based comparison be performed.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=301)** So I'll cast the object to a car and then I'm going to use the format method on the print stream to print out the make and the model of each of the objects.
>
> **[5:14](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=314)** So there I have my string set up.
>
> **[5:16](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=316)** Now let's pass the arguments into it.
>
> **[5:19](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=319)** First, the make of the current object instance, then the model of the current object instance, and then we'll look at the make of the object we're comparing and the model of the object we're comparing.
>
> **[5:33](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=333)** Okay, so let me just tidy that up and then we're going to save that and now head over to our unit test.
>
> **[5:40](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=340)** I'm going to go ahead right-click, go to run as JUnit test, and this time, you'll notice using the value-based comparison, our test pass.
>
> **[5:51](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=351)** Let's take a look at the console output.
>
> **[5:54](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=354)** You'll notice that when we run the contains test, the equals method was invoked multiple times to perform the comparison.
>
> **[6:03](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=363)** Okay, let's scroll down here to the remove test.
>
> **[6:06](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=366)** It's kind of easy to see what happened in this one.
>
> **[6:09](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=369)** You'll notice the value-based comparison with equals was invoked multiple times.
>
> **[6:14](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=374)** And using that, the collection was able to remove the other two cars and we only have the Tesla remaining.
>
> **[6:23](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=383)** So once we switched from the identity-based comparison to the value-based comparison, that allowed methods on our collection, like remove, contains, and remove all to function properly.
>
> **[6:37](https://www.linkedin.com/learning/learning-java-collections/the-equals-method?u=76281980&t=397)** And that's why our unit tests were successful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (2), override (2), pass (2), switch (1)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** right-click (2), go to (2), click on (1), select the (1), scroll down (1)
> **Env Vars:** ide (2)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### Challenge: Adding and removing collection elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=0)** - [Instructor] Now it's your turn to tackle a programming challenge that will require you to create some collections and use their methods to add and remove a few elements.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=14)** In this challenge, the Landon Hotel is working on a room management system that uses Java collections to manage their inventory of rooms within a service.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=24)** They've built skeleton methods on a room service class and have provided some comments about what each method should do, but they'll need your help in completing their implementations.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=35)** To do this, you'll need to add a collection to the class, then instantiate it and then work on each method to complete its implementation.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=46)** Before you get started, I recommend reviewing the unit tests that were provided to help you validate your work.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=52)** Once you're done, just run the tests by right-clicking within it and then going to run as JUnit test.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=60)** If you can get this bar to turn green, you've got it and your work is done.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=65)** Now here's one tip before you begin.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=68)** You should follow the numbering sequence specified in the room service class when completing your work.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=74)** That's because the unit tests rely upon the order.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=78)** Okay, go ahead, hit the pause button, give it a try, then continue the video and I'll share one solution to the challenge.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=86)** You've got this.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=88)** So how did it go? Were you able to get your test to pass?
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=91)** Let me show you how I approached it.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=94)** I started out by declaring a new field of type collection that had a generic type of room.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=100)** I named this field inventory.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=102)** Then within our room service constructor, I took the inventory field and assigned it a new hash set that I instantiated.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=111)** So I'm using a hash set as my collection implementation.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=114)** You might have chose to use something like an array list here.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=117)** That's fine.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=118)** Now for the next method, I might have approached it a little bit differently than you did.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=123)** I decided to use a conversion constructor in order to create a copy of our collection.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=130)** I did this because I wanted to protect the collection from modification.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=135)** Collections are mutable, so if we just returned our internal collection, somebody could modify the elements within it.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=142)** But by creating a defensive copy, we protect against this.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=146)** So that's what I chose to return for this method.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=150)** For the next method, we needed to take the four parameters and create a room and then insert it into our collection.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=158)** So first, I invoked the add method on our collection, and then I used the new operator and the room constructor, and then I just passed in all of the parameters that were provided to the method into the constructor.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=174)** This created the new room instance that would be added to our collection.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=179)** The next method required us to take an array of rooms and insert the rooms into our collection.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=185)** So this is a great example of when we can use a bulk insert operation.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=190)** So I'm going to invoke the add all method on our collection, and then I need to convert the room array into a collection, so I'll go ahead and use the Arrays.asList method.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=205)** This allows us to convert an array into a list.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=209)** So then we have a collection to pass in to add all and all of that collection's elements will be inserted into our inventory collection.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=219)** Then I moved on to the final method, removeRoom.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=223)** This method seemed a little bit straightforward.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=226)** We could just take our inventory collection, invoke remove, and pass in the room that we'd like to remove.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=232)** But you'll notice if we execute the tests at this point, they're going to fail.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=236)** Let's see that.
>
> **[3:59](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=239)** That's because we haven't overridden the equals method in our room type and that's going to cause the remove method not to work properly.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=248)** So let's head over to the room class and we can put that method in place.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=253)** Once again, I'll just use the assistance provided by our IDE to keep it simple.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=258)** So just right-click within the class and then go to source, then generate HashCode in equals.
>
> **[4:26](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=266)** And then for the fields on the room that we'll use to perform the value-based comparison, I'm going to use the name and the type.
>
> **[4:35](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=275)** So I'll uncheck capacity and rate.
>
> **[4:38](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=278)** And those two fields will be used to compare two instances of a room using a value-based comparison.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=286)** Okay, so I'll generate that code and then we can execute our tests again to see if we pass the challenge.
>
> **[4:54](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=294)** So I'll just right-click then go to run as JUnit test and there you can see we've passed.
>
> **[5:00](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=300)** Excellent.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-collections/challenge-adding-and-removing-collection-elements?u=76281980&t=301)** So that completes the first challenge in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), let (3), this. (2), require (1), this, (1)
> **UI Navigation:** right-click (2), go to (2)
> **Code Identifiers:** aslist (1), removeroom (1)
> **Prerequisites:** you'll need (1), before you begin (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Advanced collection problems
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=0)** - [Instructor] We're going to do a back-to-back challenge, so you get more experience working with collections.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=11)** In this challenge, the Landen Hotel has provided three additional methods on the room service class for you to implement.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=19)** Like last time, they've provided a unit test for you to check your work.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=23)** And within the body of each method, they've included the instructions for exactly what the method needs to do.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=29)** The first method, hasRoom, will check if the room provided to this method as an argument, is found within our collection inventory.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=39)** If it is, it'll return the boolean true.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=41)** If it's not, it will return the boolean false.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=44)** The next method, asArray, is going to return an array that contains all of the rooms found in our inventory collection in the order they were added.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=56)** That last part about order is really important, and you'll want to keep that in mind while you're working on your solution.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=64)** The final method is getByType.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=67)** This method is expected to return a new collection containing all the rooms that match the type passed into the method as an argument.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=77)** So you'll recall that our room class has a type field.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=81)** You'll want to compare the argument that is provided into this method against that field.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=86)** And that's going to determine whether or not you return the room in the new collection.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=91)** Now there's one really important instruction here.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=94)** The room inventory collection must not be modified, and the unit test will check for it.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=100)** So here you might consider using a copy of the collection.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=105)** Okay. That's the challenge.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=107)** Go ahead and pause the lesson.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=108)** Then when you're ready, hit the play button, and I'll share my solution.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=113)** Hey, welcome back.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=114)** That was a little bit more challenging, right?
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=117)** Let me show you my solution.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=119)** So for the first method, hasRoom, I knew that the collection interface had the contains method on it.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=126)** So I went ahead and invoked the contains method on our inventory collection and passed in the room that was provided to the method.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=135)** I knew this would return the right results, because we had previously overridden the equals and hashCode methods.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=142)** So it was just a matter of executing the statement and returning its results in line with the return statement.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=149)** Okay, let's go ahead, and we'll move on to our next method, asArray.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=154)** For me, this method was kind of a two-parter.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=157)** First, I knew I needed to select the right method on the collection interface.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=163)** So I ultimately went with the asArray method.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=167)** So I invoked it on the inventory collection.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=170)** And then I chose the overloaded form of the method that accepts an array.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=174)** So I declared a new room array and pass that into the method.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=179)** Now what this does for us is it types the array that is returned by the toArray method.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=186)** This helps us avoid a cast.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=189)** Now if we were to execute our unit tests at this point, they would still fail, because we have this requirement to maintain order.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=198)** If we inspect the implementation that we're using for our collection, you'll notice it's the HashSet.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=204)** The HashSet doesn't guarantee order.
>
> **[3:27](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=207)** So I had to switch up the implementation that we were using for our collection.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=213)** I switched over to the linked HashSet that maintains insertion order.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=217)** So as we add elements into the collection, it's going to hold them in the order they were added.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=225)** Now you might have chosen to use one of the list implementations that maintains order.
>
> **[3:50](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=230)** That works.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=231)** So at this point, I think we're good on the tests.
>
> **[3:54](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=234)** But before we run them, let's go finish up our last method, getByType.
>
> **[3:59](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=239)** This method was also a two-parter for me.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=243)** So the way I started out was by using the removeIf method.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=248)** I invoked it on our inventory collection.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=250)** And then I passed in a lambda expression to the removeIf method that check the type of the room and compared it against the provided type and made sure they weren't equal.
>
> **[4:22](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=262)** This would remove all of the rooms from the inventory collection that didn't match the provided type.
>
> **[4:30](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=270)** Now before we go any further, let me talk a little bit about the lambda expression.
>
> **[4:35](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=275)** A lambda is a function that only specifies a parameter and a body.
>
> **[4:41](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=281)** You'll notice it doesn't have a name, and we don't specify the return type.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=286)** The return type is inferred by the statement that I have highlighted.
>
> **[4:51](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=291)** Between the parameter and the body, we place an arrow token to construct our lambda.
>
> **[4:57](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=297)** All right, so that's a little bit about lambdas.
>
> **[4:59](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=299)** We'll talk about those more later.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=301)** Let's get back to our problem.
>
> **[5:03](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=303)** Methods like removeIf, remove and add, they're going to modify the underlying collection, and collections are mutable.
>
> **[5:12](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=312)** Our requirements say that the room inventory collection must not be modified.
>
> **[5:17](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=317)** So I needed to find a way to handle this.
>
> **[5:20](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=320)** To do that, I used a conversion constructor.
>
> **[5:24](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=324)** So I declared a collection that had a generic type of room.
>
> **[5:28](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=328)** And then I instantiated a HashSet and passed in the inventory collection to its conversion constructor.
>
> **[5:37](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=337)** This created a new collection implementation that is not linked to the original, so I can modify it without impacting our inventory collection.
>
> **[5:49](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=349)** So to do that, let's just go ahead, and we'll change over from using our inventory collection to the copy.
>
> **[5:56](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=356)** The copy will have the rooms that don't match the type removed by the lambda expression.
>
> **[6:01](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=361)** And then we can just go ahead and return that collection that has been modified.
>
> **[6:07](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=367)** And all this doesn't change the room inventory collection.
>
> **[6:11](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=371)** Okay. It's the big moment.
>
> **[6:13](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=373)** It's time to run the tests.
>
> **[6:15](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=375)** So I'll just right-click within the unit tests, go to Run as, and then I'll select JUnit test.
>
> **[6:21](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=381)** Hey, it looks like things past.
>
> **[6:23](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=383)** Anytime you're running tests, you want to see green.
>
> **[6:25](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=385)** So that's how I solved the challenge.
>
> **[6:28](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=388)** Maybe you found another way.
>
> **[6:30](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=390)** When working with collections, using the right method to achieve your goals can save you quite a bit of code and build more concise solutions.
>
> **[6:38](https://www.linkedin.com/learning/learning-java-collections/challenge-advanced-collection-problems?u=76281980&t=398)** So anytime you feel like your collections code is getting a little bit cluttered, head over to the Java docs and see if you can find a method that does exactly what you want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), lambda (5), interface (2), type. (2), pass (1)
> **Code Identifiers:** asarray (3), removeif (3), hasroom (2), getbytype (2), hashcode (1)
> **UI Navigation:** select the (1), right-click (1), go to (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Iterating Collections

#### Iterating collection elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=0)** - [Instructor] When working with Java Collections, it's common to traverse or iterate through each element in the collection, one after the other.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=8)** Initially, the framework provided an iterator for the task, or a basic loop was used.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=14)** Then, new versions of Java introduced language features like the enhanced for-each loop, and streams that gave us new approaches for navigating collection elements.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=23)** At a high level, we can categorize the approaches for traversing a collection into three groups, loops, iterables, and streams.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=32)** First let's talk about loops.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=34)** These are the trusted while, do-while, and for loops that we learned when starting out with Java.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=40)** They can be used to iterate collection implementations that allow positional or reference-based access to the elements that they hold.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=48)** You'll notice I've placed for-each loops into this group.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=53)** Using its concise syntax requires the object we are traversing to implement the iterable interface.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=59)** So it's still a loop, but there's some crossover with iterables.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=64)** Before discussing iterables and streams, let's talk about the collection interface methods that expose these capabilities.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=72)** I've divided these methods into two subgroups based upon the interface they originate from.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=78)** The first set comes from the iterable interface that the collection interface inherits from.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=84)** It provides a functional style for-each method, and access to iterator and spliterator objects that we'll talk about next.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=92)** In Java 8, the collection interface added methods for obtaining a stream and a parallel stream.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=99)** Let's look closer at what the iterable interface provides.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=103)** It defines methods for obtaining an iterator and spliterator, which is used for sequentially accessing a collection's elements.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=112)** When using an iterator, the has next and next methods are paired with basic loops to step through the collection's elements one at a time in a forward direction.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=122)** Let's move on to our last category, streams.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=125)** Streams support a functional programming style within Java.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=129)** When using this style, one or more intermediate operations are applied to a sequence of elements that flow from a source, like a collection, to form a pipeline.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=140)** A single termination operation completes the pipeline by modifying the elements or returning a result.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=147)** The operations used in a pipeline often accept Lambda expressions that determine the processing that will be applied to each element.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=156)** The processing by any operation on a stream does not modify the underlying source collection.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=162)** However, in some cases, it will return a new collection without modifying the source.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-collections/iterating-collection-elements?u=76281980&t=169)** In this chapter, we'll look closer at using iterators and streams with collections.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (7), let (4), while, (2), from. (2), lambda (1)
> **Versions:** java 8 (1)
> **Speakers:** - [instructor] (1)

#### Accessing collection elements with iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=0)** - [Instructor] Let's walk through a few examples involving iterables to see how to traverse a collection.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=6)** To get us started, I've created a collection of rooms that's backed by an array list implementation.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=12)** If we want to create an instance of an iterator from this collection, we can declare a variable of type Iterator and give it a generic type of Room.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=21)** I'll then give it a name and from there we can invoke the iterator method on our collection.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=27)** This is a factory method that returns a new instance of an iterator.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=32)** I'm going to use this iterator to print some output to the console.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=37)** To do that, I'll just invoke the next method on the iterator.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=41)** Now because the iterator is backed by the collection, we can access collection elements through the next method.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=49)** Each time we call the next method, it's going to advance one position forward in the collection and return an element.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=58)** That element is going to be of type Room because our iterator is generically typed.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=64)** So as I look through the methods that we can invoke on the element returned by the next method, you'll see that we have all the methods from the room type.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=73)** I'll go ahead and print the name to the console.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=76)** Now I'm going to do this two more times and each time that we invoke the next method, the iterator's going to advance and return a room.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=86)** Now watch what happens when we execute this code.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=89)** The iterator advances through the collection, returns the room and prints the name.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=94)** So there we can see all of the names of our rooms in the collection.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=99)** Now one thing that's important to know about this factory method is that it returns a new instance of an iterator.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=106)** So if I do something like this and I create a second iterator instance, and then in this last line of code I switch over to use the second iterator instance, watch what happens when I execute the code.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=120)** The first iterator instance prints Piccadilly and Cambridge and then you'll notice our second iterator instance prints Piccadilly.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=129)** That's because the second iterator instance only tracks its own progress traversing through the collection's elements.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=137)** It's separate from the first iterator.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=141)** So through this example, you can see how we get different iterator instances from that factory method.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=148)** Now this isn't how we typically use an iterator.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=152)** Normally when using an iterator it's in combination with a while loop.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=156)** So let me go ahead and create a while loop that uses our iterator to traverse through the collection of rooms.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=163)** Okay, so there we see it and let's start to dissect this pattern.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=168)** One of the most important parts is this call to hasnext within the condition of the while loop.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=174)** Hasnext is a method on the iterator that's going to return a Boolean that indicates if the iterator has more elements to traverse through.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=185)** If this method returns false, we'll fall out of the wild loop.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=188)** But while it's true, we'll continue iterating through our iterator.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=193)** And inside of the body of our loop, we can invoke the next method to get each element from the collection.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=200)** Now my IDE has placed a cast in here that's unnecessary, so I'm going to remove it and then I'll just print out each room's name to the console.
>
> **[3:30](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=210)** All right, let's go ahead and we can execute this code, and there you can see how we can use a while loop and an iterator to traverse through a collection.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=222)** This was a popular approach for iterating a collection prior to Java 5.0 when the enhanced for loop was introduced.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=231)** This loop, also known as the for-each loop, provides a concise way to iterate through a collection.
>
> **[3:57](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=237)** Let's check it out.
>
> **[3:59](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=239)** I'm just going to type foreach in my IDE, then hit control + space, then enter, and this will cause Eclipse to build out for-each loop for me.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=250)** This for-each loop iterates through all of the elements in our rooms collection.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=255)** Now let's break down its syntax.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=258)** On the right side of the statement, you'll see that we have our collection of rooms and you'll recall that the collection interface extends the iterable interface.
>
> **[4:30](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=270)** Any object that we place on the right side of this statement is going to be iterated through and we need that iterable interface to be implemented by that object because it's used to obtain an iterator.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=286)** And each time that we iterate through our for loop, the next method on that iterator is called to get the next element in our collection.
>
> **[4:56](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=296)** That element is going to be assigned to the variable declared on the left side of this statement.
>
> **[5:03](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=303)** Now because our collection is generically typed, the internal code for the for-each loop can take advantage of that typing and it knows what type to assign each element retrieved from the iterator.
>
> **[5:15](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=315)** Within the body of the loop, we can use this variable.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=318)** So I'm just going to go ahead and use it to get the name of the room, and we can print it out to the console.
>
> **[5:26](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=326)** Just remember with each iteration of this loop, an iterator is called to get the next element in our collection and that value is assigned to this variable.
>
> **[5:37](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=337)** And we can see that in action if we execute our code because you'll notice that using the for-each loop, we were able to print out the name of each room in our collection.
>
> **[5:48](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=348)** So those are some of the most common patterns involving iterables that we use to traverse a collection.
>
> **[5:54](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=354)** In these patterns, loops play an important role.
>
> **[5:57](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-iterators?u=76281980&t=357)** But as you'll soon see, we can achieve similar results in most cases using a functional programming style.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (3), type. (1), switch (1), continue (1)
> **Definitions:** is a  (2), is called (2), known as (1)
> **Env Vars:** ide (2)
> **Versions:** java 5 (1)
> **Speakers:** - [instructor] (1)

#### Modifying collections while iterating
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=0)** - [Instructor] When beginning to iterate through collections, most Java developers encounter the concurrent modification exception.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=7)** It's almost like a rite of passage.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=9)** So I'm going to show you how to avoid that.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=12)** In our application, I've created a collection of rooms.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=15)** Then we have some innocent looking code that iterates through the rooms using a for-each loop.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=21)** Inside of the loop's body, we check to see if a room is pet friendly.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=26)** Pet friendly is a new Boolean field that I've added to the room type and added accessors for.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=32)** If the room is pet friendly, we're going to attempt to remove it from the collection of rooms.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=38)** Now let's go ahead and see what happens when we execute this code.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=42)** Yup, there it is, the concurrent modification exception.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=46)** So let's talk a little bit about why that occurred.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=51)** The concurrent modification exception is thrown when the underlying collection is modified while we're iterating through it.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=59)** It can be triggered if we attempt to add, remove, or in general change the collection inside of a loop.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=66)** This exception protects the collection from being changed by another thread while we're iterating through it.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=72)** However, the exception is still thrown for single-threaded code like ours.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=77)** Changes to a collection during iteration can have unexpected results at runtime, so that's difficult to troubleshoot.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=85)** The iterator attempts to protect us from that by failing fast.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=89)** But what if we still need to remove an element from a collection that we're iterating?
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=94)** Let's take a look at one option.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=97)** We can collect the elements we'd like to remove in a new collection.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=103)** So what I'm going to do is create a new collection outside of the for-each loop where we're not iterating.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=111)** So here we have a collection of type room that's backed by an array list.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=117)** Inside of the body of our for loop, I can go ahead and switch up line 25.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=125)** And instead of attempting to remove from the original collection, I'm just going to add the room to the new collection that we created that isn't part of the iteration.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=138)** Now outside of the for-each loop where we're not iterating, what I can do is take our original collection of rooms and I can invoke the removeAll method on the collection.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=151)** You'll recall this is a bulk operation that's provided through the collection interface.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=157)** And if we just pass in the collection of rooms that we gathered during the iteration in a separate collection, we can then remove them all from the original collection.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=169)** Okay, so let's go ahead and we can see this in action and you'll notice that the rooms Oxford and Victoria were removed from our collection.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=180)** Those were the pet-friendly rooms. Excellent.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=183)** Now, there's another way that we can do this using an iterator, so let's take a look at that.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=191)** So first, let's get an iterator for our rooms collection.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=195)** We can do that by invoking the iterator method on it.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=200)** Okay, so now that we have our iterator, I'm going to create a while loop that uses the iterator to traverse the collection.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=209)** This is the pattern that we saw before.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=211)** And once again, my IDE attempts to perform the cast, so I'm going to remove that.
>
> **[3:36](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=216)** And now inside of our while loop's body, I can just go ahead and grab this conditional statement.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=225)** So I'll just cut that and paste it here.
>
> **[3:48](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=228)** And then I'm going to go ahead and clean up this code that use the for-each loop.
>
> **[3:54](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=234)** Now, when we're doing the iteration using the iterator, we can just replace line 26 with a call to the iterator's remove method.
>
> **[4:05](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=245)** And this will allow us to safely remove an element from a collection that we're iterating without throwing the concurrent modification exception.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=255)** All right, okay, so let's go ahead and we'll save this code and then I'll execute it and you'll notice once again, we've removed the pet-friendly rooms.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=263)** Collections often provide several ways to achieve the same outcome, but sometimes that can get us into trouble like when we modify a collection that we're iterating.
>
> **[4:33](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=273)** So stick to the methods that I showed you or better yet use a stream.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/modifying-collections-while-iterating?u=76281980&t=277)** I'll show you that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), for. (1), switch (1), interface (1), pass (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** removeall (1)
> **Env Vars:** ide (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Accessing collection elements with streams
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=0)** - [Instructor] The Streams API and Lambdas added to Java 8 gave us a concise functional style for writing code.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=7)** Let me show you through an example.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=9)** In our application, we have a collection of rooms that I iterate through and check if the room is pet friendly.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=15)** If it is, I write its name out to the console.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=19)** This style of code is known as the imperative style.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=22)** When we use an imperative style, we have to specify exactly how we want the code to behave.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=28)** So I need to write the code that does the iteration, performs the conditional check and writes the information to the console.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=35)** When we use a functional style with streams, it's a little bit different.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=39)** It's more like we tell the code what we want to achieve.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=44)** Let me show you.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=45)** So first, think of a stream as a pipeline that our elements flow through but it never stores them like a collection.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=52)** The elements are always moving forward through the stream.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=56)** So first, we need a source of elements that can flow through the stream.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=61)** We can find them in our collection.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=64)** So on our collection, I'm going to invoke the stream method in order to start the pipeline that the elements in our collection will flow through.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=74)** Now, on that pipeline, we can add operations, and our first one is going to be an intermediate operation named filter.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=83)** It allows us to perform a test on the elements flowing through the stream that will determine if they continue on for further processing.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=93)** Now, to perform that test, we use an object known as a predicate.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=99)** A predicate is a functional interface.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=101)** So I'm actually going to create an instance of a predicate using an anonymous class.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=108)** This is kind of a long way but it's going to show you how a collection works.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=113)** So let's go ahead and import the predicate type.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=116)** Just hover over the type and then select java.util.function.predicate, and then in order to add the method to the body of the predicate, just hover over the type again, and click on add unimplemented methods.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=131)** And here we can see the signature of the functional interface.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=136)** You'll notice that it accepts a parameter of type room.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=140)** That makes sense.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=141)** It's the type of element that's flowing through the stream because it's the type of element found in our collection.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=148)** Now, in the body of this method, what we do is we perform some sort of test on the room.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=154)** And in this case, we just want to check if it's pet friendly.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=159)** And it's pretty easy because PetFriendly is a Boolean and we're just going to return the result of the method.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=165)** That result will determine whether or not the element continues for further processing in the pipeline to the next operation.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=174)** So let's go ahead and add that operation.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=177)** We could add another intermediate operation but instead, I'm going to use a terminal operation named forEach.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=185)** So a terminal operation is used to end the pipeline.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=190)** It's either going to return a result or modify the elements that are streamed into it.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=196)** Now, when we use the forEach method, we need to supply a consumer, which is another functional interface.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=204)** So I'm going to use an anonymous class so that we can see this as well.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=209)** All right, so let's go ahead and we'll import the Consumer type, and then we're going to add its functional interface method.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=218)** And you can see that it just accepts a room as a parameter.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=223)** I'll go ahead and change that parameter name.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=225)** And then inside of its body, we're going to print out the name of the room to the console.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=233)** Now, I'm going to do one more thing here.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=236)** I'm going to add a little bit of debugging.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=238)** So I'll use System.out.format and here I can provide a pattern.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=243)** So we can say that we're testing, and then we'll provide a string and then we'll say that we got a result, and we'll provide a Boolean, and then I'll just put a new line.
>
> **[4:16](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=256)** And now we can pass in the arguments to that pattern.
>
> **[4:20](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=260)** The first one will be the name of the room, and the second one will be the results of our isPetFriendly call.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=269)** All right, so what we're doing here is just printing the name of the room, and whether or not it's pet friendly.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=277)** And I added this so that you can see how the stream works.
>
> **[4:40](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=280)** Watch what happens when I execute this code.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=284)** You can see the elements flowing through the different operations in the pipeline.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=289)** So first, the Cambridge room went through the pipeline.
>
> **[4:53](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=293)** And because our predicate returned false, the filter method blocked it from further processing.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=301)** Now, you can see the next room, Oxford, was pet friendly.
>
> **[5:05](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=305)** So the filter allowed it to continue on for further processing and then our consumer printed out the name of the room to the console.
>
> **[5:15](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=315)** And you can see what happened with the other two rooms as well.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=318)** One was allowed to process and the other was blocked.
>
> **[5:21](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=321)** So that's how a stream works but I probably haven't sold you on the conciseness of the functional programming style.
>
> **[5:29](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=329)** And that's because I used those anonymous classes.
>
> **[5:31](https://www.linkedin.com/learning/learning-java-collections/accessing-collection-elements-with-streams?u=76281980&t=331)** So that's where we're going to pick up in our next lesson where we take a look at the lambda expression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (4), continue (2), class. (1), type. (1)
> **Definitions:** known as (2), is a  (2)
> **Code Identifiers:** foreach (2), ispetfriendly (1)
> **Tools:** terminal (2)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Versions:** java 8 (1)
> **UI Navigation:** click on (1)

#### Lambda expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=0)** - [Instructor] In our last lesson, we were able to use the functional style to build out a pipeline using our collection, a stream and some operations.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=9)** Now, it's definitely not as concise as we would like, and that's because we haven't used a lambda expression yet.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=16)** Let's talk about that.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=17)** You'll recall that a lambda is a function that only has parameters, an arrow and a body.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=23)** Anything else, like a method name or a return type is unnecessary.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=29)** So let's go ahead and convert these functional interfaces over to lambdas.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=34)** To do that, we can remove everything to the left side of the parameter going into the method on the functional interface.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=43)** Okay, the next thing we need is an arrow, and I'm just going to overwrite some of this syntax that was left from the previous code.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=52)** Okay, so now we got our arrow, I'm going to remove this debugging as well.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=56)** It's really not necessary.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=58)** And then I'm going to remove everything on the right side of the method body.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=64)** Okay, watch what happens.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=66)** Now, all we're left with is the return statement.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=69)** And that's not necessary for a lambda that doesn't have multiple lines.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=75)** We can just remove the return statement, and now we get this nice concise lambda expression.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=81)** Look what that did for our code.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=84)** Okay, let's do the same thing for the forEach method by switching out the functional interface consumer with a lambda function.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=92)** You'll recall we're going to get rid of everything to the left of the parameter.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=98)** Then we're going to replace the syntax with an arrow.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=102)** Then we're able to remove everything to the right of the method body.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=107)** Then let's just tidy this up, and look what that does for us.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=111)** I told you it was concise, and it gets even better.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=115)** We can replace our lambda with a method reference.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=119)** A method reference allows us to pass a method into a function.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=125)** So here I can use the Room type, and then specify that we'd like to invoke the isPetFriendly method, and that will be used as the predicate for our filter operation.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=137)** Look at that.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=138)** Okay, let's go ahead, we'll execute it.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=140)** You can see that we got the same results as last time, except this time, it was only three lines of code, and it very much does say what we want to achieve.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=150)** We want to stream the elements from our collection of rooms, remove any rooms that are not pet friendly, and then write then out to the console.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=159)** So we've only scratched the surface of what operations are exposed on the stream interface but now you should understand the pattern of how we work with stream operations, and lambdas to build out a pipeline.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/lambda-expressions?u=76281980&t=172)** Let's take a look at a few more operations next.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (6), let (6), function (3), interface (3), else, (1)
> **Code Identifiers:** foreach (1), ispetfriendly (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Stream operations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=0)** - [Instructor] So we're going to take a look at a few more stream operations because streams are really important when working with collections, but I can't go into the details on everything because I don't want to lose that focus on collections.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=12)** So let's just walk through a few examples and then you might want to look at the streams API on your own.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=18)** So let's imagine that we wanted to gather all of our pet-friendly rooms into a new collection.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=24)** You might do something like this.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=26)** You might declare a new collection and then inside of the stream, you're going to pass in that collection and add the rooms into it.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=34)** So we're doing two things here.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=36)** We're passing in an external object and we're modifying it within the stream.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=42)** Now in general, it's okay to work with external objects inside of your stream.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=46)** It's okay to modify objects inside of your stream, but you should never do both.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=52)** So there's an operation we can use to handle this.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=55)** We can use the collect operation.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=58)** It's a terminal operation that we can use within our pipeline.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=62)** And the collect operation accepts a collector and we get several collectors on the collector's class via its static methods.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=71)** And probably the one you'll use the most is toList.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=74)** So essentially all the elements that flow into the collect operation are going to be gathered into a list and returned by this operation.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=83)** So all we need to do then is just assign that list that's returned by the operation to our new collection and then we can go ahead and execute the code and you'll see that our stream here is going to print those elements in the collection out to the console.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=102)** Now, if we look at this stream, there's actually a better way we can do this.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=106)** You'll notice that we are printing out the result of invoking the getName method, because we just want to get the name of the room.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=114)** What we can actually use another operation to do that, that operation is map.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=120)** And what the map does is it takes in the elements coming in, so in this case, it's our room, and then we apply a transformation on the element, and that's going to determine what element flows out of the operation and further down the stream for processing.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=137)** So here, I'm going to accept the room as a parameter into our function that will do the mapping.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=145)** And then we're going to return a string from this Lambda expression.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=149)** And that string is what will flow to the next operation.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=153)** There, all we need to do is use a method reference to go ahead and print out our stream.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=160)** So I'll use the println method and pass that into the for each operation.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=167)** And now if we execute our code, look what happens.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=171)** So we cleaned things up a bit there.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=174)** Now let's walk through another example.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=176)** Let's imagine that we wanted to get the total revenue of all the pet friendly rooms.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=183)** To do that, we can use the rate on the room, which is a double.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=187)** We can see it here.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=189)** Now there's another map operation that allows us to do this really easily and it's mapToDouble.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=195)** And all we need to do is pass in a method reference that's going to return a double.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=202)** So here I'll just pass in the getRate method and now we're going to be working with a double stream and this has another operation on it, sum.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=213)** So let's go ahead and we will sum all of the doubles that are flowing into that operation.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=219)** And they're going to get totaled and returned as a double.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=223)** So let's store that in a variable and then we can print that variable to the console.
>
> **[3:50](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=230)** Okay, and you can see we have a total of $450 in potential revenue for our pet friendly rooms.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=236)** So those are just a few of the methods from the streams API that we can use to work with our collections.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=243)** This course is about collections, but learning more of the streams API will definitely improve how you work with them.
>
> **[4:09](https://www.linkedin.com/learning/learning-java-collections/stream-operations?u=76281980&t=249)** So I'm going to sprinkle in more examples with streams in the remainder of the course and if you'd like, take a deeper look at the streams API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (4), this. (3), static (1), case, (1)
> **Code Identifiers:** tolist (1), getname (1), maptodouble (1), getrate (1)
> **Env Vars:** api (4)
> **Analogies:** imagine (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Iterating collections
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=0)** - [Instructor] Now that we've explored a few ways to iterate collections, let's try a programming challenge.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=11)** In this challenge, the Landon Hotel has asked you to implement three new methods on the RoomService class.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=18)** The first method applies a discount to the rate of each room.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=22)** The rate is provided in decimal form as a double argument to the method.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=27)** You'll need to use this double to reduce the rate assigned to each room.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=32)** The next method requires you to return a new collection of rooms that contain rooms from the inventory, which have the same or a higher capacity than the argument provided to the method.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=45)** The final method is similar.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=46)** It asks you to return a new collection of rooms that match a particular type and are below a provided rate based on the supplied arguments.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=56)** This challenge uses the same format as the others.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=59)** There's a comment in each method describing what needs to be achieved, and a unit test is provided for validating your work.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=67)** So that's the challenge.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=68)** I recommend trying several approaches for each one, like using a forEach loop, then trying it again with a stream.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=75)** This will get you more familiar with iterating collections.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=79)** So if you're up for a challenge, pause the video and work on your solution.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=83)** When you're finished, resume the video and I'll show you my solution.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=88)** Hey, welcome back.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=90)** I'm just going to go ahead and dive right into my solution.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=94)** So for the first method, we needed to apply a discount to each room in the collection.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=100)** So that meant we needed to iterate over them.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=103)** To do that, I used the forEach method provided by the iterable interface that accepts a consumer, which we can provide as a lambda.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=113)** So I started out building the lambda by specifying its parameter as r.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=118)** This is going to be how each room in the collection is passed into the lambda.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=123)** From here, I could set the rate on the room but I also needed to do a little bit of math.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=128)** So I got the original rate, and then I multiplied that by one minus the discount that was provided.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=136)** And using this technique, I was able to reduce the rate of the room.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=141)** Then I moved on to the next method, getRoomsByCapacity.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=145)** This method accepted an integer and we needed to take that and go find rooms within our inventory collection that had a capacity that was greater than or equal to what was provided.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=158)** To tackle this, I used a forEach loop.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=160)** So let's go ahead and we'll put that into our code.
>
> **[2:44](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=164)** Now, because I went this direction, it meant I needed to create a new collection that would hold all the rooms that matched our criteria.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=173)** I backed this collection using a HashSet.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=177)** So I instantiated that with its constructor and then inside of the forEach loop, I needed to check whether or not the room satisfied the condition.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=187)** So I got the capacity of the room, and then I used the greater than and equal to operator and compared the room's capacity against the requiredCapacity that was provided into the method.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=202)** From here, if the room satisfied the condition, I could just add it into our new collection, and then I needed to return that new collection with the matching rooms from the method.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=217)** All right.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=218)** I was able to move on at that point to provide an implementation for the getRoomByRateAndType method.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=226)** This method accepted two parameters.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=229)** One is a double.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=231)** That was a rate.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=232)** And the other was a string that's a type.
>
> **[3:55](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=235)** We needed to search our collection inventory for rooms that had a rate lower than what was provided, and that matched the type that was also provided into the method.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=246)** This is a perfect candidate for a stream, and I also felt guilty for not using it in the last method.
>
> **[4:12](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=252)** So that's how I tackled this one.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=255)** I got a stream from our collection of rooms, and then I applied two intermediate operations.
>
> **[4:22](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=262)** Both were filter.
>
> **[4:24](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=264)** So the filter I put in place first checked that the rate of the room was lower than the provided rate.
>
> **[4:33](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=273)** And then I could move on and provide the second filter.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=276)** And this one needed to check that the type of the room was equal to the provided type.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=284)** Now, from here, I still needed to satisfy the method signature and return a collection of rooms.
>
> **[4:50](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=290)** So this was a perfect situation to use the collect operation.
>
> **[4:55](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=295)** So I specified the collect method and then I used a collector to gather the elements flowing through the stream into a list.
>
> **[5:05](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=305)** Okay, so there you can see my solution.
>
> **[5:08](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=308)** Let's cross our fingers and head over to the unit tests.
>
> **[5:12](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=312)** I'll just right click on the test, go to Run As, JUnit test, and hey, we passed.
>
> **[5:17](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=317)** Excellent.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-collections/challenge-iterating-collections?u=76281980&t=318)** That still gets me excited every time and it wraps up our latest challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), lambda (3), type. (2), class. (1), interface (1)
> **Code Identifiers:** foreach (4), getroomsbycapacity (1), requiredcapacity (1), getroombyrateandtype (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Set

#### Set
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=0)** - [Instructor] Up until this point in the course, we focused mainly on the collection interface and its methods Now, we'll start to examine specific collection interfaces and implementations, starting with a quick look at sets.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=13)** The main thing that differentiates a set from other collections is that it does not store duplicate elements.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=20)** This is controlled internally by the collection, which performs a comparison of new elements inserted via the add method or a constructor against those that already reside in the collection.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=33)** Our deep dive on the collection interface will come in very useful when working with a set.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=38)** That's because the set only adds two additional methods beyond those found on a collection interface.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=45)** These two additional methods, of() and copyOf(), were added in later versions of Java to help us create immutable sets.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=53)** If we examine the type hierarchy of a set, you'll see the interfaces that extend it and other set implementations.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=60)** You'll be very familiar with the basic HashSet implementation because it doesn't contain any additional methods beyond those specified on the set interface.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=70)** The actual implementation uses a hash map to back the set and elements in it do not retain any order.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=77)** It's subclass, LinkedHashSet, uses a linked list to order elements, according to when they were inserted.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=84)** The SortedSet interface is used for sets that iterate through elements in ascending order.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=89)** And its sub interface, NavigableSet, extends that behavior to allow us to search for elements.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=96)** When working with the TreeSet implementation of these interfaces elements must implement the comparable interface,, or we need to provide a comparator to determine the ordering.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=107)** So, that's a high level look at sets.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/set?u=76281980&t=109)** Let's jump into some code in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (7), extends (1), let (1)
> **Code Identifiers:** copyof (1)
> **Speakers:** - [instructor] (1)

#### HashSet
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=0)** - [Instructor] The set interface is nearly identical to the collection interface that we've studied.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=5)** However, it does have a few additional methods, and its implementations have some unique behaviors.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=12)** To see these unique characteristics of a set, let's walk through a few examples.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=17)** I'm going to start out by creating a set of rooms, and I'm going to use a hash set as the implementation for my set.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=25)** All right, let's go ahead, import the types, and then I'm going to start adding rooms.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=30)** I'll first add Piccadilly, and then I'm going to add Oxford.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=36)** Now, I'm also going to add the same exact instance of Oxford followed by a logically equivalent instance of Oxford named Oxford Duplicate.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=47)** You can see that object here.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=49)** If we performed a value-based comparison between these two objects, they would be logically equivalent to each other.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=56)** Keep that in mind as we walk through the example.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=59)** Now, I'm also going to use a stream in order to print out our room names.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=65)** So using a map, I can get the name of each room and then I can use the For Each method to print that to the console.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=75)** Okay, now, before I execute this code, I want to show you one more thing.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=80)** In the room class, I've added some console output within our Overridden Equals method.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=86)** It's just going to tell us more about the comparison so that we can see what's happening with the set internally as we execute this code, so let's check it out.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=96)** You'll notice that the equals method was invoked, and that was for the comparison with the logically equivalent instance of Oxford.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=107)** For these two objects, it's likely that the equality operator was used, and that's why we don't see equals invoked again.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=114)** Now you'll notice, we only have one instance of Oxford, and that's because a set doesn't allow duplicates.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=122)** The other thing I'll call your attention to is the order.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=125)** The stream didn't iterate through the collection in the order that the elements were inserted, and that's because the hash set doesn't guarantee order.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=135)** If we wanted to maintain the insertion order of our elements, we would have to switch over to a linked hash set implementation.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=143)** So, watch what happens when I make that change.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=146)** Now, you can see Piccadilly, which was inserted first into the set, prints out first.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=154)** Okay, now let's take a look at some of the new methods that were added to the set interface.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=161)** I'm going to create a new set named Other Rooms, and then I'm going to grab the set interface, and we're going to use the Of method to create an unmodifiable set.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=172)** So, this is a set that you can't change.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=175)** It can be helpful for thread safety or sometimes for performance.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=179)** You'll notice that the Of method has several overloaded forms where we can add up to nine elements into the set, and there's even a VAR args form of this as well.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=192)** Let's go ahead and use the overloaded form that accepts two elements.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=197)** I'll pass Piccadilly into the method, and then I'm also going to pass in Oxford.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=204)** Now, watch what happens when I try to change our unmodifiable set.
>
> **[3:30](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=210)** If I use the Add method and try to place Victoria into the set, if we execute the code, you'll notice that an exception is thrown.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=219)** Let's check it out.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=221)** It's the unsupported operation exception.
>
> **[3:44](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=224)** So on the unmodifiable set, you won't find any support for methods that are going to change the collection.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=232)** So let's go ahead, we'll comment this out, and then I want to show you another method.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=238)** So we'll come down here, and I'm going to create a new set of rooms.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=243)** I'll call this More Rooms, and then we're going to use the Copy Of method on the set interface.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=250)** This creates an unmodifiable copy of a collection.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=253)** So let's go ahead and we'll pass in our Rooms collection.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=257)** And just like the other set that we created, we can't perform any operations like an add or remove that are going to change this set, but let's do this.
>
> **[4:26](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=266)** I'm going to change our stream to use more rooms as its source.
>
> **[4:33](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=273)** So this is our unmodifiable set.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=276)** And let's first go, we can print out the elements in that collection, and you'll notice we got Oxford and Piccadilly.
>
> **[4:45](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=285)** Now I'm going to go ahead and add Victoria into the collection that we copied.
>
> **[4:51](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=291)** Watch what happens now.
>
> **[4:54](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=294)** You'll notice that our unmodifiable set is backed by the first collection that we copied.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=301)** So, you'll have to be aware of that when working with an unmodifiable set.
>
> **[5:05](https://www.linkedin.com/learning/learning-java-collections/hashset?u=76281980&t=305)** So, that's a look at some of the recent additions to the set interface and a few of its implementations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (6), pass (3), class, (1), switch (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** var (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### TreeSet
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=0)** - [Instructor] TreeSet is another set implementation that uses a binary search tree to organize the elements it stores.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=8)** The relationships between two elements is used to structure the tree that stores data in a TreeSet, so the collection must have a way to compare whether an element is greater than, less than, or equal to another element.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=22)** To do this, the TreeSet uses a comparator, or elements that implement the comparatable interface, to perform the relational comparison between the elements.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=32)** Unlike the other collections we've seen, the TreeSet uses this relational comparison to evaluate elements instead of the equals method.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=40)** This introduces some challenges when working with custom objects in a TreeSet.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=45)** There can be problems that are unique to your exact situation, so if you're using custom objects make sure you refer to the Java docs.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=54)** Let's walk through an example that uses a TreeSet to store integers.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=59)** The integer is a great choice for working with the TreeSet because it has a natural sort order.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=65)** This sort order places integers into an ascending numeric order.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=69)** We can get started by declaring a variable that uses a NavigableSet as its type.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=75)** Inside of the set I'm going to store integers, so I'll specify that as its generic type.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=81)** I'm just going to call this set the numberTree, and then I'm going to use the TreeSet as my set implementation.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=90)** Now, here, I'm going to pass in this list of numbers, that we've created, into the constructor.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=97)** And then I can go ahead and import the types, and now I have my TreeSet.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=101)** All right, now let's start out simple and we can stream this TreeSet to the console.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=109)** So I'll just use the forEach method, within the stream, and that should print everything out.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=116)** Now, watch what happens as I execute this code.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=120)** The numbers are placed in ascending order in accordance with the integer sort order.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=127)** Now, we can do some different things from here.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=129)** If we wanted to get the set in descending order we can use the descendingSet method to switch it up, and you'll notice that now we have our integers iterated through in descending order as returned by the descendingSet.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=143)** Another method, headSet, allows us to get all of the integers, in the tree, that are lower than a particular number, so, here, I'm going to get a new set that contains all integers lower than 1,750.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=161)** There, you can see that set.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=163)** It also has a counterpart, tailSet, which will give us all numbers higher than a particular number, so now we're going to get a set with numbers greater than 1750.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=174)** There's also a subSet that allows us to pick a set that is between a range of two numbers, so I'll go ahead and pick all the numbers between 1750 and 2750.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=188)** Now let's watch what happens there.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=190)** You'll notice that I got everything between the two numbers that I provided.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=196)** Now there's also methods for getting numbers within the proximity of another number, so, here, I'm going to get the number that is just lower than 750, and that's going to be 500.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=211)** There's a counterpart method, here, higher that we can use that will give us the next number that is just higher than 750, and that's 1,000.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-collections/treeset?u=76281980&t=221)** So that's a quick glance at the TreeSet implementation, and we got to see a few of those methods that are available on the NavigableSet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), this, (1), interface (1), pass (1)
> **Code Identifiers:** descendingset (2), numbertree (1), foreach (1), headset (1), tailset (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. List

#### List interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=0)** - [Instructor] The List interface and its implementations are the next group of collections that we'll explore.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=6)** Within this group, we'll find some of the most frequently used classes in Java, like an ArrayList and a LinkedList.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=13)** Lists are very helpful because they allow us to store an ordered group of the elements and provide a set of methods for working with those elements by their position in the structure using random access.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=25)** An elements position is specified by using a zero-based index, which is similar to how we work with an array.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=32)** On the type hierarchy of the list, there are four basic implementations.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=37)** Most Java developers consider the Vector and Stack types that came before collections to be obsolete.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=43)** So we'll only dive deeper into the ArrayList and the LinkedList implementations.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=49)** In this type hierarchy, you'll notice some crossover between the LinkedList and the hierarchy of the Queue interface.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=56)** That's because the LinkedList implements the Deque interface.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=60)** This relationship causes some additional methods to appear on the LinkedList that are not found on the ArrayList.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=67)** Of the two, the ArrayList implementation is the most frequently used.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=72)** As its name implies, it is internally backed by an array.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=76)** This array is created with an initial capacity upon instantiation of the list.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=83)** If we exceed the initial capacity of the internal array when adding a new element, the ArrayList automatically resizes by creating a new, larger array that holds the new and existing elements.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=96)** Operations that add or remove an element in the middle of the array list will automatically adjust the position of the remaining elements in its internal structure.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=106)** It does this by copying them to their new indexes.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=109)** This can have performance implications if we need to insert many elements into the middle of a large ArrayList.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=117)** However, reading or retrieving an item from the ArrayList is relatively fast since we can use random access to get an element by its position.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=126)** The LinkedList implementation uses a doubly linked list as its internal structure instead of an array.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=133)** It uses nodes that contain references that link objects together into a sequence that forms the LinkedList.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=142)** Each node in the list holds an element, a reference to the next element, and a reference to the previous element.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=150)** The ends of this internal structure will point to a null reference in memory.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=154)** This is how we can tell if we're at the end of the list.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=157)** So when an element is added to the LinkedList, the original references are broken.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=163)** Then new references are established to point to the new next and new previous elements.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=170)** The same re-linking process occurs when we remove an element from the LinkedList.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=175)** In some situations, it provides better performance for these operations.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=180)** This makes adding elements into a LinkedList relatively fast because we can just re-point the nodes references.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=188)** However, a LinkedList is not ideal for retrieving an element.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=192)** That's because we need to traverse all of the references that proceed the element that we want to access.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=199)** Unfortunately, there's not a silver bullet for choosing a list implementation.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=203)** It's going to depend on which methods you use the most and the number of elements that are in it.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=209)** Now, most developers will lean heavily towards the ArrayList and some developers will even question if we need the LinkedList.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=217)** So here's my advice.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=218)** Start with an ArrayList and use the List interface as your variable type.
>
> **[3:44](https://www.linkedin.com/learning/learning-java-collections/list-interface?u=76281980&t=224)** Then if you encounter performance issues, you can just change up the implementation later.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), implements (1), new, (1), type. (1)
> **CLI Commands:** find (1), node (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### List implementations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=0)** - [Instructor The List interface has many methods that deal with an element's position in the list.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=6)** To help with this, method signatures will often accept an index as an argument, or use the index as the return value.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=15)** Let's visualize a few of these methods using a list of strings.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=20)** We'll start out by inserting elements into a list.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=24)** Using the add method from the collection interface causes an object to be upended at the back of the list.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=31)** So after this first call, if we call the method again, the element is placed at the second position in the list.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=38)** You'll also notice that we can add duplicate elements into our list.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=43)** The List interface also has an overloaded form of the add method that allows us to add an element at a specific position.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=51)** To do this, it accepts an integer as its first argument, and the object to insert as its second argument.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=58)** The object is then placed into the list at the index specified by the integer.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=64)** When calling any method on a list that accepts an index, we'll receive an index out of bounds exception if the index is negative or if it exceeds the size of the list.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=77)** Another way to insert list elements is using the add all method.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=81)** It performs a bulk insert operation that inserts elements from a provided collection and a specified position in the list.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=90)** We can replace an element at a specific position using the list set method.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=95)** So let's replace that letter A in the fifth position, that's ruining our sequence.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=100)** The method replaces the element at the provided index with the object that is provided as the second argument.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=107)** Its return value is the element that was in the previous position.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=111)** In this case, that was the letter A.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=114)** Let's move on and look at retrieving elements from our list.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=117)** We can access an element at a specific position by passing an integer to the GET method.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=123)** This will cause the element at the index to be returned.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=128)** If we have an object and we need to know where it's positioned in the list, we can pass it to the index of method.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=135)** This method returns an integer that denotes the index of the object's first occurrence in the list.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=141)** If the object isn't in the list, the method returns negative one.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=146)** Let's look at one final method so we can see another way to remove list elements.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=152)** This remove method is an overloaded form of the remove method found on the collection interface, and it behaves a little bit differently.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=160)** It accepts an integer that identifies the position of the element that we want to remove.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=166)** Then, in addition to removing the element at the index, it also returns the element that we're removing.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=173)** It's a nice feature if you also need to retrieve the element that you're taking out of the list.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=178)** These methods are very useful when working with a list.
>
> **[3:02](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=182)** And don't forget, the list interface extends the collection interface.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/list-implementations?u=76281980&t=186)** So, you also have those methods to work with too.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (4), this, (2), case, (1), pass (1)
> **API Endpoints:** get  (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor (1)

#### ArrayList
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=0)** - [Instructor] To help us work with the methods on a list I've added a new guest class to our application.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=6)** This class is going to store information about the guests of the Landon hotel, so things like their first name and last name.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=13)** You'll also notice a boolean, loyalty program member on this class.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=19)** This boolean is used to indicate whether or not a guest is a member of the loyalty program, which can give them some perks.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=26)** So for example, in a minute, we're going to talk about a check-in list.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=31)** The list is used to keep track of guests as they arrive at the hotel.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=35)** So we know the order in which they should be checked in.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=38)** If a guest is a member of the loyalty program, they are automatically placed ahead of non loyalty program members on the check-in list, just one of the perks.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=50)** Now, you'll also notice I've added a list of rooms to this class.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=54)** This list is going to store the rooms that a guest prefers to stay in while at the hotel.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=61)** Now let's start working on our application.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=63)** To get started, I'm going to create a list of guests and I'll name it check-in list.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=68)** And then for the implementation of the list, I'm going to use an arry list.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=74)** Now, one of the things I'm going to do is pass an integer as an argument into the constructor, let's just say 100.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=83)** What this does is it declares the array list with a larger initial capacity.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=88)** By default, the array list will have an initial capacity of 10.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=93)** And if we're going to add a lot of items into the array list, it will quickly need to resize.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=99)** So we can provide this larger initial capacity in order to avoid that resizing, in the event, we know we're going to store a lot of elements.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=108)** So let's just imagine the Landon Hotel's going to check in a hundred guests today, we might want to go ahead and up that initial capacity.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=116)** Okay, So we got our check-in list established just in time because two guests have just arrived.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=123)** John has just walked into the lobby and he was followed closely by Maria.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=128)** So we need to place John in the first position in our check-in list, and then Maria, in the second.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=134)** Let's go ahead and we can do that using the add method.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=138)** So I'll just go ahead, pass in John, and then I'll do the same thing for Maria.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=145)** Okay, and then to see who is at what position in the list, I've built a small utility method that we're going to use to print that information to the console.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=155)** So there, we can see John at the first position a nd Maria at the second.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=160)** Now our next guest has just arrived and that's Sonia, she's a member of the loyalty program.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=166)** So she needs to be placed ahead of John and Maria in the list, let's go ahead and do that.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=173)** So inside of our class, we can use the overloaded add method on the list interface that accepts an index.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=183)** And since Maria needs to be at the first position, I'll just provide a zero as the index in our first argument.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=192)** And then we just need to pass in Sonia, as the second argument, that'll be the element added at that position, and then I'll go ahead and print the list so we can see what's going on.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=203)** Okay, so now Sonia is at the first position in the list.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=208)** Now having seen the benefits of the loyalty program, convinces Maria to join.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=214)** So let's go ahead and add her into the program.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=218)** I'm going to get Maria from the list, she's in the third position, so that's going to be index two and then I can set her loyalty program member status over to true.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=231)** Okay, now she's in the program.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=233)** Let's take a look at what we need to do.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=236)** So Maria's in the loyalty program, so she needs to be ahead of John in the list.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=242)** But right after Maria joined, Siri walked into the lobby and Siri's a loyalty program member.
>
> **[4:09](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=249)** So now both Maria and Siri need to be placed ahead of John in the list, in positions two and three respectively.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=258)** Let's go ahead and do that using a bulk insert operation.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=267)** Okay, so I'm going to use our check-in list and then I'll invoke the add all method and I'll use the overloaded form that accepts an index.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=277)** Now we're going to be placing this collection in the list at the second position, so that means we need to specify an index of one.
>
> **[4:48](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=288)** Now we need to pass in the collection that we would like placed at that position.
>
> **[4:55](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=295)** And in the collection, we're going to provide two elements.
>
> **[5:00](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=300)** The first was Maria because she was in the loyalty program prior to Siri's arrival.
>
> **[5:05](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=305)** And then the second will be Siri.
>
> **[5:08](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=308)** So what will happen is at index one or position two, we'll insert Maria.
>
> **[5:16](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=316)** And then after that, we'll insert Siri.
>
> **[5:19](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=319)** We can see what that looks like by just going ahead and printing our list to the console, okay.
>
> **[5:25](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=325)** So we knew Sonia would be in the first position.
>
> **[5:28](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=328)** Then we see Maria as expected followed by Siri and then John who actually arrived first, but is not a loyalty program member is now in the last position in list.
>
> **[5:40](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=340)** Well, kind of, you can see we have an issue here where we never removed Maria from the list, and she's no longer at that spot.
>
> **[5:48](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=348)** Let's go ahead and we can take care of that by removing the last element in the list.
>
> **[5:55](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=355)** So we can specify that index by getting the size of the check-in list and then just subtracting one from it.
>
> **[6:03](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=363)** Okay.
>
> **[6:05](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=365)** Now, if we go ahead, we can print our list again, and then we can see that last element, the duplicate of Maria was removed.
>
> **[6:13](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=373)** Now at this point, John is extremely confused.
>
> **[6:16](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=376)** He has no idea what position in the list he's in, so let's help him out and we'll tell him that.
>
> **[6:23](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=383)** So to do that, I can just use the check-in list and I'll invoke the index of operation on the list.
>
> **[6:31](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=391)** Here I pass in John, and this will return the index that John occupies within the list.
>
> **[6:40](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=400)** Let's go ahead, we can run this code.
>
> **[6:42](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=402)** And there you can see where indicating that John is at the third index in the list.
>
> **[6:49](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=409)** Now, hopefully John knows how programmers count if we tell him he's at the third index, maybe it's best we just tell me it's in the fourth position.
>
> **[6:57](https://www.linkedin.com/learning/learning-java-collections/arraylist?u=76281980&t=417)** So these examples show you how position based methods found on the list, make it easier to manage groups of objects in collections, where we can leverage random access.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (5), class. (2), default, (1), class, (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Working with Lists
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=0)** - Now it's time to put your new skills to the test in a programming challenge.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=10)** The Landon Hotel is building a guest service class to help manage guests room preferences and check-in.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=17)** In the class, you'll find three methods stubs and instructions for completing each method.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=23)** Unit tests have also been provided like the past challenges to help you validate your work.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=29)** The first method that you'll need to complete is filter by favorite room.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=33)** It asks you to build a new collection of guests from the provided list.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=39)** The new collection should contain guests who've placed the provided room in the first position of their preferred room list.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=47)** The next method check-in requires you to enter a guest into the check-in list similar to our last lesson.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=54)** However, you'll notice the list has now been added into the guest service class.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=60)** For the challenge, the check-in method must add the guests provided as an argument into the check-in list.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=67)** Guests are added into the list in the order they're passed to the method, with one little caveat, loyalty program members will be placed ahead of other guests that are not in the program.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=79)** The final method you'll need to complete is swap position.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=82)** Here you'll trade the places of two guests within the check-in list.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=86)** To do this, it must check that both guests are in the list prior to doing the swap.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=92)** Make sure you follow the numbering sequence and code this method last because it relies upon guests being checked in.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=98)** So that's the challenge.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=100)** Just be aware, the second method is a little bit more difficult, but I'm sure you're up for it.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=106)** So go ahead and pause the video and give it a shot when you're ready, resume the video to see my solution.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=113)** Hey, welcome back.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=114)** Are you ready to see my solution?
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=116)** In the first method we were provided with a list of guests and a room.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=121)** We need to find the guests in the list that had indicated the provided room was their first preference in their preferred room list.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=130)** Now I thought this was a great candidate for a stream and a filter operation.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=135)** So I took our lists of guests and I stream them into the filter method.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=140)** And from here, I used a Lambda expression to create a predicate.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=145)** In the predicate, I got the preferred room list for each guest and I invoked the index of method on it, passing in the room as an argument.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=156)** This gave me the position of the room within the preferred room list.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=160)** I knew that if the room was in the first position, it was their favorite.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=165)** So I could go ahead and invoke the collect method and use a collector in order to gather these guests into a list.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=175)** This satisfied the return type of the filter by favorite room method, and my work was complete.
>
> **[3:02](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=182)** The next method check-in was made a little bit more difficult by some edge cases involving the loyalty program.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=189)** The first thing that I did was I created an if statement that had an else block.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=195)** Inside of the conditional for the if statement, I checked to see if the guests was a loyalty program member.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=202)** Now, I also decided to do a check to make sure that the check-in list was not empty.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=209)** If either of these conditions were false and we dropped into the else block, the logic was fairly simple.
>
> **[3:35](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=215)** We could just go ahead and add the guest into the check-in list.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=219)** That's because we didn't need to place them in any special position because they weren't a loyalty program member or the check-in list was empty and we just put them in the first position.
>
> **[3:50](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=230)** Now, the logic got much more difficult if the guests were in the loyalty program.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=236)** To handle this, I created a for loop that iterated through all the guests in the check-in list.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=243)** Now, one thing I did with the for loop is I took the initialization statement and I moved it outside of the for loops declaration.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=253)** And this allowed me to access the counter outside of for loop, and you'll see why that was important in a minute.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=261)** Inside of the for loop, I created another if statement and here I used the check-in list to get each guest with the counter.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=272)** So I passed the counter in, which was the index, and that got me each guest out of list.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=277)** And then I just checked to see if they were a loyalty program member.
>
> **[4:42](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=282)** If they were, I just continued the loop because I knew their position in the list was secure and we weren't going to put somebody in front of them.
>
> **[4:51](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=291)** Now, if we iterated through this loop and a guest were not a loyalty program member, that would mean we wanted to put a loyalty program member at their position.
>
> **[5:02](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=302)** So at this point I broke the loop and I knew that I had captured the position at which I broke the loop in the counter.
>
> **[5:11](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=311)** So from there, what I could do was just place the guest into the check-in list at that position designated by the counter.
>
> **[5:23](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=323)** So here you can see I pass in the counter and then I pass in the loyalty program member and they will assume that spot within the list.
>
> **[5:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=332)** So that's how I solved the problem with the check-in method.
>
> **[5:35](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=335)** And from there, I moved on to work on the swap position method.
>
> **[5:45](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=345)** This method accepted two guests as arguments, and we needed to exchange their positions within the list.
>
> **[5:52](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=352)** So to do that, the first thing that I did was I got the position of the first guest within the check-in list using the index of method.
>
> **[6:03](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=363)** And then I did the same for the second guest.
>
> **[6:06](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=366)** So I just created another integer position two, and then passed in guests two, into the index of method.
>
> **[6:14](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=374)** Now I wanted to make sure that both guests were in the check-in list.
>
> **[6:18](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=378)** So to do that, I just created an if statement and inside of the if statement, I checked that the position was not equal to negative one.
>
> **[6:29](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=389)** And then I just did that for the second position as well.
>
> **[6:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=392)** So inside of the body of this if statement, we could successfully perform the swap because we knew that both guests were in the check-in list, Let's go ahead and we'll work on the swap.
>
> **[6:44](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=404)** We can do that using the set method.
>
> **[6:47](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=407)** So all pass in position one as my index, and then I'll place guests to in position one.
>
> **[6:55](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=415)** And then from there, I'll just do the inverse.
>
> **[6:58](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=418)** I'll pass in position two as the index, and then guess one will be placed in position two.
>
> **[7:05](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=425)** And that successfully completes our swap.
>
> **[7:08](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=428)** All right, let's go ahead, we'll run our tests to make sure everything checks out.
>
> **[7:13](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=433)** So I'll just right click, go to run as J unit test and there we can see our test pass.
>
> **[7:19](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-lists?u=76281980&t=439)** Now you might've gone about the solution for this challenge in a different way, and that's okay because when you're working with collections, there's many ways to solve a problem.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), this, (2), let (2), class, (1), class. (1)
> **CLI Commands:** make (4), find (2)
> **Prerequisites:** you'll need (2), initialization (1)
> **Warnings:** caveat (1), be aware (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - now (1)


### 6. Queue and Deque

#### Queue interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=0)** - [Instructor] Next, we'll explore the interfaces and implementations related to queues within the Java collections framework.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=7)** If you've ever stood in a line you're familiar with a queue.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=11)** You enter at the back of the line, which is also known as its tail.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=15)** Then you wait until you're at the head of the line, or we might say the front of the line before it's your turn.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=21)** In Java, a queue is a collection that is used to hold elements for processing, sort of like the line we just discussed.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=28)** Queues typically work the same way.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=30)** The first item in the queue is the first to be processed, just like the first person in a line is the first to get their turn.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=37)** We call this first-in, first-out, or FIFO order.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=40)** Most implementations of a queue are FIFO, but there are some that use a priority ranking or another ordering strategy to arrange their elements for processing.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=51)** To work with the queue, six methods are included on its interface in addition to those that are inherited by extending the collection interface.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=60)** Using a visual, we can see how these methods are used to work with the queue.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=64)** Methods like add or offer are used to add items to the tail of the queue.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=70)** Operations like pull and remove are performed at the head of the queue.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=74)** These methods are used to retrieve the next element in the queue for processing and will remove it from the collection.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=81)** If we want to examine the element at the head of the queue without removing it, we can use the element or peek methods to get a reference to the element.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=89)** Now, if we actually wanted to remove the element at the head, we would have to use poll or remove, which we just saw.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=96)** You might be wondering why there are two methods for each of these operations on the queue.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=101)** The difference between them is how they deal with a full or an empty queue.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=106)** There are queues that have a maximum capacity, which are known as a bounded or blocking queue.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=112)** If we attempt to insert an element into a bounded queue which is full, the add method will throw an exception, while the offer method will return false.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=122)** A similar situation occurs when the queue is empty.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=126)** If we try to remove or examine the head element in an empty queue, the methods remove an element will throw an exception, while poll and peek will return null.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=136)** If we take a look at the type hierarchy for a queue, you'll notice that two of its implementations actually implement the deque interface that extends queue.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=146)** Of these implementations, ArrayDeque is the most commonly used queue and deck implementation.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=152)** The LinkedList is not used often, and the PriorityQueue uses a comparitor or elements implementing the comparable interface to determine their position within the queue.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=162)** So it's one of those queues we mentioned that don't use FIFO order.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=167)** I should point out that I've only listed types found in the java.util package.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=172)** There's another group of specialized queue interfaces and types found within the java.util.concurrent package for handling multithreaded scenarios.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=181)** We'll mainly use the ArrayDeque implementation for working with a deque and a queue.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/queue-interface?u=76281980&t=186)** So let's first do some hands-on examples, working with it as a queue, then we'll take a closer look at the deque interfaces later in the chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), throw (2), extends (1), let (1)
> **Definitions:** known as (2), is a  (1), we call this (1)
> **Env Vars:** fifo (3)
> **Cross-References:** we mentioned (1), later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Queue implementations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=0)** - [Instructor] Let's walk through a few examples to see the methods on the queue in action.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=5)** To do this, we're going to revisit the check-in list scenario that we used when working with a list.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=12)** You'll see that this problem is much better suited for a solution that uses a queue.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=17)** So to start out, I'm going to create a queue that holds guests and I'll name it the checkinQueue.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=24)** For the queue implementation, I'm going to use an array deque.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=29)** Okay, so now we have our queue.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=32)** The first thing that I'm going to do on this queue might seem a little bit odd, but I'm going to attempt to retrieve the element at the head of our empty queue using the remove method.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=45)** And then from there, I'm just going to print that element or guest to the console.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=49)** Now watch the behavior here.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=52)** You'll notice that the method throws an exception because I'm trying to remove the element at the head of an empty queue.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=60)** Now if I were to switch over this method from remove to poll, we'll get different behavior and you'll notice that it returns null.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=69)** So that's the difference between some of those behaviors we discussed for the method pairs that insert, remove, and examine elements in the queue.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=77)** Some throw exceptions while others return a special value like a null or a Boolean.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=84)** Now let's add some guests into the queue so we can work with it.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=88)** Now you'll notice we could use the add method and this is one of the methods that will throw an exception if we attempt to add too many elements to a bounded queue.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=99)** And we can see that within the Java docs.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=101)** it's always a good idea to take a peek at the behavior of the method within the IDE so you get the exact one you'd like.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=108)** Now I don't want to throw an exception, so instead I'm going to use offer in order to add John into the queue.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=116)** Okay, so now we have John in the queue.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=119)** Let's go ahead and we'll add Bob as well.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=123)** With both guests in the queue, I'm then going to use a small utility method that I've added to the class that prints out the queue's contents and gives us some information about what guest is in each position in the queue.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=136)** So let's go ahead.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=137)** We'll invoke that right after adding our guests into the queue.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=143)** Then I'm going to go ahead and call that method again after we pull the queue and remove John.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=149)** Okay, so let's go ahead and we'll execute this code, and you'll notice that both guests were added into the queue.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=156)** First, John was added at the head of the queue and then Bob was inserted after him.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=162)** Now when we polled the queue and removed the element at the head, it removed John and then you'll notice that Bob advanced to the head of the queue.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=172)** So that's the behavior of first-in, first-out order.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=176)** We inserted John first and he was the first to removed.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=181)** Okay, let's now add two other guests into our queue.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=186)** First, I'm going to add Sonia followed by Siri.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=190)** Then I'm going to copy this block of code and modify it to use the peek method.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=195)** So I'll switch over to guest1 and then instead of polling I'm just going to peek, and then we'll print out guest1.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=202)** Now let's see what happens here.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=204)** So you'll notice that the four guests were added into the queue and then we polled one element from the queue and that got us John who was at the head.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=214)** But then when we peeked we got the element at the head of the queue, but that element remained in the queue.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=222)** And that's the difference between poll and peek.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=225)** Poll is going to retrieve and remove the element at the head of the queue while peek is just going to retrieve it for us without removing it.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=236)** Now throughout this example, I've been using all of the queue methods that do not throw exceptions.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=242)** We could easily switch over to them.
>
> **[4:04](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=244)** So I'm just going to replace offer with add in my code and then I can close that dialogue, and then we'll switch over from poll to remove and then the equivalent method for peek is element.
>
> **[4:19](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=259)** So these methods would all throw exceptions if we were dealing with a full or an empty queue.
>
> **[4:25](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=265)** Now that's not the case, so we don't see that when we execute them.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=269)** But aside from the exceptions and the return types, the behaviors are all the same as their counterparts.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=277)** Now I want to show you one other queue implementation.
>
> **[4:41](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=281)** You'll recall that I mentioned not all queues are first-in, first-out order.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=286)** That's the case when we use the priority queue implementation.
>
> **[4:50](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=290)** This implementation allows us to provide a comparitor that determines the order that elements are stored in the queue.
>
> **[4:58](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=298)** So I'm going to switch over to the priority queue and then we need to build a comparitor for it.
>
> **[5:05](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=305)** So to do that, I'll declare a comparitor and it will have a generic type of guest, and the competitor's going to help us with our loyalty program.
>
> **[5:14](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=314)** So I'm just going to call it programComp.
>
> **[5:17](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=317)** And then in order to create the comparitor, I can use the static comparing method that is found on the comparitor type.
>
> **[5:26](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=326)** From here I can pass in a method reference to the isLoyaltyProgramMember method and then I'm going to reverse the comparitor so that it sorts our guests in descending order.
>
> **[5:39](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=339)** This is going to place loyalty program members ahead of non-loyalty program members.
>
> **[5:46](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=346)** Okay, now once we have the comparitor, we just need to pass it into the constructor of the priority queue.
>
> **[5:54](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=354)** Now watch what happens when I execute the code.
>
> **[5:57](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=357)** You'll notice that our two members of the loyalty program, Sonia and Siri, advance in front of John and Bob in the queue.
>
> **[6:06](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=366)** That's because John and Bob were not part of the program.
>
> **[6:09](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=369)** Using a priority queue and a comparitor is a much simpler approach for achieving the logic that we need to handle loyalty program members within our check-in list.
>
> **[6:20](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=380)** I would definitely favor the priority queue over the list solution that we built.
>
> **[6:24](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=384)** So that wraps up our look at the queue interface and a few of its implementations.
>
> **[6:30](https://www.linkedin.com/learning/learning-java-collections/queue-implementations?u=76281980&t=390)** The key to working with the queue is understanding FIFO order and the subtle differences in the behavior of its methods.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (5), throw (5), pass (2), this, (1)
> **Code Identifiers:** checkinqueue (1), programcomp (1), isloyaltyprogrammember (1)
> **Env Vars:** ide (1), fifo (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Deque interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=0)** - [Instructor] The next collection interface will explore deque extends the queue interface and include some other ways that we can work with the linear collection of elements.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=9)** The deque interface was introduced in Java six, adding a double ended queue to the collections framework.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=16)** A deque allows elements to be added or removed from both ends of its linear structure.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=22)** We'll refer to these as the front and the back.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=25)** However, you might also hear them referred to as the front and rear or the head and tail.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=30)** Operations on both ends of the deque are performed by using a set of methods with names that are derived from the methods on the queue interface.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=38)** These methods make the deque very versatile.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=41)** In the last lesson, we used an array deque as a queue with a first in, first out approach, but it can also handle elements using a last in first out approach that allows it to be used as a stack.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=54)** In fact, Java has a legacy stack implementation in the Java.util package, but the Java docs recommend using an array deque instead.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=63)** Let's move on and take a look at some of the interface methods on the deque.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=67)** To add elements to the front of a deque, the methods add an offer from the queue interface are suffix with the word first.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=76)** The suffix first is used to indicate that the operations are performed on the front of the structure.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=82)** If we attempt to add an element to a bounded deque that is full, these methods will behave the same way as their counterparts found on the queue.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=91)** So add first will throw an exception, and offer first will return false.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=96)** This naming pattern and the exception behavior is applied across many methods on the deque.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=102)** For example, inserting elements from the back of the deque is achieved using the add last and offer last methods.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=110)** So here the suffix last is applied to the method names from the queue interface to specify that operations are performed on the back of the deque.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=120)** Removing elements from the front of the deque is performed with methods named remove first and pull first.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=126)** So again, you see the pattern.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=129)** We take the queue method name and add the suffix first or last depending upon what end of the deque we're working on.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=136)** If you've picked up the pattern, you might've been able to guess that the names of the methods use to remove elements from the back of the deque are removed last and pull last.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=146)** If we want to examine the front of the deque, we can use get first or peek first.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=151)** Here, you'll notice the interface uses the verb get instead of element, which is what we find on the queue.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=157)** Finally, if you want to examine the element in the back of the deque, we can use the get last or peek last methods.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=165)** When you place these methods together, you can see the versatility provided by the deque, but that's not where it ends because the deque also has methods that allow it to function as a stack.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=176)** A stack is another type of data structure that uses last in first out order or lifeboat.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=183)** It works similar to a stack of dinner plates.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=186)** We stack plates one on top of the other when storing them.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=189)** Then when we need to retrieve a plate, the last plate placed on the stack is the first one removed from it.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=196)** That's lifeboat order and it's exactly how a stack works.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=200)** To work with the deque as a stack, we use the methods push, pop, and peek.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=205)** If we envision the stack as a vertical structure with a top and a bottom, these three operations are performed at its top.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=214)** Using these operations, we can push an element into the stack for storage, peek at the top element or pop an element to remove it from the top.
>
> **[3:44](https://www.linkedin.com/learning/learning-java-collections/deque-interface?u=76281980&t=224)** Now that we've seen the structure of a deque and learned its operations, let's switch over to our next lesson and see some code examples.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), let (2), extends (1), throw (1), finally, (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Using an ArrayDeque as a stack
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=0)** - [Instructor] In Java, the ArrayDeck is the recommended implementation for when we need a stack, which is one of the most frequent ways that we'll work with the deck.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=9)** Let's work through a few examples to see how a deck works as a stack.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=15)** For these examples, let's imagine the Landon Hotel has an older voicemail system that uses a last in first out approach to store messages.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=24)** So messages will be stored in reverse of the order that they're received.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=28)** And we'll just say there's no random access.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=31)** This is similar to how your smartphone stores voicemails.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=35)** More recent messages appear at the top and older messages at the bottom, except with a smartphone, you can play them in any order.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=43)** So let's go ahead and we'll build our stack to work with these messages.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=48)** To do that, I'm going to create a new deck that has a generic type of string.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=53)** I'll name it messageStack, and I'll use an ArrayDeck implementation.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=60)** Okay, so now we have our ArrayDeck or our stack.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=64)** Let's go ahead and we can push messages onto the top of the stack.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=69)** And I'll keep it simple. I'll just use Message 1.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=72)** Then I'm going to push three more messages onto the top of the stack.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=77)** After that, I'm going to use our print method to print out the contents of the stack so we can see what's going on.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=84)** So I'll just call print and pass in our message stack.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=88)** And then I'm going to invoke this method after each time we push an element onto the top of the stack.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=97)** Okay, let's go ahead, we'll execute this code and take a look at how the stack works.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=102)** You'll notice that as we push each element onto the top of the stack, it's added at the first position.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=111)** When we add another element onto the stack, it pushes down all the elements that were added before it and it takes the first position at the top of the stack.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=122)** Okay, let's move on to our next example and I'm going to clean up this code some.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=127)** So I'm going to pull each of the calls that push an element on the top of the stack together and then I'm going to remove two of our print statements, then I'm going to pop an element off of the top of the stack.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=143)** So I'll go ahead invoke the pop method on the deck and then I'll pop another element as well and then I'm just going to take a peek at the next element.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=154)** Okay, let's go ahead and execute this to see what happened.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=158)** You'll notice that we push all of our elements into the stack.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=162)** And then when we start to pop, the first element that we pop from the top of the stack is Message 4 and that's because it was the last message added.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=172)** When we invoke pop again, Message 3 is at the top of our stack and that's what we retrieve.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=179)** Now, I just peeked at Message 2 so you'll notice that when we print the contents of our stack, Message 2 remains at its top.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=190)** So here you can see the last in first out order in action.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=194)** The last message that we pushed onto the top of our stack is the first one that's removed and then we proceed in that order.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=203)** Okay, let's walk through one final example to close out the lesson.
>
> **[3:27](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=207)** I'm going to push an element on the top of the stack after we've popped the second element.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=214)** So I'll name this Message 5 and then I'm also going to print the contents of the stack after we pop the second element.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=222)** Okay, let's see how this behaves.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=225)** So once again, we push all four elements onto the stack.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=229)** Then we pop two of the elements.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=233)** And now you'll notice we're only left with Message 2 and Message 1 on the stack and Message 2 is at the top.
>
> **[4:01](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=241)** Now, when we push Message 5 onto the stack, you'll notice it takes the first position at the top.
>
> **[4:09](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=249)** And then when we make this call to peek, it retrieves Message 5 from the top of the stack.
>
> **[4:16](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=256)** So that's a look at one way that you'll most frequently work with the ArrayDeck, which is using it as a stack.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=263)** There are some other situations where you might need to work with both ends of a double-ended queue, like maybe adding some undo functionality to an application.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack?u=76281980&t=272)** For most of us, those situations will be rare, so I'll leave it to you to test out some of the other methods on the deck interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (1), interface (1)
> **Analogies:** imagine (1), similar to (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** messagestack (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 7. Map

#### Map interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=0)** - [Instructor] Maps are the last group of collection interfaces and implementations that we'll explore.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=5)** Early in the course, we learned that a map works by using keys and values.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=11)** A map is sort of like a dictionary.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=13)** The word represents the key, and the definition is the value.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=17)** If we want to find the definition of a word in a dictionary, we start our search by looking for the word, because that's the part we know.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=26)** We use the word to find the part that we need to know, which is the definition.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=31)** It's a similar concept in Java.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=33)** A map stores entries with an association between a key and a value.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=38)** Just like a dictionary doesn't contain duplicate words, the same is true for a map, and its keys are unique.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=45)** These characteristics of a map make it fast and efficient at finding values using the key.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=51)** In the framework, the map interface is unique because it does not extend the collection interface.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=56)** So we won't find some of the methods that we learned earlier in the course on the map interface.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=62)** If we inspect the interface, we'll see it contains two generic type parameters, represented as K and V.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=69)** The first is the type of the key, which can be any type of object.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=73)** The key is used when looking up and storing values in the map.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=77)** For the map to work correctly, the key's type must implement the hash code and equals methods.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=83)** These methods are used by the map to distinguish one key from the other.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=87)** The second generic type parameter denotes the type of the value stored within the map that is associated with the key.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=94)** When working with a map, there are three core methods that are essential to know.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=99)** The first is the put method.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=101)** It's used to create or update an entry in the map.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=104)** It accepts a key and a value as its arguments.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=108)** If the map does not have an entry for the provided key, the put method will create it, and then null will be returned from the method.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=116)** But what happens if the key is already associated with a value?
>
> **[2:00](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=120)** In that case, the put method overwrites the pre-existing value with the value provided as an argument to the method.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=128)** Then the previous value associated with the key is returned by the method.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=134)** Once you have entries stored in the map, they can be retrieved using the get method.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=139)** This method accepts a key as an argument, which is used to search the map.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=144)** If it finds an entry associated with the key, it returns the entry's value.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=149)** If an entry is not found, the method returns null.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=153)** To remove an entry, you can call the remove method and pass it a key of the entry you'd like to remove.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=159)** If an associated entry is found in the map, it will be removed and then returned by the method.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=165)** So those are some of the key operations you'll need to know on the maps interface.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-collections/map-interface?u=76281980&t=171)** Now let's move on to our next lesson to see another way of working with the map.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), case, (1), pass (1), let (1)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** earlier in (1)
> **Analogies:** just like (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Collection views
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=0)** - [Instructor] Collection Views are another feature provided by the map interface that you'll commonly work with.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=6)** They are used when you want to obtain parts of the map, like its entries, keys, or values as a collection.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=12)** It's common to use a collection view when you need to iterate through a map's entries, keys, or values.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=18)** So you can see in the code, we are getting the keys as a set using the keySet method.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=24)** Currently, it just returns a set holding the key A.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=27)** There is a small caveat to be aware of when working with the collection view.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=32)** The collection view is backed by the map.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=34)** So any changes to the map will be reflected in the collection view.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=39)** You'll notice I've added a new entry to the map, and now the collection view contains A and B.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=45)** So if your map entries change, you'll see the changes reflected in the collection view.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=51)** If you're not aware of these mechanics, it can lead to some painful runtime issues.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=55)** These map interface methods provide collection views for a map's entries, keys, and values.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=61)** I'll draw your attention to the entrySet, which is frequently used to loop through a map's contents.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=68)** The entrySet returns a set containing objects of type Entry.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=72)** These provide access to the key and value of each association in the map.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=77)** Entry is a generic type.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=79)** It mimics the typing of the map backing the collection.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=83)** So if a map uses a string for its key and stores integer values, you can expect those types to be returned from the getKey and getValue methods on the entry.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=94)** There's quite a bit to learn about working with the map.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=97)** But they're heavily used in Java.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/collection-views?u=76281980&t=99)** So we'll go even deeper as we start to explore map implementations.

> [!info]- Semantic Content
>
> **Code Identifiers:** entryset (2), keyset (1), getkey (1), getvalue (1)
> **Code Keywords:** interface (2), type. (1)
> **Definitions:** is a  (2)
> **Warnings:** caveat (1), be aware (1)
> **Speakers:** - [instructor] (1)

#### Map implementations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=0)** - [Instructor] Let's explore the map implementations, so you'll know which one to choose for your situation.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=6)** In this type hierarchy, we'll find the three most commonly used map implementations.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=11)** The TreeMap is a map implementation that stores its entries in sorted order within a tree structure.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=18)** It implements the NavigableMap interface, which extends from SortedMap.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=23)** Entries in the map are sorted in ascending order based upon their key.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=28)** This allows for rapid retrieval using methods and behaviors that are similar to what we saw in the tree set.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=34)** We won't spend much time discussing the TreeMap because most of your code will deal with the HashMap implementation.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=41)** A HashMap does not provide any guarantees about the order of its objects, but it has a sub-class LinkedHash set that can access elements in both insertion order or the order of their last access.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=53)** Let's talk a little bit more about how hashing works because it's a key concept for storing objects in a map.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=60)** Hashing is a technique that turns an object into a numeric value known as its hash value.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=67)** To hash an object we run it through a hashing function.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=71)** So, we might take a string like LinkedIn and run it through a hash function to get its hash value.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=77)** In Java, the hashCode method is used to produce an object's hash value.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=81)** Here, I've included the hashCode logic that is used to produce the hash value for a UTF string.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=88)** Now, it's not important to understand the logic other than realizing it's computing a hash value based on the string's value.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=96)** Most basic types in Java like the string or the wrapper classes for primitives implement the hashCode method.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=103)** However, if you're using your own custom object type, you'll need to provide an implementation of this method.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=110)** When we explored equality, you saw how to generate a hashCode and equals method using the eclipse IDE.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=117)** For most situations, that implementation will be sufficient.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=121)** If you need to provide your own implementation for hashCode, a few rules apply.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=126)** First, the hashCode method must consistently produce the same integer, if it is invoked multiple times.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=133)** The hash value can change, if values used in the object's equals method change.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=139)** But, in general, you want it to be pretty stable.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=142)** The second rule states that if two objects are equal, they must produce the same hash value.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=147)** And the final rule states that two objects that are not equal are permitted to have the same hash value, this is important.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=155)** So, you'll notice the two strings in our examples produce the same hash value, this is known as a collision.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=162)** It may seem alarming, however, there are strategies for handling a collision.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=167)** If you violate these rules, when implementing hashCode and equals the HashMap may have some unexpected behaviors when handling your objects.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-collections/map-implementations?u=76281980&t=176)** You'll understand why when we dive deeper into the inner workings of a HashMap in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), implements (1), interface (1), extends (1)
> **Code Identifiers:** hashcode (7)
> **Definitions:** is a  (2), known as (2)
> **Env Vars:** utf (1), ide (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### How a HashMap works
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=0)** - [Instructor] Let's talk in general about how a HashMap uses the hashCode and equals methods when storing a key value pair.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=7)** Internally, a HashMap contains an array with a default size of 16 that is used to store nodes.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=14)** In this diagram, I've reduced this down to three indexes to make it easier to view.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=20)** When the put method accepts a key value pair, the HashMap calls the hashCode method on the key to get its hash value.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=27)** It then applies logic that hashes the value a second time to build a new hash.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=32)** This is used to compute the index where the values will be stored in the array.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=37)** In this index, a new node is created that contains the key, value and derived hash value for the objects placed into the map.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=46)** This process continues each time the put method is called with a new key value pair.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=52)** If we have a collision of hash values and objects must be placed in the same index that's okay.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=59)** The new node is linked together with the existing nodes to build a link list within the array index.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=65)** So, that is the general logic of how storage works internally within a HashMap.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=70)** And, admittedly, we skipped a few minor points.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=73)** Now, let's talk about retrieving a value from a HashMap.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=77)** When a key is passed to the get method on a HashMap, the map first performs the hashing and index logic to determine the appropriate array index to search for the key's value.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=89)** So, here, we see the provided key computes to an index of 1, that index currently holds a link list with two nodes.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=97)** If there were only a single node stored in the index, the search logic could easily return the value from that single node.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=105)** But since there are multiple nodes stored within the index, the HashMap uses the equals method to compare the provided key with the key stored in the node.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=116)** In this case, the first node didn't match, so the logic traverses the reference to the next node in the link list.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=123)** Then, it performs the equals comparison again.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=126)** This time it evaluates to true causing the value in the node to be returned.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=131)** So basically the equals method resolves the hashCode collision, and you start to see why implementing the hashCode and equals methods is necessary for working with a map.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works?u=76281980&t=141)** The internal workings of a HashMap is sometimes assessed in technical interviews so now, you'll be prepared for the question, if it arises, and you'll have a better grasp on how hashing structures function.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), make (1)
> **Code Keywords:** let (2), case, (1), match, (1), function (1)
> **Code Identifiers:** hashcode (4)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Map methods
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=0)** - [Instructor] Let's work through a few code examples to get more familiar with the methods on a map.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=5)** To help us with that, we'll build a HashMap that tracks which room the guests at the London Hotel are staying in.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=12)** So we'll start out by creating a map that uses a room as its key and stores guests as its values.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=19)** I'm going to name this map assignments and then I'll use a HashMap implementation for my map.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=25)** Okay, so now we have the map.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=27)** Let's go ahead and add the guests into their rooms.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=30)** So first I'm going to place Maria in Oxford by passing in Oxford as the key and then Maria as the value.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=39)** Okay, then we can put John in his room.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=42)** It's going to be Piccadilly, so we'll go ahead and use the put method to associate John with Piccadilly.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=48)** Now at this point, let's retrieve some of the values in the map and print them to the console.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=54)** So I'll use the print stream and then I'll just say we're getting the guest from Piccadilly.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=61)** And here we can use the map to retrieve the guest in that room by passing in the key to the get method.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=69)** So we'll pass in Piccadilly and that should get us John.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=73)** Now let's do this again for Oxford, but I'm going to do this a little bit differently.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=79)** Instead of using the exact object instance as my key that I'm passing into the get method, I'm going to create a new logically-equivalent instance of Oxford.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=91)** So I'll use the new operator in the constructor, pass in the name Oxford.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=95)** It's a suite that holds five people and costs $225 a night.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=101)** Okay, so we're retrieving two values from our map using rooms as the key.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=107)** In one instance we're using the exact same object instance and in another we're using a logically-equivalent object instance.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=115)** Let's go ahead and execute this and you'll notice that our console output indicates that Maria is staying in Oxford and John is staying in Piccadilly, so that's correct.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=127)** Now let's take a look at what happens when you don't override hashcode and equals properly.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=134)** So in this example, it's the exact same code except for one thing.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=139)** I'm using a different object as the key of the map and this object does not override the hashcode and equals methods properly.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=148)** Watch what happens when I execute this code.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=151)** You'll notice that we're unable to retrieve the value in the map associated with Oxford and that's because we've broken how the map works by not overriding hashcode and equals.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=165)** Okay, let's finish up with one more example.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=168)** Imagine that Maria and John would like to switch rooms.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=172)** Let's see how we can do that.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=173)** So I'm going to create a new variable guest and then I'm going to use our map and the put method.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=181)** So first I'm going to put Maria into John's room, Piccadilly.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=187)** Now I'm not just going to pass Maria in as the value that we would like to associate with Piccadilly.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=193)** What I'm going to do is use the remove method and then I'll pass in Maria's room as the key which is Oxford.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=203)** Okay, let's talk a little bit about what this does.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=206)** First, we're going to remove Maria from her room and you'll recall that the remove method will return the value with the associated key we pass into the method.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=218)** So this is going to place Maria into Piccadilly.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=223)** Now you'll also recall that the put method will return the value previously stored within the map entry, so that's going to assign John into our guest variable.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=236)** Now let's go ahead and we can place John into Maria's room.
>
> **[4:00](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=240)** Now to do that, I'm going to use the putIfAbsent method just to make sure that Maria's out of her room.
>
> **[4:07](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=247)** You'll recall that this method will not overwrite the entry in the map if it already exists.
>
> **[4:14](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=254)** Okay, now to build the association, we pass in Maria's room which was Oxford.
>
> **[4:20](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=260)** And then as our second argument, we pass in John who's assigned to the guest variable.
>
> **[4:26](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=266)** All right, let me go ahead.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=267)** We'll save our code and we'll execute it.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=269)** And there you can see that John is now staying in Oxford and Maria's staying in Piccadilly.
>
> **[4:35](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=275)** We successfully completed our switch.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-collections/map-methods?u=76281980&t=277)** So that's a look at several of the methods that insert, update, remove, and retrieve objects from a map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (7), override (2), switch (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** putifabsent (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Iterating Maps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=0)** - [Instructor] Traversing each entry in a map can be challenging when first learning about collections.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=5)** So let me show you how it works.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=7)** To do that, I'm going to start out by invoking the entrySet method on our map, and I'm actually going to assign this to a variable so you can see the typing of the object returned.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=19)** Now, as its name implies, the entrySet is a set that contains entries.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=25)** Now, the entry itself is a generic type.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=29)** So first, we need to specify the type of the key used for our map and then the type of the values used for our map.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=37)** All right, so now we have the type of our variable and I'm just going to name it CV for collection view.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=44)** Now, let's talk about this for one minute.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=47)** You'll notice that the returned object is a set, so that means it extends the collection interface and it also extends the iterable interface.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=58)** So we can use this set within the enhanced for-each loop and that's typically how the entrySet is worked with.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=66)** Let's check that out.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=68)** So I'm going to go ahead and declare a for loop, and then I'm actually going to copy the type information for our entry because that's what we're going to be iterating through is the entries within that set.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=83)** So I'll go ahead and place that on the left side of the colon.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=86)** And then on the right side, we need to invoke the entrySet method again in order to get our entrySet that we're going to iterate through.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=96)** And then also we need to provide a name for the object that's going to be assigned each entry.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=103)** Okay, so now inside the body of our loop, we can work with the entry.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=109)** So let's go ahead and declare a variable of type room and then I'm going to get the key from the entry.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=116)** Then we can get the guest as well using the getValue method.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=121)** So now we have the room and the guest from the entry stored into variables.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=127)** Let's go ahead and we can print these out to the console just to see them.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=131)** So I'm going to go ahead and specify a pattern to the format method that prints the two strings and a new line character.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=139)** Then I just need to get the name of the room and pass it in as the first argument to the pattern and then I'll get the guest's first name.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=147)** Okay, so we can go ahead and execute this code and you'll see that we iterate through the entries in our map.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=155)** Before we wrap up, there's one more point I'd like to make.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=158)** The entrySet is a collection.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=161)** So if you would like, you could also use a stream to iterate through the entries in the entrySet.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/iterating-maps?u=76281980&t=167)** So that's where we'll end our discussion and exploration of the map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), extends (2), interface (2), type. (1), pass (1)
> **Code Identifiers:** entryset (7), getvalue (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Working with Maps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=0)** - [Instructor] Okay, I hope you're up for the final challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=8)** In this challenge, the Landon Hotel has created another class named BookingService that manages the booking of guests into rooms in the hotel.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=18)** They've started work on the class by adding a hash map named bookings.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=22)** This map will store each room and its associated guests, but they need your help in completing a few methods.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=30)** The first is the book method.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=32)** It's provided with a room and a guest that would like to stay in the room.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=37)** The method will place the guest in the room only if another guest is not staying within it.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=42)** The return value of the method is a Boolean that indicates if placing the guest in the room was successful.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=49)** The next method totalRevenue is used to obtain the current amount of revenue using a calculation that sums the rates of all booked rooms.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=58)** You want to make sure that you complete these methods in the order they're specified.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=62)** And like other challenges, unit tests have been provided to validate your work once you've finished.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=69)** So go ahead, pause the video and work on your solution.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=73)** When you're ready, you can resume the video and I'll walk you through mine.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=77)** Welcome back. Did you enjoy the challenge?
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=80)** I'm going to dive right in to my solution.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=83)** For the first method book, we needed to create an association for the provided key and the provided guest within our map, but only if the room was not associated with a guest in the map already.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=96)** So this was a great spot to use the map's putIfAbsent method.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=101)** So on our bookings map, I went ahead and invoked it, passing in the room and the guest as arguments.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=109)** This method will not create an association in the map if one already exists for the key that we provide.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=116)** So if our room is already associated with a guest in the map, it won't create that association.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=122)** In that case, it's just going to return the current value associated with the key.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=128)** Now, if it does create a new association, it returns null.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=133)** So I can just evaluate the return value of the method against null, which is going to produce a Boolean that I can return from the method to indicate whether or not we booked a guest in a room.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=147)** So that completed my work for the book method.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=150)** And I moved on to work on the totalRevenue method.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=154)** This method required us to get the rate of each room in the booking map and total them in order to determine how much revenue the hotel is making.
>
> **[2:44](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=164)** So to do this, I invoked the keySet method on the map to get a collection view that contained all of the keys within the map.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=173)** So now I have a collection of the map's keys.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=177)** And you'll recall that the map's key type is room, so it's a collection of rooms.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=184)** I took that collection and I streamed it.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=187)** On the stream, I was able to invoke the mapToDouble method.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=190)** And then here. I could just pass in a method reference to the room's getRate method.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=197)** This would produce a double stream and on that double stream, I could invoke the sum method to perform a calculation that totaled all of the rooms' rates and that got me the total revenue.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=209)** Okay, let's go ahead and we'll test out that solution.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=212)** So in the unit test, I'm just going to right-click go to run as and JUnit test.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=218)** Excellent. It passed.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/challenge-working-with-maps?u=76281980&t=219)** So I hope you enjoyed this challenge working with the map and got to better know some of its methods.

> [!info]- Semantic Content
>
> **Code Identifiers:** totalrevenue (2), putifabsent (1), keyset (1), maptodouble (1), getrate (1)
> **Code Keywords:** case, (1), this, (1), pass (1), let (1)
> **UI Navigation:** right-click (1), go to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Collections Utilities

#### Ordering elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=0)** - [Instructor] When working with collections, the order of elements comes into play quite often, but order isn't always as straightforward as you might think.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=9)** For example, if I ask you to order these coins, you would likely place them in order by their monetary value as we see in the picture.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=17)** Things like currency, letters and numbers have a default way they're compared like monetary value, alphabetical order or numeric value.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=26)** When we perform these default comparisons on a group of objects, it places them into an order known as their natural order.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=35)** However, there's cases where the natural order isn't what's required.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=39)** A coin collector might order the coins by their size for storage, or maybe by the year that they were minted.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=46)** When writing code that must order objects, these same types of considerations appear.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=52)** The concept of natural order also applies to most common Java data types.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=58)** Dates are naturally ordered chronologically, numbers like int and long use their numeric value and strings are ordered alphabetically.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=68)** So you might wonder how the natural order of these data types is determined, or how would we specify the natural order for a custom class that we built.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=78)** In Java, the comparable interface is used to specify the natural order of a data type.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=84)** Classes that implement the interface define a compare to method that accepts another object as an argument.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=92)** This argument is evaluated against the current instance.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=96)** The comparison logic built into the type can be used by other code, like a collection or a sort method to determine the natural order for a group of objects with that type.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=107)** On the interface, you'll notice the compare to method returns an integer that has a special meaning.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=114)** It indicates the result of the compare to method after the current instance is evaluated against the instance provided to the method as an argument.
>
> **[2:04](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=124)** Let's call the current instance this, and we'll call the object that it's compared against that.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=131)** When we compare this to that, the result will be one of three outcomes that we're going to demonstrate using some pseudocode.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=139)** If the current instance or this is greater than the provided instance or that, the compare to method returns any positive number.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=148)** When the method is used for sorting, it would cause this to be placed after that in the order.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=155)** If this is less than that, the method returns any negative number.
>
> **[2:40](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=160)** This outcome would cause this to appear before that in the sort order.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=166)** And finally, if this is equal to that, the method returns zero.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=170)** Using these values returned by the comparable allows objects of a type to be placed into their natural order.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=178)** But sometimes we want to use something other than the natural order.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=181)** For these situations, we can use a comparator.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=185)** A comparator is another interface that is implemented by a class that compares two objects.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=191)** Unlike the comparable, which performs the comparison inside of the type that you're comparing, this comparison occurs externally in another object.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=202)** To do that, two objects are passed as arguments into the compare method.
>
> **[3:27](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=207)** This method performs the comparison of the two objects and returns an integer that follows logic similar to the comparable.
>
> **[3:35](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=215)** In Java eight, the comparable interface was updated to include many new static and default methods that can be used for chaining comparators.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=225)** One trick you can use to remember how a comparator works is to think of it like a balancing scale with two objects.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=232)** Like the scale, the comparator needs two objects to perform its comparison.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/ordering-elements?u=76281980&t=238)** Now that we better understand order, let's take a look at how collections are sorted in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), type. (2), let (2), this, (1), finally, (1)
> **Analogies:** for example (1), picture (1), compare this to (1), similar to (1), think of it like (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Sorting collections
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=0)** - [Instructor] Let's take a closer look at sorting collections by walking through a few examples that use a natural sort order.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=7)** We'll start by giving our room class a natural order.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=10)** The order will sort the rooms in alphabetical order first by their name, and then by their type.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=16)** To specify a natural order, a type must implement the comparable interface.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=21)** So let's go ahead and honor room class.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=24)** We'll implement the interface.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=26)** The interface accepts a generic type argument.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=30)** In this case, I'm going to specify that as room, this will allow an instance of a room to be compared against another instance of a room.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=39)** Now you'll notice the compiler immediately complaints, and that's because we haven't satisfied the comparable interface.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=46)** So just hover over the room class and then click on add unimplemented methods.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=51)** And then you'll notice that within your room class, you'll get a CompareTo method.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=57)** Now here we'll need to provide the logic that performs the comparison between the two rooms.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=63)** So to start out, I'm going to declare a new integer named result.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=68)** Our result variable will be assigned the return value of comparing the names of the rooms.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=74)** So I'm going to get the name of the current room, and then I'm going to invoke it's CompareTo method, which accepts another string.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=84)** So here you can see I'm leveraging the comparable implementation of the string object.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=90)** I'm delegating the comparison to another type.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=93)** Now here, we just need to provide the name of the other room that we're comparing against.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=100)** This is going to result in an integer that's either negative, positive, or zero.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=106)** Now, if it's anything besides zero, it means the comparison was resolved with our primary sort.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=113)** So in that case, we can check to see if the result is not equal to zero, and then we can just return the result in this ternary expression.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=126)** Now, if the result is zero, we can resolve the conflict using a secondary sort.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=132)** So to do that, we're going to do something similar by getting the type of the room, and then we're going to invoke it's CompareTo method, and then we're going to pass in the type of the other room and this should break the tie.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=148)** Okay, so we have our CompareTo implementation.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=152)** Now let's head over to our application class.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=156)** In this class, I've created a list of rooms and in the list are five rooms.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=162)** Now one thing I'll point out is that two of the rooms have the same name, but different types.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=168)** So here you see Oxford as a guest room and Oxford as a suite.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=173)** Now let's first start out by just executing this code and you can see that the rooms are placed in their insertion order.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=183)** Now let's go ahead and change that by sorting them using their natural order.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=190)** To do this, we can use the collections class provided by the collections framework.
>
> **[3:16](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=196)** Now don't get this confused with the actual collection interface.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=200)** It's different.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=201)** It provides static methods that we can use to work with a collection like a list.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=206)** So I'm going to go ahead and invoke the sort method and pass in our list of rooms.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=212)** Now watch what happens.
>
> **[3:34](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=214)** You'll notice that the rooms are placed in alphabetical order.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=219)** And then when we have a room that has the same name, we order by the type.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=226)** So that's our natural sort order in action.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=232)** Now there is an overloaded form of this method.
>
> **[3:55](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=235)** So let's take a look at that.
>
> **[3:57](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=237)** The overloaded form accepts our list and then a comparitor.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=242)** So I can go ahead and pass in our rooms.
>
> **[4:05](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=245)** And then I can use a comparitor that specifies the natural order.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=250)** And you'll see that we get the same result.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=253)** Now in more recent versions of Java, a sort method was added to the list.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=258)** So we can do something like this.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=261)** We can invoke the sort method on our room's list, and then we no longer need to pass in the collection.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=269)** All we need to provide is a comparitor.
>
> **[4:31](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=271)** And when we do this, we'll get the same results as last time.
>
> **[4:35](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=275)** This is the preferred method for sorting a list since it's been introduced.
>
> **[4:40](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=280)** When specifying the order of elements, be sure to leverage the language features that are provided to you.
>
> **[4:46](https://www.linkedin.com/learning/learning-java-collections/sorting-collections?u=76281980&t=286)** Using the existing comparable implementations and the comparitor static methods will help you write higher quality code that avoids logic errors that can be introduced by custom comparison logic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (5), pass (4), type. (3), class. (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Comparators
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=0)** - [Instructor] If we would like to sort a collection using something besides its element's natural order, we can define our own comparator.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=8)** So, let's imagine that we wanted to compare our rooms using their daily rate.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=13)** To do this, we can build a comparator that overrides the natural order of the room.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=19)** This comparison might be something that we use frequently, so I'm going to create the comparator as a static field inside of the room class.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=29)** So I'll declare the field with a type of comparator, and then you'll recall that comparators are a generic type, so I'll specify room as its generic type.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=39)** I'm going to name this the RATE_COMPARATOR, and then we can begin to create our comparator.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=47)** To do that, I'm going to use the static methods found on the comparator that were added in Java 8.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=55)** The first is the comparing method.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=58)** This allows us to provide a field on the room that we would like to use for our comparison.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=64)** So, in this case, I'm going to pass a method reference to the getRate field, so the rate will be used as the sort key.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=73)** Okay, let's go ahead and we'll save this.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=75)** And then we can navigate over to our application.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=79)** Now, you'll notice that we have a list of rooms currently in this application.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=84)** And if we execute the code, they're being sorted in their natural order.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=89)** So, Cambridge, Oxford, then the other Oxford room, Piccadilly, and Victoria.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=95)** Now, watch what happens when we shift this code over to use the new comparator that we built.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=100)** So I'll pass the comparator into the sort method on the list.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=105)** And then I'll go ahead and execute it.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=107)** Now, we're sorting in ascending order by the room's daily rate.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=112)** Now, within this output, you'll notice that we have three rooms that have the same rate.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=118)** Let's add a secondary sort to our comparator.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=122)** So I'm going to return to our room class, and then within the class, we can chain a call to the thenComparing method and add another method reference to our secondary sort key.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=137)** So, I'm just going to use the room name.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=140)** Let me go ahead and provide that method reference.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=143)** Then we can return to our application, and we can execute our code.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=147)** Now you'll notice the rooms are sorted, first by their rate and then by their name.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=153)** So Victoria is last, but then we still have this conflict with Oxford.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=158)** So we can head back over to the room class, and chain another call to build a third sort key into our comparator.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=168)** So I'll just invoke thenComparing once again, and this time I'm going to use the type to break the tie in the sort.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=177)** Now, back in the application class, before I execute this code, I'm going to invoke another method that's found on the comparator.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=186)** And that's the reversed method, and this just reverses the order in which we sort the elements.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=193)** So in this case, we're going to get the rates in descending order, and then we will get the name in reverse alphabetical order, followed by the type in reverse alphabetical order.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=205)** Okay, let's go ahead and check that out.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=208)** And you notice that we're now ordering in a descending order by the rate.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=213)** Then we see the names in descending order, and then the types in descending order.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=219)** In the past two lessons, you may have noticed a pattern.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=222)** The collections framework provides us with methods for sorting, but they're all designed to rely upon logic that is external to the framework.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=231)** So when you define that logic, make sure it's reusable, through either a comparable implementation for natural sort order, or a comparator that is used globally throughout your code.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-collections/comparators?u=76281980&t=242)** Then, you won't repeat yourself all throughout your code base.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), class, (4), static (2), case, (2), pass (2)
> **Code Identifiers:** thencomparing (2), getrate (1)
> **CLI Commands:** make (1)
> **Env Vars:** rate_comparator (1)
> **Versions:** java 8 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Finding elements in a collection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=0)** - [Instructor] The collections class contains many static methods that help us work with the collection.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=5)** In this lesson, we're going to explore a few of them that allow us to find values within a list.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=11)** So let's start out with the classic binary search.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=15)** When we use a binary search method in the collections framework, we need our collection to be sorted.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=22)** So you'll notice that I have a list of rooms and then I've used our rate comparator to sort them.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=28)** So let's go ahead and on the collections class, we can invoke the binary search method.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=33)** And you'll notice that there's two of them.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=36)** The first, we'll use the natural sort order of the collection in order to perform the search.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=43)** The other one will accept a comparator.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=46)** Now because we're not using the natural sort order of a room for our collection, we'll need to go with this form of the method.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=54)** So the first argument's the collection that you would like to search.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=58)** The second argument is the object that you would like to search for.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=62)** In this case, I'm just going to look for Cambridge.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=65)** And then the final argument here is your comparator.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=68)** So I can pass in our rate comparator.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=72)** Now this method is going to return an integer that denotes the index where that object is found.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=80)** So I'm going to go ahead and assign that to a variable called result, and then I'm going to just print it to the console.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=88)** Okay, so let's go ahead and we can perform our search.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=92)** So you'll notice that the binary search indicated that Cambridge is in index one.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=99)** And if we take a look at our list, you'll notice that in index one we find Cambridge.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=105)** So that was a successful binary search.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=107)** Let's see what happens when a search isn't successful.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=111)** So I'm going to just copy one of our rooms and then I'm going to paste it in at line 20.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=119)** And I'm going to build a new room that isn't in our collection.
>
> **[2:04](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=124)** I'll call it New London and then I'll just change the name of the variable.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=130)** Okay, now I'm going to search for New London inside of our collection with the binary search.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=138)** Let's see what happens here.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=140)** So you'll notice that the result is negative.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=144)** That indicates that the object was not found within the collection.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=150)** And then it's providing an integer of three.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=153)** So this is known as the insertion point.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=156)** It indicates the position in the list where New London would be inserted.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=161)** And that would be here in position three, where we currently find Oxford.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=167)** So let's go ahead and we can insert Oxford into our rooms list.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=172)** To do that, I'm going to use the overloaded add method that accepts a position.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=177)** And then I'm going to get abstract value of the result.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=181)** And I'll also need to increment it by one.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=185)** You'll notice when I do this, we can then insert New London into its proper position within the collection.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=193)** Let's close out the lesson by looking at two more methods on the collections class.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=198)** These methods are going to help us find the min and the max values within our rooms list.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=206)** So to do that, we just invoke the methods on the collections class.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=212)** The first one is min and we pass in our collection and then we pass in a comparator.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=219)** So I'll pass in the room comparator, and then I'm just going to get the name of the room once we found it.
>
> **[3:47](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=227)** So this is going to get the min value from the collection as determined by our rate comparator.
>
> **[3:55](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=235)** And then to get the max, it's very similar.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=238)** I'll just change our console output here.
>
> **[4:01](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=241)** And then we'll change our method call to get the max.
>
> **[4:05](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=245)** Okay, let's go ahead.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=246)** We'll execute the code and see what we got.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=250)** Okay, so you'll notice that our min room was identified as Piccadilly and it does have the lowest rate of the group.
>
> **[4:20](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=260)** So that's correct according to our rate comparator.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=263)** And then Victoria was identified as the max, and that's a little bit more difficult because we do have these three rooms that have a rate of $225.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=276)** But you'll remember that our room comparators secondary sort key was the name.
>
> **[4:41](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=281)** And because Victoria is deemed to be greater by that sort key, it appears as the greatest element or the max element in our collection.
>
> **[4:52](https://www.linkedin.com/learning/learning-java-collections/finding-elements-in-a-collection?u=76281980&t=292)** So that wraps up our review of the collections class and other utilities that we can use to work with collections in the framework.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (4), class. (2), static (1), class, (1)
> **CLI Commands:** find (4)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Course wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=0)** - [Kevin] Thanks for watching this course on the Java collections framework.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=4)** Before we wrap up, I want to provide you with some ideas on where to go next and give you some information about my other courses.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=11)** Now that you're familiar with the basic collections, I would recommend looking at the framework's concurrent implementations that handle multi-threaded scenarios.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=20)** You'll need to be aware of Java concurrency to get the most from these collections.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=25)** So make sure you're comfortable working with programs that handle more than a single thread.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=30)** In this course, we've also touched on Java streams, which pair really nicely with collections.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=36)** If you dive deeper into streams, you'll discover more operations to add to your Java toolbox.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=42)** Finally, we also highlighted generics in the course.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=46)** Generics are another section of the language you can explore that will help you better work with collections.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=52)** If you like my teaching style, I have a few other courses on the LinkedIn Learning platform that might interest you.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=59)** I can teach you about other topics like GitOps, Microservices, APIs, Java, Spring, or Git if you're interested.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=68)** If you want to, tag me when you post your course certificate.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=71)** I always like to interact with learners taking my courses and celebrate their success.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=77)** I'm also very active on LinkedIn, so follow me or connect to be notified when I create a new course or share some technical writing.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=85)** So that's it.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=86)** For now, congratulations on finishing this course and thanks again for taking it.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-collections/course-wrap-up?u=76281980&t=91)** Now it's time to put your new skills with Java collections into action.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), git (1)
> **Code Keywords:** finally, (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [kevin] (1)


## Path Context

### In [[Getting Started as a Java Developer]]
← [[Learning JDBC]] | **5 of 10** | [[Java Memory Management- Values and References]] →

## Appears In

- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)