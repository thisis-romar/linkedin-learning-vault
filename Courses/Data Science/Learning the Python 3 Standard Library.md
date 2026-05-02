---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-the-python-3-standard-library
url: "https://www.linkedin.com/learning/learning-the-python-3-standard-library"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 7/23/2024
learners: 107193
skills:
  - Python (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGa9J7SjcoqxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720644234693?e=2147483647&amp;v=beta&amp;t=_Pi99_2J4YOdxDLuQBf8KTNTFrMRq-8g4LecKImUSac"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started with Python]]'
prev_courses:
  - '[[Python Object-Oriented Programming]]'
next_courses:
  - '[[Programming Foundations- Data Structures]]'
path_nav: '[{"path":"Getting Started with Python","position":4,"total":8,"prev":"Python Object-Oriented Programming","next":"Programming Foundations- Data Structures"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20the%20Python%203%20Standard%20Library.md)

![Learning the Python 3 Standard Library](https://media.licdn.com/dms/image/v2/D560DAQGa9J7SjcoqxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720644234693?e=2147483647&amp;v=beta&amp;t=_Pi99_2J4YOdxDLuQBf8KTNTFrMRq-8g4LecKImUSac)

# Learning the Python 3 Standard Library

> Python libraries can cut your development time and reduce your frustration with coding. In this Python 3 course, follow Kathryn Hodge as she walks through the Python standard library. Discover how familiarizing yourself with its facilities can make writing code in this concise, elegant language a little easier. Familiarize yourself with the library's built-in functions, math modules, and input and

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-python-3-standard-library) | 2h 16m | Intermediate | 107K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Make writing Python easier with Python standard libraries](#make-writing-python-easier-with-python-standard-libraries)
  - [What you need to know](#what-you-need-to-know)
  - [Using exercise files](#using-exercise-files)
  - [How to use CoderPad](#how-to-use-coderpad)
  - [Python standard library introduction](#python-standard-library-introduction)
- [**1. Python: What's Built In?**](#1-python-whats-built-in) (9 videos)
  - [Logical operators: And, or, not](#logical-operators-and-or-not)
  - [Comparison operators](#comparison-operators)
  - [Calculating length](#calculating-length)
  - [Range and list](#range-and-list)
  - [Min and max](#min-and-max)
  - [Rounding, absolute value, and exponents](#rounding-absolute-value-and-exponents)
  - [Sorted function](#sorted-function)
  - [Type functions](#type-functions)
  - [Solution: Count valid numbers](#solution-count-valid-numbers)
- [**2. Python: Math**](#2-python-math) (7 videos)
  - [Trigonometry, ceiling, floor, and constants](#trigonometry-ceiling-floor-and-constants)
  - [Factorial, square root, and GCD](#factorial-square-root-and-gcd)
  - [Python random module](#python-random-module)
  - [Calculating statistics with Python](#calculating-statistics-with-python)
  - [Iterators with itertools: Infinite processes](#iterators-with-itertools-infinite-processes)
  - [Iterators with itertools: Permutations and combinations](#iterators-with-itertools-permutations-and-combinations)
  - [Solution: Calculate hypotenuse](#solution-calculate-hypotenuse)
- [**3. Python Input/Output**](#3-python-inputoutput) (8 videos)
  - [Command-line arguments](#command-line-arguments)
  - [Input and output](#input-and-output)
  - [Files and file writing](#files-and-file-writing)
  - [File seeking in Python](#file-seeking-in-python)
  - [Iterative files](#iterative-files)
  - [Tempfile module](#tempfile-module)
  - [Manipulate zip files in Python](#manipulate-zip-files-in-python)
  - [Solution: Count words in a file](#solution-count-words-in-a-file)
- [**4. Python: Date and Time, HTML Parsing, and HTTP**](#4-python-date-and-time-html-parsing-and-http) (8 videos)
  - [Getting the current time with Python](#getting-the-current-time-with-python)
  - [Formatting dates and times in Python with datetime](#formatting-dates-and-times-in-python-with-datetime)
  - [Calculating future times and Python calendar module](#calculating-future-times-and-python-calendar-module)
  - [Create a timer with the Python time module](#create-a-timer-with-the-python-time-module)
  - [Python HTML parser module](#python-html-parser-module)
  - [Text wrap module](#text-wrap-module)
  - [Python HTTP package and urllib and JSON modules](#python-http-package-and-urllib-and-json-modules)
  - [Solution: Add Fractions with Fraction Module](#solution-add-fractions-with-fraction-module)
- [**Conclusion**](#conclusion) (1 videos)
  - [Add these built-in functions to your own applications](#add-these-built-in-functions-to-your-own-applications)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Make writing Python easier with Python standard libraries](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980&t=0)** - Sometimes we try to create these complex [[Algorithms]] without realizing how much is already built into the program we're using.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980&t=7)** [[Python (Programming Language)|Python]] is known for being concise and elegant, and in this course, I'm going to show you how to make writing Python code a little easier.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980&t=15)** Hi, I'm Kathryn Hodge and I'm a software engineer who's super passionate about computer science.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980&t=20)** In Python Standard Libraries, we'll dive into the built-in functions, math modules, input/output modules, and even get information from the internet with the HTTP module.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/make-writing-python-easier-with-python-standard-libraries?u=76281980&t=30)** I'm really excited to share this with you, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Algorithms]] (1)
> **CLI Commands:** python (3), make (1)
> **Env Vars:** http (1)
> **Speakers:** - sometimes (1)

#### [What you need to know](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=0)** - [Instructor] Here's what you should know for the course.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=2)** You should know how to use [[Control Flow]] statements like if-else statements, for loops, while loops.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=7)** You should be comfortable with these and using them in your applications.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=11)** You should also be comfortable with lists, tuples, dictionaries, and other basic [[Data Structures]].
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=17)** For some of the things built into the [[Python (Programming Language)|Python]] standard library, it'll be useful to know some basic mathematical and statistical concepts such as minimum, maximum, absolute value, range.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=27)** And it's also important that you know how to run your Python files.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=31)** And so you can either do it from the command line or your own IDE.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=34)** You should just know how you're going to run your Python file once we start coding.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=39)** For this course, I'm going to be using PyCharm, but you can really use any editor that's out there.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=44)** If you want to download PyCharm, you can download it down below.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=49)** In this course, I'm going to have some print statements that are already in the code, but they're just there to keep us organized and on track and let you know where the course is going.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=58)** Here are some resources.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=60)** It might be helpful to first take Python 3 Essential Training, but it's not necessary if you already feel comfortable with Python 3.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=68)** There's also a link to the documentation if you want any specifics on the modules or built-in functions that we're going to be using.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=75)** We are going to be using a variety of tools with different examples to show the breadth of what the standard library can do for you.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/what-you-need-to-know-14505436?u=76281980&t=83)** So feel free to bounce around to the tools that interest you most.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Control Flow]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (5)
> **Tools:** pycharm (2), command line (1)
> **Versions:** python 3 (2)
> **Env Vars:** ide (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using exercise files](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=0)** - [Instructor] You have access to the same files that I'll be using here in the course.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=4)** Simply follow the link on the main course page to download them.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=7)** I'm showing you them here on the desktop, but you can place them anywhere you'd like.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=12)** Inside of the exercise files folder, you'll find a folder for each chapter of the course where I showed you code in my code editor.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=19)** And inside of that, you'll find the individual files that I used with the start and finish dates.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/using-exercise-files-14501465?u=76281980&t=25)** Because these are [[Python (Programming Language)|Python]] files, you can open them with any code editor you'd like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=8)** We recommend using a desktop browser for the best experience, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=15)** The code challenge has four main areas, instructions, a console for output, a code editor for your answer in the top right, and another code editor where you can see how your code is used.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=29)** You can use these drag handles to allocate space as you'd like.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=33)** Let's complete this coding challenge.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=36)** There are comments in the starting code showing you where to put your solution.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=40)** When you click the Test My Code button, you'll see a message indicating whether your code returned the correct result.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=47)** Let's change the code to something that fails.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=52)** We'll run it again, and in the output, we get a failure message.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=56)** Now, if you're stuck, there are ways you can ask for help.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=60)** The show_expected_results and show_hints variables determine whether you can see the expected results and any hints.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=68)** You can change them to true to control the output.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=71)** Let's run it again.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=73)** The expected result is 19 and we get a hint to the solution.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=77)** The code editor in the lower right shows how your solution is used.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=82)** You can change this code to experiment with different test cases.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=86)** Let's change 19 to 21.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=89)** We'll run it again.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=91)** The expected results is now 21.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/how-to-use-coderpad?u=76281980&t=93)** When you've finished each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** show_expected_results (1), show_hints (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Python standard library introduction](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=0)** - [Instructor] Standard Libraries are available for a variety of languages, including [[Java]], Objective-C, C++, so it's important to know what exactly a Standard Library is.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=10)** So a Standard Library is a library that can be used on any machine where you have an application using the specific language.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=17)** And so here, our specific language will be [[Python (Programming Language)|Python]] and the Standard Libraries are going to have a bunch of functions that we can use in our code.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=25)** And so, the Python Standard Library has two things, built-in functions and built-in, but imported modules.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=32)** And so, built-in functions, you've probably already used a lot of these before, but len, min, max, a lot of these, you just kind of call and they work.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=41)** And then, we're also going to have built-in imported modules.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=45)** In previous projects, you might've used math, which is an imported module and you might've done something like math.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=51)** and then a function name that you wanted to use.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=54)** And so, because you had to do math., math was that important module and you probably had an import statement at the top of your code.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=62)** And so, these are the two things that this course is going to focus on.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=67)** This Python Standard Library is also going to be available on any machine.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=71)** And so, just because you're using it on a Mac now, you would be able to send your code and use it on a PC and it would work there as well.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=79)** How is this different from an External Library?
>
> **[1:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=82)** Well, a Standard Library is built-in.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=84)** An External Library is something you have to download separately from the internet.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=88)** And usually, you're doing this to get some sort of special functionality.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=92)** And so, you can think of this as like your kitchen.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=94)** You have things that are built-in, kind of, or that you always have, and so, this would be like your milk, your eggs.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=100)** These are things you probably use every day.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=102)** That's kind of like the methods and functions that are built-into our Python Standard Library.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=107)** Our External Libraries are things you might have to go to the store to get, so special spices you might need for a certain dish.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=114)** Then you have to get in your car and go to the store.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=116)** And that's like our External Library.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=118)** And so, External Libraries are beyond the scope of this course.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-standard-library-introduction-14503483?u=76281980&t=121)** In this course, we'll be focusing on what's inside your kitchen, the Python Standard Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Java]] (1)
> **CLI Commands:** python (5)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 1. Python: What's Built In?

[↑ Back to Table of Contents](#table-of-contents)

#### [Logical operators: And, or, not](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=0)** - [Woman] Before we get into logical operators, let's review what a Boolean is.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=4)** A Boolean is a binary variable that has two possible values.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=8)** And in this case, it's true or false.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=11)** This is really important to know because you're going to be using Boolean a lot in your future programming.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=17)** In this example, we are going to be using the weather.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=19)** So we are going to see if it's raining or not.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=21)** If it's sunny or not.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=23)** And based on those values, we're going to do stuff.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=25)** Here, we're going to have a variable.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=27)** It's going to be called, isRaining.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=29)** And this will hold a true or false value based on whether it's raining or not.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=33)** In this case, we are going to say, it's raining.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=35)** So we'll have that be true.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=37)** Then we're going to create another variable, it's going to be called isSunny.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=40)** And we're going to say, it's not sunny.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=42)** And the fact that it's raining.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=45)** And so these are Boolean values, but what's really special about them is the fact we can use logical operators on them.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=52)** A logical operator takes one or more Boolean values and operates on them.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=57)** And in this case, and, or, and not are the main logical operators that we are going to be working with.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=63)** And they're super important to know cause they can condense your code.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=67)** And so for the first logical operator, we are going to work with and.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=71)** And in this case, we're going to be using it in the context of an if statement.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=75)** So we're going to say, if isRaining and isSunny, then we're going to print out "We might see a rainbow".
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=85)** And so what does this all mean?
>
> **[1:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=87)** Well, and is our operator, and we're taking two Boolean values, isRaining, and isSunny.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=93)** And this is kind of like a little truth table that allows us to see what will happen and what will the outcome be based on what our Boolean variables evaluate to.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=103)** And so in this case, if our first Boolean variable is true, and so as our second, then this entire phrase or expression we'll evaluate to true.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=111)** If at least one of them is false, and so that could be the first or the second variable, or if they're both false, then the entire thing evaluates to false.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=119)** And in that case, since this is an if statement, our print block will not run.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=124)** And so isRaining and isSunny have to be true in order for our print statement to run.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=129)** And so let's go ahead and run it.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=132)** And we see it doesn't work because isSunny is false, but let's go ahead and change this to true.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=139)** And we see, we might see a rainbow because both isRaining and isSunny are true.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=145)** Moving onto the or logical operator.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=148)** We can use this again in an if statement, and we'll say, if isRaining or isSunny, we're going to go ahead and print, "It might be rainy or it might be sunny".
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=161)** And so in this case, if they're both true, we evaluate to true.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=165)** If one of them is false, that's still okay because one of them is true.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=169)** For or, only one of them has to be true in order for the entire expression to evaluate to true.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=175)** But if both of them are false, meaning none of them are true, then the entire expression also gets evaluated to false and we will not run this print block.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=186)** And so right now, they're both true, but let's say it's not raining.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=192)** We'll run.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=193)** We see it might be rainy or it might be sunny because at least one of these is true.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=198)** We don't know which is true because in the context of an or statement, we just want to see if one of them is true.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=204)** It doesn't matter which one.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=207)** Our last logical operator will be not.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=210)** And this will return the reverse of what you give it.
>
> **[3:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=213)** And so it is also going to take a Boolean variable.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=216)** And in this case, we'll say raining.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=218)** And so if it isRaining is true, then this entire expression will return false.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=224)** If isRaining is false, then this entire expression will return true.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=228)** And in this case, the only way that this, if block gets run, is if isRaining is false.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=234)** Because if isRaining is false, then the entire expression returns true and the print block is run.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=240)** And so that means "It must be raining", because isRaining would be false in order for the whole expression to return true with the not in there.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=251)** Let's go through one last example that combines everything we've been talking about.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=256)** So we'll start off by creating a variable called ages, and inside of ages, we are going to have some numbers that represent ages.
>
> **[4:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=263)** And so we'll have 12, 18, 39, 87, seven, and two.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=272)** And then we're going to have a for loop that iterates through all of these ages.
>
> **[4:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=276)** And so we'll have for, and what iterates means is it's basically going to go through each data point inside of this data structure here called ages.
>
> **[4:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=285)** And so we'll have for age in ages.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=288)** And so for each data point each age inside of this list, we're going to go through it.
>
> **[4:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=293)** And for each age, we want to see if that age represents an adult.
>
> **[4:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=298)** And so we're going to have age is greater than 17.
>
> **[5:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=302)** If this happens to be true, then isAdult would be true because the person is an adult if their age is greater than 17, meaning it's 18 or higher.
>
> **[5:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=312)** If the person is seven, then they are not an adult and age is greater than 17 would return false.
>
> **[5:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=319)** isAdult would return false as well.
>
> **[5:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=322)** In the next line, we'll use a logical operator, not, and we'll say, if not, isAdult, meaning the person is not an adult, then we'll go ahead and print "Being" + and we'll convert this age to a string so we can print it out.
>
> **[5:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=339)** "Does not make you an adult".
>
> **[5:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=343)** And so we're saying being two does not make you an adult, or being 12 does not make you an adult.
>
> **[5:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=348)** So let's go ahead and run this code.
>
> **[5:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=351)** And here we go, we have all of these ages that are not adult ages saying, "Being 12, doesn't make you an adult".
>
> **[5:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=358)** So that's how you can use not in a real life example.
>
> **[6:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/logical-operators-and-or-not-14504431?u=76281980&t=361)** So in the next video, we'll talk more about how these comparison operators work.

> [!info]- Semantic Content
>
> **Code Identifiers:** israining (11), issunny (7), isadult (3)
> **CLI Commands:** make (4)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** in the next (2)
> **Analogies:** kind of like (1)
> **Speakers:** - [woman] (1)

#### [Comparison operators](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=0)** - Let's review some comparison operators.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=2)** And so a comparison operator, also called a relational operator, determines the equality or difference between values.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=9)** The whole expression ultimately returns a Boolean value.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=13)** So some of this stuff you may have heard of before, but basically comparison operators are kind of like greater than, equal to, or less than.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=21)** Some examples of comparison operators are, as you see here, you know, five is equal to five, or five is less than 10, and this is the stuff we'll be using in our code.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=32)** So let's work with some comparison operators in code.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=35)** And so we could write a print statement that uses the less than operator, and we'll go 10 is less than 75.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=42)** And this whole thing will either return true or false, depending on if 10 is actually less than 75.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=49)** So if we run it here, this is true because 10 is less than 75.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=53)** We could also check if 75 is less than 10, this is false, and so this whole print statement is going to return false.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=61)** We could also add an if statement in here.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=62)** We could say if 10 is less than 75, we'll go ahead and print out the bigger number is bigger, because that's what's happening here.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=73)** And so we have the bigger number is bigger.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=75)** Now let's create some variables.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=77)** We could have a variable called kitten, have it equal 10, which will represent its weight in pounds.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=83)** And then we'll have tiger, which equals 75.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=86)** Then we'll see if the kitten is less than the tiger.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=90)** We'll go ahead and print out the kitten weighs less than the tiger, because this is in fact true if kitten and tiger are representing their weight.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=102)** Running it, we see this statement ends up getting printed out because this statement is true.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=108)** Now we can combine these comparison operators with the logical operators we learned in the last video.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=113)** So we can create a new variable called mouse, and we'll set it equal to one, representing its weight.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=120)** And then we could say, if the mouse weighs less than the kitten and the mouse weighs less than the tiger, then we're going to go ahead and print out the mouse weighs the least, because it is in fact, you know, less than the weight of the kitten, and less than the weight of the tiger.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=139)** And so running this, we see the mouse weighs the least because one is less than 10 and 75.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=147)** Again, this is a built-in function, so we can also apply it to other types of input that are not numbers.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=153)** And so scrolling down here, we could apply it to a Boolean.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=156)** And so we could say print false is greater than true.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=161)** And if we run this, it's going to return false.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=163)** And that's because false evaluates to zero, true evaluates to one.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=168)** So it's really like saying is zero greater than one, and that is not true, and so that is why we get false in the output.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=176)** We can also do this with strings, say we write, print Jennifer is greater than Jenny and run this.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=185)** This is actually going to return false, although Jennifer has more letters than Jenny, and that's because for this comparison operator, it's looking for the first mismatched letter.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=195)** And so here, it's I and Y, and then between these two letters it's looking to see which has a greater value.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=202)** And so in this case, since we're mapping it to one to 26, Y amounts to 25 and I amounts to nine, and therefore nine is not greater than 25, and so this whole expression is false.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=216)** We can also do this with characters, we could say prints A is less than or equal to B.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=224)** And this will return true because A would map to one and B would map to two and one is less than or equal to two.
>
> **[3:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/comparison-operators-14507480?u=76281980&t=233)** Comparison operators are very helpful if you need to know if one value is less than, equal to, or greater than another value in a piece of code.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### [Calculating length](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=0)** - [Instructor] Let's figure out how to use the len function.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=3)** Len takes one input, a list, and it outputs a whole number representing the length of that list.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=9)** Lists can take many different formats.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=11)** Let's consider strings to start.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=14)** So say we have a variable called "first name," and we'll make the first name be "Taylor," have that value.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=20)** And then we'll go ahead and use the len function, and we'll do a print statement, and we'll say len, first name, and this will give us the length of the first name.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=30)** And for strings length means the number of characters.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=33)** Here we get six because "Taylor" has six characters in it.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=38)** We can also use this for the last name.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=40)** And so we'll say last name equals "[[Swift (Programming Language)|Swift]]," then we'll go "print, len," again printing out the length of the last name here.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=50)** And "Swift" has five characters and that's why we get five characters in the output.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=55)** And so why does this work for strings?
>
> **[0:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=57)** Well, strings have a special property.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=60)** We go "firstName.len," we see that it has the length property.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=65)** And so because it has the length property, we can use the len built-in function.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=71)** Now, since this is a built-in function, we can use different types of data as input.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=75)** And so let's try it for official lists in [[Python (Programming Language)|Python]].
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=79)** Create another variable called "ages," and we'll just have some ages in here.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=83)** 12, 10, just some random ages there.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=87)** And we can print out the length of this list.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=89)** We could go "print len ages" and it will print out how many items are in the list.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=95)** So in this case, it's five items.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=97)** Now, why would this be helpful?
>
> **[1:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=99)** Well, let's create another variable, and we'll say I equals zero.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=102)** And now we can actually iterate through this list using a range.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=106)** And so we could say "for i in range zero len ages."
>
> **[1:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=114)** We can go ahead and do something.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=116)** And so in this case, let's go ahead and print out the ages at index "i."
>
> **[2:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=122)** What's happening here is we have this variable called "i," and it's going to change its value to zero, one, two, three, four, until we hit the end of the length of ages.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=133)** And for each data point, it's going to go ahead and print it out here, accessing ages, and then the appropriate index.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=141)** So if we go ahead and run this, it prints out each individual age.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=145)** We have 0, 11, 43, all of these ages.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=149)** We can also do this for lists that do not contain numbers.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=153)** And so say we want to print out the length of a list that has "Bob, Mary, and Sam."
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=161)** We could do this.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=162)** It has three items, and we get three.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=165)** And notice it doesn't really take into account how many letters are in each input.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=170)** You'd have to call len on each individual input if you wanted that.
>
> **[2:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=174)** But it gives us the length of the entire data structure here, which is a list that has three items.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=179)** And we can also use len on a dictionary.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=182)** So it isn't just for strings and lists, it's really for any iterable object.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=186)** And so here we could have a candy collection, and we could say, "Bob has 10 candies," we could say, "Mary has seven candies," and we could say, "Sam has 18 candies," and we could go ahead and print out the length of the candy collection.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=206)** And when we print this out, we will also get three because there's three items in our dictionary.
>
> **[3:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=212)** And then based on the fact that there's three items, we could go ahead and access each item appropriately.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-length-14507490?u=76281980&t=218)** Knowing how to get the length of a string list and dictionary will be very helpful in your later projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** firstname (1)
> **Speakers:** - [instructor] (1)

