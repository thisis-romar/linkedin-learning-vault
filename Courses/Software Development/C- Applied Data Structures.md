---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-applied-data-structures-23361126
url: "https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 1/3/2024
learners: 31696
skills:
  - Data Structures
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-applied-data-structures-2813283-1/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHlhDcLmjPIhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703201046259?e=2147483647&amp;v=beta&amp;t=aKmIwORZwOLbKWxDGC3xk9bxCQ4Br3bC7OFnIlEyJQs"
linkedin_topic: Software Development
learning_paths:
  - '[C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)'
prev_courses:
  - '[C Sharp Algorithms](C%20Sharp%20Algorithms.md)'
next_courses:
  - '[Advanced C- Language Features](Advanced%20C-%20Language%20Features.md)'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":2,"total":6,"prev":"C Sharp Algorithms","next":"Advanced C- Language Features"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/data-structures
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Applied%20Data%20Structures.md)

![C#: Applied Data Structures](https://media.licdn.com/dms/image/v2/D560DAQHlhDcLmjPIhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703201046259?e=2147483647&amp;v=beta&amp;t=aKmIwORZwOLbKWxDGC3xk9bxCQ4Br3bC7OFnIlEyJQs)

# C#: Applied Data Structures

> Learn how to manage data more efficiently and effectively using collection classes and data structures in C#. In this course, join instructor Joe Marini as he outlines the basic steps of how to maintain collections of data in C# and choose the right collection class that’s applicable to a wide variety of different programming scenarios. Joe begins by exploring core concepts, including the differen

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126) | 1h 39m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Wrangling data in C#](#wrangling-data-in-c)
  - [What you should know](#what-you-should-know)
- [**1. Overview of Data Structures**](#1-overview-of-data-structures) (4 videos)
  - [Basic C# data structures](#basic-c-data-structures)
  - [Introduction to C# data collections](#introduction-to-c-data-collections)
  - [Generic vs. non-generic collections](#generic-vs-non-generic-collections)
  - [Selecting a data structure class](#selecting-a-data-structure-class)
- [**2. Basic Data Structures**](#2-basic-data-structures) (6 videos)
  - [Basic List operations](#basic-list-operations)
  - [Searching List content](#searching-list-content)
  - [LinkedList](#linkedlist)
  - [List vs. LinkedList comparison](#list-vs-linkedlist-comparison)
  - [Challenge: Shopping list](#challenge-shopping-list)
  - [Solution: Shopping list](#solution-shopping-list)
- [**3. Advanced Data Structures**](#3-advanced-data-structures) (5 videos)
  - [Stacks](#stacks)
  - [Queues](#queues)
  - [Dictionaries](#dictionaries)
  - [Challenge: Balance the statement](#challenge-balance-the-statement)
  - [Solution: Balance the statement](#solution-balance-the-statement)
- [**4. Specialized Data Structures**](#4-specialized-data-structures) (6 videos)
  - [ListDictionary and HybridDictionary](#listdictionary-and-hybriddictionary)
  - [OrderedDictionary](#ordereddictionary)
  - [StringCollection](#stringcollection)
  - [StringBuilder](#stringbuilder)
  - [Challenge: Strings](#challenge-strings)
  - [Solution: Strings](#solution-strings)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Wrangling data in C#](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=0)** - Working with data and information is one of the most important jobs of any real-world application. In modern [Software Development](../../Topics/Software%20Development.md), we use a variety of [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) to organize information so that it can be accessed and manipulated depending upon the task at hand. The data structures that you choose to perform these activities have a direct impact on the performance and effectiveness of your app. Hi, I'm Joe Marini, and I've been building software for some of the best known companies in Silicon Valley for more than 30 years. In this course, I'll discuss the most common types of data structures that are available in the .NET platform and show you how each can be used to store and organize data in a variety of different ways. Managing data efficiently is one of the foundations of building great apps, so let's get started learning about C# data structures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (4), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** net (1)
> **Speakers:** - working (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=0)** - In this course, we're going to be learning about how to use various data structure classes available in .NET and we're going to be using the C# language. So there are a few concepts that you should already be familiar with before you begin. First, I'm going to assume that you already have experience writing code and that you're familiar with basic things like functions, variables, lubes and so on. Specifically, I'm also going to assume that you're already familiar with at least a basic understanding of C#. If you need to brush up, then check out Learning C# or C# Essential Training here in the online library. Let's jump over to the code to finish the setup for this course. There are a couple of different ways you can work with the example code in this course. I've set up a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with the examples, and you can find it at this link. The course content is organized into two separate folders. There's the finished folder, and the finished folder contains all of the code examples in their finished state so that you can compare your code against them. The start folder, which is right here, contains the code examples in the starting state, and this is the folder that I will be working in throughout the course as we build towards the finished state for each example. Now, if you want to download the examples and work with them locally on your computer, then that's easy enough to do. We just click on the code button here, click on local, and then you can either clone the repository to your computer or you can download a zip file and then use your favorite code editor to work on them. You'll just need to make sure that you have .NET installed on your computer, at least version seven, in order to use the examples.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=94)** But this repository has been set up with a GitHub code space, so you can just work directly online with nothing to install. All you need to do is fork a copy of the repository into your own GitHub account here, and then click on the code button, go to the code spaces tab, and then fire up a code space right here in the code menu. Now, you can see that I've already done that and this is the code space I will be using in the course. Now, either way works fine. If you want to work on the files locally, that's fine, but I'm going to be using the code spaces feature in this course. So let me open my code space and show you what it looks like. Now when you create your own code space, it will take a few moments to spin up, so you'll just need to be patient. When the code space starts, you will see a browser-based version of Visual Studio Code, and here in the files list are all the files you'll need for the course. You'll also have a built-in terminal, which could be found in the view menu. So if I go up here and click on view, I can choose terminal, or I can type control backtick, which I'm going to do that now, and you'll see that the terminal starts up. I can check to see that .NET is already installed. I'll type dotnet -- version, and you can see that I have version seven already installed in my code space. You also want to make sure that you have the C# extension installed, which you can see I have here in this little icon with the boxes. These are the extensions. Make sure that C# is installed. If it's not already installed for you, you'll just have to go find it in the marketplace.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=186)** It's easy enough to do. All you need to do is search the marketplace. I'll type in C# and you can see it's one of the first two that come up. So once you've got the extension installed and got the code space spun up, you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3), terminal (3), visual studio (1)
> **CLI Commands:** make (3), find (2), dotnet (1)
> **Prerequisites:** set up (2), before you begin (1), setup (1), install (1), you'll need (1)
> **UI Navigation:** click on (4), go to (1)
> **Env Vars:** net (3)
> **Exercise Files:** download the (1), zip file (1)
> **Speakers:** - in (1)


### 1. Overview of Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic C# data structures](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=0)** - [Instructor] Let's start by taking a look at some of the basic built-in [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) in C-SHARP before we examine some of the more complex data structure classes. For some of you, this might be a bit of a simple review. So if you're already familiar with strings, arrays, and tuples, you can skip this video. First, let's consider strings, and I'm going to open up my program .cs file which is in my basic folder in chapter one, so you can follow along. A string is a collection of characters and strings are immutable objects. In other words, they can't be directly modified once they are created. So strings are declared using the string keyword. So I'll create a variable named s1, and I'll give it the value of Hello World with a space. And you don't need to use the new operator, unless you're creating a string from an array of characters. So I'm going to uncomment this array of characters declaration right here, and then I'll make another string called s2. And in this case, I'll type new string and then pass in the character array to create my string. Now, it's important to understand how immutability affects strings. When you make a change to a string in dotnet, so for example, I'm going to add s1 and s2 together. So I'll just write s1 plus equals s2 and then we'll go ahead and print that out. And then let's also convert s2 to uppercase. So I'll call s2.ToUpper. All right, and we'll print that out as well.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=102)** Okay, let's save and then let's run this. So here in Visual Studio Code, I can just right click on the folder that my code is in and choose open in integrated terminal, so I'm going to do that. So that opens my terminal right in that folder, and I'll just write dotnet run. Okay. And you can see the results here of the plus equals operator and the ToUpper function. So each one of those results, so when I do this plus equals operator, and I call ToUpper, what happens is each of those operations returns a copy. They return a new string. The original string is not directly modified. And what that means is you have to be careful with string references. So for example, if I create another string, I'll write string three string, yeah, s3, and I'll give that a value of Hello with a space. And then let's imagine I assign another string reference to this one, so I'll have string, s4 is equal to s3. And now what I'm going to do is I'm going to modify s3. So I'll write s3 plus equals World. And then I'm going to write out s4, the one that I made to point to s3 right here on line 16. So when I run the result, so I'll run again down here in the terminal, notice how s4 still points to the original string reference
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=199)** which just has Hello in it. So even though I added the World to s3, s4 was not updated, even though it's pointing to s3 because this operation right here creates a new string. It does not use the old string reference. Okay, let's look at arrays next. Arrays are contiguous storage in memory of the same variable type. So to declare an array of integers, I use the bracket syntax. So I'll write int and then two brackets, and I'll call my variable nums, and then I'll write new, and then again the data type. And then inside the brackets, how many of those that I want. I can also initialize the array with a set of initial values if I want to. So I can write int, and then I'll make another variable called nums2. And in this case, I'll use the initializer syntax in between the two curly braces to just put some numbers in the initial array. Arrays can also have their values implicitly typed using the Var keyword, and the compiler will infer the type from the data. So for example, if I wrote var a equals, and then I'll use new with two brackets, and then I'll create some initial data. So A, B, C, right? D, E, F, and then, G, H, I, okay? That's going to create an array of strings because even though I'm not supplying
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=291)** the data type, I'm just using Var, the compiler will look at the data and say, oh, those are strings. And this must be a string array. Now, if you want to have multiple data types within the same array, what you can do is create an array of objects because object is the most base class in dotnet. Everything in dotnet basically descends from the object base class. So this would let me create an object array, and I'll name it objs. And inside the curly braces, I'll put some initial data. So I'll put a string, and I'll put a couple of numbers, and then maybe a Boolean or two. All right, and so, when I run this, let's go back up here and run this again. And you can see, now, I'm not printing anything out, but you can see the string results and there's no compile error, so everything must be working. Okay. Finally, let's look at tuples. So tuples are lightweight data structures, and they're designed to group together multiple data elements without having to define a class. There are several ways that you can create and use tuples. One way is to define the data types that they will hold. So let me scroll up here a little bit. What I'm going to do is create inside two parentheses, I'm going to write some data types, a string, an int, and a bool, and then I'm going to name my tuple variable t1. And then inside another set of parentheses, I'll actually provide the data. So the first has to be a string, the second one
>
> **[6:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=384)** has to be an int, and then the last one has to be a bool. I'll make that false. And then I will print out my tuple one variable. You can also name the individual fields in the tuple. Oh, whoops, actually, first, before I'm going to print this out, I'm going to print out a string, and I'm going to use a format string for that. Now, when you're working with tuples, if you don't name the items inside the tuple, the way that they're accessed is using this item syntax. You can see that when I type the dot on my t1 variable, I'm getting statement completion for Item 1, Item 2, and Item 3. So I'm just going to print out Item 1, and then I'll print out t1.Item3. But you can name the individual fields inside the declaration if you want to. So I could have written string s, int i, right? And bool b, and done pretty much the same thing. And I'll just copy the same data and put it down here, and then I'll just print this out. So what I'll do now is inside my print statement. Now, when I write t1, when I hit the period, notice that, oh, whoops, I'm using t1 there. There we go, t2. When I type t2 and then period, notice how I'm getting the variable names now. So now I'm getting B, I, and S, rather than Item 1, Item 2, and Item 3. So I'll just do s and then I'll do t2.b, all right? And of course, you can use the Var keyword,
>
> **[8:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=482)** and if you want, you could put the names inside the initialization code. So I can just write var t3. And then when I type the data inside these parentheses, the compiler will infer that this is a tuple. So I can write s: for example, and then the string, and then i:25, and then b:true. And when I do that, the compiler will say, okay, this is property named S, that's a string. I is an integer, and B is a boolean. And then let's copy and paste this right line. And once again, let's write out t3 and t3. All right, so let's go back up. Let's comment out the previous example. So I'm going to just select these console right lines and comment them. And let's go ahead and clear this and then run. And there you can see the results of those three tuple statements being printed out in the terminal. So tuples are really useful for a variety of scenarios, and actually one of the most common is to return multiple values from a function. All right, so now that we've seen some of the basic data types, we can move on to some of the more complex data structures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (3)
> **CLI Commands:** make (4), dotnet (4)
> **Tools:** terminal (4), visual studio (1)
> **Definitions:** is a  (3), in other words (1), is an  (1)
> **Analogies:** for example (4), imagine (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Ports:** :25 (1)
> **Env Vars:** sharp (1)

#### [Introduction to C# data collections](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=0)** - [Instructor] Any non-trivial application will usually have to create and manage groups of objects that represent data and other functionality within the program. The .NET library provides a set of classes that help you manage these groups of objects to make the storing and processing of data much easier. Each of these classes are tailored to particular types of [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). Later in this chapter, we'll take a closer look at how to select one of these [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) classes based upon what you needed to do. But for now, I'm just going to introduce the various classes, along with a quick overview of what they do. It's also important to note that .NET provides both generic and non-generic versions of collections, and we'll discuss the key differences between these types a bit later. If you're not already familiar with generics and .NET, I suggest you watch the course, [C- Interfaces and Generics](C-%20Interfaces%20and%20Generics.md), which covers this area. The List collection is one of the most basic collection types. It provides an array-like structure where you can access elements using an index. The LinkedList class implements a doubly linked list, and elements are accessed using forward and backward references. The Stack class uses a last in, first out method for accessing elements. While the Queue uses a first in, first out method. The Dictionary class associates a unique key with a single object value. Keys must be unique, but the values in a dictionary don't have to be unique. .NET also provides some specialized collections. The ListDictionary is a dictionary
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=95)** that is implemented using a singly linked list. For smaller sets of data, this class can be more efficient than using a regular dictionary. The HybridDictionary starts out as a ListDictionary, but then transforms into a regular dictionary when the collection starts to get large. The OrderedDictionary is just like a regular dictionary, but it maintains the order in which items are inserted. These three classes are a little bit older, and you might not see them used very much in newer .NET code, but you might encounter them in older codes, so it's useful to be familiar with them. The next two are much more common. The StringCollection class provides a collection that is dedicated to working with strings, and then finally, the StringBuilder makes it easy to build and manipulate string content. This one's actually pretty popular, and you'll see it quite a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **Env Vars:** net (5)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Generic vs. non-generic collections](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=0)** - [Instructor] Let's examine the differences between the generic and non-generic collection classes a little more closely. The .NET framework supports both, generic and non-generic collection types. But for the most part, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) recommends that you should use the generic versions in any new code that you write. Generic collections were introduced way back in .NET 2.0 and have several benefits associated with them that the non-generic versions don't have. If you're not familiar with generics, then I suggest you watch the C# Interfaces and Generics course to learn more about what they are and how they're used. The generic versions of the data structure classes provide type safety at compile time, which helps to reduce programming errors. This is because when you declare a generic data structure, you provide a type argument, which restricts that collection to containing only objects of that type. So for example, I can declare a list data structure that contains only strings or integers, or a custom class type that I've created. This leads to better performance for the generic classes since the non-generic classes have to store their data as objects, and then you have to cast between the object type and the data type you want to use. For these reasons, I'm only going to be demonstrating the generic data structure classes for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, except for the part where we examine some of the older types that you might run into when working in older .NET code bases. If you want to familiarize yourself with the older non-generic versions, then I suggest you refer to the Microsoft documentation for these classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** net (3)
> **Versions:** 2.0 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Selecting a data structure class](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=0)** - [Instructor] Let's consider some of the basic questions you'll need to ask yourself when deciding how to select a data structure to solve a particular type of problem. First, you'll need to consider what kind of data you'll need to work with. Will the data be individual primitive values like numbers or strings or key value pairs or complex objects? Next, think about how the data will be accessed and processed. Do you need random access to the individual data items that will be kept around for a long time? Or will the data be accessed in sequential order with each item no longer being needed once it's been used? Or maybe the data needs to be processed in a particular order, such as last in first out, or first in first out. Also, consider the performance needs of the scenario. Is the emphasis on quickly building the collection that will then be processed over time, or do you need fast retrieval in searching? Okay, so let's take a look at the different collection types and how they correspond to these different kinds of usage scenarios. Fast and random access to data are provided by the list and the list dictionary collections. The other collection types such as linked list are better for datasets where you are mainly concerned with processing data items in order. Those collections also trade off fast access for fast adding and removing of data compared to the list or dictionary, although it should be pointed out that you can quickly add and remove data from lists and dictionaries as long as they don't need to shift their data around or be resized.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=95)** If you're planning on keeping items in memory for a while and operating on them over and over again, then consider the list linked list and dictionary classes. Stacks and queues are usually used for collections of data that are going to be processed, and then each element discarded after it's used. Most of these [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), other than the linked list, require contiguous space in memory, so keep that in mind as you're planning how many data elements will be kept in memory at one time. These data structures also give you a way to specify their initial size when created, so that's another good way of keeping your application performing well instead of having to constantly resize the structure as more and more items are added. And finally, if you need to process data elements in a particular order, such as last in first out, or LIFO as it's sometimes called, or first in first out, which is known as FIFO, then the stack and queue collections are what you should consider. Alright, so that's a quick survey of the various characteristics of the different C# collection types that we're going to work with in more detail in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course. Now, of course, your particular needs are going to be unique to your application, but this mapping should help you figure out where to focus when you're choosing a data structure type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Prerequisites:** you'll need (3)
> **Env Vars:** lifo (1), fifo (1)
> **Analogies:** such as (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Basic Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic List operations](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about some of the basic data structure classes in C#. So let's start off by looking at the list data structure. And here in chapter two, I'll open up my list folder and open the program. All right, a list is simply a strongly typed collection of objects that can be accessed by a zero-based index, similar to a regular array like we saw earlier. The list is dynamically resized as needed to hold items as they are added or deleted. Let's write some code to exercise the functionality of the list class. So to create a new list, I'll use the list constructor. And since we're using the generic version, I need to specify the type of objects that the list will hold, which for our example will be strings. So I'll use the List class and it's going to hold a string and I'll call it the strList. And I'll use the version of the constructor that lets me specify the initial capacity of the list and I'll set that to be 10 strings. So I'll write new List string, and I'll give it an initial capacity of 10. And by the way, if you'll notice, I've included the System.Collections.Generic namespace up here because that's where the generic collections are kept. To add content to the list, I can use a variety of functions. So for example, I can use the add range function, which takes an existing innumerable object, like an array, and then populates the list.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=92)** And you can see I already have an array of strings defined, so I'll just use that one. So I'll write strList.AddRange and then I'll pass in the comedians array. And we can also easily add individual items using the add function, so I'll do that as well. So I'll use my strList and I'll call the Add function and I'll add a couple more. There we go. So now that we've added some content to the list, let's look at the count and capacity properties. So the count property tells me how many items I actually have in the list at the moment. And capacity tells me what the current capacity of the list is. So I will WriteLine out and I'm going to use my formatting string. So I'll write, oops, Count and Capacity. And those are strList.Count and strList.Capacity. So let's go ahead and run what we already have and let me collapse down some of these blank lines. All right, so I'll right-click here on my list folder, open this in the terminal and write dotnet run and you can see that the current count is eight strings out of a capacity of 10. All right, lists themselves are innumerable,
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=186)** so we can iterate over each item using a for each statement. So let me bring this down a little bit. And what I'm going to do, if you look down here, you'll notice that I've written a utility function named PrintList, which does exactly that. So this PrintList function uses a for each loop and retrieves a string for each item in the list and then simply writes it out to the console. So let's go ahead and call that function up here. I'll simply call PrintList and we'll pass in strList. And of course, list elements can also be directly accessed by an index, just like in an array, and that's one of the main benefits of using a list. So let's go ahead and write out the item value and we'll simply access strList at index four. All right, so now we're at the point where we can try out some more code. So let me bring my terminal back up here a little bit and let's run again. All right, so now we have the capacity and the count, and once again, and so now we're writing out the, oh, whoops, looks like I forgot to put a little dollar sign in front of that formatting string there. So let's try that again. Okay, so now we have our count and capacity. We're iterating over each string in the list, and then we're accessing an individual item. Now let's look at removing items from the list.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=279)** So to remove individual items from the list, you can use the remove function along with a zero-based index. So let's bring this down a little bit, and I'm going to write strList and I'm going to RemoveAt, and that's the index I want to remove an item at, so I'll remove index two. You can also call remove with a specific value and that item will be removed from the list. So I can also write something like this. I can write Remove and I'll write Tina Fey. All right, lists can also be sorted in place using the sort function. So let's try that out. So I'll write strList.Sort. And then once again, we'll print out the list. All right, so let's bring our terminal back up, let's clear the output and let's run one more time. Okay, so up until here, we have the original output. And now you can see that we've removed a couple of people from the list and we're calling PrintList again. And you can also see that the list was sorted in alphabetical order, so the A comes first, then E, then the L's, and then the R. All right, so that covers some of the basic list operations. In a separate video, we'll learn how to search through list collections for specific information.

> [!info]- Semantic Content
>
> **Code Identifiers:** strlist (9)
> **Tools:** terminal (3)
> **Analogies:** similar to (1), for example (1), just like (1)
> **UI Navigation:** open the (1), right-click (1)
> **CLI Commands:** dotnet (1)
> **Speakers:** - [instructor] (1)

#### [Searching List content](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=0)** - [Instructor] Now that we've seen how to add and manipulate objects in list collections, let's turn our attention to searching that data. And again, I'm working on the same Program.cs file in the list folder in chapter two, so we're just going to pick up from where we left off in the previous video, So if you haven't already done the previous video where we added items to a list, you should go back and do that so that you're at the same point in this video. So let's go ahead and scroll down to the searching the list content section. Perhaps the easiest and most straightforward way to find a piece of data in a list is to use the contains function, which returns a Boolean result indicating whether the value is in the list. So for example, to find out if a particular lame is in the list, I can use contains to search for a given string. So what I'll do is I'll write out the result of whether or not, actually, I'm not going to do the string, I'll just write strList, and I'll just write Contains, and let's see if the string contains Ron Gallagher.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=73)** All right. Another useful method for finding data in a list with a bit more flexibility, is the exists function. So exists will return true if an object in the list is present that matches a set of criteria that the argument, which is a predicate function, checks for. So for example, if I wanted to see if the list contains a name that is longer than 15 characters, I can write some code that looks like this. I'll make a Boolean variable called found, and I'm going to assign that to the result of strList.Exists. And the argument to exist is going to be a predicate function or a callback function. In this case, I'm going to use a local Lambda, and so the argument is going to be X, and the body of that function is going to be, X.Length is greater than 15. And then I'll print out whether that item was found, item found, and that's going to be the result of the found variable right there. Okay. So let's go ahead and run what we have. And I'm going to go back up and comment out some of the previous right lines just so that we don't have a whole bunch of pollution in our code, so I'll comment that guy, and we'll comment that guy there, and we'll comment out the call to PrintList, as well as that one.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=168)** Okay, so let's go ahead and bring up our terminal, and we'll dotnet run. All right. And we can see that the list does not contain a name Ron Gallagher, because the actual name was Leo Gallagher, so that's good, so it contains succeeded there. And then of course we have X.Length is greater than 15, and it looks like there was in fact a name that has at least, well, at least there's one that is longer than 15 characters. So to perform an even more advanced search, we can use the find and find all functions. The Find function also takes a predicate, or a Lambda, or a callback as an argument, and then executes that function against each element in the list. So to take an example, let's imagine we wanted to find the first element in the list that starts with the letter L. So I'll have a string result named item, and it'll be an empty string to start, and what I'm going to do is write item is equal to, and on the list, I'm going to call the find function. And the function I'm going to pass in is going to take a single argument, and the logic is going to be that X starts with L.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=254)** And then we'll print out whether that was found. All right. So I'll have item, and that's going to be item. And the find all function is similar in that it returns a list collection of all the items that match the predicate function, not just the first one. So to find every name in the list that starts with L, the code would look pretty similar. So what I would do is I would write, instead of a single item, I'm going to have a list of strings, and that's going to be an item list, and I'm going to assign that to the result of calling strList.FindAll, and then I'll just use the same predicate, so I'll just go ahead and copy this one right here and paste, and then I'll use my print list function to print out that item list. Finally, let's look at the true for all function, which once again uses a predicate as its argument, and it returns true if every element in the list matches the criteria specified by the Lambda. So to see if all the names in the list are longer than 10 characters, I could write some code that looks like this, I'll have a Bool result, and I'm going to call strList,
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=349)** and I'm going to call TrueForAll, and the True for All is going to take X, whoops, X, such that X.Length is greater than 10.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=367)** And then we will print that out.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=377)** All right. Okay, so let's run what we have, and I'm going to go ahead and comment out the previous two examples. All right, let's bring this up a little more and let's clear the terminal, and let's run.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=401)** And we can see that the first name, this is the result of the find function, the first name is Lenny Bruce. And then we have our find all result, which is a list of three items of strings that start with L, so we've got Lenny Bruce, Leo Gallagher, and Louis Anderson, and so there's three there. And then finally, we can see that the result of the true for all function is true, because all of the names are in fact longer than 10 characters.

> [!info]- Semantic Content
>
> **CLI Commands:** find (11), make (1), dotnet (1)
> **Code Identifiers:** strlist (4)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** previous video (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [LinkedList](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=0)** - [Instructor] The linked list is another data structure used for keeping track of a list of elements. The main difference between a list and a linked list is that the elements of a linked list are accessed sequentially instead of directly using an index. Each element in the linked list, in addition to holding the value of the element, also maintains a pointer to the next item and the previous item in the list. For this reason, the linked list class in C# is called a doubly linked list. This allows the individual items of the list to be dispersed throughout the system's memory instead of having to be stored in one contiguous memory block. It also makes the process of inserting and deleting items from the list very fast. Essentially an order one operation. The main downside of the linked list is that items can't be looked up as quickly as in a regular list, but if the contents of the list will be processed sequentially, then that doesn't really matter. You can imagine a scenario such as an online music service, for example, where the user can move forward or backward in a list of songs. Since it's not necessary to randomly access an individual song, a linked list can handle this very easily. All right, so let's switch over to the code to exercise the linked list class. Right here I am in my code editor and in my linked list folder, I'll open up my Program.cs file. And once again you can see I've got my system collections generic namespace here, and I already have a string array that holds a list of song names.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=96)** So to create a linked list, I'll use the generic version of the class and specify that I want a linked list that holds strings. And I'll do that by using the linked list constructor. And it's going to hold string types. I'll name it my list. And then I'm going to initialize the list using the constructor that takes an existing array and then adds the items to the linked list. So I'll write new linked list and I'll pass in these songs array. And of course I can also add individual items one at a time, and I can specify whether they should get added to the front of the list with add first. So let's try that. And we'll add a song and I can also use the add last function. All right, there we go. So just like other C# [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), I can iterate over the contents of the list without disturbing the list contents. What I'm going to do is use a for each statement like this, and I'll get each string in my list and I'll write out each string. All right, so let's run what we have so far. We create our list, we add some items, and then we're going to iterate over the list and print out the contents.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=188)** So I'll right click and bring up my integrated terminal and I will dotnet run. And when I run the example, we can see all the song names that were added in the constructor. So that starts here and ends there. And we have the ones that were added at the first and the last positions. Okay, so let's try a few more operations. Let's go ahead and close the terminal. So remember that linked list collections have a first and last element. So let's get references to each of those. What I'm going to do is use a linked list node structure, and of course that's going to be a string. So I have to define that as a string type. And I'm going to call this one first, and that's going to be equal to my list first. And I'll copy that and paste it. And next one will be called last. All right. And then let's access the value property of each of those nodes. So I'll write out the first value and then I will write out the last value. Items can also be added or removed relative to an existing item in the list.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=284)** So let's add an element using the add after function to add a new song after the first one. So on my list, I'm going to call the add after function, and I have to give it a node that's relative. So I'm going to use the first node and I'll add, here comes the sun. All right. And then once again, let's just print out the contents of the list. So I'll copy that, paste that there, and just so we can easily distinguish the two, I'll put in a line. There we go. Okay. And then just to make the output easier to read, let's go ahead and well, actually, you know what, we've only got two outputs right now, so let's go ahead and just run what we have. So I'll right click on my integrated terminal and run this. All right, so we have our first output where we have the original list of songs. All right, and then you can see that we are writing out the first and last value. So that's this output right here. And then we add, we call add after. So after Africa we add, Here Comes the Sun, and then we iterate over each string. So that starts here and goes all the way down to the last song. Okay, so let's keep on going. Just a couple more things to try. Let's close our terminal.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=380)** Let's try searching for content within the linked list. First, let's use the Contains function to see if the linked list contains a specific value. So to do that, I'm going to write my list and I'm going to call contains, and I'm going to look for the song Satisfaction, and I'm going to wrap that in a call to Console dot WriteLine. So that's the Contains function. Let's use the find function to find a specific node in the list. So I'll call find and find's going to come back with a node, and I'm going to try to look for the Help song. And we can also use the next and previous properties to traverse the list. Now, in the interest of time, I'm not going to do that, but let's use these properties to access the value of a node that's adjacent to the first and last one. So for example, I can write Console WriteLine. I'm going to use the first reference, and I'm going to use the next field to get the node that comes after the first node. And then I can access the value of that node. And I can do the same thing with the last node reference that we already have. And I'm going to use the previous reference to get the value. Okay, so one more time, let's go ahead
>
> **[7:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=475)** and I'm going to just comment out these other print statements just so that we can easily read our output. All right, let's scroll. Let's bring up the terminal and let's run. Okay, so we can see that the result of the Contains function is true. So sure enough, the list does contain the song Satisfaction. We call the find function on the song Help. And sure enough, there is a node that contains that song. So that's good. And then we look at the first and last references and we get the next and previous value of each of those. So if we go back and look at our list, so remember, well, I didn't print it out, but remember that we had Africa as the first song, and then the next one was Here Comes the Sun, and then the last song was The Twist, and then the previous one to that was Right Here Right Now. Okay, so that's a quick exercising of the Linked list data structure. I would suggest maybe taking a few minutes here to play with some of the functions and properties that we didn't get a chance to look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** node (11), find (5), dotnet (1), make (1)
> **Tools:** terminal (5)
> **Analogies:** for example (2), imagine (1), such as (1), just like (1)
> **Definitions:** is called (1), is a  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [List vs. LinkedList comparison](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=0)** - [Instructor] Now that we've had a chance to look at the list data structure as well as the linked list, let's pause for a moment and discuss how you would go about comparing the two collection types to fit your particular needs. Now, I'm not going to do this for every collection type in the course. I just want to give you an idea of how to look at the advantages and disadvantages of each data structure. So in a regular list, the process of looking up items is very fast. It has a big O order of one, which is pretty much constant time. In other words, no matter how many items are in the list, the time it takes to access a random element doesn't change. And this is probably the main advantage of using a list. Adding elements to the very end of a list is also usually order of one, unless the list has to be resized and copied, in which case it's closer to order N, where N is the number of items in the list. Similarly, to add an element within the list is order N, usually, because the other elements need to be shifted down in order to make room for the new element. Removing an item is also order of N for the same reason the remaining items need to be shifted up and the time this takes grows linearly as more items are in the list. So let's compare that with a linked list. In a linked list looking up a random item is order N. And remember, that's because each element in the list can only be accessed sequentially by following the next and previous pointers. Adding elements to a linked list, however, is very fast.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=93)** And this is one of the main advantages of a linked list. To add an element to the very first or very last position, or relative to another known element, is order of one. And likewise, removing items from the list is also constant time. Adding elements within the list is order N, since you first have to traverse the list to the position where you want to add something. Similarly, removing a random element from the list is also order N. So looking at this comparison, you can see that if your algorithm mainly needs to look up items, then a regular list might fit the bill. However, if your main issue is getting the list built and then processing it in order, a linked list might be better. You can use a similar comparison framework with the other data structure types to help you determine which is the right one to use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Shopping list](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=0)** - [Instructor] Okay, let's try a programming challenge using some of what we've learned so far. For this challenge, you are going to implement a class that represents a shopping list. So here in the challenge folder, in the start folder of chapter two, I'm going to open up my program file and you can see that I've already given you some starting code that will be used to test the class that you're going to build, which will be this class down here, the shopping list class. Your class will provide three methods. There's the add item method, and that will add an item with the given name, price, and quantity to the shopping list. The remove item method will remove a given item from the list, so you'll need to check the quantity of the item and then only remove one of them. If there's only one of the given item, then you can remove it completely from the list. And then there's the get count method, which will return the total number of items in the list. So you'll need to count the quantity of each item. I've also given you the starting point of a print list function for you to print out the contents of the list when you're ready to use it. So let's scroll back up to the top here, and you can see that what I'm doing is I'm creating a new instance of the shopping list and then adding some items to it. And notice that in some cases I'm only adding one item, but sometimes I'm adding more than one. So your remove item function's going to have to take that into account.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=91)** I'm going to go into my finished folder, and I'm going to run my finished challenge so that you can see what the output looks like. So I'm going to dot net run, and this is what the correct results should look like. So you can see that I've added the items. The list starts out with five things in it, and then I perform some more operations. Then the list has 13 items, and then we perform some more operations. And then this is the final printout right here. Okay, so go ahead and try this challenge and then I'll explain my solution in a separate video.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Shopping list](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=0)** - [Instructor] Let's review my solution to the code. For this challenge, we needed to build a class to represent a shopping list and implement three methods to add, remove, and count the items in the list. So I'm going to open up my finished version here. For my solution, I decided to create a helper class called shopping item, and that's going to represent an individual item entry in the list that contains the name, the price, and the quantity. I also decided to use a regular list structure to represent the list. The code for the add item function creates a new shopping item and adds to my list and sets the value of each of the fields to the incoming arguments to the add item function. The remove item function is a little more complex because we had to check if there was more than one of the given item in the list. So I use a loop to find the item by the name in the list. If the item was found, then I check to see if the quantity is greater than one, and if so, I only decrement the quantity. Otherwise I remove the item entirely. And then the get count function iterates over the list and counts all of the items by looking at the quantity property. Remember, you couldn't just simply return the count property of the list itself. And then of course, I filled out my print list function to loop over the list and just print out each item.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=94)** Alright, so how does my solution compare to yours? Remember, it's not important that your code matches mine. There's almost always multiple approaches to solving programming problems, and your solution might even be better than mine. The important takeaway here is to compare your code with mine and then note and learn from the differences.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Advanced Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Stacks](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=1)** - [Instructor] In this chapter, we'll move on to the more advanced [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), and we'll start with the stack. A stack is a data structure that stores elements similar to an array, except that items are added or pushed onto the top of the stack and then removed or popped off of the top of the stack. In this exercise, we're going to try out the C# version of the Stack Data Structure. So I'm going to open up my stack code here in the editor, and you can see I'm including the generic collections module at the top of my file. So let's create a new stack using the appropriate constructor, and I'm going to make a stack that holds string objects. And I'll name that myStack, and that will be a new stack of strings. So to add elements to the stack, we use the push functions. Let's go ahead and try that out. And I'll push on some strings and do this a few times. So two, three, and four. So now that we've added some strings to the stack, we can use the count property to see how many elements the stack contains. So let's write that out to the console, and we'll write out the item count. And that is going to be my stack.count.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=92)** Alright, and of course, like other C# data structures collections, we can use the for-each iterator to iterate over the contents of the stack. So I'll do that here. I'll just get each string that's inside the stack.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=113)** Okay, so we've created a new stack, added some content, and, oh, hang on one second. Let's see what's going on with that error right there. Oh, it's not a function. There we go. (clears throat) Okay, so we've got the items added. Looking at the count and printing out each item, let's go ahead and run what we have. So we'll bring this up in the terminal, and we'll run it. Alright, and in the output we see the item count is four, and here's the output of the for-each loop. And notice how it's in reverse order of the items that were added. That's because the stack is a Last-In-First-Out structure. So the last one in is the first one out. So we added one, two, three, and four, and they're being iterated over four, three, two, and one. Alright, so now that we've seen how to add elements to the stack, let's take a look at how to observe and remove content. We can use the peak function to examine the element that is at the top of the stack without actually removing it. So I'll create a string variable, and then I'll call on my stack. I'll call peak, and that will get me the top item, and we'll print that out. Now, if you want to actually remove the element and work with it, I can use the pop function, which is the opposite of the push function. So I'll make another string and I'll call my stack .Pop. And once again, we will write that out, okay. And now that we've removed an element,
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=207)** let's print out the element count again. So to do that, I'll just go ahead and copy this line one more time. And last but not least, let's use the contains function to search the stack for specific content. And again, this doesn't actually remove anything, so we're going to call WriteLine. So let's see if we are able to find- So we'll call Contains, oops, Contains, and we'll look for the string five. And then we'll do the same thing and we'll look for the string four, alright? Okay, so let's run our updated code, get our terminal backup here. So this is the original output from the first iteration. And you can see now that the top of the stack, the result of peak and the result of pop are both the item four. And after we remove an item, the count drops down to three. And obviously five does not exist because we never added a five, and four is no longer there. So let's try quickly modifying this to look for two, and let's run this again. And sure enough, two does exist in the stack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **CLI Commands:** make (2), find (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** mystack (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Queues](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=0)** - [Instructor] The queue data structure is similar to the stack in that elements are processed in a particular order with the main difference being that instead of last-in-first-out, the queue processes elements in a first-in-first-out order. And this is obviously very similar to real life situations, where people get online for various reasons or cars enter a highway ramp and so on. So let's open up the code in the Queue folder, and I'll start by creating a queue that contains string data, and again, this is a generic class, so I've got that namespace included up there, and I'm going to specify what type of data my queue is going to hold. So I'll create a queue, and it's going to hold strings, and I'll call it myQ, and it's going to be a new queue holding strings, and I'll just use the default constructor. So to add items to the end of the queue, I use the enqueue function, so I'll call myQ.Enqueue, and we'll do pretty much the same thing that we did in the stack example. So I'll just do one, two, three, four, five, and let's go ahead and replace these. So after the items have been added similar to the stack, the count property will reflect how many items that there are in the queue. So let's go ahead and print that out. And I'll go ahead and write out the item count, and that is going to be myQ.Count.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=100)** And just like other collection types we've seen so far, the queue data structure can be iterated in a loop, so I'll use the foreach, and I'll get each string in my queue and print it out.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=118)** Okay, so let's run the code that we have so far. Let's bring up the terminal and run this. Sure enough, we have five items in the queue, and there's the output of the foreach loop. And notice that the difference, remember in the stack example, five came first and then four, because it was last-in-first-out. But in this case, it's first-in-first-out, so the order is what we would expect to see. Okay, so let's take a look at how to process elements in the queue. To access the first elements in the queue without actually removing it, we use the peek function. So I'll make a string variable and call myQ.Peek, and then let's write that out. The first item is, and that'll be str. Now, to get things off the front of the queue, what we do is we call the dequeue function. This is the opposite of enqueue, and it removes the item that's currently at the front. Let's go ahead and do that, so str is equal to MyQ, and I'm going to call the dequeue function, and let's print out what we dequeue, format string in there. The dequeued item is str, and then let's do it again.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=214)** Okay, and then after we do that, we'll print out the item count one more time, so I'll just go ahead and copy this line up here and put that in down here. All right, okay, so let's run our updated code. Let's get our terminal back and let's run. Okay, so we start out with five items. Here's the original output. So the first item is one, right? That's the result of the peek function. Then we call dequeue, so we dequeue the string one, and then we dequeue the string two, and then after we do the two calls to dequeue, that reduces the count by two, so now we have three items left in the queue. All right, so far so good. Let's keep on going. So, like other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), there's a contains function to search for data, so let's go ahead and try searching for something. And we'll write, let's see, Queue contains 'one': and that's going to be the result of myQ.Contains, and we're going to be looking for the string one, and we know that's going to be false, because we've dequeued it. So let's try finding a string
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=307)** that we know is going to be there. So let's try looking for the string four. And there's also a clear function to empty the entire queue, so let's exercise that. And then once we've cleared the queue, let's make sure that all the items are gone. All right, okay, let's go ahead and run the updated example. Whoops, one more time, back to the terminal.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=346)** All right, so here's our existing items. So sure enough, we can see that the queue no longer contains the string one. Oh, whoops, it looks like I forgot to name that four. So let's go ahead and clear this and run it again. All right, sure enough, one is no longer there, but four is there, and then after we clear the queue, the item count is zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Code Identifiers:** myq (5)
> **Analogies:** similar to (3), just like (1)
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dictionaries](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=0)** - [Instructor] The dictionary data structure is very useful for mapping a unique key to an associated value. And as you might expect, there are many real world applications for this. For example, you can imagine an application that keeps track of a set of [products](../../Skills/Software%20Development/Microsoft%20Products.md), each of which has a product ID. Each one of those IDs can be mapped to an object that describes each product, the name, the price, the quantity in stock, and so on. The main advantages of the dictionary are very fast lookup times, and the ability to enforce a unique key-to-value mapping. So, let's go ahead and try out the C# version of the dictionary. I'm going to open up my Program file. So, to create a dictionary, I need to specify both the type of the key, as well as the type of the values that the keys will map to. So for our example, to keep things simple, I'm going to define a dictionary that uses strings for both keys and values. So I'm going to create a dictionary that maps string to string, and I'm going to call it the fileTypes array. And that's going to be a new Dictionary. Once I've created the dictionary, I can add key value pairs by using the add function. So for example, I'm going to map file extensions to a more descriptive string. So, on my fileTypes dictionary, I will add,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=95)** and I'm going to add a mapping from .bmp to the more friendly string Bitmap file. And I'll just copy this a few times and make a couple of other examples. So for example, we'll map .txt to Text file. Actually, we'll call it Plain text. And we will map .[HTML](../../Skills/Web%20Development/HTML.md) to HTML Document. And then finally, let's map .jpg to JPEG Image. And then let's use the count property to see how many elements there are in the dictionary.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=152)** And we'll just use the fileTypes.Count.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=161)** All right. An interesting feature of dictionaries is that if you try to add an element and there's already an existing key, that's going to throw an exception. And actually this only happens in C# and .NET. Other languages like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) don't do this, but C# does. So, let's go ahead and try that. So, I'll uncomment this line. So, let's go ahead and try what we have so far. And let's run. All right, and so when we run, okay, so you can see that the count is four, and, oh, there's an exception, right? And the exception gets thrown. It says that an item with the same key has already been added, and the key is .txt. All right, let's go back and fix that. So, let's just comment this back out again. All right, and I can either add an exception handler, or I can actually try this nifty function called TryAdd, which attempts to add the key, and then returns whether it was successful. So, let's just try that instead. I'm going to make a Boolean variable named added, and I'm going to call fileTypes.TryAdd, and I'm going to try to add .txt and a string that just says "Just plain text". And then we'll write out whether the string was actually added.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=258)** All right, so let's run that again. Okay, and you can see now the exception is gone, and I can just check the Boolean result. There's no error thrown. And sure enough, that triad failed, because .txt is already there. Dictionaries can also be treated as associative arrays. So, for example, I can just look up a value by using a key as a type of index. So, let's write out, and I am going to write out a key value, and what I'm going to do is use the fileTypes array as if it was an actual array. So, inside these brackets I'm going to put in .html. I can also change values in this way. So, when you set an existing key, it just overwrites what's already there. So, fileTypes, and once again, inside the brackets I'm going to write .html, equals, and I'll just change it to say Web page. And then let's go ahead and write that out again. So, I'll just copy this line and paste it. All right, so let's try our new code. Let's get our terminal back, and let's run. Okay, and you can see that the key value starts out
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=354)** as HTML document because that's what it starts out up here. But then, this line of code actually changes it to say webpage. Let's keep on going. There are a couple of search functions to see if a dictionary contains a key or a value. So, I'm going to write, I'm going to use the Console, and I'm going to WriteLine whether or not the file type contains a key. And I'm going to call fileTypes., and in this case, I'm going to use the ContainsKey function to see if it contains a .bmp key. And, I'll do the same thing, but in this case, I'll use ContainsValue, and I'll look for HTML Document, which should be false now that we've changed it to webpage. All right. And then finally, we can remove items using the Remove function. So I'll write fileTtypes.Remove, and we'll remove .bmp. And then we'll take a look to see if it contains the key of .bmp anymore. And let's go ahead and run our updated code.
>
> **[7:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=450)** So, one more time, back to the terminal. Okay, so we can see that sure enough, .bmp, that result is true because that key is still there. Let's see, the ContainsValue HTML Document, well that's false now, because we changed it to webpage. That should be false, which is correct. And then we removed .bmp, which means that the last WriteLine of containing the key, sure enough returns false, because that key has now been removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (7), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** filetypes (7), filettypes (1)
> **Env Vars:** html (4), jpeg (1), net (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** make (2), python (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Best Practices:** the key is (1)

#### [Challenge: Balance the statement](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=0)** - [Instructor] Let's try another programming challenge using the [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that we learned about in this chapter. So as a developer, I'm sure you've probably used a coding tool such as VS code that I'm using here that indicates when a program statement is unbalanced. In other words, you don't have correctly matching parentheses, brackets, and or braces within your program. For this challenge, you're going to write some code that accepts a string and determines if the statement is balanced or not. So let's open up the starting point of the challenge. Alright, so here in the starting point, you can see that I've defined an array of strings and each one has some code in it that uses these parentheses and brackets and brace characters. Now, some of the statements are properly balanced, like this one, you can see it has a opening parentheses and a closing one. This one is also balanced because the brackets and parentheses are correctly nested, while others are deliberately unbalanced. So the test code calls this function, it's called check balanced. Check balanced will return whether the statement is balanced or not. And your challenge is to fill out the code for this function. So what I'm going to do is I'm going to run my finished code, and you can see that the test code is going to run over each test string in the statements
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=93)** and print out whether the statement is balanced or not. So I'm going to go into chapter three for the challenge, and I'm going to open up the terminal and I'm going to run my finished challenge. And you can see here that when I run this, there's a list of statements and whether or not they are balanced. So we can see for example, that hello world, right, that's balanced. This one is also balanced. Here's one that has only one closing parentheses, that's not balanced. This one has parentheses, but a bracket. This one is really unbalanced, it has no brace. And of course the single opening and single closing brace are also not balanced. So go ahead and give this challenge a try and then I'll be back in a separate video to explain my solution. So if you want to hint, keep listening for another few moments, otherwise you can stop the video now and get started and then I'll explain my solution. Okay, are you sure you want the hint? You sure? Last chance. Okay, so the hint is that you're going to need to use a stack data structure to solve this problem. So think about how you might use a stack in this situation and give it a try, and then I'll show you my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Tools:** vs code (1), terminal (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Balance the statement](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=0)** - [Instructor] Let's take a look at how I solve this particular challenge, and then you can compare your code to mine. For this challenge, we needed to implement a function that would determine whether a programming statement containing parentheses, brackets, and braces was properly balanced. I used a stack structure to solve this. So let's go ahead and scroll down. So let's take a look at my code for the CheckBalanced function. My code takes the incoming string and then processes each character in the string. So, well, first of course, I create a stack that's going to hold characters. So in my foreach loop, I'm going to loop over each character in the statement. If the character is an opening parentheses, or brace, or bracket, then I push it onto the stack. If the character is a closing one of those three, then I first check to see if the stack is empty. Because if it is, then we are obviously unbalanced and I can just return false right away. Otherwise, I pop the next character off the stack and check to see if it matches the closing character that we have encountered. So if the character that we're looking at is a closing parentheses, then the character that's on the stack needs to be an opening parentheses in order to be properly balanced and nested. And if they don't match, then obviously we're unbalanced and we can return false in each of those cases.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=95)** So this process continues until all the characters have been processed by my foreach loop. Now, after the loop completes, we have to check to see if the stack still has anything in it, because if it does, then we are unbalanced, because what that means is that there was an opening character that was not accounted for. All right, well, that's my solution. How does my code compare to yours?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Specialized Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [ListDictionary and HybridDictionary](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=0)** - [Instructor] There are some dot net data structure classes that were introduced in older versions of the framework and aren't really used that much in newer app development, but you might still run into them when working in older code. In this chapter, we will review some of these classes so you can familiarize yourself with them in case you have to work with them in an older code base. But we'll also take a look at some of the specialized [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that are still very commonly used today. So the first of these are the list dictionary and its close relative, the hybrid dictionary. And I'm going to open up the sample code here. And these collections are stored in the Collections.Specialized namespace, and you can see that I've got that namespace being included up here. The list dictionary implements a dictionary using a linked list. It's actually a bit faster than a regular dictionary for a very small collection. Like less than 100 elements. The hybrid dictionary starts out as a list dictionary, but then it transforms itself into a regular dictionary when the number of elements gets larger. So for simplicity in this example, I'm just going to demonstrate the hybrid dictionary since it's basically the same as the list dictionary version. So, to create a hybrid dictionary, I'm going to use the constructor along with some options to specify the initial capacity and whether I want the dictionary to treat its elements in a case sensitive manner. So I will create a hybrid, oops, HybridDictionary, and I'll call that myHBD = new HybridDictionary.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=102)** And I'll give it an initial capacity of 20 and false because you can see it says caseInsensitive. A Boolean that denotes whether the HybridDictionary is case-sensitive, or is case-insensitive. I want my dictionary to not be case-insensitive. Okay, so let's add some items. And to do that I'm going to use the Add function. So I'll add a key and a value, and we'll do this a few times. So I'll just add items 1, 2, 3, and 4 and make those values 1, 2, 3, and 4. And we'll print out the item count as well. And we'll print out the dictionary size. And that's going to be myHBD.Count. There we go. There's also a basic search function we can use to find content, and it is called contains like with some of the other data structures we've seen. So let's write out whether or not myHBD.Contains("item1").
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=176)** And of course, we can also remove items. So let's call myHBD.Remove, and let's remove item3. And then once we've removed it, let's iterate over each item in the dictionary. And so what I'm going to do is in this loop, I need to get each element in the hybrid dictionary, and that's going to give me what's called a DictionaryEntry. And I'll just call that de in myHBD. And then I'll simply write out. And we'll write out the key. Followed by the value. And then finally, let's clear the dictionary content.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=241)** And then once we've done that, let's go ahead and write out the dictionary size again. So I'll just copy this line and paste it here. That's a pretty good set of exercising code. So let's go ahead and run what we have. Let's bring up our terminal. And let's shrink that down so we can see the code, and we'll call dotnet run. And so here you can see the results. So after adding our elements, we have four items and the result of contains is true 'cause item1 is still there. And then we iterate over all the items after removing item3. So you can see that item3 is gone. And then after we call the clear function, the dictionary size is zero. So again, not a data structure type that you're going to typically use in a lot of new code, but you might encounter it in some of the older dot net apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **Code Identifiers:** myhbd (5), caseinsensitive (1)
> **CLI Commands:** make (1), find (1), dotnet (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [OrderedDictionary](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=0)** - [Instructor] With regular dictionaries, there is usually no guarantee that the collection will maintain the order in which items are added to the data structure. Most of the time this isn't important. But occasionally there'll be scenarios in which you want to process dictionary elements in the order in which they were added. For this scenario, you can use the OrderedDictionary. So let's go ahead and open up our example. So let's jump straight to the code. And here in my source, I have created an OrderedDictionary, which is also available in the specialized collections module. You can see that I've got that up here. Alright, let's scroll down a little bit. So let's go ahead and add some items to the dictionary in a particular order. So I'm going to add item one, and I'll give that a value one. And then I'll just make a few, oops, make a few copies of this and we'll just go ahead and make item two, three, and four. So I'm going to use my PrintDictionary function down here at the bottom of my code. This basically is the helper function that I've written to print out the contents of the dictionary. So let's go ahead and run what we have, and I'm going to pass in my dictionary for that. Alright, let's bring up our terminal, and let's run our code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=96)** And there you can see the contents of the dictionary are in the order in which they were added. So now let's make some modifications. So first I'm going to remove an item from the dictionary. So I'll call the Remove function, and I'll remove item three. And then let's add a new one. And in this case I'll add item five, and I'll give that a value of five. And then I'll modify one of the items in place. So let's change item two to be equal to new value two. And then let's add one more new item, and we'll add item six with a value of six. And then let's print the contents again. So let's go ahead and run our code again. Let's go ahead and clear the value here, and we'll run again. Alright, so you can see that when I run the code, all of the items are still in a consistent order. So value one is unchanged. I changed value two, right? Value three is gone now, and values five and six are at the end. So everything's in the order that they were added. And once again, this particular collection type, not probably one you're going to see used
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=190)** in a whole lot of new .net code, but it's been around .net for a while and it is still used. So you might come across it in some older applications, although there are probably people still using it. I do want to point out that this is not the same thing as keeping the dictionary sorted. What I mean by order is the order in which things happened to the dictionary. That's different than sorting the dictionary by keys, if you want to do that, turns out that there's actually a data structure to do this called the SortedDictionary class. So you can use this to keep your dictionary sorted by the keys. And if you feel up to it, I would encourage you to try converting this example that we just did to use the SortedDictionary to see the difference. I'll leave that as an exercise for you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [StringCollection](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=0)** - [Instructor] In this example, we'll take a look at the string collection data structure, which is used to manipulate groups of string objects. Now this particular class was introduced in .net before generics were added. Yeah, I know it's kind of old. So these days it's preferred to use the generic list data structure with a string type for new application code. However, you might still run into it when working in older code bases, and it actually is still kind of used sometimes, so it's worth covering here. Let's go ahead and open up the sample code. All right, so I've got my sample open in the editor, and you can see I've included the specialized module up here and I already have an array of strings defined. So to create a new string collection, I'll use the appropriate constructor. So I'll just simply use a string collection and I'll call it strcoll, and that's going to be a new string collection. And then I can initialize the collection with the add range function. And I'll call add range with my colors array. All right, so that will initialize my string collection with all the strings that you see here. And of course, just like other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), I can add individual items with the add and insert functions. So let's try that. So we'll add the black color and we'll add,
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=99)** we'll use insert for the white color at the zero index.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=108)** And at this point we can use the count property to see how many we have. So let's do that. And of course, you've seen this many times now, we can iterate over the collection using a for each loop. So let's try that out.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=136)** And I'm going to use write for this one. So we'll write out the string with a space after each one, and then we'll just write out a blank line.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=156)** And let's put a little divider line in there so we can clearly delineate our examples. Okay, let's run what we have so far. So we've created a new string collection, added the array, put some new things in there, looking at the count, iterating over each item. Let's open our terminal and let's exercise our code. And sure enough, you can see that there's eight different strings, there's eight colors. White has been inserted at the beginning, black has been added at the end, so everything appears to be working the way we want. So let's go back to the code. So the string collection also supports the index operator, so you can treat it like any other array. So for example, I can write out, let's access a specific item. I'll write item at three is, and we'll do strcoll sub three. And there's also a couple of ways to search for content. So we can use the contains function to see if the class contains a certain string. So let's see if the collection contains the string blue and we'll call it strcoll.contains. And we're looking for blue. And, oh, whoops, I got to close off that quote there. Or we can use the index of function and let me show you how that one works. So green is... Oops, green is at location.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=257)** And what I'm going to do is call strcoll. I'm going to use the index of function to look for the string green. Okay. And then finally, let's just clear the collection. And then once we've done that, let's go ahead and use our count property again just to make sure everything's working the way we think. All right, so let's run our updated code one more time.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=292)** And sure enough, yes, item three is yellow, blue is in the collection. Green, looks like green is not there. Is green not there? Green was minus one. Why the, why is that? Why did we not find... Oh, because I misspelled it. That's why. Let's try writing it again. There we go. Green is at four now and there was zero strings after we clear the collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [StringBuilder](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=0)** - [Instructor] Manipulating string content is probably one of the most common operations that many developers have to contend with. .Net provides a great data structure class for working with strings called the String Builder. One of the key advantages of the string builder is that it is much more efficient at making multiple changes to a string than it is to use regular string functions. And that's because the string builder allocates an internal buffer for working with the string and expands the buffer space only when it's needed. So let's try exercising some of the string builder features. So I'll open the code here and string builder lives in the system text module, so I'm including that. Let's begin by creating a new string builder with an initial capacity of 50 characters and an initial string. And these are both optional parameters. So I'll create a string builder, I'll call it sb. So I'll make a new string builder and I'll give it a default string and a default size of 50. And then we will write out the capacity, which will be the string builders capacity and the max capacity, which will be the string builders max capacity. And then there's multiple ways of getting string content into the string builders. So I'll use the append function and I'm going to add an array of characters. So I'll add a D, E, F, and that'll be it.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=103)** In fact, I can even use a format string. I'll append format. And I'm going to specify a format string here. So that's going to be GHI. And then I'll put some placeholders in here. And for the placeholders, I'll specify some letters. A J and a lowercase K. So at this point, let's write out the string builder content and try out what we have so far. So I'll write out, so I'll use the length to say how many characters we have, and the string itself is going to be the string builder. And I will call the two string method on it, which is what creates the string from its contents. And let's go ahead and run this. Let's bring up our terminal. Okay and we can see that we've got a capacity of 50 characters initially. The max capacity is, okay, well that's a very large number. It's in the gigabytes there. And then we have 11 characters currently in the string. And this is the actual string content. So far, so good. Let's keep on going. We'll try some more examples. I'm going to use the append join function to add more characters and append join, lets me specify a character or a string that goes in between the strings that I'm adding. So I'm going to specify a dash,
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=197)** and then I'm going to add a new character array. And I'll put in some more characters here. And I can also insert strings at any point within the existing string using the insert function. So let's try that out. I'll use insert to insert a string at the beginning of the string position zero. And I'll put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) alphabet in front. And then I'll use the replace function. So the replace function will replace the lowercase K with the uppercase version, and there's only one of these. And then let's write out the contents one more time. So I'll copy and paste this line. Okay, let's run our updated code. Let's get that terminal and let's run.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=255)** Alright, so now you can see that this is our original input, and now we're up to 28 characters. And so here's the inserted string alphabet right at the front, and the K is now uppercase. And you can see that the L through the O characters were inserted. And because we use the join, there's a dash between each one of them. So the string builder is a really useful data structure for working with string data in an efficient way. In fact, I would suggest maybe taking a few minutes here and checking out the string builder documentation and maybe trying out some of the other functions to get more familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **Env Vars:** ghi (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Strings](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=0)** - [Instructor] All right, it's time for another programming challenge. For this challenge, we are going to do some work with strings using the string [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that we learned about earlier in the chapter. Let's open up our code in the Start folder here. And if you turn your attention to the Main function of the program, I'll scroll down a little bit, you will see that I have several lines of text in a string array. And these are the opening lines of Abraham Lincoln's famous Gettysburg Address. Your challenge will be to calculate some data related to these strings by filling out the code for the PrintStringStats function, which is up here. And you can see that the code needs to be filled out. Notice that the PrintStringStats function takes a single string argument, and I've also given you a little bit of a headstart by using the Split function to split the string into multiple lines, 'cause you might need to do that. The first part of the challenge will be creating a single string to pass to this function out of the array. Next, your code will count the total number of unique words. Well, actually, it'll count the total number of words, period, in the string using a string collection. I want you to use a string collection for this part, and it will write that information out to the console. Your code will also calculate the longest [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in the text and also print that word. Then your code will calculate the number of times each unique word appears in the text and will print that information out to the console.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=96)** So I'm going to run my finished code, so you can see what the output should look like. So I'll go into my Finished folder, and in here, I'll open up this in my terminal. And I will run this. And let's expand this, so we can see some more. And you can see, let me scroll back up, 'cause there's a lot of words in this. All right, so there's 102 total words, the longest word was proposition, and then that's followed by the number of times each unique word was found in the text. And notice that all the words have been converted to lowercase, so that we don't duplicate words due to capitalization. So for this challenge, you're going to need to use a couple of the data structures that we covered in this chapter, such as the string collection and the string builder. And you might also need to use a data structure that we learned about earlier in the course. I've already given you a starting point by taking out all the punctuation, and let's go back to the code, so I can show you. So all the punctuation's already been taken out, and I've already added this line of code up here to the PrintStringStats function that you might find useful. So go ahead and give this challenge a try, and then I'll be back in a separate video to go over my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (5), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **Cross-References:** earlier in (2), we covered (1), go back to (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Strings](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=0)** - All right,. So how did you do on this one? Let's review my solution. For this challenge, we had to work with a set of strings and calculate some pieces of data about them. So we needed to figure out the number of words in the total text along with the longest [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). And we needed to count the number of occurrences of each word in the entire string. So let's scroll down a little bit. To handle the first part of the challenge, we needed to get an array of strings and assemble them together as a single string in order to call the print string stats function. And for this part of the challenge, I use the string builder in order to construct a single string out of an array of strings. The string builder data structure provides a function called a pen join, which lets me specify a character that will be inserted between each of the strings and then joins them together. So the result of that function call, is a single string that consists of all the strings in the array and then I just need to call the two string function on the string builder and then pass the resulting single string to my print string stats function. So that was the first part. Let's take a look at the inner workings of that function. All right, so the first task was to count the number of words in the string. And so to accomplish that, I provided a starting point using the string classes split function to split the incoming string
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=95)** along space boundaries. And by the way, you might be wondering, hey, why do we just turn an array into a single string and then back into an array again? You're actually going to run into this in the real world. Sometimes you'll be dealing with APIs that don't have exactly the interface you need. And so even though internally the function might work with the original array, you're going to have to do some manipulation. So once I use the split function, that gives me an array of all the words in the single string. I then create a new string collection structure, and then I call the add range function on the collection to add the array of words that I just created. Then I can just use the count property, and the count property just tells me the number of words that are in the string collection. So that was simple enough. The next task was to find the longest word in the entire string. To do this, I loop over each word in the string collection structure and check to see if each word is longer than the previous word found. So I keep track of the longest word in these two variables, and then just calculate the longest one. And then at the end of that loop, I have the longest word here in my max word variable, and I just print it out. And then the final task was to print out the number of occurrences of each of the unique words in the string. And for that, I chose to use a dictionary structure. So I created a dictionary that maps strings to integers. And then what I do is I loop over each word
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=189)** in the collection and convert it to lowercase so that I don't miscount words due to capitalization. Each word in the string becomes a key into the dictionary and the integer of value that the key maps to becomes the count for that word. After that loop completes, I then just loop over all the keys in the dictionary and print out the count associated with each key. All right, so how does my code compare to yours? Remember, there's several different ways to solve any given challenge. So there's no right or wrong answer here. Take a look at my code, compare it to yours, and just learn from the similarities and differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (12)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=0)** - [Joe] Thanks so much for watching my course, and congratulations on finishing it. As you work more and more with C# code, you'll grow more comfortable with the data structure types we learned about in this course, and you'll gain experience in deciding which collection type is the best one to use for the particular problem that you're trying to solve. There's a lot more to learn about C# though, so I'd suggest browsing through some of my other C# related courses here in the library. You also might want to consider checking out some of the other programming language courses to see how the data structure types in those languages work and the kinds of options available. As always, you should also stay up to date on the latest .NET documentation so you can be aware of changes and improvements to the language. I hope to see you again soon in another one of my courses. Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (1)
> **Warnings:** be aware (1)
> **Speakers:** - [joe] (1)


## Instructor

- [Joe Marini](../../Instructors/Software%20Development/Joe%20Marini.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-applied-data-structures-2813283-1/codespaces)

## Skills Covered

- Data Structures
- C#

## Path Context

### In [C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)
← [C Sharp Algorithms](C%20Sharp%20Algorithms.md) | **2 of 6** | [Advanced C- Language Features](Advanced%20C-%20Language%20Features.md) →

## Appears In

- [C- Excellence- Architecting High-Performance Solutions](../../Paths/Software%20Development/Learning%20Paths/C-%20Excellence-%20Architecting%20High-Performance%20Solutions.md)

## Related Courses

_Courses sharing skills:_

- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Data Structures
- [Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md) — Data Structures
- [Python Data Structures- Stacks, Deques, and Queues](Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md) — Data Structures
- [Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md) — Data Structures
- [Learning C-](Learning%20C-.md) — C#

---

[↑ Back to top](#)