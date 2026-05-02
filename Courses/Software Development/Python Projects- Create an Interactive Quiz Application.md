---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-projects-create-an-interactive-quiz-application
url: "https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application"
duration_minutes: 89
duration: 1h 29m
level: Intermediate
updated: 6/9/2022
learners: 55820
skills:
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-project-build-a-quiz-application-2476116"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGKo6zGY36bbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654623850850?e=2147483647&amp;v=beta&amp;t=gNaxGv6pIADVIe5Blt508ioprQKgbSb7VpHRhj0odvk"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Building the Classic Snake Game with Python]]'
next_courses:
  - '[[Create an Open-Source Project in Python]]'
path_nav: '[{"path":"Python Hands-On Practice","position":7,"total":14,"prev":"Building the Classic Snake Game with Python","next":"Create an Open-Source Project in Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md)

![Python Projects: Create an Interactive Quiz Application](https://media.licdn.com/dms/image/v2/C4D0DAQGKo6zGY36bbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654623850850?e=2147483647&amp;v=beta&amp;t=gNaxGv6pIADVIe5Blt508ioprQKgbSb7VpHRhj0odvk)

# Python Projects: Create an Interactive Quiz Application

> Think you’ve got a grip on Python? Looking for ways to improve your programming skills? One of the best ways is to put your skills into action and build something real. Join Joe Marini in this course, as he shows you how to use Python to build a quiz-taking program, step by step, explaining how to build and test each feature as you go along. Joe starts with designing the basic features and finishe

> [LinkedIn Learning](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application) | 1h 29m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building a quiz app in Python](#building-a-quiz-app-in-python)
  - [What you should know](#what-you-should-know)
  - [Setting up the project](#setting-up-the-project)
- [**1. Overview**](#1-overview) (4 videos)
  - [Defining the app requirements](#defining-the-app-requirements)
  - [Architecting the application](#architecting-the-application)
  - [Defining the quiz markup format](#defining-the-quiz-markup-format)
  - [Building the app starting point](#building-the-app-starting-point)
- [**2. The Basics**](#2-the-basics) (7 videos)
  - [Creating the Question and Answer classes](#creating-the-question-and-answer-classes)
  - [Creating the Quiz class](#creating-the-quiz-class)
  - [Reading and parsing the quiz](#reading-and-parsing-the-quiz)
  - [Creating the QuizManager class](#creating-the-quizmanager-class)
  - [Presenting the quiz](#presenting-the-quiz)
  - [Calculating the results](#calculating-the-results)
  - [Saving the results](#saving-the-results)
- [**3. Improvements**](#3-improvements) (3 videos)
  - [Presenting questions in random order](#presenting-questions-in-random-order)
  - [Timing the quiz](#timing-the-quiz)
  - [Redoing wrong questions](#redoing-wrong-questions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a quiz app in Python](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=0)** - [Joe] One of the best ways to improve your programming skills is to work on a real project.
>
> **[0:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=5)** In this course, we're going to use [[Python (Programming Language)|Python]] to build a quiz-taking program, and we're going to use quite a few Python features along the way.
>
> **[0:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=12)** The program will run in the terminal and present the user with a menu to control the app.
>
> **[0:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=18)** The user can list the available quizzes, select a quiz, and answer the questions, and then see the results and save them to a file.
>
> **[0:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=26)** The quizzes themselves will be defined using XML, which means that we can create and edit the quizzes without having to change the code of the app.
>
> **[0:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=34)** Hi, I'm Joe Marini.
>
> **[0:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=35)** I've been building software for some of the biggest and best known companies in Silicon Valley for more than 30 years.
>
> **[0:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=41)** In this course, we're going to take an iterative approach to building our app so we can see how to build and test each feature as we go along.
>
> **[0:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=48)** In the first part of the course, we'll focus on the basics, from architecting the app and designing the basic features, up to a completed application that presents the user with a menu-driven interface, administers the quizzes, and saves the results to a file.
>
> **[1:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=63)** Then we'll look at ways we can improve on the app and add new features, like presenting the questions in random order and measuring the amount of time it takes to complete a quiz.
>
> **[1:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=72)** Like I said, sometimes the best way to learn is to put aside the theory for a little while and build something real.
>
> **[1:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=78)** Let's get started building a quiz app with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Env Vars:** xml (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=0)** - [Instructor] There are some concepts that you should be comfortable with before taking this course.
>
> **[0:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=4)** First, since we're going to be building a [[Python (Programming Language)|Python]] application, you're obviously going to need to be familiar with the basics of programming along with knowledge of the Python language.
>
> **[0:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=13)** If you need to brush up on these subjects, then check out [[Programming Foundations]]: Fundamentals and Learning Python.
>
> **[0:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=20)** We're also going to be using XML to define our quiz content.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=24)** So familiarity with structured markup like XML will be useful.
>
> **[0:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=28)** You should be able to follow along pretty easily if you have any experience with other markup languages like [[HTML]].
>
> **[0:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=33)** But you can also refer to XML Essential Training if you want to go deeper on the subject.
>
> **[0:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=38)** I also have a course specifically focused on using XML in Python if you want to refer to that one, called Python: XML, [[JSON]], and the Web.
>
> **[0:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=47)** And finally, you should, of course, be familiar with using a text editor or other IDE to write code.
>
> **[0:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=53)** I'm going to be using Visual Studio in this course.
>
> **[0:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=55)** But it doesn't matter which editor you choose.
>
> **[0:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=58)** If you want to learn more about using VS Code to work with Python, then refer to the Visual Studio Code for Python Developers course.
>
> **[1:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=65)** Once you feel comfortable with these subjects, you are ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Programming Foundations]] (1), [[HTML]] (1), [[JSON]] (1)
> **Env Vars:** xml (5), html (1), json (1), ide (1)
> **CLI Commands:** python (7)
> **Tools:** visual studio (2), vs code (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the project](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=0)** - [Instructor] Let's make sure that your environment is properly set up to complete this course.
>
> **[0:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=4)** First, you'll need to have [[Python (Programming Language)|Python]] installed.
>
> **[0:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=7)** So on your computer, open the terminal program and then enter the command Python -- and then version and then hit return.
>
> **[0:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=16)** Now, if you're using a Mac or a [[Linux]] machine, you'll probably have to run the Python three command instead, because Mac's and some Linux machines have the older version of Python, Python two installed and we don't want to use that branch.
>
> **[0:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=29)** We want to use Python three.
>
> **[0:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=31)** So if you're using a Mac or Linux machine, use the Python three command instead.
>
> **[0:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=36)** And if you're on [[Windows]], like I am here you can also just try typing PY --version.
>
> **[0:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=42)** This should also work and you can see.
>
> **[0:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=44)** Sure enough, it works.
>
> **[0:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=45)** So if you get an error when you run this command, instead of seeing a message like this one with the [[Microsoft Word|word]] Python followed by a version number, then you need to install Python on your computer.
>
> **[0:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=57)** If you already have Python installed, then make sure you have at least version three point 10 installed.
>
> **[1:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=63)** If the version number on your machine is less than three point 10, then install the latest version.
>
> **[1:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=68)** And to do that, we can go to the Python website, right.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=71)** So here we are on the Python website, you can click on the downloads button and this will take you to the download section for your particular operating system.
>
> **[1:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=81)** So after you download, go ahead and run the installer and then go back to your terminal program and then try that Python --version command again to make sure that it installed correctly.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=92)** You will also need to choose a text editor for writing code.
>
> **[1:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=95)** And in this course, I am going to be using visual studio code, because it's a great editor and it's free but it doesn't really matter which editor you use for the course.
>
> **[1:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=104)** So use whichever one you're most comfortable with.
>
> **[1:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=106)** If you want to use vs code, then come to the download page here.
>
> **[1:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=110)** You can see the link there in the browser and install it on your machine.
>
> **[1:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=114)** If you're going to use vs code, I highly recommend getting the Python extension to go with it.
>
> **[1:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=119)** This is the one you want, the one from [[Microsoft]] with all these tens of millions of downloads.
>
> **[2:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=124)** There's plenty of other Python extensions inside the visual studio marketplace but this is the one that you should be using.
>
> **[2:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=130)** So if you're going to use visual studio code, use this extension, because it adds some really great Python features to the editor.
>
> **[2:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=137)** To get the exercise files for the course, I have created a [[GitHub]] repository where you can find the code.
>
> **[2:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=143)** You can either clone the repository locally or download the files as zip archive and then extract it to your machine.
>
> **[2:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=150)** And then that's pretty much all the setup that you'll need to do for the course.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=153)** So once you have Python along with the exercise files and your text editor selected, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (17), [[Linux]] (3), [[Windows]] (1), [[Microsoft Word|Word]] (1), [[Microsoft]] (1)
> **CLI Commands:** python (17), make (3), find (1)
> **Tools:** visual studio (3), terminal (2), vs code (2), github (1)
> **Prerequisites:** install (3), you'll need (2), set up (1), make sure you have (1), setup (1)
> **UI Navigation:** open the (1), go to (1), click on (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining the app requirements](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=0)** - [Joe] Before we get started building our application, let's define what the requirements are going to be.
>
> **[0:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=6)** And to better understand what we're going to build in this course, let's first take a look at the finished app.
>
> **[0:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=11)** So here in my code, I'm going to open up the Finished folder and inside the Basics folder, I'm going to go down to chapter seven and I'm going to right-click on pyquiz.py and choose Run [[Python (Programming Language)|Python]] File in Terminal.
>
> **[0:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=25)** And obviously if you're using a code editor, that's other than Visual Studio Code you'll need to do this in your terminal program, but since I have this built into VS Code I'm going to go ahead and do that.
>
> **[0:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=35)** So when I run the app you can see that there's a simple start-up greeting, says, "Welcome to PyQuiz," and then I'm prompted for my name.
>
> **[0:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=41)** So I'll put my name in.
>
> **[0:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=42)** All right.
>
> **[0:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=43)** And then we can see that the program prints out a menu of options.
>
> **[0:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=48)** So I can Repeat this menu, List the quizzes that are installed, Take a particular quiz, or Exit the program.
>
> **[0:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=54)** So let me go ahead and List the quizzes.
>
> **[0:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=56)** So I'll enter version L and you can see that there are some quizzes that are available to take.
>
> **[1:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=61)** So I'll choose to Take a quiz which is option T and then I'll choose the Sample Quiz, number 2.
>
> **[1:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=69)** So there's two different types of questions.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=71)** There's multiple choice and true-false.
>
> **[1:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=74)** So let's go ahead and take this quiz and we can see that the quiz name is Sample Quiz and it's got some Description here.
>
> **[1:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=82)** It's got four questions for a total of 28 points.
>
> **[1:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=85)** So, "To the nearest billion, how old is the earth?"
>
> **[1:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=89)** I'm pretty sure that's 5 billion years.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=92)** And say true or false, "Broccoli is good for you."
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=94)** Well, I like broccoli so I think that's true.
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=96)** True or false. "The world is flat."
>
> **[1:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=98)** Well, you know what, I've ever been to space, so I'm not sure that the world is not flat.
>
> **[1:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=101)** So I'm just going to say it's false.
>
> **[1:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=103)** And then, "What was the color of George Washington's white horse?"
>
> **[1:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=106)** Well, I'm pretty sure that that was white.
>
> **[1:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=108)** So that's number 3.
>
> **[1:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=110)** Okay, and you can see that I've completed the course and sure enough, I've got 4 out of 4 correct, so I've got 28 possible points, and then I'm prompted to Save the results to a file.
>
> **[2:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=120)** I'm not going to do that for now, so say no.
>
> **[2:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=123)** And you can see that now it go back to the main menu.
>
> **[2:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=125)** So let's discuss some of the high-level requirements for our quiz application.
>
> **[2:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=131)** First, the program needs to have a way of defining quizzes that can be added to the program without having to modify the code.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=139)** Second, our quiz needs to keep track of the quiz results such as the score and number of correct answers and present them to the user when they complete the quiz.
>
> **[2:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=148)** The app also needs to have a way to save the results to a file when the user is finished.
>
> **[2:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=154)** Okay, so now that we know the high-level requirements of the app and we've seen the finished app in action, let's plan the app architecture.
>
> **[2:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=161)** We'll do that in a separate video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Tools:** terminal (2), visual studio (1), vs code (1)
> **File Paths:** pyquiz.py (1)
> **CLI Commands:** python (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### [Architecting the application](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=0)** - [Instructor] Just as you wouldn't try to build a house without a set of plans and blueprints, it's useful to plan the architecture of the application before we get started writing any code.
>
> **[0:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=10)** So, let's take a look at the high level architecture of our quiz application.
>
> **[0:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=15)** Each part of our application will have a specific set of responsibilities to perform.
>
> **[0:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=20)** The main Quiz App class will be responsible for presenting and controlling the [[User Experience (UX)|user experience]] of the app.
>
> **[0:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=27)** It will handle the menu selections from the user and create and maintain the Quiz Manager class.
>
> **[0:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=33)** The Quiz Manager class will be responsible for managing the installed quizzes in the app.
>
> **[0:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=39)** It will coordinate the user actions in the main app class and the installed quizzes.
>
> **[0:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=44)** For example, presenting each quiz and then displaying and saving the results.
>
> **[0:49](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=49)** The Quiz Manager class will also create the quiz parser class, which will handle the process of taking an XML file and building a quiz object from it.
>
> **[0:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=59)** Each quiz object will consist of a series of questions and answers.
>
> **[1:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=65)** The quiz class will also be responsible for presenting its own questions and checking for the correct answers each time.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=71)** Each quiz object created by the parser will be presented to the user by the Quiz Manager.
>
> **[1:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=77)** So by planning the architecture of our app ahead of time, we can help ensure that each part of the application maintains a good separation of concerns from other parts of the app and are mainly responsible for a single major piece of functionality.
>
> **[1:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=91)** This will make it easier to catch problems before they crop up and help keep the code maintainable and extensible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** xml (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Defining the quiz markup format](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=0)** - Each of the individual quizzes will be created using XML files.
>
> **[0:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=5)** The XML will then be loaded in parsed when the user selects a particular quiz.
>
> **[0:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=10)** So, let's take a moment and understand the XML format that represents each individual quiz.
>
> **[0:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=15)** So, what I'm going to do here is, in the quizzes folder, I'm going to make a new file, and I'm going to call it myquiz.XML.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=24)** So, the root element for the XML file will be the quiz ML tag.
>
> **[0:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=29)** So, it's going to be written as quiz ML.
>
> **[0:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=33)** And, it has one attribute which is going to be the name of the quiz.
>
> **[0:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=37)** And, I'll just call this sample quiz and I'll close that off.
>
> **[0:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=47)** So, this tag will contain all of the information for the particular quiz.
>
> **[0:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=53)** So, each quiz will have a description which will be presented to the user when the quiz starts and will use a description tag.
>
> **[1:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=62)** And, let me indent that.
>
> **[1:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=63)** This tag will contain the description for the quiz.
>
> **[1:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=67)** So, I'll write, this is a sample quiz, and then we'll close that off.
>
> **[1:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=75)** Alright, there will also be a series of questions that make up the content of the quiz.
>
> **[1:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=82)** Questions can either be multiple choice or true false and they also have an associated points value.
>
> **[1:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=88)** So, we are going to use a question tag to represent each question.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=93)** So, let's go ahead and write the question tag and then I'll close that off.
>
> **[1:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=100)** Each question will have a type attribute which indicates the type of the question, whether it's multiple choice or true false, and there'll be an attribute named points, which indicates how many points the question is worth.
>
> **[1:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=116)** So, for this particular question, let me make this one multi-choice, and I'll give it a points value of 10.
>
> **[2:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=125)** Inside the question, we need to represent the text that will be asked of the user.
>
> **[2:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=131)** And, for this, we're going to use a question text tag.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=139)** And, on the question text, we're going to have an answer attribute which indicates the name of the possible answer that is the correct one.
>
> **[2:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=149)** So, just bear with me for a second.
>
> **[2:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=150)** I'm going to identify the answer here as number two.
>
> **[2:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=154)** So, inside the question text, I'll ask a question, what is two plus two?
>
> **[2:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=161)** So, following the question text for multiple choice questions, we're going to have a series of answer tags, and each one of these answer tags will represent a possible answer.
>
> **[2:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=173)** So, I'll have an answer tag.
>
> **[2:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=179)** And, in this case, the answer will be three, which is obviously wrong, and then we'll have a few different answers.
>
> **[3:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=187)** Okay.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=188)** So, four, five, and six.
>
> **[3:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=191)** These are all the possible answers.
>
> **[3:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=192)** And, each one of these guys is going to have a name tag.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=195)** So, this will be name one.
>
> **[3:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=197)** Alright, and then I'll copy this and put it here.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=200)** This will be name number two and name number three.
>
> **[3:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=205)** And, by the way, this is the index or the label that will be shown to the user during the quiz.
>
> **[3:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=210)** So, you can see here that I've identified that answer with the name of two is the correct one.
>
> **[3:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=216)** Alright, now for true false questions, it's a little bit different.
>
> **[3:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=220)** What we're going to do is create another question tag.
>
> **[3:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=225)** And, in this case, the type will be TF for true false, and then we'll have a points value, and I'll make that one points five.
>
> **[3:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=235)** And, then let's close off this question tag.
>
> **[3:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=239)** Now, inside a question tag, because this is true or false, all we need is a question text.
>
> **[4:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=244)** We don't need a series of possible answers, because this is not multiple choice.
>
> **[4:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=248)** So, let's go ahead and write a question text tag.
>
> **[4:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=256)** And, the question will be, let's see, broccoli is good for you.
>
> **[4:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=262)** Alright.
>
> **[4:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=263)** And, the answer to that, in this case, the answer attribute isn't going to be the name of the right answer.
>
> **[4:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=269)** It's just going to be either T or F for true or false.
>
> **[4:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=274)** And, the correct answer to broccoli is good for you is true.
>
> **[4:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=276)** So, we'll simply identify that question there.
>
> **[4:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=279)** So, that's pretty much all we need to do, okay?
>
> **[4:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=281)** We can create as many of these question tags as we want in order to build a finished quiz.
>
> **[4:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=286)** And, later on in the course, we're going to see how to build the code that loads and parses this XML file into a quiz object that is ready to be presented to the user.

> [!info]- Semantic Content
>
> **Env Vars:** xml (6)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **File Paths:** myquiz.xml (1)
> **Speakers:** - each (1)

#### [Building the app starting point](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=0)** - [Instructor] At this point, we've defined our application requirements and architecture.
>
> **[0:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=4)** And we've also created the XML file format that will define the quiz content.
>
> **[0:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=9)** So now we're ready to start building the application starting point.
>
> **[0:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=12)** So I'm going to go into the QuizApp Foundation folder and open up the pyquiz dot py file that will serve as the main entry point for the app.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=24)** The QuizApp class will be the main class for the application.
>
> **[0:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=29)** And you can see that I've already filled out some of the boilerplate user interface code.
>
> **[0:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=34)** If I scroll down a bit, you can see that there's a function named run which is called from this point here in the main entry point for the program.
>
> **[0:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=44)** So first, the startup function is called, which prints the application's greeting right here.
>
> **[0:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=50)** So you can see it prints the greeting.
>
> **[0:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=52)** And this is the greeting text right here.
>
> **[0:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=55)** Then the menu function is called.
>
> **[0:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=59)** And we can scroll up.
>
> **[1:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=61)** And we can see here that that prints the menu for the user.
>
> **[1:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=64)** So it calls menu header, and that's this information right here, so it prints out the menu.
>
> **[1:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=69)** And then the program enters a loop which will run until the user exits the app.
>
> **[1:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=75)** So let's make some changes to the code to get our starting point in running shape.
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=80)** First, let's ask the user to enter their name, so we can make the quiz a little bit more personal.
>
> **[1:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=86)** You can see that I have a username property named here in the init for the class.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=92)** So let's go ahead and set that.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=93)** So I'll set self dot username equal to the input function.
>
> **[1:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=98)** And we'll ask the user, what is your name?
>
> **[1:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=103)** And then we will print out Welcome, self dot username.
>
> **[1:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=113)** Okay, there we go.
>
> **[1:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=114)** And we will pull exclamation point on that.
>
> **[1:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=118)** And then we'll print a blank line.
>
> **[2:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=122)** Next, let's fill out the menu function to accept the user selection and execute the appropriate code.
>
> **[2:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=129)** So if we scroll down here.
>
> **[2:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=132)** So the program loop will run until the user quits the app.
>
> **[2:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=136)** So we're going to have a while loop that runs with a condition that is always true.
>
> **[2:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=143)** So while true, we're going to get the selection from the user.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=153)** And we'll ask the user for their selection.
>
> **[2:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=157)** So if they don't enter anything, then we will simply call the menu error function.
>
> **[2:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=167)** And we'll continue the loop.
>
> **[2:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=170)** So we don't want to break out just yet.
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=171)** And if we scroll and look at menu error, it simply prints out, hey, that's not a valid selection.
>
> **[2:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=177)** Please try again.
>
> **[2:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=179)** All right.
>
> **[3:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=181)** So to make the text comparison easier, what we'll do is we will convert the user's entry to uppercase.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=188)** So I'm going to call selection equals selection dot capitalize.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=195)** So now whatever the user entered, the first letter is uppercase.
>
> **[3:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=199)** And then I'm going to compare the entry to each of the possible menu options.
>
> **[3:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=203)** So if the user enters anything starting with an E, then the program breaks and exits.
>
> **[3:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=209)** So if the selection, and we want the first character is equal to E, then we'll print out self dot goodbye.
>
> **[3:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=220)** And if we scroll up a little bit, you'll see that self goodbye just simply prints out the exit message.
>
> **[3:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=226)** And then we'll break the loop.
>
> **[3:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=231)** If the user wants to print the menu again, then they will enter an M.
>
> **[3:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=235)** So I'll check to see if they entered an M.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=243)** And if they do that, I'll simply call self dot menu header one more time.
>
> **[4:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=249)** And we'll continue the loop.
>
> **[4:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=253)** And of course, the L command will list the currently available quizzes.
>
> **[4:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=258)** So I have to check for that.
>
> **[4:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=259)** So if they entered an L,
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=268)** we're going to print.
>
> **[4:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=271)** And we'll do a little carriage return and then Available Quizzes Are.
>
> **[4:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=278)** And then we'll put a little reminder here for ourselves to do this later.
>
> **[4:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=282)** List the quizzes.
>
> **[4:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=285)** And then we'll simply print out a dividing line with a carriage return at the end.
>
> **[4:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=294)** And we'll continue the loop.
>
> **[4:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=297)** And then finally, if the user wants to take a particular quiz, they can enter the T option.
>
> **[5:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=303)** So we've got to check for that one.
>
> **[5:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=306)** So if they enter a T.
>
> **[5:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=309)** Now, in this case, we're going to ask them for a number.
>
> **[5:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=312)** And this could result in an exception if they enter something that's not an integer.
>
> **[5:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=317)** So I'm going to use an exception handler here to ask them to enter the quiz number.
>
> **[5:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=323)** And I'm going to convert that to an integer.
>
> **[5:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=326)** And I'll ask them to input the quiz number.
>
> **[5:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=334)** And then I'll print You have selected quiz.
>
> **[5:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=342)** And that's going to be quiznum.
>
> **[5:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=345)** And then we'll put a little reminder to ourselves to start the quiz, 'cause we'll come back to this later.
>
> **[5:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=351)** And if there's an exception, we'll simply print out self dot menu error.
>
> **[5:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=359)** And then finally, if they entered anything else at all, then that's going to be something other than one of the available options.
>
> **[6:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=366)** So we'll simply print the menu error.
>
> **[6:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=370)** And then the loop will continue.
>
> **[6:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=373)** All right. So we have the exit, menu, list the quizzes and take a quiz options entered, so let's go ahead and save this.
>
> **[6:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=383)** And let's run what we have.
>
> **[6:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=386)** So I'm going to right-click and choose to run this in the Terminal.
>
> **[6:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=392)** All right. There's the welcome.
>
> **[6:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=393)** I'll put in my name.
>
> **[6:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=395)** And sure enough, you can see that it says, welcome, Joe, and asks me to make a selection.
>
> **[6:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=400)** So let's try M.
>
> **[6:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=401)** And you can see that that works. It repeats the menu.
>
> **[6:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=403)** I'll try L.
>
> **[6:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=405)** All right. And it says, okay, the available quizzes are.
>
> **[6:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=407)** And there aren't any yet, so that's fine.
>
> **[6:49](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=409)** Then I'll enter the T for take a quiz.
>
> **[6:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=412)** And it asks me for a quiz number.
>
> **[6:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=413)** Let's put in something that's not a number. I'll type L.
>
> **[6:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=415)** And it says, oh, that's not a valid selection.
>
> **[6:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=417)** Please try again. Okay. So I'll take a quiz.
>
> **[6:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=419)** And once again, I'll enter quiz number two.
>
> **[7:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=422)** It says, you have selected quiz number two.
>
> **[7:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=424)** That appears to be working.
>
> **[7:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=426)** And then finally, let's exit the application with an E.
>
> **[7:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=429)** And sure enough, that works.
>
> **[7:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=430)** Okay. So now we have our program at the starting point.
>
> **[7:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=434)** And we can start building the [[Representational State Transfer (REST)|rest]] of the program logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** scroll down (2), scroll up (2), right-click (1)
> **CLI Commands:** make (4)
> **Definitions:** is called (3)
> **Env Vars:** xml (1)
> **Tools:** terminal (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)


### 2. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the Question and Answer classes](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=0)** - [Instructor] As we saw earlier when we were building our application architecture, every quiz in our app is made up of a series of questions and each of those questions has a correct answer.
>
> **[0:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=10)** So it probably makes sense to start by building out the question and answer classes.
>
> **[0:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=14)** So here in my Start folder, I'm going to go into the Basics in chapter 1, and open up quiz.py, which is where we're going to maintain our code that represents the components of a quiz.
>
> **[0:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=25)** So let's start with the Question class, and we're going to organize questions into a base Question class, and then create subclasses for the true/false and multiple choice questions.
>
> **[0:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=37)** So let's create the base class first.
>
> **[0:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=40)** So every question will have a points value.
>
> **[0:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=43)** So let's get rid of this pass statement and have self.points, and we'll visualize that to 0, and there will also be a correct_answer, and that'll be the empty string.
>
> **[0:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=58)** And there will also be a text field that will hold the text of the question.
>
> **[1:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=63)** And there will be an is_correct field that indicates if the answer was answered correctly.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=71)** Okay, so we have those fields.
>
> **[1:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=73)** Now let's define the true/false questions subclass, and you can see that it derives from the Question class here.
>
> **[1:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=79)** Now this subclass doesn't add any new properties, but it does define a method named ask, which will present the question to the user and then prompt for the answer.
>
> **[1:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=89)** So let's fill out this function.
>
> **[1:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=91)** So you can already see that we have some code to ask the question to the user and then prompt for a response.
>
> **[1:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=98)** So let's first check the condition where they don't enter any text.
>
> **[1:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=102)** So if the length of response is 0, then we'll simply print Sorry, that's not a valid response.
>
> **[1:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=115)** Please try again.
>
> **[1:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=119)** And then we'll continue the loop.
>
> **[2:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=123)** Let me shrink this down a little bit.
>
> **[2:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=126)** Next, we have to check to see if the user entered a true or false answer.
>
> **[2:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=130)** So to make the comparison easy, I'll convert this to lowercase.
>
> **[2:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=136)** And then if response 0 is not equal to a t, and it's not equal to an f, that means they didn't answer either a true or false.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=153)** And so once again, we'll just print this sorry message and then the loop will continue.
>
> **[2:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=158)** And then finally, if the user entered an acceptable answer, then let's mark whether or not they answered the question correctly.
>
> **[2:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=166)** So if response [0] is equal to the correct answer,
>
> **[2:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=178)** then we'll mark is_correct = True.
>
> **[3:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=183)** And then, at this point, the loop breaks and the function returns.
>
> **[3:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=187)** All right, let's do the same thing with the multiple choice questions.
>
> **[3:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=190)** So for multiple choice, remember, each question will have a set of possible answers.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=195)** So we need to have a property that represents those answers.
>
> **[3:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=199)** So let's define that.
>
> **[3:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=202)** And that's just going to be an empty list for now.
>
> **[3:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=205)** And then just like for the true/false question, we need to have an ask function that presents the question to the user.
>
> **[3:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=211)** So let's print the question text followed by the list of possible answers.
>
> **[3:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=217)** So first, we'll print out self.text because that's the question, and then, for each answer in the possible answers, we're going to print, and we're going to print out, let's see, we'll put in what this in parentheses, and it's going to be a.name followed by a.text.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=243)** And then once again, we need to check to make sure the user entered a non empty strings.
>
> **[4:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=248)** Let's go ahead and copy that one from here.
>
> **[4:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=251)** And we'll paste that here.
>
> **[4:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=255)** And then we need to check to see if the user entered the correct choice.
>
> **[4:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=261)** So let's go ahead and copy this line here.
>
> **[4:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=266)** So we'll convert it to lowercase, just to make the comparison easier.
>
> **[4:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=270)** And then if the first letter is equal to the correct_answer,
>
> **[4:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=279)** then once again, we mark the question as being marked correctly, and then the loop breaks.
>
> **[4:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=288)** Okay, so finally, let's create the Answer class for the multiple choice possible answers.
>
> **[4:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=295)** And you can see here that we have to define the Answer field.
>
> **[4:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=298)** So we'll have self.text, and then we'll have self.name.
>
> **[5:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=308)** And let's get rid of that pass statement.
>
> **[5:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=311)** All right, so now we need to test this out to make sure that it works.
>
> **[5:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=314)** And you can see here that I've got some test code.
>
> **[5:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=316)** So let's uncomment all of this down here, and I'm going to type Control + /, and this Command + / on the Mac to uncomment all those lines.
>
> **[5:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=326)** So this code creates a couple of questions.
>
> **[5:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=329)** There's a true/false and a multiple choice question, and then runs the ask function on each one.
>
> **[5:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=338)** Then it prints out the is_correct property, down here, to see if each answer is correct so that you can see the results.
>
> **[5:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=348)** So what I'm going to do is run this.
>
> **[5:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=353)** And when I do that, we can see that I've got my first question, and it says, all right, this is a true/false question.
>
> **[6:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=360)** And I'm going to go ahead and answer that broccoli is not good for you.
>
> **[6:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=363)** So that's false.
>
> **[6:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=365)** All right, then it's asking me, oh, what is 2 + 2?
>
> **[6:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=369)** Okay, and I think 2 + 2, if I remember my math correctly, it's 4, so that's answer b.
>
> **[6:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=374)** So I'll enter b.
>
> **[6:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=376)** And then you can see that the results are printed.
>
> **[6:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=378)** And I can see I was wrong on the first question and right on the second.
>
> **[6:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=382)** So our tests appear to be working.
>
> **[6:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=384)** Our classes seem to be working just fine.
>
> **[6:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=387)** And that's all we need to do for now.
>
> **[6:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=388)** So we have the classes for the question and answers, and that will constitute the content of any one of our given quizzes.

