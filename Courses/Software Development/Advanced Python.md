---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-23931756
url: "https://www.linkedin.com/learning/advanced-python-23931756"
level: Advanced
updated: 12/9/2024
learners: 5568
skills:
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-3912165/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGl3s1fBLp7kg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732065162293?e=2147483647&amp;v=beta&amp;t=KbQYiJVRNDEiEEN-pdbOl9sdQXiL-VKGcEKbP35w7Wg"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
next_courses:
  - '[[Advanced Python- Classes and Functions]]'
path_nav: '[{"path":"Master Your Python Skills","position":1,"total":11,"prev":null,"next":"Advanced Python- Classes and Functions"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python.md)

![Advanced Python](https://media.licdn.com/dms/image/v2/D4D0DAQGl3s1fBLp7kg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732065162293?e=2147483647&amp;v=beta&amp;t=KbQYiJVRNDEiEEN-pdbOl9sdQXiL-VKGcEKbP35w7Wg)

# Advanced Python

> Take your Python skills to the next level. In this hands-on, interactive course, instructor Joe Marini shows how to leverage advanced Python features such as object-oriented special class methods, and how to make your code run more efficiently and easier to read and maintain. From iterators and sequences to string processing and exceptions, Joe covers a wide range of topics uniquely framed for exp

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756) | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Python Features** (6 videos)
- **3. 2. Using Iterators** (8 videos)
- **4. 3. String Processing** (5 videos)
- **5. 4. Working with Sequences** (7 videos)
- **6. 5. Exceptions** (6 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=0)** - Python has become one of the go-to languages for developers across a wide range of application types and industries, and it's not surprising why this is the case.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=9)** The Python language is flexible, customizable, and provides right out of the box the kinds of features that other languages make you go to third parties for or require that you build yourself.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=20)** Hi, I'm Joe Marini, and I've been building software professionally for some of the best known companies in Silicon Valley for more than 35 years.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=28)** If you're comfortable with the basics of Python development and you're looking to take your skillset to the next level, then this course is intended for you.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=36)** We're going to see how to use some of the more advanced features of the language and the Python Standard Library to write better, more performant code that takes advantage of what's already built in.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/welcome?u=76281980&t=46)** Let's get going.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (1)
> **Code Keywords:** case. (1), require (1), let (1)
> **UI Navigation:** go to (1)
> **Speakers:** - python (1)

#### Getting set up
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=0)** - [Narrator] This course is intended for Python programmers who have already attained a good understanding of the basics of the language and want to learn some of the more advanced features of Python.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=10)** So this is not the place to start if you don't already know Python programming.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=15)** And again, you don't need to be an expert, but I do expect that you already are comfortable with the basics, like understanding what variables are and how to write statements and functions.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=26)** If you need to brush up on your Python before starting, first check out Learning Python, here in the library.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=32)** And we're also going to be using the standard library of Python.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=36)** So consider checking out the Python Standard Library Essential training.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=40)** For this course, I'll also be using Visual Studio Code.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=44)** It's a free tool from Microsoft, and it runs on Mac, Windows, and Linux and also online, as we'll see in a moment.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=50)** And you can download it from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=54)** It has a rich ecosystem of plugins available, which we will take advantage of in the course.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=60)** If you'd like to learn more about Visual Studio Code, you can check out the course Visual Studio Code for Python Developers.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=67)** You can find all of the exercise code that accompanies this course at this GitHub repository, and the course content is organized into two separate folders.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=78)** The Finished folder contains all of the code examples in their finished state, so that you can compare your code against them as you work through the course.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=88)** The Start folder contains the code examples in their beginning state, and this is the folder that I will be working in throughout the course as we build towards the finished state for each example.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=100)** If you want to download the examples and work with them locally on your computer, then that is easy enough to do.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=107)** If we go back to the main GitHub page, if you click on the code menu, you can see that you can clone the repository directly to your desktop, or you can download the code as a zip file and then use your favorite code editor to work on them.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=122)** You'll just need to make sure that you have Python installed on your computer.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=126)** A recent version, at least version 3.10 should be good enough in order to use the examples.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=132)** But this repository has also been set up with a GitHub codespace, so you can just work directly online with nothing to install.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=141)** All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a code space here in the code menu.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=149)** You want to click on Codespaces and you won't need to install anything.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=154)** Now you can see that I've already done that.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=156)** This is the code space that I've got running right here, and this is the code space I'll be using.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=161)** But yours of course, is going to be named differently.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=165)** Now, either way works fine.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=166)** You can download the examples and work locally on your computer if you want to, but I'm going to be using the Codespaces feature in this course.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=174)** So let me jump over to the codespace, which is already running to show you what it looks like.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=179)** Now when you create your own codespace, it will take a few moments to spin up.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=183)** So you just need to be patient.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=185)** When the codespace starts, you will see a browser-based version of Visual Studio Code, and then over here in the Files list, you can see all the files.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=193)** Here's the Finish and Start folder.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=195)** These are all the files you need for the course, and you also have a built-in terminal, which can be found in the View menu.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=204)** And you can see right here, it's down near the bottom.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=206)** This is the terminal.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=207)** You can also type Control, Backtick to get it.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=210)** So let's go ahead and bring up that terminal.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=213)** And I'm just going to check to make sure that Python is already installed.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=216)** So I'm going to type Python--version, and you can see that I have Python 3.10.12 already installed.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=224)** You also want to make sure that you have the Python and Pylance extensions installed.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=230)** Now since this is my own codespace, I already have these extensions installed, and if you click on the little boxes icon right here, you can see that these are all the extensions.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=240)** So you're going to want Pylance, Python, and Python Debugger.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=244)** You can find these in the marketplace.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=246)** If you're using the codespace, they probably should be already installed for you.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=249)** If you're using the desktop version of Visual Studio and you're working locally, you'll need to install these yourself.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=256)** If you just search for extensions in the marketplace, I'm going to search for Python.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=261)** And you can see that the first example that comes up right here, this is the one with, you know, hundreds of millions of downloads from Microsoft.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=267)** This is the one you want.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=269)** This will install both Python and Pylance for you.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=272)** And then you can choose to install the Python Debugger if you want.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=275)** That's pretty much all the setup that you need to do.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-23931756/getting-set-up?u=76281980&t=278)** So once you've decided whether you're going to work locally or use the codespace and you've got all the extensions installed, you are ready to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (18), make (3), find (2)
> **Tools:** visual studio (5), github (4), terminal (3)
> **Prerequisites:** install (5), set up (1), you'll need (1), setup (1)
> **Exercise Files:** download the (3), zip file (1)
> **Versions:** version 3 (1), python 3 (1), 10.12 (1)
> **UI Navigation:** click on (3)
> **Code Keywords:** let (2)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)

#### Using CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=0)** - This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=15)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=30)** The code Challenge has four areas.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=32)** There are instructions here in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right and a console for output in the bottom left.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=46)** You can use these drag handles to allocate more space to your code as you like.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=53)** To get even more horizontal space for the code editors, you can collapse the courses table of contents on the left side of your screen.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=62)** Each challenge has instructions that include a description of the challenge and the challenges parameters and the desired result.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=69)** Depending on the challenge, you will see some additional information in the instructions such as an explanation of the parameters that your code will be given, along with some examples of what the expected output might look like.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=81)** So you create your answer in the top right editor.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=84)** There are comments in the code showing you where to put your solution.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=88)** When you click on the "Test my code" button, you'll see a message indicating whether your code returned a correct result.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=95)** So I'm going to go ahead and click on "Test my code" right now without making any changes.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=99)** And you can see that I'm getting the wrong answer.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=102)** So if your code isn't successful, you can ask for help.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=105)** What I'm going to do is change the values of the "show expected result" and "show hints" variables here to be both true.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=116)** I'll click on "Test my code" again, and you can see that I got an incorrect answer, and my code came back with the wrong value.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=125)** Now, I'm seeing what the expected result should be, and I get a hint.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=129)** It says, try looking for a standard function that returns the largest number in the list.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=135)** Alright, well, that actually jogs my memory.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=137)** What I'm going to do is return max from the numbers list, and now I'm going to test my code.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=146)** Oh, look, now I got the right answer.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=148)** That's basically how easy it is to use CoderPads.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=150)** That's how you'll create your challenges.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=153)** Regardless of whether your answer is successful, you will see messages in the console output in the lower left, and if any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-23931756/using-coderpad?u=76281980&t=165)** When you've finished each code challenge, return to the course's table of contents and then click the next video to see my solution so you can compare it to your own.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4)
> **Code Keywords:** function (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - this (1)


### 2. 1. Python Features

#### Documentation strings
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=0)** - [Instructor] In this chapter, we are going to learn about some of the language features that are specific to Python that can help you write better code.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=7)** We're going to start off by learning a little bit about documentation strings.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=11)** It's always a good idea to write documentation strings for your functions and classes and modules.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=17)** And personally, I think this is one of the great features of Python.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=21)** The documentation for your program's code is directly available as a part of the program itself.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=27)** So let's take a look at an example.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=30)** So here in VS Code, I'm going to open up the terminal.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=35)** And let's maximize this.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=37)** Alright, so what I'm going to do is fire up the Python Interpreter, and I'm going to do that by typing python3.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=44)** If you're doing this on your own computer and you're on Windows, you might just need to type py or just the word Python.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=50)** If you're on a Mac or Linux, you'll probably need to type python3 It depends on how you install Python.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=55)** Here in the codespace, I'm going to type python3 and that will open up the interactive interpreter.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=61)** What I'm going to do is look at the documentation for the print function.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=65)** So let's imagine I wanted to know how the print function worked.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=68)** All I need to do is print out.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=72)** I'm going to use print. and then two underscores, the word doc, and then two more underscores.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=78)** So when I run that, you can see that the documentation for the print function shows up.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=85)** And as I mentioned, this works for more than just functions.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=88)** It also works for classes and modules.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=90)** But you can see that this documentation is just part of the actual code.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=94)** So it shows me how to use the function.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=96)** So here's the actual function call itself.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=98)** This is the prototype, and it tells me what it does and what the different arguments are.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=103)** And we can do this for modules.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=106)** So I'm going to go ahead and import the collections module, for example.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=109)** So let's import collections.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=112)** And then I can do the same thing.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=113)** I'll simply print out collections, and then two underscores, doc, two underscores.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=120)** And as you can see, that prints out the documentation string for the module, which also describes the different classes that are available within that module, so I can just keep on going.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=132)** I can print out Collections.deque and then two underscores and doc.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=142)** Same thing, right? More documentation strings.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=144)** So what's really nice about this feature is that I can interactively learn about various Python APIs as I need to know them and I don't have to leave the Interpreter, I don't have to go searching through tabs or some other cumbersome docs or whatever.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=158)** If I just want to see how to use a specific function, I print out the documentation string and it's easy enough to read.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=165)** It's also an easy standard for other developers to follow when they create their own packages and their own code.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=172)** So to do this for your own functions and your other code, like your modules or classes, all you need to do is define a literal string at the top of a function or a class or a module.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=185)** So let's do this.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=186)** I'm going to un-minimize this terminal.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=189)** Let's close it.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=191)** So let's open up doc_strings.py.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=195)** Alright, so I have a function that takes a couple of arguments and just prints them out.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=199)** And what I want to do is create a docstring that explains how this function works.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=203)** So to do that, all I need to do is put the string within triple quotes at the top of the function.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=211)** So then I'll just simply explain that this is my function and it takes arg1 and arg2 defaults to none, and doesn't really do anything.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=226)** And then I'll explain the parameters.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=230)** So arg1, this is the first argument.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=234)** Whatever you feel like passing.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=240)** And then of course, we have the second argument, arg2, and this is the second argument.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=252)** Defaults to none.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=255)** Do what you like.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=257)** So anyway, just put the documentation for your function here.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=261)** And you'll see down here in my main function, which we'll get to in a little bit as we go further into the course.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=267)** But here in my main function, I'm just printing out the docstring.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=270)** So let's go ahead and run this.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=272)** Now, to run this, I can either go into the terminal and just execute it manually, or I can right-click on the file and choose Run Python File in Terminal.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=283)** Or I can click on this little Play button up here, which will run the Python file in the terminal.
>
> **[4:48](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=288)** So I'm going to go ahead and do that.
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=290)** So when I run this, you can see that my docstring is being printed out just as if I'd accessed it in the other examples I showed previously.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=299)** So now, I've got a documentation property that's been filled in, and anybody who wants to know how my code works can easily see it.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=307)** You can learn more about docstrings and some of their conventions and best practices that you might want to follow by reading up on PEP 257, which you can find at this link.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=319)** It covers the various conventions and why you want to use them and some best practices.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=323)** I'm going to just quickly cover some best practices here before we move on.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=328)** So first, docstrings should always be enclosed in triple quotes, even if they are only one line.
>
> **[5:34](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=334)** This makes it easy to expand on them later.
>
> **[5:37](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=337)** The first line of your docstring should summarize the function, the class or the module, and what its main purpose is.
>
> **[5:43](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=343)** For packages and modules, list the important classes and sub-modules that are contained within the module along with any custom exceptions that the developer needs to know about.
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=355)** For classes, list the important methods, along with important information, like any enumerations or static member functions or properties.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=365)** For functions, there's a variety of important things to list.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=369)** First, make sure your docstring lists and explains each of the parameters, including any optional ones.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=374)** If the function returns a value, explain it here.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=377)** If there's no return value, the usual convention is to save space by not listing one instead of explicitly calling out that there's no return value.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=387)** If the function raises any exceptions, make sure you mention those as well.
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-23931756/documentation-strings?u=76281980&t=392)** Docstrings are a really great feature of the Python language and make sure that you remember to use them in your own code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), let (8), module (6), this. (3), this, (2)
> **CLI Commands:** python (9), python3 (3), make (3), find (1)
> **Documentation:** the documentation (6)
> **Tools:** terminal (5), vs code (1)
> **UI Navigation:** right-click (1), click on (1)
> **Analogies:** imagine (1), for example (1)
> **File Paths:** doc_strings.py (1)
> **Code Identifiers:** doc_strings (1)

#### Special variable names
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=0)** - [Instructor] Python has several special variable names associated with the import system, which is how Python loads code in various modules and packages, and sometimes these can be useful in your own code.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=12)** So let's go ahead and open up specialnames.py.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=15)** The three variables that we're going to look at are __name__, __file__, and __package__ and all three are surrounded by double underscores, which is a fairly common standard in Python for using special internal properties and variable names, and so on.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=31)** The __name__ variable is the name of the current module.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=35)** The __file__ variable contains the path to the file, which the module was loaded from, and the __package__ variable indicates the package that the module belongs to.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=46)** So let's try examining each of these and we can just print these out.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=50)** So the module name is going to be __name__
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=58)** and we'll do the same thing with __file__.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=62)** So the file path is going to be __file__.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=70)** And finally let's print out the package.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=76)** Alright, okay, let's go ahead and run what we have, and I'm going to do that by clicking on the little run button up here.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=84)** So you can see that the module name is __main__, the file path is the path here in my workspace, my code space to the file.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=94)** This is the file that we're working in, and the package is none because there's no package involved with this particular file.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=102)** Alright, so let's try executing this code a different way.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=105)** I'm going to fire up the interpreter and I'm going to type import specialnames, and you can see that when I do that, the code executes, and now the module name is the name of the file, right?
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=126)** Package is still empty and the path is still the same.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=131)** Now notice how the code executed, even though I didn't explicitly run anything, and that's because the Python interpreter executes code as it comes across it.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=142)** So as the module gets loaded, and the Python interpreter just goes and executes the code.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=147)** So these print statements are at the top level, right?
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=150)** They're in the global scope, so they will just get run as they are encountered.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=155)** So we can use the value of the __name__ variable to help with this.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=159)** So we can check to see if the value of that variable is __main__ which will tell us whether the code is being imported into another file or if the code is being executed as a program.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=174)** So I'm going to add a check for that case down here.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=178)** I'm going to write if __name__ is equal to __main__
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=187)** then I'm going to print out, "This code is being run directly."
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=196)** And I'm also going to add the collections package so we can see an example of a __package__ variable name.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=203)** So I'm going to import collections.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=207)** And let's see, I'm going to print out the collections __package__.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=221)** Okay, so let's get rid of the old terminal just so we can look at the code.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=225)** So I added the collections package so we can see an example of that, and now I've got some explicit code that checks to see if the name variable is equal to main, and if so, which means that this file is being run as a program from the terminal or some other way, then we'll see this output in the terminal.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=243)** So let's go ahead and run this.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=246)** So a couple of things are different.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=247)** So here's the name of the collections package, and notice that the code inside the if statement executed because the module name is now __main__.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=257)** But let's go back and try our import trick one more time.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=260)** So I'm going to fire up the interpreter and I'm going to import specialnames.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=267)** And notice that this time, this output is not there in this version, and that's because now that we're importing the code, it's not being executed as a main program.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-23931756/special-variable-names?u=76281980&t=278)** So you can use this information in the code you write to detect whether the file is being imported into another file or being run directly as a program, and you can alter your code's behavior appropriately.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), module (8), this. (2), from, (1)
> **CLI Commands:** python (5)
> **Tools:** terminal (3)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** specialnames.py (1)
> **Speakers:** - [instructor] (1)

