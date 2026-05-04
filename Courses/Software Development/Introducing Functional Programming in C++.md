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
  - '[Getting Started with C++](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20C%2B%2B.md)'
prev_courses:
  - '[Complete Guide To C Plus Plus Programming Foundations](Complete%20Guide%20To%20C%20Plus%20Plus%20Programming%20Foundations.md)'
next_courses:
  - '[Learning C++](Learning%20C%2B%2B.md)'
path_nav: '[{"path":"Getting Started with C++","position":2,"total":5,"prev":"Complete Guide To C Plus Plus Programming Foundations","next":"Learning C++"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/functional-programming
  - skill/c
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unleash-the-power-functional-programming-in-c-plus-plus?u=76281980&t=0)** - [Troy] [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) in C++ allows you to write less code that is also more powerful. Functional programming teaches us to tell the computer what we want instead of telling it how to do it. Hi, I'm Troy Miles, and I've written award-winning games, popular mobile apps, and large-scale public websites. In this course, we'll explore different techniques and libraries to make our C++ code more functional.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (2)
> **CLI Commands:** make (1)
> **Speakers:** - [troy] (1)

#### [What you should know](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/what-you-should-know?u=76281980&t=1)** - [Instructor] You should be an experienced C++ programmer. This is not a teach you to program C++ course. It is a course to teach you a different technique for programming C++. I am on a Mac using Visual Studio Code as my editor. However, any text editor you've used for C++ development will work fine. In Visual Studio Code, I have font ligatures turned on. This joins two characters next to each other into one. For instance, when I type a dash and a greater-than sign, it will display as a right arrow. I will be using the Clang Compiler from a command line. However, GCC and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) compilers will also work. For this course, I've downloaded the Boost RxCpp and Catch2 libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=1)** - [Narrator] [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) has many benefits. Here are my top three. Pure functions are simple by design making them understandable. Without classes and by emphasizing pure functions our code is easier to debug and test and since we lack mutable state, multi-threading is achievable. What does it mean to program in a functional style? The answer depends on who you ask, but here are a few common trades. We try to avoid data mutations so all of our variables tend to be immutable. Immutable is just a fancy [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for a constant. If you can't change variables, loops are difficult to implement so recursion is preferred. We keep functions clean and straightforward. Functions are pure meaning they have outputs which depend only on their inputs. They also avoid making changes to program state which makes them side-effect free. We prefer using expressions to statements. Expressions return values and can appear on the right hand side of an equal sign. Statements return nothing and exist mainly to cause side effects. Finally, currying and partial applications manage how we send our arguments to functions. Since C++ is not a functional programming language, these are all more guidelines than rules. The coding community sometimes things that object-oriented and functional programming are enemies, they are not. To quote Uncle Bob Martin, "Functional programs like object-oriented programs "are composed of functions that operate on data." We can use the best of each paradigm
>
> **[1:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/benefits-of-functional-programming?u=76281980&t=94)** such as object-oriented polymorphism and single purpose classes and functional programming's emphasis on immutability and pure functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Unit testing functional programming](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=1)** - [Instructor] One of the nice benefits of [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) is easier testing, not having classes to mock or instantiate makes testing simpler, using pure functions whose outputs solely depends on their inputs, means the tests almost write themselves. Let's take a quick look at [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) a C++ program written functionally. We'll download the open source, Catch2, unit test framework. So, here's the Catch2 website, we're going to scroll down until we see the logo, and then, just past the logo, there is a long blue link, which says single header can be downloaded directly using this link. We're going to click that. That will download the catch.hpp file to our machine, and then, we're going to copy that catch.hpp file to our working directory. Yeah, we're going to go to Visual Studio Code, and here, we have main.cpp plus catch.hpp. This code uses the Catch2 unit test framework. The define statement CATCH_CONFIG_MAIN tells catch to create a main function. You only need to do this once. Next comes, catch.hpp. It is the unit test framework's single header file. It's giving us a green squiggly, but that's, that's wrong. Every now and then, Visual Studio Code gives a false positive. Next, comes our single function, fibonacci,
>
> **[1:34](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=94)** which computes the series value for the past number. Note that this function is both pure and recursive. Below the function, is the test case, and it's going to check to make sure that we received the correct output for each input. From the terminal, let's build the app, and so, I'm going to right-click on main.cpp, choose Open in Terminal, and then, I'm going to type clang++
>
> **[2:02](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/unit-testing-functional-programming?u=76281980&t=122)** - std=c++17. I always like to have all my warnings on, so that's a dash, capital W, A-L-L, for all, and main.cpp. Once this finishes building, by default, the compile creates the name a.out, and so, to execute our program, we're going to type ./a.out and that will execute our unit test for us, and right now, it's telling us all tests passed. So, looks like our code is working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=1)** - [Instructor] To get the most functional features, we're going to build our code for C++ 17. We won't always need it, but it doesn't hurt to have it available. Each of the three big compilers, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), Clang and GCC has excellent C++ 17 support. Here are the command line flags to activate it. If you use CMake to build your programs, then it's easy to add C++ 17 support, simply add the line set CMake CXX standard space 17 near the top of your CMake list dot text file. That's all it takes. Let's build an actual C++ 17 program and pay attention to the command line options this time. Let's open Visual Studio Code we're going to go file, new and we'll begin by saying pound include and this is going to be iostream. Next we'll add a space and then we're going to have a name space and our usage here is going to be a little bit silly but it will test a compiler C++ 17 feature so we're going to say A colon colon, that's the scope resolution operator, B colon colon, C. This is C++ 17's nested name spaces and a space, an open curly brace, a closed curly brace and in between them, we're going to type int I colon. Then we'll come down a couple of lines
>
> **[1:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=97)** and we'll have int main, every C++ program needs its main function, and we're going to do A colon colon, B colon colon, C colon colon I equals 42.
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=114)** Then we'll do std colon colon c out and then we'll say nested name spaces are available colon space, closed quotes and then we'll say A colon colon, B colon colon, C colon colon I and then we'll close this up by saying std colon colon end L and we'll return zero. We'll go back up to the file menu click save, we're going to name this main dot cpp all lowercase. Save it. Then I'm going to right click on this file and say open in terminal and then from the terminal, the command to compile it for C++ 17 is clang, C L A N G, plus plus space dash std equals C++ 17 dash capital W for warnings and I want all the warnings so that's all and then main dot cpp and by default, this is going to be called a dot out so to execute it we're going to say dot forward slash a dot out
>
> **[3:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/enabling-c-plus-plus-17?u=76281980&t=210)** and we get the message nested name spaces are available. Now, just out of curiosity, if we wanted to see what happens when we don't have C++ 17, let us compile it for C++ 14 so we'll do clang plus plus dash std equals C++ 14 dash capital W all, main dot cpp and we'll try building this and you notice that we get a warning. Nested name space definition is a C++ 17 extension and it tells us you know that hey it doesn't understand what this means under C++ 14. And either way, we know now that we get a warning message and if we build it under C++ 17, all is fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** command line (2), terminal (2), visual studio (1)
> **Env Vars:** gcc (1), cxx (1)
> **Warnings:** warning (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [transform instead of map](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=1)** - [Instructor] The first methods that newbie functional programmers learn are map, filter and reduce. A lot of languages, [Databases](../../Skills/Software%20Development/Databases.md), and libraries have these methods, but unfortunately they don't exist in C++. But don't fret, we have substitutes available. Instead of map, filter and reduce, we have transform, copy if, and accumulate. These replacements aren't functional, nor are they pure, but they have been part of the C++ standard library since the 1990s. We could create implementations of them from scratch, but that usually isn't a good idea. The [Algorithms](../../Skills/Software%20Development/Algorithms.md) of the standard library have had over 20 years of optimizations and improvements. So let's go back to visual studio code. Let us go into file, new. And the first thing that we're going to do is we're going to add some include files. So we'll say include iostream, include algorithm, include vector, and finally, include numeric. Then we're going to save ourselves a little bit of typing by putting in using namespace std, and we'll create our main function. We're not going to pass it anything. Close it up, on the last line of the main function we'll say return 0, and then we'll go back to the top of it, and here we'll create auto render.
>
> **[1:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=97)** And this is going to be a lambda function, and this lambda function is going to take auto collection. We're going to use this guy to render out our collection so we can see what's in them. And, let's see, we'll have a semicolon right there, and then in the middle we'll have for, and this is going to be a const auto reference to a val and then collections. So this is in range collection. And we'll say cout, val, and then endl semicolon. Then we'll start doing our transform and the first thing that we need to do, is we need to create a vector to hold a list of data for us. So we're going to call this in collection, we'll use list initialization here and say one. We're going to go all the way up to 10 here. So we got the numbers one through 10. And then we're going to have another vector, it's also going to be an int, and we're going to call this one out collection, But we don't need to initialize it. Then we'll do a transform, and transform takes four parameters. Takes a begin iterator, that's going to be in collection.begin,
>
> **[3:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=197)** an end iterator, and this is going to be in collection.end. Come on down to the line below it here, there we'll have a back inserter. And since our destination collection is empty, we have to use a back inserter. And it's out collection, and we have our lambda function and this function gets called once for each item in our collection, and it's going to do a transform of it, and return whatever the results of that transform is. So we'll do a const int reference to a value, and then here we'll say return value times three semicolon. Then we need one semicolon right here and let's do this, we'll say cout we'll just say transform, do an endl here, then we'll do a render and we'll say out collection here and this will let us see what's going on. We'll save this off with a command s, we'll call it main.cpp, save it. We will open in terminal,
>
> **[4:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=291)** bring this up a little bit, and we're going to say clang++
>
> **[4:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=297)** - std=C++17
>
> **[5:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/transform-instead-of-map?u=76281980&t=301)** - Wall for all warnings and then main.cpp. And then we do a ./a.out to run our program, and what we get is we see it says transform and we get the numbers all the way from 3 to 30 by three so it's multiplying our 1 through 10 to be 3 to 30 and that is our transform method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Speakers:** - [instructor] (1), - std (1), - wall (1)
> **File Paths:** main.cpp (2)
> **Tools:** visual studio (1), terminal (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** initialization (1)

#### [copy_if instead of filter](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=1)** - [Instructor] So let's go ahead and create our copy_if. So first thing we want to do is get a little bit of space. We're going to create another vector. It's going to be of int, and we'll call this filteredCollection. We're going to use back_inserter on it, so we don't need to initialize it with any data, and we're going to have our copy_if, and it takes an outCollection.begin, which is our begin iterator. Then we're going to have outCollection.end. There's our end iterator, and we'll go ahead and put this on the next line. We'll scroll up a little bit, just give ourselves a little bit more room. Then we're going to have a back_inserter, back underscore inserter, and this is going to take our filteredCollection, and finally, we'll have our lambda, and our lambda is going to be open, close square brackets, parentheses, and we have an int, reference to a value, and then open and close curly braces, and inside of here, we will have a return, and it will do a value, modulus two, not equal to zero, and this is going to say if it is an odd value, keep it in our collection.
>
> **[1:36](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=96)** Then we have our closing curly brace, our closing parentheses, and our semi-colon, and I don't need that one right there anymore. Then we'll say cout, and for the cout, we'll just say copy_if, and an end line, and then we'll do a render, filteredCollection, and a semi-colon. Do a Command + S to save this off. Do an Open in Terminal, and we'll do clang++
>
> **[2:14](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=134)** - std=c++17
>
> **[2:19](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/copy-if-instead-of-filter?u=76281980&t=139)** - Wall, that's for all the warnings, and finally, main.cpp. Then we'll do a ./a.out to execute our program, and let's see what we got. We still have our Transform. We get the numbers three through 30. That is our transformation of multiplying the numbers one through 10 by, by multiplying it by three, and our copy_if is looking for only the odd numbers, and it's going to take the odd numbers out of here, and we get three, nine, 15, 21, and 24, so. 24 is gone. 30 is gone. And that is our copy_if.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=1)** - [Instructor] At last we've reached the Accumulate function. So here we will do int results equals accumulate and accumulate takes four parameters. It's going to take a filtered collection dot begin that is the begin iterator, a filtered collection dot end for end iterator, do a comma and then go to the next line.
>
> **[0:47](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=47)** Then it takes a, and in this case it's going to be an integer value, which is the initial value for the accumulate. And in our case, it's going to be zero 'cause we want to add all our numbers together and we're going to start at zero. Then it takes the lambda function, which is a binary operation. And so this takes two values, the first one's going to be int total and the second one we're going to call int current. Then inside we're going to say return total plus current. And then a semi-colon, end of our curly brace, and then we're going to have a semi-colon. And right here we'll do a c out. And we'll call this accumulate and an end l, then we'll do another c out. And we'll say that results equal results.
>
> **[2:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/accumulate-instead-of-reduce?u=76281980&t=123)** Then an end l, then we go Command S to save this off. We're going to open this in the terminal. We'll do a clang plus plus dash std equals c plus plus 17 dash capitol w, for warnings all of them and a main dot cpp, and then a dot forward slash a dot out to execute our program. And now we get the accumulate and we get a results is 75, which I'm really hoping that 21 plus 27 plus 15 plus 9 plus 3 is 75. And that is our Accumulate function.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [bind](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=1)** - [Instructor] In [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md), partial application is a technique which creates a new function with a smaller number of arguments from an old one. The number of arguments a function accepts is called its arity. Std::bind comes from the stl's functional header and allows us to partially apply functions. We can reorder the function's argument and bind values to arbitrary arguments. Let's take a look at std::bind with some code. Now in this file, we've already included our iostream's cmath and vector. We're using the namespace std and we have a vector of int of ages. And these ages represent the ages of our customers. And we have a very simple problem. We just want to know how many of our customers are over 21. Now typical programing what we would do is iterate over this range. Every time we see an age that's greater than or equal to 21 we increase this counter, which we initially set at zero. And in the end, we print out the number that are over 21. This code works. It does what we asked it to do. The problem with it is it's not thinking functionally. We are telling the computer every step, how to do what we want. And instead, what we should think of, is we should think more functionally and tell the computer what it is that we want. So let's take a look at how to do that. So we'll begin by saying, hey we have auto. We're going to have num over 21 and it is going to be equal to std, colon, colon, count, if. So the stl already has a function that if
>
> **[1:33](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=93)** you give it a range to iterate over, it will tell you how many have passed your test. So in this case, we're going to pass it the begin iterator, which is the ages, begin, and then the end, which is ages, dot, end. And then the next thing that it wants here is a predicate. And so a predicate once again is a function that when passed a value, returns either true or false. So it is a unary function that takes a value and returns either true or false. And we don't have that yet, so let's go ahead and create one. So we'll come up here and we're going to say auto greater than and this is going to check, only thing is we're going to tell this, int first and int second. So we're going to give it two values, make it a binary function. And it's going to return true if first is greater than or equal to second. All right, so we have a little bit of a problem here. Count if expects a unary predicate and we have a binary function, so we're going to use std::bind to fix that problem for us. So std, colon, colon, bind and the first thing that it expects is a reference to the function. So we say, reference, greater, underscore, than, comma. Now the next thing that it wants
>
> **[3:05](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=185)** is it wants to know the arguments of the function. Now there are two functions that we should be giving it two arguments, and the first one, what we're going to do is we're going to say std, colon, colon, placeholders colon, colon, underscore, one. What this says is, we are going to pass in the first argument to this function. We're going to pass it in. So it's going to be passed in from count in sign and from count if. Then we're going to say for the second argument, which count if won't supply, go ahead and set it to 21. Let's go ahead and close this up. Put a semi-colon on here. Then we do a c out, and this is going to be also, let's call it the New Number over 21, equals and we'll do another c out. That's going to be num over 21. And then we're going to do an end l and save this off. Go ahead and open it in the Terminal. Do a clang, plus, plus, dash, std, equals, c, plus, plus, 17, and dash, W, a, l, l, and then we'll end this up with a main dot c, p, p. Hit return. Then do dot, forward slash, a, dot out. Execute the code. And we get number over 21 is five, both times. So, again, here is our std::bind, and this accepts a reference to a function
>
> **[4:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/bind?u=76281980&t=282)** and then you decide how you want to treat its arguments. In our case, we said hey we're going to pass in the first value, and the second argument, we're going to bind 21 to it. And that is std::bind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Functions](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=1)** - [Instructor] Std::function also comes from the functional header. It is a wrapper for invokable objects which includes functions, function objects, also known as functors, and lambdas. We can also store wrapped invokable objects in a vector of function objects. Let's take a look at some code to see how. Again, we're going to start off with a file that already includes our header. So we've got functional, iostream, string, and vector. We're using a namespace std. And we're going to start up here, and we need to create a few helper functions to get ourselves going. So the first one's going to be a void, and it's going to be called demoFunction. It doesn't take any parameters. And the only thing this function does is call cout, and it let's us know that demoFunction was called. And then we do an endl, and that's the end of that. The next function that we have here is we're going to say void and call this function adder. And it's going to take an int a and an int b.
>
> **[1:09](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=69)** And once again it's going to do a cout, and it's going to say Called adder comma a, comma a plus b equals. And it's going to do a plus b and then an end line. And finally, we're going to create a class and we're going to call this class functor. And in public. Let's indent that over one. It's going to have a single member function, a void operator. And it is going to be the invocation operator. And it's going to be a const. And there might be a pattern here. We're going to say cout Called functor. And do an endl here as well. Then we're going to have a main function, and let's move this up a little bit. Oh, we're missing semicolon right there. Let's put that in. And then down here we're going to say that first off we're going to create our vector. And our vector is going to be a function
>
> **[2:43](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=163)** and then the first thing that comes in the angle braces here is going to be what is the return object. So in our case, it is going to be void. So we're returning void from the functions that this takes. And we're going to call this vector of function objects, we're going to call it funcs. Then we're going to say funcs.push_back and the first thing we're going to push back is demoFunction. So we're going to add demoFunction to our vector of function objects. Then after we do that we're going to create an instance of our functor object. So let's just put a little space in there. We're say functor, and we're going to call it functor underscore instance. So this is a variable of type functor, the class that we created above. Then we're going to say funcs.push_back,
>
> **[3:52](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=232)** functor underscore instance. Then we're going to say funcs.push_back and this time what we're going to pass, is we're going to say, open and closed square braces, open and closed parentheses, then we're going to do a open and closed curly brace, and inside of there we're going to say cout and in here we're going to say Called anonymous lambda. So this is a lambda function. First time we've talked about them. And we're going to say endl semicolon. And then we have a semicolon at the end of the line. And then the final thing we're going to do is we're going to say funcs.push_back. And what we're going to push back is now we want to push back adder. But as you recall, adder is a binary function. It takes two parameters. And here our function object is a void that takes no parameters. So what we're going to do is we're going to say std::bind and what we're going to pass to it is the reference to adder. And then we're going to bind a 10 and a 15 in it. So we've changed a function that accepts two parameters into a function that accepts no parameters
>
> **[5:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functions?u=76281980&t=327)** because we've bound 10 and 15 to those parameters. And so that's all of the functions that we want to demonstrate. Now to run these, we're just going to say four. We're going to say auto. And it's going to be a reference to f:funcs. So we're just going to iterate over each of these. And we're going to say, just call f on each one. So remember now, this is a vector of function object. So each one of these Fs represents a function. So let's go ahead and save this. Go to terminal. We're going to say clang plus plus dash std equals c plus plus 17 space dash capital W-A-L-L main dot C-P-P. Go ahead and build it. And then dot forward slash a dot out. And let's open this up a little bit more so that we can see it. So we get Called demoFunction, Called functor, Called anonymous lambda. And Called adder, a plus b equals 25. Remember the numbers were 10 and 15. So this is a demonstration of using, std::function to create function objects that we can call from vectors. So we can store functions into vectors.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=1)** - [Instructor] Lambdas were introduced to the language with C++11, they are unnamed function objects which can create a closure over the invoking scope. Let's write some code to learn more about lambdas. We already have this file set up, we have some code down here inside of our main function, and this is just going to render the results once we're ready for it. We have our include and using already set up, and we're going to create an auto variable called addCurry, and we're going to set this equal to auto a, and this is going to be our lambda. And then it is going to return, and right here in our capture list, we're going to put the a, and this means that we want to be able to access a from our inner lambda, and then we're going to have a parameter list, and that's going to be b. Then b is also going to return, and what it's going to return is another lambda, and so inside of the capture list for the b, we're going to put a and b, 'cause we're want them both. Then we're going to have another auto, and that's going to be c, and it is going to return a+b+c. Now, at each level here, we have the variable from the outer scope that we want to capture, wrap a closure around, include it in the capture list. So we've got a here, we've got a, b here,
>
> **[1:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=95)** we need to put semicolons right here, and let's go ahead and comment in the code right here. Also walk through it, so the very first time we call addCurry, we pass it the value 1, and that is going to take that 1 and give us back another function. This function here is going to be, at this level, is the b value, and so we're going to say pass it a 10, and it's going to return to yet another function. We're going to call that added2 and we call added2 with 100, and at that point it has all three values. It has the a, and the b, and the c, and it's going to return to us a value. It's going to return us the value of a+b+c, and we're going to render that out right here. Now the interesting thing here is that each time we call addCurry until it gets all three of the parameters that it wants, it returns us a function, so we don't actually have to assign that function to a variable. We can just simply call the next function, so here, we call addCurry, we give it 990,000, then we give it 9,900, and then we pass it 99, and then it returns to us the value of adding these three together, which is going to be 999,999. It will render that out, so let's go ahead and build this program. Open it in Terminal, let me bring this up a little bit, so we can see a little better, so let's come down here and we do a clang++ - std=c++17 -Wall main.cpp
>
> **[3:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-curry?u=76281980&t=197)** then ./a.out and we get the results we expected. We get results 111 and 999,999 for the second one. So that is both how to execute lambdas and how to do currying with lambdas in C++.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=1)** - [Instructor] Let's do another lambda example. This time we'll create a special function, which we'll call Incrementer. So we'll come up here, above the main. We'll do auto space incrementer. And we will set this equal to lambda. And this time the lambda's not going to take any parameters. And then on the inside we'll say auto increment equal zero. Then what this function returns is another lambda. And then we want to capture increment, and once again we take no values, and now we need to use a special keyword which is called mutable. Any time you want to modify a value that's in the closure, you have to say mutable in order to be able to change it. And what we're going to do is we're going to say return increment plus plus. And then a semicolon. And we need semicolons here, and here. So we have our little function called incrementer, it is going to start off at zero, and every time you call it, it's going to increase its value by one. And so let's comment this code back in. Here we call increment the first time, and call it my increment, and then we just increment, call my increment four times and see what its value is. So we save this, we do an open in terminal, do a clang, plus plus, minus std, equals c plus plus 17,
>
> **[1:42](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/lambda-functions-closures?u=76281980&t=102)** dash capital w all, and main dot cpp. Then we call it by invoking dot forward slash a dot out. And we get the values zero, one, two, and three. So once again, what's going on here is that we have created a function, a lambda function, it has a value called increment, which is going to get captured in the closure, and every time we call, we do an increment plus plus for incrementing this value, and every time we call it, we get a new value increased by one. And that's another example lambda program.

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
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-factorial-continuous-add?u=76281980&t=6)** - [Instructor] Here's a little challenge for you. Let's create a lambda and assign it to a variable we'll call Continuous Add. The lambda takes two integer values. Initial holds the starting value, and addBy is how much we'll add to it each successive call. Each time we successively call Continuous Add, it will add addBy to initial. Give yourself a few minutes to complete this challenge.

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
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=6)** - [Instructor] My solution is somewhat similar to the incremental lambda we created earlier except it sets the initial value to the past initial argument and it adds the value of addBy instead of one each successive call. So let's take a look at it in code. Open up our main. We've already got our include file and our namespace. And right here we want to create auto space continuousAdd
>
> **[0:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=40)** and the we have an open and closed square brace. We have our parenthesis. And we have an init integer. Initial comma integer addBy
>
> **[0:57](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=57)** and then we're going to say that auto total equals initial. Now this step's probably not necessary but I like the purpose of all my variables to be very clear to me. Then we're going to say return. And then we want to capture total and addBy in our scope. Then we have take no variables here. And we're going to say that this is mutable. Because we're going to change the value of total. And then we're going to do a total plus equals addBy. And finally we'll do a return total. And then we have to add a semi colon here. And a semi colon here. Then right here we'll say that auto we'll just call the function x equals continuous add. And we'll pass in the number 1,000 and 10. So each time we call it we'll increase the value by 10 and we'll start off at 1,000. And we'll do a cout. And we'll do x call x and an endl and I'll do a cut and paste and create a few more of these.
>
> **[2:30](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-factorial-continuous-add?u=76281980&t=150)** So let's call it five times. One, two, three, four, five. And then save it. Then open this up in the terminal. And we'll do a clang plus plus dash std equals C++ 17 dash capital Wadd. And then main dot cpp, oops. That should be dash capital Wall main dot cpp. Go ahead and pilt it dot forward slash a dot out. And we get what we expected. 10, 20, 30, 40, 50. And that is my solution to the challenge.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=1)** - [Narrator] Template Metaprogramming or TMP is a form of C++ programming. TMP is a Turing complete, [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) language built-in to C++. TMP variables are always immutable. TMP doesn't have loops, so we must use recursion. TMP doesn't have branching, so we use specialization. Let's explore template metaprogramming with a couple of code examples. We have our include files, which are just iostream and vector and we're using the namespace std. So, let's first create an example function, which demonstrates how to do the same thing using [Generic Programming](../../Skills/Software%20Development/Generic%20Programming.md). So, we're going to say template, which is a keyword here. And we're going to say type name T.
>
> **[0:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=50)** Then, we're going to use our type and we're going to say our generic type and we're going to say T as the return results. We're going to do a cube function, which is just going to multiply the past value by three. And we're going to say const T reference value. Value is a primer we're passing in. And we're going to say return value times value times value. Alright, so that's an example of just regular generic programming in C++ and what's going to happen here is that this template function is going to get instantiated during compile time. So the code's going to look through here. It's going to say, oh we're calling cube with the integer eight, so type name becomes an integer and it's going to be integer T and it's going to instantiate this function, or another [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for that is create the function in runtime. And then that function is actually going to get called in runtime. Now, here is an example of a cube function. And this time we are going to use TMP. So, we're going to say template, once again same keyword, and we're going to say int toCube. And cube, toCube is just the name of our variable. And we're going to say struct. Notice that we use the struct this time. And we're going to call the function Cube and then inside of it we're going to say enum.
>
> **[2:28](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=148)** Value equals toCube times toCube times toCube.
>
> **[2:38](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=158)** Now there's now semicolon needed right here, but we do need one here and we need another one at the end of the struct. Now the difference here is that, first off, we're just going to take this value in int toCube is always going to be emutable, we can not change it. In order to return a value, there's no return statement inside of template metaprogramming. So, what we do is we created value, and by tradition it's called value, and we assign whatever we want to that value. So, we're going to say that value equals toCube times toCube times toCube. So, lets go ahead and comment these two lines back in. And save our program with the command s. And then we're going to open this in the terminal. And we're going to say clang++ dash std equals c++ 17
>
> **[3:35](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/c-plus-plus-templates?u=76281980&t=215)** dash capital W all and main dot cpp. Then dot forward slash a dot out to execute it. And we what we're expected. Eight cubed is 512 and then five cubed is 125. So, we've executed this same program using both generic programming, which is right here with the template function, and by using template metaprogramming right here. Now the difference between these two is that where as the Cube function that gets instantiated is called at runtime. The Cube function for the template metaprogramming is done at compile time. So, this cube five colon colon value, that's how we get the value out of here is by using the scope resolution argument. This value gets replace with 125 at compile time. So, this code is not executed at runtime. And that's our first example of template metaprogramming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generic Programming](../../Skills/Software%20Development/Generic%20Programming.md) (3), [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Exercise Files:** template (10)
> **Code Identifiers:** tocube (9)
> **Env Vars:** tmp (6)
> **Definitions:** is a  (4), is an  (1), is called (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Factorial](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=1)** - [Instructor] According to Wikipedia, the factorial of a non-negative number, n, is the product of all positive integers less than or equal to n. So, the factorial of five is equal to five times four times three times two times one, or 120. Let's see how to implement this using template metaprogramming. We have our include iostream, include vector, using namespace std. We have some commented out code that's going to print the results, but before we get to that let's first write a regular C++ function, and it's going to be recursive, to do factorials so we get an idea of what it looks like with something that's more familiar to us. We're going to say factorial const int input const int sum, and we're going to get sum a default value of one. So if no sum is called it has a value of one because one times anything is the number. Then we're going to say if input is greater than one
>
> **[1:03](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=63)** we're going to return, and we're going to do a recursive call. So we're going to call factorial, and we're going to say input minus one. Then we'll do sum times input. If it is not greater than one, we're just going to return sum. So that's how we implement this using regular C++. Now let's see how we do it using template metaprogramming. We start off with our keyword, template. We're going to have some angle brackets, and we're going to have an int input comma int sum, and sum we're going to give a default value of one. Then we'll do a struct, factorial, and we're going to tell this factorial that what you need to do is you need to call yourself factorial
>
> **[2:17](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=137)** and input minus one comma input times sum.
>
> **[2:29](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=149)** And then we're going to have some curly braces and a semicolon.
>
> **[2:37](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=157)** I know this looks a little crazy. But, what's going on here is that we have a template just like we had up here and this is going to take some initial parameters and it's going to have a input and a sum and we're going to give the sum a default value of one. Then factorial, only thing it's going to do is call itself with an input minus one and input times sum. So this is doing the multiplication here for us. But the problem is how does this recursion stop? Remember, template metaprogramming doesn't have branching logic. But, I did mention that what we do instead of branching is we do specialization. We're going to say template int sum, and struct factorial, and here comes our specialization.
>
> **[3:31](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=211)** We put the number one in here, and then we just say sum, and then we have our opening for our struct. We have an enum, and we say that value equals sum. That's how we get this value out of this template program, is by assigning it to values. That's just by tradition, custom, whatever you want to call it. That's the reason why we do it. So here, once again let me walk through this. Any time factorial equals one it is just going to come in here and say whatever sum is, assign it to value, and that's the end of it. The specialization always takes priority to this more generic case. So, because this has a one in here this will be invoked automatically by the compiler and that's what breaks the recursion. Let's go ahead and uncomment this. Let's save it. Let's go back to the terminal. We'll do clang++ -std=c++17 - Wall, for all the warnings,
>
> **[4:46](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/factorial?u=76281980&t=286)** main.cpp, build this. And then ./a.out, and we get the values that we expected. Using the regular C++ factorial of five is 120, then we use our template metaprogram version of it and we say that factorial of four, and we get the value 24 and the factorial of five and we get 120 again. And again, we extract the value out of the template metaprogram but we're using the scope resolution operator on the value. That's how you do a recursive factorial function in template metaprogramming.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/the-standard-template-library?u=76281980&t=1)** - [Instructor] The Standard Template Library is a subset of the C++ Standard Library. To make the library flexible and able to work with a wide variety of types, it is implemented using both template metaprogramming and [Generic Programming](../../Skills/Software%20Development/Generic%20Programming.md). The STL consists of four components, [Algorithms](../../Skills/Software%20Development/Algorithms.md), containers, functions, and iterators. Before you write a new algorithm, you should check here first to see if it already exists in the STL. One anti-pattern you should avoid in your code is raw loops. Odds are that there are already an STL algorithm which provides the same function and is more performant and more thoroughly debugged. Remember the STL is your friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generic Programming](../../Skills/Software%20Development/Generic%20Programming.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** stl (4)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Functional programming libraries](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/functional-programming-libraries?u=76281980&t=1)** - [Instructor] Loki is one of the oldest C++ metaprogramming libraries around. It was created by Andrei Alexandrescu for his book Modern C++ Design. Unfortunately, it has not had a new release since 2009. The Boost.MPL library is a header only C++ O3 base general purpose template metaprogramming framework of compile time [Algorithms](../../Skills/Software%20Development/Algorithms.md), sequences, and metafunctions. Boost.Fusion is a library for working with heterogeneous collections of data, commonly referred to as tuples. Boost.Hana calls itself your standard library for metaprogramming. It is header only and provides a super set of the features in Boost.MPL and Fusion. Boost.HigherOrderFunctions is a recent addition to the Boost family. Like Hana, it is a header only C++ 11 and 14 library that provides utility functions and function objects which can solve many problems with much simpler constructs than what's traditionally been available in metaprogramming. Keep in mind that there are a lot more libraries than the five mentioned here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (4)
> **Env Vars:** mpl (2)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Boost.Hana](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=0)** - [Instructor] Introduced in 2015, Hana is a relatively recent addition to the Boost library. It hopes to fill the shoes of the Boost.MPL and Fusion libraries by providing a superset of their functions in one library. While the STL provides homogenous collections, Hana provides support for heterogeneous collections in tuples, and it has a large number of functional methods. Let's check out Hana with a bit of code. And here I have my include files already, so I have iostream, string, boost/hana, and then I'm also setting up my namespaces and I have three types here, a truck, a car and a motorcycle. These are just three very simple types, but the thing that's important to realize about them is that they're not related to each other in any way, they don't inherit from each other or anything like that, each of these types has a name property, and one of them has a bed_length property. So, what we're going to do is we're going to put these guys in a collection, and we'll call that collection vehicles. And the way that we do that is we say hana::make_tuple, and we're going to
>
> **[1:11](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=71)** go ahead and close it off, and we'll open it up so we have some more room. And let's go ahead and close this screen here, too, and give those shells a little bit more room left and right. And we're going to call the first thing, it's going to be a truck. And it will have a name, we'll call it F-150. And then we'll say it has a bed_length, and that is just 8.5. The next item here is going to be a car. its name will be Volt. And the final item will be a motorcycle, and its name will be Ninja. So now we have a collection of heterogeneous items, next we're going to create a function. And this is going to be auto has_bed_length. And we're going to make this be a hana::is_valid.
>
> **[2:13](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=133)** Let's also open this up. And in here is going to go a lambda. Inside the lambda is going to be an auto, reference reference x. And it's going to return a decltype, and that decltype is going to be determined based on whether or not it finds this property. So it's going to say x.bed_length. Then the actual body of the lambda is empty. Then we just close off that function. Next we're going to get a collection of just trucks. So we're going to say auto trucks, and let's make that lower case. Trucks = hana. And the way that we're going to do this is we're going to filter through our vehicles, and we're going to see which vehicles have a bed_length. If they have a bed_length, we're going to assume they're a truck, and it's going to be part of the trucks collection. Next we're going to just do auto vehicles, or not vehicles, auto nontrucks and that's going to be hana::filter again. We're also going to pass to it the vehicles collection. And this time we're going to do a little functional composition, so we're going to say hana::[compose](../../Glossary/Framework/Jetpack%20Compose.md). Hana::compose takes two or more functions and makes them one function.
>
> **[3:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=225)** And so that the way that it does that is we pass it which functions we want to compose together, so the first one's going to be hana::not_, and it ends with an underscore. And then the second function is going to be has_bed_length. And what's going on here is hana compose goes through this from right to left, and so it's going to take the has_bed_length function, it's going to execute it, then it's going to call hana::not_, which is going to take, if this was true it's going to make it false, if this was false, it's going to make it true. Because what we want is we want all the vehicles that don't have a bed_length. Once we've done that, let's go up a little bit, let's go ahead and uncomment the rendering code. All right. So what we have here is two methods, one method's going to render out all the trucks and the second method's going to render out all the nontrucks. And for the trucks, it's also going to display its bed_length. Let's save this. Let us open this in the terminal. Let's do a clang++ -std=c++17
>
> **[5:08](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=308)** - Wall main.cpp, and ./a.out.
>
> **[5:16](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/boost-hana?u=76281980&t=316)** And we get our, here's our one truck, and here are two nontrucks, and both of the names displayed. And that's just a small sample of the functional power that's built into the Hana Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (4)
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
> **[0:07](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-fibonacci-generator?u=76281980&t=7)** - [Instructor] Are you up to test your skills with a little challenge? Use template metaprogramming to create a function to generate the Fibonacci series. The series begins with zero, one, one, two. The next number in the series is the sum of the last two. You'll want specializations for the numbers zero and one. Give yourself five or 10 minutes to complete this challenge.

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
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=6)** - [Instructor] So, how did you do with challenge? Hopefully, it went well for you. Let's take a look at my solution. The code for this is very similar to that of the factorial program. We need to create two template specializations. One for zero and one for one, and the base case is going to recursively call itself. So, let's take a look at it in code. So here, I have my include file and my namespace set up. I have some code out here to render everything, and let's go ahead and write the code, and we're going to start off with our keyword template, and we're going to say int n, then, we're going to have a struct and this is going to be called fibonacci. Then, inside of here, we'll have our enum, and a value and it's going to be equal to fibonacci
>
> **[1:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=66)** and n - 1, and then, use the scope resolution on the value and it's + fibonacci n - 2, and once again, with the value, then, we need a semicolon and another semicolon. Now, let's do the first of our specializations, and so, our keyword template again, the angle brackets are going to be empty this time.
>
> **[1:45](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=105)** Then, we do struct fibonacci
>
> **[1:54](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=114)** and our specialization, zero, then enum value, for this is also going to be zero, and then, semicolon, semicolon, and then, our final specialization, template, with empty angle brackets. Then, struct fibonacci. This time it's for one, and our enum value equals one as well, and put those semicolons in there, and then, let's go to our main function, and let's uncomment these. These are just going to render out the values of the series, and let's save it and so let's go ahead and go to Terminal and build this. So, clang++ -std=c++17
>
> **[3:12](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-fibonacci-generator?u=76281980&t=192)** - capital W all main.cpp and ./a.out and there we have our fibonacci series. We're going to start off and we have fib of zero, zero. We know that the next numbers are one, one, two, and three. I know that 11 is 89 and 12 is 144, and 45 is a big number. That is my solution to the fibonacci generator using template meta programming.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/intro-to-reactive-extensions?u=76281980&t=1)** - [Narrator] ReactiveX combines the best parts of the Observer and Iterator patterns and [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md). It abstracts away dirty details and leaves fewer lines of more powerful code. It has been ported to every major programming language, including C++, and is used in production by many top tech firms. ReactiveX is everywhere. It is running in the front end, back end, mobile, and desktop apps. The four main components of ReactiveX are observables, which are composable streams of events; observers are those interested in those events; operators, which are functions that manipulate observables; and schedulers that execute actions associated with operators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1)
> **Speakers:** - [narrator] (1)

