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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Refactoring%20Tips%20and%20Tricks.md)

![C# Refactoring Tips and Tricks](https://media.licdn.com/dms/image/v2/D4E0DAQECvctNUeYZPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694200036676?e=2147483647&amp;v=beta&amp;t=yrLUQyPchW2JE01Xrf6pG9GPAZdJKWnLS2giMi6L4dc)

# C# Refactoring Tips and Tricks

> Refactoring code makes it cleaner, more performant, and readable. It eliminates unused functionality, renames and reorganizes elements to make their purpose clearer, and allows for more abstraction. This course provides C# developers with tips and tricks for refactoring existing codebases. Learn how to create a baseline for your project to back up and track the results of your work, and start remo

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks) | 43m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Refactoring Strategies]]** (4 videos)
- **[[#2. Before You Refactor]]** (3 videos)
- **[[#3. Optimizing Code]]** (3 videos)
- **[[#4. Creating Clean Code]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980&t=0)** - Hello, my name is Jesse Freeman and in Refactoring Tips and Tricks, we'll learn some strategies for taking an existing code base and cleaning it up.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980&t=8)** I'll start by teaching you how refactoring works, creating a baseline for your project, tools to use, and finally, we'll walk through an example of how to tie it all together.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980&t=17)** These are all strategies I've used in commercial and my own personal projects over the past 20 years as a developer.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/welcome-22867113?u=76281980&t=24)** I hope you enjoy this course as much as I did making it, now let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - hello (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980&t=0)** - [Narrator] Before you get started, this course assumes you're familiar with C# and coding in general and that you're using Visual Studio or some other IDE that provides basic refactoring tools.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980&t=11)** While we won't be writing code, we will be walking through some concepts around object oriented programming, API design and general code maintenance.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-you-should-know-22863228?u=76281980&t=21)** Finally, you should have some experience with version control to help keep your project safe before attempting to perform any sort of refactoring on your own after the course.

> [!info]- Semantic Content
>
> **Env Vars:** ide (1), api (1)
> **Code Keywords:** finally, (1)
> **Tools:** visual studio (1)
> **Speakers:** - [narrator] (1)

#### What is refactoring?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=0)** - [Narrator] What is refactoring?
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=2)** Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code, yet improves its internal structure.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=12)** Refactoring is an important process throughout the development cycle.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=16)** Some of the reasons why you'd want to refactor is that it allows you to clean up the underlying code, so that it's easier to maintain.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=24)** Refactoring also allows you to remove code that is deprecated or no longer needed.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=29)** And finally, refactoring allows you to optimize the underlying code without breaking the existing API.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=37)** This third point is probably the most critical and important one.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=40)** Whenever you're refactoring or cleaning up a code base, it's important to note that refactoring is not about adding new functionality, but instead it focuses on cleaning up existing code.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/what-is-refactoring-22862986?u=76281980&t=52)** The goal of refactoring is to make sure that you don't break other systems, while creating clean, reusable and scalable code that will last you throughout the life of the project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 1. Refactoring Strategies

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a baseline
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=0)** - [Instructor] Before we attempt any type of refactoring to a codebase, it's important to create a baseline so we know where we're starting.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=8)** A baseline is a minimum or starting point used for comparisons.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=12)** This becomes critical over time as you refactor pieces of code and need to compare it to the previous version, or if you mess up, being able to go back and revert to the original codebase.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=25)** Some of the advantages of creating a baseline is that it offers a single stable build of your codebase to revert back to.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=32)** It also enables others on the team to still work with the main codebase without being affected by the refactoring.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=39)** Remember, refactoring really is about cleaning up the underlying code and not the existing APIs, so it should be possible to refactor a codebase while others are working on it without affecting other members of the team.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=52)** And finally, the baseline ensures you have a point of reference to backtrack in case refactoring goes wrong.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=59)** Remember, it's okay to make mistakes when refactoring.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=63)** Sometimes refactoring can break your codebase.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=66)** That's why it's important to do refactoring in small, controlled steps and revert to the baseline when things become unfixable.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=73)** There have been many times where I've been working on a large refactoring and I've gone and broken most of the code and couldn't figure out how to backtrack and get out of it.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=82)** While it may have taken me hours to do the refactoring only to find out that I couldn't get anything salvageable out of it, it was still a good learning experience.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=90)** And I encourage you, when you make a mistake, don't be afraid to revert back and try again.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-a-baseline-22863229?u=76281980&t=96)** Use the things you learned during the first round of refactoring to hopefully not repeat the mistake when you attempt it another time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Incremental steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=0)** - [Instructor] So let's talk about some keys to success when refactoring.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=4)** The most important part of refactoring is to do it in small, controlled, and manageable steps.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=11)** It's easy to get carried away when you begin refactoring by changing large parts of the code base, but this will only cause you more trouble down the line, especially if the code base is very large and you have a lot of additional testing to do.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=24)** The way that I approach refactoring is first, I create a plan of what I want to refactor.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=31)** Once I have a plan, and I've seen the code that I want to change, I understand what I need to change it to, and I've analyzed some of the dependencies, I'm ready to perform the refactoring itself.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=44)** After I've done the refactoring, I have to go through and test the entire code base.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=50)** This is critical.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=51)** Whenever you change code, you need to make sure that it still performs the way that it worked previously.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=58)** Let's talk a little bit more about testing after refactoring.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=62)** Generally, when you're using very large code bases or things with complicated logic, it's best to leverage unit tests for large code bases.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=71)** Especially with a lot of moving parts, it's very hard to go through and manually test everything by hand.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=78)** If you haven't already created unit test for your program, it may be a good time to take a step back and create a few unit tests just to cover the basic APIs.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=88)** The next thing is to automate as much testing as possible.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=93)** There are lots of ways you can do this, unit testing is just one of them.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=97)** You can also write automated scripts that go through the program and act out certain user events in order to see what the results are.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=105)** Being able to automate and reproduce a test over and over again as you continue to change underlying code is critical to make sure that you don't miss any bugs or introduce new ones after refactoring.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=118)** Sometimes your application uses a lot of UI or visual elements that are hard to automate or test with unit testing.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=127)** For this case, try to write visual tests in order to capture these edge cases.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=133)** In my own programs, I've gone and created automated scripts that go through certain screens of an app, take a screenshot, save it to a file, and I can go back later and analyze the screenshots to make sure that things look exactly how I expect them to look.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=148)** And finally, create a testing plan or a script to have QA run through by hand to validate workflows aren't broken.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=156)** This is something I also do in my own project.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=159)** Once I start going through and manually testing parts of an application, I write down the steps in order to replicate the same sort of test.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=168)** This way, I can either rerun it again myself and follow the exact same steps or give it to someone else and have them run it in order to make sure that things aren't broken.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=178)** The goal to creating a successful refactoring is to have a circular workflow.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=184)** You start with creating a baseline of your code base so you have a point of reference in case things go wrong.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=190)** Next, you perform the refactor.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=193)** Once you perform the refactor, you test the entire code base to make sure that nothing is broken.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=198)** And once the testing has passed, you can commit your code, create a new baseline, and start the process over again.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=206)** Testing is the most important part of refactoring.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/incremental-steps-22862984?u=76281980&t=210)** Every time you refactor a code base, you need to be diligent about testing for any unexpected issues and strive to keep your baseline stable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), continue (1), case, (1), finally, (1)
> **CLI Commands:** make (5)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Remove unused code
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=0)** - [Instructor] Refactoring involves removing a lot of unused code.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=4)** That's why I love this quote, "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=12)** Refactoring is a great way to remove unused code.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=16)** Over time, a project collects technical debt.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=20)** Technical debt is a concept in software development that reflects the implied cost of additional work or rework caused by choosing an easy solution now instead of using a better approach that would take longer.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=33)** Refactoring allows you to remove unused parts of the code base and keep the core code clean and easier to maintain.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=41)** Sometimes, we accidentally add technical debt by simply being under a deadline.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=46)** How many times have you worked on a project where you haven't had enough time to fully implement a particular piece of code the way that you wanted to?
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=54)** Sometimes, it's okay to cut corners, but once the deadline is over, take the time to go back and fix that by refactoring and cleaning up the code.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=64)** As your code base grows and grows, there may be parts of the code that can actually just be removed outright.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=70)** Removing old code and deprecated code is just part of the natural process of refactoring a code base.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=76)** You should always make an active effort to remove code that is no longer needed.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=81)** After removing code, always test and update the baseline.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=86)** When removing unused code, the compiler will tell you if something is wrong.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=91)** Even if the code can be compiled, always test any changes to a code base as part of your workflow.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=98)** Leverage your tools to find unused code.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=101)** Visual Studio will show you unused code on its own.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=104)** You can see references to methods as little number counts above their name, which can help identify unused code.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=111)** If you see a method that isn't being referenced anywhere, take a look at removing it.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/remove-unused-code-22865180?u=76281980&t=117)** Use that to help you find what should be stripped out of code during a refactor.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Tools:** visual studio (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### Improve performance
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=0)** - [Narrator] One of the strategies when refactoring a code base is to use refactoring to improve the performance of the underlying code.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=8)** There are lots of ways to benchmark the performance of a code base, and refactoring allows you to make incremental changes to improve performance.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=16)** Some things to keep in mind.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=19)** Sometimes you can get overzealous and try to optimize when it's too early in the development cycle.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=24)** This will just add more development time in the end when you have to go back and undo some of the optimizations.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=31)** To help with this, when you're ready to do optimization, validate the performance before making changes.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=38)** You may feel like something isn't working at the right speed but before you go and start refactoring it, make sure that you actually know how it's performing before you touch the code.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=49)** And finally, only optimize where needed.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=52)** Testing is critical to find the ROI, or return on investment when optimizing.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=57)** Optimizing could be a long and grueling process, so make sure that you're optimizing the right parts of your application where it matters.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=66)** To help figure out where to optimize, we need to understand a little bit about execution time.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=72)** Each method takes time to execute.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=75)** Larger blocks of code which perform lots of actions, especially in loops, can slow down the performance of your code base.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=83)** When we take a look at how the methods in our code base are performing, it's important to calculate the execution time we have for each frame.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=93)** If you want your app to run at 60 frames per second, you will only have 16.6 milliseconds per frame to execute code and redraw the display.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=102)** Any block of code that takes more than five milliseconds to execute could potentially lock up the responsiveness of your app.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=109)** When trying to find bottlenecks in the performance of your code, here's some things to look for.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=115)** Parsing logic.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=116)** Are you going through and parsing large chunks of data?
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=119)** And is that parsing blocking other threads or the UI?
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=124)** Are you running complex code on the main thread?
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=127)** Anything that updates the display or performs calculations could slow down your application.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=132)** Are you doing image manipulation?
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=135)** Randomly generating graphics, creating new graphics, or saving 'em to the file system could be a big source of slowdown.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=142)** Data analysis.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=144)** Are you loading and analyzing raw data and trying to convert it into class properties?
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=150)** Or are you doing this on an external service and need to load that data back up, but break it up into pieces that are easier to use?
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=158)** This could be a bottleneck as well.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=160)** And finally, nested loops.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=163)** Since loops are blocking actions, no other code can execute until a loop is complete.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=168)** So having multiple loops nested inside of each other could really slow down the code execution in general.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=175)** In order for us to time how long a method executes, we can use the stopwatch class.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=181)** In order to use the stopwatch class, simply include System.Diagnostics at the top of your class.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=188)** Then create a new instance of the stopwatch.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=191)** When you're ready to start the stopwatch, just call the start method.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=195)** You can stop the start watch at the end of a methods execution by calling stop, and after you call stop, you can get the elapsed milliseconds in order to see how long it actually took to perform the action.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=209)** Here is an example where we're going to do a hundred thousand loops and add the I value back to a string.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=217)** Before we create the string, we're going to make a new instance of stopwatch and call start.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=223)** Remember, creating strings and variables also impact the performance of a method.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=230)** So we want to make sure that we test all the parts of this logic, including creating the new string before the loop itself.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=237)** Next, we'll loop through and add I back onto our temp string.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=243)** And when we're done, we're going to call stop on the stopwatch.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=247)** Finally, we can output the number of milliseconds to the console.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=252)** Here you can see this took roughly nine seconds to execute.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=256)** Now let's take a look at the same block of code, but instead of using a string, we're going to use the string builder class.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=264)** The string builder class helps when working with large blocks of text, and in this case, we're simply going to append I back into the string builder.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=274)** As you can see, the execution time is now 10 milliseconds.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=278)** That's a huge difference between using a regular string and using the string builder.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=284)** And this is something that we can easily quantify by simply using the stopwatch class itself.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=290)** Remember, refactoring to optimize code is a time consuming process.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=295)** It's not critical to optimize every line of code.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/improve-performance-22862985?u=76281980&t=298)** Just look for the biggest problems and fix those.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), class. (3), this, (1), for. (1), class, (1)
> **CLI Commands:** make (5), find (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** roi (1)
> **Versions:** 16.6 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 2. Before You Refactor

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Use version control
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=0)** - [Instructor] Whenever it comes to refactoring, I can't stress this enough.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=4)** Make sure you use version control.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=6)** Before you attempt to do any kind of refactoring on your own code, make sure that it's backed up and under version control.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=14)** Now, when creating C# projects, there's usually two forms of version control you'll find.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=18)** Either Team Foundation Server or Git.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=22)** I prefer Git because it's what I've used on my own projects and it's what I've used for years now.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=27)** Some of the advantages of using version control are that you're able to track the change history.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=33)** You're also able to compare changes, which is especially important if you think you've messed up and you need to go back and see what you did previously from the baseline in order to fix the current problem.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=45)** You're able to merge changes which is critical when other people are working on the same code base and you're performing a refactor that could affect their versions.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=54)** So, being able to take their versions and your version and merge it together and find the conflicts is instrumental in making sure that you don't create new issues.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=64)** And finally, being able to track author contributions in order to see what has been committed by who in order to roll back changes in case there's a break.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=73)** When you're working in a large team, it's important to figure out who's in charge of merging.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=78)** At best, one person should be in charge of the merging changes into the baseline.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=83)** This person is also in charge of verifying the test before creating a new baseline.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=88)** While this is a lot of work to put on one person's shoulders, it's critical that one person is in charge of making sure that the code base is always stable.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=97)** This should be the person who's most familiar with the architecture and has the most experience with version control in general in order to fix any conflicts.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=106)** The baseline should always be the stable build of the code base, and is usually the master branch or trunk of the project.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=114)** All refactoring should be done in separate branches.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/use-version-control-22864225?u=76281980&t=117)** This helps keep everything clean and when someone is new to the project, they're able to check out the master branch and compile it without getting any errors, or partially completed work that's being done on a refactor, or adding a new feature.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2), git (2)
> **Code Keywords:** finally, (1), break. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Refactor in branches
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=0)** - [Instructor] Let's just take some time aside to talk a little bit about creating branches when doing your refactoring.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=7)** It's always important to use a separate branch for each major refactor.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=12)** When it comes to creating these branches, simply branch directly off of the baseline, which should be the master of your project.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=20)** Once you have your own refactor branch, you're able to make all the changes you need.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=25)** You can go back and compare it to the master.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=27)** And once you're sure that the refactor branch is stable, you can merge it back to master.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=33)** This is the general cycle that we're looking for.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=36)** You create a master baseline, you refactor in a separate branch, you perform your testing, and then you merge it back to master.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=46)** From there, you're able to create a new branch on the next refactor and continue the process.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=52)** If you're working in a team and need to do refactoring, it's best that every member has their own branch off of the baseline.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=60)** You can take your branch and create a new refactor branch off of that, perform your refactoring, merge it back into your own branch, and then once everything is verified to work, merge it back into the baseline.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=75)** The master branch should always be stable.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=78)** This branch should be bug-free and ready to compile or run as soon as it's checked out.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=84)** Since this is the baseline for the project, it should never contain merge errors.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=89)** The goal for the master branch is that it can always be checked out and built without errors.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=95)** Since this is the current live state of the code base, it should never contain a compile error.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=101)** Always isolate major refactors and changes to their own self-contained branches.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/refactor-in-branches-22865179?u=76281980&t=106)** And before merging to master, make sure to retest the entire code base for issues.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for. (1), continue (1), self (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Tools for refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=0)** - [Instructor] It's important to leverage your IDE's own refactoring tools.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=4)** Depending on which editor you're using, you'll have several options for refactoring your code automatically, or you can do it manually by hand.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=13)** Each of these examples will work in Visual Studio on Mac or on Windows.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=18)** The first tool is Rename.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=20)** Renaming a field or a method is the most common type of refactoring you'll do.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=25)** Simply click on the item, Select Rename, and the IDE should replace all references to it in your code base.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=33)** Next is Extract Method.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=36)** Extracting a method allows you to take a block of code, extract it and create a new method for it.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=42)** This is really useful when you have a really long method and you want to break it up into several steps.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=48)** Here's an example of how Extract Method works.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=52)** As you can see, we now have a new method call at the top of the code example, and we've extracted out the code from that area of the previous method and created a new private static method below.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=66)** One of the helpful things about using the Extract Method tool is that it will also take any references to code and provide them as parameters into the method for us.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=77)** As you can see, the new method requires a reference to StringBuilder.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=81)** And since the StringBuilder is referenced previously in the line above, it's automatically going to be passed into the new method for us, and we haven't had to write a single line of code.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=92)** Now let's talk about encapsulating a field.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=96)** This allows you to quickly create a property from a field.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=100)** You can manually do this by converting a field into a getter or a setter, but it's best to let the IDE do it for us.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=108)** As you can see, there's two examples for encapsulating a field.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=113)** The first is when we convert a field into a property, and we're just left with a getter and setter.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=119)** Here you can see we have a public string, MyField, get and set.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=124)** The next example allows us to retain the original field we were using.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=129)** In this case, we have a private string called MyField which we can give a value to, and we have a property for it below it which references the field above.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=142)** Next is Extract Interface.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=145)** This allows you to quickly create an interface from a class' public methods.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=150)** As you can see, when we use Extract Interface, we'll be given the ability to rename the interface, create the file name, and all of the public members for the interface will be listed below.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=165)** By default, we can select all of them, or we can only choose the ones we need for this particular interface.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=172)** And finally, we have Change Signature.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=176)** This allows you to change the order or add and remove parameters for a method.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=181)** This is incredibly powerful, especially when you need to go back and change the way that methods work without breaking other parts of your code base.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=191)** Once you select Change Signature, you'll be presented with a window that shows you the method as it looks and each of the parameters along with their type.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=202)** You can use this to move parameters up or down.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=206)** You can also add default values or add new values or remove them.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/tools-for-refactoring-22866155?u=76281980&t=212)** This is incredibly useful when you're going through and cleaning up the API of your code base.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), public (3), private (2), let (2), static (1)
> **Env Vars:** ide (3), api (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 3. Optimizing Code

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Identify problem areas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=0)** - [Instructor] One of the things that we can do with refactoring is be able to fix problems in our codebase.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=5)** It's always important to identify the problem areas of the codebase before you begin refactoring.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=12)** Usually we refer to these as code smells.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=15)** In a computer program, a code smell, or a bad smell, is any symptom of the source code of a program that possibly indicates a deeper problem.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=25)** Some example of code smells you may recognize are lockups, slowdowns, and crashes, experimental code that is still in the codebase, and inconsistent API naming.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=37)** One of the biggest problems you may encounter when designing a large application are race conditions.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=43)** A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or the system, the operations must be done in a proper sequence to be done correctly.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=60)** This usually happens when a UI element is trying to display data that doesn't exist or hasn't been parsed yet.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=67)** Or this is also common when running different processes on threads and the code that requires the thread to be completed executes before it's done and causes an error.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=79)** The one thing that's hard to track down about race conditions is that sometimes the code will actually work fine.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=86)** And in other cases, there may be a small delay, which causes the race condition to surface.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=92)** Here's some tips for avoiding code smells.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=95)** First, keep an active log of the issues and bugs you find in your program.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=100)** While you should be using a bug tracker of some kind, it always is good to just keep a list of weird things you see happening when you're going and testing out the code.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=110)** Sometimes you might be able to go back to your notes and see a problem has already been documented and you'll know a better way to fix it.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=120)** Next, isolate code you know isn't working correctly until you can fix it.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=125)** If you know that a part of the codebase isn't functioning correctly, make sure to keep it separate from the main line.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=133)** Try to wrap it in a class that can use a try catch statement in order to catch any errors or document it in the code itself with comments letting others know that there's something wrong with that block of code.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=146)** And finally, avoid hacks or quick fixes.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=150)** Take the time to write clean code.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=153)** Before you do any refactoring to fix an issue in your codebase, pay attention to the code's dependencies in your project.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/identify-problem-areas-22862983?u=76281980&t=161)** Identify what will be affected before attempting to clean it up or refactor your problematic code so you can track down bugs easier when the codebase is cleaner.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** before you begin (1)

