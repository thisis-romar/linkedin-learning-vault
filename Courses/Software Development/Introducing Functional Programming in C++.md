---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introducing-functional-programming-in-c-plus-plus
url: "https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 12/11/2018
learners: 86969
skills:
  - Functional Programming
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH51xAl4RFJ0g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117610592?e=2147483647&amp;v=beta&amp;t=tXzvEu1g5BOb63e5upc8jpo7c5FTHuFoKLz9x8bCdNo"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with C++]]'
prev_courses:
  - '[[Complete Guide To C Plus Plus Programming Foundations]]'
next_courses:
  - '[[Learning C++]]'
path_nav: '[{"path":"Getting Started with C++","position":2,"total":5,"prev":"Complete Guide To C Plus Plus Programming Foundations","next":"Learning C++"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/functional-programming
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Introducing%20Functional%20Programming%20in%20C%2B%2B.md)

![Introducing Functional Programming in C++](https://media.licdn.com/dms/image/v2/C4E0DAQH51xAl4RFJ0g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117610592?e=2147483647&amp;v=beta&amp;t=tXzvEu1g5BOb63e5upc8jpo7c5FTHuFoKLz9x8bCdNo)

# Introducing Functional Programming in C++

> Functional programming allows you to write more concise code that's easier to read, debug, and maintain. It revolves around powerful, mathematical functions that tell the computer what to do—not how to do it. The developer doesn't have to worry about order of execution, loops, or conditions. You simply define the desired outcome; the computer takes care of the rest. This course introduces the bene

> [LinkedIn Learning](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus) | 1h 15m | Intermediate | 87K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Unleash the power functional programming in C++](#unleash-the-power-functional-programming-in-c)
  - [What you should know](#what-you-should-know)
- [**1. Overview**](#1-overview) (2 videos)
  - [Benefits of functional programming](#benefits-of-functional-programming)
  - [Unit testing functional programming](#unit-testing-functional-programming)
- [**2. Functional Programming in Modern C++**](#2-functional-programming-in-modern-c) (10 videos)
  - [Enabling C++ 17](#enabling-c-17)
  - [transform instead of map](#transform-instead-of-map)
  - [copy_if instead of filter](#copy_if-instead-of-filter)
  - [accumulate instead of reduce](#accumulate-instead-of-reduce)
  - [bind](#bind)
  - [Functions](#functions)
  - [Lambda functions: Curry](#lambda-functions-curry)
  - [Lambda functions: Closures](#lambda-functions-closures)
  - [Challenge: Factorial continuous add](#challenge-factorial-continuous-add)
  - [Solution: Factorial continuous add](#solution-factorial-continuous-add)
- [**3. Template Metaprogramming**](#3-template-metaprogramming) (7 videos)
  - [C++ templates](#c-templates)
  - [Factorial](#factorial)
  - [The Standard Template Library](#the-standard-template-library)
  - [Functional programming libraries](#functional-programming-libraries)
  - [Boost.Hana](#boosthana)
  - [Challenge: Fibonacci generator](#challenge-fibonacci-generator)
  - [Solution: Fibonacci generator](#solution-fibonacci-generator)
- [**4. Functional Reactive Programming**](#4-functional-reactive-programming) (4 videos)
  - [Intro to Reactive Extensions](#intro-to-reactive-extensions)
  - [RxCpp library](#rxcpp-library)
  - [Challenge: Word frequency counter](#challenge-word-frequency-counter)
  - [Solution: Word frequency counter](#solution-word-frequency-counter)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Unleash the power functional programming in C++](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980&t=0)** - [Troy] [[Functional Programming]] in C++ allows you to write less code that is also more powerful.
>
> **[0:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980&t=5)** Functional programming teaches us to tell the computer what we want instead of telling it how to do it.
>
> **[0:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980&t=11)** Hi, I'm Troy Miles, and I've written award-winning games, popular mobile apps, and large-scale public websites.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980&t=17)** In this course, we'll explore different techniques and libraries to make our C++ code more functional.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [troy] (1)

#### [What you should know](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=1)** - [Instructor] You should be an experienced C++ programmer.
>
> **[0:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=3)** This is not a teach you to program C++ course.
>
> **[0:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=7)** It is a course to teach you a different technique for programming C++.
>
> **[0:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=11)** I am on a Mac using Visual Studio Code as my editor.
>
> **[0:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=14)** However, any text editor you've used for C++ development will work fine.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=20)** In Visual Studio Code, I have font ligatures turned on.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=23)** This joins two characters next to each other into one.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=26)** For instance, when I type a dash and a greater-than sign, it will display as a right arrow.
>
> **[0:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=32)** I will be using the Clang Compiler from a command line.
>
> **[0:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=35)** However, GCC and [[Microsoft]] compilers will also work.
>
> **[0:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=39)** For this course, I've downloaded the Boost RxCpp and Catch2 libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Tools:** visual studio (2), command line (1)
> **Env Vars:** gcc (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Benefits of functional programming](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=1)** - [Narrator] [[Functional Programming]] has many benefits.
>
> **[0:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=3)** Here are my top three.
>
> **[0:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=5)** Pure functions are simple by design making them understandable.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=9)** Without classes and by emphasizing pure functions our code is easier to debug and test and since we lack mutable state, multi-threading is achievable.
>
> **[0:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=19)** What does it mean to program in a functional style?
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=22)** The answer depends on who you ask, but here are a few common trades.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=25)** We try to avoid data mutations so all of our variables tend to be immutable.
>
> **[0:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=30)** Immutable is just a fancy [[Microsoft Word|word]] for a constant.
>
> **[0:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=34)** If you can't change variables, loops are difficult to implement so recursion is preferred.
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=40)** We keep functions clean and straightforward.
>
> **[0:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=42)** Functions are pure meaning they have outputs which depend only on their inputs.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=47)** They also avoid making changes to program state which makes them side-effect free.
>
> **[0:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=53)** We prefer using expressions to statements.
>
> **[0:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=56)** Expressions return values and can appear on the right hand side of an equal sign.
>
> **[1:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=61)** Statements return nothing and exist mainly to cause side effects.
>
> **[1:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=65)** Finally, currying and partial applications manage how we send our arguments to functions.
>
> **[1:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=71)** Since C++ is not a functional programming language, these are all more guidelines than rules.
>
> **[1:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=77)** The coding community sometimes things that object-oriented and functional programming are enemies, they are not.
>
> **[1:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=84)** To quote Uncle Bob Martin, "Functional programs like object-oriented programs "are composed of functions that operate on data."
>
> **[1:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=92)** We can use the best of each paradigm such as object-oriented polymorphism and single purpose classes and functional programming's emphasis on immutability and pure functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (4), [[Microsoft Word|Word]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Unit testing functional programming](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=1)** - [Instructor] One of the nice benefits of [[Functional Programming]] is easier testing, not having classes to mock or instantiate makes testing simpler, using pure functions whose outputs solely depends on their inputs, means the tests almost write themselves.
>
> **[0:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=16)** Let's take a quick look at [[Unit Testing]] a C++ program written functionally.
>
> **[0:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=21)** We'll download the open source, Catch2, unit test framework.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=25)** So, here's the Catch2 website, we're going to scroll down until we see the logo, and then, just past the logo, there is a long blue link, which says single header can be downloaded directly using this link.
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=40)** We're going to click that.
>
> **[0:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=42)** That will download the catch.hpp file to our machine, and then, we're going to copy that catch.hpp file to our working directory.
>
> **[0:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=55)** Yeah, we're going to go to Visual Studio Code, and here, we have main.cpp plus catch.hpp.
>
> **[1:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=63)** This code uses the Catch2 unit test framework.
>
> **[1:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=68)** The define statement CATCH_CONFIG_MAIN tells catch to create a main function.
>
> **[1:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=74)** You only need to do this once.
>
> **[1:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=76)** Next comes, catch.hpp.
>
> **[1:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=79)** It is the unit test framework's single header file.
>
> **[1:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=83)** It's giving us a green squiggly, but that's, that's wrong.
>
> **[1:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=87)** Every now and then, Visual Studio Code gives a false positive.
>
> **[1:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=91)** Next, comes our single function, fibonacci, which computes the series value for the past number.
>
> **[1:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=96)** Note that this function is both pure and recursive.
>
> **[1:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=100)** Below the function, is the test case, and it's going to check to make sure that we received the correct output for each input.
>
> **[1:49](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=109)** From the terminal, let's build the app, and so, I'm going to right-click on main.cpp, choose Open in Terminal, and then, I'm going to type clang++
>
> **[2:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=122)** - std=c++17.
>
> **[2:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=129)** I always like to have all my warnings on, so that's a dash, capital W, A-L-L, for all, and main.cpp.
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=139)** Once this finishes building, by default, the compile creates the name a.out, and so, to execute our program, we're going to type ./a.out and that will execute our unit test for us, and right now, it's telling us all tests passed.
>
> **[2:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=158)** So, looks like our code is working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1), [[Unit Testing]] (1)
> **Tools:** visual studio (2), terminal (2)
> **File Paths:** main.cpp (3)
> **UI Navigation:** scroll down (1), go to (1), right-click (1)
> **Exercise Files:** download the (2)
> **Speakers:** - [instructor] (1), - std (1)
> **CLI Commands:** make (1)
> **Env Vars:** catch_config_main (1)


### 2. Functional Programming in Modern C++

[↑ Back to Table of Contents](#table-of-contents)

#### [Enabling C++ 17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=1)** - [Instructor] To get the most functional features, we're going to build our code for C++ 17.
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=6)** We won't always need it, but it doesn't hurt to have it available.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=9)** Each of the three big compilers, [[Microsoft]], Clang and GCC has excellent C++ 17 support.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=17)** Here are the command line flags to activate it.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=20)** If you use CMake to build your programs, then it's easy to add C++ 17 support, simply add the line set CMake CXX standard space 17 near the top of your CMake list dot text file.
>
> **[0:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=35)** That's all it takes.
>
> **[0:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=37)** Let's build an actual C++ 17 program and pay attention to the command line options this time.
>
> **[0:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=43)** Let's open Visual Studio Code we're going to go file, new and we'll begin by saying pound include and this is going to be iostream.
>
> **[0:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=59)** Next we'll add a space and then we're going to have a name space and our usage here is going to be a little bit silly but it will test a compiler C++ 17 feature so we're going to say A colon colon, that's the scope resolution operator, B colon colon, C.
>
> **[1:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=79)** This is C++ 17's nested name spaces and a space, an open curly brace, a closed curly brace and in between them, we're going to type int I colon.
>
> **[1:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=95)** Then we'll come down a couple of lines and we'll have int main, every C++ program needs its main function, and we're going to do A colon colon, B colon colon, C colon colon I equals 42.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=114)** Then we'll do std colon colon c out and then we'll say nested name spaces are available colon space, closed quotes and then we'll say A colon colon, B colon colon, C colon colon I and then we'll close this up by saying std colon colon end L and we'll return zero.
>
> **[2:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=152)** We'll go back up to the file menu click save, we're going to name this main dot cpp all lowercase.
>
> **[2:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=163)** Save it.
>
> **[2:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=165)** Then I'm going to right click on this file and say open in terminal and then from the terminal, the command to compile it for C++ 17 is clang, C L A N G, plus plus space dash std equals C++ 17 dash capital W for warnings and I want all the warnings so that's all and then main dot cpp and by default, this is going to be called a dot out so to execute it we're going to say dot forward slash a dot out and we get the message nested name spaces are available.
>
> **[3:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=214)** Now, just out of curiosity, if we wanted to see what happens when we don't have C++ 17, let us compile it for C++ 14 so we'll do clang plus plus dash std equals C++ 14 dash capital W all, main dot cpp and we'll try building this and you notice that we get a warning.
>
> **[4:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=244)** Nested name space definition is a C++ 17 extension and it tells us you know that hey it doesn't understand what this means under C++ 14.
>
> **[4:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=255)** And either way, we know now that we get a warning message and if we build it under C++ 17, all is fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Tools:** command line (2), terminal (2), visual studio (1)
> **Env Vars:** gcc (1), cxx (1)
> **Warnings:** warning (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [transform instead of map](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=1)** - [Instructor] The first methods that newbie functional programmers learn are map, filter and reduce.
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=6)** A lot of languages, [[Databases]], and libraries have these methods, but unfortunately they don't exist in C++.
>
> **[0:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=13)** But don't fret, we have substitutes available.
>
> **[0:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=16)** Instead of map, filter and reduce, we have transform, copy if, and accumulate.
>
> **[0:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=21)** These replacements aren't functional, nor are they pure, but they have been part of the C++ standard library since the 1990s.
>
> **[0:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=29)** We could create implementations of them from scratch, but that usually isn't a good idea.
>
> **[0:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=34)** The [[Algorithms]] of the standard library have had over 20 years of optimizations and improvements.
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=40)** So let's go back to visual studio code.
>
> **[0:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=42)** Let us go into file, new.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=47)** And the first thing that we're going to do is we're going to add some include files.
>
> **[0:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=50)** So we'll say include iostream, include algorithm, include vector, and finally, include numeric.
>
> **[1:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=75)** Then we're going to save ourselves a little bit of typing by putting in using namespace std, and we'll create our main function.
>
> **[1:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=85)** We're not going to pass it anything.
>
> **[1:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=87)** Close it up, on the last line of the main function we'll say return 0, and then we'll go back to the top of it, and here we'll create auto render.
>
> **[1:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=97)** And this is going to be a lambda function, and this lambda function is going to take auto collection.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=105)** We're going to use this guy to render out our collection so we can see what's in them.
>
> **[1:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=111)** And, let's see, we'll have a semicolon right there, and then in the middle we'll have for, and this is going to be a const auto reference to a val and then collections.
>
> **[2:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=127)** So this is in range collection.
>
> **[2:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=132)** And we'll say cout, val, and then endl semicolon.
>
> **[2:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=142)** Then we'll start doing our transform and the first thing that we need to do, is we need to create a vector to hold a list of data for us.
>
> **[2:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=154)** So we're going to call this in collection, we'll use list initialization here and say one.
>
> **[2:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=165)** We're going to go all the way up to 10 here.
>
> **[2:49](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=169)** So we got the numbers one through 10.
>
> **[2:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=173)** And then we're going to have another vector, it's also going to be an int, and we're going to call this one out collection, But we don't need to initialize it.
>
> **[3:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=184)** Then we'll do a transform, and transform takes four parameters.
>
> **[3:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=190)** Takes a begin iterator, that's going to be in collection.begin, an end iterator, and this is going to be in collection.end.
>
> **[3:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=204)** Come on down to the line below it here, there we'll have a back inserter.
>
> **[3:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=211)** And since our destination collection is empty, we have to use a back inserter.
>
> **[3:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=218)** And it's out collection, and we have our lambda function and this function gets called once for each item in our collection, and it's going to do a transform of it, and return whatever the results of that transform is.
>
> **[3:58](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=238)** So we'll do a const int reference to a value, and then here we'll say return value times three semicolon.
>
> **[4:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=255)** Then we need one semicolon right here and let's do this, we'll say cout we'll just say transform, do an endl here, then we'll do a render and we'll say out collection here and this will let us see what's going on.
>
> **[4:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=279)** We'll save this off with a command s, we'll call it main.cpp, save it.
>
> **[4:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=287)** We will open in terminal, bring this up a little bit, and we're going to say clang++
>
> **[4:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=297)** - std=C++17
>
> **[5:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=301)** - Wall for all warnings and then main.cpp.
>
> **[5:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=308)** And then we do a ./a.out to run our program, and what we get is we see it says transform and we get the numbers all the way from 3 to 30 by three so it's multiplying our 1 through 10 to be 3 to 30 and that is our transform method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Algorithms]] (1)
> **Speakers:** - [instructor] (1), - std (1), - wall (1)
> **File Paths:** main.cpp (2)
> **Tools:** visual studio (1), terminal (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** initialization (1)

#### [copy_if instead of filter](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=1)** - [Instructor] So let's go ahead and create our copy_if.
>
> **[0:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=4)** So first thing we want to do is get a little bit of space.
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=6)** We're going to create another vector.
>
> **[0:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=8)** It's going to be of int, and we'll call this filteredCollection.
>
> **[0:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=16)** We're going to use back_inserter on it, so we don't need to initialize it with any data, and we're going to have our copy_if, and it takes an outCollection.begin, which is our begin iterator.
>
> **[0:33](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=33)** Then we're going to have outCollection.end.
>
> **[0:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=39)** There's our end iterator, and we'll go ahead and put this on the next line.
>
> **[0:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=43)** We'll scroll up a little bit, just give ourselves a little bit more room.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=47)** Then we're going to have a back_inserter, back underscore inserter, and this is going to take our filteredCollection, and finally, we'll have our lambda, and our lambda is going to be open, close square brackets, parentheses, and we have an int, reference to a value, and then open and close curly braces, and inside of here, we will have a return, and it will do a value, modulus two, not equal to zero, and this is going to say if it is an odd value, keep it in our collection.
>
> **[1:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=96)** Then we have our closing curly brace, our closing parentheses, and our semi-colon, and I don't need that one right there anymore.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=105)** Then we'll say cout, and for the cout, we'll just say copy_if, and an end line, and then we'll do a render, filteredCollection, and a semi-colon.
>
> **[2:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=124)** Do a Command + S to save this off.
>
> **[2:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=126)** Do an Open in Terminal, and we'll do clang++
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=134)** - std=c++17
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=139)** - Wall, that's for all the warnings, and finally, main.cpp.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=148)** Then we'll do a ./a.out to execute our program, and let's see what we got.
>
> **[2:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=154)** We still have our Transform.
>
> **[2:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=156)** We get the numbers three through 30.
>
> **[2:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=158)** That is our transformation of multiplying the numbers one through 10 by, by multiplying it by three, and our copy_if is looking for only the odd numbers, and it's going to take the odd numbers out of here, and we get three, nine, 15, 21, and 24, so.
>
> **[2:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=172)** 24 is gone.
>
> **[2:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=174)** 30 is gone.
>
> **[2:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=176)** And that is our copy_if.

> [!info]- Semantic Content
>
> **Code Identifiers:** copy_if (5), filteredcollection (3), back_inserter (2), outcollection (2)
> **Speakers:** - [instructor] (1), - std (1), - wall (1)
> **File Paths:** main.cpp (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is an  (1)

#### [accumulate instead of reduce](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=1)** - [Instructor] At last we've reached the Accumulate function.
>
> **[0:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=4)** So here we will do int results equals accumulate and accumulate takes four parameters.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=23)** It's going to take a filtered collection dot begin that is the begin iterator, a filtered collection dot end for end iterator, do a comma and then go to the next line.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=47)** Then it takes a, and in this case it's going to be an integer value, which is the initial value for the accumulate.
>
> **[0:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=56)** And in our case, it's going to be zero 'cause we want to add all our numbers together and we're going to start at zero.
>
> **[1:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=62)** Then it takes the lambda function, which is a binary operation.
>
> **[1:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=66)** And so this takes two values, the first one's going to be int total and the second one we're going to call int current.
>
> **[1:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=76)** Then inside we're going to say return total plus current.
>
> **[1:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=85)** And then a semi-colon, end of our curly brace, and then we're going to have a semi-colon.
>
> **[1:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=94)** And right here we'll do a c out.
>
> **[1:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=100)** And we'll call this accumulate and an end l, then we'll do another c out.
>
> **[1:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=113)** And we'll say that results equal results.
>
> **[2:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=123)** Then an end l, then we go Command S to save this off.
>
> **[2:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=131)** We're going to open this in the terminal.
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=134)** We'll do a clang plus plus dash std equals c plus plus 17 dash capitol w, for warnings all of them and a main dot cpp, and then a dot forward slash a dot out to execute our program.
>
> **[2:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=154)** And now we get the accumulate and we get a results is 75, which I'm really hoping that 21 plus 27 plus 15 plus 9 plus 3 is 75.
>
> **[2:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=168)** And that is our Accumulate function.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [bind](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=1)** - [Instructor] In [[Functional Programming]], partial application is a technique which creates a new function with a smaller number of arguments from an old one.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=9)** The number of arguments a function accepts is called its arity.
>
> **[0:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=12)** Std::bind comes from the stl's functional header and allows us to partially apply functions.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=17)** We can reorder the function's argument and bind values to arbitrary arguments.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=22)** Let's take a look at std::bind with some code.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=25)** Now in this file, we've already included our iostream's cmath and vector.
>
> **[0:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=31)** We're using the namespace std and we have a vector of int of ages.
>
> **[0:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=37)** And these ages represent the ages of our customers.
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=40)** And we have a very simple problem.
>
> **[0:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=41)** We just want to know how many of our customers are over 21.
>
> **[0:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=45)** Now typical programing what we would do is iterate over this range.
>
> **[0:49](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=49)** Every time we see an age that's greater than or equal to 21 we increase this counter, which we initially set at zero.
>
> **[0:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=55)** And in the end, we print out the number that are over 21.
>
> **[0:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=59)** This code works.
>
> **[1:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=60)** It does what we asked it to do.
>
> **[1:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=62)** The problem with it is it's not thinking functionally.
>
> **[1:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=66)** We are telling the computer every step, how to do what we want.
>
> **[1:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=70)** And instead, what we should think of, is we should think more functionally and tell the computer what it is that we want.
>
> **[1:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=76)** So let's take a look at how to do that.
>
> **[1:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=79)** So we'll begin by saying, hey we have auto.
>
> **[1:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=82)** We're going to have num over 21 and it is going to be equal to std, colon, colon, count, if.
>
> **[1:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=91)** So the stl already has a function that if you give it a range to iterate over, it will tell you how many have passed your test.
>
> **[1:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=102)** So in this case, we're going to pass it the begin iterator, which is the ages, begin, and then the end, which is ages, dot, end.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=114)** And then the next thing that it wants here is a predicate.
>
> **[1:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=117)** And so a predicate once again is a function that when passed a value, returns either true or false.
>
> **[2:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=123)** So it is a unary function that takes a value and returns either true or false.
>
> **[2:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=128)** And we don't have that yet, so let's go ahead and create one.
>
> **[2:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=131)** So we'll come up here and we're going to say auto greater than and this is going to check, only thing is we're going to tell this, int first and int second.
>
> **[2:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=147)** So we're going to give it two values, make it a binary function.
>
> **[2:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=151)** And it's going to return true if first is greater than or equal to second.
>
> **[2:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=159)** All right, so we have a little bit of a problem here.
>
> **[2:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=163)** Count if expects a unary predicate and we have a binary function, so we're going to use std::bind to fix that problem for us.
>
> **[2:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=172)** So std, colon, colon, bind and the first thing that it expects is a reference to the function.
>
> **[2:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=177)** So we say, reference, greater, underscore, than, comma.
>
> **[3:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=183)** Now the next thing that it wants is it wants to know the arguments of the function.
>
> **[3:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=187)** Now there are two functions that we should be giving it two arguments, and the first one, what we're going to do is we're going to say std, colon, colon, placeholders colon, colon, underscore, one.
>
> **[3:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=199)** What this says is, we are going to pass in the first argument to this function.
>
> **[3:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=205)** We're going to pass it in.
>
> **[3:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=206)** So it's going to be passed in from count in sign and from count if.
>
> **[3:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=210)** Then we're going to say for the second argument, which count if won't supply, go ahead and set it to 21.
>
> **[3:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=218)** Let's go ahead and close this up.
>
> **[3:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=220)** Put a semi-colon on here.
>
> **[3:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=222)** Then we do a c out, and this is going to be also, let's call it the New Number over 21, equals and we'll do another c out.
>
> **[3:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=236)** That's going to be num over 21.
>
> **[4:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=241)** And then we're going to do an end l and save this off.
>
> **[4:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=246)** Go ahead and open it in the Terminal.
>
> **[4:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=249)** Do a clang, plus, plus, dash, std, equals, c, plus, plus, 17, and dash, W, a, l, l, and then we'll end this up with a main dot c, p, p.
>
> **[4:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=264)** Hit return.
>
> **[4:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=265)** Then do dot, forward slash, a, dot out.
>
> **[4:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=269)** Execute the code.
>
> **[4:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=270)** And we get number over 21 is five, both times.
>
> **[4:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=274)** So, again, here is our std::bind, and this accepts a reference to a function and then you decide how you want to treat its arguments.
>
> **[4:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=285)** In our case, we said hey we're going to pass in the first value, and the second argument, we're going to bind 21 to it.
>
> **[4:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=293)** And that is std::bind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Functions](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=1)** - [Instructor] Std::function also comes from the functional header.
>
> **[0:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=4)** It is a wrapper for invokable objects which includes functions, function objects, also known as functors, and lambdas.
>
> **[0:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=12)** We can also store wrapped invokable objects in a vector of function objects.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=17)** Let's take a look at some code to see how.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=20)** Again, we're going to start off with a file that already includes our header.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=23)** So we've got functional, iostream, string, and vector.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=26)** We're using a namespace std.
>
> **[0:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=28)** And we're going to start up here, and we need to create a few helper functions to get ourselves going.
>
> **[0:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=34)** So the first one's going to be a void, and it's going to be called demoFunction.
>
> **[0:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=39)** It doesn't take any parameters.
>
> **[0:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=41)** And the only thing this function does is call cout, and it let's us know that demoFunction was called.
>
> **[0:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=51)** And then we do an endl, and that's the end of that.
>
> **[0:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=54)** The next function that we have here is we're going to say void and call this function adder.
>
> **[1:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=60)** And it's going to take an int a and an int b.
>
> **[1:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=69)** And once again it's going to do a cout, and it's going to say Called adder comma a, comma a plus b equals.
>
> **[1:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=85)** And it's going to do a plus b and then an end line.
>
> **[1:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=95)** And finally, we're going to create a class and we're going to call this class functor.
>
> **[1:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=102)** And in public.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=105)** Let's indent that over one.
>
> **[1:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=107)** It's going to have a single member function, a void operator.
>
> **[1:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=115)** And it is going to be the invocation operator.
>
> **[2:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=120)** And it's going to be a const.
>
> **[2:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=124)** And there might be a pattern here.
>
> **[2:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=126)** We're going to say cout Called functor.
>
> **[2:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=135)** And do an endl here as well.
>
> **[2:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=140)** Then we're going to have a main function, and let's move this up a little bit.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=148)** Oh, we're missing semicolon right there.
>
> **[2:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=150)** Let's put that in.
>
> **[2:33](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=153)** And then down here we're going to say that first off we're going to create our vector.
>
> **[2:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=159)** And our vector is going to be a function and then the first thing that comes in the angle braces here is going to be what is the return object.
>
> **[2:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=172)** So in our case, it is going to be void.
>
> **[2:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=175)** So we're returning void from the functions that this takes.
>
> **[3:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=180)** And we're going to call this vector of function objects, we're going to call it funcs.
>
> **[3:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=187)** Then we're going to say funcs.push_back and the first thing we're going to push back is demoFunction.
>
> **[3:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=197)** So we're going to add demoFunction to our vector of function objects.
>
> **[3:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=203)** Then after we do that we're going to create an instance of our functor object.
>
> **[3:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=206)** So let's just put a little space in there.
>
> **[3:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=208)** We're say functor, and we're going to call it functor underscore instance.
>
> **[3:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=215)** So this is a variable of type functor, the class that we created above.
>
> **[3:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=221)** Then we're going to say funcs.push_back,
>
> **[3:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=232)** functor underscore instance.
>
> **[3:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=237)** Then we're going to say funcs.push_back and this time what we're going to pass, is we're going to say, open and closed square braces, open and closed parentheses, then we're going to do a open and closed curly brace, and inside of there we're going to say cout and in here we're going to say Called anonymous lambda.
>
> **[4:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=266)** So this is a lambda function.
>
> **[4:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=268)** First time we've talked about them.
>
> **[4:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=270)** And we're going to say endl semicolon.
>
> **[4:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=276)** And then we have a semicolon at the end of the line.
>
> **[4:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=279)** And then the final thing we're going to do is we're going to say funcs.push_back.
>
> **[4:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=287)** And what we're going to push back is now we want to push back adder.
>
> **[4:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=293)** But as you recall, adder is a binary function.
>
> **[4:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=296)** It takes two parameters.
>
> **[4:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=299)** And here our function object is a void that takes no parameters.
>
> **[5:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=305)** So what we're going to do is we're going to say std::bind and what we're going to pass to it is the reference to adder.
>
> **[5:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=315)** And then we're going to bind a 10 and a 15 in it.
>
> **[5:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=319)** So we've changed a function that accepts two parameters into a function that accepts no parameters because we've bound 10 and 15 to those parameters.
>
> **[5:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=331)** And so that's all of the functions that we want to demonstrate.
>
> **[5:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=335)** Now to run these, we're just going to say four.
>
> **[5:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=338)** We're going to say auto.
>
> **[5:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=340)** And it's going to be a reference to f:funcs.
>
> **[5:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=345)** So we're just going to iterate over each of these.
>
> **[5:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=348)** And we're going to say, just call f on each one.
>
> **[5:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=352)** So remember now, this is a vector of function object.
>
> **[5:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=357)** So each one of these Fs represents a function.
>
> **[6:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=361)** So let's go ahead and save this.
>
> **[6:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=364)** Go to terminal.
>
> **[6:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=366)** We're going to say clang plus plus dash std equals c plus plus 17 space dash capital W-A-L-L main dot C-P-P.
>
> **[6:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=380)** Go ahead and build it.
>
> **[6:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=382)** And then dot forward slash a dot out.
>
> **[6:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=386)** And let's open this up a little bit more so that we can see it.
>
> **[6:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=389)** So we get Called demoFunction, Called functor, Called anonymous lambda.
>
> **[6:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=395)** And Called adder, a plus b equals 25.
>
> **[6:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=398)** Remember the numbers were 10 and 15.
>
> **[6:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=400)** So this is a demonstration of using, std::function to create function objects that we can call from vectors.
>
> **[6:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=410)** So we can store functions into vectors.

> [!info]- Semantic Content
>
> **Code Identifiers:** demofunction (5), push_back (4)
> **Definitions:** is a  (7), known as (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Lambda functions: Curry](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=1)** - [Instructor] Lambdas were introduced to the language with C++11, they are unnamed function objects which can create a closure over the invoking scope.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=9)** Let's write some code to learn more about lambdas.
>
> **[0:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=12)** We already have this file set up, we have some code down here inside of our main function, and this is just going to render the results once we're ready for it.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=20)** We have our include and using already set up, and we're going to create an auto variable called addCurry, and we're going to set this equal to auto a, and this is going to be our lambda.
>
> **[0:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=38)** And then it is going to return, and right here in our capture list, we're going to put the a, and this means that we want to be able to access a from our inner lambda, and then we're going to have a parameter list, and that's going to be b.
>
> **[0:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=57)** Then b is also going to return, and what it's going to return is another lambda, and so inside of the capture list for the b, we're going to put a and b, 'cause we're want them both.
>
> **[1:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=70)** Then we're going to have another auto, and that's going to be c, and it is going to return a+b+c.
>
> **[1:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=82)** Now, at each level here, we have the variable from the outer scope that we want to capture, wrap a closure around, include it in the capture list.
>
> **[1:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=92)** So we've got a here, we've got a, b here, we need to put semicolons right here, and let's go ahead and comment in the code right here.
>
> **[1:44](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=104)** Also walk through it, so the very first time we call addCurry, we pass it the value 1, and that is going to take that 1 and give us back another function.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=114)** This function here is going to be, at this level, is the b value, and so we're going to say pass it a 10, and it's going to return to yet another function.
>
> **[2:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=122)** We're going to call that added2 and we call added2 with 100, and at that point it has all three values.
>
> **[2:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=128)** It has the a, and the b, and the c, and it's going to return to us a value.
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=134)** It's going to return us the value of a+b+c, and we're going to render that out right here.
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=139)** Now the interesting thing here is that each time we call addCurry until it gets all three of the parameters that it wants, it returns us a function, so we don't actually have to assign that function to a variable.
>
> **[2:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=150)** We can just simply call the next function, so here, we call addCurry, we give it 990,000, then we give it 9,900, and then we pass it 99, and then it returns to us the value of adding these three together, which is going to be 999,999.
>
> **[2:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=175)** It will render that out, so let's go ahead and build this program.
>
> **[2:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=179)** Open it in Terminal, let me bring this up a little bit, so we can see a little better, so let's come down here and we do a clang++ - std=c++17 -Wall main.cpp
>
> **[3:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=197)** then ./a.out and we get the results we expected.
>
> **[3:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=202)** We get results 111 and 999,999 for the second one.
>
> **[3:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=210)** So that is both how to execute lambdas and how to do currying with lambdas in C++.

