---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-classes-and-functions
url: "https://www.linkedin.com/learning/advanced-python-classes-and-functions"
duration_minutes: 136
duration: 2h 16m
level: Advanced
updated: 8/12/2024
learners: 54591
skills:
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-language-features-4311093/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEpM0FMFQ7drw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731707897651?e=2147483647&amp;v=beta&amp;t=oSAkOkzdaGrEGI-T9AjPq8IChhfH9_SRA2D0m084va0"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
prev_courses:
  - '[[Advanced Python]]'
next_courses:
  - '[[Advanced Python- Working With Data]]'
path_nav: '[{"path":"Master Your Python Skills","position":2,"total":11,"prev":"Advanced Python","next":"Advanced Python- Working With Data"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Classes%20and%20Functions.md)

![Advanced Python: Classes and Functions](https://media.licdn.com/dms/image/v2/D4E0DAQEpM0FMFQ7drw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731707897651?e=2147483647&amp;v=beta&amp;t=oSAkOkzdaGrEGI-T9AjPq8IChhfH9_SRA2D0m084va0)

# Advanced Python: Classes and Functions

> Python has become the language of choice of many developers for building all kinds of applications across a wide range of industries, but to fully take advantage of its power and flexibility, you need to master all its advanced functionality. Python is a flexible, customizable language that provides features that other languages support only through third-party libraries or require that you build 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions) | 2h 16m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Language Features** (5 videos)
- **3. 2. Advanced Functions** (5 videos)
- **4. 3. Python Comprehensions** (5 videos)
- **5. 4. Classes and Objects** (7 videos)
- **6. 5. Structural Pattern Matching** (7 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=0)** - [Joe] Python has quickly become one of the go-to programming languages for developers across a wide range of industries and application types from automation to data science to building complex back-end infrastructure.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=13)** Hi, I'm Joe Marini.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=15)** I've been building software professionally for some of the biggest and best known companies in Silicon Valley for more than 30 years.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=22)** In this course, I'm going to show you some of the more advanced features of the Python language.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=26)** We'll see how to write code that is easier to read and maintain, build classes that work just like the ones that are native to the language, and work with some of the newest features of the language itself like structural pattern matching.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=39)** The Python language is always evolving and becoming more powerful and easier to use.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=44)** So if you're ready to take your Python skills to the next level, then come join me in my LinkedIn Learning course, "Advanced Python: Language Features".

> [!info]- Semantic Content
>
> **CLI Commands:** python (5)
> **Analogies:** just like (1)
> **Speakers:** - [joe] (1)

#### Getting set up
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=0)** - [Instructor] This course is intended for developers who are already familiar with Python and want to learn more about some of the advanced features of the language.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=8)** You don't need to be a deep expert on Python but you do need to have an understanding of the basics, such as how to write functions, and use variables and so on.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=16)** Now, there's a couple of different ways you can work with the example code in this course.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=20)** I've set up a GitHub repository with the examples, and you can find it at this link you see here.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=26)** The course content is organized into two separate folders.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=30)** There's the Finished folder, which contains all of the code examples in their finished state so that we can compare them against your code as we work through them.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=40)** The Start folder contains the code examples in their beginning state and this is the folder I will be working in throughout the course as we build towards the finished state for each example.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=51)** Now, if you want to download the examples and work with them locally, that's easy enough to do.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=56)** You can just scroll to the Code menu and you click on Local and you can either clone the repository or you can download a zip file and fire them up in your favorite code editor and work on them.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=66)** And that's fine.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=67)** You'll just have to make sure that you have Python installed on your computer, at least version 3.10 in order to use the examples.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=74)** But this repository has also been set up with a GitHub codespace, so you can just work directly online with nothing to install.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=82)** All you need to do is fork a copy of the repository in your own GitHub account and then fire up a codespace here in the Code menu.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=89)** Just go to the Codespaces tab and click on the little plus sign and you'll be able to work online in the Cloud.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=95)** Now you can see I've already done that.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=96)** I've created my own codespace and I'm going to be using this in the course.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=101)** Now, either way, it works fine.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=102)** If you want to work locally, that's great, but I'm going to be using the codespaces feature in this course.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=108)** So let me open the codespace and show you what it looks like.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=112)** And when you create your own codespace it may take a few moments to spin up.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=116)** So just be patient.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=117)** Now, when the codespace starts you'll see a browser-based version of Visual Studio Code.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=123)** And here in the files list are all the files you'll need for the course.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=128)** There's also a built-in terminal, so if I go to the View menu and choose Terminal, you'll see that there's a terminal right here, and I can check to see if Python is already installed, and we can see sure enough that it is, all right.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=141)** You're also going to want to make sure that you have the Python and Pylance extensions installed.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=147)** So this icon right here with the boxes, this is the Visual Studio extensions, and this is my codespace, so I've got a bunch of extensions installed, but if you scroll down, you'll see I have Python and Pylance and these are the two that you need.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=162)** So if you don't already have these installed you just go search them in the marketplace.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=167)** Just do a search on Python, and you'll see this will probably be the first result.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=171)** So I'll click on that.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=173)** And in fact, this is the only one you need to install because this will automatically install Pylance and a couple of other extensions that are useful for working with Python.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=182)** So once you have this set up that's pretty much all you need to do.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=186)** So install the extensions, get your codespace running, and then it's really just as simple as going to the start folder, opening up chapter one, and you're ready to start coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (2), find (1)
> **Tools:** github (3), terminal (3), visual studio (2)
> **Prerequisites:** install (4), set up (3), you'll need (1)
> **UI Navigation:** click on (3), go to (2), open the (1), scroll down (1)
> **Exercise Files:** download the (1), zip file (1)
> **Code Keywords:** let (1)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)

#### Tour of CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=16)** These challenges are hosted by Coder Pad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=25)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=34)** The Code Challenge has four areas.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=37)** In the top left, you'll see instructions.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=39)** There's a code editor here in the top right for you to write your answer.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=44)** There's another code editor down here in the bottom right where you see how your code will be used, and there's a console for output in the bottom left.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=54)** You can use these drag handles to allocate space as you like as you're working with the challenge.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=60)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=68)** Each challenge has instructions that include a description of the challenge and the challenge's parameters, and the desired result.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=76)** Depending on the challenge, you will see some additional information in the instructions such as an explanation of the parameters that your code will be given along with some examples of what the expected output might look like.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=89)** So create your answer in the top right code editor.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=93)** There are comments in the starting code showing where to put your solution.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=97)** And when you click test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=104)** So let's go ahead and try that.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=106)** I'll click on test my code, and you can see that I'm clearly returning the wrong answer.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=111)** So I get a message saying, Hey, something isn't working.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=114)** It shows you what my code returned.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=116)** Now if your code isn't successful, you can ask for help.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=119)** And the way that you do that is by modifying these two variables, show expected result and show hints.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=126)** So I'm going to change each of these to true, right?
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=132)** And then I'll execute my code again.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=135)** All right, in this case you can see that my code is still wrong, and it shows that my code returns zero, but the expected result was 19.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=144)** And then I'm given a hint to help me along with the challenge.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=149)** Now the code editor in the lower right shows you how your code is going to be used, and in some cases you can change that code to experiment with different cases.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=159)** Let's go ahead and return the right answer.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=162)** So I'm going to return max of numbers.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=166)** All right.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=167)** And now when I run this code, right, we can see that the the answer is now correct, and 19 sure is the largest.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=176)** I'll make the largest 25, and I'll change some of these other numbers.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=179)** I'll make this one a six, and let's run it again.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=183)** And now we can see that my code is again returning the right answer.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=186)** Now, regardless of whether your answer is successful, you're going to see messages here in the console output in the lower left, and if any of the messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=201)** When you've finished each code challenge, return to the course's table of contents, and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Language Features