#### Common optimizations
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=0)** - [Instructor] There are a lot of things we can do when optimizing a code base.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=4)** It's important to take a look at some common optimization in order to take a high level pass at cleaning up your code before going granular on very specific pieces of code that may be giving you problems.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=17)** The first is that loops are bad.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=20)** Loops block other code from executing.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=23)** If you need to use a loop that has to perform a lot of calculations, try to break it up over several frames or run it in its own thread.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=32)** One of the ways we used to handle this before threads were available, was green threading.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=38)** In computer programming, green threads are threads that are scheduled by a runtime library or virtual machine instead of natively by the underlying operating system.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=49)** Imagine you have a long loop.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=51)** You can actually break it up over the course of several frames by keeping track of where you start the loop.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=57)** When the loop runs, add up the time it takes to execute each loop and if it hits a threshold of two to three milliseconds, exit and continue the loop on the next frame until it's completed.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=70)** Your program has finite resources, so you can't always throw code into extra threads and expect it not to slow down.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=77)** Sometimes you need to manually control how code executes so it doesn't block other processes.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=83)** One of the best ways to do this is by avoiding nested loops.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=87)** While loops are bad on their own, nested loops are even worse.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=92)** Try to run a single loop and perform additional actions after in separate loops to avoid locking up the main thread.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=100)** One of the other things you can do is simplify your math, division, modulus, square root, are all expensive.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=107)** Try multiplying instead of dividing, such as four divided by two should be four, multiplied by 0.5.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=117)** Object pooling is also another good technique.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=120)** Creating new instances of classes is expensive.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=124)** Avoid using the new keyword as much as possible and implement object pooling where it makes sense.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=131)** And finally, avoid reflection.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=134)** Reflection in C# allows you to find out details of an object, method, and create objects, or invoke methods at runtime.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=142)** Reflection is very expensive.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=145)** If you need to use reflection, cache the results so it's not being used at runtime.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=150)** Store the values in your class so that if you need to figure out more about the class over time, you're not recalling reflection to get those properties, and instead you're using the values you got on the first pass.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=163)** Finally, take the performance hit upfront.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=167)** Perform complex calculations when the app is first loading, you can cache all the data, store the values in persistent objects, and reuse objects as much as possible so things aren't being done when the app is running.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=181)** Old programs which ran on computers with limited resources used to actually pre-calculate a lot of its own math ahead of time.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=190)** Finally, take advantage of the fact that users expect an application to take a little bit longer to load up and use that time to your advantage.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/common-optimizations-22869079?u=76281980&t=200)** Try to avoid doing any of this while the application is running which might frustrate the user or lock up the app while the user is trying to perform an action.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), pass (2), continue (1), throw (1)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Best Practices:** avoid doing (1)
> **Speakers:** - [instructor] (1)