> [!info]- Semantic Content
>
> **Code Identifiers:** addcurry (4)
> **Prerequisites:** set up (2)
> **File Paths:** main.cpp (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Lambda functions: Closures](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=1)** - [Instructor] Let's do another lambda example.
>
> **[0:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=3)** This time we'll create a special function, which we'll call Incrementer.
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=6)** So we'll come up here, above the main.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=9)** We'll do auto space incrementer.
>
> **[0:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=14)** And we will set this equal to lambda.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=17)** And this time the lambda's not going to take any parameters.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=23)** And then on the inside we'll say auto increment equal zero.
>
> **[0:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=30)** Then what this function returns is another lambda.
>
> **[0:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=35)** And then we want to capture increment, and once again we take no values, and now we need to use a special keyword which is called mutable.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=47)** Any time you want to modify a value that's in the closure, you have to say mutable in order to be able to change it.
>
> **[0:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=55)** And what we're going to do is we're going to say return increment plus plus.
>
> **[1:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=61)** And then a semicolon.
>
> **[1:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=64)** And we need semicolons here, and here.
>
> **[1:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=66)** So we have our little function called incrementer, it is going to start off at zero, and every time you call it, it's going to increase its value by one.
>
> **[1:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=76)** And so let's comment this code back in.
>
> **[1:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=79)** Here we call increment the first time, and call it my increment, and then we just increment, call my increment four times and see what its value is.
>
> **[1:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=87)** So we save this, we do an open in terminal, do a clang, plus plus, minus std, equals c plus plus 17, dash capital w all, and main dot cpp.
>
> **[1:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=107)** Then we call it by invoking dot forward slash a dot out.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=114)** And we get the values zero, one, two, and three.
>
> **[1:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=117)** So once again, what's going on here is that we have created a function, a lambda function, it has a value called increment, which is going to get captured in the closure, and every time we call, we do an increment plus plus for incrementing this value, and every time we call it, we get a new value increased by one.
>
> **[2:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=136)** And that's another example lambda program.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Factorial continuous add](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=0)** (techno sound effects)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=6)** - [Instructor] Here's a little challenge for you.
>
> **[0:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=7)** Let's create a lambda and assign it to a variable we'll call Continuous Add.
>
> **[0:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=12)** The lambda takes two integer values.
>
> **[0:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=15)** Initial holds the starting value, and addBy is how much we'll add to it each successive call.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=22)** Each time we successively call Continuous Add, it will add addBy to initial.
>
> **[0:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=29)** Give yourself a few minutes to complete this challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** addby (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno sound effects) (1)

