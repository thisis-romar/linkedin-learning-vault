---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-foundations-algorithms-22973142
url: "https://www.linkedin.com/learning/programming-foundations-algorithms-22973142"
duration_minutes: 165
duration: 2h 45m
level: Beginner
updated: 12/5/2024
learners: 128658
skills:
  - Data Structures
  - Algorithm Design
  - Programming Foundations
exercise_files: true
github: "https://github.com/LinkedInLearning/programming-foundations-algorithms-4507286/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHrmMscOqmJOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704914636714?e=2147483647&amp;v=beta&amp;t=u221U4Srj9b85W3JgUWJarMYQ_8fpP6l0uvuIPYOH08"
linkedin_topic: Software Development
learning_paths:
  - '[[The Top 10 Most Popular Courses among Engineering Professionals]]'
  - '[[Become a Programmer- Foundations]]'
prev_courses:
  - '[[SQL Essential Training]]'
  - '[[Programming Foundations- Object-Oriented Design]]'
next_courses:
  - null
  - '[[Programming Foundations- Data Structures]]'
path_nav: '[{"path":"The Top 10 Most Popular Courses among Engineering Professionals","position":10,"total":10,"prev":"SQL Essential Training","next":null},{"path":"Become a Programmer- Foundations","position":4,"total":12,"prev":"Programming Foundations- Object-Oriented Design","next":"Programming Foundations- Data Structures"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/software-development
  - topic/web-development
  - skill/data-structures
  - skill/algorithm-design
  - skill/programming-foundations
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Algorithms.md)

