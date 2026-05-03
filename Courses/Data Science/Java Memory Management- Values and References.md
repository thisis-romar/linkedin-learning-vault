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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Memory%20Management-%20Values%20and%20References.md)

![Java Memory Management: Values and References](https://media.licdn.com/dms/image/v2/D560DAQHNqyFy0rQSiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710461282859?e=2147483647&amp;v=beta&amp;t=LjUM--S07MjJJulmAJyTDydJrHCeGx4UeNVs489gpBI)

# Java Memory Management: Values and References

> It's undeniably frustrating to need to restart an application due to performance issues. Did you know that this is often caused by poor memory management, though? Not only do you have the power to address it as a Java developer—you can prevent it altogether. In this course, instructor Maaike van Putten offers you a detailed look at how to deploy effective memory management solutions in Java.Explor

> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-values-and-references) | 1h 15m | Intermediate | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Make beautiful stack overflow errors](#make-beautiful-stack-overflow-errors)
  - [What you should know](#what-you-should-know)
  - [Explore the code challenge environment](#explore-the-code-challenge-environment)
- [**1. Java Memory Explained**](#1-java-memory-explained) (6 videos)
  - [What is Java memory?](#what-is-java-memory)
  - [The importance of understanding Java memory](#the-importance-of-understanding-java-memory)
  - [JVM and memory management](#jvm-and-memory-management)
  - [Stack memory](#stack-memory)
  - [Heap memory](#heap-memory)
  - [Heap vs. stack](#heap-vs-stack)
- [**2. Values vs. References**](#2-values-vs-references) (6 videos)
  - [Primitives](#primitives)
  - [Objects](#objects)
  - [Final classes and immutable objects](#final-classes-and-immutable-objects)
  - [Strings in memory](#strings-in-memory)
  - [Primitives and objects in memory](#primitives-and-objects-in-memory)
  - [Solution: Making an object immutable](#solution-making-an-object-immutable)
- [**3. Careful: Escaping References**](#3-careful-escaping-references) (6 videos)
  - [The problem of escaping references](#the-problem-of-escaping-references)
  - [Collections and escaping references](#collections-and-escaping-references)
  - [Avoiding escaping collection references](#avoiding-escaping-collection-references)
  - [Example custom objects: References on the loose](#example-custom-objects-references-on-the-loose)
  - [Avoiding escaping references](#avoiding-escaping-references)
  - [Solution: Fixing an escaping reference](#solution-fixing-an-escaping-reference)
- [**4. Quick Peek at Next Steps**](#4-quick-peek-at-next-steps) (4 videos)
  - [Garbage collection](#garbage-collection)
  - [JVM tuning](#jvm-tuning)
  - [Spotting and avoiding memory leaks](#spotting-and-avoiding-memory-leaks)
  - [Solution: Fix the memory leak](#solution-fix-the-memory-leak)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Java memory management](#next-steps-with-java-memory-management)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Make beautiful stack overflow errors](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/make-beautiful-stack-overflow-errors?u=76281980&t=0)** - [Maaike] Have you ever had performance issues and needed to restart an application, and do you know why this happens? This has to do with poor [[Memory Management]]. Understanding how the memory works, can avoid these sort of problems. And actually understanding how the [[Java]] Memory works can upgrade your coding skills by a lot. This course helps you to truly understand coding Java and what's going on under the hood. In order to do this, we visualize the stack and heap memory while coding. We also touch upon the differences between primitives and objects in the memory, and we'll end with exploring some more advanced topics. My name is Maaike and I'm a Java developer and trainer. This is the course I'd wish I could have taken, when I started with Java over a decade ago, it would have helped me so much. Come and join me in his [[LinkedIn]] learning course and create some beautiful stack overflow errors with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Memory Management]] (1), [[LinkedIn]] (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [maaike] (1)

#### [What you should know](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started with [[Memory Management]] right away, let's make sure this is the right course for you right now. In order to be able to follow along, you'll have to be familiar with using IDEs and basic [[Java]]. If you're not familiar with basic Java yet, these courses can really help you fix that: Learning Java, the Java 11+ Essential Training and Java Essential Training for Students. If you're not familiar with Java, it would be good to first take one of these and then come back here so you can level up your memory knowledge after. If you have the Java basics down already, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Memory Management]] (1)
> **CLI Commands:** make (1)
> **Versions:** java 11 (1)
> **Speakers:** - [instructor] (1)

#### [Explore the code challenge environment](https://www.linkedin.com/learning/java-memory-management-values-and-references/explore-the-code-challenge-enviornment?u=76281980)


### 1. Java Memory Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Java memory?](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=0)** - [Instructor] You probably have heard of memory in computer science quite a bit. A computer has memory, and the most common memory is the RAM. The random access memory. The RAM is crucial for storing, and accessing data while the programs are running the applications they are using the RAM for this. And the applications can access this very quickly. And if your OS is managing this RAM well, then there is enough RAM memory available, you'll enjoy the performance of the application. Examples of the RAM memory in action are the loading of applications such as when you're opening your browser, it needs to load first, and the same goes when you want to go ahead, and edit a [[Microsoft Word|Word]] document, you have to open Word first. And the first time you open something, it often takes a bit long, but when you close it and you open it again, it will be faster, and this is because it's still load in the RAM memory. And when the rum gets full, this means that your computer will get very slowly. You may notice this principle from firsthand experience. Don't worry. You're not at the wrong course. I'm telling you this because this is something you could probably easily relate to in a way that your computer memory works, and the OS is managing this computer memory. It's actually very similar to the way that [[Java]] memory works as well. Java memory is responsible for storing the data the Java application needs in order to run. For example, all the instances in the Java application, they're stored in each a Java memory. All the primitive values stored in a Java memory. Constance, Java memory. Fields and [[Metadata]], methods codes, native methods,
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/what-is-java-memory?u=76281980&t=93)** the order in which methods are called, and the memory necessary to run an Info methods, you may have guessed it, but this is all in the Java memory. The Java memory is managed by the JVM, and you'll learn more about this later. Let's see why we actually want to know how this memories is working in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (9), [[Microsoft Word|Word]] (2), [[Metadata]] (1)
> **Env Vars:** ram (7), jvm (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [The importance of understanding Java memory](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=0)** - [Instructor] Understanding how the [[Java]] memory works comes with a lot of advantages for your Java coding. It's easier to visualize what's going on with object composition. The phenomenon that classes have other classes. And for example, the Person class has property address, which also happens to be a class. Knowing how this all is working in a memory, it actually makes it easier to know what steps to take to get a certain data field. Also, the concept of static and accessing the instance with a This keyword will be so much easier to visualize and understand when you understand how the memory of Java works. Without understanding how the memory works, it's actually impossible to truly grasp the concept of the Static and This keyword. Another advantage of understanding Java memory is to Pass by value and pass by reference concepts. It makes a lot more sense all of a sudden, once you understand how the Java memory is working. And this also helps you with understanding immutability and mutability of objects. Also, some more complex topics will make a lot more sense, for example, concurrency. It's very possible that you haven't worked for it yet, but as a Java developer, you'll have to do so one day. Understanding the Java memory makes it easier to understand certain aspects of concurrency, especially the data access. Another complex topic, a very fun topic actually, that you'd be able to better understand is the Garbage collection, and the great news here is that in the very last chapter of this course, we'll be touching upon this concept already. It will actually help you on so many other fields as well. For example, the difference between primitives
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-importance-of-understanding-java-memory?u=76281980&t=95)** and the wrapper classes, and all these things you're probably using on a daily basis now already become a lot clearer when you better understand how the Java memory works. At this point, you might be wondering what I'm still waiting for and you are dying to get started. And you're right, we'll be discussing the basics of [[Memory Management]], the stack, and the heap memory in more detail in this chapter. Let's start with the basics of how the JVM deals with the memory management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Memory Management]] (2)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### [JVM and memory management](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=0)** - [Instructor] The JVM is managing the [[Java]] memory. Without a management of memory, objects couldn't be stored because there would be no memory allocated for these objects. And even if that part was in place somehow, it would never be cleaned up. So cleaning up the memory, also called deallocation, it's of great importance for running Java code. Without it, the code can't run, or if it's only allocated, it will get full and the program will run out of memory. Long story short, [[Memory Management]] is important. It's one of the very important tasks of the JVM. The JVM stands for Java virtual machine, and this is actually the environment that executes the Java code. It can actually also execute other code, but let's not get into that now. It is what it says, the virtual machine especially for Java. JVM is what makes the Java platform independent. Every system has its own JVM that will run the written Java code the same way. So the reason that Java has the write once, run anywhere principle is the different implementations of the JVM for every platform that can run Java. And typically compare this to a travel plug. You can use your unplug wherever you are when you have the right travel plug with you and then JVM is the travel plug in this case and your Java application is your plug. As I just said, one of the responsibilities of JVM is to manage Java memory. When the JVM starts, it's reserves a piece of RAM memory for the Java application to use, this memory is called the heap. The JVM is actually managing
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-and-memory-management?u=76281980&t=92)** different types of memory. It's managing the class area, the heap, the stack, the program counter register, and the native stack memory. We'll be focusing on the heap and stack memory in this course. Managing this memory, allocating and deallocating is part of the responsibility of the JVM. Deallocation of the heap is handled by the garbage collection process of the JVM. This is a fairly interesting topic and we'll discuss it in a bit more detail later. Let's first have a look at the stack memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (12), [[Memory Management]] (1)
> **Env Vars:** jvm (12), ram (1)
> **Definitions:** stands for (1), is called (1), is a  (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### [Stack memory](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=0)** - [Narrator] The stack memory is the memory that's used for executing methods. Inside the method, primitives and objects exist. The values of the primitives are stored directly in the stack. The objects are not stored on the stack. Instead the object reference is stored. The object reference is the address of where to find the object on the heap. Stack memory makes different blocks of memory for every method. Once the method is done, the block gets removed. And the block of method memory that was laying underneath it, the method that's called the other method can be accessed again. When the method is not done, it calls another method, new block is being stored on top of this method memory block with the primitive and references for the memory inside there. So let's have a look at a visualization of this. So, here's the stack memory. And inside the stack memory we have method 1, and method 1 has a bunch of values and references, and they're stored inside this memory block for this method. And method 1 is now calling method 2, and method 2 is actually going to be calling method 3, but it has its own values and references stored in its block on the stack. So then we're going to be calling method 3, and method 3 is not calling any methods. It has a bunch of values and references of this method stored in this block of memory on the stack. As soon as method 3 is done, the block disappears, and the other memory block is going to be in place again. So now we're inside method 2 again, and once that method is done, we're going to be back inside method 1 and we can access the memory of method 1 again. So the values and reference of this method can be accessed.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/stack-memory?u=76281980&t=94)** And eventually all is done and our stack is empty again. When we are in a certain method we can access these elements on the stack, but we cannot access any of the other elements. And the same is true for when we're done with the method, when it's done, it's going to be done and we can no longer access the method's memory. So from the values and object reference of the methods, they're gone, they're being removed automatically as soon as the method is done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Heap memory](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=0)** - [Instructor] The heap memory holds all the objects that exist in the application. Objects on the heap can be accessed from everywhere in the application using the address of the object. We call this address, the object reference. The objects on the heap contain the same thing as the blocks of method memory on the stack, primitive values and references to other objects on the heap. So let's have a look at a visualization to understand how does this is working. So this is our heap memory and on our heap, we have one object. And this object contains primitives and references to other objects on the heap. And then we have Object 2 on our heap. And Object 2 on the heap also holds primitives and references to other objects on the heap. And finally, we have a third object on our heap, which is containing primitives and references as well. So these elements on the heap, they actually need to hold some sort of connection to the stack. So here we see that our Method 1 is actually referencing to Object 1 and Object 2. And our Method 2, which is a separate block on the stack, is referencing to Object 3 on the heap. The objects on the heap could also be referencing each other, but for simplicity, they aren't right now. So there is a difference between the stack and the heap here. And it's an important difference. So as soon as Method 2 is done, the stack memory is being cleaned up automatically. But this is not true for the heap. As you can see right now, our Object 3 has no longer a connection to the stack. And this means that it's possible that our object is going to be cleaned up by the garbage collector, but we don't know if it is. It might be cleaned up, but we're not sure.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-memory?u=76281980&t=93)** One thing is for sure though, right now, we can no longer access Object 3 because it doesn't have connection to the stack. Also not via any of the other objects on the heap. But let's just assume that the garbage collection is going to collect the garbage and cleans up the heap. As soon as Method 1 is going to be done, Object 1 and Object 2 can also be removed from the heap. And they are as soon as the application ends. And at that point, the stack and our heap are both cleaned up.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), we call this (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Heap vs. stack](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=0)** - [Instructor] The Stack and the Heap memory are very different. Stack only contains references and primitive values, and Heap contains Objects. While we're talking about accessibility, we can say that Stack can only be accessed on a last and first out base, meaning we can only touch the top of the step, the [[Metadata]] we're in. Heap is accessible whenever you have the address of the object on Heap. When we consider size and deallocation, the Stack memory is smaller than the Heap, and a memory gets deallocated automatically for the Stack. Whereas the Heap is larger, and the memory needs to be deallocated by the garbage collector. In terms of speed, we can say that it's actually faster to access the Stack memory than it is to access the Heap memory. And lifetime, we can actually say that the Stack has a shorter lifetime typically, than the Heap, because the Heap exists for the time this application runs, whereas the part of the Stack containing the methods, only exist while this method is being executed. Let's go ahead and look at officialization of some code under Stack and Heap memory. Let's first activate Stack memory. So I'm going to say that'll go into some Stack memory stuff here, meaning I'm going to have some primitives going on. So for example an x with value of five, a double y with the value of three, and a boolean b with the value of say false, and a final int xy with the value of three. So this is all purely the Stack memory, but we can actually also have something that's combining both, so this is Stack and Heap.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=93)** So let's create a person object p, and I've made a person class here, let me show you. So here's the person class, it just has a bunch of properties. That's the name, year of birth, whether or not it loves [[Java]], and it has a Object address. And I've also made an address object containing some entrance properties such as street name, numbers, zip code, city, country. All right, so let's go back to our main and continue creating our Person p, and I'm also going to be creating our Address a, here. So right now, I have some references on the Stack and the actual objects on the Heap. So let's work with the Heap memory for a bit. So what I'm going to do, I'm going to be modifying the actual objects on the Heap memory. So I'm going to be exiting the Heap memory, and in order to do so, I'm going to call the setter methods on our objects. And as you might know, as soon as I call these setters, I'm calling new methods, and when I'm calling new methods, I'm actually adding onsteg memory, but this is so tiny that I'm not going to use it right now, 'cause it won't really show anyway. So here I'm going to say a.setCity, and this will actually make a new string Utrecht, which is my city, on the Heap memory, and it's going to refer from a, to this memory object Utrecht, on the Heap memory. All right, so let's do the same thing for country. I'm from the Netherlands, it should maybe able to hear, and I'm going to say set number, and I'm going to set the number, and then I'm going to set the street name,
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=188)** and of course I'm living in Java Street. And I'm going to be setting like zip code, which is a Dutch zip code, so it has a Dutch format which looks something like this, all right. And right now I have created some elements on my address on the Heap, and it's actually created the bunch of strings, and my object is referring to these other objects from the Heap. So just referring to the references in the block of the address object, and it has created all these new string objects on the Heap. To be honest, these string objects actually contain other objects because these are array of characters, but let's not make it too difficult for right now. Instead, let's also work with our person objects, so I'm going to say set loves Java to all true clearly, all right, and let's set year of birth as well. And let's set a name, let's set my name here too, and I'm going to say Maaike, like this. So right now I have added a bunch of things on the Heap, but what I can actually also do, I can connect our person and our address object, and I can do so by actually setting the address on the person. Let me show you, so I'm going to say p.setAddress, and then I'm going to insert our Object a, that we've created, and right now they are both connected on the Heap because the person is referring to the address of address. Okay, so that's a bit weird. So the reference that p is holding for address is actually the address of our address object on the Heap. Still with me? This is actually most that there is to this whole Stack-Heap kind of thing, so the Stack is connected to the Heap, and as soon as you create a new object,
>
> **[4:41](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=281)** you're creating new objects on the Heap, and you're holding the reference on your Stack or on your other objects on the Heap. And that's all there is to it so to say. So this is a very good fundament for continuing with some more in-depth knowledge in the next chapter. There's actually one more difference of the Heap and the Stack that I would like to show you. And that is the way they are crushing when memory is full. So the Stack is going to be throwing a StackOverflowError, and when the memory on the Heap is full, it's going to throw an OutOfMemoryError. So let me show two code examples that are going to be doing just this and explain you why both are happening. So here we're having an example of a StackOverflow. So why is this going to be causing the StackOverflow? Well, because it's going to be creating new blocks of memory on the Stack every time we call the constructor. Because the constructor is calling itself. So as you can imagine, based on officialization that we have just seen, it would just be adding new blocks on the Stack memory every time it's going to be calling this new ExampleStackOverflowError on line five, and then as soon as it calls it, it's going to call it again and again, it's creating new blocks on the Stack memory until it's full. So let me show you, and I'm going to be running this example. And as you'll see, really soon the memory is full, and is saying, "Exception in thread "main" java.lang.StackOverflowError". And this makes sense because well literally, the Stack memory gets full because too many methods constructors in this case are being added to the Stack. So that's the StackOverflow Error. Let's have a look at the OutOfMemoryError. And in case of the OutOfMemory, we actually want to be creating elements on the Heap. And so many are just going to be crushing.
>
> **[6:15](https://www.linkedin.com/learning/java-memory-management-values-and-references/heap-vs-stack?u=76281980&t=375)** And to be honest this is going to be taking quite a while without JVM tuning, because my memory on my computer is quite big, and by default it starting it with quite some memory. So what I'm doing here, I'm creating a map and I'm going to be running this already because it's going to be running for a long time anyways, and this HashMap, it has a key of type integer and the value of type string, and in the loop, an infinite loop, because it says, "while true", I'm going to be adding random values to our map. So it has a random new key every time, and it has a value so random every time I'm going to be running this. And this going to be speed up a bit so you can see the error really soon. All right, there we have it. So this took a while, but it was speed up for you, so you're just seeing this OutOfMemoryError, and it's saying, "Exception in thread "main" java.lang.OutOfMemoryError". And then it says, "Java heap space". So we know what's going wrong. Clearly we know what's going wrong because well, we are doing something really stupid our map here, but something like this can also happen by accident, and then you'll also get the OutOfMemoryError. Which is not something that your program typically will recover from, but that's a story for another day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Metadata]] (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** setcity (1), setaddress (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)


### 2. Values vs. References

[↑ Back to Table of Contents](#table-of-contents)

#### [Primitives](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=0)** - [Instructor] Primitives are raw values. They're nothing more than these three things in memory, a name, a type, and a value. Primitives in methods live on a stack memory, and primitives on objects live on the object on the heap memory. So there are eight primitive types. We have the int for round numbers, We have the byte for smaller round numbers. We have short for bigger than byte, but smaller than int round numbers. We have long for longer than int round numbers. And we have float for decimal numbers. We have double for bigger decimal numbers, and float, or at least for more precise decimal numbers and float. And we have Boolean for true or false. And then we have char, for characters. Or actually, positive round numbers between zero and 65,000 something, something. So these are the eight primitive types. And you have to be careful, to not confuse the primitives and wrapper classes. The wrapper classes are easily recognized, because they start with a capital, for the types. So for example, if Boolean would have capital for the wrapper class, and when it's a lowercase letter, it's primitive value. The wrapper classes are objects, and they live on the heap instead of the stack. And this might not seem to matter too much and very often that actually doesn't. But if you remember correctly, accessing objects on the heap, is slightly slower than objects on the stack. So sometimes, you don't really have another option, but if you do, you probably want to have the primitive value, because the stack is faster. And whenever it matters, don't execute it the values of the assorted primitives, they'll get cleared up from the stack, and they're gone forever. So let's have a look at a good example of some primitives,
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=93)** and how to actually start from the stack. So here we have a class called methods, and it is containing three methods. it has method one, method two and method three. And as you can see on our stack memory, it's actually having the method one, and method two on the stack, and method three is being called, but it's not called yet, because it's not on the stack memory just yet. The X is zero and the Y is one, they're living on the stack. And if there would be objects on it, then the references to these objects would be on the stack, in the associated block of method memory. As soon as the methods done, the block on the stack gets removed. So let's say I were to change this for a bit. So instead of method one, not taking any arguments, it's going to be taking one parameter right now an int. And I'm going to be sending my integer X in. And for maximum confusion, I'm also going to be called X any methods, two as its parameter. So if I would modify X here and say x is two, instead of zero, X would only be two in the block of memory for method two, and not in the block of method one. This principle is actually called pass by value, since we're only passing the value to the methods and not the address of the value, since this cannot be done with stack memory. Just a few extra things to keep in mind, when working with primitives on the stack. When you access the primitives on the stack, it's faster than accessing objects. So when performance is important, and many values needs to be accessed, it might just be better to use primitives instead of the wrapper classes. But in [[Java]], primitives can not be used for collections. So whenever you need to work with collections, you'll have to use the wrapper classes.
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives?u=76281980&t=187)** This collections can only store objects. In the next video, we're going to have a look at objects and where data is stored and how they get passed around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Warnings:** be careful (1), keep in mind (1)
> **Cross-References:** in the next (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Objects](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=0)** - [Instructor] Objects are a bundle of values. As opposed to primitives, objects get stored on the heap, and the address to the place on the heap gets stored on the stack, else we'd have no way to get the values from the heap. This address is simply called an object reference. The memory block for the objects on the heap is a lot like the stack. Primitive values are stored on it directly, and other objects are referenced with an object reference. There are very many built-in [[Java]] objects that we can use such as ArrayList and all the other objects in the collection framework, all the wrapper classes for primitives, such as the integer and double. We have string, thread, and so many more, but we could also create our own objects, and these objects will also get stored on the heap. Let's move over to IntelliJ and revisit our previous example. All right, on line 13 and 14, you can see that I'm creating a new person and a new address, and the person reference I'm storing in the variable p, and the address reference I'm storing in the variable a. So this is an example of how I can actually connect the stack to the heap, but objects on the heap can also be connected. This is something that we can see a bit below. We can see on line 28 that we're actually giving our person an address object reference by setting the address. And as you can see in the visualization, there's an arrow now that's connecting our address and our person, and this is where the object reference of address is pointing to. When you send an object to a method, you're sending the object reference over. This principle is called pass by reference.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=94)** This is different from passing by value in a very important way to understand. Since you're sending the reference, the old place is still referring to the exact same object on the heap, so if you modify this object, it's also changed for all the other places that are holding the reference to the object on the heap. So let's modify the object on the heap. I'm going to be changing the value for the year of birth, and I can do so by saying p.setYearOfBirth. And I'm going to make myself a bit younger, which is a great thing to do. I'm going to say the year of birth should be 1992. So if we would run this, certain changes happen to the memory. Let's have a look. All right, so we started off with this situation. We had a main method, and it contained a bunch of primitive values, and it contained two references. And then we were going to call the setYearOfBirth method on the person instance. So the own instances point's going to be exact same object. And then the year of birth, it was actually set to 1992, and it's changing it on the actual object. So also the main method is now pointing to the same object as it just was with the new value in it. So since it has been changed by the method on the same object reference, it's also changed for the first method because the object references are exactly the same. So also when the setYearOfBirth method is done, it's still going to be modified for the main method since the actual object on the heap has been modified. And this behavior, this passing by reference,
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=188)** it's definitely not necessarily bad, but it's something to keep in mind. Later, we'll focus more on this and also on possible security issues that this can cause. So this principle is actually also why two objects with the exact same values are not the same when you compare it and use the equal-equal sign. So for example, if I would say Person p1 equals a new Person, like this, and I would do the same for a Person p2, and I would say new Person like this, and I would then ask Jeff, "Well, tell me Jeff, are p1 and p2 equal to each other?" Well, right now it would tell me this is false. The object reference is not the same, so it's returning false. So ==, it's always looking at the object reference, whereas the .equals methods like this, p1.equals p2, this can actually be custom behavior. Right now, we did not override the equals method, so it's going to do the exact same thing as the double equals sign. But we could've said that if the names are the same, we say it's the same person. It would probably be a silly thing to do, but it's possible. And this is only possible with the .equals method. It's not possible to compare p1 and p2 on equality using the equals-equals sign based on anything other than the object reference. So quickly to sum up, right now, == and the .equals method, they're doing the same because we did not override the behavior of the .equals method, but we could. And the equals-equals sign, it's always looking at the object reference for its person objects. As I already said, accessing objects on the heap is a bit slower than accessing values on the stack,
>
> **[4:43](https://www.linkedin.com/learning/java-memory-management-values-and-references/objects?u=76281980&t=283)** and the same goes for accessing the heap from within the heap. However, when you need to work with values other than primitives, you would just not have an interruption. There are a few objects for which all of this is slightly different. Immutable objects clearly cannot be changed, and something special's also going on for a string class. We're going to have a look at how this is working in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Code Identifiers:** setyearofbirth (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Warnings:** keep in mind (1)

#### [Final classes and immutable objects](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=0)** - [Instructor] Variables that are final cannot be changed. These values are immutable and can only be assigned a value once. When you assign a new value to them, the code will not compile, but this doesn't change anything for the place where they are stored on the stack though. It also doesn't change anything on how they are passed around. Only the value gets passed around and nothing else, and this means they are no longer final after having been passed around, since only the value gets passed and nothing else, so the parameter in place where it's being received, it's not final, it's just a value. Because of this, immutable objects are a slightly different story. Immutable objects are objects whose values cannot be changed after creation. This means that the variables on immutable objects are final and cannot be changed from inside or outside. Let's go ahead and have a look at IntelliJ to see an example of an immutable object. So here we are seeing an immutable example object. It has two variables and they're both private, meaning they cannot be accessed from outside. They only get assigned a value exactly once, namely inside the constructor, and after this, their values cannot be changed. There's simply no option to change these values after creating the class, but careful with some other classes though. For example, this example, it might seem immutable at first, but if you have a closer look, you'll find it's not truly immutable, because again, we're having a final int and a final string, but this time we're also having a final list object, and a final list means that the value of the reference to the list cannot change, so the list cannot be replaced with a new list,
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=95)** but the list itself is mutable, so the values on the list, they can change. They can either be added or removed, or the values, the objects on the list, they can change their selves, so careful with these types of classes because this is not really an immutable class. It might look like one, but actually it's really not. There would have been a better name for this class. It would have been really not immutable example, because it's really not immutable, to be honest. So a few more side notes, just like the regular objects, immutable objects have a reference on the stack and this is pointing to the objects on the heap, but the values on there, so the values on the heap, they cannot change, so even if you've passed these objects around, and this is an object so it's happening by reference, you're passing the reference around, the object is immutable and it cannot change, so the values of the object cannot be changed from outside or from inside a class. The object itself simply won't change, hence the name immutable. Well, when it is immutable. So it is not being able to change that actually has some benefits in terms of security. Since the object cannot be changed, it cannot be changed from outside in order to manipulate the way the [[Java]] code is running, and we'll see more about this in the next chapter. Some of our built-in objects are immutable, such as the wrapper classes for all the primitives, and also the string class is immutable, and this is very different from final variables because you can actually change the value of the variable containing the string or wrapper class primitive, but this will create a whole new object on the stack, and this can get quite heavy on the heap if you do this too often. If you do it wrong, this can easily lead
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/final-classes-and-immutable-objects?u=76281980&t=187)** to some out-of-memory error, as we saw in the first chapter. I already mentioned that the string class is an odd one out when we're talking about memory. Let's see how this is working exactly in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** means that (2), is an  (2)
> **Cross-References:** in the next (1), as we saw (1), next video (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **CLI Commands:** find (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Strings in memory](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=0)** - [Instructor] Strings are the odd one out in terms of objects in [[Memory Management]]. Since strings are used a lot in [[Java]], there's a mechanism to improve the performance of strings and to avoid having to create a new object for every string. So Java tries to deal with strings extra efficiently, and when the string is exactly the same as a different one, it will be assigned the same reference as the other one. And this mechanism is actually called the string pool. Instead of always creating a new string object, the Java memory checks a special memory segment called the string pool, to assign a reference of a string to a firewall. And this is why when you're in a class the equals equal sign on two strings with the same value will return true. The string object is being recycled from the string pool, and this can be done safely because strings are immutable and the value will never change anyways. So even if you pass the reference around, this will not cause the risk of your string being changed in a different place. So let's have a look at IntelliJ and see this in action. So, I have prepared a class here and the class is called ExampleString. And on line five, six, and seven, we are creating strings that have not been create before. We have a string name with the value maaike in it, we have a string dog with the value Java in it, and a string cat with the value cucumber in it. And then on line eight we have a string rabbit and we assign the value maaike to it. But this time a new object won't be created because it can actually reuse the one from name since this one is in the string pool already. And something similar is going on when we create new person objects, what creates new objects on the heap.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=93)** But then eventually when we set name on line 13, it's not going to create a whole new object it's going to reuse the one from the string pool. So let me show this to you by actually doing a very simple system.out.print.ln with the equal equal sign. So I'm going to start with name equals equals rabbits as the both of the value, maaike, and I'm also going to say name equals equals p.getName. And both of these will return true. Let me prove it here. So it just means that the string pool is working. Java is doing its trick and creating as little objects as possible. So here's what the string pool looks like on the heap. So we have the Stack memory on the left, with a main method blocking it and to firewalls an object references we've just created. And as you can see in the heap memory, there's a special memory segment called the string pool, and it has three strings in it, maaike, Java, and cucumber. Out of this one object in it's that person object, and this person object is also referring to the string pool for the value of maaike. But you can force Java to create a string outside of the string pool by using new string to create it. Let me show you what I mean. So instead, if it would say string rabbit equals new string and then send the value maaike in, then now when we compare name to rabbit they won't be the same any longer because the object reference is going to be different. And prove it it's going to be print false and true right now, as you can see. It's still printing true because I didn't touch the name or the setName from person. So this is still using the string pool for the value.
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-values-and-references/strings-in-memory?u=76281980&t=186)** But since I changed the rabbit to create a new string object, it's no longer the same as our name string object. On the Stack memory this actually looks like this. So right now when we create the string rabbit, we create new string. And this new string it's actually being created outside of the string pool, so it's also not being reused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Memory Management]] (1)
> **Code Identifiers:** getname (1), setname (1)
> **Definitions:** is called (1), means that (1)
> **CLI Commands:** cat (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Primitives and objects in memory](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=0)** - [Instructor] Let's summarize all that we have seen so far with a bit of a bigger visualization example. We're going to visualize the creation of some custom objects, some primitive values, and we'll add in some strings, and also see some immutable objects. We'll see what all of this looks like in the heap and the stack memory. So this is our starting point. This is [[Java]] memory, and we see our stack memory on the left and our heap memory on the right. Our heap memory contains the string pool, and our stack memory shows that the main method was already started. So there is a block for the main method created. We then create two primitive values in our main method, an integer x with a value of five, and a Boolean b with the value of false. Then we'll be creating a string object. And the string is being inserted into the string pool, meaning what we just set, string food equals grapefruit in this case. Then, next up we're going to be creating a custom object. And a custom object is a person object, but it's slightly different from the one we have seen because this one is actually other, than in primitive for the year of birth, but a seventh integer upper class. And as soon as we've created person object, the person object lives on the heap. What we then do, we use the set method to say lovesJava equals true. And then we see that the lovesJava value is true, but the year of birth and the name have nothing set, and both of these are still null. What we then do, is that if we set the name of the person and we set to Maaike, and as we do so, we're actually create a Maaike on the string pool. The next thing we're doing,
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/primitives-and-objects-in-memory?u=76281980&t=92)** is we are setting the year of birth. And I already said, the year of birth is an integer upper class right now. So in other object gets created on the heap and the integer upper class, if you remember, I've already said it's immutable. So we cannot change the value of this new object on the heap. When we change the value of a year of birth, we're actually creating a whole new objects on the heap, which is actually what's happening next. So we have to insert year of birth still in our main method. It's just the reference variable, but we make our person object points to a new object on the heap, namely an integer containing the value of 1992. And then lastly, what we can also do, we can create strings outside of the string pool and we do so by using the new string constructor. And when we do that, for example, we create another Maaike, calling it name two, we say string name two equals new string Maaike. You can see the object gets created outside of the string pool. And looking at this bigger picture, you can easily see that escaping references could be a problem because whenever you've passed something by reference, you can actually start changing the value of this object. And in very many cases, this isn't a problem. And in some cases, this is a problem, which is something we will be focusing on in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** lovesjava (2)
> **Analogies:** for example (1), picture (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Making an object immutable](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-making-an-object-immutable?u=76281980)


### 3. Careful: Escaping References

[↑ Back to Table of Contents](#table-of-contents)

#### [The problem of escaping references](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=0)** - [Instructor] At this point, you already know what pass by reference means. We have seen this when we called the method with an object as an argument. Reference to this object was sent. And whenever the method modified this object, this meant that the object was also modified for other places in our code that we're holding the same reference. Since they are both pointing to the very same object. Whoever has the reference can access the object. So no news there, but this passing by reference is also true for returning objects from methods. Reference to the object gets sent. And this can also happen to third-party libraries in your application for example. Whenever this happens without it being your intention, we call this escaping references. Sending an object reference unintentionally with possible negative side effects. Even though this might be not too surprising to you, security breaches that this behavior of [[Java]] can cause, they might be a surprise. Let's move over to IntelliJ and have a look. So here we have an order object. And our order object is holding some sort of date, a list of [[Microsoft Products|products]] and a user. It's just an order. So it doesn't seem too harmful when we sent this order around right? But more careful here, because we have a user object on our order. So let's move over to our user object here. I had, as you can see, our user is having a name, an address object and something special, a sensitive object. And if we open the sensitive object or it turns out, it's not that really sensible, and it's a silly example. But we're also sending the reference to our sensitive object when we return the order.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/the-problem-of-escaping-references?u=76281980&t=95)** So this is definitely something to watch out for. Because we meant to return the order object, but we probably didn't mean to also return the sensitive object containing some secret code. This is why you should be very careful with this principle called pass by reference. And often you would want a solution for this. We'll see some solutions soon enough in a few videos from now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** intellij (1)
> **UI Navigation:** open the (1)
> **Definitions:** we call this (1)
> **Analogies:** for example (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### [Collections and escaping references](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=0)** - [Micah] Collections can hold multiple objects, and they do so by holding multiple references to all these objects. It is common that when you return the collection from a method that you make a clone of this collection because a collection is an object itself. And when you return a collection, sometimes you don't want to share to the reference. And if that's the case, you have to make a clone. 'Cause if you make a clone, you cannot modify the collection from another place using reference. So for example, something gets added or something gets removed, this won't happen to your original place because it's a new reference and a new object. So in these cases, you'll return a clone of your collection. Let's have a look at an example in IntelliJ to see this in action. All right, so I've made little demo here, and clearly, this is poorly structured code and this looks terrible, but it's just for the purpose of explaining what's going on with collections and references and more importantly, escaping references. So there's two functions on top, and we'll see these later. Let's first have a look at our main method and what's going on. So I'm creating user, and I'm inserting my name, Micah. I'm creating a new address with nothing under, and a new SensitiveObject. Everything I need to create user using the constructor of the user. Then, I create a product list, and this is a list with strings. I'm adding one product to this list, and this product is simply called product. Then I'm creating an order using my createOrder methods. Let me show you where I'm doing it. I'm doing it on top. Actually, I wouldn't need a method for this, I could also have done this below. But I say createOrder, and I'm sending in these references, I'm sending in the reference to the user, as you just saw,
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=95)** and to the [[Microsoft Products|products]], and then I use the local date now to create a date for our order. And then we have the order. Now that we're done doing, we are going to be processing our lists a few times, and we're also going to be modifying our list. So I have an order and my order has a list. So the original list, I'm going to send into processProducts. And it's just going to go and do for each on all the strings in the list with strings. So we're going to do the same for a copy. And I'm just making a copy by saying list, generic string, copy equals order getProducts. And then, we're going to say, processProducts, copy. And this is again, go to printing every string in my list of products. Then I'm going to be modifying the list by adding a new product to the copy list. And then, I'm going to be printing both again by using new processProducts method. So let me run this and you'll see what's going on. So in the original situation, I have a product on my list, and so does the copy. Then, I'm going to be do the modifying action by adding new products. And as you can see, both the original and the copy variable are having a new product on the list. And this is because it's the same object on the heap. So whenever I add something to it, it's been added for every place that has the reference. Clearly, it's the same object. So sometimes, this is not a problem. Maybe it's not a problem at all that you can add or remove products from your list and other places. But an extra problem arises when you start using mutable objects in your collection. In the previous one, we had a collection
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=187)** with only strings on there. So when we made a copy of this collection, so actually, really copying the reference, the strings, they can be changed, but if this is a problem, you will actually have to clone the collection. So in order to protect our products inside our order, we'll actually have to make two modifications. Let me show you which ones. Here is our order class. And the first one we'll have to make, it's the most obvious, actually. We'll have to go inside here. And before we're going to be returning our products, I'm going to just create a little copy of this products list. So I'm going to say list, string, like this. There's actually multiple ways to do this, but I'm just going to do the easy way right now. I'm just going to say, copy equals. And down here, I'm just going to say new ArrayList, and send in our original products like this. So it's going to create a list, a new list, with the product of the old list. And I'm not going to be returning the products, but I'm going to be returning the copy. The second modification I would have to make is that in here, and going to the same thing. So I'm not going to be using the reference I just had, but I'm actually going to say new ArrayList, and then products again. Because else, wherever I've used this constructor, it will still have a reference to my order, which might be something I wouldn't want. So right now, this will actually have quite some implications for our code because if I'm going to be running this code again, you will see that when we create the copy here on line 39, we say, o.getProducts.
>
> **[4:39](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=279)** It's actually a new list. So when I'm later going to be adding to our copy list, it's only adding to the new list. So after the modification, only the list named copy will be changed. Let me show you by running this. And as you can see right now, in the original and a copy in the first half, they both only contain products. But then when we do the modifying trick, the original one stays exactly the same, but the copy one, it gets new products. So this is a problem that's quite easy to solve, but a more complicated problem arises when you start using mutable objects in your collection. In a previous one, you've seen a collection of strings and we copied it and returned it. And this way, we already solved the issue of we're escaping collection reference. And strings, they can be changed, but when we change the string, the original object doesn't change value. So since strings are immutable, we actually don't have any extra risk. But something else is going to happen when we use mutable objects. It's actually not a risk that the collection will be modified because we still create a copy of the collection. But when we actually modify the objects on the collection, they will still be changed. So let me show you this in IntelliJ, by updating our example. So in the order class, I'm going to make a change. I'm going to, instead of have a list with the generic string, create list with the generic product. So our list is going to be containing products right now. So let me just change this. And I'm going to create a list of products in here, like this, and I want to have it changed there.
>
> **[6:16](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=376)** And there we go. It has not changed everywhere. So let me quickly update this. Products. And then this should be product too. Products. Let's see, this one did work. Okay. So clearly, our code is not compiling right now because I'm sending a list of strings attachment, but we're going to be updating that too. So I'll quickly go here. And I'm going to be changing this one to actually be new products that I'm going to be adding on there. And to have a product, I need to have a name. So let's go ahead and create a, well, let's just go ahead to say [[Java]] book. It's a book for smart Java developers, something like this. And it's 75, something, something. Never used double for price, but this is just an example. So don't worry too much about it. And then, our createOrder we still need to update as well. So this is actually going to be a list of products like this. Same for here. Just a little scan through the list of products. And that's going to be products. There we go. And in here, I'm going to be printing the name of the products. All right. So just a few minor changes here. So our copy is actually going to be of product two. And in here, we cannot just add a new product. So I'm going to say new product, and just go ahead and say new products. So for new, and prices. I dunno, 5.0.
>
> **[7:51](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=471)** And there we go. So I've it compiling right now again. So quickly, what did I change? Well, actually, all I did was I updated the code a bit to accept products on our list instead of strings on our list. And the point here is that right now, if I'm going to be running this, you won't see a change because there's still have two different lists, since we are creating a copy. So the original list doesn't change, but the copy list does. But here's the catch. 'Cause right now, I'm having a copy of my list, but I can actually edit the orders on my list. So I'm going to do something else in a modifying bit now. So, okay, I'm going to be adding a new product. That's fine. But I'm also going to be doing, and going to be editing our product that I made on top. And I'm going to be doing so by saying product.gets. And then, I'm just going to get the first one since there's only one on the list. I'm going to say setName. And I'm going to do something else, I'm going to say, this is not Java, but it is something totally different. [[JavaScript]] book, like this. Oh well, then the description won't match anymore, but let's not make life too complicated. And I'm going to be running this again. And this is going to be interesting. So look, so right now, both my original and my copy list have the JavaScript book, which actually doesn't really make sense, right? Because I made a copy before I modified the list. Well, what's happening here? Let me tell you. So you may think right now, wait a minute. I made a clone. And definitely true, but you've only made a shallow clone.
>
> **[9:23](https://www.linkedin.com/learning/java-memory-management-values-and-references/collections-and-escaping-references?u=76281980&t=563)** And this clone or copy of the list is actually creating a new instance of the collection. So there's a new reference for the collection. But the references to all the objects on the collection, they're exactly the same. So when someone modifies an object on the collection, it's changed for the objects everywhere that the hold collection. So in this case, also for the other collection, so in the next video, we'll see how to avoid problems with escaping references of the objects on the collection. And I can tell you how to do this already. We're going to make a deep copy instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (23), [[Java]] (3), [[JavaScript]] (2)
> **CLI Commands:** make (10)
> **Code Identifiers:** createorder (3), processproducts (3), getproducts (2), setname (1)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** intellij (2)
> **Versions:** 5.0 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### [Avoiding escaping collection references](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=0)** - [Instructor] So, we just created a copy to deal with escaping references of collections. But we can also do something different. We can create an unmodifiable collection. This way we are using a special method, actually, one of the special methods, to create a collection that can not be altered. This will solve the problem for collections with immutable objects as a build in [[Java]] solution. This way the collections can not be modified. And if there are immutable objects on there, well, they can not be changed anyways. So there's no problem anymore. But it doesn't solve the escaping references of immutable objects on collections though. Let's have a look at how to create unmodifiable collections in IntelliJ. So, where we created the copy we now just send all the product's objects to a new array list. I'm going to do something different right now. I'm going to be returning an unmodifiable list. And I can use the list or the collection's interface to do this. Let me show you two ways of how to do this. First one, I'm going to say list. And then I'm going to say copyOf, and insert to collection here. Right now I have created an immutable collection. There is actually another way to do it. And let me just write this beneath there. And that is by saying return collections, unmodifiable list, and then insert [[Microsoft Products|products]] here, just like that. So, if I were to do either one of these two ways I have an immutable collection. So, let me try to run this code. And you'll see that something will go wrong. Because we're going to be adding something
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=92)** to this immutable collection which won't work. We'll actually get an exception. And you see the unsupported operation exception. And you also see it's an UnmodifiableCollection.add, which will try an exception, which is just what we wanted. Let me just show you quickly that the other one is doing the same thing. Just go here, comment this one out, turn this one on. Go there, and run it again. And you'll see once more we have the unsupported operation exception. Because it's an immutable collection, and we can not do add. But it doesn't solve our issue with the custom objects or immutable objects and collections just yet. In order to fix that I actually have to create a deep copy. So, I have to create copies of old objects on the collection and all the objects on these objects that are on the collection, et cetera. So we have to go quite some levels deep in some cases. And this is always a custom process. And there's not such an easy example for as the one we just saw. So, let me show you how to do this, or at least what's one way to approach this. The first thing we'll have to do, we'll have to modify our product class. And we're going to be overriding the method's clone in here. I'm going to say @Override. And then I'm going to create the public object clone method like this. And I'm just going to declare the throws clone does not support the exception. Ideally, I could deal with it in a try-catch, but right now I'm just going to say it in the method declaration instead. And actually, we'll have to create a clone, so a copy of a product. And in here we'll have to do some custom stuff.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=185)** Because our product is a custom object, and it has other objects too. Our product actually doesn't have too many interesting things. It only has a string, a string, and a double. So this is going to be an easy one. But if our product was having some mutable objects we would have to create clones of these as well. So, for now this is easy. Let's just start with a product and say products. Clone, like this, and we set it to null first. And then I'm just going to be cloning it using the super clone, which is in the object class. I'm going to say product, and then super clone like this. And right now I would have to override all the mutable properties. So, let me just write this here to make it clear. Override all mutable properties. In this case, there are none. All right, and then when this is all done, when you have overwritten all the mutable properties with custom clones of them, we can actually return our product clones like this. So, right now we only have to do some minor changes. We need to adjust our order to actually when we say get products, also clone new products. We could actually also do the very same thing in the constructor, but I'm not going to be doing this right now. In here I'm going to create deep copy. So, let me just say deep copy. And I'm going to be having a list with type products, like this. I'm just going to call it copy again.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=278)** ArrayList of it, there we go. And then I'm just going to create a for each here. I'm going to say for every product in our products list we are going to be adding a clone to our copy. So, products, and then I'm going to say p.clone. And right now we still have to cast this to a product. Because the overrides actually have an object as the return type. So I'm going to be casting this to our product. And then it's fine. So, if I'm going to be running this again, we should not get a [[JavaScript]] book. And right now we still have some compilation issues. Because I'm not dealing with the exception that it may throw. So I'm just going to be quickly adding this in a try-catch block, which I still think is something I should have done earlier. But let's just leave this for now. Let's not make this about exceptions instead. Let's just say clone not supported, which is going to be printing the StackTrace if that happens, like this. All right, there's actually one more thing we'll have to do. And this is actually related to our cloning. Because in order to be able to have the clone method called you'll have to implement cloneable. So, in here we have to say implement cloneable like this. And if you don't say implement cloneable it will throw the exception clone not supported. So, right now, if I'm going to be running this we are instead of having our references copied from the one list to the other, we are creating new products.
>
> **[6:11](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-collection-references?u=76281980&t=371)** And we make deep copies, so this should actually only have one JavaScript book in the list once we're done. So, let's see if this is indeed the case. And as you can see right now, only the original JavaScript book has been changed. And the copy still contains a Java book. So, right now we can conclude that our deep copy is working and that we have successfully managed to not have an escaping reference via our mutable object on our collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[JavaScript]] (3), [[Java]] (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** copyof (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Example custom objects: References on the loose](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=0)** - [Instructor] So at this point, we have seen escaping references in more detail for collections, and this is a very common way to reference escape, but the problem is that all objects that are returned with any precautions have to reference escaping. This is a potential issue for every mutable object. For immutable objects, you don't need to worry about it. They can be accessed from outside, but they cannot be modified anyways. For mutable objects, this is a problem. And whenever an object is extra sensitive or extra accessible, you'll have to create deep copy before returning the object. Let's have a look at an escaping reference example in IntelliJ. So once more, I've created a little demo that is super chaotic and nothing like real production code, but it will demonstrate how references escape in a bit more detail. So, what's going on here? In our main methods, we are creating a user with sensitive object, and we set the secret code, and our sensitive object to 1, 2, 3, 4, 5, 6, right? There we created a user, create the same product list as we did last time, I'm creating an order again. Then we sent the order, and let's have look at our set order method. It looks perfectly fine. This is sending ordered prints a date, prints old [[Microsoft Products|products]], but then it actually also changed as the sensitive object, which is clearly where things do, but we're sending our objects around. And in this case, it's in the same class, but we're not sure where we're sending it to. So, let's just pretend that it's on bad outside code, and this is changing or sensitive objects. So it's saying grab the order, gets a user and set the sensitive object to be new sensitive objects.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/example-custom-objects-references-on-the-loose?u=76281980&t=93)** So, it's replacing sensitive object for user. All right, then after we have sent the order, I am actually just printing the secret code to show to you that art center object has been overwritten. So, let's run this. And as you can see, it prints zero as a last line. And this means that or sensitive object has been overwritten. And this is dangerous because it's on the original user object, since we are just returning the user reference. And the user has the sensitive object reference. In order to fix this, they'll have to create a deep copy, and we'll see how to do so in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Avoiding escaping references](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=0)** - [Instructor] So how to fix these escaping references? Well, in order to start, we'll need to make user cloneable, so we say influence clonenable and then, below, we are actually overriding the clone function. And actually you always have to override the clone function. Also, if you don't want to modify it at all and just want to super of clone, because clones protect it in the optic class. So you'll have to override it, even if you're not going to do anything fancy, but we need to do something special here. In the previous example, we didn't have any mutable properties, but our user it has a mutable property and the mutable property is our sensitive object. So the clone management is using this super dot clone and then, for all the mutual properties, it's going to create a clone as well. And the clone is doing nothing more than creating a shallow copy. So you have to do this for every object as mutable objects itself, because then the shallow copy is not enough. Luckily for us, it ends there because when we have the sensitive object, it only has in property. So here we can just suffice with support of the clone. And this is fine. So when we go any clone super, we set the sensitive object to a clone as well, and then we return the use of cone, but then we still need to call this clone whenever we are going to be actually using it. So right now, even now that this chlorine is, has been implemented, this is still going to have zero because we are still returning the reference. So in order to fix this, we'll have to change our order class or get user methods in here. It's not just returning the user, which is not what we want.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=92)** So instead, we're going to be modifying this method a little bit to right now, not return to use it, but return a clone of the user. And please mind is strongly clone sports exception. So I have to rapidly try catch again. So I'm going to say return and then just say user to clone and also cost it to a user, because he's actually returning to the objects that we go catch deep clone, non supported exception, print secretaries, and then return. No, when it didn't work like this, right? So right now I'm returning the clone. And at this point in our demo where I'm getting the user, I'm getting a clone right now. So not getting the actual user object. And even though I'm saying, get user on both the same order object is creating a clone twice. So it's going to be different clone. So both of my get users on line 18 and line 24, they are different because these are different clones, but it's way 1, 2, 3, 4, 5, 6 was still be printed. So let me run this I'll show you it's right now, instead of zero is having an original ID because we are using clones and we are protecting a references from escaping and we cannot modify them from outside. So this is a good way to actually deal with escaping references. But as you can understand, this can get quite messy, especially if you have objects that have lots of beautiful objects that have lots of mutable objects, et cetera, actually, a bunch of libraries that can help you out there. But none of these are perfect. Creating deep clones is still a bit of a messy thing
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/avoiding-escaping-references?u=76281980&t=185)** to do a might as well did manually. It's not a bad coding practice.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Fixing an escaping reference](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-fixing-an-escaping-reference?u=76281980)


### 4. Quick Peek at Next Steps

[↑ Back to Table of Contents](#table-of-contents)

#### [Garbage collection](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=0)** - [Instructor] I have mentioned garbage collection quite a few times already. When objects are created in the heap memory they start taking up space, clearly. And at some point we no longer need the objects in our heap memory, and they can be removed. Garbage collection is the removal process of objects on the heap. So, how to start the garbage collector? It's actually quite an elaborate topic that's definitely worth understanding at a very detailed level. But in this course we'll only be covering it briefly. So, you may wonder, when does garbage collection take place? Well, you don't know. Although they don't typically say, okay, but how can I evoke it? Well, you could call system.GC. This is a method. This is merely a suggestion to the JVM that it should start the garbage collection process. And actually, you can not really force the JVM to start garbage collection. So, this is not something that you get to decide as a developer. The JVM will decide when garbage collection should start. The good news is that there are quite some options for garbage collection that you can specify on startup. And these options are pretty neat and working well. Garbage collection cleans up the heap memory. And the JVM will make sure that it doesn't run out of memory. Well, this isn't always possible though. Because now it comes to key to garbage collection. Only objects that no longer have a connection to the stack can be removed by the garbage collector. And this can for example happen when the variable holding the object reference got replaced by another object reference. Or maybe it even got replaced by zeros. For example, when I'm done with a user objects, or it can be set to null. For example, when I'm done with the user object
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-values-and-references/garbage-collection?u=76281980&t=93)** I can set it to user equals null. And then there's no longer a connection between my user variable and the object on the heap. When an object is not having anything referring to it on the stack it will become ready for garbage collection. So, let's look at a visualization of this. So, here's my heap. And in my heap memory I have a bunch of objects. As you can see I have some ints. I have a string pool. I have a separate string. And I have two person objects. All right, let's have a look at my stack. Now, you can see that on my stack I have a string list in my string pool. And, actually, I also have a person object list. So, if I compare this heap to my previous heap there's actually two objects that are ready for garbage collection, the person and these strings that have no connection to the stack. These items are ineligible for garbage collection. One side note on this guard collection process though, this doesn't need to be in direct connection to the stack. Here's an example of indirect relations. We have the person reference on the stack. And it's pointing the person reference on the heap. This person object on the heap is pointed to another object on the heap. In this way this other object, it has no direct relation to the stack, but it has an indirect relation which will not make it eligible for garbage collection yet. There must be no way to get to the object from the stack. And in this case there is, namely by the person object. So, at this point, that's actually all I want to share about the garbage collection process. There's a lot more to it. But you need to know these basics about the garbage collection process that you'll have to know in order to understand how D allocation takes place.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (4)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [JVM tuning](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/jvm-tuning?u=76281980&t=0)** - [Instructor] The JVM runs in a certain way and this way can be adjusted with JVM tuning. This requires specifying how the JVM should start. When starting a [[Java]] application, the JVM can be given certain options and parameters to do so. It can optimize garbage collection, change heap memory. You can optimize metaspace, which is the previous PermGen memory. This is actually where all the static variables and static methods are being stored. This is special reserved bit of the memory, which you'll see in more detail with more advanced Java [[Memory Management]] topics. And with JVM tuning, you can also dump the heap memory on the OutOfMemoryError. So this all sounds great, but JVM cheating is not as easy as it sounds, and this will be elaborated upon in a later course. But for now just know what can be done and don't worry too much about how it can be done. Tuning typically focuses on three pillars, memory use, latency and throughput. So when to use JVM tuning? Well, whenever the performance of the JVM needs to be increased. Sometimes it's easier and more useful to improve the [[Hardware]]. And when performance can not be done with better programming, JVM tuning might come in as a good fix. But JVN tuning won't fix memory leaks, for example, and it definitely can not make up for poor application design and poor coding. Whenever these issues exist in your application, first, fix them and then come back to the JVM tuning when no other performance improvement can be done anymore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Memory Management]] (1), [[Hardware]] (1)
> **Env Vars:** jvm (10), jvn (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Spotting and avoiding memory leaks](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=0)** - [Instructor] Memory leak is a resource leak caused by incorrect management of the memory allocation and de-allocation. It means that memory gets allocated, but it doesn't get de-allocated when it should be. This leads to more and more and more memory being in use, the application slows down gradually, and eventually runs out of memory, assuming that no more memory can added in the end. You may wonder how does is possible since I've just told you about garbage collection and that it's such a beautiful GPM and process. Well, if you remember correctly, the garbage collector can only free up memory, it doesn't have relation with the stack anymore, so when we are talking about memory leaks, we're talking about objects, having unnecessary relations with the stack. Memory leaks block access to resources, and increase the application usage of memory. This decreases the performance of the application and when there's no memory left, that application will die throwing an out of memory error. There are a few common errors that can lead to memory leaks. We're not going to be covering them in detail here, but to give you some idea, the overuse of static variables can be a problem. Think of a static list for example, all the objects in this list will have to live for the lifetime of the application since the list is static. If the list is growing, so it's the space it's taking up on the heap. Another common one is resources that are kept open, so just streams, file readers, database connections, et cetera. If this isn't done well, this can result in a memory leak too. A less known one is the use of poorly implemented custom objects, as keys, and HashMaps. So say we have some sort of custom object and it doesn't have a proper hashcode and equals method implemented. This can get very tough on a memory
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=92)** when it's added to a HashMap, say that we want to use put for updating it a lot in a loop, and when we do this, since the equals and hashcode are poorly implemented, our HashMap cannot determine that it has the object already because the equals and hashcode that it uses in order to do this are poorly implemented, and so it keeps on adding more and more and more objects on the heap as keys for our HashMap, and this will result in a memory leak as well. There are many, many other causes for memory leaks, they all result into the same symptoms though, the performing of the application will be decreasing over time, and it can go very slow actually. For example, you can need to restart the app every few days or weeks because the memory is getting full slowly, and if nothing happens, so if you wouldn't restart, the application would crash what an out of memory error. The good news is that we have tooling to detect memory leaks, and there are different tools out there that can do this, and for example, we have [[Java]] VisualVM, we have g:Profiler, YourKit, and many more. I'm going to show you VisualVM, but before I do so, I am going to show you this code sample again. So we have the ExampleOutofMemory class here, and it's going to run out of memory. Well, that's no surprise, it's in the title, right? But what's happening here, again, we have this map we created on line nine and then in an endless loop line, 12 to 14, we keep on adding random objects to this map. So we keep on running objects to the map, there is a connection from the map to the heap, so all the objects that are on the map, they have a relation with the stack and they will be kept alive on the heap. Eventually we'll run out of memory, and we'll get the out of memory error.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=185)** Okay, I was going to show you VisualVM, right? Yes, let me first run this and I can actually show you what's going on in VisualVM. So here we're having VisualVM and we see our process. Let me open it. I'm not going to be explaining everything of VisualVM at the moment, I just want to show you the part where we can inspect the memory. So I'm going to click on Monitor, and here you'll see what's going on. So it's been running for a while already because it was a bit slow to respond, but we see some things here, we see four graphs happening, we see the CPU usage on the upper left, and we see a heap on the upper right, and this one is most interesting for now. We have the classes and the class loading stuff on the bottom, and we also have the threads on the bottom, not too interesting for now. Look at his heap. You can see that the size of the heap just increased, it's orange part, and why did it increase? Well, it was about to get full. I can actually say perform garbage collection, I can click on that, but it's trying to do it already, very badly, as you can see on the other side of the screen. It does the garbage collection every now and then, but it doesn't really help because our objects, they need to be on the heap because they have a connection to the stack, and as you can see, our memory is slowly, slowly getting full, and the max memory is eight and a half gigabytes here, and it won't grow any further. It is at its maximum capacity already, so soon it'll run out of memory, and when it does run out of memory, you will see the application will crash and then it can actually release all the memory, so it will go down really fast after the crash, I've switched to the mode that we can actually see both here.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-values-and-references/spotting-and-avoiding-memory-leaks?u=76281980&t=278)** So you can see the application is still running, but as soon as it crashes and you get the out of memory error in our console of IntelliJ you can actually also see the memory going down because the application is done at that point. So this last bit, that commonly takes a while because well, the application is trying very badly to save this, and this is also the slow performance I was talking about because right now, the application is busy doing other stuff, so if there would be user requests coming in right now, even though the application hasn't crashed, it has now, it would be very, very slow if responding at all. Notice you can see it as crashed and then the used heap, went down immediately. So tooling like this is crucial for seeing what's going on. It can actually also be used to detect other sorts of problems, such as threading problems, you can inspect the heap dump, but it's all enough for now. It's super interesting, but it's actually for later. All right, so that's all I want to tell about memory leaks here. They're a very, very interesting topic, and as you can hear, I'm quite enthusiastic about them, but more on memory leaks for a later time. Right now, these are more than enough to grasp the basic concepts of Java [[Memory Management]], the values and the references.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Memory Management]] (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** gpm (1), cpu (1)
> **UI Navigation:** click on (2)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Fix the memory leak](https://www.linkedin.com/learning/java-memory-management-values-and-references/solution-fix-the-memory-leak?u=76281980)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Java memory management](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-values-and-references/next-steps-with-java-memory-management?u=76281980&t=0)** - [Maaike] All right, you've done it. You've got the basics of [[Memory Management]] down. Let's have a look at some potential next topics for you. First one would be JVM tuning, then definitely also dive a bit more into memory leaks and how the garbage collection is actually working. Also very interesting is monitoring and testing. And of course, other advanced [[Java]] topics, such as designed patterns and concurrency. Here are some great follow-up courses I've selected for you. First of all, more in Java Memory Management, but also very interesting Parallel and [[Concurrent Programming]] with Java 1, Advanced Java Programming, and also the [[Programming Foundations]], dealing with [[Design Patterns]]. Thank you so much for taking this course. Let's connect on [[LinkedIn]]. Here you can find my profile. Good luck on your Java journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Memory Management]] (2), [[Concurrent Programming]] (1), [[Programming Foundations]] (1), [[Design Patterns]] (1)
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