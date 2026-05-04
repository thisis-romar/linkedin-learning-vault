---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: debugging-in-c-sharp
url: "https://www.linkedin.com/learning/debugging-in-c-sharp"
duration_minutes: 86
duration: 1h 26m
level: Beginner
updated: 7/15/2024
learners: 20727
skills:
  - Debugging Code
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGLU3_QpBMa2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720820408514?e=2147483647&amp;v=beta&amp;t=hM2XivdDy9bXS90mywn0F6sshixgCLcnLmSkVJ7bt0w"
linkedin_topic: Software Development
learning_paths:
  - '[C- Foundations- From Basics to Building Blocks](../../Paths/Software%20Development/Learning%20Paths/C-%20Foundations-%20From%20Basics%20to%20Building%20Blocks.md)'
prev_courses:
  - '[C- Essential Training 2- Generics, Collections, and LINQ](C-%20Essential%20Training%202-%20Generics%2C%20Collections%2C%20and%20LINQ.md)'
next_courses:
  - '[C- Refactoring Tips and Tricks](C-%20Refactoring%20Tips%20and%20Tricks.md)'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":3,"total":5,"prev":"C- Essential Training 2- Generics, Collections, and LINQ","next":"C- Refactoring Tips and Tricks"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/debugging-code
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Debugging%20in%20C-.md)

