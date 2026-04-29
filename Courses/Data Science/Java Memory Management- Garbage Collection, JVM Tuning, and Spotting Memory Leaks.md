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
  - '[[Getting Started as a Java Developer]]'
prev_courses:
  - '[[Java Memory Management- Values and References]]'
next_courses:
  - '[[Java Exception Handling]]'
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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Memory%20Management-%20Garbage%20Collection%2C%20JVM%20Tuning%2C%20and%20Spotting%20Memory%20Leaks.md)

![Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks](https://media.licdn.com/dms/image/v2/D560DAQHvZioZAyi2ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709598772540?e=2147483647&amp;v=beta&amp;t=lhLwKncyzbWP7MI2LWsami98aoYuVaU5Dir0DSqYz20)

# Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks

> In this course, Java developer Maaike van Putten takes an in-depth look at one of the toughest topics in Java, memory management. Maaike starts with garbage collection, from an overview of the basics, to the different phases of garbage collection, to the varying implementations. She then details the facets of tuning the Java virtual machine, including how and why to choose the different options fo

> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks) | 1h 10m | Advanced | 26K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Garbage Collection]]** (9 videos)
- **[[#2. JVM Tuning]]** (5 videos)
- **[[#3. Memory Leaks]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Java memory management
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=0)** - [Instructor] Let's talk about something that's not necessarily a secret, but treated as one.
>
> **[0:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=5)** It also happens to be kind of my passion.
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=7)** One of the toughest topics in Java is how the JVM deals with the memory.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=11)** This course helps you to truly understand the Java memory and garbage collection process.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=16)** (indistinct) in on the phrases of garbage collection, the various implementations of the garbage collector, and we'll also zoom in on the different parts of the heap.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=25)** We'll also dive into the non-heap space.
>
> **[0:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=28)** After that, we'll talk about tuning the JVM for a bit.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=30)** You'll learn how to adjust the heap size and meta space and how to modify the options for the garbage collector.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=36)** We'll end this course with a situation that we preferably want to avoid, or at least spot as early as possible.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=42)** Memory leaks.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=44)** My name is Maaike, and I'm a Java developer and trainer.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=47)** In this course, I'm going to share with you all the information that I've gathered over the last few years.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/welcome?u=76281980&t=53)** Are you ready to dive into the Java dumpster with me?

> [!info]- Semantic Content
>
> **Env Vars:** jvm (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before we get started to put this next step in memory management, let's first make sure that this is the course for you.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980&t=6)** In order to be able to follow along, you'll have to know the basics of memory management in Java.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980&t=12)** If you're not familiar with your memory management yet please check out the first part of this series, [[Java Memory Management- Values and References]].
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-you-need-to-know?u=76281980&t=20)** If you already have the basics of memory management down, then let's get moving.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Explore the code challenge enviornment
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=15)** These challenges are hosted by CoderPad, and they appear in the same area of the course where you watch the course's videos.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=30)** The code challenge has four areas: instructions in the top left, a code editor for your answers in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=44)** You can use these direct handles to allocate space as you like.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=50)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=57)** Each challenge has instructions that include the description of the challenge and the challenge's parameters and desired result.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=64)** Parameters are values that will be passed into your code and they have to be of particular data type.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=70)** Return value also has to be of a particular data type, and you also see that noted in the instructions.
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=76)** It's possible that some questions don't require any input or won't return the results.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=82)** The constraints section has useful information about parameters that will be passed in.
>
> **[1:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=87)** The examples share different parameter values and what result will be returned for each of those test cases.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=93)** Create your answer in the top right code editor.
>
> **[1:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=97)** There are comments in the starting code showing where to put your solution.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=101)** When you click Test my code, you'll see a message indicating whether your code returned the correct result.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=108)** If your code isn't successful, you can ask for help.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=117)** The showExpectedResult and showHints variables determine when you see the expected result and any hints.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=123)** Change them to a value of True to control the outputs.
>
> **[2:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=130)** The code editor in the lower right shows how your solution is used.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=135)** You can change that code to experiment with different test cases.
>
> **[2:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=140)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=147)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/explore-the-code-challenge-enviornment?u=76281980&t=152)** When you finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), type, (1), require (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Garbage Collection

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to the garbage collector
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=0)** - [Instructor] So we have the stack memory and the heap memory in Java.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=4)** On the stack, we store primitive values and references to objects.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=8)** On the heap, we store the actual objects.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=10)** These objects on the heap, they contain primitive values and references to other objects on the heap.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=16)** The stack memory gets cleaned up automatically.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=19)** Whenever a certain method is done executing, the values and variables for this method are forgotten since there is no way back to the executing of this method and there's no point in keeping them for any longer.
>
> **[0:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=29)** But what about the heap memory?
>
> **[0:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=31)** The heap memory doesn't get cleaned up automatically when a method is done because the object on the heap might still be needed by another method which is still on the stack.
>
> **[0:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=38)** So the heap memory will be alive longer than stack memory.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=42)** In Java, you cannot manually clean up the heap memory.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=45)** This cleaning of the heap memory is done by a JVM process, the garbage collector.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=50)** The garbage collector frees up the heap memory so that it comes available again to the application.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=56)** This is not for all languages the case.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=58)** For example in C, you'll have to free memory as a developer yourself, and that's working just fine when it's done well.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=65)** Having the JVM do this with the garbage collection process actually eliminates a lot of common problems and mistakes by developers.
>
> **[1:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=72)** First of all, the dangling pointer bugs can be avoided.
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=76)** This is when the developer did free up the memory but the pointer is still pointing to the old place where a certain variable was stored.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=83)** You can imagine that this can lead to unpredictable events such as the points of returning a surprise value when the memory location has been reassigned to another value.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=92)** Another common problem that Java developers don't run into is the bug of freeing up a memory region twice.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=98)** This can especially be a problem when it has been reassigned to some other value that should not be yet cleaned up yet and then it does get freed up for the second time, the deleting and find was still necessary.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=108)** This is not a problem for Java developers.
>
> **[1:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=110)** Thank you, garbage collector.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=112)** And lastly, all sorts of memory leaks by not freeing up the memory that should be freed up cannot be reached any more because the pointers are gone.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=120)** So for example, when I delete this pointer and the object is still on the heap we cannot no longer access this object and we cannot free up this memory region.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=129)** That's a problem.
>
> **[2:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=130)** So by now you must love this thing called garbage collector, right?
>
> **[2:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=134)** But there are many many options for the garbage collector out there.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=138)** Making the wrong decision about what garbage collector to use can harm the performance of your application and even leads to out of memory errors.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=145)** This is why it's very, very beneficial to understand the process of garbage collection well, so that you can use the best configurations for your application.
>
> **[2:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector?u=76281980&t=154)** Let's first see what is considered garbage in the next video.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), imagine (1), such as (1)
> **Code Keywords:** case. (1), delete (1), let (1)
> **Env Vars:** jvm (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Eligible for garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=0)** - [Instructor] So the garbage collector frees up memory on the heap, but how does it know what to collect?
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=6)** Once an object no longer has a reference to the stack, it becomes eligible for garbage collection.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=12)** Phrased differently, the garbage collector considers its ready for removal.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=16)** In this example, you can actually see the person P, changing from a reference to the stack to the value null.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=23)** And this means that our person object on the heap no longer has reference to the stack.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=27)** In other words, it's becoming eligible for garbage collection.
>
> **[0:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=31)** And this is not only for direct connection to the stack but also for indirection connection to the stack via other objects, for example.
>
> **[0:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=38)** So we can see it happening here because we have this pointer to the integer, year of birth, but that's the only pointer is happening from the person object.
>
> **[0:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=48)** The person object is no longer connected to the stack and therefore it's also eligible for garbage collection.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=55)** So that an object is ready for garbage collection, doesn't mean it gets removed from the heap right away.
>
> **[1:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=61)** It's up to the JVM to decide when the garbage collection processes will take place.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=66)** You cannot influence this with the Java code.
>
> **[1:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=69)** You may have seen that you can actually suggest to Java to start a garbage collection with system.gc but it doesn't guarantee anything.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=77)** It's merely a suggestion to the JVM to perhaps start garbage collection.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=83)** So when does an object get removed?
>
> **[1:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=85)** Well, there are different implementations and strategies for the garbage collection and you'll learn more on this later in the chapter.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=92)** But it all consist of two types of steps, marking and sweeping.
>
> **[1:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection?u=76281980&t=96)** In the next video, we'll deal with the marking.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (2)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** means that (1), in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Garbage collection phase: Marking
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=0)** - [Narrator] So imagine we're having a heap full of objects that leave out the Java garbage collector for a while here, and try to think like garbage collectors ourselves.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=9)** So how are we going to find out which objects don't have a connection to the stack?
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=14)** Well, here's the stack, and for now for just a second, pause this video and pretend to be the garbage collector.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=20)** How to find out which ones don't have a connection.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=23)** Frankly, we cannot do this in one step.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=26)** We'll first have to sort out which ones do have a connection to the stack, and if we have identified all the reference on the stack, we know which objects have a connection to the stack.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=36)** Next, we're going to see what references of these objects are, and also these objects have reference to the stack, indirectly.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=44)** We repeat this until we have checked all the nested references, and then we know what objects have a connection to the stack.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=51)** And with that knowledge we also know what objects don't have a connection to the stack.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=55)** Namely, all the other objects.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=59)** The garbage collector is doing something very similar.
>
> **[1:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=61)** What it's doing exactly depends on the specific implementation of the garbage collector, but it always needs to do some sort of marking of the live objects so that it knows that the unmarked objects can be removed.
>
> **[1:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=73)** This marking can happen in different ways.
>
> **[1:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=75)** A map with memory address, keys, and values of the state of the objects would for example be approached that is common for marking objects.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=82)** This map with the marking does take memory itself as well.
>
> **[1:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=86)** In the olden days, there was actually a different approach.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=89)** All objects would hold a counter, and this counter showed how often they were referenced.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=94)** When a reference was removed, the counter would be decremented, and when reference was added, the count would be incremented.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=101)** When the count was zero, the object could be removed.
>
> **[1:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=104)** At first, it probably sounds like a very clever and more efficient way than marking, but it was one problem, cyclic references.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=112)** Two objects that hold a reference to each other, but don't have a connection to the stack would never be removed because their counter would never get to zero.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=120)** These so called islands of isolation, object 8 and object 9 on this slide here, would live necessarily on the heap forever.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=129)** And this is why the garbage collection happens with marking right now.
>
> **[2:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=134)** The removing of the objects that are not marked happens in the next phase, sweeping.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-marking?u=76281980&t=138)** In the next video we'll have a closer look at the sweeping phase.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** in the next (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [narrator] (1)