> [!info]- Semantic Content
>
> **Code Identifiers:** is_correct (3), correct_answer (2)
> **CLI Commands:** make (4)
> **File Paths:** quiz.py (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Quiz class](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=0)** - [Instructor] Now that we've defined the classes to represent the questions and answers, let's define the quiz class itself which will represent the finished quiz to the user.
>
> **[0:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=10)** So here in chapter two, I'll open up quiz_py.
>
> **[0:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=15)** Now, the quiz class itself is not very complex, and you can see that I've already filled out some of the base parts of the class.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=24)** There's a function to print the quiz header at the start of the quiz.
>
> **[0:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=29)** There's a function to print the results, and we'll come back to that later.
>
> **[0:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=33)** And then there's a function called take_quiz, which will present the quiz to the user and then return the results.
>
> **[0:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=40)** That's pretty much it, just those three functions.
>
> **[0:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=42)** All right, so let's start by defining the properties for the quiz class.
>
> **[0:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=47)** And I'll get rid of that past statement.
>
> **[0:49](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=49)** So each quiz is going to have a name, and each quiz is going to have a description.
>
> **[0:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=58)** Remember, these are going to correspond to the XML tags that we saw earlier in the course, and then we have a list of questions.
>
> **[1:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=68)** So we'll have that be an empty list.
>
> **[1:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=70)** Each quiz is going to have a score.
>
> **[1:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=75)** Each quiz will have a number of correct questions.
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=80)** And then finally, each quiz will have a number of total points, and we'll initialize all of those, so when the quiz starts, the print header function will get called.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=92)** So let's fill in that part now that we have the properties defined.
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=96)** So we're going to print, and we'll print out the quiz name, and that's going to be self.name.
>
> **[1:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=108)** And let's go ahead and copy this, paste it a few times.
>
> **[1:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=114)** So then we'll have the quiz description, and that's going to be description.
>
> **[2:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=124)** And then we'll have the number of questions, and that is going to be, let's see.
>
> **[2:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=131)** So I'll take off these braces, and that is going to be the length of self.questions.
>
> **[2:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=144)** And then, of course, the total points, and that will be self.total_points.
>
> **[2:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=154)** And we will leave the print results function for later in the course.
>
> **[2:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=158)** That means we just have to fill in the take_quiz function.
>
> **[2:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=163)** So when the quiz is about to be taken, we first have to initialize the state of the quiz in case it's already been taken before.
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=171)** So we'll re initialize all the properties like score and correct_count, and we'll go through each one of the questions and reset that state to false so that each question is now not necessarily corrected or answered correctly, and then we'll print the header.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=200)** And now, we just need to execute each question and record the results.
>
> **[3:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=205)** So I'll loop over each one of the questions.
>
> **[3:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=211)** And then, for each question, we'll call the ask function.
>
> **[3:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=215)** And then if that question is marked as correct, then we will increment the correct_count, and we'll update the score with however many points that question was worth.
>
> **[3:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=233)** And then after we do that, we'll print out a little dividing line at the end of the question sequence, all right, and then we'll just return the results.
>
> **[4:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=247)** So we'll return a tuple of the results.
>
> **[4:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=250)** And the tuple is going to consist of the score, the correct_count, and the total_points.
>
> **[4:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=262)** And we can get rid of that past statement.
>
> **[4:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=264)** So that's pretty much the code we need to write for the quiz class.
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=268)** So now, we have a quiz class that initializes its properties, prints out its header, And then when the take quiz function is called, it initializes the state, prints the header, and goes through each of the questions and asks the user, and then returns the score, the number of correct questions, and the total number of points.
>
> **[4:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=288)** So let's go ahead and test this, and just as we did in the previous example, if I scroll down here, you'll see I have some test code, so let's go ahead and uncommon this.
>
> **[4:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=298)** All right, and I'll explain it pretty briefly.
>
> **[5:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=302)** All right, so in our test code, we create a new quiz object, and we set the name and the description, then we create a true-false question with a number of points and a right answer.
>
> **[5:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=314)** And then we append that into the questions list of the quiz.
>
> **[5:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=318)** Then we do the same thing with a multiple choice questions.
>
> **[5:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=320)** So we have the question text, the points, and the correct answer.
>
> **[5:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=324)** Then we create a series of possible answers and add each possible answer to the answers list in the question.
>
> **[5:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=333)** And then we add that question to the questions list in the quiz.
>
> **[5:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=337)** Then, we set the total points of the quiz to the points of question one in question two, and then we call take_quiz and print the result.
>
> **[5:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=346)** Now, remember, this is just test code.
>
> **[5:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=348)** When we get to the part where we parse the quiz and set the quiz up from the XML, all of this will be handled for us.
>
> **[5:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=354)** So this is just some code to bootstrap a quiz and try it out.
>
> **[5:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=359)** So what I'm going to do now is right click and choose Run [[Python (Programming Language)|Python]] File in the Terminal.
>
> **[6:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=366)** All right, and sure enough, when this runs, we see the header, so here's the sample quiz and here's the description.
>
> **[6:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=373)** So that appears to be working, that's this code right up here, all right.
>
> **[6:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=376)** And we have our first question, which is the true-false which is "Broccoli is good for you."
>
> **[6:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=381)** And you know what, I don't think it is.
>
> **[6:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=382)** I'm just going to say false.
>
> **[6:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=385)** All right, and then we get to our next question.
>
> **[6:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=387)** What is 2+2?
>
> **[6:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=388)** Well, I'm pretty sure 2+2 is 4.
>
> **[6:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=390)** So that's answer number B.
>
> **[6:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=393)** And when the quiz completes, you can see the tuple here that contains the score, the number of correct questions, 'cause I missed one, and the total number of points that were possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** take_quiz (3), correct_count (3), total_points (2), quiz_py (1)
> **Env Vars:** xml (2)
> **Cross-References:** earlier in (1), later in (1)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)

