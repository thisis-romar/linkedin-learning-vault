---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: scala-essential-training-2023
url: "https://www.linkedin.com/learning/scala-essential-training-2023"
duration_minutes: 283
duration: 4h 43m
level: Intermediate
updated: 1/19/2024
learners: 14804
skills:
  - Scala
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFScGwBIa6BMw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705536093368?e=2147483647&amp;v=beta&amp;t=fstQayQRs0vRnSiWI7QKfopEFavVeld4S02SxmANd_0"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Scala Skills for Data Engineering]]'
prev_courses:
  - '[[Hands-On Introduction- Scala]]'
next_courses:
  - '[[Coding Exercises- Scala]]'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":4,"total":6,"prev":"Hands-On Introduction- Scala","next":"Coding Exercises- Scala"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/scala
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Scala%20Essential%20Training.md)

![Scala Essential Training](https://media.licdn.com/dms/image/v2/D560DAQFScGwBIa6BMw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705536093368?e=2147483647&amp;v=beta&amp;t=fstQayQRs0vRnSiWI7QKfopEFavVeld4S02SxmANd_0)

# Scala Essential Training

> Scala is a general-purpose programming language, with full support for object-oriented and functional programming, and with a strong type system. Designed to be concise, many of Scala's design decisions were inspired by criticism of Java's shortcomings. In this hands-on course from Rock the JVM, learn the essential Scala skills needed to become a Scala developer. First, learn about basics like Sca

> [LinkedIn Learning](https://www.linkedin.com/learning/scala-essential-training-2023) | 4h 43m | Intermediate | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction and setup](#introduction-and-setup)
- [**1. Scala Basics**](#1-scala-basics) (8 videos)
  - [Values and types](#values-and-types)
  - [Expressions](#expressions)
  - [Variables and instructions](#variables-and-instructions)
  - [Functions](#functions)
  - [Recursion](#recursion)
  - [Recursion: Exercise](#recursion-exercise)
  - [Recursion: Solution](#recursion-solution)
  - [String interpolation](#string-interpolation)
- [**2. Object-Oriented Programming in Scala**](#2-object-oriented-programming-in-scala) (11 videos)
  - [Classes, instances, fields, and methods](#classes-instances-fields-and-methods)
  - [Classes, instances, and methods: Exercise](#classes-instances-and-methods-exercise)
  - [Classes, instances, and methods: Solution](#classes-instances-and-methods-solution)
  - [Method notation](#method-notation)
  - [Inheritance](#inheritance)
  - [Overriding, polymorphism, and anonymous classes](#overriding-polymorphism-and-anonymous-classes)
  - [Abstract classes and traits](#abstract-classes-and-traits)
  - [Objects](#objects)
  - [Case classes](#case-classes)
  - [Exceptions](#exceptions)
  - [Generics](#generics)
- [**3. Functional Programming in Scala**](#3-functional-programming-in-scala) (9 videos)
  - [Functional programming basics](#functional-programming-basics)
  - [Anonymous functions](#anonymous-functions)
  - [Scala collections: List](#scala-collections-list)
  - [Map, flatMap, and filter](#map-flatmap-and-filter)
  - [List exercises](#list-exercises)
  - [List exercises: Solutions](#list-exercises-solutions)
  - [For comprehensions](#for-comprehensions)
  - [Scala collections: Ranges, arrays, and sets](#scala-collections-ranges-arrays-and-sets)
  - [Scala collections: Tuples and maps](#scala-collections-tuples-and-maps)
- [**Conclusion**](#conclusion) (1 videos)
  - [Recap and next steps](#recap-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction and setup](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=0)** - [Daniel] Welcome to the course, my name is Daniel, and I'm super excited to teach you the foundations of [[Scala]] and [[Functional Programming]] in this course.
>
> **[0:06](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=6)** This video will be a short introduction to how the course is structured and how to get started.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=11)** My name is Daniel, and I am a Scala software engineer and instructor.
>
> **[0:15](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=15)** At the moment of this recording, my courses on Scala and functional programming have reached more than 80,000 people, and I've had the privilege of training teams at Apple, Adobe, [[Google]], and other top companies in the world.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=26)** Now, I'm not seeing this all to impress you, but rather just to tell you that you're in good hands for this course.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=31)** I also made a website called rockthejvm, which is where you can find in-depth online courses for everything in the Scala world, including the Scala language, up to a very advanced level, interview problems, tools, and libraries like Cats Effect and ZIO, [[Big Data]] and streaming with [[Apache Spark]], Apache Flink, and many others.
>
> **[0:48](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=48)** So if you're interested in a complete Scala journey, you have everything you need at rockthejvm, and also, if you need anything or require corporate training about Scala or tools in the space, you can reach out to me at daniel@[rockthejvm.com](https://rockthejvm.com).
>
> **[1:01](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=61)** But enough about me, let's talk about you.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=64)** So in this course, we will write a lot of code and the objective is for you to become a Scala developer with all the right foundations.
>
> **[1:11](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=71)** You'll learn three sets of things in this course.
>
> **[1:14](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=74)** First of all, you'll learn the Scala basics, including language syntax and structure.
>
> **[1:18](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=78)** Then we will go into [[Object-Oriented Programming (OOP)|object-oriented programming]] and then into functional programming, which is why I've also structured this course into chapters for these exact objectives.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=87)** More importantly, you'll learn mental models which are more valuable than the Scala language itself, in my opinion, including how to think and approach code differently, how to write expression-oriented code, how to have multiple solutions at your disposal to the same problem so that you can pick the right one, and also foundational skills to go deeper into Scala if you want.
>
> **[1:47](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=107)** Now, specifically for slides, I don't really like to spend time talking on slides, and unless it's absolutely necessary, I prefer writing code.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=115)** And by the end of this course, we will write more than 1000 lines of code from scratch.
>
> **[1:59](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=119)** You'll also see me get straight to the point in my explanations and everything will be demonstrated with real code.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=125)** So the kind of stuff that we are going to write in this course will be mostly code, which is why we need to set up an integrated development environment or IDE on our computer.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=134)** We need two pieces of software to install.
>
> **[2:16](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=136)** One is a [[Java]] distribution because Scala works on top of the Java virtual machine or JVM.
>
> **[2:23](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=143)** So make sure you hit Java 21 download.
>
> **[2:25](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=145)** The Java 21 is the long-term Java version that's just been launched at the moment of this recording.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=152)** Hit Java Downloads here.
>
> **[2:33](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=153)** This is the Oracle page, and you'll have a list for JDK, the Java Development Kit for version 21 for [[Linux]], Mac, [[Windows]], and all major CPU architectures.
>
> **[2:45](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=165)** So pause the video now and download the appropriate JDK installer for your platform.
>
> **[2:52](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=172)** Alright, so after you've installed your JDK, the next thing that we will do is install an IDE, an integrated development environment for Scala For this course.
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=180)** The IDE that I recommend for this course is IntelliJ IDEA.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=184)** So you can find this at [jetbrains.com/idea](https://jetbrains.com/idea).
>
> **[3:09](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=189)** I'm not affiliated with IntelliJ or JetBrains in any way.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=191)** I just happen to use it for the sort of beginner courses.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=195)** IntelliJ IDEA is the easiest to set up in my opinion.
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=198)** So navigate to [jetbrains.com/idea](https://jetbrains.com/idea), hit this Download button and you can find IntelliJ IDEA Community Edition in this block section on the page, and you can hit this Download button to download and install IntelliJ IDEA for your platform.
>
> **[3:33](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=213)** Now, when you launch IntelliJ IDEA for the first time, IntelliJ will ask you if you want to install one of their featured plugins.
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=219)** And Scala is one of those plugins.
>
> **[3:41](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=221)** Obviously, I recommend that you do install that plugin for this course so that we are able to write Scala code.
>
> **[3:47](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=227)** So if you don't have IntelliJ on your computer, you can pause the video and install it now.
>
> **[3:52](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=232)** Okay, now, after you have downloaded and installed IntelliJ IDEA, I'm going to launch it and the welcome page of IntelliJ IDEA will show you a bunch of projects that you have at your disposal.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=244)** If you've used IntelliJ IDEA before, you'll see your own list of projects.
>
> **[4:07](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=247)** I'm going to start a new project from scratch for this course.
>
> **[4:10](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=250)** I'm going to hit New Project.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=252)** I'm going to call this Scala Essential Training.
>
> **[4:17](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=257)** And make sure you select Scala here in the selector for languages.
>
> **[4:20](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=260)** And the build system is called sbt, the Scala Build Tool.
>
> **[4:23](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=263)** So make sure you select this one.
>
> **[4:24](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=264)** Make sure you select a JDK and after you've installed Java, this JDK dropdown should have at least one option.
>
> **[4:32](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=272)** You have sbt version, you can leave that to the latest, whatever that is.
>
> **[4:35](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=275)** And as for Scala, I recommend that you use the latest Scala 3 version.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=280)** So I recorded this course in Scala 3.
>
> **[4:42](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=282)** There are a bunch of Scala 2 versions that are still supported but increasingly deprecated.
>
> **[4:47](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=287)** So I recommend that you use Scala 3 for this course.
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=290)** So use JDK like 17 or 21, sbt, leave that to the latest and Scala, I'm using 3.3.1 for this project and then hit on Create.
>
> **[5:01](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=301)** This should only take a couple of seconds for the project to start up.
>
> **[5:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=304)** Now, I'm going to put this in presentation mode so that you can see it much more clearly and the IntelliJ project will look something like this.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=312)** You'll have .idea and project.
>
> **[5:14](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=314)** These are some folders that IntelliJ will manage.
>
> **[5:17](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=317)** We will spend most of our time here under the src folder.
>
> **[5:20](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=320)** Under src, main, scala, we have a main file, with just a Hello World application.
>
> **[5:25](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=325)** You can run this application exactly as it is.
>
> **[5:28](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=328)** So you can right click on this code and hit Run.
>
> **[5:31](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=331)** This will compile this code and it will print Hello world.
>
> **[5:35](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=335)** It will take a bit of time to compile this code first, so notice that it prints Hello world.
>
> **[5:39](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=339)** You can also hit this little Load sbt Changes popup if it appears.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=344)** Currently, we don't really have any meaningful sbt changes.
>
> **[5:48](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=348)** Sbt settings are here under the build.sbt file where you can set up project-level settings like libraries to install and whatnot.
>
> **[5:58](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=358)** We will not touch build.sbt for this course.
>
> **[6:00](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=360)** This is a more advanced setting that we will use for a more advanced course.
>
> **[6:06](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=366)** Now, if you did not reach this point or you could not create a Scala project, or the code shows up red in IntelliJ, meaning that the code cannot compile, it's probably the fact that you do not have the Scala plugin installed currently.
>
> **[6:19](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=379)** So if you're on Windows, you can go to File Preferences or if you're on a Mac, you go to IntelliJ IDEA, click on Settings and you'll see this panel over here.
>
> **[6:28](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=388)** The Settings panel will have a bunch of sections here.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=390)** One of the sections is called Plugins.
>
> **[6:32](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=392)** You should have the Scala plugin installed in your list.
>
> **[6:35](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=395)** So I'm going to type in Scala and you should find it in your list.
>
> **[6:39](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=399)** If you don't find it, go to the Marketplace tab and search for it, and you should have an option to install it.
>
> **[6:44](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=404)** You should have a blue button here to install it.
>
> **[6:47](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=407)** Hit Install, and then restart the IDE.
>
> **[6:49](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=409)** And after that, you should be able to create the project or you should be able to compile the code and run it like I did.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=415)** So you should be able to right click on the code and hit Run main.
>
> **[6:58](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=418)** And this should trigger the compiler and you should print Hello world here.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=423)** So make sure you have the Scala plugin installed before going forward.
>
> **[7:07](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=427)** Okay, now, to set the structure for this course, I'm going to remove this main file.
>
> **[7:11](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=431)** So I'm going to hit Delete and under src main scala, which should highlight in blue here, I'm going to create a new package, which is kind of like a directory that we use to organize JVM projects.
>
> **[7:23](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=443)** And I'm going to type in the following package name.
>
> **[7:26](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=446)** Com.rockthejvm.
>
> **[7:28](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=448)** This is a very standard naming style for packages on languages on top of the JVM, like Java, [[Kotlin]], and Scala.
>
> **[7:35](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=455)** This is just the reverse way of saying [rockthejvm.com](https://rockthejvm.com).
>
> **[7:39](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=459)** This will create two folders.
>
> **[7:40](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=460)** One is called com and one is called rockthejvm below the com folder.
>
> **[7:45](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=465)** Under com.rockthejvm, I'm going to create a new package and I'm going to call this playground.
>
> **[7:51](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=471)** And under playground, I'm going to create a new Scala file, so this is going to be your first Scala file.
>
> **[7:56](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=476)** I'm going to create a Scala class called Playground with a capital P, and I'm going to select object here from the dropdown list.
>
> **[8:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=484)** Don't worry about what object means, I'm going to explain what an object is in the course.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=488)** So select object here, and this creates an object called Playground and type in main.
>
> **[8:14](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=494)** And then hit Control + Space, which will pop up this little suggestion here to autocomplete a main application, and then say print line, println.
>
> **[8:26](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=506)** This is the function that will print something to the console, and in between double quotes, you can say, I'm ready for Scala, or something like that.
>
> **[8:35](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=515)** You can print whatever your preferred string is.
>
> **[8:39](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=519)** This object with a main method is a runnable application.
>
> **[8:42](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=522)** This is the way that we will structure all the lessons in the course.
>
> **[8:44](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=524)** For every lesson in the course, I'm going to create a separate application so that you can keep code nice and clean.
>
> **[8:49](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=529)** So this Playground application should have the option to run it.
>
> **[8:52](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=532)** So right click and click on Run.
>
> **[8:55](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=535)** And this should have a very similar effect as that main file that you just deleted, which says, I'm ready for Scala.
>
> **[9:02](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=542)** And you're done.
>
> **[9:03](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=543)** At this point, you should be good to go.
>
> **[9:04](https://www.linkedin.com/learning/scala-essential-training-2023/introduction-and-setup?u=76281980&t=544)** So I'm waiting for you in the first lesson in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (37), [[Java]] (9), [[Functional Programming]] (3), [[Windows]] (2), [[Google]] (1)
> **Env Vars:** idea (9), jdk (6), ide (4), jvm (3), zio (1)
> **Tools:** intellij (15)
> **Prerequisites:** install (10), set up (3), make sure you have (1)
> **CLI Commands:** find (5), make (5), apache (2)
> **UI Navigation:** click on (4), go to (3), dropdown (2), navigate to (1)
> **Definitions:** is a  (4), is called (4)
> **URLs:** [rockthejvm.com](https://rockthejvm.com) (2), [jetbrains.com](https://jetbrains.com) (2)


### 1. Scala Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Values and types](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=1)** So at this point it's time to start writing some code, and we cannot really write any [[Scala]] code without understanding values and types, which is why this is our first lesson in the course.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=12)** Now without further ado, I'm going to jump straight into the project that we ended up with at the end of the previous video.
>
> **[0:17](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=17)** So we have an empty Scala project, or more or less empty, with a source main Scala with a package com.rockthejvm, and with a playground application that we created at the end of the previous video.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=28)** Now under the com.rockthejvm package, which as I mentioned earlier, is a little more than a folder on the file system, I'm going to create a new sub package here just for this chapter of the course where we are going to understand basics, which is why I'm going to call this part1basics.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=45)** Under this part1basics, I'm going to create a new Scala application specifically for this video so that you can keep your code nice and clean between the lessons.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=53)** So I'm going to say new Scala class file and I'm going to call this ValuesAndTypes, and I'm going to select object here in the selector.
>
> **[1:03](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=63)** The object is important.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=64)** We are going to understand it later as we go through the course.
>
> **[1:06](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=66)** And I'm going to type it main, and you're going to end up with this little popup that says Main.
>
> **[1:11](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=71)** Double click on that or hit enter, and this definition will pop right up.
>
> **[1:15](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=75)** This is a main function that will allow us to run this values and types object as a standalone application.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=82)** So this def main is a function that will serve as a quote unquote entry point into our application.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=88)** I'm going to demonstrate a few features of the Scala language by describing values and types, and you can test them in the main function.
>
> **[1:35](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=95)** Now, if it just so happens that this main template doesn't appear, you can type it, main, and it should appear, but just in case it doesn't, if I hit escape, you can hit control + space, and this popup should appear as it is, okay?
>
> **[1:49](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=109)** So you can force this little popup and auto complete in IntelliJ to appear by hitting control + space.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=115)** Usually IntelliJ is smart enough to suggest what you need at that point.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=120)** So, I'm going to describe the main features of the Scala language by describing the fundamental values and types.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=126)** The way that you can declare value is with a keyword val.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=129)** V-A-L.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=129)** I'm going to call this meaningOfLife.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=133)** And I tend to get quite philosophical.
>
> **[2:15](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=135)** This is an integer, so I'm going to type that with int, with a colon int.
>
> **[2:20](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=140)** And then on the right hand side of the assignment, notice now I'm putting the equal sign, I'm going to say 42.
>
> **[2:25](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=145)** Obviously, this is the meaning of life.
>
> **[2:27](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=147)** So the declaration is a value called meaningOfLife.
>
> **[2:30](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=150)** The type is integer, and the value of this meaningOfLife is 42.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=155)** If you've done other programming languages before, this is equivalent to defining a constant.
>
> **[2:39](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=159)** So if you've done any C#, or C++, or [[Java]], or [[JavaScript]], this would be equivalent of defining a constant, like constant in meaningOfLife equals 42.
>
> **[2:51](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=171)** This is the equivalent Java declaration or the C-like syntax.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=176)** Now, because this is a constant, a value cannot really be reassigned, so values cannot be reassigned.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=184)** Now you're probably noticing that I'm writing comments in the code.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=187)** This is just so that you can keep notes as you're writing code.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=191)** So I suggest you add similar notes yourself for your own code as you're following along with the course.
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=196)** This helps with retention, so that you don't have to revisit this over and over again.
>
> **[3:20](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=200)** So values cannot be reassigned.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=201)** So if I say meaningOfLife equals 43 or something else, notice that I get a compiling error, and this line is underlined in red, saying, reassignment to val.
>
> **[3:32](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=212)** This is a compiling error, and if you try running this application, it'll not work.
>
> **[3:36](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=216)** So values cannot really be reassigned.
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=219)** That's one of the most important lessons that you can take away from this video.
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=222)** Another one is what is called type inference.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=225)** This is one of the most powerful features of the Scala compiler, and it has very magical features that you'll explore later as you become more advanced with the Scala language.
>
> **[3:55](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=235)** But first of all, the primary lessons of type inference is that you don't have to always declare type here in the assignment of the variable.
>
> **[4:03](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=243)** You can say, val is an integer, and simply say, equals 67, and notice that the compiler doesn't complain about me not defining the type.
>
> **[4:13](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=253)** That is because the compiler figures out what the an integer is supposed to be by just looking at the right hand side of the assignment and allocating that type to the integer value.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=262)** So if I hover over this little thing, notice that an integer is inferred by the compiler to always be an integer.
>
> **[4:29](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=269)** It's by looking at the right hand side, the assignment.
>
> **[4:32](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=272)** If I say 67 plus 34, again, the compiler is smart enough to evaluate the type of this expression and associate that to the type of the value that I'm declaring.
>
> **[4:42](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=282)** Now, a quick Intellij detour.
>
> **[4:44](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=284)** If you want to see this sort of popup by hovering over the variable or method or class or whatever type you want to see documentation for, and you don't see this pop up, there is a setting an Intellij idea.
>
> **[4:56](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=296)** You can click on the Intellij idea and click on settings or file preferences on [[Windows]].
>
> **[5:01](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=301)** And here in the search bar you can search for a quick documentation.
>
> **[5:07](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=307)** And here under code editing, there is a little setting called show quick documentation on hover.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=312)** Make sure the setting is checked so that you can see these popups as you're hovering with your mouse over them.
>
> **[5:19](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=319)** Okay, back to Scala. I want to show you the fundamental types.
>
> **[5:21](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=321)** So the common types that you see in s Scala.
>
> **[5:24](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=324)** I'm going to show you Booleans, characters, strings, and numerical types.
>
> **[5:28](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=328)** So for example, if you want to define a Boolean, I'm going to define them with their proper type, Boolean, with a capital B, that is equal false or true.
>
> **[5:39](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=339)** False or true are the only two Boolean values they can have.
>
> **[5:43](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=343)** Let's show a character, aChar, that is of type Char.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=347)** So, C-H-A-R with a capital C.
>
> **[5:50](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=350)** And characters are specified in the Scala with single quotes always.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=354)** So this is a character A.
>
> **[5:56](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=356)** So notice the single codes.
>
> **[5:57](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=357)** Single codes are not strings like they are in [[Python (Programming Language)|Python]] or in JavaScript.
>
> **[6:01](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=361)** So be very careful with that.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=363)** An integer, which is of type int that is, for example, 45.
>
> **[6:08](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=368)** You've seen this before.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=369)** There are various numerical integer types.
>
> **[6:11](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=371)** So integer has the same representation as other integer types in other programming languages, which is four bytes.
>
> **[6:18](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=378)** Ihere are shorter interpretations like a Short, which is of type Short with a capital S, and you can say 5243, or something like that.
>
> **[6:27](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=387)** This is on two bytes only, but the Short type is rarely used.
>
> **[6:31](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=391)** We mostly use integer.
>
> **[6:33](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=393)** If you want to use floating points, that is decimals, as you can say, a Float.
>
> **[6:37](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=397)** A Float, which is float, as 2.4f, with a little f at the at the end.
>
> **[6:43](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=403)** So Float is a four byte decimal, and the other decimal that we tend to use more often, which is called double, with a capital D, as 3.14 without any suffixes at the end.
>
> **[6:59](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=419)** This is an eight byte decimal.
>
> **[7:02](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=422)** This is why it's called double, because it's double the representation of Float.
>
> **[7:08](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=428)** There's also a long representation, aLong, which is an integer representation, and you can have very large numbers.
>
> **[7:16](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=436)** Notice that if I simply type out this number, it's too big for an integer, so you have to suffix that with a capital L at the beginning.
>
> **[7:23](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=443)** This is eight byte integers.
>
> **[7:26](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=446)** So this is how you can specify unique numerical representations for various types.
>
> **[7:31](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=451)** And these, in total, are the fundamental data types that you can use in Scala.
>
> **[7:36](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=456)** There's also the string type, which is very special in Scala and in other GVM languages like Java.
>
> **[7:43](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=463)** I'm going to show you how you define a string, and then I'm going to come back to strings in another lesson to show you the capabilities of strings.
>
> **[7:51](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=471)** So the string type is String, with a capital S, and values.
>
> **[7:55](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=475)** The literal values of type string are pieces of text in between double quotes, like "Scala Rocks."
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=481)** So be very careful, not confused strings in between double quotes with characters that are between single quotes.
>
> **[8:06](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=486)** This is particularly for folks that are coming from JavaScript or Python that allow both single and double quote strings.
>
> **[8:14](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=494)** Alright, so now you know how to work with values and types in Scala.
>
> **[8:18](https://www.linkedin.com/learning/scala-essential-training-2023/values-and-types?u=76281980&t=498)** In the next video, we're going to talk about expressions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (16), [[Java]] (3), [[JavaScript]] (3), [[Python (Programming Language)|Python]] (2), [[Windows]] (1)
> **Definitions:** is a  (10), is an  (4), is called (2)
> **Code Identifiers:** meaningoflife (5), achar (1), along (1)
> **Tools:** intellij (5)
> **CLI Commands:** python (2), make (1)
> **Cross-References:** previous video (2), in the next (1)
> **UI Navigation:** click on (3)
> **Analogies:** for example (2)

#### [Expressions](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=1)** So now that you know how to work with values and types, it's time to explore expressions.
>
> **[0:06](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=6)** So for this video, I'm going to create a separate application that you can use for this particular lesson.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=11)** So I'm going to right-click on the part1basics chapter, and I'm going to create a new [[Scala]] file, I'm going to call this Expressions.
>
> **[0:19](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=19)** I'm going to make it an object as before.
>
> **[0:21](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=21)** So making an object is important if you want to test anything.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=24)** I'm going to type in main.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=26)** And inside main, you can print any sort of expression or value that you want.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=31)** So expressions are those structures that evaluate to a value.
>
> **[0:38](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=38)** What is a structure that evaluates to a value?
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=40)** For example, if I define a value, let's call this meaningOfLife.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=45)** As I mentioned in the previous video, I tend to get quite philosophical.
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=49)** The meaning of life is obviously 42 but you can express meaning of life as the expression 40 + 2.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=55)** 40 + 2 is an expression.
>
> **[0:57](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=57)** Why is that?
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=58)** Because it evaluates to the value 42, so this is an expression.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=64)** Obviously you've seen expressions in other areas of programming if you've come from another programming language.
>
> **[1:10](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=70)** So there are mathematical expressions that evaluate to a number.
>
> **[1:14](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=74)** So obviously you have expressions that [[Jetpack Compose|compose]] plus, minus, times, divisions, and then bitwise operators like and, or, and then bit-shift and so on and so forth.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=91)** So there are various mathematical operators that evaluate to a number depending on how they are used.
>
> **[1:37](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=97)** Obviously you've seen this before in other languages.
>
> **[1:39](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=99)** So val mathEexpression, expression, assuming I can spell properly, 2 + 3 * 4, and the compiler knows how to evaluate this expression in order of precedence.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=111)** So 2 + 3 * 4, that's 14 because the multiplication is evaluated first, and then the addition, to give us back the number 14.
>
> **[2:01](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=121)** So the compiler knows what type that expression is going to evaluate to.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=125)** In this case, it's going to be an integer as we saw earlier in the previous video.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=130)** And when you actually print this expression, so println mathExpression, this will print the number 14 because the runtime knows the order of precedents that this expression is going to evaluate into.
>
> **[2:26](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=146)** So we have the number 14 as predicted.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=149)** Obviously there are Boolean expressions.
>
> **[2:34](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=154)** Expressions.
>
> **[2:36](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=156)** For example, you can say val equalityTest as the expression 1 == 2.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=162)** Notice that the equalityTest is with == that you may have seen in other programming languages.
>
> **[2:47](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=167)** So this is an expression that returns true or false.
>
> **[2:55](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=175)** And the compiler can prove that.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=176)** So if you hover over this equalityTest, notice that the equalityTest is inferred by the compiler to return a Boolean.
>
> **[3:02](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=182)** Obviously there are comparison operators like, 1 is bigger than 2 or bigger than or equal to 2, less than, less than or equal, and so on and so forth.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=192)** So I'm going to simply use the equality, so the double equals to test whether 1 is equal to 2.
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=196)** Obviously it's false.
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=198)** So if you print this in main equalityTest, that will be false.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=201)** So if I right-click and run this application, we will see simply false being printed.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=206)** So notice that we have false here.
>
> **[3:29](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=209)** And this is an example of a Boolean expression.
>
> **[3:31](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=211)** And obviously in real code, we use a various [[Forms]] of expressions that evaluate the true or false because Boolean expressions are critical for us to evaluate [[Control Flow]].
>
> **[3:41](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=221)** Which bring us to if expressions.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=225)** Unlike other programming languages, if structures in Scala are actually expressions because they are structures that evaluate to a value.
>
> **[3:53](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=233)** So for example, I can say anIfExpression as if equalityTest.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=241)** So notice that I'm passing something that evaluates the true or false inside parentheses.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=246)** So you've seen this sort of structure in other programming languages before.
>
> **[4:10](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=250)** But then in branches, that is, if equalityTest is true, I'm going to return 45, else I'm going to return 99.
>
> **[4:18](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=258)** This is how you should read this sort of structure.
>
> **[4:21](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=261)** So this is a structure that evaluates to either 45 or 99, depending on whether equalityTest is true or false.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=270)** So unlike other programming languages where an if structures, you get to do something, an if structure in Scala is something that evaluates to a value.
>
> **[4:38](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=278)** So I can actually print the result of an if expression in main, and I'm going to return 99 because obviously equalityTest is false.
>
> **[4:46](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=286)** So this is what we see in the console as well.
>
> **[4:49](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=289)** In fact, you can test whether an if structure is an expression by taking it literally inside the print line.
>
> **[4:56](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=296)** So the expression itself evaluates to 99 exactly as before.
>
> **[5:02](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=302)** So look at that.
>
> **[5:05](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=305)** This idea is very, very important as we proceed in getting more advanced with Scala and later, [[Functional Programming]].
>
> **[5:13](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=313)** Now at the time of recording, we're recording in Scala 3.3, which means that we have multiple ways of expressing the same structure with different syntax forms.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=322)** So I'm going to show you the different ways of writing if expressions so that you can identify them in code.
>
> **[5:27](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=327)** So I'm going to say anIfExpression_v2 as if equalityTest then 45 else 99.
>
> **[5:38](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=338)** This is an alternative way of expressing exactly the same thing.
>
> **[5:41](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=341)** So you might see any one of those two options in real life code.
>
> **[5:45](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=345)** So if, with the condition in parentheses, and then the two expressions here on the left or right hand side.
>
> **[5:52](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=352)** Or the one-liner if condition then one value else another value.
>
> **[6:00](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=360)** So these are the two alternative syntaxes.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=363)** The very important idea is that the if structure in Scala is an expression.
>
> **[6:07](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=367)** This is by far the more important, I dare say, philosophical lesson from this video.
>
> **[6:13](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=373)** Another idea is that code blocks are also expressions.
>
> **[6:19](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=379)** So for example, a code block is something where you can define local variables or values that are invisible elsewhere and they evaluate to the last expression.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=390)** So I can define a val, let's call this aCodeBlock equal to, and I can add some curly braces here.
>
> **[6:37](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=397)** And inside the curly braces, I can define local values.
>
> **[6:42](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=402)** For example, val localValue equals, I don't know, 78.
>
> **[6:48](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=408)** And then a bunch of expressions maybe that are useful for you to define any sort of complex computation.
>
> **[6:57](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=417)** And then the value that is returned by the code block, the last value, is the value of the entire block.
>
> **[7:08](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=428)** This is very, very important.
>
> **[7:09](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=429)** So for example, if you've defined a bunch of expressions and some local values that compose themselves into expressions, and finally the last value is localValue + 99, this is the value of the entire block.
>
> **[7:24](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=444)** And obviously the compiler is smart enough to infer the type of this last expression by tracing back the types of everything involved and associating that type to the value defined, which in this case is an Int.
>
> **[7:38](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=458)** So in this case, what is the value of the code block?
>
> **[7:41](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=461)** You can pause the video for a second and try to figure that out.
>
> **[7:45](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=465)** Well, it's not that hard to figure out that the value of the code block is the value of the last expression, which is localValue + 99.
>
> **[7:52](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=472)** The localValue being 78, the value of the code block is 177.
>
> **[7:57](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=477)** So if I print out the entire thing, so aCodeBlock, you can actually test it, and you'll see the number 177 being printed to the console.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=488)** Obviously you can print out the entire thing, which is the entire code block to validate whether a code block is an expression.
>
> **[8:13](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=493)** So I can actually paste the entire block here as an argument to print line, and the application will do exactly the same thing.
>
> **[8:20](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=500)** As we become more experienced with Scala, you'll find that this ability of Scala to be able to replace an expression with its value and vice versa, is a powerful feature and a powerful mental model that will allow for a very powerful and safe code later.
>
> **[8:34](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=514)** So you've learned quite a lot in this video.
>
> **[8:35](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=515)** You've learned about expressions as structures that evaluate to a value.
>
> **[8:39](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=519)** You've learned that if expressions in Scala are expressions because they evaluate to either one branch or the other, depending on the value of the condition.
>
> **[8:47](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=527)** And you've also learned about code blocks as fundamental structures of code in Scala that are themselves also expressions.
>
> **[8:55](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=535)** So pretty much everything in Scala is an expression.
>
> **[8:58](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=538)** This is a very powerful lesson.
>
> **[9:02](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=542)** So the way that we write Scala code is that we build out giant programs made out of smaller expressions.
>
> **[9:09](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=549)** Now, before we wrap up this video, I'm just going to give one minor comment about code block, which is the indentation syntax.
>
> **[9:19](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=559)** So recently in Scala 3.0, Scala introduced an alternative syntax for writing code blocks instead of curly braces, with indentation.
>
> **[9:27](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=567)** So I'm going to say aCodeBlock_v2 is equal to.
>
> **[9:32](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=572)** And I'm going to define the same things, the localValue 78 and localValue + 99 as indentation, which means that this entire indentation region is subordinate to the code block version 2, which the compiler recognizes as new indentation equals start block.
>
> **[9:52](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=592)** And deindentation means end block.
>
> **[9:59](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=599)** Now, some may argue, and this is the reason why the syntax was introduced, that this indentation-based syntax is a little cleaner because you don't have these extra [[Tokens]] that will clog your mind.
>
> **[10:09](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=609)** But I do believe that especially for beginners, these curly braces separate things much easier.
>
> **[10:15](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=615)** Because when you define, for example, code block version 2, which in your discipline as beginners you may want to add types to your variables; and by mistake, you add a lot of space here because you're playing around with your code; and by mistake, you're deindenting space; this code will not compile anymore.
>
> **[10:34](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=634)** So if I try to run this code or compile, notice that we have a compiling error.
>
> **[10:38](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=638)** And the reason is that this value is deindented, and this confuses the development environment as well.
>
> **[10:44](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=644)** Which is why for beginners, I recommend that you stick to the curly brace syntax.
>
> **[10:49](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=649)** Because even if inside curly braces you deindent some stuff, the curly braces make it explicit what belongs to which code.
>
> **[10:57](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=657)** So for example, if I want to print this code block, so aCodeBlock, notice that this thing is just a warning.
>
> **[11:05](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=665)** So the program still works, localValue + 99.
>
> **[11:12](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=672)** But we have a warning that the line is indented too far to the left.
>
> **[11:15](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=675)** So it's just compiler warning, but the code is still correct.
>
> **[11:19](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=679)** Whereas with indentation, the code might not compile because you've just played around and just by looking at it, the code just looks fine but notice that we have not found local value and may end up wondering what on earth is going on, where the solution is just to indent your code.
>
> **[11:36](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=696)** So it's quite easier to make mistakes when you're using indentation.
>
> **[11:41](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=701)** So I recommend that we stick with the curly brace syntax for the [[Representational State Transfer (REST)|rest]] of the course.
>
> **[11:46](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=706)** Okay, now before we wrap up this video, I want to show you a powerful construct in Scala that's called pattern matching.
>
> **[11:53](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=713)** And pattern matching is far more powerful than I'm going to show you in this video because we're just at the beginning of the course.
>
> **[11:59](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=719)** But pattern matching will start as a switch on steroids.
>
> **[12:06](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=726)** So you're probably familiar with switch statements in other languages, and pattern matching in Scala can be described as a switch, at least initially.
>
> **[12:15](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=735)** So I'm going to have, let's call this someValue as let's say 42.
>
> **[12:22](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=742)** And assume that you get someValue from somewhere else.
>
> **[12:25](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=745)** So somebody gives you this particular value that you don't know what it is, and you want to describe it, let's say description as, and the construct that I'm going to use here is someValue match and then open and close some curly braces.
>
> **[12:42](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=762)** So it's like a switch on someValue.
>
> **[12:44](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=764)** And we're going to provide some cases here.
>
> **[12:46](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=766)** So case 1 =>.
>
> **[12:49](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=769)** So notice this thick =>, notice the case.
>
> **[12:51](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=771)** So case 1.
>
> **[12:52](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=772)** So in case the someValue is equal to 1, then I'm going to return, let's say "the first."
>
> **[12:59](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=779)** In case 2, I'm going to return "second."
>
> **[13:03](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=783)** In case I get 42, I'm going to return let's say "meaning of life."
>
> **[13:08](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=788)** And in case we get underscore, which is the default case, which is nothing else matched, I'm going to return "something else."
>
> **[13:18](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=798)** Now this construct is an expression like anything else that we've discussed in this video.
>
> **[13:22](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=802)** So this entire structure evaluates to either, the string, "the first;" the string, "second;" the string, "meaning of life;" the string, "something else;" depending on whether someValue is equal to 1, 2, 42 or anything else.
>
> **[13:37](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=817)** So this description thing is inferred by the compiler to be a string by looking at all the branches here that we have for all the cases.
>
> **[13:45](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=825)** So if in main I print line this description, we are going to see that someValue is going to be described as meaning of life.
>
> **[13:53](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=833)** So this description is equal to meaning of life as the console will also show us.
>
> **[13:58](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=838)** So this is how I want you to think of pattern matching at this point, at least.
>
> **[14:02](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=842)** Pattern matching is far more powerful because it can deconstruct some data but we'll see that a little bit later in the course.
>
> **[14:08](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=848)** All right, so another fundamental building block of every Scala code that you will end up writing, which is expressions.
>
> **[14:14](https://www.linkedin.com/learning/scala-essential-training-2023/expressions?u=76281980&t=854)** Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (17), [[Jetpack Compose|Compose]] (2), [[Forms]] (2), [[Control Flow]] (1), [[Functional Programming]] (1)
> **Code Identifiers:** equalitytest (10), localvalue (7), somevalue (7), acodeblock (3), meaningoflife (1)
> **Definitions:** is an  (11), is a  (5), means that (2)
> **Analogies:** for example (8), it's like (1)
> **Cross-References:** previous video (2), as we saw (1), earlier in (1), later in (1), in the next (1)
> **CLI Commands:** make (3), find (1)
> **Versions:** version 2 (2), 3.3 (1), 3.0 (1)
> **Warnings:** warning (3)

#### [Variables and instructions](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=1)** The next fundamental building block in [[Scala]] is variables, control structures, and the concept of instructions.
>
> **[0:08](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=8)** So let's get back to soon to become our favorite project.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=11)** And under part1basics, I'm going to create a new Scala file, instructions, or control structures.
>
> **[0:18](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=18)** Name it however you want.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=20)** I'm going to make an object and with a main method in case we need to test some stuff.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=24)** Okay.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=26)** Now, you may be wondering why I named this application instructions.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=30)** I want to compare instructions versus expressions because this is a fundamental distinction that will shape the way that we will think in Scala.
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=40)** So this course is not necessarily just about the Scala syntax or the Scala structure or code organization, but the Scala mental model and the way of thinking and approaching code, which is, in my opinion, by far more important than the Scala syntax, which you can find online for free.
>
> **[0:57](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=57)** So what's the difference?
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=58)** Well, when we learn to code, we are initially thought to think in terms of instructions, like, do this, do that.
>
> **[1:05](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=65)** Here's a variable, repeat 10, do something else, and so on and so forth.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=69)** So we have various [[Forms]] of specifying the computer, step by step, what it's supposed to do.
>
> **[1:15](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=75)** And by these fundamental building blocks, we call them instructions, we end up with very complicated pieces of software.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=82)** This style is called imperative programming because we specify to the computer exactly what it needs to do step by step.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=91)** So we say that instructions are executed.
>
> **[1:35](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=95)** Now, in Scala and in other [[Functional Programming]] languages, we tend to think of structures that evaluate to a value.
>
> **[1:46](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=106)** When we say 2 + 3, we have various forms of [[Data Structures]] that [[Jetpack Compose|compose]] with one another, like I/O effects.
>
> **[1:53](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=113)** We have map, flatMap, filter, and things of that sort, and they are evaluated.
>
> **[1:59](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=119)** So we specify those expressions that are evaluated to a value, and it's up to the computer to evaluate the right value.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=126)** We call this functional programming.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=129)** So we say that instructions are executed, versus expressions are evaluated.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=134)** This is a simple but fundamental difference in the way that we think and approach code.
>
> **[2:19](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=139)** And in Scala, for the [[Representational State Transfer (REST)|rest]] of this course, we will tend to think in functional programming.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=144)** But this particular lesson will teach you the imperative programming in Scala so that you can recognize these structures in code as well.
>
> **[2:33](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=153)** So this particular video is focused on instructions.
>
> **[2:37](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=157)** What are some instructions in Scala?
>
> **[2:39](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=159)** For example, the act of printing something.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=162)** So if I say val_printing = println, let's say, ("This is an instruction"), if I run this application, so notice that, in main, we actually aren't doing anything.
>
> **[2:53](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=173)** We aren't performing anything.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=176)** The printing will actually take place.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=178)** So notice that "This is an instruction" is printed to the console, because in the process of evaluating this, we are actually performing what is called a side effect, which is performing an actual effect in the real world which is printing the characters to the console or writing to disk or sending some data to a socket or showing an image on screen or things of that sort, that are actually useful for us.
>
> **[3:23](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=203)** So we're performing what is called a side effect in the process of evaluating what otherwise would be an expression in Scala.
>
> **[3:31](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=211)** So we mentioned earlier that everything is an expression in Scala.
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=214)** Well, this is an expression that returns a very interesting type called Unit.
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=219)** Values returning Unit or expressions returning Unit are things that don't actually return or aren't actually evaluated to anything meaningful, but they do perform something.
>
> **[3:50](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=230)** They do perform an instruction into the real world, that they print something to the console, as in this example.
>
> **[3:57](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=237)** Now, we said earlier that everything in Scala is an expression.
>
> **[4:05](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=245)** Remember the previous video.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=246)** So how do we actually model instructions in Scala?
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=249)** Well, everything is an expression.
>
> **[4:11](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=251)** Well, in Scala, an instruction is a structure or an expression returning Unit or having the Unit type.
>
> **[4:23](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=263)** So this printing thing is an instruction that is returning Unit.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=267)** If you want to see the Unit value, the actual Unit token is this little token.
>
> **[4:32](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=272)** () has no meaningful value.
>
> **[4:35](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=275)** It's no string. It's no integer.
>
> **[4:38](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=278)** It's no data structure.
>
> **[4:39](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=279)** It's pretty much nothing meaningful.
>
> **[4:41](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=281)** But it needs to have a type.
>
> **[4:43](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=283)** And the only possible value of Unit is this little token.
>
> **[4:46](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=286)** So this is the only possible value of type Unit.
>
> **[4:53](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=293)** So every structure returning Unit actually returns this little token.
>
> **[4:57](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=297)** So if I try to println whether printing the value of printing, so the act of printing, is equal to the Unit, and you will see that this thing returns true.
>
> **[5:10](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=310)** So we will print to the console "true" because everything returning Unit returns this exact token, no matter what the complexity of this instruction ends up being.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=322)** Speaking of other instructions, you can have code blocks returning Unit.
>
> **[5:30](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=330)** For example, I can have a code block as, let's say, val_aLocalValue = 45.
>
> **[5:38](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=338)** So you have this sort of LocalValue definition, and you can do a bunch of stuff like print ("Instruction 1") and then println("Instruction 2").
>
> **[5:50](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=350)** Now, in the process of evaluating this code block, both of these prints are actually being performed as, I mentioned earlier, side effects.
>
> **[5:59](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=359)** So even if I don't have anything in main, if I run this application, we will see both "This is an instruction" and the two prints that are part of the code block, which you see here in the console.
>
> **[6:11](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=371)** Okay, so you've learned about instructions, the difference between instructions and expressions, the Unit type, and the fact that you can do a bunch of stuff in code blocks.
>
> **[6:21](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=381)** There are also variables in Scala.
>
> **[6:24](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=384)** So we said earlier that values cannot be reassigned, but there are variables that you can.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=390)** So you can say var_aVariable = 10, let's say.
>
> **[6:36](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=396)** Notice the keyword is var instead of val.
>
> **[6:38](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=398)** And you can modify this variable, aVariable equals, let's say, 24 or 34, and this is possible.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=406)** If I made this a val, then we have a compiling error, which is reassignment to val.
>
> **[6:52](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=412)** If we have a variable, then this is possible.
>
> **[6:54](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=414)** And there is also a bunch of modification operators, like += 1 to increase the variable by 1, the sort of stuff that you see in other programming languages as well.
>
> **[7:04](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=424)** Now, because everything is an expression in Scala, even the reassignment itself, the act of reassignment can be associated to a value, let's say reassignment.
>
> **[7:15](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=435)** And this returns Unit.
>
> **[7:17](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=437)** So the reassignment to a variable returns Unit because it doesn't return any meaningful value by itself.
>
> **[7:24](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=444)** So the act of reassignment is no meaningful value, but it produces the effect of changing the memory zone associated to this value.
>
> **[7:32](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=452)** So any variable reassignment is also an expression producing Unit.
>
> **[7:36](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=456)** There's also the concept of a loop in Scala, and loops work best in Scala with variables.
>
> **[7:43](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=463)** So for example, if I wanted to print the numbers 1 through 10 in main, I can say var, let's call this theNumber = 1.
>
> **[7:52](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=472)** And the while loop in Scala looks very similar to other programming languages.
>
> **[7:56](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=476)** For example, while (theNumber <= 10), I'm going to open some curly braces, and I'm going to say println(theNumber).
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=488)** And at the end of that, I would say theNumber += 1, so the kind of stuff that you see in other languages as well.
>
> **[8:15](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=495)** So if I run this application, we will see all those prints plus the numbers 1 through 10 in the console.
>
> **[8:21](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=501)** So this is probably familiar to you from other programming languages as well.
>
> **[8:25](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=505)** So you've learned about instructions, things returning Unit, the act of printing, variables, reassignment, and loops.
>
> **[8:32](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=512)** These are the markers of what I called imperative programming earlier.
>
> **[8:36](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=516)** Now, in Scala, and in the rest of this course, we will focus on the other mental model in Scala, which is expression oriented or towards functional programming.
>
> **[8:46](https://www.linkedin.com/learning/scala-essential-training-2023/variables-and-instructions?u=76281980&t=526)** So join me in the next video as we will discover functions in Scala.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (24), [[Functional Programming]] (4), [[Forms]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Data Structures]] (1)
> **Definitions:** is an  (9), is a  (3), is called (3), we call this (1)
> **Code Identifiers:** thenumber (4), flatmap (1), val_printing (1), avariable (1)
> **Analogies:** for example (4)
> **Cross-References:** we mentioned (1), previous video (1), in the next (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Functions](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=0)** - [Instructor] Alright, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=1)** Another fundamental building block in [[Scala]], and that is functions.
>
> **[0:05](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=5)** So, back in our project, I'm going to right-click on the part1basics, Create New Scala Application, call this Functions.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=12)** Make an Object, very important, and type in Main so that we can test whatever we end up writing.
>
> **[0:18](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=18)** So functions are probably going to be quite familiar to you because you may have seen them in other programming languages in various shapes.
>
> **[0:25](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=25)** So a function is essentially a mini program, or a reusable piece of code that you can parameterize.
>
> **[0:38](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=38)** That is you can define parameters on them and the piece of logic will simply apply those parameters and return a potentially different result.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=45)** So you can say, let's call this a Function, and notice that I'm using the keyword def in this case, not a val.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=52)** And in parentheses, you can pass any sort of parameters.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=55)** And the way that you pass parameters in Scala is the parameter name, colon, parameter type.
>
> **[1:02](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=62)** So a String b Int for example.
>
> **[1:05](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=65)** And this returns a string.
>
> **[1:06](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=66)** So notice that I'm adding the returned type of the function at the end of the function declaration.
>
> **[1:12](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=72)** So the function signature, or the function declaration, is def, name of the function, a bunch of parameters, and every parameter is name, colon, type, and then you have a comma in between them.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=82)** And at the end of the function, you have the return type.
>
> **[1:24](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=84)** Now, you say equals, which means that you need to provide the function implementation.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=91)** And the function implementation will always be a single instruction.
>
> **[1:38](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=98)** So you can say a+, a space, +b.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=104)** And this little thing is an expression evaluating to the concatenation between the string a, the string space, and the number b, which will be converted to a string and added at the end.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=114)** So it's always, always a single instruction.
>
> **[1:57](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=117)** Now obviously we know the fact that we can define complex instructions in the form of code blocks, and that code block is also a single instruction.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=125)** So you can specify that inside code blocks, and notice the ID was smart enough to add the curly brace for me at the end.
>
> **[2:12](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=132)** So you can do a lot of things inside this code block, but always return something because that is the value of the entire thing.
>
> **[2:19](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=139)** Okay, I'm going to remove the curly braces because I want to keep my function nice and clean.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=144)** Now, if you want to invoke a function, you can say Val anInvocation as aFunction.
>
> **[2:33](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=153)** So you use the name of the function and you pass some actual parameters, like Scala and 999, or something like that.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=162)** Now this is probably not rocket science for you because pretty much every programming language has this sort of function call, or function invocation.
>
> **[2:50](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=170)** And this will be the string Scala space 999.
>
> **[2:53](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=173)** So this is the value that is going to be returned in the invocation, and you can actually test that in main.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=178)** So if I want to print this out, anInvocation, and you run this application, so right-click Run on it, you will see the string Scala space 999 being printed to the console.
>
> **[3:08](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=188)** So this is how you can define a function, and this is how you can invoke it.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=192)** You can also define functions returning Unit.
>
> **[3:17](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=197)** So Unit is a type, just like any other in Scala, it only has the different meaning than other return types in Scala in that it has no meaningful value.
>
> **[3:28](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=208)** So you can define, let's call this aVoidFunction that returns aString, that takes aString as an argument and returns Unit.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=217)** And you need to pass an expression that returns Unit, like println aString.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=225)** And you know from the previous video that the act of printing returns Unit, which is a proper expression for this return type.
>
> **[3:52](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=232)** Obviously if you declare that the function returns a string and you return an expression that returns an integer, you'll get a type mismatch and a compiling error.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=241)** So be very careful with that.
>
> **[4:03](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=243)** Now the reason why I've defined this function and I named it aVoidFunction because the equivalent of the unit type in other programming languages is void.
>
> **[4:13](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=253)** So a Unit is the same as void in other languages, like [[Java]] or C, or C++, or many other languages that use the void keyword.
>
> **[4:25](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=265)** So this is just to make a connection between Unit and other programming languages that use the void type.
>
> **[4:31](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=271)** Obviously you can use unit-returning expressions, so void expressions, as well as non-unit returning expressions in the same function.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=280)** So for example, lets call this functionWithSideEffects that takes aString as an argument.
>
> **[4:48](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=288)** So aString string, and this returns a string.
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=290)** And inside a code block, so notice that I'm opening and closing curly box, curly braces, I'm going to say println aString, which is something that returns Unit.
>
> **[5:01](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=301)** Obviously this is a type mismatch because at this point, the expression println takes the value of the entire block, which means that the block returns Unit, which is different than string.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=312)** So you'll need to provide something else at the end of the block.
>
> **[5:15](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=315)** So we can say aString+ space +aString, for example, to return an expression.
>
> **[5:23](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=323)** And now this expression returns the proper type, which is string, and this is the value of the entire block.
>
> **[5:29](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=329)** So you can perform what we call side effects.
>
> **[5:33](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=333)** That is expressions returning Unit inside functions that do return a meaningful value.
>
> **[5:37](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=337)** For example, the concatenation of these two strings with a space in-between them.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=342)** Okay?
>
> **[5:43](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=343)** So you can do a lot inside the implementation of a function, especially if you use code blocks, which is the section delaminated by curly braces.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=354)** Obviously, as you know from one of the previous videos here, a code block is still a single expression whose value is dictated by the last expression.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=363)** So, last expression gets returned.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=369)** Okay, just to make the connection between Scala and potentially other programming languages.
>
> **[6:15](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=375)** Now, inside a code block, such as this one, you can also define additional functions.
>
> **[6:21](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=381)** So you can define smaller functions inside bigger ones.
>
> **[6:29](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=389)** Just for example, if you have a big function whose logic takes hundreds of lines of code and it's hard to organize your code, you can define, let's call this a big function.
>
> **[6:40](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=400)** Lets take an n, which is an integer, and returns an integer.
>
> **[6:44](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=404)** And inside the curly braces I can define smaller functions that I can reuse inside the curly braces.
>
> **[6:51](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=411)** So I can define a smaller function.
>
> **[6:54](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=414)** Lets say a int b [Interviewer], and returns an int, and returns a + b.
>
> **[7:01](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=421)** And for some reason, I want to say a smaller function between n and n + 1.
>
> **[7:08](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=428)** So obviously you can call smaller functions just inside this code block.
>
> **[7:16](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=436)** So as we mentioned earlier, inside the code block, everything is defined locally.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=441)** So a smaller function is not accessible outside this code block.
>
> **[7:24](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=444)** So for example, if in main I say println aSmallerFunction with 1 and 2, this will be a compiling error because a smaller function at this point is not found because it's just locally defined inside the code block.
>
> **[7:38](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=458)** Alright, so a bunch of lessons in this short video.
>
> **[7:41](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=461)** You can define functions, which are def, name of the function, parameters, name, colon, type, separated by comma, colon, return type, always implemented with a single instruction after the equal sign.
>
> **[7:54](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=474)** You can invoke it just like you would in other programming languages, just call the function.
>
> **[7:59](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=479)** So use the function name on some actual parameters.
>
> **[8:02](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=482)** You can define void functions by returning Unit.
>
> **[8:05](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=485)** You can perform many things inside the code block.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=488)** So you can perform side effects and return meaningful values.
>
> **[8:11](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=491)** And you can define smaller functions inside big ones.
>
> **[8:13](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=493)** One last thing.
>
> **[8:15](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=495)** In most cases, the compiler is smart enough to figure out what the return type of a function is supposed to be.
>
> **[8:20](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=500)** So for example, if I cut out the return type here, the compiler is still happy with my code because it simply looks at the type returned by this expression, which is an int.
>
> **[8:30](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=510)** Given the fact that a and b are integers, the expression will return an integer, and therefore a smaller function is known to return an int.
>
> **[8:37](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=517)** So this is auto-completed by the compiler.
>
> **[8:40](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=520)** So it's not always necessary to add the return type after the definition of your function.
>
> **[8:45](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=525)** The only situation where you must add the return type of your function is if the function calls itself.
>
> **[8:51](https://www.linkedin.com/learning/scala-essential-training-2023/functions?u=76281980&t=531)** And that is called recursion, which is the subject of the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (9), [[Java]] (1)
> **Code Identifiers:** astring (8), aninvocation (2), avoidfunction (2), afunction (1), functionwithsideeffects (1)
> **Analogies:** for example (7), just like (2), such as (1)
> **Definitions:** is an  (3), is a  (3), means that (2), is called (1)
> **CLI Commands:** make (3)
> **Cross-References:** previous video (1), we mentioned (1), next video (1)
> **UI Navigation:** right-click (2)
> **Prerequisites:** you'll need (1)

#### [Recursion](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=1)** So now that we know how to define functions, it's time to explore the mechanism of functions calling themselves also known as recursion.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=9)** So getting back to our favorite project under the Part One package, I'm going to right click and create a separate scholar application for this lesson.
>
> **[0:17](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=17)** So I'm going to call us recursion and I'm going to make an object as before with a main method in case we need to test some himself.
>
> **[0:25](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=25)** And in this lesson I'm going to give you some exercises.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=28)** So what is recursion? Recursion is the mechanism by which a function can refer to itself.
>
> **[0:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=33)** And this is the mechanism in which in [[Functional Programming]] we simulate repetition.
>
> **[0:37](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=37)** So as I mentioned earlier, in the [[Representational State Transfer (REST)|rest]] of this course, we will think in terms of expressions and therefore we will try to avoid instructions.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=46)** That is expressions returning unit and that includes variables and loops.
>
> **[0:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=51)** So we'll try to avoid these.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=53)** Now the question that might pop into your mind while I say that we're going to avoid loops is how on earth are we going to repeat anything?
>
> **[1:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=61)** And the answer is recursion.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=64)** So let me give an example of how recursion works.
>
> **[1:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=66)** You've probably seen this before in other programming languages, but you may not have necessarily stressed upon this particular feature of your programming because you may have thought in imperative terms as you wrote your code.
>
> **[1:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=79)** So this is a mindset shift that will be necessary for us to write good scholar code.
>
> **[1:24](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=84)** Let me give an example of how to do recursion.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=87)** Let me define a function that I'm going to call some and I'm going to pass a parameter called N as integer and I'm going to return an integer.
>
> **[1:35](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=95)** And in this function I am going to try to calculate the sum of all natural numbers up to N.
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=101)** So if I say sum of three, that will be one plus two plus three and that is going to be six.
>
> **[1:48](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=108)** If I say sum 10, obviously that's going to be one plus two plus and so on and so forth, plus 10 and that'll be probably 55 or something.
>
> **[1:57](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=117)** And the reason that I know is that there is a mathematical formula to calculate the sum of all natural numbers up to a certain value.
>
> **[2:03](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=123)** But we're going to calculate this by repetition.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=126)** So in normal programming languages, we would write something along the lines of we would define a variable, let's call this result starting at zero.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=134)** And we say, while going to have a variable, let's call this integer or I starting at zero.
>
> **[2:22](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=142)** And while I is less than N or less than or equal to N, I'm going to say result plus equals I.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=149)** And then finally, we're going to return results.
>
> **[2:31](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=151)** So this is the general technique that we would approach in imperative terms, telling the computer step by step what it needs to do to calculate the sum of all numbers up to N.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=161)** In [[Scala]] and in functional programming we will try to use recursion and expression oriented programming.
>
> **[2:47](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=167)** Let's see how we would think this sort of result like sum n in recursive terms.
>
> **[2:53](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=173)** So as we know the definition or the implementation of a function is going to be a single expression.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=178)** And what is that, that expression going to tell us?
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=180)** Well, if we have some of zero, that's when our algorithm so to speak will stop.
>
> **[3:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=186)** So if N is less than or equal to zero, also to have some sanity checks, I'm going to return zero, otherwise I'm going to return something else.
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=196)** And the property that some N will have is that sum 10 is 10 plus all the numbers from one to nine.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=206)** So 10 plus sum of nine.
>
> **[3:27](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=207)** And we can generalize this property by saying that sum N is N plus sum of N minus one.
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=214)** So notice that in the definition we're in the implementation of sum N, we're referring to or calling sum N minus one recursively.
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=222)** And notice that this little squiggly sign over here and that is a marker for a recursive function.
>
> **[3:48](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=228)** So the way that sum N is going to be calculated is that if in main I try to print line sum 10, in order to evaluate sum 10, we're going to evaluate this expression.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=241)** So we're going to have sum 10 is we're going to take a look at this expression.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=246)** If 10 is less N or equal to zero, obviously that's not the case.
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=249)** Otherwise we're going to return N, which is 10 plus some of N minus one.
>
> **[4:13](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=253)** So that's 10 plus some of nine.
>
> **[4:17](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=257)** Now in order to evaluate this expression, we need to evaluate some nine first.
>
> **[4:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=261)** So we're going to say some nine and that is nine plus some eight and so on and so forth.
>
> **[4:28](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=268)** So we're going to essentially evaluate sum zero and sum zero is zero, and then we're going to go upwards on this stack so that we can calculate the following results.
>
> **[4:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=283)** So sum zero is zero, then we have sum one, and that is one plus sum zero.
>
> **[4:48](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=288)** And now then we know what sum zero is, that's one.
>
> **[4:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=291)** And then we're going to say sum two is two plus sum one and that is two plus one, that's three and so on and so forth.
>
> **[4:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=299)** We're going to navigate up to the final result, sum 10, which is 10 plus and so on and so forth.
>
> **[5:04](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=304)** And that will be 55, which is our final result.
>
> **[5:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=308)** So if we run this application, we're going to print the number 55 because the computer will evaluate these expression step-by-step, but we're not specifying the step-by-step evaluation.
>
> **[5:18](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=318)** Instead, we're simply telling the computer how the expression looks like in terms of the same expression but possibly with different parameters.
>
> **[5:27](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=327)** And that is the core of recursion.
>
> **[5:29](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=329)** So instead of looping or repetition, we are going to start thinking in recursion.
>
> **[5:35](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=335)** I'm going to give you a couple more examples and I'm going to give you some exercises so you can practice this concept.
>
> **[5:40](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=340)** For example, let's define a function.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=342)** Let's call this print N.
>
> **[5:46](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=346)** That takes a string as a string and then N as an int and this returns unit.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=354)** So no meaningful value and we're going to try to print this string exactly N times.
>
> **[5:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=359)** So in imperative terms we would say something along the lines of a var I equals zero.
>
> **[6:05](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=365)** And then while I is less than N, we're going to print line the string and that is going to be it or in a for loop or things of that sort that you've may have seen in other programming languages.
>
> **[6:17](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=377)** Now we're going to start thinking in terms of recursion, which means that we're going to specify a single expression here.
>
> **[6:23](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=383)** So if N is less than or equal to zero to also include sanity checks here, we're going to return the only unit value without actually doing anything.
>
> **[6:32](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=392)** So we're going to return this little token.
>
> **[6:34](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=394)** You probably saw this before in the previous lessons.
>
> **[6:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=398)** Otherwise we're going to print the string.
>
> **[6:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=401)** So I'm going to say print line the string, and then we're going to call print N again with and minus one.
>
> **[6:49](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=409)** So we're going to say print N with string and N minus one.
>
> **[6:52](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=412)** And obviously this print will print line the string and then will go N minus two and so on and so forth until the argument becomes zero.
>
> **[7:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=420)** And then that will simply stop the recursion.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=423)** So if I say print N, Scala is awesome, and let's say I want to print it 20 times, we're going to see the Scala is awesome string being actually printed 20 times on the console, right?
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=439)** So we see Scala is awesome, and if you count these lines, it'll be exactly 20 lines in the console.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=445)** Now I know from experience that thinking in incursion may come as a counterintuitive skill, but it's one of the most important skills that you'll need in terms of the mental model in order to program in Scala.
>
> **[7:37](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=457)** Well, let me give another example.
>
> **[7:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=458)** Let's call this more complex example, and that is the definition of N is prime function.
>
> **[7:46](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=466)** So I'm going to define a function called is prime that we'll test whether a number is prime.
>
> **[7:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=471)** So we'll take an inch as an argument and we're going to return a bullion.
>
> **[7:57](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=477)** We're going to put these question marks so that we make the compiler happy.
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=481)** And the question marks means the method is not implemented yet.
>
> **[8:05](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=485)** So if you try calling it, it will throw an exception.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=488)** Alright, so is prime will take an end and return of bullion.
>
> **[8:11](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=491)** How do we define a prime number or how we determine whether a number is prime?
>
> **[8:15](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=495)** Well, we need to test all numbers from two to N divided by two.
>
> **[8:22](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=502)** These are the possible divisors of N and test whether N mod potential divisors, let's call this D, is equal to zero.
>
> **[8:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=513)** And if there is a D, there is a number between this interval that satisfies this predicate, then the number is not prime because it has a divisors.
>
> **[8:42](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=522)** If we haven't found a D yet and surpassing N divided by two, then the original N is prime.
>
> **[8:49](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=529)** So we're going to essentially do in imperative terms, something along these lines.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=534)** We're going to let me write a small multi-line comment here and I'm going to have a var.
>
> **[8:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=539)** Let's call this D starting at two.
>
> **[9:02](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=542)** And I'm going to say while D is less than N over two, I'm going to say if N mod D is equal to zero, then I'm going to say return false and obviously with the necessary curly braces.
>
> **[9:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=559)** Okay, so if N mod D is equal to zero return false, and after that I'm going to say D plus equals one so that I can increment the potential divisor.
>
> **[9:28](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=568)** And if my wild loop has exited, then that means that I'm going to return return true, because if I haven't found a D which satisfies this predicate, then that means my original number N is prime.
>
> **[9:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=583)** So our job is to transform this algorithm into a functional form.
>
> **[9:47](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=587)** So we're going to start ignoring the algorithm and try to rethink what it means to be a prime number.
>
> **[9:55](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=595)** Here's how I suggest you write this function.
>
> **[9:57](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=597)** I'm going to write an auxiliary function that will test a potential divisor in the style of the wild loop earlier.
>
> **[10:04](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=604)** So I'm going to say test divisors with a D as an int and this returns a bullion.
>
> **[10:11](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=611)** Now what does it mean to test A divisor?
>
> **[10:13](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=613)** Well, if D is bigger than N divided by two, then that means that my N is prime, so I'm going to return true otherwise if D is a potential divisor, which is N mod D must be equal to zero, then I'm going to return false because in this case, N is not prime.
>
> **[10:32](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=632)** Otherwise I'm going to try the divisor that follows, which is test divisor with D plus one.
>
> **[10:40](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=640)** Now the test divisor function should probably be called test divisors plural.
>
> **[10:46](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=646)** And the way that I did that is command option R on the Mac and I think there is an equivalent CTRL Alt R on [[Windows]] on IntelliJ if you want to rename a function like this.
>
> **[10:57](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=657)** So this function tests all the divisors from D all the way to N divided by two.
>
> **[11:03](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=663)** So if these bigger than N divided by two, then my N is prime, then I'm stopping the recursion.
>
> **[11:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=668)** If N mod D is equal to zero, then I found a potential divisors of N, which means that N is false.
>
> **[11:13](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=673)** Otherwise I'm going to test the subsequent divisors of N.
>
> **[11:18](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=678)** And for the last expression, obviously I've opened some curly braces here and therefore the last expression is the final thing, which means that I'm going to write an if statement.
>
> **[11:31](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=691)** If N is less than or equal to zero, I'm going to return false.
>
> **[11:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=693)** Let's say I don't support negative numbers.
>
> **[11:37](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=697)** Obviously there are several checks that you can add here to support negative numbers.
>
> **[11:42](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=702)** I'm just going to keep it simple.
>
> **[11:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=703)** Otherwise, if N is equal to one, I'm also going to return false because in mathematical terms, the number one is not a prime and also not a [[Jetpack Compose|compose]] number.
>
> **[11:56](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=716)** So one is a special number because it only has the potential divisor one and negative one.
>
> **[12:03](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=723)** So I'm going to keep it aside in a separate check.
>
> **[12:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=726)** Otherwise I'm going to call the test divisors function.
>
> **[12:09](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=729)** So test divisors starting from two, and that is our final function.
>
> **[12:16](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=736)** So let's assume that we wanted to, let me trace how is prime works.
>
> **[12:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=741)** So let's say we want is prime with the number seven, for instance is prime seven.
>
> **[12:26](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=746)** We'll take a look at this last expression, which means that if seven is less than or equal to zero, that's not the case, is seven or equal to one, that's not the case.
>
> **[12:37](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=757)** So I'm going to say test advisors with two.
>
> **[12:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=758)** So we're going to have test advisors of two.
>
> **[12:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=763)** Well, what does test advisors do?
>
> **[12:45](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=765)** Well the D argument is equal to two.
>
> **[12:49](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=769)** Two is not bigger than seven divided by two.
>
> **[12:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=771)** So that's not the case.
>
> **[12:54](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=774)** Is seven mod two is equal to zero.
>
> **[12:55](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=775)** That's not the case.
>
> **[12:56](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=776)** So that is going to be test advisors of three, which is where we're going to run the exact same case.
>
> **[13:07](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=787)** So is three bigger than seven divided by two?
>
> **[13:10](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=790)** That's not the case.
>
> **[13:12](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=792)** Is seven mod three is equal to zero.
>
> **[13:13](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=793)** That's not the case. So that's test advisors four.
>
> **[13:20](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=800)** And in this case, four is bigger than seven divided by two, which is three.
>
> **[13:24](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=804)** So therefore I'm going to return true.
>
> **[13:29](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=809)** And that is the final value of the final expression, which is prime seven, is prime seven is true.
>
> **[13:36](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=816)** That is the breakdown.
>
> **[13:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=818)** Now, if you're coming from an imperative programming background, which is one of the more mainstream programming languages, this sort of thing, the writing of recursive functions that do a complex thing like testing whether a number is prime, may not be the most intuitive thing that you've ever done and that is normal.
>
> **[13:53](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=833)** Alright? So if you're feeling, your brain is getting stretched, that is good.
>
> **[13:57](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=837)** This is what we're trying to practice in this course.
>
> **[14:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion?u=76281980&t=840)** So let's follow up with some exercises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (5), [[Functional Programming]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1), [[Jetpack Compose|Compose]] (1)
> **Definitions:** is a  (7), means that (3), known as (1), is an  (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), for instance (1)
> **Env Vars:** ctrl (1)
> **Tools:** intellij (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Recursion: Exercise](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=0)** - [Instructor] All right, we're back in recursion.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=1)** So after a bunch of examples, it's time we had some exercises to practice our own thing.
>
> **[0:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=6)** So back to our code, I'm going to give you some exercises.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=11)** The first exercise that I would like to give you is to concatenate a string a set number of times.
>
> **[0:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=21)** So for example, I'm going to write the function definition for you, so let's call this concatenate N, which takes a string as an argument, and a number N, which is an integer, and this returns a string.
>
> **[0:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=33)** I'm going to hit some question marks so that the compiler can be happy, and concatenate N, concatenate N, for example, with the string [[Scala]], and the number three should return us the string ScalaScalaScala exactly like this.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=52)** If you want concatenate two strings, for example, Scala plus rocks, this will be ScalaRocks.
>
> **[1:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=61)** You've probably seen string concatenation before in other programming languages so just use the plus operator to concatenate a bunch of strings.
>
> **[1:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=68)** Now, the challenge for you is to write this function to concatenate a string exactly N times so that we can get a result like this.
>
> **[1:16](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=76)** If you want to test it, I'm going to give you a print line.
>
> **[1:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=79)** Let's call this concatenate N with the string Scala and three times and this should print the string ScalaScalaScala in the console.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=88)** So that's exercise number one.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=91)** Exercise number two would be the Fibonacci numbers.
>
> **[1:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=98)** You probably saw the Fibonacci numbers in a math class.
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=101)** The Fibonacci numbers have a certain property.
>
> **[1:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=103)** They look like this.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=104)** They start with one and two, and then the next Fibonacci number is the sum of the last two Fibonacci numbers.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=111)** So for example, the next Fibonacci number is one plus two.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=115)** Then the next Fibonacci number is two plus three, which is five.
>
> **[1:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=119)** The next Fibonacci number is three plus five, that's eight.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=122)** The next Fibonacci number is five plus eight, that's 13.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=125)** The next Fibonacci number is eight plus 13, that's 21, and so on and so forth.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=130)** Your job for exercise number two is to compute the Nth Fibonacci number.
>
> **[2:15](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=135)** So I'm going to say Fibonacci with N as an integer and I want you to return the Nth Fibonacci number.
>
> **[2:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=141)** For example, if you print line Fibonacci with let's say the number six, that should give you 13, which is the sixth Fibonacci number in this sequence.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=155)** And this should be ScalaScalaScala for the first exercise.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-exercise?u=76281980&t=162)** So try your hand at these exercises and I'm going to see you in the next video with some solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (3)
> **Analogies:** for example (5)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Recursion: Solution](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=0)** - [Instructor] All right, we're back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=1)** So let's see how we would solve the exercise that I gave you in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=4)** Exercise number 1, to concatenate a string a set number of times.
>
> **[0:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=8)** Okay, the algorithm in an imperative form would look something like this.
>
> **[0:14](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=14)** It would have a var, let's call this result, starting at the empty string.
>
> **[0:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=19)** And a var, let's call this index, starting at 0.
>
> **[0:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=21)** And while I is less than N, I would say result is equal to result plus the string.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=28)** And finally, after the while, I'm going to return result.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=32)** So this is the algorithm that you would normally write in a more mainstream programming language in an imperative form.
>
> **[0:39](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=39)** So we're going to cut all that, and we're going to evaluate concatenate N in terms of expressions.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=45)** Let's think about it.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=46)** How would we concatenate a string 0 times?
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=49)** How would that look like?
>
> **[0:50](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=50)** So if N is less than or equal to 0, just to also add a sanity check, the value that we need to return here is the empty string.
>
> **[0:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=59)** This is what stops the recursion.
>
> **[1:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=60)** Otherwise, we're going to say string plus concatenate N with string and N minus 1.
>
> **[1:10](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=70)** So in many ways, the concatenate N function is very similar to the first function that we wrote in the example, the sum N.
>
> **[1:18](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=78)** So we said if N is less than or equal to 0, we return the basic case, which is, in our case, the empty string.
>
> **[1:23](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=83)** In the previous case, it was 0.
>
> **[1:25](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=85)** Otherwise, we would do some sort of combination of the current value, which is the string, plus whatever the recursive call used to give us.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=93)** So the concatenate N with string and N minus 1.
>
> **[1:37](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=97)** So I'm going to comment this Fibonacci for a moment so that my application doesn't crash so that we can see the result that is expected from us.
>
> **[1:45](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=105)** So concatenate N with [[Scala]] and 3 should give us back the string, scala, scala, scala.
>
> **[1:49](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=109)** Let's see how this works.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=111)** So after printing scala is awesome 20 times, notice that we have scala, scala, scala.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=115)** This is absolutely amazing.
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=118)** Okay, let's do the Fibonacci one.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=120)** So I mentioned in the previous video that the Fibonacci numbers have the property that the next Fibonacci number is the sum of the previous two Fibonacci numbers.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=129)** So this is essentially what I'm going to embed in the expression here.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=133)** Look what I'm going to write.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=134)** If N is less than or equal to 1, I'm going to return the number 1.
>
> **[2:21](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=141)** So that is going to be my first Fibonacci number.
>
> **[2:23](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=143)** I'm also going to add the less than or equal sign just to give some sanity checks here so that the recursion can stop.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=149)** Otherwise, if N is equal to 2, I'm going to return the number 2.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=155)** And otherwise, I'm going to essentially express in code what I mentioned was the Fibonacci property in the exercise, which is that the Fibonacci N is the sum of the previous two Fibonacci numbers, which is Fibonacci, Fibonacci, N minus 1, which is the last one, plus Fibonacci N minus 2, which is the next to the last one.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=178)** So essentially, Fibonacci N is the sum of the previous two Fibonacci numbers.
>
> **[3:02](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=182)** So notice that I'm using recursion not once but twice.
>
> **[3:06](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=186)** Obviously, it's legal to do that.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=187)** So I'm going to say print Fibonacci 6, and that should give me the number 13.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=191)** Let's run the application and see what that gives us.
>
> **[3:14](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=194)** Alright, so after scala, scala, scala, we get the number 13.
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=198)** So these are the solutions to the exercises in recursion.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=202)** Now, before we move on to the next topic, there are some things worth mentioning here.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=206)** First, the Fibonacci sequence is exponential, both in magnitude, that is, it's very easy to overflow the integer representation.
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=214)** Even for a relatively minor, like 2,000, Fibonacci number, this is going to be a huge number.
>
> **[3:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=221)** So I'm going to give the number 6 back.
>
> **[3:43](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=223)** So you may want to use big int or other integer representation if you want to represent giant Fibonacci numbers.
>
> **[3:50](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=230)** So that's one thing.
>
> **[3:51](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=231)** The second thing is that the Fibonacci exponential complexity is also in runtime complexity.
>
> **[3:56](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=236)** So if you try Fibonacci of even 100 or something like that, this will take forever to run.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=241)** And that is normal because of the recomputations of many, many numbers before we get to Fibonacci 100.
>
> **[4:07](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=247)** So again, I'm going to resort to Fibonacci with a decent number like 6.
>
> **[4:11](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=251)** And third, this recursion scheme, for example, sum N with a large stack trace, which for example, if you have a huge stack that the computer needs to remember in order to evaluate your final result, that may cause a stack overflow error if you pass too large of a parameter here.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=270)** So for example, if I try to say print line with numbers, not numbers, sum, with, let's say, 50,000 or something like that, 50,000 is not that huge of a number.
>
> **[4:41](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=281)** But if you try to evaluate this sort of thing, this will probably crash with what is called a stack overflow error simply because there are too many intermediary results that the computer needs to remember on what is called the stack.
>
> **[4:55](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=295)** So try not to use too big numbers in your recursion.
>
> **[4:59](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=299)** There is a technique to overcome this sort of stack overflow, and that is called tail recursion, but it's quite an advanced technique that we may discuss in some more advanced material.
>
> **[5:08](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=308)** So don't worry about it.
>
> **[5:09](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=309)** Even though recursion may seem that it has a bunch of disadvantages, including the brain damage that I'm giving you in this course, recursion is just as powerful as imperative programming.
>
> **[5:19](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=319)** And this can be proved mathematically.
>
> **[5:20](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=320)** So it's just as powerful as imperative programming, and it's actually far more useful to us because it leads to more readable and understandable code.
>
> **[5:29](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=329)** And this will become more apparent as you become more accustomed to this style.
>
> **[5:33](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=333)** So trust me, once you get to this style, you will not want to go back.
>
> **[5:38](https://www.linkedin.com/learning/scala-essential-training-2023/recursion-solution?u=76281980&t=338)** So congrats for following me along this far, and join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (11)
> **Definitions:** is called (3), is a  (1)
> **Analogies:** for example (3), similar to (1)
> **Cross-References:** previous video (2), in the next (1)
> **Documentation:** stack overflow (3)
> **Speakers:** - [instructor] (1)

#### [String interpolation](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=1)** So still in the basic chapter, I want to show you some string operations that you'll need for the [[Representational State Transfer (REST)|rest]] of this course and very likely for the rest of your experience with the [[Scala]] programming language.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=11)** So here in the basics chapter, I'm going to Right Click new Scala class file, I'm going to call this StringOperations, and I'm going to make an object as before, with a main method for running this application.
>
> **[0:25](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=25)** And I want to show you the kind of functionalities that the string type will provide to you by default.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=30)** So by now you probably know about the string type, which is special in Scala, and it's treated in a particular way.
>
> **[0:36](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=36)** So we're going to say aString = "Scale Rocks," and you can define string literals with pieces of text in between single quotes.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=45)** Now strings have functions attached to them and we call those methods.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=52)** You may have heard the term in other programming languages like [[Java]].
>
> **[0:56](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=56)** We have methods attached to strings.
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=58)** For example, the length of string as aString.
>
> **[1:03](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=63)** And there are a bunch of functions that you can invoke on the string, aString.length, this is the syntax by which you are calling the function associated or attached to the string, we call that a method.
>
> **[1:14](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=74)** And the length method would give you the number of characters in the string.
>
> **[1:17](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=77)** So for example, if you want to print line aString.length, you'll get the number of characters in Scala Rocks, and that's going to be 10 or 11 or something.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=87)** So we have 11 Scala Rocks plus a space. Okay?
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=91)** There are a bunch of other things that you can specify on strings.
>
> **[1:35](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=95)** For example, aString, let's say, starsWithScala = aString.startsWith, and you can say, Scala, and this returns true or false if the string starts with Scala or not, or ends with a particular token.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=111)** And this is very interesting for you to check patterns in strings.
>
> **[1:56](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=116)** You can combine a string with another string like aString plus a space, let's say, very much.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=125)** You can also validate whether a string that you may get from elsewhere, obviously you may not necessarily know the contents of that string.
>
> **[2:12](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=132)** You can test whether a string is empty.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=133)** So checkEmpty = aString.isEmpty.
>
> **[2:19](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=139)** And notice that these functions don't have any parentheses with them because they don't have any arguments.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=144)** So they're all blue, meaning that they're methods, that is functions attached to instances of string.
>
> **[2:31](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=151)** And they are called like this because they don't have any parentheses.
>
> **[2:36](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=156)** I can also check the existence of a particular substring inside the string, let's call this findIndex = aString.indexOf, and you can say rocks, and this will give you the index of the character where the token rocks occurs for the first time.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=176)** In this case, it's index number five.
>
> **[2:59](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=179)** So strings are zero indexed, meaning that the first character is index zero, second character is index one, and so on and so forth.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=187)** So the index of rocks is 0, one, two, three, four, five, six.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=192)** So that's going to be the index that we're going to print.
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=196)** So I'm going to say findIndex just to test this out.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=201)** Okay, so the number six, and if the substring cannot be found, then the index will return -1.
>
> **[3:29](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=209)** So -1 is obviously an invalid index.
>
> **[3:31](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=211)** So let's call this Astronaut.
>
> **[3:36](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=216)** findIndex will return -1.
>
> **[3:38](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=218)** And you can obviously test this by running the application.
>
> **[3:41](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=221)** So notice that we have -1 in the console.
>
> **[3:44](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=224)** And there are a bunch of other functions that you can check on strings, you can say aString.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=229)** and you can scroll through these various functions that you have access to.
>
> **[3:54](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=234)** Most of them are imported from the Java language because Scala works on the JVM, on the Java Virtual Machine.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=241)** And obviously, it has access to all the string methods in the Java language.
>
> **[4:05](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=245)** So notice that we have some sort of documentation for all of these functions.
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=249)** You can investigate them at your leisure.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=252)** One other thing that I wanted to show you, which is specific to Scala is interpolation.
>
> **[4:17](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=257)** Interpolation is the ability to inject values or expressions inside a string.
>
> **[4:24](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=264)** So for example, let's say I have a name as Alice, so I'm going to define my own variable here.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=270)** Age = 12.
>
> **[4:32](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=272)** And let's say that this Alice aged 12 wants to greet, "Hi, I'm Alice and I'm 12 years old."
>
> **[4:38](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=278)** With the current operators that we can use, the basic greeting would be to say, hi, my name is a space, plus name, plus a string with a space, and I am a space, plus age, plus space years old, which is the Java way to concatenate strings with some variables in between them.
>
> **[5:05](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=305)** In Scala there is a far easier way to do the same thing, which is to inject name and age into the string itself.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=312)** So I'm going to say greeting better or greeting_v2 as an S quote.
>
> **[5:17](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=317)** So notice that I'm putting an S before the string itself.
>
> **[5:21](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=321)** So I'm going to say, hi, my name is, and I'm going to say $name, and I am $age years old, which is far more readable and also more understandable that you are injecting name and age at these exact places in the string, it's very easy to miss spaces in this sort of concatenation by plus.
>
> **[5:41](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=341)** And you probably saw your own UI errors or UI wrong displays, simply by concatenating strings incorrectly.
>
> **[5:51](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=351)** This is called an s-interpolated string.
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=355)** And this allows you to inject variables of any kind inside strings, they are simply turned into string by calling a special function called toString on every value.
>
> **[6:07](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=367)** And by the way, every single thing in Scala has a toString method, we're going to talk about toStrings when we are going to explore case classes in the next chapter, so don't worry about that.
>
> **[6:18](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=378)** Now, s-interpolation is also powerful enough to evaluate expressions right here on the spot and inject the result into the string.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=386)** So let's say greeting_v3 as S quote, and I'm going to copy most of the stuff.
>
> **[6:33](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=393)** hi, my name is name and I am age years old.
>
> **[6:37](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=397)** So hi, my name is a name and I am age years old, but with a twist, let's say I will be turning, and I would like to say age +1 here.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=406)** The way that you can inject that sort of expression in an s-interpolated string would be to say $ and then some curly braces, and you can pass any sort of expression inside.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=415)** So I'm going to say {age + 1} years old inside the string and it will print out just as fine.
>
> **[7:01](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=421)** So I'm going to say println, let's say greeting_v3.
>
> **[7:05](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=425)** So we'll see, hi, my name is Alice and I'll be turning 13 next year.
>
> **[7:11](https://www.linkedin.com/learning/scala-essential-training-2023/string-interpolation?u=76281980&t=431)** So these are some powerful and some very handy features of strings in Scala, so join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (12), [[Java]] (5), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** astring (10), findindex (3), tostring (2), starswithscala (1), startswith (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (4)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)
> **Prerequisites:** you'll need (1)


### 2. Object-Oriented Programming in Scala

[↑ Back to Table of Contents](#table-of-contents)

#### [Classes, instances, fields, and methods](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=0)** - [Instructor] All right, welcome back and welcome to a new chapter.
>
> **[0:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=3)** [[Scala]] is a language that blends [[Object-Oriented Programming (OOP)|object-oriented programming]] and [[Functional Programming]] into a very expressive language.
>
> **[0:10](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=10)** And in this chapter, we're going to deal with one of those pieces, which is object-oriented programming.
>
> **[0:15](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=15)** This is the first of those lessons.
>
> **[0:17](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=17)** So back to our project under comrock.jvm, I'm going to create a new package for this chapter of the course.
>
> **[0:23](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=23)** I'm going to call this part2oop from object-oriented programming.
>
> **[0:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=27)** And under this package, I'm going to right-click and I'm going to make a new Scala class.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=32)** I'm going to call this OOBasics.
>
> **[0:34](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=34)** I'm going to make it an object with a main method in case we need to test some stuff.
>
> **[0:38](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=38)** So let me collapse my file explorer and let me start talking about classes and instances.
>
> **[0:43](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=43)** You may have seen these concepts in other programming languages.
>
> **[0:47](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=47)** Essentially a class is like a blueprint for defining a data type that describes its data, that is the fields that that particular data type contains, and also the behavior, that is the logic of how that thing is supposed to work.
>
> **[1:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=60)** And concrete realizations of classes and memory are called instances, and the act of creating instances is called instantiation.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=69)** So let me outline these concepts in turn.
>
> **[1:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=72)** First of all, classes, let me define a class called Person.
>
> **[1:15](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=75)** By creating this class Person, I have defined a new data type.
>
> **[1:18](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=78)** And if you want to create an instance that is a concrete memory zone that conforms to the structure described by this Person class, you define a value.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=87)** Let's call this daniel as a new Person.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=91)** And that uses the new keyword.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=93)** And you may have seen this new keyword in other programming languages, maybe [[Java]], maybe C++ or things of that sort.
>
> **[1:40](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=100)** You may have seen this before.
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=101)** So in this case, daniel is called an instance of Person.
>
> **[1:49](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=109)** And the act of creating the daniel instance is called instantiation.
>
> **[1:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=113)** Now obviously this class is very simple, so let's spice it up a bit.
>
> **[1:57](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=117)** Let's create a name as a string and an age as an int.
>
> **[2:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=123)** Notice that I'm defining the class with some arguments as if I'm defining a function.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=129)** And the class Person with arguments is called the constructor.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=134)** So the class definition also contains the definition of its constructor.
>
> **[2:25](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=145)** The constructor is the definition that allows instantiation, that is creating new instances of this Person type.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=152)** Notice that once I've added some constructor arguments, then the new Person here is now compiling error because they need to pass some arguments.
>
> **[2:39](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=159)** So the compiler says missing argument for parameter name and also for parameter age.
>
> **[2:44](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=164)** So let me add some parameters.
>
> **[2:45](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=165)** Let's say the name is Daniel and age is 99.
>
> **[2:50](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=170)** Okay, so these are the parameters by which we're building a new instance of Person.
>
> **[2:55](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=175)** Let's add some behavior.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=177)** So I'm going to add some curly braces here.
>
> **[3:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=181)** And inside the body, we can define values, variables, and functions.
>
> **[3:10](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=190)** So we can define fields of type val or var.
>
> **[3:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=194)** So we can define fields, let's say val, let's call this allCaps as name.toUpperCase.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=201)** So this is one of the functions on the string type.
>
> **[3:25](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=205)** So val allCaps is now a field of the Person type.
>
> **[3:29](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=209)** So I can access this field by, for example, printing it out, so I'm going to say println Daniel.allCaps.
>
> **[3:35](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=215)** So the way that we can access a field is with the dot notation that you may have seen in other languages.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=220)** So instance.field.
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=222)** So in this case, I'm going to shout out my name in the console.
>
> **[3:47](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=227)** All right, so the console spells out Daniel.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=229)** So we can define fields either val or var.
>
> **[3:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=233)** We will try to stick with val as we progress through the course.
>
> **[3:58](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=238)** And we can also define methods that is functions associated to this class with the def keyword.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=244)** So for example, I can define a function called greet that tries to greet someone as a string.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=252)** And this returns a string maybe.
>
> **[4:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=254)** And I'm going to use an s interpolated string, which we'll use quite a lot, and I'm going to say $name says: Hi $someone.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=267)** So with this function definition, and I'm going to call these functions inside classes from now on methods, I can use that method.
>
> **[4:34](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=274)** So I'm going to say println daniel.greet let's say Alice.
>
> **[4:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=282)** So the way that we can invoke this method on the instance Daniel is to say Daniel dot and then the function name and then the appropriate parameters.
>
> **[4:51](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=291)** And obviously this is going to say "Daniel says: Hi Alice."
>
> **[4:55](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=295)** Okay, so this is how we can define methods and fields inside the class.
>
> **[5:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=301)** Now, there are some rules of which kind of fields and which kind of methods you can define.
>
> **[5:05](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=305)** One permission that Scala will allow you to do in terms of method naming is that you can define multiple methods with the same name.
>
> **[5:17](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=317)** That is called overloading.
>
> **[5:19](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=319)** You may have heard about this term from other languages.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=322)** So I can define another method called greet.
>
> **[5:25](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=325)** The only rule that I need to follow is that this new method must differ in signature to the other one that's already been defined.
>
> **[5:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=332)** And by this I mean the argument lists and the return type.
>
> **[5:37](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=337)** So for example, if I define a new greet method with no arguments that returns a string maybe, this is a different function signature because the argument list is different.
>
> **[5:45](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=345)** So I can say, for example, s quote, "Hi everyone, I'm," and I'm going to use name inside.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=354)** So this is a legal method definition, even though it has the same name as this other method definition.
>
> **[6:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=360)** The only thing that differs is the argument list.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=363)** So I can say, for example, println daniel.greet.
>
> **[6:08](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=368)** And obviously this code will compile and it will say, "Hi everyone, I am Daniel."
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=374)** All right, so we can define fields, we can define methods, and we can define multiple methods with the same name as long as we have a different signature.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=386)** Okay, so we can define fields and methods and we can overload these methods.
>
> **[6:31](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=391)** One thing, and this is a potential source of confusion if you come from other programming languages with the same kind of class OOP, is the fact that you can access the name or age fields in many other programming languages with the same structure, but in Scala you can't do that.
>
> **[6:48](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=408)** So if I say, danielName as daniel.name, thinking that the name here as a constructor argument is also a field, that's not possible in Scala because name is not a field.
>
> **[7:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=421)** So constructor argument is not necessarily a field.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=430)** So you can't access it by just using the dot notation.
>
> **[7:13](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=433)** You have to do something more.
>
> **[7:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=434)** And that is to provide the val keyword in front of the constructor parameter.
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=439)** So if you want to promote a constructor parameter as a field, you'll have to put the val keyword in front of it.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=445)** The var keyword also works, but we're going to try to stick to the val keyword as we progress through the course.
>
> **[7:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=452)** Okay, so we've learned quite a lot in just a few lines of code.
>
> **[7:35](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-fields-and-methods?u=76281980&t=455)** Let's move to the next video 'cause I want to give you some exercises to practice these concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[Functional Programming]] (1), [[Java]] (1)
> **Definitions:** is a  (5), is called (5)
> **Code Identifiers:** allcaps (3), touppercase (1), danielname (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (2)
> **Env Vars:** oop (1)
> **Cross-References:** next video (1)
> **UI Navigation:** right-click (1)

#### [Classes, instances, and methods: Exercise](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=0)** - [Instructor] Alright, back to OOP.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=1)** Let me give you some exercises to practice what we learned in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=4)** So, back to our little project and to the OOP basics lesson that we wrote in the previous video, let me type in a few exercises.
>
> **[0:15](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=15)** So I would imagine that we're creating a backend for a driver and car registration app for the government or something like that.
>
> **[0:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=22)** So, imagine we are doing an app for car registration.
>
> **[0:29](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=29)** Maybe you want to do registration for used cars.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=32)** Maybe you are doing this for a car rental or for the government, or something like that.
>
> **[0:37](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=37)** I want you to create a car and a driver class.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=46)** So, I would ask for the following structure.
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=49)** The car will have a make, a model.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=53)** Both of them are strings, a year of release, which is an integer, and an owner, which is going to be a driver.
>
> **[1:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=61)** And that driver will have a first name, a last name, and let's say a year of birth so that we can decide the age of the driver, and let's assume that we have a method full name so that we can compute the concatenation between the first name and last name with a space in between them.
>
> **[1:26](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=86)** So we have a method inside, and for the car data structure, we would have to compute, let's say a method owner age so that we can compute the age of the owner, at the year of release, which essentially means the difference between the year of release and the year of birth from the owner.
>
> **[1:45](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=105)** Then another method.
>
> **[1:48](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=108)** Method is owned by, and we're going to have to pass a person inside, so like a driver, as a driver, as an argument.
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=118)** And this will return bullion if the driver is the same as the owner.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=126)** And let's add another method.
>
> **[2:08](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=128)** Let's say copy with a new year of release, new year of release, maybe somebody updates the model of the car, and we're going to return a new car with the same make and model, the same owner, and a different year of release.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=144)** So this returns a new car instance with the same data except the new year of release.
>
> **[2:36](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=156)** So this is your exercise.
>
> **[2:38](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=158)** I want you to create a car and a driver class with the information that I requested here you'll have to decide the types for every constructor argument or fields if you want to promote them to fields, to decide the method signatures like full name, owner, and so on, and so forth.
>
> **[2:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=173)** And to also implement them in the simplest form that you can imagine.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=177)** Alright, so I'll follow up in the next video with some potential solutions to these exercises.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-exercise?u=76281980&t=183)** So join me in the next video for that.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), in the next (2)
> **Analogies:** imagine (3)
> **CLI Commands:** make (2)
> **Env Vars:** oop (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Classes, instances, and methods: Solution](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=0)** - [Instructor] All right, back to all basics.
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=2)** We're going to provide some guidance for the exercises that I gave you in the previous video.
>
> **[0:06](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=6)** So this will act just as guidance.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=9)** Your actual implementations may differ just a little bit.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=12)** So I am going to create a Car and a Driver class by first creating the classes themselves.
>
> **[0:17](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=17)** So I'm going to say class Car, class Driver.
>
> **[0:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=22)** Okay, let me implement the Driver class first.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=26)** So we'll have a first name, a last name, and a year of birth.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=30)** Let's think about the types that we can associate to these constructor arguments.
>
> **[0:33](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=33)** So I'm going to say firstName, and the firstName is going to be a string because it contains a piece of text, same for lastName.
>
> **[0:41](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=41)** And the yearOfBirth, yearOfBirth is going to be an int because we don't have that many years in our recorded history.
>
> **[0:48](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=48)** So it's enough for us to return an int.
>
> **[0:51](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=51)** Now we're going to create a method.
>
> **[0:54](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=54)** So I'm going to open the Driver class and I'm going to define a method fullName, and this will return a string.
>
> **[1:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=63)** It takes no arguments because it needs no arguments, it doesn't really need any sort of parameters here.
>
> **[1:08](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=68)** So I'm going to have fullName as a string.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=69)** So I'm simply going to concatenate the firstName and lastName into, I'm going to use an s interpolated string.
>
> **[1:16](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=76)** So "$firstName $lastName".
>
> **[1:20](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=80)** That's essentially it.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=82)** Now in [[Scala]], you can choose whether to have any arguments to a method or not.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=87)** So you can cut out the parentheses if you want to make them look like fields, although they're methods.
>
> **[1:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=92)** So they're computed every time they're invoked.
>
> **[1:36](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=96)** So you can decide fullName like this or fullName without parentheses.
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=101)** And that's essentially what we need for the Driver class.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=104)** We don't need any other methods.
>
> **[1:46](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=106)** You can choose to make firstName, lastName, and yearOfBirth as fields, but we're going to promote them to fields on a by-need basis if we need them in the Car class, which we're going to turn to next.
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=118)** So we have a make. A make is a string.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=122)** The model is also going to be a string.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=125)** The yearOfRelease is going to be an int for the same reason the yearOfBirth is an int.
>
> **[2:11](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=131)** And we're going to have an owner, and this is the interesting bit because the owner is an instance of Driver.
>
> **[2:18](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=138)** So I'm going to have my Driver as the type annotation for the owner instructor argument.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=144)** So let's open the Car class and I'm going to have a method ownerAge.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=149)** So I'm going to have to define my ownerAge.
>
> **[2:33](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=153)** And this ownerAge will be essentially the difference between the yearOfRelease and the yearOfBirth from the Driver.
>
> **[2:39](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=159)** So this is the only thing that really makes sense here.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=162)** So the ownerAge is going to be by yearOfRelease minus my owner.yearOfBirth.
>
> **[2:52](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=172)** So this is going to return an int and this is equal to yearOfRelease - owner.yearOfBirth.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=178)** And notice that we have our first problem here because the yearOfBirth is not really accessible as a field.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=183)** So we need to promote it as such.
>
> **[3:05](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=185)** So the val yearOfBirth needs to be a field so that we can access that in Car.
>
> **[3:10](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=190)** So this is going to be my ownerAge, then isOwnedBy.
>
> **[3:14](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=194)** So I'm going to have my def_isOwnedBy, and this is going to be my driver of type Driver.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=202)** So notice that the argument here is of type Driver, the class that we created earlier.
>
> **[3:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=207)** This method returns a Boolean and tests whether the Driver is equal to owner.
>
> **[3:32](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=212)** So let's say true or false if the driver is the same as the owner.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=217)** So I'm going to return true or false if driver is the same as owner.
>
> **[3:43](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=223)** So the equal equal sign works between any two values.
>
> **[3:48](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=228)** So it's the same for integers, for strings, and in this case, for drivers as well.
>
> **[3:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=233)** This is the implementation that we were looking for.
>
> **[3:56](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=236)** And copy with newYearOfRelease, "Returns a new Car instance with the same data except the new year of release."
>
> **[4:02](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=242)** So let me define the copy method, copy with newYearOfRelease, and this is going to be an integer.
>
> **[4:11](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=251)** And this returns a Car instance as described by the method.
>
> **[4:16](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=256)** So it returns a new Car instance with the same data.
>
> **[4:19](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=259)** So I'm going to return a new Car with the same data.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=262)** So new Car, so with the same data, that means the same make and model.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=267)** So I'm going to pass them as arguments here.
>
> **[4:28](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=268)** The yearOfRelease is not going to be the original one, but the new one that I'm passing is arguments.
>
> **[4:33](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=273)** So newYearOfRelease with a capital R and the same owner.
>
> **[4:43](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=283)** And that is going to be my implementation.
>
> **[4:46](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=286)** So new Car(make, model, newYearOfRelease, owner).
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=290)** This is the implementation that we were looking for.
>
> **[4:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=293)** So we can also test these out. So let's test the exercise.
>
> **[4:58](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=298)** So I'm going to have a val, let's call this driver as a new Driver.
>
> **[5:02](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=302)** Let's say Michael and then Schumacher, and he was born in 1969.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=312)** The legend for F1.
>
> **[5:16](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=316)** I'm going to have a val, let's call this driverImposter as a new Driver with the same data.
>
> **[5:24](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=324)** So I'm going to say Michael and then Schumacher, and let's say that this imposter was born in 2020.
>
> **[5:36](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=336)** And let me create a car as a new Car, and I'm going to have a Ferrari.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=342)** I am not really an expert on F1, I'm just going to call this F1 made in 2004.
>
> **[5:48](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=348)** And then let's say that this Car is owned by the original driver.
>
> **[5:51](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=351)** So driver, I'm going to pass this as argument.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=354)** And we can print a bunch of things.
>
> **[5:56](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=356)** For example, println, I'm going to say driver.fullName.
>
> **[6:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=361)** Then I'm going to say println(car.ownerAge()), so that we can understand the age of Schumacher when he owned this car.
>
> **[6:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=372)** Also println(car.isOwnedBy(driver)), and this should give us back true.
>
> **[6:22](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=382)** Also println, car.isOwnedBy, isOwnedBy, let's say imposter.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=390)** And this should give us back false.
>
> **[6:33](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=393)** Let's also println, car.copy, and then I'm going to say newYearOfRelease, 2005.
>
> **[6:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=402)** And then I'm going to call some method like ownerAge.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=406)** And this should be the ownerAge, this one plus one.
>
> **[6:53](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=413)** And let's try these out.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=415)** So let's just run the application with the kind of prints that we have so far.
>
> **[7:01](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=421)** So we have Michael Schumacher as a single string.
>
> **[7:05](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=425)** 35, so that's 1969 + 35, that's 2004.
>
> **[7:09](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=429)** We have true. So isOwnedBy(driver), that's true.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=432)** isOwnedBy(driverImposter), that's false.
>
> **[7:15](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=435)** And the car.copy(2005).ownerAge is 36, which is one more than 35.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=441)** Now one thing that you may note if you've tested this quite a lot is that even if you create a driverImposter with the same data like 1969, the same situation will occur.
>
> **[7:34](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=454)** So in this case, car.isOwnedBy(driverImposter) is false, even though the driverImposter has the same data as the original Driver.
>
> **[7:42](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=462)** In other words, the driver = driverImposter is actually false.
>
> **[7:47](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=467)** So I'm actually going to println something, println("testing equality:"), and I'm going to add the expression driver == to driverImposter.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=480)** So driver and driverImposter are two separate instances of Driver with the same information, but the equality here is not true.
>
> **[8:11](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=491)** So testing equality, this gives us back false even though we have the same information.
>
> **[8:16](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=496)** The reason why that happens is explained later when we're going to deal with case classes and with the equals function.
>
> **[8:23](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=503)** But that is for later.
>
> **[8:24](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=504)** I just wanted to mention this in case you are wondering about whether you have a bug in your code.
>
> **[8:28](https://www.linkedin.com/learning/scala-essential-training-2023/classes-instances-and-methods-solution?u=76281980&t=508)** You probably don't, so congrats for following along, and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (1)
> **Code Identifiers:** yearofbirth (9), ownerage (9), driverimposter (8), isownedby (7), firstname (5)
> **CLI Commands:** make (6)
> **Definitions:** is an  (2), is a  (1), in other words (1)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** open the (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Method notation](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=0)** - [Lecturer] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=1)** This video is about infix method notations.
>
> **[0:04](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=4)** That is an alternative syntax in [[Scala]] to call methods with exactly one argument.
>
> **[0:10](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=10)** As you'll see, this method notation will allow Scala to behave very much like natural English.
>
> **[0:16](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=16)** So in part2oop, I'm going to create a new Scala application.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=20)** I'm going to call this MethodNotation or notations.
>
> **[0:25](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=25)** I'm going to make it an object and with a main function just to test what we are going to write.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=30)** Let me create a class called Person with let's say a name as a string.
>
> **[0:34](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=34)** We don't really need any sort of data inside.
>
> **[0:37](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=37)** And inside this class, I'm going to define a method called greet.
>
> **[0:42](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=42)** And I'm going to say another, which is another person.
>
> **[0:47](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=47)** And this returns a string.
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=49)** And I'm going to make the name of val so that we can access the name of a person.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=55)** So I'm going to interpolate this with an S quote.
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=58)** I'm going to say name says, and I'm going to say hi, dollar, and then some curly braces, another.name, how are you?
>
> **[1:12](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=72)** Or something like that.
>
> **[1:13](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=73)** So we have a greet method that takes another person as an argument.
>
> **[1:18](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=78)** Let's say we have two persons like Alice, which is a new person with the name Alice.
>
> **[1:24](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=84)** Small detour, starting in Scala 3, the new keyword is not mandatory.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=88)** So you can simply say Person with Alice and it does the exact same thing.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=93)** And I'm going to create a val.
>
> **[1:34](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=94)** Let's call this bob as Person, Bob.
>
> **[1:39](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=99)** Okay, now let's say that Alice greets Bob.
>
> **[1:42](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=102)** So in main, I'm going to show you print line alice.greet with the argument bob.
>
> **[1:47](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=107)** So bob is a good argument for the greet method because it is of type person.
>
> **[1:53](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=113)** So once we print line alice.greet bob, Alice will say, "Hi, Bob, how are you?"
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=118)** So this is the kind of statement that we will see in the console.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=122)** So Alice says, "Hi, Bob, how are you?"
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=125)** Okay, so all good so far.
>
> **[2:07](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=127)** This is with the kind of concepts that you've learned in the previous few videos.
>
> **[2:12](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=132)** Now, the thing that I wanted to show you here is that this particular syntax, alice.greet bob, is the standard way of calling a method, obviously with the bob argument.
>
> **[2:23](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=143)** But if it just so happens that the method that you're calling has exactly one argument, it doesn't really matter what type that thing is, it just matters that the greet method has one argument.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=155)** You can print line the following.
>
> **[2:37](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=157)** You can say alice, space, greet, space, bob.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=162)** So alice greet bob.
>
> **[2:44](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=164)** And this will be exactly the same thing.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=169)** So this structure where you have the instance method and then argument is called the infix notation.
>
> **[2:59](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=179)** So let me compile and run this application.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=183)** And notice that we have exactly the same result in the console.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=187)** So whenever we have, and I'm going to mark this in my ASCII art here.
>
> **[3:13](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=193)** So we have an object that is the instance, and then we have the method, instance, method, and then argument.
>
> **[3:28](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=208)** So let me mark this with arrows here.
>
> **[3:30](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=210)** So instance, method, argument.
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=214)** This structure is called the infix notation, and it's exactly equivalent to the dot notation that you've gotten used to from the previous videos and from other programming languages.
>
> **[3:44](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=224)** Now this infix notation only works on methods with one argument.
>
> **[3:52](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=232)** It doesn't really matter what type that argument is.
>
> **[3:54](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=234)** For example, let me say that this person has a favorite movies.
>
> **[3:58](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=238)** Let's say, let's call this likes movie as a string.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=244)** So notice that we have a different kind of signature here, the argument as the type string.
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=249)** And let's assume that this method also returns a string.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=252)** And I'm going to say, name says, I adore the movie and then I'm going to inject movie inside with three exclamation marks just to express the excitement.
>
> **[4:25](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=265)** So let's say print line alice.
>
> **[4:28](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=268)** So let's print this out.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=270)** So print line alice.likes Forrest Gump.
>
> **[4:37](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=277)** This is the regular dot notation.
>
> **[4:38](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=278)** Obviously we can use the infix notation because the likes method has one argument.
>
> **[4:44](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=284)** So Alice, space, likes, space, the argument, Forrest Gump.
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=290)** Exactly the same thing.
>
> **[4:52](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=292)** So notice how very English-like this programming is.
>
> **[4:55](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=295)** Alice likes Forrest Gump, very natural.
>
> **[5:00](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=300)** So we have, "I adore the movie Forrest Gump."
>
> **[5:04](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=304)** Now in code, the way to better mark whether a method is going to be called infix or not is to prefix the method definition with a keyword infix.
>
> **[5:16](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=316)** The keyword infix is a soft modifier that is the thing works so the infix notation works with or without it, but this is an indication to other programmers in your team that this method will be called infix.
>
> **[5:28](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=328)** Now there's another thing that I wanted to show you here is that the method names in Scala can have non-alphanumeric characters as well.
>
> **[5:36](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=336)** So I'm going to define a method, let's say ?!, which is a valid method name in Scala.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=344)** And let's say we have another, which is a person.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=347)** Let's say that you're angry at this person and say, how could you do this to me?
>
> **[5:51](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=351)** Let's say a string.
>
> **[5:52](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=352)** I'm going to say dollar name says, hey, another name, how could you do this, with this ?!.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=369)** This is a valid method name.
>
> **[6:11](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=371)** Notice that we don't have a compiling error.
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=374)** So I'm going to have say print line alice.?!
>
> **[6:21](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=381)** invoked with the argument bob, and this thing works.
>
> **[6:25](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=385)** So if I print this, we're going to have, Alice says, "Bob, how could you do this?!"
>
> **[6:31](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=391)** So the ?! is a valid method name in Scala.
>
> **[6:36](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=396)** Now, because we have this sort of method name, it's usually common practice in many Scala libraries to have these methods be called infix.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=406)** So we're going to mix the infix keyword with the method permissiveness in Scala so that we can say alice, space, ?!, bob.
>
> **[6:56](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=416)** So Alice is wondering at Bob.
>
> **[6:59](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=419)** So let me run this and we are going to compile and run the exact same thing.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=423)** "Hey Bob, how could you do this?!"
>
> **[7:05](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=425)** This sort of non-alphanumeric names are very popular in frameworks like Akka or Pekko, the open source alternative, in Cats, in ZIO, and in many other libraries in the Scala ecosystem.
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=439)** So I hope that makes sense.
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=439)** Let me cut this out.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=441)** So one last thing that I wanted to show you before we wrap up this video is a special method called apply.
>
> **[7:27](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=447)** So I'm going to create a method called apply like this.
>
> **[7:30](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=450)** You can add any sort of arguments here.
>
> **[7:32](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=452)** For example, let's say that this person is programming in a language like, let's call this programming language as a string.
>
> **[7:41](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=461)** And this, say there's Unit and print line with a little tag here.
>
> **[7:47](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=467)** Let's insert the name inside.
>
> **[7:48](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=468)** Then I'm going to say, Programming in progLang.
>
> **[7:53](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=473)** So something like this.
>
> **[7:55](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=475)** The apply method can take any number of arguments and any types of those arguments.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=480)** And the apply method is treated in a particular way by the compiler in the sense that if you have an instance of person and you call the apply method, you might omit the apply [[Microsoft Word|word]] altogether.
>
> **[8:09](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=489)** Let me give you an example.
>
> **[8:10](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=490)** So let's say that in this case, Alice is programming in Scala.
>
> **[8:14](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=494)** So I'm going to say alice.apply Scala.
>
> **[8:20](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=500)** So this is the regular way of calling the apply method.
>
> **[8:22](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=502)** Obviously this will print, Alice says, "Programming in Scala," right?
>
> **[8:27](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=507)** So we have Alice, "Programming in Scala."
>
> **[8:29](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=509)** Okay, now what I wanted to show you about the apply method is that when you have a method called apply exactly like this, so with this exact spelling, you can invoke the alice instance exactly like this without the apply word.
>
> **[8:44](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=524)** So this is the same as alice.apply with Scala.
>
> **[8:50](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=530)** So this code not only compiles, but it runs just in the same way.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=534)** So we'll see here Alice, "Programming in Scala."
>
> **[8:57](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=537)** And this is particularly important because it allows us to invoke instances of classes on arguments as if they were functions.
>
> **[9:06](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=546)** And this is particularly important for [[Functional Programming]] as we will see in the next chapter.
>
> **[9:10](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=550)** So alice invoked on the argument Scala is the same as alice.apply with the argument Scala.
>
> **[9:18](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=558)** Obviously if we cut out the apply method, the compiler will complain about our code and saying value alice does not take parameters.
>
> **[9:27](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=567)** In other words, the value alice here, which is of type person, doesn't have an apply method.
>
> **[9:32](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=572)** So I'm going to comment the apply method again and the code will compile just fine.
>
> **[9:36](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=576)** Obviously you can define many apply methods.
>
> **[9:38](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=578)** So let's say apply, let's say a programming language, which is a string, and let's say an algorithm which is also a string.
>
> **[9:47](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=587)** And I'm going to return the same code.
>
> **[9:52](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=592)** So I'm going to say, programming in progLang, applying the algorithm, and I'm going to inject algorithm here.
>
> **[10:01](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=601)** And this apply is a valid overload for this other apply.
>
> **[10:05](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=605)** So notice that we have two apply methods, and naturally, we can invoke alice on Scala.
>
> **[10:11](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=611)** And let's say the algorithm is, let's say Dynamic Programming.
>
> **[10:17](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=617)** So this code will simply compile and run just as fine.
>
> **[10:21](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=621)** So notice that we have, "Programming in Scala, applying the algorithm Dynamic Programming."
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=626)** So as many apply methods as we define in our classes, in as many ways, we can invoke the instances of those classes with those exact arguments.
>
> **[10:35](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=635)** So I want you to remember the apply method because it will become very important towards the end of the chapter and in later chapters of the course when we will discuss functional programming.
>
> **[10:45](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=645)** So this video was to show you how method notations work in Scala and the kind of naming that you can apply to methods.
>
> **[10:50](https://www.linkedin.com/learning/scala-essential-training-2023/method-notation?u=76281980&t=650)** So see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (21), [[Microsoft Word|Word]] (2), [[Functional Programming]] (2)
> **Definitions:** is a  (10), is an  (2), is called (2), in other words (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** proglang (2)
> **Env Vars:** ascii (1), zio (1)
> **Cross-References:** in the next (2)
> **Analogies:** for example (2)
> **Speakers:** - [lecturer] (1)

#### [Inheritance](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=0)** - [Instructor] All right, welcome back to the [[Object-Oriented Programming (OOP)|object-oriented programming]] chapter.
>
> **[0:03](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=3)** This video is particularly important because we're going to talk about inheritance, which is a critical concept in object-oriented programming.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=9)** So under the part two OOP, I'm going to create another [[Scala]] application, I'm going to call this Inheritance.
>
> **[0:15](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=15)** I'm going to mark an object and I'm going to type in a main for whatever tests we need to make.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=20)** Okay, so let me create a little class, and for this lesson I'm going to use a different kind of class domain, which is video games.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=30)** So I'm going to create a class called VideoGame, and I'm going to create some sort of field, let's say val gameType, which, let's say it's interactive, this is a field, and a method called play, which returns, let's say, Unit.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=46)** And I'm going to printline, let's say game running.
>
> **[0:51](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=51)** So this is a regular class of the type that you saw in the previous videos.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=55)** Now, in Scala, like other programming languages that use OOP, we have single-class inheritance.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=64)** That is, we can define new classes that inherit from others by copying their fields and methods.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=69)** So for example, if I create a class called Shooter that is in FPS, and this extends VideoGame, then by defining the class Shooter, I already have the gameType and the play methods already defined in the class called Shooter.
>
> **[1:25](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=85)** So if I define val, let's call this crysis, as a new Shooter.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=93)** Because the Shooter doesn't have any constructor arguments I can invoke it like this.
>
> **[1:37](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=97)** Then in main, I can printline crysis, crysis.gameType.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=104)** So notice that I already have access to the gameType field just by the structure extends VideoGame.
>
> **[1:50](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=110)** And by the way, this sort of structure like extends VideoGame is present in many other programming languages like [[Java]], or TypeScript, or things of that sort.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=120)** And there are equivalent syntaxes for other languages that use OOP very similar to this one.
>
> **[2:07](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=127)** All right, so in the class called Shooter, I can define my own fields and methods that obviously will not be part of the VideoGame class.
>
> **[2:18](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=138)** So I'm going to define a class called multiplayer, and in this case I'm going to say play, not okay, but play.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=149)** And notice that I can refer to a method that doesn't really exist in the Shooter class, but it inherits it from the VideoGame by copying it.
>
> **[2:37](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=157)** And I'm going to say printline boom and boom!
>
> **[2:40](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=160)** Or something like that. Right?
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=162)** So crysis is a particularly fun and active shooter game, so I'm going to print line boom, boom!
>
> **[2:50](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=170)** All right?
>
> **[2:50](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=170)** So because I've created crysis instance as new Shooter, I can say crysis.gameType, and I can call crysis.multiplayer.
>
> **[3:01](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=181)** And I can invoke it like this or with parentheses if I am defining the method with parentheses.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=187)** So def multiplayer, it's going to give me back the Unit type.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=192)** So crysis.multiplayer, if I run this application, I'm going to have game running!
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=196)** And boom, boom! All right?
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=198)** So because I'm invoking the play method, this will print game running!
>
> **[3:23](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=203)** And then after that I'm going to print the other statement which is boom, boom!
>
> **[3:28](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=208)** Okay, so we have single-class inheritance in the sense that we can only pass one class here after the extends keyword.
>
> **[3:36](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=216)** Let me show you something else.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=217)** By extending a class, you will also inherit the primary constructor.
>
> **[3:44](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=224)** The primary constructor or simply the constructor is the class definition that will extend not just the class name itself, but also the primary constructor.
>
> **[3:54](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=234)** So I'm going to define a class, let's call this Person, with a val name as a string, so I already have a field, and an age as an Int.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=244)** And I'm going to create another class called Adult, and this extends Person.
>
> **[4:10](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=250)** Now in this case, we have a compiling error because the class Adult will extend Person, but must invoke Person constructor with some arguments.
>
> **[4:19](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=259)** And the reason is that if I were to instantiate this Adult class, essentially what I'm doing is I'm also instantiating the Person class.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=267)** And if I am to do that, I need to be able to provide some arguments here.
>
> **[4:31](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=271)** So the class Adult, because it has no constructor arguments, must pass some constructor arguments to the Person class that it's inheriting from.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=280)** So for example, I can say the name is [[John the Ripper|John]] Doe, and age is zero, or something like that.
>
> **[4:46](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=286)** So notice that the compiling error goes away, so that by the end of the day when I'm doing val, let's call this daniel as a new Adult, the creation of new Adult actually involves the creation of a person with the right constructor arguments, John Doe and zero.
>
> **[5:03](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=303)** So in this case, you must specify constructor arguments.
>
> **[5:10](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=310)** Now, notice that by creating Adult instances, we're essentially passing the same arguments to the Person class, therefore, if I say daniel.name, so println(daniel.name) it's not going to be Daniel but it's going to be John Doe because this is the value that I'm passing to the constructor of Person, right?
>
> **[5:28](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=328)** So the name of Daniel is actually John Doe, which is not something that I'm particularly fond of.
>
> **[5:33](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=333)** So if you want to customize or override the name or age arguments, you can pass them as constructor arguments to Adult like name: String, and age: Int.
>
> **[5:45](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=345)** And this extends Person with those exact values, name and age as constructor arguments.
>
> **[5:53](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=353)** So now we have a compiling error for Adult because I now need to pass those constructor arguments, new Adult with the name Daniel and age 99, and now the constructor is happy because I'm passing the right constructor arguments to adult.
>
> **[6:06](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=366)** Now, instantiating Adult wont necessarily instantiate Person with these particular values as specified in the signature of the Adult definition.
>
> **[6:16](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=376)** So now if I'm printing Daniel's name, then the value that we're going to see in the console is going to be Daniel instead of John Doe.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=386)** All right, so this video was quite compact.
>
> **[6:28](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=388)** We learned about single-class inheritance and the fact that extending a class wont necessarily copy its fields and methods so that we can access it in the so-called derived class.
>
> **[6:40](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=400)** And we can inherit the constructor of a class by specifying those constructor arguments.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=406)** And we must specify at least the constructor arguments that that class supports.
>
> **[6:51](https://www.linkedin.com/learning/scala-essential-training-2023/inheritance?u=76281980&t=411)** So join me in the next video where we're going to build upon the concepts that we've learned in this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[Scala]] (2), [[Java]] (1)
> **Code Identifiers:** gametype (5)
> **Env Vars:** oop (3), fps (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Overriding, polymorphism, and anonymous classes](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=0)** - [Instructor] All right, so we've learned quite a lot about inheritance.
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=2)** Let's build upon the concepts that we've already learned.
>
> **[0:05](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=5)** So back in the same inheritance object that we created in the previous video, we're going to learn about overriding and about a certain type of polymorphism.
>
> **[0:19](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=19)** You may have heard about these concepts from other languages if you've done OOP in those languages before.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=24)** So overriding means to provide a new implementation for methods in derived classes.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=32)** Let's say that we are going to build upon the VideoGame class hierarchy that we define in previous videos.
>
> **[0:37](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=37)** So we have a class called VideoGame with a val gameType and the def play that just print line game running.
>
> **[0:44](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=44)** Let's create a derived type. Let's call this class RPG.
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=49)** And this extends VideoGame.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=52)** Okay, so role-playing games, RPGs, may belong to a different kind of video classes.
>
> **[0:59](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=59)** So I can say override gameType.
>
> **[1:02](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=62)** With the override keyword, I can provide a new implementation or a new value for gameType.
>
> **[1:07](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=67)** So I can provide a different value than the interactive thing that I had in the parent class.
>
> **[1:13](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=73)** So I can say, for example, role-playing.
>
> **[1:17](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=77)** So obviously now if I've defined a class, we'll call this World of Warcraft, which is of type new RPG, if I print this in main, so if I println wow.gameType, this will be role-playing in this case.
>
> **[1:35](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=95)** It will not be interactive as was for Crysis in the previous video.
>
> **[1:42](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=102)** All right, so we provided a new implementation or a new value for this field.
>
> **[1:47](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=107)** So that is called overriding and it's marked by the [[Scala]] compiler with the keyword override.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=114)** You can also override methods as well by saying override and the ID offers to auto-complete some definitions for you.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=122)** So I'm going to override def play and notice that the default implementation is super.play.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=129)** Super means whatever the play implementation is in the parent class.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=134)** The parent class is the super keyword here.
>
> **[2:17](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=137)** So super.play refers to the implementation in the parent class.
>
> **[2:22](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=142)** All right, so we've learned about super as well.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=144)** I'm going to override this by providing a different implementation by saying println level up, which is one of the fundamental features of a role playing game is that you're leveling up and you're earning experience and you're getting new skills and so on and so forth.
>
> **[2:40](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=160)** Okay, so now if I say, wow.play, we'll not print game running as was the case for VideoGame, we're going to call this one, which is level up.
>
> **[2:55](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=175)** Right, so we see this in the console as well.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=178)** So overriding means to provide a new implementation for fields or methods in derived classes.
>
> **[3:06](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=186)** So this is the first concept that I wanted to show you in this video.
>
> **[3:09](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=189)** The next concept is called polymorphism, polymorphism, or the specific type is called subtype polymorphism, means to define a value, which is of a parent type, which is VideoGame.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=202)** And on the right-hand side, you need to provide an instance of that VideoGame.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=206)** For example, an instance of an RPG.
>
> **[3:28](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=208)** So you define a value of a parent type, so you declare a value of a parent type, and provide an instance of a derived type.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=225)** So I'm defining a VideoGame and actually providing an RPG.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=229)** Normally if these two types were unrelated, that is, if RPG was not a subtype of VideoGame, we would've got a compiling error, which is a type mismatch.
>
> **[3:59](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=239)** The type must match on the left-hand side and on the right-hand side.
>
> **[4:02](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=242)** But because RPG is a subtype of VideoGame, this declaration is legal.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=246)** Not only is it legal, but the behavior here in the application will still not change.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=252)** So if I run this application again, wow.gameType and wow.play will maintain their implementations, even though due to the fact that I've declared wow as a VideoGame, these methods as declared in the VideoGame will not be the ones to be run at runtime.
>
> **[4:29](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=269)** The ones to be run at runtime will belong to the actual instance that is being allocated in memory.
>
> **[4:36](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=276)** And the actual instance that it's allocated in memory is of type RPG..
>
> **[4:39](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=279)** And therefore when you call gameType or play, it will be referred from the actual class instead.
>
> **[4:45](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=285)** Now this concept is very popular in [[Object-Oriented Programming (OOP)|object-oriented programming]] languages like [[Java]] or C# or C++.
>
> **[4:52](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=292)** The concept in C++ is called virtual methods and many other object-oriented languages of the same kind.
>
> **[4:59](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=299)** So this sort of concept is very popular in OOP in general, but I wanted to show you how that works in Scala.
>
> **[5:06](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=306)** So we learned two very important things in this video, overriding and subtype polymorphism.
>
> **[5:11](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=311)** One last thing that I wanted to show you, which is pretty spectacular, and you may see this in real life Scala code, is that of anonymous classes.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=322)** Anonymous classes are declarations of new classes with overriding implementations on the spot so that the classes don't really bear any names.
>
> **[5:30](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=330)** And the structure works like this.
>
> **[5:32](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=332)** Let me define a val, let's call this psychonauts, one of my favorite games of all time, and I'm going to create a new VideoGame.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=342)** And at this point, the declaration is legal because VideoGame is a class that has everything implemented, that is, it has the fields and methods and so on and so forth.
>
> **[5:52](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=352)** But I can choose to override parts of this class by creating a new VideoGame, opening up some curly braces, and I can specify some overrides here on the spot.
>
> **[6:02](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=362)** So for example, I can override the gameType to say platformer with adventure or something like that.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=369)** Let's call this platformer to keep it short.
>
> **[6:12](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=372)** This declaration new Video Game with an override on the spot is actually a more complex sequence of declarations.
>
> **[6:20](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=380)** So it's as if I created a new class.
>
> **[6:22](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=382)** I'm going to call this AnonClass$ something with an identifier, and this extends VideoGame, and it provides that particular override as an implementation.
>
> **[6:36](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=396)** So this class AnonClass whatever.
>
> **[6:38](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=398)** And then I'm going to create a val psychonauts, which is of type VideoGame as a new AnonClass$32784.
>
> **[6:50](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=410)** So with this one-liner declaration, I'm essentially creating a class which doesn't bear any known name for us with these sort of implementations, and also instantiating that particular class on the spot, which is why we have this phenomenon on anonymous classes.
>
> **[7:06](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=426)** Again, many other programming languages that support OOP also support anonymous classes.
>
> **[7:11](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=431)** But I wanted to show you the syntax and the structure of creating anonymous classes in Scala.
>
> **[7:16](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=436)** So in this compact video, you learned some very important object-oriented principles in Scala.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/overriding-polymorphism-and-anonymous-classes?u=76281980&t=441)** Waiting for you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Java]] (1)
> **Env Vars:** rpg (7), oop (3)
> **Definitions:** is called (4), is a  (3), refers to (1)
> **Code Identifiers:** gametype (7)
> **Cross-References:** previous video (2), in the next (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### [Abstract classes and traits](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=1)** So now that we have a good idea of how inheritance works, I am going to follow up with some concepts about abstract classes and traits that will enhance the power of inheritance in [[Scala]].
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=12)** So going back to our project under the Part two OOP chapter, I'm going to create a new Scala application.
>
> **[0:18](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=18)** So new Scala file.
>
> **[0:19](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=19)** I am going to call this Abstract data types, make it an object with a main method, and I'm going to show you two fundamental things that will enhance the power of inheritance in Scala.
>
> **[0:34](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=34)** And that is abstract classes and traits.
>
> **[0:39](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=39)** Let's start with abstract classes.
>
> **[0:41](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=41)** So we can create classes that do not have all fields or methods already implemented, and that is for the derived classes to implement.
>
> **[0:50](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=50)** And those classes are called abstract.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=52)** So if I work on the same example as we did in the last video with video games, if I create a class video game with a field, let's say Val game type as a string, and I don't provide any implementation, notice that the compiler gives us an error saying that we either need to provide an implementation for this game type, that is give it a value, or make the class abstract.
>
> **[1:15](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=75)** So if you look at the compiler error, class video game needs to be abstract since Val game type is not defined.
>
> **[1:21](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=81)** So we're going to make the video game class abstract by prefixing that with the keyword abstract and the compiling error goes away.
>
> **[1:29](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=89)** Now the abstract class has a bunch of properties.
>
> **[1:32](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=92)** First of all, an abstract classes cannot be instantiated on their own.
>
> **[1:39](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=99)** So if I create a val, it's called this video game, of type video game as new video game.
>
> **[1:46](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=106)** This thing is a compiling error because video game is an abstract class and therefore it cannot be instantiated due to the fact that we don't have any value associated to this game type field.
>
> **[1:56](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=116)** So the compiling error is descriptive of that, the video game is abstract, it cannot be instantiated.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=122)** And rule number two is whatever class extends video game either needs to be abstract on its own or needs to provide implementation for game type.
>
> **[2:11](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=131)** So derived classes must be either abstract or B, non-abstract.
>
> **[2:21](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=141)** That is normal, but with an implementation for this field game type.
>
> **[2:28](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=148)** So if you want to write, for example, a anonymous class, the thing that we ended up the previous video with, we can create a new video game with some curly braces and we can override game type and give it a value.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=162)** Let's call this, My own genre, and this is now legal from the point of view of the compiler because this structure is an anonymous class.
>
> **[2:51](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=171)** So it's an anonymous class that extends video game with the override game type giving it a value.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=176)** And this is instantiated right here on the spot.
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=180)** So I'm going to get back to the old definition so that we can comment it out.
>
> **[3:05](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=185)** So I can comment out this line with command slash or control slash on [[Windows]] if you want to use that.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=192)** So I cannot instantiate video game on its own or derived classes must be either abstract or with an MPL for game type.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=202)** For example, if I define a class, shooter or FPS, first person shooter extends video game.
>
> **[3:31](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=211)** If I define a class like this, the compiler is again very descriptive of us.
>
> **[3:35](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=215)** Class shooter needs to be abstract, since the val game type is not defined.
>
> **[3:38](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=218)** Obviously I can override this.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=220)** So I can say, let's call this FPS, first person shooter.
>
> **[3:44](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=224)** In this case, the compiler is okay with my code.
>
> **[3:47](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=227)** So derived classes must be either abstract or with an MPL for not just game type, but for all fields and methods that have not been defined.
>
> **[3:54](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=234)** So abstract classes can have fields and methods without implementation.
>
> **[3:59](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=239)** For example, the deaf play method that we had in the previous video returning unit may also be written like this with no implementation.
>
> **[4:07](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=247)** And the compiler is now smart enough saying the deaf play is not defined and therefore I need to add an override for it.
>
> **[4:14](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=254)** So override play, and I'm going to say print line fire or something like this.
>
> **[4:21](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=261)** Now, besides these fields or methods that do not have an implementation, so fields or methods without implementation are called abstract.
>
> **[4:31](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=271)** Obviously the abstract keyword doesn't make sense for them because the compiler can tell whether a field or method is abstract due to the fact that it doesn't have an implementation.
>
> **[4:39](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=279)** Besides the abstract fields and methods you can provide, let's call this normal fields or methods.
>
> **[4:45](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=285)** For example, I can define, let's call this running platform as a string.
>
> **[4:51](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=291)** Let's say we only define video games for PlayStation Five.
>
> **[4:54](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=294)** By the time you watch this video, it might be PlayStation 17, but you get the idea.
>
> **[4:58](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=298)** And after I've defined this method, obviously because class shooter extends video game, I also have access to use this method, the deaf running platform.
>
> **[5:06](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=306)** Obviously if in Maine I can define a val, let's call this Counterstrike or CS go or CS two or whatever Counterstrike is these days, I can create a new shooter and obviously I can print line CS.runningplatform.
>
> **[5:24](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=324)** So notice that I have access to this method due to the fact that I'm instantiating a shooter and I have access to this method, whose value is PS5.
>
> **[5:31](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=331)** If I run this application, obviously we're going to print this exact value PS5.
>
> **[5:37](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=337)** Okay, so these are abstract classes and the rules about abstract classes.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=342)** The next step in defining abstract data types, that is types with not all fields or methods implemented.
>
> **[5:49](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=349)** They're called traits.
>
> **[5:50](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=350)** And these traits have the keyword trait instead of class.
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=355)** And you can define the type, let's call this third person, which is a genre of games.
>
> **[6:00](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=360)** And I'm going to have a method, let's say show perspective, that has a game of type video game and this returns unit.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=369)** So I'm just defining one method.
>
> **[6:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=372)** This method obviously doesn't have an implementation because I don't have any expression here after the equal sign, and I don't even have the equal sign.
>
> **[6:18](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=378)** Therefore this method is abstract.
>
> **[6:20](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=380)** And this third person is also an abstract data type, that's called a trait.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=386)** Now the difference between abstract classes and traits is that traits can be inherent in a different way than classes.
>
> **[6:32](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=392)** So I'm going to show that to you a little bit later.
>
> **[6:35](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=395)** So in just a few minutes.
>
> **[6:37](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=397)** Now, let's stick back to traits.
>
> **[6:38](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=398)** So you can think of traits just like abstract classes in the sense that you can define fields or methods that don't have an implementation.
>
> **[6:45](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=405)** Obviously, now the traits can extend other traits.
>
> **[6:51](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=411)** So for example, if I have a genre of video games called third person, I can extend this third person type with another trait.
>
> **[6:58](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=418)** Let's call this Open World, which extends third person.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=423)** So the syntax for extending traits, that is inheriting method definitions or field definitions.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=430)** It's the same as the syntax for classes.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=432)** So there's nothing really different in this case, the Open World trade, let's say we can provide an override here.
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=439)** So I can say print line, I see myself from the back and also see an Open World or something like this.
>
> **[7:31](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=451)** So we have the same rules for extending traits as we have for extending classes.
>
> **[7:36](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=456)** So the question of how are traits different from classes will be answered right now.
>
> **[7:41](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=461)** So the practical difference between abstract classes versus traits is that we can only inherit from one class.
>
> **[7:51](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=471)** So a class can extend one class and with one in all caps, but multiple traits.
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=481)** This is why we have this separate concept of traits which can be mixed in to inheritance.
>
> **[8:06](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=486)** For example, let's say I'm defining a certain genre of games that are maybe RPGs or something like this that are third person and Open World.
>
> **[8:15](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=495)** So they have behaviors from both third person and Open World and also extend video game, which is abstract class.
>
> **[8:23](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=503)** Let's call this class Mass Effect.
>
> **[8:25](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=505)** Again, one of my favorite games and favorite series of all time, I'm going to have extends video game.
>
> **[8:33](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=513)** So right now we have a class that extends an abstract class.
>
> **[8:36](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=516)** Obviously we have the same compiling error as before due to the fact that video games abstract, but I can also inherit from extra traits as well.
>
> **[8:45](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=525)** And this is a new thing.
>
> **[8:47](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=527)** So in Scala we have one class inheritance.
>
> **[8:50](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=530)** So single class inheritance, but multiple traits inheritance.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=534)** So we say with, I notice that we introduce a new keyword here, with, Open World with, and maybe I want to add another trait.
>
> **[9:04](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=544)** Let's say trait, Storyline, with some methods, let's say define characters.
>
> **[9:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=552)** Let's called this main character and this is going to be a string.
>
> **[9:17](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=557)** All right, so I can define my class Mass Effect that extends video game, with Open World, with storyline.
>
> **[9:25](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=565)** So notice that I can inherit from multiple traits and from one class.
>
> **[9:30](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=570)** Now because we inherit from video game, Open World and storyline, this class needs to implement all the abstract fields and methods from all of these types that are left unimplemented.
>
> **[9:41](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=581)** So for example, in this case, in video game, I have two abstract fields and methods, Val game type and play.
>
> **[9:48](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=588)** So I have game type, play.
>
> **[9:53](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=593)** From Open World we have a show perspective thing, which does have have an implementation.
>
> **[9:58](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=598)** So this one is not abstract, but here from storyline we have the main character.
>
> **[10:02](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=602)** So I have to override this one as well.
>
> **[10:04](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=604)** So main character and the compiler is very descriptive in this case, it has three unimplemented members.
>
> **[10:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=612)** We have main character, game type, and play.
>
> **[10:16](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=616)** So notice that the compiling error is descriptive in this case.
>
> **[10:19](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=619)** So let's provide implementation for all of them.
>
> **[10:22](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=622)** Game type, let's say Open World story or something like this.
>
> **[10:27](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=627)** Let's say overrides play.
>
> **[10:30](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=630)** And I'm going to print line, let's say, Saving the galaxy, which is what you're doing there in Mass Effect and override show perspective, actually Show perspective isn't abstract.
>
> **[10:43](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=643)** It's provided by the Open World trade.
>
> **[10:45](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=645)** The one that I need to override is main character.
>
> **[10:48](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=648)** And the main character is called Commander Shepherd, right?
>
> **[10:54](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=654)** So after I've implemented game type play and main character, Mass Effect is now a properly defined class.
>
> **[11:01](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=661)** So let's recap what we learned in this video.
>
> **[11:03](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=663)** So we learned about abstract classes, which may have unimplemented fields or methods, and we call them abstract and we need to prefix that with abstract.
>
> **[11:12](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=672)** The abstract classes cannot be instantiated on their own unless you define a subclass that extends your abstract class and overrides all the necessary unimplemented fields or methods.
>
> **[11:23](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=683)** Or if you create an anonymous class, which we showed in the previous video.
>
> **[11:28](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=688)** And we also learned about traits, which are the ultimate abstract types, and they usually only contain fields or methods that are unimplemented.
>
> **[11:35](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=695)** So just abstract fields and methods.
>
> **[11:37](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=697)** Obviously the Scala syntax allows you to do that.
>
> **[11:40](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=700)** But in general, the way that you will see this in real life code traits only define method definitions.
>
> **[11:47](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=707)** The difference between abstract classes and traits is that in the story of inheritance, you can only extend one class, which may be abstract, but you can inherit from multiple traits with the width keywords.
>
> **[11:58](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=718)** So you can add fields and methods from multiple traits in one definition, for example, in this class, Mass Effect.
>
> **[12:06](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=726)** So there you have it folks, we've learned about abstract classes and traits.
>
> **[12:09](https://www.linkedin.com/learning/scala-essential-training-2023/abstract-classes-and-traits?u=76281980&t=729)** Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (6), [[Windows]] (1)
> **Analogies:** for example (8), just like (1)
> **Env Vars:** mpl (2), fps (2), ps5 (2), oop (1)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **Cross-References:** previous video (3), in the last (1), in the next (1)
> **CLI Commands:** make (4)
> **Speakers:** - [instructor] (1)

#### [Objects](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=0)** - [Instructor] Alright, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=1)** This video is about objects which have a special meaning in [[Scala]], not that of object oriented programming in general, where you usually refer to objects as instances of classes.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=11)** So I'm going to create a new Scala application.
>
> **[0:13](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=13)** I'm going to call this Objects, I'm going to make it an object.
>
> **[0:16](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=16)** And in this case, in this video, we're going to demystify the object keyword and I'm going to type in the main method, so that we might test some stuff.
>
> **[0:27](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=27)** Okay, now, for those of you coming from other object-oriented languages, you may have heard of object-oriented [[Design Patterns]] and you may have heard about the singleton pattern.
>
> **[0:37](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=37)** And the singleton pattern essentially ensures that you define a type with only one possible instance of that type.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=45)** In Scala, the singleton pattern is defined using the following declaration object, MySingleton, if I define an object, MySingleton, with a keyword object, that means that I've defined a type, so I've defined the MySingleton type and the only possible instance of that type.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=69)** So if I define a val, let's call this theSingleton as MySingleton, and let's call this anotherSingleton as MySingleton.
>
> **[1:20](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=80)** These two instances are exactly the same.
>
> **[1:23](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=83)** So if you want to test whether they're equal, the singleton is equal to another singleton.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=88)** This expression will give you back true.
>
> **[1:30](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=90)** Therefore, MySingleton is the same instance.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=93)** So notice that we have true here in the console.
>
> **[1:37](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=97)** Now, not only that, objects also have or can have fields and methods.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=104)** So you can define fields and methods just as if MySingleton was a class plus the only possible instance of that class.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=115)** So I can define aField as let's say 45, and I can define a method, let's call this aMethod with (x: Int), and I'm going to simply return, let's say x + 1.
>
> **[2:08](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=128)** The implementation is not different.
>
> **[2:09](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=129)** This is just to show you that you can define fields and methods inside this object.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=133)** So this is essentially a class declaration plus the only possible instance of that class.
>
> **[2:18](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=138)** And that declaration is just described by the keyword object.
>
> **[2:22](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=142)** So obviously you can refer to the fields and methods of MySingleton.
>
> **[2:26](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=146)** So, (MySingleton.aField) and println(MySingleton.aMethod(4)) and obviously this will give you back five.
>
> **[2:40](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=160)** So, (MySingleton.aField) just refers to the field of my singleton as you would refer to aField of an instance of a class and aMethod on an instance of a class.
>
> **[2:51](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=171)** Obviously MySingleton is the only instance of its class.
>
> **[2:55](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=175)** So I hope I'm not repeating myself too much.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=177)** You got the idea, hopefully.
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=180)** Okay, so we have the object, MySingleton, with fields and methods.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=184)** What else is there to show you for objects?
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=187)** One is the combination of class + object of the same name in the same file.
>
> **[3:17](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=197)** These are called companions.
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=198)** And this is a new concept.
>
> **[3:20](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=200)** So I'm going to define a class called person with a name as a string.
>
> **[3:25](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=205)** And I'm going to define a method, let's called this, sayHi.
>
> **[3:29](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=209)** And let's say this returns a string and I'm going to return an S interpolated string with "Hi, my name is name," let's say, okay?
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=219)** So this is a very simple class, the likes of which we've defined so far in this chapter.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=225)** Okay, now, it is possible in Scala to define an object with the same name next to the corresponding class.
>
> **[3:53](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=233)** So I'm going to define an object called Person.
>
> **[3:56](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=236)** This is a regular pattern in programming in Scala.
>
> **[3:59](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=239)** So notice that we have these two little [[Tokens]] that IntelliJ marks for us, these are half circles, meaning that they complete each other, they're companions.
>
> **[4:08](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=248)** So when you define an object next to a class in the same file with the same name, so object with the same name is called a companion object.
>
> **[4:20](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=260)** Now why do we define companion objects for classes?
>
> **[4:23](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=263)** We usually define an object of the same name next to a class with the same name to define static fields and methods.
>
> **[4:33](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=273)** That is fields and methods that don't really depend on an instance of a class, but rather depend on the person type itself.
>
> **[4:41](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=281)** So for example, what's common for all persons?
>
> **[4:43](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=283)** Well, we say that the number of eyes is equal to two.
>
> **[4:47](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=287)** This is the prototypical person has two eyes.
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=290)** And obviously if I can define a method, canFly, that returns a Boolean, I'm going to return false because no human can fly just on their own.
>
> **[5:01](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=301)** So in general, in companion objects, we store static fields and methods, that is fields and methods that don't depend on a particular instance of the class.
>
> **[5:15](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=315)** That is because all persons have in general two eyes and all persons in general can't fly.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=322)** Okay, so this is the concept of a companion object.
>
> **[5:27](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=327)** Now objects themselves because there are type definitions, so it's a class plus instance definition.
>
> **[5:34](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=334)** Objects can extend classes or traits.
>
> **[5:39](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=339)** Now that you know what traits are, you can define objects that extend those traits.
>
> **[5:43](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=343)** So for example, I can define an object called BigFoot.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=347)** And this extends a Person, with a capital P, Person with a name "Big Foot."
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=355)** So notice that this is a type BigFoot that extends the class, Person with the argument, "Big Foot" you probably remember from one of the earlier videos, when you extend a class, you need to also provide the arguments for one of the constructor of the class.
>
> **[6:11](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=371)** We only have one constructor for the Person class, and therefore I have to pass an argument for it.
>
> **[6:17](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=377)** So let's recap what we've learned in the past couple of minutes.
>
> **[6:20](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=380)** We defined an object, which is a class definition, plus the only possible value of that class.
>
> **[6:27](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=387)** You can define fields and methods inside the body of an object and they belong to the object itself.
>
> **[6:33](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=393)** You can define an object next to a class with the same name in the same file.
>
> **[6:37](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=397)** And this is called a companion object.
>
> **[6:39](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=399)** And the way that we use companion objects is to store fields and methods that don't really depend on an instance of that class, and therefore we call them static.
>
> **[6:48](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=408)** And in other programming languages like [[Java]], we have the static keywords that designates the exact same thing.
>
> **[6:54](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=414)** Now, one last thing to demystify.
>
> **[6:56](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=416)** Why do we use objects with main methods in order to run an application?
>
> **[7:00](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=420)** So why do we have to define an object with a main method?
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=423)** Otherwise, the application won't run.
>
> **[7:06](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=426)** Well, in order to run a Scala application, we need to compile Scala to byte code.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=430)** So Scala compiles to JVM bytecode, as you probably know already.
>
> **[7:16](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=436)** And in order to compile to the JVM bytecode that JVM bytecode needs to map to what the JVM understands.
>
> **[7:22](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=442)** And what the JVM understands is a class with a static main method that returns unit, that is a void function, static void main, that takes some arguments as an array of strings.
>
> **[7:40](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=460)** In Java the definition for such a main method would be a class, let's called this, MyApplication.
>
> **[7:47](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=467)** And in this class, MyApplication, the function looks exactly like this, public static void main with args as a string array.
>
> **[7:59](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=479)** So the string array in Java looks like this and it returns void.
>
> **[8:05](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=485)** Void in Scala means unit, so we have that.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=488)** The function is called main, it takes an array of strings as an argument, which we already have.
>
> **[8:14](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=494)** The method is public, that is it's accessible from any other piece of code in the application and by default, all methods in Scala are public.
>
> **[8:22](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=502)** Therefore, the public keyword is inferred in Scala.
>
> **[8:25](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=505)** And the method main is also static as written by the JVM, due to the fact that I'm defining this in an object.
>
> **[8:33](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=513)** So as I mentioned earlier, methods defined and fields defined in objects, they're static, that they don't depend on an instance of the type Person, but they depend on the type Person itself.
>
> **[8:45](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=525)** So this is essentially what we're doing here by defining a main inside an object.
>
> **[8:51](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=531)** So the equivalent in Scala after what you've learned in this video would be an object, MyApplication with just a method called main with args as an array of string and this returns unit.
>
> **[9:11](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=551)** So this would be the Scala equivalent.
>
> **[9:15](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=555)** So there you have it, folks, a quick video about objects, companions, and the main method.
>
> **[9:20](https://www.linkedin.com/learning/scala-essential-training-2023/objects?u=76281980&t=560)** Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (13), [[Java]] (3), [[Design Patterns]] (1), [[Tokens]] (1)
> **Definitions:** is a  (7), is called (3), means that (1), refers to (1)
> **Code Identifiers:** afield (4), amethod (3), thesingleton (1), anothersingleton (1), sayhi (1)
> **Env Vars:** jvm (6)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)