#### Garbage collection phase: Sweeping
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=0)** - [Instructor] After the marking of the life objects, it's time to delete the leftover objects that were not marked.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=6)** This deletion is called sweeping in the garbage collection slang.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=9)** And of course it wouldn't be fun if we only had one way of sweeping.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=13)** Instead we have three options for sweeping, normal sweeping, sweeping with compacting and sweeping with copying.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=21)** Let's start out normal.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=23)** So let's look at this memory here and say that these bits, they are not marked and so they can be deleted.
>
> **[0:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=29)** This is what happens after deletion.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=32)** It's the old memory but with the available blocks of free space in between.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=36)** So if we want to store a new bit like this one, the JVM is going to have a look at heap and it's going to figure out that it can be stored over there like this.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=45)** But say, we'd like to store a bit of a bigger one.
>
> **[0:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=48)** Then it cannot fit in between the gaps.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=51)** So it can be stored at the end over there like this.
>
> **[0:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=54)** And say, we want to store an even bigger value.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=57)** And technically there would be enough space for this value, but it cannot fit at the end.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=63)** So this will actually result in not enough space available and eventually an out of memory error.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=68)** So this could have been avoided if we would've used the second option for sweeping, sweeping with compacting.
>
> **[1:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=75)** So here we have a memory again and again, these bits they are not marked and thus will be swept.
>
> **[1:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=81)** We don't just delete these bits and leave the gaps, but we'll apply compacting so that after compacting, the memory looks like this.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=88)** And if we then want to store a bigger value now, we do have a memory block large enough available and we don't get the out memory error.
>
> **[1:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=96)** There's the very similar strategy to sweeping with compacting available.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=100)** And that is actually sweeping with copying.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=102)** So here is a memory again, but this time we're having an extra piece of memory since we're going to copy.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=108)** These are the bits that are not marked and thus can be removed, but instead of removing them and then compacting the memory we're just going to be copying the marked elements to the other memory region, and then delete the full block in the first memory region.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=123)** You may think that this sweeping with compacting and sweeping with copying sounds a lot better than just sweeping without copying or compacting.
>
> **[2:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=130)** So why choose the one or the other?
>
> **[2:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=132)** Well, the key here is performance and memory usage.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=135)** Clearly the sweeping with copying might be ideal but it's taking up more memory.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=139)** And something similar is true for sweeping with compacting.
>
> **[2:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=142)** It might be ideal, but it does require an extra step.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=145)** We'll dive into the different implementations of the garbage collector that use or combine these strategies soon enough.
>
> **[2:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=151)** Let's now first have look at a very important concept we didn't discuss yet.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-phase-sweeping?u=76281980&t=155)** The different generations on the heap memory.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (3), this. (3), require (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [instructor] (1)

#### Different generations on the heap
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=0)** - [Instructor] Java actually distinguishes different types of heap memory.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=4)** And this is relevant for the garbage collection algorithms Java splits up the heap memory and so it can manage it in a more efficient way.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=11)** We have the young generation and the old generation on heap.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=15)** And even though it's technically non-heap memory, we also have one other section.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=20)** And this used to be called the permanent generation, but since Java 8, this actually has been replaced by the metaspace.
>
> **[0:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=28)** So first, the young generation.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=30)** The idea is that most Java objects don't need to live a long life and that they will be part of the young generation only.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=36)** This is the part of the memory where new objects are created, so it must support very fast allocation of memory.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=43)** This young memory itself is actually split up into two parts, the eden space and the survivor space.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=49)** New objects are created in the eden space, and as soon as a certain threshold is reached, the garbage collection starts and moves objects that are still alive to the survivor space, cleaning up the eden space.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=62)** When garbage selection for the survivor space comes by, objects that are still reachable in the young generation on the survivor space are moved to the old generation and they're probably going to be there for a while.
>
> **[1:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=72)** The others are being removed.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=74)** The copying of the objects from the young generation to the old generation is called scavenging.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=80)** And the collectors doing that are called scavengers as a result.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=83)** So this all generation contains objects that have been discovered from the young generation.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=88)** And having survived this round of garbage collection is typically an indicator that the objects are going to be there for a while.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=94)** This old generation is also quality tenured space.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=98)** So let's have a look at this in action.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=99)** We have our stack memory, we have two reference on it still.
>
> **[1:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=102)** And in our eden space, we of five objects.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=105)** There is two live objects and three that could be removed.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=108)** So when the garbage collection comes by, it's going to be copying the live objects to the survivor space and then deleting all the elements in eden space that don't have a connection to the stack.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=120)** Then when the garbage collection comes by again, we see that some reference on the stack is lost and we only have one live object in the survivor space.
>
> **[2:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=128)** When the garbage collection comes by, it's going to be moving the other reference to the old generation and the one that doesn't have connection to the stack is going to be deleted.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=138)** And once more, the old generation is also called the tenured space.
>
> **[2:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=142)** This tenured space typically requires a different strategy for garbage collection since copying all the objects again without that many unreachable objects, since most of them are going to be living a long time, it's an expensive operation.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=155)** So sometimes this approach is chosen nonetheless since the copying does leave big blocks of memory which allows quicker allocation.
>
> **[2:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=162)** And this can be an advantage depending on the specific application, but often this is not the chosen strategy for the old generation.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=170)** So let's have a look at this relevant part of memory that was non-heap, that I said was called a metaspace.
>
> **[2:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=177)** Actually, if you're going to be looking at this app, you'll find that it's very often still called the permanent generation or the permanent gen.
>
> **[3:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=184)** One of the differences between a permanent generation before Java 8 and the metaspace as of J8 is that the metaspace handles allocation differently and garbage collection is handled very differently as well.
>
> **[3:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=195)** So what is this metaspace for this?
>
> **[3:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=198)** The metaspace is actually storing the classes metadata such as the klass structure, and also the methods of the classes, constants, annotations and all sorts of optimizations are stored.
>
> **[3:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=209)** So pretty much anything that's needed for the GVM to work with the Java classes, metadata pretty much.
>
> **[3:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=215)** This metaspace actually gets allocated when the classes are loaded.
>
> **[3:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=219)** Loading classes means that the GVM prepares the runtime representation of a class, and when a class loader is unloaded, the bit of metaspace memory that was used by that class gets released.
>
> **[3:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=230)** And this doesn't happen before all the classes loaded by that class loader are no longer needed.
>
> **[3:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=235)** That might sound a bit vague, let's look at an example.
>
> **[3:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=238)** So we're having some object of type O, and we're having a reference to this in our eden space, which means that we'll also have the metadata of O in our metaspace.
>
> **[4:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=248)** Then when we have another object of O, nothing needs to happen in the metaspace because we do have the metadata of O already.
>
> **[4:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=255)** But when we get an object of type P, we do need the metadata of type P as well.
>
> **[4:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=261)** So then at some point the references of our objects, they might actually get removed.
>
> **[4:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=266)** So let's start with just removing one, the first one.
>
> **[4:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=269)** So we lost one O reference.
>
> **[4:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=272)** This does not influence the metadata on the metaspace since we still have another O object and a P object.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=278)** So the objects on the metaspace, there's still needed, and they're still alive.
>
> **[4:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=282)** But what happens when we actually lose one more?
>
> **[4:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=286)** So now we lost the other O reference.
>
> **[4:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=288)** And that means that we no longer need the metadata of our O anymore.
>
> **[4:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=292)** So when the garbage collection is going to come by and it's going to delete the O objects from the heap, it can also then delete the object from the metaspace.
>
> **[5:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=300)** So please be aware here that as long as the objects are still in the heap, even though they're not alive, we do need to metadata in the metaspace.
>
> **[5:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=308)** And then now we only have some P left.
>
> **[5:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=310)** So as soon as that reference gets lost, we would also be able to remove that from the metaspace.
>
> **[5:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=317)** I actually already said that the metaspace works differently for garbage collection and there's only two triggers that can actually start a garbage collection on the metaspace.
>
> **[5:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=326)** The first one is when the metaspace gets allocated and it grows beyond the threshold of the GVM, it'll try to free up memory first.
>
> **[5:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=334)** This is a special threshold that'll see later.
>
> **[5:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=337)** The second trigger is when the metaspace runs out of memory.
>
> **[5:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=341)** It'll try to fix this by running garbage collection on the metaspace.
>
> **[5:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=345)** So these are the only two events that will trigger garbage collection on the metaspace.
>
> **[5:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=349)** The metaspace architecture consists of different layers itself as well, but that's beyond the scope of this course.
>
> **[5:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap?u=76281980&t=354)** We now have enough knowledge about the young and old generation and metaspace to have a look at generational garbage collection in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), while. (2), delete (2), class, (1)
> **Definitions:** means that (3), is called (1), is a  (1)
> **Env Vars:** gvm (3)
> **Versions:** java 8 (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)

