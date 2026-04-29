---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-c-plus-plus-22993675
url: "https://www.linkedin.com/learning/learning-c-plus-plus-22993675"
duration_minutes: 191
duration: 3h 11m
level: Beginner
updated: 1/31/2024
learners: 8439
skills:
  - C++
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-cpp-4489005/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFFyyr75fh80g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706572609334?e=2147483647&amp;v=beta&amp;t=kibo-DzGRpI3g_EbIAlFJPOY7L5soeY_IF_JT-zKkb0"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with C++]]'
prev_courses:
  - '[[Introducing Functional Programming in C++]]'
next_courses:
  - '[[Web Servers and APIs using C++]]'
path_nav: '[{"path":"Getting Started with C++","position":3,"total":5,"prev":"Introducing Functional Programming in C++","next":"Web Servers and APIs using C++"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20C%2B%2B.md)

![Learning C++](https://media.licdn.com/dms/image/v2/D4E0DAQFFyyr75fh80g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706572609334?e=2147483647&amp;v=beta&amp;t=kibo-DzGRpI3g_EbIAlFJPOY7L5soeY_IF_JT-zKkb0)

# Learning C++

> C++ is one of the most powerful and widely used programming languages of all time. It is also one of the oldest programming languages in use today. In this course, learn the basic elements of this object-oriented programming language that moves the world. Instructor Eduardo Corpeño begins with setting up the development environment and introducing the basic elements of object-oriented programming.

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675) | 3h 11m | Beginner | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Getting Started]]** (4 videos)
- **[[#2. Data Types]]** (14 videos)
- **[[#3. Structures, Classes, and Pointers]]** (12 videos)
- **[[#4. Control Flow]]** (6 videos)
- **[[#5. Functions]]** (5 videos)
- **[[#6. File I/O]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Get up and running with C++
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=0)** - [Eduardo] C++ runs the world.
>
> **[0:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=2)** It is one of the oldest programming languages in use today, and for good reason.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=7)** Chances are most of the computationally demanding software you use like operating systems, console, video games, or databases for your bank account and social media all have some or most of their source code written in C++.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=23)** You can rest assured that this programming language isn't going anywhere in the near future.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=28)** It'll enable you to create programs that are powerful, dependable, and efficient.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=34)** You'll learn how to write simple programs using the object-oriented programming paradigm while working on a series of programming challenges.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=43)** I'm Eduardo Corpeno.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=45)** I've been teaching C and C++ for over 20 years, so come join me.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (1)
> **Speakers:** - [eduardo] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=0)** - Before we start, there are some things you should know.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=4)** First and foremost, this is an introductory course on the C++ programming language, so you may or may not have experience programming.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=14)** Either way, some experience in any programming language may be useful.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=18)** Although you don't need an IDE to run your C++ code, I will use Visual Studio Code running on GitHub Codespaces.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=29)** This is a cloud-based platform embedded in the GitHub repository, which allows you to easily follow along with the code on your web browser without having to install anything.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=40)** Of course, you may use your favorite C++ development environment instead if you prefer.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=46)** Just make sure to use the C++ 17 standard or later.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=51)** You may want to read the documentation of your development environment for this.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=56)** It's usually a Google search away.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=58)** Finally, as you advance through the course, you will need to read some parts of the C++ documentation.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=66)** For this, I recommend [cppreference.com](https://cppreference.com), which is a free online reference for C and C++ in the form of a Wiki.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=76)** I occasionally contribute to it, and you should too once you get enough experience in C++.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), finally, (1), this, (1)
> **Tools:** github (2), visual studio (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** before we start (1), install (1)
> **CLI Commands:** make (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Env Vars:** ide (1)
> **Documentation:** the documentation (1)

#### Using the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] Let me show you how to find the exercise files in the GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=5)** This is a single branch repository and you can find the code related to each video under the source folder.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=12)** Inside you will find one folder per chapter.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=15)** Let me click on chapter 5.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=18)** The source folders are named with the chapter number followed by the video number.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=23)** Now for most videos, two folders are provided and their names end with a lowercase letter b for begin or e for end.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=34)** The beginning folders contain the code as it is shown at the beginning of the videos.
>
> **[0:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=39)** These are the folders you want to work with if you intend to follow along.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=43)** Now the end folders contain the code as it is left at the end of the video for your reference.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=50)** So to work with this code, you have a few options.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=55)** If you want to download the code and use it in your favorite IDE, you may do so by clicking on the green code button.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=62)** Under the local tab, you can clone the repository or download the code in a zip file.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=69)** However, I want to invite you to try following the exercises using GitHub code spaces, a cloud-based IDE you may use with this course.
>
> **[1:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=79)** Although you may create a code space on the course repository, it will not allow you to push your changes so they would only be saved inside your code space.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=90)** Because of this, I recommend that you create your own copy of the repository on your GitHub account so you can keep any changes that you've made.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=100)** Even if you later decide to delete a code space.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=104)** To create your own copy of the repository, you can click on the fork button.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=110)** Then review the name and description of your fork.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=114)** Keep the check checkbox checked and click on create fork.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=119)** Now you have your own copy of this repository where you can start a new code space.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=125)** This fork version is the same as the original repository, but it will let you push your own changes.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=132)** Let me start a code space from GitHub and show you how everything is already set up for you to start coding.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=140)** All you need to do is click on the code button.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=145)** And under the code spaces tab, you can start a new code space or open an existing one.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=151)** I'll create a new one.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=154)** Setting up the code space may take a while.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=157)** Once started, you will see a cloud version of Visual Studio Code with your repository as an open folder so you can browse to find any of your files.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=168)** First, let me hide the top bar and change the appearance to full screen.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=175)** All the exercises in this course are console applications, which means that they run on the text terminal rather than a graphical user interface.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=185)** At the left, we can see all the files in the repository.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=189)** For example, let me show you the exercises for chapter 2, and let's say we want to see the exercise file for the sixth video in chapter 2.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=199)** This would be the beginning folder.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=203)** Notice that it's named "02_06b", and the ending folder would be "02_06e".
>
> **[3:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=213)** Here's the code.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=214)** Now let me show you the startup code for this video, which is the only one in Chapter 0.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=221)** All main sources in the course are called CodeDemo.cpp.
>
> **[3:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=226)** Now let me move the bottom and left panes out of the way.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=231)** This is a simple application that adds two numbers entered by the user.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=236)** Visual Studio Code is already set up for you to compile, run, and debug your code by simply pressing F5 or the debug button at the top right.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=248)** The first time you run a program in a code space, the debug console will pop up in the bottom pane.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=255)** You may safely click on the terminal tab to see your application.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=259)** Remember, you only need to do this once per session.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=263)** Now let me maximize the terminal.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=267)** The program is asking for two numbers to add.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=270)** Let me enter 3.5 and 5.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=275)** Then it shows the result of the addition.
>
> **[4:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=281)** Great, now let me show you what you should do if you get a compiler error.
>
> **[4:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=286)** When you get an error message, it doesn't mean that the compiler failed because the computer made a mistake.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=292)** No, it means that there's some error in the code you provided, so it's very important to read the information in the error messages error.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=302)** Let me show you what I mean.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=304)** Let's add the word "bug" at the end of line 11 to get a syntax error when I try to build.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=311)** You can already see some red squiggles in the code.
>
> **[5:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=314)** Let me run it.
>
> **[5:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=318)** You will get this message box reporting that there are errors in your code and asking if you want to debug anyway, show the errors or abort.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=328)** Although it may seem as the recommended option, do not click on debug anyway as it will run the last successful build of your project.
>
> **[5:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=338)** Instead, I recommend that you select to show the errors.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=342)** You also get to select not to show this dialogue again.
>
> **[5:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=346)** Now the problems tab will show you a list where you can read each of the error messages.
>
> **[5:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=352)** Clicking on an error will show you the line in the source code where the error was was found.
>
> **[5:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=359)** If you have experienced debugging, you'll note that most errors are correlated and fixing the first one will probably solve many others.
>
> **[6:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=369)** I'll remove the bug.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=373)** Now, since this is Visual Studio Code, it includes a debugger with all its features like break points, watches, and step-by-step execution.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=383)** Let me show you.
>
> **[6:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=384)** You can toggle a break point by hovering over the gutter at the left of the line numbers and clicking on the red dot.
>
> **[6:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=393)** I'll do this for line 15, which is right after getting the numbers from the user and before calculating the addition.
>
> **[6:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=402)** Now let me press F5 and I will enter two numbers again, 2.5 and 9.25.
>
> **[7:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=420)** As you can see the execution stopped at the break point and we can see the state of the local variables at the top left.
>
> **[7:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=428)** You can see the values I entered in the number variables and an initial value of zero for the result variable because the addition hasn't been calculated yet.
>
> **[7:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=439)** We have the usual execution buttons, continue execution, step over, step into step out, restart and stop.
>
> **[7:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=458)** Let me execute one line of code with the step over button.
>
> **[7:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=462)** Pay attention to the result variable on the left as it changes from zero to the result of the addition.
>
> **[7:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=469)** You can also add expressions to the watch section at the left, for example, num_1 times num_2.
>
> **[7:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=479)** This watch value will change whenever the variables change, so let's execute the rest of the program with the continue execution button.
>
> **[8:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=492)** Lastly, let me show you how to push your changes to your repository.
>
> **[8:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=497)** Let me add a comment in this source file and let me open the file explorer at the left.
>
> **[8:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=508)** You'll notice that there is an M at the right of the file name as well as an asterisk on the main branch at the bottom.
>
> **[8:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=517)** These are indicators that there are changes in the repository.
>
> **[8:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=521)** Now let me open the source control panel.
>
> **[8:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=524)** In here, you can also see that two files have changed.
>
> **[8:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=528)** Now notice that one of these files has no extension.
>
> **[8:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=532)** It is simply called "CodeDemo".
>
> **[8:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=535)** That's the executable we just created, and we usually don't want to keep it in the repository, so you should only select the source files you want to keep.
>
> **[9:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=544)** So let me stage the changes only for CodeDemo.cpp by clicking on the plus sign next to it.
>
> **[9:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=552)** Next, I will enter a commit message, and now instead of clicking on commit, I will click on the down arrow and select commit and push.
>
> **[9:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=564)** There, your changes have been pushed to your repository.
>
> **[9:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=568)** The first time you may be asked if you want VS Code to run get fetch periodically, click yes and it will automatically sync with your repo.
>
> **[9:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=578)** And remember, if you close the browser, you don't need to start a new code space.
>
> **[9:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=583)** You can simply reopen the existing code space from GitHub and you'll see your session right where you left it.
>
> **[9:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=591)** So that's it.
>
> **[9:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=592)** Try Codespaces and enjoy coding in your browser without having to install anything.
>
> **[9:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=598)** Great, we are good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), continue (2), this, (1), delete (1), while. (1)
> **Tools:** github (5), visual studio (3), terminal (3), vs code (1)
> **UI Navigation:** click on (7), open the (2), checkbox (1), toggle (1), select the (1)
> **Exercise Files:** download the (2), exercise files (1), zip file (1), exercise file (1), source code (1)
> **Definitions:** is a  (2), means that (2), is an  (1)
> **CLI Commands:** find (4)
> **Versions:** 3.5 (1), 2.5 (1), 9.25 (1)
> **Prerequisites:** set up (2), install (1)


### 1. Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Elements of object-oriented programming
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=0)** - [Instructor] C++ is not just an extension of the C programming language.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=5)** There are actually several differences between the two languages, and we can't assure that one completely contains the other.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=13)** The main addition of C++ is that it's an object-oriented programming language.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=18)** So let's briefly go through some basic elements of object oriented programming.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=23)** First, we have modeling.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=25)** A model is a representation of something in reality.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=29)** Modeling is a crucial concept in object-oriented programming.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=33)** We may model anything, a cow, a car, a person, you name it.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=38)** Now the tricky part is choosing which elements to include in your models.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=43)** For example, let's suppose we want to model a car.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=47)** We might include variables to represent every aspect of a car we could think of like make model weight, owner, color, age, and so on.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=56)** You may agree with me that there are countless aspects we could add to our model, so we may never finish our model of a car.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=64)** Thus, the challenge of modeling is to figure out which features are enough to simplify our representation without oversimplifying it by leaving important details out.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=76)** For a car salesperson, the car represents among other things, its price, make, model, number of seats, and some performance metrics.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=87)** For a passenger taking a higher ride, the car may represent a means for getting from point A to point B with a capacity to carry the passengers and their things.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=99)** For a parking lot owner, the car may be simply represented by its size.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=105)** Another important element of object-oriented programming is encapsulation.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=111)** Simply put, encapsulation means keeping data and operations within their models.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=116)** Well-defined models must only include information about themselves.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=122)** Model operations must be concise.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=124)** If a function is supposed to do A and B, it shouldn't do anything else.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=130)** For example, the model of a car should not include the cost of filling its gas tank.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=135)** That's more an element of the gas station model.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=139)** Next, we have classes which are the C++ construct for models.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=145)** Classes contain members of two types, data and functions.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=150)** For example, our car class may have a data member for the make or brand of the car, and a member function to change the paint color of the car.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=160)** By the way, an instance of a class is known as an object.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=164)** That is to say if we have three variables of the car class, it is said that we have three car objects.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=173)** Among other attributes, class members may be public or private.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=179)** Public members are accessible by any part of the code.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=182)** That is by code outside the class.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=186)** Private members, on the other hand, are only accessible within the class.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=191)** But wait, there's a third access specifier.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=195)** Protected members can be accessed in inherited classes, which leads us to the concepts of inheritance and polymorphism.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=204)** A class may have subclasses based on it.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=207)** A subclass may inherit members from their superclass.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=212)** For example, the animal class may have a data member for the number of legs, which is inherited by the Dog subclass.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=221)** Some subclass may add other members.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=223)** For example, the Bird class may add a member for wings, and there's an interesting feature related to inheritance called polymorphism, where the superclass may define some function, but the inherited version of this function is implemented differently among the subclasses, making these sibling classes polymorphic.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=247)** You may be familiar with these elements from other languages like Java or Python.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=252)** And I'm happy to report that C++ implements all of this and more.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), public (2), private (2), class. (2)
> **Analogies:** for example (5)
> **CLI Commands:** make (3), python (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)

