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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Delegates%2C%20Events%2C%20and%20Lambdas.md)

![C#: Delegates, Events, and Lambdas](https://media.licdn.com/dms/image/v2/C560DAQFKly2MCihgYw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642535785778?e=2147483647&amp;v=beta&amp;t=6i9V1OUzqaOx9JScjKsrMEgApKMLmJhuMWYLM5kWapk)

# C#: Delegates, Events, and Lambdas

> C# provides different function types to fit a variety of real-world development scenarios. In this course, Joe Marini explores three important features of C#: Delegates, events, and lambdas. First, Joe shows how delegates are used to provide interchangeable functions during the lifetime of a program, which makes it easy to modify the functionality of an app on the fly. He then covers events, which

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458) | 1h 7m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Getting Started]]** (2 videos)
- **2. C# Delegates** (5 videos)
- **3. C# Events** (4 videos)
- **4. C# Lambdas** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using C# delegates, events, and lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-c-sharp-delegates-events-and-lambdas-23315218?u=76281980)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you start this course, there are some concepts that you should already be familiar with.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=4)** First, you should already know the basics of the C# language, such as how to write functions, declare variables, write statements, and so on.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=12)** We're also going to be using some common C# data structures, like arrays and lists during the course, so you should have some familiarity with those as well.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=20)** Learning C# is a great course for learning all about the basics of the C# language.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=25)** So definitely check that out if your C# knowledge needs some refreshing.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=29)** You could also check out C# Collections if you need to brush up on your knowledge of C# data structures.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=35)** I'm also going to assume that you already know about common object-oriented programming concepts, such as classes, methods, member variables, and so on.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=43)** If you need to get up to speed with object-oriented programming, check out Fundamentals of Programming: Object-Oriented Design.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=50)** This course will tell you all you need to know about object-oriented design principles.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=54)** Finally, you should know how to use an integrated development environment, or IDE, to write code and run applications.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=61)** I'm going to use Visual Studio Community Edition in this course, but if you have another version of Visual Studio, such as the professional or enterprise versions, those should work fine as well.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=72)** You can also use any other text editor, like Visual Studio Code, Atom, Sublime Text, and so on if you prefer to go that way.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/what-you-should-know?u=76281980&t=80)** Once you feel comfortable with these concepts, you're ready to get started on the course.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), atom (1), sublime (1)
> **Analogies:** such as (3)
> **Code Keywords:** finally, (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=0)** - [Instructor] I've included exercise files to accompany each of the examples in this course and you can download them from the GitHub repository that is associated with this course located at the link that you see here.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=12)** I've copied the exercise files folder to my desktop to make it easy to work with, but you can place the folder anywhere on your computer that you like.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=20)** Inside the top level folder, you'll find two folders named Start and Finished.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=25)** Each of these folders contain folders that corresponds to the chapters in the course.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=30)** The Finished folder contains all of the examples in their completed state in case you want to skip ahead and see how each one works.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=38)** The Start folder contains all of the examples in their beginning state and I'm going to be using these examples to build towards the finished state.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=47)** Now how you use these examples is entirely up to you.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=50)** If you want to open each unfinished example in the start state and work along with me towards the finished state, well then, that's great.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=57)** If you'd rather skip ahead and look at each finished example, well, that's great too.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/exercise-files-on-github?u=76281980&t=61)** Once you have the exercise files folder where you want it on your computer, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (1), find (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Setting up the developer environment
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=0)** - [Instructor] In this course, we're going to be building C# applications using Visual Studio Community Edition.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=6)** This IDE is available as a free download from Microsoft for both Mac and Windows.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=11)** If you already have the professional or the enterprise version of Visual Studio, that's also fine.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=16)** If you don't have it, go to [visualstudio.com](https://visualstudio.com) and click on the download button for the free developer tools.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=23)** For Windows, you can see that you can download the Community Edition here and there's also a download for Mac.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=28)** You'll be prompted for where to save the installer and once the download is complete, run the installer and you'll be all set to go.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=35)** When you start up Visual Studio Community Edition for the first time, there will be a short registration process you must complete.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=41)** You can, of course, also use any other text editor you'd like, such as Visual Studio Code or Atom or Sublime Text or any other editor.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=50)** If you want to go that route, then you'll need to make sure that the .NET framework is installed on your computer.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=56)** Now, when you install Visual Studio, either for Mac or Windows, that's automatically taken care of, but if you want to use a different editor, then go to the downloads page for the .NET SDK.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=66)** Get the right version for your operating system.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=68)** You can see that there's versions for Windows, Linux, and Mac, and then run the installation instructions.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=73)** Now, make sure you install the SDK, not the runtime version.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=77)** You need the SDK in order to build the apps.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=80)** Once you've run the installer for your computer, open up a terminal window.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=84)** And once you have a terminal window open, type dotnet --version to make sure everything installed correctly and make sure the version number is at least .NET 5.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=93)** I'm using .NET 6 and you should be too, because it's the latest release, but you'll need it at least .NET 5 for the course.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/setting-up-the-developer-environment?u=76281980&t=99)** So once you've installed the editor that you're going to use and you have the .NET SDK, if you need to get it, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Env Vars:** net (6), sdk (4), ide (1)
> **Tools:** visual studio (5), terminal (2), atom (1), sublime (1)
> **CLI Commands:** make (4), dotnet (1)
> **Prerequisites:** you'll need (2), install (2)
> **UI Navigation:** go to (2), click on (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of C# delegates, events, and lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=0)** - [Instructor] During the course of the early evolution of C#, the language added support for various ways of defining functions.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=7)** So way back in C# 1.0 the core concept of the delegate was introduced.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=13)** In C# 2.0 the ability to define the delegate using an anonymous syntax was added.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=19)** And then in C# 3 the concept of Lambda functions was added.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=24)** So let's take a brief look at each of these three function types, what they are?
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=28)** How they work?
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=29)** And most importantly, why you'd want to use them.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=32)** So first up are delegates.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=33)** You can think of delegates as being simply placeholders for functions that will be called at some point.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=38)** The same way that you can declare a variable that holds an integer or a string, you can declare a variable that will hold a reference to a function.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=47)** This gives you a way to change the function that will be called at runtime during the execution of your program.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=53)** In other words, delegates give you a way to logically separate different parts of your application from each other without having to know in advance, what all the modules are going to be.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=62)** Instead of calling a single hard-coded function, you can swap out the function you want to call while the program is running based upon your programs needs.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=71)** Even better, delegates can be dynamically chained together, and called in order one after the other.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=78)** And we'll examine that more in-depth later in the course.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=81)** Next up are events.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=83)** Events are based on delegates, and they provide a way for your application to both broadcast and receive messages to, and from the rest of your application or even to other applications or the operating system.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=95)** So for example, your application might have some code that broadcasts a message whenever something interesting happens, the result of a variable changes or the user has interacted with a UI element.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=106)** It's really just up to you.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=107)** That code is the broadcaster, or sometimes it's called the publisher of the event.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=112)** Now that event might be listened to by another application or perhaps, just another part of your own program.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=119)** Those functions are called event listeners or subscribers, and your application can have any number of event broadcasters and listeners.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=127)** This pattern is very useful in scenarios where you need to communicate asynchronously with other code, or when you don't know in advance how many other interested parties there may be for various changes in the program?
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=139)** And finally, we have Lambda functions.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=142)** Lambda are essentially the same as regular delegates, but they are written using a more concise syntax.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/overview-of-c-sharp-delegates-events-and-lambdas?u=76281980&t=147)** They provide another way of writing something called an anonymous function, which we'll see more of later on in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), lambda (3), let (1), finally, (1)
> **Versions:** 1.0 (1), 2.0 (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Common delegate, event, and lambda scenarios
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=0)** - [Instructor] Okay, now that we've covered what the different function types are, let's consider some scenarios where you might use them in your app development.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=7)** Each of the function types that we're going to examine in this course are useful in various different scenarios that commonly occur in .NET development.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=15)** So let's consider delegates first.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=17)** As I said earlier, delegates provide an important ability.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=20)** They give you a way to separate functional areas of your program from each other.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=25)** So imagine that we have a company that needs to ship products around the world, and it's necessary to calculate various taxes and fees for each shipping destination.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=35)** Well, you could just write a function called calculate shipping, which takes an argument that specifies the destination and then returns the adjusted price.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=43)** And that might work if you only have a small number of destinations, but consider the kind of nightmare this could turn into if the company grows and has thousands or tens of thousands of different tax jurisdictions to deal with, each with its own fees and charges.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=58)** Well, one way to avoid that problem is by breaking the calculation logic down into separate delegates.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=63)** That way, the program can simply select the appropriate function from a list of locations to perform the calculation at runtime, and each one is kept separate from the others.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=73)** Each location would then be responsible for keeping track of its own fees and rules.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=79)** Then as the company grows, you can add new functions as they're needed without having to change the code that handles the shipping logic.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=86)** This model is much more flexible, extensible, and easier to debug.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=91)** So, next, let's consider events.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=93)** Suppose we have a program that needs to know whenever the contents of a folder have changed.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=97)** Now you could just write some code that periodically looks at the folder and compares its current state to the previous one, but that's pretty inefficient.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=105)** And it would get a whole lot worse if you had many different folders to keep track of.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=109)** Instead, your program could just listen for an event from the operating system indicating that the contents of a folder had changed.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=117)** This would eliminate the need to poll each individual folder, and again it's much more modular, extensible, and easier to debug.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=124)** As far as lambdas are concerned, they are essentially a shorthand way of writing delegates.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=129)** So you can use them wherever you would normally use regular delegates.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/common-delegate-event-and-lambda-scenarios?u=76281980&t=133)** And since it's necessary to first understand how delegates work, I'm going to revisit the lambda scenario later in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), lambda (1)
> **Env Vars:** net (1)
> **Cross-References:** later in (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. C# Delegates

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating C# delegates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=0)** - [Instructor] Delegates are created using the delegate keyword along with a function signature that defines the type of function the delegate will refer to.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=9)** This allows the C# compiler to make delegates type safe.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=14)** That is the compiler will check to make sure that the delegate being called has the right number and types of arguments, which helps prevent bugs in your program.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=23)** So in this case, I'm defining a delegate type named MyDelegate that refers to a function that takes an integer and a string as arguments, and returns an integer result.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=34)** Next, I define a function that actually implements the logic of the delegate.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=38)** I can define as many of these as I want based upon my program's needs.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=43)** To make use of the delegate, you assign the function to the delegate and call it like you would any other function.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=50)** So in this case, I have a variable named f, which has the type of MyDelegate, which I declared earlier.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=56)** And I assigned the function MyFunc to the f variable.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=60)** And then I can just call the function f like I would any other function.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=64)** Now, if you've ever worked with callback functions in JavaScript or function pointers in a language like C or C++, then this will probably look familiar to you but there's no substitute for seeing it in action.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=76)** So let's jump over to some real code and see how all of this works.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=80)** All right, so here in Visual Studio, let's open up the project named BasicDelegates.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=84)** And we'll open up the Program.cs file as well.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=87)** So this program, like the other examples used in this course is a console application.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=93)** It just uses the command line and terminal to accept input and display output.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=99)** Okay, so first, let's define the delegate type.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=102)** So I'm going to make a public, and I'm going to use the delegate keyword.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=106)** And it will return a string.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=108)** And I'll just simply call the delegate MyDelegate.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=112)** And it will take two integers, arg1 and arg2.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=118)** All right?
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=119)** So now let's implement a couple of functions that will serve as a version of the delegate in each case.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=125)** So I'm going to go ahead and scroll down to my program class, and I'll make two functions.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=131)** So one is going to return a string.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=133)** It's going to be called func1.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=135)** And func1 is going to take two integers, a and b.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=142)** And it's going to return a plus b, and then I've got to convert that to a string because it returns a string.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=151)** All right?
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=152)** And then I'll just copy this.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=155)** And paste it.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=156)** And we'll call the other one func2.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=159)** And func2 will multiply the two numbers together.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=163)** All right, so each of these functions take two integer arguments and return a string.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=169)** The implementations of each function are different.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=172)** One adds the numbers while the other one multiplies them.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=174)** But each result is returned as a string type.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=177)** So now all that's left to do is create an instance of the delegate and then exercise the code.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=185)** Let's go ahead and do that.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=186)** So I'll make a variable called MyDelegate.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=192)** And it's going to be named f.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=195)** And I'll initialize it to be the value of func1.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=199)** And then I'll call Console.WriteLine, and I'll output the number from func1 is,
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=213)** and then I'll simply call f with 10 and 20 as the arguments, all right?
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=220)** And then on the next line, I'll simply reassign f to be equal to func2.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=227)** I'll copy and paste that.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=228)** Oh, got to have that semicolon in there.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=231)** And we'll call this one the number from func2.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=235)** And now I'm calling f again but it's been reassigned, all right?
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=238)** So let's just walk through this code really quick.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=240)** First line creates a variable f of type MyDelegate.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=244)** That's the type of our delegate from earlier.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=246)** We declared it up here.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=247)** It's right here, okay?
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=249)** And assigned it to the first function, func1.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=252)** And then we write some console output after calling the function.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=256)** Then we reassign it to func2 and then we Console.WriteLine the output again.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=261)** So this demonstrates that you can change the function that the delegate refers to on the fly.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=266)** So each time we call the function f, it's the same parameters but the outputs going to be different.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=270)** So let's go ahead and save this.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=273)** And let's run the program.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=277)** And when the program builds and runs, you can see that in the first case, we have 10 plus 20, which is 30 and then we have 10 times 20, which is 200.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=287)** So using a delegate, we were able to switch between two different functions while the program was running.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=293)** Now, in this example, I've used static class functions to implement my delegates.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=297)** But you can also use instance methods of classes as delegates as well.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=302)** So let's go back to the code editor.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=305)** And I'll close that.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=306)** Okay.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=308)** And you might see I have a class definition up here named MyClass and it has a single method that matches the signature of our delegate.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=319)** So it returns a string, and take two integers as arguments.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=322)** So to use this function as a delegate, we first have to create an instance of the class and then assign our delegate variable to the instance method.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=331)** So let's do that.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=335)** I'll make a new instance of MyClass.
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=339)** And now I'm going to write f equals, and then I have to de-reference from the class, and I'm going to call instanceMethod1.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=349)** Well, I'm not going to call, I'm just going to refer to it, and then I'll copy and paste the Console.WriteLine, and now the number from instanceMethod is, and we'll call it with the same parameters, 10 and 20.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=367)** So we instantiate the class, we assign instanceMethod1 to our delegate variable and at this point, we can call the delegate like before.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=376)** So let's go ahead and let's save and let's run the program again.
>
> **[6:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=383)** All right, and you can see here that when we run the program, we have three different results.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=387)** So here's the original two examples, 10 plus 20 and 10 times 20.
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-delegates?u=76281980&t=392)** And now we're showing that we can create delegates and assign them to both static and instance functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), let (13), case, (3), class, (3), type. (2)
> **CLI Commands:** make (7)
> **Code Identifiers:** instancemethod1 (2), instancemethod (1)
> **Tools:** visual studio (1), command line (1), terminal (1)
> **Definitions:** refers to (2), is a  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Using anonymous delegates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=0)** - [Instructor] In addition to explicitly declaring and naming your delegate functions, they can also be created as what are called anonymous functions, and this can be useful if your delegate is a one-off function or a function that is small enough to be declared in line in order to improve the readability of your code.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=17)** So to begin, we declare the type of the delegate the same way as we did in a previous lesson, by using the delegate keyword.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=24)** The difference, however, is that instead of writing a named function and then assigning that function to a variable of the delegate type, we just declare the function directly in line with no name.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=36)** So here you can see I've declared a variable with a type of the delegate.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=39)** And then I use the keyword delegate to declare the implementation of the delegate, right in line with the assignment.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=46)** Now, functionally, this is no different than declaring a regular function and then doing the assignment in two different steps.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=52)** It's just sometimes a little more convenient to do it this way.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=55)** When the delegate is relatively simple and fits within a few lines of code.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=60)** All right, let's see this in action.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=62)** So here in Visual Studio, I've opened the project named anonymous delegates in the anonymous delegates folder.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=68)** And let's go ahead and open up the program file.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=71)** And you'll notice at the top of the program, I have declared a, MyDelegate type, just like in a previous video, however, to implement the delegate in this example, we'll use an anonymous delegate.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=82)** So here in my main function I'll make a new type, MyDelegate f.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=88)** In this case, I'll use the keyword delegate, and it's going to take two arguments and it's going to return (arg1 plus arg2).ToString.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=110)** All right, so let's examine this in detail, just like in a previous video, I have a variable named f that will hold a reference to a function of type MyDelegate.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=121)** In this case, though, I'm using the delegate keyword again, but in this context, it is used to declare the function right there in line in the code.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=131)** So this function takes two integers, adds them together and returns the result as a string.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=136)** And then we'll go ahead and write that out to the console window and we'll call it with 10 and 20.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=146)** All right, let's save that.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=150)** Let's run.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=152)** And when I run the app, you can see that the result of adding 10 and 20 together produces the string result of 30.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=160)** So anonymous functions can be used to increase your code's readability by declaring the implementation of the delegate right in line with it, where it is used.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-anonymous-delegates?u=76281980&t=170)** And you'll sometimes see this with event handlers, which we'll see more of later in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), type, (3), case, (2), return ( (1)
> **Cross-References:** previous video (2), later in (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using composable delegates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=0)** - [Teacher] One interesting feature of delegates that we will explore in this lesson is that they are composable.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=6)** In other words, you can chain delegates together and each one will be called in the order that it was added to the chain.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=14)** So let's look at a conceptual example.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=17)** Suppose I declare a delegate type that takes two arguments and returns a result, and then I write three delegate implementations, D1, D2, and D3, that all have the same function signature.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=31)** Now in my code, I assign each of these functions, two delegate variables, okay, F1, F2, and F3.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=38)** Then I can chain them together using the plus operator or the plus equals operator.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=44)** And in this case, I've assigned this chain to the delegate named All.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=49)** So now the All delegate combines the F1, F2, and F3 delegate functions.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=56)** So once I've done this and I invoke the all delegate function, then each of these delegates will be called in order.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=64)** And similarly I can use the minus or minus equals operator to remove delegates from the call chain.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=71)** So there are a few things that you need to keep in mind when using composable delegates.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=76)** First, if a delegate in the calling chain throws an exception that is not handled within that delegate, then control will pass back to the caller of the delegate and all the remaining delegates in the chain will be skipped.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=90)** Second, if your delegates have return values, then the return value that's returned to the original caller will be that of the last delegate in the chain.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=100)** So if you want to pass results between each delegate, you can do so by using reference parameters, any changes made to these parameters by one delegate will be passed along to the next one.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=110)** All right, enough theory, let's actually write some code and try all of this out.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=114)** So here in Visual Studio, I have opened my composable delegates project, and let's open up the program file, all right.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=123)** So you can see here at the top, I've declared a delegate function for a function that takes two integer arguments and in the program class, these two functions, func1 and func2, provide implementations of that delegate.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=137)** One of them adds two numbers, the other one multiplies the two numbers, and each delegate also writes out the result to the console window.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=147)** So now let's exercise the functions, right?
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=151)** These first two lines here should look familiar.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=155)** So all we're doing is calling the delegate variables, right?
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=159)** And we're assigning the F1 and F2 variables to func1 and func2, I've got a couple of local variables, and then we just simply call the delegates.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=169)** So I'm going to add a line that creates a composed delegate from both F1 and F2, and I'll name it F1F2.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=181)** And that's going to be equal to F1 plus F2.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=186)** So I'm using the plus operator to create a delegate chain of F1 and F2, and I've got my new delegate called F1F2.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=194)** And then I'll just add a line of code down here to call it.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=197)** So that'll be F1F2, and we'll call that with 10 and 20, actually let's call it with A and B like we do with the other ones.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=205)** All right, so let's save and let's run this.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=211)** All right, so when the program is run, you can see the output from the first two individual delegate calls.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=217)** So 10 plus 20 is 30, and 10 times 20 is 200.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=221)** So the next call invokes the delegate chain.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=224)** And you can see the output from each of the functions here.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=227)** So they're being called in order.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=229)** All right and let's go back to the code.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=231)** And now let's try using the minus operator to subtract off one of the delegates.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=237)** So what I'm going to do is write F1F2 minus equals F1.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=244)** So we'll get rid of the F1 delegate, and then we'll just call it again.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=249)** We'll call it AB, and actually let's just call it with B both times, so both values will be 20, right?
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=257)** So now let's run the code again.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=262)** And now down here, you can see after our original results, the number from F1F2 is now 400, because we're calling it with two 20s, right?
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=271)** And now we were only calling the second delegate in the chain, it just multiplies the numbers.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=275)** So 20 times 20 is 200.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=278)** So that should give you a sense of how delegates can be dynamically assembled at runtime to be invoked by a single function call.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=285)** But let's get a little more advanced now, all right?
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=287)** So let's modify the delegate and let's add a reference parameter.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=292)** And what I'm going to do, actually, is open up a different project.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=296)** So I'm going to open up a project and you can see I've got Composable2.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=303)** So let's open up Composable2, and I'm not going to save the solution for the first one.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=308)** All right so let's open up the program file.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=310)** Okay so we have the same code as in the previous example, but what we're going to do now is modify the delegate and add a reference parameter as the delegate declaration up here.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=321)** Now that this is a reference, I can change the value of this parameter, all right?
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=326)** And it will take effect outside of the function.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=329)** And we're going to use this ability to pass changes from one delegate to the next.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=333)** So now let's modify the two delegates to match the function signature.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=338)** So we need refs in front of each of these now, and these functions perform the same operations as in the previous example, but now let's have the first function also increase the value of Arg2 by 20.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=354)** All right, now normally this would have no effect, once the function returned, but because Arg2 is now passed by reference, its value is going to change.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=362)** So let's run this and see what happens.
>
> **[6:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=366)** Oops, I've got an error.
>
> **[6:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=371)** Oh right, I have to pass each of these by reference.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=377)** So I got to put the reference definition in here when I call the functions.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=381)** All right, let's go ahead and run this, right.
>
> **[6:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=385)** Now, you can see that when we run the code, the value of B is changing each time.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=389)** So the B variable starts out as 20, right?
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=392)** So 10 plus 20 is 30, but then we increase it to 40, right?
>
> **[6:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=397)** Because we passed it by reference.
>
> **[6:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=399)** So now 10 times 40 is 400.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=402)** Then when the change delegates gets executed, B is now 40 and A is now 10, so 40 plus 10 is 50, but then B gets increased to 60, so now 10 times 60 is 600.
>
> **[6:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-composable-delegates?u=76281980&t=414)** So as you can see, you can use this technique to pass results of one delegate to the next, when chaining them together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), function (9), pass (5), case, (1), class, (1)
> **Env Vars:** f1f2 (5)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [teacher] (1)

