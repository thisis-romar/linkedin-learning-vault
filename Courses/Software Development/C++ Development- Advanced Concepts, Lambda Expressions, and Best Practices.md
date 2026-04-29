---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices
url: "https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices"
duration_minutes: 174
duration: 2h 54m
level: Advanced
updated: 2/2/2023
learners: 29992
skills:
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH4ZYfcBcdlTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1675206346003?e=2147483647&amp;v=beta&amp;t=U6a8XoOvSlyC-Q7cTqHRKd3yYkUEVZpD0e76DhHRI1s"
linkedin_topic: Software Development
learning_paths:
  - '[[Master C++]]'
  - '[[C++ Programming Professional Certificate by OpenEDG C++ Institute]]'
prev_courses:
  - '[[C++ Design Patterns- Creational]]'
  - '[[C++ Design Patterns- Structural]]'
path_nav: '[{"path":"Master C++","position":6,"total":6,"prev":"C++ Design Patterns- Creational","next":null},{"path":"C++ Programming Professional Certificate by OpenEDG C++ Institute","position":3,"total":3,"prev":"C++ Design Patterns- Structural","next":null}]'
path_count: 2
tags:
  - course
  - topic/devops
  - topic/software-development
  - topic/data-science
  - skill/c
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C%2B%2B%20Development-%20Advanced%20Concepts%2C%20Lambda%20Expressions%2C%20and%20Best%20Practices.md)

![C++ Development: Advanced Concepts, Lambda Expressions, and Best Practices](https://media.licdn.com/dms/image/v2/C560DAQH4ZYfcBcdlTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1675206346003?e=2147483647&amp;v=beta&amp;t=U6a8XoOvSlyC-Q7cTqHRKd3yYkUEVZpD0e76DhHRI1s)

# C++ Development: Advanced Concepts, Lambda Expressions, and Best Practices

> Looking to enhance your understanding of C++? In this course, explore some of the more complex aspects of this core programming language. From the basics of class definition to operator overloads and move semantics, instructor Bill Weinman helps you develop the skills you need to get the most out of C++. Learn about lambda expressions, concurrency, constraints and concepts, optional and variant cl

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices) | 2h 54m | Advanced | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - About this course
  - Using the exercise files
- [**1. Operator Overloads**](#1-operator-overloads) (5 videos)
  - Operator overloads
  - Nonmember operators
  - Conversion operators
  - Increment and decrement operators
  - Functors
- [**2. Move Semantics**](#2-move-semantics) (7 videos)
  - What is move semantics?
  - Understanding lvalues and rvalues
  - Using std::move
  - The move constructor
  - The move assignment operator
  - The copy-and-swap idiom
  - Rule of three and five
- [**3. Lambda Expressions**](#3-lambda-expressions) (4 videos)
  - Lambda syntax
  - Closures
  - Algorithm predicates
  - Challenge: A Lambda jump table
- [**4. Constraints and Concepts**](#4-constraints-and-concepts) (3 videos)
  - Why constraints?
  - Constraint syntax
  - Defining concepts
- [**5. Optionals and Variants**](#5-optionals-and-variants) (3 videos)
  - The optional class
  - The any class
  - The variant class
- [**6. Concurrency**](#6-concurrency) (6 videos)
  - Sleeping
  - Threads
  - The async function
  - Mutex and lock
  - Atomic variables
  - The producer-consumer idiom
- [**7. Other Subjects**](#7-other-subjects) (5 videos)
  - Initialization
  - Structured bindings
  - Random number engines
  - The chrono library
  - The filesystem library
- [**8. Other C++20 New Features**](#8-other-c20-new-features) (4 videos)
  - The format library
  - The spaceship operator
  - Integer comparisons
  - The span class
- [**Final Project and Conclusion**](#final-project-and-conclusion) (2 videos)
  - Final project: Numword
  - Thank you

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### About this course
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman and welcome to C++ Advanced Topics.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=5)** The goal of this course is to provide you with a deeper understanding of C++.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=11)** We'll start with a thorough discussion of operator overloads.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=15)** We'll cover move semantics and lambda expressions.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=19)** I'll cover the new constraints and concepts feature from C++ 20.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=24)** Options and variants provide valuable alternatives to conventional objects and variables.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=30)** We'll cover concurrency with threads a-sync and Mutex classes.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=36)** Many powerful features have been added to C++ in recent years, including structured bindings the format library, and the default comparison operator.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=46)** C++ is a rich and powerful language and your C++ projects will benefit from a deeper understanding of its intricacies.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=55)** So let's get started with C++ Advanced Topics.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [bill] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=5)** Copy the exercise files folder to a location where you can find it on your system.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=10)** I've copied it to the desktop on this system.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=13)** Wherever you put it, just make sure you can find it.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=17)** The exercise files are organized into chapters which correspond with the chapters of the lesson videos.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=24)** Each of the chapters contain C++ files for following along with the exercises in that chapter.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=31)** The exercise files are compatible with any modern C++ development environment, including Xcode, Microsoft Visual Studio, GCC, Clang, or any modern compiler or integrated development environment that supports the C++20 standard.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=50)** This is working.cpp from chapter one of the exercise files.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=55)** At the top of each file I've included a format style print function.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=60)** This uses the new formatter introduced with C++20.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=64)** A function like this will be included with C++23.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=70)** As you can see here in main, it's much cleaner and more efficient than using format with c:out.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=78)** We'll discuss the C++20 formatter later in this course.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=81)** Meanwhile, we'll use this function throughout this course.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=86)** To learn how to set up a development environment on your workstation, please see my YouTube channel, [youtube.com/bwineman](https://youtube.com/bwineman).
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=94)** The exercise files are here to make your learning experience easier and more powerful.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=99)** Take your time, experiment a lot, and happy learning.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (6)
> **CLI Commands:** find (2), make (2)
> **Code Keywords:** function (3)
> **File Paths:** working.cpp (1)
> **URLs:** [youtube.com](https://youtube.com) (1)
> **Env Vars:** gcc (1)
> **Cross-References:** later in (1)
> **Tools:** visual studio (1)


### 1. Operator Overloads

> [↑ Back to Table of Contents](#table-of-contents)

#### Operator overloads
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=0)** - [Instructor] Operator overloads provide the ability to use common operators with user-defined classes and objects.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=8)** This feature is not unique to C++.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=10)** In fact, it was one of the original concepts borrowed from ALGOL for C++.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=16)** But how C++ does it is somewhat unique and extremely powerful.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=21)** There are two distinct ways to overload operators in C++ with member functions as part of a class definition or as separate non-member functions.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=32)** In this video, we'll discuss member operator functions in your class definitions.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=38)** We'll discuss the non-member operator functions in the next video.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=43)** This is rational dot cpp from chapter one of the exercise files.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=48)** You see we're including the format library and the string library from the stl.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=54)** We're using the string symbol, importing it into our own name space.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=59)** And we have our format style print function that we're using throughout this course.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=64)** We have a constant string for not a number, NAN.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=69)** And we have our Rational class.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=72)** This is a class that performs four function arithmetic on rational numbers as fractions.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=79)** We have two data members, enumerator and a denominator.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=83)** And we have a couple of constructors.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=85)** Let's take a look at this constructor signature here.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=88)** You notice that we have default values for the numerator and the denominator.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=94)** This allows this constructor to operate as an implicitly converting constructor.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=99)** And that's a detail that'll come up later in this chapter.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=103)** We also have this copy constructor and some utility functions.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=108)** And down here, we have our operator overloads.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=112)** An operator overload is constructed by using the operator keyword as part of the name of the function and the operator itself.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=125)** And so operator equals is the assignment operator.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=129)** And then we have the four arithmetic operators: plus, minus, times and divide.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=135)** And we're going to skip down here a little bit.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=137)** We have these utility functions.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=139)** This one reduces a fraction to its lowest common denominator.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=143)** And this one prints out a string of a representation of the fraction with an integer part if the numerator is greater than the denominator and a fractional part that's been reduced by the reduce function.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=157)** And we also have a raw string function for printing out just the numerator and denominator as stored.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=165)** So this is raw.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=166)** And then we have our copy operator.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=170)** And so this operator, of course, uses the equal sign.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=173)** You'll notice that.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=175)** And so because this is an external definition of the function, it needs to be in the scope of the class itself.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=182)** And so this puts it in that scope.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=185)** You'll notice also the use of the this keyword.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=189)** And this is a keyword.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=191)** It's not a variable.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=193)** This always represents a pointer to the current object.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=198)** And so when this class is instantiated as an object, this will contain the address or the pointer to that object.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=206)** And we can compare it with the right hand side.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=209)** Because we have a reference to the right hand side, we can use the address of operator to get the address of the right hand side, and we can compare them to see if they're the same object.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=219)** And if they are the same object, then obviously, we don't need to copy anything over.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=224)** And we just return, again, we're returning a reference to the current object.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=231)** And so we do this by de referencing the pointer.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=234)** And that gives us the object itself.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=236)** And we can return a reference to that object with the reference operator.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=241)** The point of all of that is that this allows us to chain assignment operations.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=246)** And so we can say x equals y equals z, which is required by the C++ standard.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=251)** So assignment operators will usually look very much like this.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=257)** And then we have our four arithmetic operators.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=261)** We have addition, subtraction, multiplication, division.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=263)** And each of these simply uses the formula that we learned in high school for performing these operations on fractions.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=272)** Our destructor doesn't really need to do anything, because we're not allocating any memory, and so I'm just resetting the values.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=280)** And even that is probably pointless in a destructor, but it's just there.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=284)** We have a formatter specialization that allows us to print using the print function, which uses the format library.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=292)** And it allows us to print our object.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=295)** And we're simply using the str function from the object itself, which prints out a representation of the fraction with an integer part and a fractional part and properly reduced.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=310)** And we'll talk more about the formatter specialization later in this course when we talk about the format library.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=316)** And then here in main, we test it out.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=319)** I'm going to go ahead, and I'm going to build and run this.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=322)** And you can see what it does.
>
> **[5:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=324)** Here we construct it with a simple integer,.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=327)** Of course, because we have that default constructor, the implicitly converting constructor, this gives us 7 over 1, because the denominator defaults to 1.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=338)** Here we have 25 over 15, which is equivalent to 5 1/3.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=344)** We use a copy constructor.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=345)** We use a default constructor to construct an empty one.
>
> **[5:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=349)** And so we see down here that d equals 0 over 1, which is the default values.
>
> **[5:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=355)** And an assignment operator, we use a reference, and so this line down here assigns to self.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=360)** And you know, of course, that tests out our assignment operator not actually assigning anything when it's the same object.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=369)** And then down here we do our arithmetic.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=371)** And so if we look at our results, we see that 25 over 15 is equal to 1 2/3.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=379)** And so the str function which is used by the formatter specialization, it prints out 1 2/3.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=391)** And if we come down here, and we do our arithmetic, you notice how simple it is to simply say, a plus b, a minus b.
>
> **[6:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=399)** And this is because of our formatter specialization and our operator overloads working together.
>
> **[6:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=404)** And we get these results.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=406)** A plus b equals 8 and 2/3, so that's 7 plus 1 2/3, right?
>
> **[6:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=410)** A minus b, a times b and a divided by b.
>
> **[6:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=416)** Operator overloading is a fundamental part of C++.
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=419)** It's as easy to do as defining a class method.
>
> **[7:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=422)** We'll look at non-member functions for operator overloads in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), this. (2), class. (1), let (1), return, (1)
> **Cross-References:** in the next (2), later in (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** algol (1), nan (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Nonmember operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=0)** - [Instructor] In our last video, we discussed operator overloads with member functions.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=5)** In this video, we'll look at why and how you may sometimes use non-member functions for operator overloads.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=13)** This is Rational.cpp from chapter one of the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=18)** In the previous video, we overloaded the four basic arithmetic operators with member functions and we can see their signatures right here and we can see their implementation down here.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=31)** There's an important circumstance where this just doesn't work.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=36)** So let's take a look at that and come down here to our main, and we're going to add a line.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=45)** We'll say print B plus 14 equals, and we'll say B plus 14.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=56)** And I'll go ahead and I'll run this and you'll see that this works as expected.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=59)** We got B plus 14 equals 15 and two thirds, and B, of course, is one and two thirds.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=66)** So we're getting the result that we want.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=68)** Why does this work?
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=71)** Because here we're adding a rational and we're adding an integer to the rational.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=75)** So how is it that that's actually working?
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=79)** Well, if we come up here to our implementation, you'll notice that the right hand side is a rational number.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=87)** And so, what happens is the compiler sees B plus 14.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=91)** And so it first looks at the B and it says, oh, that's a rational number.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=95)** Do I have an overload for adding something to the rational number?
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=99)** And it does, and it has this the right hand side though is rational.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=103)** And so it says, okay, can I promote this value this integer to a rational?
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=108)** And of course, it can.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=109)** And the reason that it can is here in this rational constructor where the first argument is an integer, the second argument is an integer but they have default values.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=120)** So it'll take one integer number and it'll implicitly convert that into a rational number with that integer, with a zero denominator.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=131)** And so here, that gets promoted to a rational object and a temporary object is created and that's used.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=139)** And so this right hand side is now rational object.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=143)** So let's take a look at that in action.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=145)** We'll come in here and we'll put it in a little print statement and we'll say print operator plus.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=154)** And the right hand side is that, and we'll say righthandside.rawstring, all right?
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=165)** And now when I run this for our addition here, well every time we have an addition here we have where the right hand side is B, which is 25 over 15.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=176)** And here we have our last one, the one with the integer here, 14.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=181)** And it says, our right hand side is 14 over one.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=184)** And so it's implicitly converted that integer to a rational number.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=189)** Now, let's turn it around and see what happens.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=193)** I come in here and I say 14 plus B and I'll just copy that and I'll paste that in over here.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=201)** And you'll notice that we immediately get this error.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=205)** It says invalid operands to binary expression.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=209)** So the binary expression, of course, is the addition.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=212)** And you notice that's underlined with little red underline there, and it has the two types, int on the left and rational on the right.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=221)** And here we have an integer on the left and we have a rational on the right.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=225)** And so the compiler looks at this and it looks at the 14, and it says, okay, this is an integer.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=230)** Do I have addition operator for an integer?
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=233)** And it says, yes, I do.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=235)** And it does not have one for an integer on the left and a rational number on the right.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=242)** And that's why this is not working.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=245)** Okay, now, how do we make this work?
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=248)** Well, the way we make this work what we need is we need an operator plus with two operands instead of an operator plus, which is one operand.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=258)** That's part of the class definition here as this one is.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=263)** And so, we're going to change this and make this a non-member operator which will have operands on both sides.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=272)** So the first thing I need to do is I need to come up here into our class definition, and I need to get rid of that.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=279)** So I'm just going to comment that out for now.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=281)** We now no longer have a plus operator in this class definition.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=286)** And down here you'll notice the compiler is complaining that it doesn't match any declaration in the rational class.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=293)** And so let's take it out of the rational scope.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=298)** Now we have rational operator plus and we can give it two operands.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=303)** So we can say left hand side and right hand side.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=307)** And this constant no longer applies because it's not part of a class definition anymore.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=311)** And now we have two operands And so here I can just say adding and we'll just give it the two sides, right?
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=322)** This is just for display purposes and I have this right hand side here.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=327)** And so I can just make this one left hand side and now it'll print out, it'll say, it'll show us our two operands, left hand side and the right hand side.
>
> **[5:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=337)** Now, we need to deal with all of this.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=339)** When it was a member function we could just refer to our private member data.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=345)** And the N is the numerator up here in our private member data but we can't use that like that anymore.
>
> **[5:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=352)** But you'll notice, I'm sorry for all the scrolling here.
>
> **[5:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=355)** You notice that we have numerator and denominator, getters functions that will return those values and this is convenient for this purpose.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=364)** So now here instead of this end I say lefthandside.numerator, right?
>
> **[6:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=373)** And for this right hand side I have to say denominator instead of the D.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=377)** And I have lefthandside.denominator and righthandside.numerator, and again lefthandside.denominator and righthandside.enumerator.
>
> **[6:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=393)** And so we're using exactly the same formula but now we're kind of spelling out exactly what we're doing but it's exactly the same formula.
>
> **[6:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=402)** So now it should work.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=403)** Now, when the compiler sees that integer on the left and the rational on the right, it'll look and it'll see if it's got some function that will work with both of those.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=412)** And this becomes now a non-member operator overload.
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=419)** And you notice our error has gone down here.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=421)** I'm going to compile and run this, and you see that we now have the result that we want.
>
> **[7:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=427)** Our non-member operator is being called for both of these.
>
> **[7:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=430)** So we have adding 25/15 plus 14/1 and 14/1 plus 25/15.
>
> **[7:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=438)** Again, it's promoting our integer implicitly promoting it to a rational number and it's giving us the result that we want.
>
> **[7:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=448)** So there are circumstances where you'll want to use non-number functions for your operator overloads and C++ supports as well.
>
> **[7:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=456)** As a rule of thumb, whenever you have a constructor that allows implicit conversions like this one does, you'll want to think about non-number overload functions.
>
> **[7:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=466)** These functions, of course, still go in your implementation file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), private (2), class. (1), this. (1)
> **CLI Commands:** make (4)
> **Definitions:** is an  (3), is a  (1)
> **Cross-References:** we discussed (1), previous video (1)
> **File Paths:** rational.cpp (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Conversion operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=0)** - [Instructor] The conversion operator is somewhat of a special case, sometimes called a conversion function.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=6)** You can think of this as overloading a cast operator for casting your class to another type.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=12)** Let's take a look at an example.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=15)** This is rational2.cpp from chapter one of the exercise files, and you'll notice that I've included the string class.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=22)** I'm using STL strings throughout this course.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=26)** And you'll also notice that this version of the rational class, I've taken all of the operators, and I've implemented them as non-member functions so they work with implicit conversions.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=36)** See the video Non-member Operators earlier in this chapter for more explanation.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=42)** So what happens if we want to use our class with an STL string?
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=46)** I'm going to come down here into main, and we'll declare a string, and I'll give it a value here.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=53)** I'll say "Rational is" with a space.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=58)** And then I'm going to concatenate a rational number.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=62)** And so I'll say s += a.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=66)** What we want this to do is we want this to take the string representation of a and concatenate it to the end of our STL string so it says, "Rational is," or whatever it is.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=76)** I believe that's 1 1/3 for the value of a.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=79)** And you'll notice that we get this error.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=81)** No viable overload +=.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=84)** And that's because we have a string object on the left-hand side and a rational object on the right-hand side of our plus-equal operator, and there is no overload for that.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=99)** So we solve this by adding a conversion operator to our class for a string value.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=104)** And that'll allow the rational object to operate as if it were a string, and to return a viable string value that can be concatenated to our string object.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=118)** So I'm going to come back up here into our class.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=120)** And this is actually extremely simple to do.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=124)** All I do is I come up here and I say, operator string return str like that.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=140)** And now we come back down into our main.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=143)** You'll notice that our error has gone away, and I can come out and I can print our string.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=151)** Or, why don't I give it a new line?
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=153)** I'll just say like that.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=158)** And when I build and run this, you'll notice that our string says, "Rational is 1 1/3," just as we expected.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=164)** And how's it happening?
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=165)** We have the string s, "Rational is."
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=169)** And we can concatenate the rational value, but because this expression is expecting a string, the compiler looks for a string conversion operator.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=182)** And this works as expected.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=184)** This works anywhere a conversion can happen.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=187)** For example, I can come up here and I can create a function that expects a string, and I can print the string.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=203)** Give it a capital T for consistency there.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=206)** And down here, instead of all of this, I can simply call p a like that.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=213)** And when I build and run, notice it says, "The string is."
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=217)** So what's happening is that the a, our rational object, a, is being passed to this function, and it sees that it requires an s.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=226)** And so it says, "Okay, do we have a conversion operator for that?"
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=229)** And it converts it to the string, and then it prints the string.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=234)** So just a little extra little detail here.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=241)** Where it says operator string, we can actually say auto.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=245)** And we can use the auto type for this.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=247)** And because it's returning a string object, it knows at compile time it will create a string conversion operator.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=257)** And I can build and run this, and you'll see that it works exactly as we expect.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=263)** The conversion operator overload is a common and useful technique that allows you to use your class as a first-class type, fully controlling how it is cast to other types.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (3), class. (2), case, (1), type. (1)
> **Env Vars:** stl (3)
> **File Paths:** rational2.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Increment and decrement operators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=0)** - [Instructor] The unary increment and decrement operators are special cases with a few interesting twists.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=7)** This is increment decrement dot cpp from chapter one of the exercise files, spelled thusly, incr-decr.cpp.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=18)** And here we have a class that's just a simple wrapper class that implements the increment and decrement operator so you can see how they work.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=27)** We're simply wrapping this integer value in this class.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=31)** We have getValue, setValue.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=33)** We have a conversion operator to convert it to an int if we need that.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=37)** And then we have the four operators that we're working with here.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=41)** Two increment operators and two decrement operators.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=45)** And you notice that we have operator++ twice and operator-- twice.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=51)** And the reason for this is that each of these increment and decrement operators has both prefix and postfix versions.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=59)** So there's prefix and postfix increment and prefix and postfix decrement.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=64)** So that makes four operators in total.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=67)** How does the compiler tell the difference from prefix and postfix?
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=71)** The prefix looks just like that and the postfix has the keyword int in the parameter parentheses.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=80)** And this is not because it's passed a parameter, and it's not because our class is wrapping around an integer value.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=86)** The int is used in all cases and it's just there as a little hack to tell the compiler that this is the postfix version of the increment operator.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=98)** And the same with the decrement operator.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=101)** So here's how the actual code looks for our increment and decrement operators.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=107)** It's very simple.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=108)** We have a little print statement to show which operator we're using.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=112)** Obviously, in production we would not include that.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=116)** All we do is we increment the value and we return a reference to the object with this keyword.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=124)** That's pre-increment.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=125)** Post-increment is slightly more complicated, not much.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=129)** First we take a copy of our object, then we increment the value and then we return the copy that we took before the increment.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=139)** And this allows us to increment after the fact, after we return the value.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=144)** So, not actually incrementing after the return coz obviously we can't do that so what we do is we save this copy, we do the increment and then we return the saved copy that we had saved before the increment.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=158)** Same thing in the decrement.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=161)** Exactly the same code except we're decrementing instead of incrementing.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=165)** We have a little formatter specialization.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=168)** You'll notice that we use our getValue member function.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=172)** And then here in main, we print a value, we increment it, and then we print a value.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=178)** And so, I'm going to go ahead and run this.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=181)** And you'll see that it says the value's 42.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=184)** We initialized our object with the value 42, and then we increment and we see it says pre-increment value's 43.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=194)** That's because we put the ++ in the prefix position before the object.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=201)** And then you notice that afterwards the value is still 43.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=204)** If I move this ++ to the postfix position and run this again, you see that post-increment, our value is 42.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=214)** And then the next time we look at the object, it is 43.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=218)** And the same is true, obviously for decrement.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=223)** We have the prefix decrement where it decrements right away, and we have the postfix decrement where it decrements effectively after the statement.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=234)** It's worth understanding the increment and decrement operators, even if it's just to know that the postfix versions are a bit more expensive than the prefix versions.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=243)** And this is why many of us prefer the prefix operators in cases where it otherwise doesn't matter.

