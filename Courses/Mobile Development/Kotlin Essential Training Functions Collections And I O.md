---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: kotlin-essential-training-functions-collections-and-i-o
url: "https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o"
level: Beginner
updated: 4/29/2022
learners: 2135
skills:
  - Kotlin
exercise_files: true
github: "https://github.com/LinkedInLearning/kotlin-essential-training-functions-collections-and-io-3008787"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHQxXohmsZEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650999446186?e=2147483647&amp;v=beta&amp;t=012dHBeTDcwco_mvjkWz0aVST5nrbThJnBPW1sO0Ic8"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Kotlin Professional Certificate by JetBrains]]'
next_courses:
  - '[[Kotlin Essential Training- Object-Oriented and Async Code]]'
path_nav: '[{"path":"Kotlin Professional Certificate by JetBrains","position":1,"total":4,"prev":null,"next":"Kotlin Essential Training- Object-Oriented and Async Code"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/kotlin
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Kotlin%20Essential%20Training%20Functions%20Collections%20And%20I%20O.md)

![Kotlin Essential Training Functions Collections And I O](https://media.licdn.com/dms/image/v2/C560DAQHQxXohmsZEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650999446186?e=2147483647&amp;v=beta&amp;t=012dHBeTDcwco_mvjkWz0aVST5nrbThJnBPW1sO0Ic8)

# Kotlin Essential Training Functions Collections And I O

> If you’re looking to get up and running with Kotlin, the powerful programming language from JetBrains, this course gives you the tools you need to start writing command-line programs in a matter of hours. Join instructor Nate Ebel, the author of Mastering Kotlin, as he shows you the ins and out of Kotlin and walks you through its unique selling points for developers—from null safety and concise sy

> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o) | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome to Kotlin](#welcome-to-kotlin)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files on GitHub](#using-the-exercise-files-on-github)
- [**1. Setting Up Your Kotlin Development Environment**](#1-setting-up-your-kotlin-development-environment) (4 videos)
  - [Introducing IntelliJ IDEA](#introducing-intellij-idea)
  - [Installing IntelliJ IDEA for macOS](#installing-intellij-idea-for-macos)
  - [Installing IntelliJ IDEA for Windows](#installing-intellij-idea-for-windows)
  - [Run your first Kotlin code](#run-your-first-kotlin-code)
- [**2. Common Data Types**](#2-common-data-types) (4 videos)
  - [Mutable and immutable data types](#mutable-and-immutable-data-types)
  - [Numeric data types](#numeric-data-types)
  - [Char and string data types](#char-and-string-data-types)
  - [Nullable types](#nullable-types)
- [**3. Working with Functions**](#3-working-with-functions) (6 videos)
  - [Basic functions](#basic-functions)
  - [Function parameters](#function-parameters)
  - [Functional types](#functional-types)
  - [Higher-order functions](#higher-order-functions)
  - [Challenge: Write a name formatter function](#challenge-write-a-name-formatter-function)
  - [Solution: Write a name formatter function](#solution-write-a-name-formatter-function)
- [**4. Control Flow Structures**](#4-control-flow-structures) (8 videos)
  - [if and when statements](#if-and-when-statements)
  - [Statements vs. expressions](#statements-vs-expressions)
  - [try/catch as control flow](#trycatch-as-control-flow)
  - [Smart casting](#smart-casting)
  - [while loops](#while-loops)
  - [for loops](#for-loops)
  - [Challenge: Replace an if/else expression with a when expression](#challenge-replace-an-ifelse-expression-with-a-when-expression)
  - [Solution: Replace an if/else expression with a when expression](#solution-replace-an-ifelse-expression-with-a-when-expression)
- [**5. Debugging Kotlin Code**](#5-debugging-kotlin-code) (3 videos)
  - [Setting breakpoints](#setting-breakpoints)
  - [Stepping through code](#stepping-through-code)
  - [Evaluate expressions and add watches](#evaluate-expressions-and-add-watches)
- [**6. Working with Collections**](#6-working-with-collections) (7 videos)
  - [Arrays](#arrays)
  - [Lists](#lists)
  - [Sets and maps](#sets-and-maps)
  - [Working with collections](#working-with-collections)
  - [Sequences](#sequences)
  - [Challenge: Filtering a list of data](#challenge-filtering-a-list-of-data)
  - [Solution: Filtering a list of data](#solution-filtering-a-list-of-data)
- [**7. Working with Inputs and Outputs**](#7-working-with-inputs-and-outputs) (5 videos)
  - [Command-line arguments](#command-line-arguments)
  - [Receiving user input](#receiving-user-input)
  - [Read and write to files](#read-and-write-to-files)
  - [Challenge: Parsing a list of data from a file](#challenge-parsing-a-list-of-data-from-a-file)
  - [Solution: Parsing a list of data from a file](#solution-parsing-a-list-of-data-from-a-file)
- [**8. Testing Kotlin Code**](#8-testing-kotlin-code) (2 videos)
  - [Writing JUnit tests](#writing-junit-tests)
  - [Mocking data](#mocking-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Welcome to Kotlin
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=0)** - [Nate] Kotlin is one of the most popular programming languages for building mobile applications, being the default choice for Android development.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=8)** It's no surprise why developers are turning to Kotlin.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=11)** It's concise, flexible and includes a powerful set of modern language features.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=17)** With Kotlin, developers can efficiently build robust, scalable applications that run on mobile devices, in the browser and a variety of other targets.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=27)** I'm going to show you how to start building applications with Kotlin.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=31)** We'll start with foundational language features, such as variables and functions, explore Kotlin's collection types, and examine the basics of File I/O.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=40)** My name is Nate Ebel.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=42)** I've been building mobile applications for over 10 years and have been working with Kotlin since before it's 1.0 release.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/welcome-to-kotlin-14800824?u=76281980&t=49)** If you're excited to start learning Kotlin then join me in my LinkedIn learning course on Kotlin essentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (8), [[Programming]] (1), [[Android]] (1), [[LinkedIn]] (1)
> **Versions:** 1.0 (1)
> **Analogies:** such as (1)
> **Speakers:** - [nate] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/what-you-should-know-14798820?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/what-you-should-know-14798820?u=76281980&t=0)** - [Instructor] This course is designed to help you learn the essentials of the Kotlin programming language.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/what-you-should-know-14798820?u=76281980&t=5)** To get the most out of it you should already be familiar with writing code using a modern language such as Java, Python, Swift or JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/what-you-should-know-14798820?u=76281980&t=15)** You'll want to be comfortable with object oriented programming concepts and you should know your way around GitHub.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/what-you-should-know-14798820?u=76281980&t=23)** If you feel you should brush up on any of these concepts check out the course library for more resources and come back to this course when you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (1), [[Programming]] (1), [[Java]] (1), [[Python (Programming Language)|Python]] (1), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=1)** - [Instructor] The exercise files for this course are stored on GitHub.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=5)** There are branches for both the start and end states of each video where we work on code.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=10)** You can find a list of all the branches here in GitHub in the Branch dropdown menu.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=16)** For example, if you wanted to find the start state for video 03_01, basic functions, you'd change it to the 03_01b branch and the ending state would be in the 03_01e branch.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=37)** There are multiple ways to work with this project in IntelliJ.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=41)** One simple way is to copy the URL from the Code button and then move over to IntelliJ where we can check that code out into our working machine.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=53)** Once in IntelliJ, we're going to select the Get from VCS option.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=57)** VCS in this context stands for version control system.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=61)** When we click that button, we'll get the Get from Version Control dialogue, where we will then paste in the URL to the repo that we copied from GitHub.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=72)** In the Directory field, we can select the location that we want to copy the project into.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=79)** Once you're satisfied with that working directory, go ahead and click Clone to download the project to your machine.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=87)** Once you've opened the project, you may receive a few dialogues asking if you want to add the files to Git, go ahead and ignore those, but chances are, by the time you download the files, there will be updates to IntelliJ and the associated plugins.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=100)** If you receive a dialogue asking you to upgrade your dependencies, please do so, then wait project to sync.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=107)** It typically takes longer when the project loads for the first time.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=111)** Once the sync is complete, however, you're ready to work with this version of the code.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=116)** By default, we're running the code from the Main branch.
>
> **[2:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=120)** As I mentioned earlier, I've created branches for each video in the course where we modify code.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=125)** If you'd like to follow along, use the branches popup menu in the lower right corner of IntelliJ to change the branch to whatever branch you're looking for.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=139)** As an example, let's check out the code for the start of the 03_01 video.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=145)** We will choose it here from the dropdown and we can search for 03_01b.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=153)** We'll select that option and click Checkout.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=157)** This will checkout a copy of that branch locally.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=161)** We'll then rebuild our project to ensure that we're working with the code from this newly selected branch.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=168)** Once that's complete, we're now ready to work with this version of the code.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/using-the-exercise-files-on-github-14803700?u=76281980&t=172)** If you run into any trouble checking out the different branches or with using Git in general, I recommend searching the course library for the "[[Git Essential Training]]" videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (3), [[Version Control]] (2), [[Search]] (1)
> **Tools:** intellij (5), github (3)
> **CLI Commands:** git (3), find (2)
> **Env Vars:** url (2), vcs (2)
> **UI Navigation:** dropdown (2), select the (2)
> **Exercise Files:** download the (2), exercise files (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)


### 1. Setting Up Your Kotlin Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### Introducing IntelliJ IDEA
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=0)** - [Instructor] Like most programming languages, it's possible to write Kotlin in a variety of ways, from the command line, your favorite text editor, or other more language focused programs.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=10)** In this course, we're going to be using a program called IntelliJ Idea or just IntelliJ for short.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=16)** By using IntelliJ, you'll better understand why it's useful for building Kotlin projects.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=22)** Kotlin is an IDE or integrated development environment.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=27)** IDEs combine developer tooling with a graphical interface to streamline the development process.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=33)** Without a fully featured IDE, we would need to build our Kotlin projects using a combination of different text editors, terminals, and command line tools.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=42)** And while this is perfectly possible, it's not usually the most efficient way to write modern software projects.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=50)** IntelliJ has a robust suite of tools for Kotlin development including a fully functional text editor, syntax highlighting, and powerful refactoring capabilities.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=63)** Why choose to use IntelliJ over your favorite text editor or another IDE?
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=68)** Well that's because IntelliJ is built by JetBrains, the creators of the Kotlin programming language.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=75)** They are the industry leaders in IDE development with a long track record of terrific tooling for C#, Java and other popular languages.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=88)** Because of this, IntelliJ provides a powerful and comprehensive set of functionality for building nearly any type of Kotlin project you could want, including mobile, web, or backend projects.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=101)** IntelliJ comes in two flavors, community edition and ultimate, and both of these variants are available across Mac, Windows and Linux.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=111)** The community edition provides full support for Kotlin development and is free to use and download.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=117)** The ultimate edition is a paid product which includes additional tools and functionality not specifically related to Kotlin.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=126)** For this course, the community edition is more than enough, but feel free to use ultimate if you have access.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=133)** Whether using community or ultimate edition, you'll want to make sure you're using version 2021.3.1 or newer so the UI and menus match as closely as possible.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/introducing-intellij-idea-14799802?u=76281980&t=145)** This should ensure that you have no trouble following along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (9), [[Programming]] (2), [[Software Projects]] (1), functional (1), [[Java]] (1)
> **Tools:** intellij (8), command line (2)
> **Env Vars:** ide (4)
> **Versions:** version
2021 (1), 3.1 (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Installing IntelliJ IDEA for macOS
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=0)** - [Instructor] Before we can start writing Kotlin code with IntelliJ, we'll first need to download and install one of the available versions of the IDE.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=8)** Let's walk through the IntelliJ installation process for macOS.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=12)** If developing on a Windows machine, no worries, we will cover the Windows installation process soon.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=19)** Whether you want to install the Community or Ultimate Edition, there are two primary ways to download IntelliJ.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=26)** Directly from the browser or by using JetBrains Toolbox.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=31)** If you aren't familiar, JetBrains Toolbox is an application for managing the installation and updates for any JetBrains IDE.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=41)** It's a very helpful tool if you're using IntelliJ, Android Studio, or any other JetBrains IDE.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=48)** We won't walk through the installation of JetBrains Toolbox itself in this course.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=52)** However, if already using jet brain's toolbox, you can install IntelliJ using JetBrains Toolbox by opening JetBrains Toolbox in your machine, scrolling through the list of the available IDEs, until you find one of the available versions of IntelliJ.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=70)** We see here that both the Ultimate and the Community Edition are available to us.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=75)** If we click either of these to install, JetBrains Toolbox will take care of managing the installer.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=82)** And from there, we can then open the IDE and continue on with the installation process.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=88)** It'll even help us manage that installation in the future if we want to upgrade, downgrade, or even uninstall the application.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=97)** If you prefer to download IntelliJ from the browser, the best place to start is by searching download IntelliJ from your favorite web browser.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=106)** We want to access the IntelliJ download site from [jetbrains.com/idea/download](https://jetbrains.com/idea/download).
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=113)** This page should detect your OS version automatically.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=117)** If we see here, the middle tab is selected for me, indicating that I am on macOS.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=122)** Now, if you're working on a Mac, you'll want to ensure that you download an installer for the correct CPU architecture, whether that be Intel or Apple Silicon.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=133)** Once you've selected the correct download option, click Download to start the download of the installer.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=141)** Once the download is complete, we'll need to locate the download on our development machine.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=146)** For me, that download is located in my downloads directory where I see the installer is waiting for me.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=154)** Once I double click on that installer, this will kick off the download process.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=160)** I'll be prompted to drag the IntelliJ icon into the applications directory, where it'll start copying over the files needed for IntelliJ.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=171)** Once that's complete, we can open up the applications directory, double click the IntelliJ icon and this will continue on to prompt us to open up the IntelliJ application.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=188)** And from here, we should be able to follow the wizard until we are greeted with the IntelliJ welcome screen.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=197)** For this course, you should not need any additional plugins, but feel free to customize the look and feel of IntelliJ to match your personal preferences.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-macos-14800826?u=76281980&t=206)** Once your IntelliJ installation is complete, you'll be ready to create your first Kotlin project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), [[Kotlin]] (2), [[Windows]] (2), [[Android]] (1), web (1)
> **Tools:** intellij (16)
> **Env Vars:** ide (4), cpu (1)
> **Prerequisites:** install (4)
> **Code Identifiers:** macos (2)
> **UI Navigation:** open the (1), click on (1)
> **CLI Commands:** find (1)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)

#### Installing IntelliJ IDEA for Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=0)** - Before we can start writing Kotlin code with IntelliJ, we'll first need to download and install one of the available versions of the IDE.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=8)** Now, let's go through the IntelliJ installation process for Windows.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=13)** Whether you want to install the Community or Ultimate Edition, there are two primary ways to download IntelliJ.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=20)** Directly from the browser or by using JetBrains Toolbox.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=24)** If you aren't familiar, JetBrains Toolbox is an application for managing the installation and updates for any JetBrains-based IDE.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=34)** It's a very helpful tool if you're using IntelliJ, Android Studio or any other JetBrains IDE.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=42)** We won't walk through the installation of JetBrains Toolbox itself in this course.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=46)** However, if already using JetBrains Toolbox, you can use it to install IntelliJ by opening JetBrains Toolbox, scrolling through the available list of IDEs and locating IntelliJ IDEA Community Edition or Ultimate Edition.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=65)** Once located, you can click the install button and JetBrains Toolbox should manage the install of the latest version for you.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=73)** It'll even help manage that version in the future if you want to upgrade, downgrade, or even uninstall IntelliJ altogether.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=82)** If you prefer to download IntelliJ from the browser, the best place to start is by searching download IntelliJ from your favorite web browser.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=91)** We want to access the IntelliJ download site from [jetbrains.com/idea/download](https://jetbrains.com/idea/download).
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=98)** This page should detect your OS version automatically.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=102)** In this case, the tab furthest to the left is selected, indicating that Windows is my operating system.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=110)** Once you've chosen either Ultimate or Community, select the correct download option and click the download button.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=118)** This should start the download of the installer.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=122)** Once the download is complete, we'll need to locate the download on our development machine.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=128)** For me, I will navigate to my Downloads directory.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=132)** And I will double click on the application installer.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=139)** If prompted, go ahead and click Allow to allow the program to install.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=145)** And from here, we can follow the setup instructions for a basic IntelliJ installation on our machine.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=156)** Once we've clicked through the basic options, the installer should perform its work to install IntelliJ to our Windows installation.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=165)** Now, this can take several minutes, so grab a cup of coffee or do anything else you need to while we're waiting for your installation.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=176)** Once the installation is complete, we should have the option to finish the install.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=183)** And if we click the Run IntelliJ button and click Finish, IntelliJ should load up on our machine for the first time.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=192)** Now, once IntelliJ is open, we should not need to install any additional plugins.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=198)** But feel free to customize the look and feel of IntelliJ to match your personal preferences.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/installing-intellij-idea-for-windows-14799792?u=76281980&t=205)** Now, once your installation is complete, you'll be ready to create your first Kotlin project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Kotlin]] (2), application (2), [[Android]] (1), web (1)
> **Tools:** intellij (16)
> **Prerequisites:** install (9), setup (1)
> **Env Vars:** ide (3), idea (1)
> **UI Navigation:** select the (1), navigate to (1), click on (1)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)
> **Definitions:** is an  (1)
> **Speakers:** - before (1)

