---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-python-25309312
url: "https://www.linkedin.com/learning/learning-python-25309312"
duration_minutes: 221
duration: 3h 41m
level: Beginner
updated: 2/21/2025
learners: 2522
skills:
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-python-3980343/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQECotgjIKCbrw/learning-public-crop_675_1200/B4EZT7PgtEGwAc-/0/1739381935225?e=2147483647&amp;v=beta&amp;t=zavFdzEcNtb5C3H8Q58J2_FVW9eqwIM5x_aSr1xHRzQ"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started with Python]]'
prev_courses:
  - '[[Python Essential Training]]'
next_courses:
  - '[[Python Object-Oriented Programming]]'
path_nav: '[{"path":"Getting Started with Python","position":2,"total":8,"prev":"Python Essential Training","next":"Python Object-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20Python.md)

![Learning Python](https://media.licdn.com/dms/image/v2/D4E0DAQECotgjIKCbrw/learning-public-crop_675_1200/B4EZT7PgtEGwAc-/0/1739381935225?e=2147483647&amp;v=beta&amp;t=zavFdzEcNtb5C3H8Q58J2_FVW9eqwIM5x_aSr1xHRzQ)

# Learning Python

> Python—the popular and highly-readable object-oriented language—is both powerful and relatively easy to learn. Whether you're new to programming or an experienced developer, this course can help you get started with Python. Joe Marini provides an overview of the installation process, basic Python syntax, and an example of how to construct and run a simple Python program. Learn to work with dates a

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-python-25309312) | 3h 41m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning Python](#learning-python)
  - [Before you get started](#before-you-get-started)
- [**1. Getting Started**](#1-getting-started) (3 videos)
  - [Using the course resources](#using-the-course-resources)
  - [Installing Python on your computer](#installing-python-on-your-computer)
  - [CoderPad Challenges](#coderpad-challenges)
- [**2. Basics of Python**](#2-basics-of-python) (8 videos)
  - [Building "Hello World"](#building-hello-world)
  - [Variables and simple data types](#variables-and-simple-data-types)
  - [Sequence data types](#sequence-data-types)
  - [Dictionary data types](#dictionary-data-types)
  - [Conditional decisions](#conditional-decisions)
  - [Loops](#loops)
  - [Defining functions](#defining-functions)
  - [Solution: Number counter](#solution-number-counter)
- [**3. Beyond the Basics**](#3-beyond-the-basics) (6 videos)
  - [Built-in functions](#built-in-functions)
  - [Solution: Find the longest string](#solution-find-the-longest-string)
  - [Classes and objects](#classes-and-objects)
  - [Importing and using modules](#importing-and-using-modules)
  - [Using exceptions](#using-exceptions)
  - [Solution: Palindromes](#solution-palindromes)
- [**4. Welcome to Part 2**](#4-welcome-to-part-2) (1 videos)
  - [Applying what you've learned](#applying-what-youve-learned)
- [**5. Using Dates and Times**](#5-using-dates-and-times) (5 videos)
  - [The date, time, and datetime classes](#the-date-time-and-datetime-classes)
  - [Formatting time output](#formatting-time-output)
  - [Using timedelta objects](#using-timedelta-objects)
  - [Working with calendars](#working-with-calendars)
  - [Solution: Dates and times](#solution-dates-and-times)
- [**6. Working with Files**](#6-working-with-files) (5 videos)
  - [Writing files](#writing-files)
  - [Reading files](#reading-files)
  - [Working with the operating system](#working-with-the-operating-system)
  - [Using the filesystem](#using-the-filesystem)
  - [Solution: Files](#solution-files)
- [**7. Working with the Internet**](#7-working-with-the-internet) (3 videos)
  - [Retrieving internet data](#retrieving-internet-data)
  - [Working with JSON data](#working-with-json-data)
  - [Manipulating XML](#manipulating-xml)
- [**Conclusion**](#conclusion) (1 videos)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning Python](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=0)** - The [[Python (Programming Language)|Python]] programming language has become one of the most popular languages in the world, and it's not hard to see why this has happened.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=7)** Python has an easy to learn format, it runs on multiple operating systems, both on the client and the cloud, and has a vast ecosystem of tools and libraries that address a large number of programming scenarios.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=18)** We'll cover a variety of topics in this course, starting with the basics of the Python language.
>
> **[0:23](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=23)** Then we'll build our first Python program in just a few lines of code before moving on to working with some of Python's built in high level data types, such as dates, times, and files.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=34)** Hi, I'm Joe Marini, and I've been building software professionally for some of the best known companies in Silicon Valley for more than 35 years.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=42)** Python is an incredibly flexible programming language that can build cross platform applications that run on the client as well as the cloud.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/learning-python?u=76281980&t=49)** Let's get started learning Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7)
> **CLI Commands:** python (7)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Before you get started](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=0)** - This course is designed to get you up and running with the [[Python (Programming Language)|Python]] programming language.
>
> **[0:04](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=4)** I've designed this course in a way that helps people new to programming to learn this incredibly valuable language, while also being useful to experienced programmers who are picking up Python for the first time.
>
> **[0:15](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=15)** If you are new to programming, you should be able to follow along and complete the course using the examples that I provided.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=21)** It will be helpful if you already have some coding experience and understand the basic principles of programming, such as using variables, writing statements, and so on.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=30)** Python has many of the same language features that you will find in other programming languages that you may have already worked with.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=37)** So having some prior programming knowledge will help, but again, it's not required.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=42)** However, if you really are completely new to programming and have never written any code before, I would suggest you watch the [[[[Programming Foundations]] Fundamentals]] course before taking this one.
>
> **[0:53](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=53)** It does a great job of introducing the basic fundamentals of programming.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=57)** This course is divided into two parts.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=59)** In the first part, we'll learn about the Python language itself.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=63)** We'll see how to write code, run our programs, and use Python's feature set.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=67)** In the second part, we'll take what we've learned about Python and apply it to some real world examples.
>
> **[1:13](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=73)** We'll see how to use the local file system, work with dates and times, and even access internet-based data sources and APIs.
>
> **[1:21](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=81)** I've designed the examples in this course to work with both traditional developer tools like Visual Studio Code, as well as newer tools, such as [[Google]] Colab, which is a free notebook environment you can use online in your browser without having to install anything at all.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=95)** Throughout the course, there will be some programming challenges that will give you opportunities to apply concepts that you've learned to solving real coding problems.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=103)** And remember, if you're new to all of this, take your time, pause the video, rewind, watch again if you need to.
>
> **[1:50](https://www.linkedin.com/learning/learning-python-25309312/before-you-get-started?u=76281980&t=110)** It may take some patience and practice, but by the end of this course, you are going to be a Python programmer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Programming Foundations]] (1), [[Google]] (1)
> **CLI Commands:** python (7), find (1)
> **Tools:** visual studio (1), colab (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the course resources](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=0)** - [Instructor] I've provided a set of exercise files to accompany this course, which you can find in the associated [[GitHub]] repository at the link that you see here.
>
> **[0:09](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=9)** The course content is organized into two separate folders.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=14)** There's the Finished folder, which contains all of the code examples in their finished state.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=20)** So you can compare your code against them as you work through the course.
>
> **[0:24](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=24)** The Start folder contains the code examples in their beginning state.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=29)** And this is the folder I will be working in throughout the course as we build towards the finished state for each example.
>
> **[0:36](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=36)** Now, there are multiple ways that you can choose to work with the exercise files for this course.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=42)** One way is to work directly within the browser using a GitHub codespace.
>
> **[0:48](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=48)** This repository has been set up with a GitHub codespace, so you can just work directly online with nothing to install.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=55)** All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a codespace.
>
> **[1:02](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=62)** So if you go here to the Code menu and you click on the [[Codespaces]] tab, you can see that I've already created a codespace.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=70)** So this is the codespace I will be using, but of course, yours will be named differently.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=74)** So let me open up the codespace and show you what it looks like.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=78)** Now, when you start your own codespace, it will take a few moments to spin up, so you just need to be patient while everything gets organized and GitHub does its magic in the background.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=89)** And then, once it's up and running, you can see that I have a browser-based version of Visual Studio Code.
>
> **[1:37](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=97)** And here are the files in their respective folders that you will need for the course.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=103)** This online version of Visual Studio Code has its own built-in terminal, which you can find here in the View menu.
>
> **[1:52](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=112)** You can see that I can... Whoops, let me get that back there.
>
> **[1:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=115)** You can see down here I can view the terminal.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=117)** Now, the terminal's already open, so I'll just go ahead and type in here.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=120)** I'm going to make sure that [[Python (Programming Language)|Python]] is installed, so I'll type python --version.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=124)** You can see I'm using Python 10.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=126)** You also want to make sure you have the Python extension installed.
>
> **[2:10](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=130)** So if you go to this little icon over here in the sidebar, the one that looks like the boxes.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=134)** If you click, you can see that I've got the Pylance, Python, and Python Debugger installed.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=142)** These should already be here for you in the codespace.
>
> **[2:24](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=144)** If they're not, you can install them from the extensions marketplace.
>
> **[2:28](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=148)** Just search for Python up here in the search box, and that's all you'll need to do.
>
> **[2:33](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=153)** The second option for working online without using a GitHub codespace is to use an online notebook like [[Google]] Colab.
>
> **[2:42](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=162)** Google Colab is a free hosted notebook environment that doesn't require any setup at all.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=169)** Just go to colab.google in your browser, sign in with your Google account, and you are ready to go.
>
> **[2:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=175)** If you don't have a Google account, it just takes a few steps to create one.
>
> **[2:59](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=179)** So go ahead and click on New Notebook.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=182)** And we'll just wait a few moments while that spins up.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=185)** And then, once the notebook environment loads in your browser, you are ready to go, you can give the notebook a name.
>
> **[3:12](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=192)** I'll just call mine Learning Python.
>
> **[3:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=194)** And that's pretty much all you need to do.
>
> **[3:16](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=196)** There's no additional setup for Google Colab at all.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=201)** Now, if you want to use Colab for this course, sometimes you'll just need to either copy and paste the starting point code for some of the examples into the notebook.
>
> **[3:32](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=212)** I've tried to minimize that, but there's going to be some cases where I have some setup code, so you'll have to copy and paste it.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=218)** Or you can just type the code yourself.
>
> **[3:41](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=221)** So what you're going to do is, if you want to use this notebook, you can just create a code cell for each of the examples.
>
> **[3:47](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=227)** And you see if I hover over here down below the existing code cell, I can add new code cells here.
>
> **[3:53](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=233)** So just add a new code cell for each example.
>
> **[3:56](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=236)** Now, there's also a third option, which is more complicated than the other two, so I only suggest this if you're an experienced programmer and you know what you're doing.
>
> **[4:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=244)** If you want to download the files and work locally on your computer, that's easy enough to do.
>
> **[4:10](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=250)** Back here in GitHub, let's go back to the repo.
>
> **[4:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=254)** And if I click on the Code menu and click on Local, you can see that I can either clone the repository locally or I can just download a zip file, and then use my favorite code editor to work on them.
>
> **[4:27](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=267)** You will just need to make sure that you have Python installed on your computer in order to use these examples.
>
> **[4:32](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=272)** I'll show how to install Python on your machine in a separate video in case you want to go this route.
>
> **[4:38](https://www.linkedin.com/learning/learning-python-25309312/using-the-course-resources?u=76281980&t=278)** Any one of these options, GitHub codespace, using a Google Colab notebook, or working locally is just fine for following along with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[GitHub]] (8), [[Google]] (7), [[Codespaces]] (1)
> **Tools:** github (8), colab (6), terminal (3), visual studio (2)
> **CLI Commands:** python (10), make (3), find (2)
> **Prerequisites:** install (3), setup (3), set up (1), you'll need (1)
> **UI Navigation:** click on (4), go to (2), in the sidebar (1)
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Installing Python on your computer](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=0)** - [Instructor If you want to complete this course Locally on your computer, you'll need to make sure that [[Python (Programming Language)|Python]] is properly installed and configured.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=7)** And I just want to be clear, this step is completely optional for this course.
>
> **[0:12](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=12)** It is entirely possible to complete this entire course online in your browser without installing anything.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=18)** So, if you want to go that route, you don't need to do this part, and you can skip this video.
>
> **[0:24](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=24)** Okay, if you're still here, I'm assuming that you want to see how to install Python on your computer.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=28)** Fine, we'll have it your way.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=29)** Let's go.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=30)** On my machine, I'm going to open a terminal window, and you can do this on your operating system.
>
> **[0:36](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=36)** Now I'm using [[Windows]], but the process for the Mac is very similar.
>
> **[0:40](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=40)** So I'm going to type the command PY.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=43)** That's for Windows.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=44)** For Mac, you're going to type out Python3, and this is also for [[Linux]].
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=49)** If you're on Mac or Linux, type out Python3.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=51)** For me, I'm going to type PY, and then a space and then --version.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=57)** And you can see that I'm using Python 3.13 on my machine.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=63)** Now if you didn't get a result that looks like this, the [[Microsoft Word|word]] Python, followed by a version number, you probably got some kind of error message.
>
> **[1:12](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=72)** Or maybe the version that you have is older than 3.13.
>
> **[1:16](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=76)** That means that you should install the latest version of Python on your computer.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=80)** So we do that by going to the [python.org](https://python.org) website, which I happen to have open right here.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=86)** So I'm going to click on the downloads link right here.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=89)** And that will take me to the downloads page.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=91)** You can see here that there is a link to download the latest version, and it defaults to my version of my operating system.
>
> **[1:38](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=98)** So this is Windows, but you can download it for Mac or for Linux.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=103)** Now, I've already done this for my machine, so if you need to do this, go ahead and click the download button and then run the installer when it finishes downloading.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=111)** It's a very simple process.
>
> **[1:52](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=112)** It should only take a few minutes to complete.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=114)** And then once you've done that, go back to the terminal, try that test again that we did earlier to make sure that everything worked.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=120)** So once you've got Python installed, you are ready to continue.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=124)** And remember, you can complete the entire course without installing Python if you want to.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/installing-python-on-your-computer?u=76281980&t=129)** You only need to do this if you want to run Python on your local computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Windows]] (3), [[Linux]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** python (9), make (2), python3 (2)
> **Prerequisites:** install (2), you'll need (1)
> **Versions:** python 3 (1), 3.13 (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1), is a  (1)
> **URLs:** [python.org](https://python.org) (1)
> **Cross-References:** go back to (1)

#### [CoderPad Challenges](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=0)** - [Narrator] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=16)** These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=25)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=33)** The code challenge has four areas.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=35)** There are instructions in the top left, a code editor where you will create your answer here in the top right, another code editor where you can see how your code is used in the bottom right and a console for output in the bottom left.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=51)** You can use these drag handles to allocate space as you like and to get even more horizontal space for the code editors, you can collapse the course's table of contents on the left, which you can see I've already done.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=65)** Each challenge has instructions that include a description of the challenge and the challenge's parameters, and the desired result.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=74)** Now depending on the challenge, you'll see some additional information in the instructions such as an explanation of the parameters that your code will be given.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=83)** Along with some examples of what the expected output might look like.
>
> **[1:27](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=87)** You will create your answer in the top right code editor.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=91)** There are comments in the starting code showing where to put your solution.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=96)** When you click on test my code down here in the bottom right, you will see a message indicating whether your code returned a correct result.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=104)** So in this case, the correct answer for finding the largest number in the list is going to be return max of numbers.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=114)** And I'm going to go ahead and click on test my code.
>
> **[1:56](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=116)** And you can see here in the consult it says, that's right, my code returns 19.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=120)** Now if your code isn't successful, you can ask for help.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=124)** Let's go back and change this to the wrong answer.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=127)** You can see when I click on test my code, oh, I get a problem, the show expected result and show hints variables determine whether you see the expected result and any hints.
>
> **[2:18](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=138)** So I'm going to change both of these to true.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=142)** Alright, and then I'm going to click test on my code again.
>
> **[2:25](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=145)** And now you can see over here in the console, I am getting the expected result.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=150)** And there's a little bit of a hint that tells me where to find the right function to be able to use.
>
> **[2:36](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=156)** The code editor in the lower right shows how your solution is used, and in some cases you can change that code to experiment with different test cases.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=166)** Now, regardless of whether your answer is successful, you will see messages in the console in the lower left.
>
> **[2:52](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=172)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:57](https://www.linkedin.com/learning/learning-python-25309312/coderpad-challenges?u=76281980&t=177)** And when you've finished each code challenge, you can return to the course's table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 2. Basics of Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Building "Hello World"](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=0)** - [Instructor] All right, welcome to part one of the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=3)** It is time to start learning and writing some actual [[Python (Programming Language)|Python]] code.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=7)** So before we fire up our text editor and just start diving in, we're first going to use Python's interpreted mode in the command line interface to see how easy it is to write and run Python.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=20)** So this mode is called the Python REPL, which stands for read, evaluate, print, loop.
>
> **[0:26](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=26)** Now this might surprise you, but there's a Python Interpreter built into the Python website itself.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=33)** So let's go to [python.org](https://python.org), which is where I am now, and I'm going to start up the Python Interpreter.
>
> **[0:39](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=39)** Can you guess where it is? Go ahead, guess.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=43)** Okay, I'll show you where it is.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=45)** So this little icon right here, if you click on it, you see how it says Launch Interactive Shell?
>
> **[0:50](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=50)** I'm going to click on this, and then right here in our browser, we don't got to install anything.
>
> **[0:54](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=54)** We get a nice Python Interpreter that we can just start working with.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=59)** So in this mode, I can just simply type some Python code, and it will run right here in the browser immediately.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=66)** So let's try some things.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=67)** Let's try 2+2, and you can follow along with me, and you can see that that comes back as 4.
>
> **[1:13](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=73)** So what's happening here is the Python Interpreter is reading what I typed, evaluating the code, printing the result, and then looping back again to the input state.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=85)** You can see the cursor there next to the little three arrows.
>
> **[1:28](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=88)** That's where the term REPL comes from.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=91)** Read, evaluate, print, and loop.
>
> **[1:34](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=94)** Python is an interpreted language, like some other common ones in use today.
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=99)** For example, like [[JavaScript]] in web browsers, if you've done any [[Web Development]].
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=104)** The Python Interpreter simply takes each line of code as it comes across and interprets and executes it.
>
> **[1:50](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=110)** And in this case, it's simply taking the numerical expression, 2+2, evaluating it, and coming back with the result of 4.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=119)** All right, so let's try something a little bit more interesting.
>
> **[2:02](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=122)** Type this along with me.
>
> **[2:03](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=123)** I'm going to say print open parentheses in a quote and then hello world.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=129)** And then another quote and then a closed parentheses.
>
> **[2:12](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=132)** And then hit the Enter key.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=134)** And you can see now I've executed the simple Python statement print, which is a built-in Python function along with the string of characters hello world.
>
> **[2:26](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=146)** And we'll learn more about Python functions later in the course.
>
> **[2:29](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=149)** So for now, just follow along with me.
>
> **[2:32](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=152)** All right, let's try something else.
>
> **[2:33](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=153)** I'm going to write name and then a space with an equal sign and another space.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=160)** And now I'm going to write input and open parentheses and quotes.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=166)** And we're going to write, what is your name, question mark.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=170)** And then a space, quotes and closed parenthesis.
>
> **[2:56](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=176)** And when I hit Enter, you can see that now Python is running the input function, which gives me a chance to enter a value.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=185)** So I'll type my name and then hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=189)** And what I've done now is I've created a variable called name, which contains the value that this input function asked for.
>
> **[3:18](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=198)** And we'll learn more about variables later in this chapter.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=201)** For now, you can just think of them as little boxes that hold data and that data can change.
>
> **[3:27](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=207)** So if I type name, okay, you can see that I get back the value that the name variable currently contains.
>
> **[3:35](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=215)** So let's use our print function again.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=218)** So type this along with me.
>
> **[3:40](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=220)** I'm going to print and then open parenthesis quotes, nice to meet you, comma, and then closed quote.
>
> **[3:51](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=231)** Oh actually, sorry, close quote, I got myself stuck.
>
> **[3:55](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=235)** Let's try this again.
>
> **[3:56](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=236)** Print, open parenthesis, quote, nice to meet you, closed quote, then the comma and then name.
>
> **[4:09](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=249)** And when I execute this, you can see the result there, we are combining the nice to meet you string with the variable in our print statement to get this result.
>
> **[4:20](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=260)** So the Python Interpreter in this mode gives us the ability to try out simple ideas before putting them into a real program.
>
> **[4:29](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=269)** All right, now let's type the [[Microsoft Word|word]] exit and open and closed parentheses like this.
>
> **[4:35](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=275)** So we're calling the exit function and that exits us out of the Python Interpreter.
>
> **[4:40](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=280)** Okay, so now that we've seen how to write and execute some very basic Python statements using the REPL, let's use our code editor and write our first Python program using what we've learned so far.
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=293)** So I'm going to demonstrate how to do this first in Visual Studio code and then I'll show how to do it in [[Google]] Colab.
>
> **[5:00](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=300)** So let's go over to [[GitHub]] and you can see I've started up my codespace.
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=307)** And in case you've forgotten how to do that here in the GitHub link, if you go to the Code menu under [[Codespaces]], you'll have to create a new codespace.
>
> **[5:15](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=315)** I've already done that. So I'm starting up my codespace.
>
> **[5:19](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=319)** And when you do this, it might take a moment or two to get started up.
>
> **[5:22](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=322)** So just be patient.
>
> **[5:24](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=324)** And then in the Start folder in chapter two, okay, I'm going to open up the helloworld_start.py file.
>
> **[5:35](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=335)** And let's just close this terminal for now.
>
> **[5:38](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=338)** All right, so let's start off by printing out a hello world message.
>
> **[5:43](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=343)** And you can see that as I type my code, VS Code is helping me out.
>
> **[5:48](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=348)** So I'm going to write Hello World.
>
> **[5:53](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=353)** Let's also have the user input their name.
>
> **[5:56](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=356)** So I'll write input, what is your name?
>
> **[6:03](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=363)** And I'll put a space in there for nice formatting and then I'll print, nice to meet you comma name.
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=374)** All right, so now I need to run my program.
>
> **[6:17](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=377)** And a few minutes ago when we were using the REPL mode, Python was executing each line as I typed it.
>
> **[6:24](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=384)** So now I have a collection of lines of code and I want to run them all at once.
>
> **[6:29](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=389)** So to do this in Visual Studio, what I'm going to do is right click and down here in this menu you can see I've got Run Python and I can choose Run Python in Terminal.
>
> **[6:39](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=399)** I can also do the same thing by right clicking on the file name here in the list.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=405)** You can see I got this little Run Python file in Terminal option down here.
>
> **[6:50](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=410)** So when I do that, you can see that the terminal opens up, the code runs.
>
> **[6:56](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=416)** I'm going to type in my name and you can see the result there.
>
> **[7:00](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=420)** All right, so far so good.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=422)** You can also run your programs directly in the terminal if you want to do it that way.
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=427)** So what I can do is I can right click on the chapter two and choose Open in Integrated Terminal.
>
> **[7:14](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=434)** And once I do that, I can just write the command python.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=438)** And if you're doing this locally on your Mac or [[Windows]] it's different.
>
> **[7:21](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=441)** For Windows, it's just py.
>
> **[7:23](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=443)** For the Mac, it's Python three.
>
> **[7:26](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=446)** Here in the codespace I'm going to write python and then helloworld_start.py, and you can see that the program runs.
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=452)** So I can run it manually if I want to as well.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=455)** All right, let's go ahead and run the same thing in Colab.
>
> **[7:38](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=458)** So I'm going to switch over to Google Colab and you should already have a notebook created.
>
> **[7:43](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=463)** If you don't, make a new one.
>
> **[7:45](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=465)** And you should have a code cell.
>
> **[7:46](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=466)** If you don't have a code cell for some reason, just click on the + Code button right here and let's do the same thing.
>
> **[7:52](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=472)** And to make this really simple, I'm just going to copy and paste this code.
>
> **[7:57](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=477)** All right.
>
> **[7:57](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=477)** So what I'm going to do now is now that I've got my code, I'm going to run it by clicking on this little play button right here.
>
> **[8:04](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=484)** And this will take a moment for Colab to connect to the back end.
>
> **[8:08](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=488)** You can see down here it's saying it's connecting.
>
> **[8:11](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=491)** All right, so here's the program running, here's my hello world, it's asking me what is my name.
>
> **[8:14](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=494)** I'll type in Joe, and sure enough we see the same result.
>
> **[8:19](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=499)** All right, well congratulations.
>
> **[8:21](https://www.linkedin.com/learning/learning-python-25309312/building-hello-world?u=76281980&t=501)** You have just written a Python program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (29), [[Google]] (2), [[GitHub]] (2), [[Windows]] (2), [[JavaScript]] (1)
> **CLI Commands:** python (29), make (2)
> **Tools:** terminal (6), colab (4), visual studio (2), github (2), command line (1)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** repl (4)
> **Definitions:** is called (1), stands for (1), is an  (1), is a  (1)
> **File Paths:** helloworld_start.py (2)
> **Code Identifiers:** helloworld_start (2)

#### [Variables and simple data types](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=0)** - [Instructor] Just about every program needs to work with data and information.
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=5)** And in this example we'll explore [[Python (Programming Language)|Python]]'s basic data types and learn how to work with variables.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=11)** So we saw a quick example of this in the previous video when we created a variable to hold a name value.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=18)** So here in my code I'm going to open up the file variables_start.py, and if you're using CoLab you can go ahead and copy the starting point code right here into your notebook and follow along there.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=33)** So what I'm going to do is I'll just do that right now.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=35)** I'm going to copy these lines and then you can go ahead and create a new code cell just by clicking on plus code here.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=43)** Or if you hover, you'll see that you'll get these little plus code buttons.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=46)** So let's just go ahead and paste those in and I'll come back to Colab in just a moment.
>
> **[0:52](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=52)** All right, so there are five major data types in Python.
>
> **[0:56](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=56)** There are numbers such as integers and floating point values with decimal points.
>
> **[1:02](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=62)** There are strings which is a sequence of characters in quotes and there are Boolean values which are either true or false.
>
> **[1:13](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=73)** There are two other major data types that we're going to learn about in a separate video.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=78)** So I'm not going to cover those here, they're coming later.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=80)** There are sequence types which are sequences of values and there are dictionaries which map unique keys to specific values.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=90)** So I've defined some variables here to hold each of the basic data types.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=95)** A variable in Python is basically just like a little box that holds whatever value you put into it.
>
> **[1:41](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=101)** I've given my variables these names and variable names in Python have to follow some rules.
>
> **[1:48](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=108)** They have to start with either a letter or an underscore like this and they can contain letters or numbers, right?
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=117)** So I can do something like this.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=119)** What they can't do is they can't start with a number, that causes an error.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=124)** So if I try to name this 1myint, you can see that the code turns red because that's a problem and they are case sensitive.
>
> **[2:12](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=132)** So for example, if I named a variable myint and another one with a capital I like this, those are two different names and two different variables.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=140)** We can display the value of a variable by using the print function like we did in the previous video.
>
> **[2:28](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=148)** So in that example we use print to display a message.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=151)** Here we can use it for our variables, so let's try that out.
>
> **[2:34](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=154)** So let's print out myint and let's print out mystr.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=160)** All right, and then let's run what we have and we'll do that the same way we did in the previous video.
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=165)** I'll just choose run Python in terminal and sure enough you can see the output there.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=170)** And of course we can try this in CoLab.
>
> **[2:53](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=173)** So let's copy these lines, go to CoLab, paste them in, and let's run.
>
> **[2:59](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=179)** And you can see the result here, so we can operate on data.
>
> **[3:03](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=183)** It's not enough just to declare variables.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=185)** We want to be able to operate on the data and let's try some operations.
>
> **[3:11](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=191)** Oh, by the way, before we do that, you might be wondering what these lines with the green text is and why there's a hash character in front of these.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=199)** These are called comments.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=200)** Comments are used by programmers to explain what the code is doing.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=206)** Now they're not part of your program, they're completely ignored by the Python interpreter.
>
> **[3:31](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=211)** And you will see comments like these in my examples throughout the course that explain what is happening in each example.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=218)** And they're really useful.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=219)** They help remind you or other people who work on your code what a specific section of code is doing.
>
> **[3:45](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=225)** So I highly encourage people to use comments in their code.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=228)** All right, so let's talk about operators on data.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=232)** So we have standard math operators such as addition, subtraction, multiplication, so on.
>
> **[3:57](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=237)** So let's try some of those.
>
> **[3:59](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=239)** Let's print out myint plus myfloat and let's try the multiplication operator.
>
> **[4:10](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=250)** So that's going to be the star character, myint star, myfloat is multiplying.
>
> **[4:16](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=256)** And let's also try the division operators.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=258)** That's my end divided by, that's a slash character myfloat.
>
> **[4:25](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=265)** And there are also some operators that you might not be familiar with but are used in programming quite a bit.
>
> **[4:31](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=271)** For example, there's the modulo operator which is represented by the percent sign.
>
> **[4:37](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=277)** So if I write percent, so myint percent three.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=285)** So the modulo operator, this percent sign right here, gives me the remainder of the first number divided by the second number.
>
> **[4:55](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=295)** So if we scroll back up and we see that myint is 10, so 10 divided by three, right?
>
> **[5:00](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=300)** So three goes into 10, three times, which is nine.
>
> **[5:03](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=303)** And then the remainder should be one.
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=307)** So what I'm going to do is comment out each of these previous lines, we don't see them in the output and I'll choose run Python file in terminal, and sure enough you can see here's the result of the addition, the multiplication, the division, and sure enough the modulo operator gives me the remainder value amount.
>
> **[5:29](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=329)** All right? I can also perform operations on data types that aren't numbers.
>
> **[5:35](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=335)** So let's close this terminal.
>
> **[5:38](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=338)** So for example, I can add two strings together.
>
> **[5:41](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=341)** I can write another str equals, this is another string and then I can print out mystr plus another str.
>
> **[5:57](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=357)** I can also multiply a string.
>
> **[6:00](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=360)** I can do print nom space times three.
>
> **[6:10](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=370)** And once again, before we try that, I'm going to comment out my previous examples.
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=374)** I'm going to select these lines and I'm going to type control slash, the forward slash, and it's command forward slash if you're on the Mac and that will comment out multiple lines.
>
> **[6:24](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=384)** All right, so let's go ahead and try running this again.
>
> **[6:29](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=389)** So you can see my two strings got added together and then my nom got turned into nom nom nom by multiplying it by three.
>
> **[6:37](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=397)** Now you have to be careful here, you can't add two fundamentally different data types.
>
> **[6:43](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=403)** So if I try to add a string with a number, that doesn't work.
>
> **[6:47](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=407)** So if I write print mystr plus one, that's going to cause an error.
>
> **[6:55](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=415)** Let's try running that again.
>
> **[6:57](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=417)** And you can see that this is what an error looks like in Python.
>
> **[6:59](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=419)** You can see it says, "TypeError, can only concatenate str not int to str."
>
> **[7:06](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=426)** There are two fundamentally types.
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=427)** Now there is a way to fix this and get it to work, but we'll save that for the next chapter.
>
> **[7:13](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=433)** We also have operators that perform logical and comparison operations.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=438)** So let's try some comparisons.
>
> **[7:20](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=440)** I can write print, now if I want to see if a variable is equal to a specific value, I can use the double equal sign, not just one, that's how you assign the value, I need to do double equals 10.
>
> **[7:34](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=454)** And that's true.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=455)** I can also check to see if a variable is not equal to something by using the exclamation point equals operator.
>
> **[7:44](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=464)** I can use comparison operators, I can check to see if myint is greater than 20.
>
> **[7:52](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=472)** I can check to see if myfloat is less than 10.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=478)** And there are also operators for greater than or equal to to simply append an equal sign on the end of each of these to check to see if the value is less than or equal to.
>
> **[8:09](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=489)** And once again, I'm going to comment out these lines.
>
> **[8:15](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=495)** Let's go ahead and run this and we can see that yes, myint is equal to 10.
>
> **[8:22](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=502)** Yes, myfloat is not equal to 20, that's true.
>
> **[8:26](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=506)** Myint is not greater than 20, so that's false.
>
> **[8:29](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=509)** And myfloat is not less than ten, so that's false.
>
> **[8:32](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=512)** All right, let's keep on going.
>
> **[8:35](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=515)** We have logical operators, these perform Boolean operations on values.
>
> **[8:40](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=520)** So for example, if I wanted to check to see if myint is greater than five and myfloat was less than a value, I can do that using the logical operator.
>
> **[8:53](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=533)** So I'll write myint is greater than five and myfloat is less than 25.0.
>
> **[9:05](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=545)** Now since both of those statements are true, the result should be true.
>
> **[9:11](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=551)** So let's comment these guys out.
>
> **[9:15](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=555)** All right, and let's run this and sure enough, that's true.
>
> **[9:22](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=562)** I can also change this to an or operation.
>
> **[9:25](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=565)** So I can check to see if myint is, let's see, less than five, which is false, right?
>
> **[9:33](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=573)** It's 10 or myfloat is less than 25 and the result is still true, right?
>
> **[9:41](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=581)** Why? Because in the case of an or operator, only one of these has to be true.
>
> **[9:47](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=587)** There's also the not operator, which just flips the result of a Boolean expression.
>
> **[9:53](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=593)** So if I print not, and I'll put these in parentheses just to group them together, all right, let's try that.
>
> **[10:06](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=606)** Now we can see that the result is false because I'm taking the result of this expression, which is true and using the not operator to flip it.
>
> **[10:17](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=617)** All right, we will get more into this as we go through the course, but this should give you some foundational knowledge of how to do operations and data types.
>
> **[10:26](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=626)** It's also worth noting that variables can be re-declared in your code.
>
> **[10:30](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=630)** So for example, the fact that I originally declared myint to be an integer up here, that doesn't really matter.
>
> **[10:38](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=638)** If I really want to, I can do something like this.
>
> **[10:40](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=640)** I can write myint equals and now A, B, C, and I'll print it out and let's go ahead and comment that out.
>
> **[10:50](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=650)** All right, so let's go ahead and run this.
>
> **[10:54](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=654)** And you can see that it works, A, B, C gets printed out.
>
> **[10:56](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=656)** So I changed both the value and the type.
>
> **[11:00](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=660)** Right now it's a string and Python is just fine with that.
>
> **[11:04](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=664)** Okay, so that was quite a bit about variables and operators.
>
> **[11:07](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=667)** If you didn't get all of it the first time though, don't worry.
>
> **[11:10](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=670)** We're going to be using these kinds of foundational Python features throughout the course.
>
> **[11:15](https://www.linkedin.com/learning/learning-python-25309312/variables-and-simple-data-types?u=76281980&t=675)** Once you've used them a few times, they will start to come naturally to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10)
> **CLI Commands:** python (10)
> **Analogies:** for example (5), such as (2), just like (1)
> **Tools:** colab (4), terminal (3)
> **Cross-References:** previous video (3), next chapter (1)
> **Definitions:** is a  (2)
> **File Paths:** variables_start.py (1)
> **Code Identifiers:** variables_start (1)

#### [Sequence data types](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=0)** - [Instructor] Right, remember I said that there were five main data types in [[Python (Programming Language)|Python]].
>
> **[0:04](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=4)** We covered three in a previous video, numbers, strings and booleans.
>
> **[0:10](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=10)** And now we're going to learn about the other two, which are sequences and dictionaries.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=14)** These are called compound data types because they contain multiple values.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=19)** In this video, I'm going to focus on sequence types, and I'll cover dictionaries in a separate video.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=25)** So let's open up sequence_start.py, and if you're using CoLab, just go ahead and make a new code cell if you don't already have one.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=34)** So a sequence is exactly what its name implies, it is a sequence of values.
>
> **[0:40](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=40)** And one very common type of sequence is a list.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=44)** A list is defined using square brackets.
>
> **[0:47](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=47)** So I'm going to create a variable named mylist, and then I'm going to type these two square brackets.
>
> **[0:52](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=52)** Now, each value is separated by a comma, and they don't all have to be the same type.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=57)** So I'll put some numbers in here, and I'll put a string, and then I'll put a floating point number, and then let's put a boolean in here.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=67)** So lists, just like any other sequence, have a length.
>
> **[1:11](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=71)** So, I can use the len function to calculate the length.
>
> **[1:16](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=76)** So let's print out the length of my list.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=80)** Alright, so let's try running what we have.
>
> **[1:24](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=84)** And we can see that the list is five-items long.
>
> **[1:27](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=87)** Let's go ahead and try this in CoLab.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=90)** So I'll copy and paste this in, run.
>
> **[1:34](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=94)** Okay, and you can see that it works.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=96)** Alright.
>
> **[1:37](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=97)** So the way that you access each value in a list is by using an index, which is also enclosed in brackets.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=104)** Now, indexes are zero based.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=107)** In other words, this first item right here is at index zero, and positive indexes start from the beginning, and negative indexes start from the end.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=117)** So if I wanted to access this string right here, it's the third item, but it's at index two because it's zero based.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=127)** So, I would write print(mylist[2]).
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=131)** And I can also index in from the end.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=134)** So if I print(mylist[-1]), right, that will give me this boolean value right here.
>
> **[2:24](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=144)** I can also change the value at an index in a list by just assigning a new value at that index.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=151)** So for example, if I wanted to write mylist[0] = 10, we can then print out my list to see how it's changed.
>
> **[2:43](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=163)** Alright, so let's pause here and run what we've got.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=169)** Okay, so I got the length still.
>
> **[2:51](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=171)** So here's the item at index two, there's the boolean at index minus one.
>
> **[2:56](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=176)** And you can see now that I've changed the first value from a zero into a 10.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=182)** Let's go ahead and try this in CoLab.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=185)** And you can either use the same code cell, or you can make another code cell, right, you can see that the results are the same here.
>
> **[3:14](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=194)** Alright, I'm going to keep on working in the Codespace.
>
> **[3:16](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=196)** If you want to work in CoLab, that's fine, keep on doing that.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=200)** Alright, we can also add lists to each other using the addition operator.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=206)** So let's comment out these previous examples.
>
> **[3:31](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=211)** And I'm going to define another list, and I'm going to put some values in there.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=218)** And then I'm going to write mylist = mylist + another_list.
>
> **[3:45](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=225)** And then, let's print out my list.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=228)** Alright, and let's try that.
>
> **[3:51](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=231)** And you can see that the values in the second list just get added on to the end of the first list.
>
> **[3:58](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=238)** Oh, by the way, remember we learned about strings in the previous video, I want to point out here that strings are also sequences.
>
> **[4:05](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=245)** So each element in a string is a character.
>
> **[4:09](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=249)** So if I have a string, like mystr, and "This is a string," right, I can access individual characters the same way by using a sequence indexer.
>
> **[4:24](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=264)** So if we comment out this previous one and we run this, you can see that I'm getting the letter i, which is the third letter, but it's at index two.
>
> **[4:37](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=277)** The difference however, is that strings, unlike lists, are immutable.
>
> **[4:42](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=282)** So you can't change the value of a string once it's created, you have to make a new string if you want to change it.
>
> **[4:48](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=288)** So for example, if I tried to do something like mystr[2] = "Z," right?
>
> **[4:57](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=297)** If I try to run that, you'll see that results in an error, and it says the "'str' object does not support item assignment," that's because I just can't change it.
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=307)** So, just something to be aware of.
>
> **[5:09](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=309)** Let's continue looking at indexing.
>
> **[5:13](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=313)** So let's go ahead and comment that.
>
> **[5:15](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=315)** So the indexing is pretty flexible.
>
> **[5:18](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=318)** We can use this indexing method to access multiple continuous elements in a sequence by creating what's called a slice.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=327)** A slice has a starting and an ending value.
>
> **[5:30](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=330)** So if I wanted to get say, three items in the list, these three items right here, I could write a slice that looks like this.
>
> **[5:42](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=342)** So I'll write mylist, and then inside the brackets, I'll have the starting value, which is index one, up through index four.
>
> **[5:50](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=350)** So the first number is the index to start, the second is the index to stop.
>
> **[5:56](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=356)** And that number is not inclusive.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=358)** So this slice will give me index one, index two, and index three, but not the four.
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=364)** And I can also specify a third value, which is the step amount.
>
> **[6:08](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=368)** Now, normally, the index increments by one, but I can change that.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=371)** So to skip every other item, I would just step by two.
>
> **[6:15](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=375)** So let's go ahead and try that.
>
> **[6:19](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=379)** And you can see that I'm getting index one and index three, and we're skipping over the second one.
>
> **[6:27](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=387)** Now, slicing values, by the way, are optional.
>
> **[6:30](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=390)** So I can leave out the first value, and that would be the default to start at zero.
>
> **[6:36](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=396)** I can leave out the four, and then the default value would be to go all the way to the end of the sequence.
>
> **[6:43](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=403)** And of course, you can also use negative numbers in slices to operate starting at the end of the sequence, and I'll let you try that on your own.
>
> **[6:51](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=411)** But let's go ahead and run this updated code, and you'll see that now, I'm getting index zero, and then it's skipping one and getting me two, skipping three, giving me four, right, and so on.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=422)** And one interesting trick that you can do with this is to reverse the order of a sequence.
>
> **[7:09](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=429)** So for example, if I wrote print(mylist), and then I'm going to use this trick to leave out the starting and ending values, and then do a minus one.
>
> **[7:20](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=440)** Alright, let's go ahead and comment that one out.
>
> **[7:24](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=444)** If I run this, you can see that now the sequence has been reversed.
>
> **[7:30](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=450)** And by the way, that works with strings too.
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=452)** So if you want to reverse a string, you can do this little trick right here with the string.
>
> **[7:39](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=459)** So there's two other types of sequences I want to cover, and they are tuples and sets.
>
> **[7:45](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=465)** Tuples are like lists, but we define them using parentheses instead of brackets.
>
> **[7:50](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=470)** So let's define a tuple.
>
> **[7:54](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=474)** So inside parentheses, I'll write some data values, and then I'll print out mytuple at index one.
>
> **[8:07](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=487)** Alright, let's go ahead and run that.
>
> **[8:11](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=491)** Okay, and you can see the result there.
>
> **[8:13](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=493)** So I can perform the same kinds of operations on tuples as I can on lists.
>
> **[8:18](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=498)** I can use indexes and slices to access their content, I can use the len function to get their length.
>
> **[8:24](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=504)** The core difference between a list and a tuple is that tuples are immutable, just like strings are.
>
> **[8:31](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=511)** They can't be changed once they are created.
>
> **[8:33](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=513)** So I can't change the value at any of these indexes.
>
> **[8:37](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=517)** Tuples are often used to hold data that isn't going to change, which makes them a little bit more efficient in memory and processing than lists are.
>
> **[8:46](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=526)** And they can be used to do things like return multiple values from a function, and we'll learn more about functions later in the chapter.
>
> **[8:54](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=534)** Sets are another sequence type similar to lists.
>
> **[8:58](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=538)** So let's define a set, and they are defined using curly braces instead of parentheses.
>
> **[9:05](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=545)** So I'll define some values, {1, 2, 3, 2, 4}, and then a string.
>
> **[9:15](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=555)** Then we'll print it out.
>
> **[9:17](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=557)** Sets are an interesting data type because they can only contain unique values.
>
> **[9:23](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=563)** So you can see here, I've defined my set with two instances of the number two.
>
> **[9:29](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=569)** Let's comment out this previous print.
>
> **[9:32](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=572)** But when I run this, you can see that in the output, there's only one instance of the value two.
>
> **[9:40](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=580)** So the other one automatically got filtered out.
>
> **[9:43](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=583)** So sets enforce uniqueness in their membership.
>
> **[9:47](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=587)** So you can only have one instance of each value.
>
> **[9:50](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=590)** And you can use sets in situations where you want to make sure that there's only one instance of a particular value in the sequence.
>
> **[9:58](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=598)** And it's also important to note that sets, unlike lists and tuples, don't support indexing.
>
> **[10:06](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=606)** So if I try to index into this set by using something like this, if we run this, you can see that I get a type error, and it says "'set' object is not subscriptable," which is just kind of a fancy way of saying, "Hey, you can't use indexes on sets."
>
> **[10:25](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=625)** Alright, one more thing I want to show, and that is the test for membership.
>
> **[10:30](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=630)** You can use the IN operator to see if a value is in a sequence.
>
> **[10:35](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=635)** So let's try that out with each of the sequences we've created so far.
>
> **[10:39](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=639)** So let's check to see if one is in my list, let's check to see if three is in my tuple, and let's check to see if five is in my set.
>
> **[10:54](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=654)** Alright, let's go ahead and run that.
>
> **[10:58](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=658)** And we can see that, sure enough, one is in my list.
>
> **[11:01](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=661)** There is no value three in the tuple, and there is no value five in the set.
>
> **[11:08](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=668)** So sequences are one of the most common foundational data types in Python.
>
> **[11:13](https://www.linkedin.com/learning/learning-python-25309312/sequence-data-types?u=76281980&t=673)** They are used in almost every kind of program, and we will be using them as we progress through the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4), python (2)
> **Analogies:** for example (3), just like (2), similar to (1)
> **Definitions:** is a  (4), in other words (1)
> **Cross-References:** previous video (2), we covered (1), later in (1)
> **Tools:** colab (4)
> **Code Identifiers:** sequence_start (1), another_list (1)
> **Warnings:** be aware (1), note that (1)

#### [Dictionary data types](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=0)** - [Instructor] Let's round out our investigation of data types by considering the dictionary type.
>
> **[0:06](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=6)** Now it's called a dictionary because it works kind of like how a real-world dictionary does.
>
> **[0:12](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=12)** You look up the data inside a [[Python (Programming Language)|Python]] dictionary by using a key-value.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=17)** Now in a real dictionary, that would be in individual [[Microsoft Word|word]], which you would look up to see what the definition is.
>
> **[0:24](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=24)** And Python dictionaries are similar.
>
> **[0:26](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=26)** They use key-value pairs to associate data with a specific key.
>
> **[0:32](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=32)** So where sequence types, which we saw previously, are indexed by a range of numbers, dictionaries are indexed by a set of unique key-values.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=42)** Let's go ahead and open up the dict_start file.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=46)** And, of course, if you're using Colab, that's great, just go ahead and make a new code cell.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=51)** So let's start by creating a dictionary.
>
> **[0:53](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=53)** And we're going to do this by using curly braces, sort of like with sets, but the difference is that we specify a key and then a value to go along with it, separated by a colon.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=65)** So let's create a variable called mydict, and I'm going to have these two curly braces.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=70)** And then let's start putting some keys and values into the dictionary.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=74)** So I'll have a key, which is a string of "one" associated with a value of 1, and then I'll do the same thing here.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=83)** I'll make one for two.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=85)** Then I'll change things up, and I'll have the key be an integer and the data will be a string.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=91)** And then, let's really go off script.
>
> **[1:33](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=93)** Let's make a floating-point value as a key, and then the data will actually be a list.
>
> **[1:40](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=100)** And I'll put three strings in there "four", "point", "five".
>
> **[1:46](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=106)** All right, and then we'll print out mydict.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=111)** Okay, so a couple of things to be aware of.
>
> **[1:53](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=113)** First, keys have to be immutable data types, like strings or numbers.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=119)** And each of the keys in a dictionary also has to be unique within the dictionary.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=126)** Now, in this example, I'm using some strings, an integer, and a floating-point number as the keys.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=133)** And, in the case of the 4.5 key, the value is actually a list of values.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=140)** It doesn't have to be a single data element like you see here.
>
> **[2:25](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=145)** In fact, this is fairly common in Python programming to have keys in dictionaries refer to lists or other collection types, like other dictionaries, or sets, or any data element.
>
> **[2:37](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=157)** So let's go ahead and run this code.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=160)** All right, and you can see in the output, here's our curly braces, we've got each key associated with a value.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=166)** And let's do the same thing in Colab.
>
> **[2:51](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=171)** I'm going to copy, and we'll paste it in here, and we'll run.
>
> **[2:54](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=174)** And you can see the same result.
>
> **[2:56](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=176)** All right, I'm going to keep on working in the Codespace, you can keep on working in Colab, if that's what you're doing.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=181)** So to access values in a dictionary, I supply the key as the index.
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=187)** So, to get this item right here, I would write mydict.
>
> **[3:13](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=193)** And then in the indexer, I would use the string "one", 'cause that's the key.
>
> **[3:18](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=198)** If I wanted to get the value associated with the 3 key, then I would use mydict and then the value of 3 in here.
>
> **[3:29](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=209)** Okay.
>
> **[3:30](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=210)** So let's go ahead and run that, and let's comment out printing the dictionary.
>
> **[3:36](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=216)** So let's run that.
>
> **[3:37](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=217)** And you can see that, sure enough, the value 1 here is being printed along with the value associated with the "three" key.
>
> **[3:44](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=224)** I can also create new content by creating a new key.
>
> **[3:49](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=229)** So, for example, I can write mydict, and then I'll make a new key called "seven", in this case, it's a string, and I'll just choose a value to go along with that.
>
> **[3:59](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=239)** I'll just put the number 7, and then let's print out the dictionary, and let's comment these two out.
>
> **[4:09](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=249)** All right, let's try running that.
>
> **[4:14](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=254)** And you can see, down here at the end, a new key and a value was added to the dictionary.
>
> **[4:20](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=260)** Now if you try to access a nonexistent key, that results in an error.
>
> **[4:26](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=266)** So let's try accessing a key named "blarg", all right?
>
> **[4:33](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=273)** And let's comment that out.
>
> **[4:37](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=277)** And let's try running.
>
> **[4:40](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=280)** Okay.
>
> **[4:40](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=280)** And you can see that I'm getting a KeyError because blarg does not exist.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=285)** There is no key with that name.
>
> **[4:46](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=286)** So, to avoid that happening, you can use the in operator, and we saw how to do this with sequences.
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=293)** You can use the in operator to see if a key already exists in a dictionary.
>
> **[4:57](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=297)** So let's print out, let's see, let's test to see if the key "two" is in mydict.
>
> **[5:08](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=308)** And then let's also test to see if "blarg" is in mydict.
>
> **[5:16](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=316)** And let's comment that out.
>
> **[5:19](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=319)** All right, let's try this.
>
> **[5:22](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=322)** And you can see that, yes, "two" exists, "blarg" does not.
>
> **[5:26](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=326)** And if we scroll up, we can easily verify that the key of "two" actually is there.
>
> **[5:32](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=332)** All right, let's take a look at some other dictionary operations.
>
> **[5:35](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=335)** Comment those out.
>
> **[5:36](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=336)** You can retrieve all of the keys and all of the values in a dictionary by using the appropriately named functions.
>
> **[5:44](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=344)** So, for example, I can print out mydict, and I'm going to call the keys function.
>
> **[5:50](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=350)** And I can do the same thing.
>
> **[5:52](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=352)** On mydict, I'll call the values function.
>
> **[5:57](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=357)** So let's run that.
>
> **[6:01](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=361)** And you can see that, when I do that, I get these lists of values.
>
> **[6:05](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=365)** And it's important to note that these are not technically Python lists.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=371)** They're a dict_keys and dict_values lists, they're actually special dictionary types.
>
> **[6:17](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=377)** Technically, I mean, they act like lists, you can index into them, you can iterate over them, just like regular lists.
>
> **[6:23](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=383)** I just want to point out that when you see this dict_keys and dict_values, it's because that these lists are specific to dictionary data types.
>
> **[6:32](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=392)** But you can see that, by using keys and values, I can get a list of all the keys, so I know what keys are in my dictionary, and I can also get the values independently.
>
> **[6:41](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=401)** So if all I care about is the values, I can iterate over all my values.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=405)** There's also a way to iterate over the entire contents of a dictionary by using the items function.
>
> **[6:53](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=413)** So I'm going to make a for loop, and then I'm going to write for key, val in mydict.items().
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=427)** And this is an example of a tuple.
>
> **[7:10](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=430)** So mydict.items is returning a tuple each time it runs through.
>
> **[7:16](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=436)** Each tuple is going to have two values in it.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=438)** So let's comment out these two lines.
>
> **[7:22](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=442)** So, in this loop, I'll just simply print out the key and the value.
>
> **[7:28](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=448)** And, remember, we learned about tuples in the previous video.
>
> **[7:31](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=451)** So let's go ahead and run this.
>
> **[7:33](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=453)** And you can see that I'm printing out each key and each value as we go through the dictionary line by line.
>
> **[7:40](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=460)** Okay, so that wraps up our overview of the five main Python data types.
>
> **[7:46](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=466)** And these types, numbers, strings, Booleans, and then sequences, and dictionaries are by far the most common data types that you will encounter when working with Python.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/dictionary-data-types?u=76281980&t=478)** And we're going to see these all over the place in the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (6), make (5)
> **Code Identifiers:** dict_keys (2), dict_values (2), dict_start (1)
> **Analogies:** for example (2), kind of like (1), just like (1)
> **Tools:** colab (3)
> **Definitions:** is a  (1), is an  (1)
> **Versions:** 4.5 (1)
> **Cross-References:** previous video (1)

