---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks
url: "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks"
duration_minutes: 70
duration: 1h 10m
level: Advanced
updated: 3/4/2024
learners: 25892
skills:
  - Memory Management
  - Java
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHvZioZAyi2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709598772540?e=2147483647&amp;v=beta&amp;t=lhLwKncyzbWP7MI2LWsami98aoYuVaU5Dir0DSqYz20"
linkedin_topic: Data Science
learning_paths:
  - '[Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)'
prev_courses:
  - '[Java Memory Management- Values and References](Java%20Memory%20Management-%20Values%20and%20References.md)'
next_courses:
  - '[Java Exception Handling](Java%20Exception%20Handling.md)'
path_nav: '[{"path":"Getting Started as a Java Developer","position":7,"total":10,"prev":"Java Memory Management- Values and References","next":"Java Exception Handling"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Memory%20Management-%20Garbage%20Collection%2C%20JVM%20Tuning%2C%20and%20Spotting%20Memory%20Leaks.md)

![Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks](https://media.licdn.com/dms/image/v2/D560DAQHvZioZAyi2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709598772540?e=2147483647&amp;v=beta&amp;t=lhLwKncyzbWP7MI2LWsami98aoYuVaU5Dir0DSqYz20)

# Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks

> In this course, Java developer Maaike van Putten takes an in-depth look at one of the toughest topics in Java, memory management. Maaike starts with garbage collection, from an overview of the basics, to the different phases of garbage collection, to the varying implementations. She then details the facets of tuning the Java virtual machine, including how and why to choose the different options fo

> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks) | 1h 10m | Advanced | 26K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Java memory management](#java-memory-management)
  - [What you need to know](#what-you-need-to-know)
  - [Explore the code challenge enviornment](#explore-the-code-challenge-enviornment)
- [**1. Garbage Collection**](#1-garbage-collection) (9 videos)
  - [Introduction to the garbage collector](#introduction-to-the-garbage-collector)
  - [Eligible for garbage collection](#eligible-for-garbage-collection)
  - [Garbage collection phase: Marking](#garbage-collection-phase-marking)
  - [Garbage collection phase: Sweeping](#garbage-collection-phase-sweeping)
  - [Different generations on the heap](#different-generations-on-the-heap)
  - [Generational garbage collection](#generational-garbage-collection)
  - [Different garbage collection implementations](#different-garbage-collection-implementations)
  - [Monitoring garbage collection](#monitoring-garbage-collection)
  - [Solution: Eligible for garbage collection](#solution-eligible-for-garbage-collection)
- [**2. JVM Tuning**](#2-jvm-tuning) (5 videos)
  - [What is JVM tuning?](#what-is-jvm-tuning)
  - [Getting JVM metrics](#getting-jvm-metrics)
  - [Heap size and heap dumps](#heap-size-and-heap-dumps)
  - [MetaSpace size](#metaspace-size)
  - [Garbage collection tuning](#garbage-collection-tuning)
- [**3. Memory Leaks**](#3-memory-leaks) (4 videos)
  - [What are memory leaks?](#what-are-memory-leaks)
  - [Spotting memory leaks](#spotting-memory-leaks)
  - [Avoiding and solving memory leaks](#avoiding-and-solving-memory-leaks)
  - [Solution: Finding and fixing a memory leak](#solution-finding-and-fixing-a-memory-leak)
- [**Conclusion**](#conclusion) (1 videos)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Java memory management](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=0)** - [Instructor] Let's talk about something that's not necessarily a secret, but treated as one. It also happens to be kind of my passion. One of the toughest topics in [Java](../../Skills/Software%20Development/Java.md) is how the JVM deals with the memory. This course helps you to truly understand the Java memory and garbage collection process. (indistinct) in on the phrases of garbage collection, the various implementations of the garbage collector, and we'll also [Zoom](../../Skills/Software%20Development/Zoom.md) in on the different parts of the heap. We'll also dive into the non-heap space. After that, we'll talk about tuning the JVM for a bit. You'll learn how to adjust the heap size and meta space and how to modify the options for the garbage collector. We'll end this course with a situation that we preferably want to avoid, or at least spot as early as possible. Memory leaks. My name is Maaike, and I'm a Java developer and trainer. In this course, I'm going to share with you all the information that I've gathered over the last few years. Are you ready to dive into the Java dumpster with me?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** jvm (2)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before we get started to put this next step in [Memory Management](../../Skills/Web%20Development/Memory%20Management.md), let's first make sure that this is the course for you. In order to be able to follow along, you'll have to know the basics of memory management in [Java](../../Skills/Software%20Development/Java.md). If you're not familiar with your memory management yet please check out the first part of this series, [Java Memory Management- Values and References](Java%20Memory%20Management-%20Values%20and%20References.md). If you already have the basics of memory management down, then let's get moving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (5), [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Explore the code challenge enviornment](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas: instructions in the top left, a code editor for your answers in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left. You can use these direct handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include the description of the challenge and the challenge's parameters and desired result. Parameters are values that will be passed into your code and they have to be of particular data type. Return value also has to be of a particular data type, and you also see that noted in the instructions. It's possible that some questions don't require any input or won't return the results. The constraints section has useful information about parameters that will be passed in. The examples share different parameter values and what result will be returned for each of those test cases.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=93)** Create your answer in the top right code editor. There are comments in the starting code showing where to put your solution. When you click Test my code, you'll see a message indicating whether your code returned the correct result. If your code isn't successful, you can ask for help.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=117)** The showExpectedResult and showHints variables determine when you see the expected result and any hints. Change them to a value of True to control the outputs. The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Garbage Collection

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the garbage collector](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=0)** - [Instructor] So we have the stack memory and the heap memory in [Java](../../Skills/Software%20Development/Java.md). On the stack, we store primitive values and references to objects. On the heap, we store the actual objects. These objects on the heap, they contain primitive values and references to other objects on the heap. The stack memory gets cleaned up automatically. Whenever a certain method is done executing, the values and variables for this method are forgotten since there is no way back to the executing of this method and there's no point in keeping them for any longer. But what about the heap memory? The heap memory doesn't get cleaned up automatically when a method is done because the object on the heap might still be needed by another method which is still on the stack. So the heap memory will be alive longer than stack memory. In Java, you cannot manually clean up the heap memory. This cleaning of the heap memory is done by a JVM process, the garbage collector. The garbage collector frees up the heap memory so that it comes available again to the application. This is not for all languages the case. For example in C, you'll have to free memory as a developer yourself, and that's working just fine when it's done well. Having the JVM do this with the garbage collection process actually eliminates a lot of common problems and mistakes by developers. First of all, the dangling pointer bugs can be avoided. This is when the developer did free up the memory but the pointer is still pointing to the old place where a certain variable was stored. You can imagine that this can lead to unpredictable events such as the points of returning a surprise value when the memory location has been reassigned to another value.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=92)** Another common problem that Java developers don't run into is the bug of freeing up a memory region twice. This can especially be a problem when it has been reassigned to some other value that should not be yet cleaned up yet and then it does get freed up for the second time, the deleting and find was still necessary. This is not a problem for Java developers. Thank you, garbage collector. And lastly, all sorts of memory leaks by not freeing up the memory that should be freed up cannot be reached any more because the pointers are gone. So for example, when I delete this pointer and the object is still on the heap we cannot no longer access this object and we cannot free up this memory region. That's a problem. So by now you must love this thing called garbage collector, right? But there are many many options for the garbage collector out there. Making the wrong decision about what garbage collector to use can harm the performance of your application and even leads to out of memory errors. This is why it's very, very beneficial to understand the process of garbage collection well, so that you can use the best configurations for your application. Let's first see what is considered garbage in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Analogies:** for example (2), imagine (1), such as (1)
> **Env Vars:** jvm (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Eligible for garbage collection](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=0)** - [Instructor] So the garbage collector frees up memory on the heap, but how does it know what to collect? Once an object no longer has a reference to the stack, it becomes eligible for garbage collection. Phrased differently, the garbage collector considers its ready for removal. In this example, you can actually see the person P, changing from a reference to the stack to the value null. And this means that our person object on the heap no longer has reference to the stack. In other words, it's becoming eligible for garbage collection. And this is not only for direct connection to the stack but also for indirection connection to the stack via other objects, for example. So we can see it happening here because we have this pointer to the integer, year of birth, but that's the only pointer is happening from the person object. The person object is no longer connected to the stack and therefore it's also eligible for garbage collection. So that an object is ready for garbage collection, doesn't mean it gets removed from the heap right away. It's up to the JVM to decide when the garbage collection processes will take place. You cannot influence this with the [Java](../../Skills/Software%20Development/Java.md) code. You may have seen that you can actually suggest to Java to start a garbage collection with system.gc but it doesn't guarantee anything. It's merely a suggestion to the JVM to perhaps start garbage collection. So when does an object get removed? Well, there are different implementations and strategies for the garbage collection and you'll learn more on this later in the chapter. But it all consist of two types of steps,
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=94)** marking and sweeping. In the next video, we'll deal with the marking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Env Vars:** jvm (2)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** means that (1), in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Garbage collection phase: Marking](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=0)** - [Narrator] So imagine we're having a heap full of objects that leave out the [Java](../../Skills/Software%20Development/Java.md) garbage collector for a while here, and try to think like garbage collectors ourselves. So how are we going to find out which objects don't have a connection to the stack? Well, here's the stack, and for now for just a second, pause this video and pretend to be the garbage collector. How to find out which ones don't have a connection. Frankly, we cannot do this in one step. We'll first have to sort out which ones do have a connection to the stack, and if we have identified all the reference on the stack, we know which objects have a connection to the stack. Next, we're going to see what references of these objects are, and also these objects have reference to the stack, indirectly. We repeat this until we have checked all the nested references, and then we know what objects have a connection to the stack. And with that knowledge we also know what objects don't have a connection to the stack. Namely, all the other objects. The garbage collector is doing something very similar. What it's doing exactly depends on the specific implementation of the garbage collector, but it always needs to do some sort of marking of the live objects so that it knows that the unmarked objects can be removed. This marking can happen in different ways. A map with memory address, keys, and values of the state of the objects would for example be approached that is common for marking objects. This map with the marking does take memory itself as well. In the olden days, there was actually a different approach. All objects would hold a counter, and this counter showed how often they were referenced.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=94)** When a reference was removed, the counter would be decremented, and when reference was added, the count would be incremented. When the count was zero, the object could be removed. At first, it probably sounds like a very clever and more efficient way than marking, but it was one problem, cyclic references. Two objects that hold a reference to each other, but don't have a connection to the stack would never be removed because their counter would never get to zero. These so called islands of isolation, object 8 and object 9 on this slide here, would live necessarily on the heap forever. And this is why the garbage collection happens with marking right now. The removing of the objects that are not marked happens in the next phase, sweeping. In the next video we'll have a closer look at the sweeping phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [narrator] (1)

#### [Garbage collection phase: Sweeping](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=0)** - [Instructor] After the marking of the life objects, it's time to delete the leftover objects that were not marked. This deletion is called sweeping in the garbage collection slang. And of course it wouldn't be fun if we only had one way of sweeping. Instead we have three options for sweeping, normal sweeping, sweeping with compacting and sweeping with copying. Let's start out normal. So let's look at this memory here and say that these bits, they are not marked and so they can be deleted. This is what happens after deletion. It's the old memory but with the available blocks of free space in between. So if we want to store a new bit like this one, the JVM is going to have a look at heap and it's going to figure out that it can be stored over there like this. But say, we'd like to store a bit of a bigger one. Then it cannot fit in between the gaps. So it can be stored at the end over there like this. And say, we want to store an even bigger value. And technically there would be enough space for this value, but it cannot fit at the end. So this will actually result in not enough space available and eventually an out of memory error. So this could have been avoided if we would've used the second option for sweeping, sweeping with compacting. So here we have a memory again and again, these bits they are not marked and thus will be swept. We don't just delete these bits and leave the gaps, but we'll apply compacting so that after compacting, the memory looks like this. And if we then want to store a bigger value now, we do have a memory block large enough available
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=94)** and we don't get the out memory error. There's the very similar strategy to sweeping with compacting available. And that is actually sweeping with copying. So here is a memory again, but this time we're having an extra piece of memory since we're going to copy. These are the bits that are not marked and thus can be removed, but instead of removing them and then compacting the memory we're just going to be copying the marked elements to the other memory region, and then delete the full block in the first memory region. You may think that this sweeping with compacting and sweeping with copying sounds a lot better than just sweeping without copying or compacting. So why choose the one or the other? Well, the key here is performance and memory usage. Clearly the sweeping with copying might be ideal but it's taking up more memory. And something similar is true for sweeping with compacting. It might be ideal, but it does require an extra step. We'll dive into the different implementations of the garbage collector that use or combine these strategies soon enough. Let's now first have look at a very important concept we didn't discuss yet. The different generations on the heap memory.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### [Different generations on the heap](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=0)** - [Instructor] [Java](../../Skills/Software%20Development/Java.md) actually distinguishes different types of heap memory. And this is relevant for the garbage collection [Algorithms](../../Skills/Software%20Development/Algorithms.md) Java splits up the heap memory and so it can manage it in a more efficient way. We have the young generation and the old generation on heap. And even though it's technically non-heap memory, we also have one other section. And this used to be called the permanent generation, but since Java 8, this actually has been replaced by the metaspace. So first, the young generation. The idea is that most Java objects don't need to live a long life and that they will be part of the young generation only. This is the part of the memory where new objects are created, so it must support very fast allocation of memory. This young memory itself is actually split up into two parts, the eden space and the survivor space. New objects are created in the eden space, and as soon as a certain threshold is reached, the garbage collection starts and moves objects that are still alive to the survivor space, cleaning up the eden space. When garbage selection for the survivor space comes by, objects that are still reachable in the young generation on the survivor space are moved to the old generation and they're probably going to be there for a while. The others are being removed. The copying of the objects from the young generation to the old generation is called scavenging. And the collectors doing that are called scavengers as a result. So this all generation contains objects that have been discovered from the young generation. And having survived this round of garbage collection is typically an indicator that the objects
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=92)** are going to be there for a while. This old generation is also quality tenured space. So let's have a look at this in action. We have our stack memory, we have two reference on it still. And in our eden space, we of five objects. There is two live objects and three that could be removed. So when the garbage collection comes by, it's going to be copying the live objects to the survivor space and then deleting all the elements in eden space that don't have a connection to the stack. Then when the garbage collection comes by again, we see that some reference on the stack is lost and we only have one live object in the survivor space. When the garbage collection comes by, it's going to be moving the other reference to the old generation and the one that doesn't have connection to the stack is going to be deleted. And once more, the old generation is also called the tenured space. This tenured space typically requires a different strategy for garbage collection since copying all the objects again without that many unreachable objects, since most of them are going to be living a long time, it's an expensive operation. So sometimes this approach is chosen nonetheless since the copying does leave big blocks of memory which allows quicker allocation. And this can be an advantage depending on the specific application, but often this is not the chosen strategy for the old generation. So let's have a look at this relevant part of memory that was non-heap, that I said was called a metaspace. Actually, if you're going to be looking at this app, you'll find that it's very often still called the permanent generation or the permanent gen. One of the differences between a permanent generation
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=186)** before Java 8 and the metaspace as of J8 is that the metaspace handles allocation differently and garbage collection is handled very differently as well. So what is this metaspace for this? The metaspace is actually storing the classes [Metadata](../../Skills/Web%20Development/Metadata.md) such as the klass structure, and also the methods of the classes, constants, annotations and all sorts of optimizations are stored. So pretty much anything that's needed for the GVM to work with the Java classes, metadata pretty much. This metaspace actually gets allocated when the classes are loaded. Loading classes means that the GVM prepares the runtime representation of a class, and when a class loader is unloaded, the bit of metaspace memory that was used by that class gets released. And this doesn't happen before all the classes loaded by that class loader are no longer needed. That might sound a bit vague, let's look at an example. So we're having some object of type O, and we're having a reference to this in our eden space, which means that we'll also have the metadata of O in our metaspace. Then when we have another object of O, nothing needs to happen in the metaspace because we do have the metadata of O already. But when we get an object of type P, we do need the metadata of type P as well. So then at some point the references of our objects, they might actually get removed. So let's start with just removing one, the first one. So we lost one O reference. This does not influence the metadata on the metaspace since we still have another O object and a P object. So the objects on the metaspace, there's still needed,
>
> **[4:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=281)** and they're still alive. But what happens when we actually lose one more? So now we lost the other O reference. And that means that we no longer need the metadata of our O anymore. So when the garbage collection is going to come by and it's going to delete the O objects from the heap, it can also then delete the object from the metaspace. So please be aware here that as long as the objects are still in the heap, even though they're not alive, we do need to metadata in the metaspace. And then now we only have some P left. So as soon as that reference gets lost, we would also be able to remove that from the metaspace. I actually already said that the metaspace works differently for garbage collection and there's only two triggers that can actually start a garbage collection on the metaspace. The first one is when the metaspace gets allocated and it grows beyond the threshold of the GVM, it'll try to free up memory first. This is a special threshold that'll see later. The second trigger is when the metaspace runs out of memory. It'll try to fix this by running garbage collection on the metaspace. So these are the only two events that will trigger garbage collection on the metaspace. The metaspace architecture consists of different layers itself as well, but that's beyond the scope of this course. We now have enough knowledge about the young and old generation and metaspace to have a look at generational garbage collection in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (8), [Java](../../Skills/Software%20Development/Java.md) (6), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** means that (3), is called (1), is a  (1)
> **Env Vars:** gvm (3)
> **Versions:** java 8 (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)

#### [Generational garbage collection](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=0)** - [Instructor] Imagine that you have a [Java](../../Skills/Software%20Development/Java.md) application running. In order to mark every live object, you'd have to pause the application completely. Marking is an expensive process for this reason. You may wonder right now, why does the application need to be paused? Well, imagine that you have to check all the objects on the stack. There can actually be objects being created afterwards if you don't pause the application. And if that happens, these later created objects, they're not marked on the heap and thus they will be eligible for garbage collection while they're still needed and in use. I mean, they've been newly created. This is why you would have to pause the application. And as you can imagine, that will be very expensive and horrible for the performance of your application. This strategy for garbage collection is actually called Stop the World. The opposite of this is a congruent collector that can run alongside the application. How this is working, it's using a very clever mechanism and we'll see it in the next video. But for now, just know that there are alternatives out there. So the Generational Garbage Collector is not collecting the full memory at once but, for example, only going to be focusing on the young generation. This works well for applications in which most objects die young. This is typically done with a copy strategy. And the decision of when to promote objects from young to old is of major importance for the performance of your application here. I'm not saying there's a good choice or a bad choice. It truly depends on your applications. If you let the objects live in the young generation for a bit longer, it helps them to have died and never to make it to the old generation.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=93)** But if you make this time too long, the young generation will take up a lot of space and can run out of memory. Also, if you left them in the young generation for too long, the promoting to the old generation of all the objects that you have made, since it was very long, it takes really long as well. So making the right choice is critical here. These generational collectors typically use a so-called remembered set. Simply put, this remembered set, keeps all the references from objects to the young generation via the old generation to the stack. And this helps the collector in that there is no scanning necessary or else the indirect reference to the stack via the old generation would be missed when garbage was collected to only the young generation. So this helps in that there is no scanning necessary of the old generation since references are in the Remembered Set. These generational collectors typically use different strategy for the young and the old generation. So the young generation could be a stuff the world collector had copied the entire set of life objects to the old generation. And the old generation could use mark sweep compact collector, for example. Either stop the worlds congruent or any of the other options that are out there. What options, you may wonder? Well, we'll look into the different implementations of the garbage collectors in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Analogies:** imagine (3), for example (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Different garbage collection implementations](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=0)** - [Instructor] The standard GVM has five types of garbage collectors. There are some other ones out there such as IBMs, under source garbage collector. And what you'll do, you can quite easily understand after earning these five built-in garbage collectors. So the five ones are the serial garbage collector, the parallel garbage collector, the concurrent mark and sweep garbage collector, the garbage-first garbage collector and the Z garbage collector. So let's just start with the first one. The serial garbage collector uses the mark and sweep for the young generation and the mark sweep compact for the old generation. This garbage collector is running on a single thread and it's stop-the-world implemented. Meaning that the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the application is frozen until the garbage collection is done doing a full cycle. It is fine for small programs, but due to the stop-the-world, it's not what is typically chosen for larger programs. Then we also have the parallel garbage collector. And it's using the mark and copy for the young generation and also the mark sweep and compact for the old generation. Well, this might sound very familiar after having a seen the serial garbage collector, but there's difference here. It's not running on a single thread, but it's running on multiple threads, splitting up the marking, copying and compacting phase. It has still stopped the world, but due to the multiple threads, the world needs to be stopped for a short amount of time. This is a fine option for a multiple core machine, on a single core machine, two might as well use the serial garbage collector due to the cost of managing the multiple threads on the single core. So it's not really processing a parallel on the single core machine anyways.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=94)** So then we also have to concurrent mark sweep which is actually in upgrade from the previous one because it's still doing mark and copy stop-the-world for the young generation, but for the old generation, it's doing the mark sweep and compact, mostly concurrent. Concurrent is different from parallel since it doesn't require the application to stop. It's doing it concurrently next to the application. So it's not just pausing until it's done, but, it's concurrent with the execution of the application and running on multiple threads. This means that the application is running at the same time which makes it very, very different from parallel. But there's downside here, this will only work when it's running on the system that supports this because it's a bit heavier. So it's usually mark and copy with stop the world for the young generation, mostly concurrent mark and suite for the old generation and with mostly concurrent we mean that, it's preferring concurrent but sometimes whenever it's necessary, it'll use stop-the-world instead. So that sounds like wide up right, but the garbage first garbage collector introduced in J7 is even improvement for the CMS garbage collector. So what this one does is actually defining the heap in small regions and the garbage first collector is parallel, concurrent, and incrementally compacting. It aims for a very low pause of the application. And thanks to this division of the heap in the smaller regions, this is actually possible. So this is much smaller regions than just the young and old generations, but these smaller bits of heap they are actually marked with the specific memory region. So the garbage first gives track of the amount of live and death objects per memory segment
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=188)** and the segments with the most that objects are collected first, hence the name garbage first collector. The compacting still needs to happen stop the world cell, unfortunately but this pauses can be shorter due to the smaller regions. The garbage collector is the best choice for machines with a high performance and a large memory space. And it is also running on multiple threads and it's using concurrent and stop the world processes. So what about the Z garbage collector? The Z garbage collector is the newest kit on a block in this list. And it has production in status since [Java](../../Skills/Software%20Development/Java.md) 15. The Z GC performs all the tough garbage collecting work concurrency without pausing for more than 10 milliseconds. So the Z GC start with a marking of the live objects, but it does so in a special way. It's not keeping a map, but it's using a phenomenon called reference coloring. It's stores the reference date as the bits of the references theirselves. So the Z GC therefore only works on 64 bit systems since the references don't have enough bits to do this only 32 bit systems. The Z GC also uses relocation to avoid defragmented memory as a result of the garbage collecting. It does this process in parallel with the application since it doesn't want to pass for more than 10 milliseconds. You can imagine that this is tough for an application. Imagine that we have a reference to a certain object but in parallel to the executing application, this objects got relocated. So if we try to access it using the old reference, we would be accessing the wrong memory location.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=280)** This is solved with load barriers. They run whenever references from the heap is loaded. It checks the [Metadata](../../Skills/Web%20Development/Metadata.md) to make sure that these bits of the reference are based on the result. It may or may not do some processing before retrieving the result. And this magic is called remapping. Also these Z GC is running on multiple threads. These are the standard garbage collector implementations that you can choose from nowadays. The best garbage collector depends on the system anti application. Knowing if the garbage collection is performing well requires monitoring which is what we'll be looking at in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Analogies:** imagine (2), such as (1)
> **Env Vars:** gvm (1), cms (1)
> **CLI Commands:** make (1)
> **Versions:** java 15 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring garbage collection](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=0)** - [Instructor] There are a few metrics relevant for garbage collection. The first one is the allocation rate. This is how fast your application is allocating objects in memory. The next one is the heap population. This is the amount of objects that's alive on the heap. Next is the mutation rate. This is how often references are updated in a memory. Another important one is how long the objects typically live. One application may have mainly objects that die young, while another application is a fair amount of objects that need to live for a rather long time. For monitoring the performance of your garbage collector, mark time and compaction time are typically the most important. The mark time is how long the garbage collector needs to find all the live objects on the heap. And the compaction time is how long it takes the garbage collection to free up all the space and relocate the objects. The garbage collection cycle time is how long it takes the garbage collector to perform a full garbage collection round, meaning checking all the objects on the heap. The larger memory space available, the better the garbage collection can do its job. If there was unlimited memory, we wouldn't need garbage collection at all. For the copy and compact collector, it's necessary to have enough space available for copying and relocating, for example. If there's only a tiny bit of memory available the copy collector would have to start with a very small part, free up memory so that it would copy a slightly large portion next time, et cetera. When there's very little memory available, you'll see the CPU usage go up,
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=92)** for garbage collection because it needs the tiny cycles a lot. Choosing the right amount of memory will improve the performance of your application as well. Let's monitor a garbage collection process. In order to monitor garbage collection process, we need some sample code, and look at this code, it's horrible, but it's going to do the job. So what's happening here? I have an infinite loop, and in this infinite loop I'm adding a thousand elements to an array list. And when there are 1,002 elements on the list, I'm going to create a new array list. So all the elements on the list become eligible for garbage collection, at that point. Then I set I back to zero, and so on and so on. It's an infinite loop. So I'm going to be starting this, and then I'm going to open a profiler, so we can actually see this. So this has started, let's move over to visual VM. So here we have the example process, and I'm going to click on the monitor. And as you can see here, the memory on the heap is increasing, and then is decreasing again. So the garbage collection is doing its work. So how can I see that this is not too bad? Whoa, I'm looking at the heap size here. And I see that every time, when the garbage collector has been there, it's going to around the same memory level, meaning that the memory use is not constantly increasing tiny bit over time. So that's a good sign. And then another one that's good, so the CPU usage is quite steady, and not too high. I can do more in here, but we'll actually be showing that later. In the next chapter, we're going to have a look
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=186)** at the usage of GVM tuning to improve the usage of the memory by the GVM. Here we'll also see how we can tune the garbage collector.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (2), gvm (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Eligible for garbage collection](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=0)** - [Instructor] Your job was to mark the objects eligible for garbage collection, and here's how to do that. On line 23, it's indicating that it is done processing, so after that, we no longer need to keep the object. So in this case, we implemented the release object by setting it to null. There's no use for calling System.gc. That's not marking it for garbage collection. What is marking it for garbage collection is when it's no longer having a relation to the heap, and here we're doing that by setting the reference that we're having to null. So if I go ahead and run this code, you can see that it validates, and it's saying you did it. The result is exactly right.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. JVM Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### [What is JVM tuning?](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=0)** - The [Java](../../Skills/Software%20Development/Java.md) virtual machine, better known as the JVM, can be configured to optimize the performance of the application. Why is that you may wonder? Well, JVM provides the runtime environment for the application. So when that's one being changed, the application might actually perform better. All applications are different, and even though your application might be performing just fine, it could be performed even better with different JVM parameters. JVM tuning should typically be the last improvement step to your performance though. First, make sure that the code is optimized. JVM tune is not just changing parameters for the JVM and then sit back and watch your application improve. So what is it? It's actually more like some educated trial and error. You determine what the requirements for the application are and you select the JVM parameters that fit this. You're going to select JVM and the parameters and next you're going to do some checks and measure. And if either of these checks and measures fails, you're going to have a look at the application and requirements again, and adjust the JVM parameters. These are the questions you should ask for tuning the JVM. First of all, is the memory functioning all right? And with memory, we do mean the heap memory over here. So if this is functioning, alright, this means that there is a right amount of free heap available. Not too much and not a little either. Next, is the latency all right? Latency is the time it takes to perform an operation and whether it's normal or not, it depends on the requirements. It's also called responsiveness.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=93)** So how quickly the application responds to a certain stimulus. If the new JVM parameters made it worse, this is a problem. And the last question you should ask is, is the throughput normal? Throughput is the amount of work that can be done for chosen units of time. High throughput typically means that the application requires more memory and that responsiveness might be decreased. Let's have a look at some of the options for tuning the heap size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** jvm (11)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - the (1)

#### [Getting JVM metrics](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=0)** - [Instructor] So, all right. When we want to do GVM tuning we kind of need to know what's going on in the GVM. So, how to get the metrics of what's going on in the GVM? There are actually multiple options. First of all, there's a bunch of command-line tools for this. There's also all sorts of visualization tools and there's some more complex profilers. Profilers really get some insights of what's actually going on inside GVM by showing the GVM metrics. It's doing so in monitoring the [Java](../../Skills/Software%20Development/Java.md) a bite code and it's seeing how it's really operating at the GVM level. So for the purpose of this course, we're going to be diving into the first two. So we're going to have a look at the command-line tool, Jstat, and we to be using VisualVM for visualization. So first of all, jstat what is this? Well, it's actually a GVM [Statistics](../../Skills/Data%20Science/Statistics.md) monitoring tool, jstat. How to use it? On the command-line, we use the command jstat. You have it already, that's the great news here. And then you have all sorts of output options. You can specify interval and an amount of time you'd like to do this. So we're going to use the output option, gcutil, garbage collection util, to see some things going on with the garbage collection. And we're going to do so using our example application again. So I'm going to be starting this application. And once I've done that, I need to find out the process ID of this application. And I could do so using code but instead I'm going to be using my activity monitor. Alternatively, you can also use VisualVM,
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=95)** which is one I'm going to be showing next. Or you can just use code to do this but this is a bit too complex to go over right now. So I'm going to be running this example main. So here's the activity monitor and I'm going to be looking for jstat in here. And as you can see I actually having two. And it is this one. So the PID is 58324. All right. Let's not forget that. And then inside this terminal, I can actually use jstat. I go ahead say jstat and I'm going to be using it with gcutil, so I'm going to be adding gcutil over here. Then I'm going to be entering my PID 58324. And then I'm going to be saying that actually want to see it at, well, let's just say half a second intervals and I want to see 10 outputs of it. So every half a second it's actually showing me a whole bunch of data. Don't worry, I'm going to be explaining this data right away. So here we can see it. We see the column names and the column names are for example, as zero, which stands for the survivor space. And you also have the S1, which is also survive space, but there's different actually. And this is utilization as a percentage of the space current capacity. So we also have to eat, eat in space, all the old space. Then we have M for the Metaspace, we have the young generation garbage collection events. We have the young generation garbage collection time.
>
> **[3:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=191)** And next to that we have the number of full garbage collection events which was still zero all the time. We also have full garbage collection time which is actually a very relevant metric but we don't have any at this point just yet. And we also have the total garbage collection time which is in the very last column. The other ones, they're not too important for this point. But here you can see all this data and actually there are so many more options. If you want to know all the details for jstat I can best recommend you to the Oracle documentation. Here you can find so many more options. So you see, for example all the output options you're having and all the things you can do with them. So for example, we use the gcutil new right now but there's actually also a possibility to go ahead and see what's going on with the GC capacity. All right. So that's jstat. What about VisualVM I told you about? Well, VisualVM, well, you may have guessed this, this is a visual tool. And it has a bunch of integrated command-line statistics tools and some very lightweight profiling. So this is not going to be a deep dive profiling but it's definitely enough to give us quite a idea of what's going on inside replication. And we can actually also inspect heap dumps with it. With heap dumps, we pretty much just mean a snapshot of the memory at a certain time, and it's going to be very useful. We want to know what's going on inside memory and what's all stored in there. So here we're having VisualVM and we can see the processes that are running on my computer. So I'm going to be clicking on this one which is the one that's running the application
>
> **[4:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=284)** we just started. We also use jstat for this. So what I'm I seeing here? Well, this is just the overview. We can see what process ideas running on, the host, the main class, and some more details of the application. It's more interesting for us right now to actually go to monitor. And in monitor, we can see live what's going on in here. We see four quarters of the screen pretty much. We see the CPU usage and the garbage collection activity in the left upper screen. In the right upper screen, we see the heap and Metaspace usage. So right now we're looking at the heap, and we can see that our heap is looking very healthy. It's making nice ups and then all the way back down again when garbage collection kicks in. In the tap next to it, we can actually also see the Metaspace. Then in the left lower corner, we see the classes inside replication. We can see the total that are being loaded and a total that are being unloaded. Then on the right of that, we can see the threats inside our application which can actually be used for spotting deadlocks and lifelocks and all these sorts of events but they're not relevant for our memory. All right. So this is what we can do with the monitoring. What we can also do, we can trigger garbage collection here, which is quite cool. And we can also say that this should create heap dump. So for example, if I click on this heap dump right now, it's going to be creating a heap dump which is a snapshot of the memory. And as you can see, we're having it right here. So what's going on with this heap dump? Well, we see some summary statistics here. We see the classes by number of instances, instances by size and all sorts of details.
>
> **[6:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=377)** But we could, for example, also dive into objects a bit more. For now, I'm not going to be going too much in depth there but we can see, for example, how many of byte (indistinct) are inside replication and how many of string. Also, we can go ahead and have a look at all the threats inside replication, but this is not too relevant for a memory. So I'm going to be leaving this here. So this is VisualVM and you'll find yourself using this rather often when you want to know what's going on inside your memory real quick. So this VisualVM is actually the one that I'm going to be using most for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter because this is going to be serving the purpose of showing you what's happening inside a memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Java](../../Skills/Software%20Development/Java.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** gvm (7), pid (2), cpu (1)
> **Analogies:** for example (6)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** find (3)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Heap size and heap dumps](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=0)** - [Instructor] The heap size is where the objects of the [Java](../../Skills/Software%20Development/Java.md) application live there objects and free memory. The size of the heap influences garbage collection directly, a smaller heap size means that garbage collection have to take place more often. If garbage collection needs to happen too often due too two small heap size this might influence performance of the application. Depending on the system, this might be very unnecessary you clearly cannot have more heap size than RAM but when that's not a problem the heap size can be increased. Another problem can occur when you set your heap size too big. If the heap size is too big the GC will take unnecessarily long to do a full garbage collection cycle. The best heap size is in line with your application needs a fine rule of thumb is to have a GC under less of 5% of the execution time of your application. All right, enough talking, let's see how we can actually change the settings of the heap. So here we're having the application again it's still not a great application but it's still perfectly fine for demonstrating how we can adjust to heap size. So let me first, just start to Java example. There we go to Java example and it's going to run now let me move to visual VM and here we can see the example process. We can see underneath GVM arguments almost in the middle of the screen that is no GVM arguments and if we click on monitor, we can see the max size of tape it's around eight gigabytes. Let's start the application again but this time with a much smaller maximum heap size. So how to do that?
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=95)** Well, I'm going say Java again but now I'm going to give a GVM argument. I'm going to say X, MX, and then in here, I can just specify the amount I would want. So for example, I can say 1024 megabytes. If megabytes, I just choose the M for gigabytes go ahead and use the G and then I specify the name of my application. There we go, going to go back to visual VMs so you can see what has changed. So here's the new example process and you can see that we have the GVM arguments XMX, 1024 megabytes. So let's move over to the monitor and you can see that our max has now been adjusted. If you're confused about this number not being 1024 et cetera. This is because of the conversion from megabytes to bytes. One megabytes is 1,024 kilobytes, for example, and so on. So this is why we get this deviation in the number here but you can see that our application is doing quite well. Garbage collection activity that's in the screen is fluctuating between 0.0 and 0.1. Wow, that's outstanding actually so nothing to complain here, but actually might guess I'm going to see if I can make it perform worse you can actually see the difference in performance. So I'm going to kill this one again and now I'm going to be starting it with just 16 megabytes there we go. Moving back to visual VM again, and you can see the new GVM argument and if we're going to click on monitor, you can see that our max heap space is now really, really small. and you can see that our coverage collection activity
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=187)** is now 1.6 which is still pretty decent but it's 16 times higher than the previous one. So clearly the CPU has to work a whole lot harder right now. So, here's how you can see how heap size influences the CPU usage directly. There's actually more options that you can specify and you probably won't have to do this very often but just know that they exist. For example, if you would have to set a max for the young generation, you could go ahead and say, -XX:maxnewsize and then you'd have an equal sign, specify the amount and then for example, the megabit again, the unit and then in here you go ahead and you put the name again. So this is how you can specify the max new size and there's plenty of other options out there. For example, you could also say XX heap jump on out of memory error which will we'll see later. Similarly, as to adjusting the heap size we can also adjust them at the space size. Let's have a look at how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Env Vars:** gvm (5), cpu (2), ram (1), xmx (1)
> **Analogies:** for example (5)
> **Versions:** 0.0 (1), 0.1 (1), 1.6 (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)

#### [MetaSpace size](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=0)** - [Instructor] Max Metaspace is not really defined by default. Once it reaches its limits, the GVM simply increases it. However, we can set a maximum size. We do so by adding an option to starting our application. Just say, XX, code on max metaspace size, equals, and then the maximum space size. We can also set a threshold for garbage collection. Remember that there were only two triggers that could trigger the garbage collection of the metaspace, one of them was the threshold, which we can set, and the other one is when it runs out of memory without the garbage collection. Suddenly, maximum size or the threshold doesn't mean that it's actually going to be affecting the startup metaspace available. It just uses what it needs until it reaches the maximum. Then, there's one last thing that you can adjust for the metaspace, and that's the minimum and maximum of free memory ratio. This can be useful if you plan on loading many classes dynamically, and you may need some empty memory available to improve performance. Suddenly, maximum size for the metaspace can actually be very critical to your application. Migrating from [Java](../../Skills/Software%20Development/Java.md) 7 to Java 8 really was a disaster because of the changes in the perm gen versus the metaspace, and not setting the maximum size could actually make applications have a very, very heavy memory footprint. Let's move over to IntelliJ and see how to adjust these variables. So again, I'm going to be using the very same application, and I would have to say Java and then specify the option. So for example, if I would want to set the max metaspace, I could say -XX, and then go ahead and say,
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=95)** MaxMetaspaceSize= and then some sort of value, so I could make it very, very small. I could, for example, say that it's only allowed to have four megabytes cuz I think eight's enough, but four is going to be too little, and then I'm going to say example here, so let's see if we can break it. So, it's starting now. Let's move over to VisualVM and inspect our process. Here, we're having our process and the MaxMetaspaceSize=4m. All right, so if I'm going to move over to monitor, you can actually see that the heap looks fine, but all of a sudden we don't see the CPU, and if I'm going to click on metaspace, you can see that this is all, the size, the max and used, it's all around the four megabytes, so this is a problem. And actually, if we try to close this application, it's most likely going to break. So let me terminate this application, and then we get it out memory or cured. So actually, it's not capable right now of closing, so we need to forcibly terminate the VM, so I'm just going to close this terminal, which will actually close the VM, but I'll also have to close the Java process, so I'm going to be terminating this, and then in the terminal, I'm just going to kill the process, and I know what pid it's running on. It's running on 85600. So let's just go ahead and then kill it over here. Kill, nine and then 85600, all right. Usually, we don't need to do a lot for the metaspace,
>
> **[3:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=192)** but if you need to restrict the usage of the application on your server, for example, this can definitely be the way to go to manage the resource that you're having. As I already mentioned, when you're migrating from Java 7 to Java 8, for example, you probably want to do this. But, it's more common to tune the garbage collector. In the next video, we'll have a look at some of the options for tuning the garbage collector.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6)
> **Versions:** java 7 (2), java 8 (2)
> **Analogies:** for example (4)
> **Tools:** terminal (2), intellij (1)
> **CLI Commands:** make (2)
> **Env Vars:** gvm (1), cpu (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)

#### [Garbage collection tuning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=0)** - [Instructor] The garbage collection process is an expensive one and that means it's taking up a lot of CPU. As already mentioned, changing the heap size also changes the functioning of the garbage collection. Please keep that in mind as well. Before you start adjusting the settings of your garbage collector, you'll want to have a look at memory. See which different types of spaces are filled, when this typical happens, et cetera. There are extremely many options for Trinity garbage collection but we'll only have a look at a few. First of all, you can choose the type of the garbage collector. So for example, the zero garbage collector or concurrent mark-sweep garbage collector and third type of garbage collector, there's even more settings. I'll show you the official documentation where you can find everything because this video's going to be way too long and you're going to be fast asleep by the end if I'm going to go over all of them here. But, what is good to know if you look at the heap, this is what the healthy heap looks like when the garbage collection is doing its job well. You can see that the memory used is increasing and then the garbage collection kicks in, memory usage decreases over time and it decreases to the previous level. Then it increases again and it decreases to the previous level. You don't see an increase of the base level of the memory so to say over time. Here's an example of an unhealthy heap. Here the garbage collection process is not working well. Actually, the garbage collection process is working well over here, but in this case, there is a memory leak which we'll learn more on later. But you can see that here over time, the garbage collector is not doing its job effectively.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=94)** It's actually not managing to get it back to the base level. Well, we can't blame the garbage collection here because no setting of the garbage collection would have fixed this. But what you can often fix is when the execution time of the garbage collector gets too high. So, when starting a GVM, you can specify what garbage collector to choose. For example, you can say use serial garbage collector, use parallel garbage collector, use the concurrent mark-sweep garbage collector to the garbage first garbage collector or the Z coverage collector. And depending on the one you are choosing here, your application's going to be behaving differently. So please do keep that in mind and know that for all these garbage collection choices, you'll actually have specific options. For example, for the parallel garbage collector, you can specify how many threads to use by adding the ParallelGC threads option. There are so many more options. Before I'm going to show you a demo of how to use this, I would like to show you the official Oracle documentation first that you can have a look at all the options that are out there. So here we have the Oracle documentation and it starts with the general tuning. But for example, if you want to know what's possible for the garbage first garbage collector, you can move over here. So here we have all the options for the garbage first garbage collector. As you can see, there're quite a bit of them. They have the options and the default values here and then the description of what it's actually doing. So for example, if you would want to notice for the concurrent mark-sweep garbage collector, we would move here.
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=186)** And as you can see, there's this description and in bold, we see the options that we're having. So for example, we can use a used garbage collector overhead limit when we want to disable the feature where we actually stop the application with out of memory when we are spending 98% of our time on garbage collection. And so there are many more options in here and all these garbage collectors, they have specific options. All right, let's move over to our application again and see whether we can see the impact of using the serial garbage collector. So I'm going to be starting our application again but this time I want to do so using the serial garbage collector. Say use serial garbage collector like this for our example class. And now I'm going to move to Visual VM and we can see we're using the serial garbage collector. And then I'm going to move here and you can actually see that this time the garbage collection activity, it's very, very low which makes sense because it doesn't need to do a lot with this large heap size. But if I'm going to be decreasing the heap size now, you'll definitely see the impact. So let's kill the application and now also specify the max heap size. Let's just tease our application a bit and put it to what shall we do. Let's go for the 16 megabytes again. And as you can see, we're using both arguments here and we're going to be monitoring it. And as you can see, the garbage collection activity is right now at 0.6%.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=280)** All right, let's have a look at what happens if we use the parallel garbage collector here. So I'm going to be updating this to the parallel one,
>
> **[4:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=294)** open our new process and we can see we're using the parallel garbage collector and I'm going to be monitoring this. Funny enough, you can see right now that it actually has a larger garbage collection activity. And this is not too weird because it's actually a very simple process. So the cost of organizing this in parallel is higher than doing it serial, which is quite funny. Let's see what happens if we try to use the garbage first garbage collector. So I'm going to be updating this to the G1 garbage collector so we don't need to use [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) here. We do need to use word there. So we can see we have the new options right now. And as you can see, our garbage collection activity is quite high as compared to the parallel one. So the winner so far is actually the serial garbage collector. Truth be told, we're only looking at the garbage collection activity here. And it's actually very possible that when we're not only looking at garbage collection activity but we're also going to look at for example, the latency of our application and throughput, that the other options are actually better. So this is why it's very important to always measure everything so that you can see the impact of which garbage collector you're using. Cuz as you can see so far, it does definitely impact your application. In the next chapter, we're going to have a look at memory leaks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Analogies:** for example (7)
> **Env Vars:** cpu (1), gvm (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Versions:** 0.6 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Memory Leaks

[↑ Back to Table of Contents](#table-of-contents)

#### [What are memory leaks?](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=0)** - [Instructor] Let's talk about one of the biggest problems that can come from poor [Memory Management](../../Skills/Web%20Development/Memory%20Management.md), memory leaks. Memory leaks are the accumulation of objects on a memory that are actually no longer needed. Objects are created but the memory doesn't get freed when they are no longer needed. The reasons for this may vary, and the number of objects on a memory will just keep on increasing. Sometimes this goes very slowly, but it can also go quite fast. Eventually memory gets so full that it slows down the application, and ultimately it leads to a crash. And when memory is so full and there is no memory anymore, we'll encounter an out-of-memory error. This kills the application. Memory leaks are a serious problem. Even nowadays, when most applications are developed in a high level language at memory management, for example by the JVM in [Java](../../Skills/Software%20Development/Java.md), there are still plenty of opportunities to create memory leaks in your code. And this can also happen on super fast servers. Why? Well, ram is a limited resource even on the best servers and a limited resource can get full. If you host your application in the cloud you may think right now, "then we'll just scale up and we won't run out of memory." Well, depending on the settings, that might be right. But it will at least result in unnecessarily high cloud cost because you'll need to run an instance that is bigger than it should be due to the memory leaks. Crashed applications are unavailable applications, but also when it's very slowed down it might be unavailable. There is no need to tell that unavailable applications are not good for keeping, let alone growing, your users of your application. So enough reasons to be spotting, solving,
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=93)** and avoiding memory leaks. Let's see in the next video how we can detect memory leaks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** jvm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Spotting memory leaks](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=0)** - [Instructor] Memory leaks don't seldomly exist unsolved. Just restart your application, and you're good to go for another X number of days. Clearly, this is no one's preferred option, but if you don't have a clue what's going on or perhaps you don't have the time to find out what's going on, it might just be that. By the way, a slow application does not always mean a memory leak. So, how to spot memory leaks if that's not it? Can you tell by just using application? Well, no. The slowing down of the application is often an indication of a memory leak, but this slower application is definitely not guaranteed to be caused by memory leak. In order to be sure, we'll need to do some monitoring. The metrics we'll have to look at is the heap memory size and the portion of that that will be full. And we can actually also inspect the garbage collection activity. And we can have a look at the heap dump. I have created an application that contains a memory leak. Let's have a look. So here is the example that actually contains a memory leak. Maybe you're really quick to spot it, but if you don't, don't worry. We're going to see what's happening, first. So we have a list of persons, and "person" is a new object I've made. It's over here. This is the person class, and it just contains a name. It also has a constructor that's going to be setting the name. All right? So what we're doing, we're infinitely adding a person to our list, a new person. Why infinitely, you may wonder? Well, this time, we're not incrementing "i" at the end of our loop. All right, let's run this application. There's actually multiple ways to run the application.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=92)** We could just press the play button, but we can actually also start it with the command line. And there's an advantage here, because if we start it with the command line, we can create a heap dump. Let's go ahead and do exactly that. So I'm going to say [Java](../../Skills/Software%20Development/Java.md) -XX:+HeapDumpOnOutOfMemoryError.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=117)** All right, and then I also want to specify the path for a heap dump. If we don't, it's going to be using some default path, but I don't want that right now. I actually want my heap dump to be in HeapDumpPath= and I'm just going to put it in /Users/, my name, and then hd, heap dump. Think that's a fine place to store a heap dump. And I'm also going to say xample00M, because that's the class that I want to be running here. All right, let's run this one and move over to VisualVM. So here we're having our process. And as you can see, the heap is getting quite full already. CPU is busy, quite busy, actually. And it's working really hard to try and avoid this heap dump here. You can also see the garbage collection activity sometimes increasing. And not long from now, it's going to actually crash with an out of memory error. Hence the "oom", it stands for out of memory. And there we have it. It crashed. All right, so it has made a heap dump, but this can actually take quite a while because the heap dump is going to be quite big. So here's the folder. This is not too interesting, I'm just showing you it's in here. And what is striking is that the size of his document is huge. So how to open a heap dump? It's a weird extension, right? Well you can definitely open this in VisualVM. You can open it to some of the IDEs as well. But if you try to open this with text edit, for example, you will see a lot of text you can actually read but it's impossible to make sense of this. So I'm going to go for VisualVM to open this one up.
>
> **[3:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=212)** And actually opening the heap dump will help you to see what's actually a heap dump. It's literally a dump of whatever is in the heap. So all the objects that are in the heap dump. So I'm in VisualVM, and I'm going to say File > Load, and then I'm going to be selecting my heap dump over here and I'm going to be opening it. And this can actually take quite a while, because as you just saw, it's a huge file. All right. So let's first look at what we can actually see in VisualVM, about the memory crashing. So we started our application and we could see the memory increase. And we could actually also see the CPU usage being quite high. And after the garbage collection actually set in here, we could see that when this was done, the CPU dropped again, and then it would start to increase again. And the garbage collection activity was, well, it's not too bad, but it is quite high. Especially if you're seeing nothing happening on the heap in terms of the memory being decreased. But as you can see, this memory is not very typical for a healthy application. You can see it has a baseline, but the baseline is incredibly high. So this is quite worrying. And even though you see it drop at some point, you actually also see it increase again quite soon, and then it cannot actually do garbage collection again after that. So you may wonder how is it even possible that it's managing to collect some garbage items? Because, well, we didn't really have anything that was eligible for garbage collection inside our application. Well, there's tons of strings and stuff in Java that are being loaded by GVM that can actually be removed later.
>
> **[5:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=305)** So this can actually be done when the garbage collector really needs to be removing something, and there's nothing else that can be removed. Then this is typically what the GVM would be doing. You can also see it in the left bottom graph, which is actually the total loaded classes. You see that there's a whole bunch of classes loaded and only a few unloaded. We can also go ahead and have a look at the metaspace, but this one is quite constant since we're not doing a lot over here. So to sum up, how can I see here that something's wrong with the memory? Well, it's not too obvious in this case, but there are some very, very clear indications. First of all, the memory heap usage, the blue part, is quite high. And the line doesn't have anything that's dipping. So it has one, a very obvious dip, but this is only the initial garbage collection cycle. And even though I can see that the garbage collection activity is quite constant, there's nothing else happening to the heap, which is typically an indication of something being wrong. Well clearly, in a different application, there might be more going on, and there could still be reasons that the garbage collection can actually be removing something. So there you actually seeing more dips in the used heap. But what you'll see in these types of applications, it's very much like one of the previous slides in the very first chapter of this course, where you could see that this has these kind of saw teeth which was just going up and down, but then it wasn't going down as much as it went up. So it would just have a higher base level every time after it went down. And this is a very typical look for the used heap of an application that has a memory leak. All right, so here's our heap dump.
>
> **[6:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=400)** And well, what can we see here? We are looking at a summary right now. We can see this on the top, on the left, it says, "Heap Dump." And underneath it says, "Summary" with a dropdown. Actually, not all data is available yet. What's relevant for us to see? First of all, we can see the classes by number of instances. And this is already quite striking, 'cause in this case it's super obvious and we can see what went wrong. We have really, really a lot of the "Person" instances in there. And on the right of that, we see the "Classes by Size of Instances", and also there the "Person" object is very dominant. So this is a very clear indication to us that this is actually the problem with our application. Well, we can actually see more. 'Cause sometimes you would like to see more. So for example, we can have a look at the out of memory thread, so we can see what happened. And in this case, we can see that it happened with the adding to the array list. And there's something else that we can actually see. We can also check out the objects, which is also often very relevant. So here we have the summary, and then beneath there we have the objects. And we can sort them in different ways, but we could, for example, also see what they have references to. So for example, if I open this one, and just grab any "Person" object here, I'm going to be asking what this has references to. I can actually see what's holding a reference to this object. So why does this still need to be in my application? And as I already said, this is very big. So heap dumps navigating, it's typically very slow. You can see the computing in the right lower corner.
>
> **[8:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=495)** All right, so here we can see the object that's holding our reference. And as you can see, it's elementData and the java.util.ArrayList. This is giving us some great clues as to where the problem is. All right, so we can now detect memory leaks. That's great. But it would be even better if we know how to solve them after finding them, or actually even better, how to avoid them and make sure that they don't happen. Which is exactly what we're going to be doing in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **Env Vars:** cpu (3), gvm (2)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** xample00m (1), elementdata (1)
> **Tools:** command line (2)
> **Cross-References:** in the next (1)

#### [Avoiding and solving memory leaks](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=0)** - [Instructor] Avoiding and solving memory leaks is not as easy as it may sound. The first step for solving them is the hardest and we just saw how to do it, find the problem. This is really the most important part of solving memory leaks. Next, it's very important to realize how memory leaks are created in [Java](../../Skills/Software%20Development/Java.md). Objects hold unnecessary connections to the stack. If you can avoid this from happening, you can actually avoid memory leaks altogether. And once you have found a problem, it's actually time to improve the code. There's usually no need for complicated GVM tuning. You'll just have to look critically at your code and fix the problems in your code. Let's have a look at how to fix it for our example and this is actually very easy because, well, I already told you what was wrong. We got this out of memory because we actually got stuck in an infinite loop and we could never get out and we were just adding person objects to the list and adding person objects to the list. So when will we actually get out of this loop? Well, we can either decide to break out of the loop which will probably solve the memory problem but what we can also do is just create a new array list every now and then. And this will actually be enough for Java to start cleaning up the heap because when we have a new array list and install the old variable that was holding the reference, there's no longer a need to keep the old array list or all the objects on it. So just making sure that the I gets incremented so that it reaches over a thousand and then a new array list is being created. This will already solve the problem. Let me show this to you,
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=92)** but please mind, this is running forever so I cannot show that there's never going to be causing memory leak but at least you can see the healthy heap behavior. So let me open this one. And I'm going to be monitoring this and as you can see, it's going up and then it's going back down again. And this looks so much better looking at this 'cause as you can see, the heap size is increasing and then it's decreasing again with the gar collection activity. Also you can see that the gar collection activity is so much lower compared to when we had the out of memory error 'cause then it was around three and a half percent and now it's an average 0% so this is pretty good. So this is what it looks like in a healthy state. So here are some things that's going to help to solve the memory leak. First of all, set the object to null in certain specific situations, such as what we just saw. If we would make sure that the original list is null, then there's no reference anymore and then in that case, its ready for garbage collection. Also make sure to close resources such as streams and connections, 'cause keeping these resources open is helping a lot of unnecessary objects on heap. Same goes for a string concatenation. This is typically something you don't want to do because string concatenation is creating all these new string objects. So it's much better to use string builder instead. We need to modify strings a lot. Also be careful with static collections holding objects. This is sometimes done for example, when you don't have access to a database and you just want to write a script. If it's holding objects for a while and by making it a static collection, all the instances of the class are sharing this collection
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=186)** so it can be quite convenient. Please be very careful with this because this can very easily lead to an out of memory error when it's not managed well in the code. Also, and this is more detailed already, but it's very important to overwrite your hashCode and equals, especially when you add custom objects to hash sets. So what's going on there is that if you don't overwrite hashCode and equals for your custom object, such as we have with my person object that I just created, I did not overwrite them, it's going to be using a default ones and this can get a very ugly way of overwrite to hash sets because it can get lost and it's going to be very hard to actually make the different piles of the objects so to say. And this can actually also lead to out of memory errors. But still, mistakes happen so the key thing to take away is that you make sure that you monitor your application so it can spot problems and solve them before anyone else notices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (4), find (1)
> **Analogies:** such as (3), for example (1)
> **Code Identifiers:** hashcode (2)
> **Env Vars:** gvm (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be careful (1)
> **Prerequisites:** install (1)

#### [Solution: Finding and fixing a memory leak](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980&t=0)** - [Instructor] Your job was to implement the equals and hash code of custom objects. This was necessary to avoid a potential memory leak, in the potential memory leak hash set class. And here's how you could have implemented the hash code and equals, and as you can see, when we go ahead and test this code, it is saying no memory leak detected. Correct. Our code returned true. That's great.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Conclusion](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=0)** - [Maaike] Congrats, you've done it. You've worked your way through some rather complex [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) topics. Next topics that would be very interesting for you would be logging, but also monitoring and, of course, testing and also other advanced [Java](../../Skills/Software%20Development/Java.md) topics might be interesting, such as [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) and concurrency. Here are some courses that I've selected for you that would be great as a follow-up. First of all, the Java Concurrency Troubleshooting: Latency and Throughput, but also the monitoring and logging course, which will tell you more about how to monitor and log an application. Also, Parallel and [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) with Java would be very interesting. And, of course, Advanced Java Programming is always a good one to take because it will take your Java skills to the next level. Then, if your Java is already really good and you want to know more about design patterns, Advanced Design Patterns: Design Principles might also be good for you. And, finally, Learning Apache Tomcat can definitely be interesting whenever you need to do some management of your Java applications. Thank you so much for taking this course. I'd like to connect with you. You can find my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) profile at this link. Good luck and have fun managing the memory of your Java applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (8), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (3), [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (1), [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** apache (1), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [maaike] (1)


## Instructor

- [Maaike van Putten](../../Instructors/Software%20Development/Maaike%20van%20Putten.md)

## Skills Covered

- Memory Management
- Java

## Path Context

### In [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)
← [Java Memory Management- Values and References](Java%20Memory%20Management-%20Values%20and%20References.md) | **7 of 10** | [Java Exception Handling](Java%20Exception%20Handling.md) →

## Appears In

- [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Java Memory Management- Values and References](Java%20Memory%20Management-%20Values%20and%20References.md) — Java, Memory Management
- [Practice It- Java](../Software%20Development/Practice%20It-%20Java.md) — Java
- [Hands-On Introduction- Java](../Software%20Development/Hands-On%20Introduction-%20Java.md) — Java
- [Learning Java 17](../Software%20Development/Learning%20Java%2017.md) — Java
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Java

---

[↑ Back to top](#)