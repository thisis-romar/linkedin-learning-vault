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
created: 2026-05-03
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
  - [About this course](#about-this-course)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Operator Overloads**](#1-operator-overloads) (5 videos)
  - [Operator overloads](#operator-overloads)
  - [Nonmember operators](#nonmember-operators)
  - [Conversion operators](#conversion-operators)
  - [Increment and decrement operators](#increment-and-decrement-operators)
  - [Functors](#functors)
- [**2. Move Semantics**](#2-move-semantics) (7 videos)
  - [What is move semantics?](#what-is-move-semantics)
  - [Understanding lvalues and rvalues](#understanding-lvalues-and-rvalues)
  - [Using std::move](#using-stdmove)
  - [The move constructor](#the-move-constructor)
  - [The move assignment operator](#the-move-assignment-operator)
  - [The copy-and-swap idiom](#the-copy-and-swap-idiom)
  - [Rule of three and five](#rule-of-three-and-five)
- [**3. Lambda Expressions**](#3-lambda-expressions) (4 videos)
  - [Lambda syntax](#lambda-syntax)
  - [Closures](#closures)
  - [Algorithm predicates](#algorithm-predicates)
  - [Challenge: A Lambda jump table](#challenge-a-lambda-jump-table)
- [**4. Constraints and Concepts**](#4-constraints-and-concepts) (3 videos)
  - [Why constraints?](#why-constraints)
  - [Constraint syntax](#constraint-syntax)
  - [Defining concepts](#defining-concepts)
- [**5. Optionals and Variants**](#5-optionals-and-variants) (3 videos)
  - [The optional class](#the-optional-class)
  - [The any class](#the-any-class)
  - [The variant class](#the-variant-class)
- [**6. Concurrency**](#6-concurrency) (6 videos)
  - [Sleeping](#sleeping)
  - [Threads](#threads)
  - [The async function](#the-async-function)
  - [Mutex and lock](#mutex-and-lock)
  - [Atomic variables](#atomic-variables)
  - [The producer-consumer idiom](#the-producer-consumer-idiom)
- [**7. Other Subjects**](#7-other-subjects) (5 videos)
  - [Initialization](#initialization)
  - [Structured bindings](#structured-bindings)
  - [Random number engines](#random-number-engines)
  - [The chrono library](#the-chrono-library)
  - [The filesystem library](#the-filesystem-library)
- [**8. Other C++20 New Features**](#8-other-c20-new-features) (4 videos)
  - [The format library](#the-format-library)
  - [The spaceship operator](#the-spaceship-operator)
  - [Integer comparisons](#integer-comparisons)
  - [The span class](#the-span-class)
- [**Final Project and Conclusion**](#final-project-and-conclusion) (2 videos)
  - [Final project: Numword](#final-project-numword)
  - [Thank you](#thank-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [About this course](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/about-this-course-18745415?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman and welcome to C++ Advanced Topics. The goal of this course is to provide you with a deeper understanding of C++. We'll start with a thorough discussion of operator overloads. We'll cover move semantics and lambda expressions. I'll cover the new constraints and concepts feature from C++ 20. Options and variants provide valuable alternatives to conventional objects and variables. We'll cover concurrency with threads a-sync and Mutex classes. Many powerful features have been added to C++ in recent years, including structured bindings the format library, and the default comparison operator. C++ is a rich and powerful language and your C++ projects will benefit from a deeper understanding of its intricacies. So let's get started with C++ Advanced Topics.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [bill] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership. Copy the exercise files folder to a location where you can find it on your system. I've copied it to the desktop on this system. Wherever you put it, just make sure you can find it. The exercise files are organized into chapters which correspond with the chapters of the lesson videos. Each of the chapters contain C++ files for following along with the exercises in that chapter. The exercise files are compatible with any modern C++ development environment, including [[Xcode]], [[Microsoft]] Visual Studio, GCC, Clang, or any modern compiler or integrated development environment that supports the C++20 standard. This is working.cpp from chapter one of the exercise files. At the top of each file I've included a format style print function. This uses the new formatter introduced with C++20. A function like this will be included with C++23. As you can see here in main, it's much cleaner and more efficient than using format with c:out. We'll discuss the C++20 formatter later in this course. Meanwhile, we'll use this function throughout this course. To learn how to set up a development environment on your workstation, please see my YouTube channel, [youtube.com/bwineman](https://youtube.com/bwineman).
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-the-exercise-files-18746379?u=76281980&t=94)** The exercise files are here to make your learning experience easier and more powerful. Take your time, experiment a lot, and happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1), [[Microsoft]] (1)
> **Exercise Files:** exercise files (6)
> **CLI Commands:** find (2), make (2)
> **File Paths:** working.cpp (1)
> **URLs:** [youtube.com](https://youtube.com) (1)
> **Env Vars:** gcc (1)
> **Cross-References:** later in (1)
> **Tools:** visual studio (1)


### 1. Operator Overloads

[↑ Back to Table of Contents](#table-of-contents)

#### [Operator overloads](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=0)** - [Instructor] Operator overloads provide the ability to use common operators with user-defined classes and objects. This feature is not unique to C++. In fact, it was one of the original concepts borrowed from ALGOL for C++. But how C++ does it is somewhat unique and extremely powerful. There are two distinct ways to overload operators in C++ with member functions as part of a class definition or as separate non-member functions. In this video, we'll discuss member operator functions in your class definitions. We'll discuss the non-member operator functions in the next video. This is rational dot cpp from chapter one of the exercise files. You see we're including the format library and the string library from the stl. We're using the string symbol, importing it into our own name space. And we have our format style print function that we're using throughout this course. We have a constant string for not a number, NAN. And we have our Rational class. This is a class that performs four function arithmetic on rational numbers as fractions. We have two data members, enumerator and a denominator. And we have a couple of constructors. Let's take a look at this constructor signature here. You notice that we have default values for the numerator and the denominator.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=94)** This allows this constructor to operate as an implicitly converting constructor. And that's a detail that'll come up later in this chapter. We also have this copy constructor and some utility functions. And down here, we have our operator overloads. An operator overload is constructed by using the operator keyword as part of the name of the function and the operator itself. And so operator equals is the assignment operator. And then we have the four arithmetic operators: plus, minus, times and divide. And we're going to skip down here a little bit. We have these utility functions. This one reduces a fraction to its lowest common denominator. And this one prints out a string of a representation of the fraction with an integer part if the numerator is greater than the denominator and a fractional part that's been reduced by the reduce function. And we also have a raw string function for printing out just the numerator and denominator as stored. So this is raw. And then we have our copy operator. And so this operator, of course, uses the equal sign. You'll notice that. And so because this is an external definition of the function, it needs to be in the scope of the class itself. And so this puts it in that scope. You'll notice also the use of the this keyword.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=189)** And this is a keyword. It's not a variable. This always represents a pointer to the current object. And so when this class is instantiated as an object, this will contain the address or the pointer to that object. And we can compare it with the right hand side. Because we have a reference to the right hand side, we can use the address of operator to get the address of the right hand side, and we can compare them to see if they're the same object. And if they are the same object, then obviously, we don't need to copy anything over. And we just return, again, we're returning a reference to the current object. And so we do this by de referencing the pointer. And that gives us the object itself. And we can return a reference to that object with the reference operator. The point of all of that is that this allows us to chain assignment operations. And so we can say x equals y equals z, which is required by the C++ standard. So assignment operators will usually look very much like this. And then we have our four arithmetic operators. We have addition, subtraction, multiplication, division. And each of these simply uses the formula that we learned in high school for performing these operations on fractions. Our destructor doesn't really need to do anything, because we're not allocating any memory, and so I'm just resetting the values. And even that is probably pointless in a destructor,
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=282)** but it's just there. We have a formatter specialization that allows us to print using the print function, which uses the format library. And it allows us to print our object. And we're simply using the str function from the object itself, which prints out a representation of the fraction with an integer part and a fractional part and properly reduced. And we'll talk more about the formatter specialization later in this course when we talk about the format library. And then here in main, we test it out. I'm going to go ahead, and I'm going to build and run this. And you can see what it does. Here we construct it with a simple integer,. Of course, because we have that default constructor, the implicitly converting constructor, this gives us 7 over 1, because the denominator defaults to 1. Here we have 25 over 15, which is equivalent to 5 1/3. We use a copy constructor. We use a default constructor to construct an empty one. And so we see down here that d equals 0 over 1, which is the default values. And an assignment operator, we use a reference, and so this line down here assigns to self. And you know, of course, that tests out our assignment operator not actually assigning anything when it's the same object. And then down here we do our arithmetic. And so if we look at our results, we see that 25 over 15 is equal to 1 2/3.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/operator-overloads-18749200?u=76281980&t=379)** And so the str function which is used by the formatter specialization, it prints out 1 2/3. And if we come down here, and we do our arithmetic, you notice how simple it is to simply say, a plus b, a minus b. And this is because of our formatter specialization and our operator overloads working together. And we get these results. A plus b equals 8 and 2/3, so that's 7 plus 1 2/3, right? A minus b, a times b and a divided by b. Operator overloading is a fundamental part of C++. It's as easy to do as defining a class method. We'll look at non-member functions for operator overloads in the next lesson.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), later in (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** algol (1), nan (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Nonmember operators](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=0)** - [Instructor] In our last video, we discussed operator overloads with member functions. In this video, we'll look at why and how you may sometimes use non-member functions for operator overloads. This is Rational.cpp from chapter one of the exercise files. In the previous video, we overloaded the four basic arithmetic operators with member functions and we can see their signatures right here and we can see their implementation down here. There's an important circumstance where this just doesn't work. So let's take a look at that and come down here to our main, and we're going to add a line. We'll say print B plus 14 equals, and we'll say B plus 14. And I'll go ahead and I'll run this and you'll see that this works as expected. We got B plus 14 equals 15 and two thirds, and B, of course, is one and two thirds. So we're getting the result that we want. Why does this work? Because here we're adding a rational and we're adding an integer to the rational. So how is it that that's actually working? Well, if we come up here to our implementation, you'll notice that the right hand side is a rational number. And so, what happens is the compiler sees B plus 14. And so it first looks
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=93)** at the B and it says, oh, that's a rational number. Do I have an overload for adding something to the rational number? And it does, and it has this the right hand side though is rational. And so it says, okay, can I promote this value this integer to a rational? And of course, it can. And the reason that it can is here in this rational constructor where the first argument is an integer, the second argument is an integer but they have default values. So it'll take one integer number and it'll implicitly convert that into a rational number with that integer, with a zero denominator. And so here, that gets promoted to a rational object and a temporary object is created and that's used. And so this right hand side is now rational object. So let's take a look at that in action. We'll come in here and we'll put it in a little print statement and we'll say print operator plus. And the right hand side is that, and we'll say righthandside.rawstring, all right? And now when I run this for our addition here, well every time we have an addition here we have where the right hand side is B, which is 25 over 15. And here we have our last one, the one with the integer here, 14. And it says, our right hand side is 14 over one. And so it's implicitly converted
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=186)** that integer to a rational number. Now, let's turn it around and see what happens. I come in here and I say 14 plus B and I'll just copy that and I'll paste that in over here. And you'll notice that we immediately get this error. It says invalid operands to binary expression. So the binary expression, of course, is the addition. And you notice that's underlined with little red underline there, and it has the two types, int on the left and rational on the right. And here we have an integer on the left and we have a rational on the right. And so the compiler looks at this and it looks at the 14, and it says, okay, this is an integer. Do I have addition operator for an integer? And it says, yes, I do. And it does not have one for an integer on the left and a rational number on the right. And that's why this is not working. Okay, now, how do we make this work? Well, the way we make this work what we need is we need an operator plus with two operands instead of an operator plus, which is one operand. That's part of the class definition here as this one is. And so, we're going to change this and make this a non-member operator which will have operands on both sides. So the first thing I need to do is I need to come up here into our class definition, and I need to get rid of that. So I'm just going to comment that out for now.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=281)** We now no longer have a plus operator in this class definition. And down here you'll notice the compiler is complaining that it doesn't match any declaration in the rational class. And so let's take it out of the rational scope. Now we have rational operator plus and we can give it two operands. So we can say left hand side and right hand side. And this constant no longer applies because it's not part of a class definition anymore. And now we have two operands And so here I can just say adding and we'll just give it the two sides, right? This is just for display purposes and I have this right hand side here. And so I can just make this one left hand side and now it'll print out, it'll say, it'll show us our two operands, left hand side and the right hand side. Now, we need to deal with all of this. When it was a member function we could just refer to our private member data. And the N is the numerator up here in our private member data but we can't use that like that anymore. But you'll notice, I'm sorry for all the scrolling here. You notice that we have numerator and denominator, getters functions that will return those values and this is convenient for this purpose. So now here instead of this end I say lefthandside.numerator, right? And for this right hand side
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=375)** I have to say denominator instead of the D. And I have lefthandside.denominator and righthandside.numerator, and again lefthandside.denominator and righthandside.enumerator. And so we're using exactly the same formula but now we're kind of spelling out exactly what we're doing but it's exactly the same formula. So now it should work. Now, when the compiler sees that integer on the left and the rational on the right, it'll look and it'll see if it's got some function that will work with both of those. And this becomes now a non-member operator overload. And you notice our error has gone down here. I'm going to compile and run this, and you see that we now have the result that we want. Our non-member operator is being called for both of these. So we have adding 25/15 plus 14/1 and 14/1 plus 25/15. Again, it's promoting our integer implicitly promoting it to a rational number and it's giving us the result that we want. So there are circumstances where you'll want to use non-number functions for your operator overloads and C++ supports as well. As a rule of thumb, whenever you have a constructor that allows implicit conversions like this one does, you'll want to think about non-number overload functions. These functions, of course,
>
> **[7:47](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/nonmember-operators-18746375?u=76281980&t=467)** still go in your implementation file.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is an  (3), is a  (1)
> **Cross-References:** we discussed (1), previous video (1)
> **File Paths:** rational.cpp (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Conversion operators](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=0)** - [Instructor] The conversion operator is somewhat of a special case, sometimes called a conversion function. You can think of this as overloading a cast operator for casting your class to another type. Let's take a look at an example. This is rational2.cpp from chapter one of the exercise files, and you'll notice that I've included the string class. I'm using STL strings throughout this course. And you'll also notice that this version of the rational class, I've taken all of the operators, and I've implemented them as non-member functions so they work with implicit conversions. See the video Non-member Operators earlier in this chapter for more explanation. So what happens if we want to use our class with an STL string? I'm going to come down here into main, and we'll declare a string, and I'll give it a value here. I'll say "Rational is" with a space. And then I'm going to concatenate a rational number. And so I'll say s += a. What we want this to do is we want this to take the string representation of a and concatenate it to the end of our STL string so it says, "Rational is," or whatever it is. I believe that's 1 1/3 for the value of a. And you'll notice that we get this error. No viable overload +=. And that's because we have a string object on the left-hand side and a rational object on the right-hand side
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=93)** of our plus-equal operator, and there is no overload for that. So we solve this by adding a conversion operator to our class for a string value. And that'll allow the rational object to operate as if it were a string, and to return a viable string value that can be concatenated to our string object. So I'm going to come back up here into our class. And this is actually extremely simple to do. All I do is I come up here and I say, operator string return str like that. And now we come back down into our main. You'll notice that our error has gone away, and I can come out and I can print our string. Or, why don't I give it a new line? I'll just say like that. And when I build and run this, you'll notice that our string says, "Rational is 1 1/3," just as we expected. And how's it happening? We have the string s, "Rational is." And we can concatenate the rational value, but because this expression is expecting a string, the compiler looks for a string conversion operator. And this works as expected. This works anywhere a conversion can happen.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/conversion-operators-18745400?u=76281980&t=187)** For example, I can come up here and I can create a function that expects a string, and I can print the string. Give it a capital T for consistency there. And down here, instead of all of this, I can simply call p a like that. And when I build and run, notice it says, "The string is." So what's happening is that the a, our rational object, a, is being passed to this function, and it sees that it requires an s. And so it says, "Okay, do we have a conversion operator for that?" And it converts it to the string, and then it prints the string. So just a little extra little detail here. Where it says operator string, we can actually say auto. And we can use the auto type for this. And because it's returning a string object, it knows at compile time it will create a string conversion operator. And I can build and run this, and you'll see that it works exactly as we expect. The conversion operator overload is a common and useful technique that allows you to use your class as a first-class type, fully controlling how it is cast to other types.

> [!info]- Semantic Content
>
> **Env Vars:** stl (3)
> **File Paths:** rational2.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Increment and decrement operators](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=0)** - [Instructor] The unary increment and decrement operators are special cases with a few interesting twists. This is increment decrement dot cpp from chapter one of the exercise files, spelled thusly, incr-decr.cpp. And here we have a class that's just a simple wrapper class that implements the increment and decrement operator so you can see how they work. We're simply wrapping this integer value in this class. We have getValue, setValue. We have a conversion operator to convert it to an int if we need that. And then we have the four operators that we're working with here. Two increment operators and two decrement operators. And you notice that we have operator++ twice and operator-- twice. And the reason for this is that each of these increment and decrement operators has both prefix and postfix versions. So there's prefix and postfix increment and prefix and postfix decrement. So that makes four operators in total. How does the compiler tell the difference from prefix and postfix? The prefix looks just like that and the postfix has the keyword int in the parameter parentheses. And this is not because it's passed a parameter, and it's not because our class is wrapping around an integer value. The int is used in all cases and it's just there as a little hack to tell the compiler that this is the postfix version
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=96)** of the increment operator. And the same with the decrement operator. So here's how the actual code looks for our increment and decrement operators. It's very simple. We have a little print statement to show which operator we're using. Obviously, in production we would not include that. All we do is we increment the value and we return a reference to the object with this keyword. That's pre-increment. Post-increment is slightly more complicated, not much. First we take a copy of our object, then we increment the value and then we return the copy that we took before the increment. And this allows us to increment after the fact, after we return the value. So, not actually incrementing after the return coz obviously we can't do that so what we do is we save this copy, we do the increment and then we return the saved copy that we had saved before the increment. Same thing in the decrement. Exactly the same code except we're decrementing instead of incrementing. We have a little formatter specialization. You'll notice that we use our getValue member function. And then here in main, we print a value, we increment it, and then we print a value. And so, I'm going to go ahead and run this. And you'll see that it says the value's 42. We initialized our object with the value 42, and then we increment
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/increment-and-decrement-operators-18751136?u=76281980&t=190)** and we see it says pre-increment value's 43. That's because we put the ++ in the prefix position before the object. And then you notice that afterwards the value is still 43. If I move this ++ to the postfix position and run this again, you see that post-increment, our value is 42. And then the next time we look at the object, it is 43. And the same is true, obviously for decrement. We have the prefix decrement where it decrements right away, and we have the postfix decrement where it decrements effectively after the statement. It's worth understanding the increment and decrement operators, even if it's just to know that the postfix versions are a bit more expensive than the prefix versions. And this is why many of us prefer the prefix operators in cases where it otherwise doesn't matter.

> [!info]- Semantic Content
>
> **Code Identifiers:** getvalue (2), setvalue (1)
> **File Paths:** incr-decr.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Functors](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=0)** - By overloading the function operator you can create an object that operates as if it were a function. This pattern is often called a funktor. This can be a handy technique for circumstances where you need to keep state or other context information with your function calls. This is funktor dot CPP from chapter one of the exercise files. And you'll see down here we have a class called multiply by or Multiby. We have a multiplier as a data member. We have a constructor where we can assign it a multiplier and then we have the operator overload. And you'll notice we're using the operator keyword just like with any operator overload. But the operator that we're overloading is the function call operator and we have defined it with one parameter. So we pass our functor one parameter and we return the product of our multiplier and the number that we're passing to the function call operator. Very simple. Now we declare three objects of type multiply. We have one called times four that's initialized with a value of four. We have times 10 and times 15, and then we call them and we're multiplying each of them by five and 15. And we go ahead and we run this and we see that we have the results that we expect. Five times four is 20 15 times four is 60, and et cetera, et cetera. Now there's another common approach to the same problem
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/functors-18747300?u=76281980&t=94)** and this is using an Lambda expression. Lambda expressions were introduced with C plus plus 11. They become very common for this purpose. Obviously before Lambdas, we used funktors a lot more but now we seem to use Lambdas a lot more. And this is what this looks like. I'm going to go ahead and I'm going to comment out this, this one here. Actually, I'm going to use the comment function on my IDE which I'll put the comment there, and I'll declare a Lambda const auto, we'll call it times 15. And this is what a Lambda looks like. We'll cover Lambdas in a lot more detail later on in this course. And a, we have a chapter for Lambdas. So this is our Times 15 Lambda. And it looks like that. And it works exactly the same. If you'll notice our, our Times 15 results are 75 and 225. And I go ahead and I run this and you see that we get exactly the same results. For many use cases Lambda are simpler and more straightforward and you'll see them a lot and we'll cover them in detail later in this course. The function operators a handy way to create an object that works like a function yet has the ability to keep state and other information between function calls.

> [!info]- Semantic Content
>
> **Env Vars:** cpp (1), ide (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - by (1)


### 2. Move Semantics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is move semantics?](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=0)** - [Instructor] Move semantics represents an important and valuable addition to the C++ language. Move semantics was added to the language with the C++11 standard. To illustrate the need for move semantics, let's consider an example without move semantics. This is a function that takes an object of type T and returns an object of the same type. This function uses Call by Value, which means that when the function is called, an object is constructed for use by the function. This object has the scope of the function, so it's considered temporary. Because the function also returns by value, another new object is constructed for the return value. At this point, two new objects have been constructed, one of them is a temporary object that's only used for the duration of the function. When the new object is created for the return value, the copy constructor is called to copy the contents of the return object to the new object, b. After the function completes, the temporary object used in the function goes out of scope and is destroyed. Let's consider what a copy constructor does. It must first initialize the object, then copy the relevant data from the old object to the new object. Depending on the class, perhaps it's a container with a lot of data, this could represent a substantial amount of time and memory usage. With move semantics, it's now possible to mitigate most of this work by simply moving the data rather than copying it.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/what-is-move-semantics-18748264?u=76281980&t=96)** Moving the data simply involves reassociating the data with the new object, no copy takes place at all. This is accomplished with something called an Rvalue reference. A traditional C++ reference type is now called an Lvalue reference in order to distinguish it from the new Rvalue reference type. An Rvalue reference works very much like an Lvalue reference with one important distinction. An Rvalue reference can be moved, an Lvalue reference cannot. Move semantics creates a number of significant opportunities for improvements in both efficiency and memory usage. In the next video, we'll look at how this powerful new language feature works.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (2), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Understanding lvalues and rvalues](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=0)** - [Instructor] In order to fully understand move semantics, you'll need to understand the concepts of Lvalues and Rvalues. For example, here we have an assignment expression. In simple terms, any expression that can appear on the left-hand side of an assignment is an lvalue. Likewise, an expression that can only appear on the right-hand side of an assignment is an rvalue. Notice the distinction. An lvalue can appear on the left side of an assignment may also appear on the right side but it's still an lvalue, because it would be legal for it to appear on the left. The rvalue gets its name because it can only appear on the right side of an assignment. Essentially, the l stands for left, and the r stands for right. This is the traditional definition, but it's necessary to refine it a bit in order to support move semantics. The most important distinction here is that an rvalue can be moved. So, how exactly can you tell if it's an rvalue? A temporary value that's ready to expire is also called an x value or an expiring value. Typically, this is a nameless value like the result of an expression. A literal value is sometimes called a pure rvalue or a prvalue. Typically, this category includes literal values and anything returned from a function that is not a reference. A prvalue can be moved. The null exception is a literal C-string. A literal C-string cannot be moved.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/understanding-lvalues-and-rvalues-18748266?u=76281980&t=94)** Any movable object may be cast to a prvalue with the standard move function. In the [[Representational State Transfer (REST)|rest]] of this chapter, we'll explore some examples of move semantics in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is an  (2), stands for (2), is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using std::move](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=0)** - [Instructor] The C++ Standard Library provides a template function called move, which tells the compiler to treat an object as a movable R value. While standard move looks like a function call, it actually works more like a typecast. This is vectortest.cpp from chapter two of the exercise files. Let's take a look at how a move operation works in practice. The standard move utility function is in the utility header. We have this convenient function disp_v. This is simply for displaying the contents of a vector, and we'll talk about this swap function in a minute. First, let's get down here to main. And we see we have two vectors of string. That's the STL string class, and they have the content one, two, three, four, five, and six, seven, eight, nine, 10. I'm want to go ahead and build and run this. We're displaying them with the disp_v function. And when I run it, you see we have v1 is one, two, three, four, five, and v2 is six, seven, eight, nine, and 10. Now, I can copy the contents of v1 into v2. I can say v2 equals v1. And that treats this equal sign as a copy assignment operator. And that's v2's, copy assignment operator. And so that tells the object v2 to copy the contents from v1 and put them in its own contents. And so when I run this, now you see that both of the vectors
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=95)** have the same content. And it's the content that was originally in v1. And let's just go ahead and copy these up ahead here so we can see the before and after. Because what we're going to do now is we're going to move the contents from v1 into v2, rather than copying. So I'm going to say standard move. And I'll put parentheses around the v1 there. And what this does is it tells the v2 copy operator to treat v1 as a movable R value. And so instead of copying, it's simply going to move using the move semantics. It's going to move the contents of v1 into v2, and leave v1 empty. And so we'll go ahead and we'll run this. And you see that we have before the move, we have v1 and v2. And after the move, v1 is empty and v2 has the contents that were in v1. So the contents of v1 were moved to v2, not copied. This saves all the overhead of copying, and it destroys whatever content was in v2 before the move and replaces it with the contents of v1. And it makes sure that v1 is in a valid empty state. But all of this happens with a lot less overhead, and a lot quicker than with a copy. Move can also be used to create a swap function. And here, here we have a swap function. There's also a swap function in the utility header. And we'll get to that in a moment. This is the swap function in our own name space scope.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/using-std-move-18745409?u=76281980&t=189)** And so it has two columns without a name space. And so I would say it like this. Swap v1 and v2. And I don't need the assignment anymore. And so this will swap these two objects that are passed to it. And the way it works is it creates a temporary object of the same type. So we have the type T from the template. It creates a temporary object, and initializes it with a move from one of the two objects. And then it assigns with the move from B, and so it's a move assignment, not a copy assignment. And then it moves the temporary object into B. And so it's just a little juggling operation. It's actually very simple and very quick because these are all moves, and there aren't any copies here. And so when I build and run this, you'll see that v1 and v2 are now swapped, and they're no longer the same. I have this little print statement here swapped to show that we're calling our function, but we can call the standard swap function instead. And it works exactly the same. We'll go ahead and run that. And you can see that it works exactly the same. The only reason we have ours is so that you can see how it operates. The standard move and standard swap functions are fundamental tools for use with move semantics. We'll be using them a lot as we work with move semantics in the [[Representational State Transfer (REST)|rest]] of this course, and of course, in your own code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Exercise Files:** template (2), exercise files (1)
> **File Paths:** vectortest.cpp (1)
> **Env Vars:** stl (1)
> **Speakers:** - [instructor] (1)

#### [The move constructor](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=0)** - [Instructor] In order to take advantage of move semantics in one of your own classes, you'll need to create a move constructor. This is container dot cpp from chapter two of the exercise files. And you'll see down here, we have a class called container. This is a simple wrapper class with helpful print statements inserted to show where its constructors and destructors are called. Our payload is a vector. And we're using a vector, because it's movable. Keep in mind that primitive types like int and float are not movable. And I'll come down here. We can see our constructors have little print statements. We have an initializer list constructor, a copy constructor, copy assignment operator and our destructor. We have a little string function that returns a string representation of our vector. And we use that down here in our print statements, a string, b string. We have our two containers that we're declaring in our main. And there are containers of string. And a has 1, 2, 3, 4, 5, and b has 5, 6 and 7. And you'll notice that I have a container c that gets initialized from a. And so that'll call the copy constructor. And we'll see how this works. We'll go ahead and run this. You can see that we call the initializer list constructor twice. And a is that, and b is that, as we expect. Then we call the copy constructor. And c is now the same as a. And then we get three destructors as everything goes out of scope,
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=94)** which is as expected. Now if I were to say standard move here, you'll notice when I run this, nothing changes. We're still calling the copy constructor, because all that the move function does is it casts the object a as being a movable rvalue. But we don't have any constructors here that can move it. No constructors using the rvalue reference. And so let's go ahead and create one. I'm going to close our output window here and make a copy of the copy constructor. And we'll change this to a move constructor. All right? And we do this by, we take out the cons here, and we add a second ampersand, so the double ampersand there is the rvalue reference. So now when it sees an rvalue, it can use the rvalue reference instead of the lvalue reference. And that's really all that makes this a move constructor. We also need to add a noexcept specifier so that this operation cannot be interrupted and leave the right hand side object in an unusable state, in an unknown state. And so we need this here. And in fact, some compilers won't even recognize a move constructor without that. And so we'll come down here into our implementations. And we'll make a copy of our copy constructor. And we'll change this to a, we'll call it a move constructor.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=188)** And we'll do all the things that we need to do to make it a move constructor. We take the const out, because we're actually modifying the right hand side, right? We're moving from it, and so we're leaving it in an empty state. And I'll add the ampersand to make this an rvalue reference. And I'll add noexcept here. And then we need to move the vector. So remember the vector is called things. We need to now move that instead of copying it, right? So I stay standard move. And I put parenthesis around all of that. And now we have a move constructor. Really, that's all there is to it. We need to declare it with the rvalue reference. We need to have the noexcept. And we need to move instead of copying our payload, our data. And so now we already have the move down here. And so when I build and run this, you notice that it's calling our move constructor. And it's leaving the a object empty, which is exactly what we expect. So now it's moved that vector over rather than copying it. Whenever the source of the construction is an rvalue, it'll now call this move constructor instead of the copy constructor. If we didn't have this as we saw before, it would simply call the copy constructor in either case. So that works as expected. There's one more thing that is worth noting. Remember that a return of a temporary object from a function is considered a movable rvalue,
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=283)** because the temporary object would be destroyed otherwise anyway, and so this makes it an rvalue. So whenever I call this function here, what's returned is an rvalue, right? And so instead of this standard move, I simply put f here, what's going to happen? Well, first, you'll notice that the parameter to f is not a reference at all. So a copy will be made, and a copy constructor will be called. And then it'll be returned. And it'll call the move constructor for c. And we only get one copy operation instead of two. All right? And so when I build and run this, you'll notice that c is now constructed with the move constructor. We have the copy constructor for the function call, and that creates a temporary object. Then we have the move constructor which moves the values, the data, the payload, from that temporary object into the new container object. And then we have a destructor is called for the temporary object that was created in the function call. And so this is where the efficiency really happens. We're no longer destroying a, because a was copied into the function rather than moved. If we wanted to actually move a here, we would have to make an rvalue reference up here. And we would have to then call move here. And now a will be emptied,
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-constructor-18749196?u=76281980&t=379)** because we're moving everything. And we notice that we only have one move constructor, and a is left empty. But under normal circumstances, a function call return is a movable rvalue. And so we save ourselves a copy when we do things this way. And there it is like that. So having a move constructor is an important part of supporting move semantics. And we'll look at some more ways to support move semantics as we continue in this chapter.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (3), is called (2)
> **CLI Commands:** make (5)
> **Cross-References:** as we saw (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [The move assignment operator](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=0)** - [Speaker] Along with the move constructor. The move assignment operator is also an important part of supporting move semantics in your code. This is container 02.CPP from chapter two of the exercise files. And this version of our container class includes the move constructor that we added in the last video. Now if we come down here into main and we see that we're calling our move constructor, I can run this and we can see the results there. We call the move constructor and then a is empty after that. Instead of this, let's create a container we'll call it container string and say c I need to add the template parameter there because we're going to leave it default constructed. And that means that there's no way for the statement to automatically deduce the type. And then I'm going to say c equals a like this. And then we'll print out a and c like we have been doing there. I'll go ahead and I'll run this and you'll see that it calls the copy assignment operator c. The default constructor is called for the new c object. That's this here. And then the copy assignment operator is called and a and c have the same value. Now if I instead say standard move a
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=93)** and run that, you'll notice that it still calls the copy assignment operator because there is no move assignment operator. And so let's go ahead and create one. I'm going to close our output window here. Here's our copy assignment operator and I want to make a copy of that and just paste in another one. This cannot be const because we're going to be clearing the right hand side. We add our Rvalue reference there and we say noexcept. You'll recognize all of that from the previous movie when we created the move constructor. And then I'll come down and I'll find the copy assignment operator and just like I did with the constructor, I'll go ahead and I'll make a copy of that and we'll change it to a move assignment operator, cuz most of it's the same. Just a couple little changes we need to make. We need to take out the const and we need to make this an Rvalue reference and we need to put in noexcept and then we need to do a move instead of the copy there. And now we'll come back down here. We see we're calling our assignment with a move. And so we should get the move assignment operator. Here's the move assignment operator. We're running it and a is now empty and c has the contents from a So, just like with the move constructor, this method needs to be marked noexcept, we have that right there.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-move-assignment-operator-18746380?u=76281980&t=187)** We must access the right hand side data members directly. And so we can't have a const here because we're going to be moving the data and that modifies the right hand side object. And it's worth noting that because our data member, our payload is a vector, the move operation leaves the right hand side object in a valid state. Otherwise we would need to reset it ourselves. The move assignment operator is an essential part of supporting move semantics in your class. It's very easy to implement and you should always consider supporting it when you provide support for a move constructor.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Definitions:** is called (2), means that (1), is a  (1), is an  (1)
> **Exercise Files:** exercise files (1), template (1)
> **Analogies:** just like (2)
> **File Paths:** 02.cpp (1)
> **Env Vars:** cpp (1)
> **Cross-References:** in the last (1)
> **Best Practices:** you should always (1)

#### [The copy-and-swap idiom](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=0)** - [Instructor] There's one more optimization we can provide here, and this is for the non-move version of the assignment operator. It's called the copy-and-swap idiom. This is container-03 from chapter 2 of the exercise files. This has the container class with our move constructor, and our move assignment operator from previous videos in this chapter, and if we come down here into main, you can see that we're constructing our two container objects with string types, and we print them out and then we assign A to B. So, this copies A into B, and then we print them out, and when we run this, you'll see that we have our initializers, here's A, here's B, and then our copy assignment operator, which gets called on the assignment, and A and B are now the same. Now, we're going to apply our copy-and-swap idiom and make this more efficient. I'm going to close the output window here for a moment, and we'll come up here, and our copy assignment operator is going to change. Instead of the copy assignment operator, we're going to create a copy swap operator And we'll just call this copy/swap, and we'll come down and modify the operator itself. Now, this is the copy assignment operator,
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=94)** See here, we don't want a reference. So, it looks like that, and then we'll come down into our copy assignment operator, and we'll do the same thing, we'll take out the reference and the const, and instead this object is going to be copy constructed when it's called. Now, copy construction is actually a bit more efficient than creating a temporary object, and so we're going to change this to say copy/swap, and we'll do the same thing here. And now instead of all of this, we simply say standard swap, and our things, right hand side .things. So, this swaps our vectors, and when we call this now with our assignment, you'll notice that the copy/swap operator gets called. There is one constructor the, copy construct, when the right hand side is passed to our function member and then the swap, and the destructor of the temporary object. So, this is very easy, and it's very efficient, but it's not really the whole thing. There's a free bonus with this. If I come in here and I say standard move, and this is why this is so cool, really, you notice that it's complaining that we have an ambiguous operator,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=188)** and that's because we actually no longer even need our move assignment operator. The copy/swap does both now, and I'm going to come in here and we'll delete this as well 'cause that's going to complain about that, and what happens now, is when we have a movable are value, like this, then that movable are value, that will call the move constructor on the temporary object. So it creates the temporary object, but it creates it with a move constructor instead of a copy constructor, and that move constructor is incredibly efficient, and then it simply swaps the values, just like our copy assignment operator would, and destroys this temporary object that was move constructed. And so when I now build and run this with the move, here, what happens, we call our move constructor, right? Because this is being passed by value, but it's a movable object now, it's a movable are value, and so it calls the move constructor, and then it swaps the values and it calls the destructor, and our A is now empty as we would expect. And again, if we do this as exact same function as being called the copy/swap operator, we do it without the move, A and B are now the same, and when we have the move in there, it does the move instead, and so now we have one operator, one assignment operator that does both copy and swap,
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-copy-and-swap-idiom-18751130?u=76281980&t=285)** and we no longer need our separate assignment operators. This is a remarkably efficient solution. You now have both copy and move assignments in one implementation. It's shorter and it's more efficient than the separated equivalence.

> [!info]- Semantic Content
>
> **Definitions:** we call this (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Rule of three and five](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=0)** - [Instructor] If a class requires a user-defined destructor, a user-defined copy constructor, or a user-defined copy assignment operator, it almost certainly requires all three. This rule is commonly referred to as the rule of three. The rule of three is a generally accepted rule in C++ that says if you define any of these three member functions in your class, a destructor, a copy constructor, or a copy assignment operator, you'll need to define all three. Of course, all of these have default versions generated by the compiler, but the rationale is if you need to define one of them, then the default version is probably not sufficient for any of them. Realistically, if you're defining any of these functions, that means that you're managing data, so the default version of any of these functions is probably not going to manage your data correctly. With move semantics, the rule of three becomes the rule of five. The reasoning here is the same, but with the addition of the move versions of the constructor and assignment operator. If you're implementing the copy and swap idiom, then both your copy assignment and move assignment will be handled by one member function. So some may reason that it's the rule of four or four and a half, but that's not really accurate. The reality is that with a copy and swap assignment operator, the object still provides all five functionalities. The rule of five is an extension of the rule of three that includes support for the move constructor
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/rule-of-three-and-five-18745413?u=76281980&t=95)** and the move assignment operator. Best practice is anytime you're managing data members, you probably want move semantics, so you'll usually need to implement the rule of five.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Lambda Expressions

[↑ Back to Table of Contents](#table-of-contents)

#### [Lambda syntax](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=0)** - [Instructor] A lambda expression is an anonymous function that can be stored as a variable for later use. It can be passed as a parameter, stored in a data structure, and called in varying contexts with different parameters. It's as flexible as a function but with the mobility of data. This is lambda-hello.cpp from chapter three of the exercise files, and down here we have a minimally correct lambda expression. It has an empty capture list and it has one statement in its body. We assign the lambda to the variable x using the auto type, you always use the auto type for assigning a lambda to a variable, and we call the lambda with the function call operator. And when I build and run this, you'll see we get the results that we expect. We can have a lambda return a value instead of printing it, and so I can say return and now I can call the lambda
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=66)** inside of a print statement to take its return value. And when I build and run, you see we get the result that we expect. The lambda infers its return type from the return statement. You can specify the return type with a trailing return type notation like this. And I build and run, you see we get the same result. Technically, the empty parameter parentheses are required if you specify a return type. Beginning with C++ 23, empty parentheses will no longer be required. You can specify function parameters in the parentheses, and then I can return that instead, and I can put the string inside of the parentheses where the lambda is called and we get the result that we expect. The square brackets are for the capture list. You can capture a value from the context of the lambda definition with the capture list. So I can come in here and I can say const char pointer, greeting and initialize it with that string, and then I can put the greeting inside the square brackets for the capture list. I no longer need parameters and I'm returning greeting.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=164)** And I no longer need to call it with parameter. And now when I build and run, you see we get the result and now we're getting that string through the capture list. We'll get into a lot more detail throughout this chapter but for now, let's take a look at the full syntax specification for a lambda expression. These are the different parts of lambda expression. The capture list specifies what variables we capture. These variables are captured from the scope of the lambda definition, not from where it's called. As with a function, parameters are specified in parentheses. If there are no parameters, the empty parentheses are optional unless any of the specifiers or trailing return type are provided. Any specifier or trailing return type makes the parentheses required and this requirement is expected to be removed in C++ 23. A lambda expression defaults to const qualified unless you specify the mutable modifier. Without the mutable modifier, a lambda may be safely used in a const context and it cannot modify any of its captured variables. A lambda with a mutable modifier is no longer const safe. Constexpr, which stands for constant expression, specifies that the lambda is considered a constant expression. This means that it may be evaluated as compile time. If the lambda meets the requirements,
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/lambda-syntax-18745407?u=76281980&t=258)** it may be considered a constant expression even without the specifier. The noexcept specifier declares that the lambda cannot throw any exceptions. By default, the lambda return type is automatically deduced from the return statement as if it were an auto return type. You may optionally specify a trailing return type with the arrow operator. The body of a lambda is, of course, required. It's enclosed in curly braces and contains one or more statements just like the body of a function. Lambda expressions are exceptionally powerful and flexible. They're commonly used as predicates and parameters for stl [[Algorithms]] and other simple functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is an  (1), is called (1), stands for (1), means that (1)
> **File Paths:** lambda-hello.cpp (1)
> **Documentation:** specification (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Closures](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=0)** - [Instructor] The term closure is often applied to any anonymous function or lambda. Strictly speaking, a closure is a function that allows the use of symbols outside its own lexical scope. This is lambda-capture.cpp from chapter three of the exercise files, and you notice that we have an error message here saying that the variable greeting cannot be implicitly captured. And what this means is, is that this variable greeting is outside the lexical scope of the lambda and therefore the lambda cannot use it unless we list it in the capture list. And so we put a greeting here, and now our code will build and run and give us the result that we expect. These square brackets are for the capture list and this allows the lambda to capture symbols from outside its lexical scope. You can list multiple variables. We could create a second variable, and we'll call it folks and have it just be the [[Microsoft Word|word]] earthlings. And this can be just the word hello. And we can capture both of these by listing them both here and I can say standard format, return of string a formatted string with both of these variables. And I'll put the inside there.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/closures-18747302?u=76281980&t=93)** And now when I build and run we get the result that we expect. Captures default to copy just like function parameters and so these captures create temporary objects for use within the scope of the lambda. We can capture by reference instead by using the reference symbol like this. And of course, this works as expected. We can capture all symbols by using just an equal sign and this, again, is captured recopy. If we use the reference sign just like that that captures all the symbols in scope by reference. I'll build and run, and we'll see that that works. It's generally preferable to list the specific symbols that you want. The ability to capture variables outside its own scope is what makes a lambda a closure. People use the term in different ways and that's fine. So long as we can understand each other. Still, it's good to know what the term means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Analogies:** just like (2)
> **File Paths:** lambda-capture.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Algorithm predicates](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=0)** - [Instructor] Algorithm predicates and operators are one of the more common use cases for a lambda expression. Let's take a look at some examples. This is lambda-predicate.cpp from Chapter three of the exercise files. Predicates and operators are often used with [[Algorithms]] from the algorithm library. So we're including the algorithm header here. We have this utility function display v to display a vector, displays the contents of a vector, and here we're declaring a vector. We'll be using vectors with our algorithms in this example file. So here we have a vector of int with a number of integer values and our first predicate. Now a predicate is a lambda that returns a Boolean true or false value. And in this case it returns true if the integer is evenly divisible by four. And we use it with this count_if algorithm to count the elements of the vector v1 which are divisible by four. And we display the count. I'm going to go ahead and comment out the [[Representational State Transfer (REST)|rest]] of this here down to the closing brace. And we'll go ahead and run this part, build and run, and you see it says count is 5. And so, okay, we say, there's five integers in that vector that are evenly divisible by four. Which ones are they? So we can use the copy_if algorithm
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=97)** and this will copy the elements of v1, which are divisible by four into the vector v2, as it's an empty vector. And we're using the back_inserter which is a common way to use the copy algorithms. It simply inserts those elements into a new container. And so I'll go ahead and I'll run this. And you see we display with v2, we display the elements of v1, which are evenly divisible by four. And you'll notice that there are indeed five of them. So this is our predicate and it's worth noting that a lambda is an expression. So I can take this lambda and copy it. And here, instead of calling the lambda like that or rather passing the lambda like that, I can simply put the predicate right there in the function call to the count_if algorithm. And when I run this, you notice we get exactly the same results. These predicates are usually very short and they're often written in the function call itself, unless of course you need to reuse it, in which case, we store it in a variable and we can reuse it in another algorithm. An operator is similar to a predicate, but returns a value for a container. And here's an operator. This is an operator that'll convert a character into an uppercase character. And so it takes a character, it checks if it's lowercase
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=193)** and if it does, it converts it to uppercase. And we'll go ahead and uncomment these next few lines. And you see we have a string with lowercase characters and we have a couple of empty strings. We'll print our first string here, and then we'll do a transformation, again using the back_inserter, and using the char_upper operator to transform the lowercase characters into uppercase. And then we'll print s2 with all uppercase characters. And I'll go ahead and I'll run this. And you see that we get the result that we expect. And in fact, we can call one operator from another operator. Here we have a title_case operator. I'm going to uncomment the rest of this. And what this does is it looks for each space or the beginning of the string and it converts the next character to uppercase. And it uses the char_upper operator here. And in order to use the char_upper operator, it needs to capture it. And so we have the capture there to capture the char_upper operator and then we'll use the transform to transform string s3 into title_case. I'll go ahead and I'll run this, and you see that it works as expected. Algorithms are a common use case for lambdas. Simple lambdas are often defined in line within the algorithm function call.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/algorithm-predicates-18747306?u=76281980&t=286)** More complex lambdas may be defined separately sometimes as part of a library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** char_upper (4), count_if (2), back_inserter (2), title_case (2), copy_if (1)
> **Definitions:** is a  (2), is an  (2)
> **File Paths:** lambda-predicate.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: A Lambda jump table](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=0)** - [Instructor] The challenge for this chapter is a Lambda-based jump table. You'll use an STL map container to map a keystroke to a Lambda. For this challenge, you'll write a program that operates like this. It offers up a prompt with a number of choices. You give a letter response, a single letter response, and it calls a particular function. Give a different letter response, it calls a different function. It'll accept capital letters just as well as lower case letters. And if you give it too many characters, it'll give you an error response. If you give it a character that is not in your jump table, it gives you an error response. If you give it nothing, it ignores it, and if you give it a letter X, it gives you a message and exits. Very simple. You'll want to use a standard map container for the jump table itself. You'll need a Lambda type signature for use with your map template definition. This is two alternative polymorphic type signatures for a Lambda or for any functor. The first is simply a pointer to a generic function. The second uses the standard function class. Standard function is a template class that allows polymorphic function calls. Standard function requires the functional header. Either form will work.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/challenge-a-lambda-jump-table-18749195?u=76281980&t=95)** Expect this challenge to take 30 minutes to an hour. Take longer if you need to, or if you want to experiment and learn more about the details, my solution is in jump.cpp in chapter three of the exercise files.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (2)
> **File Paths:** jump.cpp (1)
> **Env Vars:** stl (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Constraints and Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Why constraints?](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=0)** - [Instructor] Templates are great for writing generic code that works with different types, but some code can be dangerous when called with the wrong type. Beginning with C++20, we now have constraints and concepts to help protect our templates. This is working.cpp from chapter four of the exercise files. And let's just build a little template function here, and see what happens. There's our template declaration, and we'll use the type T as our return type, and as our parameter type. And we'll return our argument plus 42. And now here, instead of just an int, we can use auto. And in our print statement we can say arg42, n, like that.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=61)** So we have a template function that takes any type of an argument. We're passing it a floating point number, 7.9. And we're printing out the result from the function with that parameter. And I'm going to go ahead and I'm going to run this. You see that our answer is 49.9. And this works just as well for an integer. And what's interesting is if I take this 7.9, and I put quotes around it, what's going to happen? Well, it'll pass the const care pointer to the function to the template function, and then it'll add 42 to the pointer, which makes it point to an arbitrary place in memory, which is effectively a memory leak. And you'll notice when I run it, it says the answer is this broken string. And what's interesting is if I put square brackets around this, of course the results on your machine will be different. The results on this machine will be different if I load different things before I load [[Xcode]]. And if I go ahead and run it now, you'll notice that it gives me empty square brackets 'cause it happens to point someplace with a null value. But if I take out a [[Microsoft Word|word]] from my string, it moves that pointer again, and it gives us another result. So this is a recipe for disaster. I can fix this by adding a constraint. Now, in order to add a constraint here, I'm going to include the concepts header. And in the concepts header,
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=155)** there's a number of named constraints. Named constraints are called concepts. And so here, I can add a couple of 'em. I can say requires. This is a new keyword in C++20 for use with concepts and constraints. I'm going to say requires. Standard integral, which is in the concepts header. And/or standard floating point, which is also in the concepts header. And the logical or operator, essentially, concepts are logical operators, or they work like logical operators anyway. And now, you'll notice that I get a compiler error. No matching function call to arg42 because this const care pointer does not satisfy the requirement, the constraint of it being either integral or a floating point. And so if I take those quotes off and just put in 7.9, you notice my error message goes away, and it runs just as it did before. And if I change this to an integral value, you notice it still works. So that's pretty cool. And that helps to make our template functions a lot more safe, but that's not all we get. We also get concepts. We can define our own concepts. So I can say template, type name, T, and I can say concept, numeric. I've named a new concept.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/why-constraints-18747304?u=76281980&t=250)** Equals, and I can take this expression here, and I can put it up there with a semicolon. And now, I can use that new named concept numeric. It's a template concept, right? And so I have to give it the template parameter. And I build and run, and this works is expected. And I go ahead and put quotes around my seven there. And you'll notice that we get our error. No matching function call because it doesn't satisfy the numeric concept. On the other hand, I can give it a floating point number, and it works as expected. We can also simplify this even further by putting the name of the concept up there, then we don't need it there anymore. And this works exactly the same way, build and run this. It works as expected. And if I put quotes around my 7.9, we get our error message again. In fact, we can even use concepts with abbreviated templates. So instead of all of this, I can say auto here, and I can say auto here. Now, this is an abbreviated template, right? And I can put in my concept right here, and it has exactly the same effect. No matching function call, right? And I take off the quotes, and the error goes away, and I can build and run and it works as expected. Constraints and concepts are a valuable tool for protecting our templates from incompatible types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1), [[Microsoft Word|Word]] (1)
> **Exercise Files:** template (9), exercise files (1)
> **Versions:** 7.9 (4), 49.9 (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** working.cpp (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Constraint syntax](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=0)** [Narrator] A 'constraint' is a series of requirements on template parameters. Constraints may be combined by logical operators and operands. This is constraints DOTcvp from chapter four of the exercise files. And we have down here a template function that uses the new 'requires keyword' to apply constraints to the template parameter 'T'. The requires keyword was introduced with constraints and concepts in c++20. This requires clause specifies a concept to use as a constraint for template parameters. The concepts header includes a number of useful, predefined concepts for use with requires as constraints. And the standard 'integral concept', which we've specified here, constrains the template parameter to types that satisfy the integral concept. And of course, this floating point number does not satisfy that constraint. And so we have this error that says 'no matching function function call.' Constraints are logical expressions. So I can take out this concept and replace it with the logical 'true', and now it's basically open. This is the equivalent of no constraint whatsoever. Now our floating point works. We can build and run this. We can put quotes around it and it's now a const char pointer which of course is bad, but it still accepts it. You may combine constraints with 'Boolean Operators.'
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/constraint-syntax-18751132?u=76281980&t=95)** And so, I have this concept 'integral' and I can say, or, standard floating point T. And now you'll notice that my error goes away and I can build and run this as expected because now I have two constraints that are combined with the logical or operator so that either integral or floating point may be satisfied to satisfy the constraint. Constraints use concepts to constrain template parameters. 'Concepts' are logical expressions for template parameters. And we'll get into defining concepts in the next video.

> [!info]- Semantic Content
>
> **Exercise Files:** template (7), exercise files (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Defining concepts](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=0)** - [Instructor] Concepts are used as constraints to determine compatible parameters for templates. The STL provides a number of useful concepts in the concepts header, but sometimes it makes sense to define our own. This is constraints.cpp from chapter four of the exercise files. Notice that this constraint down here in our template function uses the integral concept from the concepts library. We can combine it with floating point using the or operator and we'll use the floating point concept also from the concepts header, and this now allows our floating point number to satisfy the constraint and we can build and run and it works as expected. However, if we take this now logical combined constraint and we put it up here like this, it does not work and this will not compile and it'll give us a short cascade of errors. Instead, what we can do is we can use these to create our own concept. We can say template and use the concept keyword to define our own concept, and then we can say numeric here, and we get the result that we expect. We can now build and run,
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=92)** and it works with our floating point number. We can even use our concept in an abbreviated template syntax, and it still works as expected. We can also define our own concepts that do not rely on the concept library. So instead of this, I can say numeric equals and use the requires keyword, and the [[Representational State Transfer (REST)|rest]] of this is kind of like a function or a class. I do need a semicolon here, but now I can put in expressions that must be satisfied for the concept to be satisfied. So I can say a plus one and if a plus one, if this template parameter can be added to one, if this will compile basically, I also like to add a times one so that either this plus or times must be satisfied in order for the concept to be satisfied. Now we have a numeric concept that we've defined ourself. It does not rely on the concepts header, so I can even delete that, and this all builds and runs as expected. And, more importantly, if we put our quotes around this, it no longer satisfies the concept and we get our error, no matching function call. So this is how concepts are defined. Any expression as long as it compiles is true, and if it doesn't compile it is false.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/defining-concepts-20642849?u=76281980&t=189)** And this is the other use of the requires keyword. In this case, the requires keyword uses a parameter or multiple parameters, and what's effectively a function body, but it does require a semicolon. Concepts are here to make our templates safer. While the STL provides a number of useful concepts in the concepts header, sometimes it makes sense to define our own. If we can succinctly describe the requirements, it should be easy to define our own concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Exercise Files:** template (4), exercise files (1)
> **Env Vars:** stl (2)
> **File Paths:** constraints.cpp (1)
> **CLI Commands:** make (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 5. Optionals and Variants

[↑ Back to Table of Contents](#table-of-contents)

#### [The optional class](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=0)** - [Instructor] The optional class was introduced with C++ 17 to hold an optional value. This is useful when you need to return a value or a status. This is optional.cpp from chapter 5 of the exercise files. The factor function returns either the lowest factor of a value or a false status to indicate that the value is actually prime, and it does this using this structure here, called return_status, which holds either a long value or a boolean status. And so we have a bit of logic in here. We initialize it with a false status, and we change that status to true, if we actually have a factor, and we populate the structure with the factor, and then we return the structure down here. It's a little bit convoluted, but it works. And this is the way we've traditionally done this before we had the optional class, and down here I call factor with a value, a long value, and I use auto to populate x with the structure, and then we test the have_value status, and if we have a value, then we can access the value with the value member of the structure. And so I'll go ahead and I'll build and run this, and you see that 42 has a lowest factor is 2, and if I change this to 43 and run it, it says that 43 is prime.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=95)** So, we're getting the results that we want, but it's all a little bit convoluted, and so let's refactor this using optional instead. We're including the optional header, which has the optional class in it, so we don't need the structure anymore, and now we can just say standard optional of type long, and we don't need to initialize that anymore, and now here, all we have to do is return i, if we actually have a factor, and otherwise we return a default initialized structure, which will be false. And then down here we have x, which is now the optional class, the optional object, and so I can check for has_value, which is a member function, or value, which is also a member function. And now all of this is very simple, and I can build and run this, and it still says that 43 is prime, and that 42 has a lowest factor of 2. So, that's really cool. That's a lot simpler than it used to be, and we can make it even simpler because this has value. Actually the optional class has an overload for a boolean, so we can just test it like this, and it has an overload for dereference operator, so we can grab the value like that, and we get exactly the same result. There's our lowest factor, and 43 is still prime. So, the optional class is made for simplicity.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-optional-class-18747308?u=76281980&t=193)** It provides convenient operators for testing if it has a value and for providing the value.

> [!info]- Semantic Content
>
> **Code Identifiers:** return_status (1), have_value (1), has_value (1)
> **File Paths:** optional.cpp (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The any class](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=0)** - The any class was introduced with C plus plus 17 to provide a type safe polymorphic container for a single object of any type. This is any.cpp from chapter five of the exercise files. You see we're including the any header. We have a string header and a vector header we're going to be using those as well. We have this function which takes a object of type any, and it prints out its contents and so it first checks if it has a value, and otherwise it checks its type. So the any class has this method type which returns a typeid object and we compare it with the typeid of an int and if it matches then we have a value of type int and we use any cast to retrieve that value. And we put it in the X variable here and we print it out. Otherwise we compare its type to the typeid of a standard string object and we handle that. Otherwise we test for a vector of int and we handle that. And otherwise we just print out I don't handle this type. And we print out its type object method name which returns a string representation of the type object and that string representation is different on every library, on every compiler, on every system. And so when we print that out you'll see a value here
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-any-class-18744504?u=76281980&t=93)** but it'll be different on a different system. And so I'm going to go ahead and I'm going to run this and you'll see this works just as expected. We construct an object with an int we construct an any object with a string standard string, standard vector of int, standard vector of float, and you can see these are results. We have an int a string vector of int with five elements and there they are. And I don't handle this type for the vector of string. The any class can be useful for circumstances where you need to process objects of various types. Use cases include editor objects, binding with duct type scripting languages, user interfaces, or any application where you must process objects of various types.

> [!info]- Semantic Content
>
> **File Paths:** any.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### [The variant class](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=0)** - [Instructor] The variant class was introduced with C++ 17. Variant is a type safe tagged union. A variant object may hold different values of different types one at a time where each value must fit in the same allocated memory space. Let's take a look at how that works. This is variant.cpp from chapter five of the exercise files. You notice we include the variant header, and down here we have a class called animal which we're really just using as a base class. It has a couple of features, it holds a name and a sound, and it has this speak method where it prints out the animal name and what it says, its sound. And down here we have derived classes that are derived from, they inherit from animal. We have a cat, which is constructed with the sound meow. We have a dog, which constructs with the sound arf. And a Wookie, which constructs with the sound grrraarrgghh, which is the sound that a Wookie makes. And down here in main, this is where the variant comes in. So we have a variant type because we have this type alias called V animal. In its template parameters, it lists three different types that are possible for the variant objects: cat, dog, and Wookie. And so this type can be used to construct a variant object that can, as its base class, have either of those three classes.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=93)** And then we construct a vector of type V animal, so it's that variant type. The only reason we're using the alias here is because otherwise this vector declaration is going to get very unwieldy, and so we use an alias to make that simpler. We construct our vector with four different objects. A cat object, a dog object, another cat object, and a Wookie object. And so what happens is, as we construct this vector, each of these objects will be used to construct a variant object. And so each element in the vector will be a variant object either of type cat, dog, or Wookie. So now we have our vector and it has four objects in it, and our vector is called pets, and we want to access the objects in the vector. So there's three different methods that you can use, three different techniques you can use to access a variant object. The first is using the get function, and the get function returns an object of the type and you specify the type in the template parameter for the get. Well, how do you know which type to specify? You use this index method off of the object and it will tell you if it's zero, it's the first type that was specified in the template parameters when you constructed the variant object. So we have cat is zero, dog is one, Wookie is two. And here we have cat, we have dog, and we have Wookie.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=191)** And we use the get function, which is a helper function, we pass at the object, and it returns the object so we can simply de-reference the object and call the speak method. All right. Our second method is using the get if, and the way this works, we can say get if cat, get if dog, get if Wookie. And these types are template parameter types, right? And what get if returns is either a null pointer or a pointer to the object. So we use the pointer de-reference operator to get the actual speak method to call. And so that's the get if method. The final method is a little bit weird. This uses a helper function called visit, and you pass visit a polymorphic funk door, effectively. And up here we have this animal speaks structure and it overloads the function call operator but it overloads it with three different types. One each for each of our variant objects. And so what visit does is you pass it that object constructed from that type, and it will call its function call operator with the object that you specify in the second parameter here. So it's a little indirect, it's kind of clean looking, right, but it also, you know, requires this weird looking structure.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-variant-class-18747305?u=76281980&t=284)** Again, all of this is a matter of taste or a matter of what's going to work in your particular application. Let's go ahead and run this and we'll see how it works. Each of the different methods using the get method, using the get if method, using the visit method, and each of these gives us the results that we want. Hobbes says meow, Fido says arf, Bill says meow, Chewie says, grrraarrgghh, right? So we can see that the variant class is useful for holding alternative types for use in a single context.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (8), make (1)
> **Exercise Files:** template (4), exercise files (1)
> **Definitions:** is a  (4), is called (1)
> **File Paths:** variant.cpp (1)
> **Speakers:** - [instructor] (1)


### 6. Concurrency

[↑ Back to Table of Contents](#table-of-contents)

#### [Sleeping](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=0)** - The thread header provides two functions for sleeping a thread. Sleep_for specifies a duration of time for the thread to sleep and sleep_until specifies an end time for sleeping a thread. This is sleep.cbp from chapter six of the exercise files. You notice we have a few using statements here in the standard chrono name space. We have steady_clock and duration. Steady_clock provides a chrono time point object and duration provides a chrono duration object. In the this_thread name space we have sleep_for and sleep_until. These are in the this_thread name space and they operate on the current thread. The sleep_for function takes a chrono duration object and the sleep_until function takes a chrono time point object. And then we have this name space for chrono literals that we're using for seconds and milliseconds. And we'll see that down here in a moment. Down here in main we take a steady_clock now, which is a time point for right now. And then we sleep_for, and you notice the chrono literals for two seconds and 500 milliseconds. And this provides a duration object. And then we have sleep_for three seconds and we take the current time point, the now, and we add three seconds to that. And then we calculate our duration
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/sleeping-18750200?u=76281980&t=93)** by subtracting the original time point from the current time point. I'm going to go ahead and run this and you'll see that it sleeps for two and a half seconds and then it sleeps for three seconds. And it gives us a total duration, which is, you know, just a hair, a little fraction longer than the two and a half plus three seconds because, you know, we did things like print strings and there's various overheads involved here. And so these sleep functions, they sleep the current thread, and we'll talk more about threads later on in this chapter. But in this case, the current thread is simply the main function and it sleeps the execution and it blocks until the sleep is done and then it continues. So when we run it, we get two and a half seconds and then we get three seconds and we're done. The sleep functions can be useful for things like timers and benchmarks. These functions are well-supported, standard functions. They use the standard chrono library for timing.

> [!info]- Semantic Content
>
> **Code Identifiers:** sleep_for (4), sleep_until (3), steady_clock (2), this_thread (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Threads](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=0)** - [Instructor] A thread is a unit of concurrency. In C++, the main function is the main thread of execution. Within the context of the operating system, the main thread runs concurrently with other threads owned by other processes. The standard thread class is the root of concurrency in the standard library. All other concurrency features are built upon the foundation of the thread class. This is thread.cpp from chapter six of the exercise files. You notice we have a couple of functions here. We have sleepms, which sleeps a given number of milliseconds. The argument that's passed to it is a number of milliseconds. We have a thread function. And this thread function loops a number of times. It loops five times, and each time it loops, it sleeps a certain number of milliseconds. And the milliseconds is 100 times the integer that's passed to the thread function. And down here in main, we passed the thread function of one. We passed the thread function of two. So this one will loop in 100-millisecond increments, and this one will loop in 200-millisecond increments. The thread class is constructed with the first argument is the function to call, in this case, the thread_func. And in this case, the second argument is passed to the thread_func. Of course, the thread class can take any number of arguments, which are then passed to the function.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=94)** And so the first thread will call this function, and it will loop five times, 100 milliseconds per time. And the second thread, we'll call the function and it will loop five times at 200 milliseconds per time. So the second thread will take a little longer to complete than the first thread. And then each of these threads are detached with the detached method on the thread. And then the main function sleeps for 2,000 milliseconds, or two seconds to allow these threads to complete. And so when we go ahead and run this, you'll see that our threads, we have them in the thread function. We display the thread number, which is the number that's passed to it, and its sleep duration, and which loop it's on. And so at first, we have both of them on the first loop. And then thread one gets two more loops before thread two gets a second loop. And then thread one finishes, its five, and then thread two finishes its five. And then the main program sleeps for two seconds. You notice that the message for sleep two seconds is way at the top here. And that's because the threads get detached. When the threads get detached, that means the owning thread, the main thread in this case, can go ahead and complete. This message here gets printed before any of the messages from the thread Instead of detach, if we call join instead, then what happens is these threads need to complete.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/threads-18751133?u=76281980&t=189)** They block the main thread, and they need to complete before the main thread continues. And so you'll see that that sleep two second message, I'll go ahead and I'll run this. And that sleep two second message now happens here, and we have to wait two more seconds for the main thread to finish. So the difference between join and detach is whether or not that thread blocks the thread that it's being called from. And so if we put these back in detach mode, you'll see that those threads get started and they run concurrently. And the main thread is allowed to continue before those threads are finished. A thread object represents a thread of execution. There is a one-to-one relationship between object and thread. One object represents one thread, and one thread is represented by one object.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Identifiers:** thread_func (2)
> **File Paths:** thread.cpp (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [The async function](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=0)** - [Instructor] The standard async function runs a thread asynchronously and returns a value using the standard future class. In this way, async operates much like standard thread, but allows return values. This is async.cpp from chapter six of the exercise files. You'll see we have a structure down here called prime time with two elements, a duration and account. You notice that the type of the duration is this seconds, secs, which is an alias up here for standard chrono duration of type double. So that's a duration object, a standard chrono duration object. And here we have an unsigned 64-bit integer type for the count. And we have a function called count primes that counts the number of primes between two and a maximum value. And it returns this prime time object with the count and the duration, how long it took to count those many primes. And down here in main, we make use of this. We have a couple of constants, a max prime that we use for the maximum number of integers to count looking for primes, we have a number of threads to run, and we have a list of standard future objects. And these standard future objects are templated
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=94)** with the prime time type as a template parameter, and we name this list swarm. And we'll get into the details of this in a minute here. We take the time now as we start all of this using the steady clock, and we run a loop for our number of threads, and for each cycle through the loop, we call async with our count primes function and a parameter for our count size function. Async returns a standard future object, and this standard future object is then placed on our swarm list. And then we go through our swarm list with this for loop, and we call the get method on the future object to get our result which we use a structured binding from C++ 17 to get our values. And so we have the duration and the count, and then we display those values. Now, the standard future object, when we call the get method what it does is it blocks, it waits for the value to become available and that it returns that value. And so when I build and run this, it's a couple of things that we'll notice about this. First of all, we'll see that I count a lot of primes in very small amount of time. I'm running 15 parallel threads. This machine is an eight core Mac Mini with Apple's M1 processor,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=188)** so it's actually kind of ridiculously fast. This 1.6, 1.7 seconds result that I'm getting is quite unusual for a machine in this price class. For example, this is a [[Linux]] box running in my lab, running Linux on a Quad Core Intel I7, and you notice that the results are quite a bit higher. Instead of 1.6, 1.7 seconds, I've got 18 and 19 seconds. And in fact, on a [[Windows]] box here in my lab, it was as high as 20 seconds. So, your results will vary. You can expect your results to be quite a bit different from the results in terms of the amount of time that it takes, the timing results to be quite a bit different than those that I'm getting on my M1 Mac Mini. So, I'm just going to close that output window here for now, and I want to talk about this future object. The standard async function returns a future object. The future object is used to return objects from the thread. And we have a list of these future objects to keep track of the various. The future object is generated by a promise object, and the async function is essentially a wrapper that creates a thread object using this promise and future paradigm. Let's take a look at what this looks like without async, if we were to do this
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=280)** just with thread and promise and future. This is promise.cpp from chapter six of the exercise files, and this is the equivalent code using thread with promise and future. And you notice that our count primes function needs to look a little bit different. It actually takes a promise object as a parameter, and the promise object is constructed with the prime time template parameter. The function itself returns void, so it does not return a value. Instead, what it does is it sets the value in the promise object. And down here in main, we still have our list of future objects. Looks exactly the same, but the way that we call it is now quite a bit more convoluted. The first thing we do is we construct a promise object, an empty promise object, and then we create a future object from that promise object using the get future method. And then we move that future object because it cannot be copied. We move that future object onto our swarm list. And then we create a thread, we construct the the thread with the count primes function and the max prime parameter and the promise object. And again, we move the promise object rather than copying it, and then we call detach on the thread. And the [[Representational State Transfer (REST)|rest]] of this is exactly the same, but all of this is what's wrapped up
>
> **[6:14](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-async-function-18746385?u=76281980&t=374)** in a standard async call. So when I build and run this, you'll notice that we get exactly the same results and very similar times. And so we can see that the purpose of the async function is a helper function to simplify the use of promise and future objects. For many purposes, it makes the use of promise and future much easier, and this use of async is far simpler for most applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** 1.6 (2), 1.7 (2)
> **Exercise Files:** exercise files (2), template (2)
> **Definitions:** is an  (2), is a  (2)
> **File Paths:** async.cpp (1), promise.cpp (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Mutex and lock](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=0)** - [Instructor] The term mutex refers to mutually exclusive access to shared resources. A mutex is commonly used to avoid data corruption and race conditions when multiple threads of execution attempt to access the same data. A mutex will typically use locks to restrict access to one thread at a time. This is mutex.cpp from chapter six of the exercise files, and you'll see I declare a mutex object here called animal_mutex. And there's a class called Animal which will use the mutex. This is like the Animal class we've used in other exercises, with the difference that we now connect animals to their friends. And so we keep a list of friends of each animal in this standard list. And I use an alias called friend_t because I refer to that throughout the class, and this makes it more convenient. We have a member function for adding a friend. So this adds a friend to the animal, and it does it bilaterally. And so it actually adds the other animal to this friend list, and it adds this animal to the other friend list. And in order to keep this all straight, it uses a lock_guard with the mutex to coordinate this activity so that we don't have multiple animals trying to add each other at the same time
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=93)** and getting their wires crossed. So lock_guard is a class that acquires ownership for the current thread, and it refers to a mutex to keep that ownership straight. Lock-guard will block or wait if ownership is not available. And lock_guard follows RAII protocol, which is important. This is called resource acquisition is initialization, or RAII. And what this means is that when the lock_guard goes out of scope, the lock will be released. And so that makes it simple to use and actually hard to mess up. And so RAII is important for classes like this. We also have a delete_friend that does the same thing. It deletes both sides of the friendship, and it locks with a lock_guard. We have, you know, is_friend to test if it's a friend. That doesn't need to be locked 'cause it only reads. We have find_friend, likewise. And we have print friends, pfriends. And we use the lock on this so that we're printing it in one state. And we make sure that, during the course of the printing, these relationships are not changed during the course of the printing. And so we use our lock_guard there as well. Now, down here in main, this is actually pretty straightforward. We have unique pointers, that we create four animals with unique pointers. And then we call add_friend on the different animals to add their friends. And we're using async for this.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=188)** And so we have future objects, right? And we call wait on each of these to make sure that they're all done before we try to print. And then we print them again using async. So all of this is asynchronous, and all of this is happening in threads. We wait again for all of that to be done. Then we delete a friend relationship, again, using async and wait, and then we print them again using async and wait. And so I'm going to go ahead and I'm going to run this. And you can kind of see what's going on. All this is happening in separate threads. Each one of these actions is happening in separate threads. We add the friends, we print the animals, we delete a friendship, and we print the animals again. All right. And you see that all of that is straight. And we can see that if we come up here and we comment out our locks, right? And so I can comment out this one, I can comment out this one, and I can comment out this one. And we'll go and run this again. And you can see that our output gets a little bit scrambled. Doesn't look scrambled that time. If I run it again, now it looks more scrambled. When we print the friends, they come out a little bit scrambled. And so that's going to happen different every time that I run it. And that's because we're not using our locks properly. And so I'll close that output window. I will remove our comments to restore the locks. And run it again,
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/mutex-and-lock-18744507?u=76281980&t=281)** and we see that our output is, again, how we expect it. It's important to understand that a mutex does not lock data. Rather, it blocks execution. The locks block execution to enforce mutually exclusive access to data.

> [!info]- Semantic Content
>
> **Code Identifiers:** lock_guard (6), animal_mutex (1), delete_friend (1), is_friend (1), find_friend (1)
> **Env Vars:** raii (3)
> **Definitions:** is a  (1), refers to (1), is called (1)
> **CLI Commands:** make (2)
> **File Paths:** mutex.cpp (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Atomic variables](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=0)** - [Instructor] The atomic class guarantees a single primitive object to be atomic. Writing to the atomic object is controlled and reads may occur simultaneously. Atomic may be used to synchronize access among different threads. Standard atomic requires a trivial type. All primitive types are trivial, and atomic is typically used with primitive types such as bool, int, float, or double. This is atomic.cpp from chapter six of the exercise files. You'll notice we have the atomic header and we declare three atomic values up here at the top. Atomic variables are often declared at the global level. Atomic bool and atomic unsigned 64-bit integer are predefined specializations of which there are many. Here on the CPP reference page for atomic, you'll notice if we scroll down here a bit we see type aliases for many, many different types. And if we scroll all the way to the bottom, we'll see that there's an atomic flag which is a special lock free boolean atomic type, and I can click on that and we get the details of atomic flag. And going back to our code, you notice that I have an atomic flag called winner.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=96)** Atomic flag is a special lock-free atomic with notification features that make it well suited for asynchronous operation. We scroll down here a bit, you notice I've got a few utility functions like make commas and sleep in milliseconds. We have a function called countem which is a simple loop that we'll use for testing threads. It simply counts until it's notified that one thread has won the race. And we use our winner atomic, the atomic flag. If we finish the loop, we test and set winner, which is one atomic operation which tests and sets the flag. And if we didn't have a winner before and we set it, then we send a notification and we print out our message that we won. And then all of the other countem loops, they test if somebody else has won, they test the winner flag. And if not, they keep counting, and if so, then they fall through. Down here in main, we spawn max threads and max threads is defined up here as being one million, or that's max count, max threads is 100, and each one counts to a million. And then we in-place them on the back of a list, and here's our list with thread objects. We sleep for 25 milliseconds
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/atomic-variables-18751129?u=76281980&t=190)** to give the threads a beat to finish spawning, and then we set our ready flag to true and our ready flag is, of course, defined up here as an atomic bool and it gets tested in our countem loop, or just before the loop, rather. It tests if we're not ready, then we yield the thread. And so all of the threads are sitting there yielding to each other until we say go and we set our flag to true. So I'm going to go ahead and I'm going to run this, and you see it spawns a hundred threads, and thread 63 won. And every time I run this, I'll run it again, a different thread wins. And you'll notice that the global count changes as well because depending on which thread wins, we're accounting a different number globally. Most modern architectures provide atomic CPU instructions for performing atomic operations. Standard atomic should use [[Hardware]] support where available. Some atomic types may not be supported on some hardware. Standard atomic may use a mutex for those types, causing threads to block while waiting for other threads to complete operations. Specializations that use hardware support are said to be lock free because they don't require a mutex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** cpp (1), cpu (1)
> **File Paths:** atomic.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### [The producer-consumer idiom](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=0)** - [Instructor] The producer-consumer idiom is where one process produces data, and another consumes data using one container to hold the data. This requires coordination between the producer and consumer threads to manage the container and prevent unwanted side effects. This is producer-consumer.cpp from chapter six of the exercise files, and you'll see that we have a number of variables in global space. If you're concerned about scope and name collisions, you could put these in a name space. The mutexs are used for controlling access to the data between the producer and the consumer. The deque is a queue used for passing the data from producer to consumer. And the atomic_flag is used to notify the consumer when the producer is finished sending data. Both the producer and consumer threads, and here's the functions for them, they both use a lock guard because it's safe and convenient, and it automatically releases its lock when it goes out of scope. And here's the lock guard in the consumer. This is actually very simple. When the producer is done, it sets the finished flag, and the consumer checks the finished flag. And this of course is the atomic_flag to find up here. And down here in main,
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-producer-consumer-idiom-18749197?u=76281980&t=94)** we spawn two threads and join them both so that they both block until the main thread is finished. And I'll go ahead and I'll run this. And you can see that there's a quarter-second delay in here just so that we can watch what's happening. And we can play with the delay. Here, I have the sleep milliseconds delay time, and the delay time is set to a quarter of a second. If I want to, and you'll notice that when I run this, and I'll run it again. You can see the quarter-second delay between each piece of data that's pushed onto the queue, and each piece of data that's popped from the queue by the consumer. And so if we want to inside the consumer, we could add a little bit of a delay, and I'll just copy this one. And we can watch the producer adds data to the stack. And we'll multiply this by say three. And when I run this now, you'll see that the producer has time to put more items on the stack while the consumer waits and pops several of them at a time. So you can play around with these delays, and you can do different things with them. This is a simple example of the producer-consumer idiom. It should serve as a good outline for producing your own producer-consumer solutions.

> [!info]- Semantic Content
>
> **Code Identifiers:** atomic_flag (2)
> **Definitions:** is a  (2)
> **File Paths:** producer-consumer.cpp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 7. Other Subjects

[↑ Back to Table of Contents](#table-of-contents)

#### [Initialization](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=0)** - [Instructor] We know that it's important to initialize variables as soon as they're declared. C plus plus offers a variety of initialization techniques. Let's take a look at some of the most common this is initialization dot CVP from chapter seven of the exercise files. And we're just going to come all the way down here to main and we're going to start here 'cause all of this other stuff, we'll get to that. But for right now, let's just look at some simple examples. Here we have a variable, an integer named X and it's being list initialized with an empty list. So these curly braces are called an initialization list. And since c plus plus 11, this is considered the best way to initialize a simple scaler integer is with an initialization list and the empty brackets is a special case. This will zero initialize any primitive value. And so here initializing this integer and I'm giving it a value of zero. And when I go ahead and I run this you'll see that X is zero in my print statement there. Now I can give it a value of five and put that inside the curly braces. And this is called a list initialization and it's considered best practice for a variable of this type. I'm going to go ahead and I'm going to run this and you'll see X is five the value that we expect. Now the alternative to list initialization is
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=95)** the old style copy initialization. And what this does very technically is it takes that five and it makes a copy of it and puts it into the X. Now, for all practical purposes, that's pretty much the same as what happens with list initialization. And when I build and run this you see that the value is five as expected. But what's wrong with this is because the copy initialization is inherited from C and there's so much legacy code that uses it. C plus plus is not allowed to really fix it and it has a serious flaw. If I say 5.1 here that's not a compatible value with the in integer. And when I build and run this you'll see that it gets narrowed. This is called a narrowing conversion. It says X is five. And that's the expected behavior in copy initialization in the C language and in the C plus plus language since forever. And yet that's a problem and it leads to bugs, right? And so if I try to do the narrowing conversion with a list initialization, and let me go ahead and get rid of this equal sign here, now I get an error. It says type double cannot be narrowed to int in initializer list. So the initializer list doesn't allow the narrowing conversion. It doesn't compile. This is an error condition. And that's really the major reason that
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=190)** list initialization is the preferred method of initializing this type of a variable. And when I say this type of a variable I mean primitive variables like ints and longs and doubles and things like that. Initializing objects from a class is a different thing. And we're going to get to that in a moment. But first I want to look at one more special case of the empty initializer list. Now, the empty initializer list, you remember it. It's guaranteed the zero initialize any primitive value. And so when I build and run this you see we get the X is zero but what happens if I say cons, character pointer X do I get an empty string? No, I do not get an empty string. What I get is a null pointer. And an null pointer is a bad thing. We're not even going to run this code because that null pointer could point to anything. And this is how you get memory leaks and bugs in your code. So you need to remember that this zero initialization is initializing this primitive value correctly but this primitive value is not a string. This primitive value is a pointer to a character. If I want an empty string I need to actually give it an empty string. And now I can build and run this and we get X's and empty string. Now where I want to go next is I want to go to vector. And you'll notice up way up here at the top that I have included the vector header. And so we're going to come back down here
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=286)** to main and we're going to construct a vector object. And so I'll say standard vector of int and we'll call it X and we will zero initialize it with the empty initializer list, the empty brackets. And I'm going to call, we have a function up here I believe it's this one here, pvec which prints a vector pvec. And so I'm going to come back down here to main and instead of this print, I'm going to say pvec and give it our X. We have empty constructed we've constructed an empty vector, right with our zero initializer list, our empty initializer list. And I'm going to go ahead and build and run. And you see that it says that the vector is empty. And that's what we expect. We can give it a couple of values we can give it a five and another five. And I build and run this. And we have two fives. And these were constructed with an initializer list with two values in it. But here's the thing to be careful. If instead of these curly braces, I give it parentheses what do we expect is going to happen here? Do we expect we're going to get two fives? Well, we'll be surprised if that's what we expect because what we get is five fives. So this is calling an entirely different constructor on the vector class. It's calling a constructor where the first value is the number of elements to initialize and the second value is the value to put in there. And I'm just going to test that theory
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=379)** out because I may or may not have that, right? If I say five seven, yes, I get five sevens. But I have to remember that that's not necessarily what we expect. And that's why we have sites like CVP [reference.com](https://reference.com) where we have the reference documentation for all of these classes in the STL. And we can look up and we can see what all the different constructors actually do. And so when we use the parentheses it calls a different constructor. Then if we use the curly braces and if we use the curly braces here we'll get a vector with two values, a five and a seven. So for this purpose I've created a function in here called initialize this and we're just going to call that function and but first I'm going to explain it to you a little bit. I have a class up here called thing. And this thing, it's a template class. And so we're going to use it with editor integers mostly. And it keeps a state. And really its whole purpose is that it has a number of different constructors. Some of them are fairly predictable and some of them are outright weird. And the reason for that is that I want to emphasize the fact that some people will tell you always construct objects with an initializer list. And that is not true. As we saw with the vector. Sometimes you get unique results with a initializer list and yet different results with parentheses. So you have to know what your constructors are
>
> **[7:54](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=474)** and how they work in order to know how to properly initialize an object from a class. All right, so we're going to come down here to our initialize this function, and I'm just going to comment out everything but the first little block. And we're going to take these one at a time and we'll comment all of that out. And we're just going to look at this first one. And this first one we're going to construct it with an empty initializer list. Now the case of the empty initializer list we'll call the default constructor in most classes. And so here's our default constructor. And what that default constructor does is it prints out default constructor and it sets the state to zero right down in our initialize, this function. We call this status function on the object and it'll print out that status. And so I'm going to go ahead and build and run and you see that our status is zero and our value is zero and we've called the default constructor. So that's pretty much what we expect with the empty initializer list. Now for our second constructor, we're constructing it with an initializer list with the value seven in it. And when I build and run this, you'll see it says initializer list seven. The status is list constructed with the value seven. So let's see how we get that. So our initializer list constructor, it takes an initializer list object, which is a specific object, and then
>
> **[9:29](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=569)** it does things with that list. The first thing it does is it prints out all of the values in the list and it prints a new line after that. So they're space separated and it's all very nice. In this case, it's just printing out that one value cause there's only one value in the list. And then what it does is it looks at the size of the list and it sets an iterator. This is an iterator that it's setting to the beginning of the list, but it works like a pointer. And then it checks if the size of the initializer list is greater than one, then it advances that pointer to halfway through the list and it sets the value of what that iterator is pointing at, and it sets the state as list constructed. So it does this weird stuff, right? And sometimes classes do weird stuff. Let's look at the next one. The next one, oops, accidentally moved our screen. There we go. The next one, initializes with parenthesis. And so this calls what's called a copy constructor. And let's see what it does. I'm going to go ahead and I'm going to run it. And you see it says copy constructor value 42 copied value. And if we come up here into our class, our copy constructor here and it simply copies the value into our element. Very simple and pretty much what we would expect with a copy constructor. Next, we call it
>
> **[11:02](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=662)** with an initializer list with five values in it. And you remember all that weird logic we had in our initializer list. So it's going to take the middle value, right? And I'm going to run this and it says initializer list with those five values list constructed value three. And if I do this with two values well we're doing an integer division there to get the halfway point and we actually end up with the second value. And so again, you know, you need to look at it and you need to understand how it works because you're going to get results that you may not expect if you don't understand your constructors. And then finally, our sixth one gives us two values here. And this is the really weird one. Okay, it says specific constructor one and two undef and value zero. So let's take a look at this specific constructor. Our specific instructor takes two values and the first value is a size T. And it checks if it's less than 10. And if it's less than 10, it just returns which leaves the default value. And that's why we get this value of zero and it leaves our statuses undeaf. If instead, I change this to be greater than 10, let's see I'll put in a 15 here. Then it'll construct it. And let's look at the logic here. It'll just set the value to the second one and so it just ignores that first value except to see if it's less than 10. So when I build and run, now you see that our our value is to, and our status is specific value. So constructors can be weird depending
>
> **[12:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/initialization-18748260?u=76281980&t=755)** on how the class was built, what its purpose is what things it needs to do, and you know the mood of the programmer the day that he wrote it. So it's always important for us to understand the constructors in our objects when we're initializing them. C plus plus has several options for different kinds of initializations. Understanding these options will help you write safer code.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (13)
> **Definitions:** is a  (7), is called (2), is an  (2), we call this (1)
> **Env Vars:** cvp (2), stl (1)
> **Exercise Files:** exercise files (1), template (1)
> **URLs:** [reference.com](https://reference.com) (1)
> **Versions:** 5.1 (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** go to (1)

#### [Structured bindings](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=0)** - [Instructor] Structured bindings make it easy to unpack the values of a structure into separate variables, improving the readability of your code. This feature was introduced with C++ 17. This is struct-binding.cpp from chapter 7 of the exercise files, and you'll notice down here, we have a structure called thing, with three elements, an integer, a double, and a constant character pointer for a C string, and they're named alpha, bravo and charlie. and down here in main, we construct a thing object called x1, and it has our three values of being constructed in an initializer list. So, we have 42 for the int, 73.2 for the double, and "hello, earthlings!" for the C-string. Then, we have the same values in a tuple, and you see our tuple is initialized with the template parameters int, double, and const char pointer, and has the same values in a initializer list, and then we have a pair, which is the first two values in it, an int and a double. I'm going to go ahead and I'm going to run this, and we'll see how the structured binding works because this is really, actually, pretty cool. So, I build and run, and I'm going to scroll up here to the top, so we can see this first section that says struct, and you'll notice here, I have auto, and in square brackets, I have three variable names, a1, b1, and c1,
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=95)** and I'm assigning it from x1, and x1 is our thing object, and that's based on this structure here. So, instead of dereferencing it from x1.alpha, x1.bravo, x1.charlie, I'm able to just put them directly into three variables, which presumably would be named, you know, whatever makes sense in the context of my code. So, a1, b1, c1, and then I can use them directly in my print statement, and so this is called a structured binding, and this is how it works. You always use auto, and you always use the square brackets, and you put your variables in the square brackets, and you assign it from your object. This works just as well from a tuple, and if you've ever used tuples, you understand those can be a little bit of a challenge to dereference, right? And I can just drop them right into these variables with structured binding, and I get exactly the results that I expect. Same thing with a pair. Here's x3, our pair, and we have our two values, a3 and b3, and we're printing them out like that, but the cool thing here is that by using a reference with the auto, now these variables a3 and b3, they're just references to the values inside the pair, and this works with the tuple, it works with any of these. And so I can actually come down here, and I can modify those values inside of x3, and take the structured binding
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/structured-bindings-18747301?u=76281980&t=191)** into brand new variables, and get these brand new values. So, we have the original pair here, 47 and 112.5 and the modified pair 212 and 500.9, right there. So, when you use references with your structured binding, your references are the exact variables inside of the structure. You can do the same with a C Array, and so here's a C Array, an integer array with five elements, and it's called x5, 1, 2, 3, 4, and 5, and I do the same thing, a5, b5, et cetera, and print them out, and we get our result right here, 1, 2, 3, 4, and 5. In fact, you can do the same thing with a C string. Here I have a C string with the [[Microsoft Word|word]] four, and there's four letters in the word four, but there's five elements in the array, right? Because the fifth element is the null pointer, and here I use my structured binding, and I get my values right there. And you'll notice our C string, there's our 0 terminator, and all of our hexadecimal ASCII values. So, structured bindings make it much more convenient to use structures like pairs, tuples or any contiguous primitive structure, like a struct or an array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Versions:** 73.2 (1), 112.5 (1), 500.9 (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (1), template (1)
> **File Paths:** struct-binding.cpp (1)
> **Env Vars:** ascii (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is called (1)

#### [Random number engines](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=0)** - [Instructor] The random header provides a selection of random number generators, each with different strategies and properties. In this video, we compare the different options by creating a histogram of their output. This is rng.cpp from chapter seven of the exercise files. And we include the random header here, which has the various random number generator classes. We have a template function called histogram, which takes a random number generator class as a template argument. We have a number of constants here, which control how the histogram works. And down here in main, we have various calls to the histogram function with various random number generator engines. A lot of these are commented out, and we'll look at those in a minute. We're going to start with the two most common. And for most purposes, 9 out of 10, maybe 99 out of 100 purposes, one of these is going to be your best choice. The default random number, or rather, the default_random_engine, is usually going to be the one that's picked by your library that has the most evenly distributed output, balanced with requirements of CPU and memory and those things. And so for most purposes, that will be just fine. Let's go ahead and run this and see what the output looks like. And this will give you an idea of how the histogram works, and how you can make your choice of random number generator. So I'm going to go ahead and build and run this. And you'll see we have our two random number generators
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=96)** that we have uncommented in main. We have random_device and default_random_engine. You can see they have very similar properties. And if I run this several times, you'll see that their properties are more or less very similar. And in fact, default_random_engine is probably the random_device, which is the [[Hardware]] random device, at least on this machine. You can manipulate the histogram by changing these constants. If I increase the number of samples from 1,000 to, say, 100,000 and build and run this, you'll see that our histograms now smooth out a whole lot. And in fact, they do look identical. I'm going to build this and run it again. You can see they're very, very similar, and they're very smoothed out. Obviously, the more samples you take, the smoother the histogram is going to be. And the fewer samples that you take, let's just make this 100 instead of 1,000, you'll see that the more ragged our histograms will look. And by manipulating these options... The number of partitions is 10. You'll notice that we have 10 partitions here. And by manipulating these options, you can get a good idea of what your histograms look like. I'm going to leave it at 1,000, which I just decided, perhaps arbitrarily, that this was a pretty good representation of the histograms. We can uncomment the [[Representational State Transfer (REST)|rest]] of these, and you can just briefly see what they look like.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/random-number-engines-18746378?u=76281980&t=189)** I suggest that you run this code on your own machine to see what all of these look like. And I'll uncomment those, and we'll build and run. And you can see there's knuth, which is from "The Art of Computer Programming" by Donald Knuth, ranlux. There's a number of them here, and they all have different properties, and they all work in different ways, and they all have different efficiencies, and they all have different best-case scenarios. Again, for most purposes where you're going to need a random number, you're going to want to use one of these two: random_device or default_random_engine. But if you want to see what your different choices look like, this histogram function is a great way to visualize that so you can get an idea of how the different random number generators operate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** default_random_engine (4), random_device (3)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (2)
> **File Paths:** rng.cpp (1)
> **Env Vars:** cpu (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The chrono library](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=0)** - [Instructor] The chrono library provides tools for measuring and reporting time and intervals. Most of these classes and functions were introduced with C++ 11. This is chrono.cpp from chapter seven of the exercise files. We're going to start down here in main because I want to talk to you about the different types of clocks that are available. Here, we're getting the current time, and we're printing it out in the print statement here. And you notice that we're using a clock called system_clock from the chrono library. And there's a function in system_clock called now, which gives us a time object, which we can then use in our formatter. And when I build and run this, you'll see that the time comes out right here at the top, and it says, "system_clock::now is," and that's the time that it gives. The system clock is the best clock for finding the current system time. It is not terribly useful for measuring intervals. I'm going to close the results window here. We have up here a timer function. And you'll notice I'm using a concept to restrict the auto parameter to something that's callable. What this timer function does is you pass it a function, and it will call that function and it will time it. And for this, it uses this steady_clock,
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=96)** which is usually the best choice for timing things. This is a clock that's considered monotonic, which means that it cannot decrease as time moves forward. This is the clock that's best for measuring intervals. And so I use an alias here, and I call it with the now function, and then I run the function. And we're actually calling this count_primes function. And then we measure the time now after, and we subtract time one from time two. And we return that difference in time. All right. And the type we're returning here, it says seconds. That's an alias up here that's a duration object. And there's a number of different duration objects available in the chrono library. And they're basically all the same duration object, but they're using a different ratio. And there's actually a separate ratio library, and you can create your own ratios. So here I've created one for frames per second. 24 frames per second if you're using your code in a movie or something. So let's run this code again, and we'll take a look at these different elapsed times. So we're counting primes up to a certain value. We've found 12,252 primes in the range. And we have time elapsed in seconds, milliseconds, microseconds, and frames per second. And that's all these print statements here. So the format library is capable of taking a chrono object, as we demonstrate down here,
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=190)** but it requires extensions to do this, and it's not part of the standard in C++ 20. In C++ 23, I think it will be part of the standard, but for now, know that these lines here may or may not work, depending on the format library that you're using. We can, however, get the count of seconds or the count of milliseconds or the count of microseconds using these duration aliases that I have included up above. And so for this purpose, we have milliseconds, microseconds, and frames per second. And you'll notice also that I'm using the Greek letter mu here for microseconds. As part of the standard, your format library should handle Unicode. And yet, on some platforms, in particular, [[Microsoft]] [[Windows]], you may need to set a code page or something to get that to work. One more note here. You'll notice that the system clock print statement has this formatter specification. And this may look familiar if you're an old C programmer like I am. This is actually taken directly from the strftime function from the C standard library. So here on [cppreference.com](https://cppreference.com), you can look up strftime, which is in the C standard library. You notice it's in C, date and time functions. And you get all the details on the specifications for that format string. And you can actually do quite a bit with it. And most of this works.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-chrono-library-18745414?u=76281980&t=284)** On some operating systems and in some contexts, some of this may not work as expected. But here we use these very common options, and we're able to print a date and time and time zone very simply. The clock classes and the duration class are at the heart of the chrono library. Understanding these two simple functionalities will allow you to make good use of the chrono library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Windows]] (1)
> **Code Identifiers:** system_clock (3), steady_clock (1), count_primes (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** chrono.cpp (1)
> **CLI Commands:** make (1)
> **URLs:** [cppreference.com](https://cppreference.com) (1)
> **Documentation:** specification (1)
> **Exercise Files:** exercise files (1)

#### [The filesystem library](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=0)** - [Lecturer] The purpose of the file system library is to normalize file system operations across platforms. Unlike the old C-style file system functions, the standard file system library seeks to bridge irregularities between POSIX, Unix, [[Windows]], and other file systems. This is file system dot CBP from Chapter seven of the exercise files. We include the file system header, which has the file system library, and we abbreviate the namespace of standard file system 2FS, because we're going to be using that namespace a lot, and it's just more succinct. Here's our format style print function, and a format or specialization for the file system path class. The path class is probably the most common class we're going to use in the file system library today, and it has this convenient string function, which makes it very easy to simply specialize the formatter for it. And down here, near our main, we have a couple of constants. We have a file path fp, which is a path to a file that does not exist. And we have a home directory. And the purpose of this is so that we can have a common place to work from in the file tree. And so, you'll want to put the path to your exercise files here. Your path will be different than mine,
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=93)** and so this will not work unless you change this to the path to your exercise files on your system. Down here in main, we create a path object based on this fp string, which is a path to a file that does not exist, and then we print that path using our format or specialization, and then we check to see if our home directory exists, which is this directory here, and we print it does not exist and exit if it doesn't. And so, I'm going to go ahead, and I'm going to comment out the [[Representational State Transfer (REST)|rest]] of this, and we'll go ahead and run this much of it, build and run. And you see, there's our fp path, and we're calling the path object p, and we print it here, and we check to see if the home directory exists, and it does exist, so we don't get that error message. If we change this to something that does not exist, like if I put in an X here, and we go ahead and build and run this, you'll see we get our error message that path does not exist and that comes from there. And we're testing it with the exists function from the file system library. So I'm going to go ahead and remove that X there, and we'll uncomment this try-catch block.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=179)** So the purpose of the try-catch block is to demonstrate the file system error exception class that comes in the file system library. And before we get to that, though, let's just go ahead and comment out some of these and work on these one at a time so you can see how they work. All right, I'm going to go ahead and build and run this. And you see that we have current path, and you see that it's this crazy path here. Yours will be different. This is the path of the executable under the [[Xcode]] IDE that I'm working with here on this Mac. And on any system, this executable path is going to be different. And if you're using an IDE, say, on a Windows machine or on a different machine, you'll have a very different path. And so, because that path is not very predictable, we're going to change our current path to our homedir, and we do that with the current path function. And if I go ahead and uncomment a few more lines here, we'll print the current path after we change to our homedir. And then we'll also print an absolute path based on our p path, which again, is this file that does not exist. But you notice that's a relative path, and so by using the absolute function, it'll create an absolute path based on our current path and the relative path. So I'm going to go ahead and run this, and you'll see those results. Now our current path is our exercise files
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=272)** and our absolute path with that relative path added to it looks like that, so that's exactly what we expect. And of course, if you're on a different operating system, these paths will look different. Like if you're on Windows, they may have a drive letter and a colon before the path. They may use back slashes instead of forward slashes. But the point is, is that the path object, it parses out that path, and it puts all of the different parts of it in a structure so that it can construct a path representation that works for your operating system. All right, let's look at a couple more functions here. We have concatenate, and that concatenate is done with a plus equals just like it is with strings. And you'll notice that its result is the same as with strings. It simply takes these two strings and puts them together and creates a path out of that concatenated string. Or we have this other function with a slash equals that adds the second part to the directory tree, rather than simply concatenating it as a string. And so, when I go ahead and run this, you'll see that we have testdirfoo without a slash, 'cause that's just been concatenated as a string. And here, we have a path object with that foo.txt added to the tree, and then printed out as part of a directory tree. And so, that's the slash equals operator with a path object. Let's take a look at the canonical function,
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=365)** and I'll go ahead and I'll run this, and you can see what it does. I pass the canonical function a path, and in this case, it's just a single dot. And on most operating systems, a single dot means the current directory. In this case, it's our exercise files directory. And the canonical function will print a canonical version of that, or rather, it returns a path object with that canonical version, and that looks like this on this machine. It's our directory to our exercise files. And if I give this canonical function something that does not exist, it cannot make a canonical path to an object that doesn't exist, 'cause there is no canonical path to an object that doesn't exist. And so, we'll get an exception, and we can see what our exception class does here. Our exception class returns several objects. It returns a what, which is the error message. And here, it says, in canonical, no such file or directory. And it also gives us the two pieces of information that it took to try to create a canonical path, took our current path and what we passed it. And it says, no, that doesn't exist when we put those together. And those two path objects are also available as extra objects from the error class. So I'll put that back the way that it was. And then we're going to look at directories. I'll uncomment this, and I'll go ahead and I'll run it.
>
> **[7:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=458)** And you see that I'm adding to the tree. I'm concatenating to the tree with the slash equals operator, this chap zero one, which is the first chapter of our exercise files. And I create a path out of that called dirpath, and I pass that to the printdir function, which we have up above. And that will print out all of the files in the directory, prints out all of the directory entry names in the directory. And that printdir looks like this. It's actually very simple. It uses this directory entry class from the file system namespace, and it's called directory entry. And we're aliasing it to this de, and we create a vector of those directory entry objects. We have here a little lambda function that we're using as a comparison operator for a sort, and we'll see that sort down here in a moment. We check if the path exists, and if not, we return, and we check if it is a directory using the is directory function. And if it is a directory, then we iterate on the directory using this directory iterator function, and we put all those directory entry objects onto our dir vector right up here. And then, we sort the vector, and we print it out and print out a new line. And that gives us this result down here, which we see there.
>
> **[9:17](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-filesystem-library-18750197?u=76281980&t=557)** The file system path class is at the core of the file system library. It provides normalized file name and directory path representation across disparate environments. A path object may represent a file, a directory, or even a non-existent or impossible object. The file system library carries a rich set of information through its directory entry and related classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Xcode]] (1)
> **Exercise Files:** exercise files (7)
> **Env Vars:** ide (2), posix (1), cbp (1)
> **Definitions:** is a  (4)
> **File Paths:** foo.txt (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [lecturer] (1)


### 8. Other C++20 New Features

[↑ Back to Table of Contents](#table-of-contents)

#### [The format library](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=0)** - [Instructor] C++ 20 introduces the new format library which returns a formatted representation of its arguments as a string. The new formatter uses a [[Python (Programming Language)|Python]] style formatting string with concise syntax, type safety and excellent performance. This is format .CPP from chapter eight. Of the exercise files, we're including the format header which has the format library also IO stream, string view and numbers. And you'll notice from the numbers library we're using the value pi. We'll also be using Cout and the format function in this example. And we have a template class for a fraction with enumerator and a denominator. We'll get to that a little bit later. We also have our format style print function which we've been using throughout this course. This uses the new formatter and it uses this V format function to take the arguments and turn them into a string that can be output by outputs. In this case, which is a very very low overhead fast printing mechanism inherited from C. This is a format specialization for the fraction class that we have up above the templated fraction class. You notice that this is also templated with a type named T and it overloads a formatter class and it inherits also from a formatter of INT in this case I always use INT for this. For most specializations, it really doesn't matter
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=93)** which of the formatter specializations you inherit from. And in this case, I'm inheriting from INT and because I'm using a templated class I'm specializing for a templated class. I need the template parameter here. I would still need the template keyword with an empty argument list, but in this case I have a type name and you can simply use this as a template of how to do this. All you need to do is add your type here and down here. Use your object to get the values that you need and format them with a standard format specification. And this will work in most cases if you need anything more complex. There is online documentation on how to do that, but in most cases something like this works just fine. Coming down here into Main, we have some variables. We have an integer, we have a C string. We have a standard string view object and we have a double with the value of pi. And then we print out one of our strings using Cout and format. Now in C++ 20, you have the format function and that's a very common way to use the formatter in C++ 20, the format function returns an STL string which you can then pipe into Cout using the overloaded left shift operator that Cout uses for this. And that works in many cases. The disadvantage there is Cout.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=187)** Cout is cumbersome, it's slow. It takes up a lot of space and memory. And in fact part of the purpose of the format library is to not have to use that anymore. And so that's why I'm using this format style print function in all of the code. And I use it in all of my code too. That's for console applications where I need to print something. And this is far more lightweight than this. And so for the [[Representational State Transfer (REST)|rest]] of these we're just using the print function which works exactly the same. It uses the same formatter, it uses the same format strings. And so I'm going to go ahead and run this and we'll take a look at each of these bits of output against the code that produces them. So here is Hello Earthlings. And you notice that my human strings says earthlings and I have a new line there and I'm using format and Cout for this and it prints it here. And here we have it with the print function instead but it works exactly the same. And we have two arguments. We have human and alien and it says, "Hello earthlings we are Vulcans," because alien is a string. And you notice it's a different type of string. It's a string view. The formatter is completely type safe. And because of the way that it uses parameter packs to pass the variables it knows the type of those variables. And so unlike print F from C where it's very easy to mismatch your parameters and your strings with format, it's not possible to do that. And so we have a really tight safe system.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=281)** We can also use index parameters. Here we have a one and a zero. The parameters are indexed zero based. And so this actually turns it around and it says "Hello Vulcans, we are earthlings" and we see that down here. Hello Vulcans we are earthlings. The formatter in the specification has to be Unicode safe and so we can use Unicode in our code. Of course, this depends on the environment that we're running in. We can't force your environment to be Unicode safe particularly on [[Windows]]. You have to select the correct code page in order for it to be Unicode safe. And so this will only work on systems that are Unicode compliant. And so here we have pi is and our parameter curly braces and we have our floating point pi. And you notice that down here it says pi is and pi to a good number of digits. In the next line we specify a floating point precision. And so you need this colon here and everything to the right of the colon is a precision. And in this case we're saying to five places. And so here we have five digits of pi. Starting with the three we can still use the index parameters. And so here we turn them around, we have the integer and you notice the colon, the colon is actually optional when you don't have anything to the right of it. And so I could take that out and it'd work just fine. And then we have the zero index for the pi. And again, we have its precision there to five places. And it says INT a is 47 and pi is five places of pi. We can also specify field width and alignment.
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-format-library-18748263?u=76281980&t=381)** And you can do all of these things with the IO stream library but it's very confusing to do them with all of the modifiers and having to reset some of them and not having to reset other ones. This makes it very, very simple to do things like this. And so here we specify our filled with as 10 places and it's left aligned and it's filled with asterisks. And here we have our INT A 47. We have 10 positions. On the right hand side it's filled with asterisks because it's left aligned and down here it's filled with zeros and it's right aligned. So we have 0, 0, 0, 0, 47. Here it's centered and by default it's space filled since we didn't specify a fill character. And here it is centered with an underscore. And so here we have centered with spaces and centered with underscores. We can specify hexadecimal, octal, and decimal. And you notice that our hexadecimal has a capital F. If we change that to a lowercase X and run it again you'll see that we now get a lowercase F and we have octal and decimal. And here's our fraction using long for the numerator and denominator. And here we printed out using our specialization. And you notice it says fraction three over five. The formatter will forever change the way that we do character formatting in C++. When used with the C++ 23 print function it will significantly reduce the need for IO streams and Cout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1)
> **Env Vars:** int (5), cpp (1), stl (1)
> **Exercise Files:** template (4), exercise files (1)
> **Definitions:** is a  (4)
> **Documentation:** specification (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### [The spaceship operator](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=0)** - [Instructor] The three-way comparison operator, commonly called the Spaceship operator because it looks like a flying saucer is new in C++ 20. The purpose of the Spaceship operator is to provide a unified comparison operator for objects. This is spaceship.cpp from Chapter 8 of the exercise files. And the Spaceship operator is not what you might initially think. We don't use it to compare values. Rather we use it as a comparison operator in a class. So here we have a class called num, and it's simply a wrapper around an integer. And we have a number of comparison operators. This is the standard set of comparison operators that you might have in a class. And down here in main, we're testing all these comparison operators with static_assert. And because we don't have any errors over here, we know that those are all passing. If I was to change one of these, for example, you'll notice that in a moment we get an error here, static_assert failed due to the requirement blah, blah, blah. And so when I put it back, then our error goes away. So, all these static_asserts are passing because 7 is less than 42 and seven is equal to seven, et cetera, et cetera. Now, because of the Spaceship operator, we can replace all these comparison operators with one. And so I can come in here and I can say auto operator, and the Spaceship operator const num reference
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=98)** right-hand side const = default. Okay, so let's unpack this. Oh, let's first correct it. There we go. The Spaceship operator is a strong ordering object from the compare header, and you'll notice that up here we have the compare header. You can't use it as a normal operator. Instead, what it's for is for use as a comparison operator in a class. This uses a new feature of C++ 20 called rewritten expressions. And so when we set it to the default, we no longer need all of those other operators. In fact, we no longer even need non-member operators for comparisons on the left-hand side of an operator. This one operator overload will do the entire job, and you'll notice that all of my static asserts are working, I can build this and run it and everything is as expected. So, this works for simple scaler types, like this integer wrapper. For more complex types, we need to add an equality operator overload, and we can no longer use the default. This is Spaceship-frac.cpp from Chapter 8 of the exercise files. In this case, we have a class that has two scalar values, it's a fraction. And because of this, we can no longer use the default Spaceship operator but we can still use the Spaceship operator.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-spaceship-operator-18751135?u=76281980&t=193)** We simply have to put in a comparison in the body of the function, and we also need to specify an equality operator. But other than that, it works the same, and as you can see, it still saves us a whole lot of work from specifying all of those separate operators, and even from having non-member operators for comparisons on the left-hand side of the operator, and you can see, I'm going to go ahead and build and run this, that all of our comparisons, our static asserts are working as expected. The power of the Spaceship Operator is in its ability to streamline comparison overloads in your classes. It improves both simplicity, and efficiency when compared to overloading each operator independently.

