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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/welcome-to-learning-java?u=76281980&t=0)** - [Kathryn] [[Java]] is one of the most popular programming languages for beginners. Why? Java can be used to create applications on the web, mobile, desktop, and many other platforms. Because of this, companies want to hire Java developers, and they are some of the most well-paid people in the industry. Do you want to learn how to code with Java? If so, this is the course for you. We are going to talk about programming fundamentals, such as loops, functions, and classes, and learn how to use them to create programs in Java. Along the way, we will be using real-world examples and you will be challenged with writing programs that include these new topics that we'll be discussing. I'm also going to show you how to debug your programs so that when you run into errors, and every developer does, you'll know right where to look to start solving them. Hi, I'm Kathryn Hodge, and let's get started learning Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Analogies:** such as (1)
> **Speakers:** - [kathryn] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-you-should-know?u=76281980&t=0)** - [Instructor] To take this course you do not need any prior knowledge of [[Java]] or programming. Keeping that in mind, you won't learn everything about Java, but this course will give you a good introduction and foundation to the Java programming language that you can take to more advanced Java courses and projects. This is also a great course if you want to refresh your Java fundamentals. You should be aware that there will be a few things you need to download to your computer. But all that you need to start is a computer and an excitement to learn Java. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I have created a [[GitHub]] repo at the URL below that you can use to pull a copy of the project files used in this course. If you have a GitHub account, feel free to fork the repo to be able to work on your own version of it. If not, you can still download a zip of each lesson without needing a GitHub account. Each lesson's exercise files can be accessed by switching the branch the repo is on. For each lesson, there are two branches. One branch ends with a B and another branch ends with an E. The B branch contains the begin state code, and the E branch contains the end state code. You can use the exercise files to follow along with each video.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=0)** - [Instructor] These interactive code challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four main areas, instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used. You can use these drag handles to allocate space as you'd like. Let's complete this coding challenge. There are comments in the starting code showing you where to put your solution.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=48)** When you click the Test My Code button, you'll see a message indicating whether your code returned a correct result.
>
> **[1:02](https://www.linkedin.com/learning/learning-java-11/tour-of-coderpad?u=76281980&t=62)** If your code isn't successful, you can ask for help. The showExpectedResult and showHints variables determine whether you see the expected results and any hints. Let's change showExpectedResult to true and run it again. The expected result is 19. Now, the code editor in the lower right shows how your solution is used. You can change this code to experiment with different test cases. Let's change 19 to 21. Now the expected result is 21. When you finish each code challenge, return to the course and click the next video to see my solution.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=0)** - [Instructor] Let's get started with [[Java]]. Java is a very commonly used programming language, and it is often the first language beginners learn. When we say "programming language," we do mean that it is an actual language, but we use it to talk to a computer. Just like a regular language, it has a vocabulary and a set of grammatical rules, so that it can communicate with the computer to complete certain tasks. With the Java programming language, software developers can create applications on a computer. What types of applications? Think web applications, mobile applications, desktop applications, [[Web Servers]], embedded systems, and more. We call these applications Java programs, because they are built with the Java programming language. Chances are you've downloaded a program that requires the JRE, or Java Runtime Environment. This is what's needed to run Java programs, and it is often what you've installed in the past in order to run Java applications on your computer. You may not thought of them as Java applications back then, but anytime you were asked to install or update Java in order to run the application, they were indeed Java programs. So what's needed to build and develop a Java program? You need to install the JDK, or Java Development Kit. The Java Development Kit is a full-featured [[Software Development]] kit that includes everything from the JRE, as well as compilers, debuggers,
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/what-is-java?u=76281980&t=92)** and tools to create Java programs. This means we can just install the JDK, or Java Development Kit, and we get the JRE, or Java Runtime Environment, automatically. So let's get the JDK installed.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/downloading-java-on-your-computer?u=76281980&t=0)** - [Instructor] Let's install the [[Java]] Development Kit, or JDK, so that we can build Java applications on our computer. Remember, the JDK includes the JRE, or Java Runtime Environment, so we will not only be able to build applications on our computer, but we will also be able to run them. SE stands for Standard Edition, which is what we want, so we're going to click on this first link here. In this course, we'll be using 13.0.2, because it is the latest version of the Java platform at the time of this recording. When you are viewing this course, there may be newer versions available, which you're fine to use as well. The difference between the versions matter more once you get deeper into the Java programming language, but for this course, since we are looking at the fundamentals, any version Java 8 and above is fine. Now let's click download. Next, you'll want to download the JDK for your specific operating system. We'll accept the agreement, and since I'm running Mac, I'll click the first Mac option. This will download the installer. With the installer installed, we'll click the installer, and we'll begin to install the JDK version 13.0.2. We'll click through these [[Windows]] and continue with the installation. With the JDK or Java Development Kit installed, we can now build and run Java programs.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=0)** - [Instructor] The command line is a commonly used tool that can be used to build and run [[Java]] programs. Before we use it with our Java programs, we need to talk more about what the command line actually is. The command line acts as a user interface that we can use to interact with a computer. Usually, when you want to open a folder or run an application, you use your mouse to click each item open. When we use our mouse, we are using the computers graphical user interface. We are using the graphics, what the computer is displaying with pixels to interact with the computer. The command line I mentioned earlier is just another way we can interact with the computer. The difference is instead of clicking and dragging, we can type in commands. On Mac, we can access the built-in command line by opening the terminal program. We can go to Spotlight Search and type in terminal, hit enter and this will open the program for us. If you are a [[Windows]] user, you can search for cmd in the start menu and select command prompt from the list. The command prompt is built-in, so you shouldn't have to install anything. With the command line open, we can start typing in commands and make our computer complete tasks. If you are on Mac, type ls and hit enter. If you are on Windows, type dir and hit enter. This command lists all the contents in our current folder.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=95)** The current folder is our home folder, so if we navigate to our home folder in the GUI or graphical user interface, we should see these contents. When talking about commands and the command line, we often use the [[Microsoft Word|word]] directory instead of folder. Now, if I want to change folders or directories and see the contents of that given directory, we use the command cd with the name of the directory. cd stands for change directory. On my Mac machine, lets say I want a cd or change directory to my desktop folder. We can write cd desktop, hit enter, and now we will be at that location in our file system. This is similar to clicking and opening our desktop folder from the GUI. This works on both Windows and Mac. In the desktop, we can run ls, then hit enter or if you are in Windows, you'll use dir and see the contents of this directory. It's most likely a different output than what we saw before with this command because the contents of the desktop folder are often different than the contents of the home folder. We can make a new folder on our desktop called [[LinkedIn]] Learning with the command make directory or mkdir, and then the folder name that we want to use for our new directory, in this case, LinkedIn Learning. We'll hit enter and we see a new folder on our desktop.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/exploring-the-command-line?u=76281980&t=189)** This command works with both Windows and Mac. Now, we can go into this new folder with cd linkedinlearning. To go back to the previous folder, we can use cd dot dot. Again, these commands work on both Windows and Mac. Most of the examples we've shown here are about navigating your file system, but there are lots of different commands that exist that give you different information about your computer and compute things for you. Next, we'll look at some Java specific commands that will help us build and run Java programs.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=0)** - [Narrator] We are ready to write our first [[Java]] program. Just like we write essays using some kind of [[Microsoft Word|word]] editor, we need a text editor to write our code. I'm going to download Sublime Text, which is a common text editor that developers use. Sublime is a tool that we will use to write our Java programs. In the command line is tool that will help us build and run our programs. With Sublime downloaded, we can open up a new window and write some code. How do we write a Java program? Java is verbose programming language, so there is some boilerplate code that we add with every program. When we say verbose, we mean that there are a lot of words we have to write, compared to other programming languages, in order to get a simple program to work. For beginners, I think this is a good thing because it reveals concepts you may not have known, and it makes what you are trying to do very verbosely clear. Every Java program has to have a class, and in fact, all Java code must be inside a class. We'll talk more about classes later in the course, but we'll be creating a class and calling it "HelloWorld". We'll write "public class HelloWorld", the name of our class, and then open and close curly brackets. The idea of Hello World is a bit of a tradition in computer science. When you are first learning a new language, or framework, or technology, all you want to do is make the program output "Hello World", and that's exactly what we'll be doing in this lesson.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=97)** Let's put some more code in between the curly brackets. We'll write "public static void main(String[] Args)",
>
> **[1:54](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=114)** and then open and close curly brackets. This may look a bit overwhelming, but don't worry. All we need to know about this piece of code, is that it's called the main function, and it's the entry point to our program. This means any code I put between the inner curly brackets will be executed by he program. Everything we've written so far is boilerplate, or stuff we must have for any Java program to run. The thing that will make our program unique, is what we add in those curly brackets. As we said before, we want our program to output a "Hello World" statement. We can do that by adding the following line of code. We'll write "System.out.println" "("Hello World! It's me Kathryn!);".
>
> **[2:53](https://www.linkedin.com/learning/learning-java-11/your-first-java-program?u=76281980&t=173)** The "System.out.println" portion, gets us access to the outputting, or printing functionality of Java. And in between the parentheses we write what we want to output. In this case, hello, it's me Kathryn! You might be wondering what public means, and how it relates to Java, but that is out of the scope of this introductory course. We will talk about what void and static mean in later chapters. With our code done, we'll save this file by clicking file, and then save. We'll name this file "HelloWorld", and give it the dot Java extension because it is a Java file. Java conventions require the file name to be the same as the class name, so make sure the file name and the class name match. You can save this anywhere you'd like on your computer. We are going to be saving it to the learning Java folder on my desktop. Alright, let's execute and run our program. We just used Sublime to write our program, next we'll use the command line to build and run our program.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=0)** - [Instructor] Unlike other programming languages, [[Java]] code must be Compiled before it is run. This means, we'll be using one command to compile our code, and another command to execute or run our code. We won't be discussing the details of compilation in this course but it is important to know that we are taking our Java Source Code, and compiling it into Java bytecode. Upon compilation, Java class files with the .class extension, will be produced, and they will be used when we run the program. Before we compile our program, we need to go to the directory where the source code lives. I'll type ls and well see these are the folders, that are in my home directory. We'll need to go to our desktop directory, which is where this folder lives and our HelloWorld program is. So we'll go cd Desktop ls and we'll see that learning Java folders is there, cd learning-java, and you can actually hit tab to auto complete the [[Representational State Transfer (REST)|rest]] of the folder name. We'll hit enter to go into this folder ls and we see our Java file inside. To compile our Java source code into Java byte code, we'll write javac and then the name of our file, HelloWorld.java. We have just compiled our code. Notice the Java class file that's now in our learning Java folder. We can now execute our program. To execute our program, we can write java and then the name of the Java class folder
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=95)** without the .class extension, HelloWorld. We'll hit enter and we see the output right here in the command line. Hello world, it's me, Catherine. That's exactly what we wrote in our print statement. Let's try running the command again. We'll use the up arrow to access the previously run command. Hit enter, and we see the same output in our terminal. Now let's try changing our Java source code, so something else is printed out. In our Java code, we'll add on the phrase and I love tacos. We'll save this and try rewriting the program. We'll hit that up arrow hit enter and we still see Hello World, It's me, Catherine. Since we've changed the source code, we need to recompile and re-execute the program in order to get the latest version. If we just re-execute, which we just did, we get the old version of the program. To recompile we'll go javac HelloWorld.java. This compiles it into Java bytecode, and then to run our program, we'll go java HelloWorld, and we get the, and I love tacos in the output. Now, running these two commands, javac and java, can be annoying. Especially if we are making lots of incremental changes to our code. There are tools that exist that can make our lives as developers a lot easier, and that actually
>
> **[3:10](https://www.linkedin.com/learning/learning-java-11/hello-world-in-the-command-line?u=76281980&t=190)** combine the functionality of a text editor, that's our sublime, and the Java commands in the command line. We'll take a look at those next.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=0)** - [Instructor] Over time, programs get larger and larger. And although you can compile and run [[Java]] programs with the terminal, it's often faster to use an IDE. IDE stands for integrated development environment and an assembly of software that we can use to build and run our Java programs, just like the command line. The main difference is that this tool is built specifically for building and executing code and has a lot of built-in features specifically for that purpose. It also has a GUI, or a graphical user interface, meaning we won't have to type in commands. We can just click a button for our code to build and run. Ultimately, just like we use Photoshop to edit photos, we can use a special software, an IDE, to edit and run our code. There are many different IDEs, or integrated development environments, that you can write code with, but in this course, we'll be using IntelliJ, which is made by a company called JetBrains. We'll click download. Now, this IDE has a paid ultimate version and a community free version. The community version will work fine for this course. Let's open our IntelliJ. We will not import settings. We'll accept. Here, you can choose what type of UI you want for your IDE, do you want
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=93)** dark mode or light mode, dark mode. Every large-scale program you create should be in its own project. Since we are learning the fundamentals in this course, we will be using one project for the whole course. In the Project SDK setting, you should see your version of the JDK. In my case, I downloaded 13.0.2. If you do not have this, try re-downloading and installing the JDK. We'll click next, we'll click next. For the project name, we are going to call this LearningJava, and I'm going to put it in the learning-java folder for the course. You could put this wherever you'd like. We'll click finish. All right, now IntelliJ is configured. What, exactly, does this IDE have? On the left, we have the navigation pane. This allows us to navigate to different files in our project. The .idea folder holds [[Metadata]] about our project, but the main code for our Java program will be in the SRC folder, or the source code folder. You'll also notice, in the external library section, our JDK is linked. We'll be working more with this navigation pane in the next lesson. At the top right-hand corner, we have some buttons that will allow us to run, debug, and step through our program. We'll learn more about what debugging and stepping through
>
> **[3:06](https://www.linkedin.com/learning/learning-java-11/exploring-an-integrated-development-environment-ide?u=76281980&t=186)** the program mean later on in the course, but this play button acts as the Java C and Java commands from the command line. Once we have a Java file created in the IDE, we'll be able to click this button and it will compile and run our program. Right now, the button is grayed out, because we do not have a Java file with a main function configured in this IDE yet. The middle portion is also blank right now, because we have not created and selected a Java file. We'll do that in the next video.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=0)** - [Instructor] Let's create our first [[Java]] File in the IntelliJ IDE. We'll left-click the SRC, or Source Code Folder, hover over New and click Java Class. We'll call this class, Main. This is still creating a Java File, but it's pre-populating a class called Main. This middle area is the code editor and it looks a lot like what we saw in Sublime. The code editor is where we can access the content of our Java Files. And in this case, the content of the Main.Java File. We can recreate some of the Java code we created before in Sublime. Instead of typing out that long name function with public static void, we can just type Main and the IDE pre-populates it for us. Remember when we talked about boilerplate code? Every Java program must have a Main function, so the IDE has shortcuts that make some of that boilerplate code easier and faster to write. This shortcut, where we type in a [[Microsoft Word|word]] and the IDE completes it for us, is called code completion and this is one of the benefits to using an IDE. In this Main function, we'll output something to the user, just like we did before with Sublime and the command line. To output to the user, we can write: System.out.println, then whatever we want the system to output. In this case, we'll say, "Hello World from the IntelliJ IDE!"
>
> **[1:38](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=98)** And then we'll do a paren' and semicolon. Now our program is ready to run. To run this file, we can left-click the Main class, hover over Run 'Main.main' and click it. Here, the first Main was the class Main and the second Main was the Main function. By selecting Run 'Main.main', the IDE compiles the program and runs it for us. There are no commands to type in, like before. We just click the button and it runs. After running the program, you may notice a small window at the bottom of the screen containing our output. This window is called the Console and it's a text display where the executor of the program can see output messages. Here we see, Hello World from the IntelliJ IDE. When we ran this program, we had to do two button clicks. We had to left-click the Main class and then select Run 'Main.main.' What if we could run the program with just one button click? At the top right-hand corner, click the play button. Our program was just run again. Congratulations, you just created and ran a Java program using the IntelliJ IDE. What does this IDE do for us? It contains a code editor where we write our code. It also contains a debugger, which we will explore in a later chapter, and can use to figure out any errors in our program.
>
> **[3:13](https://www.linkedin.com/learning/learning-java-11/hello-world-in-an-ide?u=76281980&t=193)** You may have already noticed the bug button, next to the play button in the IDE. We will come back to that. An IDE also has other features that make writing code easier, like the code completion we saw earlier. Although an IDE is not necessary to write code, it can be very helpful because it has extra tools that make developing code a little faster and more straight forward.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=0)** - [Narrator] In computer science, data is information that is stored or processed by a computer. While that might seem fairly abstract, there are many data points we use in everyday life. Your name, your age, the number of apples in your pantry, whether your kitchen light is on or off. These can all be considered pieces of data, and we represent pieces of data in code using data types. Similar to other programming languages, [[Java]] classifies different pieces of data with data types based on their value. For example, there's a data type for letters and symbols, and there are various data types for numbers. Ultimately, a data type provides a set of possible values, and if a piece of data is one of these values, it is classified as that specific type. Java separates its data types into two main categories that are then broken down further into more distinct data types. One of the categories is called primitive data types which consist of the most basic data types in the Java language. The most important primitive data types include Boolean, int, double, and char. There are other primitive types that exist in Java, but these are the most foundational. The second category is called reference types, and we'll talk about reference types in a later lesson. Diving deeper into these primitive types, the Boolean data type represents a true or false value.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/primitive-data-types?u=76281980&t=96)** This means the data piece of whether the kitchen light is on or off could be represented as a Boolean in code. It might have the value true, or it might have the value false, but it can never be both. It must be either true or false. In int, short for integer, represents a whole number. The number of siblings you have could be represented in code as an int. You could have zero siblings, three siblings, 10 siblings, any whole number amount of siblings. A double represents a decimal number. With a double, you can represent your GPA, say 3.4, in Java. The last primitive type we'll talk about is a char which is short for character. A char represents a single letter or symbol. Some possible values for a char could be your first initial or last initial, your favorite letter, or the hashtag symbol. We classify these data types, Boolean, int, double, char, as primitive types because they are the basis in foundation for all other data types within the Java programming language. Let's try using our primitive types in Java.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=0)** - [Narrator] Let's create some data in [[Java]]. In this lesson, we'll be creating a few pieces of data that could represent attributes of a given high school student. Our program will have representations for a students age, GPA, first initial, last initial, as well as if the student has had perfect attendance so far this year. Before we get to the code, let's assign a Java data type to each of these pieces of data. As we mentioned in the last video, an age could be represented in Java with either an int or a double depending on how exact we want to be. In this case, we'll be using an int to represent the age. Potential values for a students GPA could be 3.4 or 2.7 or 4.0. These are all decimal values, so the data type for a students GPA would be double. A students first initial and last initial are each a single character, so both of these would be represented by the data type char. A student can either have perfect attendance or not have perfect attendance, there's no in between. So has perfect attendance should be a Boolean. Let's try creating some Java code that represents these pieces of data. We could represent a students age by just writing 15. Then we could represent a students GPA with just 3.45. However, we get errors.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=95)** What we've written are technically numbers and pieces of data, but in Java we save data in something called a variable. A variable is a way to label data and reference it later in your program. Instead of saying 15, we can create a label, say student age, and then assign a value to it, in this case, 15. We still get an error here, and that's because we need to add a data type to the variable. We can add int at the beginning of the line and then a semicolon at the end of the line to end the statement, and all of our errors are gone. Congrats, you just created your first variable in Java. As you can see, a variable has a data type, label, and value. In this case, the data type is int, the label is student age, and the value is 15. The equal sign is an assignment operator that assigns the int variable with the label, student age, and the value 15. Let's create the next piece of data in Java, a students GPA. We need to create another variable, and we decided before that that data type would be double. So let's write double and give the variable the label studentGPA, and then we'll assign it the value 3.45 and add a semicolon to end the statement. Second variable, done. Three more to go. Next we'll represent a students first initial
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=189)** with the data type char studentFirstInitial as the label, and give it the value K. We'll do something similar for the students last initial with the data type char label studentLastInitial and give it the value H. For all of these variables, you could put a different value as long as it can still be represented by that given data type. For example, you couldn't put a letter or symbol as the value of student age, but you could put another whole number, say 17 instead of 15. The last piece of data we want to represent is has perfect attendance. Like the other variables, we'll write the data type, Boolean, the label, hasPerfectAttendence, and then give it the value true. You may notice that our variable names are grayed out, that's because although we've created a piece of data and represented it in Java, we don't use or reference it in our program. One way we could reference it is by printing out the value of the variable to the console. We'll write System.out.println, and instead of adding quotes, we'll just write the name of the variable. Since studentAge has the value 15, we'll print out 15 to the console. We'll save this and then click the play button or you could left click and hit Run Main.main, and we get 15 in our console.
>
> **[4:47](https://www.linkedin.com/learning/learning-java-11/data-types-and-variables-in-java?u=76281980&t=287)** Let's try this with the other variables. We'll write System.out.println studentGPA System.out.println studentFirstInitial System.out.println the last initial and then the has perfect attendance. We'll run this again and we get 15, 3.45, K, H, and true as expected in the console.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=0)** - [Instructor] So far, we've learned about a few data types. These data types, int, Boolean, double, char, were primitive types. These are great for storing a whole number, true/false values, a single letter or symbol, but what if you wanted to store and reference some text, something that requires more than just a single character? In this lesson, we'll be looking at the second overarching category of [[Java]] data types called reference types. And our first reference type is called a string. A string is a sequence of ordered characters. Before, we could represent a single character with a char, but now we can represent a [[Microsoft Word|word]] or a person's name with the string data type. To create a string, we surrounded the series of characters with quotation marks. This represents a string value. To create a string variable, we just state the data type string, give the variable a label, and then use the assignment operator to assign the variable the string value. We should also note that the order of characters does matter. So let's say we have a string with "desserts," and then we have a different string with "stressed." Although these two strings have the same letters, they would not be considered as having equal value, because the letters are in different orders. So what makes a string a reference type? Unlike primitive types and the other data types we've looked at,
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=93)** a string is built out of characters. It is not a basic data type. It is created out of organizing char data pieces in a significant way. The deeper meaning behind reference types is out of the scope of this course, but I highly recommend you check out [[Programming Foundations- Data Structures]] to find out more. Now that we know about strings, let's create a string in Java. Using our program from the last lesson, we'll add a studentName variable that holds the student's name. We'll write String studentName, and in this case, the student's name will be Kayla Hammon. With the variable created, we'll print it out with System.out.println and the variable name studentName. We'll run this in the console. And here we see Kayla Hammon. Notice in the value of studentName, I included the student's first and last name. This is a design choice. Instead, we could create two separate strings, one holding the first name and another holding the last name. Let's go ahead and do that. Instead of studentName, we'll write studentFirstName, and we'll move Hammon to String studentLastName and have Hammon be the value. And then this is red because studentName no longer exists,
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/strings-in-java?u=76281980&t=187)** but studentFirstName does, so we'll print out the value of studentFirstName, as well as the value of studentLastName. We'll save this. Run it. And we see Kayla and Hammon separate in the console. Next, we'll look at strings in more detail.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=0)** - [Narrator] Now that we have the student's first and last name separated we can calculate the student's first initial from the first name and last initial from the last name. All we need to do is somehow grab the first letter of the first name and the first letter of the last name to create each initial. Earlier we talked about how the ordering of the letters within a string matters. And this is one place where that comes into play. For the string Kayla, we say K is at index or location zero. A is at index one, Y is at index two, L is at index three and A is at index four. This means to calculate the first initial of the first name we'll want to access the character at index zero, or the zeroth slot in the string. To do this we can use a special string operator to access the letters inside first name. To grab the first character of the first name we can use an operation called charAt. CharAt allows us to access a character at a specific location within a string. It takes one input and that is the index or location of the character we want to access. Going back to the code, we can change the value of studentFirstInitial to using charAt on studentFirstName. We'll write studentFirstName and then to use the charAt operation, we'll write .charAt.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=94)** Next we'll add the location we want to access within StudentFirstName which is zero for the first initial. We'll save this and run it. And scrolling down we see studentFirstInitial is the second to last thing to be printed out and we see K in our console. Exactly what we expect. Looking at the value of studentFirstInitial we write studentFirstName because that's the variable that holds the string we want to access the character from. We write dot because the operation we want to use is a string operation and we get it for free with the string data type. Then we write charAt because this is the operation we want to use. And finally we add our input which is zero because we want to access the character at the zeroth index. The output of this operation is K and that's what saved to the studentFirstInitial variable. Let's do the same for studentLastInitial. We'll write studentLastName because we want the first initial of the last name and use charAt to get that first initial of the last name with zero. We'll save this, run it and in our console, we get H as expected. Great, we just calculated data from another data piece. A student's initials from a student's name. We also learned that the concept of a data type consists not only of the different values it can store,
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/using-indexes-with-strings?u=76281980&t=191)** but also the different operations we can use with it. For example our string data type has the charAt operation. There are other string operations like charAt that exist that can only be performed with strings but they are out of the scope for this course.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=0)** - [Instructor] So far, we've printed out the string, "Hello world," individually, and a few variables individually, but now we are going to learn how to print them together in the same line. To do this, we need to combine string values with variables that hold strings in a print statement. Using the example from the last lesson, we can print out a student's full name, and say that student has a GPA of X, with X being the student's current GPA. In the code, we'll write System.out.println, and then access the value of the student's first name, with studentFirstName. To add on the last name, we'll add a plus sign for concatenation, combining the value of these two strings. Then we'll type the variable that holds the student's last name, studentLastName. If we put the student's first and last name together like this, there will be no space between the first and last name when it is printed out to the user. We can add a space by adding a literal string, so a string that is not evaluated from a variable, with a space. We'll want to concatenate the other side, so we'll add a plus button between the space and studentLastName. For the next part of the print statement, we want to add, has a GPA of, and then the student's GPA. We'll tack on the literal string
>
> **[1:32](https://www.linkedin.com/learning/learning-java-11/concatenating-strings-in-java?u=76281980&t=92)** of "has a GPA of," with the plus sign, and then on the other side, we'll also concatenate the student's GPA. This value is stored in the studentGPA variable. We'll save this, run the program, and in the console, we see the first and last name, Kayla Hammond, has a GPA of, and then the student's GPA, 3.45. Next, we'll take a deeper look at how we input and output strings to the user.

> [!info]- Semantic Content
>
> **Env Vars:** gpa (8)
> **Code Identifiers:** studentlastname (2), studentfirstname (1), studentgpa (1)
> **Versions:** 3.45 (1)
> **Speakers:** - [instructor] (1)

#### [Input and output in Java](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=0)** - So far, we've learned how to output information to the user using System.out.println(). We've created several variables and printed out their values to the user as well as concatenated their values to String literals. In this lesson we'll look at how we can create a program that allows the user to input information affecting the program's output. Thinking back to our student program, we might need to update a student's GPA. With some updates to the code, we can let the user dynamically change the value of a student's GPA. In the previous lesson, we wrote a print statement that tells a given student their GPA. Before having the user update their GPA, we should ask the user what value they want to update the GPA to and that's the print statement I've added here. Next we need to get access to the user's input and update the value of the student GPA variable. To do this, we can create a Scanner with System.in and save the Scanner in the variable labeled input. This is the opposite of the System.out we have been using to print to the console. The Scanner has some built in operations that will allow us to retrieve input from the user. This means we'll write input = new Scanner (System.in).
>
> **[1:27](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=87)** This creates a new Scanner that will scan System.in for the users input. We get an error here because we need to add a data type for our variable. The data type here is Scanner. There are lots of data types in [[Java]], but for now you can think of the Scanner as a tool that has operations that allow us to get input. In order to use those operations, we have to create a Scanner first. We also need to import java.util.Scanner in order to use the Scanner. Think of it as a special data type that we need to import in order to use. With the Scanner created. We can use the Scanners next double operation to get the next double or decimal value that the user enters in the console window. Similar to how we used the chart at operation on Strings. We'll use the nextDouble operation on our input scanner. so we'll write input.nextDouble, we'll want to save the value in our student GPA variable, so we'll add student GPA = to assign the user's inputed value to the student's GPA variable. Since we've already introduced and defined the student GPA variable before, we do not need to add the data type because Java already recognizes this variable as a double from its initial definition and it can only store double values. Now we'll create a nice output String so the user can see
>
> **[3:03](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=183)** that the student GPA has been updated.
>
> **[3:17](https://www.linkedin.com/learning/learning-java-11/input-and-output-in-java?u=76281980&t=197)** Let's run the program. Kayla Hammon has a GPA of 3.45 what do you want to update it to? We'll do a 4.0, Kayla Hammon now has a GPA of 4.0. We'll run it again, Kayla Hammon has a GPA of 3.45 let's update it to 2.75 and we see that in the console. Now you might be thinking, wouldn't it be awesome if my program could automatically calculate the GPA given a series of grades? As we go deeper into the fundamentals of Java, we'll be able to create more complicated programs like this. You also might be thinking, does this scale? No. Right now it only works for one student. For the way we have the program structured, we would have to execute this program and edit some of the source code for every student in the class. Also, nothing about the update is saved eternally. The update works for the programs single execution, but it does not save indefinitely. There are ways to make this program more scalable. But again, this chapter is meant to be an introduction for how we can store simple data pieces in the Java programming language and reference them later in the program. We will be building more complicated programs in later chapters.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=0)** - [Instructor] Let's find the last character in the string. When approaching a problem like this, I find it helpful to write down some of the facts we know. First, we know that characters are accessed by index. In fact, we can access a given character with the charAt method. (keyboard faintly clicking) The last character in the string is located at the length of the string minus one. (keyboard faintly clicking) We can combine these two ideas to find the last character in the string. The string in question is the text, so we'll run charAt on that string. (keyboard faintly clicking) The input for charAt is an index, and it will return the character at that index. We know the last character lives at the length of the string minus one, so let's add that. To get the length of the string, we'll use text.length. Then we subtract one here because indices start at zero. This will give us the last character in the string. Let's run it. Our code works as expected. Now, you might be thinking that the format of this code looks very different from what we're using in the course, and that's correct. We've mostly worked within the main method and printed items to the console. We haven't introduced functions or the keyword static
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/solution-find-last-character?u=76281980&t=94)** or return types, which are all shown with this challenge, but all of that is coming in later chapters of this course. Sometimes you have to work with code you aren't familiar with, and this is great practice for that.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=0)** - [Instructor] In the last chapter, we've looked at how we can represent data in [[Java]] using data types and variables, as well as how to input and output data. In this chapter, we are going to add some [[Decision-Making]] logic, that will allow our programs to have different outcomes. We saw this a little bit in the last lesson, when we printed out whatever the user inputted, but we can create more sophisticated [[Control Flow]], using conditions. Let's break this down. What is a control flow? A program's control flow is the order in which the program's instructions are executed. All of the programs we've looked at so far execute one statement after the other. We created a variable, then printed the variable. Or we created one variable and then another variable and then printed them both. Each line of code was executed sequentially. For example, line one is executed before line two, line two is executed before line three and so on. We can manipulate, which line of code is executed with special control flow statements and conditions. With these control flow statements a line of code might never be executed, it might be executed once or it might be executed multiple times. The conditions determine how many times, if at all, a given line of code is executed. In this lesson, we'll take a look at the control flow of a virtual fortune teller program. With the fortune teller, the user will pick a number
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=95)** between one and 10. Depending on the number the user picks, the user will receive a fortune. Let's dive into this diagram. This maps out the control flow of our program and describes how we want our program to work. Notice, everything is not sequential. We start at the start and the fortune teller, our program, will ask the user to pick a number between one and 10. The circle represents the start and the parallelogram represents input or output. The diamond represents the decision and that decision determines the choice and ultimately which print statement in fortune is run. Our one decision inside the diamond is asking the question, is inputtedNum less than five? This is our condition. Based on whether this is true or false, one of the true print statements will run. If the inputted condition is less that five, meaning the condition is true, the lower left lock is run. If the inputtedNum is not less than five, meaning it is equal to five or greater than five, the lower right block is run. Only one of the fortune print statements will be run. Not both or neither. Now, we know how to program some of this. We know how to output, pick a number between one and 10. We also know how to get access to the users input and save it to a variable. We do not know how to implement or write Java code for a decision block.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/mapping-out-program-control-flow?u=76281980&t=189)** We call these decision blocks or control flow statements, because they make a decision about which code statements to run on each execution of our program. In our case, the decision block is asking the question, if with the condition inputtedNum less than five. Depending on whether the condition is true or false, meaning if inputtedNum is less than five or not, a given code statement is run. Of course, right now, this is just a diagram. It's a representation of how we want our program to work in Java. Now that we have an idea on how we want our program to work, we can take this decision block in the diagram and break it down piece by piece, so that we can implement it in Java.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=0)** - [Instructor] Thinking back to the decision block in our [[Control Flow]], we have three main components. We have a condition, the code that gets run if the condition is true, and the code that gets run if the condition is false. To simplify our condition, we can just write out our condition with the less than sign instead of writing it out in English. This is closer to what it will look like in our code. Ultimately, the value of inputting them or the number that the user inputs will determine which print statement is run, which is exactly what we want. We call the less than sign a relational operator. Its inputs are inputtedNum and five. And the relational operator, less than, states a comparison between these two inputs. The result of this overall comparison will evaluate to either true or false. Since the inputtedNum less than five comparison evaluates to a Boolean, we call it a Boolean expression. And a Boolean expression can be used as a condition for our decision blocks. Of course, less than is just one relational operator. There are many others we could use here instead. This is a list of other relational operators we can use in our conditions. If we wanted to make our relational operator be less than or equal to instead of just less than, we can add an equal sign and it would test if the inputtedNum is less than or equal to five. Similarly, for the greater than sign, we would just add an equal sign to test if the inputtedNum is greater than or equal to eight.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/operators-in-java?u=76281980&t=96)** To check for equality, we would use double equal signs and this would check if the inputtedNum is equal to eight. If it is, the statement would be true. If not, the statement would be false. To check for inequality, we use an exclamation point and an equal sign. In this case, the statement would be true as long as inputtedNum does not equal three. It would be false in the case that inputtedNum equals three. Ultimately, a condition in the decision block evaluates to true or false depending on some variable. That's what makes it a condition that can be evaluated during the program's execution and manipulate a program's control flow. Now that we have an idea of how [[Decision-Making]] works in our programs, let's try implementing the fortune teller logic in [[Java]].

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=0)** - [Instructor] Let's review our Fortune Teller program. There are three main parts to this program. First, we ask the user to pick a number between one and 10. Next, we output the user's fortune depending on which number is inputted. Let's implement this program. In the code, we already have a print statement that asks the user to pick a number between one and 10. We also have a scanner that reads in the next int a user inputs with the nextInt operation. We save the output in a variable called inputtedNum. Now, we have to make a decision in our program. If the inputtedNum is less than five, the program should output the good luck fortune. If the inputtedNum is equal to or greater than five, the program should print out the shoe selection fortune. Before, we were just using blocks but this is a specific type of [[Control Flow]] statement that starts with an if so we call it an if statement. An if statement is a control flow statement, where if the condition is true, it performs some kind of action. In this case, our condition is inputtedNum less than five. The condition will either be true or false. For our program, if an inputted number is less than five, meaning the condition is true, then we execute the code in the if block or in the curly brackets. In this case, if the inputtedNum is less than five, we would print out enjoy the good luck a friend brings you.
>
> **[1:37](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=97)** This print statement would only be executed if the condition is true meaning inputtedNum is less than five. So what if inputtedNum is not less than five? Then the condition evaluates to false. When we mapped out our program in an earlier lesson, we said that if inputtedNum was not less than five, then we wanted to print out the other fortune. To do this, we add an else statement to our if statement. The curly brackets with the else statement encompass the code that will be run if the condition is false. Similar to the if block, the code inside the else block only runs if the condition is false. We don't always have to have an else block associated with an if block but we do in this case because we want to perform an action if the condition is not true. Let's add an if statement to our code. We'll write if and then our condition, inputtedNum is less than five, we'll create our if block with the curly brackets and we'll write System.out.println and then we'll write the else block. And there we have our if else. Only the if block or the else block will be run in an execution of the program because the condition cannot be true and false at the same time. The condition can be true or it can be false but only one fortune will be printed.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/decision-making-with-if-in-java?u=76281980&t=191)** This means that the code inside the if block doesn't know about the code inside the else block and the code inside the else block doesn't know about the code inside the if block. This will become more important later one. Let's run the program. We'll click the play button, pick a number between one and 10, we'll pick three. We get the first fortune. Enjoy the good luck a friend brings you and that's because three is less than five. We'll run the program again, we'll choose five. In this case, five is not less than five, it's equal to five and so we get this second fortune, your shoe selection will make you very happy today. We'll try one more time. We'll put in nine as our input and we get that second fortune again because nine is not less than five. This condition is false. Next, we'll take a look at a concept called scope and show how it relates to if statements.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/understanding-scope-in-java?u=76281980&t=0)** - [Instructor] In the Fortune Teller program, during the program's execution, only the if block or the else block was executed. All of this had to do with the topic called scope. Scope refers to the region of the program where a piece of code is accessible or in which it can be used. Every time we use curly braces in [[Java]], we are creating a block in the program. This is why the if block and the else block are separate. They are in different sets of curly brackets. Why does this matter? Let's say I created an int variable named favoriteNumber, with the value, five, in the if block. This variable scope is within the block in which it was created. That's where the variable is accessible and can be used. I can reference it or change its value anywhere inside the if block. However, since it was not created in the curly braces of the else block, it cannot be used in the else block, because the else block is outside this variable's scope. Now, let's say we created a string variable called favoriteFood outside the if-else block in the main function and gave it the value, pizza. Since favoriteFood is created outside the if-else block in the parent set of parentheses, this variable can be accessed and assigned a new value within both the if and else block. The favoriteFood scope, or where favoriteFood can be accessed, is anywhere within the curly braces it was created in.
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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=0)** - [Instructor] If statements aren't the only way we can add decision making to our programs. We also have loops. A loop is similar to an if statement, except that it allows code to be executed repeatedly, based on a Boolean condition, instead of just one time. There are several different types of loops in [[Java]], but the one we'll be focusing on in this course is the while loop. A while loop looks like this. We start at the start, and then follow the arrow to check a condition. If that condition evaluates to true, we execute a series of statements, and then check the condition again. If that condition is false, we exit the loop, and continue to the [[Representational State Transfer (REST)|rest]] of the code. On your smartphone, you've probably listened to music, and if you find a song you like, you put it on repeat. When a song is on repeat, it plays over and over again until you take it off repeat. We can represent this type of functionality in a Java program. Filling in the condition of the while loop, we can say our condition is: is current song on repeat? For the statements to execute, if the condition is true, we can print, "Playing same song on repeat," and give an option for the user to take the song off of repeat. If the condition is false, we can print, "Playing next song." Now, if is current song on repeat is never true, then playing same song again will never be printed. We'll never repeat the song.
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/while-loops-conceptually?u=76281980&t=93)** If the user never takes the song off repeat, then the condition will always be true, and playing same song again will be continuously printed. That's why we call it a while loop. While the condition is true, keep running these given statements. Now that's while loop. Let's try implementing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [While loops in Java](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=0)** - [Instructor] Let's create a while loop in [[Java]]. In the previous lesson, we diagrammed a while loop to represent a song playing on repeat. With this diagram, while the current song is on repeat, we play the song again. If the current song is not on repeat when we check the while loop condition, we exit the loop and play the next song. If the user never takes the song off of repeat, then the current song will play forever. We only exit the loop if the user takes the song off of repeat. Let's jump to the code. The first thing we do is create a scanner to get us set up for user input. We also have a Boolean variable that represents if the current song is on repeat and it equals true. Now, for the while loop. We want to say while our song is on repeat, meaning isOnRepeat is true, we want to run a series of statements. To do this we'll use the keyword while and then our condition in parentheses. Then we'll use open/close curly brackets to create the while block for the statements we want to run while the condition is true. Let's add those statements. We'll start by printing out that the current song is playing. On the next line, we'll ask the user if they want to take the song off of repeat. With these print statements done, we'll get access to the user's input with input.next and save it in a variable called userInput. Then, we'll use an if statement
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=96)** to check if the user's answer is yes, meaning we should change isOnRepeat to false. For the condition we'll write userInput.equals("yes"). Equals is a string operation we can use to check if the user input has the exact value yes. In the curly braces, we'll set isOnRepeat to false. All right, we're almost done. We just need to add a print statement for when the program exits the loop that says "Playing next song". So after the while block we'll write System.out.println("Playing next song"). We'll save this and run the program. Playing current song. Would you like to take this song off of repeat? If so, answer yes. We'll say yes, we want to move on to the next song and it says "Playing next song". When we went into the while loop, userInput did equal yes and so isOnRepeat was set to false, this means on the next check, isOnRepeat was false and we proceeded to play the next song. Let's run it again. Do we want to take the current song off of repeat? We'll say no and play the current song again. Do we want to take it off repeat now? No. In this case, isOnRepeat remains true, the input is never equaling yes and so isOnRepeat is never set to false. We could say no again. And now we'll finally say yes and that will set isOnRepeat
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/while-loops-in-java?u=76281980&t=189)** to false and will play the next song. In the next video, you'll get a challenge that will test what you've learned in this chapter. Good luck!

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=0)** - [Instructor] Let's write some code to determine if a given year is a leap year. We know if a year is divisible by four, it is a leap year. To check if this is true for our year we can use an IF statement.
>
> **[0:24](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=24)** Here we're using the modulo operator to find the remainder of the year divided by four. If the remainder equals zero, then the year is evenly divisible by four and it is a leap year. Now, if that year is also divisible by a hundred, it is not a leap year unless it's also divisible by 400. Let's add those extra IF statements.
>
> **[1:16](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=76)** Here if the year's evenly divisible by four and it's evenly divisible by 100, but not divisible by 400, we return false. If it's divisible by all three numbers, we return true. If the year is divisible by four but not 100, we also return true. Let's run our code. Our implementation works as expected. However, it is a little hard to read and understand. To collapse this logic, we can use Boolean operators.
>
> **[2:07](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=127)** These operators will allow us to combine the conditions in the IF checks to create simpler statements. Now, the cases where we want to return true are those where the number is divisible by four and not 100 or where it's divisible by four, 100 and 400. Let's write out the first case. When the year is divisible by four and not divisible by 100, we want to return true.
>
> **[2:57](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=177)** Here we use the And Boolean operator to combine both Boolean conditions. The IF condition will only be true if both inputs to the Boolean operator are true. Then we can add the second condition where the number is divisible by four, 100 and 400.
>
> **[3:40](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=220)** Here we use the OR operator to combine this first set of conditions with the second set of conditions. Either the first or second set needs to be true in order for the year to be a leap year. Now, if a year is divisible by 400, it is also divisible by four and 100 because these are factors of 400. This means we can eliminate the two other checks in the second set of conditions. The IF condition will only return true if the year is divisible by four and not 100 or if the year is divisible by 400. To make this even simpler, we can eliminate the if condition and just return the result of the Booleans.
>
> **[4:49](https://www.linkedin.com/learning/learning-java-11/solution-leap-year-checker?u=76281980&t=289)** This gives the same result, but with simpler code. Let's run it. Our code works as expected and it's simple and easy to read.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=0)** - [Instructor] When we are writing code sometimes we can make a mistake and get an error. These errors can cause our code to give the wrong output or crash our program entirely. And you've probably already experienced a little bit of this in the course so far. You may have heard of the term debugging before. And this process involves locating and correcting code errors in your program. We often call these errors bugs, because computer scientist pioneer Grace Hopper coined the term bug when she found a moth causing an error in her early computer. In this chapter we'll look at some strategies for how to debug your programs and how to fix some common errors. Before we can solve errors, we have to understand how our program is executing code so that we can find them. One way we can understand how our program is working more fully and locate an error is by using print statements. In this lesson, we'll take a look at our multiple choice program from the last chapter, but with a few errors introduced. The first errors in the program we going to look at are syntax errors, or syntax bugs. Syntax errors often cause your program to fail before it's even executed. Because the computer has to understand your code in order to run it. This means if something's misspelled, or a certain symbol is missing, the program won't run, because your code is not in the right format. So let's find some syntax errors in this program.
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=96)** These can be easier to find with an IDE, because an IDE tells you what line has the error. It may not be that specific line you have to change, but it's probably something around it. Let's take a look! Here on the right we have some red symbols, and so if we click on the first one, here we have an error, it says, "expected semicolon." This is a syntax error, and all we have to do to fix it is add the semicolon, we were just missing a semicolon. This happens to everyone. Let's scroll down. Here we have correctAnswer in red. Cannot resolve symbol 'correctAnswer'. And it has the error here as well. Let's scroll up to the definition of correctAnswer to see its value, as well as what the variable's called. Here, we've misspelled the variable. We need to add an r to our correct answer for correctAnswer. With the r added, our errors go away. Let's save this and run the program. What is the largest planet in our solar system? We'll just say jupiter. And it says I'm incorrect. The correct answer is saturn. So what if I go, "earth?" It says it's saturn. So I imagine if I type in saturn it will tell me I'm correct. And it indeed does. All right, so we can run the program,
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=189)** but there are still some errors here. One bug is that although I put in the correct answer, Jupiter, it told me I was incorrect. These errors are different from syntax errors because they deal with the logic of our program. We call these errors logical errors. A logical bug is an error where the program is able to run but it doesn't act as the user expects, and that's exactly what we're seeing here. Jupiter is the correct answer, but the program doesn't know it's the correct answer. In order to debug this, we often look for parts of the program that aren't working as expected. Find its respective code, and in this case, add some print statements to find it, and fix it. Going back to the code, let's try outputting what the value of correctAnswer is, as well as what the value of our input is. To make sure it's getting the right input, as well as the correct answer is what we want it to be. So we'll write, System.out.println(input). And then the correctAnswer. We'll save this. We'll run it. We'll type in jupiter. In the console, our input is shown as jupiter, which is what we expect. But the value of correctAnswer is actually saturn. If we scroll up to where correctAnswer is defined, we see its value is choiceThree. If we go to where choiceThree is defined, its value is saturn.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-11/debugging-syntax-and-logical-errors?u=76281980&t=283)** The correct answer should be choiceTwo, so we'll change choiceThree to choiceTwo. And now our program is fixed. Let's take out our print statements and run the program again. We'll try it with jupiter. And that is the correct answer. Let's try it with one of the incorrect answers, so in this case we'll say saturn. And it says that is incorrect, the correct answer is jupiter. We debugged the code. Now, this is a fairly trivial example. But as our programs get more complicated, understanding the values of our variables and the way our program is executing code becomes more and more important.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=0)** [Narrator] - Adding print statements for debugging and removing them later on can get a little annoying, but there is another way that we can debug our programs. At the beginning of the course, we installed an IDE to compile and run our [[Java]] programs, but there is another benefit to using an IDE. An IDE comes built in with some debugging tools that we can use to find and solve errors in our programs. We solved one already, when our variable name was misspelled and a message popped up, saying the symbol cannot be found. Now it's time to dig a little deeper. Another tool that an IDE gives is a breakpoint. A breakpoint is an intentional stopping point put into a program for debugging purposes. This allows to temporarily halt a program in it's execution in order to inspect the program's internal state. The parts of a program's internal state, include the values of variables, the result of certain lines of code, and whether or not the program reaches a certain line of code in it's execution. Instead of using print statements to reveal the program's internal state, we can pause the program during it's execution and inspect it's state as it executes. Let's see how this works. Here we have the multiple choice program code, but the value of correct answer is choice three. It has the value Saturn instead of Jupiter,
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=93)** so there is a logical error in this code. Let's add a breakpoint on the line of our if statement. We can add a breakpoint on a specific line by clicking the space, just after the line number. With this breakpoint, our program will pause it's execution, just before this line. In order for these breakpoints to work, we need to run our program in debug mode, to run in debug mode, instead of clicking the play button, we'll click the bug in the right hand corner. We can also run this file in debug mode, by left clicking the class we want to run, and run in debug mode that way. Let's choose a planet, let's say Earth, and now our program has stopped it's execution. It stopped just before the if statement line and we get a window at the bottom of our screen, that has various details about our program's internal state. It has our variables, questions, choice one, choice two, choice three, as well as their respective values. This is how we could detect that correct answer has the long value. Here it's Saturn, the variables shown here are also the variables that are in scope. Remember a variable scope refers to where we can access and use the variable in our program. Now that we've inspected the program's internal state, what if we want the program to continue it's execution? In the debugger window, we have a few buttons that can help us.
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/debugging-with-an-ide?u=76281980&t=187)** The play button will resume the program, and it will only stop again if it runs into another breakpoint. If we just want to run the next line of code, we can click the step over button. In fact, we can continue to click the step over button to run each line of code individually, until the program has finished. If we find an error and want to fix it, we can always stop the program's execution with the stop button at the top, or the stop button in the debugger. There are other buttons here that are useful for debugging, but they are out of the scope of this interdictory course. Ultimately, the debugger is useful because we can just add a breakpoint and run into bug mode to inspect the program's internal state, instead of adding a bunch of print statements. Let's stop this program and now you'll get the chance to debug a program all on your own. Using the tools we covered in this chapter. Good Luck!

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=0)** - [Instructor] Let's find the bug in the chunky function. In the code, we access the string and run the substring method on it. The substring we create runs from index zero to what this math dot max expression returns. It will return either the length of the string or the max length value given in the input. Let's see what the code outputs when we run it as is. We'll change show expected result to true, so we can see what our code is supposed to return. With this execution, the input string was this is a sample string and the max length was three. This means the string returned should only be THI or a string with the characters from index zero to index two in order. THI is what appears in the expected results, but our code returned the full input string. It didn't truncate it. Let's consider how our code was evaluated given our input values. In this case, S dot length would've been 24 because there are 24 characters in the string. The max length was passed in as three. This means that 24 would've been returned from math dot max giving us the full string, all the characters from zero to 23. What we really need is a substring
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=93)** from index zero to the max length. Let's modify the code. Let's run it. Our code works as expected with this input. Let's try another input. Let's make max length really high, like a hundred. We'll run it again. Yikes, an error. A hundred is out of bounds for the string because the string only has 24 characters. If the max length is too high, we'll just want to return the full length of the string. Let's reconsider our implementation. If max length is low, then this implementation works, but if it's greater than the length of the string, we want the second input to substring to be S dot length. We can achieve this by using the min method from math.
>
> **[2:45](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-truncation?u=76281980&t=165)** If the max length is greater than the length of the string, then the min expression will evaluate to S dot length and will no longer get an error. Let's run it again. It works as expected. Let's try again with our previous input where max length was three. And our output is correct. It's important to test your code with many different scenarios to ensure it works as expected.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** thi (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the bug in string reversal](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-find-the-bug-in-string-reversal?u=76281980&t=0)** - [Instructor] Let's find the bug in the string reversal implementation. Here we create a string builder and iterate through the original string backwards, adding a character to the string builder on each iteration. Then we turn the reverse string builder into a string. Let's change the show expected result variable to true and run the code to see what we expect, as well as what the code returns. It appears our reverse idea is working correctly, but we're forgetting a character. We're missing the H. Based on this, the bug is likely somewhere in our for loop. We're not looping over every element and adding it to our reverse string builder. Let's walk through how this code would work with a given data sample. Let's say our [[Microsoft Word|word]] was note. Walking through the implementation, I would start off at three, because the length of the string is four, and we subtract one. Then we append the character at index three to our reversed string builder. That character is E, so we add that to our result. On the second iteration, I is two, because we decrement I on each iteration. The character at index two is T, so we add that to our reverse string builder. On the third iteration, I is one,

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=0)** - [Instructor] So far, we've created code that has run sequentially, one line after the other. We have also written code that manipulates the program's [[Control Flow]] with if statements and loops. The way we have written code so far has more to do with the way that it's executed, rather than the way it's designed. In the next two chapters, we'll be focusing more on [[Program Design]], and how we can create programs that are readable, and easily understood by other software developers. In this chapter, we'll be looking at functions. In [[Software Development]], a function is just a series of finite steps that accomplish some task. Let's say we have the task of creating a peanut butter and jelly sandwich. The first step would be to gather the ingredients: two slices of bread, peanut butter, jelly, a knife, a plate. The next step would be to spread the peanut butter on one slice, and jelly on the other slice. Next, you would put the two slices together to create the sandwich, and finally, you would place them on the plate. Each of these steps that I've mentioned is a defined step that we take in order to complete the make PB&J task. We call the combination of these finite steps in association with a task, a function. So how do you use a function? We can use it's label, or the name we give the task. In our case, the task name is "makePBAndJSandwich." This means every time I want to make a PB&J,
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=95)** we can just use the label, or the name of the function, "makePBAndJSandwich," instead of listing out every step. To use the function, we would just write the function name with some open and closed parentheses. This makes three peanut butter and jelly sandwiches, because it executes the function code three times. Without functions, we would have to copy and paste all of those steps three times, which would be unnecessarily wordy. We want our code to be designed as we live and work in every day life. When I tell someone to make a PB&J sandwich, I don't need to tell them all the steps. I just use the name of the task, but at some point, long ago, that person learned how to make a PB&J sandwich, and associated the steps with accomplishing that task. For our programs, we have to write code that defines the task, as well as all the steps needed to complete that task, or make the PB&J. Once it's defined, we can use the task name to execute the function as many times as we want. Now, our functions don't have to have a bunch of steps. Let's say we wanted to create a function that prints out "It's Developer Tea Time!" whenever it's time for tea. The name, or label, for the function would be "announceDeveloperTeaTime," and for the steps, it would wait for the appropriate time, and then print out "It's Developer Tea Time!" To use the function, we would just need to use the name "announceDeveloperTeaTime."
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/what-are-functions-conceptually?u=76281980&t=191)** So why use functions? Functions help developers organize their code in a meaningful way. Organizing a series of steps under a label helps us keep track of certain tasks we might want to accomplish in our program. It also helps us define a single task once, so that it can be used all throughout our program. For example, once we know how to make a PB&J once, we can just use the task name to make one. Now, what if we wanted to change how to make a PB&J? Or, we wanted to change how we announce Developer Tea Time? Instead of having to change a bunch of separate lines in the code, we can just go to the function steps, and modify the step we want to change. For example, if we wanted to change our announcement to "It's Developer Tea Time! It's time for some snacks." We would just change the one print statement in the announceDeveloperTeaTime steps instead of changing a bunch of lines of code. Ultimately, functions make it easier to change what our code is doing. Next, we'll create and use our first function in [[Java]]. Stay tuned!

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=0)** - To use a function in [[Java]], we must first define the function. We've already seen this a little bit with the functions we mapped out in the last lesson. For the Make PB&J Sandwich function, we had to define the steps needed to accomplish the given tasks. Make a peanut butter and jelly sandwich. For Announce Developer Tea Time, we had to define the steps to announce tea time. It's important to remember that just because we are defining a function, does not mean we are using it. Just because I have given you the instructions on how to make a PB&J, does not mean you've made a PB&J. This means, the way we write this code will be a little different than the things we've written in the past. Let's try implementing our Announced Developer Tea Time function in Java. To define this function, we are going to write code outside the main function for the first time. Everything we've done so far has been about executing code. Not defining new functionality that could potentially be used. To define the new set of steps that we want associated with our Announce Developer Tea Time function, will go just above the Main function and write, public static void. And then the label of our function, announceDeveloperTeaTime. We won't be covering what the keyword, public, means in this course. But we'll take a look at the keyword, static, in the next chapter
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=93)** and the keyword, void, later on in this chapter. The name of our function is announceDeveloperTeaTime. Now let's follow this up with some open and closed parenthesis and open-closed curly brackets. We'll talk about the open-closed parenthesis in a later lesson in this chapter. But we are going to put the steps for our function in between the curly brackets. These will be the lines of code that will be executed when out function is used. Thinking back to the steps we laid out before, the first step is to wait for developer tea time. So we'll write, System.out.println ("waiting for developer tea time..."). To keep this as simple as possible, we are going to make our program pause until the user types a random [[Microsoft Word|word]] and presses Enter on their keyboard. There are other ways we could implement this waiting for developer tea time step, But this is the most straight forward with what we know so far. For this function, once the user types the random word and presses Enter, we'll announce developer tea time. To check if the user has entered the word into the console, we'll need to create a Scanner and use the .next operation, as we've done before. We won't need to reference or use the random word that the user enters. So we can write input .next and not save it to a variable. Finally, let's announce developer tea time
>
> **[3:08](https://www.linkedin.com/learning/learning-java-11/defining-functions-in-java?u=76281980&t=188)** with a print statement. Awesome! Now, we have our first function. The function name is Announce Developer Tea Time and it has five steps or five lines of code to execute. With our function defined we can use it in our program.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=0)** - [Instructor] Now that we've defined our announceDeveloperTeaTime function we can proceed to the second step of using functions in [[Java]]. We just write the name of the function to use or execute the steps within the function. In java, when we use a function, we say we call the function. You can think of this as recalling the steps that were previously defined and executing them. Let's call a function in Java. We define our function outside of the main function but we are going to call or use our function inside of the main function. The main function is where the meat of our program gets executed but we can always recall functions that are previously defined as part of the program. Our announceDeveloperTeaTime function is one of these functions. In our main function we can write announceDeveloperTeaTime. This will called the announceDeveloperTeaTime function, execute its steps and then continue to execute whatever is left in the main function sequentially. Let's run this in debug mode to see what's happening. First we'll add a breakpoint to when we call the function as well as the first line of the functions implementation. The program's execution has just started. Notice the only variable we have in scope is args. Let's hit continue. Now we're at our second breakpoint. Calling a function by name means executing the steps
>
> **[1:36](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=96)** associated with the function name. The first step is to execute the print statement. If we hit step over and switch over to the console we will see that this print statement has been executed. If we hit step over again we'll see the next print statement has been executed. On this line we create a variable called input. We call input a local variable because it's created within the function. It is local to that function and cannot be accessed outside the functions of limitation. Its scope is limited to this function. Let's hit stop over again and since input is accessible at this point of the program we see input as a variable in our debugger. On the next line we access this variable and use .next to retrieve input. Let's hit continue and let the [[Representational State Transfer (REST)|rest]] of the program play out. We'll need to enter a random [[Microsoft Word|word]], we'll type in random, we see It's Developer Tea Time! as expected in the console. Let's add some more code to this main function to make sure that we understand its [[Control Flow]].
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=187)** Let's add a breakpoint every time we call announceDeveloperTeaTime. We'll keep the breakpoint at the implementation level as well. We'll run in debug mode and the first breakpoint we hit is our first call of announceDeveloperTeaTime. Going to our console we see Welcome to your new job has already been printed. Let's hit continue. This is expected. We're walking through the steps of announceDeveloperTeaTime. We'll step over each of these steps and the print statements appear in the console. We'll enter our random word and continue onto the next breakpoint. We see It's developer tea time! from the announceDeveloperTeaTime implementation but now we see write code, review code. These live in our main function after the first announceDeveloperTeaTime call. Now it's time for the second call of our function. Let's hit continue and we go right back into those steps. Each print statement we print and then it waits for our input, in this case we'll say panda. We'll hit continue. We announceDeveloperTeaTime again and then we get promoted which is the last line of our main function. Awesome, we just called our first function. Now you might be thinking that this announceDeveloperTeaTime function looks pretty similar
>
> **[4:42](https://www.linkedin.com/learning/learning-java-11/calling-functions-in-java?u=76281980&t=282)** to the main function and that's because they're both functions. Whenever we hit the play button and execute a program the main function is automatically called and used. Every time we've been writing code we've been defining the main function that's automatically called at execution. It's all coming together. In the next lesson we'll make a new function that's a little more complex. Stay tuned.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=0)** - [Instructor] The announceDeveloperTeaTime function had no inputs. It was just a series of steps that the program followed every time the function was called. The output was always the same. There was nothing dynamic about it. What if I wanted the output to be different depending on what was inputted into the function? For example, let's say I wanted to calculate the total cost of a meal including tip and tax. To calculate this we would first figure out the tip by multiplying the tip rate with the listed price of the meal. We would figure out the tax by multiplying the tax rate with the listed price of the meal as well. Then we would add the tip, tax, and listed price of the meal and output the result. These are finite steps that we can label calculateTotalMealPrice. Of course, almost every meal you order will have a different listed price. And sometimes you might want to tip a different rate depending on what service you get. And sometimes you might want to tip a different rate depending on the service you get. Sales tax rates also differ depending on what state or country you are in. How can we account for this in our function? What value could we possibly give listed meal price, tip rate, and tax rate if they change every time? In this lesson we are going to create a function with inputs. Adding inputs is going to allow us to insert a specific listed meal price,
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=94)** tip break, and tax rate into the function every time we call the function. The listed meal price, tip rate, and tax rate inputs will be defined in the functions definition. But the values of these inputs will be assigned when we use the function or call the function. Let's try implementing this in [[Java]]. Our function starts off with public static void and uses the function name calculateTotalMealPrice. Using our formula from before we'll calculate the tip by multiplying the tip rate with the listed meal price. We'll calculate the tax by multiplying tax rate with listed meal price. We'll calculate the result by adding together listed meal price, tip, and tax. Then we'll output the result to the console. You might notice that the listed meal price, tip rate, and tax rate are red. And that's because we haven't defined those as inputs to our function. To define an input we add code between the parentheses. Our first input will be listedMealPrice. So we'll write the data type that listed meal price should have, in this case double and then the name of our input, listedMealPrice. We just defined our first input to the calculateTotalMealPrice function. And notice listedMealPrice is no longer red. Let's do this for tip rate and tax rate.
>
> **[3:08](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=188)** Both of these will be doubles. Thinking back to our discussion of scope these inputs are only accessible within the functions implementation. We'll give these inputs a value later on but since they are created here as a part of the functions definition they can only be used within the function. Now that our inputs are defined, let's add a call to calculateTotalMealPrice. If we try calling this function like our announceDeveloperTeaTime function it won't work. Unlike announceDeveloperTeaTime we defined inputs to this function and we have to give each of those inputs a value when we call the function. The first input to our function is listed meal price. We can give this input the value 15 by adding 15 between the parentheses. But we still have an error. That's because we need to add a value for each input not just the first. We also have the tip rate and tax rate. We'll add .2, 20% for the tip and .08 for the tax rate, 8%.
>
> **[4:23](https://www.linkedin.com/learning/learning-java-11/parameters-in-java?u=76281980&t=263)** It's important to remember that the order does matter here. So the first input defined in the function will get the first value in the parentheses and so on. Let's run the code and see what happens. And we get an output. Your total meal cost is 19.2. Let's try changing the values of the inputs to this function. Instead of 15, we'll say the listed meal price is 25. We'll also say we only want to tip 18% or .18. The tax rate will stay the same. Let's run the code again and the second output says the meal price is 31.5. Changing the inputs to our calculateTotalMealPrice function affected the outputs. This is the first time we've used a function with different input values. In the next lesson we'll continue to make calculateTotalMealPrice more sophisticated. Stay tuned.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=0)** - [Instructor] So far, the only way we've outputted data is System.out.println, and this really outputs data to the user. We've gathered input from the user in the past with the scanner, and in the last lesson, we learned how to input data into functions using parameters. Now we're going to learn how to output data from functions using return types. We'll talk more about return types in a second, but imagine you go to a restaurant with four of your friends, and you all order similarly priced meals and want to tip and tax the same amount. The listed meal price comes out to be $100. You want to tip 20%, or .20, as a group, and the sales tax is .08, 8%. With the function you created in the last video, we can calculate the total meal cost, which will come out to 128, and that would get printed out to the console. Now what if we wanted to split the bill among me and my friends? The total meal cost is 128, but I want to know what each person owes on the bill. We could add a parameter to our function that represents the number of people at the meal and divide the final result by that number, but then the function name doesn't really make sense, because the printed-out statement should represent the total meal cost, not my portion. What I really want to do is somehow get access to the data outputted
>
> **[1:33](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=93)** by the calculateTotalMealPrice function and manipulate it some more. I want to divide it by five. We can do this with return types. For the functions we've created, we've always prefixed them with public static void. Void is actually the return type. Every function in [[Java]] returns some value or nothing, and every function we've created so far has returned void, or nothing. For the calculateTotalMealPrice function, we want to return the value of the result variable. The result variable is a double, so we'll change void to double to make double our return type. With the double return type, we have to make our function return a double value. We can do this using the return keyword. We'll write return and then the value we want the function to return, in this case, the value stored inside of result. Awesome. Our function returns the calculateTotalMealPrice result. Now we can access and save the result in a remain function. How do we save the result? Just like we save any value in Java. We can create a variable. First, we'll call the calculateTotalMealPrice function with 100, 0.2, and 0.08 as values which will map to listedMealPrice, tipRate, and taxRate. Then we'll save the output in a variable called groupTotalMealCost.
>
> **[3:09](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=189)** This variable will be a double, because the return type to the calculateTotalMealPrice function is a double. groupTotalMealPrice will have the same value as result. Let's print groupTotalMealPrice out to the console, add some break points, and run the code in debug mode. We'll add one break point at the function call and another break point when the result is returned. Let's use the debugger. Here, we're right before the function call. The function will be called, and the result will be saved in groupTotalMealPrice. We'll hit Continue. Inside the function, we have 100 for our listedMealPrice, 0.2 for the tipRate, and 0.08 for the taxRate. Result has the value 128. And if we hit Play again, we should see 128 in our console. And there it is. Returning a value allows us to take a value of a variable within a function and allow it to be accessed at a different scope of our program. Before, variables and values created within a function could only be accessed and used within that function. With return types, we can calculate a given value and make it accessible to a different part of our program. Now the ultimate goal was to figure out how much each person in the group owes if the meal is split.
>
> **[4:43](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=283)** There are five people in the group, so we can divide the groupTotalMealPrice by five and save it in a variable called individualTotalMealPrice.
>
> **[4:59](https://www.linkedin.com/learning/learning-java-11/return-types-in-java?u=76281980&t=299)** Let's run the code and see what the individual price is. It's 25.6. We just made our function a little more sophisticated by adding a return type. In this case, our return type happened to be a double, but it could be a Boolean, int, char, string, or any other data type that we've covered. In this chapter, we've been defining and using our own custom functions, but there are functions that are already defined in Java, and we can just use them. We'll take a look at some of the built-in functions next.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=0)** - [Instructor] In this chapter, we've been creating our functions from scratch. We've defined various functions, added parameters, added return types, and then called them in our main function. These functions are called user-defined functions because we, as users of [[Java]] and software developers, are creating them. We are defining the finite steps, naming the function appropriately, and then calling it in our code. There are many functions that developers want to use, but not necessarily define themselves and as a courtesy, the creators of Java have defined some of them for us. We just have to call the function by the name that's already defined. We don't have to define it. One function that we've been using a lot that's built-in is println. We never defined system.out.println, but we can call it because it's a built-in function to Java. Back at the beginning of the course, we talked about operations on data types, operations we can run on strings, operations we can run on ents, and many of these operations are really functions. The .equals operation that we've run in the past is really a string function. The value we've added between the parentheses is the string we want to compare the original string to. The way we call a built-in function might seem a little different than a user-defined function, and that's because it is. We are using the dot operator to access
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=95)** many of these built-in functions. For system.out.println, we have to access out from system and then the println function from out. We'll talk more about the dot operator in the next chapter, but the main takeaway here is sometimes we'll define our custom functions and sometimes we'll use built-in functions. So how do we find out about all of these built-in functions? Let's say you want to create a custom function for exponentiation, something that will take a given number to the second power, or the fifth power. This is a common task and there might be something in Java that already does this. So you'll [[Google]] around and try to find some examples of a built-in function that already does exponentiation or an example of a user-defined function. Let's try doing that now. All right, here's one, math.pow, and there are two inputs. The first input is for the base and the second input is for the exponent. We take the base to the power of the exponent, hence the function name pow. The way we access it is through math using the dot operator. Let's try writing this in our code. We'll write math.pow and you'll notice that some information about the function pops up in our IDE. We see that it has two parameters that are both doubles
>
> **[3:10](https://www.linkedin.com/learning/learning-java-11/using-built-in-functions-in-java?u=76281980&t=190)** and it returns a double. We'll add two as the base and five as our exponent. We'll save it in a variable called result and then print it to the console. We'll run the program, and we get 32, which is two to the power of five. Now, if we type math., we can see there are a lot of different mathematical functions that we can call already built into Java. Math is a part of the Java standard library, which contains all of the different built-in functions we can access. Math is just one component containing a series of built-in functions. So what's the benefit of using built-in functions? You don't have to write the implementation of the function yourself. The function is already defined and you can just call it. All you have to know about the function is what it takes as input and what the expected output is based on what the function does. Usually, if there is a built-in function for the thing you want to accomplish, you should use it instead of creating your own custom function. Built-in functions have been tested a lot by the creators of the programming language. They are basically guaranteed to do what they are described to do. Next, you'll test your skills about functions in a coding challenge. Good luck.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=0)** - [Instructor] Let's implement this function. To keep track of our new string, we'll use a string builder. We'll also create an int to keep track of where we should insert the next capital letter. We want to move the capital letters to the beginning of the list so it'll start off at 0. Then we'll iterate through the input string.
>
> **[0:33](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=33)** We'll retrieve each character using the charAt method.
>
> **[0:44](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=44)** Now we need to decide at what index should we put this character in our result. This will depend on whether the character is a capital letter. We can use the isUpperCase method from the character class to check if a given character is uppercase.
>
> **[1:08](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=68)** Now, if the character is not uppercase, we can append it to the back of the string builder. Its ordering should remain the same. If the character is uppercase, we'll want to insert it at the beginning of the list.
>
> **[1:30](https://www.linkedin.com/learning/learning-java-11/solution-move-capital-letters?u=76281980&t=90)** Now, if there's more than one capital letter in the list, this won't work. Each capital letter would be moved to the front of the entire string, and the initial capital letter ordering would not be maintained. Instead, we'll use the capitalIndex so we insert the character at the correct spot. Once the capitalIndex is used, we'll want to increment it so it's ready to go for the next capital letter we find. We can increment it using the postfix operator. After exiting the loop, our result will be ready to be converted into a string and returned from the function. Let's run it. Our code works as expected. All the capital letters in the return string have been moved to the front.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=0)** - [Narrator] In this chapter, we will continue to talk about [[Program Design]] and about how we can make our programs readable to other software developers. As you enter the workforce, there are often several software developers working on the same program, so it's essential to write code in a way that's easy to read and understand. A lot of times, I'll forget about code that I've written six months ago. And if it's written in a way where it's hard to understand, I have to take a significant amount of time to understand it before I can add functionality to it. We want to prevent that. One way to make our program easier to read and understand is with classes. We've seen classes a little bit before because all of our code so far has been contained within the main class. But now we are going to dive a little deeper. Everything we see, hear and experience in everyday life can be represented in code. We've represented the on-repeat functionality of a music player. The final total that may be on a restaurant receipt and more. How well something is represented is up to us and we decide what to code. Although we've used functions and other tools to represent these in code, most of the time, classes act as blueprints for these things. A class is a user-defined blueprint that has a set of attributes and behaviors
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=94)** that define the item that it is supposed to represent. For example, let's say we wanted to create a class or blueprint for a triangle. When we think of a triangle, it has a base, a height, and three sides with various lengths. These are attributes or properties of a triangle, so we can define them as that for our blueprint or class. Each of these attributes will define a data type and they will act as a variable in the blueprint. The base, height and sides of the triangle will have double values. Every triangle we create will have a base, height, and side lengths. The values may not be the same but every triangle has these attributes and these attributes are really variables that will hold a particular value for a given triangle. A class can also have behavior. The behaviors are defined as functions that are related to the class. In the debugging chapter, we debugged some code that calculated the area of a triangle. We could turn that code into a function called findArea and add that as behavior to our triangle class. The functionality would be the same but it's nice to make it a function so we can reuse it as well as organize it by putting it in our Triangle class. Another name for a behavior is a method. We could say that findArea
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=187)** is a method of the Triangle class. We could also add a behavior or function to this class that decides if the triangle is an equilateral, isosceles or scalene triangle. An equilateral triangle has equal side lengths. An isosceles triangle has two side lengths that are equal and a scalene triangle has all unique side lengths. With if statements and some comparisons with the side length attributes, we could implement a function called calculateTriangleType that returns the type of triangle. One could argue that the fact the triangle is equilateral, isosceles or scalene, is more of an attribute or property rather than something to be calculated. But this is just one programmatic design. There are a bunch of different ways you could represent a triangle in code, it just depends on what functionality you want and what data you want to store. For the behaviors we've talked about so far, they have manipulated or used attributes of the class. findArea used the triangle's base and height and calculateTriangleType used the side lengths of the triangle. Although functions inside the class or behaviors often use a classes properties, they don't have to. We add the keyword static if the function does not use the properties of the class but still relates to the overall theme or idea of the class. We'll dive into the keyword static later on in this chapter.
>
> **[4:45](https://www.linkedin.com/learning/learning-java-11/classes-in-java?u=76281980&t=285)** Now that we understand classes conceptually, we can connect these blueprints to the execution of our programs. Stay tuned.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=0)** - [Instructor] When we were talking about functions in an earlier chapter, we had to define a function in order to call it. Similarly, we have to define a blueprint or class in order to use it. In the last lesson, we defined the Triangle class or triangle blueprint. But we haven't created any triangles yet. We just defined the attributes and behavior of a triangle in a blueprint. In this lesson, we are going to learn how to create individual triangle instances in our program. An instance is an object created from the class blueprint. Just like we make buildings from blueprints in real life we use a class or blueprint to create objects or instances in code. Thinking back to our triangle class, a triangle has a base height and three side lengths. An instance of a triangle, say named triangleA, could have a base 15, height eight, and sides with lengths 15, eight, and 17. Another instance of a triangle could have base three, height 2.598, and side lengths three, three, and three. From our single Triangle class, we can create as many instances as we want and each instance will have its own base, height, and side length attribute variables. So how do we create these instances? We use a special method or behavior called a constructor.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=95)** Every class has a constructor and it's how we create and initialize each triangle we want to use in our program. It's how we can create triangleA with specific base, height, and side length values, and then construct triangleB with different attribute values. We call this special function inside the Triangle class. What does a constructor look like? Since it's a function, it has a name and that name is always the same as the name of the class, so in this case, triangle. Then we have open-close parentheses for the inputs to the function and brackets for the implementation of the function. Right now, they are empty. For the return type, the constructor always returns an instance of the class, in this case an instance of triangle. We don't have to state it in the definition of the method because it's already built into [[Java]] to expect that behavior. In the implementation, we won't be using the return keyword either because no matter what we do in the constructor, it will always return an instance of the class, in this case Triangle. In constructing a Triangle instance or Triangle object we'll want to initialize its attributes with values. We'll want to give a value to the base, the height, and the side lengths. We could set these to any default value but ideally this constructor would be dynamic and on-the-fly decide what values to give these attributes.
>
> **[3:11](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=191)** To do this, we can add parameters representing each triangle attribute to this function. Just like our parameters to other functions each parameter has a data type and a name. Each parameter does not have to have the same name as the attribute their data represents but it is often the case that this is so. This might look a little intimidating but stick with me. This was tough for me too when I first got started with Java. With parameters, we have access to the appropriate values we want to assign to each of the attributes. To access the attribute variable for the object we are trying to construct, we use the this keyword and the dot operator. The this keyword helps our program make a distinction between the attribute variable and the parameter variable. We use the [[Microsoft Word|word]] this because we are talking about an attribute of the triangle we are constructing rather than the parameter variable. When we use the dot operator on the keyword this we can access the to-be-created instance's attribute variables. This allows us to access the instance we are creating's base, height, and side lengths so we can initialize them. With the code below, we are initializing the attributes of the new triangle with the values of the corresponding parameters. In the constructor, we initialize the triangle we are creating's base attribute with the value given
>
> **[4:45](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=285)** in the base parameter. We also initialize the new triangle's height attribute with the value given in the height parameter and so on for each attribute of the triangle we are creating. And that's our constructor function defined. How do we use it? Just like any other function, we'll call it with argument values and it will return a triangle. The only difference is that because we are creating a new triangle object or a new triangle instance we have to use the new keyword. In this example, we create two variables with the data type Triangle. One triangle is named triangleA and the other is called triangleB. Then we use the new keyword and call the constructor with the appropriate attribute values. It returns a triangle that is now stored in the respective variable. The triangleA instance will have a base with the value 15, height with the value eight, side length one with 15, side length two with eight, and side length three with 17. The triangleB instance will have a base with the value three, a height of 2.598, and all side lengths with value three. Now you might be thinking, "Triangle is now a data type?" And yes, it is. When we create a class, we are essentially creating a new way to store a group of data.
>
> **[6:20](https://www.linkedin.com/learning/learning-java-11/constructors-in-java?u=76281980&t=380)** Just think about all those double values we are storing. Our class is one particular way we've decided to store and organize data about a triangle. This means when we create a triangle, store it in a variable or perhaps even use it as a parameter, we must remember to use Triangle as our data type. Let's try pulling all of this together by defining our first class in Java and creating instances from it using a constructor.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=0)** - [Instructor] With an understanding of classes, instances and the constructor, we can begin to write [[Java]] Code that helps us represent a triangle in a program. First, we need to write code that defines our triangle blueprint. And we can do that with the triangle class. In Java, We'll create a new class file and name it triangle. Inside the curly braces for our class, we'll need to add the attributes and behavior we want the class to have. In earlier lessons, we said that a triangle has a base, height and three different side links. We can add those inside of our class.
>
> **[0:48](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=48)** We now have five attribute variables that we have created, but they do not have a value yet. These attribute variables are also called instance variables because they are variables that each instance will have an individual value for. We could assign a default value to these instance variables, but as we discussed in the last lesson, usually, we want a constructor to initialize them. With the constructor, we can create a triangle instance with specific base, height and side length values. To create a constructor, we'll write "public, triangle", and then our inputs. Next, we'll use these inputs to assign values to our attributes. To access each attribute, we'll write, "this." And then attributes name. And then to assign it a value, the value of one of our inputs, we'll just use the name of that parameter. You'll notice that as we use each attribute, it becomes highlighted, because now it's in use by the program. It's not just some attribute that's created and never used. If we think of this in relation to scope, the attributes are accessible throughout the triangle class. But the constructors parameters are only accessible inside the constructor. Since the attribute in the constructor's parameter have the same name, we use this in the dock operator on the attributes
>
> **[2:22](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=142)** to keep them separate. Here, we have a constructor that takes in unique values with parameters and assigns them to their corresponding attribute. The constructor is just one behavior or method that a class can have. But we can have as many methods as we want. Method is just another name for a behavior or function that belongs to a class. In an earlier lesson, we talked about adding a function that finds the area of a triangle to this class. We can do just that. We'll call this function "find area" and it will return a double. We do need to have the return type here, because find area will not be a constructor. With the "this" keyword, we can get access to the appropriate instance variables based on height, so the function takes no inputs. Our formula for finding the area of a triangle, is base times height divided by two, so we'll return "this.base*this.height/two".
>
> **[3:32](https://www.linkedin.com/learning/learning-java-11/creating-a-class-in-java?u=76281980&t=212)** We can access "this.base" and "this.height" here, because the base and height attributes are created within the triangle class. With the addition of this last behavior, our class is defined. We could add attributes and behavior later on, but this is where our blueprint will end for now. Next, we'll try creating some triangle instances with this blueprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Cross-References:** we discussed (1), in the last (1), we talked about (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Creating instances in Java](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=0)** [Narrator] Let's make some triangle instances. Continuing on our program from the last lesson, we'll move back to our main class, with the main method, in order to do this. We could add a main method to our triangle class, and run that file instead of this file, but I find the separation of our blueprints and the code we are actually running makes it a bit easier to understand at first. To create a triangle, we'll create a triangle variable and call the constructor method. We'll name the first triangle triangle A and give it the values 15, 8, 15, 8, and 17. The second triangle we'll call triangle B and give it the values 3, 2.598, 3, 3, and 30. Now we have two triangle instances. Let's add some breakpoints and walk through this program so we can wee what's going on behind the scenes. We'll add a breakpoint just before triangle A is created, as well as a breakpoint before triangle B is created. Going back to the triangle class, we'll also add a breakpoint on this first line of the constructor. We'll be running our main class in debug mode. Our first stop is right before we create triangle A. We are passing 15 for the base, 8 for the height, 15, 8 and 7 for each of the side lines. Let's hit Continue.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=95)** Now we are in the constructor itself, where we are creating the triangle instance that will be stored in the triangle A variable. Our parameters have the values we passed, 15 for the base, 8 for the height, and so on. In the following lines of code, in the constructor, we will assign these values to the attributes of the triangle to be created. All of our attributes for the new triangle have defaulted to the value zero, as you can see here at the top. This is the magic of an IDE. With the constructor, we will initialize each of these attributes. Let's hit the Step Over button and now the base attribute for the triangle to be stored in the triangle A variable has the value 15. We can see the new base attribute value highlighted at the top. In the variables window at the bottom, if we open up the pane, we can see that the base is initialized here as well. The this keyword stands for the triangle we are constructing and initializing, so as we initialize it, the values within the triangle object we are creating should be initialized. Let's hit Step Over again. The height attribute for the new triangle A is now 8 and seven zero, and this will happen for each attribute we are initializing. We hit Step Over again. The initialization for side length One is executed,
>
> **[3:10](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=190)** and now he side length One attribute has the value 15. Hitting Step Over again, side length Two is initialized. Hitting Step over one last time, the value of side length three finally gets initialized and the triangle has been constructed. All's that's left to do is to return from the constructor. We can do this by hitting Continue. Now we are on to creating our next triangle, triangle B. Let's hit Continue, and we hit that breakpoint inside the constructor again. Now we're constructing triangle B. This to-be-created triangle instance, like the other, has its default attribute values set to zero. They are not connected to the attribute values of triangle A, because different triangles should have different values for their base, height and side lines. Each instance created from a constructor is independent of each other. The attribute values of one triangle do not affect the other. Let's hit Step Over a few times, and as we continue the rapid constructor, each attribute is getting initialized, this time for triangle B. Let's hit Continue, and now we have created two triangle instances, using a constructor from the triangle class. Our program not only knows how to represent triangles, but it has two triangles represented within it.
>
> **[4:44](https://www.linkedin.com/learning/learning-java-11/creating-instances-in-java?u=76281980&t=284)** So what can we do with these new triangles? We added the behavior of find area to the triangle class in the last lesson, so we'll try using it on one of our triangle next.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=0)** - [Instructor] Let's try calculating the area of each triangle. We're store the area of triangle A in a variable called triangleAArea, and it will be a double, because that's what the findArea function returns. To get access to the findArea function, we use the dot operator on the triangle A instance. So we'll write triangleA.findArea. Now you might be thinking, why didn't we write triangle.findArea? Isn't that what we did when we used pow on the math class with math.pow? And yes, this is where a lot of people get confused. The reason we did triangleA.findArea instead of triangle.findArea is because in order to find the area of a given triangle, you have to have a triangle instance. You can't calculate the area of a triangle that doesn't exist yet. The implementation of the findArea function relies on the attributes of a given triangle. The base might be eight or 10 or 15. We don't know until the triangle is actually created. Because we have to have a triangle instance already created to use the findArea method, we can say findArea is an instance method. For math.pow, we did not need to create an instance of Math in order to use the pow function. We just accessed the class and used the function we wanted.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/instance-methods-vs-class-methods?u=76281980&t=95)** That's because pow is not an instance method. It is a static method or class method, because you do not need an instance of the class in order to use the function. Because of this, instance methods are often referred to as non-static methods, since you have to create an instance in order to use them. You do not need an instance created to use a static method. You can just reference the class. In a previous chapter, we used .chatAt() with a string, and we did need a string already created in order to use it. In our code, we wrote studentFirstName.charAt(0) and studentLastName.charAt(0), where the studentFirstName and the studentLastName both evaluated to string values. In both of these cases, we used the dot operator on an instance of a string in order to get access to the .charAt() method. Because we used the dot operator on an instance and not the class name, .charAt() is an instance method, and not a class method. Understanding the difference between instance methods and class methods is very important as you continue to learn [[Java]].

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=0)** - [Instructor] Let's get back to our triangle program. We've created two triangles, and we are using the dot operator on triangleA to access the findArea function, so that we can find the area of triangleA. Let's add a break point when we make the findArea function call, and then on the first line of the findArea implementation. Now, let's run in debug mode. We are about to call the findArea method on triangleA. In the variables window, we can see that our triangleA instance is there, with its specific attribute values, and the triangleB instance is there, with its specific attribute values. We'll hit continue, and now we find ourselves in the findArea implementation. For triangleA, the base attribute has the value eight, and the height attribute has the value 15. We used the this keyword to access triangleA's specific base and height values, and used the base and height divided by two formula to calculate triangleA's specific area. Hitting continue, and switching over to the console, we can see that triangleA's area is 60. We can calculate triangleB's area as well. Of course, since triangleB has different attribute values for the base and height, we will get a different output for the area.
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/using-instance-methods-in-java?u=76281980&t=94)** So let's add a double variable called triangleBArea, and assign it to the value, triangleB.findArea returns. Then we'll print out triangleBArea, with System.out.println, triangleBArea. We'll remove the break point from the triangleA call, and move it to the triangleB call, and run this in debug mode. The first time we encounter findArea is with the call from triangleA, so that's why we see a base of eight and a height of 15. If we hit continue, we'll stop right before triangleB calls findArea. Hitting continue again, we are back in the findArea function, and now we have triangleB's attribute values for the base and height. These are used to calculate the final area, and hitting continue, we'll switch back to the console, and the final area is 3.897. Awesome, we just used our custom-built findArea instance method from the triangle class on two triangle instances.

> [!info]- Semantic Content
>
> **Code Identifiers:** trianglea (10), findarea (10), triangleb (7), trianglebarea (3)
> **CLI Commands:** find (2), make (1)
> **Versions:** 3.897 (1)
> **Speakers:** - [instructor] (1)

#### [Instance and class variables in Java](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=0)** - [Instructor] With the findArea call we've used the dot-operator to access a behavior or method from our Triangle class. What about attributes? So far, we have only accessed a triangle's instances values using the this keyword inside it's class. But, we can also access it outside it's class. In our main method we could print out triangle A's, Sidelenthree with system.out.printLn, trianglea, sideLenThree. We use the .operator on trianglea, to access it's instance variable. Or attribute variable, sidelenthree. We could also print out triangleb's base with system.out.println triangleb.base The rule here is that it is a function if it has parens and an attribute if it does not have parens. Sidelenthree and base are both attributes here. So, we do not add any parens. We are accessing a variable, not calling a function. Let's save this and run the program. And, see what we get in the output. The last two values 17 is the length of side three. And, three is the base of triangleB. Remember, both sidelenthree and base are instance variables. Both of these variables hold information about a specific triangle instance. Just like we had static and non-static methods
>
> **[1:34](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=94)** we have static and non-static variables. Non-static variables are the instance variables. The base of the triangle, the height of the triangle, they do not stay static or the same between triangle instances. The values of base, height, and the [[Representational State Transfer (REST)|rest]] of our instance variables change depending on the triangle. A static variable is something that will not change per instance. They hold the value for the whole class to use. For example, we might have a static variable that stores how many sides there are to a triangle. This is something that will not change per instance. But, rather if you change it, it should effect every instance. Similar to how we accessed static behavior, or static methods we access a static variable using the class name. Since it does not change from instance to instance, and belongs to the class rather than a single instance, a static variable is accessed with a .operator, using the class name. Let's try adding a static variable to our triangle class. Inside the triangle class, we'll add a static variable above our instance variables. This static variable will be an int, and we will call it numofsides. We will give it the value three. Going back to our main class, we can access the static numofsides variable with the class name triangle, and the .operator. We will want to print it out to the console
>
> **[3:07](https://www.linkedin.com/learning/learning-java-11/instance-and-class-variables-in-java?u=76281980&t=187)** So, we will write system.out.println, and then use the class name triangle to access the static variable, numofsides. Let's run it. And we see three in our console. We have three sides to a triangle. Now, this representation of triangle isn't perfect. Right now we assume the values given to the constructor are valid. None of them are zero or negative. And, they together meet the requirements for a triangle. This is something that you can add on later if you want to. But, we are keeping this as simple as possible for now. In this chapter, we have introduced a lot of new concepts so next we will take some time to review what we have learned.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=0)** - [Narrator] So what are the big takeaways from this chapter? First, in [[Java]], we can create classes to organize our code. In our previous example, we used a triangle class to organize data related to a triangle as well as how we can calculate things from triangle data. A class contains attributes and behavior, also called properties and methods. Every class also contains a constructor, which is a specific type of method that allows us to create instances of the class. Ultimately, a class is just a blueprint, and we have to use the constructor in order to create triangles in our code. Some of these attributes are associated with each individual instance, and we call these instance variables. These were the height, base, and side length attributes in our example. These attributes are accessed with the instance itself, and we use the dot operator on the instance to access instance variables. Along with instance variables, each instance has instance functions or non-static methods. Similarly, these are accessed using the instance with the dot operator and parentheses. We also have class variables and class methods. These variables and methods are static and we access them using the class name with the dot operator. To use static class variables and methods, we do not need to create an instance,
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/review-classes-vs-instances?u=76281980&t=95)** we can just use the class name. This new vocabulary can sometimes be overwhelming, but when you are debugging, [[Google]] searching, and trying to figure out how to fix your code, these words often come up. Understanding these concepts is a big hurdle in Java, and once you get it, everything starts to make more sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Google]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Bank account balance](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-java-11/solution-bank-account-balance?u=76281980&t=0)** - [Instructor] Let's implement a [[Java]] class to represent a bank account. This class has three different methods, withdraw, deposit, and get balance. Let's start with get balance. We already have an instance variable to keep track of the current balance, so let's return it. Now, let's implement deposit. Before incrementing the balance, we'll want to double check that the amount is a positive number. We can use an if statement. If the amount is greater than zero, we'll add it to the balance. Finally, the withdrawal method. We can only withdraw if the amount is less than or equal to the balance. Let's add that if statement. If this is true, we can subtract the amount from the balance. Both the withdraw and deposit methods return void, so there's nothing to return. Let's run it. Our implementation works as expected. We can deposit an amount, withdraw an amount, and retrieve the account balance correctly with this class.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=0)** - [Instructor] [[Java]]'s official documentation is a comprehensive resource for every Java developer, but it can be daunting to newcomers. It's provided by Oracle, the company behind Java, and it serves as a reference manual for the Java programming language. These docs tell you what functionality is already built into the language and how to use it. This functionality is organized into packages and classes based on its domain. Many of the functions you'll start out using will live in the java.base package. Here, there's built-in functionality related to calculating times and file manipulation. I encourage you to explore and click into anything that sounds interesting. Let's learn about how time works in Java. The java.time package is for working with dates, times, durations, and intervals. Here, we can read up on the background of the package and how it's used. For example, if we want to store an anniversary date, we can use the LocalDate class. Scrolling down, we can learn about everything that comes with the LocalDate, including the methods and fields. It looks like this class comes with three static fields, as well as instance methods and static methods. Taking a look at one, plusDays, let's think about how this function works.
>
> **[1:35](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=95)** It's an instance method that would be called on an instance of LocalDate, and looking at the description, it would return a copy of the date with the added days. We'd call the function by its name and pass in one parameter that's of type long. To create a local date, let's look at the static methods. This is a common pattern where you use a static method instead of a constructor to create a new instance. One of the benefits of this pattern is that a static method name can be more specific than a constructor name. For example, here, there are many ways to construct different dates, either using the now static method or passing in items to the of method. You have the option of passing in month as an int data type, or as the month data type. Now, this is one way to navigate the documentation, but you probably won't read it cover to cover as there's so much built into Java. Instead, you might use it as a reference as you come across new classes and members in various code bases. You can use the search bar on the top right to search for specific functionality. We used the pow function earlier in the course. Let's go back to its documentation. Now, we can better understand all the different things here. The pow method is a part of the Math class as a static method.
>
> **[3:10](https://www.linkedin.com/learning/learning-java-11/navigating-java-documentation?u=76281980&t=190)** The Math class also has two static fields, including PI. And this makes sense because who wants to write out all the numbers to pi in their application? That's the benefit of Java documentation. You can learn what's built into the language and better understand the built-in Java code your code base is using.

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
> **[0:00](https://www.linkedin.com/learning/learning-java-11/next-steps-for-learning-java?u=76281980&t=0)** - [Kathryn Hodge] Congratulations. You finished the course. From creating your very first [[Java]] program, to understanding the fundamentals of classes and instances, you've learned a lot. From here you can use some of your Java foundations to build your own Java programs. Whether it's a [[Microsoft Word|word]] counting program or a card game, practice makes perfect when you're learning a new programming language. If you want to dive deeper into Java, check out Java Essential Training. Or the Java Code Clinic series here on [[LinkedIn]] Learning. If you want to build advanced programs that store more complicated data, check out my course, [[Programming Foundations- Data Structures]]. Good luck. And until next time.

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