#### [Solution: Factorial continuous add](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=6)** - [Instructor] My solution is somewhat similar to the incremental lambda we created earlier except it sets the initial value to the past initial argument and it adds the value of addBy instead of one each successive call.
>
> **[0:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=21)** So let's take a look at it in code.
>
> **[0:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=24)** Open up our main.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=25)** We've already got our include file and our namespace.
>
> **[0:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=28)** And right here we want to create auto space continuousAdd
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=40)** and the we have an open and closed square brace.
>
> **[0:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=42)** We have our parenthesis.
>
> **[0:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=43)** And we have an init integer.
>
> **[0:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=46)** Initial comma integer addBy
>
> **[0:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=57)** and then we're going to say that auto total equals initial.
>
> **[1:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=63)** Now this step's probably not necessary but I like the purpose of all my variables to be very clear to me.
>
> **[1:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=70)** Then we're going to say return.
>
> **[1:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=73)** And then we want to capture total and addBy in our scope.
>
> **[1:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=83)** Then we have take no variables here.
>
> **[1:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=86)** And we're going to say that this is mutable.
>
> **[1:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=90)** Because we're going to change the value of total.
>
> **[1:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=94)** And then we're going to do a total plus equals addBy.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=105)** And finally we'll do a return total.
>
> **[1:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=108)** And then we have to add a semi colon here.
>
> **[1:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=111)** And a semi colon here.
>
> **[1:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=113)** Then right here we'll say that auto we'll just call the function x equals continuous add.
>
> **[2:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=124)** And we'll pass in the number 1,000 and 10.
>
> **[2:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=128)** So each time we call it we'll increase the value by 10 and we'll start off at 1,000.
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=134)** And we'll do a cout.
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=139)** And we'll do x call x and an endl and I'll do a cut and paste and create a few more of these.
>
> **[2:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=150)** So let's call it five times.
>
> **[2:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=152)** One, two, three, four, five.
>
> **[2:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=155)** And then save it.
>
> **[2:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=157)** Then open this up in the terminal.
>
> **[2:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=161)** And we'll do a clang plus plus dash std equals C++ 17 dash capital Wadd.
>
> **[2:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=170)** And then main dot cpp, oops.
>
> **[2:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=175)** That should be dash capital Wall main dot cpp.
>
> **[3:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=181)** Go ahead and pilt it dot forward slash a dot out.
>
> **[3:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=186)** And we get what we expected.
>
> **[3:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=187)** 10, 20, 30, 40, 50.
>
> **[3:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=191)** And that is my solution to the challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** addby (4), continuousadd (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### 3. Template Metaprogramming

[↑ Back to Table of Contents](#table-of-contents)

#### [C++ templates](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=1)** - [Narrator] Template Metaprogramming or TMP is a form of C++ programming.
>
> **[0:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=5)** TMP is a Turing complete, [[Functional Programming]] language built-in to C++.
>
> **[0:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=11)** TMP variables are always immutable.
>
> **[0:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=14)** TMP doesn't have loops, so we must use recursion.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=17)** TMP doesn't have branching, so we use specialization.
>
> **[0:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=21)** Let's explore template metaprogramming with a couple of code examples.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=25)** We have our include files, which are just iostream and vector and we're using the namespace std.
>
> **[0:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=31)** So, let's first create an example function, which demonstrates how to do the same thing using [[Generic Programming]].
>
> **[0:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=37)** So, we're going to say template, which is a keyword here.
>
> **[0:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=41)** And we're going to say type name T.
>
> **[0:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=50)** Then, we're going to use our type and we're going to say our generic type and we're going to say T as the return results.
>
> **[0:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=57)** We're going to do a cube function, which is just going to multiply the past value by three.
>
> **[1:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=62)** And we're going to say const T reference value.
>
> **[1:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=70)** Value is a primer we're passing in.
>
> **[1:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=74)** And we're going to say return value times value times value.
>
> **[1:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=82)** Alright, so that's an example of just regular generic programming in C++ and what's going to happen here is that this template function is going to get instantiated during compile time.
>
> **[1:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=94)** So the code's going to look through here.
>
> **[1:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=96)** It's going to say, oh we're calling cube with the integer eight, so type name becomes an integer and it's going to be integer T and it's going to instantiate this function, or another [[Microsoft Word|word]] for that is create the function in runtime.
>
> **[1:49](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=109)** And then that function is actually going to get called in runtime.
>
> **[1:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=112)** Now, here is an example of a cube function.
>
> **[1:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=116)** And this time we are going to use TMP.
>
> **[1:58](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=118)** So, we're going to say template, once again same keyword, and we're going to say int toCube.
>
> **[2:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=126)** And cube, toCube is just the name of our variable.
>
> **[2:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=131)** And we're going to say struct.
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=134)** Notice that we use the struct this time.
>
> **[2:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=136)** And we're going to call the function Cube and then inside of it we're going to say enum.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=148)** Value equals toCube times toCube times toCube.
>
> **[2:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=158)** Now there's now semicolon needed right here, but we do need one here and we need another one at the end of the struct.
>
> **[2:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=165)** Now the difference here is that, first off, we're just going to take this value in int toCube is always going to be emutable, we can not change it.
>
> **[2:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=174)** In order to return a value, there's no return statement inside of template metaprogramming.
>
> **[3:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=180)** So, what we do is we created value, and by tradition it's called value, and we assign whatever we want to that value.
>
> **[3:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=187)** So, we're going to say that value equals toCube times toCube times toCube.
>
> **[3:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=191)** So, lets go ahead and comment these two lines back in.
>
> **[3:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=197)** And save our program with the command s.
>
> **[3:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=201)** And then we're going to open this in the terminal.
>
> **[3:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=206)** And we're going to say clang++ dash std equals c++ 17
>
> **[3:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=215)** dash capital W all and main dot cpp.
>
> **[3:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=222)** Then dot forward slash a dot out to execute it.
>
> **[3:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=226)** And we what we're expected.
>
> **[3:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=227)** Eight cubed is 512 and then five cubed is 125.
>
> **[3:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=233)** So, we've executed this same program using both generic programming, which is right here with the template function, and by using template metaprogramming right here.
>
> **[4:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=243)** Now the difference between these two is that where as the Cube function that gets instantiated is called at runtime.
>
> **[4:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=251)** The Cube function for the template metaprogramming is done at compile time.
>
> **[4:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=257)** So, this cube five colon colon value, that's how we get the value out of here is by using the scope resolution argument.
>
> **[4:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=265)** This value gets replace with 125 at compile time.
>
> **[4:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=269)** So, this code is not executed at runtime.
>
> **[4:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=272)** And that's our first example of template metaprogramming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generic Programming]] (3), [[Functional Programming]] (1), [[Microsoft Word|Word]] (1)
> **Exercise Files:** template (10)
> **Code Identifiers:** tocube (9)
> **Env Vars:** tmp (6)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Factorial](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=1)** - [Instructor] According to Wikipedia, the factorial of a non-negative number, n, is the product of all positive integers less than or equal to n.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=9)** So, the factorial of five is equal to five times four times three times two times one, or 120.
>
> **[0:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=17)** Let's see how to implement this using template metaprogramming.
>
> **[0:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=21)** We have our include iostream, include vector, using namespace std.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=25)** We have some commented out code that's going to print the results, but before we get to that let's first write a regular C++ function, and it's going to be recursive, to do factorials so we get an idea of what it looks like with something that's more familiar to us.
>
> **[0:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=39)** We're going to say factorial const int input const int sum, and we're going to get sum a default value of one.
>
> **[0:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=50)** So if no sum is called it has a value of one because one times anything is the number.
>
> **[0:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=55)** Then we're going to say if input is greater than one
>
> **[1:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=63)** we're going to return, and we're going to do a recursive call.
>
> **[1:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=67)** So we're going to call factorial, and we're going to say input minus one.
>
> **[1:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=77)** Then we'll do sum times input.
>
> **[1:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=84)** If it is not greater than one, we're just going to return sum.
>
> **[1:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=92)** So that's how we implement this using regular C++.
>
> **[1:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=97)** Now let's see how we do it using template metaprogramming.
>
> **[1:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=99)** We start off with our keyword, template.
>
> **[1:44](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=104)** We're going to have some angle brackets, and we're going to have an int input comma int sum, and sum we're going to give a default value of one.
>
> **[1:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=119)** Then we'll do a struct, factorial, and we're going to tell this factorial that what you need to do is you need to call yourself factorial
>
> **[2:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=137)** and input minus one comma input times sum.
>
> **[2:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=149)** And then we're going to have some curly braces and a semicolon.
>
> **[2:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=157)** I know this looks a little crazy.
>
> **[2:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=160)** But, what's going on here is that we have a template just like we had up here and this is going to take some initial parameters and it's going to have a input and a sum and we're going to give the sum a default value of one.
>
> **[2:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=170)** Then factorial, only thing it's going to do is call itself with an input minus one and input times sum.
>
> **[2:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=177)** So this is doing the multiplication here for us.
>
> **[3:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=181)** But the problem is how does this recursion stop?
>
> **[3:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=183)** Remember, template metaprogramming doesn't have branching logic.
>
> **[3:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=188)** But, I did mention that what we do instead of branching is we do specialization.
>
> **[3:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=194)** We're going to say template int sum, and struct factorial, and here comes our specialization.
>
> **[3:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=211)** We put the number one in here, and then we just say sum, and then we have our opening for our struct.
>
> **[3:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=220)** We have an enum, and we say that value equals sum.
>
> **[3:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=226)** That's how we get this value out of this template program, is by assigning it to values.
>
> **[3:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=234)** That's just by tradition, custom, whatever you want to call it.
>
> **[3:58](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=238)** That's the reason why we do it.
>
> **[4:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=240)** So here, once again let me walk through this.
>
> **[4:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=243)** Any time factorial equals one it is just going to come in here and say whatever sum is, assign it to value, and that's the end of it.
>
> **[4:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=254)** The specialization always takes priority to this more generic case.
>
> **[4:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=258)** So, because this has a one in here this will be invoked automatically by the compiler and that's what breaks the recursion.
>
> **[4:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=266)** Let's go ahead and uncomment this.
>
> **[4:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=270)** Let's save it.
>
> **[4:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=272)** Let's go back to the terminal.
>
> **[4:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=275)** We'll do clang++ -std=c++17 - Wall, for all the warnings,
>
> **[4:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=286)** main.cpp, build this.
>
> **[4:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=290)** And then ./a.out, and we get the values that we expected.
>
> **[4:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=295)** Using the regular C++ factorial of five is 120, then we use our template metaprogram version of it and we say that factorial of four, and we get the value 24 and the factorial of five and we get 120 again.
>
> **[5:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=308)** And again, we extract the value out of the template metaprogram but we're using the scope resolution operator on the value.
>
> **[5:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=316)** That's how you do a recursive factorial function in template metaprogramming.