#### [Reading and parsing the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=0)** - [Instructor] At this point, we've constructed our question, answer and quiz classes, and we've used some test code to create a quiz with a couple of sample questions in it.
>
> **[0:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=10)** But remember we want to be able to store our quizzes in XML files, so that we can create new quizzes and edit existing ones without having to hard code them into the app.
>
> **[0:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=19)** So in this example, we'll see how to build a quiz object by reading and parsing an XML file.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=24)** So here in chapter three of the start, I'm going to open up the QuizParser file and I'm going to be using the SAX parser that comes with [[Python (Programming Language)|Python]] to process the XML file.
>
> **[0:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=37)** So I need to import the xml.sax module.
>
> **[0:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=40)** We're also going to be using the quiz classes that we've created, so I need to import them as well.
>
> **[0:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=44)** And then finally, I'm going to be using an enumeration to keep track of the state of the parser.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=51)** So I need to import the Enum and unique classes.
>
> **[0:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=55)** So my parser class, if we scroll down a little bit, you can see is a subclass of the ContentHandler class that the SAX parser defines.
>
> **[1:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=65)** And the functions that I override in this class will be called by the parser as the XML is processed.
>
> **[1:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=73)** So this QuizParserState class right here is just a simple enumeration used to help me keep track of which part of the XML is being processed.
>
> **[1:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=83)** So if we look at the actual XML file, and you'll notice that here in this chapter I've created a folder named quizzes, and I've copied in one of the sample quizzes from here at the root level, right?
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=94)** This is the sample quiz file.
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=96)** So if we open up the XML file, what you'll notice is that it's broken up into different types of tags, right?
>
> **[1:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=105)** And in order for my code to know, for example, that this question text tag belongs to this particular question tag, I need to keep track of the question tag that's currently being processed.
>
> **[1:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=119)** The SAX parser doesn't provide that information.
>
> **[2:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=122)** So my class needs to keep track of it.
>
> **[2:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=124)** As the SAX parser is working, it's just going to run through the file and say, okay, hey, here's this tag here, here's this tag here.
>
> **[2:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=132)** There's no really way for my application to keep track of the context of each one of these tags.
>
> **[2:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=138)** So that's up to me to do on my own, okay?
>
> **[2:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=140)** And as we get into the code, we'll see how that works.
>
> **[2:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=143)** So let's go back to the code and I apologize in advance, this is going to be a little bit of a long video, but by the end, hopefully you'll have a good understanding of how this parser works.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=153)** So let's scroll down.
>
> **[2:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=155)** So, the init function for this class defines a new property called new_quiz, which will be the quiz object that this parser returns.
>
> **[2:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=163)** And you can see that it is being initialized to a new empty Quiz object.
>
> **[2:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=167)** So I'll define some extra properties to help with the parsing, right?
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=171)** So I'll define self._parse_state, and parse_state is going to initialize to QuizParserState.IDLE, because it's idle to begin with.
>
> **[3:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=183)** And then I'm going to define a couple of utility properties called current_question and current_answer.
>
> **[3:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=194)** And these will be used while I'm parsing question and answer tags.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=200)** Then we have the parse_quiz function.
>
> **[3:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=202)** This is where all the magic happens.
>
> **[3:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=204)** So parse quiz will be called by the quiz manager class, which we haven't built yet, okay?
>
> **[3:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=209)** We'll come to that in a little bit.
>
> **[3:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=211)** It will perform the loading of the XML and parsing of the data.
>
> **[3:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=214)** And you can see that I already have some code here that loads the XML file from the path that's supplied as an argument to the function.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=221)** So all I need to do is call the parse string, on the parser class.
>
> **[3:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=226)** So I'm going to call xml.sax.parseString and I'll parse in the quiztext that was just loaded.
>
> **[3:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=237)** And then this second argument, when I pass in the value of self, that identifies this class, my QuizParser class, as the place where all the parsing functions are defined.
>
> **[4:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=248)** And that's these functions down here, okay, startElement, endElement, and characters.
>
> **[4:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=254)** The startElement function is called when the parser finishes parsing the opening tag of an XML element.
>
> **[4:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=261)** So for example, when it reaches this closing angle bracket right here of QuizML, that's when this function will be called.
>
> **[4:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=269)** The endElement is called when the parser finishes with a closing XML tag, and characters is called when the parser finishes processing text content.
>
> **[4:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=278)** So all our code needs to do is intercept each of these events and then construct the corresponding content within the quiz class.
>
> **[4:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=287)** So let's start with the QuizML tag.
>
> **[4:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=291)** All right, so right here in startElement.
>
> **[4:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=295)** So when startElement is called with the QuizML tag, we set the parser state to PARSE_QUIZ, and then extract the quiz name from the name attribute in the attrs which gets passed, and that contains all the attributes on the tag.
>
> **[5:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=310)** When endElement gets called, and we're ending the QuizML element, we set the parser_state back to being idle and that's because we've finished processing the file.
>
> **[5:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=321)** So now let's fill out the [[Representational State Transfer (REST)|rest]] of the code.
>
> **[5:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=324)** So remember that the next tag inside of QuizML is going to be the description.
>
> **[5:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=328)** It's going to contain some text.
>
> **[5:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=330)** So let's go back and handle that one, all right?
>
> **[5:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=332)** So if the tag name being processed is description,
>
> **[5:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=342)** then we're going to set the parse_state to QuizParserState and we're parsing the description.
>
> **[5:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=352)** Then, when the character's function is called for text inside the tag, we check to see if we're currently processing a description tag.
>
> **[6:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=362)** So if the parse_state is equal to the PARSE_DESCRIPTION, then inside the new quiz, we're going to set the description and we're going to add the characters that were just processed.
>
> **[6:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=382)** Then when the endElement is called, if we're currently processing the description tag, we set the parser back, the parser_state back to PARSE_QUIZ.
>
> **[6:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=395)** So if the tag name is equal to description,
>
> **[6:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=405)** then parse_state gets reset.
>
> **[6:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=413)** So this whole process makes it easy for our code to remember where we are in the XML file, so we can put the content in the right place in the Quiz object that we're building.
>
> **[7:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=425)** All right, so let's continue.
>
> **[7:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=426)** If we start parsing a question tag, then we need to see if it's true false or a multiple choice question, and create a new class to represent the question that we're currently building.
>
> **[7:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=442)** So first we're going to set the parse_state correctly, and that's going to be PARSE_QUESTION.
>
> **[7:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=451)** Then, if we check the attributes of the question, and we look at the type field and that is equal to multichoice, then we know we have a multiple choice question.
>
> **[7:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=465)** So I'm going to use my little temporary placeholder called current_question to make a new multiple choice question.
>
> **[7:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=476)** Otherwise, if the attribute's value is equal to true false, then I have to make a new true false question.
>
> **[8:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=495)** Then we set the question points to be the value of the points attribute, all right?
>
> **[8:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=502)** So that means that the current_question points is equal to,
>
> **[8:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=510)** I'm going to cast this to an int, and that's going to be the value of the points attribute.
>
> **[8:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=518)** And then we add those points to the quiz's total points property.
>
> **[8:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=523)** So the new_quiz's total points, we're going to add the current_question's points value.
>
> **[8:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=539)** Okay, so when we reach the closing tag of the question element, what we're going to do is add the current_question object to the quiz's list of questions.
>
> **[9:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=553)** And remember, we did this in code, in the testing code, in the previous example.
>
> **[9:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=557)** What we're going to do now is we're going to tell the new quiz, we're going to access the questions list, and we're going to call the append function, with my current question.
>
> **[9:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=569)** And then we're going to set the parse_state back to PARSE_QUIZ.
>
> **[9:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=580)** Now, of course, question tags have question text tags, and maybe some answer tags in them.
>
> **[9:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=587)** So we need to handle those too.
>
> **[9:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=590)** So let's scroll back up and in startElement, we're going to check to see if the tag name is equal to QuestionText.
>
> **[10:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=602)** And if it is then the parse_state gets set to parse question text.
>
> **[10:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=614)** And in the current question, we're going to set the correct_answer to the value of the answer attributes.
>
> **[10:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=627)** So the parser will encounter the text inside the question text tag next.
>
> **[10:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=632)** So we need to add that text to the current question.
>
> **[10:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=637)** So let's scroll down to the characters function.
>
> **[10:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=646)** And if the current parse_state is equal to, we are parsing a question text then we're going to set the current_question's text and we're going to add the characters to that.
>
> **[11:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=667)** And then when the closing tag is encountered, then we need to set the parse_state back to PARSE_QUESTION.
>
> **[11:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=682)** And then finally we need to parse the answer tags as they come in.
>
> **[11:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=688)** And it's a very similar process to parsing the question text.
>
> **[11:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=692)** So, let's go ahead and scroll back up to the startElement.
>
> **[11:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=699)** So if the tag name is equal to answer,
>
> **[11:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=707)** then what we're going to do is use our current_answer placeholder, and we're going to create a new Answer object, and we will set the current_answer's name equal to the value of the name attribute.
>
> **[12:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=730)** And then we'll set the parse_state to the fact that we are parsing an answer.
>
> **[12:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=740)** And then once again, once we get to the text of the answer, so if we are in a parsing state where we are parsing an answer, then we're going to set the current_answer's text to the characters that we just read.
>
> **[12:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=768)** And then of course, once we reach the closing tag, then we're going to add this answer to the list of answers for the current multiple choice question.
>
> **[13:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=782)** So for the current_question, we're going to append the current_answer, and then we'll set the parse_state back to parsing a question.
>
> **[13:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=808)** All right, (chuckles) I know that was long, but that's basically it, okay?
>
> **[13:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=812)** So this code will now read and build a fully formed Quiz object from the XML.
>
> **[13:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=820)** So we're going to try this out.
>
> **[13:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=822)** And if we scroll down, you can see that we have some test code here, and the test code will create a new QuizParser class, which is the class we just built.
>
> **[13:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=832)** It will call the parse_quiz function with the path to the XML file that we want to parse.
>
> **[13:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=838)** And then we'll just print out some values, the name of the quiz, the description, the length of the questions, the total points, and then we'll print out each of the questions just to make sure everything worked, all right?
>
> **[14:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=851)** So let's save this and let's go ahead and run.
>
> **[14:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=858)** All right.
>
> **[14:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=859)** And sure enough, you can see the output.
>
> **[14:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=861)** Right here is the name of the quiz.
>
> **[14:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=863)** Here is the description.
>
> **[14:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=865)** Okay, and then what else did we have in the output here?
>
> **[14:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=867)** We have the number of questions.
>
> **[14:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=871)** Yep. Four, that looks correct.
>
> **[14:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=873)** And then the total points, that looks correct.
>
> **[14:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=875)** And then we loop over each of the questions and print out the question text.
>
> **[14:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=881)** So everything appears to be working.
>
> **[14:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=883)** And we now have a working QuizParser that can read the XML file and produce a quiz object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** parse_state (11), current_question (7), startelement (6), current_answer (5), endelement (4)
> **Env Vars:** xml (15), sax (4), parse_quiz (3), parse_question (2), idle (1)
> **Definitions:** is called (6), is a  (1), means that (1)
> **CLI Commands:** make (3), python (1)
> **UI Navigation:** scroll down (4)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### [Creating the QuizManager class](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=0)** - [Instructor] All right, we've reached the point now where we have a working quiz parser that can read an XML file and create a quiz object from it.
>
> **[0:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=9)** But in order to work with multiple quizzes, we need to create a class that will manage all of the quiz files that the user has and take care of presenting the right quiz.
>
> **[0:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=20)** In other words, we need to build a QuizManager class in accordance with the architecture that we created earlier in the course.
>
> **[0:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=27)** So let's open the code here in step four in the Start folder.
>
> **[0:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=32)** We're going to open up quizmanager.py.
>
> **[0:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=35)** And the QuizManager class is responsible for several operations.
>
> **[0:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=40)** It maintains the list of installed quizzes, displays a list of the available quizzes, allows the user to take a particular quiz, and print and saves the results of a quiz.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=51)** So the __init__ function takes a folder path as a parameter which is the folder to find the quiz XML file is in.
>
> **[1:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=61)** This path is stored in the quizfolder property on the class.
>
> **[1:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=66)** And we're going to add a few more properties to the class.
>
> **[1:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=70)** So we'll have a property for the most recently selected quiz.
>
> **[1:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=75)** So we'll call that the quiz.
>
> **[1:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=79)** And that's going to be kept along with a dictionary object that maintains the list of quizzes.
>
> **[1:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=87)** And we'll call that the quizzes dictionary and will initialize that to an empty dictionary.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=93)** We'll also have a property that stores the results from the most recent quiz and we'll call that results.
>
> **[1:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=104)** We'll also have a property of the name of the person who's taking the quiz and we'll call that quiztaker.
>
> **[1:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=112)** So first, we need to make sure that the quiz folder exists.
>
> **[1:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=118)** Otherwise, there's a pretty serious problem.
>
> **[2:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=120)** And we're going to use the os standard library to do that.
>
> **[2:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=124)** So I'm going to call if os.path, and this is a collection of path functions that you can access from the operating system utility library.
>
> **[2:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=135)** So I'm going to make sure that a path exists and I'm going to call that on quizfolder.
>
> **[2:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=140)** And if the result of that is false, then we know we've got a problem on our hands.
>
> **[2:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=146)** So I'm just going to raise an exception at this point.
>
> **[2:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=149)** I'm going to raise a FileNotFoundError and I'm going to say the quiz folder does not seem to exist.
>
> **[2:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=163)** Now, if the quiz folder is there, then we will call the internal function to build the quiz list.
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=171)** So I'm going to call self._build_quiz_list.
>
> **[2:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=175)** And the function that builds the quiz list is this function right here.
>
> **[3:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=180)** So this function uses the scandir function on the quiz folder to build a list of the folder contents.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=188)** So to build the list, what we're going to do is create a quiz parser object and then use it on each file in the folder, adding the new quiz object to the quizzes dictionary.
>
> **[3:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=199)** So what we're going to do here is going to loop over the enumeration of the dircontents.
>
> **[3:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=213)** Okay, so each one of these dirt contents entries is going to be an index and a file that's in that folder.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=221)** And what I'm going to do is I'm going to check to see if the f variable is a file.
>
> **[3:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=231)** Then I'm going to say parser equals and I'm going to use the quizparser file to create a QuizParser.
>
> **[4:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=242)** So I'm going to create a parser for each quiz.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=243)** And the reason I'm doing this is because I'm going to get a nice new empty quiz parser for each one of the quizzes.
>
> **[4:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=249)** So all the properties will be reset to zeros and all that stuff.
>
> **[4:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=253)** So I don't have to worry about reinitializing each parser.
>
> **[4:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=256)** And then, on my quizzes dictionary, what I'm going to do is set the index + 1 to be the key.
>
> **[4:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=267)** And I'm going to call parser.parse_quiz on the file that I got back.
>
> **[4:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=274)** So remember, this is going to come back with a fully parsed quiz object, and I'm storing that fully parse quizzed object in my dictionary.
>
> **[4:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=283)** And that dictionary will be indexed, it'll have keys.
>
> **[4:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=287)** And each key will be an integer number starting at the number one.
>
> **[4:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=292)** And the reason I'm doing this, the i+1, is so that when I present all the indexes to the user in the menu, I don't want to have to start indexing at zero and then keep track of, well, 0+1 and the off by one problem.
>
> **[5:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=305)** I'm just going to have it all just be one-indexed rather than zero-indexed.
>
> **[5:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=310)** Okay, so now that we've built the list, the list_quizzes function displays the list of available quizzes to the user.
>
> **[5:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=318)** And it does this by iterating over that dictionary and printing the ID of the quiz along with the quiz name.
>
> **[5:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=324)** So that's pretty straightforward.
>
> **[5:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=325)** I'll simply have a loop.
>
> **[5:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=327)** So for each key-value pair in self.quizzes.items, I'm simply going to print.
>
> **[5:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=340)** And inside parentheses, I'm going to have the key which is going to be the index.
>
> **[5:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=347)** And then I'm going to have the value.
>
> **[5:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=352)** I'm going to print the name of the quiz.
>
> **[5:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=354)** Okay, so we're going to leave the remaining functions, right?
>
> **[5:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=357)** Take_quiz, print_results, save_results.
>
> **[6:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=360)** We're going to save that for later in the course.
>
> **[6:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=362)** For now, we're going to test what we have by exercising, you guessed it, the test code down here.
>
> **[6:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=369)** And the test code is pretty simple and straightforward.
>
> **[6:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=372)** You can see that we create a new QuizManager class.
>
> **[6:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=376)** And once again, we're going to point to the Quizzes folder that I've also copied in here from the root level.
>
> **[6:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=383)** And I've only included the one quiz just to make things simple.
>
> **[6:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=386)** And so if everything goes well, when I call the list_quizzes function, it's going to list the quizzes that have been loaded and parsed.
>
> **[6:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=394)** All right, so let's go ahead and save this.
>
> **[6:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=396)** And let's run this in the terminal.
>
> **[6:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=401)** And sure enough, you can see that quiz number one is the sample quiz.
>
> **[6:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=405)** So we have our quiz manager successfully built and it is successfully parsing the quizzes and successfully printing out the list of installed quizzes for the user.