#### [Range and list](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=0)** - [Instructor] Let's learn how to use the range function.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=2)** The range function takes one whole number as input.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=6)** And so, here it's x, and it's going to output a range instance that holds all the numbers counting by one between zero and the only input.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=14)** Say x had the value 15, then rangex would output the value, which is a range that holds all the numbers counting by one between zero and 14 because that's 15 numbers counting from zero all the way to 14.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=30)** And there are other optional parameters that we're going to learn about later.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=33)** Basically, you can set a starting point for the range and you can also change how much it counts by, so it could count by one, by three, by five, whatever you would like.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=43)** So here, we'll create a variable called numbered contestants, and it's going to have the value of range 30.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=51)** Range 30 will return a range instance that includes all the numbers from zero to 29 because zero to 29 would be 30 numbers.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=61)** Now to see that this range instance is actually being created, we have to learn about another function called list.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=68)** The list function takes one input, a tuple, and outputs a list containing the same data as a tuple.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=74)** So this function basically kind of rearranges our data and it's how we're going to be able to list out the numbers in our range instance.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=82)** So here, we can do something like print list numbered contestants because numberedContestants has our range instance value.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=91)** And it's going to list out all of these numbers because these are our numberedContestants.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=96)** And so we have zero, one, two, all the way across, all the way to 29 because zero to 29 is 30 values.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=102)** And so, each of our contestants have a number.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=105)** Furthermore, we could use a for loop and say for the contestant, or C, in list numbered contestants.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=116)** We're going to print the contestant with their contestant number.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=120)** So here, converting that contestant number to a string is here.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=128)** So this is a very easy way to just get a string of numbers super quickly.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=133)** Running it here, we get all of these contestant numbers just generated for us, very easy.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=139)** Going back to our range function, we can add some optional parameters in order to format our range instance in a different way.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=147)** Here, we could create a variable called luckyWinners and have it be a range that goes from seven to 30 and counts by five.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=158)** And so here, our range instance is going to go from seven and then to 29, because we're not going to include 30, and we're going to count by five for each number.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=168)** So here, we were counting by ones.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=170)** Now we're going to count by fives.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=172)** So now we can go ahead and use the list function to enumerate all of these out and we'll print it out as well, and so, we'll list our lucky winners here.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=181)** And there we go.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=182)** So now we have it starting and including seven and then counting by five until we reach that endpoint of 30.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=189)** And then once we hit 30, we just do not list anymore.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/range-and-list-14506480?u=76281980&t=193)** Range and lists are super useful if you need to create an ordered list of numbers quickly.

> [!info]- Semantic Content
>
> **Code Identifiers:** numberedcontestants (2), luckywinners (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Min and max](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=0)** - [Instructor] So what do we know about minimum and maximum?
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=3)** Well, minimum is usually the least item or the lowest item and maximum is usually the greatest item.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=9)** So say you're given zero, five, eight while your lowest item would be zero and your greatest eight.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=15)** Well, we can do this exact thing with [[Python (Programming Language)|Python]].
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=19)** So let's say we want to calculate the winner of a given game.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=23)** While we can create a variable called playerOneScore, and say it's 10, and then, we'll create another variable called playerTwo Score and set that equal to four.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=34)** Now to calculate which player actually won, say this is golf, and so, we want the minimum score.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=40)** We could do print minimum playerOneScore and then playerTwoScore.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=47)** And when we run this, we see the least score and the minimum score is four.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=52)** And that is associated with playerTwo.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=54)** And so, playerTwo would be the winner.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=57)** You can do this with any number of numbers, and so, you could do minimum of say zero, 12, negative 19, and you can add a bunch of other numbers here as long as they're separated by those commas.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=69)** And so, if we go ahead and print this out, we get negative 19, which is great.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=74)** Now since this is a built-in function, we don't have to just use numbers.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=78)** We can use strings and characters as well.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=81)** So we could go print min Kathryn and Katie.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=87)** And in a previous video, we actually did something similar to this where we compared two types of strings, but using a comparison operator, so the less than, greater than, equal to, and the value of a string was associated with what letters were in it, A to Z, one to 26, and we're going to be doing the same thing here.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=107)** And so, when we print this out, we get Kathryn as the minimum because H comes before I in the alphabet.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=114)** So what's the advantage of using minimum?
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=117)** Well, consider if you have a big group of strings.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=120)** Well, you could easily see which item comes first alphabetically.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=124)** Kathryn comes before Katie because Kathryn comes first in the alphabet and Kathryn is the minimum of Kathryn and Katie.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=131)** You could also do this with strings that do not start with the same letter.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=134)** You could do the minimum of Angela and Bob.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=138)** And here, Angela will come first in the alphabet.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=141)** And so, Angela is what is returned here because it is the minimum of Angela and Bob.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=147)** Now this is just one function, minimum, but we have another function we can use called max.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=152)** And so, we could also print the maximum of our playerOneScore and our playerTwoScore to see which person got the most points in a game.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=162)** And here, it'd be playerOne 'cause playerOne has 10 and 10 is greater than four, and it's the max of this group.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=169)** Now we can add another player and we could say playerThreeScore equals 14 and we'll print the max, and we'll put them in a different order because order of input is not going to matter here because it's just looking at what's the maximum of this entire group.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=186)** And so, we'll say playerTwoScore here and then playerOneScore.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=191)** Running that, we get 14 because playerThreeScore is the greatest of these three inputs.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=199)** Running this again with strings, we could do print the max again of Kathryn and Katie and Katie will be returned because Katie will be the closest to the end of the alphabet, which in this case stands for the maximum.
>
> **[3:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=215)** It is important to remember that both the min and max functions are built in.
>
> **[3:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=220)** And so, you're not using some other imported module to use them, and because of this, you can use different types of input for these functions.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/min-and-max-14506485?u=76281980&t=228)** The min and max function are very handy tools and you will use them in your later programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** playeronescore (4), playertwo (3), playertwoscore (3), playerone (2), playerthreescore (2)
> **Definitions:** is a  (1), stands for (1)
> **CLI Commands:** python (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Rounding, absolute value, and exponents](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=0)** - Let's talk about the round function.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=2)** The round function takes one hole or decimal number and outputs an integer that represents that same number, but rounded up or down depending on its value.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=11)** So if the first decimal digit is four or below.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=14)** The number will be rounded down, or if the first decimal digit is five or above, then the number will be rounded up.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=21)** This may be different on your computer, depending on what version of [[Python (Programming Language)|Python]] you're using.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=27)** Going into the code, let's say we create a variable called my GPA and we're going to have it equal 3.6.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=35)** Now, what if we wanted to round our GPA up?
>
> **[0:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=38)** Well, we could do this using the round function.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=40)** And so we could go print, round my GPA, and then we'll go ahead and print it out, and we get four.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=48)** If only this were true.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=49)** Now we can also use this round function with ingredients.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=52)** And so say we have amount of salt equals 1.4.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=58)** And so say this represents pinches of salt, but what is a 0.4 pinch of salt?
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=65)** Well, we'd want to round down for this.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=67)** And so you could go print, round amount of salt, and this will equal one because it's four or below for this first decimal value.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=77)** And this is five and above for this decimal value, because six is above five.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=82)** Now this round function really comes in handy because for each of your ingredients, you could run the round function on them.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=89)** We can also use this function for negative numbers.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=91)** Say we have a variable, apple, representing Apple stock, and say it went down 1.2%, and so we could go negative 1.2.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=101)** While we'd want to round this so we have a better idea of what actually happened, and we're going to go print, round apple.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=108)** And this is going to revert to negative one because that's what this number is closest to.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=113)** We could also do this with [[Google]].
>
> **[1:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=115)** We could say Google equals -1.6%, and we could print out this rounded value.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=121)** And this will round to negative two.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=124)** Another function we can use is called ABS.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=127)** ABS stands for absolute value.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=129)** So this function takes a whole number or a decimal number, and its output is going to be a number representing the absolute value of this inputted number.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=138)** And so if this input is a positive number, then the same number will be returned.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=142)** And if this number is a negative number, then a positive version of the input will be returned.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=149)** And so in the code, you could say your favorite restaurant is 13 miles away, south.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=154)** And so you could represent this with distance away and have it be negative 13 miles because it's south.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=162)** Well, we'd want the absolute value of this because we'd want to see how far is it actually going to be to get there, not necessarily what direction it is in.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=170)** So we could do a print, absolute value, distance away.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=176)** And this is going to return a positive 13 because it's 13 miles away, we don't want negative 13 miles away because that doesn't make sense.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=185)** We could also do this with trees and roots.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=187)** Say you have a tree that's a fairly tall tree and it has its roots 2.5 feet into the ground.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=194)** Well you could do something like length of root in ground for your tree and say it's negative 2.5, because that's how far underground it is.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=206)** Then we'll go ahead and print out the absolute value of this, length of root and ground, and we will get a positive 2.5.
>
> **[3:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=215)** Notice it keeps the decimal point there, it's not going to do any rounding for you.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=219)** If you want that, you'd have to use the round function.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=223)** The last function we're going to talk about is the Pow function, and this is for exponentiation.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=228)** And so the input can be two whole numbers or two decimal numbers, and the first input is going to be a base, and the second input is going to be an exponent.
>
> **[3:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=237)** And the output from all of this is going to be the number that results from the exponentiation of these two numbers.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=243)** Say you have three to the power of two.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=246)** Well, three would be your first input, two would be your second input, with three being the base, two being the exponent, and then the result of that would be nine, because three times three equals nine.
>
> **[4:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=258)** In the code, we can use the example of flipping a coin.
>
> **[4:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=262)** We can say that the chance of you flipping a coin and it landing on tails would be 50%, so 0.5.
>
> **[4:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=269)** And say we want to see the chances of rolling a tails three times in a row.
>
> **[4:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=274)** So then we could do a variable called In a Row, Tails.
>
> **[4:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=278)** And we want to see what the chance of rolling three in a row is.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=282)** And so we could go print, pow, we'll have Chance of Tails.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=289)** So we have a 50% chance, and we want to see what the chance of rolling three in a row is.
>
> **[4:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=295)** And so this is how it would be laid out, we would have 0.5 to the power of three, and we get 0.125, which is a one in eight chance of getting tales three times in a row.
>
> **[5:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=308)** We could do the same thing with rolling a dice.
>
> **[5:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=310)** And so we could have a chance of getting a one.
>
> **[5:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=313)** And so if there are six sides to this dice, we would do a 0.167 because that's one in six.
>
> **[5:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=320)** And say we want to see what the chances are of rolling a one twice.
>
> **[5:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=324)** Well we could put two here, and we could do the same thing we did above with print, pow, we'll have the chance of getting a one, and then what are our chances of getting that two times in a row, print it out.
>
> **[5:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=338)** And we get this pretty low number because getting a one twice is pretty rare.
>
> **[5:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=344)** Now these functions can be very helpful if you need to perform some simple math computations in your code that you don't want to fully write out yourself.
>
> **[5:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=352)** That's the value of the Python standard library.
>
> **[5:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=355)** It has standardized functions that we can use to solve problems in our code.
>
> **[5:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/rounding-absolute-value-and-exponents-14505437?u=76281980&t=359)** However, it is important to remember that rounding absolute value and exponentiation are built into Python and are not part of the math module, which we'll talk about later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Google]] (2)
> **Versions:** 2.5 (3), 1.2 (2), 0.5 (2), 3.6 (1), 1.4 (1)
> **Definitions:** is a  (4), is called (1), stands for (1)
> **Env Vars:** gpa (3), abs (2)
> **CLI Commands:** python (3), make (1)
> **Speakers:** - let (1)