> [!info]- Semantic Content
>
> **Exercise Files:** template (10)
> **File Paths:** main.cpp (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [The Standard Template Library](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=1)** - [Instructor] The Standard Template Library is a subset of the C++ Standard Library.
>
> **[0:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=5)** To make the library flexible and able to work with a wide variety of types, it is implemented using both template metaprogramming and [[Generic Programming]].
>
> **[0:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=15)** The STL consists of four components, [[Algorithms]], containers, functions, and iterators.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=20)** Before you write a new algorithm, you should check here first to see if it already exists in the STL.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=26)** One anti-pattern you should avoid in your code is raw loops.
>
> **[0:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=30)** Odds are that there are already an STL algorithm which provides the same function and is more performant and more thoroughly debugged.
>
> **[0:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=39)** Remember the STL is your friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generic Programming]] (1), [[Algorithms]] (1)
> **Env Vars:** stl (4)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Functional programming libraries](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=1)** - [Instructor] Loki is one of the oldest C++ metaprogramming libraries around.
>
> **[0:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=4)** It was created by Andrei Alexandrescu for his book Modern C++ Design.
>
> **[0:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=10)** Unfortunately, it has not had a new release since 2009.
>
> **[0:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=14)** The Boost.MPL library is a header only C++ O3 base general purpose template metaprogramming framework of compile time [[Algorithms]], sequences, and metafunctions.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=26)** Boost.Fusion is a library for working with heterogeneous collections of data, commonly referred to as tuples.
>
> **[0:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=34)** Boost.Hana calls itself your standard library for metaprogramming.
>
> **[0:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=38)** It is header only and provides a super set of the features in Boost.MPL and Fusion.
>
> **[0:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=43)** Boost.HigherOrderFunctions is a recent addition to the Boost family.
>
> **[0:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=48)** Like Hana, it is a header only C++ 11 and 14 library that provides utility functions and function objects which can solve many problems with much simpler constructs than what's traditionally been available in metaprogramming.
>
> **[1:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=64)** Keep in mind that there are a lot more libraries than the five mentioned here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is a  (4)
> **Env Vars:** mpl (2)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Boost.Hana](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=0)** - [Instructor] Introduced in 2015, Hana is a relatively recent addition to the Boost library.
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=6)** It hopes to fill the shoes of the Boost.MPL and Fusion libraries by providing a superset of their functions in one library.
>
> **[0:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=13)** While the STL provides homogenous collections, Hana provides support for heterogeneous collections in tuples, and it has a large number of functional methods.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=23)** Let's check out Hana with a bit of code.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=26)** And here I have my include files already, so I have iostream, string, boost/hana, and then I'm also setting up my namespaces and I have three types here, a truck, a car and a motorcycle.
>
> **[0:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=38)** These are just three very simple types, but the thing that's important to realize about them is that they're not related to each other in any way, they don't inherit from each other or anything like that, each of these types has a name property, and one of them has a bed_length property.
>
> **[0:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=54)** So, what we're going to do is we're going to put these guys in a collection, and we'll call that collection vehicles.
>
> **[1:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=60)** And the way that we do that is we say hana::make_tuple, and we're going to
>
> **[1:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=71)** go ahead and close it off, and we'll open it up so we have some more room.
>
> **[1:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=74)** And let's go ahead and close this screen here, too, and give those shells a little bit more room left and right.
>
> **[1:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=81)** And we're going to call the first thing, it's going to be a truck.
>
> **[1:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=84)** And it will have a name, we'll call it F-150.
>
> **[1:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=88)** And then we'll say it has a bed_length, and that is just 8.5.
>
> **[1:33](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=93)** The next item here is going to be a car.
>
> **[1:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=95)** its name will be Volt.
>
> **[1:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=99)** And the final item will be a motorcycle, and its name will be Ninja.
>
> **[1:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=106)** So now we have a collection of heterogeneous items, next we're going to create a function.
>
> **[1:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=115)** And this is going to be auto has_bed_length.
>
> **[2:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=123)** And we're going to make this be a hana::is_valid.
>
> **[2:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=133)** Let's also open this up.
>
> **[2:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=135)** And in here is going to go a lambda.
>
> **[2:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=138)** Inside the lambda is going to be an auto, reference reference x.
>
> **[2:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=144)** And it's going to return a decltype, and that decltype is going to be determined based on whether or not it finds this property.
>
> **[2:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=158)** So it's going to say x.bed_length.
>
> **[2:44](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=164)** Then the actual body of the lambda is empty.
>
> **[2:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=168)** Then we just close off that function.
>
> **[2:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=171)** Next we're going to get a collection of just trucks.
>
> **[2:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=175)** So we're going to say auto trucks, and let's make that lower case.
>
> **[3:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=181)** Trucks = hana.
>
> **[3:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=184)** And the way that we're going to do this is we're going to filter through our vehicles, and we're going to see which vehicles have a bed_length.
>
> **[3:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=194)** If they have a bed_length, we're going to assume they're a truck, and it's going to be part of the trucks collection.
>
> **[3:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=200)** Next we're going to just do auto vehicles, or not vehicles, auto nontrucks and that's going to be hana::filter again.
>
> **[3:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=212)** We're also going to pass to it the vehicles collection.
>
> **[3:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=216)** And this time we're going to do a little functional composition, so we're going to say hana::[[Jetpack Compose|compose]].
>
> **[3:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=221)** Hana::compose takes two or more functions and makes them one function.
>
> **[3:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=225)** And so that the way that it does that is we pass it which functions we want to compose together, so the first one's going to be hana::not_, and it ends with an underscore.
>
> **[3:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=235)** And then the second function is going to be has_bed_length.
>
> **[4:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=241)** And what's going on here is hana compose goes through this from right to left, and so it's going to take the has_bed_length function, it's going to execute it, then it's going to call hana::not_, which is going to take, if this was true it's going to make it false, if this was false, it's going to make it true.
>
> **[4:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=258)** Because what we want is we want all the vehicles that don't have a bed_length.
>
> **[4:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=264)** Once we've done that, let's go up a little bit, let's go ahead and uncomment the rendering code.
>
> **[4:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=274)** All right.
>
> **[4:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=277)** So what we have here is two methods, one method's going to render out all the trucks and the second method's going to render out all the nontrucks.
>
> **[4:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=288)** And for the trucks, it's also going to display its bed_length.
>
> **[4:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=292)** Let's save this.
>
> **[4:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=293)** Let us open this in the terminal.
>
> **[4:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=297)** Let's do a clang++ -std=c++17
>
> **[5:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=308)** - Wall main.cpp, and ./a.out.
>
> **[5:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=316)** And we get our, here's our one truck, and here are two nontrucks, and both of the names displayed.
>
> **[5:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=324)** And that's just a small sample of the functional power that's built into the Hana Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4)
> **Code Identifiers:** bed_length (7), has_bed_length (3), make_tuple (1), is_valid (1)
> **CLI Commands:** make (4)
> **Env Vars:** mpl (1), stl (1)
> **Speakers:** - [instructor] (1), - wall (1)
> **File Paths:** main.cpp (1)
> **Versions:** 8.5 (1)
> **Tools:** terminal (1)

