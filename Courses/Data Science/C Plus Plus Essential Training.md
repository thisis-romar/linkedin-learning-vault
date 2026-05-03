---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: c-plus-plus-essential-training-15106801
url: "https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801"
level: Beginner
updated: 9/6/2022
learners: 29992
skills:
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH9DHDlH2Ei4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661965908511?e=2147483647&amp;v=beta&amp;t=V6UjwbN20mEGb1MWEOrmu-RUV2wRmi3IvZnf6A_CBD8"
linkedin_topic: Data Science
learning_paths:
  - '[[C++ Programming Professional Certificate by OpenEDG C++ Institute]]'
next_courses:
  - '[[C++ Design Patterns- Structural]]'
path_nav: '[{"path":"C++ Programming Professional Certificate by OpenEDG C++ Institute","position":1,"total":3,"prev":null,"next":"C++ Design Patterns- Structural"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/C%20Plus%20Plus%20Essential%20Training.md)

![C Plus Plus Essential Training](https://media.licdn.com/dms/image/v2/C560DAQH9DHDlH2Ei4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661965908511?e=2147483647&amp;v=beta&amp;t=V6UjwbN20mEGb1MWEOrmu-RUV2wRmi3IvZnf6A_CBD8)

# C Plus Plus Essential Training

> Whether you are a beginning programmer or an advanced one, it may be time to level up your C++ skills. In this course, Bill Weinman helps you do exactly that. Bill discusses the history of C++ and modern C++, as well. He explains the C++ toolchain, then dives into basics you need to know, like basic syntax, statements and expressions, identifiers, variables, pointers, and references. Bill discusse

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801) | Beginner | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn C++](#learn-c)
  - [Using the exercise files](#using-the-exercise-files)
  - [What is C++?](#what-is-c)
- [**1. Toolchain and Installation**](#1-toolchain-and-installation) (3 videos)
  - [The C++ toolchain](#the-c-toolchain)
  - [Using an IDE with the exercise files](#using-an-ide-with-the-exercise-files)
  - [Check for std::format support](#check-for-stdformat-support)
- [**2. The Basics**](#2-the-basics) (6 videos)
  - [Basic syntax](#basic-syntax)
  - [Anatomy of a C++ program](#anatomy-of-a-c-program)
  - [Statements and expressions](#statements-and-expressions)
  - [Identifiers](#identifiers)
  - [Defining variables](#defining-variables)
  - [Pointers and references](#pointers-and-references)
- [**3. Flow Control**](#3-flow-control) (4 videos)
  - [Conditionals](#conditionals)
  - [Loops](#loops)
  - [Iterating with for](#iterating-with-for)
  - [Functions](#functions)
- [**4. Data Types**](#4-data-types) (11 videos)
  - [Overview of data types](#overview-of-data-types)
  - [Integer types](#integer-types)
  - [Floating point types](#floating-point-types)
  - [The auto type](#the-auto-type)
  - [Qualifiers](#qualifiers)
  - [Type aliases](#type-aliases)
  - [Primitive arrays](#primitive-arrays)
  - [C-strings](#c-strings)
  - [Structures](#structures)
  - [Challenge: Library card](#challenge-library-card)
  - [Solution: Library card](#solution-library-card)
- [**5. Operators**](#5-operators) (6 videos)
  - [Common operators](#common-operators)
  - [Compound assignment operators](#compound-assignment-operators)
  - [Increment and decrement operators](#increment-and-decrement-operators)
  - [Operator precedence](#operator-precedence)
  - [Challenge: Prime numbers](#challenge-prime-numbers)
  - [Solution: Prime numbers](#solution-prime-numbers)
- [**6. Functions**](#6-functions) (6 videos)
  - [Overview of C++ functions](#overview-of-c-functions)
  - [Passing values to a function](#passing-values-to-a-function)
  - [Returning values from a function](#returning-values-from-a-function)
  - [Using recursion](#using-recursion)
  - [Challenge: Non-recursive factorial](#challenge-non-recursive-factorial)
  - [Solution: Non-recursive factorial](#solution-non-recursive-factorial)
- [**7. Classes and Objects**](#7-classes-and-objects) (8 videos)
  - [Overview of classes and objects](#overview-of-classes-and-objects)
  - [Data members](#data-members)
  - [Function members](#function-members)
  - [Constructors and destructors](#constructors-and-destructors)
  - [Operator overloads](#operator-overloads)
  - [Non-member operators](#non-member-operators)
  - [Challenge: Non-member operators](#challenge-non-member-operators)
  - [Solution: Non-member operators](#solution-non-member-operators)
- [**8. Templates**](#8-templates) (5 videos)
  - [Understanding templates](#understanding-templates)
  - [Template functions](#template-functions)
  - [Template classes](#template-classes)
  - [Challenge: Template factorial](#challenge-template-factorial)
  - [Solution: Template factorial](#solution-template-factorial)
- [**9. Standard Template Library**](#9-standard-template-library) (7 videos)
  - [Overview of the STL](#overview-of-the-stl)
  - [Vectors](#vectors)
  - [Strings](#strings)
  - [Format](#format)
  - [I/O Stream](#io-stream)
  - [Challenge: Transform a file (STL)](#challenge-transform-a-file-stl)
  - [Solution: Transform a file (STL)](#solution-transform-a-file-stl)
- [**Conclusion**](#conclusion) (1 videos)
  - [Thank you](#thank-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn C++](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman, and welcome to C++ Essential Training. The goal of this course is to provide you with a working knowledge of C++. We'll start with the basics, including syntax, operators, loops, and functions. I'll explain how to use [[Data Structures]] and create your own functions. I'll show you how to create classes and objects. And finally I'll cover the fundamentals of templates and the C++ standard template library, which provides a wealth of containers and [[Algorithms]]. For in-depth coverage of templates in the standard template library, please see the companion course C++ Templates and the STL. And for more detail on functions, classes and objects, please see the companion course, C++: Advanced Topics. C++ is not just a powerful programming language, it's also the basis of many other popular languages, so this knowledge will serve you well even when you're not using C++. So let's get started with C++ Essential Training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1), [[Algorithms]] (1)
> **Exercise Files:** template (2)
> **Env Vars:** stl (1)
> **Speakers:** - [bill] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership. Copy the exercise files to a location where you can find it on your system. I've copied it to the desktop on this system. Wherever you put it, just make sure you can find it. The exercise files are organized into chapters, which correspond with the chapters in the lesson videos. Each of the chapters contain C++ files for following along with the exercises in that chapter. These files are C++ console applications. See the instructions in the next chapter for compiling and running these programs with popular [[Windows]] and Mac development environments. These files are compatible with any modern C++ development environment, including [[Xcode]], [[Microsoft]] Visual Studio, GCC, Clang, or any modern compiler or integrated environment that supports the C++ 20 standard. The exercise files are here to make your learning experience easier and more powerful. Take your time, experiment a lot, and happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Xcode]] (1), [[Microsoft]] (1)
> **CLI Commands:** find (2), make (2)
> **Exercise Files:** exercise files (4)
> **Env Vars:** gcc (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [What is C++?](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=0)** - [Instructor] C++ is a powerful, flexible, general purpose programming language that supports a number of different coding paradigms, including object-oriented, procedural, functional, and [[Generic Programming]]. What is now called C++ was originally C with classes, developed in the late 1970s by Danish computer scientist, Bjarne Stroustrup. C++ began its life as a set of enhancements to allow [[Object-Oriented Programming (OOP)|object-oriented programming]] in C. C++ is an extension of the C language. The standard incorporates the entire C language, adding many powerful features while retaining as much of C's syntax, efficiency, and utility as possible. Over 40 years later, C++ remains a best practices choice for many types of projects, including large-scale systems and applications. C++ is used to write code at all levels, including firmware, operating systems, and large-scale applications. Today, vast numbers of medium to large-scale applications are written in C++. The list is huge and it includes every version of [[Windows]] since 1.0, the parts of Unix that aren't written in plain C, major parts of macOS are written in C++, other parts are in Objective-C, which is also based on C. Major business applications like [[Microsoft Office]] and QuickBooks are written in C++. [[Adobe Photoshop]], Illustrator, InDesign, Firefox, [[Google]] Chrome, and most web browsers are written in C++.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=98)** Major websites like Amazon, [[Facebook]], and Google are either written in or have significant backend resources written in C++. In fact, most major programming languages, including [[Java]], [[PHP]], [[Python (Programming Language)|Python]], and Perl are written in C or C++. C++ is made up of a number of different components, parts of which require understanding distinct sets of grammar. You can think of it as five connected languages. The C language itself is the basis of C++ and is entirely incorporated in its definition. As part of the C language definition, the C preprocessor is also incorporated in C++. C++ classes and objects are used for object-oriented programming patterns. C++ templates are used for generic programming. And the C++ Standard Template Library, the STL, provides a tremendous amount of common functionality. The STL, along with the C and C++ standard libraries are part of the C++ standard. The first standard for C++ was ratified by the ISO in 1998. This is commonly referred to as C++98. C++03 was essentially a bug fix release, so it's rarely referred to on its own. Most compilers that support C++03 simply refer to it as C++98. Ratified in August, 2011, C++11 was the first major extension to the C++ standard.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=195)** It provided a number of new features, including the range-based for loop, type inference, lambda functions, an unambiguous null pointer constant, and many smaller new features. C++14 was another small maintenance release and did not include any major changes to the language. Ratified in December, 2017, C++17 includes mostly refinements to existing features. The C++20 standard includes a number of new features, including a modern text formatting library, modules, a ranges library, concepts, and coroutines. Some of these features are not yet implemented in the major compilers, so discussion of these newer features will be limited. Most of the features covered in this course apply to C++11 and beyond. We'll cover a few more modern features, in particular we'll use the C++20 format library. The current versions of all the major compilers in use today fully support C++17 and partially support C++20. C++ is a big subject that includes many topics. The scope of this course is limited to the essentials so you may work effectively in C++. Here are some of the topics covered in this course. The basic syntax of C++ is mostly inherited from the C language. We'll cover this in chapters two through five. This includes thorough discussion of data types, standard operators, and functions. With a few exceptions, most of this is inherited from C.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=290)** Classes and objects form the basis of object-oriented programming in C++. This course will cover the basics of classes and objects. The companion course, C++ Advanced Topics, goes into much more detail. C++ provides a powerful generic programming framework called templates. A fundamental understanding of templates is important, and we will cover the basics here. The companion course C++ Templates And The STL covers further details. The Standard Template Library is a comprehensive library of containers and [[Algorithms]] that makes extensive use of C++ templates. Again, we'll cover the basics here, and the companion course C++ Templates And The STL goes into greater detail. Because of the independent nature of the different parts of C++, this course uses a language emersion approach. You will learn by using the language. You're encouraged to experiment often and make mistakes and learn from those mistakes. You'll often use features which have not yet been fully explained. This is necessary, as parts of the language and libraries are independent. Try not to worry about it. These features will be explained in time. You do not need to have any previous programming experience to learn C++. In fact, back when I was first learning in the early seventies, my first language was C. Take your time, pause and rewind the lessons if you need to. There's no ideal pace to learn. Each of us are different. The best pace to learn is the pace at which you learn best.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=385)** The examples in this course are all console applications. This allows us to focus on the C++ language itself without distraction from the unique requirements of the various graphical interfaces of different operating systems. Every operating system, including both mac and Windows, are capable of running standard C++ console applications. The C++ programming language is one of the most important languages in computing today. It is the go-to language for projects large and small and it [[Forms]] the basis of other popular languages, like Java, C#, Python, PHP, and many others. There's a lot to cover here, so take your time, experiment, make mistakes, and enjoy the journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generic Programming]] (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[Windows]] (2), [[Google]] (2), [[Java]] (2)
> **Env Vars:** stl (4), php (2), iso (1)
> **CLI Commands:** php (2), python (2), make (2)
> **Definitions:** is a  (3), is an  (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** macos (1)
> **Versions:** 1.0 (1)
> **Tools:** firefox (1)


### 1. Toolchain and Installation

[↑ Back to Table of Contents](#table-of-contents)

#### [The C++ toolchain](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=0)** - [Instructor] C++ is a compiled language. This means that your development cycle will include a distinct compilation step. If you're already familiar with a scripting language, like [[JavaScript]], [[Python (Programming Language)|Python]], Perl, or [[PHP]], this may be a new experience for you. Languages like JavaScript, Python, Perl, and PHP are effectively interpreted languages. This means that your entire tool chain consists of an editor and the language interpreter. Your development cycle is simple. You edit the source code and you run it. Then, you make a change or continue developing. You repeat the cycle, edit, run, edit, run. C++ is a compiled language. This means that before you can run the code, it must be converted from source code into something your operating system can run. For most of us, this happens in an integrated development environment, an IDE, like [[Xcode]] or Visual Studio, but it's still important to understand what all the steps are. The first step is the preprocessor. The preprocessor is responsible for expanding macros, providing conditional compilation, and combining source files with included header files into a single file for the compiler. The output from the preprocessor is usually a larger file of source code called a translation unit. The compiler takes the source code from each translation unit and compiles it into object code. This object code includes a symbol table that allows it to link with code in other object files, including libraries.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=93)** The object file from the compiler is not yet executable by the operating system. A linker takes one or more object files, resolves all of their interdependencies, and combines them into something the operating system can run. This allows you to use external libraries, even when you don't have the source code for those libraries. The output from the linker is an executable that can run in your operating system. Now you can run your code and continue the development cycle as necessary. In most cases, especially when you're using an IDE, like Xcode or Visual Studio, all of these steps, preprocessor, compiler, and linker, are automated by one command. This combined set of actions is often collectively referred to as compiling. And even when considered as a unit, each of these functions is performed as a separate step, and each step is a vital part of the process. This may seem like a lot of unnecessary detail, but it's okay if you don't commit at all to memory. As we get into the details of C++, you'll get a better understanding of how this knowledge impacts your coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Python (Programming Language)|Python]] (2), [[PHP]] (2), [[Xcode]] (2)
> **Definitions:** is a  (3), means that (3), is an  (1)
> **CLI Commands:** python (2), php (2), make (1)
> **Exercise Files:** source code (5)
> **Env Vars:** php (2), ide (2)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)

#### [Using an IDE with the exercise files](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=0)** - [Instructor] In order to follow along with the exercises in this course, you'll need a code editor and a modern C++ compiler. Any compiler that supports C++ 20 should work. An IDE like [[Xcode]] or Visual Studio could be an excellent environment for using the exercise files. For demonstration purposes, I mostly use Xcode on a Mac because it has a clear, uncluttered display and it's easy to compile and run from right there in Xcode. I also demonstrate a few things in Visual Studio on [[Windows]]. Keep in mind that any editor and compiler that supports C++ 20 will do fine. You do not need to use Xcode or Visual Studio. Here on this Mac, let's set up Xcode and I'll show you how I set up Xcode for the exercise files here. So this is Xcode. When you launch it, it's just nothing. Come up here to the File menu and under File, New, I create a workspace. And I call my workspace CppEssT for C++ Essential Training. And I'm going to create a folder down here called Xcode and I'm going to put it in there. It's good to put it some place where you can find it and where you're going to remember where it is. So I create a folder called Xcode off of my home directory and I put it there. Okay, now we have a workspace. That's all there is to it. Want to Option while I press this green button so it makes it full screen but leaves me my menu.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=96)** And then I'm going to come in here and I'm going to add a new project. So inside of our workspace, we need a project. And for my project, under macOS, it's a command line tool. And I'm just going to name it Working 'cause that's what I name these things. You can name it whatever you like. The team doesn't matter. If you don't have that, that's just because I'm registered as a developer with Apple. If you're not and that's blank, that's fine. Organization identifier, same thing. Doesn't really matter. Language, C++, you definitely want C++ there. Press next. And then make sure that you add it to your workspace. You don't need a [[Git]] repository. It's probably overkill if you do that. And you notice that it's already selected to put it in my Xcode folder, which is exactly where I want it. So I press Create. Now I have my project inside of my workspace. But I also want to put one other thing in my workspace here. I want to put my exercise files in my workspace. So here's my exercise files in a Finder window, and I just grab that and drag it into my workspace but you notice that it tries to drag it in inside of my project and I don't want that. I want it outside my project. So I have to put it above. And then we've got the little bouncing thing there because we have this dialog box, we don't want to copy items, we just want to create folder references. So leave that one checked and leave that one unchecked. Press Finish. There's our exercise files. I actually do want my project above my exercise files so I just drag it like that.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=190)** Now, in my project, I want to come over here to my Build Settings. And I want to say language dialect. And just type enough of it there. And under C++ Apple Clang, C++ Language Dialect, I want to make sure that I select C++ 20 or GNU 20. Either one will work for this course. I'm just going to select C++ 20 here. And now open my exercise files, and I always rename this as Working. Again, you don't have to do that. That's just me. And what you can do is you can delete that and then copy files from the exercise files. I like to keep these in case I want to go back to them. So I'm just going to take hello.cpp, select it all with Command + A, Command + C to copy it. And then come over here to working.cpp, select it, Command + A to select all of it, Command + V to paste. And now we have our hello.cpp and it's pasted into our working.cpp but this is hello.cpp from chapter two of the exercise files. And I'm going to press Command + R to compile and run, and this is why I use Xcode for my demonstration. It's so easy to do this. And there's our result. It says Hello, World! And I can close this left pane by pressing on this button right here 'cause we're not going to use that left pane. That's the debugger. And you may use it occasionally in the future. But there we have it. We now have a working environment for running and experimenting
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=284)** and playing with our exercise files for this course in Xcode. Now let's see how to do this in Visual Studio on Windows. All right, here we are in Visual Studio on Windows. And I'm going to create a new project. And you get all these choices up here, right? And really, most of them are just going to confuse you and not work the way you want. What you want is Empty Project. Start from scratch with C++. Provides no starting files. That's the one you want. So I'm going to double click on that. I'm going to name it CppEssT, like that. Location, I always put it in my home directory. You can put it wherever you like. Place solution and project in the same directory. Create. Boom. Now you have your project in Visual Studio. Now, I want to configure my compiler but it won't let me do that until I import at least one C++ file. So I have to select Source Files. And then you can either press Shift + Alt + A or you can right click on this and under Add, see Shift + Alt + A is existing item, right? And I'm going to come over here to my Exercise Files, which are on my Desktop. Open chapter two, and double click on hello.cpp. And it brings it right in there. And so every time I want to work on a different source file, I delete this one. And I press Shift + Alt + A. And I select whichever file I want and it'll drop it in there but I'm going to delete that for now.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=377)** Just press the Delete key to delete it. So now I can double click on this hello.cpp. Now that we have this open, we want to configure our compiler 'cause remember, we need to select C++ 20 for our compiler. So you don't select the solution but the thing right below the solution, which is the name of your project. They call it a solution. And then right click and all the way down to Properties. And then inside of Properties, you might want to open up the C-C++ and select Language. And then over here where it says C++ Language Standard, you select that, from the dropdown box, you select the very latest one. Again, you can use either C++ 20 or the very latest one. Either one works just fine. I just selected one. And you press OK. Now we have C++ 20 configured for our project. Up in the Debug menu, you say Start Without Debugging, which is Control + F5. And you press that or Control + F5 and you get a little window where your source code runs and you press any key to close it. And so that ran our little hello.cpp. Of course, both of these are excellent IDEs and have many configurable options. This should give you a good working environment to follow along with the exercises in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (12), [[Windows]] (3), [[Git]] (1)
> **Exercise Files:** exercise files (11), source code (1)
> **File Paths:** hello.cpp (6), working.cpp (2)
> **Tools:** visual studio (6), command line (1)
> **UI Navigation:** click on (4), select the (2), dropdown (1)
> **Prerequisites:** set up (2), configure (2), you'll need (1)
> **CLI Commands:** make (2), find (1), git (1)
> **Env Vars:** ide (1), gnu (1)

#### [Check for std::format support](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=0)** - [Instructor] This course uses the standard format library for displaying results in the exercise files. The format library is new for C++ 20, and as I'm recording this in June 2022, not all systems are yet supported. [[Microsoft]] Visual C++ supports it. Other compilers like this [[Xcode]] and Clang on a Mac do not. You can find out if your compiler supports it by loading this working.cpp from chapter two of the exercise files. And if it can't find the include file or it can't find the symbol here, then your system probably does not yet support format and it probably will very soon with an upcoming update. In the meantime, if you want to use the format library, you can use the reference implementation, which is what I do throughout this course on this installation of Xcode on this Mac with Clang. The reference implementation can be found at [fmt.dev](https://fmt.dev), that's [format.dev](https://format.dev), and you simply follow the instructions to download and install it on your system. This implementation is the basis for the new standard and it works quite well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (2), [[Microsoft]] (1)
> **CLI Commands:** find (3)
> **URLs:** [fmt.dev](https://fmt.dev) (1), [format.dev](https://format.dev) (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** working.cpp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic syntax](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=0)** - This chapter is about the basic syntax of the C++ language. The idea is to have you dive into the language with some real code right away. By necessity, this means that we'll use language features that have not yet been explained. It'll all be explained at some point in this course either in this chapter, or in later chapters. Don't let this get in your way. Go ahead, dive in, follow the exercises. If something isn't immediately obvious to you, that's okay. Just keep going, we'll get to it later. The basic syntax of C++ is very simple. A statement is a unit of code terminated by a semicolon. Statements are used for a variety of purposes to call functions, declare and initialize variables, or to operate on expressions. A function is a larger unit of code that may contain many statements. A function is designed to be reused or to be called by another statement. The main function is the main entry point of any C or C++ program. You never call main yourself. Main is called by the operating system when your program first launches. A variable holds a value or values for later use. In C++ variables must be declared before they're used. The variable may then be used to provide its value to statements and expressions later in your code.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=94)** Most C++ files will have one or more include directives near the top of the file. The include directive is how you import libraries for use in your code. The library is a separate C++ file often with a .H file name extension. System libraries typically have no file name extension at all. The include directive includes the entire file during the compilation process. In this case, we include the iostream library which provides the C out object. In the [[Representational State Transfer (REST)|rest]] of this chapter, we'll go through the basic syntax of C++ in a bit more detail. You'll learn how to construct a syntactically correct program, how to define variables, and how to use pointers and references. Take your time, experiment with the exercise files. Be sure to go through the whole chapter. Understanding these fundamental concepts will help you get the most out of the rest of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Definitions:** is a  (3), means that (1), is called (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - this (1)

#### [Anatomy of a C++ program](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=0)** - [Instructor] A C++ Program is basically a collection of statements and expressions usually organized into functions and classes. In this lesson, I'll show you the general anatomy of a C++ Program. Please understand that this is not exhaustive, there are many other elements that may be involved in a C++ Program, this is just the basics and there's no need to pay too much attention to the detail, we'll go over each of these concepts in more detail throughout the course. For now, it's just important that you have a general overview of how these things work. Here is a simple Hello World in C++. You'll find this code in chapter two of your exercise files as hello.cpp, whitespace is any characters that are normally invisible, including new lines, spaces, and tabs. Whitespace is mostly ignored in C++, one notable exception is when a space is necessary to distinguish between two words or [[Tokens]]. For example, the space between the words int and main is significant and required, extra spaces would still be ignored. Comments are notations in the code that are ignored by the compiler, in practice they're stripped out by the pre-processor, C++ supports two different types of comments. Single line comments are introduced by two forward slashes, the comment ends at the end of the line.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=95)** In this example, the comment is on a line by itself. A comment may begin on a line after existing code without affecting the code itself. C++ also supports multi-line comments, a multi-line comment may span several lines. The comment begins at the special /* token and ends after the matching */ token, both styles of comments are inherited from the C language. The multi-line comment was part of the original C language, the single line comment was added later. The entry point for any C++ Program is always a function called main, all C++ Programs must have a main function. This is also true for C, we'll talk about functions at length later in this course, the main function may also have arguments for parsing the command line. The first argument is an integer representing the number of command line arguments. The second argument is an array of strings, the second argument is sometimes written like this. It means exactly the same thing, we'll cover arrays and pointers and more detail later in this course. The body of a function is enclosed in curly braces, the code between the braces is run whenever the function is called, the main function returns an integer value, 0 is commonly returned to indicate that the program exited normally, to indicate an error condition,
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=187)** a main function would return a 1 instead of a 0. Other values may have other meanings and specific circumstances. A function that returns a type must always return a value of that type, the main function is the sole exception to that rule. In the case of the main function, the return value is optional and is often omitted. The 0 value is presumed if it's not specified, we'll cover functions in more detail later in this course. The #include directive instructs the pre-processor to include another file called a header file to pass to the compiler, this is how libraries are used in C++. In this case, we include the iostream header file which supports the cout object as well as other IO related classes and functions. It is very common to include header files at the top of your source code, in fact, it is rare for a program not to include header files. It's common to use cout like this to print text to the console, sometimes you'll see printf used instead, printf is in the C standard out header, spelled cstdout, cout and printf are both commonly used to format strings for output. Both of these statements produce the same output, printf is smaller and faster than cout and cout is safer than printf.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=281)** Beginning with C++20, there's a new formatter called format. The format function is inspired by [[Python (Programming Language)|Python]]'s string formatter. The format function is in the format header, we'll be using format to format strings in this course. Beginning with C++23, there will be a print function that uses the same formatter as format. This will mitigate the need for cout and iostream in many cases, as I record this in June, 2022, the print function is not yet available in any compiler library. Print is relatively easy to implement and I find it very useful, if you want to use print today, I provide a simple implementation on my website [bw.org](https://bw.org). C++ uses name spaces to allow names to be defined without colliding with names already used, the std namespace is short for standard, the standard name space is used for all symbols in the C++ standard library. The double colon is the scope operator, it tells the compiler to use this name space when looking up this symbol, this statement uses the cout object from the standard name space. You'll often see a using statement like this, this statement imports a name from the name space so that it may be used in our code without the name space and scope operator. I use this technique a lot in this course,
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=377)** for more about name spaces, please see the companion course, C++ Advanced Topics. This is the basic form of a C++ Program. We'll get into more detail about many of these topics as we continue with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is an  (2), is a  (1), is called (1), short for (1)
> **CLI Commands:** find (2), python (1)
> **Cross-References:** later in (2)
> **Tools:** command line (2)
> **Exercise Files:** exercise files (1), source code (1)
> **File Paths:** hello.cpp (1)
> **URLs:** [bw.org](https://bw.org) (1)

#### [Statements and expressions](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=0)** - [Instructor] In C Plus Plus a statement is a unit of code. This is statement .cpp from chapter two of the exercise files. For example, down here on line 13 we have a statement that calls the library function format and assigns its return value to the variable STR. A statement is analogous to a line of code. It may do many things but it's treated as a unit of execution. A statement is always terminated with a semicolon. An expression is anything that returns a value whether or not the value is used. An expression may be part of a statement or it may be an entire statement. Here we have an expression X equals 42. This assigns the value 42. In fact, 42 by itself is an expression. And then this assignment may be considered a statement as well as an expression and you'll notice it's terminated with a semicolon. An expression may be part of a statement or it may be the statement itself. An expression can include operators and parentheses, for example, I can say X equals 42 times 12. And if I run this, you'll notice that it says X equals 504. Or I can say 42 times 12 plus 14. And by rules of operator precedence the multiplication will happen before the addition. And if I run this, we get the value 518 or I can put the addition in parentheses which changes its precedence.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=94)** And we now get a different value because the addition is happening before the multiplication. And in this case, everything in these parentheses is an expression. And that expression is part of a larger expression which is part of a larger expression with the assignment, all of which is part of a statement. We'll discuss details like operator precedents later in the course, for now an expression is anything that returns a value and expressions may be part of a statement or may be an entire statement.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2), analogous to (1)
> **Env Vars:** str (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Identifiers](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=0)** - Identifiers provide readable names for variables, functions, classes, objects, labels, and defined types. In C++, identifiers are made up of letters, and numbers within a set of constraints. These include the 26 letters of the ISO Latin alphabet in both lowercase and uppercase. The 10 Western Arabic numerals, and the ASCII Underscore character. An identifier may not begin with a numeral. Identifiers may not conflict with reserved words. The current C++ standard reserves 73 keywords, plus 11 alternative [[Tokens]]. You cannot use any of these words as an identifier. Identifiers are case sensitive. Capital A zed is different from a capital Zed. So even though both of these read a zed, they are different identifiers. Current standards allow letters that are not part of the ISO Latin alphabet, but support for this is dependent upon your implementation and is not portable. I highly recommend that you stick to the 26 letters of the standard Latin alphabet, numbers, and the underscore. If you choose to use non-Latin characters, you'll need to be aware that your code may not compile on other systems. As an example, this code compiles and runs fine on a Mac with X code and Clang. It does not compile at all on [[Microsoft]] Visual Studio. Current standards allow for identifiers to be of any length
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=97)** although only the first 63 characters are guaranteed to be checked for uniqueness. And only the first 31 characters are guaranteed for external identifiers so in practice, you should keep your identifiers under 31 characters long. An initial underscore character that is an underscore in the first position of an identifier is reserved for system identifiers in the global namespace. It is legal syntax, but you should avoid identifiers with an initial underscore in the global namespace. We'll talk about scope and namespaces later in this course. As with many aspects of programming, it's a good idea to decide on a consistent style for choosing identifiers, and stick to it. Understanding the rules, choosing conventions and sticking with them will help make your code more readable and maintainable for the long term.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Microsoft]] (1)
> **Env Vars:** iso (2), ascii (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)

#### [Defining variables](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=0)** - Variables are strongly typed in C++, and in C, that means that the token representing a variable represents both its value and its type. This is variable.cpp from chapter two of the exercise files. We come down here to line 10, you'll notice this 'int i' and a pair of curly braces and a semicolon. So that's a statement. And this statement is a variable definition. This defines a variable. It defines the name and the type of the variable, and it allocates space of a size sufficient to hold a value of that type. In other words, this is a variable of type integer, because it has this 'int' that's the type integer and its name is 'i'. And so there's a space allocated with enough space to hold an integer, and it's named 'i' in the symbol table. And here we have these curly braces, the empty curly braces initializes the variable by giving it an initial value of zero. Without initialization, if I take those curly braces away, the value is undefined and it can easily cause bugs in your program. So it's always a good idea to immediately initialize your variables, upon definition. The empty curly braces is a simple and efficient way to do that. So if I build and run this, you'll see that I get 'i' is zero. And we could easily initialize it with a different value by putting a different value in the curly braces. Here I'll put in a 47,
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=92)** and I'll build and run this again. And you see, it says 'i' is 47. You will often see variables initialized with the equal sign. And so if I use an equal sign here, instead of the curly braces, you see I get exactly the same result. This is the traditional way to initialize variables as inherited from the C languages. The curly braces is the modern way to initialize variables. It's more efficient, and it does better type checking. And this is the way we'll initialize variables during this course. The empty curly braces is a special case that will zero initialize any type, and we'll use this a lot too. So you notice when we build and run this, we get 'i' is zero because we have an empty curly braces here for special zero initialization. And after we've initialized the variable, we've declared an initialized variable, I can actually change its value. I can say 'i' equals 47 down here, and here I'm using the assignment operator, which is the equals sign, and that assigns a new value to an existing variable. And I can copy and paste this 'cout' and run it, and you see it says 'i' is zero, and then we change the value of 'i' with the assignment operator. And now 'i' is 47. So once a variable is defined, you may assign a different value with the assignment operator. C++ also uses qualifiers. And there are a number of different qualifiers available. The most common one is the 'const' qualifier.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=185)** And if I say 'const' here, it makes our variable a constant. It tells the compiler that the value of this variable cannot be changed once it's defined. It's also called a read-only or an immutable variable. And now, when we try to change it down here on line 12 we get this error cannot assign to variable 'i' with const-qualified type 'const int'. What that means is that the type of the variable has actually changed. It's not just an integer anymore. It's now a constant integer. So 'const int' is the type of the variable now. The qualifier becomes part of the type, and if we try to change it, our compiler will give us an error. It will not allow us to change it because it's now a constant variable. So let's take these out here, and we're going to change this again, and I'm going to use the [[Microsoft Word|word]] 'auto' as the type instead of anything there. And I'm going to assign it a value. I'm going to say equals 47. This allows the compiler to determine the type of a variable. This is what the auto-type is for. And you'll see this a lot, because 47 is a literal integer. The compiler will say, okay this 'auto' is going to be an 'int'. And so this type, it's still strongly typed, we still have a type of 'int' and a name of 'i', the only difference is we didn't tell it what the type is, we let it determine the type from the initialization. There are many advantages to using 'auto'. It requires initialization,
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=278)** so you can't use it without initializing your variable. I can't just do this, say 'auto i'. I'll get an error when I try to do that. If I try to build, it says declaration of variable 'i' with deduced type 'auto' requires an initializer, right? I can't use the empty braces, because again there's no value there. There's no way for it to determine the type. So the use of 'auto', it puts some extra restrictions on here. And in that way, it can often be safer. One of the things that happens with C++ is often type names can get very, very long. When you're using templates, and when you're using the STL, sometimes these type names can get very, very long, and using 'auto' actually makes it safer. Now I could initialize this with braced initialization, instead of the equals sign, and that will work fine. But it's more common with the auto-type to use the equals sign because there's really no danger of type narrowing, which is the major advantage of the curly braces. So we'll just go ahead and use equals 47 for that. And I'll build and run and you see that we get the result we want. So in C++ a variable must be defined before it can be used. The fundamental data types and qualifiers are covered in more detail in the data types chapter of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (5), means that (1), in other words (1)
> **Prerequisites:** initialization (5)
> **File Paths:** variable.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - variables (1)

#### [Pointers and references](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=0)** - [Instructor] Pointers are very powerful, very common, and can be dangerous if abused. It's important to understand how pointers work and to really understand pointers, we need to first understand how a variable works. A variable is a typed and named location and memory. This is a variable definition. Here, memory is allocated for a value of type integer and is associated with the name x. Here, the integer value 1 is copied into the memory location associated with the integer variable x. Now we define another variable. The variable y represents another integer in a different memory location than variable x. This is an assignment. Here, the value from the variable named x is copied to the variable named y, the variable y now contains a separate integer, in a separate memory location, with the same value as the variable x. We see that the name of a variable is used as an index to map to a memory address and a specific data type. C++ also provides a pointer type that is a pointer to a value, as opposed to carrying the value itself. This is a pointer definition. A pointer is a variable that holds the address of another variable. This pointer is named ip and its type is pointer to int. So memory is allocated for a pointer, not an int. The pointer is also strongly typed. That is the compiler associates this pointer
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=94)** with a value of type int. We call this an integer pointer because it's a pointer to an integer value. Note that the asterisk may have a space before or after, the space is ignored by the compiler. Now we assign an address to our pointer. The ampersand is formally called the reference operator but in this context, it's more commonly called the address of operator. It returns the address of an object suitable for assigning to a pointer. This assigns the address of x to our pointer. The variable IP now holds the address of the integer variable named x. Another way to say it is our pointer points to the variable x. This is called dereferencing the pointer. The asterisk is the dereference operator. This is how we use a pointer. By dereferencing the pointer with the asterisk, we access the value pointed to by the pointer. This statement assigns the value that is pointed to by ip to the variable x. And because ip points to x, this statement has the same effect as x equals y. Now let's take a look at a simple example. This is pointers.cpp from chapter two of the exercise files. And you see, we have an integer x with a value of 7, integer y with a value of 42, and an integer pointer that points to the value of the x variable.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=185)** So the integer pointer is pointing to x and the value of x is 7. So when I print this, here I'm printing x and here I'm printing y, and here I'm printing what's pointed to by ip. So I'm dereferencing ip and pointing to its value which should be the same as the value of x, which is 7. So when I build and run this, we get the value of x is seven value of y is 42, and the value of asterisk ip is the value of x7. Now, if I assign a different value to x, you'll notice that the pointer now points to the new value. And so I'm just going to copy this one. And I'm going to say here x = 73. And now when I run this, you'll notice that I have 7 and I have 73 after I change the value of x. I can reassign the pointer to point to y instead of x if I say ip equals the address of y and this reassigns the pointer, before it was pointing to x, and now it's pointing to y. And when I build and run this, you see that on our last line, the value of what's pointed out by ip is now 42, which is the value of y. In C++, the reference type is a lot like a pointer but with some significant differences let's start by adding a reference to our example. We've got x, we're going to leave our pointer to point to x. And I'm also going to create a reference.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=281)** I'm going to say int& y and that makes a reference and not a pointer, it's a reference, but it's very similar and very different. And so we have x and we have y and I'm just going to move the IP up here so that they're in the same order and get rid of these. And we can go ahead and build and run this. We can see the value of x is 7. The value of what is pointed to by ip is also 7 because that ip points it, the address of x, and the value of y is also 7. So here we have a reference. And in this case y is a reference to an int. You can use y just like any other int but the value is always the value of x. So if I change x and have it say like 42, and I build and run, you see that y is now also 42. But what's interesting here, change this back, I'm going to come down here and I'm going to say y = 42, and we'll just print all of these again. And you'll notice that all of them change to 42, because we've changed the value of y, y is a reference to x. So it changes the value of x. And of course in the same way it'll change what's pointed to by ip because they're all based on x. So there's two major differences between a pointer and a reference. First, you do not use an asterisk
>
> **[6:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=374)** to dereference a reference. No special punctuation is required. The value of the reference is always the value of the referred variable. Second, there is no syntax for changing a reference. Once the reference is defined, it cannot be changed. So y will always be a reference to x. You can't change it, reassign it to be a reference to something else like you can with a pointer. In fact, a reference is not even a variable or an object. It's really just a trick of syntax. It's like an alias. It's an entry in the name space without any value of its own. A pointer is a variable of type pointer. I can assign it to point to something else. This is called receding the pointer. So, for example, I could come down here and I could say int z = 73, do it the modern way here, 73 in the curly braces. And then over here, I can say ip equals the address of z. And now when I run this, you'll notice it says down there on the second to last line, the value of ip is 73 because it's pointing to, it's been reseated. The ip pointer has been reseated, no longer points to x, and now it points to z instead. A reference, on the other hand, is not a variable, it cannot be receded to refer to different value. Once it's been declared, it cannot be changed, it will always refer to the same variable. It's important to realize the danger
>
> **[7:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=466)** of assigning a value through a reference. So, for instance, when I say, what's pointed out by ip = 42, we see in the syntax that I'm dereferencing ip. And it's obvious, what I'm doing, at least it's clear, is I'm assigning a value to what is pointed to by ip and I can look up and I can say, oh, well that's x and I can build and run and we see that now x is 42 and therefore so is y and everything else. That's because I have to use the dereference operator. And it tells me that there's something indirect happening. On the other hand, if I say y = 42, there's nothing in this syntax here that really tells me that I'm changing something else. It looks like I'm just changing a variable called y. And when I build and run, you see that we have all of this side effect. X is now 42 what's pointed out by ip is 42. We can consider this a side effect and it can be very difficult to debug. So for this reason, I strongly recommend, and this is pretty standard practice, that any time you declare a reference, you make it const. And now it is illegal for me to do this. If I try to build this, I get an error that says, "Cannot assign to variable 'y' with const-qualified type" et cetera. And so I can change x because x is not const and I can build and run and y will have changed but I cannot change y because that's declared const. both pointers and references are used a lot in C++
>
> **[9:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=564)** especially in functions and classes. You'll see many more examples of this in the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (9), is called (2), is an  (1), we call this (1)
> **Analogies:** just like (1), it's like (1), for example (1), for instance (1)
> **File Paths:** pointers.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Flow Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Conditionals](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=0)** - [Instructor] A conditional statement allows you to run one block of code or another based on a condition. This is an example of a conditional statement in C++. If the condition evaluates as true, then the statement-block will be executed. The statement-block may be one or more statements enclosed in curly braces. The if statement is the simplest form of conditional. When the condition is evaluated, it's found to be either true or false, if the condition is true, then the enclosed statement-block is executed and flow continues after the conditional. If the condition is false, then the flow continues after the conditional without executing the enclosed statement-block. An if statement may also have an else clause, which looks like this in C++. Notice that there's a separate statement-block for the else condition. This block of statements is executed if the condition is evaluated as false. The if-else construct works like this. If the condition is true, then the statement-block is executed and the flow continues after the conditional. If the condition is false, then the else-statement-block is executed and flow continues after the conditional. In either case, one and only one of the blocks of statements will be executed. Let's take a look at these statements in practice. This is working.cpp from chapter three of the exercise files. I'm just going to come in here and I'm going to create a little if statement. I'm going to create a couple of variables, x and y.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=96)** And a little if statement. And we'll just change this to say after. Now when I build and run this, you'll notice that it says condition is true and after. And if I change the conditional, instead of x is greater than y to x is less than y, then you notice that the condition is not true, so it just goes straight to after and it doesn't run the statement-block because the condition x is less than y is false. X is not less than y. X is 42, y is 7. So I can create an else clause. And in the else clause, I can say condition is false. And now I don't need this after anymore. And I can build and run this and it says condition is false because x is not less than y. There's a few different relational operators. We have greater than and less than, which we've seen. We also have equal to, which is two equal signs. And of course, that is false. We can do less than or equal to like this. And that's false. We can do greater than or equal to. And that should be true. And we can say not equal to, which should also be true. What's interesting here is that this is called a Boolean expression. It returns a Boolean value of either true or false. In C++, you have keywords true and false. So I can say if true,
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=191)** and of course, I get these warnings of unused variables and code will never be executed. Or I can say if false, and I get condition is false. I can use a one or a zero. The number one is always true. And number zero is always false. Build and run that. It says false. In fact, anything that is not zero is considered true. So if I say 42 here, it is true. The empty string is nonzero because in C++, that's actually an address. So I can build and run and it says condition is true 'cause it's nonzero. Only a zero value is considered false and that's why we have these keywords of true and false like that. It's worth noting that the statement-block may be a single statement, like this. We'll go back to x is greater than y. And of course, we have it in a block like this. It says condition is true, right? Well, since it's just a single statement, we can, and you'll often see this, we can simply put it on a line like this without the curly braces. Now, some people consider this poor practice because it's easy to modify this and end up with confusing code. In my view, as long as it's all on a line by itself like this, then you don't need the curly braces. When you go and want to put it on the next line like this, then I strongly recommend you include the curly braces
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=286)** so that when you add lines, you don't end up accidentally putting those lines outside of the conditional block even though they're still indented. And so if there's only one statement, and you put it on the same line as the condition, then I don't consider this bad practice but many people do. But you'll see this a lot. Just a little one-liner with a condition like that. There's also a conditional operator called the turnary conditional operator. It's a simple shortcut for choosing a value based on a condition. And it looks something like this. Auto s equals x greater than y, question mark yes, colon, no. And so what this does is it evaluates the condition, and you have this question mark that separates the condition from the results. If the condition is true, it'll return the first value and if the condition is false, it'll return the second value. And so it'll assign one of those yes or no to s and then I can print it like this, and I can say the answer is yes. And obviously, if I change the relational operator to a less than, then the answer is no. So this is called the turnary conditional operator because it takes three values: a condition, which is this value here, a true value, which is this one here, and a false value, which is this one. So it takes all three of those values with the question mark and the colon.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=380)** If the condition is true, it returns the true value, and if the condition is false, it returns the false value. The condition may be any condition that resolves to a Boolean value. This can be very handy in cases where you just need to select a single value and you don't need the complexity of a block-oriented is-else construct. The turnary conditional operator is a common shortcut for testing a simple condition with a simple result. It looks a little weird if you've not seen it before but it's actually quite simple and quite common.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is an  (1), is a  (1)
> **File Paths:** working.cpp (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### [Loops](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=0)** - The basic while loop control looks a lot like a simple if statement. In this case, the statement block will execute repeatedly until the condition is false. The flow of a while loop also looks a lot like an if statement. The difference is after the statement block is executed, flow returns back to the condition and this creates a loop. The loop only ends when the condition becomes false. This is while.cpp from chapter three of the exercise files. We have a basic while loop down here, beginning on line 13. And you notice that the block is lines 14 and 15, with the curly braces ending line 16. The condition is called the loop control, as it controls the execution of the loop. We have this array up here with five elements, the values of the elements are one, two, three, four, and five. Yet the index of the elements are zero through four. So we create a little index variable that we'll use to index the array. And we initialize this to zero. Then inside the block for our loop, we print out the value of each element and we increment the index variable, i, using the increment operator, which we'll discuss later in this course. So when I build and run this, you see it says element zero is one. Element one is two, et cetera. To element four is five. There are two additional loop controls available.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=95)** I can end the loop prematurely with a break statement, so I can come up here and I can say, if i is equal to three, break. And you notice that this if statement has only one statement, and it doesn't need the curly braces and it can go on the same line. And that's very, very common. So when I build and run this, when we get to index three, which is the element with the value number four, it will break and it'll stop the loop. The break statement breaks out of the loop and continues execution after the block. So go ahead, and I'll run this and you see we get element zero, element one, and element two, but at that point, the loop stops because we hit the break statement. Alternately, I can skip the [[Representational State Transfer (REST)|rest]] of a block with the continue statement. I can say, if i equals two, and I can increment i and continue. So the continue statement simply jumps back to the beginning of the loop. And I'm incrementing i so that we still have a loop, and so that it doesn't repeatedly just get stuck in the continue. And so when I build and run, you'll notice it'll skip element two, which has the value of three. And so down here we have element zero is one, element one is two, element three is four. We've skipped element two because of this continue statement here. And one other variation here,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=188)** we can take the while condition and put it at the end of the loop like this. And we have to put the keyword do up here at the beginning. And so some people call this a do while loop for obvious reasons. It's not as common, but you will see it sometimes. And you'll notice when I run it, this runs exactly the same. The only difference is is that I'm testing the condition at the end, rather than at the beginning. The while loop is inherited from C, and is the same in both languages. While is a fundamental control in C++. Do while is used less frequently, but it's still important to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** while.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### [Iterating with for](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=0)** - [Narrator] C++ provides two versions of the for loop. One is inherited from C and the other is unique to C++. Let's look at the C for loop first, as this is by far the most common. This is for.cpp from Chapter three of the exercise files and that's the [[Microsoft Word|word]] for, not the number four. F-O-R.cpp. If you remember, with the while loop, we had to initialize the index variable before the loop. We also had to increment the variable at the end of the loop. The for loop is like the while loop with controls for initializing and incrementing an index. So, here we have, around line 12, we have the index being incremented and then a semicolon and then, the condition, just like in the while loop, another semicolon, and then the increment. This is all in one statement called for. So, when I build a run, you see we get the same results that we had with our while loop. So, there's three loop control expressions. The initializer. And you can really put any expression here. The condition, the while condition, and the increment. You can put any expression in any of those places. So this can be very useful when iterating through, say, a string, if instead of this array, if I say const char string, like that,
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=93)** and then, instead of array here, I say string. When I build and run, you see we get each of the characters of the string. You'll notice that this stopped at five elements even though there's six characters in the string because my while condition says i's less than five. Instead, what I can do, is I can say string sub I and if you'll remember, a c string is terminated with a null character, which is a value zero. So, this string array actually has seven positions, the seventh position being the null terminator. So I can test for that with string sub i like this, taking advantage of the fact that a zero is always false. So now, when I go and run, you'll notice that I get zero through five, all six characters, and the seventh element, the number six is not printed because it's false and our loop ends. We could also do this with a pointer. So, instead of an index, I can say auto pointer p and initialize that to the value of the string array. Now the value of an array in CN and C++ is actually its address. So, that initializes the pointer with the address of the array. And now, instead of string sub i because we don't have an i, I could just say asterisk p and I can increment the pointer itself, like this. And over here, I no longer have an index.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=187)** So, I just say what's pointed at by p. And I just say element is or char is, like that. When I build and run now, you notice we get all of the characters in the string. This is a very, very common way to do this. When you're using an array with a pointer and incrementing the pointer and then, de-referencing the pointer to get the value. Again, zero is false and so, we're de-referencing the pointer as the loop control and when it gets to the element with a value of zero, the null terminator, it will find the end of the string. It'll stop the loop. So, this for loop is a fundamental control in C++. It's inherited from C and it's exactly the same in both languages. It's very powerful. It's very useful and while it may look cryptic at first, once you get to know it, you'll find lots and lots of uses for it. There's another form of for loop exclusive to C++, beginning with C++ 11. It's the range-based for loop. This gives C++ a simple way of iterating over the elements of a container, an operation that used to take a bit more code. So, we're going to go ahead and we're going to grab the code from range-for.C++. So, I'm going to copy this and paste it into my working here. Or however you do this in whatever programming environment you were using. You see down here our range-based for loop, we have the same array with the five elements and a range-based for loop looks a lot simpler, doesn't it? We simply have an element and the container
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=284)** and with a colon separating them. So, for the element, we're using const auto reference e. So, it uses auto so it automatically detects the type for the element, and it's using a reference and because we're using a reference, we're using const. So, the element that we get here in the left-hand side of the for loop, it's a reference to the actual element in the array. So, if I didn't have this const, I could actually change it and you'll find code that does that on purpose. So, now, all I have down here in my format is just the element itself. When I build and run, this range-based for loop, it steps over the array. For each element in the array, it assigns the element side and then it prints it out. We see our element is one, element is two, all the way through element is five. Of course, this also works with C strings. So, we can say const char string and really don't need that equals sign there. Just say string like this. And we'll need a break. We say if element is equal to a zero, break, and when I build and run, you see that it will, oop, called it array there, didn't we? It's string now. Now, we build and run it. You see we get the elements of our array, which is now a C string. So, the range-based for loop is a very powerful and useful addition to C++.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=379)** It provides a simple and effective solution for iterating over the elements of a container. It works just as well with native arrays, vectors, strings, initializer lists, anything that supports sequential iterators. As new code is written in C++ and older code is updated, the range-based for loop is becoming very common.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (4)
> **File Paths:** for.cpp (1), f-o-r.cpp (1), range-for.c (1)
> **CLI Commands:** find (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Functions](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=0)** - [Instructor] A function is an atomic standalone block of code. It may or may not have parameters or return of value. Some languages distinguish between a function at a procedure. C++ makes no such distinction. This is func.cpp from chapter three of the exercise files. And this is a function definition. A function definition includes a return type. And here, it's void. The name of the function, here it is func. And a pair of parenthesis. And a block of code. It may optionally specify parameters inside the parentheses. This function has no parameters. And a return type of void means that it does not return a value. A function is called by using its name, following parentheses. So we see down here on line 16, the function is called. The function itself in the block, it simply says this is func. And main says, this is main. And then calls func. So, what we would expect when we run this, is it'll say this is main. And then it'll say, this is func. And so let's go ahead and run it. And, that's the result that we're expecting. It first runs this statement here. Then it calls the function. And the function prints out this statement here. I can add parameters. I can say, int i. And then my cout, I'll just say format. And I'll say, i is and curly braces.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=97)** And then when I call it, I can call it with value. Let's say 42. And when I build and run, it'll say, i is 42, in the function. So this allows me to pass values to the function. You can pass multiple values by using commas. So here I can say, my second value will be a C-string. So I'll say, const char s, like that. And then I can print out that value too. Like that. And then I can call it with a C-string. And say, 42. And when I build and run, you see we get both values in our result. We've passed these two values into the function. We pick them up in the function, with the int i and const char pointer s. And we print them out using those variables. A function may also return a value. I can return, say an int. You just put the type that you want to return there. And then you can have a return statement. Return. Say i times 2. Right? And then down here, I can say, auto X equals. And then print it. When I build and run, it says X is 84. Which is indeed 42 times two. A function may only return a single value. Functions are a vital part of C++ programming.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=192)** And we will cover them in more detail, later in this course.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is an  (1), is a  (1)
> **File Paths:** func.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of data types](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=0)** - [Instructor] C++ is a strongly typed language. This means that every value has a specific type. The meaning of a value is largely determined by its type. A data type determines both the size and the interpretation of a value. For example, the int type, means assigned integer value of the natural machine size, and unsigned int means the same size integer with no bit reserved for sign. Primitive types are those basic types that are used in building other compound types. Primitives in C++ include integer types for representing integer numerical values, floating-point types for representing real numerical values, a boolean type for representing true and false values. Compound types serve as containers for primitives and other types. An array is a contiguous sequential set of objects of the same type. Arrays are powerful, flexible, and have very low overhead. They're also the basis of C-strings and the C++ STL container classes. An array of characters serves double duty as a primitive string, often called a C-string, is treated as a string in many contexts. A structure is a sequential set of objects of various types. A structure may contain scalars, arrays, and even other structures and classes. C++ classes are based on C structures. Technically a class is a structure
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=92)** that defaults to private membership. In practice, a class is a structure that contains function members as well as data members. A class may be written as a struct. You'll occasionally see it written like this. A union is a container of overlapping objects. This allows a single container to hold objects of different types at the same time reusing the same space. An enum is an enumeration type. It holds a specific set of values enumerated with names. The void type represents an absence of value. It's mostly used for functions that don't return a value. A pointer holds an address that refers to an object of a given type. Pointers are strongly typed in C++. The type of a pointer is used as the type of the referenced value. It's also used to determine the size of increments, decrements, and arithmetic operations on the pointer. A reference is like a pointer, but with different semantics. References are immutable. Once defined, a reference cannot be changed to refer to a different object. References are accessed as aliases without any syntactic indication that it's a reference. This allows for silent side effects and should be used with great care. The auto type uses type inference to determine the type of a variable. Auto combines convenience with type safety. And because of these qualities, it's considered good practice to use auto as often as possible.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=187)** We will use auto often in this course. C++ provides a number of fundamental data types which may be used or extended for many purposes. The [[Representational State Transfer (REST)|rest]] of this chapter will cover these types in greater detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (6), means that (1), is an  (1), refers to (1)
> **Env Vars:** stl (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Integer types](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=0)** - [Instructor] Integer types are simple primitive data types for representing integer values. Whole numbers with no fractional part. The integer types include char, int, short int, long int, and long long int. These are all available in both signed and unsigned versions. The size of each type will vary depending upon both the architecture and the compiler. The char type is defined as the minimum necessary size to contain a character. On most modern systems it's eight bits. The char type may be signed or unsigned by default. That is, on some systems it may be signed, and on other systems it may be unsigned. You cannot count on a char being one or the other. The only thing you can count on is that will hold a character. All the other integer types are signed unless modified with the unsigned keyword. The short int type is the smallest natural size of an integer on the target processor. May be the same as int on modern desktop systems, it's usually 16 bits. The int type is the natural size of an integer for the target processor. On desktop systems, it's often 32 bits. Long int is at least the size of an int, it's often double the size of an int. On modern systems, it's usually either 32 or 64 bits. Long long int is at least the size of a long int. It may be double the size of a long int.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=93)** On modern systems, it's often 32 or 64 bits. For the signed types, the most significant bit is a 2's complement signed bit. Unsigned types are available with the unsigned modifier. These are the same size as the signed types, but they don't set aside a bit for the sign. For types other than int, the keyword int is assumed when not specified. You'll often see these types specified like this. You may specify a literal character, with a single character, in single quotes. A literal integer, is specified with the numeric digits, long integer has an L after the digits, long long has two Ls, and unsigned integers have a U. If you acquire an integer of a specific size, the C standard int header, c-s-t-d-i-n-t, provides types in these specific widths, eight bit, 16 bit, 32 bit, and 64 bit, both signed and unsigned. Intmax_t and uintmax_t are the largest size supported by your target [[Hardware]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **CLI Commands:** ls (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Floating point types](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=0)** - [Instructor] C++ provides the common floating point types. This is float-types.cpp from Chapter four of the Exercise Files. C++ provides these floating point types if we come down here line 13, we have the float type and then line on 14, we have the double type, and then on line 15, the long double type. On most modern systems, the float type is 32-bits precision to about seven digits. The double type, is 64-bits giving us a precision of about 16 digits. And the long double type, may be the same as double or it may be something larger like an IEEE long double, that may give us more precision. On many systems including this one here which is an Apple with the M1 chip, which is the ARM 64 running Apple clang, the long double type is simply a synonym for double. This is also true on [[Microsoft]] Visual C++ even on 64-bit systems, the long double is simply a synonym for double. On Intel® MAX® and on other Intel systems running Clang or GCC, the long double, it'll read out as being 128-bits but it's actually an 80-bit IEEE long double. And so, let's take a look at how this code works because what we're going to do here is we're going to print out the size, of each of these types. So you notice up here on line 10, we have a constant the type is size T, which is basically an unsigned integer that's compatible with the size of operator
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=94)** which we're going to use in a moment. And it's named byte, and it has the value of eight which is the number of bits in a byte. And then for each of these format statements, you notice that it has size of, and then the variable, times byte. So size of terms times the number of bytes and we want the number of bits, so we multiply it by eight. And so we're getting the size of f, df and ldf which is the float double and long double. And so when I run this, you'll see that size of the float f is, 32 -bits double 64-bits and long double, is also 64-bits. Now I can show this to you on a couple of other systems. So this is a terminal session that's connected to a [[Linux]] system running GCC on an Intel processor. And, this is the code. It's exactly the same code as we saw in [[Xcode]] just a moment ago. And when I run this, you notice that it says the long double is 128-bits. And that's actually, only using 80-bits of it for an IEEE long double, which is still a lot of precision. Now let's take a look at it on a [[Windows]] system. This is a windows box that I have here in my lap. And it's running, I believe in i7 or Quad Core i7. You notice that it's running here in 64-bit mode x64 is the target for the compiler. And this of course is Microsoft Visual C++ in Microsoft Visual Studio. I'm going to go ahead and compile and run this,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=188)** ctrl + alt + F5. And so that builds it and it runs it in the debug console. And you notice here that it says long double is 64-bit. So even though it's an Intel processor, pretty much exactly the same as the Linux box we just saw in this case, the long double is 64-bits. And that's true of Microsoft Visual C++ across the board. Back to Xcode. So you can see we have some variation there in what long double means on different systems, and that's just not uncommon. Let's take a look at how to make literals in C++, literal floating point numbers. A literal floating point number is any number with a decimal point, so we can say 500 to 0.0. And I'll come down here, that and I'll type format. And when I run this, you'll see that it says the value of f is 500. I could also use scientific notation. I can say 5e2, so that's like saying five times 10 to the second. And I run that and we get the same result, 'cause 10 to the second is a hundred, five times a hundred is 500. So this is all correct. In discussing floating point numbers it's important to understand the distinction between scale and precision. Scale is how large or small a number is or can be, precision, is the accuracy of the representation to a certain number of significant digits. What this means is, when you use floating point numbers you may get rounding errors.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=282)** And so, let's just come down here and we'll say f equals 0.1 plus 0.1 plus 0.1, and we would expect that to equal 0.3, right? And I'll go ahead and I'll run it. And we see it says the value of f is 0.3. Well that may not actually be true, if I say if, f equals 0.3 and we'll cout true
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=312)** and else cout false. And when I run this, it actually says false f is not exactly equal to 0.3 even though it looks like it is, it actually is not. And if we make this df instead of f and we'll come down here and we'll change this to df and this to df, and this to df. I'm going to go ahead and run this and you see, under the default representation from format of the double, you can see the rounding error, it's the three and a bunch of zeros and then a four. And I can give this a little bit more here I can say, let's take a look at it to 20 places and we'll run it again and you see that rounding error, is significant. Well, it may be possible to represent very large and very small values using floating point numbers, that's scale, not precision. The precision of these types is always limited so it's a trade off you get scale, but you sacrifice some precision. With the double type you sacrifice a little bit less precision but there is still precision sacrificed. So that means that if scale is important to you you may use floating point numbers. But if precision is important, as in accounting for example, you'll want to always use integers instead. Never use floating point numbers for accounting it simply does not work. C++ provides the standard floating point types. Well, it's possible to represent very large and very small numbers with these types, it is at the expense of precision. If precision is important, as in the case of accounting,
>
> **[6:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=408)** you'll want to use an integer type instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Linux]] (2), [[Xcode]] (2), [[Windows]] (2)
> **Versions:** 0.3 (4), 0.1 (3), 0.0 (1)
> **Env Vars:** ieee (3), gcc (2), arm (1), max (1)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **CLI Commands:** make (2)
> **Tools:** terminal (1), visual studio (1)
> **File Paths:** float-types.cpp (1)
> **Cross-References:** as we saw (1)

#### [The auto type](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=0)** - The auto type was introduced with C++ 11 and it has quickly become very common This is auto-type.CPP from chapter four of the exercise files. Here we see that we can declare an object based on the type of what it's being initialized with. This can be very convenient. So here on line 11, we have a standard string object from the STL, the standard template library, that comes with C++. We've initialized it with a string, and we've named it S. Here on line 12, we have an autotype. We have X = S and the type of X is being automatically derived. Down here, we give the value of X and here we give the type of X using type ID. And what this does is it gives you the internal representation of what the type is and it can be a little bit confusing to look at. So I'm going to go ahead and run this and we'll take a look at what this looks like. You notice that it says type of X is and then this very long string and that's understandable to the compiler and it's not necessarily understandable to human. In fact, that value will be different depending on the compiler, the library, the version all of those things. We can look at this exact same code on our [[Linux]] box, and here it is. And you notice the same code and I'll go ahead and run that. And you see that we have a different incomprehensible string that starts with N S T seven, blah, blah, blah. And if we look at it on [[Microsoft]] Visual C++ we'll see that it's different yet again.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=95)** Here is exactly the same code, and I'll go ahead and I'll run it. And you can see that it says type of X is class standard, basic string blah, blah, blah, blah, blah, blah, blah, blah. So you can see, it looks very, very different than it does on either of the other two systems. But the beauty of this is you don't need to know any of that. You just say auto X equals. And there it is. Because auto variables derive their type, They cannot be left initialized. If I didn't initialize this, it wouldn't know what type. And in fact, when I try to build it, it'll give me an error. Say declaration of variable error with deduce type auto requires an initializer because it has no way of knowing its type, unless it's initialized with something. And because of this, and the fact there's no possibility of type narrowing auto variables are commonly initialized with an equal sign instead of the braced initialization we might use otherwise. Alright, let's take a look at another use case. This is auto-type 2.CPP from chapter four of your exercise files. And you notice that here I have a vector. Again, this is another STL container. And we'll talk about these in a later chapter. Now I have a for loop that relies on an iterator for the vector, and this is a very common technique. And before C++ 11, with the autotype this was the way that you did it. You needed to know what is the type of the iterator and the type of the iterator is all of that.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=189)** And so when I build and run this, you'll notice that it gives me all the values. So we have the value there. Well, 1, 2, 3, 4, 5, and we have the type of the iterator which is all of this crazy stuff And again, that would be different on every system. I can replace all of this standard vector into iterator stuff. I can just say auto and build and run it. And we get exactly the same result because it knows that this VI.begin method returns that type of iterator. And so the auto type will be that type of variable. So now our code is clear and readable. It's a lot less prone to error both in typing and in reading. Given the clear advantages, and the fact that auto preserves type safety I recommend you use auto as often as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Microsoft]] (1)
> **Env Vars:** cpp (2), stl (2)
> **Exercise Files:** exercise files (2), template (1)
> **File Paths:** auto-type.cpp (1), 2.cpp (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - the (1)

#### [Qualifiers](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=0)** - Qualifiers are used to adjust qualities of an object or a variable. This is an example of a variable declaration with qualifiers. In this example, the const and static keywords are the qualifiers. They tell the computer that this variable will be immutable. That's the const qualifier, and that it will have static storage duration. There are two types of qualifiers in C++, CV qualifiers and storage duration qualifiers. CV stands for constant and volatile. Const marks a variable as read only or immutable. It's value cannot be changed once it's been defined. Mutable is used on data members to make them writeable from a const qualified member function. I covered this in the companion course C++: Advanced Topics. Volatile marks a variable that may be changed by another process. This is rarely used and it's partly deprecated in C++ 20. It may be useful for external variables under very specific circumstances. Storage duration qualifiers are used to define the duration or lifetime of a variable. By default a variable defined within a block has automatic lifetime where the lifetime of the variable is the duration of the block. There's no qualifier for this because it is the default. Variables declared as static have life beyond the execution of a block.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=92)** Static variables live for the duration of the program. Static variables are commonly used for keeping state between usages of a given function or a method. By default a variable defined outside of any block is static. Register variables are stored in processor registers. This can make them faster and easier to access and operate on. This qualifier is taken as a suggestion by the compiler. The compiler may or may not actually store the variable in a register. Extern variables are defined in a separate translation unit and are linked with your code by the linker step of the compilation process. Let's take a look at a couple of qualifiers and code. Let's switch now to [[Xcode]]. This is qualifiers.cpp from chapter 3 of the Exercise Files. And we have this function here and you notice that it has inside its function block it declares an integer, a variable named X, the value of 7, and then it increments it before returning it, so it will return on 8. And here's our main function where we have another integer. This one is named I, it has value of 42, and we go ahead and we print that with the c out format. I'll go ahead and run it, and you'll see it says, "The integer is 42." Now, if I qualify this integer here with const, it still works the same. We'll build and run it here. We have exactly the same value, but if I try to change the value, if I say I equals say 73 and when I build, you notice
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=186)** that we get an error and it does not build. It says, "Build failed. Cannot assign variable "i" with const-qualified type 'const int.' So when we qualify a type with const, it's said to be const qualified. And that means that it's immutable, read only, cannot be changed. So we cannot do that. On the other hand, we have a static variable up here. And so if I take this, and I'll duplicate it, and I'll say, "func returns," and we'll call it here. When I build and run, you'll notice that it returns an 8 like we expected. And if I run it say three times, it will return an 8 every single time. On the other hand, if I qualify this with the static qualifier, now it's storage duration is static. It no longer discards that variable and reinitializes it each time the function is called. In this case, it initializes it once. And it uses exactly that same variable in that same static memory space every time it's called. So if I call it three times, it will print 8, 9, and 10, and we'll go ahead and run it, and you see it prints 8, 9, and 10. Qualifiers are used to control the quality of variables. Some of these like const and static you'll use frequently. Others are good to know about for when you need them or when you see them in someone else's code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1)
> **Definitions:** is an  (1), stands for (1), means that (1), is called (1)
> **CLI Commands:** make (2)
> **File Paths:** qualifiers.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - qualifiers (1)

#### [Type aliases](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=0)** - [Instructor] Type aliases can be handy in instances where a type declaration becomes cumbersome or it may vary on different target systems. This is typedef.cpp from chapter four of the exercise files. And you'll notice that I'm including this C standard int ,cstdint, header. And this defines these types, uint32 t and uint64 t. And what these are unsigned integers of a specific size, 32 bits and 64 bits respectively. And these are defined in this header. Now how are they defined? They're defined using typedefs. So we have two typedefs here. We're going to be calling these types points t and rank t. So points t will be an alias for uint32 t and rank t is an alias for uint64 t. And we're using these here in our structure for a scoring system of some sort. We have points and we have rank. And I initialize it down here and I print out the values here. And we'll go ahead and run this. Score s had five points and a rank of one. So this is actually pretty handy and you'll see it quite a lot. The more modern way to do typedefs is with a using alias. And so we're going to, instead, we're going to delete these and we're going to say using points t equals uint32 t. And we'll do the same thing for rank t.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=96)** And we build and run we'll notice that it works exactly the same. This does the same thing as our typedefs but the using alias is more flexible and works with C++ template parameters. And I tend to favor the using alias and I suggest you do the same. Providing a simple alias like this can be convenient in providing architecture independent types. In fact, the types in the standard end library are created with aliases just like these.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** typedef.cpp (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Primitive arrays](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=0)** - [Instructor] The primitive array type is commonly called a C-array because it's inherited from the C language. A primitive is a type that's defined as part of the language, as opposed to a derived type that's defined in a structure or a class. The array is a primitive type. Primitives are essential tools for building derived types. There's also an STL class called array and this can lead to some confusion. This lesson is not about the STL class. This lesson is about the primitive array data type or the C-array. An array is a fixed size container of objects where each object is the same type. This is a definition for an array of integers. The value in the square brackets defines the size of the array. This array has room for five integers. Once defined, the size of the array cannot be changed. At this point, the array is uninitialized. So each of the five integer values are undefined. It's always a good idea to initialize a newly created object. The empty curly braces will initialize the integer array so all its values are zero. Arrays are indexed with integer values, so the first element is always zero. So an array with a size of five will have elements numbered zero through four. This sets the value of the first element, element zero. The value in the square brackets is the index.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=94)** This expression assigns a value to the element at index zero, which is the first element of the array. Array elements may also be accessed as if the array were a pointer. This statement has exactly the same effect as the previous statement. This is a very common practice, so you'll need to recognize it when you see it. This defines an integer pointer and assigns the address of the array to the pointer. Notice that you don't need the address of operator to get an array's address. This is because an array may be accessed as if it were a pointer. This assigns the value two to the first element of the array. Because the pointer was initialized to the address of the array, it is pointing to the first element. This is the C and C++ operator for incrementing a value. You can increment the pointer and it will point to the second element. In C++, pointers are strongly typed so they know the size of what they point to. When you increment a pointer, it always increments by the size of the object or type it is defined with. So this assigns the value three to the second element of the array. This is another common technique in C++. Here we increment a pointer and use it in the same expression. It's just a shortcut for the separate increment and assignment of the previous two statements. You may also initialize an array using an initializer list. This both declares the array
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=186)** and assigns the values one, two, three, four, and five to the five elements in the array. It's very convenient and you'll see it a lot in newer code. When using an initializer list, you may omit the size parameter in the square brackets. The compiler will infer the size of the array from the initialization. This is array.cpp from chapter four of the exercise files. This is a simple array of five integers. I'm going to go ahead and run this. And you see that it prints out the five elements of the array, integers valued one, two, three, four and five. The array is declared with an initializer list. An initializer list is enclosed in curly braces like this. The for loop prints all the elements of the array. This is a range for loop, the most common way to traverse an array. Notice the use of a const reference for the value. This is also very common. The reference means we don't make a copy of the value and the const qualifier makes it so we cannot change the value in the array. Format is used to print each element in the array. Elements are indexed beginning at zero, so element two would be the third element. So if I were to say auto x equals array sub two, like that, and then print it, I'll go ahead and run this, and you see that x is three.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=279)** The subscript two is the third element in the array. And the third value is three. We could update the element to a different value. We could say array sub two equals 42. And when I run it, now that element, you might want to put that above the assignment so that it gets the new value, and when I run it, we see that the value is 42. So take some time to experiment with this array until you feel you understand it well. The primitive array is a fundamental part of C++ and you'll see it often. It's useful as a basis for more complex structure and classes, and on its own as well.

> [!info]- Semantic Content
>
> **Definitions:** is a  (8)
> **Env Vars:** stl (2)
> **Prerequisites:** you'll need (1), initialization (1)
> **File Paths:** array.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [C-strings](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=0)** - A primitive C string is a special case of an array, not to be confused with the string class in the standard template library. The primitive string is often called a C string. This is working .cpp from Chapter four of the exercise files. A primitive string is just a special case of an array of characters. So let's take a look at a primitive string. I can say const care and S with the brackets and initialize it with a string in quotes. And I can see out and just say, format like this, and I go ahead and build and run that and you see it prints out the string. What's interesting is that because this is simply an array of characters, we can initialize it with the string like this as a shortcut but what it really is, is the same as doing this. It's the six characters of the [[Microsoft Word|word]] string, followed by a zero value or a null terminator. When I build and run this you see that it works exactly the same because the C string is simply an array of characters terminated with a zero. And this is sometimes called a null terminated string. It is more commonly initialized like this, but it's exactly the same thing. So you can access the individual characters just as you would in an array.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=94)** You can say four const auto reference c:s and for each one, we can print out the individual character. And when I build and run this, you see that it prints out each of the individual characters plus a blank one. And that blank one is the null terminator. That's the zero at the end. So that array actually doesn't just have six elements. It has seven. Seventh element being the zero or the null terminator. If I don't want to print that, I can simply say if C like this, and it checks to see if this C is true or false with zero being false and anything else being true. And so in the case of the null terminator, it simply won't print it. So I can build run and you see it just prints the six elements that are not null. It's very common to use a four loop using a pointer like this. A more traditional four loop say, const auto asterisk for a pointer, P equals S and asterisk P testing for the null terminator and increment the P. And now we no longer need that. And instead of the C we say asterisk P we de-reference the pointer. And when I run this build and run this, you see it has exactly the same result. So this is the more traditional C four loop where the initializing expression is to assign a pointer with the address of the array.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=193)** Remember that the array symbol itself represents the address of the array. And then the while condition is while what's pointed at by the pointer is not null. And then we increment with the increment operator the ++ operator. So a constant string, and this here is a constant string in the quotes, a constant string is actually a C string. So even though a C string is an array, the most common way to declare a string is with a pointer and a constant string. So we'll most often see this written more like this. And it has exactly the same effect. It works exactly the same. What we have here is the constant string and we're simply declaring a pointer that points to it. You'll often see it initialized with an equal sign instead of the brackets, or we can do the same thing here and we can use the brackets. And this all works exactly the same. In summary, a string is simply a C array of characters. And an array is a structure of variables of the same type stored contiguously. Because the array is guaranteed to be stored contiguously, it's also easy to iterate with pointers and C++ syntax lends itself well to this usage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** template (1), exercise files (1)
> **Speakers:** - a (1)

#### [Structures](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=0)** - A structure is an aggregate of variables in C++, it's a simple way of collecting a number of disparate variables in a single container. This is struct.cpp from chapter four of the exercise files. And here we define a simple structure that contains a few different types of variables. Variables in the structure are often called members or sometimes properties. This structure contains three members, an integer, a double and a C-string. The structure itself is simply the definition, it's very much like an aggregate type and it's used as a type in the code. Here, we define a variable or an object based on that structure. So the structure is type capital S and the object is S-one and we're initializing it with this initializer list which simply contains the three different values separated by commas, so the integer, I is three, the double D is 47.9 and the C-string S is string-one. Individual members of the structure are accessed using dot notation. And over here in our format statement, we have S one dot I. So that's the I-element from the object S-one that's based on the structure capital S and the D-element is S-one-dot-D. And the S-element is S-one-dot-S. So I'll go ahead and I'll build, and I'll run this
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=92)** and you see, our result is the three element values. I can use dot notation to both read and write values. So I can say S-one-dot-D equals say 73.0. And when I build and run, you'll notice that our D-element now says 73 instead of 47.9. You can access members of a structure from a pointer with the pointer member D-reference operator. So if I come over here and I say auto, asterisk, SP equals the address of S-one then instead of this, I can say SP-dash greater than this is the pointer member D-reference operator it accesses a member through a pointer. And you'll notice when I build and run this we get the same result or D-member has been changed to 73. And if I wanted to, I could change all of these to SP-dash greater than, like that and we would get the same result. The structure is an important part of C++ programming. And we'll see many more examples throughout this course.

> [!info]- Semantic Content
>
> **Versions:** 47.9 (2), 73.0 (1)
> **Definitions:** is an  (2)
> **File Paths:** struct.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - a (1)

#### [Challenge: Library card](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=5)** - [Instructor] For this challenge, you'll create a data structure for a library catalog card. Most libraries used to have a card catalog, a large cabinet of drawers filled with 3" x 5" cards where you would look up a book by its title or author. Today, this is mostly online, but many libraries still use card catalogs. Each card looks something like this, with the title of the book, the author, the publisher, and other relevant information. For our catalog card, we will carry the following information: the title of the book, the author, the publisher, the subject, the International Standard Book Number is a common identifier for books, WorldCat or OCLC is another common identifier for books, the Dewey Decimal System is common in physical libraries, the year of publication, the year of the book was acquired by this library, how many copies we have in stock. And you'll need to decide on a data type for each element in the structure. I'm not going to tell you which type to use for each item, but here's some general guidelines. A C-string is useful for anything text-based, or anything that should be displayed in a certain format. Integers are good for numerical items that may be used as an operand in a mathematical expression. It's worth thinking about something like a Dewey Decimal format. This is two separate numbers which each have numerical properties.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=99)** Again, use your best discretion. We've been using cout and format, so you should be able to easily use them to display your results. The purpose of this challenge is for you to use your knowledge of C++ data types to choose those data types that work best in this context. I expect this challenge to take you about 15 minutes or longer. If it takes longer, that's fine. Take your time. Experiment a lot. I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** oclc (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### [Solution: Library card](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=5)** - [Instructor] Here's my solution for library catalog card challenge. This is 04-solution.cpp from chapter four of the exercise files. The structure for the card catalog card is at the top. It doesn't need to be here. You could have put it inside the main function and that would work also. The structure is pretty simple. I've used const care pointers for the strings and short integers for the numeric values. You could have also used character rays for the strings, simple ints would've worked fine for the numerics as well. Notice that the Dewey decimal value is two separate integers. This allows me to sort them more easily. These are numeric values and they're used that way. I print everything using cout and format as we've been doing throughout this course. And you notice that the Dewey decimal value is two integers separated by a period. Go ahead and run this and you can see my result here. So this is my solution. Yours may be similar, it may be different. As long as it works, and hopefully, you've learned something from the process.

> [!info]- Semantic Content
>
> **File Paths:** 04-solution.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Operators

[↑ Back to Table of Contents](#table-of-contents)

#### [Common operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=0)** - [Instructor] There are a few very common operators that you're probably already familiar with. For completeness sake, let's go over them quickly. This is operators.cpp from chapter five of the exercise files. The assignment operator is used to copy a value from one object to another. So we can come down here and we can say x equals y. And then go ahead and print x. And when I build and run this, you'll notice well, we have our initial values of 5 and 47. So we have x equals 5 and x equals 47. And then we assign y to x using the assignment operator, and we have x equals 47. The assignment operator's also called the copy operator. And in this case, it copies the value from y into x. There's also the standard four function arithmetic operators. We can say x equals y plus x. And we'll get the sum, which should be what? 52, yeah, 52. Or we can say x equals y minus x. And we'll get 42. And we have multiplication as well. And we have division. Now, you'll notice, our division is integer division. It does not give the remainder. You get the remainder with the modulo operator,
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=95)** which is a percent sign. So that's division is a nine with a remainder of two. Each of these operators returns a temporary object, which is a new object, rather than modifying any of the objects in the equation. And that new temporary object is then copied with the assignment operator to the variable x. Comparison operators are used to compare for equality or relative value. These operators are also called relational operators. So we can come in here, we can say if x is equal to y. So the double equal sign is the equality comparison operator. And we can say cout true. Else cout false. And when I build and run this, we see that it's false because x is not equal to y. We have a number of comparison operators available. We have greater than and less than. So if x is greater than y, which it's not, so it should be false. Or if x is less than y, which it is, so we should get true. We also have less than or equal to, which should also get true. And we have greater than or equal to. And we have not equal to. And that one should come out true. The comparison operators are used to compare for relative value or for equality. These are simple and effective operators
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=189)** that work on any scale or type. Logical operators are used for testing logical conditions. So let's create a couple of Boolean values, logical values, so I can say bool a true, like this. Or I could use auto. And either form works. And if we want to just how these Boolean types work, let's go ahead and look at their values. So cout format a is, let's put all that in quotes, as it should be. And do the same for b. Now, format recognizes the Boolean type and it will print out true and false for these. So we can see that both of these are equivalent initializations. So any nonzero value's considered true. Any zero value's considered false. So here in a, which is declared as a Boolean type, I could put in 47 and we still get oh, look at that. It can't be narrowed because we've got it in the brackets. See, that's the beauty of the brackets. It really doesn't allow you to do stuff like that. But this allows it to narrow. And so a equals true. So any nonzero value is considered true. The bool type is generally implemented in the smallest size possible, usually eight bits. And so if we come out here and we say take a look at the size
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=285)** of a Boolean, we can say size of a is. And we get the size with the size of operator. And we'll multiply it by eight for bits. And I'll come in here and I'll say bits. And when we build and run this, we see that we get an eight-bit size, which is the smallest natural size of this processor and it's the size of a short int or a char type. C++ has three Boolean logical operators and/or a not. And so we can come down here and we can say if a and b. So a and b should be false because b is false. If we say a or b, we get true. And there's also a not operator. And it's a unary operator so we only need one of these. If I say not a, we should get false because a is true. If I say not b, we'll get true. And of course, the operands to the Boolean operators may be the result of any logical expression. So I can say if 42 is greater than 5, and b, I'll get false because b is false. And if I say and a, I get true. Now, the interesting thing about all of this is that the and and or operators perform short circuiting evaluation and that means if the condition is satisfied
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=379)** after evaluating one side of the operator, the other operand is not evaluated. So if I were to say 42's greater than five or b or either a or b, it doesn't matter what I put on this side 'cause we have the or operator and it's already satisfied over here and so the right-hand side of this is never even evaluated. And you notice we can get this warning that the code will never be evaluated on the else because we have constants here. So we can say y is greater than x and get the same result. Some people notice that there's no Boolean exclusive or operator, an XOR operator would evaluate true if one and only one of the two operands was true. There's several reasons for this omission. According to Dennis Ritchie, one of the original designers of the C language, the XOR operator would be superfluous because it cannot be short circuited, it would not work like the and or or operators. XOR can be easily implemented with a simple a not equal to b. And this is exactly the same as an XOR operator. And of course, it's true because a is true and b is false. If you're not sure if your operands are actually Boolean types, you can put a bang in front of them, a not operator and get exactly the same result but that not operator forces that operand to be a Boolean type. So logical operators are simple and straightforward.
>
> **[7:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=472)** They operate on logical conditions. They may be used for logically combining conditions.

> [!info]- Semantic Content
>
> **Env Vars:** xor (4)
> **Definitions:** is a  (3)
> **File Paths:** operators.cpp (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Compound assignment operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=0)** - [Instructor] C++ supports compound assignment operators that allow you to combine an assignment with an arithmetic operation. These are both convenient and efficient. This is operators.cpp from chapter five of the exercise files. We'll come down here and we'll simply create a compounded assignment operator. So what this does is this adds Y to X. It's exactly the same as X equals X plus Y, with the difference that with the compound operator, X is only evaluated once. And this is a distinction that may make a difference under some circumstances. So it's good to be aware of. But otherwise, it's exactly the same. So if I come down here and I print out X after the operation, we'll go ahead and run this. You see that after our compound assignment, X is now 52. We've added the value of Y to X. There's five different compound assignment operators, there's plus equals, there's minus equals. So if I go ahead and run that, we'll get a negative value. There's times equals, and there's divide equals. And we might want to turn these around for divide equals, huh? And we'll go ahead and print Y instead. And there's also the modulo equals for the remainder after the division.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=96)** The compound assignment operators are convenient, safe, and often more efficient than their common equivalents. Feel free to use them wherever you would use the equivalent expression. Just be aware of the slight distinctions.

> [!info]- Semantic Content
>
> **Warnings:** be aware (2)
> **File Paths:** operators.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Increment and decrement operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=0)** - [Narrator] C++ provides unary operators for incrementing and decrementing values. So, unary operator means that it has only one operand. Let's go ahead and create a variable. And then we'll go ahead and we'll print that variable while incrementing it. So this plus-plus in front of the X, that is a unary increment operator. It's unary because it has one operand, the X, and it simply increments the X to its next value before returning it. And so, well, let's just do this a few times here. We'll build and run this. See that our result is X is 6, 7, and 8. So what's happening here, is it first increments the value, and then it returns the value. There's also a decrement version of this. Looks like that, and it works exactly the same. It decrements the value, and then returns it 4, 3, and 2. There's another version of each of these that first returns the value, and then increments or decrements it. And that's the postfix version of these increment and decrement operators. And so when I run this, you see our result as 5, 6, and 7. Because we first return the 5, and then we increment it, and then we return the 6, and then we increment it. So these are the postfix versions of these unary increment and decrement operators. It's important to note that how these work with pointers,
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=96)** because a pointer is strongly typed, and the system knows the size of the object that it points at. And so the increment and decrement will happen by that size. So let's take a look at pointer increment dot CPP from chapter five of your exercise files. And you'll notice that I have this alias here, aliasing the uint8. That's a unsigned 8-bit integer, and I'm calling an int type. And I'm using that throughout here. I have an array of five of them, and these are 8-bit integers. And I have a pointer that I've assigned to the array. And then I call this print P with each of these, and incrementing after using the postfix version of the increment on the pointer. And I'm just passing at the pointer. So here's our print P function. And we have a pointer to our int type, and you notice that it's const qualified. And then I print it. I print it two ways. I print the pointer using this static cast. This is just a little trick to get the format function to print the pointer. And then I print the what's pointed at by the dereferenced value. So I'm going to go ahead and run this, and you see that we have our pointer address and value is 1. Our pointer address, value is 2. So this is our array, and these are the first three elements of the array and their addresses. So you notice that the increment operator increments the pointer by 1, 8, 9, 10, but if I change the size and make this a 16-bit integer instead.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=190)** Now you see why I'm using the alias, and just build and run that. Now our increment, increments by 2, 8, 10, 12. And if I make it 32 bits, now it'll increment by 4, 0, 4, 8. It's also worth noting that pre-increment is slightly more efficient than post-increment. So in other words, this is more efficient than that. The reason for that is that with the post increment, the operator needs to first make a copy of the value and then increment, and then return the value before the increment, the copy. And so it's just slightly less efficient and we'll get some more details on this in the companion course, C++ Advanced Topics. But it's just worth being aware that this version with the pre-increment. I'll go ahead and I'll build and run this. Is very slightly more efficient than the post-increment, and there are circumstances where that may matter. The unary increment and decrement operators are very useful and very common. Keep in mind that the prefix version increments before returning the value, and the postfix version increments after returning the value.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** means that (1), is a  (1), in other words (1)
> **Warnings:** note that (1), keep in mind (1)
> **Env Vars:** cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Operator precedence](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=0)** - [Instructor] Operator precedence is the order in which operators are evaluated in an expression. This expression could have different results depending upon the order in which it is evaluated. For example, using parentheses to bind parts of the expression together. If we give precedence to the addition, we get this result, and if we move the parentheses around a bit, we get a different result. And if we remove the parentheses altogether, we get yet a different result. The order of evaluation without the parentheses is that the multiplication happens first, then the division, and then the addition. It's as if it were parenthesized like this. The point of understanding operator precedence is to be aware of the rules. You don't need to memorize the rules. There are plenty of handy reference tables available. But you do need to know that this is how it works and ultimately, if you care about the order of evaluation of an expression, it may be best to use parentheses. I've included this PDF of a handy operator precedence table in the exercise files. It's also easy to find one online. I keep a laminated copy by my workstation. It shows all the operators available in both C and C++, with the highest precedence operators at the top and the lowest at the bottom. The precedence is the order in which the operators are evaluated. Operators near the top of the table are evaluated first. Associativity is the order in which the operands are evaluated.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=94)** Most operands are evaluated left to right, except prefix unary operators and assignment operators, which evaluate their operands right to left. It's important to understand operator precedence but it's not so important to memorize it. It's easy to keep a chart near your workstation for when you need to read someone else's code who may not have been so considerate as to use parentheses. Most of the time, though, it's a good idea to use parentheses to specify the order in which your expressions are to be evaluated. That'll make your job easier when you want to read the code later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Prime numbers](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=0)** - For this challenge, you will write a program that calculates the first 25 prime numbers, that is, all the prime numbers under a hundred. A number is considered prime if it's a natural number, that is, a positive number with no fractional part. A prime number must be greater than one, so one is not a candidate, but two is. And it cannot be a product of two smaller natural numbers. Another way to say this is, its only factors are itself and one, or it can only be divided evenly by itself and one. This is a list of the first 25 prime numbers. Your results should match these numbers. The purpose of this challenge is for you to use your knowledge of C++ operators to choose the operators that make sense in this context. Expect this exercise to take about 15 minutes. It's fine if it takes longer or if you want to spend extra time experimenting and trying different approaches. My solution is in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - for (1)
> **Non-Speech:** (beeping music) (1)

#### [Solution: Prime numbers](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=0)** - [Instructor] This is my solution for calculating the first 25 prime numbers. This is 05-solution.cpp from chapter five of the exercise files. This solution uses a couple of nested loops to iterate through the list of candidates and the potential factors for each candidate. The outer loop simply counts from 2 to 99 and the inner loop tests each of the factors, each of the potential factors for that number. Notice the use of the modulo operator to test for factors. This is very convenient since we have integers. If we find factors, then we set the prime flag to false, and this break sends us back to the outer loop for the next candidate. If it is prime, we print it out and we end with a new line. So let's go ahead and run this. And you can see there are the first 25 prime numbers, all of them under 100. This is my solution. Yours may be similar. It may be different, as long as it works and hopefully you've learned something in the process.

> [!info]- Semantic Content
>
> **File Paths:** 05-solution.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of C++ functions](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=0)** - [Instructor] Functions are fundamental to C++. Even in its object model, functions are the basis of class methods. All code in a C++ program happens in functions, starting with the main function. A function is a block of code that may be called by and may return a value to other code. This is analogous to procedures or subroutines in other programming languages. Functions allow you to generalize and modularize your code by creating containers for logical subsets of code and by allowing code to be reused. Arguments surpassed to functions by value. So when you call a function and pass the variable, the value and type of the function is passed to the function. If the function then changes that value, the caller's copy remains unchanged. For example, here we have a variable a with the value 7. This variable is passed to a function, func. After the function returns, we print the value. The function assigns a copy of the value to a local variable named a. This is a new variable. It's in a different scope, and it's separate in every way. So when this a is incremented in the function, only its local copy is affected. The caller's copy remains unchanged and will print the number 7. The alternative to call by value is called by reference. You may implement call by reference
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=92)** explicitly with pointers. In this example, the ampersand in the function call means we pass a pointer to a instead of the value of a. The ampersand is called the reference operator or sometimes the address of operator. In the function, the variable p carries as its value, a pointer to a. So when we want to increment the value of a, we do so by de referencing the pointer. The asterisk is called the pointer deference operator. By passing a pointer, we explicitly call by reference. Technically, it's still called by value, except in this case, the value is a pointer. The value in the caller's variable will be incremented, and we will print the number 8. This is called a side effect because the variable is changed outside its own scope. In C++, you may also use the reference type to implement call by reference. This makes the call by reference appear more implicit. This is very common in C++, and it carries some inherent dangers if not implemented carefully. In practice, its best to avoid side effects with references by declaring them with constant modifiers. If you need side effects, I strongly recommend you use pointers instead. In C++, functions are identified by their function signature. This function, which returns the volume of a cuboid, is different from this function, which returns the volume of a cylinder, even though the two functions have the same name. The return type, the name of the function,
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=186)** and the types of the function arguments are all combined to form the function's signature. The full function signature, not just the name, is used to identify the function. Let's take a look at a function in C++. This is func.cpp from Chapter 06 of the Exercise Files. Here, we have a simple function called func. A function is declared with a return type, the name of the function, parenthesis, and a block of code. The parenthesis may or may not include function parameters. The body of the function is the block of code in curly braces. Notice that main is also a function. It's never called directly. It's the main entry point of your program, and it's only called by the system. A function is called by using the function call operator, and a function must be declared before it's called. So I'll go ahead and run this. And you see that maine calls func. This is main. It calls this is a func. But if I take the function itself and I move it to after main, like this, when we try to build, we get an error saying Use of undeclared identifier func. This is because a function must be declared before it may be used. Now, function declaration is different than a function definition. This is a function definition. We can declare the function in advance, and this is called a forward declaration. We simply give the function signature,
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=278)** void func parentheses ; like this. And now, it'll build and run just as it did before. Let's go ahead and put this back in its original state. Variables declared in a function default to automatic storage. Other storage options are also available. If we come into our function and we declare a variable, and we'll go ahead and print our variable, and we go and run this, we see that it prints out the value, i is 5. But what's interesting about this, because this is automatic storage, if I increment the value and then say, call it a few times, you'll notice that it prints the same value each time, i equal 6, i equal 6, i equal 6, and that's because it's incrementing it with the prefix increment. So it's incrementing it before it passes it to format. Now, if I want to, I can change this to static storage. And now, instead of being stored on the stack, which is temporary storage, it's being stored in permanent storage, well, permanent for the life of the program. And each time we call it, its value will change from the increment. So if I go ahead and build this and run it, see it says i is 6, i is 7, and i is 8. So static storage is not on the stack. It's called persistent storage. And it's persistent for the life of the process. Because automatic storage is stored on the stack, it's not suitable for large objects.
>
> **[6:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=372)** So it's always a good idea to avoid using automatic storage for anything larger than a few scalar values. Functions are fundamental to C++. Variables declared in a function default to automatic storage. If you want your data to be persistent, you may declare your variables as static.

> [!info]- Semantic Content
>
> **Definitions:** is called (6), is a  (5)
> **Analogies:** analogous to (1), for example (1)
> **File Paths:** func.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Passing values to a function](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=0)** - [Instructor] Parameters are passed to a function by declaring them inside the parentheses of the function definition and passing them in the parentheses of the function call. This is func.cpp from Chapter 06 of the Exercise Files. Let's pass an integer to this function. I'll start by declaring an integer inside these parentheses. Let's say int a. And we'll print out the value of a so we see what it is. And then I'll pass a value inside the parentheses of the function call from main. We'll go ahead and build and run this. And you see that this value here gets passed the function and printed by the format statement, where it says the value is 47. A function may also have a default value. I can come up here and I can say the default value is 73. And now when I call it without a value, it will print value is 73. And when I call it with the value, it'll print value is 47. This allows a function to be called with either zero or one argument. This can be handy, especially in class constructors, as we'll see later in this course. By default, functions in C++ pass variables by value. Let's go ahead and take this default out. We're not going to need this. And what I want to do here is I want to print the value before and after the function call here. So here we have a variable, int a 47, and we're going to pass that a variable to the function,
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=98)** and then we'll print its value after. But inside the function, I want to change the value. I'm going to say a = 73. And what's interesting is, when I run this, you'll see that the value is 73 inside the function, but when we return from the function, the value is back to 47. That's because this variable is an entirely different variable than the caller. When the function is called, the value is copied to a new variable on a small data structure called a stack. We'll get to that in a moment. But that makes this entirely different than this. And so that's what call by value means. Means the value is taken to create a new variable inside the function, but it's a different variable than the one that was called. You can pass by reference instead, and then you can actually change the value in the caller. And do that simply by using a reference indicator here on the declaration. So now this is a reference to a variable rather than the variable itself. And now when I build and run, that's all I have to change. You see the value is 73 in both places. Now, obviously you can see, this is pretty dangerous. You can see where this could have unintended consequences, and that's why it's common practice when using a reference to qualify it with a const qualifier. And now when I try to build it, you'll notice that the compiler doesn't even let me change it in the function anymore. I have to take that out in order to build and run this.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=192)** And then the value is 47 in both places. Now, before we talk about why you would want to call by reference instead of call by value, let's look at one other way you can do this. If I put an asterisk here instead of the ampersand, this is now a pointer. And now I have to actually pass the address of the variable. And now it's very obvious to everybody that I'm passing by reference. So I can come in here and I can say what's pointed at by a = 73. And of course I have to dereference the variable in order to print it. And now when I run this, you notice that it's changed the variable in both places, but the caller knows that they're passing a reference. As opposed with the reference type, this makes it obvious that it's being called with a reference. And you'll see this a lot when you're interfacing with libraries that are written in plain C, because plain C doesn't have a reference type. So call by reference is always accomplished with a pointer. And of course you can also protect your pointer reference with a const qualifier. And again, it won't let you change that value. So why do we care about call by value versus call by reference? Internally, values are passed to and from a function on a small data structure called a stack. The stack is relatively small space, requires processing power to manage. Passing large values to a function requires copying large amounts of data on the stack. This can be time consuming, and it can cause a stack to overflow,
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=286)** which can crash your program and create security vulnerabilities. So when you pass something larger than a simple value, you'll usually want to use a reference or a pointer. For example, let's say that I want to pass a string, and we will use an STL string for this. I'm going to include the STL string library up here. And I'll come down here and I'll declare a standard string. We'll call it s, and we'll give it a value of this is a string. Now, in my function here, I'm going to declare a standard string reference, s, and we'll const qualify it because that's always a good idea with references. And we'll say the value is s, and it'll print the value of our string. Now, I call our function with s like this, and we'll go ahead and we'll print it after as well. So now when I build and run this, you notice it works as expected, but what's happened here is this could be any large data structure, could be a vector with thousands of values or it could be a large string or whatever. And I want to pass it to my function, I want my function to do something with it, but not necessarily change it. But I don't want to pass all that data on the stack because the stack is a limited space, requires processing power, it can overflow and create, as we said, security vulnerabilities. So instead, I'm passing it as a reference.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=380)** Here in the function call, we don't necessarily care. Where we care is here in the function. And so I've declared this as a const reference, and that'll ensure that all that data is not copied to the stack, that instead we're using the data in its original location through the reference. By default, C++ function parameters are passed by value on a stack. You can pass pointers or references if you need to pass larger values, but you need to do so explicitly and safely.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Env Vars:** stl (2)
> **File Paths:** func.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Returning values from a function](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=0)** - [Instructor] A function may return a value back to its caller with a return statement. This is func.cpp from chapter six of the exercise files. Let's return a value for our function. In order to return a value, we need to specify a return type. And this void return type means that the function returns nothing. So we want to give it a return type that will allow us to return a value. Let's return an int. And we'll take an int as our parameter or argument. Int a. And we'll return with the return statement, a times two. So, it simply takes a value and it multiplies it by two and returns it. So, let's call it with value. We'll give it a value of 42. We'll take that return value and put it in a variable. Which we'll call X. And we'll go ahead and we'll print that out. Now, when I build and run this, you see that it prints, value is 84. Which is 42 times two. So, let's take a look at what happens here. We call the function with the value 42. And that value is pushed on the stack. And popped off the stack as this integer a. So a copy of that is now integer a. And then we multiply a by two. And we return again on the stack at the value 84. And that value gets copied again, into this variable X. Where we print it out. So, all the stuff's happening on the stack. Things are getting pushed onto the stack
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=92)** and popped off of the stack. And in particular what we're concerned with in this case is our return value is also getting returned on the stack. And this means, as we know from our previous lesson, you can't return anything large. Because the stack is a limited space. It requires processing power to push things and pop things off of it. And if you put too much data on a stack of limited space, you can get what's called a stack overflow. And this can create security problems. So, what we need to do if we're going to return something large, is return it as a reference. And let's show you how that's done. We're going to start by importing the string library. I'm going to come down here, we're going to return a standard string reference. We'll go ahead and we'll create a string inside the function. And I'm going to make it a static string. We're making it a static string because again, we don't want to store it on the stack. And we remember that storage of variables inside a function, default to automatic storage. Which is stored on the stack. So, we create a static string. And we'll give it a format. So the format function returns a string object. And we can say, a times two. And then we can simply return. Oh, we need to give the string a name, right? We return s. And because we're returning s through a reference, it will return the reference to our s.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=184)** It'll return a reference to exactly this s. And so, we probably want to make that const. So we can make that const string reference. Again, when you're returning a reference, you want to make it const, if at all possible. Unless you really want the side effects. Now, all of this doesn't even need to change. Of course we can now make this a reference as well. And I'll make const. And when we build and run, it says value is, value is 84. So that second value is our string, right? We can even take out this first value is. And we can just print it like that. And it'll say value is 84. And that's from this format up here, which gets assigned to this static string. In static memory space. It gets returned as a const reference. And it gets assigned to this X variable as a const reference. And printed out here, in our format statement. So, returning value from a function is very much like passing values to a function. And you want to be careful of variables that are stored on the stack.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **File Paths:** func.cpp (1)
> **Documentation:** stack overflow (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Using recursion](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=0)** - [Instructor] In mathematics a recursive function is a function that refers to itself. For example, a factorial indicated mathematics by the exclamation mark, is defined as the product of all positive integers less than or equal to its prime factor. In other words, the factorial of five is equal to five times the factorial of four. This is an example of recursion in mathematics. The factorial of n is equal to n times the factorial of n minus one. Let's try this in C++. This is recursive factorial.cpp from chapter six of the exercise files. And here we have a simple function called factorial which takes an unsigned long and returns an unsigned long, and it calls itself. It returns n times the factorial of n minus one, calling its own function. And if n is less than two it returns one and that ends the recursive loop. So the reality here is for every recursive function call memory is allocated for the parameters for any local variables. For the return value for other function call overhead in all of this is on the stack. So we wouldn't want to do this for very, very large numbers. And a loop is often more efficient. Go ahead and run this. And you can see that the result is 120 which is indeed five times four times three times two times one.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=94)** C++ supports recursive functions. But you need to be careful for problems that may require a lot of iterations. Recursion can quickly use up a lot of resources which can easily create buffer overflow related security vulnerabilities. It's often better to find a different solution.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), refers to (1), defined as (1), in other words (1), is an  (1)
> **File Paths:** factorial.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Non-recursive factorial](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=5)** - [Instructor] Your challenge for this chapter is to create a non-recursive function for calculating factorials. Earlier in this chapter, we covered a recursive function that calculates factorials. This function is interesting and clever, but it has a serious flaw. Each iteration adds a function called the stack along with its parameters and return values. For large values of n, this can quickly overflow the stack causing crashes, errors and worse. The challenge is to create a non-recursive function to perform the same calculation. By way of refresher, the factorial of n is the product of all positive integers less than or equal to n. The purpose of this challenge is for you to create a function that takes a value and returns a value. It should take about 15 minutes, but it's okay if it takes longer or if you spend time experimenting and learning. And remember, your function should not use recursion.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1), we covered (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Non-recursive factorial](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=0)** - [Instructor] This is my solution for calculating a factorial without recursion. This is 06-solution from chapter six of the exercise files. Solution is very simple. I've created a simple function that takes one unsigned long integer and returns one unsigned long integer. And it uses a single while loop and the compound multiplication operator and the prefix decrement operator to calculate the product of all values less than or equal to N. Notice that my loop control is while N is greater than one. There's no need to multiply by one because any number multiplied by one is equal to itself. And this gives the loop a nice termination. We return the result and we'll go ahead and build and run. And we'll see that factorial of five is indeed 120. This exercise is more about creating the function than it is about the algorithm itself. Although understanding the non recursive algorithm does have its own value.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Classes and Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of classes and objects](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=0)** - [Instructor] In C++, classes're treated as custom data types. They're used like any type provided by the C++ language. Classes and objects're extremely powerful, with many features and capabilities. This chapter will cover the basics, which should be enough for many purposes. For more detail, please see the companion course, "C++: Advanced Topics." Let's start by defining some terminology. First, let's look at the words, class and object. The definition of a class, using the class keyword, is the class itself. You may then use the class to create an object. The object is sometimes called an instance of the class. Sometimes you'll hear the verb form, instantiate, to describe the process of creating an object. Class members, sometimes called object members, are the contents of a class. There're two types of members. Data members are the members that represent encapsulated data. Data members're sometimes called properties. Function members are the functions associated with the class. Function members're sometimes called methods. Constructors and destructors are special function members that're called when an object is created or destroyed, respectively. A constructor is called when the object is created. There may be several constructors defined, but only one is called for each instance of an object. Constructors're named with the name of the class, and they have no return type. The destructor is called when the object is destroyed.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=93)** Only one destructor may be defined for each class. The destructor is named with a tilde character followed by the name of the class. C++ classes allow you to create fully-realized data types that work exactly how you want them to. Using C++ classes, you may create constructors for a variety of different usages; allocate and deallocate memory appropriately, so that your objects run smoothly; overload operators so that your objects can use those operators intelligently; and create conversion operators so that your objects behave as you expect them to in different contexts. Let's take a look at an example of a very simple class. This is "class.cpp" from chapter seven of the exercise files. This is an example of a very simple class, holds a single value and provides an interface to set and get that value. The class definition, here on lines 10 through 15, defines the class. We have the keyword class; we have the name of the class, C1, with a capital C; and then inside this block, which is terminated with a semicolon, we have the actual definition of the class. A class defaults to private accessibility. Private members're not accessible from outside the class. The public keyword declares that the members below are publicly accessible. So this is like the interface to the class. Data members, like this int C1val right here, are usually private,
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=187)** and they're called properties. Function members are how you access and manipulate the data. These're usually public, although sometimes there are private ones. And function members are often called methods. You can see down here in main, we instantiate, we create an object, called 01, based on the class, C1. And then we call the function member setvalue, with the parameter 47, an integer, to set the value of the data member, the private data member, the property. And then we use getvalue on the object, 01, to retrieve its value. So let's go ahead and run this, and you see that it says the value is 47. It's often considered good practice to separate the interface and the implementation. And we do this by taking these function members, and defining them outside of the class. We'll do this like this. We'll name this C1::, and make it like this. And then we have to take the block out from up here. So now we have the declaration of the function inside the class, but the definition of the function is outside the class. And you let the compiler know that this is associated with the class by using the scope operator and the name of the class. Let's do the same with getval. And you'll notice that when we build and run, this works exactly the same.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=279)** The difference here is that we now have the implementation of these functions separated from the interface, which is how you use the class. And this is very common. And in fact, the interface will often be in a separate file, a .h file. And the implementation will often be in a separate .cpp file, or whatever name you're naming your C++ code files. And then the main may be in a third file as well. So often, especially when these classes get larger, it's more convenient to have them separated out like that. But for our teaching purposes, and as you're learning the basic syntax of C++ classes, it's more convenient to show it all in one file like we do here. In the remainder of this chapter, I'll give you the basics of creating and using classes and objects. For more detail, including class inheritance, polymorphism, et cetera, see the companion course, "C++: Essential Training Advanced Topics."

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is an  (1)
> **File Paths:** class.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Data members](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=0)** - [Instructor] C++ classes are based on C structures. In fact, you can create a class using either the struct or class keyword. This is struct-class.cpp from chapter seven of the exercise files. And you see that I have a structure here with three data members ia, ib, ic, all ints. And our struct is called A. And down here in main I declare an object based on our struct A and I initialize it with three values. And then I print it out using these three data members. Structure members are accessed with the dot operator also known as the element selection operator or the member operator. So I can build and run this, and you can see the result. Struct and class are identical with one difference. If I change this to class, you'll notice that this no longer works because these are now private members. The difference between class and struct is that class defaults to private visibility whereas struct defaults to public visibility. In order to make this work the same, I need to use the public keyword. And now it works exactly the same as a struct version. Again, the only difference between class and struct is that class defaults to private visibility and structure defaults to public visibility. This makes struct much more useful for [[Data Structures]]
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=96)** and this makes class much more useful for situations where the data members are going to be private and encapsulated and you're going to have function accessors. Let's take a look at some function accessors. This is accessors.cpp, and it's exactly the same. We have our same class with the same three data members although we've left them private this time. And now we have public accessors seta, setb, setc, geta, getb, getc. These are function methods, and they're in the public section of the class. We also have a constructor. Because our data members are private, if we want to initialize them, we need to use a constructor. This is a very simple constructor. You notice that it takes three arguments, three parameters integers a, b, and c. And then following the colon has these initializers that simply initialize the values of our private data members from the parameters. And then an empty block for the function block. This is a very common technique for constructors in C++. Down here in main, it's almost the same. Our class is still named A and our object is still named o1. But instead of getting the data members directly, which we can no longer do because they're in private accessibility, we now use the getters getc, getb and geta. So when I build and run this you'll notice that we get exactly the same result.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=191)** We'll learn more about member functions later in this chapter. C++ classes are based upon C structures. In fact in C++, structures and classes are identical except that struct members default to public while class members default to private accessibility. It's good practice to use struct when the structure will only have data members and to use class when there are also function members.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Definitions:** is a  (2), is called (1), known as (1)
> **File Paths:** struct-class.cpp (1), accessors.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Function members](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=0)** - [Instructor] C++ classes can have member functions that act as methods for the class. This is class.cpp from chapter seven of the exercise files. This is a very simple class with one data member. The data member c1val is private by default, that's by design because it's considered best practice to encapsulate object data and to use member functions to access the object data. So there's a couple of member functions, setVal and getVal, which set the value of the private data member and get it respectively. Down here in main we create an object. We use setVal to set the value of the object and we use getVal to get the value of the object and we can build and run this. And you see that our value is 47 as expected. There's an important effect that happens when we const qualify an object. So here we have an object, 01, which is not const qualified. So it's considered mutable as we say. So if I want to create a separate one and I'll do this after calling set value. So I make a copy of it. I'll say C1, that's our class, 02 for our new object equals 01. And I'm going to const qualify this by putting the const qualifier before the type. Now let's go ahead and print it. 02 and we'll call this 02 value and 01 value. And you'll notice that when I go to run this the build fails.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=93)** I get an error here that says this argument to member function getVal has type const C1, but, and we can expand this function is not marked const. So this is a lot of words to say that if I declare an object const, we need to have a constant qualified getter in order to access the value. So in other words, this getter, I call these setters and getters, this getter is not const qualified. To const qualify it I can put the [[Microsoft Word|word]] const after the function signature and before the block. This tells the compiler that I've designated this as a const qualified member function. And that I promise not to, and actually it won't even allow me to, modify any data in the object. So in other words, in this const qualified function I can't say c1val equals 42. If I try to build that, it'll say I can't do that. So if I build it this way, actually it all works just fine now. We can run it. This const qualified getter will work for both the mutable and the immutable const qualified object. No, if we want to, we can actually have two versions of this getVal. And for this purpose I'm going to go ahead and I'm going to separate this out as we've seen that we can do elsewhere. I'm going to put this out on its own like this. And I have to have the const qualifier
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=190)** both in the declaration and in the definition and I'll go ahead and build and run. And we see that this still works, but now I want to create a second version of this that is not const qualified. So we can see that we can actually have two versions of the same getter, one for the mutable objects and one for the const qualified objects. And I'll just go ahead and I'll put a little C out print statement in these so that we can see which one is being called. And when I build and run this you'll notice that the mutable one is called first for the mutable version of the object for 01. And the immutable, the const qualified, is called for the const qualified object. So this can come in handy in some cases. The simple rule to remember is that const qualified functions can always be called. Non-const qualified functions may only be called by non-const or mutable objects. Member functions are what make object oriented programming possible. As we go through the [[Representational State Transfer (REST)|rest]] of this chapter, you'll see that most of the other features of C++ objects are based on member functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** getval (4), setval (2)
> **Definitions:** is a  (2), in other words (2), is called (2)
> **CLI Commands:** make (2)
> **File Paths:** class.cpp (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** best practice (1)

#### [Constructors and destructors](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=0)** - [Instructor] Constructors and destructors are special member functions that serve a specific purpose. Constructors are used to initialize and set up an object, and destructors are used to de-allocate and reset resources when an object is destroyed. There are several types of constructors in C++. This is constructors.cpp from chapter seven of the exercise files, and you notice that this a bit longer. Our classes are going to start getting a little bit more complex from here on out. At the top, we include the string library because we're going to be using that and we have a using alias for std::string so we can just call it string from here on forward. We have two constants declared, and these are in static memory space because they're outside of any functions. Two constant strings. Unk stands for unknown and clone_prefix is a simple prefix string clone- and we'll see how we use that later. The interface to our class is right here from line 15 through 26. It has three data members, each of them string objects from the STL. Type, name and sound. And I put this little a_ in front of 'em to show that they're part of this particular class. And then we have constructors in the public section. We have a default constructor. It's called a default constructor because it has no parameters, and it'll initialize the object to a default state. Then we have a constructor with parameters or arguments.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=96)** I have type, name and sound. And each of these will get assigned to these private data members. We then have a copy constructor that'll take its data from another animal object. We have our destructor, and we have a copy/assignment operator. And we'll talk more about operator overloads later on in this chapter but we're covering this here because it acts like a constructor. And then we have a simple print function for printing out our objects. And you notice that it's const qualified so that I'll work with const objects. All right, before we get into the implementation, let's go ahead and run this so you can see what happens. The idea here is that we're simply printing out every time we call one of the constructors so that you can see exactly what's going on. So when I build and run, you see we have the default constructor and then it prints with the print statement here, unknown the unknown says unknown. So the default constructor has set the class to a default state. We then have the constructor with parameters or arguments. It says constructor with arguments. And then bob the goat says baah because we've given it these strings. We have a copy constructor and the copy constructor here. And we have the assignment operator, a equals c. And then end of main and then all the destructors are called for all of our objects. So let's take a look at these one by one. I'm going to comment out all of this
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=194)** so that we can just concentrate on one of these at a time. So Animal a, when I build and run this, you see it says default constructor, unknown the unknown says unknown, end of main, and then the destructor. So our default constructor up here, the code for our default constructor simply prints out the words default constructor. But the constructor itself uses the list of initializers to initialize the private data members. So a_type gets unknown. These all get the unknown string. And so when we print, it says unknown the unknown says unknown. So that's our default constructor. Next, we're going to look at our constructor with arguments or parameters. We have these three arguments, each of them are const string references. And we have type, name and sound. And those again with the initializer list, they get assigned to our variables and we have this cout that says constructor with arguments. So if we come down into our main and we can uncomment this part. You see that now it says constructor with arguments. Bob the goat says baah. And then they get destroyed. Now let's look at our copy/assignment constructor. Here's our copy constructor. This gets called when an object is created by copying from another object.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=288)** And our copy constructor has as its argument another animal object and it's a const reference to another animal object. And we simply assign each of these properties, and you'll notice that we take clone_prefix and we add it to the beginning of the name. And this is actually the addition operator from the string class that we're using for these properties. So a_name is a string object and we have two string objects, one on either side of a plus sign. So it's going to use the plus operator from the string class. And we'll look more at operator overloads later on in this chapter. But you'll notice now when I uncomment our copy/assignment constructor, and I build and run, you notice that we get clone-bob the goat says baah because it copied it and it put that clone in front of it so we can see that it's a copy. And we can use the assignment operator like this or we can, of course, use braced initialization and get exactly the same result. Clone-bob the goat says baah. And finally, we have our assignment operator and we can look at this up here. This our assignment operator. Operator overloads use the [[Microsoft Word|word]] operator and then the symbol for the operator. And on the right-hand side of the operator, we have an Animal object, and we do the same thing with the copying but you notice that there's this condition here
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=380)** if this is not equal to the address of the right-hand side object. So this is actually a keyword in C++ and it always returns a pointer to the current object. And so I'm comparing the address of this object with the address of the right-hand side object so that I don't copy myself into myself. It's really just an efficiency. This'll work fine without it but it's a waste of resources and so under most circumstances, you want to use this in the copy assignment operator, especially if there's more computation going on than just assignment of resources. And copy assignment operator always returns a reference to this, and so we dereference the pointer and we use the reference operator here to return a reference to our current object. And when I build and run, you notice here the assignment operator, we get an extra clone, so now we have clone-clone-bob the goat says baah. We reach the end and our destructor is called for each of them. Our destructor looks like this with the tilde in the name of the function member. And it simply prints out that this is a destructor 'cause there's really nothing to do. Each of the strings will destruct themselves when they go out of scope. So constructors and destructors are important parts of any C++ class. It's always worth thinking carefully
>
> **[7:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=472)** about how your objects are constructed and crafting constructors and destructors that handle all the necessary use cases. For more detail about constructors, please see the companion course C++: Advanced Topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Code Identifiers:** clone_prefix (2), a_type (1), a_name (1)
> **Prerequisites:** set up (1), initialization (1)
> **File Paths:** constructors.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Operator overloads](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=0)** - Operator overloading is the ability to use common operators with user defined objects and classes. It's not unique to C++, in fact it was one of the original concepts borrowed from ALGOL for C++, but how C++ does it is fairly unique and extremely powerful. There are two distinct ways to overload operators in C++: with member functions, as part of a class definition, or as separate non-member functions. In this lesson, we'll talk about the member functions in your class definitions. We'll discuss the operator non-member functions in the next lesson. This is Rational .cpp from chapter seven of the exercise files. This is a fully functional class that performs four function arithmetic on rational numbers as fractions, and the class here is called Rational. We can see it has two data members, a numerator and a denominator, and we can see that has a couple of constructors and a destructor. This first constructor. This is actually a default constructor, because it has default values for both of its parameters. It can be called with zero, one, or two parameters. And any constructor that can be called with zero parameters is considered a default constructor. And obviously if you call it with zero parameters, it should give you zero over one, which is the number zero. If you call it with one parameter, it'll give you that number over one. For example, we call it with seven later on.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=94)** So it gives us seven over one, which is the same as the integer seven, in value. Or you can call it with two, and get an actual real number or rational number. This is a copy constructor, and we've seen how that works. This is a destructor, and we've seen how that works. We have a couple of getters for the numerator and the denominator, and we have this function reduce, which will reduce a fraction. We have str that'll return a formatted stl string. And we have raw_str, which will return just the numerator/denominator as a string. And then we have the operator overloads. Now we've seen the assignment operator, which is actually an operator overload. And here we have these four more, addition, subtraction multiplication, and division. The assignment operator can return a reference, because it's an assignment. It actually modifies the value in the object. The other operators, you notice they're all const qualified. They don't modify anything in the object. Instead, they simply return a new object, which is a result of the arithmetic operation. So for example, if we look at plus, and all these are pretty much the same, with the exception that the formula is obviously different for addition, subtraction, multiplication, and division. These are basically the formulas for how to do these operations on a fraction that we learned in primary school. But if we look at the plus operator overload, all of the other ones working exactly the same way,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=188)** it does this operation, and it does it in a constructor for a new rational object. And then it returns that rational object. And when we use it down here in main, these are the operations down here. We'll get to all of this in just a moment. You notice that it has A plus B, and that's in parentheses. And that means that by using the parentheses, we can now use the dereference operator to actually use a method on the temporary object. And so this is simply an anonymous temporary object that gets returned by the operator, and then we call str on it, and it will display the result. So if I go ahead and run this, let's take a look at these really quick. We've got A is simply seven. So it's seven over one. We've got B is 25 over 15. And that gets reduced down to one and two-thirds. C is copy constructed from B, so it's the same value. D is from the default constructor. So it's zero over one. And then we use the assignment operator, and we assign the value of C to D. And so now D is again, one and two-thirds, E is a reference. so it's also one and two-thirds, and then D is an assignment to itself because it's assigning from the reference. And if we look at the assignment operator up here, where is it? There it is.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=281)** You see it checks this. And we saw this in a previous lesson. It's just checking to see if it's the same object. And if it is, then it doesn't bother with any of the assignment, and it just returns itself. Now we get down to the operator overloads. We have plus, minus, times, and divide. And if we look at the results here A plus B is eight and two-thirds. A minus B is five and a third. A times B is 11 and two-thirds. And A divided by B is four and a fifth. And so these are the results that we expect. Operator overloading is a fundamental part of C++. It's as easy to do as defining a class method. We'll look at non-member functions for operator overloading in the next lesson.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is called (1), means that (1), is an  (1)
> **Cross-References:** in the next (2)
> **Analogies:** for example (2)
> **Code Identifiers:** raw_str (1)
> **Env Vars:** algol (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - operator (1)

#### [Non-member operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed operator overloads with member functions. In this lesson, we'll look at how and why you may sometimes use non-member functions for operator overloads. This is rational.cpp from Chapter 07 of the Exercise Files. In the previous movie on overloading operators, we overloaded the four basic arithmetic operators with member functions. There's an important circumstance where this just doesn't work. So let's take a look at it. If I come down here to the end, and we'll take this + operator, and we'll move it down here, we'll copy it down here, and we'll say b + 14. Now we're adding a Rational object plus a literal integer. And when I build and run this, you'll notice that b + 14 = 15 2/3 because b is 1 2/3, b + 14 is 15 2/3. So that's exactly what we expect. On the other hand, if we turn this around and we say 14 + b, we'll notice that it doesn't even compile. Invalid operands to binary expression, int and Rational. So let's take a look at why this is. If we look at b + 14, what happens is is that the compiler sees the b as a Rational object, and the + operator, it looks for the + operator in the Rational class, and it finds one, and it takes this 14 integer,
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=97)** and it wants to use that as this right hand side object which is a Rational object and says, "Okay, well, let me see if there's a constructor for this." And there is a Rational constructor that'll take an integer and that's this construction right here. It'll take this numerator. It'll take this as a one parameter constructor for the Rational object. And it'll put a 14 in there, and it'll call it 14 + 1, and it'll create a Rational object. And then it uses that Rational object as right hand side in our formula and returns a Rational object. So this is kind of how that works with the b + 14. Now, if we take 14 + b, we do exactly the same thing, except we try to do it with an integer instead of a Rational object. And the + operator for an integer looks for an integer. And it's got this b, which is a Rational object, and it doesn't know what to do with that. And so it says Invalid operands. So how do we fix this? How do we make it so that both of these work? Well, the way to do that is to take this operator overload and move it outside of the class. So, first of all, I'm going to come up here in our interface, and I'm going to delete it from here 'cause it's no longer going to be part of the class. And I'm going to come down here and I'm going to take this, all of this, and I'm going to cut and paste it and put it the end. I mean, it'll work no matter where I leave it, but this is the logical place to put it.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=191)** It no longer is in the scope of the class. And now it takes two parameters. So it takes a left hand side and a right hand side. So this will be the left hand side. And it's no longer const qualified because it's not part of the class anymore. And now we want to take this and make it work because we no longer have this n which is part of the class, and we're not part of the class anymore, nor do we have this d anymore because we're not part of the class. But remember, we have getters for these. They're called numerator and denominator. And so we come back down here, and this is now left hand side numerator. And we can take this and we can copy and paste it. No, I don't need any place else, but we do have left hand side denominator. So I can say lhs.denominator. And I'm just taking this same formula and making it work outside of the class. Let's go ahead and put this on the next line. And then these places where there's right hand side d, we make that denominator, and we have that here too, and this one will be numerator. So we have exactly the same formula, but now we're working with two Rational objects instead of one. And our left hand side can be promoted from an integer in the same way we did that with the right hand side before when it was part of the class definition. So all of this should work.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=285)** And I can build and run this. And oh, look at that. It worked the first time. I made no typos. So now we have b + 14 and 14 + b both giving us the same results. And they're both using this operator overload which is outside of the class definition. So this is called a non-member operator overload. And that's how that works. There are circumstances where you'll want to use non-member functions for your operator overloads, and C++ supports this well. As a rule of thumb, whenever you have a constructor that allows implicit conversions, you'll want to think about non-member overload functions. These functions still go in your implementation file.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the last (1), we discussed (1)
> **File Paths:** rational.cpp (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Non-member operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=5)** - [Educator] The challenge for this chapter is for you to implement non-member operators for the rational class from this chapter. This is zero seven challenge.CPP from chapter seven of the exercise files. This is the rational class from earlier in this chapter. And the first thing you'll notice about this file is that it doesn't compile. As we learn in this chapter, the expressions in these lines require non-member operators. Your task is to modify this class to use non-member functions for the arithmetic operators so that these four lines of code work properly. This challenge should take about 15 minutes to an hour. As always feel free to take your time and experiment. I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** challenge.cpp (1)
> **Env Vars:** cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Non-member operators](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=0)** - [Instructor] The challenge for this chapter was to implement non-member operators for the rational number class. Here's my solution. This is 07 Solution from Chapter 7 of the exercise files. And if we come down here, you'll notice that we no longer have the operator overloads as part of the class. We still have the assignment operator, but we no longer have the arithmetic operators. And down here in the implementation, you see that we have the operator overloads as non-member functions with both left-hand side and right-hand side rational parameters. And you notice that we're using the getters now. Left-hand side numerator, right-hand side denominator functions, and those are the member functions up here in the class that return the numerator and denominator values. And down here in Maine, we see that all of this compiles. I'll build and run and you can see it works as expected. This challenge gave you the opportunity to exercise your knowledge and expand your understanding of how classes and operators work.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Templates

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding templates](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=0)** - [Instructor] C++ templates are wonderfully simple and powerful. This is the C++ feature that supports [[Generic Programming]]. Generic programming refers to code that works independent of type. While C++ is a strongly typed language, there's still great benefit in being able to write functions and classes that are type agnostic, that is they operate on objects of various types. Because C++ supports defining your own types through classes and operator overloads, it's possible to do a great deal of generic programming in templates while leaving implementation details to the classes and operators. Template declarations look just like normal function or class declarations with one distinction. They're proceeded by the template keyword and a set of type identifiers. These type identifiers are used as placeholders by the template code to be replaced during compilation with actual types. When a function or class is used from a template, the compiler generates a specialization, specifically suited to the types specified in the caller. This specialization is generated at compile time and one specialization is created for each combination of data types for each template. Templates are used widely in the C++ Standard Library, which is why parts of the library are commonly called the Standard Template Library. The generic nature of templates makes them a perfect fit for use with container classes.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=94)** Template programming is not entirely without its downsides. There are some issues you'll need to be aware of. Because the compiler must generate specializations for every type context of a template, the amount of code to support that template can grow rapidly with use. Compilers tend to have a difficult time generating sensible error messages with templates, so debugging can be challenging. Because templates tend to live in header files, changes to code with templates can lead to recompilation of larger portions of your code than would otherwise be necessary. C++ templates are a very powerful feature that's also simple to implement and support. They have great advantages over other generic programming solutions including preprocessor macros. Templates are widely used to implement containers and other generic objects in the C++ Standard Template Library. This chapter will cover the fundamentals of using templates and functions and classes. For a more detailed discussion please see the companion course, C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generic Programming]] (4)
> **Exercise Files:** template (10)
> **Definitions:** refers to (1), is a  (1)
> **Env Vars:** stl (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Template functions](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=0)** - [Instructor] C++ supports both template functions and template classes. In this movie, we'll look at template functions. This is template-function.cpp from Chapter 08 of the Exercise Files. And here we have a simple template function that returns the maximum value of two parameters. You notice the template keyword, and in these angle brackets here, we have the template argument list. The keyword typename is commonly used here, but the [[Microsoft Word|word]] class works exactly the same and is often used instead. Just be aware, that at least in this context, either of these two [[Tokens]] means the same thing. I strongly recommend that you use typename. You may see class used in legacy code, but typename is less ambiguous. So this simple template function is both type agnostic and type safe. It's type agnostic because it'll work for any class or type that supports the greater than operator for comparisons. It's type safe because the compiler will generate a specialization of the function for each given type that uses this function. The capital T here is a placeholder for a type. And you notice it here, you notice it here, you notice it here, and you notice it here. And all of these places, the T will be replaced with the type from the call to the template function. So we call the template function like this down here. Here's the function call. The name of the function is maxof, and we pass it this template argument list
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=95)** in angle brackets, and here we're giving it an int. So that means that all the places in the template function, where you see that capital T, those will all be replaced with int. And then we give it our parameters, x and y, which are ints with the values 47 and 73 respectively. And we print out the result here in this line. So I'm going to go ahead and run this. And you see that it says, max is 73. So the greater of 73 and 47 is 73. And that's from this statement here. If a is greater than b, we return a, otherwise, we return b. And this is both type safe and independent of type. So how does that happen? When you call this function, like we do here with int as the type in the template argument list, the compiler generates a version of the function that operates on int and returns int. This internally generated version is called a specialization. You'll never see it, but you need to know that it's there. That's how templates work. On the other hand, we could do this. Now we're calling our template function with const char pointers or C-strings, instead of the ints. And when I build and run this, you notice it says the result is bar. You may also notice that bar doesn't seem like it should be greater than foo because B is before F in the alphabet, but you need to understand
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=187)** that what it's comparing is the pointers and not the strings itself. So the greater than operator, when it's operating on const char pointers, is actually comparing the pointers and not the strings. If we want to compare the strings, we can use the STL string type. And we come over here, we can include string. And then for each of these, instead of const char pointer, I can say std::string. And I can put the same thing here inside the template argument list. And now when I build and run, you see that it gives the max is foo, which is lexicographically greater. So we've seen that the compiler generates a specialization for each of these different types. It generated one for the int, it generated one for the constant character pointers, and it's generated one for the standard strings. Notice that I never touched the maxof function template for all of these different examples. And that is the beauty of templates. It's worth noting that we can call this without anything in here, without that at all. If I call it like this, just maxof x and y, the compiler will deduce the type in a process called template argument deduction. And if I build and run this, you notice that it works just fine. And in fact, I can do this with character strings, and it gives us that result, or I can do it with int,
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=286)** and build and run, and we get our 73. So in a nutshell, if the compiler can easily deduce the type of the argument, it'll call the appropriate specialization without the need to explicitly specify the type. This is very convenient, and it works in many common circumstances. Template functions are a form of [[Generic Programming]] that are easy to create, can be very useful. For many of the purposes, we used to use C macros. C++ template functions are more powerful, more flexible, and less prone to error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Tokens]] (1), [[Generic Programming]] (1)
> **Exercise Files:** template (19), exercise files (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **File Paths:** template-function.cpp (1)
> **Env Vars:** stl (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Template classes](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=0)** - [Instructor] Template classes are useful for a lot of purposes, and they're commonly used for operating on containers. This is template-class.cpp from Chapter 08 of the Exercise Files. This is a simple Last-In-First-Out LIFO stack. There's a more complete version in the standard template library, but I've created this simple version so we can see how it works in the context of our discussion of templates. The important thing to notice about this is that there is absolutely no code here that cares about the type of the items on the stack. So let's take a look at the class. The class starts here around line 23 or line 24. We have the template keyword, we have typename, and the type place holder, capital T. So the type of the elements on the stack is going to be this type T. We have a couple of static constant. Static constant in the context of a class means that there's only one copy of them no matter how many instances of that class you create. So these are just constants that say the default size and the max size for the stack. We have some private data members here, including a smart pointer, and we'll talk more about smart pointers in C++ Advanced Topics. But for now, just understand that a smart pointer is simply a managed pointer. So that when it goes out of context, it is destroyed. And a unique pointer simply allows only one copy of that pointer to exist at a time. And so, you know, it's just a safe pointer. It's just safer than a primitive pointer. Our interface here has a constructor
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=94)** which takes the size for the stack, and it's marked as explicit so that there can't be any implicit conversions. And again, these are just modern C++ best practices things. You don't always have to do them this way, but everything just sort of works a lot better and is a little bit safer when it's done this way. We have a destructor that releases the smart pointer. That's not actually even necessary. The smart pointer will destroy itself safely, but this is here for completeness and just to show that this is where that happens. We have a method for push and a method for pop, and notice the placeholders. This is the type of the element that is being operated on. We have boolean functions for checking if the stack is empty or if it's full, and to return the top element and the size. I just want to take a look at a couple of these functions here. Notice push and pop. And in both cases, there's nothing here that cares about the type. We have the type placeholders, and that's really all that's necessary. We can push an item onto the stack. We can pop an item off of the stack. If the stack is full, we throw an error, and this is an error exception. We'll talk more about exceptions in C++ Advanced Topics, but understand for now, this is a really simple implementation of exceptions. And for most purposes, you really don't need to know much more than this. We inherit the standard exception class. Of course, we have the exception header up here. And we have a place to store a message.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=190)** Our constructor takes the message, and then we have this what method that's required that gets overloaded, and we'll see how that works down below. We're going to go ahead and take a look at how we call all of this. Here's two stack declarations. One is of type int and one is of type std::string. So we have two stacks. One of 'em is a stack of ints and one is a stack of STL strings. Both of them are size 5, so they hold 5 elements, and that's in the constructor here. And it's inside this try and catch block, which is for the exceptions. And this is really beautiful. When we go ahead and run this, and all these messages about pushing and popping the elements, we'll look at that in a moment. So I push 5 elements onto the stack here in a for loop, 1, 2, 3, 4, 5, and then after the pushes, we look at the top and we ask if it's full. So the top before is -1, which means that it's empty. And after the pushes, it's 4, because it's a zero based index. And it says that it's full. And then we pop them, 5, 4, 3, 2, 1, in this loop here. While it's not empty, we pop them 5, 4, 3, 2, 1, simple like that. But here's the interesting thing. If I come in here and I try to add a 6th element in a stack of 5, I'll go ahead and run this, you see it says error: stack full. And that is from the push method, which is right here. It checks if it's full. And if it is,
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=282)** it uses the throw keyword to throw an exception, and this is the exception constructor with the string. And then down here in the catch, this is where we catch the errors. We say Stack error, and we call that what method. And it's really simple to use these exceptions. And there's not much else you need to know about them in order to make good use of them. Okay, we do exactly the same thing with the standard strings and we get exactly the same results. Let me take the 6th one out of here so this runs. And we'll build and run. And we can see that our integer stack and our string stack work exactly the same. And that's without the actual stack class code knowing or caring anything about the type of the elements on the stack. Template classes are especially useful for manipulating containers of items, where the logic of the manipulation is independent of the type. That's why C++ standard containers are written using templates. For more comprehensive discussion of templates, please see the companion course, C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), means that (2), is an  (1)
> **Exercise Files:** template (5), exercise files (1)
> **Env Vars:** stl (2), lifo (1)
> **File Paths:** template-class.cpp (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Template factorial](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=5)** - [Educator] For this challenge, you'll build on the chapter six challenge and build a template version of the non-recursive factorial function. Use your solution from chapter six as a basis and convert it to use a template. This was my solution for the chapter six challenge. You'll make a template function that will work with any numeric type. Expect this challenge to take about 10 to 15 minutes. Feel free to take longer if you want to experiment and learn.

> [!info]- Semantic Content
>
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Template factorial](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=5)** - The challenge for this chapter was to create a template function for the non-recursive factorial challenge from chapter six. Here's my solution. This is 08 solution from chapter eight of the exercise files. Notice that the code in the function block is exactly the same. Nothing here needed to change. All that needed to change was to put it in a template, create a template placeholder and use that for the type of the argument. Everything else remains the same here. So here we call it with an integer. We call it with a long long unsigned int. Call it with a long double. And when I build and run, you notice our results. Five factorial, 15 factorial. With the long double, we can even do 25 factorial, which has an exponent of 25 places. In this challenge, you've used your understanding of templates to create a templates-based solution for the non-recursive factorial function. I hope you can see how powerful and flexible templates can be for [[Generic Programming]] in C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generic Programming]] (1)
> **Exercise Files:** template (3), exercise files (1)
> **Speakers:** - the (1)
> **Non-Speech:** (bright music) (1)


### 9. Standard Template Library

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of the STL](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=0)** - [Instructor] The Standard Template Library is part of the C++ standard. So it's guaranteed to be a part of every C++ development system. Commonly called the STL, the Standard Template Library provides containers and supporting data types like vectors, lists, queues, and iterators. The STL provides a number of standard containers, iterators, and [[Algorithms]]. Some of these include vector, a fundamental random access container that can be used in many places a C array could be used, but with a lot more functionality. List, a double linked list optimized for fast inserts and deletes. Set, an ordered sequence container where elements are kept in a strict order based on their value. Map, an associative container where unique keys are used to access associated values. Stack, queue, and deque, which is double-ended queue, are last in first out, first in first out, and double-ended queues for pushing and popping data from a stack. String, a specialized container of characters, optimized for use as strings. Iostreams, for reading and writing data to and from files and IO devices. Cout is a common use of iostreams. It's used for console output. The STL is very large, much larger than could be covered in this course. For our purposes, I will cover the classes that are most commonly used
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=93)** for general purpose programming. For a more detailed discussion of the STL, please see the companion course, "C++ Templates and the STL". Understanding the C++ Standard Template Library is an essential part of understanding C++. The STL is part of the C++ standard, and it provides a great deal of basic functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** stl (6)
> **Exercise Files:** template (3)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Vectors](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=0)** - [Narrator] A vector is a sequence container that supports random access of its elements. You can think of it as an object oriented array with a bunch of cool extra features. Vectors are fast, random access, and extremely flexible. Let's take a look. This is vector dot.cpp from Chapter nine of the exercise files. The vector is a template class. It's defined in the vector header. And here, and you'll notice we're using standard vector, so we can use the vector symbol without the STD name space, so I can use it like this. So this declares a vector object, and this vector, of course, it's a template class so I give it a type. So this is a vector of int, so it's a container that contains objects of type int. And we'll name it vector vi1. And we'll initialize it with this initializer list with 10 integer values. So what I'm going to do here is I'm going to comment out a bunch of this stuff, and we can look at this in pieces. First, let's look at this piece where we define and initialize our vector, and then we print out its size, the front element, and the back element with the front and back methods, and a new line. And so when I build and run this, we see the size is 10, the front element is one, and the back element is 10, just as we initialized it here with the initializer list. The vector type also provides iterators, and these iterators work just like pointers
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=94)** like you would expect pointers to work with, say, a C array. And so we can grab the beginning and end iterators like this, and we can use them like in a for loop just as we would with a C array. So we have the begin iterator, we test it in the wild clause here to see when it hits the end iterator. And until then we increment it with the increment operator and we dereference it with the asterisk just as we would with a pointer. So when I build and run this, you'll notice that it says iterator, because we said iterator up here, and then it simply iterates through the vector. Now, instead of setting these variables, I can say vi1.begin here and vi1.end here, and we can get our iterators directly. And this is actually far more common to do it this way. I'm going to put this back for now and we'll look at the next part. We can index a vector using the square bracket operator or we can use the at method. The difference is the at method does range checking and these square brackets do not. And so you want to be very careful when you're using the square brackets. Either way, this gets the element number 5, which will have the value 6 when I build and run this and you see element 5 has the value 6. And both of these work the same. We can of course use a range based for loop just like we would with any container.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=186)** And again, this uses those iterators internally. I'll go ahead and build and run and we see our range based for loop there at the bottom and our 10 elements. We have an insert method to insert an element. We use an iterator for this. And so we're going to take the begin iterator and add 5 to it. And just like with a pointer, that addition operator operates on the iterator based on the size of the elements. And so this will get us the element number 5, which currently has a value of 6 but we're going to insert before it this value 42 and we'll notice that our size will increase and our element at 5 will change to 42, and I'll go ahead and I'll build and I'll run that. And you see that we insert. Our size is now 11 and element number 5 is now value 42. Likewise, I can erase that element, again, using the iterator +5 and I'll build and I'll run that. And now you see that our size is 10 again and our element 5 is 6 again. I can use the push back method, which is actually very common way to add things to the back of a vector. I'll push back the value 47 and we'll see our size increase and our value at the back will change to 47. So our size is now 11 and the value at the back is now 47. We can initialize a vector from a C array. And so here we have a C array, or C array with the size of 10,
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=281)** and we give it 10 elements in initializer list. And then we initialize a vector, we'll call this one vi2, And we give it two pointers, the beginning of the array and the end of the array. The array plus its size. Then we'll use a range for loop to print out the elements and you see it's this vector from C array and there's our 10 elements. Of course, we can use any type for our elements in our vector. And so here we have a vector of standard string elements and that's got these five values 1, 2, 3, 4, and 5 as strings. And we print it out with the loop there and we have the values 1, 2, 3, 4, and 5. This is really just sort of the tip of the iceberg with the vector. The vector's a fundamental container type that's powerful and easy to use. You can use it wherever you would otherwise use a C array but could benefit from some of the capabilities that the vector provides. While the vector is very common, The SDL provides a number of container types, so for more in depth training, see the companion course, C++ templates and the SDL.