#### [RxCpp library](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=1)** - [Instructor] The RxCpp library is the C++ implementation of ReactiveX. It supports both a chaining and pipe interface, though I find the chaining easier to work with. It can convert STL containers like list invectors to observables. You'll want to clone the RxCpp repo from [GitHub](../../Skills/Software%20Development/GitHub.md), and put the header files where your code can find them. Now it's time to check out ReactiveX using the RxCpp library. Here I just have my include file for RxCpp. I also have some name spaces already set up. To just make things easier for me. And I have an include for iostream. Then here I have a vector of int which represents let's just say it's the ages our customers. What we want to know, is we want to know how many of our customers are over the age of 21. So what we're going to do here, is we're going to say auto, values, and it is going to be equal to RxCpp colon colon observables, and what we're going to do here is, we're going to convert this vector of int into an observable. We're going to iterate, iterate, over ages and then we're going to use the chaining interface. So we're going to put a period at the end of the sentence.
>
> **[1:40](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=100)** Next, we're going to say filter, and the filter method is going to take our good friend the lambda. And so we're just going to have open and close square brackets, we're going to have an int age, and then inside of the curly braces, we're going to say, return, age, greater than or equal to 21, semi-colon. And then at the end of this we're also going to have a period, because again this is the chaining interface. Some languages will call this a fluent interface. Then we're going to do a count. So here the observable's going to send us each one of these numbers. All the way from the beginning to the end of this vector of int. The filter is going to go through and it's only going to let the ones over 21 pass. Then count is going to say well how many that there are. Then finally we get to the subscribe.
>
> **[2:50](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=170)** Then subscribe is going to take two methods. The first method is for each time you get an event fired this is going to be the one that handles it. So this is kind of like when you do an iteration and you get an on next. Well this is the thing that handles the on next, and in this case it's only going to give us, come here once cause it's going to tell us how many items that there actually are. So we're going to call that count, and we're going to just do std::cout. And we'll say that this is the number over 21, equals, and that's just going to be count. Then we'll do an std::endl. And a semi-colon. Then a comma. The second of these lambdas that we pass in, this is the one that when a observable is complete, it will send an on complete message. So it doesn't pass anything else and we're going to say std::cout. And that we've received the on completed. Then std endl. Now we save that. And we go into the terminal. Clang++-std
>
> **[4:24](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=264)** =c++ 17
>
> **[4:27](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/rxcpp-library?u=76281980&t=267)** - Capital W all main.cpp and then we do ./a.out. And we can see that it's telling us that hey the number over 21 is five. If we do a quick scan through there we can see one, two, three, four, five numbers that are over 21. So that is correct. Notice that we get the on completed after all of the numbers come through. Now that's the basic way that observable works. Once the observable is finished, it's going to send you on complete. Or if there's an error along the way you'll get an on error. That is our first look at reactive programming with RxCpp, which is the C++ version of ReactiveX.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
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
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/challenge-word-frequency-counter?u=76281980&t=6)** - [Instructor] Let's revisit the RxCpp example code. Change the filter of the ages to be from 13 to 19 inclusive, and render each valid age to the output instead of a count. Give yourself a few minutes to complete this challenge. Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno sound effects) (1)

