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
created: 2026-04-29
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
  - Learn C++
  - Using the exercise files
  - What is C++?
- [**1. Toolchain and Installation**](#1-toolchain-and-installation) (3 videos)
  - The C++ toolchain
  - Using an IDE with the exercise files
  - Check for std::format support
- [**2. The Basics**](#2-the-basics) (6 videos)
  - Basic syntax
  - Anatomy of a C++ program
  - Statements and expressions
  - Identifiers
  - Defining variables
  - Pointers and references
- [**3. Flow Control**](#3-flow-control) (4 videos)
  - Conditionals
  - Loops
  - Iterating with for
  - Functions
- [**4. Data Types**](#4-data-types) (11 videos)
  - Overview of data types
  - Integer types
  - Floating point types
  - The auto type
  - Qualifiers
  - Type aliases
  - Primitive arrays
  - C-strings
  - Structures
  - Challenge: Library card
  - Solution: Library card
- [**5. Operators**](#5-operators) (6 videos)
  - Common operators
  - Compound assignment operators
  - Increment and decrement operators
  - Operator precedence
  - Challenge: Prime numbers
  - Solution: Prime numbers
- [**6. Functions**](#6-functions) (6 videos)
  - Overview of C++ functions
  - Passing values to a function
  - Returning values from a function
  - Using recursion
  - Challenge: Non-recursive factorial
  - Solution: Non-recursive factorial
- [**7. Classes and Objects**](#7-classes-and-objects) (8 videos)
  - Overview of classes and objects
  - Data members
  - Function members
  - Constructors and destructors
  - Operator overloads
  - Non-member operators
  - Challenge: Non-member operators
  - Solution: Non-member operators
- [**8. Templates**](#8-templates) (5 videos)
  - Understanding templates
  - Template functions
  - Template classes
  - Challenge: Template factorial
  - Solution: Template factorial
- [**9. Standard Template Library**](#9-standard-template-library) (7 videos)
  - Overview of the STL
  - Vectors
  - Strings
  - Format
  - I/O Stream
  - Challenge: Transform a file (STL)
  - Solution: Transform a file (STL)
- [**Conclusion**](#conclusion) (1 videos)
  - Thank you

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Learn C++
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman, and welcome to C++ Essential Training.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=4)** The goal of this course is to provide you with a working knowledge of C++.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=9)** We'll start with the basics, including syntax, operators, loops, and functions.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=15)** I'll explain how to use data structures and create your own functions.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=20)** I'll show you how to create classes and objects.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=22)** And finally I'll cover the fundamentals of templates and the C++ standard template library, which provides a wealth of containers and algorithms.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=32)** For in-depth coverage of templates in the standard template library, please see the companion course C++ Templates and the STL.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=39)** And for more detail on functions, classes and objects, please see the companion course, C++: Advanced Topics.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=47)** C++ is not just a powerful programming language, it's also the basis of many other popular languages, so this knowledge will serve you well even when you're not using C++.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/learn-c-plus-plus?u=76281980&t=59)** So let's get started with C++ Essential Training.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2)
> **Code Keywords:** let (1)
> **Env Vars:** stl (1)
> **Speakers:** - [bill] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=4)** Copy the exercise files to a location where you can find it on your system.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=8)** I've copied it to the desktop on this system.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=11)** Wherever you put it, just make sure you can find it.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=14)** The exercise files are organized into chapters, which correspond with the chapters in the lesson videos.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=21)** Each of the chapters contain C++ files for following along with the exercises in that chapter.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=27)** These files are C++ console applications.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=31)** See the instructions in the next chapter for compiling and running these programs with popular Windows and Mac development environments.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=38)** These files are compatible with any modern C++ development environment, including Xcode, Microsoft Visual Studio, GCC, Clang, or any modern compiler or integrated environment that supports the C++ 20 standard.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=54)** The exercise files are here to make your learning experience easier and more powerful.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-the-exercise-files?u=76281980&t=59)** Take your time, experiment a lot, and happy learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Exercise Files:** exercise files (4)
> **Env Vars:** gcc (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### What is C++?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=0)** - [Instructor] C++ is a powerful, flexible, general purpose programming language that supports a number of different coding paradigms, including object-oriented, procedural, functional, and generic programming.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=13)** What is now called C++ was originally C with classes, developed in the late 1970s by Danish computer scientist, Bjarne Stroustrup.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=24)** C++ began its life as a set of enhancements to allow object-oriented programming in C.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=30)** C++ is an extension of the C language.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=33)** The standard incorporates the entire C language, adding many powerful features while retaining as much of C's syntax, efficiency, and utility as possible.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=44)** Over 40 years later, C++ remains a best practices choice for many types of projects, including large-scale systems and applications.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=54)** C++ is used to write code at all levels, including firmware, operating systems, and large-scale applications.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=62)** Today, vast numbers of medium to large-scale applications are written in C++.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=68)** The list is huge and it includes every version of Windows since 1.0, the parts of Unix that aren't written in plain C, major parts of macOS are written in C++, other parts are in Objective-C, which is also based on C.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=84)** Major business applications like Microsoft Office and QuickBooks are written in C++.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=89)** Adobe Photoshop, Illustrator, InDesign, Firefox, Google Chrome, and most web browsers are written in C++.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=98)** Major websites like Amazon, Facebook, and Google are either written in or have significant backend resources written in C++.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=106)** In fact, most major programming languages, including Java, PHP, Python, and Perl are written in C or C++.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=117)** C++ is made up of a number of different components, parts of which require understanding distinct sets of grammar.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=124)** You can think of it as five connected languages.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=128)** The C language itself is the basis of C++ and is entirely incorporated in its definition.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=135)** As part of the C language definition, the C preprocessor is also incorporated in C++.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=141)** C++ classes and objects are used for object-oriented programming patterns.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=147)** C++ templates are used for generic programming.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=151)** And the C++ Standard Template Library, the STL, provides a tremendous amount of common functionality.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=158)** The STL, along with the C and C++ standard libraries are part of the C++ standard.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=166)** The first standard for C++ was ratified by the ISO in 1998.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=171)** This is commonly referred to as C++98.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=175)** C++03 was essentially a bug fix release, so it's rarely referred to on its own.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=181)** Most compilers that support C++03 simply refer to it as C++98.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=187)** Ratified in August, 2011, C++11 was the first major extension to the C++ standard.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=195)** It provided a number of new features, including the range-based for loop, type inference, lambda functions, an unambiguous null pointer constant, and many smaller new features.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=206)** C++14 was another small maintenance release and did not include any major changes to the language.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=213)** Ratified in December, 2017, C++17 includes mostly refinements to existing features.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=221)** The C++20 standard includes a number of new features, including a modern text formatting library, modules, a ranges library, concepts, and coroutines.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=232)** Some of these features are not yet implemented in the major compilers, so discussion of these newer features will be limited.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=239)** Most of the features covered in this course apply to C++11 and beyond.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=244)** We'll cover a few more modern features, in particular we'll use the C++20 format library.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=251)** The current versions of all the major compilers in use today fully support C++17 and partially support C++20.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=260)** C++ is a big subject that includes many topics.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=264)** The scope of this course is limited to the essentials so you may work effectively in C++.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=270)** Here are some of the topics covered in this course.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=273)** The basic syntax of C++ is mostly inherited from the C language.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=277)** We'll cover this in chapters two through five.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=281)** This includes thorough discussion of data types, standard operators, and functions.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=286)** With a few exceptions, most of this is inherited from C.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=290)** Classes and objects form the basis of object-oriented programming in C++.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=295)** This course will cover the basics of classes and objects.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=298)** The companion course, C++ Advanced Topics, goes into much more detail.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=303)** C++ provides a powerful generic programming framework called templates.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=308)** A fundamental understanding of templates is important, and we will cover the basics here.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=313)** The companion course C++ Templates And The STL covers further details.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=319)** The Standard Template Library is a comprehensive library of containers and algorithms that makes extensive use of C++ templates.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=327)** Again, we'll cover the basics here, and the companion course C++ Templates And The STL goes into greater detail.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=334)** Because of the independent nature of the different parts of C++, this course uses a language emersion approach.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=342)** You will learn by using the language.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=344)** You're encouraged to experiment often and make mistakes and learn from those mistakes.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=350)** You'll often use features which have not yet been fully explained.
>
> **[5:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=354)** This is necessary, as parts of the language and libraries are independent.
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=358)** Try not to worry about it.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=360)** These features will be explained in time.
>
> **[6:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=363)** You do not need to have any previous programming experience to learn C++.
>
> **[6:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=367)** In fact, back when I was first learning in the early seventies, my first language was C.
>
> **[6:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=373)** Take your time, pause and rewind the lessons if you need to.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=377)** There's no ideal pace to learn.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=379)** Each of us are different.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=380)** The best pace to learn is the pace at which you learn best.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=385)** The examples in this course are all console applications.
>
> **[6:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=388)** This allows us to focus on the C++ language itself without distraction from the unique requirements of the various graphical interfaces of different operating systems.
>
> **[6:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=398)** Every operating system, including both mac and Windows, are capable of running standard C++ console applications.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=406)** The C++ programming language is one of the most important languages in computing today.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=412)** It is the go-to language for projects large and small and it forms the basis of other popular languages, like Java, C#, Python, PHP, and many others.
>
> **[7:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/what-is-c-plus-plus?u=76281980&t=423)** There's a lot to cover here, so take your time, experiment, make mistakes, and enjoy the journey.

> [!info]- Semantic Content
>
> **Env Vars:** stl (4), php (2), iso (1)
> **CLI Commands:** php (2), python (2), make (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** require (1), lambda (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** macos (1)
> **Versions:** 1.0 (1)
> **Tools:** firefox (1)


### 1. Toolchain and Installation

> [↑ Back to Table of Contents](#table-of-contents)

#### The C++ toolchain
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=0)** - [Instructor] C++ is a compiled language.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=3)** This means that your development cycle will include a distinct compilation step.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=8)** If you're already familiar with a scripting language, like JavaScript, Python, Perl, or PHP, this may be a new experience for you.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=16)** Languages like JavaScript, Python, Perl, and PHP are effectively interpreted languages.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=22)** This means that your entire tool chain consists of an editor and the language interpreter.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=27)** Your development cycle is simple.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=29)** You edit the source code and you run it.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=31)** Then, you make a change or continue developing.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=34)** You repeat the cycle, edit, run, edit, run.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=37)** C++ is a compiled language.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=39)** This means that before you can run the code, it must be converted from source code into something your operating system can run.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=47)** For most of us, this happens in an integrated development environment, an IDE, like Xcode or Visual Studio, but it's still important to understand what all the steps are.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=59)** The first step is the preprocessor.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=61)** The preprocessor is responsible for expanding macros, providing conditional compilation, and combining source files with included header files into a single file for the compiler.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=73)** The output from the preprocessor is usually a larger file of source code called a translation unit.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=79)** The compiler takes the source code from each translation unit and compiles it into object code.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=85)** This object code includes a symbol table that allows it to link with code in other object files, including libraries.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=93)** The object file from the compiler is not yet executable by the operating system.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=98)** A linker takes one or more object files, resolves all of their interdependencies, and combines them into something the operating system can run.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=107)** This allows you to use external libraries, even when you don't have the source code for those libraries.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=113)** The output from the linker is an executable that can run in your operating system.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=118)** Now you can run your code and continue the development cycle as necessary.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=122)** In most cases, especially when you're using an IDE, like Xcode or Visual Studio, all of these steps, preprocessor, compiler, and linker, are automated by one command.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=134)** This combined set of actions is often collectively referred to as compiling.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=139)** And even when considered as a unit, each of these functions is performed as a separate step, and each step is a vital part of the process.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=147)** This may seem like a lot of unnecessary detail, but it's okay if you don't commit at all to memory.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-c-plus-plus-toolchain?u=76281980&t=153)** As we get into the details of C++, you'll get a better understanding of how this knowledge impacts your coding.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (3), is an  (1)
> **CLI Commands:** python (2), php (2), make (1)
> **Exercise Files:** source code (5)
> **Env Vars:** php (2), ide (2)
> **Code Keywords:** continue (2)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)

#### Using an IDE with the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=0)** - [Instructor] In order to follow along with the exercises in this course, you'll need a code editor and a modern C++ compiler.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=7)** Any compiler that supports C++ 20 should work.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=12)** An IDE like Xcode or Visual Studio could be an excellent environment for using the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=18)** For demonstration purposes, I mostly use Xcode on a Mac because it has a clear, uncluttered display and it's easy to compile and run from right there in Xcode.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=29)** I also demonstrate a few things in Visual Studio on Windows.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=32)** Keep in mind that any editor and compiler that supports C++ 20 will do fine.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=39)** You do not need to use Xcode or Visual Studio.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=43)** Here on this Mac, let's set up Xcode and I'll show you how I set up Xcode for the exercise files here.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=50)** So this is Xcode.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=51)** When you launch it, it's just nothing.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=54)** Come up here to the File menu and under File, New, I create a workspace.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=61)** And I call my workspace CppEssT for C++ Essential Training.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=69)** And I'm going to create a folder down here called Xcode and I'm going to put it in there.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=75)** It's good to put it some place where you can find it and where you're going to remember where it is.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=80)** So I create a folder called Xcode off of my home directory and I put it there.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=85)** Okay, now we have a workspace.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=87)** That's all there is to it.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=89)** Want to Option while I press this green button so it makes it full screen but leaves me my menu.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=96)** And then I'm going to come in here and I'm going to add a new project.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=102)** So inside of our workspace, we need a project.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=105)** And for my project, under macOS, it's a command line tool.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=109)** And I'm just going to name it Working 'cause that's what I name these things.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=114)** You can name it whatever you like.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=115)** The team doesn't matter.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=116)** If you don't have that, that's just because I'm registered as a developer with Apple.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=120)** If you're not and that's blank, that's fine.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=123)** Organization identifier, same thing.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=125)** Doesn't really matter.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=126)** Language, C++, you definitely want C++ there.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=130)** Press next.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=131)** And then make sure that you add it to your workspace.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=135)** You don't need a Git repository.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=137)** It's probably overkill if you do that.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=140)** And you notice that it's already selected to put it in my Xcode folder, which is exactly where I want it.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=145)** So I press Create.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=147)** Now I have my project inside of my workspace.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=151)** But I also want to put one other thing in my workspace here.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=153)** I want to put my exercise files in my workspace.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=156)** So here's my exercise files in a Finder window, and I just grab that and drag it into my workspace but you notice that it tries to drag it in inside of my project and I don't want that.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=168)** I want it outside my project.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=169)** So I have to put it above.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=171)** And then we've got the little bouncing thing there because we have this dialog box, we don't want to copy items, we just want to create folder references.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=179)** So leave that one checked and leave that one unchecked.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=182)** Press Finish.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=183)** There's our exercise files.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=184)** I actually do want my project above my exercise files so I just drag it like that.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=190)** Now, in my project, I want to come over here to my Build Settings.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=195)** And I want to say language dialect.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=199)** And just type enough of it there.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=201)** And under C++ Apple Clang, C++ Language Dialect, I want to make sure that I select C++ 20 or GNU 20.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=210)** Either one will work for this course.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=212)** I'm just going to select C++ 20 here.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=214)** And now open my exercise files, and I always rename this as Working.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=221)** Again, you don't have to do that.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=222)** That's just me.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=223)** And what you can do is you can delete that and then copy files from the exercise files.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=228)** I like to keep these in case I want to go back to them.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=231)** So I'm just going to take hello.cpp, select it all with Command + A, Command + C to copy it.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=238)** And then come over here to working.cpp, select it, Command + A to select all of it, Command + V to paste.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=246)** And now we have our hello.cpp and it's pasted into our working.cpp but this is hello.cpp from chapter two of the exercise files.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=255)** And I'm going to press Command + R to compile and run, and this is why I use Xcode for my demonstration.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=262)** It's so easy to do this.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=265)** And there's our result.
>
> **[4:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=266)** It says Hello, World!
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=268)** And I can close this left pane by pressing on this button right here 'cause we're not going to use that left pane.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=274)** That's the debugger.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=276)** And you may use it occasionally in the future.
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=278)** But there we have it.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=280)** We now have a working environment for running and experimenting and playing with our exercise files for this course in Xcode.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=289)** Now let's see how to do this in Visual Studio on Windows.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=293)** All right, here we are in Visual Studio on Windows.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=295)** And I'm going to create a new project.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=299)** And you get all these choices up here, right?
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=302)** And really, most of them are just going to confuse you and not work the way you want.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=306)** What you want is Empty Project.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=308)** Start from scratch with C++.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=311)** Provides no starting files.
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=312)** That's the one you want.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=313)** So I'm going to double click on that.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=315)** I'm going to name it CppEssT, like that.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=320)** Location, I always put it in my home directory.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=322)** You can put it wherever you like.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=323)** Place solution and project in the same directory.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=326)** Create. Boom.
>
> **[5:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=328)** Now you have your project in Visual Studio.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=332)** Now, I want to configure my compiler but it won't let me do that until I import at least one C++ file.
>
> **[5:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=340)** So I have to select Source Files.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=342)** And then you can either press Shift + Alt + A or you can right click on this and under Add, see Shift + Alt + A is existing item, right?
>
> **[5:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=352)** And I'm going to come over here to my Exercise Files, which are on my Desktop.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=356)** Open chapter two, and double click on hello.cpp.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=360)** And it brings it right in there.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=362)** And so every time I want to work on a different source file, I delete this one.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=368)** And I press Shift + Alt + A.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=371)** And I select whichever file I want and it'll drop it in there but I'm going to delete that for now.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=377)** Just press the Delete key to delete it.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=379)** So now I can double click on this hello.cpp.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=383)** Now that we have this open, we want to configure our compiler 'cause remember, we need to select C++ 20 for our compiler.
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=390)** So you don't select the solution but the thing right below the solution, which is the name of your project.
>
> **[6:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=395)** They call it a solution.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=397)** And then right click and all the way down to Properties.
>
> **[6:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=400)** And then inside of Properties, you might want to open up the C-C++ and select Language.
>
> **[6:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=407)** And then over here where it says C++ Language Standard, you select that, from the dropdown box, you select the very latest one.
>
> **[6:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=415)** Again, you can use either C++ 20 or the very latest one.
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=419)** Either one works just fine.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=421)** I just selected one.
>
> **[7:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=423)** And you press OK.
>
> **[7:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=424)** Now we have C++ 20 configured for our project.
>
> **[7:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=429)** Up in the Debug menu, you say Start Without Debugging, which is Control + F5.
>
> **[7:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=435)** And you press that or Control + F5 and you get a little window where your source code runs and you press any key to close it.
>
> **[7:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=443)** And so that ran our little hello.cpp.
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=447)** Of course, both of these are excellent IDEs and have many configurable options.
>
> **[7:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-an-ide-with-the-exercise-files?u=76281980&t=452)** This should give you a good working environment to follow along with the exercises in this course.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (11), source code (1)
> **Code Keywords:** delete (5), let (3), new, (1), this. (1)
> **File Paths:** hello.cpp (6), working.cpp (2)
> **Tools:** visual studio (6), command line (1)
> **UI Navigation:** click on (4), select the (2), dropdown (1)
> **Prerequisites:** set up (2), configure (2), you'll need (1)
> **CLI Commands:** make (2), find (1), git (1)
> **Env Vars:** ide (1), gnu (1)