> [!info]- Semantic Content
>
> **Analogies:** just like (3), think of it as (1)
> **Env Vars:** sdl (2), std (1)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (3)
> **File Paths:** dot.cpp (1)
> **Speakers:** - [narrator] (1)

#### [Strings](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=0)** - [Instructor] The STL String Class is a container specifically designed to operate with sequences of characters. It's designed with many features to operate on strings efficiently and intuitively. This is string.cpp from chapter nine of the exercise files. String is an STL container and it's in the header called string and it's in the standard name space and it's called string. The String Container Class operates on characters in much the same way as any sequence container operates on other types. String has functions that are specifically designed for operating on strings of characters. It works a lot like a vector but with additional string related functions. We're going to take this section by section here and I'm just going to comment out the sections ahead of where we want to focus. So when I build and run this we'll just see the parts that are uncommented. Here we see it says length is the same as size and size is the same of length demonstrating the size and length methods off the string. Here we have a string S1 and it's initialized with a C string that says, this is a string. And so the string constructor, the most common string constructor takes a C string and turns it into a string object. And so traditionally strings are thought of as having length and containers are thought of having size. And it's just worth noting that both of these do exactly the same thing. You can concatenate strings with the plus operator.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=95)** So if I take string two and say it equals string one, plus a colon, plus this other string that says, this is also a string, then we see out S2 and a new line. And when we build and run this we see that it says concatenated strings. This is a string colon, and this is also a string. We can compare strings using the equals operator, if S1 and S2 are equal, it'll say yes and otherwise it'll say no. And we build and run this. You see it says no. And then we copy a sign, S1 to S2, and then they are equal, it says, yes. We can use the other comparison operators, greater than, or less than so I'll build and run this. And you notice that these are lexical graphical comparisons. It's comparing the strings alphabetically, as opposed to the way that the C string works, where it compares the addresses of the strings. We can use an iterator with the string, which is how the range based four loop works and build and run this and you see that we're printing out each individual character from the string. We can insert and erase with an iterator using S1.begin here, plus five. So we get the fifth position and we'll insert a capital X and we go ahead and run this. And you see, we get our capital X just before the [[Microsoft Word|word]] is and we can erase it again with an iterator in the same way.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=194)** We can use positions to replace. And so starting at position five which we know is the word is and replace two characters with the string ain't. And so now it says this ain't a string instead of this is a string. Well, it's not necessarily great grammar but demonstrates the point. We can get a sub string starting at position five for five characters and we get ain't which we know is what's there. We can use find to find the first S in our string and it'll return a position. And we go ahead and we see the first S is at position three. And of course these start at zero. So zero, one, twp, three, it's the fourth position and it's that S in the word this. Or we can find from the right hand side with rfind and we'll find the position of the last S in the string. The C Plus Plus STL String Class is very powerful and flexible. And obviously it's a lot more than what I can present in a short movie like this. The String Class is implemented as a sequence container as a rich set of features, an intuitive interface and for more detail on STL Strings please see the companion course C Plus Plus templates and the STL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3)
> **Env Vars:** stl (5)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (4)
> **File Paths:** string.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Format](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=0)** - [Instructor] The format library is new to C++ 20. Until now, if you wanted to format text, you could use either the legacy printf functions or the STL I/O Stream library. Both have serious flaws but we've used them because they work. Beginning with C++ 20, the format function provides text formatting inspired by [[Python (Programming Language)|Python]] 3's formatter. This is format.cpp from chapter nine of the exercise files. The C++ 20 format library does not include a print function but it's relatively simple to implement. We come down here around line 30. We'll see our print function. You'll notice it's templated and the template argument has these three dots, followed by args. This is a parameter pack and we'll cover parameter packs in the companion course: C++ Templates and the STL. For now, you can simply copy and paste this. And this will work as a print function that works exactly like the format function, except instead of returning a string like format, this will actually print to the console using fputs. So this allows us to use print like this without having to use the cout function in conjunction with format. The formatter itself works the same with this print function or with format. The only difference is that format returns a string and print prints to the console.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=93)** C++ 23 is expected to include a print function that works just like this one. Notice that we can print any fundamental type. You can see we have an int, we have a C string, we have an STL string, we have a double. What I'm going to do here is I'm going to comment out a bunch of this. And we can deal with these a few at a time. If I go ahead and build and run this, see, we've got a little warning about unused variable. That's fine, we'll use it later. We get inta is 47 and that's our integer up here and you notice we just pass the integer to the formatter. And we have the placeholder here. And the formatter knows what to do with this integer. And that's because the template function has a specialization for an int. The template function also has a specialization for a C string and it has a specialization for STL strings, it has specializations for most of the common types. And we'll get to the specialization in a moment. I'll show you what one looks like. But for now, you can see we're printing all of these things just the way that we would expect to. You notice we can also include positional arguments inside the curly braces. This allows us to change the order. Here we have human and alien. But if we look at our output, in this one, it says hello vulcans we are earthlings. In this one it says hello earthlings we are vulcans and that's because we've used these positional arguments to change the position of the arguments. And this is great for [[Internationalization]] and other uses
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=185)** where you may want to change the order of things. Now let's take a look at our double. You notice we have constant dpi, which is double pi. And we say pi is and if I build and run this, you see it says pi is with a very long to many decimal places representation of pi. I can constrain that to five decimal places by using a colon. And then decimal point five to tell it just to print out pi to five places. And of course, I can also include the positional arguments. This is one and this is zero. So first, we'll print the inta, which is the second argument and where they're zero based, so it's number one. And then the first argument, which is number zero. And you notice down there, it says inta is 47 and pi is again, to five places. We can specify fill characters and alignments. You notice I'll go ahead and I'll print this and we have a fill character of asterisks and a left alignment in 10 places. And you notice down here, we print out left aligned and taking up 10 spaces, filled with asterisks. Or we can fill with zeros and write a line, and that's this next one. Notice, the right alignment is the right-facing angle bracket and the left align is the left-facing angle bracket. Or centering is a caret character or an up-facing angle.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=279)** And that centers here. Or we can center filled with an underscore as we do in the next one. We can print hex, octal or decimal. And you'll notice that the hex has a capital F but if I change this to a lowercase f, you notice that now... Or rather a lowercase x in the specification, you notice we have the lowercase f down here. And we have octal and decimal representations. Now, you'll notice here, I have a Frac class and way up here at the top, I'm sorry, I just scrolled all the way to the top in a big jump, but up here at the top, we have a template class and it's basically just a structure of a fraction and we use the template type for the numerator and denominator. And so down here, I've simply defined the fraction of 3/5 and I put the object here and it's printing it out. We'll go ahead and build and run. You notice it prints it out as a fraction, 3/5. And the reason it does that is because I've created this format specialization for this class. So I have a template type named T and I'm inheriting this structure from the standard formatter. And I'm creating the specialization called formatter with the Frac of type T in its specialization in its template parameter. And down here, if you want to use a specialization like this, all you've got to do is copy and paste this. And down here, in the actual format call,
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=375)** I give it this type and I'm giving it a reference and I'll calling it F. And then out here I say f.d and f.n. This function's called format_to and just like format, I'm giving it the specification, the format string to tell it to print these as two different values separated by a slash. And then down here at the end, I simply call it like this and it prints out the fraction just like that. So in a nutshell, that's how you create a format specialization. So the C++ formatter solves a long-standing problem in C++ by providing a type safe text-formatting library that's both efficient and convenient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Internationalization]] (1)
> **Exercise Files:** template (7), exercise files (1)
> **Env Vars:** stl (4)
> **Analogies:** just like (3)
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **File Paths:** format.cpp (1)
> **CLI Commands:** python (1)