#### Python coding style
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=0)** - [Instructor] Once you've been programming for some length of time, you quickly come to the realization that code gets read a lot more often than it gets written.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=8)** In other words, developers spend a significant amount of time working in code that's already been written either by themselves or by someone else.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=16)** And by adhering to a consistent programming style, you can make your job as well as the jobs of your colleagues a lot easier.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=23)** So the The Python Foundation has a series of Python Enhancement Proposals or PEPs, which you can find on the [python.org](https://python.org) site in the developer guide.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=34)** We're going to take a look at some of the guidelines specified by PEP 8, which is the style guide for Python code and can be found at this link.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=43)** Now, obviously following this guide is not required.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=46)** I mean, you can write your Python code however you want as long as it has valid syntax.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=51)** But by following this guide, you'll make your code a lot easier to maintain and update down the road.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=57)** So if you open the guide and scroll down a bit to the table of contents here you can see it's really pretty comprehensive, right?
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=63)** It's a pretty lengthy document.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=65)** Now, I'll leave it up to you to read up on the guide later if you feel like it, but I'm just going to cover the main points.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=71)** Let's start with code structuring and formatting.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=75)** The PEP 8 guide recommends that import statements all go at the top of a file and each one should have its own line.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=83)** And it also recommends that you indent your code with spaces instead of tabs, and that you use four spaces for each level of indentation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=93)** And it's worth noting by the way, that Python 3 explicitly disallows mixing tabs and spaces in the same line.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=102)** Individual lines of code should be limited to 79 characters including indentation spaces, and for comments and docstrings limit those to 72 characters.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=114)** This makes it easy to have multiple code windows open and view them side by side, such as when you're using code difference tools to compare files.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=122)** Functions and classes should be separated by two blank lines.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=126)** And within class definitions, one blank line should separate methods.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=131)** There shouldn't be any white space around function calls or indexes or keyword arguments.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=138)** And speaking of white space, there are a few other subjects that get programmers all riled up.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=144)** This is... White space is one of those things that fights break out over.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=148)** Python attempts to set a reasonable attempt at establishing sensible rules around using white space, some of which you can see in this table.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=156)** And this probably won't be terribly controversial to most people.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=161)** For example, it's preferred not to use white space immediately within brackets, or braces, or parentheses, or between a function call and the list of arguments.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=172)** And similarly, don't put spaces between data structure names and their accessors.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=178)** And it's also generally considered undesirable to try to align values with each other at the expense of variable name lengths.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=184)** You can see that in column or row four there.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=187)** In other areas, Python suggests you just use your better judgment.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=191)** For example, it might be okay to add white space around operators with lower priorities as you can see here with the combination of multiplication and addition operators.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=202)** And sometimes it's better to clarify simple statements with whitespace rather than try to mash everything close together.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=209)** And again, most of this is covered in detail in the PEP documentation.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=214)** If you'd like go ahead and read up on that to learn more.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=217)** I've also included a small sample code.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=220)** Let's jump over to the editor really quick.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=222)** Here in my code I've included a small sample code file.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=226)** If you look in the finished code and you go into chapter one, it's right here.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=229)** It's called codingstyle.finished.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=231)** And this file illustrates some of the rules that PEP lays down.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=237)** You can take a look at this file to see some of the rules in action, and I think you'll agree that they make the code a lot easier to read.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=243)** So feel free to read this on your own time.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (3), find (1)
> **Code Keywords:** let (2), function (2), else. (1)
> **Env Vars:** pep (4)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Exercise Files:** sample code (2)
> **URLs:** [python.org](https://python.org) (1)
> **Versions:** python 3 (1)

#### Understanding strings vs. bytes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=0)** - [Instructor] In Python 3, there are very important differences between the notions of strings and bytes, and it's important to understand this distinction.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=8)** A string in Python 3 is a sequence of Unicode characters while bytes are a sequence of raw eight bit values.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=17)** And it's important to understand this because you can't just treat a string as if it were an array of ASCII bytes, right?
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=23)** So let's take a look at this in practice.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=25)** So let's go ahead and open up strings start in the start folder in chapter one.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=30)** And I have a couple of variables defined, right?
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=33)** One's a sequence of hex values and the other one is a string, alright?
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=37)** And then I print out each one to see what their values are.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=41)** So let's go ahead and run this code.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=42)** So I'm going to open the terminal and going to go into start chapter one and I will run the strings start, right?
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=53)** Okay, when I run this, all right, you can see that the byte values happen to correspond, right, with ASCII uppercase letters.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=61)** And here you can see the string and you see the little b in front of these letters right here, that indicates that it's a list of bytes.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=68)** So it looks like they're both strings at the outset but watch what happens when I try to combine them.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=74)** So if I write something like this, print, you know, s plus b, let's watch what happens.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=79)** So I'm going to try to run this again and I get an error, right?
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=83)** It says, type error, can only concatenate str, not bytes to str, right?
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=89)** Because the print function expects a string.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=91)** And even though those byte values happen to represent letters, I can't just treat it as a string.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=96)** I first have to decode the bytes into a string and then I can add the two.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=101)** And I could do that using a built-in decode function.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=104)** So if I do something like this, if I... I'm going to do s2 equals, and I'm going to type b dot decode and I'm going to decode it using utf 8, okay?
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=121)** And then I'll be able to print s plus s2, and let me comment out the one that's not going to work.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=130)** Now, I happen to know already that these bytes are in ASCII which also just happens to correspond to utf 8.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=136)** So I can decode them directly.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=138)** If I didn't already know that, I'd have to perform some detection logic to see what the encoding is and that's a bit beyond the scope of this example.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=145)** So now that I've combined the two, you can see now that it works, now that I've decoded it into a string.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=153)** And I can also do the same thing with the bytes.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=157)** Now, in that case, I would need to use the encode function which takes a string and produces bytes out the other side.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=164)** And it's the opposite of the decode function.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=168)** All right, so let's go ahead and try that with the bytes.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=170)** What I'm going to do is b2 equals, I'm going to type s dot encode, and I'm going to encode it into utf 8.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=182)** And then I'm going to print b plus b2.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=189)** Okay, so let's try that, and sure enough, that works as well.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=193)** All right, so the bytes are now being concatenated.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=196)** Python provides a set of built-in encodings just for this purpose.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=200)** So let's try to encode our string using utf 32, to see the difference.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=207)** So I'm going to write b3 equals and then I'm going to encode the string, and this time I'm going to use utf 32 instead of utf 8.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=216)** And then I'll print b3 and let's comment out these previous two just to get them out of the way.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=224)** And I'll run this.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=227)** And now you can see that the text has been encoded into utf 32.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=232)** Now it's beyond the scope of this course to go into all the ways that text can be encoded and what each of these different encodings mean.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=239)** To do so actually might take an entire course just by itself.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=242)** What's important to realize here is that strings and bytes are not the same thing in your code and you need to take care when you're operating on both of them and you're trying to combine them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (4), this, (3), case, (1), this. (1)
> **CLI Commands:** python (3)
> **Env Vars:** ascii (3)
> **Versions:** python 3 (2)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### The assignment expression
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=0)** - Back in the Python 3.8 release, a new operator became available that helps simplify variable assignments that can make your code more concise and meaningful.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=10)** So in order to understand how this new operator makes things easier, let's first take a look at how assignment statements work.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=16)** So let's open up assign_start.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=20)** And I'll collapse this down.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=22)** Here in my code, I have a statement that assigns the value of 5 to the variable x and just prints it.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=28)** And this is pretty straightforward.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=29)** You've probably seen this many times.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=31)** The new assignment operator helps address some common coding scenarios, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=37)** So in C, for example, other languages, it's actually legal to do something like this.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=42)** I can write if x = 5:, right?
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=45)** And then do something.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=46)** But this is actually legal in C.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=49)** It's not legal in Python.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=50)** You can see that the little red squiggle says, "Hey, you can't do that."
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=53)** So in C, not only does this perform the assignment, it does the test at the same time, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=60)** And as you might have guessed, this leads to a lot of pretty hard to find bugs, because usually the programmer meant to have the double equal sign there, right, which is legal and it does not do the assignment.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=75)** Now, in this case, Python is preventing this from happening because it doesn't allow this syntax, but the need to do this kind of operation is still valid.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=83)** So let me undo all this, and I'll explain what I mean by having an assignment and a test at the same time.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=91)** So the assignment expression operator, it's sometimes called the walrus operator, and it looks like this.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=98)** I'm going to write x := 10.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=101)** And notice I'm doing this inside parentheses.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=105)** And I'm going to print x.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=107)** And it's called the walrus operator, 'cause if you look at it sideways, right, then these two are the eyes and these are the tusks.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=113)** And, you know, look, I didn't make up the name, but that's just the reason, okay?
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=116)** It does need to be part of an expression.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=119)** And you can see that Python is already saying, "Hey, you know, statement doesn't seem to have any effect."
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=124)** If I take these parentheses off, then this statement actually becomes illegal.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=128)** See how it says you can't do this in the context without surrounding parentheses.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=133)** Okay, so why does this operator exist, and what does it help with?
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=138)** There are several scenarios where this operator helps improve the readability of code.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=143)** And we're going to look at a few of them.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=145)** So first, let's go ahead and comment these out, because we're not going to need them.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=152)** So suppose I wanted to have a loop that processed some input from the user and then terminated when the user entered a particular string.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=161)** I could write some code that looks like this.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=163)** I could write thestr = input.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=167)** And then I would ask the user for some value.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=171)** And then I would have a while loop that said, hey, while thestr != "exit", then, in this case, we'll just print it out, nothing really complex.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=182)** And then I'd have to get thestr again, right?
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=184)** I'd have to ask them for another piece of input, okay?
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=190)** So let's go ahead and run this.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=196)** And we'll go into Start/Ch_1, and we'll run python assign.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=207)** So it says Value?
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=208)** I'll put my name in, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=209)** And then I'll type exit, okay?
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=211)** And it works.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=212)** But this code is more complex than it needs to be.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=214)** I'm calling the input function twice, and this is a lot of visual noise here, right?
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=219)** So with the walrus operator, I can simplify this code.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=223)** I can actually write while, and I'll put this in parenthesis to make it easier read.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=231)** So while thestr gets the value of or := input, okay, so I'll cut that, put that in there, and I'll print it out.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=240)** And now I can get rid of this line and this line, right?
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=243)** So I've simplified these four lines down to two lines, okay?
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=246)** So now I'm performing the assignment.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=250)** So I'm assigning thestr equal to input and performing the check at the same time.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=256)** So I've removed the extra call to the input function from within my loop, and I've simplified the code down to make it much easier to read.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=264)** So if I run this again, right, it still works.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=268)** So the walrus operator in this case is a very strong visual hint that I'm performing an assignment along with the conditional test, which will make it harder for bugs to slip by, because it's not legal to do the equal sign there.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=281)** Another common use for this operator is to prevent multiple calls to the same function when it isn't necessary, right?
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=286)** So let's consider another example.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=289)** In this case, I have a list of values, and I'm populating a data structure with some information about those values, right?
>
> **[4:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=296)** Here's all my digits, and then I have the length.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=299)** So I use the len function to calculate the length of the values.
>
> **[5:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=303)** Then I sum them all up using the sum function, and then I calculate the average by dividing the sum by the length.
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=310)** Let's go ahead and pretty print the results.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=318)** All right, and let's comment out the previous example.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=324)** So let's go ahead and run this, and it works, right?
>
> **[5:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=329)** But I'm making multiple calls to sum and length, even though I already have the results.
>
> **[5:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=335)** Now in this trivial case, it's not that big of a deal.
>
> **[5:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=337)** But you can imagine if these functions were more complex or took a long time to run, this could become a performance problem.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=345)** Now, I could solve this problem by having variables that pre-calculate the results, right?
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=350)** I could do l = length of values, right?
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=354)** And do the same thing with s and have this be the sum of the values.
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=358)** But that's not really ideal either.
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=360)** The only reason why these variables exist is to store some temporary data that doesn't get used again.
>
> **[6:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=367)** By using the walrus operator, or the assignment operator, I can store the results as I get them.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=374)** So, for example, I could do something like this.
>
> **[6:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=376)** I can do l := len, the first time I call this.
>
> **[6:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=382)** And the same thing with sum, I can do s := sum.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=387)** So now I'm getting both the result and setting aside the variables.
>
> **[6:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=391)** And then I can just simplify the rest of this by doing s / l.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=397)** Okay, so now I've removed the redundant function calls, and I've got my temporary variables directly in the code right where they're being used.
>
> **[6:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=407)** And so if I run this again, right, you can see now that the results are the same.
>
> **[6:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=411)** So the walrus operator was adopted back in PEP 572, which you can find at this link if you want to do any further reading on it.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=420)** It's actually become pretty widely adopted since it was introduced, and you can find it in several places within the Python standard library code itself.
>
> **[7:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=428)** I've started using it in my regular Python development, and I'm sure you will too once you've become accustomed to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (6), function (6), case, (4), this, (2)
> **CLI Commands:** python (7), make (5), find (3)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** assign_start (1)
> **Env Vars:** pep (1)
> **Versions:** python 3 (1)
> **Speakers:** - back (1)

