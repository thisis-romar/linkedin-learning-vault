---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: swift-5-essential-training
url: "https://www.linkedin.com/learning/swift-5-essential-training"
level: Beginner
updated: 2/2/2022
learners: 1968
skills:
  - Swift (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEks0fJDAIWMw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568843493234?e=2147483647&amp;v=beta&amp;t=Ey2BOGas6-6UdMEFUO7hHuHTHqGxudAPCc2i_SAC6Mk"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Get Started with iOS App Development]]'
  - '[[Master Swift]]'
prev_courses:
  - null
  - '[[Programming For Non Programmers Ios 17 And Swift 5]]'
next_courses:
  - '[[Xcode 15 Essential Training]]'
  - '[[Swift- Delegations and Data Sources]]'
path_nav: '[{"path":"Get Started with iOS App Development","position":1,"total":4,"prev":null,"next":"Xcode 15 Essential Training"},{"path":"Master Swift","position":2,"total":4,"prev":"Programming For Non Programmers Ios 17 And Swift 5","next":"Swift- Delegations and Data Sources"}]'
path_count: 2
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/swift-programming-language
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Swift%205%20Essential%20Training.md)

![Swift 5 Essential Training](https://media.licdn.com/dms/image/v2/C560DAQEks0fJDAIWMw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568843493234?e=2147483647&amp;v=beta&amp;t=Ey2BOGas6-6UdMEFUO7hHuHTHqGxudAPCc2i_SAC6Mk)

# Swift 5 Essential Training

> Swift is the programming language for the Apple ecosystem—iOS, macOS, watchOS, and tvOS—and it’s a particularly expressive, fast, safe, and fun language that’s suitable for new and experienced programmers alike. In this course, instructor Harrison Ferrone helps you gain hands-on experience with Swift 5, and prepares you to start developing your own apps and games using this popular language. Follo

> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training) | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Begin an adventure with Swift 5
  - Quest accepted: What you should know
- [**1. Getting Started**](#1-getting-started) (3 videos)
  - Swift retrospective
  - Getting Xcode
  - Reviewing the exercise files
- [**2. Getting to Know Your Data**](#2-getting-to-know-your-data) (13 videos)
  - The quest begins: Variables
  - Variables and constants
  - Type safety and inference
  - Logging and commenting
  - Swift operators
  - Understanding strings
  - Working with strings
  - Type conversions
  - Booleans and logical operators
  - Introducing optionals
  - Accessing documentation
  - Challenge: Player stats
  - Solution: Player stats
- [**3. Working with Collections**](#3-working-with-collections) (10 videos)
  - Gathering inventory with collections
  - Swift arrays
  - Core array methods
  - Swift dictionaries
  - Core dictionary methods
  - Working with sets
  - Core set methods
  - Swift tuples
  - Challenge: Merchant shop
  - Solution: Merchant shop
- [**4. Application Control Flow**](#4-application-control-flow) (9 videos)
  - Controlling your destiny
  - The if statement
  - Unwrapping optionals
  - Using for-in loops
  - While loops
  - The switch statement
  - The guard statement
  - Challenge: Game logic
  - Solution: Game logic
- [**5. The Wide World of Functions**](#5-the-wide-world-of-functions) (10 videos)
  - Leveling the playing field
  - Basic functions
  - Overloading functions
  - Complex functions
  - Function types
  - Understanding closures
  - Using closures
  - Type aliasing
  - Challenge: Battlegrounds
  - Solution: Battlegrounds
- [**6. Classes, Structs, and Beyond**](#6-classes-structs-and-beyond) (9 videos)
  - Populating the game world
  - Value vs. reference types
  - Basic Swift classes
  - Access modifiers and properties
  - Subclassing in Swift
  - Basic Swift structs
  - Chaining optionals
  - Challenge: Inventory system
  - Solution: Inventory system
- [**7. Leveling Up with Enums, Protocols, and Errors**](#7-leveling-up-with-enums-protocols-and-errors) (9 videos)
  - Final stage, final boss
  - Swift enumerations
  - Raw and associated values
  - Introducing protocols
  - Using extensions
  - Throwing errors
  - Handling errors
  - Challenge: Battle actions
  - Solution: Battle actions
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Begin an adventure with Swift 5
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=0)** - Programming should be an adventure, and one of the newest and most exciting languages out there is Swift.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=6)** It's fast, flexible, and safe, and version 5.0 is the best iteration we've had yet.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=13)** Hi, I'm Harrison Ferrone, and I'd like to welcome you to Swift 5 Essential Training.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=18)** Throughout this course, we'll be exploring the core language features and capabilities of Swift from the ground up.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=25)** We'll start with common data types, conditional logic, and methods.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=31)** And keep going until we're comfortable creating classes, structs, protocols, and much, much more.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=40)** Now, we have to crawl before we can walk, so the examples we'll be working with aren't part of an actual iOS application.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=47)** Instead, we'll be learning SwiftSyntax and common use cases through examples that pull from gaming, even though we won't be making a functioning game.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=56)** Let's put it this way, I'd rather you have fun with the code you'll be writing than force you to write "hello world" or your name 100,000 times.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=65)** Whether you're looking to develop an app idea you've had for years or a new one you've just thought of, you'll leave this course equipped with the right fundamentals for the job.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/begin-an-adventure-with-swift-5-14524901?u=76281980&t=74)** It's dangerous out there alone, so keep your Swift skills equipped.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Code Identifiers:** ios (1)
> **Versions:** version 5 (1)
> **Speakers:** - programming (1)

#### Quest accepted: What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=0)** - [Instructor] Before we get started, there are a few assumptions that we should clear up.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=4)** First, even though this course was designed specifically for students with no Swift experience, it's not a programming fundamentals course.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=13)** You should be completely comfortable with concepts like variables, methods and classes, preferably in an object oriented context before diving in.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=22)** If you're brand new to programming or you need a basic refresher, check out [[Programming Foundations Fundamentals]] from our course library, it'll get you up to speed on everything you'll need to know.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=33)** Second, since we're starting from scratch in Swift, it doesn't make sense to jump right into an Xcode app project without understanding the language.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=42)** We have to walk before we run after all.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=45)** Instead, we'll do all of our work in the X code playgrounds I've already prepared for you.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=49)** Think of these as sandboxes that you can play around in without having to worry about the added information, and techniques that go into making an iOS app.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-essential-training/quest-accepted-what-you-should-know-14531790?u=76281980&t=59)** If you are familiar with a previous version of Swift or you're just looking for what's new in Swift 5, feel free to bounce around to the topics you're interested in.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

> [↑ Back to Table of Contents](#table-of-contents)

#### Swift retrospective
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=0)** - [Instructor] At its core, Swift is a compiled programming language that works with, rather than replaces, the Objective-C modules and frameworks that Apple has developed over the years.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=11)** Since its release, developers have had the ability to create projects with Objective-C and Swift code side by side.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=18)** So the changeover has largely been a smooth gradient rather than an abrupt handover.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=25)** Prior to 2014, iOS applications were written entirely in Objective-C, but that all changed when Swift 1.0 was released with Xcode 6.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=35)** A month later, Swift 1.1 was released with Xcode 6.1, followed in early 2015 by Swift 1.2 and Xcode 6.3.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=45)** Swift 2.0 was released later that same year, but with two big changes.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=50)** Version 2.0 was not only a huge upgrade to the previous version of the language, but Swift 2.2 was open sourced and continues to be developed and released under the Apache 2.0 license today.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=64)** Swift 3 dropped at the 2016 Worldwide Developers Conference, with Swift 4 following the same pattern and releasing in Fall 2017.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-retrospective-14527899?u=76281980&t=73)** Now we did have to wait a bit longer than usual for a new Swift release, but Apple came through and put out version 5.0 in early 2019.

> [!info]- Semantic Content
>
> **Versions:** 2.0 (2), 1.0 (1), 1.1 (1), 6.1 (1), 1.2 (1)
> **CLI Commands:** apache (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Getting Xcode
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=0)** - [Instructor] Before writing any Swift code, we'll need to install Xcode on our local machines, which you can find by searching the app store app.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=9)** Swift 5 came out with Xcode 10.2, so any later versions you may be working with are still compatible with the course.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=16)** Go ahead and hit get or update your already installed version, grab a cup of coffee and wait for the download to complete.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=25)** After that's done, go ahead and unzip the file and drag Xcode into the applications folder before booting it up.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=32)** This is an important step as moving the program later on can cause problems.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=38)** Once Xcode is safely in your applications folder, go ahead and boot it up.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=43)** Right away you'll see three options in the dashboard.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=45)** Start a playground, create a new project, or clone an existing project.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=51)** Now an Xcode playground is exactly what it sounds like a place to test and play with code in a Sandbox environment.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=58)** We'll be working exclusively in playgrounds for this course so that the results of our code are immediately displayed without having to build and run an entire application.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=68)** As far as new projects go, there are quite a few options to choose from.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=73)** You can start a new project from the first launch menu, like we have here, or by going to file, new, project.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=82)** New projects can be for iOS, watchOS, tvOS, macOS and cross-platform.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=91)** Clicking on any of the platforms is going to display their base applications, templates, and frameworks, all of which provide a solid starting point for any of your needs.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=101)** Cloning a repository is as easy as registering your preferred source control account, and linking a repo.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=108)** But we won't be using this feature or starting any new projects in this course.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/getting-xcode-14525889?u=76281980&t=112)** It's just important that you at least know what your options are, and where to find them.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (1), watchos (1), tvos (1), macos (1)
> **CLI Commands:** find (2), unzip (1)
> **Code Keywords:** from. (1), new, (1)
> **Versions:** 10.2 (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Reviewing the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=0)** - [Instructor] I've provided all the playgrounds that you'll need for this course in the exercise files.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=4)** So go ahead and download them, and open them up.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=8)** Inside, you'll see a folder named AdventureSwift_Starter, which has a playground file for each chapter of the course.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=16)** And it's a good idea to create a copy of the starter project on your desktop, so you always have a clean copy of the starter project on hand.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=26)** At the beginning of each chapter, you're going to want to go into your working folder and open up the corresponding chapter playground.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=34)** Let's open up the chapter two variable basics playground and take a look at the editor, and what we need to know to get started.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=41)** Now, playgrounds are pretty versatile and offer a lot of functionality, but the only things you need to know right now are how to access the different areas of the editor, and execute the code we'll be writing.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=52)** By default, playgrounds are set up to run manually when you press the play button icon next to a line number.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=57)** This is going to execute all previous lines.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=61)** However, this can get annoying when you're learning a new language.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=63)** So if your machine can handle the extra processing load, go ahead and click on the little arrow next to the play button at the bottom of the debug area here.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=72)** And we'll say automatically run.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=75)** I have set up all the playgrounds to automatically run, but in case one of them is off, go ahead and toggle that back.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=84)** Up in the top right-hand corner, you'll see three groups of buttons, but we're only concerned with the three on the far-right with the different page icons.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=93)** Hitting the farthest on the left is going to expand or hide the navigator where you can see each playground file and the overall structure.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=102)** Every chapter playground has its own page detailing the topic objectives of each video, as well as a section to fill in code we'll write together.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=114)** At the bottom of each page, there are next and previous buttons for flipping back and forth like a book.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=121)** By the end of the course, the goal is for you to have a solid Swift reference guide that you've created yourself and can refer back to anytime.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=130)** If we hit the middle page icon with the bar on the bottom, this will expand or hide the debug area, which is where all printed output shows up.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=139)** However, it's not always necessary to manually print information to the debug console, as the gray area running along the right side of the main text area is going to display your variables and computations every time the playground runs.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=154)** Now, it is empty right now, but as soon as we start writing our first lines of Swift, that'll populate.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=160)** Finally, the page icon with the bar on the right controls the Inspector window, which gives you access to specific information about a given file.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=168)** Now we're not going to use this, but if this pops up or you accidentally hit it, just hide it again.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=175)** All of the texts in the playgrounds I've prepped for you are written in markup, which I used to format the non-code text.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=182)** If you happen to open a playground and see a file that looks like this, go to the Editor menu and select Show Rendered Markup.
>
> **[3:10](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=190)** If you accidentally delete any of that, you can just command + Z to undo, and it'll pop right back.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=198)** Each chapter's also going to have a separate challenge playground for you to follow along with.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=204)** If we open up the chapter two challenge, you'll see that it includes two files, a starter and a final.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=211)** You should try the challenges on your own in the starter file, and follow along with my solutions in final.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=218)** All the tasks and objectives that I'll ask you to fulfill are written out right here.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=224)** Lastly, we've got a final version of each playground in the chapter folders that has all the code we'll be creating in the course.
>
> **[3:51](https://www.linkedin.com/learning/swift-5-essential-training/reviewing-the-exercise-files-14526924?u=76281980&t=231)** With that, we're ready to get going on our Swift adventure.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), default, (1), finally, (1), delete (1)
> **Exercise Files:** starter project (2), exercise files (1), starter file (1)
> **UI Navigation:** click on (1), toggle (1), go to (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Documentation:** reference guide (1)
> **Speakers:** - [instructor] (1)


### 2. Getting to Know Your Data

> [↑ Back to Table of Contents](#table-of-contents)

#### The quest begins: Variables
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=0)** - If you think about a programming language in physical terms, variables and types are it's building blocks, it's atoms.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=6)** They're the foundation and come in different shapes and sizes according to their functions.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=11)** In this chapter, we're going to work with basic variable types common to all languages, including strings, integers, and Booleans.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=19)** We'll also be introducing optional types, which are unique to Swift.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=23)** These allow us to gracefully handle variables with nil values without bringing our code to a crashing stop.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables-14530749?u=76281980&t=30)** We've got a lot to cover, so let's start out on our Swift adventure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - if (1)

#### Variables and constants
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=0)** - [Instructor] All right, if you have the Chapter 2 Playground from the AdventureSwift working folder on screen, click on the variables and constants page.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=9)** If not, go ahead and open that up, and let's talk about variables.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=14)** So in Swift, you have two primary options for declaring variables, depending on how you plan to use them.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=21)** Variables that need to be changed after they're created start with the VAR keyword, which tells the Swift compiler the value can be modified.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=30)** Now to see this in action, let's complete our first objective and declare a changeable variable to store a player's health and assign it a value of 90.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=40)** Start with the VAR keyword.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=43)** We'll call this currentHealth.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=45)** We just use the equals symbol to assign it a value.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=50)** Now, Swift does encourage the use of camel case for names.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=54)** So we have the first letter of our variable name lowercased, and then all following first letters are in caps.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=62)** You'll also notice that we don't use any kind of semi-colon or line ending symbol, because Swift doesn't make us do that.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=68)** It's very clean and very efficient.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=72)** Now that's about as basic a variable as we can get, but in many cases, you'll want a variable that has a set unchangeable value.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=80)** We can do that by declaring a constant with the let keyword, followed by the variable's name and value assignment.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=88)** So we'll call this maxHealth, since this will never change, and give it a value of 100.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=97)** Just to make sure we understand the difference here, let's try changing the value of currentHealth and maxHealth to different numbers.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=105)** Like most programming languages, variables are accessed by name, so we'll say currentHealth, and we'll say he's on his last legs, so he's at 13.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=116)** Now that's fine, you'll see the inspector that currentHealth is now equal to 13.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=120)** Now, if we change maxHealth to 110, we're going to get an error.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=126)** If you click on the little stop sign icon, this will expand it, and it says "Cannot assign the value: maxHealth is a 'let' constant."
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=133)** So we knew that, but now we're just checking.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=137)** I'm going to comment this line out with two forward slashes, so you have it for reference later.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=143)** For those of you that prefer a more compact code style, Swift allows multiple variables to be declared on a single line, with the caveat that they all have to be of the same type.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=153)** We'll get into types in the next video, but for now let's declare three integer values all at once by saying VAR, and we're going to call this inventory items, and we're going to set this to five, and you separate each variable with a comma.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=167)** So now we can just name a new variable called equipmentSlots.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=172)** We'll set this to three, and we'll declare one more, currentGold = 42.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants-14529808?u=76281980&t=181)** With no errors in the console, we're ready to talk about type safety and inference.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), var (3), type. (1)
> **Code Identifiers:** currenthealth (4), maxhealth (4), equipmentslots (1), currentgold (1)
> **Env Vars:** var (3)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Type safety and inference
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=0)** - [Instructor] I've already switched to the next playground page called type safety and inference, so if you're not there already, go ahead and select that and close out the navigator to give us a little bit more room.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=12)** The first thing you really need to know about Swift is that it's a type safe language.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=16)** Meaning that every variable you declare has to have a specific type and a value that matches that type.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=24)** When you assign an initial value to a variable, the Swift compiler is really smart it infers its type without you having to specify it.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=33)** So if we take our current health example from the last video, the compiler correctly infers that current health is an integer value and that's great.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=44)** However, variables won't always be declared with initial values, in which case you'll need to explicitly include its type.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=53)** For example, let's declare a new variable, we're going to call this character name, but instead of using the equals operator to assign it a value, we're going to use a colon and type in the string class.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=67)** Now, this is what's called a type annotation, which essentially tells the compiler that character name can only hold string type values.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=76)** If we try and assign character name a integer or a Boolean or something like that, we're going to get an error, because the compiler is going to be watching out for tight mismatches.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=87)** Here, we can see, cannot assign value of type int to type string.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=94)** To assign a string value we just need to call character name equals and use an open and close set of double quotations.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=103)** Now, anything inside here, is going to count as the string text, I'm going to call this King Krull for our character name.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=113)** And we're not going to get into types too heavily right now, but Swift does support the fundamentals like floats and doubles for floating point numbers, bulls for true and false values, and collection types like arrays in dictionaries.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=127)** If you really like your code extra readable and explicit, you can combine type annotations and initial values when you create your new variables.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=135)** But to be clear, the compiler doesn't need both.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=138)** So we could say var max health of type int equals a hundred.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=145)** It's overkill, but if that's your thing, go for it.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=149)** Since we've already seen multiple variable declarations on the same line, it's good to know that we can also specify their types with a single annotation, as long as we add it to the very end of the variable.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=162)** So let's say var inventory items again, comma equipment slots, comma, current gold, and here at the very end we'll add a colon, declare all three of these as an integer, and that'll do it.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference-14527900?u=76281980&t=180)** Just to note here before we move on, we'll be declaring most of our variables we work with as vars or mutable values, but the syntax is the exact same for let constants.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), var (2), class. (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Logging and commenting
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=0)** - [Instructor] Now that we know how to actually create variables, it's important to take a quick look at how to comment and debug the examples we'll be working with.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=10)** And we've already seen a single line comment.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=12)** That's two forward slashes followed by any kind of text that you want the compiler to ignore.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=19)** So I'm going to say I'm a single-line comment.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=24)** A multi-line comment starts with a single forward slash and an asterisk symbol and is closed out by the reverse.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=31)** So an asterisk symbol and a forward slash.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=35)** Now, anything on any line that goes between here is commented out.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=44)** Now, these can even be nested comments, so I'm a nested comment, as long as it's within our asterisk and slashing brackets.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=55)** As far as logging specific output to the debug area, the print function is the way we're going to do that.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=61)** So let's create a simple variable.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=63)** I'm going to call this antiHelloWorld.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=66)** Again, we're going to assign it a string value that just says, we're not here.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=73)** Functions in Swift are called by name, just like variables.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=76)** So to display the value of antiHelloWorld, we can just say print and the IntelliSense is going to come up and give us that function and we can just feed it antiHelloWorld.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=89)** Once the playground executes, you can see our strings show up in the console at the bottom of the editor, as well as in the inspector on the right.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=98)** If you go to the inspector and mouse over the gray box, you'll see two options show up.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=103)** There's a little I icon, which is a quick look, or you can click the gray box and that'll put the display output right underneath the function call.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/logging-and-commenting-14527903?u=76281980&t=112)** So whichever debug method floats your boat, that's the way you can do it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1)
> **Code Identifiers:** antihelloworld (3)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Swift operators
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=0)** - [Instructor] A programming language isn't really complete without a way to operate or modify your variables.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=6)** And Swift is really no different.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=8)** Now let's start off with a basic math operation and go from there.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=13)** So I'm going to declare a new variable.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=15)** I'm going to call this usingMath in real life, and I'm going to assign this an actual mathematical expression.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=22)** I'll say 5 + 4 - 3 / 2 * 1.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=31)** Now you've undoubtedly seen these type of arithmetic operators before.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=35)** And Swift follows the conventional order of operations, evaluating parentheses first, then exponents, multiplication, division, addition, and finally subtraction.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=47)** You can see that in action by adding a pair of parentheses around the 4 - 3 operation, which is going to give us a different result than 8.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=56)** It's actually going to evaluate to 5.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=60)** Next up, we should look at compound assignment operators, which are used as a shorthand replacement for any of the math operations.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=69)** Let's say currentHealth again, and I'm going to set this to 45 this time.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=76)** And on the next line, I want currentHealth to be multiplied by, let's say, 5.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=81)** So we could say currentHealth = currentHealth * 5.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=86)** That's the longhand way to do it.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=89)** The shorthand or Swifty version is to use the asterisk and an equal sign and give it the value we want to multiply it by.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=98)** Now this syntax works for every arithmetic operator, so you can see I commented them out for you here if you need to reference them later.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=107)** Now the final operation we're going to look at in this video is called the Modulo.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=112)** It's written with the percent symbol and returns the remainder of two numbers being divided.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=118)** So for instance if we say var experienceOverflow, we're going to set this to 100 % 90.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=130)** Since 100 divided by 90 is 1, there's a remainder of 10 left, and that's actually what experienceOverflow is going to store for us.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=139)** Now that's all the operators that really make sense to go through by hand with our current Swift skills, but we will cover the remaining comparison, logical, and range operations when we get to the topic of Control Flow.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators-14526928?u=76281980&t=152)** If you want to jump the gun or you're just itching to go, I have commented out the comparison, logical, and range syntax for you here at the bottom of the playground if you want to get started early.