#### Check for std::format support
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=0)** - [Instructor] This course uses the standard format library for displaying results in the exercise files.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=6)** The format library is new for C++ 20, and as I'm recording this in June 2022, not all systems are yet supported.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=14)** Microsoft Visual C++ supports it.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=17)** Other compilers like this Xcode and Clang on a Mac do not.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=22)** You can find out if your compiler supports it by loading this working.cpp from chapter two of the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=29)** And if it can't find the include file or it can't find the symbol here, then your system probably does not yet support format and it probably will very soon with an upcoming update.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=41)** In the meantime, if you want to use the format library, you can use the reference implementation, which is what I do throughout this course on this installation of Xcode on this Mac with Clang.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=54)** The reference implementation can be found at [fmt.dev](https://fmt.dev), that's [format.dev](https://format.dev), and you simply follow the instructions to download and install it on your system.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/check-for-std-format-support?u=76281980&t=65)** This implementation is the basis for the new standard and it works quite well.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **URLs:** [fmt.dev](https://fmt.dev) (1), [format.dev](https://format.dev) (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** working.cpp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. The Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### Basic syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=0)** - This chapter is about the basic syntax of the C++ language.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=6)** The idea is to have you dive into the language with some real code right away.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=11)** By necessity, this means that we'll use language features that have not yet been explained.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=17)** It'll all be explained at some point in this course either in this chapter, or in later chapters.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=22)** Don't let this get in your way.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=24)** Go ahead, dive in, follow the exercises.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=27)** If something isn't immediately obvious to you, that's okay.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=31)** Just keep going, we'll get to it later.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=34)** The basic syntax of C++ is very simple.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=38)** A statement is a unit of code terminated by a semicolon.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=43)** Statements are used for a variety of purposes to call functions, declare and initialize variables, or to operate on expressions.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=52)** A function is a larger unit of code that may contain many statements.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=57)** A function is designed to be reused or to be called by another statement.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=63)** The main function is the main entry point of any C or C++ program.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=69)** You never call main yourself.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=72)** Main is called by the operating system when your program first launches.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=78)** A variable holds a value or values for later use.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=83)** In C++ variables must be declared before they're used.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=88)** The variable may then be used to provide its value to statements and expressions later in your code.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=94)** Most C++ files will have one or more include directives near the top of the file.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=101)** The include directive is how you import libraries for use in your code.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=106)** The library is a separate C++ file often with a .H file name extension.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=112)** System libraries typically have no file name extension at all.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=117)** The include directive includes the entire file during the compilation process.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=123)** In this case, we include the iostream library which provides the C out object.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=129)** In the rest of this chapter, we'll go through the basic syntax of C++ in a bit more detail.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=134)** You'll learn how to construct a syntactically correct program, how to define variables, and how to use pointers and references.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=143)** Take your time, experiment with the exercise files.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=147)** Be sure to go through the whole chapter.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/basic-syntax?u=76281980&t=149)** Understanding these fundamental concepts will help you get the most out of the rest of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1), case, (1)
> **Definitions:** is a  (3), means that (1), is called (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - this (1)

#### Anatomy of a C++ program
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=0)** - [Instructor] A C++ Program is basically a collection of statements and expressions usually organized into functions and classes.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=9)** In this lesson, I'll show you the general anatomy of a C++ Program.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=14)** Please understand that this is not exhaustive, there are many other elements that may be involved in a C++ Program, this is just the basics and there's no need to pay too much attention to the detail, we'll go over each of these concepts in more detail throughout the course.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=30)** For now, it's just important that you have a general overview of how these things work.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=36)** Here is a simple Hello World in C++.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=40)** You'll find this code in chapter two of your exercise files as hello.cpp, whitespace is any characters that are normally invisible, including new lines, spaces, and tabs.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=56)** Whitespace is mostly ignored in C++, one notable exception is when a space is necessary to distinguish between two words or tokens.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=66)** For example, the space between the words int and main is significant and required, extra spaces would still be ignored.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=76)** Comments are notations in the code that are ignored by the compiler, in practice they're stripped out by the pre-processor, C++ supports two different types of comments.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=87)** Single line comments are introduced by two forward slashes, the comment ends at the end of the line.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=95)** In this example, the comment is on a line by itself.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=99)** A comment may begin on a line after existing code without affecting the code itself.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=105)** C++ also supports multi-line comments, a multi-line comment may span several lines.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=113)** The comment begins at the special /* token and ends after the matching */ token, both styles of comments are inherited from the C language.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=125)** The multi-line comment was part of the original C language, the single line comment was added later.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=131)** The entry point for any C++ Program is always a function called main, all C++ Programs must have a main function.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=140)** This is also true for C, we'll talk about functions at length later in this course, the main function may also have arguments for parsing the command line.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=151)** The first argument is an integer representing the number of command line arguments.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=156)** The second argument is an array of strings, the second argument is sometimes written like this.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=163)** It means exactly the same thing, we'll cover arrays and pointers and more detail later in this course.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=170)** The body of a function is enclosed in curly braces, the code between the braces is run whenever the function is called, the main function returns an integer value, 0 is commonly returned to indicate that the program exited normally, to indicate an error condition, a main function would return a 1 instead of a 0.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=191)** Other values may have other meanings and specific circumstances.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=196)** A function that returns a type must always return a value of that type, the main function is the sole exception to that rule.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=204)** In the case of the main function, the return value is optional and is often omitted.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=210)** The 0 value is presumed if it's not specified, we'll cover functions in more detail later in this course.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=218)** The #include directive instructs the pre-processor to include another file called a header file to pass to the compiler, this is how libraries are used in C++.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=229)** In this case, we include the iostream header file which supports the cout object as well as other IO related classes and functions.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=239)** It is very common to include header files at the top of your source code, in fact, it is rare for a program not to include header files.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=250)** It's common to use cout like this to print text to the console, sometimes you'll see printf used instead, printf is in the C standard out header, spelled cstdout, cout and printf are both commonly used to format strings for output.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=271)** Both of these statements produce the same output, printf is smaller and faster than cout and cout is safer than printf.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=281)** Beginning with C++20, there's a new formatter called format.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=286)** The format function is inspired by Python's string formatter.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=290)** The format function is in the format header, we'll be using format to format strings in this course.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=298)** Beginning with C++23, there will be a print function that uses the same formatter as format.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=306)** This will mitigate the need for cout and iostream in many cases, as I record this in June, 2022, the print function is not yet available in any compiler library.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=319)** Print is relatively easy to implement and I find it very useful, if you want to use print today, I provide a simple implementation on my website [bw.org](https://bw.org).
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=331)** C++ uses name spaces to allow names to be defined without colliding with names already used, the std namespace is short for standard, the standard name space is used for all symbols in the C++ standard library.
>
> **[5:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=349)** The double colon is the scope operator, it tells the compiler to use this name space when looking up this symbol, this statement uses the cout object from the standard name space.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=362)** You'll often see a using statement like this, this statement imports a name from the name space so that it may be used in our code without the name space and scope operator.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=375)** I use this technique a lot in this course, for more about name spaces, please see the companion course, C++ Advanced Topics.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=384)** This is the basic form of a C++ Program.
>
> **[6:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/anatomy-of-a-c-plus-plus-program?u=76281980&t=387)** We'll get into more detail about many of these topics as we continue with this course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), this. (1), type, (1), pass (1), case, (1)
> **Definitions:** is an  (2), is a  (1), is called (1), short for (1)
> **CLI Commands:** find (2), python (1)
> **Cross-References:** later in (2)
> **Tools:** command line (2)
> **Exercise Files:** exercise files (1), source code (1)
> **File Paths:** hello.cpp (1)
> **URLs:** [bw.org](https://bw.org) (1)

#### Statements and expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=0)** - [Instructor] In C Plus Plus a statement is a unit of code.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=4)** This is statement .cpp from chapter two of the exercise files.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=8)** For example, down here on line 13 we have a statement that calls the library function format and assigns its return value to the variable STR.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=19)** A statement is analogous to a line of code.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=22)** It may do many things but it's treated as a unit of execution.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=26)** A statement is always terminated with a semicolon.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=30)** An expression is anything that returns a value whether or not the value is used.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=36)** An expression may be part of a statement or it may be an entire statement.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=41)** Here we have an expression X equals 42.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=45)** This assigns the value 42.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=47)** In fact, 42 by itself is an expression.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=51)** And then this assignment may be considered a statement as well as an expression and you'll notice it's terminated with a semicolon.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=59)** An expression may be part of a statement or it may be the statement itself.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=64)** An expression can include operators and parentheses, for example, I can say X equals 42 times 12.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=71)** And if I run this, you'll notice that it says X equals 504.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=76)** Or I can say 42 times 12 plus 14.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=79)** And by rules of operator precedence the multiplication will happen before the addition.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=85)** And if I run this, we get the value 518 or I can put the addition in parentheses which changes its precedence.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=94)** And we now get a different value because the addition is happening before the multiplication.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=100)** And in this case, everything in these parentheses is an expression.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=105)** And that expression is part of a larger expression which is part of a larger expression with the assignment, all of which is part of a statement.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/statements-and-expressions?u=76281980&t=114)** We'll discuss details like operator precedents later in the course, for now an expression is anything that returns a value and expressions may be part of a statement or may be an entire statement.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), function (1), case, (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2), analogous to (1)
> **Env Vars:** str (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Identifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=0)** - Identifiers provide readable names for variables, functions, classes, objects, labels, and defined types.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=8)** In C++, identifiers are made up of letters, and numbers within a set of constraints.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=15)** These include the 26 letters of the ISO Latin alphabet in both lowercase and uppercase.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=21)** The 10 Western Arabic numerals, and the ASCII Underscore character.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=27)** An identifier may not begin with a numeral.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=30)** Identifiers may not conflict with reserved words.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=34)** The current C++ standard reserves 73 keywords, plus 11 alternative tokens.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=41)** You cannot use any of these words as an identifier.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=45)** Identifiers are case sensitive.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=47)** Capital A zed is different from a capital Zed.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=52)** So even though both of these read a zed, they are different identifiers.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=58)** Current standards allow letters that are not part of the ISO Latin alphabet, but support for this is dependent upon your implementation and is not portable.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=68)** I highly recommend that you stick to the 26 letters of the standard Latin alphabet, numbers, and the underscore.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=76)** If you choose to use non-Latin characters, you'll need to be aware that your code may not compile on other systems.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=83)** As an example, this code compiles and runs fine on a Mac with X code and Clang.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=89)** It does not compile at all on Microsoft Visual Studio.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=94)** Current standards allow for identifiers to be of any length although only the first 63 characters are guaranteed to be checked for uniqueness.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=102)** And only the first 31 characters are guaranteed for external identifiers so in practice, you should keep your identifiers under 31 characters long.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=113)** An initial underscore character that is an underscore in the first position of an identifier is reserved for system identifiers in the global namespace.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=124)** It is legal syntax, but you should avoid identifiers with an initial underscore in the global namespace.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=130)** We'll talk about scope and namespaces later in this course.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=135)** As with many aspects of programming, it's a good idea to decide on a consistent style for choosing identifiers, and stick to it.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/identifiers?u=76281980&t=143)** Understanding the rules, choosing conventions and sticking with them will help make your code more readable and maintainable for the long term.

> [!info]- Semantic Content
>
> **Env Vars:** iso (2), ascii (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - identifiers (1)

#### Defining variables
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=0)** - Variables are strongly typed in C++, and in C, that means that the token representing a variable represents both its value and its type.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=10)** This is variable.cpp from chapter two of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=15)** We come down here to line 10, you'll notice this 'int i' and a pair of curly braces and a semicolon.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=21)** So that's a statement.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=23)** And this statement is a variable definition.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=26)** This defines a variable.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=28)** It defines the name and the type of the variable, and it allocates space of a size sufficient to hold a value of that type.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=36)** In other words, this is a variable of type integer, because it has this 'int' that's the type integer and its name is 'i'.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=44)** And so there's a space allocated with enough space to hold an integer, and it's named 'i' in the symbol table.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=52)** And here we have these curly braces, the empty curly braces initializes the variable by giving it an initial value of zero.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=60)** Without initialization, if I take those curly braces away, the value is undefined and it can easily cause bugs in your program.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=69)** So it's always a good idea to immediately initialize your variables, upon definition.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=75)** The empty curly braces is a simple and efficient way to do that.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=79)** So if I build and run this, you'll see that I get 'i' is zero.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=85)** And we could easily initialize it with a different value by putting a different value in the curly braces.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=90)** Here I'll put in a 47, and I'll build and run this again.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=94)** And you see, it says 'i' is 47.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=98)** You will often see variables initialized with the equal sign.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=102)** And so if I use an equal sign here, instead of the curly braces, you see I get exactly the same result.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=109)** This is the traditional way to initialize variables as inherited from the C languages.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=114)** The curly braces is the modern way to initialize variables.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=119)** It's more efficient, and it does better type checking.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=122)** And this is the way we'll initialize variables during this course.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=126)** The empty curly braces is a special case that will zero initialize any type, and we'll use this a lot too.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=135)** So you notice when we build and run this, we get 'i' is zero because we have an empty curly braces here for special zero initialization.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=144)** And after we've initialized the variable, we've declared an initialized variable, I can actually change its value.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=149)** I can say 'i' equals 47 down here, and here I'm using the assignment operator, which is the equals sign, and that assigns a new value to an existing variable.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=160)** And I can copy and paste this 'cout' and run it, and you see it says 'i' is zero, and then we change the value of 'i' with the assignment operator.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=169)** And now 'i' is 47.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=172)** So once a variable is defined, you may assign a different value with the assignment operator.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=177)** C++ also uses qualifiers.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=180)** And there are a number of different qualifiers available.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=182)** The most common one is the 'const' qualifier.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=185)** And if I say 'const' here, it makes our variable a constant.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=189)** It tells the compiler that the value of this variable cannot be changed once it's defined.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=195)** It's also called a read-only or an immutable variable.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=198)** And now, when we try to change it down here on line 12 we get this error cannot assign to variable 'i' with const-qualified type 'const int'.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=208)** What that means is that the type of the variable has actually changed.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=212)** It's not just an integer anymore.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=214)** It's now a constant integer.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=216)** So 'const int' is the type of the variable now.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=221)** The qualifier becomes part of the type, and if we try to change it, our compiler will give us an error.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=226)** It will not allow us to change it because it's now a constant variable.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=231)** So let's take these out here, and we're going to change this again, and I'm going to use the word 'auto' as the type instead of anything there.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=240)** And I'm going to assign it a value.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=242)** I'm going to say equals 47.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=245)** This allows the compiler to determine the type of a variable.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=248)** This is what the auto-type is for.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=251)** And you'll see this a lot, because 47 is a literal integer.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=256)** The compiler will say, okay this 'auto' is going to be an 'int'.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=260)** And so this type, it's still strongly typed, we still have a type of 'int' and a name of 'i', the only difference is we didn't tell it what the type is, we let it determine the type from the initialization.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=274)** There are many advantages to using 'auto'.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=276)** It requires initialization, so you can't use it without initializing your variable.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=281)** I can't just do this, say 'auto i'.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=283)** I'll get an error when I try to do that.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=285)** If I try to build, it says declaration of variable 'i' with deduced type 'auto' requires an initializer, right?
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=291)** I can't use the empty braces, because again there's no value there.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=296)** There's no way for it to determine the type.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=299)** So the use of 'auto', it puts some extra restrictions on here.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=302)** And in that way, it can often be safer.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=305)** One of the things that happens with C++ is often type names can get very, very long.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=311)** When you're using templates, and when you're using the STL, sometimes these type names can get very, very long, and using 'auto' actually makes it safer.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=320)** Now I could initialize this with braced initialization, instead of the equals sign, and that will work fine.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=329)** But it's more common with the auto-type to use the equals sign because there's really no danger of type narrowing, which is the major advantage of the curly braces.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=339)** So we'll just go ahead and use equals 47 for that.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=342)** And I'll build and run and you see that we get the result we want.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=345)** So in C++ a variable must be defined before it can be used.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/defining-variables?u=76281980&t=350)** The fundamental data types and qualifiers are covered in more detail in the data types chapter of this course.

> [!info]- Semantic Content
>
> **Code Keywords:** const (5), type. (3), this, (3), type, (3), let (2)
> **Definitions:** is a  (5), means that (1), in other words (1)
> **Prerequisites:** initialization (5)
> **File Paths:** variable.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - variables (1)

#### Pointers and references
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=0)** - [Instructor] Pointers are very powerful, very common, and can be dangerous if abused.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=5)** It's important to understand how pointers work and to really understand pointers, we need to first understand how a variable works.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=14)** A variable is a typed and named location and memory.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=18)** This is a variable definition.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=20)** Here, memory is allocated for a value of type integer and is associated with the name x.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=27)** Here, the integer value 1 is copied into the memory location associated with the integer variable x.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=34)** Now we define another variable.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=37)** The variable y represents another integer in a different memory location than variable x.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=43)** This is an assignment.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=45)** Here, the value from the variable named x is copied to the variable named y, the variable y now contains a separate integer, in a separate memory location, with the same value as the variable x.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=58)** We see that the name of a variable is used as an index to map to a memory address and a specific data type.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=66)** C++ also provides a pointer type that is a pointer to a value, as opposed to carrying the value itself.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=74)** This is a pointer definition.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=76)** A pointer is a variable that holds the address of another variable.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=80)** This pointer is named ip and its type is pointer to int.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=86)** So memory is allocated for a pointer, not an int.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=89)** The pointer is also strongly typed.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=92)** That is the compiler associates this pointer with a value of type int.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=96)** We call this an integer pointer because it's a pointer to an integer value.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=101)** Note that the asterisk may have a space before or after, the space is ignored by the compiler.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=108)** Now we assign an address to our pointer.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=111)** The ampersand is formally called the reference operator but in this context, it's more commonly called the address of operator.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=119)** It returns the address of an object suitable for assigning to a pointer.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=124)** This assigns the address of x to our pointer.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=128)** The variable IP now holds the address of the integer variable named x.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=133)** Another way to say it is our pointer points to the variable x.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=138)** This is called dereferencing the pointer.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=141)** The asterisk is the dereference operator.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=144)** This is how we use a pointer.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=146)** By dereferencing the pointer with the asterisk, we access the value pointed to by the pointer.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=154)** This statement assigns the value that is pointed to by ip to the variable x.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=159)** And because ip points to x, this statement has the same effect as x equals y.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=166)** Now let's take a look at a simple example.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=169)** This is pointers.cpp from chapter two of the exercise files.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=174)** And you see, we have an integer x with a value of 7, integer y with a value of 42, and an integer pointer that points to the value of the x variable.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=185)** So the integer pointer is pointing to x and the value of x is 7.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=190)** So when I print this, here I'm printing x and here I'm printing y, and here I'm printing what's pointed to by ip.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=199)** So I'm dereferencing ip and pointing to its value which should be the same as the value of x, which is 7.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=205)** So when I build and run this, we get the value of x is seven value of y is 42, and the value of asterisk ip is the value of x7.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=217)** Now, if I assign a different value to x, you'll notice that the pointer now points to the new value.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=224)** And so I'm just going to copy this one.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=227)** And I'm going to say here x = 73.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=232)** And now when I run this, you'll notice that I have 7 and I have 73 after I change the value of x.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=242)** I can reassign the pointer to point to y instead of x if I say ip equals the address of y and this reassigns the pointer, before it was pointing to x, and now it's pointing to y.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=256)** And when I build and run this, you see that on our last line, the value of what's pointed out by ip is now 42, which is the value of y.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=265)** In C++, the reference type is a lot like a pointer but with some significant differences let's start by adding a reference to our example.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=274)** We've got x, we're going to leave our pointer to point to x.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=279)** And I'm also going to create a reference.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=281)** I'm going to say int& y and that makes a reference and not a pointer, it's a reference, but it's very similar and very different.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=291)** And so we have x and we have y and I'm just going to move the IP up here so that they're in the same order and get rid of these.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=298)** And we can go ahead and build and run this.
>
> **[5:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=301)** We can see the value of x is 7.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=304)** The value of what is pointed to by ip is also 7 because that ip points it, the address of x, and the value of y is also 7.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=315)** So here we have a reference.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=317)** And in this case y is a reference to an int.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=321)** You can use y just like any other int but the value is always the value of x.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=326)** So if I change x and have it say like 42, and I build and run, you see that y is now also 42.
>
> **[5:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=337)** But what's interesting here, change this back, I'm going to come down here and I'm going to say y = 42, and we'll just print all of these again.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=350)** And you'll notice that all of them change to 42, because we've changed the value of y, y is a reference to x.
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=358)** So it changes the value of x.
>
> **[6:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=361)** And of course in the same way it'll change what's pointed to by ip because they're all based on x.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=368)** So there's two major differences between a pointer and a reference.
>
> **[6:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=372)** First, you do not use an asterisk to dereference a reference.
>
> **[6:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=376)** No special punctuation is required.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=379)** The value of the reference is always the value of the referred variable.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=383)** Second, there is no syntax for changing a reference.
>
> **[6:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=387)** Once the reference is defined, it cannot be changed.
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=390)** So y will always be a reference to x.
>
> **[6:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=394)** You can't change it, reassign it to be a reference to something else like you can with a pointer.
>
> **[6:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=399)** In fact, a reference is not even a variable or an object.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=403)** It's really just a trick of syntax.
>
> **[6:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=405)** It's like an alias.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=406)** It's an entry in the name space without any value of its own.
>
> **[6:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=410)** A pointer is a variable of type pointer.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=412)** I can assign it to point to something else.
>
> **[6:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=414)** This is called receding the pointer.
>
> **[6:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=417)** So, for example, I could come down here and I could say int z = 73, do it the modern way here, 73 in the curly braces.
>
> **[7:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=430)** And then over here, I can say ip equals the address of z.
>
> **[7:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=437)** And now when I run this, you'll notice it says down there on the second to last line, the value of ip is 73 because it's pointing to, it's been reseated.
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=447)** The ip pointer has been reseated, no longer points to x, and now it points to z instead.
>
> **[7:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=454)** A reference, on the other hand, is not a variable, it cannot be receded to refer to different value.
>
> **[7:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=459)** Once it's been declared, it cannot be changed, it will always refer to the same variable.
>
> **[7:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=464)** It's important to realize the danger of assigning a value through a reference.
>
> **[7:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=470)** So, for instance, when I say, what's pointed out by ip = 42, we see in the syntax that I'm dereferencing ip.
>
> **[8:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=481)** And it's obvious, what I'm doing, at least it's clear, is I'm assigning a value to what is pointed to by ip and I can look up and I can say, oh, well that's x and I can build and run and we see that now x is 42 and therefore so is y and everything else.
>
> **[8:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=497)** That's because I have to use the dereference operator.
>
> **[8:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=500)** And it tells me that there's something indirect happening.
>
> **[8:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=503)** On the other hand, if I say y = 42, there's nothing in this syntax here that really tells me that I'm changing something else.
>
> **[8:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=514)** It looks like I'm just changing a variable called y.
>
> **[8:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=516)** And when I build and run, you see that we have all of this side effect.
>
> **[8:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=519)** X is now 42 what's pointed out by ip is 42.
>
> **[8:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=523)** We can consider this a side effect and it can be very difficult to debug.
>
> **[8:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=529)** So for this reason, I strongly recommend, and this is pretty standard practice, that any time you declare a reference, you make it const.
>
> **[8:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=537)** And now it is illegal for me to do this.
>
> **[9:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=540)** If I try to build this, I get an error that says, "Cannot assign to variable 'y' with const-qualified type" et cetera.
>
> **[9:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=548)** And so I can change x because x is not const and I can build and run and y will have changed but I cannot change y because that's declared const.
>
> **[9:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=560)** both pointers and references are used a lot in C++ especially in functions and classes.
>
> **[9:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/pointers-and-references?u=76281980&t=566)** You'll see many more examples of this in the rest of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (6), const (4), else. (3), let (2), this. (2)
> **Definitions:** is a  (9), is called (2), is an  (1), we call this (1)
> **Analogies:** just like (1), it's like (1), for example (1), for instance (1)
> **File Paths:** pointers.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Flow Control

