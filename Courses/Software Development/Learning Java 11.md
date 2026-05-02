---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-java-11
url: "https://www.linkedin.com/learning/learning-java-11"
duration_minutes: 156
duration: 2h 36m
level: Beginner
updated: 6/18/2024
learners: 431075
skills:
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-java-2825378"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHzf7Mgd25c7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351878442?e=2147483647&amp;v=beta&amp;t=djhvqKNLdb4lxdmt7sAaT8NWw_NX4DRGC5Kxca0DXYc"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Software Developer]]'
prev_courses:
  - '[[Programming Concepts for Python]]'
next_courses:
  - '[[Learning C-]]'
path_nav: '[{"path":"Become a Software Developer","position":9,"total":12,"prev":"Programming Concepts for Python","next":"Learning C-"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/java
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20Java%2011.md)

![Learning Java 11](https://media.licdn.com/dms/image/v2/D560DAQHzf7Mgd25c7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351878442?e=2147483647&amp;v=beta&amp;t=djhvqKNLdb4lxdmt7sAaT8NWw_NX4DRGC5Kxca0DXYc)

# Learning Java 11

> Java is one of the top five programming languages, and is used for websites, embedded controllers, and Android app development. Interested in learning how to code with Java? Join instructor Kathryn Hodge as she helps you get up and running with this popular language. Kathryn covers all the basics: Data types, strings, functions, and loops. She helps you control the flow and logic of your code, and

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-java-11) | 2h 36m | Beginner | 431K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Welcome to learning Java](#welcome-to-learning-java)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Getting Started with Java**](#1-getting-started-with-java) (7 videos)
  - [What is Java?](#what-is-java)
  - [Downloading Java on your computer](#downloading-java-on-your-computer)
  - [Exploring the command line](#exploring-the-command-line)
  - [Your first Java program](#your-first-java-program)
  - [Hello World in the command line](#hello-world-in-the-command-line)
  - [Exploring an integrated development environment (IDE)](#exploring-an-integrated-development-environment-ide)
  - [Hello World in an IDE](#hello-world-in-an-ide)
- [**2. Building Strong Foundations**](#2-building-strong-foundations) (7 videos)
  - [Primitive data types](#primitive-data-types)
  - [Data types and variables in Java](#data-types-and-variables-in-java)
  - [Strings in Java](#strings-in-java)
  - [Using indexes with strings](#using-indexes-with-strings)
  - [Concatenating strings in Java](#concatenating-strings-in-java)
  - [Input and output in Java](#input-and-output-in-java)
  - [Solution: Find last character](#solution-find-last-character)
- [**3. Control Flow**](#3-control-flow) (7 videos)
  - [Mapping out program control flow](#mapping-out-program-control-flow)
  - [Operators in Java](#operators-in-java)
  - [Decision-making with if in Java](#decision-making-with-if-in-java)
  - [Understanding scope in Java](#understanding-scope-in-java)
  - [While loops (conceptually)](#while-loops-conceptually)
  - [While loops in Java](#while-loops-in-java)
  - [Solution: Leap year checker](#solution-leap-year-checker)
- [**4. Debugging in Java**](#4-debugging-in-java) (4 videos)
  - [Debugging syntax and logical errors](#debugging-syntax-and-logical-errors)
  - [Debugging with an IDE](#debugging-with-an-ide)
  - [Solution: Find the bug in string truncation](#solution-find-the-bug-in-string-truncation)
  - [Solution: Find the bug in string reversal](#solution-find-the-bug-in-string-reversal)
- [**5. Functions in Java**](#5-functions-in-java) (7 videos)
  - [What are functions? (conceptually)](#what-are-functions-conceptually)
  - [Defining functions in Java](#defining-functions-in-java)
  - [Calling functions in Java](#calling-functions-in-java)
  - [Parameters in Java](#parameters-in-java)
  - [Return types in Java](#return-types-in-java)
  - [Using built-in functions in Java](#using-built-in-functions-in-java)
  - [Solution: Move capital letters](#solution-move-capital-letters)
- [**6. Classes in Java**](#6-classes-in-java) (9 videos)
  - [Classes in Java](#classes-in-java)
  - [Constructors in Java](#constructors-in-java)
  - [Creating a class in Java](#creating-a-class-in-java)
  - [Creating instances in Java](#creating-instances-in-java)
  - [Instance methods vs. class methods](#instance-methods-vs-class-methods)
  - [Using instance methods in Java](#using-instance-methods-in-java)
  - [Instance and class variables in Java](#instance-and-class-variables-in-java)
  - [Review: Classes vs. instances](#review-classes-vs-instances)
  - [Solution: Bank account balance](#solution-bank-account-balance)
- [**Conclusion**](#conclusion) (2 videos)
  - [Navigating Java documentation](#navigating-java-documentation)
  - [Next steps for learning Java](#next-steps-for-learning-java)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to learning Java](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=0)** - [Kathryn] [[Java]] is one of the most popular programming languages for beginners.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=5)** Why?
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=6)** Java can be used to create applications on the web, mobile, desktop, and many other platforms.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=13)** Because of this, companies want to hire Java developers, and they are some of the most well-paid people in the industry.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=21)** Do you want to learn how to code with Java?
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=24)** If so, this is the course for you.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=28)** We are going to talk about programming fundamentals, such as loops, functions, and classes, and learn how to use them to create programs in Java.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=38)** Along the way, we will be using real-world examples and you will be challenged with writing programs that include these new topics that we'll be discussing.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=48)** I'm also going to show you how to debug your programs so that when you run into errors, and every developer does, you'll know right where to look to start solving them.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=57)** Hi, I'm Kathryn Hodge, and let's get started learning Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Analogies:** such as (1)
> **Speakers:** - [kathryn] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=0)** - [Instructor] To take this course you do not need any prior knowledge of [[Java]] or programming.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=6)** Keeping that in mind, you won't learn everything about Java, but this course will give you a good introduction and foundation to the Java programming language that you can take to more advanced Java courses and projects.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=20)** This is also a great course if you want to refresh your Java fundamentals.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=25)** You should be aware that there will be a few things you need to download to your computer.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=30)** But all that you need to start is a computer and an excitement to learn Java.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=35)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I have created a [[GitHub]] repo at the URL below that you can use to pull a copy of the project files used in this course.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=9)** If you have a GitHub account, feel free to fork the repo to be able to work on your own version of it.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=15)** If not, you can still download a zip of each lesson without needing a GitHub account.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=22)** Each lesson's exercise files can be accessed by switching the branch the repo is on.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=28)** For each lesson, there are two branches.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=31)** One branch ends with a B and another branch ends with an E.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=36)** The B branch contains the begin state code, and the E branch contains the end state code.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=43)** You can use the exercise files to follow along with each video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), github repo (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=0)** - [Instructor] These interactive code challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=9)** We recommend using a desktop browser for the best experience, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=16)** The code challenge has four main areas, instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=29)** You can use these drag handles to allocate space as you'd like.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=33)** Let's complete this coding challenge.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=36)** There are comments in the starting code showing you where to put your solution.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=48)** When you click the Test My Code button, you'll see a message indicating whether your code returned a correct result.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=62)** If your code isn't successful, you can ask for help.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=66)** The showExpectedResult and showHints variables determine whether you see the expected results and any hints.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=75)** Let's change showExpectedResult to true and run it again.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=82)** The expected result is 19.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=86)** Now, the code editor in the lower right shows how your solution is used.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=90)** You can change this code to experiment with different test cases.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=95)** Let's change 19 to 21.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=102)** Now the expected result is 21.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=105)** When you finish each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** showexpectedresult (2), showhints (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Java?](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=0)** - [Instructor] Let's get started with [[Java]].
>
> **[0:02](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=2)** Java is a very commonly used programming language, and it is often the first language beginners learn.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=8)** When we say "programming language," we do mean that it is an actual language, but we use it to talk to a computer.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=16)** Just like a regular language, it has a vocabulary and a set of grammatical rules, so that it can communicate with the computer to complete certain tasks.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=26)** With the Java programming language, software developers can create applications on a computer.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=33)** What types of applications?
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=34)** Think web applications, mobile applications, desktop applications, [[Web Servers]], embedded systems, and more.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=42)** We call these applications Java programs, because they are built with the Java programming language.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=48)** Chances are you've downloaded a program that requires the JRE, or Java Runtime Environment.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=55)** This is what's needed to run Java programs, and it is often what you've installed in the past in order to run Java applications on your computer.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=64)** You may not thought of them as Java applications back then, but anytime you were asked to install or update Java in order to run the application, they were indeed Java programs.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=76)** So what's needed to build and develop a Java program?
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=80)** You need to install the JDK, or Java Development Kit.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=84)** The Java Development Kit is a full-featured [[Software Development]] kit that includes everything from the JRE, as well as compilers, debuggers, and tools to create Java programs.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=95)** This means we can just install the JDK, or Java Development Kit, and we get the JRE, or Java Runtime Environment, automatically.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=104)** So let's get the JDK installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (17), [[Web Servers]] (1), [[Software Development]] (1)
> **Env Vars:** jre (3), jdk (3)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (3)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Downloading Java on your computer](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=0)** - [Instructor] Let's install the [[Java]] Development Kit, or JDK, so that we can build Java applications on our computer.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=7)** Remember, the JDK includes the JRE, or Java Runtime Environment, so we will not only be able to build applications on our computer, but we will also be able to run them.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=20)** SE stands for Standard Edition, which is what we want, so we're going to click on this first link here.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=27)** In this course, we'll be using 13.0.2, because it is the latest version of the Java platform at the time of this recording.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=36)** When you are viewing this course, there may be newer versions available, which you're fine to use as well.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=42)** The difference between the versions matter more once you get deeper into the Java programming language, but for this course, since we are looking at the fundamentals, any version Java 8 and above is fine.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=54)** Now let's click download.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=57)** Next, you'll want to download the JDK for your specific operating system.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=62)** We'll accept the agreement, and since I'm running Mac, I'll click the first Mac option.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=71)** This will download the installer.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=74)** With the installer installed, we'll click the installer, and we'll begin to install the JDK version 13.0.2.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=84)** We'll click through these [[Windows]] and continue with the installation.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=90)** With the JDK or Java Development Kit installed, we can now build and run Java programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Windows]] (1)
> **Env Vars:** jdk (5), jre (1)
> **Versions:** 13.0.2 (1), java 8 (1), version 13 (1), 0.2 (1)
> **Exercise Files:** download the (2)
> **Prerequisites:** install (2)
> **UI Navigation:** click on (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the command line](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=0)** - [Instructor] The command line is a commonly used tool that can be used to build and run [[Java]] programs.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=6)** Before we use it with our Java programs, we need to talk more about what the command line actually is.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=13)** The command line acts as a user interface that we can use to interact with a computer.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=20)** Usually, when you want to open a folder or run an application, you use your mouse to click each item open.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=27)** When we use our mouse, we are using the computers graphical user interface.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=32)** We are using the graphics, what the computer is displaying with pixels to interact with the computer.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=38)** The command line I mentioned earlier is just another way we can interact with the computer.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=44)** The difference is instead of clicking and dragging, we can type in commands.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=49)** On Mac, we can access the built-in command line by opening the terminal program.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=55)** We can go to Spotlight Search and type in terminal, hit enter and this will open the program for us.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=64)** If you are a [[Windows]] user, you can search for cmd in the start menu and select command prompt from the list.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=71)** The command prompt is built-in, so you shouldn't have to install anything.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=76)** With the command line open, we can start typing in commands and make our computer complete tasks.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=82)** If you are on Mac, type ls and hit enter.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=86)** If you are on Windows, type dir and hit enter.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=91)** This command lists all the contents in our current folder.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=95)** The current folder is our home folder, so if we navigate to our home folder in the GUI or graphical user interface, we should see these contents.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=105)** When talking about commands and the command line, we often use the [[Microsoft Word|word]] directory instead of folder.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=112)** Now, if I want to change folders or directories and see the contents of that given directory, we use the command cd with the name of the directory.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=122)** cd stands for change directory.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=126)** On my Mac machine, lets say I want a cd or change directory to my desktop folder.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=133)** We can write cd desktop, hit enter, and now we will be at that location in our file system.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=141)** This is similar to clicking and opening our desktop folder from the GUI.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=146)** This works on both Windows and Mac.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=151)** In the desktop, we can run ls, then hit enter or if you are in Windows, you'll use dir and see the contents of this directory.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=161)** It's most likely a different output than what we saw before with this command because the contents of the desktop folder are often different than the contents of the home folder.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=170)** We can make a new folder on our desktop called [[LinkedIn]] Learning with the command make directory or mkdir, and then the folder name that we want to use for our new directory, in this case, LinkedIn Learning.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=185)** We'll hit enter and we see a new folder on our desktop.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=189)** This command works with both Windows and Mac.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=193)** Now, we can go into this new folder with cd linkedinlearning.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=200)** To go back to the previous folder, we can use cd dot dot.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=205)** Again, these commands work on both Windows and Mac.
>
> **[3:30](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=210)** Most of the examples we've shown here are about navigating your file system, but there are lots of different commands that exist that give you different information about your computer and compute things for you.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=222)** Next, we'll look at some Java specific commands that will help us build and run Java programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Java]] (4), [[LinkedIn]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** cd (6), make (3), ls (2), mkdir (1)
> **Tools:** command line (7), terminal (2), command prompt (2)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **Env Vars:** gui (2)
> **Definitions:** is a  (1), stands for (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### [Your first Java program](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=0)** - [Narrator] We are ready to write our first [[Java]] program.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=3)** Just like we write essays using some kind of [[Microsoft Word|word]] editor, we need a text editor to write our code.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=10)** I'm going to download Sublime Text, which is a common text editor that developers use.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=16)** Sublime is a tool that we will use to write our Java programs.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=20)** In the command line is tool that will help us build and run our programs.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=26)** With Sublime downloaded, we can open up a new window and write some code.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=31)** How do we write a Java program?
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=33)** Java is verbose programming language, so there is some boilerplate code that we add with every program.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=39)** When we say verbose, we mean that there are a lot of words we have to write, compared to other programming languages, in order to get a simple program to work.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=49)** For beginners, I think this is a good thing because it reveals concepts you may not have known, and it makes what you are trying to do very verbosely clear.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=58)** Every Java program has to have a class, and in fact, all Java code must be inside a class.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=65)** We'll talk more about classes later in the course, but we'll be creating a class and calling it "HelloWorld".
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=71)** We'll write "public class HelloWorld", the name of our class, and then open and close curly brackets.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=81)** The idea of Hello World is a bit of a tradition in computer science.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=85)** When you are first learning a new language, or framework, or technology, all you want to do is make the program output "Hello World", and that's exactly what we'll be doing in this lesson.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=97)** Let's put some more code in between the curly brackets.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=101)** We'll write "public static void main(String[] Args)",
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=114)** and then open and close curly brackets.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=117)** This may look a bit overwhelming, but don't worry.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=121)** All we need to know about this piece of code, is that it's called the main function, and it's the entry point to our program.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=129)** This means any code I put between the inner curly brackets will be executed by he program.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=135)** Everything we've written so far is boilerplate, or stuff we must have for any Java program to run.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=142)** The thing that will make our program unique, is what we add in those curly brackets.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=148)** As we said before, we want our program to output a "Hello World" statement.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=154)** We can do that by adding the following line of code.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=157)** We'll write "System.out.println" "("Hello World! It's me Kathryn!);".
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=173)** The "System.out.println" portion, gets us access to the outputting, or printing functionality of Java.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=180)** And in between the parentheses we write what we want to output.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=183)** In this case, hello, it's me Kathryn!
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=187)** You might be wondering what public means, and how it relates to Java, but that is out of the scope of this introductory course.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=194)** We will talk about what void and static mean in later chapters.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=199)** With our code done, we'll save this file by clicking file, and then save.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=206)** We'll name this file "HelloWorld", and give it the dot Java extension because it is a Java file.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=212)** Java conventions require the file name to be the same as the class name, so make sure the file name and the class name match.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=221)** You can save this anywhere you'd like on your computer.
>
> **[3:44](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=224)** We are going to be saving it to the learning Java folder on my desktop.
>
> **[3:50](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=230)** Alright, let's execute and run our program.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=233)** We just used Sublime to write our program, next we'll use the command line to build and run our program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (13), [[Microsoft Word|Word]] (1)
> **Tools:** sublime (4), command line (2)
> **Definitions:** is a  (5)
> **CLI Commands:** make (3)
> **Exercise Files:** boilerplate (2)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Hello World in the command line](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=0)** - [Instructor] Unlike other programming languages, [[Java]] code must be Compiled before it is run.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=6)** This means, we'll be using one command to compile our code, and another command to execute or run our code.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=13)** We won't be discussing the details of compilation in this course but it is important to know that we are taking our Java Source Code, and compiling it into Java bytecode.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=23)** Upon compilation, Java class files with the .class extension, will be produced, and they will be used when we run the program.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=32)** Before we compile our program, we need to go to the directory where the source code lives.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=37)** I'll type ls and well see these are the folders, that are in my home directory.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=42)** We'll need to go to our desktop directory, which is where this folder lives and our HelloWorld program is.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=48)** So we'll go cd Desktop ls and we'll see that learning Java folders is there, cd learning-java, and you can actually hit tab to auto complete the [[Representational State Transfer (REST)|rest]] of the folder name.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=62)** We'll hit enter to go into this folder ls and we see our Java file inside.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=69)** To compile our Java source code into Java byte code, we'll write javac and then the name of our file, HelloWorld.java.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=80)** We have just compiled our code.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=82)** Notice the Java class file that's now in our learning Java folder.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=86)** We can now execute our program.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=89)** To execute our program, we can write java and then the name of the Java class folder without the .class extension, HelloWorld.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=100)** We'll hit enter and we see the output right here in the command line.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=104)** Hello world, it's me, Catherine.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=106)** That's exactly what we wrote in our print statement.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=110)** Let's try running the command again.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=112)** We'll use the up arrow to access the previously run command.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=115)** Hit enter, and we see the same output in our terminal.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=120)** Now let's try changing our Java source code, so something else is printed out.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=126)** In our Java code, we'll add on the phrase and I love tacos.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=132)** We'll save this and try rewriting the program.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=137)** We'll hit that up arrow hit enter and we still see Hello World, It's me, Catherine.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=143)** Since we've changed the source code, we need to recompile and re-execute the program in order to get the latest version.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=151)** If we just re-execute, which we just did, we get the old version of the program.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=156)** To recompile we'll go javac HelloWorld.java.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=163)** This compiles it into Java bytecode, and then to run our program, we'll go java HelloWorld, and we get the, and I love tacos in the output.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=175)** Now, running these two commands, javac and java, can be annoying.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=180)** Especially if we are making lots of incremental changes to our code.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=185)** There are tools that exist that can make our lives as developers a lot easier, and that actually combine the functionality of a text editor, that's our sublime, and the Java commands in the command line.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=197)** We'll take a look at those next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (21), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** ls (3), cd (2), make (1)
> **Exercise Files:** source code (5)
> **Tools:** command line (2), terminal (1), sublime (1)
> **File Paths:** helloworld.java (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [Exploring an integrated development environment (IDE)](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=0)** - [Instructor] Over time, programs get larger and larger.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=3)** And although you can compile and run [[Java]] programs with the terminal, it's often faster to use an IDE.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=11)** IDE stands for integrated development environment and an assembly of software that we can use to build and run our Java programs, just like the command line.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=22)** The main difference is that this tool is built specifically for building and executing code and has a lot of built-in features specifically for that purpose.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=31)** It also has a GUI, or a graphical user interface, meaning we won't have to type in commands.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=37)** We can just click a button for our code to build and run.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=41)** Ultimately, just like we use Photoshop to edit photos, we can use a special software, an IDE, to edit and run our code.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=50)** There are many different IDEs, or integrated development environments, that you can write code with, but in this course, we'll be using IntelliJ, which is made by a company called JetBrains.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=63)** We'll click download.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=65)** Now, this IDE has a paid ultimate version and a community free version.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=70)** The community version will work fine for this course.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=78)** Let's open our IntelliJ.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=82)** We will not import settings.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=84)** We'll accept.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=88)** Here, you can choose what type of UI you want for your IDE, do you want dark mode or light mode, dark mode.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=98)** Every large-scale program you create should be in its own project.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=102)** Since we are learning the fundamentals in this course, we will be using one project for the whole course.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=110)** In the Project SDK setting, you should see your version of the JDK.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=115)** In my case, I downloaded 13.0.2.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=118)** If you do not have this, try re-downloading and installing the JDK.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=123)** We'll click next, we'll click next.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=127)** For the project name, we are going to call this LearningJava, and I'm going to put it in the learning-java folder for the course.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=137)** You could put this wherever you'd like.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=140)** We'll click finish.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=142)** All right, now IntelliJ is configured.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=146)** What, exactly, does this IDE have?
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=148)** On the left, we have the navigation pane.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=151)** This allows us to navigate to different files in our project.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=155)** The .idea folder holds [[Metadata]] about our project, but the main code for our Java program will be in the SRC folder, or the source code folder.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=166)** You'll also notice, in the external library section, our JDK is linked.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=171)** We'll be working more with this navigation pane in the next lesson.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=176)** At the top right-hand corner, we have some buttons that will allow us to run, debug, and step through our program.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=183)** We'll learn more about what debugging and stepping through the program mean later on in the course, but this play button acts as the Java C and Java commands from the command line.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=195)** Once we have a Java file created in the IDE, we'll be able to click this button and it will compile and run our program.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=203)** Right now, the button is grayed out, because we do not have a Java file with a main function configured in this IDE yet.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=212)** The middle portion is also blank right now, because we have not created and selected a Java file.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=218)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (9), [[Metadata]] (1)
> **Env Vars:** ide (8), jdk (3), gui (1), sdk (1), src (1)
> **Tools:** intellij (3), command line (2), terminal (1)
> **Cross-References:** in the next (2)
> **Analogies:** just like (2)
> **Versions:** 13.0.2 (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** source code (1)

#### [Hello World in an IDE](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=0)** - [Instructor] Let's create our first [[Java]] File in the IntelliJ IDE.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=5)** We'll left-click the SRC, or Source Code Folder, hover over New and click Java Class.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=12)** We'll call this class, Main.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=15)** This is still creating a Java File, but it's pre-populating a class called Main.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=21)** This middle area is the code editor and it looks a lot like what we saw in Sublime.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=27)** The code editor is where we can access the content of our Java Files.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=31)** And in this case, the content of the Main.Java File.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=35)** We can recreate some of the Java code we created before in Sublime.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=40)** Instead of typing out that long name function with public static void, we can just type Main and the IDE pre-populates it for us.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=50)** Remember when we talked about boilerplate code?
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=53)** Every Java program must have a Main function, so the IDE has shortcuts that make some of that boilerplate code easier and faster to write.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=63)** This shortcut, where we type in a [[Microsoft Word|word]] and the IDE completes it for us, is called code completion and this is one of the benefits to using an IDE.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=74)** In this Main function, we'll output something to the user, just like we did before with Sublime and the command line.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=81)** To output to the user, we can write: System.out.println, then whatever we want the system to output.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=89)** In this case, we'll say, "Hello World from the IntelliJ IDE!"
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=98)** And then we'll do a paren' and semicolon.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=101)** Now our program is ready to run.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=104)** To run this file, we can left-click the Main class, hover over Run 'Main.main' and click it.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=114)** Here, the first Main was the class Main and the second Main was the Main function.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=120)** By selecting Run 'Main.main', the IDE compiles the program and runs it for us.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=127)** There are no commands to type in, like before.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=130)** We just click the button and it runs.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=132)** After running the program, you may notice a small window at the bottom of the screen containing our output.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=139)** This window is called the Console and it's a text display where the executor of the program can see output messages.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=146)** Here we see, Hello World from the IntelliJ IDE.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=150)** When we ran this program, we had to do two button clicks.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=154)** We had to left-click the Main class and then select Run 'Main.main.'
>
> **[2:40](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=160)** What if we could run the program with just one button click?
>
> **[2:44](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=164)** At the top right-hand corner, click the play button.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=167)** Our program was just run again.
>
> **[2:51](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=171)** Congratulations, you just created and ran a Java program using the IntelliJ IDE.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=178)** What does this IDE do for us?
>
> **[3:01](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=181)** It contains a code editor where we write our code.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=184)** It also contains a debugger, which we will explore in a later chapter, and can use to figure out any errors in our program.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=193)** You may have already noticed the bug button, next to the play button in the IDE.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=198)** We will come back to that.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=200)** An IDE also has other features that make writing code easier, like the code completion we saw earlier.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=208)** Although an IDE is not necessary to write code, it can be very helpful because it has extra tools that make developing code a little faster and more straight forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Microsoft Word|Word]] (1)
> **Env Vars:** ide (13), src (1)
> **Tools:** intellij (4), sublime (3), command line (1)
> **CLI Commands:** make (3)
> **Exercise Files:** boilerplate (2), source code (1)
> **Definitions:** is called (2)
> **File Paths:** main.java (1)
> **Cross-References:** we talked about (1)