#### Generational garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=0)** - [Instructor] Imagine that you have a Java application running.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=3)** In order to mark every live object, you'd have to pause the application completely.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=8)** Marking is an expensive process for this reason.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=12)** You may wonder right now, why does the application need to be paused?
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=15)** Well, imagine that you have to check all the objects on the stack.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=19)** There can actually be objects being created afterwards if you don't pause the application.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=23)** And if that happens, these later created objects, they're not marked on the heap and thus they will be eligible for garbage collection while they're still needed and in use.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=32)** I mean, they've been newly created.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=34)** This is why you would have to pause the application.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=37)** And as you can imagine, that will be very expensive and horrible for the performance of your application.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=42)** This strategy for garbage collection is actually called Stop the World.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=46)** The opposite of this is a congruent collector that can run alongside the application.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=50)** How this is working, it's using a very clever mechanism and we'll see it in the next video.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=55)** But for now, just know that there are alternatives out there.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=58)** So the Generational Garbage Collector is not collecting the full memory at once but, for example, only going to be focusing on the young generation.
>
> **[1:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=67)** This works well for applications in which most objects die young.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=71)** This is typically done with a copy strategy.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=74)** And the decision of when to promote objects from young to old is of major importance for the performance of your application here.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=80)** I'm not saying there's a good choice or a bad choice.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=83)** It truly depends on your applications.
>
> **[1:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=86)** If you let the objects live in the young generation for a bit longer, it helps them to have died and never to make it to the old generation.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=93)** But if you make this time too long, the young generation will take up a lot of space and can run out of memory.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=99)** Also, if you left them in the young generation for too long, the promoting to the old generation of all the objects that you have made, since it was very long, it takes really long as well.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=109)** So making the right choice is critical here.
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=112)** These generational collectors typically use a so-called remembered set.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=116)** Simply put, this remembered set, keeps all the references from objects to the young generation via the old generation to the stack.
>
> **[2:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=124)** And this helps the collector in that there is no scanning necessary or else the indirect reference to the stack via the old generation would be missed when garbage was collected to only the young generation.
>
> **[2:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=136)** So this helps in that there is no scanning necessary of the old generation since references are in the Remembered Set.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=144)** These generational collectors typically use different strategy for the young and the old generation.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=149)** So the young generation could be a stuff the world collector had copied the entire set of life objects to the old generation.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=155)** And the old generation could use mark sweep compact collector, for example.
>
> **[2:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=160)** Either stop the worlds congruent or any of the other options that are out there.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=164)** What options, you may wonder?
>
> **[2:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/generational-garbage-collection?u=76281980&t=166)** Well, we'll look into the different implementations of the garbage collectors in the next video.