#### Boolean types and values
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=0)** - [Instructor] In Python, we have the basic built-in boolean type to represent true and false values.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=6)** However, any object can be tested for boolean truth values.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=10)** So let's take a few moments now to learn how that works.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=13)** In general, any object is considered to be equivalent to boolean true, unless certain conditions are met.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=19)** So let's first look at the built-in objects that evaluate to false, right?
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=24)** There are two constants which are defined to evaluate to false, right?
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=29)** The false boolean constant itself and the none constant, which you may have seen represented in other languages as null.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=36)** Any of the built-in numeric types that evaluate to zero are also considered false.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=42)** So for example, the integer value zero, the floating point 0.0, and, of course, the complex value type of 0J, are all false.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=52)** In addition, the decimal object, when given a value of zero, and the fractional object, when given a numerator of zero, are also false.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=60)** Next are empty sets and sequences.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=63)** And you can see the examples here, right?
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=65)** The empty string, empty collection objects, these are all considered to be boolean false.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=70)** And in addition, if you call the built-in set function with no parameters or you create a range of zero, those are also false.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=77)** For custom objects, they are by default, considered to be true unless they override the bool function and return a false value, or they override the lend function and return a value of zero.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=92)** And we'll learn more about custom object functions later in the course.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=96)** There are also three basic boolean operations.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=100)** There's and, or, and not.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=102)** The first two of these operations are short circuit operators and it's important to remember this, in the case of the and operator, if the first value evaluates to false then the second operand isn't even evaluated because it won't matter what it is, because anything that's ended with false comes out to be false.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=120)** Similarly, the OR operator only evaluates the second operand if the first value is false, because anything ord with true is going to come out to be true.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=131)** Now, some of these rules might be different from what you used to seeing in other languages so it's important to remember them.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=137)** So let's try some of these out.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=138)** Let's go over to the code.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=139)** And I'm going to open up the terminal and that's control back tick.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=143)** And I'll just make this full screen.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=145)** So let's go ahead and start off the Python interpreter.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=148)** And what I'm going to do is create a new empty list.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=151)** So I'll write x= and then brackets, all right?
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=154)** And now when I print the boolen value of this, if I cast this to a bool, right?
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=159)** You will see, yeah, it evaluates to false.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=162)** And I'll do the same thing with an empty dictionary object.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=165)** And once again, cast that to a bool and sure enough that's false.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=170)** So, let's try a couple more.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=172)** So we'll do bool of zero and let's do bool of an empty string, right?
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=178)** And then let's do bool of none, all evaluate to false, okay?
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=185)** So how Python evaluates true and false can easily trip you up.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=190)** So it's something to keep in mind and remember as you are writing your code

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), override (2), this, (2), default, (1)
> **CLI Commands:** python (3), make (1)
> **Versions:** 0.0 (1)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Template strings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=0)** - [Instructor] It probably comes as no surprise to you that string formatting is one of the most common things that Python programmers have to do.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=8)** And it might come as a surprise to you that there's no fewer than four ways to perform string formatting in Python.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=14)** And on this video we're going to take a look at using template strings, which you might be familiar with from other languages.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=21)** The documentation for these are at this link in the Python docs, and it's not a long read, you can read it at your own leisure, but I'm going to cover the main features here.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=30)** So let's go ahead and jump over to the code.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=33)** Right, so here in the code, I'm going to open up in the start folder in chapter one, the templestr start.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=39)** And you can see that I've got a string here, in the main function, that I'm formatting using regular f strings.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=47)** And when I run this, let me bring up the terminal and let's go into chapter one.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=59)** You get pretty much the output that you'd expect, right?
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=62)** I'm substituting these two strings into this string and here's the values over here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=66)** But you can also use a simpler string formatting method known as templates.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=70)** And in order to do this, I'm going to first import the template class from the string module.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=76)** So from string, I'm going to import template.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=80)** And then I'm going to define a new template string.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=84)** I'm going to store that in a variable named temple.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=86)** So I'm going to create a template object and I'm going to write You're watching, and it's going to be $title by $ author.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=105)** So, to insert the values into the placeholders I use the substitute method on the string using keyword arguments for values.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=113)** So, alright, str2 is equal to, and then on my template variable I'm going to call the substitute function, and I'm going to pass in the arguments are going to be these two keywords.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=128)** So, title is going to be Advanced Python, whoops.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=138)** Language features and author is going to be me.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=149)** So, I've substituted the values into the string and I need to print it out, okay?
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=155)** So let me do that. Print str2.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=161)** So let's run this.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=162)** And you can see that we get basically the same output.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=165)** Oh, whoop, I forgot a space.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=167)** Let's run it again. There, same output.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=170)** Even better, I can also use a dictionary to hold the data values I want to substitute.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=175)** So for example, I can do something like this... I can have author as a key, and I can have title, and I'll just copy and paste this.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=193)** All right. And now, to perform the substitution, I'm going to call templ and I'll use the substitute again.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=200)** But this time I'm going to pass in my dictionary.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=204)** So let's go ahead and save that.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=206)** Oh, let me print it out. Here we go.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=209)** So now, let's run it one more time.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=212)** And you can see that we're getting the same results.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=214)** So, you might be wondering, like, why use this method of string formatting instead of the f strings, right?
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=221)** Well, if all you need to do is simple variable substitution then the template string method might be easier to use and make the code more readable in some cases.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=230)** F strings look, they're super effective, they have a lot of power.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=233)** You can control the output formatting with all kinds of specifiers for spacing and number formatting and, you know, padding and justification and so on.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=240)** But the template method is just about straightforward value insertion.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=245)** So, if you don't need all the bells and whistles of the f string then template strings might be a viable way to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (3), function (2), this, (2), pass (2)
> **Exercise Files:** template (9)
> **CLI Commands:** python (4), make (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Advanced Functions

#### Documentation strings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=0)** - [Narrator] It's always a good idea to write documentation for your functions and classes and modules.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=6)** And we're going to do that in this video by taking advantage of a Python feature called docstrings.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=11)** And personally I think this is one of the great underappreciated features of Python.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=15)** The documentation for your program's code is directly available as your program is being run.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=21)** So let's take a look at an example.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=23)** I'm going to bring up the terminal and what I'm going to do is fire up the Python interpreter, put it into interpreter mode and then I'm going to look at the documentation for the stir function, which creates a new string.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=35)** And to do that, all I have to do is print and I'm going to use the stir function and then type dot and then double underscore doc and then double underscore.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=46)** And when I do that, you can see that I get documentation right here for the string function.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=50)** As I mentioned, this works for more than just functions.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=53)** It also works for classes and modules.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=54)** So let's import the collections module.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=61)** And now let's print out the documentation for the collections module.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=66)** And I'm going to do the same thing dot underscore underscore doc.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=71)** And you can see that this is a little bit more, a little more involved than just one function.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=75)** This prints out a documentation string for the entire module which describes the different classes that are available within that module.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=82)** Now, what's really nice about this feature is that I can interactively learn about various Python APIs as I need to know them without having to resort to you know, cumbersome documentation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=93)** It's also an easy standard for other developers to follow when they create their own packages and code.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=100)** So to do this for your own functions and other code all you need to do is define a literal string at the top of a function or class or module.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=112)** So let's try it out.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=112)** We're going to go into docstrings start, and here I have a function that takes a couple of arguments, right?
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=119)** And just prints them out.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=120)** Nothing really fancy.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=121)** So to create a docstring for this function all I need to do is at the top of the function, is put in a triple quoted string.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=130)** And then inside the triple quoted string, I'm just going to explain like, you know, my function and it takes arg one, arg two, which defaults to none, and it you know, it doesn't really do anything.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=146)** And then I'm going to list the parameters and I'll say you know, arg one is the first argument, and arg two is the second argument.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=156)** Okay, well you get the idea, right?
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=158)** So just make a triple quoted string at the top of your function.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=162)** And then down here in the code, I'm just going to print out my function.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=166)** And then here's the double underscore doc.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=168)** So let's go ahead and run this.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=170)** So let's bring up the terminal and inside chapter two, we're going to run.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=179)** And you can see it works.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=181)** Let's take a look at some of the best practices for writing good documentation strings.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=187)** So first docstrings should always be enclosed in triple quotes, even if they're only one line.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=193)** This makes it easy to expand on them later.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=196)** The first line of your docstring should summarize the function or the class, or the module, and what its main purpose is.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=202)** For packages and modules, list the important classes and sub-modules that are contained within it, along with any custom exceptions that the developer needs to know about.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=212)** For classes, list the important methods along with important information like any enums or static member functions or properties.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=220)** For functions there's a variety of important things to list.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=222)** First, make sure your docstring lists and explains each of the parameters, including the optional ones.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=227)** If the function returns of value, list it, right, explain it.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=231)** If there's no return value the usual convention is to save space by not listing one.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=235)** Instead of saying, you know, explicitly, hey there's no return value.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=239)** If the function raises any exceptions make sure you list those also.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=243)** If you want to learn more about how docstrings work and some of the best practices you can follow then check out PEP 257, which you can find at this link and explains all about docstrings, why they exist and how to make them work really well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (7), module (6), this. (1), class, (1)
> **CLI Commands:** python (4), make (4), find (1)
> **Documentation:** the documentation (3)
> **Tools:** terminal (2)
> **Env Vars:** pep (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Variable argument lists
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=0)** - [Instructor] Like other programming languages, Python functions support variable argument lists.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=5)** This makes it possible to build functions that have a high degree of flexibility by accepting different numbers of parameters.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=12)** A good example of this might be an addition function that adds up the parameters passed to it.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=17)** It would be pretty inconvenient to require callers of this function to have to conform to putting all the numbers into a list.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=24)** So defining the function to accept a variable list of parameters would be the better way to go.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=29)** To do this in Python, you define the function argument using an asterisk character in front of the parameter that you want to allow a variable length for.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=38)** This parameter has to come after all the other positional parameters that the function defines.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=43)** So, for example, if we built a logging function that logged messages along with parameter values, we would maybe first define the parameters for the message type, and then the message text, and then specify the variable argument list.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=58)** All right, so let's try this out in our actual code.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=62)** So here in chapter two, let's open up varargs_start.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=67)** So, let's define an addition function that takes a variable number of parameters.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=73)** In the definition for the function, I'm going to add a parameter named args and I'm going to put star in front of it.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=84)** Now, this isn't required, right?
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=85)** The name args.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=86)** It's just more of a convention among Python programmers.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=89)** You can call it whatever you want.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=91)** Inside the function, I'll create a variable to hold the result and then iterate over each of the arguments to form the result.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=100)** So I'll just say four arg in args, result plus equals arg and then I'll just return the result.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=111)** So, let's go ahead and exercise this function.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=113)** So, I'll put some code here in Main to try it out.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=117)** Let's do some numbers.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=119)** five, 10, 15, and 20.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=121)** And let's make a copy of that and let's do something simpler.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=125)** Let's do one, two, and three.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=127)** Let's go ahead and try this out.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=130)** Let's bring up the terminal and let's run this.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=137)** And you can see that the function returns to some of the values.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=141)** Now, if you already have a list of values in a sequence, you can pass that to the function by putting an asterisk in front of the list name.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=149)** So let's try that.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=151)** So let's imagine I had a list.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=153)** I've got something like, my nums equals and then inside these brackets, I'm just going to copy and paste these guys and put them in here.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=162)** So now I have a sequence of numbers and I want to pass this to my addition function.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=167)** What I'm going to do is print out the addition result and then I'm going to do what's called a literal unpacker.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=174)** I'm going to unpack that sequence literal by putting a star in front of the argument and then just name the list.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=181)** So let's run this again.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=182)** And you can see that the results there is in the output.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=187)** Now, there's a potential drawback to using variable argument lists and that is that if you decide later to change the function to add more positional parameters, then all of the callers of the function will have to change.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=200)** So, for example, if I go back and change the definition of this function to accept a numerical base argument, like this, now I have to change all the places where this function is used.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=213)** And you can see, I'm going to try and run this and it works.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=218)** But the results are different.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=220)** And then now I'm getting an error in my output, because the function assumes that the first parameter is the base parameter and my result is incorrect.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=227)** So, in general, variable arguments are useful when the number of parameters that your function expects is relatively small.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=235)** It's a great way to add flexibility to your functions but you do have to be careful and think ahead about how your code's going to be used.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (14), pass (2), require (1), for. (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for example (2), imagine (1)
> **Code Identifiers:** varargs_start (1)
> **Tools:** terminal (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Lambda functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=0)** - [Instructor] If you've done any programming in other languages, such as JavaScript or C# or Java, you've probably seen or worked with anonymous functions.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=10)** Python also supports these and they are referred to as lambda functions.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=15)** Lambda functions can be passed as arguments to other functions to perform some processing work, much like a callback function in a language like JavaScript works.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=25)** Typically, you'll see these used in situations where defining a whole separate function would increase the complexity of the code and reduce readability.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=35)** Lambdas are defined by using the keyword lambda, followed by any arguments that the lambda function accepts, then followed by an expression.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=46)** So let's look at how they're used in practice because that's usually the best way to understand something.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=51)** Here in the code, let's go ahead and open up lambda_start.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=55)** And here in my code, I have two regular functions, right?
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=57)** One's called celsius_to_fahrenheit.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=60)** One is called fahrenheit_to_celsius and they just convert temperatures from one scale to the other.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=65)** And then over here I've got two lists of temperatures, Celsius temperatures, and Fahrenheit temperatures.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=70)** Now, suppose I wanted to convert each of these lists to the other temperature scale.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=76)** To do this, what I might use is the map function that we learned about, you know, a little earlier.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=81)** So the map function takes a function as the first argument and an iterable object as the second argument.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=88)** So to convert these two lists, what I would probably do is write something like this, right?
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=92)** I'm going to create a new list of the result, whoops.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=95)** And inside that list, I'm going to call the map function.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=99)** And the map function is going to use, for example, the fahrenheit_to_celsius function to work on the ftemps list.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=110)** So that will return a new list of temperatures and let's go ahead and make a copy of that.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=116)** And in this case, I'll just call the other function, which is going to be celsius_to_fahrenheit, and that's going to work on the ctemps list.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=124)** So let's go ahead and run this code, and I'm going to go into the terminal, and I'm going to run my lambdas code.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=137)** And you can see the results here where each of the temperatures has been converted.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=142)** Now, I can reduce the complexity of the code by writing each of the functions as an inline lambda.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=149)** So let's go back and change the code to do that.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=152)** So rather than using the explicit functions that I've defined up here, you can see that each of these functions is basically just a formula.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=161)** You don't really need a whole separate function construct just to do this.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=165)** What I'm going to do is just use each formula directly in line as a lambda.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=170)** So for the celsius_to_fahrenheit version, I'm just going to copy that formula and I'm going to replace the call to celsius_to_fahrenheit with what looks like this.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=182)** I'm going to write lambda t 'cause that's going to be the input temperature.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=187)** And then I'm going to paste in the formula.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=191)** So now I'm basically calling, and actually, it's going to be t, not temp.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=196)** There we go.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=197)** So now I've got the formula directly in line and rather than calling a function, I'm just going to specify this lambda keyword.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=203)** I'm going to do the same thing for fahrenheit_to_celsius.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=205)** I'm going to have lambda t.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=208)** And let me go get that formula.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=210)** That's this guy right here.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=216)** Paste that in and that's going to be the t variable.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=221)** All right, so now when I run the code again, you can see that the results are the same.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=228)** So in this particular case, using the lambda expression simplifies my code, right?
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=233)** Because I can see the calculation right where I'm using it.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=235)** I don't have to track down that function fahrenheit_to_celsius.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=238)** It might be in some other module somewhere and someone else who has to work with my code, right?
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=242)** Even if that's me like several years from now doesn't have to go digging through all the source to find out where those functions are.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=247)** Now obviously, lambdas aren't a good fit for every scenario.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=251)** In practice, you will, of course, continue to use regular functions in your programs but lambdas can help make your code more readable when defining a full function is more effort than it's worth.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), lambda (10), let (6), this, (2), case, (2)
> **Code Identifiers:** celsius_to_fahrenheit (4), fahrenheit_to_celsius (4), lambda_start (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Keyword-only arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=0)** - [Instructor] Another similarity that Python has with some other programming languages is that it provides a way for specifying function parameters using keywords.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=8)** So for example, you can define a function that takes positional arguments along with keyword arguments that take optional values like this one where arg3 defaults to a specific value.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=19)** And then, when you want to call the function you can specify values by position or by keyword, right?
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=26)** So in this example, I'm passing in values for arg1 and arg2, but then I'm specifically saying, hey, arg3 needs to be this value.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=34)** In some cases, however, you may want to require that callers of your particular function specify arguments using keywords in order to provide better readability of the code.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=45)** So for example, let's suppose we have a function that performs a critical operation and it provides an option to suppress exceptions.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=54)** So one way to write the function definition would be to specify a regular argument and have it default to a certain value like you see here.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=63)** The potential problem with this approach is that the function can be invoked just by passing a regular positional argument.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=69)** Now, since this parameter has significant effect on how the program runs, it might be better to require that the parameter be specified by keyword.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=78)** And that way, the programmer that's calling the function is aware of the significance of the parameter and others who read the code can easily see and understand what's happening.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=89)** So to accomplish this in Python you can separate your positional arguments with a single asterisk character followed by parameters that are keyword only, right?
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=99)** They have to be specified by keyword.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=101)** So let's see how this works in the code.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=103)** Let's open up keyargs start, and let's define our function using some positional arguments, right?
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=110)** So I'll have arg1, arg2 and I'm going to put in my asterisk character and then I'm going to have suppress exceptions equals false.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=125)** So now, let's try calling this function without using the keyword.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=130)** I'm going to write 1, 2, and then true.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=135)** Now, you can see that I'm getting this red squiggly line here in my editor, right?
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=140)** Because it says too many positional arguments for the function.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=143)** And in fact, if I try to run this, let's bring up the terminal.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=150)** You can see that I'm getting an error.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=152)** It says, my function takes 2 positional arguments but 3 were given.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=157)** I can't invoke this function now without explicitly using the keyword for the third parameter.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=163)** So let's go ahead and fix that.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=166)** So now I've supplied the keyword and you can see that the red error disappears.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=172)** Now it can run the program just fine, and there's no errors.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=174)** Okay?
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=175)** If you find yourself in a position where you really need to make sure that someone using a particular function clearly understands what they're doing, you can use keyword only arguments to help ensure clarity in the code.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=187)** And this is one of the great language features of Python that I really like because it exists mainly to improve the readability of code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (7), require (2), this, (1)
> **CLI Commands:** python (3), find (1), make (1)
> **Analogies:** for example (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Solution: Advanced Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=0)** - [Instructor] Let's walk through my solution to the challenge, and you can compare my code to yours.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=6)** And there's no one right or wrong answer here.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=9)** You might have a different solution than mine, and that's okay.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=13)** So, the docstring part of the challenge was pretty straightforward.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=17)** So, that's the first thing I did, and you can see the result right here.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=21)** Your solution probably looks very similar to this part.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=24)** So, we have these three characters with the explanation of what the string combiner function does, followed by the closing three quotes, and that's what creates our docstring.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=34)** For the rest of the solution, remember that we had to combine all the string and integer number arguments into one result string and ignore other types, and we also had to take into account this unique parameter to see if we needed to return a string that only had unique characters in it.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=55)** So, you can see that the function definition has a variable argument list, and that's how the code was called.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=62)** So, my code loops over each argument.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=66)** Well first, it declares an empty result string, and then it loops over each argument.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=71)** And what I'm doing is I'm using the isInstance function to check to see if the argument is either an integer or a string, and if so, it adds it to the result string.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=85)** And you might be wondering like why Booleans end up getting involved and included in the result, and that's because Booleans, the way they're implemented in Python, they're actually integers.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=95)** So, this isInstance call will return true for Booleans as well as integers, but you probably noticed that floating points got left out.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=107)** All right, and so let's see what's next.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=110)** So, at this point, right, I have a string that contains all the the arguments, but then we had to check this unique argument, right?
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=118)** And if the unique argument is true, then we need to make sure that each character only appears once in the string.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=125)** So, what I do is I create a newresult temporary variable, and I use the set operator to create a set out of the string that I've got so far, because sets can only contain unique values, right?
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=139)** So, this will actually strip out all the duplicates, and then I simply set the value of the return string to the empty string and I use the join function.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=151)** And the join function will simply concatenate all of the individual characters in the set that I just created into a result string and then return the result.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=161)** All right, so let's go ahead and try my code and see if it works.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=164)** So, the first example is a list of strings, integers and Booleans, and we're not using unique.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=171)** So, let's test the code.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=173)** And sure enough, you can see that it concatenated, ThisIs1TrueString exclamation point, which is what we expected.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=181)** All right, let's go ahead and change this to True.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=185)** And now let's test the code.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=187)** And sure enough, now we can see that each one of the characters only appears once in the result.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=194)** All right, so let's go ahead and set this back to False, and let's try another one of these.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=201)** So, let's try this one with the array.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=204)** So, what's going to happen is, these strings should be included, but because this is neither a string nor an integer or a Boolean for that matter, it should be ignored.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=214)** So now, let's go ahead and let's go comment that one out.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=217)** It'll still work, but let's just be clean with our code.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=221)** And sure enough, you can see that the array is ignored.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=224)** Let's go ahead and try something else.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=225)** Let's try putting in a floating point number, because the floating point's not an integer so that should be ignored.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=231)** Yep, sure enough, it is.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=232)** All right, and let's try putting in a Boolean.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=236)** Okay, that should work.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=238)** Yep, it does.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=239)** All right, and then let's try setting unique to True.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=245)** And it seems to be working.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=247)** Okay, so that's my result, that's my solution.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=250)** Take my code and compare it to yours.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (5), else. (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** isinstance (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Python Comprehensions

#### Introduction to comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about a Python language construct known as comprehensions, and these can be applied to lists, sets, and dictionaries.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=9)** Comprehensions give us a short, concise way to derive a new sequence of values from an existing sequence of values.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=17)** So let's consider an example.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=19)** The map function is used to map one set of values into another set of values.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=25)** It takes a function as an argument that is then applied to each member of a list of values.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=31)** The result can then be passed to the list function to create a new list of values.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=36)** So in this example, we're converting temperatures from one scale another using this kind of approach.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=41)** It turns out that this kind of operation is a fairly common thing to do in Python, so common in fact that the language itself has a special syntax for performing these kinds of operations.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=52)** I can achieve the same result as this complex line of code by writing the following.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=57)** So first, I write the expression that I want to apply to the values, and this is sometimes called the output expression.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=64)** In this case, it's just the simple formula for converting Fahrenheit temperatures to Celsius.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=70)** Then, I need to write the variables I'm going to work on, right?
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=73)** In this case, I have named it t, and each of the t values will come from my list of Celsius temperatures.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=81)** And then finally, I need to wrap this entire expression in two square brackets because I'm creating a new list.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=89)** And that's really all there is to it.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=91)** So by writing this comprehension, I've simplified the original line of code and it's all in one line.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=97)** There's no need to go looking for the conversion function to see how it worked, that kind of thing.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=101)** Python supports this kind of construct for more than just lists.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=104)** You can also use them to create sets and dictionaries and we'll see that as we go through the chapter.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=110)** We'll also see how to apply what's called a predicate expression to perform a filtering effect.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=115)** Comprehensions are an important and common form of programming in Python and can make your code much easier to work with.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=121)** So, let's go through the chapter and see how these work.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), case, (2), finally, (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### List comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=0)** - [Instructor] Let's try writing our own comprehension to work on a list of values.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=4)** Here in my code, I'll open up listcomp start.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=6)** And you can see I've already defined two lists of numbers, right?
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=9)** One is even numbers and one is odd numbers.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=12)** So what we're going to do is try things using the non-comprehension way first.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=18)** So let's use the map and filter functions along with the list function to create a list of numbers that are squares of the numbers in the original list.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=28)** So let's do that.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=29)** First, I'm going to use my map and list function.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=32)** So I'm going to name the result even squared, and I'm going to create a new list.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=39)** And in that list, I'm going to map and I'm going to create a lambda function which will take one argument and just return the square of that number.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=51)** The map function's going to work on the evens list.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=55)** And then we'll just print it out.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=58)** So let's go ahead and run this.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=60)** Let's bring up the terminal.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=64)** And we'll go into start chapter three, and I'm going to run my list.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=73)** And when I run this, you can see that the output is the list of numbers whose values are squares of the original even numbers.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=82)** So now let's try adding a filter.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=84)** So to do that we're going to use the filter function and let's use the filter function to only apply the square function to numbers that are greater than 4 and less than 16.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=95)** So I'm going to modify my code here to call the filter function.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=100)** And the filter function is going to take a lambda, and that lambda is only going to work on, it's going to return true if e is greater than 4, and e is less than 16.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=117)** Okay?
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=118)** And that's going to work on the evens.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=121)** And then I need to close off the last parenthesis and, okay, so now let's go ahead and run this again.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=129)** And now you can see that the function is only being applied to numbers that are greater than 4 and less than 16.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=135)** But this code is a little bit complex, right?
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=137)** I've got this list, a map and lambda, now another filter, another lambda, right?
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=140)** Okay, let's see if we can make this a little bit simpler by using comprehensions.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=146)** What I'm going to do is I'm going to call this even squared again and I'm going to comment out this example.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=155)** So even squared is going to be, and I'm going to make a new list, right?
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=158)** So I'm just going to use square brackets, and then I'm going to write e star star 2 for e in evens.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=169)** And that's basically it.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=170)** So you can see that this code is the equivalent of this complex code right here.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=176)** So these two brackets make a new list, which is what this does.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=179)** And then the map function, right?
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=181)** It operates on the filter.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=184)** Okay, well, it operates on the entire list.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=186)** We'll get to filter in a moment.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=187)** So this basically does the same thing as the map and list function, right?
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=192)** The filter isn't there yet but we'll see how to do that in a minute.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=195)** So, I'll run this again and oh, got to print it.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=203)** So, let's run this again.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=205)** And now you can see that we're getting the same result as the original.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=209)** So we were able to achieve the same result with code that's much easier to read.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=213)** So now let's try adding what's called a predicate condition.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=216)** And this time we'll work on this set of odd numbers.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=219)** Okay?
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=220)** So I'm going to write odd squared is equal to and once again, I'm going to make a new list and I'm going to do the same thing, e squared for e in odds.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=237)** Now here's where the predicate condition comes in.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=239)** And this is basically the same thing as what the filter does.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=241)** I'm going to write, if e is greater than 3 and e is less than 17.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=250)** And then we'll print out the results.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=255)** Okay, so let's go ahead and comment out the even example, and let's run this again.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=263)** And now we can see that the odd numbers are being squared but only if they're greater than 3 and less than 17.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=270)** So for simple cases like these writing one line comprehensions can be much easier than using multiple functions like map and filter and list to accomplish essentially the same thing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (12), lambda (5), this. (1), this, (1)
> **CLI Commands:** make (4)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Dictionary comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=0)** - [Instructor] Now, let's take a look at how to use comprehensions when working with dictionaries.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=4)** And in this example, I'll again use a list of temperatures.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=8)** Just this time it's going to be the Celsius ones.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=10)** So let's open up dictcomp start.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=13)** And you can see I have my list of Celsius temperature values.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=16)** So let's suppose I wanted to build a dictionary that mapped each Celsius temperature value with its corresponding value in the Fahrenheit scale.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=24)** So to do that, what I would do is something like this.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=27)** I'd write something like temp dict is equal to and I make two curly braces.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=33)** So what I need to do in this case is create both a key and a value from each temperature in the Celsius list.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=42)** And remember, we want to be able to look up each Fahrenheit value when given a Celsius value.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=49)** So that means that each Celsius value needs to be the key.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=53)** Okay?
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=53)** So I would write T colon and then that's going to be T times nine fifths plus 32 for T in C temps.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=72)** So this is similar to writing the list comprehension, only in this case what I'm doing is I'm using these curly braces instead of the square brackets cause I'm creating a dictionary, not a list.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=85)** And then just for fun let's limit the dictionary to values just below a hundred and then print out one of them.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=92)** Okay?
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=92)** So I'll write using a predicate expression if T is less than 100.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=100)** And then I'm going to print out the dictionary and then I'll print out just one of the values.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=107)** I'll write temp dict, and I'm going to access the value for 12.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=112)** So let's go ahead and run this.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=114)** So let's bring up the terminal and into start chapter three.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=123)** And I'm going to run the dictionary.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=127)** Okay, so when I run this the output shows that we have a dictionary now where the keys are the Celsius temperatures and the values are the calculated Fahrenheit temperatures and only the ones less than 100.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=140)** So 100 didn't make it into the list.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=142)** And then we're printing out the one by looking up the Celsius key.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=146)** You could actually get pretty fancy with comprehensions if you want to.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=149)** Let's try another example.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=152)** Let's imagine that I had two existing dictionaries representing members of sports teams, and the keys are their last names, and the values are their jersey numbers.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=164)** And I wanted to merge these two teams into one team.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=168)** You can do this pretty easily with a comprehension.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=170)** So what we need to do is loop over the keys and values in each dictionary and then add them to the new one.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=176)** So I'll write new team is equal to, and I'll make a new dictionary comprehension.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=184)** Then I'm going to loop over each dictionary.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=187)** As the key, okay, I'm going to get the value for team in each team.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=194)** So team one and team two.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=197)** Now I need to get the keys and values for each item in the new team dictionary.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=202)** So then I'll write again for key and value in team dot items.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=214)** What I'm doing here is building a comprehension that actually has two separate expressions.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=219)** The first expression gets me each team in this tuple right here.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=224)** Okay? So I'm going to operate on each team.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=226)** And then the second expression gets me the keys and values for each item in each team.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=233)** So let's run this.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=234)** Oh, actually let me print this out.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=241)** So let's go ahead and run this.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=243)** Oh, and let's comment out the previous example just because we don't want to pollute the output.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=249)** All right, so let's go ahead and run.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=253)** And you can see that when I run this now the two dictionaries are merged and we've got one dictionary with all the members in it.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=262)** Now, I should point out that this is about as complex as you want to get when working with comprehensions.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=268)** All right?
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=269)** You want to avoid having more than two expressions in any single comprehension, because at that point you know the code becomes a little unwieldy to read and you're probably just better off creating a function to do the work.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=281)** But you can see that by using expression syntax you can create some pretty simple statements to do some interesting results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (4), function (1)
> **CLI Commands:** make (3)
> **Analogies:** similar to (1), imagine (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Set comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=0)** - [Narrator] All right, in this video we're going to turn our attention to look at how you can use comprehensions to work with sets of values.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=8)** And recall, sets in Python are used to contain unique values.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=13)** So each value in a given set can only occur one time.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=16)** So let's open up setcomp.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=19)** And similar to one of our previous examples, I have a list of Celsius temperature readings.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=25)** And what I want to do is write some code to convert the Celsius temperatures into Fahrenheit temperatures, but only keep each unique temperature reading, right?
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=35)** So I'm trying to filter out any duplicate temperature values.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=38)** Doing this with a set comprehension is pretty straightforward.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=42)** So what I'm going to do here, for illustration purposes, is solve the problem with both a list and a set so you can see the difference.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=50)** I already have the comprehension for the list version, right?
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=54)** So this is going to calculate the Fahrenheit temperatures for all the temperatures in temps, okay?
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=61)** And then what I'm going to do is just copy and paste this.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=67)** Okay.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=70)** And I'll call that ftemps2.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=73)** And all I'm going to do is replace these square brackets with curly braces instead.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=79)** So I'll do that here at the end.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=82)** So once I've done that, I've got to print it out.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=86)** So we'll print ftemps2, right?
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=89)** So that way we can see the result side by side.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=92)** So the only difference is one has curly brackets 'cause it's a list.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=95)** One has square brackets, and then curly braces because one's a list and one's a set.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=100)** So let's go ahead and run these side-by-side.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=106)** Now I'll go to the terminal.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=108)** And chapter three.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=113)** And let's run set comprehension.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=116)** And you can see in the output that it's pretty similar.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=120)** The only difference is that the list result contains some duplicate temperatures, right?
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=124)** You see, here's 53.6, and here it is again down here.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=126)** And here it is again over here.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=128)** 50 occurs a couple of times, I think.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=130)** Right here. Here it is. And then here it is.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=132)** Whereas the set result only contains unique values.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=135)** None of the values are duplicated.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=138)** And once again, right, kind of similar to the dictionary example, you can kind of get pretty fancy with this if you want to.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=144)** Let's try a different example.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=147)** Now suppose I have a string of text and I wanted to count the unique letters in the text while converting each of the letters in the text to uppercase.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=158)** And yes, I know this is a bit of a contrived example, okay, but just play along with me.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=162)** So what I'm going to do is create a set of all the characters in the string and convert them to uppercase.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=169)** So let's just write the code to do that.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=172)** I'm going to write "chars =", and then inside curly braces, I'm going to write c.uppper for c in my temp string.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=187)** And that's basically it, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=189)** That's pretty straightforward.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=190)** So I'm going to loop over each character in the string and I'm building a new list, and the list is going to contain the uppercase version of that character.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=198)** So let's go ahead and comment that out.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=203)** Let's print the result.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=206)** And let's run.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=210)** And you can see in the output that my set contains each of the unique characters converted to uppercase but there's a space character in the output, and that's a mistake.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=220)** I didn't want a space. It's right here.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=222)** I didn't want to include spaces.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=225)** Let's go back to the code and make a slight modification.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=228)** I'm going to write, if not c.isspace.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=236)** All right, so I'm going to add a predicate that says, "Hey, don't include the white space."
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=240)** All right, so let's run the code again.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=244)** And now you can see that the space character is no longer in the result.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=248)** So hopefully that gives you a sense of the power that comes from using comprehensions.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=253)** You can perform a pretty large variety of transformations on just about any iterable data source, while at the same time improving the readability of your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1)
> **CLI Commands:** python (1), make (1)
> **Versions:** 53.6 (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Solution: Comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=0)** - [Instructor] For this challenge, we needed to use comprehensions, which we learned about in the chapter in order to process the content of a string and output some data about the string.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=11)** So let's take a look at my solution.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=15)** And remember, we didn't have to return any values from the function.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=18)** All we needed to do was set the values of these global variables and the testing code did the rest.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=25)** So the first piece of data we needed to calculate was the length of the string.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=29)** And that's easy enough to do with the regular length function.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=31)** You didn't really need a comprehension for that.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=34)** So next, we get more into the comprehension code.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=37)** And we needed to count the number of digit characters.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=41)** So for this, I used a list comprehension, which you can see by the square brackets there.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=48)** So the list comprehension processes each character in the string and tests to see if it's a number by using the isnumeric built-in Python function.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=59)** And then we use the length function to find the length of this list.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=65)** Counting the number of punctuation characters was a similar operation, again, list comprehension.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=71)** And this time I tested each character against the string classes built-in punctuation property to see if the character in question was a member of that set.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=85)** And if it is, then I count it.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=87)** And then once again, I use the length function to get the length of the resulting list.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=91)** So that leads to the number of punctuation characters.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=95)** And then the last one, we needed to count the number of unique letters in the string.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=101)** So in this case, I used a set comprehension, and I used a set comprehension because sets can only contain unique values.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=109)** So, duplicates will automatically be filtered out for me.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=113)** So I use the set comprehension and I process each character.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=118)** In this case, I'm using the built-in function named isalpha to see if the character is in fact an alphabetic character.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=126)** And then once we do that, that will give me a set, and then I'm using the empty space and the join function on the set to join the set into a string.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=137)** So that will give me the string back.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=139)** This particular operation wasn't counting.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=141)** This was, hey, get the actual unique characters and put them into a string.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=146)** And then now that I have the string, the next operation was to get the length or the number of unique characters.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=153)** So since we've already calculated the unique string itself, all I had to do was get the length of that string.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=159)** All right, let's go ahead and test the code and see if it works.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=163)** All right, sure enough, the length of the string is 65.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=167)** There are seven numeric characters in the string.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=169)** Is that right?
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=170)** Let's see, 1, 2, 3, 4, 5, yeah, 6, 7.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=175)** Okay, looks right.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=176)** Number of punctuation characters was 10, and the number of unique characters was 14.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=183)** And you can see that the actual string containing only the alphabetic characters, right?
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=187)** All the punctuation is gone, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=189)** The numbers are gone.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=190)** So that's this unique set of characters in that string.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=194)** So I suggest taking my code, comparing it to yours, maybe try out a few other test cases and see where there are similarities and differences in our two solutions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), case, (2), this, (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Classes and Objects

