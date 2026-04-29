---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-object-oriented-programming-22888296
url: "https://www.linkedin.com/learning/python-object-oriented-programming-22888296"
duration_minutes: 116
duration: 1h 56m
level: Intermediate
updated: 1/27/2025
learners: 54591
skills:
  - Python (Programming Language)
  - Object-Oriented Programming (OOP)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-object-oriented-programming-4413110/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGDodIrzxv0mA/learning-public-crop_675_1200/B56ZS92ByDGQAc-/0/1738351845105?e=2147483647&amp;v=beta&amp;t=L07OE1pDo94yPJZbYwrw7KPuTP-lHkkMt5Nqsn-Gn8Q"
linkedin_topic: Software Development
learning_paths:
  - '[[OpenEDG Python Institute- Programming with Python Professional Certificate]]'
  - '[[Getting Started with Python]]'
prev_courses:
  - '[[Python Essential Training]]'
  - '[[Learning Python]]'
next_courses:
  - '[[Level Up- Python]]'
  - '[[Learning the Python 3 Standard Library]]'
path_nav: '[{"path":"OpenEDG Python Institute- Programming with Python Professional Certificate","position":2,"total":3,"prev":"Python Essential Training","next":"Level Up- Python"},{"path":"Getting Started with Python","position":3,"total":8,"prev":"Learning Python","next":"Learning the Python 3 Standard Library"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/data-science
  - skill/python-programming-language
  - skill/object-oriented-programming-oop
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Object-Oriented%20Programming.md)

![Python Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQGDodIrzxv0mA/learning-public-crop_675_1200/B56ZS92ByDGQAc-/0/1738351845105?e=2147483647&amp;v=beta&amp;t=L07OE1pDo94yPJZbYwrw7KPuTP-lHkkMt5Nqsn-Gn8Q)

# Python Object-Oriented Programming

> The object-oriented programming (OOP) features in Python make it easier to build programs of increasing complexity and modularity. In this course with instructor Joe Marini, learn how to apply core OOP principles to build programs that are extensible and efficient. Joe starts with the basics of defining and using classes and objects. Then he moves into more advanced features like abstract base cla

> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296) | 1h 56m | Intermediate | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Object-Oriented Python]]** (6 videos)
- **[[#2. Inheritance and Composition]]** (6 videos)
- **[[#3. "Magic" Object Methods]]** (6 videos)
- **[[#4. Data Classes]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Python object-oriented programming
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=0)** - In my opinion, two of the best things about the Python language are its power and its simplicity.
>
> **[0:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=6)** You can accomplish quite a lot in Python while keeping your programs relatively small and easy to understand.
>
> **[0:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=12)** But as your projects get larger and more complex, you'll soon need a way to keep your programs and data organized, extensible, and easy to adapt and change as new team members are brought onto the project.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=24)** Hi, I'm Joe Marini, and I've been building software some of the best known companies in Silicon Valley for more than 30 years.
>
> **[0:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=30)** In this course, we'll cover the object-oriented programming features of Python and how they can be put to work in your projects.
>
> **[0:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=37)** We'll start with the basics of defining and using classes and objects.
>
> **[0:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=41)** Then we'll learn about some of the more advanced features, like abstract base classes and how to implement interfaces.
>
> **[0:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=48)** We'll also see how to use some of Python's unique features, like the magic class methods you can use to tightly integrate your objects with the Python language itself.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=57)** And we'll see how to use Python's data classes to build objects that efficiently store and manipulate information.
>
> **[1:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=64)** These techniques will enable you to build programs that are modular, resilient, and extensible.
>
> **[1:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=69)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6)
> **Code Keywords:** abstract (1), let (1)
> **Speakers:** - in (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start this course, there are some important concepts that you should already be familiar with.
>
> **[0:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=5)** First, you should be familiar with using developer tools such as text editors.
>
> **[0:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=10)** We're going to be writing Python code in this course and Python is of course just a text format, so you can use whatever text editor you want but I'll be using Visual Studio Code for this course.
>
> **[0:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=21)** And specifically, I'll be using Visual Studio Code in an online code space.
>
> **[0:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=26)** But if you want to download and work locally on your computer, I suggest you use Visual Studio Code.
>
> **[0:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=32)** It's free from Microsoft, it runs on Mac and Windows and Linux, and you can download it if you want to from this website, code.[visualstudio.com](https://visualstudio.com).
>
> **[0:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=40)** It has a rich ecosystem of plugins available which of course we'll take advantage of in the course.
>
> **[0:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=46)** And if you'd like to learn more about Visual Studio Code just go to that link and you'll learn more.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=50)** Again, though, I'll be using GitHub and a code space and an online version of Visual Studio Code.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=57)** You should also already be familiar with the basics of Python programming.
>
> **[1:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=61)** You don't need to be an expert but this is not the right place to start, if you're a complete beginner and you don't have any Python experience.
>
> **[1:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=67)** I'm going to assume that you already understand the fundamentals of the Python language, such as how to write functions and use conditional statements and define variables, and so on.
>
> **[1:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=77)** If you feel like you need to brush up on your basic Python programming skills, you can check out Learning Python or [[Python Essential Training]].
>
> **[1:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=85)** You should also be familiar with basic object-oriented programming principles such as classes, methods and inheritance, and so on.
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=93)** We're going to be learning about the Python specific details of these concepts in this course, but if you need to learn about the basics first, I suggest you watch [[Programming Foundations- Object-Oriented Design]].
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=105)** When you're comfortable with these subjects you are ready to proceed with the course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (9)
> **Tools:** visual studio (5), github (1)
> **Analogies:** such as (3)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Setting up the development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=0)** - [Instructor] There are a couple of different ways you can work with the example code in this course.
>
> **[0:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=4)** I've set up a GitHub repository with the examples.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=8)** And you can find it at this link.
>
> **[0:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=10)** The course content is organized into two separate folders.
>
> **[0:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=14)** There's the Finished folder which contains all of the code examples in their finished state so you can compare your code against them as you work through the course.
>
> **[0:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=22)** The Start folder contains the code examples in their beginning state.
>
> **[0:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=27)** This is the folder I will be working in throughout the course as we build towards the finished state for each example.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=33)** If you want to download the examples and work with them locally in your computer, then that's easy enough to do.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=39)** All you need to do is go to the Code menu here, and then in the Local panel, either clone the repository directly to your computer or you can download a zip file and then use your favorite code editor to work on them.
>
> **[0:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=52)** You'll just need to make sure that you have Python installed on your computer, at least version 3.10, in order to use the examples.
>
> **[0:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=58)** But this repository has also been set up to work with a GitHub codespace so you could just work directly online with nothing to install.
>
> **[1:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=66)** All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a codespace.
>
> **[1:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=72)** And you do that here in the Codespaces menu.
>
> **[1:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=74)** Now, I've already done that.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=75)** You can see I have a codespace that's active.
>
> **[1:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=77)** But you just click on this little plus sign right here and you'll create your own codespace.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=83)** When you do that, the codespace will spin up.
>
> **[1:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=85)** And that might take a minute.
>
> **[1:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=87)** So be patient.
>
> **[1:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=88)** But when it happens, you'll see something like this.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=91)** You'll have a browser-based version of Visual Studio Code.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=94)** And you can see that here in the left-hand nav are all the files that you'll need for the course.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=98)** I've got the Finished folder and the Start folder.
>
> **[1:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=100)** You'll also have a built-in terminal which can be found here in the View menu.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=105)** So I'm going to click on View.
>
> **[1:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=107)** And you can see right here we have the Terminal, or you can type Ctrl+Backtick to bring it up.
>
> **[1:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=112)** So I'll do that.
>
> **[1:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=114)** And there's the terminal.
>
> **[1:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=116)** And of course, I can check to see if I've got Python installed by typing python --version.
>
> **[2:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=121)** And sure enough, there it is.
>
> **[2:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=122)** I've got 3.10.8.
>
> **[2:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=125)** You'll also want to make sure that you have the Python extension installed.
>
> **[2:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=128)** And if you click on this little side icon with the boxes, you can see that I have Python and Pylance installed.
>
> **[2:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=135)** Now, when you make the codespace, Visual Studio Code should prompt you to automatically install these since it is a Python-based project.
>
> **[2:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=143)** But if you're not prompted to do that, you can go into the marketplace and just search for them.
>
> **[2:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=149)** If you just type Python into the search box, it should be the first result that comes up.
>
> **[2:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=156)** I'll close the terminal.
>
> **[2:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=158)** This one extension is all you need because it will install both the Python and Pylance extensions for you.
>
> **[2:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=164)** The other thing to quickly check is to make sure that the preferences are set properly.
>
> **[2:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=168)** So let's go back to our codespace.
>
> **[2:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=171)** And I am going to open up the preferences.
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=174)** And you can do that either here in the file menu or just by typing Ctrl+,.
>
> **[3:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=181)** And what you're going to want to do is, in the Settings, search for the word execute.
>
> **[3:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=187)** And you want to make sure that Execute in File Dir is checked.
>
> **[3:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=190)** So check that box if it isn't.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=192)** And that's pretty much all there is to set up.
>
> **[3:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=195)** So once you've gone through the preferences, set up your own codespace, and so on, you'll be ready to go.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (5), find (1)
> **Tools:** terminal (4), github (3), visual studio (2)
> **Prerequisites:** set up (4), install (3), you'll need (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** this. (1), let (1)
> **Versions:** version 3 (1), 3.10.8 (1)
> **Exercise Files:** download the (1), zip file (1)
> **Cross-References:** go back to (1)