> [↑ Back to Table of Contents](#table-of-contents)

#### Conditionals
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=0)** - [Instructor] A conditional statement allows you to run one block of code or another based on a condition.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=5)** This is an example of a conditional statement in C++.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=9)** If the condition evaluates as true, then the statement-block will be executed.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=14)** The statement-block may be one or more statements enclosed in curly braces.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=19)** The if statement is the simplest form of conditional.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=22)** When the condition is evaluated, it's found to be either true or false, if the condition is true, then the enclosed statement-block is executed and flow continues after the conditional.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=34)** If the condition is false, then the flow continues after the conditional without executing the enclosed statement-block.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=42)** An if statement may also have an else clause, which looks like this in C++.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=48)** Notice that there's a separate statement-block for the else condition.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=52)** This block of statements is executed if the condition is evaluated as false.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=57)** The if-else construct works like this.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=61)** If the condition is true, then the statement-block is executed and the flow continues after the conditional.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=67)** If the condition is false, then the else-statement-block is executed and flow continues after the conditional.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=75)** In either case, one and only one of the blocks of statements will be executed.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=81)** Let's take a look at these statements in practice.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=84)** This is working.cpp from chapter three of the exercise files.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=88)** I'm just going to come in here and I'm going to create a little if statement.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=92)** I'm going to create a couple of variables, x and y.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=96)** And a little if statement.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=102)** And we'll just change this to say after.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=104)** Now when I build and run this, you'll notice that it says condition is true and after.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=110)** And if I change the conditional, instead of x is greater than y to x is less than y, then you notice that the condition is not true, so it just goes straight to after and it doesn't run the statement-block because the condition x is less than y is false.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=127)** X is not less than y.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=128)** X is 42, y is 7.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=131)** So I can create an else clause.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=134)** And in the else clause, I can say condition is false.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=140)** And now I don't need this after anymore.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=144)** And I can build and run this and it says condition is false because x is not less than y.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=150)** There's a few different relational operators.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=153)** We have greater than and less than, which we've seen.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=155)** We also have equal to, which is two equal signs.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=159)** And of course, that is false.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=162)** We can do less than or equal to like this.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=166)** And that's false.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=167)** We can do greater than or equal to.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=170)** And that should be true.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=172)** And we can say not equal to, which should also be true.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=177)** What's interesting here is that this is called a Boolean expression.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=182)** It returns a Boolean value of either true or false.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=186)** In C++, you have keywords true and false.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=188)** So I can say if true, and of course, I get these warnings of unused variables and code will never be executed.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=196)** Or I can say if false, and I get condition is false.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=201)** I can use a one or a zero.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=203)** The number one is always true.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=207)** And number zero is always false.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=210)** Build and run that.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=211)** It says false.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=213)** In fact, anything that is not zero is considered true.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=216)** So if I say 42 here, it is true.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=220)** The empty string is nonzero because in C++, that's actually an address.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=227)** So I can build and run and it says condition is true 'cause it's nonzero.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=232)** Only a zero value is considered false and that's why we have these keywords of true and false like that.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=240)** It's worth noting that the statement-block may be a single statement, like this.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=245)** We'll go back to x is greater than y.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=250)** And of course, we have it in a block like this.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=252)** It says condition is true, right?
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=255)** Well, since it's just a single statement, we can, and you'll often see this, we can simply put it on a line like this without the curly braces.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=265)** Now, some people consider this poor practice because it's easy to modify this and end up with confusing code.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=273)** In my view, as long as it's all on a line by itself like this, then you don't need the curly braces.
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=278)** When you go and want to put it on the next line like this, then I strongly recommend you include the curly braces so that when you add lines, you don't end up accidentally putting those lines outside of the conditional block even though they're still indented.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=297)** And so if there's only one statement, and you put it on the same line as the condition, then I don't consider this bad practice but many people do.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=306)** But you'll see this a lot.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=307)** Just a little one-liner with a condition like that.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=310)** There's also a conditional operator called the turnary conditional operator.
>
> **[5:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=314)** It's a simple shortcut for choosing a value based on a condition.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=318)** And it looks something like this.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=320)** Auto s equals x greater than y, question mark yes, colon, no.
>
> **[5:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=328)** And so what this does is it evaluates the condition, and you have this question mark that separates the condition from the results.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=336)** If the condition is true, it'll return the first value and if the condition is false, it'll return the second value.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=344)** And so it'll assign one of those yes or no to s and then I can print it like this, and I can say the answer is yes.
>
> **[5:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=355)** And obviously, if I change the relational operator to a less than, then the answer is no.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=362)** So this is called the turnary conditional operator because it takes three values: a condition, which is this value here, a true value, which is this one here, and a false value, which is this one.
>
> **[6:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=376)** So it takes all three of those values with the question mark and the colon.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=380)** If the condition is true, it returns the true value, and if the condition is false, it returns the false value.
>
> **[6:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=386)** The condition may be any condition that resolves to a Boolean value.
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=390)** This can be very handy in cases where you just need to select a single value and you don't need the complexity of a block-oriented is-else construct.
>
> **[6:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=398)** The turnary conditional operator is a common shortcut for testing a simple condition with a simple result.
>
> **[6:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/conditionals?u=76281980&t=404)** It looks a little weird if you've not seen it before but it's actually quite simple and quite common.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (5), this, (5), case, (1), let (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **File Paths:** working.cpp (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### Loops
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=0)** - The basic while loop control looks a lot like a simple if statement.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=5)** In this case, the statement block will execute repeatedly until the condition is false.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=11)** The flow of a while loop also looks a lot like an if statement.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=14)** The difference is after the statement block is executed, flow returns back to the condition and this creates a loop.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=23)** The loop only ends when the condition becomes false.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=27)** This is while.cpp from chapter three of the exercise files.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=32)** We have a basic while loop down here, beginning on line 13.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=36)** And you notice that the block is lines 14 and 15, with the curly braces ending line 16.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=43)** The condition is called the loop control, as it controls the execution of the loop.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=50)** We have this array up here with five elements, the values of the elements are one, two, three, four, and five.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=57)** Yet the index of the elements are zero through four.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=61)** So we create a little index variable that we'll use to index the array.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=66)** And we initialize this to zero.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=70)** Then inside the block for our loop, we print out the value of each element and we increment the index variable, i, using the increment operator, which we'll discuss later in this course.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=82)** So when I build and run this, you see it says element zero is one.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=87)** Element one is two, et cetera.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=89)** To element four is five.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=92)** There are two additional loop controls available.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=95)** I can end the loop prematurely with a break statement, so I can come up here and I can say, if i is equal to three, break.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=105)** And you notice that this if statement has only one statement, and it doesn't need the curly braces and it can go on the same line.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=114)** And that's very, very common.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=116)** So when I build and run this, when we get to index three, which is the element with the value number four, it will break and it'll stop the loop.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=125)** The break statement breaks out of the loop and continues execution after the block.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=131)** So go ahead, and I'll run this and you see we get element zero, element one, and element two, but at that point, the loop stops because we hit the break statement.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=142)** Alternately, I can skip the rest of a block with the continue statement.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=146)** I can say, if i equals two, and I can increment i and continue.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=157)** So the continue statement simply jumps back to the beginning of the loop.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=162)** And I'm incrementing i so that we still have a loop, and so that it doesn't repeatedly just get stuck in the continue.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=170)** And so when I build and run, you'll notice it'll skip element two, which has the value of three.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=176)** And so down here we have element zero is one, element one is two, element three is four.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=182)** We've skipped element two because of this continue statement here.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=186)** And one other variation here, we can take the while condition and put it at the end of the loop like this.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=196)** And we have to put the keyword do up here at the beginning.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=200)** And so some people call this a do while loop for obvious reasons.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=203)** It's not as common, but you will see it sometimes.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=206)** And you'll notice when I run it, this runs exactly the same.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=209)** The only difference is is that I'm testing the condition at the end, rather than at the beginning.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=215)** The while loop is inherited from C, and is the same in both languages.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=219)** While is a fundamental control in C++.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/loops?u=76281980&t=223)** Do while is used less frequently, but it's still important to understand.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (5), this, (2), case, (1), while. (1), break. (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** while.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### Iterating with for
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=0)** - [Narrator] C++ provides two versions of the for loop.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=3)** One is inherited from C and the other is unique to C++.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=8)** Let's look at the C for loop first, as this is by far the most common.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=13)** This is for.cpp from Chapter three of the exercise files and that's the word for, not the number four.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=20)** F-O-R.cpp.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=23)** If you remember, with the while loop, we had to initialize the index variable before the loop.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=28)** We also had to increment the variable at the end of the loop.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=31)** The for loop is like the while loop with controls for initializing and incrementing an index.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=38)** So, here we have, around line 12, we have the index being incremented and then a semicolon and then, the condition, just like in the while loop, another semicolon, and then the increment.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=53)** This is all in one statement called for.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=55)** So, when I build a run, you see we get the same results that we had with our while loop.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=62)** So, there's three loop control expressions.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=65)** The initializer.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=66)** And you can really put any expression here.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=69)** The condition, the while condition, and the increment.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=74)** You can put any expression in any of those places.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=78)** So this can be very useful when iterating through, say, a string, if instead of this array, if I say const char string, like that,
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=93)** and then, instead of array here, I say string.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=97)** When I build and run, you see we get each of the characters of the string.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=102)** You'll notice that this stopped at five elements even though there's six characters in the string because my while condition says i's less than five.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=111)** Instead, what I can do, is I can say string sub I and if you'll remember, a c string is terminated with a null character, which is a value zero.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=122)** So, this string array actually has seven positions, the seventh position being the null terminator.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=130)** So I can test for that with string sub i like this, taking advantage of the fact that a zero is always false.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=137)** So now, when I go and run, you'll notice that I get zero through five, all six characters, and the seventh element, the number six is not printed because it's false and our loop ends.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=150)** We could also do this with a pointer.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=153)** So, instead of an index, I can say auto pointer p and initialize that to the value of the string array.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=164)** Now the value of an array in CN and C++ is actually its address.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=169)** So, that initializes the pointer with the address of the array.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=173)** And now, instead of string sub i because we don't have an i, I could just say asterisk p and I can increment the pointer itself, like this.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=184)** And over here, I no longer have an index.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=187)** So, I just say what's pointed at by p.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=190)** And I just say element is or char is, like that.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=196)** When I build and run now, you notice we get all of the characters in the string.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=202)** This is a very, very common way to do this.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=205)** When you're using an array with a pointer and incrementing the pointer and then, de-referencing the pointer to get the value.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=212)** Again, zero is false and so, we're de-referencing the pointer as the loop control and when it gets to the element with a value of zero, the null terminator, it will find the end of the string.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=223)** It'll stop the loop.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=225)** So, this for loop is a fundamental control in C++.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=228)** It's inherited from C and it's exactly the same in both languages.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=232)** It's very powerful.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=233)** It's very useful and while it may look cryptic at first, once you get to know it, you'll find lots and lots of uses for it.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=240)** There's another form of for loop exclusive to C++, beginning with C++ 11.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=246)** It's the range-based for loop.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=249)** This gives C++ a simple way of iterating over the elements of a container, an operation that used to take a bit more code.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=256)** So, we're going to go ahead and we're going to grab the code from range-for.C++.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=261)** So, I'm going to copy this and paste it into my working here.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=265)** Or however you do this in whatever programming environment you were using.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=270)** You see down here our range-based for loop, we have the same array with the five elements and a range-based for loop looks a lot simpler, doesn't it?
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=280)** We simply have an element and the container and with a colon separating them.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=286)** So, for the element, we're using const auto reference e.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=291)** So, it uses auto so it automatically detects the type for the element, and it's using a reference and because we're using a reference, we're using const.
>
> **[5:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=301)** So, the element that we get here in the left-hand side of the for loop, it's a reference to the actual element in the array.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=309)** So, if I didn't have this const, I could actually change it and you'll find code that does that on purpose.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=315)** So, now, all I have down here in my format is just the element itself.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=320)** When I build and run, this range-based for loop, it steps over the array.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=325)** For each element in the array, it assigns the element side and then it prints it out.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=333)** We see our element is one, element is two, all the way through element is five.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=338)** Of course, this also works with C strings.
>
> **[5:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=340)** So, we can say const char string and really don't need that equals sign there.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=350)** Just say string like this.
>
> **[5:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=353)** And we'll need a break.
>
> **[5:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=355)** We say if element is equal to a zero, break, and when I build and run, you see that it will, oop, called it array there, didn't we?
>
> **[6:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=366)** It's string now.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=368)** Now, we build and run it.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=369)** You see we get the elements of our array, which is now a C string.
>
> **[6:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=373)** So, the range-based for loop is a very powerful and useful addition to C++.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=379)** It provides a simple and effective solution for iterating over the elements of a container.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=384)** It works just as well with native arrays, vectors, strings, initializer lists, anything that supports sequential iterators.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/iterating-with-for?u=76281980&t=391)** As new code is written in C++ and older code is updated, the range-based for loop is becoming very common.

> [!info]- Semantic Content
>
> **Code Keywords:** const (5), for. (3), this. (3), let (1), for, (1)
> **Definitions:** is a  (4)
> **File Paths:** for.cpp (1), f-o-r.cpp (1), range-for.c (1)
> **CLI Commands:** find (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=0)** - [Instructor] A function is an atomic standalone block of code.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=4)** It may or may not have parameters or return of value.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=8)** Some languages distinguish between a function at a procedure.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=12)** C++ makes no such distinction.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=15)** This is func.cpp from chapter three of the exercise files.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=21)** And this is a function definition.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=24)** A function definition includes a return type.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=26)** And here, it's void.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=29)** The name of the function, here it is func.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=33)** And a pair of parenthesis.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=35)** And a block of code.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=38)** It may optionally specify parameters inside the parentheses.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=42)** This function has no parameters.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=44)** And a return type of void means that it does not return a value.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=49)** A function is called by using its name, following parentheses.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=53)** So we see down here on line 16, the function is called.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=57)** The function itself in the block, it simply says this is func.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=60)** And main says, this is main.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=62)** And then calls func.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=64)** So, what we would expect when we run this, is it'll say this is main.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=67)** And then it'll say, this is func.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=69)** And so let's go ahead and run it.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=72)** And, that's the result that we're expecting.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=75)** It first runs this statement here.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=78)** Then it calls the function.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=80)** And the function prints out this statement here.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=83)** I can add parameters.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=85)** I can say, int i.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=88)** And then my cout, I'll just say format.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=91)** And I'll say, i is and curly braces.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=97)** And then when I call it, I can call it with value.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=100)** Let's say 42.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=102)** And when I build and run, it'll say, i is 42, in the function.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=107)** So this allows me to pass values to the function.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=110)** You can pass multiple values by using commas.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=113)** So here I can say, my second value will be a C-string.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=117)** So I'll say, const char s, like that.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=122)** And then I can print out that value too.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=128)** Like that.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=129)** And then I can call it with a C-string.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=132)** And say, 42.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=136)** And when I build and run, you see we get both values in our result.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=140)** We've passed these two values into the function.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=144)** We pick them up in the function, with the int i and const char pointer s.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=149)** And we print them out using those variables.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=154)** A function may also return a value.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=156)** I can return, say an int.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=159)** You just put the type that you want to return there.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=161)** And then you can have a return statement.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=164)** Return.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=165)** Say i times 2.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=168)** Right?
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=169)** And then down here, I can say, auto X equals.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=174)** And then print it.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=179)** When I build and run, it says X is 84.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=182)** Which is indeed 42 times two.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=185)** A function may only return a single value.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=189)** Functions are a vital part of C++ programming.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/functions?u=76281980&t=192)** And we will cover them in more detail, later in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), let (2), pass (2), const (2), type. (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **File Paths:** func.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Data Types

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of data types
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=0)** - [Instructor] C++ is a strongly typed language.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=3)** This means that every value has a specific type.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=7)** The meaning of a value is largely determined by its type.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=11)** A data type determines both the size and the interpretation of a value.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=15)** For example, the int type, means assigned integer value of the natural machine size, and unsigned int means the same size integer with no bit reserved for sign.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=28)** Primitive types are those basic types that are used in building other compound types.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=34)** Primitives in C++ include integer types for representing integer numerical values, floating-point types for representing real numerical values, a boolean type for representing true and false values.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=49)** Compound types serve as containers for primitives and other types.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=54)** An array is a contiguous sequential set of objects of the same type.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=59)** Arrays are powerful, flexible, and have very low overhead.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=62)** They're also the basis of C-strings and the C++ STL container classes.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=68)** An array of characters serves double duty as a primitive string, often called a C-string, is treated as a string in many contexts.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=77)** A structure is a sequential set of objects of various types.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=81)** A structure may contain scalars, arrays, and even other structures and classes.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=87)** C++ classes are based on C structures.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=90)** Technically a class is a structure that defaults to private membership.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=94)** In practice, a class is a structure that contains function members as well as data members.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=100)** A class may be written as a struct.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=102)** You'll occasionally see it written like this.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=105)** A union is a container of overlapping objects.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=109)** This allows a single container to hold objects of different types at the same time reusing the same space.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=116)** An enum is an enumeration type.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=119)** It holds a specific set of values enumerated with names.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=124)** The void type represents an absence of value.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=127)** It's mostly used for functions that don't return a value.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=131)** A pointer holds an address that refers to an object of a given type.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=136)** Pointers are strongly typed in C++.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=139)** The type of a pointer is used as the type of the referenced value.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=143)** It's also used to determine the size of increments, decrements, and arithmetic operations on the pointer.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=151)** A reference is like a pointer, but with different semantics.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=154)** References are immutable.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=156)** Once defined, a reference cannot be changed to refer to a different object.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=161)** References are accessed as aliases without any syntactic indication that it's a reference.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=168)** This allows for silent side effects and should be used with great care.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=173)** The auto type uses type inference to determine the type of a variable.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=177)** Auto combines convenience with type safety.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=180)** And because of these qualities, it's considered good practice to use auto as often as possible.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=187)** We will use auto often in this course.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=190)** C++ provides a number of fundamental data types which may be used or extended for many purposes.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-data-types?u=76281980&t=197)** The rest of this chapter will cover these types in greater detail.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (5), type, (1), private (1), function (1), struct (1)
> **Definitions:** is a  (6), means that (1), is an  (1), refers to (1)
> **Env Vars:** stl (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Integer types
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=0)** - [Instructor] Integer types are simple primitive data types for representing integer values.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=5)** Whole numbers with no fractional part.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=8)** The integer types include char, int, short int, long int, and long long int.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=15)** These are all available in both signed and unsigned versions.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=18)** The size of each type will vary depending upon both the architecture and the compiler.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=25)** The char type is defined as the minimum necessary size to contain a character.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=31)** On most modern systems it's eight bits.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=34)** The char type may be signed or unsigned by default.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=37)** That is, on some systems it may be signed, and on other systems it may be unsigned.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=43)** You cannot count on a char being one or the other.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=47)** The only thing you can count on is that will hold a character.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=50)** All the other integer types are signed unless modified with the unsigned keyword.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=56)** The short int type is the smallest natural size of an integer on the target processor.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=62)** May be the same as int on modern desktop systems, it's usually 16 bits.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=67)** The int type is the natural size of an integer for the target processor.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=72)** On desktop systems, it's often 32 bits.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=76)** Long int is at least the size of an int, it's often double the size of an int.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=81)** On modern systems, it's usually either 32 or 64 bits.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=87)** Long long int is at least the size of a long int.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=90)** It may be double the size of a long int.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=93)** On modern systems, it's often 32 or 64 bits.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=98)** For the signed types, the most significant bit is a 2's complement signed bit.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=103)** Unsigned types are available with the unsigned modifier.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=107)** These are the same size as the signed types, but they don't set aside a bit for the sign.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=113)** For types other than int, the keyword int is assumed when not specified.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=118)** You'll often see these types specified like this.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=122)** You may specify a literal character, with a single character, in single quotes.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=128)** A literal integer, is specified with the numeric digits, long integer has an L after the digits, long long has two Ls, and unsigned integers have a U.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=140)** If you acquire an integer of a specific size, the C standard int header, c-s-t-d-i-n-t, provides types in these specific widths, eight bit, 16 bit, 32 bit, and 64 bit, both signed and unsigned.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/integer-types?u=76281980&t=156)** Intmax_t and uintmax_t are the largest size supported by your target hardware.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (1), this. (1)
> **CLI Commands:** ls (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Floating point types
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=0)** - [Instructor] C++ provides the common floating point types.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=4)** This is float-types.cpp from Chapter four of the Exercise Files.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=9)** C++ provides these floating point types if we come down here line 13, we have the float type and then line on 14, we have the double type, and then on line 15, the long double type.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=22)** On most modern systems, the float type is 32-bits precision to about seven digits.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=28)** The double type, is 64-bits giving us a precision of about 16 digits.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=34)** And the long double type, may be the same as double or it may be something larger like an IEEE long double, that may give us more precision.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=44)** On many systems including this one here which is an Apple with the M1 chip, which is the ARM 64 running Apple clang, the long double type is simply a synonym for double.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=56)** This is also true on Microsoft Visual C++ even on 64-bit systems, the long double is simply a synonym for double.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=64)** On Intel® MAX® and on other Intel systems running Clang or GCC, the long double, it'll read out as being 128-bits but it's actually an 80-bit IEEE long double.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=77)** And so, let's take a look at how this code works because what we're going to do here is we're going to print out the size, of each of these types.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=84)** So you notice up here on line 10, we have a constant the type is size T, which is basically an unsigned integer that's compatible with the size of operator which we're going to use in a moment.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=95)** And it's named byte, and it has the value of eight which is the number of bits in a byte.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=101)** And then for each of these format statements, you notice that it has size of, and then the variable, times byte.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=108)** So size of terms times the number of bytes and we want the number of bits, so we multiply it by eight.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=113)** And so we're getting the size of f, df and ldf which is the float double and long double.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=120)** And so when I run this, you'll see that size of the float f is, 32 -bits double 64-bits and long double, is also 64-bits.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=132)** Now I can show this to you on a couple of other systems.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=136)** So this is a terminal session that's connected to a Linux system running GCC on an Intel processor.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=144)** And, this is the code.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=145)** It's exactly the same code as we saw in Xcode just a moment ago.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=150)** And when I run this, you notice that it says the long double is 128-bits.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=156)** And that's actually, only using 80-bits of it for an IEEE long double, which is still a lot of precision.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=162)** Now let's take a look at it on a windows system.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=165)** This is a windows box that I have here in my lap.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=168)** And it's running, I believe in i7 or Quad Core i7.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=173)** You notice that it's running here in 64-bit mode x64 is the target for the compiler.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=179)** And this of course is Microsoft Visual C++ in Microsoft Visual Studio.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=186)** I'm going to go ahead and compile and run this, ctrl + alt + F5.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=191)** And so that builds it and it runs it in the debug console.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=194)** And you notice here that it says long double is 64-bit.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=197)** So even though it's an Intel processor, pretty much exactly the same as the Linux box we just saw in this case, the long double is 64-bits.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=205)** And that's true of Microsoft Visual C++ across the board.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=210)** Back to Xcode.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=211)** So you can see we have some variation there in what long double means on different systems, and that's just not uncommon.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=218)** Let's take a look at how to make literals in C++, literal floating point numbers.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=224)** A literal floating point number is any number with a decimal point, so we can say 500 to 0.0.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=232)** And I'll come down here, that and I'll type format.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=240)** And when I run this, you'll see that it says the value of f is 500.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=244)** I could also use scientific notation.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=246)** I can say 5e2, so that's like saying five times 10 to the second.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=252)** And I run that and we get the same result, 'cause 10 to the second is a hundred, five times a hundred is 500.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=258)** So this is all correct.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=260)** In discussing floating point numbers it's important to understand the distinction between scale and precision.
>
> **[4:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=266)** Scale is how large or small a number is or can be, precision, is the accuracy of the representation to a certain number of significant digits.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=276)** What this means is, when you use floating point numbers you may get rounding errors.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=282)** And so, let's just come down here and we'll say f equals 0.1 plus 0.1 plus 0.1, and we would expect that to equal 0.3, right?
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=294)** And I'll go ahead and I'll run it.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=295)** And we see it says the value of f is 0.3.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=298)** Well that may not actually be true, if I say if, f equals 0.3 and we'll cout true
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=312)** and else cout false.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=317)** And when I run this, it actually says false f is not exactly equal to 0.3 even though it looks like it is, it actually is not.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=327)** And if we make this df instead of f and we'll come down here and we'll change this to df and this to df, and this to df.
>
> **[5:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=337)** I'm going to go ahead and run this and you see, under the default representation from format of the double, you can see the rounding error, it's the three and a bunch of zeros and then a four.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=348)** And I can give this a little bit more here I can say, let's take a look at it to 20 places and we'll run it again and you see that rounding error, is significant.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=360)** Well, it may be possible to represent very large and very small values using floating point numbers, that's scale, not precision.
>
> **[6:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=367)** The precision of these types is always limited so it's a trade off you get scale, but you sacrifice some precision.
>
> **[6:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=374)** With the double type you sacrifice a little bit less precision but there is still precision sacrificed.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=379)** So that means that if scale is important to you you may use floating point numbers.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=383)** But if precision is important, as in accounting for example, you'll want to always use integers instead.
>
> **[6:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=389)** Never use floating point numbers for accounting it simply does not work.
>
> **[6:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=394)** C++ provides the standard floating point types.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=397)** Well, it's possible to represent very large and very small numbers with these types, it is at the expense of precision.
>
> **[6:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/floating-point-types?u=76281980&t=405)** If precision is important, as in the case of accounting, you'll want to use an integer type instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (5), type, (3), type. (1), case, (1)
> **Versions:** 0.3 (4), 0.1 (3), 0.0 (1)
> **Env Vars:** ieee (3), gcc (2), arm (1), max (1)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **CLI Commands:** make (2)
> **Tools:** terminal (1), visual studio (1)
> **File Paths:** float-types.cpp (1)
> **Cross-References:** as we saw (1)