#### Python classes overview
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=0)** - [Instructor] You've probably created your own Python classes in programs you've written before.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=5)** In this chapter, we're going to learn about some of the more advanced features of Python classes and how to customize the behavior of classes.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=13)** Python itself is a very customizable language and it provides a variety of ways to control how objects are created and converted to strings compare to each other and much more.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=24)** This customizability is achieved by using special functions and features that are a part of every object defined in Python.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=32)** First, you can use Python classes to create enumerations which you may be familiar with from other languages like Java or C++.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=40)** Enumerations are used to make constant values easier to read and modify from one central place.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=47)** You can also customize how your objects are converted into string values when they are passed to Python functions such as stir or wrapper.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=56)** Classes can also have computed and default attributes and you can define functions that let classes be compared to each other using logical operations like greater than and less than.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=68)** You can also give your classes numeric like behavior so they can support operations like addition and subtraction.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=75)** In the rest of this chapter, we'll see how to use these techniques to create classes that are easy to work with and are flexible enough to solve a variety of programming challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Defining enumerations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=0)** - [Instructor] Python supports enumerations just like other popular programming languages, and they're useful in a variety of scenarios.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=7)** Usually, they're used to assign easy-to-read names to constant values in a program which helps to increase the readability of your code.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=14)** They can also be used as hash values, and you can iterate over them like you would other iterables in Python.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=21)** Enumerations are defined using the class syntax.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=24)** Let's see how to do this.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=25)** I'm going to open up the enums_start file.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=28)** And to define an enumeration, I'll first import the Enum class from the enum package.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=34)** So from enum, I'm going to import Enum.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=39)** Then to define an enum, I'll create a new class and use the Enum class as the super class.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=47)** So I'll name my class Fruit, and I'll specify that Enum is the class I'm inheriting from.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=54)** Right, so now let's assign some values to our enum, and for this example, I'll just use some fruit names.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=60)** So I'll have APPLE equal to 1 and then BANANA equal to 2, ORANGE will be 3, and TOMATO will be 4.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=71)** So now I can use these constants in my code instead of having to use hard-coded numbers which is a good programming practice.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=78)** So let's see how these behave in action, right?
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=81)** What I'm going to do is print some of these out.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=84)** So I'll print Fruit.APPLE, and then I'll print out the type as well.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=98)** And then I'll also print out the string representation of the enum as well, okay?
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=108)** So let's go ahead and run this code.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=115)** Right?
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=117)** And we're in Chapter 4. I will run my enum code.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=123)** And so when I run this, you can see that I'm getting Fruit.APPLE as the value of the first item, and the type is an enum of class Fruit, and the repr string shows that it's a Fruit.APPLE type with a value of 1.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=141)** So enums have both a name and a value property when you declare them, and you can see this by printing each one.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=149)** Let's do this.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=151)** Let's try, I'm going to copy that line, and what we'll do is we'll print Fruit.APPLE.name and then Fruit.APPLE.value.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=171)** Right, let's run this again.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=173)** And you can see that in the output, right, I have the name which is APPLE and the value of 1.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=180)** So there are a couple of rules to be aware of with enums.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=183)** So, first, it's not valid to have duplicate names.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=186)** So if I go up here and I try to add something else, if I try to add APPLE again and make it a value of 6, you can see that I'm already getting this error here in my editor, shows me that that's wrong.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=198)** And, of course, if I try to run it, I'm going to get an error, right?
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=200)** It says Attempted to reuse key APPLE.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=203)** So you can't reuse the same key, but you can have duplicate values.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=209)** So if I had, you know, if I wanted to add, you know, RED_DELICIOUS, for example, as an alias for APPLE, so now they have the same value, that's actually okay, right?
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=219)** That works.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=220)** And if you want, however, you can prevent duplicate values by using the unique decorator.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=228)** So to do that, we first have to import the unique decorator from the enum package.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=234)** So I'm going to import Enum and unique.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=237)** And then what I need to do is decorate the class with the unique decorator, so I'll just type @unique.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=245)** And now you can see if I try to run this again, you can see that I'm getting error.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=253)** It says ValueError duplicate values found in, right?
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=257)** And it shows me that RED_DELICIOUS and APPLE are the same value.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=261)** So if you want to prevent having duplicate values, you can do that.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=265)** So let's go ahead remove that.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=268)** If you don't care what the values are, you can use the auto function to automatically assign values to your enums.
>
> **[4:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=277)** And to do that, I need to import the auto, the auto package from the module, and then I can do something like this.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=287)** I can use my enum, I can say I want PEAR equal to be auto, and now that will just automatically assign a value to my new enum, and what I'm going to do now is print that out.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=299)** So I'll print out Fruit.PEAR, right, .value, and let's comment out some of these other ones, and let's clear the screen here and then run this again.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=319)** And now you can see that PEAR value is equal to 2, and the reason is because, you know, we're allowed to have, you know, duplicate values.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=326)** If I wanted to make sure that these are all unique, I'd have to put auto higher up in the stack so that it wouldn't get reused again.
>
> **[5:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=333)** And, as I said earlier, you can use enums as hash values, so let's take a look at that.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=340)** So let's define a dictionary called my_fruits, and I want to have an enum as a hash key.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=348)** I can specify one like this, right? I can say, let's see.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=354)** Let me go back and take off that space.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=356)** I can do something like this.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=357)** I can say my_fruits sub Fruit.BANANA is equal to Come Mr. Tally Man.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=371)** So they can serve as keys in dictionaries.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=374)** And then I can access the dictionary by just, you know, doing something like this.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=377)** I can print out my_fruits, and then I'll just go ahead and use Fruit.BANANA.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=387)** Let's give that a try.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=390)** And you can see there in the output I've accessed the value of my dictionary.
>
> **[6:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=395)** So enumerations are a pretty common feature of many programming languages, and they can really help make your code easier to understand and maintain, and, as you can see, Python is no different.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (16), let (15), this. (5), this, (2), super (1)
> **Env Vars:** apple (11), banana (3), pear (3), red_delicious (2), orange (1)
> **CLI Commands:** python (3), make (3)
> **Code Identifiers:** my_fruits (3), enums_start (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Special methods: string values
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=0)** - [Instructor] Another fairly common operation in Python is to obtain a string representation of a particular piece of data.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=7)** So consider, for example, what happens when you use the string formatting function?
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=12)** So each one of these parameters is passed to the format function, and is converted into a string, and then substituted into the output string at that particular placeholder.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=24)** Now, for some data types, this is pretty straightforward, right, such as converting an integer number into a string.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=30)** Python gives your custom class full control over how it wants to represent itself in string form.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=36)** And there are essentially four main functions used to do this.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=39)** The first is the str function.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=42)** And this function is called on your class when the str print or format functions are used to convert it into a string, and obviously the return value has to be a string.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=52)** This particular string is typically an informal representation of the object.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=57)** In other words, it's just a nicely formatted human-readable string.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=61)** There's no expectation that this is a valid Python expression.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=66)** The second is the repr function.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=68)** This is called on your class when an object of its type is passed to the repr function in Python.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=75)** And according to the Python documentation, this function should try to return a Python expression that could be used to recreate the object with the same value.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=84)** Now, that might not always be possible with complex objects, in which case you can just return a useful description.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=90)** This function's often used for debugging purposes, so it's important that it contains useful data.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=96)** And if your class overrides repr but not str, then repr will also be used to generate the human-readable string.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=104)** Next is the format function which takes a format_spec as an argument.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=108)** And as you might have guessed, this function will be called when the object is converted using the string format function with a formatting specification.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=117)** The format spec will contain the description of the desired formatting options, and it's up to your class to implement the string formatting logic.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=126)** In reality, most classes never actually do that.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=128)** They simply delegate to the built-in string.format function.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=132)** The last function isn't really a string function.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=134)** It handles the conversion of an object into bytes.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=138)** And so there are some scenarios where you want to pass data as a set of bytes and using this function, you can do that.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=144)** You can convert your class into a series of bytes.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=148)** So it's called when the Python bytes conversion function is invoked on your object.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=154)** All right, so let's try some of these out in actual code.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=157)** Let's jump over to the editor.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=159)** And here in my code space, I'm going to open up the objectstr_start file.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=163)** And I have a class named Person with some default information in it, such as first and last name and in age.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=170)** And trust me that age is super accurate right now.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=172)** So I also have some code in the bottom of the file here, and that code is going to create, and print out some properties of the object.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=182)** Now, before I override any functions, let's just run what we have right now.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=186)** So I'm not going to override, str or repr, let's just run the code as it is.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=190)** So here in the terminal, I'm going to go into start, and chapter four and we'll run.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=200)** And when I run this, you can see that Python just generates a default string value that represents the class name and its address in memory.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=208)** And it's doing this for both the repr and the str, and you can see that as I format the code if in fstring, right I get a little bit of a different set of output right?
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=220)** It's just as formatted, but the result is just the same.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=223)** So I'm getting the same value for each of these three functions because I haven't overridden anything, and I haven't customized anything.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=229)** So let's change that, let's go back into the code, and let's override the repr function, and put some custom code in here.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=239)** So I'm going to define __repr, and I'm not going to use decorators for this.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=248)** What I'm going to do is return a string, and I'm going to return Person class, and I'm going to have self, actually, this is going to be a format string, so here we go.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=265)** I'm going to have self.fname, and I should probably label that just so it's clear.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=274)** And let me just collapse this down so we get some more room.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=278)** Then I'll have the lname label, and that's going to be self.lname and the age, and that's going to be self.age.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=289)** So now I've overwritten repr.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=292)** So let's go back to the terminal again.
>
> **[4:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=295)** And once again, we'll go into the start chapter four.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=299)** And I'm going to run this.
>
> **[5:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=303)** And now you can see that when I run this code that the same string is being printed the same time because I overrode the repr function, but I didn't override str.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=315)** So repr is being called for each case.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=318)** So let's go ahead and change that.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=319)** I'm going to shrink this down a little bit, and I probably should put the closing angle bracket in there.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=324)** I've got to that the first time.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=326)** So now let's add an override for str.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=330)** And in this case, I'm going to return a slightly different string.
>
> **[5:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=333)** I'm going to write return again, it's going to be an fstring.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=338)** And I'm going to write person self.fname,
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=347)** self.lname, is self.age.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=353)** All right, so now let's run this again.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=357)** So now we, we have both repr and str.
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=362)** Right now, we see we're getting some different results.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=364)** For the str and format functions, so for repr, I'm still getting the I'm getting the actual override of repr.
>
> **[6:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=372)** And when I call str and I use an fstring, I'm getting the more human readable formatting output instead.
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=380)** So let's try one more thing, which is to add the ability to convert the object into bytes.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=387)** So let's go ahead and shrink that.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=390)** And one more time, I'm going to put in def bytes.
>
> **[6:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=398)** So first I'm going to create a string to hold the object's data.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=403)** And I'm basically just going to make a very short string on this.
>
> **[6:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=408)** So I'm going to have just a temporary variable, and it's going to be a string, and it's going to contain Person: self.fname,
>
> **[7:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=421)** :self.lname, :self.age.
>
> **[7:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=430)** So then I need to convert this into bytes by using the string classes and code function.
>
> **[7:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=435)** And there's a variety of supported encodings built into Python, I'm just going to use utf-8.
>
> **[7:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=440)** So I'm going to return, and I'm going to call the bytes function, and I'm going to call val.encode.
>
> **[7:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=449)** And I'm going to encode this using utf-8.
>
> **[7:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=454)** And then I can add another print down here.
>
> **[7:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=457)** I'm going to print bytes of cls1.
>
> **[7:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=463)** All right, let's bring this back up, run it one more time.
>
> **[7:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=467)** And now you can see that when I run the example again, here is my utf-8 encoded bytes object.
>
> **[7:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=474)** And you can see it's a bytes object cuz the little b that's right here.
>
> **[7:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=477)** If I wanted to get fancier, I could just change the to utf-8 to 32.
>
> **[8:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=480)** And when I run utf-32, you can see, oh these are much more complex bytes now.
>
> **[8:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=484)** So by overriding these functions, you could exert a lot of control over how your objects are represented in both string and byte forms.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), let (15), self (10), override (6), this. (4)
> **CLI Commands:** python (9), make (1)
> **Definitions:** is called (2), in other words (1), is a  (1)
> **Analogies:** such as (2), for example (1)
> **Code Identifiers:** format_spec (1), objectstr_start (1)
> **Documentation:** specification (1), spec (1)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)