#### Understanding scope
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=0)** - [Instructor] One of the important concepts to understand when working with Python is that of scope.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=5)** The concept of scope is what determines how your variables and other symbols and names such as functions and classes are looked up and managed within your program by Python.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=18)** Now, it's important because this is the mechanism that prevents one part of your program from interfering with another part.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=26)** Essentially, scope describes the visibility of variables and names within the rest of the code, and it's determined by where you declare that name.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=36)** There are two main scopes you need to consider, global and local.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=40)** So let's open up the pyscope file.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=43)** And here in the example code, let's declare a variable named x at the top of the file, which is the global scope, right?
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=52)** So let's have x=1.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=54)** So this variable is visible within the rest of the code in this file.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=60)** The local scope refers to the scope within functions.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=65)** For example, I can define a function, and let's just go ahead and write some code.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=72)** So I'll define a function named test.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=76)** And inside that function, I'm going to declare a variable also named x and assign it a value of 10.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=83)** And I'm going to print out x.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=87)** So even though these two variables have the same name, they are different from each other because they are in different scopes.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=94)** So let's write some code that modifies the variables.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=99)** So I'll run the test function.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=102)** And then I'll print x.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=105)** And then I'll change x, so we'll add five to the value, and then we'll print x again, and then we'll run the test function again.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=117)** So let's go ahead and run this, and I'm going to go ahead and click the little run button up here.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=121)** So when I run the code, notice that x is 10 when it's inside the function and then it's one when it's outside the function.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=131)** So when I add five to the global x, that's right here, that changes the value and it's only reflected outside the test function.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=142)** So x becomes six, but back within the function again, it's 10.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=147)** And again, because that's because those two variables, even though they have the same name, they're different.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=153)** So this separation of scope ensures that my functions don't change global variables inadvertently.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=160)** But what if I want to explicitly do so?
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=162)** What if I want to explicitly work with that global variable?
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=166)** Let's close the terminal for a moment.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=169)** What I'm going to do is add the keyword global to my function.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=175)** I'm going to declare that there's a global named x.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=180)** This indicates to Python that my function is using the global value, and it's also a good self-documenting reminder to whomever's reading the code in the future, even if it's me years from now, that x is a global variable.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=196)** So now let's run the code again.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=198)** And now you can see that the results are different.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=201)** So now the function does in fact affect the value of the global.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=206)** So x starts out as one, but then within the function, I set it's 10.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=210)** So here it's not one anymore, right?
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=213)** So it stays 10, and then I print it out, so it's 10, then I add x=x+5, right?
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=219)** And then I print it out 15.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=221)** So I've affected it outside the function, but then when I run test again, notice how it's still 10.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=227)** That's because what's happening is I'm printing it out here and the inside the function, I'm sending it back to 10 again, so it's affecting the global value.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=236)** The ability to define global and local scopes also leads to some interesting results.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=243)** So let's try some other code out.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=245)** And what I'm going to do is I'm just going to comment out these previous examples.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=253)** All right.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=256)** So let's make a function called multiplier_maker, and it's going to take an argument named factor.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=266)** Now, inside this function, I'm going to define another function called multiply.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=273)** And that's going to multiply a number.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=276)** And that's going to return the number times the factor.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=283)** Then, from my top level function, I'm going to return multiply.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=289)** So I'm returning this function.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=292)** So what I have here is an internal nested function within my multiplier maker function.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=299)** So each of these functions gets their own local scope, and multiply has access to the enclosing functions scope as well.
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=309)** So I'm returning a reference to the multiply function.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=314)** Now, because that internal function makes use of the parameter given to its enclosing function, Python will package up all of the statements and the scope that it's running in to create what's called a closure.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=327)** A closure is basically a nested function that carries information about its enclosing scope, even though that enclosing scope has completed its execution,.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=338)** Closures can provide a way to preserve state information between function calls.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=345)** So I can now create individual instances of this function that will remember the factor value that is provided.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=353)** So for example, I can make a doubler and I'm going to call multiplier_maker with the value of two, and then I'm going to make a tripler.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=364)** And that's going to be multiplier_maker with a factor of three.
>
> **[6:07](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=367)** So the doubler function remembers the enclosing state, so it applies the value of two for the factor each time it's called, and the tripler function does the same thing, but with the value of three.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=378)** So let's try each of these out.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=379)** I'm going to print out doubler with an argument of 10.
>
> **[6:24](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=384)** And remember, this argument is now going to be this value here in the multiply function.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=390)** And let's just make a few of these.
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=392)** So I'll try it again with 15, and then I'll print out tripler, and I'll just call it with 10 and 15 as well.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=403)** So let's go ahead and run this.
>
> **[6:46](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=406)** And you can see that the values are either doubled or tripled depending on which function I call.
>
> **[6:54](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=414)** This works because each call to multiplier maker gets its own set of remembered state information.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=420)** So the key part to remember here is that scope is essentially how Python manages and accesses your variables in code.
>
> **[7:08](https://www.linkedin.com/learning/advanced-python-23931756/understanding-scope?u=76281980&t=428)** It helps ensure that your code doesn't inadvertently change other aspects of your program.

> [!info]- Semantic Content
>
> **Code Keywords:** function (32), let (13), this, (1), self (1), this. (1)
> **CLI Commands:** python (5), make (4)
> **Code Identifiers:** multiplier_maker (3)
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Truth value testing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=0)** - [Instructor] In Python, any object can be tested for Boolean truth value.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=5)** So, let's take a few moments now to learn about how that works.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=9)** In general, any object is considered to be equivalent to Boolean true, unless its class defines a bool method that returns false or has a length method that returns a zero length.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=22)** And we'll look at that in a little bit.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=23)** Let's look first at the built-in objects that evaluate to false.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=28)** Obviously the false Boolean constant itself and the none constant, which you may have seen represented in other languages as null, will evaluate to false.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=39)** Any of the built-in numeric types that evaluate to zero are also considered Boolean false.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=45)** So for example, the integer value zero, the floating point 0.0, and the complex value type of 0j are all false.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=54)** In addition, the decimal object when given a value of zero and the fractional object when it has a numerator of zero, also evaluate to Boolean false.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=64)** Next are empty sets and sequences, and you can see the examples here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=69)** So the empty string and empty collection and sequence objects are all considered to be Boolean false.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=76)** Also, if you call the set function with no parameters or you create a range of zero, those will evaluate to Boolean false.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=84)** For custom objects, they are by default, considered to be Boolean true unless they override the bool function and return a false value, or they override the len function and return a value of zero.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=100)** There are also three basic Boolean operations in Python.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=103)** There's and, or, and not.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=106)** The first two of these operations are short circuit operators, and it's important to remember this.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=112)** So in the case of and, if the first value evaluates to false, then the second operand isn't evaluated.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=119)** So if X is already false, then Python won't bother evaluating the Y expression because it won't matter, anything anded with false is going to come out to be false.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=128)** Similarly, the or operator only evaluates the second operand if the first value is false because anything ored with true will come out to be true.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=140)** Now, some of these rules might be different from what you're used to in other languages, so it's important to remember these.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=145)** Let's jump over to the terminal really quick and try some of these out just so you can see them in action.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=150)** Right, so here in VS Code, let's go ahead and open up our terminal and let's maximize this.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=157)** So I'm going to start up the Python interpreter and I'm going to go ahead and just create an empty sequence.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=163)** So I'll make an empty list, and then if I print out the Boolean value of that list, we can see that it's false.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=172)** And I could do the same thing with an empty dictionary.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=174)** So let's make an empty dictionary and let's do the same thing, and again, that's false.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=182)** However, if I add an element to either the list or the dictionary, so if I do something like this and then I do something like key gets the value of value, and then let's go ahead and print out bool x and bool y.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=204)** You can see that those are both true.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=206)** So I'll leave it as an exercise for you if you'd like to try out some of the other examples that I listed.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=211)** What's important to remember is that how Python evaluates true and false can easily trip you up.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-23931756/truth-value-testing?u=76281980&t=217)** So remember these rules and keep them in mind as you're writing your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), override (2), this. (2), default, (1)
> **CLI Commands:** python (5), make (2)
> **Tools:** terminal (2), vs code (1)
> **Versions:** 0.0 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The assignment expression
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=0)** - [Instructor] Back in the Python 3.8 release, a new operator became available that helps simplify variable assignments that can make your code more concise and easier to understand.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=12)** So in order to understand how this new operator makes things easier, let's take a look at how assignment statements work.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=18)** So I'm going to open up the assignment.py file here.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=23)** Okay, so here in my code, I have a statement that assigns the value of 5 to the variable x, and just prints it out.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=29)** And this is pretty straightforward and you've probably seen it many times.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=33)** The new assignment operator helps address some common coding scenarios.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=39)** So in other languages, like C for example, it's actually legal to do something like this.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=47)** So what's happening here is you're making the assignment at the same time you're testing the value.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=54)** So it basically combines the assignment along with the conditional expression.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=60)** And as you might have guessed, this leads to a lot of very hard-to-find bugs because usually the developer meant to have the double == in here and not the assignment.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=71)** In this case, you can see that Python prevents this from happening because it doesn't allow the syntax, but the need is still there.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=79)** So let me undo this.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=84)** So the assignment operator, sometimes called the walrus operator, looks like this: it's a :=, and then I can just print out x.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=97)** And the reason it's called the walrus operator is because if you kind of look at it sideways, then the colon is the eyes and the equal sign is the tusks, and you know, it kind of looks like a walrus, so that's the reason.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=110)** And it does need to be part of an expression, and that's why I've surrounded it by these parentheses.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=115)** If I take away the parentheses, you'll see that that's an error, I can't legally do this outside being surrounded by parentheses 'cause it has to be part of an expression.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=126)** So why does this operator exist and what does it help with?
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=130)** There are several scenarios where this operator helps improve the readability of code, so let's take a look at a few of them.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=137)** Here's one good example.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=139)** Suppose I wanted to have a loop that processed some input from the user and then terminated when the user entered a particular string.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=148)** So I could write some code that would look like this.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=151)** I'd have a thestr variable, and I'd use my input statement to ask for the value.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=158)** And so the user would input the value, and then I would have a while loop that checked thestr to make sure it's not equal to "exit".
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=167)** And while that's true, we can just print(thestr), and then we would get the next input value.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=173)** (keyboard keys clicking) All right, so let me comment these other guys out.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=183)** So let's run this code., and I'll put in "hello" and "world", and then when I tape in "exit", the program exits.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=195)** So it works, but the code is a bit more complex than it needs to be.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=199)** So I'm calling the input function twice, there's that.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=203)** There's just a lot of visual noise here, right?
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=204)** This variable only really exists, you know, just to check to see if the value is an exit or whatnot.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=211)** So I can simplify this code using the assignment operator by simply as assigning the value of thestr to the result of the input call.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=224)** So what I'll do is, I'll surround this by parentheses, and then I'll put this in there.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=233)** And now, I can get rid of this initial variable, and I can get rid of this additional input.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=240)** So now I've simplified those four lines of code down to just two lines.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=245)** So the string is getting assigned the result of the input of value, and then I can do the comparison, and then I print and the while loop will execute again.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=256)** So let's go ahead and run.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=260)** And sure enough, I get the same result.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=265)** So the walrus operator is a strong visual hint that I'm performing an assignment along with the conditional test, which will make it harder for bugs to slip past.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=279)** Another common use case for the assignment operator is to prevent multiple calls to the same function when it isn't necessary.
>
> **[4:48](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=288)** So let's look at another example.
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=290)** So in this case, I have a list of values, and I'm populating a data structure with information about those values.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=297)** And so I calculate the length of the list and then I sum up all the numbers, and then I calculate the average, and I put the results here into the data structure.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=307)** So let's go ahead and pretty print these results.
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=310)** (keyboard keys clicking) All right, let's go ahead and run it.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=319)** And oh, whoops, let me go ahead and comment out that previous example.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=326)** All right, so let's run.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=328)** And you can see the results right here.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=330)** Now, it works, but it's not ideal, right?
>
> **[5:34](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=334)** So let's go back and take a look at the code.
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=336)** So the only reason why these variables exist is to store some temporary data.
>
> **[5:43](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=343)** So by using the assignment operator, I can store the results as I get them.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=348)** So rather than assigning these temporary variables out here, what I can do is simply declare in line that this l variable will get the value of the results of this length function, and the same thing with this sum right here.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=366)** So I'll just copy that, paste it in, and give it the assignment operator.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=375)** And now, I can get rid of these two temporary variables.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=378)** So I've removed the redundant variables, so now I calculate them directly in place, and then I can just reuse those variables within the data structure where they are needed.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=389)** So once again, let's run, and we get the same result, but now I've got code that's more readable, right?
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=396)** It's pretty clear like why these variables exist.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=399)** They're being used right in line where they're needed.
>
> **[6:42](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=402)** And because I'm declaring them, this is after all an assignment, I can just reuse those variables later on.
>
> **[6:49](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=409)** The assignment operator was adopted in PEP 572, and you can find that at this link if you want to do any further reading on it.
>
> **[6:58](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=418)** It's become pretty widely adopted since it was first introduced, and then you can actually find it in several places within the Python Standard Library code.
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-23931756/the-assignment-expression?u=76281980&t=427)** I've started using it in my regular Python development, and I'm sure you will too once you become accustomed to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (3), function (3), case, (2), this: (1)
> **CLI Commands:** python (4), make (3), find (3)
> **Definitions:** is a  (2), is an  (1)
> **Non-Speech:** (keyboard keys clicking) (2)
> **File Paths:** assignment.py (1)
> **Env Vars:** pep (1)
> **Versions:** python 3 (1)
> **Analogies:** for example (1)

