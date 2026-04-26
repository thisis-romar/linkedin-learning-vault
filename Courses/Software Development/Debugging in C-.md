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
  - '[[C- Foundations- From Basics to Building Blocks]]'
prev_courses:
  - '[[C- Essential Training 2- Generics, Collections, and LINQ]]'
next_courses:
  - '[[C- Refactoring Tips and Tricks]]'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":3,"total":5,"prev":"C- Essential Training 2- Generics, Collections, and LINQ","next":"C- Refactoring Tips and Tricks"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/debugging-code
  - skill/c
status: not-started
created: 2026-04-21
---

![Debugging in C#](https://media.licdn.com/dms/image/v2/D560DAQGLU3_QpBMa2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720820408514?e=2147483647&amp;v=beta&amp;t=hM2XivdDy9bXS90mywn0F6sshixgCLcnLmSkVJ7bt0w)

# Debugging in C#

> Writing programs in C# is one thing. Writing programs that work is another. Discover how debugging your applications can make them more accurate, efficient, and reliable. Learn exactly what it means to debug your programs, and how tools like Visual Studio Code—the most popular IDE for C# programmers—can help you identify and solve errors in your code. Instructor Kathryn Hodge reviews the basic deb

> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp) | 1h 26m | Beginner | 21K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available

## Skills Covered

- Debugging Code
- C#

## Table of Contents

### Introduction

#### Debugging in C#
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=0)** - [Kathryn] Visual Studio code is the most commonly used IDE among C# developers.
>
> **[0:06](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=6)** I'm going to show you how to approach finding and solving errors in your programs, as well as how to decode common error messages.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=15)** So if you're tired of facing those confusing errors in your code, and not sure where to start to fix them, I'm here to help.
>
> **[0:23](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=23)** Hi, I'm Kathryn Hodge, and in this LinkedIn Learning course, I'll walk through examples where we use the debugging tools available in Visual Studio code.
>
> **[0:33](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=33)** Ultimately you'll learn how to proactively avoid common mistakes and bugs through defensive programming, resulting in more secure and reliable programs.
>
> **[0:42](https://www.linkedin.com/learning/debugging-in-c-sharp/debugging-in-c-sharp?u=76281980&t=42)** Let's get started debugging in C#.

> [!info]- Semantic Content
>
> **Tools:** visual studio (2)
> **Code Keywords:** let (1)
> **Env Vars:** ide (1)
> **Warnings:** common error (1)
> **Speakers:** - [kathryn] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=0)** - [Presenter] Before taking this course, you should know a few things.
>
> **[0:04](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=4)** First, you should know the basics of the C# language.
>
> **[0:07](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=7)** In this course we'll be looking at C# code and improving it, so understanding C# is essential.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=15)** We'll also be using the Visual Studio Code IDE in this course, which is a very popular software for writing C# code.
>
> **[0:24](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=24)** If you don't have it installed, or have never used this IDE before, don't worry.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=29)** All you need to do is download Visual Studio Code, and then download the .net CLI tools.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=36)** Alright, now you're set up and ready to go.
>
> **[0:39](https://www.linkedin.com/learning/debugging-in-c-sharp/what-you-should-know?u=76281980&t=39)** Let's begin.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), cli (1)
> **Tools:** visual studio (2)
> **Code Keywords:** let (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### How to use CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes interactive code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solutions to the challenge.
>
> **[0:17](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=17)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:25](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=25)** We recommend using a desktop browser for the best experience, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=33)** The code challenge has four main areas: Instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used.
>
> **[0:45](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=45)** You can use these drag handles to allocate space as you'd like.
>
> **[0:50](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=50)** Let's complete this coding challenge.
>
> **[0:53](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=53)** There are comments in the starting code showing you where to put your solution.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=58)** (keyboard clacking) When you click the Test my code button, you'll see a message indicating whether your code returned a correct results.
>
> **[1:09](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=69)** Let's change the code to something that fails.
>
> **[1:17](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=77)** In the output, we get a failure message.
>
> **[1:20](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=80)** Now, if you're stuck, there are ways you can ask for help.
>
> **[1:24](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=84)** The ShowExpectedResult and ShowHints variables determine whether you see the expected results and any hints.
>
> **[1:32](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=92)** Let's change these to true.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=97)** We'll run it again.
>
> **[1:41](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=101)** And we can see the expected results and a hint in the console.
>
> **[1:45](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=105)** The code editor on the lower right shows how your solution is used.
>
> **[1:50](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=110)** You can change this code to experiment with different test cases.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=115)** Let's make the largest number 21.
>
> **[1:59](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=119)** If we run it again, the new expected result is 21, because that's the largest item in the array.
>
> **[2:08](https://www.linkedin.com/learning/debugging-in-c-sharp/how-to-use-coderpad?u=76281980&t=128)** When you finished each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Basics of Debugging

#### What is debugging?
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=1)** - [Instructor] As programmers we write lots of code, but since we aren't perfect sometimes we make mistakes and have errors in our code.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=9)** These errors can cause our code to give the wrong output, or crash our program entirely.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=15)** Debugging involves locating and correcting code errors in a computer program.
>
> **[0:20](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=20)** It is part of the software testing process and is an integral part of the entire software development lifecycle.
>
> **[0:27](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=27)** We often call these errors bugs.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=29)** And the term bug comes from computer scientist pioneer Grace Hopper who coined the term bug when she found a moth causing an error in an early electromechanical computer.
>
> **[0:40](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=40)** In debugging we must find these bugs or errors in order to correct our code and create a working program.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=47)** So what kind of bugs can we have?
>
> **[0:50](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=50)** Well just like there are many types of bugs in real life, in computing there are also different types of bugs.
>
> **[0:57](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=57)** First, we have a syntax bug, or syntax error.
>
> **[1:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=61)** A syntax bug is an error often caused by a left out semi-colon or a misspelled variable name.
>
> **[1:07](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=67)** It means you entered a command or piece of code that the computer doesn't understand because it's not written in the proper format.
>
> **[1:15](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=75)** Syntax errors often cause your program to fail before it's even executed because the computer has to understand your code in order to run it.
>
> **[1:23](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=83)** A logical bug is an error where the program is able to run and the computer can carry out its instructions but it doesn't act as the user expects.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=93)** It provides some output that the programmer did not intend.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=97)** This means you might have added instead of subtracted numbers, or maybe used a less than sign instead of a greater than sign.
>
> **[1:44](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=104)** In debugging we often look for parts of the program that aren't working correctly, find its respective code and fix it.
>
> **[1:52](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-debugging?u=76281980&t=112)** To debug or find these errors we usually use tools called debuggers, which we'll be breaking down throughout this course, specifically for C#.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Definitions:** is an  (3)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### What is a print statement?
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=1)** - [Kathryn] A print statement allows you to send output to the standard output unit of your computer, usually your console or terminal.
>
> **[0:08](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=8)** You've probably used print statements all along, but here we'll put them into context with debugging.
>
> **[0:14](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=14)** Here we have Visual Studio Code open, and in C#, a print statement looks like this.
>
> **[0:20](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=20)** We have Console.WriteLine, with whatever we want to print out in the parentheses.
>
> **[0:26](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=26)** We also add using System at the top in order to get access to the console so we can print data to it.
>
> **[0:34](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=34)** Let's go ahead and run this code, and this is just a hello world application.
>
> **[0:39](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=39)** You've probably done this dozens of times, but with debugging it can get a little bit more complicated.
>
> **[0:45](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=45)** With this statement, we're just printing out a hardcoded value, which isn't super useful.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=51)** In debugging, sometimes we'll want to print the value of a given variable to understand more fully how our program is working.
>
> **[0:59](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=59)** So let's go ahead and add an int a, which we'll give the value 10, and int b, which we'll give the value 20.
>
> **[1:07](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=67)** So we have these two variables, and then we'll add them, and put them in a variable called c, by going a plus b.
>
> **[1:17](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=77)** Once we have that value c, we'll go ahead and print it to the console, with Console.WriteLine(c).
>
> **[1:24](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=84)** Then we'll run our code, and we should see 30 in the console.
>
> **[1:29](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=89)** If we go ahead and change one of these values to say a is going to be 30 now, and b is going to be 50, in this case we'll actually get 80 in the console.
>
> **[1:40](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=100)** So we'll go ahead and click the arrow up here to run it again.
>
> **[1:44](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=104)** And here we get 80, and then hello world, our hardcoded value.
>
> **[1:48](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-print-statement?u=76281980&t=108)** This is a fairly trivial example to see what our program is actually doing, but as our programs get more complicated, understanding the values of our variables becomes more and more important.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), super (1)
> **Tools:** terminal (1), visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kathryn] (1)