#### Using CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=0)** - [Lecturer] This course includes automated code challenges that appear when you click on the challenge links in the course' table of contents.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=16)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course' videos.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=24)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=33)** The code challenge has four areas.
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=35)** There are instructions in the top left, a code editor where you will create your answer here in the top right, another code editor where you can see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=52)** You can use these drag handles to allocate space as you like.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=57)** And to get even more horizontal space for the code editors, you can collapse the courses table of contents on the left, which you can see I've already done.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=65)** Each challenge has instructions that include a description of the challenge and the challenge's parameters, and the desired result.
>
> **[1:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=74)** Now depending on the challenge, you'll see some additional information in the instructions such as an explanation of the parameters that your code will be given along with some examples of what the expected output might look like.
>
> **[1:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=87)** You will create your answer in the top right code editor.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=91)** There are comments in the starting code showing where to put your solution.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=96)** When you click on "Test my code" down here in the bottom right, you will see a message indicating whether your code returned a correct result.
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=104)** So in this case, the correct answer for finding the largest number in the list is going to be return max of numbers.
>
> **[1:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=115)** And I'm going to go ahead and click on "Test my code".
>
> **[1:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=117)** And you can see here in the console it says, that's right, my code returned 19.
>
> **[2:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=121)** Now if your code isn't successful, you can ask for help.
>
> **[2:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=125)** Let's go back and change this to the wrong answer.
>
> **[2:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=128)** You can see when I click on "Test my code", oh, I get a problem.
>
> **[2:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=132)** The show expected result and show hints variables determine whether you see the expected result and any hints.
>
> **[2:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=140)** So I'm going to change both of these to true.
>
> **[2:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=144)** All right, and then I'm going to click on "Test my code" again.
>
> **[2:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=148)** And now you can see over here in the console, I am getting the expected result and there's a little bit of a hint that tells me where to find the right function to be able to use.
>
> **[2:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=158)** The code editor in the lower right shows how your solution is used, and in some cases, you can change that code to experiment with different test cases.
>
> **[2:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=168)** Now, regardless of whether your answer is successful, you'll see messages in the console in the lower left.
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=174)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=179)** And when you've finished each code challenge, you can return to the courses table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4)
> **Code Keywords:** case, (1), let (1), function (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [lecturer] (1)


### 1. Object-Oriented Python

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Object-oriented programming refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=0)** - [Instructor] Before getting into the details of how Python implements object-oriented programming, let's have a very quick refresher of some OOP principles.
>
> **[0:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=9)** Let's begin with some of the reasons and motivations for using OOP in the first place.
>
> **[0:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=14)** First, Python, unlike other languages such as Java and C Sharp, does not actually require you to use object oriented principles when creating your programs, even though everything within Python itself is technically an object.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=28)** If you want to create individual functions and variables and data structures and so on, then you're free to do so.
>
> **[0:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=34)** And Python will happily execute your code, as long as it is syntactically correct.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=39)** As programs become more complex, however, it becomes increasingly difficult to keep everything organized and to ensure that one part of your program isn't having unintended side effects on another part.
>
> **[0:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=52)** Using object-oriented programming techniques can help organize and structure your programs, and this makes them easier to plan and maintain and learn by new programmers.
>
> **[1:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=63)** With this approach, you build a program that groups together data and the functions that operate on that data in one place.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=70)** This helps reduce bugs and helps ensure that only the parts of the program that need access to that data have it.
>
> **[1:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=77)** Object orientation also promotes the building of modular programs, meaning that individual parts of the program don't need to know how other parts work internally.
>
> **[1:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=86)** So down the road, if part of the program needs to be updated or replaced, it can be done with minimal disturbance to the code in the rest of the program.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=95)** It also helps isolate different parts of the program from each other.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=98)** So if a problem occurs in one part of the program, other parts of the program can continue to operate.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=105)** So now let's take a quick review of some of the terms we'll see in the rest of the course.
>
> **[1:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=110)** You can think of a class as a blueprint or a template that describes how to create a specific kind of object.
>
> **[1:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=118)** Methods are a fancy way of referring to functions that are part of a class, while attributes are a way of referring to variables or properties that are part of a class definition.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=129)** An object is a specific instance of a class or a type.
>
> **[2:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=132)** For example, the number one is an instance of an integer type.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=137)** The term inheritance describes how you can arrange classes in a hierarchy, where a particular class can inherit the capabilities and data of another class.
>
> **[2:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=147)** And we'll see how this works in Python later.
>
> **[2:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=150)** Another important term to understand is composition, which refers to building complex objects out of other objects.
>
> **[2:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=157)** And again, we'll see an example of this later.
>
> **[2:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=159)** All right, so now that we've had a quick refresher on object-oriented programming terms and principles, we can get started with the rest of the chapter and see how Python puts these into practice.
>
> **[2:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=169)** If you're still unsure about some of these terms and principles, I would encourage you to review the What You Should Know video at the start of this course for some direction on where you can learn the basics before continuing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), implements (1), require (1), continue (1)
> **CLI Commands:** python (6)
> **Definitions:** is a  (1), is an  (1), refers to (1)
> **Env Vars:** oop (2)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Basic class definition
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=0)** - [Instructor] Let's begin by seeing how to create a basic class definition in Python, along with how to instantiate the class and then access parts of it.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=7)** So here in chapter one in the start folder I'm going to open up the definition_start code and we're going to start by creating a class to represent a book.
>
> **[0:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=17)** So to do that, I'm going to use the class keyword.
>
> **[0:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=20)** So I type the word class and then the name of the class.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=24)** And in this case I'll type the word book and then a colon.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=28)** You can also optionally add parentheses after the class name, but they're only really required if you're going to indicate that the class inherits from another class.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=36)** And we'll get to that later in the course.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=39)** Since our class just exists on its own we can just leave those off.
>
> **[0:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=43)** Now, to complete the class definition I can just add a pass statement which doesn't do anything and be done.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=50)** This is a perfectly legal syntactically correct class definition in Python.
>
> **[0:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=56)** Now, obviously it doesn't do anything but I can now create instances of this class by simply calling the class name as a constructor function.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=65)** So I'll make a variable called book1 and set that equal to book.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=70)** And these parentheses here are required.
>
> **[1:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=72)** This is how you construct an object.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=75)** Now in reality our classes will contain methods and data attributes.
>
> **[1:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=80)** So let's fill out this class a little bit more.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=83)** First, I'm going to override the built-in init function.
>
> **[1:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=86)** So I'm going to get rid of this pass statement and I'm going to write def__init and then two underscores and then I'm going have it take two arguments self and then title.
>
> **[1:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=103)** All right, and then colon.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=105)** And then inside that function, I'm going to write self.title = title.
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=111)** The init function is one of Python's special functions for working with classes.
>
> **[1:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=116)** When the class is created, like we see here on line 11 the init function is then called to initialize the new object with information, and it is called before any of the other functions that you've defined in the class.
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=131)** Some people mistakenly call this the constructor function because other languages like Java and C Sharp have a similar function that performs a similar purpose but it's more accurate in Python to say that this is the initializer function.
>
> **[2:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=144)** At this point, the object has already been created when the function is called, so you know that it's safe to start initializing your data attributes.
>
> **[2:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=153)** So now let's update our code to call the book object correctly.
>
> **[2:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=159)** I'll create a book and it's going to have a title.
>
> **[2:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=162)** So I'll call this one "Brave New World", and then we will create another book.
>
> **[2:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=167)** Let's do book 2, and that's going to be a book and I'll call that one, I don't know, "War and Peace" just some light reading, you know?
>
> **[2:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=177)** And you may have noticed that the init function takes two arguments, right?
>
> **[3:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=180)** Self and title but I'm only supplying one when I create each book.
>
> **[3:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=186)** That's because whenever we call a method on a Python object the object itself automatically gets passed as the first argument.
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=193)** So Python takes care of that.
>
> **[3:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=195)** And by the way the word self is not required.
>
> **[3:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=198)** You can call this whatever you want.
>
> **[3:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=199)** It's just a naming convention.
>
> **[3:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=200)** I can call it S or anything else.
>
> **[3:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=202)** But most Python programs follow this naming convention to use the word self.
>
> **[3:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=208)** Inside the init function you can see I'm creating a new attribute on the object called title and it's being used to hold the title of the book.
>
> **[3:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=217)** Once I've done this, I can then access the value of the property using regular dot notation.
>
> **[3:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=223)** So for example, I can print out the object itself and I can also print out book1.title.
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=235)** Alright, so let's run what we have.
>
> **[3:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=237)** We've written some code it's time to actually exercise it, make sure it works.
>
> **[4:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=240)** What I'm going to do is right click on chapter 1 and choose open in integrated terminal.
>
> **[4:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=245)** That will open a terminal directly in this folder and then I can run it by simply writing Python and then the name of the script.
>
> **[4:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=254)** In this case it's definition_start.py.
>
> **[4:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=257)** And when I do that you can see that I print out the object, right, the book1 object, that's this line right here.
>
> **[4:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=265)** And then book1.title, that's this line right here.
>
> **[4:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=270)** So that gets us up and running with creating Python classes.
>
> **[4:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=273)** In the rest of the chapter we'll see how to work with other kinds of methods and properties and how to identify classes and objects.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (5), self (5), class. (3), pass (2)
> **CLI Commands:** python (9), make (2)
> **Code Identifiers:** definition_start (2), def__init (1)
> **Definitions:** is called (2), is a  (1)
> **Tools:** terminal (2)
> **File Paths:** definition_start.py (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)

#### Instance methods and attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=0)** - [Instructor] In the previous video we saw how to define a basic Python class and create an instance of it.
>
> **[0:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=6)** Now let's see how to create instance methods and attributes for our class.
>
> **[0:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=10)** So in the editor, let's open up instance_start.
>
> **[0:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=14)** And you can see here this is pretty much how we left the code in the previous example.
>
> **[0:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=19)** So let's start by filling out the init method a little bit more, since books tend to have more information about them than just their title.
>
> **[0:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=27)** So I'm going to add author, pages, and price.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=36)** And then I'm going to add those properties down here.
>
> **[0:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=38)** So self.author is going to equal the author argument
>
> **[0:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=46)** and we'll do the same for pages and, of course, the price.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=57)** So each one of these attributes is called an instance attribute because the value that it holds is only used by the instance of the object that it is declared on.
>
> **[1:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=67)** And the same goes for instance methods.
>
> **[1:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=69)** So far we only have one, which is the init method, and Python provides that for us, but we can add more, we can add our own.
>
> **[1:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=76)** So let's add a method to return the price of a book.
>
> **[1:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=79)** And again, remember that every instance method takes an object as the first parameter.
>
> **[1:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=84)** So I'm going to define my getprice function and that takes self as its first parameter.
>
> **[1:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=92)** And, in this case, it's only parameter and it's going to return self.price.
>
> **[1:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=100)** So now we can update our code that uses the book class.
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=104)** So remember, in the previous example we only had title, so let's go ahead and add some author and other information.
>
> **[1:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=110)** So "War and Peace" was written by Leo Tolstoy and it's a pretty big book, I think it's got 1,225 pages and we'll give that a price.
>
> **[2:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=123)** And the same thing for "Catcher in the Rye."
>
> **[2:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=126)** That, of course, was written by JD Salinger and that had 234 pages.
>
> **[2:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=133)** And we'll sell that one for 29.95.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=137)** And then let's make a call to the getprice method.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=141)** So we'll print out book one and we'll call getprice.
>
> **[2:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=149)** All right, so let's run the code that we have.
>
> **[2:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=152)** Once again, I'll open up the terminal and I'll run my script and sure enough you can see that we're printing out the price of book one, which is in fact 39.95.
>
> **[2:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=166)** All right, let's go back to the code and I'll Control + Backtick to hide the terminal.
>
> **[2:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=171)** So we're not limited to creating instance attributes just within the init function.
>
> **[2:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=177)** So let's add another function that specifies a discount for a book that is on sale.
>
> **[3:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=183)** So let's create a function.
>
> **[3:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=186)** We'll call this one setdiscount.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=192)** And in this case it's going to take an amount for the discount to be.
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=196)** And we'll simply set self, and I'll name it with an underscore in front of it, and I'll get back to that in a second.
>
> **[3:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=202)** I'm going to call it _discount equals amount.
>
> **[3:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=207)** Now the underscore in front of the attribute name, the main reason to do this is to give other developers a hint that this attribute is considered internal to the class and is not for public consumption.
>
> **[3:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=222)** Other languages like Java or C#, have a way of declaring attributes that are only intended to be used within the logic of the class where they are defined.
>
> **[3:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=231)** Python doesn't have a way of enforcing this.
>
> **[3:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=234)** The underscore in the name basically tells other programmers that this attribute can't be relied on.
>
> **[3:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=238)** So don't use it elsewhere in your code, it's only going to exist in this class.
>
> **[4:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=243)** So now that we've defined the attribute we can use it elsewhere in the class.
>
> **[4:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=247)** So let's modify the getprice function to use the discount if it is defined.
>
> **[4:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=253)** Now, since it was not defined during the init function we can't rely on it being present.
>
> **[4:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=259)** So we need to test for it by using a function called hasattr, and it works something like this.
>
> **[4:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=266)** I'm going to write if hasattr, which is a function built into Python to check to see if an attribute exists.
>
> **[4:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=276)** And I'm going to check for the existence of the attribute on my self object.
>
> **[4:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=280)** And I'm going to pass in the string name of the attribute I'm interested in.
>
> **[4:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=285)** So if the discount exists, we're going to return self.price minus self.price times self.discount.
>
> **[5:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=306)** Otherwise we're going to just return self.price.
>
> **[5:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=310)** And then let's go ahead and exercise that.
>
> **[5:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=314)** So we'll print out book two's getprice, and then we will call b2.setdiscount and we'll set the discount to be 25%, so 0.25.
>
> **[5:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=330)** And then we'll just call getprice again, so I'll copy and paste that.
>
> **[5:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=334)** All right, so let's go back to our terminal and let's run the code again.
>
> **[5:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=342)** All right, and so now we can see that we've got book one's price, that's still there.
>
> **[5:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=346)** Book two's price starts out as 29.95, but then after we set the discount, it drops down to 22.46.
>
> **[5:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=354)** All right, one last thing I want to demonstrate, as I mentioned earlier, the underscore is used to indicate that an attribute, or a method for that matter, is intended only to be used by the class.
>
> **[6:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=366)** If you use a double underscore as the start of an attribute or method name then the Python interpreter will change the name of that property so that other classes will get an error if they try to access it.
>
> **[6:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=378)** So let's take a look at that.
>
> **[6:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=382)** Right, so hide the terminal again.
>
> **[6:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=385)** And up here in the init function I'm going to add an attribute named secret.
>
> **[6:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=391)** So I'll give it two underscores and then call it secret and just give it some string, "This is a secret attribute."
>
> **[6:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=403)** All right, so now let's try to access that attribute.
>
> **[6:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=407)** I'm going to print out b2__secret.
>
> **[6:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=414)** All right, let's comment out the previous examples.
>
> **[6:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=418)** I'll type Ctrl + / to comment those.
>
> **[7:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=422)** And then let's go back to the terminal and try to run this.
>
> **[7:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=427)** And you can see that when I run this, I'm getting an error, right?
>
> **[7:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=431)** Because that property can't be seen outside the class.
>
> **[7:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=434)** And you can see the error right here, "'Book' object has no attribute '__secret'."
>
> **[7:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=439)** However, (chuckles) this is not a perfect mechanism.
>
> **[7:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=443)** So the way that Python does this is by prefixing the name of the attribute with the class name.
>
> **[7:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=451)** And the main reason for this feature is to prevent subclasses from inadvertently overriding the attribute.
>
> **[7:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=457)** But other classes can subvert this by simply using the class name.
>
> **[7:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=461)** So if I change the code to be, let's see, b2_Book and then leave the __secret there.
>
> **[7:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=472)** Okay, I'm going to run the code again.
>
> **[7:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=474)** Let me clear the terminal.
>
> **[7:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=476)** And see, now I can access it, right? (chuckles) So it's not a perfect solution for hiding your attributes or methods, but you can use the approach to make sure that your subclasses don't try to use the same name for an attribute that you've already used.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), self (9), function (9), class. (6), this. (3)
> **CLI Commands:** python (6), make (2)
> **Tools:** terminal (6)
> **Versions:** 29.95 (2), 39.95 (1), 0.25 (1), 22.46 (1)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** instance_start (1)
> **Analogies:** for instance (1)