#### [I/O Stream](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=0)** - [Instructor] The iostream library is fairly rich, but most of what's there is backend support, and there's really just a few classes that you'll normally use. This is iostream-formatting.cpp from Chapter 9 of the exercise files. Iostreams come in two basic flavors: input streams and output streams. Let's take a look at how this works, we're going to look at cout and cin, and you'll notice that I haven't really aliased any of this. We're using so many different things in the iostream library, it just seemed better to just go ahead and spell them all out. So I'm going to comment out everything from about here, so that we can look at these bits in some sort of order. So here we have cout "Hello, World!" with a new line, and we've seen this before. And we declare a string called istr, I S T R, and we cout a prompt with no new line, so it'll just be on one line there and then we cin from istr and you notice my comment says one [[Microsoft Word|word]] at a time. That's the way that cin works by default, is one word at a time, and then we'll display the string that we get. So I'm going to go ahead and run this. There's our "Hello, World!" I'm going to put my [[Cursor]] down here and I'm going to type a few words, this is a string. You notice this is four words long, but when I press my enter key, we get this response, istr has one word in it, so cin by default, just gets one word at a time. Now, if we want to get more than that at a time,
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=96)** go ahead and comment this out and uncomment this, and we'll do the same thing, but we'll use getline instead and you notice that getline is a method off of cstring and it takes a buffer which is a character array. You can see it defined up here, buf 128 characters, and sizeof buf, like the size of the buf is the second, so it knows not to overflow the buffer. And then we'll say, cout and the input and we'll display the buffer and a new line. So I'll go ahead and I'll run this, and I'll do the same thing. This is a string and I'll press my enter key, and you notice that we get now the whole buffer. So that's the difference between using cin.getline and just cin with its right facing double angle bracket thing which is literally a shift right operator but it's being repurposed for this purpose. All right, let's go ahead and comment this out and we'll look at how formatting works with the iostream library and the iostream library does a very unusual thing with formatting, and you'll see this a lot because the new format library is brand new. And so there's already a lot of code out in the wild that does formatting using iostream manipulators which is how this works. So we'll uncomment this much of it, and we have three integers and we're going to display them in different ways. So go ahead and I'll build and I'll run this and you see that we have default, right? And so we're just displaying the three integers
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=190)** with spaces in between them and you see all of these left angle brackets and that's just how you chain things together with cout. And we're not going to see a lot of that in the future with the format library and especially after C++23, when we have the print function. And so we can display them in hex using this I/O manipulator and this just gets chained in with the left angle bracket thingies. This just gets chained together with everything else and it changes the way that the things after it will be displayed. And so, here this tells us that the integers are now going to be displayed as hex and then the integer objects that come after it will be displayed in hex. And so here we have hexadecimal 2a 2f 15b3 and that's these numbers in hexadecimal. We can say hex with showbase and so we have standard showbase and that will display them with the base. So we have 0x2a 0x7f and that 0x is the base. We have octal with showbase and that's these down here with the 0 in front of them that tells a programmer who's been around for a while that that's an octal, you don't have a single leading 0 like that for a decimal number. And then in order to reset it, you notice that our showbase carried over from one use of cout to the next, and we have to actually reset it with no showbase and then reset this with decimal to get it to show the decimal again, like our default.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=284)** So you can see how these I/O manipulators are cumbersome, they're a little bit awkward if you forget to reset some things, you can end up with the results that you don't want, so you can see how that can be cumbersome. All right, I'm going to go ahead and I'm going to comment this out and I'm going to uncomment these down here and we'll look at some more numeric options here. Now we have three doubles, we have pie, we have this, and we've got that. And default fixed scientific with our precision set. I'm not going to go into the details in all of this but you can see how this works. I'm going to go ahead and I'm going to build and run and you can see there's our default, there's our fixed, scientific notation, setting the precision to 3, and on like that. Setting our precision to 7, go ahead and comment this out and we'll look at some string formatting options. So we have three strings, a string, a longer string, and an even longer string. We print them out and here's where we print them out, we flush them right with set width and right I/O manipulators and you notice I have this standard endl at the end and you'll see this in some legacy code, people don't use it so much anymore. It's almost exactly the same as just putting in a new line like that. The difference is, is that endl will also flush some buffers and that's not so necessary with modern I/O libraries, and it does take up some clock cycles
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=379)** and so people just don't use endl very much anymore, they'll just use the new lines, but I wanted to show you what that looks like. And here we can fill with spaces and like that, so we can see how all of this works. On the subject of iostreams, iostreams are also often used with files. So here I have iostream-file.cpp, you notice I've got a file name and if you want to run this, obviously you're going to want to change this path to a path that works on your system. This is the path that I use for the home directory on my system, I've got an integer for line number, you notice it's static, all three of these are static, these two are static and constant, and I'm going to write a file. So I say, cout write the file, ofstream is an output file stream object for writing to a file and so I call it ofile and I give it the filename. And then I use ofile just as I would cout to write to the file and then ofile close. And then I read from the file using infile getline, so this is an ifstream and it works just like cin and here's infile is what I'm calling it, and I check while it's good, I read from the file and I print it out and then I close it, and then I delete the file with remove which is a old as time itself C function and it works just fine for this purpose. So go ahead and I'll run this and you can see we write the file, we read the file, there's our text string, and we delete the file.
>
> **[7:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=472)** It's really, really simple and you'll see this quite often. The iostream library is useful for basic, generalized I/O, including interfacing with the console, writing to and reading from files, for more control you may use the C standard library functions for reading and writing files, although I would not mix them. And for more details on iostreams, please see the companion course C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **Definitions:** is a  (5), is an  (2)
> **File Paths:** iostream-formatting.cpp (1), iostream-file.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Transform a file (STL)](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=0)** - [Instructor] For this challenge, you will read a text file, decode it, store its data in a structure, and print the results using the standard template library. The text file represents items in an inventory. Each line looks like this. Notice the tab characters. Each line in the file has two tabs separating its three fields. The first field is the SKU number. That's S-K-U for stock keeping unit, here just one, two, three, and four. The second field is the name of the item. And the third field is the description. The file is named items.text and you'll find it in chapter nine of the exercise files. The output of your challenge will look something like this. This challenge will use a lot of your knowledge from this course so far, including loops, operators, and the STL with file IO. Expect this one to take a little longer than some of the others, perhaps an hour or longer. Feel free to take your time and experiment.