> [!info]- Semantic Content
>
> **Code Identifiers:** currenthealth (4), experienceoverflow (2), usingmath (1)
> **Code Keywords:** let (3), var (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Understanding strings
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=0)** - [Instructor] The string class is going to be a constant building block in any Swift application you put together.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=6)** So we're going to spend a little time understanding its basic features.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=11)** And the string is literally a collection of characters strung together that can be manipulated, mutated and accessed in various ways.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=19)** There are also Unicode compliant in Swift and can handle storing special characters.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=25)** Now let's run through what we already know.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=28)** We can create string variables without a value by giving them a name.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=33)** So I'm going to say activeQuest and the string type annotation.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=38)** Here activeQuest is declared, but not initialized, meaning that the compiler is going to throw us an error if we try and print it out at this point.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=51)** Now to get around this when you need to initialize a string variable with some kind of empty value, we can just assign it an open and closed set of quotes.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=62)** And this is largely a style point, but it can be useful to have empty strings or other variable types when displaying missing data or something like that in your app.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=72)** Finally, we can assign an actual string to our activeQuest variable.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=77)** I'm going to call this quest, Retrieving the Cart.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=82)** Why not.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=85)** Quick note here when you assign an actual string or any kind of type really, to a variable, it's called a literal value.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=94)** So that is the difference between using a literal value, like Retrieving the Cart, and using activeQuest, which is the variable that's holding the literal value.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=105)** If you hear me refer to a literal type, like an integer literal, string literal, et cetera, that's what I'm talking about.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=112)** The difference between the actual value and the variable that's storing that value.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=120)** Now one of the great things about Swift is how easy it makes traditional programming operations.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=126)** For instance, if we want to add or concatenate two strings together, we can just use the plus operator.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=133)** Just declare a new variable.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=135)** We're going to call this questDifficulty and assign this a string literal.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=141)** I'm going to call that Nightmare.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=144)** I'm going to make a third variable.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=147)** I'm going to call this questInfo, and this is going to be equal to activeQuest.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=151)** Here we use the plus operator to append a string, and we're just going to give this the arrow plus questDifficulty.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=164)** Notice that I included the blank spaces in the middle string to make sure that this reads correctly, 'cause the compiler, if it's missing, is just going to add on these strings without spaces.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=176)** And that doesn't look right.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=184)** If you want to trim down the syntax, 'cause this can get kind of bulky, you can use the compound operator with plus equals.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=192)** If we reference questInfo, and say plus equals a new string literal.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=197)** I'm just going to add an exclamation point.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=200)** This literally adds that additional character onto the end of questInfo.
>
> **[3:28](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=208)** And having all these plus symbols or plus equals operators really does bloat string code.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=214)** So it's usually a better idea to use string interpolation when you're constructing patchwork text.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=221)** String interpolation is just a fancy way of describing a string literal that has other values inserted into it.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=227)** So let's do a final example here and print out an interpolated string.
>
> **[3:51](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=231)** This is going to be a constant.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=233)** I'm just going to call this questInfo_Interpolated.
>
> **[3:59](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=239)** And I'm going to write out the string without any insertions first, I'm going to say, I'm not sure you're ready to yet, it's level.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=250)** Now I know that doesn't read grammatically correct.
>
> **[4:13](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=253)** So let's fix this.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=255)** Now the syntax to insert a string into another string is a backslash, open parentheses, close parentheses.
>
> **[4:23](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=263)** Now anything that goes inside here will be interpolated or inserted, so we can use variables or literal values.
>
> **[4:31](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=271)** But right now we already have questDifficulty and activeQuest, so I'm going to say, I'm not sure you're ready for activeQuest yet it's, and I'm going to put in the questDifficulty here, level.
>
> **[4:53](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=293)** Now our entire string reads, I'm not sure you're ready for Retrieving the Cart yet.
>
> **[4:57](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=297)** It's Nightmare level.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=300)** I want to stress that this kind of interpolation is not limited to string variables.
>
> **[5:04](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings-14530754?u=76281980&t=304)** You can put in numbers, you can put in booleans, you can put in anything that can be translated into a text representation.

> [!info]- Semantic Content
>
> **Code Identifiers:** activequest (7), questdifficulty (4), questinfo (3)
> **Code Keywords:** let (3), throw (1), finally, (1), type, (1), this. (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Working with strings
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=0)** - [Instructor] Let's keep going with strings and start working with the functionality that Swift already has built into the class.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=7)** First though, let's declare a new test variable that we can work with.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=12)** I'm going to call this dialogue.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=14)** I'm going to give this a string literal.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=17)** Just says the Innkeeper's Haven.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=20)** Let's get some data on the dialogue variable by printing out how many characters it has and whether it's empty or not.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=28)** So we can access any properties or methods on a class using the dot notation like in most programming languages.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=35)** So we can say dialogue.count and dialogue is empty.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=42)** And these are going to kick back 21 and false respectively.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=45)** So 21 characters in dialogue at the current time and it's not empty.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=51)** These are super useful when dealing with form fields or other logic that depends on a string's context.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=58)** But counting is empty are available on almost all Swift classes.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=62)** So use them accordingly.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=67)** We can also query whether a string contains a specific character or string of characters using the contains method.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=75)** So we can say dialogue.contains.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=78)** I'm just going to look for that capital S character.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=81)** And this is going to kick us back a true or false value.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=84)** Right now it's false because contains is case sensitive.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=88)** So if we give it a lower-class S, it's going to return true.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=93)** Now sometimes the concatenate operator or string interpolation isn't going to cut it when you're manipulating a string value, which is where append and insert come in.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=106)** Append is just a more explicit way of adding a new string onto the end of an existing one, but works on the same principle as the plus operator.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=116)** If we type in dialogue.append, we'll see that there are a variety of options like most classes in Swift.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=126)** We're just going to append contents of string.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=131)** And here I'm just going to say a comma, weary travelers, exclamation point.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=138)** Now if we wanted to insert or remove characters or strings at a specific point in our dialogue variable, we could do that with the insert and remove functions.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=148)** All we need is a position or what's called an index.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=152)** Our collections in Swift are zero indexed meaning that they started zero and increment up.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=159)** We take a look at our dialogue string right now.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=162)** The character at position zero is T, one is H, two is E and so on.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=169)** However, getting into constructing string indexes at this point in our Swift adventure would be more confusing than helpful.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=176)** For special topics like this, the docs have you well covered.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=182)** That being said, there are a few simpler remove methods that we can use.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=187)** For instance, dialogue.removeLast will take off the last character and return it to us.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=195)** Let's just print out dialogue just to make sure we're seeing this in action.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=200)** Now, the exclamation mark is gone.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=204)** We can use dialogue.removeFirst to take off the lowercase T and we can even use dialogue.removeAll to entirely clear it out.
>
> **[3:37](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=217)** Now it's just an empty string again.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=221)** The last method we're going to look at here is split, which is helpful for going through a string and basically looking up any character we specify and returning us the string before it and the string after it.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=237)** So since our dialogue string has a handy comma, almost in the middle, we're going to split on that.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=244)** Now there are a lot of options again with split.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=247)** We want the first one with a separator, and we're just going to look for a single character, which is the comma.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=254)** Now to get this to actually work, we need to comment out our removeALL call because that just emptied out the string.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=260)** And here we can see that the split method has essentially kicked us back an array.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=266)** And we haven't talked about arrays, but they're collections of values.
>
> **[4:30](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=270)** So in this case, we have two values.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=273)** He Innkeeper's Haven is one which was on the front end of the comma and weary travelers, which was on the end.
>
> **[4:42](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=282)** Like we've seen all of these functions and really all Swift classes in general, come with different variations.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=289)** If you're looking for a specific functionality, look to the docs as the Swift team may have already provided what you're looking for.
>
> **[4:57](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings-14529807?u=76281980&t=297)** It's also a good idea to familiarize yourself with core class methods, like string or integer classes that do a lot of the, I would say more common functions or operations that you'll be using day to day.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (1), super (1), this, (1), case, (1)
> **Code Identifiers:** removeall (2), removelast (1), removefirst (1)
> **Documentation:** the docs (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Type conversions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=0)** - [Instructor] Now that we've got some strings and numbers under our belts, let's do some work with conversions.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=6)** Now the Swift compiler will do the majority of the work when you're doing anything mathematical.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=12)** But when it comes to converting between types, well, that takes a little extra effort.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=19)** To start with, let's declare a test variable here, we're just going to call this currentGold_Double.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=27)** I'm going to give this a literal value of 5.832.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=34)** Now, if we were working with only Doubles, we wouldn't have to do any extra syntax, compiler will take care of everything.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=41)** But, let's say we want to convert currentGold Double to an integer.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=46)** Well, we can say var currentGold_Integer equals, actually before that, let's give it a explicit type annotation enforcing that we only want this variable to hold Int, and just say currentGold Double, and see what happens.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=67)** Now we've got an error, as expected, cannot convert value of type Double to type Int.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=74)** So how do we actually fix this?
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=77)** Well, with explicit conversions, you're going to wrap the variable you want to convert in parentheses, and then at the very beginning, you're going to add the type you want it to be converted to.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=89)** Now in the right-hand inspector you'll see that currentGold Integer is now five, instead of 5.832.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=97)** Because the compiler has shaved off the decimal values during the conversion.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=101)** And this is called Loss of Precision, which is going to happen anytime you take something like a decimal or a floating point number, and try and squeeze it into a smaller type, which is an Int that can't hold decimals.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=114)** You'll also notice that when it shaves off those decimal values, it's not rounding, it's not going up to six because we're above 5.5 or something like that, which does happen in other languages.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=124)** It's just going to simply chop it off.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=127)** Our numbers aren't the only type Swift is going to let us explicitly convert.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=132)** For instance, we could say var currentGold_String, and do away with the type annotation, and we'll just say String(currentGold_ Double).
>
> **[2:27](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=147)** And you can see in the inspector on the right, that it just transformed 5.832 into a string literal.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=154)** No problem whatsoever, now that's a lot harder in some other languages, so be thankful.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=160)** Now conversions are great, but one thing you need to be aware of going forward is how the compiler is going to deal with operations between variables of different types.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=170)** So what do I mean by that?
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=171)** Well, let's say we want to add two variables together of different types.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=178)** So we'll say var bankDeposit equals 37, which is an integer, plus 5.892, which is a double.
>
> **[3:11](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=191)** Because we're using number literals here, the compiler is just going to infer the result to be a Double by default, it's going to take the most accurate result, it doesn't want to chop anything off or lose precision.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=204)** However, if we want to add two variables of different types together, we're going to have to explicitly tell the compiler what we want the result to be.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=213)** So let's say var bankDeposit_Explicit, and let's try and add our currentGold Double plus currentGold Int.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=228)** All right, again, we're going to get a tight mismatch error of sorts, binary operator '+' cannot be applied to Doubles and Ints.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=238)** Essentially what this is telling us, or the compiler is trying to say, is that it doesn't know what we want bankDeposit_Explicit to be.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=247)** Now I want this to retain its precision, so I'm going to actually do an explicit conversion right here in the expression.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=258)** I'm just going to say I want the currentGold Integer to be converted to a Double, and then added to currentGold Double.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=266)** Now what we've done is told the compiler that we want to keep all the precision of our Doubles.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=273)** So our result is 10.832, and bankDeposit Explicit is inferred as a Double.
>
> **[4:40](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=280)** Keep in mind here that the compiler is really smart in Swift, and it's always going to deliver the correct result type.
>
> **[4:47](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=287)** But that might not be the type you want or need at the end of an operation.
>
> **[4:51](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions-14530753?u=76281980&t=291)** So, always be sure that you're essentially giving the compiler enough information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), var (4), type, (1), default, (1), type. (1)
> **Code Identifiers:** currentgold (7), bankdeposit (2)
> **Versions:** 5.832 (3), 5.5 (1), 5.892 (1), 10.832 (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Booleans and logical operators
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=0)** - [Instructor] Boolean variables can hold either a true or false value, and are declared using the Bool keyword.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=7)** And these are very handy for setting up flags or pairing with comparison operators to do logic checks.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=13)** They also follow the same type inference rules as we've seen, so you can declare them with initial values or without, depending on what you need.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=22)** Let's start off by declaring a new variable.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=25)** We're going to call this isActive.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=28)** And just to be clear, I'm going to give this a type annotation type Bool, and set it to false.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=36)** That's all there really is to declaring booleans so let's practice with logical operators.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=43)** When you need to reverse or toggle the state of a boolean value or expression, the not operator is the way to go.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=51)** So we can say isActive = !isActive.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=57)** Now you'll hear this referred to as the bang operator, as well as the NOT, which essentially just sets the value to its opposite.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=67)** This is going to become second nature to you when you start writing applications that require states to be toggled back and forth, so just keep it in mind.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=77)** When there's more than one boolean value to evaluate, you'll need to use two logical operators, the AND which is written with two ampersands, or the OR, which is written with two pipes.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=91)** Let's declare another test variable.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=94)** We're going to call this canMove.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=96)** We're also going to set this to false, and let type inference do its thing.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=101)** And we're going to evaluate both of these.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=105)** So we're going to say var playerControl = canMove && isActive.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=114)** When we use the AND operator, both values have to be true in order to return a true value.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=120)** Otherwise it's false.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=122)** So right now isActive is true, but canMove is false.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=126)** If we trained canMove to true, playerControl will be true.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=135)** However, if we replace the AND or the double ampersands with the OR operator, which is written with two vertical pipes, Player Controller is going to evaluate if either canMove or isActive is true.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=148)** So both of these are true.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=150)** Therefore playerControl is true, but if we change canMove back to false, playerControl is still going to be true.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/booleans-and-logical-operators?u=76281980&t=158)** Only needs one or the other.

> [!info]- Semantic Content
>
> **Code Identifiers:** isactive (6), canmove (6), playercontrol (4)
> **Code Keywords:** let (4), require (1), var (1)
> **UI Navigation:** toggle (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Introducing optionals
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=0)** - [Instructor] If you're coming from a C-style language, the concept of objects having nil values shouldn't be news, but in Swift, any variable type can hold a nil value as long as it's declared as an optional.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=14)** Optionals tell the compiler that the variable is either storing a value or storing nothing, which is useful when you need placeholders for potentially unknown values without crashing your code.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=25)** I'm going to declare two optional variables here.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=29)** They're declared just like any other.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=31)** So we'll say var, and I call this itemGathered, give it a string type, and to mark it as an optional, we're going to add a question mark.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=42)** I'll do the same thing and name a new variable, isExchangeable, and this is going to be an optional boolean.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=51)** You can see in the inspector that both of these, because they lack initial values, are stored as nil, which is fine.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=58)** That's not to say that we can't have initial values.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=61)** So let's add pickaxe to itemGathered.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=68)** Now, if we try and print out itemGathered, we're going to see something interesting.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=73)** It's not actually going to print out the value or the string pickaxe.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=78)** It's going to print out the optionally wrapped pickaxe.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=82)** Now this is Swift's way of telling us that we need to gracefully and safely unwrap the string value before getting to it.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=92)** We'll also get a warning if you click on the yellow triangle at the top of the editor, that our expression is implicitly coerced from string optional to any, which is a very confusing way of saying that itemGathered has not been unwrapped or addressed as an optional.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=110)** What we can do for optional values is unwrap them in two ways, using optional binding or force unwrapping.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=118)** We're going to get to optional binding later on when we talk about control flow, so for now let's force unwrap itemGathered by adding an exclamation mark.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=129)** Now the actual string pickaxe is printed out, and it's no longer an option.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=135)** Now be careful with force unwrapping because essentially what you're doing is telling the compiler that you're 100% sure the optional is not nil, and to immediately unwrap it without checking.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=148)** If we tried to print out and force unwrap isExchangeable, we're going to get a crash because it's nil, and we basically overrode the compiler and took away that safety measure that it's implementing for us.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=162)** So let's comment that out, just so we can keep going with our program.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=168)** Now from my point of view, forced unwrapping sort of defeats the purpose of having optionals in the first place.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=174)** They exist specifically to save you from having to remember if a certain variable is nil or not.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=180)** So don't form a habit of force unwrapping.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=184)** To sum up, optionals either store a value or nothing at all.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals-14527895?u=76281980&t=188)** They're compatible with variables or constants, and can be declared with any type.

> [!info]- Semantic Content
>
> **Code Identifiers:** itemgathered (5), isexchangeable (2)
> **Code Keywords:** let (3), var (1), type, (1), type. (1)
> **Warnings:** warning (1), be careful (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Accessing documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=0)** - [Instructor] One of the great things about developing iOS apps is the detailed resources Apple provides to the development community.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=8)** If you have a developer account, you can access the documentation online, but it's usually more efficient to jump directly into a specific topic from the editor.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=18)** You can access detailed documentation for any class by highlighting its type, going up to the Help menu, selecting Search Documentation for Selected Text.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=30)** Now this is going to show what Xcode thinks you're looking for.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=34)** In this case, yes, we're looking for the string class.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=37)** And this will give you a rundown of all its uses, its features, really everything you need to know from right inside the editor.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=46)** However, opening up a brand new Xcode window is kind of troublesome, and it's not really efficient when you're really deep into a coding problem.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=54)** So if you highlight string class again, you can hit Command and right click, which will open up the Actions menu.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=61)** And we can either jump to the definition, which is going to take you back to where we just were, or you can hit Show Quick Help, which just pops up all that information right here without any new windows.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/accessing-documentation-14528849?u=76281980&t=74)** When learning a new language, it's always good to know where to get help, so make constant use of these docs as you're continuing your Swift journey.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), for. (1), case, (1), class. (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Player stats
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=6)** - Now, I've got my first challenge for you.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=9)** We're going to focus on creating player stats, different variable types, performing basic operations on them, and printing them out.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=17)** I've chosen to leave out optionals from this challenge because I haven't shown you the correct way to handle them yet, and I don't want you to get into any force unwrapping bad habits.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=26)** Feel free to take this challenge beyond what I've laid out if you feel inspired.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=30)** These challenges are just a baseline.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=32)** They're not a ceiling.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=34)** Now this shouldn't take you more than 5 to 10 minutes, but if you're feeling stuck, refer back to the playground examples, or jump into the next video and follow along with my solution.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/challenge-player-stats-14526917?u=76281980&t=43)** Happy coding.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - now (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Player stats
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=6)** - [Instructor] All right, I'm going to jump into my solution to the chapter challenge.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=9)** You can follow along or see the full code in the final playground page.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=14)** For the first task, we want to create two string variables and assign them values.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=23)** I'm going to say var characterName, Harrison, and var weaponClassification is going to be hands and fists.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=39)** Our second task is to use the plus equals operator to add a nickname string onto characterName.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=46)** So, I'll say characterName plus equals space the Stealthy.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=55)** Third task we want to create a variable called currentMana, and assign it a decimal value.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=64)** I'm going to set mine to 75.9.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=70)** Next, we want to create another variable called manaPercent, and we're going to assign it currentMana divided by 100.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=80)** The catch is that we want to explicitly convert it to a string.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=86)** So, I'm going to start out.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=88)** I'm just going to upfront declare it as a string, and inside the parentheses, I'm going to take currentMana and divide it by 100.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=102)** For task number five we're going to create another variable called debug stats, and we're going to use string interpolation to print out our information in sort of a creative way.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=115)** So, we'll say var debugStats equals, and I'm going to use string interpolation here.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=125)** I'm going to print out my characterName, and I'm going to use the backslash N to create a line break.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=134)** So, I'm actually going to have two of these.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=137)** I'm going to say prefers.
>
> **[2:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=140)** I'm going to use my weaponClassification.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=144)** One more line break, current mana, and I'm going to insert my mana percentage.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=158)** For task number six we're going to create two booleans, and assign them some values.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=164)** So, I'm going to say var questAccepted is going to be false, but canQuest is going to be true.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=176)** Task number seven is going to see us using the and operator to evaluate if questAccepted and canQuest are both true.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=185)** We want to store this in a variable.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=187)** So, I'm going to call the variable questStatus.
>
> **[3:11](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=191)** I'm going to say questAccepted and canQuest.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=200)** For our last task, we're going to add an interpolated string that includes our questStatus onto debugStats.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=209)** The caveat here is that we need to use the append method.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=213)** So, we'll say debugStats.append contents of sequence, and I'm going to give this a line break right off the bat.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=224)** Say questing, and I'm going to use the questStatus variable.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=233)** Go ahead and print this out, and let's see our work.
>
> **[3:59](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=239)** I'm going to expand the debug area a little bit, just so we can see all this, but it looks pretty good.
>
> **[4:03](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=243)** Harrison, the Stealthy.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-player-stats-14528851?u=76281980&t=244)** I've got my weapon classification, my current mana percentage, and I am currently not able to quest.

> [!info]- Semantic Content
>
> **Code Identifiers:** charactername (4), currentmana (3), debugstats (3), questaccepted (3), canquest (3)
> **Code Keywords:** var (4), break. (1), break, (1), let (1), this, (1)
> **Versions:** 75.9 (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Working with Collections

> [↑ Back to Table of Contents](#table-of-contents)

#### Gathering inventory with collections
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/gathering-inventory-with-collections-14525882?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/gathering-inventory-with-collections-14525882?u=76281980&t=0)** - Now, that we've got variables, and types under our belts, we can explore collections.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-essential-training/gathering-inventory-with-collections-14525882?u=76281980&t=5)** These special types are going to let us store data that basic types can't, like a list of high scores or the items and pricing of a shop's inventory.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/gathering-inventory-with-collections-14525882?u=76281980&t=14)** We'll also be looking at different ways to access and modify specific collection elements, as well as the common operations they come with right out of the box.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - now (1)

#### Swift arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=0)** - [Instructor] With the basic Swift types out of the way, we can dive into our next playground, which is chapter three and our first collection type, arrays.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=10)** Now, arrays work like ordered lists, meaning that each element or value in the collection is organized by the order it was added.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=18)** So you'll see these used when data needs to be in a specific sequence.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=23)** Let's start by declaring an array without an initial value, and I'm going to call this, level Difficulty.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=32)** Now the array syntax or type annotation is two brackets and inside the brackets, the type of value we're going to store.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=41)** So in this case, this is going to be an array of strings.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=45)** In cases where you need an empty initialized array, just like we did with the empty string, you can assign it a pair of empty brackets.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=53)** That'll let the compiler know that it's an empty array, but it has been initialized.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=58)** This is the preferred style you'll see in the Swift docks and most community projects.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=64)** But just to be thorough, you can also declare arrays with some added syntax.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=70)** So we'll just say this is called extraSyntax1, going to use the array keyword with an open arrow, and a closed arrow, and the string type inside.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=83)** I'll declare an empty array using this syntax, we use Array, open arrow, string, closed arrow and a set of parentheses.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=93)** That'll also initialize it.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=96)** The compiler treats these variations the exact same.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=99)** So again, it's a style choice.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=102)** Swift types often have different syntax approaches, but going forward, I'll be sticking to the concise style of level difficulty.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=112)** Now let's add in some string values to level difficulty.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=116)** I'm going to say our first element is going to be Easy separated by a comma.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=122)** Second element is moderate.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=125)** Third is veteran, and fourth is nightmare.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=131)** I'm going to leave the type annotation here for the example, but type inference does work with collections.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=137)** Like with strings, we can get the "is empty" and "count properties" of arrays by using the dot notation.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=144)** So we'll say level difficulty.count and level difficulty is empty.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=152)** And we have four elements, so that's what's going to return from count and we are not empty.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=158)** Each array item is given an index value that you can use to access and or modify its value by using what's called subscripts syntax.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=168)** Arrays are zero-indexed, again just like strings, meaning that our first item in level difficulty easy is at index zero.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=178)** So for instance, if we want to access the last item in level difficulty, we'll call this most difficult.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=187)** We can assign it level difficulty, open and close brackets, and the index of three.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=195)** The open and closed brackets here are the subscripts syntax.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=199)** So what we're saying is please query level difficulty at item three, which is nightmare.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=206)** We can also use subscripts to change an item's value.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=209)** So if we want to change nightmare, which is at index three to some other string, we can do that.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=216)** We'll call this utter ridiculousness.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=221)** Now nightmare has been overridden and utter ridiculousness is now inside level difficulty.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=227)** Now the thing to be careful of with arrays is that if you try and reference an index that doesn't exist, the compiler's going to throw you a nasty out of range exception.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=237)** So let's try that just for fun and try and query level difficulty at index four.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=244)** Well that doesn't exist, there are only three items.
>
> **[4:08](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=248)** Now you might be thinking if we can't dynamically add items to the array, what real good is it?
>
> **[4:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=253)** It's not going to help us a lot in our Swift apps.
>
> **[4:17](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays-14524893?u=76281980&t=257)** In the next video, we'll talk about exactly that and how to dynamically modify the contents of an array after it's created, which is the more common use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1), this, (1), case, (1), throw (1)
> **Analogies:** just like (2), for instance (1)
> **Code Identifiers:** extrasyntax1 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Core array methods
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=0)** - [Instructor] The next step with arrays is learning how to dynamically manipulate them.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=5)** Now, they come with several handy methods right out of the box, including ones we've already seen, like append, insert, remove, and sort, which is going to be a new one.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=17)** Let's start by creating a new array.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=20)** We're going to call this characterClasses.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=24)** I'm going to use the concise syntax and let the compiler infer the type.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=29)** So this is going to be an array of strings again.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=32)** Ranger, Paladin, and Druid.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=41)** And down at the third comment, I'm going to add a print statement so that we can see these change sort of in real time and know what's going on.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=52)** To add a new item to the end of the array, we're going to say characterClasses.append newElement.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=59)** Type String.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=61)** And we're going to add a new class called Gunslinger.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=66)** You can also use the += compound operator the exact same way.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=71)** So we'll say characterClasses +=.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=74)** This time we're going to add Healer, and Berserker.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=80)** So you can see that you can add more than one item at a time.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=84)** Again, like with strings, we can insert and remove items from an array based on their index.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=91)** So this is where the dynamic modification comes in.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=95)** So we'll insert a new element.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=99)** Character class is going to be Beast Master.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=102)** And we'll put it at index two.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=106)** You'll see that when our new item goes in, all the following ones get bumped up one index.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=111)** So nothing gets overridden. They just get moved.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=116)** Removal actually works the same way.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=118)** We'll say characterClasses.remove at, and all we have to do is supply an index.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=125)** So we'll take out Paladin, and now we just have Ranger, Beast Master, Druid, Gunslinger, Healer, and Berserker.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=134)** We can also adjust the order of an array by using either the reverse to modify index order directly or reversed to leave the original array as it is.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=145)** So let's do reverse first.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=152)** And we'll be able to see that now the exact items are in a reversed order.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=159)** The same is true of alphabetical sorting.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=161)** Swift makes that super easy with the sort method.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=165)** And now we will see that it is alphabetical.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=168)** B, B, D, G, H, R.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=171)** Perfect.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=174)** And like I mentioned, both of these functions are actually performing the operation on our characterClasses array, which isn't always ideal because you want to keep a clean copy of your data.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=187)** So let's take a look at the other method, reversed and sorted, that return a copy.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=194)** So we'll say reversedClasses = characterClasses.reversed.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=211)** Can also do the same thing with sort.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=214)** So we'll say sortedClasses characterClass.sorted.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=221)** And checking for a specific item is just as easy as checking a string for a character thanks to the contain method.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=228)** Contains is case-sensitive, and you have to be aware of your spelling.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=232)** So if we look for gunslinger with a lowercase G, we're going to get false.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=237)** But if we change that to a capital G, we'll get true.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=242)** Perfect.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=246)** So far here, we've only done the basics of dynamically modifying arrays, but what happens when we create 2D or jagged arrays?
>
> **[4:16](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=256)** That is, arrays that store arrays as their values.
>
> **[4:21](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=261)** Well, let's take a practical approach here.
>
> **[4:23](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=263)** We're going to take a new variable called skillTree, and I'm going to add an annotation just to be super clear about what we're doing.
>
> **[4:32](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=272)** So inside our array are going to be arrays of strings for their values.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=284)** Now, you'll see 2D or jagged arrays declared like this on multiple lines so that the syntax is more readable here when you give it initial values.
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=295)** For the first item, it's going to be an array itself.
>
> **[4:58](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=298)** Say Attack+ for the first item.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=303)** Barrage and Heavy Hitter.
>
> **[5:08](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=308)** Since that entire array is a single element, we separate them with a comma just like we did before.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=316)** For the second array, say Guard+, Evasion, and Run.
>
> **[5:24](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=324)** Now, jagged arrays aren't required to store arrays of the same length.
>
> **[5:28](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=328)** It just turned out this way for the example.
>
> **[5:31](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=331)** As long as the inner arrays always store the same type, compiler is perfectly happy.
>
> **[5:38](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=338)** And to access nested array values, we'll need to what's called chain subscripts together to get down into the data.
>
> **[5:46](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=346)** So for instance, if we wanted to create a variable to store the second value in the first inner array, we could say attackTreeSkill = skillTree at item zero.
>
> **[6:04](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=364)** And inside item zero, we want the third item.
>
> **[6:09](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=369)** If we display this now by clicking the gray box in the inspector, we'll see that we correctly get Heavy Hitter.
>
> **[6:17](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=377)** When you're dealing with nested collection types like this, it's helped to have a mental model about how to access the data.
>
> **[6:24](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=384)** So what skillTree and the chained syntax here, we're essentially say access the entire item at index zero, which is an array.
>
> **[6:35](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=395)** Then take the item at the second index, which is Heavy Hitter.
>
> **[6:43](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods-14526918?u=76281980&t=403)** Hopefully that helps you visualize how to drill into your data.