#### Challenge: Programming delegate
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=5)** - [Instructor] Okay.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=6)** Time for our first programming challenge.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=8)** We're going to take what we've learned about delegates so far, and apply them in this challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=12)** And in this challenge, we're going to use delegates to implement a scenario I talked about a little bit earlier.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=18)** Figuring out the sales taxes, and fees for a shipping company that operates worldwide.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=24)** Now to make this challenge a little easier, we're only going to have to deal with a small number of different shipping destinations, but we're going to design the program so that it is easily extensible in the future.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=34)** All right.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=35)** So here's the challenge.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=36)** Joe's shipping has to send items to different destination zones, and each zone has an associated shipping fee, which is a percentage of the items price.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=46)** Now some of these zones are, shall we say, a bit dangerous?
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=49)** So Joe's shipping imposes an additional $25 fee for those destinations.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=55)** And then given a zone and an item price, your challenge is to build a program that calculates the shipping fee.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=61)** So here are some details you'll need.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=64)** Zone 1 charges a fee of 25% of the item price.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=68)** Zone 2 charges 12%.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=70)** Zone 3 8%.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=71)** And Zone 4 charges 4%.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=74)** Zones 2 and 4 are considered high-risk, and impose the additional $25 fee.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=81)** So I'll go ahead, and run my finished code to show you what the output looks like.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=86)** Right, so here we are in Visual Studio, I'll go ahead and run my finished code.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=93)** Right.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=94)** So when the application starts, it asks me for the destination zone.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=98)** So I'll try Zone 1.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=100)** And it says, what is the item price?
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=101)** And I'll type in 20.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=103)** And you can see that the shipping fees for Zone 1 is 25% or $5.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=108)** So then I'll type in Zone 2.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=111)** And once again, I'll try 20 as the item price.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=115)** And you can see that the shipping fee is 27.40, because remember this is 12%, but it also tax on the $25 fee.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=124)** So then I'll do Zone 3, and let's make the price 100 and you can see that 8% of 100 is $8.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=131)** And then finally, let's do Zone 4.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=133)** What's the item price?
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=134)** I'll do 100 again.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=136)** And you can see that the shipping fees are $29 because once again, we impose the extra high-risk fee, and then to exit, I type the word exit.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=145)** All right.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=146)** So now that you've seen the program in action, go ahead and try to solve this challenge, and feel free to refer back to this slide as much as you need to see the detailed requirements.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=155)** In the next movie, I'll go over my solution, and explain the approaches I took.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=160)** Now, it's not important that you code the same exact solution as I do.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=164)** What's important is that you understand the concepts here, and how they're used in the solution.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=168)** So don't worry about arriving at the exact same code as I did.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-delegate?u=76281980&t=172)** So when you're ready, go ahead and take a look at the next video, and we'll review the result together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1), next video (1)
> **Versions:** 27.40 (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Programming delegate
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=0)** - [Narrator] All right, so how did you do, were you able to get a working example?
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=9)** If you did then great.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=10)** Let's compare your solution with mine.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=12)** And if not, don't worry.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=13)** We'll go over my solution in detail and you can see how I implemented my code.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=18)** So I've opened the delegates solution project in the finished folder, and I'm going to go ahead and open up the program file and you'll see there's another file here called shipping.CS.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=30)** And so I'm going to open that one too.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=32)** So I use two files to keep the code readable.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=35)** So let's start in the program file.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=37)** So at the top I have two variables of types, shipping fees delegate, and the shipping destination.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=44)** The shipping fees delegate is the delegate function that will be used to calculate the relevant fees for a given destination.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=51)** And the shipping destination will represent that destination.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=56)** Now the rest of the code is a loop that will handle the user input until the string exit is typed in by the user.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=63)** So the first lines, retrieve the destination zone from the user and then the code checks for the exit string.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=71)** And if the input isn't exit, then the next line attempts to retrieve a shipping destination object that represents the given zone.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=81)** So perhaps now would be a good time to examine the code in the shipping file.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=85)** So let's bring that up.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=90)** All right, so let's start at the top.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=91)** You can see I've defined a delegate type called shipping fees delegate, and that's the type that's used over in the program file and notice I'm using a reference variable in the declaration.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=102)** This is so I can return the calculated value and it can be further manipulated by another delegate and we'll see why that is shortly.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=109)** So next, I have another class called shipping destination.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=113)** This base class defines the types and methods that the real destination zones will use.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=119)** And I made it an abstract base class to prevent it from being instantiated by itself, you have to create a subclass to represent a real shipping zone.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=129)** So in this class I have a member variable called is high risk, which indicates whether this is a high risk destination, any function called calc fees, which matches the delegate declaration, right.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=142)** So you see it's a void function and it takes in a price and returns to the fee.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=147)** Each subclass will override this function to perform that calculation.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=152)** I also have a static class function called get destination info, which takes the name of a zone and will return a newly created object to resent that zone or no, if there's no matching zone.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=165)** Now, if we scroll down a little, you can see I defined individual classes to represent each zone based on shipping destination.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=173)** So each class sets the high risk variable to either true or false, and then implements the function calc fees to calculate the fees for that destination.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=183)** And you can see that zone one is 25%, zone two is 12% and so on.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=188)** All right, so let's go back to the program.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=190)** All right, so when this line of code returns, get destination info, we either have a valid destination object or no.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=199)** So if the result is not no, the code gets the shipping item price from the user and tries to use the decimal classes parse function to convert the input to a decimal number.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=212)** So then I assigned this particular destination objects calc fees function to my local delegate variable.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=220)** Now remember, we have to tack on an additional fee if the destination is high risk, this is where the having that reference variable declaration comes in handy.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=230)** So the code checks to see if the destination is high risk.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=233)** And if it is, I use an anonymous delegate right here in line to modify the shipping fee to include an additional $25.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=241)** So now all that's left to do is run the calculation.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=245)** So I have a local variable that will hold the result.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=248)** And then I just invoke the delegate.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=250)** The high risk delegate will be automatically tacked on if necessary and the result is returned.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=256)** Then I just write out the result to the console.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=259)** The rest of the code just prints out an error message if the user enters an unrecognized zone and terminates if the user enters the word exit.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=268)** So by organizing the code this way, I've completely isolated the main program from changes in the shipping zones, and I've made the program easily extensible.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=277)** In fact, let's go ahead and add a new zone.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=280)** So let's go over to the shipping file and let's copy the code for zone four all right, and let's paste it.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=291)** So we'll copy this and we'll make a new class and we'll call this, desk the zone five, right.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=301)** And we'll set high-risk to false and we'll change the shipping fees to be 15%.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=310)** All right, so now let's change the get destination info function to return our new zone.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=317)** So if the user types in zone five, then we'll return a new zone five.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=326)** Right, so that's it.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=328)** Let's go ahead and run the program again.
>
> **[5:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=332)** All right, so let's go ahead and enter zone five and let's enter a price.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=338)** And now you can see that we've easily added a new zone.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=341)** So let's exit this, all right.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=343)** So let's go ahead and back to the code.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=346)** And you can see that the main function didn't need to change at all.
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=350)** We added a new zone to the shipping file, and because we've isolated that code from the main program, the main didn't need to change.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=358)** So that's the power of using delegates.
>
> **[6:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=360)** Feel free to play around with this code in the Visual Studio application and watch it work in the debugger if you like.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=367)** All right, so that brings us to the end of the chapter on delegates.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-delegate?u=76281980&t=370)** And now that we've seen how delegates work, we can move on to more advanced topics like events and Lambdas, which are based on delegates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (10), this, (2), abstract (1), override (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. C# Events

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating C# event handlers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=0)** - [Man] Now that we've learned about delegates, we can start using events, which are based on the same mechanism that delegates use to work.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=7)** So, as I said earlier in the course, events are really useful for broadcasting messages to, and receiving messages from other parts of your program or even the operating system or other programs.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=19)** So this enables your application to communicate asynchronously with other parts of the system, that is, without having to wait for the other end point.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=28)** And this in turn helps you build more responsive applications.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=32)** Events can be switched on and off as you need them, which further enhances your application's responsiveness.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=39)** So if you've done any web development, you're probably familiar with events in their user interface form.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=45)** So for example, when a user clicks on a button, so C-sharp also has UI related events, but your app can define its own events for its own purposes.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=54)** Defining an event starts off just like defining a delegate, in that you use the delegate syntax to declare the event handler signature.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=63)** So then in the class for your object, you use the keyword event instead of the word delegate to declare an event.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=71)** So in this particular case, I have an event named my event of type myEvent, of MyEventHandler, which takes an integer argument.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=78)** To trigger the event, you then just call the event like any other function.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=82)** So let's look at a real example.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=84)** In visual studio, open up the basic events project, and then let's open up the program.cs file.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=90)** In the code, note that there is a delegate declaration named MyEventHandler, and that it takes a single string argument.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=99)** There's also a class definition for a class named EventPublisher.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=104)** And this class essentially just broadcasts a message whenever its private string member variable changes.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=110)** So let's declare an event handler for when the value changes.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=115)** So let's go ahead and declare the event, and I'll write, public event, and I'll make it of type myEventHandler, and I'll call it value changed.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=128)** So in the property setter for the public property named Val, two things happen.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=133)** First, the private variable is set to whatever the incoming value is.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=136)** And second, the value changed event is triggered.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=140)** So let's add the code to trigger the event.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=143)** So I'll write this., and I'll call ValueChanged, which is the event that we defined up here.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=150)** And I'll pass in the argument, theVal.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=154)** Because that's our private variable right here.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=156)** So we want to broadcast that that variable has changed.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=159)** Right, so let's save.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=160)** And then down in the main function, the code has a loop that reads from the console until the user types the word exit.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=169)** So each time the class's Val property is set to the string that the user types in.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=176)** And I already have some code that creates a new event publisher object.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=181)** So let's wire up an event handler for the value changed property to watch for when the value changes.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=190)** Let's go ahead and do that.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=192)** So I'll write obj.valueChanged, and I'll use the += notation, and I'll call new myEventHandler for the obj_valueChanged function.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=209)** So in this case, I'm using this function, which I'll scroll down a little bit.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=213)** I'm using this function that I've already written in called obj_valueChanged as myEventHandler.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=218)** So this function will run whenever the value change event is triggered, and it just prints a string to the console output.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=225)** All right, so let's go ahead and save this and let's run the program.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=232)** All right, and when the program launches, let's just enter some test values.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=235)** I'll write hello world.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=238)** You can see that the event handler fired right here says the value changed to hello world.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=242)** All right, let's take another value.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=243)** I'll write my name, and sure enough, now you can see that the value changed to my name and then let's exit by taping exit.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=250)** All right, so, because events are essentially delegates, you can use delegate constructs to define an event handler.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=257)** So let's go back to the code.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=260)** And what I'm going to do is create an anonymous delegate to serve as the event handler.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=265)** And it will also take a string argument.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=267)** So in this case, I'll write obj.valueChanged once again, and I'll use the += notation, but this time I'm going to use an anonymous delegate.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=278)** And it will take a string named Val, and then I'll just simply console.WriteLine.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=290)** The value changed to, and we'll have our little string interpolation here.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=297)** All right, and let's comment out the previous code.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=302)** Okay, so now let's run the program again.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=309)** Whoops.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=311)** Oh, let's fix those build errors.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=314)** There we go, I put a little semi-colon in there.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=317)** All right, let's go ahead and run the program again.
>
> **[5:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=323)** All right, once again, I'll type in hello, and I'll type in world, and I'll type in Joe.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=328)** And you can see that as I'm typing the words, the output is firing.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=331)** So the value is changing to the string that I type in.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=334)** So declaring an event is very similar to declaring a delegate.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/creating-c-sharp-event-handlers?u=76281980&t=338)** And in this example, we've seen how to use both a named function, along with an anonymous delegate to create event handlers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (7), case, (3), private (3), public (2)
> **Code Identifiers:** myeventhandler (3), valuechanged (2), myevent (1), theval (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### Event chaining
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=0)** - [Instructor] Just like delegates, events can be chained together so that more than one handler can execute for a given event.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=6)** And to do this, use the same plus equals notation as you would for delegates.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=11)** So let's see how this works by opening the ChainedEvents project in Visual Studio, and let's open up the Program code as well.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=19)** So here are my code.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=20)** I have a class defined named EventPublisher which contains a private variable, theVal, and defines an event handler called valueChanged.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=30)** This class has a property named Val, which fires the valueChanged event whenever the value changes.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=38)** So let's see how to chain multiple event handlers together using these named event handlers.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=44)** If you scroll down a little bit, you'll see that there are these two functions, changeListener1 and changeListener2.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=51)** They essentially print out a message with the string that gets typed in by the user.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=56)** So let's go ahead and scroll back up.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=59)** So let's wire up these multiple event handlers.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=61)** So on my object, I'll define for the valueChanged event and I'll make a new myEventHandler, and I'm going to call changeListener1 for that one, and then I'll do the same thing for changeListener2.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=82)** And, while we're at it, let's go ahead and also add an anonymous delegate for the valueChanged event.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=88)** So once again, I'll use valueChanged.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=93)** In this case, I'll use an anonymous delegate that takes a string, and we'll just simply write out "This came from the anonymous handler".
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=109)** All right.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=110)** So let's go ahead and run what we have.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=114)** So I'll run this.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=116)** And let's enter some values, so I'll type hello.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=119)** And you can see the output of each event handler executing in order, right?
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=124)** So the value changed to hello.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=126)** And then the second listener says, "I also listen to the event and got Hello," and then the anonymous handler gets called, right?
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=133)** So let's go ahead and try it one more time.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=136)** So you can see that it's working and I'll just type exit.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=139)** So go ahead and try changing the order on your own and see how that affects the output.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=144)** Just change the order of the event handlers and the plus equals assignment and you can see for yourself how that works.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=150)** Now, in addition to declaring your own event handler, the .NET Framework includes a predefined event handler class as a template that you can use to send events using the same format as .NET does.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=163)** .NET event handlers typically take the form of having two arguments.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=168)** The first one is the object where the event originated and the second one contains data about the event.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=174)** So to use the EventArgs class, you typically derive a custom from the EventArgs-based class to hold your custom event arguments.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=183)** To declare the event using this approach you then use the EventHandler class with the name of the EventArgs class that you've created inside of the angle brackets, along with the name of the event.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=195)** And then you call the event trigger as usual, but you pass in the this reference to the object and a new instance of your derived EventArgs class.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=205)** So let's switch back over to the code and we'll define our custom event subclass.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=212)** So we'll create a subclass of EventArgs for our own use.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=217)** So I'll call it ObjChangeEventArgs, and we'll derive that from EventArgs, and it will have a public string property called propChanged.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=233)** Then let's go ahead and add the event definition to the EventPublisher class.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=239)** So let's scroll back up to the EventPublisher and let's define our event.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=244)** So it's public event and I'm going to use the EventHandler generic class, and I'll pass in the ObjChangeEventArgs, we'll call that the objChanged event.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=257)** And to trigger the event, let's add a line that calls the objChanged event.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=263)** So now instead of calling valueChanged, we'll call objChanged.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=269)** And we'll pass into this reference to the element, and then we'll create a new ObjChangeEventArgs object, and we'll pass in that the propChanged is equal to Val.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=293)** So this line creates a new ObjChangeEventArgs object and sets the propChanged field to Val, which is the name of our field that changed.
>
> **[5:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=304)** And then finally, let's add an anonymous delegate handler to the main program to listen for the custom event that we just created.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=314)** So this delegate is going to take an object and EventArgs as parameters.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=318)** So I'll write obj and once again, I'll use the objChanged handler and I'll add my new delegate, and it will take an object called sender.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=331)** And of course my ObjChangeEventArgs and we'll just call that e.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=338)** All right.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=340)** And then inside the handler we'll simply call Console.WriteLine, and we'll have the object name, had the, and that's going to be the property name, property changed.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=356)** And course, that's going to be the sender and we'll call GetType on that to get the type of the object.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=363)** And for the event field, we'll get the propChanged property because remember up in our class definition, that's this property right here.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=375)** So inside our custom event args, we have the property that changed.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=380)** And so we're going to print that out right here.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=387)** All right.
>
> **[6:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=390)** And let's put the semicolon on there just to make sure everything's syntax is correct.
>
> **[6:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=394)** All right. So let's save and let's run.
>
> **[6:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=399)** Let's enter a value.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=401)** I'll write Hello.
>
> **[6:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=403)** And now you can see that whenever the value changes for the Val property, in addition to the previous events, we also now have the name of the class that got changed, right?
>
> **[6:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=413)** This is the name of the object that just got changed along with the property that got changed as well.
>
> **[6:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/event-chaining?u=76281980&t=419)** So by using this pattern in your own applications, your code will match the same guidelines that the .NET Framework uses for its own event handling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), pass (4), class, (2), class. (2), public (2)
> **Code Identifiers:** valuechanged (6), propchanged (4), objchanged (4), changelistener1 (2), changelistener2 (2)
> **Env Vars:** net (4)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### Challenge: Programming events
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=0)** - [Instructor] All right, time for the programming challenge.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=7)** In this challenge, we're going to use Events to watch changes on an object and respond to those changes.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=13)** And specifically, our program will track the changing balance of a piggy bank.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=18)** Now, if you've never seen one of these, they were popular in the US for kids to save money by putting spare change in a slot in the top.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=25)** They were usually in the shape of a little pig.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=27)** And traditionally, they were made of ceramic.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=29)** And when you filled up the little bank, you would, you know, break it with a hammer and take the money and go buy a toy or something.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=35)** I mean, nobody really does this anymore.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=36)** But it's a fun little metaphor.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=38)** So our program will keep track of the bank balance and let us know when we've reached our savings goal.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=45)** So let me go ahead and run my finished program so you can see how it works.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=49)** So I'm in my finished version of the EventsSolution.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=54)** So I'll go ahead and run this.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=57)** All right, so when I run the program, I'm asked how much to deposit and I'll write 200, right?
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=62)** And now it says the balance amount is 200.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=64)** And so I can type in integer numbers, right?
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=67)** Positive numbers result in the balance increasing.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=71)** And if I do a negative number, you can see that the balance decreases.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=75)** And so I'll just keep on adding 50, and then I'll add another 10 and then 100 and then 200, right?
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=82)** And then when it says the balance amount is 510, it says you've reached your savings goal.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=87)** You have 510.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=89)** All right.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=90)** So, you use positive numbers to make deposits and negative numbers to make withdrawals.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=96)** Now I've set the saving goal in the program to be 500.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=100)** And you can see that when we reach that level, or more than that level, we get a little message that says, "Hey, you've reached the goal."
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=106)** All right.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=107)** So you've seen the program, go ahead and take a crack at it yourself and implement the program using Events.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-events?u=76281980&t=113)** So when you're ready, you can take a look at my finished code and we'll go over that in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Programming events
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=0)** - [Instructor] Let's take a look at my code for this challenge.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=7)** And again, let me say, it's not important that you use the same code as me and my solution might not even be the best one.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=14)** There's always multiple ways of solving almost any given programming problem.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=19)** So let's open my code file.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=21)** In my solution I used three different classes.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=25)** So I have a class for the PiggyBank itself.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=29)** And then I have a class that logs the balance and that's called the BalanceLogger.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=35)** And we have a class called the BalanceWatcher that watches the balance to see if we've met our savings goal.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=44)** And I also have a delicate declaration right at the top up here that defines the signature of the event handler that the PiggyBank class will use to broadcast changes in the balance.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=59)** So let's look at each of these classes.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=61)** So starting with the PiggyBank, the PiggyBank class has a private member variable that holds the balance and it has a public event called BalanceChanged.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=72)** There's also a public property named theBalance.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=76)** And you can see that whenever theBalance is set to a new value, the event is triggered and broadcast to all the listeners.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=83)** So the BalanceLogger class has a function that prints out the value of the amount argument that it is passed.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=93)** And the BalanceWatcher class also has a function that accepts an amount argument and checks to see if it's more than 500.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=101)** And if it is, it announces that you've reached your goal.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=104)** So notice that each of these functions matches the signature of the event handler delegate up here at the top.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=112)** In the main program, let me scroll down, I create an instance of each of these three classes, and then the next two lines hook up the event handler functions in the logger and the watcher classes to the event in the PiggyBank class.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=129)** And then my code enters a loop where it gets the amount to change the balance from the user.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=135)** Now until the user types the word exit, we parse the input to get a decimal number.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=141)** And then from there, everything else is automatically handled by the events.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=145)** So you can see from this example that like delegates, events can be used to isolate various parts of logic within your program.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-events?u=76281980&t=152)** So now we've learned about delegates and events, it's time to move on to Lambda functions and we'll see that in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (2), function (2), private (1), class. (1)
> **Code Identifiers:** thebalance (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. C# Lambdas

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding C# lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=0)** - [Instructor] Lambda functions are essentially a short hand way of writing anonymous functions in C#.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=6)** And because they're based on delegates, you can use them anywhere you would normally use a delegate function.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=12)** Lambdas are typically used when the logic that they implement is small and compact enough to fit into an inline declaration, which helps keep the overall code easier to read.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=23)** Lambdas are defined using the arrow operator, which consists of an equal sign along with a right angle bracket.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=29)** And because their delegates, you also define a delegate signature like you normally would.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=34)** Then, to declare the Lambda, you would declare a variable of the delegate type, and then write the Lambda expression using the arrow operator.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=43)** In this case, the Lambda has one argument, X, and returns the value of X times X.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=48)** This kind of Lambda is called an expression Lambda because it consists of an expression on the right hand side.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=55)** There are also statement Lambdas.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=57)** In this case, I have a Lambda that takes two arguments, X and Y, and you'll notice that I have the arguments enclosed in parentheses, which are optional.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=66)** And then I have multiple statements inside of curly braces.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=70)** If a Lambda has no arguments, you can just use empty parentheses to declare the Lambda.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=75)** All right, let's see Lambdas in action by clicking over to the code.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=79)** And here in Visual Studio I've opened up the "Basic Lambdas" project in my start folder, and let's open up the program file.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=86)** All right, so in the program file, you can see that I've already defined some delegates signatures for a few different delegate types.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=94)** So let's try a basic Lambda first.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=97)** So I'm going to write mydelegate1 and it's out so I just call it my delegate, right?
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=106)** So my delegate, I'll call it, d1, and I'm going to create a single argument Lambda.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=114)** And that is going to take one argument and that is going to return X times X.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=121)** And then just, let's go ahead and write out the result.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=130)** And we'll just call the Lambda with an argument of five, right?
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=135)** So this Lambda simply takes its argument and returns the square of that number.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=140)** This line writes out the result of calling d1 with the value of five.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=145)** And because this is a delegate, we can change it on the fly, just like other delegates, right?
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=151)** So let's go ahead and change it to something else.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=154)** Let's write that d1 is now going to be equal to a single argument Lambda, and that's going to return the value of X times 10, and then we'll just copy this line and paste it.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=167)** All right, so essentially we changed the definition of d1 to be a different function.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=173)** And now we're going to write out the same result, but we'll call it with the same value, but it should put out a different result.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=180)** So let's go ahead and save and run what we already have.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=188)** All right, when the function runs, when the application starts up, we can see that five times five is 25.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=196)** And then we changed the definition of d1 to be X times 10, so that's 50.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=202)** All right, so far so good.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=204)** All right, let's try a couple more examples.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=209)** Let's create a delegate that takes multiple arguments, and this is going to be of type mydelegate2, we can see that that's a delegate, that takes an integer argument and a string.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=221)** So we'll create delegate2, and that's going to be a two argument Lambda.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=228)** And even though the parentheses are optional, I think it makes the code easier to read, so I always try to include them.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=236)** And then inside our Lambda, we're going to Console.WriteLine.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=244)** And we're going to write the two-arg Lambda and we'll write out the arguments and that is going to be X times 10.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=264)** And the Y argument put semi-colons in the right place.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=271)** And then we'll call it with a couple of arguments.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=273)** We'll call it with, let's see 25, and then some string.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=279)** All right, so this Lambda d2, it takes two arguments and it just writes them out to the console, doesn't do anything.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=285)** You can see that this is a statement Lambda, right?
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=287)** Because it encloses the logic inside curly braces.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=291)** And let's do one more, okay.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=293)** Let's create another expression delegate, and we'll call this the expression delegate.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=300)** And if we scroll back up just really quickly, we can see that the expression delegate just takes a single argument.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=305)** And that's the X argument there.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=307)** So we'll call this one, d3, and we'll define this to be a single argument Lambda that simply takes the value of X and determines if the value of X is greater than 10.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=320)** So this is going to be a Boolean result.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=322)** All right, so if we scroll back up, you can see that the delegate returns a Boolean, true or false value.
>
> **[5:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=330)** All right, so then we'll call console.WriteLine, and we'll print out calling d3 with five, and I'll put the result in our string and we'll call T3 with five.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=349)** And then we'll do the same thing.
>
> **[5:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=351)** So I'll copy and paste that, and then we'll call it with 15.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=354)** All right, so this last Lambda is an expression Lambda that returns whether the argument is larger than 10.
>
> **[6:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=361)** So this one should be false and this one should be true.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=364)** All Right, so let's go ahead and run our updated code.
>
> **[6:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=369)** We'll save that and we'll run it again.
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=373)** All right, so here's our first two results.
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=374)** We've seen those already.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=375)** And then the two-arg Lambda, you can see it prints out the prefix and then the value times tens, so that's working.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=381)** And then when we call d3 with five, the result is false.
>
> **[6:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=385)** And oh, I made a mistake.
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=386)** I called it with the string, says five again, but let's make that 15.
>
> **[6:30](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=390)** All right, let's save.
>
> **[6:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=391)** Let's run it again.
>
> **[6:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=395)** All right, so now we have the right string there.
>
> **[6:37](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=397)** So you can see that five is not greater than 10, whereas 15 is greater than 10.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=402)** All right, so that should give you a good introduction to basic Lambdas.
>
> **[6:45](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/understanding-c-sharp-lambdas?u=76281980&t=405)** In a separate video, we'll see some more advanced Lambda function usage.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (24), let (16), function (4), case, (2), type, (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Using lambdas as delegates
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=0)** - [Instructor] As I mentioned earlier, lambdas are essentially shorthand ways of writing anonymous delegate functions in C#.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=6)** And because of this you can use lambdas in places where you would otherwise use delegate functions, including events.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=13)** And that's what we'll take a look at in this example.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=15)** So here in Visual Studio, I've got my lambda delegates project open.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=20)** And let's open up the code file here.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=23)** So this code example is essentially the same one that we saw earlier in the events chapter.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=29)** So if we scroll up to the top, you'll see that there's a delegate declared for an event handler.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=34)** And the class definition here, MyClass, has the same event defined that we saw in the previous example.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=43)** So this event is triggered whenever the value of the public property, Val, changes.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=49)** We trigger the valueChanged event.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=51)** So the difference this time is that, instead of using a named function or inline anonymous delegate, we're going to use a lambda function for the event handler.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=60)** So let's go ahead and add that code.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=65)** And I'm going to write obj.valueChanged, and I'll use the same plus equals notation.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=71)** And now I'm just going to define an inline expression lambda inside my curly braces, and I'll just write Console.WriteLine.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=84)** The value changed to, and that's going to be the first argument of the interpolated string here.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=93)** All right, and one more semi-colon.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=96)** Now in this case, the valueChanged event for the class is being hooked up to a lambda function that takes a single argument, which, recall, is the new value of the property once it changes.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=107)** So this lambda is a statement lambda, and you can see that because there's curly braces that contain my expression here.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=113)** And the rest of the code is the same as the previous events example, where we read the input from the user until they type in the string exit.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=122)** So let's go ahead and run our updated code.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=129)** All right.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=130)** And once the program runs, I'll go ahead and type in some strings.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=133)** So I'll type in, hello, and you can see, The value change to hello.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=136)** And I'll type in, world.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=137)** And I'll type in, Joe.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=139)** All right.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=140)** And then I'll type in, exit.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=141)** Okay.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=142)** So the rest of the code is the same, and you can see that as I type in the strings, the output is being reflected by the event handler.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/using-lambdas-as-delegates?u=76281980&t=149)** So this demonstrates how you can use lambda functions to implement event handlers just as you would using anonymous delegates or named functions.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (7), let (3), function (3), public (1), case, (1)
> **Code Identifiers:** valuechanged (3)
> **Cross-References:** earlier in (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Programming lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=0)** (chiming music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=5)** - [Instructor] All right, time for another programming challenge.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=7)** In this challenge, we're going to use lambdas to revisit an earlier challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=12)** So recall that in our previous challenge, we implemented a piggy bank watching program that used two events.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=18)** The first informed us of the amount of money in the bank and then the second let us know when we had reached a given savings threshold.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=26)** In this challenge, you're going to reimplement the earlier challenge using lambda functions.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=31)** So let's go ahead and watch my solution in action.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=34)** So I'll go ahead and run this and you can see that it works pretty much the same as before.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=39)** So positive numbers increase the balance and negative numbers decrease the balance, so I keep adding money and when I reach 500, you can see that once I exceed the 500 value, it says I've reached my goal, all right?
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=55)** So it works the same as before in the previous challenge.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=57)** What I want you to do is go back and take a look at your earlier solution, or mine, if that's the one that you used, and then perform the same challenge again, but this time use lambdas instead of events and delegates to create the solution.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=71)** And in the next video, I'll show you how I arrived at my solution.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/challenge-programming-lambdas?u=76281980&t=74)** So take a few minutes to write this out and then come back and compare your solution with mine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), lambda (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chiming music) (1)