> [!info]- Semantic Content
>
> **Analogies:** imagine (3), for example (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Different garbage collection implementations
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=0)** - [Instructor] The standard GVM has five types of garbage collectors.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=4)** There are some other ones out there such as IBMs, under source garbage collector.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=8)** And what you'll do, you can quite easily understand after earning these five built-in garbage collectors.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=13)** So the five ones are the serial garbage collector, the parallel garbage collector, the concurrent mark and sweep garbage collector, the garbage-first garbage collector and the Z garbage collector.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=25)** So let's just start with the first one.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=27)** The serial garbage collector uses the mark and sweep for the young generation and the mark sweep compact for the old generation.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=36)** This garbage collector is running on a single thread and it's stop-the-world implemented.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=41)** Meaning that the rest of the application is frozen until the garbage collection is done doing a full cycle.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=46)** It is fine for small programs, but due to the stop-the-world, it's not what is typically chosen for larger programs.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=53)** Then we also have the parallel garbage collector.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=56)** And it's using the mark and copy for the young generation and also the mark sweep and compact for the old generation.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=62)** Well, this might sound very familiar after having a seen the serial garbage collector, but there's difference here.
>
> **[1:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=67)** It's not running on a single thread, but it's running on multiple threads, splitting up the marking, copying and compacting phase.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=74)** It has still stopped the world, but due to the multiple threads, the world needs to be stopped for a short amount of time.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=80)** This is a fine option for a multiple core machine, on a single core machine, two might as well use the serial garbage collector due to the cost of managing the multiple threads on the single core.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=89)** So it's not really processing a parallel on the single core machine anyways.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=94)** So then we also have to concurrent mark sweep which is actually in upgrade from the previous one because it's still doing mark and copy stop-the-world for the young generation, but for the old generation, it's doing the mark sweep and compact, mostly concurrent.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=109)** Concurrent is different from parallel since it doesn't require the application to stop.
>
> **[1:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=113)** It's doing it concurrently next to the application.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=116)** So it's not just pausing until it's done, but, it's concurrent with the execution of the application and running on multiple threads.
>
> **[2:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=123)** This means that the application is running at the same time which makes it very, very different from parallel.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=129)** But there's downside here, this will only work when it's running on the system that supports this because it's a bit heavier.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=135)** So it's usually mark and copy with stop the world for the young generation, mostly concurrent mark and suite for the old generation and with mostly concurrent we mean that, it's preferring concurrent but sometimes whenever it's necessary, it'll use stop-the-world instead.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=149)** So that sounds like wide up right, but the garbage first garbage collector introduced in J7 is even improvement for the CMS garbage collector.
>
> **[2:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=157)** So what this one does is actually defining the heap in small regions and the garbage first collector is parallel, concurrent, and incrementally compacting.
>
> **[2:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=167)** It aims for a very low pause of the application.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=170)** And thanks to this division of the heap in the smaller regions, this is actually possible.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=174)** So this is much smaller regions than just the young and old generations, but these smaller bits of heap they are actually marked with the specific memory region.
>
> **[3:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=183)** So the garbage first gives track of the amount of live and death objects per memory segment and the segments with the most that objects are collected first, hence the name garbage first collector.
>
> **[3:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=194)** The compacting still needs to happen stop the world cell, unfortunately but this pauses can be shorter due to the smaller regions.
>
> **[3:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=201)** The garbage collector is the best choice for machines with a high performance and a large memory space.
>
> **[3:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=206)** And it is also running on multiple threads and it's using concurrent and stop the world processes.
>
> **[3:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=212)** So what about the Z garbage collector?
>
> **[3:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=215)** The Z garbage collector is the newest kit on a block in this list.
>
> **[3:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=218)** And it has production in status since Java 15.
>
> **[3:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=221)** The Z GC performs all the tough garbage collecting work concurrency without pausing for more than 10 milliseconds.
>
> **[3:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=229)** So the Z GC start with a marking of the live objects, but it does so in a special way.
>
> **[3:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=235)** It's not keeping a map, but it's using a phenomenon called reference coloring.
>
> **[3:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=239)** It's stores the reference date as the bits of the references theirselves.
>
> **[4:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=244)** So the Z GC therefore only works on 64 bit systems since the references don't have enough bits to do this only 32 bit systems.
>
> **[4:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=252)** The Z GC also uses relocation to avoid defragmented memory as a result of the garbage collecting.
>
> **[4:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=258)** It does this process in parallel with the application since it doesn't want to pass for more than 10 milliseconds.
>
> **[4:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=265)** You can imagine that this is tough for an application.
>
> **[4:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=267)** Imagine that we have a reference to a certain object but in parallel to the executing application, this objects got relocated.
>
> **[4:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=275)** So if we try to access it using the old reference, we would be accessing the wrong memory location.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=280)** This is solved with load barriers.
>
> **[4:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=283)** They run whenever references from the heap is loaded.
>
> **[4:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=286)** It checks the metadata to make sure that these bits of the reference are based on the result.
>
> **[4:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=290)** It may or may not do some processing before retrieving the result.
>
> **[4:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=294)** And this magic is called remapping.
>
> **[4:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=296)** Also these Z GC is running on multiple threads.
>
> **[5:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=300)** These are the standard garbage collector implementations that you can choose from nowadays.
>
> **[5:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=304)** The best garbage collector depends on the system anti application.
>
> **[5:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-garbage-collection-implementations?u=76281980&t=308)** Knowing if the garbage collection is performing well requires monitoring which is what we'll be looking at in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), pass (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Analogies:** imagine (2), such as (1)
> **Env Vars:** gvm (1), cms (1)
> **CLI Commands:** make (1)
> **Versions:** java 15 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Monitoring garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=0)** - [Instructor] There are a few metrics relevant for garbage collection.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=3)** The first one is the allocation rate.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=6)** This is how fast your application is allocating objects in memory.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=10)** The next one is the heap population.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=12)** This is the amount of objects that's alive on the heap.
>
> **[0:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=16)** Next is the mutation rate.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=18)** This is how often references are updated in a memory.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=22)** Another important one is how long the objects typically live.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=25)** One application may have mainly objects that die young, while another application is a fair amount of objects that need to live for a rather long time.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=33)** For monitoring the performance of your garbage collector, mark time and compaction time are typically the most important.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=39)** The mark time is how long the garbage collector needs to find all the live objects on the heap.
>
> **[0:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=45)** And the compaction time is how long it takes the garbage collection to free up all the space and relocate the objects.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=52)** The garbage collection cycle time is how long it takes the garbage collector to perform a full garbage collection round, meaning checking all the objects on the heap.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=62)** The larger memory space available, the better the garbage collection can do its job.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=66)** If there was unlimited memory, we wouldn't need garbage collection at all.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=71)** For the copy and compact collector, it's necessary to have enough space available for copying and relocating, for example.
>
> **[1:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=78)** If there's only a tiny bit of memory available the copy collector would have to start with a very small part, free up memory so that it would copy a slightly large portion next time, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=88)** When there's very little memory available, you'll see the CPU usage go up, for garbage collection because it needs the tiny cycles a lot.
>
> **[1:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=96)** Choosing the right amount of memory will improve the performance of your application as well.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=100)** Let's monitor a garbage collection process.
>
> **[1:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=104)** In order to monitor garbage collection process, we need some sample code, and look at this code, it's horrible, but it's going to do the job.
>
> **[1:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=111)** So what's happening here?
>
> **[1:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=112)** I have an infinite loop, and in this infinite loop I'm adding a thousand elements to an array list.
>
> **[1:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=118)** And when there are 1,002 elements on the list, I'm going to create a new array list.
>
> **[2:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=124)** So all the elements on the list become eligible for garbage collection, at that point.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=129)** Then I set I back to zero, and so on and so on.
>
> **[2:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=132)** It's an infinite loop.
>
> **[2:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=133)** So I'm going to be starting this, and then I'm going to open a profiler, so we can actually see this.
>
> **[2:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=139)** So this has started, let's move over to visual VM.
>
> **[2:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=143)** So here we have the example process, and I'm going to click on the monitor.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=149)** And as you can see here, the memory on the heap is increasing, and then is decreasing again.
>
> **[2:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=154)** So the garbage collection is doing its work.
>
> **[2:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=157)** So how can I see that this is not too bad?
>
> **[2:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=159)** Whoa, I'm looking at the heap size here.
>
> **[2:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=161)** And I see that every time, when the garbage collector has been there, it's going to around the same memory level, meaning that the memory use is not constantly increasing tiny bit over time.
>
> **[2:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=172)** So that's a good sign.
>
> **[2:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=173)** And then another one that's good, so the CPU usage is quite steady, and not too high.
>
> **[2:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=179)** I can do more in here, but we'll actually be showing that later.
>
> **[3:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=184)** In the next chapter, we're going to have a look at the usage of GVM tuning to improve the usage of the memory by the GVM.
>
> **[3:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/monitoring-garbage-collection?u=76281980&t=190)** Here we'll also see how we can tune the garbage collector.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), this. (1)
> **Env Vars:** cpu (2), gvm (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Solution: Eligible for garbage collection
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=0)** - [Instructor] Your job was to mark the objects eligible for garbage collection, and here's how to do that.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=12)** On line 23, it's indicating that it is done processing, so after that, we no longer need to keep the object.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=19)** So in this case, we implemented the release object by setting it to null.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=23)** There's no use for calling System.gc.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=25)** That's not marking it for garbage collection.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=27)** What is marking it for garbage collection is when it's no longer having a relation to the heap, and here we're doing that by setting the reference that we're having to null.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=37)** So if I go ahead and run this code, you can see that it validates, and it's saying you did it.
>
> **[0:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-eligible-for-garbage-collection?u=76281980&t=42)** The result is exactly right.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. JVM Tuning

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is JVM tuning?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=0)** - The Java virtual machine, better known as the JVM, can be configured to optimize the performance of the application.
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=7)** Why is that you may wonder?
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=9)** Well, JVM provides the runtime environment for the application.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=12)** So when that's one being changed, the application might actually perform better.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=17)** All applications are different, and even though your application might be performing just fine, it could be performed even better with different JVM parameters.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=26)** JVM tuning should typically be the last improvement step to your performance though.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=30)** First, make sure that the code is optimized.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=33)** JVM tune is not just changing parameters for the JVM and then sit back and watch your application improve.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=39)** So what is it?
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=40)** It's actually more like some educated trial and error.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=43)** You determine what the requirements for the application are and you select the JVM parameters that fit this.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=50)** You're going to select JVM and the parameters and next you're going to do some checks and measure.
>
> **[0:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=55)** And if either of these checks and measures fails, you're going to have a look at the application and requirements again, and adjust the JVM parameters.
>
> **[1:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=64)** These are the questions you should ask for tuning the JVM.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=68)** First of all, is the memory functioning all right?
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=71)** And with memory, we do mean the heap memory over here.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=74)** So if this is functioning, alright, this means that there is a right amount of free heap available.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=80)** Not too much and not a little either.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=82)** Next, is the latency all right?
>
> **[1:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=85)** Latency is the time it takes to perform an operation and whether it's normal or not, it depends on the requirements.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=91)** It's also called responsiveness.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=93)** So how quickly the application responds to a certain stimulus.
>
> **[1:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=97)** If the new JVM parameters made it worse, this is a problem.
>
> **[1:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=100)** And the last question you should ask is, is the throughput normal?
>
> **[1:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=104)** Throughput is the amount of work that can be done for chosen units of time.
>
> **[1:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=108)** High throughput typically means that the application requires more memory and that responsiveness might be decreased.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-is-jvm-tuning?u=76281980&t=114)** Let's have a look at some of the options for tuning the heap size.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (11)
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** this. (1), let (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - the (1)

#### Getting JVM metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=0)** - [Instructor] So, all right.
>
> **[0:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=1)** When we want to do GVM tuning we kind of need to know what's going on in the GVM.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=6)** So, how to get the metrics of what's going on in the GVM?
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=10)** There are actually multiple options.
>
> **[0:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=12)** First of all, there's a bunch of command-line tools for this.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=15)** There's also all sorts of visualization tools and there's some more complex profilers.
>
> **[0:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=20)** Profilers really get some insights of what's actually going on inside GVM by showing the GVM metrics.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=27)** It's doing so in monitoring the Java a bite code and it's seeing how it's really operating at the GVM level.
>
> **[0:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=33)** So for the purpose of this course, we're going to be diving into the first two.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=37)** So we're going to have a look at the command-line tool, Jstat, and we to be using VisualVM for visualization.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=44)** So first of all, jstat what is this?
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=47)** Well, it's actually a GVM statistics monitoring tool, jstat.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=52)** How to use it?
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=53)** On the command-line, we use the command jstat.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=56)** You have it already, that's the great news here.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=59)** And then you have all sorts of output options.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=62)** You can specify interval and an amount of time you'd like to do this.
>
> **[1:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=66)** So we're going to use the output option, gcutil, garbage collection util, to see some things going on with the garbage collection.
>
> **[1:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=74)** And we're going to do so using our example application again.
>
> **[1:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=80)** So I'm going to be starting this application.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=82)** And once I've done that, I need to find out the process ID of this application.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=88)** And I could do so using code but instead I'm going to be using my activity monitor.
>
> **[1:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=93)** Alternatively, you can also use VisualVM, which is one I'm going to be showing next.
>
> **[1:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=97)** Or you can just use code to do this but this is a bit too complex to go over right now.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=101)** So I'm going to be running this example main.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=105)** So here's the activity monitor and I'm going to be looking for jstat in here.
>
> **[1:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=111)** And as you can see I actually having two.
>
> **[1:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=113)** And it is this one.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=116)** So the PID is 58324.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=120)** All right. Let's not forget that.
>
> **[2:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=122)** And then inside this terminal, I can actually use jstat.
>
> **[2:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=126)** I go ahead say jstat and I'm going to be using it with gcutil, so I'm going to be adding gcutil over here.
>
> **[2:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=136)** Then I'm going to be entering my PID 58324.
>
> **[2:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=141)** And then I'm going to be saying that actually want to see it at, well, let's just say half a second intervals and I want to see 10 outputs of it.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=152)** So every half a second it's actually showing me a whole bunch of data.
>
> **[2:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=155)** Don't worry, I'm going to be explaining this data right away.
>
> **[2:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=160)** So here we can see it.
>
> **[2:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=162)** We see the column names and the column names are for example, as zero, which stands for the survivor space.
>
> **[2:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=169)** And you also have the S1, which is also survive space, but there's different actually.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=174)** And this is utilization as a percentage of the space current capacity.
>
> **[2:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=179)** So we also have to eat, eat in space, all the old space.
>
> **[3:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=182)** Then we have M for the Metaspace, we have the young generation garbage collection events.
>
> **[3:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=188)** We have the young generation garbage collection time.
>
> **[3:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=191)** And next to that we have the number of full garbage collection events which was still zero all the time.
>
> **[3:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=197)** We also have full garbage collection time which is actually a very relevant metric but we don't have any at this point just yet.
>
> **[3:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=205)** And we also have the total garbage collection time which is in the very last column.
>
> **[3:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=209)** The other ones, they're not too important for this point.
>
> **[3:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=213)** But here you can see all this data and actually there are so many more options.
>
> **[3:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=217)** If you want to know all the details for jstat I can best recommend you to the Oracle documentation.
>
> **[3:42](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=222)** Here you can find so many more options.
>
> **[3:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=224)** So you see, for example all the output options you're having and all the things you can do with them.
>
> **[3:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=229)** So for example, we use the gcutil new right now but there's actually also a possibility to go ahead and see what's going on with the GC capacity.
>
> **[3:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=239)** All right. So that's jstat.
>
> **[4:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=241)** What about VisualVM I told you about?
>
> **[4:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=243)** Well, VisualVM, well, you may have guessed this, this is a visual tool.
>
> **[4:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=247)** And it has a bunch of integrated command-line statistics tools and some very lightweight profiling.
>
> **[4:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=252)** So this is not going to be a deep dive profiling but it's definitely enough to give us quite a idea of what's going on inside replication.
>
> **[4:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=260)** And we can actually also inspect heap dumps with it.
>
> **[4:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=263)** With heap dumps, we pretty much just mean a snapshot of the memory at a certain time, and it's going to be very useful.
>
> **[4:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=269)** We want to know what's going on inside memory and what's all stored in there.
>
> **[4:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=274)** So here we're having VisualVM and we can see the processes that are running on my computer.
>
> **[4:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=279)** So I'm going to be clicking on this one which is the one that's running the application we just started.
>
> **[4:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=285)** We also use jstat for this.
>
> **[4:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=287)** So what I'm I seeing here?
>
> **[4:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=288)** Well, this is just the overview.
>
> **[4:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=290)** We can see what process ideas running on, the host, the main class, and some more details of the application.
>
> **[4:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=296)** It's more interesting for us right now to actually go to monitor.
>
> **[4:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=299)** And in monitor, we can see live what's going on in here.
>
> **[5:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=303)** We see four quarters of the screen pretty much.
>
> **[5:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=306)** We see the CPU usage and the garbage collection activity in the left upper screen.
>
> **[5:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=312)** In the right upper screen, we see the heap and Metaspace usage.
>
> **[5:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=315)** So right now we're looking at the heap, and we can see that our heap is looking very healthy.
>
> **[5:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=320)** It's making nice ups and then all the way back down again when garbage collection kicks in.
>
> **[5:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=325)** In the tap next to it, we can actually also see the Metaspace.
>
> **[5:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=329)** Then in the left lower corner, we see the classes inside replication.
>
> **[5:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=333)** We can see the total that are being loaded and a total that are being unloaded.
>
> **[5:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=337)** Then on the right of that, we can see the threats inside our application which can actually be used for spotting deadlocks and lifelocks and all these sorts of events but they're not relevant for our memory.
>
> **[5:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=347)** All right. So this is what we can do with the monitoring.
>
> **[5:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=349)** What we can also do, we can trigger garbage collection here, which is quite cool.
>
> **[5:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=353)** And we can also say that this should create heap dump.
>
> **[5:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=356)** So for example, if I click on this heap dump right now, it's going to be creating a heap dump which is a snapshot of the memory.
>
> **[6:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=364)** And as you can see, we're having it right here.
>
> **[6:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=367)** So what's going on with this heap dump?
>
> **[6:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=369)** Well, we see some summary statistics here.
>
> **[6:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=372)** We see the classes by number of instances, instances by size and all sorts of details.
>
> **[6:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=377)** But we could, for example, also dive into objects a bit more.
>
> **[6:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=380)** For now, I'm not going to be going too much in depth there but we can see, for example, how many of byte (indistinct) are inside replication and how many of string.
>
> **[6:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=388)** Also, we can go ahead and have a look at all the threats inside replication, but this is not too relevant for a memory.
>
> **[6:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=394)** So I'm going to be leaving this here.
>
> **[6:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=396)** So this is VisualVM and you'll find yourself using this rather often when you want to know what's going on inside your memory real quick.
>
> **[6:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/getting-jvm-metrics?u=76281980&t=404)** So this VisualVM is actually the one that I'm going to be using most for the rest of this chapter because this is going to be serving the purpose of showing you what's happening inside a memory.