#### [Challenge: Fibonacci generator](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=0)** (techno sound effects)
>
> **[0:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=7)** - [Instructor] Are you up to test your skills with a little challenge?
>
> **[0:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=10)** Use template metaprogramming to create a function to generate the Fibonacci series.
>
> **[0:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=15)** The series begins with zero, one, one, two.
>
> **[0:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=18)** The next number in the series is the sum of the last two.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=22)** You'll want specializations for the numbers zero and one.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=26)** Give yourself five or 10 minutes to complete this challenge.

> [!info]- Semantic Content
>
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno sound effects) (1)

#### [Solution: Fibonacci generator](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=1)** (bright tone)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=6)** - [Instructor] So, how did you do with challenge?
>
> **[0:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=8)** Hopefully, it went well for you.
>
> **[0:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=10)** Let's take a look at my solution.
>
> **[0:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=12)** The code for this is very similar to that of the factorial program.
>
> **[0:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=16)** We need to create two template specializations.
>
> **[0:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=19)** One for zero and one for one, and the base case is going to recursively call itself.
>
> **[0:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=25)** So, let's take a look at it in code.
>
> **[0:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=27)** So here, I have my include file and my namespace set up.
>
> **[0:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=30)** I have some code out here to render everything, and let's go ahead and write the code, and we're going to start off with our keyword template, and we're going to say int n, then, we're going to have a struct and this is going to be called fibonacci.
>
> **[0:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=53)** Then, inside of here, we'll have our enum, and a value and it's going to be equal to fibonacci
>
> **[1:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=66)** and n - 1, and then, use the scope resolution on the value and it's + fibonacci n - 2, and once again, with the value, then, we need a semicolon and another semicolon.
>
> **[1:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=92)** Now, let's do the first of our specializations, and so, our keyword template again, the angle brackets are going to be empty this time.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=105)** Then, we do struct fibonacci
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=114)** and our specialization, zero, then enum value, for this is also going to be zero, and then, semicolon, semicolon, and then, our final specialization, template, with empty angle brackets.
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=139)** Then, struct fibonacci.
>
> **[2:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=145)** This time it's for one, and our enum value equals one as well, and put those semicolons in there, and then, let's go to our main function, and let's uncomment these.
>
> **[2:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=165)** These are just going to render out the values of the series, and let's save it and so let's go ahead and go to Terminal and build this.
>
> **[3:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=185)** So, clang++ -std=c++17
>
> **[3:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=192)** - capital W all main.cpp and ./a.out and there we have our fibonacci series.
>
> **[3:25](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=205)** We're going to start off and we have fib of zero, zero.
>
> **[3:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=207)** We know that the next numbers are one, one, two, and three.
>
> **[3:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=212)** I know that 11 is 89 and 12 is 144, and 45 is a big number.
>
> **[3:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=218)** That is my solution to the fibonacci generator using template meta programming.