#### Special methods: computed attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=0)** - [Instructor] In a previous video, we saw how to use special Python class methods to generate string representations of objects.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=7)** In this example, we'll take the customization a step further.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=10)** Python provides a set of methods that classes can use to control how attributes are accessed on an object.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=17)** Whenever an object's attributes are retrieved or set, Python calls one of these functions to give your class an opportunity to perform any desired processing.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=27)** The first two, getattribute and getattr, are called to retrieve an attribute value and they're slightly different from each other.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=36)** Getattr is called only when the requested attribute can't be found on the object, while getattribute is called unconditionally, every time an attribute name is requested.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=47)** It's also called when Python goes to look up any methods in your class definition, so you need to be careful with it.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=54)** The setattr function is called when an attribute value is set on the object.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=59)** Delattr is called to delete an attribute.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=62)** And the dir function is called when the global, built-in Python dir function is used on the object.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=70)** And this is useful because it enables a developer to dynamically discover the attributes that your object supports.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=76)** So to see how these might be useful, let's take a look at an example.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=81)** All right, so here I am in my code.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=82)** I'll open up compattrs_start.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=86)** And you can see I have a class named MyColor that defines three attributes to represent an RGB color value.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=92)** Now, suppose I wanted a user of this class to be able to get the color value as an RGB tuple.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=99)** It would be nice if I could just repurpose, right, the existing attributes I already have and I can do that using the getattr function.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=105)** So let's go ahead and uncomment this.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=109)** And so I'm going to check, in the getattr call, if the attribute being asked for is equal to rgbcolor, then I'm going to return a tuple of self.red, self.green and self.blue.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=131)** Otherwise, I'm going to raise an AttributeError and I'll give the message that the attribute requested is not valid.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=142)** All right, so let's go ahead and try this out.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=145)** Down here in my code, you can see I'm creating a MyColor object and I'm going to print out cls1.rgbcolor.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=158)** That will cause getattr to be invoked.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=161)** And then, it'll look up, it'll match this value and it'll return the tuple.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=166)** So let's go ahead into the terminal and we'll go into Ch_4 and let's run this.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=177)** And you can see, sure enough, that's what's happening, right?
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=179)** So I'm getting my 50, 75, 100 returned as the tuple.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=183)** I can also get a little more fancy by calculating a CSS-style hex color value on-the-fly.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=190)** So let's go ahead and add support for that.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=195)** So if the attribute being requested is equal to hexcolor, I'm going to return a formatted string.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=207)** And that string is going to have self.red, right?
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=213)** self.red and we'll format that as a hex.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=218)** And then the same thing, self.green and self.blue.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=233)** All right, so let's go ahead and try that now.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=238)** So we'll print this out.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=240)** We'll print out cls1.hexcolor.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=246)** And once again we'll go into the terminal.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=252)** Let's bring this up a little bit and we'll run.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=264)** And now you can see that it's being returned as a hex value.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=267)** And actually, I should have probably put the little hash in front of it, like this.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=272)** There we go.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=274)** Okay, that's better.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=275)** Now we can see that I'm generating two different attribute values from existing attribute values and I can also control how attribute values are set.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=284)** So suppose I want to give users of this class the ability to set the color values as a tuple instead of having to individually specify red, green and blue value.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=294)** Well, using the setattr function, that's a pretty straightforward operation.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=299)** So let's uncomment setattr.
>
> **[5:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=303)** And what I'm going to do is check to see if the attribute value being set is rgbcolor, then I'm going to set self.red equal to the value in the zero index, right?
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=319)** 'Cause here's going to be the name of the attribute.
>
> **[5:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=321)** This will be the value it's being set to.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=324)** And I'll just do the same thing a couple of times with green and blue and that'll be value 1 and value 2.
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=336)** Now, I've got to be a little bit careful here because remember, my code up at the top is already setting some attribute values and setattr is going to be called every time that happens.
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=347)** So I need to have the else condition in here.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=351)** So if the attribute value not being set is equal to this, I'm going to just call the super class and call setattr with the attribute and the value.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=364)** And the reason I have to do that is so that these statements up here, in the class initialization, continue to work.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=371)** So otherwise, they won't get set.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=374)** This function will be called and the value won't be rgbcolor, so nothing will happen.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=378)** So we can't have that, right?
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=380)** So now let's try this out.
>
> **[6:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=382)** And what I'm going to do is, I'm going to call cls1.rgbcolor and oh, rgbcolor.
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=393)** And that's going to be equal to and I'm going to change the values to 125, 200 and 86, things that are seriously different than what they were before.
>
> **[6:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=404)** And then, I'll just copy these two lines and paste them, so we can see the change.
>
> **[6:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=408)** And let's go ahead and clear this and run it again.
>
> **[6:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=413)** And oh, whoops, looks like, oh, I didn't spell it correctly.
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=419)** It's rgbcolor, there we go.
>
> **[7:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=421)** Let's try that again.
>
> **[7:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=425)** And now, you can see that the values are changing, right?
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=427)** So here's the initial values, then I change them.
>
> **[7:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=430)** And both attributes now change, right?
>
> **[7:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=432)** They're both updated.
>
> **[7:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=433)** And of course, you know, I can still access regular values, right?
>
> **[7:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=438)** So I can do print, you know, cls1.red.
>
> **[7:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=445)** Right? You can see that that still works.
>
> **[7:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=447)** So the one last thing to try adding is support for the dir function.
>
> **[7:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=451)** So this is called when the built-in dir function is invoked on your object and it lists the available properties for an object.
>
> **[7:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=459)** This is your opportunity to help developers discover what types of attributes your class supports.
>
> **[7:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=466)** So let's go ahead and uncomment the dir function.
>
> **[7:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=469)** And what I'm going to do is, I'm just going to return a tuple that says I support rgbcolor and hexcolor.
>
> **[8:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=481)** And then, down here in the code, I'm going to write print, I'm going to call dir on cls1.
>
> **[8:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=490)** That's my class.
>
> **[8:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=492)** Alright, so let's go ahead and try this.
>
> **[8:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=496)** Let's clear and let's run.
>
> **[8:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=499)** And you can see, sure enough right here, the results of the dir operation.
>
> **[8:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=503)** Now I can see, oh yeah, this attribute, or this class, supports hexcolor and rgbcolor in addition to the red, green, and blue.
>
> **[8:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=511)** So adding support for computed attributes can really extend the features that your classes support and provide a way to reuse existing attributes in new ways.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (9), self (8), this. (4), delete (1)
> **Definitions:** is called (6)
> **CLI Commands:** python (5)
> **Env Vars:** rgb (2), css (1)
> **Tools:** terminal (2)
> **Code Identifiers:** compattrs_start (1)
> **Cross-References:** previous video (1)
> **Warnings:** be careful (1)