### 2. Building Strong Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [Primitive data types](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=0)** - [Narrator] In computer science, data is information that is stored or processed by a computer.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=7)** While that might seem fairly abstract, there are many data points we use in everyday life.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=13)** Your name, your age, the number of apples in your pantry, whether your kitchen light is on or off.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=20)** These can all be considered pieces of data, and we represent pieces of data in code using data types.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=29)** Similar to other programming languages, [[Java]] classifies different pieces of data with data types based on their value.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=37)** For example, there's a data type for letters and symbols, and there are various data types for numbers.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=43)** Ultimately, a data type provides a set of possible values, and if a piece of data is one of these values, it is classified as that specific type.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=54)** Java separates its data types into two main categories that are then broken down further into more distinct data types.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=63)** One of the categories is called primitive data types which consist of the most basic data types in the Java language.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=70)** The most important primitive data types include Boolean, int, double, and char.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=76)** There are other primitive types that exist in Java, but these are the most foundational.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=81)** The second category is called reference types, and we'll talk about reference types in a later lesson.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=88)** Diving deeper into these primitive types, the Boolean data type represents a true or false value.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=96)** This means the data piece of whether the kitchen light is on or off could be represented as a Boolean in code.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=103)** It might have the value true, or it might have the value false, but it can never be both.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=108)** It must be either true or false.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=111)** In int, short for integer, represents a whole number.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=115)** The number of siblings you have could be represented in code as an int.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=120)** You could have zero siblings, three siblings, 10 siblings, any whole number amount of siblings.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=127)** A double represents a decimal number.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=131)** With a double, you can represent your GPA, say 3.4, in Java.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=137)** The last primitive type we'll talk about is a char which is short for character.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=142)** A char represents a single letter or symbol.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=146)** Some possible values for a char could be your first initial or last initial, your favorite letter, or the hashtag symbol.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=155)** We classify these data types, Boolean, int, double, char, as primitive types because they are the basis in foundation for all other data types within the Java programming language.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=168)** Let's try using our primitive types in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7)
> **Definitions:** is called (2), short for (2), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** gpa (1)
> **Versions:** 3.4 (1)
> **Speakers:** - [narrator] (1)

#### [Data types and variables in Java](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=0)** - [Narrator] Let's create some data in [[Java]].
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=3)** In this lesson, we'll be creating a few pieces of data that could represent attributes of a given high school student.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=11)** Our program will have representations for a students age, GPA, first initial, last initial, as well as if the student has had perfect attendance so far this year.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=23)** Before we get to the code, let's assign a Java data type to each of these pieces of data.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=29)** As we mentioned in the last video, an age could be represented in Java with either an int or a double depending on how exact we want to be.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=39)** In this case, we'll be using an int to represent the age.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=43)** Potential values for a students GPA could be 3.4 or 2.7 or 4.0.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=51)** These are all decimal values, so the data type for a students GPA would be double.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=57)** A students first initial and last initial are each a single character, so both of these would be represented by the data type char.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=67)** A student can either have perfect attendance or not have perfect attendance, there's no in between.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=72)** So has perfect attendance should be a Boolean.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=77)** Let's try creating some Java code that represents these pieces of data.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=82)** We could represent a students age by just writing 15.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=87)** Then we could represent a students GPA with just 3.45.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=92)** However, we get errors.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=95)** What we've written are technically numbers and pieces of data, but in Java we save data in something called a variable.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=103)** A variable is a way to label data and reference it later in your program.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=108)** Instead of saying 15, we can create a label, say student age, and then assign a value to it, in this case, 15.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=117)** We still get an error here, and that's because we need to add a data type to the variable.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=123)** We can add int at the beginning of the line and then a semicolon at the end of the line to end the statement, and all of our errors are gone.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=133)** Congrats, you just created your first variable in Java.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=137)** As you can see, a variable has a data type, label, and value.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=142)** In this case, the data type is int, the label is student age, and the value is 15.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=149)** The equal sign is an assignment operator that assigns the int variable with the label, student age, and the value 15.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=158)** Let's create the next piece of data in Java, a students GPA.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=163)** We need to create another variable, and we decided before that that data type would be double.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=169)** So let's write double and give the variable the label studentGPA, and then we'll assign it the value 3.45 and add a semicolon to end the statement.
>
> **[3:02](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=182)** Second variable, done.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=184)** Three more to go.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=186)** Next we'll represent a students first initial with the data type char studentFirstInitial as the label, and give it the value K.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=197)** We'll do something similar for the students last initial with the data type char label studentLastInitial and give it the value H.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=209)** For all of these variables, you could put a different value as long as it can still be represented by that given data type.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=217)** For example, you couldn't put a letter or symbol as the value of student age, but you could put another whole number, say 17 instead of 15.
>
> **[3:47](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=227)** The last piece of data we want to represent is has perfect attendance.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=232)** Like the other variables, we'll write the data type, Boolean, the label, hasPerfectAttendence, and then give it the value true.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=243)** You may notice that our variable names are grayed out, that's because although we've created a piece of data and represented it in Java, we don't use or reference it in our program.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=255)** One way we could reference it is by printing out the value of the variable to the console.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=261)** We'll write System.out.println, and instead of adding quotes, we'll just write the name of the variable.
>
> **[4:28](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=268)** Since studentAge has the value 15, we'll print out 15 to the console.
>
> **[4:35](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=275)** We'll save this and then click the play button or you could left click and hit Run Main.main, and we get 15 in our console.
>
> **[4:47](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=287)** Let's try this with the other variables.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=289)** We'll write System.out.println studentGPA System.out.println studentFirstInitial System.out.println the last initial and then the has perfect attendance.
>
> **[5:15](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=315)** We'll run this again and we get 15, 3.45, K, H, and true as expected in the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8)
> **Code Identifiers:** studentgpa (2), studentfirstinitial (2), studentlastinitial (1), hasperfectattendence (1), studentage (1)
> **Versions:** 3.45 (3), 3.4 (1), 2.7 (1), 4.0 (1)
> **Env Vars:** gpa (5)
> **Cross-References:** we mentioned (1), in the last (1), later in (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Strings in Java](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=0)** - [Instructor] So far, we've learned about a few data types.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=3)** These data types, int, Boolean, double, char, were primitive types.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=10)** These are great for storing a whole number, true/false values, a single letter or symbol, but what if you wanted to store and reference some text, something that requires more than just a single character?
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=23)** In this lesson, we'll be looking at the second overarching category of [[Java]] data types called reference types.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=30)** And our first reference type is called a string.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=33)** A string is a sequence of ordered characters.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=37)** Before, we could represent a single character with a char, but now we can represent a [[Microsoft Word|word]] or a person's name with the string data type.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=46)** To create a string, we surrounded the series of characters with quotation marks.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=52)** This represents a string value.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=54)** To create a string variable, we just state the data type string, give the variable a label, and then use the assignment operator to assign the variable the string value.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=66)** We should also note that the order of characters does matter.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=70)** So let's say we have a string with "desserts," and then we have a different string with "stressed."
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=76)** Although these two strings have the same letters, they would not be considered as having equal value, because the letters are in different orders.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=86)** So what makes a string a reference type?
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=89)** Unlike primitive types and the other data types we've looked at, a string is built out of characters.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=96)** It is not a basic data type.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=98)** It is created out of organizing char data pieces in a significant way.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=103)** The deeper meaning behind reference types is out of the scope of this course, but I highly recommend you check out [[[[Programming Foundations]]- [[Data Structures]]]] to find out more.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=116)** Now that we know about strings, let's create a string in Java.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=121)** Using our program from the last lesson, we'll add a studentName variable that holds the student's name.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=128)** We'll write String studentName, and in this case, the student's name will be Kayla Hammon.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=137)** With the variable created, we'll print it out with System.out.println and the variable name studentName.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=146)** We'll run this in the console.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=149)** And here we see Kayla Hammon.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=152)** Notice in the value of studentName, I included the student's first and last name.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=158)** This is a design choice.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=161)** Instead, we could create two separate strings, one holding the first name and another holding the last name.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=168)** Let's go ahead and do that.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=170)** Instead of studentName, we'll write studentFirstName, and we'll move Hammon to String studentLastName and have Hammon be the value.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=183)** And then this is red because studentName no longer exists, but studentFirstName does, so we'll print out the value of studentFirstName, as well as the value of studentLastName.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=195)** We'll save this.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=197)** Run it.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=200)** And we see Kayla and Hammon separate in the console.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=205)** Next, we'll look at strings in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Microsoft Word|Word]] (1), [[Programming Foundations]] (1), [[Data Structures]] (1)
> **Code Identifiers:** studentname (6), studentfirstname (3), studentlastname (2)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Using indexes with strings](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=0)** - [Narrator] Now that we have the student's first and last name separated we can calculate the student's first initial from the first name and last initial from the last name.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=11)** All we need to do is somehow grab the first letter of the first name and the first letter of the last name to create each initial.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=19)** Earlier we talked about how the ordering of the letters within a string matters.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=24)** And this is one place where that comes into play.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=27)** For the string Kayla, we say K is at index or location zero.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=32)** A is at index one, Y is at index two, L is at index three and A is at index four.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=41)** This means to calculate the first initial of the first name we'll want to access the character at index zero, or the zeroth slot in the string.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=52)** To do this we can use a special string operator to access the letters inside first name.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=58)** To grab the first character of the first name we can use an operation called charAt.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=65)** CharAt allows us to access a character at a specific location within a string.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=70)** It takes one input and that is the index or location of the character we want to access.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=77)** Going back to the code, we can change the value of studentFirstInitial to using charAt on studentFirstName.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=86)** We'll write studentFirstName and then to use the charAt operation, we'll write .charAt.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=94)** Next we'll add the location we want to access within StudentFirstName which is zero for the first initial.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=101)** We'll save this and run it.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=104)** And scrolling down we see studentFirstInitial is the second to last thing to be printed out and we see K in our console.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=113)** Exactly what we expect.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=117)** Looking at the value of studentFirstInitial we write studentFirstName because that's the variable that holds the string we want to access the character from.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=127)** We write dot because the operation we want to use is a string operation and we get it for free with the string data type.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=135)** Then we write charAt because this is the operation we want to use.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=140)** And finally we add our input which is zero because we want to access the character at the zeroth index.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=148)** The output of this operation is K and that's what saved to the studentFirstInitial variable.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=155)** Let's do the same for studentLastInitial.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=158)** We'll write studentLastName because we want the first initial of the last name and use charAt to get that first initial of the last name with zero.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=169)** We'll save this, run it and in our console, we get H as expected.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=176)** Great, we just calculated data from another data piece.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=181)** A student's initials from a student's name.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=184)** We also learned that the concept of a data type consists not only of the different values it can store, but also the different operations we can use with it.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=194)** For example our string data type has the charAt operation.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=199)** There are other string operations like charAt that exist that can only be performed with strings but they are out of the scope for this course.