> [!info]- Semantic Content
>
> **Code Identifiers:** characterclasses (6), skilltree (3), newelement (1), reversedclasses (1), sortedclasses (1)
> **Code Keywords:** let (5), super (2), type. (1), type, (1), this, (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Swift dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=0)** - [Instructor] Like arrays, dictionaries are collection types, but instead of holding single values accessed by indexes, they hold key value pairs.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=10)** Now in these key value pairs, all the keys need to be of the same type and all values need to be of the same type.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=16)** Now, it's important to know that dictionary items are unordered, so their values are accessed by their associated keys not in sequence.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=27)** Let's do the same thing we did with arrays and start off with a simple uninitialized dictionary.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=34)** We're going to call this blacksmithShop and the syntax for a dictionary-type annotation is two brackets.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=42)** The first type is going to be the type of key that we're going to store separated by a colon, a space, and the value type.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=51)** So in plain English, we're saying here that blacksmithShop is going to be a dictionary of string keys and int values.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=61)** To create or initialize an empty dictionary, we use the open and close brackets and a semi-colon.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=67)** That's all it takes.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=70)** And we can also give these initial values.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=73)** So for our first key, I'm going to say an item is bottle and it costs 10.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=80)** Going to I have a shield in here that costs 15 and an ocarina, which costs 1,000.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=91)** Again, since dictionaries store key value pairs, it's important to visualize each element as, essentially, an item with a key property and a value property.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=102)** And dictionaries do have the is empty and count properties available, but since we've used those so much, we're just going to jump into more important things like accessing their values.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=115)** Again, we're going to use subscript syntax.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=118)** So I'm going to try and grab the shield price.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=122)** I'm going to name this variable shield price and I'm going to say, blacksmithShop subscript.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=129)** Now, what do we actually put in here?
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=130)** Well, it's not an index.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=132)** It's the actual key that we use to look up our item.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=138)** Now, shield price is equal to 15 because we've gone in and queried the shield key.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=146)** Accessing a key value pair like this returns an optional value, which we've already talked about.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=152)** That means that our blacksmithShop at key shield could be nothing.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=157)** It could not exist.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=159)** And we'll address that and how to gracefully handle that situation, again, when we get to control flow and optional binding.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=169)** We can also use subscripts with dictionaries to modify values, just like with arrays.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=174)** So we can say blacksmithShop, and I'm going to change the number or the price of the bottle to 11.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=185)** And that's it.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=186)** Now, if you try and update a non-existent item, Swift is going to automatically add it to your dictionary, which is, I have to say, a really useful feature when you don't know or don't want to check each item.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=200)** So we'll say blacksmithShop.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=203)** I call this a towel because you always need to bring your towel and it's going to be a cost of one.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=211)** Let's print this out so we can see it a little clearer.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=213)** And there we go, towel is in there with bottle, ocarina, and shield, and again, these are unordered.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=219)** They will appear in different orders depending on how the compiler executes.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=226)** Now, at this point, you might be asking yourself, how do we access or modify keys or if there's a way to list out all the keys and values without having to essentially iterate or loop through the dictionary.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=238)** The short answer is that keys are not modifiable.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=240)** If you misspelled or need to change a key, you'll have to completely remove it and add a new one.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=247)** However, accessing batch lists of keys and values is easy with the dictionary class's properties.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=254)** So let's capture those right now.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=255)** We'll say a constant variable called all keys is going to be equal to blacksmithShop.keys.
>
> **[4:25](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=265)** Let's also do all values and use the values property.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=273)** Now, if we use our quick jump, hold down command and click on keys, we can see that it's actually going to give us a dictionary, and that's not what we want.
>
> **[4:43](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=283)** We want this to be an array of keys.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=286)** In order to actually cast our blacksmithShop.keys into an array, which is what we want, we're going to explicitly convert it just like we've already done.
>
> **[4:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=298)** We'll close blacksmithShop.keys in parentheses, and add a type annotation to the beginning.
>
> **[5:05](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=305)** Now we want this to be an array of strings so we can use the shorthand two brackets with the string class inside.
>
> **[5:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=313)** Now you'll see the difference here if you go to the inspector and display both all keys and all values.
>
> **[5:21](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=321)** All keys is perfectly readable, whereas all values is not.
>
> **[5:25](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=325)** Let's do the same thing here and finish off.
>
> **[5:29](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=329)** These are integers for our values.
>
> **[5:31](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=331)** We're going to specify that it's an array of ints, and there we go.
>
> **[5:36](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries-14527901?u=76281980&t=336)** We have all our keys and all our values.

> [!info]- Semantic Content
>
> **Code Identifiers:** blacksmithshop (9)
> **Code Keywords:** let (5), type. (2)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** just like (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Core dictionary methods
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=0)** - [Instructor] The next logical step with dictionaries is learning how to update, remove, and otherwise modify their values.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=9)** Let's create a new dictionary to work with.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=12)** I'm going to call this player stats, and this is going to be string keys and int values just like last time.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=22)** I'm also going to give it some initial values, so I'm going to say HP is that 100, attack is at 35, and gold is at 29.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=37)** I'm also going to add a print statement down in our caching and removing items comment, say print playerStats.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=47)** Perfect.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=49)** In some cases you may want to store an overwritten value when updating a key value pair, which isn't possible with subscripts.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=58)** For that we need to use the update value method.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=62)** So we're going to capture the overwritten value in a variable called old value.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=68)** We're going to say player stats, update value.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=73)** So let's declare a new variable called old value, and this is going to store our overwritten value from player stats that we're gona update right now.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=82)** So we'll say playerstats.updatevalue, and we're going to give a new value of 30 for key attack.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=93)** Now you can see in the debug area, that attack is set at 30 and old value stores 35, which was the previous value.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=102)** A note here that update value is going to create a new key value pair if the one reference doesn't exist, just like with subscripts.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=112)** You can also update a dictionary with a another dictionary variable for when you have more than one item to modify.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=119)** For instance, we could set player stats to a dictionary literal and we'll say, this is going to be key evasion for value of 12 and MP for 55.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=135)** Now you have to be careful with this approach because it's going to completely override the existing dictionary elements with the new ones, not merge them.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=143)** So you can see that debugged in our print statement that we only have MP and evasion.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=149)** I'm going to comment that out just so we have our original three items and let's remove gold.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=156)** Now, this is probably the simplest operation.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=159)** We say, player stats, we can use subscript to reference the key and we just set it to no.
>
> **[2:46](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=166)** Now player stats only has attack and HP.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=172)** Again, you may want to store the old removed values during this operation.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=176)** So we can use a similar approach.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=178)** We'll say var removed value.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=182)** Say player stats, remove value for key.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=187)** Let's remove gold again just to keep this consistent.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=192)** So we have the same outcome here, but now remove value holds 29.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=198)** I'm going to copy and paste our last two lines of code down into the caching, removing items comment, just to be organized.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=206)** And we're going to start talking about nested dictionaries before moving on.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=211)** For this example, we're going to create a new dictionary, we're going to call this quest board.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=218)** Now, for this one, I'm going to let the compiler in for our types, from the initial values.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=224)** So for the keys, they're going to be strings.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=229)** So, first quest is going to be fetched gemstones.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=233)** Now here's where it can get a little complicated.
>
> **[3:56](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=236)** The value for each key is going to be a dictionary.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=242)** Indenting like this really again, helps visualize what data you're actually writing.
>
> **[4:08](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=248)** So the dictionary inside fetch gemstones is going to be keys of strings and values of strings.
>
> **[4:23](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=263)** And we're going to add two items in the fetch gemstones objective and secret.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=273)** Now that is just the first item in quest board.
>
> **[4:36](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=276)** So if we go out to our nested bracket, we can add a comma to separate it and add a new item.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=286)** We're going to call this one defeat big boss.
>
> **[4:51](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=291)** That's the key.
>
> **[4:53](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=293)** And for the value again, it's going to be dictionary in itself.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=300)** We're going to have an objective again, beat the boss and a secret, win with 50% health.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=316)** Now let's go in and access the objective for the fetch gemstones quest, which is this item right here.
>
> **[5:23](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=323)** And this is going to require us to use back-to-back subscripts, just like we did with arrays, but we're going to use the keys as lookups instead of indexes.
>
> **[5:34](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=334)** So we'll say var gemstone objective is going to be our quest board.
>
> **[5:41](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=341)** And our first key we're going to look up is fetch gemstones to get into that nested dictionary.
>
> **[5:49](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=349)** And then right back to back with that, we're going to look for the objective key.
>
> **[5:57](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=357)** Now, we're going to get a bunch of errors here because this subscript could very well give us a nil value and we haven't captured that or unwrap that in an optional.
>
> **[6:08](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=368)** Now the correct way to do this is with optional binding, but we haven't gotten there yet.
>
> **[6:13](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=373)** So we're going to allow the compiler to fix this for us just as a stop gap right now, and use a question mark right after the fetch gemstones subscript.
>
> **[6:25](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=385)** Essentially what this does is tell the compiler to break the return chain if any of the keys don't exist and immediately return a nil value.
>
> **[6:35](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=395)** So, because we do objectively know that there is a fetch gemstones key and that that nested dictionary has an objective, we get back retrieve five gemstones.
>
> **[6:48](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=408)** If we change objective to a lowercase O, we're going to get nil.
>
> **[6:54](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods-14524900?u=76281980&t=414)** Again, dealing with nested collection types can be a bit of a headache, but if you use the correct syntax and spacing to make things easier and more visual, it'll go a lot easier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), var (2), override (1), require (1)
> **Analogies:** just like (3), for instance (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** playerstats (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Working with sets
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=0)** - [Tutor] Sets are a great collection type for situations when you need to make sure values are only present once and don't necessarily care about the order of those unique values.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=12)** Let's go down to our first comment, create a new variable.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=16)** I call this activeQuests.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=19)** And for the type annotation, we need to use the set type <string>.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=27)** Now, what this is saying is that we want a set of strings to be stored in activeQuests.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=34)** Now, to give this some initial values we use the exact same syntax as arrays.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=39)** So I'm going to put in a few quest names here.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=41)** Fetch gemstones, and then Big Boss, The Undertaker, and granny needs firewood.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=58)** I'm going to go down to our second comment here and just print this out so we can see what's going on when we actually perform operations with the set.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=66)** There we go.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=68)** A type inference with sets is a bit different than with other types we've seen.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=73)** The compiler can correctly infer from our initial values that we want to set of strings.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=80)** However, we always need to include the set type to tell the compiler that this is not an array.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=88)** Now, inserting and removing items is really efficient with sets because we don't have to worry about indexes or referencing key value pairs like we did with dictionaries.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=99)** So to insert something we can just say activeQuests, insert, new member.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=105)** And I'm going to use the new member of type string.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=109)** I'm just going to say this new quest is called only the strong.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=114)** The same goes for removing.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=116)** We can use the remove function.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=119)** And actually, we don't want to use the index 'cause that just over-complicates things with sets.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=126)** We'll use remove string member.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=129)** And we'll just take out The Undertaker.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=132)** There we go.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=133)** Only the strong is inserted on the end.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=135)** And The Undertaker is removed.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=139)** We can also check if a unique value exists in activeQuest, just like in our other collections with the contains method.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=146)** And again, this is case and spelling-sensitive.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=150)** So be careful here.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=151)** And since all-4-one isn't in activeQuests right now, which going to return false.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=158)** Lastly, we can sort, depending on what you need with your collection data.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=163)** Now, sorting a collection can be simple as we've seen or complex, depending on what you need to do with your data.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=169)** But the sorted method can at least alphabetize our set easily.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=174)** So we can say activeQuests sorted.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=178)** Here in the auto-complete it's a good time to point out that all the collections we've used sorted or reversed functions on can also take predicates, which are essentially additional rules for how the operation should be performed.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=192)** So that's what this second sorted function with the complicated syntax is.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=198)** It's still a bit early to talk about those, but we'll cover them later on when we get to closures.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=204)** So I'm going to actually use sorted for now.
>
> **[3:28](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=208)** If we click the show gray square in the inspector on the right, we can see that they're now alphabetized.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=221)** One last note here.
>
> **[3:43](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=223)** Sets can only store values that are hashable.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=226)** Meaning they're able to provide a hash value of themselves, which is why some of these functions have the type hashhable.
>
> **[3:55](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=235)** Now, all of Swift's basic types are already hashhable by default.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=238)** So you don't really have to worry about it at this point in your Swift skills.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=242)** However, if you want to store your own custom types in the future, they'll need to adopt what's called the hashable protocol.
>
> **[4:09](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets-14529815?u=76281980&t=249)** Now, more to come on protocols later.

> [!info]- Semantic Content
>
> **Code Identifiers:** activequests (5), activequest (1)
> **Code Keywords:** function (2), let (1), type < (1), default. (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)
> **Speakers:** - [tutor] (1)

#### Core set methods
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=0)** - [Instructor] Because sets only store unique values, there are a number of useful operations that we can perform with them, that would require a lot of hard coded logic if we were using something like an array or dictionary type.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=13)** I've already copied over the activeQuests set from the last playground, so we can get right to work.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=20)** Now, all the set operations we're going to use in this example need a second set to work against.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=26)** So we're going to create a new variable here.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=28)** We're going to call this completedQuests, type Set, let type inference do its thing.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=36)** We're going to add some initial values.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=38)** We're going to say, Big Boss, All-4-One, and The Hereafter.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=49)** Perfect.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=50)** Now the four fundamental set operations are intersection, difference, union, and subtraction, all of which pretty much do exactly what they sound like.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=60)** So if we wanted to return a new set containing all the common values between both sets, we could declare a new variable to store that result called commonQuests.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=72)** And here we can say activeQuests at the intersection of another string set.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=80)** Here, we can just feed this completedQuests.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=85)** Since Big Boss is the only value in both, that's what's going to be returned and stored in commonQuests.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=91)** We can use the symmetricDifference to return a new set with all values that are not in both.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=97)** So the exact opposite of intersection.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=100)** So we'll say, var differentQuests.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=104)** It's going to equal activeQuests, symmetricDifference.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=110)** And for the other sequence, again, we're going to use completedQuests.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=116)** If you pop open the display from the inspector, you can see that differentQuests now has a really long list of all the different values between both sets, which is everything but Big Boss.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=129)** Now, the union operation creates a new set composed of all values of both sets, regardless of what they are, or if they're present in each other.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=139)** So we'll say, var allQuests equals activeQuests, union of.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=150)** We pop up in the gray box view on the inspector.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=153)** We can see that we have a scrolling list now, 'cause there's so many, and all of our sets are combined.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=160)** Finally, subtracting two sets, returns a new set minus the values from a second set.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=167)** So we can say, clippedQuests, it's going to equal activeQuests, subtracting another sequence.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=176)** For that, again, we'll use completedQuests.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=180)** Perfect.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=182)** For situations where you want to dynamically perform any of these operations directly on a set, instead of returning to modified version, you can use the formIntersection, formSymmetricDifference formUnion, and subtracting methods respectively.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=197)** They do the exact same thing.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=201)** Now there's more functionality in sets that you can make use of, including subsets, super sets and determining set membership and equality.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods-14527898?u=76281980&t=209)** And those are outside the scope of this essential course, but, again, are well laid out in the docs.

> [!info]- Semantic Content
>
> **Code Identifiers:** activequests (5), completedquests (4), commonquests (2), symmetricdifference (2), differentquests (2)
> **Code Keywords:** var (2), require (1), type. (1), let (1), finally, (1)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Swift tuples
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=0)** - [Instructor] In Swift, tuples can take a group of values and store them as one compound value.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=6)** Now, this sounds like an array, I know, but tuples have the ability to store values of different types in a single variable.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=13)** So you can mix and match as you need.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=16)** For this example, we're going to create a tuple to store Attack data.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=20)** So let's start out with our first variable.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=23)** We're going to call this uppercutAttack, and for the type annotation, we use an open and closed parentheses.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=33)** Now, inside here, we need to declare the types and in what order they'll be stored.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=39)** Our uppercutAttack is going to have a name which is a string, a damage value that's an integer and a rechargeable property that's a Boolean.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=50)** We could also use type inference by assigning some literal values to our uppercutAttack.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=57)** So we could say this is going to be called uppercut Smash, and then we would add in the damage value, I'm going to say this we'll do 25 and it is rechargeable.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=73)** To access each value individually, we use dot notation and select the index of the value we want.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=80)** So uppercutAttack is going to have indexes of zero, one and two because at zero index, just like our other collections.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=88)** So our value at index zero is going to be the name, uppercut Smash, uppercutAttack at index one is going to be our damage and uppercut at index two is our true rechargeable property.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=103)** Now this is fine when you know what values the tuples is storing, because you're looking right at it.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=108)** But for clarity you'll want to decompose or unpack, as Swift calls it, each tuple value into its own named variable, which is much, much more efficient.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=120)** To unpack uppercutAttack, we need to declare a new variable.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=124)** But instead of having a variable name, we're going to have three inside a pair of parentheses.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=132)** Now you'll notice that we need to match this with the type signature or the type annotation that we've already declared.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=141)** So we'll say, var, you want the variable name to be attack, damage and rechargeable.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=149)** And once we assign this to uppercutAttack, the Swift compiler is going to do all the parsing for us.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=156)** So instead of calling the indexes like we did before, we can just say attack, damage and rechargeable.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=164)** And the tuple we've defined as it is now is okay for prototyping.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=168)** But when you're writing production Swift, you'll want to name your tuple variables for clarity.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=176)** And we can do this by either adding individual value names to the type annotation or directly to the assigned literal value, whatever style really makes more sense to you.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=186)** So I'm going to show you both ways.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=188)** We're going to declare a new tuple.
>
> **[3:11](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=191)** This is going to be shieldStomp, and we're going to use the type annotation approach here.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=199)** We'll say name string type, damage int and rechargeable Bool.
>
> **[3:27](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=207)** So again, we're just modifying our type annotation to add names, whereas with uppercutAttack, we just define the types.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=218)** Let's do the literal values now.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=221)** We'll say this is going to be a planetSmash attack.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=227)** And here we can say name, planet smash, damage, 45, rechargeable and we'll say it's true for this one.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=244)** Either of these approaches is going to let you get the individual values by name instead of by index or by manually unpacking the tuple.
>
> **[4:13](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=253)** So this is closer to a regular variable or collection that we've defined so far.
>
> **[4:19](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=259)** Note here, that because we didn't initialize shieldStomp, you still have to do that just like any other variable.
>
> **[4:25](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=265)** So we could say shieldStomp.damage, it's going to equal a hundred.
>
> **[4:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=272)** Or we could just print out or reference the planetSmash.rechargeable.
>
> **[4:40](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=280)** I'm going to copy out our shieldStomp declaration, just pop that into the last comment here for organization and reference.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=289)** And we're really all set with tuples.
>
> **[4:52](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=292)** And these are really great for returning values from functions or storing temporary groups of values.
>
> **[4:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=298)** However, it's tempting as it may be in the future to use tuples to create and store complex data structures.
>
> **[5:05](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples-14528854?u=76281980&t=305)** It's still a better idea to use classes instructs for that as we'll see later on.