> [!info]- Semantic Content
>
> **Code Keywords:** implements (1), class. (1), function (1), this. (1)
> **Code Identifiers:** getvalue (2), setvalue (1)
> **File Paths:** incr-decr.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Functors
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=0)** - By overloading the function operator you can create an object that operates as if it were a function.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=6)** This pattern is often called a funktor.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=9)** This can be a handy technique for circumstances where you need to keep state or other context information with your function calls.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=18)** This is funktor dot CPP from chapter one of the exercise files.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=22)** And you'll see down here we have a class called multiply by or Multiby.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=27)** We have a multiplier as a data member.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=31)** We have a constructor where we can assign it a multiplier and then we have the operator overload.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=37)** And you'll notice we're using the operator keyword just like with any operator overload.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=41)** But the operator that we're overloading is the function call operator and we have defined it with one parameter.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=49)** So we pass our functor one parameter and we return the product of our multiplier and the number that we're passing to the function call operator.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=61)** Very simple.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=62)** Now we declare three objects of type multiply.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=66)** We have one called times four that's initialized with a value of four.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=71)** We have times 10 and times 15, and then we call them and we're multiplying each of them by five and 15.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=79)** And we go ahead and we run this and we see that we have the results that we expect.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=83)** Five times four is 20 15 times four is 60, and et cetera, et cetera.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=91)** Now there's another common approach to the same problem and this is using an Lambda expression.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=96)** Lambda expressions were introduced with C plus plus 11.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=100)** They become very common for this purpose.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=103)** Obviously before Lambdas, we used funktors a lot more but now we seem to use Lambdas a lot more.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=109)** And this is what this looks like.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=111)** I'm going to go ahead and I'm going to comment out this, this one here.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=114)** Actually, I'm going to use the comment function on my IDE which I'll put the comment there, and I'll declare a Lambda const auto, we'll call it times 15.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=126)** And this is what a Lambda looks like.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=129)** We'll cover Lambdas in a lot more detail later on in this course.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=132)** And a, we have a chapter for Lambdas.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=140)** So this is our Times 15 Lambda.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=143)** And it looks like that.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=145)** And it works exactly the same.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=146)** If you'll notice our, our Times 15 results are 75 and 225.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=152)** And I go ahead and I run this and you see that we get exactly the same results.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=157)** For many use cases Lambda are simpler and more straightforward and you'll see them a lot and we'll cover them in detail later in this course.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=165)** The function operators a handy way to create an object that works like a function yet has the ability to keep state and other information between function calls.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), lambda (6), pass (1), this, (1), const (1)
> **Env Vars:** cpp (1), ide (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - by (1)


### 2. Move Semantics

> [↑ Back to Table of Contents](#table-of-contents)

#### What is move semantics?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=0)** - [Instructor] Move semantics represents an important and valuable addition to the C++ language.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=6)** Move semantics was added to the language with the C++11 standard.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=11)** To illustrate the need for move semantics, let's consider an example without move semantics.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=17)** This is a function that takes an object of type T and returns an object of the same type.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=23)** This function uses Call by Value, which means that when the function is called, an object is constructed for use by the function.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=32)** This object has the scope of the function, so it's considered temporary.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=36)** Because the function also returns by value, another new object is constructed for the return value.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=43)** At this point, two new objects have been constructed, one of them is a temporary object that's only used for the duration of the function.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=51)** When the new object is created for the return value, the copy constructor is called to copy the contents of the return object to the new object, b.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=61)** After the function completes, the temporary object used in the function goes out of scope and is destroyed.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=68)** Let's consider what a copy constructor does.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=71)** It must first initialize the object, then copy the relevant data from the old object to the new object.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=79)** Depending on the class, perhaps it's a container with a lot of data, this could represent a substantial amount of time and memory usage.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=87)** With move semantics, it's now possible to mitigate most of this work by simply moving the data rather than copying it.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=96)** Moving the data simply involves reassociating the data with the new object, no copy takes place at all.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=103)** This is accomplished with something called an Rvalue reference.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=108)** A traditional C++ reference type is now called an Lvalue reference in order to distinguish it from the new Rvalue reference type.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=118)** An Rvalue reference works very much like an Lvalue reference with one important distinction.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=124)** An Rvalue reference can be moved, an Lvalue reference cannot.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=131)** Move semantics creates a number of significant opportunities for improvements in both efficiency and memory usage.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=139)** In the next video, we'll look at how this powerful new language feature works.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (2), type. (2), class, (1)
> **Definitions:** is a  (2), is called (2), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Understanding lvalues and rvalues
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=0)** - [Instructor] In order to fully understand move semantics, you'll need to understand the concepts of Lvalues and Rvalues.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=7)** For example, here we have an assignment expression.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=10)** In simple terms, any expression that can appear on the left-hand side of an assignment is an lvalue.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=17)** Likewise, an expression that can only appear on the right-hand side of an assignment is an rvalue.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=24)** Notice the distinction.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=26)** An lvalue can appear on the left side of an assignment may also appear on the right side but it's still an lvalue, because it would be legal for it to appear on the left.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=36)** The rvalue gets its name because it can only appear on the right side of an assignment.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=41)** Essentially, the l stands for left, and the r stands for right.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=46)** This is the traditional definition, but it's necessary to refine it a bit in order to support move semantics.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=53)** The most important distinction here is that an rvalue can be moved.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=58)** So, how exactly can you tell if it's an rvalue?
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=61)** A temporary value that's ready to expire is also called an x value or an expiring value.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=68)** Typically, this is a nameless value like the result of an expression.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=73)** A literal value is sometimes called a pure rvalue or a prvalue.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=78)** Typically, this category includes literal values and anything returned from a function that is not a reference.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=84)** A prvalue can be moved.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=88)** The null exception is a literal C-string.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=91)** A literal C-string cannot be moved.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=94)** Any movable object may be cast to a prvalue with the standard move function.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=100)** In the rest of this chapter, we'll explore some examples of move semantics in action.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), stands for (2), is a  (2)
> **Code Keywords:** function (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using std::move
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=0)** - [Instructor] The C++ Standard Library provides a template function called move, which tells the compiler to treat an object as a movable R value.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=9)** While standard move looks like a function call, it actually works more like a typecast.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=15)** This is vectortest.cpp from chapter two of the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=20)** Let's take a look at how a move operation works in practice.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=24)** The standard move utility function is in the utility header.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=29)** We have this convenient function disp_v.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=32)** This is simply for displaying the contents of a vector, and we'll talk about this swap function in a minute.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=39)** First, let's get down here to main.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=41)** And we see we have two vectors of string.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=44)** That's the STL string class, and they have the content one, two, three, four, five, and six, seven, eight, nine, 10.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=51)** I'm want to go ahead and build and run this.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=53)** We're displaying them with the disp_v function.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=56)** And when I run it, you see we have v1 is one, two, three, four, five, and v2 is six, seven, eight, nine, and 10.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=66)** Now, I can copy the contents of v1 into v2.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=70)** I can say v2 equals v1.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=73)** And that treats this equal sign as a copy assignment operator.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=78)** And that's v2's, copy assignment operator.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=81)** And so that tells the object v2 to copy the contents from v1 and put them in its own contents.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=88)** And so when I run this, now you see that both of the vectors have the same content.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=96)** And it's the content that was originally in v1.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=100)** And let's just go ahead and copy these up ahead here so we can see the before and after.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=105)** Because what we're going to do now is we're going to move the contents from v1 into v2, rather than copying.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=111)** So I'm going to say standard move.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=114)** And I'll put parentheses around the v1 there.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=118)** And what this does is it tells the v2 copy operator to treat v1 as a movable R value.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=126)** And so instead of copying, it's simply going to move using the move semantics.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=131)** It's going to move the contents of v1 into v2, and leave v1 empty.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=136)** And so we'll go ahead and we'll run this.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=138)** And you see that we have before the move, we have v1 and v2.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=143)** And after the move, v1 is empty and v2 has the contents that were in v1.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=150)** So the contents of v1 were moved to v2, not copied.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=154)** This saves all the overhead of copying, and it destroys whatever content was in v2 before the move and replaces it with the contents of v1.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=163)** And it makes sure that v1 is in a valid empty state.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=167)** But all of this happens with a lot less overhead, and a lot quicker than with a copy.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=174)** Move can also be used to create a swap function.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=178)** And here, here we have a swap function.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=181)** There's also a swap function in the utility header.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=183)** And we'll get to that in a moment.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=185)** This is the swap function in our own name space scope.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=189)** And so it has two columns without a name space.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=193)** And so I would say it like this.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=198)** Swap v1 and v2.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=200)** And I don't need the assignment anymore.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=203)** And so this will swap these two objects that are passed to it.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=209)** And the way it works is it creates a temporary object of the same type.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=213)** So we have the type T from the template.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=216)** It creates a temporary object, and initializes it with a move from one of the two objects.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=223)** And then it assigns with the move from B, and so it's a move assignment, not a copy assignment.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=230)** And then it moves the temporary object into B.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=233)** And so it's just a little juggling operation.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=235)** It's actually very simple and very quick because these are all moves, and there aren't any copies here.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=241)** And so when I build and run this, you'll see that v1 and v2 are now swapped, and they're no longer the same.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=250)** I have this little print statement here swapped to show that we're calling our function, but we can call the standard swap function instead.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=258)** And it works exactly the same.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=260)** We'll go ahead and run that.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=262)** And you can see that it works exactly the same.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=263)** The only reason we have ours is so that you can see how it operates.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=268)** The standard move and standard swap functions are fundamental tools for use with move semantics.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=274)** We'll be using them a lot as we work with move semantics in the rest of this course, and of course, in your own code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (3), this. (3), this, (2), class, (1)
> **Exercise Files:** template (2), exercise files (1)
> **File Paths:** vectortest.cpp (1)
> **Env Vars:** stl (1)
> **Speakers:** - [instructor] (1)