#### [Sorted function](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=0)** - [Instructor] We can sort data with the sorted function.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=3)** The sorted function takes one input, an iterable, which is just something we can iterate through.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=8)** Some examples of these are lists, tuples, strings, dictionaries, and you've already had experience with this before.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=15)** The sorted function then outputs a list with the items from the input sorted.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=20)** And there are also some optional parameters that we'll get into later.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=24)** So let's start off by creating a variable and it's going to be called points in a game.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=30)** They're points that a series of people have gotten in a specific game.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=35)** And so say we have 0, -10, 15, -2, and 1 and 12.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=44)** Then we can sort all of the points in the game by going sorted game equals sorted.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=50)** And then just putting in this list because this list is an iterable and so therefore it can be sorted.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=57)** Let's go ahead and print out this sorted game and see all of these points all lined up in sorted in order from least to greatest, We can also use the sorted function for alphabetical input.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=71)** So say we have a list of children, say Sue, Jerry, and Linda.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=79)** We can take these children and sort them alphabetically by going sorted, children, and printing that out.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=87)** And there we go, we get Jerry, Linda, and Sue, and this is alphabetical.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=91)** But let's say we had some letters capital and others not.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=95)** So say we have print, sorted, and we can just put in our list right here and not put it into a variable first.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=102)** We could go Sue and then keep Jerry lowercase.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=107)** And then also keep Linda lowercase.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=110)** Printing that out, Sue comes first, but that's not right because Sue should come at the end because S comes after J and L.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=119)** Well we can use some optional parameters to make our function case insensitive.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=124)** Now let's use these optional key parameters with a string.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=128)** And so we could go print, sorted, my favorite child is Linda.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=136)** And then by doing dot split, this will split on the spaces and create a list.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=141)** And then we'll go key equals string dot upper.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=145)** And so this will convert everything to uppercase.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=147)** And so that way everything has the same value and it's alphabetically in order.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=153)** Printing it out, we get child favorite is Linda my.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=157)** And my should be at the end because M comes at the end of the alphabet, C comes at the beginning of the alphabet.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=162)** So it's least a greatest alphabetically, and this looks good.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=166)** So by adding this optional parameter, we were able to make this function case insensitive.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=172)** We can also add an optional parameter to make this be greatest to least rather than least to greatest for our points in the game.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=182)** From least to greatest, but we can use an optional parameter called reverse to actually reverse the ordering of this.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=189)** And so in order to do this, we can go print, sorted, points in a game.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=194)** So taking that list, and then we're going to have this optional parameter reverse, and set it to true.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=199)** So it's going to reverse the ordering of the list, but still have it sorted.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=203)** And here we go, we have the biggest number first and the least number last.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=209)** So far, we've only sorted with lists, but we can also sort the values in a dictionary.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=214)** Just say we create a variable called leader board, and we have this dictionary here and the keys are going to be numbers that represent scores and the values are going to be initials that are associated with those scores.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=227)** And so the first score is going to be 231, and it's going to be associated with CKL.
>
> **[3:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=233)** And then we'll have the score 123 associated with ABC.
>
> **[3:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=238)** And then we'll have the score 432 and it's going to be associated with JKC.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=244)** And so here, we're going to sort by the key value by doing print sorted leaderboard, and then we'll also have the reverse true, so that way the greatest score comes first.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=256)** And so we'll have reverse equal true here.
>
> **[4:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=259)** Print i out.
>
> **[4:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=260)** And here we have 432, 231, and 123.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=264)** So it's in the reverse order and it's only sorting the keys.
>
> **[4:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=268)** And now that we know that 432 is the winning score, you could go print leaderboard dot get 432, and this will get you JKC, which is the person that has the high score for this game.
>
> **[4:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=284)** We can also sort tuples and a given list.
>
> **[4:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=286)** And so say we have a variable called students, and this is going to be a list.
>
> **[4:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=292)** And inside the list, we're going to have some tuples.
>
> **[4:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=294)** And we'll have Alice and say her grade is a B, and say her age is 12.
>
> **[5:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=302)** And then we'll have another tuples, it's going to be Eliza.
>
> **[5:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=306)** The grade is an A and Eliza is 16.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=311)** And we'll have Tae, grade's a C, and the age is 15.
>
> **[5:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=318)** With the sorted function, we can sort it based on any one of these three entries in a given tuples.
>
> **[5:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=324)** And so say we want to sort by the name of the student, so Alice, Eliza, Tae.
>
> **[5:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=329)** Well, we could go print sorted students, which is our data structure that holds all our data, and we're going to have the key be Lambda, student, student, zero.
>
> **[5:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=342)** So we're sorting by the first entry in each tuple.
>
> **[5:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=345)** And so if we print this out, we get Alice first, Eliza second, and Tae last.
>
> **[5:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=351)** And you might think, oh, that's how it was ordered initially, but let's try sorting by the grades.
>
> **[5:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=356)** So we could go to print, sorted, students.
>
> **[5:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=359)** Again, key Lambda, student, student, with the entry at index one.
>
> **[6:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=366)** And so here, that would be the second item inside of these tuples.
>
> **[6:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=370)** Sorting by that we get Eliza first, then Alice, and then Tae.
>
> **[6:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=375)** And then lastly, we can do this by age.
>
> **[6:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=377)** And so we could have sorted, students, key, Lambda, student, student, two.
>
> **[6:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=385)** And this will sort it by the last entry, which would be age.
>
> **[6:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=387)** And so Alice is first, Tae is second, and Eliza is third.
>
> **[6:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=392)** So why would we use the sorted function?
>
> **[6:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/sorted-function-14501467?u=76281980&t=394)** Well, it's a super easy way to organize or sort your data in [[Python (Programming Language)|Python]] code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (3), python (1)
> **Env Vars:** jkc (2), ckl (1), abc (1)
> **Definitions:** is an  (2), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Type functions](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=0)** - [Instructor] Now let's learn about some functions that are going to help us test for certain functionality.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=5)** The type function takes one input, any object, and the output is the type of the given input, so it could be int, string, whatever type that object is.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=15)** So going to the code, let's just create a range, say r, and we're going to have it be the range from 0 to 30.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=23)** We learned about ranges in a previous video, but let's just go ahead and print out the fact that this is a range.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=30)** And so here we get class range because r is of type range.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=35)** We can also do this for different types of data.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=37)** So we could print out the type of a number.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=40)** It's going to be int because 10 is an integer.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=44)** We can also do this for strings and so we could print type a and that's just one character string and then we'll have print type Hi there which is a bit of a longer string.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=56)** And then printing these out, we get str, str, which both stand for strings.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=62)** We'll see why this is useful later on.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=65)** The next function we're going to talk about is isinstance and this takes one object and one class info.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=72)** The output is a Boolean representing whether or not the object is an instance of the class given by the class info.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=79)** So x here would be any object and y would be some type of class that it's a part of.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=85)** And so say x is 10, like we did before, then y would need to be int in an order for isinstance to return true.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=94)** So let's start off by creating some classes.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=96)** And so we're going to have a class Car and we're going to implement it later so we're just going to have pass here for now.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=102)** And then we'll have class Truck and it's going to inherit from Car and we're going to implement that later as well.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=111)** Then we're going to create some variables.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=112)** We're going to have c, which is going to be an instance of Car.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=116)** And we're going to have t, which is going to be an instance of Truck.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=120)** And then we'll print out the type of each of these variables.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=123)** And so we'll print out the type of c and we'll print out the type of t.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=128)** And then running these, notice we get two different things.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=131)** Because c is a direct instance of Car, we get Car as its type.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=137)** And because t is a direct instance of Truck and not Car, even though Truck inherits from Car, we get Truck as its type.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=146)** Now let's see if these types are the same.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=148)** So we could go print type c equals type t.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=155)** Your intuition probably told you this was false and that's correct.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=159)** The type of c is not the same as type t.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=162)** This is because c is a direct instance of Car and t is a direct instance of Truck.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=168)** Although Truck inherits from Car, type doesn't really consider inheritance.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=172)** It's just looking at what it's a direct instance of.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=175)** A true case of this would be if we had convert as a variable and it was an instance of Car, and then we did print type c equals type convert.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=189)** If we run this, this would be true because both c and convert are direct instances of Car.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=195)** There's nothing in between that's inheriting from anything else.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=199)** Type does not count for inheritance.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=202)** Now, what does count for inheritance?
>
> **[3:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=204)** A function called isinstance.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=207)** And so to use isinstance, we can do something like print isinstance.
>
> **[3:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=213)** And remember, we do the object first and so we'll say c, and then we'll put the class info, which is just the name of the class, and so Car.
>
> **[3:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=221)** So we see isinstance is c and instance of Car, and this will be true because c is in fact an instance of Car.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=229)** Now, what if we did this for something else, isinstance, say t, is that an instance of Car?
>
> **[3:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=236)** We see true because isinstance accounts for inheritance.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=240)** Because Truck inherits from Car, t is in fact an instance of Car, as well as Truck.
>
> **[4:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=245)** So if I replace this with Truck here, it will still be true.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=249)** So we see true.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=251)** But if we take away the fact that Truck inherits from Car by deleting this piece of code and then change Truck to Car here in our isinstance function, run it, we get false because now t does not inherit from Car because Truck, the class, does not inherit from Car.
>
> **[4:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=269)** So why is any of this useful?
>
> **[4:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=271)** Well, looking back up at our range function up here, something that we can do with ranges is list them out, list each value inside of them, and we learned this in a previous video.
>
> **[4:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=280)** And so we should check before running the list function on a given input if it's an actual range so that the list function running it will be valid.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=289)** And so we could go if isinstance, so checking if r is an instance of range, if this is true, then we can go ahead and run the list function and so we can print out each value in the range with the list.
>
> **[5:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=304)** And so running this, it lists out each value in the range because r is an instance of range.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=311)** Often we'll use these types of methods to test for functionality.
>
> **[5:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=315)** Hence, if the input is a certain type of instance, we can guarantee it has a certain function we can use, or it is an input that is valid for a different function.
>
> **[5:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/type-functions-14503479?u=76281980&t=325)** In most cases, it's better to use isinstance than type just because it accounts for the inheritance that you might not know about that's going on behind the scenes.

> [!info]- Semantic Content
>
> **Definitions:** is a  (8), is an  (5)
> **Cross-References:** previous video (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Count valid numbers](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=0)** - [Narrator] Let's count the number of valid entries in a given list.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=4)** We'll start off by creating a variable to keep track of how many valid numbers we've seen so far.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=11)** We'll also create a for loop to iterate through the list.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=15)** In the requirements, a valid number is one that has an absolute value between the lower and upper numbers given in the input.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=23)** To calculate the absolute value of a number, we can use the built-in ABS method.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=29)** Then we can use range to create a range between the lower and upper values.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=35)** We'll use this range to check if the absolute value of a given element is between the upper and lower numbers.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=43)** Since we want the range checked to be inclusive, we'll need to add one to the upper part of the range.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=50)** Adding the one allows it to be inclusive for both.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=54)** Now, if the number is valid, we'll want to add one to our valid count.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=60)** After iterating through the entire list, we'll have seen every valid number and our valid count should have the correct amount of valid numbers.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=69)** We'll return it from the function.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-valid-numbers?u=76281980&t=71)** Let's run our code.

> [!info]- Semantic Content
>
> **Env Vars:** abs (1)
> **Speakers:** - [narrator] (1)


### 2. Python: Math