#### Using print and pprint
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=0)** - [Instructor] Almost everyone uses the print function for a variety of reasons, but not many people realize just how versatile it is.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=7)** In this example, I'll demonstrate some of the lesser known features of print, and we'll also take a look at pretty-print, which is a more advanced way of outputting content.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=16)** Let's go ahead and open up the print and pprint example.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=21)** All right, so we all know the basic way of using print.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=25)** You pass a set of values, and they appear in the terminal output.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=30)** So I'm just going to go ahead and run this code as it is before we make any changes, and sure enough, we can see the output here in the result.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=38)** So let's see what else the print statement can do.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=42)** So first of all, the print function supports a separator argument that you can specify to put a separator between the values.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=51)** Now it defaults to a space, as you just saw in the previous example, but you can change that.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=56)** So let's set the parameter to a couple of dashes.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=59)** What I'm going to do is print the values list there and I'm going to specify the sep argument, and I'm going to give it a string of a space, two dashes, and a space, and then let's go ahead and run again.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=76)** And you can see the difference here.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=77)** So here's the default spaces, and here's the argument I just supplied, which is the two dashes and two spaces.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=86)** Another useful argument is the end parameter, which you can use to customize how the end of each line is printed.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=94)** Now, the default is just a carriage return to start a new line, but you can specify any string.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=100)** So let's print each value along with the line number.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=105)** So I'll make a for loop that goes from the range starting at 0 to the length of the values list.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=116)** And let's go ahead and print out the value at that index.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=122)** And I'm going to specify that the end is going to be a Python f string, and I'm going to have in there an expression.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=132)** Well, not an expression, I'm just going to put it in square brackets.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=134)** So I'll put line, and then I'm going to convert the current index plus one to a string.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=144)** And then, of course, I need to put a carriage return at the end of the print so that we get new lines, so let's go ahead and run our updated code.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=157)** And you can see there's the result.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=159)** So I'm printing out the value, so here's the first value, and you can see that now I have a customized line ender with the index of each line after each print.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=170)** You can even send the output of the print function to a file instead of the terminal.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=176)** So let's go ahead and try that out.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=179)** So to do this, you set the file parameter to something other than system.standard out, which is the default, so let's give that a try.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=188)** I'm going to create a new file, and I'm going to open a file named output.txt, and we'll open that for writing, and then I'm going to print the values list.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=205)** And once again, let's go ahead and put our separator in there with the space and two dashes.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=210)** I'll use the file parameter to specify the new file, and then I'm going to specify that the flush parameter is set to true.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=223)** I'll get back to that in a second.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=225)** And oh, that's values not value, there we go.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=228)** Okay, let's go ahead and comment out some of the previous examples since we've already seen them.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=236)** All right, so let's go ahead and run this.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=242)** And sure enough, you can see over here in the sidebar that output.txt has been created.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=247)** So let's go ahead and click on that and we can see the content.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=251)** Now, the reason why I'm using the flush parameter, which is right here, is because this is telling Python to flush out the buffer after each print statement.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=264)** What normally happens is when you're writing to a file, Python will wait until the output buffer gets full before it flushes it out, and I'm just forcing the issue right here.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=273)** This basically just makes sure that the file content gets written.
>
> **[4:37](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=277)** All right, let's go ahead and comment this out, and let's get rid of that output.txt.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=287)** All right, so now let's turn our attention to the pretty-print module, which is where we find the pretty-printer, and this is actually specified in the documentation.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=300)** Let me go ahead and open up that link so you can see it.
>
> **[5:02](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=302)** So this is the pretty-print module.
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=304)** You can find this in the standard library, and I would go ahead and keep this link open in a tab while you're working on this.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=311)** You can find the full docs here when you want to read more about it.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=315)** But for now, let's just go ahead and step through it.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=318)** So you typically use pprint for more complex data like objects and JSON and so on.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=324)** So here in my code, I have some objects that specify some information about a set of World Cup games and I can just pass this structure directly to the pretty-print class and it will format it the best that it can.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=341)** So you can see if we scroll back up, I've already imported the pprint module, so let's scroll back down.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=351)** And so inside the pprint module, there is a function called pprint, but there's also an abbreviation that's just pp, which is what I typically use.
>
> **[6:01](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=361)** So let's go ahead and send the World Cup data to the pretty-printer and let's go ahead and run that.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=371)** And you can see that the output contains all of the data and the pretty-printer tries to fit the data on one line if it can, but it will break it into separate lines if it exceeds a certain width, which defaults to 80 characters.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=389)** And just like with the print function, we can customize how pretty-print behaves with some parameters.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=396)** So let's go back and change this.
>
> **[6:38](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=398)** What I'm going to do is specify that the indentation level should be three.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=403)** The width I want to print in is going to be 40.
>
> **[6:47](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=407)** And I want it to underscore the numbers.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=410)** The large numbers will be underscored.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=412)** All right, so let's go ahead and run that updated code.
>
> **[6:56](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=416)** And now you can see, let me expand this, you can see that now, all the data's being printed on multiple lines.
>
> **[7:02](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=422)** The indentation is three spaces for each one of the lines.
>
> **[7:06](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=426)** And because I specified underscore numbers, you can see that the thousands are being separated by the underscores in the output.
>
> **[7:16](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=436)** You can even use some of Python's more advanced features like data classes with pretty-printer.
>
> **[7:21](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=441)** So let's go ahead and back to our code and let's comment this out.
>
> **[7:28](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=448)** All right, so let's scroll down a bit.
>
> **[7:30](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=450)** You can see that here I have the same World Cup data represented in a set of instances of a data class that I've created up here.
>
> **[7:42](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=462)** And if you're not familiar with data classes, I have another Python class here in the library where you can learn more about data classes.
>
> **[7:50](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=470)** If you're not familiar with them, don't worry about it for now.
>
> **[7:52](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=472)** It's basically just a shorthand way of creating Python classes that are primarily used to represent data.
>
> **[7:59](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=479)** So what's cool about this is I can just pass these data classes directly to the pretty-printer and it will know what to do with them.
>
> **[8:07](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=487)** So if I just simply call pprint.pp on my second cup of World Cup data and let's go ahead and run this updated code.
>
> **[8:16](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=496)** Did I comment out the previous one? Yes, I did.
>
> **[8:19](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=499)** All right, let's go ahead and run this.
>
> **[8:23](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=503)** And you can see the output here.
>
> **[8:25](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=505)** In this case, I'm not getting JSON objects, I'm just getting data class objects, but you can see that the data is all the same.
>
> **[8:31](https://www.linkedin.com/learning/advanced-python-23931756/using-print-and-pprint?u=76281980&t=511)** So the print and pretty-print functions become even more useful when you know how to customize their behavior with the right parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (29), function (5), this. (4), module (4), pass (3)
> **CLI Commands:** python (6), find (3), make (2)
> **File Paths:** output.txt (3)
> **UI Navigation:** in the sidebar (1), click on (1), scroll down (1)
> **Env Vars:** json (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)


### 3. 2. Using Iterators

#### Basic iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=0)** - [Instructor] The operation of looping over sequences of values is very common in Python, and there are several built-in methods and modules to help out with this.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=9)** During this chapter, we're going to investigate several different ways of processing sequences of values.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=15)** The term we use to describe this processing is called iteration.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=19)** And in this exercise, we'll start off by using some built-in methods to make iterating over sequences quick and easy.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=26)** Let's open up the Basic_Iterators file.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=30)** And here, I have two sequences of day name abbreviations in both English and in French.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=37)** You're probably already familiar with the for in construct, which you can use to create a loop for a given sequence.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=44)** So this code just loops over the days list and prints the day to the terminal.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=50)** So let's go ahead and just run that and just see it in action.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=53)** And sure enough, if you can see the output right here, the days are being printed out on each line.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=58)** So there might be times when you want more granular access to individual items in a given sequence and you want to process them in order.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=69)** So let's take a look at how we would do that.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=71)** I'm going to close this terminal.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=74)** And let's go ahead and comment this out.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=77)** So to do this, you can use the iter and next functions.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=81)** The iter function creates an iterable object out of a sequence that you give it, and the next function retrieves the next item in the iterable.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=91)** So to create an iterator for the English days, I can just write some code like this.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=95)** I'll use the iter function and pass in the days sequence.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=100)** And then to access each item whenever I want it, I can use the next function.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=105)** So I'll just print next from the iterator and let's do this a few times.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=111)** So this allows me to have more control over when I want to access the next item.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=116)** So if I run this, you can see that the result is pretty much the same.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=120)** We have the first three days being printed out.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=122)** Now, this may not seem very useful at first since you can already iterate over lists and such using the for statement.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=131)** But where iter gets really useful is when you give it to a function to use to generate the sequence items.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=138)** So let's consider an example.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=141)** So I have this small text file right here.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=144)** It has six lines of text in it, line one through line six.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=148)** So using the iter function, I can quickly create an iterator to process each line.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=154)** So let's go back to the code and let's comment this out.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=160)** What I'm going to do is open the file and it's testfile.txt, and I'll open that in read mode, and I'll get that as my file pointer.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=177)** So what I'm going to do is write a for loop, and for each line in, and then I'm going to use the iter function and I'm going to pass it the file pointers readline function.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=188)** So this is going to function as the iterator that gets me each line, and then I'm going to give it an empty character.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=196)** That's the sentinel, we'll get to that in a second, and I'm going to print out each line.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=201)** All right, so the second argument there, I mentioned it's called a sentinel value.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=206)** So when it's used in this form, iter will call the function that you give it.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=213)** So I've provided this function to iter.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=216)** It's going to generate each value.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=218)** And when the returned value from this function is equal to the sentinel value, the iterator will stop.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=226)** So in this case, the iterator is just looking for the empty string, which is what happens when the file runs out of content.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=232)** So when I run this, you can see that each line is being printed out.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/basic-iterators?u=76281980&t=240)** Now, you can think of using the iter and next functions as a pull model where your code asks for the next item when it is ready, as opposed to a push model where a for in loop just gives you each item as they are available when it's ready to give them to you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (8), this, (3), this. (2), pass (2)
> **CLI Commands:** python (1), make (1)
> **Tools:** terminal (2)
> **File Paths:** testfile.txt (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### More iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=0)** - [Instructor] Let's continue learning about iterators by working with some built-in functions that loop over collections of data.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=6)** So I'm going to open up the "more_iterators" file here.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=10)** So as we saw earlier, if I wanted to make a simple loop over each of the English day names, that's pretty straightforward, right?
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=18)** You simply write "for d in days" and then you print out each day, and that works pretty well.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=25)** The life of a programmer is rarely that easy, however, and I might have a need, for example, to generate an index along with the data.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=34)** So, okay, I suppose I can do something like this.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=38)** I can have "for d in range" of the length of the days sequence, and then what I would do is print the day.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=49)** Well, d is now an index, right?
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=51)** So then I would print the index and then the sequence, I would index into that sequence.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=58)** But now I don't want to have the index start at zero, so I want to have it start at one.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=62)** So now I have to have a plus one here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=66)** So now I've got my loop that prints out the index along with the day.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=71)** And if we run this, we can see that that works pretty well, right?
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=74)** Here's the index and here's each of the day abbreviations.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=78)** But just within a few moments, I've created a looping construct that's a bit more verbose and complex than it needs to be.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=87)** And this is where a built-in function called "enumerate" can help.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=92)** So "enumerate" takes a collection along with an optional starting value, and it returns a tuple that contains the index value of the current item along with the item in the collection.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=103)** So I can simplify my loop to look something like this.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=107)** I'll write "for i and d in" and then I'm going to use the "enumerate" function, and I'm going to enumerate the days collection, and I'm going to start at index one, and then I'll just print out the index and the day.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=124)** So let's comment this out and then let's run this again.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=133)** Okay. And we could see now that the result is the same.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=137)** So I've accomplished the same thing with code that is easier and more expressive to read.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=143)** So now I don't have this complex print statement anymore.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=146)** I've got my "enumerate" function.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=147)** It's pretty clear what it's doing.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=149)** Now we'll come back to "enumerate" in a moment.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=151)** But let's look at another function.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=153)** Let's take a look at the "zip" function.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=155)** Sometimes you need to iterate over multiple sequences at the same time.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=160)** The "zip" function takes any number of sequences and combines them into a single iterator.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=166)** So if I wanted to iterate over both the English and the French day names at the same time, I would write some code that looks like this.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=174)** I'd have "for d in" and then I would zip the days and the French version of days.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=181)** And then I would just print each day.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=184)** And let's go ahead and comment out the "enumerate" example.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=188)** Scroll this into view and run it.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=191)** And now we can see that each time through the loop, D is a tuple containing an item from each one of the lists.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=199)** And the "zip" function gets really useful when you combine it with the "enumerate" function.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=204)** So let's actually try that out.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=207)** I'll have the same kind of construct.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=209)** So I'm going to write "for i and d in," and I'll call the "enumerate" function.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=215)** And I'm going to enumerate over the results of the "zip" function.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=219)** So I'll zip up days and days French.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=225)** And once again, I'll start at one.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=228)** And this time I'll print out the index, the first item in the tuple that comes back, and then I'll separate that with the equal string.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=240)** And then I'll print out the second item in the tuple, and then I'll have a string that says "in French."
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=248)** So let's comment this one out.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=251)** Okay, so let's run our updated code.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=254)** And now we can see that we have the index along with the English and French names paired.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=263)** Now in case you're wondering, what happens if the two sequences aren't the same length?
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=268)** The "zip" function terminates when the shortest sequence is exhausted.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=273)** So if I go back and if I remove the French version of the abbreviation for Saturday and I run the updated code, you can see now that the loop is terminating at Friday because the shorter French version is now exhausted and the loop stops.
>
> **[4:56](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=296)** However, if you want different behavior, you can use the "zip longest" function.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=300)** So "zip longest" will create a sequence like "zip" does, but it will fill in blank values for the shorter sequences.
>
> **[5:08](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=308)** And for this particular example, before I do that, let me just comment this out.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=314)** So "zip longest" is not a built-in function, it's part of the itertools module, which we'll be learning about in the rest of the chapter.
>
> **[5:21](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=321)** But this will be a good introduction.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=323)** I'm going to import itertools, and if we scroll back down, you can see that I've got three sequences and each one is a different length.
>
> **[5:34](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=334)** So I've got six letters, four integers, and then a string with three lowercase letters in it.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=340)** So let's use the "zip longest" function to zip up each of these.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=346)** So I'll have a result that holds the result of itertools, and I need to call the "zip longest" function.
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=355)** And I'm going to zip up sequence one, sequence two, and sequence three, and then I can specify what I want the fill value to be.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=366)** Now, I could just have it be empty spaces, but in this case, what I'm going to do is supply a string that's a dash character so that we can easily see the result.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=375)** So we'll print out the result, and then for each item in the result, we'll just print the item.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=385)** All right, so let's run that.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=387)** And you can see in the output that each tuple contains an item from each sequence until that sequence runs out.
>
> **[6:34](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=394)** So for the first three, we've got A1X up through C3 and Z, but then the string runs out.
>
> **[6:42](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=402)** So then we have DN4 and a dash, because that's the fill character.
>
> **[6:46](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=406)** And then the integer run out.
>
> **[6:47](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=407)** So then we have the remaining uppercase letters.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=410)** These built-in iteration functions really help clean up your code and make it a lot easier to read while addressing some very common iteration scenarios.
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-23931756/more-iterators?u=76281980&t=419)** So start using these instead of basic for loops whenever the need arises.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (12), this. (3), continue (1), this, (1)
> **CLI Commands:** make (2)
> **Env Vars:** a1x (1), dn4 (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** more_iterators (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### For-else
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=0)** - [Instructor] One of my favorite things about Python is that it has some quirky features in it that you don't find in other languages.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=7)** And one of those is the for/else construct.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=10)** Let's open up for_else.py.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=13)** Now, you're probably already familiar with for loops that execute over a set number of times or elements in a collection.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=20)** What you might not know is that just like conditional if statements, a for loop can also have an else clause.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=27)** So let's take a look at how it works and why you'd want to use it.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=31)** So here in this example, I have a list of names, and I have a function that searches the list for a given name.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=39)** So the for loop iterates over each name, compares each one with the search term, and if it's found, we return true.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=47)** And if we go all the way through the list and we don't find the name, then we return false.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=52)** So we can actually write this code another way.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=56)** What I can do is have an else clause.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=65)** And have it return false, and have that grouped into this else clause rather than sitting outside the block.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=73)** So the else block will only execute if the for loop runs all the way through without interruption.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=80)** So let's run this and see what happens.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=81)** So I'm looking for Creed and Tom.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=83)** So Creed is in the list and Tom is not.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=87)** And we can see that name found true and name not found false.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=90)** Right, so the two test cases, we have one of each result.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=94)** Now, this might seem a little weird at first, but it is valid Python.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=99)** And after seeing it a few times, it'll start to look more natural.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=102)** Now, in this simple example, the benefit might not be obvious, but let's look at another example.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=107)** Let's write some code to determine if a number is a prime number.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=112)** So I'm going to write a function called is_prime.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=117)** And it's going to take a number.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=119)** So I'll have a for loop, and the loop is going to run from the range, from 2 up to the number that I was given.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=132)** And if that number, modulo i, is equal to 0, then we know that the number is divisible by more than just 1 and itself.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=142)** So I'm going to print that number is not a prime number.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=150)** And then I will break from the loop.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=154)** And then I'll have an else clause that prints out that num is a prime number.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=167)** And then I'll have a couple of tests.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=169)** I'll call is_prime on 31, which we know is prime, and is_prime on 56.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=179)** And let me go back and comment out my previous example.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=183)** You just have to comment out the print functions.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=185)** There we go. So let's go ahead and run this code.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=190)** And we can see that, sure enough, 31 is a prime number and 56 is not.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=196)** So the loop breaks when a number fails the prime test.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=200)** So if the loop completes, that means that no other factors have been discovered and we know the number is prime.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/for-else?u=76281980&t=206)** So the ability to attach an else clause to a Python loop, it's one of those features that doesn't necessarily get used all the time, but it does help you write more Python code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2)
> **CLI Commands:** python (4), find (2)
> **Code Identifiers:** is_prime (3), for_else (1)
> **Definitions:** is a  (3), means that (1)
> **File Paths:** for_else.py (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Itertools: count, cycle, accumulate
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=0)** - [Instructor] The Python Standard Library includes a very useful module named itertools that addresses a wide range of common iteration scenarios.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=8)** And we briefly touched on this in one of the previous videos.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=13)** For the rest of this chapter, we're going to be learning about the various functions and features of this module.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=18)** So I would suggest keeping this documentation link open in a tab so you have it handy to refer to, and you can try out some of your own experiments as we go along.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=28)** Let's go ahead and open up our itertools1 document.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=33)** So to use these functions, you just need to import the itertools module, which you can see I've done here.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=40)** So let's take a look at some of the more useful tools in this module.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=44)** I'll start by demonstrating what are called infinite iterators.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=47)** These are iterators that will generate values as long as you need them.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=52)** So the first one is called cycle, and it does what its name implies, it just cycles over a set of values.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=57)** So here I have a set of names, and I can build an iterator.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=62)** I'll call it cycler.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=64)** And in the itertools module, I'll call the cycle function and I'll pass it names.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=72)** And then I can just use the built-in next function to retrieve values from the cycle.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=78)** So let's just print out the next version that comes back from the cycler.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=82)** And let's do that say four times.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=86)** And when I run this, you can see in the output that each name is printed, and then the iterator just loops around back to the beginning.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=96)** So if you have a need to cycle over a set of predefined values, then the cycler's a really easy way to do this.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=103)** All right, let's keep on going.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=105)** Another infinite iterator is called count.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=108)** And again, it does what you'd expect.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=110)** So I'll create a counter, and in the itertools module, I will call the count function.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=117)** And I'm going to start my counter at 100.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=120)** And I can give it an optional step, I'll give it 10.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=123)** And then I'll just simply print out the result of calling next on my counter.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=129)** And once again, we'll call this three times.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=133)** And I'll comment out the previous example.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=138)** And so when I run this, we can see that I have a counter, and it's just incrementing the count by 10 each time.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=145)** It's a really simple way of creating a counter object without having to keep track of a separate global variable.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=152)** Both cycle and count are examples of iterators that will continue to return values as long as you access the iterator.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=160)** Another interesting iterator is the accumulate function, which will aggregate values together and keep a running total for you.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=169)** So let's take a look at that example.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=173)** And once again, I'll comment that out.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=175)** So here I have a sequence of values, and what I'm to do is create an accumulator.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=183)** And that's in my itertools module.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=186)** And I'll use the accumulate function to accumulate values.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=190)** Now, the default function of the accumulator is addition, and we'll see how this works in a second.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=195)** So what I'm going to do is accumulate those values and then print.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=200)** And what I'm going to do is convert this iterator into a list so we can see all the values as it goes along.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=207)** So let's go ahead and run that.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=210)** And so you can see that as the accumulator is running, it's just keeping a running total.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=215)** So it's adding each number in the list to the previous accumulated total.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=220)** So that's the default function is to accumulate by addition.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=224)** But we can define our own accumulator function.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=228)** So let's try an example where we specify say the max function.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=236)** And now what I'm going to do is run this again.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=241)** And in this case, you can see what's happening is, the accumulator is running through the list and it's keeping track of whatever the maximum value is.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=250)** So it reaches 50 and then the values drop back down to 40 and 30.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=254)** But you can see that the result in the accumulator stays at 50.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=258)** So it's going to just reach the maximum value and just keep on returning that until the iterator is exhausted.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=266)** So it just compares each number to whatever the current maximum is.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=270)** If the current number is larger, that becomes the new max.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=272)** So you can specify your own accumulation function to customize the behavior of how accumulate works.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=279)** So let's change it again, we're going to do something a little bit more complex.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=282)** We're going to calculate the balance of the first 12 payments of a loan using the accumulator function.
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=290)** So here you can see I have a group of payments I'm going to make.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=294)** And what I want to do is figure out, what are the first bunch of payments going to be for a $2,000 loan at 4%?
>
> **[5:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=302)** So let's define a function that calculates the new loan total based upon a payment.
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=309)** And what I'm going to do is create a lambda function.
>
> **[5:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=313)** And that function's going to take two arguments, a balance and a payment.
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=320)** And I'm going to round the balance times 1.04 'cause that's 4%.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=328)** And then I'll subtract off the payment.
>
> **[5:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=332)** Now I'll use the accumulate function to process the list of payments.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=338)** So I'll have a result called balances.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=341)** And in my itertools function, I'll call accumulate.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=344)** And the sequence is going to be the payments.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=348)** My accumulator function's going to be the update function we just wrote.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=354)** And the initial value of the accumulator is going to be $2,000.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=364)** And then I'll just simply print out the list of balances.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=369)** So let's go ahead and run this.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=371)** Oh, let me comment out the previous example.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=377)** All right, let's go ahead and run this.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=379)** And so we can see that the balance is steadily going down as we make each one of these payments over time.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=389)** And you can see that it's not perfectly subtracting off $100 here because we we're doing is we're taking the balance, we're applying the interest, and then we're subtracting off the payment.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-23931756/itertools-count-cycle-accumulate?u=76281980&t=399)** So this is a pretty interesting use of the accumulator function, and I'm sure that you can come up with many more.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (13), module (7), this. (3), this, (2)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is called (2), is a  (1)
> **Versions:** 1.04 (1)
> **Speakers:** - [instructor] (1)