![Debugging in C#](https://media.licdn.com/dms/image/v2/D560DAQGLU3_QpBMa2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720820408514?e=2147483647&amp;v=beta&amp;t=hM2XivdDy9bXS90mywn0F6sshixgCLcnLmSkVJ7bt0w)

# Debugging in C#

> Writing programs in C# is one thing. Writing programs that work is another. Discover how debugging your applications can make them more accurate, efficient, and reliable. Learn exactly what it means to debug your programs, and how tools like Visual Studio Code—the most popular IDE for C# programmers—can help you identify and solve errors in your code. Instructor Kathryn Hodge reviews the basic deb

> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp) | 1h 26m | Beginner | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Debugging in C#](#debugging-in-c)
  - [What you should know](#what-you-should-know)
  - [How to use CoderPad](#how-to-use-coderpad)
- [**1. Basics of Debugging**](#1-basics-of-debugging) (7 videos)
  - [What is debugging?](#what-is-debugging)
  - [What is a print statement?](#what-is-a-print-statement)
  - [What is a breakpoint?](#what-is-a-breakpoint)
  - [Inspecting values of variables](#inspecting-values-of-variables)
  - [Execution in debug mode](#execution-in-debug-mode)
  - [The debugging process](#the-debugging-process)
  - [Solution: Find the bug in string truncation](#solution-find-the-bug-in-string-truncation)
- [**2. More Debugging Tips and Tricks**](#2-more-debugging-tips-and-tricks) (4 videos)
  - [Covering edge cases](#covering-edge-cases)
  - [Defensive programming](#defensive-programming)
  - [Side effects](#side-effects)
  - [Solution: Discount calculator](#solution-discount-calculator)
- [**3. Common Errors in C#**](#3-common-errors-in-c) (5 videos)
  - [NullReferenceException](#nullreferenceexception)
  - [IndexOutOfRangeException](#indexoutofrangeexception)
  - [Logical errors](#logical-errors)
  - [Using a reference like a value](#using-a-reference-like-a-value)
  - [Solution: Library management system](#solution-library-management-system)
- [**4. Practice Debugging C# Programs**](#4-practice-debugging-c-programs) (5 videos)
  - [Basic code challenge](#basic-code-challenge)
  - [Basic code challenge: Solution](#basic-code-challenge-solution)
  - [Logical code challenge](#logical-code-challenge)
  - [Logical code challenge: Solution](#logical-code-challenge-solution)
  - [Solution: Find bug in factorial function](#solution-find-bug-in-factorial-function)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Debugging in C#](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=0)** - [Kathryn] Visual Studio code is the most commonly used IDE among C# developers. I'm going to show you how to approach finding and solving errors in your programs, as well as how to decode common error messages. So if you're tired of facing those confusing errors in your code, and not sure where to start to fix them, I'm here to help. Hi, I'm Kathryn Hodge, and in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, I'll walk through examples where we use the debugging tools available in Visual Studio code. Ultimately you'll learn how to proactively avoid common mistakes and bugs through defensive programming, resulting in more secure and reliable programs. Let's get started debugging in C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** visual studio (2)
> **Env Vars:** ide (1)
> **Warnings:** common error (1)
> **Speakers:** - [kathryn] (1)

#### [What you should know](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=0)** - [Presenter] Before taking this course, you should know a few things. First, you should know the basics of the C# language. In this course we'll be looking at C# code and improving it, so understanding C# is essential. We'll also be using the Visual Studio Code IDE in this course, which is a very popular software for writing C# code. If you don't have it installed, or have never used this IDE before, don't worry. All you need to do is download Visual Studio Code, and then download the .net [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tools. Alright, now you're set up and ready to go. Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Env Vars:** ide (2), cli (1)
> **Tools:** visual studio (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes interactive code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solutions to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four main areas: Instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used. You can use these drag handles to allocate space as you'd like. Let's complete this coding challenge. There are comments in the starting code showing you where to put your solution. (keyboard clacking) When you click the Test my code button, you'll see a message indicating whether your code returned a correct results. Let's change the code to something that fails. In the output, we get a failure message. Now, if you're stuck, there are ways you can ask for help. The ShowExpectedResult and ShowHints variables determine whether you see the expected results and any hints. Let's change these to true.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=97)** We'll run it again. And we can see the expected results and a hint in the console. The code editor on the lower right shows how your solution is used. You can change this code to experiment with different test cases. Let's make the largest number 21. If we run it again, the new expected result is 21, because that's the largest item in the array. When you finished each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Basics of Debugging

[↑ Back to Table of Contents](#table-of-contents)

#### [What is debugging?](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=1)** - [Instructor] As programmers we write lots of code, but since we aren't perfect sometimes we make mistakes and have errors in our code. These errors can cause our code to give the wrong output, or crash our program entirely. Debugging involves locating and correcting code errors in a computer program. It is part of the [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) process and is an integral part of the entire [Software Development](../../Topics/Software%20Development.md) lifecycle. We often call these errors bugs. And the term bug comes from computer scientist pioneer Grace Hopper who coined the term bug when she found a moth causing an error in an early electromechanical computer. In debugging we must find these bugs or errors in order to correct our code and create a working program. So what kind of bugs can we have? Well just like there are many types of bugs in real life, in computing there are also different types of bugs. First, we have a syntax bug, or syntax error. A syntax bug is an error often caused by a left out semi-colon or a misspelled variable name. It means you entered a command or piece of code that the computer doesn't understand because it's not written in the proper format. Syntax errors often cause your program to fail before it's even executed because the computer has to understand your code in order to run it. A logical bug is an error where the program is able to run and the computer can carry out its instructions but it doesn't act as the user expects. It provides some output that the programmer did not intend.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=97)** This means you might have added instead of subtracted numbers, or maybe used a less than sign instead of a greater than sign. In debugging we often look for parts of the program that aren't working correctly, find its respective code and fix it. To debug or find these errors we usually use tools called debuggers, which we'll be breaking down throughout this course, specifically for C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is an  (3)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [What is a print statement?](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=1)** - [Kathryn] A print statement allows you to send output to the standard output unit of your computer, usually your console or terminal. You've probably used print statements all along, but here we'll put them into context with debugging. Here we have Visual Studio Code open, and in C#, a print statement looks like this. We have Console.WriteLine, with whatever we want to print out in the parentheses. We also add using System at the top in order to get access to the console so we can print data to it. Let's go ahead and run this code, and this is just a hello world application. You've probably done this dozens of times, but with debugging it can get a little bit more complicated. With this statement, we're just printing out a hardcoded value, which isn't super useful. In debugging, sometimes we'll want to print the value of a given variable to understand more fully how our program is working. So let's go ahead and add an int a, which we'll give the value 10, and int b, which we'll give the value 20. So we have these two variables, and then we'll add them, and put them in a variable called c, by going a plus b. Once we have that value c, we'll go ahead and print it to the console, with Console.WriteLine(c). Then we'll run our code, and we should see 30 in the console. If we go ahead and change one of these values to say a is going to be 30 now, and b is going to be 50,
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=97)** in this case we'll actually get 80 in the console. So we'll go ahead and click the arrow up here to run it again. And here we get 80, and then hello world, our hardcoded value. This is a fairly trivial example to see what our program is actually doing, but as our programs get more complicated, understanding the values of our variables becomes more and more important.

> [!info]- Semantic Content
>
> **Tools:** terminal (1), visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kathryn] (1)

#### [What is a breakpoint?](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=1)** - [Speaker] A breakpoint is an intentional stopping point or pause put into a program for debugging purposes. A breakpoint allows us to temporarily halt a program in execution in order to inspect the internal state of the application at that point. Jumping back into Visual Studio Code we can add a breakpoint to our program. To add a breakpoint we just hover to the left of the line number and click. This adds a breakpoint to this specific line and the program will stop its execution before executing this line. Let's add breakpoints to a few areas we think might be problematic or really determine the output of this program. So here, line eight, this operation is key to tripling a number. So let's go ahead and add a breakpoint to the line after it. So line eight will execute and then the program will stop its execution. We can also add a breakpoint to 15, here. So right before we print things out to the consol we'll go ahead and stop the program and make sure everything looks good. Now why would we ever want to stop the execution of a program? Why would we ever add a breakpoint? When we stop the execution of a program we can take a look at the value of each variable at that given point in the program. Let's see this in action. So we'll hit the play button up here and our program is actually going to stop its execution on line 15. This is because our program starts running
>
> **[1:35](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=95)** with the main function. So we go ahead and execute line 14 then we hit line 15. On the left, here, we can double check everything looks as it should. Our original number has the value three. Here, we assign it the value three. That checks out. We'll go ahead and continue the program and here, we hit line nine. So this is coordinating with our triple number variable. We see triple number up here, but it doesn't triple number three. Here we have six. Three tripled, or three times three should be nine not six. So let's take a deeper look at our program and here we see num plus three. This should really be num times three because we want it to add num three times or multiple num by three. We'll go ahead and continue executing the program and we'll still get that wrong output in our consol. But if we run the program again, everything should be updated. So here we go. We run. We still hit this breakpoint. We'll go ahead and remove that breakpoint just by clicking on it and continue execution with this continue button up here. We get to our returned tripled number line. In here. In this window, we see tripled number has the value nine. And so this is correct. Num plus num plus num, or num times three does equal nine. We'll continue its execution and we get the correct answer in the consol. Another way we could have done this is let's add the mistake back to our program and run the code again.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=190)** And it'll stop at this breakpoint again. We should get six as the value for a tripled number, we see six. Notice how this is different from our print statement because we are actually halting the execution of the program to see the value of the variable at a given point instead of running the program fully, and seeing the value after execution has been completed. There are also other types of breakpoints. We can go ahead and remove this breakpoint by clicking on it and we can add another type of breakpoint. Here we have conditional breakpoints and a logpoint. Let's go ahead and add a conditional breakpoint. And what this allows us to do is it allows us to actually stop the program if a given expression is true. Another way to do num times three is num plus num plus num. And really what we want to do is if for some reason the tripled number does not equal num plus num plus num then something's wrong with our program. This is another way to add a mini test to your program. We want to stop the programs execution if num plus num plus num does not equal triple num because num times three is the value we're giving to triple num. So let's hit enter, and this will add our conditional breakpoint. We'll execute this program again. And in this case, our breakpoint won't be executed. We'll just continue the program as we always would have with no breakpoints. This is because the expression evaluates defaults
>
> **[4:43](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=283)** because num times three does equal num plus num plus num. We can force this breakpoint to run if we go plus three instead of times three. So adding that error back in. We'll go ahead and run this. Now we hit our breakpoint because tripleNumber does not equal num plus num plus num. So that means our conditional is true, allowing this breakpoint to be hit. We'll go ahead and stop the execution and change num plus three back to its correct value which should be num times three. We also have that logpoint, here. Right now, this only works for node JS in [JavaScript](../../Skills/Software%20Development/JavaScript.md) but it might be coming to C sharp soon. Sometimes these breakpoints can get annoying if you add them over time. So to delete all of them at the same time, we can just go to debug, disable or remove all breakpoints. In this case, we'll just remove them. And they'll all go away. In debugging, seeing the values of your variables in the midst of program execution can be very useful in understanding the flow of your program and how your program works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (1), node (1)
> **Code Identifiers:** triplenumber (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [speaker] (1)

#### [Inspecting values of variables](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=1)** - [Instructor] Let's take a look at the different ways we can inspect our variables with break points. Here we have a program that should find the max of two numbers. Of course, it's not working perfectly so we'll need to inspect the program as it's executing, to find the error and come up with a solution. Let's go ahead and run this program and see what we get as output. Here we get three. The input, to our find max function, is three and eight. This means we're returning the minimum instead of the maximum. Let's put some break points in here and try to find the error. On line 10, we can add a break point right after we calculate what the max is. Let's go ahead and run the program again, and we'll see it stop at that point in execution, and we should be able to see the values of these local variables. And so we see three, eight, but our max is three. Let's take a closer look at this line nine here. And we see if a is greater than b, then we want to return b. So that means if a is greater than b, we return the lesser value, which is b. If a is not greater than b, then we return a. So again, returning that lesser value. Now this function should return the maximum. So we need to change this greater than sign to a less than sign. So if a is less than b, then we return b, which is the greater of the two numbers. Otherwise, we return a. Let's rerun this program and see if this fixed our problem. We'll remove this break point here.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=97)** And in our console we get eight, which is the maximum of the two numbers, the maximum of three and eight, our inputs. Let's add that break point again and take a deeper look at some of these side [Windows](../../Glossary/Service/Windows.md). So if we run the program again, you saw our local variables end up in this Variables window here. This is, unsurprisingly, called the Variables window and we saw it in the last video but it basically populates with the local variables in the given scope, along with their values. We have an int a, which has three, an int b, with the value eight, and then our max, with the value eight. Another cool thing we can do here is we can actually hover over the various variables and see what their values are. So if we hover over max, we get eight, and the other values, we get their values as well. Another thing I can do is actually shift the scope that we're in by clicking on the different layers of the Call Stack. So the other window we have over here is the Call Stack. And this lets us switch between whether we're in this internal function here or whether we're in the external function main, which is calling our find max function. Notice in the main method, a and b don't exist. But we do have a variable max, with the value zero, since it isn't set yet, and our args variable. We also have something called a Watch window. And this allows us to watch certain variables and see what their values are, always, no matter what scope we're in.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=190)** So if we put a here, we can see a does not exist. And that's because it does not exist in this current scope. But when I go up to the find max scope, and we see that layer of the Call Stack, then we see a has the value three. Lastly, we have the Debug Console, which is our window down here. So we scroll to the bottom and we see this little input area. We can actually input the name of a variable and see it's value. The Debug Console acts as a read print evaluation loop. This allows us, not only to see the values of our variables, but to compute new calculations on demand. So I could write a here, get the value of a, and this is at the point of execution wherever my break point is. And I could put b. I could do a plus b, which has nothing to do with our function but we can still calculate it anyway. We can also call the find max function, the function that we're in, with a and b, and see what the output is. In this case, eight. These break points and inspector windows can be very useful when you're trying to debug your program because it allows you to examine the internal state of your program, in stages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2)
> **CLI Commands:** find (7)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Execution in debug mode](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=1)** - [Instructor] When [Debugging Code](../../Skills/Software%20Development/Debugging%20Code.md), we often use breakpoints to stop the program's execution and inspect the internal state of the given variables. We did this before, but sometimes, we want to add a little more control over how and when our program is executing. Debug mode in Visual Studio Code gives us this control with a few buttons. And we've already one of these buttons, the Continue button. Let's add a breakpoint here. We'll add one to Console's at WriteLine(sum) and then another to line 24. And you'll notice there are some buttons that appear at the top here. The Continue button is the button we've used before. It allows us to continue the program's execution after hitting a breakpoint. If we click this button, we jump to the next breakpoint. It's important to remember that after hitting the Continue button, the program will only stop again if it runs into another breakpoint. This means if I hit the Continue button again, the program continues executing until it's finished and we see the output at the bottom. What else can we do in debug mode? Let's add another breakpoint to line 19 and run the program again. Another button we have is the Step Into button and that's this button right here. This allows us to step into a function. That might seem confusing, but if we click on it, we actually step into the summation function. Line 19 has a call to the summation function, so when we call step into,
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=94)** we go ahead and step into the execution of that function with its given arguments, numbers, and Numbers.Length - 1. With the Step Into button, we can see what's going on behind the scenes with a given line of code. For now, let's stop this execution and try running it again. If we run the code again, we can take a look at the next button, which is the Step Out button. Let's say, we step into the summation function, we're inspecting things in here, we add breakpoints in here, we continue to different areas, and now, we're getting a little lost in all of the details of the summation function. And we want to go back to our broader scope of the main function. We can use the Step Out button to do just that. This button allows us to step out of the current function, back into the larger scope of where the function is being called. This is great for when you might be getting lost in the detailed implementation, and need to step back to take a more encompassing view of the program. The last button we'll look at is the Step Over button, and the Step Over button allows us to step over the current line and execute the next line of code. Here, we're back on line 19. We can step over this line by using the Step Over button, and now, we're on line 20. We can step over again to go to line 22, to line 23, and so forth through all the lines of the program. However, it's important to remember
>
> **[3:09](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=189)** that the Step Over button is different from the Continue button because we only execute the next line, instead of executing until the next breakpoint, or the completion of the program. Now, this isn't the safest program in the world. In fact, it's pretty prone to errors since we give a value to the counter-parameter in the summation method, instead of calculating it ourselves inside of the method. Later in this course, we'll dive deeper into this topic, along with how to make our programs safer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Debugging Code](../../Skills/Software%20Development/Debugging%20Code.md) (1)
> **Cross-References:** go back to (1), later in (1)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [The debugging process](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=1)** - [Instructor] In debugging, we usually have a strategy for tackling and fixing bugs. We don't just go into the code and start changing a bunch of stuff. The hardest bugs to fix are the ones you can't find, because if you can't find it and understand it, you can't figure out how to fix it. This means the first step in debugging is often reproducing the problem. Once you can reproduce the problem, you have access to the problem and can dive in for more information. Next, if you are the person that has found a bug, try to describe the bug in as much detail as you can. Explain what the given input was, what the output, and what the output should've been. Sometimes, you may find the bug, but it's in a different part of the program, and someone else has to fix it. This means detailing the error as much as possible is extremely important. If you are the person debugging the program, then you'll need access to the source code. The next step is to create a snapshot of where the bug appears in the program. You'll want to get all the variable values and anything the program is keeping track of at that given time. Getting a snapshot of the program means getting hands on the internal state of the program. Next, you'll want to analyze the program at this specific point in execution. Looking at the values is everything as expected, using breakpoints in debug mode, can you find anything that looks off or incorrect? Is something not working as it should?
>
> **[1:35](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=95)** This is where you try to find the cause of the bug. Once you've found the cause of the bug, it's time to fix it. You'll want to make sure that you not only fix the bug, but you prevent any new bugs from occurring in this portion of the program. You'll want to check that your solution doesn't have any unexpected side effects, which could potentially cause more errors. It's one thing to understand how to use breakpoints and manipulate your program's execution with debug mode, but it's another to have a clear strategy for your debugging process. Both are important.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find the bug in string truncation](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=0)** - [Instructor] Let's find the bug in this truncate function. In the code, we access the string and run the substring method on it. The substring we create runs from index zero to what this Math.Max expression returns. It will return either the length of the string or the maxLength value given in the input. Let's see what the code outputs when we run it as is. We'll change the ShowExpectedResult variable to true so we can see what our code is supposed to return. Let's run it. With this execution, the input string was, This is a sample string, and the maxLength was three. This means the string returned should only be Thi, or a string with the characters from index zero to index two in order. Thi is what appears in the expected results, but our code returned the full input string. It didn't truncate it. Let's add some print statements so we can see how our code was evaluated given our input values. We'll print out s.Length in the Math.Max expression. (keyboard clattering)
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=111)** Let's run it again. In this case, it looks like s.Length is 23, because there are 23 characters in the input string. The maxLength is three. This means that 23 is returned from Math.Max. That's what we see in the console. When this is used in the substring expression, we return the full string or all the characters from zero to 22. What we really need is a substring from index zero to the maxLength. That's how we'll truncate the string to just the maxLength. Let's modify the code. And we'll run it. Our code works as expected with this input. Let's try another input. Let's make maxLength really high, like 100. Yikes, an error! 100 is out of bounds for the string, because the string only has 23 characters. If maxLength is too high, we'll just want to return the full length of the string. Let's reconsider our implementation. If maxLength is low, this implementation works, but if it's greater than the length of the string, we want the second input to be the substring of s.Length. We can achieve this by using the Min method from Math.
>
> **[3:30](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=210)** (keyboard clattering) If the maxLength is greater than the length of the string, the Min expression will evaluate to s.Length, and will no longer get an error. Let's run it. It works as expected. Let's try again with our previous input where maxLength was three. And the output is correct. It's important to test your code with many different scenarios to ensure it works as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** maxlength (10)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. More Debugging Tips and Tricks

[↑ Back to Table of Contents](#table-of-contents)

#### [Covering edge cases](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=1)** - Just because you're program works for one input, doesn't mean it works for all inputs. That's why developers don't just test the most common type of input, but all types of input. Covering all possible edge cases. Let's take a look at this example. Here, we have some code that returns true or false depending on if the rectangle is a square. Here, we're representing the length and width of the rectangle, with the tuple. Where the length and width are both ints. If we run this code right now, everything works as expected. We have three and three, so our width is three, our length is three. Its true, if we have three and five, so either the width is five, the length is five, the ordering doesn't really matter here. But, if they're not equal, then we get false. You might be thinking that ah, this code is great, it's working. But it's not. What happens if I try to put in zero and zero? In this case, the side or the length or the width, isn't really valid. A rectangle with a zero width, and a zero length, that's not a real triangle, its an invalid type of input. But lets run the program, and see what happens. Here we still get true, even though the rectangle itself is invalid. We still return the fact that it is a square, its another type of shape as well. This is not good. What if we have an item in here that's like negative six, and negative six? So here this is some really strange input,
>
> **[1:36](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=96)** and it's really a rectangle that is completely invalid, its length and width are invalid, it should not be a square, it should not be a rectangle. It shouldn't classify as any shape, because its length and width are invalid. But let's just run the program again, and we still get true. This means we need to edit our code a bit, to handle these extra cases. So we'll add some space at the top here, and check if either number in the tuple, is less than, or equal to zero. So we'll say if the first item is less than or equal to zero or, the second item is less than or equal to zero, then there's a problem this is not a valid shape, it's not even a valid rectangle it's not a valid anything. Otherwise, we have a valid length, we have a valid width. So our common computation of checking if the items are equal, will work and will return the appropriate value. In the case whether the length or the width is less than or equal to zero. Then we might want to error and say hey, this is not a shape. And we can this by simply writing something to the console, we can say error not a shape. Now, we do have to return something from this function, and in this case we'll just return false, we'll say if it's not a valid shape, we'll log that, print it to the console, but we'll also handle the error, and just return false. Running this code again,
>
> **[3:12](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=192)** we should get the appropriate values in our console. So we'll get the error, not a shape, this is false, this is false, it's looking good. So what is an edge case? It's an extreme of a parameter. It's a test case whose input is near a boundary where the program changes from one behavior, to another. In this example, if either side of the rectangle, either the length or the width is less than or equal to zero, then it's invalid, and it's not a square. This means we don't do any calculations and we simply print out that it's invalid, and return false. Its important that your functions, and programs have clear requirements, so you can decide what edge cases to test for, and make your programs less prone to errors.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - just (1)

#### [Defensive programming](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=0)** - [Instructor] Defensive programming is a way of programming, where the application should behave in a consistent and predictable manner, even in the case of unexpected conditions. It's a way of programming where you test for every possible edge case, not just the most common cases or the cases you'd most expect. In defensive programming, we want to make sure our functions have clear requirements, as well as clear input and output types. In the function implementation, we will also want to make sure our input satisfies certain criteria. It's a way of making sure the computation will make sense. Think of it this way, if I ask the question do you write with an apple or an orange? Does this question make sense at all? No, it does not. This is what defensive programming prevents. Let's take a look at an example in code. In this program we have the enum Shape that can have the value Error, Rectangle or Square. We also have a testShape function and depending on what the shape is, we write to the console rect or square. In the Main function we created a new shape and then use the testShape method on it. Looking at the testShape function, everything looks good, right? We check for the case of rectangle, we check for the case of square, and we print out the shape accordingly. However, in the Main method, we just create a new shape, we don't give it the value rectangle
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=94)** or the value square, so by default it gets this error value. This means when we run this program, we don't get anything in our console because it doesn't hit the case of rectangle or the case of square. Having this in our code is not good. It's like an invalid question. How can I test the shape if I haven't even set the shape of the object? Or rather, it's automatically been set to this error shape. We can solve this by adding a default case to our switch statement in testShape. In this default case, we can also raise an exception or error, since it will only be run if the program enters this error state. So we can write throw new Exception. And for the message we can just say Shape not set. So it will throw an error in our program if the shape is set to error. We also add this message here, Shape not set, so that when the program crashes we'll have more details on why it crashed, instead of some generic error message. So let's try running the program and see what happens. And here we get an error, it's System.Exception. And the message is a little bit more descriptive, Shape not set. So, why use defensive programming? Defensive programming prevents applications from going into and continuing within the wrong state. This can be detrimental in the space of [Databases](../../Skills/Software%20Development/Databases.md),
>
> **[3:08](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=188)** because you do not want bugs in your data, or incorrect saved data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** testshape (4)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Side effects](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=1)** - [Narrator] Sometimes a function you create can have unintended side effects. Certain side effects can make your functions unreliable and can make certain bugs harder to find, so it's important to be aware of them when you have them. Not all side effects are bad, you just have to know about them. We say a function has a side effect when the given function changes something from outside its scope. An example of this might be when a function enables or disables a button. The function effected something that was outside its scope. Another side effect is writing to disc. The disc, outside of the scope of the function, is changed after the function is run. What you really want to avoid is unintended side effects. Let's take a look at some quick programmatic examples. Jumping into visual studio code, we have a program. In this first function, we have a function that has no side effects. It does not change anything outside of its scope. It simply returns the input doubled without changing the value of the input. This next function does have a side effect. In this function, we add a generic last name to a string builder. Notice nothing is returned from the function. Instead we mutate name within the function and it mutates the value for our variable n, which calls this function as well. Let's go ahead and run the code
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=93)** so you can see what's happening. So here we get Sally Smith and so when we modify name here, so n gets the value of name when we modify name by pending Smith, we are also in turn modifying n, which is our variable outside of the scopes. So this is a side effect. Now let's say we didn't want this side effect. Instead of modifying name or n, we wanted to return a new value so that our original value does not change. To remove this side effect, we could change this function so that it takes a string and returns a new string with the proper value, rather than modifying the original string builder. To do this, we can edit line 14 and we'll just say return name plus, and to add a space here, we didn't have a space between the two, but we can add one and we'll add Smith.
>
> **[2:38](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=158)** Of course we're going to get an error, because we need to change some of the signature as well. Instead of void, we're actually going to be returning a string and our input, we're going to change to be a string so that it all matches up and we'll have n just be the string literal of Sally and then we'll change its data type as well. In this case, we won't be modifying n, but we also won't be saving the output from this function either, so we'll want to create a string fullName with equals addGenericLastName and now we have the output from this function saved. And we can actually print it out to the console with console dot WriteLine fullName. If we save this and run it, we'll see the value of n has not changed, even after running this function and we still get that output that we wanted of fullName. There are cases where you'll want this side effect and there are other cases where you'll want to avoid this side effect. It's all up to you as the developer. Ultimately to prevent unintended side effects, we usually use buffers, variables, or other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) so we don't have to modify the original piece of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Code Identifiers:** fullname (3), addgenericlastname (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Discount calculator](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=0)** - [Instructor] Let's fix the bug in the discount calculator. In the code, we calculate the discount amount and then subtract it from the original price. Let's use a print statement to find out what the discount percentage is once divided by 100. We'll also change the expected result variable to true, so we can see how what we get differs from what we expect. Let's run it. It looks like the discount percentage is resulting in zero when it should result in 0.9. This is likely due to the fact that the discount percentage is an integer, and 100 is an integer. This means that integer division will take place, making the result zero instead of 0.9. Let's add a decimal to the 100 so that decimal division takes place. Let's run the code again. Now the division discount is 0.9 or 90%, and our code returned the correct answer. Let's try with another input. We'll make the discount zero. We'll run it again.
>
> **[1:35](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=95)** With our fix, the algorithm appears to be working as expected.

> [!info]- Semantic Content
>
> **Non-Speech:** (silence) (4), (typing) (2), (upbeat music) (1)
> **Versions:** 0.9 (3)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### 3. Common Errors in C#

[↑ Back to Table of Contents](#table-of-contents)

#### [NullReferenceException](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=1)** - [Instructor] One of the most common errors in C#, as well as in other programming languages, is the null reference exception or the null reference error. This error occurs during the program's execution, when the program tries to operate on an object that doesn't exist. When I say operate, I mean the program tries to access the components of the null object. If the object doesn't exist, then the components of the object also don't exist. Let's take a look at some code. In this program, we have a string x, which would give the value null, and then we try to trim x. Here, since x is null, when we try to trim or operate on this null object, we'll get an error. So, let me go ahead and run this and you'll see we'll get this error. This is because we can't trim something that is null. We can't operate on something that doesn't exist. This means that almost any method that we use on this string will error with this null reference error because the string doesn't exist. Let's stop this program and try a different method. If we use index of anything, so let's try a, so try using this method on our null object. We'll run, and we still get this null reference exception error. This is because both of these methods try to operate on the null string, or access components of the null string,
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=94)** and that's what gives us this error. Now, let's take a look at a more ambiguous example. Here, we have a person class where each person has a name that is a string. In the main method, we create a people array and allocate space for 10 persons or 10 people. Then, we try to access the first person's name at index zero. Let's run this and see what happens. In this case, we still get this null reference exception error. Why does this error? Well, just because we allocate space for 10 person objects doesn't mean we actually have 10 person objects in the array. When we access people at zero, the object we get back is null, because we never initialized the person at index zero of the people array. This means when we access the main property of this null object, we get at error. So, let's go ahead and take out the name here and stop the program from running, and we'll add a break point so we can actually see what's inside of this person array before we run this print statement so that you can see inside of this person array of people it's all null. So, we have the person at index zero is null, all of these are null values, and so whenever we try to operate on any of these null values, we're going to get that null reference exception error. Let's go ahead and comment this out
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=190)** and try a similar operation but with a different data type. So, we'll comment that out and we'll create and int ray which we'll call numbers, and it will be a new int ray with 10 items in it. Now, let's try this same line, console dot write line numbers at zero, so here we'll access the item at index zero of our numbers array. We'll add a break point here and just see what's inside of this array when we initialize it. So we'll hit that play button. And we'll actually just step over this so we can get to this next line and see that the number array has items in it. So, here we actually initialized each item in this array to be zero. This didn't happen with our person array because person was a custom object, but int is a value type or a primitive type, a basic type, so when we create an array of ints, each item in the array is automatically initialized with zero. Since int is a built-in type, when we create an array of ints, we automatically get these zeros. Let's continue the program, and at the bottom we see zero is at index zero of the numbers array. Ultimately, this means that when we deal with custom objects, we have to be more mindful of initialization, manipulating values
>
> **[4:44](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=284)** and customization in order to avoid null reference exception errors.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [IndexOutOfRangeException](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=0)** - [Instructor] Another common error in C# as well as other programming languages is the Index Out of Range Error or the Index Out of Range Exception. This error occurs when the program tries to access an element in a collection using an index that exceeds the collection's boundaries. Typically, the first element in a collection is located at index zero and the last element is at index n minus one, where n is the length or size of the collection. If you attempt to access an element outside of these boundaries, either with a negative index or an index that is larger than the length minus one, you will get an error because you are accessing something that doesn't exist inside of the collection. Let's take a look at an example of this in code. In this program, we have an array called numbers and we put five items into it. Then we print out the item at index zero, index negative one, and index five. Let's run the program and see what happens. And so the item at index zero is going to be 10 and then we will get an error on line 11 because negative one is outside of the index bounds for this array, so that's why we're getting that IndexOutOfRangeException. And if we come over here in numbers, we see items only exist at index zero, one, two, three, and four. What this means is that the code at line 12 will also err because we are accessing the number at index five
>
> **[1:36](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=96)** and that does not exist in our collection. But just to prove this, we can comment that line out, stop the program, rerun it, and we'll get another error on line 12 here, and that's because five is outside of this collection. Even though there are five items, index five is not an index we can access because our indexing ends at the length of the array minus one. For now, we'll comment this out. And, usually you won't be printing items with a specific index to the console, but you might have a for loop that loops through the contents of the array. So let's stop the program and add a little for loop here. And, let's say you wanted to add up all of the numbers in this numbers array. To start, we use a int sum variable and we'll just give it the value zero, and then we'll use a for loop here and add all of the numbers in this array, so we'll go numbers.Length; i++, so going over the length of the array, we'll add each item that is in the array to the array. So we'll go like that, we'll save, and then at the end, we'll print out our sum to the console, so we'll say Console.WriteLine sum, save it up, and we'll print that. So we're running this code,
>
> **[3:08](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=188)** we're printing out each item to the console and, again, we get this IndexOutOfRangeException. That is not good, and that's because we are trying to print out the item, again, that's at index five. So why is this happening? Well, in our conditional here, we should really have less than numbers.Length because if we continue to iterate when i equals the numbers.Length, we're going to get this IndexOutOfRangeException because the numbers.Length is five but our indexing only goes from zero to the size minus one, which is four. So taking away that equal sign there, we'll run this again and the program should work as expected because i will have the value zero, one, two, three, four, and then when we hit that five, we exit the for loop because the condition is no longer true. Now, to continue to avoid errors, we could actually rework this entire for loop completely. We could write sum equals zero, so resetting our sum, and we could use a foreach loop instead, so we could go foreach int num in numbers. We can go sum equals sum plus num. So here we're saying for each number that's in the array, we're going to have it be in this value num individually and then we're going to add it to our sum. So first, we'll add the number 10
>
> **[4:44](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=284)** and then 2 and then 38, 19, 5, until each item has been added to the sum and we'll get that same value for our sum as we did before. Another way we could write this is we can add something called using System.[Linq](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md) at the top. We can actually use a LINQ query to access the different items in this array. We could have an int total be from num in numbers select num, so this is essentially doing the same thing our foreach did, but for each number, we're going to select it and then we're going to sum it up. So we're going to sum up each item that is in this numbers array and we're just calling that number num for each number in this, we'll sum it up altogether, and then we will get that item in our console. We should print it out so we can see what it is. We could also use a breakpoint instead to inspect it if you didn't want to write this print statement. And we also get 74 at the bottom here. Now, depending on the problem, sometimes you might need access to that index number, or in our case, i up here. Ultimately, when we're working with arrays, we have to be careful about what indices we access or else we'll run into IndexOutOfRangeExceptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linq](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md) (2)
> **Warnings:** common error (1), be careful (1)
> **Env Vars:** linq (1)
> **Speakers:** - [instructor] (1)

#### [Logical errors](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=1)** [Instructor] In our code, we can also have other types of logical errors. Logical errors are only caught during program execution. One type of logical error is dividing by zero. The operation of dividing by zero is an invalid operation and as a result, our program errors and throws an exception. Let's take a look at an example of this in code. In this program, we have an int A that has the value of four and int B that has the value of zero and then, we divide the two values and store the value in results. Let's run this and see what happens. So here, we get a system divide by zero exception. We attempted to divide by zero. This operation is invalid and the only way to avoid this error is to not divide by zero. But, we can capture this error and handle it in a different way with C sharp's exception handling features. These features help you deal with unexpected or exceptional situations that occur when a program is running. Exception handling uses the try, catch, and finally key words to try actions that may not succeed to handle failures when you decide that it's reasonable to do so and to clean up resources afterward. Let's try adding this to our division code. First, we'll stop the execution here
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=94)** and we're actually going to pull this division operation into a new function. So here, we'll go static double division and we'll have an int A and int B as our parameters and then in the body of the function, we will say if B equals zero, so if we're attempting to divide by zero, then we want to throw an error. So let's say throw new System.DivideByZeroException. The only difference here is that we are throwing the error rather than the program. So we'll say, divide by zero, and we'll say otherwise, will return A divided by B. We'll save this up, and change this to the semicolon, and then back in our main code, we'll call this function. So we'll say double results equals division by A and B. So we'll save this up. Then, we'll run this program again. And this won't solve our error. We'll still get that exception but in this case, we are the ones throwing the exception rather than the program. So, we have a little bit more control there. We'll stop the program and what we really want to do is handle this error
>
> **[3:07](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=187)** so when this error happens, we don't want the program to crash, but we want to handle it and continue execution of the program. To do this, we'll use the try catch braces that we were talking about earlier. In this case, we'll try to divide by zero. But if we can't do it because our B is zero, then we'll go ahead and catch that error and do something else. So what error are we capturing, the DivideByZeroException. Then we'll have E, and we'll just print this error to the console, and then when we're all done, we'll finally say that we're finished.
>
> **[3:54](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=234)** So either way, whether we get the error or not, this line of code will run. If we get an error, then this line of code will run. If we do not get an error, then this whole try block will run and so will actually print out the results to the console. So it's either the results or the error that will be printed to the console. So let's run this again. So here, since we did attempt to divide by zero, we see this error in the console with a bunch of information but we still continued execution and we see this finished block down here. If we try to divide by something else, let's say two, so this is a valid operation, then, we will actually get that results in the console and we'll still get this item FINISHED as well. What's great about this is that our program did not crash regardless of input. It went through the entire execution and handled the error when it occurred. Instead of printing this error to the console, another thing we could do here is we could just divide the number by one. This is a valid operation that we know will work and we can print that result to the console. So we could say double R. So this is hiding the error entirely from the user. They don't get any message about it. We just redo the division with one instead of zero. And in this case, we get two because we should change B back to zero so it will run this code in our catch statement.
>
> **[5:30](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=330)** And we get four instead because four divided by one does equal four. In this case, we're assuming something from the user and that if they input zero, they really meant to input one. This is correcting the error instead of just notifying the user that they did something wrong. C sharp's exception handling tools are a great way to capture and handle unexpected logical errors in your code.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** finished (1)

#### [Using a reference like a value](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=1)** - [Instructor] Programmers are often used to being in control of whether the values they assign to variables are simply values or are references to existing objects. However, in C# the decision is made by the programmer who defined the object, not by the programmer who instantiates the object and assigns it to a variable. This is a common pitfall for those new to C#. Let's take a look at an example. If you're not sure whether the object you are using is a value or a reference type, you could run in to some errors. Lets take a look at this example. In this program we have a class called Person and each person has a string name which is initialized with the person constructor. Inside of the person class we also have a fictional character struct, where each fictional character has a fictional name and we assign that in the constructor. Lets run this code and see what happens. So here we get Rebecca, Rebecca, Harry Potter, Hermione Granger what does all that mean? Well in our main method we have person one which gets the value of a new person with the name Sally, we have person two which is set equal to person one and then we set person two's name to Rebecca and then we print out the two names. Why does this matter, why are we doing this? Well it all has to do with references. When we set person two equal to person one we really set two references to this new person, Sally.
>
> **[1:38](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=98)** This means that when we change person two's name, we also change person one's name. And that's why we get Rebecca for both of these names in the console. The only reason this occurs is because person is a class and it's not a struct. In the second piece of code we have fictional characters, we created character one that has the name Harry Potter we assign that equal to our character two, and then we change character two's name with Hermione Granger. But when we print out the fictional names of both of these characters, they still remain different. When we change the fictional name of character two it did not affect character one and the only reason that happens is because fictional character is a struct. It's decided upon definition of this item, of the fictional character, it's a struct and it is not a class. Although the person objects and the fictional character objects were created in the same way, their definitions are different, which is why we see these differences in the console. Person one and person two contain references to the same person object, whereas C1 and C2 each contain their own copy of the fictional character object. In other words person is a reference type and fictional character is a value type. Ultimately, this means the keyword class is used to define a reference type and the keyword struct is used to
>
> **[3:11](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=191)** define a value type in C#. Understanding this difference is key to avoiding unexpected side effects in your programs.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), means that (1), in other words (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Library management system](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=0)** - [Instructor] Let's fix this bug in the library class. Here we have a class with an availableBooks property. It uses this property to check if a given book is available. Let's run the code and see what happens. It looks like a null pointer exception is thrown. This typically happens if the object we're trying to use a method on is null. Let's look again at the IsAvailable book method. We can add a print statement to see what the value of available books is before we run the contains method on it. (keyboard clacking)
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=58)** Let's run it again.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=68)** It looks like the availableBooks property is null when it should include three books. This means there might be a bug in how available books is initialized. Properties are typically initialized in the constructor. In the library constructor, it looks like we passed some books that we want to set as the list of available books. Unfortunately, we don't actually set the availableBooks property to this list. Let's add that assignment. (keyboard clacking) We should also double check that this book's argument is not null. We'll add an if statement and if the books are null, we'll set availableBooks to an empty list. (keyboard clacking)
>
> **[2:07](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=127)** Let's run our code again. It looks like this case works as expected. Let's try a few others. What if the book is not in the list? (keyboard clacking) That appears to work as well. What if the list of available books is empty?
>
> **[2:44](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=164)** This case passes too. Now, what if availableBooks is null?
>
> **[2:55](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=175)** This works too. By testing our code with many different cases, we can be confident it works as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** availablebooks (5)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Practice Debugging C# Programs

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic code challenge](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=5)** - [Instructor] Throughout this course, we've explored different tools that help us debug programs, as well as how to approach finding and solving code errors. For this code challenge, we have a program that attempts to print the numbers one to 100 with a few constraints. For multiples of three, the program prints Fizz instead of the number, and for multiples of five, it prints Buzz. For numbers which are multiples of both three and five, it prints FizzBuzz. Let's take a deeper look at this program. In the main function, all we do is call the FizzBuzz function. And in the FizzBuzz function, we have all of the implementation that does what the program is supposed to do. Of course, right now, the code doesn't work and it's your job to fix it. Good luck and happy coding!

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Basic code challenge: Solution](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=0)** - [Woman] In this challenge, we have a program that attempts to print the numbers one through a hundred with some exceptions. For multiples of three, the program prints 'fizz' instead of the number. And for multiples of five, it prints 'buzz'. For numbers which are multiples of both three and five, it prints 'fizzbuzz.' Let's debug it. The first thing we're going to do is run the program to see what the actual output is, and if we can even run it. Dragging this up, we can see the contents of what the program outputted, so for zero, we get 'fizz,' for three we get 'fizz,' for five we get 'buzz,' and this is good because here, if it's a multiple of three, we want to print 'fizz.' And, if it's a multiple of five, we do want to print 'buzz.' Now, for that multiple of fifteen, we print 'fizz,' we don't print 'fizzbuzz.' And if we scroll down to thirty, we again print 'fizz,' instead of 'fizzbuzz.' And this is what we should be printing. To see what's going on with our program, we can add some break points. And, more specifically, add a conditional break point here, so we can see what's going on when I equals fifteen. So we'll hit enter there. We'll run our program again, and we'll see it go through all of the different iterations, except when it gets to fifteen, we're going to stop and keep continuing.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=93)** We'll add a break point here, a break point here, break point here. So, if I is a multiple of three, then we want to run this line of code. So, let's see what happens in this next bit. And we do hit this line, so here I is a multiple of three, meaning fifteen mod three does equal zero, and we print this. Then we continue on this next line, and it's just this closing curly bracket that we're messing with here. We'll hit enter, and we go on to the future iterations. We don't ever get to this line; I mod fifteen, because once we enter this if statement, and we find that this condition is true, we only execute this piece of code. But we don't even check what the other elses are. This means, if we want to check fifteen, well, fifteen, anything that's a multiple of fifteen, is also going to be a multiple of three and five. To fix this, what we can do, is we can swap these two items, and so we can say if I is a multiple of three, and really what we can do is, if I is a multiple of three, and I is a multiple of five, then it must be a multiple of fifteen, and we want to print 'fizzbuzz.' If it's a multiple of three, then we just want to print 'fizz.' And so we're re-ordering our statements here, so that way we for sure print 'fizzbuzz' when we hit that multiple of fifteen. Let's stop this program and run it again, and see what happens when we hit that fifteen
>
> **[3:08](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=188)** for our iterations. So for that number to be printed out. So we go through all of these numbers, and then we hit fifteen. So it hits this if statement. This should return true. We'll add some more break points just to see if it lands anywhere here. We get 'fizzbuzz,' we close that curly bracket, and then we go to our next iteration because 'fizzbuzz' is printed in our console. So now we're at sixteen, our I has been incremented. We're continuing through the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this program. And it's looking good, so we'll remove that break point, we'll continue with the execution. It finishes and we can scroll up to see if our output looks correct. So, for zero, we get 'fizzbuzz,' and so, in this case, we're saying zero is a multiple of everything. It's a multiple of three, it's a multiple of five. Zero's a tricky number, and so we'd have to figure out exactly what we want to print out for that variable from a requirements standpoint. So when we do have zero as out number, do we want to print 'fizz,' or 'buzz,' or 'fizzbuzz'? Really, any answer is correct here. It just depends on how you look at it. For one, two, we hit three, we do get 'fizz.' For five, we do get 'buzz,' as expected. And then for fifteen, we do get 'fizzbuzz,' and then for thirty we also get 'fizzbuzz.' And so everything is looking great here, and that's it for this program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (6)
> **UI Navigation:** scroll down (1), go to (1), scroll up (1)
> **CLI Commands:** find (1)
> **Speakers:** - [woman] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Logical code challenge](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=0)** - [Woman] Let's tackle another [Debugging Code](../../Skills/Software%20Development/Debugging%20Code.md) challenge. For this challenge, we have some code that attempts to find the BMI, or body mass index, for each patient in a collection of patients. Where each patient has a weight and height value. Right now, this code does not work, due to several logical errors, but let's walk through it's structure. Starting with the main method, we create a tuple of patients, with the initialize patients function. Jumping up, to this function we have a tuple as our return value, initialize patients, and we want to initialize a number of patients, and so whether it's ten or twenty, this is going to be the number of patients we decide to initialize in the array. So, first, we create a set of patients, but then we also add some edge cases. So we have some edge cases up here, or what if, y'know, there's a patient with a zero height and a zero weight, or negative height and negative weight. So these doubles in here are the height and weight of each patient. And, so here we're initializing it with a size as well as the size of the edge patients. Then, we create a new random, and we have an 'int I.' And while we're adding items to the array, so while we're initializing the array, we create a random number for the height and the weight, and add it to the array. At the end, we add our edge cases to the very end
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=94)** of the array, so that way we can test random patients as well as some of those edge cases. Then we return this patient's array that then we'll be able to use to calculate the BMI for each patient. In the next part, we actually calculate the BMI for the collection of patients. And so that results in the double array, where each item in the array is the BMI for each patient. In this calculate BMI collection method, we take some of the patients, and so these are the patients that we've already initialized, and we create another array, a BMI collection that we will be returning. And, so we just create a plain old array with the number of patients that we have, and we iterate through that array calculating the BMI each time. So we take the height and the weight, and use that to calculate the BMI. In the BMI calculation, we run this formula. This formula is correct and it's not going to be something that you will have to debug, just trust that this is the correct formula, and then we print the height and the weight and BMI, so we kind of know what's going on, and then we return that to the console. So, the calculate BMI collection takes the patients, while the calculate BMI just takes an individual weight and height. Then, at the end, after we've filled the BMI collection with all of the appropriate items, we return it to the user and that's what we get down here.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=190)** Alright, now it's your turn to debug the program. In the debugging, we should be able to see the correct values when we print out each item to the console. Good luck, and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Debugging Code](../../Skills/Software%20Development/Debugging%20Code.md) (1)
> **Env Vars:** bmi (13)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [woman] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Logical code challenge: Solution](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=0)** - [Instructor] In this challenge we have a program that attempts to find the BMI, or body mass index, for each patient in a collection of patients where each patient has a weight and height value. Let's debug the program. The first thing we'll do is just run it and see what happens. See what we get in this output and even if it will run to completion. So here, this is really strange. We get every single height and value, every single one is the same. So we have the same height for every single person in the collection, the same weight, and the same BMI. So this does not look correct. So let's go ahead and add some breakpoints. So first we can add the breakpoint to see if our patients are being initialized correctly. So we'll run it again and see what that value for patients is, if each patient is the same. So we are getting different types of patients and then we are also getting our edge cases at the end. We can even look at this a little closer to make sure we're initializing them correctly. So here we have our patients. This is looking good. And then we do increment i so we're not stuck in this loop. We have for our feet we want something between four and six because that's like the average height of a human being and four to seven,
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=94)** this is good because it's exclusive so the seven will not be included and the four will, so we'll get four through six exactly. And then here we want a random inch value so like five feet six inches, that sort of thing, and we want a random value between zero and 11. Now, this is actually incorrect. This should be 12 because we want to include 11. Since this is exclusive, now it works from zero to 11. Then we call this feet to inches function where we give it the feet and the inches. So let's go find that guy, we give it the feet and the inches so those match up correctly. We have the feet times 12. This is also a little odd. So we multiply with the feet but we don't ever add the inches. And so here what we want to do is we want to add the inches.
>
> **[2:30](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=150)** So here, if we have feet as five, inches as 11, we'll have five times 12, which will equal something, and then we'll have our inches in there as well and we'll add those to our total and return that total. So now this height is going to look good. For our weight we have 120 to 281. This looks good because it's exclusive and so we will get those correct values. And the two here just means we're going to round it two digits, and so that's why we see this here instead of these really long values. With these height and weight values calculated we put height in that first item of the tuple and weight in the second item of the tuple, and put that into our patients array at index i, so that's looking good as well. Next we add our edge cases. Here i is less than patients dot length so while it's equal to less of the patients. And so our patients dot length is 10 plus the size of our edge length, which in this case is one, two, three, four, five, six. So in this case, while it's less than 16, we're going to have 10 minus 10 because i equals 10 now, size equals 10 as well. So that's going to be zero for the first iteration but it's going to store this value at index 11 and so it's not going to overwrite any data. This is looking great and we can see this in our array that all of our edge cases are added
>
> **[4:03](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=243)** and nothing is overwritten. Then we return our patients. So that, that initialization now looks accurate. Next we'll step into the calculate BMI collection. So let's step into there and let's continue to step over. We create that array, that's looking good. That's looking good. We're iterating over the length and then for each item right now we don't have anything in here, but in each location or index of our BMI collection we'll go ahead and calculate the BMI for each patient. Ah, this is why we were getting them all the same 'cause we're not using i here. So we'll add that to be i. So now we'll actually iterate over all of the patients and add each patient into our collection instead of just patient zero, and then item one and item two. So in this case our item one, if we find where we initialize our patients, this was up here.
>
> **[5:12](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=312)** Item one is our height, item two is our weight. Here we put item one, item two, so our height and weight. And here we actually have our weight first, and so that means our items are swapped. And so we are using our height value for the weight here, and our weight value for the height. To change this we can just switch these and we can put weight. And now everything should be set to go there. This formula, we already said this was the de facto, this is correct, and then we print out the according items to the console. This is looking good so let's stop this, and run our execution here and see what we get in this console. Let's take out this breakpoint and continue. And here we get some interesting numbers. And so these BMIs are looking correct, and so that is good. We can double-check it on the Internet in a second but these edge cases, we really need to handle these. Should we be calculating anything if our height is zero or our weight is zero? Should we be getting this in our response? Should we be giving an error message? Should we be handling the error? These are all developer choices and developer design choices. In this case, we'll go to our calculate BMI. So when we're calculating the BMI we'll want to double-check that the height and weight are valid, that the person is actually a person, they have a height
>
> **[6:45](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=405)** and weight that's not negative and that's not zero. So we'll add an if statement here adding some error checking, some edge case checking. We'll say, "If the height is zero or the weight "is zero then we have an issue, we have some problems." And in this case, we'll just print to the console. You could do a try-catch here. There are a couple different options. But to keep this simple we will just do this and instead of stating what the BMI is we'll just say, "Invalid for height or weight,
>
> **[7:29](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=449)** "automatic zero."
>
> **[7:38](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=458)** Here we'll return zero, so we'll print out the fact that there's an error and then we'll return zero and just be like, "Hey, "there was an error, but we're going to kind "of correct it by just making the BMI zero "across the board if you have a height "that's less than or equal to zero "or a weight that's less than or equal to zero." Since we're returning in this if statement we don't necessarily have to add an else clause here. You could add it if it makes you more comfortable but doing this will work just as well. Let's go ahead and save this, and see what the output of our code is. Notice the numbers are going to be a little bit different because it is randomized. And so here all of these are invalid because their one is either negative or they're both negative or one is zero and the other's positive, but because either is less than or equal to zero we get that automatic zero in our console. Now, let's double-check one of these BMIs. Here we have a height of 77.3, which is about 6.44 feet, and we have a weight of 142.65. The BMI we calculated is 16.78. So let's go to [Google](../../Glossary/Service/Google.md) here and I've already inputted the values, but if we have 6.44 as our feet and we have the correct pounds for our weight we get 16.8 as our BMI, which is exactly what we did here in our console. The only difference is that the BMI there is rounded up.
>
> **[9:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=555)** You can copy over a few of the other options here to make sure your values are correct. But if you corrected all of the errors and fixed all the bugs in the program, everything should work as it's supposed to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** bmi (12)
> **Versions:** 6.44 (2), 77.3 (1), 142.65 (1), 16.78 (1), 16.8 (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** go to (2)
> **Definitions:** we call this (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find bug in factorial function](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=0)** - [Instructor] Let's debug this factorial function. This is a recursive function, so we'll need to consider its base case and its recursive case. Let's add a print statement so we can see the result for each step at the recursion.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=29)** We'll write out the numb and the result of the factorial.
>
> **[0:52](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=52)** We'll also print the base case when we hit it.
>
> **[1:06](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=66)** Let's run it. For the base case, the factorial is zero. Then for the recursive case, the factorial is also zero. This makes the overall result zero because in the recursive case, we multiply the number by the factorial of the last number. Let's see what this code was supposed to return. We'll run it again. The expected factorial result for one is one. This means something's wrong and there's a bug. If we think of the facts of multiplication, we know that any number times zero is zero. This means if the base case is zero, every factorial will be zero. Let's try it with five. We'll run the code again.
>
> **[2:06](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=126)** The outcome is still zero, but the correct result is 120. This means we'll likely need to change something in our base case. If numb is zero, let's return one instead of zero. This means instead of zeroing out our factorial in the base case, we'll give it a number that ensures the factorial computation remains accurate. Let's run it. This case works as expected. Let's try it with numb as one.
>
> **[2:46](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=166)** This also works. Let's try it with numb as zero.
>
> **[2:54](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=174)** By testing with many cases, we can confidently say we've solved the bug.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=1)** - [Kathryn] Congratulations, you finished the course! Now you know how to debug your C# programs with break points, exceptions, inspectors and more with the Visual Studio code IDE. You also learned about some of the most common errors in C# and how to avoid them by covering your edge cases. Overall, you discovered how to make your programs more reliable and avoid unintended side effects with defensive programming. The knowledge you've gained in this course will come in handy whenever you're building programs with C#. Feel free to follow me on [Instagram](../../Glossary/Service/Instagram.md) at blondiebytes and good luck, happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Instagram](../../Glossary/Service/Instagram.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Tools:** visual studio (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [Kathryn Hodge](../../Instructors/Software%20Development/Kathryn%20Hodge.md)

## Resources

- Exercise files available

## Skills Covered

- Debugging Code
- C#

## Path Context

### In [C- Foundations- From Basics to Building Blocks](../../Paths/Software%20Development/Learning%20Paths/C-%20Foundations-%20From%20Basics%20to%20Building%20Blocks.md)
← [C- Essential Training 2- Generics, Collections, and LINQ](C-%20Essential%20Training%202-%20Generics%2C%20Collections%2C%20and%20LINQ.md) | **3 of 5** | [C- Refactoring Tips and Tricks](C-%20Refactoring%20Tips%20and%20Tricks.md) →

## Appears In

- [C- Foundations- From Basics to Building Blocks](../../Paths/Software%20Development/Learning%20Paths/C-%20Foundations-%20From%20Basics%20to%20Building%20Blocks.md)

## Related Courses

_Courses sharing skills:_

- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — Debugging Code
- [Learning C-](Learning%20C-.md) — C#
- [Cert Prep- Unity Certified Associate Game Developer Scripting with C-](Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md) — C#
- [Vue.js- Testing and Debugging](../Web%20Development/Vue.js-%20Testing%20and%20Debugging.md) — Debugging Code
- [Nail Your C- Interview](Nail%20Your%20C-%20Interview.md) — C#

---

[↑ Back to top](#)