#### Checking instance types
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=0)** - [Instructor] Sometimes it is useful to be able to check what type or class a given object is.
>
> **[0:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=5)** And in Python we can do this with the type function and the isinstance function.
>
> **[0:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=10)** So let's open up typecheck_start.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=13)** And when you have this open, you'll see that we have two classes defined.
>
> **[0:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=17)** One is called book and one is called newspaper.
>
> **[0:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=20)** And there's also some code that creates some instances of these objects.
>
> **[0:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=25)** So let's first use the type function to see what type a given object is.
>
> **[0:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=32)** So we're going to do this, I'll print out the result of calling type on B1, which is the book, and then we'll do the same thing for N1, which is the newspaper, you can see I've got those defined right here.
>
> **[0:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=47)** And what I'm going to do is open this up in my terminal and I'm going to run this.
>
> **[0:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=54)** Alright, so when I run this you can see that B1 is of type book, and N1 is of type newspaper.
>
> **[1:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=61)** And the type function is useful because you can use it to compare two different types to see if they are the same.
>
> **[1:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=68)** So let's do that in the code.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=70)** What I'm going to do is print out if the result of calling type on B1 is equal to type of B2,
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=83)** and you can see that they're both books, so that should be true.
>
> **[1:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=87)** Let's add a false condition.
>
> **[1:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=89)** So I'll copy and paste that and we'll see if type of B1 is equal to N2 which is a newspaper, right?
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=96)** So let's run this again.
>
> **[1:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=99)** And you can see that yes, the books are the same types, but obviously a book is not a newspaper, so that result is now false.
>
> **[1:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=106)** To see if a given object is an instance of a particular class, it's much cleaner to use the isinstance function rather than trying to parse the string that come back from the type function.
>
> **[1:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=117)** So let's try that next.
>
> **[2:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=120)** Here in my code, I'll write print, and now I'll use isinstance.
>
> **[2:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=128)** And inside of isinstance, I'm going to see if B1 is a book.
>
> **[2:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=134)** And we can do this a couple times, let's try seeing if N1 is a newspaper, and then let's add a false condition.
>
> **[2:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=145)** Let's see if N2, which is a newspaper, is a book.
>
> **[2:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=151)** And what I'll do is I'm going to scroll up here a little bit and comment out these previous examples.
>
> **[2:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=158)** Alright, so let's run this and sure enough, yes, B1 is a book, N1 is a newspaper, and N2 is not a book.
>
> **[2:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=169)** It's also possible to use this on subclasses.
>
> **[2:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=173)** So we haven't really covered inheritance and subclasses just yet, but in Python, every object is a subclass of the built-in object class.
>
> **[3:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=182)** So we can try that as well.
>
> **[3:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=185)** What I'll do is I'll add a call and I'll say print isinstance, and I'm going to check to see if N2 is an instance of the built-in object class.
>
> **[3:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=198)** Alright, so let's run that again and actually let's go ahead and let's comment out these first three examples.
>
> **[3:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=208)** Alright, so we're going to run this.
>
> **[3:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=209)** You can see that N2 is in fact an instance of the generic built-in object class because it inherits from object just like all classes do in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (6), this. (2), class. (2), this, (1)
> **Definitions:** is a  (8), is called (2), is an  (2)
> **CLI Commands:** python (3)
> **Code Identifiers:** typecheck_start (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Class methods and members
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=0)** - [Instructor] Let's finish up this chapter by examining two more kinds of methods and attributes.
>
> **[0:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=4)** We're going to take a look at class methods and static methods.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=8)** So here in my editor, I'm going to open up class_start and there's already some code filled out for the Book class.
>
> **[0:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=15)** We've already seen how the init function works and we've already learned about how instance functions work.
>
> **[0:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=20)** And we know for example that the set_title function is an instance function that sets the book's title.
>
> **[0:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=27)** And the title attribute is an instance attribute because its value is associated with each instance of the object that gets created.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=36)** So let's start with class level methods and attributes.
>
> **[0:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=40)** These are different from their instance versions because they are shared at the class level across all instances of that class.
>
> **[0:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=48)** So that might sound a little confusing.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=50)** So let's take a look at a concrete example.
>
> **[0:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=53)** Suppose we wanted to make sure that each book object was assigned a specific book type when it was created such as hardcover or paperback or an ebook.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=65)** We could define an instance attribute that enumerates these values, but since it's going to apply to all the book objects, it would make more sense to just define it once.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=75)** What I can do is create an attribute at the class level outside of any of the instance methods.
>
> **[1:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=82)** So what I'm going to do is create an attribute named BOOK_TYPES and I'm going to use all caps here to indicate that this is a class attribute and I'm going to define an enumeration or in this case a tuple.
>
> **[1:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=97)** And I'm going to say that there is hardcover, there's paperback, and there's ebook.
>
> **[1:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=107)** Then I can have the init method take a parameter named booktype.
>
> **[1:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=116)** All right.
>
> **[1:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=117)** And I can check to make sure that the given type is one of the values that the class allows.
>
> **[2:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=125)** So in my init function, I'll write if, not booktype is in Book.BOOK_TYPES, and I have to use the class name to reference this class value right here.
>
> **[2:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=143)** So if the book type is not in that tuple I'm going to raise a value error and I'm going to use a little f string here to write that booktype is not a valid book type,
>
> **[2:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=162)** otherwise I'll just simply set self.booktype equal to booktype.
>
> **[2:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=171)** All right, then I need to change my code that creates book instances.
>
> **[2:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=176)** So I'll write b1 = Book and I'll give it just a Title1 and I'll make that a hard cover.
>
> **[3:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=190)** All right.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=192)** And we'll copy and paste that and we'll make Book2, we'll make that a comic book.
>
> **[3:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=203)** Alright, so let's also add a class method that returns the book types list.
>
> **[3:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=210)** To do this, I need to create a method and use the class method decorator.
>
> **[3:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=215)** For class methods, instead of receiving an object instance as the first argument, they receive the class itself as the first argument.
>
> **[3:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=223)** So what I'm going to do is create a class method up here.
>
> **[3:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=229)** I'm going to write @classmethod and then I'm going to define the classmethod to be get_book_types.
>
> **[3:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=239)** And that takes the class as the first argument rather than self.
>
> **[4:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=244)** And I'll return the classes BOOK_TYPES.
>
> **[4:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=250)** And then let's exercise that.
>
> **[4:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=253)** So down here I'll write print Book types and then I'll call Book.get_book_types.
>
> **[4:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=267)** Okay, so let's run our updated code.
>
> **[4:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=270)** So this should cause an error right here, COMIC.
>
> **[4:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=274)** So I'm going to open this in the terminal and we will run the class.
>
> **[4:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=280)** And sure enough, you can see we print out the book types.
>
> **[4:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=282)** Right? There's HARDCOVER, PAPERBACK and EBOOK, and then we get the value error.
>
> **[4:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=286)** Oh, COMIC is not a value book type.
>
> **[4:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=288)** So let's go back and comment that out and let's try to run this again.
>
> **[4:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=293)** And now you can see that everything works.
>
> **[4:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=296)** All right.
>
> **[4:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=297)** Let's take a look at static methods.
>
> **[4:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=298)** So where instance methods work on specific instances of objects and class methods work on the entire class, static methods are different in that they don't modify the state of either the class or a specific object instance.
>
> **[5:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=313)** And I should point out here, there aren't that many great uses for static methods.
>
> **[5:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=318)** They are useful, however, for scenarios where you don't need to access any properties of a particular object or the class itself, but where it makes sense for the method to belong to the class.
>
> **[5:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=328)** So one good application of static methods is to implement a singleton design pattern.
>
> **[5:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=334)** So let's imagine that we wanted our book class to be responsible for keeping track of a list of books.
>
> **[5:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=342)** So we could create a global variable for this but it might be a better approach to encapsulate that behavior within the book class.
>
> **[5:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=349)** So what I can do, let's go ahead and close this terminal.
>
> **[5:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=354)** What I'm going to do is declare a double underscore attribute named __booklist and I'll initialize that to None.
>
> **[6:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=365)** And remember, the double underscore essentially makes this a private variable.
>
> **[6:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=368)** We saw this previously.
>
> **[6:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=370)** And then I'm going to define a static method that exposes this property to consumers of the book class.
>
> **[6:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=377)** So to create a static method, I define a method, right?
>
> **[6:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=385)** So I'll define getbooklist, and that takes no arguments, not class, not self, not anything.
>
> **[6:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=396)** And then I'm going to check to see if the book list attribute is None and then create a new list if it is.
>
> **[6:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=402)** So if Book.__booklist is equal to None, which is what it starts out as, then I'm going to write Book.__booklist is equal to an empty list.
>
> **[6:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=419)** Or if it has already been created I'll just return the existing book list.
>
> **[7:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=431)** So now let's use this new feature to add our books to a list.
>
> **[7:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=440)** Alright, so we'll write thebooks = Book.getbooklist,
>
> **[7:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=449)** and then we will write thebooks.append and we'll add book one and let's un comment book two and make that PAPERBACK so that it works.
>
> **[7:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=463)** And then we'll append b2, and then we'll print out the books.
>
> **[7:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=470)** Alright, so let's go back to the terminal and let's run this.
>
> **[7:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=478)** And you can see, oh, there's our book types and then we have our books in the book list.
>
> **[8:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=483)** And remember, we've ensured that there will only be one of these lists and that the list is contained within the overall book class's logic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), static (7), class. (6), function (4), self (3)
> **Env Vars:** book_types (3), comic (2), paperback (2), hardcover (1), ebook (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** get_book_types (2), class_start (1), set_title (1)
> **Tools:** terminal (3)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **Cross-References:** go back to (1)

#### Solution: Stocks
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=0)** - [Narrator] For this challenge, we needed to create a class to represent information about a company stock symbol.
>
> **[0:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=11)** So in my code, I've modified the stock class to override the init function and declare three properties, one each for the ticker, the price, and the company description.
>
> **[0:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=27)** And I've also defined a function named get description, which was part of the original requirements.
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=35)** And that function returns a string that combines the values of the properties in the specified order that was required.
>
> **[0:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=42)** So let's go ahead and try running this.
>
> **[0:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=44)** You can see I've got some sample test code down here for the Google stock ticker, and I'm going to test my code, and you can see that my string is being returned correctly.
>
> **[0:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=56)** So let's try another one.
>
> **[0:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=59)** Let's try IBM and let's make that a different value.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=65)** And let's make this IBM Corp.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=70)** And let's run again.
>
> **[1:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=72)** All right, and once again, you can see that that's correct.
>
> **[1:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=74)** Now, if you encountered an error in your result, try making sure that your description string exactly matches what the requirements were.
>
> **[1:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=85)** So, for example, remember that the output string had to have this colon and a space.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=91)** It had to have these two dashes and the dollar sign.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=94)** It had to have these properties in the right order.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=96)** So if I take this dollar sign out and I try to run my code again, you can see that, oh, now I'm getting this incorrect result.
>
> **[1:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=103)** So if this happened to you before you get frustrated and give up, just make sure that your string is in the right format that's required.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), override (1), this. (1)
> **CLI Commands:** make (3)
> **Env Vars:** ibm (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Inheritance and Composition

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=0)** - [Instructor] One of the core concepts of object-oriented programming is the notion of inheritance.
>
> **[0:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=5)** And in this example, we're going to see how that works in Python.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=8)** Inheritance defines a way for a given class to inherit attributes and methods from one or more super classes.
>
> **[0:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=16)** So this makes it easy to centralize common functionality and data in one place instead of having it spread out and duplicated across multiple classes.
>
> **[0:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=26)** So let's open up the inheritance_start file.
>
> **[0:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=29)** And in this example, you can see I have three classes, there's a Book, Magazine, and Newspaper, and each of one of these classes represents a type of Publication, and each of them has a set of attributes that are relevant to that Publication type.
>
> **[0:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=45)** So Books have a title and a price along with the author's name and the number of pages.
>
> **[0:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=54)** A Newspaper also has a title and a price, but it has a publisher instead of a single author and it has a Publication period because they're published on a Periodical basis.
>
> **[1:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=66)** Magazines are the same, title, price, and they also have a Publication period and a publisher.
>
> **[1:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=73)** And you can also see further down in the file, we have some code to create a few sample objects and then access some data on them.
>
> **[1:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=81)** So before we do anything else, let's just go ahead and open up the terminal.
>
> **[1:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=85)** And let's run what we currently have.
>
> **[1:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=89)** And you can see that, when we do this, I'm printing out the author of Book one, the publisher of Newspaper one, and then the price of each, okay.
>
> **[1:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=100)** And so at the moment, each of these classes is a standalone implementation, so let's hide the terminal.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=109)** You can see that each one is its own class, but there's a considerable amount of duplication among the data that each class holds.
>
> **[1:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=118)** So for example, all three classes have attributes for title and price, and the Newspaper and Magazine classes also have the same attributes for period and publisher.
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=131)** We can improve the organization of these classes and make it easier to introduce new classes by implementing some inheritance and class hierarchy.
>
> **[2:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=140)** So let's start with the most obvious duplication, which is the title and price attributes.
>
> **[2:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=146)** So what we could do is define a class named Publication.
>
> **[2:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=150)** So let's make a class called Publication.
>
> **[2:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=157)** Okay.
>
> **[2:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=159)** And then have that class define those common attributes.
>
> **[2:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=164)** So we'll put init here and we'll have the Publication class contain the title and price.
>
> **[2:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=176)** And so that means that, on this object, we have to set title equal to title, oops, and self.price equal to price.
>
> **[3:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=190)** All right.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=192)** So now we can fix the Book class and have it inherit from the Publication class.
>
> **[3:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=198)** To do that, inside these parentheses, I'm going to write Publication.
>
> **[3:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=205)** Okay, and then we initialize the super class using the super function.
>
> **[3:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=214)** So I'm going to create super and that's a function.
>
> **[3:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=218)** And then I'm going to call the init with title and price.
>
> **[3:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=228)** And Book no longer has to define title and price in its class because they're now defined in Publication.
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=235)** So I only need to keep the author and pages.
>
> **[3:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=239)** Now, we could do the same thing with Newspaper and Magazine classes, but there's some duplication there too.
>
> **[4:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=246)** So both of these classes have period and publisher attributes, so that's a pretty good hint that we can collect those in a super class also.
>
> **[4:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=255)** So I'm going to create another class named Periodical.
>
> **[4:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=263)** And Periodical is going to inherit from Publication.
>
> **[4:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=271)** And of course, we'll have to create the init for Periodical as well.
>
> **[4:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=278)** And that will take self, title, price, period, and publisher.
>
> **[4:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=290)** And we'll call the super class for title and price.
>
> **[5:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=301)** And then we'll have the Periodical class to find the period and the publisher.
>
> **[5:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=314)** All right, so now we have a class hierarchy with Publication at the top, which Book inherits from.
>
> **[5:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=323)** Then Periodical, which inherits from Publication, and then we're going to change Newspaper and Magazine to inherit from Periodical.
>
> **[5:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=336)** So Magazine will inherit from Periodical and so will Newspaper.
>
> **[5:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=348)** And then in the init function for each, we call the super class.
>
> **[5:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=356)** And remember, in the case of Periodical, it takes all of these so that it's going to be, let's see.
>
> **[6:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=366)** That's going to be title, price, period, and publisher.
>
> **[6:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=376)** There we go.
>
> **[6:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=376)** And now we can take off the ones here and we can copy this and paste it here and also take off this guy.
>
> **[6:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=386)** All right.
>
> **[6:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=388)** Okay, so now we should be able to run our original code, which we haven't touched, notice, right, we're still creating the Book, Newspaper, Magazine the same way.
>
> **[6:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=398)** But what we've done is we've gathered all of the duplicated code into super classes so that each one of these classes, Book, Magazine, Newspaper, can take advantage of the fact that they already exist in a super class.
>
> **[6:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=412)** So let's bring the terminal back up and let's run again.
>
> **[6:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=418)** And sure enough, you can see we get the same output as we had before.
>
> **[7:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=421)** So we're getting the same results, but with much better code organization, which is one of the main benefits of inheritance.
>
> **[7:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=427)** I can now add properties that are specific to each kind of Publication in just one place.
>
> **[7:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=432)** And I only have one place to edit them if I want to change the names of any of these attributes.

