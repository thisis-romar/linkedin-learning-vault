---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-object-oriented-programming-22888296
url: "https://www.linkedin.com/learning/python-object-oriented-programming-22888296"
duration_minutes: 116
duration: 1h 56m
level: Intermediate
updated: 1/27/2025
learners: 54591
skills:
  - Python (Programming Language)
  - Object-Oriented Programming (OOP)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-object-oriented-programming-4413110/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGDodIrzxv0mA/learning-public-crop_675_1200/B56ZS92ByDGQAc-/0/1738351845105?e=2147483647&amp;v=beta&amp;t=L07OE1pDo94yPJZbYwrw7KPuTP-lHkkMt5Nqsn-Gn8Q"
linkedin_topic: Software Development
learning_paths:
  - '[OpenEDG Python Institute- Programming with Python Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/OpenEDG%20Python%20Institute-%20Programming%20with%20Python%20Professional%20Certificate.md)'
  - '[Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)'
prev_courses:
  - '[Python Essential Training](Python%20Essential%20Training.md)'
  - '[Learning Python](../Data%20Science/Learning%20Python.md)'
next_courses:
  - '[Level Up- Python](Level%20Up-%20Python.md)'
  - '[Learning the Python 3 Standard Library](../Data%20Science/Learning%20the%20Python%203%20Standard%20Library.md)'
path_nav: '[{"path":"OpenEDG Python Institute- Programming with Python Professional Certificate","position":2,"total":3,"prev":"Python Essential Training","next":"Level Up- Python"},{"path":"Getting Started with Python","position":3,"total":8,"prev":"Learning Python","next":"Learning the Python 3 Standard Library"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/data-science
  - skill/python-programming-language
  - skill/object-oriented-programming-oop
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Object-Oriented%20Programming.md)

![Python Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQGDodIrzxv0mA/learning-public-crop_675_1200/B56ZS92ByDGQAc-/0/1738351845105?e=2147483647&amp;v=beta&amp;t=L07OE1pDo94yPJZbYwrw7KPuTP-lHkkMt5Nqsn-Gn8Q)

# Python Object-Oriented Programming

> The object-oriented programming (OOP) features in Python make it easier to build programs of increasing complexity and modularity. In this course with instructor Joe Marini, learn how to apply core OOP principles to build programs that are extensible and efficient. Joe starts with the basics of defining and using classes and objects. Then he moves into more advanced features like abstract base cla

