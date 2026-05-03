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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Classes%20and%20Functions.md)

![Advanced Python: Classes and Functions](https://media.licdn.com/dms/image/v2/D4E0DAQEpM0FMFQ7drw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731707897651?e=2147483647&amp;v=beta&amp;t=oSAkOkzdaGrEGI-T9AjPq8IChhfH9_SRA2D0m084va0)

# Advanced Python: Classes and Functions

> Python has become the language of choice of many developers for building all kinds of applications across a wide range of industries, but to fully take advantage of its power and flexibility, you need to master all its advanced functionality. Python is a flexible, customizable language that provides features that other languages support only through third-party libraries or require that you build 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-classes-and-functions) | 2h 16m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction](#introduction)
  - [Getting set up](#getting-set-up)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Language Features**](#1-language-features) (5 videos)
  - [Python coding style](#python-coding-style)
  - [Understanding strings vs. bytes](#understanding-strings-vs-bytes)
  - [The assignment expression](#the-assignment-expression)
  - [Boolean types and values](#boolean-types-and-values)
  - [Template strings](#template-strings)
- [**2. Advanced Functions**](#2-advanced-functions) (5 videos)
  - [Documentation strings](#documentation-strings)
  - [Variable argument lists](#variable-argument-lists)
  - [Lambda functions](#lambda-functions)
  - [Keyword-only arguments](#keyword-only-arguments)
  - [Solution: Advanced Functions](#solution-advanced-functions)
- [**3. Python Comprehensions**](#3-python-comprehensions) (5 videos)
  - [Introduction to comprehensions](#introduction-to-comprehensions)
  - [List comprehensions](#list-comprehensions)
  - [Dictionary comprehensions](#dictionary-comprehensions)
  - [Set comprehensions](#set-comprehensions)
  - [Solution: Comprehensions](#solution-comprehensions)
- [**4. Classes and Objects**](#4-classes-and-objects) (7 videos)
  - [Python classes overview](#python-classes-overview)
  - [Defining enumerations](#defining-enumerations)
  - [Special methods: string values](#special-methods-string-values)
  - [Special methods: computed attributes](#special-methods-computed-attributes)
  - [Special methods: operations](#special-methods-operations)
  - [Special methods: comparisons](#special-methods-comparisons)
  - [Solution: Special Methods](#solution-special-methods)
- [**5. Structural Pattern Matching**](#5-structural-pattern-matching) (7 videos)
  - [Overview of pattern matching](#overview-of-pattern-matching)
  - [Simple patterns](#simple-patterns)
  - [Capture patterns](#capture-patterns)
  - [Class patterns](#class-patterns)
  - [Sequence patterns](#sequence-patterns)
  - [Pattern guards](#pattern-guards)
  - [Solution: Patterns](#solution-patterns)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction?u=76281980&t=0)** - [Joe] [[Python (Programming Language)|Python]] has quickly become one of the go-to programming languages for developers across a wide range of industries and application types from automation to [[Data Science]] to building complex back-end infrastructure. Hi, I'm Joe Marini. I've been building software professionally for some of the biggest and best known companies in Silicon Valley for more than 30 years. In this course, I'm going to show you some of the more advanced features of the Python language. We'll see how to write code that is easier to read and maintain, build classes that work just like the ones that are native to the language, and work with some of the newest features of the language itself like structural pattern matching. The Python language is always evolving and becoming more powerful and easier to use. So if you're ready to take your Python skills to the next level, then come join me in my [[LinkedIn]] Learning course, "Advanced Python: Language Features".

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Data Science]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (5)
> **Analogies:** just like (1)
> **Speakers:** - [joe] (1)

#### [Getting set up](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=0)** - [Instructor] This course is intended for developers who are already familiar with [[Python (Programming Language)|Python]] and want to learn more about some of the advanced features of the language. You don't need to be a deep expert on Python but you do need to have an understanding of the basics, such as how to write functions, and use variables and so on. Now, there's a couple of different ways you can work with the example code in this course. I've set up a [[GitHub]] repository with the examples, and you can find it at this link you see here. The course content is organized into two separate folders. There's the Finished folder, which contains all of the code examples in their finished state so that we can compare them against your code as we work through them. The Start folder contains the code examples in their beginning state and this is the folder I will be working in throughout the course as we build towards the finished state for each example. Now, if you want to download the examples and work with them locally, that's easy enough to do. You can just scroll to the Code menu and you click on Local and you can either clone the repository or you can download a zip file and fire them up in your favorite code editor and work on them. And that's fine. You'll just have to make sure that you have Python installed on your computer, at least version 3.10 in order to use the examples. But this repository has also been set up with a GitHub codespace, so you can just work directly online with nothing to install. All you need to do is fork a copy of the repository in your own GitHub account and then fire up a codespace here in the Code menu. Just go to the [[Codespaces]] tab and click on the little plus sign
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=92)** and you'll be able to work online in the Cloud. Now you can see I've already done that. I've created my own codespace and I'm going to be using this in the course. Now, either way, it works fine. If you want to work locally, that's great, but I'm going to be using the codespaces feature in this course. So let me open the codespace and show you what it looks like. And when you create your own codespace it may take a few moments to spin up. So just be patient. Now, when the codespace starts you'll see a browser-based version of Visual Studio Code. And here in the files list are all the files you'll need for the course. There's also a built-in terminal, so if I go to the View menu and choose Terminal, you'll see that there's a terminal right here, and I can check to see if Python is already installed, and we can see sure enough that it is, all right. You're also going to want to make sure that you have the Python and Pylance extensions installed. So this icon right here with the boxes, this is the Visual Studio extensions, and this is my codespace, so I've got a bunch of extensions installed, but if you scroll down, you'll see I have Python and Pylance and these are the two that you need. So if you don't already have these installed you just go search them in the marketplace. Just do a search on Python, and you'll see this will probably be the first result. So I'll click on that. And in fact, this is the only one you need to install because this will automatically install Pylance and a couple of other extensions that are useful for working with Python. So once you have this set up that's pretty much all you need to do.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-classes-and-functions/getting-set-up?u=76281980&t=186)** So install the extensions, get your codespace running, and then it's really just as simple as going to the start folder, opening up chapter one, and you're ready to start coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[GitHub]] (3), [[Codespaces]] (2)
> **CLI Commands:** python (8), make (2), find (1)
> **Tools:** github (3), terminal (3), visual studio (2)
> **Prerequisites:** install (4), set up (3), you'll need (1)
> **UI Navigation:** click on (3), go to (2), open the (1), scroll down (1)
> **Exercise Files:** download the (1), zip file (1)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by Coder Pad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The Code Challenge has four areas. In the top left, you'll see instructions. There's a code editor here in the top right for you to write your answer. There's another code editor down here in the bottom right where you see how your code will be used, and there's a console for output in the bottom left. You can use these drag handles to allocate space as you like as you're working with the challenge. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's parameters, and the desired result. Depending on the challenge, you will see some additional information in the instructions such as an explanation of the parameters that your code will be given along with some examples of what the expected output might look like. So create your answer in the top right code editor. There are comments in the starting code
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=95)** showing where to put your solution. And when you click test my code, you'll see a message indicating whether your code returned a correct result. So let's go ahead and try that. I'll click on test my code, and you can see that I'm clearly returning the wrong answer. So I get a message saying, Hey, something isn't working. It shows you what my code returned. Now if your code isn't successful, you can ask for help. And the way that you do that is by modifying these two variables, show expected result and show hints. So I'm going to change each of these to true, right? And then I'll execute my code again. All right, in this case you can see that my code is still wrong, and it shows that my code returns zero, but the expected result was 19. And then I'm given a hint to help me along with the challenge. Now the code editor in the lower right shows you how your code is going to be used, and in some cases you can change that code to experiment with different cases. Let's go ahead and return the right answer. So I'm going to return max of numbers. All right. And now when I run this code, right, we can see that the the answer is now correct, and 19 sure is the largest. I'll make the largest 25, and I'll change some of these other numbers. I'll make this one a six, and let's run it again. And now we can see that my code is again returning the right answer. Now, regardless of whether your answer is successful,
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/tour-of-coderpad?u=76281980&t=190)** you're going to see messages here in the console output in the lower left, and if any of the messages are too long to fit in that area, you can scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents, and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Language Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Python coding style](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=0)** - [Instructor] Once you've been programming for some length of time, you quickly come to the realization that code gets read a lot more often than it gets written. In other words, developers spend a significant amount of time working in code that's already been written either by themselves or by someone else. And by adhering to a consistent programming style, you can make your job as well as the jobs of your colleagues a lot easier. So the The [[Python (Programming Language)|Python]] Foundation has a series of Python Enhancement Proposals or PEPs, which you can find on the [python.org](https://python.org) site in the developer guide. We're going to take a look at some of the guidelines specified by PEP 8, which is the style guide for Python code and can be found at this link. Now, obviously following this guide is not required. I mean, you can write your Python code however you want as long as it has valid syntax. But by following this guide, you'll make your code a lot easier to maintain and update down the road. So if you open the guide and scroll down a bit to the table of contents here you can see it's really pretty comprehensive, right? It's a pretty lengthy document. Now, I'll leave it up to you to read up on the guide later if you feel like it, but I'm just going to cover the main points. Let's start with code structuring and formatting. The PEP 8 guide recommends that import statements all go at the top of a file and each one should have its own line. And it also recommends that you indent your code with spaces instead of tabs, and that you use four spaces for each level of indentation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=93)** And it's worth noting by the way, that Python 3 explicitly disallows mixing tabs and spaces in the same line. Individual lines of code should be limited to 79 characters including indentation spaces, and for comments and docstrings limit those to 72 characters. This makes it easy to have multiple code [[Windows]] open and view them side by side, such as when you're using code difference tools to compare files. Functions and classes should be separated by two blank lines. And within class definitions, one blank line should separate methods. There shouldn't be any white space around function calls or indexes or keyword arguments. And speaking of white space, there are a few other subjects that get programmers all riled up. This is... White space is one of those things that fights break out over. Python attempts to set a reasonable attempt at establishing sensible rules around using white space, some of which you can see in this table. And this probably won't be terribly controversial to most people. For example, it's preferred not to use white space immediately within brackets, or braces, or parentheses, or between a function call and the list of arguments. And similarly, don't put spaces between data structure names and their accessors. And it's also generally considered undesirable to try to align values with each other at the expense of variable name lengths. You can see that in column or row four there.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-coding-style?u=76281980&t=187)** In other areas, Python suggests you just use your better judgment. For example, it might be okay to add white space around operators with lower priorities as you can see here with the combination of multiplication and addition operators. And sometimes it's better to clarify simple statements with whitespace rather than try to mash everything close together. And again, most of this is covered in detail in the PEP documentation. If you'd like go ahead and read up on that to learn more. I've also included a small sample code. Let's jump over to the editor really quick. Here in my code I've included a small sample code file. If you look in the finished code and you go into chapter one, it's right here. It's called codingstyle.finished. And this file illustrates some of the rules that PEP lays down. You can take a look at this file to see some of the rules in action, and I think you'll agree that they make the code a lot easier to read. So feel free to read this on your own time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Windows]] (1)
> **CLI Commands:** python (8), make (3), find (1)
> **Env Vars:** pep (4)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Exercise Files:** sample code (2)
> **URLs:** [python.org](https://python.org) (1)
> **Versions:** python 3 (1)

#### [Understanding strings vs. bytes](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=0)** - [Instructor] In [[Python (Programming Language)|Python]] 3, there are very important differences between the notions of strings and bytes, and it's important to understand this distinction. A string in Python 3 is a sequence of Unicode characters while bytes are a sequence of raw eight bit values. And it's important to understand this because you can't just treat a string as if it were an array of ASCII bytes, right? So let's take a look at this in practice. So let's go ahead and open up strings start in the start folder in chapter one. And I have a couple of variables defined, right? One's a sequence of hex values and the other one is a string, alright? And then I print out each one to see what their values are. So let's go ahead and run this code. So I'm going to open the terminal and going to go into start chapter one and I will run the strings start, right? Okay, when I run this, all right, you can see that the byte values happen to correspond, right, with ASCII uppercase letters. And here you can see the string and you see the little b in front of these letters right here, that indicates that it's a list of bytes. So it looks like they're both strings at the outset but watch what happens when I try to combine them. So if I write something like this, print, you know, s plus b, let's watch what happens. So I'm going to try to run this again and I get an error, right? It says, type error, can only concatenate str, not bytes to str, right? Because the print function expects a string. And even though those byte values
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=92)** happen to represent letters, I can't just treat it as a string. I first have to decode the bytes into a string and then I can add the two. And I could do that using a built-in decode function. So if I do something like this, if I... I'm going to do s2 equals, and I'm going to type b dot decode and I'm going to decode it using utf 8, okay? And then I'll be able to print s plus s2, and let me comment out the one that's not going to work. Now, I happen to know already that these bytes are in ASCII which also just happens to correspond to utf 8. So I can decode them directly. If I didn't already know that, I'd have to perform some detection logic to see what the encoding is and that's a bit beyond the scope of this example. So now that I've combined the two, you can see now that it works, now that I've decoded it into a string. And I can also do the same thing with the bytes. Now, in that case, I would need to use the encode function which takes a string and produces bytes out the other side. And it's the opposite of the decode function. All right, so let's go ahead and try that with the bytes. What I'm going to do is b2 equals, I'm going to type s dot encode, and I'm going to encode it into utf 8. And then I'm going to print b plus
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/understanding-strings-vs-bytes?u=76281980&t=187)** b2. Okay, so let's try that, and sure enough, that works as well. All right, so the bytes are now being concatenated. Python provides a set of built-in encodings just for this purpose. So let's try to encode our string using utf 32, to see the difference. So I'm going to write b3 equals and then I'm going to encode the string, and this time I'm going to use utf 32 instead of utf 8. And then I'll print b3 and let's comment out these previous two just to get them out of the way. And I'll run this. And now you can see that the text has been encoded into utf 32. Now it's beyond the scope of this course to go into all the ways that text can be encoded and what each of these different encodings mean. To do so actually might take an entire course just by itself. What's important to realize here is that strings and bytes are not the same thing in your code and you need to take care when you're operating on both of them and you're trying to combine them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Env Vars:** ascii (3)
> **Versions:** python 3 (2)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [The assignment expression](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=0)** - Back in the [[Python (Programming Language)|Python]] 3.8 release, a new operator became available that helps simplify variable assignments that can make your code more concise and meaningful. So in order to understand how this new operator makes things easier, let's first take a look at how assignment statements work. So let's open up assign_start. And I'll collapse this down. Here in my code, I have a statement that assigns the value of 5 to the variable x and just prints it. And this is pretty straightforward. You've probably seen this many times. The new assignment operator helps address some common coding scenarios, right? So in C, for example, other languages, it's actually legal to do something like this. I can write if x = 5:, right? And then do something. But this is actually legal in C. It's not legal in Python. You can see that the little red squiggle says, "Hey, you can't do that." So in C, not only does this perform the assignment, it does the test at the same time, right? And as you might have guessed, this leads to a lot of pretty hard to find bugs, because usually the programmer meant to have the double equal sign there, right, which is legal and it does not do the assignment. Now, in this case, Python is preventing this from happening because it doesn't allow this syntax, but the need to do this kind of operation is still valid. So let me undo all this, and I'll explain what I mean by having an assignment and a test at the same time. So the assignment expression operator,
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=94)** it's sometimes called the walrus operator, and it looks like this. I'm going to write x := 10. And notice I'm doing this inside parentheses. And I'm going to print x. And it's called the walrus operator, 'cause if you look at it sideways, right, then these two are the eyes and these are the tusks. And, you know, look, I didn't make up the name, but that's just the reason, okay? It does need to be part of an expression. And you can see that Python is already saying, "Hey, you know, statement doesn't seem to have any effect." If I take these parentheses off, then this statement actually becomes illegal. See how it says you can't do this in the context without surrounding parentheses. Okay, so why does this operator exist, and what does it help with? There are several scenarios where this operator helps improve the readability of code. And we're going to look at a few of them. So first, let's go ahead and comment these out, because we're not going to need them. So suppose I wanted to have a loop that processed some input from the user and then terminated when the user entered a particular string. I could write some code that looks like this. I could write thestr = input. And then I would ask the user for some value. And then I would have a while loop that said, hey, while thestr != "exit", then, in this case, we'll just print it out, nothing really complex. And then I'd have to get thestr again, right? I'd have to ask them for another piece of input, okay?
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=190)** So let's go ahead and run this. And we'll go into Start/Ch_1, and we'll run python assign. So it says Value? I'll put my name in, right? And then I'll type exit, okay? And it works. But this code is more complex than it needs to be. I'm calling the input function twice, and this is a lot of visual noise here, right? So with the walrus operator, I can simplify this code. I can actually write while, and I'll put this in parenthesis to make it easier read. So while thestr gets the value of or := input, okay, so I'll cut that, put that in there, and I'll print it out. And now I can get rid of this line and this line, right? So I've simplified these four lines down to two lines, okay? So now I'm performing the assignment. So I'm assigning thestr equal to input and performing the check at the same time. So I've removed the extra call to the input function from within my loop, and I've simplified the code down to make it much easier to read. So if I run this again, right, it still works. So the walrus operator in this case is a very strong visual hint that I'm performing an assignment along with the conditional test, which will make it harder for bugs to slip by, because it's not legal to do the equal sign there. Another common use for this operator
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=282)** is to prevent multiple calls to the same function when it isn't necessary, right? So let's consider another example. In this case, I have a list of values, and I'm populating a data structure with some information about those values, right? Here's all my digits, and then I have the length. So I use the len function to calculate the length of the values. Then I sum them all up using the sum function, and then I calculate the average by dividing the sum by the length. Let's go ahead and pretty print the results. All right, and let's comment out the previous example. So let's go ahead and run this, and it works, right? But I'm making multiple calls to sum and length, even though I already have the results. Now in this trivial case, it's not that big of a deal. But you can imagine if these functions were more complex or took a long time to run, this could become a performance problem. Now, I could solve this problem by having variables that pre-calculate the results, right? I could do l = length of values, right? And do the same thing with s and have this be the sum of the values. But that's not really ideal either. The only reason why these variables exist is to store some temporary data that doesn't get used again. By using the walrus operator, or the assignment operator, I can store the results as I get them. So, for example, I could do something like this.
>
> **[6:16](https://www.linkedin.com/learning/advanced-python-classes-and-functions/the-assignment-expression?u=76281980&t=376)** I can do l := len, the first time I call this. And the same thing with sum, I can do s := sum. So now I'm getting both the result and setting aside the variables. And then I can just simplify the [[Representational State Transfer (REST)|rest]] of this by doing s / l. Okay, so now I've removed the redundant function calls, and I've got my temporary variables directly in the code right where they're being used. And so if I run this again, right, you can see now that the results are the same. So the walrus operator was adopted back in PEP 572, which you can find at this link if you want to do any further reading on it. It's actually become pretty widely adopted since it was introduced, and you can find it in several places within the Python standard library code itself. I've started using it in my regular Python development, and I'm sure you will too once you've become accustomed to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (7), make (5), find (3)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** assign_start (1)
> **Env Vars:** pep (1)
> **Versions:** python 3 (1)
> **Speakers:** - back (1)

#### [Boolean types and values](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=0)** - [Instructor] In [[Python (Programming Language)|Python]], we have the basic built-in boolean type to represent true and false values. However, any object can be tested for boolean truth values. So let's take a few moments now to learn how that works. In general, any object is considered to be equivalent to boolean true, unless certain conditions are met. So let's first look at the built-in objects that evaluate to false, right? There are two constants which are defined to evaluate to false, right? The false boolean constant itself and the none constant, which you may have seen represented in other languages as null. Any of the built-in numeric types that evaluate to zero are also considered false. So for example, the integer value zero, the floating point 0.0, and, of course, the complex value type of 0J, are all false. In addition, the decimal object, when given a value of zero, and the fractional object, when given a numerator of zero, are also false. Next are empty sets and sequences. And you can see the examples here, right? The empty string, empty collection objects, these are all considered to be boolean false. And in addition, if you call the built-in set function with no parameters or you create a range of zero, those are also false. For custom objects, they are by default, considered to be true unless they override the bool function and return a false value, or they override the lend function and return a value of zero.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=92)** And we'll learn more about custom object functions later in the course. There are also three basic boolean operations. There's and, or, and not. The first two of these operations are short circuit operators and it's important to remember this, in the case of the and operator, if the first value evaluates to false then the second operand isn't even evaluated because it won't matter what it is, because anything that's ended with false comes out to be false. Similarly, the OR operator only evaluates the second operand if the first value is false, because anything ord with true is going to come out to be true. Now, some of these rules might be different from what you used to seeing in other languages so it's important to remember them. So let's try some of these out. Let's go over to the code. And I'm going to open up the terminal and that's control back tick. And I'll just make this full screen. So let's go ahead and start off the Python interpreter. And what I'm going to do is create a new empty list. So I'll write x= and then brackets, all right? And now when I print the boolen value of this, if I cast this to a bool, right? You will see, yeah, it evaluates to false. And I'll do the same thing with an empty dictionary object. And once again, cast that to a bool and sure enough that's false. So, let's try a couple more. So we'll do bool of zero and let's do bool of an empty string, right? And then let's do bool of none, all evaluate to false, okay? So how Python evaluates true and false
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/boolean-types-and-values?u=76281980&t=188)** can easily trip you up. So it's something to keep in mind and remember as you are writing your code

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (1)
> **Versions:** 0.0 (1)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Template strings](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=0)** - [Instructor] It probably comes as no surprise to you that string formatting is one of the most common things that [[Python (Programming Language)|Python]] programmers have to do. And it might come as a surprise to you that there's no fewer than four ways to perform string formatting in Python. And on this video we're going to take a look at using template strings, which you might be familiar with from other languages. The documentation for these are at this link in the Python docs, and it's not a long read, you can read it at your own leisure, but I'm going to cover the main features here. So let's go ahead and jump over to the code. Right, so here in the code, I'm going to open up in the start folder in chapter one, the templestr start. And you can see that I've got a string here, in the main function, that I'm formatting using regular f strings. And when I run this, let me bring up the terminal and let's go into chapter one.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=59)** You get pretty much the output that you'd expect, right? I'm substituting these two strings into this string and here's the values over here. But you can also use a simpler string formatting method known as templates. And in order to do this, I'm going to first import the template class from the string module. So from string, I'm going to import template. And then I'm going to define a new template string. I'm going to store that in a variable named temple. So I'm going to create a template object and I'm going to write You're watching, and it's going to be $title by $ author.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=105)** So, to insert the values into the placeholders I use the substitute method on the string using keyword arguments for values. So, alright, str2 is equal to, and then on my template variable I'm going to call the substitute function, and I'm going to pass in the arguments are going to be these two keywords. So, title is going to be Advanced Python, whoops.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=138)** Language features and author is going to be me.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=149)** So, I've substituted the values into the string and I need to print it out, okay? So let me do that. Print str2. So let's run this. And you can see that we get basically the same output. Oh, whoop, I forgot a space. Let's run it again. There, same output. Even better, I can also use a dictionary to hold the data values I want to substitute. So for example, I can do something like this... I can have author as a key, and I can have title, and I'll just copy and paste this. All right. And now, to perform the substitution, I'm going to call templ and I'll use the substitute again. But this time I'm going to pass in my dictionary. So let's go ahead and save that. Oh, let me print it out. Here we go. So now, let's run it one more time. And you can see that we're getting the same results. So, you might be wondering, like, why use this method of string formatting instead of the f strings, right? Well, if all you need to do is simple variable substitution then the template string method might be easier to use and make the code more readable in some cases. F strings look, they're super effective, they have a lot of power. You can control the output formatting with all kinds of specifiers for spacing and number formatting and, you know, padding and justification and so on. But the template method
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/template-strings?u=76281980&t=241)** is just about straightforward value insertion. So, if you don't need all the bells and whistles of the f string then template strings might be a viable way to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **Exercise Files:** template (9)
> **CLI Commands:** python (4), make (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Advanced Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Documentation strings](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=0)** - [Narrator] It's always a good idea to write documentation for your functions and classes and modules. And we're going to do that in this video by taking advantage of a [[Python (Programming Language)|Python]] feature called docstrings. And personally I think this is one of the great underappreciated features of Python. The documentation for your program's code is directly available as your program is being run. So let's take a look at an example. I'm going to bring up the terminal and what I'm going to do is fire up the Python interpreter, put it into interpreter mode and then I'm going to look at the documentation for the stir function, which creates a new string. And to do that, all I have to do is print and I'm going to use the stir function and then type dot and then double underscore doc and then double underscore. And when I do that, you can see that I get documentation right here for the string function. As I mentioned, this works for more than just functions. It also works for classes and modules. So let's import the collections module. And now let's print out the documentation for the collections module. And I'm going to do the same thing dot underscore underscore doc. And you can see that this is a little bit more, a little more involved than just one function. This prints out a documentation string for the entire module which describes the different classes that are available within that module. Now, what's really nice about this feature is that I can interactively learn about various Python APIs as I need to know them without having to resort to you know, cumbersome documentation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=93)** It's also an easy standard for other developers to follow when they create their own packages and code. So to do this for your own functions and other code all you need to do is define a literal string at the top of a function or class or module. So let's try it out. We're going to go into docstrings start, and here I have a function that takes a couple of arguments, right? And just prints them out. Nothing really fancy. So to create a docstring for this function all I need to do is at the top of the function, is put in a triple quoted string. And then inside the triple quoted string, I'm just going to explain like, you know, my function and it takes arg one, arg two, which defaults to none, and it you know, it doesn't really do anything. And then I'm going to list the parameters and I'll say you know, arg one is the first argument, and arg two is the second argument. Okay, well you get the idea, right? So just make a triple quoted string at the top of your function. And then down here in the code, I'm just going to print out my function. And then here's the double underscore doc. So let's go ahead and run this. So let's bring up the terminal and inside chapter two, we're going to run. And you can see it works. Let's take a look at some of the best practices for writing good documentation strings.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/documentation-strings?u=76281980&t=187)** So first docstrings should always be enclosed in triple quotes, even if they're only one line. This makes it easy to expand on them later. The first line of your docstring should summarize the function or the class, or the module, and what its main purpose is. For packages and modules, list the important classes and sub-modules that are contained within it, along with any custom exceptions that the developer needs to know about. For classes, list the important methods along with important information like any enums or static member functions or properties. For functions there's a variety of important things to list. First, make sure your docstring lists and explains each of the parameters, including the optional ones. If the function returns of value, list it, right, explain it. If there's no return value the usual convention is to save space by not listing one. Instead of saying, you know, explicitly, hey there's no return value. If the function raises any exceptions make sure you list those also. If you want to learn more about how docstrings work and some of the best practices you can follow then check out PEP 257, which you can find at this link and explains all about docstrings, why they exist and how to make them work really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (4), find (1)
> **Documentation:** the documentation (3)
> **Tools:** terminal (2)
> **Env Vars:** pep (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Variable argument lists](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=0)** - [Instructor] Like other programming languages, [[Python (Programming Language)|Python]] functions support variable argument lists. This makes it possible to build functions that have a high degree of flexibility by accepting different numbers of parameters. A good example of this might be an addition function that adds up the parameters passed to it. It would be pretty inconvenient to require callers of this function to have to conform to putting all the numbers into a list. So defining the function to accept a variable list of parameters would be the better way to go. To do this in Python, you define the function argument using an asterisk character in front of the parameter that you want to allow a variable length for. This parameter has to come after all the other positional parameters that the function defines. So, for example, if we built a logging function that logged messages along with parameter values, we would maybe first define the parameters for the message type, and then the message text, and then specify the variable argument list. All right, so let's try this out in our actual code. So here in chapter two, let's open up varargs_start. So, let's define an addition function that takes a variable number of parameters. In the definition for the function, I'm going to add a parameter named args and I'm going to put star in front of it. Now, this isn't required, right? The name args. It's just more of a convention among Python programmers. You can call it whatever you want. Inside the function,
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=92)** I'll create a variable to hold the result and then iterate over each of the arguments to form the result. So I'll just say four arg in args, result plus equals arg and then I'll just return the result. So, let's go ahead and exercise this function. So, I'll put some code here in Main to try it out. Let's do some numbers. five, 10, 15, and 20. And let's make a copy of that and let's do something simpler. Let's do one, two, and three. Let's go ahead and try this out. Let's bring up the terminal and let's run this. And you can see that the function returns to some of the values. Now, if you already have a list of values in a sequence, you can pass that to the function by putting an asterisk in front of the list name. So let's try that. So let's imagine I had a list. I've got something like, my nums equals and then inside these brackets, I'm just going to copy and paste these guys and put them in here. So now I have a sequence of numbers and I want to pass this to my addition function. What I'm going to do is print out the addition result and then I'm going to do what's called a literal unpacker. I'm going to unpack that sequence literal by putting a star in front of the argument and then just name the list. So let's run this again. And you can see that the results there
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-classes-and-functions/variable-argument-lists?u=76281980&t=185)** is in the output. Now, there's a potential drawback to using variable argument lists and that is that if you decide later to change the function to add more positional parameters, then all of the callers of the function will have to change. So, for example, if I go back and change the definition of this function to accept a numerical base argument, like this, now I have to change all the places where this function is used. And you can see, I'm going to try and run this and it works. But the results are different. And then now I'm getting an error in my output, because the function assumes that the first parameter is the base parameter and my result is incorrect. So, in general, variable arguments are useful when the number of parameters that your function expects is relatively small. It's a great way to add flexibility to your functions but you do have to be careful and think ahead about how your code's going to be used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for example (2), imagine (1)
> **Code Identifiers:** varargs_start (1)
> **Tools:** terminal (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Lambda functions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=0)** - [Instructor] If you've done any programming in other languages, such as [[JavaScript]] or C# or [[Java]], you've probably seen or worked with anonymous functions. [[Python (Programming Language)|Python]] also supports these and they are referred to as lambda functions. Lambda functions can be passed as arguments to other functions to perform some processing work, much like a callback function in a language like JavaScript works. Typically, you'll see these used in situations where defining a whole separate function would increase the complexity of the code and reduce readability. Lambdas are defined by using the keyword lambda, followed by any arguments that the lambda function accepts, then followed by an expression. So let's look at how they're used in practice because that's usually the best way to understand something. Here in the code, let's go ahead and open up lambda_start. And here in my code, I have two regular functions, right? One's called celsius_to_fahrenheit. One is called fahrenheit_to_celsius and they just convert temperatures from one scale to the other. And then over here I've got two lists of temperatures, Celsius temperatures, and Fahrenheit temperatures. Now, suppose I wanted to convert each of these lists to the other temperature scale. To do this, what I might use is the map function that we learned about, you know, a little earlier. So the map function takes a function as the first argument and an iterable object as the second argument. So to convert these two lists, what I would probably do is write something like this, right?
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=92)** I'm going to create a new list of the result, whoops. And inside that list, I'm going to call the map function. And the map function is going to use, for example, the fahrenheit_to_celsius function to work on the ftemps list. So that will return a new list of temperatures and let's go ahead and make a copy of that. And in this case, I'll just call the other function, which is going to be celsius_to_fahrenheit, and that's going to work on the ctemps list. So let's go ahead and run this code, and I'm going to go into the terminal, and I'm going to run my lambdas code. And you can see the results here where each of the temperatures has been converted. Now, I can reduce the complexity of the code by writing each of the functions as an inline lambda. So let's go back and change the code to do that. So rather than using the explicit functions that I've defined up here, you can see that each of these functions is basically just a formula. You don't really need a whole separate function construct just to do this. What I'm going to do is just use each formula directly in line as a lambda. So for the celsius_to_fahrenheit version, I'm just going to copy that formula and I'm going to replace the call to celsius_to_fahrenheit with what looks like this. I'm going to write lambda t 'cause that's going to be the input temperature.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/lambda-functions?u=76281980&t=187)** And then I'm going to paste in the formula. So now I'm basically calling, and actually, it's going to be t, not temp. There we go. So now I've got the formula directly in line and rather than calling a function, I'm just going to specify this lambda keyword. I'm going to do the same thing for fahrenheit_to_celsius. I'm going to have lambda t. And let me go get that formula. That's this guy right here. Paste that in and that's going to be the t variable. All right, so now when I run the code again, you can see that the results are the same. So in this particular case, using the lambda expression simplifies my code, right? Because I can see the calculation right where I'm using it. I don't have to track down that function fahrenheit_to_celsius. It might be in some other module somewhere and someone else who has to work with my code, right? Even if that's me like several years from now doesn't have to go digging through all the source to find out where those functions are. Now obviously, lambdas aren't a good fit for every scenario. In practice, you will, of course, continue to use regular functions in your programs but lambdas can help make your code more readable when defining a full function is more effort than it's worth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** celsius_to_fahrenheit (4), fahrenheit_to_celsius (4), lambda_start (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Keyword-only arguments](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=0)** - [Instructor] Another similarity that [[Python (Programming Language)|Python]] has with some other programming languages is that it provides a way for specifying function parameters using keywords. So for example, you can define a function that takes positional arguments along with keyword arguments that take optional values like this one where arg3 defaults to a specific value. And then, when you want to call the function you can specify values by position or by keyword, right? So in this example, I'm passing in values for arg1 and arg2, but then I'm specifically saying, hey, arg3 needs to be this value. In some cases, however, you may want to require that callers of your particular function specify arguments using keywords in order to provide better readability of the code. So for example, let's suppose we have a function that performs a critical operation and it provides an option to suppress exceptions. So one way to write the function definition would be to specify a regular argument and have it default to a certain value like you see here. The potential problem with this approach is that the function can be invoked just by passing a regular positional argument. Now, since this parameter has significant effect on how the program runs, it might be better to require that the parameter be specified by keyword. And that way, the programmer that's calling the function is aware of the significance of the parameter and others who read the code can easily see and understand what's happening. So to accomplish this in Python you can separate your positional arguments
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=93)** with a single asterisk character followed by parameters that are keyword only, right? They have to be specified by keyword. So let's see how this works in the code. Let's open up keyargs start, and let's define our function using some positional arguments, right? So I'll have arg1, arg2 and I'm going to put in my asterisk character and then I'm going to have suppress exceptions equals false. So now, let's try calling this function without using the keyword. I'm going to write 1, 2, and then true. Now, you can see that I'm getting this red squiggly line here in my editor, right? Because it says too many positional arguments for the function. And in fact, if I try to run this, let's bring up the terminal. You can see that I'm getting an error. It says, my function takes 2 positional arguments but 3 were given. I can't invoke this function now without explicitly using the keyword for the third parameter. So let's go ahead and fix that. So now I've supplied the keyword and you can see that the red error disappears. Now it can run the program just fine, and there's no errors. Okay? If you find yourself in a position where you really need to make sure that someone using a particular function clearly understands what they're doing, you can use keyword only arguments to help ensure clarity in the code.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/keyword-only-arguments?u=76281980&t=187)** And this is one of the great language features of Python that I really like because it exists mainly to improve the readability of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), find (1), make (1)
> **Analogies:** for example (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Advanced Functions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=0)** - [Instructor] Let's walk through my solution to the challenge, and you can compare my code to yours. And there's no one right or wrong answer here. You might have a different solution than mine, and that's okay. So, the docstring part of the challenge was pretty straightforward. So, that's the first thing I did, and you can see the result right here. Your solution probably looks very similar to this part. So, we have these three characters with the explanation of what the string combiner function does, followed by the closing three quotes, and that's what creates our docstring. For the [[Representational State Transfer (REST)|rest]] of the solution, remember that we had to combine all the string and integer number arguments into one result string and ignore other types, and we also had to take into account this unique parameter to see if we needed to return a string that only had unique characters in it. So, you can see that the function definition has a variable argument list, and that's how the code was called. So, my code loops over each argument. Well first, it declares an empty result string, and then it loops over each argument. And what I'm doing is I'm using the isInstance function to check to see if the argument is either an integer or a string, and if so, it adds it to the result string. And you might be wondering like why Booleans end up getting involved and included in the result, and that's because Booleans, the way they're implemented in [[Python (Programming Language)|Python]],
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=93)** they're actually integers. So, this isInstance call will return true for Booleans as well as integers, but you probably noticed that floating points got left out. All right, and so let's see what's next. So, at this point, right, I have a string that contains all the the arguments, but then we had to check this unique argument, right? And if the unique argument is true, then we need to make sure that each character only appears once in the string. So, what I do is I create a newresult temporary variable, and I use the set operator to create a set out of the string that I've got so far, because sets can only contain unique values, right? So, this will actually strip out all the duplicates, and then I simply set the value of the return string to the empty string and I use the join function. And the join function will simply concatenate all of the individual characters in the set that I just created into a result string and then return the result. All right, so let's go ahead and try my code and see if it works. So, the first example is a list of strings, integers and Booleans, and we're not using unique. So, let's test the code. And sure enough, you can see that it concatenated, ThisIs1TrueString exclamation point, which is what we expected. All right, let's go ahead and change this to True. And now let's test the code.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-advanced-functions-24355133?u=76281980&t=187)** And sure enough, now we can see that each one of the characters only appears once in the result. All right, so let's go ahead and set this back to False, and let's try another one of these. So, let's try this one with the array. So, what's going to happen is, these strings should be included, but because this is neither a string nor an integer or a Boolean for that matter, it should be ignored. So now, let's go ahead and let's go comment that one out. It'll still work, but let's just be clean with our code. And sure enough, you can see that the array is ignored. Let's go ahead and try something else. Let's try putting in a floating point number, because the floating point's not an integer so that should be ignored. Yep, sure enough, it is. All right, and let's try putting in a Boolean. Okay, that should work. Yep, it does. All right, and then let's try setting unique to True. And it seems to be working. Okay, so that's my result, that's my solution. Take my code and compare it to yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** isinstance (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Python Comprehensions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to comprehensions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about a [[Python (Programming Language)|Python]] language construct known as comprehensions, and these can be applied to lists, sets, and dictionaries. Comprehensions give us a short, concise way to derive a new sequence of values from an existing sequence of values. So let's consider an example. The map function is used to map one set of values into another set of values. It takes a function as an argument that is then applied to each member of a list of values. The result can then be passed to the list function to create a new list of values. So in this example, we're converting temperatures from one scale another using this kind of approach. It turns out that this kind of operation is a fairly common thing to do in Python, so common in fact that the language itself has a special syntax for performing these kinds of operations. I can achieve the same result as this complex line of code by writing the following. So first, I write the expression that I want to apply to the values, and this is sometimes called the output expression. In this case, it's just the simple formula for converting Fahrenheit temperatures to Celsius. Then, I need to write the variables I'm going to work on, right? In this case, I have named it t, and each of the t values will come from my list of Celsius temperatures. And then finally, I need to wrap this entire expression in two square brackets because I'm creating a new list. And that's really all there is to it. So by writing this comprehension,
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/introduction-to-comprehensions?u=76281980&t=93)** I've simplified the original line of code and it's all in one line. There's no need to go looking for the conversion function to see how it worked, that kind of thing. Python supports this kind of construct for more than just lists. You can also use them to create sets and dictionaries and we'll see that as we go through the chapter. We'll also see how to apply what's called a predicate expression to perform a filtering effect. Comprehensions are an important and common form of programming in Python and can make your code much easier to work with. So, let's go through the chapter and see how these work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [List comprehensions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=0)** - [Instructor] Let's try writing our own comprehension to work on a list of values. Here in my code, I'll open up listcomp start. And you can see I've already defined two lists of numbers, right? One is even numbers and one is odd numbers. So what we're going to do is try things using the non-comprehension way first. So let's use the map and filter functions along with the list function to create a list of numbers that are squares of the numbers in the original list. So let's do that. First, I'm going to use my map and list function. So I'm going to name the result even squared, and I'm going to create a new list. And in that list, I'm going to map and I'm going to create a lambda function which will take one argument and just return the square of that number. The map function's going to work on the evens list. And then we'll just print it out. So let's go ahead and run this. Let's bring up the terminal. And we'll go into start chapter three, and I'm going to run my list. And when I run this, you can see that the output is the list of numbers whose values are squares of the original even numbers. So now let's try adding a filter. So to do that we're going to use the filter function and let's use the filter function to only apply the square function to numbers that are greater than 4 and less than 16.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=95)** So I'm going to modify my code here to call the filter function. And the filter function is going to take a lambda, and that lambda is only going to work on, it's going to return true if e is greater than 4, and e is less than 16. Okay? And that's going to work on the evens. And then I need to close off the last parenthesis and, okay, so now let's go ahead and run this again. And now you can see that the function is only being applied to numbers that are greater than 4 and less than 16. But this code is a little bit complex, right? I've got this list, a map and lambda, now another filter, another lambda, right? Okay, let's see if we can make this a little bit simpler by using comprehensions. What I'm going to do is I'm going to call this even squared again and I'm going to comment out this example. So even squared is going to be, and I'm going to make a new list, right? So I'm just going to use square brackets, and then I'm going to write e star star 2 for e in evens. And that's basically it. So you can see that this code is the equivalent of this complex code right here. So these two brackets make a new list, which is what this does. And then the map function, right? It operates on the filter. Okay, well, it operates on the entire list. We'll get to filter in a moment.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-classes-and-functions/list-comprehensions?u=76281980&t=187)** So this basically does the same thing as the map and list function, right? The filter isn't there yet but we'll see how to do that in a minute. So, I'll run this again and oh, got to print it. So, let's run this again. And now you can see that we're getting the same result as the original. So we were able to achieve the same result with code that's much easier to read. So now let's try adding what's called a predicate condition. And this time we'll work on this set of odd numbers. Okay? So I'm going to write odd squared is equal to and once again, I'm going to make a new list and I'm going to do the same thing, e squared for e in odds. Now here's where the predicate condition comes in. And this is basically the same thing as what the filter does. I'm going to write, if e is greater than 3 and e is less than 17. And then we'll print out the results. Okay, so let's go ahead and comment out the even example, and let's run this again. And now we can see that the odd numbers are being squared but only if they're greater than 3 and less than 17. So for simple cases like these writing one line comprehensions can be much easier than using multiple functions like map and filter and list to accomplish essentially the same thing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dictionary comprehensions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=0)** - [Instructor] Now, let's take a look at how to use comprehensions when working with dictionaries. And in this example, I'll again use a list of temperatures. Just this time it's going to be the Celsius ones. So let's open up dictcomp start. And you can see I have my list of Celsius temperature values. So let's suppose I wanted to build a dictionary that mapped each Celsius temperature value with its corresponding value in the Fahrenheit scale. So to do that, what I would do is something like this. I'd write something like temp dict is equal to and I make two curly braces. So what I need to do in this case is create both a key and a value from each temperature in the Celsius list. And remember, we want to be able to look up each Fahrenheit value when given a Celsius value. So that means that each Celsius value needs to be the key. Okay? So I would write T colon and then that's going to be T times nine fifths plus 32 for T in C temps.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=72)** So this is similar to writing the list comprehension, only in this case what I'm doing is I'm using these curly braces instead of the square brackets cause I'm creating a dictionary, not a list. And then just for fun let's limit the dictionary to values just below a hundred and then print out one of them. Okay? So I'll write using a predicate expression if T is less than 100. And then I'm going to print out the dictionary and then I'll print out just one of the values. I'll write temp dict, and I'm going to access the value for 12. So let's go ahead and run this. So let's bring up the terminal and into start chapter three.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=123)** And I'm going to run the dictionary. Okay, so when I run this the output shows that we have a dictionary now where the keys are the Celsius temperatures and the values are the calculated Fahrenheit temperatures and only the ones less than 100. So 100 didn't make it into the list. And then we're printing out the one by looking up the Celsius key. You could actually get pretty fancy with comprehensions if you want to. Let's try another example. Let's imagine that I had two existing dictionaries representing members of sports teams, and the keys are their last names, and the values are their jersey numbers. And I wanted to merge these two teams into one team. You can do this pretty easily with a comprehension. So what we need to do is loop over the keys and values in each dictionary and then add them to the new one. So I'll write new team is equal to, and I'll make a new dictionary comprehension. Then I'm going to loop over each dictionary. As the key, okay, I'm going to get the value for team in each team. So team one and team two. Now I need to get the keys and values for each item in the new team dictionary. So then I'll write again for key and value in team dot items.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/dictionary-comprehensions?u=76281980&t=214)** What I'm doing here is building a comprehension that actually has two separate expressions. The first expression gets me each team in this tuple right here. Okay? So I'm going to operate on each team. And then the second expression gets me the keys and values for each item in each team. So let's run this. Oh, actually let me print this out. So let's go ahead and run this. Oh, and let's comment out the previous example just because we don't want to pollute the output. All right, so let's go ahead and run. And you can see that when I run this now the two dictionaries are merged and we've got one dictionary with all the members in it. Now, I should point out that this is about as complex as you want to get when working with comprehensions. All right? You want to avoid having more than two expressions in any single comprehension, because at that point you know the code becomes a little unwieldy to read and you're probably just better off creating a function to do the work. But you can see that by using expression syntax you can create some pretty simple statements to do some interesting results.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** similar to (1), imagine (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Set comprehensions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=0)** - [Narrator] All right, in this video we're going to turn our attention to look at how you can use comprehensions to work with sets of values. And recall, sets in [[Python (Programming Language)|Python]] are used to contain unique values. So each value in a given set can only occur one time. So let's open up setcomp. And similar to one of our previous examples, I have a list of Celsius temperature readings. And what I want to do is write some code to convert the Celsius temperatures into Fahrenheit temperatures, but only keep each unique temperature reading, right? So I'm trying to filter out any duplicate temperature values. Doing this with a set comprehension is pretty straightforward. So what I'm going to do here, for illustration purposes, is solve the problem with both a list and a set so you can see the difference. I already have the comprehension for the list version, right? So this is going to calculate the Fahrenheit temperatures for all the temperatures in temps, okay? And then what I'm going to do is just copy and paste this. Okay. And I'll call that ftemps2. And all I'm going to do is replace these square brackets with curly braces instead. So I'll do that here at the end. So once I've done that, I've got to print it out. So we'll print ftemps2, right? So that way we can see the result side by side. So the only difference is one has
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=93)** curly brackets 'cause it's a list. One has square brackets, and then curly braces because one's a list and one's a set. So let's go ahead and run these side-by-side. Now I'll go to the terminal. And chapter three. And let's run set comprehension. And you can see in the output that it's pretty similar. The only difference is that the list result contains some duplicate temperatures, right? You see, here's 53.6, and here it is again down here. And here it is again over here. 50 occurs a couple of times, I think. Right here. Here it is. And then here it is. Whereas the set result only contains unique values. None of the values are duplicated. And once again, right, kind of similar to the dictionary example, you can kind of get pretty fancy with this if you want to. Let's try a different example. Now suppose I have a string of text and I wanted to count the unique letters in the text while converting each of the letters in the text to uppercase. And yes, I know this is a bit of a contrived example, okay, but just play along with me. So what I'm going to do is create a set of all the characters in the string and convert them to uppercase. So let's just write the code to do that. I'm going to write "chars =", and then inside curly braces, I'm going to write c.uppper for c in my temp string. And that's basically it, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/set-comprehensions?u=76281980&t=189)** That's pretty straightforward. So I'm going to loop over each character in the string and I'm building a new list, and the list is going to contain the uppercase version of that character. So let's go ahead and comment that out. Let's print the result. And let's run. And you can see in the output that my set contains each of the unique characters converted to uppercase but there's a space character in the output, and that's a mistake. I didn't want a space. It's right here. I didn't want to include spaces. Let's go back to the code and make a slight modification. I'm going to write, if not c.isspace. All right, so I'm going to add a predicate that says, "Hey, don't include the white space." All right, so let's run the code again. And now you can see that the space character is no longer in the result. So hopefully that gives you a sense of the power that comes from using comprehensions. You can perform a pretty large variety of transformations on just about any iterable data source, while at the same time improving the readability of your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Versions:** 53.6 (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Solution: Comprehensions](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=0)** - [Instructor] For this challenge, we needed to use comprehensions, which we learned about in the chapter in order to process the content of a string and output some data about the string. So let's take a look at my solution. And remember, we didn't have to return any values from the function. All we needed to do was set the values of these global variables and the testing code did the [[Representational State Transfer (REST)|rest]]. So the first piece of data we needed to calculate was the length of the string. And that's easy enough to do with the regular length function. You didn't really need a comprehension for that. So next, we get more into the comprehension code. And we needed to count the number of digit characters. So for this, I used a list comprehension, which you can see by the square brackets there. So the list comprehension processes each character in the string and tests to see if it's a number by using the isnumeric built-in [[Python (Programming Language)|Python]] function. And then we use the length function to find the length of this list. Counting the number of punctuation characters was a similar operation, again, list comprehension. And this time I tested each character against the string classes built-in punctuation property to see if the character in question was a member of that set. And if it is, then I count it. And then once again, I use the length function to get the length of the resulting list. So that leads to the number of punctuation characters.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=95)** And then the last one, we needed to count the number of unique letters in the string. So in this case, I used a set comprehension, and I used a set comprehension because sets can only contain unique values. So, duplicates will automatically be filtered out for me. So I use the set comprehension and I process each character. In this case, I'm using the built-in function named isalpha to see if the character is in fact an alphabetic character. And then once we do that, that will give me a set, and then I'm using the empty space and the join function on the set to join the set into a string. So that will give me the string back. This particular operation wasn't counting. This was, hey, get the actual unique characters and put them into a string. And then now that I have the string, the next operation was to get the length or the number of unique characters. So since we've already calculated the unique string itself, all I had to do was get the length of that string. All right, let's go ahead and test the code and see if it works. All right, sure enough, the length of the string is 65. There are seven numeric characters in the string. Is that right? Let's see, 1, 2, 3, 4, 5, yeah, 6, 7. Okay, looks right. Number of punctuation characters was 10, and the number of unique characters was 14. And you can see that the actual string containing only the alphabetic characters, right? All the punctuation is gone, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-comprehensions-24354357?u=76281980&t=189)** The numbers are gone. So that's this unique set of characters in that string. So I suggest taking my code, comparing it to yours, maybe try out a few other test cases and see where there are similarities and differences in our two solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [instructor] (1)


### 4. Classes and Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Python classes overview](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/python-classes-overview?u=76281980&t=0)** - [Instructor] You've probably created your own [[Python (Programming Language)|Python]] classes in programs you've written before. In this chapter, we're going to learn about some of the more advanced features of Python classes and how to customize the behavior of classes. Python itself is a very customizable language and it provides a variety of ways to control how objects are created and converted to strings compare to each other and much more. This customizability is achieved by using special functions and features that are a part of every object defined in Python. First, you can use Python classes to create enumerations which you may be familiar with from other languages like [[Java]] or C++. Enumerations are used to make constant values easier to read and modify from one central place. You can also customize how your objects are converted into string values when they are passed to Python functions such as stir or wrapper. Classes can also have computed and default attributes and you can define functions that let classes be compared to each other using logical operations like greater than and less than. You can also give your classes numeric like behavior so they can support operations like addition and subtraction. In the [[Representational State Transfer (REST)|rest]] of this chapter, we'll see how to use these techniques to create classes that are easy to work with and are flexible enough to solve a variety of programming challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (6), make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Defining enumerations](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] supports enumerations just like other popular programming languages, and they're useful in a variety of scenarios. Usually, they're used to assign easy-to-read names to constant values in a program which helps to increase the readability of your code. They can also be used as hash values, and you can iterate over them like you would other iterables in Python. Enumerations are defined using the class syntax. Let's see how to do this. I'm going to open up the enums_start file. And to define an enumeration, I'll first import the Enum class from the enum package. So from enum, I'm going to import Enum. Then to define an enum, I'll create a new class and use the Enum class as the super class. So I'll name my class Fruit, and I'll specify that Enum is the class I'm inheriting from. Right, so now let's assign some values to our enum, and for this example, I'll just use some fruit names. So I'll have APPLE equal to 1 and then BANANA equal to 2, ORANGE will be 3, and TOMATO will be 4. So now I can use these constants in my code instead of having to use hard-coded numbers which is a good programming practice. So let's see how these behave in action, right? What I'm going to do is print some of these out. So I'll print Fruit.APPLE, and then I'll print out the type as well.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=98)** And then I'll also print out the string representation of the enum as well, okay? So let's go ahead and run this code. Right? And we're in Chapter 4. I will run my enum code. And so when I run this, you can see that I'm getting Fruit.APPLE as the value of the first item, and the type is an enum of class Fruit, and the repr string shows that it's a Fruit.APPLE type with a value of 1. So enums have both a name and a value property when you declare them, and you can see this by printing each one. Let's do this. Let's try, I'm going to copy that line, and what we'll do is we'll print Fruit.APPLE.name and then Fruit.APPLE.value. Right, let's run this again. And you can see that in the output, right, I have the name which is APPLE and the value of 1. So there are a couple of rules to be aware of with enums. So, first, it's not valid to have duplicate names. So if I go up here and I try to add something else, if I try to add APPLE again and make it a value of 6,
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=192)** you can see that I'm already getting this error here in my editor, shows me that that's wrong. And, of course, if I try to run it, I'm going to get an error, right? It says Attempted to reuse key APPLE. So you can't reuse the same key, but you can have duplicate values. So if I had, you know, if I wanted to add, you know, RED_DELICIOUS, for example, as an alias for APPLE, so now they have the same value, that's actually okay, right? That works. And if you want, however, you can prevent duplicate values by using the unique decorator. So to do that, we first have to import the unique decorator from the enum package. So I'm going to import Enum and unique. And then what I need to do is decorate the class with the unique decorator, so I'll just type @unique. And now you can see if I try to run this again, you can see that I'm getting error. It says ValueError duplicate values found in, right? And it shows me that RED_DELICIOUS and APPLE are the same value. So if you want to prevent having duplicate values, you can do that. So let's go ahead remove that. If you don't care what the values are, you can use the auto function to automatically assign values to your enums. And to do that, I need to import the auto, the auto package from the module,
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=285)** and then I can do something like this. I can use my enum, I can say I want PEAR equal to be auto, and now that will just automatically assign a value to my new enum, and what I'm going to do now is print that out. So I'll print out Fruit.PEAR, right, .value, and let's comment out some of these other ones, and let's clear the screen here and then run this again. And now you can see that PEAR value is equal to 2, and the reason is because, you know, we're allowed to have, you know, duplicate values. If I wanted to make sure that these are all unique, I'd have to put auto higher up in the stack so that it wouldn't get reused again. And, as I said earlier, you can use enums as hash values, so let's take a look at that. So let's define a dictionary called my_fruits, and I want to have an enum as a hash key. I can specify one like this, right? I can say, let's see. Let me go back and take off that space. I can do something like this. I can say my_fruits sub Fruit.BANANA is equal to Come Mr. Tally Man. So they can serve as keys in dictionaries. And then I can access the dictionary by just, you know, doing something like this.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-classes-and-functions/defining-enumerations?u=76281980&t=377)** I can print out my_fruits, and then I'll just go ahead and use Fruit.BANANA. Let's give that a try. And you can see there in the output I've accessed the value of my dictionary. So enumerations are a pretty common feature of many programming languages, and they can really help make your code easier to understand and maintain, and, as you can see, Python is no different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **Env Vars:** apple (11), banana (3), pear (3), red_delicious (2), orange (1)
> **CLI Commands:** python (3), make (3)
> **Code Identifiers:** my_fruits (3), enums_start (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Special methods: string values](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=0)** - [Instructor] Another fairly common operation in [[Python (Programming Language)|Python]] is to obtain a string representation of a particular piece of data. So consider, for example, what happens when you use the string formatting function? So each one of these parameters is passed to the format function, and is converted into a string, and then substituted into the output string at that particular placeholder. Now, for some data types, this is pretty straightforward, right, such as converting an integer number into a string. Python gives your custom class full control over how it wants to represent itself in string form. And there are essentially four main functions used to do this. The first is the str function. And this function is called on your class when the str print or format functions are used to convert it into a string, and obviously the return value has to be a string. This particular string is typically an informal representation of the object. In other words, it's just a nicely formatted human-readable string. There's no expectation that this is a valid Python expression. The second is the repr function. This is called on your class when an object of its type is passed to the repr function in Python. And according to the Python documentation, this function should try to return a Python expression that could be used to recreate the object with the same value. Now, that might not always be possible with complex objects, in which case you can just return a useful description. This function's often used for debugging purposes, so it's important that it contains useful data.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=96)** And if your class overrides repr but not str, then repr will also be used to generate the human-readable string. Next is the format function which takes a format_spec as an argument. And as you might have guessed, this function will be called when the object is converted using the string format function with a formatting specification. The format spec will contain the description of the desired formatting options, and it's up to your class to implement the string formatting logic. In reality, most classes never actually do that. They simply delegate to the built-in string.format function. The last function isn't really a string function. It handles the conversion of an object into bytes. And so there are some scenarios where you want to pass data as a set of bytes and using this function, you can do that. You can convert your class into a series of bytes. So it's called when the Python bytes conversion function is invoked on your object. All right, so let's try some of these out in actual code. Let's jump over to the editor. And here in my code space, I'm going to open up the objectstr_start file. And I have a class named Person with some default information in it, such as first and last name and in age. And trust me that age is super accurate right now. So I also have some code in the bottom of the file here, and that code is going to create, and print out some properties of the object. Now, before I override any functions, let's just run what we have right now. So I'm not going to override, str or repr, let's just run the code as it is.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=190)** So here in the terminal, I'm going to go into start, and chapter four and we'll run. And when I run this, you can see that Python just generates a default string value that represents the class name and its address in memory. And it's doing this for both the repr and the str, and you can see that as I format the code if in fstring, right I get a little bit of a different set of output right? It's just as formatted, but the result is just the same. So I'm getting the same value for each of these three functions because I haven't overridden anything, and I haven't customized anything. So let's change that, let's go back into the code, and let's override the repr function, and put some custom code in here. So I'm going to define __repr, and I'm not going to use decorators for this. What I'm going to do is return a string, and I'm going to return Person class, and I'm going to have self, actually, this is going to be a format string, so here we go. I'm going to have self.fname, and I should probably label that just so it's clear. And let me just collapse this down so we get some more room. Then I'll have the lname label, and that's going to be self.lname and the age, and that's going to be self.age.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=289)** So now I've overwritten repr. So let's go back to the terminal again. And once again, we'll go into the start chapter four. And I'm going to run this. And now you can see that when I run this code that the same string is being printed the same time because I overrode the repr function, but I didn't override str. So repr is being called for each case. So let's go ahead and change that. I'm going to shrink this down a little bit, and I probably should put the closing angle bracket in there. I've got to that the first time. So now let's add an override for str. And in this case, I'm going to return a slightly different string. I'm going to write return again, it's going to be an fstring. And I'm going to write person self.fname,
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=347)** self.lname, is self.age. All right, so now let's run this again. So now we, we have both repr and str. Right now, we see we're getting some different results. For the str and format functions, so for repr, I'm still getting the I'm getting the actual override of repr. And when I call str and I use an fstring, I'm getting the more human readable formatting output instead. So let's try one more thing, which is to add the ability to convert the object into bytes. So let's go ahead and shrink that. And one more time, I'm going to put in def bytes.
>
> **[6:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=398)** So first I'm going to create a string to hold the object's data. And I'm basically just going to make a very short string on this. So I'm going to have just a temporary variable, and it's going to be a string, and it's going to contain Person: self.fname,
>
> **[7:01](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-string-values?u=76281980&t=421)** :self.lname, :self.age. So then I need to convert this into bytes by using the string classes and code function. And there's a variety of supported encodings built into Python, I'm just going to use utf-8. So I'm going to return, and I'm going to call the bytes function, and I'm going to call val.encode. And I'm going to encode this using utf-8. And then I can add another print down here. I'm going to print bytes of cls1. All right, let's bring this back up, run it one more time. And now you can see that when I run the example again, here is my utf-8 encoded bytes object. And you can see it's a bytes object cuz the little b that's right here. If I wanted to get fancier, I could just change the to utf-8 to 32. And when I run utf-32, you can see, oh these are much more complex bytes now. So by overriding these functions, you could exert a lot of control over how your objects are represented in both string and byte [[Forms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Forms]] (1)
> **CLI Commands:** python (9), make (1)
> **Definitions:** is called (2), in other words (1), is a  (1)
> **Analogies:** such as (2), for example (1)
> **Code Identifiers:** format_spec (1), objectstr_start (1)
> **Documentation:** specification (1), spec (1)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)

#### [Special methods: computed attributes](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=0)** - [Instructor] In a previous video, we saw how to use special [[Python (Programming Language)|Python]] class methods to generate string representations of objects. In this example, we'll take the customization a step further. Python provides a set of methods that classes can use to control how attributes are accessed on an object. Whenever an object's attributes are retrieved or set, Python calls one of these functions to give your class an opportunity to perform any desired processing. The first two, getattribute and getattr, are called to retrieve an attribute value and they're slightly different from each other. Getattr is called only when the requested attribute can't be found on the object, while getattribute is called unconditionally, every time an attribute name is requested. It's also called when Python goes to look up any methods in your class definition, so you need to be careful with it. The setattr function is called when an attribute value is set on the object. Delattr is called to delete an attribute. And the dir function is called when the global, built-in Python dir function is used on the object. And this is useful because it enables a developer to dynamically discover the attributes that your object supports. So to see how these might be useful, let's take a look at an example. All right, so here I am in my code. I'll open up compattrs_start. And you can see I have a class named MyColor that defines three attributes to represent an RGB color value.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=92)** Now, suppose I wanted a user of this class to be able to get the color value as an RGB tuple. It would be nice if I could just repurpose, right, the existing attributes I already have and I can do that using the getattr function. So let's go ahead and uncomment this. And so I'm going to check, in the getattr call, if the attribute being asked for is equal to rgbcolor, then I'm going to return a tuple of self.red, self.green and self.blue.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=131)** Otherwise, I'm going to raise an AttributeError and I'll give the message that the attribute requested is not valid. All right, so let's go ahead and try this out. Down here in my code, you can see I'm creating a MyColor object and I'm going to print out cls1.rgbcolor. That will cause getattr to be invoked. And then, it'll look up, it'll match this value and it'll return the tuple. So let's go ahead into the terminal and we'll go into Ch_4 and let's run this. And you can see, sure enough, that's what's happening, right? So I'm getting my 50, 75, 100 returned as the tuple. I can also get a little more fancy by calculating a CSS-style hex color value on-the-fly. So let's go ahead and add support for that. So if the attribute being requested is equal to hexcolor, I'm going to return a formatted string. And that string is going to have self.red, right? self.red and we'll format that as a hex. And then the same thing, self.green and self.blue.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=233)** All right, so let's go ahead and try that now. So we'll print this out. We'll print out cls1.hexcolor. And once again we'll go into the terminal. Let's bring this up a little bit and we'll run.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=264)** And now you can see that it's being returned as a hex value. And actually, I should have probably put the little hash in front of it, like this. There we go. Okay, that's better. Now we can see that I'm generating two different attribute values from existing attribute values and I can also control how attribute values are set. So suppose I want to give users of this class the ability to set the color values as a tuple instead of having to individually specify red, green and blue value. Well, using the setattr function, that's a pretty straightforward operation. So let's uncomment setattr. And what I'm going to do is check to see if the attribute value being set is rgbcolor, then I'm going to set self.red equal to the value in the zero index, right? 'Cause here's going to be the name of the attribute. This will be the value it's being set to. And I'll just do the same thing a couple of times with green and blue and that'll be value 1 and value 2. Now, I've got to be a little bit careful here because remember, my code up at the top is already setting some attribute values and setattr is going to be called every time that happens. So I need to have the else condition in here. So if the attribute value not being set is equal to this, I'm going to just call the super class
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=358)** and call setattr with the attribute and the value. And the reason I have to do that is so that these statements up here, in the class initialization, continue to work. So otherwise, they won't get set. This function will be called and the value won't be rgbcolor, so nothing will happen. So we can't have that, right? So now let's try this out. And what I'm going to do is, I'm going to call cls1.rgbcolor and oh, rgbcolor.
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=393)** And that's going to be equal to and I'm going to change the values to 125, 200 and 86, things that are seriously different than what they were before. And then, I'll just copy these two lines and paste them, so we can see the change. And let's go ahead and clear this and run it again. And oh, whoops, looks like, oh, I didn't spell it correctly. It's rgbcolor, there we go. Let's try that again. And now, you can see that the values are changing, right? So here's the initial values, then I change them. And both attributes now change, right? They're both updated. And of course, you know, I can still access regular values, right? So I can do print, you know, cls1.red. Right? You can see that that still works. So the one last thing to try adding is support for the dir function. So this is called when the built-in dir function is invoked on your object and it lists the available properties for an object. This is your opportunity to help developers discover what types of attributes your class supports. So let's go ahead and uncomment the dir function. And what I'm going to do is, I'm just going to return a tuple that says I support rgbcolor and hexcolor. And then, down here in the code, I'm going to write print, I'm going to call dir on cls1.
>
> **[8:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-computed-attributes?u=76281980&t=490)** That's my class. Alright, so let's go ahead and try this. Let's clear and let's run. And you can see, sure enough right here, the results of the dir operation. Now I can see, oh yeah, this attribute, or this class, supports hexcolor and rgbcolor in addition to the red, green, and blue. So adding support for computed attributes can really extend the features that your classes support and provide a way to reuse existing attributes in new ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **Definitions:** is called (6)
> **CLI Commands:** python (5)
> **Env Vars:** rgb (2), css (1)
> **Tools:** terminal (2)
> **Code Identifiers:** compattrs_start (1)
> **Cross-References:** previous video (1)
> **Warnings:** be careful (1)

#### [Special methods: operations](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=0)** - [Instructor] Using special class methods you can give your classes abilities that they don't natively get from [[Python (Programming Language)|Python]], but that other built-in objects have. And one of those is the ability to emulate the behavior of numeric values in order to support operations like addition and subtraction. This table shows a partial list of the functions your class can override in order to provide number-like functionality. So you can add objects together, subtract them from each other, basically just about any mathematical operation you want. You can see in the right hand column the kinds of expressions that cause these functions to be called. Such as when two objects are added to each other. In addition, Python also supports in place math operations on objects. And that's represented by this table here. These functions are called when you use the shorthand notation such as plus equals in order to add to an existing object in place. And again, this is not an exhaustive list. If you want to learn more about these functions you can check out the data model chapter in the Python documentation. But for now, let's take a few of these functions for a test drive and see how they work. All right, so here are my code. I'm going to open up numeric start. And let's collapse that down. So I've declared a class named Point. Which holds an X and a Y value. And represents a two-dimensional geographic point. I've also declared a repr() function to print useful information about the point. There are also placeholder functions for some
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=95)** of the math operations we're going to implement. Now down here in my main code. I've created a couple of example point objects to work with. So first, let's implement the addition function so we can add two points together. Oh actually, before we implement the code, let's see what happens in the default case. Let's just go ahead and have P3 equals P1 plus P2. So I'm going to bring up the terminal. And we're going to go into chapter four and we're going to run. This example. And you can see that I print out P1, oh, actually let me print out P3. And let me do this. Let me also comment out. The addition function so we can see what happens. So when I run this, you can see that I get an error. And the reason I'm getting an error is because the addition operator isn't supported for point classes, right? You can see right here unsupported operand types for plus, point and point. So let's fix that, right? What we're going to do is go back into the code. And we're going to uncomment this. So we uncomment the add function. And let's add some logic to actually add the two points to each other. So I'm going to return a new point. And I'm going to have self.x. Plus.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=188)** And then you see here, when I have the ad function there's an argument called other. This is the point that's being added to this one. So I'm going to add other.x. And I'm going to have self.y plus other.y. So now we're actually supporting the operation here. So this code now is going to work. So now that I have the addition operation implemented let's run this again. And now you can see that when I print out the result I've got 40 and 50. So 10 is being added to 30. And 20 is being added to 30. So that gives me a point of 40 and 50. All right, let's go ahead and subtract the two points. Let's go back up to the code. And implement subtraction. So I'm actually going to just copy and paste this statement. And I'm just going to replace the addition with minus. All right. And now let's do subtraction. So I'll have P4 equals P2 minus P1. And then we'll print P4. Let's run it. And now you can see that subtraction is working as well. Okay, so now I've got code that lets me add and subtract two points. All right, let's do one more thing. Let's add the ability to do in-place addition. And in-place addition is basically this. I'm going to have P1 plus equals P2.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-operations?u=76281980&t=283)** So I'm not creating a new variable now. What I'm doing is I'm modifying P1 in place. So let's go ahead and print that out. All right, and now I need to go back and implement the "iadd" function. This is the in-place addition. And what I'm going to do is basically it's just going to be the same code as, well more or less the same code. I'm not going to add a new point. All I'm going to do is directly modify this object's properties. I'm going to have self.x plus equals other.x. Self.y plus equals other.y. And I'm going to return my self. So now I've got the code to do in-place addition. So let's run our updated example. And now you can see that the results are what we expect, right? So we have the new points and we have the in-place addition. So I'll leave it as an exercise for you if you want to try out some of the other functions. But as you can see, if your classes need the ability to support mathematical or numeric type operations, you can do so by overriding the appropriate special class methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Analogies:** such as (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Special methods: comparisons](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=0)** - [Instructor] Using special class methods, it is also possible to implement comparison operators to allow objects to compare themselves to other objects of the same type. And this table lists the names of the special class functions you can override to provide comparisons. And you can see that there are methods for greater than and less than and greater than or equal to and so on. Each of these methods compares the object that the method is being called on to the object specified by the parameter named other. And you can see the type of comparison expression that triggers that particular function in the right-hand column. So for example, when I try to do self is greater than or equal to other, that's going to call the __gt__ function. So let's actually see these in action in a real example. So here in the editor, I'm going to open up comparison_start. And you can see I have a class definition for Employee. It specifies a first and last name, an employee level and a number of years of service. And I've also got placeholder functions for the various comparison operations. And here in my main code, I've got some code that creates a list of employees for a specific department. So let's try a couple of operations out. I want to be able to compare two employees to see which one is more senior. And to do that, I can look at each employee's level and then figure out which one is larger. So to implement that, I'm going to add the code
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=95)** for each comparison function to look at the level for the employee. So for greater than or equal to, I'll just return whether self.level is greater than or equal to the other level. And then I'll just implement this for each of these operations. So for greater than, I'll just do greater than and for less than, I'll do just the less than symbol. And then the less than or equal to. And for equality, I'll just check to see if they're the same. So now that I've implemented this comparison logic, I can perform a comparison between two employees. Let's figure out who's more senior. Let's see if Tim Sims is more senior than Jane Smith and Tim has a lower level, so that should be false. So I'm going to print is the first employee more senior than the third employee, right? And that should be false. And then I'm going to print out, let's see if Tyler Durden is more junior than Rebecca Robinson. So I'm going to say dept 4 is less than dept 3.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=179)** All right, let's bring up the terminal and let's try running this. So I'll run the comparison and we get both of them are false, right? So that's a problem. So the first one is correct, right? Tim Sims is lower level, so he's not more senior but Tyler and Rebecca are the same level. But Tyler has one year less of service than Rebecca has. So he actually should be more junior than Rebecca. So we can fix that problem by updating our comparison logic to check to see the years of service when levels are the same. So I'm going to check to see, okay, if self.level is the same as the other level, then what I'm going to do is return whether self.seniority is greater than or equal to the other.seniority. And I'm going to copy and paste this for each of these and I'll change that. So greater than, and then I'll change... So for less than, and do the same thing for less than or equal to, and I'll just leave the equality check alone. All right, so now let's run it again. And now we can see that, yeah, okay.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=275)** In fact, Tyler is more junior than Rebecca. So we've now fixed that. So implementing these functions also lets us sort our objects because now that we have the ability to compare objects to each other, we can sort them in order. So what I'm going to do, let's go ahead and shrink this. I'm going to add some code here to sort the list and then print it out. So first what I'll do is I'll do for employee in department. I'm going to print the employee last name and I'm going to do this... Yeah, here we go. I'll print the, yeah, emp.lname. So I'll print it out before it's sorted. And then I'll just put a dashed line in here. And then I will sort the list using the sorted function. So I'll sort the department and then I'll just do the same thing. Only this time, I'm going to look in the result, not the department. All right, so let's go ahead and run that. And we're going to need some space for this. So I'll bring this up. All right, so we can see that... Let's go back and look at our people. So we can see what's the initial order. We've got Sims followed by Doe, right? So this is before the sort. So Doe should have come first
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-classes-and-functions/special-methods-comparisons?u=76281980&t=369)** because [[John the Ripper|John]]'s got the least seniority, right? So this is prior to the sort. After the sort, we have Doe, then Sims, which is correct because Sims has level five but only nine years. Followed by Durden, which is correct because same level five but 12 years followed by Robinson, right? Which is level five and 13 years, followed by Smith who has level six. So Jane Smith is the most senior. So now we've got the department sorted in level of seniority. But let's suppose Rebecca had a shorter length of service. All right, let's try this again now. And now we can see that Robinson comes before Durden. They've switched positions to reflect the change in relative seniority because now Rebecca Robinson has one year less of service than Tyler Durden has. So using these special functions, it can provide an easy way of adding the ability to perform comparisons to your classes, and you get the benefit of being able to have them be sorted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1)
> **Code Identifiers:** comparison_start (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Special Methods](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to implement special class methods to perform a variety of operations on our book class. So first we needed to implement the str and repr functions according to the challenge instructions, and you can see that I've done that here. And these are pretty straightforward. You can see that my code just returns an f string that is formatted according to how the instructions specify that the output should appear. So your solution should look something very similar to this. For the second part of the challenge, we needed to implement comparison functions so that the books could be compared to each other based upon their page count. And if we scroll down a little bit, we can see that my solution code overrides the comparator functions and performs each comparison based upon the number of pages in the book. So I implemented greater than or equal to, greater than, less than or equal, and less than. And then each one of those methods implements the right type of comparison in order to compare two books to each other. And then the last part of the challenge required us to implement a computed property. And this is a property whose value is determined at the time that it's accessed. So for this part, I override the getattr function and check to see if the attribute name being accessed is adjusted price. Because remember, this function's going to be called for each attribute access
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-special-methods-24354356?u=76281980&t=92)** where the attribute doesn't exist on the object, so we had to check to see which attribute's being accessed. Then my code performs the calculation based upon the rules that we were given. So antique books have a 10 surcharge, paper books get a two discount, and then I return the value. All right, so that's my code. Let's go take a look at the test cases. So here's the test code. And remember, you didn't have to change anything. All you needed to do was just execute the code as it's written right here. You can actually go ahead and try out some of these different values if you want to to see how the operations work. I'm going to test my code with the values given right here. So I'll click on Test My Code and we can see that sure enough, the str function returned what it was supposed to, and the repr function returned what it was supposed to, the adjusted price was correct. And then we compare the books based upon their page count. So book one has more pages than book two, right, 'cause 1,225 is greater than 311, so that's true. So that means that the less than is obviously false; greater than or equal to, obviously that's true, and then less than or equal two, obviously that's false. All right, so that's my solution. How does my code compare to yours?

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Structural Pattern Matching

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of pattern matching](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=0)** [Instructor] - One of the things that I've always felt was missing from [[Python (Programming Language)|Python]] was an elegant way of matching a value against a variety of possible conditions. Python finally addressed this shortcoming in Version 3.10 by introducing what's known as the match case construct. In other languages like [[JavaScript]] or [[Java]] or C:, this is called the switch statement and it looks something like this. You specify a value to test against and then you can list a variety of statements to execute based upon that value. And this is often a much simpler and more readable way of than writing a whole bunch of if else, if else, if statements, right. In Python, it looks like this instead and it's called the match case construct. instead of switch case. It's also a lot more powerful than the typical switch statement, and that's because you can specify a lot more than just constant values to test against in each of those case conditions. In this chapter, we're going to look at how to use the match case technique to work with a variety of patterns such as literal patterns, which are specific constant values like strings and numbers, capture patterns, where you can assign values to variables as part of the matching process, class patterns where you can match against specific types of classes and objects, sequence patterns that match against sequences values. And then we'll wrap up by looking at pattern guards, which give even more control over how patterns are matched. By the end of this chapter, you'll be able to use pattern matching to replace a whole variety of otherwise complex
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-classes-and-functions/overview-of-pattern-matching?u=76281980&t=93)** if else constructs that are hard to read and not nearly as versatile.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[JavaScript]] (1), [[Java]] (1)
> **CLI Commands:** python (3)
> **Definitions:** known as (1), is called (1)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)