> [!info]- Semantic Content
>
> **Env Vars:** gvm (7), pid (2), cpu (1)
> **Code Keywords:** this. (3), let (2), this, (1), class, (1)
> **Analogies:** for example (6)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** find (3)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Heap size and heap dumps
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=0)** - [Instructor] The heap size is where the objects of the Java application live there objects and free memory.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=6)** The size of the heap influences garbage collection directly, a smaller heap size means that garbage collection have to take place more often.
>
> **[0:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=14)** If garbage collection needs to happen too often due too two small heap size this might influence performance of the application.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=21)** Depending on the system, this might be very unnecessary you clearly cannot have more heap size than RAM but when that's not a problem the heap size can be increased.
>
> **[0:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=31)** Another problem can occur when you set your heap size too big.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=34)** If the heap size is too big the GC will take unnecessarily long to do a full garbage collection cycle.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=41)** The best heap size is in line with your application needs a fine rule of thumb is to have a GC under less of 5% of the execution time of your application.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=50)** All right, enough talking, let's see how we can actually change the settings of the heap.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=56)** So here we're having the application again it's still not a great application but it's still perfectly fine for demonstrating how we can adjust to heap size.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=65)** So let me first, just start to Java example.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=68)** There we go to Java example and it's going to run now let me move to visual VM and here we can see the example process.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=77)** We can see underneath GVM arguments almost in the middle of the screen that is no GVM arguments and if we click on monitor, we can see the max size of tape it's around eight gigabytes.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=88)** Let's start the application again but this time with a much smaller maximum heap size.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=94)** So how to do that?
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=95)** Well, I'm going say Java again but now I'm going to give a GVM argument.
>
> **[1:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=99)** I'm going to say X, MX, and then in here, I can just specify the amount I would want.
>
> **[1:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=105)** So for example, I can say 1024 megabytes.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=109)** If megabytes, I just choose the M for gigabytes go ahead and use the G and then I specify the name of my application.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=116)** There we go, going to go back to visual VMs so you can see what has changed.
>
> **[2:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=121)** So here's the new example process and you can see that we have the GVM arguments XMX, 1024 megabytes.
>
> **[2:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=128)** So let's move over to the monitor and you can see that our max has now been adjusted.
>
> **[2:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=134)** If you're confused about this number not being 1024 et cetera.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=138)** This is because of the conversion from megabytes to bytes.
>
> **[2:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=142)** One megabytes is 1,024 kilobytes, for example, and so on.
>
> **[2:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=146)** So this is why we get this deviation in the number here but you can see that our application is doing quite well.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=152)** Garbage collection activity that's in the screen is fluctuating between 0.0 and 0.1.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=158)** Wow, that's outstanding actually so nothing to complain here, but actually might guess I'm going to see if I can make it perform worse you can actually see the difference in performance.
>
> **[2:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=167)** So I'm going to kill this one again and now I'm going to be starting it with just 16 megabytes there we go.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=174)** Moving back to visual VM again, and you can see the new GVM argument and if we're going to click on monitor, you can see that our max heap space is now really, really small.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=185)** and you can see that our coverage collection activity is now 1.6 which is still pretty decent but it's 16 times higher than the previous one.
>
> **[3:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=194)** So clearly the CPU has to work a whole lot harder right now.
>
> **[3:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=198)** So, here's how you can see how heap size influences the CPU usage directly.
>
> **[3:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=204)** There's actually more options that you can specify and you probably won't have to do this very often but just know that they exist.
>
> **[3:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=210)** For example, if you would have to set a max for the young generation, you could go ahead and say, -XX:maxnewsize and then you'd have an equal sign, specify the amount and then for example, the megabit again, the unit and then in here you go ahead and you put the name again.
>
> **[3:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=229)** So this is how you can specify the max new size and there's plenty of other options out there.
>
> **[3:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=235)** For example, you could also say XX heap jump on out of memory error which will we'll see later.
>
> **[4:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=240)** Similarly, as to adjusting the heap size we can also adjust them at the space size.
>
> **[4:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps?u=76281980&t=245)** Let's have a look at how to do that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** gvm (5), cpu (2), ram (1), xmx (1)
> **Code Keywords:** let (6)
> **Analogies:** for example (5)
> **Versions:** 0.0 (1), 0.1 (1), 1.6 (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)