#### [Solution: Word frequency counter](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=0)** (intro music)
>
> **[0:06](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=6)** - [Instructor] How did you do with the challenge? Hopefully, everything went well. Let me share my solution to this challenge with you. So, basically there are three steps. We modify the filter operator, we remove the count operator, and then we update the output. And let's go ahead and start from scratch again, and let me show you what I did. So, here we are back in Visual Studio Code, and what we're going to do, let's just redo what we did previously. So, we're going to go ahead and say, auto values equals rxcpp colon colon observable
>
> **[0:51](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=51)** and then we have iterate(ages).
>
> **[1:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=61)** Then, we have a dot to chain this together. Then, we're going to say filter and we take a lambda again, and then the lambda is going to get passed in age, and that's going to be an integer. And we're going to say return age, greater than or equal to 13 and age less than or equal to 19, and a semicolon. And then, we have another period here to chain it together. Then, we're going to do our subscribe. Notice, we did not do a count at all. We don't need the count this time. We just want to see each age that's between 13 and 19. Then, we're going to have our first lambda and it's going to take an int age. And inside of it, it's going to do and std cout age and then std endl, then a semicolon and a comma. Open and close square bracket, open and close parentheses. And on the next one, we're just going to do the std cout.
>
> **[2:39](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=159)** OnCompleted. Std colon colon endl semicolon then we're going to go ahead and save this with the Command+S. Go to terminal. Clang++ -std=c++17 -Wall main.cpp.
>
> **[3:10](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/solution-word-frequency-counter?u=76281980&t=190)** Then we do a ./a.out. And we get the numbers 13, 19, 15, and 19. These are all the ages that are between 13 and 19 inclusive. And that is the solution to the challenge.

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
> **[0:01](https://www.linkedin.com/learning/introducing-functional-programming-in-c-plus-plus/next-steps-2?u=76281980&t=1)** - [Instructor] Thank you for viewing this course. Using [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) techniques has helped me make my code more solid and hopefully they will help yours as well. Template metaprogramming is one of the most challenging aspects of C++ programming. It is the thing that separates those who write powerful libraries from those who use them. If you'd like to continue your journey, check out the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course on the C++ Standard Template Library. Be sure to learn more about Boost.Hana and RxCpp at their websites. And finally, read the book Modern C++ Design by Andrei Alexandrescu. I hope I pronounced that right. Have fun and keep on coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Troy Miles](../../Instructors/Software%20Development/Troy%20Miles.md)

## Resources

- Exercise files available

## Skills Covered

- Functional Programming
- C++

## Path Context

### In [Getting Started with C++](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20C%2B%2B.md)
← [Complete Guide To C Plus Plus Programming Foundations](Complete%20Guide%20To%20C%20Plus%20Plus%20Programming%20Foundations.md) | **2 of 5** | [Learning C++](Learning%20C%2B%2B.md) →

## Appears In

- [Getting Started with C++](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20C%2B%2B.md)

## Related Courses

_Courses sharing skills:_

- [Nail Your C++ Interview](Nail%20Your%20C%2B%2B%20Interview.md) — C++
- [Web Servers and APIs using C++](Web%20Servers%20and%20APIs%20using%20C%2B%2B.md) — C++
- [Learning C++](Learning%20C%2B%2B.md) — C++
- [C++ Design Patterns- Structural](../Data%20Science/C%2B%2B%20Design%20Patterns-%20Structural.md) — C++
- [C Plus Plus Essential Training](../Data%20Science/C%20Plus%20Plus%20Essential%20Training.md) — C++

---

[↑ Back to top](#)