> [!info]- Semantic Content
>
> **Code Identifiers:** list_quizzes (2), parse_quiz (1), print_results (1), save_results (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** xml (2)
> **Cross-References:** earlier in (1), later in (1)
> **UI Navigation:** open the (1), in the menu (1)
> **File Paths:** quizmanager.py (1)
> **Tools:** terminal (1)

#### [Presenting the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=0)** - [Instructor] All right, we've now reached the moment where we can present the quiz to the user from our main application.
>
> **[0:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=6)** So I've copied the pyquiz.py file here into the Start folder for chapter five.
>
> **[0:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=14)** And I've copied it from the QuizApp Foundation folder.
>
> **[0:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=17)** Remember when we worked on that back earlier in the course.
>
> **[0:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=20)** So I've copied it into the chapter five folder and now we can start connecting things together and hooking stuff up.
>
> **[0:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=27)** So let's open up pyquiz.py.
>
> **[0:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=29)** All right, first, I'm going to make a couple of changes to the application file.
>
> **[0:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=35)** I want to make the Quizzes folder location a constant value.
>
> **[0:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=38)** So I have just one place to change it in the future.
>
> **[0:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=41)** So I'm going to make that a class value up here.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=51)** And then I'm going to create an instance of the quizmanager to be used within the app.
>
> **[0:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=57)** And I'll do that here in the init function, so I'll call that qm.
>
> **[1:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=61)** And I'll create a QuizManager instance, and I'm going to pass in the Quiz folder constant as the place where the quizzes are kept.
>
> **[1:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=74)** So with that complete, I can now connect the menu options to the quizmanager.
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=80)** So first, let's let the user list the available quizzes.
>
> **[1:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=85)** So let's go down to the menu.
>
> **[1:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=87)** And remember when we made this little reminder comment to ourselves, well, let's go ahead and fill this in.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=92)** So I'm going to call self.qm on the quizmanager.
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=96)** I'm going to call list_quizzes.
>
> **[1:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=98)** We can also let the user select and start a quiz.
>
> **[1:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=103)** So down here, when the user has selected a quiz, we've already printed out, hey, you know, you've selected quiz number.
>
> **[1:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=110)** What we're going to do is call self.qm.take_quiz,
>
> **[2:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=120)** and we'll pass in the quiz number and we'll pass in the username and then we'll call self.qm.print_results.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=139)** And then in the quizmanager, let's open that up.
>
> **[2:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=144)** Let's connect up the code that lets the user actually take the quiz.
>
> **[2:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=149)** So let's collapse that down and we're going to scroll down to take quiz.
>
> **[2:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=155)** So this is the function that gets called from the main app.
>
> **[2:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=160)** So we'll set self.quiztaker equal to username, and we'll call self.the_quiz.
>
> **[2:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=172)** So we'll set the quiz equal to self.quizzes and we'll pass in the quizid that we were given.
>
> **[3:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=185)** And then on the results, we'll set the results equal to self.the_quiz and we will just simply call take_quiz.
>
> **[3:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=198)** All right, so now each quiz will present itself and let's get rid of that pass statement right there.
>
> **[3:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=204)** Okay, so let's run what we have.
>
> **[3:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=207)** So let's go back to the main application and I'm going to run this in the terminal.
>
> **[3:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=214)** All right, so let's go ahead and I'll enter my name.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=221)** So I enter my name and there's our menu.
>
> **[3:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=223)** So first, let's try listing the quizzes available, so I'll enter l.
>
> **[3:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=228)** All right, and we can see that there are two quizzes, right?
>
> **[3:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=231)** So there's Geography Fun! and Sample Quiz.
>
> **[3:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=234)** So I'm going to try taking quiz two, okay?
>
> **[4:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=241)** All right, there's our quiz.
>
> **[4:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=242)** There's the header.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=243)** We've got the number of questions and the points.
>
> **[4:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=245)** I'll answer the questions.
>
> **[4:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=246)** So to the nearest billion, how old is the earth?
>
> **[4:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=248)** I think that's number two for 5 billion years.
>
> **[4:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=251)** True or false: broccoli is good for you.
>
> **[4:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=253)** Eh, I'm still not sure, I'll say false.
>
> **[4:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=256)** True or false.
>
> **[4:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=257)** The world is flat.
>
> **[4:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=257)** Well, I know the world's not flat, so I'll say false.
>
> **[4:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=260)** And what was the color of George Washington's white horse?
>
> **[4:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=263)** Well, I'm pretty sure that was white.
>
> **[4:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=265)** Okay, so now I've completed the quiz and well, hmm.
>
> **[4:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=270)** I mean, it looks like things worked, but clearly we have some work to do in printing the results out for the user so they can see how they did.
>
> **[4:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=278)** And we'll see how to do that in the next example.