#### [Conditional decisions](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=0)** - [Instructor] One of the most common operations that almost any program has to perform is making decisions.
>
> **[0:06](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=6)** Your programs will often need to compare different values to each other and execute code based upon the logical outcome, and that's where conditional logic comes into play.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=17)** So here in the editor, I'm going to open up the conditionals_start file.
>
> **[0:23](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=23)** And if you're using Colab, you can just go ahead and copy and paste the starting point code into a notebook cell.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=29)** And you've probably noticed I've declared two variables on the same line.
>
> **[0:32](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=32)** I didn't show this in the variables video, but you can actually declare multiple variables on the same line, like this.
>
> **[0:39](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=39)** So I'm going to copy this and paste it into Colab.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=42)** And if you need to make a new code cell, just go ahead and click on + Code.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=46)** And we'll come back to that in just a moment.
>
> **[0:48](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=48)** All right, in [[Python (Programming Language)|Python]], conditional decisions are handled using the if statement.
>
> **[0:54](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=54)** And I've got my two variables, and they're starting off with the values 10 and 100.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=59)** So let's add our first conditional statement.
>
> **[1:02](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=62)** I'm going to write, if x < y and then a colon character.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=70)** Okay, and then I'm going to hit return.
>
> **[1:12](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=72)** And notice when I hit return, that the code gets indented by two spaces.
>
> **[1:16](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=76)** Okay, this is going to become important in a moment.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=78)** So I'm going to write print("x is less than y").
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=85)** So I want to point out here that this indentation of the print statement is important.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=91)** Python uses the white space indentation to group together sets of statements.
>
> **[1:38](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=98)** In this case, the colon character after the if condition indicates that a set of statements are going to follow, that belong to this if statement.
>
> **[1:50](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=110)** Other programming languages that you might be familiar with ignore white space indentation, but in Python, it's very important to pay attention to this.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=120)** So for example, if you're used to a language like [[JavaScript]], you might see something like curly braces that group together these statements, like this.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=129)** Now this is not the way Python works.
>
> **[2:12](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=132)** You have to have the colon and then indentation.
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=137)** It doesn't matter how many spaces there are, it can be two, it can be four, it just matters that all the statements that follow are indented the same, okay?
>
> **[2:26](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=146)** So what's going to happen is, Python will evaluate this statement and if x is less than y, then the print statement will execute.
>
> **[2:37](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=157)** So let's go ahead and run this.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=160)** And sure enough, because 10 is less than 100, "x is less than y" gets printed.
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=165)** Let's copy this code and paste it in Colab, and let's run it.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=170)** And sure enough, we get the same result.
>
> **[2:52](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=172)** Okay, so let's try making a couple of changes, all right?
>
> **[2:56](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=176)** So what happens if I make x equal to 1000?
>
> **[3:03](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=183)** And now I run it again, you can see that nothing gets printed, right?
>
> **[3:08](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=188)** Because x is now not less than y anymore, it's greater than y.
>
> **[3:12](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=192)** So we have to figure out a way to handle the case where the if condition evaluates to false.
>
> **[3:18](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=198)** So let's make that change.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=200)** On the next line, below the print, unindented, okay?
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=204)** Back at the same level as the if statement I'm going to write else, and then a colon.
>
> **[3:29](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=209)** And then, print("x is greater than y").
>
> **[3:37](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=217)** Okay, and remember, the indentation of these statements is important, right?
>
> **[3:41](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=221)** So now we have an if condition, and we have an else condition.
>
> **[3:46](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=226)** So when the if condition is true, this block of code will execute.
>
> **[3:50](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=230)** And if it's not, then this block of code will execute.
>
> **[3:54](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=234)** So let's go ahead and run.
>
> **[3:57](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=237)** And sure enough, now we have "x is greater than y."
>
> **[4:01](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=241)** Let's go ahead and add this to our code in Colab.
>
> **[4:07](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=247)** And let's run it, and make this a thousand.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=251)** And we can see the same result.
>
> **[4:13](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=253)** All right, let's try making the variables exactly equal to each other, all right?
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=258)** Now, let's run it again.
>
> **[4:22](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=262)** And I get, ah, "x is greater than y," but that's not true, they're the same value.
>
> **[4:28](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=268)** And the problem is that this condition right here is evaluating to false.
>
> **[4:34](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=274)** So the else condition is executing even though it doesn't check to make sure that actually x really is greater than y, right?
>
> **[4:43](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=283)** Let's make one more change to fix that particular problem.
>
> **[4:47](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=287)** In between the if and the else, I'm going to add elif.
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=293)** I'm going to say, elif x==y: I'm going to print("x is the same as y").
>
> **[5:06](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=306)** All right, so now we have a complete conditional structure.
>
> **[5:11](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=311)** We have if, this condition, else if, this condition.
>
> **[5:16](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=316)** And you can put as many elif keywords as you want.
>
> **[5:18](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=318)** I can have all kinds of else-ifs that will give me a way of chaining more than one condition into a conditional statement.
>
> **[5:26](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=326)** So now we're checking for the special case where x is exactly the same as y, and handling it properly rather than just assuming that because this condition was false, that the catchall else condition is true.
>
> **[5:40](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=340)** So if we run this now, now we get the correct output of "x is the same as y."
>
> **[5:48](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=348)** And of course, let's go ahead and copy this into Colab.
>
> **[5:54](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=354)** Or if you're just working in Colab, you can just type the code yourself.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=358)** Let's make them the same value.
>
> **[6:01](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=361)** And now we can see the result.
>
> **[6:03](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=363)** So there's one more way of writing conditional statements I want to show you.
>
> **[6:08](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=368)** Sometimes you'll run into situations where you have an if and an else, right?
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=374)** So you've got four or whatever lines of code intended to do a simple comparison, and that's a bit more verbose than it needs to be.
>
> **[6:23](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=383)** So Python has a construct called a single conditional statement.
>
> **[6:27](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=387)** This statement lets you write common if-else logic all in one line.
>
> **[6:32](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=392)** It's just a more concise way of writing the comparison logic.
>
> **[6:35](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=395)** So let me add the statement and you'll see what I mean.
>
> **[6:38](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=398)** So I'm going to write result, and we declare a variable called result.
>
> **[6:42](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=402)** And result is going to be "x is less than y," and then I'll write if (x < y), and then else "x is greater or equal to y."
>
> **[7:00](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=420)** And then I'll print the result.
>
> **[7:03](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=423)** Okay, so this code does the work of an if-else construct, but just by using one line.
>
> **[7:12](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=432)** So let's go ahead and run this, and let me comment out the previous examples so we don't crowd the output.
>
> **[7:20](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=440)** Let's go ahead and run.
>
> **[7:21](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=441)** And you can see that "x is greater or equal to y" because they're the same.
>
> **[7:25](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=445)** If I change this to 10, and let's run it, you can see "x is less than y."
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/conditional-decisions?u=76281980&t=452)** Okay, it's just a nice concise way of writing a conditional statement instead of having to write out a much more verbose if-else block when the logic is relatively simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[JavaScript]] (1)
> **CLI Commands:** make (7), python (6)
> **Tools:** colab (6)
> **Code Identifiers:** conditionals_start (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Loops](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=0)** - [Instructor] Executing a set of code over and over again is a fairly common scenario in programming.
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=5)** So for example, you might want to process all of the contents in a list of values, or you might want to run some code until a certain condition is met.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=14)** [[Python (Programming Language)|Python]] provides a couple of ways of doing that, which is what we're going to take a look at now.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=18)** So here in my editor, I'm going to open up loops_start, and of course you can follow along with me if you're using Colab.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=25)** Just create a new code cell if you need to.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=28)** In Python, we use a programming construct called a loop in order to execute code multiple times.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=34)** So let's start by taking a look at the while loop.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=37)** This kind of loop executes code while a certain condition is true.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=42)** So you can see I have my variable named x, it's declared to be zero, and I'm going to write while x is less than five, I'm going to print x, and then I'm going to set x equal to the current value of x + 1.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=57)** So once again, you can see that the code in the while loop is indented to indicate that it belongs to the scope of this while loop.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=67)** And you can see that if I un-indent the code, we get an error.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=70)** So if you're writing code and you see an error like this, and if you hover over it, you'll see that it says Expected indented block.
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=77)** That usually means that your code is not indented properly.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=80)** Okay, so a while loop executes a block of code while a particular condition evaluates to true.
>
> **[1:28](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=88)** So while x is less than five, we're going to print the value of x, and then we're going to increment x by 1.
>
> **[1:34](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=94)** So let's go ahead and run this, and sure enough, you can see that x starts out as 0.
>
> **[1:40](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=100)** So it prints 0, then 1, 2, 3, and 4, and then it increments to 5.
>
> **[1:46](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=106)** In this statement right here, the value of x gets to 5.
>
> **[1:49](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=109)** So this condition is no longer true, and so the loop terminates.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=114)** So this kind of loop using the while keyword is useful for scenarios where you don't necessarily know how many times the loop is going to execute.
>
> **[2:05](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=125)** So let's consider another example.
>
> **[2:08](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=128)** I'm going to declare a variable named answer, and I'm going to use the input statement to ask, "Should I stop?"
>
> **[2:18](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=138)** Then while answer is not equal to "yes", colon, I'm going to print the answer, and then I'm going to get the next answer.
>
> **[2:33](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=153)** And it's always important to make sure, heh, that you have a condition that actually causes the loop to terminate.
>
> **[2:39](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=159)** Otherwise the loop will just continue forever, and you'll have what's called an infinite loop.
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=165)** So let's go ahead and comment this out.
>
> **[2:48](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=168)** Alright, and then let's run our updated code.
>
> **[2:52](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=172)** So in this example, the loop is just going to keep executing until the user enters the [[Microsoft Word|word]] yes.
>
> **[2:58](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=178)** So if I run this, right, and say, "Should I stop?"
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=182)** Alright, no.
>
> **[3:03](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=183)** Should I stop?flarg.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=185)** Should I stop?yes.
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=187)** And you can see that it stops.
>
> **[3:09](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=189)** Alright, let's try the same thing in Colab.
>
> **[3:13](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=193)** Let's run this.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=195)** Should I stop?no.
>
> **[3:17](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=197)** Should I stop?flarg.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=199)** Should I stop?yes.
>
> **[3:22](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=202)** And you can see that the loop exits.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=204)** Okay, so a common scenario for this kind of loop, a while loop, is when you are reading data from a data source, you want to keep reading data until there is no more.
>
> **[3:35](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=215)** But you don't necessarily know how much data there is when the loop starts.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=218)** So now let's take a look at a different kind of loop.
>
> **[3:41](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=221)** We're going to use a four loop.
>
> **[3:43](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=223)** Four loops in Python work a little bit differently than you might be used to seeing in other languages if you're familiar, for example, with [[JavaScript]] or C or [[Java]], right?
>
> **[3:53](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=233)** They have the concept of an index variable that counts the number of iterations in the loop.
>
> **[3:59](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=239)** Python works a little bit differently.
>
> **[4:02](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=242)** Python for loops are what are called iterators, and we'll learn more about this later.
>
> **[4:07](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=247)** These kinds of loops operate on sets of things, not just numbers.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=251)** So let's try an example.
>
> **[4:13](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=253)** I'm going to declare a variable named days, and I'm going to create a list of days.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=258)** So that's going to be Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
>
> **[4:29](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=269)** Then I'm going to write my loop, I'm going to write for d.
>
> **[4:34](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=274)** So I'm going to create a variable named d in days, and then colon.
>
> **[4:39](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=279)** And then I'm going to print d.
>
> **[4:42](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=282)** So in this case, my variable is a list, and my loop is iterating over each element in the days list.
>
> **[4:49](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=289)** So in each iteration, this d variable will be set to the current item that it's looking at at that time through the loop.
>
> **[4:58](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=298)** So if I run this, and let's get rid of this previous example.
>
> **[5:04](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=304)** If I run this, right, you can see that it's printing out, you know, Monday, Tuesday, up through Saturday.
>
> **[5:11](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=311)** For loops are typically used in situations where you have a fairly good idea how many items there are in a particular set of data.
>
> **[5:19](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=319)** Now, I could have used a while loop for this scenario, but it would be more awkward to write that.
>
> **[5:24](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=324)** And the for loop construct is just better suited here.
>
> **[5:28](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=328)** So let's take a look at some ways we can control the behavior of loops using the break and continue statements.
>
> **[5:34](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=334)** And I'm going to use the for loop for this, but everything I'm about to show you also works in while loops as well.
>
> **[5:41](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=341)** So let's go ahead and use the break and continue statement.
>
> **[5:44](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=344)** I'm going to copy this and put it down here, and let's comment out that loop.
>
> **[5:51](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=351)** So I'm going to slightly modify this to use a conditional, which we learned about in a previous video.
>
> **[5:56](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=356)** I'm going to write if d double equals Wednesday, colon,
>
> **[6:05](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=365)** and then I'm going to put the break keyword in here, and notice that I'm multiply indenting things, right?
>
> **[6:12](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=372)** So all of these statements belong to the for loop.
>
> **[6:16](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=376)** This break statement belongs to the if statement up here.
>
> **[6:20](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=380)** Alright, so the break statement is used to stop the execution of a loop.
>
> **[6:25](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=385)** In this case, if d is equal to Wednesday, then the break statement executes and the loop terminates.
>
> **[6:31](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=391)** So let's go ahead and run, and sure enough, you can see that that's what happens.
>
> **[6:35](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=395)** We get Monday, Tuesday, we encounter Wednesday, and the loop stops.
>
> **[6:40](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=400)** Alright, so let's take a look at another statement.
>
> **[6:44](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=404)** Let's take a look at the continue statement.
>
> **[6:46](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=406)** What I'm going to do now is change this to say if d is equal to Thursday, instead of writing break, I'm going to write continue.
>
> **[6:59](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=419)** Okay, the continue statement doesn't cause the loop to stop.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=422)** It just skips the [[Representational State Transfer (REST)|rest]] of the code in the loop this particular time around.
>
> **[7:08](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=428)** Now the rest of the loop, in this case is, you know, this one statement, but if there were a lot more statements here, they would all be skipped for this particular time through the loop.
>
> **[7:17](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=437)** So let's run the updated code, and you can see that what happens is we get Monday, Tuesday, Wednesday, we get to Thursday, and then we skip the print statement, right?
>
> **[7:26](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=446)** The rest of the loop gets skipped and then we have Friday, Saturday, and Sunday.
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=452)** Alright, let's take a look at one more example of using loops.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=455)** So we're going to go back and revisit the loop that we had up here where we were iterating over these days.
>
> **[7:43](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=463)** So let's go ahead and copy and paste this, and I'm going to comment out my previous example.
>
> **[7:50](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=470)** Alright, so I'm going to replace the print statement, and what I'm going to do is, first I'm going to write for i comma d in, and I'm going to use a function called enumerate, and I'm going to enumerate the days list, and then I'm going to print i and d.
>
> **[8:15](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=495)** So the enumerate function is built into Python, and it will iterate over this collection, just like a for loop normally would.
>
> **[8:23](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=503)** But in addition to returning the value of the current item, it also returns a value that is the index of the item in question.
>
> **[8:32](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=512)** And if you remember earlier in the chapter, we talked about i and d together, this is a tuple, right?
>
> **[8:39](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=519)** So this is an example of a tuple being used.
>
> **[8:42](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=522)** So it's going to return two values.
>
> **[8:44](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=524)** So what I'm going to do is print out both the index and the value of the item.
>
> **[8:48](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=528)** So let's go ahead and run this and see what happens.
>
> **[8:52](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=532)** And now you can see I'm getting the index value along with the item, right?
>
> **[8:57](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=537)** So 0 Monday, 1 Tuesday, and so on.
>
> **[9:00](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=540)** So not only do I get the item in the collection, I also get the numerical index of that.
>
> **[9:06](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=546)** So loops are one of the foundational parts of just about any programming language.
>
> **[9:10](https://www.linkedin.com/learning/learning-python-25309312/loops?u=76281980&t=550)** Python is no different, and we'll see a lot more code using loops in the rest of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Representational State Transfer (REST)|Rest]] (4), [[Microsoft Word|Word]] (1), [[JavaScript]] (1), [[Java]] (1)
> **CLI Commands:** python (7), make (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Cross-References:** previous video (1), earlier in (1), we talked about (1)
> **Analogies:** for example (2), just like (1)
> **Tools:** colab (2)
> **Code Identifiers:** loops_start (1)
> **Speakers:** - [instructor] (1)

#### [Defining functions](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=0)** - [Narrator] So far, we've been writing [[Python (Programming Language)|Python]] code in individual statements, but most larger programs are organized into reusable blocks of code known as functions.
>
> **[0:12](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=12)** So functions give us a way of organizing our programs so they're more understandable and modular.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=17)** And that's what we're going to learn about in this example.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=20)** So here in my editor, I'm going to open up the functions start file.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=25)** And if you're using [[Google]] CoLab, go ahead and create a code cell and go ahead and copy these three lines and paste them in there as a starting point.
>
> **[0:36](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=36)** Okay, so let's take a look at the code from our very first program from way back in the beginning of the chapter.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=43)** So here are these three lines, and these probably look familiar to you.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=46)** Now suppose I wanted to use this code in multiple places in my program.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=51)** It wouldn't make sense to just copy and paste the code everywhere because if I ever wanted to change how it works, I'd have to go change that code in lots of different places.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=59)** A function allows me to group this code together and then reuse it throughout my program as just one line of code.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=67)** So let's convert this into a function.
>
> **[1:11](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=71)** So functions are defined using the def keyword and it's in lowercase, and then I give it a name.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=78)** I'm going to call this hello_funk, and then an open and close parentheses followed by a colon.
>
> **[1:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=87)** And we see that colon. What does that tell us, right?
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=90)** It tells us that we're starting the scope of a block of code, which means I have to indent the lines of code that follow that I want to belong to this function.
>
> **[1:41](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=101)** So we saw this with conditional statements.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=104)** We saw this with the loops that we learned about earlier.
>
> **[1:49](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=109)** We have to do the same thing with functions.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=111)** So I'm going to indent each one of these lines of code, and you can see the little red squiggle goes away, so it's no longer an error.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=119)** Okay, so now these three lines of code belong to this function, function names pretty much follow the same rules as variables.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=127)** So I can have letters and underscores.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=129)** I can put numbers in here if I want to.
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=131)** I can't start it with a number.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=133)** If I do that, you see the code turns red, that's a problem.
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=137)** So I'll just leave it like this.
>
> **[2:19](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=139)** Now, this function does not take any parameters.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=142)** I can't pass any values into the function because parameters would normally go between the parentheses, but we'll learn about that in a few moments.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=150)** For now, we'll just simply define a function that doesn't take any parameters to it.
>
> **[2:35](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=155)** Alright, so now that the code is inside the function and I've got the code properly indented, I can use the function just by using its name.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=166)** So below this function and unindented, I'm going to just simply call hello funk with the open and close parentheses.
>
> **[2:57](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=177)** And let's go ahead and copy this code and let's paste it in here to CoLab.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=181)** And let me [[Zoom]] CoLab up a little bit so we can see it a little bit better.
>
> **[3:06](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=186)** So we'll come back to that in a moment.
>
> **[3:08](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=188)** Let's go ahead and run this.
>
> **[3:10](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=190)** So I'm going to run this in the terminal, and you can see that when I invoke the function, right, I'm calling the function here.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=199)** Now the code inside the function is executing, right?
>
> **[3:22](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=202)** Let's do the same thing in CoLab.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=204)** I'll click on the run button and sure enough, we get the same result.
>
> **[3:30](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=210)** Alright, so that's how we define a function.
>
> **[3:34](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=214)** Now in this case, the function is not returning any values, which we'll see how to do in a moment.
>
> **[3:41](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=221)** And it's also not taking any parameters.
>
> **[3:44](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=224)** So let's go ahead and add parameters to our function.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=228)** And the reason that we would want to do this is because it allows us to customize how the function works.
>
> **[3:54](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=234)** So let's add a parameter that customizes the greetings.
>
> **[3:58](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=238)** What I'm going to do is copy this code and I'll paste it down here so we can compare the two results.
>
> **[4:05](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=245)** And I'll just comment out this example.
>
> **[4:09](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=249)** What I'm going to do is define a parameter by putting a name inside the parentheses here, and I'm going to call it greeting.
>
> **[4:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=257)** Now, I can define more than one parameter if I want to, I could put, you know, another parameter here, and I can have as many as I want, but this function's going to take one parameter.
>
> **[4:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=267)** So what we're going to do is use the greeting parameter in this third print statement.
>
> **[4:35](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=275)** So instead of printing out, nice to meet you every time, we'll simply print out whatever the greeting is.
>
> **[4:42](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=282)** And now when I call the function, I have to supply a value to that parameter.
>
> **[4:47](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=287)** So I can pass in a string that says, how are you doing?
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=293)** And then let's call the function again with, hey, what's up?
>
> **[4:58](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=298)** All right, so now let's run this.
>
> **[5:01](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=301)** And you can go ahead and do that in CoLab as well.
>
> **[5:04](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=304)** So I'll put in Joe, right?
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=307)** It says, okay, how are you doing, Joe?
>
> **[5:09](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=309)** And now it's going to run again because now this invocation is happening.
>
> **[5:13](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=313)** I'll put in Joe again. And now it says, hey, what's up?
>
> **[5:16](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=316)** So by adding a parameter, I've been able to customize how the function works.
>
> **[5:23](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=323)** So like I said earlier, functions can also return values.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=327)** Now, this function doesn't do that.
>
> **[5:29](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=329)** I'm going to define a function that returns a value, and I'll just create a really simple example.
>
> **[5:34](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=334)** What I'm going to do is comment out this previous example using control slash and then I'm going to define a function called cube that will take one parameter.
>
> **[5:47](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=347)** Now to indicate that my function returns a value, I use the return keyword, and then I'm going to return the value that I want to be the result of my function.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=358)** In this case, my function is going to take the parameter that it's given and multiply it by itself three times, right?
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=364)** 'Cause that's what the definition of a cube is.
>
> **[6:07](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=367)** So then I'll define a variable and I'll assign it to the result of the cube function being called with the value of three.
>
> **[6:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=377)** And then we'll print the result.
>
> **[6:20](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=380)** Alright, let's go ahead and run that.
>
> **[6:24](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=384)** And you can see that the result is 27.
>
> **[6:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=387)** So by using the parameter and by using the return value, we've now created a function that can return different values based upon the parameter it's given.
>
> **[6:36](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=396)** So maybe try it a few times with yourself with some different numbers to see what happens.
>
> **[6:41](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=401)** And let's go ahead and run it in CoLab just to prove that it works.
>
> **[6:44](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=404)** I'll make a new code cell paste the code in here and click run, and you can see the result.
>
> **[6:50](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=410)** Let's do the cube of four. Let's run it.
>
> **[6:53](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=413)** You can see the cube of 4 is 64.
>
> **[6:55](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=415)** Alright, so now we've seen parameters and return values.
>
> **[7:00](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=420)** So let's try another example.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=422)** Function parameters can be made optional by giving them a default value.
>
> **[7:08](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=428)** So let's go ahead and take our original code from earlier and I'm going to copy this function and I'll paste it down here and then I have to uncomment it.
>
> **[7:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=437)** So I'll select it and do control slash again.
>
> **[7:20](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=440)** Alright, what we're going to do is we're going to add another parameter.
>
> **[7:23](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=443)** We're going to add a parameter for the name.
>
> **[7:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=447)** And what I'm going to do is I'm going to have name and then the equal sign, and in this case, the value of none.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=455)** That means no value.
>
> **[7:36](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=456)** So what I'm going to do now is modify the function to see if a value was supplied for the name parameter.
>
> **[7:45](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=465)** What I'm going to do is check using an if statement to see if name is equal to none.
>
> **[7:54](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=474)** Then I'm going to ask the user to input their name.
>
> **[7:59](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=479)** If a value is supplied for the name parameter, then this code right here will not execute and we'll just simply print the greeting and the name.
>
> **[8:10](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=490)** So let's go ahead and try this out.
>
> **[8:13](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=493)** So I'll call hello funk with nice to meet you.
>
> **[8:19](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=499)** All right and then for the second parameter, I separate it with a comma and I'll just put in Joe.
>
> **[8:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=507)** All right, and let's go comment out the cube example.
>
> **[8:32](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=512)** Okay, let's run this.
>
> **[8:37](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=517)** Now in this case, you see that it just simply prints out nice to meet you, Joe, because the value for name is not none, right?
>
> **[8:45](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=525)** I gave it a string, but if I take off this Joe parameter here, now I'm not supplying a value for the name.
>
> **[8:54](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=534)** So now let's run it again.
>
> **[8:56](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=536)** And now you can see I'm being asked, you can also call Python functions with explicit names for the parameters.
>
> **[9:04](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=544)** So you probably noticed that I'm calling the function with values that are in the same order as the parameters, right?
>
> **[9:14](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=554)** So this string gets passed in for the greeting.
>
> **[9:17](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=557)** This string gets passed in for the value of name, but I can actually do this by explicitly saying which variables or which parameters I want the values to be assigned to.
>
> **[9:28](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=568)** So for example, I could simply write greeting equals, and then I can put name equals Joe in the front.
>
> **[9:37](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=577)** And now I'm specifically telling Python like, hey, the name parameter gets this string, the greeting parameter.
>
> **[9:43](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=583)** And this allows me to change the order in which the code is being called.
>
> **[9:48](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=588)** Now, in reality, most people don't do this, but it's nice to be able to do this if you want to make your parameters in a certain order.
>
> **[9:55](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=595)** So if I run this, right, you can see that the result is now the same.
>
> **[10:00](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=600)** Alright, let's look at one final example.
>
> **[10:02](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=602)** We're going to write a function that takes multiple parameters, but we don't know how many parameters are going to be coming in.
>
> **[10:08](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=608)** So let's comment out this example.
>
> **[10:14](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=614)** And what I'm going to do is write a function.
>
> **[10:15](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=615)** So I'm going to use my def keyword and I'm going to call it multi add.
>
> **[10:21](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=621)** And then I'm going to type a star character along with the name of the parameter.
>
> **[10:27](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=627)** I'll call it args, just for historical purposes.
>
> **[10:31](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=631)** So when you put the star in front of this parameter name, it means that there are going to be more than one parameters coming in, but you don't know how many there are in advance.
>
> **[10:41](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=641)** In this case, right?
>
> **[10:43](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=643)** In the previous example, we had one parameter, here we had two parameters, one of which was optional.
>
> **[10:49](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=649)** In this case, we don't know how many there's going to be.
>
> **[10:51](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=651)** So what I'm going to do is have a local variable named result, and I'll initialize that to zero.
>
> **[10:58](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=658)** Then I'm going to use a loop.
>
> **[11:00](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=660)** I'm going to write 4x in args, and then I'm going to write result equals result plus x, and then I'll return the result.
>
> **[11:15](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=675)** All right, so what I've done here is I've defined a function called multi add.
>
> **[11:18](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=678)** The star means, hey, I can pass in a variable number of parameters.
>
> **[11:22](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=682)** So now instead of containing just one value, that args parameter is going to contain multiple values in the form of a list.
>
> **[11:30](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=690)** So let's try this out.
>
> **[11:31](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=691)** I'm going to print multi add, and I'm going to call it with some parameters, four or 5, 10, 4.
>
> **[11:41](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=701)** That should be about right, alright.
>
> **[11:43](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=703)** So then now let's go ahead and run this.
>
> **[11:46](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=706)** And you can see that the result is 23.
>
> **[11:50](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=710)** And if I change the code to add another 10 on the end and I run it again, now you can see the result is 33.
>
> **[11:58](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=718)** So you can have a function that takes both regular and variable parameters, but the variable parameter always has to come last.
>
> **[12:06](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=726)** And again, that's because you don't know how many of them there's going to be.
>
> **[12:09](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=729)** So let's modify our example to have a starting value argument.
>
> **[12:14](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=734)** So I'll have a start here, and then I'll have args, and then I'll just simply initialize result to whatever the start amount is.
>
> **[12:25](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=745)** And now I'll add 10 to the start of this list.
>
> **[12:31](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=751)** Okay and I'll run it again.
>
> **[12:35](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=755)** And now you can see the result is 43.
>
> **[12:38](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=758)** And if I make the start value zero, you can see it goes back to 33.
>
> **[12:43](https://www.linkedin.com/learning/learning-python-25309312/defining-functions?u=76281980&t=763)** Python functions are pretty flexible and powerful, but the core reason why you use functions is to group related code together and then customize the data that the code works on by using parameter values that are supplied to the function when it gets called.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Google]] (1), [[Zoom]] (1)
> **CLI Commands:** python (4), make (4)
> **Tools:** colab (6), terminal (1)
> **Definitions:** known as (1), means that (1)
> **Code Identifiers:** hello_funk (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Number counter](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=5)** - Let's take a look at my solution to the number counter challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=8)** For this challenge, we needed to count the number of either even or odd numbers in a given list of numbers.
>
> **[0:15](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=15)** So the function that we had to write takes two parameters.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=19)** There's a string which indicates which types of numbers we're counting and a list which contains the numbers themselves.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=28)** To solve this challenge, we needed to use an if conditional, a loop, and the modular operator.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=35)** So my code first checks to see if the function was given a bad value for the rich parameter.
>
> **[0:41](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=41)** If it's not even or odd, then the function returns minus one.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=45)** Then it initializes the return value of the count numbers function to zero.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=51)** Then I have a loop that processes each number in the numbers list.
>
> **[0:56](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=56)** So first I check to see what type of number we're counting, and then I check to see what the result of that number, modulo two, is.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=65)** So if the result of that number modulo two is zero and we're counting even numbers, then I increment the even number count.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=74)** Otherwise, if it's not zero and we're counting odd numbers, then we have an odd number and I increment the count for the odd numbers.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=83)** So part of the challenge was that the which parameter is not guaranteed to be either even or odd.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=89)** So I had to explicitly check for those.
>
> **[1:33](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=93)** So let's go ahead and run our code against the testing code.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=96)** And if I scroll up a little bit, you can see that here's the numbers and here are these three answers that we had to provide.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=103)** So I'm going to click on test my code, and you can see that the even count is four, the odd count is seven, and then the incorrect, which parameter count properly returns minus one.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=114)** So if I make a change to the code where I don't properly count even numbers, for example, and we test the code again, you can see that that's incorrect.
>
> **[2:05](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=125)** I got the wrong even number count.
>
> **[2:08](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=128)** So let me go back and fix that and click test again and you can see the right answer.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=134)** Alright, so did you get the answer?
>
> **[2:16](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=136)** How'd you do on this challenge?
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=137)** Remember, it's not important that your code exactly match mine.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=140)** What's important is that you check out your code versus mine.
>
> **[2:24](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=144)** See where the similarities and differences are.
>
> **[2:26](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=146)** There's always going to be multiple ways to solve any given programming challenge.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/solution-number-counter?u=76281980&t=150)** So take a look at your solution, compare it to mine, and just know the differences.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll up (1), click on (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)