> [!info]- Semantic Content
>
> **Code Identifiers:** charat (8), studentfirstinitial (4), studentfirstname (3), studentlastinitial (1), studentlastname (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Concatenating strings in Java](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=0)** - [Instructor] So far, we've printed out the string, "Hello world," individually, and a few variables individually, but now we are going to learn how to print them together in the same line.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=12)** To do this, we need to combine string values with variables that hold strings in a print statement.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=20)** Using the example from the last lesson, we can print out a student's full name, and say that student has a GPA of X, with X being the student's current GPA.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=31)** In the code, we'll write System.out.println, and then access the value of the student's first name, with studentFirstName.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=42)** To add on the last name, we'll add a plus sign for concatenation, combining the value of these two strings.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=51)** Then we'll type the variable that holds the student's last name, studentLastName.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=57)** If we put the student's first and last name together like this, there will be no space between the first and last name when it is printed out to the user.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=68)** We can add a space by adding a literal string, so a string that is not evaluated from a variable, with a space.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=76)** We'll want to concatenate the other side, so we'll add a plus button between the space and studentLastName.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=83)** For the next part of the print statement, we want to add, has a GPA of, and then the student's GPA.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=91)** We'll tack on the literal string of "has a GPA of," with the plus sign, and then on the other side, we'll also concatenate the student's GPA.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=102)** This value is stored in the studentGPA variable.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=107)** We'll save this, run the program, and in the console, we see the first and last name, Kayla Hammond, has a GPA of, and then the student's GPA, 3.45.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=121)** Next, we'll take a deeper look at how we input and output strings to the user.

> [!info]- Semantic Content
>
> **Env Vars:** gpa (8)
> **Code Identifiers:** studentlastname (2), studentfirstname (1), studentgpa (1)
> **Versions:** 3.45 (1)
> **Speakers:** - [instructor] (1)

#### [Input and output in Java](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=0)** - So far, we've learned how to output information to the user using System.out.println().
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=7)** We've created several variables and printed out their values to the user as well as concatenated their values to String literals.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=15)** In this lesson we'll look at how we can create a program that allows the user to input information affecting the program's output.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=24)** Thinking back to our student program, we might need to update a student's GPA.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=29)** With some updates to the code, we can let the user dynamically change the value of a student's GPA.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=36)** In the previous lesson, we wrote a print statement that tells a given student their GPA.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=42)** Before having the user update their GPA, we should ask the user what value they want to update the GPA to and that's the print statement I've added here.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=53)** Next we need to get access to the user's input and update the value of the student GPA variable.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=59)** To do this, we can create a Scanner with System.in and save the Scanner in the variable labeled input.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=67)** This is the opposite of the System.out we have been using to print to the console.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=73)** The Scanner has some built in operations that will allow us to retrieve input from the user.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=79)** This means we'll write input = new Scanner (System.in).
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=87)** This creates a new Scanner that will scan System.in for the users input.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=94)** We get an error here because we need to add a data type for our variable.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=98)** The data type here is Scanner.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=102)** There are lots of data types in [[Java]], but for now you can think of the Scanner as a tool that has operations that allow us to get input.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=111)** In order to use those operations, we have to create a Scanner first.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=116)** We also need to import java.util.Scanner in order to use the Scanner.
>
> **[2:04](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=124)** Think of it as a special data type that we need to import in order to use.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=130)** With the Scanner created.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=131)** We can use the Scanners next double operation to get the next double or decimal value that the user enters in the console window.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=140)** Similar to how we used the chart at operation on Strings.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=144)** We'll use the nextDouble operation on our input scanner.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=148)** so we'll write input.nextDouble, we'll want to save the value in our student GPA variable, so we'll add student GPA = to assign the user's inputed value to the student's GPA variable.
>
> **[2:44](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=164)** Since we've already introduced and defined the student GPA variable before, we do not need to add the data type because Java already recognizes this variable as a double from its initial definition and it can only store double values.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=179)** Now we'll create a nice output String so the user can see that the student GPA has been updated.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=197)** Let's run the program.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=201)** Kayla Hammon has a GPA of 3.45 what do you want to update it to?
>
> **[3:26](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=206)** We'll do a 4.0, Kayla Hammon now has a GPA of 4.0.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=213)** We'll run it again, Kayla Hammon has a GPA of 3.45 let's update it to 2.75 and we see that in the console.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=223)** Now you might be thinking, wouldn't it be awesome if my program could automatically calculate the GPA given a series of grades?
>
> **[3:52](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=232)** As we go deeper into the fundamentals of Java, we'll be able to create more complicated programs like this.
>
> **[3:59](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=239)** You also might be thinking, does this scale?
>
> **[4:02](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=242)** No. Right now it only works for one student.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=246)** For the way we have the program structured, we would have to execute this program and edit some of the source code for every student in the class.
>
> **[4:14](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=254)** Also, nothing about the update is saved eternally.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=257)** The update works for the programs single execution, but it does not save indefinitely.
>
> **[4:24](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=264)** There are ways to make this program more scalable.
>
> **[4:26](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=266)** But again, this chapter is meant to be an introduction for how we can store simple data pieces in the Java programming language and reference them later in the program. We will be building more complicated programs in later chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5)
> **Env Vars:** gpa (15)
> **Versions:** 3.45 (2), 4.0 (2), 2.75 (1)
> **Code Identifiers:** nextdouble (2)
> **Analogies:** think of it as (1), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Exercise Files:** source code (1)