#### Creating a simple program in C++
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=0)** - [Instructor] Let me write a hello world in C++, so I can show you the syntax and structure of the code.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=7)** One of the most important details of C and C++ is that they are case sensitive, so keep an eye out for the exact spelling of keywords and names.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=17)** So a hello world is the traditional simple program that prints out a message to the screen.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=22)** It usually takes a few lines of code.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=26)** In the first line, we will include the libraries we'll use.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=30)** This is a pre-processor directive, which we'll talk about later.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=34)** Notice that we are using a library called IO Stream, which is a part of the C++ standard library, and contains objects and functions to print text to the screen, and receive text from the keyboard.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=48)** Pre-processor directives do not end with a semicolon.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=53)** Next, we have the main entry point of your program, which is a function that is executed by default.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=60)** We'll get to the syntax of functions later, but for now, let me tell you that the main function must return an integer denoted by the INT keyword.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=70)** Then comes the name of the function.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=72)** Remember, this is case sensitive, so I'll type all lowercase main.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=78)** And finally, we have the parameter list.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=81)** The main function may receive either nothing, or a set of strings that come from the command line.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=87)** Just the way you run commands with arguments in the Windows, MacOS, or Linux command lines.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=95)** For our hello world, we'll use an empty list of parameters, and this is enclosed by parentheses.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=103)** Now, the body of a function is a block of code, and blocks are delimited by curly brackets, symbolizing the beginning and end of the block.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=112)** Now you have to decide how you prefer to place your curly brackets.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=117)** I personally prefer to open blocks at the end of the control statement, and close them in a dedicated line indented at the same level as the opening line, like this.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=130)** This is a very popular style, and you will see it throughout the course, but you are free to use whichever you prefer.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=138)** You may want to Google indentation styles for this.
>
> **[2:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=142)** Another important detail is that C++ code, like most programming languages, would very soon become virtually unreadable by a human if you don't properly indent your code.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=156)** Most development environments have a feature to help us with this, but you must get used to indenting your code so that any new block of code is indented a fixed number of spaces, or a single tab to the right.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=171)** Keep in mind that C++ compilers do not require you to indent your code, unlike Python, which enforces indentation.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=180)** The next line of code will be where we print out our message.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=185)** We'll do this by using an object from the IO stream file, which is a member of the standard library denoted by STD.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=193)** This membership is represented by the scope resolution operator, double colon.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=199)** The object is called C out, which is short for character output.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=204)** This represents the output window, and we must send some text to it.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=210)** We do that with the left-bound insertion operator, or double less than characters.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=216)** To the right of this operator, we enter whatever we want to send to the object at the left, and we may use the operator consecutively like this.
>
> **[3:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=227)** The message will be "Hi there."
>
> **[3:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=229)** After that, I'll send a new line character, which is available by another standard library symbol, and L, which is short for end line.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=240)** We finish almost every line of code with a semicolon, but there are exceptions.
>
> **[4:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=246)** For example, the lines that end with a closing curly bracket.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=250)** Lastly, since main is a function that returns an integer, we'll return zero with the return keyword.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=258)** You may use parenthesis for the return value, or not, I usually do.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=263)** The reason I return zero is because zero is traditionally used to mean that no errors came up in the program.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=271)** Other values usually represent error codes, which you are expected to detail in your documentation.
>
> **[4:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=279)** That's it for the hello world.
>
> **[4:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=281)** Let's see it running.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=283)** And there's the hi there message as expected.
>
> **[4:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=286)** Now, after running a program, the debugger prints the message you can see right below our output, reporting that execution is done.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=296)** But it's a little difficult for me to tell where my output ends and the debugger's exit message begins.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=303)** So let's go back to the code and make one final adjustment.
>
> **[5:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=308)** Right before returning, I will print out two end line characters to separate my output from the debugger's exit message.
>
> **[5:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=317)** In fact, I will do this in all my main functions in the course, just for convenience.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=323)** Let me run it so you can see the difference.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=328)** There you go, much better.
>
> **[5:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=330)** Now we can see the high there message on its own.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=333)** Great, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6), this. (3), default. (1), finally, (1)
> **Definitions:** is a  (7), short for (2), is called (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** int (1), std (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### Challenge: Console interaction
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=0)** - [Instructor] It is time to do some console interaction.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=8)** In this challenge, your task is simple.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=11)** Ask the name of the user and say something back.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=15)** Do this by printing a message addressing the user's name.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=18)** For this, you'll need to use the standard libraries, cin and cout objects.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=24)** We still haven't used cin, so let me show you how.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=29)** For this example, we'll use something similar to our hello world.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=33)** Since we are going to get a string from the user, we'll need to include the string header file from the standard library as shown in line six.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=43)** Then in line nine, I have declared a string variable named str, which I'll use to hold the user input.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=51)** In the next line, we have the cin object, which is used in the opposite direction as cout, so we type cin, then use the right bound insertion operator pointing to the target string variable.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=67)** After running this line, the user input will be in str.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=73)** Lastly, I added a line to print out str.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=77)** So let's see it running.
>
> **[1:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=79)** At this point, I'm expected to enter some text, so let me type in my name.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=86)** After I hit enter, we'll see my name printed back once more.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=92)** And there it is.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=94)** Now be warned that cin only works for single words.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=99)** If you want to use it for strings that contain spaces, you'll have to use a special function you'll see later in the course.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=107)** Feel free to modify this startup code to create your solution.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=111)** Remember, you have to print a message requesting the user's name, then print a message using that name.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=119)** This shouldn't take you more than 10 minutes.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=122)** When you are done, take a look at my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), function (1)
> **Cross-References:** in the next (2), later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Console interaction
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=0)** - [Instructor] Here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=7)** In line nine, we have the string variable declaration.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=11)** Next, we have a C outline to print the message asking for your name.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=16)** Notice that I'm using STD Flush at the end.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=20)** This makes sure that the output is completely sent to the terminal before waiting for the user input.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=27)** Next, we capture the user input into SDR in line 11.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=32)** Remember, this only works for single words, and finally, the response message is composed of a sequence of insertion operators to C out.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=43)** First, we have the string, nice to meet you.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=46)** Then we send SDR, then an exclamation sign, and finally the end line character.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=54)** This sequence works as a concatenation of all the elements involved.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=58)** Let's see it running.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=61)** Here's the prompt message.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=62)** I'll type in my name and there's the response.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=69)** Great. Let's learn some more about C plus plus.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** sdr (2), std (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Types

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Basic data types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=0)** - [Instructor] As with any programming language, it's essential to know the supported data types.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=5)** C++ supports a very basic set of data types.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=9)** Let's start with integers.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=11)** Integer numbers may be signed or unsigned.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=15)** There are several integer types in C++.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=18)** There's the int type with a bit length that's implementation dependent.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=23)** Usually it's 32 bits, but it's sometimes 16 bits.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=29)** We also have the char type, which is short for character.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=33)** It's eight bits wide, and it was designed to represent ASCII characters, but it's just a bite.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=40)** You may use it as an integer if you want.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=43)** Because these types may vary in length and sign, a very useful C library called stdint.h contains portable data types that specify the length and sign support of their types.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=57)** For example, uint32_t is an unsigned 32 bit integer, and int8_t is a signed eight bit integer.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=69)** C++ also supports floating-point numbers.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=73)** Floating-point numbers represent real numbers as opposed to integers.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=78)** I'm talking about numbers like pi or 1.333, 0.5, or minus 12.44.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=87)** These types implement the IEEE754 binary floating-point standard.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=93)** There are three floating-point types in C++, float, double, and long double.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=100)** The difference between float and double is that double has a much larger range and precision than float.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=107)** However, it's way more computationally expensive to work with doubles than floats.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=113)** Unlike C, C++ supports a boolean type to represent true and false.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=119)** The keyword for this type is lowercase bool.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=122)** In the language, the lowercase true and false keyword are defined, so you may assign either of these to a bool variable.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=131)** Also in the language, anything other than zero means true, and zero means false.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=138)** Next, we have the string class.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=141)** Now, strings are not natively supported by the language.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=145)** As in C, you may work with strings as arrays of characters terminated with the value zero.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=153)** However, strings are supported in the C++ standard library as a class.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=159)** The string header file provides the string class and lots of string manipulation functions.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=165)** Lastly, we cannot talk about C or C++ without talking about pointers.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=171)** This is a special data type for memory addresses.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=175)** Pointers may act as references to existing variables.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=180)** And the same pointer may be used to access many different variables sequentially.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=186)** Now, this hasn't been an exhaustive description by any means, so I recommend that you visit [cppreference.com](https://cppreference.com) for a detailed description of the supported types.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=198)** Go to the language section and click on basic concepts.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=202)** Once in there, go to the Basic Concepts tab and click on Fundamental Types.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=208)** Alternatively, you may simply Google CPP reference fundamental types.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=214)** You'll see that there are numerous variants of each type and that most of them are implementation dependent.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=221)** Take a minute or two to skim through this page.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), let (1), type, (1)
> **UI Navigation:** go to (2), click on (2)
> **Definitions:** is a  (2), short for (1), is an  (1)
> **Env Vars:** ascii (1), ieee754 (1), cpp (1)
> **Versions:** 1.333 (1), 0.5 (1), 12.44 (1)
> **File Paths:** stdint.h (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Analogies:** for example (1)

#### Variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=0)** - [Instructor] There are a handful of important aspects about variables in C++.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=6)** Variables are temporary data storage units.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=9)** They must be declared prior to being used.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=13)** The declaration of a variable must specify a type and a name, and declarations may contain initializations.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=23)** In your code, you'll have to assign values to your variables.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=27)** So let me briefly show you the syntax for some of the most popular types.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=33)** Integers are entered as numbers with a special format for the radix.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=38)** The default is decimal, like 123 or minus 5.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=43)** Now a leading zero means octal like 023.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=47)** So be careful with this.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=50)** For hexadecimal, start with 0x, like 0x3A, and for binary, start with 0b as in 0b1100.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=62)** You may specify unsigned with a trailing upper or lowercase U as in 23U.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=69)** Floats are entered with the decimal point and at least one digit to the right, even if the value happens to be an integer.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=78)** And you must specify the float type with a trailing f as in 23.0f or 0.0f.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=87)** Doubles are the default floating point type.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=90)** So you write the number like a float literal without the trailing f.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=95)** Charts may be entered as integers as long as they fit in 8 bits, but their ASCII character interpretation is entered between single quotes.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=105)** Here we have lowercase a, uppercase X, and two special characters that use the backslash escape character.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=114)** These are the null character to the limit the end of a string, and the new line character.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=121)** Finally, you've already seen string literals between double quotes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1), type. (1), finally, (1)
> **Env Vars:** ascii (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Using variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=0)** - [Instructor] Let me show you an example of variable declaration and usage for several types.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=6)** I'll start with the "hello, world" code we wrote earlier.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=10)** Variable declarations must include the type and name of the variable, and they may include an initialization.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=18)** Let me go to Line 7 and declare two integer variables, a and b, and let me initialize b to 5.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=26)** Notice that you may declare several variables in one line, separating them by commas.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=32)** Also, notice that these two variables are at the same level of indentation as the main function.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=38)** This means that a and b are global variables.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=43)** Global variables are accessible to all parts of the code, and because of this, the memory for global variables is managed statically by the compiler, so they are allocated in the data segment of memory.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=58)** Once the program ends, their memory is freed.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=62)** On the other hand, variables may be local to their scope.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=67)** By that, I mean that you may declare variables inside functions or inside loops.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=73)** These variables are accessible within their scope and within scopes inside of it.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=80)** Once the execution exits a scope, its variables are deleted and the memory is freed.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=87)** These are called automatic variables because they are managed by the compiler and they are usually allocated in the stack segment of memory, which is temporary.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=98)** Let me declare a local Boolean variable in the main function.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=102)** Let's call it my_flag.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=106)** Variable names have rules, and you should read about these rules.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=110)** Again, I recommend [cppreference.com](https://cppreference.com) for this.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=115)** To make a long story short, variable names must start with a non-number character and may contain letters, numbers, and some symbols like hyphens and underscores.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=128)** Also, variable names cannot be the same as any keyword in the language, like int or return.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=136)** The best programming practices generally recommend avoiding global variables for an extensive variety of reasons.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=145)** This is why in the rest of the course we will stick to local variables as much as possible.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=152)** This is a good time to show you how comments are entered in C++.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=157)** A double slash comments everything to the right, so these are useful for one-line comments.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=164)** Delimited comments are useful for multi-line comments.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=168)** These are enclosed by slash, asterisk and asterisk, slash.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=173)** Like this.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=175)** Now let's use those variables.
>
> **[2:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=178)** In the main function, let me assign a value of 7 to a.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=184)** Notice that the assignment operator works from right to left.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=188)** I will assign false to the flag.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=192)** Now let me copy and paste the C outline and modify it to show the values of a, b, and the flag.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=200)** So let's try it.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=203)** There you go.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=204)** A equals 7, b equals 5, and the flag equals 0 because 0 is false in C++.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=214)** Now let me add some code to toggle the flag and print out three things, the value of the flag, a plus b, and b minus a.
>
> **[3:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=226)** Let's see it running now.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=230)** And there we have the results again, plus three additional lines showing that the flag is 1, which is a valid true value in C++, a plus b is 12, and b minus a is minus 2.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=247)** Lastly, let me show you what happens when we use an unsigned variable to store a negative number.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=254)** Let me go to Line 24 and add a third integer declaration.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=259)** This one will be an unsigned int called positive.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=263)** Making declarations anywhere in the code and not just at the beginning of a scope is a nice feature of C++ which hasn't always been supported in the history of C.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=275)** Now let me assign the same subtraction to this new variable and print out its value.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=283)** Let's see it running.
>
> **[4:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=285)** Now we get that b minus a unsigned equals... Look at that number.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=291)** If you use your calculator, you'll see that this number is 2 raised to the 32nd power minus 2, and this is the two's complement representation of minus 2 in binary.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=305)** The binary number is the same, but the interpretation is different.
>
> **[5:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=310)** That's why you must be very careful when deciding whether you want to use signed or unsigned integers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (3), this. (2), this, (1), return. (1)
> **Definitions:** is a  (3), means that (1)
> **UI Navigation:** go to (2), toggle (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** my_flag (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Expressions, assignments, and operations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=0)** - [Instructor] Now let's talk about three important components of C++ code.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=5)** Let's start with expressions.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=7)** An expression is a symbolic representation of a calculation like the expressions you see in algebra.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=14)** An expression may contain variables, constants, and operators, and every expression must produce a value.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=23)** An assignment is a line of code that assigns a value to a variable.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=28)** It must contain a left-hand side and a right-hand side expression.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=33)** The left-hand side expression must be able to hold a value and the data types of both expressions must match.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=42)** This last point is not enforced by the compiler, as you saw when we assigned a negative number to a unsigned variable, so you as a programmer are responsible of keeping your code consistent.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=55)** Lastly, let's review some of the most important operations in C++.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=59)** We have arithmetic operators, plus for addition, minus for subtraction, asterisk for multiplication, forward slash for integer division, that's quotient, and the percentage symbol for the modulo or remainder of a division.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=76)** The forward slash operator is also for floating point divisions.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=80)** It all depends on the operands you use.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=84)** We also have bitwise Boolean operations.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=87)** That is binary operations performed bit by bit between the operands.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=92)** We have single ampersand for bitwise and, single vertical bar for bitwise or, tilde for bitwise nought, and caret for bitwise xor.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=104)** Again, these are bitwise operations, not logical.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=108)** Now logical operators are the ones you probably want to use in an if statements condition.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=115)** These evaluate two operands that can either be true or false in the same logic we've seen so far.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=121)** Remember, zero means false and anything else means true.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=126)** The logical operators are double ampersand for and, double vertical bar for or, and exclamation sign for nought.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=135)** We have relational operators to compare values, double equal sign for equality.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=141)** Be careful with this one.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=143)** A common mistake is to use the single equal sign in a conditional, and the problem is that this is valid because it returns the assigned value.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=152)** Next, we have exclamation sign equal for not equal, greater than, less than, greater or equal and less or equal.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=162)** And finally, we have three popular pointer operations, prefix asterisk for indirection, which dereferences the pointer to its right, which is its only operand.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=173)** That is to say it gives you access to the variable the pointer is pointing to.
>
> **[2:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=178)** This is not the multiplication operator despite sharing the same character.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=183)** We also have prefix ampersand for the address of operator, which returns the address of the variable at its right, which is its only operands.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=193)** And we have the arrow operator, which gives you access to members of classes or structures from a pointer.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=200)** You may have noticed the lack of a logical xor operator, and that's an interesting exercise to think about.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=207)** Here's a hint.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=208)** What does the not equal relational operator do?
>
> **[3:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=212)** Since you'll be seeing a lot of expressions, assignments, and operations up ahead, you may want to consult [cppreference.com](https://cppreference.com) to learn more.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=221)** Just Google CPP reference operator precedents and you'll see an exhaustive list of operators and their precedents.
>
> **[3:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=229)** Take a minute to browse through it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), match. (1), finally, (1)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1), common mistake (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Env Vars:** cpp (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### Type inference with auto
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=0)** - [Instructor] In the C++ 11 standard, the language got a very nice addition called type inference.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=7)** It's a convenient way of creating a variable with the type that suits the value you want to assign to it.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=14)** The only catch is that you must initialize the variable at declaration.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=20)** Let me show you how it's done.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=22)** Starting at line nine, I'll declare seven variables of automatic type named A, B, C, D, E, F, and G and initialize them with different constant types.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=33)** The placeholder for the type is the auto keyword, so A will get a small integer, let's say eight.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=43)** Now, B will get a very large integer, one that exceeds 32 bits.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=49)** An 11-digit number will do the trick.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=53)** C will get a floating point number, say 3.14, with a trailing lowercase f.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=60)** That's the constant specifier for floats.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=64)** D will also get 3.14 without the trailing f.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=69)** Floating point constants are doubles by default.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=75)** E will get the Boolean constant true, which is one.
>
> **[1:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=79)** I'm using the constant true because it is defined in the bool type.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=85)** Variable F gets a single character d.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=89)** Notice that it's enclosed by single quotes.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=92)** And lastly, G will get the string C++ rocks.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=98)** Notice that strings are enclosed by double quotes.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=102)** Now starting at line 17, I'll print out the type of each variable in a separate line.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=109)** To do this, I'll use the typeid operator from the included typeinfo header file from the standard library.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=118)** It receives a variable and returns its type.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=122)** Now the name of this type is accessed by the name member function.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=128)** So let's see it running.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=132)** As you can see, we have the expected types, i for int, l for long, f for float, d for double, b for bool, c for char, and PKc for pointer to const char.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=148)** That's a fancy name for string.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=151)** Please bear with me on this exercise.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=154)** The typeid operator is implementation dependent, so it may behave differently if you are using a compiler or IDE other than Visual Studio Code on GitHub code spaces.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=167)** Some implementations showed descriptive strings like Int64 or double to represent types.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=174)** So don't worry if you get different results or even an error in this exercise.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=179)** I simply wanted you to see how the auto keyword performs type inference.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), default. (1), this, (1), function (1)
> **Versions:** 3.14 (2)
> **Tools:** visual studio (1), github (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### Preprocessor directives
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=0)** - [Instructor] C++ is a compiled language.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=3)** So the code goes through a pipeline of software tools which extract the semantic elements written by the programmer.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=10)** One of the first steps your code goes through is the preprocessor, which is not related to the microprocessor.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=19)** It's actually a piece of software and part of the compiler tool chain.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=24)** There are several directives addressed to the preprocessor, which contain information about what to add or remove in the code.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=33)** The compiler will receive a somewhat modified, or rather, preprocessed version of the code.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=41)** These directives like #include, #define and #ifdef are useful for including libraries in your code, defining constants and selecting blocks of code for different compiling scenarios.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=56)** So let's see some popular directives.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=59)** First off, all directives start with the hash character, also known as number or pound, and they occupy one line each.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=68)** There's actually one directive I've been using in all the exercises you've seen so far.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=74)** That's the #include directive.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=77)** This one is used to insert the reference file into your code replacing the directive line.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=84)** Yes, the whole code in that file.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=87)** In line five, we have #include <iostream>.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=91)** Notice that <iostream> does not have a path or extension.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=95)** Also notice that it is enclosed in angle brackets.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=99)** That means that the preprocessor will look for the file in a predefined location, usually specified by the development environment like a default include folder.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=111)** So you can think of this as including known standard libraries or installed libraries.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=117)** <iostream> is part of the standard library, and these files usually don't require an extension like .h or .hpp.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=128)** The same applies to the string header file.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=131)** So let me include it.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=133)** Next I'd like to show you a header file from the C Standard Library I mentioned earlier.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=139)** That's <stdint.h>.
>
> **[2:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=142)** This file provides fixed length definitions for integer types so that you don't have to depend on the implementation of primitive types like int or char.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=153)** Now this header file is from the C Library, so it has C code in it.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=159)** Remember, C is not the same as C++.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=163)** So some of the most popular C header files in the standard library have been made available for C++ code in their special version preceded by lowercase C.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=175)** So this one is named cstdint.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=179)** The second directive I want to show you is #define.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=183)** This directive defines symbols to mean whatever you type at the right.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=189)** These symbols are called macros.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=192)** You should be careful if you are defining something other than a simple constant because what this directive does is find and replace.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=202)** So for example, let me define a constant called uppercase CAPACITY and it will mean 5000.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=211)** Some of us prefer to name our defined constants with all caps.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=215)** Now, every time the preprocessor finds the symbol CAPACITY all caps, it will replace it with 5000.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=224)** Also notice that directives do not end with a semicolon.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=228)** Now let me quickly write the contents of the main function.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=232)** Starting at line 12, I'll declare two of different sizes.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=237)** One will be a 32-bit signed integer from stdint.
>
> **[4:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=243)** The format goes like this: It starts with a U if it's unsigned, this one is not, then int, then the bit length, which is 32, and lastly, _t for type.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=259)** This variable will be called large and it will be initialized at CAPACITY.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=266)** The next one will be an unsigned 8-bit integer.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=270)** I'll name it small and initialize it at 37.
>
> **[4:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=276)** Now let me add these two variables and save the result into the one called large.
>
> **[4:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=285)** By the way, there's a shorthand operator for this, the plus equal operator like this.
>
> **[4:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=293)** So this line is equivalent to large = large + small.
>
> **[4:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=298)** And finally, let me print out the value of the large integer.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=304)** The third type of directives I'll show you are used for conditional inclusion of code.
>
> **[5:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=310)** These are #ifdef conditionals and they work in conjunction with defined directives.
>
> **[5:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=317)** Remember, these are the preprocessor directives, not the if-then statements in the programming language.
>
> **[5:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=324)** Here's how they work.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=326)** Let me add a line to report that we are about to perform the addition.
>
> **[5:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=331)** This can be useful for debugging purposes, so I don't want this line to make it to my final implementation.
>
> **[5:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=339)** So the way to include code conditionally is by using the #ifdef directive, which means if defined, it includes the following block of code if a macro has been defined previously in your project.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=354)** So now in line 14, I'll type #ifdef DEBUG.
>
> **[5:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=358)** The block ends with the #endif directive.
>
> **[6:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=362)** And the block of code will be a single line where I print the message about to perform the addition.
>
> **[6:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=370)** Also, notice that directives are not usually indented with the code.
>
> **[6:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=375)** Great.
>
> **[6:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=376)** So let's see it running without defining the DEBUG macro.
>
> **[6:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=381)** So here we only see that the large integer is 5037.
>
> **[6:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=389)** Now notice what Visual Studio Code is doing to line 15.
>
> **[6:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=394)** It's grayed out.
>
> **[6:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=396)** Now let's add the definition of DEBUG in line 10.
>
> **[6:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=403)** Notice that debug doesn't need to extend to any value if it's only used for an #ifdef directive.
>
> **[6:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=411)** Let's try it again.
>
> **[6:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=414)** Now you can see the debug message when that line was executed.
>
> **[6:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=419)** So there you have it.
>
> **[7:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=421)** Now you are free to choose whether to leave or comment out the debug definition line to include or exclude portions of your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), include, (1), include < (1), require (1), function (1)
> **Env Vars:** capacity (3), debug (3)
> **Definitions:** is a  (1), known as (1), means that (1)
> **CLI Commands:** find (1), make (1)
> **File Paths:** stdint.h (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)