#### MetaSpace size
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=0)** - [Instructor] Max Metaspace is not really defined by default.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=4)** Once it reaches its limits, the GVM simply increases it.
>
> **[0:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=8)** However, we can set a maximum size.
>
> **[0:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=10)** We do so by adding an option to starting our application.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=13)** Just say, XX, code on max metaspace size, equals, and then the maximum space size.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=19)** We can also set a threshold for garbage collection.
>
> **[0:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=23)** Remember that there were only two triggers that could trigger the garbage collection of the metaspace, one of them was the threshold, which we can set, and the other one is when it runs out of memory without the garbage collection.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=34)** Suddenly, maximum size or the threshold doesn't mean that it's actually going to be affecting the startup metaspace available.
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=40)** It just uses what it needs until it reaches the maximum.
>
> **[0:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=44)** Then, there's one last thing that you can adjust for the metaspace, and that's the minimum and maximum of free memory ratio.
>
> **[0:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=50)** This can be useful if you plan on loading many classes dynamically, and you may need some empty memory available to improve performance.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=57)** Suddenly, maximum size for the metaspace can actually be very critical to your application.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=63)** Migrating from Java 7 to Java 8 really was a disaster because of the changes in the perm gen versus the metaspace, and not setting the maximum size could actually make applications have a very, very heavy memory footprint.
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=76)** Let's move over to IntelliJ and see how to adjust these variables.
>
> **[1:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=81)** So again, I'm going to be using the very same application, and I would have to say Java and then specify the option.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=89)** So for example, if I would want to set the max metaspace, I could say -XX, and then go ahead and say, MaxMetaspaceSize= and then some sort of value, so I could make it very, very small.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=103)** I could, for example, say that it's only allowed to have four megabytes cuz I think eight's enough, but four is going to be too little, and then I'm going to say example here, so let's see if we can break it.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=114)** So, it's starting now.
>
> **[1:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=116)** Let's move over to VisualVM and inspect our process.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=120)** Here, we're having our process and the MaxMetaspaceSize=4m.
>
> **[2:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=126)** All right, so if I'm going to move over to monitor, you can actually see that the heap looks fine, but all of a sudden we don't see the CPU, and if I'm going to click on metaspace, you can see that this is all, the size, the max and used, it's all around the four megabytes, so this is a problem.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=144)** And actually, if we try to close this application, it's most likely going to break.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=149)** So let me terminate this application, and then we get it out memory or cured.
>
> **[2:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=154)** So actually, it's not capable right now of closing, so we need to forcibly terminate the VM, so I'm just going to close this terminal, which will actually close the VM, but I'll also have to close the Java process, so I'm going to be terminating this, and then in the terminal, I'm just going to kill the process, and I know what pid it's running on.
>
> **[2:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=176)** It's running on 85600.
>
> **[2:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=178)** So let's just go ahead and then kill it over here.
>
> **[3:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=183)** Kill, nine and then 85600, all right.
>
> **[3:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=189)** Usually, we don't need to do a lot for the metaspace, but if you need to restrict the usage of the application on your server, for example, this can definitely be the way to go to manage the resource that you're having.
>
> **[3:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=200)** As I already mentioned, when you're migrating from Java 7 to Java 8, for example, you probably want to do this.
>
> **[3:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=206)** But, it's more common to tune the garbage collector.
>
> **[3:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size?u=76281980&t=210)** In the next video, we'll have a look at some of the options for tuning the garbage collector.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default. (1), break. (1), this, (1), this. (1)
> **Versions:** java 7 (2), java 8 (2)
> **Analogies:** for example (4)
> **Tools:** terminal (2), intellij (1)
> **CLI Commands:** make (2)
> **Env Vars:** gvm (1), cpu (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)