> [!info]- Semantic Content
>
> **Code Identifiers:** take_quiz (2), the_quiz (2), list_quizzes (1), print_results (1)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1), go back to (1), in the next (1)
> **File Paths:** pyquiz.py (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Calculating the results](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=0)** - [Instructor] Our quiz application is progressing nicely.
>
> **[0:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=3)** We have almost all the pieces in place.
>
> **[0:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=5)** We're able to present the user with a menu of options, load and parse quiz files, and take an actual quiz.
>
> **[0:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=13)** So now we need to add the code that presents the results to the user.
>
> **[0:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=17)** So here in the editor, in chapter six in the start folder I'm going to open up my pyquiz.py file.
>
> **[0:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=24)** And you can see in the menu code right here, after we take a quiz, the code simply calls the print results function on the quiz manager after the quiz is completed.
>
> **[0:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=37)** So let's open up the quiz manager.
>
> **[0:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=39)** And the reason why nothing's happening is because this function has not yet been filled out.
>
> **[0:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=43)** So what we're going to do is ask the quiz manager to simply inform the quiz that it needs to print out its own results.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=51)** So we'll get rid of this pass statement and we'll call self.the_quiz, and we will simply print the results.
>
> **[1:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=64)** And remember that the quiz, this is the property that holds the most recently completed quiz, right?
>
> **[1:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=70)** So you can see here in take_quiz, that's the quiz that we just took, and we're going to pass in the name of the quiztaker to personalize the results.
>
> **[1:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=81)** So now let's change the quiz code to print the results out.
>
> **[1:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=85)** So let's open up quiz.py.
>
> **[1:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=87)** And remember here in the quiz code, this is the quiz class.
>
> **[1:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=91)** We've got print_header, but we haven't printed the results out yet.
>
> **[1:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=95)** So let's add the code to print out the detailed results of the quiz.
>
> **[1:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=100)** So we'll print out results for, and we'll pass in the name of the quiztaker.
>
> **[1:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=111)** All right.
>
> **[1:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=113)** And what we'll do is we're going to print out the date that the quiz was taken, and that is going to be datetime.datetime.today.
>
> **[2:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=129)** And they will also print out questions, and that's going to be self.correct_count out of, and that's going to be the length of the questions list correct.
>
> **[2:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=156)** And then finally, we will print out the score and that's going to be self.score points out of possible
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=171)** and that's going to be self.total points.
>
> **[2:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=176)** So now we're printing out the results, and we've got that hooked up to the quiz manager right here.
>
> **[3:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=182)** And now when we call print_results we should see the results.
>
> **[3:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=185)** Let me collapse that down right there.
>
> **[3:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=187)** All right, let's try our app one more time.
>
> **[3:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=191)** So let's go ahead and run this.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=195)** And once again, I'll enter my name.
>
> **[3:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=199)** All right, let's list the quizzes.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=200)** There they are.
>
> **[3:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=201)** Let's take the sample quiz.
>
> **[3:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=202)** Whoops, got to take number two.
>
> **[3:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=205)** All right, so the earth is, let's see, it's 5 billion years.
>
> **[3:29](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=209)** Broccoli, eh, I'm not convinced.
>
> **[3:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=212)** World's not flat, so that's false.
>
> **[3:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=214)** And George Washington's white horse was white.
>
> **[3:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=218)** All right, and then we've got the results.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=221)** So the results for Joe.
>
> **[3:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=222)** Here's the date I took the quiz.
>
> **[3:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=225)** Three out of four were correct.
>
> **[3:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=227)** Apparently I missed one, and I got 23 points out of a possible 28.
>
> **[3:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=233)** Well, of course it sure would be nice if we could save these results, right, so we could review them later.
>
> **[3:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=239)** In a separate video, we'll see how to receive these results to a file.