#### The move constructor
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=0)** - [Instructor] In order to take advantage of move semantics in one of your own classes, you'll need to create a move constructor.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=7)** This is container dot cpp from chapter two of the exercise files.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=11)** And you'll see down here, we have a class called container.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=15)** This is a simple wrapper class with helpful print statements inserted to show where its constructors and destructors are called.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=24)** Our payload is a vector.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=26)** And we're using a vector, because it's movable.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=28)** Keep in mind that primitive types like int and float are not movable.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=33)** And I'll come down here.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=35)** We can see our constructors have little print statements.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=38)** We have an initializer list constructor, a copy constructor, copy assignment operator and our destructor.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=45)** We have a little string function that returns a string representation of our vector.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=50)** And we use that down here in our print statements, a string, b string.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=54)** We have our two containers that we're declaring in our main.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=58)** And there are containers of string.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=60)** And a has 1, 2, 3, 4, 5, and b has 5, 6 and 7.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=66)** And you'll notice that I have a container c that gets initialized from a.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=71)** And so that'll call the copy constructor.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=74)** And we'll see how this works.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=75)** We'll go ahead and run this.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=77)** You can see that we call the initializer list constructor twice.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=82)** And a is that, and b is that, as we expect.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=85)** Then we call the copy constructor.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=87)** And c is now the same as a.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=90)** And then we get three destructors as everything goes out of scope, which is as expected.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=96)** Now if I were to say standard move here, you'll notice when I run this, nothing changes.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=104)** We're still calling the copy constructor, because all that the move function does is it casts the object a as being a movable rvalue.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=114)** But we don't have any constructors here that can move it.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=118)** No constructors using the rvalue reference.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=121)** And so let's go ahead and create one.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=123)** I'm going to close our output window here and make a copy of the copy constructor.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=130)** And we'll change this to a move constructor.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=134)** All right?
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=134)** And we do this by, we take out the cons here, and we add a second ampersand, so the double ampersand there is the rvalue reference.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=146)** So now when it sees an rvalue, it can use the rvalue reference instead of the lvalue reference.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=153)** And that's really all that makes this a move constructor.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=156)** We also need to add a noexcept specifier so that this operation cannot be interrupted and leave the right hand side object in an unusable state, in an unknown state.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=169)** And so we need this here.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=170)** And in fact, some compilers won't even recognize a move constructor without that.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=176)** And so we'll come down here into our implementations.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=181)** And we'll make a copy of our copy constructor.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=184)** And we'll change this to a, we'll call it a move constructor.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=188)** And we'll do all the things that we need to do to make it a move constructor.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=192)** We take the const out, because we're actually modifying the right hand side, right?
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=196)** We're moving from it, and so we're leaving it in an empty state.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=200)** And I'll add the ampersand to make this an rvalue reference.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=204)** And I'll add noexcept here.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=207)** And then we need to move the vector.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=211)** So remember the vector is called things.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=213)** We need to now move that instead of copying it, right?
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=217)** So I stay standard move.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=219)** And I put parenthesis around all of that.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=222)** And now we have a move constructor.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=224)** Really, that's all there is to it.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=226)** We need to declare it with the rvalue reference.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=229)** We need to have the noexcept.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=231)** And we need to move instead of copying our payload, our data.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=236)** And so now we already have the move down here.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=238)** And so when I build and run this, you notice that it's calling our move constructor.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=245)** And it's leaving the a object empty, which is exactly what we expect.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=250)** So now it's moved that vector over rather than copying it.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=256)** Whenever the source of the construction is an rvalue, it'll now call this move constructor instead of the copy constructor.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=265)** If we didn't have this as we saw before, it would simply call the copy constructor in either case.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=271)** So that works as expected.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=272)** There's one more thing that is worth noting.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=276)** Remember that a return of a temporary object from a function is considered a movable rvalue, because the temporary object would be destroyed otherwise anyway, and so this makes it an rvalue.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=290)** So whenever I call this function here, what's returned is an rvalue, right?
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=299)** And so instead of this standard move, I simply put f here, what's going to happen?
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=305)** Well, first, you'll notice that the parameter to f is not a reference at all.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=311)** So a copy will be made, and a copy constructor will be called.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=315)** And then it'll be returned.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=317)** And it'll call the move constructor for c.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=321)** And we only get one copy operation instead of two.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=325)** All right?
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=326)** And so when I build and run this, you'll notice that c is now constructed with the move constructor.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=333)** We have the copy constructor for the function call, and that creates a temporary object.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=339)** Then we have the move constructor which moves the values, the data, the payload, from that temporary object into the new container object.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=350)** And then we have a destructor is called for the temporary object that was created in the function call.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=356)** And so this is where the efficiency really happens.
>
> **[5:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=359)** We're no longer destroying a, because a was copied into the function rather than moved.
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=365)** If we wanted to actually move a here, we would have to make an rvalue reference up here.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=371)** And we would have to then call move here.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=377)** And now a will be emptied, because we're moving everything.
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=381)** And we notice that we only have one move constructor, and a is left empty.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=385)** But under normal circumstances, a function call return is a movable rvalue.
>
> **[6:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=395)** And so we save ourselves a copy when we do things this way.
>
> **[6:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=399)** And there it is like that.
>
> **[6:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=401)** So having a move constructor is an important part of supporting move semantics.
>
> **[6:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=405)** And we'll look at some more ways to support move semantics as we continue in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), this, (3), this. (1), let (1), const (1)
> **Definitions:** is a  (3), is an  (3), is called (2)
> **CLI Commands:** make (5)
> **Cross-References:** as we saw (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### The move assignment operator
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=0)** - [Speaker] Along with the move constructor.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=2)** The move assignment operator is also an important part of supporting move semantics in your code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=8)** This is container 02.CPP from chapter two of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=15)** And this version of our container class includes the move constructor that we added in the last video.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=25)** Now if we come down here into main and we see that we're calling our move constructor, I can run this and we can see the results there.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=35)** We call the move constructor and then a is empty after that.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=40)** Instead of this, let's create a container we'll call it container string and say c I need to add the template parameter there because we're going to leave it default constructed.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=55)** And that means that there's no way for the statement to automatically deduce the type.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=61)** And then I'm going to say c equals a like this.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=65)** And then we'll print out a and c like we have been doing there.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=70)** I'll go ahead and I'll run this and you'll see that it calls the copy assignment operator c.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=75)** The default constructor is called for the new c object. That's this here.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=81)** And then the copy assignment operator is called and a and c have the same value.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=86)** Now if I instead say standard move a and run that, you'll notice that it still calls the copy assignment operator because there is no move assignment operator.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=102)** And so let's go ahead and create one.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=104)** I'm going to close our output window here.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=107)** Here's our copy assignment operator and I want to make a copy of that and just paste in another one.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=115)** This cannot be const because we're going to be clearing the right hand side.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=120)** We add our Rvalue reference there and we say noexcept.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=126)** You'll recognize all of that from the previous movie when we created the move constructor.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=132)** And then I'll come down and I'll find the copy assignment operator and just like I did with the constructor, I'll go ahead and I'll make a copy of that and we'll change it to a move assignment operator, cuz most of it's the same.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=146)** Just a couple little changes we need to make.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=148)** We need to take out the const and we need to make this an Rvalue reference and we need to put in noexcept and then we need to do a move instead of the copy there.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=163)** And now we'll come back down here.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=164)** We see we're calling our assignment with a move.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=168)** And so we should get the move assignment operator.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=171)** Here's the move assignment operator.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=173)** We're running it and a is now empty and c has the contents from a So, just like with the move constructor, this method needs to be marked noexcept, we have that right there.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=187)** We must access the right hand side data members directly.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=191)** And so we can't have a const here because we're going to be moving the data and that modifies the right hand side object.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=198)** And it's worth noting that because our data member, our payload is a vector, the move operation leaves the right hand side object in a valid state.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=207)** Otherwise we would need to reset it ourselves.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=210)** The move assignment operator is an essential part of supporting move semantics in your class.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=215)** It's very easy to implement and you should always consider supporting it when you provide support for a move constructor.