#### Run your first Kotlin code
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=0)** - [Instructor] To create our first Kotlin project, open the IntelliJ application.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=5)** Once open, select New Project.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=9)** Once the New Project window is open, we want to make sure that the Kotlin option is selected on the left side of the screen.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=15)** We can create a variety of different Kotlin project types from this view.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=20)** But for now, we will stick with the basic JVM console application.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=25)** If you aren't familiar, JVM stands for Java Virtual Machine and is the most common runtime environment for Kotlin applications.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=35)** Name your project HelloKotlin.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=40)** And then in the Location option, select a project location that you're comfortable with.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=46)** For me, I will navigate to this course's working directory and just update that location.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=53)** For Build System, go ahead and leave the default option selected.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=58)** For Project JDK, you'll need to ensure that a valid JDK is selected.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=64)** JDK stands for Java Development Kit.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=67)** A JDK provides the virtual machine, the compiler, and other tools needed to build and run JVM applications.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=76)** JDK versions are correlated with versions of Java, and by extension, Java bytecode.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=82)** Any JDK version 8.0 or newer should work fine for this course.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=88)** So if we extend this JDK dropdown, we'll see that it has automatically detected a JDK version 8.0 on my machine as well as version 15.0.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=99)** So because both of these are a version 8.0 or above, either one will work fine, I will go ahead and leave version 15.0 selected.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=107)** If you don't have a version of the JDK installed on your machine, you could click the Download JDK option and download any available version of Oracle OpenJDK.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=119)** Once you're satisfied with your project settings, go ahead and click next.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=124)** On this screen, you can further customize the initial configuration of your project.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=129)** For now, we will leave these settings as is and go ahead and click Finish.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=134)** After clicking Finish, IntelliJ will create your new Kotlin project and prepare the project by syncing any initial dependencies.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=142)** This can sometimes take a minute or two, so you may have to be patient while IntelliJ does its thing.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=149)** Now that the project has finished it's initial sync, let's take a few moments to familiarize ourselves with the interface of IntelliJ.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=158)** On the left side of the screen is the Project Tool window.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=162)** This represents our project's file structure, and is where we can locate any build or source files for the project.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=171)** Notice, if we navigate into our src, main, kotlin directory, we have a single source file named Main.kt.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=183)** If we come over into the main panel of our screen, we'll see that main.kt is already open.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=190)** The .kt file extension is the primary extension for Kotlin files.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=198)** Within that Main.kt file, we find that we have a main function.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=204)** This is the primary entry point to our Kotlin program.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=209)** Finally, the toolbar at the top of the screen provides additional tools and actions, such as the ability to run or debug our project.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=222)** Let's complete our initial project setup by running our code.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=226)** We can run our Kotlin program in one of two ways.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=229)** The easiest is to click the green Play button in the gutter next to the file line numbers.
>
> **[3:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=237)** If we click that button and select Run MainKt, IntelliJ will compile our application and any program output will be written to the console.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=249)** In this case, we see Hello World!
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=251)** And we see any program arguments.
>
> **[4:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=253)** In this case, none were passed to the run.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=259)** Additionally, the other way that we can run our application is by selecting the green Play button from our toolbar.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=266)** Again, in this case, if we click the Run button, we'll see the same output printed out to the console.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=274)** The ability to run a main function in this way is actually quite convenient.
>
> **[4:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=280)** Any main function in any Kotlin file can be run this way, making it a very convenient, quick way of running some Kotlin code from within IntelliJ.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/run-your-first-kotlin-code-14799786?u=76281980&t=291)** Now that we've run our first code, we are ready to dive deeper into the essentials of the Kotlin programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (12), application (4), [[Java]] (4), next (2), [[Programming]] (1)
> **Env Vars:** jdk (10), jvm (3)
> **Tools:** intellij (6)
> **Versions:** version 8 (3), version 15 (2)
> **File Paths:** main.kt (3)
> **UI Navigation:** open the (1), navigate to (1), dropdown (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** stands for (2)


### 2. Common Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### Mutable and immutable data types
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=0)** - [Instructor] The ability to store, update and retrieve values using variables is a core feature of most programming languages.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=8)** So we're going to start our exploration of Kotlin by learning how to define both mutable and readonly variables.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=16)** To create our first variable, we're going to come into our empty main function here, and we going to start by writing val.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=25)** Val is a keyword denoting a readonly variable.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=30)** Next, we need to type out the variable name.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=32)** In this case, we will name our variable, our first variable.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=39)** Now we can define a variable's type by adding a colon and then the type itself.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=47)** In this case, we are going to define this as a type Boolean.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=51)** This indicates that we want to store some Boolean value, essentially true or false.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=57)** And lastly to finish off our variable, we need to provide a default value in this case.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=64)** We can do this by adding equals true.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=69)** Now we have a readonly variable named our first variable that holds the value true.
>
> **[1:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=78)** And we can easily validate this by using a print function to print out the value of the variable.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=84)** So we'll come a couple lines down below our variable and we will invoke the println function by typing println and we will pass our first variable to that function.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=100)** Once we've added the call to println, we can run our main function by once again navigating to the green play button in the gutter and clicking Run MainKt.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=115)** Once that function has been run, we should see true printed out in the output window on the bottom of our screen.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=124)** Now let's say we need to change the value of our variable after we print it.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=129)** How would we do that?
>
> **[2:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=131)** Well, again we'll hit Enter a couple times and come down below our print statement.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=136)** And now we're going to try and assign the value of false to our variable.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=141)** So we'll type our first variable equals false.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=149)** You should see the IDE showing a red underline underneath the variable name.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=154)** This indicates a compiler error.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=157)** If we place our cursor over that line, we should see the error message, val cannot be reassigned.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=166)** So why are we seeing this error?
>
> **[2:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=168)** Well, a central tenant of Kotlin is an explicit type system and Kotlin differentiates between mutable and readonly variables.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=178)** By defining our variable using val, we made it readonly.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=182)** By default, val variables must be assigned once and their values will not change.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=189)** This makes it easier to reason about the behavior and the value of the variable, but also means we can't store mutable values using a val variable.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=199)** To define a mutable variable, instead of using val, we can use var.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=205)** So if we come back up to the definition of our first variable, we can change the val to a var.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=216)** Once we've updated the val to var, the compiler error went away.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=221)** Now, we can add another call to println, and if we run our program again, we can verify that the variable is in fact changing.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=235)** We first see true printed out, and then we see false printed out.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=240)** In addition to strong typing, Kotlin supports type inference.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=245)** What does that mean for us developers?
>
> **[4:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=247)** It means we don't always have to explicitly define the type of a variable if the compiler can understand the variable's type from the assigned value.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=256)** Again, if we go back to the declaration of our first variable, we can remove the Boolean type declaration from our variables in initialization.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=272)** Now, even though we don't explicitly declare a Boolean type, the Kotlin compiler still understands that our first variable is of type Boolean because we assigned it a Boolean value of true.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=286)** To compare Boolean values, we can use the equal equals syntax.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=291)** Let's add two more print statements to demonstrate equality checks.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=296)** First, we will compare our first variable
>
> **[5:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=305)** to the value of true, and next, we will compare our first variable to the value of false.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=314)** Before running the code, take a second to think about the output.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=318)** What do you expect to be printed to the console based on these equality checks?
>
> **[5:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=324)** If we now run our code once again, we see true, false, false and true printed out to the console.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=335)** The first two lines, true and false come from our earlier print statements.
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=340)** And then our two equality checks printed out false and true respectively.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=345)** This makes sense since we set our first variable to false after the first print statement.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=353)** As we continue learning about Kotlin, we will be building on these concepts of immutability, type inference and comparison.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=361)** As a rule of thumb though, Kotlin favors immutability by default.
>
> **[6:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mutable-and-immutable-data-types-14800822?u=76281980&t=365)** So as we write Kotlin code, we should think about whether or not we really need a value to change before opting into mutable variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (8), next (2), feature (1), [[Programming]] (1), hit (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** ide (1)
> **Cross-References:** go back to (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Numeric data types
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=0)** - [Instructor] Numeric data types are essential for writing almost any application.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=5)** Let's jump in and explore examples of both integer and floating point data types in Kotlin.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=13)** Integer data types represent whole numbers.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=16)** The easiest example is Int.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=20)** To create an Int variable, I'll once again use the val keyword, give my variable a name, in this case, aInt, and explicitly define the Int type.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=34)** And then, I will assign it a value of zero to start.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=38)** If we want it to be a bit more concise, we could use type inference to define another variable without needing to explicitly define the type of Int.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=51)** So in this case, I could type, val anotherInt = 0.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=57)** And in this case, another Int will simply be inferred to be of type Int.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=62)** In Kotlin, an Int is 32 bits.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=66)** If you need a smaller data type, we have several other options we can leverage.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=73)** We could use aByte, which is eight bits,
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=82)** or we could use aShort, which is 16 bits.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=91)** If you need a larger data type, you could use aLong, which is 64 bits.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=99)** By default, integer values that fit within 32 bits will have an inferred type of Int.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=106)** So, if I type, val inferredInt = 10, this variable will automatically have the type of Int, because it fits within 32 bits.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=121)** If a value is larger than 32 bits, it will be inferred as long.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=125)** So in this example, we'll type, inferredLong = some very large number here.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=136)** So in this case, this value will be inferred to be of type long because it's not going to fit into the standard 32-bit integer value.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=145)** Now, if we wanted to store a smaller value as a long, rather than an Int, without explicitly adding the long type to the variable declaration, we can append an L to the end of our integer literal to signify that it should be treated as long.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=164)** So in this case, we'll define a variable called anotherLong and assign it to the value of 10L.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=172)** This signifies that this value should be treated as a long rather than an Int.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=179)** So far, these examples have all used signed integers.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=183)** However, if you need an unsigned value, there're unsigned equivalents of each integer type.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=190)** For example, we can explicitly declare an unsignedInt.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=195)** Notice, in this case, that the Int type is pre-appended with a U to represent unsigned, and similarly, the integer literal that we assigned to it has a U appended at the end.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=212)** Additionally, we could use type inference and specify our integer literal as in unsignedLong.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=222)** In this case, we use both a U and an L in our integer literal to signify that we want it to be unsigned and long.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=235)** Beyond integer types, we also have two floating point types.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=240)** A 64 bit double, and a 32-bit float.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=254)** By default, the inferred type of a floating point number will be double.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=258)** So, if I create another variable here called inferredDouble, and I set it to the value of 5.5, this value will automatically be inferred to be a double.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=274)** If I want my inferred value to be a float, we can specify that explicitly by adding an f at the end of the floating point value.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=283)** So in this case, we'll type, val inferredFloat = 5.5f, and in this case, our type will be float.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=298)** We can easily compare values between numeric types as well.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=303)** We can use equal equals to check if two values are the same.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=308)** So, if we do a simple println here, and check if 5 == 4, this will let us know if the value of five equals the value of four.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=321)** We could also use the greater than symbol to check if a value is larger than another.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=329)** So in this case, if 10 is greater the than one, notice that 10 here is explicitly defined to be a float.
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=340)** And similarly, we could use less than or equal to to check if a value is smaller than or equal to another.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=347)** In this case, 10.1 less than or equal to 5.2.
>
> **[5:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=356)** Now, if go ahead and run these comparisons, we should see the outputs of each evaluation, and notice that we see false, true, and false.
>
> **[6:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=372)** This should make sense as five is not equal to four, 10 is greater than one, and 10.1 is not less than or equal to 5.2.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=383)** In all of these examples, we are able to compare values without explicitly worrying about their type.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=389)** The numeric types will handle any necessary conversion to ensure an accurate comparison is made.
>
> **[6:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=399)** It's also easy to convert between numeric types.
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=403)** Most types have available conversion methods to convert from one type to another.
>
> **[6:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=409)** For example, to convert a double to an Int, we could do so by using the toInt function.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=417)** So, I will type, println, so we can print out the value of this conversion, and we'll say, 10.5.toInt.
>
> **[7:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=429)** If we run this code, then, we'll see that 10 has been printed out to the console.
>
> **[7:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=439)** The conversion from double to Int effectively drops any decimal place and gives us just the whole number value.
>
> **[7:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=447)** We could also easily convert from, say, 10.9, which will be inferred to be a double, to a float representation of that value, or, as another example, we might convert from an integer five to an unsigned long.
>
> **[7:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=469)** While conversion is simple, we must be careful when can converting a large type to a smaller type, as we may lose precision in the process.
>
> **[7:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=478)** Let's see what happens when we try to convert 100 million to a byte.
>
> **[8:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=486)** To start, I'm just going to define a literal for 100 million using a special syntax that Kotlin provides for defining numeric literals.
>
> **[8:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=495)** So, I'ma type, 100, and then, rather than continuing to add more zeros to my value of 100 million here, I'm going to use an underscore to effectively represent where we would put the decimal separator if we were writing this out.
>
> **[8:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=510)** So, now I'll add three more zeros, another underscore, three more zeros.
>
> **[8:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=515)** This is all representation of 100 million, and makes it a little bit easier to read.
>
> **[8:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=520)** And now, if I try to convert this to a byte using the toByte method, the compiler has no problems with this.
>
> **[8:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=529)** Now, I'm just going to print this out, and if we look at the output, we will see that zero is the resulting value from this conversion from 100 million to a byte.
>
> **[9:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=546)** This is because the resulting byte is taken from the least significant bits of the larger long.
>
> **[9:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=554)** While converting from a smaller type to a larger one is generally safe, we must be careful we don't lose accuracy when doing the reverse.
>
> **[9:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=563)** Throughout this course, we'll keep things simple and use mostly Int and double.
>
> **[9:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/numeric-data-types-14803696?u=76281980&t=567)** But as you go on to develop more complex applications, think about the data you're representing and whether you may be able to represent that data using a more efficient data type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Kotlin]] (3), application (1)
> **Code Identifiers:** toint (2), aint (1), anotherint (1), abyte (1), ashort (1)
> **Versions:** 10.1 (2), 5.2 (2), 5.5 (1), 10.5 (1), 10.9 (1)
> **Analogies:** for example (2)
> **Warnings:** be careful (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Char and string data types
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=0)** - [Instructor] In addition to numeric data types, most programming languages include support for text based types as well, and Kotlin is no exception.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=9)** So let's jump in and explore how to work with text in Kotlin.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=13)** To represent a single character, we can use the char data type.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=18)** Char variables can be used to store a single alphabet character.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=26)** Or a single numeric character.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=32)** We can also use char to store symbols such as an escaped new line.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=42)** In each of these examples, the character was defined in a single quote literal.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=47)** This is an important distinction to remember as we eventually work our way into other text-based data types.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=54)** Now, what if you wanted to combine two char variables together?
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=58)** Is that possible?
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=59)** How would we do it?
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=61)** Let's take a quick look at a couple of options.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=64)** The first thing we might try is to concatenate two chars together.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=69)** So we might try that by defining a val and then saying something like concatOption1 equals a literal plus b literal.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=83)** This doesn't work however, as the plus operator isn't designed to work with chars.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=88)** And this makes sense based on the next example here.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=93)** Rather than concatenating two chars, let's simply define a char literal with two characters.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=102)** So this time, we'll just define that literal to be a and b within a single, single coded literal.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=109)** Again, this fails.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=111)** But this time with a more helpful error message.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=115)** If we hover over that error message, we'll see that it says too many characters in a character literal ab.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=123)** The compiler is clearly telling us that a char data type may only store a single character.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=128)** So to store multiple characters or entire sentences and paragraphs, we need another data type.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=134)** And that's where strings come into play.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=139)** String is the go-to data type in Kotlin for storing multiple characters together at once.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=145)** To declare a string variable, we can use double quotes to define a string literal and assign it to our variable.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=157)** In this case, we have a string representing the value, Hello, Kotlin!
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=162)** We can define two different types of string literals.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=165)** The first are escape strings and are what we just saw.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=169)** Within escape strings, we can use escaped characters such as new line to provide formatting to the screen.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=176)** For example, if we define a string called escaped, we will be able to insert a new line character between the string, Hello and World.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=194)** If we then print out this escaped string, we'll be able to see that we have a new line in between these two words.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=204)** However, before we do that, we need to comment out our compiler errors here, otherwise our program won't compile and run.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=213)** So let's go ahead and run our code.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=216)** And we will see that Hello \n World are broken up into two separate lines.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=221)** This is because we were able to insert that new line character within our string literal.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=231)** The second type of string literal is a raw string.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=235)** These are strings defined using triple quotes.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=239)** These strings allow for extra flexibility in how they are formatted.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=244)** So if we write out a raw string here, we can add triple quotes.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=249)** And then within that, we can use multiline text here with different formatting.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=264)** By default here, the IDE is going to try and add this call to trim indent.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=269)** Go ahead and remove that for now so that we can see the raw output.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=273)** And once we have our raw string, we'll go ahead and print that out.
>
> **[4:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=285)** And we'll see in the output here that our multiline text is being printed out to the console just like it was defined in our IDE.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=296)** So all of that white space, all of that formatting, is preserved within this raw string.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=303)** If we remove the indentation, let's say from our first line, we'll see that that indentation is also removed from the output.
>
> **[5:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=317)** We can improve this a bit by adding some type of dilimiter character to the beginning of each line in our raw string and then calling trim margin.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=326)** So if I come back here to Some, I will add just the pipe character here before a couple of our lines.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=336)** And then after the trailing triple quotes, I'll add back that call to trimMargin.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=345)** Once again, I'm going to run this code.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=349)** And this time, we will see that the places where we added the pipe character are now no longer being printed out to the console with that prepended space.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=362)** So again, this gives us extra means of formatting these raw strings.
>
> **[6:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=368)** We could also customize this further by choosing a different margin character.
>
> **[6:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=373)** So rather than a pipe, we could do let's say, two angled brackets here.
>
> **[6:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=379)** And then when we call trimMargin, we can pass in a string literal representing what we want that margin character to be.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=387)** And now if we rerun the code once again, we'll see we still get that nice trimmed margin formatting, but this time with those custom margin characters.
>
> **[6:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=398)** Strings can be easily combined and formatted in Kotlin.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=402)** To concatenate two strings, we simply use the plus operator.
>
> **[6:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=408)** So in this case, I'll concatenate Hello plus Kotlin.
>
> **[6:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=415)** If we were to print out this resulting string, we'll see Hello World printed out to the console.
>
> **[7:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=422)** We can also concatenate non strings with strings.
>
> **[7:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=426)** So in this case, we could create a variable called concatNumber equals a string called The number plus the value of 10.
>
> **[7:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=439)** If we print this out to the console, we will see that our output has automatically taken the string representation of that number and concatenated with the first string literal, The number.
>
> **[7:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=455)** This is a good time to discuss imutability in Kotlin strings.
>
> **[7:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=459)** A string in Kotlin is imutable.
>
> **[7:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=461)** Once defined, it can't change.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=463)** So in these examples, we are actually creating two separate strings, then combining them to create a third.
>
> **[7:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=470)** This isn't the most efficient way to go about this operation.
>
> **[7:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=474)** The more Kotlin idiomatic approach to this type of string formatting is to use string templates.
>
> **[8:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=481)** Kotlin allows us to create string literals that directly substitute in other values.
>
> **[8:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=487)** So for example, let's say we have some numeric literal called aNumber holding the integer value of 10.
>
> **[8:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=497)** We could rewrite our numeric concatenation using a string template this time.
>
> **[8:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=505)** So we'll create a variable called concatTemplate equals, again, The number.
>
> **[8:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=513)** But this time, we'll create a placeholder in the string to represent the number.
>
> **[8:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=518)** We can do this placeholder by adding a dollar sign.
>
> **[8:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=521)** And then we will reference that aNumber variable.
>
> **[8:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=528)** If we print this out to the console...
>
> **[8:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=537)** We'll once again see our expected output.
>
> **[9:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=540)** However, this time, we didn't have to create multiple strings to generate this output.
>
> **[9:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=548)** This string templating works for more complex expressions as well.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=552)** If we wanted to, let's say, always add one to the number before printing it out, we could add curly braces after the dollar sign.
>
> **[9:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=563)** And within those curly braces in the string literal, we can then exercise arbitrary expressions, meaning we can effectively run code in here.
>
> **[9:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=572)** So rather than just always passing the aNumber variable, we could say one plus aNumber.
>
> **[9:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=581)** If we then rerun our example, this time we'll see the number 11 printed out to the console.
>
> **[9:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=588)** So this gives us a lot of power and flexibility to create formatted strings in a more efficient way.
>
> **[9:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=596)** Now, strings are a very common data type in Kotlin development, especially if working in user facing domains such as mobile development.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=604)** To make strings easier to work with, the Kotlin Standard Library provides many useful functions for us.
>
> **[10:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=612)** For example, if we define some variable called someString with the value, Hello there!, we could check whether that is empty or not by saying someString.isEmpty.
>
> **[10:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=631)** If we were to print out that result,
>
> **[10:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=640)** you will see false.
>
> **[10:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=642)** Which is likely no surprise as the someString variable is not empty.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=646)** It holds the value of Hello there!
>
> **[10:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=650)** If we wanted to check the reverse of this, we could use isNotEmpty.
>
> **[10:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=657)** And if we rerun our code, this time we will see our final output is true because it is not empty.
>
> **[11:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=666)** If we change the value of our someString variable to be just a couple of blank spaces and rerun our code, this time we see true printed out to the console.
>
> **[11:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=682)** Why do you think that is?
>
> **[11:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=684)** Well it's because the space is still a valid character even if we can't see it.
>
> **[11:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=690)** So in this case, multiple blank characters is still not empty.
>
> **[11:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=697)** Alternatively, to isNotEmpty, we could check isNotBlank.
>
> **[11:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=704)** This time we see falses printed out because the isNotBlank function checks for white space characters as well.
>
> **[11:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=711)** So even if there are a hundred white space characters, isNotBlank is still going to return false.
>
> **[12:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=722)** In addition to helper methods like isNotBlank or isEmpty, we can also use the contains function to check if a string contains another string.
>
> **[12:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=732)** So we'll create another variable here called anotherString equals Hello Kotlin World!
>
> **[12:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=743)** And if I wanted to check that that string contains Kotlin, I could do so by typing anotherString.contains and passing in the string literal of Kotlin.
>
> **[12:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=759)** There are many other really useful helper functions on this string type, and as we proceed through this course, we will use examples of more of them.
>
> **[12:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=768)** Char and string are our go-to types for storing any text-based values in Kotlin.
>
> **[12:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=773)** In particular, strings provide a great deal of flexibility and utility through different literal types, string templating, and the Kotlin Standard Library.
>
> **[13:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/char-and-string-data-types-14804064?u=76281980&t=783)** I encourage you to explore on your own and see what other useful string functions you can find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (17), data (7), [[Programming]] (1), next (1), power (1)
> **Code Identifiers:** anumber (4), somestring (4), isnotblank (4), trimmargin (2), isempty (2)
> **Analogies:** such as (3), for example (3), just like (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** ide (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Nullable types
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=0)** - [Instructor] What do we do when we have a variable whose value is not available at declaration time?
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=6)** How do you represent the absence of data in Kotlin?
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=10)** There are a couple of approaches to handling this scenario but the most basic is the use of null values.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=17)** So let's explore how Kotlin differentiates between null and non-null data types to avoid the dreaded null pointer exception.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=28)** Null is a special value representing the absence of any real meaningful value.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=35)** We can assign null as the value of a variable when we don't have a good initial value available to us at declaration time.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=43)** Let create a new mutable string variable by typing var_aNullableString: String = null.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=56)** We are attempting to use null as the initial value for this variable.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=61)** However, the compiler is telling us that this is an error.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=66)** Why do you think that is?
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=68)** Well, the answer is that Kotlin differentiates between nullable and non-null types and by default, types are non-nullable, meaning they cannot hold a null value by default.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=80)** This is done in an effort to avoid using null whenever possible, as null can be the source of many errors in our code.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=89)** If we really want to hold a null value, we can turn any non-null type into a nullable one by simply adding a question mark after the type name.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=102)** After this update, we're now free to assign both null and non-null values to our variable.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=115)** Kotlin defaults to non-null types because null has historically been the source of many bugs and headaches in the Java ecosystem.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=124)** Most notably, null values can lead to null pointer exceptions when a null value is accessed.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=131)** So if we're going to use nullable types, we need to be mindful about how we access those values so we don't crash our applications.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=139)** Let's try to print out the length of our variable here to demonstrate a null pointer exception.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=144)** We'll start by removing this line where we updated the variable value.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=150)** And then we'll add a call to println and we'll access the length property of our string by typing .length.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=160)** Now, if we hover over the dot here, we'll see the compilers giving us an error.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=165)** And in the verbose language, it says only safe or non-null asserted calls are allowed on a nullable receiver of type nullable string.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=176)** This error is basically a long way of saying that we're trying to access a possibly null value in an unsafe way.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=184)** To make this code compile and run safely, there's a few options.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=190)** The first option and the least safe is to add a double exclamation mark before the property access.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=201)** Adding double exclamation asserts that a value is not null before accessing it and throws an exception if the value is null.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=209)** This makes code easier to write, but leads to crashes.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=214)** If we run this code, we'll get a null pointer exception printed out to the output here.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=223)** This is because we tried to access the length property on our variable, which is still set to null.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=231)** If we update the value of our string and print out the value once again, this time we correctly see the output length of that string.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=246)** Another option for handling null is to use a null safe call.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=251)** Null safe calls will only access a property or call a method, if the value is non-null.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=256)** To demonstrate this, let's set our variable back to null.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=262)** And now, instead of using the double exclamation point, we will replace it with a question mark.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=272)** What do you think will happen now when we run this code?
>
> **[4:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=279)** If you guessed that it would print null, congratulations, you are correct.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=284)** The null safe call will prevent throwing a null pointer exception in this case and will actually return null instead.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=293)** So now our code doesn't crash but instead it actually prints the word null out to the console, which maybe isn't as helpful or as interesting as we would like it to be.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=304)** To improve this, we'll introduce one more operator for working with null and that's the Elvis operator.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=310)** The Elvis operator allows us to evaluate an expression and return some default value if that expression evaluates to null.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=319)** So if we place our cursor after the call to .length, we can add a question mark, colon.
>
> **[5:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=328)** This is the Elvis operator and now we can provide some default value.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=335)** In this case, a string saying the value was null.
>
> **[5:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=341)** What we've effectively done here is told the program to try and print out the length of our variable but if the variable is null, print out this default string instead.
>
> **[5:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=351)** So now if we run our code, we see the value was null printed out to the console.
>
> **[6:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=360)** If we change the value of our variable to Kotlin and run it one more time, we see six, the correct length of the Kotlin string.
>
> **[6:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=372)** Sometimes we have no choice but to use nullable types and in those situations, we want to be sure to handle them safely.
>
> **[6:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/nullable-types-14797834?u=76281980&t=379)** So as you continue on with Kotlin, think carefully when introducing null values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (7), data (2), [[Java]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Functions

[↑ Back to Table of Contents](#table-of-contents)

#### Basic functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=0)** - [Narrator] How do we write self-contained reusable pieces of code that we can then invoke and reuse throughout our code bases?
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=8)** Well, in Kotlin we start with functions.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=11)** In Kotlin functions are first class concepts.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=15)** We can write and use functions without any kind of enclosing class, struct, or other obstruction.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=22)** Because of this, functions in Kotlin are incredibly flexible and important.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=27)** So let's start by building up our understanding of function basics.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=33)** Here in IntelliJ, we have an example of our first real function.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=38)** This function is our main function.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=40)** We've been running this repeatedly.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=43)** And in this example, it's going to print out the string hello world to the console as we've seen before.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=50)** Now, let's walk through the key elements of this first function.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=57)** So first off we have the fun keyword.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=61)** This represents a function.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=63)** This is how we know that what we are defining is going to be a function.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=67)** Then we have the function name, in this case main.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=72)** We have empty parenthesis.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=75)** This is where we will eventually put arguments in our functions so we can pass values to them.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=81)** And then we have the function body which is everything inside of the curly braces.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=88)** Now let's write our own function to print out a greeting.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=93)** But before we do, has anyone spotted the second function in our example so far?
>
> **[1:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=100)** Println is also a function, and it demonstrates how we can call or invoke a function from within another function.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=111)** So now we should be ready to create our own greeting function.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=116)** So again, to create a function, we're going to start by adding the fun keyword.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=121)** Then we're going to add our function name, in this case, printgreeting.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=127)** It's going to take no arguments, so we'll add an open and closed parenthesis.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=132)** And then we will go ahead and add an empty function body using curly braces.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=138)** Now for the body, we will once again, leverage the println.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=144)** So I'm going to just copy the println line from our main function and move it inside of printgreeting.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=152)** And now from within main, we will go ahead and invoke printgreeting instead of using print line directly.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=161)** Now if we run this code, we should see the same hello world output that we had before.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=168)** However, this time it's getting there in the console from our printgreeting function that we just wrote.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=176)** Now, what if we wanted to return a meaningful value from our function?
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=183)** The most basic way is to define a return type for our function, and then return a value from our function body.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=192)** So let's refactor printgreeting to getgreeting and return a string rather than printing it.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=201)** So, first off we will change the name from printgreeting to getgreeting.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=208)** And now we want to explicitly define the return type of this function.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=213)** To do that, we'll move our cursor after the parenthesis.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=218)** And similar to defining the type for a variable, we will add a colon, and then we are going to add the string type.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=227)** So this signifies that getgreeting is now going to return a string.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=232)** Now within our function body, rather than printing out hello world, we're going to use the return keyword to signify that we're going to return a value from this function.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=244)** And then we will explicitly return the string hello Kotlin.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=250)** Now from our main function, rather than printing out to the console directly when calling printgreeting, we will call println and print out the result of calling our getgreeting function.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=269)** And once again, if we run the code, we'll see hello Kotlin printed out to the console.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=278)** Now, you might be asking the question, why didn't we have to define a return type for our printgreeting function or for our main function?
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=288)** Well, the answer is because both of those functions are inferred to return type unit.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=295)** We could rewrite main here to represent this by adding a colon and then the unit type after that colon.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=303)** Now unit represents a non-meaningful return type.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=307)** So it can be explicitly defined as the return type like we just saw on our main function.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=313)** We could also explicitly add a return unit to the end of our main function, but both can be omitted to allow for a more concise code.
>
> **[5:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=324)** So you typically wouldn't define a function that returns unit or return unit explicitly.
>
> **[5:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=331)** Now, another question you might have is do we always have to explicitly define the return type of a function?
>
> **[5:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=339)** And the answer to this is actually no.
>
> **[5:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=343)** No type is needed if the return type can be inferred.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=349)** To demonstrate this we're going to refactor getgreeting once again.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=355)** So rather than explicitly defining the return type and adding the function body, we can actually just add an equal sign and then provide the value we want to return from our function.
>
> **[6:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=371)** So in this case, we've defined it as getgreeting equals hello Kotlin.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=375)** This is known as a single expression function.
>
> **[6:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=379)** And the return type of this will be inferred to be of type string because the right-hand side of the expression here will evaluate to a string.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=389)** This is very similar to type inference for variables.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=393)** This works for unit functions as well.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=396)** If we were to once again type a printgreeting function here, we could then say println, hello Kotlin.
>
> **[6:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=409)** And this function would be inferred to return unit.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=417)** To round out our basic function types, let's take a look at local functions.
>
> **[7:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=423)** A local function is a function defined inside of another function.
>
> **[7:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=428)** So let's move our getgreeting function inside of our main function.
>
> **[7:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=435)** So I'll do that simply by copying and then pasting that function within main.
>
> **[7:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=443)** So if we run this code once again, we'll see that it prints hello Kotlin just as it did before.
>
> **[7:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=451)** However, this time we can now longer access getgreeting outside of the main function.
>
> **[7:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=458)** So if we tried to update printgreeting to print out the result of getgreeting, we'll see that we get a compiler area.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=467)** It's not accessible in that scope.
>
> **[7:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=470)** A local function may only be called from within its enclosing function.
>
> **[7:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=474)** So in our case, like we just saw, that means only main may now call getgreeting.
>
> **[8:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=480)** Why would you use this?
>
> **[8:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=481)** Well, you might use it to organize reused portions of code within a function without exposing that code to other functions within the file or the application.
>
> **[8:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=492)** Local functions can scope one function to only be used by another.
>
> **[8:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=496)** Does that mean all other functions are open for public use?
>
> **[8:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=502)** Well, the answer is kind of.
>
> **[8:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=504)** By default, all functions are public.
>
> **[8:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=507)** That means they are available to use within any file in the project or any project that depends on our project.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=516)** If we add the public keyword to the printgreeting function, it won't impact its visibility.
>
> **[8:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=525)** And in fact, if we hover over the public keyword, we'll see that the compiler gives us this warning saying redundant visibility modifier.
>
> **[8:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=534)** This is because things are public by default.
>
> **[8:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=537)** However, if we change it to private, that suggestion by the IDE goes away, and now only the current file can access this printgreeting function.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=549)** There are additional visibility modifiers as well.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=552)** In particular, there is an internal modifier that makes the function visible to only the current build module.
>
> **[9:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=559)** But we won't need to rely on that during this course.
>
> **[9:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=562)** As we discussed, functions are a very important part of the Kotlin language.
>
> **[9:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=567)** Take some time to make sure you're comfortable writing basic functions.
>
> **[9:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=570)** Try writing your own function to return your name, your favorite number, or some other simple value.
>
> **[9:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/basic-functions-14802632?u=76281980&t=576)** Once you've written a few functions, you'll be ready to move on to even more interesting functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (9), application (1)
> **Definitions:** defined as (1), known as (1), is a  (1), is an  (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Cross-References:** we discussed (1)
> **Tools:** intellij (1)
> **Warnings:** warning (1)

#### Function parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=0)** - [Narrator] Functions are more interesting and certainly more useful when we can pass values to them that can then be used within the function's implementation.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=9)** With that in mind let's learn how we can pass argument values to our functions.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=15)** To pass an argument to a function.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=17)** We must first define a function parameter.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=20)** We can do that by specifying a parameter name and a type within the functions parentheses.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=27)** So let's refactor our getGreeting function to take in the thingToGreet rather than just always saying Hello Kotlin.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=37)** So within the parentheses of our getGreeting function we will first define the name of the parameter.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=46)** In this case, we will call it thingToGreet.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=51)** And then we will use colon followed by string to indicate that the parameter should be of type string.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=59)** We will then update our return value to use the past argument value when returning our string.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=68)** So we will replace Kotlin with dollar sign thingToGreet.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=75)** And if we remember this syntax by using the dollar sign and then the name of our parameter here we will substitute in whatever argument value is passed to the function in our returned string.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=88)** And now finally, we must pass a value to getGreeting now when we invoke the function.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=96)** So if we come down here into our main.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=98)** If I pass in the string Kotlin and run the code we will see the same hello Kotlin Output that we've seen before.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=109)** Now, we can also add more than one argument to a function as well.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=114)** So let's further refactor getGreeting to take in the greeting as well as the thingToGreet.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=121)** So again, here I'll come into the parentheses.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=124)** I'm going to hit space once just to give myself a little bit of room.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=128)** And I'm going to name this new parameter greeting and it will also be of type string.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=136)** And now I separate my parameters by using a comma.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=140)** And then once again here now I will replace the hard coded Hello string and use a substitution here with the greeting parameter value.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=152)** And now I will also update the invocation of getGreeting.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=157)** And this time I will pass the string hello.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=163)** And go ahead and run the code one more time.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=166)** And we'll see again that we have preserved our same Hello Kotlin greeting, but using our new refactored function.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=175)** Now just before moving on, let's look at what we've done.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=178)** Notice that the syntax is generally the same here whether we're using one parameter or multiple.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=185)** The only real difference is we separate the parameters with a comma, and then we have to pass both values when invoking that function.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=195)** Sometimes a parameter may have a sensible default value.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=200)** For example maybe our default greeting should always be Hello.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=206)** For situations like this Kotlin allows us to provide a default argument value for a parameter.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=213)** Parameters with default argument values can be omitted when invoking the function.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=218)** Let's update getGreeting to use world as the default thing to greet.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=225)** So to add a default parameter we're going to come to the parameter definition in our list.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=230)** And after the type I'm going to add an equals and then the string literal World.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=240)** Once we do this, we can now remove the passing of Kotlin to our getGreeting function below.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=250)** And if we run the code, we'll now see that it prints out Hello World, rather than Hello Kotlin.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=258)** If we give a default value to both parameters then we can invoke getGreeting without passing anything.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=266)** So we will update getGreeting to have a default for the greeting as well.
>
> **[4:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=271)** And I'm just going to refactor this a little bit to make it easier to follow here.
>
> **[4:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=276)** I'm just going to split the arguments onto their own lines.
>
> **[4:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=279)** And now after the greeting parameter type I will add equals Hello as the default greeting.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=289)** Now I can remove any argument value being passed to getGreeting, and run this again.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=297)** And this time we will see Hello World printed out to the console.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=303)** If I instead passed in Hey, and ran this again.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=310)** Now I see Hey World.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=314)** With our current getGreeting function.
>
> **[5:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=317)** What would happen if we only wanted to change the value of thingToGreet?
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=321)** We could pass a single string to our function like we just did, but how would the compiler know that we want that value to be associated with thingToGreet rather than greeting?
>
> **[5:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=332)** The short answer is that the compiler doesn't know that by default, if we were to pass let's say World to our function here, the output is going to be World World which isn't what we want.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=350)** To solve this problem Kotlin supports a feature called named arguments.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=355)** Named arguments let us pass values for specific arguments by referencing the parameter names directly.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=363)** If we want to use the default value for our greeting but a custom value for the thingToGreet parameter, we can update our code to reference thingToGreet directly.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=376)** So in to do that, I'll come into the invocation of getGreeting and I will type thingToGreet equals.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=387)** Now if I run this rather than printing World World it prints Hello World.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=393)** It now recognizes that the World string that we're passing to it should be assigned to the thingToGreet parameter which means that the default greeting value will be used for the greeting parameter.
>
> **[6:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=408)** Using named arguments were also then free to provide argument values in any order we want, as long as they're named.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=416)** So even though the order of the parameters is greeting thingToGreet, we could use named arguments to change the order.
>
> **[7:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=425)** So I could now pass greeting equals hey there.
>
> **[7:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=435)** And if we run this again, we'll see Hey There World printed out to the console.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=441)** This combination of default parameter values and named arguments is really powerful.
>
> **[7:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=447)** It can enable us to write a single function that can be invoked in many different ways.
>
> **[7:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=452)** Reducing the need for overloaded functions.
>
> **[7:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=455)** Like so many things in Kotlin function parameters are flexible and feature rich.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/function-parameters-14802638?u=76281980&t=460)** By leveraging this functionality we can write more expressive and powerful functions with fewer lines of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (10), feature (2), hit (1)
> **Code Identifiers:** getgreeting (12), thingtogreet (11)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Functional types
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=0)** - [Instructor] Functions in Kotlin don't require any kind of enclosing class.
>
> **[0:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=4)** They stand on their own as top-level constructs of the language.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=8)** This has interesting implications for how we write and organize our Kotlin code.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=12)** One way in which this is made apparent is by the fact that functions can be used as data types in the same way we might think to use string, int, or any other type.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=22)** To illustrate this point we'll explore how to define variables with functional types, and how to invoke those function variables.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=30)** We can define a variable with a functional type.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=33)** Rather than using an explicitly-named type, such as string, we must describe the function signature for the function type we want to work with.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=42)** Specifically, we must specify what arguments are needed by the function and what the return type should be.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=49)** So, here in our Main KT file I'm going to hit Enter a couple times to give myself some space.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=55)** I'm going to define a new top-level variable here.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=60)** So, we're going to use var so that we can reassign this value, and we're going to name the variable greetingFunction.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=68)** And so, now we need to give this variable a type.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=71)** So, again, we'll use a colon like we have with other variable declarations, and now we want to define a functional type.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=77)** So, like we said, the first thing we need to specify for this function signature are the parameters.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=83)** And in this case, we can specify that this function should take no parameters by using open and closed parentheses.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=90)** And then next, we need to add a dash and the arrow, signifying this arrow symbol here.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=99)** And then we can specify the desired return type, in this case, Unit.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=105)** So, now greetingFunction is defined to represent the function that takes no parameters and returns Unit.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=112)** Now, for the moment we're not going to initialize this function.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=116)** Instead, we're going to come down into our main and demonstrate how we would actually call this function.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=123)** So, we can invoke our function in a couple of different ways.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=128)** First, we could invoke it just like a regular function by referencing the name of the variable and open and closed parentheses.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=138)** Or alternatively, we could use a special invoke method that gets added to any functional type.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=145)** These two are equivalent, and most of the time you'll likely use the first syntax where you simply invoke the function variable like it was any other named function.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=156)** Now, like we've already said, in both of these cases we will get an error here because the function has not been initialized.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=164)** This is because we haven't yet defined what this function should actually reference, or what it should actually do.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=169)** We've simply defined a variable that will hold a function in the future.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=174)** To go ahead and initialize our function variable we'll come back up to our line here, and we'll add an equal sign and then open and closed curly braces defining the function body.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=189)** These curly braces are what's known as a lambda.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=193)** Essentially, it represents some function, some function body that will be executed when this function is called.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=200)** And in this case, this function body does nothing at the moment.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=205)** We could change that by adding a call to println, and printing a Hello Kotlin greeting.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=214)** And now, if we run our code, we will see Hello Kotlin printed out to the console twice.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=225)** If instead of printing it out twice we print it once and then reassign the function stored by that variable, in this case, we'll assign it a function that will say Hello World.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=244)** Now, if we print this out we will see that the first function is run when we invoke greetingFunction the first time, and we see Hello Kotlin.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=254)** Then we reassign the greetingFunction variable using this lambda here that prints Hello World instead.
>
> **[4:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=263)** And then when we invoke greetingFunction again, this time we see Hello World printed out to the console.
>
> **[4:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=270)** Notice that when we reassign the value we don't need to respecify the arguments or the return type.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=275)** Those are all already defined in the function signature when we declared the variable.
>
> **[4:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=282)** Now, like any other function, we can define functional types that include parameters and-or return values.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=291)** So, let's update greetingFunction to take in a string for the thing to greet.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=297)** So, first, we will update the parameter list to include the string type, and then we will update our return type here to return a string as opposed to returning Unit.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=314)** So, now, we want to update the function body here, and instead of printing out a string we're going to return Hello $it.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=329)** Now, this might look a little bit confusing.
>
> **[5:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=331)** What is this it we are referencing here?
>
> **[5:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=334)** Well, this it parameter here, or this it variable, is implicitly given name for the parameter passed to the function.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=345)** Any argument passed will be available as it.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=350)** However, this isn't always very readable.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=353)** And instead, we can often override this naming.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=358)** Within the lambda we can introduce thingToGreet as a named parameter by defining thingToGreet right after the open curly brace, and then specifying the arrow operator again here.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=376)** So, what this effectively does is renames that string parameter from the implicitly named it to this more explicitly named thingToGreet.
>
> **[6:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=385)** And so, now, when defining our string literal here we will reference thingToGreet directly.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=393)** Now, with this in place when we invoke our function we can pass different argument values each time we invoke the function.
>
> **[6:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=401)** So, we could pass World the first time, or we could pass let's say Kotlin an additional time here.
>
> **[6:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=413)** Now, notice below as well that when we are reassigning our variable here we have a compiler error.
>
> **[7:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=423)** And again, this is because this is using the old signature that is returning Unit as opposed to a string.
>
> **[7:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=429)** So, to replace this we could simply change it from printing the string to implicitly returning the string.
>
> **[7:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=437)** And now notice, in both of these cases when assigning the function variable we're returning a string without an explicit return.
>
> **[7:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=445)** This is a special property of lambdas.
>
> **[7:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=448)** Within a lambda you don't have to explicitly return the value using the return key word.
>
> **[7:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=453)** Whatever the last value is within the lambda will be implicitly return.
>
> **[7:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=459)** And the last thing to just notice here before moving on, is that in addition to calling the greetingFunction variable like a regular-named function where we pass in the parameter values, when we call it using invoke we also have to specify the parameter values as well.
>
> **[7:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=478)** So, any parameters that we add must be passed whether invoking it directly or using the invoke method.
>
> **[8:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=486)** So, to just illustrate what we've done here, if we go ahead and run our code one more time we'll see that nothing is actually printed out.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=498)** And this is because we changed our function to return a string as opposed to printing out a string.
>
> **[8:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=506)** So, if we just update a couple invocations here we will wrap these calls in println calls.
>
> **[8:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=521)** And now, if we run this one more time this time we will see Hello World the first time, Hello Kotlin the second time, and then lastly, Hello World once again.
>
> **[8:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=534)** Now, just something interesting to notice here, in our very last invocation when we called the invoke method we passed in World.
>
> **[9:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=543)** And when we see the output we actually see Hello World!.
>
> **[9:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=548)** So, there's a small, subtle difference here.
>
> **[9:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=551)** When we reassign the value of greetingFunction we actually are no longer using the parameter passed into it.
>
> **[9:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=560)** If we changed Hello World! to Hello there and rerun, it'll be more noticeable that that second greetingFunction is not using the parameter passed to it.
>
> **[9:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=577)** So, to update that we could once again use either the implicit it parameter made available within the lambda.
>
> **[9:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=588)** Now, we see Hello World! printed out.
>
> **[9:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=592)** And like we did the first time we defined our function value, we could make this a little bit easier to understand by renaming the it parameter as thingToGreet, adding our arrow operator here, and renaming the parameter reference within our function.
>
> **[10:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=615)** So, this time if we run this one more time we see Hello World!.
>
> **[10:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=623)** And if we change this to Kotlin Programming, run it one last time, we'll see Hello Kotlin Programming.
>
> **[10:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=635)** So, this is a good means of highlighting the fact that we are reassigning the implementation of that function every time we update the value of the variable.
>
> **[10:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=647)** So, if we're going to be using functions in this manner we need to be careful that we implement them consistently and assign them consistently, otherwise we might end up with unexpected results.
>
> **[11:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=660)** The ability to store functions as variable values can be quite useful.
>
> **[11:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=665)** Imagine allowing a user to remap input handlers to suit their preferences.
>
> **[11:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=670)** The variables holding each input handler could be swapped to different functions based on user preferences.
>
> **[11:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=677)** This won't be the last time we work with functional types.
>
> **[11:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/functional-types-14803699?u=76281980&t=680)** Functional types are the foundation of another powerful feature of Kotlin, higher-order functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (10), functional (7), [[Programming]] (2), data (1), hit (1)
> **Code Identifiers:** greetingfunction (9), thingtogreet (5)
> **Definitions:** is a  (2), known as (1), is called (1)
> **Analogies:** such as (1), just like (1), imagine (1)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Higher-order functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=0)** - [Instructor] Functions can be used as explicitly defined types and functions can take in other typed values as parameters.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=8)** So by extension, it might come as no surprise that we can pass functions as arguments to other functions.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=14)** This type of function is known as a higher order function and is an integral part of the flexibility and power of the Kotlin standard library.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=23)** To help build our understanding of both functions and the Kotlin standard library, let's dive in and explore how to pass a function to another function.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=33)** So, in our IDE here, let's define a function that prints out some calculated value.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=40)** So we'll come above our main function, hit return a couple times to give ourselves some space and we can start by defining a function named printCalculatedValue, and it'll take no parameters to start and we'll just give it an empty function body.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=57)** Next up, we want this function to take in two integer values.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=62)** So we will update our parameter list to add value1 of type int and value2 of type int.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=74)** And again, still leaving the function body blank for now.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=79)** Ultimately, these values are going to be used to calculate some result that will be printed out to the console.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=86)** Next, we want to define a function argument that will control how the values are calculated.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=94)** We do this similar to how we would define a functional variable.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=99)** So within our parameter list, I'll add another comma after value2, and I'm going to first define the name of this functional parameter and I'll just name it calculator for now.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=113)** And then we need to define the functional type like we would with functional variables.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=118)** So, this function signature is going to take in two ints and then it is going to return some integer value.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=128)** You might notice some symmetry here where we are passing two ints into the printCalculatedValue function and then our calculator parameter function is also going to take in two ints.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=139)** Now that we have our parameter list setup, we can use those parameters to implement the body of our higher order function.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=149)** So like I mentioned before, we're going to print out some value calculation.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=153)** So we'll start with a call to println, and then we want it to say the value is, and then now we're going to use a string substitution here, so I'll use dollar sign, open and close curly brace.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=170)** And now within the substitution, we want to make use of the past calculator function to calculate the value and then print that out in our string here.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=180)** So to do this within our template here, we can use the name of the calculator function and just like we did with function variables, we can pass in value1 and value2 to this calculator function.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=198)** So now, when printCalculatedValue is invoked, we are going to print out the value is, and then whatever the result of that calculator function might be.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=209)** This will make much more sense in a moment, once we see how we would actually call this function.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=215)** Once our function is implemented, we can start using it and this is where it gets fun.
>
> **[3:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=220)** In the most straightforward invocation, we need four things.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=225)** We need to use the name of the function to invoke it and then we must pass in the first and second value.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=234)** So to start, we'll pass in two and two and then finally we need to pass in a Lambda that matches the function signature that we define in printCalculatedValue.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=246)** So remember that function signature says that our function argument must take in two int arguments and return an int.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=254)** So, I will add a comma here.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=257)** I'm going to add open and closed curly braces for my Lambda.
>
> **[4:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=261)** And then within that Lambda, I'm just going to rename those parameters as value1, value2 and then I will use the arrow symbol here.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=273)** And now we can define the calculation.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=275)** We can actually define the body of this function that we're passing to printCalculatedValue.
>
> **[4:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=282)** So in this case, we're going to do value1 plus value2.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=289)** So this function that we're passing to printCalculatedValue is going to add up the two values passed to printCalculatedValue.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=298)** And now if we run this code, we see the value is four, print it out to our console.
>
> **[5:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=306)** So we passed in two and two and the function that we passed as well, added those two values and then that calculation was used to print out the string the value is four.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=319)** So that is a pretty basic example but what if we wanted to instead subtract the values rather than adding them?
>
> **[5:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=328)** Well, we could invoke this function again but with a different implementation of the Lambda this time.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=336)** So again, we'll call printCalculatedValue, pass in two and two.
>
> **[5:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=343)** And this time within our Lambda, we will say value1 minus value2.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=354)** And if we run it, this time we see the value as four from our first invocation and for the second invocation, we see the value as zero because two minus two is zero.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=366)** This is the power of higher order functions.
>
> **[6:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=370)** Being able to define this one printCalculatedValue function by giving it the flexibility to take in another function that actually determines how the calculation is performed.
>
> **[6:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=380)** This makes it very flexible for us to define strategies or how certain pieces of algorithms should behave while being able to customize other portions of those algorithms.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=392)** Now, the current invocations of these functions is a little bit verbose.
>
> **[6:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=397)** It requires making sure the Lambda fits nicely within the parentheses when calling printCalculatedValue.
>
> **[6:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=404)** While this is very easy for simple functions, it breaks down for more complex ones where we might have more lines of code.
>
> **[6:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=411)** It makes it harder to read.
>
> **[6:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=413)** This is where trailing Lambda syntax comes into play.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=417)** Trailing Lambda syntax allows us to move the final Lambda of a parameter list outside the parentheses.
>
> **[7:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=425)** Now, what does this mean in practice?
>
> **[7:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=427)** Well, if we were to refactor the invocation of printCalculatedValues, what we could do here is actually move the final parentheses after the second integer value we passed in and pass the Lambda outside of those parentheses.
>
> **[7:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=449)** So we can see here, the difference between the first invocation of printCalculatedValue and the second one.
>
> **[7:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=454)** In the second one, the parentheses only include two and two and then the Lambda goes after.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=460)** In the second one, the Lambda goes within the parentheses.
>
> **[7:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=464)** The first version here is trailing Lambda syntax and it makes it feel a little bit more fluent when we're writing out these functions that take a function argument.
>
> **[7:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=475)** By applying this trailing Lambda syntax, we moved the function Lambda outside those parentheses which makes it look more like a traditional function body.
>
> **[8:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=483)** This often makes the Lambda more readable and easier to understand.
>
> **[8:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=488)** Higher order functions are a very common pattern within the Kotlin standard library and within idiomatic Kotlin code in general.
>
> **[8:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/higher-order-functions-14802627?u=76281980&t=496)** As you work through this course or read other Kotlin code, keep an eye open for examples of higher order functions and think about how they support flexible expressive code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (5), functional (4), power (2), next (2), [[Algorithms]] (2)
> **Code Identifiers:** printcalculatedvalue (11), printcalculatedvalues (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** ide (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)

#### Challenge: Write a name formatter function
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=0)** - To help reinforce the concepts of functions, functional types and higher order functions, here's a challenge for you.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=11)** Write a function to print formatted names to the console.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=15)** This function should take two strings representing first and last name, and it should take a function format parameter that controls how the actual formatting is done.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=29)** Your function should use the result of the formatting function parameter to print out the formatted name to the console.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=37)** When testing your code, try calling your function more than once using different format functions each time.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-write-a-name-formatter-function-14804061?u=76281980&t=44)** This should help highlight how higher order functions can help extract specific decision making out of a function's core algorithm, allowing for more reusable functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** functional (1)
> **Speakers:** - to (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Write a name formatter function
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=5)** - [Instructor] How did the challenge go?
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=6)** Were you able to write your Name Formatter?
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=9)** There's plenty of ways we could implement such a function.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=12)** So let's just explore one such implementation of a Name Formatter higher order function.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=18)** First, I like to start by just stepping out the implementation by defining the function name.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=23)** So in this case, I'll define my function name as printformattedname.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=31)** And I'll start with empty parameter list and an empty function body.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=37)** Then we can start to think about how we want to use this function.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=41)** We want to format a first and last name so it makes sense to include both a first and last name parameter to our function.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=50)** And because names are commonly text we'll use string types.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=55)** So we'll add a first parameter of type string and a last parameter of upstream.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=65)** Now we're ready for the interesting bit.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=67)** We want to pass a function that will format our first and last names and then return that formatted value.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=76)** So what should our formatting parameter type be?
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=82)** Well, I'll start by just adding the name for that formatting function parameter.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=88)** And then when we think about the parameters, we probably should have two inputs, one for first name and one for last name, and both of these will be of type string.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=98)** And we want to format these in some way and return a value to print out to the console.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=105)** In reality, we could return any type we wanted but since we're working with names and console output, a string return type is appropriate.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=113)** So I'll finish off the function type definition here by indicating that it should return a string.
>
> **[2:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=120)** So putting all these pieces together, we're now ready to implement the body of our function.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=126)** We will use a call to print ln, and we will simply pass in the result of calling the formatter function and passing in first and last to that formatting function.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=145)** So whenever print formatter name is called, the formatting function passed to it will be invoked passing first and last name to that function.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=155)** That formatter will return a string and print formatted name will print that string to the console.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=163)** Let's now test our function by creating two different format functions, and we're going to store them as variable and then invoke our function using each one.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=173)** So let's start by defining a basic formatter of type function, taking two strings and returning a string.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=186)** And now we'll define our Lambda and I'll name the parameters first and last, just to be consistent.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=193)** In our basic formatter, we will return first space last.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=202)** And now we'll define one more function variable here and we will call this one Fancy formatter.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=212)** And again, it will take two strings and return a string.
>
> **[3:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=220)** And this time again, we'll name the parameters first and last.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=224)** And for this one's body we want this one to be a little bit more interesting.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=229)** So this one, we will say first name is $first and last name is $last.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=239)** So this will give us a much more verbose output to demonstrate.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=245)** Once our formatter variables are defined, we can use those to call our name formatter function.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=251)** So we'll come down into main, and we will call print formatted name and I will use my first name, Nate, my last name Ebel, and I will pass in basic formatter.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=268)** Because we stored basic formatter as a variable representing a function, we can pass it in to print formatted name because the function types match.
>
> **[4:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=279)** And if we wanted to demonstrate with the fancy matter again, I can pass in my first and last name.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=289)** And this time I'll pass in fancy formatter.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=293)** If we run this code now, we will see that for the first invocation using basic formatter, it simply prints first and last name.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=303)** And for the second invocation when we passed in fancy formatter, we can see the more verbose output printed to the console.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=313)** And just to round out the example here, we don't have to predefine the functions that we're going to pass to print formatted name.
>
> **[5:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=323)** If we wanted to, we could once again call print formatter name.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=329)** But rather than passing a function in that we predefined like basic formatter or fancy formatter, we could use trailing Lambda Syntax once again, and we could pass in a function on the fly.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=345)** So I will name the parameters here first and last.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=348)** And now when I return the string for this formatting maybe we'll do it in reverse order.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=354)** So we'll do last, comma first.
>
> **[6:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=360)** And if we run this now, we see that our third example successfully prints out last name, comma, first name.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=369)** So this shows off the power of higher order functions.
>
> **[6:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-write-a-name-formatter-function-14799784?u=76281980&t=373)** We defined one print formatted name function and can now use it in a variety of ways to control how that formatting is done without impacting the core logic of printing out that formatted name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 4. Control Flow Structures