#### [Solution: Find last character](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=0)** - [Instructor] Let's find the last character in the string.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=3)** When approaching a problem like this, I find it helpful to write down some of the facts we know.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=9)** First, we know that characters are accessed by index.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=15)** In fact, we can access a given character with the charAt method.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=19)** (keyboard faintly clicking) The last character in the string is located at the length of the string minus one.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=27)** (keyboard faintly clicking) We can combine these two ideas to find the last character in the string.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=38)** The string in question is the text, so we'll run charAt on that string.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=44)** (keyboard faintly clicking) The input for charAt is an index, and it will return the character at that index.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=52)** We know the last character lives at the length of the string minus one, so let's add that.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=58)** To get the length of the string, we'll use text.length.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=63)** Then we subtract one here because indices start at zero.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=68)** This will give us the last character in the string.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=72)** Let's run it.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=76)** Our code works as expected.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=78)** Now, you might be thinking that the format of this code looks very different from what we're using in the course, and that's correct.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=86)** We've mostly worked within the main method and printed items to the console.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=90)** We haven't introduced functions or the keyword static or return types, which are all shown with this challenge, but all of that is coming in later chapters of this course.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=103)** Sometimes you have to work with code you aren't familiar with, and this is great practice for that.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Identifiers:** charat (3)
> **Non-Speech:** (keyboard faintly clicking) (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Control Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [Mapping out program control flow](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=0)** - [Instructor] In the last chapter, we've looked at how we can represent data in [[Java]] using data types and variables, as well as how to input and output data.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=9)** In this chapter, we are going to add some [[Decision-Making]] logic, that will allow our programs to have different outcomes.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=17)** We saw this a little bit in the last lesson, when we printed out whatever the user inputted, but we can create more sophisticated [[Control Flow]], using conditions.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=28)** Let's break this down.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=29)** What is a control flow?
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=31)** A program's control flow is the order in which the program's instructions are executed.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=37)** All of the programs we've looked at so far execute one statement after the other.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=42)** We created a variable, then printed the variable.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=45)** Or we created one variable and then another variable and then printed them both.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=51)** Each line of code was executed sequentially.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=54)** For example, line one is executed before line two, line two is executed before line three and so on.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=63)** We can manipulate, which line of code is executed with special control flow statements and conditions.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=70)** With these control flow statements a line of code might never be executed, it might be executed once or it might be executed multiple times.
>
> **[1:21](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=81)** The conditions determine how many times, if at all, a given line of code is executed.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=87)** In this lesson, we'll take a look at the control flow of a virtual fortune teller program.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=92)** With the fortune teller, the user will pick a number between one and 10.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=97)** Depending on the number the user picks, the user will receive a fortune.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=103)** Let's dive into this diagram.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=105)** This maps out the control flow of our program and describes how we want our program to work.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=111)** Notice, everything is not sequential.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=114)** We start at the start and the fortune teller, our program, will ask the user to pick a number between one and 10.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=122)** The circle represents the start and the parallelogram represents input or output.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=128)** The diamond represents the decision and that decision determines the choice and ultimately which print statement in fortune is run.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=137)** Our one decision inside the diamond is asking the question, is inputtedNum less than five?
>
> **[2:24](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=144)** This is our condition.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=146)** Based on whether this is true or false, one of the true print statements will run.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=151)** If the inputted condition is less that five, meaning the condition is true, the lower left lock is run.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=158)** If the inputtedNum is not less than five, meaning it is equal to five or greater than five, the lower right block is run.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=166)** Only one of the fortune print statements will be run.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=169)** Not both or neither.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=172)** Now, we know how to program some of this.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=174)** We know how to output, pick a number between one and 10.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=178)** We also know how to get access to the users input and save it to a variable.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=183)** We do not know how to implement or write Java code for a decision block.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=189)** We call these decision blocks or control flow statements, because they make a decision about which code statements to run on each execution of our program.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=199)** In our case, the decision block is asking the question, if with the condition inputtedNum less than five.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=208)** Depending on whether the condition is true or false, meaning if inputtedNum is less than five or not, a given code statement is run.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=217)** Of course, right now, this is just a diagram.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=221)** It's a representation of how we want our program to work in Java.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=226)** Now that we have an idea on how we want our program to work, we can take this decision block in the diagram and break it down piece by piece, so that we can implement it in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (8), [[Java]] (4), [[Decision-Making]] (1)
> **Code Identifiers:** inputtednum (4)
> **Cross-References:** in the last (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Operators in Java](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=0)** - [Instructor] Thinking back to the decision block in our [[Control Flow]], we have three main components.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=6)** We have a condition, the code that gets run if the condition is true, and the code that gets run if the condition is false.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=13)** To simplify our condition, we can just write out our condition with the less than sign instead of writing it out in English.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=20)** This is closer to what it will look like in our code.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=23)** Ultimately, the value of inputting them or the number that the user inputs will determine which print statement is run, which is exactly what we want.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=33)** We call the less than sign a relational operator.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=37)** Its inputs are inputtedNum and five.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=40)** And the relational operator, less than, states a comparison between these two inputs.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=46)** The result of this overall comparison will evaluate to either true or false.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=51)** Since the inputtedNum less than five comparison evaluates to a Boolean, we call it a Boolean expression.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=58)** And a Boolean expression can be used as a condition for our decision blocks.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=62)** Of course, less than is just one relational operator.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=66)** There are many others we could use here instead.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=70)** This is a list of other relational operators we can use in our conditions.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=75)** If we wanted to make our relational operator be less than or equal to instead of just less than, we can add an equal sign and it would test if the inputtedNum is less than or equal to five.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=87)** Similarly, for the greater than sign, we would just add an equal sign to test if the inputtedNum is greater than or equal to eight.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=96)** To check for equality, we would use double equal signs and this would check if the inputtedNum is equal to eight.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=103)** If it is, the statement would be true.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=105)** If not, the statement would be false.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=108)** To check for inequality, we use an exclamation point and an equal sign.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=113)** In this case, the statement would be true as long as inputtedNum does not equal three.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=118)** It would be false in the case that inputtedNum equals three.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=123)** Ultimately, a condition in the decision block evaluates to true or false depending on some variable.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=130)** That's what makes it a condition that can be evaluated during the program's execution and manipulate a program's control flow.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=138)** Now that we have an idea of how [[Decision-Making]] works in our programs, let's try implementing the fortune teller logic in [[Java]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (2), [[Decision-Making]] (1), [[Java]] (1)
> **Code Identifiers:** inputtednum (7)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Decision-making with if in Java](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=0)** - [Instructor] Let's review our Fortune Teller program.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=3)** There are three main parts to this program.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=6)** First, we ask the user to pick a number between one and 10.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=11)** Next, we output the user's fortune depending on which number is inputted.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=16)** Let's implement this program.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=19)** In the code, we already have a print statement that asks the user to pick a number between one and 10.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=25)** We also have a scanner that reads in the next int a user inputs with the nextInt operation.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=32)** We save the output in a variable called inputtedNum.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=37)** Now, we have to make a decision in our program.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=40)** If the inputtedNum is less than five, the program should output the good luck fortune.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=45)** If the inputtedNum is equal to or greater than five, the program should print out the shoe selection fortune.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=53)** Before, we were just using blocks but this is a specific type of [[Control Flow]] statement that starts with an if so we call it an if statement.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=63)** An if statement is a control flow statement, where if the condition is true, it performs some kind of action.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=71)** In this case, our condition is inputtedNum less than five.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=75)** The condition will either be true or false.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=79)** For our program, if an inputted number is less than five, meaning the condition is true, then we execute the code in the if block or in the curly brackets.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=89)** In this case, if the inputtedNum is less than five, we would print out enjoy the good luck a friend brings you.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=97)** This print statement would only be executed if the condition is true meaning inputtedNum is less than five.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=104)** So what if inputtedNum is not less than five?
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=107)** Then the condition evaluates to false.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=110)** When we mapped out our program in an earlier lesson, we said that if inputtedNum was not less than five, then we wanted to print out the other fortune.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=120)** To do this, we add an else statement to our if statement.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=125)** The curly brackets with the else statement encompass the code that will be run if the condition is false.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=131)** Similar to the if block, the code inside the else block only runs if the condition is false.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=138)** We don't always have to have an else block associated with an if block but we do in this case because we want to perform an action if the condition is not true.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=149)** Let's add an if statement to our code.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=151)** We'll write if and then our condition, inputtedNum is less than five, we'll create our if block with the curly brackets and we'll write System.out.println and then we'll write the else block.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=173)** And there we have our if else.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=176)** Only the if block or the else block will be run in an execution of the program because the condition cannot be true and false at the same time.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=185)** The condition can be true or it can be false but only one fortune will be printed.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=191)** This means that the code inside the if block doesn't know about the code inside the else block and the code inside the else block doesn't know about the code inside the if block.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=201)** This will become more important later one.
>
> **[3:23](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=203)** Let's run the program.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=205)** We'll click the play button, pick a number between one and 10, we'll pick three.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=211)** We get the first fortune.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=212)** Enjoy the good luck a friend brings you and that's because three is less than five.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=218)** We'll run the program again, we'll choose five.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=222)** In this case, five is not less than five, it's equal to five and so we get this second fortune, your shoe selection will make you very happy today.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=232)** We'll try one more time.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=233)** We'll put in nine as our input and we get that second fortune again because nine is not less than five.
>
> **[4:00](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=240)** This condition is false.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=242)** Next, we'll take a look at a concept called scope and show how it relates to if statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (2)
> **Code Identifiers:** inputtednum (9), nextint (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Understanding scope in Java](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=0)** - [Instructor] In the Fortune Teller program, during the program's execution, only the if block or the else block was executed.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=8)** All of this had to do with the topic called scope.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=11)** Scope refers to the region of the program where a piece of code is accessible or in which it can be used.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=19)** Every time we use curly braces in [[Java]], we are creating a block in the program.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=24)** This is why the if block and the else block are separate.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=28)** They are in different sets of curly brackets.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=31)** Why does this matter?
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=33)** Let's say I created an int variable named favoriteNumber, with the value, five, in the if block.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=40)** This variable scope is within the block in which it was created.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=44)** That's where the variable is accessible and can be used.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=48)** I can reference it or change its value anywhere inside the if block.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=53)** However, since it was not created in the curly braces of the else block, it cannot be used in the else block, because the else block is outside this variable's scope.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=64)** Now, let's say we created a string variable called favoriteFood outside the if-else block in the main function and gave it the value, pizza.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=75)** Since favoriteFood is created outside the if-else block in the parent set of parentheses, this variable can be accessed and assigned a new value within both the if and else block.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=87)** The favoriteFood scope, or where favoriteFood can be accessed, is anywhere within the curly braces it was created in.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=95)** Let's take a look at some other types of [[Control Flow]] statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Control Flow]] (1)
> **Code Identifiers:** favoritefood (4), favoritenumber (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [While loops (conceptually)](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=0)** - [Instructor] If statements aren't the only way we can add decision making to our programs.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=5)** We also have loops.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=7)** A loop is similar to an if statement, except that it allows code to be executed repeatedly, based on a Boolean condition, instead of just one time.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=17)** There are several different types of loops in [[Java]], but the one we'll be focusing on in this course is the while loop.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=25)** A while loop looks like this.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=27)** We start at the start, and then follow the arrow to check a condition.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=31)** If that condition evaluates to true, we execute a series of statements, and then check the condition again.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=38)** If that condition is false, we exit the loop, and continue to the [[Representational State Transfer (REST)|rest]] of the code.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=44)** On your smartphone, you've probably listened to music, and if you find a song you like, you put it on repeat.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=50)** When a song is on repeat, it plays over and over again until you take it off repeat.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=57)** We can represent this type of functionality in a Java program.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=61)** Filling in the condition of the while loop, we can say our condition is: is current song on repeat?
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=69)** For the statements to execute, if the condition is true, we can print, "Playing same song on repeat," and give an option for the user to take the song off of repeat.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=79)** If the condition is false, we can print, "Playing next song."
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=84)** Now, if is current song on repeat is never true, then playing same song again will never be printed.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=91)** We'll never repeat the song.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=93)** If the user never takes the song off repeat, then the condition will always be true, and playing same song again will be continuously printed.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=103)** That's why we call it a while loop.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=105)** While the condition is true, keep running these given statements.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=109)** Now that's while loop.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=110)** Let's try implementing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [While loops in Java](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=0)** - [Instructor] Let's create a while loop in [[Java]].
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=3)** In the previous lesson, we diagrammed a while loop to represent a song playing on repeat.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=9)** With this diagram, while the current song is on repeat, we play the song again.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=15)** If the current song is not on repeat when we check the while loop condition, we exit the loop and play the next song.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=22)** If the user never takes the song off of repeat, then the current song will play forever.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=27)** We only exit the loop if the user takes the song off of repeat.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=32)** Let's jump to the code.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=34)** The first thing we do is create a scanner to get us set up for user input.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=39)** We also have a Boolean variable that represents if the current song is on repeat and it equals true.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=47)** Now, for the while loop.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=49)** We want to say while our song is on repeat, meaning isOnRepeat is true, we want to run a series of statements.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=57)** To do this we'll use the keyword while and then our condition in parentheses.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=62)** Then we'll use open/close curly brackets to create the while block for the statements we want to run while the condition is true.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=70)** Let's add those statements.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=72)** We'll start by printing out that the current song is playing.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=77)** On the next line, we'll ask the user if they want to take the song off of repeat.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=84)** With these print statements done, we'll get access to the user's input with input.next and save it in a variable called userInput.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=94)** Then, we'll use an if statement to check if the user's answer is yes, meaning we should change isOnRepeat to false.
>
> **[1:41](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=101)** For the condition we'll write userInput.equals("yes").
>
> **[1:48](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=108)** Equals is a string operation we can use to check if the user input has the exact value yes.
>
> **[1:55](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=115)** In the curly braces, we'll set isOnRepeat to false.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=121)** All right, we're almost done.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=123)** We just need to add a print statement for when the program exits the loop that says "Playing next song".
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=130)** So after the while block we'll write System.out.println("Playing next song").
>
> **[2:18](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=138)** We'll save this and run the program.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=142)** Playing current song.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=144)** Would you like to take this song off of repeat?
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=146)** If so, answer yes.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=148)** We'll say yes, we want to move on to the next song and it says "Playing next song".
>
> **[2:34](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=154)** When we went into the while loop, userInput did equal yes and so isOnRepeat was set to false, this means on the next check, isOnRepeat was false and we proceeded to play the next song.
>
> **[2:46](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=166)** Let's run it again.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=168)** Do we want to take the current song off of repeat?
>
> **[2:51](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=171)** We'll say no and play the current song again.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=174)** Do we want to take it off repeat now?
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=176)** No.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=177)** In this case, isOnRepeat remains true, the input is never equaling yes and so isOnRepeat is never set to false.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=184)** We could say no again.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=186)** And now we'll finally say yes and that will set isOnRepeat to false and will play the next song.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=193)** In the next video, you'll get a challenge that will test what you've learned in this chapter.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=197)** Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** isonrepeat (8), userinput (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Leap year checker](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=0)** - [Instructor] Let's write some code to determine if a given year is a leap year.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=4)** We know if a year is divisible by four, it is a leap year.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=9)** To check if this is true for our year we can use an IF statement.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=24)** Here we're using the modulo operator to find the remainder of the year divided by four.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=31)** If the remainder equals zero, then the year is evenly divisible by four and it is a leap year.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=38)** Now, if that year is also divisible by a hundred, it is not a leap year unless it's also divisible by 400.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=46)** Let's add those extra IF statements.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=76)** Here if the year's evenly divisible by four and it's evenly divisible by 100, but not divisible by 400, we return false.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=87)** If it's divisible by all three numbers, we return true.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=92)** If the year is divisible by four but not 100, we also return true.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=97)** Let's run our code.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=102)** Our implementation works as expected.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=105)** However, it is a little hard to read and understand.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=109)** To collapse this logic, we can use Boolean operators.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=127)** These operators will allow us to combine the conditions in the IF checks to create simpler statements.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=134)** Now, the cases where we want to return true are those where the number is divisible by four and not 100 or where it's divisible by four, 100 and 400.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=146)** Let's write out the first case.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=150)** When the year is divisible by four and not divisible by 100, we want to return true.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=177)** Here we use the And Boolean operator to combine both Boolean conditions.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=185)** The IF condition will only be true if both inputs to the Boolean operator are true.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=192)** Then we can add the second condition where the number is divisible by four, 100 and 400.
>
> **[3:40](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=220)** Here we use the OR operator to combine this first set of conditions with the second set of conditions.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=229)** Either the first or second set needs to be true in order for the year to be a leap year.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=238)** Now, if a year is divisible by 400, it is also divisible by four and 100 because these are factors of 400.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=248)** This means we can eliminate the two other checks in the second set of conditions.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=257)** The IF condition will only return true if the year is divisible by four and not 100 or if the year is divisible by 400.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=267)** To make this even simpler, we can eliminate the if condition and just return the result of the Booleans.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=289)** This gives the same result, but with simpler code.
>
> **[4:52](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=292)** Let's run it.
>
> **[4:57](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=297)** Our code works as expected and it's simple and easy to read.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### 4. Debugging in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Debugging syntax and logical errors](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=0)** - [Instructor] When we are writing code sometimes we can make a mistake and get an error.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=5)** These errors can cause our code to give the wrong output or crash our program entirely.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=11)** And you've probably already experienced a little bit of this in the course so far.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=16)** You may have heard of the term debugging before.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=19)** And this process involves locating and correcting code errors in your program.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=24)** We often call these errors bugs, because computer scientist pioneer Grace Hopper coined the term bug when she found a moth causing an error in her early computer.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=35)** In this chapter we'll look at some strategies for how to debug your programs and how to fix some common errors.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=43)** Before we can solve errors, we have to understand how our program is executing code so that we can find them.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=50)** One way we can understand how our program is working more fully and locate an error is by using print statements.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=58)** In this lesson, we'll take a look at our multiple choice program from the last chapter, but with a few errors introduced.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=67)** The first errors in the program we going to look at are syntax errors, or syntax bugs.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=74)** Syntax errors often cause your program to fail before it's even executed.
>
> **[1:18](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=78)** Because the computer has to understand your code in order to run it.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=83)** This means if something's misspelled, or a certain symbol is missing, the program won't run, because your code is not in the right format.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=92)** So let's find some syntax errors in this program.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=96)** These can be easier to find with an IDE, because an IDE tells you what line has the error.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=103)** It may not be that specific line you have to change, but it's probably something around it.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=109)** Let's take a look!
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=110)** Here on the right we have some red symbols, and so if we click on the first one, here we have an error, it says, "expected semicolon."
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=120)** This is a syntax error, and all we have to do to fix it is add the semicolon, we were just missing a semicolon.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=128)** This happens to everyone.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=131)** Let's scroll down.
>
> **[2:13](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=133)** Here we have correctAnswer in red.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=136)** Cannot resolve symbol 'correctAnswer'.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=139)** And it has the error here as well.
>
> **[2:21](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=141)** Let's scroll up to the definition of correctAnswer to see its value, as well as what the variable's called.
>
> **[2:28](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=148)** Here, we've misspelled the variable.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=150)** We need to add an r to our correct answer for correctAnswer.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=155)** With the r added, our errors go away.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=159)** Let's save this and run the program.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=162)** What is the largest planet in our solar system?
>
> **[2:45](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=165)** We'll just say jupiter.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=167)** And it says I'm incorrect.
>
> **[2:49](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=169)** The correct answer is saturn.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=173)** So what if I go, "earth?"
>
> **[2:57](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=177)** It says it's saturn.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=179)** So I imagine if I type in saturn it will tell me I'm correct.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=184)** And it indeed does.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=187)** All right, so we can run the program, but there are still some errors here.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=191)** One bug is that although I put in the correct answer, Jupiter, it told me I was incorrect.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=198)** These errors are different from syntax errors because they deal with the logic of our program.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=205)** We call these errors logical errors.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=209)** A logical bug is an error where the program is able to run but it doesn't act as the user expects, and that's exactly what we're seeing here.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=218)** Jupiter is the correct answer, but the program doesn't know it's the correct answer.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=223)** In order to debug this, we often look for parts of the program that aren't working as expected.
>
> **[3:48](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=228)** Find its respective code, and in this case, add some print statements to find it, and fix it.
>
> **[3:55](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=235)** Going back to the code, let's try outputting what the value of correctAnswer is, as well as what the value of our input is.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=243)** To make sure it's getting the right input, as well as the correct answer is what we want it to be.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=248)** So we'll write, System.out.println(input).
>
> **[4:13](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=253)** And then the correctAnswer.
>
> **[4:16](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=256)** We'll save this.
>
> **[4:18](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=258)** We'll run it.
>
> **[4:20](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=260)** We'll type in jupiter.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=263)** In the console, our input is shown as jupiter, which is what we expect.
>
> **[4:28](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=268)** But the value of correctAnswer is actually saturn.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=272)** If we scroll up to where correctAnswer is defined, we see its value is choiceThree.
>
> **[4:38](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=278)** If we go to where choiceThree is defined, its value is saturn.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=283)** The correct answer should be choiceTwo, so we'll change choiceThree to choiceTwo.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=289)** And now our program is fixed.
>
> **[4:52](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=292)** Let's take out our print statements and run the program again.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=301)** We'll try it with jupiter.
>
> **[5:04](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=304)** And that is the correct answer.
>
> **[5:06](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=306)** Let's try it with one of the incorrect answers, so in this case we'll say saturn.
>
> **[5:11](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=311)** And it says that is incorrect, the correct answer is jupiter.
>
> **[5:16](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=316)** We debugged the code.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=318)** Now, this is a fairly trivial example.
>
> **[5:21](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=321)** But as our programs get more complicated, understanding the values of our variables and the way our program is executing code becomes more and more important.