#### [Simple patterns](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=0)** - [Instructor] Let's start with the easiest example of pattern matching and that's just using regular constant values. So I'm going to go ahead and open up the simple_start file here in my editor in chapter five. So I have a variable named x, and the initial value is set to zero. So if I wanted to test the value of x against a variety of possibilities, instead of just using a bunch of if else statements, I can just use match x, and then specify a variety of cases to test against. So I can test case zero, right? And in the case of zero, I'm going to print zero. And then in the case of one, I'll print one and I can also specify a case that matches against anything else. This is the default condition, so I'm going to use case and then the underscore character, which means I don't care what the value is, just match anything that we haven't caught so far, and I'll print out no match. Alright, so let's go ahead and run this. So we'll bring up the terminal and let's go into chapter five and let's run, and we can see that since x is zero, the first case is what executes, and we get the zero string. But we don't need to specify just one data type
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-classes-and-functions/simple-patterns?u=76281980&t=94)** like integers, I can match against any data type. So let's add a few more. I'm going to add a case to look for a literal string called zero, in which case I'll just print the number zero and I'll add a case for None, right, which is null, and in that case I'll just print Nothing. So now let's change x to None and let's run it again. And now you can see the different output. And I'll go ahead and actually put the [[Microsoft Word|word]] Zero in there and let's run again. And now I get the zero value. All right, so you can see I'm getting the different values as I change the value of the variable that I'm matching against. And as we go through this chapter, we'll see some more complex examples, but I think you can already see why I really like this language feature, because it makes the code a lot more concise and easier to read than a whole bunch of if else, if else, if statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** simple_start (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Capture patterns](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=0)** - [Instructor] Sometimes it's useful to work with a subject value as part of the logic inside one of the case blocks. This is called the capture pattern and it lets us assign variables to the subject in order to make this easier and I'll show how this works. So I'm going to go ahead and open up the capture start example. In this example I have some code that asks the user to enter their name and we've already seen how to match against a literal value in a previous video so if the user doesn't enter anything, then this case block will match, right? It'll just say "Hello, anonymous." I can also write some code that will match any value the user entered like this. I can write case name and then I can print "hello" and then their name. But it gets better. I can use what's called an as pattern to assign the value to a new variable and I can specify multiple literal values to check using the or pattern. So for example, I can write case and then I can look for specifically Joe and then the vertical bar for the or operator, or Joseph, right? And then I'll save that as S. And then in that case, I'll just print, "Oh, hi there," and the variable S.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-classes-and-functions/capture-patterns?u=76281980&t=95)** So let's go ahead and run this example in the terminal. And we'll run the capture. So I'll enter my name. So I'm just going to put in nothing, right, and you can see that the anonymous case fires. And then when I run it again and I put in, you know, something like Bill, you can see it says "Hello, Bill." That's this case here where we're capturing the name. And then if I put in something specific like my name, it says, "Oh, hi there." You know, in this case, I typed in Joe, but I can also do the same thing if I type in Joseph specifically. That will also trigger that case. So this really starts to showcase the power of the match case feature because to do something like this using regular if-elif-else would take a lot more code and be a lot harder to read and understand, right? I have to check out names and instance types and see, okay, is it a string? Is it not a string? Whatever, so on. So I think you're starting to see the power of how match case works here.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Class patterns](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=0)** - [Instructor] Up until now, we've seen how to use constant values and some other interesting features of pattern matching. But in this example, we're going to take it a step further. Class patterns allow our code to check to see if a given subject is an instance of a particular type. So I'm going to open up the code for class start here. And you can see I've got some classes defined that represent two dimensional graphic shapes, right? Circle, square, and rectangle. And I've also got some code that creates and initializes a list of shapes. So we can use pattern matching with classes to process each of these shapes very easily. So let's write some code to print the area of each shape. So I'm going to loop over all the shapes and I'll use the match shape. And then I'm going to check for different cases. So I'll first, I'll check for the case of circle and then I need the two parentheses there, right? To match the object. And I'm going to print circle with area and I'll call shape.getarea. And then I'll do the same thing for square and rectangle. So that's going to be square, and this is going to be a rectangle. And we'll copy you and paste.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-classes-and-functions/class-patterns?u=76281980&t=92)** And then I'll add one more case that catches the default in which case I'll simply print out unrecognized shape. And it's got a type of shape. And so notice that I don't need to use the is instance or type function here. I'm just simply comparing directly with the class type. So let's go ahead and run this, bring up the terminal and let's run class. And we can see that we've got all of our different shapes being processed along with the area of each one. So this kind of example really shows how powerful pattern matching can be because in this case we're not comparing values we're looking at actual object types and having to write the same code using only a regular if else construct would be a lot more complex than this. I'd have to check types using is instance and that kind of thing. Here, it's a really straightforward construct of match. And then case, case, case and matched my individual processing. And it's much easier to read with a lot less visual noise.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Sequence patterns](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=0)** - [Instructor] One particularly interesting use of pattern matching is to match against a sequence of values even when you don't know how many values they're going to be. In this example, when we open up sequence start, I have some test data that represents a list of different math operations along with a set of numbers to operate on for that operation, right? So the first one is addition, then we have a multiply, then another addition, and a square root function. So the addition operation can take multiple values, whereas multiply has two and square root has one. So what I want to do is process this list of operations, perform each operation on the given set of numbers and have a result. So, I've already got my for loop with the match case statement, and for each operation I'm going to print the name of the operation and the result. So, let's handle the multiply and square root functions first. To specify a case statement that handles a sequence we just need to add multiple items to the case that indicate how many items we're looking for. So, we know that what we're looking for is the text mul followed by two numbers in the case of the multiply example. So let's do that one first. So I'm going to look for the literal [[Microsoft Word|word]] Mul and then two numbers, num1 and num2. And then I'll just simply say result = num1 times num2. So I'm specifying the literal string, Mul,
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=98)** followed by two expected arguments. Square root is pretty much the same but it only has one argument. So I'll look for Sqrt and the number, and then I'll set result = math.sqrt of the number.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=122)** So in each of these operations, the sequence that we are expecting is a specific string followed by a certain number of arguments. But what about the addition operation? We don't know how many arguments there's going to be. So the way to specify that case is by using the asterisk notation that we use for variable arguments to functions that we learned about a little earlier. So let's have the case for the add, and then I'm going to write *nums. And that's just going to match any number of arguments. And then I'll just simply say, result is equal to, and I'll use the sum function to add up nums. And sum is a built-in [[Python (Programming Language)|python]] function. So this will capture the literal string add followed by any number of numbers, and then we just add them all up. All right, so let's go ahead and run our code. So let's go ahead and bring up the terminal. And we'll go into the start chapter five. And let's run our sequence. And sure enough, in the output, you can see the results. So, let's make a change and see what happens. I'm going to change the multiply operation so that it has three numbers instead of two. But remember, my case statement is only expecting two numbers. So when I run this again you can see that the multiply operation was skipped because that case statement is only going to match
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-classes-and-functions/sequence-patterns?u=76281980&t=217)** if there's the literal string mul followed by exactly two arguments. And since this operation now has three that case doesn't match anymore. So in this example, the multiply and square root numbers are said to be fixed length, while the addition operation is said to be variable length. And we can create a combination fixed and variable length pattern pretty easily. So, let's suppose that we wanted the add operation to always have at least one number to work on. So we can go back and change that to look like this. I'll just simply add num1 before the star. And then change this to be num1 plus the sum of the [[Representational State Transfer (REST)|rest]] of the numbers. So now there has to be at least one number. And so if I run this again, and let's go back and fix the multiply operation as well. Here we go. So let's go ahead and run this. And now you can see that we're getting the same result when we run the code again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Pattern guards](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=0)** - [Instructor] When working with pattern matching we can fine tune and narrow the matching criteria by using something called pattern guards. So let's take a look at how those work. Let's open up guards_start. And we're going to revisit a previous example where we saw how to use pattern matching with classes. So this is essentially the same exercise file where I've defined some classes that represent geometric shapes. And you can see once again, I have classes for circles, square, and rectangle, along with some code that instantiates these classes with different dimensions. So just like in the previous example, we're going to process the list of shapes and get the area of each shape. But what if we wanted to treat the objects differently based upon the values of their properties? This is where pattern guards become really useful. So I'm going to add a condition to check for a circle with a radius that is larger than six. So I'll write case Circle and then inside the parentheses, I'm going to write radius=r. And if we scroll up a little bit, you'll see that circles have a radius property. So I'm going to capture that value in this r variable. And then I'm going to write if r is &gt;= 6. And in that case, what I'm going to do is modify my print statement to write Large Circle with the area the same. So the condition with the If statement here
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=96)** serves as the pattern guard. In this instance, a circle with a radius larger than six will cause this case statement to match. Otherwise the next circle case will match. So let's also add a pattern guard for the rectangle that uses two properties. So I'll just go ahead and copy that statement and put another one in. And in this case I'll capture both the width as w and height as h. And I'll write if w is the same as h, then I'm going to print square rectangle, 'cause it's a special case of a rectangle if it has the same size. Otherwise the rectangle case will match. So let's go ahead and run our code. And you can see that I have some examples here. So I have a circle that's smaller than six and one that's larger than six, and I do have this one rectangle. Well, I haven't added it yet. Let's go ahead and add a rectangle that has the same size. So let's add a rectangle that's got width and height the same. So let's bring up our terminal and let's run this. So [[Python (Programming Language)|python]] guards. Alright, and you can see that when I run this, I've got, let's see, so yeah, so for the circle with radius of nine, we get large circle with the area as opposed to the regular circle output
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=190)** and then we've got regular rectangles, and then we have the square rectangle in the case where both the width and the height are the same. Now, it's important to note that the order in which you define your case conditions is important because the first case that matches the condition is what's going to be chosen. So if I go back to this code and I move the generic circle case up above the one that's checking for the radius, let's watch what happens. You can see that that large circle case no longer fires because now every circle matches the first case and that's where the matching stops, right? The code says, oh, found my match, and it doesn't do any of the [[Representational State Transfer (REST)|rest]] of them. So you can actually get pretty sophisticated with pattern guards. Let's take a look at the next example. Let me shrink this down. So in this example what I have is a list of various types of data. I've got an uppercase string, an integer, a mixed case string, a boolean true value, and the none value. So I'm going to uncomment this example and let's comment out the previous example just so we don't have all this output to look at. All right, so let's write some cases that use pattern guards along with types. So first I'm going to add a pattern guard that checks for all upper case. So I'm going to write a case that looks for a string object
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=286)** and I'm going to capture that string as s. And then my pattern guard is going to say if s.isupper. And if I find that I'm going to print out f and I'm going to print out the string. Actually, it's s, not d, there we go. I'm going to print out, oh no it is d, sorry, that's the subject. So I'll print out that D is an Upper case string, right? So that's what we're matching on right there. And then I'll look for just a regular string. So case string by itself. And then I'll print out and this is going to be Not an upper case string. So then we'll check for the boolean case. And again, this is where order is important because Python treats boolean values as integers. So this has to come before the integer check. So let's write case bool and I'll print out that this is a boolean and then we'll check for the integer
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-classes-and-functions/pattern-guards?u=76281980&t=362)** and we'll print that that is an Integer value. And then we'll leave the last case as it is. All right, so let's go ahead and run this and let's get rid of that blank line. All right, so it's clear and let's run. And when I run this, you can see that each of my case statements with the type based pattern guards, are producing the expected results. We were even able to detect if a string was all uppercase or not. So that should give you an idea of just how powerful and versatile pattern matching can be especially when you combine it with pattern guards. So I would suggest maybe taking a few minutes here and trying out some of your own experiments. So for example, try this. How would you write a pattern guard that detected if a list of numbers had an odd number in it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2), is an  (2)
> **CLI Commands:** python (2), find (1)
> **Analogies:** just like (1), for example (1)
> **Code Identifiers:** guards_start (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)