> [!info]- Semantic Content
>
> **Code Identifiers:** uppercutattack (8), shieldstomp (4), planetsmash (2)
> **Code Keywords:** let (3), var (1), type, (1)
> **Definitions:** is a  (1), defined as (1)
> **Analogies:** just like (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Merchant shop
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=6)** - Okay, it's time for another code challenge, so get ready.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=10)** We're going to hit on all the collection types we've worked with in this chapter to build up our own little merchant shop, or at least the data behind one.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=17)** I'll be asking you to reference and modify shop data so you can get some hands-on experience.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=23)** It shouldn't take you more than 10 minutes, but if you get stuck, head over to the next video for my solution.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/challenge-merchant-shop-14530752?u=76281980&t=29)** Have fun and happy coding.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### Solution: Merchant shop
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=0)** - [Narrator] All right, let's get into our merchant shop challenge here with our first task.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=10)** This is going to be to create two collections.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=13)** The first is going to be an array of strings.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=16)** The second is going to be a dictionary, with keys that match our array items.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=20)** And their values are going to be the item prices.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=24)** Let's start out and call our new variable shopitemsArray.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=30)** We'll give this literal values, let's say we can get a Stone Shield, a Bronze Hammer or a Gold Helm.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=43)** For the dictionary, I'm going to call this shopItemsDictionary.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=49)** And again I'm going to use the, values in our array for our keys.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=53)** So Stone Shield is going to be priced at 15, Bronze Hammer is going to be 25, Gold helm is going to be 35 and here we want one more value that's not in shopItemsArray so that we can check for it later.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=73)** I'm going to call this Diamond Longsword, and this is going to be at 100, it's the most expensive.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=81)** Our second task is to use the contains method to check if shopItemsArray has an item we want.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=90)** In this case we're going to store the result.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=92)** We're going to call this longswordInStock, and I want to look up if the shopItemsArray has a Diamond Longsword in it.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=112)** Now this is going to return false because it's not there yet.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=114)** So in task number three, we're going to use the insert method to add it.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=120)** So we'll say shopItemsArray, insert new element, Diamond Longsword at index 2.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=131)** Lets just make sure this works Stone Shield, Bronze Hammer, Diamond Longsword.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=136)** You know what I'm going to put that on the very end and switch the index to 3 Perfect.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=144)** For task number four, we're going to create a variable called selectedItem and assign it an item from shopItemsArray using subscript and indexes.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=155)** So we'll say shopItemsArray at index 2, why not, we'll grab the Gold Helm.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=163)** For task number five, we're going to use our selectedItem as a key and look up its price in our shopItemsDictionary.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=172)** So we're going to say var itemPrice.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=175)** Actually, let's be a little bit more specific, selectedItemPrice equal shopItemsDictionary for key selectedItem.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=189)** Now in the inspector we see that the price is 35, which is correct.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=195)** For the remaining tasks, we're going to be working with sets and as we know from our previous video, we need two of them to work with.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=203)** So let's set out one set called fullArmor of type set, and we're going to give it some initial values, Diamond Helm, Diamond Armor, Diamond Greaves, and Diamond Braces.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=225)** Our second set is going to be called currentArmor, and this needs to have some values that are different than fullArmor so that we can perform the operations.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=238)** I'm going to say I only have a Diamond Helm and a Diamond Braces equipped.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=246)** For task number seven, we're going to use the subtract method to find out which items were missing for a complete diamond set.
>
> **[4:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=256)** I'm going to say var missingPieces equals fullArmor subtracting from currentArmor.
>
> **[4:27](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=267)** Now if we take a look, missingPieces were missing Diamond Armor and Diamond Greaves, which is correct.
>
> **[4:34](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=274)** For the last task, we're going to create a tuple, assign it some named variables and give it some initial values.
>
> **[4:41](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=281)** We're going to say var armorPiece is going to be equal to a named variable called Diamond Braces, a cost which is going to be an integer and canEquip which is going to be a Boolean and it'll be true right now.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=303)** Just to make sure this all works, we're going to say armorPiece canEquip and armorPiece.cost Perfect.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-merchant-shop-14524897?u=76281980&t=314)** All our values are coming out the way they should and can be referenced.

> [!info]- Semantic Content
>
> **Code Identifiers:** shopitemsarray (7), shopitemsdictionary (3), selecteditem (3), fullarmor (3), armorpiece (3)
> **Code Keywords:** let (5), var (3), switch (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Application Control Flow

> [↑ Back to Table of Contents](#table-of-contents)

#### Controlling your destiny
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/controlling-your-destiny-14531795?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/controlling-your-destiny-14531795?u=76281980&t=0)** - Making decisions using code really gives you that feeling of controlling how your application works.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/controlling-your-destiny-14531795?u=76281980&t=6)** Handling optional types correctly, laying out different adventure paths for your character to take, even computing whether they're still alive at all, comes down to control flow.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/controlling-your-destiny-14531795?u=76281980&t=16)** If statements, for loops, switches paired with defensive programming are all going to be the foundation of every creative feature you develop.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/controlling-your-destiny-14531795?u=76281980&t=24)** So let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - making (1)

#### The if statement
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=0)** - We're going to start our exploration of control flow with the if statement, which is the simplest way to execute conditional code in your applications.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=9)** If statements are best suited to handling decision trees with three branching options or less.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=15)** If you find yourself with an if-else statement extending beyond a few conditions, it's probably time to use a switch, which we'll talk about later in this section.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=25)** Let's start by recreating some test variables from our very first video.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=30)** We'll say currentHealth = 95 and maxHealth = 100.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=39)** Now let's check for the condition where currentHealth is greater than or equal to maxHealth.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=46)** So we use the if keyword followed by an expression we want to evaluate.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=51)** So we'll say, "currentHealth >= maxHealth", open and closed curly braces.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=60)** Inside the body of the statement, we'll just print out, "HP is at maximum."
>
> **[1:09](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=69)** You'll notice we used a new operator here which is part of the comparison family.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=74)** Now these operators check greater, less, equal, or not equal conditions, all of which I've commented out for your reference here.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=84)** Now what we're saying here with the if statement is that if our expression evaluates to true, then execute whatever commands we have inside the curly braces.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=95)** However, we see that because our currentHealth isn't equal to our greater than maxHealth right now, nothing is being printed out, which means we need to define more cases to handle those different situations.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=108)** We can do that by adding an else-if statement and we tack that on right after the curly brace of the if statement.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=116)** So we'll say "else if currentHealth <= 50" a new pair of open and closed curly braces, and for this case, we're going to print out, "Grab some health soon!"
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=132)** Now, finally, if neither of those conditions are met, we can handle the fall through with a catch-all else statement.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=139)** Again, we just tack this on to the end of the last closed curly brace, give it its own set of open and closed braces and print out, "HP is between 50 and 100."
>
> **[2:35](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=155)** On our debug area we're seeing else statement printout, but if we change current health up here to something different, so say 45, we're going to get a different one, "Grab some health soon!"
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=167)** If it's at 100, we're going to get, "HP is at maximum."
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=172)** Else-if statements also let us evaluate multiple expressions using the AND and OR operators that we've already seen.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=180)** So for quick reference, we can say, "if currentHealth > 90" or "currentHealth <= maxHealth" open and close curly braces, And we'll just print out, "You're doing just fine."
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=203)** Perfect.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=205)** A note here, if you're coming from another language where you need open and close parentheses around each expression, Swift will allow you to do that with no problem, it's just not the Swift approved syntax, it sort of clutters up the code.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement-14529811?u=76281980&t=220)** But if that makes you feel more comfortable or at ease, go ahead.

> [!info]- Semantic Content
>
> **Code Identifiers:** currenthealth (7), maxhealth (5)
> **Code Keywords:** let (3), switch (1), case, (1), finally, (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - we (1)

#### Unwrapping optionals
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=0)** - [Instructor] Now that we've seen if statement syntax, we can talk about handling optionals the correct way with optional binding.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=8)** Essentially, we use a variation of the if statement to safely unwrap the optional, whether it's a value or nil, and then store it locally for use.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=18)** I've already created a few optional values that we've used in earlier sections, so that we can get right to work here.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=26)** For our first example, we're going to unwrap item gathered.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=30)** So here we use the if keyword and then let, and here we have to declare the name of the locally unwrapped optional.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=38)** So we'll call that item, and it's going to be equal to item gathered, followed by an open and closed curly braces.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=48)** Now in plain English, we're saying, if item gathered is not nil, unwrap the value and assign it to item, which we can then use in the body of the if statement.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=59)** So we could print out an interpolated string here, you found an item.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=69)** I'm going to say that again.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=70)** The unwrapped optional value item is only accessible within the if statement.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=76)** Trying to reference it anywhere else will come up as a blank in auto-complete.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=81)** And because item gathered is nil right now, nothing's going to execute, and our program won't crash like it did with forced unwrapping.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=89)** Unwrapping optionals like this is going to become second nature as you continue with Swift.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=96)** And we can add an else statement to easily handle the nil value.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=100)** And we can just print out, sorry, no item found.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=110)** And just to make sure we're unwrapping item gathered correctly, I'm going to set it to, let's say Diamond Longsword again.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=117)** Why not?
>
> **[1:59](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=119)** And we'll see that you found a Diamond Longsword prints out and is unwrapped correctly.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=126)** Now in cases where multiple optionals need to be unwrapped at the same time, you can use a shorthand or a single line syntax.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=134)** For example, let's unwrap the is shop open, and query for a dictionary value at the same time.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=143)** So we'll say, if let shop open equals is shop open, which is our optional boolean.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=150)** And here, we just add a comma to separate our multiple optionals that we're unwrapping this line.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=157)** We don't need a new if keyword.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=158)** We can go right into let searched item.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=164)** We want that to be equal to blacksmith shop for key shield.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=171)** Open and closed curly braces.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=175)** Now, if both of these are found or are not nil, we're going to print out we're open.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=184)** Shop open.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=189)** And we have a searched item in stock.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=197)** If neither or only one of these optionals are nil, we're going to print out, sorry, either we're not open or don't have your item.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=211)** I'm going to harp on this again.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=213)** The gotcha with unwrapping multiple optionals in the same line is that they both need to be non nil values.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=220)** So this is sort of like having the and operator in an if statement.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=225)** They both have to be true.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=227)** Right now, is shop open is true.
>
> **[3:50](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=230)** And there is a shield in the blacksmith's shop dictionary.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=234)** However, if we go up to is shop open and delete its initial value, we're going to get the sorry, either we're not open or don't have your item debug log.
>
> **[4:05](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=245)** This syntax is applicable to our previous example with optionals, including the two dimensional arrays and dictionaries we worked with.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=255)** So I've copied our quest directory up at the top of the playground already with the same values we used earlier.
>
> **[4:21](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=261)** So let's try an unwrap one of our objectives safely this time.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=266)** So we'll say, if let fetch gems equals quest directory, and here we need to use the chain syntax for our subscript.
>
> **[4:38](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=278)** So we'll say we want to look up the fetch gemstones dictionary.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=284)** Add the question mark to denote that it's an optional.
>
> **[4:47](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=287)** It might not exist.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=289)** But if it does, to query the objective within.
>
> **[4:56](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=296)** Now, if we find this quest, I'm going to print out active quest object is our fetch gems local variable.
>
> **[5:07](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=307)** Else.
>
> **[5:08](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=308)** We're just going to print out that quest is no longer available.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=316)** Perfect.
>
> **[5:17](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals-14530750?u=76281980&t=317)** Now we've got active quest object retrieve five gemstones.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (1), delete (1), else. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)

#### Using for-in loops
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=0)** - [Instructor] For-in statements are used to iterate or loop through collections like arrays, dictionary key-value pairs, ranges, even the characters in a string.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=11)** I've already set up some test variables to get things going.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=14)** So let's take the string first and iterate through each of its characters.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=19)** We start with the for keyword to declare the loop, then assign a local variable to capture each iterated value.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=27)** So I'm going to call this for stringCharacter, then we use the in keyword and specify what collection we want to loop through, in this case, playerGreeting.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=41)** Follow this up by an open and closed curly braces, where we can perform some kind of operation on the locally stored string character variable.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=51)** Well, in this case, I'm just going to print out stringCharacter.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=56)** Now, in English, we've essentially said loop through each value in the playerGreeting string, store the value in stringCharacter for that loop, and print it out each time.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=68)** We can see in the debug log that each individual character has been printed out on its own line.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=74)** You'll also notice that we didn't have to specify a type for stringCharacter because Swift is going to infer the correct type from playerGreeting.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=84)** Now, the same syntax applies for an array.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=86)** So let's loop through our armor types, capture each one locally in a variable called armor, and just print them out.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=100)** Again, Swift infers the type correctly, and we get a similar debug log with Heavy Plate, Hunters Gear, and Mage Robes printed out.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=109)** Dictionaries are a bit different, since they hold key value pairs instead of single values.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=114)** But the syntax is the same.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=117)** For instance, if we wanted to loop through all the keys by themselves, we could say for weaponKey in weapons.keys, open and closed curly braces, and we'll print out each weaponKey.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=133)** Perfect, now we've got Longsword, Dagger, and Mace.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=138)** Now, the same goes for values.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=139)** If we wanted to change this, we could say we want to store the weapon values in weapon.values.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=149)** Now we'll get the prices, 75, 25 and 150.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=154)** This isn't really efficient to do the keys and values separately, since most of the time, you'll want them both to be able to display the correct data.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=163)** So we can say for, use an open and closed parentheses, and specify a local variable for the key.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=172)** So we can say this will be weapon and the value, which is damage, in weapons.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=181)** Now, let's print these out.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=183)** We'll just say weapon, and this'll have the damage.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=193)** Now in our debug log, we have all of the dictionary values and keys, right where we need them together.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=199)** So Dagger is 25, Mace is 75, Longsword is 150.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=205)** To wrap things up here with the for loop, we're going to work with range operators, which we only briefly touched on.
>
> **[3:32](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=212)** Now, there are three kinds of ranges available.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=214)** They're called closed, half-open, and one-sided.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=218)** It's easier to show these rather than tell.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=220)** So we'll say for, and again, we need a local variable.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=225)** I'm going to call this indexNumber, in 1, followed by three periods and 10.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=234)** Now, what we're saying in English is that for every number or index number in 1 through 10, do something.
>
> **[4:01](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=241)** So we'll just print out each index number.
>
> **[4:05](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=245)** Now we're going to get 1 through 10 printed out in our debug log, and this is called a closed range, meaning it takes into account the first number of our range, which is 1, and our last one, which is 10, and includes those plus everything in between.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=260)** For one-sided ranges, we can declare a starting or ending point of the range.
>
> **[4:25](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=265)** And Swift runs the loop, as long as there are values remaining in the specified direction.
>
> **[4:31](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=271)** So we can say for armor in armorTypes, subscript 0 followed by three periods.
>
> **[4:43](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=283)** Now, what we've said here is for every armor in armorTypes, starting at its first item, which is index 0, and going 'til there's no more.
>
> **[4:53](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=293)** So we can print out armor.
>
> **[4:56](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=296)** Again, we're going to get the same output 'cause we're doing the same thing we did before when we just printed out armor in armorTypes.
>
> **[5:06](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=306)** You want to be careful with one-sided ranges because they can cause infinite loops if the value you're iterating over doesn't have a set number of items.
>
> **[5:15](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=315)** So if we had just said for indexNumber in 1... without the 10, that for loop would iterate forever from 1 to a never-ending infinite number, and Xcode would crash.
>
> **[5:30](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=330)** The last kind of range operator we can use is called a half-open range, which are written a little differently, basically allowing you to specify the last value is left out.
>
> **[5:43](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=343)** So we'll say for indexNumber in 1, and for half-open ranges, we only use two periods and a left arrow, and we'll say up to 10.
>
> **[5:57](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=357)** And here, we're just going to print out our index number again.
>
> **[6:01](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=361)** This time, we're going to get 1 through 9, with 10 left out.
>
> **[6:07](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=367)** Now, we can also use one-sided ranges here.
>
> **[6:11](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=371)** And let's say, again, using our armorTypes, we'll say for armor in armorTypes from the start to the second index, we're going to print out our armor.
>
> **[6:32](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=392)** Now we're just going to get index 0 and index 1, which is Heavy Plate and Hunters Gear.
>
> **[6:37](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=397)** Our third item, which is Mage Robes, is going to be dropped off.
>
> **[6:42](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=402)** Now, you have to be careful here too, because we could conceivably give an index number that exceeds the number of items in your collection, and that's going to generate a range error.
>
> **[6:54](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=414)** Now, it's safer to use the collection's count property as the upper end in this kind of situation.
>
> **[7:00](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=420)** So we can change this, instead of using the index 2, we can say we're going to loop through from the beginning of our armor types until our armorTypes.count.
>
> **[7:11](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops-14531792?u=76281980&t=431)** This is going to make this safe, and we'll never get an out of range exception.

> [!info]- Semantic Content
>
> **Code Identifiers:** armortypes (6), stringcharacter (4), playergreeting (3), indexnumber (3), weaponkey (2)
> **Code Keywords:** let (4), case, (2), this, (2), for, (2)
> **Definitions:** is called (2)
> **Warnings:** be careful (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### While loops
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=0)** - [Instructor] Now, WHILE loops are exactly what they sound like.
>
> **[0:03](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=3)** While some defined condition is true, do something.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=6)** That's really that simple.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=8)** There are two types of WHILE loops, the standard one and the repeat one.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=13)** For cases when you don't know the number of times you'll need to perform some action, like with a foreign loop, the standard loop is going to be the way to go.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=23)** So let's start by creating a player variable.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=26)** We'll call this playerHealth, and we'll set it to five.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=32)** Now we're going to say, as long as player health is greater than zero, we're going to print out something.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=39)** So we use the while keyword to declare the loop.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=42)** We give it an expression, just like with the four.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=46)** So we'll say while player health is greater than zero, open and closed curly braces.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=53)** Now the one thing we need to be careful of with WHILE loops is that we have to manually decrease our expression variable so that it's not an infinite loop.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=63)** So at the very first line of our WHILE loop body, we're going to say player loop -= 1, and we'll just print out, "Still kicking".
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=76)** Now you can see in the debug and in the inspector that our expression, playerHealth greater than zero, is going to be evaluated at the beginning of each loop.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=85)** So five statements print out.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=88)** On the sixth, playerHealth is no longer greater than zero, so the WHILE loop finishes.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=95)** Now, repeat WHILE loops are essentially the reverse.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=98)** The expression is checked at the end of each pass, instead of at the beginning.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=103)** So let's create the same thing, and we'll use the repeat keyword.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=107)** Here, we use open and closed curly braces for the loop body.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=112)** Again, we have to manage the increment or decrement of the value we're evaluating.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=117)** So we'll say playerHealth -= 1.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=121)** We'll print HP at, and we'll just say playerHealth.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=128)** And after the repeat open and close curly braces, we're going to add the while keyword, and the expression.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=136)** So playerHealth is greater than zero.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=144)** We're going to need to comment out our previous WHILE loop because that has already put our player health down to zero.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=150)** So in order to get our repeat count working correctly, let's give that a rerun and see our output.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=158)** There we go.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=160)** HP at 4, 3, 2, 1, 0.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/while-loops-14528859?u=76281980&t=165)** Both of these WHILE loop approaches are useful, but you have to pay attention to the behavior you want when choosing between them for a specific approach.

> [!info]- Semantic Content
>
> **Env Vars:** while (8)
> **Code Identifiers:** playerhealth (6)
> **Code Keywords:** let (3), pass (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### The switch statement
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=0)** - [Instructor] Switch statements take values that we define and run them against possible matching patterns.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=7)** Each match can have a different block of code, which is called a case, that is going to execute when a match is made.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=15)** I've got a few test variables again for us to work with.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=18)** So let's start by checking what value the initial variable is storing.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=24)** We start out with the switch keyword and the X code editor is going to handily print out or set up our blueprint for the switch statement.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=34)** And what this is really saying is that we're going to switch on a value for a number of cases, and we can define as many as we want.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=42)** And we end it with a default, which is going to catch any fall through or any cases that we don't explicitly define.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=51)** Let's see that in action, it's a bit easier to visualize.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=54)** We'll say we're going to switch on initial, the case or the first case we're going to declare is if initial is holding a capital H.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=65)** If it is, we're going to use a colon, which declares the case executable block, anything that goes after this colon is going to be printed out or executed if initial matches the capital H character.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=78)** So we're going to print out, I'm guessing Harold, and we can define as many cases as we want as I mentioned, as long as we use the case keyword and a new pattern.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=90)** So this time I'm going to check if initial is holding a capital A, followed by a colon and a new print statement, maybe Alita.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=101)** Now for the default, this is going to execute if initial is neither a capital H nor a capital A, I'm going to print out, I've got nothing.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=114)** Should be noted that the code blocks in between case statements are not limited to one line.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=119)** You can use as much space and put as much logic in there as you need.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=124)** This is just a really simple example.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=128)** And one thing to be aware of with switch statements is that they need to be exhaustive.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=133)** So if we left out the default statement here, we're going to get an error.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=136)** Switch must be exhaustive.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=139)** This is saying that we're only really defining two cases and initial could have an infinite amount of cases.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=145)** So we need to have that default class there.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=150)** I'm going to put the default case back in and we should be good to go with the debug statement, printing out, I'm guessing Harold.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=158)** If we changed initial to capital A, we'll get maybe a Alita.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=164)** And if we change it to anything else, we'll get I've got nothing.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=170)** A note here, we're not going to go through the syntax of switching on all value types that we've encountered so far, because it's largely the same.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=179)** But you should know that cases can also be defined using ranges and multiple values, which we're going to look at next.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=188)** If you look at our test variables, we've got HP and MP, which are both integers.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=192)** So we're going to do a switch that's going to evaluate both of them at the same time for each case.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=198)** So again, we'll say switch and for the value we're going to need open and close parentheses, if you have more than one value to evaluate.
>
> **[3:27](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=207)** And we'll say MP and HP.
>
> **[3:32](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=212)** Now for the pattern, it's the same thing.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=214)** We want to match, let's say if MP is 15 and HP is 10.
>
> **[3:42](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=222)** We'll print out, great job, why not.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=227)** Now for the second case, let's use a range.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=229)** We'll say if MP is between one and 15 or 20 up to, but not including 25.
>
> **[4:03](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=243)** Print out, ranges are the best.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=250)** Finally, we can't forget our default.
>
> **[4:12](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=252)** So we'll print again, I've got nothing.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=258)** Now, since our HP and MP values don't match any of our cases, except our default, that's kind of boring.
>
> **[4:24](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=264)** So I'm going to change HP to 22 and M P to five, so that we get our middle case statement.
>
> **[4:35](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=275)** Ranges are the best, all right, so that's working.
>
> **[4:39](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=279)** Looking at our switch now, it's easy to see how useful it might be to locally store and use our switch variables inside each switch case.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=289)** Right now we cannot access or reference MP and HP inside our print statements.
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=295)** We can access them as they are, but we can't capture them.
>
> **[5:01](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=301)** However, switch statements do allow something called value binding.
>
> **[5:05](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=305)** So let's create a new case.
>
> **[5:07](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=307)** We're going to try this out.
>
> **[5:08](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=308)** We're going to say case, and we're going to declare a local MP variable and a local HP variable.
>
> **[5:19](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=319)** Here, we're just going to print out our local MP and local HP.
>
> **[5:28](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=328)** And this isn't actually going to do anything because we only bound the values, but we haven't set up an actual expression.
>
> **[5:35](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=335)** So here we need a new keyword called where.
>
> **[5:40](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=340)** Now we can specify a match pattern for our switch so we'll say where, local MP, plus local HP is greater than 20.
>
> **[5:54](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=354)** Now here's an interesting thing about switch cases.
>
> **[5:57](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=357)** The moment a match pattern is made essentially the switch statement stops.
>
> **[6:04](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=364)** So right now our ranges are the best case is printing out.
>
> **[6:09](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=369)** And even though our new value binding case is true and it should print out, the switch isn't even getting to that.
>
> **[6:17](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=377)** So you have to be careful with the order of your cases because they could stop before your condition that you actually want to check for is met.
>
> **[6:27](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=387)** So let's change HP to 30, and MP to 40, just so we're out of both of our first cases and we've printed out 40 and 30.
>
> **[6:39](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=399)** I know that was a lot of different syntax to take in all at once, but it's important to understand how extensible and flexible switch statements really are.
>
> **[6:49](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=409)** Now we'll get to how to pair them with something called an enum type or an enumeration type later, because that's really where they shine.
>
> **[6:56](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement-14530757?u=76281980&t=416)** So more on that coming up.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (18), let (6), case, (3), default, (3), case. (3)
> **Warnings:** be aware (1), be careful (1)
> **Prerequisites:** set up (2)
> **Cross-References:** coming up (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### The guard statement
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=0)** - [Instructor] The guard statement in Swift acts like a really strict version of an if-else statement, allowing us to be much more explicit when making sure our code only executes in certain situations.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=13)** Now you might be thinking, well, we could just do this with an if, an else-if, an else, and so on.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=19)** And while that's true, the guard statement is just more concise with how it handles failing conditions.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=27)** I've already set up a shop items dictionary, and a current gold integer value for us to work with.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=33)** So let's loop through our shop items, but hold off any logic until we get a guard statement set up.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=41)** So we're going to use our for syntax that we've already learned, and we're going to locally store the item and the price in shop items.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=52)** And that's all we're going to do right now.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=55)** Now to determine if we can afford certain items, we're going to use a guard statement to check our current gold against each item in the dictionary.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=66)** So the guard statement naturally uses the guard keyword followed by an expression.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=71)** So we're going to say guard current gold is greater than equal to the price of the current item being looped over.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=81)** And if that's not true, we're going to add the else block and print out you can't afford the, and we'll insert or interpolate the item.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=98)** And you'll notice that the guard statement is a little different than the if here, because there's no if body, there's only an else, which is exactly how it's supposed to work.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=106)** So we're saying we can only get past this line of code if current gold is greater than or equal to the individual item price.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=116)** At this point, the compiler is throwing us an error saying that the body of the guard statement can't fall through to any following code.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=123)** And that's true.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=124)** It's also suggesting that we either use a return or throw keyword to fix this.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=130)** Now the return keyword just tells the compiler to exit out of the current loop entirely, which isn't what we want.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=137)** While the throw keyword is an error handling feature that we'll cover later.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=142)** For this situation, we're going to use the continue keyword, which is going to stop the current loop we're in, but still continue to the next one instead of exiting out entirely.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=157)** And we get one debug log, you can't afford the Excalibur.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=161)** So what's happened is we've looped through magic wand and our guard statement past 'cause we have more than 10, iron helm, we have more than five, but Excalibur, sadly, we are far short.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=174)** Now if our guard gets passed, let's add another print statement just so we can make this a little more clear.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=182)** We'll say, go ahead.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=184)** The item is yours for price.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=194)** Perfect. Go ahead.
>
> **[3:16](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement-14528848?u=76281980&t=196)** The iron helm is yours for five, magic wand for 10, but you can't afford the Excalibur.