> [!info]- Semantic Content
>
> **Exercise Files:** template (5)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1), - capital (1)
> **File Paths:** main.cpp (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)


### 4. Functional Reactive Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to Reactive Extensions](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=1)** - [Narrator] ReactiveX combines the best parts of the Observer and Iterator patterns and [[Functional Programming]].
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=6)** It abstracts away dirty details and leaves fewer lines of more powerful code.
>
> **[0:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=11)** It has been ported to every major programming language, including C++, and is used in production by many top tech firms.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=20)** ReactiveX is everywhere.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=22)** It is running in the front end, back end, mobile, and desktop apps.
>
> **[0:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=27)** The four main components of ReactiveX are observables, which are composable streams of events; observers are those interested in those events; operators, which are functions that manipulate observables; and schedulers that execute actions associated with operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1)
> **Speakers:** - [narrator] (1)

#### [RxCpp library](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=1)** - [Instructor] The RxCpp library is the C++ implementation of ReactiveX.
>
> **[0:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=5)** It supports both a chaining and pipe interface, though I find the chaining easier to work with.
>
> **[0:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=11)** It can convert STL containers like list invectors to observables.
>
> **[0:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=15)** You'll want to clone the RxCpp repo from [[GitHub]], and put the header files where your code can find them.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=22)** Now it's time to check out ReactiveX using the RxCpp library.
>
> **[0:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=28)** Here I just have my include file for RxCpp.
>
> **[0:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=32)** I also have some name spaces already set up.
>
> **[0:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=34)** To just make things easier for me.
>
> **[0:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=37)** And I have an include for iostream.
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=40)** Then here I have a vector of int which represents let's just say it's the ages our customers.
>
> **[0:48](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=48)** What we want to know, is we want to know how many of our customers are over the age of 21.
>
> **[0:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=54)** So what we're going to do here, is we're going to say auto, values, and it is going to be equal to RxCpp colon colon observables, and what we're going to do here is, we're going to convert this vector of int into an observable.
>
> **[1:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=78)** We're going to iterate, iterate, over ages and then we're going to use the chaining interface.
>
> **[1:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=92)** So we're going to put a period at the end of the sentence.
>
> **[1:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=100)** Next, we're going to say filter, and the filter method is going to take our good friend the lambda.
>
> **[1:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=107)** And so we're just going to have open and close square brackets, we're going to have an int age, and then inside of the curly braces, we're going to say, return, age, greater than or equal to 21, semi-colon.
>
> **[2:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=127)** And then at the end of this we're also going to have a period, because again this is the chaining interface.
>
> **[2:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=132)** Some languages will call this a fluent interface.
>
> **[2:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=137)** Then we're going to do a count.
>
> **[2:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=140)** So here the observable's going to send us each one of these numbers.
>
> **[2:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=144)** All the way from the beginning to the end of this vector of int.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=148)** The filter is going to go through and it's only going to let the ones over 21 pass.
>
> **[2:33](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=153)** Then count is going to say well how many that there are.
>
> **[2:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=161)** Then finally we get to the subscribe.
>
> **[2:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=170)** Then subscribe is going to take two methods.
>
> **[2:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=172)** The first method is for each time you get an event fired this is going to be the one that handles it.
>
> **[2:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=179)** So this is kind of like when you do an iteration and you get an on next.
>
> **[3:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=182)** Well this is the thing that handles the on next, and in this case it's only going to give us, come here once cause it's going to tell us how many items that there actually are.
>
> **[3:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=191)** So we're going to call that count, and we're going to just do std::cout.
>
> **[3:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=201)** And we'll say that this is the number over 21, equals, and that's just going to be count.
>
> **[3:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=214)** Then we'll do an std::endl.
>
> **[3:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=218)** And a semi-colon.
>
> **[3:41](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=221)** Then a comma.
>
> **[3:44](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=224)** The second of these lambdas that we pass in, this is the one that when a observable is complete, it will send an on complete message.
>
> **[3:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=236)** So it doesn't pass anything else and we're going to say std::cout.
>
> **[4:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=245)** And that we've received the on completed.
>
> **[4:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=250)** Then std endl.
>
> **[4:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=255)** Now we save that.
>
> **[4:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=257)** And we go into the terminal.
>
> **[4:21](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=261)** Clang++-std =c++ 17
>
> **[4:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=267)** - Capital W all main.cpp and then we do ./a.out.
>
> **[4:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=278)** And we can see that it's telling us that hey the number over 21 is five.
>
> **[4:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=283)** If we do a quick scan through there we can see one, two, three, four, five numbers that are over 21.
>
> **[4:53](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=293)** So that is correct.
>
> **[4:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=294)** Notice that we get the on completed after all of the numbers come through.
>
> **[4:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=299)** Now that's the basic way that observable works.
>
> **[5:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=303)** Once the observable is finished, it's going to send you on complete.
>
> **[5:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=307)** Or if there's an error along the way you'll get an on error.
>
> **[5:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=311)** That is our first look at reactive programming with RxCpp, which is the C++ version of ReactiveX.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** github (1), terminal (1)
> **Speakers:** - [instructor] (1), - capital (1)
> **File Paths:** main.cpp (1)
> **Env Vars:** stl (1)
> **Analogies:** kind of like (1)
> **Prerequisites:** set up (1)