#### Inlining code
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=0)** - [Instructor] Let's take a moment to talk about inline code.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=4)** This is usually an optimization that happens during compiling when referenced methods are added directly to the caller.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=10)** Normally, this is the job of the compiler itself, but sometimes the compiler isn't smart enough to know when to correctly inline your own code.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=19)** This can actually be done manually to help speed up performance in some use cases.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=25)** This is called micro-optimization.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=28)** Micro-optimization is the process of meticulously tuning small sections of code in order to address a perceived deficiency in some aspect of its operation, excessive memory usage, poor performance, and the list goes on.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=43)** Let's take a look at this example and see how it executes with all the code inline.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=49)** As you can see, we are going back to an earlier example of where we're going to append a string into a string builder and see how long it takes to execute.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=60)** But what's changed is that we've now wrapped this code in another for loop.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=65)** We want to perform this action 1,000 times.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=68)** So our outer loop is 1,000 loops, and inside of this loop, we're calling a nested loop to perform 100,000 executions of concatenating j into the string builder.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=82)** When we run this and take a look at the results, we see that the average time to execute each of these loops is seven milliseconds.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=92)** Now, if we look at example two, we've taken the nested loop outside and created a new method.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=99)** So every time we iterate over this block of code, we are now calling an external method to calculate what should be added into the string builder.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=109)** When we rerun the results, you can see that the new average is eight milliseconds.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=115)** By calling an external method, we've incurred a little bit of overhead, which has now added an extra millisecond onto our average.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=125)** Normally, this is negligible.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=128)** In object-oriented programming, it's best to have reusable code logic.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=132)** But for performance, you may need to manually inline code like this.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=137)** One example I've used in my own code is treating 1D arrays as 2D arrays.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=144)** Since 1D arrays are faster than 2D arrays, it's easier to simply keep all the values in a single array.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=152)** But sometimes I need to reference positions by an x- and y-value.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=156)** And in order to do that, I need to calculate that value.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=160)** Since that type of calculation requires division and modulus, it's a very expensive calculation.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=166)** And in game development, it's a common thing that I use throughout the tile map, all the way to rendering sprites.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=174)** Because I use it everywhere, I've made that method static and I use it as a utility.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=180)** But when calculating thousands of sprites or very large tile maps, there's a penalty that's incurred.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/inlining-code-22865178?u=76281980&t=188)** So a lot of the times, I'll go and take the code itself to perform the calculation and simply inline it manually where I need it, especially when it's going to be executed lots of times over a single frame.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), static (1)
> **Definitions:** is called (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 4. Creating Clean Code

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Code readability
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=0)** - [Narrator] One of the things that refactoring can really do is help with code readability.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=5)** The cleaner your code is, the easier it is to maintain and for others to use.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=11)** Here's some areas to focus on when you're cleaning up the code base while refactoring.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=16)** Method names should be consistent and intuitive.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=20)** Make sure that APIs are consistent throughout the code base.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=24)** Naming conventions should be maintained consistently.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=28)** And finally, classes should implement interfaces and be typed to them.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=33)** When refactoring, focus on public APIs first.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=37)** Refactoring is a way to clean up all the public facing APIs, which is important, especially when creating open source projects that other developers depend on.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=46)** Since public APIs are accessible by all code, they should be the easiest to use.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=52)** Here's some tips on creating clean APIs.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=56)** Start by having clear property names so others know what the property is being used for.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=63)** Have consistent method names across all of your public APIs.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=68)** Limit the number of parameters for a method.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=71)** If you find you have methods that require a lot of parameters, try to create another class in order to set values on that and pass into the method so it's easier to compile against.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=83)** And finally, document your code.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=85)** This is not only important for you to remember what your code does, but it's also imperative when you're generating out documentation that others rely on to use your code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=96)** With a little bit of work, it's easy to create a clean API for your code base.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=101)** If your code is complex or requires specific order of execution, try creating higher level classes or APIs.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/code-readability-22867114?u=76281980&t=109)** This can sit on top of complex code logic to provide a cleaner way of working with the underlying code.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), finally, (2), for. (1), require (1), pass (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Extract methods
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=0)** - [Instructor] As I've mentioned earlier, extracting methods is a very powerful tool when it comes to refactoring your code base.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=7)** One of the strengths of object-oriented programming is being able to extend classes and create new logic by overriding methods with new code.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=17)** Here are some tips for writing smaller methods.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=20)** First, limit the methods to a specific task.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=24)** Two, think ahead of how a class could be extended and what methods should be marked as virtual.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=31)** Three, balance the trade-off of performance with scalability.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=36)** And four, not every problem requires a hammer.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=40)** Use smaller methods when it makes sense.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=44)** Let's look at an example of inheritance here.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=47)** We want to design classes with inheritance in mind.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=51)** This is a classic example.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=53)** We're going to create an animal, and while you can imagine that the animal class has lots of other methods, we're going to focus solely on one method here called speak.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=65)** Inside of this method is some business logic that allows the code to actually display what the animal speaks on the screen.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=73)** Right now, it's not important.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=75)** All we need to know is that the animal class has one method, and that method allows it to speak.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=82)** Since we plan on creating different animals that all need to speak, we're going to go ahead and mark this method as virtual so that we can override it.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=92)** Here are two examples of animals that are able to speak.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=96)** First, we have a dog, which extends the animal class and inherits all of the logic from animal.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=104)** In this case, we're going to have the dog speak, so we're going to override the animal speak method.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=110)** Since we're relying on some logic inside of the animal class, we're going to call the base.Speak method, and this will call the parent class and perform that action.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=121)** Finally, we add the code specific to our dog.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=125)** In this case, we're going to write to the console, bark.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=130)** Now a similar animal is going to be a cat.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=132)** We're going to follow the same steps as we did with dog, but in this case, we're going to have the cat output to the console, meow.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=141)** Both of these examples work really well with animals that can speak, but what happens when we create an animal that can't speak?
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=149)** Here's a special use case.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=152)** Here's what happens when we don't need the parents' class logic, since we can't go ahead and delete the logic from animal, but we need to make sure that all animals can speak, our slug is going to override the speak method, but it's not going to call the base speak method and it's not going to have any logic, so it just won't speak at all.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=177)** Here's a very specific case of how we took a method that may have lots of moving parts, but we're able to override it and simply add in the logic we need per use case.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=189)** This one example can be scaled up to any place where you have a method that has lots of logic inside of it.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=197)** By breaking up each part of logic inside of a method into smaller methods, it becomes easier to override a specific piece of logic and create a new use case by extending it and creating a one-off class.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=213)** Limiting the logic and methods helps create clean code.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=217)** The smaller the logic is in each method, the easier it is to maintain.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/extract-methods-22866156?u=76281980&t=222)** Always try to refactor your large code blocks into smaller, more reusable ones.