#### Solution: Programming lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=6)** This challenge was relatively straightforward.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=8)** In it, we had to go back and modify the piggybank events challenge to use Lambda functions instead.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=13)** So let's open up the code for the Lambdas solution, which I have here in my editor, and while we're at it, let's open up the original piggybank solution in the events chapter so we can see them side by side.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=25)** So looking at the previous challenge, we can see that there are two event handlers that were used to watch the balance in the bank, okay.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=34)** In the Lambda solution, I essentially got rid of the two classes, balance logger and balance watcher since they were so simple.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=46)** And I just replaced them with two in line Lambda functions.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=50)** So I kept the original delegate declaration.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=53)** And if I scroll down to the main function, you can see that where I was using the class delegate methods, I'm now using inline Lambda functions instead.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=65)** So this example was simple enough that I was able to remove two class definitions entirely and replace them with easier to follow in line code.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=74)** So you can see, for example, that the balance changed event on the piggybank in the first case, simply gets changed to say, hey, the balance change when the amount gets entered.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=85)** And then the second is a Lambda function that shows if the amount is greater than 500, that it prints out the message that we achieved the goal.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=95)** So when writing your own applications, you will sometimes come across in areas like this and Lambdas can really help clean up your code and make your program easier to follow.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/solution-programming-lambdas?u=76281980&t=106)** Especially if you have really simple functions or classes that are handling scenarios that can just be expressed in a few lines of a Lambda.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (6), let (2), function (2), case, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go next
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=0)** - [Instructor] Alright, well, that brings us to the end of our course on C# delegates, events and Lambdas.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=6)** I hope you enjoyed learning along with me, how to use these C# constructs to build better, more robust and extensible applications.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=13)** And if you're interested, I have a few suggestions on where to go next to continue learning about C# and .NET.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=19)** So first, consider watching C# Interfaces and Generics.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=23)** These are important features of the language that are commonly used in C# programs.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=28)** Next, take a look at C# Collections.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=31)** This course goes in depth on the various types of collection classes available in .NET, such as stacks, queues and dictionaries.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=39)** Also, consider watching C# String Essential Training.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=43)** String manipulation is usually a part of any non-trivial program and this course will show you all the ways to work with strings in C# and .NET.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=51)** And finally, consider watching C# and .NET Programming.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=55)** This course dives into the .NET library and shows you how to use important features of .NET in your applications.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=61)** All of these courses contain a great amount of useful material that you can apply in just about any programming language.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=67)** Thanks again for watching and I'll see you again soon in another one of my courses.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-delegates-events-and-lambdas-14503458/where-to-go-next?u=76281980&t=71)** Happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (6)
> **Code Keywords:** continue (1), finally, (1)
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