---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-sharp-exception-and-error-handling
url: "https://www.linkedin.com/learning/c-sharp-exception-and-error-handling"
duration_minutes: 56
duration: 56m
level: Advanced
updated: 3/14/2024
learners: 12992
skills:
  - Debugging
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-exception-and-error-handling-3812037/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEHKuZhVdeGtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710284097660?e=2147483647&amp;v=beta&amp;t=bSBiVautAOtppfk3qFH7KdswMz5hbF2GKQY63uU-euE"
linkedin_topic: DevOps
learning_paths:
  - '[Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)'
prev_courses:
  - '[C- Test-Driven Development](C-%20Test-Driven%20Development.md)'
next_courses:
  - '[C- Cross-Platform Development](C-%20Cross-Platform%20Development.md)'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":5,"total":8,"prev":"C- Test-Driven Development","next":"C- Cross-Platform Development"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/debugging
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Exception%20and%20Error%20Handling.md)

![C# Exception and Error Handling](https://media.licdn.com/dms/image/v2/D560DAQEHKuZhVdeGtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710284097660?e=2147483647&amp;v=beta&amp;t=bSBiVautAOtppfk3qFH7KdswMz5hbF2GKQY63uU-euE)

# C# Exception and Error Handling

> It’s just a fact that, despite all efforts to write the cleanest and most error-free programs, at some point you’re going to run into problems. Knowing how to properly handle error conditions and exceptions within your C# programs—before they affect user experience—is an absolute must. In this course, Joe Marini shows you how to work with C# exceptions and implement best-practice error handling pr

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling) | 56m | Advanced | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Exceptional times call for exception handling](#exceptional-times-call-for-exception-handling)
  - [Getting set up](#getting-set-up)
- [**1. Overview**](#1-overview) (1 videos)
  - [What are exceptions?](#what-are-exceptions)
- [**2. Exception Basics**](#2-exception-basics) (7 videos)
  - [Basic exception handling code](#basic-exception-handling-code)
  - [The System.Exception class](#the-systemexception-class)
  - [Built-in exceptions](#built-in-exceptions)
  - [Handling multiple exceptions](#handling-multiple-exceptions)
  - [Throwing exceptions](#throwing-exceptions)
  - [Challenge: Basics](#challenge-basics)
  - [Solution: Basics](#solution-basics)
- [**3. Advanced Exceptions**](#3-advanced-exceptions) (7 videos)
  - [Using try-catch-finally](#using-try-catch-finally)
  - [Exception filtering](#exception-filtering)
  - [Creating custom exceptions](#creating-custom-exceptions)
  - [Inner exceptions](#inner-exceptions)
  - [Exception handling best practices](#exception-handling-best-practices)
  - [Challenge: Custom exceptions](#challenge-custom-exceptions)
  - [Solution: Custom exceptions](#solution-custom-exceptions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Exceptional times call for exception handling](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=0)** - Despite our best efforts as developers, the truth is, our programs are going to run into unexpected problems that need to be handled before they affect the user's experience. In C#, this is accomplished by working with exceptions, which is the modern way for object oriented software to deal with error conditions. Hi, I'm Joe Marini, and I've been building software professionally for some of the best known companies in Silicon Valley for more than 35 years. In this course, we'll learn how to use exception handling to make sure that users of our programs get the best error-free experience possible. There are a lot of things that can go wrong in modern software. And knowing how to deal with these conditions is the key to delivering resilient code that can perform under difficult circumstances. Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - despite (1)

#### [Getting set up](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=0)** - [Instructor] I've set up a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with the examples, and you can find it at this link. The course content is organized into two separate folders. So if we go into the source folder, you'll notice that there's a finished folder and a start folder. The finished folder contains all of the code examples in their finished state, so you can compare your code against them as you work through the course. The start folder contains the code examples in the beginning state, and this is the folder I will be working in throughout the course as we build towards the finished state for each example. If you want to download the examples and work with them locally on your computer, that's easy enough to do. Just click on the code button, and then in the local tab, you can either clone the repository to your own account or download a zip file and then use your favorite code editor to work on the examples. You'll just need to make sure that you have the appropriate dot net SDK installed on your computer. But this repository has also been set up with a GitHub code space, so you can just work directly online with nothing to install. All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a code space. We click on the code spaces tab. Here's where you can create a new code space, and you won't need to install anything. Now you can see I've already done that, and this is the code space that I've created that I'll be using in this course. Either way works fine, but I'm going to be using the code spaces feature in this course. So let me go ahead and open the code space and show you what it looks like.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=93)** Now when you create your own code space, it will take a few minutes to spin up, so just be patient. When the code space starts, you'll see a browser based version of Visual Studio Code, and then here in the files list are all the files that you'll need for the course. You also have a built-in terminal, which can be found in the view menu. So if I click on the little view menu stack up here, choose view, and then go to terminal, you can see that we have a built-in terminal right here in the browser, and I can check to see that dot net is already installed. So I'll write dot net dash dash version, and sure enough, I've got dot net installed. So that's pretty much all there is to set up. Once you have the code space set up for your account and you have the coding preferences the way you want them, you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3), terminal (3), visual studio (1)
> **Prerequisites:** set up (4), install (2), you'll need (1)
> **UI Navigation:** click on (3), open the (1), go to (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** download the (1), zip file (1)
> **Env Vars:** sdk (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What are exceptions?](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=0)** - [Instructor] Let's begin with a basic definition and understanding of what exceptions are and why they happen. An exception is an error condition that happens during the course of the execution of your program's code. When this happens, the exception makes its way through your application until it is caught and handled by an exception handler. So let's take a look at how this process works. Your application consists of the code that you write in various classes, and it sits on top of the .NET framework along with any third-party libraries that you include in your app. Exceptions have a point of origin and a point at which they are handled. They can originate almost anywhere, in the .NET CLR itself or within a third-party library that you're using or within the .NET framework, or of course, within your own application code. If an exception makes it all the way to your application without being handled, then your app will terminate, and that's not the kind of experience we want our users to have. So how do we prevent this kind of bad experience? In our program, we enclose any code that might cause an exception within a try block. If the code within this block causes an exception to happen, then the program flow will immediately transfer to the nearest appropriate catch block, which encloses the code that handles the exception that just happened. If the CLR can't find an appropriate catch block to handle the exception, this is when the program will terminate. In the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, we'll learn about what the different kinds of exceptions are,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=93)** how to handle them, and even how to generate our own exceptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** net (3), clr (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Exception Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic exception handling code](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=0)** - [Instructor] Let's start by taking a look at how basic exception handling works. So here in my code space, in the Start folder in chapter two, I'm going to open up the example code in the Basic folder. And you can see here in my example code, I have an array of integer numbers and a statement that calls a function I've created named IntDivider, and that's down here, which takes two arguments, divides the first argument by the second one, and returns the result, which I then write out to the console. And then the next line writes out the value at a particular index into this nums array. So let's go ahead and run what we have already. So I'm going to right click on the folder name and choose Open in Integrated Terminal. And then I'm just going to dotnet run. I'll just type it out. And you can see that when I do that, we get the results and the output here. So the result of, let's see, nums two, it's two, right? And the nums at five is four. So four divided by two is in two. And the number at index eight is eight. Okay, everything's looking like it's working pretty well. Alright, so let's cause a problem. I'm going to change this argument to zero. All right, and let's go ahead and run the code again. And now you can see that the program terminates with an error message indicating that I tried to divide by zero.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=93)** And similarly, let's go back and fix that. If I try to index beyond the end of the array, right? Let's run the code again. Okay, so now I get a different error. I'm getting an index out of range exception because I'm trying to index beyond the end of this array. So in each of these cases, my app is causing an exception to happen. And what I want to do is catch these problems before they cause my program to terminate with this terrible looking message. So to fix this, I'm going to add exception handling code to my program. So let's close the terminal. So what I'm going to do is enclose all of my code inside a try block. So I'm going to write try, and then I'm going to put the closing bracket down here. All right, and then let's indent this code. Okay, so I'm going to put the code I'm trying to execute in the try block, and then I'm going to add what's called a catch block. And I'm going to specify that I'm catching a generic system exception object. And then inside the catch block, all I'm going to do is just write out a message to the console. And what I'm going to do is write out the error message so each exception object has a message property. I'll just write that out. Now, if any piece of code that is called within the try block
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=186)** causes an exception to happen, then the flow of the program will immediately transfer to the nearest catch block, and that's this one right here, where I can deal with the problem. This allows me to separate the code that deals with errors from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the app logic, and centralize it in one place. So let's go ahead and try the code again. So let's open up the terminal, and now let's go ahead and create that problem. So let's try to divide by zero again. So I'll run the code and now you can see I get a much nicer looking error message, right? It says attempted to divide by zero. And then let's try the same thing where I try to index beyond the end of the array. So let's go ahead and run this. And now you can see that I'm getting the index was outside the bounds of the array message, which is the message from the exception. Now this is a much better experience than having my program just crash with this ugly error message in stack trace. My program has an opportunity to deal with the problem and give the user a better experience. Now, in this case, I'm not really doing that. I'm just printing a nicer looking error message. But in real code, you would just deal with the problem in a much better way. The exception object that the code is catching is an instance of the system exception class. Let's take a quick look at the documentation for that class. You can find it at this link. Now we're going to learn more about that class in a separate video. So don't worry about reading through this right now. Just keep it handy as a reference to refer back to.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=279)** Now in this example, I'm using this base exception class to catch both the divide by zero as well as the index out of range exceptions, because those are both subclasses of the base exception class. But you can exercise a much more granular level of control over how you catch individual exception types. And we'll see examples of how to do that later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Tools:** terminal (3)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **CLI Commands:** dotnet (1), find (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [The System.Exception class](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=0)** - [Instructor] Let's take a closer look at the system exception class that we briefly learned about in a previous video. This is the base class for all other exceptions in the .NET framework. And .NET defines many subclasses of exception that you can use within your applications to handle specific error conditions and we'll examine those more closely later on. The exception class provides several useful methods and properties, and if I scroll down, you can see some of them listed here. And you could use these within your exception handling code. And I'm going to highlight some of the more useful ones in this example. You can read more about the exception class at your own pace at this link, of course. All right, so let's switch over to the code. And here in chapter two, I'm going to open up my example code in the SystemException folder. So this code is pretty similar to the previous basic example and you can see that my code intentionally triggers an exception by trying to index beyond the length of this array. So let's run what we have, and I'm going to open up this in the terminal and just run this. And you can see that sure enough my code currently is just writing out the exception to the console. I'm going to add some code that accesses some of the more important parts of the exception object. So let's go ahead and close that. All right, so we can use the get type function,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=95)** which is defined in the object based class to get the actual type of the exception itself. So I can write Console.WriteLine, and I'm going to write out the Type and then I'm just on the exception, I'm going to call GetType. Okay, let's keep on going. So I'll copy and paste that. The message property, which we kind of saw already in a previous example, is the text string that is shown to the user. So I'll print that out as well. There's a property called HelpLink, and that's optional and can be used to provide a link to documentation about the exception. So you should provide this when you define your own exceptions, so developers will know what to do when they see it and we'll see how to do that later. So I'll just write out the HelpLink. And this property right here. All right, the source property tells us the application or the object where the exception occurred, so we'll print that out as well. TargetSite is the name of the method that through the exception, so let's go ahead and put that in. And then finally, the StackTrace contains the stack of function calls that led up to the exception. And this information can be very useful
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=187)** when you're debugging your code. So let's go ahead and copy this line and paste that in. And we will have this be printed out as the stack, and that's going to be the StackTrace property. Okay, so let's comment out the original Console.WriteLine code there, and then let's run the code again. So let's bring this up in the terminal and let's run. All right, and now you can see that we have a much richer set of information about the exception. So here's the type, that's the class name, right? There's the message. We can see that there's no HelpLink for this one because it wasn't provided. We can see that the source was the SystemException app, right? That's what we're currently working in. The TargetSite is the main function. Okay, sure enough. And then the stack, we can see the stack trace here. So you can use each of these properties to provide more information to either yourself or other developers as they're working your code to help handle the exceptions.

> [!info]- Semantic Content
>
> **Env Vars:** net (2)
> **Tools:** terminal (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Built-in exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=0)** - [Instructor] Now that we've learned a little bit about the system exception base class, let's take a look at some of the more specific exception classes that are derived from the base. It is generally considered a best practice to use the most specific exception class possible that meets your program's needs in order to keep your codes simple and avoid having many different exception types being caught by your catch statements. So here's some of the more common built-in exception types that your code will encounter. An ArgumentException occurs when an argument that was passed to a function is invalid for some reason. And similarly, the ArgumentNullException indicates that an argument to a method was null when it shouldn't have been. The ArgumentOutOfRange exception occurs when an argument is outside of a range of acceptable values. DividedByZeroException is pretty self-explanatory, as is the file not found exception, which happens when you try to operate on a non-existent file. We've already seen the IndexOutOfRangeException, and the InvalidOperationException happens when you try to perform an operation on an object and that operation isn't valid for the current state of that object. So let's take a look at these and try out a couple in our code. All right, so let's go into the chapter two built in project and we'll bring up the code here. So this is the same code as my original example from a previous video. And my catch statement is catching every single exception when it should just be looking for divide by zero
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=97)** or index out of range. So to fix this, I can just use the specific exception type. So I'll change this to DivideByZeroException. All right, and then let's go ahead and run our code, which divides by zero. So let's bring this up in the terminal, and then let's run this code. And sure enough, you can see that the DivideByZeroException is in fact getting caught. I can also change it to the IndexOutOfRangeException. And let's go ahead and fix that problem. And now try to index out of range, which you can see is happening right here. We'll run this again. And now the index out of range exception is being caught. Now of course you've probably noticed that we need a way to catch both exceptions, not just one or the other. And we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Handling multiple exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=0)** - [Instructor] In our original exceptions example, we saw how to handle an exception in our code by declaring a catch block that indicates the type of exception. Now, let's go back to our code. And in the multiple folder in chapter two start, let's open up the program code. And this is the same example I've been using. So this example uses the exception base class, which pretty much means it's going to catch any type of exception that is thrown, but that's not usually the best way to handle exceptions. What you usually want to do is create a catch block for a specific exception type, and then handle that specific exception within that code. Now of course, in order to do this, you need to have a way of handling more than one exception type. And you can do this by simply declaring multiple catch blocks with different exception types. So let's go ahead and modify our original example to handle the divide by zero and index out of range exceptions individually. So first I'll change this catch block to handle divide by zero. All right. And now I need to create another block for the index out of range. So I'll just copy and paste this one, and we'll replace this with index out of range exception. And I can create as many of these catch blocks as I need, depending on how many exceptions my code might generate. All right, so let's go ahead and exercise our updated code. So first, let's go ahead and trigger
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=92)** the divide by zero exception, you can see that that's happening here. So let's open this up in the terminal, and we'll run our code. And sure enough, there's the divide by zero exception happening. All right, let's go ahead and fix that code. And now let's trigger the index out of range one. All right. Now you might be wondering what happens if I try to put a more generic exception handler in front of these two. So for example, let's go and add the generic exception handler that we started with up here. And I'll just change this one back to exception. All right, and so now let me hide this for a second. Now I have the original exception, and these two down here, but you can see that when I try to run this code, well, I'm not actually going to be able to run it. You can see there's errors already, but let's just bring up the integrated terminal anyway and let's just try to run the code. All right. And you can see I'm getting an error. And the error is informing me that the two more specific catch blocks can no longer be reached. That's because this generic one is going to handle all the exceptions that come its way. So as a best practice, what you need to do is handle the more specific exceptions first and handle the more generic ones later.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=186)** So if I took this catch block and moved it down to the bottom, now you can see that that's okay, the error goes away, and let's clear this and run our code again. And now I can run the code once again.

> [!info]- Semantic Content
>
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Throwing exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=0)** - [Instructor] So far, we've seen how to write code that handles exceptions. But of course, there'll be times when your code will need to raise its own exceptions during the normal course of execution. This is done using the throw keyword. So let's open up our sample code in the Throwing folder of chapter 2. And what I've done is I've got some sample code here that represents a digital oven. I've got a class called MyOven. And there's two functions, one for setting the oven temperature and one for retrieving it. Now, the oven can only be set to a temperature between 100 and 500 degrees, otherwise, that's an error. And right now, there's no code to catch this condition. So if you look up here in my main code, I have two calls to the SetOvenTemp function, one for 300 and one for 600. So let's go ahead and bring this up in our terminal. And let's run the code. So, if I run the program as it is right now, you can see that MyOven dutifully tries to set the temperature to 600 and retrieves the value just fine. So what I'm going to do is throw an exception if the collar of the SetOvenTemp function passes a value that's outside the acceptable range. So let's go ahead and fix that code. And let's bring this down a little bit, there we go. So here in my SetOvenTemp function, I'm going to write some logic
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=94)** that says if the temperature is less than 100 or the temperature is greater than 500, I am going to throw a new argument out of range exception.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=115)** And the argument out of range exception takes a few arguments. First, I'll give it the argument that caused the problem, and that's going to be TemperatureF. Okay. And then I'm going to pass in the actual value that was given by TemperatureF. And then I'm going to have my message, which is going to say, "The oven temp setting must be between 100 and 500."
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=147)** All right. So now, let's try to run the code again.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=155)** All right. And now, you can see that the code is throwing an exception, right? It says right here, exception. The oven temp must be between 100 and 500. It shows that the parameter that was passed in that was wrong is this one named TemperatureF, and the actual value given was 600. Now, in this example, I'm using one of the built-in exception classes, which is called ArgumentOutOfRangeException, we saw those earlier. However, I can also define my own exception classes, my own custom version of exception classes that descend from the base exception class. And we'll see how to do that later in the course.

> [!info]- Semantic Content
>
> **Exercise Files:** sample code (2)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Basics](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=0)** - [Instructor] All right, let's try a programming challenge. So for this challenge, you're going to create a simple program that reads in two integer numbers and performs a user-specified operation on them. So I'm going to run my finished code so you can see what the application looks like. So here in my finished chapter two, I'm going to open up my finished challenge, and let's give this a full screen and I'm going to run the code. All right, so you can see I'm being prompted for the first integer number, so I'll enter 10. And then, "Enter the second integer number," and I'll enter five. And then, "Enter the operation," I can either add, subtract, multiply, divide, or I can type exit to quit. So I'll choose D for divide. And you can see the result is two, okay? So the program needs to be able to handle exception conditions. So for example, if I enter a value that's not a number, so I'll enter A and then B, and then I'll do add, right? You can see that I'm getting this message that says, "The input string was not in a correct format," so I'm handling an exception there. And then also, if I try to divide by zero, that's an exception. So if I enter 10 and zero and then do divide, right, you can see that I'm getting my "Attempted to divide by zero" message. And if I try to choose an operation that isn't one of the four that I'm given, that's also an exception. So I'll enter 10 and then 5,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=95)** and then I'll enter C for something. And you can see that I'm getting a "'c' is not a valid operation." And I'm being told that there's a parameter that's wrong there, okay? And to exit, I'll just have to type exit, so I'll put in one, one, and then I'll just type exit. And then my program exits. Now in the Start folder, I have given you a starting point for this code, okay? So here is the starting point. You might need to define some of your own local variables. The ReadLine function reads in the input from the console as a string, and I'll give you a hint, okay? You'll need to use the Parse function to convert the string that you read in into an integer, and you can see the documentation for that here at this link. So the Parse function will take a string and try to parse it into, in this case, an integer. And if we scroll down a little bit, you'll see that it throws a format exception if the string can't be converted to a number. So that might be one of the exceptions you'll need to deal with. All right, so go ahead, give the challenge a try, and then I'll be back to explain my solution.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Basics](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=0)** - [Instructor] All right, so how did you do? Were you able to handle the different exceptions? Let's take a look at my code. So the first part of my solution is the same as the starting point that I provided for your challenge. I've defined a few local variables to use. And so here I have the code that reads in the user input. All right. And let's see, if we scroll down a little bit. This is where the challenge part was. So I needed to convert the string to a number and then perform the operation that I was told to do. So I enclosed my code in a try block. And the first two operations here, the first two calls to Parse are to convert the strings that the user entered up here in the calls to the ReadLine. And I'm doing that using the Parse function. Now, as I showed in the documentation, this function may throw a FormatException. So I catch that FormatException as my first catch block. And then I write out the message that the exception comes along with. We already saw how to handle the DivideByZeroException earlier in the course. So that one was easy enough to implement as well as the second catch block. And then the third exception is one that my code throws on its own. So you'll see that I have a switch statement here that switches the operation that was chosen. And if they chose add, subtract, multiply or divide, everything's fine. But if they enter anything else, you can see I'm throwing a new ArgumentException with a message and the name of the parameter
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=94)** that caused the exception. Otherwise, my code computes the result, and then the loop continues until they type the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), exit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Exceptions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using try-catch-finally](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=0)** - [Host] One of the challenges of writing good exception handling code is that there are going to be times when you want a certain piece of code to always execute regardless of whether an exception occurred. And a good example of this is when you need to clean up any shared resources that were allocated to your code that need to be released, such as closing a file that was opened earlier in the code. And the way to accomplish this in C Sharp is by using the finally keyword. So let's take a look at the example code in the finally folder here in chapter three start. So to define a block of code that has to always execute, I'm going to add a finally block after all of the catch blocks, and it just works like it sounds. I'll just simply say, finally, and then I'll just console out right line. This code always runs. All right, so let's go ahead and try this out. And first I'll make sure that the code is going to run with no problems. Looks like it. All right. So let's open this up in our terminal and let's run this code. And you can see, sure enough, we get valid output and then the message this code always runs. Alright, so now let's introduce an exception by indexing out of bounds on the nums array. So let's go ahead and make that 15,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=94)** and let's clear the console and then let's run again. Okay. And sure enough, you can see that when I run the code, we can see the exception that the index was out of range, but that this code always runs. And this is useful. So for example, if we go back to the code and take a look, if I had allocated a shared resource in here, like opening a file, but then an exception happened, I might not ever get to the code in my tri block that closes the file when I'm done with it. So I need to put things like that inside my finally block to make sure that any shared resources get de-allocated whenever the code completes, regardless of whether or not an exception happened.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **Speakers:** - [host] (1)

#### [Exception filtering](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=0)** - [Host] One of the really interesting features of C Sharp Exceptions is the ability to attach Boolean conditions to individual catch blocks. This is called exception filtering, and it gives you the ability to indicate that the catch block should only match the exception if the associated Boolean condition returns true. So let's take a look at how this works. So here in my filtering folder in start chapter three, let's open the code. And in this example, I have some code that attempts to retrieve a value at a given index from this array. And if the index is not within the bounds of the array, then an index out of range exception gets generated. And you can see here that it's handled by my code, right? So let's go ahead and run this. Let's open up this in the terminal and let's run it.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=56)** Right, and you can see that if I index into the array, that's fine, but if I make this out of range, let's run it again. You can see that I'm getting my exception. It says parameter index cannot be greater than the array size, which, and I passed in 15, which is wrong. All right? And if I do something really dumb, like if I make this negative 15, and sure enough you can see same exception as being generated and caught. Now I can further fine tune this code by adding another exception handler with an exception filter. So let's close this and what I'm going to do is I'm going to add another catch handler and I'm going to catch index out of range exception again. And I'm going to add a clause that says when Index is less than zero.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=124)** And actually I need to put that in front of my other catch handler because it's more specific. Alright, so when this happens, I'm going to just copy this message from my existing handler and we'll paste that in. And in this case I'm going to have a different message. So my regular exception says parameter index cannot be greater than, but if I pass in a negative number, I want my message to say parameter index cannot be negative.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=159)** Alright, so now I'll get a different error message when my index parameter, which is passed into my function here, is less than zero. Alright, so let's go ahead and try accessing my array with a negative number again, and let's go ahead and run this. All right, so let's execute our code. And sure enough, you can see now it says parameter index cannot be negative when I pass in a negative number and when I pass in a positive number, we should get the original... yes. Now we get the original exception message. So if the exception filter returns false, then the exception will continue to bubble up through the stack until another handler is able to process it or the program terminates. So using this technique, you can fine tune how your exception handlers trigger based upon the values of other elements in your code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Definitions:** is called (1)
> **Speakers:** - [host] (1)

#### [Creating custom exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=0)** - [Instructor] Up until now we've seen how to use the built-in exception classes that .NET provides, but in any real software project there will most likely be a need to create your own custom exception classes. So, let's see how to do that. So, for this example my code is in the Start folder in chapter three in the Custom folder, so let's open up the Program code. All right, so for this example I have some code that controls a digital oven, so this is very similar to a previous example that we saw in the course earlier. And the oven temperature range is limited to between 100 and 500 degrees. So, if a developer tries to set a temperature outside that range I want to throw an exception. And you can see down here I've got my oven code, and this is where the oven temperature is set. And I'd like to throw that exception right here. So, for my program I'm going to create a custom exception for this case. Previously we used one of the built-in exceptions, but now we're going to create a custom exception class. So, let's open up the OvenTempException.cs file. And you can see that I have the beginnings of a custom exception class here that derives from the base system exception class. My exception has a data field named OvenTemp, which will be set by the caller when the exception is created. Now, it's considered a best practice to create three particular constructors when defining your own exceptions. And we're not going to use them in this example, but I want to at least show you what they look like
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=93)** because it is considered a best practice to do this in .NET. So, the first is the default constructor, which takes no arguments. So, I'm going to create a OvenTempException that doesn't take any arguments and just initializes the base exception class. And I'll set my OvenTemp to be zero. All right, the next one is a constructor that takes a string argument, and in this case it'll take the message. And once again, I'll initialize the base class and set my OvenTemp to zero. And then the third required constructor is one that takes a string and something called an inner exception, and that is an exception type. So, I'm just going to pass in this InnerException, and I will initialize the base class with the message and the InnerException. And then once again, I'll set my OvenTemp to zero. Okay, now again, we're not going to use these three constructors in this particular example, but this is considered a base class to make these three. And now that I've defined my three required constructors I'm going to add a fourth one. And before I do that actually,
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=186)** don't worry too much about what this is, the InnerException. I'm going to explain this in a separate video, okay? So, don't get hung up on that. But what I need to do now is define my fourth constructor, and that's going to take an integer value. And I'm going to initialize the base constructor with the oven cannot be set to, and then we'll put the value in there. All right, and then once again, inside my class this time we'll set OvenTemp equal to Value. All right, so now we've created the custom exception class, and we can go back to our code and use it. So, let's go back to, oh, whoops. That's uppercase V, there we go. Okay, so let's go back to our main code. So, let's first add the catch handler to handle our new custom exception. So, here before my finally clause I'm going to put in a catch, and it's going to handle the OvenTempException. And I'll just simply write out to the console that we got an exception, and let's output the message from the exception. All right, so all we need to do now is create
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=283)** and throw the exception when the temperature is outside the acceptable range. And remember, earlier in the course we did this using a built-in exception, so I'm going to have pretty much the same logic now. So, if the temperature is less than 100 or it's greater than 500 I'm going to throw a new OvenTempException, and I'll pass in the temperature as the argument. And that's all we need to do. All right, so let's go ahead and run our code. Let's bring this up in the terminal. And you can see that when I do this, so the call for 200 should work, which it does. And then when I try to call it with 600 degrees we can see that our custom exception is being thrown and caught.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (3), earlier in (1)
> **Env Vars:** net (2)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Inner exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=0)** - [Instructor] In a previous video, I briefly talked about inner exceptions. And if you look at the documentation for the base exception class, you can see that, if I scroll down a little bit here, there's a property called Inner Exception. And so it's a part of every base exception class. So every exception that derives from the base exception class has this property in it. So in this example, we're going to take a closer look at what inner exceptions are and how they're used. The easiest way to think about this is that an inner exception is the exception that caused another exception to happen. So you use the inner exception property to keep track of this, so that the original exception doesn't get lost. So let's go over to our code. And in chapter three, I'm going to open up the Inner Except example here. And I'll open up my program code. And I'm going to show a small example of how this works. Now, let me be clear before we start by saying that what I'm about to demonstrate is a very contrived example. This is only to demonstrate how inner exceptions work. In reality, the particular example I'm about to show you is probably not one that you would encounter, but it's a very concise way of showing how these work. So this code is a variation of the example we saw at the beginning of the course. So I'm going to divide two numbers, which is going to cause a divide by zero exception to happen. Now, in this case,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=93)** my exception handler calls a function named Log Exception that will log the exception out to a file. Ah, but there's a problem. The file that I want to log the data into doesn't exist. So now that's going to cause another exception to happen. So let's go ahead and run this code in its current form. So let's write "dotnet run," okay? And when we do this, ah, you can see, sure enough, that the log exception function, let me scroll down to that, sure enough, is catching the fact that the file not found exception is happening because the log file doesn't exist. But that's masking the real problem, right? The real problem is that the divide by zero exception is what caused all of this to happen in the first place. So what I really want to do is rethrow the file not found exception, so that it will be resurfaced in the program and get the attention of the developers so that we can fix it. To do that, I can add a throw statement to the handler, and I'm going to use the form of the constructor that takes the inner exception argument. So let's go ahead and change our code. So, what I'm going to do is down here where I catch my file not found exception in the log exception code, I'll go ahead and write out that console, but then I'm going to throw a new file not found exception.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=189)** And I'll just say, "Hey, exceptions.txt is missing." And I'm going to include this exception here, the argument that I was trying to log out in the first place. That's now my inner exception argument, all right? Okay, so now let's run again. So we'll run this again. And sure enough, okay, the log file doesn't exist, but oh, no, right now my file not found exception bubbles all the way up through the program and it terminates the program because it's not being handled by anybody. So if you look at the output, you'll see that buried in here, sure enough, there's a divide by zero exception, right? Because we passed it as the argument in the rethrow statement, that's the inner exception, right? This is the exception that's being passed as the inner exception to the one that I'm rethrowing. But this is really messy, right? This isn't fun to read. So let's add some code to handle this a little bit better, where we call the log exception function in the first place. So let's close this. And up here where we're calling log exception, let's go ahead and enclose log exception inside its own triblock. And then let's catch the file not found exception that might happen, and we'll label that "fnf." And in this case, I'm going to just write out to the console
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=291)** that the file was not found, and I'll just write out that exception. And I'm going to check, I'm going to say, "Hey, if that file not found exception, if that inner exception property is not equal to null, right? Let's write that out too." And I'll make a note that there's an inner exception here. "Hey, we've got an inner exception," and that's going to be the fnf.InnerException. All right, so now let's run this one more time.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=338)** All right, and when we run this, we can see, sure enough, that we are getting our... oh wait, oops, hang on a second. Oh no, this is the, yeah, this is the stack trace that I'm writing out. Let's go ahead and just print out the message instead, so it's a lot easier to read. ".Message," there we go. Let's clear this and run it one more time. All right, so now we can see that the log file doesn't exist, right? We have our stack trace, because exceptions is missing. And down here you can see it says, "InnerException: Attempted to divide by zero." Ah, okay, that's a little bit easier now, as a developer, I can say, "Oh, I'll have an easier time tracking down the real problem because whatever's causing my log file to not be there, looks like this has something to do with that, right?" The inner exception property allows me to attach the original exception to any new exception that gets generated along the way. And of course, you can have as many of these chained together as needed. Now, my example only shows two, right? The divide by zero, and the file not found that was caused. But you can imagine that this file not found exception, could itself become another inner exception elsewhere in the program. So it basically gives you a way of maintaining the full context of what happened, when handling an exception might cause one or more other exceptions to happen in the process.

> [!info]- Semantic Content
>
> **CLI Commands:** dotnet (1), make (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **File Paths:** exceptions.txt (1)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### [Exception handling best practices](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=0)** - [Instructor] We've learned quite a bit about exceptions so far during the course. So let's take a moment now and review some of the best practices for working with exceptions in C#. Many of these practices might seem like common sense, such as our first one, and that is, one, try to avoid throwing exceptions whenever possible. Many kinds of exceptions can be avoided just by doing some common checking for problems, like arguments with values that are null or invalid, or indexes that will be out of range, trying to read or write files that don't exist and so on. So by performing some basic checks, you can avoid executing code that will cause exceptions in the first place. Also, remember that exceptions are intended to handle error conditions within your program. Don't use exceptions intentionally to change the flow of your program. There are other better logical constructs for doing this. When writing your catch blocks, start with the most specific exceptions and then move to the more generic ones. Remember that the first catch handler that matches an exception is the one that gets invoked. So if you put the more generic ones first, then the specific ones are less likely to get called, or not at all. A related best practice is to not catch System.Exception directly. And the reason for this is because doing this will catch all the exceptions that get thrown in the program, including the ones coming from the CLR, and that might mask other problems or catch exceptions that your code isn't even designed to handle. Remember to use finally blocks
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=93)** to clean up any resources that might get left allocated as a result of an exception happening, and this includes closing any files that were opened or other shared system resources that need to be released. The next few practices are related to defining your own exception classes. When defining an exception class, end the name with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "Exception." This ensures that it's clear what the class does, and the name is consistent with other exception code throughout .NET. Before you go defining your own exception classes, try to use the ones that are already predefined in .NET. By using the predefined exception classes, you can reduce the amount of additional learning that other developers working in your code will have to do, and it cuts down on code size and complexity. When you create your own custom exceptions, you need to supply three constructors. There's the base constructor, which uses default values; the constructor that takes a string message, and the constructor that takes a message along with an inner exception. By defining these three constructors, your code will be compatible with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the exception handling code in .NET. By following these practices, you can help ensure that your code is using exceptions properly and will be able to operate with the rest of the .NET framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** net (4), clr (1)
> **Best Practices:** best practice (1), remember to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Custom exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=0)** - [Instructor] Okay, let's try another programming challenge. For this challenge, you're going to implement a coin counting program, and you might have seen machines that do this in one of your local stores. You put your coins in the machine and it counts them for you. So we're going to build that. And here is the starting point for the challenge. This array of strings will represent the test input to your code. Your program will then be called using this logic. So we're going to create the CoinCounter class, which you're going to implement. And then for each one of the coins in the test coin array, we're going to call the CountCoin method with that coin. You're going to total up all the coins, and then you're also going to maintain a list of bad inputs and write those out to the console when your program is done. Because sometimes people put things in the machine that are not valid coins, and you can see examples of that here in the list, like a washer and medallion and so on. So I've given you the starting point for the program. What you're going to need to do is implement the CountCoin method, the ListBadCoins method, and down here there's a custom coin exception class. So if your program detects a bad coin, then it needs to throw and handle the coin exception, and that will be, just as a little hint, how you detect and maintain the bad coins list. So I'm going to run my finished version of the code so you can see what the output looks like. So I'll open up this in the terminal
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=95)** and let's make that full screen and let's run the code. All right, and there you can see the result. So the total amount counted is, in this case, $3.37. And there were five bad coins counted. There were a washer, well, there's two washers, a spacer, a token, and a medallion. So you need to maintain that list as you're counting the coins. So go ahead, give this challenge a try, and then I'll explain my solution in a separate video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Versions:** 3.37 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Custom exceptions](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=0)** - [Instructor] All right, let's take a look at my solution to the challenge. So remember, we needed to implement a coin counting program using these test coins as input. And our job was to implement inside of our coin counter class, we had to count the number of coins, we need to list the bad coins, and we needed to use this custom CoinException class. So let me explain each step. So I start off by creating a List variable that's a local list of strings. And this is where I'm going to maintain the list of bad coins because this gives me the ability to keep track of each one of the names of the bad coin examples, as well as automatically give me a count. There's also a local variable that I'm going to return, which is going to be the total amount of the coins counted. All right, so here in my CountCoin function, it takes a string as an input. And what I'm going to do is use a try-catch block. So the try block is going to try to add to the total amount the value represented by the coin type. If an exception happens, in this case the custom CoinException, then we add to the badCoins list the object type. Then this is a local variable that's inside the custom CoinException. I'll explain that in a moment. We're going to add that to the badCoins list. All right, so let's scroll down and see the logic. My CoinValue function takes in the string, looks to see what the string is
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=94)** to check against all of the known valid coin types, right? So we've got penny, nickel, dime, quarter, half dollar, and dollar, and returns the value of each one of those coins. If it's not one of those valid coin types, then I throw a new CoinException and I pass in the CoinType string that I was given along with the message "Bad coin type". All right, so let's scroll down to the exception. We'll come back to the list in a second. My custom CoinException has a local variable named ObjectType, which is the coin type that I was given. I define the three constructors needed for the best practices, even though I'm not using them in this example, it's always the best practice to define them. And then this is the function that I'm going to use. So when I throw a new coin exception, I pass in the coin type and set that to my local property along with the message and I initialize the base exception class with my message. Let's scroll back up. So when the exception happens, you can see that in the badCoins list, we now add the type of that exception coin, right? So this is where we're keeping track of all the lists. And then finally, remember, after we count all the coins, we have to write out the total. Well, that's pretty much easy, right? I just simply output the total property of my coin counter class, which is represented by this internal property here. And then the ListBadCoins function is right here. The ListBadCoins function simply outputs
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=192)** the count property of the badCoins list, which is the total number of bad coins counted. And then I loop over each string in the bad coins list and output the name of the bad coin. All right, so that's my solution. How did you do? Were you able to count the bad coins and get the right total?