#### [Challenge: Word frequency counter](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=0)** (techno sound effects)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=6)** - [Instructor] Let's revisit the RxCpp example code.
>
> **[0:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=10)** Change the filter of the ages to be from 13 to 19 inclusive, and render each valid age to the output instead of a count.
>
> **[0:20](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=20)** Give yourself a few minutes to complete this challenge.
>
> **[0:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=23)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno sound effects) (1)

#### [Solution: Word frequency counter](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=0)** (intro music)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=6)** - [Instructor] How did you do with the challenge?
>
> **[0:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=7)** Hopefully, everything went well.
>
> **[0:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=10)** Let me share my solution to this challenge with you.
>
> **[0:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=13)** So, basically there are three steps.
>
> **[0:15](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=15)** We modify the filter operator, we remove the count operator, and then we update the output.
>
> **[0:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=22)** And let's go ahead and start from scratch again, and let me show you what I did.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=26)** So, here we are back in Visual Studio Code, and what we're going to do, let's just redo what we did previously.
>
> **[0:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=35)** So, we're going to go ahead and say, auto values equals rxcpp colon colon observable
>
> **[0:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=51)** and then we have iterate(ages).
>
> **[1:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=61)** Then, we have a dot to chain this together.
>
> **[1:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=68)** Then, we're going to say filter and we take a lambda again, and then the lambda is going to get passed in age, and that's going to be an integer.
>
> **[1:22](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=82)** And we're going to say return age, greater than or equal to 13 and age less than or equal to 19, and a semicolon.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=105)** And then, we have another period here to chain it together.
>
> **[1:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=112)** Then, we're going to do our subscribe.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=114)** Notice, we did not do a count at all.
>
> **[1:56](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=116)** We don't need the count this time.
>
> **[1:58](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=118)** We just want to see each age that's between 13 and 19.
>
> **[2:04](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=124)** Then, we're going to have our first lambda and it's going to take an int age.
>
> **[2:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=132)** And inside of it, it's going to do and std cout age and then std endl, then a semicolon and a comma.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=148)** Open and close square bracket, open and close parentheses.
>
> **[2:32](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=152)** And on the next one, we're just going to do the std cout.
>
> **[2:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=159)** OnCompleted.
>
> **[2:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=165)** Std colon colon endl semicolon then we're going to go ahead and save this with the Command+S.
>
> **[2:55](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=175)** Go to terminal.
>
> **[2:59](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=179)** Clang++ -std=c++17 -Wall main.cpp.
>
> **[3:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=190)** Then we do a ./a.out.
>
> **[3:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=194)** And we get the numbers 13, 19, 15, and 19.
>
> **[3:18](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=198)** These are all the ages that are between 13 and 19 inclusive.
>
> **[3:23](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=203)** And that is the solution to the challenge.