> [!info]- Semantic Content
>
> **Code Keywords:** const (3), let (2), this, (1), type. (1), this. (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is called (2), means that (1), is a  (1), is an  (1)
> **Exercise Files:** exercise files (1), template (1)
> **Analogies:** just like (2)
> **File Paths:** 02.cpp (1)
> **Env Vars:** cpp (1)
> **Cross-References:** in the last (1)

#### The copy-and-swap idiom
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=0)** - [Instructor] There's one more optimization we can provide here, and this is for the non-move version of the assignment operator.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=7)** It's called the copy-and-swap idiom.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=10)** This is container-03 from chapter 2 of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=14)** This has the container class with our move constructor, and our move assignment operator from previous videos in this chapter, and if we come down here into main, you can see that we're constructing our two container objects with string types, and we print them out and then we assign A to B.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=37)** So, this copies A into B, and then we print them out, and when we run this, you'll see that we have our initializers, here's A, here's B, and then our copy assignment operator, which gets called on the assignment, and A and B are now the same.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=57)** Now, we're going to apply our copy-and-swap idiom and make this more efficient.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=62)** I'm going to close the output window here for a moment, and we'll come up here, and our copy assignment operator is going to change.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=73)** Instead of the copy assignment operator, we're going to create a copy swap operator And we'll just call this copy/swap, and we'll come down and modify the operator itself.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=91)** Now, this is the copy assignment operator, See here, we don't want a reference.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=98)** So, it looks like that, and then we'll come down into our copy assignment operator, and we'll do the same thing, we'll take out the reference and the const, and instead this object is going to be copy constructed when it's called.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=113)** Now, copy construction is actually a bit more efficient than creating a temporary object, and so we're going to change this to say copy/swap, and we'll do the same thing here.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=129)** And now instead of all of this, we simply say standard swap, and our things, right hand side .things.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=142)** So, this swaps our vectors, and when we call this now with our assignment, you'll notice that the copy/swap operator gets called.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=155)** There is one constructor the, copy construct, when the right hand side is passed to our function member and then the swap, and the destructor of the temporary object.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=167)** So, this is very easy, and it's very efficient, but it's not really the whole thing.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=173)** There's a free bonus with this.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=175)** If I come in here and I say standard move, and this is why this is so cool, really, you notice that it's complaining that we have an ambiguous operator, and that's because we actually no longer even need our move assignment operator.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=195)** The copy/swap does both now, and I'm going to come in here and we'll delete this as well 'cause that's going to complain about that, and what happens now, is when we have a movable are value, like this, then that movable are value, that will call the move constructor on the temporary object.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=219)** So it creates the temporary object, but it creates it with a move constructor instead of a copy constructor, and that move constructor is incredibly efficient, and then it simply swaps the values, just like our copy assignment operator would, and destroys this temporary object that was move constructed.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=236)** And so when I now build and run this with the move, here, what happens, we call our move constructor, right?
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=245)** Because this is being passed by value, but it's a movable object now, it's a movable are value, and so it calls the move constructor, and then it swaps the values and it calls the destructor, and our A is now empty as we would expect.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=261)** And again, if we do this as exact same function as being called the copy/swap operator, we do it without the move, A and B are now the same, and when we have the move in there, it does the move instead, and so now we have one operator, one assignment operator that does both copy and swap, and we no longer need our separate assignment operators.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=289)** This is a remarkably efficient solution.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=292)** You now have both copy and move assignments in one implementation.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=295)** It's shorter and it's more efficient than the separated equivalence.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), function (2), const (1), this. (1), delete (1)
> **Definitions:** we call this (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Rule of three and five
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=0)** - [Instructor] If a class requires a user-defined destructor, a user-defined copy constructor, or a user-defined copy assignment operator, it almost certainly requires all three.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=12)** This rule is commonly referred to as the rule of three.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=17)** The rule of three is a generally accepted rule in C++ that says if you define any of these three member functions in your class, a destructor, a copy constructor, or a copy assignment operator, you'll need to define all three.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=32)** Of course, all of these have default versions generated by the compiler, but the rationale is if you need to define one of them, then the default version is probably not sufficient for any of them.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=44)** Realistically, if you're defining any of these functions, that means that you're managing data, so the default version of any of these functions is probably not going to manage your data correctly.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=56)** With move semantics, the rule of three becomes the rule of five.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=60)** The reasoning here is the same, but with the addition of the move versions of the constructor and assignment operator.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=67)** If you're implementing the copy and swap idiom, then both your copy assignment and move assignment will be handled by one member function.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=75)** So some may reason that it's the rule of four or four and a half, but that's not really accurate.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=81)** The reality is that with a copy and swap assignment operator, the object still provides all five functionalities.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=90)** The rule of five is an extension of the rule of three that includes support for the move constructor and the move assignment operator.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=97)** Best practice is anytime you're managing data members, you probably want move semantics, so you'll usually need to implement the rule of five.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Code Keywords:** class, (1), function (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Lambda Expressions

> [↑ Back to Table of Contents](#table-of-contents)

#### Lambda syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=0)** - [Instructor] A lambda expression is an anonymous function that can be stored as a variable for later use.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=7)** It can be passed as a parameter, stored in a data structure, and called in varying contexts with different parameters.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=14)** It's as flexible as a function but with the mobility of data.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=18)** This is lambda-hello.cpp from chapter three of the exercise files, and down here we have a minimally correct lambda expression.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=28)** It has an empty capture list and it has one statement in its body.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=33)** We assign the lambda to the variable x using the auto type, you always use the auto type for assigning a lambda to a variable, and we call the lambda with the function call operator.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=48)** And when I build and run this, you'll see we get the results that we expect.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=53)** We can have a lambda return a value instead of printing it, and so I can say return and now I can call the lambda
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=66)** inside of a print statement to take its return value.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=73)** And when I build and run, you see we get the result that we expect.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=77)** The lambda infers its return type from the return statement.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=81)** You can specify the return type with a trailing return type notation like this.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=91)** And I build and run, you see we get the same result.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=95)** Technically, the empty parameter parentheses are required if you specify a return type.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=102)** Beginning with C++ 23, empty parentheses will no longer be required.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=110)** You can specify function parameters in the parentheses, and then I can return that instead, and I can put the string inside of the parentheses where the lambda is called and we get the result that we expect.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=129)** The square brackets are for the capture list.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=134)** You can capture a value from the context of the lambda definition with the capture list.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=140)** So I can come in here and I can say const char pointer, greeting and initialize it with that string, and then I can put the greeting inside the square brackets for the capture list.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=159)** I no longer need parameters and I'm returning greeting.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=164)** And I no longer need to call it with parameter.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=168)** And now when I build and run, you see we get the result and now we're getting that string through the capture list.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=175)** We'll get into a lot more detail throughout this chapter but for now, let's take a look at the full syntax specification for a lambda expression.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=185)** These are the different parts of lambda expression.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=189)** The capture list specifies what variables we capture.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=192)** These variables are captured from the scope of the lambda definition, not from where it's called.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=198)** As with a function, parameters are specified in parentheses.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=203)** If there are no parameters, the empty parentheses are optional unless any of the specifiers or trailing return type are provided.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=212)** Any specifier or trailing return type makes the parentheses required and this requirement is expected to be removed in C++ 23.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=223)** A lambda expression defaults to const qualified unless you specify the mutable modifier.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=230)** Without the mutable modifier, a lambda may be safely used in a const context and it cannot modify any of its captured variables.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=240)** A lambda with a mutable modifier is no longer const safe.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=245)** Constexpr, which stands for constant expression, specifies that the lambda is considered a constant expression.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=253)** This means that it may be evaluated as compile time.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=256)** If the lambda meets the requirements, it may be considered a constant expression even without the specifier.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=263)** The noexcept specifier declares that the lambda cannot throw any exceptions.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=269)** By default, the lambda return type is automatically deduced from the return statement as if it were an auto return type.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=277)** You may optionally specify a trailing return type with the arrow operator.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=282)** The body of a lambda is, of course, required.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=286)** It's enclosed in curly braces and contains one or more statements just like the body of a function.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=293)** Lambda expressions are exceptionally powerful and flexible.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=296)** They're commonly used as predicates and parameters for stl algorithms and other simple functions.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (23), function (6), const (4), type. (2), type, (1)
> **Definitions:** is an  (1), is called (1), stands for (1), means that (1)
> **File Paths:** lambda-hello.cpp (1)
> **Documentation:** specification (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Closures
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=0)** - [Instructor] The term closure is often applied to any anonymous function or lambda.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=6)** Strictly speaking, a closure is a function that allows the use of symbols outside its own lexical scope.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=13)** This is lambda-capture.cpp from chapter three of the exercise files, and you notice that we have an error message here saying that the variable greeting cannot be implicitly captured.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=26)** And what this means is, is that this variable greeting is outside the lexical scope of the lambda and therefore the lambda cannot use it unless we list it in the capture list.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=39)** And so we put a greeting here, and now our code will build and run and give us the result that we expect.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=49)** These square brackets are for the capture list and this allows the lambda to capture symbols from outside its lexical scope.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=58)** You can list multiple variables.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=60)** We could create a second variable, and we'll call it folks and have it just be the word earthlings.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=68)** And this can be just the word hello.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=72)** And we can capture both of these by listing them both here and I can say standard format, return of string a formatted string with both of these variables.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=87)** And I'll put the inside there.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=93)** And now when I build and run we get the result that we expect.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=97)** Captures default to copy just like function parameters and so these captures create temporary objects for use within the scope of the lambda.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=109)** We can capture by reference instead by using the reference symbol like this.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=116)** And of course, this works as expected.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=119)** We can capture all symbols by using just an equal sign and this, again, is captured recopy.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=126)** If we use the reference sign just like that that captures all the symbols in scope by reference.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=132)** I'll build and run, and we'll see that that works.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=135)** It's generally preferable to list the specific symbols that you want.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=140)** The ability to capture variables outside its own scope is what makes a lambda a closure.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=146)** People use the term in different ways and that's fine.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=149)** So long as we can understand each other.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=151)** Still, it's good to know what the term means.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (7), function (3), this. (1), this, (1)
> **Analogies:** just like (2)
> **File Paths:** lambda-capture.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Algorithm predicates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=0)** - [Instructor] Algorithm predicates and operators are one of the more common use cases for a lambda expression.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=6)** Let's take a look at some examples.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=9)** This is lambda-predicate.cpp from Chapter three of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=14)** Predicates and operators are often used with algorithms from the algorithm library.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=19)** So we're including the algorithm header here.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=22)** We have this utility function display v to display a vector, displays the contents of a vector, and here we're declaring a vector.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=31)** We'll be using vectors with our algorithms in this example file.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=36)** So here we have a vector of int with a number of integer values and our first predicate.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=43)** Now a predicate is a lambda that returns a Boolean true or false value.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=49)** And in this case it returns true if the integer is evenly divisible by four.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=55)** And we use it with this count_if algorithm to count the elements of the vector v1 which are divisible by four.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=66)** And we display the count.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=67)** I'm going to go ahead and comment out the rest of this here down to the closing brace.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=74)** And we'll go ahead and run this part, build and run, and you see it says count is 5.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=82)** And so, okay, we say, there's five integers in that vector that are evenly divisible by four.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=90)** Which ones are they?
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=91)** So we can use the copy_if algorithm and this will copy the elements of v1, which are divisible by four into the vector v2, as it's an empty vector.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=105)** And we're using the back_inserter which is a common way to use the copy algorithms.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=112)** It simply inserts those elements into a new container.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=117)** And so I'll go ahead and I'll run this.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=119)** And you see we display with v2, we display the elements of v1, which are evenly divisible by four.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=129)** And you'll notice that there are indeed five of them.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=133)** So this is our predicate and it's worth noting that a lambda is an expression.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=140)** So I can take this lambda and copy it.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=143)** And here, instead of calling the lambda like that or rather passing the lambda like that, I can simply put the predicate right there in the function call to the count_if algorithm.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=156)** And when I run this, you notice we get exactly the same results.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=160)** These predicates are usually very short and they're often written in the function call itself, unless of course you need to reuse it, in which case, we store it in a variable and we can reuse it in another algorithm.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=175)** An operator is similar to a predicate, but returns a value for a container.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=181)** And here's an operator.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=183)** This is an operator that'll convert a character into an uppercase character.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=189)** And so it takes a character, it checks if it's lowercase and if it does, it converts it to uppercase.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=198)** And we'll go ahead and uncomment these next few lines.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=202)** And you see we have a string with lowercase characters and we have a couple of empty strings.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=207)** We'll print our first string here, and then we'll do a transformation, again using the back_inserter, and using the char_upper operator to transform the lowercase characters into uppercase.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=222)** And then we'll print s2 with all uppercase characters.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=226)** And I'll go ahead and I'll run this.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=228)** And you see that we get the result that we expect.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=231)** And in fact, we can call one operator from another operator.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=236)** Here we have a title_case operator.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=238)** I'm going to uncomment the rest of this.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=241)** And what this does is it looks for each space or the beginning of the string and it converts the next character to uppercase.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=252)** And it uses the char_upper operator here.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=258)** And in order to use the char_upper operator, it needs to capture it.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=264)** And so we have the capture there to capture the char_upper operator and then we'll use the transform to transform string s3 into title_case.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=274)** I'll go ahead and I'll run this, and you see that it works as expected.
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=278)** Algorithms are a common use case for lambdas.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=282)** Simple lambdas are often defined in line within the algorithm function call.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=286)** More complex lambdas may be defined separately sometimes as part of a library.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (7), function (4), this. (3), this, (2), let (1)
> **Code Identifiers:** char_upper (4), count_if (2), back_inserter (2), title_case (2), copy_if (1)
> **Definitions:** is a  (2), is an  (2)
> **File Paths:** lambda-predicate.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: A Lambda jump table
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=0)** - [Instructor] The challenge for this chapter is a Lambda-based jump table.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=9)** You'll use an STL map container to map a keystroke to a Lambda.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=15)** For this challenge, you'll write a program that operates like this.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=19)** It offers up a prompt with a number of choices.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=23)** You give a letter response, a single letter response, and it calls a particular function.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=30)** Give a different letter response, it calls a different function.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=34)** It'll accept capital letters just as well as lower case letters.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=39)** And if you give it too many characters, it'll give you an error response.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=44)** If you give it a character that is not in your jump table, it gives you an error response.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=51)** If you give it nothing, it ignores it, and if you give it a letter X, it gives you a message and exits.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=60)** Very simple.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=62)** You'll want to use a standard map container for the jump table itself.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=67)** You'll need a Lambda type signature for use with your map template definition.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=72)** This is two alternative polymorphic type signatures for a Lambda or for any functor.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=77)** The first is simply a pointer to a generic function.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=81)** The second uses the standard function class.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=84)** Standard function is a template class that allows polymorphic function calls.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=89)** Standard function requires the functional header.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=93)** Either form will work.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=95)** Expect this challenge to take 30 minutes to an hour.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=98)** Take longer if you need to, or if you want to experiment and learn more about the details, my solution is in jump.cpp in chapter three of the exercise files.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), lambda (4), this. (1), class. (1)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (2)
> **File Paths:** jump.cpp (1)
> **Env Vars:** stl (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Constraints and Concepts

> [↑ Back to Table of Contents](#table-of-contents)

#### Why constraints?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=0)** - [Instructor] Templates are great for writing generic code that works with different types, but some code can be dangerous when called with the wrong type.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=9)** Beginning with C++20, we now have constraints and concepts to help protect our templates.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=16)** This is working.cpp from chapter four of the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=20)** And let's just build a little template function here, and see what happens.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=29)** There's our template declaration, and we'll use the type T as our return type, and as our parameter type.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=39)** And we'll return our argument plus 42.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=45)** And now here, instead of just an int, we can use auto.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=52)** And in our print statement we can say arg42, n, like that.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=61)** So we have a template function that takes any type of an argument.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=65)** We're passing it a floating point number, 7.9.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=70)** And we're printing out the result from the function with that parameter.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=75)** And I'm going to go ahead and I'm going to run this.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=76)** You see that our answer is 49.9.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=80)** And this works just as well for an integer.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=84)** And what's interesting is if I take this 7.9, and I put quotes around it, what's going to happen?
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=90)** Well, it'll pass the const care pointer to the function to the template function, and then it'll add 42 to the pointer, which makes it point to an arbitrary place in memory, which is effectively a memory leak.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=106)** And you'll notice when I run it, it says the answer is this broken string.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=112)** And what's interesting is if I put square brackets around this, of course the results on your machine will be different.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=118)** The results on this machine will be different if I load different things before I load Xcode.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=124)** And if I go ahead and run it now, you'll notice that it gives me empty square brackets 'cause it happens to point someplace with a null value.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=131)** But if I take out a word from my string, it moves that pointer again, and it gives us another result.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=138)** So this is a recipe for disaster.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=141)** I can fix this by adding a constraint.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=145)** Now, in order to add a constraint here, I'm going to include the concepts header.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=153)** And in the concepts header, there's a number of named constraints.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=156)** Named constraints are called concepts.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=159)** And so here, I can add a couple of 'em.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=162)** I can say requires.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=163)** This is a new keyword in C++20 for use with concepts and constraints.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=170)** I'm going to say requires.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=173)** Standard integral, which is in the concepts header.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=177)** And/or standard floating point, which is also in the concepts header.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=186)** And the logical or operator, essentially, concepts are logical operators, or they work like logical operators anyway.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=195)** And now, you'll notice that I get a compiler error.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=197)** No matching function call to arg42 because this const care pointer does not satisfy the requirement, the constraint of it being either integral or a floating point.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=213)** And so if I take those quotes off and just put in 7.9, you notice my error message goes away, and it runs just as it did before.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=223)** And if I change this to an integral value, you notice it still works.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=228)** So that's pretty cool.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=229)** And that helps to make our template functions a lot more safe, but that's not all we get.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=236)** We also get concepts.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=237)** We can define our own concepts.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=239)** So I can say template, type name, T, and I can say concept, numeric.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=248)** I've named a new concept.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=250)** Equals, and I can take this expression here, and I can put it up there with a semicolon.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=259)** And now, I can use that new named concept numeric.
>
> **[4:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=266)** It's a template concept, right?
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=268)** And so I have to give it the template parameter.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=271)** And I build and run, and this works is expected.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=274)** And I go ahead and put quotes around my seven there.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=277)** And you'll notice that we get our error.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=279)** No matching function call because it doesn't satisfy the numeric concept.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=285)** On the other hand, I can give it a floating point number, and it works as expected.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=291)** We can also simplify this even further by putting the name of the concept up there, then we don't need it there anymore.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=299)** And this works exactly the same way, build and run this.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=302)** It works as expected.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=304)** And if I put quotes around my 7.9, we get our error message again.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=309)** In fact, we can even use concepts with abbreviated templates.
>
> **[5:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=314)** So instead of all of this, I can say auto here, and I can say auto here.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=320)** Now, this is an abbreviated template, right?
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=322)** And I can put in my concept right here, and it has exactly the same effect.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=329)** No matching function call, right?
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=331)** And I take off the quotes, and the error goes away, and I can build and run and it works as expected.
>
> **[5:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=340)** Constraints and concepts are a valuable tool for protecting our templates from incompatible types.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), type. (2), this. (2), const (2), this, (2)
> **Exercise Files:** template (9), exercise files (1)
> **Versions:** 7.9 (4), 49.9 (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** working.cpp (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Constraint syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=0)** [Narrator] A 'constraint' is a series of requirements on template parameters.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=4)** Constraints may be combined by logical operators and operands.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=9)** This is constraints DOTcvp from chapter four of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=14)** And we have down here a template function that uses the new 'requires keyword' to apply constraints to the template parameter 'T'.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=22)** The requires keyword was introduced with constraints and concepts in c++20.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=28)** This requires clause specifies a concept to use as a constraint for template parameters.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=35)** The concepts header includes a number of useful, predefined concepts for use with requires as constraints.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=44)** And the standard 'integral concept', which we've specified here, constrains the template parameter to types that satisfy the integral concept.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=54)** And of course, this floating point number does not satisfy that constraint.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=61)** And so we have this error that says 'no matching function function call.'
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=66)** Constraints are logical expressions.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=68)** So I can take out this concept and replace it with the logical 'true', and now it's basically open.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=76)** This is the equivalent of no constraint whatsoever.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=79)** Now our floating point works.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=80)** We can build and run this.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=82)** We can put quotes around it and it's now a const char pointer which of course is bad, but it still accepts it.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=91)** You may combine constraints with 'Boolean Operators.'
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=95)** And so, I have this concept 'integral' and I can say, or, standard floating point T.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=105)** And now you'll notice that my error goes away and I can build and run this as expected because now I have two constraints that are combined with the logical or operator so that either integral or floating point may be satisfied to satisfy the constraint.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=124)** Constraints use concepts to constrain template parameters.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=128)** 'Concepts' are logical expressions for template parameters.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=132)** And we'll get into defining concepts in the next video.

> [!info]- Semantic Content
>
> **Exercise Files:** template (7), exercise files (1)
> **Code Keywords:** function (3), this. (1), const (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Defining concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=0)** - [Instructor] Concepts are used as constraints to determine compatible parameters for templates.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=6)** The STL provides a number of useful concepts in the concepts header, but sometimes it makes sense to define our own.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=13)** This is constraints.cpp from chapter four of the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=18)** Notice that this constraint down here in our template function uses the integral concept from the concepts library.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=27)** We can combine it with floating point using the or operator and we'll use the floating point concept also from the concepts header, and this now allows our floating point number to satisfy the constraint and we can build and run and it works as expected.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=47)** However, if we take this now logical combined constraint and we put it up here like this, it does not work and this will not compile and it'll give us a short cascade of errors.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=65)** Instead, what we can do is we can use these to create our own concept.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=72)** We can say template and use the concept keyword to define our own concept, and then we can say numeric here, and we get the result that we expect.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=90)** We can now build and run, and it works with our floating point number.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=95)** We can even use our concept in an abbreviated template syntax, and it still works as expected.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=106)** We can also define our own concepts that do not rely on the concept library.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=113)** So instead of this, I can say numeric equals and use the requires keyword, and the rest of this is kind of like a function or a class.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=125)** I do need a semicolon here, but now I can put in expressions that must be satisfied for the concept to be satisfied.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=136)** So I can say a plus one and if a plus one, if this template parameter can be added to one, if this will compile basically, I also like to add a times one so that either this plus or times must be satisfied in order for the concept to be satisfied.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=156)** Now we have a numeric concept that we've defined ourself.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=160)** It does not rely on the concepts header, so I can even delete that, and this all builds and runs as expected.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=167)** And, more importantly, if we put our quotes around this, it no longer satisfies the concept and we get our error, no matching function call.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=178)** So this is how concepts are defined.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=182)** Any expression as long as it compiles is true, and if it doesn't compile it is false.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=189)** And this is the other use of the requires keyword.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=193)** In this case, the requires keyword uses a parameter or multiple parameters, and what's effectively a function body, but it does require a semicolon.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=205)** Concepts are here to make our templates safer.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=208)** While the STL provides a number of useful concepts in the concepts header, sometimes it makes sense to define our own.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=215)** If we can succinctly describe the requirements, it should be easy to define our own concepts.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), this, (3), class. (1), delete (1), case, (1)
> **Exercise Files:** template (4), exercise files (1)
> **Env Vars:** stl (2)
> **File Paths:** constraints.cpp (1)
> **CLI Commands:** make (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 5. Optionals and Variants

> [↑ Back to Table of Contents](#table-of-contents)

#### The optional class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=0)** - [Instructor] The optional class was introduced with C++ 17 to hold an optional value.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=6)** This is useful when you need to return a value or a status.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=11)** This is optional.cpp from chapter 5 of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=15)** The factor function returns either the lowest factor of a value or a false status to indicate that the value is actually prime, and it does this using this structure here, called return_status, which holds either a long value or a boolean status.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=38)** And so we have a bit of logic in here.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=41)** We initialize it with a false status, and we change that status to true, if we actually have a factor, and we populate the structure with the factor, and then we return the structure down here.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=54)** It's a little bit convoluted, but it works.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=57)** And this is the way we've traditionally done this before we had the optional class, and down here I call factor with a value, a long value, and I use auto to populate x with the structure, and then we test the have_value status, and if we have a value, then we can access the value with the value member of the structure.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=82)** And so I'll go ahead and I'll build and run this, and you see that 42 has a lowest factor is 2, and if I change this to 43 and run it, it says that 43 is prime.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=95)** So, we're getting the results that we want, but it's all a little bit convoluted, and so let's refactor this using optional instead.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=103)** We're including the optional header, which has the optional class in it, so we don't need the structure anymore, and now we can just say standard optional of type long, and we don't need to initialize that anymore, and now here, all we have to do is return i, if we actually have a factor, and otherwise we return a default initialized structure, which will be false.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=134)** And then down here we have x, which is now the optional class, the optional object, and so I can check for has_value, which is a member function, or value, which is also a member function.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=148)** And now all of this is very simple, and I can build and run this, and it still says that 43 is prime, and that 42 has a lowest factor of 2.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=159)** So, that's really cool.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=160)** That's a lot simpler than it used to be, and we can make it even simpler because this has value.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=166)** Actually the optional class has an overload for a boolean, so we can just test it like this, and it has an overload for dereference operator, so we can grab the value like that, and we get exactly the same result.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=184)** There's our lowest factor, and 43 is still prime.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=190)** So, the optional class is made for simplicity.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=193)** It provides convenient operators for testing if it has a value and for providing the value.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (3), class, (2), let (1)
> **Code Identifiers:** return_status (1), have_value (1), has_value (1)
> **File Paths:** optional.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The any class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=0)** - The any class was introduced with C plus plus 17 to provide a type safe polymorphic container for a single object of any type.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=11)** This is any.cpp from chapter five of the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=15)** You see we're including the any header.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=18)** We have a string header and a vector header we're going to be using those as well.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=23)** We have this function which takes a object of type any, and it prints out its contents and so it first checks if it has a value, and otherwise it checks its type.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=35)** So the any class has this method type which returns a typeid object and we compare it with the typeid of an int and if it matches then we have a value of type int and we use any cast to retrieve that value.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=55)** And we put it in the X variable here and we print it out.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=58)** Otherwise we compare its type to the typeid of a standard string object and we handle that.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=66)** Otherwise we test for a vector of int and we handle that.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=70)** And otherwise we just print out I don't handle this type.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=73)** And we print out its type object method name which returns a string representation of the type object and that string representation is different on every library, on every compiler, on every system.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=90)** And so when we print that out you'll see a value here but it'll be different on a different system.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=96)** And so I'm going to go ahead and I'm going to run this and you'll see this works just as expected.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=101)** We construct an object with an int we construct an any object with a string standard string, standard vector of int, standard vector of float, and you can see these are results.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=116)** We have an int a string vector of int with five elements and there they are.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=121)** And I don't handle this type for the vector of string.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=125)** The any class can be useful for circumstances where you need to process objects of various types.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=131)** Use cases include editor objects, binding with duct type scripting languages, user interfaces, or any application where you must process objects of various types.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), function (1)
> **File Paths:** any.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### The variant class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=0)** - [Instructor] The variant class was introduced with C++ 17.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=5)** Variant is a type safe tagged union.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=9)** A variant object may hold different values of different types one at a time where each value must fit in the same allocated memory space.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=18)** Let's take a look at how that works.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=20)** This is variant.cpp from chapter five of the exercise files.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=25)** You notice we include the variant header, and down here we have a class called animal which we're really just using as a base class.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=34)** It has a couple of features, it holds a name and a sound, and it has this speak method where it prints out the animal name and what it says, its sound.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=46)** And down here we have derived classes that are derived from, they inherit from animal.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=51)** We have a cat, which is constructed with the sound meow.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=56)** We have a dog, which constructs with the sound arf.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=60)** And a Wookie, which constructs with the sound grrraarrgghh, which is the sound that a Wookie makes.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=67)** And down here in main, this is where the variant comes in.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=71)** So we have a variant type because we have this type alias called V animal.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=76)** In its template parameters, it lists three different types that are possible for the variant objects: cat, dog, and Wookie.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=84)** And so this type can be used to construct a variant object that can, as its base class, have either of those three classes.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=93)** And then we construct a vector of type V animal, so it's that variant type.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=99)** The only reason we're using the alias here is because otherwise this vector declaration is going to get very unwieldy, and so we use an alias to make that simpler.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=108)** We construct our vector with four different objects.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=112)** A cat object, a dog object, another cat object, and a Wookie object.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=118)** And so what happens is, as we construct this vector, each of these objects will be used to construct a variant object.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=128)** And so each element in the vector will be a variant object either of type cat, dog, or Wookie.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=136)** So now we have our vector and it has four objects in it, and our vector is called pets, and we want to access the objects in the vector.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=146)** So there's three different methods that you can use, three different techniques you can use to access a variant object.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=154)** The first is using the get function, and the get function returns an object of the type and you specify the type in the template parameter for the get.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=167)** Well, how do you know which type to specify?
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=171)** You use this index method off of the object and it will tell you if it's zero, it's the first type that was specified in the template parameters when you constructed the variant object.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=183)** So we have cat is zero, dog is one, Wookie is two.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=187)** And here we have cat, we have dog, and we have Wookie.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=191)** And we use the get function, which is a helper function, we pass at the object, and it returns the object so we can simply de-reference the object and call the speak method.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=205)** All right.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=206)** Our second method is using the get if, and the way this works, we can say get if cat, get if dog, get if Wookie.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=219)** And these types are template parameter types, right?
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=223)** And what get if returns is either a null pointer or a pointer to the object.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=229)** So we use the pointer de-reference operator to get the actual speak method to call.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=236)** And so that's the get if method.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=239)** The final method is a little bit weird.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=242)** This uses a helper function called visit, and you pass visit a polymorphic funk door, effectively.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=250)** And up here we have this animal speaks structure and it overloads the function call operator but it overloads it with three different types.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=259)** One each for each of our variant objects.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=262)** And so what visit does is you pass it that object constructed from that type, and it will call its function call operator with the object that you specify in the second parameter here.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=276)** So it's a little indirect, it's kind of clean looking, right, but it also, you know, requires this weird looking structure.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=284)** Again, all of this is a matter of taste or a matter of what's going to work in your particular application.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=291)** Let's go ahead and run this and we'll see how it works.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=294)** Each of the different methods using the get method, using the get if method, using the visit method, and each of these gives us the results that we want.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=303)** Hobbes says meow, Fido says arf, Bill says meow, Chewie says, grrraarrgghh, right?
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=310)** So we can see that the variant class is useful for holding alternative types for use in a single context.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), pass (3), let (2), class. (1), from, (1)
> **CLI Commands:** cat (8), make (1)
> **Exercise Files:** template (4), exercise files (1)
> **Definitions:** is a  (4), is called (1)
> **File Paths:** variant.cpp (1)
> **Speakers:** - [instructor] (1)