[↑ Back to Table of Contents](#table-of-contents)

#### [Trigonometry, ceiling, floor, and constants](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=0)** - [Instructor] Modules are built into [[Python (Programming Language)|Python]], but we must import each module we want to use.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=5)** By built-in, we mean that we don't have to download anything extra from the internet to use it.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=10)** And so to import the math module here, we'll go import math.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=14)** Now to use the math module, we just have to go math. and we get access to all of these methods.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=20)** Depending on what IDE you're using, you might not get all of these shown up in your editor like I do, but they all still exist, and you can look them up in the documentation.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=30)** In this video we'll be going over some of the most important ones.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=33)** And to start off, we'll talk about the constants that are built in to the math module.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=38)** One constant is PI, so you can just do math.pi and you have access to pi.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=44)** And so we'll just go ahead and print it out here so we can see it in our console, and here it prints out pi.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=51)** Another constant we can print out is E and so we can go print math.E accessing that constant.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=58)** And there it is again, printed in the console.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=61)** And so we have print math.N-A-N, which stands for not a number.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=66)** So this is a value, you could give something in your program that's not a number.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=72)** We also have infinity, so math.infinity.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=75)** And then we'll have negative infinity, which is just negative math.infinity.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=81)** Printing these out, we get not a number, infinity, negative infinity.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=86)** We can also do trigonometry with the math module.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=91)** Just to review cosine measures the adjacent side over the hypotenuse and sine measures the opposite side over the hypotenuse.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=98)** This means the X portion here is like the cosine value, and the Y portion is like the sine value.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=104)** At a 45 degree angle, these are mathematically the same.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=108)** In the code, we can also prove that they have the same value.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=112)** So say we have a variable called obstacle direction here, and we're going to have it be the value, math.cosine, math.PI over four, which is that 45 degree angle cosine value.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=127)** We can go ahead and print out the obstacle direction here.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=131)** And there we go, we have the cosine value.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=133)** Now to double-check that this value is the same as the sine, we'll go print math.sine, math.PI divided by four, and this should be the same value.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=145)** And that's what we get in the console.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=147)** Now let's move on to the ceiling and floor functions.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=150)** So let's create a variable called cookies and we'll have this equal 10.3 and then we'll have another variable called candy and have that equal seven.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=160)** So imagine the stands for how many cookies and how much candy you have currently in your house.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=165)** No one really has 10.3 cookies.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=168)** What is 0.3?
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=169)** It's a third, but really it looks like you have 11 cookies because you have 11 things.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=175)** We can use the sealing function from the math module to bring this up to 11.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=179)** And so we can go print math.seal cookies, and this will bring cookies back up to 11 because you have 11 things, if you have 10.3 cookies.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=190)** And say we do it on candy, so we'll go print math.seal candy, and this will return the same value because you don't have a decimal that's going to bump it up to the next integer.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=202)** We can also do the opposite of this with the floor function.
>
> **[3:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=205)** And so we can have a variable called age and we'll give it the value 47.9, that's our age.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=211)** But you don't really want to tell people that you're almost 48.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=214)** You just want to say you're 47.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=217)** And so we can use the floor function to bring 47.9 back down to 47.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=222)** And so we'll go print math.floor age, and there we go, we bring it back down to 47 and you're only 47, not 48.
>
> **[3:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=233)** You could also do this if your age was actually just 47, you could have 47, but if you use the floor function on it, the same value will still be returned.
>
> **[4:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=242)** And so we'll have print math.floor and put the other age in there.
>
> **[4:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=248)** We'll still get 47 because there's no decimal value that's going to be removed because it's only a whole number.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/trigonometry-ceiling-floor-and-constants-14507479?u=76281980&t=255)** These are only some of the constants and functions built into the math module, but in the next video, we'll get into some of the more complicated methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Versions:** 10.3 (3), 47.9 (2), 0.3 (1)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** python (1)
> **Env Vars:** ide (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** imagine (1)

#### [Factorial, square root, and GCD](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=0)** - [Instructor] Let's dive deeper into the math module.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=3)** First, we have to import math because we have to have our module we're working with.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=7)** And we are going to start off by looking at the factorial function.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=11)** To use it, you just do math.factorial, and it'll get the factorial of any number you want.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=17)** And so to start off, we'll go 3, and then we'll go ahead and print this whole thing out.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=23)** And so this will just give us the factorial of 3, and that would be 3 times 2 times 1, which will give us 6 in the output.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=31)** Another function that's just built into the math module, ready for us to use is square root.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=36)** We'll go print math. the square root, and so sqrt, and then any number you want to get the square root of.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=44)** Here, we'll just do 64.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=45)** And the square root of 64 is 8, and that's what we get in the output.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=51)** Another thing [[Python (Programming Language)|Python]] can do is help us find the greatest common denominator between two numbers.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=57)** The name of the method we use is GCD, and GCD stands for greatest common denominator.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=63)** And this method is really useful for reducing fractions.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=66)** Say we had the fraction 8/52.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=69)** Well, we can reduce this to 2/13.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=72)** What GCD will do is between 8 and 52, we have the number 4, and so 8 and 52 are both divisible by 4.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=81)** So we divide the numerator and the denominator by 4, and that's how we get this reduced fraction.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=86)** But how do we know 4 is the number we should divide the numerator and denominator by?
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=91)** Well, that's where GCD comes in.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=94)** To use the function, we can write print math.gcd 52 and 8.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=102)** This will give us the greatest common denominator between 52 and 8.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=106)** And so running this, we get 4, which is what we used in the slide.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=110)** Now, changing the inputs around a little, we could go print math.gcd 8 and 52, and this will still give us the same output.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=119)** This is because the ordering doesn't matter because you need to be able to divide both by the same number in order for that to be the greatest common denominator.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=128)** And so seeing if this works, we can go print 8/52, and then we could also print out 2/13.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=137)** And these will be the same numbers because 2/13 is just the reduced fraction of 8/52.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=144)** Finally, we can convert between radians and degrees in Python.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=147)** So here's just a little review of radians and degrees.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=151)** In a full circle, there are 2 pi radians and 360 degrees total.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=156)** If we go counterclockwise at 90 degrees, we have pi/2 radians, and so forth.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=162)** This chart is useful to look at, but we can actually do all of this conversion, just with a couple lines of code.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=169)** So to see how many radians are in a whole circle, we could do print math.radians and then any number of degrees that we want to convert to radians.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=178)** And so for a full circle, we would want 360 degrees.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=182)** How many radians are in 360 degrees or a full circle?
>
> **[3:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=186)** Well, it's 6.28, about.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=189)** To double-check this, we can also do pi times 2 to see how many radians are in a full circle.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=195)** And so we could go print math.pi * 2, and this will also return 6.28.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=203)** We can do the opposite as well.
>
> **[3:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=205)** We could go print math.degrees to convert radians to degrees.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=211)** And so we could go math.pi * 2, which will give us the number of radians around a circle.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=218)** And then running this, we should get 360 degrees back because it's doing the other side of that conversion.
>
> **[3:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=225)** The math module is definitely helpful for using more complicated math in code.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=229)** However, it is important to remember that not every math function is in the math module.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=235)** Some are built in, including pow, absolute value, round, et cetera.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/factorial-square-root-and-gcd-14500538?u=76281980&t=239)** So be sure to watch out for that in your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** gcd (4)
> **CLI Commands:** python (2), find (1)
> **Versions:** 6.28 (2), go 3 (1)
> **Definitions:** stands for (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### [Python random module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=0)** - [Instructor] The random module allows you to create random values and generate random choices.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=5)** And so to start off, as we do all of these module videos, we're going to go import random.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=11)** Then we're going to go ahead and access the random function in the random module.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=15)** And so to do this, we'll go print random.random, and this is just going to give us a random number between zero and one, but sometimes this isn't really useful, but there are other functions inside of the random module that also have this random functionality.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=32)** So let's create a variable called decider, and it's going to have the value of random.randrange and the input is going to be two.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=41)** And so decider is either going to have the value zero or one.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=45)** Which one it will be that is completely random.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=48)** However, we do know the value will not be two because this function is exclusive.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=53)** And so the only two possible values that are going to be returned are zero and one.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=58)** If we had three here, then the possible values would be zero, one, or two.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=63)** It's not going to include that input.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=65)** And so let's change this back to two for now.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=67)** And we're actually going to use this decider variable to decide if a coin is flipped on heads or tails.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=74)** And so we're going to go if_decider == 0, meaning the random number that we got was zero, we're going to go ahead and print HEADS.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=84)** else, meaning that decider was not equal to zero, and in this case using our random range function, the only other possible value is one, we're going to go ahead and print TAILS.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=95)** And so if we run this, we get TAILS the first time.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=99)** We get HEADS the second time, but what it could be is completely random.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=102)** So notice we just got TAILS twice.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=105)** We can also go ahead and print our decider to see that it matches up with our HEADS and TAILS.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=111)** And so here we got zero as our decider and it printed HEADS, which is what we were expecting.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=116)** We can also use the random module to simulate a dice roll.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=119)** And so we can go print random.randrange one to seven, and here we added a second input so that way we can have a range that isn't just from zero to a number, but that's between one number and another number.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=134)** So here that's between one and seven, or in this case, it'll be one through six because the seven is exclusive, but the first input, the one, is going to be inclusive so that's a possible value that the random range could return.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=148)** And so adding a little bit of a story here, we can say You rolled a and then it'll be 1, 2, 3, or 4, 5, 6, whatever you rolled.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=158)** Printing this out, it looks like we've got an error here.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=161)** That's because we forgot to convert the value that randrange returns into a string.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=167)** Since we have this other string over here, this also has to be a string.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=171)** And so to do this, we can go str, put this in the parentheses, go ahead and run it and our error message will disappear.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=179)** And now we see You rolled a 2.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=181)** And if we run this again, You rolled a 5.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=184)** And the reason that converting our random range output to a string worked is because this entire thing has to be a string if one of the inputs is a string.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=194)** Now we've seen the random module help us pick some random numbers, but the random module can also help us with random choices.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=201)** And so let's create a variable called lotteryWinners, and the way we're going to pick our lottery winners is by using the sample function in the random module.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=210)** And so we'll access the random module and then we'll have the method sample and inside of sample, we're going to put our population, which in this case is going to be a range between 0 and 99, so 100 numbers, and then we want to pick five of those numbers randomly.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=228)** Then we'll go ahead and print them out, lotteryWinners, and we get five random numbers down here.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=235)** Running it again, we get five different numbers.
>
> **[3:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=238)** And so these are our five lottery winners for this project.
>
> **[4:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=242)** So what did we do?
>
> **[4:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=243)** We sampled five numbers from a given range, and then these numbers were returned in a list to us.
>
> **[4:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=250)** We can also pick one item from a set of items with the choice function.
>
> **[4:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=254)** And so we can go possiblePets, which will be the possible pets that you can get at the store, and so say it's a cat, dog, and fish.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=264)** These are the three pets that are available to you, but you don't know which one to get and so you're going to use the choice function to make a random choice for you.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=272)** And so you'll go print random.choice and we'll put in our possiblePets that are a list and we get cat.
>
> **[4:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=280)** So the random module picked cat as our possible pet that we might get.
>
> **[4:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=284)** It could be a cat again, and there was a cat and there was a dog and there was a fish.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=289)** And so any of these choices could be chosen with the choice function.
>
> **[4:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=294)** We can also shuffle data with the random function, say we have a set of cards and so cards and we'll have the Jack, the Queen, the King, and the Ace here.
>
> **[5:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=307)** And then we'll go ahead and shuffle these cards up with the shuffle function inside of the random module.
>
> **[5:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=313)** And so having that input be cards, and then we'll go ahead and print the cards and see what they look like.
>
> **[5:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=319)** Here, we have the Ace in the middle, the Queen at the end, so it did shuffle the cards.
>
> **[5:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=324)** Shuffled them again, keep shuffling them, and there is the odd case where it might be the same as the input, but usually it's going to be completely shuffled because the [[Probability]] of it being the same is very low.
>
> **[5:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=336)** So why is the random module useful?
>
> **[5:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=339)** Well, we used it up here when we simulated a coin flip or a dice roll.
>
> **[5:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=343)** You can simulate any phenomenon or event you want just using the random module.
>
> **[5:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=348)** It's also useful for randomizing data, which we did down here with the cards.
>
> **[5:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-random-module?u=76281980&t=353)** Lastly, you can choose a random value out of several values, which is what we did here with the cat, dog, and fish example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Env Vars:** heads (4), tails (4)
> **CLI Commands:** cat (6), make (1)
> **Code Identifiers:** lotterywinners (2), possiblepets (2), if_decider (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Calculating statistics with Python](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=0)** - [Instructor] The [[Statistics]] module allows us to calculate some common statistics, like the mean, mode, standard deviation, et cetera, but it also allows us to do some more complicated things as well.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=11)** So to start off, we'll go import statistics to import this module, and we're going to create some data.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=18)** And so we're going to start off with agesData as our variable.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=21)** And this is going to contain the ages of people at a given summer camp.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=25)** So say the employees at the summer camp want to know the demographics of who attends.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=30)** Well, first you have to have the data.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=32)** And so say we have 10, 13, 14, these are just some ages I'm putting in.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=39)** 11, 10, 11, 10, 15.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=44)** But before we jump in on how to use this module, let's review some statistics.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=49)** So here are some statistic definitions.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=52)** We have the mean, median, and mode.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=54)** So forget about the code for a minute and think about this data.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=58)** Say we have two, two, three standing for how many cookies each person has.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=63)** We can use statistical methods to get more information about this data.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=66)** And this is where the mean, median, and mode come in.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=70)** We can figure out the average, which is the mean, by using a mean function, which here would resolve in 2.33333, because we have seven, which is the sum of the input divided by how many input there are, three.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=83)** We can also see what the median or the mid point of the data is, which here is two, that's the middle number we have.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=90)** And we can also see what the most frequent value is.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=93)** And here it's two, because we have two twos and only one three.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=97)** Now the statistics module has all of these functions built in.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=101)** Going back to our ages data from the summer camp, we can go ahead and find the mean, mode, and median.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=107)** So we'll print statistics.mean and put in our ages data.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=113)** And this will give us the mean of our data.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=115)** We'll have statistics.mode, which will give us the most frequent value in our data.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=121)** And then we'll go print statistics.median ages data, and that'll give us the point of our data.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=129)** And so the average is 11.7779.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=132)** The mode is 10, so 10 is the most frequent value.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=135)** And we see it three times in here.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=137)** And then 11 is our mid point.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=139)** And so if we sorted the data, 11 would be the middle number.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=143)** Using the sorted function, we learned in a previous video, we can actually do print sorted, ages data, and this will sort our data.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=153)** And we can clearly see 11 is our mid point, our median.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=156)** And so we have four on the side, four on the side, 11 is that midpoint.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=161)** We can also look at some more advanced definitions in statistics.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=166)** Using the same data from the previous slide, we have how many cookies each person has.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=170)** So one person had two, another person had two, and then the last person had three.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=175)** Some more advanced statistic terms are variance and standard deviation.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=179)** Variance stands for the average of the square differences from the mean.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=184)** And this is a lot of math, but really what this means is how varied is our data.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=188)** Does it vary a lot in that we have one point that's like five, another that's 99, another that's like 20, is our data very varied or are they all pretty close together?
>
> **[3:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=199)** So would it be, you know, you have 2, 3, 4, 2, 3, 1, et cetera.
>
> **[3:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=205)** And so for the data we have here, it's not very varied.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=208)** Hence why we get a very low number for the variance.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=211)** For standard deviation, that is just the square root of the variance, and here the square root of one third is just 0.5.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=219)** All of this, we can calculate with the statistics module.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=223)** Working with our ages data again, we can get the variance by going print statistics.variance, agesData as our input.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=234)** And then we get three, so it's a little bit more varied than our other data was with the cookies.
>
> **[3:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=238)** And then we'll go print statistics.stdev for standard deviation, agesData.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=247)** And then we get 1.8 because that's the square root of the variance.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=251)** And to prove this, we can use the square root method we learned in the math module by going import math, and then just going print math.square root statistics.variance, agesData.
>
> **[4:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=266)** Printing this out, we get the same number as we did with standard deviation because the square root of variance is the standard deviation.
>
> **[4:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-statistics-with-python-14506484?u=76281980&t=274)** In all, the statistics module allows us to get a variety of statistics, very easily, given a set of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (15)
> **Code Identifiers:** agesdata (4)
> **Versions:** 2.33333 (1), 11.7779 (1), 0.5 (1), 1.8 (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Iterators with itertools: Infinite processes](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=0)** - [Instructor] The itertools module allows us to iterate and go through our data in different ways.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=5)** And so to use it, we have to import it.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=7)** We'll go import itertools.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=10)** The first thing we're going to do with this module is create an infinite counting mechanism.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=15)** And so to do this, we are going to use a for loop, and so we're going to go for x_in itertools.count, so using the count method, and our input is going to be 50.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=27)** And so here, we're going to start our infinite counting at 50, and it's going to count until the end of time.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=32)** And so if we go print x and run this, it's going to continue to count and it's probably going to crash your computer unless you physically stop it.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=41)** And here, it'll have a KeyboardInterrupt because I stopped it in the editor.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=46)** And so what you can do to prevent it from counting infinitely, but still counting as much as you want, you can have an if statement here with if x == 80 or whatever number you'd like, and then you can have a break statement, or it could be an if statement checking another condition that also deals with the numbers you're counting, whatever you'd like.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=65)** And so if we print this, this will give us all the numbers from 50 to 80, all the way counted down, and we're going to include 50 and we're going to include 80 because we print it before we check the condition.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=76)** A way we can modify this is by adding a second input, say 5, and now our counting will count by fives instead of one.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=84)** And so if we print this out, we get 50, 55, 60, all the way up to 80, where we check our condition and break out of the loop.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=93)** Another thing we can do with itertools is infinitely cycle through an input.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=98)** And so we'll do a for loop again, but we'll say for c_in itertools and we'll do .cycle because we're cycling through an input, and let's say this input is RACECAR, and so it's a string, it's an iterable, And as we cycle, we're going to go ahead and print out c, which will be some kind of letter.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=118)** It'll be R-A-C-E, wherever it is in the cycle.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=122)** And if we run this now, it's going to go on forever and ever so we need to add some kind of break statement so that it doesn't keep on going and going.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=130)** We can create another variable up here, say x, we'll start it off at zero.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=135)** And each time we're in the loop and we go through this body of the loop, we'll increment x with x = x + 1.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=142)** And then if x is greater than 50, then we're going to want to break out the loop.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=148)** And so it's going to cycle through each input, each letter 50 times.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=152)** And so if we go ahead and run this, we get RACECAR, RACECAR, until it ends at 50 and we've printed out 50 letters.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=163)** Here, I don't have a semi-colon and semi-columns are not necessary in [[Python (Programming Language)|Python]], so feel free to not include them.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=169)** I just include them because they're used in a lot of other languages.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=173)** For our cycle input, we used a string, but we can actually use any type of iterable here.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=179)** So say we wanted to simulate musical chairs and each chair has a number.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=184)** Well, we could go 1, 2, 3, 4, say there's four chairs, and then run this again and it will cycle through each of these numbers and it'll go one to four because that's our input.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=197)** Another thing we can do with itertools is infinitely repeat a certain value.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=201)** And we're going to again do this with a for loop.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=203)** And so we'll go for r_in itertools.repeat and we're going to say our value is true.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=211)** Here, it's a Boolean, but it could be any object, any value that you want it to be.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=216)** And we are just going to print out this value here and then run it and we'll get the value true infinitely.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=222)** Now, again, you probably won't be infinitely repeating the same value, but you'll just repeat it until a certain condition is met and that's where your if statement comes in.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=230)** And so in this case, we'll go x = x + 1.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=235)** And then when x hits say 100, we're going to ahead and break from the loop and stop repeating this value.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=243)** And so we do true 50 times because that's what we had here and that's what we see in the output.
>
> **[4:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-infinite-processes-14507482?u=76281980&t=250)** Using the count, cycle, and repeat methods in the itertools module allows you to loop through different data very efficiently while making your code shorter and more readable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** x_in (1), c_in (1), r_in (1)
> **Env Vars:** racecar (3)
> **CLI Commands:** python (1)
> **Versions:** go 1 (1)
> **Speakers:** - [instructor] (1)