#### The auto type
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=0)** - The auto type was introduced with C++ 11 and it has quickly become very common This is auto-type.CPP from chapter four of the exercise files.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=12)** Here we see that we can declare an object based on the type of what it's being initialized with.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=16)** This can be very convenient.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=18)** So here on line 11, we have a standard string object from the STL, the standard template library, that comes with C++. We've initialized it with a string, and we've named it S.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=31)** Here on line 12, we have an autotype.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=35)** We have X = S and the type of X is being automatically derived.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=41)** Down here, we give the value of X and here we give the type of X using type ID.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=46)** And what this does is it gives you the internal representation of what the type is and it can be a little bit confusing to look at.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=53)** So I'm going to go ahead and run this and we'll take a look at what this looks like.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=56)** You notice that it says type of X is and then this very long string and that's understandable to the compiler and it's not necessarily understandable to human.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=67)** In fact, that value will be different depending on the compiler, the library, the version all of those things.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=72)** We can look at this exact same code on our Linux box, and here it is.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=77)** And you notice the same code and I'll go ahead and run that.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=83)** And you see that we have a different incomprehensible string that starts with N S T seven, blah, blah, blah.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=89)** And if we look at it on Microsoft Visual C++ we'll see that it's different yet again.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=95)** Here is exactly the same code, and I'll go ahead and I'll run it.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=99)** And you can see that it says type of X is class standard, basic string blah, blah, blah, blah, blah, blah, blah, blah.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=106)** So you can see, it looks very, very different than it does on either of the other two systems.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=112)** But the beauty of this is you don't need to know any of that.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=115)** You just say auto X equals.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=117)** And there it is.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=120)** Because auto variables derive their type, They cannot be left initialized.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=124)** If I didn't initialize this, it wouldn't know what type.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=127)** And in fact, when I try to build it, it'll give me an error.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=131)** Say declaration of variable error with deduce type auto requires an initializer because it has no way of knowing its type, unless it's initialized with something.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=142)** And because of this, and the fact there's no possibility of type narrowing auto variables are commonly initialized with an equal sign instead of the braced initialization we might use otherwise.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=154)** Alright, let's take a look at another use case.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=157)** This is auto-type 2.CPP from chapter four of your exercise files.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=162)** And you notice that here I have a vector.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=166)** Again, this is another STL container.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=168)** And we'll talk about these in a later chapter.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=171)** Now I have a for loop that relies on an iterator for the vector, and this is a very common technique.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=178)** And before C++ 11, with the autotype this was the way that you did it.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=183)** You needed to know what is the type of the iterator and the type of the iterator is all of that.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=189)** And so when I build and run this, you'll notice that it gives me all the values.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=195)** So we have the value there.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=197)** Well, 1, 2, 3, 4, 5, and we have the type of the iterator which is all of this crazy stuff And again, that would be different on every system.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=206)** I can replace all of this standard vector into iterator stuff.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=210)** I can just say auto and build and run it.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=213)** And we get exactly the same result because it knows that this VI.begin method returns that type of iterator.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=222)** And so the auto type will be that type of variable.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=228)** So now our code is clear and readable.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=230)** It's a lot less prone to error both in typing and in reading.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/the-auto-type?u=76281980&t=234)** Given the clear advantages, and the fact that auto preserves type safety I recommend you use auto as often as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), type. (2), type, (2), let (1), case. (1)
> **Env Vars:** cpp (2), stl (2)
> **Exercise Files:** exercise files (2), template (1)
> **File Paths:** auto-type.cpp (1), 2.cpp (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - the (1)

#### Qualifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=0)** - Qualifiers are used to adjust qualities of an object or a variable.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=5)** This is an example of a variable declaration with qualifiers.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=9)** In this example, the const and static keywords are the qualifiers.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=14)** They tell the computer that this variable will be immutable.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=18)** That's the const qualifier, and that it will have static storage duration.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=23)** There are two types of qualifiers in C++, CV qualifiers and storage duration qualifiers.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=30)** CV stands for constant and volatile.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=34)** Const marks a variable as read only or immutable.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=38)** It's value cannot be changed once it's been defined.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=42)** Mutable is used on data members to make them writeable from a const qualified member function.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=48)** I covered this in the companion course C++: Advanced Topics.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=53)** Volatile marks a variable that may be changed by another process.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=58)** This is rarely used and it's partly deprecated in C++ 20.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=62)** It may be useful for external variables under very specific circumstances.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=68)** Storage duration qualifiers are used to define the duration or lifetime of a variable.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=75)** By default a variable defined within a block has automatic lifetime where the lifetime of the variable is the duration of the block.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=83)** There's no qualifier for this because it is the default.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=87)** Variables declared as static have life beyond the execution of a block.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=92)** Static variables live for the duration of the program.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=95)** Static variables are commonly used for keeping state between usages of a given function or a method.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=102)** By default a variable defined outside of any block is static.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=108)** Register variables are stored in processor registers.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=111)** This can make them faster and easier to access and operate on.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=115)** This qualifier is taken as a suggestion by the compiler.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=119)** The compiler may or may not actually store the variable in a register.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=124)** Extern variables are defined in a separate translation unit and are linked with your code by the linker step of the compilation process.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=133)** Let's take a look at a couple of qualifiers and code.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=136)** Let's switch now to Xcode.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=138)** This is qualifiers.cpp from chapter 3 of the Exercise Files.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=143)** And we have this function here and you notice that it has inside its function block it declares an integer, a variable named X, the value of 7, and then it increments it before returning it, so it will return on 8.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=157)** And here's our main function where we have another integer.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=161)** This one is named I, it has value of 42, and we go ahead and we print that with the c out format.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=167)** I'll go ahead and run it, and you'll see it says, "The integer is 42."
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=171)** Now, if I qualify this integer here with const, it still works the same.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=176)** We'll build and run it here.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=177)** We have exactly the same value, but if I try to change the value, if I say I equals say 73 and when I build, you notice that we get an error and it does not build.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=188)** It says, "Build failed. Cannot assign variable "i" with const-qualified type 'const int.'
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=194)** So when we qualify a type with const, it's said to be const qualified.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=199)** And that means that it's immutable, read only, cannot be changed.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=203)** So we cannot do that.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=207)** On the other hand, we have a static variable up here.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=210)** And so if I take this, and I'll duplicate it, and I'll say, "func returns," and we'll call it here.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=222)** When I build and run, you'll notice that it returns an 8 like we expected.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=226)** And if I run it say three times, it will return an 8 every single time.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=230)** On the other hand, if I qualify this with the static qualifier, now it's storage duration is static.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=237)** It no longer discards that variable and reinitializes it each time the function is called.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=244)** In this case, it initializes it once.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=247)** And it uses exactly that same variable in that same static memory space every time it's called.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=254)** So if I call it three times, it will print 8, 9, and 10, and we'll go ahead and run it, and you see it prints 8, 9, and 10.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=261)** Qualifiers are used to control the quality of variables.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=264)** Some of these like const and static you'll use frequently.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/qualifiers?u=76281980&t=267)** Others are good to know about for when you need them or when you see them in someone else's code.

> [!info]- Semantic Content
>
> **Code Keywords:** static (11), const (10), function (6), let (2), default. (1)
> **Definitions:** is an  (1), stands for (1), means that (1), is called (1)
> **CLI Commands:** make (2)
> **File Paths:** qualifiers.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - qualifiers (1)

#### Type aliases
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=0)** - [Instructor] Type aliases can be handy in instances where a type declaration becomes cumbersome or it may vary on different target systems.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=8)** This is typedef.cpp from chapter four of the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=13)** And you'll notice that I'm including this C standard int ,cstdint, header.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=19)** And this defines these types, uint32 t and uint64 t.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=26)** And what these are unsigned integers of a specific size, 32 bits and 64 bits respectively.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=33)** And these are defined in this header.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=37)** Now how are they defined?
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=38)** They're defined using typedefs.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=40)** So we have two typedefs here.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=41)** We're going to be calling these types points t and rank t.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=46)** So points t will be an alias for uint32 t and rank t is an alias for uint64 t.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=54)** And we're using these here in our structure for a scoring system of some sort.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=59)** We have points and we have rank.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=62)** And I initialize it down here and I print out the values here.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=67)** And we'll go ahead and run this.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=69)** Score s had five points and a rank of one.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=73)** So this is actually pretty handy and you'll see it quite a lot.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=77)** The more modern way to do typedefs is with a using alias.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=80)** And so we're going to, instead, we're going to delete these and we're going to say using points t equals uint32 t.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=92)** And we'll do the same thing for rank t.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=96)** And we build and run we'll notice that it works exactly the same.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=100)** This does the same thing as our typedefs but the using alias is more flexible and works with C++ template parameters.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=108)** And I tend to favor the using alias and I suggest you do the same.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=113)** Providing a simple alias like this can be convenient in providing architecture independent types.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/type-aliases?u=76281980&t=118)** In fact, the types in the standard end library are created with aliases just like these.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), delete (1)
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** typedef.cpp (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Primitive arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=0)** - [Instructor] The primitive array type is commonly called a C-array because it's inherited from the C language.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=7)** A primitive is a type that's defined as part of the language, as opposed to a derived type that's defined in a structure or a class.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=15)** The array is a primitive type.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=17)** Primitives are essential tools for building derived types.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=21)** There's also an STL class called array and this can lead to some confusion.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=26)** This lesson is not about the STL class.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=30)** This lesson is about the primitive array data type or the C-array.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=35)** An array is a fixed size container of objects where each object is the same type.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=42)** This is a definition for an array of integers.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=45)** The value in the square brackets defines the size of the array.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=49)** This array has room for five integers.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=52)** Once defined, the size of the array cannot be changed.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=56)** At this point, the array is uninitialized.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=59)** So each of the five integer values are undefined.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=64)** It's always a good idea to initialize a newly created object.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=69)** The empty curly braces will initialize the integer array so all its values are zero.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=75)** Arrays are indexed with integer values, so the first element is always zero.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=80)** So an array with a size of five will have elements numbered zero through four.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=86)** This sets the value of the first element, element zero.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=90)** The value in the square brackets is the index.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=94)** This expression assigns a value to the element at index zero, which is the first element of the array.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=102)** Array elements may also be accessed as if the array were a pointer.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=106)** This statement has exactly the same effect as the previous statement.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=110)** This is a very common practice, so you'll need to recognize it when you see it.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=114)** This defines an integer pointer and assigns the address of the array to the pointer.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=120)** Notice that you don't need the address of operator to get an array's address.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=125)** This is because an array may be accessed as if it were a pointer.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=130)** This assigns the value two to the first element of the array.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=134)** Because the pointer was initialized to the address of the array, it is pointing to the first element.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=140)** This is the C and C++ operator for incrementing a value.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=146)** You can increment the pointer and it will point to the second element.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=149)** In C++, pointers are strongly typed so they know the size of what they point to.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=155)** When you increment a pointer, it always increments by the size of the object or type it is defined with.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=162)** So this assigns the value three to the second element of the array.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=168)** This is another common technique in C++.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=170)** Here we increment a pointer and use it in the same expression.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=175)** It's just a shortcut for the separate increment and assignment of the previous two statements.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=180)** You may also initialize an array using an initializer list.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=185)** This both declares the array and assigns the values one, two, three, four, and five to the five elements in the array.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=192)** It's very convenient and you'll see it a lot in newer code.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=197)** When using an initializer list, you may omit the size parameter in the square brackets.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=202)** The compiler will infer the size of the array from the initialization.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=207)** This is array.cpp from chapter four of the exercise files.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=211)** This is a simple array of five integers.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=213)** I'm going to go ahead and run this.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=215)** And you see that it prints out the five elements of the array, integers valued one, two, three, four and five.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=223)** The array is declared with an initializer list.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=227)** An initializer list is enclosed in curly braces like this.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=231)** The for loop prints all the elements of the array.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=234)** This is a range for loop, the most common way to traverse an array.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=238)** Notice the use of a const reference for the value.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=242)** This is also very common.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=244)** The reference means we don't make a copy of the value and the const qualifier makes it so we cannot change the value in the array.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=252)** Format is used to print each element in the array.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=256)** Elements are indexed beginning at zero, so element two would be the third element.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=263)** So if I were to say auto x equals array sub two, like that, and then print it, I'll go ahead and run this, and you see that x is three.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=279)** The subscript two is the third element in the array.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=283)** And the third value is three.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=286)** We could update the element to a different value.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=290)** We could say array sub two equals 42.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=295)** And when I run it, now that element, you might want to put that above the assignment so that it gets the new value, and when I run it, we see that the value is 42.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=306)** So take some time to experiment with this array until you feel you understand it well.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=311)** The primitive array is a fundamental part of C++ and you'll see it often.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/primitive-arrays?u=76281980&t=317)** It's useful as a basis for more complex structure and classes, and on its own as well.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), type. (2), this. (2), const (2), this, (1)
> **Definitions:** is a  (8)
> **Env Vars:** stl (2)
> **Prerequisites:** you'll need (1), initialization (1)
> **File Paths:** array.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### C-strings
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=0)** - A primitive C string is a special case of an array, not to be confused with the string class in the standard template library.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=8)** The primitive string is often called a C string.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=11)** This is working .cpp from Chapter four of the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=16)** A primitive string is just a special case of an array of characters.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=21)** So let's take a look at a primitive string.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=24)** I can say const care and S with the brackets and initialize it with a string in quotes.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=33)** And I can see out and just say, format like this, and I go ahead and build and run that and you see it prints out the string.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=48)** What's interesting is that because this is simply an array of characters, we can initialize it with the string like this as a shortcut but what it really is, is the same as doing this.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=62)** It's the six characters of the word string, followed by a zero value or a null terminator.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=70)** When I build and run this you see that it works exactly the same because the C string is simply an array of characters terminated with a zero.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=78)** And this is sometimes called a null terminated string.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=82)** It is more commonly initialized like this, but it's exactly the same thing.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=89)** So you can access the individual characters just as you would in an array.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=94)** You can say four const auto reference c:s and for each one, we can print out the individual character.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=109)** And when I build and run this, you see that it prints out each of the individual characters plus a blank one.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=116)** And that blank one is the null terminator.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=118)** That's the zero at the end.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=120)** So that array actually doesn't just have six elements.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=122)** It has seven.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=124)** Seventh element being the zero or the null terminator.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=128)** If I don't want to print that, I can simply say if C like this, and it checks to see if this C is true or false with zero being false and anything else being true.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=140)** And so in the case of the null terminator, it simply won't print it.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=144)** So I can build run and you see it just prints the six elements that are not null.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=149)** It's very common to use a four loop using a pointer like this.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=154)** A more traditional four loop say, const auto asterisk for a pointer, P equals S and asterisk P testing for the null terminator and increment the P.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=170)** And now we no longer need that.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=173)** And instead of the C we say asterisk P we de-reference the pointer.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=178)** And when I run this build and run this, you see it has exactly the same result.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=183)** So this is the more traditional C four loop where the initializing expression is to assign a pointer with the address of the array.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=193)** Remember that the array symbol itself represents the address of the array.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=200)** And then the while condition is while what's pointed at by the pointer is not null.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=205)** And then we increment with the increment operator the ++ operator.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=211)** So a constant string, and this here is a constant string in the quotes, a constant string is actually a C string.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=220)** So even though a C string is an array, the most common way to declare a string is with a pointer and a constant string.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=229)** So we'll most often see this written more like this.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=234)** And it has exactly the same effect.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=237)** It works exactly the same.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=239)** What we have here is the constant string and we're simply declaring a pointer that points to it.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=246)** You'll often see it initialized with an equal sign instead of the brackets, or we can do the same thing here and we can use the brackets.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=255)** And this all works exactly the same.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=257)** In summary, a string is simply a C array of characters.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=261)** And an array is a structure of variables of the same type stored contiguously.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/c-strings?u=76281980&t=265)** Because the array is guaranteed to be stored contiguously, it's also easy to iterate with pointers and C++ syntax lends itself well to this usage.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (5), const (3), this. (3), let (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** template (1), exercise files (1)
> **Speakers:** - a (1)

#### Structures
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=0)** - A structure is an aggregate of variables in C++, it's a simple way of collecting a number of disparate variables in a single container.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=9)** This is struct.cpp from chapter four of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=14)** And here we define a simple structure that contains a few different types of variables.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=19)** Variables in the structure are often called members or sometimes properties.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=24)** This structure contains three members, an integer, a double and a C-string.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=30)** The structure itself is simply the definition, it's very much like an aggregate type and it's used as a type in the code.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=38)** Here, we define a variable or an object based on that structure.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=43)** So the structure is type capital S and the object is S-one and we're initializing it with this initializer list which simply contains the three different values separated by commas, so the integer, I is three, the double D is 47.9 and the C-string S is string-one.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=67)** Individual members of the structure are accessed using dot notation.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=72)** And over here in our format statement, we have S one dot I.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=78)** So that's the I-element from the object S-one that's based on the structure capital S and the D-element is S-one-dot-D.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=87)** And the S-element is S-one-dot-S.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=90)** So I'll go ahead and I'll build, and I'll run this and you see, our result is the three element values.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=97)** I can use dot notation to both read and write values.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=101)** So I can say S-one-dot-D equals say 73.0.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=109)** And when I build and run, you'll notice that our D-element now says 73 instead of 47.9.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=117)** You can access members of a structure from a pointer with the pointer member D-reference operator.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=123)** So if I come over here and I say auto, asterisk, SP equals the address of S-one then instead of this, I can say SP-dash greater than this is the pointer member D-reference operator it accesses a member through a pointer.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=146)** And you'll notice when I build and run this we get the same result or D-member has been changed to 73.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=153)** And if I wanted to, I could change all of these to SP-dash greater than, like that and we would get the same result.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=163)** The structure is an important part of C++ programming.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/structures?u=76281980&t=167)** And we'll see many more examples throughout this course.

> [!info]- Semantic Content
>
> **Versions:** 47.9 (2), 73.0 (1)
> **Code Keywords:** struct (1), this, (1)
> **Definitions:** is an  (2)
> **File Paths:** struct.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - a (1)

#### Challenge: Library card
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=5)** - [Instructor] For this challenge, you'll create a data structure for a library catalog card.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=11)** Most libraries used to have a card catalog, a large cabinet of drawers filled with 3" x 5" cards where you would look up a book by its title or author.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=21)** Today, this is mostly online, but many libraries still use card catalogs.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=27)** Each card looks something like this, with the title of the book, the author, the publisher, and other relevant information.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=35)** For our catalog card, we will carry the following information: the title of the book, the author, the publisher, the subject, the International Standard Book Number is a common identifier for books, WorldCat or OCLC is another common identifier for books, the Dewey Decimal System is common in physical libraries, the year of publication, the year of the book was acquired by this library, how many copies we have in stock.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=67)** And you'll need to decide on a data type for each element in the structure.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=71)** I'm not going to tell you which type to use for each item, but here's some general guidelines.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=77)** A C-string is useful for anything text-based, or anything that should be displayed in a certain format.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=84)** Integers are good for numerical items that may be used as an operand in a mathematical expression.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=91)** It's worth thinking about something like a Dewey Decimal format.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=95)** This is two separate numbers which each have numerical properties.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=99)** Again, use your best discretion.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=102)** We've been using cout and format, so you should be able to easily use them to display your results.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=108)** The purpose of this challenge is for you to use your knowledge of C++ data types to choose those data types that work best in this context.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=117)** I expect this challenge to take you about 15 minutes or longer.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=121)** If it takes longer, that's fine.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=123)** Take your time.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=124)** Experiment a lot.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-library-card?u=76281980&t=125)** I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Env Vars:** oclc (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### Solution: Library card
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=5)** - [Instructor] Here's my solution for library catalog card challenge.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=9)** This is 04-solution.cpp from chapter four of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=15)** The structure for the card catalog card is at the top.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=19)** It doesn't need to be here.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=20)** You could have put it inside the main function and that would work also.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=24)** The structure is pretty simple.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=25)** I've used const care pointers for the strings and short integers for the numeric values.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=32)** You could have also used character rays for the strings, simple ints would've worked fine for the numerics as well.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=39)** Notice that the Dewey decimal value is two separate integers.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=43)** This allows me to sort them more easily.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=46)** These are numeric values and they're used that way.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=49)** I print everything using cout and format as we've been doing throughout this course.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=55)** And you notice that the Dewey decimal value is two integers separated by a period.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=62)** Go ahead and run this and you can see my result here.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=67)** So this is my solution.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=69)** Yours may be similar, it may be different.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-library-card?u=76281980&t=71)** As long as it works, and hopefully, you've learned something from the process.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), const (1)
> **File Paths:** 04-solution.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Operators