#### Itertools: chain, chain.from_iterable, batched
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=0)** - [Instructor] All right, continuing our journey into the itertools module.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=4)** Sometimes you need a way to create new iterables from other iterables.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=8)** In this example, we're going to see how to combine multiple iterables into a single one.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=14)** So let's start with the chain function here in my itertools2.py file.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=20)** The chain function will take multiple iterables and chain them together to act as one.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=26)** So let's give that a try.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=29)** So I'm going to use my itertools module, I'm going to call the chain function, and I'll chain two strings together.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=38)** So this will combine these two, and I'm going to print out the list of the result.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=45)** And when I run this, you can see that these two iterables have been flattened into a single iterable.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=55)** So the chain function is useful because it lets us easily implement other types of functions.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=60)** So to give an example, I can implement a prepend function that adds an item to the beginning of another iterable.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=69)** So what I'll do is I'll define a prepend function, and that will take the value to prepend and an iterable to prepend it to.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=81)** And I'm going to return the result of itertools.chain.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=88)** And inside brackets, I'm going to pass the first value, because it has to be an iterable.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=94)** And then I'll pass the iterable to prepend.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=97)** And then let's just go ahead and exercise this and see it in action.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=106)** And we'll prepend the letter a to an iterable of bcde.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=113)** All right, let's go ahead and run that.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=117)** And sure enough, you can see that the letter a has been prepended to the bcde iterable.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=124)** A similar function to chain is chain.from_iterable.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=130)** You can think of this as an alternate version of the chain function.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=133)** Essentially what you do is you give it a single argument of multiple iterables and it's evaluated lazily.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=140)** In other words, the chaining only happens as you access the iterable and it needs to chain them together.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=147)** So here in this example, I have three sequences of different values.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=152)** So I've got some capital letters, some integers, and some punctuation marks.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=156)** And what I'm going to do is supply all three of these to the chain.from_iterable function as a single list.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=164)** So I'll have my result, and I'll call itertools.chain.from_iterable.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=172)** And then inside brackets, I'm going to pass in each of these sequences.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=179)** And then I'll print out the result and I'll combine it all into a list, which will exhaust all three of the iterators.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=188)** And let me just comment out my previous examples.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=193)** All right. Scroll that up a bit.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=196)** Let's run this.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/itertools-chain-chain-from-iterable-batched?u=76281980&t=197)** And you can see that when I run this, all three of the lists are flattened into a single list.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (6), pass (3), module (2), this, (2)
> **Code Identifiers:** from_iterable (3)
> **File Paths:** itertools2.py (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Itertools: dropwhile, takewhile, filterfalse
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=0)** - [Instructor] The inner tools module also contains functions that perform some types of basic data filtering.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=6)** So let's consider two similar functions called drop while and take while.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=11)** These iterators will provide values from an iterable source until a trigger value is reached, at which point they will stop.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=21)** So let me add the code for those.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=25)** What I'm going to do is print out the result of calling the list function, 'cause I want to get all the values.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=32)** So I'm going to use itertools, and I'm going to call the drop while function.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=38)** And I have to give it a predicate function that is evaluated to see whether the value should be dropped or not.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=47)** And I'm going to call that test function, and I'll write that in a moment.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=51)** And then I'm going to pass in this sequence of values right here.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=56)** So I'll do that for drop while, and then I'll do the same thing for take while.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=62)** So I'll just copy and paste this, and I'll name this one take while.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=69)** So both of these functions use a predicate function to perform the value test.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=74)** So drop while will drop values from the given sequence while the predicate function returns true.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=82)** And then it will return every value in the sequence afterwards.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=85)** And take while is the opposite.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=87)** It will return values while the predicate function returns true, and then it will stop.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=93)** So I'm going to define my test function, and it will take a single value.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=102)** And then for this particular example, I'm going to return whether X is less than 40.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=108)** And you can see that we have a sequence of values up here, and 40 appears a few times.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=115)** So using this function, drop while will drop the first few values since they're less than 40, and then it will return the remainder.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=125)** Take while will return the first few values until the 40 is reached, at which point it should stop.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=132)** So let's go ahead and run this code, and you can see that that's exactly what happens.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=138)** So drop while dropped the first 10, 20, and 30 until the 40 was reached, at which point, the rest of the values are returned, even though some of them are less than 40, and that's because the predicate function just serves as the trigger point.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=152)** In the take while case, we can see that 10, 20 and 30 were returned until the 40 was encountered, at which point the iterator stops.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=162)** Alright, let's keep on going, and let's comment out our previous example.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=169)** Another useful filtering function is the filter false function.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=173)** This function returns values only when the given predicate function returns a false value.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=180)** So let's execute this iterator on the same list of values.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=184)** Now in this case, I'm going to use an inline lambda function to determine if a value is an even number, and return true if it is.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=192)** So since filter false only returns values when the predicate is false, this effectively filters out even numbers, and only returns the odd ones.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=201)** So I'll have my result, and I'm going to create a list.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=206)** I'm going to call the itertools dot filter false function.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=211)** So my predicate will be a lambda that takes a single value, and it's going to return the result of X percent two, is equal to zero.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=221)** So if it's an even number, it returns true.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=224)** And then we're going to operate on the vals sequence, and then we'll just simply print the result.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=232)** So let's go ahead and run that.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=237)** And you can see that only the odd numbers in the list are returned.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=242)** So if I change this to be a not equal to zero function, and run it, now we can see that all the even numbers are returned.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=254)** So because each of these functions uses a predicate to determine the output, you can easily define your own functions to work on complex objects.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=263)** Now, in each of these examples, I'm working on a list of integer numbers, but you could write logic that operates on custom classes, and performs the same type of operations.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=276)** So if we scroll down, you can see that I have a data class here that represents some information about World Cup Games.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=285)** And what I want to do is filter out the ones where attendance was less than 80,000 people.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=292)** So let's go ahead and write the code to do that.
>
> **[4:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=295)** I'm going to have my result, and I'm going to create a list, and I'm going to use itertools, and I'm going to use my filter false function.
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=304)** I'll give it an inline lambda, and the Lambda function will return whether X dot attendance is less than 80,000, and we're going to pass in the World Cup data.
>
> **[5:21](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=321)** So you can see that some of these have more than 80,000 attendance, and some have less.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=326)** So we should just get two games in our result.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=330)** And I'm going to use the pretty print module that we learned about earlier to print out the result.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=338)** All right, and let's comment out the previous example there.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=344)** Okay, so let's go ahead and run this.
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-23931756/itertools-dropwhile-takewhile-filterfalse?u=76281980&t=347)** And when we run this, we can see that the games that have the less than 80,000 attendance have been filtered out, so we only have the final and semi final where we have the different attendance values for those two games.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (10), lambda (4), while. (3), module (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Itertools: combinations and permutations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=0)** - [Instructor] One of the more interesting features of the iter tools module is that it can help us calculate combinations and permutations of sets of elements.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=9)** And this is useful in a variety of scenarios.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=12)** So let's start by taking a look at the product function, which gives us the Cartesian product of the input lists to the function.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=22)** So the result is the set of all possible ordered combinations consisting of one member from each of those sets.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=30)** And to make this example relatable, I'm going to create a deck of cards by using two sets.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=36)** So in this case, I'm going to have two strings of unique characters.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=40)** So the first string represents the card values, starting at the Ace and going all the way up through the King.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=46)** And then I have the suits, spades, clubs, hearts, and diamonds.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=49)** So to create the deck of cards, I just need to create the product of these two strings.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=55)** So I'll have my deck, and I'm going to create a list, and I'm going to call the iter tools product function.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=65)** And I'm going to pass in the cards and the suits, and that's all you need to do.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=69)** So let's print out the length of the deck, just to make sure that we have the right number of cards.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=75)** And that should be 52, right?
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=77)** So then I'll print out the deck.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=82)** All right, let's go ahead and try to run that.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=87)** And sure enough, yep, we have 52 cards, which is right.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=90)** And we have the Ace of Spades, the Ace of Clubs, the Ace of Hearts, and so on and so forth.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=95)** All the way up through the King of Spades, King of Clubs, King of Hearts, and King of Diamonds.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=100)** So we can see that it was a pretty clean way of creating this set, rather than by using nested for loops, which we could have done, but that's not nearly as nice to read as just this one line of code right here.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=114)** Okay, let's comment those two out.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=118)** Next, let's take a look at how to create permutations of elements.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=122)** Permutations represent the different ways that a given number of elements can be combined from a starting set.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=129)** So let's imagine that we had four sports teams, A, B, C, and D, and each team plays each other team twice, once at home, and once at away.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=138)** So we can use the permutations function to calculate the list of games that each team would have to play.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=145)** So in my result, I'm going to call the iter tools function, and I'm going to create a permutation, and I'm going to use the teams list.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=156)** And I want each of the permutations to have two elements.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=160)** There's going to be two teams playing each other, and then we'll just print out, we're going to convert the result to a list.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=167)** 'Cause remember, it's an iterator, so we have to convert it to a list.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=171)** And when we run this, we can see that each team plays the other two times.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=177)** So we have A playing B, A playing C, A playing D, right?
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=182)** And then we have B playing A, B playing C, B playing D, and so on.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=186)** Notice how B never plays B, 'cause that wouldn't make any sense.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=190)** So now we have these permutations of each of the teams playing each other.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=196)** All right, now let's look at combinations.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=197)** Combinations are a little bit different.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=199)** They're like permutations, except that they don't allow repeated results.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=203)** So let's go back to the code and we'll comment that out.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=209)** Alright, so what we're going to do is we're going to use the same set of the teams, and we're going to write itertools.combinations.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=219)** Actually, you know what? I'm not going to use the same set.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=221)** I'm just going to pass it a string just to make things simple.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=224)** And in this case, I want combinations of size three.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=229)** So let's print out a list of the result.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=235)** All right, so when I run this, you can see that there are fewer outputs than in the permutations case because there is no combination, for example, that contains C, B, and A.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=247)** So I've got A, B, and C, A, B, D, A, C, D, and then B, C, D.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=252)** There is no C, B, A, because that combination is already represented by A, B, and C.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=258)** So when using combinations, the order doesn't matter.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=262)** So having A, B, C, and C, B, A would be considered the same, so it only appears once.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=269)** And also note that each element only appears once.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=272)** There's another version of the combinations function called combinations with repeats that does allow elements to appear more than one time, but it still excludes results that are the same as other combinations.
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=286)** So let's try that one out.
>
> **[4:55](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=295)** So we'll call combinations with replacement, and we'll use the same string, same size, and then we'll just print out a list of the result.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=307)** So now when I run this example, I'm going to leave this one in just for comparison's sake.
>
> **[5:13](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=313)** So you can see this is the result of the first example and there's no duplicates.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=317)** But here we have repeating elements.
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=320)** So now we have a combination that includes A, A, A, right, and then A, A, B.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=326)** But notice how there's no B, A, A, because again, that would just be a duplicate of this existing, unordered tubal.
>
> **[5:33](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=333)** So the possibilities using permutations and combinations are endless.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=338)** You can use permutations and combinations for all kinds of practical use cases.
>
> **[5:43](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=343)** You can use permutations functions for cryptography or in game development.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=348)** The combinations function can be used to calculate probabilities in data science.
>
> **[5:52](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=352)** For example, the likelihood that a particular combination of elements might be drawn from a list.
>
> **[5:59](https://www.linkedin.com/learning/advanced-python-23931756/itertools-combinations-and-permutations?u=76281980&t=359)** Like I said, the possibilities are endless, and the iter tools module makes this much easier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (7), module (2), case, (2), pass (2)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Using Iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=0)** - [Instructor] Alright, so to find the largest number in multiple lists of numbers, we need to do two things.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=6)** First, we need to be able to search all of the lists.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=9)** There are a few different ways you could solve this problem, but for my solution, I chose to use the chain.from_Iterable function, which is in the ITER tools module.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=21)** That function will take the list of lists that we are given and iterate over all of the values, iterating over each list, after it exhausts the previous list, then all you need to do is wrap that function call with a call to the built-in max function, which will find the largest number.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=41)** So let's go ahead and run that, and you can see that my code has found the largest number, which is 92, which is somewhere in here.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=52)** I'm not sure exactly where it other is. It's right there.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=54)** Let's try changing another number to make it the largest number.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=57)** So let's make this 125 and then let's run the code again.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=62)** And now you can see that we're returning 125 as the largest number.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=66)** Alright, so that's what my solution looks like.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-23931756/solution-using-iterators?u=76281980&t=68)** How does it compare to yours?

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (4), module (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** iter (1)
> **Speakers:** - [instructor] (1)


### 4. 3. String Processing

#### Built-in string constants
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=0)** - [Instructor] String processing is one of the more common tasks that today's programmers have to deal with.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=6)** Because of this, Python provides some great built-in features for working with strings, which we are going to learn about in more depth in this chapter.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=15)** So we're going to start off by looking at some of the features provided by the string module, which you can find at this link in the Python documentation.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=23)** And I suggest keeping this tab open as we go through the exercise.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=26)** Specifically, we're going to look at the predefined string constants in this module.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=32)** And you can see that there are constants for the ASCII alphabet and upper and lowercase characters, different sets of digits, along with punctuation, and printable and whitespace characters.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=46)** And you could use these string constants in a variety of ways in your Python programs.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=51)** So let's open up the code for the example and take a look.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=56)** So here in my builtin_constants.py file, I've imported the string module and I've got some code that prints most of the predefined constants.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=66)** I think I skipped over the printable and the whitespace.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=69)** So let's just go ahead and run the code in its current form.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=75)** And you can see the different sets of characters here when I run the code.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=80)** So let's try out different ways to use these constants.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=85)** Let's go ahead and comment this out, we won't be needing it again.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=91)** So I have a string value here.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=93)** Let's suppose we wanted to see if the string contains any punctuation characters.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=98)** We can do that by using the built-in any() function along with an iterator that processes each character.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=106)** So if any c in string.punctuation for c in testStr.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=120)** So if the any() function returns True, which it will the moment it encounters its first punctuation letter, then we're going to print "The string contains punctuation".
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=135)** Otherwise, we're going to print "No punctuation found".
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=143)** So this code iterates over each character in the string and checks to see if the character is in the punctuation constant.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=149)** If the result is true, then this any() function will immediately stop since it only has to find one true value, and it will print out that the string contains punctuation.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=159)** So let's run this, and we can see that the result is that the string does contain punctuation because of this period.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=166)** If I take that out, then we can see that no punctuation was found.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=173)** All right, let's go ahead and put that back.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=175)** So you can use multiple string constants together if you need to.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=180)** And a good example of this would be to generate a random password.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=183)** So let's write some code that uses a combination of ASCII letters, digits, and punctuation to create a random password.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=193)** So what I'm going to do is declare a variable called alphabet, and that's going to be a concatenation of string.ascii_letters and string_digits, and string_punctuation.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=211)** So to create the password, I'm going to import the secrets module, which gives me cryptographically strong functions for generating random numbers.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=224)** And what I'm going to do is create the password using the choice() function.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=229)** So the password is going to be, I'm going to start with an empty string, and I'm going to join the results.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=236)** So I'm going to call, in the secrets module, I'm going to use the choice() function, which just chooses a random element from a sequence, which in this case will be the alphabet.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=247)** So I'm just going to choose a random character each time, and I'm going to do that for a range of 10.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=255)** So I'm going to choose 10 random characters, and then I'll just print the password.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=262)** So let's go ahead and run that.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=265)** And you can see that when I run this, right, oh, let's go ahead and comment on this previous example, we don't need to see that anymore, here we go.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=274)** So let's go ahead and run.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=275)** And you can see that each time I'm running, we're getting these different combinations of 10 random characters.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=282)** So we're generating these random passwords by combining characters from these three different sets.
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=290)** So now let's go the other way.
>
> **[4:51](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=291)** Let's use the string constants to check the strength of a password.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=297)** So what I'm going to do, first let's comment that out, I'm going to fill out my check_password_strength function with some logic to see how strong a given password is.
>
> **[5:08](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=308)** So for this example, to keep things simple, we'll just assume that a password that has more than or equal to 10 letters, and has at least one character each of punctuation digits, and lower and uppercase letters is strong.
>
> **[5:25](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=325)** So my code is going to check to see if the length of testPass parameter is greater than or equal to 10, and if any character in string.punctuation for each character in testPass, and I'll just copy and paste that line down.
>
> **[5:59](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=359)** So we're also going to check to see, let's see, digits, and we'll copy that, and we'll check ascii_letters.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=371)** Oops, no string., ascii_letters, there we go.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=377)** All right, so that should give us, yes, one each of punctuation, digits, and ascii_letters, and we've got the length is greater than or equal to 10.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=389)** So if that's the case, then we can return that the testPass is a strong password. (keyboard keys clicking) Otherwise, we're going to return that testPass is a weak password.
>
> **[6:54](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=414)** All right, so I have a few lines of code here to check out different passwords.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=420)** So this one is clearly longer than 10, so that should be strong.
>
> **[7:05](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=425)** This one is weak because it's less than 10 characters, and it has only ASCII letters in it.
>
> **[7:11](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=431)** Actually, let's make it more than 10 just to make sure.
>
> **[7:14](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=434)** So we'll call that "passwordLer".
>
> **[7:16](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=436)** And then the last one has one of each, but it's less than 10 characters.
>
> **[7:21](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=441)** Okay, so we should get True, False, and False.
>
> **[7:24](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=444)** So let's run this.
>
> **[7:28](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=448)** And sure enough, we're getting strong, weak, and weak.
>
> **[7:31](https://www.linkedin.com/learning/advanced-python-23931756/built-in-string-constants?u=76281980&t=451)** All right, so I've just shown a few examples here, but the predefined string contents are one of the nice features of Python that make working with strings easier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (6), module (5), this, (3), case, (1)
> **Code Identifiers:** ascii_letters (4), testpass (4), builtin_constants (1), teststr (1), string_digits (1)
> **CLI Commands:** python (4), make (3), find (2)
> **Env Vars:** ascii (3)
> **Definitions:** is a  (2)
> **File Paths:** builtin_constants.py (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard keys clicking) (1)

#### String searching
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=0)** - [Instructor] In this example, we're going to examine a variety of ways to search strings for specific content.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=6)** And as you might imagine, this is also a fairly common operation in many Python programs.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=12)** So let's open up the string_search example.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=16)** And here in my sample code, I have a variable with some string content in it, and we're going to use this to exercise some of the string searching functions.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=24)** So let's start with the find() function, which will find the index of the first occurrence of a substring.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=31)** So let's go ahead and print out the result, and we're going to search for the first occurrence of the word the, and use sample_text, and we're going to call the find() function on it.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=45)** And we're going to look for the word the.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=48)** Now, it's important to note that this function is case sensitive.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=52)** So when we run this, you can see that the first occurrence of the is at 31.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=59)** It's not right here at 0, because that's a capital T.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=62)** If we want to run a case insensitive search, we can convert the string to upper or lowercase using a temporary variable, for example.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=72)** So I can create a temporary string, and that's going to be sample_text.lower().
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=79)** And if we run this again.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=82)** Oh, whoops, I'm looking in the wrong place.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=86)** Let's look in the temp string.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=89)** Okay, now you can see that the first occurrence of the is at index 0.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=93)** The find() function also takes optional parameters so that you can use those to constrain the boundary of the search.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=102)** So I can specify, for example, that I want to search beginning at index 5 and ending at index, say, 36.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=111)** And when I run, you can see that now we're back to finding the at 31.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=119)** Another way of searching a string is to use the index() function, which works similar to find(), but it will raise a ValueError exception if the string isn't found.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=131)** Now, we're going to cover exceptions later in the course, but let's try this out.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=135)** So what we're going to do is, I'm just going to copy this, and let's search for the word fox.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=150)** And we're going to use index.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=155)** And we can see, that when we run, that the first occurrence of fox is found at 16.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=164)** But now let's search for the first instance of fax.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=170)** And you can see that when I run this code, it's causing an exception.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=174)** We can see the ValueError right here, because the string wasn't found.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=178)** Now, as I said, we'll learn more about exceptions later in the course, but I'll give you a quick peek at them.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=184)** We just need to surround this code with a try section and an except section to catch the exceptions.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=192)** So it's going to look something like this.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=195)** I'm going to write try, and then except ValueError: and we'll just print("Not found").
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=207)** So this is a sneak peek of what's coming up in the exceptions chapter, but you can see that when I run this, now you can see that I'm just getting this nicer error message because I'm catching the exception when it happens.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=218)** Let's keep on going.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=221)** So, the find() and the index() functions can be used to locate a substring within another string, and it'll tell you the index at which it was found.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=233)** But if all you want to know is whether or not a substring exists within a string, you should use the in operator.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=240)** Let's go ahead and comment out our previous examples.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=246)** So if I just wanted to see, for example, if the word fox is present, I would just write out, so, "Is 'fox' present:" And then what I would write is the string in sample_text.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=266)** So let's go ahead and try that, and you can see that the result is true.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=272)** So this is considered a more Pythonic way of just checking for the presence of a substring rather than by checking the index result of the find() function, right?
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=281)** Let's keep on going.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=283)** I'll comment that one out.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=285)** You can also search for substrings starting at the other end of the string.
>
> **[4:48](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=288)** So the rfind() and rindex() functions are used for this.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=292)** And as you might expect, they're just the reverse versions of what find() and index() are.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=297)** So let's try that out.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=300)** Let's print out the last occurrence of a.
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=309)** And we'll check in sample_text, and we'll call rfind().
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=314)** And we'll look for the- oh, wait, no, I didn't want to do a.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=317)** I want to do the.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=318)** There we go, the.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=319)** So the last occurrence of the, and we'll do a reverse find there, and then we'll do the same thing using reverse index, only in this case, we'll just look for the word jump.
>
> **[5:33](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=333)** And of course, we're using rindex in this case.
>
> **[5:37](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=337)** All right, let's go ahead and run those.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=341)** And you can see the respective results there.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=344)** And sometimes the reason why you're looking for a substring is because you want to replace it with another string, and we can use the replace() function to perform that kind of operation.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=354)** So let's comment these out.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=357)** Now, one of the things to keep in mind is that, in Python, strings are immutable.
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=362)** And what that means is you can't change a string in place once it's been created.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=366)** What you need to do is create a new string.
>
> **[6:10](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=370)** And if I scroll back up here, you'll see, for example, when I converted sample_text to lowercase, it didn't operate directly on the sample_text itself.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=378)** I had to return a new string to hold the result.
>
> **[6:22](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=382)** And that's because I can't change the existing string in place.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=385)** So replace() works the same way.
>
> **[6:28](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=388)** What I'm going to do is create a result, and then on the sample_text string, I'm going to call replace(), and I'm going to replace lazy with tired.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=399)** And then we'll print the result.
>
> **[6:42](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=402)** And you'll see this throughout Python, that you are not changing existing strings in place, you're simply creating new ones.
>
> **[6:48](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=408)** And this actually is an important point.
>
> **[6:51](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=411)** If you're creating lots of new strings in tight loops, for example, you got to be careful, because that can really affect memory and performance.
>
> **[6:58](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=418)** And I won't get too deeply into that here.
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=419)** It's just simply something you want to be aware of, that strings are immutable, and so you're creating new ones when you use these kinds of functions.
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=427)** And so we should see, when we run our code, that lazy is being replaced by tired.
>
> **[7:12](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=432)** So let's go ahead and run that.
>
> **[7:17](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=437)** And sure enough, we can see that lazy is replaced by tired, and this will work on multiple instances of the search string.
>
> **[7:24](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=444)** So let's try replacing the lowercase the in the all lowercase temp string that we created with all caps versions.
>
> **[7:33](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=453)** So let's just write another result, and this time we'll use the tempstr, and we'll replace the with THE, all caps, and then we'll print the result.
>
> **[7:48](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=468)** All right, so let's run that.
>
> **[7:50](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=470)** And now you can see that both instances of the have been replaced and they're uppercase.
>
> **[7:56](https://www.linkedin.com/learning/advanced-python-23931756/string-searching?u=76281980&t=476)** All right, so I suggest taking a few moments here and trying out some of your own inputs and experiments on these functions to get a better feel for how they work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (7), this, (3), this. (2), raise (1)
> **CLI Commands:** find (9), python (3)
> **Code Identifiers:** sample_text (7), string_search (1)
> **Analogies:** for example (5), imagine (1), similar to (1)
> **Cross-References:** later in (2), coming up (1)
> **Warnings:** keep in mind (1), be careful (1), be aware (1)
> **Definitions:** is a  (1), is an  (1)
> **Exercise Files:** sample code (1)

#### String manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=0)** - [Instructor] Other programming languages make developers do a lot of the heavy lifting when it comes to manipulating string content, but Python provides a lot of great built-in features for this.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=10)** In this example, we'll see how to perform some common string manipulation operations.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=15)** So here in my test code, I have defined a test string that we can use to operate on, and feel free to make your own variations of it if you want to try out your own experiments.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=25)** So first, we could easily convert a string to upper or lowercase, or what's called title case, where each word is capitalized, by using the corresponding Python function.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=38)** So let's try out some of these.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=39)** So first, let's try out upper, and also we'll try out lower, and let's try out title as well.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=51)** Alright, so let's go ahead and run this.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=55)** And here in the terminal, you can see the results.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=59)** So here's the result of upper, where all the characters are uppercase.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=63)** This is the result of lower, and then title case is where each word gets capitalized.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=69)** So one of the important things you need to keep in mind here is that each of these operations creates a new string.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=75)** It does not modify the existing string in place, and this is because Python strings are immutable.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=82)** That basically means that they can't be changed in place once they're created.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=87)** This can have performance implications if you're working with a very large amount of string data.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=91)** So you need to remember this.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=93)** Okay, let's keep on moving.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=96)** Let's comment these out.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=99)** A common string operation involves removing extraneous white space from the start and end of strings, and we can use the strip and the lstrip and rstrip functions for this.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=111)** So I have another test string here, which has some white space on both ends, so let's try out the strip function, and we'll also try lstrip and we'll try rstrip.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=126)** And each of these functions basically does what you'd expect.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=129)** So let's run this, and we can see that the strip function removes white space at both ends while the lstrip and rstrip variations work on the left and right sides.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=142)** Alright.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=143)** Okay, let's comment these out and keep on going.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=147)** The split function is used to take a single string and break it into multiple strings, and it works by specifying a break character, which defaults to a single space.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=160)** So I'm going to define a variable named words, and then I'm going to take our original test string and call split on it, and I'll do it first with no argument.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=170)** That will just be a space.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=173)** And if I print out the words and I run this, we can see that the original sentence right here, this original string has now been broken into individual words, including the punctuation.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=188)** So we would need to do some additional cleanup if we wanted to handle that case.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=193)** So let's go back and specify a different break string.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=197)** In this case, I'm going to specify a comma as the break point.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=205)** So let's go ahead and run it again, and now you can see that there are two strings.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=211)** There's the part before the comma and the part that comes after the comma, and notice that the comma is not included.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=218)** So the break character actually gets stripped out, and you can see that in the previous example as well.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=223)** Like all the spaces got stripped out.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=226)** The punctuation is still there, but the space character that was the break character, that's no longer there, and the same is the case here when I specified the comma.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=235)** The join function is essentially the opposite of the split function.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=241)** It takes a sequence of strings and joins them together using a string as the separator value.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=248)** So let's go ahead and specify a separator, and I'll just have that be a space to begin with, and then I'll use the join function to join this sequence of strings right here.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=260)** So I'll make that a sentence, and then I'll call separator.join, and I'll join the words, and then we'll print out the sentence.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=271)** So let's go ahead and run that, and we can see now that the individual strings have been combined into a single string.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=281)** But remember, I can make the separator any arbitrary string.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=284)** So let's try making it two dashes and then let's run again, and now you can see that each word in the finished sentence is now being separated by the two dashes.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=294)** There are plenty of great string manipulation features in Python.
>
> **[4:58](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=298)** I've only touched on a few here.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-23931756/string-manipulation?u=76281980&t=300)** So before moving on, I would suggest taking a look at the string documentation at this link, and maybe trying out some of the other functions that we didn't get a chance to cover.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (7), this. (4), case, (2), this, (2)
> **CLI Commands:** make (4), python (4)
> **Tools:** terminal (1)
> **Definitions:** basically means (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### String formatting
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=0)** - [Instructor] Python provides a high degree of control over string formatting.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=4)** And there's a few different ways to accomplish this.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=6)** So the functions I'm going to be covering are here in the documentation at these links.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=11)** The first link is to the Python built-in types.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=14)** And if we scroll down a little bit over here in the nav bar and we click on the String Methods link here, you can see that there's quite a few built-in, string-related functions.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=25)** And the second link is to the string module, which contains information about the string formatting specification, which is right here, which we'll get to a bit later.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=37)** And we saw this module a little bit earlier in a previous video.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=41)** So I suggest keeping each of these open as we go through the example, and you can refer to them if you feel like trying some of your own code and experiments out.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=50)** So first, let's take a look at some of the basic string formatting functions.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=56)** So here in my example code, let's take a look at some simple examples first.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=61)** So you could easily format strings as centered, or left justified, or right justified, by using the center, ljust and rjust functions.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=71)** Each of these functions takes a width and a fill character, which defaults to a space.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=77)** So I'm going to specify a width, and I'll use 40.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=81)** And then I'll print, and I'll just supply a sample string.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=85)** And then I'll use the center function and I'll use the width.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=91)** And I'll specify a fill character that we can see.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=94)** So I'll use a dash for that one.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=97)** And then for left, I'll use ljust, and I'll use a period there.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=106)** And then for right, I'll use rjust, and I'll keep it as a period, right?
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=115)** So if we run this, we can see in the results here that the center string is centered, left is left justified and right is right justified.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=126)** You can see that the width is 40 characters.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=129)** And Python took care of the calculations of how long the string was and where to center it, or left, or right justify it in each one.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=136)** And it's basically what you'd expect from each function.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=138)** And these work pretty well if your main concern is aligning text in a certain way.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=143)** But Python can do much better than this, especially when it comes to formatting numerical data in strings.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=149)** So let's go back and let's comment out these examples.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=154)** Let's give ourselves a little bit more room here.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=157)** So let's collapse that down.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=159)** All right, so let's take a look at some of the different ways we can format values.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=164)** And you can see I've defined four numbers here.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=167)** So let's uncomment these first four lines, which are basically just Python f-strings printing out the value of each number.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=177)** So if I run that, you can see that here are the numbers' output, which is pretty much exactly what you'd expect to see.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=184)** But I can exercise a lot of control over this using the Python string formatting mini specification, which I've included in this comment right here.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=194)** And I know it looks a little complex, but just hang on a second.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=197)** And if we quickly jump back to the documentation in the string module, you can see that this is what the format specification mini-language is.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=206)** And this is a more complete explanation of it.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=209)** So you can see that there are tables that explain what each character means and how it works.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=214)** And I'll let you refer to this on your own time.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=217)** For the rest of the example, I'll just go through my example code, and then you have an opportunity to try out your own experiments.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=225)** Now, this may look pretty complex at first, but after a bit of practice, it will become more clear.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=232)** And most of these are all optional.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=235)** So you can use as many or as few of these as you want.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=239)** So let's take a look, for example, at how we can specify something as simple as the level of decimal precision.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=245)** So I'm going to comment, well, I'll copy these lines, and then I'll just comment these out.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=252)** So the way that you specify formatting information in an f-string like this where we have the variable interpolation is to put in a colon character.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=262)** And then after the colon character is where the formatting specification comes in.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=267)** So you can see, for example, if I scroll back up, there's a period and a precision.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=272)** So I'll put that in.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=274)** So for each one of these, I'll put in .2, so for two decimal places.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=279)** And then I can specify an optional type.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=281)** And I'll use f for a floating point number, right?
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=285)** So I'll just copy and paste these for each one of these numbers, all right?
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=290)** And let's go ahead and let's run that.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=294)** And now you can see that each of the numbers has two decimal places, even for ones where I only specified one decimal place, or this one has four.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=305)** I can also change the type.
>
> **[5:06](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=306)** So for example, I'm using floating point numbers, but I can change that to something else, for example, to be scientific notation, I can specify an e for that.
>
> **[5:16](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=316)** So now when I run, you can see that the notation has changed.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=319)** So it's the same number, but now it's using scientific notation.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=323)** But there's a lot more that I can do.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=324)** I can specify things like alignment and padding, along with leading zeros if I want to.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=330)** So let's try right-aligning these numbers.
>
> **[5:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=334)** So I'll copy this, paste it down here.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=338)** And let's comment these guys out.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=341)** And let's put all these back to floating point.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=345)** So what I'm going to do is, again, after the colon, but before the period, I'm going to put in my alignment.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=351)** And I have an option, I can do left aligned, which is left bracket, or left angle bracket, right angle bracket is right aligned, and the up arrow is centered.
>
> **[6:01](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=361)** So let's try right aligning each of these.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=365)** And I'm going to put in a width of 10 spaces for each of these.
>
> **[6:10](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=370)** So I'll do that for there, there and there and there.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=374)** All right, and I'll leave them as floating point numbers.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=377)** And when I run this, you can see that now the numbers are right aligned within a space of 10 spaces.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=385)** Just for variety, let's go ahead and try the up arrow character for each one.
>
> **[6:31](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=391)** And you can see that when I run this, right now, they're centered.
>
> **[6:35](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=395)** Okay, so we went from right aligned to having centered.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=397)** So let's go ahead and change that back to right alignment.
>
> **[6:41](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=401)** And I can add leading zeros if I want to by putting a zero in front of the width of the spacing.
>
> **[6:49](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=409)** So I'm going to add a zero here to each one of these.
>
> **[6:53](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=413)** And when I run again, okay, now you can see that it's using all the digit places and you can see that it's adding leading zeros in front of each one.
>
> **[7:05](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=425)** I can also control the appearance of positive and negative signs, along with how the numbers are grouped.
>
> **[7:11](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=431)** So let's try that.
>
> **[7:14](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=434)** Let's copy.
>
> **[7:16](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=436)** I'll comment those guys out.
>
> **[7:18](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=438)** Okay, so what I'm going to do is put a plus sign in front of each number, and I'll replace the leading zeros because I find those annoying.
>
> **[7:30](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=450)** Now, I have an option, I can either use a plus sign.
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=452)** If I use a plus sign, that means that there will always be a plus or a minus sign added before all the numbers.
>
> **[7:39](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=459)** So if I run this, you can see that all the numbers have positive or negative signs.
>
> **[7:43](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=463)** If I use a minus sign in front of each one, then only the negative numbers will have a sign.
>
> **[7:53](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=473)** You can see that that's the case there if I run it again, all right?
>
> **[7:57](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=477)** And I can specify groupings, I can specify a grouping character, like a comma or an underscore.
>
> **[8:03](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=483)** And I put that before the period.
>
> **[8:13](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=493)** So in this case, now when I run, now you can see that here there's no grouping character, but here the thousands are separated by the comma character.
>
> **[8:25](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=505)** I can also specify a fill character.
>
> **[8:28](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=508)** So let's try that out.
>
> **[8:32](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=512)** So we'll copy that and comment then.
>
> **[8:35](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=515)** So if I want to put in a fill character that's not a leading zero, that goes before the alignment character.
>
> **[8:42](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=522)** So let's try putting in an underscore before each one.
>
> **[8:50](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=530)** All right, and let's run.
>
> **[8:52](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=532)** Okay, now you can see that there's a fill of an underscore being added to each one.
>
> **[8:57](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=537)** Now, of course, I've only demonstrated a subset of what you can do with formatting here.
>
> **[9:00](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=540)** So I would really suggest checking out the documentation and trying out some of your own formatting experiments.
>
> **[9:07](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=547)** I do want to show one more thing.
>
> **[9:09](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=549)** You might be wondering if you can dynamically specify the formatting using an interpolated f-string.
>
> **[9:16](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=556)** And the answer is, yes, you can actually do that.
>
> **[9:18](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=558)** So let's go ahead and show how to do that.
>
> **[9:20](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=560)** What I'm going to do is comment these out.
>
> **[9:22](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=562)** So here I have a dynamically specified width and precision.
>
> **[9:26](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=566)** So I'm going to create a string called the format_spec, and that's going to be an interpolated string.
>
> **[9:33](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=573)** And so let's give it a number.
>
> **[9:34](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=574)** So I'll give it one, two, three, four, five, six.
>
> **[9:37](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=577)** And I'm going to specify the colon.
>
> **[9:40](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=580)** And then I'll use the width variable that I've got there, followed by a period, followed by the precision.
>
> **[9:48](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=588)** And then, of course, I have to give it a type, so I'll just use f for floating point.
>
> **[9:52](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=592)** And then we'll print out the format spec.
>
> **[9:58](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=598)** All right, so let's try that.
>
> **[10:01](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=601)** And sure enough, you can see that it works.
>
> **[10:03](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=603)** So I've got a width of 10, it's got two decimal precision places, so it seems to have worked.
>
> **[10:10](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=610)** Now, this was for a hard-coded number.
>
> **[10:13](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=613)** Part of the problem is, you can't have double braces in the string in f-strings because, so for example, if I try to put val2 in here, that's not going to work because this is how you escape curly braces in the string.
>
> **[10:28](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=628)** So if I try to run this, you can see that that's an error, right?
>
> **[10:31](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=631)** That's not going to work.
>
> **[10:32](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=632)** To get around that problem, what you need to do is use the format function.
>
> **[10:36](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=636)** So let's go ahead and undo that.
>
> **[10:39](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=639)** And what I'm going to do is copy this string.
>
> **[10:47](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=647)** And in this case, what I'm going to do is just put in a placeholder called val.
>
> **[10:54](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=654)** And I'm not going to make it an f-string.
>
> **[10:57](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=657)** What I'm going to do is call format, and then I'll just pass in the variables.
>
> **[11:02](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=662)** So val is going to be, let's use the val2 variable I've got earlier.
>
> **[11:08](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=668)** And then, once again, we'll pass in a width of 10 and a precision of two.
>
> **[11:15](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=675)** And then we'll print out the result.
>
> **[11:17](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=677)** And let's go ahead and comment out these previous ones, and let's run.
>
> **[11:23](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=683)** And now you can see that it works.
>
> **[11:25](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=685)** So I've dynamically created a format string along with my value variable.
>
> **[11:30](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=690)** So we've covered quite a bit of formatting in this video, but again, I would suggest taking some time here to try out your own experiments to get a better feel for how this works.
>
> **[11:39](https://www.linkedin.com/learning/advanced-python-23931756/string-formatting?u=76281980&t=699)** It's a very flexible specification, and you can achieve some good formatting results with some practice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (30), this, (7), module (3), function (3), type. (2)
> **Documentation:** specification (5), the documentation (3), spec (1)
> **CLI Commands:** python (6), find (1), make (1)
> **Analogies:** for example (5)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** format_spec (1)
> **Cross-References:** previous video (1)

#### Solution: String processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=0)** - [Instructor] Let's take a look at my solution for this challenge.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=2)** So our code needed to process a string and look for a given search term and return a dictionary containing information about the string.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=12)** So my code starts off by importing the string module, and then I define a result dictionary, and I initialize the values to 0 for the counts, false for the found property, and -1 for the index of the search term.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=32)** Then I iterate over each character in the string.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=36)** And for this part, I use the built-in string constants to record information about each of the character types.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=44)** So each time I come across punctuation, I increase the count, whitespace and so on.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=50)** For the search term, we needed to find whether the term appeared in the string regardless of case.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=57)** So to do this, I convert both the source string and the search term to uppercase, and then use the find() function to locate the term in the string.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=69)** If the result of find is not -1, then the term was found.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=75)** Otherwise, I leave those two values as false and -1.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=80)** So let's go ahead and test my code.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=82)** So we are searching for the term fox, and you can see it's an uppercase F and here it appears in lowercase.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=90)** So let's go ahead and test my code, and sure enough you can see that we get the right answer.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=95)** So there's five punctuation characters, 11 whitespace, 5 uppercase, 45 lowercase.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=103)** Fox was found, and it's at index 18.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=107)** Let's try looking for fax.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=112)** And we can see that sure enough we got the right answer again.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=116)** It's the same number of characters and so on, but this time we can see that found was false.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=122)** All right, let's try taking out one of the quotes.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=126)** So now punctuation should be less.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=129)** Sure enough, punctuation is now 4.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=132)** All right, so that's the code for my solution.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-23931756/solution-string-processing?u=76281980&t=134)** Take a few moments to compare it to your own, and see how it's the same and see how it's different.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (1), case. (1), this, (1), function (1)
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)