#### What is a breakpoint?
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=1)** - [Speaker] A breakpoint is an intentional stopping point or pause put into a program for debugging purposes.
>
> **[0:07](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=7)** A breakpoint allows us to temporarily halt a program in execution in order to inspect the internal state of the application at that point.
>
> **[0:18](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=18)** Jumping back into Visual Studio Code we can add a breakpoint to our program.
>
> **[0:23](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=23)** To add a breakpoint we just hover to the left of the line number and click.
>
> **[0:28](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=28)** This adds a breakpoint to this specific line and the program will stop its execution before executing this line.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=36)** Let's add breakpoints to a few areas we think might be problematic or really determine the output of this program.
>
> **[0:45](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=45)** So here, line eight, this operation is key to tripling a number.
>
> **[0:50](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=50)** So let's go ahead and add a breakpoint to the line after it.
>
> **[0:53](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=53)** So line eight will execute and then the program will stop its execution.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=58)** We can also add a breakpoint to 15, here.
>
> **[1:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=61)** So right before we print things out to the consol we'll go ahead and stop the program and make sure everything looks good.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=68)** Now why would we ever want to stop the execution of a program?
>
> **[1:13](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=73)** Why would we ever add a breakpoint?
>
> **[1:15](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=75)** When we stop the execution of a program we can take a look at the value of each variable at that given point in the program.
>
> **[1:23](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=83)** Let's see this in action.
>
> **[1:25](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=85)** So we'll hit the play button up here and our program is actually going to stop its execution on line 15.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=93)** This is because our program starts running with the main function.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=97)** So we go ahead and execute line 14 then we hit line 15.
>
> **[1:42](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=102)** On the left, here, we can double check everything looks as it should.
>
> **[1:46](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=106)** Our original number has the value three.
>
> **[1:48](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=108)** Here, we assign it the value three.
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=111)** That checks out.
>
> **[1:52](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=112)** We'll go ahead and continue the program and here, we hit line nine.
>
> **[1:57](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=117)** So this is coordinating with our triple number variable.
>
> **[2:00](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=120)** We see triple number up here, but it doesn't triple number three.
>
> **[2:04](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=124)** Here we have six.
>
> **[2:06](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=126)** Three tripled, or three times three should be nine not six.
>
> **[2:10](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=130)** So let's take a deeper look at our program and here we see num plus three.
>
> **[2:16](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=136)** This should really be num times three because we want it to add num three times or multiple num by three.
>
> **[2:24](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=144)** We'll go ahead and continue executing the program and we'll still get that wrong output in our consol.
>
> **[2:29](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=149)** But if we run the program again, everything should be updated.
>
> **[2:33](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=153)** So here we go.
>
> **[2:34](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=154)** We run.
>
> **[2:36](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=156)** We still hit this breakpoint.
>
> **[2:37](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=157)** We'll go ahead and remove that breakpoint just by clicking on it and continue execution with this continue button up here.
>
> **[2:44](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=164)** We get to our returned tripled number line.
>
> **[2:47](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=167)** In here.
>
> **[2:48](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=168)** In this window, we see tripled number has the value nine.
>
> **[2:51](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=171)** And so this is correct.
>
> **[2:53](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=173)** Num plus num plus num, or num times three does equal nine.
>
> **[2:58](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=178)** We'll continue its execution and we get the correct answer in the consol.
>
> **[3:03](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=183)** Another way we could have done this is let's add the mistake back to our program and run the code again.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=190)** And it'll stop at this breakpoint again.
>
> **[3:12](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=192)** We should get six as the value for a tripled number, we see six.
>
> **[3:17](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=197)** Notice how this is different from our print statement because we are actually halting the execution of the program to see the value of the variable at a given point instead of running the program fully, and seeing the value after execution has been completed.
>
> **[3:33](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=213)** There are also other types of breakpoints.
>
> **[3:35](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=215)** We can go ahead and remove this breakpoint by clicking on it and we can add another type of breakpoint.
>
> **[3:41](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=221)** Here we have conditional breakpoints and a logpoint.
>
> **[3:45](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=225)** Let's go ahead and add a conditional breakpoint.
>
> **[3:47](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=227)** And what this allows us to do is it allows us to actually stop the program if a given expression is true.
>
> **[3:55](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=235)** Another way to do num times three is num plus num plus num.
>
> **[4:01](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=241)** And really what we want to do is if for some reason the tripled number does not equal num plus num plus num then something's wrong with our program.
>
> **[4:11](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=251)** This is another way to add a mini test to your program.
>
> **[4:16](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=256)** We want to stop the programs execution if num plus num plus num does not equal triple num because num times three is the value we're giving to triple num.
>
> **[4:26](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=266)** So let's hit enter, and this will add our conditional breakpoint.
>
> **[4:30](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=270)** We'll execute this program again.
>
> **[4:32](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=272)** And in this case, our breakpoint won't be executed.
>
> **[4:35](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=275)** We'll just continue the program as we always would have with no breakpoints.
>
> **[4:40](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=280)** This is because the expression evaluates defaults because num times three does equal num plus num plus num.
>
> **[4:48](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=288)** We can force this breakpoint to run if we go plus three instead of times three.
>
> **[4:52](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=292)** So adding that error back in.
>
> **[4:54](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=294)** We'll go ahead and run this.
>
> **[4:59](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=299)** Now we hit our breakpoint because tripleNumber does not equal num plus num plus num.
>
> **[5:04](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=304)** So that means our conditional is true, allowing this breakpoint to be hit.
>
> **[5:11](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=311)** We'll go ahead and stop the execution and change num plus three back to its correct value which should be num times three.
>
> **[5:21](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=321)** We also have that logpoint, here.
>
> **[5:24](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=324)** Right now, this only works for node JS in Javascript but it might be coming to C sharp soon.
>
> **[5:31](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=331)** Sometimes these breakpoints can get annoying if you add them over time.
>
> **[5:35](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=335)** So to delete all of them at the same time, we can just go to debug, disable or remove all breakpoints.
>
> **[5:42](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=342)** In this case, we'll just remove them.
>
> **[5:44](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=344)** And they'll all go away.
>
> **[5:47](https://www.linkedin.com/learning/debugging-in-c-sharp/what-is-a-breakpoint?u=76281980&t=347)** In debugging, seeing the values of your variables in the midst of program execution can be very useful in understanding the flow of your program and how your program works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (6), case, (2), function (1), this. (1)
> **CLI Commands:** make (1), node (1)
> **Code Identifiers:** triplenumber (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [speaker] (1)

#### Inspecting values of variables
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=1)** - [Instructor] Let's take a look at the different ways we can inspect our variables with break points.
>
> **[0:06](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=6)** Here we have a program that should find the max of two numbers.
>
> **[0:10](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=10)** Of course, it's not working perfectly so we'll need to inspect the program as it's executing, to find the error and come up with a solution.
>
> **[0:18](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=18)** Let's go ahead and run this program and see what we get as output.
>
> **[0:24](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=24)** Here we get three.
>
> **[0:26](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=26)** The input, to our find max function, is three and eight.
>
> **[0:30](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=30)** This means we're returning the minimum instead of the maximum.
>
> **[0:33](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=33)** Let's put some break points in here and try to find the error.
>
> **[0:37](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=37)** On line 10, we can add a break point right after we calculate what the max is.
>
> **[0:42](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=42)** Let's go ahead and run the program again, and we'll see it stop at that point in execution, and we should be able to see the values of these local variables.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=51)** And so we see three, eight, but our max is three.
>
> **[0:55](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=55)** Let's take a closer look at this line nine here.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=58)** And we see if a is greater than b, then we want to return b.
>
> **[1:03](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=63)** So that means if a is greater than b, we return the lesser value, which is b.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=68)** If a is not greater than b, then we return a.
>
> **[1:12](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=72)** So again, returning that lesser value.
>
> **[1:15](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=75)** Now this function should return the maximum.
>
> **[1:17](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=77)** So we need to change this greater than sign to a less than sign.
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=81)** So if a is less than b, then we return b, which is the greater of the two numbers.
>
> **[1:27](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=87)** Otherwise, we return a.
>
> **[1:29](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=89)** Let's rerun this program and see if this fixed our problem.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=93)** We'll remove this break point here.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=97)** And in our console we get eight, which is the maximum of the two numbers, the maximum of three and eight, our inputs.
>
> **[1:44](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=104)** Let's add that break point again and take a deeper look at some of these side windows.
>
> **[1:49](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=109)** So if we run the program again, you saw our local variables end up in this Variables window here.
>
> **[1:56](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=116)** This is, unsurprisingly, called the Variables window and we saw it in the last video but it basically populates with the local variables in the given scope, along with their values.
>
> **[2:08](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=128)** We have an int a, which has three, an int b, with the value eight, and then our max, with the value eight.
>
> **[2:15](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=135)** Another cool thing we can do here is we can actually hover over the various variables and see what their values are.
>
> **[2:22](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=142)** So if we hover over max, we get eight, and the other values, we get their values as well.
>
> **[2:28](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=148)** Another thing I can do is actually shift the scope that we're in by clicking on the different layers of the Call Stack.
>
> **[2:35](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=155)** So the other window we have over here is the Call Stack.
>
> **[2:39](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=159)** And this lets us switch between whether we're in this internal function here or whether we're in the external function main, which is calling our find max function.
>
> **[2:49](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=169)** Notice in the main method, a and b don't exist.
>
> **[2:53](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=173)** But we do have a variable max, with the value zero, since it isn't set yet, and our args variable.
>
> **[3:00](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=180)** We also have something called a Watch window.
>
> **[3:03](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=183)** And this allows us to watch certain variables and see what their values are, always, no matter what scope we're in.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=190)** So if we put a here, we can see a does not exist.
>
> **[3:16](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=196)** And that's because it does not exist in this current scope.
>
> **[3:19](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=199)** But when I go up to the find max scope, and we see that layer of the Call Stack, then we see a has the value three.
>
> **[3:29](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=209)** Lastly, we have the Debug Console, which is our window down here.
>
> **[3:33](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=213)** So we scroll to the bottom and we see this little input area.
>
> **[3:37](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=217)** We can actually input the name of a variable and see it's value.
>
> **[3:42](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=222)** The Debug Console acts as a read print evaluation loop.
>
> **[3:47](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=227)** This allows us, not only to see the values of our variables, but to compute new calculations on demand.
>
> **[3:54](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=234)** So I could write a here, get the value of a, and this is at the point of execution wherever my break point is.
>
> **[4:00](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=240)** And I could put b.
>
> **[4:02](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=242)** I could do a plus b, which has nothing to do with our function but we can still calculate it anyway.
>
> **[4:08](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=248)** We can also call the find max function, the function that we're in, with a and b, and see what the output is.
>
> **[4:15](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=255)** In this case, eight.
>
> **[4:17](https://www.linkedin.com/learning/debugging-in-c-sharp/inspecting-values-of-variables?u=76281980&t=257)** These break points and inspector windows can be very useful when you're trying to debug your program because it allows you to examine the internal state of your program, in stages.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (7), switch (1), case, (1)
> **CLI Commands:** find (7)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Execution in debug mode
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=1)** - [Instructor] When debugging code, we often use breakpoints to stop the program's execution and inspect the internal state of the given variables.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=9)** We did this before, but sometimes, we want to add a little more control over how and when our program is executing.
>
> **[0:17](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=17)** Debug mode in Visual Studio Code gives us this control with a few buttons.
>
> **[0:23](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=23)** And we've already one of these buttons, the Continue button.
>
> **[0:27](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=27)** Let's add a breakpoint here.
>
> **[0:28](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=28)** We'll add one to Console's at WriteLine(sum) and then another to line 24.
>
> **[0:35](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=35)** And you'll notice there are some buttons that appear at the top here.
>
> **[0:38](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=38)** The Continue button is the button we've used before.
>
> **[0:41](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=41)** It allows us to continue the program's execution after hitting a breakpoint.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=47)** If we click this button, we jump to the next breakpoint.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=51)** It's important to remember that after hitting the Continue button, the program will only stop again if it runs into another breakpoint.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=58)** This means if I hit the Continue button again, the program continues executing until it's finished and we see the output at the bottom.
>
> **[1:07](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=67)** What else can we do in debug mode?
>
> **[1:09](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=69)** Let's add another breakpoint to line 19 and run the program again.
>
> **[1:15](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=75)** Another button we have is the Step Into button and that's this button right here.
>
> **[1:20](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=80)** This allows us to step into a function.
>
> **[1:23](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=83)** That might seem confusing, but if we click on it, we actually step into the summation function.
>
> **[1:29](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=89)** Line 19 has a call to the summation function, so when we call step into, we go ahead and step into the execution of that function with its given arguments, numbers, and Numbers.Length - 1.
>
> **[1:43](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=103)** With the Step Into button, we can see what's going on behind the scenes with a given line of code.
>
> **[1:50](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=110)** For now, let's stop this execution and try running it again.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=115)** If we run the code again, we can take a look at the next button, which is the Step Out button.
>
> **[2:02](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=122)** Let's say, we step into the summation function, we're inspecting things in here, we add breakpoints in here, we continue to different areas, and now, we're getting a little lost in all of the details of the summation function.
>
> **[2:15](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=135)** And we want to go back to our broader scope of the main function.
>
> **[2:19](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=139)** We can use the Step Out button to do just that.
>
> **[2:24](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=144)** This button allows us to step out of the current function, back into the larger scope of where the function is being called.
>
> **[2:33](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=153)** This is great for when you might be getting lost in the detailed implementation, and need to step back to take a more encompassing view of the program.
>
> **[2:41](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=161)** The last button we'll look at is the Step Over button, and the Step Over button allows us to step over the current line and execute the next line of code.
>
> **[2:51](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=171)** Here, we're back on line 19.
>
> **[2:54](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=174)** We can step over this line by using the Step Over button, and now, we're on line 20.
>
> **[2:59](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=179)** We can step over again to go to line 22, to line 23, and so forth through all the lines of the program.
>
> **[3:07](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=187)** However, it's important to remember that the Step Over button is different from the Continue button because we only execute the next line, instead of executing until the next breakpoint, or the completion of the program.
>
> **[3:21](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=201)** Now, this isn't the safest program in the world.
>
> **[3:24](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=204)** In fact, it's pretty prone to errors since we give a value to the counter-parameter in the summation method, instead of calculating it ourselves inside of the method.
>
> **[3:34](https://www.linkedin.com/learning/debugging-in-c-sharp/execution-in-debug-mode?u=76281980&t=214)** Later in this course, we'll dive deeper into this topic, along with how to make our programs safer.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), continue (7), let (4)
> **Cross-References:** go back to (1), later in (1)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### The debugging process
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=1)** - [Instructor] In debugging, we usually have a strategy for tackling and fixing bugs.
>
> **[0:05](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=5)** We don't just go into the code and start changing a bunch of stuff.
>
> **[0:10](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=10)** The hardest bugs to fix are the ones you can't find, because if you can't find it and understand it, you can't figure out how to fix it.
>
> **[0:18](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=18)** This means the first step in debugging is often reproducing the problem.
>
> **[0:23](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=23)** Once you can reproduce the problem, you have access to the problem and can dive in for more information.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=29)** Next, if you are the person that has found a bug, try to describe the bug in as much detail as you can.
>
> **[0:37](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=37)** Explain what the given input was, what the output, and what the output should've been.
>
> **[0:43](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=43)** Sometimes, you may find the bug, but it's in a different part of the program, and someone else has to fix it.
>
> **[0:49](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=49)** This means detailing the error as much as possible is extremely important.
>
> **[0:55](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=55)** If you are the person debugging the program, then you'll need access to the source code.
>
> **[1:00](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=60)** The next step is to create a snapshot of where the bug appears in the program.
>
> **[1:05](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=65)** You'll want to get all the variable values and anything the program is keeping track of at that given time.
>
> **[1:12](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=72)** Getting a snapshot of the program means getting hands on the internal state of the program.
>
> **[1:18](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=78)** Next, you'll want to analyze the program at this specific point in execution.
>
> **[1:24](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=84)** Looking at the values is everything as expected, using breakpoints in debug mode, can you find anything that looks off or incorrect?
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=93)** Is something not working as it should?
>
> **[1:35](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=95)** This is where you try to find the cause of the bug.
>
> **[1:38](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=98)** Once you've found the cause of the bug, it's time to fix it.
>
> **[1:42](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=102)** You'll want to make sure that you not only fix the bug, but you prevent any new bugs from occurring in this portion of the program.
>
> **[1:50](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=110)** You'll want to check that your solution doesn't have any unexpected side effects, which could potentially cause more errors.
>
> **[1:58](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=118)** It's one thing to understand how to use breakpoints and manipulate your program's execution with debug mode, but it's another to have a clear strategy for your debugging process.
>
> **[2:09](https://www.linkedin.com/learning/debugging-in-c-sharp/the-debugging-process?u=76281980&t=129)** Both are important.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Find the bug in string truncation
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=0)** - [Instructor] Let's find the bug in this truncate function.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=9)** In the code, we access the string and run the substring method on it.
>
> **[0:14](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=14)** The substring we create runs from index zero to what this Math.Max expression returns.
>
> **[0:22](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=22)** It will return either the length of the string or the maxLength value given in the input.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=29)** Let's see what the code outputs when we run it as is.
>
> **[0:34](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=34)** We'll change the ShowExpectedResult variable to true so we can see what our code is supposed to return.
>
> **[0:41](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=41)** Let's run it.
>
> **[0:44](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=44)** With this execution, the input string was, This is a sample string, and the maxLength was three.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=51)** This means the string returned should only be Thi, or a string with the characters from index zero to index two in order.
>
> **[1:01](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=61)** Thi is what appears in the expected results, but our code returned the full input string.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=68)** It didn't truncate it.
>
> **[1:10](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=70)** Let's add some print statements so we can see how our code was evaluated given our input values.
>
> **[1:17](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=77)** We'll print out s.Length in the Math.Max expression.
>
> **[1:24](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=84)** (keyboard clattering)
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=111)** Let's run it again.
>
> **[1:56](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=116)** In this case, it looks like s.Length is 23, because there are 23 characters in the input string.
>
> **[2:03](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=123)** The maxLength is three.
>
> **[2:05](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=125)** This means that 23 is returned from Math.Max.
>
> **[2:10](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=130)** That's what we see in the console.
>
> **[2:14](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=134)** When this is used in the substring expression, we return the full string or all the characters from zero to 22.
>
> **[2:23](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=143)** What we really need is a substring from index zero to the maxLength.
>
> **[2:27](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=147)** That's how we'll truncate the string to just the maxLength.
>
> **[2:31](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=151)** Let's modify the code.
>
> **[2:38](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=158)** And we'll run it.
>
> **[2:42](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=162)** Our code works as expected with this input.
>
> **[2:45](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=165)** Let's try another input.
>
> **[2:48](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=168)** Let's make maxLength really high, like 100.
>
> **[2:55](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=175)** Yikes, an error!
>
> **[2:57](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=177)** 100 is out of bounds for the string, because the string only has 23 characters.
>
> **[3:03](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=183)** If maxLength is too high, we'll just want to return the full length of the string.
>
> **[3:09](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=189)** Let's reconsider our implementation.
>
> **[3:12](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=192)** If maxLength is low, this implementation works, but if it's greater than the length of the string, we want the second input to be the substring of s.Length.
>
> **[3:23](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=203)** We can achieve this by using the Min method from Math.
>
> **[3:30](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=210)** (keyboard clattering) If the maxLength is greater than the length of the string, the Min expression will evaluate to s.Length, and will no longer get an error.
>
> **[3:46](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=226)** Let's run it.
>
> **[3:51](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=231)** It works as expected.
>
> **[3:53](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=233)** Let's try again with our previous input where maxLength was three.
>
> **[4:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=240)** And the output is correct.
>
> **[4:02](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-the-bug-in-string-truncation?u=76281980&t=242)** It's important to test your code with many different scenarios to ensure it works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1), return. (1), case, (1)
> **Code Identifiers:** maxlength (10)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. More Debugging Tips and Tricks