#### [Iterators with itertools: Permutations and combinations](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=0)** - [Instructor] We can also calculate permutations and combinations in [[Python (Programming Language)|Python]] using the editor tools module.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=6)** So starting with permutations, a permutation is a way in which a set or a number of things can be ordered or arranged.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=13)** Permutations take all the items given and reorder them in different ways.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=17)** So here we have one, two, and three.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=19)** We can order them as 1, 2, 3, 1 3, 2, 3, 2, 1, et cetera.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=25)** So why is this helpful?
>
> **[0:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=26)** Let's go back to the code and try an example.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=29)** Say we have a variable called election.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=31)** And so we have election equals, and we're going to make it equal a dictionary.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=36)** We are going to have one, and it's going to be associated with Barb.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=40)** We're going to have two, and it's going to be associated with Karen.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=43)** And then we're going to have three, and it's going to be associated with Erin.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=49)** So for an election, we'd want to know what are the possible outcomes for that given election.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=54)** And so we'll need to import itertools for this because we're going to use the permutations method inside of itertools, and so we're going to go for p in itertools.permulations election.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=68)** And this is saying for each permutation in the election permutations, we are going to go ahead and print it out.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=76)** This will give us all the possible orderings for the election.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=79)** And so running this, we get what we saw on the slide.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=83)** We have 1, 2, 3, 1, 3, 2, 2, 1, 3, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=88)** Now, these numbers don't really make much sense because we really want the name that's associated with them.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=94)** And so to get the name, all we have to do is switch election with election.values.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=99)** And so to write this again, we'll go for p1 in itertools.permutations, election.values.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=109)** We'll go ahead and print p1.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=112)** Running this, we get all the different orderings.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=115)** And so say this is an election and Barb got the presidency, Karen got the vice presidency, and Erin got the secretary, or you could have Karen got the presidency, the VP, secretary, et cetera.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=128)** These are all the possible permutations that you can get with Barb, Karen and Erin.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=133)** Another thing we can calculate with itertools are combinations.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=138)** However, before going into combinations, let's review what they are.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=141)** They are kind of like permutations in that they list a set of items, but for combinations, no set has the exact same elements as another.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=150)** So say you have three items, work, eat, and play, but you can only do two of those things.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=155)** The combinations of two that would result would be work eat, work play, and eat play.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=161)** Notice that we don't have both work eat and eat work because these have the exact same elements and therefore count as the same combination.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=169)** Now let's try this in code.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=172)** Say we have a list of colors we can paint with, and so we'll have a variable called colorsForPainting, and we'll have a list with red, blue, purple, orange, yellow and pink.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=188)** But when we paint, we only want to paint with two colors.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=191)** And so we can use the combinations method inside the itertools module.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=195)** To do this, we'll go for c in itertools.combinations, colorsForPainting, which is our data, and then two, because we want to choose two items out of this data for the combination.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=211)** And then we'll print each combination that we get.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=214)** And so printing this, these are the colors that we could pair for our painting.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=218)** We could have red and blue, red and purple red and orange.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=222)** Notice that you don't see the same combination twice.
>
> **[3:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=225)** And so, because we have red and pink, we're not going to see pink and red.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=230)** If we were, then that would be part of a permutation.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=234)** If we change this two to three here, then we're going to get combinations with three items.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=240)** And so applying this, here, we get three items that are combinations.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=243)** And again, you're not going to have two entries with the same elements in a different order.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=249)** In the future, itertools will definitely come in handy when you're trying to rearrange data, and see what can happen with the different combinations.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=256)** It's also really useful if you need to repeat values or cycle through things.
>
> **[4:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterators-with-itertools-permutations-and-combinations-14506478?u=76281980&t=260)** Instead of writing a bunch of lines of code, you can just call that one method and all the work is done for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** colorsforpainting (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Calculate hypotenuse](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=0)** - [Instructor] Let's calculate the hypotenuse of a triangle using [[Python (Programming Language)|Python]].
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=4)** In our function, we're given two side lengths that represent two sides to a right angle triangle.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=10)** The Pythagorean theorem tells us that the square of the hypotenuse, the side opposite the right angle, is equal to the sum of the squares of the other two sides.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=20)** We can leverage this theorem to implement our solution.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=23)** First, we'll import the math module so we can access the square root method.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=28)** We'll also need to square each side, which we can do with the exponentiation operator.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=34)** With the theorem, we'll want to add these together and then square root their sum.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=39)** We'll use the square root function from the math module.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=45)** This is a direct translation of the Pythagorean theorem into Python.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=49)** So the result of this expression will give us the hypotenuse.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-calculate-hypotenuse?u=76281980&t=53)** Let's run the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Python Input/Output

[↑ Back to Table of Contents](#table-of-contents)

#### [Command-line arguments](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=0)** - [Instructor] Using the system module, we are going to read in a user's command line arguments.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=5)** What are command line arguments?
>
> **[0:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=6)** Well, they're the input that the user gives via the command line before the program's execution.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=12)** In our example, the user will input numbers in the command line and we will output the sum of these numbers.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=18)** Now, there are two ways we can do this.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=20)** The first is using the actual command line that comes with your Mac or PC.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=25)** In the command line, all we have to do is write [[Python (Programming Language)|python]] to run the file and then the filename, which here is 03, there we go, and then we write whatever command line arguments we want to add, and so this is input from the user.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=40)** And so I could go 0 1 2 and those are my arguments.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=44)** When I hit Enter, nothing is going to happen because we haven't written anything in our program yet, but this is how you would add command line arguments.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=53)** If you have an IDE that you're using, usually you can go into the configurations and add the command line arguments that way.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=60)** So here, if we go to edit configurations, we can go ahead and add our parameters here, and we're going to have them be the same as they were in our command line, but strings, and so we'll have "0", "1", "2".
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=74)** And the reason we have to have these quotes around them here in our configurations is because anything that's inputted into the command line is automatically a string.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=83)** Click OK and here we are.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=86)** Now, in order to get access to these command line arguments, we have to use the system module.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=91)** And to use it, we have to import it.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=93)** And so we'll go import sys to get access to that.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=97)** And to get access to our arguments, we go sys.argv.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=102)** Now, if we want to print out the length of arguments or how many arguments we have, we just add our len function that we learned before.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=109)** And so to put this in a pretty print statement, we can go print Number of arguments.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=117)** We'll have len sys.argv, so it's going to give us how many arguments we have, and then we'll go ahead and do arguments to end that.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=126)** So it'll say we have four or three or how many arguments we have.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=131)** Then to print out the actual arguments themselves, we can go print Arguments sys.argv.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=139)** And so if we run this, we see, okay, how many arguments do we have?
>
> **[2:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=143)** Four.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=144)** What are those arguments?
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=145)** Well, we have the fact that this is the program that we are running and so it has kind of the file path for the program.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=151)** And then we have the arguments that we put into the configurations 0, 1, 2.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=156)** Now, if we run this in our command line, we can go ahead and do the up arrow and then just hit Enter and now it runs our new program that we've saved.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=165)** And here, we have the number of arguments. It's still four.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=168)** It's just running it in the command line versus our IDE.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=172)** Now because we want to sum up our arguments, we really only want access to 0, 1, and 2.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=178)** So we'd want to remove this first argument that has the file path, the file we're running.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=183)** And so to do this, we remove that first argument with sys.argv.remove sys.argv, and then to get that first argument, we go 0 here because argv is a list.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=197)** If under this we go ahead and try to print out the arguments again, we'll see that that first argument is gone and we just have 0, 1, 2.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=207)** And that's what we have.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=209)** Now that our data is in order, let's go ahead and try to sum up these arguments.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=214)** And so we'll create a variable called arguments, and we'll just set that to sys.argv.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=219)** We'll also have the sum that's going to keep track of our running sum here.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=223)** And then we're going to have a for loop, so we can go through each argument in our argv list.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=227)** So we'll say for_arg in arguments and what we're going to want to do for each argument in the arguments is we're going to want to convert it to a number and then add that number to the sum.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=240)** And so in order to convert something or cast something into a number, we have to use a try clause.
>
> **[4:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=245)** And so we'll say try and then in here, we'll try to convert it into a number.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=249)** And if it doesn't work, then we're going to go ahead and break out into an exception and then we're going to just print that it's a bad input.
>
> **[4:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=257)** Because if it can't be converted into a number, then we don't want it to be a part of our sum.
>
> **[4:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=262)** And so to convert arg into a number, we'll go number, creating that variable, and then int arg.
>
> **[4:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=269)** And so this is going to cast our argument into an int.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=272)** We're going to save it in a variable called number, and then we're going to go ahead and add that number to the sum here.
>
> **[4:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=280)** At the end of this, we are going to print out our sum so that way we can see it in the output.
>
> **[4:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=285)** In this case, it should be three because zero plus one plus two equals three.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=290)** Running this, we get three in our output.
>
> **[4:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=293)** Now going into our configurations, we could change some of these numbers to say this is a four.
>
> **[4:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=298)** This is a three.
>
> **[5:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=300)** And so three plus four is seven plus two should be nine.
>
> **[5:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=303)** So if we go, okay, run the program again, we get nine in the output.
>
> **[5:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=308)** You could also go into your terminal and run this here.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=311)** And so you could go instead of 0, 1, 2, you could have 4, 4, and 4, and this'll be 12, which is what we get on the output.
>
> **[5:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=319)** If your program depends on initial user input, this is a good way to go.
>
> **[5:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/command-line-arguments-14506486?u=76281980&t=324)** The user can put in their arguments and with the system module, you can read it and do what's appropriate for that given input.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Tools:** command line (14), terminal (1)
> **Definitions:** is a  (4)
> **Env Vars:** ide (2)
> **Versions:** go 0 (2)
> **CLI Commands:** python (1)
> **Code Identifiers:** for_arg (1)
> **UI Navigation:** go to (1)