#### Special methods: operations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=0)** - [Instructor] Using special class methods you can give your classes abilities that they don't natively get from Python, but that other built-in objects have.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=8)** And one of those is the ability to emulate the behavior of numeric values in order to support operations like addition and subtraction.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=17)** This table shows a partial list of the functions your class can override in order to provide number-like functionality.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=26)** So you can add objects together, subtract them from each other, basically just about any mathematical operation you want.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=33)** You can see in the right hand column the kinds of expressions that cause these functions to be called.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=38)** Such as when two objects are added to each other.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=42)** In addition, Python also supports in place math operations on objects.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=46)** And that's represented by this table here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=49)** These functions are called when you use the shorthand notation such as plus equals in order to add to an existing object in place.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=57)** And again, this is not an exhaustive list.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=60)** If you want to learn more about these functions you can check out the data model chapter in the Python documentation.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=66)** But for now, let's take a few of these functions for a test drive and see how they work.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=71)** All right, so here are my code.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=73)** I'm going to open up numeric start.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=76)** And let's collapse that down.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=78)** So I've declared a class named Point.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=81)** Which holds an X and a Y value.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=84)** And represents a two-dimensional geographic point.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=87)** I've also declared a repr() function to print useful information about the point.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=93)** There are also placeholder functions for some of the math operations we're going to implement.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=98)** Now down here in my main code.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=101)** I've created a couple of example point objects to work with.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=104)** So first, let's implement the addition function so we can add two points together.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=111)** Oh actually, before we implement the code, let's see what happens in the default case.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=115)** Let's just go ahead and have P3 equals P1 plus P2.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=121)** So I'm going to bring up the terminal.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=125)** And we're going to go into chapter four and we're going to run.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=130)** This example.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=131)** And you can see that I print out P1, oh, actually let me print out P3.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=140)** And let me do this.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=141)** Let me also comment out.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=145)** The addition function so we can see what happens.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=149)** So when I run this, you can see that I get an error.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=153)** And the reason I'm getting an error is because the addition operator isn't supported for point classes, right?
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=160)** You can see right here unsupported operand types for plus, point and point.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=164)** So let's fix that, right?
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=166)** What we're going to do is go back into the code.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=168)** And we're going to uncomment this.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=171)** So we uncomment the add function.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=173)** And let's add some logic to actually add the two points to each other.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=178)** So I'm going to return a new point.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=181)** And I'm going to have self.x.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=186)** Plus.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=188)** And then you see here, when I have the ad function there's an argument called other.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=192)** This is the point that's being added to this one.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=194)** So I'm going to add other.x.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=198)** And I'm going to have self.y plus other.y.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=205)** So now we're actually supporting the operation here.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=210)** So this code now is going to work.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=212)** So now that I have the addition operation implemented let's run this again.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=219)** And now you can see that when I print out the result I've got 40 and 50.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=225)** So 10 is being added to 30.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=226)** And 20 is being added to 30.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=229)** So that gives me a point of 40 and 50.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=231)** All right, let's go ahead and subtract the two points.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=234)** Let's go back up to the code.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=235)** And implement subtraction.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=237)** So I'm actually going to just copy and paste this statement.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=241)** And I'm just going to replace the addition with minus.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=247)** All right.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=248)** And now let's do subtraction.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=251)** So I'll have P4 equals P2 minus P1.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=256)** And then we'll print P4.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=261)** Let's run it.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=262)** And now you can see that subtraction is working as well.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=266)** Okay, so now I've got code that lets me add and subtract two points.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=270)** All right, let's do one more thing.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=272)** Let's add the ability to do in-place addition.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=276)** And in-place addition is basically this.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=278)** I'm going to have P1 plus equals P2.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=283)** So I'm not creating a new variable now.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=285)** What I'm doing is I'm modifying P1 in place.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=289)** So let's go ahead and print that out.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=292)** All right, and now I need to go back and implement the "iadd" function.
>
> **[4:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=298)** This is the in-place addition.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=300)** And what I'm going to do is basically it's just going to be the same code as, well more or less the same code.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=305)** I'm not going to add a new point.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=307)** All I'm going to do is directly modify this object's properties.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=311)** I'm going to have self.x plus equals other.x.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=315)** Self.y plus equals other.y.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=319)** And I'm going to return my self.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=323)** So now I've got the code to do in-place addition.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=327)** So let's run our updated example.
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=331)** And now you can see that the results are what we expect, right?
>
> **[5:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=335)** So we have the new points and we have the in-place addition.
>
> **[5:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=339)** So I'll leave it as an exercise for you if you want to try out some of the other functions.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=344)** But as you can see, if your classes need the ability to support mathematical or numeric type operations, you can do so by overriding the appropriate special class methods.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (6), self (5), this. (3), override (1)
> **CLI Commands:** python (3)
> **Analogies:** such as (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Special methods: comparisons
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=0)** - [Instructor] Using special class methods, it is also possible to implement comparison operators to allow objects to compare themselves to other objects of the same type.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=9)** And this table lists the names of the special class functions you can override to provide comparisons.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=16)** And you can see that there are methods for greater than and less than and greater than or equal to and so on.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=23)** Each of these methods compares the object that the method is being called on to the object specified by the parameter named other.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=32)** And you can see the type of comparison expression that triggers that particular function in the right-hand column.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=39)** So for example, when I try to do self is greater than or equal to other, that's going to call the __gt__ function.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=48)** So let's actually see these in action in a real example.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=52)** So here in the editor, I'm going to open up comparison_start.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=56)** And you can see I have a class definition for Employee.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=60)** It specifies a first and last name, an employee level and a number of years of service.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=66)** And I've also got placeholder functions for the various comparison operations.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=72)** And here in my main code, I've got some code that creates a list of employees for a specific department.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=78)** So let's try a couple of operations out.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=81)** I want to be able to compare two employees to see which one is more senior.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=87)** And to do that, I can look at each employee's level and then figure out which one is larger.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=92)** So to implement that, I'm going to add the code for each comparison function to look at the level for the employee.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=100)** So for greater than or equal to, I'll just return whether self.level is greater than or equal to the other level.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=109)** And then I'll just implement this for each of these operations.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=112)** So for greater than, I'll just do greater than and for less than, I'll do just the less than symbol.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=120)** And then the less than or equal to.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=125)** And for equality, I'll just check to see if they're the same.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=128)** So now that I've implemented this comparison logic, I can perform a comparison between two employees.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=136)** Let's figure out who's more senior.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=138)** Let's see if Tim Sims is more senior than Jane Smith and Tim has a lower level, so that should be false.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=147)** So I'm going to print is the first employee more senior than the third employee, right?
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=158)** And that should be false.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=161)** And then I'm going to print out, let's see if Tyler Durden is more junior than Rebecca Robinson.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=169)** So I'm going to say dept 4 is less than dept 3.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=179)** All right, let's bring up the terminal and let's try running this.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=188)** So I'll run the comparison and we get both of them are false, right?
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=194)** So that's a problem.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=196)** So the first one is correct, right?
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=197)** Tim Sims is lower level, so he's not more senior but Tyler and Rebecca are the same level.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=203)** But Tyler has one year less of service than Rebecca has.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=207)** So he actually should be more junior than Rebecca.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=213)** So we can fix that problem by updating our comparison logic to check to see the years of service when levels are the same.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=224)** So I'm going to check to see, okay, if self.level is the same as the other level, then what I'm going to do is return whether self.seniority is greater than or equal to the other.seniority.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=246)** And I'm going to copy and paste this for each of these and I'll change that.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=251)** So greater than, and then I'll change... So for less than, and do the same thing for less than or equal to, and I'll just leave the equality check alone.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=267)** All right, so now let's run it again.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=274)** And now we can see that, yeah, okay.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=275)** In fact, Tyler is more junior than Rebecca.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=278)** So we've now fixed that.
>
> **[4:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=280)** So implementing these functions also lets us sort our objects because now that we have the ability to compare objects to each other, we can sort them in order.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=292)** So what I'm going to do, let's go ahead and shrink this.
>
> **[4:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=295)** I'm going to add some code here to sort the list and then print it out.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=299)** So first what I'll do is I'll do for employee in department.
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=304)** I'm going to print the employee last name and I'm going to do this... Yeah, here we go.
>
> **[5:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=312)** I'll print the, yeah, emp.lname.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=318)** So I'll print it out before it's sorted.
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=320)** And then I'll just put a dashed line in here.
>
> **[5:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=325)** And then I will sort the list using the sorted function.
>
> **[5:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=332)** So I'll sort the department and then I'll just do the same thing.
>
> **[5:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=337)** Only this time, I'm going to look in the result, not the department.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=341)** All right, so let's go ahead and run that.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=346)** And we're going to need some space for this.
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=347)** So I'll bring this up.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=353)** All right, so we can see that... Let's go back and look at our people.
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=358)** So we can see what's the initial order.
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=360)** We've got Sims followed by Doe, right?
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=364)** So this is before the sort.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=366)** So Doe should have come first because John's got the least seniority, right?
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=373)** So this is prior to the sort.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=375)** After the sort, we have Doe, then Sims, which is correct because Sims has level five but only nine years.
>
> **[6:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=383)** Followed by Durden, which is correct because same level five but 12 years followed by Robinson, right?
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=392)** Which is level five and 13 years, followed by Smith who has level six.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=397)** So Jane Smith is the most senior.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=400)** So now we've got the department sorted in level of seniority.
>
> **[6:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=406)** But let's suppose Rebecca had a shorter length of service.
>
> **[6:51](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=411)** All right, let's try this again now.
>
> **[6:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=416)** And now we can see that Robinson comes before Durden.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=420)** They've switched positions to reflect the change in relative seniority because now Rebecca Robinson has one year less of service than Tyler Durden has.
>
> **[7:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=429)** So using these special functions, it can provide an easy way of adding the ability to perform comparisons to your classes, and you get the benefit of being able to have them be sorted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (4), self (4), this. (4), type. (1)
> **Code Identifiers:** comparison_start (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Special Methods
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to implement special class methods to perform a variety of operations on our book class.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=8)** So first we needed to implement the str and repr functions according to the challenge instructions, and you can see that I've done that here.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=18)** And these are pretty straightforward.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=20)** You can see that my code just returns an f string that is formatted according to how the instructions specify that the output should appear.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=30)** So your solution should look something very similar to this.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=35)** For the second part of the challenge, we needed to implement comparison functions so that the books could be compared to each other based upon their page count.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=45)** And if we scroll down a little bit, we can see that my solution code overrides the comparator functions and performs each comparison based upon the number of pages in the book.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=56)** So I implemented greater than or equal to, greater than, less than or equal, and less than.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=61)** And then each one of those methods implements the right type of comparison in order to compare two books to each other.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=69)** And then the last part of the challenge required us to implement a computed property.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=76)** And this is a property whose value is determined at the time that it's accessed.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=80)** So for this part, I override the getattr function and check to see if the attribute name being accessed is adjusted price.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=89)** Because remember, this function's going to be called for each attribute access where the attribute doesn't exist on the object, so we had to check to see which attribute's being accessed.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=99)** Then my code performs the calculation based upon the rules that we were given.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=104)** So antique books have a 10 surcharge, paper books get a two discount, and then I return the value.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=114)** All right, so that's my code.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=116)** Let's go take a look at the test cases.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=118)** So here's the test code.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=120)** And remember, you didn't have to change anything.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=122)** All you needed to do was just execute the code as it's written right here.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=128)** You can actually go ahead and try out some of these different values if you want to to see how the operations work.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=134)** I'm going to test my code with the values given right here.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=137)** So I'll click on Test My Code and we can see that sure enough, the str function returned what it was supposed to, and the repr function returned what it was supposed to, the adjusted price was correct.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=151)** And then we compare the books based upon their page count.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=155)** So book one has more pages than book two, right, 'cause 1,225 is greater than 311, so that's true.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=162)** So that means that the less than is obviously false; greater than or equal to, obviously that's true, and then less than or equal two, obviously that's false.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=170)** All right, so that's my solution.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=172)** How does my code compare to yours?

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), class. (1), this. (1), implements (1), override (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Structural Pattern Matching

#### Overview of pattern matching
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=0)** [Instructor] - One of the things that I've always felt was missing from Python was an elegant way of matching a value against a variety of possible conditions.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=8)** Python finally addressed this shortcoming in Version 3.10 by introducing what's known as the match case construct.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=15)** In other languages like JavaScript or Java or C:, this is called the switch statement and it looks something like this.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=23)** You specify a value to test against and then you can list a variety of statements to execute based upon that value.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=30)** And this is often a much simpler and more readable way of than writing a whole bunch of if else, if else, if statements, right.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=37)** In Python, it looks like this instead and it's called the match case construct.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=43)** instead of switch case.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=45)** It's also a lot more powerful than the typical switch statement, and that's because you can specify a lot more than just constant values to test against in each of those case conditions.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=57)** In this chapter, we're going to look at how to use the match case technique to work with a variety of patterns such as literal patterns, which are specific constant values like strings and numbers, capture patterns, where you can assign values to variables as part of the matching process, class patterns where you can match against specific types of classes and objects, sequence patterns that match against sequences values.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=82)** And then we'll wrap up by looking at pattern guards, which give even more control over how patterns are matched.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=88)** By the end of this chapter, you'll be able to use pattern matching to replace a whole variety of otherwise complex if else constructs that are hard to read and not nearly as versatile.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), else, (2), this. (1), case. (1)
> **CLI Commands:** python (3)
> **Definitions:** known as (1), is called (1)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)