#### [Case classes](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=0)** - [Instructor] Okay, welcome back.
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=2)** This video is about case classes, which are particular type of classes used for [[Data Structures]].
>
> **[0:07](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=7)** So let me create another lesson for another application for this lesson.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=12)** So I'm going to call this case classes and I'm going to mark an object with a main method as you've probably gotten used to buying now.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=20)** So case classes are lightweight data structures.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=26)** They're usually used to store a bunch of data like fields and I'm going to define a case class.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=32)** Notice that I'm prefixing the class definition with a case keyword.
>
> **[0:35](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=35)** I'm going to call this pet with a name string and age int, let's say.
>
> **[0:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=41)** So case class is just like any other class in that you have name and age as constructor arguments.
>
> **[0:47](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=47)** You can define fields and methods like you would on any other class, but case class prefixed with the case keyword have a bunch of extra properties that are granted to you by the compiler at the moment you define a case class, I'm going to outline these properties one by one.
>
> **[1:05](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=65)** The first is that the class constructor arguments are automatically promoted to fields.
>
> **[1:15](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=75)** So it's as if you said val name equals string and val age [Interviewer].
>
> **[1:20](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=80)** Notice that the val keyword is grayed out.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=82)** In that you have a redundant for parameter of case class primary constructor.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=87)** So even with that, the val keyword, the compiler adds the val keyword for me.
>
> **[1:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=92)** So if I define a called Dino as a pet with name Dino
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=101)** and age two, so one of my in-laws dogs, crazy dog a beagle.
>
> **[1:48](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=108)** So this pet is called Dino Age two.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=111)** And notice that if I have Dino age as Dino.age so I can access the age field right on the value Dino, even though the age construct argument was not prefixed with a value keyword compiler does that for me and I can access it.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=130)** Property number two is that case classes can be built without the new keyword.
>
> **[2:19](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=139)** Now in [[Scala]] three, the new keyword has been made redundant for all classes, but case classes in particular can be built without the new keyword because case classes have companion objects.
>
> **[2:30](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=150)** I'm going to talk about that in a moment.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=152)** So I can say Dino version two as pet with Dino and two.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=161)** So notice that the new keyword has been emitted and if you paid close attention, the new keyword is also grayed out because it's redundant.
>
> **[2:48](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=168)** So it says remove new modifier.
>
> **[2:51](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=171)** So new is not required.
>
> **[2:55](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=175)** That makes creating case classes much easier because you don't have to keep track of the new keyword so that you have less code to write.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=183)** The third property is that case classes already have some representations already set up by the compiler, and the representations are code two string equals and hash code.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=195)** These are some fundamental methods that any instance of any class in Scala will have because they belong to the any type, the any type is the parent of all types in Scala and therefore all classes and traits that you define naturally will extend the any type by default and therefore two string equals and hash code have some dummy implementations.
>
> **[3:36](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=216)** Let me give a comparison.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=217)** So let me create a class with the same structure as pets.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=220)** Let's call this pet simple with a name string and age int.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=229)** So the same structure and I'm going to create a val.
>
> **[3:52](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=232)** Let's call this Dino Simple as a new pet, simple with the same data, Dino and two, if I want to represent this Dino Simple to a string, I can print it out.
>
> **[4:07](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=247)** So I can say print line Dino Simple.
>
> **[4:10](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=250)** And when you print line an object or an instance of a class, this is already converted to string by adding the two string method to it.
>
> **[4:18](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=258)** So Scala does this automatically for any object subject to the print line function.
>
> **[4:23](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=263)** So Dino Simple dot two string and I'm also going to print line Dino two string and the Dino is belonging to the pets case class.
>
> **[4:35](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=275)** So we're comparing a normal class with a case class in their two stringing representation.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=280)** So let me run this application and you'll see what kind of a difference two string makes.
>
> **[4:44](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=284)** The first is Dino Simple two stringing, which is con.rockthejvm.part2oop.CaseClasses$petSimple@ and then you have a unique identifier for this instance.
>
> **[4:54](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=294)** So this is what the two stringing representation for a normal class looks like.
>
> **[4:58](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=298)** Whereas look at the two stringing representation for the case class.
>
> **[5:02](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=302)** It's very human readable, it's the class name with all the fields in parentheses.
>
> **[5:07](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=307)** So case classes are very useful in that regard.
>
> **[5:10](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=310)** Equals and hash code are also very important because they allowed storage of instances of class pet in arrays or lists or maps as we'll discover later in the course and they rely on equality and hash code.
>
> **[5:25](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=325)** For example, if I've defined Dino and Dino version two, you probably remember from one of the earlier lessons in this chapter that two instances of the same class with the same data are not necessarily equal, but with case classes they are because the equals method has already been written by the compiler for you.
>
> **[5:43](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=343)** So that I can compare data, not just references.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=347)** So I'm going to print line Dino is equal to Dino version two and if I did not define this as a case class, this would've been false.
>
> **[5:57](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=357)** But with case classes it's now true.
>
> **[6:02](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=362)** Alright, so you notice that the true is being printed in the console just to compare with the normal class, let's call this Dino simple version two as the same kind of data.
>
> **[6:13](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=373)** So Dino Simple and Dino Simple version two, I'm going to print it in the console.
>
> **[6:18](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=378)** So Dino Simple is equal to Dino Simple version two, and these are two instances of the same type pet simple with the same data.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=386)** So they should be quote unquote equal, but they're not because they do not point to the exact same object.
>
> **[6:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=392)** Now for case classes, that is not the case.
>
> **[6:34](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=394)** The behavior of equality compares the contents not the exact reference of the object.
>
> **[6:40](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=400)** So if I run this application, Dino Simple equal Dino Simple version two will print false, whereas Dino equals Dino version two.
>
> **[6:48](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=408)** Because it's a case class, it returns true because the quality compares data, not just references.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=415)** So as you can tell, case classes are super handy.
>
> **[6:58](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=418)** There's another property of case classes is that you have some utility methods, for example the copy method.
>
> **[7:07](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=427)** So for example, I can save called this Dino Younger as Dino dot.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=432)** And you have a method called copy.
>
> **[7:14](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=434)** And notice that you have both arguments here, name and age, and I can select which kind of field I want to overwrite.
>
> **[7:23](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=443)** For example, I can say age equal one, and this will return a new instance of pet with the same data except the argument I pass.
>
> **[7:37](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=457)** So for example, in this case, Dino Younger will have the same data as Dino that is the name without the age and the age has been overwritten.
>
> **[7:45](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=465)** So I'm going to have print line Dino Younger, and in this case we're going to see a pet with the same name, which is Dino, but with age equal one.
>
> **[7:56](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=476)** To mention that this is a new instance of pet.
>
> **[7:59](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=479)** So the old instance is still unmodified.
>
> **[8:03](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=483)** Another property, property number five, they have companion objects already created.
>
> **[8:12](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=492)** So I can say, let's call this Dino version three as pet dot and notice that we have the companion object for pet because we have a bunch of methods on pet.
>
> **[8:21](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=501)** And one fundamental method is called apply.
>
> **[8:24](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=504)** The apply method will return a new instance of pet depending on the arguments that I pass inside.
>
> **[8:29](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=509)** For example, I can say Dino and age two or age three or something like this.
>
> **[8:35](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=515)** Now because the apply method is special, as we mentioned in one of the earlier videos in method notation, the apply method allows us to invoke the thing on the arguments itself.
>
> **[8:45](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=525)** So I'm going to simply cut apply out and I arrive at the construct that we defined earlier.
>
> **[8:52](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=532)** So the reason why the new keyword is not required is because they have the companion object already created with an apply method with the same signature as the constructor.
>
> **[9:07](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=547)** So pet with the arguments is actually the same as pet dot apply.
>
> **[9:13](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=553)** So this is the reason for you to click with the method notation lesson from earlier in the chapter.
>
> **[9:19](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=559)** Another property, property number six, they are serializable and this is not a property that I can test in code as a standalone application.
>
> **[9:30](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=570)** Serialization means that an instance of a class can be sent across the wire or stored on a file so that it can be reused later.
>
> **[9:37](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=577)** Serialization means that you have a serialization protocol so that you can turn an instance of a class from the JVM byte code or from representation in the heap.
>
> **[9:46](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=586)** That is where you store all the instances of your classes into a common format, saw that another JVM can read it.
>
> **[9:52](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=592)** And this is super important for parallel and distributed systems.
>
> **[9:59](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=599)** For example, the ACA framework or PECO, if you using the open source alternative of ACA, uses serialization to be able to send data structures as messages in between different systems.
>
> **[10:11](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=611)** And this is very, very powerful software.
>
> **[10:15](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=615)** Property number seven, they are eligible for pattern matching.
>
> **[10:22](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=622)** You probably remember pattern matching in one of the first videos of the course.
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=626)** This is kind like a switch on steroids, but we'll see in this video that pattern matching is far more powerful than that.
>
> **[10:31](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=631)** So case classes make code extremely handy when you're dealing with lightweight data structures.
>
> **[10:37](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=637)** You can also define case objects.
>
> **[10:40](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=640)** So you can define a case object, let's call this United Kingdom and can have a def name as a string.
>
> **[10:50](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=650)** Or you can define fields and methods in case objects as you would on regular objects like the United Kingdom of Great Britain and Northern Ireland.
>
> **[11:02](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=662)** I think that's the official name of that.
>
> **[11:04](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=664)** So you can define case objects with the same properties as case classes only that you cannot really build multiple instances of this type because due to the fact that it's an object, it's the only instance of its type.
>
> **[11:17](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=677)** The reason why we create case objects is to define hierarchies of messages or storable data structures and some are their own types with the only possible instance of that type.
>
> **[11:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=692)** So if you define a trade called message that is something that you would use in ACA or PECO, you would define a case class.
>
> **[11:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=701)** Let's call this initial interaction with message as a string and this extends message and maybe some other case classes.
>
> **[11:52](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=712)** So other case classes for your actual application.
>
> **[11:56](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=716)** And you finally define a case object or multiple case objects depending on what your use case is.
>
> **[12:02](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=722)** Define a case object, let's call this end conversation and this extends message.
>
> **[12:09](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=729)** So it's possible to define something like this where end conversation is a little token that marks the end of a message exchange in between two systems.
>
> **[12:16](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=736)** And this is something that you would use in ACA or PECO if you're exchanging messages in between actors in your system.
>
> **[12:23](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=743)** So this is the reason why you would use a case object.
>
> **[12:25](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=745)** Otherwise, case objects by themselves are of little use.
>
> **[12:28](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=748)** There are only for marking different kinds of, let's say, data structures that are useful for your application.
>
> **[12:34](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=754)** So let's revisit the properties of case classes.
>
> **[12:37](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=757)** First of all, you have a class constructor arguments also promoted to fields which make them very handy that you can actually access that are fields without adding Val everywhere.
>
> **[12:48](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=768)** You can build case classes without the new keyword, which make them extra handy.
>
> **[12:52](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=772)** You have two string equals and hash code as demonstrated by the application run.
>
> **[12:57](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=777)** And you have some utility methods like copy so that you can create new instances of case classes easily based off some existing data structures.
>
> **[13:05](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=785)** You have companion objects already created, which explains how it is that you don't really require the new keyword.
>
> **[13:12](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=792)** So you have actually companion object dot apply with the same arguments and they're serializable, which is something that is only going to be visible once you deal with this distributed systems.
>
> **[13:24](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=804)** And they are eligible for pattern matching, which is something that we will explore later in this course when we look at the pattern matching feature of Scala, you can also define case objects, which are the only instances of their own types.
>
> **[13:36](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=816)** And the reason why you define case objects is to define message or data structure hierarchies.
>
> **[13:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=821)** And this is where, and I've left this for last pattern matching becomes extremely, extremely useful and powerful.
>
> **[13:49](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=829)** So let's assume that somebody gave us a message.
>
> **[13:53](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=833)** So message as a message and assume that we have some method or some external functionality that gives us an instance of message.
>
> **[14:01](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=841)** So let's say a def get message and this returns a message and assume that the implementation of this get message method is really not that important.
>
> **[14:15](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=855)** But let's assume that the instance is initial interaction with hello.
>
> **[14:22](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=862)** So this is some external method and val message is get message.
>
> **[14:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=872)** So you're invoking somebody else's code that will give you a message who's actual type you don't really know.
>
> **[14:38](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=878)** With pattern matching, you can actually deconstruct this trait hierarchy and figure out what kind of message you have and also what kind of data this message may contain.
>
> **[14:47](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=887)** So for example, let's call this contents as message match.
>
> **[14:53](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=893)** And this pattern match that you've learned in the earlier videos in the course will only allow you to test with constants, but with case classes you can define cases with entire structures.
>
> **[15:05](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=905)** So you can say initial interaction with some content and you can return, I have received plus and some content.
>
> **[15:17](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=917)** So you can deconstruct the structure of this message and check whether it conforms to the structure described by initial interaction.
>
> **[15:26](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=926)** And if it does, then let some content be the field of this particular case class and you can use it later in the expression that you're returning.
>
> **[15:34](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=934)** In case you get end conversation, you're going to get end of chat.
>
> **[15:41](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=941)** So not only will pattern match allow you to test consonants, but it will allow you to test structures instead.
>
> **[15:48](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=948)** And you can deconstruct those structures and if your particular value conforms that structure, then you can extract its fields or its contents, do something interesting with them.
>
> **[15:58](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=958)** So for example, if I print line my contents, if I run this application, we will see that we're going to have I received and then hello, or I can use some column here to make it a little bit more legible.
>
> **[16:11](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=971)** So pattern matching is extremely, extremely useful for case classes because it allows you to not only check whether your instance conforms to a certain structure, but it will also allow you to deconstruct it into its constituent parts, which is super, super handy.
>
> **[16:25](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=985)** So I hope this was useful.
>
> **[16:26](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=986)** Case classes are extremely powerful and foundational for pretty much every Scala code that you'll end up writing.
>
> **[16:32](https://www.linkedin.com/learning/scala-essential-training-2023/case-classes?u=76281980&t=992)** So waiting for you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (7), [[Scala]] (6)
> **Analogies:** for example (9), just like (1)
> **Env Vars:** aca (4), peco (3), jvm (2)
> **Definitions:** is called (2), is a  (2), means that (2)
> **Cross-References:** later in (2), we mentioned (1), earlier in (1), in the next (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** petsimple (1)
> **Prerequisites:** set up (1)

#### [Exceptions](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=1)** This video is about exceptions and the potential interruptions that you can encounter with your [[Scala]] applications.
>
> **[0:07](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=7)** You may have encountered the concept of exceptions in other programming languages.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=11)** Maybe they're called in a different way.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=12)** Maybe they're called errors in [[Python (Programming Language)|Python]] or exceptions on JVM languages like [[Java]] or in C++.
>
> **[0:18](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=18)** In Scala, we have the same concept called exceptions, and because Scala runs on the JVM, the exception concept is very similar, if not identical, to that in Java.
>
> **[0:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=27)** So let me demonstrate the exception concept by creating a new Scala application.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=31)** Let's call this Exceptions.
>
> **[0:34](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=34)** And we're going to make an object with a main method, as you've probably gotten accustomed to by now.
>
> **[0:39](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=39)** Now exceptions are instances of classes that describe a crash in your application.
>
> **[0:44](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=44)** So I'm going to show you how you can trigger a programmatic crash in your application and how you can recover from several crashes in your application.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=53)** So let me define a simple method.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=55)** I'm going to call this sumN.
>
> **[0:56](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=56)** You may have seen this before in previous videos.
>
> **[1:00](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=60)** I'm going to create a function that sums all the numbers up to a certain N as an integer.
>
> **[1:04](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=64)** You've done this before in the beginner package, in the basics chapter.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=69)** So the original sumN would be something along the lines of if N is less than or equal to zero, I'm going to return 0 else I'm going to return n plus sumN with n minus one.
>
> **[1:20](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=80)** So you know this from recursion in, I think it's from the recursion lesson here.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=87)** We actually started with this very same function.
>
> **[1:30](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=90)** Okay, now I want to enhance this sumN with some more informative messages if the user, or whoever ends up calling my sumN function, ends up using the sumN function with invalid arguments.
>
> **[1:43](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=103)** So I would like to enhance this with some extra logic.
>
> **[1:46](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=106)** For example, I should not support negative numbers.
>
> **[1:49](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=109)** I shouldn't really return 0 if N is less than strictly than 0.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=114)** So if N is less than 0, I'm going to signal a crash.
>
> **[1:59](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=119)** And the concept is throwing an exception, and the instruction in Scala is throw.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=125)** And we need to create an instance of an exception class, and a proper exception class is illegal argument exception.
>
> **[2:12](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=132)** So I'm going to say throw new IllegalArgumentException.
>
> **[2:18](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=138)** An IllegalArgumentException can take a message like Negative numbers unsupported.
>
> **[2:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=147)** And, otherwise, if n is strictly equal to 0, I'm going to return 0.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=152)** Otherwise, I'm going to do the recursion.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=155)** Now in this case, my sumN function is a little bit more aggressive.
>
> **[2:38](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=158)** If somebody ends up calling sumN with a negative number, this is going to crash their application.
>
> **[2:43](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=163)** So if in main I'm println-ing sumN with let's say -10, this is going to crash my application, and you're going to see a big red stack trace in my application.
>
> **[2:54](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=174)** So we have negative numbers unsupported, and we have a stack trace that will signal where that exception was thrown.
>
> **[3:01](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=181)** So notice that we have exception Scala line 6, and the compiler will help us identify the line that crashed.
>
> **[3:08](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=188)** So this is a way that you can crash somebody's application where your function is super, super important, and it must be called with the right arguments.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=195)** And this is a natural way of signaling exceptions in Scala.
>
> **[3:20](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=200)** Now how can you guard yourself against exceptions so that you make sure that if you're using somebody else's function that can throw an exception in your face, how can you recover from that exception?
>
> **[3:30](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=210)** The expression in Scala to do that is called try-catch.
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=214)** You may have encountered try-catches from other languages.
>
> **[3:38](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=218)** So I'm going to create a value.
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=219)** Let's call this attempt as a try.
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=222)** And I'm going to println sumN with -10.
>
> **[3:46](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=226)** And notice the keyword try and the block of code that can crash.
>
> **[3:55](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=235)** And after the try we have a little clause called catch with another piece of code braces.
>
> **[4:03](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=243)** And I'm going to add a bunch of cases for the exceptions that I might encounter because obviously a sumN written like this is a pretty simple function, but if you're dealing with real-life code, you may be dealing with very complex code that can throw a variety of exceptions and therefore this try-catch structure is able, or should be able, to deal with a variety of exceptions.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=267)** So I'm going to show you how you can deal with multiple exception types.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=270)** For example, case e of type IllegalArgumentException.
>
> **[4:35](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=275)** So notice the structure here.
>
> **[4:36](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=276)** So catch with curly braces, case e, colon, IllegalArgumentException.
>
> **[4:42](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=282)** And in this case, if I am catching or if I'm encountering IllegalArgumentException, I am going to return an alternative value for this expression.
>
> **[4:52](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=292)** So this expression obviously should return a value like anything else in Scala.
>
> **[4:56](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=296)** So in case this expression ends up throwing an inception while it's being evaluated, I need to provide an alternative value for it.
>
> **[5:03](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=303)** So for example, I'm going to provide the value -1, and -1 should signal to the user that the application didn't crash, but this is an invalid value, and they should deal with it later.
>
> **[5:17](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=317)** And in case we get other types of exceptions, like runtime exceptions, this is very popular, I'm going to return, let's say Int.MaxValue.
>
> **[5:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=327)** And we can enhance sumN to throw a variety of exceptions.
>
> **[5:31](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=331)** For example, I can anticipate the fact that sumN will overflow the integer representation, which is about two billion.
>
> **[5:41](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=341)** This is the maximum number that you can represent on integer.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=344)** So if n is bigger than or equal to let's say 50,000, or something like this, we can throw a new, let's say RuntimeException, RuntimeException, with a different message like Too big of a number overflowing int, or something like this.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=363)** And I need to write some proper Scala by putting the if statement here.
>
> **[6:06](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=366)** So we can catch either IllegalArgumentExceptions or RuntimeExceptions, or any other kinds of exceptions, here in this catch clause.
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=374)** Now if you've written any sort of programming language that supports exceptions, you'll probably encounter a structure that looks similar to this.
>
> **[6:22](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=382)** The syntax in Java, for example, is very similar.
>
> **[6:25](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=385)** The syntax in TypeScript is, for example, very similar.
>
> **[6:28](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=388)** Python does it very similarly with try with a colon, catch with a colon, and so on and so forth.
>
> **[6:32](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=392)** The alternative syntax in Scala with indentation is also available to us, which I personally dislike, so I prefer using curly braces instead.
>
> **[6:41](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=401)** It's far cleaner, in my opinion.
>
> **[6:42](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=402)** So I'm going to show you the alternative syntax, attempt_v2 as try, and then indented, you can println sumN with -10 and catch.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=415)** You can add the cases here, again, indented properly.
>
> **[6:58](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=418)** So after the try you need to be indented one step further with a catch at the same level as the try and the cases indented after the catch.
>
> **[7:07](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=427)** Now this code looks a little prettier but becomes messier in real life if you're dealing with complex logic.
>
> **[7:14](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=434)** So in main, I can say println attempt_v2, or the first one, you can take your pick, and we will notice an actual value because we caught an exception, and that value was returned.
>
> **[7:30](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=450)** So the try-catch in its entirety is an expression that evaluates to either the expression itself inside the try if it didn't fail or if it didn't crash or the value of one of the catch branches if you caught an exception of this exact type.
>
> **[7:47](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=467)** Obviously, if we used a large argument here for sumN and we didn't catch the RuntimeException, any uncaught exception will end up interrupting and crashing your application.
>
> **[7:58](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=478)** So if I println the attempt and I didn't catch the RuntimeException, which is going to get thrown here, this is going to be surfaced out in my application.
>
> **[8:07](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=487)** So notice that we have too big of a number overflowing int.
>
> **[8:10](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=490)** This is the RuntimeException that we're throwing here, which is the cause for another kind of exception called an ExceptionInInitializerError because this attempt is a field of the object, and as I'm trying to run the application, the attempt itself, which is the field of the object itself, failed to initialize, which is why we're getting this ExceptionInInitializerError.
>
> **[8:33](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=513)** So we see also that exceptions can have causes.
>
> **[8:36](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=516)** So if a piece of code throws an exception, you can also throw another exception based on that so that the user can track where their application failed, which is invaluable when you're dealing with real-life code.
>
> **[8:49](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=529)** Okay, now another thing that I wanted to show you is the hierarchy of exceptions.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=534)** So let me show you the hierarchy here.
>
> **[8:58](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=538)** The parent class of all exception types is called Throw, and Throwable is a trait, or in Java, the root of the JVM is an interface.
>
> **[9:09](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=549)** So from Throwable, we have two big error hierarchies.
>
> **[9:13](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=553)** One is called Error and one is called Exception.
>
> **[9:17](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=557)** Exception is the user-facing crashes.
>
> **[9:21](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=561)** So every exception that we can define should belong to the exception hierarchy.
>
> **[9:25](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=565)** So we can extend Exception or a subtype of it, which is called RuntimeException.
>
> **[9:30](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=570)** So we can decide to throw RuntimeExceptions as they are, or we can define new exceptions that derive from RuntimeException.
>
> **[9:41](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=581)** I'm going to show you an example of that.
>
> **[9:43](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=583)** Now back to Error, these are crashes that you can't really control.
>
> **[9:46](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=586)** So these are JV-related crashes, for example, out of memory, for example, stack overflow, which I think you've seen before when dealing with recursion.
>
> **[10:00](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=600)** So stack overflow happens when you call too many functions and the stack memory isn't sufficient to hold the entire call stack.
>
> **[10:07](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=607)** So these are some examples, and we're going to show you how you can define your own exception.
>
> **[10:10](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=610)** For example, I'm going to define a class.
>
> **[10:13](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=613)** Let's call this MyException.
>
> **[10:16](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=616)** And let's assume that this MyException extends RuntimeException with Too big of a number, which is exactly this sort of message.
>
> **[10:24](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=624)** Maybe you reusing this all the time in your numerical programming library.
>
> **[10:29](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=629)** So you want to reuse this by defining your own type called MyException.
>
> **[10:34](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=634)** Well, instead of that you can say throw new MyException, and because MyException extends RuntimeException, we can catch it.
>
> **[10:42](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=642)** So you can catch it explicitly here.
>
> **[10:44](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=644)** So case my exception, which is called MyException, I can return, let's call this Int.MaxValue, which is the maximum number that you can represent, about two billion.
>
> **[10:56](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=656)** So if I println this attempt, we will now not see the big stack trace, but we're going to see our big two billion number.
>
> **[11:07](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=667)** So you can define your own exception type, and the only requirement for your exception type to be able to be thrown by this expression is to belong to the hierarchy, either from Error or from Exception.
>
> **[11:20](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=680)** Now for user-facing exception, I would recommend that you can define your new exceptions here under the RuntimeException hierarchy.
>
> **[11:27](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=687)** So this is the general mechanism of working with exceptions in Scala.
>
> **[11:31](https://www.linkedin.com/learning/scala-essential-training-2023/exceptions?u=76281980&t=691)** I'm waiting for you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (12), [[Java]] (4), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** sumn (15)
> **Definitions:** is a  (6), is called (6), is an  (3)
> **Analogies:** for example (9), similar to (1)
> **CLI Commands:** python (2), make (2)
> **Env Vars:** jvm (3)
> **Documentation:** stack overflow (2)
> **Cross-References:** in the next (1)

#### [Generics](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=1)** In this video we're going to talk about generics, which is super important for the [[Scala]] type system.
>
> **[0:06](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=6)** I'm going to go ahead and under the part two OP chapter, I'm going to create a new Scala application.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=12)** I'm going to call this generics.
>
> **[0:16](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=16)** And I'm going to make an object with a main method.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=20)** Now, [[Microsoft Word|word]] of warning, for those of you coming from dynamic programming languages, like [[JavaScript]] or [[Python (Programming Language)|Python]], this lesson may be a little hard.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=28)** Now, generics or type arguments are elements introduced in the type system of a programming language, like Scala, to reuse code on potentially different types.
>
> **[0:39](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=39)** I'm going to show you an example, a quick example of why that's necessary.
>
> **[0:42](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=42)** Let me define an abstract class.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=45)** I'm going to call this IntList, and I'm going to define the prototype of a linked list of integers.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=52)** A linked list is defined by two fundamental methods.
>
> **[0:54](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=54)** One is called, first, that returns an integer, and one is called [[Representational State Transfer (REST)|rest]] of this list, which is an IntList.
>
> **[1:03](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=63)** So if you have the list, one, two, three, four, five, as a linked list, the first number is one, and the rest of this list is two, three, four, five.
>
> **[1:12](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=72)** The linked list is defined in terms of errors, so one leads to two, leads to three, leads to four, leads to five, like this.
>
> **[1:21](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=81)** You've probably done linked lists in programming classes in school or college.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=87)** The first element is one, and the rest of this list is a pointer to another IntList.
>
> **[1:32](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=92)** So this is the concept of a linked list.
>
> **[1:34](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=94)** I'm pretty sure you know the concept.
>
> **[1:36](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=96)** I'm not going to bore you with details.
>
> **[1:38](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=98)** Now in Scala, the way that we would implement this IntList would be to define a class.
>
> **[1:42](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=102)** Let's call this empty IntList, and this extends IntList, and I'm going to define the first and rest functions.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=111)** So first is an integer.
>
> **[1:52](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=112)** Because this is an empty list, I'm going to throw an exception because there's no element to return.
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=118)** So new, let's call this no such element exception.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=122)** This is one very common exception in Scala, and likewise for the rest of this list.
>
> **[2:08](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=128)** So there's one subtype of IntList and one that's called non-empty.
>
> **[2:12](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=132)** So I'm going to define a class.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=133)** Let's call this non-empty IntList.
>
> **[2:19](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=139)** And I'm going to define my first and rest in terms of some constructor arguments.
>
> **[2:24](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=144)** So I'm going to have my, say A as in int, and rest as an IntList, and this extends IntList, and I'm going to override both methods.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=161)** The first element is A, and the rest is R.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=169)** So notice that we have two subtypes for this class and we now have a very basic linked list implementation.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=177)** And I can also make this non-empty link list a case class now that you know what case classes are, so that I can actually use them in main.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=184)** So I can say print line, non-empty list with one, and the rest is another non-empty list two, and the rest is non-empty list three, and let's finish with empty IntList.
>
> **[3:19](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=199)** Okay, so if I run this application, obviously it'll work and it will give us back the exact representation that we wrote in the code, non-empty list one, and the rest is non-empty list two, which itself has non-empty list three, and so on and so forth.
>
> **[3:30](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=210)** Okay, now if I want to reuse this logic on strings, how would I go about it?
>
> **[3:38](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=218)** The first option would be to simply copy this entire representation and I would add another 10 lines of code for strings, another 10 lines of code for other types they might want to support.
>
> **[3:50](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=230)** So one option would be to copy everything, but obviously that's a dead end because if I ever want to add any sort of functionality to this IntList, I would have to replicate it to all the possible lists of all the possible types that I want to support in my application, which is absolutely impossible.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=246)** Option two would be to remove the type safety by using any,
>
> **[4:15](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=255)** the parent of all possible types in Scala.
>
> **[4:17](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=257)** So instead of having an IntList, I would have a very general list.
>
> **[4:20](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=260)** So I'm going to show you how that would work.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=262)** So I'd have an abstract class.
>
> **[4:24](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=264)** Let's call this any list where the first is any, and the rest is an any list.
>
> **[4:30](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=270)** Then we have an empty any list.
>
> **[4:33](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=273)** The first is an any, the rest is an any list.
>
> **[4:36](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=276)** Then we have a non-empty any list where the first item is any, the rest is any list.
>
> **[4:47](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=287)** And I'm simply removing all the type signature here.
>
> **[4:50](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=290)** So I'm going to have any list and any list for both.
>
> **[4:53](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=293)** Now, if I use an item like this, an abstract class, any list, the code works, but I have no information of the possible types here.
>
> **[5:03](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=303)** Maybe I have a list of persons and I want to combine their names in a table.
>
> **[5:07](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=307)** If I use the any type, I cannot really know for sure whether this is a person, or an integer, or a string, or a dinosaur, and therefore, I cannot really perform any sort of operation, and therefore, this any type will defeat its purpose.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=322)** The whole point of using types is that we can have some type information at compile time so that we're sure that, for example, this list only holds items of the same type.
>
> **[5:31](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=331)** Therefore strongly typed languages like [[Java]] and Scala, C++, TypeScript, and many others introduce the concept of type parameters or generics.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=344)** And the way that we would solve this sort of problem, instead of duplicating or removing type signatures, is to define, I'm going to copy this entire representation, but I'm going to generalize it.
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=355)** I'm going to call this my list or general list, and I'm going to add a type argument in between square brackets.
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=363)** Now if I define this A in square brackets, I can use it in the type signature of the methods of this class.
>
> **[6:10](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=370)** So I'm going to say that the first returns an A and the rest returns a my list, of the same type, so my list A.
>
> **[6:19](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=379)** Then we have, let's say, empty list of type A.
>
> **[6:24](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=384)** This extends my list of A, first returns an A, the rest returns on my list of the same type.
>
> **[6:31](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=391)** I'm going to call this... So empty list should be a proper name and non-empty list, I'm going to add a type argument to it as well.
>
> **[6:40](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=400)** A is an A, and this is a my list A.
>
> **[6:44](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=404)** This extends my list A.
>
> **[6:46](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=406)** First is an A, and rest is a my list A.
>
> **[6:50](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=410)** Now, what have we achieved with this abstract class, my list A with empty list and non-empty list?
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=415)** Well, by this technique, we're reusing the concept of a linked list on all possible types that can be stored inside this my list.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=423)** For example, this thing, so let me cut this out, can be a list of integers.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=430)** Let's call this numbers.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=432)** As a non-empty list with one non-empty list,
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=441)** two non-empty list, three new empty list.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=445)** So not using the empty IntList type, but I'm using the very general my list type.
>
> **[7:32](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=452)** So numbers is now a non-empty list of integers.
>
> **[7:36](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=456)** Therefore, if I say first number, I can say numbers.first, and we know for a fact that this must be an integer.
>
> **[7:45](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=465)** Therefore, I can perform, for example, numerical calculations with this first number.
>
> **[7:50](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=470)** So generics or type arguments are a technique for us to use so that we can preserve type safety and reuse code on potentially unrelated types.
>
> **[7:59](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=479)** I can reuse the same concept on strings, for example.
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=481)** Let's call the strings as a non-empty list with let's say Scala, non-empty list with rocks, and new empty list.
>
> **[8:18](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=498)** So I can say val first string as strings.first.
>
> **[8:25](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=505)** And we know for a fact that the first string must be a string.
>
> **[8:30](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=510)** So while we're building a non-empty list with some arguments, the compiler figures out what the type A is, and therefore, the signatures will reflect that particular type signature.
>
> **[8:40](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=520)** So A is known to be a string for the strings list.
>
> **[8:44](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=524)** It's known to be an int for the numbers list.
>
> **[8:46](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=526)** And therefore, when we're calling the methods on this particular instance, we're returning the correct type.
>
> **[8:52](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=532)** So generics are super, super powerful, and the Scala type system has built an entire foundation on top of generics, leading up to some of the most powerful concepts in the type system in any programming language at all.
>
> **[9:05](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=545)** But this is for a more advanced course.
>
> **[9:08](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=548)** Okay, so we know how to add type parameters to classes.
>
> **[9:12](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=552)** You can also add type parameters to traits, so can add type arguments or generics to traits, abstract classes, case classes, and normal classes.
>
> **[9:31](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=571)** You cannot add type arguments to objects though because an object is a singular instance and therefore, it makes no sense to add multiple type arguments to a object.
>
> **[9:40](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=580)** You can create multiple type arguments or can add multiple type arguments to classes, traits and so on and so forth.
>
> **[9:54](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=594)** For example, I can define a trait called my map that you can add multiple type arguments, like a key and a value.
>
> **[10:02](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=602)** This is a common type signature for maps in the standard collection library.
>
> **[10:06](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=606)** We're going to take a look at the collection library a little bit later in the course.
>
> **[10:10](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=610)** You could also add type arguments for methods as well.
>
> **[10:17](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=617)** So you can genericize just one method instead of an entire class.
>
> **[10:21](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=621)** For example, I can define a method, let's say second.
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=626)** That takes a type parameter A, so notice that I'm adding the type parameter A right after the method name, before the method arguments.
>
> **[10:32](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=632)** I'm going to have a list as a my list of A.
>
> **[10:40](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=640)** Now let me define this second method.
>
> **[10:43](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=643)** Let's assume that this my list also has a method called is empty, that returns a Boolean.
>
> **[10:49](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=649)** So you don't necessarily have to use the type parameter A everywhere.
>
> **[10:52](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=652)** You can still use the normal types in Scala, and you can define is empty as true for the empty list.
>
> **[11:01](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=661)** The override keyword is not really necessary when you're overriding an abstract method and is empty will be false for the non-empty list.
>
> **[11:10](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=670)** This will help us implement the second method.
>
> **[11:13](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=673)** So if list is empty, then I'm going to throw new no such element as exception.
>
> **[11:24](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=684)** Else, if list rest is empty, then I'm going to say throw new no such element exception.
>
> **[11:33](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=693)** Else, I'm going to say list rest first.
>
> **[11:38](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=698)** So the first item from the rest of this list, this will be the second item in the list.
>
> **[11:42](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=702)** This is just an example of a method that takes generic type arguments, and you can use that type parameter or generic method argument to the rest of the method arguments.
>
> **[11:51](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=711)** So in the argument list and in the implementation of that method.
>
> **[11:56](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=716)** So notice that we are returning list rest first, which is known to be an A, whatever A ends up being, if you pass the right list.
>
> **[12:07](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=727)** So for example, I can print line, second, the second function.
>
> **[12:11](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=731)** So I'm going to simply invoke this function on the numbers list, and this will give us back the number two, and I can print line second from strings, and this will give us back the string rocks.
>
> **[12:28](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=748)** So if I run this application, we're going to see these exact two values being printed to the console, two and rocks.
>
> **[12:35](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=755)** So generics are a powerful tool that we will use throughout the rest of this course and you will need for the rest of your scholar journey.
>
> **[12:42](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=762)** So that's it for now for generics.
>
> **[12:44](https://www.linkedin.com/learning/scala-essential-training-2023/generics?u=76281980&t=764)** Waiting for you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (24), [[Scala]] (10), [[Microsoft Word|Word]] (1), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is an  (8), is a  (6), is called (2)
> **Analogies:** for example (7)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** later in (1), in the next (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. Functional Programming in Scala

[↑ Back to Table of Contents](#table-of-contents)

#### [Functional programming basics](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=0)** - [Instructor] All right, welcome to a new chapter in which we are going to discuss [[Functional Programming]].
>
> **[0:04](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=4)** At this point, you should have enough [[Scala]] experience to understand these quite abstract concepts.
>
> **[0:10](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=10)** We'll start easy in this video with understanding what functions actually are.
>
> **[0:14](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=14)** So, I'm going to create a new package for this chapter of the course under com Rock the JVM.
>
> **[0:19](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=19)** I'm going to create a new package.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=20)** I'm going to call this part3fp from functional programming.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=24)** And under the part3fp, I'm going to create a new application.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=28)** Let's call this FPBasics.
>
> **[0:30](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=30)** I'm going to make an object with a main method as we've accustomed to so far.
>
> **[0:36](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=36)** Okay, now I'm going to start this video by reminding you of the apply method.
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=40)** You probably remember from the previous chapter that the apply method is treating in a particular way by the compiler, it's very special.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=46)** So if I define a case class, for instance, I'm going to call this Person with a name: String, Let's call this favMovie: String for a bit of variety.
>
> **[0:56](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=56)** And we define an apply method saying that if we have a parameter n, this person watched their favorite movie n times.
>
> **[1:07](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=67)** So I'm going to return the String saying, s"$name watched $favMovie $n times".
>
> **[1:19](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=79)** So if I define this case class person, if I define a val called daniel Person("Daniel") and one of my favorite movies is "Interstellar."
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=91)** And if I say danielStatement as Daniel.apply with the argument 4, I've watched "Interstellar" four times.
>
> **[1:39](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=99)** You probably remember that the apply method allows me to invoke the instance Daniel on the argument 4 as if Daniel was a function.
>
> **[1:47](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=107)** So if I define danielStatement_v2 as Daniel invoked on the argument 4, that is the same thing.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=115)** So if you try to print line any one of these statements, so if I println(danielStatement) and danielStatement_v2, you'll end up with the same statement, Daniel watched "Interstellar" four times.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=130)** So the apply method is very special.
>
> **[2:11](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=131)** This is very, very important for what I'm about to show you.
>
> **[2:15](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=135)** So apply allows instances of classes to be invoked with like functions.
>
> **[2:20](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=140)** So, we can create function types, that is things that can be invoked on arguments.
>
> **[2:28](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=148)** For example, I can define a trait.
>
> **[2:31](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=151)** Let's call this SimpleMathFunction.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=155)** Right now this is a trait, but I'm going to define an apply method, an apply that takes an n as an integer and returns some other integer.
>
> **[2:45](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=165)** For all intents and purposes, any instance of SimpleMathFunction can be invoked on a number and returns a numbers.
>
> **[2:51](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=171)** So for example, I can define a val, let's called this doubler:, which is a simple math function, and I can create a new anonymous class on the spot.
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=180)** You've learned about anonymous classes from the previous chapter, so a new SimpleMathFunction with the override apply, it takes an n as an argument and returns n * 2.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=191)** Now for all intents and purposes, this instance, because it belongs to the SimpleMathFunction type, I can invoke it on an argument.
>
> **[3:18](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=198)** For example, I can define a val called six, which is doubler.apply on the argument (3), because the applied method doubles the number three, I'm going to return the number six, which is why I've named this variable six, S-I-X.
>
> **[3:33](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=213)** But, I can also say doubler invoked on the argument (3), and I'm going to return the same thing.
>
> **[3:39](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=219)** So I'm going to print line six, S-I-X, the variable name, and I'm going to see the number six being printed to the console.
>
> **[3:48](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=228)** All right, so six is the result of invoking the apply method on the argument (3) on the instance called doubler.
>
> **[3:57](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=237)** But I can invoke doubler on the argument (3) as if doubler was a functional, though it's just an instance of this regular trait.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=244)** I can call this SimpleMathFunction any sort of thing, like TheThing, whatever TheThing is, and I can still invoke it as a function.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=252)** So it doesn't really matter what the name of the trait is, I can invoke this thing like a function.
>
> **[4:18](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=258)** Now, we can generalize this SimpleMathFunction.
>
> **[4:21](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=261)** Take any sort of arguments.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=262)** For example, I can define a trait.
>
> **[4:24](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=264)** Let's call this MyFunction, and instead of having an end argument and returning an end result, we can generalize this using generics.
>
> **[4:31](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=271)** So for example, I can define a function that takes an argument A and returns a result of type B.
>
> **[4:37](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=277)** So I can define apply that takes an argument of type A and returns the value of type B.
>
> **[4:43](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=283)** So you know from the Generics chapter that we can add type arguments, and these type arguments will be replaced with actual types when we instantiate this function.
>
> **[4:53](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=293)** For example, I can define a new instance of doubler to conform to this structure.
>
> **[4:59](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=299)** So I can say doubler_v2 as a new MyFunction, and I can pass the arguments [Int, Int].
>
> **[5:07](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=307)** So in this case, the type argument A is Int, and type argument B is Int, and therefore, the apply method takes an argument of type Int and returns another Int, say arg * 2.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=322)** And this doubler_v2 is functionally identical to this other one, although the MyFunction trait is a little bit more general, because this can define any sort of apply that takes an argument of type A and returns an item of type B, rather than conforming ourselves to a very rigid structure, taking another argument Int and returning an Int.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=342)** So this doubler_v2 is programmatically equivalent to this other doubler, but the function trait is far more general.
>
> **[5:51](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=351)** Therefore, it allows us to define, let's say file six_v2 as doubler_v2 invoked on the argument of the right type, which is, again, an integer, let's say the number (3).
>
> **[6:03](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=363)** And so, if I println(six_v2), I'm going to see the exact same number being printed in the console, okay?
>
> **[6:15](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=375)** So what I've done here is that I've generalized the concept of a function to something that takes an argument of a generic type A and returns an argument of the generic type B.
>
> **[6:25](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=385)** Now these type arguments bear the right types when I instantiate my function.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=390)** So my function of Int and Int in this case, if I've added the right type arguments, the function signature will have to match that.
>
> **[6:38](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=398)** Now, why am I telling you all of this?
>
> **[6:41](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=401)** In functional programming, we work with functions as so-called "first class" elements of the language.
>
> **[6:52](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=412)** In this case, in Scala are quote, unquote functions are first class elements by virtue of this apply method that we can define traits that can resemble function types, and they can be invoked on arguments.
>
> **[7:04](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=424)** So they can act like functions, even though they're just instances of normal traits like anything else.
>
> **[7:09](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=429)** So they're first class in the sense that we can work with function types, like this thing, just like we can on any other objects.
>
> **[7:17](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=437)** For example, we can pass functions as arguments.
>
> **[7:22](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=442)** We can return them as results, because they're just regular types that we can express normally in an object oriented way.
>
> **[7:31](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=451)** So for example, in this case, any sort of function from integer to integer can be expressed as a trait that has an apply that takes an integer and returns an integer.
>
> **[7:46](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=466)** If I want to define a multi argument function, like a (String, Int) and returns a String can be expressed as a trait.
>
> **[7:55](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=475)** So I'm going to copy this definition, can be expressed as a trait that has an apply with one argument string, one argument Int and returns an Int.
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=481)** For example, let me define a function as a trait.
>
> **[8:06](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=486)** Let's call this MyStringIntFunction.
>
> **[8:10](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=490)** And this defines an apply that takes an s: String, an I: Int and returns a String as I mentioned earlier.
>
> **[8:19](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=499)** I can define such a function.
>
> **[8:21](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=501)** Let's call this myCombinator as a new MyStringIntFunction and IntelliJ suggested the indentation syntax, which I don't really agree with, so I'm going to use the curly-brace syntax, and let's just assume that I'm going to return something dummy, like the String like s, and I'm going to return I in parentheses or something like this, so a combination of s and i, obviously this is a String.
>
> **[8:48](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=528)** Now myCombinator, because it has an apply method, it can be invoked just like a function.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=534)** So I can println myCombinator, invoked on Scala, and let's say 99 times or something like this, so myCombinator on Scala and 99.
>
> **[9:04](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=544)** If I run this application, I have... So IntelliJ was slow to eliminate this compiling error.
>
> **[9:13](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=553)** We have Scala and 99 in parentheses.
>
> **[9:16](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=556)** So myCombinator just acts like a function by virtue of this apply method, and you can define any sort of function combination by defining a trait with an apply method with the right parameters.
>
> **[9:27](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=567)** Now in more general terms, Scala already has function traits, and they're all very generic in the style of MyFunction.
>
> **[9:37](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=577)** That's called Function1.
>
> **[9:39](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=579)** So let me define a Function1 that has a very similar structure as MyFunction, and I'm going to define this doubler that invoked on an argument that doubles it.
>
> **[9:48](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=588)** So I'm going to have a val, let's call this doubler_v3 as a new, and the trait in Scala is called Function1 in the sense that it has an argument.
>
> **[9:58](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=598)** So notice that we have a large number of function types in Scala.
>
> **[10:02](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=602)** Function1 and you need to pass in the right type parameters, Int for the argument in Int for the result.
>
> **[10:10](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=610)** And you need to override the apply method, and the argument is called v1 because the code is generated, I can say arg * 2.
>
> **[10:21](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=621)** So it has the same kind of structure.
>
> **[10:24](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=624)** If I take a look at doubler_v3 versus doubler_v2, look at that, look at doubler_v2 and doubler_v3.
>
> **[10:31](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=631)** The structure is identical.
>
> **[10:33](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=633)** It's only the name of the trait that's different.
>
> **[10:36](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=636)** So in order to define function types, you don't really have to use the trait MyFunction[A, B] yourself, you can just use the one from the Scala standard library.
>
> **[10:45](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=645)** So let me put this at the bottom, so doubler_v3, and I'm going to show you how you can define any sort of function with any sort of arguments.
>
> **[10:53](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=653)** For example, my string end function can be myCombinator_v2 as new Function2 in this case.
>
> **[11:03](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=663)** Function2, because it takes two arguments, and the arguments of type String Int, and the result is a String, and I'm going to override the apply method.
>
> **[11:12](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=672)** So I'm going to search it here, override the apply, s as a String, i as an Int, and I can simply copy this implementation from the other one.
>
> **[11:20](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=680)** So, compare myCombinator with myCombinator_v2.
>
> **[11:25](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=685)** The structure is identical.
>
> **[11:26](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=686)** The apply function is identical.
>
> **[11:28](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=688)** The implementation of the apply is identical.
>
> **[11:30](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=690)** It's just that the signature, the type is different.
>
> **[11:34](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=694)** We have Function2, which has the type parameters applied, String, Int for the arguments and String for the result.
>
> **[11:42](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=702)** So I can use myCombinator_v2 on the same kind of arguments, and I'm going to obtain the same kind of results.
>
> **[11:48](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=708)** So if I compare myCombinator and my Combinator_v2, they're defined in a very similar way, and they work in an identical way.
>
> **[11:57](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=717)** And the function definitions are absolutely limitless, because you can define functions with any sort of type argument.
>
> **[12:03](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=723)** So if you want to have your superfunction as a new Function4 with four arguments, let's say [Int, String, Double, Boolean for the arguments, and the final type argument is the result type, Int let's say, with the override def apply has four arguments of the right types in order, so [Int, String, Double, Boolean, and let's say that you want to return the first one multiplied by 10 or whatever.
>
> **[12:34](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=754)** So the implementation is not really that important.
>
> **[12:36](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=756)** The structure and the type signature is super important.
>
> **[12:40](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=760)** You can call this superfunction.
>
> **[12:41](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=761)** So I can say println superfunction invoked on some integer, like 4, "Scala", 3.14,
>
> **[12:55](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=775)** boolean true and the final type is going to be an integer, and therefore, that is going to return v1, which is the first argument multiplied by 10, that's 40.
>
> **[13:05](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=785)** So you can define function types of arbitrary shapes and sizes.
>
> **[13:09](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=789)** So the lesson here is that all functions or function values in Scala are instances of these function end traits with apply methods.
>
> **[13:23](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=803)** All right, so this was a crash course introduction to how function values work in Scala.
>
> **[13:28](https://www.linkedin.com/learning/scala-essential-training-2023/functional-programming-basics?u=76281980&t=808)** Join me in the next video, because we're going to build upon these concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (12), [[Functional Programming]] (3)
> **Analogies:** for example (10), just like (2), for instance (1)
> **Code Identifiers:** mycombinator (7), favmovie (2), danielstatement (2)
> **Definitions:** is a  (5), is called (2)
> **Cross-References:** previous chapter (2), in the next (1)
> **Tools:** intellij (2)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)

#### [Anonymous functions](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=0)** - [Instructor] All right, welcome back to [[Functional Programming]].
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=2)** We're going to use the concepts that we learned in the previous video to build upon and learn about anonymous functions or lambdas.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=9)** So let me go create another application here under the part three package.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=12)** So New [[Scala]] Class, I'm going to call this anonymous functions and I'm going to make an object with a main method for any tests that we want to run.
>
> **[0:23](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=23)** So in the previous video we learned or remembered about the apply method and we learned about function N which are the family of traits with apply methods of various shapes and sizes depending on the type arguments that you provide to those function types.
>
> **[0:38](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=38)** So for example, if you define a val doubler, which is of type function one with Int [Interviewer], that takes one argument of type N, that's why it's called function one and returns a result of type [Interviewer], that would be a new function one with Int, Int where the Override Apply method would be the argument times two.
>
> **[1:00](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=60)** And I'm going to simply rename this to N or Arg, that will be appropriate And obviously this doubler thing can be invoked like a function because it has the apply method.
>
> **[1:13](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=73)** So doubler on the number four, that would be the number eight.
>
> **[1:17](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=77)** So if you run this application, obviously you're going to see the number eight being printed.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=82)** So this is what we explored in the previous video.
>
> **[1:25](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=85)** We explored the family of function N traits.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=88)** Now I'm going to show you the function types because Scala will offer you shorthand notations for these function types.
>
> **[1:36](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=96)** Obviously typing them manually is a bit of labor and we want to avoid that.
>
> **[1:41](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=101)** And Scala's very, very good at shortening your code.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=104)** So function types will look something like this.
>
> **[1:47](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=107)** Let me define an equivalent doubler, I'm going to call this Doubler version two you so that you can have something to compare.
>
> **[1:53](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=113)** function one is actually written in Scala as Int arrow int, this is the equivalent type of function one.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=120)** So this is a syntactic sugar or a sweeter way of writing function one with Int and Int.
>
> **[2:07](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=127)** And this construct new function one with Int and Int where the override Def apply takes an argument of type Int and returns N times two can be shortened by saying N arrow Int, I'm going to simply copy this implementation, cut the cruft, I'm going to say N dot colon Int arrow and times two.
>
> **[2:31](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=151)** So this is the equivalent function value for this entire construct above.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=155)** This is called a Lambda, an equivalent to the above.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=161)** So when the compiler sees something like this, it actually expands to this construct new function one where the apply method takes an argument of type Int and returns this expression N times two, which is obviously an Int.
>
> **[2:53](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=173)** So this conforms to the type signature of the value and everything is good.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=177)** So obviously you can prInt line doubler version two invoked on the number four and that's the same as calling the apply method.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=184)** So you can actually call apply on the number four so the compiler knows that you're defining a function one type and obviously it will work in the same way and this will prInt the number eight.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=195)** In practice we're going to use this structure very, very often in our Scala code.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=202)** We almost never use the new function one construct because it's very laborious and this structure is far cleaner and easier to understand.
>
> **[3:30](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=210)** I introduced the function one type so that you can map this concept to the OOP chapter that we did earlier.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=217)** Now obviously you can define more complex function types.
>
> **[3:43](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=223)** For example, you can have an adder which adds two numbers and the function type would be function two with Int, Int as arguments and Int as the result.
>
> **[3:54](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=234)** And you would have new function two with int, Int, Int and the override Def apply would have two arguments and you would say V one plus V two.
>
> **[4:07](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=247)** I'm going to rename this, I'm going to call this A and B.
>
> **[4:11](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=251)** So obviously this is a very as before, a very laborious definition and Scala has a more compact definition for that, function two would be denoted as Int, Int in parentheses.
>
> **[4:25](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=265)** These are the arguments, arrow Int as the result.
>
> **[4:29](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=269)** So this is the equivalent type signature for function two and instead of new function two where the override Def apply is takes these arguments A and B and returns A plus B.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=280)** I'm going to simply copy the arguments and the expression.
>
> **[4:44](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=284)** I'm going to cut everything else and I'm going to put the error here.
>
> **[4:48](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=288)** So I'm going to say A column Int B column Int arrow A plus B, this is a Lambda and equivalent to New Function two with int, int, int and all the necessary boilerplate code.
>
> **[5:08](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=308)** Obviously this is far easier to read and understand, far more compact and with the exact same information.
>
> **[5:14](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=314)** There is also a type four zero argument functions and that would be a function zero that just provides or returns a type parameter.
>
> **[5:26](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=326)** And I would say Val, let's call this, Just do something as a function zero that returns, let's say an integer, that provides an integer and that will be a new function zero with type integer.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=344)** And the override Def apply, it would take no arguments and would provide or return an integer like 42, which is obviously the meaning of life.
>
> **[5:53](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=353)** And for this function zero there's also a shorthand construct or a syntactic sugar.
>
> **[5:58](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=358)** And that function zero is nothing or empty parentheses, to a type.
>
> **[6:06](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=366)** So no arguments to Int is a new no arguments to Int where the override Def apply returns 42 and the shorthand notation would be no arguments returns 42.
>
> **[6:19](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=379)** So the same Lambda construct as we saw earlier, except we don't have any arguments here.
>
> **[6:25](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=385)** I want to show you an alternative syntax with curly braces because you may see this in real life code and you may be confused about what this is.
>
> **[6:35](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=395)** So for example, I can define a val, let's say string to int, just to give an example, as curly braces.
>
> **[6:47](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=407)** And in curly braces, inside the curly braces you'd put the argument like string as a string, arrow, and what follows is a block of code and you can do val, let's say string length as string.length and you'd have string length plus 45 or whatever the code ends up being.
>
> **[7:09](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=429)** So after that you can have a block of code inside these curly braces and you're safe.
>
> **[7:15](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=435)** So you now know how to define Lambda types or function types like Int error Int and Lambda values or function values with this shorthand notation without writing this entire boilerplate code, this is very, very cool.
>
> **[7:30](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=450)** I want to show you some type inference so that you can write even shorter code.
>
> **[7:34](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=454)** For example, I can define a doubler version three with the type signature attached to it.
>
> **[7:39](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=459)** So I'm going to say doubler version three, known to be a function Int to Int.
>
> **[7:44](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=464)** And I can say N arrow N times two, I don't really need to provide the type for N because the compiler knows the type of N by virtue of this definition on the left hand side.
>
> **[7:56](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=476)** So if I hover over N, it's known to be an in integer.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=480)** So the type of argument is inferred by the compiler.
>
> **[8:05](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=485)** If you have multiple arguments you'd have to pass them in parentheses.
>
> **[8:08](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=488)** So if I have an adder version two, which has the type Int, Int arrow Int, so let me add the type annotation here, you can have A comma B, arrow A plus B.
>
> **[8:23](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=503)** So you'd have to pass the arguments in parentheses.
>
> **[8:26](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=506)** And the compiler knows that A is an integer and B is an integer as well.
>
> **[8:30](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=510)** Now what's mind blowing about Scala is that even though these Lambdas are fairly short, there is an even shorter notation.
>
> **[8:37](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=517)** This is the shortest notation possible and you'll probably see this in your real life Scala journey.
>
> **[8:45](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=525)** And this is the underscore notation.
>
> **[8:48](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=528)** Let me define a doubler version four, which is known to be an Int error Int.
>
> **[8:51](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=531)** So when the types are already known, you don't really need to repeat the N arrow thing.
>
> **[8:57](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=537)** So you can say underscore times two, and that would be the same.
>
> **[9:01](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=541)** So this would be a doubler version four, and this is the same.
>
> **[9:06](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=546)** So the underscore takes place of the argument if you're using it in the same one liner.
>
> **[9:12](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=552)** So look at this, this is the same as this sort of definition, which is the same as this sort of definition, which is the same as this boiler plated definition.
>
> **[9:23](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=563)** They're all the same.
>
> **[9:24](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=564)** So Doubler version one, two, three, four, they're actually the same object, the same function instance and the underscore notation works with multiple arguments as well.
>
> **[9:33](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=573)** So if I have an adder version three, so let me add the proper name here.
>
> **[9:39](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=579)** If the type of this value is known, then you can even omit the A and B declaration and you can say underscore plus underscore.
>
> **[9:51](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=591)** The first underscore is the first parameter.
>
> **[9:53](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=593)** The second underscore is the second parameter.
>
> **[9:55](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=595)** You cannot reuse parameters if you have an expression like this.
>
> **[9:59](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=599)** So each underscore is a different argument.
>
> **[10:05](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=605)** But look at this, it's literally five characters which is the same as this, which is the same as this, which would be the same as a new function two with Int, Int, Int where the override def apply would be A plus B.
>
> **[10:18](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=618)** All right, so look at this.
>
> **[10:20](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=620)** This is the most compact Lambda possible.
>
> **[10:23](https://www.linkedin.com/learning/scala-essential-training-2023/anonymous-functions?u=76281980&t=623)** So this is how function values or Lambdas work in Scala, and we're going to start using them in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (9), [[Functional Programming]] (1)
> **Definitions:** is a  (7), is an  (3), is called (1)
> **Cross-References:** previous video (3), as we saw (1), in the next (1)
> **Analogies:** for example (4)
> **Code Identifiers:** print (2)
> **Exercise Files:** boilerplate (2)
> **CLI Commands:** make (1)
> **Env Vars:** oop (1)

#### [Scala collections: List](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=1)** So now that we have the basics of [[Functional Programming]] principles in [[Scala]], let's start to take a look at the standard collection library, starting with lists.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=11)** Lists are by far the most popular [[Data Structures]] used in Scala, and this video is all about that.
>
> **[0:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=16)** So, under part3fp, I am going to create a new Scala class.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=20)** I'm going to call this ListsDemo, or Lists.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=24)** I'm going to make it an object, going to create a main method, and I'm going to give you some examples of lists.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=31)** The way that you can define a list in Scala is to define, let's say, aList, and the type of list is called List with a type parameter.
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=40)** So you're using generics here, for example, a list of integers.
>
> **[0:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=43)** And the way that we can build a list of possible values here, we can say List, apply to, let's say 1, 2, 3.
>
> **[0:51](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=51)** So the List type has a companion object with an apply method.
>
> **[0:55](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=55)** So it's as if I said, List.apply, with the numbers 1, 2, 3.
>
> **[0:59](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=59)** And this gives us back a list of integers.
>
> **[1:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=63)** If I print this out in main, if I print aList.
>
> **[1:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=67)** You probably remember that printing an instance of a class actually calls its toString method, which the List type already supports, and it gives us back a very human-readable List (1, 2, 3) So that we can actually inspect it.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=82)** And I'm going to show you some functions that List support right out of the box.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=87)** In a later video, I'm going to give you some exercises using the concepts that we learned in this video, as well as explore some functional programming principles on top of this List data structure that you can then apply to other more complex data structures in Scala.
>
> **[1:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=102)** Let's take them in turn.
>
> **[1:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=103)** So the List data type in Scala is a singly-linked list.
>
> **[1:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=109)** And the singly-linked list is defined by two fundamental methods, the first element.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=114)** That's called the head.
>
> **[1:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=116)** And the [[Representational State Transfer (REST)|rest]] of the list, which is called the tail, and that is another list.
>
> **[2:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=121)** So, for example, if we have a list that has the elements 1, 2, 3, the first element is, say first element, this will be an Int.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=130)** And this is aList.head.
>
> **[2:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=134)** So this is the method that returns the first element of the list, and the rest is aList.tail.
>
> **[2:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=141)** If you remember an example from the generics lesson, we used the methods first and rest to describe the API or the set of methods describing a singly-linked list.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=152)** The Scala standard library already has this sort of data structure, and the methods are called head and tail.
>
> **[2:39](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=159)** You can also add, that is prepend, an element to a list.
>
> **[2:46](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=166)** So let's say biggerList.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=169)** So if for example, I want to prepend the number zero to this list, I would say 0 :: aList.
>
> **[2:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=176)** This is the way to do it.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=177)** If you want to prepend an element, you say element, prepend it by using this operator, :: aList.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=183)** Now, there is some magic for why this expression works.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=187)** That's nothing that you need to worry about right now.
>
> **[3:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=190)** Just use the element prepend to aList exactly like this.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=195)** So this will return the list [0, 1, 2, 3] to us, but this will always be a new list.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=201)** So the original one is left intact.
>
> **[3:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=203)** So if I say println(biggerList), we will see that the original list stays at 1, 2, 3, and the bigger list is now 0, 1, 2, 3.
>
> **[3:33](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=213)** Right?
>
> **[3:34](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=214)** So this is what we see in the console.
>
> **[3:38](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=218)** This always returns a new list.
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=222)** Very important.
>
> **[3:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=223)** You can also add append, an element, at the end of the list.
>
> **[3:51](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=231)** So let's say biggerList_v2 = aList, and the operator is :+.
>
> **[4:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=240)** So this is the method that we apply on the aList instance here.
>
> **[4:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=245)** And let's say I want to put the number four at the end.
>
> **[4:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=248)** If I do something like this, then the list will be 1, 2, 3, 4, again, a new list.
>
> **[4:13](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=253)** So if I print line, the biggerList_v2, running the application, we are going to see the list (1, 2, 3, 4).
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=262)** All right, so these are the operators that we need to prepend and append elements.
>
> **[4:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=268)** So you use :: with the element first, and appending with :+, and we put the element last.
>
> **[4:36](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=276)** There are some utility methods.
>
> **[4:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=280)** For example, if you want to create a list of exactly N number of elements, you can say scalax5.
>
> **[4:48](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=288)** I'm going to add some variety here with a list of strings.
>
> **[4:52](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=292)** So I'm going to say List.fill.
>
> **[4:55](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=295)** And I can say fill(5).
>
> **[4:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=298)** So List.fill(5) is something that will create a list of exactly five elements.
>
> **[5:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=304)** And then I can add another argument list by saying Scala here.
>
> **[5:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=308)** So List.fill(5)("Scala") will create the list with the string Scala repeated five times.
>
> **[5:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=317)** So "Scala, Scala, Scala, Scala," and one more time.
>
> **[5:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=322)** So this structure is a little bit weird.
>
> **[5:24](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=324)** So, List.fill(5)("Scala").
>
> **[5:25](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=325)** This is an example of a method that takes multiple argument lists.
>
> **[5:30](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=330)** This is possible in Scala.
>
> **[5:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=332)** So it's very easy for us to define methods like add2numbers, where we have an X and Y as a second argument list, and returns, let's say, X + Y.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=344)** This is very easy and Scala allows us to do that.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=347)** So if you want to separate the argument list of a method, you can do that by passing multiple argument lists to a method.
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=355)** There's nothing rocket science about it.
>
> **[5:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=357)** You can also reverse a list by saying reversedList = aList.reverse.
>
> **[6:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=366)** And this returns a new list.
>
> **[6:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=368)** And the list is 3, 2, 1, in this case.
>
> **[6:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=372)** You can also concatenate with another list by saying concatenation = aList, and the method is ++ List, let's say (4, 5, 6).
>
> **[6:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=387)** So (1, 2, 3) ++ List(4, 5, 6).
>
> **[6:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=391)** This is a new list and that's going to be [1, 2, 3, 4, 5, 6] There's also a way to print this list in a very nice formatted way.
>
> **[6:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=401)** So format the collection by passing some separators in between the elements of this collection by saying... Let's call this stringRep = aList.
>
> **[6:53](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=413)** And the method is called mkString, M-K String.
>
> **[6:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=417)** And there are a bunch of overloads with mkString, one is with a comma, and this will give you back a string where you have all the items exactly like this, with this separator printed in between them.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=432)** So let me give an example of how that would work.
>
> **[7:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=434)** So I can say println(stringRep) in main.
>
> **[7:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=436)** Running the application will give us back just the numbers 1, 2, 3 in a single string.
>
> **[7:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=440)** So this is a string.
>
> **[7:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=443)** If you pass any sort of separator like a bar or something like this, it'll be formatted exactly like you wanted.
>
> **[7:29](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=449)** So we have 1|2|3.
>
> **[7:30](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=450)** So this is pretty handy for us to create, for example, tabular data in a string representation.
>
> **[7:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=460)** There is another mkString overload by specifying three arguments.
>
> **[7:45](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=465)** So you can specify, for example, the first string, which occurs before the first element, then the separator in between two consecutive elements, and then the string element that you'll add after the last element.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=480)** I'm going to say stringRep_v2.
>
> **[8:02](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=482)** So this will give us back the string [1, 2, 3] exactly like this.
>
> **[8:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=489)** If you have the bar, the string is going to be 1|2|3, and the stringRep_v2 is going to be exactly like this with [1, 2, 3] with the square brackets as a string.
>
> **[8:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=500)** So if I print this out, stringRep_v2, you'll get this sort of string, [1, 2, 3] with square brackets.
>
> **[8:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=512)** So mkString is very handy for us to format a list, and not just a list, multiple collections in Scala support this sort of mkString formatting.
>
> **[8:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=521)** So, this is pretty handy for us for formatting.
>
> **[8:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=524)** You can also combine all elements in a list.
>
> **[8:50](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=530)** For example, if you want to sum up all the numbers in this list, you can say val total = aList, and the function is called reduce.
>
> **[8:59](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=539)** And there are a bunch of reduced versions here, I'm just going to give you the basic one.
>
> **[9:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=543)** Reduce.
>
> **[9:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=544)** And notice the kind of argument that reduce takes.
>
> **[9:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=546)** It takes a function from (B, B)=> B.
>
> **[9:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=549)** What does that mean?
>
> **[9:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=550)** It takes two items of the type that the list has, for example, integer in this case, and it returns another integer.
>
> **[9:18](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=558)** And I can say (a,b) => a + b.
>
> **[9:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=563)** And this means that this function will be applied to subsequent elements of this list until only one value is returned.
>
> **[9:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=571)** So for example, in this case, if we have the list [1, 2, 3], the way that reduce works is that it takes the first two items and it subjects them to this function.
>
> **[9:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=581)** So, one plus two, that's three.
>
> **[9:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=584)** And the result of that is subject to the addition with the last element, which is six, until only one element is returned, and that is going to be the final result of this total.
>
> **[9:55](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=595)** So this reduce is very handy for map reduce kind of transformations in parallel and distributed computing, if you want to get more advanced into that.
>
> **[10:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=605)** So if I print the total, you'll see that you will get the sum of all the elements in this list.
>
> **[10:11](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=611)** And that is six for our little list.
>
> **[10:15](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=615)** Now obviously, because you know lambdas by now, and you know the very shorthand notation that Scala allows you to perform, this lambda can be reduced to (_ + _), which is the exact same thing.
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=626)** So notice how compact this definition is, aList.reduce(_ + _).
>
> **[10:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=632)** In Haskell or in other functional programming languages, that would be aList reduce +, and the plus is the operator in between two consecutive elements, and those are reduced up to the point where you end up with a single value.
>
> **[10:48](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=648)** So, notice that, so far, all we get is a set of operators that will allow us to obtain values and transform lists by obtaining new ones.
>
> **[10:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=657)** There's no concept of repetition or a For loop that will traverse this list.
>
> **[11:02](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=662)** You only have transformations from lists to other lists, and this is the kind of mindset that I want you to adopt.
>
> **[11:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=668)** In the next video we're going to explore map, flatMap, and filter, three very important functional programming primitives on lists.
>
> **[11:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-list?u=76281980&t=676)** So let's go see them in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (19), [[Functional Programming]] (4), [[Representational State Transfer (REST)|Rest]] (3), [[Data Structures]] (2)
> **Code Identifiers:** alist (15), mkstring (5), biggerlist (2), stringrep (2), tostring (1)
> **Definitions:** is a  (5), is called (4), is an  (1), means that (1)
> **Analogies:** for example (9)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Map, flatMap, and filter](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=0)** - [Instructor] Alright, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=1)** So you know the basics of Lists by now.
>
> **[0:03](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=3)** Let's discuss three very important [[Functional Programming]] primitives that you will probably need for the duration of your [[Scala]] journey, and those are Map, FlatMap, and Filter.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=12)** So let's go back to our Lists demo, which we started in the previous video, and I'm going to continue the demonstration with a transformer called Map.
>
> **[0:22](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=22)** A map transforms a list by applying a function on every element of that list.
>
> **[0:34](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=34)** So if we have a list as List with 1, 2, 3, I can transform this list, so return a new one, where every element is multiplied by 10, for instance.
>
> **[0:45](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=45)** So I'm going to call this 10x list as aList.map.
>
> **[0:50](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=50)** And notice the signature of map.
>
> **[0:52](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=52)** Map takes the type parameter B and a function from int, which is the original type of the elements of the list, to that type B.
>
> **[1:00](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=60)** So we can transform a list into something else.
>
> **[1:02](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=62)** So for example, I can say, for x in the list, arrow x times 10.
>
> **[1:08](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=68)** So this function, this function instance, this lambda, is applied to every element and it will return a new list where every item is multiplied by 10.
>
> **[1:16](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=76)** So if we had 1, 2, 3, in this case, we're going to have 10, 20, 30.
>
> **[1:21](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=81)** Obviously, if we print this out, 10x list, we're going to see the list 10, 20, 30 being printed to the console, right?
>
> **[1:30](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=90)** So we have each element multiplied by 10.
>
> **[1:34](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=94)** So there is no concept of iteration in a list, but there is a transformer called Map which traverses the entire list and will give you back a new list where every item is transformed like this.
>
> **[1:45](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=105)** So in an imperative language, or in an imperative style, we would say something along the lines of val anArray, and that would be the array 1, 2, 3.
>
> **[1:56](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=116)** However, you want to choose to instantiate that in your preferred programming language, and we would have a for loop for int i starting at 0, i is less than anArray.size, or length, or whatever that's called.
>
> **[2:10](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=130)** And then you say i plus plus, and you would say valid result as a list of three elements, so array of 3, whatever that declaration is in your preferred language, and you would say, result i is anArray i times 3.
>
> **[2:30](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=150)** And then you'd finally return the result.
>
> **[2:32](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=152)** So return result.
>
> **[2:35](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=155)** So this entire algorithm is compacted into one declaration, into one function call that's called Map.
>
> **[2:42](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=162)** And this transformation is applied to every element, and therefore you will return a new list.
>
> **[2:48](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=168)** So you don't have to think in terms of an algorithm or in terms of an iteration.
>
> **[2:52](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=172)** You'd simply call this Map transformer to obtain a new kind of list.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=178)** You can also obtain a list of a different type.
>
> **[3:01](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=181)** For example, I can say for every element in 1, 2, 3, I am going to return the string, Scala, prepend it to this particular number.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=191)** So I'm going to say, let's call this scalaList as aList.map.
>
> **[3:16](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=196)** And for every x inside, I'm going to return the s interpolated string, Scala dollar i.
>
> **[3:22](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=202)** So Scala 1, Scala 2, Scala 3, or Scala x, whatever I call that.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=206)** So this is going to be the list, Scala 1, then Scala 2, and then Scala 3.
>
> **[3:35](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=215)** This is going to be the list that I'm going to obtain.
>
> **[3:37](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=217)** And, obviously, you can test that by printing it out.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=220)** So Scala List.
>
> **[3:45](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=225)** And we will get Scala 1, Scala 2, Scala 3 as strings.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=229)** So not only does Map allow you to transform elements into different kinds of values, but you can also return different types, therefore returning different kinds of lists by transforming the original one.
>
> **[4:02](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=242)** Another such transformer is called Filter.
>
> **[4:05](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=245)** Filter will transform a list, so it returns a new list, by just keeping the items satisfying a Boolean function.
>
> **[4:19](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=259)** So for example, I have this List 1, 2, 3.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=262)** Let's assume that I'd like to just keep those items for which the division by two is exact, so just keep the even numbers in this list.
>
> **[4:32](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=272)** The way that I would do that would be the evenNumbers as aList.filter.
>
> **[4:39](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=279)** And the Filter function takes another function as argument of type int arrow Boolean, therefore, by x saying x mod 2 is equal to 0, in this case.
>
> **[4:51](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=291)** So if I just want to keep the even numbers, the even test for a number would be that the number mod two must be equal to 0, and this argument will be the value of every item in this list.
>
> **[5:02](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=302)** So in this case, I'm just going to keep the items that satisfy this function, and therefore I'm going to return just the List 2, obviously, by keeping the old list intact.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=312)** So this is a new list, the old one is intact.
>
> **[5:19](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=319)** So the Filter function is equivalent to an algorithm that looks something like this, so val result as an Array of 3 elements, whatever that thing is actually looking like in your favorite programming language, and you would have a for loop or a wild loop, something like this, for int i, starting at 0, i is less than array length or size, and i plus plus.
>
> **[5:44](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=344)** You'd say if array of i satisfies this predicate, so mod 2 is equal to 0, then you'd say result of index, whatever that index is, so you need to keep track of that, so index starting at 0, result of index is array i, and then you'd have to say return result after that.
>
> **[6:10](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=370)** So this filter call is the equivalent of this entire algorithm, although you don't really have to write this, the Filter code does everything for you.
>
> **[6:20](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=380)** So the Filter function is a very important functional programming primitive that will allow you to transform lists by just supplying a predicate, that is, a Boolean function, and returning a new list with just those elements that satisfy it.
>
> **[6:33](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=393)** Map and Filter are called higher order functions.
>
> **[6:40](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=400)** Higher order functions, meaning that they take other functions as arguments, or return functions as results.
>
> **[6:51](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=411)** So you may notice from the Map definition that it takes a function value as an argument, and Filter takes a function value as an argument, so function taking another function as an argument.
>
> **[7:02](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=422)** This is the power of functional programming.
>
> **[7:05](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=425)** Now, you may have encountered another example of a higher order function on Lists from the previous video, and that is Reduce.
>
> **[7:13](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=433)** The Reduce function is also a higher order function, because it takes another function as an argument, in this case a two argument function, and the result is the total.
>
> **[7:24](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=444)** Another example of a higher order function is that of FlatMap.
>
> **[7:29](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=449)** FlatMap is a little bit tougher, because FlatMap is at first glance a little bit more difficult to understand and a little bit more difficult to relate to.
>
> **[7:40](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=460)** So FlatMap will transform a list by applying the function to every element, with a twist.
>
> **[7:50](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=470)** And I'm going to describe what that twist is.
>
> **[7:52](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=472)** So FlatMap looks very similar to Map.
>
> **[7:55](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=475)** So let's say expandedList as aList.flatMap.
>
> **[8:04](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=484)** And FlatMap takes a function from an element to.
>
> **[8:10](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=490)** And the difference between FlatMap and Map is that in the Map case we returned a single element, whereas in FlatMap we need to return a new list.
>
> **[8:19](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=499)** So I'm going to say List with x and x plus 1, for instance.
>
> **[8:24](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=504)** Now, what do I obtain by doing this?
>
> **[8:27](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=507)** In this case, if I call it Map by taking every element and returning a list of two items, x and x plus one, I would obtain a list of lists.
>
> **[8:38](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=518)** So let's print this out for now, so expandedList, just to see how that looks like.
>
> **[8:46](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=526)** So we have the List 1, 2, 3, and every item is expanded into its own element.
>
> **[8:50](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=530)** So it's a list of lists in this case.
>
> **[8:52](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=532)** So list with List 1, 2, that is the item obtained by transforming the element 1.
>
> **[8:58](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=538)** This is the item by transforming element 2, and this is the item that we obtained by transforming element 3.
>
> **[9:03](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=543)** So now we have a list of lists of integers.
>
> **[9:08](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=548)** Now, FlatMap was invented so that these lists are concatenated or flattened into one giant list.
>
> **[9:16](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=556)** So if I change Map for FlatMap, if I run the application again, these mini lists are combined into one giant list.
>
> **[9:26](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=566)** So FlatMap will not only transform every element into a mini list, but it'll also combine the mini lists obtained into one big list.
>
> **[9:44](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=584)** So this is what FlatMap does in particular.
>
> **[9:47](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=587)** Now, the combination of Map, FlatMap and Filter is one of the most powerful combinations that you will ever encounter in the entire functional programming space, not just in Scala.
>
> **[9:57](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=597)** Now, just by looking at these functions, they may not seem like much, or you may not necessarily relate to these concepts initially, but as you become more experienced with Scala and with the functional programming mindset, Map and FlatMap in particular, and also Filter, will become second nature to you.
>
> **[10:16](https://www.linkedin.com/learning/scala-essential-training-2023/map-flatmap-and-filter?u=76281980&t=616)** So give it time and give it some practice, which we are going to do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (16), [[Functional Programming]] (5)
> **Code Identifiers:** alist (4), anarray (3), expandedlist (2), scalalist (1), evennumbers (1)
> **Analogies:** for example (3), for instance (2), similar to (1)
> **Definitions:** is a  (4), is called (1)
> **Cross-References:** previous video (2), go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [List exercises](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=0)** - [Instructor] All right, welcome back to lists.
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=2)** We mentioned that we are going to do some exercises, practicing what we've learned over the last couple of videos.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=9)** So let me give some exercises to you.
>
> **[0:12](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=12)** Exercise number 1, I want you to take a list of numbers and return a list of [[Scala]] repeated that many times.
>
> **[0:24](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=24)** For example, if I have the list, 1, 2, 3, I want you to return the list scala, scalascala, so it repeats two times, and then it repeats three times, scalascalascala.
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=40)** So I want you to transform the original list, which is a list of numbers, into a list of strings where every element is the string scala repeated as many times as the element in the original list said.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=53)** So I'll leave it to you to define both the method signature and the implementation.
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=58)** So let's move on to the second exercise.
>
> **[1:01](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=61)** I want you to generate the first 100 numbers with a recursive function.
>
> **[1:09](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=69)** So I don't want you to cheat.
>
> **[1:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=71)** There are [[Data Structures]] in Scala that will generate a hundred numbers very, very easily, but I want you to generate 100 numbers in a list with a recursive function by using just the concepts that we've learned over the past couple of videos, okay?
>
> **[1:26](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=86)** So let's move on to the next exercise.
>
> **[1:29](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=89)** I want you to, from that list, so from the first 100 numbers or the first n numbers, from that list, I want you to return just the prime numbers.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=104)** So I want you to return a list of prime numbers out of the first n natural numbers.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=111)** Now, if it helps for these first three exercises, you can use some of the functions that we wrote so far in this course, for example, the function that repeats a string a bunch of times, or the string that tests whether a number is prime.
>
> **[2:02](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=122)** So you can use that code or you can redo it here.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=126)** And finally, exercise number 4, I want you to take a list of numbers and return a list of all the digits of those numbers.
>
> **[2:18](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=138)** For example, if I have the list, 13 and 24, let's say, I want you to return the list 1, 3, 2, 4.
>
> **[2:30](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=150)** So all the digits in every number in sequence.
>
> **[2:33](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=153)** So these are the first two digits of the first number, these are the next two digits of the second number.
>
> **[2:40](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=160)** And if I have 987, so this is a number with three digits, those will be 9, 8, 7 in sequence like this.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=169)** So I want you to simply expand every number into its list of digits and combine all those lists into one giant list of digits.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises?u=76281980&t=177)** So you have something to work for, try to work on these exercises, and I'll see you in the next video for some solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (4), [[Data Structures]] (1)
> **Analogies:** for example (3)
> **Cross-References:** we mentioned (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [List exercises: Solutions](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=0)** - [Instructor] All right, so we're back to the list exercises.
>
> **[0:02](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=2)** Let's take them in turn.
>
> **[0:03](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=3)** So exercise number one would be to take a list of numbers and return a list of strings, where each string is a string [[Scala]] repeated as many times as every item in the list specifies.
>
> **[0:14](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=14)** So let's start with the function definition.
>
> **[0:16](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=16)** The function definition would be something along the lines of repeat scala or something like this.
>
> **[0:21](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=21)** You would name the function however you want, but the important thing is that you would pass a list of numbers as an argument.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=28)** So I'm going to say numbers as a list of integers.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=31)** And the thing that you would return is a list of strings.
>
> **[0:35](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=35)** This is the important bit.
>
> **[0:36](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=36)** So this is the first step in every exercise to specify the function signature.
>
> **[0:41](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=41)** So if you didn't figure out the function signature, you can take the function signature as a hint and you can pause the video and try to implement it now that you know what shape this function needs to take.
>
> **[0:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=53)** So let's continue.
>
> **[0:54](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=54)** So repeat scala, well, what kind of transformation are we going to need?
>
> **[0:58](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=58)** If you want to transform every item in the numbers list into a string? Well, the transformer is a map.
>
> **[1:05](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=65)** So we're going to say numbers, map, and for every item, we need to return something.
>
> **[1:10](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=70)** So we need to essentially concatenate N or repeat N, where we have scala and N.
>
> **[1:19](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=79)** And thankfully we do have something that does something like this.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=82)** So we have a function that repeats a string N times, if you remember one of the previous lessons in one of the first chapters right here, under recursion, we have a function called concatenate N.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=91)** So that was the name of the function.
>
> **[1:33](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=93)** I'm going to copy it and I'm going to place it here.
>
> **[1:36](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=96)** So I'm going to use this concatenate N to obtain the repeating of a particular string N time.
>
> **[1:43](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=103)** So this is what we're going to do here.
>
> **[1:45](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=105)** We're going to say concatenate N with scala and N for every N in the list.
>
> **[1:50](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=110)** So this is the answer to the first exercise.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=114)** Let's test it out in main.
>
> **[1:55](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=115)** So I'm going to say print line, repeat scala with numbers as a list.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=120)** Let's say one, two, and five, let's say.
>
> **[2:05](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=125)** So this is going to be a list of strings, and we're going to attain the list of strings, scala, scala, scala, which is repeated twice, and scala repeated five times.
>
> **[2:17](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=137)** So the most important thing would be to define the signature, and to figure out what kind of transformer you would need to solve this exercise.
>
> **[2:25](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=145)** In this case, it was map. So that was exercise number one.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=149)** Exercise number two, generate the first N numbers in a list with a recursive function and numbers in a list with a recursive function.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=161)** So let's figure out the function signature.
>
> **[2:43](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=163)** Let's call this function generate N.
>
> **[2:47](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=167)** We're going to have an N as an integer.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=169)** So this is the parameter that we're passing, and we're going to return a list of the first N number.
>
> **[2:54](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=174)** So this is a list of integers.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=178)** So now that you know the function signature, if you didn't figure out already, you can pause the video and try to generate the first N numbers.
>
> **[3:07](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=187)** So for example, in this case, generate five.
>
> **[3:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=191)** That will be the list. 1, 2, 3, 4, 5.
>
> **[3:14](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=194)** Okay, so let's think about it. Let's design a base case.
>
> **[3:19](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=199)** So for example, if N is less than or equal to zero, it doesn't make sense to generate any list, we would generate an empty list.
>
> **[3:25](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=205)** So if N is less than or equal to zero, we would return an empty list.
>
> **[3:30](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=210)** Otherwise, we would first create the first four numbers.
>
> **[3:35](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=215)** Let's say if you want to generate five, we would generate the first four numbers and then add five at the end.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=220)** What kind of transformer would we need for this sort of operation?
>
> **[3:43](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=223)** We did that in one of the earlier videos.
>
> **[3:46](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=226)** So we now have the append operator.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=229)** So column plus we can use that.
>
> **[3:51](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=231)** So we can say generate N with N minus one, and then append the last number.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=241)** So generated with N is actually generated with N minus one.
>
> **[4:04](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=244)** So the first N minus one numbers plus the last one, that's the general recursion here.
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=249)** So generate N and then append N.
>
> **[4:12](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=252)** So let's print line generate N, let's say the first 10 numbers.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=262)** All right, so we have the first 10 numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, in a list.
>
> **[4:28](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=268)** Now one drawback with this generate N and specifically with this recursive approach is that you can't use generate N on a large number of numbers.
>
> **[4:37](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=277)** So for example, if you try to generate a hundred thousand numbers, this will crash with a stack overflow error because we're doing very deep recursion there.
>
> **[4:46](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=286)** There are techniques to mitigate against stack overflow errors, as we mentioned in the recursion lesson in the first chapter.
>
> **[4:52](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=292)** And that is called tail recursion.
>
> **[4:55](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=295)** But tail recursion is an advanced technique that we will not have the time to cover in this course, probably in an advanced course later.
>
> **[5:02](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=302)** So for now, this technique will still do, it's still correct, and we can move to exercise number two from that list, just return the prime numbers.
>
> **[5:10](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=310)** What kind of function would we create here?
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=312)** Let's say primes out of first N numbers or something like this where we have an N as an int.
>
> **[5:21](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=321)** And this will return a list of int, and these will be just the prime numbers out of the first N natural numbers.
>
> **[5:28](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=328)** So I am going to first generate N with N, and then I'm going to call filter.
>
> **[5:38](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=338)** This is the transformer that we need for this exercise filter.
>
> **[5:42](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=342)** And the function that we need to pass here is whether a number integer is prime.
>
> **[5:48](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=348)** We've done that before.
>
> **[5:48](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=348)** Again, in the recursion lesson we have is prime.
>
> **[5:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=353)** So I'm going to simply copy that and I'm going to put this here.
>
> **[5:58](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=358)** So let me put this at the bottom.
>
> **[6:01](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=361)** And these are auxiliary functions, and I've simply copied them because we've done that before.
>
> **[6:10](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=370)** So filter for every number I'm going to say is prime on that number.
>
> **[6:17](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=377)** So generate N returns me back a list of N numbers, and from that, I can call filter.
>
> **[6:22](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=382)** And for every number inside that list, I'm going to test whether it's prime and I'm going to keep just the prime numbers.
>
> **[6:28](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=388)** Now you probably can find a better name like primes N or something like this.
>
> **[6:35](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=395)** And I'm going to print line primes N out of, let's say the first 100 numbers.
>
> **[6:42](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=402)** So we generated the first 100 numbers, so one to 100, and the primes should be easy to validate.
>
> **[6:48](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=408)** So let's test this out.
>
> **[6:51](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=411)** So we have the first 100 numbers, and this is understandable.
>
> **[6:57](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=417)** The primes from the first 100 numbers are also easy to validate.
>
> **[7:01](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=421)** So 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=430)** They sound just fine.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=432)** So 97 is the last one.
>
> **[7:13](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=433)** So notice that from the first 100 numbers, we're just keeping the prime ones.
>
> **[7:18](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=438)** And this is the kind of stuff that we were looking for.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=441)** So the transformer that we were looking for for this exercise is filter.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=445)** Now you probably guessed for exercise number four that we would use the flat map.
>
> **[7:29](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=449)** So from a list of numbers, we're going to return a list of all the digits of those numbers.
>
> **[7:34](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=454)** So I am going to define the function signature first.
>
> **[7:38](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=458)** So let's say list of digits from numbers as a list of int, and this will be a list of int.
>
> **[7:46](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=466)** For now, I'm going to keep it question marks.
>
> **[7:48](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=468)** So not implemented for now, just so that the code compiles and as an auxiliary function, I'm going to write a function that from an integer, I'm going to obtain a list of all its digits.
>
> **[7:59](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=479)** So let me go do that.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=480)** So here in auxiliary functions, I'm going to define, let's call this digits out of N, which is an integer, and this will return a list of int.
>
> **[8:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=491)** Alright? Now in this case, we're going to have to think about it because if we have the number 1, 2, 3, we need to return the list of 1, 2, 3.
>
> **[8:22](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=502)** But the way that we can obtain digits out of this number is to divide by 10 and obtain the quotient of the division by 10.
>
> **[8:28](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=508)** So that will be the last number and then the next to last digits, and then the next to last digit.
>
> **[8:34](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=514)** So I can only obtain the digits in reverse order.
>
> **[8:38](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=518)** So we need to be very careful of how we are going to [[Fetch]] these digits.
>
> **[8:42](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=522)** So I'm going to define an auxiliary function that's called this get digits.
>
> **[8:47](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=527)** It takes a number as an int and returns a list of int.
>
> **[8:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=533)** And I know for a fact that the list list of digits that I'm going to return here are in reverse order.
>
> **[8:58](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=538)** So I don't necessarily care about the order.
>
> **[9:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=540)** We can call this function in the big yet digits implementation and call reverse on the obtained list so we know how to reverse the list.
>
> **[9:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=551)** So right now, I'm just going to be concerned about the get digits.
>
> **[9:15](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=555)** Okay? Now this is a little bit more difficult.
>
> **[9:17](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=557)** If the number is less than or equal to zero, then in this case I'm going to return the empty list.
>
> **[9:25](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=565)** There's nothing for me to return, otherwise I'm going to create the last digit as number mod 10.
>
> **[9:36](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=576)** And then I'm going to have my quotient, which is the remainder of the number one, two from 1, 2, 3.
>
> **[9:43](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=583)** So number divided by 10.
>
> **[9:47](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=587)** And the value that I'm going to return here is last digit concatenated with get digits on the quotient.
>
> **[9:57](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=597)** Now think about it, if you want to obtain the digits, in this case, 3, 2, 1, then what I need to be doing is I need to extract the digit three, which is this one, number mod 10.
>
> **[10:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=611)** Then I need the root of the number or the quotient.
>
> **[10:13](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=613)** So one, two, and then I need to prepend the last digit to whatever I obtain by calling get digits recursively on the [[Representational State Transfer (REST)|rest]] of this number, which is the quotient.
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=626)** So last digit, prepend the two, whatever other digits this number may contain.
>
> **[10:31](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=631)** This is how I want you to read this function. Okay?
>
> **[10:34](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=634)** So from 1, 2, 3, we get 3, 2, 1. Okay?
>
> **[10:39](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=639)** Now in the big digits implementation, what do we do?
>
> **[10:41](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=641)** First of all, we need to test whether the number is equal to zero.
>
> **[10:45](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=645)** In this case, I'm going to return the list with the number zero here because the number zero also has one digit, which is zero.
>
> **[10:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=653)** And that's important.
>
> **[10:55](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=655)** If the number is less than zero strictly, I'm going to return the empty list.
>
> **[11:00](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=660)** I don't want to support negative numbers, otherwise I'm going to call this get digits, which gives me back all the digits of N in reverse order.
>
> **[11:08](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=668)** So get digits with N, and then I'm going to call reverse on that to give me back the right order.
>
> **[11:14](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=674)** So this will be the items, 3, 2, 1.
>
> **[11:18](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=678)** And then by calling reverse, I get back the list 1, 2, 3.
>
> **[11:22](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=682)** Okay, so this is the function that I'm going to use to obtain the digits of a number.
>
> **[11:27](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=687)** So let me go test this out.
>
> **[11:29](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=689)** So print line digits with the number 1, 2, 3, and I should be getting the list 1, 2, 3.
>
> **[11:37](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=697)** Alright, so we have the list 1, 2, and 3.
>
> **[11:40](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=700)** Let me test this with a bunch of other numbers.
>
> **[11:43](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=703)** So let's test zero, 10,001, just so that we can have the proper lists here.
>
> **[11:53](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=713)** Alright, so we have 1, 2, 3, list with zero, list with 1, 0, and 1 0 0 1.
>
> **[11:59](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=719)** The zeros are a little bit trickier here.
>
> **[12:02](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=722)** So this is great.
>
> **[12:03](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=723)** The digits auxiliary function seems to work correctly.
>
> **[12:06](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=726)** So this is your function if you want to pause the video and take a snapshot of it.
>
> **[12:11](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=731)** Now, this digit function I'm going to use in a flat map call to obtain all the possible digits of every number in the numbers list.
>
> **[12:20](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=740)** So I'm going to say numbers, flat map, and for every number inside N, I'm going to call digits N.
>
> **[12:27](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=747)** That's it.
>
> **[12:29](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=749)** So for example, if I have the list 1, 2, and 9, 8, 7, the function N to digits N will be invoked on every item in this list.
>
> **[12:40](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=760)** So I'm going to have mini lists, 1, 2, and 9, 8, 7, and all the mini lists will be combined into one.
>
> **[12:48](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=768)** So I will obtain in the end, 1, 2, and 9, 8, 7.
>
> **[12:56](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=776)** Let's test it out.
>
> **[12:57](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=777)** So I'm going to say print line list of digits from the list 12 and 987.
>
> **[13:06](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=786)** And in this case, we should get this list of five characters.
>
> **[13:10](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=790)** So 1, 2, 9, 8, 7.
>
> **[13:13](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=793)** This exercise, this last one in particular was a little bit more difficult.
>
> **[13:18](https://www.linkedin.com/learning/scala-essential-training-2023/list-exercises-solutions?u=76281980&t=798)** So congrats for following along this far and join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (10), [[Fetch]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (5), is an  (2), is called (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we mentioned (1), in the next (1)
> **Documentation:** stack overflow (2)
> **Speakers:** - [instructor] (1)

#### [For comprehensions](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=0)** - [Instructor] All right, welcome back.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=1)** So now that we're masters of map, flatMap, and filter, it's time we explore for comprehensions.
>
> **[0:07](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=7)** This is a special kind of expression in [[Scala]] that is extremely powerful, and this is built out of map, flatMap, and filter.
>
> **[0:15](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=15)** So here in the lists demonstration that we've been working on over the past couple of videos, I am going to show you a very interesting example.
>
> **[0:26](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=26)** So let's say we have a val called numbers as a list.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=31)** 1, 2, 3, 4, let's say.
>
> **[0:33](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=33)** So just a bunch of numbers in a list.
>
> **[0:36](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=36)** I'm going to have another val.
>
> **[0:38](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=38)** Let's called this colors as a list of strings like black, white, and let's say blue.
>
> **[0:47](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=47)** Now, my job in this example is to show you how we can build all the possible combinations of numbers and colors in a string.
>
> **[0:56](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=56)** And we would like to obtain a list that has all the combinations, like 1-black, then 1-white, then 1-blue, and then 2-black, 2-white, and so on and so forth until we exhaust all the possibilities.
>
> **[1:19](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=79)** Now, if we want to combine two lists like this, first of all, we would have to do a flatMap.
>
> **[1:23](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=83)** So I'm going to have, let's call this combinations as numbers.flatMap.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=91)** And that is because from every element in this list, for every element in numbers, I have multiple items that I'm going to combine, the number one, with all the colors in the colors list.
>
> **[1:44](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=104)** So for every number, I need to get all the colors.
>
> **[1:51](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=111)** So I'm going to have my colors.map.
>
> **[1:54](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=114)** And for every color, I'm going to return the string s interpolated like this.
>
> **[2:00](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=120)** And I'm going to have the number dash the color.
>
> **[2:04](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=124)** So for every number, I'm going to have a mini list where I'm combining that particular number with all the colors in the colors list.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=133)** And therefore, for every number, I'm going to obtain a list of these strings, 1-black, 1-white, 1-blue, and then I'm flattening those mini lists into one big list.
>
> **[2:25](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=145)** So the combinations list will be exactly the kind of stuff that I was describing.
>
> **[2:29](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=149)** So if I have my for comprehensions here, and I'm going to println the combinations, you're going to see a list of, in this case, 12 combinations.
>
> **[2:41](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=161)** So 1-black, 1-white, 1-blue, 2-black, 2-white, 2-blue, 3-black, 3-white, 3-blue, 4-black, 4-white, 4-blue.
>
> **[2:49](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=169)** So all the combinations.
>
> **[2:52](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=172)** So with this chain of flatMap, we are obtaining a list of all possible combinations between two lists.
>
> **[2:58](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=178)** This would otherwise be achieved in a comparatively complex way in imperative programming with a double for loop.
>
> **[3:04](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=184)** But here, we're achieving that in just one line of code.
>
> **[3:08](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=188)** Now, this chain of flatMap and map has a very special syntactic sugar called for comprehensions.
>
> **[3:15](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=195)** So I'm going to show you all the possible combinations between numbers and colors combined like this into a structure that is far easier to read than this flatMap and map.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=206)** So I'm going to call this combinations_v2, and I'm going to use the following structure for and I'm going to open some curly braces.
>
> **[3:36](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=216)** For n, and I'm going to have a little left arrow, left thin arrow in numbers, and c in colors.
>
> **[3:46](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=226)** I'm going to yield this expression, the combination between n and c.
>
> **[3:53](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=233)** Now this structure, which is far easier to read, so for every number, for every color, I'm going to generate this new value for every combination of the two.
>
> **[4:03](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=243)** Now, this is exactly the same as the above.
>
> **[4:09](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=249)** That is because every for comprehension in this case is going to be reduced to a flatMap and map chain.
>
> **[4:16](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=256)** So if I have a for comprehension with a bunch of generators, as we call them, so this is a generator.
>
> **[4:25](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=265)** So if we have a for comprehension with a bunch of generators, that means that these collections are going to be chained with flatMap.
>
> **[4:33](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=273)** And the final yield here is going to be a map from the last list.
>
> **[4:39](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=279)** So the structure looks like a loop in other languages, but it's not a loop, it's an expression because it's exactly identical to flatMaps and maps.
>
> **[4:49](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=289)** And because this is just a bunch of method calls, they return actual values.
>
> **[4:53](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=293)** So this entire structure is an expression returning a value.
>
> **[4:57](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=297)** It's not a loop.
>
> **[4:58](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=298)** So for comprehensions are not loops, they are expressions.
>
> **[5:07](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=307)** Now obviously, they're far easier to read.
>
> **[5:09](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=309)** So for every number in numbers, for every c in colors, I'm going to generate this new expression.
>
> **[5:14](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=314)** This is extremely easy to read compared to this flatMap and map chain.
>
> **[5:18](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=318)** So if you ever end up creating combinations of multiple collections, I recommend you start using for comprehensions, which is why I'm going to give you a quick exercise.
>
> **[5:30](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=330)** I want you to generate a checkerboard from the numbers one to eight and the letters A to H.
>
> **[5:45](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=345)** These are the names of all the cells on a chessboard.
>
> **[5:49](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=349)** So I would like you to use a for comprehension to generate the list of all these elements.
>
> **[5:56](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=356)** So this would return the list A1, A2, A3, A4, all the way to A8, then B1, B2, and so on up to B8 and so on and so forth until you get to H8.
>
> **[6:12](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=372)** So you can pause the way to do that if you want.
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=374)** I'm going to give you the value here.
>
> **[6:17](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=377)** There's no real method that you need to generate unless you want to parameterize this with your own characters and numbers list.
>
> **[6:25](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=385)** So I'm going to say chessboard, and this would be a for comprehension, and this would be the moment where you can pause the video.
>
> **[6:34](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=394)** So for every letter in a list where I'm going to have A, then B, C, D, and then E, I need to make sure that I'm using single quotes, G, and H.
>
> **[6:55](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=415)** And then I'm going to have my number in list with 1, 2, 3, 4, 5, 6, 7, 8.
>
> **[7:03](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=423)** I'm going to yield an s interpolated string, letter, and then number.
>
> **[7:11](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=431)** That's exactly the way to do it.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=432)** So essentially what we're doing is all the possible combinations between letters A to H and numbers one to eight.
>
> **[7:19](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=439)** Okay, so let's println this chessboard.
>
> **[7:26](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=446)** And this would be the list of simple strings like A1, A2, A3, and so on and so forth.
>
> **[7:31](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=451)** So we have 64 items in this list, so A1 to A8, B1 to B8, and so on and so forth and then the last one is H1 to H8.
>
> **[7:41](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=461)** As you can tell, this is extremely easy to read.
>
> **[7:44](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=464)** So for every letter in this list, for every number in this list, we're going to obtain the possible combinations, letter and number.
>
> **[7:52](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=472)** So for comprehensions are extremely powerful structures that will allow you to combine as many collections as you want.
>
> **[7:57](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=477)** And for comprehensions are also very general because due to the fact that they compile to flatMaps and maps, any data structure that has these functions like flatMap and map are eligible for for comprehensions, which opens the door for very powerful constructs in Scala as you become more advanced, for example, options and try, futures and effects.
>
> **[8:17](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=497)** That's going to be for a more advanced course.
>
> **[8:19](https://www.linkedin.com/learning/scala-essential-training-2023/for-comprehensions?u=76281980&t=499)** Until then, let's move to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (2)
> **Code Identifiers:** flatmap (11), flatmaps (2)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Scala collections: Ranges, arrays, and sets](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=0)** - All right, so now that we're masters of lists in [[Scala]], let's start exploring some other collections in the standard library.
>
> **[0:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=5)** And in this video we're going to explore ranges, arrays, and sets.
>
> **[0:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=9)** These are going to be very important in your Scala journey.
>
> **[0:13](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=13)** So here under the part3fp, I'm going to create a new Scala application.
>
> **[0:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=17)** So I'm going to call this Collections, or CollectionsDemo.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=20)** And I'm going to make an object with a main method in case you need to test anything related to these collections.
>
> **[0:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=28)** So CollectionsDemo, let's start with ranges.
>
> **[0:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=32)** Then we are going to move to arrays, and then sets.
>
> **[0:36](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=36)** These have different kinds of properties.
>
> **[0:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=40)** So let me show you what a range is.
>
> **[0:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=42)** So range is a collection of iterable numbers or characters.
>
> **[0:46](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=46)** So in general, ranges work for numerical types.
>
> **[0:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=49)** So for example, if I want the first 10 numbers, I would say 1 to 10.
>
> **[0:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=57)** And this is due to the fact that the to method is used infix, but obviously I was using that to have a more descriptive structure there.
>
> **[1:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=68)** So 1.to and then you would specify the end of the range.
>
> **[1:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=72)** But obviously it's far more readable to say 1 to 10.
>
> **[1:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=77)** Now this doesn't really contain all the numbers 1 to 10, but it just describes the start and the end of the range.
>
> **[1:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=83)** So that when you want to process all these numbers, it will start generating them internally.
>
> **[1:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=88)** So for example, if you want to repeat something, if you want to do something a set number of times, you would say 1 to 10 And then .map Let's say, for example, if you want to print the string Scala 10 times, you would say (1 to 10).map and then for every number, you would say println("Scala") Obviously we don't really care about this number, so we can reduce it to an _.
>
> **[1:53](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=113)** If you don't care about the argument of a function, you can simply use an _ there.
>
> **[1:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=118)** And here in this CollectionsDemo, I am going to print Scala a set number of times, like 10 times in this case.
>
> **[2:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=126)** Now, for a function that doesn't return any meaningful value, so if you want to call map on a lambda that returns Unit, there is a version of map called foreach.
>
> **[2:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=137)** Which makes this sort of expression far more reminiscent of the more mainstream languages.
>
> **[2:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=143)** So (1 to 10).foreach and then you would do something with those numbers.
>
> **[2:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=148)** So this is one of the uses of ranges.
>
> **[2:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=151)** So the reason why ranges exist is to repeat an action, or to convert to a collection.
>
> **[2:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=164)** So you can actually generate all the numbers 1 to 10 by saying numbers, or f10numbers or first 10 numbers as first10numbers.toList So this method will return you back a list of integers that will actually contain all the numbers 1 to 10.
>
> **[3:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=183)** And obviously you can do something about it.
>
> **[3:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=185)** So you can do, you can process these numbers in any way that you see fit.
>
> **[3:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=189)** Rather than me generating all these numbers one at a time.
>
> **[3:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=192)** For example, if we go to the lists demonstration, in the for comprehension that we did in one of the earlier videos, instead of creating 1,2,3,4,5,6,7,8 I would say 1 to 8.toList The same works for characters, so I can say 'A' to 'H' and then toList So this works too for characters because characters are also represented as numbers in, or on the JVM, right?
>
> **[3:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=222)** So toList is a very handy method to convert ranges to actual collections.
>
> **[3:48](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=228)** So these are two uses of ranges and this is by far the most common way that you are going to use them.
>
> **[3:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=236)** Let's move to arrays.
>
> **[3:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=237)** Arrays are native arrays.
>
> **[4:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=241)** So you probably encountered arrays in your existing programming experience with C or [[Java]] or [[JavaScript]] or other programming languages or [[Python (Programming Language)|Python]].
>
> **[4:11](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=251)** Arrays are stored natively on the JVM, which themselves are stored natively on the OS.
>
> **[4:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=262)** So an array is a collection of spaces in memory of a certain size.
>
> **[4:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=267)** And if you want to define an array, you would say Array.ofDim and you would have to have a type.
>
> **[4:36](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=276)** So, for example, if you want to define an array of integers, you'd say 1000 integers.
>
> **[4:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=281)** And this would be an array of that particular size, an array of integers.
>
> **[4:45](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=285)** If you've done any Java before, this is represented as int() or int[] which is the native way of representing arrays on the JVM.
>
> **[5:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=300)** So all arrays in Scala are actually mapped to JVM native arrays.
>
> **[5:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=304)** And these are also represented natively as DOS, but depending on the JVM implementation.
>
> **[5:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=310)** What's important about these arrays is that they're mutable.
>
> **[5:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=314)** So you can modify the contents of arrays.
>
> **[5:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=316)** And this is something that's far more common in more mainstream languages.
>
> **[5:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=320)** For example, I can update an array, add a particular index, by saying anArray.update And the function is to take an index, for example, I want to update the 32nd number here in this array, so I'm going to put the item 31 because arrays are also zero indexed like any other array in pretty much any other programming language.
>
> **[5:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=343)** And I'm going to set the value, let's say 42.
>
> **[5:47](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=347)** So this sets the value at index 31 to the value 42.
>
> **[5:55](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=355)** Obviously you can get the item stored at a particular position in the array.
>
> **[5:59](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=359)** So, for example, I can say, fifthNumber = anArray.
>
> **[6:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=369)** and the function is apply at the index 4.
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=374)** That is the fifth number because of the same reason.
>
> **[6:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=377)** Now because the apply is treated in a particular way by the Scala compiler, you already know that apply is very special.
>
> **[6:24](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=384)** We get to this structure, an array applied to 4 which is very similar to what other programming languages use for indexing arrays.
>
> **[6:30](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=390)** So you would say an array indexed on four on the native JVM, so this is what it translates to.
>
> **[6:39](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=399)** So all in all arrays behave very similarly in Java and in Scala.
>
> **[6:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=404)** So you can use arrays if you want to operate with zones of memory of a particular size.
>
> **[6:52](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=412)** Now in general, we don't really work with arrays all that much.
>
> **[6:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=416)** Arrays are actually used in the internal implementation of some collections in the Scala standard library, just for optimization purposes, so that we can have some clean APIs.
>
> **[7:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=426)** So a clean set of methods that we can use to transform and write some nice code.
>
> **[7:11](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=431)** But in the implementation of many of those collections, we have arrays at their core.
>
> **[7:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=437)** Let's move to sets, sets are collections with no duplicates.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=445)** And the duplicates are decided with the equals method.
>
> **[7:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=451)** Now I'm not going to get too deep into the mechanics of the equals method on the JVM.
>
> **[7:35](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=455)** If you've done Java before, this will probably ring a bell, but the equals method will decide whether two items are the same.
>
> **[7:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=463)** And we've done some tests in the object-oriented chapter when we explore the fact that some instances of classes, even though you set the same data or the same constructor arguments, they're not the same instance and therefore they're not considered equal, which is why we used case classes instead.
>
> **[8:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=481)** So case classes have this equality method already implemented so that if you pass the same constructor arguments to different instances of the same case class, they will be considered equal.
>
> **[8:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=494)** So this is what decides whether two items should be stored in a set or not.
>
> **[8:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=500)** Let me give an example of how a set works, let's say on numbers first and then maybe we can explore some other data types.
>
> **[8:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=506)** So a set of numbers would be set with 1, 2, 3, 4, and let me add some duplicates like 2, 3, 1, and 5.
>
> **[8:34](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=514)** Now it's easy to understand that we have some duplicate numbers because numbers are easily comparable.
>
> **[8:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=520)** This set will just contain the numbers 1, 2, 3, 4, 5, and the duplicates 2, 3 and 1 that I specified here will be simply eliminated.
>
> **[8:50](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=530)** So an item will only be stored once in a set.
>
> **[8:54](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=534)** The main functionality of a set is to test if an item is in the set or not.
>
> **[9:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=543)** So let's say a set contains 3 = set.contains the item 3 and this will return true or false, and in this case it'll return true because obviously the number 3 is in the set.
>
> **[9:19](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=559)** An alternative way of specifying the same thing is to say aSetContains3_v2 is to call the apply method.
>
> **[9:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=567)** Which means because apply is the apply function, I can say aSet invoked on 3 and again, this will return true or false depending on whether this parameter is in the set or not.
>
> **[9:39](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=579)** So contains and apply do the same thing on the set.
>
> **[9:43](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=583)** You can also add or remove items from the set and this will return a new set.
>
> **[9:52](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=592)** Because sets are, they call them immutable, so they cannot really be changed.
>
> **[9:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=596)** You can only return new instances.
>
> **[9:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=598)** For example, I can say aBiggerSet = aSet + the item 4 or let's say 99 because the number 4 is already in the set.
>
> **[10:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=610)** Obviously if you add a number that's already in the set, it will simply not do anything and will return the same set.
>
> **[10:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=616)** So notice how easy it is to add an item to the set by just using the + function.
>
> **[10:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=621)** So this is a method that is being used infix.
>
> **[10:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=626)** You can also remove an item from the set.
>
> **[10:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=628)** Let's call this aSmallerSet = aSet.
>
> **[10:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=632)** And you guessed it, the function or the method is called -.
>
> **[10:36](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=636)** And let's assume that I am removing the item 4.
>
> **[10:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=640)** So this will be the set 1, 2, 3, and 5.
>
> **[10:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=644)** And this will be the items 1, 2, 3, 4, 5, and 99.
>
> **[10:51](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=651)** One thing that the set doesn't really guarantee is the order in which the items are being stored.
>
> **[10:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=656)** So the set itself only guarantees no duplicates, but it guarantees no order.
>
> **[11:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=664)** Unlike a list in which all the items are in a very specific order.
>
> **[11:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=670)** There's also concatenation, which is called union in between sets.
>
> **[11:15](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=675)** So I can say, let's call this anotherSet, as the set with 4, 5, 6, 7, 8, and 9.
>
> **[11:23](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=683)** You can union this, so you can combine a set with another set, Let's call this muchBiggerSet = aSet.union with anotherSet.
>
> **[11:39](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=699)** An alternative way of saying the same thing would be to use, let's call this v2, aSet ++ anotherSet which is the same method that we used for lists to concatenate.
>
> **[11:51](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=711)** Now in this case, the meaning is different in the sense that duplicate items are not going to be stored.
>
> **[11:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=717)** So because the set contains the numbers 4 and 5 already, only 6, 7, 8, and 9 will just be added.
>
> **[12:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=724)** And this will be another set of integers.
>
> **[12:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=728)** There's also another method, let's call this muchBiggerSet_v3, and I'm going to name it as such, aSet.
>
> **[12:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=737)** And the other operator that does exactly the same thing is called | and this looks very similar to the Boolean operator or the OR operator on bits.
>
> **[12:25](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=745)** This does the same thing as well as the same ++.
>
> **[12:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=751)** So this is concatenation.
>
> **[12:32](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=752)** There's also a bunch of operators for difference, which will simply remove all the elements in one set that are in another one.
>
> **[12:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=760)** So I'm going to say, let's call this diffSet = aSet. and the function is called diff(anotherSet) So it just removes everything in another set that this one contains.
>
> **[12:56](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=776)** So in this case, I'm going to remove all the items 4, 5, 6, 7, 8, and 9.
>
> **[13:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=781)** And from these elements, just 4 and 5 are in the original set.
>
> **[13:04](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=784)** Therefore, I'm going to end up with the set 1, 2, 3.
>
> **[13:08](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=788)** Another way of saying the same thing is to use the -- operator in a symmetrical fashion.
>
> **[13:13](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=793)** So the diffSet_v2 = aSet -- anotherSet and this is the same thing.
>
> **[13:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=801)** So in the case of union we have 1, 2, 3, 4, 5, 6, 7, 8, and 9.
>
> **[13:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=807)** Whereas the difference we are going to simply obtain 1, 2, 3.
>
> **[13:30](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=810)** There's also a bunch of methods for intersection as let's call this intersection = aSet. and the method is called intersect(anotherSet) and this will just return the set of the common elements.
>
> **[13:47](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=827)** In this case it's just the items 4 and 5.
>
> **[13:51](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=831)** There is an alternative way of saying the same thing, which is aSet & anotherSet, just to mimic the AND Boolean operator.
>
> **[14:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=841)** And this does the same thing.
>
> **[14:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=846)** So we've explored ranges, arrays, and sets.
>
> **[14:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=850)** All of them have map, flatMap and filter.
>
> **[14:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=857)** Therefore, because we have map and flatMap, we have for comprehensions.
>
> **[14:24](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=864)** For example, I can say combinations as a for comprehension between, let's say, x <- Set(1,2,3,4,5,6) and y <- Set(1,2,3,4,5,6) I'm going to yield x * y.
>
> **[14:44](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=884)** And this is going to be a set of integers.
>
> **[14:47](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=887)** And the set of integers will just contain unique multiplications of x and y for x in the set and y in this other set.
>
> **[14:54](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=894)** So for example, 2 * 3 and 3 * 2 and 6 * 2 and 1 * 6 are the same value.
>
> **[15:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=901)** So it only will be stored once.
>
> **[15:03](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=903)** So in main, I can print all the combinations.
>
> **[15:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=907)** And this will show up in Main as a HashSet.
>
> **[15:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=912)** So this is a particular set implementation.
>
> **[15:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=914)** Notice the order is a little bit scrambled and that is the guarantee of set, or rather the lack of guarantee.
>
> **[15:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=921)** So it guarantees no order.
>
> **[15:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=922)** But notice that, for example, the number six, which can be expressed in many different [[Microsoft Products|products]], only occurs once.
>
> **[15:29](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=929)** So you can play around with these collections and you can yield some very interesting functionality.
>
> **[15:35](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=935)** You can also express in for comprehensions.
>
> **[15:37](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=937)** You can express something that would otherwise be defined in mathematical terms.
>
> **[15:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=942)** So let's call this product or products, or let me call this combinations, as all the products, x * y with a property that x is in A and y is in B.
>
> **[15:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=958)** Or the A list or the A set is in 1, 2, 3, 4, 5, 6, and B is the same set, 1, 2, 3, 4, 5, and 6.
>
> **[16:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=969)** So you can express in mathematical terms what is being written in the code, and obviously vice versa.
>
> **[16:17](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=977)** So there you have it folks, an overview of some of the more popular linear collections in Scala.
>
> **[16:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=981)** That is ranges, arrays, and sets, besides lists, the ones that we've worked on so far.
>
> **[16:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-ranges-arrays-and-sets?u=76281980&t=986)** Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (11), [[Java]] (4), [[Microsoft Products|Products]] (3), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** aset (10), anotherset (7), tolist (4), anarray (2), flatmap (2)
> **Definitions:** is a  (7), is called (5), is an  (1)
> **Analogies:** for example (12), similar to (1)
> **Env Vars:** jvm (7), dos (1)
> **CLI Commands:** make (1), python (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### [Scala collections: Tuples and maps](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=0)** - [Instructor] Alright, welcome back to Collections.
>
> **[0:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=1)** In this video I'm going to show you tuples and maps in [[Scala]].
>
> **[0:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=5)** Tuples and maps work very nicely together.
>
> **[0:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=7)** So I'm going to create a new Scala application.
>
> **[0:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=10)** Going to call this TuplesMapsDemo.
>
> **[0:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=14)** We're going to make an object with a main method as we've done so many times before.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=20)** Let's start with tuples.
>
> **[0:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=21)** So tuples are groups of values under the same greater value.
>
> **[0:25](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=25)** So let me define tuple and this would be 2 and rock the JVM.
>
> **[0:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=31)** Let me put this in quotes, "rock the JVM."
>
> **[0:35](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=35)** So grouping the values 2 and rock the JVM in parentheses under the same name.
>
> **[0:39](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=39)** So this is a single value that contains both.
>
> **[0:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=42)** For [[Python (Programming Language)|Python]] people this sort of tuple is probably very popular.
>
> **[0:48](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=48)** If you want to access every one of these fields, you can say first field as a tuple, a tuple.
>
> **[0:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=57)** and the field is called _1, which is the first and obviously the second is a tuple_2, obviously.
>
> **[1:05](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=65)** So you can define many kinds of tuples.
>
> **[1:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=67)** If you want to define rock the JVM and -1, you can also group those and this will have a third field and this would be -1.
>
> **[1:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=76)** The type of this tuple is Int and String in parentheses.
>
> **[1:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=82)** So tuples also have their own types.
>
> **[1:27](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=87)** So accessing the fields will always return you the correct type.
>
> **[1:31](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=91)** So in this case, the first one will be an Int, the second one will be a String.
>
> **[1:36](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=96)** So tuples are easy enough.
>
> **[1:38](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=98)** Tuples of two elements in particular have some syntax sugar that you may encounter in real life Scala code.
>
> **[1:48](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=108)** So I'm going to say a tuple version 2 as 2, thin arrow, rock the JVM.
>
> **[1:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=117)** This is particularly useful when you want to use tuples to associate keys to values as in the case for maps, which is why I mentioned earlier that tuples and maps work so well.
>
> **[2:07](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=127)** So this is syntax sugar, which is the same as a tuple.
>
> **[2:13](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=133)** So this only works for tuples of two elements.
>
> **[2:15](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=135)** 2, arrow, rock the JVM, but notice the thin arrow instead of the thick arrow that we use for lambdas.
>
> **[2:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=141)** Okay, now let's move on to maps because tuples are easy enough.
>
> **[2:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=146)** You can just group some values together and that's it.
>
> **[2:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=148)** Maps, maps associate keys to values and we always have unique keys.
>
> **[2:38](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=158)** Maps are very useful to do unique associations and I'm going to show you how to build a map as map like this.
>
> **[2:46](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=166)** So you can use the map construct much like you use lists or sets or other collections in the Scala collection library.
>
> **[2:54](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=174)** Map with some empty parentheses.
>
> **[2:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=177)** Now obviously you can pass in some arguments to map.
>
> **[3:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=180)** For example, you can pass tuples.
>
> **[3:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=181)** So I'm going to say, let's call this phone book as map.
>
> **[3:09](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=189)** And in the apply method of map, which is what this thing is, you can pass tuples.
>
> **[3:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=194)** For example, you have the name Jim associated to the phone, 555.
>
> **[3:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=201)** And then you have Daniel with 921.
>
> **[3:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=206)** And then we have Jane and Jane has the number 123, for example.
>
> **[3:35](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=215)** So tuples mean that the first item is going to be the key and the second item is going to be the value.
>
> **[3:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=220)** You can only pass tuples of exactly two items here, which is why the common way of passing arguments to map is this style with a thin arrow.
>
> **[3:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=229)** So I'm going to show you how that thing works.
>
> **[3:52](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=232)** So I'm going to use the multi cursor here because I like to do that and I'm going to remove the parentheses here.
>
> **[4:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=240)** So Jim is associated to 555.
>
> **[4:02](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=242)** Daniel is associated to 921, Jane is associated to 123.
>
> **[4:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=246)** This is far easier to read in the context of map, which is why Scala added this syntax sugar instead of the tuple syntax.
>
> **[4:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=254)** Now, maps have a set of core methods.
>
> **[4:18](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=258)** For example, you can decide or you can find out whether a key exists in the map, much like a set.
>
> **[4:24](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=264)** So find a key or a key exists in the map, let's say has Daniel as phonebook.contains Daniel and this function returns true or false.
>
> **[4:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=281)** In this case it will return true and if you want to find the number associated to Daniel, so Daniel's number as phone book invoked on Daniel or apply.
>
> **[4:57](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=297)** But I'm going to simply use the apply syntax here and this will return the number 921 as I have it in the phone book, but can crash if the key is not in the map.
>
> **[5:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=312)** So be very careful how you use the apply method on a map.
>
> **[5:15](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=315)** You need to check whether a key exists first, okay?
>
> **[5:19](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=319)** So be very careful with this method.
>
> **[5:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=321)** You can also add a new pair and this will return a new map.
>
> **[5:29](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=329)** So let's say a new pair is Mary associated to the number 678, or something like this.
>
> **[5:38](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=338)** I can return a new phone book by saying phone book plus this new association, new pair.
>
> **[5:46](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=346)** And this returns a new map leaving the old one intact.
>
> **[5:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=349)** So just like most other collections in Scala, maps are also immutable.
>
> **[5:54](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=354)** The way to modify them will return new instances.
>
> **[5:59](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=359)** You can also remove a key.
>
> **[6:01](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=361)** You don't remove a pair, you just remove a key and the associated value will be removed automatically by saying no Daniel as phone book minus the key Daniel.
>
> **[6:14](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=374)** If the key Daniel exists in the map, then its association will be removed and obviously a new map leaving the old one intact.
>
> **[6:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=381)** And if Daniel does not exist in the map, then the phone book will be returned just as it is.
>
> **[6:26](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=386)** So these are some of the core methods to check whether a key exists if you want to add a new association and if you want to remove a key.
>
> **[6:35](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=395)** There are also some conversion methods between lists of tuples and maps.
>
> **[6:41](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=401)** So you can convert back and forth between lists of tuples and maps.
>
> **[6:45](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=405)** For example, if I have a linear phone book that has just a list of tuples, let's call this list of entries, has a list with all these associations.
>
> **[6:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=418)** So this is just a list of tuples of type String, Int.
>
> **[7:02](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=422)** You can convert this list to a map by saying phone book version 2 as ListOfEntries.toMap.
>
> **[7:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=430)** And this toMap method is quite magical.
>
> **[7:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=432)** It detects whether your list is of the right type and if it is, it returns a map of String and Int.
>
> **[7:21](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=441)** The String is the key type and Int is the value type.
>
> **[7:25](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=445)** So notice that we have multiple type arguments here.
>
> **[7:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=448)** And you can also convert a map to a list of tuples if you want to process them independently.
>
> **[7:34](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=454)** Let's call this ListOfEntries version 2 as phonebook.toList.
>
> **[7:42](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=462)** And this returns a list of tuples, String to Int.
>
> **[7:46](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=466)** So you can convert back and forth between maps and lists of tuples.
>
> **[7:50](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=470)** You can also obtain the set of keys by saying, let's call this all names as phonebook.keyset.
>
> **[8:00](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=480)** So this will return us the set of unique names, which is I think Jim, Daniel, and Jane.
>
> **[8:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=486)** So Jim, Daniel, and Jane.
>
> **[8:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=492)** You can also get all the values, but the values are not necessarily unique.
>
> **[8:16](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=496)** So you'll get a sequence of all numbers.
>
> **[8:22](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=502)** Assuming I can spell val properly, as phonebook.values.
>
> **[8:28](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=508)** And the general type that you'll return is an iterable of Int.
>
> **[8:33](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=513)** That is because every map will have its own internal implementation.
>
> **[8:37](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=517)** If you want to convert that to a list, you can say toList and that'll be it.
>
> **[8:40](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=520)** So in this case, you'll obtain the list, 555, 921, and 123 not necessarily in the same order.
>
> **[8:49](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=529)** So not necessarily in this order because the associations themselves may not necessarily be stored in the order that you write them in the map.
>
> **[8:58](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=538)** And this is the same kind of guarantee that the set will offer you.
>
> **[9:02](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=542)** So these are some of the functionalities of maps and tuples in Scala.
>
> **[9:06](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=546)** Feel free to play with these values if you want to understand them better.
>
> **[9:10](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=550)** So this is how tuple and maps work in Scala.
>
> **[9:12](https://www.linkedin.com/learning/scala-essential-training-2023/scala-collections-tuples-and-maps?u=76281980&t=552)** Join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (8), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** jvm (6)
> **Analogies:** for example (5), just like (1)
> **CLI Commands:** find (3), make (1), python (1)
> **Code Identifiers:** tomap (2), tolist (2)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Versions:** version 2 (3)
> **Cross-References:** in the next (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Recap and next steps](https://www.linkedin.com/learning/scala-essential-training-2023/recap-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/scala-essential-training-2023/recap-and-next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you now have the foundations of [[Scala]] and [[Functional Programming]] at your disposal after writing more than 1000 lines of code in this course, I'm super proud of you.
>
> **[0:11](https://www.linkedin.com/learning/scala-essential-training-2023/recap-and-next-steps?u=76281980&t=11)** So if you want to learn more about Scala and functional programming, I'm waiting for you at [rockthejvm.com](https://rockthejvm.com) in my advanced Scala course if you want to get deeper.
>
> **[0:18](https://www.linkedin.com/learning/scala-essential-training-2023/recap-and-next-steps?u=76281980&t=18)** Until next time, folks, this is Daniel signing off.
>
> **[0:20](https://www.linkedin.com/learning/scala-essential-training-2023/recap-and-next-steps?u=76281980&t=20)** I'm super proud of you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (3), [[Functional Programming]] (2)
> **URLs:** [rockthejvm.com](https://rockthejvm.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Rock the JVM]]

## Skills Covered

- Scala

## Path Context

### In [[Develop Your Scala Skills for Data Engineering]]
← [[Hands-On Introduction- Scala]] | **4 of 6** | [[Coding Exercises- Scala]] →

## Appears In

- [[Develop Your Scala Skills for Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Coding Exercises- Scala]] — Scala
- [[Hands-On Introduction- Scala]] — Scala

---

[↑ Back to top](#)