#### Constants
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=0)** - [Instructor] Now, let me tell you a little more about constants in C++.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=4)** Constants are identifiers with values that will not change during execution.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=10)** They are useful as parameters in your code, for example, to set the size of a screen or the length of a memory buffer.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=19)** Constants may be implemented with defined directives or as regular variables.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=25)** On the one hand, we may create constants with pre-processor directives.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=31)** The #define directive schedules a find-and-replace operation so that the code that is sent to the compiler has all the instances of the #define symbol replaced by its value.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=43)** These defined symbols are known as macros.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=47)** An example would be to define the number of rooms in a house as four.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=52)** Now, you should be aware that the use of #define is sometimes discouraged and considered a bad practice.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=58)** That's because macros don't have a context and there's no compiler enforcement for basic features, like types and syntax correctness for macros.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=68)** Besides, there's a better alternative.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=71)** You can define regular variables as constants using the const qualifier.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=77)** This is used in a regular variable declaration.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=81)** Remember that declarations specify a type, so the compiler will notice any irregularities in the code related to the type.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=90)** Also, scope encapsulation is enforced, so you have the order embedded in the language.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=96)** Lastly, let me give you a warning.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=99)** The const qualifier is not exactly the same in C and C++.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=104)** The C version only means that a variable cannot change, but it lacks most of the features implemented in C++.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=113)** That's one of the reasons why macros are more common in C than C++.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), const (2), type, (1), type. (1)
> **Definitions:** known as (1), means that (1)
> **Warnings:** be aware (1), warning (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### Arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=0)** - [Instructor] Arrays are collections of data.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=3)** Each element is accessible by an index.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=6)** Elements are homogeneous, meaning that they are all of the same data type.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=11)** Arrays are fixed in size, so you may not resize them.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=16)** And lastly, elements are continuous in memory.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=19)** That means that the whole array is a sequential block of memory addresses.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=26)** So let me show you some arrays.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=28)** Let's start in line eight with an array of integers where we want to store the age of four people.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=35)** The syntax goes like this.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=37)** First, we specify the type, that's int.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=41)** Then comes the name of the array age, and then between square brackets, the capacity of the array.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=49)** We'll use four.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=52)** Now let me assign values to each element in the array.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=56)** Now this is important.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=58)** Arrays in C and C++ are indexed from zero to N minus one, where N is the capacity of the array.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=67)** This is a common source of bugs for beginners, so please try to keep it in mind.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=72)** To access an element for reading or writing, you simply enter the elements index between square brackets after the name of the array, as you can see in line 10.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=84)** Now let me assign the remaining elements.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=88)** Once again, notice that I've indexed from zero to three because indexing starts at zero.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=96)** Next, let me print out the contents of the array.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=99)** I won't use loops just yet, so bear with me.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=106)** All right, that should do it. Let's see it working.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=111)** There you have it.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=112)** The ages are 25, 20, 19 and 19, just as expected.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=120)** As with scaler variables, you are allowed to initialize arrays at declaration.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=126)** You do that by providing a list of values between curly brackets.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=131)** So in line nine, let me define a new array of three temperatures in degrees Celsius.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=138)** Let's use floats for this.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=141)** Now, notice that I will not specify the length between the square brackets.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=146)** That's because I will assign a list with a constant length, let's say 31.5, 32.7 and 38.9.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=157)** Notice that I didn't type an F at the end of each constant, so that's actually a list of doubles.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=164)** Sometimes this is okay.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=167)** In this case, the compiler can, safely, assign the float version of those values to your array.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=173)** To learn more, you can go to [cppreference.com](https://cppreference.com) and search for implicit conversions.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=180)** I'll tell you more about type casting or type conversions later.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=185)** Also notice that although I am initializing this array at declaration, auto does not work for arrays.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=194)** So the type needs to be specified.
>
> **[3:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=197)** And now let me add print lines for this array at the end of the main function.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=205)** Let's see it working.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=207)** Once again, here we have the expected values.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=213)** Now let's add some constants to our code, so let's go back to the declaration of the integer array H.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=221)** Here, I have used a number for the length, but suppose that the length will be used several times in the code.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=228)** If we'd like to change that length, refactoring the code could be tiresome.
>
> **[3:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=233)** Instead, we should use a constant with a name for this.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=237)** Remember, we have two options, macros and constant variables.
>
> **[4:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=243)** Let's use a macro first.
>
> **[4:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=246)** So let me go to line seven and define H length as four.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=252)** Notice that I did this outside the main function, but it wouldn't have been a local variable if I had placed it inside the main function either.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=262)** Remember, this is a macro and macros have no scope.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=267)** Now let me change the symbol in the array declaration to age length.
>
> **[4:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=274)** Let's compile, and we have errors.
>
> **[4:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=282)** This message box is asking if we want to keep debugging, show the errors or abort.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=288)** Let's see the errors.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=290)** The first error says that the compiler expected a closing square bracket at line seven.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=297)** The reason for this error is that our constant definition had a semicolon at the end as if it were a line of C++ code, but it's a pre-processor directive.
>
> **[5:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=309)** You see, semicolons at the end of directives are not optional.
>
> **[5:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=313)** They should not be there.
>
> **[5:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=316)** Quite often, error messages are correlated.
>
> **[5:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=320)** If we look at the second error, it's referring to line 10 where the array is declared using the faulty macro.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=328)** So let me fix that and let me add an extra line that uses the H length symbol for it to be useful.
>
> **[5:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=337)** I'll print the length of the array before printing its contents.
>
> **[5:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=343)** HRA has H length elements. Let's see it working.
>
> **[5:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=351)** As you can see, the length is shown correctly.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=354)** The HRA has four elements.
>
> **[5:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=358)** Now let me show you the recommended alternative to macros.
>
> **[6:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=362)** First, I'll comment out the macro definition in line seven, and now I'll type constant H length equals four inside the main function.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=373)** This will be local to main.
>
> **[6:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=376)** And also remember, this is a C++ line of code so it requires the equal character for the assignment and the semicolon at the end.
>
> **[6:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=386)** Now instead of int, I should use a more appropriate type for sizes.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=391)** That's the size T type. There you go.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=395)** Just as a sanity check, let me run this to confirm everything went well.
>
> **[6:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=402)** Great. Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), function (4), this. (3), type. (2), type, (1)
> **Definitions:** is a  (4), means that (1)
> **Versions:** 31.5 (1), 32.7 (1), 38.9 (1)
> **Env Vars:** hra (2)
> **UI Navigation:** go to (2)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Cross-References:** go back to (1)
> **Best Practices:** recommended (1)