> [!info]- Semantic Content
>
> **Code Identifiers:** static_assert (2), static_asserts (1)
> **File Paths:** spaceship.cpp (1), spaceship-frac.cpp (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Integer comparisons](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=0)** - [Instructor] Using comparison operators to compare different types of integers may not always produce the expected results. For these circumstances, C++ 20 has added a set of integer-safe comparison functions. This is working.cpp from chapter eight of the exercise files, and let's just come down here and create a little example. We'll take an integer and we'll give it a value of minus three, and an unsigned integer and give it a value of seven. And if x is less than y, print true.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=44)** Else, print false. Now, you would expect this to print true because minus three is indeed less than seven. When I run it, you'll notice that it prints false. The reason for this is that the minus three is signed and the seven is unsigned, and these are actually subtly different representations of an integer. Minus three is an integer, a signed integer, and integers on most modern processors use two's complement notation for negative numbers, and this means that it sets a sign bit and it uses a very large number and it's just like less than the maximum by that amount. And so we can easily illustrate this if I print a x is, and I'll cast this to unsigned, and put an x here. Need a comma, don't I? There we go. This'll cast the value of x to an unsigned integer, and you'll see, when I run this, that it is indeed a very large number that is not less than seven. Standard behavior of comparison operator is to convert the signed type to unsigned, and whether or not we think that's the best behavior, it's been the behavior since C was invented and they're not about to change it now
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=138)** and break a lot of other code that may count on it. So, instead, what we have in C++ 20 is we have a new set of comparison functions, and we'll say include utility. And instead of this x is less than y, we'll put standard compare less x and y.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/integer-comparisons-18750199?u=76281980&t=170)** And we no longer need that. And now when I run this, you'll see that minus three is indeed less than seven as we expected. The utility header provides a full complement of these functions all in the standard name space. We have compare equal, compare not equal, less, less than or equal, greater, and greater than equal. These comparison functions provide a convenient means to safely compare disparate integer types.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), means that (1)
> **File Paths:** working.cpp (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [The span class](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/the-span-class-18744506?u=76281980&t=0)** - [Instructor] The standard span class is new in C++20. It provides a simple wrapper that creates a view over a contiguous sequence of objects. Span doesn't own any of its own data. It refers to the data in the underlying structure. It's much like a string view for C arrays. The underlying structure may be a C array, a vector, or an STL array. This is span.cpp from chapter eight of the exercise files. Span adds STL container-like capabilities to this C array down here. We define the C array with 10 elements and the elements have integer values 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. And then we call our pspan function and our pspan function takes a span. And so the C array is used to construct this span and this span is used here inside the function. And so we can get its size, we can get the number of elements, the number of bytes, and we can print each of the elements in an iterated for loop. And when I build and run this, you see that it works as expected. The span class itself doesn't own the data. The data belongs to the underlying data structure. In this case, the C array. The span is just a view over the underlying data that provides some useful member functions and iterators.

> [!info]- Semantic Content
>
> **Env Vars:** stl (2)
> **File Paths:** span.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)