> [!info]- Semantic Content
>
> **Code Identifiers:** the_quiz (1), take_quiz (1), print_header (1), correct_count (1), print_results (1)
> **File Paths:** pyquiz.py (1), quiz.py (1)
> **UI Navigation:** in the menu (1)
> **Speakers:** - [instructor] (1)

#### [Saving the results](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=0)** - [Instructor] One of the requirements we've decided on for the app is that the user can choose to save the results of a quiz to a file.
>
> **[0:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=7)** So what we need to do is fill out the save_results function in the quizmanager.
>
> **[0:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=13)** But before we do that, what we're going to do is, in our main application, after the user completes the quiz, we're going to ask the user if they want to save the results from the quiz that they just completed.
>
> **[0:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=27)** So what we'll do is we'll have a variable here named dosave, and we will ask the user, Save the results?, and they can answer either yes or no.
>
> **[0:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=42)** And then let's see what they say.
>
> **[0:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=45)** So we'll capitalize that result.
>
> **[0:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=50)** And if the length of dosave is greater than 0 and dosave sub 0 is equal to Y, then we will call self, and we'll tell the quizmanager to save the results.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=71)** So in a previous exercise, we already created the code that prints out the results of a quiz.
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=80)** So if we look here, remember, we have the print_results, and if we look in the code for the quiz, if we scroll down to, where's the print_results, there it is right here, so this is the code that prints out the results for the quiz that was just taken.
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=96)** Now, we could just copy and paste the code that prints the results into a separate save_results function.
>
> **[1:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=103)** But that doesn't seem like an optimal solution, right?
>
> **[1:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=105)** We've already got the results right here.
>
> **[1:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=108)** Wouldn't it be great if we just reuse the print_results function to write the results to a file?
>
> **[1:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=114)** Well, it turns out that we can, and it's pretty straightforward.
>
> **[1:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=117)** So first, let's go back to the quizmanager, and let's create a name for the file.
>
> **[2:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=124)** So first, let's get rid of this pass statement.
>
> **[2:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=128)** What we're going to do is, in the quizmanager function for saving the results, we're going to format the file name using today's date.
>
> **[2:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=135)** So I'll have today, and I'll set that to datetime.datetime.now, and then the file name is going to be, and we're going to use a formatting string for this, it's going to be called QuizResults_, and it's going to be today.year followed by another underscore, and then today.month, and then today.day.txt.
>
> **[2:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=173)** Now, obviously, the user might have taken more than one quiz on a particular day.
>
> **[3:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=180)** So if the file name exists, we're going to have to add an integer number to the end of the name until it's unique.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=188)** So we'll do that in the code down here.
>
> **[3:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=191)** Let me just collapse this down.
>
> **[3:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=193)** And what we're going to do is we'll have our counter, so we'll set that to be 1.
>
> **[3:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=198)** And then, we're going to use a little while loop.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=200)** We're going to call os.path.exists, and we'll pass in the file name.
>
> **[3:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=207)** So if that file name exists, then what we're going to do is set the file name equal to, and we'll do this same string here, so we'll just copy this and paste it.
>
> **[3:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=219)** And then, instead of just ending with the day, we'll end with the value of n, and then we'll increment n.
>
> **[3:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=230)** So that loop will run until we have a unique file name.
>
> **[3:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=235)** And then, I'm going to call with, and I'm going to open the filename for writing as f,
>
> **[4:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=249)** so that's going to be the variable that holds the file.
>
> **[4:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=252)** And then I'm going to call self.the_quiz, and I'm going to call print_results with the quiz taker,
>
> **[4:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=265)** and the file as the argument.
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=268)** So now what we're going to do is make a slight modification to the print_results function.
>
> **[4:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=274)** So let's go over to the quiz.py file and make that change.
>
> **[4:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=279)** What we're going to do is make a modification to the print_results function to accept a file argument.
>
> **[4:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=286)** And it's going to be an optional argument.
>
> **[4:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=288)** If no argument is given, it will simply default to the system's standard output stream, which is usually the terminal.
>
> **[4:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=295)** So I'm going to add a new argument here called thefile, and it's going to default to sys.stdout.
>
> **[5:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=306)** And it turns out that the standard print function can be used to print to a file if one is provided.
>
> **[5:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=314)** Otherwise, it just uses standard out.
>
> **[5:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=316)** So to do this, we supply a file reference to the print function like this.
>
> **[5:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=323)** We're going to say file=thefile that we just passed in, and we'll pass for the flush argument we'll call True, which means just write things out right away.
>
> **[5:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=337)** Some file systems maintain a cash, and we want to flush that cash each time.
>
> **[5:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=342)** So now, if print_results is called with a file argument, then that's where the output will go.
>
> **[5:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=348)** Otherwise, it will just go to the terminal as usual.
>
> **[5:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=351)** So let's update the [[Representational State Transfer (REST)|rest]] of the code to do this.
>
> **[5:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=354)** So I'm going to copy those lines right there, and I'm going to add them to each one of my print statements, and that's all we need to do.
>
> **[6:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=366)** So now, we're reusing the print_results function to write data to a file if we have one.
>
> **[6:13](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=373)** Otherwise, we just use standard out.
>
> **[6:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=375)** So let's go back to the program, and, oh, looks like I have a little bit of an error right there. What's that?
>
> **[6:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=383)** Oh, looks like I've got some extra parentheses on the ends here.
>
> **[6:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=391)** There we go.
>
> **[6:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=393)** Okay, now that looks okay.
>
> **[6:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=395)** All right, so let's go back to the main program.
>
> **[6:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=399)** Let's right click, and we'll run the [[Python (Programming Language)|Python]] file in the terminal.
>
> **[6:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=404)** Let's try this out as my name, going to list the quizzes, I'm going to take quiz 2, and let's see, earth is, and it's 5 billion years, broccoli is, I just don't believe it, I don't think it's good for you, so false, the world is flat, well, that's not true, and George Washington's White Horse is White.
>
> **[7:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=426)** Okay, so now we have the printed results, and now it's asking me, do you want to save the results?
>
> **[7:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=430)** And I'll say yes.
>
> **[7:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=432)** All right, and so now looks like everything worked.
>
> **[7:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=435)** If I go back to the File Explorer here, sure enough, you can see that there is a file here, and sure enough, it's got my results in the file.
>
> **[7:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=446)** So now, we have our fully built basic version of the quiz app.
>
> **[7:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=452)** In the next chapter, we'll see how to add some improvements to make the program even better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** print_results (8), save_results (2), the_quiz (1)
> **CLI Commands:** make (4), python (1)
> **Cross-References:** go back to (4), in the next (1)
> **Tools:** terminal (3)
> **UI Navigation:** scroll down (1), open the (1), go to (1)
> **File Paths:** today.day.txt (1), quiz.py (1)
> **Definitions:** is called (1), is a  (1)