> [!info]- Semantic Content
>
> **Code Keywords:** if, (2), else, (2), let (2), throw (2), continue (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Game logic
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980&t=0)** - All right, congratulations on unlocking another chapter challenge.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980&t=10)** For this one, you're going to be tasked with creating some simple game logic, with the loops and conditional logic we've learned so far.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980&t=17)** You're also going to be unwrapping a few optional values and using the switch and guard statements to keep your code safe.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980&t=24)** This one might take a bit longer than the previous challenges, somewhere between 10 and 15 minutes, but if you're stuck, go ahead and head over to the next video for my solution.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/challenge-game-logic-14528850?u=76281980&t=34)** Happy coding.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1)
> **Cross-References:** next video (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Game logic
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=6)** - [Instructor] All right, let's dive into our Game Logic challenge and tackle the first task of creating two optionals for us to work with.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=15)** I'm going to declare my first optional variable called this lefthandWeapon.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=21)** It's going to be an optional string, and I am going to give it an initial value.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=30)** I'm also going to create a righthandWeapon, optional string with no initial value, so it's storing nil.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=40)** For the second task, I'm going to unwrap both of these using the single line, shorthand syntax.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=47)** I'm going to say, if let leftWeapon equals lefthandWeapon
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=55)** and let rightWeapon equals righthandWeapon.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=62)** If both of these unwrap successfully, I'm just going to print out an interpolated string, looks like, your leftWeapon and rightWeapon
>
> **[1:19](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=79)** are an even match for me.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=85)** Else if one or the other of these optionals is nil, I'm going to print out, I didn't bring enough hardware for this.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=98)** And there we go.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=99)** Since righthandWeapon is nil, we're going to get our else print out.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=105)** For our third task, we're going to create a dictionary of names and experience points.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=112)** And we're going to loop through those in the next task.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=116)** So we'll say, var playerExp we'll give this a few initial key value pairs.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=124)** Let's say, I have 233, Steven has 489
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=132)** and Bob the Noob has 0, poor Bob.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=139)** Task four is going to be to use a foreign loop to capture our keys and values and playerExp.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=146)** I notice there's an extra T on there, so I'm going to delete that.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=149)** And start the for loop, use our parentheses syntax so we can capture the keys and values locally.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=157)** I'm going to name this, name and exp in playerExp.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=165)** Open and closed curly braces.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=167)** And for task five, I'm going to move the comment in here Because it's to add a guard statement.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=178)** So we'll do that next.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=182)** We'll say guard exp, and we want to make sure that all our players at least have one exp to continue, otherwise they're in trouble.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=195)** So we'll say guard exp is greater than zero, else if any of our players don't have more than one experience points, I'm going to print out, name of the player you need some serious help.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=216)** Don't forget to use the continue keyword here so that we pop out of this iteration of the loop, but we keep going with the other players.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=227)** I'm going to move comment number six into our for loop because we're going to use a switch statement here to check the exp value of each player.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=240)** We're going to say switch on exp and for the first pattern, we're going to check if it's 32.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=250)** We're just going to print out, looking good.
>
> **[4:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=257)** For our second case, we're going to define a range.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=260)** So if the player exp is between 201 and 500, we're going to print out, getting better every day.
>
> **[4:35](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=275)** For case number three, we're going to capture the local exp and check that it's above 500.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=284)** So we'll say case, open parentheses, let localExp, where localExp is greater than 500.
>
> **[4:56](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=296)** On this case, we're going to print, time to level up.
>
> **[5:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=304)** And we can't forget our default.
>
> **[5:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=306)** So we're going to just print out, corrupted data found.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=316)** and we can see in our debug log, that the first 2 players get through and they get the... Getting better every day, switch case.
>
> **[5:25](https://www.linkedin.com/learning/swift-5-essential-training/solution-game-logic-14531793?u=76281980&t=325)** And Bob the Noob, gets stopped by the guard statement and needs some serious help, which is exactly what we expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (3), case, (3), continue (2), this. (1)
> **Code Identifiers:** righthandweapon (3), playerexp (3), lefthandweapon (2), leftweapon (2), rightweapon (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 5. The Wide World of Functions

> [↑ Back to Table of Contents](#table-of-contents)

#### Leveling the playing field
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/leveling-the-playing-field-14528852?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/leveling-the-playing-field-14528852?u=76281980&t=0)** - Our Swift adventure so far has gone from variables and types to collections and decision logic, but the functions we've been using are still a hundred percent defined by Swift.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/leveling-the-playing-field-14528852?u=76281980&t=11)** In order to start creating our own executable chunks of logic, we need to learn how to declare functions.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/leveling-the-playing-field-14528852?u=76281980&t=17)** Adding parameters, return types, and closures to that mix opens up a whole new level of programming possibilities, a level that includes declaring our own custom types.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/leveling-the-playing-field-14528852?u=76281980&t=27)** So let the quest begin.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - our (1)

#### Basic functions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=0)** - [Instructor] We're going to start this section off with a look at the syntax of writing basic Swift functions as well as how to define parameters and return types.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=10)** For our first simple example, let's create a function named findNearestAlly and just have it print out a message.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=18)** So we start with the func keyword, followed by the name in camel case, findNearestAlly.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=27)** We close that off with an open and closed pair of parentheses, which is where any parameters are going to go in when we have them, and an open-close set of curly braces, which is going to define the function body.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=40)** Since we're just going to print out a string here, I'm just going to say searching.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=47)** To call a function we just use its name, followed by a pair of parentheses to capture any arguments that we want to input.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=55)** Since findNearestAlly doesn't have any, that's all it takes.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=60)** And we can add on a return type to our functions by using a dash right arrow and defining the value type we want to send back.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=70)** So in this case, let's send back a string.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=75)** I really want to reiterate that we're only using print statements in most of our examples to keep things simple, but you can absolutely add in very complex logic, multiple lines, there's really no limit to that.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=87)** So don't take that as a hard and fast rule that it can only be one line.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=93)** And we're going to get an error here, because we're missing the return keyword.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=96)** So anytime we have a return value type assigned in our function, we have to actually return something.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=104)** So we'll say return and we'll just give it a string literal.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=111)** Now we can capture our return value in a variable, just like anything else.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=116)** So we'll say var ally now equals findNearestAlly.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=121)** And in inspector you can see that ally is now storing Argus.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=127)** For the last piece of the syntax puzzle here, let's include an integer parameter in the function that we can use inside the function body.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=136)** So like tumbles, these parameters need a variable name that we can use and a type.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=143)** So we'll say findNearestAlly is going to take in a parameter called level of type int.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=151)** And I'm also going to change the print statement just so we can use that locally.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=155)** Searching for ally above level and we'll use the level parameter.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=163)** Again, we're going to get an error here because we're missing an argument for the level parameter.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=171)** If we go back and delete the parentheses and then restart or reopen them, auto-complete is going to suggest that we need to pass in the level parameter.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=181)** I'm going to say level five.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=184)** And we can see the printed message in the debug area referencing the input.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=188)** And it's still storing the return string, Argus.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=193)** That's really all there is to the basics of function syntax.
>
> **[3:16](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions-14528861?u=76281980&t=196)** You can mix and match functions with either parameters, return types, multiples of either, or really anything that you need in your application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), case, (2), else. (1), var (1)
> **Code Identifiers:** findnearestally (5)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Overloading functions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=0)** - [Instructor] Swift will let us have multiple functions with the same name, as long as their function type or signature is different.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=8)** Defining multiple functions with the same name is called function overloading, and it's very useful in cases where you need constant functionality with dependent or computed results.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=21)** Let's make a new base function, and we'll call this attackEnemy.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=26)** And we're just going to have it print out a message, with no parameters and no return type.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=40)** Now let's write an overloaded version of attackEnemy.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=43)** So we still say the same thing, func attackEnemy.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=48)** But this time we're going to have one parameter.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=51)** It's going to be called damage of type Int.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=55)** And we're going to have a different print statement here.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=59)** It's going to say attacking for the damage passed in.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=65)** To make things even more interesting, let's create one last overloaded function.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=70)** Again, it's called attackEnemy.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=72)** This one is going to have two input parameters, damage of type Double, and weapon of type String, and a return type of Bool.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=87)** And inside here, we're going to declare a local variable to hold our return value.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=92)** So we'll just say attackSuccess.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=96)** I'm just going to default it to true.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=99)** I'm going to have a print statement here, attacking enemy for damage with the weapon parameter.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=112)** And we can't forget to actually return a Boolean value.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=116)** In this case, we can just return the attackSuccess variable.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=122)** Now, Xcode's going to give us a warning here.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=123)** Since we didn't actually change attackSuccess, there's no point in leaving it as a var, so we'll change it to a let constant.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=134)** Now, if we call each of these functions in turn, we're going to see our different outputs.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=139)** So attackEnemy, or the base attackEnemy, it's going to print out "Executing default attack".
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=146)** The first overloaded function is going to take in damage.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=150)** Let's say this takes in 34, and we get the "Attacking for 34" debug log.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=156)** And finally, we're going to create another variable called enemyDefeated to store our return value from the last overloaded attackEnemy, and for the damage, I'm going to say 65.988 with a weapon, Godly Glaive.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=178)** Now we go attacking enemy for 65.988 with the Godly Glaive.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/overloading-functions-14525885?u=76281980&t=184)** With this, we're in a good position to start talking about some more complex functions and eventually closures.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (5), type. (1), case, (1), var (1)
> **Code Identifiers:** attackenemy (7), attacksuccess (3), enemydefeated (1)
> **CLI Commands:** make (2)
> **Versions:** 65.988 (2)
> **Definitions:** is called (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Complex functions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=0)** - [Instructor] Functions in Swift can go from simple to complex very quickly.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=4)** When we start adding in multiple return types, optionals, and even default values.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=10)** Let's revisit optionals here and add a new function.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=14)** I'm going to call this setupArenaMatch, with no input parameters, but it is going to return an optional boolean.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=25)** I'm going to return false here by default, but that can also now hold true or nil.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=31)** Being the swift programmers that we are, we're going to use our trustee if let statement to unwrap the optional boolean.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=39)** So we'll say, if let initSuccess, and we just call setupArenaMatch, open and close curly braces and we'll just print out Level initialized and our correctly unwrapped optional.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=61)** If there's a nil value, we'll handle that too, with else and we'll print out, "Something went terribly wrong."
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=71)** Perfect, now our level initialized is false.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=74)** We see that in the debug, but we can also change our return value in setupArenaMatch to nil, and the code doesn't crash, and we're perfectly safe.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=85)** Let's create an overloaded version of setupArenaMatch.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=89)** Let's say func setupArenaMatch.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=93)** And this time we're going to have one input parameter called levelName, type string, and we're going to return what's basically a tuple or multiple return values.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=106)** I here we use the same tuple syntax, we'll name the return value.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=110)** So I'm going to say success of type Bool.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=114)** And it's also going to have a secret item of type string.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=121)** I'm going to add a print statement here, and print out the level name we're going to pass in.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=130)** And I'm going to return a very shorthand tuple.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=133)** You can of course be more explicit if that's your thing, I'm going to say we initialize this to true.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=139)** And our secret item is going to always be a Minotaur's Head.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=146)** And the cool thing about returning tuples or using tuples as returned values is that swift is going to do a lot of the heavy unpacking for us.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=156)** So let's declare a variable called levelDetails, set it to setupArenaMatch that takes in a levelName.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=165)** And I'm going to call this Poison Flats that we're trying to initialize.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=169)** And now level details has been correctly inferred as a tuple with a success and a secret item property.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=177)** (keyboard typing) Lastly, let's create a new function with default values defined right along with the input parameters.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=188)** I'm going to say func setupDefaultMatch.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=193)** For the parameters, again, I'm going to use levelName of type string and opponents of type Int with no return type at this time.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=205)** Now the set, the actual default values, we add an assigned initial value right in the parameter listing.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=213)** So we'll say the default value for the level name is always going to be Fire Marshes, and for opponents, we're always going to have three opponents.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=225)** I'm just going to add another interpolated string here.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=229)** Arena match will take place in the whatever levelName in this case Fire Marshes by default, between our opponents parameter.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=244)** (keyboard clicking) If we start calling this method, auto-complete is going to recognize that we included default parameter values, and give us two versions of the function to run.
>
> **[4:19](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=259)** So let's choose the default version first, which has no parameters.
>
> **[4:24](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=264)** And we'll see that debug log print out that our arena is the Fire Marshes between three players.
>
> **[4:30](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=270)** However, just because we specified default values in the function doesn't mean that we can't override them.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=277)** We can easily say setupDefaultMatch, give it Poisoned Flats and 10 opponents.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=286)** This approach can be really helpful if you need a baseline value or values in your functions, but still want the option of modifying them dynamically.
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=295)** And before we continue, I want to call out the fact that all these variations of functions can be combined in any way that you need.
>
> **[5:02](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=302)** They're not limited to the examples here.
>
> **[5:05](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions-14530751?u=76281980&t=305)** It's just easier to learn if we separate out the syntax one at a time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), default, (2), pass (1), override (1)
> **Code Identifiers:** setuparenamatch (6), levelname (4), setupdefaultmatch (2), initsuccess (1), leveldetails (1)
> **Non-Speech:** (keyboard typing) (1), (keyboard clicking) (1)
> **Speakers:** - [instructor] (1)

#### Function types
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=0)** - Every function in Swift has a type or unique signature that can be used like any other type we've seen so far.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=8)** This can come in handy when you need to pass functions as parameters into other functions, or even use them as return types.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=17)** Let's start off by declaring a new function.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=20)** We're going to call this compute bonus damage.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=24)** This is going to take in one parameter called base damage of type Int.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=31)** And it's also going to kick back a returned integer.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=36)** Now the logic in here is pretty simple, we're just going to always return base damage times four.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=44)** Now for compute bonus damage, the type signature of the function is written like this, open and close parentheses with Int in the middle returns an Int.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=57)** Knowing the function signature allows us to treat it like a type now that we know how to declare it.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=63)** So let's write a new function, this is going to be called deal damage.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=68)** It's going to take in a base damage of type Int, and a bonus damage parameter.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=75)** But this time, instead of just a type like inter string, it's going to take in our function type signature.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=83)** So Int inside parentheses returns an Int.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=87)** Just to drive this home where matching, or declaring this bonus damage parameter to match the function signature of compute bonus damage.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=98)** Now inside here, since our bonus damage property here is kicking back in Int, we're going to capture that in a constant called bonus, and we can now use bonus damage where the parameter as a function.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=114)** So it takes in our base damage, and we'll kick it back to bonus.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=122)** Let's also print out an interpolated string, we'll say base damage, is base damage.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=132)** Add a line break bonus damage is going to be bonus.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=141)** Now we can call deal damage, pass in an integer.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=144)** I'm going to say our base damage is 55.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=148)** And for the bonus damage, we can pass in compute bonus damage as a function.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=155)** Notice that we don't have to use any parentheses after compute bonus damage because we're treating it as a variable, and not as the function call itself.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=165)** Now the same approach applies to using functions as return types.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=170)** Now, in our output, we can see that base damage is 55 and bonus damage is 220.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=177)** Which means that when we passed in compute bonus damage as a parameter, it was executed as a function inside deal damage.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=187)** Now you might be thinking, why don't we just do all of this right inside the deal damage function itself?
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=192)** The answer is you absolutely could, but separating out code like this will keep things cleaner, more maintainable, and largely more modular in the long run.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/function-types-14525886?u=76281980&t=202)** So make good use of it when you can.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), pass (3), let (3), this, (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - every (1)

#### Understanding closures
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=0)** - [Instructor] Closures in Swift act like blocks or Lambda expressions in other programming languages, allowing for a more concise way to write, store, and return function like operations.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=13)** This is one of those things that's easier to understand in the code itself.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=17)** So let's declare a variable.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=21)** We're going to say this is closure, and for the type annotation, we're going to give it a closure type.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=29)** The base or empty closure is two parentheses with a return type of the same.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=36)** This should look familiar as it's basically a function signature.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=40)** Since closures are a type in themselves, we can assign initial values.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=45)** All we need is open and closed pair of curly braces, which stands in for the function's body.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=53)** Now, here I've explicitly typed closure as a closure type, but the compiler can infer that from the curly braces if that's more your style.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=63)** We can also see in the inspector that closure holds a function signature as its value, which should tell you that closures can be used as parameters, return types, or variables like anything else.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=76)** Now, an empty closure doesn't do as much good.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=79)** So let's revisit our function types example, declare a new closure to compute bonus damage.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=86)** Say var_computeBonusDamage is going to be a closure of type int that returns an int.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=97)** To initialize the closure, we need a pair of curly braces.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=101)** And usually you'll see these on multiple lines like this to declare the body.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=106)** We also need to explicitly capture the closures parameter.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=111)** So in this case, it's going to be an integer.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=113)** And you can choose the name of this, I'm going to say base of type int.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=118)** And you need to match the function signature.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=123)** So it's going to kick back an int, and we're going to use the in keyword.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=129)** Now I know that's a lot of weird looking syntax, so let's break it down.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=133)** Our closure or compute bonus damage variable is defined as taking in an int parameter and kicking one back as a return value.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=143)** So inside the body of the closure, we have to mimic that signature.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=148)** The in keyword marks the start of the closure statement body.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=152)** So anything that goes after that is going to be executed when the closure is called.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=158)** If we cut out the type annotation now, the compiler is going to be able to correctly infer that compute bonus damage is a closure that takes in an int and returns one as well.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=170)** And we're getting an error here because I haven't actually specified a return value.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=175)** So let's copy what we did from the last video and always the base damage times four.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=185)** To call the closure, we use its name, computeBonusDamage, but since it's holding what's essentially a function as a value, we add the open and closed parentheses to execute the body.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=198)** And we're also going to get an error here because it does take in an argument.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=202)** So let's specify that the base damage is 25.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=206)** In the inspector we can see that it's returned 100, which is our base damage multiplied by four.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=213)** You also see that this actually runs twice.
>
> **[3:35](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=215)** We have 100 showing in the inspector where we actually declared compute bonus damage, and where we called the closure.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=224)** Now this is because when we call computeBonusDamage, it's actually referencing the compute bonus damage variable.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=232)** And we haven't gotten to reference in value types just yet.
>
> **[3:55](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=235)** So keep this in the back of your head for later.
>
> **[3:59](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=239)** And there are a lot of different shorthands and tricks to writing closures in Swift with the least possible characters.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=246)** But the one I use the most is the following.
>
> **[4:09](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=249)** You can strip out the parentheses and the named value and type, and just say base in.
>
> **[4:21](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=261)** This is just the right amount of explicit readability and implicit type inference for me personally.
>
> **[4:27](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=267)** But I'm going to leave you to explore the other options as they're totally dependent on your programming style and the compiler could care less which one you use.
>
> **[4:36](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures-14524899?u=76281980&t=276)** You just remember as long as you have either a type annotation or an explicitly assigned closure, you're good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (5), type, (2), lambda (1), type. (1)
> **Definitions:** defined as (1), is called (1), is a  (1)
> **Code Identifiers:** computebonusdamage (2)
> **Speakers:** - [instructor] (1)

