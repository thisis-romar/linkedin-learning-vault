---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-exception-handling
url: "https://www.linkedin.com/learning/java-exception-handling"
duration_minutes: 70
duration: 1h 10m
level: Intermediate
updated: 8/4/2021
learners: 25892
skills:
  - Exception Management
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/java-exception-handling-2884226"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQHZ6d8egwHeEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1627922020189?e=2147483647&amp;v=beta&amp;t=FV4yYg2MgveFeqnpH9GYQ-ZKwH9wpQuNT3HWaDygNR8"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started as a Java Developer]]'
prev_courses:
  - '[[Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks]]'
next_courses:
  - '[[Java Algorithms]]'
path_nav: '[{"path":"Getting Started as a Java Developer","position":8,"total":10,"prev":"Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks","next":"Java Algorithms"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/exception-management
  - skill/java
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Exception%20Handling.md)

![Java Exception Handling](https://media.licdn.com/dms/image/v2/C4D0DAQHZ6d8egwHeEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1627922020189?e=2147483647&amp;v=beta&amp;t=FV4yYg2MgveFeqnpH9GYQ-ZKwH9wpQuNT3HWaDygNR8)

# Java Exception Handling

> As you build any application, you can’t just assume that everything will run as expected. There are so many things that could cause your applications to not function properly or even crash. This course aims to teach developers how to handle such unforeseen scenarios in applications. Join instructor Cecili Reid as she teaches you the different types of exceptions, how to handle exceptions, and how 

> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling) | 1h 10m | Intermediate | 26K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Why bother with exception handling?
  - What are throwables?
- [**1. Errors in Java**](#1-errors-in-java) (2 videos)
  - What are errors?
  - Error: Uncaught StackOverflowError
- [**2. Exceptions in Java**](#2-exceptions-in-java) (5 videos)
  - What are exceptions?
  - Exception: IOException
  - Exception: FileNotFoundException
  - Challenge: Catch and handle two exceptions
  - Solution: Catch and handle two exceptions
- [**3. Runtime Exceptions in Java**](#3-runtime-exceptions-in-java) (8 videos)
  - What are runtime exceptions?
  - Runtime exception: Return NumberFormatException to user
  - Challenge: Handle an ArithmeticException
  - Solution: Handle an ArithmeticException
  - Runtime exception: Handling of NullPointerException
  - Runtime exception: Unknown runtime exception
  - Challenge: Handle potential runtime exceptions
  - Solution: Handle potential runtime exceptions
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps with exception handling

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Why bother with exception handling?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=0)** - [Instructor] Have you ever experienced the blue screen of death or visited a site that continues to error without any way to resolve it?
>
> **[0:08](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=8)** Don't let your users have the same experience.
>
> **[0:12](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=12)** With this course, you can understand the difference between checked and unchecked exceptions, learn tips on how to handle unforeseeable exceptions, and discover bad air handling practices to avoid.
>
> **[0:25](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=25)** Hi, my name is Cecili and I'm committed to giving users a smooth experience when using apps that I built.
>
> **[0:32](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=32)** Exception handling is crucial in ensuring your app provides the best experience for your users and easy debugging for other developers.
>
> **[0:42](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=42)** Come join me in my LinkedIn learning course to learn and understand the basics of exception handling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### What are throwables?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=0)** - [Instructor] In this course we will learn the definitions of throwable, error, and exception and why we need to learn how to handle them.
>
> **[0:07](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=7)** No previous knowledge around these terms are needed.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=11)** We will be using a Spring Boot app with a REST API to illustrate examples of throwables, errors, and exceptions throughout this course.
>
> **[0:20](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=20)** Please refer to other courses on LinkedIn Learning on REST APIs and Spring Boot if you do not already have experience with these concepts.
>
> **[0:29](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=29)** This includes understanding how to make a REST API with Spring, as well as how to make HTTP requests.
>
> **[0:36](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=36)** An error is an object that can be thrown by an application to indicate a serious problem that should not be caught.
>
> **[0:43](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=43)** Errors, often indicate abnormal conditions that should never occur.
>
> **[0:47](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=47)** For that reason, a method does not have to declare that it could throw an error object.
>
> **[0:52](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=52)** Later in chapter one, we will see an example called the stack overflow error.
>
> **[0:59](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=59)** Exceptions are another object that can be thrown and indicates conditions that an application might want to catch and handle.
>
> **[1:06](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=66)** There are two subclasses to the exception object; checked exceptions and unchecked exceptions or runtime exceptions.
>
> **[1:14](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=74)** We will explore checked exceptions in chapter two, and in chapter three we will discuss runtime exceptions a little more.
>
> **[1:22](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=82)** Lastly, both errors and exceptions are subclasses of the throwable class.
>
> **[1:28](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=88)** The throwable class is a superclass of all errors and exceptions in Java.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=93)** These objects can be thrown using the throw statement and they can be caught using the catch clause.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=100)** Throwables, errors, and exceptions are indicators that an application is not performing as expected.
>
> **[1:46](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=106)** Not handling errors or exceptions can lead to unpredictable behavior of your app and unreliability.
>
> **[1:55](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=115)** For instance, some errors will make your app non-responsive and may even shut the application down.
>
> **[2:01](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=121)** Beyond knowing that errors and exceptions are throwables, we also need to define unchecked and checked throwables.
>
> **[2:09](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=129)** Note, this is different from checked and unchecked exceptions as mentioned before.
>
> **[2:15](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=135)** All checked exceptions are checked throwables in Java.
>
> **[2:19](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=139)** They are checked at compile time.
>
> **[2:22](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=142)** This means any checked exceptions must be declared in the method hitter, caught, or handled in some way.
>
> **[2:30](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=150)** If a checked exception could potentially occur in a method or a class and that exception is not handled, the code will not compile at all.
>
> **[2:39](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=159)** Apps can potentially recover from checked throwables and continue its work.
>
> **[2:44](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=164)** Unchecked throwables include all errors and any runtime exceptions, which are not checked at compile time.
>
> **[2:51](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=171)** Apps will likely not be able to recover at all from an unchecked throwable.
>
> **[2:55](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=175)** We now know what throwables, errors, and exceptions are and how they relate to each other.
>
> **[3:02](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=182)** Understanding this will prove helpful in learning how to handle throwables, errors, and exceptions within your app.