#### Strings
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=0)** - [Instructor] As I mentioned earlier, strings are not a type natively supported by the language.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=6)** However, C++ supports the same implementation of strings as the C programming language.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=12)** In C, strings are arrays of characters.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=16)** That is, a sequence of consecutive characters ending with the null character, which is encoded as zero.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=24)** More importantly, the string class in the C++ standard library is a widely-used model for strings with lots of useful functions.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=36)** Let me show you some examples of C character strings and the string class.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=42)** Partly, my goal is to talk you into using the string class rather than character arrays, because, well, the string class is the intended way of handling strings in C++.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=55)** I'll start in line six, including the string header, which contains the string class.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=62)** I'm also including the cstring header, which contains functions to handle character array strings.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=69)** Remember that the letter c at the beginning of the header file name means that this is part of the C standard library.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=78)** Now starting at line 10, I'll declare two character arrays as in C and two string objects as in C++.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=88)** The first character array will be called array_str1.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=93)** It will be able to hold 25 characters and I will initialize it to a string constant.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=100)** But first, let me define a constant for the length above.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=105)** Now, I want you to see that strings are somewhat supported by the language, at least constant strings are.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=113)** They are enclosed by double quotes.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=115)** So let me write "Hey guys! " and leave a space at the end.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=121)** This constant string means a sequence of ASCII characters terminated by zero.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=128)** All eight bits of the character after the last space are zero.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=133)** The second array will be called array_str2.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=139)** This time, I won't specify a length and I'll initialize it to "What's up?"
>
> **[2:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=146)** Now, let me do something very similar with two objects of the string class.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=151)** I'll name them std_str1 and std_str2, and initialize them with similar messages.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=161)** Now, let's concatenate the two character arrays and the two string objects separately.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=168)** I want to give you an idea of how to do this in both implementations.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=174)** First, for the character array, the cstring header file provides the strcat family of functions.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=182)** Different IDEs enforce different variants of these functions.
>
> **[3:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=187)** For example, Visual Studio Code in GitHub Codespaces allows me to use the strncat function, but Visual Studio for Windows enforces the use of an alternative implementation called strcat_s.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=205)** It depends on your standard library distribution.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=208)** Again, I'll use the strncat function, which takes in three arguments.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=215)** First, the destination string, which has the first part to concatenate and will hold the resulting concatenated string.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=224)** Then, we specify the second array to concatenate.
>
> **[3:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=229)** And lastly, the maximum length to produce.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=232)** I'm using LENGTH1, or 25, because that's the size of the destination string.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=239)** Now, this function modifies the first string, which is not always convenient.
>
> **[4:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=245)** Let me print that out.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=248)** As for the string class objects, I can concatenate the strings inside the printing line of code.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=255)** There's a very cool feature of C++ called operator overloading.
>
> **[4:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=260)** Overloading an operator means that you can redefine the operation performed by an existing operator, tapping into the semantics of the language.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=270)** A nice example of this is the plus operator, which for numbers is a simple addition, but for the string class, it means concatenation, like this.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=283)** Another convenient feature of this is that none of the operands get modified.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=288)** Both strings remain intact after performing the operation.
>
> **[4:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=293)** This way, I can simply add these two strings together, so to speak.
>
> **[4:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=298)** Let me run this.
>
> **[5:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=301)** And here, you can see both messages correctly stitched together, "Hey guys! What's up?" and "Hi everybody! How's the going?"
>
> **[5:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=310)** That's it. I hope you find the string class convenient.
>
> **[5:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=314)** You should have a very good reason to resort to character arrays in C++, and the reason is usually to make your code compatible with existing C code.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=326)** This hasn't been an exhaustive demonstration of the capabilities of the string class by any means, so please go to [cppreference.com](https://cppreference.com) and check the entry on the string class for a detailed description of its functions and operators.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (3), function (3), this. (2), class, (1)
> **Definitions:** is a  (2), means that (2)
> **Tools:** visual studio (2), github (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ascii (1), length1 (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Type casting
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=0)** - [Instructor] It's time to talk about type casting, one of the most valuable elements of C++, which gives you virtually full control of the data you are working with.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=11)** Simply put, type casting is specifying how to interpret a piece of data.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=17)** It's useful for converting data types.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=20)** For example, you may have a 32-bit integer which you want to convert to a floating point number.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=28)** Remember that floats and integers have very different encodings.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=34)** The syntax is simple.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=35)** Just type between parentheses the type you want followed by an expression that evaluates to the value you want to convert.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=45)** Let me show you a quick example of type conversions.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=49)** This first example will have implicit conversions.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=52)** That is, conversions that don't explicitly cast the values.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=58)** You've seen some of these before.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=60)** For this, I'll use three variables starting at Line 9.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=65)** The first one is a float named flt for float.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=70)** The second will be a signed 32-bit integer named sgn, as in signed.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=78)** And, lastly, an unsigned 32-bit integer named unsgn, as in unsigned.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=86)** Now I'll go to Line 13 and start assigning values to these variables.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=92)** First, let's assign 7.66 to the float.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=97)** Remember, an f character at the end of a floating point constant means that it's a float constant.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=104)** But this one lacks that trailing f.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=107)** So it's a double constant.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=110)** And the IDE knows this.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=111)** Let me hover over this value, and you'll see that it's recognized as a double.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=117)** If I add the trailing f, it now becomes a float.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=122)** Now for this example, I want to show you that it is possible to assign a double constant to a float variable.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=129)** So I will remove the trailing f.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=132)** In fact, to make it a bit more interesting, let's make this a negative number.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=138)** This double constant will be implicitly converted to float.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=143)** Now let me assign the same value to the remaining variables.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=147)** So let me assign flt to sgn.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=150)** Since we cannot assign a floating point value to an integer variable, the type will be converted.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=158)** This is another implicit type conversion, or casting.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=162)** When you assign a float or double to an integer variable, the value gets truncated.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=168)** So we expect minus 7 here.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=171)** Next, I'll assign sgn to unsgn.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=176)** That is, I'm trying to assign a negative number to an unsigned variable.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=182)** Since this is just not reasonable, this time, the number will be copied as is.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=189)** That's the 32-bit version of the two's complement of 7.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=194)** This is the same binary number, but it means different values in the variables.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=200)** Let's see their values.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=201)** I'll write a printing line for each, indicating their types.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=207)** Let's see this running.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=210)** So here we have the original number for the float type, minus 7.66.
>
> **[3:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=218)** We also get the expected value for the signed number, minus 7.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=222)** And for the unsigned integer, we get that big number.
>
> **[3:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=227)** So if you grab your calculator and enter 2 to the 32nd power, and then subtract 7, you'll get this number.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=236)** So this is the two's complement representation of minus 7.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=240)** However, it is stored as an unsigned number.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=244)** So the most significant bit is 1, and that means a big number.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=251)** Now let's see our first explicit cast in Line 19.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=256)** For the last variable, let me change what we are sending to the screen by casting the variable to a signed 32-bit integer.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=266)** Now let's run it again.
>
> **[4:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=269)** And there it is.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=270)** The third value shown is minus 7.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (1), this. (1), type, (1)
> **CLI Commands:** make (2)
> **Versions:** 7.66 (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Type casting examples
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=0)** - [Instructor] Now let's see a few more examples of type conversions.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=4)** First, I'll convert a temperature value in degrees Fahrenheit to Celsius.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=10)** This time I will use two regular int variables, starting at line nine.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=16)** Remember, the length of the int type is implementation dependent, but I'll stick to small numbers.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=23)** Let me start by initializing the Fahrenheit variable to 100.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=28)** The conversion to Celsius goes like this, celsius = (5 / 9) * (fahrenheit - 32); Let's see what we get if we leave the expression like this.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=42)** So let me print their values and run the code.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=47)** As you can see, we get zero degrees Celsius, so something must be wrong.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=54)** The problem is that the expression (5 / 9) is a so-called constant expression, which the compiler takes care of.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=63)** It doesn't make it to the code that will be executed by the processor.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=68)** Moreover, since both operators of that division are integer constants, the operator calculates the integer division, the quotient.
>
> **[1:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=79)** So the quotient of (5 / 9) is 0.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=84)** As you can see, Visual Studio Code is showing just that.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=89)** To get the correct conversion coefficient, we need a floating point division.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=93)** We may do that by converting either of those numbers to a float or double.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=99)** That's because expressions always convert the types of their values to the largest type present.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=106)** So here I may explicitly cast the 5 to float, or alternatively, I could enter the constants as floats or doubles.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=115)** Here I will do both.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=117)** 5 will be explicitly cast to float and I will rewrite the 9 as 9.0, which is a double.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=126)** Now let's see it working.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=129)** There!
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=130)** 37 degrees Celsius seems more like it.
>
> **[2:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=134)** Now, for another example, I'll show you how to extract the integer part and the fractional part of a floating point number.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=143)** Let's use a float named weight and let me assign 10.99 to it.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=150)** This is a good moment to show you a nice feature of C++.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=155)** You are allowed to declare variables anywhere in the code, as opposed to having to declare them at the beginning of their scope.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=163)** You may take this for granted if you are used to modern programming languages, like Java or Python, but this wasn't very common back in the 1980s.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=174)** Okay, now I'll print the float value in one line, the integer part in another line, and the fractional part in a third line.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=186)** So in line 21, I'm printing the floating point number, which is weight.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=191)** The integer part is the truncated version of weight.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=195)** We get that by casting weight to an integer type I'll use int.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=201)** Now for the fractional part, I'll need to get rid of the integer part and then shift the decimal digits left to get an integer of as many decimal places as I want to show.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=214)** So, to get rid of the integer part, I can subtract the same integer part from the floating point number.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=223)** This partial expression should contain 0.99.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=228)** So I'll multiply this number by a power of 10 so that the integer part of the result contains all the decimal places I want to show.
>
> **[3:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=238)** Since I want four decimal places, I'll use four zeros or 10,000.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=247)** Now, we are almost there, but this expression is still a float, so we need to cast it to int.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=255)** There, now it's looking good.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=258)** Let's see it working.
>
> **[4:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=261)** There you have it!
>
> **[4:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=262)** The float is 10.99.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=265)** The integer part is 10, and the fractional part is 9899.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=271)** Shouldn't this be 9900?
>
> **[4:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=274)** Well, yes, but remember that we are using floating point numbers, which are approximations with a small error.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=283)** Now, this is not a limitation of C++ or its libraries.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=287)** It's a limitation of the floating point number representation.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=291)** You'll get the same result if you try this in Python or Java.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=295)** These are the real numbers you use in your computers and smartphones every day.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=300)** You'll get a better approximation with doubles, maybe enough to show 9900 in the fractional part.
>
> **[5:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=308)** So try changing the type of weight to double and see what happens.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), this. (1)
> **Versions:** 10.99 (2), 9.0 (1), 0.99 (1)
> **CLI Commands:** python (2), make (1)
> **Definitions:** is a  (3)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Enumerations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=0)** - [Instructor] It's time to introduce the concept of enumerations.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=4)** In C++ an enumeration or enum, is a convenient way of defining a set of named integer constants.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=13)** It is declared as a list of identifiers, known as enumerators, which are assigned consecutive integer values starting from zero.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=22)** That's why it's called an enumeration.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=25)** Now, enumerations of this type were inherited from the C programming language, so they weren't really designed with object-oriented programming in mind, and that makes them inappropriate for C++ code in most cases.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=42)** One such problem is that C style enumerators exist in the global scope, which may lead to naming conflicts or namespace pollution.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=53)** Another problem is that C style enums lack strong type checking, allowing implicit conversions between enums and integers, which is a safety hazard.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=65)** A much better alternative that was introduced in the C++ 11 standard are enum classes, also known as scoped enums, or strongly typed enums Enum classes effectively address namespace pollution by confining the enumerators within their own scope, reducing conflicts in the global namespace.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=90)** Also, enum classes are strongly typed, which significantly enhances type safety in your code.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=98)** This prevents implicit conversions between enums and integers, reducing potential errors.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=104)** Enum classes are aligned with modern C++ best practices and encourage better code organization and fewer errors.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=114)** So let's see the benefits of using enum classes over C style enums.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=120)** Here we have a startup program that has a C style enumeration in line eight, it is called cow_purpose and it will be used to encode the purpose a farmer will assign to a cow.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=133)** The supported purposes are dairy, meat, hide and pet, and each of them will be assigned a sequential integer value starting at zero.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=144)** So dairy is zero, meat is one, hide is two, and pet is three.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=151)** In the main function we have the declaration of an integer, A, in line 11.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=157)** Then we assign the value of meat to it.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=160)** And lastly, we print its value on the terminal.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=164)** Let's see it.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=167)** That seems about right.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=169)** A equals one, which is the encoding for meat.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=174)** Now let's suppose that I carelessly declared an integer, also named meat, in the main function and assign eight to it.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=184)** What do you think will print out, one or eight?
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=188)** Let's find out.
>
> **[3:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=190)** Now there are two points I want to make here.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=193)** First, the compiler didn't complain about the duplicated identifier for meat.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=200)** Second, the output shows A equals eight, which is the value of the variable in the main function, not the cow purpose and coding for meat.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=211)** This is not a shortcoming of regular enums, but rather the expected behavior of a program with multiple scopes in C++.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=221)** It turns out that meat is a local variable to the main function, so when we use the name meat in the main function, it will assume that we mean the one in its scope.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=234)** We can always use the scope resolution operator, double colon, to solve this.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=239)** But the real problem is that the names in the enumeration don't have a scope.
>
> **[4:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=245)** They would work pretty much like global variables.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=248)** And remember, global variables should be used sparingly or not at all, so that's one problem.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=257)** Now let's suppose that our application also requires a second enumeration to encode sections of a grocery store.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=265)** I'll name this enum grocery_section.
>
> **[4:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=269)** The supported sections will be canned, frozen, meat, laundry, dairy, and bakery.
>
> **[4:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=276)** These names will be assigned the values zero through five respectively.
>
> **[4:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=282)** You may see another problem here.
>
> **[4:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=285)** Both enumerations contain the names meat and dairy.
>
> **[4:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=289)** Moreover, they encode these options with different values.
>
> **[4:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=294)** Meat could mean one or two, and dairy could mean zero or four.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=300)** If we try to compile and run, this application will certainly get an error.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=305)** But why bother?
>
> **[5:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=307)** We can see it if we hover over the red squiggly underline.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=311)** It reads, "Redefinition of enumerator 'meat'."
>
> **[5:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=316)** A forced solution would be to change the names for meat and dairy in one of the enums, what a mess.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=323)** Instead, we can fix all those problems by using enum classes, also known as scope enums, or strongly typed enums.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=333)** I can do this by changing the declarations from enum to enum class.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=340)** Notice that the squiggles are gone.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=342)** To refer to enum class members, we now need to use the scope resolution operator, double colon.
>
> **[5:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=350)** That's because classes are strongly typed, which means that the compiler will enforce the correct use of their distinct type, and it will not assume that they are integers.
>
> **[6:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=363)** So let me go to line 15 and update the name of meat to cow_purpose::meat.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=373)** And there's the red squiggle again.
>
> **[6:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=375)** It reads, "A value of type 'cow_purpose' cannot be assigned to an entity of type 'int'."
>
> **[6:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=382)** This is not bad.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=383)** This is the compiler helping us by doing its job.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=387)** Since A is an integer, we have two options.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=391)** Either cast meat to int like this.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=395)** This way the compiler will not be required to assume anything.
>
> **[6:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=400)** As you can see, the squiggle is gone.
>
> **[6:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=403)** The second option is a bit more appropriate, and it's declaring A as a variable of type cow_purpose, like this.
>
> **[6:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=412)** This way we no longer need to cast meat to int in line 15.
>
> **[6:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=417)** In fact, we need to remove the cast because enum classes are strongly typed.
>
> **[7:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=423)** Thank you compiler.
>
> **[7:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=426)** Are we done? No.
>
> **[7:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=428)** Another squiggle came up when we changed the type of A to cow_purpose.
>
> **[7:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=434)** Look at line 17.
>
> **[7:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=436)** It turns out that the insertion operator used with cout is not defined for appearance of the cow_purpose type.
>
> **[7:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=444)** So let me just cast A to int.
>
> **[7:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=447)** I know, all this explicit casting may feel a bit inconvenient, but it's actually a good practice that improves the quality of your code.
>
> **[7:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=457)** There you go.
>
> **[7:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=458)** Not only will this compile without complaints, but all definitions of meat will coexist unambiguously in our code.
>
> **[7:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=468)** So let's see it running.
>
> **[7:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=470)** Great. A equals one as expected. Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (12), let (9), function (5), this. (3), class. (1)
> **Definitions:** is a  (4), known as (3), is called (1), means that (1), is an  (1)
> **Code Identifiers:** cow_purpose (6), grocery_section (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Calculate an average
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=8)** This time your task is to perform some numeric operations to finally calculate the average in an array of five integers.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=16)** Just add the values and divide by five.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=20)** You'll have to store your result in a float variable, so be careful with that division.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=25)** To test your calculations, try using a combination of numbers where the average is not an integer.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=32)** Finally, print that floating point average on the screen.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=36)** Feel free to start with the code provided in the exercise files, which contains the declaration of the array and the floating point variable, and also the line to print the results.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=46)** This way, you can concentrate on the calculation of this average.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=50)** This challenge shouldn't take you more than 15 minutes, so have fun and watch the next video for my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Calculate an average
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=0)** - [Instructor] Here's my solution, first in line eight, I have created an array of five integers named NUMs, and I have initialized it with some numbers.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=16)** Next, I declared a float named result.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=19)** Then in line 11, I didn't need to cast the elements of NUMS or their sum to float because I'm assigning this sum to a float anyway.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=28)** Then in line 12, I'm dividing the sum by five.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=32)** Notice that I'm using the shorthand operator for dividing result by five and updating its value.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=40)** Finally, I print out the result.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=42)** So let's see it working, and here we can see that the average is the expected value.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=49)** I hope you're getting the hang of this.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=52)** There's still much to learn.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1), this. (1)
> **Env Vars:** nums (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Structures, Classes, and Pointers

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Structures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=0)** - [Instructor] Now we are going to talk about C plus plus structures, which are containers of heterogeneous data members.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=8)** This means that you can group integers, strings, and other objects in one structure that contains them.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=15)** Structures are useful for implementing simple models that only need to have data members.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=21)** Structures are also available in C, but they do not follow the same syntax rules as in C plus plus.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=29)** Let's see a simple example of a structure.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=32)** Let me start by defining the structure, for this we will use the struct keyword followed by the name of the structure.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=41)** We'll use this structure to make a simple model of a cow.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=45)** So let me write this definition at line eight.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=48)** The contents of the cow structure are enclosed by curly brackets, and the closing bracket does require a semicolon at the end.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=57)** The cow structure will contain a string member for the name of the cow, an integer member for the age, and I will use an integer to encode a purpose the farmer will assign to the cow.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=72)** For this, I will use the same enum class cow purpose we saw earlier.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=80)** That's it, now let me show you how to use this structure.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=84)** Let me go to line 17 and assign values to a cow variable in the main function.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=90)** Let's call it my cow.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=93)** To access the members, we use the member access or dot operator.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=98)** So my cow's age will be five.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=101)** Her name will be Betsy, and her purpose will be dairy.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=106)** Notice that what I have just assigned to the purpose of Betsy is just a number that happens to be called dairy in my code.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=115)** I have not assigned the string dairy to it.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=117)** And finally, let me print out Betsy's info.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=121)** Let's print the name and I will not print the purpose, just the encoding of it, as in Betsy is a type three cow, for example.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=132)** Now let me print the name and age, as in Betsy is seven years old.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=137)** That's all, so let's see it running, and there you have it.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=144)** Betsy is a type zero cow, Betsy is five years old.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), struct (1), require (1), this, (1), enum (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Classes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=0)** - [Instructor] Classes are basic elements of object oriented programming.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=4)** They are intended for implementing models.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=7)** They contain two types of members, data and functions.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=12)** And just to be clear, classes mean the same thing in C++ as in Java or Python.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=20)** So I'd like to start with the previous example where we modeled the cow with a struct.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=26)** I want you to see how similar classes and structures can be.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=30)** So the first thing I'll do is go to line 10 and change the struct keyword to class.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=37)** That's almost it. In fact, let's try it.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=43)** We got some errors.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=48)** The first one reads "cow:age is private within its context," and the second one reads "member cow:age is inaccessible."
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=58)** That's because in the main function, I'm trying to access the cow's members, but by default class members are private.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=67)** So with this error, we see that the class is actually doing its job of hiding its members from the outside world.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=75)** So for you to see how this class may behave, just like the struct we have, let me add the public keyword to all members of the class.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=84)** You simply type public and a colon.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=91)** So there you have it.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=92)** We have converted a structure into a class.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=96)** Well, actually it's more like I have forced a class to be underused as a structure.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=103)** Now classes offer all the elements of object oriented programming, and we should take advantage of those elements.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=111)** So let me start by applying a feature of encapsulation, which is hiding the data from the outside world.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=118)** So I'll explicitly specify all members as private instead of public.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=127)** Now we have to modify our code to be able to access the age, name, and purpose of the cow as they are now private.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=136)** For this, it's important to note that there are two forms of data access going on in the main function.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=143)** When we assign values, we are writing into the data members, and when we print their values, we are reading them.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=151)** It is always recommended to keep your data private as much as possible.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=156)** But remember, that classes can have members of two types, data and functions.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=162)** So a typical means of accessing the data is by defining member functions called setters and getters.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=170)** Setters write into data members and getters return their values.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=175)** Now, as you may already know, functions are modules of code that perform a task.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=181)** They may take in data and return a value.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=184)** Functions can be called from your code, even from other functions.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=189)** So let me go to line 11 and define three getter functions, get_name, get_age, and get_purpose, and they will all be public.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=199)** Functions must first specify the return type, then the name of the function, and then a list of parameters between parentheses.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=210)** The first one will return a string and it will be called get_name.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=214)** The body of the function is a code block, so it's enclosed by curly brackets.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=220)** Now, getter functions are not supposed to modify anything in the object they get data from, and so it is considered a good programming practice to declare getter functions with the const qualifier after the parameter list.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=236)** This way, the compiler will prevent the programmer from modifying the objects inside that function.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=242)** This technique is part of a wider concept known as const correctness.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=248)** Getters are super simple.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=250)** They do not receive parameters, and they just return a data member with the return keyword.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=257)** Now let me write the rest of the getters.
>
> **[4:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=260)** I suppose I don't always use parenthesis in the return expression.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=264)** I will write the setter functions later, but now we will write a very special public member function known as the constructor.
>
> **[4:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=273)** The constructor of a class is called when an object is created.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=278)** An implicit constructor is always implemented, which simply creates the object, allocating memory for the data members.
>
> **[4:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=286)** However, you can always write additional versions of the constructor by taking a custom set of parameters.
>
> **[4:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=294)** This is known as overloading a function, and it means defining a function with the same name of an already defined function, but with a different set of parameters.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=304)** A classic constructor overload receives initialization values for all the data members.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=311)** That's what I'll write next in line 12.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=315)** A constructor is the only kind of function that does not specify a return type, and its name must be the same as the name of the class.
>
> **[5:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=325)** So this will be cow and the parameters will be the same members.
>
> **[5:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=332)** I'll use different names for the initializers to avoid ambiguities.
>
> **[5:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=337)** So I'll receive a string name_i for initializer, and integer, age_i, and a cow purpose, purpose_i.
>
> **[5:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=347)** The body of the constructor should contain the initialization code you want for your new object.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=354)** In our case, it's simply assigning the values to the members.
>
> **[5:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=359)** At first, it may appear that setters and getters are taking away the benefit we got from private access in the first place.
>
> **[6:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=367)** But the purpose of having private members is not to make them unavailable to the outside, but simply to restrict their access to code within the class.
>
> **[6:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=378)** If you write a class with elements that are correlated, you don't want the user to tweak the data freely, possibly breaking something.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=387)** It's best to have a function written by you, the author of the class, to perform operations that affect the data.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=395)** Now our class is functional, but if you try to run this example, you will get some errors, because we still need to modify the main function to use the class correctly.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), private (7), class. (5), let (5), public (5)
> **Definitions:** known as (3), is a  (1), is called (1)
> **Code Identifiers:** get_name (2), get_age (1), get_purpose (1)
> **CLI Commands:** python (1), make (1)
> **UI Navigation:** go to (2)
> **Best Practices:** recommended (1), it's best to (1)
> **Prerequisites:** initialization (2)
> **Analogies:** just like (1)