#### [Solution: Patterns](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to write a program to process the orders for a dry cleaning operation, and we needed to use pattern matching in order to do that. So let's review my code. All right, so my code uses a for loop to process each of the items in the order contents list. And you can see that there are three different individual order groups. So I've used pattern matching to match each order type in the list. So let's start by looking at dry cleaning orders. So for dry cleaning orders, I'm using the OR pattern to look for these specific strings shirt, pants, jacket, or dress. And I have that argument as garment. And I'm also looking for three additional elements, the size, starch, and same-day variables. So this pattern works by relying on the fact that each dry cleaning order contains four items. So inside the logic for this case, right, we have the base amount that we add to the total price, and then we adjust based upon whether we want starch and same-day service. And those were, you know, $2 for starch and 10 for same day. For the wash-and-fold case, we have a string description. Okay, so here we have my case. and I've got a string coming in as the description as well as the weight of the order of all the clothes. And then we apply the formula for the price, right?
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-classes-and-functions/solution-patterns-24356118?u=76281980&t=96)** So if the weight is more than 15, then we have a little bit of a discount. Otherwise we just calculate the weight times 4.95, and that's how we handle the wash-and-fold case. And then in the last case for blankets, again, I'm looking specifically for comforter or cover as the blanket variable, whether or not it's going to be dry cleaned, and the size. So each of these is going to be a flat 25 fee, and if dry cleaning is needed, then we increase the price by five. And then I also have a default case where I print an error message in case one of the orders was in the wrong format. And then I return the total price rounded to two decimal places. All right, so let's go ahead and look at the test code. So here in the test order, the first three are dry cleaning. Then we have a blankets case. Then we've got two wash-and-folds followed by, looks like two more dry cleaning, some wash-and-fold, a comforter, and then another dry cleaning. So let's go ahead and test our code, and sure enough, the cost of this order was 389.3. So go ahead and feel free to try out some different values and patterns in your test code here. But in the meantime, you can see that's my solution to the challenge using pattern matching. So go ahead and take my code and compare it to yours.

> [!info]- Semantic Content
>
> **Versions:** 4.95 (1), 389.3 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-classes-and-functions/next-steps?u=76281980&t=0)** - [Joe] All right, well, that brings us to the end of the course. I hope you enjoyed learning along with me about some of [[Python (Programming Language)|Python]]'s more advanced language features, and now that you've seen what the Python language is capable of, maybe you might want to check out some ways you can apply your newfound skills. I would suggest maybe taking a look at learning Python GUI programming to see how you can build user interfaces with Python, or maybe check out [[Python Object-Oriented Programming]] to learn more about building Python programs at scale. Whatever you choose to do next, don't forget to keep your Python skills up to date by reading up on the [python.org](https://python.org) website. And feel free to connect with me on [[LinkedIn]]. I hope to see you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[LinkedIn]] (1)
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