[↑ Back to Table of Contents](#table-of-contents)

#### if and when statements
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=0)** - [Instructor] How do we define conditional logic in Kotlin?
>
> **[0:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=3)** For this problem, we have two primary tools: if and when, both of which can be used as both a statement or an expression.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=12)** An expression returns a values, whereas a statement does not.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=17)** To better understand that this distinction between statement and expression, and to learn more about conditional logic, let's take a look at the basics of both if and when.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=28)** If in Kotlin behaves pretty much just like any other language.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=33)** We provide some Boolean expression.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=35)** In this case, we could say if true and if it evaluates to true, which this always will, some line or block of code will be run.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=46)** So in this case, we will print out The condition was true if this condition evaluates to true, which it will.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=58)** So when we print out this code, we see the condition was true printed out to the console.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=66)** Now, if statements can be written with or without curly braces.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=73)** If we want to run multiple lines of code in response to some condition, curly braces can help us organize that code and make it more readable.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=84)** So let's just refactor our if statement here and after the parentheses where the Boolean expression lives, we'll go ahead and add open and closed curly braces.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=96)** Now, within those curly braces, now we are free to define whatever logic we want.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=102)** So I could create a variable called message and assign it the value of complex logic here.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=112)** And then we could go ahead and print that message out.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=118)** And again, if we run our code, we'll see complex logic here printed out to the console.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=128)** Within the if, we can perform various logical comparisons or evaluate any arbitrary expression as long as it evaluates to a Boolean value.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=138)** So again, let's create a variable here.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=142)** We'll call this someVariable and we'll assign it the value of zero for now.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=151)** And now within our if, we could check that someVariable is greater than three.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=159)** And then if it is greater than three, we will print out the value was greater than three.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=168)** So if we run this, we see nothing because someVariable is in fact not greater than three.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=178)** If we change someVariable to the value of five, and run again, this time we see the value was greater than three.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=188)** If we want to run some code if the conditional evaluates to true, and some other code if it doesn't, we can use an else block.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=197)** So after the curly braces of our if condition, we could add an else and we could print not greater.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=210)** So if we run with a value of five, we see the value was greater than three.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=215)** And if we change our variable back to zero and rerun, we see not greater printed out.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=223)** And just like with the if condition, the else block can also be wrapped in curly braces to make it easier to read and to support adding more complex logic down the line.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=236)** We don't have to stop at a single if condition either.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=239)** We can combine multiple ifs together using else if.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=244)** So we could print out the value was greater than three if someVariable is greater than three.
>
> **[4:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=253)** We could also print out using else if someVariable greater than two.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=264)** We could say the value was greater than two.
>
> **[4:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=270)** So now we have three conditions.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=273)** One thing if the value is greater than three, another if it's greater than two, and an else if neither of those is true.
>
> **[4:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=282)** So let's try this again.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=284)** We'll start with zero.
>
> **[4:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=285)** We see not greater printed out.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=289)** If we change someVariable to one, we still see not greater.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=297)** If we change it to three, this time we see the value was greater than two because three is not greater than three, so the first condition is not met.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=308)** However, the second one, someVariable greater than two is met.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=314)** And finally, if we change someVariable to five and run this one more time, now we see the value is greater than three.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=321)** And this time, the first if is evaluated to true, which means it's printed out.
>
> **[5:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=327)** And notice that even though technically multiple conditions would be true here because five is greater than two and it's greater than three, only one branch will be evaluated.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=338)** So the first matching Boolean expression is the one that will be used in this if, else if, else block.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=349)** Aside from if else, the other conditional construct Kotlin provides is that of when.
>
> **[5:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=357)** When can be used in a couple of different ways.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=361)** First off, when can be used as a replacement for if else.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=366)** So we'll just demonstrate that now by removing the if else statements that we just created and now we're going to use a when instead.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=375)** So to use a when, we'll start with the when keyword and we'll add open and closed curly braces here.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=381)** And then we can add different expression values to evaluate, similar to the if else.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=387)** So we could say when someVariable is greater than three, followed by the arrow operator here.
>
> **[6:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=397)** So this will say if someVariable is greater than three, do what is ever on the right-hand side of the arrow.
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=403)** In this case, we will print out the value was greater than three.
>
> **[6:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=412)** And then just like before, we'll add another one here that says someVariable greater than two.
>
> **[6:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=418)** Println, the value was greater than two.
>
> **[7:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=425)** And lastly, we can add else conditions as well, and we could print out not greater.
>
> **[7:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=436)** So now again, before we run this, let's just take a moment to review what we've done here.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=441)** Conditions are supplied on the left side of the arrow and then the code to run if the condition is a true is applied on the right-hand side.
>
> **[7:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=449)** And these conditions, just like with if else, are evaluated from top-down and only a single one will be evaluated and run.
>
> **[7:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=457)** This is very analogous to switch statements found in languages like C# or Java.
>
> **[7:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=464)** And similar again to if else, we could wrap any of these code blocks in curly braces if we needed more complex logic.
>
> **[7:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=474)** So now if I go ahead and run this code a couple times for the value of five, we see the value is greater than three printed to the console.
>
> **[8:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=483)** And if we just change someVariable to zero, we'll see not greater printed to the console.
>
> **[8:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=490)** The other form of a when statement allows us to pass in an argument directly.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=498)** So that looks something like this.
>
> **[8:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=501)** When someVariable and then we can define our conditions here.
>
> **[8:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=507)** Why is this syntax useful?
>
> **[8:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=510)** Well, in cases where we might be supplying multiple conditionals, all operating on a single variable, passing the variable into the when allows us to implicitly reference the variable, saving us code.
>
> **[8:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=525)** So once we pass an argument value to the when, in this case, someVariable, we can simplify how we write our conditionals.
>
> **[8:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=534)** To compare the argument value to specific values, we can simplify specify the target value on the left-hand side of our when conditional.
>
> **[9:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=544)** So if we wanted to check if the value was exactly two, we could simply write two with the arrow and then we will print out the value is two in that case.
>
> **[9:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=558)** And as with our other examples of if and when, we can provide multiple conditional cases as well.
>
> **[9:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=564)** So we could also check if the value was three and if so, print out the value is three.
>
> **[9:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=573)** And if we wanted to handle multiple cases in the same way, we could combine them into a single condition using a comma.
>
> **[9:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=581)** So if we wanted to treat let's say zero and one the same way, we could do that by putting zero, one and printing out the value was zero or one.
>
> **[9:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=599)** When working with numeric types, we can use a when in conjunction with ranges to check if a value is within some range.
>
> **[10:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=609)** So if we just look at what we've done here, we've checked if the value is zero or one, two or three, so now let's say we hand some case that handles if the value is four, all the way up to let's say the maximum integer value.
>
> **[10:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=625)** So to do this, we might think to do something like greater than or equal to four here.
>
> **[10:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=632)** However, this syntax does not work within this from of when because we need to have a value on the left-hand side of that evaluation operator.
>
> **[10:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=642)** So instead, we can use the range here.
>
> **[10:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=645)** So we could say if someVariable is in, and then we're going to create a range using a special syntax.
>
> **[10:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=655)** So to start, we will provide the first value of our range and then two periods and then we define the maximum end of our range.
>
> **[11:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=665)** In this case, by referencing Int.MAX_VALUE.
>
> **[11:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=670)** So what we've just done here is basically said if someVariable is in the range of four to MAX_VALUE.
>
> **[11:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=678)** And notice that the IDE is providing some hints here.
>
> **[11:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=681)** It is giving us these little suggestions that say the range of four is less than or equal to the value is less than or equal to Int.MAX_VALUE, basically calling out that four and Int.MAX_VALUE are inclusive of this range.
>
> **[11:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=697)** So now we can finish this off by defining what to do if it's in this range, in which case, we will print out the value was greater than three.
>
> **[11:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=711)** So now let's run this new version of our when or comment out the old version first.
>
> **[12:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=720)** And run our code.
>
> **[12:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=722)** And we see the value was zero or one when someVariable equals zero.
>
> **[12:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=729)** If we change it to say three, and run again, we see the value is three.
>
> **[12:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=736)** And let's say if the value was 100, we see the value was greater than three.
>
> **[12:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=745)** So we're able to hit these different expression values, whether they be specific values like a two or a three, a combination of values like zero and one being handled the same way or a range of values as with the final case of four up to max int.
>
> **[12:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=764)** If and when are vital tools in our Kotlin development toolbox.
>
> **[12:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/if-and-when-statements-14802631?u=76281980&t=769)** We've only just started to cover the functionality they provide and we will continue to build on this foundation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), [[Java]] (1), hit (1)
> **Code Identifiers:** somevariable (18)
> **Analogies:** just like (4), similar to (1), analogous to (1)
> **Env Vars:** max_value (4), ide (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Statements vs. expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=0)** - [Instructor] If and when can both be used both as statements and expressions.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=6)** So how do we know the difference in when should we use one form or the other?
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=10)** To understand the difference and why it's important, we're going to examine the use of if and when as expressions to demonstrate how we can write safer, more concise code.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=21)** A statement doesn't return any value.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=25)** An expression, on the other hand, will either have its value returned from a function or assigned to a variable.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=33)** We can use an if-expression to conditionally assign a variable's name.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=38)** So let's create a variable called message, and then we can use our equals, and now when we go to assign the value of this variable, rather than just assigning a static constant here, we could use an if-expression to change the value assigned, depending on some variable value.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=60)** So let's create a variable, var someVariable equals.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=67)** Let's just say zero for now.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=70)** So now when we go to assign the value to message, we could say if, someVariable, greater than three, "The value was greater than 3," else, "The value was not greater than 3."
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=94)** Notice that the syntax here doesn't look too dissimilar from how we've assigned variables or used if in the past.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=101)** We create our variable as normal and after the equal sign, we define our if-expression.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=107)** The key difference is that if-expressions must provide a value.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=112)** So they must always include both if and else.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=116)** If we tried to remove the else here, we would get a compiler error on the if, saying, "if must have both main and else branches if used as an expression," and the reason for this is that if someVariable is not greater than three, we have to have some backup valuable to assign to message.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=138)** So I'll just put the else back here, and if we were to just quickly print out the value of message here, we'll see that if someVariable is zero, we see "The value is not greater than 3" printed out.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=156)** If we change someVariable to five, we see "The value is greater than 3" printed out.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=165)** In addition to variable assignment, if-expressions can be used when returning a value from a function.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=173)** So let's to demonstrate this by creating a function called getMessage.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=179)** It's going to take an input parameter called Int, and it is going to return a string, and so now we could use the return keyword and use an if-expression to define what value should be returned here.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=197)** So we could say if, input greater than three, return the value "Greater than 3," else, return the value "Not greater than 3."
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=216)** So again, this is very similar to the previous example, but when we go to return the value, we have to have some return value.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=222)** So we define our input greater than three condition and then an else to ensure that we always have some fallback value.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=230)** Now, this syntax here, this use of if-expressions, can be combined with single-expression functions to create a multi-condition function with a single expression.
>
> **[4:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=243)** So we could refactor this very easily to a single-expression function by adding the equals after the parameter list and then defining our if-expression directly.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=255)** So again, now getMessage is a single-expression function, and that single expression is an if-expression with multiple conditional branches.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=265)** So now let's switch gears, and let's look at when-expressions.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=268)** So I'm just going to clear out the code in main here for now.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=272)** Now, similarly to if-expressions, when can also be used as an expression.
>
> **[4:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=279)** So I could say val, message equals when.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=284)** So now within this when, I could reference some value or some variable and again, define different conditional blocks.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=293)** So I'll go ahead and, once again, create a variable called someVariable and now within my when, I'll say when someVariable is three, I'll return "The value is 3," and notice here that I have a compiler error over the when, saying, "when-expression must be exhaustive.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=318)** Add necessary else-branch."
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=320)** So this is the same thing as with the if-expression.
>
> **[5:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=324)** When using "when" as an expression, we have to return some value.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=329)** So in this case, we only have defined a return value if someVariable is three.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=335)** So to complete this, we need to make this exhaustive by adding an else.
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=340)** In this case, "The value is not 3."
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=344)** Once we've handled that else, or once we've defined conditions that handle all possible values of someVariable, then the when will be exhaustive and the compiler will be happy.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=358)** To round out our examples of when-expressions, we can use when-expressions when returning from functions, just like we could with if-expressions.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=366)** So for example, we could define another function here.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=369)** We'll call this fun, getMessageWithWhen.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=375)** It'll also take an Int input, and we can use a when-expression to make this a single-expression function by saying when, input, and now we can define our conditional options again.
>
> **[6:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=390)** So we'll say if the value is three, return "Value is 3," else, "Value is not 3."
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=406)** This can be a very useful way to concisely implement a function that needs to map from some input to very specific output cases and to help make sure that we handle all of those possible output cases.
>
> **[7:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=421)** Using if and when as expressions allow us to unify assignment or return with the logic that determines the value.
>
> **[7:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/statements-vs-expressions-14800823?u=76281980&t=429)** This can help us consolidate the conditional logic and helps us enforce imutability by allowing the conditional assignment of read-only values.