> [!info]- Semantic Content
>
> **Code Identifiers:** correctanswer (8), choicethree (3), choicetwo (2)
> **CLI Commands:** find (5), make (2)
> **UI Navigation:** scroll up (2), click on (1), scroll down (1), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** ide (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Debugging with an IDE](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=0)** [Narrator] - Adding print statements for debugging and removing them later on can get a little annoying, but there is another way that we can debug our programs.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=10)** At the beginning of the course, we installed an IDE to compile and run our [[Java]] programs, but there is another benefit to using an IDE.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=20)** An IDE comes built in with some debugging tools that we can use to find and solve errors in our programs.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=28)** We solved one already, when our variable name was misspelled and a message popped up, saying the symbol cannot be found.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=36)** Now it's time to dig a little deeper.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=39)** Another tool that an IDE gives is a breakpoint.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=43)** A breakpoint is an intentional stopping point put into a program for debugging purposes.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=49)** This allows to temporarily halt a program in it's execution in order to inspect the program's internal state.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=57)** The parts of a program's internal state, include the values of variables, the result of certain lines of code, and whether or not the program reaches a certain line of code in it's execution.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=70)** Instead of using print statements to reveal the program's internal state, we can pause the program during it's execution and inspect it's state as it executes.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=80)** Let's see how this works.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=83)** Here we have the multiple choice program code, but the value of correct answer is choice three.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=90)** It has the value Saturn instead of Jupiter, so there is a logical error in this code.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=96)** Let's add a breakpoint on the line of our if statement.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=100)** We can add a breakpoint on a specific line by clicking the space, just after the line number.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=106)** With this breakpoint, our program will pause it's execution, just before this line.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=112)** In order for these breakpoints to work, we need to run our program in debug mode, to run in debug mode, instead of clicking the play button, we'll click the bug in the right hand corner.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=123)** We can also run this file in debug mode, by left clicking the class we want to run, and run in debug mode that way.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=132)** Let's choose a planet, let's say Earth, and now our program has stopped it's execution.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=140)** It stopped just before the if statement line and we get a window at the bottom of our screen, that has various details about our program's internal state.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=149)** It has our variables, questions, choice one, choice two, choice three, as well as their respective values.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=157)** This is how we could detect that correct answer has the long value.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=162)** Here it's Saturn, the variables shown here are also the variables that are in scope.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=168)** Remember a variable scope refers to where we can access and use the variable in our program.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=176)** Now that we've inspected the program's internal state, what if we want the program to continue it's execution?
>
> **[3:02](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=182)** In the debugger window, we have a few buttons that can help us.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=187)** The play button will resume the program, and it will only stop again if it runs into another breakpoint.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=194)** If we just want to run the next line of code, we can click the step over button.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=200)** In fact, we can continue to click the step over button to run each line of code individually, until the program has finished.
>
> **[3:29](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=209)** If we find an error and want to fix it, we can always stop the program's execution with the stop button at the top, or the stop button in the debugger.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=219)** There are other buttons here that are useful for debugging, but they are out of the scope of this interdictory course.
>
> **[3:47](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=227)** Ultimately, the debugger is useful because we can just add a breakpoint and run into bug mode to inspect the program's internal state, instead of adding a bunch of print statements.
>
> **[3:57](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=237)** Let's stop this program and now you'll get the chance to debug a program all on your own.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=243)** Using the tools we covered in this chapter.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=246)** Good Luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Env Vars:** ide (4)
> **Definitions:** is a  (2), is an  (1), refers to (1)
> **CLI Commands:** find (2)
> **Cross-References:** we covered (1)

#### [Solution: Find the bug in string truncation](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=0)** - [Instructor] Let's find the bug in the chunky function.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=3)** In the code, we access the string and run the substring method on it.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=8)** The substring we create runs from index zero to what this math dot max expression returns.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=15)** It will return either the length of the string or the max length value given in the input.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=22)** Let's see what the code outputs when we run it as is.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=26)** We'll change show expected result to true, so we can see what our code is supposed to return.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=36)** With this execution, the input string was this is a sample string and the max length was three.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=44)** This means the string returned should only be THI or a string with the characters from index zero to index two in order.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=55)** THI is what appears in the expected results, but our code returned the full input string.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=62)** It didn't truncate it.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=64)** Let's consider how our code was evaluated given our input values.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=69)** In this case, S dot length would've been 24 because there are 24 characters in the string.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=77)** The max length was passed in as three.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=80)** This means that 24 would've been returned from math dot max giving us the full string, all the characters from zero to 23.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=91)** What we really need is a substring from index zero to the max length.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=97)** Let's modify the code.
>
> **[1:45](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=105)** Let's run it.
>
> **[1:48](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=108)** Our code works as expected with this input.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=111)** Let's try another input.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=114)** Let's make max length really high, like a hundred.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=118)** We'll run it again.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=123)** Yikes, an error.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=125)** A hundred is out of bounds for the string because the string only has 24 characters.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=131)** If the max length is too high, we'll just want to return the full length of the string.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=137)** Let's reconsider our implementation.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=143)** If max length is low, then this implementation works, but if it's greater than the length of the string, we want the second input to substring to be S dot length.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=153)** We can achieve this by using the min method from math.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=165)** If the max length is greater than the length of the string, then the min expression will evaluate to S dot length and will no longer get an error.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=174)** Let's run it again.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=178)** It works as expected.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=180)** Let's try again with our previous input where max length was three.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=189)** And our output is correct.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=192)** It's important to test your code with many different scenarios to ensure it works as expected.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** thi (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the bug in string reversal](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=0)** - [Instructor] Let's find the bug in the string reversal implementation.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=4)** Here we create a string builder and iterate through the original string backwards, adding a character to the string builder on each iteration.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=13)** Then we turn the reverse string builder into a string.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=17)** Let's change the show expected result variable to true and run the code to see what we expect, as well as what the code returns.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=25)** It appears our reverse idea is working correctly, but we're forgetting a character.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=34)** We're missing the H.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=37)** Based on this, the bug is likely somewhere in our for loop.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=41)** We're not looping over every element and adding it to our reverse string builder.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=46)** Let's walk through how this code would work with a given data sample.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=52)** Let's say our [[Microsoft Word|word]] was note.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=55)** Walking through the implementation, I would start off at three, because the length of the string is four, and we subtract one.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=69)** Then we append the character at index three to our reversed string builder.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=75)** That character is E, so we add that to our result.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=80)** On the second iteration, I is two, because we decrement I on each iteration.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=86)** The character at index two is T, so we add that to our reverse string builder.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=92)** On the third iteration, I is one, and one is still greater than zero, so we continue with the body of the for loop, adding O to our reversed string builder.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=104)** On the next iteration, I is now zero, and zero is not greater than zero.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=110)** So we exit the for loop and return the reverse string.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=114)** Based on this, it seems like we exited the for loop too early.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=119)** We also want to add the character at index zero to the string builder.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=123)** To fix this, we can change the condition of the for loop to include zero.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=128)** We'll add an equals sign after the greater than sign.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=132)** Let's run it with our note test case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Non-Speech:** (silence) (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 5. Functions in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What are functions? (conceptually)](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=0)** - [Instructor] So far, we've created code that has run sequentially, one line after the other.
>
> **[0:06](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=6)** We have also written code that manipulates the program's [[Control Flow]] with if statements and loops.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=13)** The way we have written code so far has more to do with the way that it's executed, rather than the way it's designed.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=20)** In the next two chapters, we'll be focusing more on [[Program Design]], and how we can create programs that are readable, and easily understood by other software developers.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=31)** In this chapter, we'll be looking at functions.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=34)** In [[Software Development]], a function is just a series of finite steps that accomplish some task.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=41)** Let's say we have the task of creating a peanut butter and jelly sandwich.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=45)** The first step would be to gather the ingredients: two slices of bread, peanut butter, jelly, a knife, a plate.
>
> **[0:52](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=52)** The next step would be to spread the peanut butter on one slice, and jelly on the other slice.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=58)** Next, you would put the two slices together to create the sandwich, and finally, you would place them on the plate.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=65)** Each of these steps that I've mentioned is a defined step that we take in order to complete the make PB&J task.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=73)** We call the combination of these finite steps in association with a task, a function.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=80)** So how do you use a function?
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=83)** We can use it's label, or the name we give the task.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=87)** In our case, the task name is "makePBAndJSandwich."
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=92)** This means every time I want to make a PB&J, we can just use the label, or the name of the function, "makePBAndJSandwich," instead of listing out every step.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=103)** To use the function, we would just write the function name with some open and closed parentheses.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=109)** This makes three peanut butter and jelly sandwiches, because it executes the function code three times.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=116)** Without functions, we would have to copy and paste all of those steps three times, which would be unnecessarily wordy.
>
> **[2:04](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=124)** We want our code to be designed as we live and work in every day life.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=129)** When I tell someone to make a PB&J sandwich, I don't need to tell them all the steps.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=135)** I just use the name of the task, but at some point, long ago, that person learned how to make a PB&J sandwich, and associated the steps with accomplishing that task.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=147)** For our programs, we have to write code that defines the task, as well as all the steps needed to complete that task, or make the PB&J.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=156)** Once it's defined, we can use the task name to execute the function as many times as we want.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=163)** Now, our functions don't have to have a bunch of steps.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=167)** Let's say we wanted to create a function that prints out "It's Developer Tea Time!" whenever it's time for tea.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=174)** The name, or label, for the function would be "announceDeveloperTeaTime," and for the steps, it would wait for the appropriate time, and then print out "It's Developer Tea Time!"
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=185)** To use the function, we would just need to use the name "announceDeveloperTeaTime."
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=191)** So why use functions?
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=193)** Functions help developers organize their code in a meaningful way.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=198)** Organizing a series of steps under a label helps us keep track of certain tasks we might want to accomplish in our program.
>
> **[3:26](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=206)** It also helps us define a single task once, so that it can be used all throughout our program.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=212)** For example, once we know how to make a PB&J once, we can just use the task name to make one.
>
> **[3:40](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=220)** Now, what if we wanted to change how to make a PB&J?
>
> **[3:44](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=224)** Or, we wanted to change how we announce Developer Tea Time?
>
> **[3:49](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=229)** Instead of having to change a bunch of separate lines in the code, we can just go to the function steps, and modify the step we want to change.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=238)** For example, if we wanted to change our announcement to "It's Developer Tea Time! It's time for some snacks."
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=246)** We would just change the one print statement in the announceDeveloperTeaTime steps instead of changing a bunch of lines of code.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=255)** Ultimately, functions make it easier to change what our code is doing.
>
> **[4:20](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=260)** Next, we'll create and use our first function in [[Java]].
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=263)** Stay tuned!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1), [[Program Design]] (1), [[Software Development]] (1), [[Java]] (1)
> **CLI Commands:** make (9)
> **Code Identifiers:** announcedeveloperteatime (3), makepbandjsandwich (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Defining functions in Java](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=0)** - To use a function in [[Java]], we must first define the function.
>
> **[0:05](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=5)** We've already seen this a little bit with the functions we mapped out in the last lesson.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=11)** For the Make PB&J Sandwich function, we had to define the steps needed to accomplish the given tasks.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=18)** Make a peanut butter and jelly sandwich.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=21)** For Announce Developer Tea Time, we had to define the steps to announce tea time.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=27)** It's important to remember that just because we are defining a function, does not mean we are using it.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=34)** Just because I have given you the instructions on how to make a PB&J, does not mean you've made a PB&J.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=41)** This means, the way we write this code will be a little different than the things we've written in the past.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=47)** Let's try implementing our Announced Developer Tea Time function in Java.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=53)** To define this function, we are going to write code outside the main function for the first time.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=59)** Everything we've done so far has been about executing code.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=63)** Not defining new functionality that could potentially be used.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=68)** To define the new set of steps that we want associated with our Announce Developer Tea Time function, will go just above the Main function and write, public static void.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=79)** And then the label of our function, announceDeveloperTeaTime.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=85)** We won't be covering what the keyword, public, means in this course.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=89)** But we'll take a look at the keyword, static, in the next chapter and the keyword, void, later on in this chapter.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=97)** The name of our function is announceDeveloperTeaTime.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=100)** Now let's follow this up with some open and closed parenthesis and open-closed curly brackets.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=107)** We'll talk about the open-closed parenthesis in a later lesson in this chapter.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=111)** But we are going to put the steps for our function in between the curly brackets.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=117)** These will be the lines of code that will be executed when out function is used.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=122)** Thinking back to the steps we laid out before, the first step is to wait for developer tea time.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=128)** So we'll write, System.out.println ("waiting for developer tea time...").
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=135)** To keep this as simple as possible, we are going to make our program pause until the user types a random [[Microsoft Word|word]] and presses Enter on their keyboard.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=145)** There are other ways we could implement this waiting for developer tea time step, But this is the most straight forward with what we know so far.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=154)** For this function, once the user types the random word and presses Enter, we'll announce developer tea time.
>
> **[2:42](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=162)** To check if the user has entered the word into the console, we'll need to create a Scanner and use the .next operation, as we've done before.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=176)** We won't need to reference or use the random word that the user enters.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=180)** So we can write input .next and not save it to a variable.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=185)** Finally, let's announce developer tea time with a print statement.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=194)** Awesome!
>
> **[3:15](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=195)** Now, we have our first function.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=197)** The function name is Announce Developer Tea Time and it has five steps or five lines of code to execute.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=204)** With our function defined we can use it in our program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Java]] (2)
> **CLI Commands:** make (4)
> **Code Identifiers:** announcedeveloperteatime (2)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - to (1)

