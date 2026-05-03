---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-delegates-events-and-lambdas-14503458
url: "https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458"
duration_minutes: 67
duration: 1h 7m
level: Intermediate
updated: 12/14/2023
learners: 20727
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-delegates-events-and-lambdas-3006906"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFKly2MCihgYw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642535785778?e=2147483647&amp;v=beta&amp;t=6i9V1OUzqaOx9JScjKsrMEgApKMLmJhuMWYLM5kWapk"
linkedin_topic: Software Development
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
  - '[[Getting Started as a C- Developer]]'
prev_courses:
  - '[[Object Oriented Programming With C Sharp]]'
  - '[[C Sharp Algorithms]]'
next_courses:
  - '[[C- Interfaces and Generics]]'
  - '[[C- Interfaces and Generics]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":2,"total":8,"prev":"Object Oriented Programming With C Sharp","next":"C- Interfaces and Generics"},{"path":"Getting Started as a C- Developer","position":5,"total":9,"prev":"C Sharp Algorithms","next":"C- Interfaces and Generics"}]'
path_count: 2
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Delegates%2C%20Events%2C%20and%20Lambdas.md)

![C#: Delegates, Events, and Lambdas](https://media.licdn.com/dms/image/v2/C560DAQFKly2MCihgYw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642535785778?e=2147483647&amp;v=beta&amp;t=6i9V1OUzqaOx9JScjKsrMEgApKMLmJhuMWYLM5kWapk)

# C#: Delegates, Events, and Lambdas

> C# provides different function types to fit a variety of real-world development scenarios. In this course, Joe Marini explores three important features of C#: Delegates, events, and lambdas. First, Joe shows how delegates are used to provide interchangeable functions during the lifetime of a program, which makes it easy to modify the functionality of an app on the fly. He then covers events, which

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458) | 1h 7m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using C# delegates, events, and lambdas](#using-c-delegates-events-and-lambdas)
  - [What you should know](#what-you-should-know)
  - [Exercise files on GitHub](#exercise-files-on-github)
  - [Setting up the developer environment](#setting-up-the-developer-environment)
- [**1. Getting Started**](#1-getting-started) (2 videos)
  - [Overview of C# delegates, events, and lambdas](#overview-of-c-delegates-events-and-lambdas)
  - [Common delegate, event, and lambda scenarios](#common-delegate-event-and-lambda-scenarios)
- [**2. C# Delegates**](#2-c-delegates) (5 videos)
  - [Creating C# delegates](#creating-c-delegates)
  - [Using anonymous delegates](#using-anonymous-delegates)
  - [Using composable delegates](#using-composable-delegates)
  - [Challenge: Programming delegate](#challenge-programming-delegate)
  - [Solution: Programming delegate](#solution-programming-delegate)
- [**3. C# Events**](#3-c-events) (4 videos)
  - [Creating C# event handlers](#creating-c-event-handlers)
  - [Event chaining](#event-chaining)
  - [Challenge: Programming events](#challenge-programming-events)
  - [Solution: Programming events](#solution-programming-events)
- [**4. C# Lambdas**](#4-c-lambdas) (4 videos)
  - [Understanding C# lambdas](#understanding-c-lambdas)
  - [Using lambdas as delegates](#using-lambdas-as-delegates)
  - [Challenge: Programming lambdas](#challenge-programming-lambdas)
  - [Solution: Programming lambdas](#solution-programming-lambdas)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go next](#where-to-go-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using C# delegates, events, and lambdas](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-c-sharp-delegates-events-and-lambdas-23315218?u=76281980)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you start this course, there are some concepts that you should already be familiar with. First, you should already know the basics of the C# language, such as how to write functions, declare variables, write statements, and so on. We're also going to be using some common C# [[Data Structures]], like arrays and lists during the course, so you should have some familiarity with those as well. Learning C# is a great course for learning all about the basics of the C# language. So definitely check that out if your C# knowledge needs some refreshing. You could also check out C# Collections if you need to brush up on your knowledge of C# data structures. I'm also going to assume that you already know about common [[Object-Oriented Programming (OOP)|object-oriented programming]] concepts, such as classes, methods, member variables, and so on. If you need to get up to speed with object-oriented programming, check out Fundamentals of Programming: Object-Oriented Design. This course will tell you all you need to know about object-oriented design principles. Finally, you should know how to use an integrated development environment, or IDE, to write code and run applications. I'm going to use Visual Studio Community Edition in this course, but if you have another version of Visual Studio, such as the professional or enterprise versions, those should work fine as well. You can also use any other text editor, like Visual Studio Code, Atom, Sublime Text, and so on if you prefer to go that way. Once you feel comfortable with these concepts, you're ready to get started on the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Programming Concepts]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Tools:** visual studio (3), atom (1), sublime (1)
> **Analogies:** such as (3)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exercise files on GitHub](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=0)** - [Instructor] I've included exercise files to accompany each of the examples in this course and you can download them from the [[GitHub]] repository that is associated with this course located at the link that you see here. I've copied the exercise files folder to my desktop to make it easy to work with, but you can place the folder anywhere on your computer that you like. Inside the top level folder, you'll find two folders named Start and Finished. Each of these folders contain folders that corresponds to the chapters in the course. The Finished folder contains all of the examples in their completed state in case you want to skip ahead and see how each one works. The Start folder contains all of the examples in their beginning state and I'm going to be using these examples to build towards the finished state. Now how you use these examples is entirely up to you. If you want to open each unfinished example in the start state and work along with me towards the finished state, well then, that's great. If you'd rather skip ahead and look at each finished example, well, that's great too. Once you have the exercise files folder where you want it on your computer, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (1), find (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the developer environment](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=0)** - [Instructor] In this course, we're going to be building C# applications using Visual Studio Community Edition. This IDE is available as a free download from [[Microsoft]] for both Mac and [[Windows]]. If you already have the professional or the enterprise version of Visual Studio, that's also fine. If you don't have it, go to [visualstudio.com](https://visualstudio.com) and click on the download button for the free developer tools. For Windows, you can see that you can download the Community Edition here and there's also a download for Mac. You'll be prompted for where to save the installer and once the download is complete, run the installer and you'll be all set to go. When you start up Visual Studio Community Edition for the first time, there will be a short registration process you must complete. You can, of course, also use any other text editor you'd like, such as Visual Studio Code or Atom or Sublime Text or any other editor. If you want to go that route, then you'll need to make sure that the .NET framework is installed on your computer. Now, when you install Visual Studio, either for Mac or Windows, that's automatically taken care of, but if you want to use a different editor, then go to the downloads page for the .NET SDK. Get the right version for your operating system. You can see that there's versions for Windows, [[Linux]], and Mac, and then run the installation instructions. Now, make sure you install the SDK, not the runtime version. You need the SDK in order to build the apps. Once you've run the installer for your computer, open up a terminal window. And once you have a terminal window open, type dotnet --version to make sure everything installed correctly and make sure the version number is at least .NET 5.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=93)** I'm using .NET 6 and you should be too, because it's the latest release, but you'll need it at least .NET 5 for the course. So once you've installed the editor that you're going to use and you have the .NET SDK, if you need to get it, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Microsoft]] (1), [[Linux]] (1)
> **Env Vars:** net (6), sdk (4), ide (1)
> **Tools:** visual studio (5), terminal (2), atom (1), sublime (1)
> **CLI Commands:** make (4), dotnet (1)
> **Prerequisites:** you'll need (2), install (2)
> **UI Navigation:** go to (2), click on (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Analogies:** such as (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of C# delegates, events, and lambdas](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=0)** - [Instructor] During the course of the early evolution of C#, the language added support for various ways of defining functions. So way back in C# 1.0 the core concept of the delegate was introduced. In C# 2.0 the ability to define the delegate using an anonymous syntax was added. And then in C# 3 the concept of Lambda functions was added. So let's take a brief look at each of these three function types, what they are? How they work? And most importantly, why you'd want to use them. So first up are delegates. You can think of delegates as being simply placeholders for functions that will be called at some point. The same way that you can declare a variable that holds an integer or a string, you can declare a variable that will hold a reference to a function. This gives you a way to change the function that will be called at runtime during the execution of your program. In other words, delegates give you a way to logically separate different parts of your application from each other without having to know in advance, what all the modules are going to be. Instead of calling a single hard-coded function, you can swap out the function you want to call while the program is running based upon your programs needs. Even better, delegates can be dynamically chained together, and called in order one after the other. And we'll examine that more in-depth later in the course. Next up are events. Events are based on delegates, and they provide a way for your application to both broadcast and receive messages to, and from the [[Representational State Transfer (REST)|rest]] of your application
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=92)** or even to other applications or the operating system. So for example, your application might have some code that broadcasts a message whenever something interesting happens, the result of a variable changes or the user has interacted with a UI element. It's really just up to you. That code is the broadcaster, or sometimes it's called the publisher of the event. Now that event might be listened to by another application or perhaps, just another part of your own program. Those functions are called event listeners or subscribers, and your application can have any number of event broadcasters and listeners. This pattern is very useful in scenarios where you need to communicate asynchronously with other code, or when you don't know in advance how many other interested parties there may be for various changes in the program? And finally, we have Lambda functions. Lambda are essentially the same as regular delegates, but they are written using a more concise syntax. They provide another way of writing something called an anonymous function, which we'll see more of later on in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** 1.0 (1), 2.0 (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Common delegate, event, and lambda scenarios](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=0)** - [Instructor] Okay, now that we've covered what the different function types are, let's consider some scenarios where you might use them in your app development. Each of the function types that we're going to examine in this course are useful in various different scenarios that commonly occur in .NET development. So let's consider delegates first. As I said earlier, delegates provide an important ability. They give you a way to separate functional areas of your program from each other. So imagine that we have a company that needs to ship [[Microsoft Products|products]] around the world, and it's necessary to calculate various taxes and fees for each shipping destination. Well, you could just write a function called calculate shipping, which takes an argument that specifies the destination and then returns the adjusted price. And that might work if you only have a small number of destinations, but consider the kind of nightmare this could turn into if the company grows and has thousands or tens of thousands of different tax jurisdictions to deal with, each with its own fees and charges. Well, one way to avoid that problem is by breaking the calculation logic down into separate delegates. That way, the program can simply select the appropriate function from a list of locations to perform the calculation at runtime, and each one is kept separate from the others. Each location would then be responsible for keeping track of its own fees and rules. Then as the company grows, you can add new functions as they're needed without having to change the code that handles the shipping logic. This model is much more flexible, extensible, and easier to debug. So, next, let's consider events.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=93)** Suppose we have a program that needs to know whenever the contents of a folder have changed. Now you could just write some code that periodically looks at the folder and compares its current state to the previous one, but that's pretty inefficient. And it would get a whole lot worse if you had many different folders to keep track of. Instead, your program could just listen for an event from the operating system indicating that the contents of a folder had changed. This would eliminate the need to poll each individual folder, and again it's much more modular, extensible, and easier to debug. As far as lambdas are concerned, they are essentially a shorthand way of writing delegates. So you can use them wherever you would normally use regular delegates. And since it's necessary to first understand how delegates work, I'm going to revisit the lambda scenario later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** net (1)
> **Cross-References:** later in (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. C# Delegates

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating C# delegates](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=0)** - [Instructor] Delegates are created using the delegate keyword along with a function signature that defines the type of function the delegate will refer to. This allows the C# compiler to make delegates type safe. That is the compiler will check to make sure that the delegate being called has the right number and types of arguments, which helps prevent bugs in your program. So in this case, I'm defining a delegate type named MyDelegate that refers to a function that takes an integer and a string as arguments, and returns an integer result. Next, I define a function that actually implements the logic of the delegate. I can define as many of these as I want based upon my program's needs. To make use of the delegate, you assign the function to the delegate and call it like you would any other function. So in this case, I have a variable named f, which has the type of MyDelegate, which I declared earlier. And I assigned the function MyFunc to the f variable. And then I can just call the function f like I would any other function. Now, if you've ever worked with callback functions in [[JavaScript]] or function pointers in a language like C or C++, then this will probably look familiar to you but there's no substitute for seeing it in action. So let's jump over to some real code and see how all of this works. All right, so here in Visual Studio, let's open up the project named BasicDelegates. And we'll open up the Program.cs file as well. So this program, like the other examples used in this course is a console application.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=93)** It just uses the command line and terminal to accept input and display output. Okay, so first, let's define the delegate type. So I'm going to make a public, and I'm going to use the delegate keyword. And it will return a string. And I'll just simply call the delegate MyDelegate. And it will take two integers, arg1 and arg2. All right? So now let's implement a couple of functions that will serve as a version of the delegate in each case. So I'm going to go ahead and scroll down to my program class, and I'll make two functions. So one is going to return a string. It's going to be called func1. And func1 is going to take two integers, a and b. And it's going to return a plus b, and then I've got to convert that to a string because it returns a string. All right? And then I'll just copy this. And paste it. And we'll call the other one func2. And func2 will multiply the two numbers together. All right, so each of these functions take two integer arguments and return a string. The implementations of each function are different. One adds the numbers while the other one multiplies them. But each result is returned as a string type. So now all that's left to do is create an instance of the delegate and then exercise the code. Let's go ahead and do that.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=186)** So I'll make a variable called MyDelegate. And it's going to be named f. And I'll initialize it to be the value of func1. And then I'll call Console.WriteLine, and I'll output the number from func1 is,
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=213)** and then I'll simply call f with 10 and 20 as the arguments, all right? And then on the next line, I'll simply reassign f to be equal to func2. I'll copy and paste that. Oh, got to have that semicolon in there. And we'll call this one the number from func2. And now I'm calling f again but it's been reassigned, all right? So let's just walk through this code really quick. First line creates a variable f of type MyDelegate. That's the type of our delegate from earlier. We declared it up here. It's right here, okay? And assigned it to the first function, func1. And then we write some console output after calling the function. Then we reassign it to func2 and then we Console.WriteLine the output again. So this demonstrates that you can change the function that the delegate refers to on the fly. So each time we call the function f, it's the same parameters but the outputs going to be different. So let's go ahead and save this. And let's run the program. And when the program builds and runs, you can see that in the first case, we have 10 plus 20, which is 30 and then we have 10 times 20, which is 200. So using a delegate, we were able to switch between two different functions while the program was running. Now, in this example, I've used static class functions to implement my delegates. But you can also use instance methods of classes as delegates as well. So let's go back to the code editor. And I'll close that.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=306)** Okay. And you might see I have a class definition up here named MyClass and it has a single method that matches the signature of our delegate. So it returns a string, and take two integers as arguments. So to use this function as a delegate, we first have to create an instance of the class and then assign our delegate variable to the instance method. So let's do that. I'll make a new instance of MyClass. And now I'm going to write f equals, and then I have to de-reference from the class, and I'm going to call instanceMethod1. Well, I'm not going to call, I'm just going to refer to it, and then I'll copy and paste the Console.WriteLine, and now the number from instanceMethod is, and we'll call it with the same parameters, 10 and 20. So we instantiate the class, we assign instanceMethod1 to our delegate variable and at this point, we can call the delegate like before. So let's go ahead and let's save and let's run the program again. All right, and you can see here that when we run the program, we have three different results. So here's the original two examples, 10 plus 20 and 10 times 20. And now we're showing that we can create delegates and assign them to both static and instance functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** instancemethod1 (2), instancemethod (1)
> **Tools:** visual studio (1), command line (1), terminal (1)
> **Definitions:** refers to (2), is a  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Using anonymous delegates](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=0)** - [Instructor] In addition to explicitly declaring and naming your delegate functions, they can also be created as what are called anonymous functions, and this can be useful if your delegate is a one-off function or a function that is small enough to be declared in line in order to improve the readability of your code. So to begin, we declare the type of the delegate the same way as we did in a previous lesson, by using the delegate keyword. The difference, however, is that instead of writing a named function and then assigning that function to a variable of the delegate type, we just declare the function directly in line with no name. So here you can see I've declared a variable with a type of the delegate. And then I use the keyword delegate to declare the implementation of the delegate, right in line with the assignment. Now, functionally, this is no different than declaring a regular function and then doing the assignment in two different steps. It's just sometimes a little more convenient to do it this way. When the delegate is relatively simple and fits within a few lines of code. All right, let's see this in action. So here in Visual Studio, I've opened the project named anonymous delegates in the anonymous delegates folder. And let's go ahead and open up the program file. And you'll notice at the top of the program, I have declared a, MyDelegate type, just like in a previous video, however, to implement the delegate in this example, we'll use an anonymous delegate. So here in my main function I'll make a new type, MyDelegate f. In this case, I'll use the keyword delegate, and it's going to take two arguments
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=100)** and it's going to return (arg1 plus arg2).ToString.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=110)** All right, so let's examine this in detail, just like in a previous video, I have a variable named f that will hold a reference to a function of type MyDelegate. In this case, though, I'm using the delegate keyword again, but in this context, it is used to declare the function right there in line in the code. So this function takes two integers, adds them together and returns the result as a string. And then we'll go ahead and write that out to the console window and we'll call it with 10 and 20. All right, let's save that. Let's run. And when I run the app, you can see that the result of adding 10 and 20 together produces the string result of 30. So anonymous functions can be used to increase your code's readability by declaring the implementation of the delegate right in line with it, where it is used. And you'll sometimes see this with event handlers, which we'll see more of later in the course.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), later in (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using composable delegates](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=0)** - [Teacher] One interesting feature of delegates that we will explore in this lesson is that they are composable. In other words, you can chain delegates together and each one will be called in the order that it was added to the chain. So let's look at a conceptual example. Suppose I declare a delegate type that takes two arguments and returns a result, and then I write three delegate implementations, D1, D2, and [[D3.js|D3]], that all have the same function signature. Now in my code, I assign each of these functions, two delegate variables, okay, F1, F2, and F3. Then I can chain them together using the plus operator or the plus equals operator. And in this case, I've assigned this chain to the delegate named All. So now the All delegate combines the F1, F2, and F3 delegate functions. So once I've done this and I invoke the all delegate function, then each of these delegates will be called in order. And similarly I can use the minus or minus equals operator to remove delegates from the call chain. So there are a few things that you need to keep in mind when using composable delegates. First, if a delegate in the calling chain throws an exception that is not handled within that delegate, then control will pass back to the caller of the delegate and all the remaining delegates in the chain will be skipped. Second, if your delegates have return values,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=93)** then the return value that's returned to the original caller will be that of the last delegate in the chain. So if you want to pass results between each delegate, you can do so by using reference parameters, any changes made to these parameters by one delegate will be passed along to the next one. All right, enough theory, let's actually write some code and try all of this out. So here in Visual Studio, I have opened my composable delegates project, and let's open up the program file, all right. So you can see here at the top, I've declared a delegate function for a function that takes two integer arguments and in the program class, these two functions, func1 and func2, provide implementations of that delegate. One of them adds two numbers, the other one multiplies the two numbers, and each delegate also writes out the result to the console window. So now let's exercise the functions, right? These first two lines here should look familiar. So all we're doing is calling the delegate variables, right? And we're assigning the F1 and F2 variables to func1 and func2, I've got a couple of local variables, and then we just simply call the delegates. So I'm going to add a line that creates a composed delegate from both F1 and F2, and I'll name it F1F2. And that's going to be equal to F1 plus F2. So I'm using the plus operator to create a delegate chain
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=190)** of F1 and F2, and I've got my new delegate called F1F2. And then I'll just add a line of code down here to call it. So that'll be F1F2, and we'll call that with 10 and 20, actually let's call it with A and B like we do with the other ones. All right, so let's save and let's run this. All right, so when the program is run, you can see the output from the first two individual delegate calls. So 10 plus 20 is 30, and 10 times 20 is 200. So the next call invokes the delegate chain. And you can see the output from each of the functions here. So they're being called in order. All right and let's go back to the code. And now let's try using the minus operator to subtract off one of the delegates. So what I'm going to do is write F1F2 minus equals F1. So we'll get rid of the F1 delegate, and then we'll just call it again. We'll call it AB, and actually let's just call it with B both times, so both values will be 20, right? So now let's run the code again. And now down here, you can see after our original results, the number from F1F2 is now 400, because we're calling it with two 20s, right? And now we were only calling the second delegate in the chain, it just multiplies the numbers. So 20 times 20 is 200. So that should give you a sense of how delegates can be dynamically assembled at runtime to be invoked
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=283)** by a single function call. But let's get a little more advanced now, all right? So let's modify the delegate and let's add a reference parameter. And what I'm going to do, actually, is open up a different project. So I'm going to open up a project and you can see I've got Composable2. So let's open up Composable2, and I'm not going to save the solution for the first one. All right so let's open up the program file. Okay so we have the same code as in the previous example, but what we're going to do now is modify the delegate and add a reference parameter as the delegate declaration up here. Now that this is a reference, I can change the value of this parameter, all right? And it will take effect outside of the function. And we're going to use this ability to pass changes from one delegate to the next. So now let's modify the two delegates to match the function signature. So we need refs in front of each of these now, and these functions perform the same operations as in the previous example, but now let's have the first function also increase the value of Arg2 by 20. All right, now normally this would have no effect, once the function returned, but because Arg2 is now passed by reference, its value is going to change. So let's run this and see what happens. Oops, I've got an error. Oh right, I have to pass each of these by reference. So I got to put the reference definition in here
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=380)** when I call the functions. All right, let's go ahead and run this, right. Now, you can see that when we run the code, the value of B is changing each time. So the B variable starts out as 20, right? So 10 plus 20 is 30, but then we increase it to 40, right? Because we passed it by reference. So now 10 times 40 is 400. Then when the change delegates gets executed, B is now 40 and A is now 10, so 40 plus 10 is 50, but then B gets increased to 60, so now 10 times 60 is 600. So as you can see, you can use this technique to pass results of one delegate to the next, when chaining them together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[D3.js|D3]] (1)
> **Env Vars:** f1f2 (5)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [teacher] (1)

#### [Challenge: Programming delegate](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=5)** - [Instructor] Okay. Time for our first programming challenge. We're going to take what we've learned about delegates so far, and apply them in this challenge. And in this challenge, we're going to use delegates to implement a scenario I talked about a little bit earlier. Figuring out the sales taxes, and fees for a shipping company that operates worldwide. Now to make this challenge a little easier, we're only going to have to deal with a small number of different shipping destinations, but we're going to design the program so that it is easily extensible in the future. All right. So here's the challenge. Joe's shipping has to send items to different destination zones, and each zone has an associated shipping fee, which is a percentage of the items price. Now some of these zones are, shall we say, a bit dangerous? So Joe's shipping imposes an additional $25 fee for those destinations. And then given a zone and an item price, your challenge is to build a program that calculates the shipping fee. So here are some details you'll need. Zone 1 charges a fee of 25% of the item price. Zone 2 charges 12%. Zone 3 8%. And Zone 4 charges 4%. Zones 2 and 4 are considered high-risk, and impose the additional $25 fee. So I'll go ahead, and run my finished code to show you what the output looks like. Right, so here we are in Visual Studio, I'll go ahead and run my finished code. Right. So when the application starts, it asks me for the destination zone.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=98)** So I'll try Zone 1. And it says, what is the item price? And I'll type in 20. And you can see that the shipping fees for Zone 1 is 25% or $5. So then I'll type in Zone 2. And once again, I'll try 20 as the item price. And you can see that the shipping fee is 27.40, because remember this is 12%, but it also tax on the $25 fee. So then I'll do Zone 3, and let's make the price 100 and you can see that 8% of 100 is $8. And then finally, let's do Zone 4. What's the item price? I'll do 100 again. And you can see that the shipping fees are $29 because once again, we impose the extra high-risk fee, and then to exit, I type the [[Microsoft Word|word]] exit. All right. So now that you've seen the program in action, go ahead and try to solve this challenge, and feel free to refer back to this slide as much as you need to see the detailed requirements. In the next movie, I'll go over my solution, and explain the approaches I took. Now, it's not important that you code the same exact solution as I do. What's important is that you understand the concepts here, and how they're used in the solution. So don't worry about arriving at the exact same code as I did. So when you're ready, go ahead and take a look at the next video, and we'll review the result together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1), next video (1)
> **Versions:** 27.40 (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Programming delegate](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=0)** - [Narrator] All right, so how did you do, were you able to get a working example? If you did then great. Let's compare your solution with mine. And if not, don't worry. We'll go over my solution in detail and you can see how I implemented my code. So I've opened the delegates solution project in the finished folder, and I'm going to go ahead and open up the program file and you'll see there's another file here called shipping.CS. And so I'm going to open that one too. So I use two files to keep the code readable. So let's start in the program file. So at the top I have two variables of types, shipping fees delegate, and the shipping destination. The shipping fees delegate is the delegate function that will be used to calculate the relevant fees for a given destination. And the shipping destination will represent that destination. Now the [[Representational State Transfer (REST)|rest]] of the code is a loop that will handle the user input until the string exit is typed in by the user. So the first lines, retrieve the destination zone from the user and then the code checks for the exit string. And if the input isn't exit, then the next line attempts to retrieve a shipping destination object that represents the given zone. So perhaps now would be a good time to examine the code in the shipping file. So let's bring that up. All right, so let's start at the top. You can see I've defined a delegate type
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=93)** called shipping fees delegate, and that's the type that's used over in the program file and notice I'm using a reference variable in the declaration. This is so I can return the calculated value and it can be further manipulated by another delegate and we'll see why that is shortly. So next, I have another class called shipping destination. This base class defines the types and methods that the real destination zones will use. And I made it an abstract base class to prevent it from being instantiated by itself, you have to create a subclass to represent a real shipping zone. So in this class I have a member variable called is high risk, which indicates whether this is a high risk destination, any function called calc fees, which matches the delegate declaration, right. So you see it's a void function and it takes in a price and returns to the fee. Each subclass will override this function to perform that calculation. I also have a static class function called get destination info, which takes the name of a zone and will return a newly created object to resent that zone or no, if there's no matching zone. Now, if we scroll down a little, you can see I defined individual classes to represent each zone based on shipping destination. So each class sets the high risk variable to either true or false, and then implements the function calc fees to calculate the fees for that destination. And you can see that zone one is 25%, zone two is 12% and so on.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=188)** All right, so let's go back to the program. All right, so when this line of code returns, get destination info, we either have a valid destination object or no. So if the result is not no, the code gets the shipping item price from the user and tries to use the decimal classes parse function to convert the input to a decimal number. So then I assigned this particular destination objects calc fees function to my local delegate variable. Now remember, we have to tack on an additional fee if the destination is high risk, this is where the having that reference variable declaration comes in handy. So the code checks to see if the destination is high risk. And if it is, I use an anonymous delegate right here in line to modify the shipping fee to include an additional $25. So now all that's left to do is run the calculation. So I have a local variable that will hold the result. And then I just invoke the delegate. The high risk delegate will be automatically tacked on if necessary and the result is returned. Then I just write out the result to the console. The rest of the code just prints out an error message if the user enters an unrecognized zone and terminates if the user enters the [[Microsoft Word|word]] exit. So by organizing the code this way, I've completely isolated the main program from changes in the shipping zones, and I've made the program easily extensible. In fact, let's go ahead and add a new zone. So let's go over to the shipping file
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=283)** and let's copy the code for zone four all right, and let's paste it. So we'll copy this and we'll make a new class and we'll call this, desk the zone five, right. And we'll set high-risk to false and we'll change the shipping fees to be 15%. All right, so now let's change the get destination info function to return our new zone. So if the user types in zone five, then we'll return a new zone five. Right, so that's it. Let's go ahead and run the program again. All right, so let's go ahead and enter zone five and let's enter a price. And now you can see that we've easily added a new zone. So let's exit this, all right. So let's go ahead and back to the code. And you can see that the main function didn't need to change at all. We added a new zone to the shipping file, and because we've isolated that code from the main program, the main didn't need to change. So that's the power of using delegates. Feel free to play around with this code in the Visual Studio application and watch it work in the debugger if you like. All right, so that brings us to the end of the chapter on delegates. And now that we've seen how delegates work, we can move on to more advanced topics like events and Lambdas, which are based on delegates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. C# Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating C# event handlers](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=0)** - [Man] Now that we've learned about delegates, we can start using events, which are based on the same mechanism that delegates use to work. So, as I said earlier in the course, events are really useful for broadcasting messages to, and receiving messages from other parts of your program or even the operating system or other programs. So this enables your application to communicate asynchronously with other parts of the system, that is, without having to wait for the other end point. And this in turn helps you build more responsive applications. Events can be switched on and off as you need them, which further enhances your application's responsiveness. So if you've done any [[Web Development]], you're probably familiar with events in their user interface form. So for example, when a user clicks on a button, so C-sharp also has UI related events, but your app can define its own events for its own purposes. Defining an event starts off just like defining a delegate, in that you use the delegate syntax to declare the event handler signature. So then in the class for your object, you use the keyword event instead of the [[Microsoft Word|word]] delegate to declare an event. So in this particular case, I have an event named my event of type myEvent, of MyEventHandler, which takes an integer argument. To trigger the event, you then just call the event like any other function. So let's look at a real example. In visual studio, open up the basic events project, and then let's open up the program.cs file. In the code, note that there is a delegate declaration
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=94)** named MyEventHandler, and that it takes a single string argument. There's also a class definition for a class named EventPublisher. And this class essentially just broadcasts a message whenever its private string member variable changes. So let's declare an event handler for when the value changes. So let's go ahead and declare the event, and I'll write, public event, and I'll make it of type myEventHandler, and I'll call it value changed. So in the property setter for the public property named Val, two things happen. First, the private variable is set to whatever the incoming value is. And second, the value changed event is triggered. So let's add the code to trigger the event. So I'll write this., and I'll call ValueChanged, which is the event that we defined up here. And I'll pass in the argument, theVal. Because that's our private variable right here. So we want to broadcast that that variable has changed. Right, so let's save. And then down in the main function, the code has a loop that reads from the console until the user types the word exit. So each time the class's Val property is set to the string that the user types in. And I already have some code that creates a new event publisher object. So let's wire up an event handler for the value changed property to watch for when the value changes.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=190)** Let's go ahead and do that. So I'll write obj.valueChanged, and I'll use the += notation, and I'll call new myEventHandler for the obj_valueChanged function. So in this case, I'm using this function, which I'll scroll down a little bit. I'm using this function that I've already written in called obj_valueChanged as myEventHandler. So this function will run whenever the value change event is triggered, and it just prints a string to the console output. All right, so let's go ahead and save this and let's run the program. All right, and when the program launches, let's just enter some test values. I'll write hello world. You can see that the event handler fired right here says the value changed to hello world. All right, let's take another value. I'll write my name, and sure enough, now you can see that the value changed to my name and then let's exit by taping exit. All right, so, because events are essentially delegates, you can use delegate constructs to define an event handler. So let's go back to the code. And what I'm going to do is create an anonymous delegate to serve as the event handler. And it will also take a string argument. So in this case, I'll write obj.valueChanged once again, and I'll use the += notation, but this time I'm going to use an anonymous delegate. And it will take a string named Val, and then I'll just simply console.WriteLine.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=290)** The value changed to, and we'll have our little string interpolation here. All right, and let's comment out the previous code. Okay, so now let's run the program again. Whoops. Oh, let's fix those build errors. There we go, I put a little semi-colon in there. All right, let's go ahead and run the program again. All right, once again, I'll type in hello, and I'll type in world, and I'll type in Joe. And you can see that as I'm typing the words, the output is firing. So the value is changing to the string that I type in. So declaring an event is very similar to declaring a delegate. And in this example, we've seen how to use both a named function, along with an anonymous delegate to create event handlers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Web Development]] (1)
> **Code Identifiers:** myeventhandler (3), valuechanged (2), myevent (1), theval (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### [Event chaining](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=0)** - [Instructor] Just like delegates, events can be chained together so that more than one handler can execute for a given event. And to do this, use the same plus equals notation as you would for delegates. So let's see how this works by opening the ChainedEvents project in Visual Studio, and let's open up the Program code as well. So here are my code. I have a class defined named EventPublisher which contains a private variable, theVal, and defines an event handler called valueChanged. This class has a property named Val, which fires the valueChanged event whenever the value changes. So let's see how to chain multiple event handlers together using these named event handlers. If you scroll down a little bit, you'll see that there are these two functions, changeListener1 and changeListener2. They essentially print out a message with the string that gets typed in by the user. So let's go ahead and scroll back up. So let's wire up these multiple event handlers. So on my object, I'll define for the valueChanged event and I'll make a new myEventHandler, and I'm going to call changeListener1 for that one, and then I'll do the same thing for changeListener2. And, while we're at it, let's go ahead and also add an anonymous delegate for the valueChanged event. So once again, I'll use valueChanged. In this case, I'll use an anonymous delegate
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=95)** that takes a string, and we'll just simply write out "This came from the anonymous handler". All right. So let's go ahead and run what we have. So I'll run this. And let's enter some values, so I'll type hello. And you can see the output of each event handler executing in order, right? So the value changed to hello. And then the second listener says, "I also listen to the event and got Hello," and then the anonymous handler gets called, right? So let's go ahead and try it one more time. So you can see that it's working and I'll just type exit. So go ahead and try changing the order on your own and see how that affects the output. Just change the order of the event handlers and the plus equals assignment and you can see for yourself how that works. Now, in addition to declaring your own event handler, the .NET Framework includes a predefined event handler class as a template that you can use to send events using the same format as .NET does. .NET event handlers typically take the form of having two arguments. The first one is the object where the event originated and the second one contains data about the event. So to use the EventArgs class, you typically derive a custom from the EventArgs-based class to hold your custom event arguments. To declare the event using this approach you then use the EventHandler class
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=187)** with the name of the EventArgs class that you've created inside of the angle brackets, along with the name of the event. And then you call the event trigger as usual, but you pass in the this reference to the object and a new instance of your derived EventArgs class. So let's switch back over to the code and we'll define our custom event subclass. So we'll create a subclass of EventArgs for our own use. So I'll call it ObjChangeEventArgs, and we'll derive that from EventArgs, and it will have a public string property called propChanged. Then let's go ahead and add the event definition to the EventPublisher class. So let's scroll back up to the EventPublisher and let's define our event. So it's public event and I'm going to use the EventHandler generic class, and I'll pass in the ObjChangeEventArgs, we'll call that the objChanged event. And to trigger the event, let's add a line that calls the objChanged event. So now instead of calling valueChanged, we'll call objChanged. And we'll pass into this reference to the element, and then we'll create a new ObjChangeEventArgs object, and we'll pass in
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=283)** that the propChanged is equal to Val.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=293)** So this line creates a new ObjChangeEventArgs object and sets the propChanged field to Val, which is the name of our field that changed. And then finally, let's add an anonymous delegate handler to the main program to listen for the custom event that we just created. So this delegate is going to take an object and EventArgs as parameters. So I'll write obj and once again, I'll use the objChanged handler and I'll add my new delegate, and it will take an object called sender. And of course my ObjChangeEventArgs and we'll just call that e. All right. And then inside the handler we'll simply call Console.WriteLine, and we'll have the object name, had the, and that's going to be the property name, property changed. And course, that's going to be the sender and we'll call GetType on that to get the type of the object. And for the event field, we'll get the propChanged property because remember up in our class definition, that's this property right here. So inside our custom event args, we have the property that changed. And so we're going to print that out right here.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=387)** All right. And let's put the semicolon on there just to make sure everything's syntax is correct. All right. So let's save and let's run. Let's enter a value. I'll write Hello. And now you can see that whenever the value changes for the Val property, in addition to the previous events, we also now have the name of the class that got changed, right? This is the name of the object that just got changed along with the property that got changed as well. So by using this pattern in your own applications, your code will match the same guidelines that the .NET Framework uses for its own event handling.

> [!info]- Semantic Content
>
> **Code Identifiers:** valuechanged (6), propchanged (4), objchanged (4), changelistener1 (2), changelistener2 (2)
> **Env Vars:** net (4)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Programming events](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=0)** - [Instructor] All right, time for the programming challenge. In this challenge, we're going to use Events to watch changes on an object and respond to those changes. And specifically, our program will track the changing balance of a piggy bank. Now, if you've never seen one of these, they were popular in the US for kids to save money by putting spare change in a slot in the top. They were usually in the shape of a little pig. And traditionally, they were made of ceramic. And when you filled up the little bank, you would, you know, break it with a hammer and take the money and go buy a toy or something. I mean, nobody really does this anymore. But it's a fun little metaphor. So our program will keep track of the bank balance and let us know when we've reached our savings goal. So let me go ahead and run my finished program so you can see how it works. So I'm in my finished version of the EventsSolution. So I'll go ahead and run this. All right, so when I run the program, I'm asked how much to deposit and I'll write 200, right? And now it says the balance amount is 200. And so I can type in integer numbers, right? Positive numbers result in the balance increasing. And if I do a negative number, you can see that the balance decreases. And so I'll just keep on adding 50, and then I'll add another 10 and then 100 and then 200, right? And then when it says the balance amount is 510, it says you've reached your savings goal. You have 510. All right. So, you use positive numbers to make deposits and negative numbers to make withdrawals.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=96)** Now I've set the saving goal in the program to be 500. And you can see that when we reach that level, or more than that level, we get a little message that says, "Hey, you've reached the goal." All right. So you've seen the program, go ahead and take a crack at it yourself and implement the program using Events. So when you're ready, you can take a look at my finished code and we'll go over that in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Programming events](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=0)** - [Instructor] Let's take a look at my code for this challenge. And again, let me say, it's not important that you use the same code as me and my solution might not even be the best one. There's always multiple ways of solving almost any given programming problem. So let's open my code file. In my solution I used three different classes. So I have a class for the PiggyBank itself. And then I have a class that logs the balance and that's called the BalanceLogger. And we have a class called the BalanceWatcher that watches the balance to see if we've met our savings goal. And I also have a delicate declaration right at the top up here that defines the signature of the event handler that the PiggyBank class will use to broadcast changes in the balance. So let's look at each of these classes. So starting with the PiggyBank, the PiggyBank class has a private member variable that holds the balance and it has a public event called BalanceChanged. There's also a public property named theBalance. And you can see that whenever theBalance is set to a new value, the event is triggered and broadcast to all the listeners. So the BalanceLogger class has a function that prints out the value of the amount argument that it is passed. And the BalanceWatcher class also has a function that
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=97)** accepts an amount argument and checks to see if it's more than 500. And if it is, it announces that you've reached your goal. So notice that each of these functions matches the signature of the event handler delegate up here at the top. In the main program, let me scroll down, I create an instance of each of these three classes, and then the next two lines hook up the event handler functions in the logger and the watcher classes to the event in the PiggyBank class. And then my code enters a loop where it gets the amount to change the balance from the user. Now until the user types the [[Microsoft Word|word]] exit, we parse the input to get a decimal number. And then from there, everything else is automatically handled by the events. So you can see from this example that like delegates, events can be used to isolate various parts of logic within your program. So now we've learned about delegates and events, it's time to move on to Lambda functions and we'll see that in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** thebalance (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. C# Lambdas

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding C# lambdas](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=0)** - [Instructor] Lambda functions are essentially a short hand way of writing anonymous functions in C#. And because they're based on delegates, you can use them anywhere you would normally use a delegate function. Lambdas are typically used when the logic that they implement is small and compact enough to fit into an inline declaration, which helps keep the overall code easier to read. Lambdas are defined using the arrow operator, which consists of an equal sign along with a right angle bracket. And because their delegates, you also define a delegate signature like you normally would. Then, to declare the Lambda, you would declare a variable of the delegate type, and then write the Lambda expression using the arrow operator. In this case, the Lambda has one argument, X, and returns the value of X times X. This kind of Lambda is called an expression Lambda because it consists of an expression on the right hand side. There are also statement Lambdas. In this case, I have a Lambda that takes two arguments, X and Y, and you'll notice that I have the arguments enclosed in parentheses, which are optional. And then I have multiple statements inside of curly braces. If a Lambda has no arguments, you can just use empty parentheses to declare the Lambda. All right, let's see Lambdas in action by clicking over to the code. And here in Visual Studio I've opened up the "Basic Lambdas" project in my start folder, and let's open up the program file. All right, so in the program file, you can see that I've already defined some delegates signatures for a few different delegate types.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=94)** So let's try a basic Lambda first. So I'm going to write mydelegate1 and it's out so I just call it my delegate, right? So my delegate, I'll call it, d1, and I'm going to create a single argument Lambda. And that is going to take one argument and that is going to return X times X. And then just, let's go ahead and write out the result.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=130)** And we'll just call the Lambda with an argument of five, right? So this Lambda simply takes its argument and returns the square of that number. This line writes out the result of calling d1 with the value of five. And because this is a delegate, we can change it on the fly, just like other delegates, right? So let's go ahead and change it to something else. Let's write that d1 is now going to be equal to a single argument Lambda, and that's going to return the value of X times 10, and then we'll just copy this line and paste it. All right, so essentially we changed the definition of d1 to be a different function. And now we're going to write out the same result, but we'll call it with the same value, but it should put out a different result. So let's go ahead and save and run what we already have.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=188)** All right, when the function runs, when the application starts up, we can see that five times five is 25. And then we changed the definition of d1 to be X times 10, so that's 50. All right, so far so good. All right, let's try a couple more examples. Let's create a delegate that takes multiple arguments, and this is going to be of type mydelegate2, we can see that that's a delegate, that takes an integer argument and a string. So we'll create delegate2, and that's going to be a two argument Lambda. And even though the parentheses are optional, I think it makes the code easier to read, so I always try to include them. And then inside our Lambda, we're going to Console.WriteLine. And we're going to write the two-arg Lambda and we'll write out the arguments and that is going to be X times 10. And the Y argument put semi-colons in the right place. And then we'll call it with a couple of arguments. We'll call it with, let's see 25, and then some string. All right, so this Lambda d2,
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=281)** it takes two arguments and it just writes them out to the console, doesn't do anything. You can see that this is a statement Lambda, right? Because it encloses the logic inside curly braces. And let's do one more, okay. Let's create another expression delegate, and we'll call this the expression delegate. And if we scroll back up just really quickly, we can see that the expression delegate just takes a single argument. And that's the X argument there. So we'll call this one, [[D3.js|d3]], and we'll define this to be a single argument Lambda that simply takes the value of X and determines if the value of X is greater than 10. So this is going to be a Boolean result. All right, so if we scroll back up, you can see that the delegate returns a Boolean, true or false value. All right, so then we'll call console.WriteLine, and we'll print out calling d3 with five, and I'll put the result in our string and we'll call T3 with five. And then we'll do the same thing. So I'll copy and paste that, and then we'll call it with 15. All right, so this last Lambda is an expression Lambda that returns whether the argument is larger than 10. So this one should be false and this one should be true. All Right, so let's go ahead and run our updated code. We'll save that and we'll run it again. All right, so here's our first two results.
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=374)** We've seen those already. And then the two-arg Lambda, you can see it prints out the prefix and then the value times tens, so that's working. And then when we call d3 with five, the result is false. And oh, I made a mistake. I called it with the string, says five again, but let's make that 15. All right, let's save. Let's run it again. All right, so now we have the right string there. So you can see that five is not greater than 10, whereas 15 is greater than 10. All right, so that should give you a good introduction to basic Lambdas. In a separate video, we'll see some more advanced Lambda function usage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[D3.js|D3]] (3)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using lambdas as delegates](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=0)** - [Instructor] As I mentioned earlier, lambdas are essentially shorthand ways of writing anonymous delegate functions in C#. And because of this you can use lambdas in places where you would otherwise use delegate functions, including events. And that's what we'll take a look at in this example. So here in Visual Studio, I've got my lambda delegates project open. And let's open up the code file here. So this code example is essentially the same one that we saw earlier in the events chapter. So if we scroll up to the top, you'll see that there's a delegate declared for an event handler. And the class definition here, MyClass, has the same event defined that we saw in the previous example. So this event is triggered whenever the value of the public property, Val, changes. We trigger the valueChanged event. So the difference this time is that, instead of using a named function or inline anonymous delegate, we're going to use a lambda function for the event handler. So let's go ahead and add that code. And I'm going to write obj.valueChanged, and I'll use the same plus equals notation. And now I'm just going to define an inline expression lambda inside my curly braces, and I'll just write Console.WriteLine. The value changed to, and that's going to be the first argument of the interpolated string here. All right, and one more semi-colon.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=96)** Now in this case, the valueChanged event for the class is being hooked up to a lambda function that takes a single argument, which, recall, is the new value of the property once it changes. So this lambda is a statement lambda, and you can see that because there's curly braces that contain my expression here. And the [[Representational State Transfer (REST)|rest]] of the code is the same as the previous events example, where we read the input from the user until they type in the string exit. So let's go ahead and run our updated code. All right. And once the program runs, I'll go ahead and type in some strings. So I'll type in, hello, and you can see, The value change to hello. And I'll type in, world. And I'll type in, Joe. All right. And then I'll type in, exit. Okay. So the rest of the code is the same, and you can see that as I type in the strings, the output is being reflected by the event handler. So this demonstrates how you can use lambda functions to implement event handlers just as you would using anonymous delegates or named functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** valuechanged (3)
> **Cross-References:** earlier in (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Programming lambdas](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=0)** (chiming music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=5)** - [Instructor] All right, time for another programming challenge. In this challenge, we're going to use lambdas to revisit an earlier challenge. So recall that in our previous challenge, we implemented a piggy bank watching program that used two events. The first informed us of the amount of money in the bank and then the second let us know when we had reached a given savings threshold. In this challenge, you're going to reimplement the earlier challenge using lambda functions. So let's go ahead and watch my solution in action. So I'll go ahead and run this and you can see that it works pretty much the same as before. So positive numbers increase the balance and negative numbers decrease the balance, so I keep adding money and when I reach 500, you can see that once I exceed the 500 value, it says I've reached my goal, all right? So it works the same as before in the previous challenge. What I want you to do is go back and take a look at your earlier solution, or mine, if that's the one that you used, and then perform the same challenge again, but this time use lambdas instead of events and delegates to create the solution. And in the next video, I'll show you how I arrived at my solution. So take a few minutes to write this out and then come back and compare your solution with mine.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chiming music) (1)

#### [Solution: Programming lambdas](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=0)** - [Instructor] All right. This challenge was relatively straightforward. In it, we had to go back and modify the piggybank events challenge to use Lambda functions instead. So let's open up the code for the Lambdas solution, which I have here in my editor, and while we're at it, let's open up the original piggybank solution in the events chapter so we can see them side by side. So looking at the previous challenge, we can see that there are two event handlers that were used to watch the balance in the bank, okay. In the Lambda solution, I essentially got rid of the two classes, balance logger and balance watcher since they were so simple. And I just replaced them with two in line Lambda functions. So I kept the original delegate declaration. And if I scroll down to the main function, you can see that where I was using the class delegate methods, I'm now using inline Lambda functions instead. So this example was simple enough that I was able to remove two class definitions entirely and replace them with easier to follow in line code. So you can see, for example, that the balance changed event on the piggybank in the first case, simply gets changed to say, hey, the balance change when the amount gets entered. And then the second is a Lambda function that shows if the amount is greater than 500, that it prints out the message that we achieved the goal.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=95)** So when writing your own applications, you will sometimes come across in areas like this and Lambdas can really help clean up your code and make your program easier to follow. Especially if you have really simple functions or classes that are handling scenarios that can just be expressed in a few lines of a Lambda.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go next](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=0)** - [Instructor] Alright, well, that brings us to the end of our course on C# delegates, events and Lambdas. I hope you enjoyed learning along with me, how to use these C# constructs to build better, more robust and extensible applications. And if you're interested, I have a few suggestions on where to go next to continue learning about C# and .NET. So first, consider watching C# Interfaces and Generics. These are important features of the language that are commonly used in C# programs. Next, take a look at C# Collections. This course goes in depth on the various types of collection classes available in .NET, such as stacks, queues and dictionaries. Also, consider watching C# String Essential Training. String manipulation is usually a part of any non-trivial program and this course will show you all the ways to work with strings in C# and .NET. And finally, consider watching C# and .NET Programming. This course dives into the .NET library and shows you how to use important features of .NET in your applications. All of these courses contain a great amount of useful material that you can apply in just about any programming language. Thanks again for watching and I'll see you again soon in another one of my courses. Happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (6)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-delegates-events-and-lambdas-3006906)

## Skills Covered

- C#

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[Object Oriented Programming With C Sharp]] | **2 of 8** | [[C- Interfaces and Generics]] →

### In [[Getting Started as a C- Developer]]
← [[C Sharp Algorithms]] | **5 of 9** | [[C- Interfaces and Generics]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]
- [[Getting Started as a C- Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)