#### Using classes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=0)** - [Instructor] Recall that the existing code for this example was using the members of the cow class directly as public members.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=8)** Now let me update the main function, replacing the member access expressions with the constructor or the getter functions.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=17)** So lines 33 through 36 will be modified to a call to the initializing constructor.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=26)** We do that by writing the name of the new object as if it were a function call, including the arguments as a list between parentheses.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=36)** This calls the constructor we just wrote.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=40)** So this cow will be called Hildy.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=43)** She'll be seven years old, and I want her as a pet.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=48)** Notice that this line also replaces the following three lines.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=53)** Now, for the reading axis of members, I will replace the name of the data with the name of the getter function, which is the same, but with get underscore as a prefix.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=64)** And don't forget the empty list of arguments.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=71)** And that's it, let's try it.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=76)** Now we can see that everything went well as Hildy is a type three cow, and Hildy is seven years old.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=85)** Now, just for completeness, let me write one setter function for the age in line 26.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=92)** Remember, this must be public and I will not return anything.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=97)** This is specified as returning the void type.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=101)** Now the set age function will do the same as the constructor, but only modifying the age.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=111)** As an exercise, go ahead and try using this setter function and then write the remaining setters for the name and purpose of the cow.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), public (2), type. (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Header and implementation files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=1)** - [Instructor] It's time to talk about source and header files.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=4)** But before we do, let me show you how your source code gets compiled into an executable file.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=11)** A compiler toolchain is a pipeline of software tools that convert source code into an executable file.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=19)** To illustrate how a compiler works, I want to show you three different forms of input you may feed to the compiler tool chain in a single software development project.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=30)** The first case is when you write your C++ source files.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=35)** Then you feed those files to the compiler, which is the first big program the code goes through.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=40)** The compiler translates your C++ code into Assembly language, which is a human readable version of the native language of the target CPU.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=53)** So a new file with Assembly code is created.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=56)** This file is fed to a second program known as the assembler.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=62)** The assembler produces a so-called object file, which is almost executable, but it may contain just pieces of the code you want to use in your final executable.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=73)** Great. Now let's talk about the second input case.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=78)** This is when you write your own Assembly code.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=82)** Although this can be a hassle, sometimes you have no choice but to write your own low level code.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=88)** This is often the case when you need to write a peripheral driver.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=92)** So in this case, you may feed an Assembly file to the assembler and it will produce another object file.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=101)** And now the third case is when you include libraries for which you only have access to the object files, not the source code.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=110)** In fact, libraries are often distributed as object files or some compatible variant just like we have been including IO stream or string in our examples.
>
> **[2:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=123)** Now we are left with a handful of object files, which are correlated pieces of your project.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=129)** These files are sent to a third program known as the linker.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=136)** The linker's job is to stitch these subject files together to produce an executable binary file.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=144)** This is the program you finally get to run.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=147)** Specifying all the files to compile is fairly easy if you use an integrated development environment or IDE.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=155)** However, at some point you may have to work with a compiler in the command line and it can get complicated.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=162)** Usually all this information is already specified in a text file.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=168)** A popular example of this is known as a make file.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=173)** Once again, IDEs take care of this for you behind the scenes.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=179)** Now let's focus on the C++ source files.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=182)** C++ code is usually written as a header and implementation file pair.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=188)** These two files have the same name, but the header file usually has the .h extension while the implementation file has the .cpp extension Header files contain definitions and function declarations.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=203)** They may also contain macros, but not executable code.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=208)** Implementation files contain, well, the implementation of all functions declared in the header file.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=214)** That's the executable code.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=216)** Implementation files must include their corresponding header files because the compiler needs to see the class definitions and function declarations before seeing the code in your implementation file.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=231)** Your external code, the one that uses your classes, should only include the header files, not the implementation files.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=239)** And lastly, all implementation files must be compiled.
>
> **[4:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=243)** You need to include them in the list of source files in the command line, your make file, or the IDE you are using.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), case. (1), case, (1)
> **Definitions:** known as (3), is a  (2)
> **Env Vars:** ide (2), cpu (1)
> **Exercise Files:** source code (3)
> **CLI Commands:** make (2)
> **Tools:** command line (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Using several source files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=0)** - [Instructor] So let's take our cow class and move it to its own cow.h and cow.cpp files.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=8)** I will add these files in Visual Studio Code, but it's just as simple in pretty much every other IDE.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=15)** I'll start with the cpp file.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=18)** So let's go to the folder for this exercise, which is 03_05b.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=25)** That's the begin folder.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=27)** Let me right click there and select new file.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=31)** Now I'll type cow.cpp and hit enter.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=36)** The file will be created and open in the editor.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=40)** The action of creating this cpp file is not what will include it in the list of files to be compiled.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=47)** This file will be compiled because that's how the tasks.json file is configured.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=53)** Let me show you.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=55)** Let's go all the way up to the .VSCode folder and open tasks.json.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=62)** Here we have all the configuration parameters for the tasks to be executed by VS Code.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=69)** This is how our files are compiled in this setting.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=73)** The most important elements are in lines 6 and 7.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=77)** In line 6 we have the compiler command, which is the G++ compiler, and in line 7 we have the set of arguments VS Code will send to the compiler in the command line.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=90)** In line 10, we have the C++ standard we want to support, which is C++ 17.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=98)** Then in line 11 we have the list of source files to compile.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=103)** So in this setting, I have instructed VS Code to compile all .cpp files it finds in the same folder as the source file shown in the editor whenever I click on the run or debug button.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=118)** In principle, the content of this JSON file is the same information we would write in a make file.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=125)** Alright, now for the header file, let's go back to the begin folder of this exercise, right click and create the cow.h file.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=137)** I will start the new header file with the directive pragma once.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=141)** This is telling the compiler to only include this header file once.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=146)** It's very common to include the same header file in multiple source files.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=151)** And this is not necessarily a bad practice.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=154)** So this pragma directive prevents an error where the compiler finds definitions it has seen before in the same file.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=163)** Now with that being said, the use of pragma once is not standard.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=169)** Visual Studio Code supports it, but not all compilers do.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=174)** So an alternative for this is using what is known as an include guard.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=179)** And include guard is a simple trick using the ifndef directive.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=184)** It works like this.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=186)** You start your header files with ifndef, some macro, which usually mimics the file name.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=193)** This one is called COW_H.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=196)** The directive means if the COW_H macro is not defined, then include the following code.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=204)** We close the statement with endif, usually with the macro name as a comment.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=212)** And now the first thing in the body of the conditional block is the definition of the macro.
>
> **[3:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=218)** So that's defined COW_H.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=221)** Again, this is called an include guard and it's supported by all compilers.
>
> **[3:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=227)** I'll leave the pragma and the include guard for this file, but usually only one is used.
>
> **[3:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=233)** Now let me cut and paste the class and enumeration definitions from the main source file called code demo.cpp into cow.h.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=250)** We are almost done.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=251)** The only problem left is that the header file contains the implementation of the member functions.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=257)** So I'll move the implementations to the cow.cpp file, but I'll leave the declarations of these functions.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=265)** Basically, I need to leave the function headers ending each line with a semicolon.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=271)** So first, let me copy the implementations and paste them to the cpp file.
>
> **[4:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=277)** Now let me get rid of the implementations in the header file.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=291)** Now notice the red wavy underlines under the string class.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=296)** That's because we haven't included the string library.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=300)** There, our header file is looking good.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=303)** Now let's tidy up cow.cpp.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=306)** First I need to include cow.h and notice that I did this between quotes because cow.h is not a part of the standard library, and now I need to resolve the scope of all the members of cow in this file.
>
> **[5:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=324)** It's very simple.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=326)** I just need to type cow double colon before the name of each function.
>
> **[5:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=331)** The first one is the constructor.
>
> **[5:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=335)** Then we have get_name, get_age, and so on and so forth.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=340)** Lastly, let me include cow.h in the main source file.
>
> **[5:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=344)** Remember, that's CodeDemo.cpp.
>
> **[5:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=350)** And now let's compile and run just to make sure we didn't break anything.
>
> **[5:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=357)** Oh yeah, it's all looking good.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (2), this. (1), class. (1)
> **File Paths:** cow.h (6), cow.cpp (4), tasks.json (2), demo.cpp (1), codedemo.cpp (1)
> **Tools:** vs code (3), visual studio (2), command line (1)
> **Env Vars:** cow_h (3), ide (1), json (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** get_name (1), get_age (1)
> **UI Navigation:** go to (1), click on (1)

#### Pointers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=0)** - [Instructor] Pointers are an essential part of the C programming language, which is the foundation of C++.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=8)** In this course, we'll only cover the basics of pointers.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=12)** Later on, you may want to learn about smart pointers, an important addition to the language in the C++ 11 Standard in an effort to prevent common issues like memory leaks and dangling pointers.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=26)** Pointers are a special type of variables that hold memory addresses.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=31)** So for example, for 32-bit architectures, pointers are 32 bits wide.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=38)** Let's suppose we have this partial memory map with the locations shown at the left and the slots are the memory units.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=47)** Now, the memory is organized with an address for each byte, and I will show you an example with 32 bit integers.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=56)** That's why addresses are shown in steps of four, because each integer takes four bytes.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=63)** So when you declare a 32 bit integer like this, int a = 37; the compiler reserves a memory location for it.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=74)** Let's say a got address 104 assigned.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=78)** Since we initialized it at 37, the contents of that memory address will be 37.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=86)** Now, to declare a pointer, the syntax goes like this.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=91)** We specify the type of the variable we will be pointing to, followed by the name of the new pointer, preceded by an asterisk.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=100)** In this example, that would be int *ptr.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=105)** Remember that pointers are variables themselves and so the pointer is allocated at some memory location.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=114)** In this example, let's say it goes to address 120.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=119)** Now it gets interesting.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=121)** If we assign an address to the pointer, then it will point to that address.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=127)** So let's make ptr point to a.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=130)** You can do it like this.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=132)** ptr = &a; The prefix & is the address of operator, and it does precisely that, return the address of the variable at its right.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=146)** If we run this code, the contents of address 120 will be the address of a, or 104.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=154)** Because of this, it is colloquially said that ptr now, quote unquote, points to a.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=162)** Let's see that example in a live demo.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=165)** I'll start in line nine by declaring a and the pointer we just saw.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=171)** Now let me assign the address of a to ptr.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=176)** Now let me add some lines to print the memory addresses and contents of the variables.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=182)** First, we'll show the content of a.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=185)** For this, we simply use the variable's name, a.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=189)** Now we'll show the address where ptr is pointing to.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=194)** Remember, this is the content of the variable ptr, which is an address.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=200)** So I'll simply use the name of this variable again, that's ptr.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=207)** Now we'll show the address of a.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=212)** For this, we used the address of operator we used before.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=217)** That's &a.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=219)** Now let me print the contents of the memory address where ptr is pointing.
>
> **[3:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=225)** To access this data, we use the indirection operator.
>
> **[3:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=229)** That's a prefix asterisk.
>
> **[3:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=233)** Notice that cout will print an integer for this last value, not a string or a floating point number or anything other than an int.
>
> **[4:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=243)** That's because we declared ptr as a pointer to int.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=248)** That's one of the reasons to specify a type for the target of a pointer.
>
> **[4:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=253)** And lastly, let me print the address of ptr as a variable.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=258)** Again, I will use the address of operator.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=263)** Now, for the addresses, we will not see 104 and 120 as in the example.
>
> **[4:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=269)** Instead, we'll see whichever addresses are assigned to the variables at runtime.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=275)** Let's see these results.
>
> **[4:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=279)** We have that the content of a is 37.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=283)** ptr is pointing to an address ending in de4c.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=288)** The address of a is the same as where ptr is pointing.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=292)** That's good.
>
> **[4:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=294)** Where ptr is pointing, we have 37.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=296)** That's also good.
>
> **[4:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=299)** And lastly, the address of ptr is different from the address of a.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=305)** That's it for the essentials of pointers.
>
> **[5:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=308)** Remember, once you have fully understood the use of pointers, you may want to look into smart pointers for a safer alternative.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (4), this. (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using objects with pointers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=0)** - [Instructor] The previous example may have shown you how pointers work, but pointing to existing variables isn't particularly useful.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=9)** One of the most important applications of pointers is dynamic memory management.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=15)** When you declare a variable, you are statically allocating memory for it.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=20)** The compiler knows the space in memory that will be needed.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=24)** However, most real applications create variables and objects in memory during runtime.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=31)** This is known as dynamic memory management.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=34)** In C, it is common to dynamically allocate memory using the malloc family of functions, which is short for memory allocation.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=44)** You, as a programmer, are responsible of freeing up the memory you allocated in runtime to avoid memory leakage.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=53)** But this is where C++ really shines.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=56)** The use of pointers is supported by the language to dynamically allocate memory for new objects when calling the class constructor, and also to free their memory when you no longer need them.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=70)** Let me modify our cow code by using dynamic memory allocation.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=76)** So instead of declaring a cow object statically in memory, let me go to line 10 and declare a cow pointer called my_cow.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=86)** And now in the former declaration in line 12, I will assign to this pointer the address of a dynamically allocated instance of the cow class.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=98)** This allocation is done with the new operator.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=101)** You just type new and then call the constructor of the class by its name, like this: my_cow equals new cow, and this cow will be named Gertie.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=114)** Her age will be three and her purpose will be hide.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=120)** We are almost done.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=121)** Notice the red squiggles when we try to access the members of my_cow in lines 13 and 14.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=128)** That's because my_cow is no longer a cow object, but a pointer to a cow object.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=135)** So the dots or member of object operators are now inappropriate.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=141)** The correct way of accessing the members of appointed object would be the first dereference, the pointer, and then access a member of the object the pointer is pointing to.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=153)** For example, in line 13, I could change the access of my_cow.get_name to asterisk my_cow.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=163)** I have to enclose this in parentheses to dereference the pointer and then dot get_name.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=170)** So this is valid, but it requires a set of parentheses and it can get messy if you dereference a series of pointers, instructors like trees or linked lists.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=181)** So there's a shorthand operator for this.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=184)** It's the member of pointer operator, and I love it because it's a nice right bound arrow.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=192)** You simply place the arrow between the pointer at the left and the member at the right.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=198)** No need for parentheses.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=204)** Lastly, remember that this object was dynamically created, so I'll delete it when I'm done using it.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=212)** We do that with the delete operator, which does the opposite of the new operator.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=220)** In this case, the program will end right after deleting the object, so the whole memory will be freed anyway.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=228)** But it's important to delete the objects you no longer need to avoid memory leakage.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=235)** By the way, the delete operator calls a special function in your class called the destructor, which is useful for freeing dynamically allocated memory within your objects.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=248)** So let's see if this new code works as expected, and it looks like it does.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=256)** Gertie is a typ-2 cow. Gertie is three years old.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (3), class. (1), this: (1), this. (1)
> **Code Identifiers:** my_cow (6), get_name (2)
> **Definitions:** known as (1), short for (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### References
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=0)** - [Instructor] References are a special category of data types I haven't yet mentioned.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=5)** References are aliases to existing variables, so a reference becomes an alternative name for a variable.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=13)** To declare a reference, you simply use the type you want followed by &.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=18)** Here we have a declaration of a reference named my_ref, which makes reference to an existing integer named my_int.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=26)** Once declared, references use the same syntax as the referenced variables so you don't have to dereference as a pointer, for example.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=35)** Now it's important to point out two things about references that have certain implications.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=41)** First, references are not pointers, and second, references are not objects.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=48)** Moreover, references don't have an address, and this has some important implications.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=54)** First, there are no arrays of references.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=57)** That's because to index an element in an array, you need an address.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=62)** Second, there are no pointers to references for the same reason.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=66)** And third, there are no references to references.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=71)** Actually, you may initialize a reference to another reference, but they will both be aliases to the original variable.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=78)** So it doesn't make much sense to declare a reference to a reference.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=83)** Since pointers and references both allow us to refer to a variable indirectly, let me tell you some important differences between them.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=91)** For pointers, initialization is optional, whereas references must be initialized at declaration.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=99)** This means that a reference guarantees you'll find valid data when you use it.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=104)** That's not the case for uninitialized pointers.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=107)** Pointers can point to different objects.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=110)** That is, you may use the same pointer to point to one variable, then make it point to another variable, and so on.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=119)** On the other hand, references can't reference a second object.
>
> **[2:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=123)** They are stuck with the object that was assigned to them at declaration.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=128)** Pointers have several related concepts.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=130)** For example, a pointer can be declared with the void type, which simply means that the pointer may point to an object or variable of any type.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=140)** Pointers can also be assigned the NULL value, which means that the pointer isn't pointing at valid data.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=147)** References, on the other hand, have a fixed data type and the fixed object to make reference to.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=154)** Pointers may have multiple levels of indirection.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=157)** By this I mean that you may access data with a pointer that points to a second pointer, which points to the data.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=164)** That's two levels of indirection.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=167)** Now, references have only one level of indirection.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=171)** As I mentioned earlier, declaring a sequence of references simply makes multiple aliases to the same data.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=179)** And lastly, pointers must be dereferenced when you want to access the data, and there's no need for dereferencing a reference because it's simply an alias, another name for a variable.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=192)** So based on these references, you may conclude that pointers are more powerful than references, but references may be safer than pointers.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=202)** So far, references don't seem very useful because having another name for a variable doesn't really solve a problem.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=210)** So here, we have some useful applications of references.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=214)** First, when you write a function, all parameters are passed by value by default, but you may also pass parameters by reference.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=223)** Among other things, this means that you may modify the variable that was sent as an argument within your function.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=231)** With references, you may avoid copying large objects, which may contain large amounts of data.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=237)** If you use a parameter by reference, the program will not end up making an unnecessary copy of that data.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=244)** And the same applies to for loops.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=247)** There's a special form of for loops that uses a variable to iterate through a container, like an array or vector.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=255)** This variable may require to copy each element in each iteration.
>
> **[4:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=260)** References help us avoid this unnecessary copying of data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), type, (1), type. (1), default, (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** means that (4)
> **Code Identifiers:** my_ref (1), my_int (1)
> **Analogies:** for example (2)
> **Env Vars:** null (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=0)** - [Instructor] We have talked about arrays, but I don't recommend using them for your applications as a first option.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=7)** Instead, you should consider using STL vectors.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=12)** These are dynamic-size containers.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=14)** That means that you may resize them in case you need to add data to your collection or delete elements.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=22)** The memory required for vectors is managed for you.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=26)** That means that you don't need to allocate or free that memory manually.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=31)** However, if the objects you are putting inside your vectors allocate memory manually, well, you are responsible for those as usual.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=42)** Vector is a generic container class.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=45)** That means that vectors can be implemented for storing any type of element, ints, floats, strings, or even objects of your own classes.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=55)** It also means that there are numerous member functions for manipulating vectors conveniently available within the class.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=64)** Vectors are a part of the C++ Standard Template Library.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=68)** This is a special set of containers, functions, and algorithms included in the C++ Standard Library as part of the generic programming style.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=81)** Let me show you a few examples of STL vectors with integers.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=86)** The first thing we need is the vector header.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=89)** Now let me declare a vector of integers in Line 10.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=94)** Remember, this is a template, so we must specify the data type.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=99)** We do this with angled brackets.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=102)** I'll name this vector, primes.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=105)** Vectors come empty by default.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=108)** Let me confirm that by printing its size.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=111)** Notice that I'm using the size member function for this.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=122)** Yes, the vector has zero elements.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=125)** Now let's add elements to it.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=129)** Vectors have two ends, a front end and a backend, and we may only insert elements through the backend.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=137)** The reason for this is because vectors are guaranteed to store elements consecutively in memory.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=144)** So inserting at the front would always require reallocation.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=149)** So starting at Line 12, I'll use the push_back function to enter 2, 3, 5, 7, and 11, one by one.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=161)** Now let's run it again.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=165)** And now we have five elements in the vector.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=169)** Conveniently, the vector class supports square brackets, and we may use them just like arrays.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=176)** So we can print the value of arbitrary elements by index.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=181)** For example, let me print the value of element, 2.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=185)** Remember, the index 2 means the third element.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=189)** I'll do that in Line 18.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=192)** We can also access elements for writing.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=195)** So let me change the number at index 2 to a new value of 13.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=201)** And let's print its value once more.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=204)** All right, let's see it running.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=208)** And as you can see, the element at index 2 changed from 5 to 13.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), class. (2), function (2), delete (1), type. (1)
> **Definitions:** means that (4), is a  (3)
> **Env Vars:** stl (2)
> **Exercise Files:** template (2)
> **Analogies:** just like (1), for example (1)
> **Code Identifiers:** push_back (1)
> **Speakers:** - [instructor] (1)