> [!info]- Semantic Content
>
> **Env Vars:** rest (3), api (2), http (1)
> **Code Keywords:** throw (2), class. (1), continue (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** later in (1)
> **Documentation:** stack overflow (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 1. Errors in Java

> [↑ Back to Table of Contents](#table-of-contents)

#### What are errors?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=0)** - [Instructor] Let's discuss more specific errors.
>
> **[0:03](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=3)** In the intro of this course, we learned that errors are a subset of throwables.
>
> **[0:07](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=7)** They are an objects that can be thrown by an app indicating a serious problem.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=11)** Errors are not meant to be caught or handled as they indicate conditions that should never occur.
>
> **[0:16](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=16)** They are unchecked throwables meaning code will compile successfully.
>
> **[0:20](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=20)** Even if a method or class could potentially throw an error.
>
> **[0:24](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=24)** Though, there are a number of errors.
>
> **[0:25](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=25)** I want to highlight two common errors, the IOError and the virtual machine error.
>
> **[0:32](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=32)** IOError is thrown when there is an unrecoverable error with IO or input/output.
>
> **[0:38](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=38)** It is thrown when it is best to terminate the program rather than attempt to handle the exception.
>
> **[0:43](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=43)** Another common error is the virtual machine error to indicate an issue with the Java virtual machine or JVM.
>
> **[0:50](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=50)** Running out of resources it needs to continue working.
>
> **[0:53](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=53)** The subclasses of this error are internal error, unknown error, out of memory error and stack overfill error.
>
> **[1:00](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=60)** Internal error, unknown error, and out of memory error are named appropriately.
>
> **[1:06](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=66)** They're thrown whenever there's an internal issue, an unknown issue, or we have run out of memory.
>
> **[1:13](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=73)** The stack overflow error has a name that is not as straightforward as the other three.
>
> **[1:18](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=78)** Stack overflow occurs when an app is using too much of its memory stack causing the stack to overflow.
>
> **[1:25](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=85)** The most common way for stack overflow errors to occur is through recursion.
>
> **[1:30](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=90)** When an app recurses improperly or recurses too much, it runs out of stack.
>
> **[1:38](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=98)** Now that we have covered errors to more detail and more specifically the stack overflow error, let's take a look at an example of this error.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), throw (1), continue (1)
> **Documentation:** stack overflow (4)
> **Env Vars:** jvm (1)
> **Definitions:** is an  (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### Error: Uncaught StackOverflowError
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=0)** - [Instructor] We are going to look at code that could trigger an error.
>
> **[0:03](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=3)** Recall that an error is a subset of throwables.
>
> **[0:06](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=6)** They are an object that can be thrown by an app indicating a serious problem.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=11)** We will look specifically at a StackOverflowError and the best way to handle it.
>
> **[0:16](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=16)** Errors are throwables that should not be handled by an app and indicate an unrecoverable issue with your application.
>
> **[0:23](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=23)** StackOverflowError is an example of a VirtualMachineError indicating that the Java Virtual Machine or JVM has run out of some kind of resource.
>
> **[0:32](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=32)** In this case, the stack for the app has overflowed.
>
> **[0:36](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=36)** To see this error in action, I created an app that involves the Fibonacci sequence.
>
> **[0:41](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=41)** The Fibonacci sequence is a mathematical series of numbers where each number in the series is the sum of the two preceding numbers.
>
> **[0:50](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=50)** One plus one equals two, one plus two equals three, two plus three equals five, and so on.
>
> **[0:58](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=58)** Now that we know what Fibonacci sequence is, let's review an existing Spring Boot app that provides an endpoint for a REST API that takes a number N and returns the n-th number of the Fibonacci sequence.
>
> **[1:12](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=72)** If we pass in six as N to our endpoint in our app, it will return eight, because eight is the sixth number in the Fibonacci sequence.
>
> **[1:24](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=84)** Generating a Fibonacci sequence is a great way to learn and understand recursion and recursing incorrectly could lead to a StackOverflowError.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=93)** I highly recommend reviewing recursion through a few of our other videos and courses we have available.
>
> **[1:39](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=99)** In our code for this app, I have a standard Java Spring app showing in my IDE with a controller using the REST controller annotation seen on line six.
>
> **[1:50](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=110)** This controller provides an endpoint defined on line 16 that takes N, a request parameter of N.
>
> **[1:59](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=119)** This method returns a response entity with an HTTP status of okay on line 18 with a body of the response containing the n-th number of the Fibonacci sequence.
>
> **[2:12](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=132)** This findFibonacciNumber method uses a private helper method called Fibonacci which is defined on line 27 and it returns the n-th number of the sequence.
>
> **[2:25](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=145)** The Fibonacci method is where we introduce recursion where the method calls itself repeatedly to do a piece of work which we see on line 29.
>
> **[2:35](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=155)** If we were to have a position endpoint to this method set to three, we would call the Fibonacci method again to find the Fibonacci number in the second position which we can see in the equation on the left side of line 28 and we would call the Fibonacci method again to get the first number in the sequence which is the right side of this equation on line 29.
>
> **[3:04](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=184)** Do you notice a potential mistake in how this method is implemented?
>
> **[3:08](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=188)** Don't worry if you do not see it.
>
> **[3:11](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=191)** Let's run the application and try the endpoint to see what happens.
>
> **[3:20](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=200)** I know that my application is running, because I see started Fibonacci application at the bottom of my console here in my IDE.
>
> **[3:29](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=209)** I'm running my app through my IDE, but you can also run it via command line or however you prefer to run your app.
>
> **[3:38](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=218)** I like using Postman which is a GUI or a graphical user interface for submitting various kinds of requests to APIs.
>
> **[3:45](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=225)** You can, of course, use whatever method you prefer.
>
> **[3:48](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=228)** With this, I can use the URL, localhost:8080/fibonacci/findanumber?n=3, to get the third number of the sequence which should be two.
>
> **[4:05](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=245)** However, we get an error.
>
> **[4:07](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=247)** We get a 500 internal server error as seen on the bottom of our Postman response.
>
> **[4:13](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=253)** Back in the console log of our app, note that the stack trace has many, many lines pointing to line 29 in our controller.
>
> **[4:24](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=264)** This is because we are using recursion and never stop recursing, leading us to continue to use more and more of the stack until the JVM no longer has space to use.
>
> **[4:36](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=276)** At the top here, we see the dreaded StackOverflowError.
>
> **[4:41](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=281)** Errors are not likely at all recoverable, so the best way to handle them is to fix them or prevent them.
>
> **[4:47](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=287)** In our case, this means adding an if statement in our Fibonacci helper method.
>
> **[4:57](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=297)** If our position is equal to or less than one, we just want to return the position variable itself.
>
> **[5:09](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=309)** Now let's restart our application and see if our code change was successful.
>
> **[5:20](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=320)** Now that our application is started, again, because I see started Fibonacci application at the bottom of my console, I will try the request again.
>
> **[5:29](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=329)** And success, we get back the result of two which we expect and there are no more StackOverflowErrors.
>
> **[5:36](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=336)** For other errors, we will have to figure out the cause much like we did here and make corrections within our app.
>
> **[5:43](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=343)** You now understand what can lead to a StackOverflowError and understand the best way to handle all types of errors.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3), jvm (2), rest (2), api (1), http (1)
> **Code Keywords:** let (3), case, (2), pass (1), private (1), interface (1)
> **Definitions:** is a  (4), is an  (1)
> **Tools:** postman (2), command line (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** findfibonaccinumber (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Ports:** :8080 (1)


### 2. Exceptions in Java

> [↑ Back to Table of Contents](#table-of-contents)

#### What are exceptions?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=0)** - [Instructor] We will discuss unchecked and checked exceptions, and specific examples of each.
>
> **[0:06](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=6)** As a refresher, an exception is another object that can be thrown, and indicate conditions that an app might want to catch.
>
> **[0:13](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=13)** There are two types to the exception object, checked exceptions and unchecked exceptions, also known as runtime exceptions.
>
> **[0:25](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=25)** Checked exceptions are throwables in Java that are checked at compile time.
>
> **[0:30](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=30)** This means any checked exceptions must be declared in the method hitter or be caught and handled.
>
> **[0:38](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=38)** If a checked exception could potentially occur in a method or class, and that exception is not handled, the code will not build or compile, which means your app will not start at all.
>
> **[0:49](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=49)** Apps can potentially catch exceptions, change some aspects of the code at runtime, and continue to work without some kind of intervention.
>
> **[0:57](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=57)** IOExceptions are checked exceptions that can occur when there's an issue with input or output.
>
> **[1:04](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=64)** A more specific example is the FileNoteFoundException, where requested file or directory does not exist within the file system.
>
> **[1:12](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=72)** In this case, an app can recover from the FileNotFoundException by simply recreating the file and continuing with its work.
>
> **[1:21](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=81)** Unchecked exceptions include runtime exceptions, which are not checked at compile time.
>
> **[1:27](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=87)** Apps will likely not be able to automatically recover from an unchecked exception, as they are not anticipated when writing the code.
>
> **[1:35](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=95)** NullPointerExceptions, or NPEs, are probably the most popular unchecked runtime exceptions.
>
> **[1:42](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=102)** They can occur any time an action is attempted on an object that is null.
>
> **[1:47](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=107)** If a method forgets to initiate a string variable, and attempts to use that variable in some way, the compiler will not require the code to update the method signature to indicate an NPE could be thrown.
>
> **[2:00](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=120)** However, you may get a warning from your favorite IDE, or from code analysis software to fix that before an NPE is triggered within your live or deployed code.
>
> **[2:13](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=133)** Developers might need to know how to handle these predefined exceptions built in or provided by the Java library, like the IOException.
>
> **[2:22](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=142)** Or they might need to handle custom specific exceptions created by an API or service they depend on.
>
> **[2:29](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=149)** Or, they might need to create their own specific exceptions that users or other dependencies will need to know how to handle.
>
> **[2:36](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=156)** Throughout the rest of the chapter and the next, we will learn about specific strategies for throwing, catching, and handling a variety of these exceptions now that we know what they are.

> [!info]- Semantic Content
>
> **Code Keywords:** catch. (1), class, (1), continue (1), case, (1), require (1)
> **Env Vars:** npe (2), ide (1), api (1)
> **Definitions:** known as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Exception: IOException
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=0)** - [Instructor] In this example, we will learn the first part of handling an exception.
>
> **[0:04](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=4)** We will look at the IO exception, which is a checked exception, and we will declare that a method we'll throw it.
>
> **[0:12](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=12)** To do this, I have made some changes to the Fibonacci app.
>
> **[0:15](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=15)** In a Fibonacci controller, I have added a new end point online 33 co create sequence.
>
> **[0:22](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=22)** This generate Fibonacci sequence method online 34, takes in a request forum of in.
>
> **[0:29](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=29)** We've been past that in value to the GIT sequence method to find online 45.
>
> **[0:36](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=36)** This method will generate an array list of integers representing the sequence.
>
> **[0:41](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=41)** If N is three and array with values 0, 1, 1, and two will be returned.
>
> **[0:50](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=50)** Online 36 of our new in play we also store the sequence in a file using the store method.
>
> **[0:59](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=59)** The store method is defined online 67.
>
> **[1:03](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=63)** We have not yet implemented, but it will return a string value representing the name of the file holding the new sequence.
>
> **[1:11](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=71)** Online 36, that string name of the file is what is returned in the response entity.
>
> **[1:18](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=78)** Let's now implement the code for the source sequence method.
>
> **[1:22](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=82)** First online 69, let's define the file object and the name of the file.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=93)** Since this file does not yet exist, we will have to create it with the file create new file methods.
>
> **[1:41](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=101)** You will notice in my IDE online 71 through our red squiggles under the create new file method.
>
> **[1:49](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=109)** This is my IDE telling me that the create new file method could throw an IO exception and it's not currently being handled.
>
> **[1:58](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=118)** The IO exception is thrown anytime there is an issue with an input-output that should be handled, but I'm going to ignore this for now and keep writing my code anyway.
>
> **[2:09](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=129)** After I create the file, I now have to create a file writer.
>
> **[2:20](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=140)** This file writer will be used to write to the new text file that I created online 69.
>
> **[2:27](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=147)** And now I want to write the contents of my sequence to the file.
>
> **[2:36](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=156)** A good practice working with the file writer object is to always close the objects that I am reading from or writing to.
>
> **[2:49](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=169)** Now online 76, I returned the name of the file that I just created.
>
> **[2:56](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=176)** With this code I have five methods underlined with RIT squid.
>
> **[3:02](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=182)** First online 71 for the create new file method.
>
> **[3:06](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=186)** Then online 72 for the file writer constructor, line 73 for the right method, line 74 and line 75 for the flush and closed methods.
>
> **[3:17](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=197)** I still don't care so I'm going to run my application anyway.
>
> **[3:22](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=202)** Well, all of these errors are now preventing my application from starting because an IO exception is a checked exception.
>
> **[3:30](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=210)** And as the error says, I must catch it or declare it in the method.
>
> **[3:35](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=215)** Let's go ahead and fix that.
>
> **[3:37](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=217)** Online 67, I will just add the throws keyword to indicate that this method could throw an IO exception.
>
> **[3:47](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=227)** All of the red squiggles in my IDE for this store sequence method under line 67 are now gone.
>
> **[3:56](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=236)** However, I have another red squiggle under store sequence online 36 for my input method.
>
> **[4:06](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=246)** Here, I can just add the exception to my method here as well.
>
> **[4:11](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=251)** If I run the application again, I can see that it was started successfully.
>
> **[4:17](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=257)** And I know that because of the start at Fibonacci application message at the bottom of my console.
>
> **[4:23](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=263)** Now let's give this input a try and my IDE gooey.
>
> **[4:28](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=268)** By sending a post request so the end point local host 80 80 Fibonacci slash create sequence N is equal to three.
>
> **[4:36](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=276)** The response is just Fibonacci texts because that's the name of the text file that I created earlier.
>
> **[4:42](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=282)** So back in my IDE, I can open this text file and see that I have 0, 1, 1 and two stored in the file.
>
> **[4:52](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=292)** In this video, we have simply ensured that a method declares that it could throw an IO exception, which is the first way of handling a checked exception.
>
> **[5:02](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=302)** In the next example, we learn how to catch a more specific type of exception.
>
> **[5:06](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=306)** The file not found exception.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (4), let (4), this, (1)
> **Env Vars:** ide (5), git (1), rit (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** git (1), find (1)
> **Cross-References:** in the next (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Exception: FileNotFoundException
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=0)** - [Instructor] In this example, we will learn how to catch an exception.
>
> **[0:03](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=3)** More specifically, the FileNet found exception, which is a type of checked exception and a type of IO exception.
>
> **[0:12](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=12)** To do this, I added another method to the Fibonacci app called Get Sequence on line 38, this retrieve Fibonacci sequence method, on line 39 takes in a string file name.
>
> **[0:24](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=24)** It uses that string file name on line 40 and passes it to the private helper method, gets sequenced defined on line 43.
>
> **[0:33](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=33)** This method on line 44 uses the buffered reader to open the file with the specified file name.
>
> **[0:42](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=42)** Online 45 read each line in the file and return it as one string.
>
> **[0:48](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=48)** This file contains the Fibonacci sequence stored in the requested file.
>
> **[0:53](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=53)** Notice on line 43, we indicate that this gets sequenced method will throw a FileNet found exception.
>
> **[0:59](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=59)** This is very similar to what we have on line 39 for the parent exception, IO exception.
>
> **[1:07](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=67)** Let's start up our application and try this get sequence endpoint.
>
> **[1:13](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=73)** My application has started because I see the started Fibonacci application message at the bottom of my console.
>
> **[1:20](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=80)** To make the requests.
>
> **[1:21](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=81)** I am using the postman GUI to send a get request to the fibonacci/get sequence file name = Fibonacci.txt URL.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=93)** The response for this existing TXT is returned, which includes zero, one, one, two.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=100)** What happens though if I request a file name that does not exist?
>
> **[1:45](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=105)** Let's give that a shot with a file called fib.txt, the response is not a user-friendly JSON object, and it's returning an HTTP status of 500 internal server error.
>
> **[1:59](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=119)** Spring rests sees this IO exception or the file that found exception and uses the 500 as the generic response, any time it has an internal issue.
>
> **[2:11](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=131)** And we do not specify specifically what status should be used.
>
> **[2:18](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=138)** We would like to return more useful and helpful information to the user, so they know how to resolve it.
>
> **[2:24](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=144)** This is where we could use a try-catch.
>
> **[2:27](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=147)** Back in our retrieved fibonacci sequence method is where we could try a try-catch statement.
>
> **[2:34](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=154)** We could try to retrieve a sequence from a file name and catch a specific exception and notify the user.
>
> **[2:45](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=165)** On line 40, I will start my try-catch statement.
>
> **[2:51](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=171)** I specifically want to try the get sequenced response.
>
> **[3:01](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=181)** Because this is a try-catch.
>
> **[3:03](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=183)** I actually want the variable that I'm storing my sequence in to start outside of my try-catch statement.
>
> **[3:16](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=196)** This will allow me to pass the sequence variable into the response entity defined on line 44.
>
> **[3:25](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=205)** On line 43, I will start my catch block and I wants to specifically catch the file that found exception and give it the variable name of E.
>
> **[3:36](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=216)** with this catch statement, the file that found exception is the only exception that I am catching for now.
>
> **[3:43](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=223)** This will be triggered anytime to get sequenced method throws the specified exception.
>
> **[3:49](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=229)** When it does, we want to return a more specific response entity with the status of HTCP not found.
>
> **[4:06](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=246)** And I want the body of my message to be some helpful message to the users, like file not available, please check requests and try again.
>
> **[4:20](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=260)** We could also use the past and exception from our catch statement and retrieve any information from that exception.
>
> **[4:28](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=268)** In this case, the get message method is what I'll use.
>
> **[4:32](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=272)** Now restart my application To try a request from earlier.
>
> **[4:36](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=276)** My application has started and when I try this same fib.txt request, I get back a string, body, this says FileNet available, please check requests and try again.
>
> **[4:50](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=290)** In these specific, exception message of fib.txt, no such file or directory is also included.
>
> **[4:57](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=297)** Note for security reasons.
>
> **[4:59](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=299)** You may not want to share the exceptions message in the response to the user.
>
> **[5:05](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=305)** Exceptions often have more details on the underlying structure of the code and potentially sharing this with the hacker, indicates a weakness in your code that they could leverage.
>
> **[5:16](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=316)** Keep this in mind, when you're actually handling exceptions and production.
>
> **[5:20](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=320)** Another thing of note is that the status in the top right-hand corner of our response here is a 404 not found.
>
> **[5:28](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=328)** Previously it was a 500 internal server error.
>
> **[5:31](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=331)** This makes the response more useful for future developers, as they may need to know how to troubleshoot this error on their end, if we kept it as the 500 exception, however, we would likely have to fill a lot of unnecessary support requests.
>
> **[5:47](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=347)** Now that we know this try-catch works, let's discuss chaining try-catch statements.
>
> **[5:52](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=352)** As you may recall, I have mentioned before that a file that found exception is a subclass of the IO exception.
>
> **[5:59](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=359)** This is helpful to know for when we want to catch different types of exceptions.
>
> **[6:03](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=363)** To illustrate this, I will start another catch statement on line 44, but this time I want to catch the IO exception.
>
> **[6:13](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=373)** You will notice that my IDE underlined line 45 with an error.
>
> **[6:19](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=379)** This is because both catch clauses are not around necessary since any FileNet found exceptions that are thrown will already be caught by the first catch phase on line 44.
>
> **[6:30](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=390)** I could however, change the order and because FileNet found is a more specific exception.
>
> **[6:40](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=400)** We want that to be caught first and then let any other IO exception that could possibly occur be caught by the second statement on line 47.
>
> **[6:50](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=410)** However, again my editor gives me a warning this time that a FileNet found exception has already been cut.
>
> **[6:58](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=418)** This is because we are working with a checked exception and our IDE already knows that this method will only throw one type of IO exception and that's FileNet found exception, making this catch statement on 47, unnecessary.
>
> **[7:14](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=434)** We now have an understanding of how to try a piece of code and catch an exception.
>
> **[7:20](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=440)** We also know how to chain catch clauses and keep in mind the exceptions and their subclasses and the order in which we catch them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), throw (2), catch. (2), private (1)
> **Env Vars:** ide (2), gui (1), url (1), txt (1), json (1)
> **Definitions:** is a  (5)
> **File Paths:** fib.txt (3), fibonacci.txt (1)
> **Warnings:** troubleshoot (1), warning (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Tools:** postman (1)
> **UI Navigation:** open the (1)

#### Challenge: Catch and handle two exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=0)** - [Instructor] So far in this course, we have learned about throwables, exceptions, and how to throw and catch these exceptions.
>
> **[0:12](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=12)** In this challenge, we will update the rest of our code to handle catching two other exceptions.
>
> **[0:19](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=19)** In our controller, we have two endpoints that currently throw exceptions.
>
> **[0:23](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=23)** First, on line 23 for the fine number endpoint, where a Fibonacci out of range exception is thrown.
>
> **[0:31](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=31)** This is because the user is providing a number that is too high for the app to handle and could potentially result in a stack overflow error due to the simple recursive approach that we are using to find the Fibonacci sequence.
>
> **[0:45](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=45)** You can take a look at that in our Fibonacci method.
>
> **[0:49](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=49)** This is on line 106 in our controller.
>
> **[0:53](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=53)** The second endpoint that is throwing an exception is found on line 34 for our create sequence endpoint, which throws an IO exception, whenever an exception arises while storing a generated Fibonacci sequence in a file.
>
> **[1:08](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=68)** In both cases, a REST API will return an unhelpful 500 internal server error to our users.
>
> **[1:16](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=76)** We can see this in action.
>
> **[1:18](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=78)** My application is already running, as we can see, in the bottom of my console with the started Fibonacci application message.
>
> **[1:26](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=86)** In Postman, a GUI that helps me test REST and HTTP calls, I can try to obtain the ninth member in the Fibonacci sequence.
>
> **[1:34](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=94)** Nine is greater than eight.
>
> **[1:36](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=96)** So I will get an exception.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=100)** As expected, Postman gives me a 500 response in the response section of my Postman UI.
>
> **[1:46](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=106)** The more helpful message and stack trace is in my console log here in my IDE.
>
> **[1:54](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=114)** Our app will respond with a 500 HTTP response as well, if our store sequence method manages to throw an IO exception.
>
> **[2:05](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=125)** Since we know 500 internal server errors are not the most helpful responses with the most helpful messages for a user, your challenge, which should take no more than five minutes, is to update both endpoints to catch either exception.
>
> **[2:20](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=140)** Be sure to return a more appropriate HTTP response message.
>
> **[2:25](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=145)** For help, or as a refresher, please refer to the video on the file net found exception and how that was handled.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), rest (2), api (1), gui (1), ide (1)
> **Code Keywords:** throw (3)
> **Tools:** postman (3)
> **CLI Commands:** find (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Catch and handle two exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=0)** - [Instructor] Your challenge for this chapter was to catch and handle two exceptions that were thrown from the fine number endpoint and the create sequence endpoint.
>
> **[0:15](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=15)** We will walk through the solution now.
>
> **[0:17](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=17)** Let's start with the create sequence endpoint on line 34.
>
> **[0:21](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=21)** On line 36, we are calling the store Sequence method.
>
> **[0:25](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=25)** This method can be found on line 83.
>
> **[0:30](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=30)** We see here that this method is also throwing an IO exception.
>
> **[0:34](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=34)** and that is because of our use of the file object and file writer objects in this method on lines 85 and 91.
>
> **[0:44](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=44)** Back on line 36, this is where we're going to start our tri-catch clause.
>
> **[0:50](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=50)** In our tri-statement we want to try the same store sequence method here.
>
> **[0:58](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=58)** And since this store sequence method is returning a file name, we'll actually define that file name above, outside of our tri-catch statement.
>
> **[1:11](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=71)** And on line 38, we'll set that variable to the result that is returned from the store sequence method.
>
> **[1:19](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=79)** For our catch clause, we specifically want to just catch the IO exception for now and give it the variable of E.
>
> **[1:29](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=89)** if an IO exception were to occur, we want to return the response entity of status internal server error still.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=100)** However, with this, we are able to define the body of our response entity, as well as the message that is returned For now, we will just return the exception message in the body.
>
> **[1:53](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=113)** The last thing that we need to do is update line 42 and replace this with the file name object that we defined on line 38.
>
> **[2:02](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=122)** Our IDE actually lets us know that we no longer needs this throws IO exception methods since we are specifically handling that exception.
>
> **[2:11](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=131)** So for the second end point, which is defined number endpoint on line 23, handling this is not going to be much different.
>
> **[2:21](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=141)** We will again define an integer called fibNum, ends on line 24, and after that, on line 25, we'll start our tri-clause.
>
> **[2:33](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=153)** You want to set this fibNum variable to the value for Fibonacci N and on line 28, we want to return that fibNum as well.
>
> **[2:52](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=172)** For our catch statement on line 27, I want to specifically catch the Fibonacci out of range exception.
>
> **[3:00](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=180)** Now this time when I returned the response entity, I want to return a status of bad request
>
> **[3:12](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=192)** and set the body to some kind of helpful message.
>
> **[3:16](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=196)** In this case, we'll again just use the exceptions message.
>
> **[3:22](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=202)** You'll notice on line 28 we have an error, and that is because I'm trying to return the response entity with a string.
>
> **[3:28](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=208)** So an easy fix for that is just to change our response entity object to string and say, string that value of, on line 30, for Fibonacci number.
>
> **[3:40](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=220)** And just like before, IDE is letting us know on line 23 that we no longer need this through statements, since we are specifically handling the Fibonacci out of range exception.
>
> **[3:50](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=230)** With this implemented, let's restart our application to confirm this change.
>
> **[3:58](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=238)** My app is now started because of this start at Fibonacci application message and my console.
>
> **[4:04](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=244)** In Postman before, we received the internal server error within that very helpful message.
>
> **[4:11](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=251)** Actually, no message at all is seen on line five (indistinct).
>
> **[4:15](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=255)** So if we were to try this request again for the find number end point we're N is equal to nine, we will get this message of the requested position.
>
> **[4:24](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=264)** "Nine is too large, please try again".
>
> **[4:27](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=267)** After this challenge, hopefully you now have a better understanding of how to try to catch and handle specific exceptions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), case, (1)
> **Code Identifiers:** fibnum (3)
> **Env Vars:** ide (2)
> **CLI Commands:** find (1)
> **Tools:** postman (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Runtime Exceptions in Java

> [↑ Back to Table of Contents](#table-of-contents)

#### What are runtime exceptions?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=0)** - [Instructor] We have covered throwables and exceptions in a broader scope so far in this course.
>
> **[0:06](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=6)** This chapter, we will dive into examples of runtime exceptions.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=11)** In this video, we revisit what runtime exceptions are.
>
> **[0:16](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=16)** Runtime exceptions are unchecked exceptions.
>
> **[0:19](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=19)** This means our JVM or the Java Virtual Machine does not check for these exceptions at compile time when code is compiled.
>
> **[0:27](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=27)** Apps will likely not be able to automatically recover from an unchecked exception as they are not always anticipated when writing the code.
>
> **[0:35](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=35)** If you recall, unchecked exceptions do not have to be declared in a methods header like checked exceptions.
>
> **[0:43](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=43)** Of all of the different runtime exceptions, NullPointerExceptions or NPEs for short are probably the most popular runtime exceptions.
>
> **[0:54](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=54)** They can occur anytime an action is attempted on an object that is null.
>
> **[0:58](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=58)** If a method forgets to initiate a string variable and attempts to use that variable in some way, the compiler will not require the code to update the method signature to indicate an NPE could be thrown.
>
> **[1:11](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=71)** However, you may get a warning from your favorite IDE or from code analysis software to fix that before an NPE is triggered with live or deployed code.
>
> **[1:23](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=83)** We will also discuss two other types of runtime exceptions, including the NumberFormatException and the ArithmeticException.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=93)** A NumberFormatException can occur when attempting to convert a string into a number.
>
> **[1:39](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=99)** For instance, attempting to translate the letter or char or string b into a long.
>
> **[1:45](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=105)** This can be handled through validation of any user input.
>
> **[1:47](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=107)** But later in this chapter, we explore how to handle catching this exception as well.
>
> **[1:51](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=111)** Lastly, we'll see the example of an ArithmeticException, which can be thrown when attempting to divide by zero.
>
> **[1:58](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=118)** These exceptions are not an extensive list of existing runtime exceptions.
>
> **[2:03](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=123)** We can find all possible runtime exceptions in the Java library by going to the Java Docs for the runtime exception and seeing direct subclasses.
>
> **[2:13](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=133)** However, again, this is not an extensive list as other libraries might create their own subclasses of runtime exceptions that we will need to handle as well.
>
> **[2:22](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=142)** In the last part of this chapter, we explore how we can handle unknown exceptions that might occur.