#### [Input and output](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=0)** - [Instructor] Throughout the course, we've been outputting information to the user, even if we didn't know it.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=5)** We've been using the print statement.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=7)** And so we just go print and then whatever we want to print or output to the user.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=11)** And so we can say Hello to the user.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=15)** In the previous video, we got initial input from the system module and the command line arguments.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=20)** But what if we need input from the user throughout the program's execution?
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=24)** That's where the built-in input function comes in.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=28)** To use it, we'll just go input, and then whatever we want to prompt the user to input.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=33)** So say we want the user's favorite color, well, we would write, What is your favorite color?
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=40)** And then the user would input their favorite color.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=44)** Now this is great to get that color, but we're not saving it anywhere.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=47)** If we want to use the user's favorite color somewhere else in the program, we need to save it in a variable.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=53)** So here we'll say color, and that will save whatever the user inputs as their favorite color.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=59)** So if we run this we see Hello is our output, and then it says, What's your favorite color?
>
> **[1:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=64)** I'm just going to put in red.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=66)** And here, it's important to remember that the top part here is our code.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=70)** And that code is what determines what will go into the output of our program.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=74)** The output is what the user is going to see.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=76)** So all of these print statements, what they actually print, that's what the user sees.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=81)** And so when I wrote in red here, I was acting like the user, and that the user would first see what is your favorite color?
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=88)** And then I, as the user, wrote red, because I was responding to the question, What is your favorite color?
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=94)** And now that's saved in the program, but we don't do anything else with it.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=98)** Well, we can go back and use our print statement from before and just print out what the user gave to us.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=104)** And so we could go print color, and this will print out whatever the user responds to us.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=111)** And so running this, favorite color, we'll say pink here, and it's going to return pink because that's what the user put in.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=119)** Whatever the user puts in determines what is outputted by the program, according to what we have here.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=125)** This is great for when you need information from the user, or you need to give the user feedback throughout the program's execution.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=132)** However, unless saved elsewhere, the data generated from this program will disappear after the program's completion.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=139)** So here, if we run the program again, we're not going to have access to pink anymore, or whatever color that the user responds with.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/input-and-output-14506482?u=76281980&t=146)** We need to save this color elsewhere in a file or somewhere else, so that way we can access it in different executions of this file.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Files and file writing](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=0)** - [Instructor] Before we start messing with files in [[Python (Programming Language)|Python]], we actually need to create a file.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=4)** And so here, I'm going to go up to File, New, just creating a new file in this current directory or the Python file I'm running is, and I'm just going to call this new file scores.txt.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=16)** And here it is, it's in that same directory and were just going to keep this file blank.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=21)** We're going to save it.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=22)** And we're actually going to mess with it inside of our Python code.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=26)** To get access to this file, we'll actually create a variable called myFile in here, and then we'll go open scores.txt.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=34)** So the name of the file we want to open and then w for the mode that we want to open it in, and here w stands for write.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=42)** If we put r here, it would be read; r+ plus would be read and write; a for append, but we're going to keep it w for now.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=50)** Once we open this file, then it's going to be saved inside of this myFile variable, and that's what we'll use to access the scores.txt file in the future for this Python code.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=62)** Now that we have it open, we're going to go ahead and print out some of the attributes and properties of this file.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=67)** And so we'll go print and we'll get the name of this given file and here, to get the name, we'll just go myFile.name, and then we can also get the mode of this file.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=79)** And so we can say mode and then +myFile.mode.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=86)** And so these are just some properties, some attributes, some things you can access and here, no surprise, the name is scores.txt, and then the mode is w.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=96)** with our file open, we can go ahead and write to the file.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=100)** And so to write to the file, we'll go myFile.write, and then we'll put in whatever we want to write to this file, so this scores.txt file.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=110)** And in this case, because it is storing scores, we'll give it some initials and scores that it'll save for its high-scoring players.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=117)** And so here we'll have GBJ, that's a player, and this player's score was 100, so they're the high score.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=125)** And then say we have another high score whose name is KHD, and then we'll have this person's score be 99, and then we'll do another slash, and which I'll explain in a second.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=138)** But the last score that we'll have is BBB, and the score will be 89.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=144)** When this program runs, the /ns will be converted into new lines.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=148)** And so these /ns are only here for formatting purposes.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=152)** And so with the /ns, this will look like GBJ and then 100, and then KHD and the 99, et cetera.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=160)** They're all going to be on separate lines.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=163)** This will make our file look super organized.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=167)** Once we've written things to the file, we'll go ahead and close it.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=170)** And so we'll go myFile.close.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=172)** But before we move on, it's important to remember that when we're writing to a file, it completely erases what's currently in the file and writes whatever is right here in these parentheses.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=183)** And so if you want to add onto a file and not erase everything that's in it currently, you'd want to use the append mode versus the write mode.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=192)** And so let's go ahead and run this and nothing will change here, but if we go to our scores.txt file, this now has our scores inside of it, and so they're saved.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=201)** And then if we run another program and that program accesses this file, it will see these scores as well, as long as another file doesn't change them.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=210)** Now we can actually read what we just wrote in the scores.txt file.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=214)** All we have to do is go, myFile = open, and then the file name, which again, will be scores.txt, and then the mode, and this time we're going to be in the reading mode, so we're going to be an r.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=228)** Then we can go ahead and just read the file.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=230)** And so we'll go print Reading... and then we'll go ahead and go Myfile.read, and this will read what's in the file currently for us.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=243)** Now here, we just wrote over this MyFile variable name.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=247)** You could change this variable name to myFile2, and that would work as long as you change this to myFile2.
>
> **[4:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=253)** And so you can use the same variable names over again, as long as you don't need what was in it previously.
>
> **[4:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=259)** And so here we go, we're going to read the file and it's going to read everything out for us.
>
> **[4:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=263)** We're reading, we see GBJ, the score, the score and the score.
>
> **[4:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=268)** If we only wanted a certain part of the file, we could go read 10, and this will only read 10 characters of the file.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=275)** And so here we see the first score, but the other scores are still there, we're just not reading them.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=282)** Now, if I try to read again after this, say, print Reading again, and have the same line of code, myFile.read 10, print this out, notice it's starting at a different point in the file.
>
> **[4:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/files-and-file-writing-14505439?u=76281980&t=297)** This has to do with the seek pointer, which we're going to talk about in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **Code Identifiers:** myfile (8), myfile2 (2)
> **File Paths:** scores.txt (8)
> **Env Vars:** gbj (3), khd (2), bbb (1)
> **CLI Commands:** python (4), make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)

#### [File seeking in Python](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=0)** - [Instructor] Before going more into files, let's take a look at what it means to seek.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=4)** In all files, we have a seek pointer that points to a specific character in that file.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=9)** When we read or write, the seek point or moves.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=12)** Ultimately it keeps track of where we are in the document and before reading or writing, it will be set to zero.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=19)** Let's say in this file, we want to write H-A-P.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=23)** When the command executes, the program will first input the H into the file.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=27)** After writing the H, our pointer will move from zero to one.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=32)** Next, the program we'll write the A in our H-A-P and our seek pointer again will move from one to two.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=39)** Lastly, we'll write a P to finish off our H-A-P and our pointer will move from two to three after writing this letter.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=47)** We've written all that we've wanted to in this file, but now let's read it.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=51)** In order to read it, we must set the seek pointer back to zero and go through the file again.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=56)** We can do this with a function called seek, or we can close and reopen the file and our [[Python (Programming Language)|Python]] program, which will reset the seek pointer for us automatically.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=66)** Either way, say the seek pointer is back at zero, and we want to read the whole line we just wrote.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=71)** The program would first read the H and after reading the H, the seek pointer would move to one.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=76)** Then the program would read the A and move the pointer to two just like before.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=81)** And eventually the program would read P and move the pointer to three and the whole file will have been read by the program.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=89)** So what's important here?
>
> **[1:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=90)** The seek pointer keeps track of where we are in the file.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=93)** Both reading and writing move the seek pointer.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=95)** And if we want to read the file after writing or read the file multiple times, we must set the seek pointer back to zero, either by running the seek function or closing and reopening the file in our code.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=108)** In the previous video, we were looking at the scores and we read the scores once and we had this output, which was from the beginning of the file.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=116)** And then we read again, and we had this, but that was from a different part of the file.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=121)** This is because when we read it first, we were reading from the beginning of the file.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=125)** But when we read again, we hadn't reset the seek pointer.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=128)** And so to reset the seek pointer here, we can just go myfile.seek and we can set it to zero.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=135)** And when we run this again, they both start at that beginning point.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=140)** Another way we could do this is by closing and reopening the file.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=144)** Instead of this, you could go myfile.close and then you could just copy and paste this line.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=150)** And this will do the same thing as doing that one line of code where you use the seek function.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/file-seeking-in-python-14506481?u=76281980&t=156)** And so running this, they both also start at that first point in the file with that first score.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Cross-References:** previous video (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Iterative files](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=0)** - [Instructor] We've read files, we've written to files, but we can actually iterate through files by looking at just one line at a time.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=7)** Here on the second line, we have our scores.txt saved in this myFile variable.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=13)** We can look at this file over here and we have three lines in it with each line having some initials and their respective score.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=21)** Going back to the code, if we just want to read one line, we can go something like print My one line, and then we'll go ahead and print out the line, which here will be myFile.readline.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=34)** And this will read one line of the file.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=37)** And that one line is just that first line with the one set of initials and the score.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=42)** Now readline does change the position of the seek pointer, and so, we'll want to reset the seek pointer back to zero, and we can do this with what we learned in the last video with myFile.seek is zero.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=54)** So that way, when we read again, we'll be reading from the very beginning of the file.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=59)** Because our file can be broken up into lines, we can iterate through each line of that file.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=65)** And when we iterate, that means we can use a for loop.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=68)** And so, we can say for line in myFile, and we can do something here.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=74)** And in this case, say we want to replace one of the high scores.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=78)** We could say new high score equals line.replace BBB, so we want to replace the initials of BBB with the new high score PDJ and say they have the same score as BBB, which in this case was 89.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=97)** So here, we're replacing these initials.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=100)** And the way we're going to do this is we're going to iterate through each line of the file.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=104)** When we see BBB, we're going to replace it with PDJ.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=109)** And once we replace it, we're going to go ahead and print out that new high score.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=114)** Once we're done iterating through the file, we're going to go ahead and close it.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=117)** And so, we'll go myFile.close, and we'll be done working with our file.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=122)** So if we run this, notice we get each line printed out.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=126)** But in this case, BBB has been replaced with PDJ.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=131)** Now, if we go back to our scores.txt file, notice it was not replaced here.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=136)** That's because we physically did not write to the file.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=140)** If we wanted the score to actually change, we would need to use the right function for my file.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=145)** Here, we're just using the string line and replacing it within that given string.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=150)** There's nothing connected to my file.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=153)** Although, you could connect it to that current file.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=155)** Usually, you want to save any new data in a new file, so that way, it doesn't interfere with the old data you might still be reading.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=164)** The main advantage of using files and reading and writing and seeking is that it makes your data persistent, meaning once the program ends, your data is still there.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/iterative-files-14507485?u=76281980&t=173)** It's still in the file and you can use this data in other programs that could be running in the background.

> [!info]- Semantic Content
>
> **Env Vars:** bbb (5), pdj (3)
> **Code Identifiers:** myfile (5)
> **File Paths:** scores.txt (2)
> **Cross-References:** in the last (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### [Tempfile module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=0)** - [Instructor] We can use the Tempfile Module to create temporary files in [[Python (Programming Language)|Python]], but in order to use the Tempfile Module, we have to import it.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=8)** And so to import it, we'll go import tempfile.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=12)** Now that we have access to it, we'll go ahead and create a temporary file.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=16)** To do this, we'll create a variable.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=18)** So tempFile, which will hold our temporary file that we create and then to create the temporary file we'll access the module, so tempfile., and then the temporary file constructor there, and that will create our temporary file.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=34)** Now that our temporary file is stored inside a tempfile, we'll go ahead and access tempFile, and this is how we're going to write to the file.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=42)** And so we'll go write, and what we're going to want to write to this temporary file is just a special number.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=48)** And so we'll say Save this special number for me, it'll be 5678, and then 309.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=58)** And this is your special number that you're saving.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=60)** However, we're not done yet, and that's because this write method takes a bytes object, and here we have a string.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=67)** In order to turn the string into a bytes object, We add b here, and that actually turns it into a bytes literal.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=75)** Now that we've written something to the file, we'll need to go ahead and reset the seek pointer for the file.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=81)** And so we'll go tempFile.seek, set that pointer back to zero.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=85)** So then we can read from this temporary file.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=88)** And so to read from it, we'll just go print, tempFile.read, and this will print everything we read from the file, which is what we just wrote to the file.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=98)** And then once we're done with the file, we'll go ahead and close it with tempFile.close.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=103)** And so it's pretty similar to how we worked with files in previous videos.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=108)** Running this, we see save the special number for me, and it has the special number.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=113)** So with temporary files, we created a file, wrote to it, moved to the seek pointer, and then read it and printed it out to the output, the console.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/tempfile-module?u=76281980&t=123)** So if you have a program where you need to store some data easily, just for the program's execution, this might be the module for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** tempfile (5)
> **CLI Commands:** python (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Manipulate zip files in Python](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=0)** - Before we use the Zipfile module, let's create some files and then zip them up in a zip file.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=6)** We are going to create two files, and the first one that we're going to create is going to be called purchase.txt and inside of here, we'll print a couple things, say, things you've purchased are apples, towels, and candy.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=22)** These are things that you've purchased in the past week, and then we're going to create another file and it is going to be called wishlist.txt.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=31)** And again, this can hold any type of data, but say the thing that's on your wishlist is an iPhone.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=37)** And so now that we have these two files set up for us, we're going to go into the Finder and zip them up.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=43)** And so here are the two files and we'll go ahead and select them both, and then just compress the two items.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=50)** And now they're both in this archive here.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=53)** And now to make sure that these two files don't mess with anything else, we're going to go ahead and just put them somewhere else where we don't have to deal with them.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=62)** Back in the code here, we can go ahead and import the Zipfile module and then get access to this zip file that we just created called Archive.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=73)** And so to do this, we'll create a variable called zip, and this will represent our zip file in this case, and we'll access the Zipfile module, and then we'll access the zip file constructor, and so this will construct a zip file for us.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=87)** And all we'll have to do is put in the name of the file here and so it was called Archive.zip.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=94)** And then the mode that we are going to open this in is just the reading mode, similar to the file modes that we dealt with in a previous video.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=103)** With access to our zip file, we can then list everything that's inside of this zip folder.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=108)** And a zip file and a zip folder, those are both just the same thing.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=112)** We'll go zip.namelist, and this will list everything that's in that zip folder.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=118)** And we'll just print this out so we can see it.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=122)** And there we go.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=124)** We have our purchase.txt and we have our wishlist.txt and these are both in our archive, but notice in our Finder, they're not shown.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=132)** All you see that there is a zip folder and it's called Archive.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=137)** So with the Zipfile module, you kind of get a little bit of behind the scenes and what's in that zip file.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=143)** We can also go through the different [[Metadata]] that's in this zip folder, this zip file.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=148)** And to do that, we can use a for loop.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=150)** And so we'll say for meta in zip.infolist, and so this infolist is just a list of the metadata that's in there, and then meta is going to be each item that's inside of that infolist.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=164)** And for each meta, we're just going to go ahead and print it out.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=169)** Running this, we see that there's two items.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=171)** We have the metadata for purchased and we have the metadata for wishlist.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=175)** And so you see that they're text files, you see the compression type, you see what has access to different modes.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=182)** You see a bunch of other metadata that is associated with these files.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=186)** And this might be useful to you in a certain application.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=190)** And you can also get metadata for specific files.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=193)** And so you could go info equals zip.getinfo.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=198)** So getting the information, getting the metadata about, say, purchased.txt.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=202)** And so if we print this out and run it, we see that we again get the purchase.txt metadata.
>
> **[3:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=212)** We can also get the actual data that is in these files in the zip folder.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=217)** To do this, we can just go print zip.read, and we'll say wishlist.txt.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=224)** And so if we print that we see, oh, iPhone is there.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=228)** And notice there's a b here, meaning it's stored as a bytes object.
>
> **[3:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=233)** We can also get access to the file itself by going with zip.open wishlist.text and this is going to open the file that's inside of this zip folder and what file is it going to open?
>
> **[4:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=246)** The wishlist file.
>
> **[4:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=248)** And so we're going to say if converting wishlist.txt to a file is okay, then we're going to go ahead and read it as this f file.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=256)** And so f gets the value of what this zip.open returns and then we read it and then we print this and there we go, we get the iPhone again.
>
> **[4:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=266)** But there's a lot more you can do with that because you get access to this as a file f.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=272)** We can also extract files from the zipfile in [[Python (Programming Language)|Python]] code, and to do this, we can just go to zip.extract and we can just put the one file that we want to extract from the zip file, and so say it's purchased.txt, that's what we want to extract.
>
> **[4:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=287)** we can go ahead and run this.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=289)** And if we go back to the Finder, we'll see that purchased.txt has been extracted from the Archive.zip folder.
>
> **[4:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=297)** And then we'll go ahead and move this over here, somewhere where we don't have to deal with it.
>
> **[5:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=301)** We'll just replace it, not a huge deal.
>
> **[5:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=303)** And then we can go back to the code.
>
> **[5:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=306)** We'll comment this out, and we can actually extract everything that's in that zip folder by going zip.extractall, just like that, and this will extract everything that is in that zip folder.
>
> **[5:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=319)** We run this, go back to our Finder, and there we have the two items as well.
>
> **[5:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=325)** Now we'll go back to the code here and just zip.close this file so that way, it's all neat and tidy and everything is closed for us.
>
> **[5:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/manipulate-zip-files-in-python-14502520?u=76281980&t=334)** Knowing about the Zipfile module can be very helpful if you're working with zip files in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (8), [[Python (Programming Language)|Python]] (1)
> **File Paths:** wishlist.txt (4), purchase.txt (3), purchased.txt (3)
> **Exercise Files:** zip file (10)
> **Cross-References:** go back to (4), previous video (1)
> **Code Identifiers:** iphone (3)
> **CLI Commands:** make (1), python (1)
> **UI Navigation:** open the (1), go to (1)
> **Definitions:** is an  (1), is a  (1)