### 6. Concurrency

> [↑ Back to Table of Contents](#table-of-contents)

#### Sleeping
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=0)** - The thread header provides two functions for sleeping a thread.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=4)** Sleep_for specifies a duration of time for the thread to sleep and sleep_until specifies an end time for sleeping a thread.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=13)** This is sleep.cbp from chapter six of the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=18)** You notice we have a few using statements here in the standard chrono name space.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=23)** We have steady_clock and duration.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=26)** Steady_clock provides a chrono time point object and duration provides a chrono duration object.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=33)** In the this_thread name space we have sleep_for and sleep_until.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=39)** These are in the this_thread name space and they operate on the current thread.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=44)** The sleep_for function takes a chrono duration object and the sleep_until function takes a chrono time point object.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=53)** And then we have this name space for chrono literals that we're using for seconds and milliseconds.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=59)** And we'll see that down here in a moment.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=62)** Down here in main we take a steady_clock now, which is a time point for right now.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=70)** And then we sleep_for, and you notice the chrono literals for two seconds and 500 milliseconds.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=78)** And this provides a duration object.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=82)** And then we have sleep_for three seconds and we take the current time point, the now, and we add three seconds to that.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=91)** And then we calculate our duration by subtracting the original time point from the current time point.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=100)** I'm going to go ahead and run this and you'll see that it sleeps for two and a half seconds and then it sleeps for three seconds.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=108)** And it gives us a total duration, which is, you know, just a hair, a little fraction longer than the two and a half plus three seconds because, you know, we did things like print strings and there's various overheads involved here.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=123)** And so these sleep functions, they sleep the current thread, and we'll talk more about threads later on in this chapter.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=130)** But in this case, the current thread is simply the main function and it sleeps the execution and it blocks until the sleep is done and then it continues.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=141)** So when we run it, we get two and a half seconds and then we get three seconds and we're done.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=149)** The sleep functions can be useful for things like timers and benchmarks.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=153)** These functions are well-supported, standard functions.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=156)** They use the standard chrono library for timing.

> [!info]- Semantic Content
>
> **Code Identifiers:** sleep_for (4), sleep_until (3), steady_clock (2), this_thread (2)
> **Code Keywords:** function (3), case, (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Threads
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=0)** - [Instructor] A thread is a unit of concurrency.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=3)** In C++, the main function is the main thread of execution.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=8)** Within the context of the operating system, the main thread runs concurrently with other threads owned by other processes.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=17)** The standard thread class is the root of concurrency in the standard library.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=22)** All other concurrency features are built upon the foundation of the thread class.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=28)** This is thread.cpp from chapter six of the exercise files.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=33)** You notice we have a couple of functions here.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=35)** We have sleepms, which sleeps a given number of milliseconds.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=39)** The argument that's passed to it is a number of milliseconds.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=44)** We have a thread function.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=46)** And this thread function loops a number of times.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=50)** It loops five times, and each time it loops, it sleeps a certain number of milliseconds.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=55)** And the milliseconds is 100 times the integer that's passed to the thread function.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=62)** And down here in main, we passed the thread function of one.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=66)** We passed the thread function of two.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=69)** So this one will loop in 100-millisecond increments, and this one will loop in 200-millisecond increments.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=75)** The thread class is constructed with the first argument is the function to call, in this case, the thread_func.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=84)** And in this case, the second argument is passed to the thread_func.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=88)** Of course, the thread class can take any number of arguments, which are then passed to the function.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=94)** And so the first thread will call this function, and it will loop five times, 100 milliseconds per time.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=103)** And the second thread, we'll call the function and it will loop five times at 200 milliseconds per time.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=109)** So the second thread will take a little longer to complete than the first thread.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=114)** And then each of these threads are detached with the detached method on the thread.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=119)** And then the main function sleeps for 2,000 milliseconds, or two seconds to allow these threads to complete.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=126)** And so when we go ahead and run this, you'll see that our threads, we have them in the thread function.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=133)** We display the thread number, which is the number that's passed to it, and its sleep duration, and which loop it's on.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=141)** And so at first, we have both of them on the first loop.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=143)** And then thread one gets two more loops before thread two gets a second loop.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=148)** And then thread one finishes, its five, and then thread two finishes its five.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=155)** And then the main program sleeps for two seconds.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=158)** You notice that the message for sleep two seconds is way at the top here.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=163)** And that's because the threads get detached.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=165)** When the threads get detached, that means the owning thread, the main thread in this case, can go ahead and complete.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=174)** This message here gets printed before any of the messages from the thread Instead of detach, if we call join instead, then what happens is these threads need to complete.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=189)** They block the main thread, and they need to complete before the main thread continues.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=194)** And so you'll see that that sleep two second message, I'll go ahead and I'll run this.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=198)** And that sleep two second message now happens here, and we have to wait two more seconds for the main thread to finish.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=207)** So the difference between join and detach is whether or not that thread blocks the thread that it's being called from.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=215)** And so if we put these back in detach mode, you'll see that those threads get started and they run concurrently.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=222)** And the main thread is allowed to continue before those threads are finished.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=227)** A thread object represents a thread of execution.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=231)** There is a one-to-one relationship between object and thread.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=234)** One object represents one thread, and one thread is represented by one object.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), case, (3), class. (1), this, (1), this. (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** thread_func (2)
> **File Paths:** thread.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### The async function
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=0)** - [Instructor] The standard async function runs a thread asynchronously and returns a value using the standard future class.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=9)** In this way, async operates much like standard thread, but allows return values.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=15)** This is async.cpp from chapter six of the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=20)** You'll see we have a structure down here called prime time with two elements, a duration and account.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=29)** You notice that the type of the duration is this seconds, secs, which is an alias up here for standard chrono duration of type double.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=41)** So that's a duration object, a standard chrono duration object.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=45)** And here we have an unsigned 64-bit integer type for the count.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=51)** And we have a function called count primes that counts the number of primes between two and a maximum value.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=61)** And it returns this prime time object with the count and the duration, how long it took to count those many primes.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=69)** And down here in main, we make use of this.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=74)** We have a couple of constants, a max prime that we use for the maximum number of integers to count looking for primes, we have a number of threads to run, and we have a list of standard future objects.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=91)** And these standard future objects are templated with the prime time type as a template parameter, and we name this list swarm.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=100)** And we'll get into the details of this in a minute here.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=103)** We take the time now as we start all of this using the steady clock, and we run a loop for our number of threads, and for each cycle through the loop, we call async with our count primes function and a parameter for our count size function.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=124)** Async returns a standard future object, and this standard future object is then placed on our swarm list.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=132)** And then we go through our swarm list with this for loop, and we call the get method on the future object to get our result which we use a structured binding from C++ 17 to get our values.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=149)** And so we have the duration and the count, and then we display those values.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=154)** Now, the standard future object, when we call the get method what it does is it blocks, it waits for the value to become available and that it returns that value.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=168)** And so when I build and run this, it's a couple of things that we'll notice about this.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=173)** First of all, we'll see that I count a lot of primes in very small amount of time.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=179)** I'm running 15 parallel threads.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=182)** This machine is an eight core Mac Mini with Apple's M1 processor, so it's actually kind of ridiculously fast.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=192)** This 1.6, 1.7 seconds result that I'm getting is quite unusual for a machine in this price class.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=202)** For example, this is a Linux box running in my lab, running Linux on a Quad Core Intel I7, and you notice that the results are quite a bit higher.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=214)** Instead of 1.6, 1.7 seconds, I've got 18 and 19 seconds.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=220)** And in fact, on a Windows box here in my lab, it was as high as 20 seconds.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=226)** So, your results will vary.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=227)** You can expect your results to be quite a bit different from the results in terms of the amount of time that it takes, the timing results to be quite a bit different than those that I'm getting on my M1 Mac Mini.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=240)** So, I'm just going to close that output window here for now, and I want to talk about this future object.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=251)** The standard async function returns a future object.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=254)** The future object is used to return objects from the thread.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=259)** And we have a list of these future objects to keep track of the various.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=262)** The future object is generated by a promise object, and the async function is essentially a wrapper that creates a thread object using this promise and future paradigm.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=275)** Let's take a look at what this looks like without async, if we were to do this just with thread and promise and future.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=284)** This is promise.cpp from chapter six of the exercise files, and this is the equivalent code using thread with promise and future.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=293)** And you notice that our count primes function needs to look a little bit different.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=299)** It actually takes a promise object as a parameter, and the promise object is constructed with the prime time template parameter.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=309)** The function itself returns void, so it does not return a value.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=313)** Instead, what it does is it sets the value in the promise object.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=319)** And down here in main, we still have our list of future objects.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=325)** Looks exactly the same, but the way that we call it is now quite a bit more convoluted.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=331)** The first thing we do is we construct a promise object, an empty promise object, and then we create a future object from that promise object using the get future method.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=344)** And then we move that future object because it cannot be copied.
>
> **[5:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=349)** We move that future object onto our swarm list.
>
> **[5:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=354)** And then we create a thread, we construct the the thread with the count primes function and the max prime parameter and the promise object.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=364)** And again, we move the promise object rather than copying it, and then we call detach on the thread.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=369)** And the rest of this is exactly the same, but all of this is what's wrapped up in a standard async call.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=375)** So when I build and run this, you'll notice that we get exactly the same results and very similar times.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=383)** And so we can see that the purpose of the async function is a helper function to simplify the use of promise and future objects.
>
> **[6:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=394)** For many purposes, it makes the use of promise and future much easier, and this use of async is far simpler for most applications.

> [!info]- Semantic Content
>
> **Code Keywords:** async (11), function (11), class. (2), this. (2), this, (2)
> **Versions:** 1.6 (2), 1.7 (2)
> **Exercise Files:** exercise files (2), template (2)
> **Definitions:** is an  (2), is a  (2)
> **File Paths:** async.cpp (1), promise.cpp (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Mutex and lock
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=0)** - [Instructor] The term mutex refers to mutually exclusive access to shared resources.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=6)** A mutex is commonly used to avoid data corruption and race conditions when multiple threads of execution attempt to access the same data.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=17)** A mutex will typically use locks to restrict access to one thread at a time.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=23)** This is mutex.cpp from chapter six of the exercise files, and you'll see I declare a mutex object here called animal_mutex.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=34)** And there's a class called Animal which will use the mutex.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=39)** This is like the Animal class we've used in other exercises, with the difference that we now connect animals to their friends.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=48)** And so we keep a list of friends of each animal in this standard list.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=53)** And I use an alias called friend_t because I refer to that throughout the class, and this makes it more convenient.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=61)** We have a member function for adding a friend.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=65)** So this adds a friend to the animal, and it does it bilaterally.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=69)** And so it actually adds the other animal to this friend list, and it adds this animal to the other friend list.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=78)** And in order to keep this all straight, it uses a lock_guard with the mutex to coordinate this activity so that we don't have multiple animals trying to add each other at the same time and getting their wires crossed.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=95)** So lock_guard is a class that acquires ownership for the current thread, and it refers to a mutex to keep that ownership straight.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=105)** Lock-guard will block or wait if ownership is not available.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=109)** And lock_guard follows RAII protocol, which is important.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=113)** This is called resource acquisition is initialization, or RAII.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=119)** And what this means is that when the lock_guard goes out of scope, the lock will be released.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=125)** And so that makes it simple to use and actually hard to mess up.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=131)** And so RAII is important for classes like this.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=136)** We also have a delete_friend that does the same thing.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=139)** It deletes both sides of the friendship, and it locks with a lock_guard.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=144)** We have, you know, is_friend to test if it's a friend.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=147)** That doesn't need to be locked 'cause it only reads.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=149)** We have find_friend, likewise.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=152)** And we have print friends, pfriends.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=154)** And we use the lock on this so that we're printing it in one state.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=159)** And we make sure that, during the course of the printing, these relationships are not changed during the course of the printing.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=167)** And so we use our lock_guard there as well.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=170)** Now, down here in main, this is actually pretty straightforward.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=173)** We have unique pointers, that we create four animals with unique pointers.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=179)** And then we call add_friend on the different animals to add their friends.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=186)** And we're using async for this.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=188)** And so we have future objects, right?
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=191)** And we call wait on each of these to make sure that they're all done before we try to print.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=197)** And then we print them again using async.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=201)** So all of this is asynchronous, and all of this is happening in threads.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=205)** We wait again for all of that to be done.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=207)** Then we delete a friend relationship, again, using async and wait, and then we print them again using async and wait.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=215)** And so I'm going to go ahead and I'm going to run this.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=216)** And you can kind of see what's going on.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=219)** All this is happening in separate threads.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=221)** Each one of these actions is happening in separate threads.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=224)** We add the friends, we print the animals, we delete a friendship, and we print the animals again.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=233)** All right. And you see that all of that is straight.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=235)** And we can see that if we come up here and we comment out our locks, right?
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=241)** And so I can comment out this one, I can comment out this one, and I can comment out this one.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=251)** And we'll go and run this again.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=253)** And you can see that our output gets a little bit scrambled.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=257)** Doesn't look scrambled that time.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=258)** If I run it again, now it looks more scrambled.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=261)** When we print the friends, they come out a little bit scrambled.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=264)** And so that's going to happen different every time that I run it.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=268)** And that's because we're not using our locks properly.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=272)** And so I'll close that output window.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=275)** I will remove our comments to restore the locks.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=280)** And run it again, and we see that our output is, again, how we expect it.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=286)** It's important to understand that a mutex does not lock data.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=289)** Rather, it blocks execution.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=291)** The locks block execution to enforce mutually exclusive access to data.