> [!info]- Semantic Content
>
> **Code Identifiers:** badcoins (4)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=0)** - [Joe] All right. Congratulations on completing the course. Exceptions are a core feature of C# and .NET programming, and understanding how they work will help you become a better .NET developer. If you're looking for some suggestions on where to go next, I have some ideas for you. To learn more about other key features of C#, consider checking out C# Events, Delegates, and Lambdas or [C- Interfaces and Generics](../Software%20Development/C-%20Interfaces%20and%20Generics.md). Each of these courses cover parts of the C# language that you will encounter as you build more sophisticated and complex applications. Of course, there are plenty of other C# titles to check out here in the library, as well as to help you stay up to date with the .NET platform. I'll see you again soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (3)
> **Speakers:** - [joe] (1)


## Instructor

- [Joe Marini](../../Instructors/Software%20Development/Joe%20Marini.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-exception-and-error-handling-3812037/codespaces)

## Skills Covered

- Debugging
- C#

## Path Context

### In [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)
← [C- Test-Driven Development](C-%20Test-Driven%20Development.md) | **5 of 8** | [C- Cross-Platform Development](C-%20Cross-Platform%20Development.md) →

## Appears In

- [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)

## Related Courses

_Courses sharing skills:_

- [React- Testing and Debugging](../Web%20Development/React-%20Testing%20and%20Debugging.md) — Debugging
- [Advanced PHP- Debugging Techniques](../Cybersecurity/Advanced%20PHP-%20Debugging%20Techniques.md) — Debugging
- [Learning C-](../Software%20Development/Learning%20C-.md) — C#
- [Cert Prep- Unity Certified Associate Game Developer Scripting with C-](../Software%20Development/Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md) — C#
- [Nail Your C- Interview](../Software%20Development/Nail%20Your%20C-%20Interview.md) — C#

---

[↑ Back to top](#)