#### Simple patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=0)** - [Instructor] Let's start with the easiest example of pattern matching and that's just using regular constant values.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=6)** So I'm going to go ahead and open up the simple_start file here in my editor in chapter five.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=14)** So I have a variable named x, and the initial value is set to zero.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=19)** So if I wanted to test the value of x against a variety of possibilities, instead of just using a bunch of if else statements, I can just use match x, and then specify a variety of cases to test against.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=35)** So I can test case zero, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=37)** And in the case of zero, I'm going to print zero.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=44)** And then in the case of one, I'll print one and I can also specify a case that matches against anything else.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=55)** This is the default condition, so I'm going to use case and then the underscore character, which means I don't care what the value is, just match anything that we haven't caught so far, and I'll print out no match.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=72)** Alright, so let's go ahead and run this.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=76)** So we'll bring up the terminal and let's go into chapter five and let's run, and we can see that since x is zero, the first case is what executes, and we get the zero string.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=92)** But we don't need to specify just one data type like integers, I can match against any data type.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=97)** So let's add a few more.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=100)** I'm going to add a case to look for a literal string called zero, in which case I'll just print the number zero and I'll add a case for None, right, which is null, and in that case I'll just print Nothing.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=118)** So now let's change x to None and let's run it again.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=127)** And now you can see the different output.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=129)** And I'll go ahead and actually put the word Zero in there and let's run again.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=136)** And now I get the zero value.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=138)** All right, so you can see I'm getting the different values as I change the value of the variable that I'm matching against.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=145)** And as we go through this chapter, we'll see some more complex examples, but I think you can already see why I really like this language feature, because it makes the code a lot more concise and easier to read than a whole bunch of if else, if else, if statements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), else, (2), else. (1), match. (1), this. (1)
> **Code Identifiers:** simple_start (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Capture patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=0)** - [Instructor] Sometimes it's useful to work with a subject value as part of the logic inside one of the case blocks.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=8)** This is called the capture pattern and it lets us assign variables to the subject in order to make this easier and I'll show how this works.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=16)** So I'm going to go ahead and open up the capture start example.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=20)** In this example I have some code that asks the user to enter their name and we've already seen how to match against a literal value in a previous video so if the user doesn't enter anything, then this case block will match, right?
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=35)** It'll just say "Hello, anonymous."
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=37)** I can also write some code that will match any value the user entered like this.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=42)** I can write case name and then I can print "hello" and then their name.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=55)** But it gets better.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=56)** I can use what's called an as pattern to assign the value to a new variable and I can specify multiple literal values to check using the or pattern.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=69)** So for example, I can write case and then I can look for specifically Joe and then the vertical bar for the or operator, or Joseph, right?
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=80)** And then I'll save that as S.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=84)** And then in that case, I'll just print, "Oh, hi there," and the variable S.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=95)** So let's go ahead and run this example in the terminal.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=103)** And we'll run the capture.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=106)** So I'll enter my name.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=108)** So I'm just going to put in nothing, right, and you can see that the anonymous case fires.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=113)** And then when I run it again and I put in, you know, something like Bill, you can see it says "Hello, Bill."
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=119)** That's this case here where we're capturing the name.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=122)** And then if I put in something specific like my name, it says, "Oh, hi there."
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=127)** You know, in this case, I typed in Joe, but I can also do the same thing if I type in Joseph specifically.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=133)** That will also trigger that case.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=136)** So this really starts to showcase the power of the match case feature because to do something like this using regular if-elif-else would take a lot more code and be a lot harder to read and understand, right?
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=150)** I have to check out names and instance types and see, okay, is it a string?
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=155)** Is it not a string?
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=156)** Whatever, so on.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=157)** So I think you're starting to see the power of how match case works here.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), match, (1), this. (1), let (1), case. (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Class patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=0)** - [Instructor] Up until now, we've seen how to use constant values and some other interesting features of pattern matching.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=6)** But in this example, we're going to take it a step further.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=9)** Class patterns allow our code to check to see if a given subject is an instance of a particular type.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=16)** So I'm going to open up the code for class start here.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=20)** And you can see I've got some classes defined that represent two dimensional graphic shapes, right?
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=24)** Circle, square, and rectangle.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=27)** And I've also got some code that creates and initializes a list of shapes.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=33)** So we can use pattern matching with classes to process each of these shapes very easily.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=39)** So let's write some code to print the area of each shape.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=44)** So I'm going to loop over all the shapes and I'll use the match shape.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=53)** And then I'm going to check for different cases.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=55)** So I'll first, I'll check for the case of circle and then I need the two parentheses there, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=60)** To match the object.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=62)** And I'm going to print circle with area and I'll call shape.getarea.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=74)** And then I'll do the same thing for square and rectangle.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=80)** So that's going to be square, and this is going to be a rectangle.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=90)** And we'll copy you and paste.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=92)** And then I'll add one more case that catches the default in which case I'll simply print out unrecognized shape.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=104)** And it's got a type of shape.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=109)** And so notice that I don't need to use the is instance or type function here.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=116)** I'm just simply comparing directly with the class type.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=120)** So let's go ahead and run this, bring up the terminal and let's run class.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=131)** And we can see that we've got all of our different shapes being processed along with the area of each one.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=139)** So this kind of example really shows how powerful pattern matching can be because in this case we're not comparing values we're looking at actual object types and having to write the same code using only a regular if else construct would be a lot more complex than this.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=155)** I'd have to check types using is instance and that kind of thing.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=157)** Here, it's a really straightforward construct of match.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=161)** And then case, case, case and matched my individual processing.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=164)** And it's much easier to read with a lot less visual noise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), case, (2), function (1), this, (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Sequence patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=0)** - [Instructor] One particularly interesting use of pattern matching is to match against a sequence of values even when you don't know how many values they're going to be.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=8)** In this example, when we open up sequence start, I have some test data that represents a list of different math operations along with a set of numbers to operate on for that operation, right?
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=24)** So the first one is addition, then we have a multiply, then another addition, and a square root function.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=30)** So the addition operation can take multiple values, whereas multiply has two and square root has one.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=38)** So what I want to do is process this list of operations, perform each operation on the given set of numbers and have a result.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=45)** So, I've already got my for loop with the match case statement, and for each operation I'm going to print the name of the operation and the result.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=55)** So, let's handle the multiply and square root functions first.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=60)** To specify a case statement that handles a sequence we just need to add multiple items to the case that indicate how many items we're looking for.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=69)** So, we know that what we're looking for is the text mul followed by two numbers in the case of the multiply example.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=77)** So let's do that one first.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=79)** So I'm going to look for the literal word Mul and then two numbers, num1 and num2.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=87)** And then I'll just simply say result = num1 times num2.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=95)** So I'm specifying the literal string, Mul, followed by two expected arguments.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=100)** Square root is pretty much the same but it only has one argument.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=105)** So I'll look for Sqrt and the number, and then I'll set result = math.sqrt of the number.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=122)** So in each of these operations, the sequence that we are expecting is a specific string followed by a certain number of arguments.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=131)** But what about the addition operation?
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=133)** We don't know how many arguments there's going to be.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=136)** So the way to specify that case is by using the asterisk notation that we use for variable arguments to functions that we learned about a little earlier.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=146)** So let's have the case for the add, and then I'm going to write *nums.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=153)** And that's just going to match any number of arguments.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=157)** And then I'll just simply say, result is equal to, and I'll use the sum function to add up nums.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=163)** And sum is a built-in python function.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=166)** So this will capture the literal string add followed by any number of numbers, and then we just add them all up.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=174)** All right, so let's go ahead and run our code.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=176)** So let's go ahead and bring up the terminal.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=180)** And we'll go into the start chapter five.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=184)** And let's run our sequence.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=190)** And sure enough, in the output, you can see the results.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=193)** So, let's make a change and see what happens.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=196)** I'm going to change the multiply operation so that it has three numbers instead of two.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=203)** But remember, my case statement is only expecting two numbers.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=208)** So when I run this again you can see that the multiply operation was skipped because that case statement is only going to match if there's the literal string mul followed by exactly two arguments.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=222)** And since this operation now has three that case doesn't match anymore.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=227)** So in this example, the multiply and square root numbers are said to be fixed length, while the addition operation is said to be variable length.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=236)** And we can create a combination fixed and variable length pattern pretty easily.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=241)** So, let's suppose that we wanted the add operation to always have at least one number to work on.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=246)** So we can go back and change that to look like this.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=249)** I'll just simply add num1 before the star.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=255)** And then change this to be num1 plus the sum of the rest of the numbers.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=260)** So now there has to be at least one number.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=262)** And so if I run this again, and let's go back and fix the multiply operation as well.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=270)** Here we go. So let's go ahead and run this.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=273)** And now you can see that we're getting the same result when we run the code again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (3), this. (2), for. (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Pattern guards
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=0)** - [Instructor] When working with pattern matching we can fine tune and narrow the matching criteria by using something called pattern guards.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=8)** So let's take a look at how those work.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=11)** Let's open up guards_start.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=13)** And we're going to revisit a previous example where we saw how to use pattern matching with classes.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=19)** So this is essentially the same exercise file where I've defined some classes that represent geometric shapes.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=26)** And you can see once again, I have classes for circles, square, and rectangle, along with some code that instantiates these classes with different dimensions.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=35)** So just like in the previous example, we're going to process the list of shapes and get the area of each shape.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=42)** But what if we wanted to treat the objects differently based upon the values of their properties?
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=49)** This is where pattern guards become really useful.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=52)** So I'm going to add a condition to check for a circle with a radius that is larger than six.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=59)** So I'll write case Circle and then inside the parentheses, I'm going to write radius=r.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=67)** And if we scroll up a little bit, you'll see that circles have a radius property.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=72)** So I'm going to capture that value in this r variable.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=77)** And then I'm going to write if r is &gt;= 6.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=83)** And in that case, what I'm going to do is modify my print statement to write Large Circle with the area the same.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=93)** So the condition with the If statement here serves as the pattern guard.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=99)** In this instance, a circle with a radius larger than six will cause this case statement to match.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=106)** Otherwise the next circle case will match.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=109)** So let's also add a pattern guard for the rectangle that uses two properties.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=115)** So I'll just go ahead and copy that statement and put another one in.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=120)** And in this case I'll capture both the width as w and height as h.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=128)** And I'll write if w is the same as h, then I'm going to print square rectangle, 'cause it's a special case of a rectangle if it has the same size.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=140)** Otherwise the rectangle case will match.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=143)** So let's go ahead and run our code.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=146)** And you can see that I have some examples here.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=148)** So I have a circle that's smaller than six and one that's larger than six, and I do have this one rectangle.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=154)** Well, I haven't added it yet.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=156)** Let's go ahead and add a rectangle that has the same size.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=160)** So let's add a rectangle that's got width and height the same.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=165)** So let's bring up our terminal and let's run this.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=172)** So python guards.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=176)** Alright, and you can see that when I run this, I've got, let's see, so yeah, so for the circle with radius of nine, we get large circle with the area as opposed to the regular circle output and then we've got regular rectangles, and then we have the square rectangle in the case where both the width and the height are the same.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=199)** Now, it's important to note that the order in which you define your case conditions is important because the first case that matches the condition is what's going to be chosen.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=210)** So if I go back to this code and I move the generic circle case up above the one that's checking for the radius, let's watch what happens.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=222)** You can see that that large circle case no longer fires because now every circle matches the first case and that's where the matching stops, right?
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=232)** The code says, oh, found my match, and it doesn't do any of the rest of them.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=237)** So you can actually get pretty sophisticated with pattern guards.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=240)** Let's take a look at the next example.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=243)** Let me shrink this down.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=247)** So in this example what I have is a list of various types of data.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=252)** I've got an uppercase string, an integer, a mixed case string, a boolean true value, and the none value.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=261)** So I'm going to uncomment this example and let's comment out the previous example just so we don't have all this output to look at.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=272)** All right, so let's write some cases that use pattern guards along with types.
>
> **[4:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=277)** So first I'm going to add a pattern guard that checks for all upper case.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=282)** So I'm going to write a case that looks for a string object and I'm going to capture that string as s.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=289)** And then my pattern guard is going to say if s.isupper.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=297)** And if I find that I'm going to print out f and I'm going to print out the string.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=307)** Actually, it's s, not d, there we go.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=311)** I'm going to print out, oh no it is d, sorry, that's the subject.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=314)** So I'll print out that D is an Upper case string, right?
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=320)** So that's what we're matching on right there.
>
> **[5:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=322)** And then I'll look for just a regular string.
>
> **[5:25](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=325)** So case string by itself.
>
> **[5:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=329)** And then I'll print out and this is going to be Not an upper case string.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=338)** So then we'll check for the boolean case.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=340)** And again, this is where order is important because Python treats boolean values as integers.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=345)** So this has to come before the integer check.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=348)** So let's write case bool and I'll print out that this is a boolean and then we'll check for the integer
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=362)** and we'll print that that is an Integer value.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=369)** And then we'll leave the last case as it is.
>
> **[6:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=372)** All right, so let's go ahead and run this and let's get rid of that blank line.
>
> **[6:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=381)** All right, so it's clear and let's run.
>
> **[6:26](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=386)** And when I run this, you can see that each of my case statements with the type based pattern guards, are producing the expected results.
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=393)** We were even able to detect if a string was all uppercase or not.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=397)** So that should give you an idea of just how powerful and versatile pattern matching can be especially when you combine it with pattern guards.
>
> **[6:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=405)** So I would suggest maybe taking a few minutes here and trying out some of your own experiments.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=410)** So for example, try this.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=412)** How would you write a pattern guard that detected if a list of numbers had an odd number in it?

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), match. (3), this. (2), this, (2), case. (2)
> **Definitions:** is a  (2), is an  (2)
> **CLI Commands:** python (2), find (1)
> **Analogies:** just like (1), for example (1)
> **Code Identifiers:** guards_start (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)