> [LinkedIn Learning](https://www.linkedin.com/learning/python-object-oriented-programming-22888296) | 1h 56m | Intermediate | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Python object-oriented programming](#python-object-oriented-programming)
  - [What you should know](#what-you-should-know)
  - [Setting up the development environment](#setting-up-the-development-environment)
  - [Using CoderPad](#using-coderpad)
- [**1. Object-Oriented Python**](#1-object-oriented-python) (6 videos)
  - [Object-oriented programming refresher](#object-oriented-programming-refresher)
  - [Basic class definition](#basic-class-definition)
  - [Instance methods and attributes](#instance-methods-and-attributes)
  - [Checking instance types](#checking-instance-types)
  - [Class methods and members](#class-methods-and-members)
  - [Solution: Stocks](#solution-stocks)
- [**2. Inheritance and Composition**](#2-inheritance-and-composition) (6 videos)
  - [Understanding inheritance](#understanding-inheritance)
  - [Abstract base classes](#abstract-base-classes)
  - [Using multiple inheritance](#using-multiple-inheritance)
  - [Interfaces](#interfaces)
  - [Understanding composition](#understanding-composition)
  - [Solution: Stocks and bonds](#solution-stocks-and-bonds)
- [**3. "Magic" Object Methods**](#3-magic-object-methods) (6 videos)
  - [What are magic methods?](#what-are-magic-methods)
  - [String representation](#string-representation)
  - [Equality and comparison](#equality-and-comparison)
  - [Attribute access](#attribute-access)
  - [Callable objects](#callable-objects)
  - [Solution: Compare objects](#solution-compare-objects)
- [**4. Data Classes**](#4-data-classes) (5 videos)
  - [Defining a data class](#defining-a-data-class)
  - [Using post initialization](#using-post-initialization)
  - [Using default values](#using-default-values)
  - [Immutable data classes](#immutable-data-classes)
  - [Solution: Data classes](#solution-data-classes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python object-oriented programming](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/python-object-oriented-programming?u=76281980&t=0)** - In my opinion, two of the best things about the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) language are its power and its simplicity. You can accomplish quite a lot in Python while keeping your programs relatively small and easy to understand. But as your projects get larger and more complex, you'll soon need a way to keep your programs and data organized, extensible, and easy to adapt and change as new team members are brought onto the project. Hi, I'm Joe Marini, and I've been building software some of the best known companies in Silicon Valley for more than 30 years. In this course, we'll cover the [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) features of Python and how they can be put to work in your projects. We'll start with the basics of defining and using classes and objects. Then we'll learn about some of the more advanced features, like abstract base classes and how to implement interfaces. We'll also see how to use some of Python's unique features, like the magic class methods you can use to tightly integrate your objects with the Python language itself. And we'll see how to use Python's data classes to build objects that efficiently store and manipulate information. These techniques will enable you to build programs that are modular, resilient, and extensible. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **CLI Commands:** python (6)
> **Speakers:** - in (1)

#### [What you should know](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start this course, there are some important concepts that you should already be familiar with. First, you should be familiar with using developer tools such as text editors. We're going to be writing [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code in this course and Python is of course just a text format, so you can use whatever text editor you want but I'll be using Visual Studio Code for this course. And specifically, I'll be using Visual Studio Code in an online code space. But if you want to download and work locally on your computer, I suggest you use Visual Studio Code. It's free from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), it runs on Mac and [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and you can download it if you want to from this website, code.[visualstudio.com](https://visualstudio.com). It has a rich ecosystem of plugins available which of course we'll take advantage of in the course. And if you'd like to learn more about Visual Studio Code just go to that link and you'll learn more. Again, though, I'll be using [GitHub](../../Skills/Software%20Development/GitHub.md) and a code space and an online version of Visual Studio Code. You should also already be familiar with the basics of Python programming. You don't need to be an expert but this is not the right place to start, if you're a complete beginner and you don't have any Python experience. I'm going to assume that you already understand the fundamentals of the Python language, such as how to write functions and use conditional statements and define variables, and so on. If you feel like you need to brush up on your basic Python programming skills, you can check out Learning Python or [Python Essential Training](Python%20Essential%20Training.md). You should also be familiar with basic [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) principles such as classes, methods and inheritance, and so on. We're going to be learning about the Python specific details
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-you-should-know?u=76281980&t=96)** of these concepts in this course, but if you need to learn about the basics first, I suggest you watch [Programming Foundations- Object-Oriented Design](Programming%20Foundations-%20Object-Oriented%20Design.md). When you're comfortable with these subjects you are ready to proceed with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (9)
> **Tools:** visual studio (5), github (1)
> **Analogies:** such as (3)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the development environment](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=0)** - [Instructor] There are a couple of different ways you can work with the example code in this course. I've set up a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with the examples. And you can find it at this link. The course content is organized into two separate folders. There's the Finished folder which contains all of the code examples in their finished state so you can compare your code against them as you work through the course. The Start folder contains the code examples in their beginning state. This is the folder I will be working in throughout the course as we build towards the finished state for each example. If you want to download the examples and work with them locally in your computer, then that's easy enough to do. All you need to do is go to the Code menu here, and then in the Local panel, either clone the repository directly to your computer or you can download a zip file and then use your favorite code editor to work on them. You'll just need to make sure that you have [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) installed on your computer, at least version 3.10, in order to use the examples. But this repository has also been set up to work with a GitHub codespace so you could just work directly online with nothing to install. All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a codespace. And you do that here in the [Codespaces](../../Skills/Software%20Development/Codespaces.md) menu. Now, I've already done that. You can see I have a codespace that's active. But you just click on this little plus sign right here and you'll create your own codespace. When you do that, the codespace will spin up. And that might take a minute. So be patient. But when it happens, you'll see something like this. You'll have a browser-based version of Visual Studio Code.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=94)** And you can see that here in the left-hand nav are all the files that you'll need for the course. I've got the Finished folder and the Start folder. You'll also have a built-in terminal which can be found here in the View menu. So I'm going to click on View. And you can see right here we have the Terminal, or you can type Ctrl+Backtick to bring it up. So I'll do that. And there's the terminal. And of course, I can check to see if I've got Python installed by typing python --version. And sure enough, there it is. I've got 3.10.8. You'll also want to make sure that you have the Python extension installed. And if you click on this little side icon with the boxes, you can see that I have Python and Pylance installed. Now, when you make the codespace, Visual Studio Code should prompt you to automatically install these since it is a Python-based project. But if you're not prompted to do that, you can go into the marketplace and just search for them. If you just type Python into the search box, it should be the first result that comes up. I'll close the terminal. This one extension is all you need because it will install both the Python and Pylance extensions for you. The other thing to quickly check is to make sure that the preferences are set properly. So let's go back to our codespace. And I am going to open up the preferences. And you can do that either here in the file menu or just by typing Ctrl+,. And what you're going to want to do is, in the Settings, search for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) execute. And you want to make sure that Execute in File Dir is checked.
>
> **[3:10](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/setting-up-the-development-environment?u=76281980&t=190)** So check that box if it isn't. And that's pretty much all there is to set up. So once you've gone through the preferences, set up your own codespace, and so on, you'll be ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** python (8), make (5), find (1)
> **Tools:** terminal (4), github (3), visual studio (2)
> **Prerequisites:** set up (4), install (3), you'll need (1)
> **UI Navigation:** click on (3), go to (1)
> **Versions:** version 3 (1), 3.10.8 (1)
> **Exercise Files:** download the (1), zip file (1)
> **Cross-References:** go back to (1)

#### [Using CoderPad](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=0)** - [Lecturer] This course includes automated code challenges that appear when you click on the challenge links in the course' table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course' videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas. There are instructions in the top left, a code editor where you will create your answer here in the top right, another code editor where you can see how your code is used in the bottom right, and a console for output in the bottom left. You can use these drag handles to allocate space as you like. And to get even more horizontal space for the code editors, you can collapse the courses table of contents on the left, which you can see I've already done. Each challenge has instructions that include a description of the challenge and the challenge's parameters, and the desired result. Now depending on the challenge, you'll see some additional information in the instructions such as an explanation of the parameters that your code will be given along with some examples of what the expected output might look like. You will create your answer in the top right code editor. There are comments in the starting code showing
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-coderpad?u=76281980&t=94)** where to put your solution. When you click on "Test my code" down here in the bottom right, you will see a message indicating whether your code returned a correct result. So in this case, the correct answer for finding the largest number in the list is going to be return max of numbers. And I'm going to go ahead and click on "Test my code". And you can see here in the console it says, that's right, my code returned 19. Now if your code isn't successful, you can ask for help. Let's go back and change this to the wrong answer. You can see when I click on "Test my code", oh, I get a problem. The show expected result and show hints variables determine whether you see the expected result and any hints. So I'm going to change both of these to true. All right, and then I'm going to click on "Test my code" again. And now you can see over here in the console, I am getting the expected result and there's a little bit of a hint that tells me where to find the right function to be able to use. The code editor in the lower right shows how your solution is used, and in some cases, you can change that code to experiment with different test cases. Now, regardless of whether your answer is successful, you'll see messages in the console in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. And when you've finished each code challenge, you can return to the courses table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [lecturer] (1)


### 1. Object-Oriented Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Object-oriented programming refresher](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=0)** - [Instructor] Before getting into the details of how [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) implements [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), let's have a very quick refresher of some OOP principles. Let's begin with some of the reasons and motivations for using OOP in the first place. First, Python, unlike other languages such as [Java](../../Skills/Software%20Development/Java.md) and C Sharp, does not actually require you to use object oriented principles when creating your programs, even though everything within Python itself is technically an object. If you want to create individual functions and variables and [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) and so on, then you're free to do so. And Python will happily execute your code, as long as it is syntactically correct. As programs become more complex, however, it becomes increasingly difficult to keep everything organized and to ensure that one part of your program isn't having unintended side effects on another part. Using object-oriented programming techniques can help organize and structure your programs, and this makes them easier to plan and maintain and learn by new programmers. With this approach, you build a program that groups together data and the functions that operate on that data in one place. This helps reduce bugs and helps ensure that only the parts of the program that need access to that data have it. Object orientation also promotes the building of modular programs, meaning that individual parts of the program don't need to know how other parts work internally. So down the road, if part of the program needs to be updated or replaced, it can be done with minimal disturbance to the code in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/object-oriented-programming-refresher?u=76281980&t=95)** It also helps isolate different parts of the program from each other. So if a problem occurs in one part of the program, other parts of the program can continue to operate. So now let's take a quick review of some of the terms we'll see in the rest of the course. You can think of a class as a blueprint or a template that describes how to create a specific kind of object. Methods are a fancy way of referring to functions that are part of a class, while attributes are a way of referring to variables or properties that are part of a class definition. An object is a specific instance of a class or a type. For example, the number one is an instance of an integer type. The term inheritance describes how you can arrange classes in a hierarchy, where a particular class can inherit the capabilities and data of another class. And we'll see how this works in Python later. Another important term to understand is composition, which refers to building complex objects out of other objects. And again, we'll see an example of this later. All right, so now that we've had a quick refresher on object-oriented programming terms and principles, we can get started with the rest of the chapter and see how Python puts these into practice. If you're still unsure about some of these terms and principles, I would encourage you to review the What You Should Know video at the start of this course for some direction on where you can learn the basics before continuing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [Java](../../Skills/Software%20Development/Java.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** python (6)
> **Definitions:** is a  (1), is an  (1), refers to (1)
> **Env Vars:** oop (2)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Basic class definition](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=0)** - [Instructor] Let's begin by seeing how to create a basic class definition in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), along with how to instantiate the class and then access parts of it. So here in chapter one in the start folder I'm going to open up the definition_start code and we're going to start by creating a class to represent a book. So to do that, I'm going to use the class keyword. So I type the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) class and then the name of the class. And in this case I'll type the word book and then a colon. You can also optionally add parentheses after the class name, but they're only really required if you're going to indicate that the class inherits from another class. And we'll get to that later in the course. Since our class just exists on its own we can just leave those off. Now, to complete the class definition I can just add a pass statement which doesn't do anything and be done. This is a perfectly legal syntactically correct class definition in Python. Now, obviously it doesn't do anything but I can now create instances of this class by simply calling the class name as a constructor function. So I'll make a variable called book1 and set that equal to book. And these parentheses here are required. This is how you construct an object. Now in reality our classes will contain methods and data attributes. So let's fill out this class a little bit more. First, I'm going to override the built-in init function. So I'm going to get rid of this pass statement and I'm going to write def__init and then two underscores
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=96)** and then I'm going have it take two arguments self and then title. All right, and then colon. And then inside that function, I'm going to write self.title = title. The init function is one of Python's special functions for working with classes. When the class is created, like we see here on line 11 the init function is then called to initialize the new object with information, and it is called before any of the other functions that you've defined in the class. Some people mistakenly call this the constructor function because other languages like [Java](../../Skills/Software%20Development/Java.md) and C Sharp have a similar function that performs a similar purpose but it's more accurate in Python to say that this is the initializer function. At this point, the object has already been created when the function is called, so you know that it's safe to start initializing your data attributes. So now let's update our code to call the book object correctly. I'll create a book and it's going to have a title. So I'll call this one "Brave New World", and then we will create another book. Let's do book 2, and that's going to be a book and I'll call that one, I don't know, "War and Peace" just some light reading, you know? And you may have noticed that the init function takes two arguments, right? Self and title but I'm only supplying one when I create each book. That's because whenever we call a method on a Python object the object itself automatically gets passed
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/basic-class-definition?u=76281980&t=192)** as the first argument. So Python takes care of that. And by the way the word self is not required. You can call this whatever you want. It's just a naming convention. I can call it S or anything else. But most Python programs follow this naming convention to use the word self. Inside the init function you can see I'm creating a new attribute on the object called title and it's being used to hold the title of the book. Once I've done this, I can then access the value of the property using regular dot notation. So for example, I can print out the object itself and I can also print out book1.title. Alright, so let's run what we have. We've written some code it's time to actually exercise it, make sure it works. What I'm going to do is right click on chapter 1 and choose open in integrated terminal. That will open a terminal directly in this folder and then I can run it by simply writing Python and then the name of the script. In this case it's definition_start.py. And when I do that you can see that I print out the object, right, the book1 object, that's this line right here. And then book1.title, that's this line right here. So that gets us up and running with creating Python classes. In the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the chapter we'll see how to work with other kinds of methods and properties and how to identify classes and objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Java](../../Skills/Software%20Development/Java.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (9), make (2)
> **Code Identifiers:** definition_start (2), def__init (1)
> **Definitions:** is called (2), is a  (1)
> **Tools:** terminal (2)
> **File Paths:** definition_start.py (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)

#### [Instance methods and attributes](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=0)** - [Instructor] In the previous video we saw how to define a basic [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) class and create an instance of it. Now let's see how to create instance methods and attributes for our class. So in the editor, let's open up instance_start. And you can see here this is pretty much how we left the code in the previous example. So let's start by filling out the init method a little bit more, since books tend to have more information about them than just their title. So I'm going to add author, pages, and price.
>
> **[0:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=36)** And then I'm going to add those properties down here. So self.author is going to equal the author argument
>
> **[0:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=46)** and we'll do the same for pages and, of course, the price.
>
> **[0:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=57)** So each one of these attributes is called an instance attribute because the value that it holds is only used by the instance of the object that it is declared on. And the same goes for instance methods. So far we only have one, which is the init method, and Python provides that for us, but we can add more, we can add our own. So let's add a method to return the price of a book. And again, remember that every instance method takes an object as the first parameter. So I'm going to define my getprice function and that takes self as its first parameter. And, in this case, it's only parameter and it's going to return self.price. So now we can update our code that uses the book class. So remember, in the previous example we only had title, so let's go ahead and add some author and other information. So "War and Peace" was written by Leo Tolstoy and it's a pretty big book, I think it's got 1,225 pages and we'll give that a price. And the same thing for "Catcher in the Rye." That, of course, was written by JD Salinger and that had 234 pages. And we'll sell that one for 29.95. And then let's make a call to the getprice method. So we'll print out book one and we'll call getprice. All right, so let's run the code that we have.
>
> **[2:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=152)** Once again, I'll open up the terminal and I'll run my script and sure enough you can see that we're printing out the price of book one, which is in fact 39.95. All right, let's go back to the code and I'll Control + Backtick to hide the terminal. So we're not limited to creating instance attributes just within the init function. So let's add another function that specifies a discount for a book that is on sale. So let's create a function. We'll call this one setdiscount. And in this case it's going to take an amount for the discount to be. And we'll simply set self, and I'll name it with an underscore in front of it, and I'll get back to that in a second. I'm going to call it _discount equals amount. Now the underscore in front of the attribute name, the main reason to do this is to give other developers a hint that this attribute is considered internal to the class and is not for public consumption. Other languages like [Java](../../Skills/Software%20Development/Java.md) or C#, have a way of declaring attributes that are only intended to be used within the logic of the class where they are defined. Python doesn't have a way of enforcing this. The underscore in the name basically tells other programmers that this attribute can't be relied on. So don't use it elsewhere in your code, it's only going to exist in this class. So now that we've defined the attribute
>
> **[4:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=245)** we can use it elsewhere in the class. So let's modify the getprice function to use the discount if it is defined. Now, since it was not defined during the init function we can't rely on it being present. So we need to test for it by using a function called hasattr, and it works something like this. I'm going to write if hasattr, which is a function built into Python to check to see if an attribute exists. And I'm going to check for the existence of the attribute on my self object. And I'm going to pass in the string name of the attribute I'm interested in. So if the discount exists, we're going to return self.price minus self.price times self.discount. Otherwise we're going to just return self.price. And then let's go ahead and exercise that. So we'll print out book two's getprice, and then we will call b2.setdiscount and we'll set the discount to be 25%, so 0.25. And then we'll just call getprice again, so I'll copy and paste that. All right, so let's go back to our terminal and let's run the code again.
>
> **[5:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=342)** All right, and so now we can see that we've got book one's price, that's still there. Book two's price starts out as 29.95, but then after we set the discount, it drops down to 22.46. All right, one last thing I want to demonstrate, as I mentioned earlier, the underscore is used to indicate that an attribute, or a method for that matter, is intended only to be used by the class. If you use a double underscore as the start of an attribute or method name then the Python interpreter will change the name of that property so that other classes will get an error if they try to access it. So let's take a look at that. Right, so hide the terminal again. And up here in the init function I'm going to add an attribute named secret. So I'll give it two underscores and then call it secret and just give it some string, "This is a secret attribute." All right, so now let's try to access that attribute. I'm going to print out b2__secret. All right, let's comment out the previous examples. I'll type Ctrl + / to comment those. And then let's go back to the terminal and try to run this. And you can see that when I run this, I'm getting an error, right? Because that property can't be seen outside the class. And you can see the error right here,
>
> **[7:15](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/instance-methods-and-attributes?u=76281980&t=435)** "'Book' object has no attribute '__secret'." However, (chuckles) this is not a perfect mechanism. So the way that Python does this is by prefixing the name of the attribute with the class name. And the main reason for this feature is to prevent subclasses from inadvertently overriding the attribute. But other classes can subvert this by simply using the class name. So if I change the code to be, let's see, b2_Book and then leave the __secret there. Okay, I'm going to run the code again. Let me clear the terminal. And see, now I can access it, right? (chuckles) So it's not a perfect solution for hiding your attributes or methods, but you can use the approach to make sure that your subclasses don't try to use the same name for an attribute that you've already used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** python (6), make (2)
> **Tools:** terminal (6)
> **Versions:** 29.95 (2), 39.95 (1), 0.25 (1), 22.46 (1)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** instance_start (1)
> **Analogies:** for instance (1)

#### [Checking instance types](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=0)** - [Instructor] Sometimes it is useful to be able to check what type or class a given object is. And in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) we can do this with the type function and the isinstance function. So let's open up typecheck_start. And when you have this open, you'll see that we have two classes defined. One is called book and one is called newspaper. And there's also some code that creates some instances of these objects. So let's first use the type function to see what type a given object is. So we're going to do this, I'll print out the result of calling type on B1, which is the book, and then we'll do the same thing for N1, which is the newspaper, you can see I've got those defined right here. And what I'm going to do is open this up in my terminal and I'm going to run this. Alright, so when I run this you can see that B1 is of type book, and N1 is of type newspaper. And the type function is useful because you can use it to compare two different types to see if they are the same. So let's do that in the code. What I'm going to do is print out if the result of calling type on B1 is equal to type of B2,
>
> **[1:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=83)** and you can see that they're both books, so that should be true. Let's add a false condition. So I'll copy and paste that and we'll see if type of B1 is equal to N2 which is a newspaper, right? So let's run this again. And you can see that yes, the books are the same types, but obviously a book is not a newspaper, so that result is now false. To see if a given object is an instance of a particular class, it's much cleaner to use the isinstance function rather than trying to parse the string that come back from the type function. So let's try that next. Here in my code, I'll write print, and now I'll use isinstance. And inside of isinstance, I'm going to see if B1 is a book. And we can do this a couple times, let's try seeing if N1 is a newspaper, and then let's add a false condition. Let's see if N2, which is a newspaper, is a book. And what I'll do is I'm going to scroll up here a little bit and comment out these previous examples. Alright, so let's run this and sure enough, yes, B1 is a book, N1 is a newspaper, and N2 is not a book. It's also possible to use this on subclasses. So we haven't really covered inheritance and subclasses just yet,
>
> **[2:56](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/checking-instance-types?u=76281980&t=176)** but in Python, every object is a subclass of the built-in object class. So we can try that as well. What I'll do is I'll add a call and I'll say print isinstance, and I'm going to check to see if N2 is an instance of the built-in object class. Alright, so let's run that again and actually let's go ahead and let's comment out these first three examples. Alright, so we're going to run this. You can see that N2 is in fact an instance of the generic built-in object class because it inherits from object just like all classes do in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Definitions:** is a  (8), is called (2), is an  (2)
> **CLI Commands:** python (3)
> **Code Identifiers:** typecheck_start (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Class methods and members](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=0)** - [Instructor] Let's finish up this chapter by examining two more kinds of methods and attributes. We're going to take a look at class methods and static methods. So here in my editor, I'm going to open up class_start and there's already some code filled out for the Book class. We've already seen how the init function works and we've already learned about how instance functions work. And we know for example that the set_title function is an instance function that sets the book's title. And the title attribute is an instance attribute because its value is associated with each instance of the object that gets created. So let's start with class level methods and attributes. These are different from their instance versions because they are shared at the class level across all instances of that class. So that might sound a little confusing. So let's take a look at a concrete example. Suppose we wanted to make sure that each book object was assigned a specific book type when it was created such as hardcover or paperback or an ebook. We could define an instance attribute that enumerates these values, but since it's going to apply to all the book objects, it would make more sense to just define it once. What I can do is create an attribute at the class level outside of any of the instance methods. So what I'm going to do is create an attribute named BOOK_TYPES and I'm going to use all caps here to indicate that this is a class attribute
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=94)** and I'm going to define an enumeration or in this case a tuple. And I'm going to say that there is hardcover, there's paperback, and there's ebook. Then I can have the init method take a parameter named booktype. All right. And I can check to make sure that the given type is one of the values that the class allows. So in my init function, I'll write if, not booktype is in Book.BOOK_TYPES, and I have to use the class name to reference this class value right here. So if the book type is not in that tuple I'm going to raise a value error and I'm going to use a little f string here to write that booktype is not a valid book type,
>
> **[2:42](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=162)** otherwise I'll just simply set self.booktype equal to booktype. All right, then I need to change my code that creates book instances. So I'll write b1 = Book and I'll give it just a Title1 and I'll make that a hard cover. All right. And we'll copy and paste that and we'll make Book2, we'll make that a comic book. Alright, so let's also add a class method that returns the book types list. To do this, I need to create a method and use the class method decorator. For class methods, instead of receiving an object instance as the first argument, they receive the class itself as the first argument. So what I'm going to do is create a class method up here. I'm going to write @classmethod and then I'm going to define the classmethod to be get_book_types. And that takes the class as the first argument rather than self. And I'll return the classes BOOK_TYPES. And then let's exercise that. So down here I'll write print
>
> **[4:19](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=259)** Book types and then I'll call Book.get_book_types. Okay, so let's run our updated code. So this should cause an error right here, COMIC. So I'm going to open this in the terminal and we will run the class. And sure enough, you can see we print out the book types. Right? There's HARDCOVER, PAPERBACK and EBOOK, and then we get the value error. Oh, COMIC is not a value book type. So let's go back and comment that out and let's try to run this again. And now you can see that everything works. All right. Let's take a look at static methods. So where instance methods work on specific instances of objects and class methods work on the entire class, static methods are different in that they don't modify the state of either the class or a specific object instance. And I should point out here, there aren't that many great uses for static methods. They are useful, however, for scenarios where you don't need to access any properties of a particular object or the class itself, but where it makes sense for the method to belong to the class. So one good application of static methods is to implement a singleton design pattern. So let's imagine that we wanted our book class to be responsible for keeping track of a list of books. So we could create a global variable for this but it might be a better approach to encapsulate that behavior within the book class. So what I can do, let's go ahead and close this terminal. What I'm going to do is declare
>
> **[5:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=357)** a double underscore attribute named __booklist and I'll initialize that to None. And remember, the double underscore essentially makes this a private variable. We saw this previously. And then I'm going to define a static method that exposes this property to consumers of the book class. So to create a static method, I define a method, right? So I'll define getbooklist, and that takes no arguments, not class, not self, not anything. And then I'm going to check to see if the book list attribute is None and then create a new list if it is. So if Book.__booklist is equal to None, which is what it starts out as, then I'm going to write Book.__booklist is equal to an empty list. Or if it has already been created I'll just return the existing book list.
>
> **[7:11](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=431)** So now let's use this new feature to add our books to a list. Alright, so we'll write thebooks = Book.getbooklist,
>
> **[7:29](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/class-methods-and-members?u=76281980&t=449)** and then we will write thebooks.append and we'll add book one and let's un comment book two and make that PAPERBACK so that it works. And then we'll append b2, and then we'll print out the books. Alright, so let's go back to the terminal and let's run this. And you can see, oh, there's our book types and then we have our books in the book list. And remember, we've ensured that there will only be one of these lists and that the list is contained within the overall book class's logic.

> [!info]- Semantic Content
>
> **Env Vars:** book_types (3), comic (2), paperback (2), hardcover (1), ebook (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** get_book_types (2), class_start (1), set_title (1)
> **Tools:** terminal (3)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Stocks](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=0)** - [Narrator] For this challenge, we needed to create a class to represent information about a company stock symbol. So in my code, I've modified the stock class to override the init function and declare three properties, one each for the ticker, the price, and the company description. And I've also defined a function named get description, which was part of the original requirements. And that function returns a string that combines the values of the properties in the specified order that was required. So let's go ahead and try running this. You can see I've got some sample test code down here for the [Google](../../Glossary/Service/Google.md) stock ticker, and I'm going to test my code, and you can see that my string is being returned correctly. So let's try another one. Let's try IBM and let's make that a different value. And let's make this IBM Corp. And let's run again. All right, and once again, you can see that that's correct. Now, if you encountered an error in your result, try making sure that your description string exactly matches what the requirements were. So, for example, remember that the output string had to have this colon and a space. It had to have these two dashes
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-25250559?u=76281980&t=93)** and the dollar sign. It had to have these properties in the right order. So if I take this dollar sign out and I try to run my code again, you can see that, oh, now I'm getting this incorrect result. So if this happened to you before you get frustrated and give up, just make sure that your string is in the right format that's required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** ibm (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Inheritance and Composition

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding inheritance](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=0)** - [Instructor] One of the core concepts of [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) is the notion of inheritance. And in this example, we're going to see how that works in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Inheritance defines a way for a given class to inherit attributes and methods from one or more super classes. So this makes it easy to centralize common functionality and data in one place instead of having it spread out and duplicated across multiple classes. So let's open up the inheritance_start file. And in this example, you can see I have three classes, there's a Book, Magazine, and Newspaper, and each of one of these classes represents a type of Publication, and each of them has a set of attributes that are relevant to that Publication type. So Books have a title and a price along with the author's name and the number of pages. A Newspaper also has a title and a price, but it has a publisher instead of a single author and it has a Publication period because they're published on a Periodical basis. Magazines are the same, title, price, and they also have a Publication period and a publisher. And you can also see further down in the file, we have some code to create a few sample objects and then access some data on them. So before we do anything else, let's just go ahead and open up the terminal. And let's run what we currently have. And you can see that, when we do this, I'm printing out the author of Book one,
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=95)** the publisher of Newspaper one, and then the price of each, okay. And so at the moment, each of these classes is a standalone implementation, so let's hide the terminal. You can see that each one is its own class, but there's a considerable amount of duplication among the data that each class holds. So for example, all three classes have attributes for title and price, and the Newspaper and Magazine classes also have the same attributes for period and publisher. We can improve the organization of these classes and make it easier to introduce new classes by implementing some inheritance and class hierarchy. So let's start with the most obvious duplication, which is the title and price attributes. So what we could do is define a class named Publication. So let's make a class called Publication. Okay. And then have that class define those common attributes. So we'll put init here and we'll have the Publication class contain the title and price. And so that means that, on this object, we have to set title equal to title, oops, and self.price equal to price. All right.
>
> **[3:12](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=192)** So now we can fix the Book class and have it inherit from the Publication class. To do that, inside these parentheses, I'm going to write Publication. Okay, and then we initialize the super class using the super function. So I'm going to create super and that's a function. And then I'm going to call the init with title and price. And Book no longer has to define title and price in its class because they're now defined in Publication. So I only need to keep the author and pages. Now, we could do the same thing with Newspaper and Magazine classes, but there's some duplication there too. So both of these classes have period and publisher attributes, so that's a pretty good hint that we can collect those in a super class also. So I'm going to create another class named Periodical.
>
> **[4:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=263)** And Periodical is going to inherit from Publication. And of course, we'll have to create the init for Periodical as well. And that will take self, title, price, period, and publisher. And we'll call the super class for title and price. And then we'll have the Periodical class to find the period and the publisher. All right, so now we have a class hierarchy with Publication at the top, which Book inherits from. Then Periodical, which inherits from Publication, and then we're going to change Newspaper and Magazine to inherit from Periodical. So Magazine will inherit from Periodical and so will Newspaper. And then in the init function for each, we call the super class. And remember, in the case of Periodical,
>
> **[5:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-inheritance?u=76281980&t=359)** it takes all of these so that it's going to be, let's see. That's going to be title, price, period, and publisher. There we go. And now we can take off the ones here and we can copy this and paste it here and also take off this guy. All right. Okay, so now we should be able to run our original code, which we haven't touched, notice, right, we're still creating the Book, Newspaper, Magazine the same way. But what we've done is we've gathered all of the duplicated code into super classes so that each one of these classes, Book, Magazine, Newspaper, can take advantage of the fact that they already exist in a super class. So let's bring the terminal back up and let's run again. And sure enough, you can see we get the same output as we had before. So we're getting the same results, but with much better code organization, which is one of the main benefits of inheritance. I can now add properties that are specific to each kind of Publication in just one place. And I only have one place to edit them if I want to change the names of any of these attributes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Tools:** terminal (3), notion (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** inheritance_start (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Abstract base classes](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=0)** - [Instructor] Now that we've seen how inheritance works in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), let's move on to a related topic called abstract base classes. There's a fairly common design pattern in programming where you want to provide a base class that defines a template for other classes to inherit from but with a couple of twists. First, you don't want consumers of your base class to be able to create instances of the base class itself because it's just intended to be a blueprint or a place where you collect some common attributes. And second, you want to enforce the constraint that there are certain methods in the base class that have to be implemented in subclasses. And this is where abstract based classes become really useful. So let's open up abstract_start. And let's imagine that we're building a drawing program that lets the user create different kinds of two dimensional shapes and we want the program to be extensible so that new shape types can be added. You can see here I've defined a base class called graphic shape and it has a function called calc area which is empty, right? It has no base implementation. I have two subclasses, circle and square that inherit from graphic shape. So the scenario here is that we want each shape to inherit from graphic shape. We want to enforce that every shape implements the calc area function for itself. And we want to prevent the graphic shape class itself from being instantiated. Because when you're using the drawing program you're not creating a graphic shape
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=93)** you're creating a specific type of shape, right? A circle, a square, a triangle, and so on. So no one's ever going to instantiate graphic shape by itself. And we want to prevent that from happening. So if I run the code as it is, and you can see I have some sample code down here that exercises our code. So I'm creating a graphic shape and I'm creating a circle and square and calling calc area on each one. So let's run our code as it currently stands. And you can see that none of those constraints are currently enforced. I can instantiate the graphic shape class, calc area if circle and square don't return anything, right? So let's go ahead and fix that. Let's hide the terminal. What I'm going to do is import the ABC module from the standard library. So from ABC, I'm going to import ABC, uppercase which are abstract base classes. And I'm going to import abstract method and we'll get to that in just a moment. So first I'm going to have graphic shape inherit from the ABC class. Then I'm going to use the abstract method decorator on the calc area function. Alright? And I'll leave everything else pretty much by itself. So this indicates to Python that there's no implementation in the base class and each subclass has to override this method. So let's go back to the terminal
>
> **[3:07](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=187)** and let's try to run the code again. And now you see I'm getting an error, right? It says can't instantiate abstract class graphic shape right? So let's comment out the line where instantiating the graphic shape. So we've solved that problem. I can no longer instantiate graphic shape. Let's try running it again. Okay, so now I'm getting another error. And this error is because my subclass didn't implement the calc area method. So I need to fix that. So let's go back to the code. And in the circle, let's add def calc area. And I'm going to return 3.14 times self radius squared.
>
> **[3:59](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=239)** And in the square I'll add calc area and we're going to return self.side times self.side.
>
> **[4:14](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/abstract-base-classes?u=76281980&t=254)** Okay, one more time. Let's run the updated code. Let's clear the terminal first. Okay, now when I run the updated code you can see that everything is working. So abstract based classes can be a very useful tool for enforcing a set of constraints among the consumers of your classes. So it's worth taking the time to experiment with these and understand their benefits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** abc (4)
> **Tools:** terminal (3)
> **CLI Commands:** python (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1), sample code (1)
> **Code Identifiers:** abstract_start (1)
> **Versions:** 3.14 (1)

#### [Using multiple inheritance](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=0)** - [Instructor] Unlike some other popular programming languages, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) lets you define classes that can inherit more than one base class. This is called multiple inheritance and while it can be a useful tool, it can also cause a lot of problems if you don't use it carefully. So let's open up the multiple_start example file and we'll see how to use it the right way. Here in my code I have two classes, A and B, each of which define a property. So prop1 is in class A and prop2 is in class B. And then I have a third class named C which lists both A and B as classes that it inherits from, separated by a comma and this is how you inherit from more than one class. So let's go ahead and add a method to class C to print out the properties. We'll call it showprops. And we'll print out self.prop1 and self.prop2. And then let's call that method after the C object is created. And remember, prop1 and prop2 are going to be inherited from both A and B. Okay, so let's run the code. Bring up the terminal and we'll run. Okay, so we have prop1 and prop2, so everything seems fine. Ah, but what happens when each of the two super classes
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=94)** define the same attribute? Let's add an attribute to each one and see. So I'm going to hide the terminal for a second. I'm going to create self.name and give this the name Class A
>
> **[1:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=111)** and I'm going to create self.name in Class B and give that the value of Class B. Alright, and then let's update the showprops method in class C to show our name. Okay, let's bring the terminal back up and let's run the code again. And, okay, so it looks like class A is the winner somehow. But why is that? When you call a method or access an attribute in Python, the interpreter uses something called the method resolution order to look it up in the class. The lookup starts in the current class, in this case class C, which doesn't define the name property. Then Python looks in the super classes in the order that they are defined from left to right. So since class A is listed first, that's why we're seeing the Class A string in the output. So watch this, if I change the order, if I make B first and then save. Now if I run this again, ah, now we see class B in the output. You can actually inspect the method resolution order by looking at the special class attribute called __mro. So let's go ahead and add that. Let's do C. Let's do print. C.__mro__.
>
> **[3:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-multiple-inheritance?u=76281980&t=205)** Okay, so let's run this again. I'll clear it. Oh, whoops. I need capital C. There we go. It's a class attribute. Okay, let's run it again. Alright, so when I run that, you can see that the resolution order is first class C then class B, then class A and then all the way up to the base object class which is the super class for all objects in Python. And just to make sure that we're doing this correctly, let's change our order back. So if I do A and then B and I run this again, now you can see it's class C first and now A and B have switched places. So this added complexity is one of the main reasons why you don't see a whole lot of multiple inheritance in real world projects. But there is a place where it's useful, and that's in implementing a programming construct called interfaces. And we'll see how that works in a separate video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4), make (2)
> **Tools:** terminal (3)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** multiple_start (1)
> **Speakers:** - [instructor] (1)

#### [Interfaces](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=0)** - [Instructor] In this example, we're going to see how to use a combination of multiple inheritance and abstract base classes to implement a type of programming feature called an interface. Some languages like C# and [Java](../../Skills/Software%20Development/Java.md) provide this feature as a built-in part of the language, but [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) doesn't have explicit language support for this feature. You can think of an interface as a kind of promise. By implementing an interface, a particular class makes a promise, or a contract, as it's often called in software engineering, to provide a certain kind of behavior or capability. So let's open up our interface_start example. And you can see that this is a simplified version of the abstract base class example that we used earlier. So I have my GraphicShape and just my Circle. Suppose we wanted our shape objects to be able to provide the ability to represent themselves as [JSON](../../Skills/Web%20Development/JSON.md). Now we could just make that a part of the GraphicShape base class, but if we had a variety of other objects in our program that we also wanted to have that function, then we would need to add that to each of those base classes as well. And that's just a lot of needless code duplication. What we can do instead is, create another abstract base class and we'll call it JSONify. So I'll make a class called JSONify, and it will inherit from the abstract base classes. And then we'll have this class
>
> **[1:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=92)** define a single abstract method. So I'll add a method called, so I'll put the abstract method in front of it, and it's going to be called toJSON, and it'll just be an empty method for now. Now again, notice that the method does not provide any implementation itself. It just defines the name of the method. We can then add this new class to the definition of the Circle class by putting it in the inheritance list. So remember, this has the effect of requiring that the Circle class has to override and implement the toJSON abstract method. Otherwise, it's an error. In fact, let's go ahead and bring up the terminal, and let's run. And you can see, sure enough we're not implementing toJSON, so we're getting an error, all right? Let's go ahead and implement that function then. And what I'm going to do is return a string, and I'm going to make that an f string. And so it's going to return a JSON string, so I'm going to have it include the name of the object, well in this case it's Circle, and then I'm going to call str on self.calcArea.
>
> **[3:13](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/interfaces?u=76281980&t=193)** And let me make sure that everything is balanced. Looks like it is. And you know what? Just to make this easy to read, let's just use single quotes. All right? And then I'll call that function down here in the exercise code. So I'll print out c.toJSON. All right, and now let's bring up our terminal again, and let's run this. All right, and now you can see the results of the calcArea and the toJSON functions. So what we've essentially done is created a small focus class that we can now use whenever we want another class to be able to indicate that it knows how to represent itself as JSON. We didn't have to modify the base class in order to do this either, which gives us the flexibility to apply this new class anywhere it's needed. Interfaces are really useful for declaring that a class has a capability that it provides. And even though Python doesn't have explicit language support for interfaces, it's flexible enough to be able to implement it with abstract base classes and multiple inheritance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** tojson (5), calcarea (2), interface_start (1)
> **CLI Commands:** make (5), python (2)
> **Env Vars:** json (3)
> **Tools:** terminal (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding composition](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=0)** - [Instructor] Earlier in the chapter, we learned about how [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) implements the concept of inheritance in order to create class hierarchies. In this example, we'll see how we can use a concept called composition to create complex objects out of simpler ones. You might recall that inheritance is an is type of relationship. Here in this class diagram, a book is a publication because it inherits from the publication base class and picks up all the attributes and methods from that base class. Composition works a little bit differently. When using composition, we build objects out of other objects, and this model's more of a has relationship than an is relationship. So in the diagram on the right, the book object has an author object which contains information about the author rather than defining all of the author-related information directly in the Book class. This type of model lets us extract distinct ideas and put them into their own classes. So inheritance and composition, by the way, are not exclusive. You typically combine both depending on what your application's needs are. So let's apply this concept in some real code to see how it works. So here in the editor, let's open up composition_start. So here in my composition example, I've defined a book class that's a little different from the one we've been using so far. There's the title and the price, along with the author's first and last name and an attribute to hold a list of chapter information. There's also a method to add chapters to the book
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=94)** and we have some code to create a book and add some chapters. Now, this particular class definition is all fine and good but it's kind of monolithic, right? There's some pieces of information, like the author and maybe the chapter information that might make sense to treat as separate entities. And it's not hard to imagine a scenario where we might want to work with a group of author information about specific chapters, for example. We can use composition to separate these discrete pieces of information from the overall book object. So first, let's extract the author information into its own class and we'll have the Author class contain the first name and the last name. And so we'll just set those as properties. And let's give that class a nice string representation. So what we're going to do is override the built-in str function
>
> **[2:46](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=166)** and this will return a string representation of the object. And we'll just put in self.fname here and then self.lname. All right? And then we'll modify the book class to take an author object as the argument that defaults to none. So let's go up here and take out authorfname and authorlname
>
> **[3:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=196)** and put in author equals none as the default value. And then we update the book's author property to instead refer to the author object. So now we've created a relationship where a book object has an author associated with it, instead of keeping the implementation details of the author data wrapped up within the book class. We can do the same thing with chapter information. So let's create a separate class called Chapter and once again, we'll define the init function for this. And the chapter will have a name and it will have a page count. And we'll set self.name equals to name and self.pagecount equal to pagecount. All right. And now, of course, we can modify the book's addchapter method to take a chapter object instead of the name and pages. And then instead of adding the name and pages tuple, we'll just go ahead and add the chapter. And so here again, we've created a relationship where a book has a collection of chapter objects. We could even add a method to calculate the number of pages in the book.
>
> **[4:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=291)** So let's do that. Let's add getbookpagecount, and we'll have a result variable. And then for each chapter in self.chapters, let's increment result by the pagecount of that chapter
>
> **[5:16](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=316)** and then we return the result. All right, so now let's go clean up the code that uses these classes. So for now, we create a author object for the book constructor. So let's have auth equal be Author, and that's going to be Leo. Whoops. There we go. And Tolstoy. And then we add that author object here when we create the book. And now we addchapter objects to the book instead of chapter arguments, like strings and numbers. So that's easy enough to fix. We'll just simply create a Chapter constructor here and do the same thing for each one. All right. Okay. And now we get some separation of responsibilities among the classes. So for example, printing the full name of the author is done within the author class. So let's go ahead and print that out. Print bq.author and calculating the book size is done by using the data in the chapter class. So we'll print b1.getbookpagecount. All right, time to bring up the terminal
>
> **[6:57](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/understanding-composition?u=76281980&t=417)** and let's run this. And oh, whoops, looks like I've got an error in there. And that's because it looks like, oh yes, it's not self.name, it's self.fname. Good catch there, Python. Let's try this again. There we go. Okay, so you can see that the title is unchanged but now the author name is printed using the Author class's str override function. And we can ask the book how many pages it is by adding up each chapter's page counts. So we've taken a monolithic class definition and made it more extensible and flexible by composing it from simpler class objects, each of which is responsible for its own features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), make (1)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** composition_start (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Stocks and bonds](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=0)** - [Instructor] All right, let's review my solution to this challenge. For this challenge, we needed to create a class hierarchy to represent both stocks and bonds and use inheritance along with an abstract base class. So in my code, I used the asset base class to hold the price property, which is common to both stock and bond objects. And then I have the stock and bond class definitions. They use the asset class as their parent class, and they define their own properties for the specific information to that type of asset. So for stocks, we have the ticker symbol and the company name. For bonds, we have the name, duration, and interest rate. And we also needed to make sure that the asset class itself could not be instantiated, and we needed to require that subclasses override the get description function. So that calls for using an abstract base class with an abstract method. And you can see up here I've imported both ABC, and abstract method from the ABC module, asset inheritance from the abstract based class, and implements an abstract method, which means that both of my subclasses are required to override get description, which they both do. All right, so let's go ahead and run this code
>
> **[1:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-stocks-and-bonds-25246656?u=76281980&t=92)** with our test code. And you can see that our test code for the company information, we're going to use the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) ticker. And for the bond we're going to use the 30-year treasury. And here's our test code that instantiates both stocks and bonds. So when I run this, you can see that we get the correct result. And again, remember if you got an error here in the formatting of the string, make sure that the get description strings that you're returning match the specifications exactly. Because if you're forgetting a space or you're forgetting a character, that's going to produce an incorrect result. All right, well that is my solution. So how does it compare to yours?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** abc (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. "Magic" Object Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [What are magic methods?](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/what-are-magic-methods?u=76281980&t=0)** - [Instructor] In this chapter, we're going to spend some time learning about [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s so-called "magic" methods, which are a set of methods that Python automatically associates with every class definition. Your classes can override these methods to customize a variety of behavior and make them act just like built-in Python classes. There are quite a few of these methods and I'm not going to cover all of them. Instead, I'm going to demonstrate the ones that are most useful and commonly employed in code that you'll run across. Using these methods, you can customize how your objects are represented as strings, both for display to the user and for debugging purposes. You can control how attributes are accessed on an object both for when they are set and when they're retrieved. You can add capabilities to your classes that enable them to be used in expressions such as testing for equality and other comparison operations like greater than or less than. And then finally, we'll see how to make an object callable just like a function and how that can be used to make code more concise and readable. Features like these are what gives Python its flexibility and power, and in this chapter we'll see examples of how they can be put to good use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4), make (3)
> **Analogies:** just like (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [String representation](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=0)** - [Instructor] The first set of magic methods we're going to learn about are the ones that [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) uses to generate string representations of objects. And we saw a little peek of this in the prior chapter when we worked on object composition. Let's open up magic str start, and you can see that I have my book class defined with some properties along with a couple of statements to create book objects. There are two magic string functions, str and repr. The str function is used to provide a user-friendly string description of the object and is usually intended to be displayed to the user. The repr function is used to generate a more developer facing string that ideally can be used to recreate the object in its current state. It's also commonly used for debugging purposes so it gets used a lot to display detailed information. These functions get invoked on an object in a variety of ways. For example, when you call the print function and pass in the object or when you use the str and repr casting functions that's when these magic methods get run. So let's run our code as it currently is before we override these functions you can see that I'm creating two book objects and then printing them out here at the bottom of the code. So let's open up our terminal and let's go ahead and run Magic str. And when I do this, you can see that I get these vague strings that identify the class and the location in memory, which you know isn't really very useful.
>
> **[1:35](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=95)** So let's go ahead and add the str function. I'm going to hide the terminal. So let's override str function by putting it in. And that doesn't take any arguments, just the object itself. And we're going to return an F string that contains self.title by self.author
>
> **[2:03](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=123)** and costs self.price. Alright, let's bring that terminal back up again. Let's try this again. And, oh, that's much better. Look at the comparison between those two. You've got nice strings down here instead of these vague object strings, right? This shows me all the information I want to see about each book. Okay, let's add the repr function. And repr also returns the string but it's going to be formatted slightly different. I'm going to have just show all the attributes. Title equals self.title, author is self.author and price equals self.price.
>
> **[3:02](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/string-representation?u=76281980&t=182)** Okay, and let's also add a couple more function calls to convert the book objects to strings by using str and reper directly. So we'll print str B1 and then we'll print repr of B2. Alright, and now let's run the code again. So now you can see that when I print the objects or call str directly the str function gets used while the repr function call uses the repr result instead. So str and printing is what gives you the str function result. If you call repr directly then that's what invokes this override right here. Each of these functions is totally optional for you to override, but it's usually a pretty good idea to at least define the repr function for classes that you create in order to make debugging easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Tools:** terminal (3)
> **CLI Commands:** python (1), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Equality and comparison](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=0)** - [Speaker] Plain objects in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) by default don't know how to compare themselves to each other, but we can teach them how to do so by using the equality and comparison magic methods. So let's open up magic EQ start. And once again, you can see I have my book class defined with some attributes, and we've got a few variables down here that we use to create and hold some book objects. B1 and B3 both contain the same information, but watch what happens when we try to compare them to each other. So I'm going to print out B1 double equals B3. Now again, remember same values in the attributes, right? But watch what happens. I'm going to open the terminal and run. You can see that the result is false, but wait a second they have the same data, same title, right? Same author, same price. Even though all the attributes are the same, the result is false. And the reason this happens is because Python doesn't do an attribute by attribute comparison on objects. It just compares two different instances to each other and sees that they're not the same object in memory and therefore they're not the same. Python's flexibility gives us an easy object oriented way of addressing this problem. The magic method named double underscore EQ, gets called on your object when it is compared to another object. So let's go ahead and add that.
>
> **[1:37](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=97)** And that takes the self and it also takes value. Or we can call it whatever you want. You can call it the other object. Up to you. So to see if two books are equal, we can just compare the attributes of each one. So let's return whether self.title is equal to value.title, and self.author is the same as value.author, and self.price is equal to value.price. We should also make sure that we throw in an exception if we're past an object that is not a book to compare against. So if not is instance, and we learned about is instance earlier remember. So if value is not a book, then let's raise a value error and say that we can't compare book to a non-book.
>
> **[2:53](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=173)** Okay. So now that we have that code in place, we can perform the comparison again. So now let's try adding a case where we know they're not the same. So books B1 and B2 are not the same. So this one B1 to B3 should be true. B1 to B2 should be false. Let's bring up our terminal again and let's run it. And now you can see that yes B1 and B3 are the same, and B1 and B2 are not the same. And let's see what happens when we try to compare a book against a non-book object. Let's print out B1 is equal to the life, the universe, and everything, or as is more commonly known, 42. And you can see that we now get a value error exception that says can't compare a book to a non-book. All right, let's go ahead and comment that out. All right. So, by overriding the underscore underscore EQ function, we've essentially added the ability to test for equality to our book object. And we can also perform other kinds of comparisons by overriding the corresponding magic method. So let's add the ability to perform comparisons to our book class, and in this case where we want to be able to perform a greater than or equal to comparison, like this. Suppose I wanted to be able to say, "Hey, is B2 greater than or equal to B1?" I also want to be able to say, "Is B2 less than B1?"
>
> **[4:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=276)** So there are magic methods to correspond to all of the different kinds of logical operators. Now that's a lot of methods so I'm not going to demonstrate all of them, but let's go ahead and add support for both of these. Okay, let's hide our terminal. All right, so let's override. Underscore underscore GE for greater than or equal to.
>
> **[5:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=309)** And once again, I'm going to raise exception if it's not a book. Otherwise we have to have some way of saying, you know, is this book greater than or equal to the other book? Just to keep things simple, I'm going to return if self.price is greater than or equal to value.price. So we're going to compare ourselves to the other book, and we'll use price as the comparison and we'll do the same thing for less than. So I'll copy this code and paste it, and just change this to underscore underscore LT. You might have guessed there's also an LE for less than or equal to, right? And in addition to GE, there's GT for greater than. So there's a whole bunch of these and for less than we'll just simply change this to be the less than sign. Okay, so now let's run the code, because we've added the comparison operators down here. So let's bring our terminal back up and clear it. And just to keep the output pretty let's comment out the previous examples. All right, let's run this. And sure enough, B2 is not greater than or equal to B1, right? 'Cause the price 29.5 is not greater than 39.95. That's correct.
>
> **[6:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=400)** B2 is less than B1. Oh, I made a mistake that should be less than, there we go. Let's run it again. And you can see that now, yes, 29.95 is in fact less than 39.95. So what's really neat about this is now that we've added the less than calculation support we automatically gain the ability for our books to be sortable. So let's see how that works. Inside the terminal. Let's make a quick list of our book objects in an order that we know is not sorted. So I'll have books and I'll make a list, and I'll do B1, and B3, and B2, and B4. So these are not sorted in order of price. You can see that that's the attribute that we're using to calculate whether something is less than or greater than or equal to. All right, so the built-in sort function uses the less than operator to perform sorting. So now we can do this, books.sort, and then we can print out. I'll use a comprehension here. We'll print out book title for each book in books. All right, so let's bring our terminal back up and let's clear it. And oh, let's comment out the previous example. All right, so let's run our code.
>
> **[8:18](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/equality-and-comparison?u=76281980&t=498)** And now you can see that our books are all sorted from low to high based on price. So "Kill a Mockingbird" should come first, 'cause that's 24.95. Then "Catcher in the Rye." Yeah, that's 29. And then "War and Peace" come next, because those are both 39.95. So like I said, there's a lot of these methods you can implement in your classes and they're documented in the data model documentation at this link. So if you go to this page in the Python documentation and click on special method names, you can scroll through and read all of these on your own time and at your own pace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4), make (3)
> **Versions:** 39.95 (3), 29.5 (1), 29.95 (1), 24.95 (1)
> **Tools:** terminal (6)
> **UI Navigation:** open the (1), go to (1), click on (1)
> **Speakers:** - [speaker] (1)

#### [Attribute access](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s Magic methods also give you complete control over how an object's attributes are accessed. Your class can define methods that intercept the process anytime an attribute is set or retrieved. So here in chapter 3, let's open up the magic attributes start and let's see how this works. So here in the code, I have my book class which defines some attributes and it also overrides the str function that we learned about earlier. So let's start off by seeing how we can control when an attribute is retrieved. Python lets us define a method called underscore underscore get attribute, which is called whenever the value of an attribute is retrieved. So let's add that. Okay. And I'll get rid of some of this extraneous stuff in here. Alright. This gives us the opportunity to perform any operations on the value before it is returned. So, for example, you can see that we have an internal attribute here named discount. So let's imagine that we wanted to automatically apply the discount whenever the price attribute is retrieved. So first, we can check the name argument to see which attribute is being accessed and make sure it's the price one. So let's go ahead and add if name is equal to price. Okay, now here's where things get a little tricky.
>
> **[1:36](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=96)** Since we are in the function that gets called when and attribute is accessed, we can't access an attribute in here. Otherwise, we'll just keep triggering this function over and over again and it will eventually crash. So what we need to do is get the value of the price attribute by calling the super class version of get attribute. So what I'm going to do is make a variable named P and I'm going to call the super classes version of get attribute, and I'm going to ask for price. And I'll do the same thing to get the discount.
>
> **[2:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=141)** And then I'm going to return P, the price minus the price times the discount. And if we're not operating on the price attribute, then I'm going to just simply call the super class' get attribute so everything works normally and I don't break anything. So I'm just going to call return and I'm going to call the super class get attribute with whatever name I was given. So this code executes, if I'm looking for the price and any other attribute will go through the normal process. So let's try setting the price and then printing out the value of the book. All right, so, let's do b1.price is equal to 38.95 and then we'll print b1. And remember, print b1 because I've overridden str will give me a nice string to look at. So let's open up our terminal. And let's run magic attribute start. And sure enough you can see that even though I set the price to 38.95, I'm getting a discounted value of 35.005 here. And the other attributes are unaffected, right? You can see that War and Peace and the author, those were not affected. The only thing that got affected was the price attribute. We can also control the setting of an attribute
>
> **[3:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=235)** by overriding the setattr function. So let's try that next. And I'll go ahead and hide the terminal. So let's add setattr, and let's get rid of some of this extraneous decoration that gets added on here. Okay. So in this case, let's use the setattr method to enforce that when the price attribute is set, the caller is using a floating point number. So once again, we're going to check to see if name is equal to price. We're going to check to see if the type of the value is not float. Then raise a value error saying the price attribute must be a float. If we pass the test, then we'll just call the super classes version of set attribute, and we'll do that outside the if. Alright, so once again, let's try this out. I'm going to try to set the price of the book to an integer value. All right. And then we'll print it. So let's bring up the terminal. Ah, and you can see, I'm getting an exception
>
> **[5:30](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=330)** because I didn't pass in a floating point number. Now I can either fix that problem by using a float or I can just cast this integer to a float. Let's just do that. Let's try this again. And now it works. Okay. Let's do one more example. There's another magic method that lets us customize the retrieval of attributes but it only gets called if the attribute doesn't actually exist on the object. So let's hide the terminal and instead of using get attribute, the full spelling, we're going to use getattr. So let's go ahead and define getattr. So, this function only gets called if the get attribute version isn't defined. If I don't define this function right here, then this will get used or if it throws an exception or if the attribute doesn't actually exist. So let's add some code to try this out. I'm going to just simply return the string name + is not here. All right. So now let's try accessing a random attribute on the book that we know doesn't exist. Let me comment out that line. So I'll call b1.random prop.
>
> **[7:05](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/attribute-access?u=76281980&t=425)** Obviously there's no such thing as random prop anywhere in here. Alright, let's bring up the terminal. And you can see that when I do that, it says random prop is not here. Because since it couldn't find the attribute, it calls this function instead. Now, you could use this to generate attributes on the fly or if you wanted to extend the syntax for accessing attributes. But just like the other methods, you need to be careful that you don't enter into a recursive loop. But by using these attribute methods, Python gives you a great amount of flexibility and control over how attributes are accessed in your classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), make (2), find (1)
> **Tools:** terminal (5)
> **Versions:** 38.95 (2), 35.005 (1)
> **Analogies:** for example (1), imagine (1), just like (1)
> **Definitions:** is called (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Callable objects](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=0)** - [Instructor] To finish up this chapter, we'll take a look at the magic method that enables [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) objects to be callable, just like any other function. Now, that might sound a little bit weird but it's easy to understand it when you see it in action. So let's open up the example code in magiccall_start. And you can see that once again, I've got my Book class and it's already implementing the str function that we learned about earlier. And I also have some code that creates a couple of book instances with titles and authors and prices. So what I'm going to do is override the __call function that lets me treat an instance of the object, like a function and I'll define the function to take the same parameters as the init function. You can also define the function to take a variable number of arguments, but that's a little more advanced. And I want to focus here on the feature itself. So what I'm going to do is add a function named def __call and that takes the object itself, along with whatever other arguments I want to add to this. So I'll add title, author, and price. And then for the function body, I'll just assign the parameters to the object attributes. Okay, so let's go ahead and try this out. So first, I'm going to print out the book b1. Then I'm going to call the object
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/callable-objects?u=76281980&t=94)** like a function to change the values of the object attributes. So now I've got b1, but rather than treating it like an object and doing a dot notation, I'm actually going to put some parentheses next to it and I'm going to change the value of the book's data. So let's see, I'll change the title to "Anna Karenina" and that's also by Leo Tolstoy. And it's 49.95. And then I'll print the book again. And remember, each time, I print out the book that's where the str function will get used. So let's try this out. Python magiccall. And you can see that when I run the code, I'm changing the values of the object's attributes by calling the object with new values. And that's one of the benefits of this technique. If you have objects whose attributes change frequently or are often modified together, this can result in more compact code that's also easier to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Code Identifiers:** magiccall_start (1)
> **Versions:** 49.95 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Compare objects](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=0)** - [Instructor] For this challenge, we needed to implement the comparison magic methods in order to make our stock objects comparable to each other. There are five methods that we need to implement. There's equal, less than, greater than, and less than or equal and greater than or equal. So here in my solution you can see that I've implemented each of these five methods, and they use the price property to determine the comparison. So let's go ahead and try this out. And here is the testing code. So we have two ticker symbols with two different prices and company descriptions. Here is the code that instantiates each one of these assets and then compares them using our operators. So let's go ahead and try this out. All right, and you can see that the code works. So let's see. Is equal is False because the prices are not the same. Is less than is True because price1 is in fact less than price2, which, of course, means that is greater than is going to be False. Is less than or equal, also True for obvious reasons, and greater than or equal is False. Okay, let's try changing the order of the prices. So let's make this 105 and let's make this 101, and let's run again. All right, in this case,
>
> **[1:32](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-compare-objects?u=76281980&t=92)** you can see the answers are now different. So they're not equal. price1 is not less than price2, so that's False. price1 is greater than price2, so that's True. Less than or equal to is False, and greater than or equal to also True.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining a data class](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=0)** - [Voiceover] As we've been working through the course you may have noticed a pattern with each of our examples so far, and that is that one of the main use cases for creating classes in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is to contain and represent data. Our code creates classes, and let's go ahead and open up the data class underscore start example. So our code creates classes like this book class here in our start file and then uses the init function to store values on the instance of the class. And you might be wondering, "Well if this is such a common pattern then why doesn't Python just automate this? Why do I have to explicitly store each argument on the object by setting attributes on the self parameter?" Well, starting back in 3.7 which was released a little while ago, you actually don't need to do this anymore. In 3.7 Python introduced a new feature called the Data Class which helps to automate the creation and managing of classes that mostly exist just to hold and manipulate data. And that's what we're going to focus on in this chapter. So let's begin by converting this book class into a version that uses a data class. So first, we need to import the data class from the data classes module. So from data classes, I'm going to import data class. Next, we use the data class decorator to indicate that the book class will be a data class. So I'll just add at data class here. All right.
>
> **[1:34](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=94)** Then we need to get rid of the init function and then list the attributes for the data class and annotate each one with one of the new type hints that were introduced back in Python 3.5. So let's get rid of the init function and let's un-indent those a little bit and let's get rid of all the self stuff. So we'll just have title, author, pages and price. And now I have to annotate each of these with what their type is. So title is going to be a stir, oops. Author is also going to be a stir. Pages will be an integer, and price is going to be a float. And guess what? That's pretty much all we have to do. Now there's quite a bit going on here. So let me explain. At first glance, it looks like what we're doing is defining class attributes instead of instance attributes. But what's going to happen is that the data class decorator code will actually rewrite this class to automatically add in the init function where each of these attributes will be initialized on the object instance. The second thing, you notice that these type hints they are required for data classes to work but in keeping with Python's philosophy of being flexible, the type isn't actually enforced. And you can see I have some existing code down
>
> **[3:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=189)** here that creates book instances and we don't even need to change our existing code as long as the parameters are passed in the same order. So as long as the parameters in each one of these construction statements is in the same order as what the attributes are declared on in the book class, that should just work. So let's go ahead and run our code as it stands so far and you can see that in the output here I've got, I'm printing out the title of book one and the author of book two, and it just works. We didn't have to change our code to use the new data class but data classes have more benefits than just concise code declaration. They also automatically implement both the repper and EQ magic methods that we learned about earlier in the course. So what I'm going to do is add a statement here to print out the book object. So print b1, and that will automatically use repper and then we can compare two objects with each other. So I'll make another book object that has the same values as b1. So let's copy that and paste it. I'll call that b3. All right. And then let's add a comparison operation. So I'll print: is b1 the same as b3? And then just for the sake of comparison,
>
> **[4:43](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=283)** we'll also do that with b1 and b2. Alright, and now let's run our code again. Okay. And you can see, sure enough when I print b1, right, I get a nice output statement. It has all the attributes, it has the name of the class and that's automatic just from using the data class. And then the comparison, right? b1 and b3 are the same. So that's true. b1 and b2, that's not the same. So that's false. So rather than having to go and manually override the equality comparison operator, I just get it for free when I use a data class. Okay, one more thing to demonstrate for our introduction to data class. They're just like any other Python classes, they're not different in some way. So if I want to add a regular Python method to my class it's pretty straightforward to do so. So let's go ahead up to my data class and I'm going to define a function named book info. And that function is going to return an F string and it'll be self dot title by self dot author. Alright, and then let's go ahead and modify some of the attributes of a book. So I'll change b1's title and we'll change the pages and then we'll print out
>
> **[6:21](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/defining-a-data-class?u=76281980&t=381)** b1 dot book info. All right, let's bring our, let's bring our terminal back up. Before I bring the terminal up let's just go ahead and comment out these previous examples. All right, here's my terminal. Let's clear that and try it again. And sure enough, you can see that our regular Python method works just as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8)
> **CLI Commands:** python (8), make (1)
> **Versions:** 3.7 (2), python 3 (1)
> **Tools:** terminal (3)
> **Analogies:** just like (1)
> **Speakers:** - [voiceover] (1)

#### [Using post initialization](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=0)** - [Instructor] At this point, you might be wondering how you can perform additional object initialization if the data class automates the init function. So, for example, we might want to create attributes on our book class that depend on the values of other attributes. To accomplish this, the data class provides a special function named postinit that you can override, and it will be called for you after the built-in init function has finished. So let's open up postinit_start. Let's add an attribute that combines the title and the author string for our data class. So what I need to do is override postinit, and then, let's make an attribute that combines the title and author values, and we'll call that description self.title. Oh, whoops, got to put that in curly braces, by self.author, and let's add the pages as well, self.pages. Okay, so when the data class gets finished initializing the main attributes, this function will get called, and any additional attributes we want to be created can be added here. And then, let's add some code to try out this new attribute below the code
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=93)** that's already there to create the books. So I'll print out b1.description, and we'll print out b2.description as well. Okay, so let's go ahead and run this code.
>
> **[1:55](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-post-initialization?u=76281980&t=115)** And sure enough, you can see that the new attribute combines both the title and the author and the pages.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** postinit_start (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Using default values](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=0)** - [Instructor] Data classes provide the ability to define default values for their attributes, subject to some rules. So let's open up the code for data default start and let's try this out and see how it works. So you can specify default values for attributes just as if you had to declared them in the int function for the class. So let's add some default values to our book class. And this is as simple as just adding the equal sign and then the value you want to be the default. So I'll just add string defaults for this. One page will default to zero and the price will default to 0.0. And now I can create a book object that has no arguments.
>
> **[0:51](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=51)** Alright? Okay. So let's run what we have so far. All right, and when I run this, you can see that the book object was created with the default values. So one of the things you have to be aware of with default values is that attributes without default values have to come first. So for example, if I remove the default value from the price and then I try to run the code again, you see that I'm getting an error because you see it says here non-default argument price follows the default argument. So items without defaults have to come first. So let's just go ahead and put that back and let's clear the terminal. Another way of defining a default value is by using the field function which provides a little more flexibility. So first I'm going to import the field class from the data class module and let's hide our terminal. So I'm going to import data class and field. All right, and now that I've got the field function, I'm going to use the field function to specify a default value. So in this case a price. I'll use the field function and I'll use the default argument to set it equal to 10.0. Now, obviously that's not much better than just simply specifying 10.0 right here
>
> **[2:25](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=145)** but it does get a little bit more interesting. So just bear with me. So now let's add some code to create a couple of books with non-default data except for the price.
>
> **[2:40](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=160)** And we'll add this book and we'll print out B2 and B3. Okay, so let's run the code again and actually let's comment out the previous example. So let's run this. All right. And you can see that now the result shows that the default for the price is 10 but we can do a little bit better than that. We can also specify a function that gets called in order to provide the default value. So it's clear the terminal. Let's make a slight modification. I'm going to change the argument from default to default factory. And I'm going to define a function that's going to provide the default value, and I'll call it price func. So this function you're about to define price func takes zero arguments and returns the default value that should be used. So I'm going to have a price func that randomly generates a price between 20 and 40. So that means I'm going to need a random number. So I'll import the random module and then I'm going to write a price function. So I'll create a function called price func which takes no arguments and that's going to generate a random price. So I'm going to return a floating point number and I'm going to call random.randomrange between 20 and 40.
>
> **[4:23](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/using-default-values?u=76281980&t=263)** Alright, so I've got my price func I've got it specified here as the default factory. So let's try running the code again and let's start with a clear terminal. And there you can see that I'm going to run it a couple times. And you can see that the default value for the price changes each time, right? And it's always between 20 and 40. Alright? So you can see that there are various ways to provide default values for data class attributes either from specifying them directly in the attribute list to calling a function that can generate the value dynamically.

> [!info]- Semantic Content
>
> **Tools:** terminal (4)
> **Versions:** 10.0 (2), 0.0 (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Immutable data classes](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=0)** - [Instructor] Occasionally you'll want to create classes whose data can't be changed. In other words, you want the data within them to be immutable. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) data classes make this possible by specifying an argument to the data class decorator. So let's open up immutable start. And you can see here that I have a simple data class with a couple of attributes, a string and an integer along with some code that creates the object and prints out the object's value. In fact, let's just go ahead and add both value one and value two. Okay, so before we do anything else let's just run the code to make sure it works. And sure enough, yes, it prints out value one and then the number zero. So to make this class immutable I can set the frozen argument to true in the data class decorator. So let's hide the terminal and inside the data class decorator here I'm going to write frozen equals true. So now this prevents any of the attributes in the class definition from being modified. And I'll add some code to try and do just that. We'll set obj dot value one to be another string
>
> **[1:20](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=80)** and then we'll try to print it out again. All right, so now let's try to run our updated code. And you can see that when I do that I get a frozen instance error. And you can see it says, cannot assign to field value one. This also prevents, by the way modification within the class itself. So let's hide the terminal and within the class let's add a function. And I'm just going to call it, I don't know, some func and it'll take a new value. And then self dot value two equals new val.
>
> **[2:09](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/immutable-data-classes?u=76281980&t=129)** All right, and then let's call that function. Okay. And let's comment out the previous example. All right, so let's run once more and bring up the terminal. And once again you can see I'm getting the frozen instance error. And in this case it says you can't assign to field value two. And that's happening within the function that's within the class itself. Now I am allowed to change the value of the attributes at construction time. So let's try that out. Let's hide the terminal. And what I'm going to do is when I create the class I'm going to pass in another string and 20 as the value for the integer. And then I'll leave this function call in place. So let's bring up the terminal again and let's run. And you can see that when I create the class another string and 20 took effect, right? So the attributes got changed, but once the class is done being initialized, once it's been instantiated, you can't change the attributes. And that's where this function is now failing. So creating frozen data classes can be useful when you want the class to represent data that you know isn't going to change. And with the data class decorator and the frozen argument, that's really easy to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Tools:** terminal (5)
> **CLI Commands:** make (3), python (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Data classes](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=0)** - [Instructor] All right, for this challenge we had to convert an existing class structure to use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) data classes. So of course we need to import that module, which I did here. And then I redefined each class using the data class decorator. The base asset class contains the price property. Since that property is common to both bonds and stocks and it's declared as being a float. And then I declared the stock and bond data classes with their properties. So the stock class gets the ticker and description, which are both strings, and the bond class gets the description, duration, and interest rate properties. The asset class also had to override the comparison magic methods to support comparison operations and I put this logic in the asset class because the price property is common to both stocks and bonds and this enables us to compare stock and bond objects to each other directly. And one of the other things we needed to do to make this work correctly is remember to add the EQ equals false parameter to the data class definition and I had to do this for each of the data classes. I added this in the hint section for the challenge, so hopefully you read it and picked up on it. The reason you need to do this is because remember, data classes implement
>
> **[1:33](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/solution-data-classes-25249570?u=76281980&t=93)** a default EQ method for you. So if you want to define your own EQ method and we do, then you need to tell the data class not to do that for you. Alright, so let's go ahead and run the finished code. And you can see here in the test code we've got a stock and a bond and I'll go ahead and run the current code and we can see that the is equal is false, which is what it should be, less than, is also false because 200 is not less than 100, which means of course the greater than will be true. And same results for less than or equal to and greater than or equal to. So let's go ahead and switch the roles. Let's make this 20 and run the code again. And now you can see we're getting different results based on the comparisons. And then finally, let's make them equal to each other and now you can see that the result is true for is equal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (3), python (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-object-oriented-programming-22888296/next-steps?u=76281980&t=0)** - All right. It looks like you made it to the end of the course. I hope you enjoyed learning about how the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) language uses [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) techniques, and maybe you've picked up some ideas about how to apply these principles in your own Python programs. As I said at the beginning of the course, it's not required to use object-oriented programming with Python, but I think that once you get started with it and you've experienced the benefits, you'll be reluctant to go back to writing code the old non-object-based way. There are plenty of other Python focused courses to explore while you're here, so I suggest checking a few of them out. I hope to see you again soon in another one of my courses. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2)
> **CLI Commands:** python (4)
> **Prerequisites:** required to (1)
> **Speakers:** - all (1)


## Instructor

- [Joe Marini](../../Instructors/Software%20Development/Joe%20Marini.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-object-oriented-programming-4413110/codespaces)

## Skills Covered

- Python (Programming Language)
- Object-Oriented Programming (OOP)

## Path Context

### In [OpenEDG Python Institute- Programming with Python Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/OpenEDG%20Python%20Institute-%20Programming%20with%20Python%20Professional%20Certificate.md)
← [Python Essential Training](Python%20Essential%20Training.md) | **2 of 3** | [Level Up- Python](Level%20Up-%20Python.md) →

### In [Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)
← [Learning Python](../Data%20Science/Learning%20Python.md) | **3 of 8** | [Learning the Python 3 Standard Library](../Data%20Science/Learning%20the%20Python%203%20Standard%20Library.md) →

## Part of

- [OpenEDG Python Institute- Programming with Python Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/OpenEDG%20Python%20Institute-%20Programming%20with%20Python%20Professional%20Certificate.md)

## Appears In

- [OpenEDG Python Institute- Programming with Python Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/OpenEDG%20Python%20Institute-%20Programming%20with%20Python%20Professional%20Certificate.md)
- [Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)

## Related Courses

_Courses sharing skills:_

- [Python Practice- Object-Oriented Programming](Python%20Practice-%20Object-Oriented%20Programming.md) — Python (Programming Language), Object-Oriented Programming (OOP)
- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)

---

[↑ Back to top](#)