#### Using closures
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=0)** - [Instructor] Now that we've got basic closure syntax covered, we can start working with them as parameters in functions we've already used, like sorted.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=9)** For this example, we're going to create a new variable and we're going to sort our high scores array from lowest to highest.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=18)** I'm going to say VAR, ascending sort, and this is going to capture our sorted array.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=25)** And we're just going to say high scores dot sorted.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=30)** Now you can see in the auto-complete that one of the overloaded methods accepts a closure with two integer parameters and returns a Boolean.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=38)** Now don't worry about the throws and rethread is keywords we'll get to those when we talk about error handling.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=45)** I'm going to select this option and I'm going to hit enter so that auto-complete can set up the closure for us leaving the local parameter names and return value for us to specify.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=56)** I'm going to keep this sort of as the long hand, just for clarity.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=59)** I'm going to call the first captured value, first value.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=65)** And the second value, second value.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=69)** The sorted closure works like this.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=71)** It's going to take the first number in the array and then the next number and do some kind of comparison that we specify.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=79)** And then it's going to keep looping through each high score until it gets to the end.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=83)** So what we can do here is create the ascending order from lowest to highest by returning true, if the first value is less than the second value.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=98)** If we print out ascending sort, we should see that it goes from zero all the way to 3412.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=107)** And using closures like this to perform operations, that sort or map come in handy quite a bit, but it's also useful to be able to use custom defined closures in your own methods.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=121)** Let's recreate a simple function here that accepts a closure as a parameter.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=125)** So we're going to call this function active members.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=130)** We're going to call the closure parameter completion, and it's going to take in an array of strings and kickback back out void, which is no return type.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=145)** Now, when a function takes in a closure like this, the closure parameters and statement body are going to be available when the function is called, just like the sorted method allowed us to write in our predicate when we sorted the first value and the second value.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=161)** Now, in order for that to happen, we actually need to call the closure parameter inside active members and pass it a string array to close over.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=170)** So we'll call completion.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=172)** And since a closure is basically a function, we add the open and close parentheses and for our parameter, we're just going to get it party members, which I've declared at the top of the file for us to use.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=186)** And let's call active members and see how this actually works.
>
> **[3:11](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=191)** All right, so we've got the same sort of syntax that sorted has now.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=195)** And we're going to capture the string array.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=198)** We're just going to call it members.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=201)** And we're just going to loop through these with a for-loop.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=203)** So for name in members, print out an interpolated string, and we'll just say name is active.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=219)** There we go, in our debug log, we've got Harrison is active.
>
> **[3:42](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=222)** Steven is active, and Bob, the Noob is active.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=225)** At this point, you might be a little confused as to why we would even use this approach instead of an actual function for a parameter like we did earlier.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=234)** The answer is that we had to define the logic we wanted the function to have before we used it.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=240)** With closures, we can defer that data operation logic until we actually call the method.
>
> **[4:08](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=248)** Now this approach lets us store access and operate on data outside of its declared scope.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=255)** So in our case, we could declare the party members array and the active members function in one class and call it in a completely different one.
>
> **[4:25](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=265)** The bonus here is that we're essentially passing the data inside active members to the closure, which we can access from any other class.
>
> **[4:36](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=276)** Now that's only one way of passing data and it's one way traffic, but we can sort of do this in reverse, still using closures.
>
> **[4:45](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=285)** So let's make an overloaded version of active members.
>
> **[4:50](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=290)** We're going to call this active members again, and we're going to pass in a parameter of type string array.
>
> **[4:58](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=298)** This is going to be called members and we're going to actually return a closure.
>
> **[5:04](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=304)** Our closure return is going to take in no parameters, it's going to return void or nothing.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=314)** Inside, we're going to declare a completion closure, and we're going to use a type annotation to make sure we know what we're doing.
>
> **[5:21](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=321)** So this completion variable is going to hold a closure that takes in nothing and returns void, just like our return type.
>
> **[5:29](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=329)** And we're going to give it an initial value.
>
> **[5:32](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=332)** Here, we're just going to do the same thing, as we did an active members, we're going to loop through every name in members.
>
> **[5:41](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=341)** We're going to print it out.
>
> **[5:49](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=349)** And finally, we're going to return our completion variable.
>
> **[5:57](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=357)** And we didn't actually mutate completion, so we're going to change that to a let constant.
>
> **[6:06](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=366)** The debug functionality that we've just created is now stored in the completion variable as a closure and returned, so we can capture it like any other value type.
>
> **[6:16](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=376)** We'll declare a new variable, and this will be closure return.
>
> **[6:21](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=381)** It's going to be equal to are overloaded active members.
>
> **[6:30](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=390)** And for the members array again, we're just going to use party members.
>
> **[6:36](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=396)** Now here's a gotcha, I run into a lot when people ask about closures and storing them as values, cause we're not actually seeing a new debug statement, it's still the old ones.
>
> **[6:46](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=406)** So why is this happening?
>
> **[6:49](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=409)** Well, take a closer look at our actual code.
>
> **[6:51](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=411)** Closure return, the variable is storing a closure, which is a shorthand function.
>
> **[6:57](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=417)** Now in order for a function to execute, it has to be called and we haven't actually done that yet.
>
> **[7:03](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=423)** So now our closure return can be treated exactly like a function.
>
> **[7:09](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=429)** We can call it and get a new printout statement.
>
> **[7:12](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=432)** And there we go.
>
> **[7:13](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=433)** We have the is active statement, but we also have the new three lines where we have Harrison is present, Steven is present, and Bob, the Noob is present.
>
> **[7:24](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=444)** I've gone through the returning a closure example because you should know that it's possible.
>
> **[7:30](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=450)** However, they are used rarely in this kind of situation.
>
> **[7:33](https://www.linkedin.com/learning/swift-5-essential-training/using-closures-14527902?u=76281980&t=453)** It's much more common to need them as input parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (4), type. (3), pass (2), var (1)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** just like (2)
> **Env Vars:** var (1)
> **Warnings:** gotcha (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Type aliasing
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=0)** - [Instructor] Type aliasing is a great tool for combining complex or unwieldy custom values into clearer defined types.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=8)** For this example, we're going to look at creating a type alias for a tuple that we've already used, and for a closure.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=16)** Now, let's revisit our attack tuple, but this time we're going to declare it as its own custom type.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=22)** So, we start with the typealias keyword, and if you hit Enter, autocomplete is going to set this up for us.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=29)** So, we need to give our type a name.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=32)** I'm going to say these are all going to be called AttackTuple, and for the definition I'm going to say, name is going to equal to string, damage int, rechargeable bool.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=48)** And what we said here is that whenever AttackTuple is used as a type, the compiler is going to infer that it's a tuple of a string, int, and bool.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=56)** When you're using type aliases or defining them, as we have here, you'll see that we use the equal sign, but it's followed by a type signature, and this is the only real case where this is going to happen because you're defining the type, not assigning it an initial value.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=74)** Now, AttackTuple can be used as a regular type.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=77)** So, we'll declare a new variable here called sunStrike of type AttackTuple.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=84)** Let's actually initialize it here.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=88)** We'll say its name is Sun Strike, damage is 45, and it is not rechargeable.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=96)** We can also use this as a input parameter type and a return type.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=102)** Let's declare another function that's just going to take in an AttackTuple, and return a modified version.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=110)** So, we'll say func levelUpAttack.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=113)** It's going to take in a baseAttack parameter of AttackTuple, and it's going to return an AttackTuple.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=121)** Pretty simple.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=124)** Inside, we're going to create a new variable for our return value.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=129)** We'll just call this increasedAttack of type AttackTuple, even though type inference will work here correctly.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=136)** This is just to be explicit, and for the name we will keep the baseAttack name.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=145)** Damage is going to go up, so we'll say baseAttack damage plus 10, and baseAttack rechargeable.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=154)** Actually, we're going to change that to true.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=156)** Just to give it a little bit more modification.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=160)** Now, all we have to do is return increasedAttack, and we've got a function that uses AttackTuple as a parameter and a return type.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=171)** Let's just call this and say, var poweredAttack.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=176)** It's going to be equal to levelUpAttack, and we want to level up sunStrike.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=183)** Now, if we pop the view open from the inspector we'll see that sunStrike is still the name.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=188)** The damage has been upgraded to 55, and rechargeable is now true.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=195)** Now, for the closure, let's use our typealias keyword again.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=200)** We're going to call this new type an ArrayClosure, and the type signature is going to be an array of strings and it kicks back no return or void.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=216)** Now, instead of this long completion signature here in activeMembers from the last video, we can just specify that we're going to pass in an ArrayClosure.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing-14524898?u=76281980&t=227)** Our code is going to execute exactly the same, but now activeMembers is very explicit and it's very clear on what's happening without having to reference a specific type or closure signature in the function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (4), function (3), type, (2), var (1)
> **Code Identifiers:** baseattack (4), sunstrike (3), levelupattack (2), increasedattack (2), activemembers (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Battlegrounds
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=0)** (upbeat bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=6)** - Here we are again at another chapter challenge.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=8)** And this time we'll be laying out some basic battle logic with our newfound function, syntax.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=14)** Your tasks are going to include basic and overloaded functions, as well as creating your own custom type using a type alias.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=22)** This one should be pretty fun since we have a lot of tools at our disposal right now, so get creative with it.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=28)** This should take you around 10 minutes, but as always, if you get stuck, head over to the next video, follow along with my solution.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battlegrounds?u=76281980&t=35)** Happy coding.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Cross-References:** next video (1)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat bouncy music) (1)

#### Solution: Battlegrounds
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=0)** (soft music)
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=6)** - [Instructor] All right, let's jump into our battlegrounds challenge and start working with functions, closures, and type aliases.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=14)** For our first task, we're going to create a type alias called attack, and we're going to name values for name and damage.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=22)** So we'll say typealias attack, specify a name of type string, damage of type Int.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=33)** With our second task, we're going to write a function called attackEnemy.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=38)** It's going to take an integer and just print out a creative interpolated string.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=44)** Let's say attackEnemy.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=46)** It's going to take in a damage parameter type Int, and I'm going to print out Enemy hit for the damage parameter, damage.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=62)** I'm going to add a line break there just so we get a clean printout.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=68)** For task number three, I'm going to create an overloaded version of attackEnemy.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=73)** So we'll say func attackEnemy again, but this time we are going to have the input parameter be of type attack from our type alias.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=85)** And this is going to return a string value.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=90)** I'm going to write the return with a string literal instead of a variable.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=93)** It's just a little quicker, but here we can just say, you attacked with, we're going to use our attack parameter.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=103)** We can use the.name property, add a line break, Enemy hit for attack.damage, damage and a new line break.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=122)** And with those two functions defined, our fourth task is to use both of them.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=128)** I'm going to use our base one first and just say, attackEnemy with the damage parameter.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=134)** I'm going to say, we'll attack for 90.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=138)** There we go, we get enemy hit for 90 damage.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=142)** For the overloaded function, I'm going to store the return string in a variable I'm going to call this message, attackEnemy, and let's see, I'm going to create an attack type right in line here.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=159)** So this is going to say, power slam for a hit count of 55.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=168)** We print out the message here.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=170)** We get you attacked with power slam, enemy hit for 55 damage.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=174)** All right, so both of those are working as expected.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=179)** For task number five, we're going to create a typealias closure like we did in the last video and it's going to take an array of attacks and return void.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=189)** So let's say typealias.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=192)** I'm going to call this new type AttackClosure.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=197)** And it's going to take in an array of attack types and return void or nothing.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=206)** I'm also going to declare a test array of a bunch of attacks so we can work with them in task six and seven.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=214)** So I'm going to say playerActions, it's going to equal an array of attacks.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=219)** I'm going to create these all in line here just for efficiency.
>
> **[3:43](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=223)** Let's say, Mist Bomb.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=226)** It's going to be 45, Rangers Eye, it's going to be for 15 and Fists of Fury for five.
>
> **[4:05](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=245)** Our six task is going to be to write a function that uses a closure parameter of type AttackClosure, and just closes over some data that we pass.
>
> **[4:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=257)** I'm going to call this func fetchPlayerAttacks, and name the parameter closure, and it's going to be of type attack closure.
>
> **[4:31](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=271)** I'm going to remember that when we use closures as parameters, we need to call them inside the function method.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=277)** So we'll say closure and we'll pass this in our playerActions array.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=286)** For our final task, we're going to call fetch players and we're just going to loop through the closed over player actions.
>
> **[4:54](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=294)** So we'll say fetchPlayerAttacks, hit enter for the closure Auto-complete.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=300)** I'm going to capture the closure data as attack options and use a for-loop.
>
> **[5:07](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=307)** So let's say for, name, damage, I'm going to use a for-loop here.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=314)** And since we're getting back an array of attacks, we can unpack them as a tuple.
>
> **[5:19](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=319)** So we'll say for name and damage in attackOptions, print out name, will hit for damage if cast, perfect.
>
> **[5:41](https://www.linkedin.com/learning/swift-5-essential-training/solution-battlegrounds?u=76281980&t=341)** If we go down to our debug log, we'll see that Mist Bomb is going to hit for 45, Rangers Eye for 15 and Fists of Fury for five.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), pass (2), break, (1), break. (1)
> **Code Identifiers:** attackenemy (6), playeractions (2), fetchplayerattacks (2), attackoptions (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)


### 6. Classes, Structs, and Beyond

> [↑ Back to Table of Contents](#table-of-contents)

#### Populating the game world
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/populating-the-game-world-14526925?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/populating-the-game-world-14526925?u=76281980&t=0)** - At this point, we've covered the separate pieces of the Swift language that make up a basic program, but not how to combine them into coherent, usable objects.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-essential-training/populating-the-game-world-14526925?u=76281980&t=10)** Up to now we've been using playgrounds, but in a real application we'll want classes and other data models that we can define and control.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/populating-the-game-world-14526925?u=76281980&t=18)** Mastering data modeling brings our Swift adventure one step closer to the finish line.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/populating-the-game-world-14526925?u=76281980&t=23)** So, let's get to it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - at (1)

#### Value vs. reference types
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=0)** - [Instructor] In Swift, there are two kinds of data types, references types and value types.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=6)** Under the hood, all Swift basic data types are implemented as structures, which are value types.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=12)** These include strings, characters, arrays, dictionaries, booleans, integers and floating-point numbers.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=21)** Enumerations are also value types, and since Swift implements optionals as enums, they're also value types by association.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=29)** Don't worry too much about memorizing all this right now.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=31)** We'll get into how each of these works individually.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=35)** As far as reference types go, functions, classes and closures are going to fall into that category.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=43)** The main point to focus on when thinking about value versus reference types is how they're passed or assigned.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=51)** Let's look at an illustrated example for how value types work.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=55)** Imagine we're playing a video game and we've just walked into a shop.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=58)** There are items on all the shelves and along the walls.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=61)** We see a cool sword and we want to buy it.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=64)** Since the sword represents a value type in this example, we aren't actually going to buy the sword hanging on the wall.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=71)** Instead, the shopkeeper is going to give us our own sword, which is an identical copy of the one we pointed at.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=78)** Now, this is how value types are passed, by copy.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=81)** Anything we do to the sword we buy doesn't affect the one on the shop wall in any way.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=85)** We can lose ours. We can break it.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=87)** We can leave it in a ditch.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=89)** The sword on the wall remains unaffected.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=92)** When we refer to the sword on the wall versus the sword that I just bought, they are two separate objects.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=101)** As the name suggests, reference types are passed by reference.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=105)** Let's revisit our game example again.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=107)** Let's say I have a player avatar representing a reference type in this example.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=111)** That exists in the game world.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=113)** Anytime someone interacts with my avatar, they're interacting with my specific individual object.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=121)** If I want to go to another stage of the game, my avatar isn't copied to that level.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=125)** Instead, a reference to my avatar is passed to that level.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=130)** Now, anything that happens to my avatar anywhere in the game will permanently affect it since it's not a copy, but the real thing.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=137)** This is what we mean by a reference type.
>
> **[2:20](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=140)** Now, when you're choosing between making an object a struct or a class, ask yourself if you need a small encapsulated data object or something that can use inheritance and can be a reference rather than a copied value.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=154)** I'd highly suggest referring to the Apple Doc's list of appropriate use cases for each.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types-14531787?u=76281980&t=159)** It's really helpful when the decision seems like it's a toss-up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), implements (1), type. (1), struct (1), class, (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Basic Swift classes
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=0)** - [Narrator] Even though Swift has an entire library of built-in classes and structs, it's important to know how to create your own.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=7)** For the next few videos we're going to explore the class and struct syntax, how to add properties, methods, initializers, and finally, how to subclass.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=18)** Let's start off by defining a class called Adventurer.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=21)** All we need to do for that is use the class keyword, give it a name, and an open-close pair of curly braces.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=30)** Any properties and methods defined inside this class declaration are going to belong to specific instances of an adventurer that we create.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=40)** If you're coming from a language that refers to instances as objects or class objects, that's perfectly fine.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=46)** Just be aware that we're talking about the same idea.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=50)** All our adventurers should have a name.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=52)** So we'll declare a variable called name of type string.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=57)** They should also have a constant maxHealth of type int.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=63)** And I'm also going to give them an optional value called specialMove.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=68)** This is going to be an optional string.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=71)** Any instance properties like these can be declared with or without initial values based on the situation, it's up to you.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=78)** They follow the same rules inside classes that we've already seen in previous examples.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=85)** Now, in order to actually create an instance of our adventurer, we need what's called an initializer function.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=91)** The purpose of this is to set all non-optional values when an adventurer instance is created.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=98)** So for this, we use the init keyword and if we hit Enter, auto-complete is going to give us the basic setup.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=106)** Now initializers are functions so we declare the parameters we want to accept, and these need to match our non-optional values.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=114)** So we need a string and we need an int, and we'll call the int maxHP.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=123)** Now inside the init function, the only job this should have is to set our adventurer properties.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=129)** So we'll say self.name is going to equal the init name parameter, and self.maxHealth is going to be equal to the maxHP passed in.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=142)** This initializer function is commonly referred to as the designated init, but in many cases you'll need more flexibility, which is where convenience initializers come in.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=152)** These are essentially overloaded init functions with their own unique signatures.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=157)** You can have as many as you want, but they do all need to delegate to the designated init at some point in their execution.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=165)** That sounds more difficult than it really is so let's see that in practice.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=170)** We're going to declare a convenience init with the convenience keyword, followed by init, and the parameters we want to take in.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=179)** For this one, we want an option that only requires a name for us to create an adventurer.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=186)** Our job inside the convenience init is to pass up the name parameter into the designated initializer.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=193)** And we can do this by using the self keyword, which is going to reference the adventurer class.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=199)** We'll say self init.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=202)** And for name, we'll pass it name.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=205)** And for maxHP, we're going to say these adventurers always start with 100.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=213)** If we go outside our class curly braces, we can declare instances of our adventurers.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=219)** So I'm going to say var player1 is equal to Adventurer.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=225)** I'm going to use our designated init first.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=227)** I'm going to say Harrison, maxHP is 99.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=233)** I'm also going to declare player2 and use our convenience init so we can see how this works.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=240)** And all we need here is a name.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=247)** Now, if you expand the adventurer, quick lookup in the inspector, you can see that player1 is Harrison 99 and has no special move, so it's nil.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=258)** Steven is Steven, 100, and also nil for the special move.
>
> **[4:24](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=264)** Since classes can have their own functions, let's add one into adventurer.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=268)** That's just going to print out our property so it makes a little easier to debug.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=273)** We're going to say funk printStats with no parameters and no return type.
>
> **[4:39](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=279)** We're just going to use the print function here to debug an interpolated string.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=286)** So I'm going to say Character is going to be self.name.
>
> **[4:51](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=291)** Max health is going to be self.maxHealth.
>
> **[5:01](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=301)** And we can say player1.printStats and player2.printStats.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=309)** Perfect.
>
> **[5:12](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=312)** And to really drive home how reference types work, let's declare one last player variable.
>
> **[5:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=318)** We're going to call this defaultPlayer, and we're going to assign it to player1.
>
> **[5:26](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=326)** I'm actually going to cut and copy the defaultPlayer, put it up before our printStats so we can see this change.
>
> **[5:35](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=335)** Since both adventurer instances are classes, classes are reference types, if we change a property in defaultPlayer or player1, both of the instances are going to reflect that change.
>
> **[5:47](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=347)** So let's say defaultPlayer.name equals Bob the Noob.
>
> **[5:54](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=354)** You'll see in the debug log that our first character, which is player1 is now Bob the Noob with a max health of 99.
>
> **[6:01](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=361)** The Harrison string was overridden.
>
> **[6:05](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=365)** We can also change player1.name.
>
> **[6:08](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=368)** We can change it back and this will affect both the defaultPlayer and player1 instances.
>
> **[6:15](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes-14528843?u=76281980&t=375)** Be careful with this behavior when deciding to store a reference instead of a value type as it can lead to unintended data changes throughout your entire app.

> [!info]- Semantic Content
>
> **Code Keywords:** self (6), let (5), function (4), pass (2), struct (1)
> **Code Identifiers:** defaultplayer (5), maxhp (4), printstats (4), maxhealth (3), specialmove (1)
> **Definitions:** refers to (1), is a  (1)
> **Warnings:** be aware (1), be careful (1)
> **Prerequisites:** setup (1), you'll need (1)
> **Speakers:** - [narrator] (1)