### 3. Beyond the Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Built-in functions](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=0)** - [Person] In the previous chapter, we learned about the basics of the [[Python (Programming Language)|Python]] language and how to write some relatively simple programs.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=7)** In this chapter, we're going to move beyond the basics to some of the features that you'll use when writing more comprehensive programs, so let's start by taking a look at some of the features that Python gives you right out of the box.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=20)** Sometimes, Python is called the "batteries included" language because it has so much great stuff already built in, so here at the homepage, I'm going to hover over the "Documentation" menu and I'm going to click on this button here labeled "Python Doc," and that's going to take me to the documentation page for Python, and I'm going to click on this "Library reference" link right here, and that's going to take me to the section for the Python Standard Library, which is a really big repository of prebuilt code that you can use in your programs, so if I scroll down a little bit, all right, you can see that there's a lot in here, you know, there's a lot of, like, modules, and we'll get to some of these later in the course, but, I mean, look at how long this list is.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=65)** There's just... There's so much stuff in here, so what I'm going to do is scroll to right about here and you can see that there's a link for built-in functions, so I'm going to click on that, and this page lists all of the built-in functions that Python supports, these are functions that are already written for you and you can just use them right away in your own code.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=89)** We're going to take a look at some of these and how they are helpful in our programs, so go ahead and keep this page open as we go through the video so you can refer back to it to get more information about each function if you feel like doing so.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=103)** All right, so the first function that we're going to look at is the "len" function, which we've seen a couple times already, and if I click on it here, it takes you to the documentation, and this is the format of the Python docs, it's kind of complex and nerdy, so I'm not going to make you read through it, but if you want deeper documentation on each of the functions, you can get to them, but let's go ahead and jump over to the code and see how it actually works.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=127)** All right, so here in chapter three, I'm going to open up the "builtin_start" file, and if you want, of course, if you're using Colab, you can copy and paste the starting point code over to Colab, so I'm just going to go ahead and copy these two lines, make a code cell and paste those in.
>
> **[2:29](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=149)** So let's use the "len" function to calculate the length of each of these variables, and this will be review for some of the things we've already done in the course, so for example, I can print out the length of my string, that will give me the number of characters in the string, I can print out the length of my numbers, that will tell me how many numbers are in this list of numbers, so it works on pretty much every sequence, anything that has a length, you can use the "len" function on, and if we run this, no surprise, you can see that the results are right here, and of course, let's go ahead and copy that code, paste it over here in Colab, and let's run it, and we get the same result.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=195)** All right, let's keep on going.
>
> **[3:17](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=197)** The next function I want to take a look at is the... Well, there's two of them, there's the "min" and the "max" functions.
>
> **[3:23](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=203)** The "min" and "max" functions will find the largest and smallest value in a sequence, so let's go ahead and try those out.
>
> **[3:33](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=213)** Let's print out the "max" of my string and let's print out the "min" of my numbers, and let's comment out these previous examples, and let's run this.
>
> **[3:51](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=231)** All right, so we can see that the "max" in my string is Z, because that's the last letter in the alphabet, and the "min" of my numbers, not surprisingly, is one.
>
> **[4:01](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=241)** All right, let's keep on going, comment these guys out, and by the way, feel free to keep on... If you're working in Colab, just, you know, as I'm going through this, just do the same code that I'm doing in Colab.
>
> **[4:13](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=253)** So here's the "str" function, the "str" function will return the string representation of an object, and to see why this is important, let's try writing some code, you can see I have a string here named "prefix," which contains the string result, and then, I have the result of five, and remember earlier in the course, we saw this error, I'm going to try to concatenate the "prefix" string with the result, and if I run this, you can see that that results in an error.
>
> **[4:44](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=284)** It says you can only concatenate a "str" with a "str," not an integer, and that's happening because this is not a string, so what I need to do is use the "str" function to turn that integer into a string, and now, when I run it, you can see that that works just fine.
>
> **[5:06](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=306)** You can do this with almost any object, by the way.
>
> **[5:09](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=309)** Let's try it on a floating-point number.
>
> **[5:12](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=312)** "1415," let's do pi, and if I do this again, all right, now, you can see the result there.
>
> **[5:21](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=321)** All right, let's keep on going, comment that out.
>
> **[5:24](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=324)** Another interesting function is the "range" function, it creates a range of values between a starting and an ending value, along with an optional step value.
>
> **[5:36](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=336)** Ranges are often used together with loops in order to execute the loop a specific number of times.
>
> **[5:43](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=343)** Now, we didn't cover this back in the loops section, so I'm going to demonstrate this here, let me give you an example, suppose I wanted to run a loop a certain number of times over a certain range of numbers, I can write "for i in range," and then, I'll have it run over the range from five to 15, and then, I'll just print "i" each time through the loop, so if I run this, okay, you can see that what happens is we get the values printed out starting at five, and then, it goes up through 14, it doesn't print 15, and the reason it doesn't print 15 is because the ending value is outside... It's considered to be outside of the range, it's not included in the range of these numbers, so we go from five to 14,
>
> **[6:31](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=391)** if I wanted 15, I would just simply make this 16 instead.
>
> **[6:34](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=394)** I can also add an optional step value.
>
> **[6:37](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=397)** Now, normally, it increments by one each time, which you can see happening, but I can specify a value like two, and if I run this again, now, you see that the range is incrementing by two each time, so we get five, seven, nine, 11 and 13.
>
> **[6:57](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=417)** You can use the "range" function as a way to index into a sequence of values, so let's do that with our "mystring" variable, and remember, the "mystring" variable is up here, so let's scroll down.
>
> **[7:15](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=435)** Let's write "for i in range" from five, and we're going to combine the "len" function here, so the length of my string, and we'll step by two each time, colon, and we'll print, we'll use the "mystring" variable and we'll index into the string using whatever the value of "i" is, so let me comment that example out, so what we're going to do is, starting at index five, we're going to get each character at the given index, stepping by two along the way, so let's run that, and you can see that starting off at index five, so if we go up here and count, all right,
>
> **[8:04](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=484)** that is zero, one, two, three, four, five, yeah, that's the "u" character, which is correct, so we're getting the "u," right, and then, we step by two, so one, two, then we get the "c" character, which is correct, where you can see it right there, so it's stepping through the string by two spaces each time.
>
> **[8:25](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=505)** The "print" function itself... This is our last example that we'll take a look at.
>
> **[8:30](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=510)** The "print" function is pretty flexible... Let me comment out the previous example there, so you can actually embed the values of variables directly into a string using what are called interpolated strings, they use an "f" character to indicate that they have embedded data, so for example, what I'm going to do is put a letter "f" outside the string, okay, not inside the quotes, once I do that, this becomes what's called an interpolated string, which means that inside the string, I can use these brace characters, these curly braces, to refer to variables, so I'll use the "greeting" variable in here, "you are visitor number," and then, once again, inside these curly braces, I'll embed the value of the "count" variable,
>
> **[9:20](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=560)** so here, I've got these two variables, "greeting" and "count," and this gives me a way of just embedding those values right into the string, all I've got to do is put this little letter "f" outside the string, and that makes it an interpolated string, so now, if I run this, you can see that the values for those variables are being replaced inside the string.
>
> **[9:44](https://www.linkedin.com/learning/learning-python-25309312/built-in-functions?u=76281980&t=584)** All right, so there are plenty of other built-in functions that we didn't get a chance to look at, and if you're feeling up to it, maybe take a moment here, try some of them out, chances are, you'll be using more of these functions as you develop your Python skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9)
> **CLI Commands:** python (9), make (3), find (1)
> **Tools:** colab (5)
> **UI Navigation:** click on (3), scroll down (2)
> **Cross-References:** previous chapter (1), later in (1), earlier in (1)
> **Definitions:** is called (1), is a  (1), means that (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)

#### [Solution: Find the longest string](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=0)** - [Instructor] For this challenge we needed to find the longest string in a list of strings and then return that length as the result.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=11)** In order to solve this challenge your code needed to do three things.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=14)** So first, you have to loop, or iterate over each of the strings in the list, that is passed to the function as a parameter.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=21)** Next, you have to calculate the length of each string, and then finally, you had to return the length of the longest string.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=29)** So here, in my solution, my code uses a for loop to iterate over each string and we learned about [[Forms]] back in chapter two.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=37)** And they use this temporary variable named s.
>
> **[0:41](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=41)** To calculate the length of each string I use the built-in len function which we also learned about earlier, and that returned the length of the string.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=49)** My code uses this temporary variable named maxlen to hold the length of the longest string that we've seen so far which is initialized to zero.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=59)** So if the length of the current string is larger than the current value of maxlen we replace the value of maxlen with the current string length and when the loop completes maxlen will contain the length of the longest string on the list and the code just returns that value.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=78)** So let's go ahead and try this.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=80)** You can see that this is the test code that your answer will be called with.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=85)** And if we click on test my code, we can see that the correct answer is returned.
>
> **[1:32](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=92)** Let's go ahead an try adding some more characters to the long string, so let's go ahead and add some more characters, test the code again.
>
> **[1:41](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=101)** And now you can see that we are calculating the new longest string length.
>
> **[1:45](https://www.linkedin.com/learning/learning-python-25309312/solution-find-the-longest-string?u=76281980&t=105)** All right, so that's my solution, how does it compare to yours?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Classes and objects](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] is an [[Object-Oriented Programming (OOP)|object-oriented programming]] language.
>
> **[0:03](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=3)** And this means that you can create and use classes to create objects that work just like the ones that are built into the language itself.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=11)** Classes are a really great way of encapsulating functionality that can be kept together and reused as complete modules in other projects.
>
> **[0:22](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=22)** If you think back to earlier in the course when we learned about functions and we learned how functions group related code together, you can think of classes as that kind of concept, but being on like steroids.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=33)** You can group all kinds of functions and data together.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=37)** This can be really helpful in keeping larger programs both maintainable and easier to understand.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=45)** So here in VS Code, I'm going to open up classes_start.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=49)** And if you're using Colab, just go ahead and create a new code cell to work in.
>
> **[0:54](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=54)** So let's imagine that we're building an application to manage vehicles like cars and motorcycles and so on.
>
> **[1:01](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=61)** I'm going to start by defining a class that will hold some information about vehicles.
>
> **[1:08](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=68)** To do that, I use the class keyword and then I give my class a name, and I'll call it a Vehicle and then a colon.
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=77)** And you know what that colon means?
>
> **[1:19](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=79)** That colon means we're going to start defining some code that belongs to, in this case, a class.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=85)** So classes are defined using the class keyword and they're given a name.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=90)** In this case, I've named it Vehicle to indicate the kind of data it will contain.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=95)** Next I'm going to add a special method called the init method, and it's called the double underscore method, which is the function that Python calls on your class when the object has been created and it's time to initialize the object's data and set up its state.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=114)** Now there are several different functions that have these double underscores in them.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=119)** And to be clear, you don't call these directly.
>
> **[2:02](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=122)** Python will call these functions on your class as it manages the object that you create and use.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=129)** So remember, we define functions using the def keyword, and I'm going to use the two underscores and I'm going to call it init, and then two underscores again.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=141)** And the init function takes two arguments.
>
> **[2:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=144)** In this case, it always takes an argument called self, well you can call it anything you want, but self is kind of the, you know, accepted standard.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=151)** And then I'm going to define a parameter called bodystyle, which is what my Vehicle class is going to represent.
>
> **[2:39](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=159)** And again, I'm going to use a colon because now I'm defining the code for this function.
>
> **[2:44](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=164)** Inside this function, I'm going to set a property which is going to be holding some data.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=169)** It's like a variable and I'm going to call that bodystyle.
>
> **[2:54](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=174)** I'm defining this property on the self object, which is a reference to this class.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=181)** And I'm going to set it equal to the bodystyle parameter that my function is given, all right?
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=187)** So now that I've created this class, I can create other classes that inherit data and functions from this class.
>
> **[3:17](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=197)** After all, there's many different kinds of vehicles and different kinds of engines and features.
>
> **[3:22](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=202)** So we wouldn't want to cram all that data into just one class.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=206)** What we want to do is take the things that are common to other classes, put them in a base class, and then derive other classes that inherit those properties.
>
> **[3:38](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=218)** So let's create another class called Car.
>
> **[3:43](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=223)** And this is going to represent regular passenger cars.
>
> **[3:45](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=225)** Now since this class is going to be derived from the Vehicle class, then inside these parentheses I'm going to type Vehicle, which indicates that now Car automatically gets access to this bodystyle parameter.
>
> **[4:00](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=240)** And then once again, I'm going to define my init function.
>
> **[4:06](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=246)** And this will give the user the opportunity to define the engine type.
>
> **[4:14](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=254)** All right, so inside my initialized function for this Car class, I first have to initialize the properties in the base class by using the super function.
>
> **[4:25](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=265)** So what this does is this says get whatever the super class is, in this case the Vehicle, and I'm just going to call the init function on this.
>
> **[4:38](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=278)** And the bodystyle for this Vehicle is going to be Car.
>
> **[4:44](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=284)** Now I don't need to pass in a value for the first parameter.
>
> **[4:47](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=287)** Python takes care of that on its own.
>
> **[4:49](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=289)** So you can just, you don't have to worry about that.
>
> **[4:51](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=291)** All I care about is the parameters that I've defined for my class.
>
> **[4:56](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=296)** So now that I've initialized the base class, I can set other properties that are specific to cars.
>
> **[5:03](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=303)** So in this case, I'll define a property called wheels and it's got four wheels.
>
> **[5:10](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=310)** And in this case, I'll just choose to give it four doors.
>
> **[5:15](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=315)** And I'll define a property called engine, and I'll set that to whatever the engine type is that the user passed in.
>
> **[5:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=324)** So let's do the same thing for another class that will hold information about motorcycles.
>
> **[5:29](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=329)** So I'll create a class.
>
> **[5:31](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=331)** I'll call it Motorcycle.
>
> **[5:33](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=333)** Once again that derive from Vehicle and I'm going to create my init function.
>
> **[5:42](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=342)** And for the Motorcycle class, we will have two parameters.
>
> **[5:45](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=345)** There will be an enginetype and there will be a hassidecar, hassidecar parameter, which indicates whether it has a sidecar.
>
> **[5:59](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=359)** So once again, I'm going to initialize my parent class, my super class, and I'm going to call that with a bodystyle of Motorcycle.
>
> **[6:12](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=372)** And if hassidecar is true, I'm going to define a property called wheels and that's going to be three wheels.
>
> **[6:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=384)** Otherwise, if it doesn't have a sidecar, then wheels is going to be two.
>
> **[6:30](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=390)** And then I'll define a property called doors, which is zero.
>
> **[6:36](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=396)** And I'll create an enginetype, which is going to be the enginetype that gets passed in.
>
> **[6:42](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=402)** All right, so we have three classes defined, right?
>
> **[6:44](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=404)** We have a Motorcycle, we have a Car, and we have our base class, the Vehicle.
>
> **[6:49](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=409)** So now that we have our classes defined, we can create specific objects of those types.
>
> **[6:55](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=415)** So let's create some cars and a motorcycle.
>
> **[6:57](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=417)** To do that, we use the name of the class along with parameters for the initial function.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=422)** So I'll create car1, and that's going to be a Car object and the enginetype will be gas.
>
> **[7:10](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=430)** And then I'll create car2, and that's going to be a Car and the enginetype will be electric.
>
> **[7:15](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=435)** And then I'll create a motorcycle, I'll call it mc1.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=438)** And that's going to be a Motorcycle and that's going to have a gas engine.
>
> **[7:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=444)** And I'll set the sidecar to true so that it has a sidecar.
>
> **[7:29](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=449)** So now that we've done that, we can access the properties of each of these classes by using dot notation.
>
> **[7:36](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=456)** So for example, I can print the number of wheels that the motorcycle has by typing mc1 and then .wheels.
>
> **[7:45](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=465)** I can do the same thing with the car.
>
> **[7:47](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=467)** I can print car1.engine.
>
> **[7:53](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=473)** I can print out car2's doors count, all right?
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=478)** So let's go ahead and run what we have.
>
> **[8:00](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=480)** And you can see sure enough that this motorcycle has three wheels 'cause it has a sidecar.
>
> **[8:06](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=486)** The first car is a gas engine, that's correct.
>
> **[8:09](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=489)** And car2 has four doors.
>
> **[8:12](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=492)** But classes don't just hold data.
>
> **[8:14](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=494)** They also define their own functions that operate on that data.
>
> **[8:19](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=499)** So let's add the ability for each of these vehicles to drive.
>
> **[8:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=504)** So in my base class, the Vehicle class, I'm going to define a function called drive.
>
> **[8:35](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=515)** And once again, it always takes the self parameter.
>
> **[8:38](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=518)** And then I'm going to specify the speed that we're driving.
>
> **[8:42](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=522)** And I'll define a new property called mode, and now I'll be in driving mode.
>
> **[8:48](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=528)** And then we'll set the speed property on the object to speed.
>
> **[8:54](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=534)** And then I can have each vehicle specify some driving behavior by doing something called overriding.
>
> **[9:02](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=542)** So what I'm going to do is in the Car class, I'll define the drive method.
>
> **[9:09](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=549)** Now the Car class, because it inherits from Vehicle, it already has a drive function.
>
> **[9:16](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=556)** But I'm going to customize the the behavior by overriding the base classes version.
>
> **[9:22](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=562)** So in this version, once again, I'll have self and speed and I'm going to call the super classes drive method with my speed argument.
>
> **[9:33](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=573)** And then I'll just put in whatever my own custom behavior for cars is.
>
> **[9:36](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=576)** So I'll print, you know, Driving my, and then I'll print out the enginetype, Car at, and then I'll print out the speed, all right?
>
> **[9:52](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=592)** And then for the Motorcycle, and let's do the same thing.
>
> **[9:57](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=597)** We'll just copy and paste this and we'll put it below there.
>
> **[10:02](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=602)** And in this case, rather than car, it's going to be motorcycle, okay?
>
> **[10:08](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=608)** And then let's call those functions.
>
> **[10:13](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=613)** So I'll call car1.drive and we'll drive at 30, and then car2 is going to drive at 40, and then motorcycle one is going to drive at 50.
>
> **[10:27](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=627)** All right, so let's run the code again.
>
> **[10:32](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=632)** Oh, whoops.
>
> **[10:36](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=636)** Looks like there's no engine type for- Oh, that's because I called it enginetype.
>
> **[10:44](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=644)** So let me fix that.
>
> **[10:47](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=647)** Motorcycles have an enginetype.
>
> **[10:49](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=649)** So let's go ahead and run that.
>
> **[10:51](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=651)** All right, there we go.
>
> **[10:52](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=652)** Now you can see that when I call my drive function on each of these objects, the drive method gets called on the Car and the Motorcycle.
>
> **[11:04](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=664)** So for the Car, I've got driving my gas and electric; and driving my gas motorcycle at and then the speeds, okay?
>
> **[11:15](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=675)** Now this is a very simple example of how to define classes in Python.
>
> **[11:20](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=680)** And since this is an introductory course, I'm going to just kind of stop here.
>
> **[11:24](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=684)** If you're interested in learning more about object-oriented programming in Python, I would check out the Python Object Oriented Programming course here in the library.
>
> **[11:35](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=695)** It goes into much more detail on how classes work.
>
> **[11:38](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=698)** And by the way, you can get through Python without defining your own classes.
>
> **[11:42](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=702)** I wanted to just show this to you because it is an interesting subject and it is part of Python.
>
> **[11:47](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=707)** In the meantime, think about how you might extend this example.
>
> **[11:51](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=711)** So how would you add the ability to have different kinds of cars?
>
> **[11:56](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=716)** How would you add additional functions like park or reverse?
>
> **[12:00](https://www.linkedin.com/learning/learning-python-25309312/classes-and-objects?u=76281980&t=720)** Take some time here to stop and experiment with the code and try out some of those ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** python (9)
> **Definitions:** is an  (3), is a  (3), means that (1)
> **Analogies:** just like (1), imagine (1), it's like (1), for example (1)
> **Tools:** vs code (1), colab (1)
> **Code Identifiers:** classes_start (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** set up (1)

#### [Importing and using modules](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=0)** - [Speaker] One of the most powerful features of the [[Python (Programming Language)|Python]] ecosystem is the large number of library modules of prebuilt code that you can use in your programs.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=11)** The standard Python installation contains quite a few of these modules, some of which we will learn about later in the course.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=17)** But before we get there, let's take a look at a simple example that shows how to take advantage of all this code that you don't have to write yourself.
>
> **[0:26](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=26)** So let's open up the modules, start file in our editor, and, of course, in Colab, just create a new code cell for yourself.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=37)** So here in the Python documentation, let's take a look at the standard library again.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=43)** So if I scroll down a little bit, okay, here in this section labeled, numeric and mathematical modules, there's a link for the math module.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=55)** So let's click on that.
>
> **[0:58](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=58)** And that takes me to the math module documentation.
>
> **[1:02](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=62)** And you can see here that there's a lot of math-related functions that I can use in my Python programs.
>
> **[1:08](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=68)** So what I'm going to do is tell Python that my program wants to use the math module.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=74)** So let's go back to the code.
>
> **[1:16](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=76)** To do that, I need to use the import statement along with the name of the module that I want to use, in this case, it's called math.
>
> **[1:24](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=84)** So once I've done that, suppose I wanted to calculate the square root of a number.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=89)** Well, if we go back over here into the math module and we scroll down a little bit, okay, here we go.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=95)** We can see that there's a function for the square root of a number.
>
> **[1:42](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=102)** So what I'm going to do is take advantage of that code.
>
> **[1:45](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=105)** I'm going to write print The square root of 16 is,
>
> **[1:56](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=116)** and now that I've imported the math module, I can write math.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=119)** And then when I hit dot, you can see that there's a whole bunch of pre-built functions in here.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=124)** What I'm going to do is use the sqrt function and pass in 16.
>
> **[2:12](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=132)** Alright, so let's go ahead and try running that.
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=137)** So let's run this in the terminal.
>
> **[2:19](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=139)** And you can see the square root of 16 is four.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=142)** Let's go ahead and copy this over to Colab and let's try running it.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=147)** And sure enough, the square root of 16 is four.
>
> **[2:32](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=152)** Alright, so now I've imported the math module and I can use it to functions.
>
> **[2:36](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=156)** However, I can also choose to import only specific parts of a module that I want to work with.
>
> **[2:43](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=163)** So for example, if you go back to the math module, you'll see that there are some constants defined down here like pi, and E, and so on.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=170)** I can import a constant like pi directly.
>
> **[2:54](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=174)** What I'm going to do is right from math import pie.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=182)** Now I don't need to type the math prefix anymore.
>
> **[3:06](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=186)** If I want to use pi, I can just refer to pi itself.
>
> **[3:10](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=190)** So I'll just write print pi is and then pi.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=199)** And let's go ahead and comment that one out.
>
> **[3:25](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=205)** Let's run this in the terminal.
>
> **[3:27](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=207)** And sure enough, we can see that pi is, well, the big long value of pi.
>
> **[3:31](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=211)** Alright, let's keep on going.
>
> **[3:33](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=213)** I can also import modules and give them a shorthand name to make them easier to work with.
>
> **[3:40](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=220)** So for example, there's a module called random, which lets me generate random numbers for a variety of reasons.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=228)** And you can see all the code that's in here.
>
> **[3:50](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=230)** This is the documentation for it.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=232)** So if I want to work with random numbers, what I'm going to do is import random and then I'll type as r.
>
> **[4:03](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=243)** So now, instead of typing random dot every time I want to use one of the methods or functions inside random, I just need to use this shorthand name that I've given it.
>
> **[4:13](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=253)** So for example, I can now print r.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=258)** and then I'll call the randint function and I'm going to generate a random integer between 100 and 200.
>
> **[4:25](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=265)** And let's comment that out.
>
> **[4:30](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=270)** Alright, let's run that.
>
> **[4:32](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=272)** And you can see that each time I run it, right, I'm getting a different random number between 100 and 200.
>
> **[4:41](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=281)** And let's go ahead and try that in Colab.
>
> **[4:44](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=284)** So I'll make a new code cell, paste that code in, and let's run it.
>
> **[4:50](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=290)** And you can see each time I run it, the number is different.
>
> **[4:55](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=295)** Alright, so far, so good.
>
> **[4:58](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=298)** Now in addition to the standard library, there are some really good third-party modules that perform all kinds of functions.
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=307)** So for example, let's use the tabulate module.
>
> **[5:10](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=310)** And the tabulate module is a third-party project that prints out tabulated data in a nice format.
>
> **[5:18](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=318)** So you can see here if I scroll down a little bit, there's a whole bunch of like table formats we can use and you can see the different kinds of table formatting for printing out data.
>
> **[5:31](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=331)** But let's go ahead and make use of it in our program.
>
> **[5:33](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=333)** So in my code, what I'm going to do is install it first.
>
> **[5:38](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=338)** Now, you don't need to do this if using Colab because tabulate is already installed for you along with lots of other modules.
>
> **[5:44](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=344)** But here in Visual Studio Code, I'm going to open up my terminal and I'm going to install it using the Python package manager, which is called pip.
>
> **[5:54](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=354)** So I'm going to type pip install tabulate and it's already there.
>
> **[6:01](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=361)** So, it's been installed for me.
>
> **[6:03](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=363)** This is probably, if you're doing this the first time, you'll see that it gets installed.
>
> **[6:07](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=367)** So once it's installed, now we can make use of it and refer to it.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=371)** So what I'm going to do is in my code, you can see that I already have some sample data here.
>
> **[6:18](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=378)** So I have a list of various product information.
>
> **[6:21](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=381)** There's a header along with some [[Microsoft Products|products]] and prices and quantity.
>
> **[6:26](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=386)** So first, I'm going to write from tabulate import tabulate.
>
> **[6:33](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=393)** Now this may seem a little confusing.
>
> **[6:35](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=395)** It turns out that the class name and the module name are the same.
>
> **[6:40](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=400)** So the same way that the math module contains a, you know, various functions and so on that aren't called math.
>
> **[6:47](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=407)** In the case of tabulate, the actual class is also called tabulate.
>
> **[6:51](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=411)** That's why I'm doing this.
>
> **[6:52](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=412)** So what I'm going to do is create a formatted table.
>
> **[6:56](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=416)** So I'll print the result of the tabulate function and the tabulate function takes the data.
>
> **[7:05](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=425)** And then I'm going to specify that there are headers.
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=427)** So the headers is equal to the first row.
>
> **[7:12](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=432)** And then the table format, I'm going to specify as fancy_grid.
>
> **[7:21](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=441)** Alright, and let's comment out our previous example.
>
> **[7:27](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=447)** Alright, let's go ahead and run our code.
>
> **[7:30](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=450)** And you can see that I'm using the tabulate function to print out this nicely formatted table.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=455)** Let's go ahead and copy this and let's try it in Colab.
>
> **[7:42](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=462)** So, I'll make a new cell.
>
> **[7:45](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=465)** All right, and let's run this.
>
> **[7:48](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=468)** And you can see I'm getting the same result here.
>
> **[7:50](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=470)** If we look at the documentation again and scroll down, you can see that there's plenty of table formats.
>
> **[7:55](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=475)** So I used fancy_grid.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=478)** Let's try something else.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=478)** Let's try double_outline.
>
> **[8:01](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=481)** I'll copy that and let's paste that in here.
>
> **[8:06](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=486)** Alright, so in the [[Representational State Transfer (REST)|rest]] of the course, we're going to be using some other great modules to perform useful work, such as manipulating dates and times and working with files and even processing internet data like XML and [[JSON]].
>
> **[8:21](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=501)** But before moving on though, I would suggest maybe taking a few moments and trying out some of the other math functions, or maybe try out some of the other features of the tabulate module just to get a feel for what it's like to work with modules.
>
> **[8:35](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=515)** And again, you can find the tabulate documentation at this link and you can find the random and math modules at these links.
>
> **[8:45](https://www.linkedin.com/learning/learning-python-25309312/importing-and-using-modules?u=76281980&t=525)** So take some time here, maybe practice some of these functions before moving on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1)
> **CLI Commands:** python (6), make (5), pip (2), find (2)
> **Tools:** colab (5), terminal (3), visual studio (1)
> **Analogies:** for example (4), such as (1), it's like (1)
> **UI Navigation:** scroll down (4), click on (1)
> **Code Identifiers:** fancy_grid (2), double_outline (1)
> **Cross-References:** go back to (2), later in (1)
> **Prerequisites:** install (3)

#### [Using exceptions](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=0)** - [Instructor] Programs run into problems and errors all the time, so it's a good practice to have a plan for handling them when they happen.
>
> **[0:09](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=9)** And in [[Python (Programming Language)|Python]], this is achieved through a mechanism called exception handling.
>
> **[0:13](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=13)** And this is not unique to Python.
>
> **[0:15](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=15)** Many other languages have something like this.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=18)** So let's look at how it works.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=20)** I'm going to open up the exceptions_start file, and in CoLab, if you're using CoLab, just make a new code cell.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=28)** So here in my editor, I'm going to start off by writing some code that is definitely going to cause an error.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=35)** So I'm going to make a variable called x and I'll assign it to the result of 10 divided by zero.
>
> **[0:41](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=41)** Now that's going to generate an error because obviously dividing by zero is a math error, and when I try to run this, right, sure enough, you can see that we get this zero division error, and it says division by zero, and it shows me the line of code where this happened.
>
> **[0:58](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=58)** And if I do the same thing in CoLab, right, I'm going to get this complaint.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=66)** Oh, whoops, ZeroDivisionError.
>
> **[1:09](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=69)** So this is a pretty bad experience for users of our program and we can do a much better job of handling errors like this in our code by using exception handling.
>
> **[1:21](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=81)** So let's rewrite this by using exception handling code.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=86)** So exception handling consists of two main parts.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=89)** There's the code that I want to run, and then there's the code that handles any problems that might happen.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=95)** What I'm going to do is I'm going to write the [[Microsoft Word|word]] try and then colon, which means I'm starting a new code block.
>
> **[1:42](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=102)** So I'm going to try to divide these two numbers, then I'm going to use the word except, and then inside the except code block, I'm going to print, "Well that didn't work" and let's go ahead and comment out this example here.
>
> **[2:02](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=122)** Alright, so within the try section is where I write my code that might cause a problem.
>
> **[2:08](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=128)** It's not going to definitely cause a problem, but it might.
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=131)** Python will execute the code as usual, and if anything goes wrong, then the flow of the program immediately transfers to the except section where I can handle the error much more gracefully than having the program just crash.
>
> **[2:26](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=146)** So in this case, the divide by zero error will cause the program to just jump to this print statement.
>
> **[2:32](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=152)** So if I run this with the updated code, you can see that, sure enough, rather than getting that ugly stack trace and crash, we get this message that says, "Well that didn't work."
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=165)** So this is a better experience, but we can improve on this.
>
> **[2:48](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=168)** First, it's not a good practice to just use the word except by itself.
>
> **[2:54](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=174)** You should write except sections that handle specific errors.
>
> **[2:59](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=179)** So let's go ahead and rewrite this in a different part of the code here.
>
> **[3:05](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=185)** So what I'm going to do do is I'm going to have a try section, and I'm going to define a variable called answer, and I'm going to ask the user "What should I divide 10 by?"
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=199)** and then I'm going to declare a variable named num and I'm going to use the int function to convert that string into an in integer number, and then I'll print 10 divided by num.
>
> **[3:32](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=212)** All right, now in this case, the user might enter a zero, which would cause a divide by zero exception, or they might enter some input that isn't a number, which will cause this integer conversion function to fail with a value error exception.
>
> **[3:50](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=230)** So to handle both of these separately, I'm going to use multiple except sections.
>
> **[3:56](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=236)** So the first one will handle the zero division.
>
> **[3:59](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=239)** So I'll write except, and then I'm going to specify the exact name of the exception I want to handle, so this is going to be a ZeroDivisionError as e.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=251)** I'll just capture that as a variable and I'm not going to use it, but you can use the properties inside the exception variable if you want to.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=258)** And I'm going to print out, "You can't divide by zero" and then I'm going to have another except section, and this one is going to catch the value error also as e, even though I'm not going to use it, and I'm going to print out "You didn't give me a valid number."
>
> **[4:42](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=282)** And actually you, know what, I changed... I'm actually going to print out e.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=285)** Let's just see what it looks like.
>
> **[4:47](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=287)** Now there's one more section we can add, and that's called a finally section.
>
> **[4:52](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=292)** This section contains code that will always execute regardless of whether an error occurred, and you can use it to clean up any resources that you've allocated, such as closing any open files that you have or any other system resources that you're using in case anything goes wrong.
>
> **[5:10](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=310)** So I want to just demonstrate that it works.
>
> **[5:13](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=313)** So I'll just simply print "Finally always runs."
>
> **[5:18](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=318)** Alright, so let's go ahead and comment out our previous example, control slash or command slash on the Mac.
>
> **[5:28](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=328)** All right, and then let's run this.
>
> **[5:31](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=331)** Okay, so now my code is running, and it's asking me what should I divide 10 by?
>
> **[5:37](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=337)** Let's enter a real number like two.
>
> **[5:40](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=340)** Alright, so we can see that that works, and the answer of 10 divided by two is in fact five, and you can see that the finally section always runs.
>
> **[5:47](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=347)** Let's run it again.
>
> **[5:50](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=350)** Okay, what should I divide 10 by?
>
> **[5:52](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=352)** Let's enter zero, and you can see now that my ZeroDivisionError exception handle is being triggered.
>
> **[5:59](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=359)** All right, and then finally, let's run it one more time.
>
> **[6:02](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=362)** What should I divide 10 by?
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=364)** Let's enter some gibberish.
>
> **[6:05](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=365)** This is not a number, so I'll print in, I'll put in abc, and it says, now I'm getting my, "You didn't give me a valid number."
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=374)** That's right here, okay?
>
> **[6:16](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=376)** Then I'm printing out the actual exception, and we can see that the exception is invalid literal for int with base 10.
>
> **[6:23](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=383)** So I gave it abc, and this is just a very technical way of saying, "Hey, I couldn't convert abc into a number," and sure enough, "Finally always runs."
>
> **[6:33](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=393)** For those of you running CoLab, let's just go ahead and try that out.
>
> **[6:36](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=396)** I'll copy this, and let's paste it in over here.
>
> **[6:40](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=400)** Let's make a new code cell for this.
>
> **[6:43](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=403)** All right, and let's run this.
>
> **[6:46](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=406)** So let's do two.
>
> **[6:49](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=409)** That works.
>
> **[6:52](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=412)** Zero, right?
>
> **[6:53](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=413)** That causes an exception, and then abc, and you can see the same results.
>
> **[7:01](https://www.linkedin.com/learning/learning-python-25309312/using-exceptions?u=76281980&t=421)** So exceptions make error handling a bit easier by centralizing the code for dealing with those errors in one place and separating it out from the code that actually does the program's work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Word|Word]] (3)
> **CLI Commands:** make (4), python (3)
> **Tools:** colab (4)
> **Definitions:** is a  (3)
> **Best Practices:** good practice (2)
> **Code Identifiers:** exceptions_start (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Palindromes](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=5)** - [Instructor] All right, this one was a little bit of a tricky one.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=7)** So let's take a look at my code for this challenge.
>
> **[0:10](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=10)** So in order to determine whether a string is a palindrome, we have to ignore capitalization and we have to also get rid of spaces and punctuation.
>
> **[0:23](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=23)** My code starts by converting the incoming string to lowercase, so we don't have to worry about comparing different letter casing.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=33)** And this was one of the hints that I provided in the hint section.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=37)** You could also convert the string to all uppercase as well.
>
> **[0:39](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=39)** It doesn't really matter.
>
> **[0:41](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=41)** Next, I strip off all the spaces and punctuation from the incoming string.
>
> **[0:47](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=47)** So I create a new string, and then I have a for loop that checks each character in the test string.
>
> **[0:56](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=56)** Now I'm using the isalnum function, which is a built-in function for [[Python (Programming Language)|Python]] string objects.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=63)** And it checks to see if any given character is alphanumeric.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=67)** In other words, it's A through Z or zero through nine.
>
> **[1:09](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=69)** And again, this was another one of the hints that I gave you in the challenge.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=74)** So if it is, then I add that character to my new string, otherwise I skip over it.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=80)** So when this loop completes, this new string will have only the lowercase letters and numbers in it.
>
> **[1:28](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=88)** So it'll have all the punctuation and spaces stripped out.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=91)** Next, I have to build the reverse version of the string to compare against the original, because if they're the same, then we know that it's a palindrome.
>
> **[1:41](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=101)** Now, the way that I've solved this here is not necessarily the most efficient way of doing it, but since this is a learning course, I wanted to focus more on understanding the algorithm than being as clever as possible with my code.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=114)** So I have a variable named reversestr and I have a loop that starts at the end of the test string and works its way backward.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=126)** So I'm just going to take each character as I come across it and build the reverse string.
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=131)** Now, you could have done this in a much more clever way.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=133)** You could have done something like reversestr is equal to, let's see, teststr.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=142)** And you could have used the slicing syntax like this to make the reverse string.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=147)** That's a lot more clever, but I was going for readability here.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=150)** So once I have the reverse string, then I can compare it to the original string.
>
> **[2:36](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=156)** Well, I mean not the original string, the new string, the one that I've taken the test string and converted, taken all the space and everything.
>
> **[2:44](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=164)** So if the string with all the punctuation and spacing and such stripped out is equal to my reverse string, well then I know we have a palindrome and I return true, otherwise I return false.
>
> **[2:57](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=177)** So let's go ahead and take a look at the test code.
>
> **[3:00](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=180)** And we've got some strings here that we can test out.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=182)** So let's test out Madam, I'm Adam, and you can see that it worked.
>
> **[3:06](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=186)** All right, let's go ahead and comment that one out.
>
> **[3:08](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=188)** Let's try some of these other words, let's try race car.
>
> **[3:13](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=193)** Yep, seems to work, that's good.
>
> **[3:16](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=196)** Let's see, let's try this one here, the a man, a plan, a canal Panama.
>
> **[3:23](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=203)** Yep, sure enough, it works.
>
> **[3:25](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=205)** Okay, well that's my solution.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/solution-palindromes?u=76281980&t=206)** Take a look at my code, compare it to yours, and see where you've got some similarities and differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (3), in other words (1)
> **CLI Commands:** python (1), make (1)
> **Speakers:** - [instructor] (1)