> [!info]- Semantic Content
>
> **Code Keywords:** async (4), this. (3), delete (2), class, (1), function (1)
> **Code Identifiers:** lock_guard (6), animal_mutex (1), delete_friend (1), is_friend (1), find_friend (1)
> **Env Vars:** raii (3)
> **Definitions:** is a  (1), refers to (1), is called (1)
> **CLI Commands:** make (2)
> **File Paths:** mutex.cpp (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** initialization (1)

#### Atomic variables
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=0)** - [Instructor] The atomic class guarantees a single primitive object to be atomic.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=6)** Writing to the atomic object is controlled and reads may occur simultaneously.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=12)** Atomic may be used to synchronize access among different threads.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=17)** Standard atomic requires a trivial type.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=20)** All primitive types are trivial, and atomic is typically used with primitive types such as bool, int, float, or double.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=29)** This is atomic.cpp from chapter six of the exercise files.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=35)** You'll notice we have the atomic header and we declare three atomic values up here at the top.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=42)** Atomic variables are often declared at the global level.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=47)** Atomic bool and atomic unsigned 64-bit integer are predefined specializations of which there are many.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=56)** Here on the CPP reference page for atomic, you'll notice if we scroll down here a bit we see type aliases for many, many different types.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=72)** And if we scroll all the way to the bottom, we'll see that there's an atomic flag which is a special lock free boolean atomic type, and I can click on that and we get the details of atomic flag.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=89)** And going back to our code, you notice that I have an atomic flag called winner.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=96)** Atomic flag is a special lock-free atomic with notification features that make it well suited for asynchronous operation.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=104)** We scroll down here a bit, you notice I've got a few utility functions like make commas and sleep in milliseconds.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=111)** We have a function called countem which is a simple loop that we'll use for testing threads.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=118)** It simply counts until it's notified that one thread has won the race.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=122)** And we use our winner atomic, the atomic flag.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=128)** If we finish the loop, we test and set winner, which is one atomic operation which tests and sets the flag.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=138)** And if we didn't have a winner before and we set it, then we send a notification and we print out our message that we won.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=148)** And then all of the other countem loops, they test if somebody else has won, they test the winner flag.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=157)** And if not, they keep counting, and if so, then they fall through.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=162)** Down here in main, we spawn max threads and max threads is defined up here as being one million, or that's max count, max threads is 100, and each one counts to a million.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=178)** And then we in-place them on the back of a list, and here's our list with thread objects.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=188)** We sleep for 25 milliseconds to give the threads a beat to finish spawning, and then we set our ready flag to true and our ready flag is, of course, defined up here as an atomic bool and it gets tested in our countem loop, or just before the loop, rather.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=206)** It tests if we're not ready, then we yield the thread.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=211)** And so all of the threads are sitting there yielding to each other until we say go and we set our flag to true.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=219)** So I'm going to go ahead and I'm going to run this, and you see it spawns a hundred threads, and thread 63 won.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=228)** And every time I run this, I'll run it again, a different thread wins.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=235)** And you'll notice that the global count changes as well because depending on which thread wins, we're accounting a different number globally.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=245)** Most modern architectures provide atomic CPU instructions for performing atomic operations.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=252)** Standard atomic should use hardware support where available.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=255)** Some atomic types may not be supported on some hardware.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=260)** Standard atomic may use a mutex for those types, causing threads to block while waiting for other threads to complete operations.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=268)** Specializations that use hardware support are said to be lock free because they don't require a mutex.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), type. (1), type, (1), function (1), yield (1)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** cpp (1), cpu (1)
> **File Paths:** atomic.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### The producer-consumer idiom
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=0)** - [Instructor] The producer-consumer idiom is where one process produces data, and another consumes data using one container to hold the data.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=11)** This requires coordination between the producer and consumer threads to manage the container and prevent unwanted side effects.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=20)** This is producer-consumer.cpp from chapter six of the exercise files, and you'll see that we have a number of variables in global space.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=31)** If you're concerned about scope and name collisions, you could put these in a name space.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=37)** The mutexs are used for controlling access to the data between the producer and the consumer.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=43)** The deque is a queue used for passing the data from producer to consumer.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=50)** And the atomic_flag is used to notify the consumer when the producer is finished sending data.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=57)** Both the producer and consumer threads, and here's the functions for them, they both use a lock guard because it's safe and convenient, and it automatically releases its lock when it goes out of scope.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=71)** And here's the lock guard in the consumer.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=75)** This is actually very simple.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=76)** When the producer is done, it sets the finished flag, and the consumer checks the finished flag.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=85)** And this of course is the atomic_flag to find up here.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=91)** And down here in main, we spawn two threads and join them both so that they both block until the main thread is finished.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=105)** And I'll go ahead and I'll run this.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=108)** And you can see that there's a quarter-second delay in here just so that we can watch what's happening.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=113)** And we can play with the delay.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=115)** Here, I have the sleep milliseconds delay time, and the delay time is set to a quarter of a second.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=122)** If I want to, and you'll notice that when I run this, and I'll run it again.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=126)** You can see the quarter-second delay between each piece of data that's pushed onto the queue, and each piece of data that's popped from the queue by the consumer.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=136)** And so if we want to inside the consumer, we could add a little bit of a delay, and I'll just copy this one.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=144)** And we can watch the producer adds data to the stack.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=149)** And we'll multiply this by say three.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=152)** And when I run this now, you'll see that the producer has time to put more items on the stack while the consumer waits and pops several of them at a time.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=165)** So you can play around with these delays, and you can do different things with them.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=170)** This is a simple example of the producer-consumer idiom.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=173)** It should serve as a good outline for producing your own producer-consumer solutions.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), this, (1)
> **Code Identifiers:** atomic_flag (2)
> **Definitions:** is a  (2)
> **File Paths:** producer-consumer.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 7. Other Subjects

> [↑ Back to Table of Contents](#table-of-contents)

#### Initialization
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=0)** - [Instructor] We know that it's important to initialize variables as soon as they're declared.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=5)** C plus plus offers a variety of initialization techniques.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=9)** Let's take a look at some of the most common this is initialization dot CVP from chapter seven of the exercise files.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=17)** And we're just going to come all the way down here to main and we're going to start here 'cause all of this other stuff, we'll get to that.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=25)** But for right now, let's just look at some simple examples.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=29)** Here we have a variable, an integer named X and it's being list initialized with an empty list.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=37)** So these curly braces are called an initialization list.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=42)** And since c plus plus 11, this is considered the best way to initialize a simple scaler integer is with an initialization list and the empty brackets is a special case.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=57)** This will zero initialize any primitive value.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=62)** And so here initializing this integer and I'm giving it a value of zero.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=67)** And when I go ahead and I run this you'll see that X is zero in my print statement there.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=73)** Now I can give it a value of five and put that inside the curly braces.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=78)** And this is called a list initialization and it's considered best practice for a variable of this type.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=84)** I'm going to go ahead and I'm going to run this and you'll see X is five the value that we expect.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=90)** Now the alternative to list initialization is the old style copy initialization.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=97)** And what this does very technically is it takes that five and it makes a copy of it and puts it into the X.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=105)** Now, for all practical purposes, that's pretty much the same as what happens with list initialization.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=111)** And when I build and run this you see that the value is five as expected.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=116)** But what's wrong with this is because the copy initialization is inherited from C and there's so much legacy code that uses it.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=125)** C plus plus is not allowed to really fix it and it has a serious flaw.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=132)** If I say 5.1 here that's not a compatible value with the in integer.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=139)** And when I build and run this you'll see that it gets narrowed.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=144)** This is called a narrowing conversion.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=147)** It says X is five.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=148)** And that's the expected behavior in copy initialization in the C language and in the C plus plus language since forever.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=157)** And yet that's a problem and it leads to bugs, right?
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=161)** And so if I try to do the narrowing conversion with a list initialization, and let me go ahead and get rid of this equal sign here, now I get an error.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=172)** It says type double cannot be narrowed to int in initializer list.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=178)** So the initializer list doesn't allow the narrowing conversion.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=183)** It doesn't compile.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=184)** This is an error condition.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=186)** And that's really the major reason that list initialization is the preferred method of initializing this type of a variable.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=195)** And when I say this type of a variable I mean primitive variables like ints and longs and doubles and things like that.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=204)** Initializing objects from a class is a different thing.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=207)** And we're going to get to that in a moment.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=209)** But first I want to look at one more special case of the empty initializer list.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=215)** Now, the empty initializer list, you remember it.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=217)** It's guaranteed the zero initialize any primitive value.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=221)** And so when I build and run this you see we get the X is zero but what happens if I say cons, character pointer X do I get an empty string?
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=233)** No, I do not get an empty string.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=235)** What I get is a null pointer.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=238)** And an null pointer is a bad thing.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=241)** We're not even going to run this code because that null pointer could point to anything.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=246)** And this is how you get memory leaks and bugs in your code.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=251)** So you need to remember that this zero initialization is initializing this primitive value correctly but this primitive value is not a string.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=260)** This primitive value is a pointer to a character.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=264)** If I want an empty string I need to actually give it an empty string.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=268)** And now I can build and run this and we get X's and empty string.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=273)** Now where I want to go next is I want to go to vector.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=276)** And you'll notice up way up here at the top that I have included the vector header.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=284)** And so we're going to come back down here to main and we're going to construct a vector object.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=290)** And so I'll say standard vector of int and we'll call it X and we will zero initialize it with the empty initializer list, the empty brackets.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=302)** And I'm going to call, we have a function up here I believe it's this one here, pvec which prints a vector pvec.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=313)** And so I'm going to come back down here to main and instead of this print, I'm going to say pvec and give it our X.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=320)** We have empty constructed we've constructed an empty vector, right with our zero initializer list, our empty initializer list.
>
> **[5:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=330)** And I'm going to go ahead and build and run.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=331)** And you see that it says that the vector is empty.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=333)** And that's what we expect.
>
> **[5:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=335)** We can give it a couple of values we can give it a five and another five.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=338)** And I build and run this.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=339)** And we have two fives.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=341)** And these were constructed with an initializer list with two values in it.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=346)** But here's the thing to be careful.
>
> **[5:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=349)** If instead of these curly braces, I give it parentheses what do we expect is going to happen here?
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=356)** Do we expect we're going to get two fives?
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=358)** Well, we'll be surprised if that's what we expect because what we get is five fives.
>
> **[6:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=363)** So this is calling an entirely different constructor on the vector class.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=368)** It's calling a constructor where the first value is the number of elements to initialize and the second value is the value to put in there.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=377)** And I'm just going to test that theory out because I may or may not have that, right?
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=381)** If I say five seven, yes, I get five sevens.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=384)** But I have to remember that that's not necessarily what we expect.
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=390)** And that's why we have sites like CVP [reference.com](https://reference.com) where we have the reference documentation for all of these classes in the STL.
>
> **[6:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=401)** And we can look up and we can see what all the different constructors actually do.
>
> **[6:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=405)** And so when we use the parentheses it calls a different constructor.
>
> **[6:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=410)** Then if we use the curly braces and if we use the curly braces here we'll get a vector with two values, a five and a seven.
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=419)** So for this purpose I've created a function in here called initialize this and we're just going to call that function and but first I'm going to explain it to you a little bit.
>
> **[7:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=433)** I have a class up here called thing.
>
> **[7:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=436)** And this thing, it's a template class.
>
> **[7:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=438)** And so we're going to use it with editor integers mostly.
>
> **[7:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=441)** And it keeps a state.
>
> **[7:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=443)** And really its whole purpose is that it has a number of different constructors.
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=447)** Some of them are fairly predictable and some of them are outright weird.
>
> **[7:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=451)** And the reason for that is that I want to emphasize the fact that some people will tell you always construct objects with an initializer list.
>
> **[7:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=461)** And that is not true.
>
> **[7:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=463)** As we saw with the vector.
>
> **[7:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=464)** Sometimes you get unique results with a initializer list and yet different results with parentheses.
>
> **[7:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=471)** So you have to know what your constructors are and how they work in order to know how to properly initialize an object from a class.
>
> **[8:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=481)** All right, so we're going to come down here to our initialize this function, and I'm just going to comment out everything but the first little block.
>
> **[8:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=489)** And we're going to take these one at a time and we'll comment all of that out.
>
> **[8:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=495)** And we're just going to look at this first one.
>
> **[8:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=497)** And this first one we're going to construct it with an empty initializer list.
>
> **[8:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=504)** Now the case of the empty initializer list we'll call the default constructor in most classes.
>
> **[8:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=510)** And so here's our default constructor.
>
> **[8:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=514)** And what that default constructor does is it prints out default constructor and it sets the state to zero right down in our initialize, this function.
>
> **[8:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=524)** We call this status function on the object and it'll print out that status.
>
> **[8:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=530)** And so I'm going to go ahead and build and run and you see that our status is zero and our value is zero and we've called the default constructor.
>
> **[8:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=538)** So that's pretty much what we expect with the empty initializer list.
>
> **[9:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=542)** Now for our second constructor, we're constructing it with an initializer list with the value seven in it.
>
> **[9:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=548)** And when I build and run this, you'll see it says initializer list seven.
>
> **[9:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=554)** The status is list constructed with the value seven.
>
> **[9:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=557)** So let's see how we get that.
>
> **[9:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=560)** So our initializer list constructor, it takes an initializer list object, which is a specific object, and then it does things with that list.
>
> **[9:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=572)** The first thing it does is it prints out all of the values in the list and it prints a new line after that.
>
> **[9:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=578)** So they're space separated and it's all very nice.
>
> **[9:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=581)** In this case, it's just printing out that one value cause there's only one value in the list.
>
> **[9:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=587)** And then what it does is it looks at the size of the list and it sets an iterator.
>
> **[9:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=592)** This is an iterator that it's setting to the beginning of the list, but it works like a pointer.
>
> **[9:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=596)** And then it checks if the size of the initializer list is greater than one, then it advances that pointer to halfway through the list and it sets the value of what that iterator is pointing at, and it sets the state as list constructed.
>
> **[10:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=612)** So it does this weird stuff, right?
>
> **[10:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=615)** And sometimes classes do weird stuff.
>
> **[10:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=618)** Let's look at the next one.
>
> **[10:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=619)** The next one, oops, accidentally moved our screen.
>
> **[10:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=628)** There we go.
>
> **[10:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=630)** The next one, initializes with parenthesis.
>
> **[10:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=634)** And so this calls what's called a copy constructor.
>
> **[10:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=637)** And let's see what it does.
>
> **[10:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=640)** I'm going to go ahead and I'm going to run it.
>
> **[10:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=641)** And you see it says copy constructor value 42 copied value.
>
> **[10:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=646)** And if we come up here into our class, our copy constructor here and it simply copies the value into our element.
>
> **[10:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=656)** Very simple and pretty much what we would expect with a copy constructor.
>
> **[11:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=660)** Next, we call it with an initializer list with five values in it.
>
> **[11:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=664)** And you remember all that weird logic we had in our initializer list.
>
> **[11:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=668)** So it's going to take the middle value, right?
>
> **[11:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=670)** And I'm going to run this and it says initializer list with those five values list constructed value three.
>
> **[11:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=676)** And if I do this with two values well we're doing an integer division there to get the halfway point and we actually end up with the second value.
>
> **[11:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=686)** And so again, you know, you need to look at it and you need to understand how it works because you're going to get results that you may not expect if you don't understand your constructors.
>
> **[11:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=697)** And then finally, our sixth one gives us two values here.
>
> **[11:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=701)** And this is the really weird one.
>
> **[11:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=703)** Okay, it says specific constructor one and two undef and value zero.
>
> **[11:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=709)** So let's take a look at this specific constructor.
>
> **[11:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=713)** Our specific instructor takes two values and the first value is a size T.
>
> **[12:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=720)** And it checks if it's less than 10.
>
> **[12:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=721)** And if it's less than 10, it just returns which leaves the default value.
>
> **[12:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=725)** And that's why we get this value of zero and it leaves our statuses undeaf.
>
> **[12:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=729)** If instead, I change this to be greater than 10, let's see I'll put in a 15 here.
>
> **[12:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=735)** Then it'll construct it.
>
> **[12:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=737)** And let's look at the logic here.
>
> **[12:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=739)** It'll just set the value to the second one and so it just ignores that first value except to see if it's less than 10.
>
> **[12:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=746)** So when I build and run, now you see that our our value is to, and our status is specific value.
>
> **[12:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=752)** So constructors can be weird depending on how the class was built, what its purpose is what things it needs to do, and you know the mood of the programmer the day that he wrote it.
>
> **[12:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=764)** So it's always important for us to understand the constructors in our objects when we're initializing them.
>
> **[12:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=772)** C plus plus has several options for different kinds of initializations.
>
> **[12:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=776)** Understanding these options will help you write safer code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), class. (3), case. (1), type. (1)
> **Prerequisites:** initialization (13)
> **Definitions:** is a  (7), is called (2), is an  (2), we call this (1)
> **Env Vars:** cvp (2), stl (1)
> **Exercise Files:** exercise files (1), template (1)
> **URLs:** [reference.com](https://reference.com) (1)
> **Versions:** 5.1 (1)
> **Cross-References:** as we saw (1)

#### Structured bindings
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=0)** - [Instructor] Structured bindings make it easy to unpack the values of a structure into separate variables, improving the readability of your code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=8)** This feature was introduced with C++ 17.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=12)** This is struct-binding.cpp from chapter 7 of the exercise files, and you'll notice down here, we have a structure called thing, with three elements, an integer, a double, and a constant character pointer for a C string, and they're named alpha, bravo and charlie.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=31)** and down here in main, we construct a thing object called x1, and it has our three values of being constructed in an initializer list.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=42)** So, we have 42 for the int, 73.2 for the double, and "hello, earthlings!" for the C-string.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=51)** Then, we have the same values in a tuple, and you see our tuple is initialized with the template parameters int, double, and const char pointer, and has the same values in a initializer list, and then we have a pair, which is the first two values in it, an int and a double.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=70)** I'm going to go ahead and I'm going to run this, and we'll see how the structured binding works because this is really, actually, pretty cool.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=77)** So, I build and run, and I'm going to scroll up here to the top, so we can see this first section that says struct, and you'll notice here, I have auto, and in square brackets, I have three variable names, a1, b1, and c1, and I'm assigning it from x1, and x1 is our thing object, and that's based on this structure here.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=106)** So, instead of dereferencing it from x1.alpha, x1.bravo, x1.charlie, I'm able to just put them directly into three variables, which presumably would be named, you know, whatever makes sense in the context of my code.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=123)** So, a1, b1, c1, and then I can use them directly in my print statement, and so this is called a structured binding, and this is how it works.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=134)** You always use auto, and you always use the square brackets, and you put your variables in the square brackets, and you assign it from your object.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=144)** This works just as well from a tuple, and if you've ever used tuples, you understand those can be a little bit of a challenge to dereference, right?
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=152)** And I can just drop them right into these variables with structured binding, and I get exactly the results that I expect.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=159)** Same thing with a pair.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=161)** Here's x3, our pair, and we have our two values, a3 and b3, and we're printing them out like that, but the cool thing here is that by using a reference with the auto, now these variables a3 and b3, they're just references to the values inside the pair, and this works with the tuple, it works with any of these.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=183)** And so I can actually come down here, and I can modify those values inside of x3, and take the structured binding into brand new variables, and get these brand new values.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=195)** So, we have the original pair here, 47 and 112.5 and the modified pair 212 and 500.9, right there.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=205)** So, when you use references with your structured binding, your references are the exact variables inside of the structure.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=214)** You can do the same with a C Array, and so here's a C Array, an integer array with five elements, and it's called x5, 1, 2, 3, 4, and 5, and I do the same thing, a5, b5, et cetera, and print them out, and we get our result right here, 1, 2, 3, 4, and 5.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=236)** In fact, you can do the same thing with a C string.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=238)** Here I have a C string with the word four, and there's four letters in the word four, but there's five elements in the array, right?
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=246)** Because the fifth element is the null pointer, and here I use my structured binding, and I get my values right there.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=255)** And you'll notice our C string, there's our 0 terminator, and all of our hexadecimal ASCII values.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=263)** So, structured bindings make it much more convenient to use structures like pairs, tuples or any contiguous primitive structure, like a struct or an array.