### 5. 4. Working with Sequences

#### Sequence slicing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=0)** - [Instructor] In this chapter, we're going to take a look at working with sequences.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=4)** Sequences are one of python's most basic data structures.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=8)** A sequence contains items arranged in order, and you can access each item using an integer index that represents its position in the sequence.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=18)** You can also find the length of a sequence using the built-in lens function.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=22)** Most sequence types also support an operation called slicing.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=26)** And you can use this operation to access the subset of the items in a given sequence.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=32)** And that's what we're going to take a look at in this example.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=35)** The general form of a slice is this right here.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=38)** It's start, stop, and step.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=41)** And all of these values are optional.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=43)** So let's try a couple of slicing operations.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=48)** Let's print out the names list that we have, and we're going to print out one to four.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=55)** We're starting at one and we're stopping at four.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=58)** And we can do the same thing using a step value.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=61)** So let's print out the names, starting at zero, stopping at seven, and having a step value of two.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=70)** Alright, so let's go ahead and run that.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=72)** And you can see the results here.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=74)** Each of these slices represents a subset of the names.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=79)** There's also a shorthand notation for writing slices.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=84)** So let's take a look at that.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=86)** So if I wanted to just start at the beginning, I can omit the zero.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=90)** So I could, for example, print out the names list and just have a colon and the zero is implied and I'll stop at three and it works the other way too.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=100)** I can have a start value, say five, and then a colon.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=105)** And that just means go until the end of the sequence.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=108)** So let's go ahead and comment out these previous examples.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=113)** Run the updated code, and you can see that in each of these cases, I'm printing the first three and then the last three items in the list.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=122)** It's interesting to note here that I can use a trick to reverse a sequence by getting every element, but by using a negative step value.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=132)** So check this out if I write print names and I just have zero for start and I omit this, the end, right, the stop.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=141)** So zero start end is the stop, and I just specify minus one for the step.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=148)** Then let me comment these other out.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=154)** And if I run this, you can see that the sequence is now listed in the opposite order from where it started.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=163)** So that's just a little trick you can use to reverse a sequence.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=167)** Sequences can also be assigned to, and that will replace the values in the sequence with new values.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=174)** So let's take a look at that, comment that out.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=178)** I'm going to specify a sequence of new names and I'll just specify a couple of names to use.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=191)** And then I'll specify that the names from two to four gets the new names sequence.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=201)** And then when I print out the names, you can see that the previous names have been replaced by the new ones.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=212)** Alright, let's keep going.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=213)** We can also use the delete operator.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=215)** Python has its delete operator. I can delete the names.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=218)** I can delete a sequence.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=220)** So I'll just delete, say the first few names, starting at zero, ending at two.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=225)** Let's comment that out.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=228)** And if we run that, we can see in, oh, whoops, got to print out the result.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=237)** There we go. So let's run that.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=239)** And we can see here in the result that the first two names are now deleted.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=243)** It's important to note that most sequences support slicing, but you can't assume that they all do.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=249)** And a good example of this is the deque data structure.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=253)** So the deque data structure is contained within the collections module.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=257)** If you don't have any experience using the deque collection, I have another course here in the library you can check out.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=264)** So here I've defined a deque object.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=267)** A deque is basically a double-ended queue and it's optimized for accessing elements from both ends.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=275)** So this particular object supports most sequence operations.
>
> **[4:40](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=280)** What I'll do, for example, I can iterate over it like any other sequence.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=285)** So I'll write four name in deque names and I can print out the name and I'll put a space in between each name.
>
> **[5:03](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=303)** I can get its length so I can get the length of the deque.
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=309)** Alright, let's go ahead and try that out. Right.
>
> **[5:13](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=313)** And you can see that I'm printing out each of the names.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=315)** So the loop is working, the length function is working.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=318)** However, deques don't support creating slices.
>
> **[5:21](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=321)** So if I try to create a slice, let's just try getting from one to four.
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=331)** If I run this, you'll notice I'm getting a type error.
>
> **[5:35](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=335)** It says the sequence index must be an in integer and not a slice.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=338)** This is because deque objects, as I mentioned, they're optimized to support accessing values from both ends of the structure and the way they're organized in memory slicing would just not be an efficient operation, so it isn't supported.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-23931756/sequence-slicing?u=76281980&t=353)** So keep this in mind when you're working with sequence types and always remember to check the deques if you're not sure if slicing is supported.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), delete (5), this, (3), function (2), module (1)
> **CLI Commands:** python (2), find (1)
> **Analogies:** for example (2)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Comparing sequences
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=0)** - [Instructor] There are going to be times when you're going to want to compare two sequences or more sequences to each other.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=6)** Sequences support value comparison operations, such as equality and greater or less than, but there are some limitations you need to be aware of.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=15)** So here in my example, I have two list sequences and one tuple sequence.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=22)** So let's try comparing sequence1 and sequence2 for equality and greater and less than.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=29)** So I'll just print out the result of each operation.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=32)** So we'll check to see if sequence1 is equal to sequence2, and we'll also try comparing to see if sequence1 is greater than sequence2.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=46)** And then we'll do the same thing, but with a less than comparison.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=50)** So before we run the code, you can see that both sequences start off with the same values.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=56)** They both have 1 and 2, but then they start to diverge at the third element.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=62)** This one has 4, then 5, and so on.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=64)** So let's go ahead and run the code.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=68)** So the first result is false since the two sequences are obviously different.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=74)** The second comparison is also false, and this is because the third value of sequence1 is not greater than sequence2.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=85)** So Python uses the first difference to calculate which sequence is considered to be greater than the other.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=93)** And that's why the third result is true because the 3 is less than the 5.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=101)** So in the case where two sequences have the same values, but one sequence is longer, the longer sequence is considered to be greater than the other.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=112)** So here in this case, I've got sequence4 and sequence5.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=117)** If I print out if sequence5 is greater than sequence4, let's comment out these previous ones and let's run.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=131)** You can see that sequence5 is greater than sequence4 because it just has more numbers in it.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=137)** Now things get a little bit wrinkly when you try to compare sequences of different types, so let's try comparing sequence1 and sequence3.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=152)** So if we scroll back up, you'll notice that sequence3 is a tuple where sequence1 is a list, and they have the same values.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=162)** Okay, so value-wise they should be the same.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=166)** But when I run this, actually let me go ahead and comment that out.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=170)** So let's run this, and you'll see that the result is false, and that's because they're not the same type, one is a list and one is a tuple.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=179)** Now you can solve this in a couple of different ways.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=182)** One way is to simply convert one sequence type to the other.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=187)** So I can just simply convert sequence1 into a tuple.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=194)** And if I run that, now you can see the result is true.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=198)** Now that solves the problem, but if you have very large sequences, then copying and storing them in memory can be problematic from a performance standpoint.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=207)** Another approach is to use the itertools module to convert the two sequences to the same type and then use the all built-in function.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=218)** So let's take a look at that.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=220)** What I'm going to do is print out the result.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=222)** I'll just make a result variable, and I'm going to call the all built-in function.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=227)** What I'm going to do is check to see if every instance of x is equal to y for x and y in itertools., I'm going to use the zip_longest function for this.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=244)** And so I'm going to zip up sequence1 and sequence3, and then we'll just print the result.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=255)** So the all function returns true if all of the elements in the sequence evaluate to Boolean true.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=265)** And since this is an iterator, it's going to be a bit more memory efficient than just creating two lists.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-23931756/comparing-sequences?u=76281980&t=271)** So let's go ahead and run this, and we can see that the result is true.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (4), this, (3), case, (1), type, (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** zip_longest (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Overview of comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=0)** - [Instructor] The Python language has a compact syntax for operating on sequences of values, and this particular construct is known as a comprehension.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=10)** These can be applied to lists, sets, and dictionaries.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=15)** So to understand how these work, let's consider how we can use some of the built-in functions in Python to achieve the same result.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=24)** So for example, the built-in map function takes a function that is then applied to each member of a list of values.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=33)** So in this case, we want to convert a list of Fahrenheit temperatures to Celsius.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=38)** So we wrap that call in a list function that returns a new list of values, and then we define the function that performs the transformation.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=49)** It turns out that this kind of operation is fairly common to do in Python programs, so common in fact that the language itself has a special syntax for performing these kinds of operations.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=62)** I can achieve the same result as this more complex code by writing the following.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=67)** So first, I write the expression that I want to apply to the values, and this is sometimes called the output expression.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=75)** In this case, it's just the simple formula for converting Fahrenheit temperatures to Celsius.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=81)** Then, I need to write the variables I'm going to work on.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=84)** And in this case, I've named it t for temp.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=87)** And then each of the t values will come from my list of Celsius temperatures.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=94)** And then finally, of course, I need to wrap this inside two square brackets, because I'm creating a new list.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=102)** And that's all there is to it.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=104)** So by writing this comprehension, I've dramatically simplified the original code and made it easier to read and understand.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=112)** Python supports this kind of construct for more than just lists.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=116)** You can also use them to create sets and dictionaries as well, which we'll see as we go through this chapter.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=122)** We'll also see how to apply predicate expressions to perform a filtering effect.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-23931756/overview-of-comprehensions?u=76281980&t=128)** Comprehensions are an important and common form of programming in Python, and can make your code much easier to work with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), case, (3), let (1), finally, (1)
> **CLI Commands:** python (5), make (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using list comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=0)** - [Instructor] Let's try writing our own comprehension to work on a list of values.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=4)** So here in VS Code, I have opened up the example file, and you can see I've already defined two lists of numbers.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=12)** One of them is even and one is odd.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=14)** So let's try doing things the old way first.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=17)** Let's use the built-in map and filter functions along with the list function to create a list of numbers that are the squares of the numbers in the original list.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=29)** So first, I'm going to use my map and list functions, and I'm going to create a result called evenSquared.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=36)** And that's going to be a list and I'm going to call the map function.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=41)** And that's going to take a lambda function that just returns the square of each number in the evens list.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=51)** So for every number in evens, the map function is going to call this lambda on it.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=57)** And that should give us the square of all the numbers in the list.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=62)** Let's go ahead and run that.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=66)** And sure enough, that's exactly what happens.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=67)** We have a list of numbers and they're the squares of all the evens.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=72)** Okay, so let's try adding a filter.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=75)** And to do that, we're going to use the filter function and let's only apply the square function to numbers that are greater than 4 and less than 16.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=84)** So I'm going to modify my function here.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=89)** So I'm going to filter, and again, that's going to take a lambda.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=97)** And we're only operate on numbers greater than 4 and numbers less than 16 from the evens list.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=109)** And let's make sure that we balance out all the parentheses.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=112)** There we go.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=113)** You can see now that my expression's getting a little bit longer and complicated here, but okay, let's go ahead and run again.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=122)** All right, and sure enough, you can see the result.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=124)** So now we're only operating on numbers that are greater than 4 and less than 16.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=130)** So let's try doing the same thing.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=133)** But this time, we're going to use a list comprehension.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=137)** So I'm going to write evenSquared is equal to and inside square brackets, I'm simply going to write e squared for e in evens.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=152)** And that's pretty much it. I'll just print out the result.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=157)** All right, and let's comment out our previous example.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=164)** Okay, let's go ahead and run this.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=167)** All right, and you can see that the output is the same as we saw previously, so we were able to achieve the same result with code that is much easier to read.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=177)** And you might be wondering, well, what about the predicate function?
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=179)** What about this filtering? How do you do that?
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=181)** Well, let's try adding some filtering, and this time, just so the odd numbers don't feel left out, let's operate on the odd numbers.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=189)** So let me close this terminal and we'll create the oddSquared result.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=197)** So once again, we're going to create a list comprehension, and that's going to be e squared for e in odds.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=207)** And we add the predicate by using an if condition.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=210)** So I'm going to write if e is greater than, in this case we'll do 3, and e is less than 17.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=219)** And then we'll print out the result.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=225)** And let's comment out our previous example.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=229)** All right, so let's run this again.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=232)** And now you can see that the odd numbers are being squared only if they are greater than 3 and less than 17.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-23931756/using-list-comprehensions?u=76281980&t=239)** So the code is more readable and compact, especially for relatively small expressions like these.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (8), lambda (3), this. (1)
> **Code Identifiers:** evensquared (2), oddsquared (1)
> **Tools:** vs code (1), terminal (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Working with set comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=0)** - [Instructor] For this example, we're going to take a look at how to use comprehensions to work with sets of values.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=5)** And remember, sets in Python are used to contain unique values.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=10)** So, each value in a given set can only occur one time.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=14)** So, here in VS Code, I've got my set comprehensions file open.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=17)** And similar to our previous example, I have a list of temperature readings.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=22)** These are all integer values.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=24)** And what I want to do is convert my Celsius temperatures into Fahrenheit temperatures, but only keep each unique temperature reading one time.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=33)** In other words, I want to weed out any of the duplicate temperatures.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=38)** So, doing this with a set comprehension is pretty straightforward.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=42)** And what I'm going to do here for illustration purposes is solve the problem with both a list and a set comprehension, so you can see the difference.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=51)** So, what I'll do first is build the comprehension for the list like we saw earlier.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=57)** (keyboard clicking) So, in the previous video we learned about list comprehensions, and we'll do that here.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=62)** So, I'm going to write T times nine-fifths plus 32 for each T in ctemps.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=75)** And then I'll just copy and paste that, call this ftemps2.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=80)** And the only difference is that I'm going to make this a set.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=84)** So, I'm going to have a curly brace on each end rather than a square brace.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=94)** So, that's the syntax for creating a set comprehension.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=98)** And then I'll just print both side by side so we can see the results.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=103)** (keyboard clicking) So, let's run.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=110)** You can see in the output that the list result contains some duplicate temperatures.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=115)** You can see that 53.6 occurs a couple of times.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=119)** There's a couple of others that appear more than once.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=121)** But the set results, however, only contain unique values.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=126)** And once again, you know, you can get pretty fancy with this if you want to.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=129)** So, let's try another example.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=131)** Suppose I had this string of text and I wanted to count the unique letters in the string while converting each of the letters in the text to uppercase.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=141)** And yes, I know it's a bit of a contrived example, but just follow along with me.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=145)** So, here I have my string.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=147)** What I want to do is create a set of all the characters in the string and convert them to uppercase.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=154)** (keyboard clicking) So, let's write the code to do this.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=156)** So, I'm going to have my chars and I'm going to have my curly braces.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=160)** What I'm going to do is call c.upper for C in the temp string.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=168)** Okay, so that seems pretty straightforward.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=171)** Let me comment out the previous example and let's print out the chars.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=178)** Let's try running what we have so far.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=182)** And sure enough, you can see that my set contains each of the unique characters converted to uppercase, but there's a space character in here and I want to exclude the space.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=194)** So, let's go back to the code, make a slight modification, and I'm going to write, if not c.isspace.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=204)** So, now I'm excluding any of the whitespace characters from my set.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=210)** Let's run this again.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-23931756/working-with-set-comprehensions?u=76281980&t=212)** And now you can see in the output that I have all uppercase characters and the space is no longer there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1)
> **CLI Commands:** make (2), python (1)
> **Non-Speech:** (keyboard clicking) (3)
> **Cross-References:** previous video (1), go back to (1)
> **Versions:** 53.6 (1)
> **Tools:** vs code (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)