> [!info]- Semantic Content
>
> **Code Keywords:** super (9), let (9), class. (3), function (3), self (2)
> **CLI Commands:** make (2), python (1), find (1)
> **Tools:** terminal (3), notion (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** inheritance_start (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Abstract base classes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=0)** - [Instructor] Now that we've seen how inheritance works in Python, let's move on to a related topic called abstract base classes.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=7)** There's a fairly common design pattern in programming where you want to provide a base class that defines a template for other classes to inherit from but with a couple of twists.
>
> **[0:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=17)** First, you don't want consumers of your base class to be able to create instances of the base class itself because it's just intended to be a blueprint or a place where you collect some common attributes.
>
> **[0:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=30)** And second, you want to enforce the constraint that there are certain methods in the base class that have to be implemented in subclasses.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=39)** And this is where abstract based classes become really useful.
>
> **[0:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=42)** So let's open up abstract_start.
>
> **[0:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=45)** And let's imagine that we're building a drawing program that lets the user create different kinds of two dimensional shapes and we want the program to be extensible so that new shape types can be added.
>
> **[0:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=55)** You can see here I've defined a base class called graphic shape and it has a function called calc area which is empty, right?
>
> **[1:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=63)** It has no base implementation.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=65)** I have two subclasses, circle and square that inherit from graphic shape.
>
> **[1:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=71)** So the scenario here is that we want each shape to inherit from graphic shape.
>
> **[1:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=78)** We want to enforce that every shape implements the calc area function for itself.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=83)** And we want to prevent the graphic shape class itself from being instantiated.
>
> **[1:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=89)** Because when you're using the drawing program you're not creating a graphic shape you're creating a specific type of shape, right?
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=96)** A circle, a square, a triangle, and so on.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=98)** So no one's ever going to instantiate graphic shape by itself.
>
> **[1:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=102)** And we want to prevent that from happening.
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=104)** So if I run the code as it is, and you can see I have some sample code down here that exercises our code.
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=111)** So I'm creating a graphic shape and I'm creating a circle and square and calling calc area on each one.
>
> **[1:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=118)** So let's run our code as it currently stands.
>
> **[2:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=122)** And you can see that none of those constraints are currently enforced.
>
> **[2:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=126)** I can instantiate the graphic shape class, calc area if circle and square don't return anything, right?
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=131)** So let's go ahead and fix that.
>
> **[2:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=134)** Let's hide the terminal.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=137)** What I'm going to do is import the ABC module from the standard library.
>
> **[2:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=142)** So from ABC, I'm going to import ABC, uppercase which are abstract base classes.
>
> **[2:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=150)** And I'm going to import abstract method and we'll get to that in just a moment.
>
> **[2:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=157)** So first I'm going to have graphic shape inherit from the ABC class.
>
> **[2:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=163)** Then I'm going to use the abstract method decorator on the calc area function.
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=174)** Alright?
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=174)** And I'll leave everything else pretty much by itself.
>
> **[2:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=177)** So this indicates to Python that there's no implementation in the base class and each subclass has to override this method.
>
> **[3:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=185)** So let's go back to the terminal and let's try to run the code again.
>
> **[3:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=188)** And now you see I'm getting an error, right?
>
> **[3:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=191)** It says can't instantiate abstract class graphic shape right?
>
> **[3:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=195)** So let's comment out the line where instantiating the graphic shape.
>
> **[3:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=199)** So we've solved that problem.
>
> **[3:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=200)** I can no longer instantiate graphic shape.
>
> **[3:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=203)** Let's try running it again.
>
> **[3:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=206)** Okay, so now I'm getting another error.
>
> **[3:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=208)** And this error is because my subclass didn't implement the calc area method.
>
> **[3:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=213)** So I need to fix that.
>
> **[3:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=215)** So let's go back to the code.
>
> **[3:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=217)** And in the circle, let's add def calc area.
>
> **[3:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=224)** And I'm going to return 3.14 times self radius squared.
>
> **[3:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=239)** And in the square I'll add calc area and we're going to return self.side times self.side.
>
> **[4:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=254)** Okay, one more time.
>
> **[4:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=255)** Let's run the updated code.
>
> **[4:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=258)** Let's clear the terminal first.
>
> **[4:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=261)** Okay, now when I run the updated code you can see that everything is working.
>
> **[4:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=264)** So abstract based classes can be a very useful tool for enforcing a set of constraints among the consumers of your classes.
>
> **[4:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=271)** So it's worth taking the time to experiment with these and understand their benefits.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), abstract (7), function (3), self (3), implements (1)
> **Env Vars:** abc (4)
> **Tools:** terminal (3)
> **CLI Commands:** python (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1), sample code (1)
> **Code Identifiers:** abstract_start (1)
> **Versions:** 3.14 (1)

#### Using multiple inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=0)** - [Instructor] Unlike some other popular programming languages, Python lets you define classes that can inherit more than one base class.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=7)** This is called multiple inheritance and while it can be a useful tool, it can also cause a lot of problems if you don't use it carefully.
>
> **[0:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=15)** So let's open up the multiple_start example file and we'll see how to use it the right way.
>
> **[0:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=21)** Here in my code I have two classes, A and B, each of which define a property.
>
> **[0:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=25)** So prop1 is in class A and prop2 is in class B.
>
> **[0:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=29)** And then I have a third class named C which lists both A and B as classes that it inherits from, separated by a comma and this is how you inherit from more than one class.
>
> **[0:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=44)** So let's go ahead and add a method to class C to print out the properties.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=50)** We'll call it showprops.
>
> **[0:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=56)** And we'll print out self.prop1 and self.prop2.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=65)** And then let's call that method after the C object is created.
>
> **[1:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=72)** And remember, prop1 and prop2 are going to be inherited from both A and B.
>
> **[1:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=76)** Okay, so let's run the code.
>
> **[1:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=81)** Bring up the terminal and we'll run.
>
> **[1:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=86)** Okay, so we have prop1 and prop2, so everything seems fine.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=90)** Ah, but what happens when each of the two super classes define the same attribute?
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=96)** Let's add an attribute to each one and see.
>
> **[1:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=99)** So I'm going to hide the terminal for a second.
>
> **[1:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=102)** I'm going to create self.name and give this the name Class A
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=111)** and I'm going to create self.name in Class B and give that the value of Class B.
>
> **[1:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=119)** Alright, and then let's update the showprops method in class C to show our name.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=129)** Okay, let's bring the terminal back up and let's run the code again.
>
> **[2:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=134)** And, okay, so it looks like class A is the winner somehow.
>
> **[2:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=140)** But why is that?
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=141)** When you call a method or access an attribute in Python, the interpreter uses something called the method resolution order to look it up in the class.
>
> **[2:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=152)** The lookup starts in the current class, in this case class C, which doesn't define the name property.
>
> **[2:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=160)** Then Python looks in the super classes in the order that they are defined from left to right.
>
> **[2:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=166)** So since class A is listed first, that's why we're seeing the Class A string in the output.
>
> **[2:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=172)** So watch this, if I change the order, if I make B first and then save.
>
> **[2:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=177)** Now if I run this again, ah, now we see class B in the output.
>
> **[3:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=183)** You can actually inspect the method resolution order by looking at the special class attribute called __mro.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=192)** So let's go ahead and add that.
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=193)** Let's do C. Let's do print.
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=196)** C.__mro__.
>
> **[3:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=205)** Okay, so let's run this again.
>
> **[3:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=206)** I'll clear it.
>
> **[3:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=209)** Oh, whoops.
>
> **[3:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=213)** I need capital C.
>
> **[3:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=215)** There we go.
>
> **[3:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=216)** It's a class attribute.
>
> **[3:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=219)** Okay, let's run it again.
>
> **[3:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=220)** Alright, so when I run that, you can see that the resolution order is first class C then class B, then class A and then all the way up to the base object class which is the super class for all objects in Python.
>
> **[3:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=233)** And just to make sure that we're doing this correctly, let's change our order back.
>
> **[3:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=238)** So if I do A and then B and I run this again, now you can see it's class C first and now A and B have switched places.
>
> **[4:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=248)** So this added complexity is one of the main reasons why you don't see a whole lot of multiple inheritance in real world projects.
>
> **[4:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=256)** But there is a place where it's useful, and that's in implementing a programming construct called interfaces.
>
> **[4:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=262)** And we'll see how that works in a separate video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), self (4), class. (3), super (3), from, (1)
> **CLI Commands:** python (4), make (2)
> **Tools:** terminal (3)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** multiple_start (1)
> **Speakers:** - [instructor] (1)

#### Interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=0)** - [Instructor] In this example, we're going to see how to use a combination of multiple inheritance and abstract base classes to implement a type of programming feature called an interface.
>
> **[0:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=10)** Some languages like C# and Java provide this feature as a built-in part of the language, but Python doesn't have explicit language support for this feature.
>
> **[0:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=21)** You can think of an interface as a kind of promise.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=24)** By implementing an interface, a particular class makes a promise, or a contract, as it's often called in software engineering, to provide a certain kind of behavior or capability.
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=35)** So let's open up our interface_start example.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=39)** And you can see that this is a simplified version of the abstract base class example that we used earlier.
>
> **[0:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=45)** So I have my GraphicShape and just my Circle.
>
> **[0:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=49)** Suppose we wanted our shape objects to be able to provide the ability to represent themselves as JSON.
>
> **[0:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=58)** Now we could just make that a part of the GraphicShape base class, but if we had a variety of other objects in our program that we also wanted to have that function, then we would need to add that to each of those base classes as well.
>
> **[1:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=72)** And that's just a lot of needless code duplication.
>
> **[1:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=76)** What we can do instead is, create another abstract base class and we'll call it JSONify.
>
> **[1:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=82)** So I'll make a class called JSONify, and it will inherit from the abstract base classes.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=91)** And then we'll have this class define a single abstract method.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=96)** So I'll add a method called, so I'll put the abstract method in front of it, and it's going to be called toJSON, and it'll just be an empty method for now.
>
> **[1:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=112)** Now again, notice that the method does not provide any implementation itself.
>
> **[1:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=116)** It just defines the name of the method.
>
> **[1:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=119)** We can then add this new class to the definition of the Circle class by putting it in the inheritance list.
>
> **[2:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=127)** So remember, this has the effect of requiring that the Circle class has to override and implement the toJSON abstract method.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=137)** Otherwise, it's an error.
>
> **[2:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=139)** In fact, let's go ahead and bring up the terminal, and let's run.
>
> **[2:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=148)** And you can see, sure enough we're not implementing toJSON, so we're getting an error, all right?
>
> **[2:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=154)** Let's go ahead and implement that function then.
>
> **[2:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=161)** And what I'm going to do is return a string, and I'm going to make that an f string.
>
> **[2:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=167)** And so it's going to return a JSON string, so I'm going to have it include the name of the object, well in this case it's Circle, and then I'm going to call str on self.calcArea.
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=193)** And let me make sure that everything is balanced.
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=196)** Looks like it is.
>
> **[3:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=199)** And you know what?
>
> **[3:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=200)** Just to make this easy to read, let's just use single quotes.
>
> **[3:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=205)** All right?
>
> **[3:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=207)** And then I'll call that function down here in the exercise code.
>
> **[3:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=211)** So I'll print out c.toJSON.
>
> **[3:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=216)** All right, and now let's bring up our terminal again, and let's run this.
>
> **[3:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=225)** All right, and now you can see the results of the calcArea and the toJSON functions.
>
> **[3:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=231)** So what we've essentially done is created a small focus class that we can now use whenever we want another class to be able to indicate that it knows how to represent itself as JSON.
>
> **[4:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=243)** We didn't have to modify the base class in order to do this either, which gives us the flexibility to apply this new class anywhere it's needed.
>
> **[4:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=250)** Interfaces are really useful for declaring that a class has a capability that it provides.
>
> **[4:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=256)** And even though Python doesn't have explicit language support for interfaces, it's flexible enough to be able to implement it with abstract base classes and multiple inheritance.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (8), let (8), interface (3), function (3), class, (1)
> **Code Identifiers:** tojson (5), calcarea (2), interface_start (1)
> **CLI Commands:** make (5), python (2)
> **Env Vars:** json (3)
> **Tools:** terminal (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding composition
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=0)** - [Instructor] Earlier in the chapter, we learned about how Python implements the concept of inheritance in order to create class hierarchies.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=7)** In this example, we'll see how we can use a concept called composition to create complex objects out of simpler ones.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=13)** You might recall that inheritance is an is type of relationship.
>
> **[0:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=18)** Here in this class diagram, a book is a publication because it inherits from the publication base class and picks up all the attributes and methods from that base class.
>
> **[0:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=29)** Composition works a little bit differently.
>
> **[0:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=31)** When using composition, we build objects out of other objects, and this model's more of a has relationship than an is relationship.
>
> **[0:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=40)** So in the diagram on the right, the book object has an author object which contains information about the author rather than defining all of the author-related information directly in the Book class.
>
> **[0:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=53)** This type of model lets us extract distinct ideas and put them into their own classes.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=57)** So inheritance and composition, by the way, are not exclusive.
>
> **[1:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=61)** You typically combine both depending on what your application's needs are.
>
> **[1:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=65)** So let's apply this concept in some real code to see how it works.
>
> **[1:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=69)** So here in the editor, let's open up composition_start.
>
> **[1:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=74)** So here in my composition example, I've defined a book class that's a little different from the one we've been using so far.
>
> **[1:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=82)** There's the title and the price, along with the author's first and last name and an attribute to hold a list of chapter information.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=90)** There's also a method to add chapters to the book and we have some code to create a book and add some chapters.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=98)** Now, this particular class definition is all fine and good but it's kind of monolithic, right?
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=104)** There's some pieces of information, like the author and maybe the chapter information that might make sense to treat as separate entities.
>
> **[1:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=113)** And it's not hard to imagine a scenario where we might want to work with a group of author information about specific chapters, for example.
>
> **[2:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=122)** We can use composition to separate these discrete pieces of information from the overall book object.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=129)** So first, let's extract the author information into its own class and we'll have the Author class contain the first name and the last name.
>
> **[2:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=145)** And so we'll just set those as properties.
>
> **[2:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=151)** And let's give that class a nice string representation.
>
> **[2:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=156)** So what we're going to do is override the built-in str function
>
> **[2:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=166)** and this will return a string representation of the object.
>
> **[2:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=170)** And we'll just put in self.fname here and then self.lname.
>
> **[2:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=179)** All right?
>
> **[3:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=180)** And then we'll modify the book class to take an author object as the argument that defaults to none.
>
> **[3:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=187)** So let's go up here and take out authorfname and authorlname
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=196)** and put in author equals none as the default value.
>
> **[3:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=202)** And then we update the book's author property to instead refer to the author object.
>
> **[3:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=214)** So now we've created a relationship where a book object has an author associated with it, instead of keeping the implementation details of the author data wrapped up within the book class.
>
> **[3:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=224)** We can do the same thing with chapter information.
>
> **[3:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=227)** So let's create a separate class called Chapter and once again, we'll define the init function for this.
>
> **[4:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=241)** And the chapter will have a name and it will have a page count.
>
> **[4:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=247)** And we'll set self.name equals to name and self.pagecount equal to pagecount.
>
> **[4:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=259)** All right.
>
> **[4:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=260)** And now, of course, we can modify the book's addchapter method to take a chapter object instead of the name and pages.
>
> **[4:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=272)** And then instead of adding the name and pages tuple, we'll just go ahead and add the chapter.
>
> **[4:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=278)** And so here again, we've created a relationship where a book has a collection of chapter objects.
>
> **[4:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=285)** We could even add a method to calculate the number of pages in the book.
>
> **[4:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=291)** So let's do that.
>
> **[4:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=294)** Let's add getbookpagecount, and we'll have a result variable.
>
> **[5:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=303)** And then for each chapter in self.chapters, let's increment result by the pagecount of that chapter
>
> **[5:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=316)** and then we return the result.
>
> **[5:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=319)** All right, so now let's go clean up the code that uses these classes.
>
> **[5:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=323)** So for now, we create a author object for the book constructor.
>
> **[5:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=330)** So let's have auth equal be Author, and that's going to be Leo.
>
> **[5:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=337)** Whoops. There we go.
>
> **[5:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=340)** And Tolstoy.
>
> **[5:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=344)** And then we add that author object here when we create the book.
>
> **[5:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=353)** And now we addchapter objects to the book instead of chapter arguments, like strings and numbers.
>
> **[6:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=360)** So that's easy enough to fix.
>
> **[6:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=361)** We'll just simply create a Chapter constructor here and do the same thing for each one.
>
> **[6:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=375)** All right.
>
> **[6:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=380)** Okay.
>
> **[6:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=382)** And now we get some separation of responsibilities among the classes.
>
> **[6:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=386)** So for example, printing the full name of the author is done within the author class.
>
> **[6:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=392)** So let's go ahead and print that out.
>
> **[6:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=394)** Print bq.author and calculating the book size is done by using the data in the chapter class.
>
> **[6:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=404)** So we'll print b1.getbookpagecount.
>
> **[6:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=411)** All right, time to bring up the terminal and let's run this.
>
> **[7:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=421)** And oh, whoops, looks like I've got an error in there.
>
> **[7:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=426)** And that's because it looks like, oh yes, it's not self.name, it's self.fname.
>
> **[7:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=430)** Good catch there, Python.
>
> **[7:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=432)** Let's try this again.
>
> **[7:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=434)** There we go.
>
> **[7:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=435)** Okay, so you can see that the title is unchanged but now the author name is printed using the Author class's str override function.
>
> **[7:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=444)** And we can ask the book how many pages it is by adding up each chapter's page counts.
>
> **[7:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=449)** So we've taken a monolithic class definition and made it more extensible and flexible by composing it from simpler class objects, each of which is responsible for its own features.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), self (7), class. (5), function (3), override (2)
> **CLI Commands:** python (2), make (1)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** composition_start (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Solution: Stocks and bonds
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=0)** - [Instructor] All right, let's review my solution to this challenge.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=7)** For this challenge, we needed to create a class hierarchy to represent both stocks and bonds and use inheritance along with an abstract base class.
>
> **[0:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=18)** So in my code, I used the asset base class to hold the price property, which is common to both stock and bond objects.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=28)** And then I have the stock and bond class definitions.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=33)** They use the asset class as their parent class, and they define their own properties for the specific information to that type of asset.
>
> **[0:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=41)** So for stocks, we have the ticker symbol and the company name.
>
> **[0:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=47)** For bonds, we have the name, duration, and interest rate.
>
> **[0:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=52)** And we also needed to make sure that the asset class itself could not be instantiated, and we needed to require that subclasses override the get description function.
>
> **[1:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=62)** So that calls for using an abstract base class with an abstract method.
>
> **[1:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=69)** And you can see up here I've imported both ABC, and abstract method from the ABC module, asset inheritance from the abstract based class, and implements an abstract method, which means that both of my subclasses are required to override get description, which they both do.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=90)** All right, so let's go ahead and run this code with our test code.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=95)** And you can see that our test code for the company information, we're going to use the Microsoft ticker.
>
> **[1:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=100)** And for the bond we're going to use the 30-year treasury.
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=104)** And here's our test code that instantiates both stocks and bonds.
>
> **[1:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=107)** So when I run this, you can see that we get the correct result.
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=111)** And again, remember if you got an error here in the formatting of the string, make sure that the get description strings that you're returning match the specifications exactly.
>
> **[2:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=121)** Because if you're forgetting a space or you're forgetting a character, that's going to produce an incorrect result.
>
> **[2:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=128)** All right, well that is my solution.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=129)** So how does it compare to yours?

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (6), let (2), class, (2), override (2), class. (1)
> **CLI Commands:** make (2)
> **Env Vars:** abc (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. "Magic" Object Methods

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What are magic methods?
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=0)** - [Instructor] In this chapter, we're going to spend some time learning about Python's so-called "magic" methods, which are a set of methods that Python automatically associates with every class definition.
>
> **[0:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=11)** Your classes can override these methods to customize a variety of behavior and make them act just like built-in Python classes.
>
> **[0:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=20)** There are quite a few of these methods and I'm not going to cover all of them.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=24)** Instead, I'm going to demonstrate the ones that are most useful and commonly employed in code that you'll run across.
>
> **[0:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=30)** Using these methods, you can customize how your objects are represented as strings, both for display to the user and for debugging purposes.
>
> **[0:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=38)** You can control how attributes are accessed on an object both for when they are set and when they're retrieved.
>
> **[0:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=45)** You can add capabilities to your classes that enable them to be used in expressions such as testing for equality and other comparison operations like greater than or less than.
>
> **[0:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=55)** And then finally, we'll see how to make an object callable just like a function and how that can be used to make code more concise and readable.
>
> **[1:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=64)** Features like these are what gives Python its flexibility and power, and in this chapter we'll see examples of how they can be put to good use.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (3)
> **Code Keywords:** override (1), finally, (1), function (1)
> **Analogies:** just like (2), such as (1)
> **Speakers:** - [instructor] (1)