> [!info]- Semantic Content
>
> **Code Keywords:** struct (3), const (1), this, (1)
> **Versions:** 73.2 (1), 112.5 (1), 500.9 (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** struct-binding.cpp (1)
> **Env Vars:** ascii (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is called (1)

#### Random number engines
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=0)** - [Instructor] The random header provides a selection of random number generators, each with different strategies and properties.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=7)** In this video, we compare the different options by creating a histogram of their output.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=13)** This is rng.cpp from chapter seven of the exercise files.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=18)** And we include the random header here, which has the various random number generator classes.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=25)** We have a template function called histogram, which takes a random number generator class as a template argument.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=33)** We have a number of constants here, which control how the histogram works.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=37)** And down here in main, we have various calls to the histogram function with various random number generator engines.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=46)** A lot of these are commented out, and we'll look at those in a minute.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=49)** We're going to start with the two most common.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=51)** And for most purposes, 9 out of 10, maybe 99 out of 100 purposes, one of these is going to be your best choice.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=58)** The default random number, or rather, the default_random_engine, is usually going to be the one that's picked by your library that has the most evenly distributed output, balanced with requirements of CPU and memory and those things.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=76)** And so for most purposes, that will be just fine.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=81)** Let's go ahead and run this and see what the output looks like.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=83)** And this will give you an idea of how the histogram works, and how you can make your choice of random number generator.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=90)** So I'm going to go ahead and build and run this.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=92)** And you'll see we have our two random number generators that we have uncommented in main.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=99)** We have random_device and default_random_engine.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=102)** You can see they have very similar properties.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=104)** And if I run this several times, you'll see that their properties are more or less very similar.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=112)** And in fact, default_random_engine is probably the random_device, which is the hardware random device, at least on this machine.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=120)** You can manipulate the histogram by changing these constants.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=125)** If I increase the number of samples from 1,000 to, say, 100,000 and build and run this, you'll see that our histograms now smooth out a whole lot.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=137)** And in fact, they do look identical.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=139)** I'm going to build this and run it again.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=142)** You can see they're very, very similar, and they're very smoothed out.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=145)** Obviously, the more samples you take, the smoother the histogram is going to be.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=151)** And the fewer samples that you take, let's just make this 100 instead of 1,000, you'll see that the more ragged our histograms will look.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=161)** And by manipulating these options... The number of partitions is 10.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=165)** You'll notice that we have 10 partitions here.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=170)** And by manipulating these options, you can get a good idea of what your histograms look like.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=175)** I'm going to leave it at 1,000, which I just decided, perhaps arbitrarily, that this was a pretty good representation of the histograms.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=185)** We can uncomment the rest of these, and you can just briefly see what they look like.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=189)** I suggest that you run this code on your own machine to see what all of these look like.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=195)** And I'll uncomment those, and we'll build and run.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=198)** And you can see there's knuth, which is from "The Art of Computer Programming" by Donald Knuth, ranlux.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=206)** There's a number of them here, and they all have different properties, and they all work in different ways, and they all have different efficiencies, and they all have different best-case scenarios.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=218)** Again, for most purposes where you're going to need a random number, you're going to want to use one of these two: random_device or default_random_engine.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=226)** But if you want to see what your different choices look like, this histogram function is a great way to visualize that so you can get an idea of how the different random number generators operate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), this. (1), this, (1)
> **Code Identifiers:** default_random_engine (4), random_device (3)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (2)
> **File Paths:** rng.cpp (1)
> **Env Vars:** cpu (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The chrono library
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=0)** - [Instructor] The chrono library provides tools for measuring and reporting time and intervals.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=6)** Most of these classes and functions were introduced with C++ 11.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=11)** This is chrono.cpp from chapter seven of the exercise files.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=17)** We're going to start down here in main because I want to talk to you about the different types of clocks that are available.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=25)** Here, we're getting the current time, and we're printing it out in the print statement here.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=30)** And you notice that we're using a clock called system_clock from the chrono library.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=37)** And there's a function in system_clock called now, which gives us a time object, which we can then use in our formatter.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=48)** And when I build and run this, you'll see that the time comes out right here at the top, and it says, "system_clock::now is," and that's the time that it gives.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=62)** The system clock is the best clock for finding the current system time.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=68)** It is not terribly useful for measuring intervals.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=73)** I'm going to close the results window here.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=75)** We have up here a timer function.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=78)** And you'll notice I'm using a concept to restrict the auto parameter to something that's callable.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=85)** What this timer function does is you pass it a function, and it will call that function and it will time it.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=92)** And for this, it uses this steady_clock, which is usually the best choice for timing things.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=100)** This is a clock that's considered monotonic, which means that it cannot decrease as time moves forward.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=107)** This is the clock that's best for measuring intervals.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=110)** And so I use an alias here, and I call it with the now function, and then I run the function.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=116)** And we're actually calling this count_primes function.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=119)** And then we measure the time now after, and we subtract time one from time two.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=125)** And we return that difference in time. All right.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=129)** And the type we're returning here, it says seconds.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=131)** That's an alias up here that's a duration object.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=135)** And there's a number of different duration objects available in the chrono library.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=140)** And they're basically all the same duration object, but they're using a different ratio.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=146)** And there's actually a separate ratio library, and you can create your own ratios.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=150)** So here I've created one for frames per second.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=153)** 24 frames per second if you're using your code in a movie or something.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=158)** So let's run this code again, and we'll take a look at these different elapsed times.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=165)** So we're counting primes up to a certain value.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=167)** We've found 12,252 primes in the range.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=172)** And we have time elapsed in seconds, milliseconds, microseconds, and frames per second.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=178)** And that's all these print statements here.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=181)** So the format library is capable of taking a chrono object, as we demonstrate down here, but it requires extensions to do this, and it's not part of the standard in C++ 20.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=196)** In C++ 23, I think it will be part of the standard, but for now, know that these lines here may or may not work, depending on the format library that you're using.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=206)** We can, however, get the count of seconds or the count of milliseconds or the count of microseconds using these duration aliases that I have included up above.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=221)** And so for this purpose, we have milliseconds, microseconds, and frames per second.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=227)** And you'll notice also that I'm using the Greek letter mu here for microseconds.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=231)** As part of the standard, your format library should handle Unicode.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=235)** And yet, on some platforms, in particular, Microsoft Windows, you may need to set a code page or something to get that to work.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=243)** One more note here.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=244)** You'll notice that the system clock print statement has this formatter specification.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=250)** And this may look familiar if you're an old C programmer like I am.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=254)** This is actually taken directly from the strftime function from the C standard library.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=262)** So here on [cppreference.com](https://cppreference.com), you can look up strftime, which is in the C standard library.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=269)** You notice it's in C, date and time functions.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=273)** And you get all the details on the specifications for that format string.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=279)** And you can actually do quite a bit with it.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=282)** And most of this works.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=284)** On some operating systems and in some contexts, some of this may not work as expected.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=290)** But here we use these very common options, and we're able to print a date and time and time zone very simply.
>
> **[5:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=300)** The clock classes and the duration class are at the heart of the chrono library.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=305)** Understanding these two simple functionalities will allow you to make good use of the chrono library.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), this, (3), pass (1), let (1)
> **Code Identifiers:** system_clock (3), steady_clock (1), count_primes (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** chrono.cpp (1)
> **CLI Commands:** make (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Documentation:** specification (1)
> **Exercise Files:** exercise files (1)

#### The filesystem library
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=0)** - [Lecturer] The purpose of the file system library is to normalize file system operations across platforms.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=6)** Unlike the old C-style file system functions, the standard file system library seeks to bridge irregularities between POSIX, Unix, Windows, and other file systems.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=19)** This is file system dot CBP from Chapter seven of the exercise files.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=25)** We include the file system header, which has the file system library, and we abbreviate the namespace of standard file system 2FS, because we're going to be using that namespace a lot, and it's just more succinct.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=42)** Here's our format style print function, and a format or specialization for the file system path class.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=49)** The path class is probably the most common class we're going to use in the file system library today, and it has this convenient string function, which makes it very easy to simply specialize the formatter for it.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=66)** And down here, near our main, we have a couple of constants.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=73)** We have a file path fp, which is a path to a file that does not exist.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=79)** And we have a home directory.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=81)** And the purpose of this is so that we can have a common place to work from in the file tree.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=86)** And so, you'll want to put the path to your exercise files here.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=91)** Your path will be different than mine, and so this will not work unless you change this to the path to your exercise files on your system.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=100)** Down here in main, we create a path object based on this fp string, which is a path to a file that does not exist, and then we print that path using our format or specialization, and then we check to see if our home directory exists, which is this directory here, and we print it does not exist and exit if it doesn't.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=124)** And so, I'm going to go ahead, and I'm going to comment out the rest of this, and we'll go ahead and run this much of it, build and run.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=135)** And you see, there's our fp path, and we're calling the path object p, and we print it here, and we check to see if the home directory exists, and it does exist, so we don't get that error message.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=150)** If we change this to something that does not exist, like if I put in an X here, and we go ahead and build and run this, you'll see we get our error message that path does not exist and that comes from there.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=164)** And we're testing it with the exists function from the file system library.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=168)** So I'm going to go ahead and remove that X there, and we'll uncomment this try-catch block.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=179)** So the purpose of the try-catch block is to demonstrate the file system error exception class that comes in the file system library.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=188)** And before we get to that, though, let's just go ahead and comment out some of these and work on these one at a time so you can see how they work.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=197)** All right, I'm going to go ahead and build and run this.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=200)** And you see that we have current path, and you see that it's this crazy path here.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=206)** Yours will be different.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=207)** This is the path of the executable under the Xcode IDE that I'm working with here on this Mac.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=216)** And on any system, this executable path is going to be different.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=221)** And if you're using an IDE, say, on a Windows machine or on a different machine, you'll have a very different path.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=228)** And so, because that path is not very predictable, we're going to change our current path to our homedir, and we do that with the current path function.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=238)** And if I go ahead and uncomment a few more lines here, we'll print the current path after we change to our homedir.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=247)** And then we'll also print an absolute path based on our p path, which again, is this file that does not exist.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=255)** But you notice that's a relative path, and so by using the absolute function, it'll create an absolute path based on our current path and the relative path.
>
> **[4:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=266)** So I'm going to go ahead and run this, and you'll see those results.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=269)** Now our current path is our exercise files and our absolute path with that relative path added to it looks like that, so that's exactly what we expect.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=279)** And of course, if you're on a different operating system, these paths will look different.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=283)** Like if you're on Windows, they may have a drive letter and a colon before the path.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=288)** They may use back slashes instead of forward slashes.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=291)** But the point is, is that the path object, it parses out that path, and it puts all of the different parts of it in a structure so that it can construct a path representation that works for your operating system.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=305)** All right, let's look at a couple more functions here.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=309)** We have concatenate, and that concatenate is done with a plus equals just like it is with strings.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=316)** And you'll notice that its result is the same as with strings.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=319)** It simply takes these two strings and puts them together and creates a path out of that concatenated string.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=326)** Or we have this other function with a slash equals that adds the second part to the directory tree, rather than simply concatenating it as a string.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=338)** And so, when I go ahead and run this, you'll see that we have testdirfoo without a slash, 'cause that's just been concatenated as a string.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=348)** And here, we have a path object with that foo.txt added to the tree, and then printed out as part of a directory tree.
>
> **[5:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=357)** And so, that's the slash equals operator with a path object.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=362)** Let's take a look at the canonical function, and I'll go ahead and I'll run this, and you can see what it does.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=369)** I pass the canonical function a path, and in this case, it's just a single dot.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=375)** And on most operating systems, a single dot means the current directory.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=379)** In this case, it's our exercise files directory.
>
> **[6:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=382)** And the canonical function will print a canonical version of that, or rather, it returns a path object with that canonical version, and that looks like this on this machine.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=397)** It's our directory to our exercise files.
>
> **[6:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=401)** And if I give this canonical function something that does not exist, it cannot make a canonical path to an object that doesn't exist, 'cause there is no canonical path to an object that doesn't exist.
>
> **[6:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=413)** And so, we'll get an exception, and we can see what our exception class does here.
>
> **[6:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=418)** Our exception class returns several objects.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=421)** It returns a what, which is the error message.
>
> **[7:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=424)** And here, it says, in canonical, no such file or directory.
>
> **[7:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=429)** And it also gives us the two pieces of information that it took to try to create a canonical path, took our current path and what we passed it.
>
> **[7:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=440)** And it says, no, that doesn't exist when we put those together.
>
> **[7:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=442)** And those two path objects are also available as extra objects from the error class.
>
> **[7:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=449)** So I'll put that back the way that it was.
>
> **[7:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=452)** And then we're going to look at directories.
>
> **[7:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=455)** I'll uncomment this, and I'll go ahead and I'll run it.
>
> **[7:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=458)** And you see that I'm adding to the tree.
>
> **[7:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=461)** I'm concatenating to the tree with the slash equals operator, this chap zero one, which is the first chapter of our exercise files.
>
> **[7:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=469)** And I create a path out of that called dirpath, and I pass that to the printdir function, which we have up above.
>
> **[8:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=480)** And that will print out all of the files in the directory, prints out all of the directory entry names in the directory.
>
> **[8:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=489)** And that printdir looks like this.
>
> **[8:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=492)** It's actually very simple.
>
> **[8:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=494)** It uses this directory entry class from the file system namespace, and it's called directory entry.
>
> **[8:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=502)** And we're aliasing it to this de, and we create a vector of those directory entry objects.
>
> **[8:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=509)** We have here a little lambda function that we're using as a comparison operator for a sort, and we'll see that sort down here in a moment.
>
> **[8:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=519)** We check if the path exists, and if not, we return, and we check if it is a directory using the is directory function.
>
> **[8:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=527)** And if it is a directory, then we iterate on the directory using this directory iterator function, and we put all those directory entry objects onto our dir vector right up here.
>
> **[9:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=543)** And then, we sort the vector, and we print it out and print out a new line.
>
> **[9:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=550)** And that gives us this result down here, which we see there.
>
> **[9:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=557)** The file system path class is at the core of the file system library.
>
> **[9:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=561)** It provides normalized file name and directory path representation across disparate environments.
>
> **[9:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=568)** A path object may represent a file, a directory, or even a non-existent or impossible object.
>
> **[9:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=574)** The file system library carries a rich set of information through its directory entry and related classes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), this, (6), let (3), class. (2), this. (2)
> **Exercise Files:** exercise files (7)
> **Env Vars:** ide (2), posix (1), cbp (1)
> **Definitions:** is a  (4)
> **File Paths:** foo.txt (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [lecturer] (1)


### 8. Other C++20 New Features

> [↑ Back to Table of Contents](#table-of-contents)

#### The format library
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=0)** - [Instructor] C++ 20 introduces the new format library which returns a formatted representation of its arguments as a string.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=9)** The new formatter uses a Python style formatting string with concise syntax, type safety and excellent performance.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=18)** This is format .CPP from chapter eight.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=20)** Of the exercise files, we're including the format header which has the format library also IO stream, string view and numbers.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=29)** And you'll notice from the numbers library we're using the value pi.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=34)** We'll also be using Cout and the format function in this example.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=40)** And we have a template class for a fraction with enumerator and a denominator.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=44)** We'll get to that a little bit later.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=45)** We also have our format style print function which we've been using throughout this course.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=50)** This uses the new formatter and it uses this V format function to take the arguments and turn them into a string that can be output by outputs.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=61)** In this case, which is a very very low overhead fast printing mechanism inherited from C.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=69)** This is a format specialization for the fraction class that we have up above the templated fraction class.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=76)** You notice that this is also templated with a type named T and it overloads a formatter class and it inherits also from a formatter of INT in this case I always use INT for this.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=90)** For most specializations, it really doesn't matter which of the formatter specializations you inherit from.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=96)** And in this case, I'm inheriting from INT and because I'm using a templated class I'm specializing for a templated class.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=105)** I need the template parameter here.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=107)** I would still need the template keyword with an empty argument list, but in this case I have a type name and you can simply use this as a template of how to do this.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=119)** All you need to do is add your type here and down here.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=124)** Use your object to get the values that you need and format them with a standard format specification.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=130)** And this will work in most cases if you need anything more complex.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=135)** There is online documentation on how to do that, but in most cases something like this works just fine.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=141)** Coming down here into Main, we have some variables.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=144)** We have an integer, we have a C string.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=148)** We have a standard string view object and we have a double with the value of pi.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=156)** And then we print out one of our strings using Cout and format.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=161)** Now in C++ 20, you have the format function and that's a very common way to use the formatter in C++ 20, the format function returns an STL string which you can then pipe into Cout using the overloaded left shift operator that Cout uses for this.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=182)** And that works in many cases.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=185)** The disadvantage there is Cout.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=187)** Cout is cumbersome, it's slow.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=191)** It takes up a lot of space and memory.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=193)** And in fact part of the purpose of the format library is to not have to use that anymore.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=198)** And so that's why I'm using this format style print function in all of the code.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=204)** And I use it in all of my code too.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=206)** That's for console applications where I need to print something.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=209)** And this is far more lightweight than this.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=213)** And so for the rest of these we're just using the print function which works exactly the same.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=218)** It uses the same formatter, it uses the same format strings.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=223)** And so I'm going to go ahead and run this and we'll take a look at each of these bits of output against the code that produces them.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=230)** So here is Hello Earthlings.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=233)** And you notice that my human strings says earthlings and I have a new line there and I'm using format and Cout for this and it prints it here.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=241)** And here we have it with the print function instead but it works exactly the same.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=247)** And we have two arguments.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=248)** We have human and alien and it says, "Hello earthlings we are Vulcans," because alien is a string.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=256)** And you notice it's a different type of string.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=258)** It's a string view.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=259)** The formatter is completely type safe.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=262)** And because of the way that it uses parameter packs to pass the variables it knows the type of those variables.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=269)** And so unlike print F from C where it's very easy to mismatch your parameters and your strings with format, it's not possible to do that.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=279)** And so we have a really tight safe system.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=281)** We can also use index parameters.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=283)** Here we have a one and a zero.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=285)** The parameters are indexed zero based.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=288)** And so this actually turns it around and it says "Hello Vulcans, we are earthlings" and we see that down here.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=294)** Hello Vulcans we are earthlings.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=297)** The formatter in the specification has to be Unicode safe and so we can use Unicode in our code.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=304)** Of course, this depends on the environment that we're running in.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=308)** We can't force your environment to be Unicode safe particularly on Windows.
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=312)** You have to select the correct code page in order for it to be Unicode safe.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=316)** And so this will only work on systems that are Unicode compliant.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=321)** And so here we have pi is and our parameter curly braces and we have our floating point pi.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=329)** And you notice that down here it says pi is and pi to a good number of digits.
>
> **[5:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=335)** In the next line we specify a floating point precision.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=339)** And so you need this colon here and everything to the right of the colon is a precision.
>
> **[5:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=343)** And in this case we're saying to five places.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=346)** And so here we have five digits of pi.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=348)** Starting with the three we can still use the index parameters.
>
> **[5:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=353)** And so here we turn them around, we have the integer and you notice the colon, the colon is actually optional when you don't have anything to the right of it.
>
> **[6:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=361)** And so I could take that out and it'd work just fine.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=364)** And then we have the zero index for the pi.
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=368)** And again, we have its precision there to five places.
>
> **[6:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=371)** And it says INT a is 47 and pi is five places of pi.
>
> **[6:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=376)** We can also specify field width and alignment.
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=381)** And you can do all of these things with the IO stream library but it's very confusing to do them with all of the modifiers and having to reset some of them and not having to reset other ones.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=391)** This makes it very, very simple to do things like this.
>
> **[6:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=394)** And so here we specify our filled with as 10 places and it's left aligned and it's filled with asterisks.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=403)** And here we have our INT A 47.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=406)** We have 10 positions.
>
> **[6:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=408)** On the right hand side it's filled with asterisks because it's left aligned and down here it's filled with zeros and it's right aligned.
>
> **[6:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=415)** So we have 0, 0, 0, 0, 47.
>
> **[6:58](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=418)** Here it's centered and by default it's space filled since we didn't specify a fill character.
>
> **[7:03](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=423)** And here it is centered with an underscore.
>
> **[7:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=426)** And so here we have centered with spaces and centered with underscores.
>
> **[7:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=431)** We can specify hexadecimal, octal, and decimal.
>
> **[7:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=435)** And you notice that our hexadecimal has a capital F.
>
> **[7:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=438)** If we change that to a lowercase X and run it again you'll see that we now get a lowercase F and we have octal and decimal.
>
> **[7:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=448)** And here's our fraction using long for the numerator and denominator.
>
> **[7:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=453)** And here we printed out using our specialization.
>
> **[7:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=457)** And you notice it says fraction three over five.
>
> **[7:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=461)** The formatter will forever change the way that we do character formatting in C++.
>
> **[7:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=466)** When used with the C++ 23 print function it will significantly reduce the need for IO streams and Cout.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), this. (5), case, (2), class. (2), from. (1)
> **Env Vars:** int (5), cpp (1), stl (1)
> **Exercise Files:** template (4), exercise files (1)
> **Definitions:** is a  (4)
> **Documentation:** specification (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### The spaceship operator
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=0)** - [Instructor] The three-way comparison operator, commonly called the Spaceship operator because it looks like a flying saucer is new in C++ 20.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=9)** The purpose of the Spaceship operator is to provide a unified comparison operator for objects.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=15)** This is spaceship.cpp from Chapter 8 of the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=20)** And the Spaceship operator is not what you might initially think.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=24)** We don't use it to compare values.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=27)** Rather we use it as a comparison operator in a class.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=31)** So here we have a class called num, and it's simply a wrapper around an integer.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=37)** And we have a number of comparison operators.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=39)** This is the standard set of comparison operators that you might have in a class.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=45)** And down here in main, we're testing all these comparison operators with static_assert.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=51)** And because we don't have any errors over here, we know that those are all passing.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=55)** If I was to change one of these, for example, you'll notice that in a moment we get an error here, static_assert failed due to the requirement blah, blah, blah.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=65)** And so when I put it back, then our error goes away.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=69)** So, all these static_asserts are passing because 7 is less than 42 and seven is equal to seven, et cetera, et cetera.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=79)** Now, because of the Spaceship operator, we can replace all these comparison operators with one.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=86)** And so I can come in here and I can say auto operator, and the Spaceship operator const num reference right-hand side const = default.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=103)** Okay, so let's unpack this.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=106)** Oh, let's first correct it.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=108)** There we go.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=110)** The Spaceship operator is a strong ordering object from the compare header, and you'll notice that up here we have the compare header.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=119)** You can't use it as a normal operator.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=121)** Instead, what it's for is for use as a comparison operator in a class.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=127)** This uses a new feature of C++ 20 called rewritten expressions.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=133)** And so when we set it to the default, we no longer need all of those other operators.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=139)** In fact, we no longer even need non-member operators for comparisons on the left-hand side of an operator.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=146)** This one operator overload will do the entire job, and you'll notice that all of my static asserts are working, I can build this and run it and everything is as expected.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=160)** So, this works for simple scaler types, like this integer wrapper.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=167)** For more complex types, we need to add an equality operator overload, and we can no longer use the default.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=175)** This is Spaceship-frac.cpp from Chapter 8 of the exercise files.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=181)** In this case, we have a class that has two scalar values, it's a fraction.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=187)** And because of this, we can no longer use the default Spaceship operator but we can still use the Spaceship operator.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=193)** We simply have to put in a comparison in the body of the function, and we also need to specify an equality operator.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=201)** But other than that, it works the same, and as you can see, it still saves us a whole lot of work from specifying all of those separate operators, and even from having non-member operators for comparisons on the left-hand side of the operator, and you can see, I'm going to go ahead and build and run this, that all of our comparisons, our static asserts are working as expected.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=226)** The power of the Spaceship Operator is in its ability to streamline comparison overloads in your classes.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=232)** It improves both simplicity, and efficiency when compared to overloading each operator independently.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), const (2), default. (2), let (2), static (2)
> **Code Identifiers:** static_assert (2), static_asserts (1)
> **File Paths:** spaceship.cpp (1), spaceship-frac.cpp (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Integer comparisons
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=0)** - [Instructor] Using comparison operators to compare different types of integers may not always produce the expected results.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=8)** For these circumstances, C++ 20 has added a set of integer-safe comparison functions.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=15)** This is working.cpp from chapter eight of the exercise files, and let's just come down here and create a little example.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=23)** We'll take an integer and we'll give it a value of minus three, and an unsigned integer and give it a value of seven.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=35)** And if x is less than y, print true.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=44)** Else, print false.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=49)** Now, you would expect this to print true because minus three is indeed less than seven.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=57)** When I run it, you'll notice that it prints false.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=62)** The reason for this is that the minus three is signed and the seven is unsigned, and these are actually subtly different representations of an integer.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=75)** Minus three is an integer, a signed integer, and integers on most modern processors use two's complement notation for negative numbers, and this means that it sets a sign bit and it uses a very large number and it's just like less than the maximum by that amount.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=97)** And so we can easily illustrate this if I print a x is, and I'll cast this to unsigned, and put an x here.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=110)** Need a comma, don't I?
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=112)** There we go.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=113)** This'll cast the value of x to an unsigned integer, and you'll see, when I run this, that it is indeed a very large number that is not less than seven.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=125)** Standard behavior of comparison operator is to convert the signed type to unsigned, and whether or not we think that's the best behavior, it's been the behavior since C was invented and they're not about to change it now and break a lot of other code that may count on it.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=141)** So, instead, what we have in C++ 20 is we have a new set of comparison functions, and we'll say include utility.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=156)** And instead of this x is less than y, we'll put standard compare less x and y.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=170)** And we no longer need that.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=171)** And now when I run this, you'll see that minus three is indeed less than seven as we expected.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=180)** The utility header provides a full complement of these functions all in the standard name space.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=186)** We have compare equal, compare not equal, less, less than or equal, greater, and greater than equal.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=192)** These comparison functions provide a convenient means to safely compare disparate integer types.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), else, (1)
> **Definitions:** is an  (1), means that (1)
> **File Paths:** working.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### The span class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=0)** - [Instructor] The standard span class is new in C++20.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=4)** It provides a simple wrapper that creates a view over a contiguous sequence of objects.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=10)** Span doesn't own any of its own data.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=13)** It refers to the data in the underlying structure.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=16)** It's much like a string view for C arrays.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=19)** The underlying structure may be a C array, a vector, or an STL array.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=24)** This is span.cpp from chapter eight of the exercise files.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=28)** Span adds STL container-like capabilities to this C array down here.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=35)** We define the C array with 10 elements and the elements have integer values 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=45)** And then we call our pspan function and our pspan function takes a span.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=51)** And so the C array is used to construct this span and this span is used here inside the function.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=60)** And so we can get its size, we can get the number of elements, the number of bytes, and we can print each of the elements in an iterated for loop.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=71)** And when I build and run this, you see that it works as expected.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=75)** The span class itself doesn't own the data.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=78)** The data belongs to the underlying data structure.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=81)** In this case, the C array.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=83)** The span is just a view over the underlying data that provides some useful member functions and iterators.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (1), case, (1)
> **Env Vars:** stl (2)
> **File Paths:** span.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)