> [↑ Back to Table of Contents](#table-of-contents)

#### Common operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=0)** - [Instructor] There are a few very common operators that you're probably already familiar with.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=4)** For completeness sake, let's go over them quickly.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=7)** This is operators.cpp from chapter five of the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=13)** The assignment operator is used to copy a value from one object to another.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=18)** So we can come down here and we can say x equals y.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=24)** And then go ahead and print x.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=31)** And when I build and run this, you'll notice well, we have our initial values of 5 and 47.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=38)** So we have x equals 5 and x equals 47.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=41)** And then we assign y to x using the assignment operator, and we have x equals 47.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=49)** The assignment operator's also called the copy operator.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=52)** And in this case, it copies the value from y into x.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=59)** There's also the standard four function arithmetic operators.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=63)** We can say x equals y plus x.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=68)** And we'll get the sum, which should be what?
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=71)** 52, yeah, 52.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=73)** Or we can say x equals y minus x.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=77)** And we'll get 42.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=80)** And we have multiplication as well.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=84)** And we have division.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=87)** Now, you'll notice, our division is integer division.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=89)** It does not give the remainder.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=91)** You get the remainder with the modulo operator, which is a percent sign.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=97)** So that's division is a nine with a remainder of two.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=101)** Each of these operators returns a temporary object, which is a new object, rather than modifying any of the objects in the equation.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=110)** And that new temporary object is then copied with the assignment operator to the variable x.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=117)** Comparison operators are used to compare for equality or relative value.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=123)** These operators are also called relational operators.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=126)** So we can come in here, we can say if x is equal to y.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=131)** So the double equal sign is the equality comparison operator.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=137)** And we can say cout true.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=142)** Else cout false.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=146)** And when I build and run this, we see that it's false because x is not equal to y.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=154)** We have a number of comparison operators available.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=157)** We have greater than and less than.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=159)** So if x is greater than y, which it's not, so it should be false.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=163)** Or if x is less than y, which it is, so we should get true.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=168)** We also have less than or equal to, which should also get true.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=173)** And we have greater than or equal to.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=177)** And we have not equal to.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=179)** And that one should come out true.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=182)** The comparison operators are used to compare for relative value or for equality.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=187)** These are simple and effective operators that work on any scale or type.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=192)** Logical operators are used for testing logical conditions.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=196)** So let's create a couple of Boolean values, logical values, so I can say bool a true, like this.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=204)** Or I could use auto.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=208)** And either form works.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=212)** And if we want to just how these Boolean types work, let's go ahead and look at their values.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=217)** So cout format a is, let's put all that in quotes, as it should be.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=228)** And do the same for b.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=232)** Now, format recognizes the Boolean type and it will print out true and false for these.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=238)** So we can see that both of these are equivalent initializations.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=243)** So any nonzero value's considered true.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=247)** Any zero value's considered false.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=249)** So here in a, which is declared as a Boolean type, I could put in 47 and we still get oh, look at that.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=257)** It can't be narrowed because we've got it in the brackets.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=261)** See, that's the beauty of the brackets.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=262)** It really doesn't allow you to do stuff like that.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=264)** But this allows it to narrow.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=265)** And so a equals true.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=268)** So any nonzero value is considered true.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=274)** The bool type is generally implemented in the smallest size possible, usually eight bits.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=279)** And so if we come out here and we say take a look at the size of a Boolean, we can say size of a is.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=291)** And we get the size with the size of operator.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=296)** And we'll multiply it by eight for bits.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=298)** And I'll come in here and I'll say bits.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=302)** And when we build and run this, we see that we get an eight-bit size, which is the smallest natural size of this processor and it's the size of a short int or a char type.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=313)** C++ has three Boolean logical operators and/or a not.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=319)** And so we can come down here and we can say if a and b.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=327)** So a and b should be false because b is false.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=332)** If we say a or b, we get true.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=338)** And there's also a not operator.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=341)** And it's a unary operator so we only need one of these.
>
> **[5:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=343)** If I say not a, we should get false because a is true.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=348)** If I say not b, we'll get true.
>
> **[5:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=351)** And of course, the operands to the Boolean operators may be the result of any logical expression.
>
> **[5:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=357)** So I can say if 42 is greater than 5, and b, I'll get false because b is false.
>
> **[6:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=366)** And if I say and a, I get true.
>
> **[6:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=370)** Now, the interesting thing about all of this is that the and and or operators perform short circuiting evaluation and that means if the condition is satisfied after evaluating one side of the operator, the other operand is not evaluated.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=385)** So if I were to say 42's greater than five or b or either a or b, it doesn't matter what I put on this side 'cause we have the or operator and it's already satisfied over here and so the right-hand side of this is never even evaluated.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=403)** And you notice we can get this warning that the code will never be evaluated on the else because we have constants here.
>
> **[6:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=409)** So we can say y is greater than x and get the same result.
>
> **[6:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=415)** Some people notice that there's no Boolean exclusive or operator, an XOR operator would evaluate true if one and only one of the two operands was true.
>
> **[7:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=426)** There's several reasons for this omission.
>
> **[7:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=428)** According to Dennis Ritchie, one of the original designers of the C language, the XOR operator would be superfluous because it cannot be short circuited, it would not work like the and or or operators.
>
> **[7:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=439)** XOR can be easily implemented with a simple a not equal to b.
>
> **[7:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=446)** And this is exactly the same as an XOR operator.
>
> **[7:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=448)** And of course, it's true because a is true and b is false.
>
> **[7:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=453)** If you're not sure if your operands are actually Boolean types, you can put a bang in front of them, a not operator and get exactly the same result but that not operator forces that operand to be a Boolean type.
>
> **[7:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=469)** So logical operators are simple and straightforward.
>
> **[7:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=472)** They operate on logical conditions.
>
> **[7:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/common-operators?u=76281980&t=474)** They may be used for logically combining conditions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (3), type. (3), case, (1), function (1)
> **Env Vars:** xor (4)
> **Definitions:** is a  (3)
> **File Paths:** operators.cpp (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Compound assignment operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=0)** - [Instructor] C++ supports compound assignment operators that allow you to combine an assignment with an arithmetic operation.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=8)** These are both convenient and efficient.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=11)** This is operators.cpp from chapter five of the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=16)** We'll come down here and we'll simply create a compounded assignment operator.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=22)** So what this does is this adds Y to X.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=28)** It's exactly the same as X equals X plus Y, with the difference that with the compound operator, X is only evaluated once.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=39)** And this is a distinction that may make a difference under some circumstances.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=42)** So it's good to be aware of.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=44)** But otherwise, it's exactly the same.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=46)** So if I come down here and I print out X after the operation, we'll go ahead and run this.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=53)** You see that after our compound assignment, X is now 52.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=58)** We've added the value of Y to X.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=63)** There's five different compound assignment operators, there's plus equals, there's minus equals.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=69)** So if I go ahead and run that, we'll get a negative value.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=72)** There's times equals, and there's divide equals.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=80)** And we might want to turn these around for divide equals, huh?
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=85)** And we'll go ahead and print Y instead.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=89)** And there's also the modulo equals for the remainder after the division.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=96)** The compound assignment operators are convenient, safe, and often more efficient than their common equivalents.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=102)** Feel free to use them wherever you would use the equivalent expression.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/compound-assignment-operators?u=76281980&t=106)** Just be aware of the slight distinctions.

> [!info]- Semantic Content
>
> **Warnings:** be aware (2)
> **File Paths:** operators.cpp (1)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Increment and decrement operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=0)** - [Narrator] C++ provides unary operators for incrementing and decrementing values.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=6)** So, unary operator means that it has only one operand.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=10)** Let's go ahead and create a variable.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=15)** And then we'll go ahead and we'll print that variable while incrementing it.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=22)** So this plus-plus in front of the X, that is a unary increment operator.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=28)** It's unary because it has one operand, the X, and it simply increments the X to its next value before returning it.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=37)** And so, well, let's just do this a few times here.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=40)** We'll build and run this.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=41)** See that our result is X is 6, 7, and 8.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=45)** So what's happening here, is it first increments the value, and then it returns the value.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=51)** There's also a decrement version of this.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=54)** Looks like that, and it works exactly the same.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=58)** It decrements the value, and then returns it 4, 3, and 2.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=62)** There's another version of each of these that first returns the value, and then increments or decrements it.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=68)** And that's the postfix version of these increment and decrement operators.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=74)** And so when I run this, you see our result as 5, 6, and 7.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=79)** Because we first return the 5, and then we increment it, and then we return the 6, and then we increment it.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=85)** So these are the postfix versions of these unary increment and decrement operators.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=92)** It's important to note that how these work with pointers, because a pointer is strongly typed, and the system knows the size of the object that it points at.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=103)** And so the increment and decrement will happen by that size.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=107)** So let's take a look at pointer increment dot CPP from chapter five of your exercise files.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=114)** And you'll notice that I have this alias here, aliasing the uint8.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=119)** That's a unsigned 8-bit integer, and I'm calling an int type.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=123)** And I'm using that throughout here.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=125)** I have an array of five of them, and these are 8-bit integers.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=129)** And I have a pointer that I've assigned to the array.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=132)** And then I call this print P with each of these, and incrementing after using the postfix version of the increment on the pointer.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=140)** And I'm just passing at the pointer.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=142)** So here's our print P function.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=144)** And we have a pointer to our int type, and you notice that it's const qualified.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=149)** And then I print it.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=151)** I print it two ways.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=152)** I print the pointer using this static cast.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=155)** This is just a little trick to get the format function to print the pointer.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=159)** And then I print the what's pointed at by the dereferenced value.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=165)** So I'm going to go ahead and run this, and you see that we have our pointer address and value is 1.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=171)** Our pointer address, value is 2.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=173)** So this is our array, and these are the first three elements of the array and their addresses.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=179)** So you notice that the increment operator increments the pointer by 1, 8, 9, 10, but if I change the size and make this a 16-bit integer instead.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=190)** Now you see why I'm using the alias, and just build and run that.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=193)** Now our increment, increments by 2, 8, 10, 12.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=198)** And if I make it 32 bits, now it'll increment by 4, 0, 4, 8.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=206)** It's also worth noting that pre-increment is slightly more efficient than post-increment.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=212)** So in other words, this is more efficient than that.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=217)** The reason for that is that with the post increment, the operator needs to first make a copy of the value and then increment, and then return the value before the increment, the copy.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=228)** And so it's just slightly less efficient and we'll get some more details on this in the companion course, C++ Advanced Topics.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=235)** But it's just worth being aware that this version with the pre-increment.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=239)** I'll go ahead and I'll build and run this.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=241)** Is very slightly more efficient than the post-increment, and there are circumstances where that may matter.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=247)** The unary increment and decrement operators are very useful and very common.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/increment-and-decrement-operators?u=76281980&t=251)** Keep in mind that the prefix version increments before returning the value, and the postfix version increments after returning the value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (3), this, (2), function (2), type. (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (1), is a  (1), in other words (1)
> **Warnings:** note that (1), keep in mind (1)
> **Env Vars:** cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### Operator precedence
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=0)** - [Instructor] Operator precedence is the order in which operators are evaluated in an expression.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=6)** This expression could have different results depending upon the order in which it is evaluated.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=12)** For example, using parentheses to bind parts of the expression together.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=16)** If we give precedence to the addition, we get this result, and if we move the parentheses around a bit, we get a different result.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=23)** And if we remove the parentheses altogether, we get yet a different result.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=28)** The order of evaluation without the parentheses is that the multiplication happens first, then the division, and then the addition.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=36)** It's as if it were parenthesized like this.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=40)** The point of understanding operator precedence is to be aware of the rules.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=44)** You don't need to memorize the rules.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=46)** There are plenty of handy reference tables available.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=48)** But you do need to know that this is how it works and ultimately, if you care about the order of evaluation of an expression, it may be best to use parentheses.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=59)** I've included this PDF of a handy operator precedence table in the exercise files.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=65)** It's also easy to find one online.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=67)** I keep a laminated copy by my workstation.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=71)** It shows all the operators available in both C and C++, with the highest precedence operators at the top and the lowest at the bottom.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=81)** The precedence is the order in which the operators are evaluated.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=85)** Operators near the top of the table are evaluated first.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=90)** Associativity is the order in which the operands are evaluated.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=94)** Most operands are evaluated left to right, except prefix unary operators and assignment operators, which evaluate their operands right to left.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=106)** It's important to understand operator precedence but it's not so important to memorize it.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=111)** It's easy to keep a chart near your workstation for when you need to read someone else's code who may not have been so considerate as to use parentheses.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=119)** Most of the time, though, it's a good idea to use parentheses to specify the order in which your expressions are to be evaluated.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-precedence?u=76281980&t=127)** That'll make your job easier when you want to read the code later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** this. (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Prime numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=0)** - For this challenge, you will write a program that calculates the first 25 prime numbers, that is, all the prime numbers under a hundred.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=14)** A number is considered prime if it's a natural number, that is, a positive number with no fractional part.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=20)** A prime number must be greater than one, so one is not a candidate, but two is.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=26)** And it cannot be a product of two smaller natural numbers.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=29)** Another way to say this is, its only factors are itself and one, or it can only be divided evenly by itself and one.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=38)** This is a list of the first 25 prime numbers.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=41)** Your results should match these numbers.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=43)** The purpose of this challenge is for you to use your knowledge of C++ operators to choose the operators that make sense in this context.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=52)** Expect this exercise to take about 15 minutes.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=55)** It's fine if it takes longer or if you want to spend extra time experimenting and trying different approaches.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-prime-numbers?u=76281980&t=62)** My solution is in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - for (1)
> **Non-Speech:** (beeping music) (1)

#### Solution: Prime numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=0)** - [Instructor] This is my solution for calculating the first 25 prime numbers.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=9)** This is 05-solution.cpp from chapter five of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=15)** This solution uses a couple of nested loops to iterate through the list of candidates and the potential factors for each candidate.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=24)** The outer loop simply counts from 2 to 99 and the inner loop tests each of the factors, each of the potential factors for that number.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=34)** Notice the use of the modulo operator to test for factors.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=37)** This is very convenient since we have integers.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=41)** If we find factors, then we set the prime flag to false, and this break sends us back to the outer loop for the next candidate.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=50)** If it is prime, we print it out and we end with a new line.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=55)** So let's go ahead and run this.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=57)** And you can see there are the first 25 prime numbers, all of them under 100.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=64)** This is my solution. Yours may be similar.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-prime-numbers?u=76281980&t=66)** It may be different, as long as it works and hopefully you've learned something in the process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **File Paths:** 05-solution.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Functions

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of C++ functions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=0)** - [Instructor] Functions are fundamental to C++.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=3)** Even in its object model, functions are the basis of class methods.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=8)** All code in a C++ program happens in functions, starting with the main function.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=14)** A function is a block of code that may be called by and may return a value to other code.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=21)** This is analogous to procedures or subroutines in other programming languages.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=27)** Functions allow you to generalize and modularize your code by creating containers for logical subsets of code and by allowing code to be reused.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=38)** Arguments surpassed to functions by value.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=41)** So when you call a function and pass the variable, the value and type of the function is passed to the function.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=48)** If the function then changes that value, the caller's copy remains unchanged.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=53)** For example, here we have a variable a with the value 7.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=57)** This variable is passed to a function, func.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=61)** After the function returns, we print the value.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=64)** The function assigns a copy of the value to a local variable named a.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=70)** This is a new variable.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=72)** It's in a different scope, and it's separate in every way.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=75)** So when this a is incremented in the function, only its local copy is affected.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=82)** The caller's copy remains unchanged and will print the number 7.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=87)** The alternative to call by value is called by reference.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=90)** You may implement call by reference explicitly with pointers.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=94)** In this example, the ampersand in the function call means we pass a pointer to a instead of the value of a.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=102)** The ampersand is called the reference operator or sometimes the address of operator.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=107)** In the function, the variable p carries as its value, a pointer to a.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=113)** So when we want to increment the value of a, we do so by de referencing the pointer.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=119)** The asterisk is called the pointer deference operator.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=122)** By passing a pointer, we explicitly call by reference.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=126)** Technically, it's still called by value, except in this case, the value is a pointer.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=130)** The value in the caller's variable will be incremented, and we will print the number 8.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=136)** This is called a side effect because the variable is changed outside its own scope.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=141)** In C++, you may also use the reference type to implement call by reference.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=146)** This makes the call by reference appear more implicit.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=150)** This is very common in C++, and it carries some inherent dangers if not implemented carefully.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=155)** In practice, its best to avoid side effects with references by declaring them with constant modifiers.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=163)** If you need side effects, I strongly recommend you use pointers instead.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=168)** In C++, functions are identified by their function signature.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=172)** This function, which returns the volume of a cuboid, is different from this function, which returns the volume of a cylinder, even though the two functions have the same name.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=183)** The return type, the name of the function, and the types of the function arguments are all combined to form the function's signature.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=191)** The full function signature, not just the name, is used to identify the function.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=197)** Let's take a look at a function in C++.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=200)** This is func.cpp from Chapter 06 of the Exercise Files.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=204)** Here, we have a simple function called func.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=208)** A function is declared with a return type, the name of the function, parenthesis, and a block of code.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=217)** The parenthesis may or may not include function parameters.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=221)** The body of the function is the block of code in curly braces.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=225)** Notice that main is also a function.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=228)** It's never called directly.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=230)** It's the main entry point of your program, and it's only called by the system.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=235)** A function is called by using the function call operator, and a function must be declared before it's called.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=243)** So I'll go ahead and run this.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=245)** And you see that maine calls func.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=248)** This is main. It calls this is a func.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=250)** But if I take the function itself and I move it to after main, like this, when we try to build, we get an error saying Use of undeclared identifier func.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=261)** This is because a function must be declared before it may be used.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=265)** Now, function declaration is different than a function definition.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=269)** This is a function definition.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=271)** We can declare the function in advance, and this is called a forward declaration.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=276)** We simply give the function signature, void func parentheses ; like this.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=283)** And now, it'll build and run just as it did before.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=288)** Let's go ahead and put this back in its original state.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=292)** Variables declared in a function default to automatic storage.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=296)** Other storage options are also available.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=299)** If we come into our function and we declare a variable, and we'll go ahead and print our variable, and we go and run this, we see that it prints out the value, i is 5.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=313)** But what's interesting about this, because this is automatic storage, if I increment the value and then say, call it a few times, you'll notice that it prints the same value each time, i equal 6, i equal 6, i equal 6, and that's because it's incrementing it with the prefix increment.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=332)** So it's incrementing it before it passes it to format.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=336)** Now, if I want to, I can change this to static storage.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=341)** And now, instead of being stored on the stack, which is temporary storage, it's being stored in permanent storage, well, permanent for the life of the program.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=350)** And each time we call it, its value will change from the increment.
>
> **[5:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=354)** So if I go ahead and build this and run it, see it says i is 6, i is 7, and i is 8.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=360)** So static storage is not on the stack.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=362)** It's called persistent storage.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=364)** And it's persistent for the life of the process.
>
> **[6:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=367)** Because automatic storage is stored on the stack, it's not suitable for large objects.
>
> **[6:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=372)** So it's always a good idea to avoid using automatic storage for anything larger than a few scalar values.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=379)** Functions are fundamental to C++.
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=381)** Variables declared in a function default to automatic storage.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-c-plus-plus-functions?u=76281980&t=385)** If you want your data to be persistent, you may declare your variables as static.