![Programming Foundations: Algorithms](https://media.licdn.com/dms/image/v2/D560DAQHrmMscOqmJOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704914636714?e=2147483647&amp;v=beta&amp;t=u221U4Srj9b85W3JgUWJarMYQ_8fpP6l0uvuIPYOH08)

# Programming Foundations: Algorithms

> Algorithms are the universal building blocks of programming. They power the software you use every day, whether it's a spreadsheet, a social network, or a driving assistant. Algorithms offer a way to think about programming challenges in plain English, before they are translated into a specific language like C# or JavaScript. In this course, author and developer Joe Marini explains some of the mos

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142) | 2h 45m | Beginner | 129K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Algorithms power the world](#algorithms-power-the-world)
  - [What you should know](#what-you-should-know)
- [**1. Overview**](#1-overview) (3 videos)
  - [What are algorithms?](#what-are-algorithms)
  - [Common algorithms in programming](#common-algorithms-in-programming)
  - [Measuring algorithm performance](#measuring-algorithm-performance)
- [**2. Common Data Structures**](#2-common-data-structures) (7 videos)
  - [Introduction to common data structures](#introduction-to-common-data-structures)
  - [Arrays](#arrays)
  - [Linked lists](#linked-lists)
  - [Linked lists example](#linked-lists-example)
  - [Stacks and queues](#stacks-and-queues)
  - [Stacks and queues example](#stacks-and-queues-example)
  - [Dictionaries](#dictionaries)
- [**3. Recursion**](#3-recursion) (3 videos)
  - [Understanding recursion](#understanding-recursion)
  - [Simple recursion example](#simple-recursion-example)
  - [Calculating power and factorial](#calculating-power-and-factorial)
- [**4. Sorting Information**](#4-sorting-information) (6 videos)
  - [Overview of sorting](#overview-of-sorting)
  - [The bubble sort](#the-bubble-sort)
  - [The merge sort](#the-merge-sort)
  - [Implementing the merge sort](#implementing-the-merge-sort)
  - [The quicksort](#the-quicksort)
  - [Implementing the quicksort](#implementing-the-quicksort)
- [**5. Searching for Data**](#5-searching-for-data) (3 videos)
  - [Unordered list search](#unordered-list-search)
  - [Binary search](#binary-search)
  - [Determine if a list is sorted](#determine-if-a-list-is-sorted)
- [**6. Practical Examples with Data Structures**](#6-practical-examples-with-data-structures) (4 videos)
  - [Unique filtering with sets](#unique-filtering-with-sets)
  - [Value counting with a dictionary](#value-counting-with-a-dictionary)
  - [Find max value recursively](#find-max-value-recursively)
  - [Balancing statements with Stack](#balancing-statements-with-stack)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Algorithms power the world](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/algorithms-power-the-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/algorithms-power-the-world?u=76281980&t=0)** - The world that we live in today is increasingly powered by software. It touches just about every aspect of our daily lives, whether we're scrolling through news feeds or working on a spreadsheet, or even just driving around in our cars. And what powers software? [[Algorithms]]. Algorithms are basically processes, recipes, instructions, whatever you want to call them, that describe how to perform certain tasks. No matter what kind of applications you build, you are bound to come across situations that require the use of one or more algorithms to help get the job done. Hi, I am Joe Marini and I've been building software professionally for some of the best known companies in Silicon Valley for more than 30 years. In this course, we're going to learn about some of the basic algorithms using all kinds of programs such as sorting data, searching for information, and working with basic [[Data Structures]]. Trying to build a program without understanding algorithms is like trying to build a car without understanding how engines work. So get ready to pop up in your text editor and let's get started learning about algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (6), [[Data Structures]] (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-you-should-know?u=76281980&t=0)** - Before we get started, there are some concepts you should already be familiar with in order to get the most out of this course. First, you should already be familiar with the basic concepts of programming. This includes writing functions, declaring and using variables and other basic tasks involved with writing code. If you need to brush up on these skills, check out the Programming Foundation's Fundamentals course. I'm going to be using the [[Python (Programming Language)|Python]] language in this course to work through our examples. You don't need to be deeply familiar with Python in order to take this course. None of the [[Algorithms]] that we're going to learn about are specific to Python, but it's a very popular language. It's easy to set up on a variety of operating systems, and it's even easier to learn. If you're already familiar with a programming in a different language, then you probably won't have any difficulties following along. But I'd recommend you check out the Learning Python course if you need to brush up on your Python knowledge, I'll switch over to the code to show you the [[Representational State Transfer (REST)|rest]] of the setup. I've set up a [[GitHub]] repository with the example code, and you can find it at this link. The course content is organized into two separate folders. The finished folder contains all of the code examples in their finished state, so you can compare your code against them as you work through the course. The start folder contains the code examples in the beginning state, and this is the folder I will be working in throughout the course as we build towards the finished state for each example. If you want to download the examples and work with them locally on your computer, then that's easy enough to do. Just click on this Code menu, go to the local tab and you can either clone the repository
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-you-should-know?u=76281980&t=94)** or download a zip file and then use your favorite code editor to work on the examples. You will just need to make sure that you have Python installed on your computer, at least version 3.10 in order to use the examples. But this repository has also been set up with a GitHub Codespace, so you can just work directly online with nothing to install. All you need to do is fork a copy of the repository into your own GitHub account and then go to the code menu and go to [[Codespaces]] and fire up a Codespace and you won't need to install anything. Now you can see that I've already done that. I've already created a Codespace and this is the one I'll be using in the course. Either way, it works fine, but I'm going to be using the Codespaces feature in this course. So let me open the Codespace and show you what it looks like. When you create your own, it'll take a few moments to spin up, so just be patient. When the code space starts, you'll see a browser-based version of Visual Studio Code, and here in the files list are all the files that you'll need for the course. You'll also have a built-in terminal, which can be found in the View menu. So if I go to the View menu, you'll see it's right here, or you can show and hide the terminal by typing Control + backtick. Alright, so let's go ahead and open up the terminal and I'll make sure that Python is already installed. I'll type Python --version and sure enough I've got 3.10.12. You also want to make sure that you have the Python and Pylance extensions installed. So if I go over here to the Extensions menu, which is the little boxes,
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-you-should-know?u=76281980&t=187)** you can see that I've got a few extensions installed. Here's Pylance and Python. In fact, if you install the Python extension, it'll install Pylance for you. If these aren't already installed, just go find them in the Visual Studio Code Marketplace. One other thing to check quickly is to make sure the preferences are set correctly, so you can go into the Preferences and you can find those either here in the File menu. So it says preferences, and you go to Settings or you can just type Control + comma, and let's close the terminal for this. And once you are into the preferences, going to search for the [[Microsoft Word|word]] "execute", and let's see, execute. Let's execute in. There we go. So search for the term, "execute in", and then make sure this box here "Execute in file DIR", is checked. That's pretty much all there is to set up. So once you have the Codespace set up for your account, and you've got the preferences the way that you want them, you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[GitHub]] (3), [[Codespaces]] (2), [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (11), make (5), find (3)
> **Prerequisites:** set up (5), install (4), setup (1), you'll need (1)
> **Tools:** terminal (4), github (3), visual studio (2)
> **UI Navigation:** go to (5), click on (1), open the (1)
> **Versions:** version 3 (1), 3.10.12 (1)
> **Exercise Files:** download the (1), zip file (1)
> **Env Vars:** dir (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What are algorithms?](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-are-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-are-algorithms?u=76281980&t=0)** - Let's get started by understanding what an algorithm is by working through a hypothetical example. Suppose you had a collection of shapes and you needed to group all of the same shapes together in individual sets. There's a variety of ways you could do this, but probably the simplest way would be to write some kind of loop function to iterate over each of the shapes, determine what each kind of shape is, and then add that shape to the correct group. At the end of this process, you would have separate groups of each shape type. This complete set of steps taken together that solve a specific problem [[Forms]] an algorithm. [[Algorithms]] have several characteristics that can be used to describe them. For example, any given algorithm has an associated complexity, and usually more than one. There's space complexity, which describes how much memory and storage space the algorithm needs to do its work. There's also time complexity, which describes how efficient the algorithm is relative to the size of the input it is given to work on. We'll learn more about time complexity later in the chapter. Algorithms typically also have a defined set of inputs and output. In other words, any given algorithm has a set of input values it can work on in order to produce a result. Sorting algorithms, for example, take a set of data values and attempt to put them into a specific order. It's also possible to talk about algorithm classification using a variety of criteria. Some algorithms work on their data sets in sequential fashion,
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/what-are-algorithms?u=76281980&t=92)** which means that they are serial in nature. A parallel algorithm can break up a data set into smaller pieces and then work on them simultaneously. An algorithm can be exact, in which case it produces a known predictable value, or it can be approximate, in which case it tries to find an answer that might or might not be exact. For example, a facial recognition algorithm might not give the same answer every time. Algorithms can be deterministic, in which case it executes each step with an exact decision, or it can be non-deterministic, in which it attempts to produce a solution using successive guesses which become more accurate over time. Of course, there's much more to the field of algorithms than I can capture in just a few bullet points. We won't have time to get into all of these different intricacies in this course since it's just an introduction to the subject, but this should give you a basic sense of what algorithms are and how they work. Next, we'll learn a little more about some of the common algorithms you'll encounter when writing your own programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (8), [[Forms]] (1)
> **Analogies:** for example (3)
> **Definitions:** in other words (1), means that (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - let (1)

#### [Common algorithms in programming](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/common-algorithms-in-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/common-algorithms-in-programming?u=76281980&t=0)** - Now that we've learned a little bit about what an algorithm is, we can investigate some of the more common ones that appear in a variety of programming scenarios. One of the most common algorithm types you'll run into are searching [[Algorithms]]. These pop up in cases where you need to find a specific piece of data inside a larger data structure. For example, searching for a substring inside of a larger string or maybe finding a file within a set of nested folders on a file system. Sorting algorithms are another very common type used when working with ordered sets of data. And, as you might have guessed, they take a set of data and organize it into a particular order. Computational algorithms are used to take one set of data and derive another set of data from it. A simple example might be calculating whether a given number is a prime number or maybe computing a temperature in one scale when you already have it in another scale. And finally, there are collection algorithms, which involve manipulating or navigating among sets of data that are stored within a particular structure. And again, it's not hard to imagine some examples here, counting specific items, filtering out unwanted data and so on. So let's take a moment and try implementing a simple algorithm, and I'm going to switch over to the computer to do this. Forgive me for a moment while I momentarily transport us back to math class where we are going to build a program that uses Euclid's algorithm to calculate the greatest common denominator of two integer numbers. The greatest common denominator of two numbers is the largest integer that divides both numbers
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/common-algorithms-in-programming?u=76281980&t=94)** without leaving a remainder. So let's look at a specific example. The greatest common denominator of eight and 20 is four because four times two is eight, and four times five is 20. The way the algorithm works is this. We have two numbers, a and b, such that a is greater than b. We divide a by b and look at the remainder. If the remainder is zero, then we found the greatest common denominator and we can stop. Otherwise, we set a to b, we set b to be the remainder, and then we go back to step one and run the process again and keep doing this until the remainder is zero. So if we look at this using our example of 20 and eight, we can see that a starts as 20 and b starts as eight, and the remainder of dividing 20 by eight is four. Well, not zero, so we can't stop just yet. So then a becomes b, so the eight moves down here. B becomes the remainder, so that four moves down here. And then we do the division again. In this case, there is no remainder, it's zero, and now, we can stop. The greatest common denominator is in fact four. All right, let's go build this in the code. Okay, so I'm going to use [[Python (Programming Language)|Python]] for this, but you know what, if you're feeling intrepid and want to try another language, that's fine too. All right, let's go ahead and open up my code. And I'm going to write the code for the the GCD function, which takes our two arguments, a and b. What I'm going to do is use a while loop for this and detect when b is equal to zero as the stopping point.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/common-algorithms-in-programming?u=76281980&t=190)** So I'll get rid of this filler pass statement and I'll write while b is not equal to zero. So inside the loop, I'm going to store aside the value of a in a temporary variable, and then I'm going to set a equal to b. And then I'm going to recalculate b to be the value of a divided by b using the modulo divisor operator. So I'm going to write b is equal to t, which remember is actually a at the moment. And I'm going to use the percent operator 'cause what I want is the remainder. So I'm not going to use the divide. What I want is to know what's left over. That's what this operator does. So I'll write t percent b. So if b is now zero, the loop will stop, and then I'll return the a variable because remember here in this line, I set it to be equal to b, so I'm effectively returning b here. So let's return a. And you can see here I have a couple of lines of code to try this function out. So let's go ahead and run this. Let's bring up our terminal. And let's run the code. Whoops. And sure enough, you can see that the greatest common denominator of 60 and 96 is 12, and the greatest common denominator of 20 and eight is in fact four like we calculated earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), go build (1), python (1)
> **Analogies:** for example (1), imagine (1)
> **Env Vars:** gcd (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [Measuring algorithm performance](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/measuring-algorithm-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/measuring-algorithm-performance?u=76281980&t=0)** - [Instructor] Because [[Algorithms]] are designed to work on sets of data and solve computational problems, it's important to understand how to talk about algorithm performance. This is an important factor in how you choose a particular algorithm to solve a programming problem, as well as understanding how your program will behave under different circumstances. So what we want to measure is: How does the performance of an algorithm change based on the size of the input set of data? You'll often hear a term called Big-O notation used to describe algorithm performance. This notation format is used to describe how a particular algorithm performs as the size of the set of input grows over time. The reason the letter O is used is because the growth rate of an algorithm's time complexity is also referred to as the order of operation. It usually describes the worst-case scenario of how long it takes to perform a given operation. And it's important to note that many different algorithms and [[Data Structures]] have more than one Big-O value. Data structures, for example, can usually perform multiple types of operations, such as inserting or searching for values, each of which have their own order of operation. So let's take a look at some of the common Big-O notation classifications and see what they mean in real-world scenarios. As we go through the course, we'll see many of these in action. So don't worry too much about understanding them completely right now. I've listed each of these items in ascending order of time complexity.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/measuring-algorithm-performance?u=76281980&t=94)** The simplest example is what's called constant time, and that corresponds to a Big O of one. Essentially, that means that the operation in question doesn't really depend on the number of elements in the given dataset. A good example of this is calculating whether a number is even or odd or looking up a specific element index in an array. Next is order of log n, which is called logarithmic time. A typical example of this kind of operation is finding a specific value in an array that is already sorted using a binary search, which we'll learn more about later. So as the number of the items in the already-sorted array grows, it only takes a logarithmic time relationship to find any given item. The next step up from there is linear time, which corresponds to a Big O of n. This level of time complexity corresponds to a typical example of searching for an item in an unsorted array. So as more items are added to the array in an unsorted fashion, it takes a corresponding linear amount of time to perform a search. After that we have the order of n log n or what's called log-linear time complexity. Some good examples of this kind of operation are some sorting algorithms, like heap sort and merge sort. And then there's the order of n squared, which is called quadratic time complexity. And as you've probably guessed, it's really not a very good level of performance. Essentially, what it means is that, as the number of items in the dataset increases, the time it takes to process them increases at the square of that number.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/measuring-algorithm-performance?u=76281980&t=186)** And some examples of this type of operation are some of the simpler sorting algorithms, like bubble sort and selection sort. Now, this is not an exhaustive list of the various types of time complexity rankings. Believe it or not, there's actually worse ones than the quadratic timescale. But this is a good representative list of the ones that you are likely to encounter when programming. And it's a good way of comparing the different performance levels to each other. And again, we will see more of these as we go through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Data Structures]] (2)
> **Definitions:** is called (2), is an  (1), means that (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Common Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to common data structures](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/introduction-to-common-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/introduction-to-common-data-structures?u=76281980&t=0)** - [Instructor] Working with programming [[Algorithms]] often goes hand-in-hand with an associated set of [[Data Structures]]. After all, most algorithms are intended to work with data, and that data has to be represented somewhere. In this chapter, we'll take a look at some of the more common data structures that are often used when working with algorithms. Now it's beyond the scope of this course to explain all of these data structures in deep detail. I'm just going to focus on the basics and then we'll see how they are used as we go through the [[Representational State Transfer (REST)|rest]] of the course. I'd recommend that you watch the Programming Foundation's Data Structures course to learn more about each of these concepts in more depth. Data structures are used to organize information in various ways so that it can be efficiently operated on by algorithms. For example, you might have a task list of things to do, and you might want to be able to sort that information by either task priority or by due date. Or you might have a collection of folders and files, and you want to be able to find a particular file within all these folders. In each of these examples, the data is organized into a particular data structure. The data structures you'll probably most commonly work with are arrays, linked lists, stacks and queues, trees, and dictionaries, which are sometimes called hash tables. Now, it's possible that you may have already encountered some of these data structures before if you've done any programming. As we go through the chapter, we'll take a look at some of the theory behind each of these types of data structures, along with some of their common use cases in algorithms. Different scenarios will require different types
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/introduction-to-common-data-structures?u=76281980&t=93)** of structures to hold the information that your algorithms need to work on. So that to-do list might well be represented by a list, whereas the hierarchy of files and directories would best be represented by a tree structure. By the end of this chapter, you should have a good understanding of how to evaluate the different kinds of data structures to work with the algorithms in your programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (9), [[Algorithms]] (7), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Arrays](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/arrays?u=76281980&t=0)** - [Instructor] One of the simplest [[Data Structures]] is the array, and if you've done any prior programming, it's likely that you've worked with arrays before. An array is a collection of elements where the position of each element is identified by an index or a key value, and they're usually stored in a single contiguous block of memory. In its simplest form, an array just contains a linear set of values, which is often called a one-dimensional array, which I've shown here. One of the great features of an array is that the element positions can be calculated using a mathematical expression. This enables array elements to be accessed directly in what is usually called random access fashion. In other words, since the position of each element can be directly computed, it's not necessary to navigate the data structure in order to access a particular element. Arrays in most languages start their indexes at zero for the first element. So for example, I can retrieve just the even-numbered elements using a formula like you see here, where n is the item I want to access. The calculated index is a multiple of two, which I then just use to retrieve that element directly, so this formula would give me elements zero, two, four, and so on. Arrays aren't limited to just a linear form, they can have multiple dimensions. So for example, to form a two-dimensional array, the first dimension would simply contain the arrays themselves. To access an item in a two-dimensional array, you would supply two indexes. So for example, to access the element that's at this location,
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/arrays?u=76281980&t=94)** the indexes would be two for the third item in the first zero-based dimension, and then one for the item, which is the second item, in the second dimension. The order of operations for arrays is pretty simple. Calculating an item index is just a constant time operation since it just involves a mathematical calculation and is not dependent on how many items are already in the array. Some languages don't allow arrays to grow or shrink, but in those that do, inserting or deleting an item at the beginning takes Order n time complexity because all the other items have to move, as does performing those operations on items in the middle since the remaining items also have to be removed to their new memory locations. Performing an insert or delete at the end can usually be done in constant time for arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### [Linked lists](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists?u=76281980&t=0)** - [Instructor] Let's take a look at a data structure called a linked list. A linked list is a linear collection of data, and it contains elements which are sometimes called nodes. Each of these nodes has a member field that points to the next element in the list. Each of these elements can contain whatever information your app needs to work with. Conceptually, a linked list looks like this. And in this case, the nodes contain integer numbers, but they can contain any data. The first item in the list is called the head element, and each element also has a field that refers to the next element in the list. The last item in the list has a field that points to nothing, which indicates that it is the end of the list. In this particular case, the diagram you see here represents what's called a singly linked list. It's called that because there's only one direction of links provided. That is each item only knows about its next neighbor. But there's no reason we couldn't have a doubly linked list, which is illustrated here. In this case, each data item has a reference to both the previous and next items that are its neighbors. Linked lists provide some benefits over regular arrays in that it's fast and easy to add and remove items from the list, and it's not necessary to reorganize the underlying memory that holds the data because the individual elements don't have to be stored contiguously in memory like a regular array does. The main drawback of a linked list though, is that it's not possible to do constant-time random access of any item in the list like an array can. Looking up an arbitrary item is in linear time,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists?u=76281980&t=97)** and it's easy to see why this is. To find item 15 in this list, we'd first have to start at the head and then work our way down the list until we found the item. So as the number of items increases, the time to find an item would increase linearly. Other operations on linked lists are pretty straightforward. Using the same linked list, we can insert a new item into the list by placing it at the head. So we would set the new node's next pointer to be the current head, and then set the head to be the new node. Similarly, we can remove a node from the list by changing the next field of the node that points to it. So if we wanted to remove the node that contains the 49, we can simply have the previous node point directly to the 15, at which point, we can delete the 49 node. So just by manipulating various pointers, you can achieve the operations you need on the linked list.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), find (2)
> **Definitions:** is a  (1), is called (1), refers to (1)
> **Speakers:** - [instructor] (1)

#### [Linked lists example](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980&t=0)** - [Instructor] Let's walk through a coding example of a linked list implementation. So I'm going to open up my link list start file in the start folder, and you can see that I already have written some code here in the starting point. At the top of the file is the class that implements the node type that will hold the data in the linked list. Now I chose to name it node just to be consistent with the terminology that I've been using, but you can call it whatever you want. It's a simple class that just stores a single data field and you can see that there's only a single next field, which indicates that this is a singly linked list. There are methods in this class for getting and setting both the data and the next pointer. The linked list class itself is next, and there are already fields for the head reference, as well as a count field that keeps track of how many data nodes are in the list. There's a utility function down here called dump list that prints the contents of the list. So what we're going to do is fill in the insert, find, and delete at functions. To keep things simple for this example, we're only going to insert items at the head of the linked list. I would suggest that as an additional exercise, you might try writing some code to insert items at a given index if you feel so inclined. Alright, so here in the insert function, I already have a line of code that creates a new data node, and then we just need to insert that new node into the list. So I'm going to write new node dot set next, and we're going to have the new node point to the head
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980&t=99)** because it's going to become the new head itself since we're only inserting at the head. So self dot head is equal to a new node and then we have to just increment the count. All right. The find function is also relatively simple to implement. The code starts at the head of the list and then we just need to iterate over the nodes until we found the first one that has the matching data argument. So I'll have a while loop that does that. So while item is not none, I'm going to check to see if the item, I'm going to call it get data on the item is equal to the value that we're looking for, then we can just return that item. Otherwise, we're going to advance to the next item.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980&t=160)** All right. Okay, let's go ahead and try out what we have so far. If I scroll down to the bottom of the code, you'll see that there's already some code to exercise our file. So we create a new linked list, insert some items, and then print out the list and then we're going to get the count and then try to find two items. So 13 exists and 78 does not. So let's see what happens. I'm going to open this in the terminal and let's run this. Alright, so here we are. We can see that the list is being printed out. So we've got to fit all four of the nodes, 15 through 38, and the item count is equal to 4 and then we try to find 13. And so sure enough, yes, there's a node object that contains 13, that's good. And then we have the result of none because there is no 78 to find. All right, so far, so good. Let's keep on going. Close our terminal. So now let's implement the delete at method. This function will delete the node that is at the given index. The current code checks to make sure that the index is within the number of existing nodes within the list. What we need to do is add the logic to do the actual deletion. So first we'll check to see if we're deleting the head node, because if we are, then we just need to set the new head node to be whatever the current head is pointing at. So if index is zero, then the head of the list becomes whatever the head is currently pointing at. Otherwise we have to advance to the node
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980&t=259)** that is just before the one that we want to delete because that's going to point to the node that's after the one that we want to get rid of. So I'll create a temp index variable and a temporary node variable that's going to point to the head. That's where we're going to start searching. So while the temporary index is less than the index that we want minus one because we want to stop right before the index, what I'm going to do is advance the node
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/linked-lists-example?u=76281980&t=300)** and increment the index. So once we found the previous node that we want to get rid of, we just set its next field to point to the one that's after the one that we want to delete. So we'll set the next node of the one that we found to the get next, whatever's next, and then whatever's next after that. Okay, so we're advancing the pointer to the one after the one we want to delete. And then finally we just have to decrement the count field to indicate the fact that we've gotten rid of a node. Alright, so let's go ahead and scroll down. Let's comment out our previous example and un-comment the code that tries out deleting things. So first we're going to get the count, delete the item that's at three, so that's the last item in the list. So what we're going to be getting rid of is the 38. So then after we do the deletion, we'll get the count again, and then we'll try to find 38, which should be gone at this point. All right, so let's bring our terminal back up and let's run this again. And sure enough, you can see there's the current list. We've got four before we do the deletion, three afterward, we can't find 38 anymore. And sure enough, when we print out the list, it's gone.

> [!info]- Semantic Content
>
> **CLI Commands:** node (18), find (7), make (1)
> **Tools:** terminal (3)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Stacks and queues](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues?u=76281980&t=0)** - [Instructor] Let's take a look at two more common [[Data Structures]], stacks and queues, and let's start with the stack. A stack is a collection of elements that supports two principle operations, push and pop. The last item pushed onto the stack is the first one popped off. That makes the stack what's called a LIFO data structure. Last in, first out. So if we had a stack with one item on it and then we pushed another item onto the stack, followed by another, we'd have a stack with three items in it. Pushing an item onto a stack is a constant time operation, since it doesn't matter how many items are already on the stack. Then we could take that stack and pop an item off the top in order to operate on it. And again, that's a constant time operation. Queues work a little bit differently. Like a stack, the queue structure supports adding and removing items, but it operates in a first in, first out method. If we had an empty queue, and added an item, it would be the first one in the list and queuing another item would add it to the end of the list until we had several items, and that's also a big O constant time operation of order one. Then items would be removed from the front of the list when they needed to be processed. Stocks and queues are very fundamental data structures and have broad, practical applications in [[Software Development]]. Stacks, for example, are often used to parse and evaluate various [[Forms]] of expression statements. An example of this would be using a stack to evaluate a mathematical expression that is written using reverse polish notation, for example.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues?u=76281980&t=96)** Stacks are also used to provide backtracking features. A good example of this is when you use the back button in your browser. As you click on various links in the page, the browser adds each link to a stack in order to maintain the order in which they were visited. So when the user clicks on the back button, the most recently added URL is popped off the stack and then revisited. Queues also have some pretty common uses. Order processing is a good use for a queue, because it ensures that orders for a product are fulfilled in the order that they were received by the system. Another good use for something like a queue is in message processing. When you're using your phone's SMS Messenger app and entering each message, you want to make sure that each of those messages is sent in the order that they were written. The messenger app might use a queue to maintain each message and make sure that they're sent in the order that they were placed into the queue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Software Development]] (1), [[Forms]] (1)
> **Env Vars:** lifo (1), url (1), sms (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Stacks and queues example](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues-example?u=76281980&t=0)** - [Instructor] Okay, let's take a few moments and walk through some examples using a stack and a queue. Some languages like C sharp, for example, have dedicated built-in data types to represent these [[Data Structures]]. But in the case of [[Python (Programming Language)|Python]], we can just use a regular list to represent both a stack and a queue. So I'll start by opening up the stack starting point in my start code, and I'll just begin by declaring an empty list that's going to serve as our stack. Next, I'll add some items to the stack by using the append function that the list type supports. So let's see, I'll write stack dot append. And some languages might use the push function, but in this case, append does the same thing. So I'll write append one and we'll just put a few of these on there. So we'll do two, three, and four. Okay, so at this point, I've pushed four items onto the stack, so let's go ahead and print the stack to see what it looks like. Alright, let's go ahead and run and see what we've got so far. Okay, so you can see that the stack now has four items in it, starting with one and ending with four. So now let's try removing an item from the stack. So I'll write X is equal to stack dot, and in this case,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues-example?u=76281980&t=93)** the list actually does support the pop function. So this will pop the first item off the list. So let's go ahead and print X and then let's print the stack again, just so we can see what the stack looks like after we've popped it off. Okay, so let's run this. Back to the terminal. Okay. So you can see that we've got the four items. We pop off the four, right? So that was the, it was the last one on. It's the first one off. And now the four is gone in the second case. Alright, now let's try using a queue. And I'm going to use my queue starting file for this example. Now, you can use a regular list as a queue in Python like I mentioned before, but it's actually pretty inefficient to do so. Removing items from the front of a list requires a big O of linear time complexity, because all of the subsequent items have to be shifted down in their slots. There's actually a much more efficient data structure called a deque object that we can use in python's collections module. So I'm going to import that. So from collections, I'm going to import the deque. It looks like it says D Q, but it's actually pronounced 'deck'. This particular object is optimized for adding and removing elements from both ends of the collection. So I'll go ahead and create the empty deque, and then I'll add several items to it.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues-example?u=76281980&t=191)** And just like before, we'll put multiple items in there and then let's print out the contents. And let's run what we have.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/stacks-and-queues-example?u=76281980&t=212)** Okay, and you can see that we have a deque object that has the contents just like we had with the stack. Alright, let's go back to our code. So this time, I'll remove an element from the front. So to do that, I'm going to write queue and I'm going to write pop left, because that pops an item off the front. And then we'll print the queue again. All right. And just for fun, we'll do a pop off the right. So we'll do a queue dot pop right. Well it just pop. Oh, actually, I don't need the argument there. And then we'll print the queue again. Okay, let's bring our terminal back up and let's try this. And you can see that when I pop off from the left, right? The one is now gone. And then when I do a pop that's popping from the right, you can see that the four is now gone in the second example. So later on in the course, we will see some practical examples of these data structures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Data Structures]] (2)
> **CLI Commands:** python (3)
> **Analogies:** just like (2), for example (1)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Dictionaries](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980&t=0)** - [Instructor] Alright, let's talk a little bit about dictionaries. You might see this data structure called something different in different programming languages. Some languages call these hash tables. For the sake of consistency, I'm going to use the term dictionary. A dictionary is a form of what's called an associative array. It is a data structure that maps keys to their associated values, and it does this by using a hash function. The hash function uses the key to compute an index into the slots that are in the hash table and map the key to a value. Now, ideally, the hash function will assign each key to a unique slot in the table where values are stored. In reality, sometimes there are collisions in which two separate keys will both map to the same value slot. It doesn't happen often, but it does. In that case, the hash table has to have a way to resolve those collisions so that the correct value is mapped to the right key. This is a bit of a complex subject, so I'm not going to go into how hash functions work internally and how collisions are resolved. The fact is, most languages and frameworks already have dictionary [[Data Structures]] that have all this figured out for you. For the purpose of this course, what's important is to understand how dictionaries are used and what their advantages and drawbacks are. One of the primary benefits of dictionaries is their ability to uniquely map a given key to a specific value. This feature provides the ability to implement certain kinds of [[Algorithms]],
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980&t=92)** which we will see later in the course, such as counters and filters. Another advantage of dictionaries is their speed. They're typically faster than other kinds of table lookup structures, particularly when the number of entries is large. They do have some drawbacks, however. If the number of entries in the dictionary is small, then it might be more efficient to just use a regular array or a list or linked list, which we looked at earlier, because there won't be any collisions to resolve. Also, dictionaries don't always order their entries in any particular way, so unless you want to incur the cost of a separate sorting step, they may not be able to efficiently enumerate entries that are close to a given key since the data might be spread out randomly in memory. So let's take a look in our editor at how dictionaries are used. Alright, so of course, I'm going to be demonstrating this in [[Python (Programming Language)|Python]], but the principles here are the same as in other languages. So here in my start folder, I'll go into the dictionary folder and open dictionary start, and I'll start by creating a new dictionary. And there's a few different ways to do this in code, and what I'm going to show you is the Python way of doing it, but every language has its own way and they're all pretty similar. So I'm going to start with the dictionary constructor and create a dictionary that has keys and values all at once. So I'll write items1, and I'll use the dict constructor, and I'll map some keys to values. So key1 will be one, and then key2 is going to map to two, and then key3 is going to map to 34.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980&t=193)** No, just kidding, three. Okay, there we go. And I'll print out the items1. Alright, okay, so let's go ahead and run this. Alright, and when I run the code, you can see that the contents of the dictionary are printed in key value pairs. It's also possible to build a dictionary progressively since these data structures can grow or shrink to fit the data that they contain. So let's add an example of that, and I'm going to use the curly brace notation this time to create an empty dictionary in Python. That's the shorthand way of doing it. And this time, I'll do items2, and now I'll treat it as if it's an array with my keys, and just map those to values, and we'll do the same thing. So we'll have key1, key2, key3, and one, two, and three, and then we'll print out items2. And if I set a value on a key that is already in the dictionary, then the existing value gets placed. So for items2, I'm going to replace key2 with the actual [[Microsoft Word|word]] two. Alright, and now let's go ahead and run this again. Oh, actually let's print it out again
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980&t=285)** so we can see the change. Alright, let's go ahead and run this. Alright, and so when I run this, you can see the content's being printed in key value pairs along with the value that got replaced for key2. So now let's see what happens when I try to access a non-existent key. So I'll print items1, and I'll try to access key6. So I'll run that, and you can see that when I run, I'm getting an error because there's no data, there's no value associated with that key. And then finally, let's iterate over all the contents of the dictionary using the built-in items function. So I'll write for key, and value in, and let's iterate over items2, and we'll use the items function to get each of the items, and we'll print out the key along with the key, and the value along with the value. Alright, let's run one more time. Oh, let's comment out the error line, and let's clear this and then let's run again. And when I run this, there you can see each of the keys and values being retrieved. So that should give you a good overview of the dictionary data structure,
>
> **[6:18](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/dictionaries?u=76281980&t=378)** and again, we'll see how these are used in practical algorithms a bit later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Data Structures]] (2), [[Algorithms]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (3)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Recursion

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding recursion](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/understanding-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/understanding-recursion?u=76281980&t=0)** - [Instructor] There's one more programming technique that we're going to take a look at before we start working directly with some common [[Algorithms]], and that's a technique known as recursion. In its simplest form, recursion is when a function calls itself from within its own code. Now, that might seem a little strange at first. I mean, after all, why would you want to write a function that calls itself? But it turns out that this kind of programming pattern appears in multiple scenarios in the real world and will examine some of them in this chapter. Suppose for example, you had a program that needed to find a particular file that's nestled somewhere within a set of directories, and your program doesn't know how many directories there are, and of course these directories can contain other directories and so on. So what algorithm would you use to search for the file? Well, one possibility might look like this. You start by making a list of the items that are in the current directory, the top one. Then while that list isn't empty, you get an item from that list and if that item is the file that you're looking for, well then great, you're done. Otherwise, if it's a directory, you add all the items in that directory to the list, and then you go back to step two, and then you repeat this until you found the file or you've exhausted all the items. Another approach might be loop over every item in the directory and look at each item. If it's the file, then you're done. Otherwise, just go back to step one and loop over every item
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/understanding-recursion?u=76281980&t=94)** in the directory that you just found. This process will then repeat until you found the file or you've visited every directory. The second approach is much easier to implement because you're essentially reusing the logic you already have for searching a directory each time you encounter one. There's a few important things to remember about recursion. First, it's important to make sure that your recursive function actually terminates and returns at some point. This is called the breaking condition. Otherwise, the code will get into an infinite loop and eventually crash the program because the computer will run out of memory to keep track of all the nested function calls. Next, each time the function is called, you have to remember that the values of the arguments of the previous call are stored aside. This trips up a lot of people. They're not written over by the new function call. This is accomplished by what's known as the call stack. And if you're wondering, the answer is yes, this is implemented using a stack data structure like the one we saw earlier. So let me explain by taking a look at an example. Let's imagine we have a function named countdown, which will print out a countdown of numbers, starting with an initial number. So you can see that the function checks to see if the argument X is zero, in which case the function prints a done message and then returns. So, that's the breaking condition. Otherwise, it prints the number and then calls itself again with the current number minus one. So if we look at the call stack
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/understanding-recursion?u=76281980&t=187)** for each of these function calls, we start off with the initial call where X is four. Well X isn't zero, so the number is printed, and then the function is called again. So the old function argument where X is four gets pushed onto a stack, and now the initial call was four, but now because we're being called with X minus one, the next call calls countdown with three. This happens again when X is two and then again when X is one and then one more time when X is zero. So now we have a call stack with five items on it. At this point, the breaking condition triggers and the function returns, which then causes all of the previous function return calls to return as well. And the call stack is unwound back to the beginning. Alright, let's try implementing this in code and we can see how it works for real.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is called (3), known as (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), imagine (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Simple recursion example](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/simple-recursion-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/simple-recursion-example?u=76281980&t=0)** - [Instructor] Let's walk through a simple example of recursion by building the simple program that we just saw to perform a countdown. So, in my code, I'll open up the countdown start, and I'm going to fill out the countdown function. So, I'll do it just like I showed in the previous video. I'm going to check to see if X is equal to zero whenever we come into the countdown function. And if it is, I'm going to print the [[Microsoft Word|word]] done and then return. Otherwise, I'm going to print out the number followed by three dots, and then I'm going to call countdown again, but this time, with X minus one. And you can see I have my initial call here with countdown of five. So, let's go ahead and run this. I'm going to bring up the terminal, and we'll run this. All right. Okay, so you can see that when I run this in the output, the countdown starts at five and then ends at one and the string done gets printed out. So let's analyze the code a little bit. When the first call to countdown is made, the initial value is five. So the check for zero will not be true, which means that the code here in the else block is executed, which prints the number, which is now five, and then calls countdown again with X minus one. Now, remember, when the number eventually hits zero, this return statement will be executed.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/simple-recursion-example?u=76281980&t=94)** So what that means is the program will return to the statement after the function call was made. Now, in this case, there is no next statement after the call to countdown. So the flow of control will just fall through and exit the function, which means that the next return gets called and then, the flow of control falls through. So let's watch what happens if I put a statement after the end of the else block, right after the call to countdown. Okay, what I'm going to do is I'm going to print, hey, all right. Now, before I run this, take a moment and think to yourself what it is that you expect to happen, okay? Just take a moment, form a mental picture of what you think is about to happen when I run this. And then, let's compare what actually happens, right? So let's go ahead and clear the terminal. I'm going to run this again. All right, so you can see that, when I run the program, all of the print statements are executed in order. We get down to the done, and then, all of the heys get executed. So what's happening here is that the call stack is being unwound after the final return statement is reached here. So, the last call to countdown hits this return, which means the function returns, and then hey is printed out, and then, the next previous call returns, and then the one before that, and then the one before that until we reach the top.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Tools:** terminal (2)
> **Definitions:** means that (2)
> **Analogies:** just like (1), picture (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Calculating power and factorial](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/calculating-power-and-factorial?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/calculating-power-and-factorial?u=76281980&t=0)** - [Instructor] In this example, we'll put recursion to work to solve a couple of math problems. We're going to build the power and factorial functions. So let's open up recursion_start. Okay, so first, a very quick review of some basic math. The power function calculates the value of a number multiplied by itself a certain number of times. For example, two to the fourth power is 16. So that's two times two times two times two. The factorial function is written as a number followed by an exclamation point, and is equal to that number multiplied by each of the numbers that comes before it. So that's five. Factorial is five times four, times three, times two, times one, which is 120. And there's a special case which zero factorial is one because, well, you know, math. So let's write the code to implement these functions using recursion, and first we'll tackle the power function. So remember, we're multiplying an argument a given number of times. So I have two arguments to the function, the value, and the power to raise that number to. So first, let's write the breaking condition. So if the power argument has reached zero, then we'll just return one. Otherwise, I'm going to multiply the num argument by the return value of calling the power function, again, this time decreasing the power by one. So I'm going to return num times,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/calculating-power-and-factorial?u=76281980&t=97)** and this is where the recursion comes in. I'm going to call power again with num and pwr minus one. And I'm going to get rid of that placeholder pass statement. So each time through the function, we're multiplying the given value by itself, right? Because num isn't going to change, right? So remember, all we're doing here is multiplying the number by itself. All we need to know is how many times to do it. So the power argument is actually acting as a bit of a counter. So you can see we're we're multiplying num times num times num a certain number of times until we reach zero, in which case the function just returns with one. So you can see down here in my code, I have some real values to try that out with. I'm going to raise five to the power of three and two to the power of four. So let's go ahead and open this folder in our terminal and I will run recursion_start, and sure enough, we've got five to the power of three is 125, and two to the power of four is 16, and we haven't done factorial yet. Okay, so let's take a look now at how you'd write the factorial function using recursion. And the concept is similar to the power function, except we only need one argument because the argument is going to act as both the value and the counter. Because remember, the number of times that we're multiplying the argument by the argument minus one is also governed by the value itself. We're going to stop when we get down to the value of zero.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/calculating-power-and-factorial?u=76281980&t=191)** So, once again, let's start with the breaking condition, and I'll get rid of this pass statement. So I'll write if num is equal to zero, then return one. Because remember, zero factorial is equal to one. Otherwise, we're going to call the factorial function again. So we're going to return num times factorial, and in this case, we're going to pass in num minus one. So that's how we're getting this formula right here. We start at five, then we call factorial again, it's going to be four, then again, it's going to be three, and so on until we get to the final result. Alright, let's run our updated code. Let's go back to the terminal. And sure enough, we can see that four factorial is 24, zero factorial is one, as it's supposed to be per the rules of, you know, math. So that's a couple of simple examples of using recursion to perform mathematical calculations. And we'll see more of how we can use recursion to help solve [[Data Manipulation]] problems later in the course when we look at some of the sorting [[Algorithms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Manipulation]] (1), [[Algorithms]] (1)
> **Code Identifiers:** recursion_start (2)
> **Cross-References:** go back to (1), later in (1)
> **Tools:** terminal (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)


### 4. Sorting Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of sorting](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/overview-of-sorting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/overview-of-sorting?u=76281980&t=0)** - [Instructor] One of the most common problems that arise in writing modern programs is the need to sort sets of data, and there are a variety of reasons why you'd want to do this. In some cases, the data will be presented to the user, and to help them make sense of the information it needs to be sorted a certain way. So, for example, someone using a real estate app might want to sort properties by price level. In other cases, the data needs to be sorted so that the app itself can work on the information more efficiently. So using that same real estate app scenario, the user might not decide to view houses sorted by price, but if they do specify minimum and maximum price boundaries, then the app would internally sort the data in order to limit the amount of additional information it would need to retrieve, for a given set of properties. In this chapter, we're going to learn about a few of the different [[Algorithms]] for sorting information, how they work, and what their relative big O performance characteristics are. Now, most modern programming languages have very good efficient sorting routines already built in, so it's very unlikely that you'll have to write your own sorting algorithm, but it's very helpful to understand how the various algorithms work so you can choose the right one. The sorting algorithms that we're going to take a look at are, the bubble sort, which is a very basic algorithm that's mainly used as a teaching tool. The merge sort, which uses recursion to implement its main logic and the quick sort, which also uses recursion and is usually even better than the merge sort. If you haven't already viewed the chapter on recursion,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/overview-of-sorting?u=76281980&t=93)** I suggest you go back and look at it because it's a bit of a foundational material that we're going to need for this chapter. Each of these sorting algorithms illustrates a different way of tackling the problem of sorting information. Now, these are not the only sorting algorithms out there, but they were good representation of some of the different approaches to solving the general problem of sorting data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The bubble sort](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-bubble-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-bubble-sort?u=76281980&t=0)** - [Instructor] Let's begin by examining one of the most basic sorting [[Algorithms]] called the Bubble Sort. I'll get more into why it's called that in a moment, but first, let's take a look at how it works. So suppose we had an array of numbers like this, the bubble sort begins by comparing the first two elements to each other to see which is larger. If the first element is larger than the second, then the two elements are swapped. Then the algorithm advances to the next slot and performs the same comparison, and again, swaps the values if the first one is larger. This process continues over and over again until we've examined all the items in the array, and the largest value has made its way to the top. And that's why it's called the bubble sort, the values bubble their way to the top of the array. After the largest value is in place, the process starts all over again, but now, we only examine the elements up to the one before the last item, and then the one before that, and so on, until the array is fully sorted. So let's take a look at some of the characteristics of this sort. First, the bubble sort is very simple to understand and implement. However, it has a performance profile of order N squared, which is quadratic time, and N is the number of elements being sorted. And by the way, when you see for loops inside of for loops in your code, that's usually an indication of N squared performance, and you'll see what it would mean when we examine the code. That doesn't compare very well with other sorting methods which are generally a lot better. For these reasons, the bubble sort is mainly a teaching tool and is not considered to be a practical way of sorting data.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-bubble-sort?u=76281980&t=94)** So let's take a look at how to implement this algorithm in real code. All right, so here in VS Code, I'll open up my bubble start file. And in my function here, I've got a list of values to sort, and I'm going to fill out the bubble sort code. So first, we'll need to write a loop that will start by examining every element and then decrease by one each time. So I'm going to use the range function for this. So for I in the range, and I'm going to start at the end of the array, so the length of the data set, minus one, and I work my way down to zero, and I'm going to decrement by minus one each time. Next, I need an inner loop to compare neighboring elements and swap them if needed. So for J is going to be in the range of the outer index, and I'm going to check to see if the dataset value at the J index, which is the inner loop, is greater than the value at the dataset of its neighbor. If so, I need to swap them. So I'll have a temporary variable, which I'll set to the current index, and then I'll set the current index equal to its neighbor,
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-bubble-sort?u=76281980&t=183)** and then the temporary value will be going into the neighbor slot. And this is what I was referring to earlier when I was talking about having a loop inside of a loop. This is usually a pretty good indicator that you're looking at a big O of quadratic time complexity. And then just for display purposes, so we can see what's happening, I'll print the array after each iteration of the loop, just the outer loop, not the inner loop. So I need to make sure that that's properly indented so we can see what's happening. Okay, so let's go ahead and run the code.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-bubble-sort?u=76281980&t=225)** All right. And you can see here in the output, here's the starting point, and you can see that the numbers are beginning to get swapped as we go through the array. So here's where 19 and 20 get replaced, and then the 53, 56, 41, 49, these get swapped here. And one of the things you notice is that in this particular data set, the data becomes sorted after the first, looks like two or three iterations in, but the problem is that the bubble sort has no way of knowing that. So it keeps on going all the way through the loops until it reaches the end, which is another reason why the performance is not that great. Okay, so this is a quick summary of the bubble sort, but we can do better than this. And in the [[Representational State Transfer (REST)|rest]] of the chapter, we'll take a look at some of the other sorting algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The merge sort](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-merge-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-merge-sort?u=76281980&t=0)** - [Instructor] Now let's take a look at how the merge sort works. The merge sort is known as a divide and conquer algorithm. It takes a set of data and then breaks it down into smaller parts that are easier to work with. It uses recursion to break the data down and then sort the smaller sets of data, gradually working its way back up to the original dataset. The merge sort has very good performance. It typically operates on its dataset in logarithmic time, giving it a big O of n log n. To understand how the merge sort works, the key is to understand how to merge two sorted arrays together. So let's imagine we had two arrays that are already sorted and we're going to merge them into one. To merge these two while keeping the results sorted, we start with the first elements of each of the two arrays. In this case, the 4 is smaller than the 12, so we insert the 4, and then advance the index of the array we just inserted from to the next element, which is the 23. Alright, so now the 12 is smaller than 23, so that gets merged in. And then the index advances to the 19. 19 is still smaller than 23, so that gets merged in and then the index advances to the 31. Now the 23 is smaller, so that gets merged and now we're done with that particular array. Then we finish up by copying over what is left from the other array, and now we have a merged array that remains sorted. The question is, how do we get to that state where we have already sorted arrays
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-merge-sort?u=76281980&t=93)** that just needs to be merged together? Well, let's suppose we had an array of unsorted numbers. We successively break down that array until we're left with individual arrays of one element each. So now we have one element arrays, all of which are sorted by definition because, well, they only contain one element, so they've got to be sorted. Then we begin merging these arrays back up into each other until we've rebuilt the original array in sorted form. That's pretty much all there is to the merge sort. So let's try implementing it in real code.

> [!info]- Semantic Content
>
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the merge sort](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=0)** - [Instructor] Now that we've seen how the merge sort works in theory, let's build it in practice. So here in my editor, I'll open up the merge sort start, and you can see I have a list of unsorted integer numbers along with a function that I'm going to fill out. So the code starts by taking the dataset argument and splitting it into two arrays. Now I need to add the code that recursively calls merge sort to keep breaking these arrays down further into smaller and smaller parts. And you can see I've got my left array here and my right array here. And this is the [[Python (Programming Language)|Python]] syntax for getting all the values up to a certain point and the value from a certain point on. So I'm going to call merge sort on the left array, and then I'm going to call merge sort on the right array. So once that process is finished, we need to merge the results as we saw in the previous video. I have three indexes defined. I indexes into the left array, J indexes into the right array, and K indexes into the merged array of the two halves. So I'm going to add the code that compares each element and does the merge. So while the left index is less than the length of the left array and the right index is less than the length of the right array, I'm going to check to see if the left array value at that index is less than the value at the right arrays index.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=99)** And if so, I'm going to merge in the left array value
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=110)** and increment the index. Otherwise I merge in the right array value and then increment that index. And then outside the loop, I increment the merge index. So once that's done, we have to clean up whichever half has elements left over. So while the left array still has elements in it,
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=144)** let's just copy those over to the dataset
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=154)** and then we'll increment each index. And then we'll do the same thing for the right array. So I'll just copy and paste this and change the variable names. So that's going to be J, and this is going to be the right array.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-merge-sort?u=76281980&t=177)** And then make sure we're incrementing the J index instead. Okay, so this is where we do the comparison. And then we copy over whichever array has items left, and now we're ready to run our code. So let's open this up and let's try out our merge sort and all right, so here we can see in the output, we've got the results in ascending order. So here's the original array and here's the result in ascending order sorted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** as we saw (1), previous video (1)
> **Speakers:** - [instructor] (1)

#### [The quicksort](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-quicksort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-quicksort?u=76281980&t=0)** - [Instructor] Let's take a look at the Quicksort algorithm. So the Quicksort, like the merge sort, is also a divide and conquer algorithm, and it also uses recursion to perform its work, but usually it performs better than the merge sort does. The Quicksort also performs the sorting of data in place, in the existing array and doesn't need extra memory to do its work. The trade-off is that the worst case scenario is that when the list is already sorted or mostly sorted, in which case you don't get the best performance. So one of the main features of Quicksort is the selection of what's called the pivot point. So here's how it works. Let's imagine we have the same data set as in our previous merge sort example. We start by picking a pivot position. In this case, we'll just choose the first item. Now, there are various ways of picking the pivot position, but for simplicity, let's just use the first one. This becomes what's called the pivot value. So now we start the process of partitioning the list. The main purpose of this process is to move items that are on the wrong side of the pivot value, and figure out the point at which to split the array. So we have two indexes, a lower one in the blue arrow and an upper index in the green arrow. We start by incrementing the lower index as long as it is less than the upper index and until we find a value that is larger than the pivot value. So in this case, six is less than 20. So we move to the right, and eight is less than 20, so we move to the right again. So 53 is now larger than 20, so we stop. On the right side, we decrement this index
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/the-quicksort?u=76281980&t=97)** until we find a value that is less than the pivot, and as long as the upper index is greater than the lower index. Well 19 is less than 20, so we stop right away. Then we exchange the 53 and the 19, and now we continue moving on the left. All right, so 23 is larger than 20, so we stop again. And then on the right, we move to the 42, which again is larger than 20. So we move again to the 87, which is larger than 20. So we're going to keep going. So we move again to the 23 and 23 is larger than 20. So we move again to the 19, which is now less than the pivot value, and the two indexes have crossed each other. So we stop, and we've identified the split point. So now we exchange the pivot value with the upper index, the green arrow, and now we've arrived to the point where the left side contains values below the pivot, and the right side contains values above the pivot. Then we do the same thing all over again. We recursively call the Quicksort function again on the left part and on the right part, and we do that until we can no longer split the arrays. Now if you've been paying attention, you'll notice that this is a little different from the merge sort. In the merge sort, all the work gets done in the merging step, in the Quicksort, all of the work gets done in the partitioning step, and the data is being sorted in place. Okay, so let's implement this in real code and see how it works.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the quicksort](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-quicksort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-quicksort?u=76281980&t=0)** - [Instructor] Okay, we've seen the Quicksort theory. Let's actually implement it ourselves. So here in my editor, I'm going to open up the Quicksort start position. Here's my data that I'm going to be sorting. Here is my Quicksort function. And if we scroll all the way down, you can see that I'm printing out the unsorted data, calling the Quicksort function on the list to be sorted, and the dimensions of the list. So index of zero all the way up to the length of the items we want to sort. And then I'm going to print out the result. Up here in Quicksort, I've already filled out the Quicksort function, because this really isn't where the magic happens. I'm going to call the partition function. That's what we're going to fill out. Because remember in the Quicksort, that's where everything happens. So we calculate the pivot index by calling partition, and then we call Quicksort recursively on the dataset with our newly calculated positions. All right. So, in the partition function, first we need to establish the pivot value. And recall from the previous video, we're going to just choose the first value in the list just to keep things simple. So, the pivot value is going to be the first item in the data values. And remember, recursively as we split the array, this is going to be called again and again. So we'll be choosing the first data value in each of the array splits that we do.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-quicksort?u=76281980&t=93)** All right. Then we establish the lower and upper indexes. So, the lower index is going to be equal to the first position plus one, and then upper is going to be the last. So now we have to write the main part of the function where we advance each index according to the rules that we talked about earlier. So first, let's handle the lower index. All right. So while the lower index is less than or equal to the upper index, and the data value at the lower index is less than or equal to the pivot value, then we're going to advance the lower index. And then we'll do the same thing for the upper index. So while the data value at the upper index is greater than or equal to the pivot value, and the upper index is greater than or equal to the lower index, then we're going to move the upper index to the left. So we'll equals upper minus one. There we go. Okay, so now we have to check to see if the two indexes have crossed each other. So if upper, whoops, is less than lower,
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-quicksort?u=76281980&t=191)** then I've got this little flag right here that's currently set to false and that's going to govern this loop that's going to be moving the indexes. So if the upper and lower indexes cross, then we're going to mark that flag as being true. So now we're done with the loop. All right, and I can take out this pass statement that was a filler. Don't need that anymore. Okay. So if the indexes have not crossed each other, then we exchange the two values at the current stopping points. So I'm going to have a little temporary variable that holds the data value at the lower index, and then we're going to swap. So the data value at the lower becomes the data value at the upper, and then the data value at the upper becomes my temporary holding variable. So we've swapped the data now. Alright, so this loop is going to execute until the two indexes cross each other, at which point the split index point will be found. And recall that when we found the split index point, we move the pivot value to that point and exchange it with the value that's already there. So let's do that. So temp is going to be the value at the first location, because that's where the pivot is. And then we'll swap the data at that point with the data value at the upper index,
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/implementing-the-quicksort?u=76281980&t=290)** and then set the data value at the upper index to be that temporary variable. And then all we need to do is return the split point index, which at this point is upper. And that's it. Now we filled out the partition function. And if any of that was unclear, go back and watch the video where I explain how the pivot value is calculated and how the split point is calculated. And you'll see that this algorithm follows the video where I showed that happening. Okay, so let's go ahead and run our code. So I'm going to open up this in the terminal. And sure enough, you can see here's the initial array and here is the array in the finished sorted format. And again, thankfully, you'll probably never have to actually implement this yourself. Most languages already have very good sorting [[Algorithms]], but it's useful to see how recursion can be used to implement different kinds of sorting algorithms. In this case, the Quicksort and the merge sort before it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Cross-References:** previous video (1), we talked about (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 5. Searching for Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Unordered list search](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unordered-list-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unordered-list-search?u=76281980&t=0)** - [Instructor] Now that we've learned a little bit about sorting data, let's take a look at how we can search for data within a collection. The first algorithm we're going to consider is a straight linear search for data in an unordered list. And that's a list that is not currently sorted in any way. The data is just in some random order. So let's open up the unordered start file and here I have some integer data to look for. I have my find item function and some test code. Now, there's no way for us to know where the particular item is in the list or if it's even there. So we have to search the list by each item, and we can do that with a simple loop. So I'll get rid of this placeholder pass and write for I in range, starting from zero up to the length of the item list. And then I'll just check to see if the item is equal to the data at the item list index. And if so, I will return the index. Otherwise, I'll return none to indicate to the caller that no item was found. Alright, so let's go ahead and open up this code in our terminal and run it. And sure enough, you can see that item 87 was found at index six and 250 doesn't exist in the list. Now unfortunately, searching an unordered list is not very efficient.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unordered-list-search?u=76281980&t=93)** It has a big O of linear time complexity because as items are added to the list, the average search time increases by the number of items added. If we double the number of items in the list, then the worst case scenario is that we double the search time. Of course, you could make this a little bit more efficient, you could have two indexes. One starting at zero and one starting at the end, and then they just work their way towards the middle. But it's still linear time complexity. In the worst case scenario, the item that you're searching for is either in the last place or it's not there at all, in which case, if the list had a million items in it would require about 1,000,000 comparisons or if you use the two index approach, it would require 500,000 comparisons. But still linear time complexity for an unordered list search.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Binary search](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/binary-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/binary-search?u=76281980&t=0)** - [Instructor] Searching for data in an ordered or already sorted list is much more efficient than for an unordered list, and that's because we have a valuable piece of information about the list and the items in it, the fact that it is sorted. With a sorted list, we can perform a type of search that's called a binary search. So let's imagine that we had a list of sorted numbers and the number that we're searching for is this number right here, number 41. To perform the binary search, we start off with two indexes at the beginning and the end of the list, and then we calculate the midpoint of the list. Then we check to see if that value at the midpoint is the value that we want. And if it is, then great we return that index. If the number at that index is less than the one that we are searching for, then we know that we could ignore all the numbers below that index. And conversely, if that number is larger than the one that we're looking for, we can ignore all the numbers above that index. So now we calculate the new midpoint. In this case, we advance the lower index up to the middle point because the number that we're searching for is larger than the one that we found, and then we compute the new midpoint from there. So now the lower index becomes four, the upper index just stays where it is, and the new midpoint is six after rounding down the index. So this repeats until we found the number, which in our example is at index five. All right, let's code this up. All right, in my editor I'm going to open up ordered start, and I already have some code in place that defines
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/binary-search?u=76281980&t=95)** a list of numbers that are already sorted along with the function that we're going to fill out. And then I have some test calls to the function to find different types of data. So the search function starts off by getting the list size and then setting the upper and lower indexes. So we start at zero and then we start at the end of the list. This while loop will execute as long as the two indexes don't cross over each other, in which case we know the value doesn't exist in the list. So first, let's calculate the midpoint and let's get rid of this placeholder pass statement. So I'm going to use the floor divisors operator to get that. I'm going to define a variable called midpoint, and it's going to be the lower index plus the upper index, and then divided by two, and that will give me the floor. It's going to round down to what the midpoint is. All right, then we perform our comparisons. So if the value at the midpoint is the one that we're looking for, well then we got lucky and we can just go ahead and return it. So if the item list value at the midpoint is equal to the item we're looking for, then let's return the midpoint index. Otherwise, we have to move either the lower or upper index to the current midpoint. So if the item that we're looking for
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/binary-search?u=76281980&t=192)** is greater than the value at the current midpoint, then we're going to move the lower index and that's going to be the midpoint plus one. Otherwise, we move the upper index to the midpoint instead, and we move it to the midpoint minus one. And then the loop keeps going. Now, if the loop terminates and the two indexes have crossed each other, then we know that the value isn't in the list and we return none, which is what this code right here does. That's pretty much all we need to do. So let's go ahead and run our code on these test values of 23, 87 and 21. So if we look in the list, 23 and 87 both exist, but the 21 value does not. Okay, so let's run this. And we'll call [[Python (Programming Language)|Python]] on the ordered list. And sure enough that we can see the indexes of the first two numbers being returned while 21 could not be found. And this type of algorithm is pretty efficient. It executes in the logarithmic timescale, which means that every time the list doubles in size, you only have to perform a couple of extra operations on average.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), python (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Determine if a list is sorted](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980&t=0)** - [Instructor] We can use what we've learned about linear searching to determine if a list is already sorted. Now, unfortunately, since we don't know if the list is sorted, we have to traverse each item in the list. And that means that this algorithm will have a big oh of what? Well, if you guessed linear time complexity, then yes, you're correct, because as more items get added to the input list, the number of operations needed to check each item increases correspondingly. So let's open up the issorted_start example here. I have two lists of numbers. One of them is already sorted and the other one is not. And I also have a function named is_sorted, which takes a list of numbers as an argument. So first I need to create a loop to examine each element in the list, up to the next to last one. So for i in the range of 0 to the length of the itemlist -1.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980&t=62)** Okay. Then I need to make sure that each item is less than or equal to the one that comes after it. And obviously that's for a list that's in ascending order. For descending order, I'd make sure of the opposite that each item is larger than the one that follows. If at any point the following number violates that rule, we know the list is unsorted. So I'm going to check to see if the data value at itemlist of the current index is greater than the itemlist value at the index +1. Then I'm going to go ahead and return False. And again, this is for ascending order. For descending order I'd do the opposite, but I want to do ascending order here. And if we reach the end of the list, then we just return True because the list must be sorted at this point. So let's try this out with the two test function calls that we have. Let's open this up and we'll run the issorted. All right. And you can see that the first list is sorted while the second one is not. Now, since we happen to be working with [[Python (Programming Language)|Python]], let's take a look at how Python can handle this situation. There's actually a very Pythonic way of running the same algorithm using the all function, which uses a Python comprehension to do this. If you're not familiar with Python comprehensions, I suggest you watch my Python course on language features if you're interested. Let's close this terminal for a second. So the expression is just one line and it looks like this.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980&t=158)** I'm going to return the result of calling the all function, and inside the all function, I'm going to have an expression. The expression is going to be if the itemlist[i] is less than or equal to the one next to it,
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980&t=181)** for i in the range of the length of the itemlist -1.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/determine-if-a-list-is-sorted?u=76281980&t=196)** And actually let's put this at the bottom of the function and then let's comment out my previous example. Okay, so what this is going to do is the all function is going to execute this expression using this predicate right here. This statement is going to be run and this expression is going to be tested for each iteration of i through the loop. So I'm basically accomplishing in one line of code what I needed several lines of code to do in the brute force method. Let's go ahead and run this again. I'll bring up the terminal. And let's check to see if it works, and sure enough, the results are the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), make (2)
> **Code Identifiers:** issorted_start (1), is_sorted (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 6. Practical Examples with Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Unique filtering with sets](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unique-filtering-with-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unique-filtering-with-sets?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about some [[Algorithms]] that can be implemented using some of the [[Data Structures]] we learned about earlier. For the first example, we're going to use a data structure called a set. Now, we haven't explicitly discussed sets so far, but they're very similar to lists. The main difference is that a set can only contain unique values. I can create a set by passing it an iterable list of values like the integers you see here. But when I print the contents, the duplicate values are not present. There's only one instance of each value. I can also add new items to the set by using the add function. And again, when I print the content, since the number two was already in the set, it isn't added again, but the new number seven is. So let's try this in some code. Alright, so here in my editor, I'm going to open up filter_start. Now, I've already got some code that creates a list of items. In this case, names of different fruits. So what I'm going to do is create a new set, and this is in [[Python (Programming Language)|Python]]. There are other languages that have sets, C#, [[Java]], for example, and if you don't have a set in your language, a dictionary can actually be used as a set. So I'm going to create a set named unique_items and I'll use the set constructor for this. So for this example, I'm going to loop over each item in the list and add that item as a key name to the set with an unused value. Okay, so here's what I'm going to do. I'm going to write for item in items. I'm going to call unique_items.add,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unique-filtering-with-sets?u=76281980&t=97)** and then I'll just print the results. Okay, so we have a new set. I add the items to the set, and you can see that as I'm adding the items, I'm not actually looking at the values, I'm just adding them as I go through. So let's open the terminal. There we go. Okay, so when I run the code, you can see that the duplicate items have all been removed from the list. And now, I have a set of unique fruit names. We can do the same thing with any other iterable object such as a sentence of text. So let's go ahead and close this. Alright, so in this case, I'm going to use what's called a Python comprehension to create the set. So I have a sentence right here, and what I'm going to do is write unique_items = and then inside curly braces, I'm going to write c for c in sentence. So this will get me every character in the sentence, but I want to perform a filtering operation here a little bit. What I want to do is, I want to say, but only if c is an alphanumeric character.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unique-filtering-with-sets?u=76281980&t=180)** All right, and we'll go ahead and comment out my previous example. Alright, so what this code is doing is it's looping over each character in the sentence and it's checking to see if that character is alphanumeric. So it's going to skip over things like the punctuation and the spaces. And then I'm going to print out the results. Alright, so let's try running this. Okay, and when I run again, you can see that there's only, let's see, well, there's only one, well, I've got both an upper and lowercase t, but you can see that pretty much every other character is represented one time, but the problem is I want to fix the part where I've got both the upper and lowercase t. I correctly removed all the spaces and I correctly removed the period in the punctuation. But let's go back and fix the code, so the capital t and the lowercase t, where is it, that is right there, let's make sure that we fix that problem. So what I'm going to do is go back to my expression and I'm going to loop over c for c in sentence.lower. So I'm going to convert the sentence to lowercase and I'll run this again. Okay, and now we've fixed the problem. Now there's only one t. Okay, so what's the time complexity of this particular algorithm? Well, the algorithm has to process each element
>
> **[4:33](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/unique-filtering-with-sets?u=76281980&t=273)** in the list and attempt to perform an addition to the set. And that operation represents one unit of time for each character. So as the number of items in the list grows, the time complexity of this algorithm will grow in a linear fashion, giving us a big O of order n.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1), [[Data Structures]] (1), [[Java]] (1)
> **Code Identifiers:** unique_items (3), filter_start (1)
> **CLI Commands:** python (2), make (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Definitions:** is an  (1)

#### [Value counting with a dictionary](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980&t=0)** - [Instructor] Because the dictionary data structure requires that keys be unique, we can easily use it to implement an algorithm that counts individual items. So remember that a dictionary is conceptually a two-dimensional array of keys and associated values. Each key has to be unique, but the value associated with a key can be anything. So to create a counter, we can simply create a new dictionary, and then loop over the set of items that we want to count. We can use the name of each item as a key, and if the item already exists in the dictionary, then we increment the value that the key corresponds to. Otherwise, we set the value of the key with that item name equal to one. So after we've iterated over all the items, the counter will contain unique keys that represent all the items along with the number of times that that item was encountered. And, just like in the previous example, this one also has a big O of order N, or linear time complexity, since the time it takes to complete the algorithm increases linearly as more items are added to the list. All right, let's try this out in some code. All right, so here in my editor, I'm going to open up the ValueCounter_start, and my code contains a list of items, in this case, a list of fruits. And we want to be able to count the number of each type of item. So to start off, I'm going to create a new dictionary. And to do that, I'm going to use the dict function. Now, this is [[Python (Programming Language)|Python]], so I could also just do this. I could also just do two curly braces,
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980&t=92)** but just for clarity, I'm going to create a new dict, and I'm going to iterate over each item. So for the item in items, what I'm going to do is check to see if the item already exists in the set of keys. If it does, I just need to add one to the value that is associated with that key. So if the item is in counter.keys,
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980&t=123)** then the counter of that item plus equals one.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980&t=131)** Otherwise, I have to initialize that item to be one. And then I just print out the contents of the dictionary. And when I run this,
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/value-counting-with-a-dictionary?u=76281980&t=152)** you can see that the dictionary contains one instance each of the item names with associated values that represent the counts of each item type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Find max value recursively](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/find-max-value-recursively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/find-max-value-recursively?u=76281980&t=0)** - [Instructor] For this example, we're going to use recursion one more time and we're going to write a recursive function to find the maximum value in a list of values. And yes, I do realize that this is a bit of a contrived example, but it's a useful way of seeing recursion work with an example that's not too complex. So here's how the function's going to work. It will accept a list of numeric values. When the function is called, it will check to see if the list has only one item in it. If so, it will just return that value since that's obviously the largest value in the list because it's the only value in the list. Otherwise, it will get the first value in the list and then assign the second comparison value to a recursive call to itself with the remaining values. After all the values are retrieved, each value will be compared with its neighbor to determine which is largest. So if we look at how this is going to work, it's going to produce a chain of function calls until we reach a point where the list is exhausted. Then the chain will work its way back up and compare all the individual values until we found the last one. Alright, so let's write the code for this. Alright, so here in my editor I've got findmax open and I have some code for a list of values and here's my function definition. Let's remove this placeholder pass statement and I'll add the code. And remember, one of the things that we have to have in a recursive function is the breaking condition.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/find-max-value-recursively?u=76281980&t=94)** And this is important to prevent an infinite loop, which will eventually crash. So I'm going to check to see if the length of the items array that I was given is equal to one. And if so, I'll just return the first item in that list. Otherwise I have to store aside the first item in the list and then call the function again with the remaining items. So value one is going to be the first item, and then value two is going to be the result of calling findmax again with the [[Representational State Transfer (REST)|rest]] of the items list. And I'm going to use [[Python (Programming Language)|Python]] notation here to start at the next item in the list. And then a colon and then no number, which basically means get the rest of this list. So index zero means the first item and index one means starting at the second item, the colon and ending bracket means go all the way to the end of the list. Alright, and then I just need to add the comparison logic. So if value one is greater than value two, return value one, else return value two.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/find-max-value-recursively?u=76281980&t=179)** Alright, so let's go ahead and try this out. And if we look at our number list, looks like 87 should be the largest, okay. So let's try this. And sure enough, 87 is the correct result. So if you want to see more details of the function running, you can add a couple of print statements right after the val one and val two variables are set. So let's print val one and val two.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/find-max-value-recursively?u=76281980&t=220)** Okay, and then let's run it again and you can see the function making its way through the list. All right, so what do you think the big O is of this algorithm? So for this recursive function, the big O is essentially the number of times the function is called. And that number is directly affected by the number of items in the list. Because each time we add an item to the list, that results in another function call. So the big O of this algorithm is order of N or linear time complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is called (2), is a  (1), basically means (1)
> **CLI Commands:** find (1), python (1)
> **Speakers:** - [instructor] (1)