#### Using objects with vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=0)** - [Instructor] Now I want to show you how to work with vectors of objects.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=4)** So let's get some cows into a vector.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=7)** I'll declare this new vector in line 11.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=10)** Let me call it cattle.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=13)** To enter each cow we can use the overloaded constructor we wrote.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=17)** So let me add four cows.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=22)** Now let me type the constructors.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=25)** And lastly, I will print the names of these cows, but I will do it using a different means of element access.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=33)** Vectors support iterators, which are special objects that allow you to traverse containers.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=40)** They work with similar semantics as pointers.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=43)** In fact, pointers are a type of iterator.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=48)** In line 18, let me print the name of the first cow in the vector.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=53)** To access the first element in a vector, we can use the begin function, which returns an iterator to the first element.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=62)** Once again, notice that since iterators work like pointers, we can use the member of pointer or arrow operator to access the get name function.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=78)** Conversely, to access the last element, we can use the end function, but this one returns an iterator to the element after the last element.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=89)** So we need to decrease this iterator by one.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=93)** For this, I can simply subtract one to the functions return value, or I can use a special function called prev, as in previous, which guarantees going back a number of positions in the container.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=110)** Let me use this to access the next to last cow.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=114)** The syntax goes like this, first you type prev.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=119)** The first argument is the iterator, and the second argument is the number of positions you want to go back.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=126)** In our case, that's two.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=130)** And let's not forget to call the get name function.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=133)** And why not let me show the second cow's name by index?
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=140)** Notice that in this case, I am accessing the get name function with the member of object or dot operator, because this is not an iterator, it's an object.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=155)** So let's see it working, and there's what we expected.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=160)** Our cows are Betty, Libby, Trudy, and Betsy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), this, (2), case, (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Create some classes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=0)** (bright curious music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=5)** - [Instructor] It's time to start shaping our student record system.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=9)** To this end, your task is to create three classes, student, course, and grade.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=15)** With these classes, we'll be able to model students taking courses and getting grades.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=21)** The student class must have two members, an integer for the student's ID and a string for the name.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=29)** The course class must have an integer for the course ID, a string for the name and an eight bit integer for the credits.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=37)** And the grade class must have an integer for the student ID, an integer for the course ID, and a chart for the grade as an ASCII character.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=47)** We'll only use uppercase A, B, C, D, and F for the grades, no plus or minus.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=54)** For these classes, your task is to write the constructors and gather function implementations.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=61)** I have provided the class definitions in records.h.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=65)** You'll have to write the function implementations in records.cpp.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=71)** And you don't have to write the test code from scratch.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=74)** Feel free to use the code I've provided in the usual CodeDemo file.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=78)** So please take a minute to look at the source files before you start writing your implementations.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=84)** This may take you about 20 minutes.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=87)** When you're finished, let me show you my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **File Paths:** records.h (1), records.cpp (1)
> **Env Vars:** ascii (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright curious music) (1)

#### Solution: Create some classes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=0)** - [Instructor] Here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=7)** The records.CPP file starts by including the .H file.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=12)** This is important because that file contains the function prototypes, and next, notice that the constructors are simply assigning the arguments to the member variables.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=24)** You can see the constructor for the student class in line three and the constructor for the course class in line 14.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=33)** And the getter functions are even simpler.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=35)** They just return the member variable they're supposed to return.
>
> **[0:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=39)** They are all one-liners.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=44)** Here you can see the constructor and getter functions for the grade class.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=48)** Now let's look at the test code in codedemo.cpp.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=53)** Starting at line nine, I'm creating one object for each class.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=58)** We have student number one named Hilda Jones.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=62)** We have course number seven named physics 101 with four credits, and we have a grade, which is for student number one, Hilda, at course number seven, physics, and she got a B.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=77)** Remember this letter B is a single character, not a string, so it has single not double quotes.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=86)** Then starting at line 13, I'm printing out some elements of these objects.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=91)** Let's try it.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=94)** As you can see, everything is shown as expected.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=97)** The student is Hilda Jones, the course is physics 101.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=102)** That course has four credits, and Hilda got a B in physics.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), let (2), function (1), return. (1)
> **File Paths:** records.cpp (1), codedemo.cpp (1)
> **Env Vars:** cpp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Control Flow

> [[#Table of Contents|↑ Back to Table of Contents]]

#### If statements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=0)** - [Instructor] Now let's get to know some control statements.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=3)** These are parts of the code where execution may take different paths depending on some condition.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=10)** Let's start with if-else statements.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=13)** First, let me declare some variables starting at line eight: an integer named a initialized at 1,023, a Boolean named flag initialized as false, and a char named lttr for letter initialized as lowercase d.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=35)** Now let's write some conditionals.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=38)** The syntax for an if statement goes like this.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=42)** First we type the if keyword, and then comes the condition which always goes between parentheses.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=50)** I'll compare a to 1,000.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=53)** If a is greater than 1,000, I'll print a message on the screen.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=58)** So after the conditional comes the block of code you want to execute when the condition is true.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=64)** There is no then keyword.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=69)** Now I want you to notice two things.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=72)** First, if a block of code consists of exactly one line, there is no need for curly brackets.
>
> **[1:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=79)** You may place them if you want, but they're not required.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=83)** And second, the else part is optional.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=87)** There are some cases where you only care about the case where the condition is true like this one.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=94)** Now let me show you an if-else statement.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=98)** This time, my condition will check whether a is even or odd, and I want to report either case to the screen.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=106)** So to do that, I can calculate the remainder of dividing a by two.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=112)** If the remainder is one, then a is odd.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=116)** If it's zero, then a is even.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=119)** So I'll use the remainder operator and compare it to zero.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=125)** Notice that I'm using the double equal operator, which is the comparison operator, not the assignment operator, which is single equal.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=135)** But think about this.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=137)** Remember that in C and C++, zero means false, and anything other than zero means true.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=145)** So comparing something to zero is the same as comparing it to false.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=151)** If the expression results in zero, then the else part will be executed.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=157)** Thus, there is no need to compare to zero, so I'll just leave the remainder expression as my condition.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=166)** When this result is not zero or true, the number is odd.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=171)** So let me write that.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=174)** Now comes the else keyword and then the block of code for the false path.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=180)** Now this trick of performing some operation without a comparison only works when you intend to compare to zero, but it may make your code difficult to understand.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=192)** So feel free to compare explicitly if you prefer.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=196)** Conditions may be long expressions.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=198)** For example, let's report if a letter is a vowel or not.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=204)** I'll do this by conditionally printing not in the middle of a sentence.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=213)** The sentence we'll send to the screen will go like this, the letter, whichever letter we have, is, and then we decide whether or not to add the string not.
>
> **[3:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=227)** For this, I'll compare the letter with all five vowels in their lowercase and uppercase versions.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=234)** So that's 10 comparisons.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=237)** I'll check if the letter is not a and not e and not i and so on.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=244)** Notice that the logical and operator is double ampersand, but be careful.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=251)** The bitwise and operator is a single ampersand.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=256)** Also, notice that the not equal operator is composed of the exclamation mark and equal characters.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=264)** By the way, you may break lines as you please in C++.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=270)** Then in the positive case of the condition, we print not.
>
> **[4:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=276)** And after the if statement, we finish the sentence.
>
> **[4:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=284)** And lastly, you may hold conditions in Boolean variables and check their values later.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=291)** Let me place an if statement that uses our flag.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=296)** There, let's see it working.
>
> **[5:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=301)** As you can see, everything looks as expected.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=304)** A is over 1,000.
>
> **[5:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=307)** A is odd because it's 1,023.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=311)** The letter d is not a vowel and the flag is false.
>
> **[5:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=316)** Now go ahead and change the values of the variables to see the opposite behaviors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), this, (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Switch statements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=0)** - [Instructor] Case statements are called switches in C and C++.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=5)** A switch is a branching statement that allows your program to take one of several paths based on the value of a variable.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=13)** It's like an if-else statement, but with any number of outcomes, not just two.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=20)** To illustrate this, let me show you a quick and dirty calculator.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=25)** In line eight, I have declared three floating point variables, operand_1, operand_2, and result.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=34)** And I also declared ACHAR for the user to choose the operation to perform between these two operands.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=43)** Then we have some code to get both operands and the operation from the user.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=49)** So let's take it from here.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=51)** In line 18, I'll start writing our switch statement.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=55)** The syntax goes like this.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=58)** Type switch followed by the name of the variable between parentheses.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=64)** We will decide based on the operations selected by the user.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=69)** Next, the code block inside the switch statement is very particular, and it always requires curly brackets.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=77)** Inside, we will list every case we want to react to.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=82)** We do this with the case keyword, followed by a constant of interest and a colon.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=88)** I'll start with the plus sign for addition.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=91)** Notice that this is a character constant, so it's enclosed by single quotes.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=96)** Now, the execution control will be transferred to this entry point if operand is the plus sign, and it will go on until it reaches either a break statement or the switch ends.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=110)** For a classic case statement behavior, you'll want to end every case block with a break statement, which terminates the execution of the code inside the switch.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=122)** So for the plus sign, I will assign the addition of the operands to result and add a break.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=132)** Let me do the same for subtraction, multiplication, and division with the respective operators.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=140)** Switches also allow you to specify a default case for any value not specified above.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=147)** I'll use addition as default.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=151)** That's it for the switch.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=153)** Notice that line 36 is reporting the result.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=157)** So let's try it.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=160)** All right, let's multiply three by seven.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=165)** And the result is 21.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=168)** Go ahead and try the other operations.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (7), let (5), this, (1), this. (1), break. (1)
> **Definitions:** is a  (2)
> **Env Vars:** achar (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### While loops
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=0)** - [Instructor] Now let's get to know loops.
>
> **[0:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=2)** The simplest loop in C++ is the while loop.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=6)** It has two forms: while which evaluates a condition prior to iterating, and do while, which always runs the first iteration and evaluates the condition at the end of the loop body.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=21)** Let me show you how to print all the elements of a vector with a while loop.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=26)** In line nine, we have the declaration of the vector named numbers.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=31)** And just like arrays, vectors can be initialized at declaration with a list.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=37)** Here, I wrote five values in ascending order.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=41)** Then in line 11, we have an iterator declaration and initialization.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=46)** This iterator will be used to traverse the vector.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=50)** Notice that iterators are usually defined within their classes, even generic classes.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=57)** This iterator type belongs to the vector of integers class.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=62)** I have initialized it at numbers.begin, which is an iterator pointing to the first element of the vector.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=70)** I named it ptr as in pointer.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=73)** Now with a tight name as complicated as this one, this is a good opportunity to use the auto type like this.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=82)** Now let's write our first while loop.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=86)** The loop starts with the keyword while followed by a condition to keep iterating as long as the condition is true.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=95)** So we'll iterate while ptr is not equal to numbers.end, which is the element past the last element in the vector.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=106)** Now the body of the loop will have one line to print the element ptr is currently pointing to, followed by a space, and another line to move the iterator forward by one position.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=121)** I'll use the function named next for that.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=128)** Now about the do while loop, you may want to use this type of loop when you are absolutely sure it's safe to run the body of the loop in the first iteration.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=140)** In this loop, I'll do the same as above, and I know that the vector has five elements, so the first iteration will happen.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=149)** Also, I will access the vector by index this time.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=153)** So let me declare an integer i initialized at zero.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=157)** The loop starts with the do keyword, followed by the body of the loop between curly brackets.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=164)** The loop ends with the while keyword and the condition to continue iterating between parentheses.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=171)** This part must end with a semicolon.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=175)** The loop will iterate while i is less than the number of elements in the vector.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=180)** We can get that number with the size member function.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=184)** Now, the body of this loop is the same as in the previous one, but accessing the vector by index.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=192)** We print the numbers index.i and we increment i by one.
>
> **[3:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=197)** This is the postfix increment operator double plus, by the way.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=204)** Well, that's it.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=205)** We expect to see the vector elements printed twice in two separate lines as initialized in ascending order.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=215)** Yes, there we have it.
>
> **[3:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=218)** 12, 25, 31, 47, and 58 twice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), while, (1), class. (1), this. (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### For loops
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=0)** - [Instructor] For loops are traditionally used when you know the range to traverse in advance.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=6)** The first and last iterations are normally specified in the loop statement.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=11)** Well, for loops in C and C++ are extremely flexible.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=16)** A for loop has a directly equivalent implementation with a while loop.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=22)** In this example, I'll calculate the average of the elements in the same vector we saw in the while loop example.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=29)** That's why we have a float definition for the average in line 10.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=34)** Let me start in line 12 by initializing the average to zero.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=41)** Now the for loop syntax has three parts separated by semicolons.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=46)** First we have the initialization statement, then the condition, and lastly, the increment expression.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=54)** So let me go to line 13 and type "for."
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=58)** The first part is the initialization of the iterating variable, and you may declare that variable in this part.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=66)** So it will belong to the scope of the body of the loop.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=70)** It will be an integer named i initialized to 0.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=75)** Don't forget the semicolon.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=77)** Now comes the second part, the condition to iterate as in a while loop.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=83)** My condition will be, "While i is less than the size of the vector."
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=88)** Semicolon again, and the third part is the increment.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=93)** It's simply i++.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=95)** The body of the loop is a one-liner, so it doesn't require curly brackets.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=101)** I will add the current element to the average and accumulate the result in the average.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=107)** Now outside the loop, let me divide the average by the size of the vector.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=115)** Notice that in these two lines, I use the shorthand operators for addition and assignment and for division and assignment respectively.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=125)** Now let's print the value of the average.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=129)** Now let's do the same thing again, but let me show you another form of the for loop.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=135)** This form was added in the C++11 standard.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=139)** This is the range-based for loop, and as the name suggests, it works by traversing a specified range with an iterator.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=148)** As you can see, I have copied the previous code and I will simply modify lines 19 and 20.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=156)** The syntax is quite simple.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=158)** First, you specify a variable to traverse the container, a colon, and the name of the container.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=165)** In our case, let me declare an integer, but I'll use the auto type and name it x.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=172)** Then a colon, and the name of the vector.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=176)** For each x in numbers, do the following.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=180)** Now be warned that using a variable of the same type as the elements in a vector or array will copy the value of each element into the variable for each iteration of the loop.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=193)** So this is okay in this example where we have a vector of integers.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=198)** However, if you have a vector of large objects, you may want to use a reference instead.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=205)** We'll see some examples of this later.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=208)** Now, in the body of the loop, we can safely treat x as the current element.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=213)** So we'll do the same as in the previous loop, but using x.
>
> **[3:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=218)** So now we expect to see the average of the values in the vector printed twice.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=224)** And there you have it, the average is 34.6.
>
> **[3:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=229)** Great, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), for. (1), require (1), case, (1)
> **Prerequisites:** initialization (2)
> **Versions:** 34.6 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Calculate GPA from a vector
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=0)** (bright, upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=5)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=8)** This time, your task is to calculate the grade point average, or GPA, for a student.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=14)** You'll retrieve the data from a vector of grades, and you'll print the GPA on the screen.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=20)** To calculate the GPA, please use this formula.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=24)** The GPA for a student equals the total points awarded in all of their courses divided by the total amount of credits in those courses.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=34)** As a part of calculating the points, we'll use this table to convert letter grades to points.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=41)** A is worth four points, B, three points, C, two points, D, one point, and zero points for an F.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=50)** To be clear, let's look at an example.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=53)** Let's say some student named George took three courses, algebra, physics, and English.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=60)** Algebra is worth five credits, physics, four credits, and English, three credits.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=66)** And he got a B in algebra, an A in physics, and a C in English.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=73)** So to calculate George's GPA, the total points are calculated by adding the products of the grades by the credits in each course.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=82)** We'll divide this by the total number of credits in the three courses.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=88)** So in this example, George would get a GPA of 3.08.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=95)** You'll start from my solution to the previous challenge, but this time, I have created three vectors of objects of each class.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=104)** In line 13, we have a student's vector, which is initialized with two students, George P. Burdell and Nancy Rhodes.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=114)** I entered all the IDs sequentially starting from one.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=119)** Then in line 16, we have a courses vector with four courses.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=124)** We have algebra, physics, English, and economics with five, four, three and four credits respectively.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=133)** And then in line 21, we have a vector of grades where the grades for all students are stored.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=140)** The first line has the grades for student number one, George.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=145)** If you take a minute to look at these grades, you'll see that George is the same example for a GPA calculation I just showed you.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=154)** Then the next line has Nancy's grades.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=158)** Moving on, we have the code to get an ID from the user.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=162)** That should be one or two because, in this case, we only have those students in the vectors.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=169)** The code finally prints the value of the GPA variable.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=173)** So please fill in the blank in lines 27 and 28 with your code to calculate the GPA for the selected student.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=182)** Also, notice that line 31 is just a placeholder that gets the name of the first student in the student's vector.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=191)** So please replace that line with the correct code to get the name of the selected student into the student SDR string.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=201)** This challenge should take you about 20 minutes.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=204)** So give it a go, have fun, and watch the next video for my solution.

