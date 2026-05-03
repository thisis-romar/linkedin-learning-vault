---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-data-structures-25191158
url: "https://www.linkedin.com/learning/programming-foundations-data-structures-25191158"
duration_minutes: 166
duration: 2h 46m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEbMUqPXFmo3Q/learning-public-crop_675_1200/B4EZS4gxWyHoAg-/0/1738262386940?e=2147483647&amp;v=beta&amp;t=4V8QRSAfBZCIob_xSd_b2KONijT15H_N745p6yFZrFw"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Programmer- Foundations]]'
  - '[[Getting Started with Python]]'
prev_courses:
  - '[[Programming Foundations- Algorithms]]'
  - '[[Learning the Python 3 Standard Library]]'
next_courses:
  - '[[Programming Foundations- Design Patterns]]'
  - '[[Level Up- Python]]'
path_nav: '[{"path":"Become a Programmer- Foundations","position":5,"total":12,"prev":"Programming Foundations- Algorithms","next":"Programming Foundations- Design Patterns"},{"path":"Getting Started with Python","position":5,"total":8,"prev":"Learning the Python 3 Standard Library","next":"Level Up- Python"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/data-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Data%20Structures.md)

![Programming Foundations: Data Structures](https://media.licdn.com/dms/image/v2/D4E0DAQEbMUqPXFmo3Q/learning-public-crop_675_1200/B4EZS4gxWyHoAg-/0/1738262386940?e=2147483647&amp;v=beta&amp;t=4V8QRSAfBZCIob_xSd_b2KONijT15H_N745p6yFZrFw)

# Programming Foundations: Data Structures

> This course provides a comprehensive introduction to fundamental data structures, equipping you with the skills you need to implement and utilize arrays, lists, dictionaries, stacks, and queues effectively. Through hands-on exercises and real-world examples, instructor Kathryn Hodge shows you each of how these structures operate, including their efficiency in terms of time and space complexity. An

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158) | 2h 46m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Why to use data structures](#why-to-use-data-structures)
  - [What you need to know](#what-you-need-to-know)
  - [How to use CoderPad](#how-to-use-coderpad)
  - [How to Use GitHub Codespaces](#how-to-use-github-codespaces)
- [**1. Data Fundamentals**](#1-data-fundamentals) (5 videos)
  - [What is data?](#what-is-data)
  - [Introduction to data structures](#introduction-to-data-structures)
  - [Built-in data structures in Python](#built-in-data-structures-in-python)
  - [Common operations on data structures](#common-operations-on-data-structures)
  - [Big-O notation](#big-o-notation)
- [**2. Array-Like Structures**](#2-array-like-structures) (12 videos)
  - [What is an array?](#what-is-an-array)
  - [Create a list in Python](#create-a-list-in-python)
  - [Retrieve data from a list in Python](#retrieve-data-from-a-list-in-python)
  - [Mutate a list in Python](#mutate-a-list-in-python)
  - [Solution: Swap items](#solution-swap-items)
  - [Multidimensional lists in Python](#multidimensional-lists-in-python)
  - [Tuples in Python](#tuples-in-python)
  - [Solution: Square items](#solution-square-items)
  - [Search array-like structures](#search-array-like-structures)
  - [Sort array-like structures](#sort-array-like-structures)
  - [Solution: Find the second smallest item](#solution-find-the-second-smallest-item)
  - [When to use array-like structures](#when-to-use-array-like-structures)
- [**3. Dictionaries**](#3-dictionaries) (8 videos)
  - [What is a dictionary?](#what-is-a-dictionary)
  - [Create a dictionary in Python](#create-a-dictionary-in-python)
  - [Mutate a dictionary in Python](#mutate-a-dictionary-in-python)
  - [Solution: Update salary](#solution-update-salary)
  - [Handle missing dictionary keys](#handle-missing-dictionary-keys)
  - [Retrieve keys and value collections from dictionaries](#retrieve-keys-and-value-collections-from-dictionaries)
  - [Solution: Clean user preferences](#solution-clean-user-preferences)
  - [When to use dictionaries](#when-to-use-dictionaries)
- [**4. Sets**](#4-sets) (8 videos)
  - [What is a set?](#what-is-a-set)
  - [Determine set membership in Python](#determine-set-membership-in-python)
  - [Mutate a set in Python](#mutate-a-set-in-python)
  - [Solution: Unique characters](#solution-unique-characters)
  - [Operations on sets in Python](#operations-on-sets-in-python)
  - [Immutable sets in Python](#immutable-sets-in-python)
  - [Solution: Mutual friends](#solution-mutual-friends)
  - [When to use sets](#when-to-use-sets)
- [**5. Queues**](#5-queues) (4 videos)
  - [What is a queue?](#what-is-a-queue)
  - [Use a deque as a queue in Python](#use-a-deque-as-a-queue-in-python)
  - [Solution: Generate binary numbers](#solution-generate-binary-numbers)
  - [When to use queues](#when-to-use-queues)
- [**6. Stacks**](#6-stacks) (5 videos)
  - [What is a stack?](#what-is-a-stack)
  - [Use a list as a stack in Python](#use-a-list-as-a-stack-in-python)
  - [Use a deque as a stack in Python](#use-a-deque-as-a-stack-in-python)
  - [Solution: Matching parentheses](#solution-matching-parentheses)
  - [When to use stacks](#when-to-use-stacks)
- [**7. Practice Using Data Structures in Python Applications**](#7-practice-using-data-structures-in-python-applications) (6 videos)
  - [GitHub Codespace challenge: To-do list](#github-codespace-challenge-to-do-list)
  - [GitHub Codespace solution: To-do list](#github-codespace-solution-to-do-list)
  - [GitHub Codespace challenge: Reservation waitlist](#github-codespace-challenge-reservation-waitlist)
  - [GitHub Codespace solution: Reservation waitlist](#github-codespace-solution-reservation-waitlist)
  - [GitHub Codespace challenge: Inventory tracker](#github-codespace-challenge-inventory-tracker)
  - [GitHub Codespace solution: Inventory tracker](#github-codespace-solution-inventory-tracker)
- [**8. Glossaries**](#8-glossaries) (0 videos)
- [**9. Conclusion**](#9-conclusion) (1 videos)
  - [How to decide which data structure to use](#how-to-decide-which-data-structure-to-use)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why to use data structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/why-use-data-structures-24503276?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/why-use-data-structures-24503276?u=76281980&t=0)** - Are you new to programming? Are you starting to work with different types of data and struggling to organize it in your programs? If so, this is the course for you. We're going to talk all about data and [[Data Structures]]. When I say data, think numbers, letters, and more. If you've ever walked into the container store, there are many different types of containers, giving you different ways of storing, accessing, and sorting your items. Similarly, there are many different data structures. Hi, I'm Kathryn Hodge, and in this course we'll dive into the data and look at different ways of organizing and storing your data with lists, dictionaries, sets, stacks, queues, and more. So join me and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2)
> **Speakers:** - are (1)

#### [What you need to know](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-you-need-to-know-24296966?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-you-need-to-know-24296966?u=76281980&t=0)** - For this course, I expect you to have written code before. You should understand the basic concepts of programming, including variables, loops, functions, and other basic [[Software Development]] jargon. We'll be writing our code in [[Python (Programming Language)|Python]] 3. Now, you don't need to know python's super well for this course since the syntax is pretty easy to pick up. We'll be talking about each data structure we cover in theory first, and then you'll use them in Python with a practical example. You may have only programmed for a few months or several years, but you should be comfortable developing in a general purpose programming language. This is also a great course for those of you who are preparing for technical interviews as many cover [[Data Structures]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Software Development]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (3)
> **Versions:** python 3 (1)
> **Speakers:** - for (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-coder-pad-24296963?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-coder-pad-24296963?u=76281980&t=0)** - Throughout this course, we'll be using CoderPad to test our knowledge of [[Data Structures]]. These are small code snippets focused on very specific functionality. CoderPad challenges have four main areas, instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used. You can use these drag handles to allocate space as you'd like. Now let's complete this coding challenge. There are comments in the starting code showing you where to put your solution. When you click the Test my code button, you'll see a message indicating whether your code returned the correct result. Let's change the code to something that fails. In the output, we get a failure message. Now if you're stuck, there are ways you can ask for help. The show_expected_result and show_hints variables determine whether you can see the expected results and any hints. We can change them to true to control the output. Now we can see the expected result is 19 and a hint for the solution. Now the code editor in the lower right shows how your solution is used. You can change this code to experiment with different test cases. Let's make the largest number 21. Now the expected result is 21 instead of 19.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-coder-pad-24296963?u=76281980&t=95)** When you've finished each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Code Identifiers:** show_expected_result (1), show_hints (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - throughout (1)

#### [How to Use GitHub Codespaces](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-github-codespaces-9708965?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-github-codespaces-9708965?u=76281980&t=0)** - [Instructor] Before jumping into the course, there are a few logistics we should talk about. We'll be using [[GitHub]] for the exercise files that'll go along with each video. To access the code for a given video, you'll go to the appropriate branch In GitHub. The format is the chapter number, underscore, video number, and then a B or E depending on whether the code is the beginning state, or end state for that video. For example, the starter code for the second video in chapter six will be found in 06_02b. This stands for chapter six, video two, and then B for beginning code. The ending code for this video would be in branch 06_02e. By clicking the different branches, I can view the code online. And this is great for viewing the code, but if I want to actually run the code, I can use GitHub [[Codespaces]]. To do this, we'll click on Code, Codespaces, and create a codespace on this branch. GitHub Codespaces is a cloud-powered environment built into GitHub that makes it easier for us to write and run code without worrying too much about the setup. Within our codespace, there are a few things already set up for us. One is [[Python (Programming Language)|Python]]. There's our Python version, Python 3.10.12. And there's our code and the app.py file.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-use-github-codespaces-9708965?u=76281980&t=100)** Let's run it, python app.py. With this GitHub codespace, we can easily run our code in the terminal, and with GitHub Codespaces, we can easily get started with minimal overhead. Now let's jump into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Codespaces]] (4), [[Python (Programming Language)|Python]] (4)
> **Tools:** github (7), terminal (1)
> **CLI Commands:** python (4)
> **File Paths:** app.py (2)
> **Versions:** python 3 (1), 10.12 (1)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** exercise files (1), starter code (1)
> **Definitions:** stands for (1), is a  (1)


### 1. Data Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-data-24506004?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-data-24506004?u=76281980&t=0)** - In computer science, data is information that is stored or processed by a computer. While that might seem fairly abstract, there are actually lots of data points we use in everyday life. A birthday, that's a data point. Latitude and longitude of a specific location, that's a piece of data. The name of a city, whether a store is open or closed, your initials, these are all data points. These can all be considered pieces of data, and we store them in different ways within a computer, but how exactly do we represent these in our code or use them in our programs? Well, the short answer is that it's a lot of ones and zeros. However, to make things a little easier, programming languages have created something called data types that we use to represent common pieces of data in our code. What are some common data types? Think numbers, letters, true false values, and the programs we create, we use and store a lot of these, and programming languages have created conventions on how these pieces of data can be described and manipulated in code. We classify different pieces of data with data types based on their value. For example, there's a data type for letters and symbols, and there are various data types for numbers. So a data type is defined by the possible values it can be, but it's also defined by how we operate on that piece of data. In the most general sense, we can think of whole numbers as a data type. Now, usually this is called something else by developers,
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-data-24506004?u=76281980&t=95)** which we'll get to, but it's the set of possible values that includes every whole number between a very high upper limit and a very low lower limit. Operations wise, we can add numbers, subtract them, and more. In [[Python (Programming Language)|Python]], we have four core primitive data types, int, float, boolean and string. Any whole number is classified as an integer. We represent numbers with decimal points as floats. For true false value, we classify it as a boolean. To represent textual information, we use the string data type. In fact, you can use the type function in Python to discover what data type a given value or variable is classified as. Unlike other languages, these data types are not explicitly written out with syntax. It's implicit, but just because you aren't writing it out doesn't mean it doesn't exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), make (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Introduction to data structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/introduction-to-data-structures-24501444?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/introduction-to-data-structures-24501444?u=76281980&t=0)** - So far, we've talked about a few basic data types, int, float, and boolean. These let us store a single piece of data, whether that's a single number or a single piece of text. But what happens if we want to store more than one int or more than one string? In fact, what happens if we want to store a list of floats or a series of numbers? This is where [[Data Structures]] come in. Data structures are containers. They allow us to combine several pieces of data into a single structure. Let's look at an example. Let's say we wanted to keep track of the number of pets each student had in a given class. We would need a way to store and access each individual student's number of pets. To start, we could use a data structure to store our data. We won't introduce any formal terminology just yet, but consider this row of numbers. Here, each number represents the number of pets one of the students has in the class. The entire row represents the entire data set of how many pets each individual student in the class has. Now, why use a data structure? We could have created individual variables for every student and store the appropriate number of pets each student has in each variable. However, when we try to do anything with this data, like compute the average number of pets, or try to find the value that's most common, it will be very difficult because the variables are not linked in any way. Furthermore, if we didn't have this row
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/introduction-to-data-structures-24501444?u=76281980&t=95)** and didn't use an encompassing data structure, it would be hard to keep track of which variables and which numbers to use in our computations. Ultimately, each variable would be in isolation, and the overall dataset would not be organized in any way. We need data structures because they help us connect and group our data. Different data structures are not only designed to organize and store data for a specific purpose, but they also give us a way to access and work with that data in an efficient manner. Now, if this idea seems intimidating, don't worry. This entire course is about all the different ways you can store, access, and organize your data. That's what data structures are all about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (5)
> **CLI Commands:** find (1)
> **Speakers:** - so (1)

#### [Built-in data structures in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/built-in-data-structures-in-python-24501442?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/built-in-data-structures-in-python-24501442?u=76281980&t=0)** - Each programming language comes with built-in [[Data Structures]] that are native to that language. Let's take a look at some of the ones that come for free with [[Python (Programming Language)|Python]]. We'll discuss each of these more in depth in later chapters, but this is an introduction to the different ways we can store groups of data in Python. First, we have a list. This is the most basic data structure in Python. It's used to store a collection of items in a specific order, and it's denoted by square brackets with each item separated by commas. Here we have a list containing five integers. Similar to a list is a tuple. The main difference between a tuple and a list is that a tuple is immutable, meaning it cannot be changed after it's created. A tuple is denoted with parentheses and each item is separated by commas. Here we have a tuple with two items, five and one. This structure is often used to store related data, such as a pair of coordinates. We also have dictionaries in Python. Dictionaries are used to store key value pairs where the key is used to retrieve the value. These are denoted with curly braces and each item is separated by commas. Many times a dictionary is used to represent unordered data, where each key value pair represents a relationship. With this example data, it doesn't matter which key value pair is first in the dictionary, only that the mappings between the keys and the values stay the same.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/built-in-data-structures-in-python-24501442?u=76281980&t=94)** Another useful structure in Python is a set. These are used to store a collection of unique items in an unordered manner. They have curly braces with each item separated by commas, and they're often used for filtering a group of items. The last built-in data structure we'll discuss is a deque. This stands for a double-ended queue. It's similar to a list, but allows you to insert and remove from both ends, the front and the back. This data structure is often used for implementing other data structures such as keys and stacks found in computer science theory. And this brings up a good point. Some of the built-in data structures in a given language will map directly to those in computer science theory, but not every structure will. Sometimes you'll have to create your own structure or use a built-in Python data structure in a unique way to get the functionality you want. That's what this course is all about. We'll explore how we can use the built-in data structures in Python to achieve the data structure principles discussed in computer science theory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Data Structures]] (4)
> **CLI Commands:** python (7)
> **Definitions:** is a  (3), is an  (1), stands for (1)
> **Analogies:** similar to (2), such as (2)
> **Best Practices:** the key is (1)
> **Speakers:** - each (1)

#### [Common operations on data structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/common-operations-on-data-structures-24300489?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/common-operations-on-data-structures-24300489?u=76281980&t=0)** - [[Data Structures]] are more than just containers for storing data. They come with operations that allow us to efficiently manage and manipulate the data. One of the most common operations is insertion, which involves adding an element to the structure. In the case of a linear structure, elements can be added at the beginning or end or at a specific position. Another important operation is deletion, which removes an element from the structure. This could mean removing an item by its value or location within a sequence. When working with large data sets, you often need to search for specific information. To do this, you might use a traversal, an operation where each element is visited sequentially, allowing you to inspect or modify data as needed. To make data easier to interpret, you could also sort it in a particular order, either ascending or descending, using sorting [[Algorithms]] like Merge Sort or Quick Sort. Sorting can significantly improve the efficiency of other operations, like searching, by organizing data in a logical way. When specific elements are needed from a data structure, you can access them directly. Often, you'll access them either by their position or by an ID that refers to that element. These operations form the foundation for interacting with data structures in programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Algorithms]] (1)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - data (1)

#### [Big-O notation](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/big-o-notation-24300485?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/big-o-notation-24300485?u=76281980&t=0)** - In order to decide which data structure to use or whether a given structure fits our needs, we need a way to compare them. One way to compare them is with Big O notation. Big O notation describes the performance or complexity of an operation, independently of input. Essentially, it tells you how efficient an operation is. Now, how does this relate to [[Data Structures]]? For each operation, we can come up with its time complexity or how long it takes to run, independent of input. By comparing the time complexity across different data structures, we can decide whether or not one fits our use case better than another. There are different time complexities we can categorize an operation as. First there's constant time complexity or O of 1. This means that the time required by an algorithm does not depend on the size of the input. It doesn't matter if the input is 100 items or one item. The operation will take the same amount of time. To give an example, adding a key value pair to a dictionary in [[Python (Programming Language)|Python]] takes the same amount of time, no matter how large the dictionary is. Another time complexity we have is linear time O of n. This means that the time required by the algorithm grows linearly with the size of the input. For example, if it takes 10 milliseconds to search a list of 10 items, then it would take 100 milliseconds to search a list of 100 items.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/big-o-notation-24300485?u=76281980&t=93)** The time required to complete the operation grows linearly with the size of the input. We also have quadratic time complexity, which is O of n squared. This means that the time to perform the operation is proportional to the square of the number of items in the collection. This can result in very slow performance for large inputs, which brings up another point. A given operation may perform better than its given time complexity with certain inputs. Big O notation describes the algorithm's worst case performance. It does not take into account the best case or even the average case performance, but these can be important factors when choosing which data structure to use. Not every operation on a given data structure will have constant or linear time complexity. Each data structure is built in a way to optimize for certain operations. That might be searching for data or inserting and deleting data or organizing data in a certain order. It's essential to consider what operations you need for your data and compare them in terms of time complexity to determine which data structure will fit your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Python (Programming Language)|Python]] (1)
> **Definitions:** means that (3)
> **CLI Commands:** python (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - in (1)


### 2. Array-Like Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an array?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-an-array-24503277?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-an-array-24503277?u=76281980&t=0)** - Let's jump in to our first theoretical data structure, an array. Think of an array like a row of seats in a movie theater. Each seat is numbered zero, one, two, three, and so on depending on its position in the row. We can think of this row as a collection of seats, where each seat can either be occupied by a person or left empty. Similarly, each spot in an array can hold data or remain empty, and each spot has a position, or an index. That allows us to identify it later. Formally, an array is a collection of elements, where each item is identified by an index or a position. The first part of the definition states that an array consists of a collection of elements. For example, here, a collection of six numbers, which we'll assume are integers. In order for this to be a data structure, there needs to be a defined method for storing and accessing items. For arrays, that's done with indexing. Each number in the array is associated with a unique numerical index based on its position in the array. In this case, we can say the first number in the array, zero, is at index zero. The second number, two, is at index one. The third number, 18, has index two, and so forth. I find it useful to think of each index as a slot. Thinking in this way, we could say the index three slot has the value 40,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-an-array-24503277?u=76281980&t=93)** and the index four slot has the value 14. If this still seems confusing, let's take a look at the movie analogy again. Imagine a single row of seats in a movie theater. Each seat is associated with a specific index or number that identifies the seat. You have seat zero, one, two, et cetera. Think of our numbers as the values in those seats, the values at those indices. The collection of these values in those seats make up the row, and in essence, our array. You also may have noticed that the positional indexing always started at zero, and ended at the length that the array minus one, or the number of items in the array minus one. This is called zero-based indexing, and many popular programming languages, including [[Python (Programming Language)|Python]], use this type of indexing in their arrays. Now, no matter what type of indexing system you're using, the index is very important. This is how you'll access your data in the array structure. Now, every programming language provides built-in [[Data Structures]] differently. Python itself does not have a data structure called an array, but it does have array-like structures. These include tuples and lists, which we'll explore throughout this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** python (2), find (1), make (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - let (1)

#### [Create a list in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-list-in-python-24504258?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-list-in-python-24504258?u=76281980&t=0)** - [Instructor] We've talked about arrays in theory, but now it's time to put them to practice in [[Python (Programming Language)|Python]] with a list. Imagine we want to compute the average number of books each student in a class has read this year. This is a good use case for a data structure because we need a way to store and access each student's individual number of books as well as compute the average. First, let's create a list to represent the number of books each student has read. Each number in the list corresponds to the number of books read by a specific student. Here we're initializing the list with values that represent this data. While it's technically possible to mix different types of data in the same list, it's generally best to stick to similar types to avoid confusion and save memory. Lists, like other collections, are typically used to store related data. Now back to our example, to compute the average number of books read, we first need to determine how many students are in the class. This means we'll need to calculate the length of the list. We can do this easily using python's built-in len function. This'll tell us how many numbers, or in our case, students are in the list. Let's print it out to the console. Let's run it. There are 16 students in the class. To calculate the average, we'll need both the total number
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-list-in-python-24504258?u=76281980&t=96)** of students and the sum of all the books read by them. In order to sum the contents, we'll need to learn how to access the data in our data structure, and we'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Retrieve data from a list in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-data-from-a-list-in-python-24506010?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-data-from-a-list-in-python-24506010?u=76281980&t=0)** - [Instructor] To find the average number of books read per student, we need to access each item in the list and sum the contents. We can do this by using the index we mentioned in array theory. Let's create a variable called item_at_index_3. We can access this item with the list name, so that's student_books_list[3]. This will retrieve the fourth number in the list since indexing starts at zero. In our example, the fourth item is seven. Now it's important to remember what indices are valid for a given list. For our list of numbers, we cannot access an index greater than the length of the list. If we do, [[Python (Programming Language)|Python]] will raise an index out of range error, but let's try it and see what happens. IndexError: list index out of range. This occurs because the program is trying to access an item at a position that's outside the list's limit, hence out of range. So let's comment that out for now. Now, the exact way you initialize an array-like structure or access its elements will vary by language, but the overall concept is the same. In fact, something that's unique with Python is you can use negative indices to retrieve items from the back of the list.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-data-from-a-list-in-python-24506010?u=76281980&t=93)** For example, accessing the negative three index of the list will give me the third item from the back of the list. In this case, that'll be six. Let's run it and see. And we get 6. So how does all of this help us compute the average? Well, it helps us access each item so we can sum the contents in the list. Let's create a variable to store that sum. Then we can use something called a for loop to access each item in the list, adding each entry to the overall total. Here we use the four keyword and declare variable called individual books that will hold the particular book count we're accessing. We retrieve each item in the list and do a specific operation with it. In this case, that operation is adding the item to our total books variable. This for loop continues to run until we've accessed every item in the list and added it to the sum. When it reaches the end of the list, the for loop exits and we print out the total number of books. Now that we have both the total number of students and the sum of all the books read, we can compute the average. Let's print it out and run it.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-data-from-a-list-in-python-24506010?u=76281980&t=190)** We use 0.2 here, so our average books value comes with two decimal places. Average books will be a decimal number because division in Python is exact. Let's run it. The average number of books read per student is 4.50. By using a data structure, a list in this case, we were able to store and process our data to compute the average number of books read by students in the class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), find (1)
> **Versions:** 0.2 (1), 4.50 (1)
> **Code Identifiers:** student_books_list (1)
> **Cross-References:** we mentioned (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Mutate a list in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-list-in-python-24501443?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-list-in-python-24501443?u=76281980&t=0)** - [Instructor] Sometimes you may need to modify or update the data in your list. For example, let's say the school had a reading competition and a few students read more books, so you need to update their book counts. We'll say the first student read three more books, the second student read one more book, and the last student read two more books. To reflect this, we'll need to modify the values in our student books list. Modifying an item is very similar to accessing one. We'll use the list name, student_books_list, square brackets, and then the index to specify which entry we want to change. In this case, zero. We'll update the student at index zero who originally read five books, but now has read eight, so we'll update it with eight. This will completely replace the current value at index zero. Next, we'll update the value at index one. The student at this index had already read three books, and now they've read one more. Instead of replacing the value with four, we'll retrieve the current value with the name of the list at index one, increment it by one, and assign it to the index one position. We can simplify this even further by using the plus operator with the assignment.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-list-in-python-24501443?u=76281980&t=97)** Like with the other implementation, this increments the value at index one by one.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-list-in-python-24501443?u=76281980&t=108)** The last student read two more books, so we can increment their value by two. We'll retrieve them with the negative one index and then increment it by two. Now sometimes, new students will join the class and they've read books too. We can add their book counts to the list with the append function. We'll use the list name and then append with the value we want to add to the list. We'll say one new student read three books, and then another new student read five books. Let's see how these changes affect our average calculation. That's at the bottom of our script. The total number of books is now 87, and our average has gone up. By updating your data, you can influence and alter the final results.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **Code Identifiers:** student_books_list (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Swap items](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-swap-items-24501451?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-swap-items-24501451?u=76281980&t=0)** - [Instructor] In programming, swapping values in a list is a common task often required in [[Algorithms]] like sorting or shuffling data. Let's walk through a [[Python (Programming Language)|Python]] solution that swaps items in a list. When swapping values, you have a few options. You could copy over all the items in the array to a new array in their appropriate location. In this case, we want to do the operation in place, meaning we do not want to use an extra array. This in-place approach is efficient as it saves memory and allows for quick modifications. The swap operation involves two indices in a list that point to the items we want to exchange. To effectively swap these items in place, we can follow a series of steps. First, we'll store the value at the first index in a temporary variable. Then we'll overwrite the value at the first index with the value at the second index. At the end, we'll sign the value from the temporary variable to the second index. This process ensures that we don't lose any data during the swap. The use of a temporary variable is a classic programming technique for safely storing data during operations that require overriding or rearranging values. With that, let's get to the implementation. First, we'll create a new variable that will store the value at the first index.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-swap-items-24501451?u=76281980&t=96)** Then we'll overwrite the value at index1 with the value at index2. Since the current value at index2 is already saved in a variable, to complete the swap, we'll sign the value from the temporary variable to index2. At the end, we'll return the modified list. Let's run it. In the output we can see the items that index1 and index2 are swapped correctly. It's important to consider some edge cases as well. For instance, if the two indices are the same, no change will occur because you're effectively swapping the element with itself resulting in an unchanged list. When working with empty lists, attempting to swap elements can lead to errors. In this case, we're assuming the input is valid and there are items to swap, but it's important to understand the assumptions you're making as you're writing your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Multidimensional lists in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=0)** - [Instructor] In some cases, a simple list isn't enough to store complex [[Data Structures]]. For example, consider a seating chart in a classroom where you need to track which student is sitting at a specific row and column.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=19)** In [[Python (Programming Language)|Python]], you can achieve this using a multi-dimensional list, also known as a nested list. These lists allow you to store multiple lists within a single list, giving you the flexibility to represent 2D or even 3D structures. Here we have a two dimensional list that represents the seats assigned to students in a class. The outer list contains four inner lists, each representing a row in a classroom. The elements of the inner lists are the student's names ordered from left to right according to their seating arrangement. To access a specific student, we use two indices. One for selecting the row and another for selecting the seat in that row. For instance, if we wanted to select the second student in the third row, we would retrieve Lauren. The third row is at index two of the outer list, so the first index we'll use is index two. Then to retrieve the second item within that row, that's Lauren, we'll use index one. That's the index of the second item in the third row. Let's run it. In the output we get Lauren. Now let's enhance this example by displaying each student along with their row number and seat number. To start, we'll loop through the seating chart
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=113)** and print out the row number along with the list of students in that row.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=124)** Here we use Python's built-in enumerate function to loop through the seating chart. The enumerate function provides both the index I and the value row during the iteration. So on the first iteration, I will be zero or the first row, and the row variable will contain the list of students in that row. For our print statement, we print out the row number and the contents of the row. We add one to the row number because we want the counting to start at one and not zero. Let's run it. And there's our seating chart on display. Let's make it show the seat number two. This means we'll need to iterate through each inner list to display the exact student in a given seat, which is a row and a column number. To do this, we'll add an inner loop. We'll enumerate over each row pulling out the student's name.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=190)** Instead of printing the row and then all of the students, we'll print the student name is in a given row in seat. Let's run it.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/multidimensional-lists-in-python-24504259?u=76281980&t=212)** For each student in the list, we display the row number and the seat number. The C is calculated by using the J index, which tells us what index we're at within the inner list containing the students. It's the column the student C is at. For the row number, we use the exact same methodology as we used in the last print statement where we use I for the index and we increment it by one, so it displays well in the terminal. When we enumerate the row, we get access to the student's name, so we can print that out right to the console. In the output, we see Sarah at row one and seat one and Claire in the same row, but seat two. This is exactly how it looks in our seating chart variable. It's important to remember that what we're displaying here is not the exact index of where the seat is at. We increment both the row and the seat by one since most non-developers do not use zero based indexing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** python (2), make (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** for example (1), for instance (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Tuples in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/tuples-in-python-24503275?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/tuples-in-python-24503275?u=76281980&t=0)** - [Instructor] Another array like data structure in [[Python (Programming Language)|Python]] is the tuple. Similar to a list, a tuple allows you to store a collection of values, but with one key difference. It's immutable, meaning its contents cannot be changed. This makes tuples ideal for storing values that should remain constant, such as coordinates or RGB values. To create a tuple in Python, we use parentheses and separate each value with a comma. For example, here we store the values 5 and 2 in a tuple. Once it's created, it cannot be modified. To access individual values in the tuple, we can use indexing, just like with the list. We'll access the first value at index 0, and then the second at index 1. Here x has the value 5 and y has the value 2. Let's see that in the console. 5 and 2. Now, besides storing values, tuples are also useful for returning multiple values from a function. Let's create a function that returns both the area and perimeter of a square. To return both of these values, we can use a tuple. While parentheses are optional, it's a good practice to include them for readability. Now, let's call this function. We'll use the name of the function and then a value we want
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/tuples-in-python-24503275?u=76281980&t=94)** to be the side length, let's say 5. Then we'll store the result in a variable. We'll call that variable result. Then we can access the area and perimeter by indexing into the tuple. The area will be at index 0, and the perimeter will be at index 1. Let's run it. With the side length of 5, the area is 25 and the perimeter is 20. In these examples, tuples allowed us to store ordered immutable values and return multiple values from a function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Analogies:** similar to (1), such as (1), for example (1), just like (1)
> **CLI Commands:** python (2)
> **Env Vars:** rgb (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Square items](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-square-items-24296969?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-square-items-24296969?u=76281980&t=0)** - [Instructor] To square items in a given list, we'll need to access each item and perform an operation on it. Then we'll want to store the original value and its results in a new list containing tuple. Let's start by creating a list that'll store those resulting tuples. This will be the list we return at the end of the function. To populate this list, we'll loop through our input list and access each element. For each element x in the list, or lst, we'll perform the operation to compute it square. So that's x * x. And then we'll store both the original and squared values in a tuple. The original value is x, and to create the tuple, we'll use two parentheses. Then we'll append this to our result list using the append function. After the loop is finished, we return the result list, which now contains the two of the original values and their squared values. Now in [[Python (Programming Language)|Python]], we can actually condense this logic even more using a comprehension. This line of code creates a new list defined by square brackets, and it's a list of tuple. The tuple are constructed for each item x in the original list, and each tuple contains two elements,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-square-items-24296969?u=76281980&t=96)** the original item and then its squared value. Let's run it. Our code works as expected. In the output, we can see a tuple generated for each item collected into a list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Search array-like structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/search-array-like-structures-24300488?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/search-array-like-structures-24300488?u=76281980&t=0)** - [Instructor] We were able to access specific items in a list or tuple earlier because we knew their index, we knew exactly where they were stored. But what happens when you don't know the index of an item you're searching for, or if the item even exists at all? In most cases, searching is about determining whether a value exists in a list or not. Sometimes you'll also want to know the index of the item or even retrieve the item itself if it's found. The most straightforward solution is to check every item in the list, examining each element to see if it matches the one you're looking for. If you find a match, you return true. If you reach the end of the structure without finding it, you return false. In many languages, you can do this using a for loop to iterate over the list, checking each item at every index. Let's try it in [[Python (Programming Language)|Python]]. We'll start by creating a list and defining the item we want to search for. Then we'll write a function that looks for the item in the list. If the item is found, we return true. Otherwise, if we've checked all of the elements in the list and don't find it, we return false. Let's search for the item. Let's run it. The item is found in the list, and seven is the last item in the list. This is known as linear search or a sequential search.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/search-array-like-structures-24300488?u=76281980&t=100)** It's a simple brute force approach where we check each item from the beginning to the end. While it's easy to understand, it's not the most efficient, especially with large data sets. The more items there are, the longer the search will take. If the item happens to be the first one, the search is quick and we return true. But in the worst case where the item isn't present, you have to check every single element. This is why we say linear search is a linear time algorithm. The time it takes to complete the search grows linearly with the size of the input. For example, if your list is five times larger, the search will take five times as long. The time complexity for linear search is O of N, where N represents the size of the input. Now, while we just wrote out this search algorithm manually, Python actually has built in search functionality for lists. The index method lets you find the index of the first occurrence of an element in the list. You can use this index to retrieve the element, but if the element doesn't exist, Python raises a value error. Using the index method seems simple, but it's important to remember that this is still performing a linear search behind the scenes. Just because you're not writing the algorithm yourself doesn't mean it's not happening. Before using the index method,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/search-array-like-structures-24300488?u=76281980&t=192)** make sure you really need it in your code. Since the method knows nothing about the values in the list other than its structure, it can't optimize the search. It has to check each item one by one. Now, sometimes this linear search is your only option if the items are unsorted and you know nothing about your data. However, one way to speed up your search time is if your data structure is already sorted. But keep in mind that sorting the data itself takes time, and sometimes the cost of sorting might outweigh the benefits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** find (3), python (3), make (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Sort array-like structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/sort-array-like-structures-24296968?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/sort-array-like-structures-24296968?u=76281980&t=0)** - [Instructor] Sometimes we'll want to search for multiple elements in a list within a short period of time. If we run a linear search for each item, this can become time consuming. In situations where we anticipate searching for many different items, it might be worth it to sort the list first to make future searches faster. So how do we sort the items? Well, usually there's a natural order to our data. For instance, with a list of numbers, we might sort them in increasing or decreasing order. For characters and strings, we can sort them alphabetically. To sort the items, we can implement a sorting function ourselves, or usually this behavior is built into the programming language through a sort function. Let's see how it works In [[Python (Programming Language)|Python]]. In Python, we have the sorted function, which makes sorting simple. You pass in a list you want to sort, and it returns a new list sorted in ascending order by default. Let's run it. We can change how this function sorts by using additional inputs. For example, let's say we wanted to sort it in descending order with the larger numbers at the front. We can add reverse=True in order to assort it in descending order. Let's run it again. This puts 7 at the front. Now, let's say we have a list of tuples. In this example, we have a list
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/sort-array-like-structures-24296968?u=76281980&t=97)** of students and their corresponding grades. Now, this list looks different from the other one, because there's not a natural order to the data. We have two main options. We can sort the list alphabetically by the student names or by their grades, either in ascending or descending order. We can even create a custom sort based on both the name and the grade. By default, passing this list and to sort it will sort it by the first item in each tuple and use its natural ordering. In this case, it puts the student grades in alphabetical order by name. We have Matt, Rebecca, and then Sarah. We can override this functionality by creating a lambda function that defines how the list should be sorted. Let's sort them in descending order by grade. We'll keep the list passed in, but we'll add a new argument that's a lambda. This Lambda will use a given tuple and look at the second entry of the tuple for the ordering. That's the item at index 1. Since we want descending order, we'll set the reverse argument to true. Let's run it. Now the list is shown in descending order by grade. We have 91, 89, and 82. The key takeaway here is that sometimes you'll need to define a custom sorting method based on your specific use case. Like searching, sorting can be computationally expensive, because it requires comparing items and rearranging them.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/sort-array-like-structures-24296968?u=76281980&t=193)** The number of comparisons depends on the sorting algorithm used and how well you know your data. Sorting can save time during searches, but if you're not frequently searching your data, sorting may not be necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), make (1)
> **Analogies:** for instance (1), for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the second smallest item](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-find-the-second-smallest-item-24296962?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-find-the-second-smallest-item-24296962?u=76281980&t=0)** - [Instructor] Let's walk through a solution for finding the second smallest item in a list of integers. Sorting the list might seem like an easy solution, but for this challenge we'll solve it without using any built-in functions like min or sorted. We'll start by initializing two variables, smallest and second smallest. We'll set both to infinity initially to represent we haven't found any values yet. As we iterate over the list, we'll compare each item to the current smallest. If the current item is smaller, we'll update both the smallest and second smallest. The second smallest will become the current smallest, and the smallest will now become our num. Now, if the current item is greater than the smallest, but less than the second smallest, we'll update the second smallest to be our num. With this implementation, we always maintain the two smallest unique values without sorting the list. After traversing the list and updating the smallest and second smallest as needed, we'll perform one final check. If the second smallest is still infinity, this means we never found a valid second smallest value during the iteration.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-find-the-second-smallest-item-24296962?u=76281980&t=93)** So we'll return none. Otherwise we'll return the value of the second smallest. This is the second smallest value in the list. Now, that's our implementation. This approach shows how to efficiently solve the problem in a single pass through the list, making it much faster than sorting. Let's run it. In the output, we can see the second smallest item is returned. Our code works as expected.

> [!info]- Semantic Content
>
> **Non-Speech:** (clicking keyboard) (6)
> **Speakers:** - [instructor] (1)

#### [When to use array-like structures](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-array-like-structures-24506013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-array-like-structures-24506013?u=76281980&t=0)** - [Instructor] Lists and tuples are versatile [[Data Structures]] in [[Python (Programming Language)|Python]]. Each offering unique trade-offs for handling sequential data. Lists are dynamic, mutable, and resizable, making them an excellent choice when you need to store a collection of items that may change in size. You can easily add or remove items from a list without worrying about predefined capacity, and it automatically adjusts its size as needed. The list in Python is similar to an array list in other languages, meaning it has a bit more overhead due to its flexibility. However, this added flexibility comes with significant advantages, especially when working with data sets that are constantly changing. With lists, accessing, modifying, or removing items is quick and efficient using indexing. For example, if you know the index of an item, you can retrieve it or update it in constant time or O of one. But searching for an item when its index is unknown can take longer as it requires you to iterate through the entire list, resulting in a linear time complexity O event. Tuples on the other hand are immutable. Once created, their size and contents cannot be changed. This immutability makes them more memory efficient and ideal for fixed data sets. Like lists, tuples support fast access by index, but their contents cannot be altered. Both lists and tuples have their unique advantages, and selecting the appropriate one
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-array-like-structures-24506013?u=76281980&t=94)** will depend on the specific requirements of your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** python (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Dictionaries

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a dictionary?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-dictionary-24502365?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-dictionary-24502365?u=76281980&t=0)** - Let's move on to our next data structure, dictionaries. Each type of data structure organizes data differently, allowing you to optimize specific operations for your needs. A dictionary is a data structure that stores key value pairs. Each pair consists of a key, which acts as an identifier. and a value associated with that key. Together, they form the basic building blocks of a dictionary data structure. Think of a [[Python (Programming Language)|Python]] dictionary like a real-world dictionary, but instead of looking up words and their definitions, you're retrieving values based on keys. In programming, the key serves as a label for a particular piece of data, and the value represents the information tied to that key. For example, imagine a phone book where the names of the keys and the phone numbers are the values. Each key in the dictionary is unique, acting as a label for specific information. This key could be of any type, whether that's a string, number or something else. The value can also be of any type, and it doesn't have to be the same as the key. One of the main benefits of dictionaries is their efficiency in retrieving values. Since each key is unique, you can access the corresponding value directly without searching through the entire collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### [Create a dictionary in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-dictionary-in-python-24296959?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-dictionary-in-python-24296959?u=76281980&t=0)** - [Instructor] Let's create a dictionary in [[Python (Programming Language)|Python]]. We'll use a dictionary to store states in their capitals where the state is the key and the capital is the value. To create an empty dictionary, we use curly braces. We can initialize it with a few states and capitals on creation. Let's give it the state, Texas, and its capital Austin. The syntax is fairly simple. The key comes first, followed by colon, and then the value. Let's add another entry. We'll add New York with its capital Albany. Each key value entry in a dictionary is separated by a comma. To access a value in our dictionary, we use a similar methodology as we do to access an item in a list. However, instead of a numerical index, we use the key as the index. Let's print out the capital of New York to the console. We'll access the dictionary and then index with the key New York. Let's run it. And there's the capital of New York, Albany. Now, a dictionary is actually built off of lists behind the scenes, but all that logic is abstracted away from us. We don't need to worry about how the dictionary is implemented internally, what matters is understanding how to work
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/create-a-dictionary-in-python-24296959?u=76281980&t=93)** with the dictionary at an abstract level, knowing the expected inputs, outputs, and the effect it has on our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Mutate a dictionary in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-dictionary-in-python-24501448?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-dictionary-in-python-24501448?u=76281980&t=0)** - [Narrator] Dictionaries can also be used to store user preferences. Unlike our previous examples, the values are of different types. One key has a numerical value, while another has a Boolean value, and even another has a string value. This is a flexibility that can be achieved in [[Python (Programming Language)|Python]], but does not work in all languages. While state capitals are relatively stable, user preferences can change at any moment. Let's see how we can modify our dictionary to update those preferences. To change the value of a key, we simply access the dictionary and use the key as the index. Let's change the language to Spanish. We'll write out the dictionary name and the key, language. Then we'll set its value to Spanish using the assignment operator. The same approach works for any value in the dictionary as long as we know the key. Let's change the volume level to 50. We'll access the user preferences at the key, volumeLevel, and set it equal to 50. This overwrites the previous value so it can no longer be accessed. To add an item to the dictionary, we just set a key with that value. Let's add a highlight color as a preference. We'll set it equal to yellow. This adds the key value pair
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-dictionary-in-python-24501448?u=76281980&t=94)** highlightColor and yellow. To delete an item from a dictionary, we have a few options. If we don't want to retrieve the item when we delete it, we can use del. Let's delete currency. We'll write del and then the name of the dictionary with the key, currency. If we want to retrieve the item we remove, we can use the pop function on the dictionary. With pop we pass in the key of the key value pair we want to remove. Pop will return the key value pair associated with the key currency and that'll be the value of the removed item. If you aren't sure whether the given key exists in the dictionary, you can provide a default value that'll be returned. This will be the second argument in the pop function. With this second argument, we prevent a key error from occurring if the key doesn't exist in the dictionary. Let's print out the dictionary's values and walk through the code output. In the printed user preferences, we see that the language has been changed to Spanish. We also see that the volume has been changed to 50. There's also our new key value pair, highlightColor, yellow. Currency has been removed from the dictionary. All of our dictionary operations worked as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** highlightcolor (2), volumelevel (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Update salary](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-update-salary-24296965?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-update-salary-24296965?u=76281980&t=0)** - [Instructor] Let's update a given employee's salary and give them a raise in our employee dictionary. In order to calculate the adjustment, we'll need to access the salary value from the dictionary. We can do this with indexing by key. Then we'll multiply this by the adjustment to calculate how much should be added to the salary. We can then use the addition assignment operator to increment the salary by this amount. This will update the salary correctly within the dictionary, and from there we can return it. Let's run the code. In the output we can see that Alice got a 10% raise, resulting in a new salary of 55,000.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Handle missing dictionary keys](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/handle-missing-dictionary-keys-24505116?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/handle-missing-dictionary-keys-24505116?u=76281980&t=0)** - [Instructor] When accessing dictionary keys, you may encounter situations where the specified key doesn't exist. Trying to access a missing key directly will raise a key error, potentially causing your program to crash if it's not handled properly. Take this example of employee salaries. Let's try to access a salary for an employee who isn't in the dictionary, say Charlie.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/handle-missing-dictionary-keys-24505116?u=76281980&t=30)** Since Charlie isn't in the dictionary, this will raise a key error. And that's what we get in the console. To handle missing keys more gracefully, a common method is to use the GET function. This allows you to try retrieving a value for a given key while providing a default value if the key doesn't exist. This prevents any error from being raised. Let's try accessing the Charlie key using GET. If Charlie's not found, we'll return not found. Let's run it. Instead of throwing an error, the GET method returns not found.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/handle-missing-dictionary-keys-24505116?u=76281980&t=84)** Now another approach is to use a try-except block to catch the key error.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/handle-missing-dictionary-keys-24505116?u=76281980&t=102)** This can be useful if you want to execute specific logic when a key is missing. In this case, we print that Charlie is still not found. By incorporating these techniques, you can avoid unexpected key errors and ensure your program continues to run smoothly, even when dealing with missing data.

> [!info]- Semantic Content
>
> **API Endpoints:** get  (2)
> **Speakers:** - [instructor] (1)

#### [Retrieve keys and value collections from dictionaries](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-keys-and-value-collections-from-dictionaries-24501450?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-keys-and-value-collections-from-dictionaries-24501450?u=76281980&t=0)** - [Instructor] Dictionaries in [[Python (Programming Language)|Python]] are great for mapping keys to values, but you may often need to retrieve only the keys or only the values for further operations. Python provides built-in methods to make this fairly straightforward. Consider this example where books are mapped to their authors. We can extract all of the keys using the keys method on the dictionary. The keys method gives us a collection of book titles from the dictionary. To retrieve all the values, you can use the values method. This method returns a collection of all the values. In this case, authors. If you need to work with both keys and values, you can use the items method.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/retrieve-keys-and-value-collections-from-dictionaries-24501450?u=76281980&t=54)** This uses a for loop to iterate through the collection of tuples returned by items. The for loop automatically impacts each tuple into two variables, book and author. These represent the key and value for a given pair. Then on each iteration, the loop grabs the next key value pair from the dictionary and assigns the key to the book and the value to the author. Let's run this code and see the output. In the console, we can see the collection of keys, the collection of values, and then each key value pair as printed by our for loop. By leveraging Python's built-in methods, you can efficiently access key value pairs in your dictionaries, making it easier to manage and work with your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Clean user preferences](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-clean-user-preferences-24503281?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-clean-user-preferences-24503281?u=76281980&t=0)** - [Instructor] It's important to clean your data if some is invalid or missing. Let's clean a given dictionary by removing the key value pairs with none values. First, we'll create a dictionary to hold the updated preferences. Then we'll iterate through the past in dictionary and check whether or not a given key has a none value.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-clean-user-preferences-24503281?u=76281980&t=30)** If the value is not none, then we should add it to our dictionary. After iterating through the dictionary, our data should be cleaned. Let's return it from the function, and we'll run it. In the output, there are no more none values in our dictionary. The time complexity of this algorithm is O of N, because we iterate through the input one time. Looking closer at this example, we could expand the filtering functionality to check and see if the data is actually empty. For example, if the data is a string, we could make sure that the string has at least one character. If the data was a number, we can make sure that it's not zero. What cleaning your data means can vary depending on what type of data you're working with and what your use case is.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [When to use dictionaries](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-dictionaries-24505117?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-dictionaries-24505117?u=76281980&t=0)** - [Instructor] Every data structure has its pros and cons depending on your use case. So, when should you use a dictionary? Dictionaries are ideal when you need fast data access. They offer significantly quicker retrieval, insertion, and search times than many other [[Data Structures]], though this comes at the cost of higher memory usage. In fact, these operations take O of 1 or constant time because their runtime is consistent across any input or any size of the structure. Depending on the data you're storing, dictionaries can also be useful because their key value nature allows you to store mapping relationships more easily. They can also grow and shrink in size dynamically, making them a very flexible data structure. However, if you need to maintain a specific order, a regular dictionary may not be ideal, since dictionaries don't inherently preserve order. You would need to use an ordered dictionary or sort the keys manually. Another limitation to keep in mind is that dictionary keys must be immutable objects. This means you can't use lists or dictionaries as keys. By weighing these advantages and limitations, you can determine whether a dictionary is the right choice for your specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Sets

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a set?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-set-24296967?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-set-24296967?u=76281980&t=0)** - [Instructor] Let's talk about another way we can structure our data, with a set. A set is a collection of unique items. The order of these items doesn't matter, and duplicate elements are not allowed. Why would we want to structure our data in this way? Well, sets are a common way of grouping things with a common property. For example, you might create a set that represents types of clothing you can wear. You could also create a set that represents the names of fingers we have. Think a pinky finger, ring, middle, and index. Unlike our other [[Data Structures]] we've discussed, sets don't concern themselves with the order of elements or with accessing a specific item. Instead, they focus on membership. When working with sets, the primary question is whether a certain item is part of a set. That's why sets don't use indices or keys to look up values. Instead, they're optimized for this membership operation. Behind the scenes, sets often work similarly to dictionaries. However, instead of storing a key value pair, a set uses only the key. Essentially, the key is the value. Sets are great when the goal is not to retrieve data, but to check if something belongs to a group. When you need quick answers to, "Is this item part of a collection?", sets are your go-to tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Determine set membership in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/determine-set-membership-in-python-24504261?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/determine-set-membership-in-python-24504261?u=76281980&t=0)** - [Instructor] How do sets work in [[Python (Programming Language)|Python]]? Let's take a look. Consider the case where we want to keep track of the primary colors, red, blue, and yellow. To create a set, we use the keyword set and then put our values in between parentheses and square brackets. (keyboard clicking) Each value is separated by commas. We'll save this in a variable called primary_colors. Now, let's say we wanted to find out if green was a primary color, or rather, in the set of primary colors. We can check for membership with an if statement. If the color is in the primary colors, it is a primary color in part of the set. (keyboard clicking) Otherwise, the color is not part of the set and it is not a primary color. Let's run it. (keyboard clicking) Green is not a primary color. With sets, we can easily determine whether a given item is part of a collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Non-Speech:** (keyboard clicking) (3)
> **CLI Commands:** python (1), find (1)
> **Code Identifiers:** primary_colors (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Mutate a set in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-set-in-python-24501449?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-set-in-python-24501449?u=76281980&t=0)** - [Instructor] Sets in [[Python (Programming Language)|Python]] are mutable, meaning we can modify them by adding, removing, or updating their elements. This flexibility makes sets ideal for situations where you need a collection of unique items that can change over time. Another way we can create a set is with the curly braces as shown here. To add a single element to a set, we can use the add method. This method takes one argument and adds it to the set if it's not already present. If we run this, we'll see that orange has been added to the set. Now, if orange was already in the set, Python would ignore it, since sets automatically discard duplicates. If you want to add several elements at once, you can use the update method. This takes in another Iterable, like a list or another set, and adds each element to the set. An Iterable in Python is any object that can be looped over, meaning it's capable of returning its elements one at a time. Let's see the updated fruits. Both mango and grape have been added to our set of fruits. Like with the add method, any duplicates would be ignored To remove an element, Python provides two methods, remove and discard. Remove removes the specified item,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-set-in-python-24501449?u=76281980&t=93)** but raises a key error if the item doesn't exist. Discard does the same, but it won't raise an error if the item isn't in the set. Let's try using them. We'll remove banana, which is in the set, and then we'll discard tomato, which is not in the set.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/mutate-a-set-in-python-24501449?u=76281980&t=122)** Running it again. Banana has been removed and even though tomatoes not in the set, no error is thrown. With sets you can add, remove, or update elements easily while taking advantage of the set's automatic handling of duplicates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4)
> **Speakers:** - [instructor] (1)

#### [Solution: Unique characters](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-unique-characters-24296961?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-unique-characters-24296961?u=76281980&t=0)** - [Instructor] Let's implement a function to check if a string contains only unique characters. We can do this by converting the string into a set and then compare the links of the set in the original string. If both the links are equal, it means all the characters in the string are unique. To convert the data into a set, we'll simply pass it into the set function. Then we'll compare the lengths of the unique set and the data passed in. If they're equal, then all the characters in the string are unique. We don't need an if statement here, because what's returned by the equality check is exactly what we want to return from the function. Let's run it. Sample has unique characters. Let's try samples. There are two S's, so the characters are not unique. The time complexity of this function is O of N or linear because it takes linear time to convert the data into a set. This makes it an efficient solution for checking uniqueness in a string.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Operations on sets in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=0)** - [Instructor] So far, we've kept our code pretty simple when dealing with sets. There are more complicated operations that exist, but they delve more into the field of mathematics. Let's consider these two sets. We can combine the elements of both sets using the union operation. This creates a new set containing all the elements from both sets. The original sets remain unmodified, and it ensures that no duplicates are included.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=36)** Let's run it. In the output, we see the unique elements from set A and set B. We also have the intersection operation.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=57)** This allows us to see what entries are in both sets.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=71)** The intersection will only contain 30, 40, and 50 because these are the only items that are in both sets. Another operation is difference. Difference allows us to subtract or remove the contents of one set from another.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=105)** Here we subtract the contents of set B from the contents of set A. Set B contains 30, 40, and 50, which are also in set A, so the difference of set A and set B would be 10 and 20. These are all the items in set A minus the items in set B. Unlike the other two operations we looked at, the difference operation output changes depending on which set is passed in. Let's reverse set A and set B.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=164)** If we subtract the elements of set A from set B, we'll only get the items that are unique to B, which in this case are 60 and 70, and that's what we see in the output. If we want the elements unique to both sets, we can use the symmetric difference function.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=189)** This returns the items that are unique to set A and set B.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/operations-on-sets-in-python-24300487?u=76281980&t=202)** It returns all the items they don't share. That's 20, 70, 10, 60. It's actually the union of the two differences. By utilizing these set operations, you can perform various computations and comparisons effectively in [[Python (Programming Language)|Python]]. They can help you find unique elements, merge sets, find common elements or exclude overlapping elements between sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Speakers:** - [instructor] (1)

#### [Immutable sets in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/immutable-sets-in-python-24296960?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/immutable-sets-in-python-24296960?u=76281980&t=0)** - [Instructor] Sometimes you won't want set data to change after creation. Frozen sets are perfect for this. They're immutable versions of regular sets, meaning once they're created, they cannot be modified. Let's try it out by creating a frozen set to hold the secondary colors. Since secondary colors don't change, it makes sense to use a frozen set to store them. Frozen sets behave much like regular sets in most ways. For example, you can still check for membership using an if statement. If green is in the secondary colors, we'll print out that green is in the set. However, the key difference is that frozen sets are immutable. You cannot modify them. If you try to add an element, you'll get an error. Let's see what happens when we attempt to do so. We'll try to add blue. In the output, we get an attribute error because frozen set does not implement an add function. This immutability ensures the original data remains unchanged, making frozen sets ideal for situations where you need to prevent unintended modifications.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Mutual friends](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-mutual-friends-24506005?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-mutual-friends-24506005?u=76281980&t=0)** - [Instructor] Let's find the mutual friends between these two sets. For a friend to be a mutual friend, it must appear in both sets. This means this problem is really about finding out what elements the two sets have in common. This is a great scenario for using the intersection operation. This will return the friends that set1 and set2 have in common, the mutual friends. Let's run it. Alice and Bob are the mutual friends. The implementation works as expected. Now, technically, we could also write #set2.intersection(set1) since the order of operations doesn't matter for set intersection. However, some might consider it more readable to have set1 appear first, since it's the base set we're comparing off of. If we want to compare mutual friends across more sets, it would make it easier to read if set1 is written first. We can pass multiple sets into the intersection operation. If set1 is first, it follows a more logical order. Now, given our code is using the intersection operation, its complexity is based on the shorter length of the two sets. This is because the algorithm iterates over the smaller of the two sets to check for common elements.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [When to use sets](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-sets-24503280?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-sets-24503280?u=76281980&t=0)** - [Narrator] As a non-linear data structure, sets come with advantages and limitations depending on how you use them. They're specifically designed to store unique elements, and this is where their strengths shine. Sets automatically eliminate duplicate values, which simplifies the process of ensuring all elements are distinct. The main operation that sets provide is membership testing, and it's super fast at O of one or constant time. However, if you don't care about membership, this data structure has many disadvantages. Since sets are unordered, they don't preserve the order of elements. If you need your data to remain in a specific sequence, a list or a toople would be a better choice. Sets also don't support indexing. You can't access elements by their position because no positional information is maintained. So, while sets provide unique advantages for membership checking, they do have limited [[Data Manipulation]] options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Manipulation]] (1)
> **Speakers:** - [narrator] (1)


### 5. Queues

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a queue?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-queue-24502368?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-queue-24502368?u=76281980&t=0)** - Like with lists, queues represent a series of ordered objects, but how we access, add, and remove items is slightly different. Think of a queue at an amusement park or a line of people at the store. A queue has a front and a back, and it operates the same way in code. Elements are inserted at the end of the queue and removed from the beginning. Just like in a real line, the first person in is the first person out, and the last person in is the last one to leave. This behavior is known as FIFO, or first in, first out. In queue operations, you'll often hear the terms enqueue and dequeue. Enqueueing refers to adding an item to the back of the queue, while dequeueing means removing the item at the front. You can also use peek to view the first item in the queue without removing it. This is the next item to be dequeued. In [[Python (Programming Language)|Python]], there's a built-in tool we can use to store and manage data as a queue. Let's take a look.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Definitions:** known as (1), refers to (1)
> **CLI Commands:** python (1)
> **Env Vars:** fifo (1)
> **Analogies:** just like (1)
> **Speakers:** - like (1)

#### [Use a deque as a queue in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-deque-as-a-queue-in-python-24504260?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-deque-as-a-queue-in-python-24504260?u=76281980&t=0)** - [Instructor] In [[Python (Programming Language)|Python]], we can use a deck or a double-ended queue to implement a queue structure. A deck excels at performing insertions and deletions from both ends, making it perfect for us to use as a queue. To implement FIFO or first in, first out, we'll need to remove items from the front of the deck and add items to the back. For this example, we'll create a deck that stores a printer queue. Since deck is a part of the Python collections module, we'll need to import it first. Then we'll create an empty deck to store the printer queue, to end queue or add items to the queue, we'll use the append method. Let's add a few documents. These will be processed in FIFO order. Let's print out the first document, the Taylor [[Swift (Programming Language)|Swift]] tickets. We can use the pop left method to remove an item from the front of the deck. In fact, we can put this in a loop to print out each document from the queue. We'll use a while loop to continue printing as long as there are items in the queue. The lens function checks the deck size, so as long as it's greater than zero, we'll continue printing documents. Let's run it.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-deque-as-a-queue-in-python-24504260?u=76281980&t=95)** Each item gets printed in first, in first out order. First the tickets, then the notes, and then finally the image proof.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** python (2)
> **Env Vars:** fifo (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Generate binary numbers](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-generate-binary-numbers-24506008?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-generate-binary-numbers-24506008?u=76281980&t=0)** - [Instructor] Let's create a function that returns a list of the first in binary numbers. We'll be using a deck for our implementation. So we'll add that import at the top. (keyboard clacks) First, we'll handle our invalid inputs. If n is less than or equal to zero, we'll simply exit the function and return an empty list. (keyboard clacks) Now, let's take a look at a few binary numbers and see if we can find a pattern. (keyboard clacks) If we observe closely, each binary number is formed by taking the current number and appending a zero to it, and then a one to it. For example, after printing one, we add one, zero and one, one to the sequence, then after processing one, zero, we append one, zero, zero and one, zero, one to the sequence. This pattern repeats for the [[Representational State Transfer (REST)|rest]] of the binary numbers. We can leverage this pattern using a deck to generate the first n binary numbers. We'll start by initializing our result list and a deck. (keyboard clacks) Since n is at least one, we can add one to the queue as the first number to be added. This queue will hold integers. We could use strings instead,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-generate-binary-numbers-24506008?u=76281980&t=93)** but integers will turn out to be more efficient due to the fact that strings are immutable. We'll append each binary number by looping over n. (keyboard clacks) The number we add to the list is the one we deque from the front of the queue. To deque an item, we'll use the popleft method, (keyboard clacks) then we'll add it to our result list. Now, according to the pattern, after appending the numbers to our result list, we should nque two new numbers to the queue. This would be the current number followed by zero, (keyboard clacks) and then the current number followed by a one. (keyboard clacks) We can achieve this using simple multiplication and addition. (keyboard clacks) After exiting the loop, the result list will contain n binary numbers. So we can return it. That's our implementation. Let's run it. In the output, we can see the first six binary numbers as expected. Since this implementation only uses a single loop, the time complexity is o of n. The space complexity is also o of n due to the number of items in the queue. By recognizing a pattern in the data and leveraging the deck data structure, we've successfully completed the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [When to use queues](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-queues-24505114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-queues-24505114?u=76281980&t=0)** - [Instructor] Queues are similar to sets in that they really only show their advantages when used for their purpose, in this case, first in-first out functionality. Appending items to the back and removing them from the front happens in constant time, making queues ideal for managing tasks or handling event processing, or data needs to be processed in the order it arrives. However, if you frequently need to access or remove items from the middle of the queue or another position in the structure, another data structure might be more suitable, as queues are not optimized for this type of operation.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 6. Stacks

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a stack?](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-stack-24506006?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/what-is-a-stack-24506006?u=76281980&t=0)** - [Narrator] Stacks are another type of container we can use to store our data. It's an ordered series of objects, just like a list, but its intended use is slightly different. With a stack, we push items onto the top and then pop them off in reverse order. Think of a stack of cards. Each card is stacked on top of the other. To remove a card, you take one off the top since removing from the bottom is impractical. When adding a card, it goes on top because adding to the bottom would require lifting the entire stack. This natural behavior gives stacks their defining feature. They follow a last-in, first-out, or LIFO principal. The most recently added item is the first to be removed, while the first item added stays at the bottom until everything above it has been removed. In practice, when we add to a stack, we say we push an item on. When we remove one, we pop it off. You can push as many items onto the stack as needed. But to access something further down, you must pop off everything above it. Once all the items are popped, the stack is empty. Now let's see how this concept works in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** lifo (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Use a list as a stack in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-list-as-a-stack-in-python-24505112?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-list-as-a-stack-in-python-24505112?u=76281980&t=0)** - [Instructor] Some programming languages provide built-in stack functionality, but in others, you may need to implement your own stack using the available tools. A stack is essentially an ordered list, but with a restricted way of adding and removing items. You can only add a remove from the top. In [[Python (Programming Language)|Python]] we can use a list to act as a stack and mimic this behavior. To create a stack of cards, we'll start with an empty list. Each element will represent a card, and the first card added will be at the bottom of the deck. We'll use the append method to add cards to the top. The top of the stack will be the back of the list, and the bottom of the stack will be the front of the list. Each card will be represented as a string, but you could also create a custom structure or a class to hold the card data. Let's add the jack of hearts, two of diamonds and ten of spades. Here we have the jack of hearts on the bottom of the stack and the ten of spades on the top. Technically, since this is a list, we could access cards by index or even remove cards from the middle of the stack. However, when using a list as a stack, we should stick to the intended operations adding and removing only from the top. By adhering to this, we maintain the last in, first out, or LIFO principle of the structure. We can rely on knowing that the most recent card added
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-list-as-a-stack-in-python-24505112?u=76281980&t=95)** will always be the first one removed. Let's pop off the most recently added item off the top of the stack. This gives us the top card of the deck. In this case, it'll be the ten of spades. To peak at a top card without removing it, we can use the index negative one. Now the top card will be the two of diamonds. To check if the stack is empty, we can use the if statement with the not operator. The last operation we'll cover is how to find the size of the stack. We can do this with the len function. If the stack is not empty, we'll print out the size of the stack. Let's run it. When we first pop the stack, we get the ten of spades. After that, two of diamonds becomes the top card. Since there are still two cards remaining, we don't print empty. Instead, we display the size of the stack, two. Using lists we can easily implement stack behavior in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1)
> **Env Vars:** lifo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use a deque as a stack in Python](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-deque-as-a-stack-in-python-24502366?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-deque-as-a-stack-in-python-24502366?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] provides another data structure we can use to implement a stack, the deck. As you might remember from the queues chapter, a deck is a double-ended queue, and we've used it to store data as a queue. We can also use it to store data as a stack, since it allows efficient insertions and removals at both ends. For this example, we'll be saving browser history with the Python program. Let's create an empty deck to store this. As we browse the internet, we'll visit a series of websites. Let's add a few to our stack. To implement the back button functionality, we can use the pop method. This will remove the item from the top of the stack. If we want to view the most recent website without removing it, we can use the negative one index to peek at the top item. Let's run it. In the program, we create a deck and add three items to the stack. [[Google]], [[LinkedIn]], and Stack Overflow. When we pop the stack, the most recently added item is removed first. That's stack [overflow.com](https://overflow.com) and we see that in the console. Then we peek at the new top item, that's [linkedin.com](https://linkedin.com). It was added second. In Python, both lists and decks can be used to implement
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/use-a-deque-as-a-stack-in-python-24502366?u=76281980&t=95)** a stack efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[LinkedIn]] (2), [[Google]] (1)
> **CLI Commands:** python (3)
> **URLs:** [overflow.com](https://overflow.com) (1), [linkedin.com](https://linkedin.com) (1)
> **Documentation:** stack overflow (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Matching parentheses](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-matching-parentheses-24505115?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-matching-parentheses-24505115?u=76281980&t=0)** - [Instructor] Let's write a function that checks whether a string has matching parentheses. To keep track of whether we've seen an opening parentheses or not, we'll use a stack in the form of a deck.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-matching-parentheses-24505115?u=76281980&t=18)** Then we'll iterate through the string. If we see a character that's an opening parentheses, we'll add it to the stack.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/solution-matching-parentheses-24505115?u=76281980&t=34)** If we come across a closing parentheses, we'll need to check if there's an opening parentheses to match it. We can do this by popping off an item from the stack. Of course, we'll need to ensure that the stack isn't empty. If it is, that means we found a closing parentheses before any opening one, meaning the parentheses are imbalanced. In that case, we should return false immediately. If the stack does have items, we'll pop one off to complete the match. After iterating through the entire string that the stack is empty, this means that every opening parentheses had a closing parentheses. If there are still items in the stack, it means there are unmatched opening parentheses, so we'll return whether the stack is empty or not. If the size of the stack equals zero, then the string had matching parentheses. If not, it doesn't. Let's run it. In the output, we can see that the string has matching parentheses. Let's try one with unmatching parentheses. It correctly identifies that the parentheses do not match. The time complexity of this function is O of N, since we only looped through the input one time. By using a deck as a stack, we were able to track whether a given string has matching opening and closing parentheses.

> [!info]- Semantic Content
>
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [When to use stacks](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-stacks-24300484?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/when-to-use-stacks-24300484?u=76281980&t=0)** - [Instructor] Stacks are great for programs where you need to keep track of state. Appending, peeking, and popping take very little time. In fact, constant time. They're great [[Data Structures]] to use if you find yourself operating on your data in a last in, first out manner. However, if you find yourself needing to index your data structure or get a specific item in the middle, stacks are not the solution. Searching is also not ideal because you'd need to pop off everything on the stack and essentially destroy the data structure in order to see each individual item. Overall, a stack really only shows its advantages when you use it in the way it was designed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)


### 7. Practice Using Data Structures in Python Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [GitHub Codespace challenge: To-do list](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-to-do-list-9708964?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-to-do-list-9708964?u=76281980&t=0)** (pensive music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-to-do-list-9708964?u=76281980&t=5)** - Now that you have a good understanding of [[Data Structures]], this chapter will focus on integrating data structures into practical applications. You'll have to decide which data structure to use and implement it within a given application. The first system is a to-do list. You'll need to integrate a data structure that keeps track of items. It should let you add items, remove items, and toggle the completion of items. You should also be able to see all the tasks in one view and reference a given task with an ID. Each task should also have three fields: an ID, a name, and a completed field that represents whether the task is completed. The program lives in [[GitHub]] [[Codespaces]]. The UI will already be implemented, so you shouldn't need to make any changes to the [[HTML]], CSS, or [[JavaScript]]. This will let you focus on integrating the data structure at hand within the app.py file. For each to-do comment in this file, you should write the code that does the corresponding action. Feel free to explore the other files to understand more fully how the application works. To run this application, use [[Python (Programming Language)|Python]] app.py in the terminal. Then, you'll be able to view the application in a browser. In the next video, I'll walk through a sample solution to this challenge. Good luck, and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[GitHub]] (1), [[Codespaces]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **File Paths:** app.py (2)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** html (1), css (1)
> **Tools:** github (1), terminal (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)

#### [GitHub Codespace solution: To-do list](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980&t=0)** - [Instructor] Let's walk through building a simple to-do list application in [[Python (Programming Language)|Python]] using [[Data Structures]]. We'll begin by choosing a data structure to hold our tasks, and then we'll add functionality to manage them. For this application, we'll store tasks in a list. This will work well because it allows us to store the tasks in order and access them by index. The list of tasks will be shown whenever the homepage is hit. Now the post route should add a new task when it receives a task name in the request. We can represent each task is a dictionary. We'll have keys for ID, name, and completed. This will allow for clear labeling, making the code more readable and intuitive. It also allows for easy modification, so you can add more fields without changing the structure of existing tasks. Before creating this task, we'll set up a counter variable. This will keep track of the number of tasks that have been added so far, regardless of how many have been deleted. We'll use this to assign a unique ID to each task. The tasks name will come from the task data's task field, so we'll pull that out and make it the name of the task. It'll start off as not completed,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980&t=96)** so its completed value will be false. Let's append this to our task list. The delete functionality will remove a task based on its ID. To do this, we'll find the task by ID and remove it from the task list.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980&t=129)** To find the task, we use a generator expression. This is a special expression in Python that lets us iterate over each task in the task list, checking if the ID of each task matches the task ID being searched for. The next function retrieves the first item from the generator that satisfies the condition. If no items match, it returns the specified default value, which here, is none. If the item is not none, we'll remove it from the list.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980&t=170)** If the task is not found, we'll return a 404.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-to-do-list-24296958?u=76281980&t=184)** Now let's implement the final piece of functionality, toggling a task. Here, we'll find the task with a given ID and then toggle its completion status. We can use the same generator expression from the delete functionality to find the task. If the task exists, we'll toggle its completed status, so we'll not the current completed status. This will give us the opposite of the current value. Now let's run this application. We'll add a few tasks, book a flight, read a book, and buy tickets. Now let's mark some as complete. We'll book the flight, buy the tickets, and we'll delete read a book. Now let's delete buy tickets, and the last one. Our application works as expected. By using a list to store our tasks, we were able to easily access them and update them within our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** find (4), python (2), make (1)
> **UI Navigation:** toggle (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [GitHub Codespace challenge: Reservation waitlist](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-reservation-waitlist-24296964?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-reservation-waitlist-24296964?u=76281980&t=0)** - [Instructor] The next system you'll build is a reservation wait list for managing walkup customers at a restaurant. To handle this efficiently, you'll need to integrate a data structure that keeps track of customers in a first-come, first-serve order. Your system should allow adding guests to the wait list, seating the first guest when a spot opens, and viewing the entire wait list. Each guest should include a unique ID and their name to easily manage reservations. Like with our last project, the program lives in [[GitHub]] [[Codespaces]]. The UI is already implemented, so you shouldn't need to make any changes to the [[HTML]] or CSS. Instead, you should focus on integrating the data structure at hand within the app.py file. For each to-do comment in the file, you should write code that does the corresponding action. Feel free to explore the other files to get a better understanding of how the system works together as a whole. To run the application, use the [[Python (Programming Language)|python]] app.py command. Then you'll be able to view the application in a browser. In the next video, I'll walk through a sample solution to the challenge. Good luck and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Codespaces]] (1), [[HTML]] (1), [[Python (Programming Language)|Python]] (1)
> **File Paths:** app.py (2)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** html (1), css (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### [GitHub Codespace solution: Reservation waitlist](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-reservation-waitlist-24506009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-reservation-waitlist-24506009?u=76281980&t=0)** - [Instructor] Let's walk through building a reservation wait list system in [[Python (Programming Language)|Python]] using [[Data Structures]]. We'll begin by choosing a data structure to hold up our walk-up customers and then add functionality to manage them. For this application, we'll store our walk-up guests in a queue, ensuring they're seated in order of arrival. Let's add the deck data structure to our implementation. We'll import it from collections. To return all the guests in the waiting list, we can convert the queue to a list. This will allow it to be serialized as [[JSON]] and returned to the client. Each guest will be represented as a dictionary. We'll have keys for the ID and for the name. This makes it easy to retrieve these data pieces that are related to the guest. Now the comment says that the name lives in data [name'], so we can use that for our guest's name. As for the ID, we can use the next ID variable that's already created. Then we'll end queue the guest to our waiting list. The seat guest functionality should seek guests in the order they were added.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-reservation-waitlist-24506009?u=76281980&t=92)** The if statement checks if there are guests in the waiting list. If there are guests, we'll want to seat the first one. We can do that by using pop left on the waiting list. That's our implementation. Let's run it. Let's add a few guests to the waiting list. Taylor [[Swift (Programming Language)|Swift]], Harry Potter, and Harry Styles. Now let's seat one of the guests. Since Taylor Swift was added first, she's seated first. Now let's seat Harry Potter and then Harry Styles. By integrating a queue into our reservation system, we were able to keep track of walk-up customers and ensure they were seated in the order they arrived.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2), [[Python (Programming Language)|Python]] (1), [[Data Structures]] (1), [[JSON]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [GitHub Codespace challenge: Inventory tracker](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-inventory-tracker-24503278?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-challenge-inventory-tracker-24503278?u=76281980&t=0)** - [Instructor] The last system you'll build is an inventory tracker for managing inventory in a warehouse. You'll integrate a data structure that efficiently keeps track of items and their quantities, enabling [[Real-Time]] updates and management. The system should allow you to add new items to the inventory, update the quantity of existing items, remove items, and view the entire inventory. Each item in the inventory will include a name and a quantity, making it easy to manage and monitor stock levels as items come and go. Like with our previous projects, this program lives in [[GitHub]] Code Spaces. The UI will already be implemented, so you shouldn't need to make any changes to the [[HTML]] or css. Instead, you should focus on integrating the data structure at hand within the app.py file. For each to do comment in this file, you should write code that does the corresponding action. Feel free to explore the other files to get a better understanding of how the system works together as a whole. To run the application, use [[Python (Programming Language)|python]] app.py in the terminal. Then you'll be able to view the application in a browser. In the next video, I'll walk through a sample solution to this challenge. Good luck and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[GitHub]] (1), [[HTML]] (1), [[Python (Programming Language)|Python]] (1)
> **File Paths:** app.py (2)
> **CLI Commands:** make (1), python (1)
> **Tools:** github (1), terminal (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [GitHub Codespace solution: Inventory tracker](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-inventory-tracker-24300490?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-inventory-tracker-24300490?u=76281980&t=0)** - [Narrator] Let's walk through building an inventory tracker in [[Python (Programming Language)|Python]] using [[Data Structures]]. We'll begin by choosing a data structure to hold our inventory, and then we'll add functionality to manage its items. For this application, we'll store inventory items in a dictionary. Each item's name will be a key, and its value will be the associated quantity. This setup allows for efficient retrieval, updating, and deletion of items in the inventory. Since dictionary entries can be accessed directly using the item name. To add an item to the inventory, we'll access the dictionary and use the item_name as the key. Then we'll use the passed-in value as its quantity. Now, this works if the item is not in the inventory already, but if it already exists, we'll want to update its quantity instead. We can check if the item is in the inventory with an IF statement; if the item_name is in the inventory, we'll update its quantity instead. We'll use += quantity. This'll increment the current quantity by the passed-in value. Otherwise, we'll keep the previous implementation, and we'll add the item to the inventory with the passed-in quantity. The update_quantity function should overwrite
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/github-codespace-solution-inventory-tracker-24300490?u=76281980&t=92)** the current quantity and the inventory. We can do this by accessing the dictionary, using our key, item_name, and overriding the quantity with the new quantity value. Then to delete an item from the inventory, we'll use the del keyword. We'll pass-in the inventory with the item_name. This'll delete the key value pair associated with the item_name. Now that's our implementation. Let's run the app. We'll add three pencils to our inventory, then two markers. Let's update the number of pencils to five. Then we'll add two more pencils to the inventory. The quantity is updated to seven. Now let's remove the markers from the inventory. Our implementation works as expected. By integrating a dictionary into our Inventory Tracker, we were able to manage our inventory and update quantities efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Data Structures]] (1)
> **Code Identifiers:** item_name (5), update_quantity (1)
> **CLI Commands:** python (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### 9. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [How to decide which data structure to use](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-decide-which-data-structure-to-use-24503282?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-data-structures-25191158/how-to-decide-which-data-structure-to-use-24503282?u=76281980&t=0)** - Congratulations on finishing the course. You now have an understanding of [[Data Structures]] that'll help you no matter what language you're programming in. Every data structure has their pros and cons, and there is no perfect data structure. It all depends on what data you're trying to store, how you want to store it, and how you want to access it. My name is Kathryn and I hope to see you again in some of my other [[LinkedIn]] Learning courses. Thank you for watching and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1), [[LinkedIn]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Kathryn Hodge]]

## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Algorithms]] | **5 of 12** | [[Programming Foundations- Design Patterns]] →

### In [[Getting Started with Python]]
← [[Learning the Python 3 Standard Library]] | **5 of 8** | [[Level Up- Python]] →

## Appears In

- [[Become a Programmer- Foundations]]
- [[Getting Started with Python]]

---

[↑ Back to top](#)