#### Covering edge cases
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=1)** - Just because you're program works for one input, doesn't mean it works for all inputs.
>
> **[0:06](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=6)** That's why developers don't just test the most common type of input, but all types of input.
>
> **[0:12](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=12)** Covering all possible edge cases.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=15)** Let's take a look at this example.
>
> **[0:17](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=17)** Here, we have some code that returns true or false depending on if the rectangle is a square.
>
> **[0:24](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=24)** Here, we're representing the length and width of the rectangle, with the tuple.
>
> **[0:28](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=28)** Where the length and width are both ints.
>
> **[0:32](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=32)** If we run this code right now, everything works as expected.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=36)** We have three and three, so our width is three, our length is three.
>
> **[0:40](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=40)** Its true, if we have three and five, so either the width is five, the length is five, the ordering doesn't really matter here.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=47)** But, if they're not equal, then we get false.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=51)** You might be thinking that ah, this code is great, it's working.
>
> **[0:55](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=55)** But it's not.
>
> **[0:56](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=56)** What happens if I try to put in zero and zero?
>
> **[1:01](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=61)** In this case, the side or the length or the width, isn't really valid.
>
> **[1:05](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=65)** A rectangle with a zero width, and a zero length, that's not a real triangle, its an invalid type of input.
>
> **[1:13](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=73)** But lets run the program, and see what happens.
>
> **[1:16](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=76)** Here we still get true, even though the rectangle itself is invalid.
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=81)** We still return the fact that it is a square, its another type of shape as well.
>
> **[1:26](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=86)** This is not good.
>
> **[1:28](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=88)** What if we have an item in here that's like negative six, and negative six?
>
> **[1:34](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=94)** So here this is some really strange input, and it's really a rectangle that is completely invalid, its length and width are invalid, it should not be a square, it should not be a rectangle.
>
> **[1:45](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=105)** It shouldn't classify as any shape, because its length and width are invalid.
>
> **[1:50](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=110)** But let's just run the program again, and we still get true.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=115)** This means we need to edit our code a bit, to handle these extra cases.
>
> **[2:00](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=120)** So we'll add some space at the top here, and check if either number in the tuple, is less than, or equal to zero.
>
> **[2:07](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=127)** So we'll say if the first item is less than or equal to zero or, the second item is less than or equal to zero, then there's a problem this is not a valid shape, it's not even a valid rectangle it's not a valid anything.
>
> **[2:27](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=147)** Otherwise, we have a valid length, we have a valid width.
>
> **[2:31](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=151)** So our common computation of checking if the items are equal, will work and will return the appropriate value.
>
> **[2:39](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=159)** In the case whether the length or the width is less than or equal to zero.
>
> **[2:43](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=163)** Then we might want to error and say hey, this is not a shape.
>
> **[2:48](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=168)** And we can this by simply writing something to the console, we can say error not a shape.
>
> **[2:55](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=175)** Now, we do have to return something from this function, and in this case we'll just return false, we'll say if it's not a valid shape, we'll log that, print it to the console, but we'll also handle the error, and just return false.
>
> **[3:09](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=189)** Running this code again, we should get the appropriate values in our console.
>
> **[3:14](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=194)** So we'll get the error, not a shape, this is false, this is false, it's looking good.
>
> **[3:20](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=200)** So what is an edge case?
>
> **[3:22](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=202)** It's an extreme of a parameter.
>
> **[3:24](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=204)** It's a test case whose input is near a boundary where the program changes from one behavior, to another.
>
> **[3:31](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=211)** In this example, if either side of the rectangle, either the length or the width is less than or equal to zero, then it's invalid, and it's not a square.
>
> **[3:40](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=220)** This means we don't do any calculations and we simply print out that it's invalid, and return false.
>
> **[3:46](https://www.linkedin.com/learning/debugging-in-c-sharp/covering-edge-cases?u=76281980&t=226)** Its important that your functions, and programs have clear requirements, so you can decide what edge cases to test for, and make your programs less prone to errors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), function (1), for, (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - just (1)

#### Defensive programming
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=0)** - [Instructor] Defensive programming is a way of programming, where the application should behave in a consistent and predictable manner, even in the case of unexpected conditions.
>
> **[0:12](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=12)** It's a way of programming where you test for every possible edge case, not just the most common cases or the cases you'd most expect.
>
> **[0:21](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=21)** In defensive programming, we want to make sure our functions have clear requirements, as well as clear input and output types.
>
> **[0:30](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=30)** In the function implementation, we will also want to make sure our input satisfies certain criteria.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=36)** It's a way of making sure the computation will make sense.
>
> **[0:40](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=40)** Think of it this way, if I ask the question do you write with an apple or an orange?
>
> **[0:46](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=46)** Does this question make sense at all?
>
> **[0:49](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=49)** No, it does not.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=51)** This is what defensive programming prevents.
>
> **[0:54](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=54)** Let's take a look at an example in code.
>
> **[0:57](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=57)** In this program we have the enum Shape that can have the value Error, Rectangle or Square.
>
> **[1:02](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=62)** We also have a testShape function and depending on what the shape is, we write to the console rect or square.
>
> **[1:11](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=71)** In the Main function we created a new shape and then use the testShape method on it.
>
> **[1:17](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=77)** Looking at the testShape function, everything looks good, right?
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=81)** We check for the case of rectangle, we check for the case of square, and we print out the shape accordingly.
>
> **[1:27](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=87)** However, in the Main method, we just create a new shape, we don't give it the value rectangle or the value square, so by default it gets this error value.
>
> **[1:38](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=98)** This means when we run this program, we don't get anything in our console because it doesn't hit the case of rectangle or the case of square.
>
> **[1:49](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=109)** Having this in our code is not good.
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=111)** It's like an invalid question.
>
> **[1:54](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=114)** How can I test the shape if I haven't even set the shape of the object?
>
> **[1:58](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=118)** Or rather, it's automatically been set to this error shape.
>
> **[2:03](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=123)** We can solve this by adding a default case to our switch statement in testShape.
>
> **[2:09](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=129)** In this default case, we can also raise an exception or error, since it will only be run if the program enters this error state.
>
> **[2:18](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=138)** So we can write throw new Exception.
>
> **[2:22](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=142)** And for the message we can just say Shape not set.
>
> **[2:27](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=147)** So it will throw an error in our program if the shape is set to error.
>
> **[2:33](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=153)** We also add this message here, Shape not set, so that when the program crashes we'll have more details on why it crashed, instead of some generic error message.
>
> **[2:43](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=163)** So let's try running the program and see what happens.
>
> **[2:48](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=168)** And here we get an error, it's System.Exception.
>
> **[2:52](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=172)** And the message is a little bit more descriptive, Shape not set.
>
> **[2:56](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=176)** So, why use defensive programming?
>
> **[2:58](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=178)** Defensive programming prevents applications from going into and continuing within the wrong state.
>
> **[3:04](https://www.linkedin.com/learning/debugging-in-c-sharp/defensive-programming?u=76281980&t=184)** This can be detrimental in the space of databases, because you do not want bugs in your data, or incorrect saved data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), case, (2), let (2), throw (2), enum (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** testshape (4)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Side effects
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=1)** - [Narrator] Sometimes a function you create can have unintended side effects.
>
> **[0:05](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=5)** Certain side effects can make your functions unreliable and can make certain bugs harder to find, so it's important to be aware of them when you have them.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=15)** Not all side effects are bad, you just have to know about them.
>
> **[0:20](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=20)** We say a function has a side effect when the given function changes something from outside its scope.
>
> **[0:27](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=27)** An example of this might be when a function enables or disables a button.
>
> **[0:32](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=32)** The function effected something that was outside its scope.
>
> **[0:35](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=35)** Another side effect is writing to disc.
>
> **[0:37](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=37)** The disc, outside of the scope of the function, is changed after the function is run.
>
> **[0:43](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=43)** What you really want to avoid is unintended side effects.
>
> **[0:48](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=48)** Let's take a look at some quick programmatic examples.
>
> **[0:52](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=52)** Jumping into visual studio code, we have a program.
>
> **[0:57](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=57)** In this first function, we have a function that has no side effects.
>
> **[1:01](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=61)** It does not change anything outside of its scope.
>
> **[1:05](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=65)** It simply returns the input doubled without changing the value of the input.
>
> **[1:11](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=71)** This next function does have a side effect.
>
> **[1:14](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=74)** In this function, we add a generic last name to a string builder.
>
> **[1:19](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=79)** Notice nothing is returned from the function.
>
> **[1:22](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=82)** Instead we mutate name within the function and it mutates the value for our variable n, which calls this function as well.
>
> **[1:32](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=92)** Let's go ahead and run the code so you can see what's happening.
>
> **[1:38](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=98)** So here we get Sally Smith and so when we modify name here, so n gets the value of name when we modify name by pending Smith, we are also in turn modifying n, which is our variable outside of the scopes.
>
> **[1:54](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=114)** So this is a side effect.
>
> **[1:56](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=116)** Now let's say we didn't want this side effect.
>
> **[1:59](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=119)** Instead of modifying name or n, we wanted to return a new value so that our original value does not change.
>
> **[2:07](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=127)** To remove this side effect, we could change this function so that it takes a string and returns a new string with the proper value, rather than modifying the original string builder.
>
> **[2:19](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=139)** To do this, we can edit line 14 and we'll just say return name plus, and to add a space here, we didn't have a space between the two, but we can add one and we'll add Smith.
>
> **[2:38](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=158)** Of course we're going to get an error, because we need to change some of the signature as well.
>
> **[2:43](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=163)** Instead of void, we're actually going to be returning a string and our input, we're going to change to be a string so that it all matches up and we'll have n just be the string literal of Sally and then we'll change its data type as well.
>
> **[3:01](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=181)** In this case, we won't be modifying n, but we also won't be saving the output from this function either, so we'll want to create a string fullName with equals addGenericLastName and now we have the output from this function saved.
>
> **[3:17](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=197)** And we can actually print it out to the console with console dot WriteLine fullName.
>
> **[3:26](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=206)** If we save this and run it, we'll see the value of n has not changed, even after running this function and we still get that output that we wanted of fullName.
>
> **[3:36](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=216)** There are cases where you'll want this side effect and there are other cases where you'll want to avoid this side effect.
>
> **[3:42](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=222)** It's all up to you as the developer.
>
> **[3:45](https://www.linkedin.com/learning/debugging-in-c-sharp/side-effects?u=76281980&t=225)** Ultimately to prevent unintended side effects, we usually use buffers, variables, or other data structures so we don't have to modify the original piece of data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (3), this, (1), case, (1)
> **Code Identifiers:** fullname (3), addgenericlastname (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### Solution: Discount calculator
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=0)** - [Instructor] Let's fix the bug in the discount calculator.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=9)** In the code, we calculate the discount amount and then subtract it from the original price.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=15)** Let's use a print statement to find out what the discount percentage is once divided by 100.
>
> **[0:21](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=21)** We'll also change the expected result variable to true, so we can see how what we get differs from what we expect.
>
> **[0:41](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=41)** Let's run it.
>
> **[0:42](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=42)** It looks like the discount percentage is resulting in zero when it should result in 0.9.
>
> **[0:52](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=52)** This is likely due to the fact that the discount percentage is an integer, and 100 is an integer.
>
> **[0:59](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=59)** This means that integer division will take place, making the result zero instead of 0.9.
>
> **[1:06](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=66)** Let's add a decimal to the 100 so that decimal division takes place.
>
> **[1:11](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=71)** Let's run the code again.
>
> **[1:16](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=76)** Now the division discount is 0.9 or 90%, and our code returned the correct answer.
>
> **[1:26](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=86)** Let's try with another input.
>
> **[1:29](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=89)** We'll make the discount zero.
>
> **[1:31](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=91)** We'll run it again.
>
> **[1:35](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-discount-calculator?u=76281980&t=95)** With our fix, the algorithm appears to be working as expected.

> [!info]- Semantic Content
>
> **Non-Speech:** (silence) (4), (typing) (2), (upbeat music) (1)
> **Code Keywords:** let (6)
> **Versions:** 0.9 (3)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### 3. Common Errors in C#

#### NullReferenceException
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=1)** - [Instructor] One of the most common errors in C#, as well as in other programming languages, is the null reference exception or the null reference error.
>
> **[0:10](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=10)** This error occurs during the program's execution, when the program tries to operate on an object that doesn't exist.
>
> **[0:19](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=19)** When I say operate, I mean the program tries to access the components of the null object.
>
> **[0:25](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=25)** If the object doesn't exist, then the components of the object also don't exist.
>
> **[0:31](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=31)** Let's take a look at some code.
>
> **[0:33](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=33)** In this program, we have a string x, which would give the value null, and then we try to trim x.
>
> **[0:40](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=40)** Here, since x is null, when we try to trim or operate on this null object, we'll get an error.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=47)** So, let me go ahead and run this and you'll see we'll get this error.
>
> **[0:53](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=53)** This is because we can't trim something that is null.
>
> **[0:56](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=56)** We can't operate on something that doesn't exist.
>
> **[0:59](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=59)** This means that almost any method that we use on this string will error with this null reference error because the string doesn't exist.
>
> **[1:09](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=69)** Let's stop this program and try a different method.
>
> **[1:13](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=73)** If we use index of anything, so let's try a, so try using this method on our null object.
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=81)** We'll run, and we still get this null reference exception error.
>
> **[1:27](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=87)** This is because both of these methods try to operate on the null string, or access components of the null string, and that's what gives us this error.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=97)** Now, let's take a look at a more ambiguous example.
>
> **[1:41](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=101)** Here, we have a person class where each person has a name that is a string.
>
> **[1:47](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=107)** In the main method, we create a people array and allocate space for 10 persons or 10 people.
>
> **[1:54](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=114)** Then, we try to access the first person's name at index zero.
>
> **[1:59](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=119)** Let's run this and see what happens.
>
> **[2:03](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=123)** In this case, we still get this null reference exception error.
>
> **[2:07](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=127)** Why does this error?
>
> **[2:09](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=129)** Well, just because we allocate space for 10 person objects doesn't mean we actually have 10 person objects in the array.
>
> **[2:18](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=138)** When we access people at zero, the object we get back is null, because we never initialized the person at index zero of the people array.
>
> **[2:28](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=148)** This means when we access the main property of this null object, we get at error.
>
> **[2:34](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=154)** So, let's go ahead and take out the name here and stop the program from running, and we'll add a break point so we can actually see what's inside of this person array before we run this print statement so that you can see inside of this person array of people it's all null.
>
> **[2:52](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=172)** So, we have the person at index zero is null, all of these are null values, and so whenever we try to operate on any of these null values, we're going to get that null reference exception error.
>
> **[3:07](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=187)** Let's go ahead and comment this out and try a similar operation but with a different data type.
>
> **[3:14](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=194)** So, we'll comment that out and we'll create and int ray which we'll call numbers, and it will be a new int ray with 10 items in it.
>
> **[3:27](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=207)** Now, let's try this same line, console dot write line numbers at zero, so here we'll access the item at index zero of our numbers array.
>
> **[3:40](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=220)** We'll add a break point here and just see what's inside of this array when we initialize it.
>
> **[3:45](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=225)** So we'll hit that play button.
>
> **[3:48](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=228)** And we'll actually just step over this so we can get to this next line and see that the number array has items in it.
>
> **[3:57](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=237)** So, here we actually initialized each item in this array to be zero.
>
> **[4:03](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=243)** This didn't happen with our person array because person was a custom object, but int is a value type or a primitive type, a basic type, so when we create an array of ints, each item in the array is automatically initialized with zero.
>
> **[4:19](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=259)** Since int is a built-in type, when we create an array of ints, we automatically get these zeros.
>
> **[4:26](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=266)** Let's continue the program, and at the bottom we see zero is at index zero of the numbers array.
>
> **[4:35](https://www.linkedin.com/learning/debugging-in-c-sharp/nullreferenceexception?u=76281980&t=275)** Ultimately, this means that when we deal with custom objects, we have to be more mindful of initialization, manipulating values and customization in order to avoid null reference exception errors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), type, (3), case, (1), type. (1), continue (1)
> **Definitions:** is a  (3), means that (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### IndexOutOfRangeException
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=0)** - [Instructor] Another common error in C# as well as other programming languages is the Index Out of Range Error or the Index Out of Range Exception.
>
> **[0:10](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=10)** This error occurs when the program tries to access an element in a collection using an index that exceeds the collection's boundaries.
>
> **[0:19](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=19)** Typically, the first element in a collection is located at index zero and the last element is at index n minus one, where n is the length or size of the collection.
>
> **[0:31](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=31)** If you attempt to access an element outside of these boundaries, either with a negative index or an index that is larger than the length minus one, you will get an error because you are accessing something that doesn't exist inside of the collection.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=47)** Let's take a look at an example of this in code.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=51)** In this program, we have an array called numbers and we put five items into it.
>
> **[0:56](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=56)** Then we print out the item at index zero, index negative one, and index five.
>
> **[1:03](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=63)** Let's run the program and see what happens.
>
> **[1:06](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=66)** And so the item at index zero is going to be 10 and then we will get an error on line 11 because negative one is outside of the index bounds for this array, so that's why we're getting that IndexOutOfRangeException.
>
> **[1:20](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=80)** And if we come over here in numbers, we see items only exist at index zero, one, two, three, and four.
>
> **[1:28](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=88)** What this means is that the code at line 12 will also err because we are accessing the number at index five and that does not exist in our collection.
>
> **[1:39](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=99)** But just to prove this, we can comment that line out, stop the program, rerun it, and we'll get another error on line 12 here, and that's because five is outside of this collection.
>
> **[1:52](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=112)** Even though there are five items, index five is not an index we can access because our indexing ends at the length of the array minus one.
>
> **[2:03](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=123)** For now, we'll comment this out.
>
> **[2:05](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=125)** And, usually you won't be printing items with a specific index to the console, but you might have a for loop that loops through the contents of the array.
>
> **[2:16](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=136)** So let's stop the program and add a little for loop here.
>
> **[2:21](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=141)** And, let's say you wanted to add up all of the numbers in this numbers array.
>
> **[2:27](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=147)** To start, we use a int sum variable and we'll just give it the value zero, and then we'll use a for loop here and add all of the numbers in this array, so we'll go numbers.Length; i++, so going over the length of the array, we'll add each item that is in the array to the array.
>
> **[2:53](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=173)** So we'll go like that, we'll save, and then at the end, we'll print out our sum to the console, so we'll say Console.WriteLine sum, save it up, and we'll print that.
>
> **[3:07](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=187)** So we're running this code, we're printing out each item to the console and, again, we get this IndexOutOfRangeException.
>
> **[3:15](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=195)** That is not good, and that's because we are trying to print out the item, again, that's at index five.
>
> **[3:22](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=202)** So why is this happening?
>
> **[3:24](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=204)** Well, in our conditional here, we should really have less than numbers.Length because if we continue to iterate when i equals the numbers.Length, we're going to get this IndexOutOfRangeException because the numbers.Length is five but our indexing only goes from zero to the size minus one, which is four.
>
> **[3:47](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=227)** So taking away that equal sign there, we'll run this again and the program should work as expected because i will have the value zero, one, two, three, four, and then when we hit that five, we exit the for loop because the condition is no longer true.
>
> **[4:06](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=246)** Now, to continue to avoid errors, we could actually rework this entire for loop completely.
>
> **[4:13](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=253)** We could write sum equals zero, so resetting our sum, and we could use a foreach loop instead, so we could go foreach int num in numbers.
>
> **[4:28](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=268)** We can go sum equals sum plus num.
>
> **[4:31](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=271)** So here we're saying for each number that's in the array, we're going to have it be in this value num individually and then we're going to add it to our sum.
>
> **[4:40](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=280)** So first, we'll add the number 10 and then 2 and then 38, 19, 5, until each item has been added to the sum and we'll get that same value for our sum as we did before.
>
> **[4:55](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=295)** Another way we could write this is we can add something called using System.Linq at the top.
>
> **[5:03](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=303)** We can actually use a LINQ query to access the different items in this array.
>
> **[5:09](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=309)** We could have an int total be from num in numbers select num, so this is essentially doing the same thing our foreach did, but for each number, we're going to select it and then we're going to sum it up.
>
> **[5:24](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=324)** So we're going to sum up each item that is in this numbers array and we're just calling that number num for each number in this, we'll sum it up altogether, and then we will get that item in our console.
>
> **[5:37](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=337)** We should print it out so we can see what it is.
>
> **[5:41](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=341)** We could also use a breakpoint instead to inspect it if you didn't want to write this print statement.
>
> **[5:49](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=349)** And we also get 74 at the bottom here.
>
> **[5:52](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=352)** Now, depending on the problem, sometimes you might need access to that index number, or in our case, i up here.
>
> **[5:59](https://www.linkedin.com/learning/debugging-in-c-sharp/indexoutofrangeexception?u=76281980&t=359)** Ultimately, when we're working with arrays, we have to be careful about what indices we access or else we'll run into IndexOutOfRangeExceptions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), continue (2), case, (1)
> **Warnings:** common error (1), be careful (1)
> **Env Vars:** linq (1)
> **Speakers:** - [instructor] (1)

#### Logical errors
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=1)** [Instructor] In our code, we can also have other types of logical errors.
>
> **[0:05](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=5)** Logical errors are only caught during program execution.
>
> **[0:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=10)** One type of logical error is dividing by zero.
>
> **[0:13](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=13)** The operation of dividing by zero is an invalid operation and as a result, our program errors and throws an exception.
>
> **[0:22](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=22)** Let's take a look at an example of this in code.
>
> **[0:27](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=27)** In this program, we have an int A that has the value of four and int B that has the value of zero and then, we divide the two values and store the value in results.
>
> **[0:38](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=38)** Let's run this and see what happens.
>
> **[0:44](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=44)** So here, we get a system divide by zero exception.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=47)** We attempted to divide by zero.
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=51)** This operation is invalid and the only way to avoid this error is to not divide by zero.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=58)** But, we can capture this error and handle it in a different way with C sharp's exception handling features.
>
> **[1:05](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=65)** These features help you deal with unexpected or exceptional situations that occur when a program is running.
>
> **[1:13](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=73)** Exception handling uses the try, catch, and finally key words to try actions that may not succeed to handle failures when you decide that it's reasonable to do so and to clean up resources afterward.
>
> **[1:28](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=88)** Let's try adding this to our division code.
>
> **[1:31](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=91)** First, we'll stop the execution here and we're actually going to pull this division operation into a new function.
>
> **[1:39](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=99)** So here, we'll go static double division and we'll have an int A and int B as our parameters and then in the body of the function, we will say if B equals zero, so if we're attempting to divide by zero, then we want to throw an error.
>
> **[2:04](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=124)** So let's say throw new System.DivideByZeroException.
>
> **[2:09](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=129)** The only difference here is that we are throwing the error rather than the program.
>
> **[2:14](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=134)** So we'll say, divide by zero, and we'll say otherwise, will return A divided by B.
>
> **[2:32](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=152)** We'll save this up, and change this to the semicolon, and then back in our main code, we'll call this function.
>
> **[2:42](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=162)** So we'll say double results equals division by A and B.
>
> **[2:48](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=168)** So we'll save this up.
>
> **[2:50](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=170)** Then, we'll run this program again.
>
> **[2:52](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=172)** And this won't solve our error.
>
> **[2:55](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=175)** We'll still get that exception but in this case, we are the ones throwing the exception rather than the program.
>
> **[3:01](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=181)** So, we have a little bit more control there.
>
> **[3:03](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=183)** We'll stop the program and what we really want to do is handle this error so when this error happens, we don't want the program to crash, but we want to handle it and continue execution of the program.
>
> **[3:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=195)** To do this, we'll use the try catch braces that we were talking about earlier.
>
> **[3:20](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=200)** In this case, we'll try to divide by zero.
>
> **[3:24](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=204)** But if we can't do it because our B is zero, then we'll go ahead and catch that error and do something else.
>
> **[3:31](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=211)** So what error are we capturing, the DivideByZeroException.
>
> **[3:36](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=216)** Then we'll have E, and we'll just print this error to the console, and then when we're all done, we'll finally say that we're finished.
>
> **[3:54](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=234)** So either way, whether we get the error or not, this line of code will run.
>
> **[3:59](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=239)** If we get an error, then this line of code will run.
>
> **[4:02](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=242)** If we do not get an error, then this whole try block will run and so will actually print out the results to the console.
>
> **[4:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=250)** So it's either the results or the error that will be printed to the console.
>
> **[4:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=255)** So let's run this again.
>
> **[4:18](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=258)** So here, since we did attempt to divide by zero, we see this error in the console with a bunch of information but we still continued execution and we see this finished block down here.
>
> **[4:30](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=270)** If we try to divide by something else, let's say two, so this is a valid operation, then, we will actually get that results in the console and we'll still get this item FINISHED as well.
>
> **[4:43](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=283)** What's great about this is that our program did not crash regardless of input.
>
> **[4:48](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=288)** It went through the entire execution and handled the error when it occurred.
>
> **[4:53](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=293)** Instead of printing this error to the console, another thing we could do here is we could just divide the number by one.
>
> **[5:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=300)** This is a valid operation that we know will work and we can print that result to the console.
>
> **[5:06](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=306)** So we could say double R.
>
> **[5:13](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=313)** So this is hiding the error entirely from the user.
>
> **[5:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=315)** They don't get any message about it.
>
> **[5:17](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=317)** We just redo the division with one instead of zero.
>
> **[5:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=321)** And in this case, we get two because we should change B back to zero so it will run this code in our catch statement.
>
> **[5:30](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=330)** And we get four instead because four divided by one does equal four.
>
> **[5:35](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=335)** In this case, we're assuming something from the user and that if they input zero, they really meant to input one.
>
> **[5:42](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=342)** This is correcting the error instead of just notifying the user that they did something wrong.
>
> **[5:48](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-errors?u=76281980&t=348)** C sharp's exception handling tools are a great way to capture and handle unexpected logical errors in your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (4), function (3), throw (2), try, (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** finished (1)