#### Using dictionary comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=0)** - [Instructor] Now let's take a look at how to use comprehensions when working with dictionaries.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=4)** In this example, I'll use a list of Celsius temperatures.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=9)** So let's suppose I wanted to build a dictionary that mapped each of these Celsius temperature values to a corresponding value in the Fahrenheit scale.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=19)** So to do that, I would need to build a dictionary.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=21)** So let's start by declaring a new variable called tempDict, and we'll make that an empty dictionary.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=30)** Now, what I need to do in this case is create both a key and a value from each temperature in the Celsius list.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=36)** So remember, what we want to be able to do is look up each Fahrenheit value given a Celsius value.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=42)** So that means that each Celsius value needs to be the key, and the Fahrenheit value needs to be conversion from the Celsius.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=50)** So just like we did with set comprehensions, I'm going to use curly braces to create the comprehension, but the difference is that I'm going to have a key value pair.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=59)** So the key will be the temperature, and then the value is going to be the converted value.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=65)** So it's going to be T times 9/5 plus 32 for t in ctemps.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=74)** Now if I only had one value, then Python would say, "Oh, this is a set comprehension."
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=78)** But because I'm creating a key value pair, it realizes that this is a dictionary comprehension.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=84)** And just for fun so we can show that predicates work here as well, let's just limit the dictionary to values below 100.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=91)** So we'll have if t is less than 100, and then let's just print out the results.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=97)** So we'll print the dictionary and we'll also access the value of Celsius 12.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=105)** Okay, so let's run that.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=107)** And we can see, sure enough that we have 0 mapping to 32, 12 maps to 53.6, 34 maps to 93.2, and we are correctly mapping 12 to 53.6.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=121)** And like with set comprehensions, again, you can actually get pretty fancy with dictionary comprehensions if you want to.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=127)** So let's try another example.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=129)** All right, let's comment out these two.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=132)** Suppose I had two existing dictionaries representing members of sports teams with the keys being their last names and the values being their jersey numbers, and I wanted to merge these two teams into one team.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=149)** Well, you can do that pretty easily with a comprehension.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=153)** What we need to do is loop over the keys and values in each dictionary and then add them to the new one.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=159)** So I'll have my new team result, and I'll make that a dictionary.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=164)** And then I'm going to loop over each team dictionary, so I'll have a key and value for each team in, team1 and team2.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=179)** Now I need to get the keys and values for each item in this new team dictionary that I just created.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=186)** So I'll write for k and v in team.items.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=196)** So what I'm doing here is building a comprehension that has two separate expressions.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=200)** The first expression gets me each team in this tuple, and then the second expression gets me the keys and values for the items in each team.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=211)** So what I'm going to do is print out the result.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=216)** All right, and let's run.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=220)** And we can see now that we have the merged dictionary from the two other dictionaries.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=226)** Now, I should point out that this is about as complex as you want to get when working with comprehensions.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=232)** You want to avoid having more than two expressions in any single comprehension, because at that point, the code becomes kind of unwieldy to read, and you're probably better off just creating a function to do the work.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=246)** So hopefully that gives you a sense of the power that comes from using comprehensions.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-23931756/using-dictionary-comprehensions?u=76281980&t=252)** You can perform a pretty large variety of transformations on just about any iterable data source while improving the readability of your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (1)
> **CLI Commands:** make (2), python (1)
> **Versions:** 53.6 (2), 93.2 (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** tempdict (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Sequences
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=0)** - [Narrator] For this challenge, we needed to process a string and then return a set of unique punctuation characters in the string.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=8)** So, my solution uses a set comprehension to do this because it's going to build a set out of each of the characters in the string.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=17)** And I also use the string.punctuation constant that we learned about in the chapter on string processing.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=25)** To do this, I simply need to write my comprehension, which checks to see if each character in the given sentence is in the string.punctuation sequence and if it is, then it is added to the results set.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=39)** So, once I have the complete set, I can return the result.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=43)** Using a set comprehension automatically removes duplicates from the result so I don't have to do any additional processing.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=51)** So, let's go ahead and click on the "Test my code."
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=54)** And we can see that for this particular test, we have the comma, colon, exclamation point, and period.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=63)** And sure enough, that's exactly what we get here in the result.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=67)** Let's try a different version of the string.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=70)** Let's comment this one and uncomment this one.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=75)** And let's try it again.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=78)** All right, in that case, we get a comma.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=81)** Now in this case, we have multiple commas.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=83)** We have multiple dashes.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=85)** We have multiple underscores and multiple question marks.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=88)** But you can see that in the result set, only one of each is represented, so that's correct.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=94)** And then, let's try this one.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=97)** So, we've got an exclamation point, open and close parentheses, a dash, and an exclamation point.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=104)** So, let's test the code.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=108)** And sure enough, we have the quote, which is right there in the it's.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=113)** Forgot to mention that one.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=114)** We have each of the parentheses, the exclamation point, and the dash.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=118)** All right so, that's my solution code.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/solution-sequences?u=76281980&t=120)** How does it compare to yours?

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), this, (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)