### 3. Improvements

[↑ Back to Table of Contents](#table-of-contents)

#### [Presenting questions in random order](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=0)** - [Instructor] At this point in the course, we've completed all the basic steps needed to create a workable quiz application.
>
> **[0:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=7)** In this chapter, we're going to look at some improvements we can make to the quiz app that we've built so far.
>
> **[0:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=11)** And the first improvement we're going to tackle is presenting the questions in a random order.
>
> **[0:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=17)** This way, the quiz taker can't just memorize the order in which the questions are presented.
>
> **[0:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=22)** So here in the start folder, in the improvements chapter, let's open up the quiz.py code, and let's scroll down to the take_quiz function.
>
> **[0:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=35)** This is the function that presents the questions to the user.
>
> **[0:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=37)** And right now we're just iterating over the questions list and presenting each one in order.
>
> **[0:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=45)** What we need is a way of reordering this list so that all the questions are in a random sequence.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=51)** And it turns out there's a function in the [[Python (Programming Language)|Python]] standard library that we can use to perform this function really easily.
>
> **[0:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=58)** So let's quickly jump over to the documentation for the Python standard library.
>
> **[1:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=63)** So here in the documentation for the Python standard library, I'm looking at the section for the numerical and mathematical modules, and specifically the random module.
>
> **[1:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=75)** And this module is used to work with random numbers.
>
> **[1:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=79)** And what I'm going to do is go over here into the nav bar and click on the functions for sequences link which is this one right here.
>
> **[1:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=87)** And if I scroll down a little bit, we can see that there's a function named shuffle.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=93)** This function takes a sequence or a list as an argument, and then shuffles it in place.
>
> **[1:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=99)** And since a Python list or an array is a sequence type, we can use this function to easily shuffle the list of questions.
>
> **[1:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=107)** So let's go back to our quiz.py code.
>
> **[1:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=110)** So here back in the code, let's scroll up to the top.
>
> **[1:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=115)** So what I need to do in order to use that function is import the random module.
>
> **[2:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=120)** So I'll do that here.
>
> **[2:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=123)** And then all I need to do is shuffle the question list before the quiz begins.
>
> **[2:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=128)** Let's scroll back down.
>
> **[2:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=131)** And what I'm going to do is type random.shuffle and I'm going to shuffle self.questions.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=139)** And this happens in place.
>
> **[2:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=140)** I don't have to reassign the questions array to the result of this function, it just does it right in place.
>
> **[2:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=145)** And this is pretty much all I need to do.
>
> **[2:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=148)** This function will shuffle the questions in place and randomize the order.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=153)** So let's run this program, I'm going to save this, and let's go to the quiz.py.
>
> **[2:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=159)** All right, and then let's go ahead and run this in the terminal.
>
> **[2:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=165)** Enter my name.
>
> **[2:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=168)** And let's take one of the quizzes, and I'll take quiz two.
>
> **[2:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=172)** And you can see now, that the questions are in a different order.
>
> **[2:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=175)** So now the broccoli question is coming up first, and let's see broccoli's good for you.
>
> **[3:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=180)** Yeah, I'll say that's true.
>
> **[3:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=180)** And okay, the George Washington's horse question's coming up.
>
> **[3:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=185)** Sure, that's number three.
>
> **[3:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=186)** The world is flat.
>
> **[3:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=187)** That's false.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=188)** And how old is the earth?
>
> **[3:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=190)** Well, that's 5 billion years.
>
> **[3:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=192)** Okay, and I'm not going to save the results this time.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=195)** All right, so we've saw that order of the questions, right?
>
> **[3:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=197)** So let's go back and quickly review.
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=200)** So it came up the broccoli question, George Washington, the world is flat, and how old is the earth.
>
> **[3:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=205)** Okay, so let's try this again.
>
> **[3:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=207)** Now I'm going to take that quiz one more time.
>
> **[3:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=210)** And now you can see that the George Washington question is coming up first.
>
> **[3:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=214)** So we'll answer that one.
>
> **[3:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=215)** Okay, now the age of the earth.
>
> **[3:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=217)** Then the world is flat question.
>
> **[3:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=220)** And then the broccoli question is last this time.
>
> **[3:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=223)** So you can see that by using the standard library function, we were able to easily add a new feature to our app without having to write our own code to randomize the question order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (1)
> **UI Navigation:** scroll down (2), click on (1), scroll up (1), go to (1)
> **Cross-References:** coming up (3), go back to (1)
> **File Paths:** quiz.py (3)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** take_quiz (1)