> [!info]- Semantic Content
>
> **Code Keywords:** function (40), this, (3), static (3), pass (2), type, (2)
> **Definitions:** is called (6), is a  (5)
> **Analogies:** analogous to (1), for example (1)
> **File Paths:** func.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Passing values to a function
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=0)** - [Instructor] Parameters are passed to a function by declaring them inside the parentheses of the function definition and passing them in the parentheses of the function call.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=9)** This is func.cpp from Chapter 06 of the Exercise Files.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=14)** Let's pass an integer to this function.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=16)** I'll start by declaring an integer inside these parentheses.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=19)** Let's say int a.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=22)** And we'll print out the value of a so we see what it is.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=26)** And then I'll pass a value inside the parentheses of the function call from main.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=33)** We'll go ahead and build and run this.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=35)** And you see that this value here gets passed the function and printed by the format statement, where it says the value is 47.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=46)** A function may also have a default value.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=48)** I can come up here and I can say the default value is 73.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=53)** And now when I call it without a value, it will print value is 73.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=59)** And when I call it with the value, it'll print value is 47.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=64)** This allows a function to be called with either zero or one argument.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=68)** This can be handy, especially in class constructors, as we'll see later in this course.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=73)** By default, functions in C++ pass variables by value.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=78)** Let's go ahead and take this default out.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=80)** We're not going to need this.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=83)** And what I want to do here is I want to print the value before and after the function call here.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=90)** So here we have a variable, int a 47, and we're going to pass that a variable to the function, and then we'll print its value after.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=100)** But inside the function, I want to change the value.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=102)** I'm going to say a = 73.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=106)** And what's interesting is, when I run this, you'll see that the value is 73 inside the function, but when we return from the function, the value is back to 47.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=118)** That's because this variable is an entirely different variable than the caller.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=124)** When the function is called, the value is copied to a new variable on a small data structure called a stack.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=133)** We'll get to that in a moment.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=135)** But that makes this entirely different than this.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=138)** And so that's what call by value means.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=140)** Means the value is taken to create a new variable inside the function, but it's a different variable than the one that was called.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=148)** You can pass by reference instead, and then you can actually change the value in the caller.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=154)** And do that simply by using a reference indicator here on the declaration.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=160)** So now this is a reference to a variable rather than the variable itself.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=165)** And now when I build and run, that's all I have to change.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=167)** You see the value is 73 in both places.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=171)** Now, obviously you can see, this is pretty dangerous.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=173)** You can see where this could have unintended consequences, and that's why it's common practice when using a reference to qualify it with a const qualifier.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=184)** And now when I try to build it, you'll notice that the compiler doesn't even let me change it in the function anymore.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=190)** I have to take that out in order to build and run this.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=192)** And then the value is 47 in both places.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=196)** Now, before we talk about why you would want to call by reference instead of call by value, let's look at one other way you can do this.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=204)** If I put an asterisk here instead of the ampersand, this is now a pointer.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=209)** And now I have to actually pass the address of the variable.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=213)** And now it's very obvious to everybody that I'm passing by reference.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=217)** So I can come in here and I can say what's pointed at by a = 73.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=222)** And of course I have to dereference the variable in order to print it.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=226)** And now when I run this, you notice that it's changed the variable in both places, but the caller knows that they're passing a reference.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=235)** As opposed with the reference type, this makes it obvious that it's being called with a reference.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=240)** And you'll see this a lot when you're interfacing with libraries that are written in plain C, because plain C doesn't have a reference type.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=247)** So call by reference is always accomplished with a pointer.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=251)** And of course you can also protect your pointer reference with a const qualifier.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=256)** And again, it won't let you change that value.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=260)** So why do we care about call by value versus call by reference?
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=264)** Internally, values are passed to and from a function on a small data structure called a stack.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=270)** The stack is relatively small space, requires processing power to manage.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=275)** Passing large values to a function requires copying large amounts of data on the stack.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=282)** This can be time consuming, and it can cause a stack to overflow, which can crash your program and create security vulnerabilities.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=291)** So when you pass something larger than a simple value, you'll usually want to use a reference or a pointer.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=297)** For example, let's say that I want to pass a string, and we will use an STL string for this.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=305)** I'm going to include the STL string library up here.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=308)** And I'll come down here and I'll declare a standard string.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=313)** We'll call it s, and we'll give it a value of this is a string.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=319)** Now, in my function here, I'm going to declare a standard string reference, s, and we'll const qualify it because that's always a good idea with references.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=332)** And we'll say the value is s, and it'll print the value of our string.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=338)** Now, I call our function with s like this, and we'll go ahead and we'll print it after as well.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=346)** So now when I build and run this, you notice it works as expected, but what's happened here is this could be any large data structure, could be a vector with thousands of values or it could be a large string or whatever.
>
> **[6:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=361)** And I want to pass it to my function, I want my function to do something with it, but not necessarily change it.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=368)** But I don't want to pass all that data on the stack because the stack is a limited space, requires processing power, it can overflow and create, as we said, security vulnerabilities.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=377)** So instead, I'm passing it as a reference.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=380)** Here in the function call, we don't necessarily care.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=383)** Where we care is here in the function.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=385)** And so I've declared this as a const reference, and that'll ensure that all that data is not copied to the stack, that instead we're using the data in its original location through the reference.
>
> **[6:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=396)** By default, C++ function parameters are passed by value on a stack.
>
> **[6:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/passing-values-to-a-function?u=76281980&t=401)** You can pass pointers or references if you need to pass larger values, but you need to do so explicitly and safely.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), pass (12), let (7), this. (6), this, (4)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Env Vars:** stl (2)
> **File Paths:** func.cpp (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Returning values from a function
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=0)** - [Instructor] A function may return a value back to its caller with a return statement.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=5)** This is func.cpp from chapter six of the exercise files.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=9)** Let's return a value for our function.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=11)** In order to return a value, we need to specify a return type.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=15)** And this void return type means that the function returns nothing.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=20)** So we want to give it a return type that will allow us to return a value.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=23)** Let's return an int.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=25)** And we'll take an int as our parameter or argument.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=29)** Int a.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=31)** And we'll return with the return statement, a times two.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=35)** So, it simply takes a value and it multiplies it by two and returns it.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=39)** So, let's call it with value.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=40)** We'll give it a value of 42.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=42)** We'll take that return value and put it in a variable.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=45)** Which we'll call X.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=48)** And we'll go ahead and we'll print that out.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=51)** Now, when I build and run this, you see that it prints, value is 84.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=55)** Which is 42 times two.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=58)** So, let's take a look at what happens here.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=60)** We call the function with the value 42.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=64)** And that value is pushed on the stack.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=67)** And popped off the stack as this integer a.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=70)** So a copy of that is now integer a.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=75)** And then we multiply a by two.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=78)** And we return again on the stack at the value 84.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=83)** And that value gets copied again, into this variable X.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=87)** Where we print it out.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=89)** So, all the stuff's happening on the stack.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=91)** Things are getting pushed onto the stack and popped off of the stack.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=93)** And in particular what we're concerned with in this case is our return value is also getting returned on the stack.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=100)** And this means, as we know from our previous lesson, you can't return anything large.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=105)** Because the stack is a limited space.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=108)** It requires processing power to push things and pop things off of it.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=111)** And if you put too much data on a stack of limited space, you can get what's called a stack overflow.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=118)** And this can create security problems.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=120)** So, what we need to do if we're going to return something large, is return it as a reference.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=125)** And let's show you how that's done.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=127)** We're going to start by importing the string library.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=133)** I'm going to come down here, we're going to return a standard string reference.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=139)** We'll go ahead and we'll create a string inside the function.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=142)** And I'm going to make it a static string.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=145)** We're making it a static string because again, we don't want to store it on the stack.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=149)** And we remember that storage of variables inside a function, default to automatic storage.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=155)** Which is stored on the stack.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=157)** So, we create a static string.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=159)** And we'll give it a format.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=162)** So the format function returns a string object.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=165)** And we can say, a times two.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=170)** And then we can simply return.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=172)** Oh, we need to give the string a name, right?
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=176)** We return s.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=178)** And because we're returning s through a reference, it will return the reference to our s.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=184)** It'll return a reference to exactly this s.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=188)** And so, we probably want to make that const.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=190)** So we can make that const string reference.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=193)** Again, when you're returning a reference, you want to make it const, if at all possible.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=198)** Unless you really want the side effects.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=201)** Now, all of this doesn't even need to change.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=204)** Of course we can now make this a reference as well.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=208)** And I'll make const.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=210)** And when we build and run, it says value is, value is 84.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=215)** So that second value is our string, right?
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=219)** We can even take out this first value is.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=221)** And we can just print it like that.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=222)** And it'll say value is 84.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=224)** And that's from this format up here, which gets assigned to this static string.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=230)** In static memory space.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=232)** It gets returned as a const reference.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=235)** And it gets assigned to this X variable as a const reference.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=240)** And printed out here, in our format statement.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=244)** So, returning value from a function is very much like passing values to a function.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/returning-values-from-a-function?u=76281980&t=249)** And you want to be careful of variables that are stored on the stack.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), const (6), let (5), static (5), type. (1)
> **CLI Commands:** make (6)
> **File Paths:** func.cpp (1)
> **Documentation:** stack overflow (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Using recursion
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=0)** - [Instructor] In mathematics a recursive function is a function that refers to itself.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=5)** For example, a factorial indicated mathematics by the exclamation mark, is defined as the product of all positive integers less than or equal to its prime factor.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=17)** In other words, the factorial of five is equal to five times the factorial of four.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=24)** This is an example of recursion in mathematics.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=28)** The factorial of n is equal to n times the factorial of n minus one.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=34)** Let's try this in C++.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=37)** This is recursive factorial.cpp from chapter six of the exercise files.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=43)** And here we have a simple function called factorial which takes an unsigned long and returns an unsigned long, and it calls itself.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=52)** It returns n times the factorial of n minus one, calling its own function.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=58)** And if n is less than two it returns one and that ends the recursive loop.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=64)** So the reality here is for every recursive function call memory is allocated for the parameters for any local variables.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=73)** For the return value for other function call overhead in all of this is on the stack.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=79)** So we wouldn't want to do this for very, very large numbers.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=82)** And a loop is often more efficient.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=85)** Go ahead and run this.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=86)** And you can see that the result is 120 which is indeed five times four times three times two times one.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=94)** C++ supports recursive functions.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=96)** But you need to be careful for problems that may require a lot of iterations.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=100)** Recursion can quickly use up a lot of resources which can easily create buffer overflow related security vulnerabilities.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/using-recursion?u=76281980&t=108)** It's often better to find a different solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (1), this. (1), require (1)
> **Definitions:** is a  (1), refers to (1), defined as (1), in other words (1), is an  (1)
> **File Paths:** factorial.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Non-recursive factorial
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=5)** - [Instructor] Your challenge for this chapter is to create a non-recursive function for calculating factorials.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=12)** Earlier in this chapter, we covered a recursive function that calculates factorials.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=16)** This function is interesting and clever, but it has a serious flaw.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=21)** Each iteration adds a function called the stack along with its parameters and return values.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=27)** For large values of n, this can quickly overflow the stack causing crashes, errors and worse.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=33)** The challenge is to create a non-recursive function to perform the same calculation.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=39)** By way of refresher, the factorial of n is the product of all positive integers less than or equal to n.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=46)** The purpose of this challenge is for you to create a function that takes a value and returns a value.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=52)** It should take about 15 minutes, but it's okay if it takes longer or if you spend time experimenting and learning.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-recursive-factorial?u=76281980&t=59)** And remember, your function should not use recursion.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7)
> **Cross-References:** earlier in (1), we covered (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Non-recursive factorial
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=0)** - [Instructor] This is my solution for calculating a factorial without recursion.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=10)** This is 06-solution from chapter six of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=15)** Solution is very simple.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=16)** I've created a simple function that takes one unsigned long integer and returns one unsigned long integer.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=24)** And it uses a single while loop and the compound multiplication operator and the prefix decrement operator to calculate the product of all values less than or equal to N.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=37)** Notice that my loop control is while N is greater than one.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=41)** There's no need to multiply by one because any number multiplied by one is equal to itself.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=46)** And this gives the loop a nice termination.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=49)** We return the result and we'll go ahead and build and run.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=52)** And we'll see that factorial of five is indeed 120.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=56)** This exercise is more about creating the function than it is about the algorithm itself.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-recursive-factorial?u=76281980&t=61)** Although understanding the non recursive algorithm does have its own value.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Classes and Objects

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of classes and objects
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=0)** - [Instructor] In C++, classes're treated as custom data types.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=4)** They're used like any type provided by the C++ language.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=8)** Classes and objects're extremely powerful, with many features and capabilities.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=13)** This chapter will cover the basics, which should be enough for many purposes.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=17)** For more detail, please see the companion course, "C++: Advanced Topics."
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=22)** Let's start by defining some terminology.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=25)** First, let's look at the words, class and object.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=28)** The definition of a class, using the class keyword, is the class itself.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=34)** You may then use the class to create an object.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=37)** The object is sometimes called an instance of the class.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=41)** Sometimes you'll hear the verb form, instantiate, to describe the process of creating an object.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=47)** Class members, sometimes called object members, are the contents of a class.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=53)** There're two types of members.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=54)** Data members are the members that represent encapsulated data.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=59)** Data members're sometimes called properties.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=61)** Function members are the functions associated with the class.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=65)** Function members're sometimes called methods.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=68)** Constructors and destructors are special function members that're called when an object is created or destroyed, respectively.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=76)** A constructor is called when the object is created.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=79)** There may be several constructors defined, but only one is called for each instance of an object.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=85)** Constructors're named with the name of the class, and they have no return type.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=90)** The destructor is called when the object is destroyed.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=93)** Only one destructor may be defined for each class.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=97)** The destructor is named with a tilde character followed by the name of the class.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=103)** C++ classes allow you to create fully-realized data types that work exactly how you want them to.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=109)** Using C++ classes, you may create constructors for a variety of different usages; allocate and deallocate memory appropriately, so that your objects run smoothly; overload operators so that your objects can use those operators intelligently; and create conversion operators so that your objects behave as you expect them to in different contexts.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=132)** Let's take a look at an example of a very simple class.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=135)** This is "class.cpp" from chapter seven of the exercise files.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=139)** This is an example of a very simple class, holds a single value and provides an interface to set and get that value.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=147)** The class definition, here on lines 10 through 15, defines the class.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=153)** We have the keyword class; we have the name of the class, C1, with a capital C; and then inside this block, which is terminated with a semicolon, we have the actual definition of the class.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=166)** A class defaults to private accessibility.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=169)** Private members're not accessible from outside the class.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=173)** The public keyword declares that the members below are publicly accessible.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=178)** So this is like the interface to the class.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=181)** Data members, like this int C1val right here, are usually private, and they're called properties.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=188)** Function members are how you access and manipulate the data.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=193)** These're usually public, although sometimes there are private ones.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=196)** And function members are often called methods.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=199)** You can see down here in main, we instantiate, we create an object, called 01, based on the class, C1.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=208)** And then we call the function member setvalue, with the parameter 47, an integer, to set the value of the data member, the private data member, the property.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=220)** And then we use getvalue on the object, 01, to retrieve its value.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=226)** So let's go ahead and run this, and you see that it says the value is 47.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=230)** It's often considered good practice to separate the interface and the implementation.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=235)** And we do this by taking these function members, and defining them outside of the class.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=241)** We'll do this like this.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=242)** We'll name this C1::, and make it like this.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=251)** And then we have to take the block out from up here.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=254)** So now we have the declaration of the function inside the class, but the definition of the function is outside the class.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=262)** And you let the compiler know that this is associated with the class by using the scope operator and the name of the class.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=270)** Let's do the same with getval.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=275)** And you'll notice that when we build and run, this works exactly the same.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=279)** The difference here is that we now have the implementation of these functions separated from the interface, which is how you use the class.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=290)** And this is very common.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=291)** And in fact, the interface will often be in a separate file, a .h file.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=296)** And the implementation will often be in a separate .cpp file, or whatever name you're naming your C++ code files.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=306)** And then the main may be in a third file as well.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=310)** So often, especially when these classes get larger, it's more convenient to have them separated out like that.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=318)** But for our teaching purposes, and as you're learning the basic syntax of C++ classes, it's more convenient to show it all in one file like we do here.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=327)** In the remainder of this chapter, I'll give you the basics of creating and using classes and objects.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-classes-and-objects?u=76281980&t=332)** For more detail, including class inheritance, polymorphism, et cetera, see the companion course, "C++: Essential Training Advanced Topics."

> [!info]- Semantic Content
>
> **Code Keywords:** class. (15), function (9), let (6), class, (6), interface (5)
> **Definitions:** is called (3), is an  (1)
> **File Paths:** class.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Data members
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=0)** - [Instructor] C++ classes are based on C structures.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=4)** In fact, you can create a class using either the struct or class keyword.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=9)** This is struct-class.cpp from chapter seven of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=15)** And you see that I have a structure here with three data members ia, ib, ic, all ints.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=24)** And our struct is called A.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=26)** And down here in main I declare an object based on our struct A and I initialize it with three values.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=36)** And then I print it out using these three data members.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=41)** Structure members are accessed with the dot operator also known as the element selection operator or the member operator.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=51)** So I can build and run this, and you can see the result.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=54)** Struct and class are identical with one difference.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=58)** If I change this to class, you'll notice that this no longer works because these are now private members.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=66)** The difference between class and struct is that class defaults to private visibility whereas struct defaults to public visibility.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=75)** In order to make this work the same, I need to use the public keyword.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=79)** And now it works exactly the same as a struct version.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=83)** Again, the only difference between class and struct is that class defaults to private visibility and structure defaults to public visibility.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=93)** This makes struct much more useful for data structures and this makes class much more useful for situations where the data members are going to be private and encapsulated and you're going to have function accessors.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=107)** Let's take a look at some function accessors.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=110)** This is accessors.cpp, and it's exactly the same.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=115)** We have our same class with the same three data members although we've left them private this time.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=121)** And now we have public accessors seta, setb, setc, geta, getb, getc.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=128)** These are function methods, and they're in the public section of the class.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=133)** We also have a constructor.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=135)** Because our data members are private, if we want to initialize them, we need to use a constructor.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=141)** This is a very simple constructor.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=143)** You notice that it takes three arguments, three parameters integers a, b, and c.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=149)** And then following the colon has these initializers that simply initialize the values of our private data members from the parameters.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=160)** And then an empty block for the function block.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=163)** This is a very common technique for constructors in C++.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=168)** Down here in main, it's almost the same.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=171)** Our class is still named A and our object is still named o1.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=175)** But instead of getting the data members directly, which we can no longer do because they're in private accessibility, we now use the getters getc, getb and geta.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=186)** So when I build and run this you'll notice that we get exactly the same result.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=191)** We'll learn more about member functions later in this chapter.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=194)** C++ classes are based upon C structures.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=197)** In fact in C++, structures and classes are identical except that struct members default to public while class members default to private accessibility.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/data-members?u=76281980&t=207)** It's good practice to use struct when the structure will only have data members and to use class when there are also function members.

> [!info]- Semantic Content
>
> **Code Keywords:** struct (12), private (9), public (6), function (5), class. (2)
> **Definitions:** is a  (2), is called (1), known as (1)
> **File Paths:** struct-class.cpp (1), accessors.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Function members
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=0)** - [Instructor] C++ classes can have member functions that act as methods for the class.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=5)** This is class.cpp from chapter seven of the exercise files.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=10)** This is a very simple class with one data member.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=13)** The data member c1val is private by default, that's by design because it's considered best practice to encapsulate object data and to use member functions to access the object data.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=26)** So there's a couple of member functions, setVal and getVal, which set the value of the private data member and get it respectively.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=35)** Down here in main we create an object.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=37)** We use setVal to set the value of the object and we use getVal to get the value of the object and we can build and run this.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=44)** And you see that our value is 47 as expected.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=49)** There's an important effect that happens when we const qualify an object.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=53)** So here we have an object, 01, which is not const qualified.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=57)** So it's considered mutable as we say.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=60)** So if I want to create a separate one and I'll do this after calling set value.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=64)** So I make a copy of it.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=66)** I'll say C1, that's our class, 02 for our new object equals 01.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=74)** And I'm going to const qualify this by putting the const qualifier before the type.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=80)** Now let's go ahead and print it.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=83)** 02 and we'll call this 02 value and 01 value.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=89)** And you'll notice that when I go to run this the build fails.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=93)** I get an error here that says this argument to member function getVal has type const C1, but, and we can expand this function is not marked const.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=106)** So this is a lot of words to say that if I declare an object const, we need to have a constant qualified getter in order to access the value.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=118)** So in other words, this getter, I call these setters and getters, this getter is not const qualified.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=126)** To const qualify it I can put the word const after the function signature and before the block.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=132)** This tells the compiler that I've designated this as a const qualified member function.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=137)** And that I promise not to, and actually it won't even allow me to, modify any data in the object.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=145)** So in other words, in this const qualified function I can't say c1val equals 42.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=153)** If I try to build that, it'll say I can't do that.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=156)** So if I build it this way, actually it all works just fine now.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=161)** We can run it.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=162)** This const qualified getter will work for both the mutable and the immutable const qualified object.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=170)** No, if we want to, we can actually have two versions of this getVal.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=175)** And for this purpose I'm going to go ahead and I'm going to separate this out as we've seen that we can do elsewhere.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=180)** I'm going to put this out on its own like this.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=187)** And I have to have the const qualifier both in the declaration and in the definition and I'll go ahead and build and run.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=195)** And we see that this still works, but now I want to create a second version of this that is not const qualified.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=204)** So we can see that we can actually have two versions of the same getter, one for the mutable objects and one for the const qualified objects.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=213)** And I'll just go ahead and I'll put a little C out print statement in these so that we can see which one is being called.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=222)** And when I build and run this you'll notice that the mutable one is called first for the mutable version of the object for 01.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=232)** And the immutable, the const qualified, is called for the const qualified object.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=238)** So this can come in handy in some cases.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=241)** The simple rule to remember is that const qualified functions can always be called.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=247)** Non-const qualified functions may only be called by non-const or mutable objects.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=254)** Member functions are what make object oriented programming possible.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/function-members?u=76281980&t=258)** As we go through the rest of this chapter, you'll see that most of the other features of C++ objects are based on member functions.

> [!info]- Semantic Content
>
> **Code Keywords:** const (22), function (5), class. (2), private (2), this. (2)
> **Code Identifiers:** getval (4), setval (2)
> **Definitions:** is a  (2), in other words (2), is called (2)
> **CLI Commands:** make (2)
> **File Paths:** class.cpp (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** best practice (1)

#### Constructors and destructors
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=0)** - [Instructor] Constructors and destructors are special member functions that serve a specific purpose.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=5)** Constructors are used to initialize and set up an object, and destructors are used to de-allocate and reset resources when an object is destroyed.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=15)** There are several types of constructors in C++.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=19)** This is constructors.cpp from chapter seven of the exercise files, and you notice that this a bit longer.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=26)** Our classes are going to start getting a little bit more complex from here on out.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=32)** At the top, we include the string library because we're going to be using that and we have a using alias for std::string so we can just call it string from here on forward.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=43)** We have two constants declared, and these are in static memory space because they're outside of any functions.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=50)** Two constant strings.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=52)** Unk stands for unknown and clone_prefix is a simple prefix string clone- and we'll see how we use that later.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=62)** The interface to our class is right here from line 15 through 26.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=68)** It has three data members, each of them string objects from the STL.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=73)** Type, name and sound.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=74)** And I put this little a_ in front of 'em to show that they're part of this particular class.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=80)** And then we have constructors in the public section.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=83)** We have a default constructor.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=85)** It's called a default constructor because it has no parameters, and it'll initialize the object to a default state.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=93)** Then we have a constructor with parameters or arguments.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=96)** I have type, name and sound.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=99)** And each of these will get assigned to these private data members.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=103)** We then have a copy constructor that'll take its data from another animal object.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=108)** We have our destructor, and we have a copy/assignment operator.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=114)** And we'll talk more about operator overloads later on in this chapter but we're covering this here because it acts like a constructor.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=122)** And then we have a simple print function for printing out our objects.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=127)** And you notice that it's const qualified so that I'll work with const objects.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=131)** All right, before we get into the implementation, let's go ahead and run this so you can see what happens.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=137)** The idea here is that we're simply printing out every time we call one of the constructors so that you can see exactly what's going on.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=146)** So when I build and run, you see we have the default constructor and then it prints with the print statement here, unknown the unknown says unknown.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=155)** So the default constructor has set the class to a default state.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=161)** We then have the constructor with parameters or arguments.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=165)** It says constructor with arguments.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=167)** And then bob the goat says baah because we've given it these strings.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=172)** We have a copy constructor and the copy constructor here.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=177)** And we have the assignment operator, a equals c.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=180)** And then end of main and then all the destructors are called for all of our objects.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=186)** So let's take a look at these one by one.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=190)** I'm going to comment out all of this so that we can just concentrate on one of these at a time.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=197)** So Animal a, when I build and run this, you see it says default constructor, unknown the unknown says unknown, end of main, and then the destructor.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=207)** So our default constructor up here, the code for our default constructor simply prints out the words default constructor.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=216)** But the constructor itself uses the list of initializers to initialize the private data members.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=226)** So a_type gets unknown.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=228)** These all get the unknown string.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=231)** And so when we print, it says unknown the unknown says unknown.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=236)** So that's our default constructor.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=238)** Next, we're going to look at our constructor with arguments or parameters.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=242)** We have these three arguments, each of them are const string references.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=249)** And we have type, name and sound.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=252)** And those again with the initializer list, they get assigned to our variables and we have this cout that says constructor with arguments.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=260)** So if we come down into our main and we can uncomment this part.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=267)** You see that now it says constructor with arguments.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=270)** Bob the goat says baah.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=272)** And then they get destroyed.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=274)** Now let's look at our copy/assignment constructor.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=279)** Here's our copy constructor.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=282)** This gets called when an object is created by copying from another object.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=288)** And our copy constructor has as its argument another animal object and it's a const reference to another animal object.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=297)** And we simply assign each of these properties, and you'll notice that we take clone_prefix and we add it to the beginning of the name.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=306)** And this is actually the addition operator from the string class that we're using for these properties.
>
> **[5:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=314)** So a_name is a string object and we have two string objects, one on either side of a plus sign.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=321)** So it's going to use the plus operator from the string class.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=325)** And we'll look more at operator overloads later on in this chapter.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=329)** But you'll notice now when I uncomment our copy/assignment constructor, and I build and run, you notice that we get clone-bob the goat says baah because it copied it and it put that clone in front of it so we can see that it's a copy.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=346)** And we can use the assignment operator like this or we can, of course, use braced initialization and get exactly the same result.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=356)** Clone-bob the goat says baah.
>
> **[5:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=359)** And finally, we have our assignment operator and we can look at this up here.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=364)** This our assignment operator.
>
> **[6:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=366)** Operator overloads use the word operator and then the symbol for the operator.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=371)** And on the right-hand side of the operator, we have an Animal object, and we do the same thing with the copying but you notice that there's this condition here if this is not equal to the address of the right-hand side object.
>
> **[6:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=386)** So this is actually a keyword in C++ and it always returns a pointer to the current object.
>
> **[6:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=395)** And so I'm comparing the address of this object with the address of the right-hand side object so that I don't copy myself into myself.
>
> **[6:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=405)** It's really just an efficiency.
>
> **[6:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=407)** This'll work fine without it but it's a waste of resources and so under most circumstances, you want to use this in the copy assignment operator, especially if there's more computation going on than just assignment of resources.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=421)** And copy assignment operator always returns a reference to this, and so we dereference the pointer and we use the reference operator here to return a reference to our current object.
>
> **[7:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=436)** And when I build and run, you notice here the assignment operator, we get an extra clone, so now we have clone-clone-bob the goat says baah.
>
> **[7:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=446)** We reach the end and our destructor is called for each of them.
>
> **[7:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=450)** Our destructor looks like this with the tilde in the name of the function member.
>
> **[7:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=457)** And it simply prints out that this is a destructor 'cause there's really nothing to do.
>
> **[7:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=461)** Each of the strings will destruct themselves when they go out of scope.
>
> **[7:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=465)** So constructors and destructors are important parts of any C++ class.
>
> **[7:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=470)** It's always worth thinking carefully about how your objects are constructed and crafting constructors and destructors that handle all the necessary use cases.
>
> **[8:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/constructors-and-destructors?u=76281980&t=480)** For more detail about constructors, please see the companion course C++: Advanced Topics.