#### Using a reference like a value
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=1)** - [Instructor] Programmers are often used to being in control of whether the values they assign to variables are simply values or are references to existing objects.
>
> **[0:11](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=11)** However, in C# the decision is made by the programmer who defined the object, not by the programmer who instantiates the object and assigns it to a variable.
>
> **[0:23](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=23)** This is a common pitfall for those new to C#.
>
> **[0:27](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=27)** Let's take a look at an example.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=29)** If you're not sure whether the object you are using is a value or a reference type, you could run in to some errors.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=36)** Lets take a look at this example.
>
> **[0:38](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=38)** In this program we have a class called Person and each person has a string name which is initialized with the person constructor.
>
> **[0:47](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=47)** Inside of the person class we also have a fictional character struct, where each fictional character has a fictional name and we assign that in the constructor.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=58)** Lets run this code and see what happens.
>
> **[1:03](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=63)** So here we get Rebecca, Rebecca, Harry Potter, Hermione Granger what does all that mean?
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=68)** Well in our main method we have person one which gets the value of a new person with the name Sally, we have person two which is set equal to person one and then we set person two's name to Rebecca and then we print out the two names.
>
> **[1:25](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=85)** Why does this matter, why are we doing this?
>
> **[1:28](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=88)** Well it all has to do with references.
>
> **[1:31](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=91)** When we set person two equal to person one we really set two references to this new person, Sally.
>
> **[1:38](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=98)** This means that when we change person two's name, we also change person one's name.
>
> **[1:43](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=103)** And that's why we get Rebecca for both of these names in the console.
>
> **[1:47](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=107)** The only reason this occurs is because person is a class and it's not a struct.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=115)** In the second piece of code we have fictional characters, we created character one that has the name Harry Potter we assign that equal to our character two, and then we change character two's name with Hermione Granger.
>
> **[2:09](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=129)** But when we print out the fictional names of both of these characters, they still remain different.
>
> **[2:15](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=135)** When we change the fictional name of character two it did not affect character one and the only reason that happens is because fictional character is a struct.
>
> **[2:26](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=146)** It's decided upon definition of this item, of the fictional character, it's a struct and it is not a class.
>
> **[2:34](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=154)** Although the person objects and the fictional character objects were created in the same way, their definitions are different, which is why we see these differences in the console.
>
> **[2:45](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=165)** Person one and person two contain references to the same person object, whereas C1 and C2 each contain their own copy of the fictional character object.
>
> **[2:57](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=177)** In other words person is a reference type and fictional character is a value type.
>
> **[3:04](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=184)** Ultimately, this means the keyword class is used to define a reference type and the keyword struct is used to define a value type in C#.
>
> **[3:14](https://www.linkedin.com/learning/debugging-in-c-sharp/using-a-reference-like-a-value?u=76281980&t=194)** Understanding this difference is key to avoiding unexpected side effects in your programs.

> [!info]- Semantic Content
>
> **Code Keywords:** struct (5), let (1), type, (1), class. (1), type. (1)
> **Definitions:** is a  (6), means that (1), in other words (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### Solution: Library management system
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=0)** - [Instructor] Let's fix this bug in the library class.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=9)** Here we have a class with an availableBooks property.
>
> **[0:12](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=12)** It uses this property to check if a given book is available.
>
> **[0:16](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=16)** Let's run the code and see what happens.
>
> **[0:22](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=22)** It looks like a null pointer exception is thrown.
>
> **[0:25](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=25)** This typically happens if the object we're trying to use a method on is null.
>
> **[0:31](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=31)** Let's look again at the IsAvailable book method.
>
> **[0:35](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=35)** We can add a print statement to see what the value of available books is before we run the contains method on it.
>
> **[0:43](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=43)** (keyboard clacking)
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=58)** Let's run it again.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=68)** It looks like the availableBooks property is null when it should include three books.
>
> **[1:14](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=74)** This means there might be a bug in how available books is initialized.
>
> **[1:19](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=79)** Properties are typically initialized in the constructor.
>
> **[1:24](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=84)** In the library constructor, it looks like we passed some books that we want to set as the list of available books.
>
> **[1:31](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=91)** Unfortunately, we don't actually set the availableBooks property to this list.
>
> **[1:37](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=97)** Let's add that assignment.
>
> **[1:39](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=99)** (keyboard clacking) We should also double check that this book's argument is not null.
>
> **[1:47](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=107)** We'll add an if statement and if the books are null, we'll set availableBooks to an empty list.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=115)** (keyboard clacking)
>
> **[2:07](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=127)** Let's run our code again.
>
> **[2:15](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=135)** It looks like this case works as expected.
>
> **[2:18](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=138)** Let's try a few others. What if the book is not in the list?
>
> **[2:25](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=145)** (keyboard clacking) That appears to work as well.
>
> **[2:34](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=154)** What if the list of available books is empty?
>
> **[2:44](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=164)** This case passes too. Now, what if availableBooks is null?
>
> **[2:55](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=175)** This works too.
>
> **[2:56](https://www.linkedin.com/learning/debugging-in-c-sharp/4250042?u=76281980&t=176)** By testing our code with many different cases, we can be confident it works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (1)
> **Code Identifiers:** availablebooks (5)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Practice Debugging C# Programs

#### Basic code challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=5)** - [Instructor] Throughout this course, we've explored different tools that help us debug programs, as well as how to approach finding and solving code errors.
>
> **[0:14](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=14)** For this code challenge, we have a program that attempts to print the numbers one to 100 with a few constraints.
>
> **[0:22](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=22)** For multiples of three, the program prints Fizz instead of the number, and for multiples of five, it prints Buzz.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=29)** For numbers which are multiples of both three and five, it prints FizzBuzz.
>
> **[0:35](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=35)** Let's take a deeper look at this program.
>
> **[0:38](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=38)** In the main function, all we do is call the FizzBuzz function.
>
> **[0:42](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=42)** And in the FizzBuzz function, we have all of the implementation that does what the program is supposed to do.
>
> **[0:48](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=48)** Of course, right now, the code doesn't work and it's your job to fix it.
>
> **[0:54](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge?u=76281980&t=54)** Good luck and happy coding!

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Basic code challenge: Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=0)** - [Woman] In this challenge, we have a program that attempts to print the numbers one through a hundred with some exceptions.
>
> **[0:12](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=12)** For multiples of three, the program prints 'fizz' instead of the number.
>
> **[0:16](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=16)** And for multiples of five, it prints 'buzz'.
>
> **[0:19](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=19)** For numbers which are multiples of both three and five, it prints 'fizzbuzz.'
>
> **[0:24](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=24)** Let's debug it.
>
> **[0:26](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=26)** The first thing we're going to do is run the program to see what the actual output is, and if we can even run it.
>
> **[0:35](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=35)** Dragging this up, we can see the contents of what the program outputted, so for zero, we get 'fizz,' for three we get 'fizz,' for five we get 'buzz,' and this is good because here, if it's a multiple of three, we want to print 'fizz.'
>
> **[0:51](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=51)** And, if it's a multiple of five, we do want to print 'buzz.'
>
> **[0:55](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=55)** Now, for that multiple of fifteen, we print 'fizz,' we don't print 'fizzbuzz.'
>
> **[1:00](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=60)** And if we scroll down to thirty, we again print 'fizz,' instead of 'fizzbuzz.'
>
> **[1:07](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=67)** And this is what we should be printing.
>
> **[1:10](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=70)** To see what's going on with our program, we can add some break points.
>
> **[1:14](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=74)** And, more specifically, add a conditional break point here, so we can see what's going on when I equals fifteen.
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=81)** So we'll hit enter there.
>
> **[1:23](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=83)** We'll run our program again, and we'll see it go through all of the different iterations, except when it gets to fifteen, we're going to stop and keep continuing.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=93)** We'll add a break point here, a break point here, break point here.
>
> **[1:39](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=99)** So, if I is a multiple of three, then we want to run this line of code.
>
> **[1:44](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=104)** So, let's see what happens in this next bit.
>
> **[1:46](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=106)** And we do hit this line, so here I is a multiple of three, meaning fifteen mod three does equal zero, and we print this.
>
> **[1:56](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=116)** Then we continue on this next line, and it's just this closing curly bracket that we're messing with here.
>
> **[2:02](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=122)** We'll hit enter, and we go on to the future iterations.
>
> **[2:05](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=125)** We don't ever get to this line; I mod fifteen, because once we enter this if statement, and we find that this condition is true, we only execute this piece of code.
>
> **[2:16](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=136)** But we don't even check what the other elses are.
>
> **[2:20](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=140)** This means, if we want to check fifteen, well, fifteen, anything that's a multiple of fifteen, is also going to be a multiple of three and five.
>
> **[2:29](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=149)** To fix this, what we can do, is we can swap these two items, and so we can say if I is a multiple of three, and really what we can do is, if I is a multiple of three, and I is a multiple of five, then it must be a multiple of fifteen, and we want to print 'fizzbuzz.'
>
> **[2:51](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=171)** If it's a multiple of three, then we just want to print 'fizz.'
>
> **[2:54](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=174)** And so we're re-ordering our statements here, so that way we for sure print 'fizzbuzz' when we hit that multiple of fifteen.
>
> **[3:03](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=183)** Let's stop this program and run it again, and see what happens when we hit that fifteen for our iterations.
>
> **[3:09](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=189)** So for that number to be printed out.
>
> **[3:13](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=193)** So we go through all of these numbers, and then we hit fifteen.
>
> **[3:17](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=197)** So it hits this if statement.
>
> **[3:18](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=198)** This should return true.
>
> **[3:20](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=200)** We'll add some more break points just to see if it lands anywhere here.
>
> **[3:27](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=207)** We get 'fizzbuzz,' we close that curly bracket, and then we go to our next iteration because 'fizzbuzz' is printed in our console.
>
> **[3:36](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=216)** So now we're at sixteen, our I has been incremented.
>
> **[3:39](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=219)** We're continuing through the rest of this program.
>
> **[3:42](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=222)** And it's looking good, so we'll remove that break point, we'll continue with the execution.
>
> **[3:47](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=227)** It finishes and we can scroll up to see if our output looks correct.
>
> **[3:52](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=232)** So, for zero, we get 'fizzbuzz,' and so, in this case, we're saying zero is a multiple of everything.
>
> **[3:58](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=238)** It's a multiple of three, it's a multiple of five.
>
> **[4:01](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=241)** Zero's a tricky number, and so we'd have to figure out exactly what we want to print out for that variable from a requirements standpoint.
>
> **[4:08](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=248)** So when we do have zero as out number, do we want to print 'fizz,' or 'buzz,' or 'fizzbuzz'?
>
> **[4:14](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=254)** Really, any answer is correct here.
>
> **[4:15](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=255)** It just depends on how you look at it.
>
> **[4:18](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=258)** For one, two, we hit three, we do get 'fizz.'
>
> **[4:21](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=261)** For five, we do get 'buzz,' as expected.
>
> **[4:24](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=264)** And then for fifteen, we do get 'fizzbuzz,' and then for thirty we also get 'fizzbuzz.'
>
> **[4:28](https://www.linkedin.com/learning/debugging-in-c-sharp/basic-code-challenge-solution?u=76281980&t=268)** And so everything is looking great here, and that's it for this program.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), this. (1), this, (1), case, (1)
> **Definitions:** is a  (6)
> **UI Navigation:** scroll down (1), go to (1), scroll up (1)
> **CLI Commands:** find (1)
> **Speakers:** - [woman] (1)
> **Non-Speech:** (upbeat music) (1)

#### Logical code challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=0)** - [Woman] Let's tackle another debugging code challenge.
>
> **[0:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=8)** For this challenge, we have some code that attempts to find the BMI, or body mass index, for each patient in a collection of patients.
>
> **[0:18](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=18)** Where each patient has a weight and height value.
>
> **[0:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=21)** Right now, this code does not work, due to several logical errors, but let's walk through it's structure.
>
> **[0:28](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=28)** Starting with the main method, we create a tuple of patients, with the initialize patients function.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=36)** Jumping up, to this function we have a tuple as our return value, initialize patients, and we want to initialize a number of patients, and so whether it's ten or twenty, this is going to be the number of patients we decide to initialize in the array.
>
> **[0:53](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=53)** So, first, we create a set of patients, but then we also add some edge cases.
>
> **[0:58](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=58)** So we have some edge cases up here, or what if, y'know, there's a patient with a zero height and a zero weight, or negative height and negative weight.
>
> **[1:07](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=67)** So these doubles in here are the height and weight of each patient.
>
> **[1:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=70)** And, so here we're initializing it with a size as well as the size of the edge patients.
>
> **[1:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=76)** Then, we create a new random, and we have an 'int I.'
>
> **[1:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=81)** And while we're adding items to the array, so while we're initializing the array, we create a random number for the height and the weight, and add it to the array.
>
> **[1:31](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=91)** At the end, we add our edge cases to the very end of the array, so that way we can test random patients as well as some of those edge cases.
>
> **[1:41](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=101)** Then we return this patient's array that then we'll be able to use to calculate the BMI for each patient.
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=111)** In the next part, we actually calculate the BMI for the collection of patients.
>
> **[1:55](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=115)** And so that results in the double array, where each item in the array is the BMI for each patient.
>
> **[2:02](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=122)** In this calculate BMI collection method, we take some of the patients, and so these are the patients that we've already initialized, and we create another array, a BMI collection that we will be returning.
>
> **[2:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=136)** And, so we just create a plain old array with the number of patients that we have, and we iterate through that array calculating the BMI each time.
>
> **[2:26](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=146)** So we take the height and the weight, and use that to calculate the BMI.
>
> **[2:32](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=152)** In the BMI calculation, we run this formula.
>
> **[2:37](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=157)** This formula is correct and it's not going to be something that you will have to debug, just trust that this is the correct formula, and then we print the height and the weight and BMI, so we kind of know what's going on, and then we return that to the console.
>
> **[2:51](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=171)** So, the calculate BMI collection takes the patients, while the calculate BMI just takes an individual weight and height.
>
> **[3:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=180)** Then, at the end, after we've filled the BMI collection with all of the appropriate items, we return it to the user and that's what we get down here.
>
> **[3:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=190)** Alright, now it's your turn to debug the program.
>
> **[3:14](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=194)** In the debugging, we should be able to see the correct values when we print out each item to the console.
>
> **[3:20](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge?u=76281980&t=200)** Good luck, and happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** bmi (13)
> **Code Keywords:** let (2), function (2), if, (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [woman] (1)
> **Non-Speech:** (upbeat music) (1)

#### Logical code challenge: Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=0)** - [Instructor] In this challenge we have a program that attempts to find the BMI, or body mass index, for each patient in a collection of patients where each patient has a weight and height value.
>
> **[0:17](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=17)** Let's debug the program.
>
> **[0:19](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=19)** The first thing we'll do is just run it and see what happens.
>
> **[0:24](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=24)** See what we get in this output and even if it will run to completion.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=29)** So here, this is really strange.
>
> **[0:31](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=31)** We get every single height and value, every single one is the same.
>
> **[0:36](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=36)** So we have the same height for every single person in the collection, the same weight, and the same BMI.
>
> **[0:41](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=41)** So this does not look correct.
>
> **[0:46](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=46)** So let's go ahead and add some breakpoints.
>
> **[0:49](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=49)** So first we can add the breakpoint to see if our patients are being initialized correctly.
>
> **[0:54](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=54)** So we'll run it again and see what that value for patients is, if each patient is the same.
>
> **[1:02](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=62)** So we are getting different types of patients and then we are also getting our edge cases at the end.
>
> **[1:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=68)** We can even look at this a little closer to make sure we're initializing them correctly.
>
> **[1:13](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=73)** So here we have our patients.
>
> **[1:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=76)** This is looking good.
>
> **[1:18](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=78)** And then we do increment i so we're not stuck in this loop.
>
> **[1:23](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=83)** We have for our feet we want something between four and six because that's like the average height of a human being and four to seven, this is good because it's exclusive so the seven will not be included and the four will, so we'll get four through six exactly.
>
> **[1:42](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=102)** And then here we want a random inch value so like five feet six inches, that sort of thing, and we want a random value between zero and 11.
>
> **[1:51](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=111)** Now, this is actually incorrect.
>
> **[1:53](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=113)** This should be 12 because we want to include 11.
>
> **[1:57](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=117)** Since this is exclusive, now it works from zero to 11.
>
> **[2:03](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=123)** Then we call this feet to inches function where we give it the feet and the inches.
>
> **[2:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=128)** So let's go find that guy, we give it the feet and the inches so those match up correctly.
>
> **[2:13](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=133)** We have the feet times 12.
>
> **[2:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=135)** This is also a little odd.
>
> **[2:17](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=137)** So we multiply with the feet but we don't ever add the inches.
>
> **[2:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=141)** And so here what we want to do is we want to add the inches.
>
> **[2:30](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=150)** So here, if we have feet as five, inches as 11, we'll have five times 12, which will equal something, and then we'll have our inches in there as well and we'll add those to our total and return that total.
>
> **[2:44](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=164)** So now this height is going to look good.
>
> **[2:47](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=167)** For our weight we have 120 to 281.
>
> **[2:52](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=172)** This looks good because it's exclusive and so we will get those correct values.
>
> **[2:56](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=176)** And the two here just means we're going to round it two digits, and so that's why we see this here instead of these really long values.
>
> **[3:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=188)** With these height and weight values calculated we put height in that first item of the tuple and weight in the second item of the tuple, and put that into our patients array at index i, so that's looking good as well.
>
> **[3:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=201)** Next we add our edge cases.
>
> **[3:23](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=203)** Here i is less than patients dot length so while it's equal to less of the patients.
>
> **[3:29](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=209)** And so our patients dot length is 10 plus the size of our edge length, which in this case is one, two, three, four, five, six.
>
> **[3:38](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=218)** So in this case, while it's less than 16, we're going to have 10 minus 10 because i equals 10 now, size equals 10 as well.
>
> **[3:48](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=228)** So that's going to be zero for the first iteration but it's going to store this value at index 11 and so it's not going to overwrite any data.
>
> **[3:58](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=238)** This is looking great and we can see this in our array that all of our edge cases are added and nothing is overwritten.
>
> **[4:06](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=246)** Then we return our patients.
>
> **[4:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=248)** So that, that initialization now looks accurate.
>
> **[4:12](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=252)** Next we'll step into the calculate BMI collection.
>
> **[4:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=256)** So let's step into there and let's continue to step over.
>
> **[4:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=261)** We create that array, that's looking good.
>
> **[4:24](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=264)** That's looking good.
>
> **[4:26](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=266)** We're iterating over the length and then for each item right now we don't have anything in here, but in each location or index of our BMI collection we'll go ahead and calculate the BMI for each patient.
>
> **[4:42](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=282)** Ah, this is why we were getting them all the same 'cause we're not using i here.
>
> **[4:46](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=286)** So we'll add that to be i.
>
> **[4:50](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=290)** So now we'll actually iterate over all of the patients and add each patient into our collection instead of just patient zero, and then item one and item two.
>
> **[5:00](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=300)** So in this case our item one, if we find where we initialize our patients, this was up here.
>
> **[5:12](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=312)** Item one is our height, item two is our weight.
>
> **[5:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=316)** Here we put item one, item two, so our height and weight.
>
> **[5:19](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=319)** And here we actually have our weight first, and so that means our items are swapped.
>
> **[5:25](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=325)** And so we are using our height value for the weight here, and our weight value for the height.
>
> **[5:31](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=331)** To change this we can just switch these and we can put weight.
>
> **[5:39](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=339)** And now everything should be set to go there.
>
> **[5:42](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=342)** This formula, we already said this was the de facto, this is correct, and then we print out the according items to the console.
>
> **[5:50](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=350)** This is looking good so let's stop this, and run our execution here and see what we get in this console.
>
> **[5:58](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=358)** Let's take out this breakpoint and continue.
>
> **[6:01](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=361)** And here we get some interesting numbers.
>
> **[6:03](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=363)** And so these BMIs are looking correct, and so that is good.
>
> **[6:09](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=369)** We can double-check it on the Internet in a second but these edge cases, we really need to handle these.
>
> **[6:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=376)** Should we be calculating anything if our height is zero or our weight is zero?
>
> **[6:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=381)** Should we be getting this in our response?
>
> **[6:24](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=384)** Should we be giving an error message?
>
> **[6:26](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=386)** Should we be handling the error?
>
> **[6:28](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=388)** These are all developer choices and developer design choices.
>
> **[6:33](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=393)** In this case, we'll go to our calculate BMI.
>
> **[6:36](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=396)** So when we're calculating the BMI we'll want to double-check that the height and weight are valid, that the person is actually a person, they have a height and weight that's not negative and that's not zero.
>
> **[6:49](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=409)** So we'll add an if statement here adding some error checking, some edge case checking.
>
> **[6:54](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=414)** We'll say, "If the height is zero or the weight "is zero then we have an issue, we have some problems."
>
> **[7:02](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=422)** And in this case, we'll just print to the console.
>
> **[7:06](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=426)** You could do a try-catch here.
>
> **[7:08](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=428)** There are a couple different options.
>
> **[7:10](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=430)** But to keep this simple we will just do this and instead of stating what the BMI is we'll just say, "Invalid for height or weight,
>
> **[7:29](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=449)** "automatic zero."
>
> **[7:38](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=458)** Here we'll return zero, so we'll print out the fact that there's an error and then we'll return zero and just be like, "Hey, "there was an error, but we're going to kind "of correct it by just making the BMI zero "across the board if you have a height "that's less than or equal to zero "or a weight that's less than or equal to zero."
>
> **[7:57](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=477)** Since we're returning in this if statement we don't necessarily have to add an else clause here.
>
> **[8:03](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=483)** You could add it if it makes you more comfortable but doing this will work just as well.
>
> **[8:09](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=489)** Let's go ahead and save this, and see what the output of our code is.
>
> **[8:16](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=496)** Notice the numbers are going to be a little bit different because it is randomized.
>
> **[8:21](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=501)** And so here all of these are invalid because their one is either negative or they're both negative or one is zero and the other's positive, but because either is less than or equal to zero we get that automatic zero in our console.
>
> **[8:35](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=515)** Now, let's double-check one of these BMIs.
>
> **[8:39](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=519)** Here we have a height of 77.3, which is about 6.44 feet, and we have a weight of 142.65.
>
> **[8:47](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=527)** The BMI we calculated is 16.78.
>
> **[8:52](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=532)** So let's go to Google here and I've already inputted the values, but if we have 6.44 as our feet and we have the correct pounds for our weight we get 16.8 as our BMI, which is exactly what we did here in our console.
>
> **[9:09](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=549)** The only difference is that the BMI there is rounded up.
>
> **[9:15](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=555)** You can copy over a few of the other options here to make sure your values are correct.
>
> **[9:20](https://www.linkedin.com/learning/debugging-in-c-sharp/logical-code-challenge-solution?u=76281980&t=560)** But if you corrected all of the errors and fixed all the bugs in the program, everything should work as it's supposed to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), case, (3), continue (2), this, (2), function (1)
> **Env Vars:** bmi (12)
> **Versions:** 6.44 (2), 77.3 (1), 142.65 (1), 16.78 (1), 16.8 (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** go to (2)
> **Definitions:** we call this (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Solution: Find bug in factorial function
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=0)** - [Instructor] Let's debug this factorial function.
>
> **[0:09](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=9)** This is a recursive function, so we'll need to consider its base case and its recursive case.
>
> **[0:15](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=15)** Let's add a print statement so we can see the result for each step at the recursion.
>
> **[0:29](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=29)** We'll write out the numb and the result of the factorial.
>
> **[0:52](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=52)** We'll also print the base case when we hit it.
>
> **[1:06](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=66)** Let's run it.
>
> **[1:11](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=71)** For the base case, the factorial is zero.
>
> **[1:15](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=75)** Then for the recursive case, the factorial is also zero.
>
> **[1:19](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=79)** This makes the overall result zero because in the recursive case, we multiply the number by the factorial of the last number.
>
> **[1:28](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=88)** Let's see what this code was supposed to return.
>
> **[1:33](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=93)** We'll run it again.
>
> **[1:36](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=96)** The expected factorial result for one is one.
>
> **[1:41](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=101)** This means something's wrong and there's a bug.
>
> **[1:45](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=105)** If we think of the facts of multiplication, we know that any number times zero is zero.
>
> **[1:52](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=112)** This means if the base case is zero, every factorial will be zero.
>
> **[1:58](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=118)** Let's try it with five. We'll run the code again.
>
> **[2:06](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=126)** The outcome is still zero, but the correct result is 120.
>
> **[2:11](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=131)** This means we'll likely need to change something in our base case.
>
> **[2:16](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=136)** If numb is zero, let's return one instead of zero.
>
> **[2:21](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=141)** This means instead of zeroing out our factorial in the base case, we'll give it a number that ensures the factorial computation remains accurate.
>
> **[2:31](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=151)** Let's run it.
>
> **[2:35](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=155)** This case works as expected.
>
> **[2:38](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=158)** Let's try it with numb as one.
>
> **[2:46](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=166)** This also works. Let's try it with numb as zero.
>
> **[2:54](https://www.linkedin.com/learning/debugging-in-c-sharp/solution-find-bug-in-factorial-function?u=76281980&t=174)** By testing with many cases, we can confidently say we've solved the bug.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (4), function (2), case. (2), return. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=1)** - [Kathryn] Congratulations, you finished the course!
>
> **[0:04](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=4)** Now you know how to debug your C# programs with break points, exceptions, inspectors and more with the Visual Studio code IDE.
>
> **[0:14](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=14)** You also learned about some of the most common errors in C# and how to avoid them by covering your edge cases.
>
> **[0:22](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=22)** Overall, you discovered how to make your programs more reliable and avoid unintended side effects with defensive programming.
>
> **[0:31](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=31)** The knowledge you've gained in this course will come in handy whenever you're building programs with C#.
>
> **[0:37](https://www.linkedin.com/learning/debugging-in-c-sharp/next-steps?u=76281980&t=37)** Feel free to follow me on Instagram at blondiebytes and good luck, happy coding!

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Tools:** visual studio (1)
> **Speakers:** - [kathryn] (1)


## Path Context

### In [[C- Foundations- From Basics to Building Blocks]]
← [[C- Essential Training 2- Generics, Collections, and LINQ]] | **3 of 5** | [[C- Refactoring Tips and Tricks]] →

## Appears In

- [[C- Foundations- From Basics to Building Blocks]]

## Related Courses

_Courses sharing skills:_

- [[Learning JavaScript Debugging]] — Debugging Code
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Vue.js- Testing and Debugging]] — Debugging Code
- [[Nail Your C- Interview]] — C#

---

[↑ Back to top](#)