#### [Calling functions in Java](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=0)** - [Instructor] Now that we've defined our announceDeveloperTeaTime function we can proceed to the second step of using functions in [[Java]].
>
> **[0:08](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=8)** We just write the name of the function to use or execute the steps within the function.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=14)** In java, when we use a function, we say we call the function.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=19)** You can think of this as recalling the steps that were previously defined and executing them.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=26)** Let's call a function in Java.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=29)** We define our function outside of the main function but we are going to call or use our function inside of the main function.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=37)** The main function is where the meat of our program gets executed but we can always recall functions that are previously defined as part of the program.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=46)** Our announceDeveloperTeaTime function is one of these functions.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=51)** In our main function we can write announceDeveloperTeaTime.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=56)** This will called the announceDeveloperTeaTime function, execute its steps and then continue to execute whatever is left in the main function sequentially.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=66)** Let's run this in debug mode to see what's happening.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=70)** First we'll add a breakpoint to when we call the function as well as the first line of the functions implementation.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=79)** The program's execution has just started.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=82)** Notice the only variable we have in scope is args.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=88)** Let's hit continue.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=90)** Now we're at our second breakpoint.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=93)** Calling a function by name means executing the steps associated with the function name.
>
> **[1:39](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=99)** The first step is to execute the print statement.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=102)** If we hit step over and switch over to the console we will see that this print statement has been executed.
>
> **[1:50](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=110)** If we hit step over again we'll see the next print statement has been executed.
>
> **[1:56](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=116)** On this line we create a variable called input.
>
> **[2:00](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=120)** We call input a local variable because it's created within the function.
>
> **[2:05](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=125)** It is local to that function and cannot be accessed outside the functions of limitation.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=131)** Its scope is limited to this function.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=135)** Let's hit stop over again and since input is accessible at this point of the program we see input as a variable in our debugger.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=146)** On the next line we access this variable and use .next to retrieve input.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=153)** Let's hit continue and let the [[Representational State Transfer (REST)|rest]] of the program play out.
>
> **[2:36](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=156)** We'll need to enter a random [[Microsoft Word|word]], we'll type in random, we see It's Developer Tea Time!
>
> **[2:42](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=162)** as expected in the console.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=165)** Let's add some more code to this main function to make sure that we understand its [[Control Flow]].
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=187)** Let's add a breakpoint every time we call announceDeveloperTeaTime.
>
> **[3:12](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=192)** We'll keep the breakpoint at the implementation level as well.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=197)** We'll run in debug mode and the first breakpoint we hit is our first call of announceDeveloperTeaTime.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=205)** Going to our console we see Welcome to your new job has already been printed.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=211)** Let's hit continue.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=213)** This is expected.
>
> **[3:35](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=215)** We're walking through the steps of announceDeveloperTeaTime.
>
> **[3:39](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=219)** We'll step over each of these steps and the print statements appear in the console.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=225)** We'll enter our random word and continue onto the next breakpoint.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=232)** We see It's developer tea time!
>
> **[3:53](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=233)** from the announceDeveloperTeaTime implementation but now we see write code, review code.
>
> **[3:59](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=239)** These live in our main function after the first announceDeveloperTeaTime call.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=246)** Now it's time for the second call of our function.
>
> **[4:10](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=250)** Let's hit continue and we go right back into those steps.
>
> **[4:14](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=254)** Each print statement we print and then it waits for our input, in this case we'll say panda.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=263)** We'll hit continue.
>
> **[4:25](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=265)** We announceDeveloperTeaTime again and then we get promoted which is the last line of our main function.
>
> **[4:33](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=273)** Awesome, we just called our first function.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=277)** Now you might be thinking that this announceDeveloperTeaTime function looks pretty similar to the main function and that's because they're both functions.
>
> **[4:47](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=287)** Whenever we hit the play button and execute a program the main function is automatically called and used.
>
> **[4:54](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=294)** Every time we've been writing code we've been defining the main function that's automatically called at execution.
>
> **[5:01](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=301)** It's all coming together.
>
> **[5:03](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=303)** In the next lesson we'll make a new function that's a little more complex.
>
> **[5:07](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=307)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microsoft Word|Word]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Control Flow]] (1)
> **Code Identifiers:** announcedeveloperteatime (11)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Parameters in Java](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=0)** - [Instructor] The announceDeveloperTeaTime function had no inputs.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=4)** It was just a series of steps that the program followed every time the function was called.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=10)** The output was always the same.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=12)** There was nothing dynamic about it.
>
> **[0:15](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=15)** What if I wanted the output to be different depending on what was inputted into the function?
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=21)** For example, let's say I wanted to calculate the total cost of a meal including tip and tax.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=27)** To calculate this we would first figure out the tip by multiplying the tip rate with the listed price of the meal.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=34)** We would figure out the tax by multiplying the tax rate with the listed price of the meal as well.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=40)** Then we would add the tip, tax, and listed price of the meal and output the result.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=46)** These are finite steps that we can label calculateTotalMealPrice.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=51)** Of course, almost every meal you order will have a different listed price.
>
> **[0:56](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=56)** And sometimes you might want to tip a different rate depending on what service you get.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=62)** And sometimes you might want to tip a different rate depending on the service you get.
>
> **[1:07](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=67)** Sales tax rates also differ depending on what state or country you are in.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=73)** How can we account for this in our function?
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=76)** What value could we possibly give listed meal price, tip rate, and tax rate if they change every time?
>
> **[1:25](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=85)** In this lesson we are going to create a function with inputs.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=89)** Adding inputs is going to allow us to insert a specific listed meal price, tip break, and tax rate into the function every time we call the function.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=100)** The listed meal price, tip rate, and tax rate inputs will be defined in the functions definition.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=106)** But the values of these inputs will be assigned when we use the function or call the function.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=112)** Let's try implementing this in [[Java]].
>
> **[1:55](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=115)** Our function starts off with public static void and uses the function name calculateTotalMealPrice.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=123)** Using our formula from before we'll calculate the tip by multiplying the tip rate with the listed meal price.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=130)** We'll calculate the tax by multiplying tax rate with listed meal price.
>
> **[2:15](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=135)** We'll calculate the result by adding together listed meal price, tip, and tax.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=142)** Then we'll output the result to the console.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=149)** You might notice that the listed meal price, tip rate, and tax rate are red.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=155)** And that's because we haven't defined those as inputs to our function.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=159)** To define an input we add code between the parentheses.
>
> **[2:44](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=164)** Our first input will be listedMealPrice.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=167)** So we'll write the data type that listed meal price should have, in this case double and then the name of our input, listedMealPrice.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=176)** We just defined our first input to the calculateTotalMealPrice function.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=181)** And notice listedMealPrice is no longer red.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=185)** Let's do this for tip rate and tax rate.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=188)** Both of these will be doubles.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=193)** Thinking back to our discussion of scope these inputs are only accessible within the functions implementation.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=200)** We'll give these inputs a value later on but since they are created here as a part of the functions definition they can only be used within the function.
>
> **[3:30](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=210)** Now that our inputs are defined, let's add a call to calculateTotalMealPrice.
>
> **[3:37](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=217)** If we try calling this function like our announceDeveloperTeaTime function it won't work.
>
> **[3:43](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=223)** Unlike announceDeveloperTeaTime we defined inputs to this function and we have to give each of those inputs a value when we call the function.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=233)** The first input to our function is listed meal price.
>
> **[3:57](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=237)** We can give this input the value 15 by adding 15 between the parentheses.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=243)** But we still have an error.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=246)** That's because we need to add a value for each input not just the first.
>
> **[4:12](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=252)** We also have the tip rate and tax rate.
>
> **[4:15](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=255)** We'll add .2, 20% for the tip and .08 for the tax rate, 8%.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=263)** It's important to remember that the order does matter here.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=267)** So the first input defined in the function will get the first value in the parentheses and so on.
>
> **[4:34](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=274)** Let's run the code and see what happens.
>
> **[4:38](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=278)** And we get an output.
>
> **[4:39](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=279)** Your total meal cost is 19.2.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=283)** Let's try changing the values of the inputs to this function.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=289)** Instead of 15, we'll say the listed meal price is 25.
>
> **[4:54](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=294)** We'll also say we only want to tip 18% or .18.
>
> **[5:00](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=300)** The tax rate will stay the same.
>
> **[5:03](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=303)** Let's run the code again and the second output says the meal price is 31.5.
>
> **[5:12](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=312)** Changing the inputs to our calculateTotalMealPrice function affected the outputs.
>
> **[5:18](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=318)** This is the first time we've used a function with different input values.
>
> **[5:23](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=323)** In the next lesson we'll continue to make calculateTotalMealPrice more sophisticated.
>
> **[5:28](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=328)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** calculatetotalmealprice (6), announcedeveloperteatime (3), listedmealprice (3)
> **Versions:** 19.2 (1), 31.5 (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Return types in Java](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=0)** - [Instructor] So far, the only way we've outputted data is System.out.println, and this really outputs data to the user.
>
> **[0:08](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=8)** We've gathered input from the user in the past with the scanner, and in the last lesson, we learned how to input data into functions using parameters.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=19)** Now we're going to learn how to output data from functions using return types.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=25)** We'll talk more about return types in a second, but imagine you go to a restaurant with four of your friends, and you all order similarly priced meals and want to tip and tax the same amount.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=39)** The listed meal price comes out to be $100.
>
> **[0:42](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=42)** You want to tip 20%, or .20, as a group, and the sales tax is .08, 8%.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=50)** With the function you created in the last video, we can calculate the total meal cost, which will come out to 128, and that would get printed out to the console.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=60)** Now what if we wanted to split the bill among me and my friends?
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=65)** The total meal cost is 128, but I want to know what each person owes on the bill.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=72)** We could add a parameter to our function that represents the number of people at the meal and divide the final result by that number, but then the function name doesn't really make sense, because the printed-out statement should represent the total meal cost, not my portion.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=89)** What I really want to do is somehow get access to the data outputted by the calculateTotalMealPrice function and manipulate it some more.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=98)** I want to divide it by five.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=100)** We can do this with return types.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=104)** For the functions we've created, we've always prefixed them with public static void.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=111)** Void is actually the return type.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=113)** Every function in [[Java]] returns some value or nothing, and every function we've created so far has returned void, or nothing.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=123)** For the calculateTotalMealPrice function, we want to return the value of the result variable.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=130)** The result variable is a double, so we'll change void to double to make double our return type.
>
> **[2:18](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=138)** With the double return type, we have to make our function return a double value.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=143)** We can do this using the return keyword.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=147)** We'll write return and then the value we want the function to return, in this case, the value stored inside of result.
>
> **[2:34](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=154)** Awesome.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=155)** Our function returns the calculateTotalMealPrice result.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=159)** Now we can access and save the result in a remain function.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=163)** How do we save the result?
>
> **[2:45](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=165)** Just like we save any value in Java.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=168)** We can create a variable.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=170)** First, we'll call the calculateTotalMealPrice function with 100, 0.2, and 0.08 as values which will map to listedMealPrice, tipRate, and taxRate.
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=183)** Then we'll save the output in a variable called groupTotalMealCost.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=189)** This variable will be a double, because the return type to the calculateTotalMealPrice function is a double.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=197)** groupTotalMealPrice will have the same value as result.
>
> **[3:22](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=202)** Let's print groupTotalMealPrice out to the console, add some break points, and run the code in debug mode.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=211)** We'll add one break point at the function call and another break point when the result is returned.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=218)** Let's use the debugger.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=222)** Here, we're right before the function call.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=225)** The function will be called, and the result will be saved in groupTotalMealPrice.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=231)** We'll hit Continue.
>
> **[3:53](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=233)** Inside the function, we have 100 for our listedMealPrice, 0.2 for the tipRate, and 0.08 for the taxRate.
>
> **[4:02](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=242)** Result has the value 128.
>
> **[4:04](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=244)** And if we hit Play again, we should see 128 in our console.
>
> **[4:11](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=251)** And there it is.
>
> **[4:12](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=252)** Returning a value allows us to take a value of a variable within a function and allow it to be accessed at a different scope of our program.
>
> **[4:21](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=261)** Before, variables and values created within a function could only be accessed and used within that function.
>
> **[4:29](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=269)** With return types, we can calculate a given value and make it accessible to a different part of our program.
>
> **[4:36](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=276)** Now the ultimate goal was to figure out how much each person in the group owes if the meal is split.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=283)** There are five people in the group, so we can divide the groupTotalMealPrice by five and save it in a variable called individualTotalMealPrice.
>
> **[4:59](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=299)** Let's run the code and see what the individual price is.
>
> **[5:04](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=304)** It's 25.6.
>
> **[5:06](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=306)** We just made our function a little more sophisticated by adding a return type.
>
> **[5:11](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=311)** In this case, our return type happened to be a double, but it could be a Boolean, int, char, string, or any other data type that we've covered.
>
> **[5:20](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=320)** In this chapter, we've been defining and using our own custom functions, but there are functions that are already defined in Java, and we can just use them.
>
> **[5:30](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=330)** We'll take a look at some of the built-in functions next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **Code Identifiers:** calculatetotalmealprice (5), grouptotalmealprice (4), listedmealprice (2), tiprate (2), taxrate (2)
> **Versions:** 0.2 (2), 0.08 (2), 25.6 (1)
> **CLI Commands:** make (4)
> **Cross-References:** in the last (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), just like (1)
> **UI Navigation:** go to (1)

#### [Using built-in functions in Java](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=0)** - [Instructor] In this chapter, we've been creating our functions from scratch.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=4)** We've defined various functions, added parameters, added return types, and then called them in our main function.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=12)** These functions are called user-defined functions because we, as users of [[Java]] and software developers, are creating them.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=21)** We are defining the finite steps, naming the function appropriately, and then calling it in our code.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=28)** There are many functions that developers want to use, but not necessarily define themselves and as a courtesy, the creators of Java have defined some of them for us.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=39)** We just have to call the function by the name that's already defined.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=43)** We don't have to define it.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=45)** One function that we've been using a lot that's built-in is println.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=50)** We never defined system.out.println, but we can call it because it's a built-in function to Java.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=59)** Back at the beginning of the course, we talked about operations on data types, operations we can run on strings, operations we can run on ents, and many of these operations are really functions.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=71)** The .equals operation that we've run in the past is really a string function.
>
> **[1:17](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=77)** The value we've added between the parentheses is the string we want to compare the original string to.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=84)** The way we call a built-in function might seem a little different than a user-defined function, and that's because it is.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=92)** We are using the dot operator to access many of these built-in functions.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=97)** For system.out.println, we have to access out from system and then the println function from out.
>
> **[1:46](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=106)** We'll talk more about the dot operator in the next chapter, but the main takeaway here is sometimes we'll define our custom functions and sometimes we'll use built-in functions.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=119)** So how do we find out about all of these built-in functions?
>
> **[2:04](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=124)** Let's say you want to create a custom function for exponentiation, something that will take a given number to the second power, or the fifth power.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=134)** This is a common task and there might be something in Java that already does this.
>
> **[2:19](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=139)** So you'll [[Google]] around and try to find some examples of a built-in function that already does exponentiation or an example of a user-defined function.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=149)** Let's try doing that now.
>
> **[2:31](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=151)** All right, here's one, math.pow, and there are two inputs.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=157)** The first input is for the base and the second input is for the exponent.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=163)** We take the base to the power of the exponent, hence the function name pow.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=170)** The way we access it is through math using the dot operator.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=175)** Let's try writing this in our code.
>
> **[2:58](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=178)** We'll write math.pow and you'll notice that some information about the function pops up in our IDE.
>
> **[3:06](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=186)** We see that it has two parameters that are both doubles and it returns a double.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=193)** We'll add two as the base and five as our exponent.
>
> **[3:19](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=199)** We'll save it in a variable called result and then print it to the console.
>
> **[3:27](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=207)** We'll run the program, and we get 32, which is two to the power of five.
>
> **[3:35](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=215)** Now, if we type math., we can see there are a lot of different mathematical functions that we can call already built into Java.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=225)** Math is a part of the Java standard library, which contains all of the different built-in functions we can access.
>
> **[3:52](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=232)** Math is just one component containing a series of built-in functions.
>
> **[3:58](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=238)** So what's the benefit of using built-in functions?
>
> **[4:01](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=241)** You don't have to write the implementation of the function yourself.
>
> **[4:05](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=245)** The function is already defined and you can just call it.
>
> **[4:09](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=249)** All you have to know about the function is what it takes as input and what the expected output is based on what the function does.
>
> **[4:17](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=257)** Usually, if there is a built-in function for the thing you want to accomplish, you should use it instead of creating your own custom function.
>
> **[4:27](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=267)** Built-in functions have been tested a lot by the creators of the programming language.
>
> **[4:32](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=272)** They are basically guaranteed to do what they are described to do.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=277)** Next, you'll test your skills about functions in a coding challenge.
>
> **[4:41](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=281)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Google]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Cross-References:** we talked about (1), in the next (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Move capital letters](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=0)** - [Instructor] Let's implement this function.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=3)** To keep track of our new string, we'll use a string builder.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=11)** We'll also create an int to keep track of where we should insert the next capital letter.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=18)** We want to move the capital letters to the beginning of the list so it'll start off at 0.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=24)** Then we'll iterate through the input string.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=33)** We'll retrieve each character using the charAt method.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=44)** Now we need to decide at what index should we put this character in our result.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=50)** This will depend on whether the character is a capital letter.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=54)** We can use the isUpperCase method from the character class to check if a given character is uppercase.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=68)** Now, if the character is not uppercase, we can append it to the back of the string builder.
>
> **[1:14](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=74)** Its ordering should remain the same.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=79)** If the character is uppercase, we'll want to insert it at the beginning of the list.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=90)** Now, if there's more than one capital letter in the list, this won't work.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=95)** Each capital letter would be moved to the front of the entire string, and the initial capital letter ordering would not be maintained.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=104)** Instead, we'll use the capitalIndex so we insert the character at the correct spot.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=113)** Once the capitalIndex is used, we'll want to increment it so it's ready to go for the next capital letter we find.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=121)** We can increment it using the postfix operator.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=128)** After exiting the loop, our result will be ready to be converted into a string and returned from the function.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=137)** Let's run it.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=140)** Our code works as expected.
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=142)** All the capital letters in the return string have been moved to the front.