#### String representation
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=0)** - [Instructor] The first set of magic methods we're going to learn about are the ones that Python uses to generate string representations of objects.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=7)** And we saw a little peek of this in the prior chapter when we worked on object composition.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=13)** Let's open up magic str start, and you can see that I have my book class defined with some properties along with a couple of statements to create book objects.
>
> **[0:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=23)** There are two magic string functions, str and repr.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=28)** The str function is used to provide a user-friendly string description of the object and is usually intended to be displayed to the user.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=36)** The repr function is used to generate a more developer facing string that ideally can be used to recreate the object in its current state.
>
> **[0:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=44)** It's also commonly used for debugging purposes so it gets used a lot to display detailed information.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=50)** These functions get invoked on an object in a variety of ways.
>
> **[0:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=54)** For example, when you call the print function and pass in the object or when you use the str and repr casting functions that's when these magic methods get run.
>
> **[1:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=64)** So let's run our code as it currently is before we override these functions you can see that I'm creating two book objects and then printing them out here at the bottom of the code.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=75)** So let's open up our terminal and let's go ahead and run Magic str.
>
> **[1:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=84)** And when I do this, you can see that I get these vague strings that identify the class and the location in memory, which you know isn't really very useful.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=95)** So let's go ahead and add the str function.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=98)** I'm going to hide the terminal.
>
> **[1:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=101)** So let's override str function by putting it in.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=105)** And that doesn't take any arguments, just the object itself.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=109)** And we're going to return an F string that contains self.title by self.author
>
> **[2:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=123)** and costs self.price.
>
> **[2:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=128)** Alright, let's bring that terminal back up again.
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=131)** Let's try this again.
>
> **[2:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=134)** And, oh, that's much better.
>
> **[2:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=135)** Look at the comparison between those two.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=137)** You've got nice strings down here instead of these vague object strings, right?
>
> **[2:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=142)** This shows me all the information I want to see about each book.
>
> **[2:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=146)** Okay, let's add the repr function.
>
> **[2:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=153)** And repr also returns the string but it's going to be formatted slightly different.
>
> **[2:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=160)** I'm going to have just show all the attributes.
>
> **[2:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=162)** Title equals self.title, author is self.author and price equals self.price.
>
> **[3:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=182)** Okay, and let's also add a couple more function calls to convert the book objects to strings by using str and reper directly.
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=193)** So we'll print str B1 and then we'll print repr of B2.
>
> **[3:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=206)** Alright, and now let's run the code again.
>
> **[3:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=212)** So now you can see that when I print the objects or call str directly the str function gets used while the repr function call uses the repr result instead.
>
> **[3:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=223)** So str and printing is what gives you the str function result.
>
> **[3:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=229)** If you call repr directly then that's what invokes this override right here.
>
> **[3:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=234)** Each of these functions is totally optional for you to override, but it's usually a pretty good idea to at least define the repr function for classes that you create in order to make debugging easier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (11), self (6), override (4), pass (1)
> **Tools:** terminal (3)
> **CLI Commands:** python (1), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Equality and comparison
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=0)** - [Speaker] Plain objects in Python by default don't know how to compare themselves to each other, but we can teach them how to do so by using the equality and comparison magic methods.
>
> **[0:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=11)** So let's open up magic EQ start.
>
> **[0:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=15)** And once again, you can see I have my book class defined with some attributes, and we've got a few variables down here that we use to create and hold some book objects.
>
> **[0:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=26)** B1 and B3 both contain the same information, but watch what happens when we try to compare them to each other.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=33)** So I'm going to print out B1 double equals B3.
>
> **[0:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=38)** Now again, remember same values in the attributes, right?
>
> **[0:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=41)** But watch what happens.
>
> **[0:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=43)** I'm going to open the terminal and run.
>
> **[0:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=51)** You can see that the result is false, but wait a second they have the same data, same title, right?
>
> **[0:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=55)** Same author, same price.
>
> **[0:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=58)** Even though all the attributes are the same, the result is false.
>
> **[1:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=62)** And the reason this happens is because Python doesn't do an attribute by attribute comparison on objects.
>
> **[1:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=68)** It just compares two different instances to each other and sees that they're not the same object in memory and therefore they're not the same.
>
> **[1:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=76)** Python's flexibility gives us an easy object oriented way of addressing this problem.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=83)** The magic method named double underscore EQ, gets called on your object when it is compared to another object.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=90)** So let's go ahead and add that.
>
> **[1:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=97)** And that takes the self and it also takes value.
>
> **[1:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=102)** Or we can call it whatever you want.
>
> **[1:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=103)** You can call it the other object.
>
> **[1:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=104)** Up to you.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=105)** So to see if two books are equal, we can just compare the attributes of each one.
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=111)** So let's return whether self.title is equal to value.title, and self.author is the same as value.author, and self.price is equal to value.price.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=141)** We should also make sure that we throw in an exception if we're past an object that is not a book to compare against.
>
> **[2:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=148)** So if not is instance, and we learned about is instance earlier remember.
>
> **[2:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=156)** So if value is not a book, then let's raise a value error and say that we can't compare book to a non-book.
>
> **[2:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=173)** Okay.
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=174)** So now that we have that code in place, we can perform the comparison again.
>
> **[2:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=179)** So now let's try adding a case where we know they're not the same.
>
> **[3:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=186)** So books B1 and B2 are not the same.
>
> **[3:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=188)** So this one B1 to B3 should be true.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=192)** B1 to B2 should be false.
>
> **[3:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=194)** Let's bring up our terminal again and let's run it.
>
> **[3:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=199)** And now you can see that yes B1 and B3 are the same, and B1 and B2 are not the same.
>
> **[3:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=205)** And let's see what happens when we try to compare a book against a non-book object.
>
> **[3:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=211)** Let's print out B1 is equal to the life, the universe, and everything, or as is more commonly known, 42.
>
> **[3:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=222)** And you can see that we now get a value error exception that says can't compare a book to a non-book.
>
> **[3:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=229)** All right, let's go ahead and comment that out.
>
> **[3:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=233)** All right.
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=235)** So, by overriding the underscore underscore EQ function, we've essentially added the ability to test for equality to our book object.
>
> **[4:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=245)** And we can also perform other kinds of comparisons by overriding the corresponding magic method.
>
> **[4:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=250)** So let's add the ability to perform comparisons to our book class, and in this case where we want to be able to perform a greater than or equal to comparison, like this.
>
> **[4:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=261)** Suppose I wanted to be able to say, "Hey, is B2 greater than or equal to B1?"
>
> **[4:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=269)** I also want to be able to say, "Is B2 less than B1?"
>
> **[4:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=276)** So there are magic methods to correspond to all of the different kinds of logical operators.
>
> **[4:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=283)** Now that's a lot of methods so I'm not going to demonstrate all of them, but let's go ahead and add support for both of these.
>
> **[4:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=291)** Okay, let's hide our terminal.
>
> **[4:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=295)** All right, so let's override.
>
> **[4:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=299)** Underscore underscore GE for greater than or equal to.
>
> **[5:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=309)** And once again, I'm going to raise exception if it's not a book.
>
> **[5:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=317)** Otherwise we have to have some way of saying, you know, is this book greater than or equal to the other book?
>
> **[5:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=325)** Just to keep things simple, I'm going to return if self.price is greater than or equal to value.price.
>
> **[5:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=333)** So we're going to compare ourselves to the other book, and we'll use price as the comparison and we'll do the same thing for less than.
>
> **[5:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=340)** So I'll copy this code and paste it, and just change this to underscore underscore LT.
>
> **[5:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=349)** You might have guessed there's also an LE for less than or equal to, right?
>
> **[5:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=353)** And in addition to GE, there's GT for greater than.
>
> **[5:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=357)** So there's a whole bunch of these and for less than we'll just simply change this to be the less than sign.
>
> **[6:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=366)** Okay, so now let's run the code, because we've added the comparison operators down here.
>
> **[6:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=374)** So let's bring our terminal back up and clear it.
>
> **[6:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=378)** And just to keep the output pretty let's comment out the previous examples.
>
> **[6:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=385)** All right, let's run this.
>
> **[6:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=387)** And sure enough, B2 is not greater than or equal to B1, right?
>
> **[6:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=393)** 'Cause the price 29.5 is not greater than 39.95.
>
> **[6:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=399)** That's correct.
>
> **[6:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=400)** B2 is less than B1.
>
> **[6:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=405)** Oh, I made a mistake that should be less than, there we go.
>
> **[6:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=413)** Let's run it again.
>
> **[6:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=414)** And you can see that now, yes, 29.95 is in fact less than 39.95.
>
> **[7:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=420)** So what's really neat about this is now that we've added the less than calculation support we automatically gain the ability for our books to be sortable.
>
> **[7:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=430)** So let's see how that works.
>
> **[7:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=432)** Inside the terminal.
>
> **[7:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=433)** Let's make a quick list of our book objects in an order that we know is not sorted.
>
> **[7:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=438)** So I'll have books and I'll make a list, and I'll do B1, and B3, and B2, and B4.
>
> **[7:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=446)** So these are not sorted in order of price.
>
> **[7:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=449)** You can see that that's the attribute that we're using to calculate whether something is less than or greater than or equal to.
>
> **[7:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=455)** All right, so the built-in sort function uses the less than operator to perform sorting.
>
> **[7:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=461)** So now we can do this, books.sort, and then we can print out.
>
> **[7:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=470)** I'll use a comprehension here.
>
> **[7:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=473)** We'll print out book title for each book in books.
>
> **[8:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=480)** All right, so let's bring our terminal back up and let's clear it.
>
> **[8:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=489)** And oh, let's comment out the previous example.
>
> **[8:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=493)** All right, so let's run our code.
>
> **[8:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=498)** And now you can see that our books are all sorted from low to high based on price.
>
> **[8:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=506)** So "Kill a Mockingbird" should come first, 'cause that's 24.95.
>
> **[8:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=509)** Then "Catcher in the Rye."
>
> **[8:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=509)** Yeah, that's 29.
>
> **[8:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=511)** And then "War and Peace" come next, because those are both 39.95.
>
> **[8:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=515)** So like I said, there's a lot of these methods you can implement in your classes and they're documented in the data model documentation at this link.
>
> **[8:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=523)** So if you go to this page in the Python documentation and click on special method names, you can scroll through and read all of these on your own time and at your own pace.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), self (5), raise (2), function (2), this. (2)
> **CLI Commands:** python (4), make (3)
> **Versions:** 39.95 (3), 29.5 (1), 29.95 (1), 24.95 (1)
> **Tools:** terminal (6)
> **UI Navigation:** open the (1), go to (1), click on (1)
> **Speakers:** - [speaker] (1)