#### Garbage collection tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=0)** - [Instructor] The garbage collection process is an expensive one and that means it's taking up a lot of CPU.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=6)** As already mentioned, changing the heap size also changes the functioning of the garbage collection.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=11)** Please keep that in mind as well.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=13)** Before you start adjusting the settings of your garbage collector, you'll want to have a look at memory.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=17)** See which different types of spaces are filled, when this typical happens, et cetera.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=22)** There are extremely many options for Trinity garbage collection but we'll only have a look at a few.
>
> **[0:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=28)** First of all, you can choose the type of the garbage collector.
>
> **[0:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=30)** So for example, the zero garbage collector or concurrent mark-sweep garbage collector and third type of garbage collector, there's even more settings.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=39)** I'll show you the official documentation where you can find everything because this video's going to be way too long and you're going to be fast asleep by the end if I'm going to go over all of them here.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=49)** But, what is good to know if you look at the heap, this is what the healthy heap looks like when the garbage collection is doing its job well.
>
> **[0:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=58)** You can see that the memory used is increasing and then the garbage collection kicks in, memory usage decreases over time and it decreases to the previous level.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=68)** Then it increases again and it decreases to the previous level.
>
> **[1:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=71)** You don't see an increase of the base level of the memory so to say over time.
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=76)** Here's an example of an unhealthy heap.
>
> **[1:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=79)** Here the garbage collection process is not working well.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=82)** Actually, the garbage collection process is working well over here, but in this case, there is a memory leak which we'll learn more on later.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=89)** But you can see that here over time, the garbage collector is not doing its job effectively.
>
> **[1:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=94)** It's actually not managing to get it back to the base level.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=98)** Well, we can't blame the garbage collection here because no setting of the garbage collection would have fixed this.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=103)** But what you can often fix is when the execution time of the garbage collector gets too high.
>
> **[1:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=109)** So, when starting a GVM, you can specify what garbage collector to choose.
>
> **[1:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=114)** For example, you can say use serial garbage collector, use parallel garbage collector, use the concurrent mark-sweep garbage collector to the garbage first garbage collector or the Z coverage collector.
>
> **[2:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=125)** And depending on the one you are choosing here, your application's going to be behaving differently.
>
> **[2:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=130)** So please do keep that in mind and know that for all these garbage collection choices, you'll actually have specific options.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=138)** For example, for the parallel garbage collector, you can specify how many threads to use by adding the ParallelGC threads option.
>
> **[2:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=145)** There are so many more options.
>
> **[2:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=147)** Before I'm going to show you a demo of how to use this, I would like to show you the official Oracle documentation first that you can have a look at all the options that are out there.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=158)** So here we have the Oracle documentation and it starts with the general tuning.
>
> **[2:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=164)** But for example, if you want to know what's possible for the garbage first garbage collector, you can move over here.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=170)** So here we have all the options for the garbage first garbage collector.
>
> **[2:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=173)** As you can see, there're quite a bit of them.
>
> **[2:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=176)** They have the options and the default values here and then the description of what it's actually doing.
>
> **[3:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=181)** So for example, if you would want to notice for the concurrent mark-sweep garbage collector, we would move here.
>
> **[3:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=186)** And as you can see, there's this description and in bold, we see the options that we're having.
>
> **[3:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=191)** So for example, we can use a used garbage collector overhead limit when we want to disable the feature where we actually stop the application with out of memory when we are spending 98% of our time on garbage collection.
>
> **[3:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=205)** And so there are many more options in here and all these garbage collectors, they have specific options.
>
> **[3:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=213)** All right, let's move over to our application again and see whether we can see the impact of using the serial garbage collector.
>
> **[3:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=221)** So I'm going to be starting our application again but this time I want to do so using the serial garbage collector.
>
> **[3:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=228)** Say use serial garbage collector like this for our example class.
>
> **[3:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=233)** And now I'm going to move to Visual VM and we can see we're using the serial garbage collector.
>
> **[4:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=240)** And then I'm going to move here and you can actually see that this time the garbage collection activity, it's very, very low which makes sense because it doesn't need to do a lot with this large heap size.
>
> **[4:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=252)** But if I'm going to be decreasing the heap size now, you'll definitely see the impact.
>
> **[4:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=257)** So let's kill the application and now also specify the max heap size.
>
> **[4:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=261)** Let's just tease our application a bit and put it to what shall we do.
>
> **[4:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=266)** Let's go for the 16 megabytes again.
>
> **[4:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=271)** And as you can see, we're using both arguments here and we're going to be monitoring it.
>
> **[4:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=276)** And as you can see, the garbage collection activity is right now at 0.6%.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=280)** All right, let's have a look at what happens if we use the parallel garbage collector here.
>
> **[4:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=286)** So I'm going to be updating this to the parallel one,
>
> **[4:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=294)** open our new process and we can see we're using the parallel garbage collector and I'm going to be monitoring this.
>
> **[5:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=301)** Funny enough, you can see right now that it actually has a larger garbage collection activity.
>
> **[5:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=307)** And this is not too weird because it's actually a very simple process.
>
> **[5:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=310)** So the cost of organizing this in parallel is higher than doing it serial, which is quite funny.
>
> **[5:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=316)** Let's see what happens if we try to use the garbage first garbage collector.
>
> **[5:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=322)** So I'm going to be updating this to the G1 garbage collector so we don't need to use word here.
>
> **[5:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=329)** We do need to use word there.
>
> **[5:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=334)** So we can see we have the new options right now.
>
> **[5:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=338)** And as you can see, our garbage collection activity is quite high as compared to the parallel one.
>
> **[5:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=343)** So the winner so far is actually the serial garbage collector.
>
> **[5:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=348)** Truth be told, we're only looking at the garbage collection activity here.
>
> **[5:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=352)** And it's actually very possible that when we're not only looking at garbage collection activity but we're also going to look at for example, the latency of our application and throughput, that the other options are actually better.
>
> **[6:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=364)** So this is why it's very important to always measure everything so that you can see the impact of which garbage collector you're using.
>
> **[6:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=371)** Cuz as you can see so far, it does definitely impact your application.
>
> **[6:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/garbage-collection-tuning?u=76281980&t=377)** In the next chapter, we're going to have a look at memory leaks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), case, (1), this, (1), class. (1)
> **Analogies:** for example (7)
> **Env Vars:** cpu (1), gvm (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Versions:** 0.6 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Memory Leaks

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What are memory leaks?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=0)** - [Instructor] Let's talk about one of the biggest problems that can come from poor memory management, memory leaks.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=6)** Memory leaks are the accumulation of objects on a memory that are actually no longer needed.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=11)** Objects are created but the memory doesn't get freed when they are no longer needed.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=15)** The reasons for this may vary, and the number of objects on a memory will just keep on increasing.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=21)** Sometimes this goes very slowly, but it can also go quite fast.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=25)** Eventually memory gets so full that it slows down the application, and ultimately it leads to a crash.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=32)** And when memory is so full and there is no memory anymore, we'll encounter an out-of-memory error.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=37)** This kills the application.
>
> **[0:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=39)** Memory leaks are a serious problem.
>
> **[0:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=41)** Even nowadays, when most applications are developed in a high level language at memory management, for example by the JVM in Java, there are still plenty of opportunities to create memory leaks in your code.
>
> **[0:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=53)** And this can also happen on super fast servers.
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=56)** Why?
>
> **[0:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=56)** Well, ram is a limited resource even on the best servers and a limited resource can get full.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=62)** If you host your application in the cloud you may think right now, "then we'll just scale up and we won't run out of memory."
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=68)** Well, depending on the settings, that might be right.
>
> **[1:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=70)** But it will at least result in unnecessarily high cloud cost because you'll need to run an instance that is bigger than it should be due to the memory leaks.
>
> **[1:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=77)** Crashed applications are unavailable applications, but also when it's very slowed down it might be unavailable.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=83)** There is no need to tell that unavailable applications are not good for keeping, let alone growing, your users of your application.
>
> **[1:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=90)** So enough reasons to be spotting, solving, and avoiding memory leaks.
>
> **[1:35](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/what-are-memory-leaks?u=76281980&t=95)** Let's see in the next video how we can detect memory leaks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), super (1)
> **Env Vars:** jvm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Spotting memory leaks
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=0)** - [Instructor] Memory leaks don't seldomly exist unsolved.
>
> **[0:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=3)** Just restart your application, and you're good to go for another X number of days.
>
> **[0:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=7)** Clearly, this is no one's preferred option, but if you don't have a clue what's going on or perhaps you don't have the time to find out what's going on, it might just be that.
>
> **[0:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=15)** By the way, a slow application does not always mean a memory leak.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=19)** So, how to spot memory leaks if that's not it?
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=22)** Can you tell by just using application?
>
> **[0:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=24)** Well, no.
>
> **[0:25](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=25)** The slowing down of the application is often an indication of a memory leak, but this slower application is definitely not guaranteed to be caused by memory leak.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=34)** In order to be sure, we'll need to do some monitoring.
>
> **[0:37](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=37)** The metrics we'll have to look at is the heap memory size and the portion of that that will be full.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=43)** And we can actually also inspect the garbage collection activity.
>
> **[0:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=46)** And we can have a look at the heap dump.
>
> **[0:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=49)** I have created an application that contains a memory leak.
>
> **[0:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=52)** Let's have a look.
>
> **[0:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=54)** So here is the example that actually contains a memory leak.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=57)** Maybe you're really quick to spot it, but if you don't, don't worry.
>
> **[1:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=61)** We're going to see what's happening, first.
>
> **[1:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=63)** So we have a list of persons, and "person" is a new object I've made.
>
> **[1:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=68)** It's over here. This is the person class, and it just contains a name.
>
> **[1:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=72)** It also has a constructor that's going to be setting the name. All right?
>
> **[1:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=76)** So what we're doing, we're infinitely adding a person to our list, a new person.
>
> **[1:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=82)** Why infinitely, you may wonder?
>
> **[1:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=84)** Well, this time, we're not incrementing "i" at the end of our loop.
>
> **[1:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=88)** All right, let's run this application.
>
> **[1:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=90)** There's actually multiple ways to run the application.
>
> **[1:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=92)** We could just press the play button, but we can actually also start it with the command line.
>
> **[1:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=98)** And there's an advantage here, because if we start it with the command line, we can create a heap dump.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=103)** Let's go ahead and do exactly that.
>
> **[1:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=106)** So I'm going to say java -XX:+HeapDumpOnOutOfMemoryError.
>
> **[1:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=117)** All right, and then I also want to specify the path for a heap dump.
>
> **[2:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=120)** If we don't, it's going to be using some default path, but I don't want that right now.
>
> **[2:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=124)** I actually want my heap dump to be in HeapDumpPath= and I'm just going to put it in /Users/, my name, and then hd, heap dump.
>
> **[2:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=135)** Think that's a fine place to store a heap dump.
>
> **[2:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=138)** And I'm also going to say xample00M, because that's the class that I want to be running here.
>
> **[2:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=144)** All right, let's run this one and move over to VisualVM.
>
> **[2:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=151)** So here we're having our process.
>
> **[2:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=152)** And as you can see, the heap is getting quite full already.
>
> **[2:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=156)** CPU is busy, quite busy, actually.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=158)** And it's working really hard to try and avoid this heap dump here.
>
> **[2:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=161)** You can also see the garbage collection activity sometimes increasing.
>
> **[2:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=165)** And not long from now, it's going to actually crash with an out of memory error.
>
> **[2:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=170)** Hence the "oom", it stands for out of memory.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=174)** And there we have it. It crashed.
>
> **[2:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=177)** All right, so it has made a heap dump, but this can actually take quite a while because the heap dump is going to be quite big.
>
> **[3:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=184)** So here's the folder.
>
> **[3:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=185)** This is not too interesting, I'm just showing you it's in here.
>
> **[3:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=189)** And what is striking is that the size of his document is huge.
>
> **[3:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=193)** So how to open a heap dump?
>
> **[3:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=195)** It's a weird extension, right?
>
> **[3:16](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=196)** Well you can definitely open this in VisualVM.
>
> **[3:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=199)** You can open it to some of the IDEs as well.
>
> **[3:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=201)** But if you try to open this with text edit, for example, you will see a lot of text you can actually read but it's impossible to make sense of this.
>
> **[3:28](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=208)** So I'm going to go for VisualVM to open this one up.
>
> **[3:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=212)** And actually opening the heap dump will help you to see what's actually a heap dump.
>
> **[3:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=216)** It's literally a dump of whatever is in the heap.
>
> **[3:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=219)** So all the objects that are in the heap dump.
>
> **[3:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=221)** So I'm in VisualVM, and I'm going to say File > Load, and then I'm going to be selecting my heap dump over here and I'm going to be opening it.
>
> **[3:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=230)** And this can actually take quite a while, because as you just saw, it's a huge file.
>
> **[3:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=236)** All right.
>
> **[3:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=237)** So let's first look at what we can actually see in VisualVM, about the memory crashing.
>
> **[4:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=242)** So we started our application and we could see the memory increase.
>
> **[4:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=245)** And we could actually also see the CPU usage being quite high.
>
> **[4:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=249)** And after the garbage collection actually set in here, we could see that when this was done, the CPU dropped again, and then it would start to increase again.
>
> **[4:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=258)** And the garbage collection activity was, well, it's not too bad, but it is quite high.
>
> **[4:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=263)** Especially if you're seeing nothing happening on the heap in terms of the memory being decreased.
>
> **[4:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=270)** But as you can see, this memory is not very typical for a healthy application.
>
> **[4:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=274)** You can see it has a baseline, but the baseline is incredibly high.
>
> **[4:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=278)** So this is quite worrying.
>
> **[4:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=280)** And even though you see it drop at some point, you actually also see it increase again quite soon, and then it cannot actually do garbage collection again after that.
>
> **[4:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=288)** So you may wonder how is it even possible that it's managing to collect some garbage items?
>
> **[4:53](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=293)** Because, well, we didn't really have anything that was eligible for garbage collection inside our application.
>
> **[4:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=298)** Well, there's tons of strings and stuff in Java that are being loaded by GVM that can actually be removed later.
>
> **[5:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=305)** So this can actually be done when the garbage collector really needs to be removing something, and there's nothing else that can be removed.
>
> **[5:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=311)** Then this is typically what the GVM would be doing.
>
> **[5:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=314)** You can also see it in the left bottom graph, which is actually the total loaded classes.
>
> **[5:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=319)** You see that there's a whole bunch of classes loaded and only a few unloaded.
>
> **[5:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=323)** We can also go ahead and have a look at the metaspace, but this one is quite constant since we're not doing a lot over here.
>
> **[5:30](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=330)** So to sum up, how can I see here that something's wrong with the memory?
>
> **[5:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=334)** Well, it's not too obvious in this case, but there are some very, very clear indications.
>
> **[5:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=339)** First of all, the memory heap usage, the blue part, is quite high.
>
> **[5:44](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=344)** And the line doesn't have anything that's dipping.
>
> **[5:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=347)** So it has one, a very obvious dip, but this is only the initial garbage collection cycle.
>
> **[5:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=352)** And even though I can see that the garbage collection activity is quite constant, there's nothing else happening to the heap, which is typically an indication of something being wrong.
>
> **[6:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=361)** Well clearly, in a different application, there might be more going on, and there could still be reasons that the garbage collection can actually be removing something.
>
> **[6:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=369)** So there you actually seeing more dips in the used heap.
>
> **[6:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=372)** But what you'll see in these types of applications, it's very much like one of the previous slides in the very first chapter of this course, where you could see that this has these kind of saw teeth which was just going up and down, but then it wasn't going down as much as it went up.
>
> **[6:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=387)** So it would just have a higher base level every time after it went down.
>
> **[6:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=391)** And this is a very typical look for the used heap of an application that has a memory leak.
>
> **[6:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=398)** All right, so here's our heap dump.
>
> **[6:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=400)** And well, what can we see here?
>
> **[6:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=403)** We are looking at a summary right now.
>
> **[6:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=405)** We can see this on the top, on the left, it says, "Heap Dump."
>
> **[6:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=409)** And underneath it says, "Summary" with a dropdown.
>
> **[6:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=412)** Actually, not all data is available yet.
>
> **[6:55](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=415)** What's relevant for us to see?
>
> **[6:56](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=416)** First of all, we can see the classes by number of instances.
>
> **[7:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=420)** And this is already quite striking, 'cause in this case it's super obvious and we can see what went wrong.
>
> **[7:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=426)** We have really, really a lot of the "Person" instances in there.
>
> **[7:10](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=430)** And on the right of that, we see the "Classes by Size of Instances", and also there the "Person" object is very dominant.
>
> **[7:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=437)** So this is a very clear indication to us that this is actually the problem with our application.
>
> **[7:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=443)** Well, we can actually see more.
>
> **[7:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=444)** 'Cause sometimes you would like to see more.
>
> **[7:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=446)** So for example, we can have a look at the out of memory thread, so we can see what happened.
>
> **[7:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=452)** And in this case, we can see that it happened with the adding to the array list.
>
> **[7:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=456)** And there's something else that we can actually see.
>
> **[7:39](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=459)** We can also check out the objects, which is also often very relevant.
>
> **[7:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=463)** So here we have the summary, and then beneath there we have the objects.
>
> **[7:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=467)** And we can sort them in different ways, but we could, for example, also see what they have references to.
>
> **[7:52](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=472)** So for example, if I open this one, and just grab any "Person" object here, I'm going to be asking what this has references to.
>
> **[8:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=480)** I can actually see what's holding a reference to this object.
>
> **[8:03](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=483)** So why does this still need to be in my application?
>
> **[8:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=487)** And as I already said, this is very big.
>
> **[8:08](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=488)** So heap dumps navigating, it's typically very slow.
>
> **[8:12](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=492)** You can see the computing in the right lower corner.
>
> **[8:15](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=495)** All right, so here we can see the object that's holding our reference.
>
> **[8:20](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=500)** And as you can see, it's elementData and the java.util.ArrayList.
>
> **[8:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=504)** This is giving us some great clues as to where the problem is.
>
> **[8:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=509)** All right, so we can now detect memory leaks.
>
> **[8:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=512)** That's great.
>
> **[8:33](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=513)** But it would be even better if we know how to solve them after finding them, or actually even better, how to avoid them and make sure that they don't happen.
>
> **[8:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/spotting-memory-leaks?u=76281980&t=521)** Which is exactly what we're going to be doing in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), class, (1), this. (1), while, (1)
> **Env Vars:** cpu (3), gvm (2)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** xample00m (1), elementdata (1)
> **Tools:** command line (2)
> **Cross-References:** in the next (1)