#### [Timing the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=0)** - [Instructor] In this example, we're going to add a feature to let the user see how long it took them to complete the quiz and to do this, we need to make some changes to the code in the quiz.py file.
>
> **[0:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=12)** So here in my improvements, in chapter two, I'm going to open up the quiz file, and so what we're going to do is scroll up to the top, and what we're going to do is add a property to the quiz class to hold the completion time, and I'm going to name that self.completion time, and I'll initialize that to zero, then let's modify the code in the take quiz function to measure the elapsed time.
>
> **[0:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=41)** Let's scroll down to take quiz.
>
> **[0:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=44)** So first, let's make sure we reset the completion time each time the quiz is taken.
>
> **[0:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=50)** So we'll say self.completion time = 0.
>
> **[0:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=53)** Next, let's record the time that the user starts taking the quiz.
>
> **[0:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=57)** So we can do this by using the datetime class to mark the moment when the quiz begins.
>
> **[1:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=62)** So right here, I'll make a local variable named starttime.
>
> **[1:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=68)** I'll set that to the value of datetime.datetime.now and then.
>
> **[1:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=74)** Okay, so then we'll take the quiz, then after the quiz completes, we can mark the end time using the same method.
>
> **[1:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=81)** So I'll make another variable named endtime, and that will be datetime.datetime.now, then we set the quiz completion time to the difference between these two timestamps.
>
> **[1:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=97)** So what I'm going to do now is say that self.completion time is equal to endtime minus the start time.
>
> **[1:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=106)** All right, now let's add the completion time to the results.
>
> **[1:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=110)** Oops, it's starttime. There we go.
>
> **[1:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=112)** All right, so let's scroll back up to the results.
>
> **[1:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=116)** So here in the results, right below.
>
> **[1:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=119)** Let's see. Let's put it after the date.
>
> **[2:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=123)** So let me collapse this down. Here we go.
>
> **[2:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=126)** So we'll print that the elapsed time was self.completion time.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=139)** All right, and remember, we have to be able to save this out.
>
> **[2:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=143)** So we'll add the same code that we had from earlier in the course when we saved the results to a file.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=153)** So let's go ahead and try this out.
>
> **[2:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=155)** All right, so let me go back to the code here, open up the main app, and let's run this.
>
> **[2:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=163)** All right, okay, there's the app, put in my name.
>
> **[2:49](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=169)** Let's list the quizzes.
>
> **[2:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=170)** Let's go ahead and take one of the quizzes.
>
> **[2:52](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=172)** This time I'll do the Geography Fun quiz.
>
> **[2:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=175)** Okay, oh, so I take one. There we go.
>
> **[2:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=177)** All right, what's the largest state in the US?
>
> **[2:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=179)** That's got to be Alaska.
>
> **[3:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=181)** All right, true or false, the lowest point on land is Death Valley.
>
> **[3:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=184)** That sounds true.
>
> **[3:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=186)** Okay, so I had two questions, and we can see I got two out of two correct, and we can see the elapsed time was nine seconds, and there's some milliseconds on there.
>
> **[3:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=195)** That's not really useful, is it?
>
> **[3:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=197)** I mean, come on. That's, milliseconds?
>
> **[3:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=200)** Let's get rid of that milliseconds part.
>
> **[3:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=202)** So what we're going to do is create a new timedelta object from the existing one, and what we're going to do is round off the milliseconds because this is just way too much detail.
>
> **[3:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=213)** We don't need to know how many milliseconds it took me to take a quiz.
>
> **[3:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=216)** All right, so let's go back to the quiz code.
>
> **[3:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=218)** Oh, first, let me just say I don't want to save this, and then we'll exit.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=221)** All right, let's close. Here we go.
>
> **[3:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=223)** Okay, let's go back to the quiz, and let's scroll down to where we measure the completion time, and that is right here.
>
> **[3:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=233)** Okay, so what we're going to do is set the completion time.
>
> **[3:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=238)** Instead of just simply subtracting off the start time from the end time, what I'm going to do is create a new time delta.
>
> **[4:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=247)** So I will create a new time, datetime.timeDelta. all right?
>
> **[4:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=257)** And what I'm going to do is create a new time delta where the seconds parameter is equal to, and I'm going to call the round function here.
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=268)** So I'm going to round off.
>
> **[4:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=272)** I'm actually going to copy and paste this.
>
> **[4:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=274)** That's going to be a little bit easier.
>
> **[4:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=280)** All right, so I'll copy and paste this line.
>
> **[4:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=283)** So I've got my new completion time, and what I'm going to do here is create a new datetime.timeDelta, and I'm going to set the seconds parameter equal to rounding, and I'm going to round the self.completion time.total seconds.
>
> **[5:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=307)** So this will round the number of seconds to the nearest second value, and it will get rid of those extraneous milliseconds.
>
> **[5:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=317)** All right, so let's save this, and now let's try the updated code, okay?
>
> **[5:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=321)** So let's go back here, run this again.
>
> **[5:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=325)** All right, so here it comes and once again, put my name in.
>
> **[5:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=330)** All right, let's list the quizzes.
>
> **[5:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=332)** I'll take the Geography quiz.
>
> **[5:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=334)** Largest state, that's got to be Alaska.
>
> **[5:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=336)** True or false, let's see. Yeah, it's okay.
>
> **[5:40](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=340)** All right, and now we can see that the milliseconds are gone, all right?
>
> **[5:44](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=344)** So now we have a nice clean way of showing the user how long it took them to complete the quiz.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Code Identifiers:** timedelta (2)
> **File Paths:** quiz.py (1)
> **Speakers:** - [instructor] (1)

#### [Redoing wrong questions](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=0)** - [Joe] All right, let's add one more improvement to our quiz application.
>
> **[0:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=3)** We're going to give the user a chance to redo questions that they got wrong.
>
> **[0:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=8)** To do this we just need to make a modification to the quiz file.
>
> **[0:12](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=12)** So, let's go ahead and open up the code here in the Improvements section, and we'll open up quiz.py.
>
> **[0:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=19)** So, if the number of questions that the user got correct is not equal to the total number of questions then some of them must be wrong.
>
> **[0:31](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=31)** So, we're going to insert the new code after the endtime is recorded in case the user decides not to redo the wrong ones.
>
> **[0:38](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=38)** So, remember, in the previous example we allowed the user to see how long it took them to take the quiz, but if they want to redo questions then we'll have to record a new endtime.
>
> **[0:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=50)** However, if they answer the question no then we want to keep the original endtime, all right?
>
> **[0:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=55)** So, here's what we're going to do.
>
> **[0:56](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=56)** We're going to write if self.correct_count, no, not that one.
>
> **[1:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=61)** There we go, correct.
>
> **[1:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=62)** If the correct count is not equal to the length of self.questions that means that I must've gotten some of them wrong.
>
> **[1:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=71)** So, then we're going to ask the user, so we'll input,
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=80)** it looks like you missed some questions.
>
> **[1:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=87)** Redo the wrong ones, right?
>
> **[1:32](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=92)** And then tell them to input a yes or a no.
>
> **[1:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=99)** All right, and we'll convert that to lowercase all in one fell swoop.
>
> **[1:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=106)** Now, if the user wants to try and retake some of the questions then we need to build a list of the questions that have incorrect answers.
>
> **[1:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=117)** So, we're going to do this in one line with a [[Python (Programming Language)|Python]] list comprehension.
>
> **[2:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=122)** So, if the response, if they enter anything starting with a y, okay, then we'll make a new variable here called wrong_qs.
>
> **[2:17](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=137)** And we're going to set that to the result of a Python comprehension.
>
> **[2:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=141)** So, we're going to filter over all of the questions and only choose the ones that are marked as wrong, right?
>
> **[2:27](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=147)** So, we'll look for each question for all the questions in self.questions if q.is_correct is equal to false.
>
> **[2:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=162)** So, this will give me a list of all the questions that are marked as incorrect, and then we'll just simply ask the wrong questions again.
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=171)** So, what I'm going to do is copy this code right here.
>
> **[2:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=177)** So, we'll copy this, and we'll paste it in here.
>
> **[3:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=181)** And we'll indent it properly.
>
> **[3:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=183)** And instead of looping over self.questions we're going to loop over the wrong questions.
>
> **[3:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=191)** So, for every q in the wrong questions list we'll ask it again, and then we'll do the same thing.
>
> **[3:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=196)** If it's correct then we'll add the correct count, we'll do the points, and so on.
>
> **[3:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=201)** Then after the retake we'll record the new endtime for the quiz.
>
> **[3:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=206)** So, we'll copy this line here, all right?
>
> **[3:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=210)** And we'll paste it in here.
>
> **[3:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=213)** So, now we've calculated the new endtime in case the user has said sure, I'll redo the wrong questions.
>
> **[3:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=219)** So, let's go ahead and save this.
>
> **[3:41](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=221)** And now let's open up the application.
>
> **[3:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=225)** And let's run this.
>
> **[3:49](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=229)** And let me collapse that down.
>
> **[3:50](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=230)** All right, so my name's Joe, let's list the quizzes.
>
> **[3:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=235)** All right, let's take the sample quiz.
>
> **[3:57](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=237)** Whoops, there we go, sample quiz.
>
> **[3:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=238)** All right, true or false, broccoli is good for you?
>
> **[4:01](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=241)** Let's just get that one wrong.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=243)** To the nearest billion how old is the earth?
>
> **[4:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=245)** Let's get that one wrong as well.
>
> **[4:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=247)** Okay, George Washington's White Horse, well, that's a white horse.
>
> **[4:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=250)** There we go.
>
> **[4:11](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=251)** And the world is flat, that's false, okay?
>
> **[4:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=254)** And you can see that because I got some questions wrong it's asking me hey, it looks like you missed some questions.
>
> **[4:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=259)** Redo the wrong ones?
>
> **[4:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=260)** So, I'll say sure, let's do 'em.
>
> **[4:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=262)** All right, oh, okay, apparently I got the broccoli question wrong.
>
> **[4:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=264)** Broccoli is good for you, sure, okay, fine.
>
> **[4:26](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=266)** Obviously that's true.
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=268)** And to the nearest billion how old is the earth?
>
> **[4:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=270)** Eh, let's get it right this time.
>
> **[4:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=273)** And you can see that now I've got all the questions correct.
>
> **[4:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=276)** There's the elapsed time, right?
>
> **[4:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=277)** Because we chose to retake the quiz, or, well, redo the wrong questions the time was elongated.
>
> **[4:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=283)** So, now I have all the data correctly, the new time, the new score, and the new points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (2), python (2)
> **Code Identifiers:** correct_count (1), wrong_qs (1), is_correct (1)
> **File Paths:** quiz.py (1)
> **Definitions:** means that (1)
> **Speakers:** - [joe] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=0)** - [Instructor] All right, well, we've reached the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=2)** I hope you enjoyed following along with me as we built a working quiz application in [[Python (Programming Language)|Python]].
>
> **[0:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=8)** Now, as I said at the beginning of the course, sometimes the best way to learn is to build something real and exercise all the theoretical skills you've built up over time.
>
> **[0:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=16)** Now, maybe you've already had some ideas on how to further improve and build on the app we've created in this course.
>
> **[0:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=22)** So I've got some suggestions on where to go next that might be able to help you further your Python learning journey.
>
> **[0:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=28)** If you feel pretty comfortable with your Python skills and you want to take your knowledge to the next level, consider watching Advanced Python.
>
> **[0:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=36)** If you want to learn more about using some of the pre-built Python code available in the standard library, then take a look at Python Standard Library Essential Training and Learning the Python Standard Library.
>
> **[0:48](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=48)** To learn more about using [[Object-Oriented Programming (OOP)|object-oriented programming]] techniques with Python, you can refer to Python: Object-Oriented Programming.
>
> **[0:55](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=55)** And finally, if you want to see how to incorporate some of the great third-party libraries available in your Python programs, consider watching Python Essential Libraries.
>
> **[1:05](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=65)** These courses, along with many others in the library, can help make you a better Python programmer.
>
> **[1:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=70)** And you can apply the concepts from them here in this course as you continue to involve and improve on this program.
>
> **[1:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=76)** I hope to see you again in another one of my courses soon.
>
> **[1:18](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=78)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** python (12), make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-project-build-a-quiz-application-2476116)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Python Hands-On Practice]]
← [[Building the Classic Snake Game with Python]] | **7 of 14** | [[Create an Open-Source Project in Python]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)