> [!info]- Semantic Content
>
> **Code Identifiers:** somevariable (9), getmessage (2), getmessagewithwhen (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Analogies:** similar to (1), just like (1), for example (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### try/catch as control flow
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=0)** - [Instructor] I don't know about you, but sometimes, maybe even most of the time, my code has bugs in it.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=7)** Sometimes those bugs throw exceptions which may crash our programs.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=12)** These can stem from things like trying to perform an operation on a null value or trying to divide by zero.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=19)** There are many ways to work towards preventing these errors and one of which is try catch.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=27)** We're going to continue our exploration of expressions in Kotlin by looking at how we can use try catch as an expression to write more concise, error safe code.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=37)** So let's take a look at an example here.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=39)** Val message = "the value is ${10 / 0}".
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=51)** What do you think will happen if we run this?
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=56)** If you guessed that our code will crash, you are correct.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=60)** Dividing by zero throws an arithmetic exception which crashes our application when we run it.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=68)** Try catch lets us catch these thrown exceptions without crashing and respond to them in some useful way.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=77)** If we wrap this code in a try catch, so we'll type try with open and closed curly braces, then go ahead and place our variable assignment within that again and then we will add catch.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=94)** So within catch, we can define a specific error such as an arithmetic exception or in this case, I'll catch any throwable thrown by the code.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=104)** So in the case of an error, we want to do something with that, so we will print out error was thrown.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=114)** Now, if we run this code, we don't crash.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=119)** Instead, we see our error message, error was thrown.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=125)** There's an issue here though.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=127)** Handling the error in this way, branches the normal execution of our code.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=133)** Sometimes a potential error might be expected and recoverable.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=138)** In cases like that, we can use try catch as an expression to streamline the error handling and reduce the number of logical branches in our code.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=149)** So let's refactor this to use try catch as an expression to reduce the branching here.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=156)** So let's delete this for now and we're going to rewrite this using try catch as an expression.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=162)** So again, I'll use the same message variable name and this time when we go to assign the value, we'll say equals and then we're going to use the try catch here.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=173)** So within the try, we'll say the value is, and once again, we will perform our invalid divide by zero calculation here.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=185)** And then now, when we catch the error, we will say error was thrown and below this, we will print out the message.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=201)** So what we've done here is sort of unified the logical branches in this code.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=208)** So now we're always going to assign a single value to our message variable.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=213)** If the division did not throw an exception, then we would see the value is and whatever that successful value was.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=222)** And in the case where we do get some error, we're always going to get a consistent error message.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=227)** So now when we go to print out our message, we can be sure that it's always going to have a value, either the successful calculation or the default.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=238)** And if we run this, we will see that error is thrown is called.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=245)** And if we just update that calculation, this time we'll just say 10 / 1 instead of zero, this time we see the value is 10 printed out.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=254)** Now, before we round out this section, I just will highlight the fact that in this case, we are catching any throwable, even if we know that we expect an arithmetic exception.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=266)** So just to demonstrate that we could catch a more specific exception here, we'll change throwable to ArithmeticException and we will change back our one to a zero so that our exception will be thrown again.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=281)** And once again, if we run our code, we'll see that error is thrown.
>
> **[4:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=287)** Now, if we want to throw some other exception here, we'll just say IllegalStateException, just for fun.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=297)** Now, if we run our code, we still see an exception being thrown.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=304)** This is because our catch is no longer catching all exceptions.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=310)** So if we changed this back to any throwable and reran it, we would once again see error is thrown.
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=320)** If we wanted to still treat ArithmeticException differently, we could also catch multiple exception types here.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=330)** So we could say error, IllegalStateException and in this case, we could say error was IllegalState.
>
> **[5:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=341)** Now, if we run, this time we see the more specific error message printed out.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=349)** So this is often a good practice to not catch all exceptions and handle them all the same way.
>
> **[5:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=356)** Often we want to think about specific exceptions and handle them differently, depending on how we may or may not be able to recover from them.
>
> **[6:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=365)** As you write your code, think about what errors you might expect.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=369)** Are there places where rather than crashing or generically catching the crash, you could provide a sensible default value if one of these errors occurs?
>
> **[6:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/try-catch-as-control-flow-14797833?u=76281980&t=378)** If so, you might consider whether you can use a try catch expression to streamline this error control flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (1), application (1), [[Control Flow]] (1)
> **UI Navigation:** go to (2)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Smart casting
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=0)** - [Instructor] Sometimes we may want conditional logic that runs only for certain data types.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=6)** Perhaps we want to print one message if our variable is an int, and another message is our variable is of type string.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=14)** In a production code base, having to repeatedly make these kinds of type checks can result in verbose, difficult-to-follow code.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=22)** To help alleviate this issue, Kotlin includes the notion of smart casting.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=27)** To help us understand the power of smart casting, we're going to first look at how to cast a value to a specific type and then we'll see how the Kotlin Compiler can help do this for us in some situations.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=39)** So if we come into our IDE here, to understand smart casting, we must first understand the concept of casting in general.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=48)** To cast a value means that we explicitly change the type of the variable or property to some new specific type.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=56)** So let's say that we have a variable here called aGenericVariable and it is going to be of type Any and we will assign it a value of five.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=70)** Now, we know this value is always five.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=73)** So we might want to assign this value to an int variable so it's easier to work with, specifically as an int.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=80)** So we could say val anIntVariable equals aGenericVariable.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=90)** Notice, however, that when we do this, we get a compiler error.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=94)** If we hover over the error, we see type mismatch.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=97)** Required:int, Found: Any.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=100)** To make this assignment work, we need to cast the Any to an int.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=106)** We can make this kind of cast by using the as keyword and then specifying the type that we want to cast it as.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=115)** So now we're assigning a generic variable as type Int to our anIntVariable.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=124)** Now we can work with our int variable as the more specific integer type.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=130)** Now, you might ask yourself what happens if we try casting from incompatible types.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=136)** Well, let's take a look.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=138)** Instead of casting the value five to an int, we will change aGenericVariable to be some string value.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=148)** Now, after changing the value to a string, notice that the code still compiles.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=153)** However, if we run this code, we'll see that the code crashes due to a thrown ClassCastException.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=164)** This is happening because we cannot cast string to an int.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=171)** So now that we have some basic understanding of casting, let's explore the reverse.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=177)** How can we check the type of a value?
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=180)** Well, let's start by stubbing out a simple function called checkType.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=187)** checkType will take one parameter called input of type Any.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=193)** And we'll leave an empty function body to start.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=197)** Now, let's say we want to print out a specific message if the input argument is a string data type.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=204)** How do we do this if the parameter type is not specifically of type string?
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=208)** To perform a type check, we can use the is keyword.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=213)** When combined with a conditional, we can run code only if our input is a string data type.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=219)** So within our checkType function body, we could say if input is String, println Input is a String.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=233)** Similarly, we could check if input is not an int, for example.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=240)** If input not !is Int, println Input is not an Int.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=255)** So now we'll come back down to our main function and we will go ahead and just remove this second line here that was throwing the exception before.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=265)** And now we will call checkType.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=268)** And so we will pass in our GenericVariable to checkType, and we're going to run this code and see what's printed out.
>
> **[4:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=279)** So notice when the code prints out that it says input is a string.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=284)** Input is not an int.
>
> **[4:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=287)** So let's just change the value of our GenericVariable here.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=291)** Let's change it to be five.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=293)** And run the code again.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=296)** And this time, we see nothing printed out because it's not a String and it is an Int.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=303)** So by combining the use of as to cast values from one type to another, or is to check if a value is some type or another, we have a lot of power here to be able to query and manipulate types as needed.
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=320)** However, like we said at the beginning, this can be verbose and error prone.
>
> **[5:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=327)** So now we're ready for smart casting.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=330)** Let's say that if our input value is a String, we want to print the string's length.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=336)** If we try to get the length of a string before the type check, we won't be able to since the type at that point is still Any.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=344)** So if we just try to do input.length, that'll fail.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=350)** That gives us a compiler error because at this point, input is still of type Any.
>
> **[5:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=356)** Within the conditional, however, we can access the length property without an issue.
>
> **[6:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=364)** So we could update our message here to say input is a String with length, and we can use our template here, and say input.length.
>
> **[6:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=380)** And now within this conditional that checks whether input is of type String, we have no problems accessing the length property.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=389)** How does this work.
>
> **[6:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=391)** Why can we access this length property even if the type of input is still technically any?
>
> **[6:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=397)** Well, the answer is smart casting.
>
> **[6:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=400)** Within our type check, the compiler knows that the type of input is string.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=406)** So it will automatically cast input to type string wherever it's used within that conditional scope.
>
> **[6:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=413)** So effectively, the compiler here is doing the work for us of using that as keyword to cast input to type string.
>
> **[7:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=421)** Smart casts work for nullability checks as well.
>
> **[7:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=425)** Let's update our function to allow for null input parameters.
>
> **[7:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=430)** And our type check to look for nullable strings.
>
> **[7:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=433)** So we will add the question mark to our Any parameter.
>
> **[7:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=437)** So now we can pass null into this if we wanted.
>
> **[7:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=440)** And similarly, we could check if input is of type nullable string.
>
> **[7:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=448)** You might notice that we now have an error in our output code.
>
> **[7:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=454)** Input might be null, so the compiler tells us that we must now make a null safe call when accessing input.length.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=463)** Smart casting can help with this scenario as well.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=467)** Before we print our value, we're going to return from the function if input equals null.
>
> **[7:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=479)** Now, notice, as soon as we make that conditional check for null and return from the function early, the compiler now no longer is giving us the error telling us we need to make a null safe call when accessing input.length.
>
> **[8:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=493)** The compiler is smart enough to recognize that if the conditional branch is ever reached, it means that input is not null and it will cast it as such for us so that we don't have to do it.
>
> **[8:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=505)** The same concept would apply if we were to use an if-else rather than returning early.
>
> **[8:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=512)** So let's remove our early return here and then within the conditional that is checking if the input is a nullable string or not, we can say if input equals null, else.
>
> **[8:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=531)** So now within the input equals null branch, we can say println Input was a null String
>
> **[9:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=546)** and we'll come down here.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=549)** We'll fix our typo here.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=552)** And we'll bring this statement up into our else branch.
>
> **[9:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=557)** And now as soon as we bring that into the else branch, we again no longer have any type of null safe warning on the call to input.length.
>
> **[9:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=566)** So again, the compiler here is smart casting in a couple of ways.
>
> **[9:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=570)** First, it's helping us ensure that input is of type string and it's also helping us ensure the input is not null.
>
> **[9:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=580)** And to round out this discussion, smart casting works with when statements as well.
>
> **[9:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=587)** So we could remove the code in our checkType function here and we're going to redo some of that now with a when.
>
> **[9:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=596)** So we could say when input and the first condition we'll check here is whether the value is null.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=604)** And if it is null, we will print out Input was null.
>
> **[10:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=610)** Then next up, we can check if input is String, in which case we will print out Input was a String of length input.length.
>
> **[10:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=625)** So again here, when we make our check that input is of type nullable string, we no longer have to do any type of null safe call on input because smart casting will help us ensure that that is going to be a non-null string.
>
> **[10:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=642)** And if we go ahead and just run our code one more time, we can verify this.
>
> **[10:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=647)** So with an input of five, we see nothing printed out.
>
> **[10:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=653)** If we were to pass null to our check input call, we see input was null printed out.
>
> **[11:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=664)** And if we pass in a string, in this case, a string saying null, we see input was a string of length four.
>
> **[11:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=672)** So all of these different conditional branches are working as expected and in a null safe and type safe way.
>
> **[11:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=683)** Smart casts are an incredibly helpful feature of the Kotlin programing language.
>
> **[11:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=687)** By automatically inferring and casting types for us, the compiler helps us ensure type safety, while also allowing us to write less code.
>
> **[11:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=696)** As we continue through this course, smart casts will crop up from time to time.
>
> **[11:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/smart-casting-14804062?u=76281980&t=701)** See if you can notice where they are used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Kotlin]] (3), power (2), generic (1), next (1)
> **Code Identifiers:** checktype (6), agenericvariable (3), anintvariable (2)
> **Definitions:** is a  (7), is an  (2), means that (2)
> **CLI Commands:** make (7)
> **Env Vars:** ide (1)
> **Tools:** notion (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)