#### Avoiding and solving memory leaks
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=0)** - [Instructor] Avoiding and solving memory leaks is not as easy as it may sound.
>
> **[0:04](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=4)** The first step for solving them is the hardest and we just saw how to do it, find the problem.
>
> **[0:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=9)** This is really the most important part of solving memory leaks.
>
> **[0:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=13)** Next, it's very important to realize how memory leaks are created in Java.
>
> **[0:18](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=18)** Objects hold unnecessary connections to the stack.
>
> **[0:21](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=21)** If you can avoid this from happening, you can actually avoid memory leaks altogether.
>
> **[0:26](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=26)** And once you have found a problem, it's actually time to improve the code.
>
> **[0:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=31)** There's usually no need for complicated GVM tuning.
>
> **[0:34](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=34)** You'll just have to look critically at your code and fix the problems in your code.
>
> **[0:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=40)** Let's have a look at how to fix it for our example and this is actually very easy because, well, I already told you what was wrong.
>
> **[0:47](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=47)** We got this out of memory because we actually got stuck in an infinite loop and we could never get out and we were just adding person objects to the list and adding person objects to the list.
>
> **[0:57](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=57)** So when will we actually get out of this loop?
>
> **[1:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=60)** Well, we can either decide to break out of the loop which will probably solve the memory problem but what we can also do is just create a new array list every now and then.
>
> **[1:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=69)** And this will actually be enough for Java to start cleaning up the heap because when we have a new array list and install the old variable that was holding the reference, there's no longer a need to keep the old array list or all the objects on it.
>
> **[1:23](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=83)** So just making sure that the I gets incremented so that it reaches over a thousand and then a new array list is being created.
>
> **[1:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=89)** This will already solve the problem.
>
> **[1:31](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=91)** Let me show this to you, but please mind, this is running forever so I cannot show that there's never going to be causing memory leak but at least you can see the healthy heap behavior.
>
> **[1:41](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=101)** So let me open this one.
>
> **[1:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=103)** And I'm going to be monitoring this and as you can see, it's going up and then it's going back down again.
>
> **[1:50](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=110)** And this looks so much better looking at this 'cause as you can see, the heap size is increasing and then it's decreasing again with the gar collection activity.
>
> **[1:58](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=118)** Also you can see that the gar collection activity is so much lower compared to when we had the out of memory error 'cause then it was around three and a half percent and now it's an average 0% so this is pretty good.
>
> **[2:09](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=129)** So this is what it looks like in a healthy state.
>
> **[2:13](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=133)** So here are some things that's going to help to solve the memory leak.
>
> **[2:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=137)** First of all, set the object to null in certain specific situations, such as what we just saw.
>
> **[2:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=142)** If we would make sure that the original list is null, then there's no reference anymore and then in that case, its ready for garbage collection.
>
> **[2:29](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=149)** Also make sure to close resources such as streams and connections, 'cause keeping these resources open is helping a lot of unnecessary objects on heap.
>
> **[2:38](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=158)** Same goes for a string concatenation.
>
> **[2:40](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=160)** This is typically something you don't want to do because string concatenation is creating all these new string objects.
>
> **[2:46](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=166)** So it's much better to use string builder instead.
>
> **[2:48](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=168)** We need to modify strings a lot.
>
> **[2:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=171)** Also be careful with static collections holding objects.
>
> **[2:54](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=174)** This is sometimes done for example, when you don't have access to a database and you just want to write a script.
>
> **[2:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=179)** If it's holding objects for a while and by making it a static collection, all the instances of the class are sharing this collection so it can be quite convenient.
>
> **[3:07](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=187)** Please be very careful with this because this can very easily lead to an out of memory error when it's not managed well in the code.
>
> **[3:14](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=194)** Also, and this is more detailed already, but it's very important to overwrite your hashCode and equals, especially when you add custom objects to hash sets.
>
> **[3:24](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=204)** So what's going on there is that if you don't overwrite hashCode and equals for your custom object, such as we have with my person object that I just created, I did not overwrite them, it's going to be using a default ones and this can get a very ugly way of overwrite to hash sets because it can get lost and it's going to be very hard to actually make the different piles of the objects so to say.
>
> **[3:45](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=225)** And this can actually also lead to out of memory errors.
>
> **[3:49](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks?u=76281980&t=229)** But still, mistakes happen so the key thing to take away is that you make sure that you monitor your application so it can spot problems and solve them before anyone else notices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (2), case, (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** such as (3), for example (1)
> **Code Identifiers:** hashcode (2)
> **Env Vars:** gvm (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be careful (1)
> **Prerequisites:** install (1)

#### Solution: Finding and fixing a memory leak
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980&t=0)** - [Instructor] Your job was to implement the equals and hash code of custom objects.
>
> **[0:11](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980&t=11)** This was necessary to avoid a potential memory leak, in the potential memory leak hash set class.
>
> **[0:17](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980&t=17)** And here's how you could have implemented the hash code and equals, and as you can see, when we go ahead and test this code, it is saying no memory leak detected.
>
> **[0:27](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/solution-finding-and-fixing-a-memory-leak?u=76281980&t=27)** Correct. Our code returned true. That's great.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=0)** - [Maaike] Congrats, you've done it.
>
> **[0:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=2)** You've worked your way through some rather complex memory management topics.
>
> **[0:06](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=6)** Next topics that would be very interesting for you would be logging, but also monitoring and, of course, testing and also other advanced Java topics might be interesting, such as design patterns and concurrency.
>
> **[0:19](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=19)** Here are some courses that I've selected for you that would be great as a follow-up.
>
> **[0:22](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=22)** First of all, the Java Concurrency Troubleshooting: Latency and Throughput, but also the monitoring and logging course, which will tell you more about how to monitor and log an application.
>
> **[0:32](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=32)** Also, Parallel and Concurrent Programming with Java would be very interesting.
>
> **[0:36](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=36)** And, of course, Advanced Java Programming is always a good one to take because it will take your Java skills to the next level.
>
> **[0:43](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=43)** Then, if your Java is already really good and you want to know more about design patterns, Advanced Design Patterns: Design Principles might also be good for you.
>
> **[0:51](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=51)** And, finally, Learning Apache Tomcat can definitely be interesting whenever you need to do some management of your Java applications.
>
> **[0:59](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=59)** Thank you so much for taking this course.
>
> **[1:01](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=61)** I'd like to connect with you.
>
> **[1:02](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=62)** You can find my LinkedIn profile at this link.
>
> **[1:05](https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/conclusion?u=76281980&t=65)** Good luck and have fun managing the memory of your Java applications.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1), find (1)
> **Code Keywords:** finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - [maaike] (1)


## Instructor

- [[Maaike van Putten]]

## Skills Covered

- Memory Management
- Java

## Path Context

### In [[Getting Started as a Java Developer]]
← [[Java Memory Management- Values and References]] | **7 of 10** | [[Java Exception Handling]] →

## Appears In

- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Java Memory Management- Values and References]] — Java, Memory Management
- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java

---

[↑ Back to top](#)