### 4. Welcome to Part 2

[↑ Back to Table of Contents](#table-of-contents)

#### [Applying what you've learned](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=0)** - Welcome to Part 2 of the course.
>
> **[0:01](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=1)** Up until now, we've been learning about the basics of the [[Python (Programming Language)|Python]] language and many of its features.
>
> **[0:06](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=6)** We've seen how to use variables, write functions, make use of modules in the standard library, and a lot more.
>
> **[0:13](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=13)** You've now learned enough Python to start writing some real programs that solve real scenarios.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=18)** In the next few chapters, we'll see how to use Python to work with dates and times, operate on files using the file system, and we'll even see how to retrieve data from the internet and work with data formats like XML and [[JSON]], two of the most common data formats on the web.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/applying-what-we-ve-learned?u=76281980&t=33)** Let's go, it's time to get started on the fun part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[JSON]] (1)
> **CLI Commands:** python (3), make (1)
> **Env Vars:** xml (1), json (1)
> **Cross-References:** in the next (1)
> **Speakers:** - welcome (1)


### 5. Using Dates and Times

[↑ Back to Table of Contents](#table-of-contents)

#### [The date, time, and datetime classes](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=0)** - [Instructor] Just about every programmer has to work with dates and times at some point.
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=5)** In this chapter, we're going to start by learning about some of the [[Python (Programming Language)|Python]] classes that are available for this purpose.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=11)** So let's open up in chapter five, the Dates Start file and those of you using CoLab can just create a new code cell.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=21)** So in order to get this rich date and time functionality, we of course have to import the necessary modules and classes from the standard library, and we saw how to do that earlier in the course.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=34)** So here you can see I've got the from date time import date, and from datetime import datetime classes.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=43)** So let's go ahead and copy and paste these into our CoLab starting point.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=49)** So I'm going to make use of the date and datetime classes in this example, both of which are part of the Python standard library.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=57)** Now, the second import here might be a little confusing.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=59)** There's actually a class named datetime inside the module named datetime.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=65)** So to be clear, that's what I'm importing here.
>
> **[1:08](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=68)** I'm importing the datetime class from the datetime module, which happens to have the same name.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=74)** Let's go ahead and exercise some of the features of these classes.
>
> **[1:19](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=79)** First, let's do something simple.
>
> **[1:20](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=80)** Let's just print out today's date.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=83)** So I'll make a variable called today and on the date class, I'll call the today function.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=90)** And then I'm going to print out today's date is, and then today.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=96)** So the today function returns information about the current date and I'm just going to print it out, so let's run that.
>
> **[1:45](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=105)** And sure enough, we can see today's date printed right here.
>
> **[1:48](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=108)** Let's try the same thing in CoLab.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=111)** So let's copy and paste that.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=114)** Alright, and we can see that the current date is being printed, so far so good.
>
> **[1:58](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=118)** So for the next example, let's print out the individual components of a particular date object.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=126)** So remember a little bit earlier in the course, we learned about classes and objects and how different objects can have properties and functions on them.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=134)** And the date and time classes have various properties that we can make use of.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=140)** So let's print out the date components and I'm going to print out today.day, today.month, and today.year.
>
> **[2:33](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=153)** So I can get the individual day, month, and year among the other values.
>
> **[2:39](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=159)** So let's go ahead and try this out.
>
> **[2:43](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=163)** And we can see that the dates components are, here's the day, here's the month, and here's the year.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=169)** So the date class also provides some useful properties I can use in other more advanced features of an application.
>
> **[2:57](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=177)** So for example, I can retrieve what's called the weekday number.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=182)** So let's try that out.
>
> **[3:03](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=183)** And I'm going to just go ahead and comment out these previous examples just to avoid cluttering up the output.
>
> **[3:11](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=191)** So every weekday has a number assigned to it.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=195)** Zero is Monday up through six, which is Sunday.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=200)** So I'm going to print today's weekday number, and that's going to be today.weekday.
>
> **[3:33](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=213)** And oops, I don't want to comment out the actual variable that gets my date.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=219)** Alright, there we go.
>
> **[3:42](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=222)** So if I had some list that I wanted to provide an index variable for that list, which depended on the weekday, I could use the weekday property to index into a list of say abbreviated names.
>
> **[3:57](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=237)** So for example, if I had something like days equals and I'm going to make a list and that's going to have Monday, Tuesday, Wednesday, all the way up through the end of the week.
>
> **[4:14](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=254)** Then I can do something like this.
>
> **[4:16](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=256)** I can write, which is a, and then I'm going to print days indexed by today.weekday.
>
> **[4:30](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=270)** So this will give me a number zero through six, which will correspond to an index into this list.
>
> **[4:37](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=277)** Let's go ahead and run that.
>
> **[4:39](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=279)** And you can see that today's weekday number is two, so that's a Wednesday.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=285)** So it's zero, one and two.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=285)** And you can see that sure enough, that's the result that we're getting.
>
> **[4:49](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=289)** Alright, let's turn our attention to datetime objects.
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=293)** So just like working with dates, I can get time values as well.
>
> **[4:57](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=297)** So using the datetime class instead of the date class, I can now call the now function, and that will gimme the current date as well as the time.
>
> **[5:07](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=307)** So I'll write today = datetime.now, and then let's print out the result of that.
>
> **[5:14](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=314)** So the current date and time is, and we'll print out today and let's go ahead and comment these out.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=327)** All right, and we can see that now in the output, I have the current date and the current time.
>
> **[5:36](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=336)** So here's the date and here's the current time down to the nearest millisecond, it's pretty accurate.
>
> **[5:44](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=344)** To get the current time, we can use the time portion of the datetime object, and we do that with the time function.
>
> **[5:52](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=352)** So let's try that out.
>
> **[5:55](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=355)** Let's make a variable called T.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=358)** And I'm going to call on the datetime class.
>
> **[6:00](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=360)** I'm going to call the time function.
>
> **[6:03](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=363)** And the argument to that function is the datetime object.
>
> **[6:07](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=367)** So I'll give it datetime.now, and then I'll print out the current time is and then T.
>
> **[6:20](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=380)** All right, so let's go ahead and comment that out and run our updated code.
>
> **[6:27](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=387)** And now we can see I have just the time instead of the date and time.
>
> **[6:33](https://www.linkedin.com/learning/learning-python-25309312/the-date-time-and-datetime-classes?u=76281980&t=393)** So now that we know the basics of how to retrieve the current date and time, we can use these values in some more advanced scenarios, which we will see as we go through the [[Representational State Transfer (REST)|rest]] of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5), python (2)
> **Tools:** colab (3)
> **Analogies:** for example (2), just like (1)
> **Cross-References:** earlier in (2)
> **Speakers:** - [instructor] (1)

#### [Formatting time output](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=0)** - [Instructor] All right, now that we've seen how to retrieve basic date and time information in [[Python (Programming Language)|Python]], let's take a look at how to format that information using a set of predefined formatting codes.
>
> **[0:13](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=13)** So in my editor, I'm going to open up the formatting_start example, and here in my example, I've already imported the datetime class.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=21)** So if you're using CoLab, create a new cell and just go ahead and paste that in.
>
> **[0:26](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=26)** So Python provides a standard set of string formatting codes that you can use in a variety of scenarios.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=34)** And I'll show the docs for this in a moment.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=37)** Essentially, the way that it works is each formatting code is a percent sign followed by a letter, and that letter means something in the output string.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=45)** So let's exercise a few examples and then I'll show you the documentation and a website you can use to try out different formats.
>
> **[0:54](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=54)** So let's start out with a familiar piece of code to get the current date and time we saw in the previous video.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=59)** So I'm going to have a variable named now and I'm going to call datetime.now.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=66)** So now that I have the current date and time, I can use some of these formatting codes to nicely format this date and time information however I want it.
>
> **[1:15](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=75)** So the way that this works is to format date and time information into a string, you use what's called the strftime function, and that's available as a function on the datetime object that we get back from this now function.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=89)** So the way that this works is I'm going to print now and I'm going to call strftime.
>
> **[1:38](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=98)** And then we're going to give it a string.
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=99)** And that string is going to contain whatever output I want along with these formatting codes.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=104)** So let me give you a really simple example.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=107)** Each of these codes serves as a placeholder for the date and time data.
>
> **[1:52](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=112)** So for example, if I wanted to format a string with the full year number, I'd write something like this, I'd write The current year is and then I would type percent.
>
> **[2:05](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=125)** And in this case I would use an uppercase Y, which basically means give me the current year with the four digit century included.
>
> **[2:15](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=135)** So if I run this example really quick, you can see that that's exactly what happens.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=141)** So the formatting code gets replaced by that piece of the date and time information.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=147)** So let's try something a little bit more fancy and let's use several codes in the string all at once.
>
> **[2:34](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=154)** So I'm going to write print, once again, now.strftime, and in this case, I'm going to just use codes.
>
> **[2:43](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=163)** So I'll percent, let's see, %a, %d %B, %y.
>
> **[2:58](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=178)** All right.
>
> **[2:59](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=179)** So this formatting string will give me the, let's see, it's going to be the abbreviated day name followed by the day of the month, then the full month name.
>
> **[3:10](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=190)** And then in the case of the lowercase Y, that's the two digit abbreviated year.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=195)** All right, so let's try that and let's see what happens.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=199)** And sure enough, you can see here it is, it's Thursday 16th of January of 25.
>
> **[3:25](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=205)** Python also gives you a way of printing out specific locale information.
>
> **[3:29](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=209)** Before we take a look at that, however, let me quickly show you what the docs are.
>
> **[3:33](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=213)** So if you look inside the Python documentation, this link here will take you right to the list of formatting codes for the strftime function.
>
> **[3:44](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=224)** And in typical, you know, Python docs fashion, it's kind of complex and nerdy, and hard to read and so on.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=232)** I actually like to use this reference instead.
>
> **[3:54](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=234)** And you can see that this link, it's strfti.me.
>
> **[3:59](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=239)** So they took the function name and just made a .me domain name out of it.
>
> **[4:03](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=243)** And this is much easier to read.
>
> **[4:06](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=246)** You can see an explanation of all the different codes, and you can see how different examples use it.
>
> **[4:13](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=253)** There's a nice little edit box here that you can try out various different formatting codes to see how they work.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=258)** So this is much preferred, I think, over the built in documentation.
>
> **[4:23](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=263)** So either one of these resources you can try out, and you can see the different codes to put in the string as the placeholder for the formatting of the date and time.
>
> **[4:33](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=273)** All right, so let's go back and take a look at the locale information.
>
> **[4:36](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=276)** So rather than having to manually figure out the specific locale that your application is being run in and how to print out information using the current localized versions of date and times, there's actually a set of codes that do that for you.
>
> **[4:53](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=293)** So let me enter a few of those and let me comment out the previous example.
>
> **[4:59](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=299)** So what I'm going to do is print out now.strftime.
>
> **[5:05](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=305)** And so the Locale date and time is going to be %c.
>
> **[5:15](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=315)** And I can get a little bit more granular than that, I can write, for this version, I'll write the locale.
>
> **[5:22](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=322)** So just the date is %x, and then I'll copy and paste that line.
>
> **[5:31](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=331)** And then uppercase %X is the locale time.
>
> **[5:38](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=338)** All right, so let's give that a try.
>
> **[5:41](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=341)** I'm going to run that.
>
> **[5:44](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=344)** All right. And we can see the locale information here.
>
> **[5:47](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=347)** So you can see it's printing out the date and time information appropriately for how I have the locale set up on my computer.
>
> **[5:55](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=355)** Now, if I was running this on a computer in say Europe, then the information you see printed here would probably look a little bit different based upon what that locale settings are.
>
> **[6:07](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=367)** So here I've got, you know, the month first and then the day second.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=371)** But other countries put the day and then the month.
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=374)** So these control codes, %c, right, lowercase and uppercase %X allow you to use whatever the current locale's appropriate formatting is for dates and times.
>
> **[6:28](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=388)** All right, let's finish up this example with a look at some formatting for time.
>
> **[6:33](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=393)** So just the same way that you can print formatted date information, you can print formatted time information as well.
>
> **[6:40](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=400)** So let's have a couple of examples of that.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=405)** I'm going to use the strftime, and I'll write the current time is, so I'll use, let's see, %I:%M:%S.
>
> **[7:03](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=423)** So that's hours, minutes, and seconds.
>
> **[7:06](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=426)** And then I'll have a space with a %p, which means AM or PM.
>
> **[7:13](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=433)** And you can see that %I and H is 12 versus 24 hour clock.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=438)** So let's try that one as well.
>
> **[7:21](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=441)** We can try copying, I'll paste this one, and instead of %I, I'll use %H and M and I'll just leave off the seconds, and AM and PM.
>
> **[7:33](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=453)** And let's go ahead and comment out the previous example.
>
> **[7:39](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=459)** Let's go ahead and run this.
>
> **[7:41](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=461)** And you can see that the current time is 12:17:15 AM, and the current time, so you can see that the 24 hour clock and the 12 hour clock, these are the values here.
>
> **[7:54](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=474)** So now if it was afternoon, it would print a 24 hour based value, right?
>
> **[7:59](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=479)** So 13 for one o'clock for example, and that's for the %H case.
>
> **[8:03](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=483)** So if you find yourself needing to print formatted date and time data in a super customized way, Python provides some pretty rich controls for accomplishing this scenario.
>
> **[8:15](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=495)** And of course, you know, you don't need to keep all these codes in your head.
>
> **[8:18](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=498)** Like I said, there's some great documentation on this.
>
> **[8:21](https://www.linkedin.com/learning/learning-python-25309312/formatting-time-output?u=76281980&t=501)** So check out the docs and, you know, try out some examples here at this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6), find (1)
> **Documentation:** the docs (3), the documentation (1)
> **Ports:** :17 (1), :15 (1)
> **Definitions:** is a  (1), basically means (1)
> **Analogies:** for example (2)
> **Code Identifiers:** formatting_start (1)
> **Cross-References:** previous video (1)

#### [Using timedelta objects](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=0)** - [Instructor] A common scenario that pops up when working with dates and times involves performing mathematical operations on the dates and times themselves.
>
> **[0:09](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=9)** So for example, given a particular date, you might want to calculate a date in the future or the past relative to that date or the time difference between two dates.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=18)** And we can use the timedelta class in [[Python (Programming Language)|Python]] to help us with this.
>
> **[0:23](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=23)** And that's what we're going to look at in this example.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=25)** I've also provided a link to the documentation for timedelta objects right here.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=29)** You can go look at that on your own time.
>
> **[0:31](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=31)** I'm not going to make you read through the docs.
>
> **[0:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=32)** Let's just go ahead and learn by example because that's usually a lot better.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=37)** So I'm going to open up the timedeltas start example, and you can see that I've imported some packages I'm going to be using.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=46)** So we've already seen the date and datetime modules.
>
> **[0:50](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=50)** You can see I'm also importing the timedelta class from datetime.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=55)** Let's go ahead and copy these and let's paste them into a code cell in Colab for those of you using Colab.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=63)** So a timedelta is basically a span of time.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=66)** It's not a particular date or a particular time.
>
> **[1:08](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=68)** It's an amount of time.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=70)** And you can use this class to perform time-based mathematics.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=74)** So let's take a look at some examples.
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=77)** To construct a basic timedelta, all you need to do is create the timedelta class and pass in the amount of time that you want the Delta to represent.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=89)** So for example, I'm going to create a timedelta, and the parameters I'm going to give it is, I'm going to say days equals 365 hours is going to be 5 and minutes is going to be 1.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=107)** So in this case, I'm creating a timedelta, a span of time that represents 365 days, 5 hours and 1 minute.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=117)** And I'm going to print that out.
>
> **[1:58](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=118)** So let's just go ahead and run this before we do anything else.
>
> **[2:02](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=122)** All right, and you can see 365 days, 5 hours in 1 minute.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=126)** Let's go ahead and copy. Let's paste this into Colab.
>
> **[2:10](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=130)** Okay, we get the same result. That's great.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=133)** So let's use today's date as a reference point for the next few operations.
>
> **[2:19](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=139)** And we've already seen how to do that, right?
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=142)** We, I make a variable called now and we already know how to use datetime.now to get the current date and time.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=151)** So let's go ahead and print today's date. So today is now.
>
> **[2:37](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=157)** All right, so we've got today's date and time.
>
> **[2:39](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=159)** Let's use a timedelta to figure out what today's date will be one year from now.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=166)** So let's print out in one year it will be.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=170)** And then I'm going to take now and I'm going to add a timedelta and the days parameter I'm going to set to 365.
>
> **[3:00](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=180)** All right, let's go ahead and try that and let's comment out this first example right there.
>
> **[3:06](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=186)** Okay, let's try running this.
>
> **[3:09](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=189)** All right, so today it's January 16th.
>
> **[3:12](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=192)** In one year it's going to be again January 16th.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=195)** But you can see that the year has incremented from 25 to 26.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=201)** Okay, so far so good. Let's keep on going.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=204)** And in fact, you know what?
>
> **[3:25](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=205)** Let's copy and paste this into Colab.
>
> **[3:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=212)** Yep, okay, same result. That's great.
>
> **[3:35](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=215)** Let's try using a timedelta with more than one argument.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=219)** So I'll write print, in 2 weeks and 3 days it will be, and I'll write now plus timedelta weeks equals 2 and days equals 3.
>
> **[3:58](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=238)** So in this case, I'm constructing a timedelta of 2 weeks and 3 days.
>
> **[4:03](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=243)** Let's try that.
>
> **[4:06](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=246)** All right, so in 2 weeks and 3 days we see what the next date is going to be.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=251)** All right, so now let's try a calculation in the past and use what we've already learned to format that result as a string.
>
> **[4:20](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=260)** So if you didn't watch the previous video on formatting time output, you should go watch that now to understand what I'm about to do, I'm going to create a variable called T and I'm going to take datetime.now and subtract off a timedelta of 1 week.
>
> **[4:45](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=285)** And then I'm going to create a variable called S.
>
> **[4:48](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=288)** And on that time object, I'm going to call the strftime function.
>
> **[4:52](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=292)** And we learned about this in the previous video.
>
> **[4:54](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=294)** So I'm going to format that time using these formatting codes and you can go watch that video to learn what these codes mean.
>
> **[5:03](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=303)** And I'll print, one week ago it was, and then that string.
>
> **[5:12](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=312)** Okay, let's go ahead and comment out the previous examples.
>
> **[5:19](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=319)** Of course, if you're in Colab, you don't have to do that, just make a new code cell.
>
> **[5:25](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=325)** All right, let's run this. All right?
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=327)** And we can see that one week ago, it was January 9th, all right, seems to have worked.
>
> **[5:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=332)** And you can see the formatting codes here, right?
>
> **[5:34](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=334)** So I get the full day name, the full month name, the 2 digit day, and the full year.
>
> **[5:41](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=341)** So by using a timedelta, I calculated times both in the future and in the past.
>
> **[5:47](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=347)** Okay, let's take a look at one more interesting example.
>
> **[5:53](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=353)** Let's comment that out.
>
> **[5:55](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=355)** Let's write a script that's going to calculate how many days it is until the next April Fools' Day.
>
> **[6:02](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=362)** So I'm going to write today equals date.today.
>
> **[6:06](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=366)** So all I care about is the date.
>
> **[6:08](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=368)** I don't want datetime, just the date.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=371)** Next I'll create a new date that represents April Fools' Day for the current year.
>
> **[6:17](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=377)** So I'll make a variable called afd for April Fools' Day, I'll make a new date object and I'll use today's year property.
>
> **[6:27](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=387)** And April Fools' is on April.
>
> **[6:29](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=389)** That's the fourth month and the first day.
>
> **[6:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=392)** So now I'll compare these 2 dates to see if April Fools' Day has already gone by.
>
> **[6:38](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=398)** Now it's January, so it hasn't gone by, but if it has gone by then I need to get the next one.
>
> **[6:44](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=404)** So I'll write if afd.
>
> **[6:48](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=408)** So if April Fools' Day is less than today, I'm going to print and I'm going to use a formatting string for this.
>
> **[6:54](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=414)** So I'll use the F character.
>
> **[6:56](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=416)** I'll write April Fools' Day already went by.
>
> **[7:03](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=423)** And then I'm going to use my formatting here in my interpolated string.
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=427)** I'm going to write today minus afd.days and then days ago.
>
> **[7:20](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=440)** And then what I'll need to do is in my April Fools' Day variable, I'm going to use the replace function to replace the year with today's year plus 1 because if it's already gone by, I've got to get the date for next April Fools' Day.
>
> **[7:39](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=459)** Now I just need to subtract the April Fools' Day date from today to create a timedelta result.
>
> **[7:48](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=468)** So I'll make a variable called time_to_afd equals afd minus today.
>
> **[7:57](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=477)** And then I'll print out and I'll use my interpolating string for this.
>
> **[8:03](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=483)** It's just, and then inside the braces, I'll write time_to_afd.days, and then days until April Fools' Day.
>
> **[8:20](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=500)** All right, so let's go ahead and run this. All right?
>
> **[8:24](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=504)** And since it's January and April Fools' Day has not gone by yet, it's just 75 days until April Fools' Day.
>
> **[8:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=512)** But we can, if you want, you can create a fake date representing today and we've seen how to do that.
>
> **[8:39](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=519)** So let's go ahead and change today.
>
> **[8:43](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=523)** I'll just copy and paste this.
>
> **[8:45](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=525)** So rather than making today date.today, I'll just create a new date and I'll have today.year and let's pretend it's November 10th now let's run this again and oh, whoops.
>
> **[9:07](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=547)** All right, there we go. Let's run this again.
>
> **[9:11](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=551)** All right, now we can see that when we're pretending that it's already November, you can see it says April Fools' Day already when by, already when by, (laughs) went by.
>
> **[9:23](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=563)** And might as well fix that as well.
>
> **[9:26](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=566)** April Fools' Day already went by.
>
> **[9:29](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=569)** You know what, let's run it again to get the cleaner output.
>
> **[9:31](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=571)** There we go.
>
> **[9:32](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=572)** This April Fools' Day already went by 223 days ago.
>
> **[9:36](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=576)** It's just 142 days until the next April Fools' Day, all right?
>
> **[9:39](https://www.linkedin.com/learning/learning-python-25309312/using-timedelta-objects?u=76281980&t=579)** So by using timedeltas, you can perform some pretty complex date calculations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (6), python (1)
> **Tools:** colab (5)
> **Code Identifiers:** time_to_afd (2)
> **Cross-References:** previous video (2)
> **Documentation:** the documentation (1), the docs (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Working with calendars](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=0)** - [Instructor] Let's wrap up this chapter by taking a look at a few examples of how to work with calendars in [[Python (Programming Language)|Python]].
>
> **[0:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=6)** The Python Standard Library provides a couple of useful utilities for working with calendars in both text and [[HTML]] formats.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=14)** So let's open up the calendars start file, and in co-lab, create an empty code cell.
>
> **[0:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=22)** And you can see that I've already imported the calendar module, so let's copy and paste that into co-lab, there we go.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=30)** So now that I've imported the calendar module, I've got access to all of the classes.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=35)** Let's start off by creating a plain text calendar.
>
> **[0:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=40)** So to do that I'm going to use the text calendar class.
>
> **[0:43](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=43)** So I'll make a variable named C and then using the calendar module, I'll create a text calendar and I want the first weekday to be calendar dot Sunday.
>
> **[1:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=60)** And then I'll make a string, actually, let's call it the stir equals and then I'm going to write C dot format month.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=70)** And then I'm going to just choose a specific month that I want to format.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=74)** So I'll choose 2026, January, and then I'll just pass in zeros for the next two arguments.
>
> **[1:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=82)** Don't worry about those.
>
> **[1:24](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=84)** And then I'm going to print out the str.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=86)** Alright, the format month method lets me format a particular month into a text string, and then I'm just printing the results.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=96)** So let's go ahead and run this.
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=99)** And what I do, you can see in the output that I get this nicely formatted January 2026 calendar.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=107)** Right, Sunday is the first day and looks like the month starts on a Thursday.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=114)** Lets change this parameter here to calendar dot Monday instead and let's run.
>
> **[2:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=121)** And now you can see that the calendar starts on Monday instead and ends up with Saturday and Sunday.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=127)** Alright, now let's try the same thing, but now let's use HTML.
>
> **[2:12](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=132)** So I'll create an HTML calendar and I'll use the calendar module.
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=137)** I'll create an HTML calendar, and once again, I'll use Sunday as the first day.
>
> **[2:25](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=145)** I'll set the str.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=147)** I'll call HC dot format month.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=150)** Once again, I'll choose January of 2026.
>
> **[2:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=155)** And let's print out the str.
>
> **[2:38](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=158)** And let's comment out the previous example.
>
> **[2:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=162)** All right, let's run.
>
> **[2:44](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=164)** So now you can see I'm doing the same thing only in this case it's, it's HTML and it's text here, so you can't really read it.
>
> **[2:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=172)** But if you were to take this HTML and paste it into an HTML editing program, you would see that you'd have this nicely formatted table.
>
> **[3:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=180)** So if you have a need to generate HTML calendars, if you look into this, you can kind of see the data, right?
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=187)** Let's see if I scroll up, right?
>
> **[3:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=191)** You can see that the month is January 2026 and so on.
>
> **[3:15](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=195)** But anyway, this is how you can create some HTML if you need a quick way to generate a calendar.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=201)** You can also use the calendar class to perform some common operations on dates.
>
> **[3:27](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=207)** So for example, I might have a need to iterate over the days of any given month.
>
> **[3:34](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=214)** So let's try that instead.
>
> **[3:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=216)** It's a little bit more useful.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=219)** So let's go ahead and actually, no, I'm going to uncomment this line to keep the calendar.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=228)** Alright, so I'm going to write four.
>
> **[3:50](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=230)** I'll use a four loop for this.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=232)** For I in, and then for the calendar, I'm going to get the inner month days and I'm going to choose a month, so I'll just choose 2026 and I'll choose August of 2026, colon.
>
> **[4:08](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=248)** And then I'm just going to print out.
>
> **[4:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=250)** Alright, so this function will return numbers that represent each day in the month.
>
> **[4:17](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=257)** So let's run this and you can see that the way that this works, okay, here in the output, so in August, right, there were 31 days, so there's day number one and day number 31 all the way down here.
>
> **[4:32](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=272)** Now the zeros at the start here indicate that there are days in the week that are not part of this month.
>
> **[4:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=280)** So what that means, for example, is that here we've got, you know, Sunday, Monday, Tuesday, Wednesday, Thursday, right?
>
> **[4:48](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=288)** They're the previous month in July.
>
> **[4:51](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=291)** And so this number one shows up here, that's going to be Sunday, Monday, Tuesday, Wednesday, Thursday, that's going to be a Friday.
>
> **[4:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=298)** And then when we get to the end of the month, we can see that there are zeros.
>
> **[5:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=301)** That means the [[Representational State Transfer (REST)|rest]] of that week belongs to September.
>
> **[5:05](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=305)** The calendar class also provides some useful utilities for the current locale.
>
> **[5:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=311)** So I can loop over the names in the month names and day name properties on the calendar class.
>
> **[5:17](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=317)** So this way I don't have to write custom code in my application that knows what the names of the months are around the world.
>
> **[5:23](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=323)** The system's locale will just give them to me based upon where the user's computer happens to be located.
>
> **[5:29](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=329)** So if I write for name in, calendar dot month, name,
>
> **[5:38](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=338)** and I can print the name and I can do the same thing for the days.
>
> **[5:43](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=343)** I can write for day in, calendar dot day name, and we'll print out each day, alright?
>
> **[5:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=352)** And let's comment out this previous example right here.
>
> **[6:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=360)** Okay? And let's run.
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=364)** Now, obviously here in the US I'm getting the months, you know, January, February, March and so on.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=371)** If I was in another part of the world, or if my local system here was set to be someplace in Europe, for example, I would get the locale based names and the same thing for the days, right?
>
> **[6:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=382)** You see I'm getting Monday, Tuesday, Wednesday, right?
>
> **[6:25](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=385)** So I can get the names of both the months and the days as they would appear in the current locale for where the computer is or for where the system happens to be set to.
>
> **[6:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=395)** Okay, let's try one more example.
>
> **[6:38](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=398)** Let's comment that out.
>
> **[6:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=400)** So suppose I had a team of people and the team meetings were the first Friday of every month and I wanted to write a script that would print out what those dates would be for the upcoming year.
>
> **[6:55](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=415)** That way I could give that list of days to my team members and they would know what the meeting dates are for the year in advance.
>
> **[7:02](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=422)** What I would need to do is calculate when the first Friday happens in each month and then calculate the date that represents that day.
>
> **[7:12](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=432)** So what I'm going to do is print out, team meetings will be on, and then I'm going to create a loop for month in range and I'm going to start one going up to 13.
>
> **[7:27](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=447)** And obviously there is no 13th month, but remember in the range function, the last number is not inclusive.
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=452)** So it's going to go from one to 12.
>
> **[7:34](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=454)** So now what I'm going to do is get an array of weeks that represent each one of the months.
>
> **[7:41](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=461)** So I'll make a variable called Cal, and then on the calendar module, I'm going to get the month calendar, and I'll do this for 2026 and the particular month that I'm looking at.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=478)** So each time through this loop, right, M is going to be a month number, one up through 12, and then I'm using the calendar classes month calendar function to get an array of weeks that represent the days in the given month.
>
> **[8:13](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=493)** So each one of those items in the list is going to be itself, a list of days, and I'm going to calculate where the first Friday falls within the month.
>
> **[8:24](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=504)** So I'm going to define two variables, week one, so that's going to be the first of those lists, and then week two is going to be the second of those weeks.
>
> **[8:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=519)** So the first Friday of the month has to be somewhere within the first two weeks.
>
> **[8:43](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=523)** So if week one starts on a Saturday, then the first Friday is going to be within the second week.
>
> **[8:49](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=529)** So I've got these two variables here, right, week one a week two.
>
> **[8:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=532)** So then I just need to see which of the two weeks has the first Friday.
>
> **[8:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=538)** So to do that, I'm going to use the calendar's Friday constant to index into each of these arrays.
>
> **[9:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=544)** So if the value at week one of the Friday index,
>
> **[9:13](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=553)** is not equal to zero, then our meet day, I'm going to create a variable called meet day, is going to be week one of calendar Friday.
>
> **[9:25](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=565)** Now if that value is zero, that means that the first Friday falls in the second week.
>
> **[9:32](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=572)** So that in that case, I'll simply set meet day equal to week two of calendar Friday.
>
> **[9:41](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=581)** So remember we saw this earlier, right, when we printed out the values of the month calendar, right?
>
> **[9:45](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=585)** If the day number of a particular day in the week is zero, then that means that that day is part of the previous month.
>
> **[9:54](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=594)** So now I have my meet day variable set to the date of the first Friday and I just need to print out the month name and the day.
>
> **[10:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=604)** So let's do that.
>
> **[10:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=604)** I'm going to print out and I'm going to use an interpolated string for this.
>
> **[10:09](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=609)** I'll print out the calendar and I'm going to use the month name property for the current month index.
>
> **[10:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=621)** And then inside curly braces, I'm going to print out the meet day and that's going to be the actual day number, right?
>
> **[10:29](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=629)** It's going to be, you know, 10th, seventh, whatever.
>
> **[10:33](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=633)** Alright, so let's go ahead and run this.
>
> **[10:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=636)** Alright, so you can see we've looped through all the months and now we have a list of the first Fridays of each month.
>
> **[10:44](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=644)** So for January in 2026, it's going to be the second, and then February it's the sixth, and then down here in August it's the seventh and September it's the fourth.
>
> **[10:53](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=653)** So now I can give this list of dates to my team and they'll know what the actual dates are for the first Friday in each one of the months that we're going to be having our meeting.
>
> **[11:02](https://www.linkedin.com/learning/learning-python-25309312/working-with-calendars?u=76281980&t=662)** Such is the power of Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[Python (Programming Language)|Python]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** html (9)
> **CLI Commands:** python (3), make (3)
> **Analogies:** for example (3)
> **UI Navigation:** scroll up (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Dates and times](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=0)** - [Instructor] All right, how'd you do on this one?
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=7)** This one was a little bit tricky.
>
> **[0:08](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=8)** I made it a little challenging and I gave the hint that there was a particular class in the calendar module that you wanted to maybe look at.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=19)** The key to solving this challenge was to use the month calendar class, and that's what I listed in the hint section of the challenge instructions.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=28)** So let's go over my code.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=30)** So remember that our function is given a year and a month, along with a weekday value from zero to six, which represents a day of the week with zero being Monday and six being Sunday.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=45)** And our task was to return the number of times that particular weekday appears within the given month.
>
> **[0:54](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=54)** So my code imports the calendar module because we're going to use that, and then I use the month calendar method to get the month for the given year.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=66)** And what this function does is it returns an array of lists for the specified month, and each list in the array lists a week that's in that month.
>
> **[1:19](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=79)** So each one of these lists contains seven integers, and each index into that particular week corresponds to the integer that represents the day that we are interested in.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=91)** So for this particular month, right, there is no Monday, there is no Tuesday, but it looks like the first day of the month starts on a Wednesday.
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=99)** And then similarly down here, there is a Monday, Tuesday, Wednesday, but in the last week of this month, there is no Thursday, Friday, or Saturday.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=107)** So basically, if the value in that index is zero, then that week doesn't contain that day, and this usually happens at the beginning or the end of each month.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=117)** Alright, so that's what my code is doing.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=120)** My code looks at each week in this week list, and if the the index for that day in that week is not equal to zero, then I increment the day count because that week contains that day.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=133)** And then when this loop completes, day count will contain the number of days of that weekday in that month.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=140)** So let's take a look at our test code.
>
> **[2:23](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=143)** So here in our test code, we are looking at 2025.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=147)** We're looking at December of 2025, and the test day that we are interested in is zero.
>
> **[2:32](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=152)** So that's a Monday.
>
> **[2:33](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=153)** So if I click on test my code, you can see that sure enough, there are five Mondays in December of 2025.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=160)** Let's take a look at July of 2027.
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=165)** There's only four Mondays in July of 2027.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=169)** Let's try a different test day.
>
> **[2:51](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=171)** Let's try Saturday, which is five, right?
>
> **[2:53](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=173)** So let's go ahead and test.
>
> **[2:55](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=175)** And there's five Saturdays in July of 7 27.
>
> **[2:59](https://www.linkedin.com/learning/learning-python-25309312/solution-dates-and-times?u=76281980&t=179)** So this just goes to show that you can sometimes solve what seems to be a thorny problem with a particular class in one of the [[Python (Programming Language)|Python]] standard library modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Working with Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing files](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=0)** - [Narrator] [[Python (Programming Language)|Python]] provides built-in methods for working with files and directories.
>
> **[0:05](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=5)** You can open files, write data into them, read the data back in, get information about the files and so on.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=11)** And that's what we're going to take a look at in this chapter.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=14)** So let's begin by opening up the writefile_start file here in the editor.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=20)** If you're using Colab, just go ahead and make a new code cell.
>
> **[0:24](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=24)** Now I don't need to import any modules to work with files because the functions for working with files are just built into the base Python language.
>
> **[0:33](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=33)** So for our first example, let's just write some information to a text file.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=37)** So the way that I do this is I'm going to create a new variable named sample_file, and then I'm going to call the open function.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=44)** The open function takes a couple of parameters.
>
> **[0:47](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=47)** The first is the name of the file to operate on, so I'll call that textfile.txt.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=55)** And then there's the kind of access to the file that you want.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=59)** So I'm going to open the file for write access.
>
> **[1:02](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=62)** And so I'm going to pass in a w and then a plus sign, which means that Python should create the file if it doesn't already exist.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=70)** So when the open function returns, and this is one of the built-in functions that we learned about earlier in the course, the result is a reference to a file object that I'm going to store in this variable and that I use that variable to operate on the file going forward.
>
> **[1:24](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=84)** So now that the file is open, let's write some data to it.
>
> **[1:29](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=89)** So I'm just going to write some sample text data.
>
> **[1:32](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=92)** So I'll call on the sample_file object.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=95)** I'm going to call the write function and I'll just put in some text.
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=99)** This is some sample text in our sample file.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=103)** So you can do as many writes as you want.
>
> **[1:46](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=106)** The write function just writes data to the file.
>
> **[1:48](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=108)** I'm just using a single sentence of text, but you can write up a bunch more if you want to.
>
> **[1:53](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=113)** So when you're finished writing your data, the file needs to be closed.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=117)** And we do that by using the close function.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=119)** So I'll call close on the file and that's pretty much all there is to it.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=124)** So to recap, open the file, write some data, and then close it.
>
> **[2:07](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=127)** So let's go ahead and run this and let's see what happens.
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=131)** And we'll give it a second to create the file.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=134)** And sure enough, you can see down here in the list, the text file shows up.
>
> **[2:18](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=138)** Here's our text data.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=140)** Let's go ahead and try the same thing over in Colab.
>
> **[2:24](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=144)** So I'm going to copy these lines of code right here, going to paste them in my cell, run, and after a few seconds or so, we should see the file show up.
>
> **[2:37](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=157)** Let's give it a minute.
>
> **[2:38](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=158)** There it is.
>
> **[2:38](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=158)** So we'll double-click on this and sure enough, there's our sample text in our sample file.
>
> **[2:44](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=164)** All right, so far so good.
>
> **[2:46](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=166)** Next, let's try adding additional content to the existing file that we just created.
>
> **[2:55](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=175)** So what I'm going to do is I want to open the file to add text to the end.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=181)** If I just do the same thing with open and write, that's going to overwrite everything that's already in the file.
>
> **[3:08](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=188)** And I don't want to do that.
>
> **[3:09](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=189)** I want to add content to the end.
>
> **[3:11](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=191)** So what I'm going to do is copy this original line with the open and I'm going to call this with a+.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=200)** And then let's write some more data to the file.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=204)** So I'll copy that line and I'll just change some of the text and then we'll close the file when we're done.
>
> **[3:35](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=215)** And since we've already created the file, I don't need this code anymore, so I'll just comment that out.
>
> **[3:42](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=222)** All right, so in this case, I want to append text to the end.
>
> **[3:46](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=226)** So I use the open function, but this time the write mode is different.
>
> **[3:50](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=230)** Instead of write, it's append.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=232)** I'm going to write additional data and then we're going to close the file.
>
> **[3:56](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=236)** So let's go ahead and run that.
>
> **[4:00](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=240)** All right, and if we open up textfile.txt, we can see that additional data has now been written into the file.
>
> **[4:09](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=249)** Okay, so that's good.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=251)** Let's go and try the same thing over in Colab.
>
> **[4:17](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=257)** So I'm just going to copy these lines of code here.
>
> **[4:20](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=260)** And in Colab I'm going to make a new code cell, paste in the new code, and I'm going to run this cell.
>
> **[4:27](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=267)** I don't need to run this one because it's already been created.
>
> **[4:30](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=270)** So let's run this code.
>
> **[4:32](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=272)** All right, and we can see that it's been executed.
>
> **[4:35](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=275)** Let's go ahead and double-click on our textfile and we can see also if we scroll to the right here that the additional content has now been written into the file.
>
> **[4:46](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=286)** All right, so that's how easy it is to write files.
>
> **[4:49](https://www.linkedin.com/learning/learning-python-25309312/writing-files?u=76281980&t=289)** In the next example, we'll see how to read information from an existing file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (2)
> **UI Navigation:** open the (3), double-click (2)
> **Tools:** colab (4)
> **Code Identifiers:** sample_file (2), writefile_start (1)
> **File Paths:** textfile.txt (2)
> **Cross-References:** earlier in (1), in the next (1)
> **Definitions:** means that (1), is a  (1)

#### [Reading files](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=0)** - [Instructor] In the previous example, we created a new file with content and now we're going to see how to read the contents of an existing file.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=7)** So let's begin by opening up the readfile_start file here in the editor.
>
> **[0:13](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=13)** And if you're using CoLab, you can see that I've left the previous code cell in place.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=17)** Just make a new one down here.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=19)** So this example is going to use the file that was created during the previous video.
>
> **[0:23](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=23)** So if you haven't completed that example, I suggest you go do it now.
>
> **[0:27](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=27)** There are a couple of ways to read the contents of a file.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=30)** So first I need to open the file for read access.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=34)** So similar to the previous example, I'll write my variable name, sample file.
>
> **[0:39](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=39)** And again, I'm going to call the open function on textfile.txt.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=44)** And in this case, I want read mode.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=46)** I'm not interested in writing the data, I want to just read the content.
>
> **[0:51](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=51)** Then I'm going to add some code to make sure that the file was open correctly.
>
> **[0:56](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=56)** So I'm going to check using an if statement that if the sample files mode is, in fact, read, then we know that the file was opened correctly.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=66)** So for the first example, I'll just use the read function to read the entire file contents all at once and then print them out.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=74)** So because I'm in the if block, I have to indent.
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=77)** So I'll make a variable called contents and I will call sample_file.read.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=83)** That reads everything, and then I'll print out the contents.
>
> **[1:27](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=87)** Alright, let's go ahead and try that.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=90)** Sure enough, you can see that that works.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=91)** This is the text that we created in the previous example.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=95)** Let's go ahead and copy this and let's go over to CoLab.
>
> **[1:40](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=100)** Let's paste it into a new cell and let's run this.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=104)** And sure enough, we can see that that works.
>
> **[1:46](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=106)** We are reading the contents of the file we created in the previous example.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=111)** Alright, you can also read the contents of a file in a more granular way.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=117)** I can read the file line by line.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=119)** So if you have a really large file, sometimes it doesn't make sense to read the whole thing in, especially if all you want is to process a small piece of the content at each time.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=129)** And for this, we can use the read lines function.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=133)** So I'm going to comment out the previous call, all right?
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=137)** And we'll comment out that as well.
>
> **[2:19](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=139)** So what I'm going to do is add some new code.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=141)** I'll make a variable called file lines.
>
> **[2:25](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=145)** And on the sample file, I'm going to call read lines.
>
> **[2:30](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=150)** That will get all the different lines.
>
> **[2:32](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=152)** So I'm going to write for line in file_lines.
>
> **[2:39](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=159)** So I'm creating a for loop that's going to iterate over all of the lines in the file.
>
> **[2:44](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=164)** I'm going to print each line.
>
> **[2:48](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=168)** So in this case I'm going to read the content as an array or a list of individual lines and then print them.
>
> **[2:53](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=173)** So the net effect should be the same that you just saw, only I'm doing it in a slightly different way.
>
> **[2:58](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=178)** So let's run this and sure enough, there's the output.
>
> **[3:02](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=182)** Let's copy this code.
>
> **[3:06](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=186)** And here in our code cell, let's paste that in and comment out the previous calls and let's run.
>
> **[3:16](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=196)** And you can see that the effect is the same.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/reading-files?u=76281980&t=199)** So just like everything else, well just like almost everything else, [[Python (Programming Language)|Python]] makes working with file content really easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (5), python (1)
> **Code Identifiers:** readfile_start (1), sample_file (1), file_lines (1)
> **Analogies:** just like (2), similar to (1)
> **Tools:** colab (2)
> **File Paths:** textfile.txt (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** open the (1)

#### [Working with the operating system](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=0)** - [Instructor] Sometimes you need to perform operations with files that go beyond just reading and writing data.
>
> **[0:07](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=7)** So for example, you might need to determine some information about a file, like whether it exists or how big it is, what the path of the file is, whether a given path represents a file or a directory and so on.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=21)** [[Python (Programming Language)|Python]] provides functions to help you do all of this and more.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=25)** So let's open up the ospathutils_start file.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=30)** And of course in Colab, you can just create a new code cell.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=34)** I've left the previous code cells in place from the previous videos.
>
> **[0:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=39)** So go ahead and create a new code cell down here.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=44)** Let's start with something really simple.
>
> **[0:46](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=46)** Let's print the name of the operating system that we are running on.
>
> **[0:50](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=50)** So I'm going to import the OS module, which is one of the standard library modules that Python comes with.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=57)** And then I'm going to print os.name.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=63)** Let's go ahead and run that.
>
> **[1:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=66)** And you can see that I'm running on Posix because this is a [[Linux]]-based code base.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=70)** Let's go ahead and try the same thing in our Colab.
>
> **[1:13](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=73)** So I'm going to import OS and print os.name.
>
> **[1:19](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=79)** Okay, let's run that and you can see I get the same result here.
>
> **[1:23](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=83)** Now this may be different for you.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=85)** If you're running the example code on your Mac or [[Windows]] or whatever, then the results here may look a little bit different, but you'll see the name of your operating system when you run this.
>
> **[1:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=96)** Let's take a look at some of the path related features.
>
> **[1:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=100)** So I'm going to also open and import.
>
> **[1:45](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=105)** So from the operating system module, I'm going to import the path class 'cause I need some path features.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=114)** So we can check to see if an item exists.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=117)** So let's print out item exists and then I'm going to call path.exists on the text file that we created in the previous examples.
>
> **[2:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=131)** So if you don't have that file, you should probably go back and do the previous exercises in the chapter first.
>
> **[2:17](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=137)** We can also check to see whether it is a file.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=141)** So let's print out, "Item is a file," and we'll call path.isfile on textfile.txt.
>
> **[2:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=155)** And let's also just for fun, let's print out, "Item is a directory," 'cause we can check that as well and we'll call path.isdir on textfile.txt.
>
> **[2:53](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=173)** So in each of these cases I'm operating on the textfile.txt item.
>
> **[2:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=178)** You can see it here in my code space.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=181)** If you don't have this file, it's probably because you didn't do the previous examples.
>
> **[3:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=184)** So go run those, if you don't have this file right here.
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=187)** Same thing for the Colab, it's already there.
>
> **[3:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=190)** So let's run our code and now we can see that yes, the item does exist, right?
>
> **[3:16](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=196)** So textfile.txt is in fact there, it is in fact a file.
>
> **[3:20](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=200)** And because it's a file, it is not a directory.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=204)** All right, so far so good, let's keep on going.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=206)** Let's get the file's full path information.
>
> **[3:30](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=210)** So I'll print that the item's path is, and then on the path class I'm going to use the real path function to get the realpath to my text file.
>
> **[3:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=222)** And we can use the split function to separate the file name from the path.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=228)** So I'm going to print out item's path and name separately are going to be, I'm going to call path.split and I'm going to call path.realpath on the text file.
>
> **[4:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=246)** Okay, let's run our updated code.
>
> **[4:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=251)** All right and we can see that the path here in my code space is right here to the text file.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=258)** And then here the split function gives us the path by itself and the file name by itself, so that could be useful and let's go ahead and run the same code over in Colab.
>
> **[4:29](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=269)** So let's see, I have to copy and paste the previous two examples.
>
> **[4:33](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=273)** So let's copy that and let's paste that in and let's run.
>
> **[4:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=282)** And you can see that we're getting pretty much the same information, does exist.
>
> **[4:46](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=286)** It is a file, it's not a directory.
>
> **[4:48](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=288)** And here is the path in the Colab context.
>
> **[4:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=292)** So that's working just fine.
>
> **[4:54](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=294)** Okay, so let's get some information about the file's last modification time.
>
> **[4:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=298)** So what I'm going to do is use the path module to get the modification time of the file.
>
> **[5:03](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=303)** And then I'm going to use the time class's ctime function to convert that into a readable time.
>
> **[5:09](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=309)** And we learned about how to use dates and times in a previous chapter.
>
> **[5:12](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=312)** So this will probably look familiar to you.
>
> **[5:15](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=315)** I'm going to import time and from datetime, I'm going to import datetime class.
>
> **[5:24](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=324)** All right, so let's get the modification time.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=327)** I'll make a variable named to T and I'll call time.ctime and I'm going to use the path class to get the mtime.
>
> **[5:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=339)** And you can see that there's other functions, right?
>
> **[5:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=342)** There's also get the creation time, right?
>
> **[5:46](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=346)** So there's the get the access time, last time it was accessed.
>
> **[5:49](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=349)** So I'm just going to get the modification time on my text file and then we're going to print that out.
>
> **[5:56](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=356)** And I'm also going to use the get modification time function.
>
> **[6:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=360)** And I'm going to construct a datetime object using the from timestamp function that's built into the datetime class.
>
> **[6:08](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=368)** So what I'm going to do here is print.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=371)** And on the datetime class I'm going to call from timestamp because the operating system has what's called a timestamp that's on each file and it's not really a readable date, it's basically a big number and that number represents the number of milliseconds from the start of some time period.
>
> **[6:29](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=389)** So we have to convert that into a readable date.
>
> **[6:33](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=393)** So what I'm going to do is get the modification time from the text file and then I'm going to use this fromtimestamp function to create a readable date and time.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=405)** So let's go ahead and run our updated code.
>
> **[6:50](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=410)** All right, and we can see sure enough that this is the modification time coming back and being passed to time.ctime.
>
> **[6:59](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=419)** And then this output right here is the from timestamp on the datetime class.
>
> **[7:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=426)** And of course once again we can run this in Colab to make sure it works there and it does.
>
> **[7:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=434)** One more example.
>
> **[7:15](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=435)** This time we're going to be using some date math.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=438)** And if you watched the chapter on manipulating dates, this will be a little bit of a review.
>
> **[7:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=442)** I'm going to calculate how long ago the item was modified.
>
> **[7:28](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=448)** So I'm going to write td equals, I'm going to call datetime.now, which is the current time.
>
> **[7:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=456)** And I'm going to subtract off datetime.fromtimestamp and I'm going to call path.getntime on my text file.
>
> **[7:51](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=471)** So this will give me a time delta.
>
> **[7:54](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=474)** Remember time delta is from the previous chapter.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=478)** So I'm going to subtract off using date math, the modification time from the current time and that gives me a time delta object that represents the difference between now and when the file was last modified.
>
> **[8:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=490)** And of course I have to print out that result.
>
> **[8:13](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=493)** So I'm going to print and I'll use an interpolated string for this.
>
> **[8:19](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=499)** It has been and then in braces I'll put in the TD since the file was modified.
>
> **[8:32](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=512)** Then I'm going to use the total seconds function on that time delta object to get the time difference as total seconds.
>
> **[8:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=520)** So I'll also print out, and again I'll use interpreted F string and I'll write or td.total seconds.
>
> **[8:51](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=531)** And that's a function so I have to call it seconds.
>
> **[8:55](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=535)** So let's go ahead and run our updated code.
>
> **[9:02](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=542)** All right, so we can see that it's been about 20 minutes since the file was last modified or 1200 and almost 34 seconds.
>
> **[9:12](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=552)** So let's go ahead and copy this and run the same thing in Colab and let's run.
>
> **[9:23](https://www.linkedin.com/learning/learning-python-25309312/working-with-the-operating-system?u=76281980&t=563)** And we get a very similar output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Linux]] (1), [[Windows]] (1)
> **Tools:** colab (7)
> **CLI Commands:** python (2), make (2), go run (1)
> **Definitions:** is a  (5)
> **File Paths:** textfile.txt (4)
> **Cross-References:** previous chapter (2)
> **Code Identifiers:** ospathutils_start (1)
> **Analogies:** for example (1)

#### [Using the filesystem](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=0)** - [Presenter] So far in this chapter, we've seen how to create and read files and how to get information about files, but [[Python (Programming Language)|Python]] also provides a set of utilities for manipulating files using the operating systems Shell Utilities.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=14)** And that's what we're going to look at in this example.
>
> **[0:17](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=17)** So let's start up by opening the Shell Start file here in our editor.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=21)** And if you're using CoLab, go ahead and create a new code cell and you can see I've left the previous code cells in place from the previous examples.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=30)** So this example file uses this text file.txt file that's been created in the previous videos.
>
> **[0:40](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=40)** So if you haven't completed those, I suggest you do them now or you could also just create this text file and put some random text in it.
>
> **[0:48](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=48)** So to use these Shell utilities, I first need to import the sh util module into my app.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=55)** So let's do that along with some other modules we know we're going to be using.
>
> **[0:58](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=58)** So I'm going to import the operating system module and from the operating system module, I'm also going to import the path class and I'm also going to import the shutil module.
>
> **[1:11](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=71)** Alright, so let's start off by doing something pretty simple.
>
> **[1:14](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=74)** Let's make a copy of an existing file.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=78)** And like I said, this example depends on this file being present, this text file being present.
>
> **[1:24](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=84)** So you can see I've got it here on my list.
>
> **[1:25](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=85)** If it's not there for you, either create it or go do one of the previous examples.
>
> **[1:30](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=90)** It doesn't matter what the content is.
>
> **[1:32](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=92)** So what I'm going to do is use the path modules exists function to make sure that the file is there.
>
> **[1:38](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=98)** So I'm going to write if Path.exists on the text file.
>
> **[1:46](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=106)** If we know that the file exists, what I'm going to then do is get the path information for the file using the Path class.
>
> **[1:53](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=113)** I'll create a variable named source and I'll set that to path.realpath for the text file .txt.
>
> **[2:03](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=123)** Alright, so to make a copy, I'm going to use the original path to the file and just put a .bak extension on it to indicate that it's a backup.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=133)** So I'll make a variable called Destination and that's going to be Source plus .bak.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=141)** So the source, this is a string and I'm putting this .bak string on the end of it.
>
> **[2:27](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=147)** And then I'll use the copy function of the shutil module to actually copy the file.
>
> **[2:34](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=154)** So I'm going to call shutil.copy and I'll copy the source to the destination.
>
> **[2:42](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=162)** So let's go ahead and run that.
>
> **[2:47](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=167)** And when we run this, sure enough we can see that textfile.txt.bak now appears because we've made a copy of the file, I want to point out here that the copy function, it copies over the files content, but it does not copy over the original files [[Metadata]] such as the creation and modification times and other properties.
>
> **[3:11](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=191)** If you want to do that, you can use the copy two function which will copy that data over and I'll let you try that on your own.
>
> **[3:19](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=199)** Alright, let's try something else.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=201)** Let's try renaming the original file using the rename function.
>
> **[3:25](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=205)** So on the operating system module I'll call rename and I'm going to rename textfile.txt over to newfile.txt.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=219)** And as you might imagine this just renames the file specified in the first argument to this name in the second argument.
>
> **[3:47](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=227)** So let's go ahead and run our updated code.
>
> **[3:53](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=233)** Alright, so the copy is made and then the file is renamed to newfile.txt.
>
> **[4:00](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=240)** Alright, let's go ahead and make sure that this works over in CoLab as well.
>
> **[4:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=244)** So let's copy what we have here all the way down to here.
>
> **[4:10](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=250)** We'll copy, we'll put this in a code cell and we will rename it and when we run, okay, we can see that it executed and if we give it a few seconds, sure enough, yep, here's the copy with the .bak and then the file got renamed.
>
> **[4:27](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=267)** Alright, so everything seems to be working.
>
> **[4:30](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=270)** Alright, let's try something else.
>
> **[4:33](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=273)** Let's try creating a zip archive.
>
> **[4:36](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=276)** The Shell Utilities module is more than just about working with individual files.
>
> **[4:41](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=281)** Let's try creating a zip archive and putting some content into it.
>
> **[4:44](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=284)** What we're going to do is use the Shell utilities make archive function in order to create a zip archive that contains the contents of a given directory.
>
> **[4:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=295)** So what I'm going to do first is use the path split function to get the path to the directory I want to create the archive out of.
>
> **[5:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=304)** And remember we saw this split function in a previous example.
>
> **[5:09](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=309)** So that gives us both the path and the file name.
>
> **[5:13](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=313)** So I'm going to call it path.split on my source, which is textfile.txt.
>
> **[5:23](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=323)** And we actually have to change this code now because textfile.txt doesn't exist anymore.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=327)** We renamed it.
>
> **[5:28](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=328)** So let's, we have to check to see if newfile.txt exists and we'll do the same thing here.
>
> **[5:37](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=337)** Alright, and since we've already made the copies, let's go ahead and comment out this code.
>
> **[5:45](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=345)** Alright, so now that I've got the path to the directory I want to make the archive out of, I need to call the make archive function, which will take the name of the zip file that I want to create.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=358)** So let's call on Shutil, I'm going to call make archive, and I want to create a file called archive.
>
> **[6:06](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=366)** It is going to be in the zip format and the contents are going to come from the root dir.
>
> **[6:13](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=373)** Let's go ahead and give this a try.
>
> **[6:17](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=377)** So let's run this, right, and sure enough, okay, you can see right there there's the archive zip being created.
>
> **[6:25](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=385)** Let's go ahead and copy this code over and see if it works in CoLab.
>
> **[6:30](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=390)** So I'll copy these two lines and we'll put it down here and we have to remember to rename this new file.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=405)** And of course we don't need the previous examples anymore.
>
> **[6:52](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=412)** All right, so let's run.
>
> **[6:55](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=415)** All right, looks like we get the little check mark.
>
> **[6:57](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=417)** It looks like things ran.
>
> **[6:59](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=419)** So let's give CoLab a second to update the ui.
>
> **[7:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=424)** And sure enough, there is our archive zip being created.
>
> **[7:07](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=427)** Okay, that looks pretty good.
>
> **[7:10](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=430)** So by default, all the contents of the target directory get added to the archive, but I have more control over that if I want to.
>
> **[7:18](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=438)** I can actually add specific items to a zip file.
>
> **[7:23](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=443)** So let's modify our code to do that using a different module.
>
> **[7:28](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=448)** What I'm going to do, let's close that terminal.
>
> **[7:31](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=451)** I'm going to import from the zip file module, I'm going to import the zip file class.
>
> **[7:39](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=459)** Notice the casing difference here, it's capital Z and capital F.
>
> **[7:44](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=464)** What I'm going to do is add some custom code for creating a zip file.
>
> **[7:49](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=469)** So what I'm going to do is I'm going to write with ZipFile, and that's going to take the name of the archive on I want to create.
>
> **[7:57](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=477)** So that's going to be testzip.zip.
>
> **[8:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=484)** And I'm going to open that in writing mode.
>
> **[8:07](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=487)** So I'm going to write with the zip file as newzip, okay, this creates a context manager, it's called.
>
> **[8:16](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=496)** So now I don't have to keep referring to the various different file utilities.
>
> **[8:21](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=501)** I can just, when I, when this code completes, it'll close the file for me automatically.
>
> **[8:25](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=505)** So what I'm going to do is write newzip.write.
>
> **[8:29](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=509)** And I'm going to add newfile.txt and I'm also going to write textfile.txt.bak.
>
> **[8:45](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=525)** So this construct right here, the width keyword lets me create a local scope that simplifies working with objects.
>
> **[8:54](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=534)** It's called a context manager and it takes care of some things that I would otherwise have to handle explicitly.
>
> **[9:00](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=540)** So in this case, I don't need to manually close the zip file when I'm done with it.
>
> **[9:04](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=544)** When these two lines of code finish executing, the context manager that's created by this with statement will automatically close the file for me.
>
> **[9:13](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=553)** So the width keyword will create this zip file object and return it.
>
> **[9:17](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=557)** And I'm naming that object, newzip.
>
> **[9:19](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=559)** And this code creates a new zip file object named testzip, and I'm using the right mode to indicate that I want to write data into it.
>
> **[9:29](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=569)** Alright, so let's go ahead and comment out the previous example.
>
> **[9:33](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=573)** Alright, so now we're checking to see if new file exists.
>
> **[9:37](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=577)** That's all good.
>
> **[9:39](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=579)** Let's run.
>
> **[9:43](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=583)** Alright, and sure enough, there is testzip.zip being created.
>
> **[9:48](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=588)** Let's go ahead and comment.
>
> **[9:50](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=590)** Let's copy, I mean this code.
>
> **[9:53](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=593)** Let's go to CoLab.
>
> **[9:54](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=594)** Let's try the same thing and let's comment out the previous example and let's import the module we need.
>
> **[10:03](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=603)** So from zip file, import, Zipfile.
>
> **[10:09](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=609)** All right, let's run this and we'll give CoLab a couple of seconds because it needs to update the ui.
>
> **[10:18](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=618)** Okay, and looks like it worked.
>
> **[10:20](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=620)** Yep, there it is, there's test Zip.zip.
>
> **[10:24](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=624)** So you can see that using the Shell Utilities module of Python gives you really great control over working with file objects.
>
> **[10:31](https://www.linkedin.com/learning/learning-python-25309312/using-the-filesystem?u=76281980&t=631)** I would suggest maybe taking a few minutes here, look at some of the functions that we didn't cover in the Shell Utilities, and maybe try some of your own experiments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Metadata]] (1)
> **CLI Commands:** make (9), python (2)
> **File Paths:** textfile.txt (5), newfile.txt (4), file.txt (1)
> **Exercise Files:** zip file (10)
> **Tools:** colab (6), terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Solution: Files](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=4)** - Okay, for this challenge, we needed to add up all of the byte sizes of the text files in the depths directory.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=11)** We can assume that there's a directory called depths at the same level of as our code.
>
> **[0:15](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=15)** So that's where these files are stored.
>
> **[0:18](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=18)** And we had to ignore any files that were not text files.
>
> **[0:22](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=22)** So in my code, I have a variable that keeps track of the total byte count so far, and you can see that I've imported the OS module 'cause I'm going to be using that.
>
> **[0:34](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=34)** Then I have a variable that contains the name of the depths directory.
>
> **[0:38](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=38)** Now I need to get a list of all of the contents of the directory, the steps directory right here.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=45)** And what I'm going to do is use the listdir function, which is contained within the OS module, which is part of the standard library.
>
> **[0:53](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=53)** And that will give me a list of file names.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=55)** And those file names are just names.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=57)** They don't have the directory path in them.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=59)** So next I have a loop which iterates over each one of the file names in the list that I get back from the listdir function.
>
> **[1:09](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=69)** So I got to do two things.
>
> **[1:11](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=71)** I need to make sure that each one is in fact a file.
>
> **[1:15](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=75)** And I also need to make sure that it ends with the ,txt suffix because we only want to count text files.
>
> **[1:21](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=81)** So the OS path module has a function called isfile.
>
> **[1:28](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=88)** And to make use of isfile, I need to give it the path to the file to check.
>
> **[1:34](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=94)** So that's going to be the depths folder plus the forward slash plus the name of the file.
>
> **[1:40](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=100)** So I check to make sure that that's a file and not a directory.
>
> **[1:42](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=102)** And then I'm using the endswith function, which is built into [[Python (Programming Language)|Python]] string objects to make sure that the file name ends with .txt.
>
> **[1:51](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=111)** So if both of those conditions are true, then we have a text file.
>
> **[1:57](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=117)** So I need to add its size in bytes to my running total.
>
> **[2:01](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=121)** The OS path module has a function named getsize, which will give me the size of a file in bytes.
>
> **[2:09](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=129)** And again, I have to give it the folder and a slash and the file name.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=133)** So I get the file size, I add it to my running total, and then when the loop completes, I return the number of total bytes.
>
> **[2:21](https://www.linkedin.com/learning/learning-python-25309312/solution-files?u=76281980&t=141)** So let's go ahead and run this code and you can see that sure enough, when I run my code that the size of the text files that are in the directory is 4232 bytes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (5), python (1)
> **Speakers:** - okay (1)


### 7. Working with the Internet

[↑ Back to Table of Contents](#table-of-contents)

#### [Retrieving internet data](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=0)** - [Instructor] One of the areas where [[Python (Programming Language)|Python]] really shines is in retrieving and working with data from the internet such as [[JSON]] and XML.
>
> **[0:08](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=8)** In this chapter, we'll see how to work with those data types, but first we need to understand how to use Python to access the internet.
>
> **[0:15](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=15)** So let's go ahead and open up the inetdata start example.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=19)** And of course, if you're using CoLabs, just go ahead and create a new code cell to follow along.
>
> **[0:24](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=24)** So in this first example, we're going to just retrieve data from a server and print the results.
>
> **[0:30](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=30)** So the Python standard library includes a module that lets us make internet requests.
>
> **[0:35](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=35)** It's called URLLib.request.
>
> **[0:38](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=38)** So I'm going to import that module here.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=42)** This module provides the classes and code that I need to make HTTP requests.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=49)** So what I'm going to do is create a variable and I'll call that web URL, and I'm going to assign that to the result of calling URLLib.request.URLopen.
>
> **[1:03](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=63)** There we go.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=65)** And all I have to do is give it the URL I want.
>
> **[1:07](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=67)** So I'm going to call http www.[example.com](https://example.com).
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=77)** And if you're wondering, that actually is a real domain.
>
> **[1:21](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=81)** So if we go to [example.com](https://example.com), you can see that this is just an example domain that the IANA Corporation maintains for using examples.
>
> **[1:32](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=92)** So it's not a real website, it just happens to be owned by the Internet Assigned Numbers Authority, but it is real so we can use it in our example.
>
> **[1:42](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=102)** So we're going to open a connection to that website and this function call returns an HTTP response object.
>
> **[1:50](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=110)** So that's what the web URL will be set to, that type of object.
>
> **[1:55](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=115)** So for the moment, I'm just going to access this page and print out the result code from the response.
>
> **[2:01](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=121)** So the result code is retrieved by calling the get code function on the response that we've created.
>
> **[2:10](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=130)** So I'm going to print the result code, and that's going to be web URL.getcode.
>
> **[2:20](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=140)** So that will be an HTTP result code.
>
> **[2:23](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=143)** So for example, the result code will be 200 if everything's okay, or a 404 if the URL is not found and so on.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=151)** So let's go ahead and run what we have so far, and sure enough, we can see the result code is 200.
>
> **[2:36](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=156)** That means we are successfully opening that URL.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=160)** Let's go ahead and copy this and let's run it inside CoLab and sure enough, we can see the same result.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=169)** So now that we've been able to make a successful connection, let's try to read some data from the URL and print it out.
>
> **[2:56](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=176)** To do that, I need to call the read function on this response object.
>
> **[3:01](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=181)** So once again, I'm going to create a variable named data, and then on the web URL I'm going to call read and then we'll just print the data.
>
> **[3:13](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=193)** So if you recall from earlier in the course, we used a read function to read data contents of local data files.
>
> **[3:22](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=202)** I'm doing pretty much the same thing here.
>
> **[3:24](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=204)** I'm just reading the entire contents of this URL into my data variable and I'm just going to print that out.
>
> **[3:32](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=212)** So if all goes well, this should be the [[HTML]] code for the [example.com](https://example.com) homepage that we just saw.
>
> **[3:41](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=221)** So let's go ahead and run the updated code and sure enough, you can see that I'm getting the HTML for the webpage back and the result code is 200, which means that everything is just fine.
>
> **[3:52](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=232)** Let's go ahead and do the same thing in CoLab, so I'm going to copy and we'll paste and we'll run.
>
> **[4:00](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=240)** And sure enough, here is the HTML coming back from the webpage.
>
> **[4:05](https://www.linkedin.com/learning/learning-python-25309312/retrieving-internet-data?u=76281980&t=245)** Okay, so that is just a quick introduction of how to read data from the internet, and we'll see how to use this a little bit more in depth as we go through the [[Representational State Transfer (REST)|rest]] of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[HTML]] (3), [[JSON]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** url (9), http (3), html (3), json (1), xml (1)
> **CLI Commands:** python (3), make (3)
> **URLs:** [example.com](https://example.com) (3)
> **Tools:** colab (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)

#### [Working with JSON data](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=0)** - [Speaker] In this example, we're going to build on what we learned in the previous video to see how to use [[Python (Programming Language)|Python]] to connect to a [[Real-Time]] [[JSON]] data feed and process the information.
>
> **[0:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=10)** JSON stands for [[JavaScript]] object notation.
>
> **[0:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=14)** It is a very common data format.
>
> **[0:16](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=16)** You'll run into this a lot when you're working with data from various different sources on the internet.
>
> **[0:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=21)** JSON is essentially a way of representing the data in an object as a string.
>
> **[0:26](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=26)** So let's take a look at a sample JSON data object.
>
> **[0:31](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=31)** The data is represented as key value pairs, and if this looks familiar, that's because it's essentially just like the dictionary objects that we learned about back in chapter two.
>
> **[0:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=42)** So in this example, the JSON represents data about a person and you can see the string starts and ends with curly braces.
>
> **[0:49](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=49)** And each field of data has a string as a name, as a key value.
>
> **[0:55](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=55)** And then a data value.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=57)** In this case, there's a string for the name, an integer for the age, there's a list of strings for the skills and another embedded JSON object or another dictionary for the address information.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=70)** Now it's beyond the scope of this course to go deep into all the details of what JSON is and how it works.
>
> **[1:15](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=75)** If you're interested in those details, there's a great course here in the library called [[JSON Essential Training]].
>
> **[1:21](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=81)** Then I suggest you check that out.
>
> **[1:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=82)** So let's try a simple example in our code.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=86)** So what I'm going to do is I'm going to use the useless facts API to [[Fetch]] a random useless fact from this website.
>
> **[1:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=95)** And you can see the link there in the browser bar.
>
> **[1:38](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=98)** There are two HTTP endpoints that I can access.
>
> **[1:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=102)** One for random useless facts and one for today's specific fact.
>
> **[1:49](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=109)** So I'm going to copy this path right here and I'm going to put it onto the end of this URL and open this up in the browser.
>
> **[1:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=118)** And when I do that, you can see I get some JSON code.
>
> **[2:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=121)** Let's go ahead and [[Zoom]] this up so you can read it.
>
> **[2:05](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=125)** So here in this code, you can see that there are various key value pairs.
>
> **[2:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=130)** So we have an ID and a value and then a text and value.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=134)** So this field right here, the text key and the text value is what we are going to be interested in.
>
> **[2:22](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=142)** So let's write the code in our example to pull in the random fact and then extract this text from the JSON.
>
> **[2:31](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=151)** So let's go ahead and jump over to our code and let's open up jsondata_start.
>
> **[2:37](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=157)** And of course, if you're using Colab, just create a new code cell.
>
> **[2:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=160)** So I've imported my urllib request module.
>
> **[2:45](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=165)** So what I need to do is open the URL, like we did this in the previous example.
>
> **[2:50](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=170)** So I'll have web URL and I will write urllib.request., and it's going to be urlopen and that's going to be the link to this API.
>
> **[3:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=184)** So I'll copy that and paste it in.
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=187)** Okay, so we're going to open this URL and then just like we did in our previous example, we're going to print out the Result code just to make sure everything's okay.
>
> **[3:18](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=198)** So we'll get the web_url, we'll call getcode.
>
> **[3:23](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=203)** Alright, and then we're going to read the data.
>
> **[3:26](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=206)** So once again, I'll create a variable named data and on the web_url variable, I will call the read function.
>
> **[3:35](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=215)** And then we're going to use print out the data for now.
>
> **[3:37](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=217)** All right, so let's go ahead and run this in the terminal and sure enough, you can see here's the result code.
>
> **[3:46](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=226)** So we've got a result of 200.
>
> **[3:48](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=228)** All right?
>
> **[3:49](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=229)** And here is the actual JSON text coming back.
>
> **[3:53](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=233)** So these are the real bytes coming from the actual website.
>
> **[3:58](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=238)** Let's go ahead and copy this code and run it inside our Colab notebook.
>
> **[4:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=246)** And, of course, I have to import urllib.request and it will import the json library for the moment as well.
>
> **[4:16](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=256)** So we'll go ahead and run and you can see once again, it's running.
>
> **[4:20](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=260)** Okay, so now that we have the data coming back, what we need to do is take the raw JSON string that returns from this call and convert it into a live, native Python dictionary object that I can then access just like any other dictionary.
>
> **[4:40](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=280)** So back here in my code space, I'm going to import json.
>
> **[4:46](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=286)** So the JSON module is a standard library module that lets us work with JSON code.
>
> **[4:52](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=292)** What I'm going to do is instead of printing out the data, let's comment that out.
>
> **[4:57](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=297)** I'm going to make a new variable called theJSON.
>
> **[5:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=301)** And then on theJSON module, I'm going to call loads, which means load string.
>
> **[5:06](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=306)** And I'm going to pass in the data string that we got back from the website.
>
> **[5:10](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=310)** So that takes the string of JSON code and parses it into a native Python dictionary object.
>
> **[5:18](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=318)** And now, I can access the data within the object just like I can in any other dictionary.
>
> **[5:23](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=323)** So I'm going to print out theJSON.
>
> **[5:27](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=327)** And remember how we index into dictionaries is by using the key.
>
> **[5:32](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=332)** And remember, the field that we want is the text field.
>
> **[5:36](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=336)** So that will give us our random fact.
>
> **[5:39](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=339)** So let's go ahead and run.
>
> **[5:42](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=342)** All right.
>
> **[5:43](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=343)** And now we can see the random fact, right?
>
> **[5:45](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=345)** If I run this again, we'll get a different random fact.
>
> **[5:51](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=351)** I'll do it one more time.
>
> **[5:53](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=353)** You can see that each random fact is coming back.
>
> **[5:57](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=357)** Alright, let's go ahead and copy this data.
>
> **[6:01](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=361)** Run it in Colab.
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=364)** All right, so now instead of printing the data, we're parsing it into a dictionary.
>
> **[6:09](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=369)** Let's run.
>
> **[6:11](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=371)** All right, let's run again.
>
> **[6:14](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=374)** All right, let's run again.
>
> **[6:16](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=376)** You can see that there's a random fact coming back each time.
>
> **[6:19](https://www.linkedin.com/learning/learning-python-25309312/working-with-json-data?u=76281980&t=379)** So with just a few lines of code, we were able to retrieve data from a remote data source and create a Python object in our code, which we can then access directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (17), [[Python (Programming Language)|Python]] (4), [[Real-Time]] (1), [[JavaScript]] (1), [[Fetch]] (1)
> **Env Vars:** json (15), url (4), api (2), http (1)
> **CLI Commands:** python (4), make (2)
> **Code Identifiers:** thejson (3), web_url (2), jsondata_start (1)
> **Tools:** colab (3), terminal (1)
> **Analogies:** just like (4)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** previous video (1)

#### [Manipulating XML](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=0)** - [Instructor] XML is another very common data format.
>
> **[0:03](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=3)** It's a tag-based language, just like [[HTML]].
>
> **[0:06](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=6)** And in this example we'll see how to use [[Python (Programming Language)|Python]] to load an XML file and then operate on the file while it's in memory.
>
> **[0:13](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=13)** Now again, it's beyond the scope of this course to explain all of the basic details about XML and how it's used to represent data.
>
> **[0:20](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=20)** There's a great course available here in the library called XML Essential training.
>
> **[0:25](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=25)** I suggest checking out that course if you want to learn more.
>
> **[0:28](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=28)** So I'm going to demonstrate how to work with XML using VS code.
>
> **[0:32](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=32)** And of course, if you're using Colab, that's fine, just go ahead and make a new code cell.
>
> **[0:37](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=37)** What you'll need to do is you'll notice I have a sample XML file here in the [[GitHub]] code space.
>
> **[0:45](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=45)** So there's a couple of ways that you can use this file.
>
> **[0:48](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=48)** One way to do this is to download the example files from GitHub and then upload this XML file into Colab so you can work on it.
>
> **[0:59](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=59)** So if you go to the Colab tab and you click on the little folder over here, you'll see that there's a directory.
>
> **[1:05](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=65)** If you click on this upload button, it'll give you the opportunity to upload the XML file.
>
> **[1:10](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=70)** But honestly, it's probably just easier to just copy and paste the content into a new file.
>
> **[1:17](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=77)** So for example, you just go to the github repo, just copy this XML.
>
> **[1:22](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=82)** So I'm going to copy it, and then here I'm going to just create a new file.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=86)** So I'm going to click, I'm going to right click and choose New file.
>
> **[1:31](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=91)** And you can see it's called untitled.
>
> **[1:34](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=94)** So I'm just going to double click that.
>
> **[1:37](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=97)** I'm going to paste in the XML here, and then I'm going to rename this.
>
> **[1:43](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=103)** So actually let me close it and then I'm going to rename this to samplexml.xml.
>
> **[1:54](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=114)** Now the data is in the file system here in Colab, so we can work with it locally.
>
> **[1:59](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=119)** Yeah, don't bother.
>
> **[2:00](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=120)** I mean if you want to upload it, that's fine, but that's what I just did it's probably simpler.
>
> **[2:04](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=124)** So here's what we're going to do, this is the sample file.
>
> **[2:06](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=126)** What I'm going to do is open up the xmlparsing_start file, and this is the code we're going to work on.
>
> **[2:13](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=133)** So here's what we're going to do.
>
> **[2:14](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=134)** First I need to import the module that lets me operate on an XML document, and that is the xml.dom.minidom.
>
> **[2:28](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=148)** So we import that, the XLM file, in this case, I've got it right here at the root level of my code space.
>
> **[2:36](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=156)** If you're working locally on your Mac or [[Windows]], you're probably going to need to move this file into the actual chapter seven, just to make it easier to work on because it'll be a local file path for you there.
>
> **[2:49](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=169)** Just keep in mind, if you're not working on a code space or Colab, if you're working locally, just move it into the folder.
>
> **[2:55](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=175)** Alright, so let's take a look at the XML file itself.
>
> **[3:00](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=180)** So this XML file represents data about a person, and you can see that I've got a root tag named person.
>
> **[3:07](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=187)** I have a first name, a last name, right, hometown, and then there's a whole bunch of skill tags with name attributes, okay.
>
> **[3:17](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=197)** So what we're going to do is try out some XML operations.
>
> **[3:21](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=201)** So to load the XML file and parse the contents into a Python data structure, I'm going to use the parse function on the XML minidom module.
>
> **[3:34](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=214)** So I'm going to create a variable named doc to hold the XML document.
>
> **[3:39](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=219)** And what I'm going to do is write xml.dom.minidom.parse,
>
> **[3:49](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=229)** and I'm going to load samplexml.xml.
>
> **[3:54](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=234)** So this will parse the XML file and create an in-memory dom object I can manipulate.
>
> **[4:00](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=240)** Now once we've parsed the document, let's print out the tag name of the root of the document.
>
> **[4:07](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=247)** So I'll print doc.
>
> **[4:10](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=250)** And there are certain standard XML constructs that I have access to once I have an XML document in memory.
>
> **[4:18](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=258)** So I'm going to print out the documents node name.
>
> **[4:24](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=264)** Each tag inside an XML document is also called a node.
>
> **[4:29](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=269)** And then let's also print out the docs first child tag name, right?
>
> **[4:38](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=278)** Now if these property names don't look familiar to you, they are standard properties that are used in the [[Document Object Model (DOM)|document object model]], things like node name and first child and tag name.
>
> **[4:49](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=289)** These are all standard properties of dom elements, whether it's XML or HTML.
>
> **[4:54](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=294)** So let's go ahead and run what I have.
>
> **[4:57](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=297)** So we'll run this in the terminal and we can see that the node name of the document is #document.
>
> **[5:04](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=304)** That's pretty standard.
>
> **[5:05](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=305)** And then the first child, if we look at the actual code itself, the first child is this root tag right here and we can see that its tag name is person.
>
> **[5:17](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=317)** And so that's what we're getting from this operation right here.
>
> **[5:19](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=319)** So we can see that the parse operation worked and we have XML information in memory.
>
> **[5:26](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=326)** Alright, so far we're off to a good start.
>
> **[5:28](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=328)** Now let's write some code to print out the list of skills that this person has.
>
> **[5:33](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=333)** So to do that we need to access each one of these skills tags and then get the name attribute that's on each one.
>
> **[5:43](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=343)** So to do that I'm going to use the standard dom function.
>
> **[5:48](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=348)** It's called get elements by tag name.
>
> **[5:50](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=350)** I'm going to create a variable named skills, and on my document I'm going to call getElementsByTagName.
>
> **[5:58](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=358)** And the name of the tag is skill, right?
>
> **[6:01](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=361)** Is that correct?
>
> **[6:02](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=362)** Yes, they're called skill tags.
>
> **[6:04](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=364)** That will give me a list of all the skills tag in the document and we can make sure that that works by printing out the skill count and then we'll get the length of the skills array.
>
> **[6:18](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=378)** Now, the reason I have a length property here, and I'm not using the lend function is because this object that comes back from getElementsByTagName is an XML object and it actually has a length property.
>
> **[6:30](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=390)** So that's why I'm using this length property instead of using the length function.
>
> **[6:35](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=395)** Once I've done that, I'm going to iterate over each one of these tags and then print out the value of the name attribute.
>
> **[6:43](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=403)** Alright, so again, let's go back to the XML really quick.
>
> **[6:45](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=405)** You can see each skill has a name attribute, and the name attribute has the content of some skill name.
>
> **[6:52](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=412)** So the way I'm going to do that is by using this function called get attribute.
>
> **[6:56](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=416)** So for each skill in skills, I'm going to print skill.
>
> **[7:06](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=426)** I'm going to call getAttribute, and I want the name attribute.
>
> **[7:11](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=431)** That's pretty much all we should need to do for that.
>
> **[7:13](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=433)** So let's run this code.
>
> **[7:16](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=436)** Alright, and sure enough, we can see that the skill count is 4 and here are the skills being listed.
>
> **[7:22](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=442)** So that's working fine.
>
> **[7:24](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=444)** Okay, let's go ahead and copy and paste this code over in Colab.
>
> **[7:30](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=450)** So yeah, I've got an empty code cell.
>
> **[7:32](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=452)** So let's just copy and paste this whole thing.
>
> **[7:35](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=455)** And if you've been following along, you've already got this code.
>
> **[7:38](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=458)** So let's go ahead and run this and we see we have the same result.
>
> **[7:42](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=462)** Alright, so everything seems to be working, let's keep on going.
>
> **[7:46](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=466)** So let's try something else.
>
> **[7:47](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=467)** Let's try creating a new XML tag and adding it into the document.
>
> **[7:53](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=473)** So what I'm going to do is to find a variable named new skill.
>
> **[7:58](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=478)** And on the document I'm going to call createElement.
>
> **[8:01](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=481)** So I'm going to create a new tag and that's going to be a skill tag.
>
> **[8:05](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=485)** And then on that new skill tag, now that I've created it, I'm going to call setAttribute and I'm going to set the nameAttribute to some skill.
>
> **[8:16](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=496)** I'm old school, let's make a jQuery skill.
>
> **[8:20](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=500)** Yeah, I can hear you laughing.
>
> **[8:22](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=502)** Alright, so then on my document, I'm going to get the first child, which is the person tag.
>
> **[8:29](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=509)** And then I'm going to call appendChild to append my new skill.
>
> **[8:34](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=514)** So that is going to put my new skill inside the person tag at the end of the list here.
>
> **[8:41](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=521)** Alright, so let's go ahead and try this out and let's see if it works.
>
> **[8:46](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=526)** Oh, actually, to make sure it works, let's just copy and paste this code down here again to print out all the skills.
>
> **[8:54](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=534)** So we'll see the before and the after.
>
> **[8:57](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=537)** Alright, let's go ahead and run this.
>
> **[9:01](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=541)** Alright, so we can see that the skill count was 4 and here they are.
>
> **[9:06](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=546)** And now the skill count is 5 and we can see that the new one is added down there at the bottom.
>
> **[9:11](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=551)** Alright, let's go ahead and copy this code and let's put it into Colab.
>
> **[9:19](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=559)** Alright, and now let's run and we can see the same result here.
>
> **[9:27](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=567)** So that should give you an idea of how you can use the Python XML module to manipulate XML documents in memory.
>
> **[9:34](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=574)** Now, obviously this is a simple example, but if you have a moment to spare, I would suggest maybe taking some time here to try out some of your own experiments, check out the documentation for the minidom module and use my code as a starting point and just, I dunno, just try some things out.
>
> **[9:50](https://www.linkedin.com/learning/learning-python-25309312/manipulating-xml?u=76281980&t=590)** Have some fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[GitHub]] (3), [[HTML]] (2), [[Windows]] (1), [[Document Object Model (DOM)|Document object model]] (1)
> **Env Vars:** xml (28), html (2), xlm (1)
> **CLI Commands:** make (5), node (4), python (3), find (1)
> **Tools:** colab (7), github (3), vs code (1), terminal (1)
> **Code Identifiers:** getelementsbytagname (2), xmlparsing_start (1), getattribute (1), createelement (1), setattribute (1)
> **UI Navigation:** go to (2), click on (2)
> **File Paths:** samplexml.xml (2)
> **Documentation:** the docs (1), the documentation (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Conclusion](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=0)** - Well, that brings us to the conclusion of Learning [[Python (Programming Language)|Python]].
>
> **[0:03](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=3)** I hope you enjoyed learning along with me about the Python language and maybe it's inspired you to continue your programming journey with this great versatile language.
>
> **[0:11](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=11)** If you like what you've seen in this course and you think that Python might be a good fit for projects that you're working on, I can suggest a few courses you can check out next.
>
> **[0:19](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=19)** One of the best features of Python is the rich standard library of built-in modules that provide a wide range of features and capabilities that you can use in your programs.
>
> **[0:29](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=29)** We already used a few of these modules in the course.
>
> **[0:32](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=32)** To learn more about these modules, check out the Python Standard Library Essential Training course.
>
> **[0:38](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=38)** We also saw how to use Python to access information over the internet and process data formats like [[JSON]] and XML.
>
> **[0:44](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=44)** Python has become very popular among data scientists and engineers, and if you're interested in learning more about those subjects, check out the Python working with data and Python [[Data Engineering]] basics courses.
>
> **[0:57](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=57)** In fact, Python has become so popular for working with data that [[Microsoft]] has added it to their popular [[Microsoft Excel|Excel]] spreadsheet program.
>
> **[1:04](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=64)** The course Python in Excel: getting started with data analysis takes a look at how you can use the power of Python in your Excel spreadsheets today.
>
> **[1:12](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=72)** Python is also a very capable, [[Object-Oriented Programming (OOP)|object-oriented programming]] language, and we looked at some of those features in this course.
>
> **[1:18](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=78)** If you want to learn even more about how to build great object-oriented programs, then consider watching the [[Python Object-Oriented Programming]] course.
>
> **[1:26](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=86)** And finally, if you want to take your Python skills to the next level, consider watching the Advanced Python course.
>
> **[1:33](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=93)** Also, be sure to stay up to date with Python and learn more about the features provided by the language at [python.org](https://python.org).
>
> **[1:39](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=99)** And don't forget to follow me on [[LinkedIn]] where I post all kinds of Python tips.
>
> **[1:44](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=104)** Thanks again for watching, and I'll see you in another one of my courses again soon.
>
> **[1:47](https://www.linkedin.com/learning/learning-python-25309312/conclusion?u=76281980&t=107)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (19), [[Microsoft Excel|Excel]] (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[JSON]] (1), [[Data Engineering]] (1)
> **CLI Commands:** python (19)
> **Env Vars:** json (1), xml (1)
> **URLs:** [python.org](https://python.org) (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - well (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-python-3980343/codespaces)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Getting Started with Python]]
← [[Python Essential Training]] | **2 of 8** | [[Python Object-Oriented Programming]] →

## Appears In

- [[Getting Started with Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)