#### while loops
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=0)** - [Instructor] In nearly any complex application the need will arise to perform some repeated operation.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=6)** This could be repeating a task a certain number of times or repeating for every item in some range or a collection.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=14)** Let's explore one mechanism for this type of repeated operation, the while loop.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=22)** While loops in kotlin behave very similarly to other programming languages.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=27)** First, we need to define some counter value.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=31)** So in this case, we'll create a variable called counter and assign it the value of zero to start.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=38)** Next we set up the looping condition.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=42)** In this example, we'll set up our loop to run five times by checking whether our counter is less than five or not.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=49)** So we can do that by using the while keyword and then our condition in this case is going to be, counter less than five, and then within open and close curly braces here we can define what we want to do on each iteration of the loop.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=67)** If we were to run this code now, our loop would never terminate since we never update the value of our counter variable.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=74)** So we must be careful to increment the value of the counter within our loop body.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=82)** This will ensure that eventually the counter becomes equal to five and the loop will terminate.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=87)** Now that our loop should properly terminate, let's add before the incrementing of the counter, a print statement that will print out the value of that counter.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=99)** So now if we run our code, we should see the values from zero to four printed out to the console.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=109)** Sometimes we might want to break out of a loop early.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=113)** If we're within a function, we could possibly just return our desired value to break out of the loop, but that doesn't apply to all situations.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=122)** For a more general approach, we can use the break keyword to terminate our loop early.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=129)** We can quickly demonstrate this by breaking out of our loop once our counter is equal to three.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=140)** Now if we run this, we'll see that we only get the first three values of our loop printed out.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=147)** As soon as that counter value hits three we break out of the loop and return from our main function.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=154)** Using break effectively can be a good way to avoid doing unnecessary data processing in our code.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=162)** The while loops we've been working with so far evaluate their condition before ever executing the loop body.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=169)** If we need to ensure a loop is run once this form of while loop requires setting up a counter that always evaluates to true at least one time.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=179)** This isn't overly difficult but it's potentially error prone and semantically doesn't match the intention of a loop that must always run at least once.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=188)** For scenarios like this we can use a do while loop instead of the regular while loop.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=194)** So let's just go ahead and clear out this existing implementation of our loop and we're going to leave our counter for now.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=203)** So now instead of starting the loop by defining the when keyword in our looping condition, we instead start using the do keyword and then the body of the loop itself.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=215)** So in this case again we will print out the value of counter and then we will increment our counter by one.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=225)** This time using a plus equals operation, as opposed to using the plus plus operation that we used before.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=232)** This body that we've just defined after do will always run at least once.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=238)** Lastly, we now need to set up our loop condition.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=242)** So we get do that by adding while again and we can define the condition we want to check.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=246)** So let's say we want to run this loop while counter is greater than one.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=255)** So intuitively here, if counter is starting at zero we might not expect this loop to run.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=262)** However if we go ahead ahead and run our code we'll see that it runs one time.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=267)** And this is because in the do while version of a loop, the loop body will always execute at least once.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=274)** So, in this case we'll start with zero.
>
> **[4:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=276)** We'll print zero to the console, increment the counter by one.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=281)** And at that point, one is not great than one, so the loop will terminate.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=288)** If we update our condition to check that the counter is say less than five, we'll see that our output now matches the basic loop implementation that we saw in our very first example.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=304)** While loops are a straightforward way to repeat blocks of code times.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/while-loops-14799788?u=76281980&t=308)** And like many things in kotlin there are multiple forms of a while loop to help fit different types of looping use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (2), application (1), [[Programming]] (1), next (1), data (1)
> **Prerequisites:** set up (3)
> **Best Practices:** avoid doing (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### for loops
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=0)** - [Instructor] For loops are one of the most common programming language constructs across all languages for repeatedly running a block of code.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=7)** In Kotlin, we can use four loops in a variety of ways, depending on our specific use case.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=14)** Let's start off with the basics and explore how to repeat tasks using some simple for loops.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=20)** In the most basic of for loop, we're typically iterating over some range of values.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=26)** And in Kotlin, generating a range of values is quite simple using several available functions and operators.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=34)** Let's start by creating a loop to iterate from zero to five.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=39)** So we'll start off by using the for keyword.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=43)** And in this case, we are going to define I as our counter variable, which will automatically be incremented based on the specific range.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=53)** That range is then going to be defined using the until function.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=57)** So we'll first say, I in to specify that we want I to be iterated over the values in the upcoming range.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=66)** And now, we will define that range by saying zero until five.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=74)** Until is a special type of function called an infix function.
>
> **[1:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=78)** We'll dive deeper into how we can write our own infix functions in a little while.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=83)** For now, it's enough to know that the until function creates a range of values from zero to four.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=89)** And so now, after we've defined the set of values that we will iterate over, we need to define what to do each time it's iterated.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=98)** So in this case, we will simply print out the value of I.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=103)** If we run our code, we'll see the values zero through four print out to the console.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=111)** If we wanted to include five in our range, we could replace the until function call with another syntax, which is to use two periods.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=122)** This syntax also creates a range, but this time, it is inclusive on both sides.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=127)** So both zero and five will be include in the range of values that we iterate over.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=134)** If we run the code, we'll now see that five is print out to the console as well.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=140)** We could also configure our range to count down if we would like.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=146)** So we could say, for I in the range of 10 down to zero.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=159)** Now we see all the values from 10 down to zero.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=165)** Ranges also let us control how to increment our counter by using the step function.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=171)** So in this case, if we wanted to count from 10 down to zero by three as opposed to the default of one, we could come back inside our parentheses.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=182)** And after we define the range, we can say step three.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=188)** So now, what we've done here is defined a loop.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=190)** We say 10 down to zero by three effectively.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=194)** And again, step is another infix function here.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=198)** If we run this, now we'll see 10, seven, four, and one.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=203)** So again, we're iterating over that same range of values from 10 down to zero, but this time, we're jumping three each time.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=213)** This only scratches the surface of iterating with for loops in Kotlin.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/for-loops-14797841?u=76281980&t=218)** As we continue through this course and learn more about arrays, lists, and other collections, we'll revisit different forms of for loop for iterating over these data types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (3), [[Programming]] (1), [[Forms]] (1), data (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Replace an if/else expression with a when expression
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=0)** - [Instructor] Time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=7)** This time, we want to get some hands-on practice with using when expressions as a more Kotlin idiomatic way of writing conditional logic.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=16)** Examine the provided function, getOutput.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=20)** This function takes in some input value of type nullable Any and returns an output string to later be printed to the console.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=32)** This function is implemented as a single-expression function using an if/else expression to provide a return value.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=42)** If we run this code, we will see various outputs printed out to the console, telling us useful information about all the different input types provided to the getOutput function.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=55)** Your challenge is to refactor this getOutput function so that instead of an if/else expression as the function body, it uses a when expression.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-replace-an-if-else-expression-with-a-when-expression-14803705?u=76281980&t=66)** When you're done, the output resulting from running the main function should be unchanged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (1)
> **Code Identifiers:** getoutput (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Replace an if/else expression with a when expression
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=5)** - [Instructor] How did the challenge go?
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=6)** Did you find when expressions any easier or more difficult to use than if else expressions?
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=14)** Let's walk through one approach for refactoring the given function to a when expression.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=20)** The easiest way to convert the if expression to a when expression is actually to use the IntelliJ tooling and have the IDE perform the refactor for us.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=31)** If we move our cursor and click on the if in the if else expression of our getOutput function and then hit Alt + Enter, we'll see that there is an option to replace if with when.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=48)** If I hit Enter on that, it will actually automatically convert the if else expression to a when expression for us.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=58)** How does this solution look compared to the one you came up with?
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=64)** While the IDE tooling is the easiest way to refactor the code, it's not the most instructive.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=70)** So we're going to go ahead and just revert that change and walk through a manual refactoring so we can talk through some of the details.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=81)** So I'm actually going to start out by commenting out the existing function.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=86)** (keyboard clicks) We'll save it here as a reference of what we need to build towards, but this will let us build out a new getOutput function without having to worry about changing names or anything like that.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=101)** Next, I want to set up a new version of the function using a when expression as the single expression function body.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=108)** So we're just going to stub this out.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=110)** So again, we'll say fun_getOutput.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=114)** We'll take in our single input here.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=117)** (keyboard clicking) We will define our String return type, and this time we'll say equals when (input) and now we have our when expression, but no conditions in it yet.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=131)** At this point, the compiler is going to complain to us that we must provide an else block.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=137)** This is because a when expression must provide some value.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=140)** So we have to ensure that there is at least some fallback value if no conditions are met.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=145)** So let's go ahead and add our base case to match what was present in the if else version.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=153)** So we'll say else "Input didn't match target inputs" So now we will have at least some value always returned when getOutput is called.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=167)** Now that our base case is accounted for, we can go down the list of if else cases and translate them into our when expression.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=177)** We'll start by adding a condition to check for the number type.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=181)** We'll do this by saying is Number within that conditional block, we can still use the if else expression from the old code.
>
> **[3:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=191)** So we can copy that over.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=196)** So I will just grab this.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=198)** I'm going to uncomment it, copy it, comment it again, (keyboard clicking) and add that to our is Number condition.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=208)** (keyboard clicking) Next up we have the String case.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=210)** So we'll say is String.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=214)** And in that case, we will return "Input was a String with ${length input.length}" And notice again here we're accessing input.length.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=229)** Smart casting is kicking in for us so that we don't have to worry about validating whether input is null or not.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=238)** And lastly, we can check for null explicitly by adding a null case and returning the string "Input was null" So we'll just kind of compare this to the old version.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=254)** We've handled the non-Int case, we've handled the non-Int Number case.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=259)** We copy that code directly over.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=262)** We've also handled the String case, the null case, and the base case.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=268)** So now we'll just go ahead and remove that old function.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=273)** And if we run our main function once again, we should see the same outputs that we expected from the original implementation of getOutput.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=288)** So what do you think about when expressions?
>
> **[4:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=290)** There's no hard and fast rule for when to use a when expression over an if expression.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=296)** Both can be used to accomplish the same things and it largely comes down to personal preference.
>
> **[5:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-replace-an-if-else-expression-with-a-when-expression-14798822?u=76281980&t=302)** However, when expressions do have some additional benefits for exhaustively enumerating close types, which we'll explore soon when we dive into object-oriented programming with Colin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (2), next (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Code Identifiers:** getoutput (4)
> **Non-Speech:** (keyboard clicking) (3), (gentle upbeat music) (1)
> **Env Vars:** ide (2)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** find (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)


### 5. Debugging Kotlin Code

[↑ Back to Table of Contents](#table-of-contents)

#### Setting breakpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=0)** - [Instructor] How do we fix our code when something isn't working right?
>
> **[0:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=4)** Usually, we need to start by understanding which lines of code might be causing the problem.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=10)** While we sometimes might intuitively understand the issue, we often find ourselves needing to debug our code line by line to track down those hard-to-squash issues.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=22)** Thankfully, IntelliJ has a number of built-in tools to help this debugging process.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=29)** We're going to start building up our debugging toolbox by learning how to set breakpoints in our code and run the bugger to inspect the execution of code at those breakpoints.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=41)** Now, before we dive too deeply into the tooling, let's make sure we are all on the same page when we say debugging.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=49)** For me, debugging is anything I can do to help understand why my code isn't working.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=55)** That might be reading through code line by line, talking through my code with my rubber duck, or using my debugging tools such as Logging or other IDE tooling.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=69)** That then brings us to the debugger.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=72)** Most modern IDEs have some form of debugging toolset.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=76)** These tools are designed to help us find and fix issues in our code.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=80)** These tools might help us inspect a local database, examine the value of a variable at a specific point of execution in our program or pause the entire execution of the program.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=93)** One of these common tools are breakpoints.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=96)** Breakpoints tell the debugger to suspend execution of our program at a specific line of code.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=101)** When the program is suspended, we can then examine the current state of our application.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=106)** So let's set our first breakpoint.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=109)** And before we do, let's go ahead and examine this code that we'll use to test this concept.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=115)** So we have a loop here iterating from the range of zero up to four.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=121)** And on each iteration, we're generating a random int and then we are calculating whether that random value is even if or not.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=129)** And then we will print out whether the value is even or odd.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=135)** Now, there's a bug in this code that is likely readily available as soon as we run that code.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=143)** So let's go ahead and run that code now.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=147)** And if we examine the output here, we see that we have a value ending in five, which is marked as even, a value ending in seven, marked as even, a value ending in six marked as odd, another ending in six, odd, and one ending in eight, which is odd.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=165)** So as we see this, we can see pretty obviously that our logic for calculating whether the value is even or not is backwards.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=175)** To help understand what's going on in this code, we're going to set a breakpoint on the line where we define our isEven property.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=183)** This will let us pause execution of our program after our random number is generated.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=189)** To set the breakpoint, move your cursor to the left-hand gutter in between the line number and the code, and click in that gutter space.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=200)** This should result in a red circle icon being added.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=205)** So we want to place that breakpoint on the line six here where we're calculating our isEven value.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=216)** If we start our application then with the debugger, when we hit this breakpoint, or any other breakpoint, that line of code in the application will be suspended.
>
> **[3:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=228)** To hit our breakpoint then and examine the code, we need to run our code with the debugger attached.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=235)** The easiest way to do this is to hit the Debug button in the toolbar.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=240)** Here it is in between the two sort of green play icons.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=245)** If I hover over it, it says Debug MainKt.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=249)** Now, you can also find it by going to the menu at the top, go to Run and select Debug.
>
> **[4:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=261)** Once the code starts, the debugger tool window has opened down at the bottom of the screen here and it should show the line with our breakpoint being highlighted.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=272)** So this blue line here is indicating that the code has suspended on that particular line.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=278)** If we look down at the tool window, we'll then see two main items of interest.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=283)** We can see a stack trace on the left side of that tool window showing which points in the application have been hit so far.
>
> **[4:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=294)** We also see the value of all our in-scope variables on the right hand of that tool window.
>
> **[4:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=299)** In this case, we see the value of our counter and we see the current random value.
>
> **[5:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=306)** The debugger and breakpoints are extremely valuable tools for Kotlin developers and there's even more functionality to leverage when debugging our code.
>
> **[5:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/setting-breakpoints-14802634?u=76281980&t=317)** We'll see later how we can build on this concept of breakpoints to inspect our code and to learn more information about how our code is behaving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Debugging]] (7), application (4), hit (4), database (1), [[Kotlin]] (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** iseven (2)
> **UI Navigation:** in the toolbar (1), go to (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Stepping through code
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=0)** - [Speaker] Okay, once we've stopped execution of our code at a break point, what next?
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=6)** How can we efficiently inspect our code and walk through the execution of our program to find the issue?
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=13)** Let's take a closer look at the debugger tools to understand how to step through code line by line, and how to set conditional break points that only pause execution under specific circumstances.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=27)** So again, we will use this same loop function here to test out these debugging tools.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=33)** And again, just as quick review, this code will iterate over a range from zero to four, generate a random number, and should ideally print out correctly whether that number is odd or even.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=46)** And we also still have a single break point in this code here placed on the line where we determine whether our value is odd or even.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=59)** If we now run our code with the debugger attached, we'll see that the debugger stops at that break point when calculating whether the value is odd or even.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=71)** Now, what if we want to pause execution at more than one place in our code?
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=77)** Let's say we want to pause only in the true branch of our win statement.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=84)** We can set another break point just on that line with the true conditional.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=90)** Then down in the debug window, along the left-hand side of the menu, we can click the green resume program button.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=101)** This will allow the code to continue running until the next break point is hit.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=105)** And now we see that that second break point is highlighted in the execution window.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=112)** By placing break points at specific points throughout our code, you can repeatedly resume execution and hit new break points to better understand the flow of your system.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=127)** Now, what if we want to examine every line of code in our application?
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=132)** Do we need to set a break point on every single line?
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=136)** Thankfully, the answer is no.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=138)** Let's clear out our old break points and add a new one at the very first line within our loop.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=146)** So here where we're generating the random integer.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=152)** Now, we'll go ahead and run the code again with the debugger.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=157)** And that first break point should be hit in that first line within the loop.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=161)** If we want to execute this one single line without setting another break point, we can step over that line by clicking the step over button in the debug tool window.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=174)** That button lives here towards the top of that tool window next to several arrows.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=180)** If we look at the first option, this is the step over option.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=186)** If I click that first icon there, we'll see the execution has run that first line of code to generate the next int, and has now paused on the next line, which is determining whether that value is odd or even.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=202)** By stepping over a line, we allow that line to be executed.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=206)** Notice how now in our variables window at the bottom, the random variable exists in that variables panel and we can examine the value that was just generated.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=219)** We can also do more than just step over things.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=224)** So let's pause our program and now we're going to quickly create a function to extract the logic of generating our random value.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=236)** So I'll just come above the main function, generate a function called get random int, and I will simply copy and paste the random number generation, and then update the loop to use this new function.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=259)** Now, let's run the debugger again so that once again we stop at our break point when generating the random integer value.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=268)** If we click step over again, we will jump to the next line and see what the generated value is.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=277)** But instead, what if we want to see how that value is generated?
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=284)** So I'm going to go ahead and click resume program again, which will keep running until the next time the loop comes back and hits that random number generation.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=295)** So this time, instead of clicking step over, we want to click step into, which is the second arrow function here in that debug tool menu.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=307)** By clicking step into, we will follow the call stack and be taken to the body of the get random int function.
>
> **[5:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=315)** So effectively, rather than just calling get random int and moving to the next line, we actually move into get random int.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=325)** We can then use the step out debug option to return back to the line where we were generating the random int.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=338)** And now from there, we can go ahead and step over once again and see what the random number is.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=348)** Now, so far, in each of these examples, we've started by running our program with the debugger attached.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=354)** This then results in our first break point being hit.
>
> **[5:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=357)** And we start debugging from there.
>
> **[5:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=359)** But what if our bug only occurs under certain circumstances?
>
> **[6:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=364)** What if we only want to start debugging once our counter is greater than two?
>
> **[6:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=370)** We could simply run the debugger and click resume multiple times until we get to the counter value of two.
>
> **[6:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=378)** Or we could set a conditional break point.
>
> **[6:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=382)** Conditional break points are break points that only pause our application if a certain condition is met.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=389)** In this case, if our counter is greater than two.
>
> **[6:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=394)** So to set a conditional break point, let's start by setting our break point as usual.
>
> **[6:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=400)** So in this case, I am going to remove the one on the random number generation and set a break point instead where we determine whether it is odd or even.
>
> **[6:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=414)** Next, I'm going to right-click that break point and this brings up this tool window here, which will allow us to define a condition for this break point.
>
> **[7:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=427)** So within this condition box here, we can define the conditional logic and we have access to all the variables and properties that are within the same scope of this break point.
>
> **[7:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=440)** So in our case, we want the condition to be I greater than or equal to two.
>
> **[7:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=447)** So our break point will only stop then as soon as our I counter from the loop is greater than or equal to two.
>
> **[7:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=456)** Once we're satisfied with the condition, we can click done.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=460)** And now, if we run our code again with the debugger, we'll see that our break point is hit, but it's only hit once I equals two.
>
> **[7:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=470)** If we click resume again, we'll see I equals three.
>
> **[7:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=474)** I equals four.
>
> **[7:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=476)** And the program terminates.
>
> **[8:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=481)** Now, to round out this discussion of conditional break points, we're going to right-click on our break point once again.
>
> **[8:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=487)** And we'll see that in this menu here, there are several other options.
>
> **[8:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=492)** We could choose to enable or disable the break point by clicking the enabled box.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=498)** We can also choose whether to suspend all threads when a break point is hit, or just a particular thread.
>
> **[8:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=508)** By default, all threads are selected, which makes it easier to debug application in a multi-threaded program.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=516)** However, there are situations where you might not want that and you could customize that here if needed.
>
> **[8:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=524)** These debugging tools give us the flexibility to step in and out of function calls, step over lines of code, and repeatedly pause and run our code under specific conditions so we can understand where things went wrong.
>
> **[8:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=538)** Have you ever been in a situation in the past where you wished you could pause and inspect your code?
>
> **[9:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=543)** Would any of these tools have helped?
>
> **[9:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/stepping-through-code-14802635?u=76281980&t=545)** Knowing how to efficiently use these tools will make a huge impact on how quickly you can diagnose problems in your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (9), hit (7), [[Debugging]] (4), application (3)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** right-click (2)
> **Speakers:** - [speaker] (1)

#### Evaluate expressions and add watches
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=0)** - As we debug our code we're often inspecting values and calculations to understand if they are working as expected.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=8)** Sometimes we might have questions that the current code can't answer as it's currently written.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=14)** In these cases, we might wish that we could quickly perform a calculation or query using the current frame of the application without having to actually make a code change and redeploy.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=27)** We can address this exact scenario by using the evaluate expression tool and by adding watches.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=36)** So to demonstrate both of these tools, let's rerun our code to the first break point once again.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=42)** And then we we are going to step over our code to the point where the random value is generated.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=49)** And in this case, we've actually already set our break point to that point so we see the random value down here in our debug tool under the variables section.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=61)** Now, we have a line of code at this point that already checks if the generated random value is even or not.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=70)** But what if we wanted to check if the value is divisible by three or by five, if the value is divisible by three or by five, do we have to update the code again and redeploy it and then check?
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=82)** Thankfully, no.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=82)** Thankfully, no.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=83)** We can use the evaluate expression tool.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=86)** So in the debug tool window, in the upper toolbar, there should be a little icon that looks something like a calculator.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=94)** And as a hover over here, we'll see that it says, evaluate expression.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=98)** We're going to open up this tool.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=101)** And now within this, we have access to all the variables and everything else within the scope of the application at this point of suspension in the debugger.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=112)** And then we can use this tool to calculate the value of random expressions that we might want to evaluate and see how our code might behave under different circumstances.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=125)** So by default here, we see random is entered in and if we click evaluate, we will see what the current value of random is.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=133)** If I type random.rem(3)==0 and click evaluate, If I type random.rem(3)==0 and click evaluate, I can see result equals false.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=146)** So, this suggests that the random value is not divisible by 3.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=153)** This tool can dramatically speed up debugging by allowing us to evaluate expressions like this and answer questions that might come up as we step through our code.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=163)** All without needing to actually update the code, redeploy it and get back to this current debugging state.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=170)** If we find ourselves performing the same evaluations repeatedly, we can turn that expression into what is known as a watch.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=178)** The watch will become a part of the current debugging session and be updated accordingly anytime a dependent value changes, it's kind of like creating a virtual variable.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=190)** So let's take the case of checking whether our random value is divisible by 3 or not.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=195)** So we can come down into our tool window and in the variable section where it says evaluate expression or add a watch, I'm going to place my cursor and I'm going to type in that same random.rem(3)== 0 expression.
>
> **[3:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=207)** random.rem(3)== 0 expression.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=211)** So again, checking whether the current random value is divisible by 3 or not.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=217)** But this time, I'm going to come over to the right and where this little plus icon is that says add to watches, I'm going to click this.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=226)** We see, as soon as I add that to watches, now this expression is showing up in our variable section.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=233)** And so now, if I resume execution of the code, each time I hit this break point, we'll see that our random value changes and then by extension, our watch changes as well.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=245)** So this is why I said earlier, it's like a virtual variable.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=249)** So this lets us continuously see as we run through our code with the debugger whether or not these random values are divisible by 3.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=258)** So I'll click it again.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=259)** We'll see this one is not, again, this one is also not.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=265)** And we'll just click through until the code finishes and that's it.
>
> **[4:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=270)** Both of these tools, whether it's evaluating an expression or adding an expression to be a watch and seeing it update every time we hit a break point are incredibly useful.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=283)** And it's good to practice with them and to understand when and where to use them during your debugging sessions.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/evaluate-expressions-and-add-watches-14804065?u=76281980&t=289)** However, it's perfectly okay to pick one or two of these debugging tools that we've covered to start with and get more familiar with new ones as you practice and as you need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Debugging]] (5), application (2), hit (2)
> **CLI Commands:** make (1), find (1)
> **Analogies:** kind of like (1), it's like (1)
> **Definitions:** known as (1)
> **Speakers:** - as (1)


### 6. Working with Collections

