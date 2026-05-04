---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: java-advanced-concepts-for-high-performance-development
url: "https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development"
level: Advanced
updated: 1/3/2023
learners: 41649
skills:
  - Java Software Development
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-java-development-2515082"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGw3sFhiEecwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670989829357?e=2147483647&amp;v=beta&amp;t=i-0hI0dmXYyAU4vlQCsOVs6Y19zJ7dZvMKB8fzSL0co"
linkedin_topic: Data Science
learning_paths:
  - '[Advance Your Java Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Java%20Skills.md)'
next_courses:
  - '[Introduction to Docker for Java Developers](Introduction%20to%20Docker%20for%20Java%20Developers.md)'
path_nav: '[{"path":"Advance Your Java Skills","position":1,"total":4,"prev":null,"next":"Introduction to Docker for Java Developers"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/java-software-development
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Advanced%20Concepts%20For%20High%20Performance%20Development.md)

![Java Advanced Concepts For High Performance Development](https://media.licdn.com/dms/image/v2/C4E0DAQGw3sFhiEecwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670989829357?e=2147483647&amp;v=beta&amp;t=i-0hI0dmXYyAU4vlQCsOVs6Y19zJ7dZvMKB8fzSL0co)

# Java Advanced Concepts For High Performance Development

> You’re comfortable with the basics of writing in Java, but you want to level up your skills and be more productive. In this course, Bethan Palmer has exactly what you need, with topics including generics, multi-threading, inputs and outputs, and more. After explaining the differences between versions of Java, Bethan dives into generics in Java, advanced data structures, and functional programming.

> [LinkedIn Learning](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development) | Advanced | 42K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn advanced Java programming](#learn-advanced-java-programming)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Getting Started**](#1-getting-started) (1 videos)
  - [Which version of Java to use?](#which-version-of-java-to-use)
- [**2. Generics in Java**](#2-generics-in-java) (7 videos)
  - [Introduction to generics in Java](#introduction-to-generics-in-java)
  - [Generic methods in Java](#generic-methods-in-java)
  - [Bounded generics in Java](#bounded-generics-in-java)
  - [The Liskov substitution principle in Java](#the-liskov-substitution-principle-in-java)
  - [Using wildcards in generic programming](#using-wildcards-in-generic-programming)
  - [Challenge: Using generics](#challenge-using-generics)
  - [Solution: Using generics](#solution-using-generics)
- [**3. Advanced Data Structures**](#3-advanced-data-structures) (6 videos)
  - [Collections in Java](#collections-in-java)
  - [Using LinkedLists to structure data](#using-linkedlists-to-structure-data)
  - [Storing pairs with HashMaps](#storing-pairs-with-hashmaps)
  - [Using LinkedHashMaps](#using-linkedhashmaps)
  - [Challenge: Data structures](#challenge-data-structures)
  - [Solution: Data structures](#solution-data-structures)
- [**4. Functional Programming in Java**](#4-functional-programming-in-java) (7 videos)
  - [Functional Interfaces in Java](#functional-interfaces-in-java)
  - [Implementing lambdas in Java](#implementing-lambdas-in-java)
  - [Using method references in Java](#using-method-references-in-java)
  - [Understanding streams in Java](#understanding-streams-in-java)
  - [Using streams in Java](#using-streams-in-java)
  - [Challenge: Functional programming](#challenge-functional-programming)
  - [Solution: Functional programming](#solution-functional-programming)
- [**5. Concurrency in Java**](#5-concurrency-in-java) (7 videos)
  - [Introduction to concurrency in Java](#introduction-to-concurrency-in-java)
  - [The Thread class in Java](#the-thread-class-in-java)
  - [The Runnable interface in Java](#the-runnable-interface-in-java)
  - [Using the ExecutorService in Java](#using-the-executorservice-in-java)
  - [Synchronized methods in Java](#synchronized-methods-in-java)
  - [Challenge: Name](#challenge-name)
  - [Solution: Name](#solution-name)
- [**6. Input and Output**](#6-input-and-output) (6 videos)
  - [Understanding I/O in Java](#understanding-io-in-java)
  - [Reading from System.in with a Scanner](#reading-from-systemin-with-a-scanner)
  - [Reading files with BufferedReader](#reading-files-with-bufferedreader)
  - [Using try-with-resources with I/O](#using-try-with-resources-with-io)
  - [Challenge: Input and output](#challenge-input-and-output)
  - [Solution: Input and output](#solution-input-and-output)
- [**7. Working with Files and Directories**](#7-working-with-files-and-directories) (6 videos)
  - [Working with files in Java](#working-with-files-in-java)
  - [Creating a new file](#creating-a-new-file)
  - [Working with directories in Java](#working-with-directories-in-java)
  - [Copying files in Java](#copying-files-in-java)
  - [Challenge: Files and directories](#challenge-files-and-directories)
  - [Solution: Files and directories](#solution-files-and-directories)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn advanced Java programming](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/learn-advanced-java-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/learn-advanced-java-programming?u=76281980&t=0)** - [Bethan] If you're already familiar with [Java](../../Skills/Software%20Development/Java.md) and you want to become a better and more productive developer, then this course is for you. The best way to improve is to fully understand the key concepts and the more advanced features of the language. So in this course, I'll explain a range of advanced topics including generics, multithreading, inputs and outputs, and [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) and more. By the end of the course, you should have a good understanding of some of the most important features of the language. My name is Bethan Palmer, and I'm a Java developer and a member of the Java Champions. So join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course to learn how to master some of the more advanced topics in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [bethan] (1)

#### [What you should know](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you should know. You should already be familiar with writing code in [Java](../../Skills/Software%20Development/Java.md). I won't be explaining any basics in text, so if you're new to Java, I'd suggest watching the course, "Learning Java." If you're comfortable with the basics of writing Java code, it's time to open your favorite IDE. I'll be working in IntelliJ IDEA, but you can use whichever IDE you are most comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Env Vars:** ide (2), idea (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-exercise-files?u=76281980&t=0)** - [Instructor] Before we start the course, let's have a look at how you can get started with the code examples. The code for this course is available on [GitHub](../../Skills/Software%20Development/GitHub.md). So, first you'll need to go to the repository for this course. The next step is to clone the repository. So to do that, I'm going to click on the green button that says Code and I'm going to copy the URL that's inside the box. The next step is to open up your Terminal, if you're on Mac. or Command Prompt, if you're on [Windows](../../Glossary/Service/Windows.md). I'm on Mac, so I'm going to open up my Terminal. And the next step is to change directory to where you want to download the code. You can put this anywhere you like. I'm just going to put it on my desktop. So I'm going to say cd, which stands for change directory and then I'm going to type in Desktop and press Enter. Then the command to download the code is [Git](../../Skills/Software%20Development/Git.md) clone. So, I'm going to say git clone and then I'm going to paste that URL that's I just copied and press Enter. So, now I've downloaded the code and the next step is to open up your IDE. I'll be using IntelliJ. So, I'm going to open up IntelliJ and then I'm going to click on the Open button. Then I'm going to go to my desktop and I can see I've got my code there. And as this is a Maven project, it works a bit better in IntelliJ if you actually select the pom.xml file and then click Open. Then you can choose Open as Project and that will load up the Maven projects for you. Also note that this is a Maven project, but you don't actually need to download Maven to use this, because it uses a tool called Maven Wrapper
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-exercise-files?u=76281980&t=93)** which will download Maven for you. So, now I've got my code and I've got it open in my IDE. You'll see that there is a folder called Source and inside that there's a folder called Main. And inside Main there's one called [Java](../../Skills/Software%20Development/Java.md). Inside the Java folder, there is a package for each video in the course. So, for example, for 0201, there is a package called _02_01. Most of them also contain two subdirectories, one called Before which contains the state of the code at the start of the video, and one called End which contains the code at the end of the video. So, that's all you need to get started with the code for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Tools:** intellij (3), terminal (2), github (1), command prompt (1)
> **Definitions:** is a  (5), stands for (1)
> **Env Vars:** url (2), ide (2)
> **CLI Commands:** git (2), cd (1)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** download the (2)
> **Prerequisites:** before we start (1), you'll need (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Which version of Java to use?](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/which-version-of-java-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/which-version-of-java-to-use?u=76281980&t=0)** - [Instructor] In this course, I'll be using OpenJDK 17. To be able to use all the features in this course, you will need to have at least [Java](../../Skills/Software%20Development/Java.md) 8 installed, but feel free to use any later version as well. Choosing which Java version to use isn't completely straightforward. Java has a 6-month release cycle, but not all Java releases are the same. Some are known as long-term support releases and others are feature releases. Long-term support releases are supported by Oracle for years, whereas feature releases are only supported until the next release six months later. The current long-term support release is Java 17, and the next one will be Java 21 in September 2023. Long-term support releases are more likely to be used by development teams. There are now two types of JDK provided by Oracle. One is Oracle's commercial JDK and the other is their OpenJDK. These two different releases actually work the same and have all the same features so you could swap between them without having to make any changes to your code. However, you do have to pay to use the Oracle JDK in production. It's free for individual use, development, and testing, and it also comes with paid support. Oracle's OpenJDK is completely free and is open source. However, it doesn't come with support or updates to versions older than the current version. As well as the two Oracle JDKs, There are also lots of versions of both the commercial JDK and OpenJDK not provided by Oracle. Some popular versions of OpenJDK include Adoptium, Amazon Corretto, Red Hat, and several others. I'd recommending using any one of the OpenJDK versions for this course.
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/which-version-of-java-to-use?u=76281980&t=94)** I'll be using Adoptium, but it doesn't matter which one you decide to go with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6)
> **Env Vars:** jdk (4)
> **Versions:** java 8 (1), java 17 (1), java 21 (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Generics in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to generics in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-generics-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-generics-in-java?u=76281980&t=0)** - [Instructor] Generics make your code safer and clearer to read. You might have used them quite a lot already, maybe without even realizing. But understanding how they work and knowing some of the more advanced use cases, will help you write cleaner code. So to show why generics are needed let's have a look at an example. In this generics example class, I have a main method and inside the main method I'm creating a new array list called shapes and I'm then adding the string circle to that array list. So far this code works fine and I can also get that first element from the array list. So if I do system.out.println and then pass in shapes.gets and then pass in 0 to get that first element, that will get me that first string from the list. So to show it's working, let's run this now. So I'm going to click on the green arrow next to the main method and choose Run. And in the terminal, I can see it prints out the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) circle as expected. But what if I want to assign a variable to that first value from the list? So I'm going to add another new line and do String circle = shapes.gets and then pass in 0 to get that first element. And I can see that straightaway I get a compiler error. This is because the compiler doesn't know that this object is a string. So to make it work I need to cast it. So before the quarter shapes.gets in a pair of brackets I'm going to put the word string. And that tells the compiler that this object is a string. So this now compiles and will run fine. And it might not seem like a big deal
>
> **[1:31](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-generics-in-java?u=76281980&t=91)** having to cast it to a string here. But if you have a really big program where this happens lots of times and at different places in your code, it can become a big hassle. And it's also not very readable. It's also not very safe. So if I look at this line where I'm creating the new array list, it's not at all obvious that this list should contain strings. So someone else could come along later and add any different type that they'd like to this list. So let's give that a go. So I'm going to add another new line and I'm going to do shapes.ads. And instead of passing in a string I'm going to pass in a rectangle type object. So I'm going to do new Rectangle. So this compiles fine as well. And I can also create a new rectangle object and assign it to that second value in the list. So I'm going to do Rectangle rectangle equals shapes.get and then pass in 1 to get that second element. And again, I'll need to cast it. So before shapes.get in a pair of brackets, I'm going to put the type rectangle. So this list could contain all different types of objects and that makes it really difficult to work with. And it also means it's easy to get it wrong when you're casting the objects. For example, I could tell the compiler that actually instead of a rectangle, this is an integer. So if I change rectangle to integer, and cast it to an integer, this also compiles fine. Even though I know that I've added a rectangle object rather than an integer. I won't know there's anything wrong until I go to run this. So if I run it again, by clicking on this green arrow again, at this point I get a class cast exception
>
> **[3:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-generics-in-java?u=76281980&t=185)** because I'm saying it's an integer even though it's actually a rectangle. The solution to all of these problems is generics. So all I need to do is after the word list when I declare my list, is put a pair of angle brackets and inside the angle brackets I just need to put the type that I want this list to contain. So in this case, I want it to contain strings. So I'm going to put the word string. I'm also going to put a pair of angle brackets after the arrays on the right-hand side. But I don't need to put the type inside these ones because the compiler can infer from the left-hand side that this should contain strings. So now I do get a compiler error when I try and add my rectangle object. So to get this to work, I need to pass in a string. So I'm going to change this to a string with the word rectangle in it. And I can now get rid of all the places where I'm using my cast. So I'm going to get rid of the cast in front of shapes.get 0 and the caste integer in front of shapes.get 1. And I'm going to change this value from integer to string. So generics are a powerful parts of the [Java](../../Skills/Software%20Development/Java.md) language which make our codes safer and easier for us to write and also easier for other people to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (5), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** click on (1), go to (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generic methods in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/generic-methods-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/generic-methods-in-java?u=76281980&t=0)** - [Instructor] Generic methods are a special type of method that let us pass in different types of objects as arguments. This is best shown with an example. So in this example, I have a class called GenericMethods and inside the class I have a main method and inside the main method I have two arrays. The first one is an array of strings and that contains the words apple, banana, and pear. And then the second one is an array of integers and that contains the numbers 1, 5, and 7. So let's say I want to write a method that lets you pass in either of these arrays and converts that array to a list. I want my method to work with arrays containing any types of objects. So I could write two separate methods here. One for converting arrays of strings to lists of strings and another one for converting a array of integers to lists of integers. But using generics, I only need to write one method. So the first thing I need to do is to find my method. And as usual, the first thing I need to put is the modifier. So I'm going to make this a privates method for now. And I'm going to make it static so that I can call it inside my main method to show that it's working. So I want this method to take an array as an argument and return a list. But I don't want to be strict on the types of objects in the array or the types in the list that's returned. I just want them to be the same type in the array and the list. So to do this, I can put a pair of angle brackets and inside that I'm going to put the letter T. This can be any letter that you choose but the convention here is to put a capital T for type. Then I need the return type. So I want this to return a list containing objects of type T.
>
> **[1:32](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/generic-methods-in-java?u=76281980&t=92)** So I'm going to put list and then in angle brackets I'm going to put T. Next, I need the method name. So I'm going to call this one convertArrayToList. And I'm going to pass in an array which I want to be of my type T. So I'm going to put my capital T and then a pair of angle brackets, and I'll call this array. So now I just need the code inside the methods to actually convert the array to the list. So I'm going to do return Arrays.asList and then pass in my array. So this will return a list containing items of the same type as the types of objects in the array, whatever type that may be. So let's test this out with my two arrays in the main method. So I'm going to add another line and I'm going to create a new list of type string and I'll call this wordsList. And then I'm going to do equals and then I'm going to call my new method. So I'm going to do convertArrayToList and pass in the words array. Then similarly with the numbers one, I'm going to do a list of type integer and I'll call it numbersList. And then I'm going to do equals convertArrayToList and pass in my numbers array. Now just to show it's working I'm going to print out both the lists. So I'm going to do System.out.println and pass in the wordsList. And then I'm going to do System.out.println and pass in the numbersList. So if I run this now
>
> **[3:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/generic-methods-in-java?u=76281980&t=185)** by clicking on the green arrow next to the main method and selecting run. I can see that I get my two lists. One containing the strings, apple, banana, and pear. And the other one containing the numbers 1, 5, and 7. So that's how you can use generics to write methods that can take parameters of all different types.

> [!info]- Semantic Content
>
> **Code Identifiers:** convertarraytolist (3), wordslist (2), numberslist (2), aslist (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### [Bounded generics in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/bounded-generics-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/bounded-generics-in-java?u=76281980&t=0)** - [Instructor] Generic methods allow us to be flexible about the types that we parse in as arguments. But sometimes you might want a middle ground between flexibility and strictness. So in the previous video, I showed how generics can be used to let the call and order method parse in different types. So I wrote this convert array to list method, which allows people to parse in an array containing any type of objects, and it returns a list containing the same objects of the same type. But I might want to be a little bit stricter. For example, I might want to only let people parse in numbers, and not allow people to parse in arrays of strings, for example. So the solution to this problem is, bounded generics. I can specify that only classes that extend another specific class can be used as the type. So where I've got the T in angle brackets in my method, I can add after the T, extends number. And that means that people will only be allowed to parse in arrays containing classes that extend the number class. So for example, integer and double extend number. So I can now see that I've got a compile-time error when I try and parse in my array of strings. So let's change this array to an array of doubles. So I'm going to change this to an array of doubles, and I'll change the name of it to doubles as well. And instead of passing in three strings, I'll pass in three double values. So I'll pass in just some random numbers. So 2.0, 3.5, and 14.7. And instead of creating a list of strings, I'm going to create a list of doubles. And then I can parse in my array of doubles,
>
> **[1:32](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/bounded-generics-in-java?u=76281980&t=92)** and that will work fine. And if I run this just to check, I can see in the console that I have my list of doubles and my list of numbers.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (1), 3.5 (1), 14.7 (1)
> **Analogies:** for example (3)
> **Cross-References:** previous video (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [The Liskov substitution principle in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-liskov-substitution-principle-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-liskov-substitution-principle-in-java?u=76281980&t=0)** - [Instructor] The list of substitution principle helps you write more flexible and maintainable code. The name makes it sound like it's going to be something really complicated, but it's not as bad as it sounds. It just means that a subtype should behave in the same way as its supertype. So let's look at an example. For this chapter, I have some code that's a simple representation of an online clothing store where people can order different items of clothing. So first, I have an abstract class called ClothingItem and this class has two abstracts methods in it, getPrice and getName. Then there are two classes that extends this abstract class, so one of them is the ShirtItem class and in this class the getPrice method returns 10 and the getName method returns the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Shirts. Then there's one called JacketItem and in this class the getPrice method returns 25 and the getName method returns the word Jacket. Finally, there's a ClothingSite class. In here, I'm handling purchases people make on the site, so there's a method called checkoutItem, and in this method I'm printing out a sentence where it prints out the name of the item, so using the item.getName method, and then the price using the item.getPrice method. So let's have a go at using this method. I'm going to create a main method in this class so that I can call my checkoutItem method. So I'm going to do public static void main, and inside this method I'm going to create a ShirtItem object, so I'm going to do ShirtItem shirtItem = new ShirtItem.
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-liskov-substitution-principle-in-java?u=76281980&t=93)** Now, I'm going to call the CheckoutItem method. So I'm going to say checkoutItem and then I'm going to pass in my shirtItem. So I'm just going to run this now to check it works, and I can see in the terminal that is printed out, item purchased Shirt, price 10. Now let's say the customer also wants to buy a jacket to go with the shirt. So I'm going to add a couple of new lines and I'm going to say JacketItem jacketItem = new JacketItem. And then I'm going to call the checkoutItem method again. And this time I'm going to pass in the jacketItem. So if I run this again I can see that I get item purchased Shirt, price 10, and then item purchased Jacket, price 25. So that's the substitution principle. I can pass in different subtypes of item to this method and I can be sure that the code I'm using to call it won't need to change and everything will still work the same. The getName and the getPrice methods will take the same arguments and they'll return the same type of result no matter what subtype I pass in. And because shirtItem and jacketItem are both subtypes of item, I can also create a collection of type clothingItem and put either of them in there. So in my main method, I'm going to create a list that contains clothingItem types and I'm going to call the list clothingItems. And then I'm going to do equals new array list. And then I'm going to add both my items to the list. So I'm going to do clothingItems.add and pass in the shirtItem.
>
> **[3:06](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-liskov-substitution-principle-in-java?u=76281980&t=186)** And then I'm going to do clothingItems.add and pass in the jacketItem. So now I could also have a method where I pass in this list of items and then iterate over it instead of having to call the checkoutItem method on each one. So I'm going to add a new method. So at the bottom of my class I'm going to create a new static method so that I can call it in my main method. And it's going to have a void return type again. And I'm going to call this method checkoutAllItems. And I'm going to pass in a list of type clothingItem, which I'll call clothingItems. And now I can iterate over that list. So I'm going to do for ClothingItem clothingItem in clothingItems. And then for each one I'm going to call the checkoutItem method. So I'm going to call checkoutItem and pass in clothingItem. So back in my main method I can call this new method. So I'm going to do checkoutAllItems and pass in the clothingItems list. And if I run this now I should see everything printed out twice, because I'm calling the checkoutItem method on each item. And then I'm calling the checkoutAllItems on the list containing the two items. So if I run this now, I can see that everything gets printed out twice as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Code Identifiers:** checkoutitem (8), clothingitems (6), getprice (5), getname (5), clothingitem (5)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Using wildcards in generic programming](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-wildcards-in-generic-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-wildcards-in-generic-programming?u=76281980&t=0)** - [Instructor] In the previous video, we saw how the substitution principle can help us write clean code, but it's also important to know when the principle doesn't apply. So, in this ClothingSite class, I've got my main method and inside that I'm creating two objects, a ShirtItem and a JacketItem. And ShirtItem and JacketItem both extends the ClothingItem class. And then I'm creating an array list containing ClothingItems and I'm adding the shirtItem and the jacketItem to that list. And then finally, I'm calling the checkoutAllItems method and I'm passing in my list of clothingItems. And in the checkoutAllItems method I'm iterating over that list. And for each one, I'm checking out the item. But let's say, I want to create a list that just contains ShirtItems and not JacketItems. So, I'm going to change this JacketItem to another ShirtItem, and I'll call it shirtItem2. And on the right hand side, I'll change it to new ShirtItem. And I need to make sure I'm passing in shirtItem2 to the list of clothingItems. Then I'm going to change the type of the list from ClothingItem to shirtItem, because this only contains the subtype ShirtItem. So, when I do this, I see I get a compiler error, when I call the checkoutAllItems method and pass in clothingItems. It seems reasonable to expect that I can call this method and pass in my list of shirtItems, because shirtItem is a subtype of clothingItems. But actually, a list of ShirtItems isn't a subtype of a list of clothingItems, even though shirtItem is a subtype
>
> **[1:32](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-wildcards-in-generic-programming?u=76281980&t=92)** of clothingItem. So, one thing I could do is, I could write another method that takes a list of ShirtItems as an argument instead of a list of clothingItems. But that seems like overkill to write a whole new method just to handle list of ShirtItems. If I wanted to iterate over a list of JacketItems, I'd have to write another whole new method and I'd have to create another version of the method for any new subtypes of clothingItem I might want to add in the future. To fix this, I can instead use wild cards. So, in my checkoutAllItems method declaration inside the brackets, where I've got List clothingItem, before ClothingItem, I'm going to put a question mark and then the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) extends and then ClothingItem. So, this means I can now pass in a list of clothingItems, or a list containing any subtype of ClothingItem. And I can see that my compiler error has gone now. And if I run this just to make sure, I can see that this works as expected and it prints out the purchases of the two shirtItems. So, this syntax with question mark followed by extends is known as a wild card and that's how you can use wild cards in [Java](../../Skills/Software%20Development/Java.md) to make your code more flexible and save you writing a lot of unnecessary boilerplate code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** clothingitems (7), shirtitem (4), checkoutallitems (4), clothingitem (3), shirtitem2 (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** previous video (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Using generics](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-using-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-using-generics?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-using-generics?u=76281980&t=5)** - Now it's your turn to have a go at using generics for some real code examples. In this chapter, there's a short exercise for you to have a go at. So in the _02_06 folder, you'll see that there are a few classes, which represents an app for managing train tickets. So the first class is an abstract class called Ticket, and this has a single abstract method in it called getPrice. Then there are two classes which extend this class. So one of them is the AdultTicket class, and in this one the getPrice method returns 10. And also overrides the toString method and prints out the phrase "Adult ticket". There's also a ChildTicket class, so in this one the getPrice method returns five, and there's a toString method, which returns the phrase "Child ticket". Finally, there's the TicketMachine class, which is where you'll be writing the code for this exercise. So you'll see that there's a main method in here, and down the bottom, you'll see that there are two methods. One of them is called flattenList, and the other one is called getTotalPrice. The flattenList method takes a list of lists and turns it into one single list. At the moment this only works with a list of strings. You can see it's used up in the main method where we're creating a list of destinations, and then we're calling the flattenedList method and passing in the destinations list. You should change this flattenedList method to be a generic method, so that you can pass in lists of lists of any type. You can check it's worked by uncommenting lines 25 and 26. If you uncomment them at the moments, you'll see that the code doesn't compile, but once you've changed that to a generic method, these two lines should work.
>
> **[1:38](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-using-generics?u=76281980&t=98)** The second method is the getTotalPrice method. This takes a list of ticket objects and calculates the total price of all the tickets. You should change this method to use wild cards, so that you can pass in any class that's a subclass of tickets. So for example, AdultTicket or ChildTicket. You can check this one works by uncommenting the last three lines. So line 28, line 30, and line 31. Again, at the moment you'll get a compile time error, but when you've updated the method to use wildcards this should compile, and you'll be able to run this main method with no errors. Good luck and if you have any issues, I'll be going through the solution to this exercise in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** getprice (3), tostring (2), flattenlist (2), gettotalprice (2), flattenedlist (2)
> **Definitions:** is called (2), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Using generics](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-using-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-using-generics?u=76281980&t=0)** - [Instructor] So let's have a look at the solution for the exercise for chapter two. So the first thing I'm going to do is I'm going to uncomment the lines 25 and 26 just to see that they don't compile at the moment. This is because the flattenList method is expecting me to pass in a list of list of strings, whereas I'm passing in a list of list of ticket types. So I'm going to make this flattenList method a generic method. So if I scroll down to the flattenList method, the first thing I'm going to do is before the type, I'm going to put a pair of angle brackets. And inside that, I'm going to put a capital T to represent the type. And instead of returning a list of strings, I'm going to return a list of type T. And then instead of passing in a list of list of strings, I'm going to pass in a list of list of T types. Then inside the method itself, instead of having a list of strings, I'm going to create a list of type T. So this is now a generic method. And if I scroll up, I can see that I no longer have a compiler error on line 25. So the next part is to change the getTotalPrice method. So instead of passing in a list of tickets, I want to be able to pass in either a list of tickets or a list of any subtype of tickets. So in front of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) ticket, in the angle brackets, I'm going to put to question mark and then extends. And now if I uncomment the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the lines, I can see that I don't have any compiler errors here as well. So if I just give this a quick run
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-using-generics?u=76281980&t=93)** by clicking on the green arrow and choosing run, I can see that everything compiles and works fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** flattenlist (3), gettotalprice (1)
> **UI Navigation:** scroll down (1), scroll up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Advanced Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Collections in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/collections-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/collections-in-java?u=76281980&t=0)** - [Instructor] Collections are a fundamental part of all [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) languages, and [Java](../../Skills/Software%20Development/Java.md)'s no different. Most programs you write will contain some kind of collection, so it's useful to have a good understanding of how they work. A collection is an object that contains a group of other objects. Most people are familiar with the most common [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), like Arrays and ArrayLists, but there are, of course, many, many others, too many for me to cover here. So in this chapter, I'm going to do some demos of how to use some particularly useful ones, including LinkedLists, HashMaps, and LinkedHashMaps. Before we start looking at code, it's useful to understand how the collections framework works in Java. The collections framework is a set of interfaces that represent different types of collection. There are two main parts to the collections framework. One part is collections and one part is maps. One real life example equivalent of a collection is something like a shopping list. In some collections, order is important, and in others, it's not. And in some collections, duplicates are allowed, and in others, they're not. A map, on the other hand, is a collection of key value pairs. If you think about the grocery store and the stock in it, the store needs a way to track each individual item so they know what's been sold. In this case, a big list isn't really useful, so they use barcodes. Each unique barcode maps to a different grocery item. So say, for example, you buy some oranges at the store. The barcode on the bag of oranges is like the key in a map, and the bag of oranges itself is the value associated with that key. In Java, the collections framework
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/collections-in-java?u=76281980&t=93)** extends the Iterable interface. There are no concrete classes that implement collection, but there are another set of interfaces underneath it. So for example, Sets, List, and Queue. Under those, there are some concrete implementations. For example, HashSets, LinkedList, and Deque. These are just a few examples. There are lots of other concrete classes that extend these interfaces. In the map section, map is the topmost interface. There are several other interfaces that implement map. For example, ConcurrentMap and SortedMap. And there are several concrete classes that implement each of these. For example, ConcurrentHashMap and TreeMap. HashMap is a subclass of abstract HashMap, which is an abstract class that extends map. Again, these are just a few examples of maps, there are many others not shown here. And there's no need to memorize all these structures. It's just useful to see the difference between collection and map. So let's have a look at some real [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) examples where some of these collections are used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** for example (5)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Using LinkedLists to structure data](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedlists-to-structure-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedlists-to-structure-data?u=76281980&t=0)** - First up, let's have a look at linked lists. LinkedList use more memory than ArrayList, so you should be a bit careful about when you use them. They might be a good choice if you need to insert or remove lots of elements to the list without needing to retrieve them very often, as this is normally slightly faster with a LinkedList. So to create a linked list, inside my class called linked list example, I've got a main method and inside here. I'm going to say LinkedList. And then in a pair of angle brackets, I'm going to put the type of elements that I want in my list. So this is going to be a list of strings. So I'm going to put string in the angle brackets and I'll call this list. Then I can do equals new LinkedList. To add items to the list, I can use a method called add. So I'm going to do list.add and then I can pass in my item. So I'm just going to pass in a string that says, "first item", and I'll add one more item. So I'm going to do list.add, and then I'm going to pass in "second item". Now I'm just going to print out the list to check that it's worked. So I'm going to have a System.out.println and pass in my list variable. So if I run this now, I can see in the console that I've got my two items, "first item" and "second item" in my list. LinkedList also has a couple of handy methods to get the first elements and the last elements from the list. So I can do System.out.println, and I can pass in list.getFirst to get the first item. And then similarly, to get the last one, I can do System.out.println, and I can pass in list.getLast. So if I run this again,
>
> **[1:37](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedlists-to-structure-data?u=76281980&t=97)** I can see I have my list and then I have my "first item", which is the first one in the list, and the "second item", which is the last one. There are also a couple of different methods to remove items from the list. So to remove the first item, what I can do is, I can do System.out.println and pass in list.poll. So it removes the item and also returns it. So it will actually print it out. And then to show that it's been removed I'll print the list out again. So I'll have another System.out.println and pass in list. So I'm going to run this again, and I can see that it prints out the "first item". And then when it prints out the list it actually removed that item. So now it's only got "second item" in the list. There's also a method called pop that does something very similar and also removes and returns the first element. So if I add another line and I say System.out.println and pass in list.pop, and then print out my list again. If I rerun this now, I can see that it now returns the "second item", and it also removes it, so now I'm left with an empty list. To see the difference between poll and pop, let's see what happens when we call these methods on an empty list. So I'll start with poll. So I'm going to have System.out.println and pass in list.poll. And then I'll see what happens when I call the pop method. So I'm going to do System.out.println and pass in list.pop. So if I run this again, when I run list.poll,
>
> **[3:10](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedlists-to-structure-data?u=76281980&t=190)** I actually get a null when I call that on an empty list. But when I call list.pop I actually get a no such element exception. So that's the main difference between poll and pop.

> [!info]- Semantic Content
>
> **Code Identifiers:** getfirst (1), getlast (1)
> **Speakers:** - first (1)

#### [Storing pairs with HashMaps](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/storing-pairs-with-hashmaps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/storing-pairs-with-hashmaps?u=76281980&t=0)** - [Instructor] Sometimes you'll need a data structure that can store key-value pairs. Probably the most common way to do this in [Java](../../Skills/Software%20Development/Java.md) is with a HashMap. So in this example I have a class called HashmapExample and at the moment this just has an empty main method inside it. So to create a HashMap, I'm going to put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Hashmap and IntelliJ has added the import statement at the top for me. And then inside the pair of angle brackets, I need to put two types. The first type is going to be the type of the key and the second type is the type of the value associated with that key. So let's say for example, I want to create a HashMap that represents a shopping basket in a grocery store. So the key is going to be the name of the product being scanned and the value is going to be the number of times that item has been scanned. So for example, if someone scans one apple, the key will be apple and the value will be one. Then if they scan another apple, the key will still be apple but the value will be incremented to two. So in this case, the key is going to be a string to represent the name of the product, and then the value is going to be an integer to represent how many times it's been scanned. So I'll call this basket, so I can do basket equals new HashMap. So the method to add items to a HashMap is called put. So let's say, for example, I want to add an apple to my basket. So I can do basket.put and then I'm going to pass in the string apple and then the value associated with it is going to be one. There's also a handy method to get the value associated with a key. So for example, if I want to get the value associated with apple, I can do basket.get and pass in apple.
>
> **[1:36](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/storing-pairs-with-hashmaps?u=76281980&t=96)** So I'm going to do system.out.println and I'm going to pass in basket.get and then pass in the key apple. So this should return the value one. Let's run this now and in the terminal, I can see that I've got one as expected. Let's see what happens if we update an existing key in a map. So this time, I'm going to do basket.put again and I'm going to pass in Apple again but this time I'm going to pass in the value two. Then I'm going to copy and paste this line where I do system.out.println and pass in basket.get and pass in apple to get the value associated with the key apple. And if I run this again, I can see that this time I get the value two. So keys inside HashMaps are unique. So the second time I did basket.put and passed in apple, it didn't create a new key for apple, it just updated the existing one. Another useful method is the contains key method, which I can use to check if a key is already being used inside the HashMap. So I'm going to do system.out.println and this time I'm going to pass in basket.containsKey and then pass in the key apple. So this should return true because I know that my HashMap has a key called apple in it. So if I run this again, I can see that I get the value true. One more method that I've personally found really useful when working with HashMaps is a method called merge. So let's say for my shopping basket application, I want to increment the value
>
> **[3:08](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/storing-pairs-with-hashmaps?u=76281980&t=188)** of a product each time it's scanned rather than setting it manually. So to do that, I'd have to check if the key is already used inside the basket using the containsKey method. Then if it is, I would need to get the current value using the get method and then increment that value by one. And then I would have to call the put method again and pass in the key and then the new value again. And then if the key isn't already inside the basket, I would have to do another put and then pass in one. So the merge method actually handles all of this logic for us really simply. If I do basket.merge, this method takes three arguments. So the first one is the key and that's going to be the name of the product in this case. So I can pass in apple. The second argument is what I want the value to be if the key isn't already inside the map. So if it's the first time apple has been scanned, I want it to be one. Then the third argument is a remapping function and the result of that function is used if the product already exists. So here to increment the value by one, I can do integer followed by two colons, followed by sum. So this whole line is saying if apple is already inside the map, increment the value by one. If it's not, then add a new key for apple and set the value to one. So let's also try this method with a key that we know isn't already inside the map. So I'm going to do basket.merge and this time I'm going to pass in orange. And then I want the value to be one
>
> **[4:42](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/storing-pairs-with-hashmaps?u=76281980&t=282)** if there are no oranges in the basket. And then I'm going to do integer::sum to say that if there are already oranges in the basket, add one to the value. So for the apple one, the value should now be three because I'm adding one to the two that are already in the basket. And for the orange one, the value should be one. So I'm going to copy this line again where I print out the value for apple and I'll also do the same for orange. So if I run this again, I can see that for this one I get three for apple and I get one for orange.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (2), is called (1)
> **Best Practices:** the key is (3)
> **Code Identifiers:** containskey (2)
> **Tools:** intellij (1), terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using LinkedHashMaps](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedhashmaps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedhashmaps?u=76281980&t=0)** - In the previous video in this chapter, we looked at HashMaps and LinkedLists. As you might be able to guess, LinkedHashMaps are sort of a combination of those two things. So in the previous video, I used an example of a store where you can scan items, and the item is added to a HashMap as the key, and the value is the number of times it's been scanned. So similarly here I've got a HashMap called basket and I'm adding two apples, one orange and three bananas to the HashMap. And then I'm calling a method called forEach on the HashMap, and this prints out the key and the value for each of the items in the basket. I'll explain more about how this lambda index works in the next chapter. So if I run this now, I can see that I get my three elements in the baskets, but they're in a completely random order. So I put apple, orange, and banana, but when I print them out, I get orange first, then banana, and then apple. So this shows that HashMaps don't maintain any order, it's just completely random. But in some situations you might want to keep some order in your HashMap. And the way to do that is to use a LinkedHashmap rather than a HashMap. So I'm going to replace my HashMap with a LinkedHashmap, and I'll do the same on the right hand side of the assignments. IntelliJ has added the LinkedHashmap import statement for me, as I'm going to get rid of this old HashMap import statements that I'm not using anymore. So if I run this again now, I can see that this time, I get apple and then orange and banana. So by default, the order for LinkedHashmap is the order
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-linkedhashmaps?u=76281980&t=93)** that the elements were inserted into the map. But it's also possible to order them by when they were last accessed. So to do this, I need to use a different constructor for the LinkedHashmap. So I need to pass in three arguments. The first one is going to be the initial capacity which means how many items I can put in the map when it's first created before it gets resized. So I'll give this 10 for now, which is plenty of space for what I need. The second one is called the load factor which is how full it can get before it's made bigger. So I'm going to put 0.75f, which is the default value anyway. And the third argument is the one we're actually interested in here, which is whether to use access order, so I'll set that to true. So this means that it will return the least recently accessed element first. So if I run this again, I actually get everything back in the same order because apple was the least recently accessed. But if I access one of the elements after adding it, it will change the order. So if I add another line where I say basket.get and pass in apple, this should put apple to the bottom of the list because it's now the most recently accessed. So if I rerun this, I can see that apple is now at the bottom of the list. It's also worth noting that the implementation of LinkedHashmap is based on both LinkedList and HashMap, but the interface is only based on HashMap. So if you wanted to use some of LinkedList methods, like getFirst and getLast, these aren't actually available for LinkedHashmap.

> [!info]- Semantic Content
>
> **Code Identifiers:** foreach (1), getfirst (1), getlast (1)
> **Cross-References:** previous video (2), in the next (1)
> **Definitions:** is called (1), means that (1)
> **Tools:** intellij (1)
> **Speakers:** - in (1)

#### [Challenge: Data structures](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-data-structures?u=76281980&t=0)** - [Narrator] The exercise for this chapter is going to be to implement a basing voting system for people voting for contestants, for example, on a TV show. So you'll see there's a class in here called VotingSystem. And in the codes there are some comments that explain what you should do to complete the exercise. So first of all, you should create a field which will be a LinkedHashMap and this will store the name of the contestant as the key and the number of the votes as the value. Then you should implement the vote method so that when a contestant name is passed in, the number of votes is incremented by one. And finally, you should update the getVotes method to return the map that you created at the top rather than a new empty map. So to check that your code is working, there are some unit tests that you can run. So inside the folder, test, [Java](../../Skills/Software%20Development/Java.md), for example, in _03_05, there's a class called VotingSystemTest. The first test adds some votes to the voting system by calling the vote method a few times. Then there are three assertEquals methods. These check that the number of votes is what we expect. So for example, contestant one is voted for three times so that should return the value three. The second test is to check that the insertion order is correct. So the vote method is called to like the test above. And then there's another call to assertEquals. And inside here we've got votingSystem.getVotes.keySet.iterator.next. And what this really long chain of methods does
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-data-structures?u=76281980&t=94)** is it's used to get the first key in the hash map. A linked hash map should return the first key that was inserted. So in this case, it should return contestant one because contestant one was the first one that was put into the map. So in IntelliJ you can run these tests either individually by clicking on the green arrow next to the test and choosing run. Or you can run all of the tests in the class by clicking on the green arrow next to votingSystemTest at the top and choosing run. Whichever IDE you use there will be some option to run the tests from within the IDE. And you'll see at the moment that all of these tests fail at the moment. But once you've finished writing the code in the class called votingSystem, you should be able to run these tests again and they should pass. So it's actually also really good practice for [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). If you do get stuck on any of this, don't worry. Feel free to revisit the previous videos and I'll also be talking through the complete solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **Code Identifiers:** getvotes (2), assertequals (2), votingsystem (2), keyset (1), votingsystemtest (1)
> **Analogies:** for example (3)
> **Env Vars:** ide (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Definitions:** is called (1)
> **Best Practices:** good practice (1)

#### [Solution: Data structures](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-data-structures?u=76281980&t=0)** (upbeat synth music) - [Instructor] So let's go through the solution for the voting system exercise. The first step is to create a linked hash map field. So under this comment, I'm going to create a private field and I'm going to say linked hash map. And then inside the angle brackets I put my two types. So the type of the key is going to be a string for the contestant name, and then the value is going to be an integer for the number of votes. So I'll call this votes, but you could have called this variable whatever you'd like. And then I'll do equals new linked hash map. So I've got my hash map, and the next part is to implement the votes method. So this says implement this method so that a new contestant is added to the map if it is not already there. If it is already there, increments the value by one. So I can actually use the merge method to do this. So I'm going to do votes dot merge, and then I'm going to pass in the name of the contestant as the key. Then if it's not already there, I want the value to be one. And if it is already there, I want to increment the value by one. So I can do integer colon colon sum. You could have had an if statement here where you check if the key is already inside the map, and if it is, then you increment the value by one. And if it's not, then you add the key with the value as one. That would also work completely fine. And the final part is that this method, get votes, should return my linked hash map rather than creating a new one. So I'm going to get rid of new linked hash map, and I'm going to replace this with votes,
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-data-structures?u=76281980&t=93)** which is the hash map I created at the top of this class. So let's run the tests and see if this works now. So I'm going to go down to 0306 before and go to voting system test. And I'm going to run all of the tests together by clicking on the green arrow next to the class and choosing run voting system test. And I can see that this has made all my tests go green now.

> [!info]- Semantic Content
>
> **Best Practices:** the key is (2)
> **Non-Speech:** (upbeat synth music) (1), (music ends) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Functional Programming in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Functional Interfaces in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/functional-interfaces-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/functional-interfaces-in-java?u=76281980&t=0)** - [Instructor] Lambdas and streams allow you to write neat, concise code. Since they were introduced in [Java](../../Skills/Software%20Development/Java.md) 8, they've become really widely used, so it's useful and important to understand this functional style of programming. Lambdas are a shorthand for functional interfaces, so we're going to start with those. So to create my functional interface, I'm going to write click on my before package and I'm going to go to New, Java Class, and I'm going to call this Greeting. It's actually an option to select Interface in this menu, So I'll choose that and press Enter. So now I've got my interface and I'm also going to add an annotation at the top that says @FunctionalInterface. This makes it clear to anyone coming to this interface that I should only have one method. In fact, you can see that it won't compile unless there's a single abstract method here. So I'm going to add that now. It's going to have a void return type and it's going to be called printMessage. I don't need to explicitly say that it's abstract, because all interface methods are abstract. So that's what a functional interface is, an interface with one single method. So I'm going to go ahead and implement this interface now. There's actually a handy shortcut in IntelliJ for this, so on Mac, I can do Option + Enter and I can select Implement Interface. I'm going to call this one HelloWorldGreeting. And if I click OK, it then also gives me the option to implement the print message method, so I'll select that and choose OK. So I've got the body of my print message method, and inside that I'm going to have a system.out.println, and I'm going to pass in the message Hello World.
>
> **[1:37](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/functional-interfaces-in-java?u=76281980&t=97)** So I've got my concrete implementation now, and now I just need somewhere to run it. So I'm going to create one more class in the before package. So I'm going to select New, Java Class, and I'll call this Main. And inside here, I'll have a public static void main method. And I'm going to create a variable for my Hello World greeting. So I'll say, HelloWorldGreeting, helloWorldGreeting = new HelloWorldGreeting. And now I can call my method, so I can do helloWorldGreeting.printMessage, and that should print out Hello World. So if I run this now, in the console, I get Hello World. Now, let's say I want to have a different implementation where instead of printing out Hello World, I print out Good Morning. So to do that I need to create another concrete implementation of my interface. So I'm going to go back to Greeting and use the shortcut again to Implement Interface. And I'm going to call this one GoodMorningGreeting. And I'll let it implement the print message method for me again. And this time inside the print message method, I'm going to have System.out.println, and I'm going to pass in the message Good Morning. So back in my main class, I'm going to create a GoodMorningGreeting called goodMorningGreeting. And I can say = new GoodMorningGreeting. Then I can do goodMorningGreeting.printMessage, and this one should print out Good Morning. So if I run this again, I can see I get Hello World, and then Good Morning.
>
> **[3:13](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/functional-interfaces-in-java?u=76281980&t=193)** So you've probably noticed that this is quite a lot of code and that doesn't really do very much. I've had to create an interface plus two new classes, and every time I want to return some other message instead of Hello World or Good Morning, I'd have to create a whole new implementation. And then in the main class, I'd need to create a new variable for it and call the print message method each time. So in the next video, we'll see how we can get rid of lots of this code, but keep the same functionality by using lambdas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **Code Identifiers:** printmessage (3), helloworldgreeting (2), goodmorninggreeting (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** click on (1), go to (1)
> **Versions:** java 8 (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Implementing lambdas in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/implementing-lambdas-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/implementing-lambdas-in-java?u=76281980&t=0)** - Now that we've seen how functional interfaces work, let's see how we can replace a lot of the boiler plate code by using landers instead. So, so far I've got two implementations of my greeting interface. One called Hello World Greeting, and one called Good Morning Greeting. So, let's say I want to add a third one that prints out good afternoon. If I did that the same way as the others, I'd need to create a new class called Good Afternoon Greeting. But instead I'm going to do this using a lander. So, I'm going to add a new variable in my method, and it's going to be a type greeting, which is the interface name, and I'm going to call this one Good Afternoon Greeting. Then after the equal sign, I'm going to write something which is called an anonymous function. Basically, I'm going to implement the print message method, but using a special syntax. So the first thing I put after the equal sign is a pair of brackets. If I needed to pass in arguments to this print message method they would go inside these brackets, but this method doesn't take any arguments, so I can leave these brackets empty. Then after the brackets, I'm going to put an arrow, which I can do by typing a dash, and then a right angle bracket. And after the arrow, I basically put the body of the method. So this is the same as what I'd put inside the method, if I was implementing the full thing. So I'm going to do system dot out dot printer ln, and pass in the message, Good afternoon. Now I can call the print message method on my variable in the same way that I have with the others. So I'm going to do good afternoon greeting dot print message. And if I run this now, I can see that I get my Good afternoon message
>
> **[1:35](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/implementing-lambdas-in-java?u=76281980&t=95)** at the bottom in the console. So I'm going to use the lander star syntax for my other implementations as well. So I'm going to copy this, and instead of having new good morning greeting, I'm going to paste this here, and change the message to Good Morning. And the type just needs to be greeting. And similarly, with the Hello World greeting one, I'm going to change the new Hello world greeting to use my lander syntax. And I'm going to replace the message again this time with Hello World. And again, the type needs to be greeting for the interface. So if I run this again, I can see that this still works the same as before, but with much less code. And I can actually get rid of these two classes now. So I'm going to delete the hello World greeting class, and the Good Morning Greeting class. So you can see how using landers is a powerful way of making your code more concise.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Speakers:** - now (1)

#### [Using method references in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-method-references-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-method-references-in-java?u=76281980&t=0)** - [Instructor] Another feature that was introduced in [Java](../../Skills/Software%20Development/Java.md) eight is method references. These are another type of lambda expression and they're another way of making your code more concise. There are actually four different types of method references. One of the types is used when you're calling a static method. So let's have a look at that type first. In this example I have a class called number utils and inside here I have a single static method called even or odd. This method takes an INT as an argument and it does a calculation's work out if the number is even or odd. If it's even, it prints out a message saying that the number is even, and if not it prints out a message saying that the number is odd. So I've also got a main class in here where I've got a list containing the numbers one to seven. So let's say I want to iterate over this list and for each number I want to call the even or odd static method from the number utils class. So to do this, I'm going to use another very useful method which was introduced in Java eight called forEach, which lets you iterate over a collection. So I'm going to do numbers dots forEach and to use this method, I need to pass in something called a consumer. So if I hover over the brackets and I click on consumer IntelliJ gives me some of the Java doc for this class. So the first thing I see is I see that this is a functional interface. And it says that it represents an operation that accepts a single input argument and returns no results. So in the previous video I looked at how we can implement a functional interface with the lander. So I'm going to do that here inside the forEach method.
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-method-references-in-java?u=76281980&t=94)** So first I have a pair of brackets where I pass in any arguments. This does take an argument and in this case it's going to be the item that I'm iterating over. So I'm going to call it number. Note that I don't need to put the type here because this will be inferred by the compiler. Then I have my arrow so a dash and then a right angle bracket. And then I have the method body. So here I'm going to call the number utils method even or odd and pass in the number. So I'm going to do number utils dot even or odd and pass in number. So this code will iterate over the numbers list and for each one print out if it's even or odd. So if I run this now, I can see down in the terminal that I get, one is odd two is even, three is odd, and so on. However, we can actually shorten this lambda by using a method reference instead. All this lambda is a actually doing is it's just calling another method. This even or odd, a static method. So I can shorten this by actually getting rid of all of the lambda syntax. So I'm going to get rid of the number in brackets and the arrow. And I'm going to get rid of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) number in brackets so that I'm just left with number util dots even or odd. And I'm going to replace the dots with two colons. So this is a shorter way of writing the exact same functionality. And if I run this again, I can see that I still get the same outputs as before. So that's how method references can help you write even more concise code while still keeping it readable. Here we're just left with the actual method being called on each iteration
>
> **[3:07](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-method-references-in-java?u=76281980&t=187)** without the slightly more confusing lambda syntax. So here I was calling the static method even or odd but you can also use this method reference syntax when calling an instance method of an object or the constructor of an object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** foreach (3)
> **Definitions:** is a  (3)
> **Tools:** intellij (1), terminal (1)
> **Env Vars:** int (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)

#### [Understanding streams in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/understanding-streams-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/understanding-streams-in-java?u=76281980&t=0)** - [Instructor] Streams provide a powerful way to work with sequences of elements in [Java](../../Skills/Software%20Development/Java.md). They have a slightly confusing name and that they sound similar to input and output streams, but actually, they're completely different things. The most common way to create a stream using the Streams API is from an existing collection. So for example, if I have a list of integers called numbers, I could turn that into a stream by doing numbers.stream to call the stream method, and that would give me back a stream. There are two different types of operation you can perform on a stream, intermediate and terminal. Intermediate operations always return another stream so you can chain them together. Terminal operations return void or any other type that's not a stream, so you can't call anything else once you've called a terminal operation. One example of an intermediate method is sorted. So if I call the sorted method on my stream of integers, this would sort the numbers from lowest to highest. And because this is an intermediate operation, it returns a new stream. Note that it doesn't return a collection. A stream is not the same as a collection. A collection stores data and you can iterate over it as many times as you want. Streams are just used to perform operations on the data and don't actually store it. An example of a terminal operation is forEach, which can be used to perform an operation on each element in the stream. So for example, I could print out each element. Let's have a further look at some real-life examples of streams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Tools:** terminal (4)
> **Analogies:** for example (2), similar to (1)
> **Code Identifiers:** foreach (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using streams in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-streams-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-streams-in-java?u=76281980&t=0)** - [Instructor] Let's have a look at some examples of using streams. So in this example, I've got a class called Main. And inside that class, I have a main method. And inside that main method, I've got a list of strings called fruit, which contains the strings, apple, pineapple, banana, pear, and strawberry. Let's say I want to perform some operations on the elements in this list. So for example, let's say I want to capitalize all of the strings. Then I want to filter them to only get the ones beginning with a P. And then I want to sort them alphabetically. I've got a method to do all of those things, which is called process without streams. So this method takes a list of strings as an argument and returns another new list of strings. So inside the method I'm creating a new array list. And then for each string in the original list that I'm passing in, I'm creating an uppercase version of the string. Then I'm checking if it starts with a P, and if it does, I add it to my new list. And then after the fall loop, I call collections.sort to sort the list alphabetically. And then I return that new list. So back up in the main methods, I'm creating a new list of strings and I'm assigning that to the results of my methods process without streams. And then I'm printing it out. So if I run this now, I can see that after calling my methods, the new list just contains pear and pineapple. So it's capitalized all of the strings, it's filtered it so it only contains elements beginning with P, and it's sorted the list alphabetically. I can actually do all of this in a more concise and readable way using streams. So I'm going to create a new method that does the same thing, but using the streams API.
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-streams-in-java?u=76281980&t=94)** So under my process without Streams method, I'm going to create a new static method which is also going to return a list of strings. And I'm going to call this one process with streams. This method's also going to take a list of strings as an argument, which I'll also call fruit. And then to use streams what I'm going to do is I'm going to say fruit.stream and that returns me my stream. And the first thing I want to do is I want to convert each element to uppercase. And I'm going to do that using a method called map. I like to put each new method that I change together on a new line because it makes it a bit easier to read when you have several methods chained together, which is what I'm going to do here. So I'm going to add a new line and here I'm going to call the map method. So I'm going to say Dots Map and Map takes a lambda expression as an argument. In this case I can use a method reference to capitalize the strings. So I'm going to do that by saying string and then two colons and then to uppercase. The map method is an example of an intermediate method so it returns another stream and the stream will contain the same elements but for each element it will run the codes that I've passed into this method. So it will capitalize each one. So the next thing I want to do is I want to filter out items beginning with P. And to do that I'm going to use another intermediate method. And this one is going to be called filter. So I'm going to say dot filter. This also takes a lambda as an argument. And in this one I want to specify the conditions of filter on. So I'm going to pass an item, so for each item in the list and then I'm going to have my arrow
>
> **[3:09](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-streams-in-java?u=76281980&t=189)** and then I'm going to have a boolean condition. So I'm going to say item dot starts with and then pass in a capital P. Next, I want to sort everything alphabetically. And for this one, I can simply use a method called Sorted. So I can just say dot sorted. And finally, I need a terminal operation. So far I've just got a stream and not a collection but I want to return a list rather than a stream. So I'm going to call a method called collect and I'm going to pass in collectors dot list to return a list. And then I can just put a return in front of this. So that will give me back my new list with my filtered and sorted and mapped to uppercase list. So I'm going to go back up to my main method and I'm just going to swap out process without streams for process with streams. And if I rerun this, I can see I get exactly the same results, pear and pineapple. So if I compare the two methods, process without streams and process with streams, the streams one is a bit easier to read. As you can see, each operation that's being performed in each new part of the chain. It's also a bit shorter showing how it's easier to write powerful, more readable code using the Streams API.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is an  (1), is a  (1)
> **Env Vars:** api (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Functional programming](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-functional-programming?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-functional-programming?u=76281980&t=5)** - This exercise is going to give you a chance to practice some [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md). You'll see that for this one, there is another suite of J unit tests. So under the test folder inside _04_06, there's a class called StreamUtilsTest. These tests are testing some methods inside a class called StreamUtils. So if I look inside _04_06 before, there's a class called StreamUtils that has some methods in it. These perform some different operations on lists of strings. And for each method in here, there is a test in the StreamUtilsTest class to check that the code performs as expected. So if I go back to the test class, if I run all of the tests in here by clicking on the two arrows next to the class name, and choosing run, I can see at the moment that all four tests are failing. For this exercise, you'll be writing code inside the StreamUtilsTest class to make each test pass. I'll demonstrate the first one, so you can see how it works. So in this test class, I'm creating a new StreamUtils object, and then I'm creating a new list of strings called weekdays, which contains the strings "Monday", "Tuesday", "Wednesday", "Thursday", and "Friday". So the first test is called testSorted, and this creates a variable called actual, which says streamUtiles dot sorted, and passes in weekdays. And this is expecting back "Friday", "Monday", "Thursday", "Tuesday", and "Wednesday". So that's the weekday's actually sorted in alphabetical order. Then I have a call to assertEquals, which checks that the two lists are the same. So if I run this now, I can see that at the moment it's expecting "Friday", "Monday", "Thursday", "Tuesday", and "Wednesday",
>
> **[1:39](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-functional-programming?u=76281980&t=99)** but it's actually getting back the same order as the list is originally. So "Monday", "Tuesday", "Wednesday", "Thursday", "Friday". So to fix that, I need to have a look at the sorted method inside the StreamUtils class. So let's have a look at that. And this method actually just returns back the same list that you pass in, but it should return a list containing the same elements as the original, but sorted alphabetically. So to fix that, I'm going to, instead of just returning the list, return list dot stream, and then I'm going to call the sorted method. And then to convert it from a stream back to a list, I'm going to call dot collect and pass in collectors dot toList. So that should return a list sorted alphabetically. So if I go back to my StreamUtils test and rerun this one, this one now passes. I'll leave the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the methods for you to try. You could do this exercise without using functional programming, but see if you can do it all using streams. If you do get stuck on anything, I'll be going through the solutions in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** testsorted (1), streamutiles (1), assertequals (1), tolist (1)
> **Cross-References:** go back to (2), in the next (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - this (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Functional programming](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-functional-programming?u=76281980&t=0)** - [Instructor] Let's go through the solutions for the [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) exercise. So I fixed the first test in the previous video. So if I run this one, this one should pass. So that one passes. So let's move straight onto the next one. So this one is called testBeginninhWithT. And if I run this one, I can see us expecting back a list that's filtered out the days of the week beginning with T. So Tuesday and Thursday. But at the moment it's still returning the full list. So I'm going to have a look at this beginning with T method inside my StreamUtils class. So if I go to StreamUtils, I'm going to look at this beginning with T method. So this method should return a list only containing items from the original list that begin with a T. So I'm going to use streams again. So I'm going to do return list.stream and then I'm going to use the filter method. So I'm going to say .filter. And now I want to have a build in condition that checks if the item begins with a T. So I'm going to say item and then have an arrow and then I'm going to say item.startsWith and pass in a capital T. And then I'm going to return this as a list. So I'm going to add .collect .collectors to list. So if I go back to my StreamUtils test class, if I rerun this one now, this one now passes too. So that's another one done. The next one is called testUpperCase. So let's run this one.
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-functional-programming?u=76281980&t=93)** And this one is expecting Monday, Tuesday, Wednesday, Thursday, and Friday, all in uppercase letters. And again at the moment is still returning the original list. So I'm going to have a look at this UpperCase method inside StreamUtils. So here's the UpperCase method and in this case I want to convert everything to UpperCase. So I'm going to say .stream at the end of list. Then I'm going to add a .map, and I'm going to pass in String and then two colons and then to UpperCase. And again, I'm going to convert everything to a list. So I'm going to say .collect and pass in collectors.toList. So if I go back to my test, I'm going to rerun this one. And this one passes. The last one is called testEverythingCombined. So if I run this one, it's expecting a Thursday and Tuesday. So it's expecting a list where everything has been capitalized, it's been sorted alphabetically, and it's filtered it so that it only returns items beginning with a T. So let's have a look at this EverythingCombines method inside StreamUtils. So for this one I'm going to have list.stream. And then the first thing I want to do is sort everything alphabetically. So I'm going to have a .sorted. Then I want to filter the items beginning with T so I'm going to say .filter and I'm going to have another lambda. So I'm going to say item and then an arrow and then say item.startsWith a capital T. Then I want to capitalize everything.
>
> **[3:07](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-functional-programming?u=76281980&t=187)** So I'm going to say .map, and I'm going to pass in string and then two colons and then to uppercase. And then finally, I just need to convert it back to a list. So I'm going to have another .collect and then pass in Collectors.toList. So if I go back to my test class and rerun this, this one now passes T. So now all of my tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1)
> **Code Identifiers:** startswith (2), tolist (2), testbeginninhwitht (1), testuppercase (1), testeverythingcombined (1)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is called (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Concurrency in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to concurrency in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-concurrency-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-concurrency-in-java?u=76281980&t=0)** - [Narrator] Making use of concurrency in [Java](../../Skills/Software%20Development/Java.md) can help you write faster applications by letting your code do more than one thing at a time. As an analogy, imagine a chef is cooking a meal, and as part of the meal, they need to cook both rice and potatoes. If they had a stove that only had one burner they'd have to cook them one at a time which would be quite slow. If they had two burners, they'd be able to half the time it takes to cook the food by cooking the rice and potatoes at the same time. Similarly, with coding, if you have two threads running at the same time, your program can do two things together which can make it run faster. An example of when threads can be useful in Java is when you have blocking input and output functions. For example, if the program asks the user to input some data, a read method might be used which blocks the program until the user has input something. This might prevent the program from performing other tasks while waiting for the user. If they try to do something else, like click on a button, nothing would happen. If the program has a graphical user interface, or GUI for short, multi-threading can be used to improve the responsiveness of the program and stop it from hanging. In particular, if there is a large and complex program that performs independent tasks, using multi-threading is often necessary. So using multiple threads can make software run faster. But what actually is a thread? A thread is a lightweight process. In programming a single process can have multiple threads working at the same time. Like a process, a thread is an independent path of execution that runs in isolation. Each thread has its own stack and its own local variables. So when a method is running on a thread, the local variables
>
> **[1:35](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/introduction-to-concurrency-in-java?u=76281980&t=95)** in the method are only available within that thread. This leads to the question, "Why not just use multiple processes instead of multiple threads?" One reason is that creating a new process uses much more resources. Threads are more closely connected to each other than separate processes are. When you open an email app on your computer, and then open a browser window, those things are separate processes and have nothing to do with each other. But threads inside the same process are more closely connected. They share memory with other threads. This means that they can communicate with each other. All of the threads have the same access to global variables. This can sometimes lead to issues and means that care should be taken when using multiple threads. Java has its own API for handling threads which is actually quite simple to use, but care should be taken when using threads in complex applications. Multiple threads that perform operations on the same data need particular care. Common problems include deadlock and livelock, for example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (2)
> **Env Vars:** gui (1), api (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### [The Thread class in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-thread-class-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-thread-class-in-java?u=76281980&t=0)** - Let's have a look at how threads work in practice. [Java](../../Skills/Software%20Development/Java.md) has a thread class that can be used to work directly with threads, but most of the time when you're writing multi-threaded code, you'll work with obstructions rather than the thread class directly. But it's useful to know how they work so you can understand the concepts that the obstructions are using. So in this example, I have a class called Main, which just has an empty main method inside it. I want to create my own thread which I can call in this main method. So to do that, I need to create a class that extends the thread class. So I'm going to right click on this before package and I'm going to choose new and then Java class. And I'm going to call this, Thread Example. So at the top after Thread Example, I'm going to add extends thread. Now I want to override the run method. So I'm going to add an @ override annotation. And then the method I want to override is a public void method called run. So inside here I'm going to put the codes that I want to run when I run my thread. So I'm just going to have a system.out.println and I'm going to pass in "Hello World" from And then I'm going to put the name of the thread. So I'm going to put + And then to get the name of the thread I can do this.getName So back in the main class I can start creating new instances of my thread. So in the main method I'm going to say Thread threadOne = new ThreadExample and I'll create another thread.
>
> **[1:32](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-thread-class-in-java?u=76281980&t=92)** So I'm going to say Thread threadTwo = new ThreadExample. So now I've got my two threads and I just need to start them now. I can do this using a method called start. So for the first one I'm going to say threadOne.start And then I'm going to say threadTwo.start So if I run my app, I can see that it prints out hello worlds from thread zero and hello worlds from thread one. If I wanted to, I can also rename the threads which can make them easier to keep track of. I can do this using the set name method. So under where I create my two new threads, I'm going to say threadOne.setName and I'm going to call this one first thread. And then I'm going to do threadTwo.setName And for this one, I'm going to pass in second thread. So if I rerun this now, I can see I get Hello World from second thread and hello world from first thread. And you'll notice that second thread comes up before first thread even though I called thread one to start before thread two to start and that's because they're actually running at the same time. So either one of them could have come up first. So that's a very simple multi-threaded application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** threadone (3), threadtwo (3), setname (2), getname (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - let (1)

#### [The Runnable interface in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-runnable-interface-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-runnable-interface-in-java?u=76281980&t=0)** - [Instructor] Now I have a class that extends the thread class called ThreadExample. So let's have a closer look at this thread class itself. If I right click on the class and I go to, Go To and then declaration or usages, this actually takes me to the source code for the class. So I can see that class actually implements another class called runnable. So let's have a look at that one as well. So I'm going to right click and say Go To declaration or usages. So Runnable is actually a functional interface and it defines a single method called Run. So if I go back to my ThreadExample class I can see that I'm actually overriding this run method from the Runnable interface. This class doesn't actually override anything else from the thread class. So one thing I could do is I could actually override the Runnable interface rather than extend the thread class. One advantage of doing this is that if I extend the thread class, which is an abstract class, I now can't extend any other classes. But if I implement the Runnable interface I can implement other interfaces and I can extend another class if I wanted to. So I'm going to change this from extends thread to implements Runnable. And I'm going to rename this class from ThreadExample to RunnableExample. One thing I can't do now is I can't call this.getName because the name field is actually part of the thread class. So I'm going to get rid of that and I'm just going to change this method to say hello world from a runnable. So if I go back to my main class, instead of creating a new Runnable example,
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/the-runnable-interface-in-java?u=76281980&t=93)** I'm actually going to say thread threadOne equals new thread and then I can pass in a new RunnableExample. Another advantage of using Runnable is that because it's a functional interface I can actually use a Lambda instead of implementing a whole new class if I want to. In the previous chapter I looked at how we can use Lambdas to implement functional interfaces in a more concise way. And this is actually a great example of where we can make use of that. So for threadTwo, instead of saying new thread and then passing a new RunnableExample I'm going to say a new thread and this time I'm going to pass in a Lambda. So this Lambda doesn't take any arguments so I'm going to put a pair of empty brackets and then an arrow. And then after this I'm going to have the body of the method. So I'm going to say System.out.println and this time I'm going to say hello world from a Lambda style runnable. So let's just run this to check it works and I can see I get hello world from a runnable and hello world from a lambda style runnable.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** getname (1), threadone (1), threadtwo (1)
> **Cross-References:** go back to (2), previous chapter (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using the ExecutorService in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-executorservice-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-executorservice-in-java?u=76281980&t=0)** - [Instructor] Now we've seen how we can create and manage threads using the thread class directly. However, in a real production system, it's unlikely that we'll want to specifically create individual threads like this. Here it's quite easy to keep track of the different threads, because there's only two of them, but in a large application, it does get more difficult. For example, we might want to reuse threads, because it uses a lot of memory to keep creating and removing them. Luckily, rather than configuring all this ourselves, [Java](../../Skills/Software%20Development/Java.md) provides some instructions that make it easier to work with threads. One good way to manage threads is to use something called an ExecutorService. So let's have a look at how to do that. So inside this main class, in the main method, at the bottom, I'm going to create a new variable of type ExecutorService. And IntelliJ has added the Java dot tool, dot concurrence dot executive service import for me, and I'm going to call this ExecutorService, and then put an equal sign. ExecutorService is actually an interface. So after the equals, I could do new, and put one of the concrete implementations of ExecutorService. However, there's also a class called Executors, which has lots of static methods that handle a lot of the configuration for us. So I'm going to say Executors, and then I'm going to choose one of these static methods. You can see that there's quite a lot to choose from, and they all configure things slightly differently. But let's say I want an executor that will use at most two threads, and will reuse those threads when a task is finished running them. So to do that, I'm going to call the new fixed thread pool method and pass in two.
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-executorservice-in-java?u=76281980&t=94)** Then I can submit Runnable to this ExecutorService. So for example, I can do ExecutorService dot submit, and then I can pass in a new RunableExample. I can also pass in a lander containing the code I want the Runnable to run, like I did when I created a thread in their previous video. So I can do ExecutorService dot submit, and this time I'm going to pass in a lander. So I'm going to put the pair of empty brackets, and an arrow and then I'm going to say system dot out dot printerln, and this time I'm going to say Hello world. From a runnable running in an ExecutorService. I can actually remove all of the codes that uses the Thread Class itself now, because when I use an ExecutorService, I don't need to worry about the threads themselves, because the service will handle them for me. Instead, I just give it tasks to run. And in this case, it will add them to a queue, and run them when a thread becomes available. So I'm going to remove all of this code, where I start the threads and name them and create them. And also, one last thing I need to do is I need to make sure that I stop the ExecutorService when I don't want it to run anymore. So I'm going to add one more new line at the end of my method, and I'm going to say ExecutorService dot shutdown. So if I run this now, I can see I still get my two messages: Hello World from a Runnable, and Hello World from a Runnable, running in an ExecutorService. And I didn't have to worry about configuring the stopping
>
> **[3:07](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-the-executorservice-in-java?u=76281980&t=187)** and starting and reusing of threads, as the ExecutorService handles all of those things, in the way that I tell it to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Cross-References:** previous video (1)
> **Tools:** intellij (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Synchronized methods in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/synchronized-methods-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/synchronized-methods-in-java?u=76281980&t=0)** - [Instructor] When you're working with threads, there are some things that can go wrong that is worth keeping an eye out for. So in this example, I have a class that represents a bank account. This class has a field called balance, which is set to 100, and then it has a method called debit, which takes an amount as an argument and then it subtracts that amount from the balance. And then there's a method called getBalance, which returns the balance. There's also a class called ATM, which has a withdraw method. So this method takes an account and an amount as arguments, and the first thing it does is it gets the balance of the bank account. Then it checks to see if minusing the amount from the balance would take the balance below zero. If it does, it prints out a message saying, "Transaction denied." If it doesn't, then it prints out a message saying, "Handling transaction," and then it calls the debit method on the account to minus the amount from the balance. And then it prints out a message saying how much money was withdrawn. And then finally, after the if-else statement, it prints out a message saying what the current balance is, using the account.getBalance method. Finally, I have a class called Customer. So this represents a person using an ATM to withdraw money. In here, I have a main method where I'm creating an ATM object and a BankAccount object. Imagine a scenario where an account is shared by two people and there are two cards associated with that account. It's possible that both people will try and withdraw money at the same time. So to represent this, I have an executor service with a fixed thread pool of two. Then I'm submitting two tasks to the service.
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/synchronized-methods-in-java?u=76281980&t=93)** So that represents two people trying to withdraw $100 from the same account at the same time. Then I'm calling the shutdown method on the executor service. So the balance of the account shouldn't go below zero. So we're interested to see what happens when two people try and withdraw $100 from the account at the same time. So if I run this, I can see that something odd has happened. Both people have been able to withdraw $100. So that takes the balance to -100, which shouldn't be allowed to happen. Let's have a look at the withdraw method in the ATM class to see why this might have happened. So if I go back to the ATM class, what might have happened is the first thread might have gone into this method and then it would call the getBalance method on the account, which should return $100. Then it checks if balance minus amount is less than zero. So 100 minus 100 equals zero, so that's not less than zero. It would go onto this else statement. And then at this point, the second thread might enter the method. And this thread will also call the getBalance method on the account, and that will also return 100. So when the second thread checks if balance minus amount is less than zero, it will also return false and go onto this else statement. So both threads will go inside this else statement and debit the account. This seems like it might be quite a complex problem to solve. But in this case, there is actually quite a simple solution. I can make this withdraw method a synchronized method. And I can do this by putting the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) synchronized before the return type. So after public and before void, I'm going to put the word synchronized.
>
> **[3:07](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/synchronized-methods-in-java?u=76281980&t=187)** This means that only one thread will be allowed to enter this method at a time. So if I go back to my Customer class, if I rerun this, I can guarantee that this time the account balance won't go below zero. So if I run it a few times just to make sure, I can see that I consistently get the balance as zero and I never get the error where it goes down to -100.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Env Vars:** atm (5)
> **Code Identifiers:** getbalance (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Name](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-name?u=76281980&t=0)** - [Instructor] In this exercise, you'll be updating an application that represents customers making purchases from a store. So there are two classes in this app and the first one is called Stock Checker. So this class has a private field called stock which is set to 20. Then there's a method called Get Stock which returns that amount of stock. Then there's a method called Update Stock which takes an amount as an argument and then it minuses that amount from the amount of stock. The other class is called Store. So this represents a store where people can go to buy the stock and in this class there is a method called purchase. In this method, it uses a stock checker as to get to the current amount of stock. Then it checks if stock minus amount would be less than zero. If it would, then it prints out a message saying out of stock. Otherwise, it prints out a message saying "Item is in stock." Then it calls the update stock method on the stock checker to minus the amount from the amount of stock and then it prints out a message saying how many items were purchased. Then after this, it prints out a message saying what the current stock is using the get stock method on the stock checker. So in this exercise you'll be writing some code in the main method. The first part of the task is to create a new stock checker object. Then you should create an executive service with a fixed thread pool of four threads. Next, you should submit four tasks to the executive service and in each task you should call the purchase method and pass in 20 to represent a customer purchasing 20 items. And finally, you should shut down the executive service.
>
> **[1:36](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-name?u=76281980&t=96)** And one small extra thing is that you should make sure that this purchase method is a synchronized method. To make sure that two threads don't enter this method at the same time and accidentally purchase too much stock. If you get stuck, this example is quite similar to the example I showed in the previous video so it might help to go back and look at that one again. I'll also be going through the solution to this exercise step by step in the next movie.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (2)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Name](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-name?u=76281980&t=5)** - So let's have a look at the solution to this exercise. So inside the Store methods I'm going to be writing my code inside the main method. The first part of the exercise is to create a new StockChecker object. So I'm going to add a new line and I'm going to say StockChecker. stockChecker equals new StockChecker. So that's the first part done. The second part says to create an ExecutorService with a fixed thread pool of four threads. So on another new line, I'm going to say ExecutorService. executorService equals and then I'm going to say executors. And then I'm going to call the static method newFixedThreadPool and pass in four. The next part says to submit four tasks to the executor service. And in each task, I should call the purchase method and pass in 20 to represent a customer purchasing 20 items. So I'm going to say executorService.submit and then I'm going to pass in a Lambda for my runnable. So I'm going to have a pair of brackets and then an arrow. Then I'm going to call this purchase method. So I'm going to say purchase and I'm going to pass in my stockChecker. And then the second document is the amount which is going to be 20. It says to submit this four times. So I can just copy and paste this line another three times. So that's being called four times now. Then I'm going to call the shutdown method on the executor service. So I'm going to say executorService.shutdown. And then one final thing is I'm going to make this method a synchronized method. So before the void, I'm going to put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) synchronized. So if I run this just to make sure it works.
>
> **[1:42](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-name?u=76281980&t=102)** So I can see that for the first thread, 20 items are purchased and then it sees that there's not enough stock to purchase anymore. So each time it says it's out of stock and the current stock is zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** executorservice (3), stockchecker (2), newfixedthreadpool (1)
> **CLI Commands:** make (2)
> **Speakers:** - so (1)


### 6. Input and Output

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding I/O in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/understanding-i-o-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/understanding-i-o-in-java?u=76281980&t=0)** - [Instructor] Inputs and OutputStreams are a way of reading data or writing data. There are lots of different use cases for using Streams and they're used more often than you might think. Even a simple "Hello World" application uses them. When you have a System.out.println statement, that is actually using an OutputStream to print out the text. Streams are most often used for things like reading from and writing to files and taking user inputs from the console. Streams represent a flow of data, and a bit like streams of water, they can only go in one direction. OutputStreams write out data and InputStreams read in data. If you wanted to have data going two ways, you would need two separate Streams. There are two core abstract classes in the [Java](../../Skills/Software%20Development/Java.md) Streams API, InputStream and OutputStream. As these are abstract classes, you can't instantiate them directly, but they each have several concrete implementations for handling different types of data. For example, concrete implementations of InputStream include FileInputStream for reading files, and ByteArrayInputStream for reading bytes and so on. Similarly, implementations of OutputStream include FileOutputStream and ByteArrayOutputStream for writing out files and byte arrays respectively. There are two more abstract classes called Reader and Writer. These are similar to Input and OutputStream and they are built on the same concepts, but the main difference is that InputStream and OutputStream move bytes around, whereas Reader and Writer move characters around. Characters are easier and more intuitive to work with than bytes. They can handle Unicode characters and other character encoding issues, which byte streams don't.
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/understanding-i-o-in-java?u=76281980&t=94)** Again, these are abstract classes, so it's the concrete implementations that are used depending on the type of data that you are handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Analogies:** for example (1), similar to (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Reading from System.in with a Scanner](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-from-system-in-with-a-scanner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-from-system-in-with-a-scanner?u=76281980&t=0)** - [Instructor] Imagine you have an application where you need to read inputs from the console. So here I have a class called ScannerExample with an empty main method. And let's say that I want to use this class to ask a user to input their name and their age in the console and then I'll do something with that input. One way to do this is with the Scanner class. So I'm going to create a new Scanner object by saying Scanner, which is inside the [Java](../../Skills/Software%20Development/Java.md).util class and I'll call it Scanner. Then I can say equals new Scanner and I'm going to pass in system.in. System.in is an input stream that returns keyboard inputs from the user. So next, I'm going to print out a message to the user that asks them to enter their name. So I'm going to say system.out.println and I'm going to say please enter your name, and I'm actually going to change this to system.out.print so that they can enter their name on the same line without having a new line before they enter it. So the way I can get the user's input is with a method from the Scanner class called nextLine. So I can say string name equals scanner.nextLine and that will return me the name that they enter in the console. So just to check that's worked, I'll have a system.out.println and I'll print out that name variable. So that's how you can use a scanner to get the next line of input. Let's say I then want to ask for their age. So I'm going to add another prompt where I say system.out.print and I'm going to pass in please enter your age. Instead of getting the next line as a string,
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-from-system-in-with-a-scanner?u=76281980&t=94)** the Scanner class also has a method to get the next number as an int, which is called the nextInt method. So I can say int age equals scanner.nextInt and I'll print that out as well. So I'll say system.out.println and I'll pass in age. So I'll run this now to check it all works. So I'm going to click on the green arrow and choose Run. And in the console, it asks to enter my name. So I'm just going to enter a random name, Sam. Then it says please enter your age. So I'll just enter a random age, 30, and that's all works as expected. So it prints out the name variable and the age variable. As a final thing, let's say I want to get to their occupation as well. So I'm going to add another prompt where I say system.out.print and I'm going to pass in please enter your occupation. Then I'm going to say string occupation equals scanner.nextLine. And then I'll print that out. So I'll say system.out.println and pass in occupation. So I'm going to run this again. So it says please enter your name. So I'm going to enter Sam. And then it says please enter your age. So I'm going to enter 30. And then it says, please enter your occupation. But it doesn't actually give me a chance to enter anything. And this is because the nextInt method actually works slightly differently to the nextLine method. The nextLine method will consume the line separator at the end of the line and then move on to the next line. However, the nextInt method will consume the int
>
> **[3:08](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-from-system-in-with-a-scanner?u=76281980&t=188)** but not the line separator at the end. So after we've read the integer, the scanner returns the new line character and doesn't move on to the next line. So when I say scanner.nextLine, it just returns the new line character. There are a couple of solutions to this problem. One is instead of using nextInt here, I could actually change this to use nextLine and then convert the string to an integer. Another option is to add another call to nextLine after this call to nextInt so that the scanner moves on past the line break. So I'm going to add another line and I'm going to say scanner.nextLine. So if I run this again, I'm going to enter the name Sam and the age 30. And this time, it does actually ask me for my occupation. So I'm just going to pass in teacher and it prints out teacher. So that's how you can use the scanner to read input from the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** nextline (9), nextint (6)
> **Definitions:** is an  (1), is called (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Reading files with BufferedReader](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-files-with-bufferedreader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-files-with-bufferedreader?u=76281980&t=0)** - [Instructor] Another way of reading input is with a class called BufferedReader. Let's say, for example, that I want to read the contents of a file. So in this example, inside 06_03, I've got a file called example.txt. And this just contains some dummy text Lorem Ipsum. Lorem Ipsum is a made-up language that's useful, for example, contents. And I've also got a class called BufferedReaderExample, which at the moment just contains an empty main method. So the first thing I need is a BufferedReader. So I'm going to say BufferedReader and I'll call it reader equals new BufferedReader. And the BufferedReader class actually takes another reader as an argument to its constructor. The type of reader that I pass in here depends on what I'm reading from. In this case, I want to read from a file. So the FileReader class is the one I want here. So I'm going to say new FileReader. The FileReader constructor also takes an argument and in this case, it's a string, which is a path to the file that I want to read. This path will be read from the root of my project so I'm going to put src/main/[Java](../../Skills/Software%20Development/Java.md) and then this is inside 06_03 and the file is called example.txt. So I can see that I've actually got a compiler error at the moment, and that's because I need to handle a FileNotFoundException. So I'm going to put this inside a try-catch block. So I'm going to put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) try and then a curly brace and then a closing curly brace after my line where I created my reader.
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-files-with-bufferedreader?u=76281980&t=93)** Then I can have a catch statement. And in here, I'm going to pass in that FileNotFoundException, which I'll call e. And then inside that block, I'll say e.printStackTrace. So if that exception does happen, it'll print out a message to the console. So now I want to read the contents of this file. BufferedReader comes with a handy method for reading each line of the file one by one called ReadLine. So to return the first line of the file, I'm going to create a variable called firstLine of type string. And I'm going to say equals reader.readLine to return the first line. So if I keep calling that method, it will return each line of the file one by one. And I can see I've got another compiler error here and that's because I have another unhandled exception. And this time it's an IOException. FileNotFoundException is actually a subclass of IOException. So if I change this to IOException that will cover both scenarios. And I just need to make sure that I've imported the IOException class at the top here and I can actually get rid of this FileNotFoundException import statement now. So just to check that's worked, I'll have a system.out.println and pass in that first line. So if I run this, I can see in the console that it prints out the first line. And just to make it clear, I'll add another system.out.println above and put a message saying that that is the first line. So if I wanted to get the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the lines of the file as a single string, I could write a loop where I check if the next line is null using that readLine method.
>
> **[3:08](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-files-with-bufferedreader?u=76281980&t=188)** And if it's not, then I add it to my string. But there's also a handy method called lines from the Reader class, which returns each of the lines in a stream. That's the stream that was introduced in Java 8 rather than an input or output stream. So to do this, I'm going to add another line and I'm actually going to create a StringBuilder so I can append each line to the builder. So I'm going to say StringBuilder stringBuilder equals new StringBuilder. Then I'm going to say reader, and I'm going to call that lines method. So that returns a stream. So then I'm going to call the forEach method. And in here I'm going to pass a lambda. So for each line, I'm going to have an arrow, and then after that, I'm going to say stringBuilder.append. And then I'm going to append that line. So that'll put them all together as one long string but I actually also want to put a space in between each lines. So I'm going to add a plus after line and then a pair of quotes with a space. So I'm going to add another system.out.println. And this time I'm going to print out a message that says rest of the lines. And then I'm going to have a system.out.println and pass in at my stringBuilder. So if I run this again now, I can see I get my first line and then I have the rest of the lines as one very long string. And it's got that space in between each line as well. Note that when I call this lines method,
>
> **[4:41](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/reading-files-with-bufferedreader?u=76281980&t=281)** it doesn't actually return the first line. So you can't see the first line at the beginning of the rest of the lines output. And that's because when I called this readLine method up above, that had already returned that first line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (4), [Java](../../Skills/Software%20Development/Java.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** readline (3), stringbuilder (3), printstacktrace (1), firstline (1), foreach (1)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** example.txt (2)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Versions:** java 8 (1)
> **Warnings:** note that (1)

#### [Using try-with-resources with I/O](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-try-with-resources-with-i-o?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/using-try-with-resources-with-i-o?u=76281980&t=0)** - [Instructor] Here we have the example I showed in the previous video of how I can read a file with a buffered reader. So if I run this main method, it prints out the first line from a file, and then all of the other lines as one long string. However, there are a couple of things I can improve in this code. One thing that I don't do is I don't close the reader. If you open resources like this without closing them, they will use up operating system resources. For example, if you leave a database connection open, it may lead to a limit on the resources being reached, and the application server having to keep restarting. One way to handle this is to add a finally block after the try cath blocks, to make sure the resource is closed after it's been used. However, if you have a large application where you are opening several resources in different places, it can be quite easy to miss this part. Luckily, there is a simpler way to handle this scenario called, try-with-resources. The syntax for try-with-resources is to declare the resource inside brackets after the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) try. So after the word try, I'm going to put a pair of brackets. And then I'm actually going to cut this line, and I'm going to paste it inside the brackets. So if I run the app again now, I can see that I get the same output as before. So this is quite a small change, but it can make your application safer by preventing memory leaks. So you should use try-with-resources wherever you are creating resources inside a try block.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Input and output](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-input-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-input-and-output?u=76281980&t=0)** - [Instructor] Let's have a look at the challenge for this chapter. In this one there is a text file called Buffered Reader versus Scanner.txt. This exercise is going to be to write some codes that reads from this file. So there's also a class called File Reader Exercise. This has two methods in it. The first one is called Get First Line and this method should return the first line of the file and at the moment it just returns an empty string. The second one is called Gets Whole File and it should return the whole content of the file as a single string. And again, at the moment it just returns an empty string. There are some tests that will help you see if your solutions are working correctly for this exercise. So inside the test folder, inside 0605, you'll see that there is a file called File Reader Exercise Test. The first test checks that the first line is returned correctly and the second one tests that the whole file is returned as a single string when the get whole file method is called. So if I run both of these tests now by clicking on the arrows next to the class and clicking run, I can see that at the moment both of these tests fail. You should be able to try running them after you've implemented your solution inside to the File Reader exercise class and see if they pass. I'd recommend using a buffered reader to do this exercise, using it in a similar way to the way I demonstrated in the previous videos and I'll also be using Buffered Reader in the solution in the next video. However, if you do want to try doing this exercise
>
> **[1:34](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-input-and-output?u=76281980&t=94)** using the scanner class instead, or even as well as, that's also possible and also a good exercise to try out. If you want to learn more about the difference between Scanner and Buffered reader there's some more information in the Buffered Reader versus Scanner.txt file which is the file you'll be reading from in this exercise. And as usual, I'll be walking through the solution in the next movie.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is a  (2)
> **File Paths:** scanner.txt (2)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Input and output](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-input-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-input-and-output?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-input-and-output?u=76281980&t=5)** - So let's have a go at fixing these unit tests one by one. So the first test is called test getFirstLine and this one is expecting to get back the first line from the file. So if I run this test, at the moment this one fails, because it's returning just an empty string, but it's expecting that first line. So this test is calling a method called getFirstLine inside the file reader exercise class. So let's have a look at that method. So here's the FileReaderExercise class, and the get first line method just creates an empty string called firstLine and then just returns that variable. So we want to actually return the first line of the file. So I'm going to add BufferedReader and I'll call it reader. Then I can say = new BufferedReader. And then inside this constructor, I'm going to pass in a new file reader. So I'm going to say newFileReader. And then inside this constructor, I pass in the path to the file. So I'm going to say src/main/[Java](../../Skills/Software%20Development/Java.md). And then this is inside _06_06, although if you did the exercise inside 06 05, then you should put _06_05 here. And then the name of the file is BufferedReaderVsScanner.txt. And I can see I've got a compiler error, because I need to handle the IO exception. So I'm actually going to use the try with resources syntax here. So I'm going to say try, and then I'm going to put the whole of the buffered reader line inside a pair of brackets. Then I can have a pair of curly braces, and then after the try block,
>
> **[1:37](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-input-and-output?u=76281980&t=97)** I'm going to have my catch block. So I'm going to say catch IOexception e, And then inside the catch block, I'm going to say e.printStackTrace. So I've created my buffered reader, and now I need to use it to read the first line from the file. So I'm going to say firstline = reader.readLine to get that first line. And then I'm just going to keep this return firstLine. So that should return the variable which now contains that first line from the file. So if I go back to the test class, let's see what happens if I run this test again now. So now this test passes. So let's have a look at the next one. The next one is called testGetsWholeFile. So this one is expecting back all of the contents of the file as one big string. And to do that, it's using it a method called getWholeFile from the file reader exercise class. So let's see what happens when I run this one. So this one fails, because it's actually also returning an empty string at the moment, whereas it's expecting the whole thing. So if I go back to file reader exercise, let's have a look at the getWholeFile method. So at the moment, again it's just returning an empty string. So I'm going to use a buffered reader to read the content from the file again. So I'm actually going to copy and paste this try line from the method above, and paste that under the string WholeFileLine. So I've got my try block, and I can actually copy and paste the catch block as well. So I'm going to copy catch IOException e and then the e.printStackTrace parts, and paste that after my try block. So I've got my reader and I've got my catch block,
>
> **[3:12](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-input-and-output?u=76281980&t=192)** and now I want to read the whole contents of the file. So I'm going to use a string builder to build the string. So I'm going to say, stringBuilder stringBuilder = new stringBuilder. Then I'm going to say reader, and then I'm going to call the lines method. So I'm going to do .lines, and then that returns a string. So I'm going to say for each, and then for each one I'm going to say line. And then for each line, I'm going to do stringBuilder.append, and then pass in line. And then I need to remember to have the space after each line. So I'm going to say line +, and then a pair of quotes and a space. Then I'm just going to say that the wholeFile variable can equal my stringBuilder.toString. So if I go back to this test class, if I rerun this one now, this one now passes as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** stringbuilder (5), getfirstline (2), firstline (2), printstacktrace (2), getwholefile (2)
> **Cross-References:** go back to (3)
> **Definitions:** is called (2)
> **File Paths:** bufferedreadervsscanner.txt (1)
> **Best Practices:** remember to (1)
> **Speakers:** - so (1)
> **Non-Speech:** (electronic music) (1)


### 7. Working with Files and Directories

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with files in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-files-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-files-in-java?u=76281980&t=0)** - [Instructor] [Java](../../Skills/Software%20Development/Java.md) has always had ways to handle files right from the very first version. There are two different packages that contain classes that we can use to work with files, [java.io](https://java.io) and java.nio. There is a class called file in the [java.io](https://java.io) package and that can be used to do things like create new files and list files in a directory. This class has been around since the beginning, and it's unlikely to be deprecated because it's been used so much, but it does have a few drawbacks. These drawbacks are addressed by the classes in the java.nio package. This introduced some new classes such as Path, Paths, and Files. These classes give us a newer API that can do everything the file class can do but has better support for things like error handling. So in general, it's a better option to go with the classes in java.nio for working with files. And because of these improvements, I'll be using the classes in the java.nio package in my examples, but you might see the file class used in older code examples. Two of the main classes I'll be using from the java.nio package are Path and Paths. A Path object represents a path on the file system, and the Paths class provides a static method called Get, which is used to convert strings to Path objects for us. Then there's the Files class, not to be confused with the file class in the [java.io](https://java.io) package. This provides several static methods that can be used to work with files, such as copying, moving, and deleting files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (9)
> **URLs:** [java.io](https://java.io) (3)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a new file](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/creating-a-new-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/creating-a-new-file?u=76281980&t=0)** - [Instructor] A task that comes up fairly often in [Software Development](../../Topics/Software%20Development.md) is the need to work with files in some way. So to begin with, let's look at how we can create a new empty file in [Java](../../Skills/Software%20Development/Java.md). So in this example, I have a class called FileCreationExample with an empty main method inside it. So to create a new file, I'm going to use a class in the java.nio package called Path. So I'm going to add a new line inside my main method and I'm going to say Path path. Then I'm going to say equals. And then I'm going to use a class called Paths. So I'm going to say Paths and then I'm going to call a static method called get. And then I'm going to pass in the path to the file that I want to create. So I'm going to say that I want it to be inside source, main Java and I'll put it inside 0 7, 02, and I'll call it example.txt. Then I just need to make sure that I've imported the path class from java.nio.file. And I've also got the Paths class imported as well from the same package. So I've specified the path where I want my file to be but I haven't actually created the file yet. To do that, I need to add another step which is to create the file which I can do using at another class called Files. So I'm going to say Files. And that's also imported from the same package. And then I'm going to call another static method called createFile, and then I can pass in my path. So I get a compiler error here and that's because I need to handle the IO exception. So I'm going to wrap this inside a try block. So at the top I'm going to put try and a curly brace and then after my code I'm going to close that block.
>
> **[1:36](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/creating-a-new-file?u=76281980&t=96)** Then I'm going to say catch and pass in IO exception, which I'll call E. And then inside the catch block I can do e.PrintStackTrace to print a message if an IO exception is thrown. So if I run this I can check inside my 07 02 folder and I can see it's created a new empty file called example.txt. So let's just see what happens if I run this when the file already exists. So I'm going to run it again. And this time I actually get a fileAlreadyExists exception. So I could catch that exception here or I could have an if statement inside my try block to see if the file exists before I try and create it. So let's do that. So I'm going to add a line above my Files.createFile line and I'm going to put if. And then I can use a method called Not Exists from the Files class. So I can say Files.notExists and then I'm going to part my path. And then I'm going to cut and paste this files.create line inside the IF block. If the file does already exist we don't need to do anything. So we don't need an else block there. So if I run this again, I don't get an exception anymore and we still have the empty example.txt file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Software Development](../../Topics/Software%20Development.md) (1)
> **Code Identifiers:** createfile (2), filealreadyexists (1), notexists (1)
> **File Paths:** example.txt (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Working with directories in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-directories-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-directories-in-java?u=76281980&t=0)** - [Speaker] It's often useful to be able to work with directories in [Java](../../Skills/Software%20Development/Java.md). So let's start by seeing how we can list the contents of a directory. In this example, I've got a class called directories example with a main method inside it. So let's say I want to list all of the contents of this project. I'm going to use the files class for this which has a static method called list. So I'm going to say files.list. This method returns a stream of path objects and also takes a path object as an argument. So I'm going to pass in paths and I'm going to call the static method get. And then to get the current directory I can actually just put a dot. So that returns a stream. So I'm going to call the for each method and I want to print out each one. So I'm going to pass in system.out and I'm going to use a method reference. So I'm going to have two colons and then println. The list method actually also throws an IO exception. So I need to use a try-catch block. So above this line I'm going to add try and then a curly brace. And then I'll as a closing curly brace after my files.list call. And then I can say catch and I'm going to pass in IO exception, which I'll call E. And then inside the catch block I'll say e.printStackTrace. So let's run this and see if we get to the content. So I'm going to click run and I can see that I get all of the contents of this project. So this includes all of the directories as well as file names. So for example, .license is a file whereas .Source for example, is a directory. If I want to restrict this
>
> **[1:32](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-directories-in-java?u=76281980&t=92)** to just the file names and not the directories I can actually use a filter method from the stream's API. So before my dot for each, I'm going to add another call to dot filter and I'm going to say file. And then I'm going to have an arrow and then I'm going to have a boolean condition. So I'm going to check that the file is not a directory. So to do that I'm going to put a knot and then I'm going to use the files class again and use another static method called isDirectory. And then I can pass in the file so that checks if the file is not a directory. So if I rerun this, I can see that this time I just get the files. So for example, I have the .license file but I don't get the source directory. So that's how we can list directories. And now let's see how we can create a new directory. To do this, I'm going to use another static methods from the files class. So I'm going to add a new line inside my try block and I'm going to say files.createdirectory. Then I'm going to pass in the path to the directory I want to create. So I'm going to say paths.get and then I'm going to pass in the path. So I'm going to say source slash main slash Java and I'll put this new directory inside 0703 and I'll call it example. One more thing I need to do is I need to check if the directory already exists. Otherwise if I run this and it does exist it will throw an exception. So I'm going to add an if statement and say if Files.not exists and then I'm going to pass in the name of my directory.
>
> **[3:07](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/working-with-directories-in-java?u=76281980&t=187)** So I'm going to copy that and paste it inside the Not Exists method. And I need to wrap that inside a Paths.Get because it needs to have a path objects from other than a string. And then I'm going to cut and paste this files.createdirectory line inside the if block. If it doesn't already exist, I don't need to do anything. So I don't need to add an else statement. So let's run this. And I can see it's created a new empty directory called example inside 0703. And I'll just run it one more time to check that it doesn't throw an exception if the directory already exists. So I run it again and I don't get an exception.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Analogies:** for example (3)
> **Code Identifiers:** printstacktrace (1), isdirectory (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Speakers:** - [speaker] (1)

#### [Copying files in Java](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/copying-files-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/copying-files-in-java?u=76281980&t=0)** - [Instructor] Let's see how we can copy files in [Java](../../Skills/Software%20Development/Java.md) now. So in this example, inside 07 04, I've actually got a directory called files and inside that I have two more directories, A and B. Inside example dot TXT, I've just got the words, hello world. So to copy this file, I'm going to open up the class called file copier, which just contains an empty main method. And inside here, I'm going to create a path object which is going to say what the path to the file I want to copy is. So I'm going to say path and let IntelliJ add the import statement for me. And then I'm going to call this path, in fact, I'll call it path to file and I'll say equals. And then I'm going to call the static get method from the paths class. So I'm going to say paths and again that will add the import for me and I'm going to say get and then I just pass in the path to the file I want to copy. So I'm going to say source slash main slash java and then, this is inside 07 04 and then, it's inside files slash A and the file is called example dot TXT. Next, I need to say where I want the file to be copied to. So again, I'm going to have a path object and I'll call this one path to new location. Then I'm going to say equals paths dot get and I'm actually going to copy the path from inside the previous variable and paste it inside this paths dot get. Then I can just change the A to a B. Now I can use the static copy method from the files class to copy the file. So I'm going to do files dot copy
>
> **[1:33](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/copying-files-in-java?u=76281980&t=93)** and I'm going to pass in path to file as the first document and path to new location as the second document. And copy throws an IOException, so I need to wrap this inside a try catch block. So I'm going to add try and put a pair of curly braces around my files dot copy line. Then I'm going to add a catch with IOException E. And then inside the catch block, I'm going to say E dot print stack trace. So if I run this, I can see that I'm missing something from my path. So I'm going to add in a slash after Java and I also need to add in a slash in the path to copy it to. So let's try running that again. And this time I don't get an exception and I can see that inside the B folder I have a copy of the example dot TXT file, which contains the hello world text. So if I run this again when the file's already been copied, I'm expecting this will actually throw an exception again. And this time, yes, I get an exception. And this time it's file already exists exception. So I need to wrap my files dot copy inside an if statement. So I'm going to add if and then inside here I'm going to say files and then I'm going to call the static method not exists and pass in the path to the new location. Then I'm going to cut this files dot copy line and paste it inside that if block. So if I run this again, this time I don't get the exception and the file is still there, inside the B directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **Env Vars:** txt (3)
> **Tools:** intellij (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Files and directories](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/challenge-files-and-directories?u=76281980&t=0)** - [Instructor] Let's have a look at the last exercise in this course. So for this one, there's a class called "FilesExercise" inside _07_05. And inside this folder you'll also see that there are two more folders, Folder A and Folder B. So for this exercise, you need to create an empty file called "example.txt" inside Folder A. Then you should copy the file to Folder B. And finally, you should list the contents of Folder B to check that your file is in there. So I hope you enjoy this exercise and good luck, and I'll be walking through the solution in the next video.

> [!info]- Semantic Content
>
> **File Paths:** example.txt (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Files and directories](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-files-and-directories?u=76281980&t=0)** (dynamic music)
>
> **[0:05](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-files-and-directories?u=76281980&t=5)** - Let's walk through the solution to this exercise. So the first part of the exercise is to create a new empty file called example.txt inside folderA. So the first thing I need to do is I need to specify the path where I want my new file to be. So I'm going to say path, path equals Paths.get, and then I'm going to pass in the path. So I'm going to say src/main/[Java](../../Skills/Software%20Development/Java.md) and then 0706, although if you did this exercise in 0705, then you could put 0705 here, and then I'm going to say /folderA/example.txt. And I also know that the next methods I'm going to call are going to throw IO exceptions. So before I do those I'm going to wrap all of my codes in a try-catch block. So at the top I'm going to do try and then a curly brace and all of my code is going to be inside that try block. Then at the bottom I can have a catch and pass in IOException, which I'll call e. And then inside the catch block I'll do e.printStackTrace. So next I want to actually create my file. But first I want to check if it already exists or not. So I'm going to have an if statement, and inside the if statement I'm going to say, if files.notExists and then pass in path. So if it doesn't exist, I can create the file. So in this case I'm going to do files.createFile and pass in Path. If it does already exist, I don't need to do anything else. The next part is to copy the file to folderB. So first I'm going to specify the path where I want to copy it to.
>
> **[1:37](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/solution-files-and-directories?u=76281980&t=97)** So I'm going to say Path, path equals Paths.get. And I'm actually going to copy the path from inside my first Paths.get and paste it inside the second one. And then I can just change folderA to folderB. Then I'll rename this one to newPath. Now I need to do another check to see if this new file already exists. So I'm going to have another if, and again I'm going to do files.notExists and pass in the newPath. So if this one doesn't exist I'm going to copy the original one into here. So I'm going to do files.copy and then pass in Path and then newPath. So that should copy my original file into folderB. The last part is to list the contents of folderB to check that my file is in there. So to do that I'm going to do Files.list and then I'm going to pass in the path that I want to check. So that's going to be src/main/java/_07_06/folderB. So I'm going to copy and paste that in here and I need to wrap that inside a Paths.get to convert my string to an actual path. So if I run this now, let's see what happens. So I created my new file example.txt inside folderA which is an empty file. And then has also been copied into folderB. And let me just run it again to check that it still works properly if the files already exists. So it all works as expected. So I hope you enjoyed the exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** folderb (6), foldera (4), newpath (3), notexists (2), printstacktrace (1)
> **File Paths:** example.txt (2), foldera/example.txt (1)
> **Definitions:** is an  (1)
> **Speakers:** - let (1)
> **Non-Speech:** (dynamic music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-advanced-concepts-for-high-performance-development/next-steps?u=76281980&t=0)** - [Bethan] So this brings us to the end of the course. Well done on completing it, and thank you for joining me. This course has covered a really broad range of topics, and hopefully you now feel more confident in your [Java](../../Skills/Software%20Development/Java.md) coding skills. A good next step would be to look in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library at some more of the Java programming courses in more specialist areas. For example, if you're interested in using Java with [Databases](../../Skills/Software%20Development/Databases.md), there's a course on learning [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md). Or if you want to learn to use Docker with Java, I'd recommend the Docker for Java Development course. If you're interested in [Web Development](../../Topics/Web%20Development.md), for example, I'd recommend looking at the courses on Spring and [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md). Good luck with your continued learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **CLI Commands:** docker (2)
> **Analogies:** for example (2)
> **Env Vars:** jdbc (1)
> **Speakers:** - [bethan] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-java-development-2515082)

## Skills Covered

- Java Software Development
- Java

## Path Context

### In [Advance Your Java Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Java%20Skills.md)
**1 of 4** | [Introduction to Docker for Java Developers](Introduction%20to%20Docker%20for%20Java%20Developers.md) →

## Appears In

- [Advance Your Java Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Java%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Practice It- Java](../Software%20Development/Practice%20It-%20Java.md) — Java
- [Hands-On Introduction- Java](../Software%20Development/Hands-On%20Introduction-%20Java.md) — Java
- [Learning Java 17](../Software%20Development/Learning%20Java%2017.md) — Java
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Java
- [Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More](Advanced%20Java-%20Hands-on%20with%20Streams%2C%20Lambda%20Expressions%2C%20Collections%2C%20Generics%20and%20More.md) — Java

---

[↑ Back to top](#)