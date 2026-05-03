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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20C%2B%2B.md)

![Learning C++](https://media.licdn.com/dms/image/v2/D4E0DAQFFyyr75fh80g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706572609334?e=2147483647&amp;v=beta&amp;t=kibo-DzGRpI3g_EbIAlFJPOY7L5soeY_IF_JT-zKkb0)

# Learning C++

> C++ is one of the most powerful and widely used programming languages of all time. It is also one of the oldest programming languages in use today. In this course, learn the basic elements of this object-oriented programming language that moves the world. Instructor Eduardo Corpeño begins with setting up the development environment and introducing the basic elements of object-oriented programming.

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-plus-plus-22993675) | 3h 11m | Beginner | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Get up and running with C++](#get-up-and-running-with-c)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files on GitHub](#using-the-exercise-files-on-github)
- [**1. Getting Started**](#1-getting-started) (4 videos)
  - [Elements of object-oriented programming](#elements-of-object-oriented-programming)
  - [Creating a simple program in C++](#creating-a-simple-program-in-c)
  - [Challenge: Console interaction](#challenge-console-interaction)
  - [Solution: Console interaction](#solution-console-interaction)
- [**2. Data Types**](#2-data-types) (14 videos)
  - [Basic data types](#basic-data-types)
  - [Variables](#variables)
  - [Using variables](#using-variables)
  - [Expressions, assignments, and operations](#expressions-assignments-and-operations)
  - [Type inference with auto](#type-inference-with-auto)
  - [Preprocessor directives](#preprocessor-directives)
  - [Constants](#constants)
  - [Arrays](#arrays)
  - [Strings](#strings)
  - [Type casting](#type-casting)
  - [Type casting examples](#type-casting-examples)
  - [Enumerations](#enumerations)
  - [Challenge: Calculate an average](#challenge-calculate-an-average)
  - [Solution: Calculate an average](#solution-calculate-an-average)
- [**3. Structures, Classes, and Pointers**](#3-structures-classes-and-pointers) (12 videos)
  - [Structures](#structures)
  - [Classes](#classes)
  - [Using classes](#using-classes)
  - [Header and implementation files](#header-and-implementation-files)
  - [Using several source files](#using-several-source-files)
  - [Pointers](#pointers)
  - [Using objects with pointers](#using-objects-with-pointers)
  - [References](#references)
  - [Vectors](#vectors)
  - [Using objects with vectors](#using-objects-with-vectors)
  - [Challenge: Create some classes](#challenge-create-some-classes)
  - [Solution: Create some classes](#solution-create-some-classes)
- [**4. Control Flow**](#4-control-flow) (6 videos)
  - [If statements](#if-statements)
  - [Switch statements](#switch-statements)
  - [While loops](#while-loops)
  - [For loops](#for-loops)
  - [Challenge: Calculate GPA from a vector](#challenge-calculate-gpa-from-a-vector)
  - [Solution: Calculate GPA from a vector](#solution-calculate-gpa-from-a-vector)
- [**5. Functions**](#5-functions) (5 videos)
  - [Creating functions](#creating-functions)
  - [Function parameters](#function-parameters)
  - [Using functions](#using-functions)
  - [Challenge: Create a report card function](#challenge-create-a-report-card-function)
  - [Solution: Create a report card function](#solution-create-a-report-card-function)
- [**6. File I/O**](#6-file-io) (4 videos)
  - [Opening a text file for reading](#opening-a-text-file-for-reading)
  - [Open a text file for writing](#open-a-text-file-for-writing)
  - [Challenge: Upgrade to work with files](#challenge-upgrade-to-work-with-files)
  - [Solution: Upgrade to work with files](#solution-upgrade-to-work-with-files)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get up and running with C++](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/get-up-and-running-with-c-plus-plus?u=76281980&t=0)** - [Eduardo] C++ runs the world. It is one of the oldest programming languages in use today, and for good reason. Chances are most of the computationally demanding software you use like operating systems, console, video games, or [[Databases]] for your bank account and social media all have some or most of their source code written in C++. You can [[Representational State Transfer (REST)|rest]] assured that this programming language isn't going anywhere in the near future. It'll enable you to create programs that are powerful, dependable, and efficient. You'll learn how to write simple programs using the [[Object-Oriented Programming (OOP)|object-oriented programming]] paradigm while working on a series of programming challenges. I'm Eduardo Corpeno. I've been teaching C and C++ for over 20 years, so come join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [eduardo] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/what-you-should-know?u=76281980&t=0)** - Before we start, there are some things you should know. First and foremost, this is an introductory course on the C++ programming language, so you may or may not have experience programming. Either way, some experience in any programming language may be useful. Although you don't need an IDE to run your C++ code, I will use Visual Studio Code running on [[GitHub]] [[Codespaces]]. This is a cloud-based platform embedded in the GitHub repository, which allows you to easily follow along with the code on your web browser without having to install anything. Of course, you may use your favorite C++ development environment instead if you prefer. Just make sure to use the C++ 17 standard or later. You may want to read the documentation of your development environment for this. It's usually a [[Google]] search away. Finally, as you advance through the course, you will need to read some parts of the C++ documentation. For this, I recommend [cppreference.com](https://cppreference.com), which is a free online reference for C and C++ in the form of a Wiki. I occasionally contribute to it, and you should too once you get enough experience in C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Codespaces]] (1), [[Google]] (1)
> **Tools:** github (2), visual studio (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** before we start (1), install (1)
> **CLI Commands:** make (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Env Vars:** ide (1)
> **Documentation:** the documentation (1)

#### [Using the exercise files on GitHub](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] Let me show you how to find the exercise files in the [[GitHub]] repository. This is a single branch repository and you can find the code related to each video under the source folder. Inside you will find one folder per chapter. Let me click on chapter 5. The source folders are named with the chapter number followed by the video number. Now for most videos, two folders are provided and their names end with a lowercase letter b for begin or e for end. The beginning folders contain the code as it is shown at the beginning of the videos. These are the folders you want to work with if you intend to follow along. Now the end folders contain the code as it is left at the end of the video for your reference. So to work with this code, you have a few options. If you want to download the code and use it in your favorite IDE, you may do so by clicking on the green code button. Under the local tab, you can clone the repository or download the code in a zip file. However, I want to invite you to try following the exercises using GitHub code spaces, a cloud-based IDE you may use with this course. Although you may create a code space on the course repository, it will not allow you to push your changes so they would only be saved inside your code space. Because of this, I recommend that you create your own copy
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=94)** of the repository on your GitHub account so you can keep any changes that you've made. Even if you later decide to delete a code space. To create your own copy of the repository, you can click on the fork button. Then review the name and description of your fork. Keep the check checkbox checked and click on create fork. Now you have your own copy of this repository where you can start a new code space. This fork version is the same as the original repository, but it will let you push your own changes. Let me start a code space from GitHub and show you how everything is already set up for you to start coding. All you need to do is click on the code button. And under the code spaces tab, you can start a new code space or open an existing one. I'll create a new one. Setting up the code space may take a while. Once started, you will see a cloud version of Visual Studio Code with your repository as an open folder so you can browse to find any of your files. First, let me hide the top bar and change the appearance to full screen. All the exercises in this course are console applications, which means that they run on the text terminal rather than a graphical user interface. At the left, we can see all the files in the repository.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=189)** For example, let me show you the exercises for chapter 2, and let's say we want to see the exercise file for the sixth video in chapter 2. This would be the beginning folder. Notice that it's named "02_06b", and the ending folder would be "02_06e". Here's the code. Now let me show you the startup code for this video, which is the only one in Chapter 0. All main sources in the course are called CodeDemo.cpp. Now let me move the bottom and left panes out of the way. This is a simple application that adds two numbers entered by the user. Visual Studio Code is already set up for you to compile, run, and debug your code by simply pressing F5 or the debug button at the top right. The first time you run a program in a code space, the debug console will pop up in the bottom pane. You may safely click on the terminal tab to see your application. Remember, you only need to do this once per session. Now let me maximize the terminal. The program is asking for two numbers to add. Let me enter 3.5 and 5. Then it shows the result of the addition. Great, now let me show you
>
> **[4:43](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=283)** what you should do if you get a compiler error. When you get an error message, it doesn't mean that the compiler failed because the computer made a mistake. No, it means that there's some error in the code you provided, so it's very important to read the information in the error messages error. Let me show you what I mean. Let's add the [[Microsoft Word|word]] "bug" at the end of line 11 to get a syntax error when I try to build. You can already see some red squiggles in the code. Let me run it. You will get this message box reporting that there are errors in your code and asking if you want to debug anyway, show the errors or abort. Although it may seem as the recommended option, do not click on debug anyway as it will run the last successful build of your project. Instead, I recommend that you select to show the errors. You also get to select not to show this dialogue again. Now the problems tab will show you a list where you can read each of the error messages. Clicking on an error will show you the line in the source code where the error was was found. If you have experienced debugging, you'll note that most errors are correlated and fixing the first one will probably solve many others. I'll remove the bug. Now, since this is Visual Studio Code,
>
> **[6:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=376)** it includes a debugger with all its features like break points, watches, and step-by-step execution. Let me show you. You can toggle a break point by hovering over the gutter at the left of the line numbers and clicking on the red dot. I'll do this for line 15, which is right after getting the numbers from the user and before calculating the addition. Now let me press F5 and I will enter two numbers again, 2.5 and 9.25.
>
> **[7:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=420)** As you can see the execution stopped at the break point and we can see the state of the local variables at the top left. You can see the values I entered in the number variables and an initial value of zero for the result variable because the addition hasn't been calculated yet. We have the usual execution buttons, continue execution, step over, step into step out, restart and stop. Let me execute one line of code with the step over button. Pay attention to the result variable on the left as it changes from zero to the result of the addition. You can also add expressions to the watch section at the left, for example, num_1 times num_2. This watch value will change whenever the variables change, so let's execute the [[Representational State Transfer (REST)|rest]] of the program with the continue execution button. Lastly, let me show you how to push your changes to your repository. Let me add a comment in this source file and let me open the file explorer at the left. You'll notice that there is an M at the right of the file name as well
>
> **[8:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-the-exercise-files-on-github?u=76281980&t=513)** as an asterisk on the main branch at the bottom. These are indicators that there are changes in the repository. Now let me open the source control panel. In here, you can also see that two files have changed. Now notice that one of these files has no extension. It is simply called "CodeDemo". That's the executable we just created, and we usually don't want to keep it in the repository, so you should only select the source files you want to keep. So let me stage the changes only for CodeDemo.cpp by clicking on the plus sign next to it. Next, I will enter a commit message, and now instead of clicking on commit, I will click on the down arrow and select commit and push. There, your changes have been pushed to your repository. The first time you may be asked if you want VS Code to run get [[Fetch]] periodically, click yes and it will automatically sync with your repo. And remember, if you close the browser, you don't need to start a new code space. You can simply reopen the existing code space from GitHub and you'll see your session right where you left it. So that's it. Try [[Codespaces]] and enjoy coding in your browser without having to install anything. Great, we are good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1), [[Codespaces]] (1)
> **Tools:** github (5), visual studio (3), terminal (3), vs code (1)
> **UI Navigation:** click on (7), open the (2), checkbox (1), toggle (1), select the (1)
> **Exercise Files:** download the (2), exercise files (1), zip file (1), exercise file (1), source code (1)
> **Definitions:** is a  (2), means that (2), is an  (1)
> **CLI Commands:** find (4)
> **Versions:** 3.5 (1), 2.5 (1), 9.25 (1)
> **Prerequisites:** set up (2), install (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Elements of object-oriented programming](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=0)** - [Instructor] C++ is not just an extension of the C programming language. There are actually several differences between the two languages, and we can't assure that one completely contains the other. The main addition of C++ is that it's an [[Object-Oriented Programming (OOP)|object-oriented programming]] language. So let's briefly go through some basic elements of object oriented programming. First, we have modeling. A model is a representation of something in reality. Modeling is a crucial concept in object-oriented programming. We may model anything, a cow, a car, a person, you name it. Now the tricky part is choosing which elements to include in your models. For example, let's suppose we want to model a car. We might include variables to represent every aspect of a car we could think of like make model weight, owner, color, age, and so on. You may agree with me that there are countless aspects we could add to our model, so we may never finish our model of a car. Thus, the challenge of modeling is to figure out which features are enough to simplify our representation without oversimplifying it by leaving important details out. For a car salesperson, the car represents among other things, its price, make, model, number of seats, and some [[Performance Metrics]]. For a passenger taking a higher ride, the car may represent a means for getting from point A to point B with a capacity
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=96)** to carry the passengers and their things. For a parking lot owner, the car may be simply represented by its size. Another important element of object-oriented programming is encapsulation. Simply put, encapsulation means keeping data and operations within their models. Well-defined models must only include information about themselves. Model operations must be concise. If a function is supposed to do A and B, it shouldn't do anything else. For example, the model of a car should not include the cost of filling its gas tank. That's more an element of the gas station model. Next, we have classes which are the C++ construct for models. Classes contain members of two types, data and functions. For example, our car class may have a data member for the make or brand of the car, and a member function to change the paint color of the car. By the way, an instance of a class is known as an object. That is to say if we have three variables of the car class, it is said that we have three car objects. Among other attributes, class members may be public or private. Public members are accessible by any part of the code. That is by code outside the class. Private members, on the other hand, are only accessible within the class.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/elements-of-object-oriented-programming?u=76281980&t=191)** But wait, there's a third access specifier. Protected members can be accessed in inherited classes, which leads us to the concepts of inheritance and polymorphism. A class may have subclasses based on it. A subclass may inherit members from their superclass. For example, the animal class may have a data member for the number of legs, which is inherited by the Dog subclass. Some subclass may add other members. For example, the Bird class may add a member for wings, and there's an interesting feature related to inheritance called polymorphism, where the superclass may define some function, but the inherited version of this function is implemented differently among the subclasses, making these sibling classes polymorphic. You may be familiar with these elements from other languages like [[Java]] or [[Python (Programming Language)|Python]]. And I'm happy to report that C++ implements all of this and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[Performance Metrics]] (1), [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (3), python (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a simple program in C++](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=0)** - [Instructor] Let me write a hello world in C++, so I can show you the syntax and structure of the code. One of the most important details of C and C++ is that they are case sensitive, so keep an eye out for the exact spelling of keywords and names. So a hello world is the traditional simple program that prints out a message to the screen. It usually takes a few lines of code. In the first line, we will include the libraries we'll use. This is a pre-processor directive, which we'll talk about later. Notice that we are using a library called IO Stream, which is a part of the C++ standard library, and contains objects and functions to print text to the screen, and receive text from the keyboard. Pre-processor directives do not end with a semicolon. Next, we have the main entry point of your program, which is a function that is executed by default. We'll get to the syntax of functions later, but for now, let me tell you that the main function must return an integer denoted by the INT keyword. Then comes the name of the function. Remember, this is case sensitive, so I'll type all lowercase main. And finally, we have the parameter list. The main function may receive either nothing, or a set of strings that come from the command line. Just the way you run commands with arguments in the [[Windows]], MacOS, or [[Linux]] command lines.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=95)** For our hello world, we'll use an empty list of parameters, and this is enclosed by parentheses. Now, the body of a function is a block of code, and blocks are delimited by curly brackets, symbolizing the beginning and end of the block. Now you have to decide how you prefer to place your curly brackets. I personally prefer to open blocks at the end of the control statement, and close them in a dedicated line indented at the same level as the opening line, like this. This is a very popular style, and you will see it throughout the course, but you are free to use whichever you prefer. You may want to [[Google]] indentation styles for this. Another important detail is that C++ code, like most programming languages, would very soon become virtually unreadable by a human if you don't properly indent your code. Most development environments have a feature to help us with this, but you must get used to indenting your code so that any new block of code is indented a fixed number of spaces, or a single tab to the right. Keep in mind that C++ compilers do not require you to indent your code, unlike [[Python (Programming Language)|Python]], which enforces indentation. The next line of code will be where we print out our message. We'll do this by using an object from the IO stream file, which is a member of the standard library denoted by STD.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=193)** This membership is represented by the scope resolution operator, double colon. The object is called C out, which is short for character output. This represents the output window, and we must send some text to it. We do that with the left-bound insertion operator, or double less than characters. To the right of this operator, we enter whatever we want to send to the object at the left, and we may use the operator consecutively like this. The message will be "Hi there." After that, I'll send a new line character, which is available by another standard library symbol, and L, which is short for end line. We finish almost every line of code with a semicolon, but there are exceptions. For example, the lines that end with a closing curly bracket. Lastly, since main is a function that returns an integer, we'll return zero with the return keyword. You may use parenthesis for the return value, or not, I usually do. The reason I return zero is because zero is traditionally used to mean that no errors came up in the program. Other values usually represent error codes, which you are expected to detail in your documentation. That's it for the hello world. Let's see it running. And there's the hi there message as expected. Now, after running a program,
>
> **[4:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-a-simple-program-in-c-plus-plus?u=76281980&t=289)** the debugger prints the message you can see right below our output, reporting that execution is done. But it's a little difficult for me to tell where my output ends and the debugger's exit message begins. So let's go back to the code and make one final adjustment. Right before returning, I will print out two end line characters to separate my output from the debugger's exit message. In fact, I will do this in all my main functions in the course, just for convenience. Let me run it so you can see the difference. There you go, much better. Now we can see the high there message on its own. Great, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (7), short for (2), is called (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** int (1), std (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Console interaction](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=0)** - [Instructor] It is time to do some console interaction. In this challenge, your task is simple. Ask the name of the user and say something back. Do this by printing a message addressing the user's name. For this, you'll need to use the standard libraries, cin and cout objects. We still haven't used cin, so let me show you how. For this example, we'll use something similar to our hello world. Since we are going to get a string from the user, we'll need to include the string header file from the standard library as shown in line six. Then in line nine, I have declared a string variable named str, which I'll use to hold the user input. In the next line, we have the cin object, which is used in the opposite direction as cout, so we type cin, then use the right bound insertion operator pointing to the target string variable. After running this line, the user input will be in str. Lastly, I added a line to print out str. So let's see it running. At this point, I'm expected to enter some text, so let me type in my name. After I hit enter, we'll see my name printed back once more. And there it is.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-console-interaction?u=76281980&t=94)** Now be warned that cin only works for single words. If you want to use it for strings that contain spaces, you'll have to use a special function you'll see later in the course. Feel free to modify this startup code to create your solution. Remember, you have to print a message requesting the user's name, then print a message using that name. This shouldn't take you more than 10 minutes. When you are done, take a look at my solution in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Console interaction](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-console-interaction?u=76281980&t=0)** - [Instructor] Here's my solution. In line nine, we have the string variable declaration. Next, we have a C outline to print the message asking for your name. Notice that I'm using STD Flush at the end. This makes sure that the output is completely sent to the terminal before waiting for the user input. Next, we capture the user input into SDR in line 11. Remember, this only works for single words, and finally, the response message is composed of a sequence of insertion operators to C out. First, we have the string, nice to meet you. Then we send SDR, then an exclamation sign, and finally the end line character. This sequence works as a concatenation of all the elements involved. Let's see it running. Here's the prompt message. I'll type in my name and there's the response. Great. Let's learn some more about C plus plus.

> [!info]- Semantic Content
>
> **Env Vars:** sdr (2), std (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic data types](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=0)** - [Instructor] As with any programming language, it's essential to know the supported data types. C++ supports a very basic set of data types. Let's start with integers. Integer numbers may be signed or unsigned. There are several integer types in C++. There's the int type with a bit length that's implementation dependent. Usually it's 32 bits, but it's sometimes 16 bits. We also have the char type, which is short for character. It's eight bits wide, and it was designed to represent ASCII characters, but it's just a bite. You may use it as an integer if you want. Because these types may vary in length and sign, a very useful C library called stdint.h contains portable data types that specify the length and sign support of their types. For example, uint32_t is an unsigned 32 bit integer, and int8_t is a signed eight bit integer. C++ also supports floating-point numbers. Floating-point numbers represent real numbers as opposed to integers. I'm talking about numbers like pi or 1.333, 0.5, or minus 12.44. These types implement the IEEE754 binary floating-point standard.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=93)** There are three floating-point types in C++, float, double, and long double. The difference between float and double is that double has a much larger range and precision than float. However, it's way more computationally expensive to work with doubles than floats. Unlike C, C++ supports a boolean type to represent true and false. The keyword for this type is lowercase bool. In the language, the lowercase true and false keyword are defined, so you may assign either of these to a bool variable. Also in the language, anything other than zero means true, and zero means false. Next, we have the string class. Now, strings are not natively supported by the language. As in C, you may work with strings as arrays of characters terminated with the value zero. However, strings are supported in the C++ standard library as a class. The string header file provides the string class and lots of string manipulation functions. Lastly, we cannot talk about C or C++ without talking about pointers. This is a special data type for memory addresses. Pointers may act as references to existing variables. And the same pointer may be used to access many different variables sequentially. Now, this hasn't been
>
> **[3:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/basic-data-types?u=76281980&t=187)** an exhaustive description by any means, so I recommend that you visit [cppreference.com](https://cppreference.com) for a detailed description of the supported types. Go to the language section and click on basic concepts. Once in there, go to the Basic Concepts tab and click on Fundamental Types. Alternatively, you may simply [[Google]] CPP reference fundamental types. You'll see that there are numerous variants of each type and that most of them are implementation dependent. Take a minute or two to skim through this page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **UI Navigation:** go to (2), click on (2)
> **Definitions:** is a  (2), short for (1), is an  (1)
> **Env Vars:** ascii (1), ieee754 (1), cpp (1)
> **Versions:** 1.333 (1), 0.5 (1), 12.44 (1)
> **File Paths:** stdint.h (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Analogies:** for example (1)

#### [Variables](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=0)** - [Instructor] There are a handful of important aspects about variables in C++. Variables are temporary [[Data Storage]] units. They must be declared prior to being used. The declaration of a variable must specify a type and a name, and declarations may contain initializations. In your code, you'll have to assign values to your variables. So let me briefly show you the syntax for some of the most popular types. Integers are entered as numbers with a special format for the radix. The default is decimal, like 123 or minus 5. Now a leading zero means octal like 023. So be careful with this. For hexadecimal, start with 0x, like 0x3A, and for binary, start with 0b as in 0b1100. You may specify unsigned with a trailing upper or lowercase U as in 23U. Floats are entered with the decimal point and at least one digit to the right, even if the value happens to be an integer. And you must specify the float type with a trailing f as in 23.0f or 0.0f. Doubles are the default floating point type. So you write the number like a float literal without the trailing f.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/variables?u=76281980&t=95)** Charts may be entered as integers as long as they fit in 8 bits, but their ASCII character interpretation is entered between single quotes. Here we have lowercase a, uppercase X, and two special characters that use the backslash escape character. These are the null character to the limit the end of a string, and the new line character. Finally, you've already seen string literals between double quotes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1)
> **Env Vars:** ascii (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Using variables](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=0)** - [Instructor] Let me show you an example of variable declaration and usage for several types. I'll start with the "hello, world" code we wrote earlier. Variable declarations must include the type and name of the variable, and they may include an initialization. Let me go to Line 7 and declare two integer variables, a and b, and let me initialize b to 5. Notice that you may declare several variables in one line, separating them by commas. Also, notice that these two variables are at the same level of indentation as the main function. This means that a and b are global variables. Global variables are accessible to all parts of the code, and because of this, the memory for global variables is managed statically by the compiler, so they are allocated in the data segment of memory. Once the program ends, their memory is freed. On the other hand, variables may be local to their scope. By that, I mean that you may declare variables inside functions or inside loops. These variables are accessible within their scope and within scopes inside of it. Once the execution exits a scope, its variables are deleted and the memory is freed. These are called automatic variables because they are managed by the compiler and they are usually allocated
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=94)** in the stack segment of memory, which is temporary. Let me declare a local Boolean variable in the main function. Let's call it my_flag. Variable names have rules, and you should read about these rules. Again, I recommend [cppreference.com](https://cppreference.com) for this. To make a long story short, variable names must start with a non-number character and may contain letters, numbers, and some symbols like hyphens and underscores. Also, variable names cannot be the same as any keyword in the language, like int or return. The best programming practices generally recommend avoiding global variables for an extensive variety of reasons. This is why in the [[Representational State Transfer (REST)|rest]] of the course we will stick to local variables as much as possible. This is a good time to show you how comments are entered in C++. A double slash comments everything to the right, so these are useful for one-line comments. Delimited comments are useful for multi-line comments. These are enclosed by slash, asterisk and asterisk, slash. Like this. Now let's use those variables. In the main function, let me assign a value of 7 to a. Notice that the assignment operator
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=186)** works from right to left. I will assign false to the flag. Now let me copy and paste the C outline and modify it to show the values of a, b, and the flag. So let's try it. There you go. A equals 7, b equals 5, and the flag equals 0 because 0 is false in C++. Now let me add some code to toggle the flag and print out three things, the value of the flag, a plus b, and b minus a. Let's see it running now. And there we have the results again, plus three additional lines showing that the flag is 1, which is a valid true value in C++, a plus b is 12, and b minus a is minus 2. Lastly, let me show you what happens when we use an unsigned variable to store a negative number. Let me go to Line 24 and add a third integer declaration. This one will be an unsigned int called positive. Making declarations anywhere in the code and not just at the beginning of a scope is a nice feature of C++ which hasn't always been supported in the history of C. Now let me assign the same subtraction to this new variable
>
> **[4:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-variables?u=76281980&t=279)** and print out its value. Let's see it running. Now we get that b minus a unsigned equals... Look at that number. If you use your calculator, you'll see that this number is 2 raised to the 32nd power minus 2, and this is the two's complement representation of minus 2 in binary. The binary number is the same, but the interpretation is different. That's why you must be very careful when deciding whether you want to use signed or unsigned integers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3), means that (1)
> **UI Navigation:** go to (2), toggle (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** my_flag (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Expressions, assignments, and operations](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=0)** - [Instructor] Now let's talk about three important components of C++ code. Let's start with expressions. An expression is a symbolic representation of a calculation like the expressions you see in algebra. An expression may contain variables, constants, and operators, and every expression must produce a value. An assignment is a line of code that assigns a value to a variable. It must contain a left-hand side and a right-hand side expression. The left-hand side expression must be able to hold a value and the data types of both expressions must match. This last point is not enforced by the compiler, as you saw when we assigned a negative number to a unsigned variable, so you as a programmer are responsible of keeping your code consistent. Lastly, let's review some of the most important operations in C++. We have arithmetic operators, plus for addition, minus for subtraction, asterisk for multiplication, forward slash for integer division, that's quotient, and the percentage symbol for the modulo or remainder of a division. The forward slash operator is also for floating point divisions. It all depends on the operands you use. We also have bitwise Boolean operations. That is binary operations performed bit by bit between the operands.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=92)** We have single ampersand for bitwise and, single vertical bar for bitwise or, tilde for bitwise nought, and caret for bitwise xor. Again, these are bitwise operations, not logical. Now logical operators are the ones you probably want to use in an if statements condition. These evaluate two operands that can either be true or false in the same logic we've seen so far. Remember, zero means false and anything else means true. The logical operators are double ampersand for and, double vertical bar for or, and exclamation sign for nought. We have relational operators to compare values, double equal sign for equality. Be careful with this one. A common mistake is to use the single equal sign in a conditional, and the problem is that this is valid because it returns the assigned value. Next, we have exclamation sign equal for not equal, greater than, less than, greater or equal and less or equal. And finally, we have three popular pointer operations, prefix asterisk for indirection, which dereferences the pointer to its right, which is its only operand. That is to say it gives you access to the variable the pointer is pointing to. This is not the multiplication operator despite sharing the same character. We also have prefix ampersand
>
> **[3:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/expressions-assignments-and-operations?u=76281980&t=185)** for the address of operator, which returns the address of the variable at its right, which is its only operands. And we have the arrow operator, which gives you access to members of classes or structures from a pointer. You may have noticed the lack of a logical xor operator, and that's an interesting exercise to think about. Here's a hint. What does the not equal relational operator do? Since you'll be seeing a lot of expressions, assignments, and operations up ahead, you may want to consult [cppreference.com](https://cppreference.com) to learn more. Just [[Google]] CPP reference operator precedents and you'll see an exhaustive list of operators and their precedents. Take a minute to browse through it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1), common mistake (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Env Vars:** cpp (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### [Type inference with auto](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=0)** - [Instructor] In the C++ 11 standard, the language got a very nice addition called type inference. It's a convenient way of creating a variable with the type that suits the value you want to assign to it. The only catch is that you must initialize the variable at declaration. Let me show you how it's done. Starting at line nine, I'll declare seven variables of automatic type named A, B, C, D, E, F, and G and initialize them with different constant types. The placeholder for the type is the auto keyword, so A will get a small integer, let's say eight. Now, B will get a very large integer, one that exceeds 32 bits. An 11-digit number will do the trick. C will get a floating point number, say 3.14, with a trailing lowercase f. That's the constant specifier for floats. D will also get 3.14 without the trailing f. Floating point constants are doubles by default. E will get the Boolean constant true, which is one. I'm using the constant true because it is defined in the bool type. Variable F gets a single character d. Notice that it's enclosed by single quotes. And lastly, G will get the string C++ rocks.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-inference-with-auto?u=76281980&t=98)** Notice that strings are enclosed by double quotes. Now starting at line 17, I'll print out the type of each variable in a separate line. To do this, I'll use the typeid operator from the included typeinfo header file from the standard library. It receives a variable and returns its type. Now the name of this type is accessed by the name member function. So let's see it running. As you can see, we have the expected types, i for int, l for long, f for float, d for double, b for bool, c for char, and PKc for pointer to const char. That's a fancy name for string. Please bear with me on this exercise. The typeid operator is implementation dependent, so it may behave differently if you are using a compiler or IDE other than Visual Studio Code on [[GitHub]] code spaces. Some implementations showed descriptive strings like Int64 or double to represent types. So don't worry if you get different results or even an error in this exercise. I simply wanted you to see how the auto keyword performs type inference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Versions:** 3.14 (2)
> **Tools:** visual studio (1), github (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### [Preprocessor directives](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=0)** - [Instructor] C++ is a compiled language. So the code goes through a pipeline of software tools which extract the semantic elements written by the programmer. One of the first steps your code goes through is the preprocessor, which is not related to the microprocessor. It's actually a piece of software and part of the compiler tool chain. There are several directives addressed to the preprocessor, which contain information about what to add or remove in the code. The compiler will receive a somewhat modified, or rather, preprocessed version of the code. These directives like #include, #define and #ifdef are useful for including libraries in your code, defining constants and selecting blocks of code for different compiling scenarios. So let's see some popular directives. First off, all directives start with the hash character, also known as number or pound, and they occupy one line each. There's actually one directive I've been using in all the exercises you've seen so far. That's the #include directive. This one is used to insert the reference file into your code replacing the directive line. Yes, the whole code in that file. In line five, we have #include <iostream>. Notice that <iostream> does not have a path or extension.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=95)** Also notice that it is enclosed in angle brackets. That means that the preprocessor will look for the file in a predefined location, usually specified by the development environment like a default include folder. So you can think of this as including known standard libraries or installed libraries. <iostream> is part of the standard library, and these files usually don't require an extension like .h or .hpp. The same applies to the string header file. So let me include it. Next I'd like to show you a header file from the C Standard Library I mentioned earlier. That's <stdint.h>. This file provides fixed length definitions for integer types so that you don't have to depend on the implementation of primitive types like int or char. Now this header file is from the C Library, so it has C code in it. Remember, C is not the same as C++. So some of the most popular C header files in the standard library have been made available for C++ code in their special version preceded by lowercase C. So this one is named cstdint. The second directive I want to show you is #define. This directive defines symbols to mean whatever you type at the right.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=189)** These symbols are called macros. You should be careful if you are defining something other than a simple constant because what this directive does is find and replace. So for example, let me define a constant called uppercase CAPACITY and it will mean 5000. Some of us prefer to name our defined constants with all caps. Now, every time the preprocessor finds the symbol CAPACITY all caps, it will replace it with 5000. Also notice that directives do not end with a semicolon. Now let me quickly write the contents of the main function. Starting at line 12, I'll declare two of different sizes. One will be a 32-bit signed integer from stdint. The format goes like this: It starts with a U if it's unsigned, this one is not, then int, then the bit length, which is 32, and lastly, _t for type. This variable will be called large and it will be initialized at CAPACITY. The next one will be an unsigned 8-bit integer. I'll name it small and initialize it at 37. Now let me add these two variables and save the result into the one called large. By the way, there's a shorthand operator for this,
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=288)** the plus equal operator like this. So this line is equivalent to large = large + small. And finally, let me print out the value of the large integer. The third type of directives I'll show you are used for conditional inclusion of code. These are #ifdef conditionals and they work in conjunction with defined directives. Remember, these are the preprocessor directives, not the if-then statements in the programming language. Here's how they work. Let me add a line to report that we are about to perform the addition. This can be useful for debugging purposes, so I don't want this line to make it to my final implementation. So the way to include code conditionally is by using the #ifdef directive, which means if defined, it includes the following block of code if a macro has been defined previously in your project. So now in line 14, I'll type #ifdef DEBUG. The block ends with the #endif directive. And the block of code will be a single line where I print the message about to perform the addition. Also, notice that directives are not usually indented with the code. Great. So let's see it running without defining the DEBUG macro. So here we only see that the large integer is 5037.
>
> **[6:29](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/preprocessor-directives?u=76281980&t=389)** Now notice what Visual Studio Code is doing to line 15. It's grayed out. Now let's add the definition of DEBUG in line 10. Notice that debug doesn't need to extend to any value if it's only used for an #ifdef directive. Let's try it again. Now you can see the debug message when that line was executed. So there you have it. Now you are free to choose whether to leave or comment out the debug definition line to include or exclude portions of your code.

> [!info]- Semantic Content
>
> **Env Vars:** capacity (3), debug (3)
> **Definitions:** is a  (1), known as (1), means that (1)
> **CLI Commands:** find (1), make (1)
> **File Paths:** stdint.h (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Constants](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=0)** - [Instructor] Now, let me tell you a little more about constants in C++. Constants are identifiers with values that will not change during execution. They are useful as parameters in your code, for example, to set the size of a screen or the length of a memory buffer. Constants may be implemented with defined directives or as regular variables. On the one hand, we may create constants with pre-processor directives. The #define directive schedules a find-and-replace operation so that the code that is sent to the compiler has all the instances of the #define symbol replaced by its value. These defined symbols are known as macros. An example would be to define the number of rooms in a house as four. Now, you should be aware that the use of #define is sometimes discouraged and considered a bad practice. That's because macros don't have a context and there's no compiler enforcement for basic features, like types and syntax correctness for macros. Besides, there's a better alternative. You can define regular variables as constants using the const qualifier. This is used in a regular variable declaration. Remember that declarations specify a type, so the compiler will notice any irregularities in the code related to the type. Also, scope encapsulation is enforced, so you have the order embedded in the language.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/constants?u=76281980&t=96)** Lastly, let me give you a warning. The const qualifier is not exactly the same in C and C++. The C version only means that a variable cannot change, but it lacks most of the features implemented in C++. That's one of the reasons why macros are more common in C than C++.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), means that (1)
> **Warnings:** be aware (1), warning (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### [Arrays](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=0)** - [Instructor] Arrays are collections of data. Each element is accessible by an index. Elements are homogeneous, meaning that they are all of the same data type. Arrays are fixed in size, so you may not resize them. And lastly, elements are continuous in memory. That means that the whole array is a sequential block of memory addresses. So let me show you some arrays. Let's start in line eight with an array of integers where we want to store the age of four people. The syntax goes like this. First, we specify the type, that's int. Then comes the name of the array age, and then between square brackets, the capacity of the array. We'll use four. Now let me assign values to each element in the array. Now this is important. Arrays in C and C++ are indexed from zero to N minus one, where N is the capacity of the array. This is a common source of bugs for beginners, so please try to keep it in mind. To access an element for reading or writing, you simply enter the elements index between square brackets after the name of the array, as you can see in line 10. Now let me assign the remaining elements. Once again, notice that I've indexed from zero to three because indexing starts at zero.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=96)** Next, let me print out the contents of the array. I won't use loops just yet, so bear with me. All right, that should do it. Let's see it working. There you have it. The ages are 25, 20, 19 and 19, just as expected. As with scaler variables, you are allowed to initialize arrays at declaration. You do that by providing a list of values between curly brackets. So in line nine, let me define a new array of three temperatures in degrees Celsius. Let's use floats for this. Now, notice that I will not specify the length between the square brackets. That's because I will assign a list with a constant length, let's say 31.5, 32.7 and 38.9. Notice that I didn't type an F at the end of each constant, so that's actually a list of doubles. Sometimes this is okay. In this case, the compiler can, safely, assign the float version of those values to your array. To learn more, you can go to [cppreference.com](https://cppreference.com) and search for implicit conversions. I'll tell you more about type casting or type conversions later. Also notice that although I am initializing this array at declaration, auto does not work for arrays.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=194)** So the type needs to be specified. And now let me add print lines for this array at the end of the main function. Let's see it working. Once again, here we have the expected values. Now let's add some constants to our code, so let's go back to the declaration of the integer array H. Here, I have used a number for the length, but suppose that the length will be used several times in the code. If we'd like to change that length, refactoring the code could be tiresome. Instead, we should use a constant with a name for this. Remember, we have two options, macros and constant variables. Let's use a macro first. So let me go to line seven and define H length as four. Notice that I did this outside the main function, but it wouldn't have been a local variable if I had placed it inside the main function either. Remember, this is a macro and macros have no scope. Now let me change the symbol in the array declaration to age length. Let's compile, and we have errors. This message box is asking if we want to keep debugging, show the errors or abort.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=288)** Let's see the errors. The first error says that the compiler expected a closing square bracket at line seven. The reason for this error is that our constant definition had a semicolon at the end as if it were a line of C++ code, but it's a pre-processor directive. You see, semicolons at the end of directives are not optional. They should not be there. Quite often, error messages are correlated. If we look at the second error, it's referring to line 10 where the array is declared using the faulty macro. So let me fix that and let me add an extra line that uses the H length symbol for it to be useful. I'll print the length of the array before printing its contents. HRA has H length elements. Let's see it working. As you can see, the length is shown correctly. The HRA has four elements. Now let me show you the recommended alternative to macros. First, I'll comment out the macro definition in line seven, and now I'll type constant H length equals four inside the main function. This will be local to main. And also remember, this is a C++ line of code so it requires the equal character for the assignment
>
> **[6:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/arrays?u=76281980&t=383)** and the semicolon at the end. Now instead of int, I should use a more appropriate type for sizes. That's the size T type. There you go. Just as a sanity check, let me run this to confirm everything went well. Great. Let's move on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), means that (1)
> **Versions:** 31.5 (1), 32.7 (1), 38.9 (1)
> **Env Vars:** hra (2)
> **UI Navigation:** go to (2)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Cross-References:** go back to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Strings](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=0)** - [Instructor] As I mentioned earlier, strings are not a type natively supported by the language. However, C++ supports the same implementation of strings as the C programming language. In C, strings are arrays of characters. That is, a sequence of consecutive characters ending with the null character, which is encoded as zero. More importantly, the string class in the C++ standard library is a widely-used model for strings with lots of useful functions. Let me show you some examples of C character strings and the string class. Partly, my goal is to talk you into using the string class rather than character arrays, because, well, the string class is the intended way of handling strings in C++. I'll start in line six, including the string header, which contains the string class. I'm also including the cstring header, which contains functions to handle character array strings. Remember that the letter c at the beginning of the header file name means that this is part of the C standard library. Now starting at line 10, I'll declare two character arrays as in C and two string objects as in C++. The first character array will be called array_str1. It will be able to hold 25 characters
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=96)** and I will initialize it to a string constant. But first, let me define a constant for the length above. Now, I want you to see that strings are somewhat supported by the language, at least constant strings are. They are enclosed by double quotes. So let me write "Hey guys! " and leave a space at the end. This constant string means a sequence of ASCII characters terminated by zero. All eight bits of the character after the last space are zero. The second array will be called array_str2. This time, I won't specify a length and I'll initialize it to "What's up?" Now, let me do something very similar with two objects of the string class. I'll name them std_str1 and std_str2, and initialize them with similar messages. Now, let's concatenate the two character arrays and the two string objects separately. I want to give you an idea of how to do this in both implementations. First, for the character array, the cstring header file provides the strcat family of functions. Different IDEs enforce different variants of these functions. For example, Visual Studio Code in [[GitHub]] [[Codespaces]]
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=191)** allows me to use the strncat function, but Visual Studio for [[Windows]] enforces the use of an alternative implementation called strcat_s. It depends on your standard library distribution. Again, I'll use the strncat function, which takes in three arguments. First, the destination string, which has the first part to concatenate and will hold the resulting concatenated string. Then, we specify the second array to concatenate. And lastly, the maximum length to produce. I'm using LENGTH1, or 25, because that's the size of the destination string. Now, this function modifies the first string, which is not always convenient. Let me print that out. As for the string class objects, I can concatenate the strings inside the printing line of code. There's a very cool feature of C++ called operator overloading. Overloading an operator means that you can redefine the operation performed by an existing operator, tapping into the semantics of the language. A nice example of this is the plus operator, which for numbers is a simple addition, but for the string class, it means concatenation, like this. Another convenient feature of this
>
> **[4:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/strings?u=76281980&t=285)** is that none of the operands get modified. Both strings remain intact after performing the operation. This way, I can simply add these two strings together, so to speak. Let me run this. And here, you can see both messages correctly stitched together, "Hey guys! What's up?" and "Hi everybody! How's the going?" That's it. I hope you find the string class convenient. You should have a very good reason to resort to character arrays in C++, and the reason is usually to make your code compatible with existing C code. This hasn't been an exhaustive demonstration of the capabilities of the string class by any means, so please go to [cppreference.com](https://cppreference.com) and check the entry on the string class for a detailed description of its functions and operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Codespaces]] (1), [[Windows]] (1)
> **Definitions:** is a  (2), means that (2)
> **Tools:** visual studio (2), github (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ascii (1), length1 (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Type casting](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=0)** - [Instructor] It's time to talk about type casting, one of the most valuable elements of C++, which gives you virtually full control of the data you are working with. Simply put, type casting is specifying how to interpret a piece of data. It's useful for converting data types. For example, you may have a 32-bit integer which you want to convert to a floating point number. Remember that floats and integers have very different encodings. The syntax is simple. Just type between parentheses the type you want followed by an expression that evaluates to the value you want to convert. Let me show you a quick example of type conversions. This first example will have implicit conversions. That is, conversions that don't explicitly cast the values. You've seen some of these before. For this, I'll use three variables starting at Line 9. The first one is a float named flt for float. The second will be a signed 32-bit integer named sgn, as in signed. And, lastly, an unsigned 32-bit integer named unsgn, as in unsigned. Now I'll go to Line 13 and start assigning values to these variables. First, let's assign 7.66 to the float.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=97)** Remember, an f character at the end of a floating point constant means that it's a float constant. But this one lacks that trailing f. So it's a double constant. And the IDE knows this. Let me hover over this value, and you'll see that it's recognized as a double. If I add the trailing f, it now becomes a float. Now for this example, I want to show you that it is possible to assign a double constant to a float variable. So I will remove the trailing f. In fact, to make it a bit more interesting, let's make this a negative number. This double constant will be implicitly converted to float. Now let me assign the same value to the remaining variables. So let me assign flt to sgn. Since we cannot assign a floating point value to an integer variable, the type will be converted. This is another implicit type conversion, or casting. When you assign a float or double to an integer variable, the value gets truncated. So we expect minus 7 here. Next, I'll assign sgn to unsgn. That is, I'm trying to assign a negative number to an unsigned variable. Since this is just not reasonable, this time, the number will be copied as is. That's the 32-bit version of the two's complement of 7.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting?u=76281980&t=194)** This is the same binary number, but it means different values in the variables. Let's see their values. I'll write a printing line for each, indicating their types. Let's see this running. So here we have the original number for the float type, minus 7.66. We also get the expected value for the signed number, minus 7. And for the unsigned integer, we get that big number. So if you grab your calculator and enter 2 to the 32nd power, and then subtract 7, you'll get this number. So this is the two's complement representation of minus 7. However, it is stored as an unsigned number. So the most significant bit is 1, and that means a big number. Now let's see our first explicit cast in Line 19. For the last variable, let me change what we are sending to the screen by casting the variable to a signed 32-bit integer. Now let's run it again. And there it is. The third value shown is minus 7.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Versions:** 7.66 (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Type casting examples](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=0)** - [Instructor] Now let's see a few more examples of type conversions. First, I'll convert a temperature value in degrees Fahrenheit to Celsius. This time I will use two regular int variables, starting at line nine. Remember, the length of the int type is implementation dependent, but I'll stick to small numbers. Let me start by initializing the Fahrenheit variable to 100. The conversion to Celsius goes like this, celsius = (5 / 9) * (fahrenheit - 32); Let's see what we get if we leave the expression like this. So let me print their values and run the code. As you can see, we get zero degrees Celsius, so something must be wrong. The problem is that the expression (5 / 9) is a so-called constant expression, which the compiler takes care of. It doesn't make it to the code that will be executed by the processor. Moreover, since both operators of that division are integer constants, the operator calculates the integer division, the quotient. So the quotient of (5 / 9) is 0. As you can see, Visual Studio Code is showing just that. To get the correct conversion coefficient, we need a floating point division.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=93)** We may do that by converting either of those numbers to a float or double. That's because expressions always convert the types of their values to the largest type present. So here I may explicitly cast the 5 to float, or alternatively, I could enter the constants as floats or doubles. Here I will do both. 5 will be explicitly cast to float and I will rewrite the 9 as 9.0, which is a double. Now let's see it working. There! 37 degrees Celsius seems more like it. Now, for another example, I'll show you how to extract the integer part and the fractional part of a floating point number. Let's use a float named weight and let me assign 10.99 to it. This is a good moment to show you a nice feature of C++. You are allowed to declare variables anywhere in the code, as opposed to having to declare them at the beginning of their scope. You may take this for granted if you are used to modern programming languages, like [[Java]] or [[Python (Programming Language)|Python]], but this wasn't very common back in the 1980s. Okay, now I'll print the float value in one line, the integer part in another line, and the fractional part in a third line. So in line 21, I'm printing the floating point number,
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=189)** which is weight. The integer part is the truncated version of weight. We get that by casting weight to an integer type I'll use int. Now for the fractional part, I'll need to get rid of the integer part and then shift the decimal digits left to get an integer of as many decimal places as I want to show. So, to get rid of the integer part, I can subtract the same integer part from the floating point number. This partial expression should contain 0.99. So I'll multiply this number by a power of 10 so that the integer part of the result contains all the decimal places I want to show. Since I want four decimal places, I'll use four zeros or 10,000. Now, we are almost there, but this expression is still a float, so we need to cast it to int. There, now it's looking good. Let's see it working. There you have it! The float is 10.99. The integer part is 10, and the fractional part is 9899. Shouldn't this be 9900? Well, yes, but remember that we are using floating point numbers, which are approximations with a small error. Now, this is not a limitation of C++ or its libraries.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/type-casting-examples?u=76281980&t=287)** It's a limitation of the floating point number representation. You'll get the same result if you try this in Python or Java. These are the real numbers you use in your computers and smartphones every day. You'll get a better approximation with doubles, maybe enough to show 9900 in the fractional part. So try changing the type of weight to double and see what happens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Python (Programming Language)|Python]] (2)
> **Versions:** 10.99 (2), 9.0 (1), 0.99 (1)
> **CLI Commands:** python (2), make (1)
> **Definitions:** is a  (3)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Enumerations](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=0)** - [Instructor] It's time to introduce the concept of enumerations. In C++ an enumeration or enum, is a convenient way of defining a set of named integer constants. It is declared as a list of identifiers, known as enumerators, which are assigned consecutive integer values starting from zero. That's why it's called an enumeration. Now, enumerations of this type were inherited from the C programming language, so they weren't really designed with [[Object-Oriented Programming (OOP)|object-oriented programming]] in mind, and that makes them inappropriate for C++ code in most cases. One such problem is that C style enumerators exist in the global scope, which may lead to naming conflicts or namespace pollution. Another problem is that C style enums lack strong type checking, allowing implicit conversions between enums and integers, which is a safety hazard. A much better alternative that was introduced in the C++ 11 standard are enum classes, also known as scoped enums, or strongly typed enums Enum classes effectively address namespace pollution by confining the enumerators within their own scope, reducing conflicts in the global namespace. Also, enum classes are strongly typed, which significantly enhances type safety in your code.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=98)** This prevents implicit conversions between enums and integers, reducing potential errors. Enum classes are aligned with modern C++ best practices and encourage better code organization and fewer errors. So let's see the benefits of using enum classes over C style enums. Here we have a startup program that has a C style enumeration in line eight, it is called cow_purpose and it will be used to encode the purpose a farmer will assign to a cow. The supported purposes are dairy, meat, hide and pet, and each of them will be assigned a sequential integer value starting at zero. So dairy is zero, meat is one, hide is two, and pet is three. In the main function we have the declaration of an integer, A, in line 11. Then we assign the value of meat to it. And lastly, we print its value on the terminal. Let's see it. That seems about right. A equals one, which is the encoding for meat. Now let's suppose that I carelessly declared an integer, also named meat, in the main function and assign eight to it. What do you think will print out, one or eight? Let's find out. Now there are two points I want to make here.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=193)** First, the compiler didn't complain about the duplicated identifier for meat. Second, the output shows A equals eight, which is the value of the variable in the main function, not the cow purpose and coding for meat. This is not a shortcoming of regular enums, but rather the expected behavior of a program with multiple scopes in C++. It turns out that meat is a local variable to the main function, so when we use the name meat in the main function, it will assume that we mean the one in its scope. We can always use the scope resolution operator, double colon, to solve this. But the real problem is that the names in the enumeration don't have a scope. They would work pretty much like global variables. And remember, global variables should be used sparingly or not at all, so that's one problem. Now let's suppose that our application also requires a second enumeration to encode sections of a grocery store. I'll name this enum grocery_section. The supported sections will be canned, frozen, meat, laundry, dairy, and bakery. These names will be assigned the values zero through five respectively. You may see another problem here. Both enumerations contain the names meat and dairy.
>
> **[4:49](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=289)** Moreover, they encode these options with different values. Meat could mean one or two, and dairy could mean zero or four. If we try to compile and run, this application will certainly get an error. But why bother? We can see it if we hover over the red squiggly underline. It reads, "Redefinition of enumerator 'meat'." A forced solution would be to change the names for meat and dairy in one of the enums, what a mess. Instead, we can fix all those problems by using enum classes, also known as scope enums, or strongly typed enums. I can do this by changing the declarations from enum to enum class. Notice that the squiggles are gone. To refer to enum class members, we now need to use the scope resolution operator, double colon. That's because classes are strongly typed, which means that the compiler will enforce the correct use of their distinct type, and it will not assume that they are integers. So let me go to line 15 and update the name of meat to cow_purpose::meat. And there's the red squiggle again. It reads, "A value of type 'cow_purpose' cannot be assigned to an entity of type 'int'." This is not bad.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/enumerations?u=76281980&t=383)** This is the compiler helping us by doing its job. Since A is an integer, we have two options. Either cast meat to int like this. This way the compiler will not be required to assume anything. As you can see, the squiggle is gone. The second option is a bit more appropriate, and it's declaring A as a variable of type cow_purpose, like this. This way we no longer need to cast meat to int in line 15. In fact, we need to remove the cast because enum classes are strongly typed. Thank you compiler. Are we done? No. Another squiggle came up when we changed the type of A to cow_purpose. Look at line 17. It turns out that the insertion operator used with cout is not defined for appearance of the cow_purpose type. So let me just cast A to int. I know, all this explicit casting may feel a bit inconvenient, but it's actually a good practice that improves the quality of your code. There you go. Not only will this compile without complaints, but all definitions of meat will coexist unambiguously in our code. So let's see it running. Great. A equals one as expected. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Definitions:** is a  (4), known as (3), is called (1), means that (1), is an  (1)
> **Code Identifiers:** cow_purpose (6), grocery_section (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Calculate an average](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-an-average?u=76281980&t=0)** - [Instructor] It's time for another challenge. This time your task is to perform some numeric operations to finally calculate the average in an array of five integers. Just add the values and divide by five. You'll have to store your result in a float variable, so be careful with that division. To test your calculations, try using a combination of numbers where the average is not an integer. Finally, print that floating point average on the screen. Feel free to start with the code provided in the exercise files, which contains the declaration of the array and the floating point variable, and also the line to print the results. This way, you can concentrate on the calculation of this average. This challenge shouldn't take you more than 15 minutes, so have fun and watch the next video for my solution.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Calculate an average](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-an-average?u=76281980&t=0)** - [Instructor] Here's my solution, first in line eight, I have created an array of five integers named NUMs, and I have initialized it with some numbers. Next, I declared a float named result. Then in line 11, I didn't need to cast the elements of NUMS or their sum to float because I'm assigning this sum to a float anyway. Then in line 12, I'm dividing the sum by five. Notice that I'm using the shorthand operator for dividing result by five and updating its value. Finally, I print out the result. So let's see it working, and here we can see that the average is the expected value. I hope you're getting the hang of this. There's still much to learn.

> [!info]- Semantic Content
>
> **Env Vars:** nums (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Structures, Classes, and Pointers

[↑ Back to Table of Contents](#table-of-contents)

#### [Structures](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=0)** - [Instructor] Now we are going to talk about C plus plus structures, which are containers of heterogeneous data members. This means that you can group integers, strings, and other objects in one structure that contains them. Structures are useful for implementing simple models that only need to have data members. Structures are also available in C, but they do not follow the same syntax rules as in C plus plus. Let's see a simple example of a structure. Let me start by defining the structure, for this we will use the struct keyword followed by the name of the structure. We'll use this structure to make a simple model of a cow. So let me write this definition at line eight. The contents of the cow structure are enclosed by curly brackets, and the closing bracket does require a semicolon at the end. The cow structure will contain a string member for the name of the cow, an integer member for the age, and I will use an integer to encode a purpose the farmer will assign to the cow. For this, I will use the same enum class cow purpose we saw earlier. That's it, now let me show you how to use this structure. Let me go to line 17 and assign values to a cow variable in the main function. Let's call it my cow.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/structures?u=76281980&t=93)** To access the members, we use the member access or dot operator. So my cow's age will be five. Her name will be Betsy, and her purpose will be dairy. Notice that what I have just assigned to the purpose of Betsy is just a number that happens to be called dairy in my code. I have not assigned the string dairy to it. And finally, let me print out Betsy's info. Let's print the name and I will not print the purpose, just the encoding of it, as in Betsy is a type three cow, for example. Now let me print the name and age, as in Betsy is seven years old. That's all, so let's see it running, and there you have it. Betsy is a type zero cow, Betsy is five years old.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Classes](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=0)** - [Instructor] Classes are basic elements of object oriented programming. They are intended for implementing models. They contain two types of members, data and functions. And just to be clear, classes mean the same thing in C++ as in [[Java]] or [[Python (Programming Language)|Python]]. So I'd like to start with the previous example where we modeled the cow with a struct. I want you to see how similar classes and structures can be. So the first thing I'll do is go to line 10 and change the struct keyword to class. That's almost it. In fact, let's try it. We got some errors. The first one reads "cow:age is private within its context," and the second one reads "member cow:age is inaccessible." That's because in the main function, I'm trying to access the cow's members, but by default class members are private. So with this error, we see that the class is actually doing its job of hiding its members from the outside world. So for you to see how this class may behave, just like the struct we have, let me add the public keyword to all members of the class. You simply type public and a colon. So there you have it.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=92)** We have converted a structure into a class. Well, actually it's more like I have forced a class to be underused as a structure. Now classes offer all the elements of object oriented programming, and we should take advantage of those elements. So let me start by applying a feature of encapsulation, which is hiding the data from the outside world. So I'll explicitly specify all members as private instead of public. Now we have to modify our code to be able to access the age, name, and purpose of the cow as they are now private. For this, it's important to note that there are two [[Forms]] of data access going on in the main function. When we assign values, we are writing into the data members, and when we print their values, we are reading them. It is always recommended to keep your data private as much as possible. But remember, that classes can have members of two types, data and functions. So a typical means of accessing the data is by defining member functions called setters and getters. Setters write into data members and getters return their values. Now, as you may already know, functions are modules of code that perform a task. They may take in data and return a value. Functions can be called from your code,
>
> **[3:07](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=187)** even from other functions. So let me go to line 11 and define three getter functions, get_name, get_age, and get_purpose, and they will all be public. Functions must first specify the return type, then the name of the function, and then a list of parameters between parentheses. The first one will return a string and it will be called get_name. The body of the function is a code block, so it's enclosed by curly brackets. Now, getter functions are not supposed to modify anything in the object they get data from, and so it is considered a good programming practice to declare getter functions with the const qualifier after the parameter list. This way, the compiler will prevent the programmer from modifying the objects inside that function. This technique is part of a wider concept known as const correctness. Getters are super simple. They do not receive parameters, and they just return a data member with the return keyword. Now let me write the [[Representational State Transfer (REST)|rest]] of the getters. I suppose I don't always use parenthesis in the return expression. I will write the setter functions later, but now we will write a very special public member function known as the constructor. The constructor of a class is called when an object is created. An implicit constructor is always implemented,
>
> **[4:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=281)** which simply creates the object, allocating memory for the data members. However, you can always write additional versions of the constructor by taking a custom set of parameters. This is known as overloading a function, and it means defining a function with the same name of an already defined function, but with a different set of parameters. A classic constructor overload receives initialization values for all the data members. That's what I'll write next in line 12. A constructor is the only kind of function that does not specify a return type, and its name must be the same as the name of the class. So this will be cow and the parameters will be the same members. I'll use different names for the initializers to avoid ambiguities. So I'll receive a string name_i for initializer, and integer, age_i, and a cow purpose, purpose_i. The body of the constructor should contain the initialization code you want for your new object. In our case, it's simply assigning the values to the members. At first, it may appear that setters and getters are taking away the benefit we got from private access in the first place. But the purpose of having private members is not to make them unavailable to the outside, but simply to restrict their access
>
> **[6:15](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/classes?u=76281980&t=375)** to code within the class. If you write a class with elements that are correlated, you don't want the user to tweak the data freely, possibly breaking something. It's best to have a function written by you, the author of the class, to perform operations that affect the data. Now our class is functional, but if you try to run this example, you will get some errors, because we still need to modify the main function to use the class correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Python (Programming Language)|Python]] (1), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** known as (3), is a  (1), is called (1)
> **Code Identifiers:** get_name (2), get_age (1), get_purpose (1)
> **CLI Commands:** python (1), make (1)
> **UI Navigation:** go to (2)
> **Best Practices:** recommended (1), it's best to (1)
> **Prerequisites:** initialization (2)
> **Analogies:** just like (1)

#### [Using classes](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=0)** - [Instructor] Recall that the existing code for this example was using the members of the cow class directly as public members. Now let me update the main function, replacing the member access expressions with the constructor or the getter functions. So lines 33 through 36 will be modified to a call to the initializing constructor. We do that by writing the name of the new object as if it were a function call, including the arguments as a list between parentheses. This calls the constructor we just wrote. So this cow will be called Hildy. She'll be seven years old, and I want her as a pet. Notice that this line also replaces the following three lines. Now, for the reading axis of members, I will replace the name of the data with the name of the getter function, which is the same, but with get underscore as a prefix. And don't forget the empty list of arguments. And that's it, let's try it. Now we can see that everything went well as Hildy is a type three cow, and Hildy is seven years old. Now, just for completeness, let me write one setter function for the age in line 26. Remember, this must be public
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-classes?u=76281980&t=94)** and I will not return anything. This is specified as returning the void type. Now the set age function will do the same as the constructor, but only modifying the age. As an exercise, go ahead and try using this setter function and then write the remaining setters for the name and purpose of the cow.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Header and implementation files](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=1)** - [Instructor] It's time to talk about source and header files. But before we do, let me show you how your source code gets compiled into an executable file. A compiler toolchain is a pipeline of software tools that convert source code into an executable file. To illustrate how a compiler works, I want to show you three different [[Forms]] of input you may feed to the compiler tool chain in a single [[Software Development]] project. The first case is when you write your C++ source files. Then you feed those files to the compiler, which is the first big program the code goes through. The compiler translates your C++ code into Assembly language, which is a human readable version of the native language of the target CPU. So a new file with Assembly code is created. This file is fed to a second program known as the assembler. The assembler produces a so-called object file, which is almost executable, but it may contain just pieces of the code you want to use in your final executable. Great. Now let's talk about the second input case. This is when you write your own Assembly code. Although this can be a hassle, sometimes you have no choice but to write your own low level code. This is often the case when you need to write a peripheral driver. So in this case, you may feed an Assembly file
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=95)** to the assembler and it will produce another object file. And now the third case is when you include libraries for which you only have access to the object files, not the source code. In fact, libraries are often distributed as object files or some compatible variant just like we have been including IO stream or string in our examples. Now we are left with a handful of object files, which are correlated pieces of your project. These files are sent to a third program known as the linker. The linker's job is to stitch these subject files together to produce an executable binary file. This is the program you finally get to run. Specifying all the files to compile is fairly easy if you use an integrated development environment or IDE. However, at some point you may have to work with a compiler in the command line and it can get complicated. Usually all this information is already specified in a text file. A popular example of this is known as a make file. Once again, IDEs take care of this for you behind the scenes. Now let's focus on the C++ source files. C++ code is usually written as a header and implementation file pair. These two files have the same name,
>
> **[3:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/header-and-implementation-files?u=76281980&t=190)** but the header file usually has the .h extension while the implementation file has the .cpp extension Header files contain definitions and function declarations. They may also contain macros, but not executable code. Implementation files contain, well, the implementation of all functions declared in the header file. That's the executable code. Implementation files must include their corresponding header files because the compiler needs to see the class definitions and function declarations before seeing the code in your implementation file. Your external code, the one that uses your classes, should only include the header files, not the implementation files. And lastly, all implementation files must be compiled. You need to include them in the list of source files in the command line, your make file, or the IDE you are using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Software Development]] (1)
> **Definitions:** known as (3), is a  (2)
> **Env Vars:** ide (2), cpu (1)
> **Exercise Files:** source code (3)
> **CLI Commands:** make (2)
> **Tools:** command line (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using several source files](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=0)** - [Instructor] So let's take our cow class and move it to its own cow.h and cow.cpp files. I will add these files in Visual Studio Code, but it's just as simple in pretty much every other IDE. I'll start with the cpp file. So let's go to the folder for this exercise, which is 03_05b. That's the begin folder. Let me right click there and select new file. Now I'll type cow.cpp and hit enter. The file will be created and open in the editor. The action of creating this cpp file is not what will include it in the list of files to be compiled. This file will be compiled because that's how the tasks.[[JSON]] file is configured. Let me show you. Let's go all the way up to the .VSCode folder and open tasks.json. Here we have all the configuration parameters for the tasks to be executed by VS Code. This is how our files are compiled in this setting. The most important elements are in lines 6 and 7. In line 6 we have the compiler command, which is the G++ compiler, and in line 7 we have the set of arguments VS Code will send to the compiler in the command line. In line 10, we have the C++ standard we want
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=94)** to support, which is C++ 17. Then in line 11 we have the list of source files to compile. So in this setting, I have instructed VS Code to compile all .cpp files it finds in the same folder as the source file shown in the editor whenever I click on the run or debug button. In principle, the content of this JSON file is the same information we would write in a make file. Alright, now for the header file, let's go back to the begin folder of this exercise, right click and create the cow.h file. I will start the new header file with the directive pragma once. This is telling the compiler to only include this header file once. It's very common to include the same header file in multiple source files. And this is not necessarily a bad practice. So this pragma directive prevents an error where the compiler finds definitions it has seen before in the same file. Now with that being said, the use of pragma once is not standard. Visual Studio Code supports it, but not all compilers do. So an alternative for this is using what is known as an include guard. And include guard is a simple trick using the ifndef directive. It works like this.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=186)** You start your header files with ifndef, some macro, which usually mimics the file name. This one is called COW_H. The directive means if the COW_H macro is not defined, then include the following code. We close the statement with endif, usually with the macro name as a comment. And now the first thing in the body of the conditional block is the definition of the macro. So that's defined COW_H. Again, this is called an include guard and it's supported by all compilers. I'll leave the pragma and the include guard for this file, but usually only one is used. Now let me cut and paste the class and enumeration definitions from the main source file called code demo.cpp into cow.h.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=250)** We are almost done. The only problem left is that the header file contains the implementation of the member functions. So I'll move the implementations to the cow.cpp file, but I'll leave the declarations of these functions. Basically, I need to leave the function headers ending each line with a semicolon. So first, let me copy the implementations and paste them to the cpp file. Now let me get rid of the implementations in the header file.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-several-source-files?u=76281980&t=291)** Now notice the red wavy underlines under the string class. That's because we haven't included the string library. There, our header file is looking good. Now let's tidy up cow.cpp. First I need to include cow.h and notice that I did this between quotes because cow.h is not a part of the standard library, and now I need to resolve the scope of all the members of cow in this file. It's very simple. I just need to type cow double colon before the name of each function. The first one is the constructor. Then we have get_name, get_age, and so on and so forth. Lastly, let me include cow.h in the main source file. Remember, that's CodeDemo.cpp. And now let's compile and run just to make sure we didn't break anything. Oh yeah, it's all looking good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **File Paths:** cow.h (6), cow.cpp (4), tasks.json (2), demo.cpp (1), codedemo.cpp (1)
> **Tools:** vs code (3), visual studio (2), command line (1)
> **Env Vars:** cow_h (3), ide (1), json (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** get_name (1), get_age (1)
> **UI Navigation:** go to (1), click on (1)

#### [Pointers](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=0)** - [Instructor] Pointers are an essential part of the C programming language, which is the foundation of C++. In this course, we'll only cover the basics of pointers. Later on, you may want to learn about smart pointers, an important addition to the language in the C++ 11 Standard in an effort to prevent common issues like memory leaks and dangling pointers. Pointers are a special type of variables that hold memory addresses. So for example, for 32-bit architectures, pointers are 32 bits wide. Let's suppose we have this partial memory map with the locations shown at the left and the slots are the memory units. Now, the memory is organized with an address for each byte, and I will show you an example with 32 bit integers. That's why addresses are shown in steps of four, because each integer takes four bytes. So when you declare a 32 bit integer like this, int a = 37; the compiler reserves a memory location for it. Let's say a got address 104 assigned. Since we initialized it at 37, the contents of that memory address will be 37. Now, to declare a pointer, the syntax goes like this. We specify the type of the variable we will be pointing to,
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=95)** followed by the name of the new pointer, preceded by an asterisk. In this example, that would be int *ptr. Remember that pointers are variables themselves and so the pointer is allocated at some memory location. In this example, let's say it goes to address 120. Now it gets interesting. If we assign an address to the pointer, then it will point to that address. So let's make ptr point to a. You can do it like this. ptr = &a; The prefix & is the address of operator, and it does precisely that, return the address of the variable at its right. If we run this code, the contents of address 120 will be the address of a, or 104. Because of this, it is colloquially said that ptr now, quote unquote, points to a. Let's see that example in a live demo. I'll start in line nine by declaring a and the pointer we just saw. Now let me assign the address of a to ptr. Now let me add some lines to print the memory addresses and contents of the variables. First, we'll show the content of a. For this, we simply use the variable's name, a.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=189)** Now we'll show the address where ptr is pointing to. Remember, this is the content of the variable ptr, which is an address. So I'll simply use the name of this variable again, that's ptr. Now we'll show the address of a. For this, we used the address of operator we used before. That's &a. Now let me print the contents of the memory address where ptr is pointing. To access this data, we use the indirection operator. That's a prefix asterisk. Notice that cout will print an integer for this last value, not a string or a floating point number or anything other than an int. That's because we declared ptr as a pointer to int. That's one of the reasons to specify a type for the target of a pointer. And lastly, let me print the address of ptr as a variable. Again, I will use the address of operator. Now, for the addresses, we will not see 104 and 120 as in the example. Instead, we'll see whichever addresses are assigned to the variables at runtime. Let's see these results. We have that the content of a is 37. ptr is pointing to an address ending in de4c.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/pointers?u=76281980&t=288)** The address of a is the same as where ptr is pointing. That's good. Where ptr is pointing, we have 37. That's also good. And lastly, the address of ptr is different from the address of a. That's it for the essentials of pointers. Remember, once you have fully understood the use of pointers, you may want to look into smart pointers for a safer alternative.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using objects with pointers](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=0)** - [Instructor] The previous example may have shown you how pointers work, but pointing to existing variables isn't particularly useful. One of the most important applications of pointers is dynamic [[Memory Management]]. When you declare a variable, you are statically allocating memory for it. The compiler knows the space in memory that will be needed. However, most real applications create variables and objects in memory during runtime. This is known as dynamic memory management. In C, it is common to dynamically allocate memory using the malloc family of functions, which is short for memory allocation. You, as a programmer, are responsible of freeing up the memory you allocated in runtime to avoid memory leakage. But this is where C++ really shines. The use of pointers is supported by the language to dynamically allocate memory for new objects when calling the class constructor, and also to free their memory when you no longer need them. Let me modify our cow code by using dynamic memory allocation. So instead of declaring a cow object statically in memory, let me go to line 10 and declare a cow pointer called my_cow. And now in the former declaration in line 12, I will assign to this pointer the address of a dynamically allocated instance
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=95)** of the cow class. This allocation is done with the new operator. You just type new and then call the constructor of the class by its name, like this: my_cow equals new cow, and this cow will be named Gertie. Her age will be three and her purpose will be hide. We are almost done. Notice the red squiggles when we try to access the members of my_cow in lines 13 and 14. That's because my_cow is no longer a cow object, but a pointer to a cow object. So the dots or member of object operators are now inappropriate. The correct way of accessing the members of appointed object would be the first dereference, the pointer, and then access a member of the object the pointer is pointing to. For example, in line 13, I could change the access of my_cow.get_name to asterisk my_cow. I have to enclose this in parentheses to dereference the pointer and then dot get_name. So this is valid, but it requires a set of parentheses and it can get messy if you dereference a series of pointers, instructors like trees or linked lists. So there's a shorthand operator for this. It's the member of pointer operator, and I love it because it's a nice right bound arrow.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-pointers?u=76281980&t=192)** You simply place the arrow between the pointer at the left and the member at the right. No need for parentheses. Lastly, remember that this object was dynamically created, so I'll delete it when I'm done using it. We do that with the delete operator, which does the opposite of the new operator. In this case, the program will end right after deleting the object, so the whole memory will be freed anyway. But it's important to delete the objects you no longer need to avoid memory leakage. By the way, the delete operator calls a special function in your class called the destructor, which is useful for freeing dynamically allocated memory within your objects. So let's see if this new code works as expected, and it looks like it does. Gertie is a typ-2 cow. Gertie is three years old.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (2)
> **Code Identifiers:** my_cow (6), get_name (2)
> **Definitions:** known as (1), short for (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [References](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=0)** - [Instructor] References are a special category of data types I haven't yet mentioned. References are aliases to existing variables, so a reference becomes an alternative name for a variable. To declare a reference, you simply use the type you want followed by &. Here we have a declaration of a reference named my_ref, which makes reference to an existing integer named my_int. Once declared, references use the same syntax as the referenced variables so you don't have to dereference as a pointer, for example. Now it's important to point out two things about references that have certain implications. First, references are not pointers, and second, references are not objects. Moreover, references don't have an address, and this has some important implications. First, there are no arrays of references. That's because to index an element in an array, you need an address. Second, there are no pointers to references for the same reason. And third, there are no references to references. Actually, you may initialize a reference to another reference, but they will both be aliases to the original variable. So it doesn't make much sense to declare a reference to a reference. Since pointers and references both allow us to refer to a variable indirectly, let me tell you some important differences between them. For pointers, initialization is optional,
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=95)** whereas references must be initialized at declaration. This means that a reference guarantees you'll find valid data when you use it. That's not the case for uninitialized pointers. Pointers can point to different objects. That is, you may use the same pointer to point to one variable, then make it point to another variable, and so on. On the other hand, references can't reference a second object. They are stuck with the object that was assigned to them at declaration. Pointers have several related concepts. For example, a pointer can be declared with the void type, which simply means that the pointer may point to an object or variable of any type. Pointers can also be assigned the NULL value, which means that the pointer isn't pointing at valid data. References, on the other hand, have a fixed data type and the fixed object to make reference to. Pointers may have multiple levels of indirection. By this I mean that you may access data with a pointer that points to a second pointer, which points to the data. That's two levels of indirection. Now, references have only one level of indirection. As I mentioned earlier, declaring a sequence of references simply makes multiple aliases to the same data. And lastly, pointers must be dereferenced when you want to access the data, and there's no need for dereferencing a reference
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/references?u=76281980&t=188)** because it's simply an alias, another name for a variable. So based on these references, you may conclude that pointers are more powerful than references, but references may be safer than pointers. So far, references don't seem very useful because having another name for a variable doesn't really solve a problem. So here, we have some useful applications of references. First, when you write a function, all parameters are passed by value by default, but you may also pass parameters by reference. Among other things, this means that you may modify the variable that was sent as an argument within your function. With references, you may avoid copying large objects, which may contain large amounts of data. If you use a parameter by reference, the program will not end up making an unnecessary copy of that data. And the same applies to for loops. There's a special form of for loops that uses a variable to iterate through a container, like an array or vector. This variable may require to copy each element in each iteration. References help us avoid this unnecessary copying of data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Definitions:** means that (4)
> **Code Identifiers:** my_ref (1), my_int (1)
> **Analogies:** for example (2)
> **Env Vars:** null (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Vectors](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=0)** - [Instructor] We have talked about arrays, but I don't recommend using them for your applications as a first option. Instead, you should consider using STL vectors. These are dynamic-size containers. That means that you may resize them in case you need to add data to your collection or delete elements. The memory required for vectors is managed for you. That means that you don't need to allocate or free that memory manually. However, if the objects you are putting inside your vectors allocate memory manually, well, you are responsible for those as usual. Vector is a generic container class. That means that vectors can be implemented for storing any type of element, ints, floats, strings, or even objects of your own classes. It also means that there are numerous member functions for manipulating vectors conveniently available within the class. Vectors are a part of the C++ Standard Template Library. This is a special set of containers, functions, and [[Algorithms]] included in the C++ Standard Library as part of the [[Generic Programming]] style. Let me show you a few examples of STL vectors with integers. The first thing we need is the vector header. Now let me declare a vector of integers in Line 10. Remember, this is a template,
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=96)** so we must specify the data type. We do this with angled brackets. I'll name this vector, primes. Vectors come empty by default. Let me confirm that by printing its size. Notice that I'm using the size member function for this.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=122)** Yes, the vector has zero elements. Now let's add elements to it. Vectors have two ends, a front end and a backend, and we may only insert elements through the backend. The reason for this is because vectors are guaranteed to store elements consecutively in memory. So inserting at the front would always require reallocation. So starting at Line 12, I'll use the push_back function to enter 2, 3, 5, 7, and 11, one by one.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/vectors?u=76281980&t=161)** Now let's run it again. And now we have five elements in the vector. Conveniently, the vector class supports square brackets, and we may use them just like arrays. So we can print the value of arbitrary elements by index. For example, let me print the value of element, 2. Remember, the index 2 means the third element. I'll do that in Line 18. We can also access elements for writing. So let me change the number at index 2 to a new value of 13. And let's print its value once more. All right, let's see it running. And as you can see, the element at index 2 changed from 5 to 13.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Generic Programming]] (1)
> **Definitions:** means that (4), is a  (3)
> **Env Vars:** stl (2)
> **Exercise Files:** template (2)
> **Analogies:** just like (1), for example (1)
> **Code Identifiers:** push_back (1)
> **Speakers:** - [instructor] (1)

#### [Using objects with vectors](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=0)** - [Instructor] Now I want to show you how to work with vectors of objects. So let's get some cows into a vector. I'll declare this new vector in line 11. Let me call it cattle. To enter each cow we can use the overloaded constructor we wrote. So let me add four cows. Now let me type the constructors. And lastly, I will print the names of these cows, but I will do it using a different means of element access. Vectors support iterators, which are special objects that allow you to traverse containers. They work with similar semantics as pointers. In fact, pointers are a type of iterator. In line 18, let me print the name of the first cow in the vector. To access the first element in a vector, we can use the begin function, which returns an iterator to the first element. Once again, notice that since iterators work like pointers, we can use the member of pointer or arrow operator to access the get name function.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-objects-with-vectors?u=76281980&t=78)** Conversely, to access the last element, we can use the end function, but this one returns an iterator to the element after the last element. So we need to decrease this iterator by one. For this, I can simply subtract one to the functions return value, or I can use a special function called prev, as in previous, which guarantees going back a number of positions in the container. Let me use this to access the next to last cow. The syntax goes like this, first you type prev. The first argument is the iterator, and the second argument is the number of positions you want to go back. In our case, that's two. And let's not forget to call the get name function. And why not let me show the second cow's name by index? Notice that in this case, I am accessing the get name function with the member of object or dot operator, because this is not an iterator, it's an object. So let's see it working, and there's what we expected. Our cows are Betty, Libby, Trudy, and Betsy.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Challenge: Create some classes](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=0)** (bright curious music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-some-classes?u=76281980&t=5)** - [Instructor] It's time to start shaping our student record system. To this end, your task is to create three classes, student, course, and grade. With these classes, we'll be able to model students taking courses and getting grades. The student class must have two members, an integer for the student's ID and a string for the name. The course class must have an integer for the course ID, a string for the name and an eight bit integer for the credits. And the grade class must have an integer for the student ID, an integer for the course ID, and a chart for the grade as an ASCII character. We'll only use uppercase A, B, C, D, and F for the grades, no plus or minus. For these classes, your task is to write the constructors and gather function implementations. I have provided the class definitions in records.h. You'll have to write the function implementations in records.cpp. And you don't have to write the test code from scratch. Feel free to use the code I've provided in the usual CodeDemo file. So please take a minute to look at the source files before you start writing your implementations. This may take you about 20 minutes. When you're finished, let me show you my solution in the next video.

> [!info]- Semantic Content
>
> **File Paths:** records.h (1), records.cpp (1)
> **Env Vars:** ascii (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright curious music) (1)

#### [Solution: Create some classes](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=0)** - [Instructor] Here's my solution. The records.CPP file starts by including the .H file. This is important because that file contains the function prototypes, and next, notice that the constructors are simply assigning the arguments to the member variables. You can see the constructor for the student class in line three and the constructor for the course class in line 14. And the getter functions are even simpler. They just return the member variable they're supposed to return. They are all one-liners. Here you can see the constructor and getter functions for the grade class. Now let's look at the test code in codedemo.cpp. Starting at line nine, I'm creating one object for each class. We have student number one named Hilda Jones. We have course number seven named physics 101 with four credits, and we have a grade, which is for student number one, Hilda, at course number seven, physics, and she got a B. Remember this letter B is a single character, not a string, so it has single not double quotes. Then starting at line 13, I'm printing out some elements of these objects. Let's try it.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-some-classes?u=76281980&t=94)** As you can see, everything is shown as expected. The student is Hilda Jones, the course is physics 101. That course has four credits, and Hilda got a B in physics.

> [!info]- Semantic Content
>
> **File Paths:** records.cpp (1), codedemo.cpp (1)
> **Env Vars:** cpp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Control Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [If statements](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=0)** - [Instructor] Now let's get to know some control statements. These are parts of the code where execution may take different paths depending on some condition. Let's start with if-else statements. First, let me declare some variables starting at line eight: an integer named a initialized at 1,023, a Boolean named flag initialized as false, and a char named lttr for letter initialized as lowercase d. Now let's write some conditionals. The syntax for an if statement goes like this. First we type the if keyword, and then comes the condition which always goes between parentheses. I'll compare a to 1,000. If a is greater than 1,000, I'll print a message on the screen. So after the conditional comes the block of code you want to execute when the condition is true. There is no then keyword. Now I want you to notice two things. First, if a block of code consists of exactly one line, there is no need for curly brackets. You may place them if you want, but they're not required. And second, the else part is optional. There are some cases where you only care about the case where the condition is true like this one.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=94)** Now let me show you an if-else statement. This time, my condition will check whether a is even or odd, and I want to report either case to the screen. So to do that, I can calculate the remainder of dividing a by two. If the remainder is one, then a is odd. If it's zero, then a is even. So I'll use the remainder operator and compare it to zero. Notice that I'm using the double equal operator, which is the comparison operator, not the assignment operator, which is single equal. But think about this. Remember that in C and C++, zero means false, and anything other than zero means true. So comparing something to zero is the same as comparing it to false. If the expression results in zero, then the else part will be executed. Thus, there is no need to compare to zero, so I'll just leave the remainder expression as my condition. When this result is not zero or true, the number is odd. So let me write that. Now comes the else keyword and then the block of code for the false path. Now this trick of performing some operation without a comparison only works when you intend to compare to zero,
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=188)** but it may make your code difficult to understand. So feel free to compare explicitly if you prefer. Conditions may be long expressions. For example, let's report if a letter is a vowel or not. I'll do this by conditionally printing not in the middle of a sentence. The sentence we'll send to the screen will go like this, the letter, whichever letter we have, is, and then we decide whether or not to add the string not. For this, I'll compare the letter with all five vowels in their lowercase and uppercase versions. So that's 10 comparisons. I'll check if the letter is not a and not e and not i and so on. Notice that the logical and operator is double ampersand, but be careful. The bitwise and operator is a single ampersand. Also, notice that the not equal operator is composed of the exclamation mark and equal characters. By the way, you may break lines as you please in C++. Then in the positive case of the condition, we print not. And after the if statement, we finish the sentence.
>
> **[4:44](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/if-statements?u=76281980&t=284)** And lastly, you may hold conditions in Boolean variables and check their values later. Let me place an if statement that uses our flag. There, let's see it working. As you can see, everything looks as expected. A is over 1,000. A is odd because it's 1,023. The letter d is not a vowel and the flag is false. Now go ahead and change the values of the variables to see the opposite behaviors.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Switch statements](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=0)** - [Instructor] Case statements are called switches in C and C++. A switch is a branching statement that allows your program to take one of several paths based on the value of a variable. It's like an if-else statement, but with any number of outcomes, not just two. To illustrate this, let me show you a quick and dirty calculator. In line eight, I have declared three floating point variables, operand_1, operand_2, and result. And I also declared ACHAR for the user to choose the operation to perform between these two operands. Then we have some code to get both operands and the operation from the user. So let's take it from here. In line 18, I'll start writing our switch statement. The syntax goes like this. Type switch followed by the name of the variable between parentheses. We will decide based on the operations selected by the user. Next, the code block inside the switch statement is very particular, and it always requires curly brackets. Inside, we will list every case we want to [[React.js|react]] to. We do this with the case keyword, followed by a constant of interest and a colon. I'll start with the plus sign for addition. Notice that this is a character constant,
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/switch-statements?u=76281980&t=93)** so it's enclosed by single quotes. Now, the execution control will be transferred to this entry point if operand is the plus sign, and it will go on until it reaches either a break statement or the switch ends. For a classic case statement behavior, you'll want to end every case block with a break statement, which terminates the execution of the code inside the switch. So for the plus sign, I will assign the addition of the operands to result and add a break. Let me do the same for subtraction, multiplication, and division with the respective operators. Switches also allow you to specify a default case for any value not specified above. I'll use addition as default. That's it for the switch. Notice that line 36 is reporting the result. So let's try it. All right, let's multiply three by seven. And the result is 21. Go ahead and try the other operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** achar (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [While loops](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=0)** - [Instructor] Now let's get to know loops. The simplest loop in C++ is the while loop. It has two [[Forms]]: while which evaluates a condition prior to iterating, and do while, which always runs the first iteration and evaluates the condition at the end of the loop body. Let me show you how to print all the elements of a vector with a while loop. In line nine, we have the declaration of the vector named numbers. And just like arrays, vectors can be initialized at declaration with a list. Here, I wrote five values in ascending order. Then in line 11, we have an iterator declaration and initialization. This iterator will be used to traverse the vector. Notice that iterators are usually defined within their classes, even generic classes. This iterator type belongs to the vector of integers class. I have initialized it at numbers.begin, which is an iterator pointing to the first element of the vector. I named it ptr as in pointer. Now with a tight name as complicated as this one, this is a good opportunity to use the auto type like this. Now let's write our first while loop. The loop starts with the keyword while followed by a condition to keep iterating as long as the condition is true.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=95)** So we'll iterate while ptr is not equal to numbers.end, which is the element past the last element in the vector. Now the body of the loop will have one line to print the element ptr is currently pointing to, followed by a space, and another line to move the iterator forward by one position. I'll use the function named next for that. Now about the do while loop, you may want to use this type of loop when you are absolutely sure it's safe to run the body of the loop in the first iteration. In this loop, I'll do the same as above, and I know that the vector has five elements, so the first iteration will happen. Also, I will access the vector by index this time. So let me declare an integer i initialized at zero. The loop starts with the do keyword, followed by the body of the loop between curly brackets. The loop ends with the while keyword and the condition to continue iterating between parentheses. This part must end with a semicolon. The loop will iterate while i is less than the number of elements in the vector. We can get that number with the size member function. Now, the body of this loop is the same as in the previous one,
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/while-loops?u=76281980&t=188)** but accessing the vector by index. We print the numbers index.i and we increment i by one. This is the postfix increment operator double plus, by the way. Well, that's it. We expect to see the vector elements printed twice in two separate lines as initialized in ascending order. Yes, there we have it. 12, 25, 31, 47, and 58 twice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [For loops](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=0)** - [Instructor] For loops are traditionally used when you know the range to traverse in advance. The first and last iterations are normally specified in the loop statement. Well, for loops in C and C++ are extremely flexible. A for loop has a directly equivalent implementation with a while loop. In this example, I'll calculate the average of the elements in the same vector we saw in the while loop example. That's why we have a float definition for the average in line 10. Let me start in line 12 by initializing the average to zero. Now the for loop syntax has three parts separated by semicolons. First we have the initialization statement, then the condition, and lastly, the increment expression. So let me go to line 13 and type "for." The first part is the initialization of the iterating variable, and you may declare that variable in this part. So it will belong to the scope of the body of the loop. It will be an integer named i initialized to 0. Don't forget the semicolon. Now comes the second part, the condition to iterate as in a while loop. My condition will be, "While i is less than the size of the vector." Semicolon again, and the third part is the increment. It's simply i++.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=95)** The body of the loop is a one-liner, so it doesn't require curly brackets. I will add the current element to the average and accumulate the result in the average. Now outside the loop, let me divide the average by the size of the vector. Notice that in these two lines, I use the shorthand operators for addition and assignment and for division and assignment respectively. Now let's print the value of the average. Now let's do the same thing again, but let me show you another form of the for loop. This form was added in the C++11 standard. This is the range-based for loop, and as the name suggests, it works by traversing a specified range with an iterator. As you can see, I have copied the previous code and I will simply modify lines 19 and 20. The syntax is quite simple. First, you specify a variable to traverse the container, a colon, and the name of the container. In our case, let me declare an integer, but I'll use the auto type and name it x. Then a colon, and the name of the vector. For each x in numbers, do the following. Now be warned that using a variable of the same type as the elements in a vector or array will copy the value of each element into the variable
>
> **[3:10](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/for-loops?u=76281980&t=190)** for each iteration of the loop. So this is okay in this example where we have a vector of integers. However, if you have a vector of large objects, you may want to use a reference instead. We'll see some examples of this later. Now, in the body of the loop, we can safely treat x as the current element. So we'll do the same as in the previous loop, but using x. So now we expect to see the average of the values in the vector printed twice. And there you have it, the average is 34.6. Great, let's move on.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (2)
> **Versions:** 34.6 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Calculate GPA from a vector](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=0)** (bright, upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=5)** - [Instructor] It's time for another challenge. This time, your task is to calculate the grade point average, or GPA, for a student. You'll retrieve the data from a vector of grades, and you'll print the GPA on the screen. To calculate the GPA, please use this formula. The GPA for a student equals the total points awarded in all of their courses divided by the total amount of credits in those courses. As a part of calculating the points, we'll use this table to convert letter grades to points. A is worth four points, B, three points, C, two points, D, one point, and zero points for an F. To be clear, let's look at an example. Let's say some student named George took three courses, algebra, physics, and English. Algebra is worth five credits, physics, four credits, and English, three credits. And he got a B in algebra, an A in physics, and a C in English. So to calculate George's GPA, the total points are calculated by adding the [[Microsoft Products|products]] of the grades by the credits in each course. We'll divide this by the total number of credits in the three courses. So in this example, George would get a GPA of 3.08. You'll start from my solution to the previous challenge, but this time, I have created three vectors of objects
>
> **[1:42](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=102)** of each class. In line 13, we have a student's vector, which is initialized with two students, George P. Burdell and Nancy Rhodes. I entered all the IDs sequentially starting from one. Then in line 16, we have a courses vector with four courses. We have algebra, physics, English, and economics with five, four, three and four credits respectively. And then in line 21, we have a vector of grades where the grades for all students are stored. The first line has the grades for student number one, George. If you take a minute to look at these grades, you'll see that George is the same example for a GPA calculation I just showed you. Then the next line has Nancy's grades. Moving on, we have the code to get an ID from the user. That should be one or two because, in this case, we only have those students in the vectors. The code finally prints the value of the GPA variable. So please fill in the blank in lines 27 and 28 with your code to calculate the GPA for the selected student. Also, notice that line 31 is just a placeholder that gets the name of the first student in the student's vector. So please replace that line with the correct code to get the name of the selected student
>
> **[3:18](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-calculate-gpa-from-a-vector?u=76281980&t=198)** into the student SDR string. This challenge should take you about 20 minutes. So give it a go, have fun, and watch the next video for my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** gpa (9), sdr (1)
> **Versions:** 3.08 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright, upbeat music) (1)

#### [Solution: Calculate GPA from a vector](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=5)** - [Instructor] Here's my solution. Let's start at Line 27. I have declared two floats to hold the total points and the total credits, respectively, both initialized at 0. Next in Line 28, we have arranged for loop for all elements in the grades vector. The current element will be in the grd reference. Notice that its type is not grade, but grade ampersand. That means that grd is a reference to the current element. This is done to avoid copying every element to grd as the loop progresses because objects tend to have a lot of data in them, and making a copy is definitely not what we need right now. We just need to traverse the vector. We could also do this with a pointer, by the way. References to objects like grd use the same syntax as the actual objects, so we may treat grd as the current element of the grades vector in the loop. You may also use auto instead of grades for the type here, but I'll leave it as it is. Since the grades vector contains grades for every student, I will only consider the grades for the selected student in the id variable. That's what the if statement in Line 29 is doing. Basically, I'm checking each element in the grades vector to see if it's a grade for the selected student. If it's not, we just move on to the next entry.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=100)** Also, notice that this if statement is the only part of the loop body, so I'm not using curly brackets. Now, remember that the grade is a letter, so we have to convert it to its number equivalent. That's why in Line 30 I have declared a float named num_grd to hold the numeric grade for each letter. In the switch statement, you can see that I'm assigning different values to num_grd depending on the letter. A is 4, B is 3, C is 2, D is 1, and anything else is 0, including F. Now starting at Line 44, we will calculate the total credits and points which we will need to calculate the GPA. The first thing I do is look for the credits of grd with a while loop in Line 45. Look at the condition. First, we have an integer named j initialized at 0. So the first thing the condition checks is that j isn't equal to the size of the courses vector. I am checking this because the next part of the condition wouldn't be safe if the first condition isn't met. Notice the double ampersand operator. That means logical and, not bitwise and. So a nice thing about logical or and logical and operations is that they perform short-circuit evaluation.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=194)** So we can do what we have in this line. In the first part of the and, check if it's safe to evaluate the second part. Because if it's not, then the second part will not be evaluated at all. So in the second part of the condition, I check if the id of the course at index j is not the course for the grade we are currently looking at. The body of the loop is a simple increment of j. So what it does is traverse the course vector until it finds the course for the current grade. Once the while loop is done, j will have the index of the course we are interested in. In Line 47, I am adding the credits for this course to the credits count. And in Line 48, I am adding to the points count the product of the current grade and the course's credits. Once the for loop is done, points and credits contain just what we need to calculate the GPA, and that's what I did in Line 50. Lastly, we are supposed to print out the name of the selected students with the student_str string at Line 54. So for this I did pretty much the same as for the course's credits, traverse the students vector until I find the requested id, and then assign that name to student_str. So let's see it working.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-calculate-gpa-from-a-vector?u=76281980&t=291)** Let's look at the GPA for George whose ID is 1. And there you have it. The GPA for George P. Burdell is 3.08. Now go ahead and try it for Nancy. As a final note, you may have noticed that there are many things that could go wrong with this code. For example, some course ID or student ID may not be found, so you may want to add these validations as an additional exercise.

> [!info]- Semantic Content
>
> **Code Identifiers:** num_grd (2), student_str (2)
> **Env Vars:** gpa (4)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 3.08 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### 5. Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating functions](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=0)** - [Instructor] We have been using functions in pretty much every example up to this point. Now it's time to take a closer look at functions and their many advantages. Functions provide modularity to your code. That's why virtually every programming language supports them. Functions are procedural blocks of code that return a value. They usually receive a fixed number of arguments of specific types, but some functions use a variable number of arguments. Now, there's a distinction between the terms parameter and argument. Arguments are the variables or constants that are sent to the function when it is called. Parameters, on the other hand, are the variables in the function that take the values of their arguments. Also, functions may be global, or they may be members of a class. Just the same thing we call methods in [[Java]] and [[Python (Programming Language)|Python]]. Let me show you how to define both types of functions. For this, we'll start with the student record system where we left it. Now, you may have noticed that there are several things that seem out of place in this code, if you look at it from an [[Object-Oriented Programming (OOP)|object-oriented programming]] standpoint. For example, allowing the main function to access the vectors. Or getting the numeric value of each grade in the main function. Or even looking through a vector
>
> **[1:34](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=94)** to retrieve data from the ID. If you find these things reckless or out of place, you are right. It looks like these vectors belong somewhere other than the main source file. In fact, we may encapsulate most of this code in one class. So let me show you how I have copied those vectors to a class named student records, and how I have prepared the class to move that misplaced code to an appropriate location. Let's go to records dot H. Here's what's new. First, I included the vector header in line three. Then, in line 43, I declared the student records class. It has three private data members, which are the same vectors we had in the main code. In line 49, we have a private member function get num grade for converting letter grades to numbers. Notice that I'm not specifying the parameter names just yet. It turns out that the declaration informs the compiler about the return type, the functions name, and the parameter types. This is known as the function prototype. The definition, on the other hand, implements the function procedure. The names of the parameters are not required in the function declaration, but they are mandatory in the function definition.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=189)** Now all the public members are functions. The first three add elements to the vectors. That's add student, add course, and add grade. These will replace the insertion of elements in the original code. The remaining functions are get student name, get course credits, and get GPA, which will also replace most of the messy code in the main function. Did you notice that I didn't overload the constructor? It turns out that I don't need to initialize anything when I create my student records object, so the default constructor will do. Now let's look at the implementations in records dot CPP. Starting at line 45, the add student add course and add grade functions simply use the pushback function to add elements to their vectors. The [[Representational State Transfer (REST)|rest]] of the functions aren't implemented yet, so I'll move some code from the main function into these functions and make some adaptations. Let's start with the get num grade function in line 57. This function receives a letter grade in a char, and returns a float. In the main source file, that conversion is done using a switch statement between lines 30 and 42. So let me cut this code and leave a to do comment here
>
> **[4:45](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=285)** as a reminder to write the code that will use the get num grade function. To do, get numeric grade. Now let's go back to credits dot CPP, and paste that code as the body of the function. First, I must change the variable checked in the switch. I need to replace this with the parameter, which is called letter. And lastly, I must return num GRD. Great, let's move on to get student name. This function takes the ID of a student as a parameter, and returns the name of the student as a string. In the main code, we do this in lines 39 through 43. Let me cut and leave another to do comment as a reminder to call the get student name function. Now let me go to records dot CPP, and paste the code as the body of the function. The parameter is called SID, so let me change that in the why loop. Also, since we are only assigning the student's name to the string at the end, we can get rid of that string variable, and simply return the result of the get name function, like this. Moving on, we have the get course credits function. This one is very similar to the previous one,
>
> **[6:19](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/creating-functions?u=76281980&t=379)** so let's go to the main function. The piece of code I will cut is in lines 31 through 34. But notice that the last line is doing two things. Getting the credits, and adding them to the credits variable. So I will note this in yet another to do comment. Okay, let's go back to records dot CPP. And let me adapt the function. Once again, I will do the same changes as in the get student name function above. Great. Now we are ready to use these functions, but don't try to compile yet, because we still need to finish the main function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Python (Programming Language)|Python]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** cpp (4), gpa (1), grd (1), sid (1)
> **Definitions:** is called (3), known as (1)
> **CLI Commands:** python (1), find (1), make (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Function parameters](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=0)** - [Instructor] Now I'd like to take a moment to tell you a bit more about function parameters. In many programming languages, you may pass arguments by value or by reference. C++ implements three variants of this. Normally, arguments are passed by value. This means that inside the function you'll have copies of the variables sent as arguments. You cannot modify the original values from the color scope. You may also pass arguments as pointers. That means that you may send the address of the variable as an argument. This will give you the power to access the variables inside the function. This may be dangerous, but it's a possibility. And you may also pass arguments as references. This is similar to passing arguments as pointers, but the limitations of references often make this the smart and safe choice. Here we have a simple example for you to see the syntax of these three different ways of declaring your function parameters. I'll create three functions. One that takes arguments by value, one by pointer, and one by reference. In line eight, I have declared two integers, A., initialized at nine and B., un-initialized. Then I have a series of lines to print their values. In between those lines, I'll call each of these functions just to verify that they work.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=96)** So the first function will be used to assign a value to B. This function will return an integer containing the square of its argument. Let me do this in line eight. Notice that the parameter X is declared as an integer. So this is the normal way of passing arguments by value. X will receive the value of the integer that is sent to the function as an argument. This argument may be a variable or a constant. Whichever is the case, X will be assigned that value. The body of the function is quite simple, but I want you to see that there's no problem at all if I modify X. Let me assign the square of X back to X. Yes, I have just lost the value of the argument because I've overridden it. However, X is an automatic variable. It will cease to exist once the function returns. Now let me return X. Once again, returning X does not mean that X will make it outside the scope of the function. No, its value will be returned. So back to the main function, let me assign the square of A to B in line 15. Now let me implement two swap functions. Both functions will interchange the values between their two arguments. In line 14, let me define the first one, receiving arguments by address, that is as pointers.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=196)** The function doesn't return anything and uses two pointers to integers as parameters, X and Y. To implement the swap, I'll use a temporary integer called temp. Temp will get the value of the integer where X is pointing. Notice the indirection operator. Then where X is pointing, we will assign the value of the variable where Y is pointing. And finally, where Y is pointing, we'll get temp. Now let me call that function in line 24. A and B must be passed as addresses, so I'll use the address of operator. Notice that technically we are still passing arguments by value because we are not passing A or B. We are passing their addresses to a couple of pointers that will receive those values which happen to be addresses. Okay, now let's write the remaining function, which takes arguments by reference. Let me do that in line 21. This will be an overload of the previous swap function. In other words, this is another version of that function with a different parameter list. My parameters will also be called X and Y but notice the ampersand at the end of their type.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/function-parameters?u=76281980&t=291)** That means they are references. The body of the function is very similar to the body of the function that uses pointers, but I don't need to de-reference. Remember, references are aliases, so they are treated as the variables themselves. This is very interesting because it gives you access to variables outside the scope of the function. So now all we must do is call this function. I'll do that in line 33. And we are ready to try it. So as you can see, we correctly calculated the square of nine, which is 81 plus A and B are being correctly swapped twice.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is an  (1), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Using functions](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=0)** - [Instructor] You may have noticed that there's one function left to implement. This is the get GPA function. In this function, we'll use most of the functions we have just written. In the main source file, this is between lines 27 and 34. So let me cut and leave a to do comment as usual. Now let's adapt the code in records.cpp. The first change is in line 90. Notice that the type of GRD is referenced to grade. Now since we are inside a getter function that enforces cons correctness, this type is in conflict. Yes, that constant qualifier at the end of line 88 means that the code inside the function cannot modify this student records object. So to solve this inconsistency, we can pledge never to modify GRD by simply adding a const qualifier to it. The second change is in line 91, the ID is our parameter called SID. Then in line 92 we have the note I left to get the numeric grade from the letter grade. So we could do it here. But notice that the num grade variable is used in line 94. So let me place the function call there. Instead of num_grd, I'll call the get num grade function. Passing the grade from our GRD object as the argument.
>
> **[1:36](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=96)** Now I'll get rid of the comment in line 92. So now we have the comment to update the credits variable. Let me uncomment this call to the get credits function. The argument is the course id, which is in the GRD object. Now look at line 93. This line also uses the current course credits. So let me put this value in a variable to use it in these two lines. Remember, this is an unsigned char and I will name it current_credits. So let me assign the function call to it and use its value in lines 93 and 94. And now we can return the value that was previously assigned to GPA. There, we are done getting the messy code into our class. Now let's use this code in the main source file. There's still some cleaning up to do. The GPA floating point variable in line 10 is no longer useful to us because we'll only use it once to print its value. So I'll get rid of it. I will also get rid of the get GPA comment. Then I'll call the GPA function function instead of reading the variable up ahead. But before I do that, we need a student records object. Let me declare one in line 11. I'll call it SR.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=192)** Now we can call some functions. In line 27, we need to get the student's name. So let me declare the string again and call the get_student_name function.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=211)** Lastly, let me call the GPA function that was pending in line 28, but we are not done yet. We still have those vector declarations which used to initialize our vectors in the original version of the code. So now that we need to get that data into our vectors in the SR object, this is a good chance to create a global function. Now the compiler formally requires you to write a function declaration or prototype and then a function definition. Recall that function declarations are usually written in a .h file and the implementations in a corresponding .cpp file. You may sometimes get away with not declaring your functions and just defining them right away in the code. But this is considered a bad practice. So let's go to line 9 and declare a function that doesn't return anything and receives one parameter of type student records reference. I'll name the function initialize. I'm declaring this function in the main source file because this function has nothing to do with the student record system classes. In fact, declaring global functions in Heather files is sometimes considered a bad practice. If you must do it, those functions are usually declared within a namespace.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=305)** Now I'll copy this prototype and scroll down below the main function to paste it. And this is where I will implement this function. I am allowed to do this because I have already declared the function. So whenever the function is used in main, the compiler will know the types to use or not. But wait, this is just the prototype. I still have to name the parameter. I'll name it srec. And now let me scroll up to get the original vector declarations. In their place, I'll leave a call to the initialized function. The argument will be SR, of course. So let's adapt line 28. To add students, I'll use the add_student member function of srec, and the arguments will be the same as the ones we used in the constructor.
>
> **[6:14](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/using-functions?u=76281980&t=374)** And now let me do the same for the [[Representational State Transfer (REST)|rest]] of the entries. Now we are done. Let's see if it behaves like the original version. Let's look at the GPA for George. Oh yeah, it seems to be working all right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** gpa (7), grd (4), sid (1)
> **Code Identifiers:** num_grd (1), current_credits (1), get_student_name (1), add_student (1)
> **UI Navigation:** go to (1), scroll down (1), scroll up (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** bad practice (2)
> **File Paths:** records.cpp (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a report card function](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-create-a-report-card-function?u=76281980&t=5)** - [Instructor] It's time for another challenge. This time your task is to create a function in the StudentRecords class. You'll work with the code as we left it. The function must receive a student's ID as an integer and it must print out a report card on the screen. This report card must include the name of the student, the course names, the letter grades, and the GPA. Feel free to start your function with the code for the GPA function. You may even piggyback on that code or you may choose to start from scratch. Your choice. For this challenge, I have modified the main function to have a function call in line 20. This is the function you must write. Please make sure to name this function report card as you see it here. This may take you about 30 minutes. So have fun and make sure to watch the next video for my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** gpa (2)
> **Best Practices:** make sure to (2)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a report card function](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=0)** - [Instructor] Here's my solution. Starting at line 108 of records dot cpp, I created the report card function. As I suggested, I simply copied the get GPA function and added some lines to print data. The first one is in line 110 where I'm printing the name of the student. Then in line 113, I'm printing the course name and grade notice that I needed another function to [[Fetch]] the course name. Let's look at it, starting at line 101. As you can see, I'm performing the same sequential search as in the get course credits and the get student name functions. Now, if you are thinking that sequential search is not the best search algorithm out there you are right, the code could definitely do better. I'm doing this mostly because I'm using plain vectors. The standard template library comes with a variety of containers among which you'll certainly find the most suitable for your applications. Going back to the report card function, the last change I made to the original GPA function is in line 118. That was the return line in the GPA function, but the report card function has a void return type, so I replaced that with the printing line of the GPA.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-create-a-report-card-function?u=76281980&t=99)** That's it, now, an important detail of this function is that it uses see out, which is why I included IO stream at line two. Alright, let's see it working. This time I will request the report card for Nancy whose ID is two. And there it is, Nancy got an A in algebra, an A in physics, and a B in economics. That's a GPA of 3.69.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** gpa (5)
> **CLI Commands:** find (1)
> **Versions:** 3.69 (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. File I/O

[↑ Back to Table of Contents](#table-of-contents)

#### [Opening a text file for reading](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=0)** - [Instructor] Now let me show you how to read text files. For that, the standard library provides the <fstream> header, which I've included in line seven. This header is a part of the input output library and it provides a number of classes to handle files. In line 10, we have the declaration of an ifstream object called inFile. The ifstream class is an input stream from a file, and so, it is very similar to the cin object. Next, we have the declarations for a string, an integer, and a char, which will be used to store values coming in from the file. Then in line 15, I open a file with the open member function of inFile. The file is called people.txt and you can find it in the same folder as this exercise file. After successfully running this function, we can use inFile to read that file we just opened, but this function may run into a error, so we must check if everything went well. That's why in line 16, I'm using the fail function to check if the open function failed. If it did, I print a message on the screen, and if it was successful, we have the else part in line 18. Now, there are many ways to run sanity checks on our files, but for now, I will simply assume
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=95)** that the file has the exact format I expect. For example, we may assume that some other program has produced this file, so, if the file is found, I must have the correct format. Speaking of which, let me show you the format of my file. The file has a series of entries with a name, an age, which is supposed to be an integer, and a letter, which is the first initial of the name. For our example, we will extract the names as strings, the ages also as strings, and convert them to integers, and lastly, the initials also as strings and convert them to single characters. And we will do that as long as we find entries in the file. So back to the code, the while loop in nine 19 will iterate as long as the end of file is not reached. That's what the eof function returns. Then we have the getLine function in line 20. This function is defined in the str header. It takes one line of text from the stream in the first argument and replaces the contents of the string in the second argument with the acquired text. You can use this function with cin as your input stream if you want to read complete lines of text instead of separate words from the terminal. So the getLine function is taking one line of text
>
> **[3:11](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=191)** from the input file and writing it to str. Next, I'm printing that line on the screen. Once the while loop is done, I close the file. It's important to close the files you no longer need. This code should print the entire file on the screen. Let's see it. There you have it, four entries of names, ages, and initials. Now, once again, assuming the file has the exact intended format, let me extract the names as strings, the ages as integers, and the initials as single characters. So let me go to line 21 and replace the std::endl with a ", ". Now I'll call the getLine function again, and now to convert the incoming string to an integer, we can use the stoi function in the str header. This function simply returns the integer represented by the string. Now I will print that integer. And lastly, I will call the getLine function once more. And since I know the string will contain one letter, I can get that character by indexing the string, because the square bracket operator is supported by the string class. Now let me print that character and break the line. And we are done.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/opening-a-text-file-for-reading?u=76281980&t=288)** Let's see it running, and everything seems to have been fetched okay. For this example, I'm only printing the elements in the file, but as you were able to see, converting data from strings can be very easy.

> [!info]- Semantic Content
>
> **Code Identifiers:** getline (4), infile (3)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **CLI Commands:** find (2)
> **Analogies:** similar to (1), for example (1)
> **File Paths:** people.txt (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)

#### [Open a text file for writing](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=0)** - [Instructor] Here's a quick example to show you how to write into a text file. It looks very much like the file reading example, and it's actually a bit simpler. In line 10, we have the declaration of an ofstream object named outFile. Then we have two floats of arbitrary values, a and b. Then we have the same logic as before. First, we open the file in line 13, and the open function may take a second argument to specify the mode of the file usage. By default, it will allow us to write into the file, and if the file already exists, it will replace its contents. There is also an append mode to continue writing into the file starting after its last character. Failure may occur if the file is already open for writing by some other object or program. So I report that in line 15. And starting at line 17, I'm using the outFile object to write into the file. The good news is that we can use the left bound insertion operator just the way we've been using it with cout. So I'm writing the value of a in one line, then the value of b in another line, and then their addition and product. So notice that the insertion operator takes care of converting those floats to strings
>
> **[1:33](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/open-a-text-file-for-writing?u=76281980&t=93)** before writing into the file. Finally, I close the file and I report that it was written successfully in line 22. So let's see it running. And here we just get the message, File written successfully! So let's open that file. And as you can see, the file has the expected contents indeed.

> [!info]- Semantic Content
>
> **Code Identifiers:** outfile (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Upgrade to work with files](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/challenge-upgrade-to-work-with-files?u=76281980&t=0)** - [Instructor] It is time for our final challenge. This time, your task is to upgrade your report card application to work with text files. You'll have to retrieve all student course and grade data from text files, and then create a report card for all students in a text file named report.txt. For the input files, please use the provided students.txt, courses.txt, and grades.txt. These files have the same format I use in the file reading exercise with one value per line and ending at the last character. For example, the student's file has a series of ID name pairs with the ID in one line and the name in the next line. The file ends in the last character of the last name. There is no empty line at the end. This is crucial because this is how you'll know that you're done reading the file. These files come with the data we've been working with for George and Nancy. Take a minute to look at these files to make sure you understand how they're organized. After doing that, add at least one more entry to each file. That's one additional student, one additional course, and at least one additional grade. Do that manually, this should take you about 30 minutes. As usual, watch the next video for my solution when you are done or if you get stuck.

> [!info]- Semantic Content
>
> **File Paths:** report.txt (1), students.txt (1), courses.txt (1), grades.txt (1)
> **Cross-References:** in the next (1), in the last (1), next video (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Upgrade to work with files](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=0)** - [Instructor] Let's look at my solution. First, starting at line 16, I created file stream objects named inFile and outFile as before. Then, I modified the main code to use two new functions. The first one is in line 19 where I initialized the StudentRecords object from the input file. And the second one is in line 20 where I call a member function of SR called report_file. You can see the prototype for the initialized function in line 11. Notice that it's an overload that receives an input file stream reference in addition to the StudentRecords reference. I left the original function defined in line 10 anyway. So let's scroll down and look at the new initialized function implementation. At this point, I think you'll be able to tell that I copied and pasted the file reading example three times here and adapted that code to read the students file first, starting at line 33, then reading the courses file, starting at line 49, and then the same thing for the grades file, starting at line 67. After reading each file, I am reporting to the screen how many entries I found,
>
> **[1:35](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=95)** so I report how many students, courses, and grades were found. Now, for the report_file member function, let's go to records.cpp. But first, since the code for the report_file was going to be almost the same as the report_card function, I decided to modify that function a bit to receive a second argument as reference. It's an output stream object. I named the parameter stream, and I replaced the occurrences of cout with stream. You can see this highlighted in lines 111, 114, and 119. So now this function works for either cout, that's the screen, or a file for writing. So the new form of this function to print a report card to the screen will have the student ID and then cout as arguments. Now, for the report_file function, most of the work is already done for us. It starts at line 122. The function receives an output file stream as reference, and it uses it in line 124 where it opens report.txt. Now, the work starts at line 128 after the error checking. First, I place a horizontal delimiter, and then we have a range for loop that gets every element in the students vector
>
> **[3:08](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/solution-upgrade-to-work-with-files?u=76281980&t=188)** in a reference named st. So in line 130, I get the student ID in the sid variable, and then I call the report_card function operating on outFile. So it will print the same report card, but in our report.txt file. After each report card, we have a new horizontal delimiter in line 132. If everything goes well, line 135 reports success. Let's go back to the main function. As you can see in lines 19 and 20, I am calling the file-based functions, but the comments at the right show the previous version of the initialized function, which still works, and the new version of the report_card function in case you want to use them. That's it, so let's see it working. Here, you can see that the program found two students, four courses, and six grades, and lastly, it created report.txt successfully. So let's look at that text file. And here we have both report cards. Now, go ahead and add more entries to the input files, and then try running the application again.

> [!info]- Semantic Content
>
> **Code Identifiers:** report_file (4), report_card (3), outfile (2), infile (1)
> **File Paths:** report.txt (3), records.cpp (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-plus-plus-22993675/next-steps?u=76281980&t=0)** - [Eduardo] Congratulations on finishing the course. Give yourself a pat on the back. Of course, there's a long road ahead to master this amazing programming language. So if you're feeling up for a challenge, or 16, consider taking my [[LinkedIn]] learning course titled, Level Up: C++, where you can choose from a selection of challenges to test and sharpen your skills, all of this using [[GitHub]] code spaces. Learn about the C++ standard template library. You may want to consider my LinkedIn Learning course about it. Learn about coding styles and the best programming practices for modern C++, like smart pointers, Lambda functions, and so on. For that, I recommend the LinkedIn learning course titled, C++ Best Practices for Developers. And in general, learn more object oriented programming features of C++, like inheritance and polymorphism. Thank you very much for taking this course. I hope you had fun taking it as much as I had creating it. I'm Eduardo Corpeno. Till next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[GitHub]] (1)
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