> [!info]- Semantic Content
>
> **Code Keywords:** override (5), case, (3), case. (2), let (1), extends (1)
> **CLI Commands:** cat (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Create clean APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=0)** - [Narrator] After refactoring methods, focus on your code base's APIs.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=5)** While we've talked about maintaining clean and readable code, let's go through some specific ways to refactor APIs.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=14)** For this, we're going to focus on extracting interfaces.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=18)** When writing code from scratch, it's sometimes difficult to plan out what interfaces you'll actually need.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=24)** Once you have your code in place, leverage extract interface to help clean up the implementation of your classes.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=31)** Here's some reasons why interfaces are important.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=35)** First, interfaces allow you to visually focus on just the public properties and methods of a class.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=42)** This is important when trying to clean up an API because you don't have to get lost in the actual logic that's performing the action of a method.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=52)** Simply go to the interface and look at what's publicly available to other classes that want to use it.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=58)** Second, you should always be coding to interfaces and not implementations.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=64)** This is just good object-oriented code design.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=69)** And finally, interfaces allow you to hide complex business logic from other classes in simple, clean sets of APIs.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=79)** The most important thing to remember is that consistency is key.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=83)** First, set some guidelines for your APIs and stick to them.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=88)** If you decide to change those guidelines, refactor the code accordingly.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=93)** Remember that each change to an API could have serious consequences for external code that depends on them.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=100)** Let's take a look at an API example.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=103)** Here's an example of a class we're going to use to access text from the file system.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=108)** I've created a simple class called DesktopFileSystem.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=113)** It has two functions.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=115)** It can read text and write text from the file system.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=120)** Now, it's bad for us to create another class that depends on this without having an interface first.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=127)** So what we're going to do is extract an interface from the DesktopFileSystem.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=133)** When we go to extract the interface, we're presented with the extract interface window.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=138)** Here we can choose the two public methods and rename the interface.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=143)** In this case, we're going to make it a little bit more generic and just call it IFileSystem.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=149)** We'll include read text and write text as well.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=153)** Now we have an IFileSystem interface.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=157)** It's a clean interface where we can type to it instead of the DesktopFileSystem class.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=163)** Let's take a look at how we would actually implement this logic.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=168)** Here's a simple class called Workspace.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=171)** The Workspace is designed to create and update a config file that's used by the rest of our application.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=178)** At the top of our Workspace class, we have a field where we get a reference to the file system.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=185)** Since we don't want to type directly to the DesktopFileSystem, we're going to use its interface instead.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=191)** In our constructor, we simply pass in a reference to a file system that implements the IFileSystem interface.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=199)** Now, when we call update config, we pass in a string.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=205)** It finds the path to where the config file exists.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=209)** It calls the file system to read the text at that path.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=213)** It adds the text to the existing config file and then it writes it back to the system.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=221)** This is a pretty straightforward example, but what happens if we need to change our example and no longer write from the computer, and instead read and write from a web service?
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=233)** Here, we can change the underlying file system logic by just creating a new instance of a class that implements the IFileSystem.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=242)** In this case, our WebFileSystem is going to use the IFileSystem interface and we're going to change the logic to read directly from the web service itself.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=254)** As you can see, our class implements both of the public methods of the IFileSystem interface.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=262)** Now, if we were to reuse the Workspace class, we can simply pass in a reference to a WebFileSystem and the Workspace wouldn't really know or care where it's reading and writing to.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=274)** All it knows is that the class that's being passed in adheres to IFileSystem and allows it to read text and write text.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=283)** Refactoring APIs in the interface is very powerful.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=287)** This only scratches the surface of how you can refactor your code into cleaner, more reusable logic.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/create-clean-apis-22866157?u=76281980&t=294)** The real power is in how you design your APIs of your code base and your ability to refactor and keep things consistent throughout your entire development process.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (14), let (3), public (3), pass (3), implements (3)
> **Env Vars:** api (3)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980&t=1)** - I hope you've enjoyed this course as we focused on refactoring at a high level.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980&t=5)** A lot of the concepts covered in this course will not only help make you a better code architect but also allow you to create cleaner, reusable code bases for your own projects.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-refactoring-tips-and-tricks/next-steps-22867112?u=76281980&t=14)** If you'd like to learn more about using C#, be sure to check out my other courses.

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