#### Attribute access
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=0)** - [Instructor] Python's Magic methods also give you complete control over how an object's attributes are accessed.
>
> **[0:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=6)** Your class can define methods that intercept the process anytime an attribute is set or retrieved.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=13)** So here in chapter 3, let's open up the magic attributes start and let's see how this works.
>
> **[0:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=20)** So here in the code, I have my book class which defines some attributes and it also overrides the str function that we learned about earlier.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=28)** So let's start off by seeing how we can control when an attribute is retrieved.
>
> **[0:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=34)** Python lets us define a method called underscore underscore get attribute, which is called whenever the value of an attribute is retrieved.
>
> **[0:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=44)** So let's add that.
>
> **[0:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=49)** Okay.
>
> **[0:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=50)** And I'll get rid of some of this extraneous stuff in here.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=57)** Alright.
>
> **[0:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=58)** This gives us the opportunity to perform any operations on the value before it is returned.
>
> **[1:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=64)** So, for example, you can see that we have an internal attribute here named discount.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=70)** So let's imagine that we wanted to automatically apply the discount whenever the price attribute is retrieved.
>
> **[1:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=77)** So first, we can check the name argument to see which attribute is being accessed and make sure it's the price one.
>
> **[1:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=85)** So let's go ahead and add if name is equal to price.
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=93)** Okay, now here's where things get a little tricky.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=96)** Since we are in the function that gets called when and attribute is accessed, we can't access an attribute in here.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=105)** Otherwise, we'll just keep triggering this function over and over again and it will eventually crash.
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=111)** So what we need to do is get the value of the price attribute by calling the super class version of get attribute.
>
> **[2:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=120)** So what I'm going to do is make a variable named P and I'm going to call the super classes version of get attribute, and I'm going to ask for price.
>
> **[2:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=132)** And I'll do the same thing to get the discount.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=141)** And then I'm going to return P, the price minus the price times the discount.
>
> **[2:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=150)** And if we're not operating on the price attribute, then I'm going to just simply call the super class' get attribute so everything works normally and I don't break anything.
>
> **[2:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=161)** So I'm just going to call return and I'm going to call the super class get attribute with whatever name I was given.
>
> **[2:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=171)** So this code executes, if I'm looking for the price and any other attribute will go through the normal process.
>
> **[2:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=179)** So let's try setting the price and then printing out the value of the book.
>
> **[3:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=184)** All right, so, let's do b1.price is equal to 38.95 and then we'll print b1.
>
> **[3:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=198)** And remember, print b1 because I've overridden str will give me a nice string to look at.
>
> **[3:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=204)** So let's open up our terminal.
>
> **[3:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=209)** And let's run magic attribute start.
>
> **[3:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=213)** And sure enough you can see that even though I set the price to 38.95, I'm getting a discounted value of 35.005 here.
>
> **[3:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=222)** And the other attributes are unaffected, right?
>
> **[3:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=225)** You can see that War and Peace and the author, those were not affected.
>
> **[3:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=229)** The only thing that got affected was the price attribute.
>
> **[3:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=232)** We can also control the setting of an attribute by overriding the setattr function.
>
> **[3:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=238)** So let's try that next.
>
> **[3:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=239)** And I'll go ahead and hide the terminal.
>
> **[4:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=244)** So let's add setattr, and let's get rid of some of this extraneous decoration that gets added on here.
>
> **[4:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=259)** Okay.
>
> **[4:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=261)** So in this case, let's use the setattr method to enforce that when the price attribute is set, the caller is using a floating point number.
>
> **[4:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=271)** So once again, we're going to check to see if name is equal to price.
>
> **[4:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=279)** We're going to check to see if the type of the value is not float.
>
> **[4:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=287)** Then raise a value error saying the price attribute must be a float.
>
> **[4:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=297)** If we pass the test, then we'll just call the super classes version of set attribute, and we'll do that outside the if.
>
> **[5:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=310)** Alright, so once again, let's try this out.
>
> **[5:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=312)** I'm going to try to set the price of the book to an integer value.
>
> **[5:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=321)** All right.
>
> **[5:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=322)** And then we'll print it.
>
> **[5:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=323)** So let's bring up the terminal.
>
> **[5:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=327)** Ah, and you can see, I'm getting an exception because I didn't pass in a floating point number.
>
> **[5:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=334)** Now I can either fix that problem by using a float or I can just cast this integer to a float.
>
> **[5:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=342)** Let's just do that.
>
> **[5:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=346)** Let's try this again.
>
> **[5:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=349)** And now it works.
>
> **[5:50](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=350)** Okay.
>
> **[5:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=353)** Let's do one more example.
>
> **[5:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=355)** There's another magic method that lets us customize the retrieval of attributes but it only gets called if the attribute doesn't actually exist on the object.
>
> **[6:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=366)** So let's hide the terminal and instead of using get attribute, the full spelling, we're going to use getattr.
>
> **[6:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=375)** So let's go ahead and define getattr.
>
> **[6:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=383)** So, this function only gets called if the get attribute version isn't defined.
>
> **[6:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=389)** If I don't define this function right here, then this will get used or if it throws an exception or if the attribute doesn't actually exist.
>
> **[6:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=399)** So let's add some code to try this out.
>
> **[6:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=401)** I'm going to just simply return the string name + is not here.
>
> **[6:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=411)** All right.
>
> **[6:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=411)** So now let's try accessing a random attribute on the book that we know doesn't exist.
>
> **[7:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=420)** Let me comment out that line.
>
> **[7:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=422)** So I'll call b1.random prop.
>
> **[7:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=425)** Obviously there's no such thing as random prop anywhere in here.
>
> **[7:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=430)** Alright, let's bring up the terminal.
>
> **[7:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=434)** And you can see that when I do that, it says random prop is not here.
>
> **[7:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=438)** Because since it couldn't find the attribute, it calls this function instead.
>
> **[7:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=442)** Now, you could use this to generate attributes on the fly or if you wanted to extend the syntax for accessing attributes.
>
> **[7:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=449)** But just like the other methods, you need to be careful that you don't enter into a recursive loop.
>
> **[7:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=454)** But by using these attribute methods, Python gives you a great amount of flexibility and control over how attributes are accessed in your classes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), function (7), super (5), pass (2), case, (1)
> **CLI Commands:** python (3), make (2), find (1)
> **Tools:** terminal (5)
> **Versions:** 38.95 (2), 35.005 (1)
> **Analogies:** for example (1), imagine (1), just like (1)
> **Definitions:** is called (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Callable objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=0)** - [Instructor] To finish up this chapter, we'll take a look at the magic method that enables Python objects to be callable, just like any other function.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=8)** Now, that might sound a little bit weird but it's easy to understand it when you see it in action.
>
> **[0:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=12)** So let's open up the example code in magiccall_start.
>
> **[0:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=18)** And you can see that once again, I've got my Book class and it's already implementing the str function that we learned about earlier.
>
> **[0:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=25)** And I also have some code that creates a couple of book instances with titles and authors and prices.
>
> **[0:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=31)** So what I'm going to do is override the __call function that lets me treat an instance of the object, like a function and I'll define the function to take the same parameters as the init function.
>
> **[0:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=47)** You can also define the function to take a variable number of arguments, but that's a little more advanced.
>
> **[0:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=51)** And I want to focus here on the feature itself.
>
> **[0:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=54)** So what I'm going to do is add a function named def __call and that takes the object itself, along with whatever other arguments I want to add to this.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=70)** So I'll add title, author, and price.
>
> **[1:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=74)** And then for the function body, I'll just assign the parameters to the object attributes.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=83)** Okay, so let's go ahead and try this out.
>
> **[1:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=87)** So first, I'm going to print out the book b1.
>
> **[1:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=92)** Then I'm going to call the object like a function to change the values of the object attributes.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=98)** So now I've got b1, but rather than treating it like an object and doing a dot notation, I'm actually going to put some parentheses next to it and I'm going to change the value of the book's data.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=109)** So let's see, I'll change the title to "Anna Karenina" and that's also by Leo Tolstoy.
>
> **[2:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=123)** And it's 49.95.
>
> **[2:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=126)** And then I'll print the book again.
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=131)** And remember, each time, I print out the book that's where the str function will get used.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=137)** So let's try this out.
>
> **[2:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=144)** Python magiccall.
>
> **[2:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=147)** And you can see that when I run the code, I'm changing the values of the object's attributes by calling the object with new values.
>
> **[2:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=156)** And that's one of the benefits of this technique.
>
> **[2:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=158)** If you have objects whose attributes change frequently or are often modified together, this can result in more compact code that's also easier to read.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (4), override (1), this. (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** magiccall_start (1)
> **Versions:** 49.95 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Compare objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=0)** - [Instructor] For this challenge, we needed to implement the comparison magic methods in order to make our stock objects comparable to each other.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=13)** There are five methods that we need to implement.
>
> **[0:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=16)** There's equal, less than, greater than, and less than or equal and greater than or equal.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=24)** So here in my solution you can see that I've implemented each of these five methods, and they use the price property to determine the comparison.
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=35)** So let's go ahead and try this out.
>
> **[0:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=37)** And here is the testing code.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=39)** So we have two ticker symbols with two different prices and company descriptions.
>
> **[0:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=45)** Here is the code that instantiates each one of these assets and then compares them using our operators.
>
> **[0:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=52)** So let's go ahead and try this out.
>
> **[0:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=55)** All right, and you can see that the code works.
>
> **[0:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=59)** So let's see.
>
> **[1:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=60)** Is equal is False because the prices are not the same.
>
> **[1:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=63)** Is less than is True because price1 is in fact less than price2, which, of course, means that is greater than is going to be False.
>
> **[1:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=73)** Is less than or equal, also True for obvious reasons, and greater than or equal is False.
>
> **[1:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=79)** Okay, let's try changing the order of the prices.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=83)** So let's make this 105 and let's make this 101, and let's run again.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=91)** All right, in this case, you can see the answers are now different.
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=93)** So they're not equal.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=95)** price1 is not less than price2, so that's False.
>
> **[1:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=98)** price1 is greater than price2, so that's True.
>
> **[1:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=101)** Less than or equal to is False, and greater than or equal to also True.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Classes

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Defining a data class
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=0)** - [Voiceover] As we've been working through the course you may have noticed a pattern with each of our examples so far, and that is that one of the main use cases for creating classes in Python is to contain and represent data.
>
> **[0:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=13)** Our code creates classes, and let's go ahead and open up the data class underscore start example.
>
> **[0:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=19)** So our code creates classes like this book class here in our start file and then uses the init function to store values on the instance of the class.
>
> **[0:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=29)** And you might be wondering, "Well if this is such a common pattern then why doesn't Python just automate this?
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=35)** Why do I have to explicitly store each argument on the object by setting attributes on the self parameter?"
>
> **[0:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=42)** Well, starting back in 3.7 which was released a little while ago, you actually don't need to do this anymore.
>
> **[0:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=49)** In 3.7 Python introduced a new feature called the Data Class which helps to automate the creation and managing of classes that mostly exist just to hold and manipulate data.
>
> **[1:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=61)** And that's what we're going to focus on in this chapter.
>
> **[1:04](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=64)** So let's begin by converting this book class into a version that uses a data class.
>
> **[1:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=70)** So first, we need to import the data class from the data classes module.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=75)** So from data classes, I'm going to import data class.
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=83)** Next, we use the data class decorator to indicate that the book class will be a data class.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=90)** So I'll just add at data class here.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=94)** All right.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=94)** Then we need to get rid of the init function and then list the attributes for the data class and annotate each one with one of the new type hints that were introduced back in Python 3.5.
>
> **[1:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=108)** So let's get rid of the init function and let's un-indent those a little bit and let's get rid of all the self stuff.
>
> **[1:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=119)** So we'll just have title, author, pages and price.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=129)** And now I have to annotate each of these with what their type is.
>
> **[2:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=132)** So title is going to be a stir, oops.
>
> **[2:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=136)** Author is also going to be a stir.
>
> **[2:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=139)** Pages will be an integer, and price is going to be a float.
>
> **[2:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=146)** And guess what?
>
> **[2:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=148)** That's pretty much all we have to do.
>
> **[2:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=150)** Now there's quite a bit going on here.
>
> **[2:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=152)** So let me explain.
>
> **[2:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=153)** At first glance, it looks like what we're doing is defining class attributes instead of instance attributes.
>
> **[2:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=160)** But what's going to happen is that the data class decorator code will actually rewrite this class to automatically add in the init function where each of these attributes will be initialized on the object instance.
>
> **[2:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=174)** The second thing, you notice that these type hints they are required for data classes to work but in keeping with Python's philosophy of being flexible, the type isn't actually enforced.
>
> **[3:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=187)** And you can see I have some existing code down here that creates book instances and we don't even need to change our existing code as long as the parameters are passed in the same order.
>
> **[3:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=197)** So as long as the parameters in each one of these construction statements is in the same order as what the attributes are declared on in the book class, that should just work.
>
> **[3:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=210)** So let's go ahead and run our code as it stands so far and you can see that in the output here I've got, I'm printing out the title of book one and the author of book two, and it just works.
>
> **[3:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=225)** We didn't have to change our code to use the new data class but data classes have more benefits than just concise code declaration.
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=235)** They also automatically implement both the repper and EQ magic methods that we learned about earlier in the course.
>
> **[4:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=245)** So what I'm going to do is add a statement here to print out the book object.
>
> **[4:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=251)** So print b1, and that will automatically use repper and then we can compare two objects with each other.
>
> **[4:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=258)** So I'll make another book object that has the same values as b1.
>
> **[4:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=264)** So let's copy that and paste it.
>
> **[4:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=266)** I'll call that b3.
>
> **[4:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=269)** All right.
>
> **[4:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=272)** And then let's add a comparison operation.
>
> **[4:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=275)** So I'll print: is b1 the same as b3?
>
> **[4:41](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=281)** And then just for the sake of comparison, we'll also do that with b1 and b2.
>
> **[4:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=287)** Alright, and now let's run our code again.
>
> **[4:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=291)** Okay. And you can see, sure enough when I print b1, right, I get a nice output statement.
>
> **[4:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=297)** It has all the attributes, it has the name of the class and that's automatic just from using the data class.
>
> **[5:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=302)** And then the comparison, right?
>
> **[5:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=303)** b1 and b3 are the same.
>
> **[5:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=305)** So that's true.
>
> **[5:06](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=306)** b1 and b2, that's not the same.
>
> **[5:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=308)** So that's false.
>
> **[5:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=310)** So rather than having to go and manually override the equality comparison operator, I just get it for free when I use a data class.
>
> **[5:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=318)** Okay, one more thing to demonstrate for our introduction to data class.
>
> **[5:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=322)** They're just like any other Python classes, they're not different in some way.
>
> **[5:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=326)** So if I want to add a regular Python method to my class it's pretty straightforward to do so.
>
> **[5:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=333)** So let's go ahead up to my data class and I'm going to define a function named book info.
>
> **[5:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=343)** And that function is going to return an F string and it'll be self dot title by self dot author.
>
> **[5:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=359)** Alright, and then let's go ahead and modify some of the attributes of a book.
>
> **[6:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=365)** So I'll change b1's title and we'll change the pages and then we'll print out b1 dot book info.
>
> **[6:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=386)** All right, let's bring our, let's bring our terminal back up.
>
> **[6:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=391)** Before I bring the terminal up let's just go ahead and comment out these previous examples.
>
> **[6:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=397)** All right, here's my terminal.
>
> **[6:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=400)** Let's clear that and try it again.
>
> **[6:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=404)** And sure enough, you can see that our regular Python method works just as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), class. (7), function (6), self (4), module (1)
> **CLI Commands:** python (8), make (1)
> **Versions:** 3.7 (2), python 3 (1)
> **Tools:** terminal (3)
> **Analogies:** just like (1)
> **Speakers:** - [voiceover] (1)