#### [Balancing statements with Stack](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=0)** - [Instructor] Let's take a look at a practical example of using a stack to determine whether a programming expression is balanced. So I'm going to open up the balancing_start file, and you can see that we have a set of expressions that use a variety of parentheses and brackets and braces, which are common in many programming languages. Now, each one of these characters needs to be balanced by having a closing version for each opening version, otherwise, the statement is not valid syntax. So how would you go about determining whether a statement that uses these characters is properly balanced? Well, it turns out that a stack is pretty useful for this operation. So let's see how. I'm going to fill out the code for the is_balanced function. So the first thing I'll do is create the stack I'm going to use. And in [[Python (Programming Language)|Python]], that's just a regular list. So I'll call it the statement_stack, and I'll just make my empty list. So now I need to examine every character that is in the statement string. So for each character in the incoming string, what I'll need to do is check first to see if it is one of the three opening characters. And if it is, I'll push the character onto the stack. So if the letter C is in the list of an opening parentheses,
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=88)** an opening brace, or an opening bracket,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=97)** then I'll simply say statement_stack.append(c).
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=105)** Or it might be one of the three closing characters. So if character is in a closing parentheses,
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=118)** a closing brace, or a closing bracket racket, I need to check to see if the stack is currently empty. Because if the stack is empty, then we know right away the expression is not balanced because we don't have a matching opening character and we can just return false. So if the length of the statement_stack is zero, then let's just return false. Otherwise we have to pop the next character off the stack and see if it matches the closing character that we just encountered. So I'll get my test character and I'll call pop on my stack. So if the test character is equal to the closing parentheses and the character I'm looking at is not equal to an opening parentheses, then we know that we can just return false because that's unbalanced. And we can do the same thing with the closing brace and closing bracket, and we'll make these the opening brace and the opening bracket. All right, so in each case, if the character that came off the stack doesn't match up with the closing character, then once again we know the statement is not balanced. All right, there's one more check that we have to do. If we have processed every character in the string
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=212)** and the stack still has characters in it, then we know we have opening characters that did not match closing ones. And the statement is therefore not balanced. So let's go ahead and check that. So if the length of the statement_stack, after all of this is greater than zero, then we return false. And we execute this statement outside of the for loop 'cause we want to do this after we're done checking all the characters. Otherwise, if we've made it all the way to here, we can return true because we've passed all the right tests. And you can see I've got some test expressions ready to go. Some of these are balanced, some of these are obviously not. So let's give this a try.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/balancing-statements-with-stack?u=76281980&t=261)** All right. And in the output we can see that we're catching the unbalanced statements. So here's hello with only one closing parentheses, this one only has one opening bracket, these are pretty obviously not balanced, this one I think is missing a brace. So these are unbalanced. And these up here, hello world, this expression looks like it's properly balanced and so is this one. So this is a good example of how you can use a stack to evaluate the balancing of a statement and more generally the evaluation of an expression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** statement_stack (4), balancing_start (1), is_balanced (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-algorithms-22973142/next-steps?u=76281980&t=0)** - [Narrator] Thanks so much for watching my course, and congratulations on completing it. I hope you enjoyed learning along with me about how to use [[Algorithms]] together with [[Data Structures]] to solve some common programming tasks. In this course, we learned about some of the basic data structures used in common algorithms. Saw how to work with recursion to operate on hierarchical data and repetitive calculations. Investigated sorting and searching algorithms. And even built some practical examples using what we learned throughout the course. No matter what programming language you choose to work in, understanding how to employ different algorithms will make your apps more efficient and easier to maintain. Thanks again for watching. Until next time, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Data Structures]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/programming-foundations-algorithms-4507286/codespaces)

## Skills Covered

- Data Structures
- Algorithm Design
- Programming Foundations

## Path Context

### In [[The Top 10 Most Popular Courses among Engineering Professionals]]
← [[SQL Essential Training]] | **10 of 10**

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Object-Oriented Design]] | **4 of 12** | [[Programming Foundations- Data Structures]] →

## Appears In

- [[The Top 10 Most Popular Courses among Engineering Professionals]]
- [[Become a Programmer- Foundations]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Trees]] — Data Structures
- [[Python Data Structures- Linked Lists]] — Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Data Structures
- [[Complete Guide to C Programming Foundations]] — Programming Foundations
- [[Python Data Structures and Algorithms]] — Data Structures

---

[↑ Back to top](#)