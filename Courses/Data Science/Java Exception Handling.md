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
created: 2026-05-03
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
  - [Why bother with exception handling?](#why-bother-with-exception-handling)
  - [What are throwables?](#what-are-throwables)
- [**1. Errors in Java**](#1-errors-in-java) (2 videos)
  - [What are errors?](#what-are-errors)
  - [Error: Uncaught StackOverflowError](#error-uncaught-stackoverflowerror)
- [**2. Exceptions in Java**](#2-exceptions-in-java) (5 videos)
  - [What are exceptions?](#what-are-exceptions)
  - [Exception: IOException](#exception-ioexception)
  - [Exception: FileNotFoundException](#exception-filenotfoundexception)
  - [Challenge: Catch and handle two exceptions](#challenge-catch-and-handle-two-exceptions)
  - [Solution: Catch and handle two exceptions](#solution-catch-and-handle-two-exceptions)
- [**3. Runtime Exceptions in Java**](#3-runtime-exceptions-in-java) (8 videos)
  - [What are runtime exceptions?](#what-are-runtime-exceptions)
  - [Runtime exception: Return NumberFormatException to user](#runtime-exception-return-numberformatexception-to-user)
  - [Challenge: Handle an ArithmeticException](#challenge-handle-an-arithmeticexception)
  - [Solution: Handle an ArithmeticException](#solution-handle-an-arithmeticexception)
  - [Runtime exception: Handling of NullPointerException](#runtime-exception-handling-of-nullpointerexception)
  - [Runtime exception: Unknown runtime exception](#runtime-exception-unknown-runtime-exception)
  - [Challenge: Handle potential runtime exceptions](#challenge-handle-potential-runtime-exceptions)
  - [Solution: Handle potential runtime exceptions](#solution-handle-potential-runtime-exceptions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with exception handling](#next-steps-with-exception-handling)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why bother with exception handling?](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/why-bother-with-exception-handling?u=76281980&t=0)** - [Instructor] Have you ever experienced the blue screen of death or visited a site that continues to error without any way to resolve it? Don't let your users have the same experience. With this course, you can understand the difference between checked and unchecked exceptions, learn tips on how to handle unforeseeable exceptions, and discover bad air handling practices to avoid. Hi, my name is Cecili and I'm committed to giving users a smooth experience when using apps that I built. Exception handling is crucial in ensuring your app provides the best experience for your users and easy debugging for other developers. Come join me in my [[LinkedIn]] learning course to learn and understand the basics of exception handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - [instructor] (1)

#### [What are throwables?](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=0)** - [Instructor] In this course we will learn the definitions of throwable, error, and exception and why we need to learn how to handle them. No previous knowledge around these terms are needed. We will be using a [[Spring Boot]] app with a [[Representational State Transfer (REST)|REST]] API to illustrate examples of throwables, errors, and exceptions throughout this course. Please refer to other courses on [[LinkedIn]] Learning on REST APIs and Spring Boot if you do not already have experience with these concepts. This includes understanding how to make a REST API with Spring, as well as how to make HTTP requests. An error is an object that can be thrown by an application to indicate a serious problem that should not be caught. Errors, often indicate abnormal conditions that should never occur. For that reason, a method does not have to declare that it could throw an error object. Later in chapter one, we will see an example called the stack overflow error. Exceptions are another object that can be thrown and indicates conditions that an application might want to catch and handle. There are two subclasses to the exception object; checked exceptions and unchecked exceptions or runtime exceptions. We will explore checked exceptions in chapter two, and in chapter three we will discuss runtime exceptions a little more. Lastly, both errors and exceptions are subclasses of the throwable class. The throwable class is a superclass of all errors and exceptions in [[Java]].
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=93)** These objects can be thrown using the throw statement and they can be caught using the catch clause. Throwables, errors, and exceptions are indicators that an application is not performing as expected. Not handling errors or exceptions can lead to unpredictable behavior of your app and unreliability. For instance, some errors will make your app non-responsive and may even shut the application down. Beyond knowing that errors and exceptions are throwables, we also need to define unchecked and checked throwables. Note, this is different from checked and unchecked exceptions as mentioned before. All checked exceptions are checked throwables in Java. They are checked at compile time. This means any checked exceptions must be declared in the method hitter, caught, or handled in some way. If a checked exception could potentially occur in a method or a class and that exception is not handled, the code will not compile at all. Apps can potentially recover from checked throwables and continue its work. Unchecked throwables include all errors and any runtime exceptions, which are not checked at compile time. Apps will likely not be able to recover at all from an unchecked throwable. We now know what throwables, errors, and exceptions are and how they relate to each other. Understanding this will prove helpful in learning how to handle throwables, errors,
>
> **[3:07](https://www.linkedin.com/learning/java-exception-handling/what-are-throwables?u=76281980&t=187)** and exceptions within your app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Spring Boot]] (2), [[Java]] (2), [[LinkedIn]] (1)
> **Env Vars:** rest (3), api (2), http (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** later in (1)
> **Documentation:** stack overflow (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 1. Errors in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What are errors?](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=0)** - [Instructor] Let's discuss more specific errors. In the intro of this course, we learned that errors are a subset of throwables. They are an objects that can be thrown by an app indicating a serious problem. Errors are not meant to be caught or handled as they indicate conditions that should never occur. They are unchecked throwables meaning code will compile successfully. Even if a method or class could potentially throw an error. Though, there are a number of errors. I want to highlight two common errors, the IOError and the virtual machine error. IOError is thrown when there is an unrecoverable error with IO or input/output. It is thrown when it is best to terminate the program rather than attempt to handle the exception. Another common error is the virtual machine error to indicate an issue with the [[Java]] virtual machine or JVM. Running out of resources it needs to continue working. The subclasses of this error are internal error, unknown error, out of memory error and stack overfill error. Internal error, unknown error, and out of memory error are named appropriately. They're thrown whenever there's an internal issue, an unknown issue, or we have run out of memory. The stack overflow error has a name that is not as straightforward as the other three. Stack overflow occurs when an app is using too much of its memory stack causing the stack to overflow. The most common way for stack overflow errors to occur is through recursion. When an app recurses improperly
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/what-are-errors?u=76281980&t=93)** or recurses too much, it runs out of stack. Now that we have covered errors to more detail and more specifically the stack overflow error, let's take a look at an example of this error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Documentation:** stack overflow (4)
> **Env Vars:** jvm (1)
> **Definitions:** is an  (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### [Error: Uncaught StackOverflowError](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=0)** - [Instructor] We are going to look at code that could trigger an error. Recall that an error is a subset of throwables. They are an object that can be thrown by an app indicating a serious problem. We will look specifically at a StackOverflowError and the best way to handle it. Errors are throwables that should not be handled by an app and indicate an unrecoverable issue with your application. StackOverflowError is an example of a VirtualMachineError indicating that the [[Java]] Virtual Machine or JVM has run out of some kind of resource. In this case, the stack for the app has overflowed. To see this error in action, I created an app that involves the Fibonacci sequence. The Fibonacci sequence is a mathematical series of numbers where each number in the series is the sum of the two preceding numbers. One plus one equals two, one plus two equals three, two plus three equals five, and so on. Now that we know what Fibonacci sequence is, let's review an existing [[Spring Boot]] app that provides an endpoint for a [[Representational State Transfer (REST)|REST]] API that takes a number N and returns the n-th number of the Fibonacci sequence. If we pass in six as N to our endpoint in our app, it will return eight, because eight is the sixth number in the Fibonacci sequence. Generating a Fibonacci sequence is a great way to learn and understand recursion and recursing incorrectly could lead to a StackOverflowError.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=93)** I highly recommend reviewing recursion through a few of our other videos and courses we have available. In our code for this app, I have a standard Java Spring app showing in my IDE with a controller using the REST controller annotation seen on line six. This controller provides an endpoint defined on line 16 that takes N, a request parameter of N. This method returns a response entity with an HTTP status of okay on line 18 with a body of the response containing the n-th number of the Fibonacci sequence. This findFibonacciNumber method uses a private helper method called Fibonacci which is defined on line 27 and it returns the n-th number of the sequence. The Fibonacci method is where we introduce recursion where the method calls itself repeatedly to do a piece of work which we see on line 29. If we were to have a position endpoint to this method set to three, we would call the Fibonacci method again to find the Fibonacci number in the second position which we can see in the equation on the left side of line 28 and we would call the Fibonacci method again to get the first number in the sequence which is the right side of this equation on line 29. Do you notice a potential mistake
>
> **[3:06](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=186)** in how this method is implemented? Don't worry if you do not see it. Let's run the application and try the endpoint to see what happens. I know that my application is running, because I see started Fibonacci application at the bottom of my console here in my IDE. I'm running my app through my IDE, but you can also run it via command line or however you prefer to run your app. I like using Postman which is a GUI or a graphical user interface for submitting various kinds of requests to APIs. You can, of course, use whatever method you prefer. With this, I can use the URL, localhost:8080/fibonacci/findanumber?n=3, to get the third number of the sequence which should be two. However, we get an error. We get a 500 internal server error as seen on the bottom of our Postman response. Back in the console log of our app, note that the stack trace has many, many lines pointing to line 29 in our controller. This is because we are using recursion and never stop recursing, leading us to continue to use more and more of the stack until the JVM no longer has space to use. At the top here, we see the dreaded StackOverflowError. Errors are not likely at all recoverable,
>
> **[4:43](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=283)** so the best way to handle them is to fix them or prevent them. In our case, this means adding an if statement in our Fibonacci helper method. If our position is equal to or less than one, we just want to return the position variable itself. Now let's restart our application and see if our code change was successful.
>
> **[5:20](https://www.linkedin.com/learning/java-exception-handling/error-uncaught-stackoverflowerror?u=76281980&t=320)** Now that our application is started, again, because I see started Fibonacci application at the bottom of my console, I will try the request again. And success, we get back the result of two which we expect and there are no more StackOverflowErrors. For other errors, we will have to figure out the cause much like we did here and make corrections within our app. You now understand what can lead to a StackOverflowError and understand the best way to handle all types of errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Spring Boot]] (1)
> **Env Vars:** ide (3), jvm (2), rest (2), api (1), http (1)
> **Definitions:** is a  (4), is an  (1)
> **Tools:** postman (2), command line (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** findfibonaccinumber (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Ports:** :8080 (1)


### 2. Exceptions in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What are exceptions?](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=0)** - [Instructor] We will discuss unchecked and checked exceptions, and specific examples of each. As a refresher, an exception is another object that can be thrown, and indicate conditions that an app might want to catch. There are two types to the exception object, checked exceptions and unchecked exceptions, also known as runtime exceptions. Checked exceptions are throwables in [[Java]] that are checked at compile time. This means any checked exceptions must be declared in the method hitter or be caught and handled. If a checked exception could potentially occur in a method or class, and that exception is not handled, the code will not build or compile, which means your app will not start at all. Apps can potentially catch exceptions, change some aspects of the code at runtime, and continue to work without some kind of intervention. IOExceptions are checked exceptions that can occur when there's an issue with input or output. A more specific example is the FileNoteFoundException, where requested file or directory does not exist within the file system. In this case, an app can recover from the FileNotFoundException by simply recreating the file and continuing with its work. Unchecked exceptions include runtime exceptions, which are not checked at compile time. Apps will likely not be able to automatically recover from an unchecked exception, as they are not anticipated when writing the code.
>
> **[1:35](https://www.linkedin.com/learning/java-exception-handling/what-are-exceptions?u=76281980&t=95)** NullPointerExceptions, or NPEs, are probably the most popular unchecked runtime exceptions. They can occur any time an action is attempted on an object that is null. If a method forgets to initiate a string variable, and attempts to use that variable in some way, the compiler will not require the code to update the method signature to indicate an NPE could be thrown. However, you may get a warning from your favorite IDE, or from code analysis software to fix that before an NPE is triggered within your live or deployed code. Developers might need to know how to handle these predefined exceptions built in or provided by the Java library, like the IOException. Or they might need to handle custom specific exceptions created by an API or service they depend on. Or, they might need to create their own specific exceptions that users or other dependencies will need to know how to handle. Throughout the [[Representational State Transfer (REST)|rest]] of the chapter and the next, we will learn about specific strategies for throwing, catching, and handling a variety of these exceptions now that we know what they are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** npe (2), ide (1), api (1)
> **Definitions:** known as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Exception: IOException](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=0)** - [Instructor] In this example, we will learn the first part of handling an exception. We will look at the IO exception, which is a checked exception, and we will declare that a method we'll throw it. To do this, I have made some changes to the Fibonacci app. In a Fibonacci controller, I have added a new end point online 33 co create sequence. This generate Fibonacci sequence method online 34, takes in a request forum of in. We've been past that in value to the [[Git]] sequence method to find online 45. This method will generate an array list of integers representing the sequence. If N is three and array with values 0, 1, 1, and two will be returned. Online 36 of our new in play we also store the sequence in a file using the store method. The store method is defined online 67. We have not yet implemented, but it will return a string value representing the name of the file holding the new sequence. Online 36, that string name of the file is what is returned in the response entity. Let's now implement the code for the source sequence method. First online 69, let's define the file object and the name of the file.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=93)** Since this file does not yet exist, we will have to create it with the file create new file methods. You will notice in my IDE online 71 through our red squiggles under the create new file method. This is my IDE telling me that the create new file method could throw an IO exception and it's not currently being handled. The IO exception is thrown anytime there is an issue with an input-output that should be handled, but I'm going to ignore this for now and keep writing my code anyway. After I create the file, I now have to create a file writer.
>
> **[2:20](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=140)** This file writer will be used to write to the new text file that I created online 69. And now I want to write the contents of my sequence to the file. A good practice working with the file writer object is to always close the objects that I am reading from or writing to. Now online 76, I returned the name of the file that I just created. With this code I have five methods underlined with RIT squid. First online 71 for the create new file method. Then online 72 for the file writer constructor, line 73 for the right method, line 74 and line 75 for the flush and closed methods. I still don't care so I'm going to run my application anyway. Well, all of these errors are now preventing my application from starting because an IO exception is a checked exception. And as the error says, I must catch it or declare it in the method. Let's go ahead and fix that. Online 67, I will just add the throws keyword to indicate that this method could throw an IO exception. All of the red squiggles in my IDE for this store sequence method under line 67 are now gone.
>
> **[3:56](https://www.linkedin.com/learning/java-exception-handling/exception-ioexception?u=76281980&t=236)** However, I have another red squiggle under store sequence online 36 for my input method. Here, I can just add the exception to my method here as well. If I run the application again, I can see that it was started successfully. And I know that because of the start at Fibonacci application message at the bottom of my console. Now let's give this input a try and my IDE gooey. By sending a post request so the end point local host 80 80 Fibonacci slash create sequence N is equal to three. The response is just Fibonacci texts because that's the name of the text file that I created earlier. So back in my IDE, I can open this text file and see that I have 0, 1, 1 and two stored in the file. In this video, we have simply ensured that a method declares that it could throw an IO exception, which is the first way of handling a checked exception. In the next example, we learn how to catch a more specific type of exception. The file not found exception.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (1)
> **Env Vars:** ide (5), git (1), rit (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** git (1), find (1)
> **Cross-References:** in the next (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Exception: FileNotFoundException](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=0)** - [Instructor] In this example, we will learn how to catch an exception. More specifically, the FileNet found exception, which is a type of checked exception and a type of IO exception. To do this, I added another method to the Fibonacci app called Get Sequence on line 38, this retrieve Fibonacci sequence method, on line 39 takes in a string file name. It uses that string file name on line 40 and passes it to the private helper method, gets sequenced defined on line 43. This method on line 44 uses the buffered reader to open the file with the specified file name. Online 45 read each line in the file and return it as one string. This file contains the Fibonacci sequence stored in the requested file. Notice on line 43, we indicate that this gets sequenced method will throw a FileNet found exception. This is very similar to what we have on line 39 for the parent exception, IO exception. Let's start up our application and try this get sequence endpoint. My application has started because I see the started Fibonacci application message at the bottom of my console. To make the requests. I am using the postman GUI to send a get request to the fibonacci/get sequence file name = Fibonacci.txt URL.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=93)** The response for this existing TXT is returned, which includes zero, one, one, two. What happens though if I request a file name that does not exist? Let's give that a shot with a file called fib.txt, the response is not a user-friendly [[JSON]] object, and it's returning an HTTP status of 500 internal server error. Spring rests sees this IO exception or the file that found exception and uses the 500 as the generic response, any time it has an internal issue. And we do not specify specifically what status should be used. We would like to return more useful and helpful information to the user, so they know how to resolve it. This is where we could use a try-catch. Back in our retrieved fibonacci sequence method is where we could try a try-catch statement. We could try to retrieve a sequence from a file name and catch a specific exception and notify the user. On line 40, I will start my try-catch statement. I specifically want to try the get sequenced response.
>
> **[3:01](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=181)** Because this is a try-catch. I actually want the variable that I'm storing my sequence in to start outside of my try-catch statement.
>
> **[3:16](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=196)** This will allow me to pass the sequence variable into the response entity defined on line 44. On line 43, I will start my catch block and I wants to specifically catch the file that found exception and give it the variable name of E. with this catch statement, the file that found exception is the only exception that I am catching for now. This will be triggered anytime to get sequenced method throws the specified exception. When it does, we want to return a more specific response entity with the status of HTCP not found.
>
> **[4:06](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=246)** And I want the body of my message to be some helpful message to the users, like file not available, please check requests and try again. We could also use the past and exception from our catch statement and retrieve any information from that exception. In this case, the get message method is what I'll use. Now restart my application To try a request from earlier. My application has started and when I try this same fib.txt request, I get back a string, body, this says FileNet available, please check requests and try again. In these specific, exception message of fib.txt, no such file or directory is also included. Note for security reasons. You may not want to share the exceptions message in the response to the user. Exceptions often have more details on the underlying structure of the code and potentially sharing this with the hacker, indicates a weakness in your code that they could leverage. Keep this in mind, when you're actually handling exceptions and production. Another thing of note is that the status in the top right-hand corner of our response here is a 404 not found. Previously it was a 500 internal server error. This makes the response more useful for future developers, as they may need to know how to troubleshoot this error on their end, if we kept it as the 500 exception, however,
>
> **[5:42](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=342)** we would likely have to fill a lot of unnecessary support requests. Now that we know this try-catch works, let's discuss chaining try-catch statements. As you may recall, I have mentioned before that a file that found exception is a subclass of the IO exception. This is helpful to know for when we want to catch different types of exceptions. To illustrate this, I will start another catch statement on line 44, but this time I want to catch the IO exception. You will notice that my IDE underlined line 45 with an error. This is because both catch clauses are not around necessary since any FileNet found exceptions that are thrown will already be caught by the first catch phase on line 44. I could however, change the order and because FileNet found is a more specific exception. We want that to be caught first and then let any other IO exception that could possibly occur be caught by the second statement on line 47. However, again my editor gives me a warning this time that a FileNet found exception has already been cut. This is because we are working with a checked exception and our IDE already knows that this method will only throw one type of IO exception and that's FileNet found exception, making this catch statement on 47, unnecessary. We now have an understanding of how to try a piece of code
>
> **[7:18](https://www.linkedin.com/learning/java-exception-handling/exception-filenotfoundexception?u=76281980&t=438)** and catch an exception. We also know how to chain catch clauses and keep in mind the exceptions and their subclasses and the order in which we catch them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** ide (2), gui (1), url (1), txt (1), json (1)
> **Definitions:** is a  (5)
> **File Paths:** fib.txt (3), fibonacci.txt (1)
> **Warnings:** troubleshoot (1), warning (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Tools:** postman (1)
> **UI Navigation:** open the (1)

#### [Challenge: Catch and handle two exceptions](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=0)** - [Instructor] So far in this course, we have learned about throwables, exceptions, and how to throw and catch these exceptions. In this challenge, we will update the [[Representational State Transfer (REST)|rest]] of our code to handle catching two other exceptions. In our controller, we have two endpoints that currently throw exceptions. First, on line 23 for the fine number endpoint, where a Fibonacci out of range exception is thrown. This is because the user is providing a number that is too high for the app to handle and could potentially result in a stack overflow error due to the simple recursive approach that we are using to find the Fibonacci sequence. You can take a look at that in our Fibonacci method. This is on line 106 in our controller. The second endpoint that is throwing an exception is found on line 34 for our create sequence endpoint, which throws an IO exception, whenever an exception arises while storing a generated Fibonacci sequence in a file. In both cases, a REST API will return an unhelpful 500 internal server error to our users. We can see this in action. My application is already running, as we can see, in the bottom of my console with the started Fibonacci application message. In Postman, a GUI that helps me test REST and HTTP calls, I can try to obtain the ninth member in the Fibonacci sequence.
>
> **[1:34](https://www.linkedin.com/learning/java-exception-handling/challenge-catch-and-handle-two-exceptions?u=76281980&t=94)** Nine is greater than eight. So I will get an exception. As expected, Postman gives me a 500 response in the response section of my Postman UI. The more helpful message and stack trace is in my console log here in my IDE. Our app will respond with a 500 HTTP response as well, if our store sequence method manages to throw an IO exception. Since we know 500 internal server errors are not the most helpful responses with the most helpful messages for a user, your challenge, which should take no more than five minutes, is to update both endpoints to catch either exception. Be sure to return a more appropriate HTTP response message. For help, or as a refresher, please refer to the video on the file net found exception and how that was handled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3)
> **Env Vars:** http (3), rest (2), api (1), gui (1), ide (1)
> **Tools:** postman (3)
> **CLI Commands:** find (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Catch and handle two exceptions](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=0)** - [Instructor] Your challenge for this chapter was to catch and handle two exceptions that were thrown from the fine number endpoint and the create sequence endpoint. We will walk through the solution now. Let's start with the create sequence endpoint on line 34. On line 36, we are calling the store Sequence method. This method can be found on line 83. We see here that this method is also throwing an IO exception. and that is because of our use of the file object and file writer objects in this method on lines 85 and 91. Back on line 36, this is where we're going to start our tri-catch clause. In our tri-statement we want to try the same store sequence method here. And since this store sequence method is returning a file name, we'll actually define that file name above, outside of our tri-catch statement. And on line 38, we'll set that variable to the result that is returned from the store sequence method. For our catch clause, we specifically want to just catch the IO exception for now and give it the variable of E. if an IO exception were to occur, we want to return the response entity of status
>
> **[1:38](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=98)** internal server error still. However, with this, we are able to define the body of our response entity, as well as the message that is returned For now, we will just return the exception message in the body. The last thing that we need to do is update line 42 and replace this with the file name object that we defined on line 38. Our IDE actually lets us know that we no longer needs this throws IO exception methods since we are specifically handling that exception. So for the second end point, which is defined number endpoint on line 23, handling this is not going to be much different. We will again define an integer called fibNum, ends on line 24, and after that, on line 25, we'll start our tri-clause. You want to set this fibNum variable to the value for Fibonacci N and on line 28, we want to return that fibNum as well.
>
> **[2:52](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=172)** For our catch statement on line 27, I want to specifically catch the Fibonacci out of range exception. Now this time when I returned the response entity, I want to return a status of bad request
>
> **[3:12](https://www.linkedin.com/learning/java-exception-handling/solution-catch-and-handle-two-exceptions?u=76281980&t=192)** and set the body to some kind of helpful message. In this case, we'll again just use the exceptions message. You'll notice on line 28 we have an error, and that is because I'm trying to return the response entity with a string. So an easy fix for that is just to change our response entity object to string and say, string that value of, on line 30, for Fibonacci number. And just like before, IDE is letting us know on line 23 that we no longer need this through statements, since we are specifically handling the Fibonacci out of range exception. With this implemented, let's restart our application to confirm this change. My app is now started because of this start at Fibonacci application message and my console. In Postman before, we received the internal server error within that very helpful message. Actually, no message at all is seen on line five (indistinct). So if we were to try this request again for the find number end point we're N is equal to nine, we will get this message of the requested position. "Nine is too large, please try again". After this challenge, hopefully you now have a better understanding of how to try to catch and handle specific exceptions.

> [!info]- Semantic Content
>
> **Code Identifiers:** fibnum (3)
> **Env Vars:** ide (2)
> **CLI Commands:** find (1)
> **Tools:** postman (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Runtime Exceptions in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What are runtime exceptions?](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=0)** - [Instructor] We have covered throwables and exceptions in a broader scope so far in this course. This chapter, we will dive into examples of runtime exceptions. In this video, we revisit what runtime exceptions are. Runtime exceptions are unchecked exceptions. This means our JVM or the [[Java]] Virtual Machine does not check for these exceptions at compile time when code is compiled. Apps will likely not be able to automatically recover from an unchecked exception as they are not always anticipated when writing the code. If you recall, unchecked exceptions do not have to be declared in a methods header like checked exceptions. Of all of the different runtime exceptions, NullPointerExceptions or NPEs for short are probably the most popular runtime exceptions. They can occur anytime an action is attempted on an object that is null. If a method forgets to initiate a string variable and attempts to use that variable in some way, the compiler will not require the code to update the method signature to indicate an NPE could be thrown. However, you may get a warning from your favorite IDE or from code analysis software to fix that before an NPE is triggered with live or deployed code. We will also discuss two other types of runtime exceptions, including the NumberFormatException and the ArithmeticException.
>
> **[1:33](https://www.linkedin.com/learning/java-exception-handling/what-are-runtime-exceptions?u=76281980&t=93)** A NumberFormatException can occur when attempting to convert a string into a number. For instance, attempting to translate the letter or char or string b into a long. This can be handled through validation of any user input. But later in this chapter, we explore how to handle catching this exception as well. Lastly, we'll see the example of an ArithmeticException, which can be thrown when attempting to divide by zero. These exceptions are not an extensive list of existing runtime exceptions. We can find all possible runtime exceptions in the Java library by going to the Java Docs for the runtime exception and seeing direct subclasses. However, again, this is not an extensive list as other libraries might create their own subclasses of runtime exceptions that we will need to handle as well. In the last part of this chapter, we explore how we can handle unknown exceptions that might occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **Env Vars:** npe (2), jvm (1), ide (1)
> **Cross-References:** later in (1), in the last (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Runtime exception: Return NumberFormatException to user](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=0)** - [Instructor] Now that we know a few more examples of runtime exceptions, let's see one, the number format exception in action. Before we do that, let's review the code we have so far. Our API now provides three endpoints. The first is a find number endpoint on line 22 which returns the n-th number of the Fibonacci sequence. The next endpoint is the create sequence endpoint on line 39 which generates the Fibonacci sequence up to the n-th index and stores the sequence in a file. This endpoint also returns the file name. Finally, our last endpoint is the get sequence endpoint which takes in a file name and returns a stored sequence. For now, we're going to focus on the create sequence endpoint on line 39. On line 40, you will notice that our request param is now a string object. And on line 41, our get sequence helper method is expecting an integer. So we are parsing the string N into an integer. This is different, however, from the find number endpoint on line 23, where the request parameter is an integer and that is being passed in. Let's see what happens when I pass in a letter instead of a number to either of these endpoints. I already have my [[Java]] application running as you can see in the bottom of my console with the started Fibonacci app message. In my Postman GUI,
>
> **[1:34](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=94)** I will try to send a request to my application. For my find number endpoint, if I pass in B as my request parameter, I should get back a bad request status 400. It's not the most helpful message, but I at least understand that as a user, I am passing something in that is not the best expected request. This is happening, because our Spring [[Representational State Transfer (REST)|REST]] controller is expecting an integer, but we are passing in a string. You will notice in our console, we actually don't have any exceptions, but a bad request HTTP response is being passed before we even attempt to try to get the Fibonacci number on line 26. For the create sequence endpoint, if I try that, which is a post request, I now get an internal server error response with a status of 500. This is more cryptic and in order to know exactly what's going on here as a user, I would have to have access to the logs. And we now can see in our console logs that we get a number format exception, the input string of B. Recall that a number format exception will occur when attempting to translate a string or character that isn't a number into an integer, or long, or another number object. This blue highlighting in my console here
>
> **[3:08](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=188)** tells me exactly what line is causing this problem. We are attempting to parse an integer from the letter B and we fail. You will notice that the number format exception is an unchecked exception. IntelliJ, my IDE, did not warn me to handle this exception and our application continued to build. To handle this, instead of having our create sequence method attempt to parse the string, I actually want the get sequence method to handle this for us. So that's going to require changing this hub or method to take in a string of N as well. So on line 73, I will change the object type from int to string for a variable N. I'll also rename it to STR for now. And on line 74, I'll create my int N variable and use my integer.parseint method to parse the string value that we are getting into an integer. Now the exception is actually occurring from the parseint method on line 74. So that, I want to surround with a try-catch. So to do that, I will just define the N variable on line 74
>
> **[4:40](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=280)** and set that within our try statement on line 76. I want to specifically catch on line 77, the number format exception. We can now do a number of things here depending on what you prefer to happen. One option could be to default N regardless of what the user passes in. So if the input variable ends up being a character B, we will default the integer used to zero. Another way to handle it is to maybe just log the exception and default the value or default the response. So instead of defaulting N to a number, we'll just automatically return an empty array list for the response. I don't particularly like either of these options, because I think this is information that the user should know and the user should have to handle. So in this case, I actually want to create my own exception that I can throw and handle specifically elsewhere in my application later in my code. So I'm actually going to create a new object for this called the Fibonacci input exception.
>
> **[6:01](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=361)** And I actually want this to extend the exception class. And since this is extending the exception class, I actually want to...define my constructor here
>
> **[6:27](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=387)** and use super in order to pass the message to the parent constructor for exception and that is on line five. Now back in my controller, I now want to, on line 78, throw a new Fibonacci exception
>
> **[6:48](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=408)** and I want my message to be something like, "Invalid input, please provide a valid number."
>
> **[7:01](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=421)** So my IDE gives me these red squiggles and this is because I need to indicate that we are throwing a Fibonacci input exception. And this is because it is a checked exception now. So I'm basically translating an unchecked exception, the number format exception on line 77, and translating it into a checked exception, a Fibonacci input exception on line 78. Now I did have the option of creating a new exception that extends the more specific runtime exception. However, ideally they should only be thrown in specific cases like when code will actually need to be changed and your application redeployed to fix the issue. We now have to handle the exception for our endpoint in create sequence. So back on line 41, I'll actually create a yet another try-catch statement.
>
> **[8:07](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=487)** And this time I want to catch our specific Fibonacci endpoint exception on line 44. Within this catch statement, we are going to return a response entity with the status of bad request. And since we have a pretty helpful exception message, I will just set that as the body of my HTTP response.
>
> **[8:33](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-return-numberformatexception-to-user?u=76281980&t=513)** Now that we have made these changes, I'm going to restart my application and confirm the response that we get. My application has started based off of the started fib application message at the bottom. Now in Postman, when I go and try and create the sequence with the number set to B, I get a 400 bad request and a helpful message to provide a valid number. Note that another way to handle number format exceptions is to actually do validation ahead of time. So it might be before we attempt to parse the string, we actually try and confirm another way that the string is a valid number. Now with this done, we have learned about the number format exception, and how to create, throw, and handle our very own custom exception.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (2), ide (2), api (1), gui (1), rest (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** find (3)
> **Tools:** postman (2), intellij (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Handle an ArithmeticException](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=5)** - [Instructor] We have seen a variety of exceptions so far. And for this challenge, you will have to handle a runtime exception, more specifically the arithmetic exception. This is caused by an invalid arithmetic or mathematical operation, like dividing by zero. For this challenge, I have added yet another end point to find the ratio for a given index and its predecessor. For instance, if the index requested is three, we would retrieve the third number in the Fibonacci sequence, which is two. We would also retrieve the second index in the sequence, which is one, two divided by one is the ratio between the index requested and its predecessor. And the result which is two, is what the end point will return. Why do we care about generating the ratio beyond needing some way to do this challenge and trigger an arithmetic exception? Well the ratio between two consecutive numbers in the Fibonacci sequence approaches the golden ratio. The golden ratio is a mathematically significant number that appears in nature. I encourage you to learn more about the Fibonacci sequence and the golden ratio if you are interested. But for now, just know that we will provide a simple end point that returns the ratio of a number and its predecessor in the sequence for us. Who knows we may be able to actually use this end point in some way to try and figure out which numbers in the sequence gets us closest to the golden ratio.
>
> **[1:40](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=100)** This new endpoint, on line 76 finds the Fibonacci number for the requested index and also the previous number in this sequence. We then calculate the ratio by dividing the two numbers and we return the response as a string in the response entity on line 79. Note for the sake of consistency and to best illustrate this exception. I'm keeping all numbers as integers. This does mean that our ratio returned will always be an N and not a true ratio. If we wanted this ratio represented in a decimal format, we would have to use another data type like double or float instead. Anyway, we can see that I'm running my application with the start up Fibonacci app message at the bottom of my console. Now my Postman going, I'd like to see what happens when I try to get the ratio for the first number of the sequence and its predecessor. Using the localhost 8080 Fibonacci find ratio URL, where N is equal to one, I now get an internal server error with the HTTP status of 500. There's again, no message. And it's not at all helpful. So this means we need to do better error handling. Looking back at our console log. We received an arithmetic exception, but why? For the first number of the sequence, we know that we'll get one. However, what is the number before the first number in the sequence?
>
> **[3:14](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-an-arithmeticexception?u=76281980&t=194)** We can use our find number endpoint in our Postman in order to determine what that maybe. So instead of passing in one for invariable, let's pass in zero, this returned zero. This means when we try to calculate the ratio for the first index, we are dividing by zero. That equals nothing that is mathematically impossible to divide something by nothing. This is why we received an arithmetic exception. Now that we understand the problem, it is your job to specifically handle this exception and return a more useful response or message to the user. If this were to occur again.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Env Vars:** url (1), http (1)
> **Tools:** postman (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Handle an ArithmeticException](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=0)** - [Instructor] For your challenge you had to handle the potential ArithmeticException that could occur. Since this exception is a RuntimeException, we will not get any helpful hints from a IDE and our application will continue to build. After we see this exception for the first time we have two options, prevent the exception from occurring, through validation, or catching the exception, specifically, and handling it. We will walk through both options in this video. For the first option, which I think is more ideal, we want to validate all values involved. On line 78 we have our divisor, the number we are dividing by, defined as a variable. On the next line after this, line 79, I want to define an if statement, where if the divisor is equal to zero I want to return the String.value of zero for simplicity sake. We, of course, still have the option to return an error message to the user or some kind of other response. For the second option, however, we could, reactively, catch and handle the exception instead. I want to define a result variable and, after that, create our try catch statement where we're going to try
>
> **[1:36](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=96)** and divide by zero and set the value to result. On line 86, I'll update the response to use that result variable. On line 85, I want to catch the ArithmeticException, specifically. And, again, I want to do the same thing that we did on line 80, I want to return the ResponseEntity.ok where the body is zero. Now if I were to restart my application we will never trigger our try catch statement, we will always trigger this line 80. So now that my application has started, I can go to Postman and tries to get the ratio for the first number, where we could, potentially, divide by zero again, and I now get a zero response with a 200-OK status. Which way you went would be a personal or team choice, you don't have to implement both. I advocate for the first option because it is more proactive. It is a great muscle to build, to learn to anticipate what validations would need to be done to avoid exceptions before they occur. We know that if we were building a [[Banking]] system dividing $10.00 between zero accounts is not acceptable or possible, so why wait until an exception is thrown to handle it? In my opinion, it is best to prevent such exceptions, when possible, by anticipating what validation may be necessary.
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/solution-handle-an-arithmeticexception?u=76281980&t=189)** After doing this challenge you have learned a couple of ways of how to handle a RuntimeException, like the ArithmeticException.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1)
> **Definitions:** is a  (2), defined as (1)
> **Env Vars:** ide (1)
> **Versions:** 10.00 (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Runtime exception: Handling of NullPointerException](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=0)** - [Presenter] We have reviewed examples of the runtime exceptions including the number format exception and the arithmetic exception. Now, for the most popular of them all, the Null Pointer Exception or NPE. In this video, we will learn exactly what not to do with them as well as how to resolve NPEs. As the reminder, the null pointer exception is caused whenever your code attempts to use an object that is null or has not yet been instantiated. For example, here on line 109, let's say I made a mistake and forgot to instantiate the sequence list variable to an empty list. Note that my IDE actually gives me a warning on line 110. We can see the warning by clicking on the light bulb here as well as some exception handling options? And we can also see the warning in the bottom left hand corner of my IDE. Remember that NPEs are still runtime exceptions. So our JVM or compiler will allow our application to run and continue. It will not force us to handle this exception despite the IDE NS knowing that it could potentially lead to problems. Let's see what problem it will cause specifically. Again in my IDE on console, I can see that my application is started. In Postman, my favorite GUI to try HTTP requests to my APIs. I can try sending a post requests where I try
>
> **[1:35](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=95)** and generate the Fibonacci sequence for the first eight numbers in the sequence. I actually get an internal server error in the HTTP status of 500. Going back to my console. I now see that I have a no pointer exception. This exception doesn't have a message, the message is actually null but in my stack trace, I can see exactly what line is causing it. This is of course, because I am calling the add method on a null object. Let's talk about options in handling this. In the first option, we could do nothing. For user will get this 500 status and it's accurate and that the user will not be able to do anything on their part. They will have to come to us as the developer team or support and we'll have to look at our logs to figure out the issue. At that point in time, we will see this line of code, create a fix and have to redeploy our code. Option two will not fit in every situation for an NPE. To illustrate this, let's update this method. Let's say for some reason, we actually want to pass in an array list to our get sequenced method here on line 102. So we want this to be a list of integers and we'll call it sequence. So to keep with our variable name here, that means that I can get rid of line 109 because I already defined this object.
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=189)** So back where this method is being called on line 45
>
> **[3:20](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=200)** for illustration purposes, I'll now pass in a null list as well. Doing this will get me back into the same situation before for our user where they will receive an internal server error. Let's pretend that we don't have control over what's being passed into line 45. And this is being passed to us by another developer or another piece of software. If that is the case in our get sequence method, we could just do a null check here before we attempt to do anything with this list. So on line 109, we can say if sequence is equal to null,
>
> **[4:06](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=246)** we will just set sequence to a new array list on line 110. This effectively illustrates the second option. Our third option which I do not endorse at all, it's actually catch the NPE specifically. And we can do that by going to this try catch here on line 44 through 48 and add a second catch clause
>
> **[4:37](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=277)** and return an appropriate response. Because I don't endorse this, I'm actually going to use a null sense status called I am a teapot.
>
> **[5:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-handling-of-nullpointerexception?u=76281980&t=300)** I can't think of a situation. This would be acceptable considering it would be simpler and easier to just check for nulls first, an extentiate the object or we could throw a more acceptable exception like our Fibonacci endpoint exception example in our controller. However, notice I said an option three, I do not suggest catching a specific null pointer exception. This does not mean you can't catch generic exceptions. Catching generic exceptions is actually very acceptable if they're not expected and is the last option that I will cover briefly. With this option, this last and fourth final option, it means that we can catch all exceptions with one catch clause and handle them when we do not already know what exceptions could occur, We are human after all and cannot foresee all of the places that an unchecked or run time exception could possibly occur. We will talk more about the specific example later in this chapter. Now in this video, we have learned what causes an NPE and reviewed at least four different options on how NPEs could be possibly handled.

> [!info]- Semantic Content
>
> **Env Vars:** npe (4), ide (4), http (2), jvm (1), gui (1)
> **Warnings:** warning (3), note that (1)
> **Definitions:** means that (2)
> **Tools:** postman (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Runtime exception: Unknown runtime exception](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=0)** - [Instructor] So far, we know that runtime exceptions are unchecked exceptions, that we are not forced to handle by the compiler. Some example of these exceptions include the number format exception, arithmetic exception, and the no pointer exception. In this video, we will discuss how to handle other exceptions and other runtime exceptions that we may not know could occur or be able to anticipate. When an app is running in the wild or in production, we will likely know from experience to anticipate validating a user's input. We might want to check that they are providing an actual number and not a character to avoid the Null format exception, or check that a divisor is not zero to not cause an arithmetic exception. We can also do Null checks for any objects that could potentially trigger an NPE. However, there exists runtime exceptions that could occur that we will not be able to anticipate. When those exceptions pop up, we don't want our users to have a bad experience in getting an unhelpful response. To handle these unforeseen exceptions, we can introduce an additional catch clause, to our existing try catches. For example, here on line 31, I can add another catch statement where I catch specifically any exception recall that try catches depend on order. So even though our Fibonacci out of range exception,
>
> **[1:36](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=96)** is a subclass of exception, this catch statement on line 30, will be triggered first for the more specific exception. All other exceptions will trigger this second catch statement on line 32. Notice I did not specify a runtime exception or go even more generic and try to catch all throughables. I want to be able to handle unchecked and checked exceptions that are not already being handled. I also don't want to catch any throughables because that could include errors and errors should not be caught unhandled, as they are unrecoverable. Inside our catch statement on line 32, we can do a number of things. We should be sure to log detailed information like [[Metadata]] around parameters provided or the very specific error message and (indistinct) for easier debugging leader. Remember, we don't always want to return this information to the user for security purposes. This is also a good place to set up any metrics that you might need to keep track of the number of exceptions that could occur, for your dashboard and alerting in your application, or to even alert the person who was on call. I don't have any logger or metrics set up as the snap the focus of this course, but I highly recommend learning more about logging and metrics for your [[Spring Boot]] application. Beyond logging and metrics, we can also use this catch clause to appropriately respond to the user. Recall that the Spring [[Representational State Transfer (REST)|Rest]] controller
>
> **[3:09](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=189)** will return a 500 internal error, if any unhandled exception were to occur. In this case, I still want to return the response entity with the internal server error.
>
> **[3:28](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=208)** This time, however, I want my body to be something more helpful for the user so I'll actually direct them to our support email.
>
> **[3:41](https://www.linkedin.com/learning/java-exception-handling/runtime-exception-unknown-runtime-exception?u=76281980&t=221)** Now, because of this new catch clause, any exceptions that were to occur, we no longer need to have a through statement in our method header, if we had one on line 25. Note that Spring provides exception handlers that will make it easier for this exception handling, as well as make it easier to be consistent across all end points on how we handle these exceptions. Now in this video, we've discussed how to catch and handle generic exceptions and why it might be beneficial to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Spring Boot]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), snap (1)
> **Prerequisites:** set up (2)
> **Env Vars:** npe (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Handle potential runtime exceptions](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/java-exception-handling/challenge-handle-potential-runtime-exceptions?u=76281980&t=5)** - [Instructor] So far in this chapter, we have learned about different types of runtime exceptions and how to handle them. We have also learned how to catch and handle generic exceptions. Within our app, we have a total of four end points. The first is the find number endpoint on line 24. The second is the create sequence endpoint on line 44. Then the get sequence endpoint on line 64, and finally the find ratio endpoint on line 81, our first endpoint, the find number endpoint catches any generic exception on line 31 and handles it. There are still three other end points however that can encounter any type of exception and will return an unhelpful error message to the users. For this challenge, you are to update all instances of these endpoints and catch any generic exceptions and return a more helpful message to our users. Feel free to return to the unhandled exceptions video, or refer to lines 31 through 35 of our controller to understand how this could be done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Handle potential runtime exceptions](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=0)** - [Instructor] For this challenge, you were tasked with updating any parts of a controller that can encounter an exception. You were to catch these generic exceptions and returning more helpful message to our users. There are a total of four endpoints in our app. We already worked through an example with the findNumber endpoint on line 24. This means you have three endpoints left, that could be updated. Simply put, we could just add this exception catch clause, between line 31 and 34, to any of the existing try-catches that we have, and if a try-catch does not already exist, we can just create one specifically. So to not reinvent the wheel, I'm going to copy lines 31 through 34 and find our next try-catch. So if you recall before, I said handling an NPE like this is not ideal. So I'm actually going to get rid of lines 51 through 54, for createSequence endpoint. And instead use this exception, generic catch statement. I can do the same thing for line 71 and the getSequence input. I can do this again on line 96 for the findRatio input as well. Now, for this last endpoint, I do want to make a few more changes. You will notice that we are still throwing a FibonacciOutOfRangeException from this endpoint.
>
> **[1:35](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=95)** And that is because this exception, defined on line 85, could occur because of the Fibonacci method called on line 86 or line 87. I instead want that FibonacciOutOfRangeException to be cut by our generic exception here. So to do that, I'm actually going to take everything from line 86 and 90 and move that inside of our try statement at line 88. You'll notice that my IDE now indicates that this FibonacciOutOfRangeException can be removed from my method header. So go ahead and do that. However, just because I'm using this generic exception doesn't mean I want to lose the error message that the FibonacciOutOfRangeException is providing. I also have the option of specifically catching the FibonacciOutOfRangeException as well. So it can do one of two things. I could just update line 96 and add another catch statement here.
>
> **[2:50](https://www.linkedin.com/learning/java-exception-handling/solution-handle-potential-runtime-exceptions?u=76281980&t=170)** And on line 97, I want to return the status of BAD_REQUEST because they are providing something that's out of range. And I wants to provide that exception method. This approach is more ideal because I know that it's a user responsibility versus suggesting that the user reaches out to us as we do on line 101, if we don't specifically catch this FibonacciOutOfRangeException. You may have noticed that there's a ton of duplicate code when handling these exceptions. For that reason, Spring does have the concept of an exception handler as a way to handle this. This allows you to apply exception handling techniques multiple times across the application, and define that technique only once. However, exploring the exception handler through Spring is beyond the scope of this course. I do encourage you to explore that as an option. Now that you are done with this challenge, you have learnt how to catch and handle all sorts of exceptions.

> [!info]- Semantic Content
>
> **Code Identifiers:** findnumber (1), createsequence (1), getsequence (1), findratio (1)
> **Env Vars:** npe (1), ide (1), bad_request (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with exception handling](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-exception-handling/next-steps-with-exception-handling?u=76281980&t=0)** - [Instructor] Now that you have learned the basics of exception handling, I suggest you explore Spring's exception handler feature and also learn more about logging. Both topics are covered in our Spring MVC courses. I would also recommend learning about metrics through Spring's Actuator for your app, which you can hear more about in our Spring Essential Training course. Beyond these topics, which are more related to exception handling we have already discussed, I hope this course encourages you to continue your learning journey with Spring and [[Java]]. I hope you consider learning more advanced topics like our course on [[Spring Data]], or even my course on Spring Cloud with [[Google Cloud Platform (GCP)|Google Cloud platform]]. Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Spring Data]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
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