### 6. 5. Exceptions

#### What are exceptions?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=0)** - [Instructor] Software errors and bugs are just a fact of life, and our programs need to deal with them.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=6)** In Python, like in many other modern programming languages, we use a mechanism known as exception handling to work with errors when they arise.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=15)** Exceptions can be caused by a variety of conditions.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=19)** Perhaps your code tried to access a missing file, or there was some arithmetic error in the logic, or a network operation timed out.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=28)** By using exceptions, you can group together a set of program statements and handle any problems that happen separately from the rest of your program logic.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=38)** In fact, exceptions can be raised and handled in completely different sections of your program's code.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=45)** Python provides dedicated keywords for exception handling.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=49)** These are the try, except, and finally keywords.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=53)** You write your program statements within a try section.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=57)** Any of these statements might cause an exception to happen, which is an error condition that needs to be handled.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=64)** If an exception is raised, then the program flow will immediately transfer to the closest except section that matches the type of exception that was raised.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=74)** This is where your program has an opportunity to deal with the problem gracefully.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=78)** You can also include an else block that contains code that will run if no exception happens, but that you want to be skipped if there's a problem.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=88)** You can also define an optional finally section.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=91)** The code in this section always runs regardless of whether an exception happens or not.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=96)** You typically use this section to clean up any resources, such as open files, that need to be taken care of.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=102)** Of course, your program can also raise its own exceptions.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=106)** You can do this with the raise keyword.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=109)** For example, if I have a piece of code that receives an unexpected value as a parameter, I can raise a ValueError exception that explains what the problem is.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=120)** ValueError is one of the many built-in exceptions that we'll learn about in this chapter.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-23931756/what-are-exceptions?u=76281980&t=125)** And your program can also define its own custom exception types, which we'll see how to do later.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (3), try, (1), except, (1)
> **CLI Commands:** python (2)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Handling exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=0)** - [Instructor] In this example, I'm going to modify a small program to use exceptions to catch and handle error conditions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=6)** Let's open up our basic exceptions file here.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=11)** So this program asks the user to enter two numbers and then divides the first number by the second.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=18)** So let's just go ahead and run this program as it is and I'll enter the first number here in the terminal as 10, and then I'll enter a two, and you can see that the result of 10 divided by two is five.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=32)** All right, so let's run this again.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=35)** I'll enter a 10 and then I'll try to divide by zero.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=39)** And you can see that the program crashes with a stack trace because of the attempt to divide by zero.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=45)** You can see that we're getting a zero division error here and it says division by zero, which is obviously not okay.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=51)** Let's run one more time.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=54)** And I'll enter a 10 and then I'll enter something that's not a valid number.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=58)** I'll just put in ABC.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=60)** And then once again, the program crashes because I didn't put in a valid number.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=65)** You can see that there's a value error that's happening here.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=68)** So let's make some modifications to add some exception handling to the code to handle these problems.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=75)** All right, the first thing I'm going to do is enclose my code inside of a try section.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=81)** So I'm going to add the keyword try and that's a new section so I have to indent my code.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=87)** Then I need to catch potential exceptions that might happen.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=92)** Now, I could just write a generic handler that looks like this, just the keyword except by itself, and then I would print out, hey, some error happened.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=102)** But this is not considered a best practice because this will catch every single exception type there is, even those that I'm not prepared to deal with.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=111)** It's much better practice to concisely specify the exceptions that might happen and that you are prepared to handle.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=119)** So the first is the divide by zero error.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=123)** So I'm going to explicitly scope this exception to handling a zero division error, and I'll set that as a variable named E and I'll print out, you can't divide by zero, and then we'll just print out the E variable just so we can see what it is.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=143)** Then let's handle the exception of not entering a valid number.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=149)** And remember, from the output earlier, that was a value error.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=152)** And again, we'll name that E.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=155)** And when that happens we'll print out, you didn't give me a valid number.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=164)** And once again we'll print out the exception trace.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=167)** And then let's also demonstrate the finally keyword.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=172)** So code within the finally section always runs regardless of whether there's an exception or not.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=178)** So if an exception happens, if it doesn't happen, this code is going to execute so we'll just write out, thanks for playing.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=188)** In Python you can also add an else block to the exception structure which will execute if there is no exception.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=197)** So in this case, let's print out the result.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=205)** And we'll go ahead and change this to some code that calculates a result.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=214)** So result equals N divided by D.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=218)** And then in my else block, I'll just simply print out the result.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=224)** All right, so let's save this and let's run the code again.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=230)** All right, so let's go ahead and try our problems.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=233)** So I'll enter 10 and then I'll enter a zero.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=237)** And now you can see that the program is handling the exception much more gracefully.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=241)** There's no more crash with a stack trace.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=244)** We see the error message, it says you can't divide by zero, and then we print out the stack trace itself, the exception error, and it just says division by zero, that's the error, and then the code and the finally block down here says thanks for playing.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=258)** Let's also try the non-number examples.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=261)** So I'll put in 10 and I'll put in ABC.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=265)** And once again, we're getting our message.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=266)** It says you didn't give me a valid number, we print out the error message and then the finally block runs.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=272)** And then let's run one more time and try some real code that we know is going to work.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=276)** So we'll divide 10 by two and we can see that the else clause is executing because it's printing out the result.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-23931756/handling-exceptions?u=76281980&t=283)** So by using exceptions, I've separated the error handling code from my main logic, giving my user a much better experience and organizing the code in a way that's much more readable and easy to make sense of.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (1), case, (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** abc (2)
> **Tools:** terminal (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Common exception types
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=0)** - [Instructor] Earlier I mentioned that there are several built-in exception types in Python that you can use.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=5)** So let's take a closer look at the built-in exception classes that Python provides right out of the box.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=12)** Here in my browser, I have the documentation open to the built-in exceptions, and you'll see it here at this link.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=20)** And if I click on the exception hierarchy link over here and we scroll down towards the bottom of the page, you can see that there are a lot of predefined exception classes, and almost all of them are derived from this exception base class here.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=40)** This documentation page also describes each of these exception types and when they are used.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=47)** Now in reality, many of these are not common in typical everyday development.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=53)** So I'm going to focus on the exceptions that you're most likely to encounter and then we'll see some of them in action.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=60)** The AttributeError is raised when you try to access an attribute that doesn't exist on a particular class, and usually this is because you misspelled the name of the attribute.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=70)** So that's usually the first place to look.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=73)** The IndexError and KeyError are somewhat related and are also fairly common.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=79)** IndexError is raised when you try to index into a sequence and the value is out of range.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=86)** Now this doesn't happen with slices, by the way.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=88)** Slice indices are silently truncated by Python so that they fall within the range of the sequence boundaries.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=95)** So that won't cause an error.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=97)** The KeyError is raised when you try to access a non-existent key of a dictionary.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=103)** And again, that's usually easy enough to track down.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=107)** There are a few common exceptions that happen with files and directories.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=111)** So let's take a look at those.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=113)** The FileNotFoundError is fairly self-explanatory.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=118)** It gets raised when you try to access a file or a directory that doesn't exist.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=124)** On the other hand, the FileExistsError is raised when you try to operate on a file or directory that already exists and that operation is not allowed in that case.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=136)** And the NotADirectoryError is raised when you try to perform a directory operation on an object that is not a directory.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=144)** And then we have a couple of more generic errors, and you'll see these quite often.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=148)** The TypeError gets used quite a bit and is raised when you use an inappropriate type for a particular function or operation.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=158)** And the ValueError is raised when you use the correct type, but the value of the type is not an allowed value for a particular operation.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=168)** So let's see some of these in actual code.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=172)** Here in VS Code, I'm going to open up my common_exceptions.py file in the Start folder.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=179)** So first, let's take a look at my list of integers right here.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=183)** I'm going to try to access an index that's beyond the end of the list.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=188)** So if I try to access something at index 10, for example, let's save this and then let's run it.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=194)** You can see that I'm getting an IndexError because the list index is out of range.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=199)** Now if I try to use an index that's not an integer, let's use the capital letter A and then let's run.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=207)** You can see that now I'm getting a TypeError and it says list indices must be integers or slices, not a string.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=214)** That's because I use the wrong type in the index.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=218)** All right, let's comment this out and let's try a dictionary operation.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=225)** So let's try to access a key that's not there and I'll try to access, so we've got keys one, two, and three.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=235)** Let's try to access key four.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=237)** And when I do that, you can see that we get the KeyError because four is not a valid key.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=245)** All right, let's try some file and directory operations.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=249)** Let's try to open a file that doesn't exist.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=252)** And again, let's go ahead and comment these guys out and I'll type with open and I'll try to open myfile.txt in read mode and you can see that there is no such file in my folder.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=270)** And let's go ahead and try to print that out.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=275)** All right, so when we try to run this, you can see that we get the FileNotFoundError because there is no such file.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=285)** Let's try some directory operations.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=289)** And again, I'll comment these guys out right here.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=294)** All right, I'm going to create a folder here in the exceptions folder, and I'm going to call it testdir.
>
> **[5:02](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=302)** And I'm going to import the OS module here.
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=310)** And this lets me perform some operating system related functions.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=314)** So what I'm going to try to do is on the OS module, I'm going to call the make directory function and I'll try to make a directory called testdir, which already exists because I just made it.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=324)** All right, let's go ahead and try that.
>
> **[5:29](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=329)** And we see that sure enough, we get a FileExistsError and the FileExistsError is being raised because it says, "Hey, testdir already exists and that's not okay."
>
> **[5:39](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=339)** All right, so that's working fine. Let's do this.
>
> **[5:42](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=342)** I'm going to create a file and I'm going to call it myfile.txt and I'll close that and let's comment that out.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=357)** Let's try performing a directory operation on the file.
>
> **[6:01](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=361)** And clearly it's not a directory, so that won't work.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=364)** So I'll write os.listdir to try to get a listing from the directory, but I'm going to give it the name of a file instead.
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=373)** And when I run that, we get the NotADirectoryError.
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=380)** So these exception types in addition to those that we saw in the previous video, are some of the most common ones that your code will encounter.
>
> **[6:28](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=388)** So it's worth taking some time here and trying out some of your own coding experiments in this example file to explore how they work.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=396)** Now, of course, your code doesn't just respond to these exceptions.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=400)** You can also raise these exceptions on your own if you need to.
>
> **[6:44](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=404)** So make use of these in your program where they are appropriate and again, refer back to the documentation to understand what these circumstances are, where each one of these different exception types might be appropriate.
>
> **[6:57](https://www.linkedin.com/learning/advanced-python-23931756/common-exception-types?u=76281980&t=417)** The built-in exceptions in Python cover many use cases, but of course there's going to be times when you want to create your own exception types, and we're going to see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), function (2), module (2), class, (1), self (1)
> **CLI Commands:** python (4), make (3)
> **File Paths:** myfile.txt (2), common_exceptions.py (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Code Identifiers:** common_exceptions (1)
> **Cross-References:** previous video (1)
> **Tools:** vs code (1)

#### Custom exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=0)** - [Instructor] While Python provides a range of built-in exceptions, there are cases where you may want to create custom exceptions to handle specific error conditions in your code.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=11)** In this example, I'll demonstrate how to create and use custom exceptions in Python.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=16)** Let's go ahead and open up the custom_exceptions example in the Start folder.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=21)** So, let's consider a simple bank account program that keeps track of withdrawals and deposits.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=28)** So deposits increase the balance and withdrawals will decrease the balance.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=33)** Of course, you shouldn't be able to take out more money than the account has in it.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=38)** So let's modify the program here to raise a custom exception in this case.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=44)** So first, let's create our custom exception and we'll call the InsufficientFundsError.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=51)** So I'll define a new class called InsufficientFundsError, and that is going to derive from the base Exception class.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=65)** And we'll just put in a quick doc string that says it's raised when the account balance is insufficient for a transaction.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=80)** All right, and then we'll define the init function, and that's going to take the object itself, the balance, and the amount.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=93)** The message we're going to show the user is going to be, and we'll create a format string.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=100)** We'll say that the balance is insufficient.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=106)** And what we'll do is we'll print out the balance and we'll format that as a floating point number.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=115)** And then in parentheses, we'll say that the required amount is, and we'll put in amount.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=123)** And again, we'll format that as a floating point number.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=127)** And then of course, good practice, we'll just initialize the super class with the message.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=136)** So now, we have to catch the exception when it happens.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=141)** So in the code where we withdraw money from the account, what we're going to do is check to see if the amount being withdrawn is greater than the balance property.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=154)** We're going to raise this exception and we're going to pass in self.balance and the amount we tried to withdraw.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=165)** And then let's add the handler to our program.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=170)** You can see that I've got some test code down here that creates a bank account with $100 in it, and then we deposit, and then we try to withdraw.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=179)** So the deposit should work, the first withdrawal should work, and then the next attempt to withdraw $100 is going to exceed the balance.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=188)** So what we're going to do is before the finally clause, we're going to put in an exception handler for the InsufficientFundsError.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=198)** And we'll just print out that there's an error and we'll use a format string for that, and we'll put in the e.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=207)** Otherwise, we will just print out that the withdrawal was successful.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=220)** All right, so that should be enough.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=222)** So, let's run the program without the offending line of codes.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=227)** Let's just go ahead and comment that out for a moment.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=229)** And when we run this, we can see that the withdrawal was successful and the balance is now $60.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=235)** Okay, so everything is fine.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=237)** Now, let's go ahead and try to withdraw too much money.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=240)** So, we'll comment that line back in and let's run again.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=245)** And now, we can see that our InsufficientFundsError is being caught because here's the error message.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=251)** We had 60 and we tried to take out 100, and we print out in the finally clause that the current balance is $60.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=261)** So when you define your custom exceptions, keep a few best practices in mind.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=266)** First, derive your exception from the Exception base class, and use a descriptive name that indicates its purpose.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=278)** Second, always provide a doc string that explains what the exception is for.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=282)** And finally, keep it simple.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-23931756/custom-exceptions?u=76281980&t=285)** Avoid adding unnecessary attributes or methods to your custom Exception class and keep it focused on the error condition that it represents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), raise (2), case. (1), class. (1), function (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** custom_exceptions (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=0)** - [Instructor] Let's try a programming challenge with exceptions.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=4)** In this challenge, you will need to define and handle a custom exception for a digital oven.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=10)** The oven can be set to temperatures within a specific range and anything outside that range results in an exception.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=17)** Setting the oven temperature to zero will turn the oven off.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=22)** So you can see here in the starting point code that I have defined the class that represents the oven interface, and there are two functions to get and set the current temperature.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=33)** So your job is to implement the code that raises an exception if the temperature is set to a value below 100 degrees or above 500 degrees, unless the value is zero to turn the oven off.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=48)** You can see I've also defined a test oven function that will test certain values, and you can also see that I have supplied some code down here that creates a digital oven and then calls the test function with each of the values.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=65)** So when the temperature is set to a valid value, such as 250, the output should show that the temp has been set to that value, and you can see that the finally statement also shows the current temperature setting.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=76)** So what I'm going to do is run my finished code in the terminal.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=81)** So I'm going to choose run Python file in terminal.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=85)** You can see that sure enough, when the new temperature is set, we get a string that says new temp is 250, and then the current temp setting is now 250.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=94)** Then when an invalid value such as 50 degrees is given, we see that the exception is raised and the output should indicate that an invalid value was given.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=104)** And notice that the current temperature setting is unaffected, it's still 250.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=109)** When the value of zero is supplied, the oven turns off and we can see that the current temp is now zero.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=115)** And then when the value of 600 is given, that's too high.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=120)** We see that there's an exception that's raised again, and once again, the current temp is unaffected.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-23931756/challenge-exceptions?u=76281980&t=126)** So go ahead and give that challenge a try and I'll be back in the next video to explain my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), interface (1)
> **Tools:** terminal (2)
> **Analogies:** such as (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=0)** - [Instructor] Let's take a look at my solution.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=2)** So we needed to implement a custom exception for our digital oven that was raised when an invalid value was given to the oven class.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=10)** I chose to name my exception invalid temp error, and I derived this class from the base exception class, which is one of the best practices you should do.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=20)** And of course, I provided a doc string to describe what the exception represents.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=25)** The init function of the class accepts a temperature value, which is incorporated into the string that is displayed to the user in case the exception is raised.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=38)** So here in my oven class, the code that sets the temperature checks to see if the value is zero, which turns the oven off.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=47)** If it's not zero, then we check to see if it's less than 100 or greater than 500, which are invalid values and result in the exception being raised.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=57)** So in my test code, I defined the exception handler to handle the invalid temp error and print out the result.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=69)** And I also added an else block in case the exception is not raised to just print out the new temperature that the oven was set to.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=77)** So once again, let's go ahead and run this, just to make sure it still works, and we can see that the output is as expected.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-23931756/solution-exceptions?u=76281980&t=88)** Alright, so go ahead and take a moment to compare my code to yours and note the similarities and differences.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (2), class. (1), function (1), this, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=0)** - Congratulations on completing the course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=2)** I hope you enjoyed learning along with me about some of the more advanced features of Python.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=7)** Now that you've seen what the Python language is capable of, you might want to check out some ways you can apply your newfound skills.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=14)** There are plenty of other courses here in the library to continue your Python learning journey.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=19)** Whatever you choose to do next, don't forget to keep your Python skills up to date by reading up on the [python.org](https://python.org) website and connect with me on LinkedIn to get notified of my new course releases and updates.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=30)** I'll see you again soon in another one of my courses.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-23931756/next-steps?u=76281980&t=33)** Thanks again for watching, and as always, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5)
> **Code Keywords:** continue (1)
> **URLs:** [python.org](https://python.org) (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - congratulations (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-3912165/codespaces)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Master Your Python Skills]]
**1 of 11** | [[Advanced Python- Classes and Functions]] →

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