#### Access modifiers and properties
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=0)** - [Narrator] Like most programming languages, Swift allows us to limit or control how our classes, structs, properties and other entities are accessed based on the module or file they're in.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=13)** Swift defines individual modules as frameworks or applications made up of source files that act as a single unit of code distribution.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=23)** In plain English, each of our playground files is its own module as is any single target app you make in the future.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=31)** Getting into apps with multiple build targets or frameworks is way outside the scope of this course and won't come up until later in your Swift journey.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=41)** Now, there are four levels of access in Swift.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=44)** We've got public, internal, file private, and private.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=54)** Public entities can be freely accessed from inside their source file, as well as any separate module that imports the parent module.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=65)** Internal entities can be accessed by any source file within their defining module, but nowhere else.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=71)** Every entity in Swift is set as internal by default, which is why we haven't had to explicitly set an access level so far.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=82)** File private entities can only be accessed inside their defining module.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=89)** Lastly, private variables can only be accessed inside their declaration scope.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=95)** So if we changed our name to private, it's only going to be accessible inside the Adventurer class.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=101)** Nowhere else.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=103)** There are variations on how access control works with sub-classing, unit testing and protocols, but that's an area you'll need to explore after you're comfortable with the Swift basics.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=115)** Now I have copied our entire Adventurer class here so that we can look at some additional kinds of properties that it can store.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=124)** First up are computed properties, which come in two variations, read only and read write.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=132)** Let's start with a read only property.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=134)** We're going to call this healthLost and have it return a computed int value.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=145)** You'll notice that this syntax is a mix between a variable declaration and a function, which is actually where computed variables sort of sit.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=154)** So here we can say return maxHealth minus.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=158)** Well, let's say 50 for now.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=164)** Every time we call healthLost, it's going to return the result of that subtraction.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=170)** However, that's all it's going to be able to do.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=172)** We can't actually assign a new value to healthLost or change it in any way.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=178)** If we do need a property that can be retrieved and assigned with some kind of added computed logic, we can declare it with explicit get and set events, which makes it a read and write property.
>
> **[3:11](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=191)** For this example let's add a file private variable.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=195)** We're going to call this health.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=199)** It's going to be an integer.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=201)** And we're going to leave it undefined.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=205)** Since this is a non-optional value, the compiler is complaining that our initializer doesn't actually set it.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=211)** So we'll say self.health.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=214)** We're also going to just start that out as our maxHP.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=218)** Perfect.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=221)** This is a common scenario where we have a private variable that needs some sort of public interface.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=226)** You might know this as a backing field.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=229)** So what we can do is add a new variable underneath our file private health.
>
> **[3:55](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=235)** I'm going to call it Health with a capital H.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=238)** It's going to be of type int, and it's going to be a computed property.
>
> **[4:03](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=243)** This time though, we're going to use the get keyword, and this is its own event function.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=250)** And for get we're always going to return our file private health.
>
> **[4:16](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=256)** So anytime capital H Health is queried, our lowercase H is going to be returned.
>
> **[4:24](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=264)** Now, anytime we try and assign capital H Health a new variable, our set event is going to fire.
>
> **[4:29](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=269)** And this is where we want an added bit of logic.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=273)** So we're going to say if new value is less than or equal to 100, assign our private health to the new value.
>
> **[4:47](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=287)** This newValue keyword, although it's not being highlighted, is used by Swift to locally store the value we're trying to assign to the computed property.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=300)** So for example, if we tried to change health to 25, newValue would be 25 and the if statement would evaluate.
>
> **[5:11](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=311)** Before we move on, we're going to change the healthLost to use our new health property so this is always going to be an accurate computation of how much health we've lost.
>
> **[5:21](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=321)** We're also going to change the print stats message to be a little more explicit.
>
> **[5:26](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=326)** And we're going to say Health is going to be equal to self.health divided by self.maxHealth.
>
> **[5:39](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=339)** There we go.
>
> **[5:40](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=340)** So now our debug logs have changed.
>
> **[5:42](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=342)** Our health is now 99 out of 99 for Harrison and 100 out of 100 for Steven.
>
> **[5:49](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=349)** Lastly, we need to talk about type properties.
>
> **[5:52](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=352)** These are going to belong to a specific type, in this case our Adventurer class, rather than the specific instances of adventurers that we've created.
>
> **[6:03](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=363)** Type properties come in two flavors, static and class.
>
> **[6:09](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=369)** We're going to use the static keyword here, declare it as a variable, and call it maxActivePlayers.
>
> **[6:17](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=377)** Set that equal to 10.
>
> **[6:19](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=379)** Static types cannot be overridden in a subclass.
>
> **[6:25](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=385)** However, if we need a variable to be overridable in a subclass, which we'll get to in the next video, we can declare it as a class variable.
>
> **[6:35](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=395)** I'm going to say class var credo of type string.
>
> **[6:40](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=400)** And class variables can only be computed properties.
>
> **[6:43](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=403)** So I'm going to always return "Defend the helpless!"
>
> **[6:55](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=415)** To drive this home, let's see if we can access either of these from our player one instance.
>
> **[7:02](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=422)** If you hit the dot notation, you'll see that they do not show up.
>
> **[7:06](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=426)** And it's because they belong to the Adventurer class itself.
>
> **[7:10](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=430)** So we have credo here and Adventurer.maxPlayers.
>
> **[7:16](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=436)** These are going to be the same across the entire class wherever they're referenced.
>
> **[7:22](https://www.linkedin.com/learning/swift-5-essential-training/access-modifiers-and-properties-14528846?u=76281980&t=442)** These are particularly useful when you need to store variables that are essentially global to a class or struct.

> [!info]- Semantic Content
>
> **Code Keywords:** private (10), module (6), let (4), public (3), self (3)
> **Code Identifiers:** healthlost (4), maxhealth (2), newvalue (2), maxhp (1), maxactiveplayers (1)
> **Definitions:** is a  (3)
> **Cross-References:** later in (1), in the next (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Subclassing in Swift
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=0)** - [Instructor] A great way to expand the flexibility of your custom classes, without having to reinvent the wheel, is to create subclasses that share functionality with their parent.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=11)** For this example, we're going to create a subclass of Adventurer, we're going to call it Ranger and change some of its inherit properties.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=20)** Under the subclass comment, and declare a new class, name it Ranger, and a subclass we just add a colon and the name of the parent class we want.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=31)** (keyboard clicking) Depending on the access level of the parent, a subclass is going to have access to its properties, methods and other entities.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=40)** In this case Ranger is going to inherit name, special move, maxHealth and our computer properties.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=46)** So there's no need to duplicate that code.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=49)** However, if we want Ranger to have unique properties that the Adventurer parent class doesn't have, we can declare them.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=57)** So we'll say var classAdvantage, and this is going to be a string.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=64)** This goes for methods as well.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=66)** Just understand that anything declared in the subclass is not accessible to the parent.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=71)** Inheritance is a one-way street and it trickles down from top to bottom.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=77)** A Ranger still is a class so we need a designated initializer.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=81)** we'll say init, (keyboard clicking) we want a name of type string, and an advantage of type string.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=92)** Again we have to set all non-optional properties.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=94)** So we'll say self.classAdvantage is going to equal advantage.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=100)** Now here we have the option of manually reinitializing all our parent properties.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=105)** But the more efficient way to do that is to pass the responsibility up to the parent classes designated init.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=113)** Now we can use a new keyword here It's called Super.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=116)** Super references Adventurer in this case.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=119)** But it'll reference whatever parent class you're using.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=122)** So now we have access to the adventurer init, and we'll pass it up into name and maxHP.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=131)** So pass name and we'll say Rangers have more XP at 150.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=139)** It's really important to note this order of operations when you're Subclassing in Swift.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=143)** Any properties on our subclass needs to be initialized before we call the parent classes init function not after.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=152)** The last thing we're going to do here is talk about overriding properties and methods.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=157)** Since we declared credo as a class of variable, we can make sure that this is not the same for Ranger as it is for Adventurer.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=167)** We use the override keyword here, (keyboard clicking) and then we declare credo the exact same way as an Adventurer.
>
> **[2:53](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=173)** So class var credo (keyboard clicking) of type string, remember it has to be a computer property because it's a class property, and we'll return "To the King."
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=189)** (keyboard clicking) Now if we print out the Ranger.credo, we will get a different value.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=197)** As far as methods go, these are also overridable.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=200)** So let's have Ranger print out a different debug log when we call printStats.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=206)** Again we use the override keyword, func and the same name and auto-complete is going to know that we have that.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=214)** And we'll just print out a new interpolated string.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=221)** Here we'll say self.name:Ranger, (keyboard clicking) Advantage, (keyboard clicking) self.classAdvantage that's what we name that.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=234)** let's declare a new Ranger.
>
> **[3:58](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=238)** We're going to call this Aragorn.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=240)** (keyboard clicking) It's going to be a Ranger class, (keyboard clicking) and advantage is going to be stealth.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=250)** If we call printStats on our new Ranger, we're going to see that the debug messages now show up differently depending on the class we use.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/subclassing-in-swift-14529814?u=76281980&t=258)** But, they still follow the same basic blueprint.

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), pass (3), class, (2), var (2), super (2)
> **Non-Speech:** (keyboard clicking) (9)
> **Code Identifiers:** classadvantage (3), printstats (2), maxhealth (1), maxhp (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Basic Swift structs
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=0)** - Structs share similar syntax and functionality with classes, but they're useful for different situations.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=7)** While classes are well-suited to complex data structures, structs are better suited to modeling simple objects that don't need inheritance or reference capabilities.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=19)** Let's start off by declaring a new struct using the struct keyword, the name it level, give it a set of open and closed curly braces.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=30)** Now, other than swapping out that new keyword, the syntax for controlling access, adding properties methods, and other entities to structs remains the same as with classes.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=41)** So for instance, we could add a constant called level ID of type int, a variable called level objectives, which is going to hold a string array and let's do a read only computed property called level description of type string.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=63)** And this is always going to return an interpolated string that says level ID and we'll use self dot level ID.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=75)** One important difference with structs is that they do come with a default initializer already configured.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=82)** So below our struct declaration, I'm going to declare a new variable.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=88)** This is just going to be a test string array of objectives that we can use going forward.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=94)** I'm going to say find the lost cat, collect all gemstones, and defeat the big boss.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=106)** I'm going to create a new level.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=108)** I'm just going to call this level one.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=111)** And if we use the level struct name and one parentheses, we'll see that our default initializer has already been set up for us.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=121)** I'm going to assign this level ID one and our objectives array to level objectives.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=128)** If you do need to customize an initializer you can absolutely do that, and it's the same syntax.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=134)** We use init and we're going to want to take in an ID of type int and an array of strings called objectives.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=148)** Now we have to set all our non-optional properties against, we'll say self dot level ID equals ID and self dot level objectives equals objectives.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=163)** Because we've chosen to define our own initializer the default or what's called a member wise initializer that was originally set up for us is no longer available, so you have to choose either the default configuration for struct or your own init.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=179)** I'm going to get rid of this error, just delete the level initializing code and use the custom one we just defined.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=189)** I'd suggest using the default initializer with structs whenever possible, just because it cuts down on the amount of manual coding you have to do.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=199)** Defining more than one initializer is also possible with structs.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=203)** You just don't have to include the convenience keyword.
>
> **[3:28](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=208)** To define a function that performs some kind of operation is the same syntax is with classes, provided that it doesn't attempt to modify any of the struct's properties directly.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=220)** For instance, let's have a simple function here.
>
> **[3:43](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=223)** We're going to call this query objectives.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=225)** It's going to have no parameters and no return type.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=229)** And it's just going to loop through and print out our level objectives.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=234)** Say for objective in level objectives, print out the objective.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=246)** No big difference there.
>
> **[4:08](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=248)** But what if we needed to add a function that modified our level objectives property by removing a completed item?
>
> **[4:15](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=255)** So let's say func, complete objective.
>
> **[4:21](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=261)** This is going to take in an index parameter of type int, so we know how to look up the array item that we want to remove.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=268)** And we'll just say level objectives remove at index.
>
> **[4:36](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=276)** Now this error is very important.
>
> **[4:38](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=278)** Cannot use mutating member on immutable value.
>
> **[4:41](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=281)** Self is immutable.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=284)** We didn't have to worry about the safety of modifying member properties in classes because their reference types and self is always mutable by default.
>
> **[4:53](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=293)** Since structs are value types and passed around by creating copies of themselves.
>
> **[4:58](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=298)** We have to add the mutating keyword to give our let's say explicit permission for the function to perform this kind of action.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=309)** Let's drive the value versus reference type concept home one more time.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=314)** We're going to declare a new variable called default level.
>
> **[5:18](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=318)** I'm going to assign it to level one.
>
> **[5:23](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=323)** Now let's take level one, complete the first objective at index zero and print out its objectives.
>
> **[5:32](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=332)** Perfect.
>
> **[5:33](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=333)** Now we have just collect all gemstones and defeat the big boss.
>
> **[5:39](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=339)** What we'd expect to see if this was a class was that default level also changed, but if we query our objectives from default level, it's still going to have all three.
>
> **[5:50](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=350)** And that's because when we assigned default level to level one, it's actually assigning a copy, not the level one instance itself.
>
> **[6:02](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs-14524894?u=76281980&t=362)** Again, you want to keep this difference between structs and classes in mind when your modeling your application data in Swift.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), struct (6), self (5), function (4), delete (1)
> **CLI Commands:** find (1), cat (1)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (2)
> **Speakers:** - structs (1)

#### Chaining optionals
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=0)** - [Instructor] Optional chaining allows you to unwrap an optional type that has optional properties of its own.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=7)** It's handy to think of these optional chains in a very literal sense, like a chain link.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=12)** If all the links are present and strong, the chain remains unbroken, but if one link fails, the chain breaks apart.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=20)** I've set up two structs for us in this playground, an Item and an Owner.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=25)** Each item has a description and an optional owner property, while the Owner struct just has a name.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=32)** Let's start off by creating an item.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=35)** I'm going to call this rareDagger, and I'm going to use the Item struct's default initializer.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=42)** For the description, just going to say "A unique dagger of unknown origin."
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=52)** I'm going to set the previous owner to nil for now.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=56)** In order to get the name of the previous owner, if there is one, we create an optional chain by saying if let, and if there is a unwrapped optional, I'm going to call that owner.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=68)** Here, I'm going to query rareDagger.previousOwner?.name.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=77)** The added question mark here is telling the compiler to return nil if previous owner is nil, and not to bother with trying to get the name property of something that doesn't exist.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=88)** So if we get a value back, I'm going to print out "This item used to be owned by \(owner)."
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=100)** Else, let's print out, "Looks like this items history is unknown..."
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=113)** Now there's no real limit to how many optionals you can chain together like this.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=117)** It just depends on the nested optionals and your data structures.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=121)** However, it's important to understand that even though the name property isn't an optional in the struct, using optional chaining automatically returns it as an optional value.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=132)** Think of it this way.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=133)** Optional chaining is always going to return an optional, regardless of how the actual property you're looking for is declared.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=141)** Now, if we create an Owner, and we'll call this daggerOwner, we'll use the Owner struct's default initializer, and we'll say the name of the previous owner was "The Great Thief."
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=157)** We can assign daggerOwner to rareDagger.previousOwner and see our different debug log print out,
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=171)** "This item used to be owned by The Great Thief."
>
> **[2:55](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=175)** Now the principle of optional chaining works for both retrieving and assigning values.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=181)** For instance, let's comment out setting daggerOwner as the item's previous owner, and try to set the previous owner's name manually.
>
> **[3:10](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=190)** So we'll say rareDagger.previousOwner?.name equals "The Old Merchant."
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=202)** You'll see in the inspector that this is returning a nil value, because again, the chain breaks at previousOwner and therefore the name can't be assigned a value if its parent's struct doesn't even exist.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=213)** However, if we uncomment the line above, we'll see that this works just fine.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=218)** "This item used to be owned by The Old Merchant."
>
> **[3:43](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=223)** Calling methods through an optional chain works much the same way in that no matter what the return type is, the optional chain is always going to wrap it as an optional.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=233)** Let's see this in action by adding a simple function to the Owner struct.
>
> **[3:59](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=239)** I'm going to call this returnOwnerInfo.
>
> **[4:03](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=243)** No parameters, but it is going to return a string.
>
> **[4:13](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=253)** I'm going to a return interpolated string with the owner's "\(name) is the original owner!"
>
> **[4:24](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=264)** Actually, we're going to say is the current owner.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=268)** That's more accurate.
>
> **[4:32](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=272)** We're going to comment out the owner assignment line once again before using this new function.
>
> **[4:38](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=278)** And we're going to use if let ownerInfo exists, it's going to be equal to rareDagger.previousOwner?.returnOwnerInfo().
>
> **[4:53](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=293)** If we do find owner info, since it's already going to print something else for us, we'll just say "Owner found!"
>
> **[5:01](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=301)** Else, we'll print out "No owner in our records..."
>
> **[5:13](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=313)** Let's uncomment rareDagger.previousOwner assignment once again.
>
> **[5:18](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=318)** We see this item used to be owned by the old merchant, owner found.
>
> **[5:25](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=325)** To finish off optional chaining, let's revisit the example from way back in chapter three where we were trying to retrieve nested dictionary values.
>
> **[5:34](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=334)** Now at the time, we didn't really talk about why the optional chaining worked, because we didn't know enough about optionals, but let's try it again with our new information.
>
> **[5:43](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=343)** I've copied the nested dictionary at the top of the file.
>
> **[5:46](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=346)** So we can say if let gemstoneObjective equals questDirectory, here we have to use chain subscript, ["Fetch Gemstones"]?["Objective"].
>
> **[6:06](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=366)** If that's found, we're going to print out the gemstoneObjective.
>
> **[6:12](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=372)** Perfect, that shows up because it exists and we're good to go.
>
> **[6:16](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=376)** And we can see that optional chaining through subscripts works exactly the same as with nested class or struct properties.
>
> **[6:23](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=383)** While optionals can be a tricky thing to understand, the rules at least are consistent across the Swift language.
>
> **[6:29](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals-14531798?u=76281980&t=389)** Get comfortable with them and optionals will be your new best friends.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), struct (7), else, (2), function (2), this. (1)
> **Code Identifiers:** raredagger (6), previousowner (6), daggerowner (3), returnownerinfo (2), gemstoneobjective (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Inventory system
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=0)** (cheerful music)
>
> **[0:05](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=5)** - Oh man, I've been waiting to get to this challenge the entire course.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=9)** This is the one, the defining moment where we put all of our Swift knowledge to the test and create a simple but functional inventory system.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=18)** You're going to have to use classes, structs, and optional chaining for this one, folks, so get ready.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=24)** You should be spending about 10 to 15 minutes on this one.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=27)** So give it a shot on your own, then jump to the next video for my solution.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/challenge-inventory-system-14527892?u=76281980&t=31)** Quest accepted.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - oh (1)
> **Non-Speech:** (cheerful music) (1)

#### Solution: Inventory system
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=0)** - [Instructor] All right, let's get into our inventory management challenge with the first task of creating a class called item.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=15)** I'm going to say class Item, and we need two properties here, a name and a price.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=31)** Going to move the second comment into our class because we need a default initializer for this task.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=37)** So I'm going to say init name: String price: Int, and assign the instance properties here in the body of the init method, self.name = name, self.price = price.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=57)** For our third task, we need to create a struct called BonusEffect, and it's only going to have one property called bonus.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=66)** Let's say struct BonusEffect var bonus of type Integer.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=76)** Our fourth task is to add a optional BonusEffect to our Item class.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=84)** And I'm going to call this var secret of type BonusEffect, and it's going to be an optional.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=94)** For task number five we need to create a class called Inventory, and it's going to have a property that's an array of Items, so it'll be able to track what it's storing.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=107)** Say class Inventory var storedItems: of type array of Item.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=124)** Task number six is going to be to declare the inventories default initializer.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=129)** In this case, we only needed to take in one parameter, and it's going to be an array of Items.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=137)** In here we just say self.storedItems = items.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=143)** I spelled items incorrectly, there we go.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=149)** All right, now for the fun part.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=150)** Task number seven is going to be creating a BonusEffect and two items that we can work with.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=157)** I'm going to say partyWideEffect, and this is going to be a new BonusEffect, and for the input parameter, I'm just going to put 15.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=170)** I'm also going to declare a potion Item, its name is going to be "Healing Potion", price is going to be 35.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=181)** Also going to create an antidote, "Antidote" for the name, price is going to be 15.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=193)** Now you can choose to add the BonusEffect or the partyWideEffect to either the potion or the antidote.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=200)** I noticed that I missed a T there.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=202)** I'm going to add it to the potion.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=204)** I'm going to say potion.secret = partyWideEffect.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=211)** Now, for our last task, we're going to create an instance of our inventory.
>
> **[3:35](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=215)** We're going to initialize it with our potion and antidote and unwrap, or optionally chain, the potion's secret variable.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=225)** So let's take that step-by-step.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=227)** We'll say var inventory, it's going to be an instance of our inventory class, and it's going to take in an array, and I'm going to do that in line here of our potion and our antidote, just two items.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=242)** I'm going to say if let itemPower is = inventory, with a lowercase I, .storedItems.
>
> **[4:12](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=252)** I'm going to access potion at index one using subscript, and then I'm going to access its secret.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=260)** Now here, because secret is an optional, we have to add the question mark, and then we can get to the bonus value.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=268)** Now if it does find an itemPower, let's say "Healing potion has a bonus effect of,
>
> **[4:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=279)** and use the unwrapped optional for itemPower", else I'm going to print out "The item queried has no secret effect..."
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=295)** Perfect, Healing potion has a bonus effect of 15, but if we comment out one of our lines from task number seven, we're going to get The item queried has no secret effect.
>
> **[5:08](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=308)** Everything works great.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-essential-training/solution-inventory-system-14525881?u=76281980&t=309)** Let's get on to the last module of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), var (4), self (3), struct (2), class. (1)
> **Code Identifiers:** storeditems (3), partywideeffect (3), itempower (3)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Leveling Up with Enums, Protocols, and Errors

> [↑ Back to Table of Contents](#table-of-contents)

#### Final stage, final boss
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/final-stage-final-boss-14530766?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/final-stage-final-boss-14530766?u=76281980&t=0)** - This chapter marks the end of our Swift adventure, at least for now.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/final-stage-final-boss-14530766?u=76281980&t=4)** The topics we'll be covering are your stepping stones to the more intermediate and advanced features that Swift offers.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/final-stage-final-boss-14530766?u=76281980&t=11)** This is going to include a special kind of collection, called an enumeration, as well as protocols, extensions and efficiently handling errors.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/final-stage-final-boss-14530766?u=76281980&t=20)** By the end of this chapter, I really hope you'll be as excited as I was after learning the Swift essentials, and just curious for what other hidden secrets the language has to offer.

> [!info]- Semantic Content
>
> **Speakers:** - this (1)

#### Swift enumerations
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=0)** - Swift enumerations allow you to put related values together into a custom type.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=6)** Like switch statements, each value in an enum is considered a different case, which is one of the reasons they go so well together.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=15)** To declare a new enum, we use the enum keyword followed by the name we want it to have.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=21)** So I'm going to call this enum GameState, and open and close the body with a pair of curly braces.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=28)** To declare each case individually, we use the case keyword followed by its name.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=34)** So we want GameState to have three cases, Completed, Initializing, and LoadingData.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=43)** You can also shorten this if you prefer sort of an abbreviated version.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=47)** We could say GameState, open and closed curly braces on the same line, and only use one case keyword.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=56)** Now this is exactly like when we declared multiple variables on the same line.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=64)** I am going to comment this out because we will get a naming conflict with two enums, but that's there for your reference.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=70)** The compiler is now going to recognize GameState as its own type, which means we can define variables with it, just like anything else.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=78)** So we'll say var currentState.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=82)** To assign a value, we just type in the name of the enum, which is GameState, and use dot notation to select one of the cases.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=89)** So I'm going to say Completed.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=93)** I can also print this out and just say "Current state is" currentState.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=100)** You'll see that the name of the case is automatically translated by Swift into a string, so we get "Current state is Completed".
>
> **[1:48](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=108)** Now that covers the basics of how to declare and use enumerations, but we still want to look at how they work specifically with switch statements.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=118)** Let's do another example and switch on the currentState value.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=122)** Now for the pattern we can say GameState.Completed, and GameState.Initializing and so on, but Swift does allow us to have a more short, concise version, and just use the .Completed.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=134)** It's already inferring that current state is an enum.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=139)** For the Completed state, just going to say "Completed processing all tasks".
>
> **[2:27](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=147)** Remember, our switch statement needs to be exhaustive, so we have to do all three cases.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=152)** So for Initializing, I'm going to say "Still initializing data".
>
> **[2:40](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=160)** And for case LoadingData, say "Player data correctly unpacked".
>
> **[2:53](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=173)** Now technically, a switch statement being used with an enum doesn't need a default case like we've seen before, because enums only allow for a constant number of options, and they're all known.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=184)** There's no unknown.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=186)** However, if we needed to add cases to our enum in the future, a switch statement without a default would break and would throw up a nasty error.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=195)** Now to avoid having to manually update a switch statement that's using an enum, we can add @unknown default case, and we'll print out "Unknown game state detected".
>
> **[3:35](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=215)** This is going to catch any undefined cases, just like a normal default, but it's more explicit and safe done this way.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=224)** Now we are going to get a warning because our default isn't going to be executed right now.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations-14530756?u=76281980&t=228)** But if we add another case to GameState, we'll say Restarting, this will take care of that.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (9), switch (7), case, (2), type. (1), type, (1)
> **Code Identifiers:** currentstate (3)
> **Analogies:** just like (2)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - swift (1)