#### Using post initialization
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=0)** - [Instructor] At this point, you might be wondering how you can perform additional object initialization if the data class automates the init function.
>
> **[0:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=9)** So, for example, we might want to create attributes on our book class that depend on the values of other attributes.
>
> **[0:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=16)** To accomplish this, the data class provides a special function named postinit that you can override, and it will be called for you after the built-in init function has finished.
>
> **[0:26](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=26)** So let's open up postinit_start.
>
> **[0:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=29)** Let's add an attribute that combines the title and the author string for our data class.
>
> **[0:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=35)** So what I need to do is override postinit, and then, let's make an attribute that combines the title and author values, and we'll call that description self.title.
>
> **[0:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=56)** Oh, whoops, got to put that in curly braces, by self.author, and let's add the pages as well, self.pages.
>
> **[1:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=76)** Okay, so when the data class gets finished initializing the main attributes, this function will get called, and any additional attributes we want to be created can be added here.
>
> **[1:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=88)** And then, let's add some code to try out this new attribute below the code that's already there to create the books.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=95)** So I'll print out b1.description, and we'll print out b2.description as well.
>
> **[1:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=106)** Okay, so let's go ahead and run this code.
>
> **[1:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=115)** And sure enough, you can see that the new attribute combines both the title and the author and the pages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), self (3), override (2), this, (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** postinit_start (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Using default values
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=0)** - [Instructor] Data classes provide the ability to define default values for their attributes, subject to some rules.
>
> **[0:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=7)** So let's open up the code for data default start and let's try this out and see how it works.
>
> **[0:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=15)** So you can specify default values for attributes just as if you had to declared them in the int function for the class.
>
> **[0:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=21)** So let's add some default values to our book class.
>
> **[0:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=25)** And this is as simple as just adding the equal sign and then the value you want to be the default.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=33)** So I'll just add string defaults for this.
>
> **[0:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=37)** One page will default to zero and the price will default to 0.0.
>
> **[0:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=43)** And now I can create a book object that has no arguments.
>
> **[0:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=51)** Alright?
>
> **[0:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=53)** Okay.
>
> **[0:54](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=54)** So let's run what we have so far.
>
> **[1:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=62)** All right, and when I run this, you can see that the book object was created with the default values.
>
> **[1:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=68)** So one of the things you have to be aware of with default values is that attributes without default values have to come first.
>
> **[1:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=75)** So for example, if I remove the default value from the price and then I try to run the code again, you see that I'm getting an error because you see it says here non-default argument price follows the default argument.
>
> **[1:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=91)** So items without defaults have to come first.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=94)** So let's just go ahead and put that back and let's clear the terminal.
>
> **[1:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=100)** Another way of defining a default value is by using the field function which provides a little more flexibility.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=109)** So first I'm going to import the field class from the data class module and let's hide our terminal.
>
> **[1:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=117)** So I'm going to import data class and field.
>
> **[2:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=121)** All right, and now that I've got the field function, I'm going to use the field function to specify a default value.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=129)** So in this case a price.
>
> **[2:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=131)** I'll use the field function and I'll use the default argument to set it equal to 10.0.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=141)** Now, obviously that's not much better than just simply specifying 10.0 right here but it does get a little bit more interesting.
>
> **[2:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=147)** So just bear with me.
>
> **[2:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=149)** So now let's add some code to create a couple of books with non-default data except for the price.
>
> **[2:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=160)** And we'll add this book and we'll print out B2 and B3.
>
> **[2:52](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=172)** Okay, so let's run the code again and actually let's comment out the previous example.
>
> **[2:58](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=178)** So let's run this.
>
> **[3:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=182)** All right.
>
> **[3:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=183)** And you can see that now the result shows that the default for the price is 10 but we can do a little bit better than that.
>
> **[3:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=190)** We can also specify a function that gets called in order to provide the default value.
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=196)** So it's clear the terminal.
>
> **[3:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=198)** Let's make a slight modification.
>
> **[3:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=200)** I'm going to change the argument from default to default factory.
>
> **[3:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=208)** And I'm going to define a function that's going to provide the default value, and I'll call it price func.
>
> **[3:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=218)** So this function you're about to define price func takes zero arguments and returns the default value that should be used.
>
> **[3:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=226)** So I'm going to have a price func that randomly generates a price between 20 and 40.
>
> **[3:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=233)** So that means I'm going to need a random number.
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=235)** So I'll import the random module and then I'm going to write a price function.
>
> **[4:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=241)** So I'll create a function called price func which takes no arguments and that's going to generate a random price.
>
> **[4:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=250)** So I'm going to return a floating point number and I'm going to call random.randomrange between 20 and 40.
>
> **[4:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=263)** Alright, so I've got my price func I've got it specified here as the default factory.
>
> **[4:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=269)** So let's try running the code again and let's start with a clear terminal.
>
> **[4:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=277)** And there you can see that I'm going to run it a couple times.
>
> **[4:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=280)** And you can see that the default value for the price changes each time, right?
>
> **[4:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=285)** And it's always between 20 and 40.
>
> **[4:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=289)** Alright?
>
> **[4:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=289)** So you can see that there are various ways to provide default values for data class attributes either from specifying them directly in the attribute list to calling a function that can generate the value dynamically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (11), class. (2), this. (2), module (2)
> **Tools:** terminal (4)
> **Versions:** 10.0 (2), 0.0 (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Immutable data classes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=0)** - [Instructor] Occasionally you'll want to create classes whose data can't be changed.
>
> **[0:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=5)** In other words, you want the data within them to be immutable.
>
> **[0:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=8)** Python data classes make this possible by specifying an argument to the data class decorator.
>
> **[0:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=14)** So let's open up immutable start.
>
> **[0:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=17)** And you can see here that I have a simple data class with a couple of attributes, a string and an integer along with some code that creates the object and prints out the object's value.
>
> **[0:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=27)** In fact, let's just go ahead and add both value one and value two.
>
> **[0:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=33)** Okay, so before we do anything else let's just run the code to make sure it works.
>
> **[0:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=42)** And sure enough, yes, it prints out value one and then the number zero.
>
> **[0:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=46)** So to make this class immutable I can set the frozen argument to true in the data class decorator.
>
> **[0:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=53)** So let's hide the terminal and inside the data class decorator here I'm going to write frozen equals true.
>
> **[1:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=61)** So now this prevents any of the attributes in the class definition from being modified.
>
> **[1:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=67)** And I'll add some code to try and do just that.
>
> **[1:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=71)** We'll set obj dot value one to be another string
>
> **[1:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=80)** and then we'll try to print it out again.
>
> **[1:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=87)** All right, so now let's try to run our updated code.
>
> **[1:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=90)** And you can see that when I do that I get a frozen instance error.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=95)** And you can see it says, cannot assign to field value one.
>
> **[1:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=99)** This also prevents, by the way modification within the class itself.
>
> **[1:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=103)** So let's hide the terminal and within the class let's add a function.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=109)** And I'm just going to call it, I don't know, some func and it'll take a new value.
>
> **[2:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=120)** And then self dot value two equals new val.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=129)** All right, and then let's call that function.
>
> **[2:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=136)** Okay.
>
> **[2:17](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=137)** And let's comment out the previous example.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=141)** All right, so let's run once more and bring up the terminal.
>
> **[2:27](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=147)** And once again you can see I'm getting the frozen instance error.
>
> **[2:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=151)** And in this case it says you can't assign to field value two.
>
> **[2:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=154)** And that's happening within the function that's within the class itself.
>
> **[2:38](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=158)** Now I am allowed to change the value of the attributes at construction time.
>
> **[2:44](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=164)** So let's try that out.
>
> **[2:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=165)** Let's hide the terminal.
>
> **[2:47](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=167)** And what I'm going to do is when I create the class I'm going to pass in another string and 20 as the value for the integer.
>
> **[3:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=180)** And then I'll leave this function call in place.
>
> **[3:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=182)** So let's bring up the terminal again and let's run.
>
> **[3:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=188)** And you can see that when I create the class another string and 20 took effect, right?
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=193)** So the attributes got changed, but once the class is done being initialized, once it's been instantiated, you can't change the attributes.
>
> **[3:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=201)** And that's where this function is now failing.
>
> **[3:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=203)** So creating frozen data classes can be useful when you want the class to represent data that you know isn't going to change.
>
> **[3:31](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=211)** And with the data class decorator and the frozen argument, that's really easy to do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (5), self (1), pass (1)
> **Tools:** terminal (5)
> **CLI Commands:** make (3), python (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Solution: Data classes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=0)** - [Instructor] All right, for this challenge we had to convert an existing class structure to use Python data classes.
>
> **[0:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=12)** So of course we need to import that module, which I did here.
>
> **[0:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=16)** And then I redefined each class using the data class decorator.
>
> **[0:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=21)** The base asset class contains the price property.
>
> **[0:24](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=24)** Since that property is common to both bonds and stocks and it's declared as being a float.
>
> **[0:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=32)** And then I declared the stock and bond data classes with their properties.
>
> **[0:39](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=39)** So the stock class gets the ticker and description, which are both strings, and the bond class gets the description, duration, and interest rate properties.
>
> **[0:48](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=48)** The asset class also had to override the comparison magic methods to support comparison operations and I put this logic in the asset class because the price property is common to both stocks and bonds and this enables us to compare stock and bond objects to each other directly.
>
> **[1:08](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=68)** And one of the other things we needed to do to make this work correctly is remember to add the EQ equals false parameter to the data class definition and I had to do this for each of the data classes.
>
> **[1:22](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=82)** I added this in the hint section for the challenge, so hopefully you read it and picked up on it.
>
> **[1:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=89)** The reason you need to do this is because remember, data classes implement a default EQ method for you.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=96)** So if you want to define your own EQ method and we do, then you need to tell the data class not to do that for you.
>
> **[1:45](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=105)** Alright, so let's go ahead and run the finished code.
>
> **[1:49](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=109)** And you can see here in the test code we've got a stock and a bond and I'll go ahead and run the current code and we can see that the is equal is false, which is what it should be, less than, is also false because 200 is not less than 100, which means of course the greater than will be true.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=129)** And same results for less than or equal to and greater than or equal to.
>
> **[2:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=134)** So let's go ahead and switch the roles.
>
> **[2:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=135)** Let's make this 20 and run the code again.
>
> **[2:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=139)** And now you can see we're getting different results based on the comparisons.
>
> **[2:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=143)** And then finally, let's make them equal to each other and now you can see that the result is true for is equal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (1), override (1), switch (1), finally, (1)
> **CLI Commands:** make (3), python (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=0)** - All right.
>
> **[0:01](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=1)** It looks like you made it to the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=3)** I hope you enjoyed learning about how the Python language uses object-oriented programming techniques, and maybe you've picked up some ideas about how to apply these principles in your own Python programs.
>
> **[0:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=14)** As I said at the beginning of the course, it's not required to use object-oriented programming with Python, but I think that once you get started with it and you've experienced the benefits, you'll be reluctant to go back to writing code the old non-object-based way.
>
> **[0:28](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=28)** There are plenty of other Python focused courses to explore while you're here, so I suggest checking a few of them out.
>
> **[0:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=34)** I hope to see you again soon in another one of my courses.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=36)** Until then, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Prerequisites:** required to (1)
> **Speakers:** - all (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-object-oriented-programming-4413110/codespaces)

## Skills Covered

- Python (Programming Language)
- Object-Oriented Programming (OOP)

## Path Context

### In [[OpenEDG Python Institute- Programming with Python Professional Certificate]]
← [[Python Essential Training]] | **2 of 3** | [[Level Up- Python]] →

### In [[Getting Started with Python]]
← [[Learning Python]] | **3 of 8** | [[Learning the Python 3 Standard Library]] →

## Part of

- [[OpenEDG Python Institute- Programming with Python Professional Certificate]]

## Appears In

- [[OpenEDG Python Institute- Programming with Python Professional Certificate]]
- [[Getting Started with Python]]

## Related Courses

_Courses sharing skills:_

- [[Python Practice- Object-Oriented Programming]] — Python (Programming Language), Object-Oriented Programming (OOP)
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)