[↑ Back to Table of Contents](#table-of-contents)

#### Arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=0)** - [Instructor] Let's discuss how we store collections of data in Kotlin.
>
> **[0:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=4)** The most basic data structure for this is an array, which behaves very similarly to arrays in other programming languages.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=12)** Let's take a look at how to create and work with arrays in Kotlin.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=18)** An array is a collection of values, typically of the same type.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=22)** Let's say we wanted to store five integer values, we could do so using the arrayOf function.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=30)** If we passed in five comma separated values here, this will create an array of size five with the elements 1 through 5, the type of the array will be inferred to be array of non-null int.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=47)** If we replace the last value 5 and instead use null, then the inferred type of the array will be nullable int.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=56)** The array of function is smart enough to recognize whether we are mixing nullable and non-null values.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=64)** If we want to create an array of some given size, and initialize it with all null values, we can use array of nulls.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=73)** So we could say, val nulls = arrayOfNulls, and we want that to be nullable ints, and we say 5 initial values.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=91)** So calling arrayOfNulls here, specifying the int type, and passing 5, will create an array of size five with five null values, and it will support us adding int values in the future.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=105)** So this will let us hold nulls or ints.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=109)** Alternatively, if we want to initialize an array in some other way, so another way besides specifying every value upfront or making everything null upfront, we can call the array constructor, and provide an initialization Lambda to define how each value should be initialized.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=128)** So in this case, we'll create a variable here called custom, and we will call the array constructor with 5 as the size of the array and then we will define the open and closed curly braces here to define our Lambda.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=146)** This Lambda is going to let us initialize the array however we want Within that Lambda, it's going to pass us an integer value representing the index in the array.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=158)** So for us, with an array of size 5 we will get indexes zero through four, and in this case, we just want to fill up the array with values zero through four, so we will just return the index value itself and that'll be our entire Lambda here.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=178)** So this will initialize the array with 5 values from zero through four, essentially creating the same array as we did in our very first example.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=189)** To access the size of an array, we can use the .size property.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=193)** So if we created a variable called sizeOfArray, we could set that equal to ints.size, and that would return 5.
>
> **[3:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=207)** To access values in array we can use get and set methods on the array.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=214)** So, if we wanted to get the firstValue we could call ints.get and pass 0.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=223)** We passed zero because collections in Kotlin including arrays are zero based, meaning the first index in any collection is zero.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=235)** And similarly, if we wanted to set a value in the array we could say ints.set, we specify the index of the value we want to set and then a comma, and then we pass in the value we want to set.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=250)** So in this case, I'll pass in 99 and we would set the first value of that array to be 99.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=259)** Now, one of the fun things about Kotlin is that it provides a lot of syntactic sugar, to make common operations a little bit easier, often trying to make them a little bit more concise or easier to read.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=273)** Now, one of these is that Kotlin provides an index access syntax for working with arrays that bypasses the need to call the get or set directly.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=283)** So instead of saying ints.get 0 to access the first element in array, we could actually used square brackets here and pass in the index that we want.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=298)** And similarly, rather than saying ints.set 99, we could say ints[0] = 99.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=307)** So this are equivalent, they're going to use the same code underneath the hood, but it's just a little bit of syntactic sugar that the compiler provides to us to make it a little bit easier to read and quicker to write.
>
> **[5:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=322)** If we need an array of some primitive types such as int or short, Kotlin provides additional array types specifically designed for storing values as primitives, rather than storing them as their larger complex object types.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=338)** Now, why is this helpful?
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=340)** It comes down to the size of each type a primitive int takes up less memory than int the object.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=348)** Most of the time we work with the complex type, but if we know we will be working with an array of a primitive, and we think that array might be rather large, we can take advantage of this more efficient array.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=362)** So to create an array of primitive ints, we could use the function intArrayOf, and again we will pass in our same five values.
>
> **[6:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=377)** And similarly, we could create an array of let's say, unsigned shorts, and to do that, we will use ushortArrayOf, and again, pass in five unsigned short values.
>
> **[6:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=401)** And here I will just fix my variable typo before heading on.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=406)** This pattern for creating primitive specific arrays applies not just to int or you ushort, but to really all the other primitive types as well.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=417)** Now, when we create these arrays, we often then want to process them in some way, and this often looping over an array, iterating over all the elements in that array, and doing something with the values.
>
> **[7:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=431)** So to iterate over items in array, we have several options.
>
> **[7:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=437)** We can use a basic for loop, so we could say for i in 0, until ints.size, and we will then use that counter i to access each individual value in the array.
>
> **[7:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=457)** And if we run this code now, we will see the five values set to our array.
>
> **[7:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=466)** So remember we see 99 because we set the first value in our ints array to 99, then we see 2, 3, 4, and null which again we set as the initial value.
>
> **[8:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=480)** Now, alternatively, we can also use a special element syntax that allows to iterate over each item directly without having to manage a counter.
>
> **[8:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=493)** So in this example, we would say for element in ints, element is going to be the name of each value in the array.
>
> **[8:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=503)** So we can call it element, we could call it index, value, whatever you want.
>
> **[8:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=509)** And now within this, rather than having to use a counter to look at the value into the array, we simply say println element, and if we run our code one more time, now we see our list duplicated again in the console output.
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=530)** Now our last option for iterating over an array is a functional option from the Kotlin Standard Library.
>
> **[8:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=539)** We can use the, forEach function from the Kotlin Standard Library to operate on each element of the array, or any other collection type for that matter as we'll see elsewhere in the course.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=552)** So in this case, we would say ints.forEach, and now within this Lambda we get access to every element in the array implicitly using it as we often do within a Lambda, so we could print out it in this case to print each value, to make this more readable however, we could rename that implicit reference to something like the previous example where we call it element, and once again we would print out element.
>
> **[9:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=591)** Now, before moving on, we're just going to comment out these last three examples, just so that we don't confuse ourselves, when we're looking at the at the output from our next samples here.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=604)** Now, one way in which arrays are commonly encountered in Kotlin, is when writing functions that take a variable number of arguments.
>
> **[10:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=614)** Let's say we want to write a function that takes in some greeting, and then prints out a variable number of greetings based on the arguments passed to it.
>
> **[10:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=624)** So we will write such a function now, and then play with it a little bit here.
>
> **[10:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=630)** So we will call this function, greetThings, it will take in a single greeting of type string, and this will be kind of our basic stub out function.
>
> **[10:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=645)** So now, how could we finish this function to allow us to print out a greeting for multiple things?
>
> **[10:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=654)** Well, one way in which we could do this, would be to pass an array directly to the function.
>
> **[11:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=660)** So we could do something like items as a parameter name, and it could take in an Array of type Any, and now within the function body we could say for item in items, println, and here we would substitute in our greeting argument value and the item value.
>
> **[11:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=692)** Now this would work fine, and in fact, if we come up into our Main function, we could call greetThings, with a greeting of let's say, Hey, and we could create an array of things to greet.
>
> **[11:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=708)** In this case, we might say Kotlin and Programming.
>
> **[11:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=716)** So this works great, but it requires us to create a new instance of an array anytime we call our function.
>
> **[12:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=724)** To simplify this, we can use the varargs modifier.
>
> **[12:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=729)** So let's look at how that is implemented first, and then we'll talk a little bit it more about what that means.
>
> **[12:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=735)** So down here on our items parameter, which is an Array of Any, we're going to add vararg as a parameter modifier here, and now instead of items being Array of Any, we're going to change it to simply Any.
>
> **[12:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=756)** And now notice that the function body here didn't change at all, we can still iterate over all of the items in that it's parameter, vararg parameters are treated as arrays by the compiler, but when we call our function we can pass the array values directly to the function without having to create a new array first.
>
> **[12:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=779)** So up here where we have greetThings, we can pass that array indirectly, if we want, or we could say greetThings, this time we'll say Hello, and this time we can pass in the things that we want to greet separately.
>
> **[13:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=800)** So notice in this case, it's much more fluent.
>
> **[13:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=803)** We don't have to separate out the greeting and then pass in this separate array that needs to be instantiated.
>
> **[13:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=811)** We can pass in all of the arguments very fluently, and the compiler will recognize that everything after the first argument belongs to that array of things to greet.
>
> **[13:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/arrays-14800814?u=76281980&t=825)** Arrays are a fundamental data type in any programming language, and it's important to have a solid understanding of them before moving on to other more complex data structures in Kotlin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (11), data (4), [[Programming]] (3), functional (1), next (1)
> **Code Identifiers:** greetthings (4), arrayofnulls (2), foreach (2), arrayof (1), sizeofarray (1)
> **CLI Commands:** make (4)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Lists
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=0)** - [Tutor] Lists are a core data structure of many programming languages and Kotlin is no different.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=6)** Let's dive into some code and learn to create lists in Kotlin.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=10)** Along the way, we'll work to understand the difference between mutable and immutable collection types.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=17)** We can create lists in Kotlin in several ways.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=20)** The most basic is to use the listOf function.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=25)** We can call listOf and pass in the items that we want to include in the list.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=32)** In this case, I'll pass in three strings, Kotlin, code and puppy.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=38)** ListOf is a generic function allowing us to infer the type of the list items based on whatever we pass in.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=46)** In this case, this will be inferred to be a list of string.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=52)** So if we explicitly call this out we could call this stringList and it would have a type list of string just like that.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=64)** If we wanted to have a listOfInt, we could say val listOfInt equals listOf, and if we pass in all Ints then the type will be inferred to be listOfInt.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=81)** Similarly to arrays, if we then pass a null value here this would be inferred to be a listOf nullable Int.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=91)** If we need more complex initialization logic for our first elements of the list, we can use another list builder function that takes a list size and an initialization Lambda.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=103)** So here, we'll say listOfInt of size five and we'll pass in an initialization Lambda.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=113)** This is very similar to how we can initialize an array.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=117)** So within the Lambda, we will get access to the index of that element in the list.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=126)** I'm going to rename the implicit argument value to index to make it a little bit easier to understand, and then to initialize our values, I want to double the index.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=138)** So I will say two times index and use that as that initial value in the list.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=146)** If we assigned this to a variable called doubledValues, and we then say doubledValues.forEach, println, it.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=164)** If we then print this out, we will see 0, 2, 4, 6, and eight all of the indices doubled.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=174)** And finally, if we need a simple emptyList of some type, say, as a default placeholder value we can call the emptyList function.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=183)** So if we wanted a collection called emptyStringList, we could assign it the result of calling emptyList of type string.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=197)** By specifying the string type explicitly when calling emptyList, our empty stringList variable will be inferred to be a list of string.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=210)** If we have this type explicitly defined on the variable we actually then don't need it when we call emptyList.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=218)** So whether it is on the variable type itself or when calling emptyList, we can define the type.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=224)** We don't have to do it in both places.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=227)** Accessing list elements is very similar to accessing elements from an array.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=233)** We can use available getter and an index to look up a value.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=239)** So here we'll define a variable called firstInt equals listOfInt.get and we'll pass them the index of zero.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=251)** So we're using the getter on our list passing in the index for the first value, and we should be able to pull out that first integer from our list.
>
> **[4:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=260)** Lists also support direct index access using brackets.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=264)** So if we wanted to get, let's say the second Int, we could a listOfInt and we could use brackets and pass in a one.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=277)** So under the hood, this will still use the getter but this provides us a little bit more concise syntax to access the elements directly as opposed to having to call that getter.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=288)** We'll explore some additional functions from the Kotlin Standard Library for querying and accessing elements from a collection a little later on.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=297)** Now we've seen how to access an element from a list, but what if we want to update an element or even add an element to our list.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=307)** Let's try adding an Int to our list ofInts.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=313)** So if we did something like listOfInt.add, we'll see that we get a compiler error here.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=321)** The IDE can't find any such method add.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=325)** Similarly, if we tried to use say, direct index access and try to update the first value in that list to a nine, same thing, we also get a compiler error.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=338)** So what's going on here?
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=340)** Why can't we modify this list?
>
> **[5:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=343)** Well, the answer is that Kotlin differentiates between mutable and immutable collection types.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=350)** By default list is an immutable type.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=353)** It does not allow for updating of values or for adding and removing of items.
>
> **[6:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=360)** To create a list that can be modified, we need to use a mutable list.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=366)** To create a mutable list, we can use the mutable list of function.
>
> **[6:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=371)** So let's create a mutable list of programming languages.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=376)** So I've got my languages variable, and now I will say mutableListOf, and just like before now I can pass in the items in my list.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=387)** So I could say Kotlin and Java to start.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=392)** So now I have a mutable list of size two.
>
> **[6:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=397)** But because this is a mutable list, I can update this however I want.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=402)** So I could change the first item in my list to be Kotlin with an uppercase K.
>
> **[6:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=412)** Notice here we're using direct index access and assigning a value directly.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=417)** We could also have done languages.set, and passed in zero and the value like this, we can also add an element to the end of our list by saying languages.add and passing in whatever string we want to add to the collection.
>
> **[7:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=440)** So in this case, we'll say JavaScript.
>
> **[7:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=446)** Now there are other types of add methods available to us.
>
> **[7:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=450)** We don't always have to add to the end of a list.
>
> **[7:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=454)** If we wanted to add something to a specific index we could pass in the index so that we one add an update and then pass in the value.
>
> **[7:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=464)** So in this case, we've added C++ as the second item in our list, by using that one for our index value.
>
> **[7:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=474)** And contrary to adding items we can remove specific elements as well.
>
> **[8:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=480)** So if we type languages.remove, we could pass in the specific string that we want to remove from our collection.
>
> **[8:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=491)** Or if we wanted to remove based on a specific index we could say removeAt, and in this case maybe we want to remove the first item in the list, we could pass in an index of zero.
>
> **[8:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=504)** Now let's talk a little bit about type compatibility.
>
> **[8:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=507)** Mutable list extends list.
>
> **[8:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=510)** This means if we want to have some generic list variable here.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=516)** So we have aList of type list of string, we can assign it the value created by a mutable list function.
>
> **[8:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=527)** So in this case, I will create a mutable list of values, dog and cat, and I can assign it to a list variable.
>
> **[8:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=538)** Notice though that once we've done this we've masked the underlying mutable list type.
>
> **[9:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=544)** We can no longer manipulate our list directly when working with the aList variable.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=549)** If I tried to say aList.add, we get a compiler error here, again because the variable itself is stored as the immutable type.
>
> **[9:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=563)** This is important to remember when deciding whether to use list or mutable list.
>
> **[9:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=568)** Often we want our public ABI to be immutable.
>
> **[9:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=572)** And so we would choose list.
>
> **[9:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=574)** Whereas within the implementation details of our class are function, we might want to manipulate the list, and so we would choose a mutable list.
>
> **[9:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=584)** Lists are one of the most common collection types in Kotlin.
>
> **[9:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/lists-14802628?u=76281980&t=587)** And thanks to their API design and the Kotlin Standard Library, developers have access to a concise syntax and a great deal of helper functions for working with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (10), [[Programming]] (2), generic (2), data (1), [[Java]] (1)
> **Code Identifiers:** listofint (7), emptylist (6), listof (4), alist (3), stringlist (2)
> **CLI Commands:** make (1), find (1), cat (1)
> **Env Vars:** ide (1), abi (1), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** just like (2), similar to (1)
> **Prerequisites:** initialization (3)
> **Speakers:** - [tutor] (1)

#### Sets and maps
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=0)** - [Instructor] Now it's time to introduce two more common data structures, sets and maps.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=5)** Both these data structures are incredibly useful and widely used.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=9)** We're going to explore how to create and work with both of them.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=13)** Like with lists, the easiest way to create a set in Kotlin is to use a builder function.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=19)** So let's define a variable called languages, and we want this to hold a set of programming language strings.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=26)** So I will use the setOf function here and then I need to pass in the strings that I want to be a part of this set.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=34)** So in this case, I'll pass Kotlin, Java and C++.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=41)** Oops. Need to make sure that last one is wrapped in quotes.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=44)** There we go.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=45)** So we have a set of Kotlin, Java and C++, and because of type inference here, we don't have to explicitly define the type.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=53)** But if we did, that type would look like this setOf non nullable string.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=61)** Now, let's remember what is special about sets.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=65)** They don't allow for duplicate elements.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=68)** So if we pass Kotlin twice when creating our set, the final set will only contain one instance of the string Kotlin.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=76)** So if we come back here to our invocation of the setOf function and we pass Kotlin a second time, the languages variable will only have one instance of that Kotlin string.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=88)** And we could verify this by printing out each element.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=91)** We can print out each element in much the same way as we can with lists.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=96)** So we could use the element for loop syntax here.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=101)** And we could say for language in languages, println language.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=110)** Now, if we run this code, we see Kotlin, Java and C++ printed out to the console.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=116)** And notice we only have one copy of Kotlin, which is exactly what we would expect when using a set.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=125)** Like all collections in Kotlin, we can access the size of our set by using the size property.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=132)** And we can check if an element is contained within this set by using the contains function.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=140)** If we print out the result of this contains invocation, we see true printed out because the string Kotlin is present in our set.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=153)** If we want to manipulate our set after it's been created, we need to use a mutable set.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=160)** We can create a mutable set by calling mutableSetOf instead of setOf.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=166)** So if I come back up here to our declaration of our languages variable, I'll change setOf to mutableSetOf.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=175)** With a mutable set, we can now add elements using the add method.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=179)** So if I type languages.add, here we actually see that we have a compiler error.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=187)** This is just a good reminder of the fact that just because we call mutableSetOf, it doesn't mean the type of our variable is automatically immutable set.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=196)** Remember, up here, we explicitly specified that the languages variable should be of type set, as opposed to mutable set.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=205)** So if we change set to MutableSet, now our add call is recognized by the compiler and we are free to pass in another language string here.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=221)** So if we come back up here, we could actually simplify this a little bit more by simply removing that explicit type declaration and relying on the compiler's type inference for us.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=234)** And to mirror the add ability, we can remove from our set as well, using the remove method.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=241)** And in this case, I will remove that string that we just added.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=248)** Our next data structure is map.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=250)** A map allows us to store key value pairs for efficient lookup.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=255)** Maps and their different implementations are one of the most useful data structures available to us.
>
> **[4:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=261)** To create a map, we'll use the mapOf function and create a read only map.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=267)** So to start, I'm going to create a variable called testScores, and then we will use the mapOf function.
>
> **[4:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=280)** So this is going to eventually create our immutable map.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=284)** And now we need to pass in key value pairs to this function, and then that will help the compiler infer the type of the map.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=293)** So the most explicit way to pass in these key value pairs is to create instances of the pair type and pass those to the function.
>
> **[5:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=301)** So we can do that by writing pair and then open and close parentheses to invoke the pair constructor.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=308)** And then we simply pass in the key and the value.
>
> **[5:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=311)** So in this case, let's say I pass 123 as a student ID and 91.2 as a test score.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=321)** And then maybe we want one more pair of ID to score in here.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=326)** So I'll type pair again.
>
> **[5:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=328)** This time the ID will be 456 and this score will be 84.5.
>
> **[5:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=334)** So now if I hover over test scores here, we see that its type is inferred to be a map with keys of type int and values of type double.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=347)** Now, creating a new instance of the pair each time to pass them into the mapOf function is a little verbose.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=355)** So the Kotlin standard library includes a helper function to more concisely create pairs.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=361)** We can use this infix function called to, to create a pair associating the value on the left and the right.
>
> **[6:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=370)** Now what this looks like is us defining 789 for a student ID again here, then writing to and then defining the test score here.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=383)** So effectively what we've done with this invocation is created a new pair and passed in 789 and 79.1 to it.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=393)** However, to is an infix function.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=396)** So really what we've done here is called the to function on the value 789 and passed 79.1 to it.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=406)** We will look in more depth at infix functions later on.
>
> **[6:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=412)** Once our map is constructed, we can work with it in several ways.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=416)** We can use index to look up to access the value for a given key.
>
> **[7:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=421)** So if we typed println here and then we said test scores, we used brackets and we pass in a key value here, this will print out the value for key 123.
>
> **[7:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=435)** And if we just print that out, we will see 91.2 as the last output in our console.
>
> **[7:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=442)** And this does map to the test score that we defined for key 123 in our map.
>
> **[7:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=449)** If we use a standard element loop, we can access each key value pair individually and we can get the key or value for that pair.
>
> **[7:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=459)** So we can say for record in testScores println score for user $, and now this is where it gets interesting.
>
> **[7:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=473)** So record here is actually returned to us as a pair, effectively, or really it's an entry in the map.
>
> **[8:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=484)** So if we type record, it's not going to be the value itself, it's going to be an entry representing the key value pair.
>
> **[8:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=491)** So if I want to then get the key for that record, I would say record.key and now we can continue on building my output string here.
>
> **[8:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=500)** So we say score for a user.
>
> **[8:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=502)** We substitute in the user ID was and then this time we'll say record.value.
>
> **[8:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=512)** If we print this out, we will see each of those key value pairs printed out to the console in our formatted string.
>
> **[8:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=524)** Having to iterate over each pair and then dereference both the key and the value can be a bit repetitive, so we can make use of destructuring syntax to extract both the key and the value into named variables when defining our loop.
>
> **[9:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=540)** So what this looks like, is rather than saying for record in testScores, which will give us a single value that ends up having to hold both the key and the value, we can define some parentheses here, and instead of one named variable, we'll define two, ID and score.
>
> **[9:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=564)** So what this is going to do is it's going to assign the key to our variable called ID and it's going to assign value to our variable named score.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=575)** So now in our string, rather than having to dereference the element in the loop, we simply replace in the named variables that we just defined.
>
> **[9:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=588)** Now, if we print this out, we'll see that same output that we saw before.
>
> **[10:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=600)** If we want to check that a map contains a specific key, in this case, a specific student ID, for example, we can use the .containsKey method.
>
> **[10:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=611)** So we could say testScores.containsKey and I could pass in a student ID key value here.
>
> **[10:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=620)** And similarly, if we wanted to check for the presence of a specific value, we can use the containsValue function and pass in a value that we want to look for within the map.
>
> **[10:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=635)** If we wanted to get a collection of all the keys in the map, we could do so by accessing the keys property.
>
> **[10:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=642)** This will give us back a set of all of the keys, and then we could print each of those out if we wanted to, for example.
>
> **[10:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=657)** So now if we run this, we'll see this last three lines of output here is simply printing out each key available in the map, in this case, each student ID that we've stored.
>
> **[11:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=670)** To round out our look at map, let's talk about mutable map for a minute.
>
> **[11:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=676)** If we want to modify our map after it's created, we'll need to use the mutable variant of our builder function.
>
> **[11:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=684)** So instead of mapOf, we will use mutableMapOf.
>
> **[11:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=690)** Now that we are working with a mutable map, we can add new values using index access syntax.
>
> **[11:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=698)** So, we'll write testScores and then we'll use brackets here.
>
> **[11:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=702)** And now we can specify a specific key and assign a value to it.
>
> **[11:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=709)** So if this key does not exist, we will add the key and specify that value for it.
>
> **[11:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=715)** Or we will simply update the value of that key, if it already exists.
>
> **[12:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=721)** If we didn't want to use index access syntax, we could use the put method to do the same thing.
>
> **[12:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=731)** We can remove a value by saying remove and passing in the key that we want to remove within the map.
>
> **[12:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=741)** Or we could explicitly update a value by calling replace and passing in the key that we want to replace and the updated value that we want to use.
>
> **[12:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sets-and-maps-14797842?u=76281980&t=755)** Now, you should have a basic understanding of how to start working with both set and map, and both of these will come in very handy as you continue to build your Kotlin applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (13), data (4), [[Java]] (3), [[Programming]] (1), next (1)
> **Code Identifiers:** setof (5), testscores (5), mapof (4), mutablesetof (3), containskey (2)
> **Versions:** 91.2 (2), 79.1 (2), 84.5 (1)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Working with collections
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=0)** - [Instructor] While collections such as list, set, or map are useful in their own right, the Kotlin Standard Library provides many useful helper functions that add even greater programming power to these collection types.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=13)** We're going to explore how to take full advantage of the Kotlin Standard Library as we learn to transform and query common collection types.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=22)** There are a number of common patterns across collection types that help make the collections easier to learn and work with.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=30)** Need to create a read only data structure, we can use our listOf, setOf, and mapOf functions.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=38)** So like we've seen, we could create a readOnlyList by invoking the listOf function.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=45)** We could create a readOnlySet by invoking a setOf
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=55)** or readOnlyMap by using the mapOf function.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=67)** And like we've seen if we need immutable versions of these common data structures, there are builder functions for those as well.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=76)** If we simply copy these first three examples, we will pace them down here and change these to mutableList.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=88)** And instead of listOf, we will use the mutableListOf function.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=94)** Similarly, we can use mutableSetOf to create a mutableSet variable and mutableMapOf to create a mutableMap.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=113)** And again, continuing in the pattern of consistency across collections, we can access the size of any of these using the size property.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=129)** We can check if a collection isEmpty or not by using the same isEmpty or isNotEmpty functions.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=136)** So in this case, we could check if our, let's say mutableSet.isEmpty by calling isEmpty or if our readOnlyList.isNotEmpty by calling the isNotEmpty function.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=154)** And we can also iterate over these different collection types using both the item based for loop as well as the forEach function.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=165)** So we could say for element_in readOnlySet, println element.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=179)** Or we could use the, forEach variant and say something like mutableMap.forEach.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=193)** In this case we can rename the lambda parameters to key and value.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=199)** And we could, let say, print out just the value.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=205)** And if we go ahead and just run this code, we'll see from our readOnlySet, we see the values one, two, and three printed out.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=218)** And from our immutable map, we see the values A and B printed out to the console.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=225)** Now, let's say we want to query for elements in a collection and maybe retrieve some of those elements.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=232)** We could use the first function which is available on several of the common collection types.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=238)** So for example, if we wanted to get the first element out of our readOnlyList, we could call the first function.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=246)** And similarly, if we wanted to work with our mutableSet, we could get the first item out of our mutableSet.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=255)** Maybe we want to take not just the first item but N number of items, we could use the take function for that use case.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=264)** So we could say mutableLis.take, and let's say we'll just take the first three items, or maybe readOnlySet.take two items.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=278)** Another really helpful method out of the Kotlin Standard Library for working with conventions is to use the filter function to filter a collection using some predicate.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=289)** This will then return a copy of the collection whose values satisfy the boolean condition.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=296)** So for example, let's say we want to work with our mutableMap here, and we want to filter out any of the key value pairs where the key is less than two.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=307)** So we could say mutableMap.filter.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=312)** This filter function is going to give us back each entry from that collection.
>
> **[5:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=316)** And remember a map entry includes a key and a value.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=321)** So we will name that implicit lambda parameter entry.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=326)** And for our boolean condition, the thing that we will use to to filter out values will say entry.key less than two.
>
> **[5:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=337)** For a different filter, maybe in our readOnlyList, we want to filter out values that are not greater than one.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=348)** So in this case, we could say it greater than one.
>
> **[5:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=352)** Now, remember it is the implicit name for the perimeter passed to a lambda.
>
> **[5:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=357)** So in this case, it would represent each value in that readOnlyList.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=363)** And as always, we could change the name of that it parameter to make it a little bit more meaningful and we could name it something like value, and then change our conditional expression to value greater than one.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=381)** Sometimes we may have one collection of data, and want to transform that into some other collection.
>
> **[6:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=390)** So take this map of programming languages for example.
>
> **[6:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=395)** So we're mapping the language name to some integer value.
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=403)** Let's say in this hypothetical scenario, the higher the value, the more popular the programming language.
>
> **[6:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=410)** Now, let's say that we want to transform this list into just an alphabetized list of strings representing the languages that score a four or better.
>
> **[7:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=420)** For this type of used case, we can combine these different types of collection functions that we've been working with to make this type of transformation very straightforward.
>
> **[7:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=431)** First, we can use filter to filter only languages whose value is greater than four.
>
> **[7:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=437)** So we can reference languages.filter, it.value greater than or equal to four.
>
> **[7:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=446)** Then we could use the map function to turn our collection of key value pairs into a list of strings.
>
> **[7:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=455)** So in this case, we'll say map, it.key.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=460)** So what we've done here is converted our map entries which contain a key and a value and we've simply converted that into simply the key.
>
> **[7:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=472)** So after calling the map function here rather than having a map of key to int, we will have a list of just strings representing those keys.
>
> **[8:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=484)** Then we could use the sorted method to sort the strings by their natural sort ordering.
>
> **[8:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=495)** And finally, we could print out each of these values by using forEach and calling println and passing in that string.
>
> **[8:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=508)** Now, if we go ahead and run this, we will see JavaScript, Kotlin and Python here.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=516)** And if we notice that those are in order, JavaScript having a value of four, Kotlin having a value of five, and Python having an order of six.
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=530)** This type of data transformation leverages these powerful functions to enable developers to write complex code in a very concise, easy to follow syntax.
>
> **[9:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=540)** And these functions are written to be generic so they can be used regardless of which type of collection we're working with.
>
> **[9:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=548)** Think of a time you've needed to transform a collection of data, would any of these standard library functions have been a helpful?
>
> **[9:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/working-with-collections-14799791?u=76281980&t=556)** As you continue working with Kotlin, you'll likely find that you turn to the Kotlin Standard Library often.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (7), data (4), [[Programming]] (3), [[JavaScript]] (2), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** readonlylist (5), readonlyset (4), mutableset (4), mutablemap (4), isempty (4)
> **CLI Commands:** make (3), python (2), find (1)
> **Analogies:** for example (3), such as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Sequences
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=0)** - The Kotlin Standard Library provides many helpful functions for working with iterable collections such as List.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=7)** These functions make complex processing of collections quite easy.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=12)** However, there are performance considerations to be aware of.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=16)** Let's start with sequences and, and discuss when to use sequences over other collection types.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=24)** When we work with iterable collections such as List or Set processing the collection with functions like filter or map create intermediate collections.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=33)** So let's just imagine that we have a variable here called languages and it is holding a list of programming languages.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=47)** There we go.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=48)** So we have a list holding Kotlin C++ and Java.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=52)** Now, let's say that we want to do something like a filter where we maybe want to filter out any languages whose length is not greater than four and then maybe we want to map this from the string to let's say simply the length of that string instead.
>
> **[1:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=78)** So each of these functions that we're applying to our collection here create an intermediate collection.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=85)** These intermediate collections are eagerly process meaning the filter or the map is carried out for every element in the collection, before the next function is applied.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=98)** For small collections like our example here, this might not be a big deal.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=103)** But for large collections or for collections that are going to undergo a lot filtering or other processing, the eager application of these functions can be computationally wasteful.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=118)** To help with this scenario, Kotlin introduces the concept of sequences.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=125)** Sequences are an iterable container providing much the same functionality as iterable which is what backs most of our common collection types but sequences have different performance traits.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=138)** Rather than eagerly applying a transformation to every item in the iterable container sequences apply all processing steps to each individual item.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=149)** You could think of sequence as being a depth first approach whereas iterable are more of a breath first approach.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=157)** So let's take a look at how we could actually create a sequence and there are several ways to create a sequence like with most things in Kotlin.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=166)** The most common way of creating a sequence is very similar to that of a List.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=171)** So we could say val_LanguageSequence = sequenceOf
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=180)** and we could pass in our same collection of language strings.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=188)** Another option for creating a sequence would be to do something like this: We could say val fromiterable = list of(1, 2, 3)
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=202)** and then once we have a collection, we could use the as sequence function to convert that collection into a sequence.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=214)** Now, when working with sequences, we have access to many of the same helper functions as we do with our other standard iterables.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=224)** We could filter out items again in this case any string whose length is not greater than four we could also then map out the values and convert into the length integer as opposed to the language string itself.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=248)** And we could also let's say take the first two items out of this processed collection.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=257)** Now, this is where the difference between sequences and iterables gets really interesting.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=264)** If we were working with an iterable, then in this process here where we're working with language sequence, both the filter and the map would be applied to every element in the original collection before the final call to take is made.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=284)** With sequences however, each element is transformed and evaluated until a terminal operator is reached.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=293)** So with an iterable, each filter is applied, then each map call and then finally the take two result is taken.
>
> **[5:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=305)** For large collections, this could be potentially very wasteful.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=308)** Imagine we have a collection of a million items and we only wanted to take two of those items having to do that filter and that map on every item only to then take two is wasting a lot of processing potentially.
>
> **[5:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=323)** So for large collections in this type of situation using sequence potentially has significant performance benefits when processing can be avoided for large portions of the collection.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=336)** So in the example of our language sequence here we're going to perform the filter and the map on each item individually before then coming back to the next item.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=348)** So we would call filter on the first item, then map on the first item and then take on that item, if it passes our filter.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=362)** Same thing we would get to the second item we would check if it passes the filter if it does, we would call map on it and then take it and then at that point we would be done.
>
> **[6:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=371)** Once we have two items there's no need to process any of the other items in the underlying and collection.
>
> **[6:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=378)** So when should you use a sequence as opposed to an iterable?
>
> **[6:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=382)** That's a great question.
>
> **[6:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=384)** There's not an exact science to it but there are some general guidelines to follow.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=389)** If you're working with smaller collections on the order of tens or hundreds then you're probably fine to use iterable.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=396)** If the size of your collections starts to grow into the thousands or more, you could consider a sequence especially if you're going to do a lot of filtering after applying transformation functions such as map or filter.
>
> **[6:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=410)** Don't stress too much about premature optimization of your code though.
>
> **[6:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=414)** If you think you might have a good use case for sequences but aren't sure?
>
> **[6:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/sequences-14802643?u=76281980&t=418)** You could always profile the performance of that code and compare the results to make an informed choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), next (2), [[Programming]] (1), [[Java]] (1), application (1)
> **Analogies:** such as (3), imagine (2), similar to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** sequenceof (1)
> **Tools:** terminal (1)
> **Warnings:** be aware (1)
> **Speakers:** - the (1)