> [!info]- Semantic Content
>
> **Code Identifiers:** capitalindex (2), charat (1), isuppercase (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Classes in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Classes in Java](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=0)** - [Narrator] In this chapter, we will continue to talk about [[Program Design]] and about how we can make our programs readable to other software developers.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=10)** As you enter the workforce, there are often several software developers working on the same program, so it's essential to write code in a way that's easy to read and understand.
>
> **[0:22](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=22)** A lot of times, I'll forget about code that I've written six months ago.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=26)** And if it's written in a way where it's hard to understand, I have to take a significant amount of time to understand it before I can add functionality to it.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=36)** We want to prevent that.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=39)** One way to make our program easier to read and understand is with classes.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=45)** We've seen classes a little bit before because all of our code so far has been contained within the main class.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=53)** But now we are going to dive a little deeper.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=57)** Everything we see, hear and experience in everyday life can be represented in code.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=63)** We've represented the on-repeat functionality of a music player.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=68)** The final total that may be on a restaurant receipt and more.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=73)** How well something is represented is up to us and we decide what to code.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=79)** Although we've used functions and other tools to represent these in code, most of the time, classes act as blueprints for these things.
>
> **[1:29](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=89)** A class is a user-defined blueprint that has a set of attributes and behaviors that define the item that it is supposed to represent.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=98)** For example, let's say we wanted to create a class or blueprint for a triangle.
>
> **[1:44](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=104)** When we think of a triangle, it has a base, a height, and three sides with various lengths.
>
> **[1:51](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=111)** These are attributes or properties of a triangle, so we can define them as that for our blueprint or class.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=119)** Each of these attributes will define a data type and they will act as a variable in the blueprint.
>
> **[2:06](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=126)** The base, height and sides of the triangle will have double values.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=131)** Every triangle we create will have a base, height, and side lengths.
>
> **[2:16](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=136)** The values may not be the same but every triangle has these attributes and these attributes are really variables that will hold a particular value for a given triangle.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=149)** A class can also have behavior.
>
> **[2:32](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=152)** The behaviors are defined as functions that are related to the class.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=157)** In the debugging chapter, we debugged some code that calculated the area of a triangle.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=163)** We could turn that code into a function called findArea and add that as behavior to our triangle class.
>
> **[2:52](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=172)** The functionality would be the same but it's nice to make it a function so we can reuse it as well as organize it by putting it in our Triangle class.
>
> **[3:02](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=182)** Another name for a behavior is a method.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=185)** We could say that findArea is a method of the Triangle class.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=191)** We could also add a behavior or function to this class that decides if the triangle is an equilateral, isosceles or scalene triangle.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=201)** An equilateral triangle has equal side lengths.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=205)** An isosceles triangle has two side lengths that are equal and a scalene triangle has all unique side lengths.
>
> **[3:33](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=213)** With if statements and some comparisons with the side length attributes, we could implement a function called calculateTriangleType that returns the type of triangle.
>
> **[3:44](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=224)** One could argue that the fact the triangle is equilateral, isosceles or scalene, is more of an attribute or property rather than something to be calculated.
>
> **[3:54](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=234)** But this is just one programmatic design.
>
> **[3:57](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=237)** There are a bunch of different ways you could represent a triangle in code, it just depends on what functionality you want and what data you want to store.
>
> **[4:08](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=248)** For the behaviors we've talked about so far, they have manipulated or used attributes of the class.
>
> **[4:14](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=254)** findArea used the triangle's base and height and calculateTriangleType used the side lengths of the triangle.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=263)** Although functions inside the class or behaviors often use a classes properties, they don't have to.
>
> **[4:31](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=271)** We add the keyword static if the function does not use the properties of the class but still relates to the overall theme or idea of the class.
>
> **[4:41](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=281)** We'll dive into the keyword static later on in this chapter.
>
> **[4:45](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=285)** Now that we understand classes conceptually, we can connect these blueprints to the execution of our programs.
>
> **[4:53](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=293)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Program Design]] (1)
> **Code Identifiers:** findarea (3), calculatetriangletype (2)
> **Definitions:** is a  (3), defined as (1), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Constructors in Java](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=0)** - [Instructor] When we were talking about functions in an earlier chapter, we had to define a function in order to call it.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=7)** Similarly, we have to define a blueprint or class in order to use it.
>
> **[0:13](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=13)** In the last lesson, we defined the Triangle class or triangle blueprint.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=18)** But we haven't created any triangles yet.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=21)** We just defined the attributes and behavior of a triangle in a blueprint.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=25)** In this lesson, we are going to learn how to create individual triangle instances in our program.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=33)** An instance is an object created from the class blueprint.
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=37)** Just like we make buildings from blueprints in real life we use a class or blueprint to create objects or instances in code.
>
> **[0:46](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=46)** Thinking back to our triangle class, a triangle has a base height and three side lengths.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=53)** An instance of a triangle, say named triangleA, could have a base 15, height eight, and sides with lengths 15, eight, and 17.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=65)** Another instance of a triangle could have base three, height 2.598, and side lengths three, three, and three.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=75)** From our single Triangle class, we can create as many instances as we want and each instance will have its own base, height, and side length attribute variables.
>
> **[1:28](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=88)** So how do we create these instances?
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=91)** We use a special method or behavior called a constructor.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=95)** Every class has a constructor and it's how we create and initialize each triangle we want to use in our program.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=103)** It's how we can create triangleA with specific base, height, and side length values, and then construct triangleB with different attribute values.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=114)** We call this special function inside the Triangle class.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=119)** What does a constructor look like?
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=121)** Since it's a function, it has a name and that name is always the same as the name of the class, so in this case, triangle.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=130)** Then we have open-close parentheses for the inputs to the function and brackets for the implementation of the function.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=137)** Right now, they are empty.
>
> **[2:20](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=140)** For the return type, the constructor always returns an instance of the class, in this case an instance of triangle.
>
> **[2:27](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=147)** We don't have to state it in the definition of the method because it's already built into [[Java]] to expect that behavior.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=155)** In the implementation, we won't be using the return keyword either because no matter what we do in the constructor, it will always return an instance of the class, in this case Triangle.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=168)** In constructing a Triangle instance or Triangle object we'll want to initialize its attributes with values.
>
> **[2:55](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=175)** We'll want to give a value to the base, the height, and the side lengths.
>
> **[3:00](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=180)** We could set these to any default value but ideally this constructor would be dynamic and on-the-fly decide what values to give these attributes.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=191)** To do this, we can add parameters representing each triangle attribute to this function.
>
> **[3:18](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=198)** Just like our parameters to other functions each parameter has a data type and a name.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=204)** Each parameter does not have to have the same name as the attribute their data represents but it is often the case that this is so.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=212)** This might look a little intimidating but stick with me.
>
> **[3:36](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=216)** This was tough for me too when I first got started with Java.
>
> **[3:40](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=220)** With parameters, we have access to the appropriate values we want to assign to each of the attributes.
>
> **[3:47](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=227)** To access the attribute variable for the object we are trying to construct, we use the this keyword and the dot operator.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=236)** The this keyword helps our program make a distinction between the attribute variable and the parameter variable.
>
> **[4:03](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=243)** We use the [[Microsoft Word|word]] this because we are talking about an attribute of the triangle we are constructing rather than the parameter variable.
>
> **[4:13](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=253)** When we use the dot operator on the keyword this we can access the to-be-created instance's attribute variables.
>
> **[4:22](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=262)** This allows us to access the instance we are creating's base, height, and side lengths so we can initialize them.
>
> **[4:30](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=270)** With the code below, we are initializing the attributes of the new triangle with the values of the corresponding parameters.
>
> **[4:39](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=279)** In the constructor, we initialize the triangle we are creating's base attribute with the value given in the base parameter.
>
> **[4:48](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=288)** We also initialize the new triangle's height attribute with the value given in the height parameter and so on for each attribute of the triangle we are creating.
>
> **[5:00](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=300)** And that's our constructor function defined.
>
> **[5:03](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=303)** How do we use it?
>
> **[5:04](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=304)** Just like any other function, we'll call it with argument values and it will return a triangle.
>
> **[5:11](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=311)** The only difference is that because we are creating a new triangle object or a new triangle instance we have to use the new keyword.
>
> **[5:20](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=320)** In this example, we create two variables with the data type Triangle.
>
> **[5:25](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=325)** One triangle is named triangleA and the other is called triangleB.
>
> **[5:31](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=331)** Then we use the new keyword and call the constructor with the appropriate attribute values.
>
> **[5:37](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=337)** It returns a triangle that is now stored in the respective variable.
>
> **[5:42](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=342)** The triangleA instance will have a base with the value 15, height with the value eight, side length one with 15, side length two with eight, and side length three with 17.
>
> **[5:56](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=356)** The triangleB instance will have a base with the value three, a height of 2.598, and all side lengths with value three.
>
> **[6:07](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=367)** Now you might be thinking, "Triangle is now a data type?"
>
> **[6:11](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=371)** And yes, it is.
>
> **[6:13](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=373)** When we create a class, we are essentially creating a new way to store a group of data.
>
> **[6:20](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=380)** Just think about all those double values we are storing.
>
> **[6:23](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=383)** Our class is one particular way we've decided to store and organize data about a triangle.
>
> **[6:30](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=390)** This means when we create a triangle, store it in a variable or perhaps even use it as a parameter, we must remember to use Triangle as our data type.
>
> **[6:41](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=401)** Let's try pulling all of this together by defining our first class in Java and creating instances from it using a constructor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** trianglea (4), triangleb (3)
> **Definitions:** is an  (1), we call this (1), is called (1)
> **Analogies:** just like (3)
> **CLI Commands:** make (2)
> **Versions:** 2.598 (2)
> **Cross-References:** in the last (1)
> **Best Practices:** remember to (1)

#### [Creating a class in Java](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=0)** - [Instructor] With an understanding of classes, instances and the constructor, we can begin to write [[Java]] Code that helps us represent a triangle in a program.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=10)** First, we need to write code that defines our triangle blueprint.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=14)** And we can do that with the triangle class.
>
> **[0:18](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=18)** In Java, We'll create a new class file and name it triangle.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=24)** Inside the curly braces for our class, we'll need to add the attributes and behavior we want the class to have.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=31)** In earlier lessons, we said that a triangle has a base, height and three different side links.
>
> **[0:38](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=38)** We can add those inside of our class.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=48)** We now have five attribute variables that we have created, but they do not have a value yet.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=54)** These attribute variables are also called instance variables because they are variables that each instance will have an individual value for.
>
> **[1:04](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=64)** We could assign a default value to these instance variables, but as we discussed in the last lesson, usually, we want a constructor to initialize them.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=75)** With the constructor, we can create a triangle instance with specific base, height and side length values.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=83)** To create a constructor, we'll write "public, triangle", and then our inputs.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=93)** Next, we'll use these inputs to assign values to our attributes.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=97)** To access each attribute, we'll write, "this." And then attributes name.
>
> **[1:42](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=102)** And then to assign it a value, the value of one of our inputs, we'll just use the name of that parameter.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=112)** You'll notice that as we use each attribute, it becomes highlighted, because now it's in use by the program.
>
> **[1:59](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=119)** It's not just some attribute that's created and never used.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=123)** If we think of this in relation to scope, the attributes are accessible throughout the triangle class.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=129)** But the constructors parameters are only accessible inside the constructor.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=134)** Since the attribute in the constructor's parameter have the same name, we use this in the dock operator on the attributes to keep them separate.
>
> **[2:25](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=145)** Here, we have a constructor that takes in unique values with parameters and assigns them to their corresponding attribute.
>
> **[2:33](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=153)** The constructor is just one behavior or method that a class can have.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=158)** But we can have as many methods as we want.
>
> **[2:41](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=161)** Method is just another name for a behavior or function that belongs to a class.
>
> **[2:47](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=167)** In an earlier lesson, we talked about adding a function that finds the area of a triangle to this class.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=174)** We can do just that.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=176)** We'll call this function "find area" and it will return a double.
>
> **[3:01](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=181)** We do need to have the return type here, because find area will not be a constructor.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=188)** With the "this" keyword, we can get access to the appropriate instance variables based on height, so the function takes no inputs.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=197)** Our formula for finding the area of a triangle, is base times height divided by two, so we'll return "this.base*this.height/two".
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=212)** We can access "this.base" and "this.height" here, because the base and height attributes are created within the triangle class.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=221)** With the addition of this last behavior, our class is defined.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=225)** We could add attributes and behavior later on, but this is where our blueprint will end for now.
>
> **[3:51](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=231)** Next, we'll try creating some triangle instances with this blueprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Cross-References:** we discussed (1), in the last (1), we talked about (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Creating instances in Java](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=0)** [Narrator] Let's make some triangle instances.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=3)** Continuing on our program from the last lesson, we'll move back to our main class, with the main method, in order to do this.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=11)** We could add a main method to our triangle class, and run that file instead of this file, but I find the separation of our blueprints and the code we are actually running makes it a bit easier to understand at first.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=24)** To create a triangle, we'll create a triangle variable and call the constructor method.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=30)** We'll name the first triangle triangle A and give it the values 15, 8, 15, 8, and 17.
>
> **[0:39](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=39)** The second triangle we'll call triangle B and give it the values 3, 2.598, 3, 3, and 30.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=51)** Now we have two triangle instances.
>
> **[0:54](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=54)** Let's add some breakpoints and walk through this program so we can wee what's going on behind the scenes.
>
> **[1:01](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=61)** We'll add a breakpoint just before triangle A is created, as well as a breakpoint before triangle B is created.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=69)** Going back to the triangle class, we'll also add a breakpoint on this first line of the constructor.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=75)** We'll be running our main class in debug mode.
>
> **[1:20](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=80)** Our first stop is right before we create triangle A.
>
> **[1:24](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=84)** We are passing 15 for the base, 8 for the height, 15, 8 and 7 for each of the side lines.
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=92)** Let's hit Continue.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=95)** Now we are in the constructor itself, where we are creating the triangle instance that will be stored in the triangle A variable.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=103)** Our parameters have the values we passed, 15 for the base, 8 for the height, and so on.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=109)** In the following lines of code, in the constructor, we will assign these values to the attributes of the triangle to be created.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=118)** All of our attributes for the new triangle have defaulted to the value zero, as you can see here at the top.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=127)** This is the magic of an IDE.
>
> **[2:09](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=129)** With the constructor, we will initialize each of these attributes.
>
> **[2:14](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=134)** Let's hit the Step Over button and now the base attribute for the triangle to be stored in the triangle A variable has the value 15.
>
> **[2:24](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=144)** We can see the new base attribute value highlighted at the top.
>
> **[2:29](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=149)** In the variables window at the bottom, if we open up the pane, we can see that the base is initialized here as well.
>
> **[2:37](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=157)** The this keyword stands for the triangle we are constructing and initializing, so as we initialize it, the values within the triangle object we are creating should be initialized.
>
> **[2:50](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=170)** Let's hit Step Over again.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=173)** The height attribute for the new triangle A is now 8 and seven zero, and this will happen for each attribute we are initializing.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=184)** We hit Step Over again.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=187)** The initialization for side length One is executed, and now he side length One attribute has the value 15.
>
> **[3:14](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=194)** Hitting Step Over again, side length Two is initialized.
>
> **[3:20](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=200)** Hitting Step over one last time, the value of side length three finally gets initialized and the triangle has been constructed.
>
> **[3:28](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=208)** All's that's left to do is to return from the constructor.
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=212)** We can do this by hitting Continue.
>
> **[3:36](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=216)** Now we are on to creating our next triangle, triangle B.
>
> **[3:41](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=221)** Let's hit Continue, and we hit that breakpoint inside the constructor again.
>
> **[3:46](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=226)** Now we're constructing triangle B.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=229)** This to-be-created triangle instance, like the other, has its default attribute values set to zero.
>
> **[3:56](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=236)** They are not connected to the attribute values of triangle A, because different triangles should have different values for their base, height and side lines.
>
> **[4:06](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=246)** Each instance created from a constructor is independent of each other.
>
> **[4:11](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=251)** The attribute values of one triangle do not affect the other.
>
> **[4:16](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=256)** Let's hit Step Over a few times, and as we continue the rapid constructor, each attribute is getting initialized, this time for triangle B.
>
> **[4:28](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=268)** Let's hit Continue, and now we have created two triangle instances, using a constructor from the triangle class.
>
> **[4:37](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=277)** Our program not only knows how to represent triangles, but it has two triangles represented within it.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=284)** So what can we do with these new triangles?
>
> **[4:47](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=287)** We added the behavior of find area to the triangle class in the last lesson, so we'll try using it on one of our triangle next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Env Vars:** ide (1)
> **Versions:** 2.598 (1)
> **Cross-References:** in the last (1)
> **Definitions:** stands for (1)
> **Prerequisites:** initialization (1)