> [!info]- Semantic Content
>
> **Env Vars:** npe (2), jvm (1), ide (1)
> **Cross-References:** later in (1), in the last (1)
> **CLI Commands:** find (1)
> **Code Keywords:** require (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Runtime exception: Return NumberFormatException to user
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=0)** - [Instructor] Now that we know a few more examples of runtime exceptions, let's see one, the number format exception in action.
>
> **[0:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=7)** Before we do that, let's review the code we have so far.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=11)** Our API now provides three endpoints.
>
> **[0:14](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=14)** The first is a find number endpoint on line 22 which returns the n-th number of the Fibonacci sequence.
>
> **[0:22](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=22)** The next endpoint is the create sequence endpoint on line 39 which generates the Fibonacci sequence up to the n-th index and stores the sequence in a file.
>
> **[0:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=35)** This endpoint also returns the file name.
>
> **[0:38](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=38)** Finally, our last endpoint is the get sequence endpoint which takes in a file name and returns a stored sequence.
>
> **[0:46](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=46)** For now, we're going to focus on the create sequence endpoint on line 39.
>
> **[0:52](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=52)** On line 40, you will notice that our request param is now a string object.
>
> **[0:57](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=57)** And on line 41, our get sequence helper method is expecting an integer.
>
> **[1:03](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=63)** So we are parsing the string N into an integer.
>
> **[1:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=67)** This is different, however, from the find number endpoint on line 23, where the request parameter is an integer and that is being passed in.
>
> **[1:18](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=78)** Let's see what happens when I pass in a letter instead of a number to either of these endpoints.
>
> **[1:25](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=85)** I already have my Java application running as you can see in the bottom of my console with the started Fibonacci app message.
>
> **[1:32](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=92)** In my Postman GUI, I will try to send a request to my application.
>
> **[1:38](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=98)** For my find number endpoint, if I pass in B as my request parameter, I should get back a bad request status 400.
>
> **[1:48](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=108)** It's not the most helpful message, but I at least understand that as a user, I am passing something in that is not the best expected request.
>
> **[1:58](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=118)** This is happening, because our Spring REST controller is expecting an integer, but we are passing in a string.
>
> **[2:06](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=126)** You will notice in our console, we actually don't have any exceptions, but a bad request HTTP response is being passed before we even attempt to try to get the Fibonacci number on line 26.
>
> **[2:22](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=142)** For the create sequence endpoint, if I try that, which is a post request, I now get an internal server error response with a status of 500.
>
> **[2:36](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=156)** This is more cryptic and in order to know exactly what's going on here as a user, I would have to have access to the logs.
>
> **[2:43](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=163)** And we now can see in our console logs that we get a number format exception, the input string of B.
>
> **[2:52](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=172)** Recall that a number format exception will occur when attempting to translate a string or character that isn't a number into an integer, or long, or another number object.
>
> **[3:06](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=186)** This blue highlighting in my console here tells me exactly what line is causing this problem.
>
> **[3:12](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=192)** We are attempting to parse an integer from the letter B and we fail.
>
> **[3:17](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=197)** You will notice that the number format exception is an unchecked exception.
>
> **[3:22](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=202)** IntelliJ, my IDE, did not warn me to handle this exception and our application continued to build.
>
> **[3:29](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=209)** To handle this, instead of having our create sequence method attempt to parse the string, I actually want the get sequence method to handle this for us.
>
> **[3:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=220)** So that's going to require changing this hub or method to take in a string of N as well.
>
> **[3:50](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=230)** So on line 73, I will change the object type from int to string for a variable N.
>
> **[3:59](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=239)** I'll also rename it to STR for now.
>
> **[4:03](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=243)** And on line 74, I'll create my int N variable and use my integer.parseint method to parse the string value that we are getting into an integer.
>
> **[4:19](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=259)** Now the exception is actually occurring from the parseint method on line 74.
>
> **[4:26](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=266)** So that, I want to surround with a try-catch.
>
> **[4:30](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=270)** So to do that, I will just define the N variable on line 74
>
> **[4:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=280)** and set that within our try statement on line 76.
>
> **[4:46](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=286)** I want to specifically catch on line 77, the number format exception.
>
> **[4:53](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=293)** We can now do a number of things here depending on what you prefer to happen.
>
> **[4:57](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=297)** One option could be to default N regardless of what the user passes in.
>
> **[5:04](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=304)** So if the input variable ends up being a character B, we will default the integer used to zero.
>
> **[5:14](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=314)** Another way to handle it is to maybe just log the exception and default the value or default the response.
>
> **[5:21](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=321)** So instead of defaulting N to a number, we'll just automatically return an empty array list for the response.
>
> **[5:31](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=331)** I don't particularly like either of these options, because I think this is information that the user should know and the user should have to handle.
>
> **[5:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=340)** So in this case, I actually want to create my own exception that I can throw and handle specifically elsewhere in my application later in my code.
>
> **[5:50](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=350)** So I'm actually going to create a new object for this called the Fibonacci input exception.
>
> **[6:01](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=361)** And I actually want this to extend the exception class.
>
> **[6:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=367)** And since this is extending the exception class, I actually want to...define my constructor here
>
> **[6:27](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=387)** and use super in order to pass the message to the parent constructor for exception and that is on line five.
>
> **[6:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=395)** Now back in my controller, I now want to, on line 78, throw a new Fibonacci exception
>
> **[6:48](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=408)** and I want my message to be something like, "Invalid input, please provide a valid number."
>
> **[7:01](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=421)** So my IDE gives me these red squiggles and this is because I need to indicate that we are throwing a Fibonacci input exception.
>
> **[7:12](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=432)** And this is because it is a checked exception now.
>
> **[7:16](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=436)** So I'm basically translating an unchecked exception, the number format exception on line 77, and translating it into a checked exception, a Fibonacci input exception on line 78.
>
> **[7:29](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=449)** Now I did have the option of creating a new exception that extends the more specific runtime exception.
>
> **[7:37](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=457)** However, ideally they should only be thrown in specific cases like when code will actually need to be changed and your application redeployed to fix the issue.
>
> **[7:48](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=468)** We now have to handle the exception for our endpoint in create sequence.
>
> **[7:53](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=473)** So back on line 41, I'll actually create a yet another try-catch statement.
>
> **[8:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=487)** And this time I want to catch our specific Fibonacci endpoint exception on line 44.
>
> **[8:13](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=493)** Within this catch statement, we are going to return a response entity with the status of bad request.
>
> **[8:21](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=501)** And since we have a pretty helpful exception message, I will just set that as the body of my HTTP response.
>
> **[8:33](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=513)** Now that we have made these changes, I'm going to restart my application and confirm the response that we get.
>
> **[8:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=520)** My application has started based off of the started fib application message at the bottom.
>
> **[8:46](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=526)** Now in Postman, when I go and try and create the sequence with the number set to B, I get a 400 bad request and a helpful message to provide a valid number.
>
> **[8:59](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=539)** Note that another way to handle number format exceptions is to actually do validation ahead of time.
>
> **[9:05](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=545)** So it might be before we attempt to parse the string, we actually try and confirm another way that the string is a valid number.
>
> **[9:15](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=555)** Now with this done, we have learned about the number format exception, and how to create, throw, and handle our very own custom exception.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), throw (3), finally, (1), this, (1)
> **Env Vars:** http (2), ide (2), api (1), gui (1), rest (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** find (3)
> **Tools:** postman (2), intellij (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Handle an ArithmeticException
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=5)** - [Instructor] We have seen a variety of exceptions so far.
>
> **[0:09](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=9)** And for this challenge, you will have to handle a runtime exception, more specifically the arithmetic exception.
>
> **[0:16](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=16)** This is caused by an invalid arithmetic or mathematical operation, like dividing by zero.
>
> **[0:23](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=23)** For this challenge, I have added yet another end point to find the ratio for a given index and its predecessor.
>
> **[0:30](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=30)** For instance, if the index requested is three, we would retrieve the third number in the Fibonacci sequence, which is two.
>
> **[0:38](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=38)** We would also retrieve the second index in the sequence, which is one, two divided by one is the ratio between the index requested and its predecessor.
>
> **[0:48](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=48)** And the result which is two, is what the end point will return.
>
> **[0:53](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=53)** Why do we care about generating the ratio beyond needing some way to do this challenge and trigger an arithmetic exception?
>
> **[1:03](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=63)** Well the ratio between two consecutive numbers in the Fibonacci sequence approaches the golden ratio.
>
> **[1:10](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=70)** The golden ratio is a mathematically significant number that appears in nature.
>
> **[1:15](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=75)** I encourage you to learn more about the Fibonacci sequence and the golden ratio if you are interested.
>
> **[1:20](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=80)** But for now, just know that we will provide a simple end point that returns the ratio of a number and its predecessor in the sequence for us.
>
> **[1:30](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=90)** Who knows we may be able to actually use this end point in some way to try and figure out which numbers in the sequence gets us closest to the golden ratio.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=100)** This new endpoint, on line 76 finds the Fibonacci number for the requested index and also the previous number in this sequence.
>
> **[1:51](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=111)** We then calculate the ratio by dividing the two numbers and we return the response as a string in the response entity on line 79.
>
> **[2:01](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=121)** Note for the sake of consistency and to best illustrate this exception.
>
> **[2:05](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=125)** I'm keeping all numbers as integers.
>
> **[2:08](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=128)** This does mean that our ratio returned will always be an N and not a true ratio.
>
> **[2:14](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=134)** If we wanted this ratio represented in a decimal format, we would have to use another data type like double or float instead.
>
> **[2:23](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=143)** Anyway, we can see that I'm running my application with the start up Fibonacci app message at the bottom of my console.
>
> **[2:31](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=151)** Now my Postman going, I'd like to see what happens when I try to get the ratio for the first number of the sequence and its predecessor.
>
> **[2:39](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=159)** Using the localhost 8080 Fibonacci find ratio URL, where N is equal to one, I now get an internal server error with the HTTP status of 500.
>
> **[2:53](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=173)** There's again, no message.
>
> **[2:55](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=175)** And it's not at all helpful.
>
> **[2:57](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=177)** So this means we need to do better error handling.
>
> **[3:00](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=180)** Looking back at our console log.
>
> **[3:02](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=182)** We received an arithmetic exception, but why?
>
> **[3:06](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=186)** For the first number of the sequence, we know that we'll get one.
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=189)** However, what is the number before the first number in the sequence?
>
> **[3:14](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=194)** We can use our find number endpoint in our Postman in order to determine what that maybe.
>
> **[3:23](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=203)** So instead of passing in one for invariable, let's pass in zero, this returned zero.
>
> **[3:31](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=211)** This means when we try to calculate the ratio for the first index, we are dividing by zero.
>
> **[3:39](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=219)** That equals nothing that is mathematically impossible to divide something by nothing.
>
> **[3:44](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=224)** This is why we received an arithmetic exception.
>
> **[3:47](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=227)** Now that we understand the problem, it is your job to specifically handle this exception and return a more useful response or message to the user.
>
> **[3:56](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=236)** If this were to occur again.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** return. (1), let (1), pass (1)
> **Env Vars:** url (1), http (1)
> **Tools:** postman (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Handle an ArithmeticException
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=0)** - [Instructor] For your challenge you had to handle the potential ArithmeticException that could occur.
>
> **[0:10](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=10)** Since this exception is a RuntimeException, we will not get any helpful hints from a IDE and our application will continue to build.
>
> **[0:19](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=19)** After we see this exception for the first time we have two options, prevent the exception from occurring, through validation, or catching the exception, specifically, and handling it.
>
> **[0:31](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=31)** We will walk through both options in this video.
>
> **[0:35](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=35)** For the first option, which I think is more ideal, we want to validate all values involved.
>
> **[0:41](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=41)** On line 78 we have our divisor, the number we are dividing by, defined as a variable.
>
> **[0:48](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=48)** On the next line after this, line 79, I want to define an if statement, where if the divisor is equal to zero I want to return the String.value of zero for simplicity sake.
>
> **[1:08](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=68)** We, of course, still have the option to return an error message to the user or some kind of other response.
>
> **[1:15](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=75)** For the second option, however, we could, reactively, catch and handle the exception instead.
>
> **[1:27](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=87)** I want to define a result variable and, after that, create our try catch statement where we're going to try and divide by zero and set the value to result.
>
> **[1:42](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=102)** On line 86, I'll update the response to use that result variable.
>
> **[1:48](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=108)** On line 85, I want to catch the ArithmeticException, specifically.
>
> **[1:53](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=113)** And, again, I want to do the same thing that we did on line 80, I want to return the ResponseEntity.ok where the body is zero.
>
> **[2:03](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=123)** Now if I were to restart my application we will never trigger our try catch statement, we will always trigger this line 80.
>
> **[2:13](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=133)** So now that my application has started, I can go to Postman and tries to get the ratio for the first number, where we could, potentially, divide by zero again, and I now get a zero response with a 200-OK status.
>
> **[2:30](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=150)** Which way you went would be a personal or team choice, you don't have to implement both.
>
> **[2:36](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=156)** I advocate for the first option because it is more proactive.
>
> **[2:39](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=159)** It is a great muscle to build, to learn to anticipate what validations would need to be done to avoid exceptions before they occur.
>
> **[2:48](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=168)** We know that if we were building a banking system dividing $10.00 between zero accounts is not acceptable or possible, so why wait until an exception is thrown to handle it?
>
> **[3:01](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=181)** In my opinion, it is best to prevent such exceptions, when possible, by anticipating what validation may be necessary.
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=189)** After doing this challenge you have learned a couple of ways of how to handle a RuntimeException, like the ArithmeticException.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), defined as (1)
> **Code Keywords:** continue (1), this, (1)
> **Env Vars:** ide (1)
> **Versions:** 10.00 (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Runtime exception: Handling of NullPointerException
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=0)** - [Presenter] We have reviewed examples of the runtime exceptions including the number format exception and the arithmetic exception.
>
> **[0:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=7)** Now, for the most popular of them all, the Null Pointer Exception or NPE.
>
> **[0:13](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=13)** In this video, we will learn exactly what not to do with them as well as how to resolve NPEs.
>
> **[0:21](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=21)** As the reminder, the null pointer exception is caused whenever your code attempts to use an object that is null or has not yet been instantiated.
>
> **[0:31](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=31)** For example, here on line 109, let's say I made a mistake and forgot to instantiate the sequence list variable to an empty list.
>
> **[0:42](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=42)** Note that my IDE actually gives me a warning on line 110.
>
> **[0:47](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=47)** We can see the warning by clicking on the light bulb here as well as some exception handling options?
>
> **[0:54](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=54)** And we can also see the warning in the bottom left hand corner of my IDE.
>
> **[0:59](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=59)** Remember that NPEs are still runtime exceptions.
>
> **[1:02](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=62)** So our JVM or compiler will allow our application to run and continue.
>
> **[1:08](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=68)** It will not force us to handle this exception despite the IDE NS knowing that it could potentially lead to problems.
>
> **[1:16](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=76)** Let's see what problem it will cause specifically.
>
> **[1:19](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=79)** Again in my IDE on console, I can see that my application is started.
>
> **[1:25](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=85)** In Postman, my favorite GUI to try HTTP requests to my APIs.
>
> **[1:31](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=91)** I can try sending a post requests where I try and generate the Fibonacci sequence for the first eight numbers in the sequence.
>
> **[1:41](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=101)** I actually get an internal server error in the HTTP status of 500.
>
> **[1:47](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=107)** Going back to my console.
>
> **[1:50](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=110)** I now see that I have a no pointer exception.
>
> **[1:53](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=113)** This exception doesn't have a message, the message is actually null but in my stack trace, I can see exactly what line is causing it.
>
> **[2:02](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=122)** This is of course, because I am calling the add method on a null object.
>
> **[2:08](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=128)** Let's talk about options in handling this.
>
> **[2:10](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=130)** In the first option, we could do nothing.
>
> **[2:13](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=133)** For user will get this 500 status and it's accurate and that the user will not be able to do anything on their part.
>
> **[2:22](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=142)** They will have to come to us as the developer team or support and we'll have to look at our logs to figure out the issue.
>
> **[2:28](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=148)** At that point in time, we will see this line of code, create a fix and have to redeploy our code.
>
> **[2:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=155)** Option two will not fit in every situation for an NPE.
>
> **[2:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=160)** To illustrate this, let's update this method.
>
> **[2:44](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=164)** Let's say for some reason, we actually want to pass in an array list to our get sequenced method here on line 102.
>
> **[2:53](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=173)** So we want this to be a list of integers and we'll call it sequence.
>
> **[2:59](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=179)** So to keep with our variable name here, that means that I can get rid of line 109 because I already defined this object.
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=189)** So back where this method is being called on line 45
>
> **[3:20](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=200)** for illustration purposes, I'll now pass in a null list as well.
>
> **[3:26](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=206)** Doing this will get me back into the same situation before for our user where they will receive an internal server error.
>
> **[3:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=215)** Let's pretend that we don't have control over what's being passed into line 45.
>
> **[3:41](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=221)** And this is being passed to us by another developer or another piece of software.
>
> **[3:46](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=226)** If that is the case in our get sequence method, we could just do a null check here before we attempt to do anything with this list.
>
> **[3:57](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=237)** So on line 109, we can say if sequence is equal to null,
>
> **[4:06](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=246)** we will just set sequence to a new array list on line 110.
>
> **[4:12](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=252)** This effectively illustrates the second option.
>
> **[4:15](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=255)** Our third option which I do not endorse at all, it's actually catch the NPE specifically.
>
> **[4:23](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=263)** And we can do that by going to this try catch here on line 44 through 48 and add a second catch clause
>
> **[4:37](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=277)** and return an appropriate response.
>
> **[4:45](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=285)** Because I don't endorse this, I'm actually going to use a null sense status called I am a teapot.
>
> **[5:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=300)** I can't think of a situation.
>
> **[5:02](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=302)** This would be acceptable considering it would be simpler and easier to just check for nulls first, an extentiate the object or we could throw a more acceptable exception like our Fibonacci endpoint exception example in our controller.
>
> **[5:18](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=318)** However, notice I said an option three, I do not suggest catching a specific null pointer exception.
>
> **[5:26](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=326)** This does not mean you can't catch generic exceptions.
>
> **[5:29](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=329)** Catching generic exceptions is actually very acceptable if they're not expected and is the last option that I will cover briefly.
>
> **[5:38](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=338)** With this option, this last and fourth final option, it means that we can catch all exceptions with one catch clause and handle them when we do not already know what exceptions could occur, We are human after all and cannot foresee all of the places that an unchecked or run time exception could possibly occur.
>
> **[6:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=360)** We will talk more about the specific example later in this chapter.
>
> **[6:05](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=365)** Now in this video, we have learned what causes an NPE and reviewed at least four different options on how NPEs could be possibly handled.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), pass (2), continue (1), this. (1)
> **Env Vars:** npe (4), ide (4), http (2), jvm (1), gui (1)
> **Warnings:** warning (3), note that (1)
> **Definitions:** means that (2)
> **Tools:** postman (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Runtime exception: Unknown runtime exception
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=0)** - [Instructor] So far, we know that runtime exceptions are unchecked exceptions, that we are not forced to handle by the compiler.
>
> **[0:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=7)** Some example of these exceptions include the number format exception, arithmetic exception, and the no pointer exception.
>
> **[0:14](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=14)** In this video, we will discuss how to handle other exceptions and other runtime exceptions that we may not know could occur or be able to anticipate.
>
> **[0:24](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=24)** When an app is running in the wild or in production, we will likely know from experience to anticipate validating a user's input.
>
> **[0:34](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=34)** We might want to check that they are providing an actual number and not a character to avoid the Null format exception, or check that a divisor is not zero to not cause an arithmetic exception.
>
> **[0:46](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=46)** We can also do Null checks for any objects that could potentially trigger an NPE.
>
> **[0:52](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=52)** However, there exists runtime exceptions that could occur that we will not be able to anticipate.
>
> **[0:58](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=58)** When those exceptions pop up, we don't want our users to have a bad experience in getting an unhelpful response.
>
> **[1:05](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=65)** To handle these unforeseen exceptions, we can introduce an additional catch clause, to our existing try catches.
>
> **[1:14](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=74)** For example, here on line 31, I can add another catch statement where I catch specifically any exception recall that try catches depend on order.
>
> **[1:32](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=92)** So even though our Fibonacci out of range exception, is a subclass of exception, this catch statement on line 30, will be triggered first for the more specific exception.
>
> **[1:45](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=105)** All other exceptions will trigger this second catch statement on line 32.
>
> **[1:52](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=112)** Notice I did not specify a runtime exception or go even more generic and try to catch all throughables.
>
> **[1:59](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=119)** I want to be able to handle unchecked and checked exceptions that are not already being handled.
>
> **[2:05](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=125)** I also don't want to catch any throughables because that could include errors and errors should not be caught unhandled, as they are unrecoverable.
>
> **[2:14](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=134)** Inside our catch statement on line 32, we can do a number of things.
>
> **[2:18](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=138)** We should be sure to log detailed information like metadata around parameters provided or the very specific error message and (indistinct) for easier debugging leader.
>
> **[2:29](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=149)** Remember, we don't always want to return this information to the user for security purposes.
>
> **[2:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=155)** This is also a good place to set up any metrics that you might need to keep track of the number of exceptions that could occur, for your dashboard and alerting in your application, or to even alert the person who was on call.
>
> **[2:48](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=168)** I don't have any logger or metrics set up as the snap the focus of this course, but I highly recommend learning more about logging and metrics for your Spring Boot application.
>
> **[3:02](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=182)** Beyond logging and metrics, we can also use this catch clause to appropriately respond to the user.
>
> **[3:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=187)** Recall that the Spring Rest controller will return a 500 internal error, if any unhandled exception were to occur.
>
> **[3:15](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=195)** In this case, I still want to return the response entity with the internal server error.
>
> **[3:28](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=208)** This time, however, I want my body to be something more helpful for the user so I'll actually direct them to our support email.
>
> **[3:41](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=221)** Now, because of this new catch clause, any exceptions that were to occur, we no longer need to have a through statement in our method header, if we had one on line 25.
>
> **[3:56](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=236)** Note that Spring provides exception handlers that will make it easier for this exception handling, as well as make it easier to be consistent across all end points on how we handle these exceptions.
>
> **[4:09](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=249)** Now in this video, we've discussed how to catch and handle generic exceptions and why it might be beneficial to do so.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), snap (1)
> **Prerequisites:** set up (2)
> **Code Keywords:** case, (1)
> **Env Vars:** npe (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Handle potential runtime exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=5)** - [Instructor] So far in this chapter, we have learned about different types of runtime exceptions and how to handle them.
>
> **[0:11](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=11)** We have also learned how to catch and handle generic exceptions.
>
> **[0:15](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=15)** Within our app, we have a total of four end points.
>
> **[0:19](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=19)** The first is the find number endpoint on line 24.
>
> **[0:23](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=23)** The second is the create sequence endpoint on line 44.
>
> **[0:28](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=28)** Then the get sequence endpoint on line 64, and finally the find ratio endpoint on line 81, our first endpoint, the find number endpoint catches any generic exception on line 31 and handles it.
>
> **[0:45](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=45)** There are still three other end points however that can encounter any type of exception and will return an unhelpful error message to the users.
>
> **[0:55](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=55)** For this challenge, you are to update all instances of these endpoints and catch any generic exceptions and return a more helpful message to our users.
>
> **[1:07](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=67)** Feel free to return to the unhandled exceptions video, or refer to lines 31 through 35 of our controller to understand how this could be done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Handle potential runtime exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=0)** - [Instructor] For this challenge, you were tasked with updating any parts of a controller that can encounter an exception.
>
> **[0:12](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=12)** You were to catch these generic exceptions and returning more helpful message to our users.
>
> **[0:18](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=18)** There are a total of four endpoints in our app.
>
> **[0:21](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=21)** We already worked through an example with the findNumber endpoint on line 24.
>
> **[0:27](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=27)** This means you have three endpoints left, that could be updated.
>
> **[0:31](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=31)** Simply put, we could just add this exception catch clause, between line 31 and 34, to any of the existing try-catches that we have, and if a try-catch does not already exist, we can just create one specifically.
>
> **[0:47](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=47)** So to not reinvent the wheel, I'm going to copy lines 31 through 34 and find our next try-catch.
>
> **[0:54](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=54)** So if you recall before, I said handling an NPE like this is not ideal.
>
> **[0:59](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=59)** So I'm actually going to get rid of lines 51 through 54, for createSequence endpoint.
>
> **[1:05](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=65)** And instead use this exception, generic catch statement.
>
> **[1:12](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=72)** I can do the same thing for line 71 and the getSequence input.
>
> **[1:18](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=78)** I can do this again on line 96 for the findRatio input as well.
>
> **[1:24](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=84)** Now, for this last endpoint, I do want to make a few more changes.
>
> **[1:29](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=89)** You will notice that we are still throwing a FibonacciOutOfRangeException from this endpoint.
>
> **[1:35](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=95)** And that is because this exception, defined on line 85, could occur because of the Fibonacci method called on line 86 or line 87.
>
> **[1:45](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=105)** I instead want that FibonacciOutOfRangeException to be cut by our generic exception here.
>
> **[1:54](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=114)** So to do that, I'm actually going to take everything from line 86 and 90 and move that inside of our try statement at line 88.
>
> **[2:03](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=123)** You'll notice that my IDE now indicates that this FibonacciOutOfRangeException can be removed from my method header.
>
> **[2:12](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=132)** So go ahead and do that.
>
> **[2:14](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=134)** However, just because I'm using this generic exception doesn't mean I want to lose the error message that the FibonacciOutOfRangeException is providing.
>
> **[2:25](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=145)** I also have the option of specifically catching the FibonacciOutOfRangeException as well.
>
> **[2:32](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=152)** So it can do one of two things.
>
> **[2:33](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=153)** I could just update line 96 and add another catch statement here.
>
> **[2:50](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=170)** And on line 97, I want to return the status of BAD_REQUEST because they are providing something that's out of range.
>
> **[3:02](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=182)** And I wants to provide that exception method.
>
> **[3:05](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=185)** This approach is more ideal because I know that it's a user responsibility versus suggesting that the user reaches out to us as we do on line 101, if we don't specifically catch this FibonacciOutOfRangeException.
>
> **[3:22](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=202)** You may have noticed that there's a ton of duplicate code when handling these exceptions.
>
> **[3:28](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=208)** For that reason, Spring does have the concept of an exception handler as a way to handle this.
>
> **[3:34](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=214)** This allows you to apply exception handling techniques multiple times across the application, and define that technique only once.
>
> **[3:44](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=224)** However, exploring the exception handler through Spring is beyond the scope of this course.
>
> **[3:49](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=229)** I do encourage you to explore that as an option.
>
> **[3:53](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=233)** Now that you are done with this challenge, you have learnt how to catch and handle all sorts of exceptions.