> [!info]- Semantic Content
>
> **Env Vars:** gpa (9), sdr (1)
> **Code Keywords:** let (2), class. (1), case, (1)
> **Versions:** 3.08 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright, upbeat music) (1)

#### Solution: Calculate GPA from a vector
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=5)** - [Instructor] Here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=7)** Let's start at Line 27.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=9)** I have declared two floats to hold the total points and the total credits, respectively, both initialized at 0.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=17)** Next in Line 28, we have arranged for loop for all elements in the grades vector.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=24)** The current element will be in the grd reference.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=28)** Notice that its type is not grade, but grade ampersand.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=33)** That means that grd is a reference to the current element.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=37)** This is done to avoid copying every element to grd as the loop progresses because objects tend to have a lot of data in them, and making a copy is definitely not what we need right now.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=51)** We just need to traverse the vector.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=54)** We could also do this with a pointer, by the way.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=57)** References to objects like grd use the same syntax as the actual objects, so we may treat grd as the current element of the grades vector in the loop.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=69)** You may also use auto instead of grades for the type here, but I'll leave it as it is.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=75)** Since the grades vector contains grades for every student, I will only consider the grades for the selected student in the id variable.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=85)** That's what the if statement in Line 29 is doing.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=88)** Basically, I'm checking each element in the grades vector to see if it's a grade for the selected student.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=96)** If it's not, we just move on to the next entry.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=100)** Also, notice that this if statement is the only part of the loop body, so I'm not using curly brackets.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=109)** Now, remember that the grade is a letter, so we have to convert it to its number equivalent.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=116)** That's why in Line 30 I have declared a float named num_grd to hold the numeric grade for each letter.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=124)** In the switch statement, you can see that I'm assigning different values to num_grd depending on the letter.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=132)** A is 4, B is 3, C is 2, D is 1, and anything else is 0, including F.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=141)** Now starting at Line 44, we will calculate the total credits and points which we will need to calculate the GPA.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=150)** The first thing I do is look for the credits of grd with a while loop in Line 45.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=157)** Look at the condition.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=159)** First, we have an integer named j initialized at 0.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=164)** So the first thing the condition checks is that j isn't equal to the size of the courses vector.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=171)** I am checking this because the next part of the condition wouldn't be safe if the first condition isn't met.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=179)** Notice the double ampersand operator.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=181)** That means logical and, not bitwise and.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=186)** So a nice thing about logical or and logical and operations is that they perform short-circuit evaluation.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=194)** So we can do what we have in this line.
>
> **[3:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=197)** In the first part of the and, check if it's safe to evaluate the second part.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=203)** Because if it's not, then the second part will not be evaluated at all.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=210)** So in the second part of the condition, I check if the id of the course at index j is not the course for the grade we are currently looking at.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=220)** The body of the loop is a simple increment of j.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=224)** So what it does is traverse the course vector until it finds the course for the current grade.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=230)** Once the while loop is done, j will have the index of the course we are interested in.
>
> **[3:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=238)** In Line 47, I am adding the credits for this course to the credits count.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=244)** And in Line 48, I am adding to the points count the product of the current grade and the course's credits.
>
> **[4:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=253)** Once the for loop is done, points and credits contain just what we need to calculate the GPA, and that's what I did in Line 50.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=264)** Lastly, we are supposed to print out the name of the selected students with the student_str string at Line 54.
>
> **[4:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=274)** So for this I did pretty much the same as for the course's credits, traverse the students vector until I find the requested id, and then assign that name to student_str.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=287)** So let's see it working.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=291)** Let's look at the GPA for George whose ID is 1.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=296)** And there you have it.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=297)** The GPA for George P. Burdell is 3.08.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=303)** Now go ahead and try it for Nancy.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=306)** As a final note, you may have noticed that there are many things that could go wrong with this code.
>
> **[5:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=312)** For example, some course ID or student ID may not be found, so you may want to add these validations as an additional exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1)
> **Code Identifiers:** num_grd (2), student_str (2)
> **Env Vars:** gpa (4)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 3.08 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Functions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating functions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=0)** - [Instructor] We have been using functions in pretty much every example up to this point.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=6)** Now it's time to take a closer look at functions and their many advantages.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=11)** Functions provide modularity to your code.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=15)** That's why virtually every programming language supports them.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=19)** Functions are procedural blocks of code that return a value.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=23)** They usually receive a fixed number of arguments of specific types, but some functions use a variable number of arguments.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=32)** Now, there's a distinction between the terms parameter and argument.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=37)** Arguments are the variables or constants that are sent to the function when it is called.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=43)** Parameters, on the other hand, are the variables in the function that take the values of their arguments.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=51)** Also, functions may be global, or they may be members of a class.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=56)** Just the same thing we call methods in Java and Python.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=61)** Let me show you how to define both types of functions.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=65)** For this, we'll start with the student record system where we left it.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=70)** Now, you may have noticed that there are several things that seem out of place in this code, if you look at it from an object-oriented programming standpoint.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=80)** For example, allowing the main function to access the vectors.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=86)** Or getting the numeric value of each grade in the main function.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=92)** Or even looking through a vector to retrieve data from the ID.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=97)** If you find these things reckless or out of place, you are right.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=101)** It looks like these vectors belong somewhere other than the main source file.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=107)** In fact, we may encapsulate most of this code in one class.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=112)** So let me show you how I have copied those vectors to a class named student records, and how I have prepared the class to move that misplaced code to an appropriate location.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=125)** Let's go to records dot H.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=129)** Here's what's new.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=130)** First, I included the vector header in line three.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=136)** Then, in line 43, I declared the student records class.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=141)** It has three private data members, which are the same vectors we had in the main code.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=147)** In line 49, we have a private member function get num grade for converting letter grades to numbers.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=156)** Notice that I'm not specifying the parameter names just yet.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=161)** It turns out that the declaration informs the compiler about the return type, the functions name, and the parameter types.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=171)** This is known as the function prototype.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=174)** The definition, on the other hand, implements the function procedure.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=180)** The names of the parameters are not required in the function declaration, but they are mandatory in the function definition.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=189)** Now all the public members are functions.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=192)** The first three add elements to the vectors.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=196)** That's add student, add course, and add grade.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=201)** These will replace the insertion of elements in the original code.
>
> **[3:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=206)** The remaining functions are get student name, get course credits, and get GPA, which will also replace most of the messy code in the main function.
>
> **[3:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=218)** Did you notice that I didn't overload the constructor?
>
> **[3:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=222)** It turns out that I don't need to initialize anything when I create my student records object, so the default constructor will do.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=232)** Now let's look at the implementations in records dot CPP.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=239)** Starting at line 45, the add student add course and add grade functions simply use the pushback function to add elements to their vectors.
>
> **[4:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=249)** The rest of the functions aren't implemented yet, so I'll move some code from the main function into these functions and make some adaptations.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=262)** Let's start with the get num grade function in line 57.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=267)** This function receives a letter grade in a char, and returns a float.
>
> **[4:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=274)** In the main source file, that conversion is done using a switch statement between lines 30 and 42.
>
> **[4:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=281)** So let me cut this code and leave a to do comment here as a reminder to write the code that will use the get num grade function.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=292)** To do, get numeric grade.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=295)** Now let's go back to credits dot CPP, and paste that code as the body of the function.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=302)** First, I must change the variable checked in the switch.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=306)** I need to replace this with the parameter, which is called letter.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=311)** And lastly, I must return num GRD.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=315)** Great, let's move on to get student name.
>
> **[5:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=320)** This function takes the ID of a student as a parameter, and returns the name of the student as a string.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=328)** In the main code, we do this in lines 39 through 43.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=333)** Let me cut and leave another to do comment as a reminder to call the get student name function.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=342)** Now let me go to records dot CPP, and paste the code as the body of the function.
>
> **[5:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=348)** The parameter is called SID, so let me change that in the why loop.
>
> **[5:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=356)** Also, since we are only assigning the student's name to the string at the end, we can get rid of that string variable, and simply return the result of the get name function, like this.
>
> **[6:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=371)** Moving on, we have the get course credits function.
>
> **[6:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=376)** This one is very similar to the previous one, so let's go to the main function.
>
> **[6:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=382)** The piece of code I will cut is in lines 31 through 34.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=387)** But notice that the last line is doing two things.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=391)** Getting the credits, and adding them to the credits variable.
>
> **[6:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=396)** So I will note this in yet another to do comment.
>
> **[6:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=400)** Okay, let's go back to records dot CPP.
>
> **[6:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=405)** And let me adapt the function.
>
> **[6:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=407)** Once again, I will do the same changes as in the get student name function above.
>
> **[6:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=416)** Great.
>
> **[6:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=417)** Now we are ready to use these functions, but don't try to compile yet, because we still need to finish the main function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), let (14), class. (3), private (2), switch (2)
> **Env Vars:** cpp (4), gpa (1), grd (1), sid (1)
> **Definitions:** is called (3), known as (1)
> **CLI Commands:** python (1), find (1), make (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### Function parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=0)** - [Instructor] Now I'd like to take a moment to tell you a bit more about function parameters.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=5)** In many programming languages, you may pass arguments by value or by reference.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=11)** C++ implements three variants of this.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=15)** Normally, arguments are passed by value.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=19)** This means that inside the function you'll have copies of the variables sent as arguments.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=25)** You cannot modify the original values from the color scope.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=29)** You may also pass arguments as pointers.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=32)** That means that you may send the address of the variable as an argument.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=37)** This will give you the power to access the variables inside the function.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=42)** This may be dangerous, but it's a possibility.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=47)** And you may also pass arguments as references.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=50)** This is similar to passing arguments as pointers, but the limitations of references often make this the smart and safe choice.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=61)** Here we have a simple example for you to see the syntax of these three different ways of declaring your function parameters.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=69)** I'll create three functions.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=71)** One that takes arguments by value, one by pointer, and one by reference.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=78)** In line eight, I have declared two integers, A., initialized at nine and B., un-initialized.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=86)** Then I have a series of lines to print their values.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=90)** In between those lines, I'll call each of these functions just to verify that they work.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=96)** So the first function will be used to assign a value to B.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=100)** This function will return an integer containing the square of its argument.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=105)** Let me do this in line eight.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=108)** Notice that the parameter X is declared as an integer.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=112)** So this is the normal way of passing arguments by value.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=117)** X will receive the value of the integer that is sent to the function as an argument.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=122)** This argument may be a variable or a constant.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=126)** Whichever is the case, X will be assigned that value.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=131)** The body of the function is quite simple, but I want you to see that there's no problem at all if I modify X.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=138)** Let me assign the square of X back to X.
>
> **[2:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=142)** Yes, I have just lost the value of the argument because I've overridden it.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=148)** However, X is an automatic variable.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=151)** It will cease to exist once the function returns.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=155)** Now let me return X.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=158)** Once again, returning X does not mean that X will make it outside the scope of the function.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=165)** No, its value will be returned.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=168)** So back to the main function, let me assign the square of A to B in line 15.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=176)** Now let me implement two swap functions.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=179)** Both functions will interchange the values between their two arguments.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=184)** In line 14, let me define the first one, receiving arguments by address, that is as pointers.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=196)** The function doesn't return anything and uses two pointers to integers as parameters, X and Y.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=204)** To implement the swap, I'll use a temporary integer called temp.
>
> **[3:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=209)** Temp will get the value of the integer where X is pointing.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=214)** Notice the indirection operator.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=217)** Then where X is pointing, we will assign the value of the variable where Y is pointing.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=224)** And finally, where Y is pointing, we'll get temp.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=231)** Now let me call that function in line 24.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=235)** A and B must be passed as addresses, so I'll use the address of operator.
>
> **[4:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=245)** Notice that technically we are still passing arguments by value because we are not passing A or B.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=252)** We are passing their addresses to a couple of pointers that will receive those values which happen to be addresses.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=262)** Okay, now let's write the remaining function, which takes arguments by reference.
>
> **[4:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=268)** Let me do that in line 21.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=271)** This will be an overload of the previous swap function.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=275)** In other words, this is another version of that function with a different parameter list.
>
> **[4:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=284)** My parameters will also be called X and Y but notice the ampersand at the end of their type.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=291)** That means they are references.
>
> **[4:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=294)** The body of the function is very similar to the body of the function that uses pointers, but I don't need to de-reference.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=304)** Remember, references are aliases, so they are treated as the variables themselves.
>
> **[5:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=310)** This is very interesting because it gives you access to variables outside the scope of the function.
>
> **[5:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=317)** So now all we must do is call this function.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=321)** I'll do that in line 33.
>
> **[5:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=325)** And we are ready to try it.
>
> **[5:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=330)** So as you can see, we correctly calculated the square of nine, which is 81 plus A and B are being correctly swapped twice.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), let (9), pass (3), implements (1), this. (1)
> **Definitions:** means that (2), is an  (1), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Using functions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=0)** - [Instructor] You may have noticed that there's one function left to implement.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=4)** This is the get GPA function.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=7)** In this function, we'll use most of the functions we have just written.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=11)** In the main source file, this is between lines 27 and 34.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=16)** So let me cut and leave a to do comment as usual.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=21)** Now let's adapt the code in records.cpp.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=26)** The first change is in line 90.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=28)** Notice that the type of GRD is referenced to grade.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=33)** Now since we are inside a getter function that enforces cons correctness, this type is in conflict.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=41)** Yes, that constant qualifier at the end of line 88 means that the code inside the function cannot modify this student records object.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=51)** So to solve this inconsistency, we can pledge never to modify GRD by simply adding a const qualifier to it.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=60)** The second change is in line 91, the ID is our parameter called SID.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=68)** Then in line 92 we have the note I left to get the numeric grade from the letter grade.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=75)** So we could do it here.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=77)** But notice that the num grade variable is used in line 94.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=83)** So let me place the function call there.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=85)** Instead of num_grd, I'll call the get num grade function.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=90)** Passing the grade from our GRD object as the argument.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=96)** Now I'll get rid of the comment in line 92.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=99)** So now we have the comment to update the credits variable.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=103)** Let me uncomment this call to the get credits function.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=109)** The argument is the course id, which is in the GRD object.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=115)** Now look at line 93.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=117)** This line also uses the current course credits.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=121)** So let me put this value in a variable to use it in these two lines.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=126)** Remember, this is an unsigned char and I will name it current_credits.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=132)** So let me assign the function call to it and use its value in lines 93 and 94.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=143)** And now we can return the value that was previously assigned to GPA.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=150)** There, we are done getting the messy code into our class.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=154)** Now let's use this code in the main source file.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=159)** There's still some cleaning up to do.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=162)** The GPA floating point variable in line 10 is no longer useful to us because we'll only use it once to print its value.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=170)** So I'll get rid of it.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=172)** I will also get rid of the get GPA comment.
>
> **[2:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=177)** Then I'll call the GPA function function instead of reading the variable up ahead.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=182)** But before I do that, we need a student records object.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=186)** Let me declare one in line 11. I'll call it SR.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=192)** Now we can call some functions.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=196)** In line 27, we need to get the student's name.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=198)** So let me declare the string again and call the get_student_name function.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=211)** Lastly, let me call the GPA function that was pending in line 28, but we are not done yet.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=224)** We still have those vector declarations which used to initialize our vectors in the original version of the code.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=231)** So now that we need to get that data into our vectors in the SR object, this is a good chance to create a global function.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=240)** Now the compiler formally requires you to write a function declaration or prototype and then a function definition.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=250)** Recall that function declarations are usually written in a .h file and the implementations in a corresponding .cpp file.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=259)** You may sometimes get away with not declaring your functions and just defining them right away in the code.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=266)** But this is considered a bad practice.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=270)** So let's go to line 9 and declare a function that doesn't return anything and receives one parameter of type student records reference.
>
> **[4:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=280)** I'll name the function initialize.
>
> **[4:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=284)** I'm declaring this function in the main source file because this function has nothing to do with the student record system classes.
>
> **[4:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=293)** In fact, declaring global functions in Heather files is sometimes considered a bad practice.
>
> **[4:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=299)** If you must do it, those functions are usually declared within a namespace.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=305)** Now I'll copy this prototype and scroll down below the main function to paste it.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=311)** And this is where I will implement this function.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=315)** I am allowed to do this because I have already declared the function.
>
> **[5:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=319)** So whenever the function is used in main, the compiler will know the types to use or not.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=326)** But wait, this is just the prototype.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=328)** I still have to name the parameter. I'll name it srec.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=333)** And now let me scroll up to get the original vector declarations.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=340)** In their place, I'll leave a call to the initialized function.
>
> **[5:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=347)** The argument will be SR, of course.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=354)** So let's adapt line 28.
>
> **[5:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=357)** To add students, I'll use the add_student member function of srec, and the arguments will be the same as the ones we used in the constructor.
>
> **[6:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=374)** And now let me do the same for the rest of the entries.
>
> **[6:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=379)** Now we are done.
>
> **[6:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=380)** Let's see if it behaves like the original version.
>
> **[6:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=386)** Let's look at the GPA for George.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=387)** Oh yeah, it seems to be working all right.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), let (16), const (1), class. (1)
> **Env Vars:** gpa (7), grd (4), sid (1)
> **Code Identifiers:** num_grd (1), current_credits (1), get_student_name (1), add_student (1)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** bad practice (2)
> **File Paths:** records.cpp (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a report card function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=5)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=8)** This time your task is to create a function in the StudentRecords class.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=13)** You'll work with the code as we left it.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=17)** The function must receive a student's ID as an integer and it must print out a report card on the screen.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=24)** This report card must include the name of the student, the course names, the letter grades, and the GPA.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=33)** Feel free to start your function with the code for the GPA function.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=37)** You may even piggyback on that code or you may choose to start from scratch.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=42)** Your choice.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=44)** For this challenge, I have modified the main function to have a function call in line 20.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=51)** This is the function you must write.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=53)** Please make sure to name this function report card as you see it here.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=59)** This may take you about 30 minutes.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=62)** So have fun and make sure to watch the next video for my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), class. (1)
> **CLI Commands:** make (2)
> **Env Vars:** gpa (2)
> **Best Practices:** make sure to (2)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a report card function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=0)** - [Instructor] Here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=7)** Starting at line 108 of records dot cpp, I created the report card function.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=13)** As I suggested, I simply copied the get GPA function and added some lines to print data.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=22)** The first one is in line 110 where I'm printing the name of the student.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=28)** Then in line 113, I'm printing the course name and grade notice that I needed another function to fetch the course name.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=36)** Let's look at it, starting at line 101.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=40)** As you can see, I'm performing the same sequential search as in the get course credits and the get student name functions.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=50)** Now, if you are thinking that sequential search is not the best search algorithm out there you are right, the code could definitely do better.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=60)** I'm doing this mostly because I'm using plain vectors.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=65)** The standard template library comes with a variety of containers among which you'll certainly find the most suitable for your applications.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=76)** Going back to the report card function, the last change I made to the original GPA function is in line 118.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=85)** That was the return line in the GPA function, but the report card function has a void return type, so I replaced that with the printing line of the GPA.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=99)** That's it, now, an important detail of this function is that it uses see out, which is why I included IO stream at line two.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=110)** Alright, let's see it working.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=113)** This time I will request the report card for Nancy whose ID is two.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=121)** And there it is, Nancy got an A in algebra, an A in physics, and a B in economics.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=129)** That's a GPA of 3.69.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2), type, (1)
> **Env Vars:** gpa (5)
> **CLI Commands:** find (1)
> **Versions:** 3.69 (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. File I/O

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Opening a text file for reading
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=0)** - [Instructor] Now let me show you how to read text files.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=4)** For that, the standard library provides the <fstream> header, which I've included in line seven.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=11)** This header is a part of the input output library and it provides a number of classes to handle files.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=18)** In line 10, we have the declaration of an ifstream object called inFile.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=25)** The ifstream class is an input stream from a file, and so, it is very similar to the cin object.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=34)** Next, we have the declarations for a string, an integer, and a char, which will be used to store values coming in from the file.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=44)** Then in line 15, I open a file with the open member function of inFile.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=50)** The file is called people.txt and you can find it in the same folder as this exercise file.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=59)** After successfully running this function, we can use inFile to read that file we just opened, but this function may run into a error, so we must check if everything went well.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=73)** That's why in line 16, I'm using the fail function to check if the open function failed.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=80)** If it did, I print a message on the screen, and if it was successful, we have the else part in line 18.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=89)** Now, there are many ways to run sanity checks on our files, but for now, I will simply assume that the file has the exact format I expect.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=100)** For example, we may assume that some other program has produced this file, so, if the file is found, I must have the correct format.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=110)** Speaking of which, let me show you the format of my file.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=114)** The file has a series of entries with a name, an age, which is supposed to be an integer, and a letter, which is the first initial of the name.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=126)** For our example, we will extract the names as strings, the ages also as strings, and convert them to integers, and lastly, the initials also as strings and convert them to single characters.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=143)** And we will do that as long as we find entries in the file.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=147)** So back to the code, the while loop in nine 19 will iterate as long as the end of file is not reached.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=156)** That's what the eof function returns.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=159)** Then we have the getLine function in line 20.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=162)** This function is defined in the str header.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=166)** It takes one line of text from the stream in the first argument and replaces the contents of the string in the second argument with the acquired text.
>
> **[2:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=177)** You can use this function with cin as your input stream if you want to read complete lines of text instead of separate words from the terminal.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=188)** So the getLine function is taking one line of text from the input file and writing it to str.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=196)** Next, I'm printing that line on the screen.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=200)** Once the while loop is done, I close the file.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=203)** It's important to close the files you no longer need.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=207)** This code should print the entire file on the screen.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=211)** Let's see it.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=214)** There you have it, four entries of names, ages, and initials.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=219)** Now, once again, assuming the file has the exact intended format, let me extract the names as strings, the ages as integers, and the initials as single characters.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=234)** So let me go to line 21 and replace the std::endl with a ", ".
>
> **[4:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=241)** Now I'll call the getLine function again, and now to convert the incoming string to an integer, we can use the stoi function in the str header.
>
> **[4:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=253)** This function simply returns the integer represented by the string.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=258)** Now I will print that integer.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=263)** And lastly, I will call the getLine function once more.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=267)** And since I know the string will contain one letter, I can get that character by indexing the string, because the square bracket operator is supported by the string class.
>
> **[4:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=280)** Now let me print that character and break the line.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=287)** And we are done.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=288)** Let's see it running, and everything seems to have been fetched okay.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=297)** For this example, I'm only printing the elements in the file, but as you were able to see, converting data from strings can be very easy.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (7), class. (1)
> **Code Identifiers:** getline (4), infile (3)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **CLI Commands:** find (2)
> **Analogies:** similar to (1), for example (1)
> **File Paths:** people.txt (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)