> [!info]- Semantic Content
>
> **Env Vars:** sku (1), stl (1)
> **Exercise Files:** template (1), exercise files (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Transform a file (STL)](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=0)** - [Instructor] Your challenge for this chapter was to read a text file, decode it, store its data in a structure, and print the results all using the STL. Here's my solution. This is 09-solution.cpp from chapter nine of the exercise files. And you notice I'll be using the string class and the vector class. I have here the path to the items.text file, your path will be different. So you'll want pay attention to that. I have a constant for the size of a line buffer. I have a constant for a tab character. I have a class for my structure. Here's the three data members, the sku, the name, and the description. And I have constructors, a destructor, a copy operator, and some getters, and various support methods. This is my copy constructor. This is my copy operator and I have a little function for splitting a string on tabs. You notice while true, I find a tab, I push back a substring onto a vector, and then I return the vector. So it's pretty straightforward. Here in main, I have my buffer for reading the lines from the file. I have my ifstream. While good, I get line. I split the string.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=93)** I construct the object and I print it out. And then of course I close the file. So I go ahead and I run this and you see the result right there. So this is a good challenge that exercised a lot of your knowledge from this course. I hope you took some time to experiment and learn from the experience.

> [!info]- Semantic Content
>
> **File Paths:** 09-solution.cpp (1)
> **CLI Commands:** find (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Thank you](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=0)** - In this course, my goal was to provide you with a good working knowledge of C++. I've covered the basic syntax of the language, including pointers, references, conditionals, and loops. We've covered primitive data types, along with aggregate types like arrays and structures. I've shown you how to create and use functions, including function signatures. and overloaded function names. How to create your own classes and objects, including constructors, destructors, and operator overloads. I've shown you how to use templates in the powerful standard template library, one of the most comprehensive and flexible container libraries available in any language. Along the way, I hope you've taken some time to experiment with the challenges and exercises and perhaps create some of your own classes for use in your projects. C++ is a tremendously powerful language, and while I've covered the essentials in this course, it's no substitute for experience. I encourage you to write a lot of code and continue learning from your own experiences. For more details on templates, the SDL classes and objects, I invite you to continue your journey with the companion courses, C++ Templates and the STL and C++ Advanced Topics. I hope you've enjoyed this course as much as I've enjoyed creating it for you. Please have fun and create something wonderful with your own C++ code.

> [!info]- Semantic Content
>
> **Env Vars:** sdl (1), stl (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)


## Resources

- Exercise files available

## Skills Covered

- C++

## Path Context

### In [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]
**1 of 3** | [[C++ Design Patterns- Structural]] →

## Part of

- [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]

## Appears In

- [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]

## Related Courses

_Courses sharing skills:_

- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Learning C++]] — C++
- [[Introducing Functional Programming in C++]] — C++
- [[C++ Design Patterns- Structural]] — C++

---

[↑ Back to top](#)