> [!info]- Semantic Content
>
> **Tools:** visual studio (1), terminal (1)
> **File Paths:** main.cpp (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (intro music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=1)** - [Instructor] Thank you for viewing this course.
>
> **[0:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=3)** Using [[Functional Programming]] techniques has helped me make my code more solid and hopefully they will help yours as well.
>
> **[0:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=9)** Template metaprogramming is one of the most challenging aspects of C++ programming.
>
> **[0:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=14)** It is the thing that separates those who write powerful libraries from those who use them.
>
> **[0:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=19)** If you'd like to continue your journey, check out the [[LinkedIn]] Learning course on the C++ Standard Template Library.
>
> **[0:26](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=26)** Be sure to learn more about Boost.Hana and RxCpp at their websites.
>
> **[0:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=31)** And finally, read the book Modern C++ Design by Andrei Alexandrescu.
>
> **[0:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=36)** I hope I pronounced that right.
>
> **[0:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=38)** Have fun and keep on coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1), [[LinkedIn]] (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Troy Miles]]

## Resources

- Exercise files available

## Skills Covered

- Functional Programming
- C++

## Path Context

### In [[Getting Started with C++]]
← [[Complete Guide To C Plus Plus Programming Foundations]] | **2 of 5** | [[Learning C++]] →

## Appears In

- [[Getting Started with C++]]

## Related Courses

_Courses sharing skills:_

- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Learning C++]] — C++
- [[C++ Design Patterns- Structural]] — C++
- [[C Plus Plus Essential Training]] — C++

---

[↑ Back to top](#)