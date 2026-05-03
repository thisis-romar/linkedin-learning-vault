---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-refactoring-tips-and-tricks
url: "https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks"
duration_minutes: 43
duration: 43m
level: Intermediate
updated: 9/26/2023
learners: 31696
skills:
  - C#
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQECvctNUeYZPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694200036676?e=2147483647&amp;v=beta&amp;t=yrLUQyPchW2JE01Xrf6pG9GPAZdJKWnLS2giMi6L4dc"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Foundations- From Basics to Building Blocks]]'
prev_courses:
  - '[[Debugging in C-]]'
next_courses:
  - '[[Mastering AI Tools for Efficient C- Development]]'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":4,"total":5,"prev":"Debugging in C-","next":"Mastering AI Tools for Efficient C- Development"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Refactoring%20Tips%20and%20Tricks.md)

![C# Refactoring Tips and Tricks](https://media.licdn.com/dms/image/v2/D4E0DAQECvctNUeYZPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694200036676?e=2147483647&amp;v=beta&amp;t=yrLUQyPchW2JE01Xrf6pG9GPAZdJKWnLS2giMi6L4dc)

# C# Refactoring Tips and Tricks

> Refactoring code makes it cleaner, more performant, and readable. It eliminates unused functionality, renames and reorganizes elements to make their purpose clearer, and allows for more abstraction. This course provides C# developers with tips and tricks for refactoring existing codebases. Learn how to create a baseline for your project to back up and track the results of your work, and start remo

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks) | 43m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [What is refactoring?](#what-is-refactoring)
- [**1. Refactoring Strategies**](#1-refactoring-strategies) (4 videos)
  - [Create a baseline](#create-a-baseline)
  - [Incremental steps](#incremental-steps)
  - [Remove unused code](#remove-unused-code)
  - [Improve performance](#improve-performance)
- [**2. Before You Refactor**](#2-before-you-refactor) (3 videos)
  - [Use version control](#use-version-control)
  - [Refactor in branches](#refactor-in-branches)
  - [Tools for refactoring](#tools-for-refactoring)
- [**3. Optimizing Code**](#3-optimizing-code) (3 videos)
  - [Identify problem areas](#identify-problem-areas)
  - [Common optimizations](#common-optimizations)
  - [Inlining code](#inlining-code)
- [**4. Creating Clean Code**](#4-creating-clean-code) (3 videos)
  - [Code readability](#code-readability)
  - [Extract methods](#extract-methods)
  - [Create clean APIs](#create-clean-apis)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980&t=0)** - Hello, my name is Jesse Freeman and in Refactoring Tips and Tricks, we'll learn some strategies for taking an existing code base and cleaning it up. I'll start by teaching you how refactoring works, creating a baseline for your project, tools to use, and finally, we'll walk through an example of how to tie it all together. These are all strategies I've used in commercial and my own personal projects over the past 20 years as a developer. I hope you enjoy this course as much as I did making it, now let's get started.

> [!info]- Semantic Content
>
> **Speakers:** - hello (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980&t=0)** - [Narrator] Before you get started, this course assumes you're familiar with C# and coding in general and that you're using Visual Studio or some other IDE that provides basic refactoring tools. While we won't be writing code, we will be walking through some concepts around object oriented programming, API design and general code maintenance. Finally, you should have some experience with [[Version Control]] to help keep your project safe before attempting to perform any sort of refactoring on your own after the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (1)
> **Env Vars:** ide (1), api (1)
> **Tools:** visual studio (1)
> **Speakers:** - [narrator] (1)

#### [What is refactoring?](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=0)** - [Narrator] What is refactoring? Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code, yet improves its internal structure. Refactoring is an important process throughout the development cycle. Some of the reasons why you'd want to refactor is that it allows you to clean up the underlying code, so that it's easier to maintain. Refactoring also allows you to remove code that is deprecated or no longer needed. And finally, refactoring allows you to optimize the underlying code without breaking the existing API. This third point is probably the most critical and important one. Whenever you're refactoring or cleaning up a code base, it's important to note that refactoring is not about adding new functionality, but instead it focuses on cleaning up existing code. The goal of refactoring is to make sure that you don't break other systems, while creating clean, reusable and scalable code that will last you throughout the life of the project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 1. Refactoring Strategies

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a baseline](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=0)** - [Instructor] Before we attempt any type of refactoring to a codebase, it's important to create a baseline so we know where we're starting. A baseline is a minimum or starting point used for comparisons. This becomes critical over time as you refactor pieces of code and need to compare it to the previous version, or if you mess up, being able to go back and revert to the original codebase. Some of the advantages of creating a baseline is that it offers a single stable build of your codebase to revert back to. It also enables others on the team to still work with the main codebase without being affected by the refactoring. Remember, refactoring really is about cleaning up the underlying code and not the existing APIs, so it should be possible to refactor a codebase while others are working on it without affecting other members of the team. And finally, the baseline ensures you have a point of reference to backtrack in case refactoring goes wrong. Remember, it's okay to make mistakes when refactoring. Sometimes refactoring can break your codebase. That's why it's important to do refactoring in small, controlled steps and revert to the baseline when things become unfixable. There have been many times where I've been working on a large refactoring and I've gone and broken most of the code and couldn't figure out how to backtrack and get out of it. While it may have taken me hours to do the refactoring only to find out that I couldn't get anything salvageable out of it, it was still a good learning experience. And I encourage you, when you make a mistake,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=93)** don't be afraid to revert back and try again. Use the things you learned during the first round of refactoring to hopefully not repeat the mistake when you attempt it another time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Incremental steps](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=0)** - [Instructor] So let's talk about some keys to success when refactoring. The most important part of refactoring is to do it in small, controlled, and manageable steps. It's easy to get carried away when you begin refactoring by changing large parts of the code base, but this will only cause you more trouble down the line, especially if the code base is very large and you have a lot of additional testing to do. The way that I approach refactoring is first, I create a plan of what I want to refactor. Once I have a plan, and I've seen the code that I want to change, I understand what I need to change it to, and I've analyzed some of the dependencies, I'm ready to perform the refactoring itself. After I've done the refactoring, I have to go through and test the entire code base. This is critical. Whenever you change code, you need to make sure that it still performs the way that it worked previously. Let's talk a little bit more about testing after refactoring. Generally, when you're using very large code bases or things with complicated logic, it's best to leverage unit tests for large code bases. Especially with a lot of moving parts, it's very hard to go through and manually test everything by hand. If you haven't already created unit test for your program, it may be a good time to take a step back and create a few unit tests just to cover the basic APIs. The next thing is to automate as much testing as possible. There are lots of ways you can do this,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=95)** [[Unit Testing]] is just one of them. You can also write automated scripts that go through the program and act out certain user events in order to see what the results are. Being able to automate and reproduce a test over and over again as you continue to change underlying code is critical to make sure that you don't miss any bugs or introduce new ones after refactoring. Sometimes your application uses a lot of UI or visual elements that are hard to automate or test with unit testing. For this case, try to write visual tests in order to capture these edge cases. In my own programs, I've gone and created automated scripts that go through certain screens of an app, take a screenshot, save it to a file, and I can go back later and analyze the screenshots to make sure that things look exactly how I expect them to look. And finally, create a testing plan or a script to have QA run through by hand to validate workflows aren't broken. This is something I also do in my own project. Once I start going through and manually testing parts of an application, I write down the steps in order to replicate the same sort of test. This way, I can either rerun it again myself and follow the exact same steps or give it to someone else and have them run it in order to make sure that things aren't broken. The goal to creating a successful refactoring is to have a circular workflow. You start with creating a baseline of your code base so you have a point of reference in case things go wrong.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=190)** Next, you perform the refactor. Once you perform the refactor, you test the entire code base to make sure that nothing is broken. And once the testing has passed, you can commit your code, create a new baseline, and start the process over again. Testing is the most important part of refactoring. Every time you refactor a code base, you need to be diligent about testing for any unexpected issues and strive to keep your baseline stable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (2)
> **CLI Commands:** make (5)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Remove unused code](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=0)** - [Instructor] Refactoring involves removing a lot of unused code. That's why I love this quote, "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." Refactoring is a great way to remove unused code. Over time, a project collects technical debt. Technical debt is a concept in [[Software Development]] that reflects the implied cost of additional work or rework caused by choosing an easy solution now instead of using a better approach that would take longer. Refactoring allows you to remove unused parts of the code base and keep the core code clean and easier to maintain. Sometimes, we accidentally add technical debt by simply being under a deadline. How many times have you worked on a project where you haven't had enough time to fully implement a particular piece of code the way that you wanted to? Sometimes, it's okay to cut corners, but once the deadline is over, take the time to go back and fix that by refactoring and cleaning up the code. As your code base grows and grows, there may be parts of the code that can actually just be removed outright. Removing old code and deprecated code is just part of the natural process of refactoring a code base. You should always make an active effort to remove code that is no longer needed. After removing code, always test and update the baseline. When removing unused code, the compiler will tell you if something is wrong. Even if the code can be compiled,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=93)** always test any changes to a code base as part of your workflow. Leverage your tools to find unused code. Visual Studio will show you unused code on its own. You can see references to methods as little number counts above their name, which can help identify unused code. If you see a method that isn't being referenced anywhere, take a look at removing it. Use that to help you find what should be stripped out of code during a refactor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Tools:** visual studio (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Improve performance](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=0)** - [Narrator] One of the strategies when refactoring a code base is to use refactoring to improve the performance of the underlying code. There are lots of ways to benchmark the performance of a code base, and refactoring allows you to make incremental changes to improve performance. Some things to keep in mind. Sometimes you can get overzealous and try to optimize when it's too early in the development cycle. This will just add more development time in the end when you have to go back and undo some of the optimizations. To help with this, when you're ready to do optimization, validate the performance before making changes. You may feel like something isn't working at the right speed but before you go and start refactoring it, make sure that you actually know how it's performing before you touch the code. And finally, only optimize where needed. Testing is critical to find the ROI, or return on investment when optimizing. Optimizing could be a long and grueling process, so make sure that you're optimizing the right parts of your application where it matters. To help figure out where to optimize, we need to understand a little bit about execution time. Each method takes time to execute. Larger blocks of code which perform lots of actions, especially in loops, can slow down the performance of your code base. When we take a look at how the methods in our code base are performing, it's important to calculate the execution time we have for each frame. If you want your app to run at 60 frames per second,
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=96)** you will only have 16.6 milliseconds per frame to execute code and redraw the display. Any block of code that takes more than five milliseconds to execute could potentially lock up the responsiveness of your app. When trying to find bottlenecks in the performance of your code, here's some things to look for. Parsing logic. Are you going through and parsing large chunks of data? And is that parsing blocking other threads or the UI? Are you running complex code on the main thread? Anything that updates the display or performs calculations could slow down your application. Are you doing image manipulation? Randomly generating graphics, creating new graphics, or saving 'em to the file system could be a big source of slowdown. Data analysis. Are you loading and analyzing raw data and trying to convert it into class properties? Or are you doing this on an external service and need to load that data back up, but break it up into pieces that are easier to use? This could be a bottleneck as well. And finally, nested loops. Since loops are blocking actions, no other code can execute until a loop is complete. So having multiple loops nested inside of each other could really slow down the code execution in general. In order for us to time how long a method executes, we can use the stopwatch class. In order to use the stopwatch class, simply include System.Diagnostics at the top of your class. Then create a new instance of the stopwatch.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=191)** When you're ready to start the stopwatch, just call the start method. You can stop the start watch at the end of a methods execution by calling stop, and after you call stop, you can get the elapsed milliseconds in order to see how long it actually took to perform the action. Here is an example where we're going to do a hundred thousand loops and add the I value back to a string. Before we create the string, we're going to make a new instance of stopwatch and call start. Remember, creating strings and variables also impact the performance of a method. So we want to make sure that we test all the parts of this logic, including creating the new string before the loop itself. Next, we'll loop through and add I back onto our temp string. And when we're done, we're going to call stop on the stopwatch. Finally, we can output the number of milliseconds to the console. Here you can see this took roughly nine seconds to execute. Now let's take a look at the same block of code, but instead of using a string, we're going to use the string builder class. The string builder class helps when working with large blocks of text, and in this case, we're simply going to append I back into the string builder. As you can see, the execution time is now 10 milliseconds. That's a huge difference between using a regular string and using the string builder. And this is something that we can easily quantify
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=286)** by simply using the stopwatch class itself. Remember, refactoring to optimize code is a time consuming process. It's not critical to optimize every line of code. Just look for the biggest problems and fix those.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** roi (1)
> **Versions:** 16.6 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 2. Before You Refactor

[↑ Back to Table of Contents](#table-of-contents)

#### [Use version control](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=0)** - [Instructor] Whenever it comes to refactoring, I can't stress this enough. Make sure you use [[Version Control]]. Before you attempt to do any kind of refactoring on your own code, make sure that it's backed up and under version control. Now, when creating C# projects, there's usually two [[Forms]] of version control you'll find. Either Team Foundation Server or [[Git]]. I prefer Git because it's what I've used on my own projects and it's what I've used for years now. Some of the advantages of using version control are that you're able to track the change history. You're also able to compare changes, which is especially important if you think you've messed up and you need to go back and see what you did previously from the baseline in order to fix the current problem. You're able to merge changes which is critical when other people are working on the same code base and you're performing a refactor that could affect their versions. So, being able to take their versions and your version and merge it together and find the conflicts is instrumental in making sure that you don't create new issues. And finally, being able to track author contributions in order to see what has been committed by who in order to roll back changes in case there's a break. When you're working in a large team, it's important to figure out who's in charge of merging. At best, one person should be in charge of the merging changes into the baseline. This person is also in charge of verifying the test before creating a new baseline. While this is a lot of work to put on one person's shoulders, it's critical that one person is in charge
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=94)** of making sure that the code base is always stable. This should be the person who's most familiar with the architecture and has the most experience with version control in general in order to fix any conflicts. The baseline should always be the stable build of the code base, and is usually the master branch or trunk of the project. All refactoring should be done in separate branches. This helps keep everything clean and when someone is new to the project, they're able to check out the master branch and compile it without getting any errors, or partially completed work that's being done on a refactor, or adding a new feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (5), [[Git]] (2), [[Forms]] (1)
> **CLI Commands:** make (2), find (2), git (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Refactor in branches](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=0)** - [Instructor] Let's just take some time aside to talk a little bit about creating branches when doing your refactoring. It's always important to use a separate branch for each major refactor. When it comes to creating these branches, simply branch directly off of the baseline, which should be the master of your project. Once you have your own refactor branch, you're able to make all the changes you need. You can go back and compare it to the master. And once you're sure that the refactor branch is stable, you can merge it back to master. This is the general cycle that we're looking for. You create a master baseline, you refactor in a separate branch, you perform your testing, and then you merge it back to master. From there, you're able to create a new branch on the next refactor and continue the process. If you're working in a team and need to do refactoring, it's best that every member has their own branch off of the baseline. You can take your branch and create a new refactor branch off of that, perform your refactoring, merge it back into your own branch, and then once everything is verified to work, merge it back into the baseline. The master branch should always be stable. This branch should be bug-free and ready to compile or run as soon as it's checked out. Since this is the baseline for the project, it should never contain merge errors. The goal for the master branch is that it can always be checked out and built without errors.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=95)** Since this is the current live state of the code base, it should never contain a compile error. Always isolate major refactors and changes to their own self-contained branches. And before merging to master, make sure to retest the entire code base for issues.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Tools for refactoring](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=0)** - [Instructor] It's important to leverage your IDE's own refactoring tools. Depending on which editor you're using, you'll have several options for refactoring your code automatically, or you can do it manually by hand. Each of these examples will work in Visual Studio on Mac or on [[Windows]]. The first tool is Rename. Renaming a field or a method is the most common type of refactoring you'll do. Simply click on the item, Select Rename, and the IDE should replace all references to it in your code base. Next is Extract Method. Extracting a method allows you to take a block of code, extract it and create a new method for it. This is really useful when you have a really long method and you want to break it up into several steps. Here's an example of how Extract Method works. As you can see, we now have a new method call at the top of the code example, and we've extracted out the code from that area of the previous method and created a new private static method below. One of the helpful things about using the Extract Method tool is that it will also take any references to code and provide them as parameters into the method for us. As you can see, the new method requires a reference to StringBuilder. And since the StringBuilder is referenced previously in the line above, it's automatically going to be passed into the new method for us, and we haven't had to write a single line of code. Now let's talk about encapsulating a field.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=96)** This allows you to quickly create a property from a field. You can manually do this by converting a field into a getter or a setter, but it's best to let the IDE do it for us. As you can see, there's two examples for encapsulating a field. The first is when we convert a field into a property, and we're just left with a getter and setter. Here you can see we have a public string, MyField, get and set. The next example allows us to retain the original field we were using. In this case, we have a private string called MyField which we can give a value to, and we have a property for it below it which references the field above. Next is Extract Interface. This allows you to quickly create an interface from a class' public methods. As you can see, when we use Extract Interface, we'll be given the ability to rename the interface, create the file name, and all of the public members for the interface will be listed below. By default, we can select all of them, or we can only choose the ones we need for this particular interface. And finally, we have Change Signature. This allows you to change the order or add and remove parameters for a method. This is incredibly powerful, especially when you need to go back and change the way that methods work without breaking other parts of your code base.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=191)** Once you select Change Signature, you'll be presented with a window that shows you the method as it looks and each of the parameters along with their type. You can use this to move parameters up or down. You can also add default values or add new values or remove them. This is incredibly useful when you're going through and cleaning up the API of your code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** ide (3), api (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 3. Optimizing Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Identify problem areas](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=0)** - [Instructor] One of the things that we can do with refactoring is be able to fix problems in our codebase. It's always important to identify the problem areas of the codebase before you begin refactoring. Usually we refer to these as code smells. In a computer program, a code smell, or a bad smell, is any symptom of the source code of a program that possibly indicates a deeper problem. Some example of code smells you may recognize are lockups, slowdowns, and crashes, experimental code that is still in the codebase, and inconsistent API naming. One of the biggest problems you may encounter when designing a large application are race conditions. A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or the system, the operations must be done in a proper sequence to be done correctly. This usually happens when a UI element is trying to display data that doesn't exist or hasn't been parsed yet. Or this is also common when running different processes on threads and the code that requires the thread to be completed executes before it's done and causes an error. The one thing that's hard to track down about race conditions is that sometimes the code will actually work fine. And in other cases, there may be a small delay, which causes the race condition to surface. Here's some tips for avoiding code smells.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=95)** First, keep an active log of the issues and bugs you find in your program. While you should be using a bug tracker of some kind, it always is good to just keep a list of weird things you see happening when you're going and testing out the code. Sometimes you might be able to go back to your notes and see a problem has already been documented and you'll know a better way to fix it. Next, isolate code you know isn't working correctly until you can fix it. If you know that a part of the codebase isn't functioning correctly, make sure to keep it separate from the main line. Try to wrap it in a class that can use a try catch statement in order to catch any errors or document it in the code itself with comments letting others know that there's something wrong with that block of code. And finally, avoid hacks or quick fixes. Take the time to write clean code. Before you do any refactoring to fix an issue in your codebase, pay attention to the code's dependencies in your project. Identify what will be affected before attempting to clean it up or refactor your problematic code so you can track down bugs easier when the codebase is cleaner.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Common optimizations](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=0)** - [Instructor] There are a lot of things we can do when optimizing a code base. It's important to take a look at some common optimization in order to take a high level pass at cleaning up your code before going granular on very specific pieces of code that may be giving you problems. The first is that loops are bad. Loops block other code from executing. If you need to use a loop that has to perform a lot of calculations, try to break it up over several frames or run it in its own thread. One of the ways we used to handle this before threads were available, was green threading. In computer programming, green threads are threads that are scheduled by a runtime library or virtual machine instead of natively by the underlying operating system. Imagine you have a long loop. You can actually break it up over the course of several frames by keeping track of where you start the loop. When the loop runs, add up the time it takes to execute each loop and if it hits a threshold of two to three milliseconds, exit and continue the loop on the next frame until it's completed. Your program has finite resources, so you can't always throw code into extra threads and expect it not to slow down. Sometimes you need to manually control how code executes so it doesn't block other processes. One of the best ways to do this is by avoiding nested loops. While loops are bad on their own, nested loops are even worse. Try to run a single loop and perform additional actions
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=95)** after in separate loops to avoid locking up the main thread. One of the other things you can do is simplify your math, division, modulus, square root, are all expensive. Try multiplying instead of dividing, such as four divided by two should be four, multiplied by 0.5. Object pooling is also another good technique. Creating new instances of classes is expensive. Avoid using the new keyword as much as possible and implement object pooling where it makes sense. And finally, avoid reflection. Reflection in C# allows you to find out details of an object, method, and create objects, or invoke methods at runtime. Reflection is very expensive. If you need to use reflection, cache the results so it's not being used at runtime. Store the values in your class so that if you need to figure out more about the class over time, you're not recalling reflection to get those properties, and instead you're using the values you got on the first pass. Finally, take the performance hit upfront. Perform complex calculations when the app is first loading, you can cache all the data, store the values in persistent objects, and reuse objects as much as possible so things aren't being done when the app is running. Old programs which ran on computers with limited resources used to actually pre-calculate
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=187)** a lot of its own math ahead of time. Finally, take advantage of the fact that users expect an application to take a little bit longer to load up and use that time to your advantage. Try to avoid doing any of this while the application is running which might frustrate the user or lock up the app while the user is trying to perform an action.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Best Practices:** avoid doing (1)
> **Speakers:** - [instructor] (1)

#### [Inlining code](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=0)** - [Instructor] Let's take a moment to talk about inline code. This is usually an optimization that happens during compiling when referenced methods are added directly to the caller. Normally, this is the job of the compiler itself, but sometimes the compiler isn't smart enough to know when to correctly inline your own code. This can actually be done manually to help speed up performance in some use cases. This is called micro-optimization. Micro-optimization is the process of meticulously tuning small sections of code in order to address a perceived deficiency in some aspect of its operation, excessive memory usage, poor performance, and the list goes on. Let's take a look at this example and see how it executes with all the code inline. As you can see, we are going back to an earlier example of where we're going to append a string into a string builder and see how long it takes to execute. But what's changed is that we've now wrapped this code in another for loop. We want to perform this action 1,000 times. So our outer loop is 1,000 loops, and inside of this loop, we're calling a nested loop to perform 100,000 executions of concatenating j into the string builder. When we run this and take a look at the results, we see that the average time to execute each of these loops is seven milliseconds. Now, if we look at example two,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=94)** we've taken the nested loop outside and created a new method. So every time we iterate over this block of code, we are now calling an external method to calculate what should be added into the string builder. When we rerun the results, you can see that the new average is eight milliseconds. By calling an external method, we've incurred a little bit of overhead, which has now added an extra millisecond onto our average. Normally, this is negligible. In [[Object-Oriented Programming (OOP)|object-oriented programming]], it's best to have reusable code logic. But for performance, you may need to manually inline code like this. One example I've used in my own code is treating 1D arrays as 2D arrays. Since 1D arrays are faster than 2D arrays, it's easier to simply keep all the values in a single array. But sometimes I need to reference positions by an x- and y-value. And in order to do that, I need to calculate that value. Since that type of calculation requires division and modulus, it's a very expensive calculation. And in [[Game Development]], it's a common thing that I use throughout the tile map, all the way to rendering sprites. Because I use it everywhere, I've made that method static and I use it as a utility. But when calculating thousands of sprites or very large tile maps, there's a penalty that's incurred.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=188)** So a lot of the times, I'll go and take the code itself to perform the calculation and simply inline it manually where I need it, especially when it's going to be executed lots of times over a single frame.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Game Development]] (1)
> **Definitions:** is called (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 4. Creating Clean Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Code readability](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=0)** - [Narrator] One of the things that refactoring can really do is help with code readability. The cleaner your code is, the easier it is to maintain and for others to use. Here's some areas to focus on when you're cleaning up the code base while refactoring. Method names should be consistent and intuitive. Make sure that APIs are consistent throughout the code base. Naming conventions should be maintained consistently. And finally, classes should implement interfaces and be typed to them. When refactoring, focus on public APIs first. Refactoring is a way to clean up all the public facing APIs, which is important, especially when creating open source projects that other developers depend on. Since public APIs are accessible by all code, they should be the easiest to use. Here's some tips on creating clean APIs. Start by having clear property names so others know what the property is being used for. Have consistent method names across all of your public APIs. Limit the number of parameters for a method. If you find you have methods that require a lot of parameters, try to create another class in order to set values on that and pass into the method so it's easier to compile against. And finally, document your code. This is not only important for you to remember what your code does, but it's also imperative when you're generating out documentation that others rely on to use your code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=96)** With a little bit of work, it's easy to create a clean API for your code base. If your code is complex or requires specific order of execution, try creating higher level classes or APIs. This can sit on top of complex code logic to provide a cleaner way of working with the underlying code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Extract methods](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=0)** - [Instructor] As I've mentioned earlier, extracting methods is a very powerful tool when it comes to refactoring your code base. One of the strengths of [[Object-Oriented Programming (OOP)|object-oriented programming]] is being able to extend classes and create new logic by overriding methods with new code. Here are some tips for writing smaller methods. First, limit the methods to a specific task. Two, think ahead of how a class could be extended and what methods should be marked as virtual. Three, balance the trade-off of performance with [[Scalability]]. And four, not every problem requires a hammer. Use smaller methods when it makes sense. Let's look at an example of inheritance here. We want to design classes with inheritance in mind. This is a classic example. We're going to create an animal, and while you can imagine that the animal class has lots of other methods, we're going to focus solely on one method here called speak. Inside of this method is some business logic that allows the code to actually display what the animal speaks on the screen. Right now, it's not important. All we need to know is that the animal class has one method, and that method allows it to speak. Since we plan on creating different animals that all need to speak, we're going to go ahead and mark this method as virtual so that we can override it. Here are two examples of animals that are able to speak.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=96)** First, we have a dog, which extends the animal class and inherits all of the logic from animal. In this case, we're going to have the dog speak, so we're going to override the animal speak method. Since we're relying on some logic inside of the animal class, we're going to call the base.Speak method, and this will call the parent class and perform that action. Finally, we add the code specific to our dog. In this case, we're going to write to the console, bark. Now a similar animal is going to be a cat. We're going to follow the same steps as we did with dog, but in this case, we're going to have the cat output to the console, meow. Both of these examples work really well with animals that can speak, but what happens when we create an animal that can't speak? Here's a special use case. Here's what happens when we don't need the parents' class logic, since we can't go ahead and delete the logic from animal, but we need to make sure that all animals can speak, our slug is going to override the speak method, but it's not going to call the base speak method and it's not going to have any logic, so it just won't speak at all. Here's a very specific case of how we took a method that may have lots of moving parts, but we're able to override it and simply add in the logic we need per use case. This one example can be scaled up
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=192)** to any place where you have a method that has lots of logic inside of it. By breaking up each part of logic inside of a method into smaller methods, it becomes easier to override a specific piece of logic and create a new use case by extending it and creating a one-off class. Limiting the logic and methods helps create clean code. The smaller the logic is in each method, the easier it is to maintain. Always try to refactor your large code blocks into smaller, more reusable ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Scalability]] (1)
> **CLI Commands:** cat (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Create clean APIs](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=0)** - [Narrator] After refactoring methods, focus on your code base's APIs. While we've talked about maintaining clean and readable code, let's go through some specific ways to refactor APIs. For this, we're going to focus on extracting interfaces. When writing code from scratch, it's sometimes difficult to plan out what interfaces you'll actually need. Once you have your code in place, leverage extract interface to help clean up the implementation of your classes. Here's some reasons why interfaces are important. First, interfaces allow you to visually focus on just the public properties and methods of a class. This is important when trying to clean up an API because you don't have to get lost in the actual logic that's performing the action of a method. Simply go to the interface and look at what's publicly available to other classes that want to use it. Second, you should always be coding to interfaces and not implementations. This is just good object-oriented code design. And finally, interfaces allow you to hide complex business logic from other classes in simple, clean sets of APIs. The most important thing to remember is that consistency is key. First, set some guidelines for your APIs and stick to them. If you decide to change those guidelines, refactor the code accordingly.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=93)** Remember that each change to an API could have serious consequences for external code that depends on them. Let's take a look at an API example. Here's an example of a class we're going to use to access text from the file system. I've created a simple class called DesktopFileSystem. It has two functions. It can read text and write text from the file system. Now, it's bad for us to create another class that depends on this without having an interface first. So what we're going to do is extract an interface from the DesktopFileSystem. When we go to extract the interface, we're presented with the extract interface window. Here we can choose the two public methods and rename the interface. In this case, we're going to make it a little bit more generic and just call it IFileSystem. We'll include read text and write text as well. Now we have an IFileSystem interface. It's a clean interface where we can type to it instead of the DesktopFileSystem class. Let's take a look at how we would actually implement this logic. Here's a simple class called Workspace. The Workspace is designed to create and update a config file that's used by the [[Representational State Transfer (REST)|rest]] of our application. At the top of our Workspace class, we have a field where we get a reference to the file system. Since we don't want to type directly
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=186)** to the DesktopFileSystem, we're going to use its interface instead. In our constructor, we simply pass in a reference to a file system that implements the IFileSystem interface. Now, when we call update config, we pass in a string. It finds the path to where the config file exists. It calls the file system to read the text at that path. It adds the text to the existing config file and then it writes it back to the system. This is a pretty straightforward example, but what happens if we need to change our example and no longer write from the computer, and instead read and write from a web service? Here, we can change the underlying file system logic by just creating a new instance of a class that implements the IFileSystem. In this case, our WebFileSystem is going to use the IFileSystem interface and we're going to change the logic to read directly from the web service itself. As you can see, our class implements both of the public methods of the IFileSystem interface. Now, if we were to reuse the Workspace class, we can simply pass in a reference to a WebFileSystem and the Workspace wouldn't really know or care where it's reading and writing to. All it knows is that the class that's being passed in adheres to IFileSystem and allows it to read text
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=282)** and write text. Refactoring APIs in the interface is very powerful. This only scratches the surface of how you can refactor your code into cleaner, more reusable logic. The real power is in how you design your APIs of your code base and your ability to refactor and keep things consistent throughout your entire development process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (3)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980&t=1)** - I hope you've enjoyed this course as we focused on refactoring at a high level. A lot of the concepts covered in this course will not only help make you a better code architect but also allow you to create cleaner, reusable code bases for your own projects. If you'd like to learn more about using C#, be sure to check out my other courses.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - i (1)


## Instructor

- [[Jesse Freeman]]

## Skills Covered

- C#

## Path Context

### In [[C- Foundations- From Basics to Building Blocks]]
← [[Debugging in C-]] | **4 of 5** | [[Mastering AI Tools for Efficient C- Development]] →

## Appears In

- [[C- Foundations- From Basics to Building Blocks]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)