#### [Instance methods vs. class methods](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=0)** - [Instructor] Let's try calculating the area of each triangle.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=4)** We're store the area of triangle A in a variable called triangleAArea, and it will be a double, because that's what the findArea function returns.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=14)** To get access to the findArea function, we use the dot operator on the triangle A instance.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=20)** So we'll write triangleA.findArea.
>
> **[0:26](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=26)** Now you might be thinking, why didn't we write triangle.findArea?
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=32)** Isn't that what we did when we used pow on the math class with math.pow?
>
> **[0:37](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=37)** And yes, this is where a lot of people get confused.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=41)** The reason we did triangleA.findArea instead of triangle.findArea is because in order to find the area of a given triangle, you have to have a triangle instance.
>
> **[0:53](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=53)** You can't calculate the area of a triangle that doesn't exist yet.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=58)** The implementation of the findArea function relies on the attributes of a given triangle.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=65)** The base might be eight or 10 or 15.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=69)** We don't know until the triangle is actually created.
>
> **[1:13](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=73)** Because we have to have a triangle instance already created to use the findArea method, we can say findArea is an instance method.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=83)** For math.pow, we did not need to create an instance of Math in order to use the pow function.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=90)** We just accessed the class and used the function we wanted.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=95)** That's because pow is not an instance method.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=98)** It is a static method or class method, because you do not need an instance of the class in order to use the function.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=107)** Because of this, instance methods are often referred to as non-static methods, since you have to create an instance in order to use them.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=117)** You do not need an instance created to use a static method.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=121)** You can just reference the class.
>
> **[2:03](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=123)** In a previous chapter, we used .chatAt() with a string, and we did need a string already created in order to use it.
>
> **[2:12](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=132)** In our code, we wrote studentFirstName.charAt(0) and studentLastName.charAt(0), where the studentFirstName and the studentLastName both evaluated to string values.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=146)** In both of these cases, we used the dot operator on an instance of a string in order to get access to the .charAt() method.
>
> **[2:35](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=155)** Because we used the dot operator on an instance and not the class name, .charAt() is an instance method, and not a class method.
>
> **[2:44](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=164)** Understanding the difference between instance methods and class methods is very important as you continue to learn [[Java]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** findarea (9), charat (4), trianglea (2), studentfirstname (2), studentlastname (2)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Using instance methods in Java](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=0)** - [Instructor] Let's get back to our triangle program.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=3)** We've created two triangles, and we are using the dot operator on triangleA to access the findArea function, so that we can find the area of triangleA.
>
> **[0:14](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=14)** Let's add a break point when we make the findArea function call, and then on the first line of the findArea implementation.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=23)** Now, let's run in debug mode.
>
> **[0:27](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=27)** We are about to call the findArea method on triangleA.
>
> **[0:32](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=32)** In the variables window, we can see that our triangleA instance is there, with its specific attribute values, and the triangleB instance is there, with its specific attribute values.
>
> **[0:45](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=45)** We'll hit continue, and now we find ourselves in the findArea implementation.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=51)** For triangleA, the base attribute has the value eight, and the height attribute has the value 15.
>
> **[0:59](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=59)** We used the this keyword to access triangleA's specific base and height values, and used the base and height divided by two formula to calculate triangleA's specific area.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=72)** Hitting continue, and switching over to the console, we can see that triangleA's area is 60.
>
> **[1:23](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=83)** We can calculate triangleB's area as well.
>
> **[1:26](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=86)** Of course, since triangleB has different attribute values for the base and height, we will get a different output for the area.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=94)** So let's add a double variable called triangleBArea, and assign it to the value, triangleB.findArea returns.
>
> **[1:43](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=103)** Then we'll print out triangleBArea, with System.out.println, triangleBArea.
>
> **[1:52](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=112)** We'll remove the break point from the triangleA call, and move it to the triangleB call, and run this in debug mode.
>
> **[2:01](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=121)** The first time we encounter findArea is with the call from triangleA, so that's why we see a base of eight and a height of 15.
>
> **[2:10](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=130)** If we hit continue, we'll stop right before triangleB calls findArea.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=137)** Hitting continue again, we are back in the findArea function, and now we have triangleB's attribute values for the base and height.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=146)** These are used to calculate the final area, and hitting continue, we'll switch back to the console, and the final area is 3.897.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=158)** Awesome, we just used our custom-built findArea instance method from the triangle class on two triangle instances.

> [!info]- Semantic Content
>
> **Code Identifiers:** trianglea (10), findarea (10), triangleb (7), trianglebarea (3)
> **CLI Commands:** find (2), make (1)
> **Versions:** 3.897 (1)
> **Speakers:** - [instructor] (1)

#### [Instance and class variables in Java](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=0)** - [Instructor] With the findArea call we've used the dot-operator to access a behavior or method from our Triangle class.
>
> **[0:07](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=7)** What about attributes?
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=9)** So far, we have only accessed a triangle's instances values using the this keyword inside it's class.
>
> **[0:16](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=16)** But, we can also access it outside it's class.
>
> **[0:21](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=21)** In our main method we could print out triangle A's, Sidelenthree with system.out.printLn, trianglea, sideLenThree.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=31)** We use the .operator on trianglea, to access it's instance variable.
>
> **[0:36](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=36)** Or attribute variable, sidelenthree.
>
> **[0:40](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=40)** We could also print out triangleb's base with system.out.println triangleb.base The rule here is that it is a function if it has parens and an attribute if it does not have parens.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=55)** Sidelenthree and base are both attributes here.
>
> **[0:58](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=58)** So, we do not add any parens.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=62)** We are accessing a variable, not calling a function.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=66)** Let's save this and run the program.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=68)** And, see what we get in the output.
>
> **[1:10](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=70)** The last two values 17 is the length of side three.
>
> **[1:15](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=75)** And, three is the base of triangleB.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=79)** Remember, both sidelenthree and base are instance variables.
>
> **[1:25](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=85)** Both of these variables hold information about a specific triangle instance.
>
> **[1:31](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=91)** Just like we had static and non-static methods we have static and non-static variables.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=97)** Non-static variables are the instance variables.
>
> **[1:40](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=100)** The base of the triangle, the height of the triangle, they do not stay static or the same between triangle instances.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=107)** The values of base, height, and the [[Representational State Transfer (REST)|rest]] of our instance variables change depending on the triangle.
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=114)** A static variable is something that will not change per instance.
>
> **[1:58](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=118)** They hold the value for the whole class to use.
>
> **[2:02](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=122)** For example, we might have a static variable that stores how many sides there are to a triangle.
>
> **[2:08](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=128)** This is something that will not change per instance.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=131)** But, rather if you change it, it should effect every instance.
>
> **[2:17](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=137)** Similar to how we accessed static behavior, or static methods we access a static variable using the class name.
>
> **[2:26](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=146)** Since it does not change from instance to instance, and belongs to the class rather than a single instance, a static variable is accessed with a .operator, using the class name.
>
> **[2:38](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=158)** Let's try adding a static variable to our triangle class.
>
> **[2:43](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=163)** Inside the triangle class, we'll add a static variable above our instance variables.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=168)** This static variable will be an int, and we will call it numofsides.
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=173)** We will give it the value three.
>
> **[2:56](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=176)** Going back to our main class, we can access the static numofsides variable with the class name triangle, and the .operator.
>
> **[3:05](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=185)** We will want to print it out to the console So, we will write system.out.println, and then use the class name triangle to access the static variable, numofsides.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=197)** Let's run it.
>
> **[3:21](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=201)** And we see three in our console.
>
> **[3:24](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=204)** We have three sides to a triangle.
>
> **[3:27](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=207)** Now, this representation of triangle isn't perfect.
>
> **[3:31](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=211)** Right now we assume the values given to the constructor are valid.
>
> **[3:36](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=216)** None of them are zero or negative.
>
> **[3:38](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=218)** And, they together meet the requirements for a triangle.
>
> **[3:42](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=222)** This is something that you can add on later if you want to.
>
> **[3:45](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=225)** But, we are keeping this as simple as possible for now.
>
> **[3:49](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=229)** In this chapter, we have introduced a lot of new concepts so next we will take some time to review what we have learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** findarea (1), println (1), sidelenthree (1), triangleb (1)
> **Analogies:** just like (1), for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Review: Classes vs. instances](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=0)** - [Narrator] So what are the big takeaways from this chapter?
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=4)** First, in [[Java]], we can create classes to organize our code.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=9)** In our previous example, we used a triangle class to organize data related to a triangle as well as how we can calculate things from triangle data.
>
> **[0:19](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=19)** A class contains attributes and behavior, also called properties and methods.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=25)** Every class also contains a constructor, which is a specific type of method that allows us to create instances of the class.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=34)** Ultimately, a class is just a blueprint, and we have to use the constructor in order to create triangles in our code.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=43)** Some of these attributes are associated with each individual instance, and we call these instance variables.
>
> **[0:50](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=50)** These were the height, base, and side length attributes in our example.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=55)** These attributes are accessed with the instance itself, and we use the dot operator on the instance to access instance variables.
>
> **[1:05](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=65)** Along with instance variables, each instance has instance functions or non-static methods.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=71)** Similarly, these are accessed using the instance with the dot operator and parentheses.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=79)** We also have class variables and class methods.
>
> **[1:22](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=82)** These variables and methods are static and we access them using the class name with the dot operator.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=90)** To use static class variables and methods, we do not need to create an instance, we can just use the class name.
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=98)** This new vocabulary can sometimes be overwhelming, but when you are debugging, [[Google]] searching, and trying to figure out how to fix your code, these words often come up.
>
> **[1:49](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=109)** Understanding these concepts is a big hurdle in Java, and once you get it, everything starts to make more sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Google]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Bank account balance](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=0)** - [Instructor] Let's implement a [[Java]] class to represent a bank account.
>
> **[0:04](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=4)** This class has three different methods, withdraw, deposit, and get balance.
>
> **[0:10](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=10)** Let's start with get balance.
>
> **[0:12](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=12)** We already have an instance variable to keep track of the current balance, so let's return it.
>
> **[0:20](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=20)** Now, let's implement deposit.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=23)** Before incrementing the balance, we'll want to double check that the amount is a positive number.
>
> **[0:28](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=28)** We can use an if statement.
>
> **[0:31](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=31)** If the amount is greater than zero, we'll add it to the balance.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=41)** Finally, the withdrawal method.
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=43)** We can only withdraw if the amount is less than or equal to the balance.
>
> **[0:49](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=49)** Let's add that if statement.
>
> **[0:55](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=55)** If this is true, we can subtract the amount from the balance.
>
> **[1:00](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=60)** Both the withdraw and deposit methods return void, so there's nothing to return.
>
> **[1:06](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=66)** Let's run it.
>
> **[1:09](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=69)** Our implementation works as expected.
>
> **[1:12](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=72)** We can deposit an amount, withdraw an amount, and retrieve the account balance correctly with this class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Navigating Java documentation](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=0)** - [Instructor] [[Java]]'s official documentation is a comprehensive resource for every Java developer, but it can be daunting to newcomers.
>
> **[0:09](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=9)** It's provided by Oracle, the company behind Java, and it serves as a reference manual for the Java programming language.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=17)** These docs tell you what functionality is already built into the language and how to use it.
>
> **[0:23](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=23)** This functionality is organized into packages and classes based on its domain.
>
> **[0:29](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=29)** Many of the functions you'll start out using will live in the java.base package.
>
> **[0:35](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=35)** Here, there's built-in functionality related to calculating times and file manipulation.
>
> **[0:41](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=41)** I encourage you to explore and click into anything that sounds interesting.
>
> **[0:47](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=47)** Let's learn about how time works in Java.
>
> **[0:51](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=51)** The java.time package is for working with dates, times, durations, and intervals.
>
> **[0:57](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=57)** Here, we can read up on the background of the package and how it's used.
>
> **[1:03](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=63)** For example, if we want to store an anniversary date, we can use the LocalDate class.
>
> **[1:11](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=71)** Scrolling down, we can learn about everything that comes with the LocalDate, including the methods and fields.
>
> **[1:19](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=79)** It looks like this class comes with three static fields, as well as instance methods and static methods.
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=87)** Taking a look at one, plusDays, let's think about how this function works.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=95)** It's an instance method that would be called on an instance of LocalDate, and looking at the description, it would return a copy of the date with the added days.
>
> **[1:47](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=107)** We'd call the function by its name and pass in one parameter that's of type long.
>
> **[1:53](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=113)** To create a local date, let's look at the static methods.
>
> **[1:57](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=117)** This is a common pattern where you use a static method instead of a constructor to create a new instance.
>
> **[2:04](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=124)** One of the benefits of this pattern is that a static method name can be more specific than a constructor name.
>
> **[2:11](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=131)** For example, here, there are many ways to construct different dates, either using the now static method or passing in items to the of method.
>
> **[2:23](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=143)** You have the option of passing in month as an int data type, or as the month data type.
>
> **[2:30](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=150)** Now, this is one way to navigate the documentation, but you probably won't read it cover to cover as there's so much built into Java.
>
> **[2:39](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=159)** Instead, you might use it as a reference as you come across new classes and members in various code bases.
>
> **[2:48](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=168)** You can use the search bar on the top right to search for specific functionality.
>
> **[2:54](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=174)** We used the pow function earlier in the course.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=177)** Let's go back to its documentation.
>
> **[2:59](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=179)** Now, we can better understand all the different things here.
>
> **[3:04](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=184)** The pow method is a part of the Math class as a static method.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=190)** The Math class also has two static fields, including PI.
>
> **[3:15](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=195)** And this makes sense because who wants to write out all the numbers to pi in their application?
>
> **[3:22](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=202)** That's the benefit of Java documentation.
>
> **[3:25](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=205)** You can learn what's built into the language and better understand the built-in Java code your code base is using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (10)
> **Definitions:** is a  (3)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** for example (2)
> **Code Identifiers:** plusdays (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Next steps for learning Java](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=0)** - [Kathryn Hodge] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=1)** You finished the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=3)** From creating your very first [[Java]] program, to understanding the fundamentals of classes and instances, you've learned a lot.
>
> **[0:11](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=11)** From here you can use some of your Java foundations to build your own Java programs.
>
> **[0:17](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=17)** Whether it's a [[Microsoft Word|word]] counting program or a card game, practice makes perfect when you're learning a new programming language.
>
> **[0:25](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=25)** If you want to dive deeper into Java, check out Java Essential Training.
>
> **[0:30](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=30)** Or the Java Code Clinic series here on [[LinkedIn]] Learning.
>
> **[0:34](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=34)** If you want to build advanced programs that store more complicated data, check out my course, [[[[Programming Foundations]]- [[Data Structures]]]].
>
> **[0:43](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=43)** Good luck.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=44)** And until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1), [[Programming Foundations]] (1), [[Data Structures]] (1)
> **Speakers:** - [kathryn (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-java-2825378)

## Skills Covered

- Java

## Path Context

### In [[Become a Software Developer]]
← [[Programming Concepts for Python]] | **9 of 12** | [[Learning C-]] →

## Appears In

- [[Become a Software Developer]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)