> [!info]- Semantic Content
>
> **Code Keywords:** const (4), type, (3), class. (3), let (3), private (2)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Code Identifiers:** clone_prefix (2), a_type (1), a_name (1)
> **Prerequisites:** set up (1), initialization (1)
> **File Paths:** constructors.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Operator overloads
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=0)** - Operator overloading is the ability to use common operators with user defined objects and classes.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=7)** It's not unique to C++, in fact it was one of the original concepts borrowed from ALGOL for C++, but how C++ does it is fairly unique and extremely powerful.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=19)** There are two distinct ways to overload operators in C++: with member functions, as part of a class definition, or as separate non-member functions.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=29)** In this lesson, we'll talk about the member functions in your class definitions.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=33)** We'll discuss the operator non-member functions in the next lesson.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=38)** This is Rational .cpp from chapter seven of the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=42)** This is a fully functional class that performs four function arithmetic on rational numbers as fractions, and the class here is called Rational.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=53)** We can see it has two data members, a numerator and a denominator, and we can see that has a couple of constructors and a destructor.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=63)** This first constructor.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=65)** This is actually a default constructor, because it has default values for both of its parameters.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=72)** It can be called with zero, one, or two parameters.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=75)** And any constructor that can be called with zero parameters is considered a default constructor.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=80)** And obviously if you call it with zero parameters, it should give you zero over one, which is the number zero.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=87)** If you call it with one parameter, it'll give you that number over one.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=92)** For example, we call it with seven later on.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=94)** So it gives us seven over one, which is the same as the integer seven, in value.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=99)** Or you can call it with two, and get an actual real number or rational number.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=104)** This is a copy constructor, and we've seen how that works.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=107)** This is a destructor, and we've seen how that works.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=110)** We have a couple of getters for the numerator and the denominator, and we have this function reduce, which will reduce a fraction.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=118)** We have str that'll return a formatted stl string.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=122)** And we have raw_str, which will return just the numerator/denominator as a string.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=129)** And then we have the operator overloads.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=131)** Now we've seen the assignment operator, which is actually an operator overload.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=136)** And here we have these four more, addition, subtraction multiplication, and division.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=142)** The assignment operator can return a reference, because it's an assignment.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=147)** It actually modifies the value in the object.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=151)** The other operators, you notice they're all const qualified.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=154)** They don't modify anything in the object.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=158)** Instead, they simply return a new object, which is a result of the arithmetic operation.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=164)** So for example, if we look at plus, and all these are pretty much the same, with the exception that the formula is obviously different for addition, subtraction, multiplication, and division.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=176)** These are basically the formulas for how to do these operations on a fraction that we learned in primary school.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=183)** But if we look at the plus operator overload, all of the other ones working exactly the same way, it does this operation, and it does it in a constructor for a new rational object.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=196)** And then it returns that rational object.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=199)** And when we use it down here in main, these are the operations down here.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=205)** We'll get to all of this in just a moment.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=207)** You notice that it has A plus B, and that's in parentheses.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=212)** And that means that by using the parentheses, we can now use the dereference operator to actually use a method on the temporary object.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=224)** And so this is simply an anonymous temporary object that gets returned by the operator, and then we call str on it, and it will display the result.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=233)** So if I go ahead and run this, let's take a look at these really quick.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=238)** We've got A is simply seven.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=241)** So it's seven over one.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=243)** We've got B is 25 over 15.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=245)** And that gets reduced down to one and two-thirds.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=249)** C is copy constructed from B, so it's the same value.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=253)** D is from the default constructor.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=255)** So it's zero over one.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=258)** And then we use the assignment operator, and we assign the value of C to D.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=263)** And so now D is again, one and two-thirds, E is a reference.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=268)** so it's also one and two-thirds, and then D is an assignment to itself because it's assigning from the reference.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=275)** And if we look at the assignment operator up here, where is it? There it is.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=281)** You see it checks this.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=283)** And we saw this in a previous lesson.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=285)** It's just checking to see if it's the same object.
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=287)** And if it is, then it doesn't bother with any of the assignment, and it just returns itself.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=293)** Now we get down to the operator overloads.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=295)** We have plus, minus, times, and divide.
>
> **[5:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=300)** And if we look at the results here A plus B is eight and two-thirds.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=304)** A minus B is five and a third.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=306)** A times B is 11 and two-thirds.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=309)** And A divided by B is four and a fifth.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=313)** And so these are the results that we expect.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=316)** Operator overloading is a fundamental part of C++.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=319)** It's as easy to do as defining a class method.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/operator-overloads?u=76281980&t=322)** We'll look at non-member functions for operator overloading in the next lesson.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is called (1), means that (1), is an  (1)
> **Code Keywords:** function (2), const (1), this, (1), let (1), this. (1)
> **Cross-References:** in the next (2)
> **Analogies:** for example (2)
> **Code Identifiers:** raw_str (1)
> **Env Vars:** algol (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - operator (1)

#### Non-member operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed operator overloads with member functions.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=4)** In this lesson, we'll look at how and why you may sometimes use non-member functions for operator overloads.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=12)** This is rational.cpp from Chapter 07 of the Exercise Files.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=17)** In the previous movie on overloading operators, we overloaded the four basic arithmetic operators with member functions.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=25)** There's an important circumstance where this just doesn't work.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=28)** So let's take a look at it.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=30)** If I come down here to the end, and we'll take this + operator, and we'll move it down here, we'll copy it down here, and we'll say b + 14.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=44)** Now we're adding a Rational object plus a literal integer.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=50)** And when I build and run this, you'll notice that b + 14 = 15 2/3 because b is 1 2/3, b + 14 is 15 2/3.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=60)** So that's exactly what we expect.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=63)** On the other hand, if we turn this around and we say 14 + b, we'll notice that it doesn't even compile.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=73)** Invalid operands to binary expression, int and Rational.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=78)** So let's take a look at why this is.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=81)** If we look at b + 14, what happens is is that the compiler sees the b as a Rational object, and the + operator, it looks for the + operator in the Rational class, and it finds one, and it takes this 14 integer, and it wants to use that as this right hand side object which is a Rational object and says, "Okay, well, let me see if there's a constructor for this."
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=106)** And there is a Rational constructor that'll take an integer and that's this construction right here.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=112)** It'll take this numerator.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=114)** It'll take this as a one parameter constructor for the Rational object.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=119)** And it'll put a 14 in there, and it'll call it 14 + 1, and it'll create a Rational object.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=124)** And then it uses that Rational object as right hand side in our formula and returns a Rational object.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=133)** So this is kind of how that works with the b + 14.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=138)** Now, if we take 14 + b, we do exactly the same thing, except we try to do it with an integer instead of a Rational object.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=145)** And the + operator for an integer looks for an integer.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=150)** And it's got this b, which is a Rational object, and it doesn't know what to do with that.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=156)** And so it says Invalid operands.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=158)** So how do we fix this?
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=160)** How do we make it so that both of these work?
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=163)** Well, the way to do that is to take this operator overload and move it outside of the class.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=169)** So, first of all, I'm going to come up here in our interface, and I'm going to delete it from here 'cause it's no longer going to be part of the class.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=179)** And I'm going to come down here and I'm going to take this, all of this, and I'm going to cut and paste it and put it the end.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=187)** I mean, it'll work no matter where I leave it, but this is the logical place to put it.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=191)** It no longer is in the scope of the class.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=195)** And now it takes two parameters.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=198)** So it takes a left hand side and a right hand side.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=202)** So this will be the left hand side.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=204)** And it's no longer const qualified because it's not part of the class anymore.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=208)** And now we want to take this and make it work because we no longer have this n which is part of the class, and we're not part of the class anymore, nor do we have this d anymore because we're not part of the class.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=222)** But remember, we have getters for these.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=225)** They're called numerator and denominator.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=228)** And so we come back down here, and this is now left hand side numerator.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=235)** And we can take this and we can copy and paste it.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=239)** No, I don't need any place else, but we do have left hand side denominator.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=242)** So I can say lhs.denominator.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=246)** And I'm just taking this same formula and making it work outside of the class.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=251)** Let's go ahead and put this on the next line.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=256)** And then these places where there's right hand side d, we make that denominator, and we have that here too, and this one will be numerator.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=267)** So we have exactly the same formula, but now we're working with two Rational objects instead of one.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=274)** And our left hand side can be promoted from an integer in the same way we did that with the right hand side before when it was part of the class definition.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=283)** So all of this should work.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=285)** And I can build and run this.
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=287)** And oh, look at that.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=288)** It worked the first time. I made no typos.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=291)** So now we have b + 14 and 14 + b both giving us the same results.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=298)** And they're both using this operator overload which is outside of the class definition.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=305)** So this is called a non-member operator overload.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=308)** And that's how that works.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=311)** There are circumstances where you'll want to use non-member functions for your operator overloads, and C++ supports this well.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=318)** As a rule of thumb, whenever you have a constructor that allows implicit conversions, you'll want to think about non-member overload functions.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/non-member-operators?u=76281980&t=327)** These functions still go in your implementation file.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), let (4), this, (3), class, (2), this. (2)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the last (1), we discussed (1)
> **File Paths:** rational.cpp (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Non-member operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=5)** - [Educator] The challenge for this chapter is for you to implement non-member operators for the rational class from this chapter.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=12)** This is zero seven challenge.CPP from chapter seven of the exercise files.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=19)** This is the rational class from earlier in this chapter.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=21)** And the first thing you'll notice about this file is that it doesn't compile.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=26)** As we learn in this chapter, the expressions in these lines require non-member operators.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=33)** Your task is to modify this class to use non-member functions for the arithmetic operators so that these four lines of code work properly.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=44)** This challenge should take about 15 minutes to an hour.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=47)** As always feel free to take your time and experiment.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-non-member-operators?u=76281980&t=50)** I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1), in the next (1)
> **File Paths:** challenge.cpp (1)
> **Code Keywords:** require (1)
> **Env Vars:** cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Non-member operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=0)** - [Instructor] The challenge for this chapter was to implement non-member operators for the rational number class.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=11)** Here's my solution.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=13)** This is 07 Solution from Chapter 7 of the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=18)** And if we come down here, you'll notice that we no longer have the operator overloads as part of the class.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=27)** We still have the assignment operator, but we no longer have the arithmetic operators.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=32)** And down here in the implementation, you see that we have the operator overloads as non-member functions with both left-hand side and right-hand side rational parameters.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=46)** And you notice that we're using the getters now.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=49)** Left-hand side numerator, right-hand side denominator functions, and those are the member functions up here in the class that return the numerator and denominator values.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=61)** And down here in Maine, we see that all of this compiles.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=66)** I'll build and run and you can see it works as expected.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-non-member-operators?u=76281980&t=71)** This challenge gave you the opportunity to exercise your knowledge and expand your understanding of how classes and operators work.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Templates

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding templates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=0)** - [Instructor] C++ templates are wonderfully simple and powerful.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=4)** This is the C++ feature that supports generic programming.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=8)** Generic programming refers to code that works independent of type.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=13)** While C++ is a strongly typed language, there's still great benefit in being able to write functions and classes that are type agnostic, that is they operate on objects of various types.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=25)** Because C++ supports defining your own types through classes and operator overloads, it's possible to do a great deal of generic programming in templates while leaving implementation details to the classes and operators.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=38)** Template declarations look just like normal function or class declarations with one distinction.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=45)** They're proceeded by the template keyword and a set of type identifiers.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=50)** These type identifiers are used as placeholders by the template code to be replaced during compilation with actual types.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=59)** When a function or class is used from a template, the compiler generates a specialization, specifically suited to the types specified in the caller.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=69)** This specialization is generated at compile time and one specialization is created for each combination of data types for each template.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=80)** Templates are used widely in the C++ Standard Library, which is why parts of the library are commonly called the Standard Template Library.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=89)** The generic nature of templates makes them a perfect fit for use with container classes.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=94)** Template programming is not entirely without its downsides.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=97)** There are some issues you'll need to be aware of.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=100)** Because the compiler must generate specializations for every type context of a template, the amount of code to support that template can grow rapidly with use.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=110)** Compilers tend to have a difficult time generating sensible error messages with templates, so debugging can be challenging.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=119)** Because templates tend to live in header files, changes to code with templates can lead to recompilation of larger portions of your code than would otherwise be necessary.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=131)** C++ templates are a very powerful feature that's also simple to implement and support.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=136)** They have great advantages over other generic programming solutions including preprocessor macros.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=142)** Templates are widely used to implement containers and other generic objects in the C++ Standard Template Library.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=149)** This chapter will cover the fundamentals of using templates and functions and classes.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/understanding-templates?u=76281980&t=154)** For a more detailed discussion please see the companion course, C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Exercise Files:** template (10)
> **Code Keywords:** function (2), type. (1)
> **Definitions:** refers to (1), is a  (1)
> **Env Vars:** stl (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Template functions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=0)** - [Instructor] C++ supports both template functions and template classes.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=4)** In this movie, we'll look at template functions.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=7)** This is template-function.cpp from Chapter 08 of the Exercise Files.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=11)** And here we have a simple template function that returns the maximum value of two parameters.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=17)** You notice the template keyword, and in these angle brackets here, we have the template argument list.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=24)** The keyword typename is commonly used here, but the word class works exactly the same and is often used instead.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=34)** Just be aware, that at least in this context, either of these two tokens means the same thing.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=40)** I strongly recommend that you use typename.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=42)** You may see class used in legacy code, but typename is less ambiguous.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=48)** So this simple template function is both type agnostic and type safe.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=52)** It's type agnostic because it'll work for any class or type that supports the greater than operator for comparisons.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=60)** It's type safe because the compiler will generate a specialization of the function for each given type that uses this function.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=67)** The capital T here is a placeholder for a type.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=71)** And you notice it here, you notice it here, you notice it here, and you notice it here.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=77)** And all of these places, the T will be replaced with the type from the call to the template function.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=85)** So we call the template function like this down here.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=88)** Here's the function call.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=90)** The name of the function is maxof, and we pass it this template argument list in angle brackets, and here we're giving it an int.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=98)** So that means that all the places in the template function, where you see that capital T, those will all be replaced with int.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=105)** And then we give it our parameters, x and y, which are ints with the values 47 and 73 respectively.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=113)** And we print out the result here in this line.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=116)** So I'm going to go ahead and run this.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=117)** And you see that it says, max is 73.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=121)** So the greater of 73 and 47 is 73.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=127)** And that's from this statement here.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=129)** If a is greater than b, we return a, otherwise, we return b.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=133)** And this is both type safe and independent of type.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=138)** So how does that happen?
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=140)** When you call this function, like we do here with int as the type in the template argument list, the compiler generates a version of the function that operates on int and returns int.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=153)** This internally generated version is called a specialization.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=157)** You'll never see it, but you need to know that it's there.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=160)** That's how templates work.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=162)** On the other hand, we could do this.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=166)** Now we're calling our template function with const char pointers or C-strings, instead of the ints.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=173)** And when I build and run this, you notice it says the result is bar.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=178)** You may also notice that bar doesn't seem like it should be greater than foo because B is before F in the alphabet, but you need to understand that what it's comparing is the pointers and not the strings itself.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=191)** So the greater than operator, when it's operating on const char pointers, is actually comparing the pointers and not the strings.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=200)** If we want to compare the strings, we can use the STL string type.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=203)** And we come over here, we can include string.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=208)** And then for each of these, instead of const char pointer, I can say std::string.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=218)** And I can put the same thing here inside the template argument list.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=224)** And now when I build and run, you see that it gives the max is foo, which is lexicographically greater.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=230)** So we've seen that the compiler generates a specialization for each of these different types.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=235)** It generated one for the int, it generated one for the constant character pointers, and it's generated one for the standard strings.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=244)** Notice that I never touched the maxof function template for all of these different examples.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=249)** And that is the beauty of templates.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=252)** It's worth noting that we can call this without anything in here, without that at all.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=259)** If I call it like this, just maxof x and y, the compiler will deduce the type in a process called template argument deduction.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=268)** And if I build and run this, you notice that it works just fine.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=271)** And in fact, I can do this with character strings, and it gives us that result, or I can do it with int, and build and run, and we get our 73.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=289)** So in a nutshell, if the compiler can easily deduce the type of the argument, it'll call the appropriate specialization without the need to explicitly specify the type.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=299)** This is very convenient, and it works in many common circumstances.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=303)** Template functions are a form of generic programming that are easy to create, can be very useful.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=309)** For many of the purposes, we used to use C macros.
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-functions?u=76281980&t=312)** C++ template functions are more powerful, more flexible, and less prone to error.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), type. (4), const (3), this, (3), this. (2)
> **Exercise Files:** template (19), exercise files (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **File Paths:** template-function.cpp (1)
> **Env Vars:** stl (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Template classes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=0)** - [Instructor] Template classes are useful for a lot of purposes, and they're commonly used for operating on containers.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=6)** This is template-class.cpp from Chapter 08 of the Exercise Files.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=11)** This is a simple Last-In-First-Out LIFO stack.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=14)** There's a more complete version in the standard template library, but I've created this simple version so we can see how it works in the context of our discussion of templates.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=23)** The important thing to notice about this is that there is absolutely no code here that cares about the type of the items on the stack.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=32)** So let's take a look at the class.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=33)** The class starts here around line 23 or line 24.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=38)** We have the template keyword, we have typename, and the type place holder, capital T.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=44)** So the type of the elements on the stack is going to be this type T.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=49)** We have a couple of static constant.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=51)** Static constant in the context of a class means that there's only one copy of them no matter how many instances of that class you create.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=59)** So these are just constants that say the default size and the max size for the stack.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=64)** We have some private data members here, including a smart pointer, and we'll talk more about smart pointers in C++ Advanced Topics.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=74)** But for now, just understand that a smart pointer is simply a managed pointer.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=78)** So that when it goes out of context, it is destroyed.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=81)** And a unique pointer simply allows only one copy of that pointer to exist at a time.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=87)** And so, you know, it's just a safe pointer.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=89)** It's just safer than a primitive pointer.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=92)** Our interface here has a constructor which takes the size for the stack, and it's marked as explicit so that there can't be any implicit conversions.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=103)** And again, these are just modern C++ best practices things.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=107)** You don't always have to do them this way, but everything just sort of works a lot better and is a little bit safer when it's done this way.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=113)** We have a destructor that releases the smart pointer.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=116)** That's not actually even necessary.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=118)** The smart pointer will destroy itself safely, but this is here for completeness and just to show that this is where that happens.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=127)** We have a method for push and a method for pop, and notice the placeholders.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=132)** This is the type of the element that is being operated on.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=136)** We have boolean functions for checking if the stack is empty or if it's full, and to return the top element and the size.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=146)** I just want to take a look at a couple of these functions here.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=148)** Notice push and pop.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=151)** And in both cases, there's nothing here that cares about the type.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=154)** We have the type placeholders, and that's really all that's necessary.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=159)** We can push an item onto the stack.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=160)** We can pop an item off of the stack.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=162)** If the stack is full, we throw an error, and this is an error exception.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=167)** We'll talk more about exceptions in C++ Advanced Topics, but understand for now, this is a really simple implementation of exceptions.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=176)** And for most purposes, you really don't need to know much more than this.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=180)** We inherit the standard exception class.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=183)** Of course, we have the exception header up here.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=186)** And we have a place to store a message.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=190)** Our constructor takes the message, and then we have this what method that's required that gets overloaded, and we'll see how that works down below.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=199)** We're going to go ahead and take a look at how we call all of this.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=203)** Here's two stack declarations.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=205)** One is of type int and one is of type std::string.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=209)** So we have two stacks.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=211)** One of 'em is a stack of ints and one is a stack of STL strings.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=215)** Both of them are size 5, so they hold 5 elements, and that's in the constructor here.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=221)** And it's inside this try and catch block, which is for the exceptions.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=225)** And this is really beautiful.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=227)** When we go ahead and run this, and all these messages about pushing and popping the elements, we'll look at that in a moment.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=234)** So I push 5 elements onto the stack here in a for loop, 1, 2, 3, 4, 5, and then after the pushes, we look at the top and we ask if it's full.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=243)** So the top before is -1, which means that it's empty.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=247)** And after the pushes, it's 4, because it's a zero based index.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=251)** And it says that it's full.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=254)** And then we pop them, 5, 4, 3, 2, 1, in this loop here.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=258)** While it's not empty, we pop them 5, 4, 3, 2, 1, simple like that.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=264)** But here's the interesting thing.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=265)** If I come in here and I try to add a 6th element in a stack of 5, I'll go ahead and run this, you see it says error: stack full.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=275)** And that is from the push method, which is right here.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=279)** It checks if it's full.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=281)** And if it is, it uses the throw keyword to throw an exception, and this is the exception constructor with the string.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=288)** And then down here in the catch, this is where we catch the errors.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=293)** We say Stack error, and we call that what method.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=296)** And it's really simple to use these exceptions.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=299)** And there's not much else you need to know about them in order to make good use of them.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=305)** Okay, we do exactly the same thing with the standard strings and we get exactly the same results.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=311)** Let me take the 6th one out of here so this runs.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=316)** And we'll build and run.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=319)** And we can see that our integer stack and our string stack work exactly the same.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=325)** And that's without the actual stack class code knowing or caring anything about the type of the elements on the stack.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=334)** Template classes are especially useful for manipulating containers of items, where the logic of the manipulation is independent of the type.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=342)** That's why C++ standard containers are written using templates.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/template-classes?u=76281980&t=346)** For more comprehensive discussion of templates, please see the companion course, C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), throw (3), let (2), static (2), type. (2)
> **Definitions:** is a  (5), means that (2), is an  (1)
> **Exercise Files:** template (5), exercise files (1)
> **Env Vars:** stl (2), lifo (1)
> **File Paths:** template-class.cpp (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Template factorial
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=5)** - [Educator] For this challenge, you'll build on the chapter six challenge and build a template version of the non-recursive factorial function.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=13)** Use your solution from chapter six as a basis and convert it to use a template.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=19)** This was my solution for the chapter six challenge.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=22)** You'll make a template function that will work with any numeric type.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=26)** Expect this challenge to take about 10 to 15 minutes.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-template-factorial?u=76281980&t=29)** Feel free to take longer if you want to experiment and learn.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), type. (1)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Template factorial
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=5)** - The challenge for this chapter was to create a template function for the non-recursive factorial challenge from chapter six.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=13)** Here's my solution.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=15)** This is 08 solution from chapter eight of the exercise files.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=19)** Notice that the code in the function block is exactly the same.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=23)** Nothing here needed to change.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=26)** All that needed to change was to put it in a template, create a template placeholder and use that for the type of the argument.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=34)** Everything else remains the same here.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=37)** So here we call it with an integer.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=39)** We call it with a long long unsigned int.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=42)** Call it with a long double.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=44)** And when I build and run, you notice our results.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=47)** Five factorial, 15 factorial.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=49)** With the long double, we can even do 25 factorial, which has an exponent of 25 places.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=58)** In this challenge, you've used your understanding of templates to create a templates-based solution for the non-recursive factorial function.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-template-factorial?u=76281980&t=66)** I hope you can see how powerful and flexible templates can be for generic programming in C++.

> [!info]- Semantic Content
>
> **Exercise Files:** template (3), exercise files (1)
> **Code Keywords:** function (3)
> **Speakers:** - the (1)
> **Non-Speech:** (bright music) (1)


### 9. Standard Template Library

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of the STL
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=0)** - [Instructor] The Standard Template Library is part of the C++ standard.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=4)** So it's guaranteed to be a part of every C++ development system.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=9)** Commonly called the STL, the Standard Template Library provides containers and supporting data types like vectors, lists, queues, and iterators.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=19)** The STL provides a number of standard containers, iterators, and algorithms.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=23)** Some of these include vector, a fundamental random access container that can be used in many places a C array could be used, but with a lot more functionality.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=34)** List, a double linked list optimized for fast inserts and deletes.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=40)** Set, an ordered sequence container where elements are kept in a strict order based on their value.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=47)** Map, an associative container where unique keys are used to access associated values.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=54)** Stack, queue, and deque, which is double-ended queue, are last in first out, first in first out, and double-ended queues for pushing and popping data from a stack.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=67)** String, a specialized container of characters, optimized for use as strings.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=73)** Iostreams, for reading and writing data to and from files and IO devices.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=79)** Cout is a common use of iostreams.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=81)** It's used for console output.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=84)** The STL is very large, much larger than could be covered in this course.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=89)** For our purposes, I will cover the classes that are most commonly used for general purpose programming.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=95)** For a more detailed discussion of the STL, please see the companion course, "C++ Templates and the STL".
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=104)** Understanding the C++ Standard Template Library is an essential part of understanding C++.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/overview-of-the-stl?u=76281980&t=110)** The STL is part of the C++ standard, and it provides a great deal of basic functionality.