#### Open a text file for writing
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=0)** - [Instructor] Here's a quick example to show you how to write into a text file.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=5)** It looks very much like the file reading example, and it's actually a bit simpler.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=11)** In line 10, we have the declaration of an ofstream object named outFile.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=17)** Then we have two floats of arbitrary values, a and b.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=22)** Then we have the same logic as before.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=25)** First, we open the file in line 13, and the open function may take a second argument to specify the mode of the file usage.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=36)** By default, it will allow us to write into the file, and if the file already exists, it will replace its contents.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=45)** There is also an append mode to continue writing into the file starting after its last character.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=52)** Failure may occur if the file is already open for writing by some other object or program.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=59)** So I report that in line 15.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=63)** And starting at line 17, I'm using the outFile object to write into the file.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=69)** The good news is that we can use the left bound insertion operator just the way we've been using it with cout.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=78)** So I'm writing the value of a in one line, then the value of b in another line, and then their addition and product.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=88)** So notice that the insertion operator takes care of converting those floats to strings before writing into the file.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=95)** Finally, I close the file and I report that it was written successfully in line 22.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=102)** So let's see it running.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=106)** And here we just get the message, File written successfully!
>
> **[1:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=110)** So let's open that file.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=114)** And as you can see, the file has the expected contents indeed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), default, (1), continue (1), finally, (1)
> **Code Identifiers:** outfile (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Upgrade to work with files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=0)** - [Instructor] It is time for our final challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=8)** This time, your task is to upgrade your report card application to work with text files.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=14)** You'll have to retrieve all student course and grade data from text files, and then create a report card for all students in a text file named report.txt.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=26)** For the input files, please use the provided students.txt, courses.txt, and grades.txt.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=34)** These files have the same format I use in the file reading exercise with one value per line and ending at the last character.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=43)** For example, the student's file has a series of ID name pairs with the ID in one line and the name in the next line.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=52)** The file ends in the last character of the last name.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=55)** There is no empty line at the end.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=58)** This is crucial because this is how you'll know that you're done reading the file.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=62)** These files come with the data we've been working with for George and Nancy.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=67)** Take a minute to look at these files to make sure you understand how they're organized.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=72)** After doing that, add at least one more entry to each file.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=77)** That's one additional student, one additional course, and at least one additional grade.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=83)** Do that manually, this should take you about 30 minutes.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=87)** As usual, watch the next video for my solution when you are done or if you get stuck.

> [!info]- Semantic Content
>
> **File Paths:** report.txt (1), students.txt (1), courses.txt (1), grades.txt (1)
> **Cross-References:** in the next (1), in the last (1), next video (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Upgrade to work with files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=0)** - [Instructor] Let's look at my solution.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=7)** First, starting at line 16, I created file stream objects named inFile and outFile as before.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=17)** Then, I modified the main code to use two new functions.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=21)** The first one is in line 19 where I initialized the StudentRecords object from the input file.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=29)** And the second one is in line 20 where I call a member function of SR called report_file.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=36)** You can see the prototype for the initialized function in line 11.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=41)** Notice that it's an overload that receives an input file stream reference in addition to the StudentRecords reference.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=50)** I left the original function defined in line 10 anyway.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=55)** So let's scroll down and look at the new initialized function implementation.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=61)** At this point, I think you'll be able to tell that I copied and pasted the file reading example three times here and adapted that code to read the students file first, starting at line 33, then reading the courses file, starting at line 49, and then the same thing for the grades file, starting at line 67.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=89)** After reading each file, I am reporting to the screen how many entries I found, so I report how many students, courses, and grades were found.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=101)** Now, for the report_file member function, let's go to records.cpp.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=108)** But first, since the code for the report_file was going to be almost the same as the report_card function, I decided to modify that function a bit to receive a second argument as reference.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=122)** It's an output stream object.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=125)** I named the parameter stream, and I replaced the occurrences of cout with stream.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=131)** You can see this highlighted in lines 111, 114, and 119.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=138)** So now this function works for either cout, that's the screen, or a file for writing.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=146)** So the new form of this function to print a report card to the screen will have the student ID and then cout as arguments.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=156)** Now, for the report_file function, most of the work is already done for us.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=162)** It starts at line 122.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=164)** The function receives an output file stream as reference, and it uses it in line 124 where it opens report.txt.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=174)** Now, the work starts at line 128 after the error checking.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=180)** First, I place a horizontal delimiter, and then we have a range for loop that gets every element in the students vector in a reference named st.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=191)** So in line 130, I get the student ID in the sid variable, and then I call the report_card function operating on outFile.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=201)** So it will print the same report card, but in our report.txt file.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=207)** After each report card, we have a new horizontal delimiter in line 132.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=214)** If everything goes well, line 135 reports success.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=220)** Let's go back to the main function.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=223)** As you can see in lines 19 and 20, I am calling the file-based functions, but the comments at the right show the previous version of the initialized function, which still works, and the new version of the report_card function in case you want to use them.
>
> **[4:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=241)** That's it, so let's see it working.
>
> **[4:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=245)** Here, you can see that the program found two students, four courses, and six grades, and lastly, it created report.txt successfully.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=255)** So let's look at that text file.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=258)** And here we have both report cards.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=262)** Now, go ahead and add more entries to the input files, and then try running the application again.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (6)
> **Code Identifiers:** report_file (4), report_card (3), outfile (2), infile (1)
> **File Paths:** report.txt (3), records.cpp (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=0)** - [Eduardo] Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=3)** Give yourself a pat on the back.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=6)** Of course, there's a long road ahead to master this amazing programming language.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=12)** So if you're feeling up for a challenge, or 16, consider taking my LinkedIn learning course titled, Level Up: C++, where you can choose from a selection of challenges to test and sharpen your skills, all of this using GitHub code spaces.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=29)** Learn about the C++ standard template library.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=33)** You may want to consider my LinkedIn Learning course about it.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=37)** Learn about coding styles and the best programming practices for modern C++, like smart pointers, Lambda functions, and so on.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=47)** For that, I recommend the LinkedIn learning course titled, C++ Best Practices for Developers.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=54)** And in general, learn more object oriented programming features of C++, like inheritance and polymorphism.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=63)** Thank you very much for taking this course.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=66)** I hope you had fun taking it as much as I had creating it.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=71)** I'm Eduardo Corpeno.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=73)** Till next time.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (1)
> **Tools:** github (1)
> **Exercise Files:** template (1)
> **Speakers:** - [eduardo] (1)


## Instructor

- [[Eduardo Corpeño]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-cpp-4489005/codespaces)

## Skills Covered

- C++

## Path Context

### In [[Getting Started with C++]]
← [[Introducing Functional Programming in C++]] | **3 of 5** | [[Web Servers and APIs using C++]] →

## Appears In

- [[Getting Started with C++]]

## Related Courses

_Courses sharing skills:_

- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Introducing Functional Programming in C++]] — C++
- [[C++ Design Patterns- Structural]] — C++
- [[C Plus Plus Essential Training]] — C++

---

[↑ Back to top](#)