### Final Project and Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Final project: Numword](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/final-project-numword-18750196?u=76281980&t=5)** - [Instructor] Over the course of my career, I've used a lot of programming languages. When learning a new language, I like to have a project to work on that exposes me to the nuances of the language. One of my favorite exercises for this purpose is the numword class. I've written it in dozens of languages over the years, including several times in C and C Plus Plus. Numwords is a class that spells out a number in words. It can be useful for [[Banking]] and accounting applications and its output looks like this. It's usage should work like this. This main file is available in the exercise files as chap09/numword/numword-test.cpp and my solution to the class is in the same folder as numword dot H and numword dot cpp. Expect this project to take several hours or longer. Take your time, experiment a lot. Learning to write a good-sized class from scratch can be extremely valuable for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1)
> **File Paths:** chap09/numword/numword-test.cpp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### [Thank you](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-development-advanced-concepts-lambda-expressions-and-best-practices/thank-you-18745404?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman. The goal of this course was to provide you with a deeper understanding of the C++ language. We've covered a lot of ground with operator overloads, move semantics, lambda expressions, constraints and concepts, options and variance. Along with a thorough discussion of concurrency, threads async and mutex classes. We dove into new features like structured bindings and the three-way comparison operator. Along the way, I hope you've taken some time to experiment with the exercise files and thought about how to use these powerful techniques in your own projects. C++ is a rich and powerful language and your projects will benefit tremendously from a deeper understanding of its intricacies. I hope you've enjoyed this course as much as I've enjoyed creating it for you. So have fun and create something wonderful with C++ advanced topics.

> [!info]- Semantic Content
>
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