> [!info]- Semantic Content
>
> **Env Vars:** stl (6)
> **Exercise Files:** template (3)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=0)** - [Narrator] A vector is a sequence container that supports random access of its elements.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=6)** You can think of it as an object oriented array with a bunch of cool extra features.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=11)** Vectors are fast, random access, and extremely flexible.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=14)** Let's take a look.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=15)** This is vector dot.cpp from Chapter nine of the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=20)** The vector is a template class.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=21)** It's defined in the vector header.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=25)** And here, and you'll notice we're using standard vector, so we can use the vector symbol without the STD name space, so I can use it like this.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=36)** So this declares a vector object, and this vector, of course, it's a template class so I give it a type.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=42)** So this is a vector of int, so it's a container that contains objects of type int.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=49)** And we'll name it vector vi1.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=52)** And we'll initialize it with this initializer list with 10 integer values.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=57)** So what I'm going to do here is I'm going to comment out a bunch of this stuff, and we can look at this in pieces.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=63)** First, let's look at this piece where we define and initialize our vector, and then we print out its size, the front element, and the back element with the front and back methods, and a new line.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=76)** And so when I build and run this, we see the size is 10, the front element is one, and the back element is 10, just as we initialized it here with the initializer list.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=88)** The vector type also provides iterators, and these iterators work just like pointers like you would expect pointers to work with, say, a C array.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=98)** And so we can grab the beginning and end iterators like this, and we can use them like in a for loop just as we would with a C array.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=109)** So we have the begin iterator, we test it in the wild clause here to see when it hits the end iterator.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=116)** And until then we increment it with the increment operator and we dereference it with the asterisk just as we would with a pointer.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=125)** So when I build and run this, you'll notice that it says iterator, because we said iterator up here, and then it simply iterates through the vector.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=133)** Now, instead of setting these variables, I can say vi1.begin here and vi1.end here, and we can get our iterators directly.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=146)** And this is actually far more common to do it this way.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=151)** I'm going to put this back for now and we'll look at the next part.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=156)** We can index a vector using the square bracket operator or we can use the at method.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=163)** The difference is the at method does range checking and these square brackets do not.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=168)** And so you want to be very careful when you're using the square brackets.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=171)** Either way, this gets the element number 5, which will have the value 6 when I build and run this and you see element 5 has the value 6.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=179)** And both of these work the same.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=182)** We can of course use a range based for loop just like we would with any container.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=186)** And again, this uses those iterators internally.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=190)** I'll go ahead and build and run and we see our range based for loop there at the bottom and our 10 elements.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=198)** We have an insert method to insert an element.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=203)** We use an iterator for this.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=205)** And so we're going to take the begin iterator and add 5 to it.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=209)** And just like with a pointer, that addition operator operates on the iterator based on the size of the elements.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=217)** And so this will get us the element number 5, which currently has a value of 6 but we're going to insert before it this value 42 and we'll notice that our size will increase and our element at 5 will change to 42, and I'll go ahead and I'll build and I'll run that.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=233)** And you see that we insert.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=235)** Our size is now 11 and element number 5 is now value 42.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=240)** Likewise, I can erase that element, again, using the iterator +5 and I'll build and I'll run that.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=248)** And now you see that our size is 10 again and our element 5 is 6 again.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=254)** I can use the push back method, which is actually very common way to add things to the back of a vector.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=260)** I'll push back the value 47 and we'll see our size increase and our value at the back will change to 47.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=267)** So our size is now 11 and the value at the back is now 47.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=272)** We can initialize a vector from a C array.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=276)** And so here we have a C array, or C array with the size of 10, and we give it 10 elements in initializer list.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=285)** And then we initialize a vector, we'll call this one vi2, And we give it two pointers, the beginning of the array and the end of the array.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=294)** The array plus its size.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=295)** Then we'll use a range for loop to print out the elements and you see it's this vector from C array and there's our 10 elements.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=303)** Of course, we can use any type for our elements in our vector.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=307)** And so here we have a vector of standard string elements and that's got these five values 1, 2, 3, 4, and 5 as strings.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=316)** And we print it out with the loop there and we have the values 1, 2, 3, 4, and 5.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=322)** This is really just sort of the tip of the iceberg with the vector.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=325)** The vector's a fundamental container type that's powerful and easy to use.
>
> **[5:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=330)** You can use it wherever you would otherwise use a C array but could benefit from some of the capabilities that the vector provides.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/vectors?u=76281980&t=336)** While the vector is very common, The SDL provides a number of container types, so for more in depth training, see the companion course, C++ templates and the SDL.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), this. (2), class. (1), type. (1)
> **Analogies:** just like (3), think of it as (1)
> **Env Vars:** sdl (2), std (1)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (3)
> **File Paths:** dot.cpp (1)
> **Speakers:** - [narrator] (1)

#### Strings
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=0)** - [Instructor] The STL String Class is a container specifically designed to operate with sequences of characters.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=6)** It's designed with many features to operate on strings efficiently and intuitively.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=12)** This is string.cpp from chapter nine of the exercise files.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=17)** String is an STL container and it's in the header called string and it's in the standard name space and it's called string.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=27)** The String Container Class operates on characters in much the same way as any sequence container operates on other types.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=34)** String has functions that are specifically designed for operating on strings of characters.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=39)** It works a lot like a vector but with additional string related functions.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=44)** We're going to take this section by section here and I'm just going to comment out the sections ahead of where we want to focus.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=52)** So when I build and run this we'll just see the parts that are uncommented.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=56)** Here we see it says length is the same as size and size is the same of length demonstrating the size and length methods off the string.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=66)** Here we have a string S1 and it's initialized with a C string that says, this is a string.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=71)** And so the string constructor, the most common string constructor takes a C string and turns it into a string object.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=80)** And so traditionally strings are thought of as having length and containers are thought of having size.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=86)** And it's just worth noting that both of these do exactly the same thing.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=90)** You can concatenate strings with the plus operator.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=95)** So if I take string two and say it equals string one, plus a colon, plus this other string that says, this is also a string, then we see out S2 and a new line.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=108)** And when we build and run this we see that it says concatenated strings.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=112)** This is a string colon, and this is also a string.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=116)** We can compare strings using the equals operator, if S1 and S2 are equal, it'll say yes and otherwise it'll say no.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=127)** And we build and run this.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=128)** You see it says no.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=130)** And then we copy a sign, S1 to S2, and then they are equal, it says, yes.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=138)** We can use the other comparison operators, greater than, or less than so I'll build and run this.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=146)** And you notice that these are lexical graphical comparisons.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=150)** It's comparing the strings alphabetically, as opposed to the way that the C string works, where it compares the addresses of the strings.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=159)** We can use an iterator with the string, which is how the range based four loop works and build and run this and you see that we're printing out each individual character from the string.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=171)** We can insert and erase with an iterator using S1.begin here, plus five.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=178)** So we get the fifth position and we'll insert a capital X and we go ahead and run this.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=183)** And you see, we get our capital X just before the word is and we can erase it again with an iterator in the same way.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=194)** We can use positions to replace.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=199)** And so starting at position five which we know is the word is and replace two characters with the string ain't.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=208)** And so now it says this ain't a string instead of this is a string.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=213)** Well, it's not necessarily great grammar but demonstrates the point.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=218)** We can get a sub string starting at position five for five characters and we get ain't which we know is what's there.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=225)** We can use find to find the first S in our string and it'll return a position.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=232)** And we go ahead and we see the first S is at position three.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=237)** And of course these start at zero.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=239)** So zero, one, twp, three, it's the fourth position and it's that S in the word this.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=245)** Or we can find from the right hand side with rfind and we'll find the position of the last S in the string.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=253)** The C Plus Plus STL String Class is very powerful and flexible.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=257)** And obviously it's a lot more than what I can present in a short movie like this.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/strings?u=76281980&t=263)** The String Class is implemented as a sequence container as a rich set of features, an intuitive interface and for more detail on STL Strings please see the companion course C Plus Plus templates and the STL.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (5), interface (1)
> **Env Vars:** stl (5)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (4)
> **File Paths:** string.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Format
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=0)** - [Instructor] The format library is new to C++ 20.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=4)** Until now, if you wanted to format text, you could use either the legacy printf functions or the STL I/O Stream library.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=12)** Both have serious flaws but we've used them because they work.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=16)** Beginning with C++ 20, the format function provides text formatting inspired by Python 3's formatter.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=25)** This is format.cpp from chapter nine of the exercise files.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=30)** The C++ 20 format library does not include a print function but it's relatively simple to implement.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=37)** We come down here around line 30.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=39)** We'll see our print function.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=41)** You'll notice it's templated and the template argument has these three dots, followed by args.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=49)** This is a parameter pack and we'll cover parameter packs in the companion course: C++ Templates and the STL.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=56)** For now, you can simply copy and paste this.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=59)** And this will work as a print function that works exactly like the format function, except instead of returning a string like format, this will actually print to the console using fputs.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=72)** So this allows us to use print like this without having to use the cout function in conjunction with format.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=83)** The formatter itself works the same with this print function or with format.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=88)** The only difference is that format returns a string and print prints to the console.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=93)** C++ 23 is expected to include a print function that works just like this one.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=100)** Notice that we can print any fundamental type.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=102)** You can see we have an int, we have a C string, we have an STL string, we have a double.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=108)** What I'm going to do here is I'm going to comment out a bunch of this.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=112)** And we can deal with these a few at a time.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=116)** If I go ahead and build and run this, see, we've got a little warning about unused variable.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=120)** That's fine, we'll use it later.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=121)** We get inta is 47 and that's our integer up here and you notice we just pass the integer to the formatter.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=129)** And we have the placeholder here.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=131)** And the formatter knows what to do with this integer.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=134)** And that's because the template function has a specialization for an int.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=140)** The template function also has a specialization for a C string and it has a specialization for STL strings, it has specializations for most of the common types.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=151)** And we'll get to the specialization in a moment.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=153)** I'll show you what one looks like.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=155)** But for now, you can see we're printing all of these things just the way that we would expect to.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=159)** You notice we can also include positional arguments inside the curly braces.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=164)** This allows us to change the order.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=166)** Here we have human and alien.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=168)** But if we look at our output, in this one, it says hello vulcans we are earthlings.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=173)** In this one it says hello earthlings we are vulcans and that's because we've used these positional arguments to change the position of the arguments.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=182)** And this is great for internationalization and other uses where you may want to change the order of things.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=189)** Now let's take a look at our double.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=192)** You notice we have constant dpi, which is double pi.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=196)** And we say pi is and if I build and run this, you see it says pi is with a very long to many decimal places representation of pi.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=207)** I can constrain that to five decimal places by using a colon.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=212)** And then decimal point five to tell it just to print out pi to five places.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=219)** And of course, I can also include the positional arguments.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=222)** This is one and this is zero.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=224)** So first, we'll print the inta, which is the second argument and where they're zero based, so it's number one.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=231)** And then the first argument, which is number zero.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=234)** And you notice down there, it says inta is 47 and pi is again, to five places.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=241)** We can specify fill characters and alignments.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=246)** You notice I'll go ahead and I'll print this and we have a fill character of asterisks and a left alignment in 10 places.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=254)** And you notice down here, we print out left aligned and taking up 10 spaces, filled with asterisks.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=262)** Or we can fill with zeros and write a line, and that's this next one.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=267)** Notice, the right alignment is the right-facing angle bracket and the left align is the left-facing angle bracket.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=274)** Or centering is a caret character or an up-facing angle.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=279)** And that centers here.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=280)** Or we can center filled with an underscore as we do in the next one.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=286)** We can print hex, octal or decimal.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=289)** And you'll notice that the hex has a capital F but if I change this to a lowercase f, you notice that now... Or rather a lowercase x in the specification, you notice we have the lowercase f down here.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=302)** And we have octal and decimal representations.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=306)** Now, you'll notice here, I have a Frac class and way up here at the top, I'm sorry, I just scrolled all the way to the top in a big jump, but up here at the top, we have a template class and it's basically just a structure of a fraction and we use the template type for the numerator and denominator.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=326)** And so down here, I've simply defined the fraction of 3/5 and I put the object here and it's printing it out.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=336)** We'll go ahead and build and run.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=338)** You notice it prints it out as a fraction, 3/5.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=341)** And the reason it does that is because I've created this format specialization for this class.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=348)** So I have a template type named T and I'm inheriting this structure from the standard formatter.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=356)** And I'm creating the specialization called formatter with the Frac of type T in its specialization in its template parameter.
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=365)** And down here, if you want to use a specialization like this, all you've got to do is copy and paste this.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=371)** And down here, in the actual format call, I give it this type and I'm giving it a reference and I'll calling it F.
>
> **[6:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=380)** And then out here I say f.d and f.n.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=384)** This function's called format_to and just like format, I'm giving it the specification, the format string to tell it to print these as two different values separated by a slash.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=397)** And then down here at the end, I simply call it like this and it prints out the fraction just like that.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=403)** So in a nutshell, that's how you create a format specialization.
>
> **[6:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/format?u=76281980&t=407)** So the C++ formatter solves a long-standing problem in C++ by providing a type safe text-formatting library that's both efficient and convenient.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), this. (3), this, (3), type. (1), pass (1)
> **Exercise Files:** template (7), exercise files (1)
> **Env Vars:** stl (4)
> **Analogies:** just like (3)
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **File Paths:** format.cpp (1)
> **CLI Commands:** python (1)

#### I/O Stream
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=0)** - [Instructor] The iostream library is fairly rich, but most of what's there is backend support, and there's really just a few classes that you'll normally use.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=9)** This is iostream-formatting.cpp from Chapter 9 of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=15)** Iostreams come in two basic flavors: input streams and output streams.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=21)** Let's take a look at how this works, we're going to look at cout and cin, and you'll notice that I haven't really aliased any of this.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=28)** We're using so many different things in the iostream library, it just seemed better to just go ahead and spell them all out.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=35)** So I'm going to comment out everything from about here, so that we can look at these bits in some sort of order.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=43)** So here we have cout "Hello, World!" with a new line, and we've seen this before.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=49)** And we declare a string called istr, I S T R, and we cout a prompt with no new line, so it'll just be on one line there and then we cin from istr and you notice my comment says one word at a time.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=65)** That's the way that cin works by default, is one word at a time, and then we'll display the string that we get.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=72)** So I'm going to go ahead and run this.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=74)** There's our "Hello, World!"
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=75)** I'm going to put my cursor down here and I'm going to type a few words, this is a string.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=81)** You notice this is four words long, but when I press my enter key, we get this response, istr has one word in it, so cin by default, just gets one word at a time.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=93)** Now, if we want to get more than that at a time, go ahead and comment this out and uncomment this, and we'll do the same thing, but we'll use getline instead and you notice that getline is a method off of cstring and it takes a buffer which is a character array.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=111)** You can see it defined up here, buf 128 characters, and sizeof buf, like the size of the buf is the second, so it knows not to overflow the buffer.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=122)** And then we'll say, cout and the input and we'll display the buffer and a new line.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=128)** So I'll go ahead and I'll run this, and I'll do the same thing.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=132)** This is a string and I'll press my enter key, and you notice that we get now the whole buffer.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=138)** So that's the difference between using cin.getline and just cin with its right facing double angle bracket thing which is literally a shift right operator but it's being repurposed for this purpose.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=153)** All right, let's go ahead and comment this out and we'll look at how formatting works with the iostream library and the iostream library does a very unusual thing with formatting, and you'll see this a lot because the new format library is brand new.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=168)** And so there's already a lot of code out in the wild that does formatting using iostream manipulators which is how this works.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=176)** So we'll uncomment this much of it, and we have three integers and we're going to display them in different ways.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=183)** So go ahead and I'll build and I'll run this and you see that we have default, right?
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=188)** And so we're just displaying the three integers with spaces in between them and you see all of these left angle brackets and that's just how you chain things together with cout.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=198)** And we're not going to see a lot of that in the future with the format library and especially after C++23, when we have the print function.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=206)** And so we can display them in hex using this I/O manipulator and this just gets chained in with the left angle bracket thingies.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=215)** This just gets chained together with everything else and it changes the way that the things after it will be displayed.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=222)** And so, here this tells us that the integers are now going to be displayed as hex and then the integer objects that come after it will be displayed in hex.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=232)** And so here we have hexadecimal 2a 2f 15b3 and that's these numbers in hexadecimal.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=241)** We can say hex with showbase and so we have standard showbase and that will display them with the base.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=250)** So we have 0x2a 0x7f and that 0x is the base.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=254)** We have octal with showbase and that's these down here with the 0 in front of them that tells a programmer who's been around for a while that that's an octal, you don't have a single leading 0 like that for a decimal number.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=267)** And then in order to reset it, you notice that our showbase carried over from one use of cout to the next, and we have to actually reset it with no showbase and then reset this with decimal to get it to show the decimal again, like our default.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=284)** So you can see how these I/O manipulators are cumbersome, they're a little bit awkward if you forget to reset some things, you can end up with the results that you don't want, so you can see how that can be cumbersome.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=297)** All right, I'm going to go ahead and I'm going to comment this out and I'm going to uncomment these down here and we'll look at some more numeric options here.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=308)** Now we have three doubles, we have pie, we have this, and we've got that.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=313)** And default fixed scientific with our precision set.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=317)** I'm not going to go into the details in all of this but you can see how this works.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=321)** I'm going to go ahead and I'm going to build and run and you can see there's our default, there's our fixed, scientific notation, setting the precision to 3, and on like that.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=331)** Setting our precision to 7, go ahead and comment this out and we'll look at some string formatting options.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=342)** So we have three strings, a string, a longer string, and an even longer string.
>
> **[5:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=347)** We print them out and here's where we print them out, we flush them right with set width and right I/O manipulators and you notice I have this standard endl at the end and you'll see this in some legacy code, people don't use it so much anymore.
>
> **[6:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=363)** It's almost exactly the same as just putting in a new line like that.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=369)** The difference is, is that endl will also flush some buffers and that's not so necessary with modern I/O libraries, and it does take up some clock cycles and so people just don't use endl very much anymore, they'll just use the new lines, but I wanted to show you what that looks like.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=385)** And here we can fill with spaces and like that, so we can see how all of this works.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=391)** On the subject of iostreams, iostreams are also often used with files.
>
> **[6:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=396)** So here I have iostream-file.cpp, you notice I've got a file name and if you want to run this, obviously you're going to want to change this path to a path that works on your system.
>
> **[6:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=407)** This is the path that I use for the home directory on my system, I've got an integer for line number, you notice it's static, all three of these are static, these two are static and constant, and I'm going to write a file.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=421)** So I say, cout write the file, ofstream is an output file stream object for writing to a file and so I call it ofile and I give it the filename.
>
> **[7:13](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=433)** And then I use ofile just as I would cout to write to the file and then ofile close.
>
> **[7:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=440)** And then I read from the file using infile getline, so this is an ifstream and it works just like cin and here's infile is what I'm calling it, and I check while it's good, I read from the file and I print it out and then I close it, and then I delete the file with remove which is a old as time itself C function and it works just fine for this purpose.
>
> **[7:44](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=464)** So go ahead and I'll run this and you can see we write the file, we read the file, there's our text string, and we delete the file.
>
> **[7:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=472)** It's really, really simple and you'll see this quite often.
>
> **[7:57](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=477)** The iostream library is useful for basic, generalized I/O, including interfacing with the console, writing to and reading from files, for more control you may use the C standard library functions for reading and writing files, although I would not mix them.
>
> **[8:12](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/i-o-stream?u=76281980&t=492)** And for more details on iostreams, please see the companion course C++ Templates and the STL.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (4), this, (4), static (3), let (2), this. (2)
> **Definitions:** is a  (5), is an  (2)
> **File Paths:** iostream-formatting.cpp (1), iostream-file.cpp (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Transform a file (STL)
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=0)** - [Instructor] For this challenge, you will read a text file, decode it, store its data in a structure, and print the results using the standard template library.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=14)** The text file represents items in an inventory.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=18)** Each line looks like this.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=20)** Notice the tab characters.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=22)** Each line in the file has two tabs separating its three fields.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=27)** The first field is the SKU number.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=29)** That's S-K-U for stock keeping unit, here just one, two, three, and four.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=35)** The second field is the name of the item.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=38)** And the third field is the description.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=40)** The file is named items.text and you'll find it in chapter nine of the exercise files.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=46)** The output of your challenge will look something like this.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=50)** This challenge will use a lot of your knowledge from this course so far, including loops, operators, and the STL with file IO.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=58)** Expect this one to take a little longer than some of the others, perhaps an hour or longer.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/challenge-transform-a-file-stl?u=76281980&t=63)** Feel free to take your time and experiment.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2)
> **Env Vars:** sku (1), stl (1)
> **Exercise Files:** template (1), exercise files (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Transform a file (STL)
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=0)** - [Instructor] Your challenge for this chapter was to read a text file, decode it, store its data in a structure, and print the results all using the STL.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=15)** Here's my solution.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=17)** This is 09-solution.cpp from chapter nine of the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=24)** And you notice I'll be using the string class and the vector class.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=29)** I have here the path to the items.text file, your path will be different.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=35)** So you'll want pay attention to that.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=38)** I have a constant for the size of a line buffer.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=41)** I have a constant for a tab character.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=43)** I have a class for my structure.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=46)** Here's the three data members, the sku, the name, and the description.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=52)** And I have constructors, a destructor, a copy operator, and some getters, and various support methods.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=62)** This is my copy constructor.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=65)** This is my copy operator and I have a little function for splitting a string on tabs.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=71)** You notice while true, I find a tab, I push back a substring onto a vector, and then I return the vector.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=81)** So it's pretty straightforward.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=83)** Here in main, I have my buffer for reading the lines from the file.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=87)** I have my ifstream.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=89)** While good, I get line.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=91)** I split the string.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=93)** I construct the object and I print it out.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=96)** And then of course I close the file.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=98)** So I go ahead and I run this and you see the result right there.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=103)** So this is a good challenge that exercised a lot of your knowledge from this course.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/solution-transform-a-file-stl?u=76281980&t=107)** I hope you took some time to experiment and learn from the experience.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), function (1)
> **File Paths:** 09-solution.cpp (1)
> **CLI Commands:** find (1)
> **Env Vars:** stl (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Thank you
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=0)** - In this course, my goal was to provide you with a good working knowledge of C++.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=5)** I've covered the basic syntax of the language, including pointers, references, conditionals, and loops.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=11)** We've covered primitive data types, along with aggregate types like arrays and structures.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=16)** I've shown you how to create and use functions, including function signatures.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=20)** and overloaded function names.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=22)** How to create your own classes and objects, including constructors, destructors, and operator overloads.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=29)** I've shown you how to use templates in the powerful standard template library, one of the most comprehensive and flexible container libraries available in any language.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=38)** Along the way, I hope you've taken some time to experiment with the challenges and exercises and perhaps create some of your own classes for use in your projects.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=48)** C++ is a tremendously powerful language, and while I've covered the essentials in this course, it's no substitute for experience.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=56)** I encourage you to write a lot of code and continue learning from your own experiences.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=61)** For more details on templates, the SDL classes and objects, I invite you to continue your journey with the companion courses, C++ Templates and the STL and C++ Advanced Topics.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=74)** I hope you've enjoyed this course as much as I've enjoyed creating it for you.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-essential-training-15106801/thank-you?u=76281980&t=78)** Please have fun and create something wonderful with your own C++ code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), continue (2)
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