### Final Project and Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Final project: Numword
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=5)** - [Instructor] Over the course of my career, I've used a lot of programming languages.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=10)** When learning a new language, I like to have a project to work on that exposes me to the nuances of the language.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=16)** One of my favorite exercises for this purpose is the numword class.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=21)** I've written it in dozens of languages over the years, including several times in C and C Plus Plus.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=28)** Numwords is a class that spells out a number in words.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=32)** It can be useful for banking and accounting applications and its output looks like this.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=39)** It's usage should work like this.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=43)** This main file is available in the exercise files as chap09/numword/numword-test.cpp and my solution to the class is in the same folder as numword dot H and numword dot cpp.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=61)** Expect this project to take several hours or longer.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=64)** Take your time, experiment a lot.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=67)** Learning to write a good-sized class from scratch can be extremely valuable for you.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), class. (1)
> **File Paths:** chap09/numword/numword-test.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### Thank you
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=2)** The goal of this course was to provide you with a deeper understanding of the C++ language.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=8)** We've covered a lot of ground with operator overloads, move semantics, lambda expressions, constraints and concepts, options and variance.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=17)** Along with a thorough discussion of concurrency, threads async and mutex classes.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=23)** We dove into new features like structured bindings and the three-way comparison operator.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=29)** Along the way, I hope you've taken some time to experiment with the exercise files and thought about how to use these powerful techniques in your own projects.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=40)** C++ is a rich and powerful language and your projects will benefit tremendously from a deeper understanding of its intricacies.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=48)** I hope you've enjoyed this course as much as I've enjoyed creating it for you.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=53)** So have fun and create something wonderful with C++ advanced topics.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (1), async (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [bill] (1)


## Instructor

- [[Bill Weinman]]

## Resources

- Exercise files available

## Skills Covered

- C++

## Path Context

### In [[Master C++]]
← [[C++ Design Patterns- Creational]] | **6 of 6**

### In [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]
← [[C++ Design Patterns- Structural]] | **3 of 3**

## Part of

- [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]

## Appears In

- [[Master C++]]
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