#### Raw and associated values
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=0)** - [Instructor] Enumerations can be expanded to include raw values of sequential or unique values or associated values which capture case specific parameters.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=11)** Let's declare a new enum here.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=13)** I'm going to call this non playable characters.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=18)** We're going to have three cases here, a villager, a blacksmith, and a merchant.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=27)** And we can specify a raw value type by adding a colon after the enum name.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=32)** And we want this to be a string type, so we'll just add the string class.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=37)** Swift is going to take care of setting string and integer raw values for us by default.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=42)** So if we create a new NPC, we'll just say VAR blacksmith equals non playable characters blacksmith.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=54)** Now, if we print out the raw value of blacksmith, we'll just get it string representation.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=64)** If we change our raw value type to an integer, we can see that blacksmith is going to be an integer of one, or raw value of one.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=72)** Since Enums, like everything else we've seen, are zero indexed.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=77)** Well, that's not much fun.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=78)** So let's switch back to a string type and we're actually going to define our own raw values that are unique to each case.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=86)** And we can do that by setting a unique or literal string.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=91)** So for villager, and I forgot the R, we're going to say common, not much useful info there.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=102)** For the blacksmith, we're going to say one per village, will have quest information.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=111)** And for merchant say no limit per village, will make you cool stuff.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=120)** Now, when the debug log runs, we'll see that the raw value of blacksmith is now this unique string, instead of a default representation of the enum case name.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=131)** Now raw values have a lot of uses, but you might've guessed that having them all be of the same type can be limiting.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=138)** And that's where associated values come in, which let you store values of different types for each case.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=146)** For this example, I'm going to create another enum.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=148)** I'm going to call this player state, and I'm going to have the first case be alive.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=154)** Second is KO, third is unknown.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=159)** For our KO case, it'd be useful to store the level we want to restart at and the unknown to store an error string, which is something that we can accomplish with raw values.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=171)** We can however add an associated value to any of our cases by just specifying the name and type that we want.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=177)** So for KO, I'm going to name the associated value level of type integer.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=183)** And for unknown, I'm going to call it debug error of type string.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=189)** You'll notice that this looks a lot like passing parameters to a function, and you should continue to think of it like that because it'll help with your understanding of what's going to happen next.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=199)** And before we add another switch statement to test this out, I should probably tell you the best part about a numeration types.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=206)** They can have properties and methods of their own.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=209)** Now this feature is perfect for creating class like behavior for situations with finite options.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=216)** So inside the enum declaration, we're going to add a new function.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=221)** We're going to call this evaluate case, no parameters, and no return type.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=228)** Since this function is inside player state, we can have the enum sort of switch on itself using the self keyword.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=240)** Now for the pattern we could say player state and do this long hand, but I'm just going to use again, the dot notation, let's say for alive and print out, still kicking.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=254)** For KO, and here we need to locally capture the associated value.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=260)** And we can do that by either declaring a VAR or a let, so here I'm going to say let, and I'm going to call this local variable restart level.
>
> **[4:30](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=270)** Now we can use restart level inside our case block, which is honestly very useful.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=277)** So let's say print, sorry, Back to restart level for you.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=289)** I'm actually going to add in, so sorry, back to level restart for you, there we go.
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=295)** And for case unknown, I'm going to name this message.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=303)** And I'm just going to print that out directly 'cause it's already a string.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=309)** For the default, we can't forget.
>
> **[5:11](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=311)** We'll just say unknown state encountered.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=316)** Now with our player state class, we can say player state KO, give it a level of one and call the evaluate case function.
>
> **[5:28](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=328)** On the debug log we'll see, sorry, back to level one for you, as our associated value was captured, passed into our cases and used in our KO case statement.
>
> **[5:41](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=341)** Now, this is perfect.
>
> **[5:43](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=343)** Swift enums are often under utilized because of their inflexibility in other languages.
>
> **[5:49](https://www.linkedin.com/learning/swift-5-essential-training/raw-and-associated-values?u=76281980&t=349)** So be sure to take advantage of them in Swift.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), enum (6), function (4), switch (3), var (2)
> **Env Vars:** var (2), npc (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Introducing protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=0)** - [Instructor] We did a lot of work with classes and subclassing in the last chapter.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=4)** But there's one rather glaring issue with that approach that you might've noticed.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=8)** Classes are limited to single inheritance and structs, well they can't subclass at all.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=14)** So how do we extract and share common functionality without these limitations?
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=19)** Well on Swift, the answer is protocols, which are essentially blueprints, light classes, but they can be adopted by a class or struct independently.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=30)** Let's start off by declaring a protocol and we just use the protocol keyword and we name it.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=36)** I'm going to call this a collectible protocol.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=40)** You give it open and close curly braces.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=43)** Now, if you go to community projects or forums, you'll see protocols labeled like this as action verbs.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=49)** And that's sort of just a style thing, but the community has adopted it.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=54)** And protocols themselves can only have property and function declarations.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=58)** They can't actually have any stored values or implementations.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=62)** That is up to the adopting class or struct to implement on a case by case basis.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=69)** However, we do want all collectible objects to have a name.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=73)** So we'll say we want var name of type string.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=76)** And we also want them to have prices of type int.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=81)** Even though protocol variables can't store values, they still need to have explicit getters or getter and setter events.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=89)** We've already seen these with computed properties, so let's give our name just a getter so it's a read only, and our price is going to be a read write.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=100)** So that's with a get and the set.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=104)** Now that our compiler is happy again, I'm going to add a function declaration here, and I'm going to call this collect.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=112)** No input parameters and it's going to kick back a bool.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=117)** You'll notice here that we don't declare a function body of any kind.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=120)** It's just the pure signature of the function.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=123)** The adopting class as responsible for implementing it.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=127)** Now, if you're wondering, well, what if we want to initialize a protocol just like we do a class?
>
> **[2:13](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=133)** Well, we can do that too.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=135)** We can add an initializer here.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=137)** I'm going to say with name of type string and starting price of type int.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=147)** Again, just the function signature, no body at all.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=153)** Now adopting a protocol is incredibly easy.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=155)** It's just like subclassing.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=157)** We're going to take a class example here, but again, this works for structs.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=162)** And we'll call the class item, colon and we can use collectible, open and closed curly braces, and that's all it takes.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=172)** And we will get an error saying type does not conform to the protocol collectible.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=177)** And do we want to add stubs?
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=179)** Well, yes, we do Xcode.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=181)** Go ahead and fix that for us.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=185)** Now automatically our name, price, init and collect are all stubbed in.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=194)** And we do have some errors though because as I've sort of hit you on the head with multiple times, the protocol doesn't actually do anything.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=202)** It's just a blueprint.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=203)** So in our init, we still need to set our non-optional values.
>
> **[3:27](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=207)** So we'll say self.name = withName.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=211)** Self.price = startingPrice.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=216)** And for our collect function, we're going to print out item collected and always return true for this, just for the example.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=228)** A few things to note here before we move on.
>
> **[3:51](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=231)** First, variables and functions enforced by a protocol are written the exact same way.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=237)** Second, if you're using an init function in your protocol, it's going to be required in the adopting class, which is why the compiler added the required keyword in front of the init.
>
> **[4:08](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=248)** Now we can create an instance of item just like we have before with a class.
>
> **[4:12](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=252)** So we'll say let potion = Item.
>
> **[4:16](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=256)** I'm going to call this a high potion.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=258)** Starting price of 35.
>
> **[4:22](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=262)** There's no upper limit on how many protocols an object can adopt, which essentially lets you build up classes or structs or even enums from different functional pieces.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=273)** This is a huge step in efficiency over an object oriented, single inheritance approach as different objects adopting the same protocol can all have their own implementations while following the same blueprint structure.
>
> **[4:47](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=287)** Let's go back up to our collectible protocol and I'll show you how easy this is.
>
> **[4:51](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=291)** We'll say a new protocol is called usable.
>
> **[4:55](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=295)** There's just going to be one function called use.
>
> **[4:59](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=299)** To adopt multiple protocols, we'll go to our class and after collectible, we'll add a comma and usable.
>
> **[5:07](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=307)** And again, we're going to get an error because we don't implement the use function.
>
> **[5:11](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=311)** So before that pops up, I'm just going to write this in here.
>
> **[5:15](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=315)** And auto-complete does recognize that we have the use function from our protocol.
>
> **[5:21](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=321)** So here I'm just going to print item used.
>
> **[5:28](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=328)** Let's go down to our potion and call collect and use just to make sure this is working.
>
> **[5:33](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=333)** We should see our debug logs in the console.
>
> **[5:37](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=337)** And there we go.
>
> **[5:38](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=338)** Item collected, item used.
>
> **[5:41](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=341)** Now protocol oriented programming in Swift is a huge subject in itself and way outside our course scope.
>
> **[5:48](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols-14526935?u=76281980&t=348)** But I would encourage you to explore its potential for creating modular and flexible application architectures.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), struct (2), self (2), var (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (3)
> **Code Identifiers:** withname (1), startingprice (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Using extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=0)** - [instructor] Now that we've seen what protocols can do, we can take a look at extending their functionality.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=6)** First off, any class, struct, protocol or even an enum can be extended, regardless of whether you created it or it's part of the swift language.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=16)** Now second, extensions can either be used to add default implementations of an existing feature, or new computed properties and functions.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=26)** Let's keep working with the collectable protocol and we're going to extend it.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=32)** All we do is add the extension keyword, the name of the protocol or class that we're extending, and open and closed curly braces.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=42)** Let's add in a computer property that's always going to return a collectibles price times 10.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=48)** So we'll say var priceIncrease type Int.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=52)** It's always going to return self.price times 10.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=57)** And we have access to our price variable because we're extending the collectible protocol.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=64)** The self keyword here refers to whatever object is being extended.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=68)** So in this case, we have access to the price variable from our collectible protocol.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=73)** We can also add in a convenience initializer and pass the heavy lifting up the chain to the protocols required init.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=81)** Now, these don't need the convenience keyword.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=84)** So we can say a init, just with a name and we'll just call self.init, select our collectible required initializer, pass up name and by default, all items using this convenience init, will start with a price of a 100.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=106)** Now this accomplishes the same thing as convenience or subclass initializers we worked with earlier.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=112)** So we could create another item with a set price of a hundred, and we'll call this an antidote.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=121)** Let's have item and just with a name, and now if we print out antidote.price or debug it in the right-hand inspector, we'll see that it's a 100.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=135)** And last thing, let's go back up to the collectible extension and we're going to add in a default implementation of the collect function.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=143)** So we name it exactly the same, func collect, no parameters, returns a bool and we'll say print out default item couldn't be collected.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=158)** And we're always going to return false here for this.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=162)** Now, extending functions like this isn't strictly necessary since the point of protocols, is to give the conforming object the chance to define its own implementation.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=172)** However, it is a good idea when you need some baseline functionality like adding default values to function parameters.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=179)** To see this in action, we can go to our item class and we can actually comment out, it's collect implementation.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=188)** And once that runs, we'll see the default debug inside a console.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=197)** And there we go.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=200)** And one last thing before we go, extending swift classes, is the same as doing it to our custom protocol.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=206)** So let's add some of our own little symbol functionality to the string class.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=211)** We'll say extension.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=213)** We want the string class to be extended, open and close curly braces.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=218)** I'm going to add sort of a simple function here called fancyDebug.
>
> **[3:43](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=223)** No inputs or return values.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=225)** And I'm always going to print out when this function is called, this string has, and I'm going to reference whatever string I'm using.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=234)** So we'll use self account property characters.
>
> **[4:01](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=241)** Now any string has access to this fancyDebug function.
>
> **[4:05](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=245)** So we can say antidote.name.fancyDebug.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=250)** And we'll see that antidote has eight characters.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=254)** To reiterate classes, strucks, enums and protocols, can all be extended with computer variables, functions and initializers.
>
> **[4:23](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=263)** But these extensions aren't a requirement.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-essential-training/using-extensions-14529813?u=76281980&t=266)** As we've seen, it's perfectly fine to have protocols or classes without extensions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), self (4), pass (2), class, (1)
> **Code Identifiers:** fancydebug (3), priceincrease (1)
> **Definitions:** refers to (1), is a  (1), is called (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Throwing errors
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=0)** - [Instructor] Optionals are great for handling values that might be nil while your code is running, but they won't account for situations where you need the program to send out and interpret an error.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=11)** Swift makes throwing and responding to errors almost second nature, allowing you to customize how your code responds to unexpected actions.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=21)** Enums are the most commonly used type when you're handling errors because they have a fixed number of options.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=28)** So let's declare a new enum.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=30)** We're going to call this DataError.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=32)** It's going to have two cases, EmptyPath and InvalidPath.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=39)** For this example, we're going to use this DataError enum to mock up fetching some kind of player data.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=45)** And even though it doesn't exist, we can still get the topic across here.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=50)** And we're going to have to have DataError adopt the error protocol so the compiler knows that our new type is compatible with error handling.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=58)** So we'll say colon after DataError, Error.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=62)** The error protocol doesn't actually have anything in it, it's just used as a kind of flag to mark types we want to be recognized as an error.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=72)** Now we can create a function that essentially throws out errors into our code under specific situations.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=78)** For this example, we're going to mock up a function called load data to check a file path.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=83)** So let's say loadData.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=86)** It's going to take in a parameter called path, type string, and it's not going to have a return type.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=94)** To mark a function as throwable, or that is able to throw an error, we add the throws keyword after the parameters.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=104)** Just a note here that a function marked with throws can still have a return value, it's not a replacement.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=109)** You just add the return value as normal right after throws.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=113)** Now, we've already seen the guard statement in action, so this is a perfect place to use two of them as gatekeepers to determine if and when an error should be thrown.
>
> **[2:03](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=123)** First off, we'll check that the path parameter contains a forward slash character.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=128)** So we'll say guard path contains forward slash and if it doesn't, instead of just having a printout, we're going to use the throw keyword and throw out one of our enum cases.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=143)** Now this is going to be DataError.InvalidPath.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=148)** Remember that if a guard statement fails, the entire function is exited, so what this is doing is saying if we detect that path contains, or doesn't contain, a forward slash character, throw our error and then exit loadData without going any further.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=165)** And we're also going to check if the path is not empty.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=167)** So we say guard, we use the bang operator or the is not, path is empty, else we're going to throw our second type of error, DataError, EmptyPath.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=181)** With that, our loadData function is set up to defensively handle two use cases where a file path might not be configured correctly or present at all.
>
> **[3:10](https://www.linkedin.com/learning/swift-5-essential-training/throwing-errors-14528847?u=76281980&t=190)** Now we just need to figure out how and when to handle them when we call the loadData function itself, which we'll talk about next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), throw (5), enum (3), let (2), type. (1)
> **Code Identifiers:** loaddata (4)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Handling errors
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=0)** - [Instructor] We've already mentioned that the idea behind throwing and handling errors is delegation.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=5)** And we've covered where we want to send out errors from in our program, but not where and how they need to be addressed.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=14)** So let's go down to our test code here, this is from the last video.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=18)** Let's create a file path that we can work with going forward.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=23)** So we'll say playerDataPath =/example/data.txt, why not?
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=35)** Now we can call load data, and pass in our new variable, but we need to prefix the function call with a new keyword, try.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=45)** So we'll say try loadData path, playerDataPath.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=50)** The try keyword attempts to call a function that throws an error, sort of like the if let statement tries to query an optional value and unwrap it.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=60)** Now using the try keyword by itself only works right now because our path is not throwing any errors.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=66)** But if we go up and delete the forward slashes in player data path, we'll see that this is a different case.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=74)** There we go, an error was thrown and was not caught.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=79)** What we need in this particular situation is a new kind of statement called a Do-Catch.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=85)** Let's take our try loadData and copy that.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=89)** I'm going to use the do keyword, open and closed curly braces.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=94)** I'm going to paste back in our try loadData.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=99)** Now we're still going to get an error here because we haven't handled the error properly.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=104)** And that's where the second half of the statement comes in, the catch keyword.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=109)** Now each catch essentially works like a switch case, it has its own executable body of code.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=117)** However, we have to define which error or what errors, we're actually trying to catch.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=122)** Here we have the option of defining each error case with its own catch body, just like a switch statement and cases.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=129)** But for now, let's just determine if the error is one of our own or something else.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=135)** So after the catch we can use the is keyword, and our DataError type.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=144)** And what this is saying is catch all errors that are of our data error enum.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=151)** So let's just print out invalid or empty path detected just to cover both cases, and do catch statements have to be exhaustive, just like switches.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=163)** So we add a catchall catch at the bottom with no expression or checking, and we'll just say unknown error detected.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=178)** Perfect, now in our debug log we see that our catch statement where we're detecting, if it's of type data, error is firing and that's great.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=188)** Let's go up and make sure that our player data path has those forward slashes in it.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=194)** And we'll add a print statement underneath our try so that if it's successful, we'll just say data fetch successful.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=204)** And now that our path variable is valid, we should see that in our debug.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=209)** Perfect.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=211)** Now in the last video, I did mention that we can throw errors and return values from the same function.
>
> **[3:37](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=217)** So let's see how that works.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=219)** I'm going to go up to low data and I'm going to add in an optional boolean return value after the throws keyword.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=228)** And if our path passes our two guard statements, I'm just always going to return true for this example.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=240)** Now we don't actually have to store or unwrap our return value just like with a normal function.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=246)** But if we want to, we need to use our if let, I'm going to call our unwrapped optional return if there is one, data loaded, I'm going to say try load data again from our player data path.
>
> **[4:22](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=262)** And if there is one present, I'm just going to print out a different string, data fetch went just fine.
>
> **[4:31](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=271)** Now there's one gotcha here.
>
> **[4:32](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=272)** Since our function can throw an error and return a value, we need to add a question mark after the try keyword.
>
> **[4:39](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=279)** this is going to tell the compiler, then if an error is thrown, the return value is nil.
>
> **[4:45](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=285)** Otherwise it's an optional and unwraps normally.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=289)** And before we get to the chapter challenge, there's one more thing we need to know about handling errors and that's how to propagate or pass them to other functions.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=300)** I'm going to create a new function.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=303)** I'm going to call this propagate data error.
>
> **[5:06](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=306)** It's going to take no parameters, but it is going to be able to throw errors, open and closed curly braces.
>
> **[5:15](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=315)** From inside here, I'm going to call try load data again, player data path.
>
> **[5:22](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=322)** From inside here, I'm just going to call try loadData with our player data path again.
>
> **[5:27](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=327)** And that's going to take any errors generated by loadData and delegate them for propagate data error to throw.
>
> **[5:37](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=337)** Now let's use a do catch statement again, to call propagate data error this time, which is going to kick off the whole error chain.
>
> **[5:45](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=345)** I'm going to do some of the repeated code here because I want to show you how to declare a catch statement for each individual Enum error that we have.
>
> **[5:55](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=355)** So inside do, I'm going to say try to propagate data error.
>
> **[6:00](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=360)** And if that succeeds propagated data fetch successful.
>
> **[6:09](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=369)** For our first catch, we're going to say catch data error for empty path.
>
> **[6:17](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=377)** And we're going to print out empty path detected.
>
> **[6:24](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=384)** Also going to add a catch for data error, invalid path.
>
> **[6:31](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=391)** Print out invalid path detected.
>
> **[6:35](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=395)** And finally we need our default catch, which again is going to print out, unknown error.
>
> **[6:44](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=404)** You can see in the debug area that all three of our approaches have printed out different messages, which means that we've handled them differently, but the result is essentially the same.
>
> **[6:55](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=415)** A final note here using catch statements for each individual error enum is perfectly compatible with other throwing functions.
>
> **[7:03](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=423)** It's not just for the propagating error approach.
>
> **[7:06](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=426)** You can mix and match as you want.
>
> **[7:08](https://www.linkedin.com/learning/swift-5-essential-training/handling-errors-14526926?u=76281980&t=428)** This was just easier to break it out as an example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (6), throw (4), enum (3), pass (2)
> **Code Identifiers:** loaddata (5), playerdatapath (2)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** just like (3)
> **File Paths:** example/data.txt (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Warnings:** gotcha (1)

#### Challenge: Battle actions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=0)** - This last chapter challenge is going to be our biggest boss fight yet, putting our skills with enumerations, protocols, extensions, and air handling to the test.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=16)** Don't worry, I have faith in your ability to think critically about everything we've learned throughout the course.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=22)** Remember, it's all about putting small, separate pieces together to form a coherent structure, from atoms to molecules to an entire physical body.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=32)** This should take you about 10 minutes, so get after it.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=35)** I'll see you in the next video with my solution.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-essential-training/challenge-battle-actions-14528845?u=76281980&t=37)** Happy coding.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - this (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Battle actions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=0)** - [Instructor] All right, let's dive into our last challenge solution here and handle some errors.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=12)** Our first task is going to be to create an enum that adopts the error protocol and has three cases.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=19)** I'm going to say enum, I'm going to call this action error, It's going to adopt the air protocol, and for the first case, I'm going to say insufficient MP, second case out of range and third case unknown error.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=40)** The second task we need to create a function, that's going to take in an integer and a double and return an optional Boolean.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=48)** I'm going to say func attack enemy, parameter name is going to be MP for the first one and distance as a double.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=60)** I'm also going to kick back an optional Boolean.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=68)** And task three is pretty simple, we're going to mark attack enemy as a throw bool function with the throws keyword.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=77)** For task number four, we need to add two guard statements to make sure that our MP and distance parameters meet certain conditions.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=85)** So I'm going to guard against MP, always needed to be over 10, and if that's not the case, I'm going to throw action error, insufficient MP.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=99)** I'm also going to say guard distance always needs to be less than 5.89 or else we're out of range.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=107)** And I'm going to throw action error out of range.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=115)** Task number five is also an easy win.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=117)** We're just going to return true, if both our guard statements are past.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=124)** Task six is to use a do-catch statement to call attack enemy, but handle each error case individually.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=132)** Here we can say, do we'll use our try keyword, so we'll try to attack our enemy, let's say we have 15MP and our distance is five.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=144)** And if that's true, we're going to say attack landed.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=149)** Perfect.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=151)** Now we are going to catch our individual errors, so we'll say catch action error, insufficient MP.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=163)** And in here, I'm just going to print out sorry, you don't have enough MP for that one.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=172)** I'm going to catch the action error out of range and print out the enemy is too far away to hit.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=186)** For the action error unknown, I'm going to print out, not sure what happened there boss.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=197)** Remember our do-catch statements need to be exhaustive, so I'm going to add a default catch at the end and printout undefined error detected.
>
> **[3:30](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=210)** Now, if we change around our MP, we'll give it nine, we should see, sorry you don't have enough MP for that.
>
> **[3:38](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=218)** If we give it back enough but we change our distance to be 10 units away, the enemy is too far away to hit.
>
> **[3:48](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=228)** Our last task is going to be to unwrap the optional bullion that is returned from attack enemy.
>
> **[3:56](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=236)** So I'll say if let attack success equals try and we need our question mark, in case an error is thrown, we'll get a nil value back, say attack enemy for 55, we have 55 MP, but we are close enough.
>
> **[4:16](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=256)** Actually, we need to be close enough for both.
>
> **[4:18](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=258)** And there we go.
>
> **[4:20](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=260)** We're going to print out attack success and use our unwrapped optional.
>
> **[4:29](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=269)** Here we go, attack landed, attack success.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-essential-training/solution-battle-actions?u=76281980&t=273)** Feel free to play around with both values in our attack enemy calls to explore all the different error messages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), throw (3), enum (2), case, (2), function (2)
> **CLI Commands:** make (1)
> **Versions:** 5.89 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980&t=0)** - [Harrison] Thanks for joining me on this trip through the basics of the Swift 5 language.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980&t=4)** You're now ready to embark on your app or game making journey.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980&t=8)** If you're looking for the next step in that journey, I'd highly suggest poking around our iOS App Development series, as there are tons of courses on the language itself, and on specific core components.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980&t=20)** If you're looking for a specific place to start after you've finished up here, check out our series of courses on creating your first iOS app.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-essential-training/next-steps-14526916?u=76281980&t=28)** As always, and for the last time, happy coding.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (2)
> **Speakers:** - [harrison] (1)


## Instructor

- [[Harrison Ferrone]]

## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)

## Path Context

### In [[Get Started with iOS App Development]]
**1 of 4** | [[Xcode 15 Essential Training]] →

### In [[Master Swift]]
← [[Programming For Non Programmers Ios 17 And Swift 5]] | **2 of 4** | [[Swift- Delegations and Data Sources]] →

## Appears In

- [[Get Started with iOS App Development]]
- [[Master Swift]]

## Related Courses

_Courses sharing skills:_

- [[Swift 5- Protocol-Oriented Programming]] — Swift (Programming Language)
- [[Swift- Delegations and Data Sources]] — Swift (Programming Language)
- [[Programming For Non Programmers Ios 17 And Swift 5]] — Swift (Programming Language)

---

[↑ Back to top](#)