> [!info]- Semantic Content
>
> **Code Identifiers:** findnumber (1), createsequence (1), getsequence (1), findratio (1)
> **Env Vars:** npe (1), ide (1), bad_request (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** catch. (1), this. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps with exception handling
> [LinkedIn Learning](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=0)** - [Instructor] Now that you have learned the basics of exception handling, I suggest you explore Spring's exception handler feature and also learn more about logging.
>
> **[0:09](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=9)** Both topics are covered in our Spring MVC courses.
>
> **[0:13](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=13)** I would also recommend learning about metrics through Spring's Actuator for your app, which you can hear more about in our Spring Essential Training course.
>
> **[0:22](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=22)** Beyond these topics, which are more related to exception handling we have already discussed, I hope this course encourages you to continue your learning journey with Spring and Java.
>
> **[0:34](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=34)** I hope you consider learning more advanced topics like our course on Spring Data, or even my course on Spring Cloud with Google Cloud platform.
>
> **[0:43](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=43)** Thanks for watching.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Env Vars:** mvc (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Cecili Reid]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-exception-handling-2884226)

## Skills Covered

- Exception Management
- Java

## Path Context

### In [[Getting Started as a Java Developer]]
← [[Java Memory Management- Garbage Collection, JVM Tuning, and Spotting Memory Leaks]] | **8 of 10** | [[Java Algorithms]] →

## Appears In

- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)