#### Solution: Patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to write a program to process the orders for a dry cleaning operation, and we needed to use pattern matching in order to do that.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=11)** So let's review my code.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=13)** All right, so my code uses a for loop to process each of the items in the order contents list.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=21)** And you can see that there are three different individual order groups.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=27)** So I've used pattern matching to match each order type in the list.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=31)** So let's start by looking at dry cleaning orders.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=34)** So for dry cleaning orders, I'm using the OR pattern to look for these specific strings shirt, pants, jacket, or dress.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=43)** And I have that argument as garment.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=46)** And I'm also looking for three additional elements, the size, starch, and same-day variables.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=54)** So this pattern works by relying on the fact that each dry cleaning order contains four items.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=60)** So inside the logic for this case, right, we have the base amount that we add to the total price, and then we adjust based upon whether we want starch and same-day service.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=72)** And those were, you know, $2 for starch and 10 for same day.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=76)** For the wash-and-fold case, we have a string description.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=82)** Okay, so here we have my case.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=84)** and I've got a string coming in as the description as well as the weight of the order of all the clothes.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=91)** And then we apply the formula for the price, right?
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=96)** So if the weight is more than 15, then we have a little bit of a discount.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=101)** Otherwise we just calculate the weight times 4.95, and that's how we handle the wash-and-fold case.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=109)** And then in the last case for blankets, again, I'm looking specifically for comforter or cover as the blanket variable, whether or not it's going to be dry cleaned, and the size.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=121)** So each of these is going to be a flat 25 fee, and if dry cleaning is needed, then we increase the price by five.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=129)** And then I also have a default case where I print an error message in case one of the orders was in the wrong format.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=137)** And then I return the total price rounded to two decimal places.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=142)** All right, so let's go ahead and look at the test code.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=144)** So here in the test order, the first three are dry cleaning.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=148)** Then we have a blankets case.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=151)** Then we've got two wash-and-folds followed by, looks like two more dry cleaning, some wash-and-fold, a comforter, and then another dry cleaning.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=161)** So let's go ahead and test our code, and sure enough, the cost of this order was 389.3.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=172)** So go ahead and feel free to try out some different values and patterns in your test code here.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=178)** But in the meantime, you can see that's my solution to the challenge using pattern matching.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=183)** So go ahead and take my code and compare it to yours.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (3), case, (2)
> **Versions:** 4.95 (1), 389.3 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=0)** - [Joe] All right, well, that brings us to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=2)** I hope you enjoyed learning along with me about some of Python's more advanced language features, and now that you've seen what the Python language is capable of, maybe you might want to check out some ways you can apply your newfound skills.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=16)** I would suggest maybe taking a look at learning Python GUI programming to see how you can build user interfaces with Python, or maybe check out [[Python Object-Oriented Programming]] to learn more about building Python programs at scale.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=29)** Whatever you choose to do next, don't forget to keep your Python skills up to date by reading up on the [python.org](https://python.org) website.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=35)** And feel free to connect with me on LinkedIn.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=37)** I hope to see you again in another one of my courses soon.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=41)** Until then, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8)
> **URLs:** [python.org](https://python.org) (1)
> **Env Vars:** gui (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-language-features-4311093/codespaces)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Master Your Python Skills]]
← [[Advanced Python]] | **2 of 11** | [[Advanced Python- Working With Data]] →

## Appears In

- [[Master Your Python Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)