#### [Solution: Count words in a file](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=0)** - [Instructor] Let's count the words in a file using [[Python (Programming Language)|Python]].
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=4)** In the sample code, we're given a helper method called create_file.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=9)** This is used in the test code, so we can create a file and customize how many words are in it.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=15)** To count the number of words, we'll start by opening the file in read mode.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=21)** To do this, we have two options.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=24)** We could read each line individually, or we could use the read function to read the entire file into memory.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=32)** While both options work, reading each line individually allows us to reduce memory usage and process very large files.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=41)** Let's iterate through each line.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=44)** To split the file into words, we can use the split method.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=49)** This will divide the list into substrings that represent individual words based on a specific separator.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=55)** By default, that separator or delimiter is the space character.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=61)** This means the length of words in the words list is the number of words in this line.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=67)** To calculate the number of words in the whole file, we'll use a variable.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=72)** We'll increment this word_count variable based on the number of words in a given line.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=81)** At the end, word_count will have all of the words in the file.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=85)** Let's return it.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=88)** And we'll run our code.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=90)** Our implementation works as expected.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=93)** Now, let's try it with no words in the file.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=97)** Our code still works.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-count-words-in-file?u=76281980&t=99)** With this challenge, we counted the words in a given file using Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** word_count (2), create_file (1)
> **CLI Commands:** python (2)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)


### 4. Python: Date and Time, HTML Parsing, and HTTP

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting the current time with Python](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=0)** - [Instructor] We can use the datetime and calendar modules to get information about previous, current and future dates and times.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=7)** We'll start off with the datetime module.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=9)** And so, to import it, we're going to go from datetime, and datetime here is the module, and then we're going to go import datetime.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=17)** So here, datetime is the module and we're importing the datetime class from the datetime module.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=24)** Now that we have the datetime module here, we can get information about the current time date as of right now when we run the program.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=33)** So we're going to create a variable called now.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=35)** And we're going to set it equal to datetime, accessing that class, .now.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=41)** And this will get the current date and time according to this computer and it's going to be stored in the now variable.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=47)** To get the current date, all we have to do is go print now.date.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=53)** And this is just a method.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=54)** We'll print it out.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=55)** And there we go.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=56)** That's the current date.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=58)** We can also print out other things such as the year.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=61)** So we'll go now.year.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=64)** We'll print out the month with now.month.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=67)** We'll print out the hour, now.hour.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=70)** Printing this out in the console, we get 2016 is the year, 12 is the month and 13 is the hour.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=77)** And so, this is actually in military time, so it's one o'clock.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=81)** Printing out other things.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=82)** So we can go print now.minute.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=84)** Print now.second.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=88)** And then we can also print out the whole current time, which will have the hour, minute and seconds with now.time as a method.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=97)** Printing this out, we get 13 is our hour up there, 30 is our minute, zero is our second.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=104)** And there we go, that's the full time, very specific.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=108)** Notice some of these are methods and others are attributes.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=111)** And so, date and time are methods because they're combining several attributes whereas these are single numbers because they're just showing the number.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/getting-the-current-time-with-python-14502518?u=76281980&t=120)** This can be super useful if you need to display the current time or date or year in your application.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Formatting dates and times in Python with datetime](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=0)** - [Instructor] Now everything we've written so far has only come in one format, but we can actually control the format of our dates and times with strings.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=8)** We'll use something called shift time with the shift time method.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=12)** It takes one string and what's in the string determines how the contents of the now variable are displayed.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=19)** First, we'll control how the day of a given week or month is displayed.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=23)** With %a, we can have an abbreviated day of the week with just Mon, Tues, Wed displayed.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=29)** With %A, we can show the full name of the day of the week.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=33)** So Monday, Tuesday, et cetera.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=35)** And we can also display the day as the day of the month with %d.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=40)** So if it was going to be the 10th day of the month, %d would translate to 10.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=45)** Trying this out, we'll go now.strftime %a, %A, and then %d.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=56)** So this will display the abbreviated day of the week, the full day of the week, and then the numbered day of the week.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=63)** Printing this out, we'll add a print statement here, run the code, and we get Wed Wednesday, and then it's the 14th of the month.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=73)** We can also format the month.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=75)** We'll write %b if we want the abbreviated name of the month, we'll write %B if we want the full name, and %m if we want the number of the month.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=85)** Back in the code, we'll go ahead and test this out.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=88)** Again, with the shift time function, with now.strftime, %b, %B, and then %m.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=97)** And this is going to display the abbreviated name of the month, the full name of the month, and then the number of the month out of the year.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=104)** And so running this, we get December abbreviated, the full December and then 12, 'cause it's the 12th month.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=111)** Putting this all together, we can now format our date time with something like this.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=116)** We could say %a, which will give us the abbreviated day of the week.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=120)** We'll say %b, which will give us the full name of the month, and then %d, which will give us the number of the day out of the month.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=128)** And so running this, we get Wed December 14th, which is exactly what we were expecting.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=134)** If we made this a capital A, we would get the full Wednesday.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=138)** And there it is.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=139)** Now, you won't need to remember all of these percent a and percent b values, as you can look them up anytime with documentation or [[Google]], but knowing how to implement them and how we use them is exactly what we're doing here.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=154)** In addition to days and months, we can also format time.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=157)** We will have %H to display the hours, %M to show the minutes, %S to show the seconds, and % for AM or PM.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=167)** Testing this out, we'll go print now.strftime %H, %M, %S, and then %p.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=178)** Printing this out.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=180)** We'll see the exact time and it's formatted appropriately.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=183)** We can also add colons here so it looks exactly like a time usually looks.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=188)** Running this, we get 13 hours, 49 minutes, 25 seconds.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=192)** And it's in the PM.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=194)** Lastly, we'll format years.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=196)** If we only want two numbers for the year to be displayed, we'll use %y.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=202)** If we want four numbers, we'll use %Y.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=206)** Trying this in the code, we'll go print now.strftime, and then %y, %Y, and we'll get the two different formats for the year, which are 16 and 2016.
>
> **[3:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/formatting-dates-and-times-in-python-with-datetime-14507489?u=76281980&t=220)** This can be very useful if you need to format a date time in your application,

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Speakers:** - [instructor] (1)