#### Challenge: Filtering a list of data
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=0)** - [Instructor] Let's take on another challenge.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=7)** This time we're going to work with collections processing.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=11)** So back in IntelliJ, we're going to start by reviewing the collection of the provided data here.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=17)** We've created a map and stored it in a variable called test scores.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=23)** Each string value in this map represents a student ID and each double value represents a test score.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=32)** For this challenge, you're tasked with identifying the three students with the lowest test scores.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=38)** You're free to use any collection transformation functions you need such as filter, map, et cetera.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=47)** And here's a hint.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=48)** You may find it helpful to convert the map to a list to simplify the sorting and filtering of the data.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=55)** Now within IntelliJ, the scores are defined in testscores.kt, just to help keep them out of the way and easy to find.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=63)** You'll want to write your code within main kt.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-filtering-a-list-of-data-14799787?u=76281980&t=67)** And you should be able to access that test scores map without any trouble.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **CLI Commands:** find (2)
> **Tools:** intellij (2)
> **File Paths:** testscores.kt (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Filtering a list of data
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=0)** - [Instructor] How'd that challenge go?
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=7)** There's honestly a lot of ways we could go about solving this one.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=11)** So let's just chat through the thought process behind one such solution and you compare your results with this solution.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=19)** So I'm back here in IntelliJ and I've got my main.kt file where we're going to write the solution, but just to start, I want to take a look at test-scores.kt, and just review our data once again.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=31)** So we have our test scores variable holding a map of data and we have string values representing the student IDs that we want to ultimately identify.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=42)** And then we have these test score values.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=45)** So I'm going to come back over to main.kt.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=48)** And the first place that I would start is by wanting to filter the data.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=53)** We ultimately want to find the three lowest scores.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=57)** So filtering the data will be a must.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=60)** Now we can't easily filter a map by its values.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=65)** We could use the toSortedMap function, which I'll just write out here.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=75)** ToSortedMap would help us filter the keys in the map but it's not the most helpful thing here.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=83)** So the first step that we could use would be to actually take our test scores variable and convert that to a list.
>
> **[1:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=95)** Now the resulting list will include pairs of the student ID and the test score.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=103)** Now that we have a list of our test data, we can more easily sort the list based on the test scores.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=110)** For this, we can call the sortedBy function.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=117)** SortedBy takes a Lambda that we can use to determine what value should be used in the sorting comparison.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=124)** In our case, we want the test score which we can access as the .second property on each pair.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=131)** So we will name the implicit Lambda parameter pair and then we will access pair.second.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=141)** And just to help us identify what we've done here, we'll just say sort by test score.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=149)** Once we sorted the IDs and test scores, we really don't need the test score anymore.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=157)** So in this case, we could convert the pairs of ID and score to just a list of IDs.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=163)** And we'll do that by using the map function.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=167)** And again, we'll name the Lambda parameter pair.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=171)** And this time we will say pair.first.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=176)** So this will map to just the student ID.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=184)** Now that we have a sorted list of student ID numbers, we want to select the three lowest scores.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=192)** Since we sorted our collection, based on the score already all we need to do is take the first three elements from the collection.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=202)** And again, just for our note here, we'll leave a comment saying take three lowest values from the sorted list.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=212)** And now just to cap things off, we will print out each element in this final collection by using forEach and printing out that string representing the student ID.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=227)** So now to check our work, we'll print out the result of this code and we see three IDs printed out to the console.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=238)** So now if we open up our test-scores.kt file, we can just kind of visually check our work here.
>
> **[4:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=243)** So if we scroll through this, we see the lowest score here being a 62.1 which has an ID of 385agc.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=252)** And sure enough, we see that printed out as the first item in our console output.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=257)** For our second lowest, we have 66.1 which we see printed out as the second item in our output.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=264)** And the third lowest we have 72.1, which again is printed out to the console.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=274)** So how did your solution compare to this one?
>
> **[4:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=278)** Did you make use of any other functions?
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=281)** Can you think of other ways we might accomplish this same result?
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=284)** As with most things in programming, there's no perfect right or wrong answer.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=289)** In Kotlin, there's often many ways to accomplish the same task.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-filtering-a-list-of-data-14800815?u=76281980&t=293)** To help us pick the best solution to our problem, it's helpful to explore the Kotlin standard library and to look for helpful functions that might come in handy next time we need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Kotlin]] (2), [[Programming]] (1), next (1)
> **File Paths:** main.kt (2), test-scores.kt (2)
> **Code Identifiers:** tosortedmap (1), sortedby (1), foreach (1)
> **Versions:** 62.1 (1), 66.1 (1), 72.1 (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** intellij (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 7. Working with Inputs and Outputs

[↑ Back to Table of Contents](#table-of-contents)

#### Command-line arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=0)** - [Instructor] When we run and deploy our programs, sometimes we might want to control the runtime behavior by passing arguments to the program when it's executed.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=11)** This makes our programs more flexible and easier to adapt to different situations.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=16)** We're going to explore how to do this in Kotlin by passing command line argument to our main function.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=23)** So we've seen many examples of main functions so far in this course.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=28)** A basic main function may be defined with no parameters and has to have the name of main, like we see here.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=36)** And you'll notice that in this form, we have the green play button next to it and if we click that button, our main function will be run and in this case, nothing will actually happen because nothing has been told to happen inside of the main function body.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=53)** So in this form, the main doesn't allow us to pass and get access to any arguments when the function is called.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=62)** To support passing command line arguments to our program, we can update our main function to take in an array of strings.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=70)** So we do this like we would define any other function parameter.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=73)** So first I'm going to name the parameter args and then it will take in an array of string.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=82)** Now, it could also take in a vararg parameter, so we could change this to be vararg and we could call this args of type string.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=97)** And this will work as well, because any vararg parameter will be treated as an array of the given type under the hood.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=106)** So now, each value in our argument's array will represent an individual argument passed when our program is run.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=115)** And because those arguments are passed in an array, we can treat them as such, so we could access an individual argument.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=123)** So if we wanted to print out what the first argument was we could do something like this, where we call println.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=129)** We say, first arg is and then now we could say args and use index access to ask for the first item in the array.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=143)** Or we could iterate over every item in the array and so we could say something like for arg in our args, println arg.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=155)** So, in both of these cases, in the first one we're accessing the first element of the args directly, in the second case here, we are just trying to iterate over each passed argument.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=167)** Now, if we run this code, we actually see an exception printed out to the console here.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=176)** In particular we see an array index out of bounds exception.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=182)** Now, why do we think that might be?
>
> **[3:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=185)** Well if you guessed that it's because we haven't actually passed any arguments to our main function yet, you're correct, congratulations.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=193)** When working in IntelliJ, we can pass arguments to our main function by editing the run configuration for our application.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=202)** So to do that there's a couple ways, we could go to the run menu and then navigate down to edit configurations.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=213)** Or from within IntelliJ's toolbar, we could come up to this dropdown here next to the run button.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=221)** And in that dropdown button, we should also see edit configurations.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=225)** So I will just go ahead and select that.
>
> **[3:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=228)** And within this new popup there should be a field here called program arguments.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=236)** So within this, I can enter any command line arguments that I would like to be passed to my main function.
>
> **[4:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=243)** So in this case, I'm going to type Kotlin, Java and Go.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=248)** Now notice that these are simply separated by a space.
>
> **[4:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=253)** So now that we've defined our three parameters, we hit okay.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=258)** Now if we run our code again, we see first arg is Kotlin printed out and then we see Kotlin, Java and Go each printed out.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=267)** So this time when we've updated our run configuration, we've passed in those arguments, those arguments are then getting passed to our main function and we can access them through this args array.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=281)** Now, like we saw the first time we tried to run our code, if we're going to possibly take arguments we want to build in error handling.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=289)** So if our program requires arguments in some cases but none are passed, we could provide some type of useful feedback message to the user and try to prevent any such crash.
>
> **[5:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=300)** So, we could come up here to the beginning of our main function and we could check if the arguments array is empty and call println with some useful default message.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=313)** So we could say, if args.isEmpty print, please pass at least one argument and then we could return from our main function early.
>
> **[5:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=332)** So now if we run our code, again we still see the arguments printed out because we're still passing them to the main function.
>
> **[5:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=342)** But if we go back to our configurations and we remove those three parameters.
>
> **[5:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=351)** Now if we run our code, rather than crashing we see the output, please pass at least one argument.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=358)** So in this case our program's not doing anything particularly useful, but it's also not crashing, so it's an overall better experience for the end user.
>
> **[6:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=367)** By leveraging command line arguments, our programs can be configured to work in different environments and operate on different files or directories.
>
> **[6:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=377)** However, by opening up our program to take in those external arguments, we also have to account for additional error scenarios like empty arguments or invalid arguments.
>
> **[6:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/command-line-arguments-14797835?u=76281980&t=388)** So to help provide that great end user experience, we want to make sure that we're handling both the happy path, where we get the arguments we want and the error scenarios where might go wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), next (2), [[Java]] (2), application (1), hit (1)
> **Tools:** command line (4), intellij (2)
> **UI Navigation:** dropdown (2), go to (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** isempty (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Receiving user input
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=0)** - [Instructor] Receiving user input can make our programs much more dynamic and useful.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=5)** Let's look at how to receive input from the user and validate that input to ensure it represents a valid file.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=13)** The primary way of receiving input from the user is by calling readLine.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=18)** Let's first start by printing a prompt to enter a valid filename.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=23)** So we could do that by typing, print.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=27)** Now notice we're using print this time instead of println, this is just a small difference that will allow us to enter input on the same line as the prompt.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=36)** If you wanted the prompt to be on one line and enter the value on the next line, you could use println here.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=43)** Now the prompt itself will say, enter a filename and I'll add a colon just as a separator there, and then a space.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=53)** Now we can then receive input from the user by calling readLine and assigning the entered value to a variable.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=63)** So in this case, I'll say Val filename equals readLine.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=69)** And then we could print out the entered value to indicate that we did in fact receive the correct input.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=77)** So here, I'll type println, you entered $filename,
>
> **[1:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=89)** there we go.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=92)** So before we go any further, let's just print this out and test out how this is working so far.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=99)** So here, we've gotten our prompt to enter a filename and we can see our cursor here.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=107)** And now I might enter a filename.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=109)** Maybe I will call this file.kt and I'll hit Enter.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=115)** And then the program prints out, You entered file.kt and the program finishes.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=121)** So that's perfect.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=122)** Everything so far is working as we hoped.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=127)** Now, once we have our input, we can validate that the input is actually a valid file or not within the project's root directory.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=139)** To do that, we can create an instance of a file and check whether that file is valid or not.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=146)** So I'm going to create a new variable here called isValidFile.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=152)** And then I'm going to sign that the result of creating a new file using the file constructor.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=158)** When you type file and add the parentheses, you may be prompted to import the file.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=164)** You may notice here that now at the top of the file I see import [java.io](https://java.io).File.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=170)** This is going to pull in that file type from the standard set of Java components which we have full access to via Kotlin.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=180)** So to finish off creating my file then I want to pass in the filename that was entered by the user.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=189)** And now to check whether or not that is a valid file, we can access isFile here.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=197)** So if this is a valid file within the project's root directory, this will return true.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=202)** Otherwise it will return false.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=206)** Now the IDE here is actually giving us a helpful warning.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=211)** If I hover over filename here, it's saying type mismatched.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=216)** File expects a non-nullable string, but we've actually passed a nullable string.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=223)** So why is that?
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=225)** Well, it's because readLine is not guaranteed to return us a non-null string.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=232)** So to fix this, we could come back up here to our call the readLine, and we could use the Elvis operator here.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=240)** And remember, the Elvis operator is a question mark, colon.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=244)** And what this will do, is that if the result of readLine returns, no, then we will instead substitute in whatever's on the right hand side of the Elvis operator.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=254)** So now filename will either be a valid string from readLine or the default empty string.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=262)** And now if we come back down to creating our file, we see that the warning has gone away because now filename is guaranteed to be non-null.
>
> **[4:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=271)** So once we have a file and we know whether or not that file is valid, we can use that information to provide useful feedback to the user.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=281)** So we could do something like if is valid file println, it is a valid file,
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=295)** else println it is not a valid file.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=304)** So now if we run our code again, we'll once again be prompted for a filename.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=312)** So again, I'll just use a placeholder filename here for now, and I'll just call this file.kt and hit Enter and we'll see you entered file.kt, it is not a valid file.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=325)** So that is actually exactly what we would expect here.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=329)** Now let's try the happy path.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=330)** Let's open up our project directory window here and let's just look for the name of a file in our root project directory.
>
> **[5:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=339)** So again, the root project here is this one at the very top.
>
> **[5:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=342)** If I open this back up, we'll see a number of top level files here.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=347)** So for example, we could check for the existence of gradle.properties.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=353)** So I'm going to run the code again here, and this time when prompted to enter a filename, I will type great gradle.properties and I'll hit Enter, and this time it says that it is a valid file.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/receiving-user-input-14799789?u=76281980&t=369)** By prompting a user for input, receiving that input validating it and operating on it, we can build much more interactive applications that adapt to the needs of the individual user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (5), hit (3), [[Java]] (2), [[Gradle]] (2), next (1)
> **Code Identifiers:** readline (7), isvalidfile (1), isfile (1)
> **Definitions:** is a  (5)
> **File Paths:** file.kt (4)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **URLs:** [java.io](https://java.io) (1)
> **Env Vars:** ide (1)

#### Read and write to files
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=0)** - [Instructor] How do you read a list of test scores from a file or save processed data to a file for later use?
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=7)** Let's explore how we can work with file inputs and outputs in Kotlin.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=13)** Let's start with reading from files.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=16)** To get started, we'll create a new text file in our root project called scores.txt.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=23)** So to do that from IntelliJ, I'll open up the project directory window here.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=28)** And within the root project directory, I'm going to right click, go to new and file.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=36)** And I'm going to name this file scores.txt and hit enter .
>
> **[0:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=43)** In that file, we'll add a list of data representing user IDs and test scores separated by a colon.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=52)** So I'm just going to paste in some example data here.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=56)** So here we have seven pairs of ID and test scores.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=63)** So now back within our main.kt file, we want to read that file in and store it as a variable.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=73)** So to do so, we will create a variable called scoresFile and then we're going to create an instance of the file.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=83)** And when prompted by the IDE to import that, we can move our cursor over the file name and hit Alt + Enter and that will import the file type for us.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=97)** And now within the file constructor, we want to pass the name of the file.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=102)** So for us, that will be scores.txt.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=107)** Now, we have a reference to our scores file.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=111)** Once we have a valid file, there are a couple of ways to read from that file.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=117)** The easiest is to call for each line which will read the file and call us back with each mine in that file, while also automatically closing the file for us.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=128)** So that would look something like this.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=130)** Where we would reference the scoresFile variable and we would call four each line and then pass a Lambda to that function.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=140)** To print out each line of that file, we could simply use println.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=147)** So to start, we will do that like this, println, and we pass in it as the implicit Lambda parameter representing each line of the file.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=161)** And to just be a little bit more explicit here, we will rename that implicit Lambda perimeter as line.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=169)** That way it's more clear, that we are iterating over each line in the file and printing out individual lines.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=177)** So, now if we run our program here, we will see the output of that scores TXT file, printed out to the console.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=190)** Now, let's say we want to take those lines that we read in from the file, sort them and write them out to a new file.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=200)** For that, we could use another useful function called read lines, to go get a list of all lines in the input file and we'll then call to sorted on that list to sort out all those lines.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=216)** So we'll create a new variable here called sorted lines equals scoresFile.readLines and then we will call sorted on that list.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=233)** So now that we have this sorted list of lines from that file, we want to write that out.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=239)** And to write output to a file, we need to set up the file that we want to write to.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=246)** So we're going to write out to a file called sortedscores.txt.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=251)** So we'll create a variable to hold this output file.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=255)** And again, we'll create a new instance.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=256)** A file passing in the name of that output file, sorted-scores.txt.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=265)** Now, once we have this output file setup, there are a number of different ways we could go about actually writing to that file.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=273)** But perhaps the easiest for our use case, is to convert our file to an instance of path.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=281)** And we can do that by simply calling topath on that file once it's created.
>
> **[4:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=290)** By converting to a path, we open ourselves up to some specific APIs that make writing lines out to a file path quite easy.
>
> **[5:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=300)** So once we have that output file variable, storing the path instance pointing to sorted-scores.txt, all we have to do is say, outputFile.writeLines and we can pass in our sorted list of lines that we want to be written out to that file.
>
> **[5:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=323)** Now, if we check our route directory here, we'll see at the moment, that there is no sorted-scores.txt file.
>
> **[5:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=332)** However, if we run our code, we see our output from printing out each line.
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=340)** But more interestingly, if we open up the project directory viewer again, we now see sorted-scores.txt.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=349)** And if we open that up, we will see in fact that the scores have been sorted based on the user IDs.
>
> **[5:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=359)** We've only touched the surface of file input and output in Kotlin.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/read-and-write-to-files-14798817?u=76281980&t=362)** But with these fundamentals, you have everything you need to start working with file I/O in Kotlin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Kotlin]] (3), hit (2)
> **File Paths:** sorted-scores.txt (4), scores.txt (3), main.kt (1), sortedscores.txt (1)
> **Code Identifiers:** scoresfile (3), readlines (1), outputfile (1), writelines (1)
> **Env Vars:** ide (1), txt (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)