#### [Calculating future times and Python calendar module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=0)** - [Instructor] Now we can use the timedelta class to get information about future and past times.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=5)** To get access to it, we're going to go ,timedelta, and that's because the timedelta class lives inside of the datetime module.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=13)** Say you have a testDate that's two days from now.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=16)** You could go testDate as your variable, and then do now plus timedelta days equals two.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=25)** So now testDate holds information about the day two days from now.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=30)** We can also look at past dates.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=32)** Say we do myFirstLinkedInCourse, and say you took your first [[LinkedIn]] course three weeks ago.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=40)** You can go now minus timedelta weeks equals three.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=46)** And because we're doing the subtraction sign here, it's going to go in the past and it's going to represent three weeks ago.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=53)** Printing these out, we can go print testDate, and because testDate is a datetime instance, we can go.date, and then we can also print out myFirstLinkedInCourse, because this is also an instance of datetime.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=69)** So we'll do that.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=71)** Seeing these dates, this is two days from now, and this was three weeks ago.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=76)** We can also compare times.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=78)** We can go if testDate is later than myFirstLinkedInCourse, then go ahead and print out Comparison works.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=89)** Printing this out, Comparison works, in a later date is considered greater than an earlier date.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=95)** We can also generate information about calendars.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=98)** So up here, we'll import the calendar module by going import calendar, and then we'll create a cal variable that will have the value of calendar.month.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=108)** And then we're going to go ahead and grab October from 2001.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=113)** We'll print out this calendar and we'll have a nicely formatted calendar down here that represents October in 2001.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=123)** We can also see what weekday certain dates were or are going to be in the future by going cal2 calendar.weekday 2001, say October, and then the 11th day.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=136)** So what weekday is the 11th in this month of this year?
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=141)** We'll go ahead and print this out down here.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=142)** We'll go print cal2.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=145)** Print this out and it says it's date three, which means it should be Thursday because our counting is going to start with zero on Monday.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=152)** So if it was on Monday, this would return zero.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=155)** If it was on Tuesday, this would return one.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=158)** Wednesday, it would return two and Thursday, it would return three.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=162)** So because the 11th is on a Thursday, we get three in the output for what weekday the 11th is in October 2001.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=171)** We can also check if a given year is a leap year.
>
> **[2:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=174)** So we can go print calendar.isleap, and then put any year we want in the parentheses.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=180)** So say 1999.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=183)** Printing it out, we get false because 1999 was not a leap year, but 2000 was, and so, we could go print calendar.isleap 2000.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=194)** Printing it out, we get true because 2000 was in fact a leap year.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/calculating-future-times-and-python-calendar-module?u=76281980&t=199)** Knowing these modules are very useful if you are working on an application that deals with dates, times or calendars.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** testdate (6), myfirstlinkedincourse (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Create a timer with the Python time module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=0)** - [Instructor] Let's create a timer with the time module.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=3)** And so, of course, to use the time module, we have to import it, and so we'll go import time, and the way the timer is going to work is it's going to go from 0 to 10.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=13)** And then once we hit 10, we're going to stop the timer and say we're done.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=17)** And so we'll want to ask the user, when should we start the timer?
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=20)** And so we're going to have this variable called run, and we're going to use the input function that we used in a previous video, Start, and then a little arrow here so the user can then say, yes, we want to start.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=33)** And so we'll have this other variable called seconds, which is going to keep track of how many seconds have passed, and we'll start it at 0 and then we'll say, if run, meaning what the user responded, equals yes, then we're going to go ahead and start the timer.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=49)** And so the way the timer is going to work is we're going to say while we haven't reached 10 seconds, then we're going to go ahead and continue running the timer.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=60)** And so the first thing we'll want to do with this timer is print out how many seconds have passed, in this case, it'll just be in the variable seconds.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=69)** And so at first, it's going to be 0 seconds, but then later on, we're going to increment it.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=73)** And as the while loop continues, we'll get to 10.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=76)** And then once we hit 10, we're going to break out of the while loop.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=79)** And so we can use the time module to see that a second has passed and so we'll go time.sleep, which will stop our program for one second, and then we'll go ahead and increment seconds here.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=91)** And then seconds will be 1.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=93)** We'll go up here.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=93)** We'll see that 1 does not equal 10.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=96)** We'll go ahead and print out the 1 second.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=98)** We'll sleep for another second and then seconds will be two because it will be incremented again until we hit 10.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=104)** And then eventually, we will break out once we hit 10 and the program will end.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=110)** Running this, we see our Start.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=113)** If we say anything else but yes, nothing happens.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=117)** But say we say yes, yes, we get this little timer here that goes 0, 1, 2, 3 and it's going to go all the way to 10.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=125)** And when it hits 10, we're just going to exit the program because there's nothing else that will run.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=131)** The reason that this didn't go all the way to 10 is because we set our stopping point at 10 here.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=136)** If we wanted it to go all the way to 10, we could add another line of code here, print, and then this line again, adding in those seconds, and this would allow us to print 10.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=149)** And so when we say yes here, it will print all the way to 10.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=157)** 8, 9, we hit 10 and then it exits.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/create-a-timer-with-the-python-time-module?u=76281980&t=161)** This can be useful for any applications that use some kind of timing or timer mechanism, as well as those where keeping track of time is important.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Python HTML parser module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=0)** - [Instructor] Let's use the [[HTML]] Parson module to parser some HTML code in [[Python (Programming Language)|Python]].
>
> **[0:05](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=5)** And so in order to parse HTML code, we have to import the HTML parser module, and so to do this, we'll go from html.parser, and from this parser we'll import the HTMLParser class.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=21)** However, before we get into parsing, let's review some HTML.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=25)** In HTML we have two types of tags, opening tags and closing tags.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=30)** Here, we have an opening paragraph tag which starts a paragraph, and the closing paragraph tag that ends a paragraph.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=36)** We also have comments in HTML that are like notes to the developer, and then we have a full line of code with an opening each one tag, hi there as our data, and then a closing header one tag.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=49)** Here, we're going to create a new class that inherits from the HTMLParser class, and then we're going to overwrite some methods from the inheriting class.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=58)** And so we're going to go class HTMLParser, and then we're inheriting from the HTMLParser class that we imported.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=66)** One method we're going to overwrite is def handle_starttag here, and we're going to have self, the tag, and then the attributes associated with the tag.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=77)** And inside of this method, we're just going to print the start tag to show what the start tag is.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=83)** We could do other things in here, but for this tutorial, we are just going to print all the tags out.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=89)** However, you could put them in a file, somewhere else, whatever your application needs.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=93)** We are also going to print out the attributes, and so we're going to say for each attributes in the attributes, we're going to go ahead and print out the given attribute.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=105)** So some of the attributes you might see here are like if the start tag is associated with a class or something like that, then we're going to have our def handle_endtag, and we're going to have the self, and then we're going to have the tag, and we're just going to go ahead and print that end tag.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=122)** So end tag, and then print it out with the comma there, then we're going to have a method that's going to handle the comments, and so we have handle_comments, and then we'll have the self and the data, and then we'll just print out each comment.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=141)** And then for our last method, we are going to handle the data, which would be what's inside of each tag, and so if you have a header tag, it will be, what was that header?
>
> **[2:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=151)** And then we'll have the data, and then we'll just print out the data that we have.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=157)** So let's go ahead and test this out.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=159)** The first thing we're going to do is create an instance of our parser, and so we're going to go parser equals HTMLParser, then we're going to feed some HTML code to this parser.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=170)** So we're going to go parser.feed and then our HTML code, which in this case, we'll start in HTML file, we'll have head with the title, and the data for this title will be coder, we'll close that title tag, we'll close the head tag, and then we'll also have a body, we'll have an opening each one tag, we'll have a little comment that says, hi, we'll have some data in our header, I am a coder, we'll close that each one tag, and then we'll go ahead and close the body here, as well as the HTML tag, we'll do a print line here, go ahead and run it, and now we've parsed through all of our tags.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=216)** We had our start tag for the HTML, we had our head tag, we had our title tag, we have our data, which is coder, that's the title that we want, then we have the end title tag, end head tag, et cetera.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=227)** You see our comment hi here that's from inside of here.
>
> **[3:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=231)** We have the data, I am a coder, that's inside of our h1 tag here.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=236)** This is really great if you want to parse through HTML code in Python.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=240)** Another way you could use this parser is by inputting live data into the program, and so you could have a variable called input and then have the user actually input HTML code live, so you could have put in HTML code, and then we can go ahead and parse that input that the user puts in, and then we'll print out a new line, so that way it's formatted.
>
> **[4:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=265)** So say like as the user cause remember this is the console, this is what the user is going to interact with.
>
> **[4:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=270)** So say I wrote h1 [[[LinkedIn]].com](https://LinkedIn.com), and then close that h1 tag.
>
> **[4:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=278)** There we go, it parses our tag dynamically for us depending on what we put in as the input.
>
> **[4:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=284)** It has our start tag, it has our data, and it has our end tag.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=288)** We can also parse data from a saved file.
>
> **[4:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=291)** So in order to do this, we're going to create a new file here, and we're going to call it sampleHTML.html, and then we're going to move it to our exercise files directory.
>
> **[5:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=303)** You shouldn't have to move it into an outer directory, but because I'm using Phy time, this will make it easier to access.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=311)** So we'll go ahead and open it here, and inside of here, we'll add some HTML code.
>
> **[5:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=317)** So I'm just going to add a header two, with header two, and we'll call it welcome, and then I'm also going to add a paragraph tag, and it's going to say welcome to my blog because say you were pursing your blog, and I'm going to go ahead and save it, Yyu can go command S if you're on a Mac or you can save it up here and do a save as in right over it.
>
> **[5:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=340)** So I'm just going to go command S that's going to say it, and then I'm going to move back over, and we're going to open this file inside of our Python code, and we actually learned how to do this in a previous video.
>
> **[5:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=351)** So we'll go HTML file equals open sampleHTML.html, and we're going to open it in the reading mode, then we'll create a variable called S, and because our HTML code is on multiple lines, we have the first line with the header two, and the second line with the paragraph tag, we'll want to iterate through the file and put them all into one string that can then be processed by the parser.
>
> **[6:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=375)** And so we'll just go for line in htmlFile, we'll go S plus equals line, so adding each line of the file to that string, and then we'll go ahead and feed that string to the parser here.
>
> **[6:30](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=390)** And so playing this, we'll go ahead and just do an h1 tag here for inputs because we didn't comment it out, and there we go, we have an h2 tag, a welcome in h2, and then we have a paragraph tag, a welcome to my blog, and then another paragraph tag.
>
> **[6:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=406)** The reason we have this blank data here is because we actually have a new line, and so that's why we see that.
>
> **[6:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=412)** If you didn't want this to happen, then you would need to remove all of the slash ends from your line before adding it to S, or you could change this code, so that way it recognizes, oh, this is a slash end, and then I'm not going to print out anything.
>
> **[7:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-html-parser-module?u=76281980&t=427)** Knowing about the HTML parser can be very helpful if you want to do some web scraping in the future, or if you just want to see the data inside of your HTML files more easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (23), [[Python (Programming Language)|Python]] (3), [[LinkedIn]] (1)
> **Env Vars:** html (20)
> **Code Identifiers:** samplehtml (2), handle_starttag (1), handle_endtag (1), handle_comments (1), htmlfile (1)
> **CLI Commands:** python (3), make (1)
> **File Paths:** samplehtml.html (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** previous video (1)
> **Exercise Files:** exercise files (1)

#### [Text wrap module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=0)** - [Instructor] Let's figure out how to format text with the text wrap module.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=4)** And in order to use this module, we need to import it.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=6)** And so we're going to go import textwrap, and we'll go ahead and print the text without any dedenting.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=13)** And we'll learn what that means in a minute.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=15)** So we'll go print(textwrap.fill(websiteText)).
>
> **[0:21](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=21)** And so printing this out, you'll see that when we printed it, it kept this beginning space that we had up here, but it didn't keep our Enters, meaning it broke our text at different places.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=34)** So it kind of edited it on its own and filled a certain particular space, but still kept this beginning tab here.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=42)** This is one way that you could display your text.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=45)** Another way is to have dedenting.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=47)** And what this is going to do is it's going to take away our beginning and later spaces, and it's going to keep the Enters that we had here.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=54)** It's not going to reformat them.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=56)** And so in order to create dedent text, we'll go dedent_text = textwrap.dedent(websiteText).strip().
>
> **[1:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=69)** And then we'll go ahead and print out this dedented text, dedent text, run it, and we'll see that it takes away this beginning space, but it keeps the Enters or the words we entered on inside the body of the text.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=85)** This again is another way that you could display text with the text wrap module.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=91)** But we can also make it so our text fills only a certain portion of the page, say, 30 columns or 80 columns.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=98)** So let's go ahead and try this by going print textwrap.fill, we'll put it in the dedented text, which is formatted appropriately, and then we'll add the number of columns that we want it to spread across.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=112)** And you'll get a sense of how many columns equal how much space once you start messing with it.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=117)** And so we'll put in 50 here, and then we'll add another print statement here so that way it's separated from what we did before.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=124)** And here, we can see it filling about 50 of the characters across the screen.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=129)** Trying this with the different column number, we could go print textwrap.fill, again with our dedented text, and we'll have the width, 100, say, and it will fill it out across 100 characters even if those characters go off the screen, as we see there.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=147)** So it's really up to you as well as the size of the font, how much a certain text fills a certain space.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=155)** We can also control the indent on text.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=157)** And so we could go print textwrap.fill, we'll, again, use this dedent text that takes away that beginning space, and then we'll have initial indents, and you could make this as big or as little as you want.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=173)** We're going to make it three spaces here, and then we can say subsequence indent, and have that equal nothing for now.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=183)** Running this, and now we can see the text has this beginning indent.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=189)** Now we can also add a subsequent indent, make this one, two, three tabs worth.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=194)** We go ahead and run it.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=196)** And it's going to go ahead and tab the subsequent lines by that much.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=202)** The last thing that we can do with the text wrap module is we can shorten text or abbreviate it in a certain way.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=208)** We could have short = textwrap.shorten, so using the shorten method, write in some code here, [[[LinkedIn]].com](https://LinkedIn.com) is great!
>
> **[3:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=223)** We'll make the width, which is how many columns or how many characters that we're going to go until we replaced the [[Representational State Transfer (REST)|rest]] with the placeholder, and that is going to be 15 here, and then we're going to go ahead and make the placeholder, which is going to be what comes after our 15 columns or our 15 characters, and we'll make that just .... And so we print this out, so we'll go ahead and run this.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=247)** And we see that [LinkedIn.com](https://LinkedIn.com) goes 15 columns.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/text-wrap-module-14504433?u=76281980&t=251)** We only see that portion, and then we get the .... If you have a program where you need to format output text that goes to a file or straight to the user through the print function, this will be super helpful for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** websitetext (2), dedent_text (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2)
> **Speakers:** - [instructor] (1)

#### [Python HTTP package and urllib and JSON modules](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=0)** - [Instructor] We are going to use the urllib module to get content from the internet.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=4)** To do this, we're going to have to import some things.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=7)** So we are going to import the sequestrable and this is just a class that we're going to use.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=14)** Then we're going to import [[JSON]] and we're also going to import the textwrap module, and I'll explain how these fit in in a minute.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=24)** But in this video, we are going to use the [[Google]] Books API.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=27)** And so what's going to happen is we are going to give Google Books an ISBN number and then it's going to take that ISBN number and get some data on that specific book.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=37)** And so this is the URL that we are going to use to do this.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=41)** And so in order to make this get request, we are going to go with sequestrable, so using this urllib module, urlopen, which is the function we're using, and I'm just going to copy and paste this right inside of here inside of a string.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=61)** To find out more information about the Google Books API and how this URL works, go look at the information down below.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=68)** This URL will also be down there and so you can just copy and paste it right into your code.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=74)** So we'll go ahead and close this parentheses, and then we'll go as f.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=79)** So we're saying if this request works, then we're going to go ahead and call it f.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=84)** With f, we are going to create a variable called text, and we're going to go f.read, which is going to read everything that the request returned.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=93)** Then we're going to go ahead and decode this text into UTF-8, create a variable called decodedtext.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=101)** We'll call it text.decode and we'll have utf-8.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=106)** The reason we're doing this is so that we can have it decoded so we can print it out to the user.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=111)** And so we'll go print using the textwrap module that we learned about in a different video, .fill.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=118)** We'll have our decoded text and we'll go ahead and go width=50.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=124)** Printing this out, we see this entire JSON object is what's returned by this API.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=131)** And we can actually go to this link and that's exactly what we'll see.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=134)** So if we go ahead and copy this and put it into our browser, paste it here, this is exactly what was printed out to us in the console in our [[Python (Programming Language)|Python]].
>
> **[2:25](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=145)** And so now we have access to this JSON object.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=149)** Inside of our Python code, we can iterate through this JSON object and get the information we want, maybe the title, some authors, et cetera.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=157)** All the information about this specific book with this given API is there.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=163)** If we wanted to see information about a different book, all we'd have to do is change the ISBN number here.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=170)** So let's go ahead and load the JSON so that way we can manipulate the data and print specific things out to the user.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=176)** So we'll add a little print statement here to separate it from the stuff that was returned from the request.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=182)** And then we'll go obj json.loads, so using the JSON module, decodedtext.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=190)** So what the JSON module is doing is it's loading this decodedtext so that way we can iterate it inside of our Python code.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=198)** With this object in the right format, we could go print obj and then kind.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=203)** And so if you notice here, one of the attributes of this object is kind.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=209)** So when we print this out, we should get book#volumes in return.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=214)** Printing this out, that's exactly what we get.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=217)** And although it may be hard to read here, you can always look at this document here by just going to the URL link and you could see like, oh, kind is one attribute, and you could go through all of these, selecting the right attributes and get the information you want.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=234)** Trying this in another example, we're going to go print obj items 0 searchInfo,
>
> **[4:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=244)** and then textSnippet.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=247)** And we're actually going to go back to our browser to kind of see what exactly this is accessing.
>
> **[4:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=253)** And so in our code, we were accessing the object.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=256)** We were accessing the items.
>
> **[4:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=258)** We were picking the first item that we have here, which is this entire thing.
>
> **[4:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=263)** Scrolling down, we'll see, oh, one of the things inside of our items for the first item is searchInfo, so we select that.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=272)** Inside of searchInfo, we have textSnippet.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=275)** And for the value of that, we have this description that kind of describes the book that we're talking about with this ISBN number.
>
> **[4:41](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=281)** So that's what we're going to print out in our code.
>
> **[4:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=284)** So we had our items, we picked the first item, we access the searchInfo and then inside of that, we access textSnippet.
>
> **[4:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=292)** And so printing this, we get the little snippet that we saw in our browser.
>
> **[4:58](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=298)** It's important to note that we have 0 here and that's because items is a list.
>
> **[5:04](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=304)** With this here, we see, oh, we are going to list some items.
>
> **[5:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=307)** And in order to access stuff in a list, they're accessed by index with the index starting at 0.
>
> **[5:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=313)** So the first item is going to have index 0.
>
> **[5:16](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=316)** For these other things, like kind here, kind is an attribute of this object because there's a curly brace here.
>
> **[5:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=323)** So that's why we just have this accessing of the given attribute here.
>
> **[5:27](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=327)** It's important to note that we have 0 here and that's because we're accessing the first thing inside of the items list.
>
> **[5:34](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=334)** Going back to our browser, we can see this more clearly.
>
> **[5:38](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=338)** We see that items is a list and it only has one item in this list.
>
> **[5:43](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=343)** We have this entire huge thing.
>
> **[5:46](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=346)** And to access this, all we do is items at 0 because lists are accessed by index and they start at 0 and go all the way to the list size minus 1.
>
> **[5:56](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=356)** And here since the list size is only 1, the only index that we can access is 0.
>
> **[6:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=362)** And once we're inside the first item of the list, then we're looking for searchInfo, and that's what we see here and that's what we go into, and then we access textSnippet, which is an attribute of the searchInfo.
>
> **[6:13](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=373)** And then we ultimately get this description that we then print out to the user.
>
> **[6:18](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=378)** It's very useful to know what form your data will be in in order to retrieve what you want.
>
> **[6:23](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=383)** Knowing this module is also super helpful if you need to get data from an endpoint in a project.
>
> **[6:28](https://www.linkedin.com/learning/learning-the-python-3-standard-library/python-http-package-and-urllib-and-json-modules?u=76281980&t=388)** Here, it was the Google Books API, but in the future, it could be whatever API you'd like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[Google]] (4), [[Python (Programming Language)|Python]] (3)
> **Env Vars:** api (6), json (6), isbn (4), url (4), utf (1)
> **Code Identifiers:** searchinfo (6), textsnippet (4)
> **CLI Commands:** python (3), make (1), find (1)
> **Definitions:** is a  (2), is an  (2)
> **Warnings:** note that (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Solution: Add Fractions with Fraction Module](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=0)** - [Instructor] Let's add fractions in [[Python (Programming Language)|Python]].
>
> **[0:02](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=2)** In the function, we're given the numerator and denominator for two fractions.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=7)** We can use the fractions module in Python to simplify some of this logic.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=11)** Let's import the fraction class.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=14)** We'll use this class to create two fraction instances.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=20)** The fraction class automatically handles arithmetic operations for us, for example, to add two fractions, we just use the plus operator.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=31)** Then we can extract the numerator and denominator from the sum.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=37)** And this is exactly what we want to return.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=40)** Let's run it.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=42)** Our implementation works as expected.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=44)** Let's try it with a negative fraction.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=47)** We'll run it again.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=49)** Our code also works with this case.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-python-3-standard-library/solution-add-fractions-with-fractions-module?u=76281980&t=52)** With the fractions module, we can represent data as fractions and run mathematical operations on them accurately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Add these built-in functions to your own applications](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=0)** - Congratulations, you've finished the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=3)** From here, try using some of the built-in functions and modules in your own applications.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=8)** Whether it's using the [[Statistics]] module for math or the input and output functions for interaction, you'll soon find out that these tools really come in handy.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=17)** Personally, my first [[Python (Programming Language)|Python]] project was creating a Mad Libs application, and the possibilities with Python are truly endless.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=24)** If you're interested in [[Data Science]] and a budding software engineer, you'll definitely want to check out more of the Python courses in the library.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-python-3-standard-library/add-these-built-in-functions-to-your-own-applications?u=76281980&t=31)** Good luck, and until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Statistics]] (1), [[Data Science]] (1)
> **CLI Commands:** python (3), find (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Getting Started with Python]]
← [[Python Object-Oriented Programming]] | **4 of 8** | [[Programming Foundations- Data Structures]] →

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