#### Challenge: Parsing a list of data from a file
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=0)** - [Instructor] Here's the challenge to help reinforce the concepts of user input in File IO.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=10)** You are tasked with writing a program that helps the teacher find the students with the highest test scores.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=16)** Within IntelliJ, the test scores will be available within a scores.txt file.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=24)** Back within IntelliJ, test scores are located within scores.txt and have the following structure, user ID colon score.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=33)** Each ID score pair is on its own unique line.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=38)** When you run your program, it should prompt the user to enter the name of the file containing the test scores.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=44)** The program should then read each line from the file, sort the scores from highest to lowest, pick the three highest scores and write the user ID score pairs to a new file named sorted.txt.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=59)** Back in IntelliJ.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/challenge-parsing-a-list-of-data-from-a-file-14802633?u=76281980&t=61)** you'll write the code to complete the exercise within main.kt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (1)
> **File Paths:** scores.txt (2), sorted.txt (1), main.kt (1)
> **Tools:** intellij (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Parsing a list of data from a file
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=0)** - Let's take a look at one way which we could solve this challenge to build our test score processing program.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=12)** To start, let's build the user input To start, let's build the user input so we can read the file name from the user.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=19)** We'll prompt the user to enter the name of the scores file and then read that input from the user storing it in a variable.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=26)** So the very first thing we'll do here is to prompt the user to enter the name of the file.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=32)** So I'll say, enter the name of the file containing scores.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=35)** So I'll say, enter the name of the file containing scores.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=41)** And then, we will create a variable called input file name and assign it the value of read line.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=47)** and assign it the value of read line.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=51)** And because read line m And because read line might be no,ight be no, we'll use the Elvis operator here and provide a default of empty strength.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=60)** Next, let's add in a little error handling to prevent against any type of empty input.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=67)** So we can check if the file name is null or empty and if it is, print a message to the user and end our program.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=74)** So we'll say, if input file name is null or empty So we'll say, if input file name is null or empty println not a valid file name not a valid file name and return.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=90)** and return.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=93)** Now, notice here that with isNullOrEmpty, it's highlighted by the IDE.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=99)** And it's saying that the call on the not null type may be reduced to simply is empty.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=105)** Now, the reason for this is that we've already checked the input file name is not null up above when we provided a default value.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=114)** So we could solve this in a couple ways.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=116)** We could move our cursor over the is null or empty call, hit alt+enter and then hit enter on the option to change call to is empty.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=126)** So this will would be one way to simplify things.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=129)** Or we could continue to use is null or empty and skip the use of the Elvis operator on the read line call.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=139)** So, either of these will work.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=141)** In this case, I'm going to go with the basic read line.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=144)** And then down below, I will check for both the null case and the empty case.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=151)** At this point, we know that we should have a non-empty string representing the file that we want to read in.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=159)** So now, we can create a file from the file path and check if that file is valid.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=166)** So we'll create a variable called inputFile = File So we'll create a variable called inputFile = File will pass in that input file name.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=175)** We will be sure to import the file type.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=179)** And now, if input file is not a valid file, And now, if input file is not a valid file, And now, if input file is not a valid file, we'll go ahead and simply return.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=192)** Next, we want to set up a variable to read in the ID score pairs from the input list.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=197)** ID score pairs from the input list.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=200)** So let's say, val rawScores=inputFile.readLines So let's say, val rawScores=inputFile.readLines So let's say, val rawScores=inputFile.readLines So this should read in each individual line.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=214)** And if we remember from scores.txt, And if we remember from scores.txt, each line then is formatted in a particular way with the ID, separate by the colon and then the actual score.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=227)** So, to be able to complete our challenge and figure out which scores are the highest, we'll want to parse these scores and split out the values.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=238)** So I'm going to create a variable called parsedScores So I'm going to create a variable called parsedScores and then we're going to work with the raw scores input here.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=248)** So we're going to say rawScores and we're going to map each line and we're going to map each line and we're going to convert each streamline into a pair containing the ID and the score.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=264)** And so to do that, we're going to make use of a couple of functions here.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=267)** So first, we'll create a variable called elements and we'll assign it the result of saying line.split and we'll use a colon as our delimiter here.
>
> **[4:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=280)** So what this is going to do is take in each line that we read in and then split this string based on that colon.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=289)** Now what we can do is access the different elements Now what we can do is access the different elements of this split array and use that to create our pair of ID to score.
>
> **[5:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=300)** So in our map here, we will return the result of saying elements 0 we will return the result of saying elements 0 which will represent the ID to elements 1 to elements 1 which will represent the score.
>
> **[5:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=315)** Now that we have access to the actual score values, we can use that data to sort the results and take the highest three.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=325)** So we'll set up a variable called final scores and that will be equal to parsedScores.sortedByDescending and that will be equal to parsedScores.sortedByDescending and that will be equal to parsedScores.sortedByDescending it.second it.second it.second and then we will take 3.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=345)** and then we will take 3.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=347)** and then we will take 3.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=353)** So, what we've done here is take the parsed scores, we've sorted them in descending order using the second value of each pair.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=362)** So if we go back to our previous variable there, the second value of each pair should represent the score.
>
> **[6:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=368)** So this is going to sort the scores in descending order.
>
> **[6:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=372)** And then we take 3 to get the three highest scores.
>
> **[6:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=377)** Now, the last thing to do is to write to the file.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=381)** So to prepare for writing, we will create our output path.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=387)** And remember, we want that output file to be called sorted.txt.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=389)** to be called sorted.txt.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=393)** And we want to work with the path API for writing output lines.
>
> **[6:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=398)** So we will convert the file to a path using that two path function.
>
> **[6:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=404)** Now, we don't simply want to write out just the scores or just the IDs, we want to write them out in the same format in which we read them in.
>
> **[6:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=415)** So, we need to format the final scores into a format a little bit easier to write.
>
> **[7:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=421)** So we'll do this by creating a variable called output scores and assigning it the result of finalScores.map.
>
> **[7:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=434)** And in our mapping function here, we will use a string template to set up the same string format that we were using when we read them in.
>
> **[7:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=444)** So that will be it.first: So that will be it.first: So that will be it.first: followed by it.second.
>
> **[7:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=451)** followed by it.second.
>
> **[7:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=454)** And now, we can use outputPath.writeLines And now, we can use outputPath.writeLines pass in the output scores.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=463)** And this should print out the values that we expect to our sorted.txt file.
>
> **[7:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=470)** So, if we go ahead and run this code, So, if we go ahead and run this code, we see here that we are prompted to enter the name of the input file.
>
> **[8:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=482)** So, that will be scores.txt.
>
> **[8:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=483)** So, that will be scores.txt.
>
> **[8:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=488)** And our program then finishes.
>
> **[8:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=491)** If we look at the project directory here, we now see that we have a sorted txt file.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=498)** And if we open that up, we will see those highest three scores.
>
> **[8:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=502)** We see 98, 91 and 88.
>
> **[8:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=503)** We see 98, 91 and 88.
>
> **[8:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=506)** If we check that against the input, sure enough, we see 98, 91 and 88 sure enough, we see 98, 91 and 88 as the three highest scores from that input file.
>
> **[8:38](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=518)** So, how was your solution?
>
> **[8:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=520)** Was it similar to what we just walked through?
>
> **[8:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=522)** Did you find different ways to process the input or right to the file?
>
> **[8:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=527)** However you solved the challenge, this type of problem closely mirrors the types of challenges we might face in a production code base.
>
> **[8:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/solution-parsing-a-list-of-data-from-a-file-14802642?u=76281980&t=534)** And as we've seen, Kotlin provides many tools for solving those types of challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (2), next (2), hit (2), data (1), api (1)
> **Code Identifiers:** inputfile (5), parsedscores (5), rawscores (4), readlines (3), sortedbydescending (3)
> **File Paths:** scores.txt (4), sorted.txt (3)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** ide (1), api (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)


### 8. Testing Kotlin Code

[↑ Back to Table of Contents](#table-of-contents)

#### Writing JUnit tests
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=0)** - Testing is an important part of writing production quality code with any programming language.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=6)** We're going to learn to write basic unit tests in Kotlin using the popular test framework JUnit.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=13)** Now, before we can write our first JUnit test, we need to add the necessary dependencies to our project.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=19)** So within IntelliJ, we'll navigate over to our project viewer, and we want to open up the build.gradle.kts build script file.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=30)** Here we want to scroll down until we find the dependencies configuration block.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=36)** Here we want to make sure that we have added the Kotlin test dependency to our testImplementation class path.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=44)** This will make testing classes and functions available within our test code.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=49)** Now, this is likely already in place from when you created your Kotlin project, but if it's not, you want to configure it as you see here.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=59)** Now, once the test dependency is added, we also want to make sure that our tests are configured to use JUnit by default.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=67)** So below that you should see a test task configuration block marking each test as use JUnit.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=76)** This will help us pull in the JUnit testing framework dependencies that we want to work with when defining our unit tests.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=85)** Once we're sure our builds is configured properly, we can resync our project just to be sure the IDE will recognize these new dependencies.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=94)** To resync the project can open up the Gradle tool window from the right-hand side of the screen here or navigate to View, Tool Windows, scroll down until you find Gradle, And within that Gradle tool window, in the menu, there should be this Reload All Gradle Projects button.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=115)** If we click that, it will resync the project and make sure that all needed dependencies are ready to be used.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=124)** Now we're ready to create our first test class.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=128)** To do this, we will navigate to our project window on the left side of the screen, and we will navigate to src, test, kotlin.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=138)** And then we will right-click, select New, Kotlin Class/File.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=144)** We're going to select to create a new Class, and we're going to name that class RandomNumberGeneratorTest and then hit Enter.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=157)** This class is where we will write all of our individual unit tests.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=162)** Our first test is going to be quite basic.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=165)** So I'll just hit Enter a couple times, come down into our class body.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=169)** And we're going to write a function called verifyTrueIsAlwaysTrue So for this test, we're going to do what the function name suggests and simply verify that the value true is always equal to itself.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=186)** And to do this, we will use an assert function and pass the expression true == true.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=195)** Assertion functions will throw an exception if the past expression evaluates to false.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=202)** So in this case, if true equals true, our test will pass.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=205)** Otherwise our test will fail.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=208)** Now for the final step here, we need to indicate to the JUnit test framework that this function is actually a JUnit test as opposed to a regular function.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=219)** So for the final step, we will mark this function as an actual test by adding the @Test annotation.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=227)** Now, once we've written @Test, we will be prompted to pick from a couple different available test types here.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=235)** We want to make sure that we are selecting the one coming from the org.junit package and hit Enter.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=241)** You'll know you've done it right if at the top of the file you now see import org.junit.Test.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=249)** Once the annotation is added, the IDE will now recognize our test and test class as test elements that maybe run invalidated.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=259)** If we click the little play button on the class name, this will run tests for the entire test class.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=268)** And down in the tool window that popped up, we see this Test Results drop down here.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=275)** And if we click this dropdown, nothing happens at the moment because everything was successful.
>
> **[4:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=280)** However, as we'll see in a minute, if we had failing tests here, we could use this to drill deeper and see which tests were failing.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=288)** If we wanted to run just the individual test that we've written, we can click the play button next to that individual test and we will see the same output window pop up.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=298)** And notice in this case, like we've already saw, our test succeeded because true is always equal to true.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=307)** If we change this expression to assert that false equals true and we rerun the test here, this time we see failing test results.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=321)** And in the little test window here at the bottom, we see that we had a failing test within the RandomNumberGeneratorTest class.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=329)** And then below that nested, we see which specific test failed.
>
> **[5:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=333)** And in the test output we can even find which specific line failed.
>
> **[5:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=339)** And if we click on that, in the editor it'll actually take us directly to that line making the test easy to locate.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=349)** When writing tests, we typically follow the same general pattern.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=353)** We set up the test variables and conditions, call the function or method that we want to test, and finally, we validate the expected and actual values.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=363)** We've already seen how assert can be used for a trivial test.
>
> **[6:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=367)** So let's build on that example as we add additional, more interesting tests.
>
> **[6:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=372)** To start, we're going to write a function that returns an integer value between zero and some passed max value.
>
> **[6:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=382)** Now we want to simulate how we would do this in a real code base.
>
> **[6:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=385)** So we are going to write this test in our main source directory.
>
> **[6:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=390)** So we're going to open up Main.kt which lives under src/main/kotlin.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=396)** And above our main function here, we're going to this new getRandom function.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=402)** GetRandom will take in an argument called max of type int.
>
> **[6:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=409)** And for its implementation, we will generate a random integer value using the Random class from Kotlin.
>
> **[7:04](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=424)** And we will pass our max value to nextInt.
>
> **[7:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=428)** Calling Random.nextInt with this max value will generate a random number between zero and whatever that max value is that we passed.
>
> **[7:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=439)** Now we'll return to our RandomNumberGeneratorTest class.
>
> **[7:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=446)** If our expectation is that this getRandom function returns a positive value between zero and some max value, we can write tests that validate this.
>
> **[7:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=457)** So we're going to write a new test function.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=460)** And this time we will use a special function naming syntax that Kotlin supports specifically for test code.
>
> **[7:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=468)** So to start, we will write our @Test annotation, the fun keyword, and now, rather than jumping in and writing our name directly using the same naming patterns that we might typically use for a function, we're going to add backticks.
>
> **[8:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=485)** And now within these backticks, we can define our name using human readable text.
>
> **[8:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=490)** So we can name this getRandom returns value between 0 and 100.
>
> **[8:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=500)** So now this is our test name and so when we see this test name in our output, it becomes very easy to read and understand what to expect from this test.
>
> **[8:31](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=511)** Now to finish implementing this test, we'll create a variable called random and assign it the result of calling getRandom and passing in 100.
>
> **[8:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=523)** And finally, we want to assert that that random value is within the range of 0 to 100.
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=530)** So again, we'll call assert and this time we will use the expression random in 0 to 100.
>
> **[8:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=539)** So I'll generate a range from 0 to 100 and assert that the value random is within that range.
>
> **[9:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=546)** And now we can go ahead and test this by running that function a couple of times.
>
> **[9:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=553)** We'll see that the test passed that time.
>
> **[9:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=557)** However, because we're dealing with random values here, there could be some inherent uncertainty so we'll just run this a couple more times to verify that each time we run it, it seems to pass.
>
> **[9:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=569)** And sure enough, we've run it three times and it passed each time.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=575)** So this is kind of a positive test.
>
> **[9:37](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=577)** We have some expectation and we are asserting that that expectation is always met.
>
> **[9:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=583)** Now, what if we wanted to write a negative test here?
>
> **[9:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=587)** Let's say we want to verify that an illegal argument exception is thrown when a negative value is passed to our getRandom function.
>
> **[9:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=597)** So this is kind of a test to verify that our function fails in the way we expect.
>
> **[10:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=603)** So once again, we'll start off by defining a new test by adding a test annotation.
>
> **[10:09](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=609)** And at this time the function will be named getRandom throws exception when negative value is passed.
>
> **[10:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=626)** And now we will call getRandom and we will pass in a value of -1.
>
> **[10:36](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=636)** So if we run this test now, we will see that the test fails by throwing in illegal argument exception.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=646)** However, in this case, throwing that illegal argument exception is actually what we expect.
>
> **[10:52](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=652)** That's how we think that our function should fail.
>
> **[10:56](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=656)** So in situations like this, we can actually modify our test annotation and indicate to it that we actually expect a particular exception to be thrown.
>
> **[11:07](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=667)** So we could you that by adding parentheses after our test annotation and then we will use named argument syntax here to assign an exception type to the expected argument value here.
>
> **[11:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=682)** So we will pass a IllegalArgumentException::class.
>
> **[11:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=689)** So this is now telling this test that when it runs, we expect an illegal argument exception to be thrown, and if it isn't, then fail the test.
>
> **[11:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=699)** If illegal argument exception is thrown, then treat this test as if it passed, because that's our expected outcome.
>
> **[11:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=707)** So now if I run this again, this time we see that our test passed, because that exception was in fact thrown.
>
> **[11:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/writing-junit-tests-14800827?u=76281980&t=718)** By writing unit tests for your Kotlin code, you can build greater confidence in that code and be more assure that it will perform the way you expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (9), [[JUnit]] (9), [[Gradle]] (5), hit (3), [[Programming]] (1)
> **Code Identifiers:** getrandom (7), nextint (2), testimplementation (1), verifytrueisalwaystrue (1)
> **UI Navigation:** navigate to (3), scroll down (2), in the menu (1), right-click (1), dropdown (1)
> **CLI Commands:** make (5), find (3)
> **File Paths:** build.gradle (1), main.kt (1)
> **Env Vars:** ide (2)
> **Prerequisites:** configure (1), set up (1)
> **Tools:** intellij (1)

#### Mocking data
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=0)** - [Instructor] Sometimes it's not possible to easily set up the environment for a specific test.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=5)** This could be due to types that are not open for extension, complex dependency graphs, or other reasons.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=13)** In these situations, it can be helpful to mock out the data and responses that we need to effectively write our test.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=20)** Mockito is a popular mocking tool for Java development and works great for Kotlin code as well.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=28)** So here's a testing scenario for us.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=30)** If we open up our code here, we'll see that we have an AnalyticsClient interface, and this interface allows us to track some analytics event.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=42)** And we also have a ViewModel class.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=47)** That ViewModel class takes in an instance of an analyticsClient, and it has a public method called submitClicked.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=57)** And when that button is clicked, it should track an analytics event using that analyticsClient.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=63)** Now our task is to write a test that validates the tracking of that analytics event when submitClicked is called.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=73)** So to start, we'll go to our project window, navigate to source, test, kotlin, right-click, select New Kotlin Class or File.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=85)** And we will create a new test class called ViewModelTest and hit Enter.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=94)** Then within the ViewModelTest class, we will create a new test using our @Test annotation, importing the org.junit.Test annotation.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=108)** And we will name this test trackEvent is called when submitClick is called.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=121)** So here we have our test method, and we want to verify that any time viewModel.submitClick is called, trackEvent is called on the AnalyticsClient interface.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=132)** Now this is where it gets interesting.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=134)** We need to create some instance of the AnalyticsClient interface.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=139)** We could create a class to extend that interface and use that for our test, or we could create an anonymous object expression to create an instance.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=149)** We'll learn more about both of those strategies later in the course.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=154)** In both of these cases, we'd have to implement the full interface, but really all we care about is whether or not the track method is called.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=163)** What it actually does isn't the focus of this test.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=167)** So this is where mocking can be really helpful.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=169)** We can mock the object, in this case our AnalyticsClient interface, and we can verify the behavior of that object without actually implementing any of that behavior.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=180)** So to do this, we need to first pull in the Mockito dependency.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=185)** We can do this by opening up our build.gradle.kts file.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=190)** And within our dependencies configuration block, we need to add the Mockito core dependency to the testImplementation class path.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=199)** Now here I already have it, it's just commented out.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=202)** So I'm going to uncomment this.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=206)** And then I will resync my Gradle project so that that dependency is pulled in and made available to me.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=215)** Now once Mockito has been added to the project and we've resynced, we can return to our test.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=222)** And now we can call Mockito.mock to create a mocked instance of our AnalyticsClient interface.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=230)** So I'll create a variable called analytics and assign it Mockito.mock.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=239)** And that mock method will take in a class type to mock out.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=245)** So in this case, it'll be AnalyticsClient::class.java.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=252)** Now when prompted to import the Mockito type, we want to make sure that we import it from org.mockito.Mockito, as we see at the top of the file.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=265)** Once we have our mocked AnalyticsClient, we can create new instance of our ViewModel.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=272)** And we can use that mocked instance of the AnalyticsClient to pass to our viewModel constructor.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=281)** So that is the setup portion of our test.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=284)** And now we want to exercise the submitClicked method by calling viewModel.submitClicked.
>
> **[4:54](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=294)** And finally, we can call Mockito.verify to assert that analyticsClient.track is called.
>
> **[5:02](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=302)** So we can do this by typing Mockito.verify.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=308)** We'll pass in analytics as the mock object that we want to verify that something happened with.
>
> **[5:15](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=315)** And then we will call track.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=318)** So what this is saying up to this point is that we want to verify that the track method was called on our mocked analytics variable.
>
> **[5:27](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=327)** And then track takes in some string parameter as part of its API.
>
> **[5:32](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=332)** So we need to tell it what string we should expect here.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=335)** So we could tell it to expect a particular string like kotlin.
>
> **[5:40](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=340)** This would make our test a little bit less flexible though.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=344)** So we can leverage another feature coming from Mockito which are matchers.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=349)** Matchers will help us do pattern matching for different types of expected inputs or outputs.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=355)** So rather than specifying a specific string here, I could type anyString and then import that matcher from Mockito.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=366)** So if you look up at the top of our file again here, we see that we've imported the anyString function from org.mockito.ArgumentMatchers.
>
> **[6:17](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=377)** So now what our verification line is doing here is it's going to verify that the track method was called on our mocked interface with any string value.
>
> **[6:29](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=389)** It doesn't matter what it is as long as it's some valid string value.
>
> **[6:35](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=395)** Now if we run this test,
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=403)** we should see that the test passes because the submitClicked method does, in fact, call analyticsClient.track.
>
> **[6:51](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=411)** If we just look at our ViewModel, we can see sure enough analyticsClient.track is called whenever submitClicked is called.
>
> **[7:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=420)** If we were to comment out that line of code and rerun our test here, we'll see that this time our test fails.
>
> **[7:12](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=432)** And if we dig into our test input here and look at the failure, we will see this message indicating that analyticsClient.track was expected but was never actually invoked.
>
> **[7:24](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=444)** This indicates to us that our expectation around that interface being used was not in fact met.
>
> **[7:33](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=453)** So this strategy can be a good way to validate that our classes and functions are operating the way we expect.
>
> **[7:42](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=462)** Mocking is a useful tool, but like any tool, it's not always the right tool for the job.
>
> **[7:49](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/mocking-data-14799790?u=76281980&t=469)** Before reaching for a mocking tool, carefully consider whether you can set up your test without it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Analytics]] (6), [[Kotlin]] (4), [[Java]] (2), [[Gradle]] (2), data (1)
> **Code Identifiers:** analyticsclient (6), submitclicked (6), viewmodel (3), trackevent (2), submitclick (2)
> **Definitions:** is called (9), is a  (2)
> **UI Navigation:** go to (1), navigate to (1), right-click (1)
> **Prerequisites:** set up (2), setup (1)
> **File Paths:** build.gradle (1), class.java (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=0)** - [Instructor] As we've seen throughout this course, Kotlin is a powerful and flexible language designed for building modern applications across a variety of domains.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=11)** Language features such as top-level and higher order functions, default parameter values and data and sealed classes provide first class solutions to some of the most common programming problems.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=23)** As you continue on with Kotlin, there are many other great resources out there.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=28)** Be sure to check out Kotlin's "Getting Started" guide, the Kotlin org on GitHub, or work through the Kotlin Koans for more practice.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=39)** You should now have the tools you need to start building complete applications with Kotlin.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=45)** For inspiration on where to apply those skills, explore the Kotlin laying website for more information on how to use Kotlin to build mobile, server, browser, and even multi-platform applications.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-functions-collections-and-i-o/next-steps-14803698?u=76281980&t=58)** There's plenty more to learn about Kotlin, but hopefully this course has convinced you to try Kotlin for your a next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (10), data (1), [[Programming]] (1), [[GitHub]] (1), next (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/kotlin-essential-training-functions-collections-and-io-3008787)

## Skills Covered

- Kotlin

## Path Context

### In [[Kotlin Professional Certificate by JetBrains]]
**1 of 4** | [[Kotlin Essential Training- Object-Oriented and Async Code]] →

## Part of

- [[Kotlin Professional Certificate by JetBrains]]

## Appears In

- [[Kotlin Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Exploring Ktor with Kotlin Multiplatform and Compose]] — Kotlin
- [[Kotlin Multiplatform Development]] — Kotlin
- [[Kotlin Essential Training- Object-Oriented and Async Code]] — Kotlin

---

[↑ Back to top](#)